(e.exports = s), (s.default = s), (s.stable = d), (s.stableStringify = d);
var n = '[...]',
    r = '[Circular]',
    i = [],
    a = [];
function o() {
    return {
        depthLimit: Number.MAX_SAFE_INTEGER,
        edgesLimit: Number.MAX_SAFE_INTEGER
    };
}
function s(e, n, r, s) {
    void 0 === s && (s = o()), u(e, '', 0, [], void 0, 0, s);
    try {
        l = 0 === a.length ? JSON.stringify(e, n, r) : JSON.stringify(e, p(n), r);
    } catch (e) {
        return JSON.stringify('[unable to serialize, circular reference is too complex to analyze]');
    } finally {
        for (; 0 !== i.length; ) {
            var l,
                c = i.pop();
            4 === c.length ? Object.defineProperty(c[0], c[1], c[3]) : (c[0][c[1]] = c[2]);
        }
    }
    return l;
}
function l(e, n, r, o) {
    var s = Object.getOwnPropertyDescriptor(o, r);
    void 0 !== s.get ? (s.configurable ? (Object.defineProperty(o, r, { value: e }), i.push([o, r, n, s])) : a.push([n, r, e])) : ((o[r] = e), i.push([o, r, n]));
}
function u(e, i, a, o, s, c, d) {
    if (((c += 1), 'object' == typeof e && null !== e)) {
        for (f = 0; f < o.length; f++)
            if (o[f] === e) {
                l(r, e, i, s);
                return;
            }
        if ((void 0 !== d.depthLimit && c > d.depthLimit) || (void 0 !== d.edgesLimit && a + 1 > d.edgesLimit)) {
            l(n, e, i, s);
            return;
        }
        if ((o.push(e), Array.isArray(e))) for (f = 0; f < e.length; f++) u(e[f], f, f, o, e, c, d);
        else {
            var f,
                p = Object.keys(e);
            for (f = 0; f < p.length; f++) {
                var h = p[f];
                u(e[h], h, f, o, e, c, d);
            }
        }
        o.pop();
    }
}
function c(e, n) {
    return e < n ? -1 : e > n ? 1 : 0;
}
function d(e, n, r, s) {
    void 0 === s && (s = o());
    var l,
        u = f(e, '', 0, [], void 0, 0, s) || e;
    try {
        l = 0 === a.length ? JSON.stringify(u, n, r) : JSON.stringify(u, p(n), r);
    } catch (e) {
        return JSON.stringify('[unable to serialize, circular reference is too complex to analyze]');
    } finally {
        for (; 0 !== i.length; ) {
            var c = i.pop();
            4 === c.length ? Object.defineProperty(c[0], c[1], c[3]) : (c[0][c[1]] = c[2]);
        }
    }
    return l;
}
function f(e, a, o, s, u, d, p) {
    if (((d += 1), 'object' == typeof e && null !== e)) {
        for (h = 0; h < s.length; h++)
            if (s[h] === e) {
                l(r, e, a, u);
                return;
            }
        try {
            if ('function' == typeof e.toJSON) return;
        } catch (e) {
            return;
        }
        if ((void 0 !== p.depthLimit && d > p.depthLimit) || (void 0 !== p.edgesLimit && o + 1 > p.edgesLimit)) {
            l(n, e, a, u);
            return;
        }
        if ((s.push(e), Array.isArray(e))) for (h = 0; h < e.length; h++) f(e[h], h, h, s, e, d, p);
        else {
            var h,
                _ = {},
                m = Object.keys(e).sort(c);
            for (h = 0; h < m.length; h++) {
                var g = m[h];
                f(e[g], g, h, s, e, d, p), (_[g] = e[g]);
            }
            if (void 0 === u) return _;
            i.push([u, a, e]), (u[a] = _);
        }
        s.pop();
    }
}
function p(e) {
    return (
        (e =
            void 0 !== e
                ? e
                : function (e, n) {
                      return n;
                  }),
        function (n, r) {
            if (a.length > 0)
                for (var i = 0; i < a.length; i++) {
                    var o = a[i];
                    if (o[1] === n && o[0] === r) {
                        (r = o[2]), a.splice(i, 1);
                        break;
                    }
                }
            return e.call(this, n, r);
        }
    );
}
