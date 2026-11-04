var l = n(164636),
    i = n(121681),
    r = n(7584);
n.d(
    t,
    {},
    {
        A: function (e, t) {
            return {
                customEmoji: (0, l.bG)([i.Ay], () => (null != e ? i.Ay.getCustomEmojiById(e) : null), [e]),
                unicodeEmoji: null != t ? r.Ay.getByName(r.Ay.convertSurrogateToName(t, !1)) : null,
            };
        },
    },
);
