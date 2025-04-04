n.d(t, { r: () => u });
var r = n(192379),
    i = n(298503),
    o = n(632590),
    a = n(283209),
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
            (0, o.k$)(m, y);
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
        N = (0, a.D)(p || E, y, T),
        A = N.state,
        C = N.styles,
        R = N.forceUpdate,
        P = N.update,
        w = r.useMemo(
            function () {
                return {
                    ref: v,
                    style: C.popper,
                    placement: A ? A.placement : n,
                    hasPopperEscaped: A && A.modifiersData.hide ? A.modifiersData.hide.hasPopperEscaped : null,
                    isReferenceHidden: A && A.modifiersData.hide ? A.modifiersData.hide.isReferenceHidden : null,
                    arrowProps: {
                        style: C.arrow,
                        ref: S
                    },
                    forceUpdate: R || s,
                    update: P || l
                };
            },
            [v, S, n, A, C, P, R]
        );
    return (0, o.$p)(g)(w);
}
