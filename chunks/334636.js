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
    let { location: t = "Collectibles Gift Recipient Picker", additionalRecipientIds: n } = e,
        { affineGiftingEnabled: i, affinityThreshold: f } = d.Z.useConfig({ location: t }),
        _ = (0, o.Wu)([c.Z], () => c.Z.getFriendIDs()),
        p = (0, o.Wu)([s.Z], () =>
            s.Z.getUserAffinities()
                .filter((e) => {
                    let { isFriend: t, communicationProbability: n, vcProbability: r, otherUserId: i } = e,
                        a = !t && (n >= f || r >= f),
                        o = (0, l.n)(i);
                    return a && o;
                })
                .map((e) => {
                    let { otherUserId: t } = e;
                    return t;
                }),
        ),
        h = r.useMemo(() => a().uniq([...(null != n ? n : []), ..._, ...(i ? p : [])]), [n, _, i, p]);
    return (0, o.Wu)(
        [u.default],
        () =>
            h.reduce((e, t) => {
                let n = u.default.getUser(t);
                return null == n || n.bot || e.push(n), e;
            }, []),
        [h],
    );
}
