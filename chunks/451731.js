"use strict";
n.d(t, { l2: () => l, mz: () => d, uV: () => o });
var i = n(636537),
    r = n(228366),
    a = n(463347),
    s = n(652215);
function l(e) {
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
}
function o(e, t) {
    r.h.dispatch({ type: "NEWLY_ADDED_EMOJI_SEEN_UPDATED" }),
        null != e && null != t && r.h.dispatch({ type: "NEWLY_ADDED_EMOJI_SEEN_PENDING", guildId: e, emojiId: t });
}
function d(e, t) {
    null != e && null != t && r.h.dispatch({ type: "NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED", guildId: e, emojiId: t });
}
