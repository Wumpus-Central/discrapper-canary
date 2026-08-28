i.d(t, { A: () => a });
var s = i(582128),
    n = i(17928),
    r = i(885386),
    l = i(994500);
function a(e) {
    let t = r.j0.useSetting(),
        { isBlocked: i, isIgnored: a } = (0, n.cf)([l.A], () => ({
            isBlocked: l.A.isBlocked(e),
            isIgnored: l.A.isIgnored(e),
        })),
        [c, o] = (0, s.useState)(i || a);
    return (
        (0, s.useEffect)(() => o(i || a), [i, a]),
        [
            c && !(a && t),
            (0, s.useCallback)(() => {
                o(!1);
            }, []),
        ]
    );
}
