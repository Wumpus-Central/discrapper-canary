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
        _ = void 0 === f ? e.placement : f,
        p = n.strategy,
        h = void 0 === p ? e.strategy : p,
        m = n.boundary,
        g = void 0 === m ? l.zV : m,
        E = n.rootBoundary,
        b = void 0 === E ? l.Pj : E,
        y = n.elementContext,
        O = void 0 === y ? l.k5 : y,
        v = n.altBoundary,
        I = void 0 !== v && v,
        T = n.padding,
        S = void 0 === T ? 0 : T,
        A = (0, u.Z)('number' != typeof S ? S : (0, d.Z)(S, l.mv)),
        N = O === l.k5 ? l.YP : l.k5,
        C = e.rects.popper,
        R = e.elements[I ? N : O],
        P = (0, r.Z)((0, c.kK)(R) ? R : R.contextElement || (0, i.Z)(e.elements.popper), g, b, h),
        w = (0, a.Z)(e.elements.reference),
        D = (0, o.Z)({
            reference: w,
            element: C,
            strategy: 'absolute',
            placement: _
        }),
        L = (0, s.Z)(Object.assign({}, C, D)),
        x = O === l.k5 ? L : w,
        k = {
            top: P.top - x.top + A.top,
            bottom: x.bottom - P.bottom + A.bottom,
            left: P.left - x.left + A.left,
            right: x.right - P.right + A.right
        },
        M = e.modifiersData.offset;
    if (O === l.k5 && M) {
        var j = M[_];
        Object.keys(k).forEach(function (e) {
            var t = [l.F2, l.I].indexOf(e) >= 0 ? 1 : -1,
                n = [l.we, l.I].indexOf(e) >= 0 ? 'y' : 'x';
            k[e] += j[n] * t;
        });
    }
    return k;
}
