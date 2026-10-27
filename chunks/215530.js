t.d(i, { A: () => a });
var s = t(582128),
    n = t(17928),
    r = t(253932),
    l = t(994500);
function a(e) {
    let i = r.j0.useSetting(),
        { isBlocked: t, isIgnored: a } = (0, n.cf)([l.A], () => ({
            isBlocked: l.A.isBlocked(e),
            isIgnored: l.A.isIgnored(e),
        })),
        [c, d] = (0, s.useState)(t || a);
    return (
        (0, s.useEffect)(() => d(t || a), [t, a]),
        [
            c && !(a && i),
            (0, s.useCallback)(() => {
                d(!1);
            }, []),
        ]
    );
}
