var l = t(855986),
    i = t(800828),
    r = t(857071),
    a = t(253932),
    s = t(46653),
    o = t(696451),
    u = t(994500);
t.d(
    n,
    {},
    {
        A: function (e, n) {
            let t = (0, l.bG)([s.default], () => s.default.getId() === e),
                c = (0, l.bG)([r.A], () => null != n && r.A.isLurking(n)),
                d = a.$s.useSetting();
            return (0, l.bG)(
                [u.A, o.Ay, i.A],
                () =>
                    (!t && !c && (u.A.isFriend(e) || null != o.Ay.memberOf(e).find((e) => !d.includes(e)))) ||
                    (i.A.getGameFriendsForUser(e).length > 0 && a.Zk.getSetting()),
            );
        },
        q: function (e, n) {
            let t = s.default.getId() === e,
                l = null != n && r.A.isLurking(n),
                c = a.$s.getSetting(),
                d = u.A.isFriend(e);
            return (
                (!t && !l && (d || null != o.Ay.memberOf(e).find((e) => !c.includes(e)))) ||
                (i.A.getGameFriendsForUser(e).length > 0 && a.Zk.getSetting())
            );
        },
    },
);
