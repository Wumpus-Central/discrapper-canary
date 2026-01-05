n.d(e, { e: () => r }), n(388685);
var l = n(473749),
    a = n(957115),
    i = n(715149);
function r(t) {
    let { getOptions: e } = t,
        n = l.useMemo(() => {
            let t = e();
            return (0, a.Bi)(t, i.Ef);
        }, [e]),
        [r, u] = l.useState(null),
        [s, b] = l.useState(""),
        [d, o] = l.useState(!1),
        v = l.useCallback((t) => {
            o(!0), u(t);
        }, []),
        O = l.useCallback((t) => {
            b(t);
        }, []);
    return l.useMemo(
        () => ({
            options: n,
            selectedOption: r,
            freeformText: s,
            isFreeformEnabled: d,
            selectOption: v,
            onFreeformTextChange: O,
        }),
        [n, r, s, d, v, O],
    );
}
