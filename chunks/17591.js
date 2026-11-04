var i = n(287809),
    r = n(121681),
    a = n(354430),
    s = n(451731);
n.d(
    t,
    {},
    {
        V: function (e) {
            if (null == e || null == i.default.getCurrentUser()) return;
            let t = r.Ay.getTopEmojisMetadata(e);
            if (null != t) {
                let { topEmojisTTL: e } = t;
                if (null == e || Date.now() < e) return;
            }
            a.A.getIsFetching(e) || (0, s.l2)(e);
        },
    },
);
