var l = n(855986),
    i = n(800828),
    r = n(857071),
    a = n(253932),
    s = n(46653),
    o = n(696451),
    u = n(994500);
n.d(
    t,
    {},
    {
        A: function (e, t) {
            let n = (0, l.bG)([s.default], () => s.default.getId() === e),
                c = (0, l.bG)([r.A], () => null != t && r.A.isLurking(t)),
                d = a.$s.useSetting();
            return (0, l.bG)(
                [u.A, o.Ay, i.A],
                () =>
                    (!n && !c && (u.A.isFriend(e) || null != o.Ay.memberOf(e).find((e) => !d.includes(e)))) ||
                    (i.A.getGameFriendsForUser(e).length > 0 && a.Zk.getSetting()),
            );
        },
        q: function (e, t) {
            let n = s.default.getId() === e,
                l = null != t && r.A.isLurking(t),
                c = a.$s.getSetting(),
                d = u.A.isFriend(e);
            return (
                (!n && !l && (d || null != o.Ay.memberOf(e).find((e) => !c.includes(e)))) ||
                (i.A.getGameFriendsForUser(e).length > 0 && a.Zk.getSetting())
            );
        },
    },
);
