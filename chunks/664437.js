n.d(t, {
    Zg: () => l,
    pj: () => s,
    pr: () => o
});
var i = n(544891),
    r = n(570140),
    a = n(981631);
function s(e) {
    r.Z.dispatch({
        type: 'TOP_EMOJIS_FETCH',
        guildId: e
    }),
        i.tn
            .get({
                url: a.ANM.TOP_EMOJIS_FOR_GUILD(e),
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then(
                (t) =>
                    r.Z.dispatch({
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
                    r.Z.dispatch({
                        type: 'TOP_EMOJIS_FETCH_FAILURE',
                        guildId: e
                    })
            );
}
function o(e, t) {
    r.Z.dispatch({ type: 'NEWLY_ADDED_EMOJI_SEEN_UPDATED' }),
        null != e &&
            null != t &&
            r.Z.dispatch({
                type: 'NEWLY_ADDED_EMOJI_SEEN_PENDING',
                guildId: e,
                emojiId: t
            });
}
function l(e, t) {
    null != e &&
        null != t &&
        r.Z.dispatch({
            type: 'NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED',
            guildId: e,
            emojiId: t
        });
}
