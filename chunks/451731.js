var i = n(620632),
    r = n(73153),
    a = n(463347),
    s = n(652215);
n.d(
    t,
    {},
    {
        l2: function (e) {
            (0, a.tZ)(e) ||
                (r.h.dispatch({ type: "TOP_EMOJIS_FETCH", guildId: e }),
                i.Bo.get({ url: s.Rsh.TOP_EMOJIS_FOR_GUILD(e), oldFormErrors: !0, rejectWithError: !0 }).then(
                    (t) =>
                        r.h.dispatch({
                            type: "TOP_EMOJIS_FETCH_SUCCESS",
                            guildId: e,
                            topEmojisMetadata: t.body.items
                                .map((e) => ({ emojiId: e.emoji_id, rank: e.emoji_rank }))
                                .sort((e, t) => e.rank - t.rank),
                        }),
                    () => r.h.dispatch({ type: "TOP_EMOJIS_FETCH_FAILURE", guildId: e }),
                ));
        },
        mz: function (e, t) {
            null != e &&
                null != t &&
                r.h.dispatch({ type: "NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED", guildId: e, emojiId: t });
        },
        uV: function (e, t) {
            (r.h.dispatch({ type: "NEWLY_ADDED_EMOJI_SEEN_UPDATED" }),
                null != e &&
                    null != t &&
                    r.h.dispatch({ type: "NEWLY_ADDED_EMOJI_SEEN_PENDING", guildId: e, emojiId: t }));
        },
    },
);
