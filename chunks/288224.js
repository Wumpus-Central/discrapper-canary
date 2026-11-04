var n = t(73153);
t.d(
    i,
    {},
    {
        X: function (e) {
            let { emojiId: i, userImage: t } = e;
            n.h.dispatch({ type: "EMOJI_CACHE_RAW_EMOJI_ASSET", emojiId: i, userImage: t });
        },
    },
);
