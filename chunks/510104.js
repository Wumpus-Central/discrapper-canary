r.d(n, {
    Z: function () {
        return p;
    }
});
var i = r(685516),
    a = r(285363),
    o = r(175922),
    s = r(406434),
    l = r(6138),
    u = r(740078),
    c = r(882159),
    d = r(544338),
    f = r(581206);
function p(e, n) {
    void 0 === n && (n = {});
    var r = n,
        p = r.placement,
        h = void 0 === p ? e.placement : p,
        _ = r.strategy,
        m = void 0 === _ ? e.strategy : _,
        g = r.boundary,
        E = void 0 === g ? u.zV : g,
        v = r.rootBoundary,
        y = void 0 === v ? u.Pj : v,
        b = r.elementContext,
        I = void 0 === b ? u.k5 : b,
        T = r.altBoundary,
        S = void 0 !== T && T,
        A = r.padding,
        C = void 0 === A ? 0 : A,
        N = (0, d.Z)('number' != typeof C ? C : (0, f.Z)(C, u.mv)),
        R = I === u.k5 ? u.YP : u.k5,
        O = e.rects.popper,
        D = e.elements[S ? R : I],
        L = (0, i.Z)((0, c.kK)(D) ? D : D.contextElement || (0, a.Z)(e.elements.popper), E, y, m),
        x = (0, o.Z)(e.elements.reference),
        w = (0, s.Z)({
            reference: x,
            element: O,
            strategy: 'absolute',
            placement: h
        }),
        P = (0, l.Z)(Object.assign({}, O, w)),
        M = I === u.k5 ? P : x,
        k = {
            top: L.top - M.top + N.top,
            bottom: M.bottom - L.bottom + N.bottom,
            left: L.left - M.left + N.left,
            right: M.right - L.right + N.right
        },
        U = e.modifiersData.offset;
    if (I === u.k5 && U) {
        var B = U[h];
        Object.keys(k).forEach(function (e) {
            var n = [u.F2, u.I].indexOf(e) >= 0 ? 1 : -1,
                r = [u.we, u.I].indexOf(e) >= 0 ? 'y' : 'x';
            k[e] += B[r] * n;
        });
    }
    return k;
}
