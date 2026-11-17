var i = n(803306),
    l = n(851767);
n.d(
    t,
    {},
    {
        A: function (e, t) {
            if (l.A.isFetchingFriends(e)) return;
            let n = l.A.getMutualFriendsCount(e);
            if (0 === n) return;
            let r = l.A.getMutualFriends(e);
            if (null == n || null == r || r.length !== n) return (0, i.q0)(e, t);
        },
    },
);
