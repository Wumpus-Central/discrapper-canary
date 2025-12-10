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
                    p = n.altAxis,
                    _ = void 0 === p || p,
                    m = n.fallbackPlacements,
                    h = n.padding,
                    g = n.boundary,
                    E = n.rootBoundary,
                    b = n.altBoundary,
                    y = n.flipVariations,
                    O = void 0 === y || y,
                    v = n.allowedAutoPlacements,
                    S = t.options.placement,
                    I = (0, i.Z)(S),
                    T = I === S,
                    C = m || (T || !O ? [(0, r.Z)(S)] : u(S)),
                    A = [S].concat(C).reduce(function (e, n) {
                        return e.concat(
                            (0, i.Z)(n) === l.d7
                                ? (0, s.Z)(t, {
                                      placement: n,
                                      boundary: g,
                                      rootBoundary: E,
                                      padding: h,
                                      flipVariations: O,
                                      allowedAutoPlacements: v,
                                  })
                                : n,
                        );
                    }, []),
                    N = t.rects.reference,
                    P = t.rects.popper,
                    R = new Map(),
                    D = !0,
                    w = A[0],
                    x = 0;
                x < A.length;
                x++
            ) {
                var L = A[x],
                    j = (0, i.Z)(L),
                    M = (0, c.Z)(L) === l.BL,
                    k = [l.we, l.I].indexOf(j) >= 0,
                    U = k ? "width" : "height",
                    G = (0, o.Z)(t, {
                        placement: L,
                        boundary: g,
                        rootBoundary: E,
                        altBoundary: b,
                        padding: h,
                    }),
                    Z = k ? (M ? l.F2 : l.t$) : M ? l.I : l.we;
                N[U] > P[U] && (Z = (0, r.Z)(Z));
                var B = (0, r.Z)(Z),
                    F = [];
                if (
                    (f && F.push(G[j] <= 0),
                    _ && F.push(G[Z] <= 0, G[B] <= 0),
                    F.every(function (e) {
                        return e;
                    }))
                ) {
                    (w = L), (D = !1);
                    break;
                }
                R.set(L, F);
            }
            if (D)
                for (
                    var V = O ? 3 : 1,
                        H = function (e) {
                            var t = A.find(function (t) {
                                var n = R.get(t);
                                if (n)
                                    return n.slice(0, e).every(function (e) {
                                        return e;
                                    });
                            });
                            if (t) return (w = t), "break";
                        },
                        Y = V;
                    Y > 0 && "break" !== H(Y);
                    Y--
                );
            t.placement !== w && ((t.modifiersData[a]._skip = !0), (t.placement = w), (t.reset = !0));
        }
    },
    requiresIfExists: ["offset"],
    data: { _skip: !1 },
};
