n.d(t, { r: () => u });
var r = n(192379),
    i = n(298503),
    a = n(632590),
    o = n(283209),
    s = function () {},
    l = function () {
        return Promise.resolve(null);
    },
    c = [];
function u(e) {
    var t = e.placement,
        n = void 0 === t ? 'bottom' : t,
        u = e.strategy,
        d = void 0 === u ? 'absolute' : u,
        f = e.modifiers,
        _ = void 0 === f ? c : f,
        p = e.referenceElement,
        h = e.onFirstUpdate,
        m = e.innerRef,
        g = e.children,
        E = r.useContext(i.C8),
        b = r.useState(null),
        y = b[0],
        v = b[1],
        O = r.useState(null),
        I = O[0],
        S = O[1];
    r.useEffect(
        function () {
            (0, a.k$)(m, y);
        },
        [m, y]
    );
    var T = r.useMemo(
            function () {
                return {
                    placement: n,
                    strategy: d,
                    onFirstUpdate: h,
                    modifiers: [].concat(_, [
                        {
                            name: 'arrow',
                            enabled: null != I,
                            options: { element: I }
                        }
                    ])
                };
            },
            [n, d, h, _, I]
        ),
        A = (0, o.D)(p || E, y, T),
        N = A.state,
        C = A.styles,
        R = A.forceUpdate,
        P = A.update,
        w = r.useMemo(
            function () {
                return {
                    ref: v,
                    style: C.popper,
                    placement: N ? N.placement : n,
                    hasPopperEscaped: N && N.modifiersData.hide ? N.modifiersData.hide.hasPopperEscaped : null,
                    isReferenceHidden: N && N.modifiersData.hide ? N.modifiersData.hide.isReferenceHidden : null,
                    arrowProps: {
                        style: C.arrow,
                        ref: S
                    },
                    forceUpdate: R || s,
                    update: P || l
                };
            },
            [v, S, n, N, C, P, R]
        );
    return (0, a.$p)(g)(w);
}
