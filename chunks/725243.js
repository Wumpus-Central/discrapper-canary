n.d(t, { Z: () => f }), n(388685), n(539854);
var r = n(473749),
    i = n(392711),
    a = n.n(i),
    o = n(442837),
    s = n(752048),
    l = n(837411),
    c = n(699516),
    u = n(594174);
let d = 0.1;
function f() {
    let e = (0, o.Wu)([c.Z], () => c.Z.getFriendIDs()),
        t = (0, o.Wu)([s.Z], () =>
            s.Z.getUserAffinities()
                .filter((e) => {
                    let { isFriend: t, communicationProbability: n, vcProbability: r, otherUserId: i } = e,
                        a = !t && (n >= d || r >= d),
                        o = (0, l.n)(i);
                    return a && o;
                })
                .map((e) => {
                    let { otherUserId: t } = e;
                    return t;
                }),
        ),
        n = r.useMemo(() => a().uniq([...e, ...t]), [e, t]);
    return (0, o.Wu)(
        [u.default],
        () =>
            n.reduce((e, t) => {
                let n = u.default.getUser(t);
                return null == n || n.bot || e.push(n), e;
            }, []),
        [n],
    );
}
