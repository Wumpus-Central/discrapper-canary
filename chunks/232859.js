(e.exports = a), (a.default = a), (a.stable = u), (a.stableStringify = u);
var t = "[...]",
    n = "[Circular]",
    r = [],
    i = [];
function s() {
    return { depthLimit: Number.MAX_SAFE_INTEGER, edgesLimit: Number.MAX_SAFE_INTEGER };
}
function a(e, a, l, u) {
    void 0 === u && (u = s()),
        (function e(r, i, s, a, l, u, d) {
            if (((u += 1), "object" == typeof r && null !== r)) {
                for (c = 0; c < a.length; c++) if (a[c] === r) return void o(n, r, i, l);
                if ((void 0 !== d.depthLimit && u > d.depthLimit) || (void 0 !== d.edgesLimit && s + 1 > d.edgesLimit))
                    return void o(t, r, i, l);
                if ((a.push(r), Array.isArray(r))) for (c = 0; c < r.length; c++) e(r[c], c, c, a, r, u, d);
                else {
                    var c,
                        _ = Object.keys(r);
                    for (c = 0; c < _.length; c++) {
                        var f = _[c];
                        e(r[f], f, c, a, r, u, d);
                    }
                }
                a.pop();
            }
        })(e, "", 0, [], void 0, 0, u);
    try {
        c = 0 === i.length ? JSON.stringify(e, a, l) : JSON.stringify(e, d(a), l);
    } catch (e) {
        return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
    } finally {
        for (; 0 !== r.length; ) {
            var c,
                _ = r.pop();
            4 === _.length ? Object.defineProperty(_[0], _[1], _[3]) : (_[0][_[1]] = _[2]);
        }
    }
    return c;
}
function o(e, t, n, s) {
    var a = Object.getOwnPropertyDescriptor(s, n);
    void 0 !== a.get
        ? a.configurable
            ? (Object.defineProperty(s, n, { value: e }), r.push([s, n, t, a]))
            : i.push([t, n, e])
        : ((s[n] = e), r.push([s, n, t]));
}
function l(e, t) {
    return e < t ? -1 : +(e > t);
}
function u(e, a, u, c) {
    void 0 === c && (c = s());
    var _,
        f =
            (function e(i, s, a, u, d, c, _) {
                if (((c += 1), "object" == typeof i && null !== i)) {
                    for (f = 0; f < u.length; f++) if (u[f] === i) return void o(n, i, s, d);
                    try {
                        if ("function" == typeof i.toJSON) return;
                    } catch (e) {
                        return;
                    }
                    if (
                        (void 0 !== _.depthLimit && c > _.depthLimit) ||
                        (void 0 !== _.edgesLimit && a + 1 > _.edgesLimit)
                    )
                        return void o(t, i, s, d);
                    if ((u.push(i), Array.isArray(i))) for (f = 0; f < i.length; f++) e(i[f], f, f, u, i, c, _);
                    else {
                        var f,
                            E = {},
                            h = Object.keys(i).sort(l);
                        for (f = 0; f < h.length; f++) {
                            var p = h[f];
                            e(i[p], p, f, u, i, c, _), (E[p] = i[p]);
                        }
                        if (void 0 === d) return E;
                        r.push([d, s, i]), (d[s] = E);
                    }
                    u.pop();
                }
            })(e, "", 0, [], void 0, 0, c) || e;
    try {
        _ = 0 === i.length ? JSON.stringify(f, a, u) : JSON.stringify(f, d(a), u);
    } catch (e) {
        return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
    } finally {
        for (; 0 !== r.length; ) {
            var E = r.pop();
            4 === E.length ? Object.defineProperty(E[0], E[1], E[3]) : (E[0][E[1]] = E[2]);
        }
    }
    return _;
}
function d(e) {
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
                    var s = i[r];
                    if (s[1] === t && s[0] === n) {
                        (n = s[2]), i.splice(r, 1);
                        break;
                    }
                }
            return e.call(this, t, n);
        }
    );
}
