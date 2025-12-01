n.d(t, { Z: () => f }), n(388685), n(539854);
var r = n(473749),
    i = n(392711),
    a = n.n(i),
    o = n(442837),
    s = n(752048),
    l = n(837411),
    c = n(699516),
    u = n(594174),
    d = n(69143);
function f(e) {
    let { location: t } = e,
        { affineGiftingEnabled: n, affinityThreshold: i } = d.Z.useConfig({ location: t }),
        f = (0, o.Wu)([c.Z], () => c.Z.getFriendIDs()),
        p = (0, o.Wu)([s.Z], () =>
            s.Z.getUserAffinities()
                .filter((e) => {
                    let { isFriend: t, communicationProbability: n, vcProbability: r, otherUserId: a } = e,
                        o = !t && (n >= i || r >= i),
                        s = (0, l.n)(a);
                    return o && s;
                })
                .map((e) => {
                    let { otherUserId: t } = e;
                    return t;
                }),
        ),
        _ = r.useMemo(() => a().uniq([...f, ...(n ? p : [])]), [f, n, p]);
    return (0, o.Wu)(
        [u.default],
        () =>
            _.reduce((e, t) => {
                let n = u.default.getUser(t);
                return null == n || n.bot || e.push(n), e;
            }, []),
        [_],
    );
}
