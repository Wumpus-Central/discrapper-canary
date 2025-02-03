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
        b = n.altBoundary,
        T = void 0 !== b && b,
        S = n.padding,
        A = void 0 === S ? 0 : S,
        N = (0, c.Z)('number' != typeof A ? A : (0, d.Z)(A, l.mv)),
        C = I === l.k5 ? l.YP : l.k5,
        R = e.rects.popper,
        O = e.elements[T ? C : I],
        D = (0, i.Z)((0, u.kK)(O) ? O : O.contextElement || (0, r.Z)(e.elements.popper), g, v, h),
        x = (0, a.Z)(e.elements.reference),
        L = (0, s.Z)({
            reference: x,
            element: R,
            strategy: 'absolute',
            placement: _
        }),
        P = (0, o.Z)(Object.assign({}, R, L)),
        w = I === l.k5 ? P : x,
        M = {
            top: D.top - w.top + N.top,
            bottom: w.bottom - D.bottom + N.bottom,
            left: D.left - w.left + N.left,
            right: w.right - D.right + N.right
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
