n.d(t, { A: () => r });
var i = n(582128),
    s = n(17928),
    a = n(885386),
    l = n(994500);
function r(e) {
    let t = a.j0.useSetting(),
        { isBlocked: n, isIgnored: r } = (0, s.cf)([l.A], () => ({
            isBlocked: l.A.isBlocked(e),
            isIgnored: l.A.isIgnored(e),
        })),
        [E, o] = (0, i.useState)(n || r);
    return (
        (0, i.useEffect)(() => o(n || r), [n, r]),
        [
            E && !(r && t),
            (0, i.useCallback)(() => {
                o(!1);
            }, []),
        ]
    );
}
