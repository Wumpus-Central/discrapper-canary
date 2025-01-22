r.d(n, {
    r: function () {
        return d;
    }
});
var i = r(192379),
    a = r(298503),
    o = r(632590),
    s = r(283209),
    l = function () {},
    u = function () {
        return Promise.resolve(null);
    },
    c = [];
function d(e) {
    var n = e.placement,
        r = void 0 === n ? 'bottom' : n,
        d = e.strategy,
        f = void 0 === d ? 'absolute' : d,
        p = e.modifiers,
        h = void 0 === p ? c : p,
        _ = e.referenceElement,
        m = e.onFirstUpdate,
        g = e.innerRef,
        E = e.children,
        v = i.useContext(a.C8),
        y = i.useState(null),
        b = y[0],
        I = y[1],
        T = i.useState(null),
        S = T[0],
        A = T[1];
    i.useEffect(
        function () {
            (0, o.k$)(g, b);
        },
        [g, b]
    );
    var C = i.useMemo(
            function () {
                return {
                    placement: r,
                    strategy: f,
                    onFirstUpdate: m,
                    modifiers: [].concat(h, [
                        {
                            name: 'arrow',
                            enabled: null != S,
                            options: { element: S }
                        }
                    ])
                };
            },
            [r, f, m, h, S]
        ),
        N = (0, s.D)(_ || v, b, C),
        R = N.state,
        O = N.styles,
        D = N.forceUpdate,
        L = N.update,
        x = i.useMemo(
            function () {
                return {
                    ref: I,
                    style: O.popper,
                    placement: R ? R.placement : r,
                    hasPopperEscaped: R && R.modifiersData.hide ? R.modifiersData.hide.hasPopperEscaped : null,
                    isReferenceHidden: R && R.modifiersData.hide ? R.modifiersData.hide.isReferenceHidden : null,
                    arrowProps: {
                        style: O.arrow,
                        ref: A
                    },
                    forceUpdate: D || l,
                    update: L || u
                };
            },
            [I, A, r, R, O, L, D]
        );
    return (0, o.$p)(E)(x);
}
