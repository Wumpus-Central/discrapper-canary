l.d(i, { p: () => r });
var n = l(582128),
    t = l(17928),
    u = l(326084),
    s = l(851746);
function r(e) {
    let i = (0, t.bG)([s.A], () => null != e && s.A.getEligibleUsers().has(e), [e]),
        l = (0, t.bG)([s.A], () => null != e && s.A.hasFetchedUserEligibility(e), [e]);
    return (
        n.useEffect(() => {
            if (null != e && !l) {
                let i = s.A.getSentUserIds();
                s.A.isFetchingUserEligibility(e) || i.includes(e) || (0, u.dy)([e]);
            }
        }, [e, l]),
        i
    );
}
