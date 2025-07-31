(n.d(t, { e: () => r }), n(388685));
var l = n(73800),
    a = n(957115),
    i = n(257126);
function r(e) {
    let { getOptions: t } = e,
        n = l.useMemo(() => {
            let e = t();
            return (0, a.Bi)(e, i.Ef);
        }, [t]),
        [r, u] = l.useState(null),
        [s, b] = l.useState(''),
        [d, o] = l.useState(!1),
        c = l.useCallback((e) => {
            (o(!0), u(e));
        }, []),
        f = l.useCallback((e) => {
            b(e);
        }, []);
    return l.useMemo(
        () => ({
            options: n,
            selectedOption: r,
            freeformText: s,
            isFreeformEnabled: d,
            selectOption: c,
            onFreeformTextChange: f
        }),
        [n, r, s, d, c, f]
    );
}
