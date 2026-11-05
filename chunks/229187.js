var i = l(803306),
    a = l(851767);
l.d(
    t,
    {},
    {
        A: function (e, t) {
            if (a.A.isFetchingFriends(e)) return;
            let l = a.A.getMutualFriendsCount(e);
            if (0 === l) return;
            let s = a.A.getMutualFriends(e);
            if (null == l || null == s || s.length !== l) return (0, i.q0)(e, t);
        },
    },
);
