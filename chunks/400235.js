n.d(t, { r: () => u });
var r = n(73800),
    i = n(166842),
    a = n(50039),
    o = n(46112),
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
        _ = e.modifiers,
        f = void 0 === _ ? c : _,
        p = e.referenceElement,
        h = e.onFirstUpdate,
        m = e.innerRef,
        g = e.children,
        E = r.useContext(i.C8),
        b = r.useState(null),
        y = b[0],
        O = b[1],
        v = r.useState(null),
        I = v[0],
        T = v[1];
    r.useEffect(
        function () {
            (0, a.k$)(m, y);
        },
        [m, y]
    );
    var S = r.useMemo(
            function () {
                return {
                    placement: n,
                    strategy: d,
                    onFirstUpdate: h,
                    modifiers: [].concat(f, [
                        {
                            name: 'arrow',
                            enabled: null != I,
                            options: { element: I }
                        }
                    ])
                };
            },
            [n, d, h, f, I]
        ),
        A = (0, o.D)(p || E, y, S),
        N = A.state,
        C = A.styles,
        R = A.forceUpdate,
        P = A.update,
        w = r.useMemo(
            function () {
                return {
                    ref: O,
                    style: C.popper,
                    placement: N ? N.placement : n,
                    hasPopperEscaped: N && N.modifiersData.hide ? N.modifiersData.hide.hasPopperEscaped : null,
                    isReferenceHidden: N && N.modifiersData.hide ? N.modifiersData.hide.isReferenceHidden : null,
                    arrowProps: {
                        style: C.arrow,
                        ref: T
                    },
                    forceUpdate: R || s,
                    update: P || l
                };
            },
            [O, T, n, N, C, P, R]
        );
    return (0, a.$p)(g)(w);
}
