(e.exports = s), (s.default = s), (s.stable = c), (s.stableStringify = c);
var t = "[...]",
    n = "[Circular]",
    r = [],
    i = [];
function a() {
    return { depthLimit: Number.MAX_SAFE_INTEGER, edgesLimit: Number.MAX_SAFE_INTEGER };
}
function s(e, t, n, s) {
    void 0 === s && (s = a()), l(e, "", 0, [], void 0, 0, s);
    try {
        o = 0 === i.length ? JSON.stringify(e, t, n) : JSON.stringify(e, _(t), n);
    } catch (e) {
        return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
    } finally {
        for (; 0 !== r.length; ) {
            var o,
                u = r.pop();
            4 === u.length ? Object.defineProperty(u[0], u[1], u[3]) : (u[0][u[1]] = u[2]);
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
function l(e, r, i, a, s, u, c) {
    if (((u += 1), "object" == typeof e && null !== e)) {
        for (d = 0; d < a.length; d++) if (a[d] === e) return void o(n, e, r, s);
        if ((void 0 !== c.depthLimit && u > c.depthLimit) || (void 0 !== c.edgesLimit && i + 1 > c.edgesLimit))
            return void o(t, e, r, s);
        if ((a.push(e), Array.isArray(e))) for (d = 0; d < e.length; d++) l(e[d], d, d, a, e, u, c);
        else {
            var d,
                _ = Object.keys(e);
            for (d = 0; d < _.length; d++) {
                var f = _[d];
                l(e[f], f, d, a, e, u, c);
            }
        }
        a.pop();
    }
}
function u(e, t) {
    return e < t ? -1 : +(e > t);
}
function c(e, t, n, s) {
    void 0 === s && (s = a());
    var o,
        l = d(e, "", 0, [], void 0, 0, s) || e;
    try {
        o = 0 === i.length ? JSON.stringify(l, t, n) : JSON.stringify(l, _(t), n);
    } catch (e) {
        return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
    } finally {
        for (; 0 !== r.length; ) {
            var u = r.pop();
            4 === u.length ? Object.defineProperty(u[0], u[1], u[3]) : (u[0][u[1]] = u[2]);
        }
    }
    return o;
}
function d(e, i, a, s, l, c, _) {
    if (((c += 1), "object" == typeof e && null !== e)) {
        for (f = 0; f < s.length; f++) if (s[f] === e) return void o(n, e, i, l);
        try {
            if ("function" == typeof e.toJSON) return;
        } catch (e) {
            return;
        }
        if ((void 0 !== _.depthLimit && c > _.depthLimit) || (void 0 !== _.edgesLimit && a + 1 > _.edgesLimit))
            return void o(t, e, i, l);
        if ((s.push(e), Array.isArray(e))) for (f = 0; f < e.length; f++) d(e[f], f, f, s, e, c, _);
        else {
            var f,
                p = {},
                h = Object.keys(e).sort(u);
            for (f = 0; f < h.length; f++) {
                var m = h[f];
                d(e[m], m, f, s, e, c, _), (p[m] = e[m]);
            }
            if (void 0 === l) return p;
            r.push([l, i, e]), (l[i] = p);
        }
        s.pop();
    }
}
function _(e) {
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
