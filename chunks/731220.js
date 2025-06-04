n.d(t, { e: () => a }), n(388685);
var l = n(73800),
    i = n(957115),
    r = n(257126);
function a(e) {
    let { getOptions: t } = e,
        n = l.useMemo(() => {
            let e = t();
            return (0, i.Bi)(e, r.Ef);
        }, [t]),
        [a, u] = l.useState(null),
        [s, o] = l.useState(''),
        [b, c] = l.useState(!1),
        d = l.useCallback((e) => {
            c((0, r.A6)(e)), u(e);
        }, []),
        f = l.useCallback((e) => {
            o(e);
        }, []);
    return l.useMemo(
        () => ({
            options: n,
            selectedOption: a,
            freeformText: s,
            isFreeformEnabled: b,
            selectOption: d,
            onFreeformTextChange: f
        }),
        [n, a, s, b, d, f]
    );
}
