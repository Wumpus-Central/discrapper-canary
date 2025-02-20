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
        p = void 0 === f ? c : f,
        _ = e.referenceElement,
        h = e.onFirstUpdate,
        m = e.innerRef,
        g = e.children,
        E = r.useContext(i.C8),
        v = r.useState(null),
        b = v[0],
        y = v[1],
        O = r.useState(null),
        S = O[0],
        I = O[1];
    r.useEffect(
        function () {
            (0, o.k$)(m, b);
        },
        [m, b]
    );
    var T = r.useMemo(
            function () {
                return {
                    placement: n,
                    strategy: d,
                    onFirstUpdate: h,
                    modifiers: [].concat(p, [
                        {
                            name: 'arrow',
                            enabled: null != S,
                            options: { element: S }
                        }
                    ])
                };
            },
            [n, d, h, p, S]
        ),
        N = (0, a.D)(_ || E, b, T),
        A = N.state,
        C = N.styles,
        R = N.forceUpdate,
        P = N.update,
        w = r.useMemo(
            function () {
                return {
                    ref: y,
                    style: C.popper,
                    placement: A ? A.placement : n,
                    hasPopperEscaped: A && A.modifiersData.hide ? A.modifiersData.hide.hasPopperEscaped : null,
                    isReferenceHidden: A && A.modifiersData.hide ? A.modifiersData.hide.isReferenceHidden : null,
                    arrowProps: {
                        style: C.arrow,
                        ref: I
                    },
                    forceUpdate: R || s,
                    update: P || l
                };
            },
            [y, I, n, A, C, P, R]
        );
    return (0, o.$p)(g)(w);
}
