n.d(t, { Z: () => d });
var i = n(244287),
    r = n(126387),
    a = n(885952),
    s = n(510104),
    o = n(891734),
    l = n(740078),
    u = n(632471);
function c(e) {
    if ((0, r.Z)(e) === l.d7) return [];
    var t = (0, i.Z)(e);
    return [(0, a.Z)(e), t, (0, a.Z)(t)];
}
let d = {
    name: 'flip',
    enabled: !0,
    phase: 'main',
    fn: function (e) {
        var t = e.state,
            n = e.options,
            a = e.name;
        if (!t.modifiersData[a]._skip) {
            for (
                var d = n.mainAxis,
                    f = void 0 === d || d,
                    _ = n.altAxis,
                    p = void 0 === _ || _,
                    h = n.fallbackPlacements,
                    m = n.padding,
                    g = n.boundary,
                    E = n.rootBoundary,
                    v = n.altBoundary,
                    y = n.flipVariations,
                    I = void 0 === y || y,
                    T = n.allowedAutoPlacements,
                    b = t.options.placement,
                    S = (0, r.Z)(b) === b,
                    A = h || (S || !I ? [(0, i.Z)(b)] : c(b)),
                    N = [b].concat(A).reduce(function (e, n) {
                        return e.concat(
                            (0, r.Z)(n) === l.d7
                                ? (0, o.Z)(t, {
                                      placement: n,
                                      boundary: g,
                                      rootBoundary: E,
                                      padding: m,
                                      flipVariations: I,
                                      allowedAutoPlacements: T
                                  })
                                : n
                        );
                    }, []),
                    C = t.rects.reference,
                    R = t.rects.popper,
                    O = new Map(),
                    D = !0,
                    L = N[0],
                    x = 0;
                x < N.length;
                x++
            ) {
                var w = N[x],
                    P = (0, r.Z)(w),
                    M = (0, u.Z)(w) === l.BL,
                    k = [l.we, l.I].indexOf(P) >= 0,
                    U = k ? 'width' : 'height',
                    G = (0, s.Z)(t, {
                        placement: w,
                        boundary: g,
                        rootBoundary: E,
                        altBoundary: v,
                        padding: m
                    }),
                    B = k ? (M ? l.F2 : l.t$) : M ? l.I : l.we;
                C[U] > R[U] && (B = (0, i.Z)(B));
                var Z = (0, i.Z)(B),
                    F = [];
                if (
                    (f && F.push(G[P] <= 0),
                    p && F.push(G[B] <= 0, G[Z] <= 0),
                    F.every(function (e) {
                        return e;
                    }))
                ) {
                    (L = w), (D = !1);
                    break;
                }
                O.set(w, F);
            }
            if (D)
                for (
                    var V = I ? 3 : 1,
                        j = function (e) {
                            var t = N.find(function (t) {
                                var n = O.get(t);
                                if (n)
                                    return n.slice(0, e).every(function (e) {
                                        return e;
                                    });
                            });
                            if (t) return (L = t), 'break';
                        },
                        H = V;
                    H > 0 && 'break' !== j(H);
                    H--
                );
            t.placement !== L && ((t.modifiersData[a]._skip = !0), (t.placement = L), (t.reset = !0));
        }
    },
    requiresIfExists: ['offset'],
    data: { _skip: !1 }
};
