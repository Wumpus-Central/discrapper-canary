"use strict";
n.d(t, { AR: () => _, So: () => A, fh: () => h, uA: () => E });
var i = n(95561),
    r = n(597184),
    a = n(194004),
    s = n(885386),
    l = n(174459),
    o = n(652215);
let d = new Map(),
    c = null;
function u() {
    c = null;
    for (let [e, t] of d)
        l.default.track(o.HAw.DETECTABLE_GAME_SEARCHED_BATCHED, { surface: e, search_count: t, interval: 1 });
    d.clear();
}
function _(e, t) {
    if (!s.BQ.getSetting() || e !== r.DB.GAME) return;
    let n = "game_mention_autocomplete";
    d.set(n, (d.get(n) ?? 0) + 1), null == c && (c = setTimeout(u, 1e3));
}
function E(e, t, n) {
    l.default.track(o.HAw.CHANNEL_AUTOCOMPLETE_OPEN, {
        ...(0, i.dI)(t),
        ...(0, i.H$)(t.guild_id),
        autocomplete_type: e,
        num_emoji_results: n?.numEmojiResults ?? 0,
        num_locked_emoji_results: n?.numLockedEmojiResults ?? 0,
        num_sticker_results: n?.numStickerResults ?? 0,
        game_mentions_available: n?.gameMentionsAvailable,
    });
}
function A(e, t, n, r) {
    l.default.track(o.HAw.CHANNEL_AUTOCOMPLETE_SELECTED, {
        ...(0, i.dI)(n),
        ...(0, i.H$)(n.guild_id),
        autocomplete_type: e,
        selection_type: t,
        emoji_id: r?.emojiId,
        sticker_id: r?.stickerId,
        num_emoji_results: r?.numEmojiResults ?? 0,
        num_sticker_results: r?.numStickerResults ?? 0,
        emoji_name: r?.expressionName ?? "",
        is_custom: r?.isCustom ?? !1,
        is_animated: r?.isAnimated ?? !1,
        application_id: r?.gameId,
    });
}
function h(e) {
    let { sticker: t, stickerSelectLocation: n, isReplacement: i, analyticsLocations: r } = e;
    l.default.track(o.HAw.STICKER_ATTACHED, {
        replaced: i,
        source: (function (e) {
            switch (e) {
                case a.D6.AUTOCOMPLETE:
                    return "autocomplete";
                case a.D6.STICKER_PICKER:
                    return "picker";
                case a.D6.BUILT_IN_INTEGRATION:
                    return "built_in_integration";
                default:
                    return null;
            }
        })(n),
        sticker_id: t.id,
        location_stack: r,
    });
}
