n.d(t, { Z: () => d });
var r = n(244287),
    i = n(126387),
    o = n(885952),
    a = n(510104),
    s = n(891734),
    l = n(740078),
    c = n(632471);
function u(e) {
    if ((0, i.Z)(e) === l.d7) return [];
    var t = (0, r.Z)(e);
    return [(0, o.Z)(e), t, (0, o.Z)(t)];
}
let d = {
    name: 'flip',
    enabled: !0,
    phase: 'main',
    fn: function (e) {
        var t = e.state,
            n = e.options,
            o = e.name;
        if (!t.modifiersData[o]._skip) {
            for (
                var d = n.mainAxis,
                    f = void 0 === d || d,
                    _ = n.altAxis,
                    p = void 0 === _ || _,
                    h = n.fallbackPlacements,
                    m = n.padding,
                    g = n.boundary,
                    E = n.rootBoundary,
                    b = n.altBoundary,
                    y = n.flipVariations,
                    O = void 0 === y || y,
                    v = n.allowedAutoPlacements,
                    I = t.options.placement,
                    S = (0, i.Z)(I),
                    T = S === I,
                    A = h || (T || !O ? [(0, r.Z)(I)] : u(I)),
                    N = [I].concat(A).reduce(function (e, n) {
                        return e.concat(
                            (0, i.Z)(n) === l.d7
                                ? (0, s.Z)(t, {
                                      placement: n,
                                      boundary: g,
                                      rootBoundary: E,
                                      padding: m,
                                      flipVariations: O,
                                      allowedAutoPlacements: v
                                  })
                                : n
                        );
                    }, []),
                    C = t.rects.reference,
                    R = t.rects.popper,
                    P = new Map(),
                    w = !0,
                    D = N[0],
                    L = 0;
                L < N.length;
                L++
            ) {
                var x = N[L],
                    M = (0, i.Z)(x),
                    k = (0, c.Z)(x) === l.BL,
                    j = [l.we, l.I].indexOf(M) >= 0,
                    U = j ? 'width' : 'height',
                    G = (0, a.Z)(t, {
                        placement: x,
                        boundary: g,
                        rootBoundary: E,
                        altBoundary: b,
                        padding: m
                    }),
                    B = j ? (k ? l.F2 : l.t$) : k ? l.I : l.we;
                C[U] > R[U] && (B = (0, r.Z)(B));
                var V = (0, r.Z)(B),
                    F = [];
                if (
                    (f && F.push(G[M] <= 0),
                    p && F.push(G[B] <= 0, G[V] <= 0),
                    F.every(function (e) {
                        return e;
                    }))
                ) {
                    (D = x), (w = !1);
                    break;
                }
                P.set(x, F);
            }
            if (w)
                for (
                    var Z = O ? 3 : 1,
                        H = function (e) {
                            var t = N.find(function (t) {
                                var n = P.get(t);
                                if (n)
                                    return n.slice(0, e).every(function (e) {
                                        return e;
                                    });
                            });
                            if (t) return (D = t), 'break';
                        },
                        Y = Z;
                    Y > 0 && 'break' !== H(Y);
                    Y--
                );
            t.placement !== D && ((t.modifiersData[o]._skip = !0), (t.placement = D), (t.reset = !0));
        }
    },
    requiresIfExists: ['offset'],
    data: { _skip: !1 }
};
