l.d(e, { L: () => r });
var n = l(64700),
    a = l(930932),
    i = l(472715);
function r(t) {
    let { getOptions: e } = t,
        l = n.useMemo(() => {
            let t = e();
            return (0, a.ed)(t, i.ZJ);
        }, [e]),
        [r, u] = n.useState(null),
        [s, d] = n.useState(""),
        [b, E] = n.useState(!1),
        v = n.useCallback((t) => {
            E(!0), u(t);
        }, []),
        O = n.useCallback((t) => {
            d(t);
        }, []);
    return n.useMemo(
        () => ({
            options: l,
            selectedOption: r,
            freeformText: s,
            isFreeformEnabled: b,
            selectOption: v,
            onFreeformTextChange: O,
        }),
        [l, r, s, b, v, O],
    );
}
