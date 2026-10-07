((e.exports = a), (a.default = a), (a.stable = u), (a.stableStringify = u));
var t = "[...]",
    r = "[Circular]",
    n = [],
    i = [];
function o() {
    return { depthLimit: Number.MAX_SAFE_INTEGER, edgesLimit: Number.MAX_SAFE_INTEGER };
}
function a(e, a, l, u) {
    (void 0 === u && (u = o()),
        (function e(n, i, o, a, l, u, c) {
            if (((u += 1), "object" == typeof n && null !== n)) {
                for (f = 0; f < a.length; f++) if (a[f] === n) return void s(r, n, i, l);
                if ((void 0 !== c.depthLimit && u > c.depthLimit) || (void 0 !== c.edgesLimit && o + 1 > c.edgesLimit))
                    return void s(t, n, i, l);
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
        })(e, "", 0, [], void 0, 0, u));
    try {
        f = 0 === i.length ? JSON.stringify(e, a, l) : JSON.stringify(e, c(a), l);
    } catch (e) {
        return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
    } finally {
        for (; 0 !== n.length;) {
            var f,
                p = n.pop();
            4 === p.length ? Object.defineProperty(p[0], p[1], p[3]) : (p[0][p[1]] = p[2]);
        }
    }
    return f;
}
function s(e, t, r, o) {
    var a = Object.getOwnPropertyDescriptor(o, r);
    void 0 !== a.get
        ? a.configurable
            ? (Object.defineProperty(o, r, { value: e }), n.push([o, r, t, a]))
            : i.push([t, r, e])
        : ((o[r] = e), n.push([o, r, t]));
}
function l(e, t) {
    return e < t ? -1 : +(e > t);
}
function u(e, a, u, f) {
    void 0 === f && (f = o());
    var p,
        d =
            (function e(i, o, a, u, c, f, p) {
                if (((f += 1), "object" == typeof i && null !== i)) {
                    for (d = 0; d < u.length; d++) if (u[d] === i) return void s(r, i, o, c);
                    try {
                        if ("function" == typeof i.toJSON) return;
                    } catch (e) {
                        return;
                    }
                    if (
                        (void 0 !== p.depthLimit && f > p.depthLimit) ||
                        (void 0 !== p.edgesLimit && a + 1 > p.edgesLimit)
                    )
                        return void s(t, i, o, c);
                    if ((u.push(i), Array.isArray(i))) for (d = 0; d < i.length; d++) e(i[d], d, d, u, i, f, p);
                    else {
                        var d,
                            h = {},
                            m = Object.keys(i).sort(l);
                        for (d = 0; d < m.length; d++) {
                            var v = m[d];
                            (e(i[v], v, d, u, i, f, p), (h[v] = i[v]));
                        }
                        if (void 0 === c) return h;
                        (n.push([c, o, i]), (c[o] = h));
                    }
                    u.pop();
                }
            })(e, "", 0, [], void 0, 0, f) || e;
    try {
        p = 0 === i.length ? JSON.stringify(d, a, u) : JSON.stringify(d, c(a), u);
    } catch (e) {
        return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
    } finally {
        for (; 0 !== n.length;) {
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
            if (i.length > 0)
                for (var n = 0; n < i.length; n++) {
                    var o = i[n];
                    if (o[1] === t && o[0] === r) {
                        ((r = o[2]), i.splice(n, 1));
                        break;
                    }
                }
            return e.call(this, t, r);
        }
    );
}
