i.d(t, { A: () => l });
var s = i(582128),
    n = i(17928),
    r = i(885386),
    a = i(994500);
function l(e) {
    let t = r.j0.useSetting(),
        { isBlocked: i, isIgnored: l } = (0, n.cf)([a.A], () => ({
            isBlocked: a.A.isBlocked(e),
            isIgnored: a.A.isIgnored(e),
        })),
        [c, o] = (0, s.useState)(i || l);
    return (
        (0, s.useEffect)(() => o(i || l), [i, l]),
        [
            c && !(l && t),
            (0, s.useCallback)(() => {
                o(!1);
            }, []),
        ]
    );
}
