var i = r(244287),
    a = r(126387),
    s = r(885952),
    o = r(510104),
    l = r(891734),
    u = r(740078),
    c = r(632471);
function d(e) {
    if ((0, a.Z)(e) === u.d7) return [];
    var n = (0, i.Z)(e);
    return [(0, s.Z)(e), n, (0, s.Z)(n)];
}
function f(e) {
    var n = e.state,
        r = e.options,
        s = e.name;
    if (!n.modifiersData[s]._skip) {
        for (
            var f = r.mainAxis,
                _ = void 0 === f || f,
                h = r.altAxis,
                p = void 0 === h || h,
                m = r.fallbackPlacements,
                g = r.padding,
                E = r.boundary,
                v = r.rootBoundary,
                I = r.altBoundary,
                T = r.flipVariations,
                b = void 0 === T || T,
                y = r.allowedAutoPlacements,
                S = n.options.placement,
                A = (0, a.Z)(S) === S,
                N = m || (A || !b ? [(0, i.Z)(S)] : d(S)),
                C = [S].concat(N).reduce(function (e, r) {
                    return e.concat(
                        (0, a.Z)(r) === u.d7
                            ? (0, l.Z)(n, {
                                  placement: r,
                                  boundary: E,
                                  rootBoundary: v,
                                  padding: g,
                                  flipVariations: b,
                                  allowedAutoPlacements: y
                              })
                            : r
                    );
                }, []),
                R = n.rects.reference,
                O = n.rects.popper,
                D = new Map(),
                L = !0,
                x = C[0],
                w = 0;
            w < C.length;
            w++
        ) {
            var P = C[w],
                M = (0, a.Z)(P),
                k = (0, c.Z)(P) === u.BL,
                U = [u.we, u.I].indexOf(M) >= 0,
                B = U ? 'width' : 'height',
                G = (0, o.Z)(n, {
                    placement: P,
                    boundary: E,
                    rootBoundary: v,
                    altBoundary: I,
                    padding: g
                }),
                Z = U ? (k ? u.F2 : u.t$) : k ? u.I : u.we;
            R[B] > O[B] && (Z = (0, i.Z)(Z));
            var F = (0, i.Z)(Z),
                V = [];
            if (
                (_ && V.push(G[M] <= 0),
                p && V.push(G[Z] <= 0, G[F] <= 0),
                V.every(function (e) {
                    return e;
                }))
            ) {
                (x = P), (L = !1);
                break;
            }
            D.set(P, V);
        }
        if (L) {
            for (
                var j = b ? 3 : 1,
                    H = function (e) {
                        var n = C.find(function (n) {
                            var r = D.get(n);
                            if (r)
                                return r.slice(0, e).every(function (e) {
                                    return e;
                                });
                        });
                        if (n) return (x = n), 'break';
                    },
                    Y = j;
                Y > 0 && 'break' !== H(Y);
                Y--
            );
        }
        n.placement !== x && ((n.modifiersData[s]._skip = !0), (n.placement = x), (n.reset = !0));
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
