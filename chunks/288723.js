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
                    b = n.allowedAutoPlacements,
                    T = t.options.placement,
                    S = (0, r.Z)(T) === T,
                    A = h || (S || !I ? [(0, i.Z)(T)] : c(T)),
                    N = [T].concat(A).reduce(function (e, n) {
                        return e.concat(
                            (0, r.Z)(n) === l.d7
                                ? (0, o.Z)(t, {
                                      placement: n,
                                      boundary: g,
                                      rootBoundary: E,
                                      padding: m,
                                      flipVariations: I,
                                      allowedAutoPlacements: b
                                  })
                                : n
                        );
                    }, []),
                    C = t.rects.reference,
                    R = t.rects.popper,
                    O = new Map(),
                    D = !0,
                    x = N[0],
                    L = 0;
                L < N.length;
                L++
            ) {
                var P = N[L],
                    w = (0, r.Z)(P),
                    M = (0, u.Z)(P) === l.BL,
                    k = [l.we, l.I].indexOf(w) >= 0,
                    U = k ? 'width' : 'height',
                    G = (0, s.Z)(t, {
                        placement: P,
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
                    (f && F.push(G[w] <= 0),
                    p && F.push(G[B] <= 0, G[Z] <= 0),
                    F.every(function (e) {
                        return e;
                    }))
                ) {
                    (x = P), (D = !1);
                    break;
                }
                O.set(P, F);
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
                            if (t) return (x = t), 'break';
                        },
                        H = V;
                    H > 0 && 'break' !== j(H);
                    H--
                );
            t.placement !== x && ((t.modifiersData[a]._skip = !0), (t.placement = x), (t.reset = !0));
        }
    },
    requiresIfExists: ['offset'],
    data: { _skip: !1 }
};
