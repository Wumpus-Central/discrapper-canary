"use strict";
n.d(t, { N: () => c });
var r = n(64700),
    i = n(554352),
    a = n(418034),
    s = n(542362),
    o = function () {},
    l = function () {
        return Promise.resolve(null);
    },
    u = [];
function c(e) {
    var t = e.placement,
        n = void 0 === t ? "bottom" : t,
        c = e.strategy,
        d = void 0 === c ? "absolute" : c,
        _ = e.modifiers,
        f = void 0 === _ ? u : _,
        p = e.referenceElement,
        h = e.onFirstUpdate,
        m = e.innerRef,
        g = e.children,
        E = r.useContext(i.kr),
        A = r.useState(null),
        I = A[0],
        T = A[1],
        y = r.useState(null),
        S = y[0],
        v = y[1];
    r.useEffect(
        function () {
            (0, a.cZ)(m, I);
        },
        [m, I],
    );
    var C = r.useMemo(
            function () {
                return {
                    placement: n,
                    strategy: d,
                    onFirstUpdate: h,
                    modifiers: [].concat(f, [{ name: "arrow", enabled: null != S, options: { element: S } }]),
                };
            },
            [n, d, h, f, S],
        ),
        b = (0, s.E)(p || E, I, C),
        N = b.state,
        R = b.styles,
        O = b.forceUpdate,
        D = b.update,
        L = r.useMemo(
            function () {
                return {
                    ref: T,
                    style: R.popper,
                    placement: N ? N.placement : n,
                    hasPopperEscaped: N && N.modifiersData.hide ? N.modifiersData.hide.hasPopperEscaped : null,
                    isReferenceHidden: N && N.modifiersData.hide ? N.modifiersData.hide.isReferenceHidden : null,
                    arrowProps: { style: R.arrow, ref: v },
                    forceUpdate: O || o,
                    update: D || l,
                };
            },
            [T, v, n, N, R, D, O],
        );
    return (0, a.vq)(g)(L);
}
