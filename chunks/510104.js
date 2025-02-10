n.d(t, { Z: () => f });
var i = n(685516),
    r = n(285363),
    a = n(175922),
    s = n(406434),
    o = n(6138),
    l = n(740078),
    u = n(882159),
    c = n(544338),
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
        v = void 0 === E ? l.Pj : E,
        y = n.elementContext,
        I = void 0 === y ? l.k5 : y,
        T = n.altBoundary,
        b = void 0 !== T && T,
        S = n.padding,
        A = void 0 === S ? 0 : S,
        N = (0, c.Z)('number' != typeof A ? A : (0, d.Z)(A, l.mv)),
        C = I === l.k5 ? l.YP : l.k5,
        R = e.rects.popper,
        O = e.elements[b ? C : I],
        D = (0, i.Z)((0, u.kK)(O) ? O : O.contextElement || (0, r.Z)(e.elements.popper), g, v, h),
        L = (0, a.Z)(e.elements.reference),
        x = (0, s.Z)({
            reference: L,
            element: R,
            strategy: 'absolute',
            placement: _
        }),
        w = (0, o.Z)(Object.assign({}, R, x)),
        P = I === l.k5 ? w : L,
        M = {
            top: D.top - P.top + N.top,
            bottom: P.bottom - D.bottom + N.bottom,
            left: D.left - P.left + N.left,
            right: P.right - D.right + N.right
        },
        k = e.modifiersData.offset;
    if (I === l.k5 && k) {
        var U = k[_];
        Object.keys(M).forEach(function (e) {
            var t = [l.F2, l.I].indexOf(e) >= 0 ? 1 : -1,
                n = [l.we, l.I].indexOf(e) >= 0 ? 'y' : 'x';
            M[e] += U[n] * t;
        });
    }
    return M;
}
