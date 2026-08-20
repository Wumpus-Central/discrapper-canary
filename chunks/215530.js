i.d(t, { A: () => l });
var E = i(582128),
    s = i(17928),
    n = i(885386),
    r = i(994500);
function l(e) {
    let t = n.j0.useSetting(),
        { isBlocked: i, isIgnored: l } = (0, s.cf)([r.A], () => ({
            isBlocked: r.A.isBlocked(e),
            isIgnored: r.A.isIgnored(e),
        })),
        [a, _] = (0, E.useState)(i || l);
    return (
        (0, E.useEffect)(() => _(i || l), [i, l]),
        [
            a && !(l && t),
            (0, E.useCallback)(() => {
                _(!1);
            }, []),
        ]
    );
}
