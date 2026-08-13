(e.exports = a), (a.default = a), (a.stable = u), (a.stableStringify = u);
var t = "[...]",
    r = "[Circular]",
    n = [],
    i = [];
function o() {
    return { depthLimit: Number.MAX_SAFE_INTEGER, edgesLimit: Number.MAX_SAFE_INTEGER };
}
function a(e, a, l, u) {
    void 0 === u && (u = o()),
        (function e(n, i, o, a, l, u, c) {
            if (((u += 1), "object" == typeof n && null !== n)) {
                for (d = 0; d < a.length; d++) if (a[d] === n) return void s(r, n, i, l);
                if ((void 0 !== c.depthLimit && u > c.depthLimit) || (void 0 !== c.edgesLimit && o + 1 > c.edgesLimit))
                    return void s(t, n, i, l);
                if ((a.push(n), Array.isArray(n))) for (d = 0; d < n.length; d++) e(n[d], d, d, a, n, u, c);
                else {
                    var d,
                        f = Object.keys(n);
                    for (d = 0; d < f.length; d++) {
                        var p = f[d];
                        e(n[p], p, d, a, n, u, c);
                    }
                }
                a.pop();
            }
        })(e, "", 0, [], void 0, 0, u);
    try {
        d = 0 === i.length ? JSON.stringify(e, a, l) : JSON.stringify(e, c(a), l);
    } catch (e) {
        return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
    } finally {
        for (; 0 !== n.length; ) {
            var d,
                f = n.pop();
            4 === f.length ? Object.defineProperty(f[0], f[1], f[3]) : (f[0][f[1]] = f[2]);
        }
    }
    return d;
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
function u(e, a, u, d) {
    void 0 === d && (d = o());
    var f,
        p =
            (function e(i, o, a, u, c, d, f) {
                if (((d += 1), "object" == typeof i && null !== i)) {
                    for (p = 0; p < u.length; p++) if (u[p] === i) return void s(r, i, o, c);
                    try {
                        if ("function" == typeof i.toJSON) return;
                    } catch (e) {
                        return;
                    }
                    if (
                        (void 0 !== f.depthLimit && d > f.depthLimit) ||
                        (void 0 !== f.edgesLimit && a + 1 > f.edgesLimit)
                    )
                        return void s(t, i, o, c);
                    if ((u.push(i), Array.isArray(i))) for (p = 0; p < i.length; p++) e(i[p], p, p, u, i, d, f);
                    else {
                        var p,
                            h = {},
                            m = Object.keys(i).sort(l);
                        for (p = 0; p < m.length; p++) {
                            var g = m[p];
                            e(i[g], g, p, u, i, d, f), (h[g] = i[g]);
                        }
                        if (void 0 === c) return h;
                        n.push([c, o, i]), (c[o] = h);
                    }
                    u.pop();
                }
            })(e, "", 0, [], void 0, 0, d) || e;
    try {
        f = 0 === i.length ? JSON.stringify(p, a, u) : JSON.stringify(p, c(a), u);
    } catch (e) {
        return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
    } finally {
        for (; 0 !== n.length; ) {
            var h = n.pop();
            4 === h.length ? Object.defineProperty(h[0], h[1], h[3]) : (h[0][h[1]] = h[2]);
        }
    }
    return f;
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
                        (r = o[2]), i.splice(n, 1);
                        break;
                    }
                }
            return e.call(this, t, r);
        }
    );
}
