n.d(t, { r: () => c });
var i = n(192379),
    r = n(298503),
    a = n(632590),
    s = n(283209),
    o = function () {},
    l = function () {
        return Promise.resolve(null);
    },
    u = [];
function c(e) {
    var t = e.placement,
        n = void 0 === t ? 'bottom' : t,
        c = e.strategy,
        d = void 0 === c ? 'absolute' : c,
        f = e.modifiers,
        _ = void 0 === f ? u : f,
        p = e.referenceElement,
        h = e.onFirstUpdate,
        m = e.innerRef,
        g = e.children,
        E = i.useContext(r.C8),
        v = i.useState(null),
        y = v[0],
        I = v[1],
        T = i.useState(null),
        b = T[0],
        S = T[1];
    i.useEffect(
        function () {
            (0, a.k$)(m, y);
        },
        [m, y]
    );
    var A = i.useMemo(
            function () {
                return {
                    placement: n,
                    strategy: d,
                    onFirstUpdate: h,
                    modifiers: [].concat(_, [
                        {
                            name: 'arrow',
                            enabled: null != b,
                            options: { element: b }
                        }
                    ])
                };
            },
            [n, d, h, _, b]
        ),
        N = (0, s.D)(p || E, y, A),
        C = N.state,
        R = N.styles,
        O = N.forceUpdate,
        D = N.update,
        L = i.useMemo(
            function () {
                return {
                    ref: I,
                    style: R.popper,
                    placement: C ? C.placement : n,
                    hasPopperEscaped: C && C.modifiersData.hide ? C.modifiersData.hide.hasPopperEscaped : null,
                    isReferenceHidden: C && C.modifiersData.hide ? C.modifiersData.hide.isReferenceHidden : null,
                    arrowProps: {
                        style: R.arrow,
                        ref: S
                    },
                    forceUpdate: O || o,
                    update: D || l
                };
            },
            [I, S, n, C, R, D, O]
        );
    return (0, a.$p)(g)(L);
}
