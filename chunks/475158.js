n.d(t, { r: () => u });
var r = n(473749),
    i = n(579995),
    a = n(658346),
    o = n(222957),
    s = function () {},
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
        m = e.onFirstUpdate,
        h = e.innerRef,
        g = e.children,
        E = r.useContext(i.C8),
        b = r.useState(null),
        y = b[0],
        O = b[1],
        v = r.useState(null),
        S = v[0],
        I = v[1];
    r.useEffect(
        function () {
            (0, a.k$)(h, y);
        },
        [h, y],
    );
    var T = r.useMemo(
            function () {
                return {
                    placement: n,
                    strategy: d,
                    onFirstUpdate: m,
                    modifiers: [].concat(p, [
                        {
                            name: "arrow",
                            enabled: null != S,
                            options: { element: S },
                        },
                    ]),
                };
            },
            [n, d, m, p, S],
        ),
        C = (0, o.D)(_ || E, y, T),
        A = C.state,
        N = C.styles,
        P = C.forceUpdate,
        R = C.update,
        D = r.useMemo(
            function () {
                return {
                    ref: O,
                    style: N.popper,
                    placement: A ? A.placement : n,
                    hasPopperEscaped: A && A.modifiersData.hide ? A.modifiersData.hide.hasPopperEscaped : null,
                    isReferenceHidden: A && A.modifiersData.hide ? A.modifiersData.hide.isReferenceHidden : null,
                    arrowProps: {
                        style: N.arrow,
                        ref: I,
                    },
                    forceUpdate: P || s,
                    update: R || l,
                };
            },
            [O, I, n, A, N, R, P],
        );
    return (0, a.$p)(g)(D);
}
