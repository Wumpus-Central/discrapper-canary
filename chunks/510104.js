n.d(t, { Z: () => f });
var r = n(685516),
    i = n(285363),
    a = n(175922),
    o = n(406434),
    s = n(6138),
    l = n(740078),
    c = n(882159),
    u = n(544338),
    d = n(581206);
function f(e, t) {
    void 0 === t && (t = {});
    var n = t,
        f = n.placement,
        p = void 0 === f ? e.placement : f,
        _ = n.strategy,
        m = void 0 === _ ? e.strategy : _,
        h = n.boundary,
        g = void 0 === h ? l.zV : h,
        E = n.rootBoundary,
        b = void 0 === E ? l.Pj : E,
        y = n.elementContext,
        O = void 0 === y ? l.k5 : y,
        v = n.altBoundary,
        S = void 0 !== v && v,
        I = n.padding,
        T = void 0 === I ? 0 : I,
        A = (0, u.Z)("number" != typeof T ? T : (0, d.Z)(T, l.mv)),
        C = O === l.k5 ? l.YP : l.k5,
        N = e.rects.popper,
        P = e.elements[S ? C : O],
        R = (0, r.Z)((0, c.kK)(P) ? P : P.contextElement || (0, i.Z)(e.elements.popper), g, b, m),
        w = (0, a.Z)(e.elements.reference),
        D = (0, o.Z)({
            reference: w,
            element: N,
            strategy: "absolute",
            placement: p,
        }),
        x = (0, s.Z)(Object.assign({}, N, D)),
        L = O === l.k5 ? x : w,
        j = {
            top: R.top - L.top + A.top,
            bottom: L.bottom - R.bottom + A.bottom,
            left: R.left - L.left + A.left,
            right: L.right - R.right + A.right,
        },
        M = e.modifiersData.offset;
    if (O === l.k5 && M) {
        var k = M[p];
        Object.keys(j).forEach(function (e) {
            var t = [l.F2, l.I].indexOf(e) >= 0 ? 1 : -1,
                n = [l.we, l.I].indexOf(e) >= 0 ? "y" : "x";
            j[e] += k[n] * t;
        });
    }
    return j;
}
