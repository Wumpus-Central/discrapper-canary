n.d(t, { Z: () => o });
var r = n(473749),
    i = n(238343),
    l = n(343334);
function o(e, t) {
    let { isLoading: n, error: o, onToggle: a } = (0, l.Z)(e, t),
        { onActivate: s } = (0, i._C)(e, t),
        c = r.useCallback(() => a(!1), [a]);
    return {
        isLoading: n,
        error: o,
        onActivate: s,
        onDeactivate: c,
        onShowDeactivate: r.useCallback(() => {
            (0, i.Aw)(e, t);
        }, [e, t]),
        onShowMore: r.useCallback(() => {
            (0, i.KE)(e, t);
        }, [e, t]),
    };
}
