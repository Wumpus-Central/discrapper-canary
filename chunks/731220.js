l.d(t, { e: () => r }), l(388685);
var n = l(647438),
    a = l(957115),
    i = l(257126);
function r(e) {
    let { getOptions: t } = e,
        l = n.useMemo(() => {
            let e = t();
            return (0, a.Bi)(e, i.Ef);
        }, [t]),
        [r, u] = n.useState(null),
        [s, b] = n.useState(""),
        [d, o] = n.useState(!1),
        f = n.useCallback((e) => {
            o(!0), u(e);
        }, []),
        c = n.useCallback((e) => {
            b(e);
        }, []);
    return n.useMemo(
        () => ({
            options: l,
            selectedOption: r,
            freeformText: s,
            isFreeformEnabled: d,
            selectOption: f,
            onFreeformTextChange: c,
        }),
        [l, r, s, d, f, c],
    );
}
