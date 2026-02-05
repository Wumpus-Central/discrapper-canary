"use strict";
n.d(t, { A: () => _ }), n(321073);
var r = n(64700),
    i = n(735438),
    a = n.n(i),
    s = n(311907),
    o = n(21119),
    l = n(570287),
    u = n(994500),
    c = n(287809);
let d = 0.1;
function _() {
    let e = (0, s.yK)([u.A], () => u.A.getFriendIDs()),
        t = (0, s.yK)([o.A], () =>
            o.A.getUserAffinities()
                .filter((e) => {
                    let { isFriend: t, communicationProbability: n, vcProbability: r, otherUserId: i } = e,
                        a = !t && (n >= d || r >= d),
                        s = (0, l.q)(i);
                    return a && s;
                })
                .map((e) => {
                    let { otherUserId: t } = e;
                    return t;
                }),
        ),
        n = r.useMemo(() => a().uniq([...e, ...t]), [e, t]);
    return (0, s.yK)(
        [c.default],
        () =>
            n.reduce((e, t) => {
                let n = c.default.getUser(t);
                return null == n || n.bot || e.push(n), e;
            }, []),
        [n],
    );
}
