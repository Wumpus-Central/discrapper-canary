n.d(t, { Z: () => d });
var r = n(244287),
    i = n(126387),
    a = n(885952),
    o = n(510104),
    s = n(891734),
    l = n(740078),
    c = n(632471);
function u(e) {
    if ((0, i.Z)(e) === l.d7) return [];
    var t = (0, r.Z)(e);
    return [(0, a.Z)(e), t, (0, a.Z)(t)];
}
let d = {
    name: "flip",
    enabled: !0,
    phase: "main",
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
                    b = n.altBoundary,
                    y = n.flipVariations,
                    O = void 0 === y || y,
                    v = n.allowedAutoPlacements,
                    I = t.options.placement,
                    T = (0, i.Z)(I),
                    S = T === I,
                    A = h || (S || !O ? [(0, r.Z)(I)] : u(I)),
                    C = [I].concat(A).reduce(function (e, n) {
                        return e.concat(
                            (0, i.Z)(n) === l.d7
                                ? (0, s.Z)(t, {
                                      placement: n,
                                      boundary: g,
                                      rootBoundary: E,
                                      padding: m,
                                      flipVariations: O,
                                      allowedAutoPlacements: v,
                                  })
                                : n,
                        );
                    }, []),
                    N = t.rects.reference,
                    R = t.rects.popper,
                    P = new Map(),
                    w = !0,
                    D = C[0],
                    x = 0;
                x < C.length;
                x++
            ) {
                var L = C[x],
                    j = (0, i.Z)(L),
                    M = (0, c.Z)(L) === l.BL,
                    k = [l.we, l.I].indexOf(j) >= 0,
                    U = k ? "width" : "height",
                    G = (0, o.Z)(t, {
                        placement: L,
                        boundary: g,
                        rootBoundary: E,
                        altBoundary: b,
                        padding: m,
                    }),
                    B = k ? (M ? l.F2 : l.t$) : M ? l.I : l.we;
                N[U] > R[U] && (B = (0, r.Z)(B));
                var Z = (0, r.Z)(B),
                    V = [];
                if (
                    (f && V.push(G[j] <= 0),
                    p && V.push(G[B] <= 0, G[Z] <= 0),
                    V.every(function (e) {
                        return e;
                    }))
                ) {
                    (D = L), (w = !1);
                    break;
                }
                P.set(L, V);
            }
            if (w)
                for (
                    var F = O ? 3 : 1,
                        H = function (e) {
                            var t = C.find(function (t) {
                                var n = P.get(t);
                                if (n)
                                    return n.slice(0, e).every(function (e) {
                                        return e;
                                    });
                            });
                            if (t) return (D = t), "break";
                        },
                        Y = F;
                    Y > 0 && "break" !== H(Y);
                    Y--
                );
            t.placement !== D && ((t.modifiersData[a]._skip = !0), (t.placement = D), (t.reset = !0));
        }
    },
    requiresIfExists: ["offset"],
    data: { _skip: !1 },
};
