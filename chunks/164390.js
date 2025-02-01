(e.exports = s), (s.default = s), (s.stable = c), (s.stableStringify = c);
var t = '[...]',
    n = '[Circular]',
    i = [],
    r = [];
function a() {
    return {
        depthLimit: Number.MAX_SAFE_INTEGER,
        edgesLimit: Number.MAX_SAFE_INTEGER
    };
}
function s(e, t, n, s) {
    void 0 === s && (s = a()), l(e, '', 0, [], void 0, 0, s);
    try {
        o = 0 === r.length ? JSON.stringify(e, t, n) : JSON.stringify(e, f(t), n);
    } catch (e) {
        return JSON.stringify('[unable to serialize, circular reference is too complex to analyze]');
    } finally {
        for (; 0 !== i.length; ) {
            var o,
                u = i.pop();
            4 === u.length ? Object.defineProperty(u[0], u[1], u[3]) : (u[0][u[1]] = u[2]);
        }
    }
    return o;
}
function o(e, t, n, a) {
    var s = Object.getOwnPropertyDescriptor(a, n);
    void 0 !== s.get ? (s.configurable ? (Object.defineProperty(a, n, { value: e }), i.push([a, n, t, s])) : r.push([t, n, e])) : ((a[n] = e), i.push([a, n, t]));
}
function l(e, i, r, a, s, u, c) {
    if (((u += 1), 'object' == typeof e && null !== e)) {
        for (d = 0; d < a.length; d++)
            if (a[d] === e) {
                o(n, e, i, s);
                return;
            }
        if ((void 0 !== c.depthLimit && u > c.depthLimit) || (void 0 !== c.edgesLimit && r + 1 > c.edgesLimit)) {
            o(t, e, i, s);
            return;
        }
        if ((a.push(e), Array.isArray(e))) for (d = 0; d < e.length; d++) l(e[d], d, d, a, e, u, c);
        else {
            var d,
                f = Object.keys(e);
            for (d = 0; d < f.length; d++) {
                var _ = f[d];
                l(e[_], _, d, a, e, u, c);
            }
        }
        a.pop();
    }
}
function u(e, t) {
    return e < t ? -1 : e > t ? 1 : 0;
}
function c(e, t, n, s) {
    void 0 === s && (s = a());
    var o,
        l = d(e, '', 0, [], void 0, 0, s) || e;
    try {
        o = 0 === r.length ? JSON.stringify(l, t, n) : JSON.stringify(l, f(t), n);
    } catch (e) {
        return JSON.stringify('[unable to serialize, circular reference is too complex to analyze]');
    } finally {
        for (; 0 !== i.length; ) {
            var u = i.pop();
            4 === u.length ? Object.defineProperty(u[0], u[1], u[3]) : (u[0][u[1]] = u[2]);
        }
    }
    return o;
}
function d(e, r, a, s, l, c, f) {
    if (((c += 1), 'object' == typeof e && null !== e)) {
        for (_ = 0; _ < s.length; _++)
            if (s[_] === e) {
                o(n, e, r, l);
                return;
            }
        try {
            if ('function' == typeof e.toJSON) return;
        } catch (e) {
            return;
        }
        if ((void 0 !== f.depthLimit && c > f.depthLimit) || (void 0 !== f.edgesLimit && a + 1 > f.edgesLimit)) {
            o(t, e, r, l);
            return;
        }
        if ((s.push(e), Array.isArray(e))) for (_ = 0; _ < e.length; _++) d(e[_], _, _, s, e, c, f);
        else {
            var _,
                p = {},
                h = Object.keys(e).sort(u);
            for (_ = 0; _ < h.length; _++) {
                var m = h[_];
                d(e[m], m, _, s, e, c, f), (p[m] = e[m]);
            }
            if (void 0 === l) return p;
            i.push([l, r, e]), (l[r] = p);
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
            if (r.length > 0)
                for (var i = 0; i < r.length; i++) {
                    var a = r[i];
                    if (a[1] === t && a[0] === n) {
                        (n = a[2]), r.splice(i, 1);
                        break;
                    }
                }
            return e.call(this, t, n);
        }
    );
}
