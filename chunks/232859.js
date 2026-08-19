(e.exports = a), (a.default = a), (a.stable = u), (a.stableStringify = u);
var t = "[...]",
    r = "[Circular]",
    n = [],
    o = [];
function i() {
    return { depthLimit: Number.MAX_SAFE_INTEGER, edgesLimit: Number.MAX_SAFE_INTEGER };
}
function a(e, a, l, u) {
    void 0 === u && (u = i()),
        (function e(n, o, i, a, l, u, c) {
            if (((u += 1), "object" == typeof n && null !== n)) {
                for (f = 0; f < a.length; f++) if (a[f] === n) return void s(r, n, o, l);
                if ((void 0 !== c.depthLimit && u > c.depthLimit) || (void 0 !== c.edgesLimit && i + 1 > c.edgesLimit))
                    return void s(t, n, o, l);
                if ((a.push(n), Array.isArray(n))) for (f = 0; f < n.length; f++) e(n[f], f, f, a, n, u, c);
                else {
                    var f,
                        p = Object.keys(n);
                    for (f = 0; f < p.length; f++) {
                        var d = p[f];
                        e(n[d], d, f, a, n, u, c);
                    }
                }
                a.pop();
            }
        })(e, "", 0, [], void 0, 0, u);
    try {
        f = 0 === o.length ? JSON.stringify(e, a, l) : JSON.stringify(e, c(a), l);
    } catch (e) {
        return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
    } finally {
        for (; 0 !== n.length; ) {
            var f,
                p = n.pop();
            4 === p.length ? Object.defineProperty(p[0], p[1], p[3]) : (p[0][p[1]] = p[2]);
        }
    }
    return f;
}
function s(e, t, r, i) {
    var a = Object.getOwnPropertyDescriptor(i, r);
    void 0 !== a.get
        ? a.configurable
            ? (Object.defineProperty(i, r, { value: e }), n.push([i, r, t, a]))
            : o.push([t, r, e])
        : ((i[r] = e), n.push([i, r, t]));
}
function l(e, t) {
    return e < t ? -1 : +(e > t);
}
function u(e, a, u, f) {
    void 0 === f && (f = i());
    var p,
        d =
            (function e(o, i, a, u, c, f, p) {
                if (((f += 1), "object" == typeof o && null !== o)) {
                    for (d = 0; d < u.length; d++) if (u[d] === o) return void s(r, o, i, c);
                    try {
                        if ("function" == typeof o.toJSON) return;
                    } catch (e) {
                        return;
                    }
                    if (
                        (void 0 !== p.depthLimit && f > p.depthLimit) ||
                        (void 0 !== p.edgesLimit && a + 1 > p.edgesLimit)
                    )
                        return void s(t, o, i, c);
                    if ((u.push(o), Array.isArray(o))) for (d = 0; d < o.length; d++) e(o[d], d, d, u, o, f, p);
                    else {
                        var d,
                            h = {},
                            m = Object.keys(o).sort(l);
                        for (d = 0; d < m.length; d++) {
                            var v = m[d];
                            e(o[v], v, d, u, o, f, p), (h[v] = o[v]);
                        }
                        if (void 0 === c) return h;
                        n.push([c, i, o]), (c[i] = h);
                    }
                    u.pop();
                }
            })(e, "", 0, [], void 0, 0, f) || e;
    try {
        p = 0 === o.length ? JSON.stringify(d, a, u) : JSON.stringify(d, c(a), u);
    } catch (e) {
        return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
    } finally {
        for (; 0 !== n.length; ) {
            var h = n.pop();
            4 === h.length ? Object.defineProperty(h[0], h[1], h[3]) : (h[0][h[1]] = h[2]);
        }
    }
    return p;
}
function c(e) {
    return (
        (e =
            void 0 !== e
                ? e
                : function (e, t) {
                      return t;
                  }),
        function (t, r) {
            if (o.length > 0)
                for (var n = 0; n < o.length; n++) {
                    var i = o[n];
                    if (i[1] === t && i[0] === r) {
                        (r = i[2]), o.splice(n, 1);
                        break;
                    }
                }
            return e.call(this, t, r);
        }
    );
}
