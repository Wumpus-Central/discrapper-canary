n.d(t, { A: () => c }), n(321073);
var l = n(64700),
    r = n(735438),
    i = n.n(r),
    s = n(311907),
    a = n(21119),
    o = n(570287),
    u = n(994500),
    d = n(287809);
function c() {
    let e = (0, s.yK)([u.A], () => u.A.getFriendIDs()),
        t = (0, s.yK)([a.A], () =>
            a.A.getUserAffinities()
                .filter((e) => {
                    let { isFriend: t, communicationProbability: n, vcProbability: l, otherUserId: r } = e,
                        i = (0, o.q)(r);
                    return !t && (n >= 0.1 || l >= 0.1) && i;
                })
                .map((e) => {
                    let { otherUserId: t } = e;
                    return t;
                }),
        ),
        n = l.useMemo(() => i().uniq([...e, ...t]), [e, t]);
    return (0, s.yK)(
        [d.default],
        () =>
            n.reduce((e, t) => {
                let n = d.default.getUser(t);
                return null == n || n.bot || e.push(n), e;
            }, []),
        [n],
    );
}
