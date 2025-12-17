n.d(t, { Z: () => a });
var r = n(473749),
    i = n(238343),
    l = n(343334);
function a(e, t) {
    let { isLoading: n, error: a, onToggle: o } = (0, l.Z)(e, t),
        { onActivate: s } = (0, i._C)(e, t),
        c = r.useCallback(() => o(!1), [o]);
    return {
        isLoading: n,
        error: a,
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
