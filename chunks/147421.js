var i = n(73153);
n.d(
    t,
    {},
    {
        h: function (e, t, n, s) {
            i.h.dispatch({
                type: "BURST_REACTION_PICKER_ANIMATION_ADD",
                messageId: e,
                emojiName: t,
                emojiId: n,
                startPosition: s,
            });
        },
        p: function (e, t, n) {
            i.h.dispatch({ type: "BURST_REACTION_PICKER_ANIMATION_CLEAR", messageId: e, emojiName: t, emojiId: n });
        },
    },
);
