"use strict";
n.d(t, { A: () => d }), n(321073);
var r = n(64700),
    i = n(735438),
    s = n.n(i),
    a = n(311907),
    o = n(21119),
    l = n(570287),
    u = n(994500),
    c = n(287809);
function d() {
    let e = (0, a.yK)([u.A], () => u.A.getFriendIDs()),
        t = (0, a.yK)([o.A], () =>
            o.A.getUserAffinities()
                .filter((e) => {
                    let { isFriend: t, communicationProbability: n, vcProbability: r, otherUserId: i } = e,
                        s = (0, l.q)(i);
                    return !t && (n >= 0.1 || r >= 0.1) && s;
                })
                .map((e) => {
                    let { otherUserId: t } = e;
                    return t;
                }),
        ),
        n = r.useMemo(() => s().uniq([...e, ...t]), [e, t]);
    return (0, a.yK)(
        [c.default],
        () =>
            n.reduce((e, t) => {
                let n = c.default.getUser(t);
                return null == n || n.bot || e.push(n), e;
            }, []),
        [n],
    );
}
