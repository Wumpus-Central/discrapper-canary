var i = n(855986),
    r = n(800828),
    s = n(857071),
    u = n(253932),
    d = n(46653),
    l = n(696451),
    g = n(994500);
n.d(
    t,
    {},
    {
        A: function (e, t) {
            let n = (0, i.bG)([d.default], () => d.default.getId() === e),
                A = (0, i.bG)([s.A], () => null != t && s.A.isLurking(t)),
                a = u.$s.useSetting();
            return (0, i.bG)(
                [g.A, l.Ay, r.A],
                () =>
                    (!n && !A && (g.A.isFriend(e) || null != l.Ay.memberOf(e).find((e) => !a.includes(e)))) ||
                    (r.A.getGameFriendsForUser(e).length > 0 && u.Zk.getSetting()),
            );
        },
        q: function (e, t) {
            let n = d.default.getId() === e,
                i = null != t && s.A.isLurking(t),
                A = u.$s.getSetting(),
                a = g.A.isFriend(e);
            return (
                (!n && !i && (a || null != l.Ay.memberOf(e).find((e) => !A.includes(e)))) ||
                (r.A.getGameFriendsForUser(e).length > 0 && u.Zk.getSetting())
            );
        },
    },
);
