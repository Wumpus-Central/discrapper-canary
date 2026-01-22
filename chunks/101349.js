n.d(t, {
    N: () => u,
});
var r = n(64700),
    i = n(554352),
    a = n(418034),
    s = n(542362),
    o = function () {},
    l = function () {
        return Promise.resolve(null);
    },
    c = [];

function u(e) {
    var t = e.placement,
        n = void 0 === t ? "bottom" : t,
        u = e.strategy,
        d = void 0 === u ? "absolute" : u,
        f = e.modifiers,
        p = void 0 === f ? c : f,
        _ = e.referenceElement,
        h = e.onFirstUpdate,
        m = e.innerRef,
        g = e.children,
        E = r.useContext(i.kr),
        b = r.useState(null),
        y = b[0],
        O = b[1],
        A = r.useState(null),
        v = A[0],
        S = A[1];
    r.useEffect(
        function () {
            (0, a.cZ)(m, y);
        },
        [m, y],
    );
    var I = r.useMemo(
            function () {
                return {
                    placement: n,
                    strategy: d,
                    onFirstUpdate: h,
                    modifiers: [].concat(p, [
                        {
                            name: "arrow",
                            enabled: null != v,
                            options: {
                                element: v,
                            },
                        },
                    ]),
                };
            },
            [n, d, h, p, v],
        ),
        T = (0, s.E)(_ || E, y, I),
        C = T.state,
        N = T.styles,
        R = T.forceUpdate,
        w = T.update,
        P = r.useMemo(
            function () {
                return {
                    ref: O,
                    style: N.popper,
                    placement: C ? C.placement : n,
                    hasPopperEscaped: C && C.modifiersData.hide ? C.modifiersData.hide.hasPopperEscaped : null,
                    isReferenceHidden: C && C.modifiersData.hide ? C.modifiersData.hide.isReferenceHidden : null,
                    arrowProps: {
                        style: N.arrow,
                        ref: S,
                    },
                    forceUpdate: R || o,
                    update: w || l,
                };
            },
            [O, S, n, C, N, w, R],
        );
    return (0, a.vq)(g)(P);
}
