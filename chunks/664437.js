n.d(t, {
    Zg: () => c,
    pj: () => s,
    pr: () => l,
}),
    n(642613);
var r = n(544891),
    i = n(570140),
    a = n(893607),
    o = n(981631);
function s(e) {
    (0, a.DH)(e) ||
        (i.Z.dispatch({
            type: "TOP_EMOJIS_FETCH",
            guildId: e,
        }),
        r.tn
            .get({
                url: o.ANM.TOP_EMOJIS_FOR_GUILD(e),
                oldFormErrors: !0,
                rejectWithError: !0,
            })
            .then(
                (t) =>
                    i.Z.dispatch({
                        type: "TOP_EMOJIS_FETCH_SUCCESS",
                        guildId: e,
                        topEmojisMetadata: t.body.items
                            .map((e) => ({
                                emojiId: e.emoji_id,
                                rank: e.emoji_rank,
                            }))
                            .sort((e, t) => e.rank - t.rank),
                    }),
                () =>
                    i.Z.dispatch({
                        type: "TOP_EMOJIS_FETCH_FAILURE",
                        guildId: e,
                    }),
            ));
}
function l(e, t) {
    i.Z.dispatch({ type: "NEWLY_ADDED_EMOJI_SEEN_UPDATED" }),
        null != e &&
            null != t &&
            i.Z.dispatch({
                type: "NEWLY_ADDED_EMOJI_SEEN_PENDING",
                guildId: e,
                emojiId: t,
            });
}
function c(e, t) {
    null != e &&
        null != t &&
        i.Z.dispatch({
            type: "NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED",
            guildId: e,
            emojiId: t,
        });
}
