"use strict";
n.d(t, { N: () => c });
var r = n(64700),
    i = n(554352),
    s = n(418034),
    a = n(542362),
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
        E = e.innerRef,
        m = e.children,
        g = r.useContext(i.kr),
        A = r.useState(null),
        I = A[0],
        T = A[1],
        S = r.useState(null),
        y = S[0],
        N = S[1];
    r.useEffect(
        function () {
            (0, s.cZ)(E, I);
        },
        [E, I],
    );
    var v = r.useMemo(
            function () {
                return {
                    placement: n,
                    strategy: d,
                    onFirstUpdate: h,
                    modifiers: [].concat(f, [{ name: "arrow", enabled: null != y, options: { element: y } }]),
                };
            },
            [n, d, h, f, y],
        ),
        C = (0, a.E)(p || g, I, v),
        O = C.state,
        R = C.styles,
        b = C.forceUpdate,
        D = C.update,
        L = r.useMemo(
            function () {
                return {
                    ref: T,
                    style: R.popper,
                    placement: O ? O.placement : n,
                    hasPopperEscaped: O && O.modifiersData.hide ? O.modifiersData.hide.hasPopperEscaped : null,
                    isReferenceHidden: O && O.modifiersData.hide ? O.modifiersData.hide.isReferenceHidden : null,
                    arrowProps: { style: R.arrow, ref: N },
                    forceUpdate: b || o,
                    update: D || l,
                };
            },
            [T, N, n, O, R, D, b],
        );
    return (0, s.vq)(m)(L);
}
