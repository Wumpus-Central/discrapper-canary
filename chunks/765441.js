"use strict";
n.d(t, { A: () => u }), n(321073);
var i = n(64700),
    r = n(735438),
    s = n.n(r),
    a = n(17928),
    o = n(427358),
    l = n(570287),
    d = n(994500),
    _ = n(287809);
function u() {
    let e = (0, a.yK)([d.A], () => d.A.getFriendIDs()),
        t = (0, a.yK)([o.A], () =>
            o.A.getUserAffinities()
                .filter((e) => {
                    let { isFriend: t, communicationProbability: n, vcProbability: i, otherUserId: r } = e,
                        s = (0, l.q)(r);
                    return !t && (n >= 0.1 || i >= 0.1) && s;
                })
                .map((e) => {
                    let { otherUserId: t } = e;
                    return t;
                }),
        ),
        n = i.useMemo(() => s().uniq([...e, ...t]), [e, t]);
    return (0, a.yK)(
        [_.default],
        () =>
            n.reduce((e, t) => {
                let n = _.default.getUser(t);
                return null == n || n.bot || e.push(n), e;
            }, []),
        [n],
    );
}
