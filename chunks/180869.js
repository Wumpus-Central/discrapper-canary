n.d(t, { Z: () => l });
var r = n(473749),
    i = n(343334);
function l(e, t) {
    let { isLoading: n, error: l, onToggle: a } = (0, i.Z)(e, t);
    return {
        isLoading: n,
        error: l,
        onDeactivate: r.useCallback(() => a(!1), [a]),
    };
}
