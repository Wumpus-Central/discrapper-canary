(e.exports = s), (s.default = s), (s.stable = u), (s.stableStringify = u);
var t = "[...]",
    n = "[Circular]",
    r = [],
    i = [];
function a() {
    return {
        depthLimit: Number.MAX_SAFE_INTEGER,
        edgesLimit: Number.MAX_SAFE_INTEGER,
    };
}
function s(e, t, n, s) {
    void 0 === s && (s = a()), l(e, "", 0, [], void 0, 0, s);
    try {
        o = 0 === i.length ? JSON.stringify(e, t, n) : JSON.stringify(e, f(t), n);
    } catch (e) {
        return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
    } finally {
        for (; 0 !== r.length; ) {
            var o,
                c = r.pop();
            4 === c.length ? Object.defineProperty(c[0], c[1], c[3]) : (c[0][c[1]] = c[2]);
        }
    }
    return o;
}
function o(e, t, n, a) {
    var s = Object.getOwnPropertyDescriptor(a, n);
    void 0 !== s.get
        ? s.configurable
            ? (Object.defineProperty(a, n, { value: e }), r.push([a, n, t, s]))
            : i.push([t, n, e])
        : ((a[n] = e), r.push([a, n, t]));
}
function l(e, r, i, a, s, c, u) {
    if (((c += 1), "object" == typeof e && null !== e)) {
        for (d = 0; d < a.length; d++) if (a[d] === e) return void o(n, e, r, s);
        if ((void 0 !== u.depthLimit && c > u.depthLimit) || (void 0 !== u.edgesLimit && i + 1 > u.edgesLimit))
            return void o(t, e, r, s);
        if ((a.push(e), Array.isArray(e))) for (d = 0; d < e.length; d++) l(e[d], d, d, a, e, c, u);
        else {
            var d,
                f = Object.keys(e);
            for (d = 0; d < f.length; d++) {
                var p = f[d];
                l(e[p], p, d, a, e, c, u);
            }
        }
        a.pop();
    }
}
function c(e, t) {
    return e < t ? -1 : +(e > t);
}
function u(e, t, n, s) {
    void 0 === s && (s = a());
    var o,
        l = d(e, "", 0, [], void 0, 0, s) || e;
    try {
        o = 0 === i.length ? JSON.stringify(l, t, n) : JSON.stringify(l, f(t), n);
    } catch (e) {
        return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
    } finally {
        for (; 0 !== r.length; ) {
            var c = r.pop();
            4 === c.length ? Object.defineProperty(c[0], c[1], c[3]) : (c[0][c[1]] = c[2]);
        }
    }
    return o;
}
function d(e, i, a, s, l, u, f) {
    if (((u += 1), "object" == typeof e && null !== e)) {
        for (p = 0; p < s.length; p++) if (s[p] === e) return void o(n, e, i, l);
        try {
            if ("function" == typeof e.toJSON) return;
        } catch (e) {
            return;
        }
        if ((void 0 !== f.depthLimit && u > f.depthLimit) || (void 0 !== f.edgesLimit && a + 1 > f.edgesLimit))
            return void o(t, e, i, l);
        if ((s.push(e), Array.isArray(e))) for (p = 0; p < e.length; p++) d(e[p], p, p, s, e, u, f);
        else {
            var p,
                _ = {},
                h = Object.keys(e).sort(c);
            for (p = 0; p < h.length; p++) {
                var m = h[p];
                d(e[m], m, p, s, e, u, f), (_[m] = e[m]);
            }
            if (void 0 === l) return _;
            r.push([l, i, e]), (l[i] = _);
        }
        s.pop();
    }
}
function f(e) {
    return (
        (e =
            void 0 !== e
                ? e
                : function (e, t) {
                      return t;
                  }),
        function (t, n) {
            if (i.length > 0)
                for (var r = 0; r < i.length; r++) {
                    var a = i[r];
                    if (a[1] === t && a[0] === n) {
                        (n = a[2]), i.splice(r, 1);
                        break;
                    }
                }
            return e.call(this, t, n);
        }
    );
}
