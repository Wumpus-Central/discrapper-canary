l.d(t, {
    L: () => r,
}),
    l(896048);
var n = l(64700),
    a = l(930932),
    i = l(472715);

function r(e) {
    let { getOptions: t } = e,
        l = n.useMemo(() => {
            let e = t();
            return (0, a.ed)(e, i.ZJ);
        }, [t]),
        [r, u] = n.useState(null),
        [s, d] = n.useState(""),
        [b, O] = n.useState(!1),
        o = n.useCallback((e) => {
            O(!0), u(e);
        }, []),
        v = n.useCallback((e) => {
            d(e);
        }, []);
    return n.useMemo(
        () => ({
            options: l,
            selectedOption: r,
            freeformText: s,
            isFreeformEnabled: b,
            selectOption: o,
            onFreeformTextChange: v,
        }),
        [l, r, s, b, o, v],
    );
}
