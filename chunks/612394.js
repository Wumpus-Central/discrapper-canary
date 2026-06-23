"use strict";
n.d(t, { AR: () => _, So: () => f, fh: () => p, uA: () => h });
var i = n(95561),
    r = n(597184),
    s = n(352505),
    a = n(194004),
    o = n(174459),
    l = n(652215);
let u = new Map(),
    c = null;
function d() {
    c = null;
    for (let [e, t] of u)
        o.default.track(l.HAw.DETECTABLE_GAME_SEARCHED_BATCHED, { surface: e, search_count: t, interval: 1 });
    u.clear();
}
function _(e, t) {
    let n,
        i = s.r.getConfig({ location: "autocomplete_analytics" });
    if (i.enabled) {
        if (e === r.DB.GAME) n = "game_mention_autocomplete";
        else {
            if (e !== r.DB.MENTIONS || !i.combineMentionAutocomplete || !t.mentions.otherGlobals) return;
            n = "mention_autocomplete";
        }
        u.set(n, (u.get(n) ?? 0) + 1), null == c && (c = setTimeout(d, 1e3));
    }
}
function h(e, t, n) {
    o.default.track(l.HAw.CHANNEL_AUTOCOMPLETE_OPEN, {
        ...(0, i.dI)(t),
        ...(0, i.H$)(t.guild_id),
        autocomplete_type: e,
        num_emoji_results: n?.numEmojiResults ?? 0,
        num_locked_emoji_results: n?.numLockedEmojiResults ?? 0,
        num_sticker_results: n?.numStickerResults ?? 0,
        game_mentions_available: n?.gameMentionsAvailable,
    });
}
function f(e, t, n, r) {
    o.default.track(l.HAw.CHANNEL_AUTOCOMPLETE_SELECTED, {
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
function p(e) {
    let { sticker: t, stickerSelectLocation: n, isReplacement: i, analyticsLocations: r } = e;
    o.default.track(l.HAw.STICKER_ATTACHED, {
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
