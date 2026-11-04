var i = n(73153);
n.d(
    t,
    {},
    {
        Jx: function (e) {
            i.h.dispatch({ type: "DELETE_PENDING_REPLY", channelId: e });
        },
        Yf: function (e) {
            let { message: t, channel: n, shouldMention: r, showMentionToggle: a, source: s, mediaMention: l } = e;
            i.h.dispatch({
                type: "CREATE_PENDING_REPLY",
                message: t,
                channel: n,
                shouldMention: r,
                showMentionToggle: a,
                source: s,
                mediaMention: l,
            });
        },
        vz: function (e, t) {
            i.h.dispatch({ type: "SET_PENDING_REPLY_SHOULD_MENTION", channelId: e, shouldMention: t });
        },
    },
);
