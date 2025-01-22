var i = r(244287),
    a = r(126387),
    o = r(885952),
    s = r(510104),
    l = r(891734),
    u = r(740078),
    c = r(632471);
function d(e) {
    if ((0, a.Z)(e) === u.d7) return [];
    var n = (0, i.Z)(e);
    return [(0, o.Z)(e), n, (0, o.Z)(n)];
}
function f(e) {
    var n = e.state,
        r = e.options,
        o = e.name;
    if (!n.modifiersData[o]._skip) {
        for (
            var f = r.mainAxis,
                p = void 0 === f || f,
                h = r.altAxis,
                _ = void 0 === h || h,
                m = r.fallbackPlacements,
                g = r.padding,
                E = r.boundary,
                v = r.rootBoundary,
                y = r.altBoundary,
                b = r.flipVariations,
                I = void 0 === b || b,
                T = r.allowedAutoPlacements,
                S = n.options.placement,
                A = (0, a.Z)(S) === S,
                C = m || (A || !I ? [(0, i.Z)(S)] : d(S)),
                N = [S].concat(C).reduce(function (e, r) {
                    return e.concat(
                        (0, a.Z)(r) === u.d7
                            ? (0, l.Z)(n, {
                                  placement: r,
                                  boundary: E,
                                  rootBoundary: v,
                                  padding: g,
                                  flipVariations: I,
                                  allowedAutoPlacements: T
                              })
                            : r
                    );
                }, []),
                R = n.rects.reference,
                O = n.rects.popper,
                D = new Map(),
                x = !0,
                L = N[0],
                w = 0;
            w < N.length;
            w++
        ) {
            var P = N[w],
                M = (0, a.Z)(P),
                k = (0, c.Z)(P) === u.BL,
                U = [u.we, u.I].indexOf(M) >= 0,
                B = U ? 'width' : 'height',
                G = (0, s.Z)(n, {
                    placement: P,
                    boundary: E,
                    rootBoundary: v,
                    altBoundary: y,
                    padding: g
                }),
                Z = U ? (k ? u.F2 : u.t$) : k ? u.I : u.we;
            R[B] > O[B] && (Z = (0, i.Z)(Z));
            var F = (0, i.Z)(Z),
                V = [];
            if (
                (p && V.push(G[M] <= 0),
                _ && V.push(G[Z] <= 0, G[F] <= 0),
                V.every(function (e) {
                    return e;
                }))
            ) {
                (L = P), (x = !1);
                break;
            }
            D.set(P, V);
        }
        if (x) {
            for (
                var j = I ? 3 : 1,
                    H = function (e) {
                        var n = N.find(function (n) {
                            var r = D.get(n);
                            if (r)
                                return r.slice(0, e).every(function (e) {
                                    return e;
                                });
                        });
                        if (n) return (L = n), 'break';
                    },
                    Y = j;
                Y > 0 && 'break' !== H(Y);
                Y--
            );
        }
        n.placement !== L && ((n.modifiersData[o]._skip = !0), (n.placement = L), (n.reset = !0));
    }
}
n.Z = {
    name: 'flip',
    enabled: !0,
    phase: 'main',
    fn: f,
    requiresIfExists: ['offset'],
    data: { _skip: !1 }
};
