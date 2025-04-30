n.d(t, {
    Zg: () => l,
    pj: () => o,
    pr: () => s
}),
    n(642613);
var r = n(544891),
    i = n(570140),
    a = n(981631);
function o(e) {
    i.Z.dispatch({
        type: 'TOP_EMOJIS_FETCH',
        guildId: e
    }),
        r.tn
            .get({
                url: a.ANM.TOP_EMOJIS_FOR_GUILD(e),
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then(
                (t) =>
                    i.Z.dispatch({
                        type: 'TOP_EMOJIS_FETCH_SUCCESS',
                        guildId: e,
                        topEmojisMetadata: t.body.items
                            .map((e) => ({
                                emojiId: e.emoji_id,
                                rank: e.emoji_rank
                            }))
                            .sort((e, t) => e.rank - t.rank)
                    }),
                () =>
                    i.Z.dispatch({
                        type: 'TOP_EMOJIS_FETCH_FAILURE',
                        guildId: e
                    })
            );
}
function s(e, t) {
    i.Z.dispatch({ type: 'NEWLY_ADDED_EMOJI_SEEN_UPDATED' }),
        null != e &&
            null != t &&
            i.Z.dispatch({
                type: 'NEWLY_ADDED_EMOJI_SEEN_PENDING',
                guildId: e,
                emojiId: t
            });
}
function l(e, t) {
    null != e &&
        null != t &&
        i.Z.dispatch({
            type: 'NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED',
            guildId: e,
            emojiId: t
        });
}
