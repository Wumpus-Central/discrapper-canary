(e.exports = o), (o.default = o), (o.stable = u), (o.stableStringify = u);
var t = '[...]',
    n = '[Circular]',
    r = [],
    i = [];
function a() {
    return {
        depthLimit: Number.MAX_SAFE_INTEGER,
        edgesLimit: Number.MAX_SAFE_INTEGER
    };
}
function o(e, t, n, o) {
    void 0 === o && (o = a()), l(e, '', 0, [], void 0, 0, o);
    try {
        s = 0 === i.length ? JSON.stringify(e, t, n) : JSON.stringify(e, _(t), n);
    } catch (e) {
        return JSON.stringify('[unable to serialize, circular reference is too complex to analyze]');
    } finally {
        for (; 0 !== r.length; ) {
            var s,
                c = r.pop();
            4 === c.length ? Object.defineProperty(c[0], c[1], c[3]) : (c[0][c[1]] = c[2]);
        }
    }
    return s;
}
function s(e, t, n, a) {
    var o = Object.getOwnPropertyDescriptor(a, n);
    void 0 !== o.get ? (o.configurable ? (Object.defineProperty(a, n, { value: e }), r.push([a, n, t, o])) : i.push([t, n, e])) : ((a[n] = e), r.push([a, n, t]));
}
function l(e, r, i, a, o, c, u) {
    if (((c += 1), 'object' == typeof e && null !== e)) {
        for (d = 0; d < a.length; d++) if (a[d] === e) return void s(n, e, r, o);
        if ((void 0 !== u.depthLimit && c > u.depthLimit) || (void 0 !== u.edgesLimit && i + 1 > u.edgesLimit)) return void s(t, e, r, o);
        if ((a.push(e), Array.isArray(e))) for (d = 0; d < e.length; d++) l(e[d], d, d, a, e, c, u);
        else {
            var d,
                _ = Object.keys(e);
            for (d = 0; d < _.length; d++) {
                var f = _[d];
                l(e[f], f, d, a, e, c, u);
            }
        }
        a.pop();
    }
}
function c(e, t) {
    return e < t ? -1 : +(e > t);
}
function u(e, t, n, o) {
    void 0 === o && (o = a());
    var s,
        l = d(e, '', 0, [], void 0, 0, o) || e;
    try {
        s = 0 === i.length ? JSON.stringify(l, t, n) : JSON.stringify(l, _(t), n);
    } catch (e) {
        return JSON.stringify('[unable to serialize, circular reference is too complex to analyze]');
    } finally {
        for (; 0 !== r.length; ) {
            var c = r.pop();
            4 === c.length ? Object.defineProperty(c[0], c[1], c[3]) : (c[0][c[1]] = c[2]);
        }
    }
    return s;
}
function d(e, i, a, o, l, u, _) {
    if (((u += 1), 'object' == typeof e && null !== e)) {
        for (f = 0; f < o.length; f++) if (o[f] === e) return void s(n, e, i, l);
        try {
            if ('function' == typeof e.toJSON) return;
        } catch (e) {
            return;
        }
        if ((void 0 !== _.depthLimit && u > _.depthLimit) || (void 0 !== _.edgesLimit && a + 1 > _.edgesLimit)) return void s(t, e, i, l);
        if ((o.push(e), Array.isArray(e))) for (f = 0; f < e.length; f++) d(e[f], f, f, o, e, u, _);
        else {
            var f,
                p = {},
                h = Object.keys(e).sort(c);
            for (f = 0; f < h.length; f++) {
                var m = h[f];
                d(e[m], m, f, o, e, u, _), (p[m] = e[m]);
            }
            if (void 0 === l) return p;
            r.push([l, i, e]), (l[i] = p);
        }
        o.pop();
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
