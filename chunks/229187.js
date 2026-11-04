var a = i(803306),
    s = i(851767);
i.d(
    l,
    {},
    {
        A: function (e, l) {
            if (s.A.isFetchingFriends(e)) return;
            let i = s.A.getMutualFriendsCount(e);
            if (0 === i) return;
            let n = s.A.getMutualFriends(e);
            if (null == i || null == n || n.length !== i) return (0, a.q0)(e, l);
        },
    },
);
