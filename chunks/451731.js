"use strict";
n.d(t, { l2: () => o, mz: () => u, uV: () => l });
var r = n(562465),
    i = n(73153),
    s = n(463347),
    a = n(652215);
function o(e) {
    (0, s.tZ)(e) ||
        (i.h.dispatch({ type: "TOP_EMOJIS_FETCH", guildId: e }),
        r.Bo.get({ url: a.Rsh.TOP_EMOJIS_FOR_GUILD(e), oldFormErrors: !0, rejectWithError: !0 }).then(
            (t) =>
                i.h.dispatch({
                    type: "TOP_EMOJIS_FETCH_SUCCESS",
                    guildId: e,
                    topEmojisMetadata: t.body.items
                        .map((e) => ({ emojiId: e.emoji_id, rank: e.emoji_rank }))
                        .sort((e, t) => e.rank - t.rank),
                }),
            () => i.h.dispatch({ type: "TOP_EMOJIS_FETCH_FAILURE", guildId: e }),
        ));
}
function l(e, t) {
    i.h.dispatch({ type: "NEWLY_ADDED_EMOJI_SEEN_UPDATED" }),
        null != e && null != t && i.h.dispatch({ type: "NEWLY_ADDED_EMOJI_SEEN_PENDING", guildId: e, emojiId: t });
}
function u(e, t) {
    null != e && null != t && i.h.dispatch({ type: "NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED", guildId: e, emojiId: t });
}
