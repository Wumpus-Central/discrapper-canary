var n = l(803306),
    i = l(851767);
l.d(
    t,
    {},
    {
        A: function (e, t) {
            if (i.A.isFetchingFriends(e)) return;
            let l = i.A.getMutualFriendsCount(e);
            if (0 === l) return;
            let a = i.A.getMutualFriends(e);
            if (null == l || null == a || a.length !== l) return (0, n.q0)(e, t);
        },
    },
);
