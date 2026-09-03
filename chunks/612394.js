n.d(t, { AR: () => h, So: () => f, fh: () => p, uA: () => m });
var l = n(95561),
    i = n(597184),
    s = n(194004),
    r = n(885386),
    a = n(174459),
    o = n(652215);
let u = new Map(),
    c = null;
function d() {
    c = null;
    for (let [e, t] of u)
        a.default.track(o.HAw.DETECTABLE_GAME_SEARCHED_BATCHED, { surface: e, search_count: t, interval: 1 });
    u.clear();
}
function h(e, t) {
    if (!r.BQ.getSetting() || e !== i.DB.GAME) return;
    let n = "game_mention_autocomplete";
    u.set(n, (u.get(n) ?? 0) + 1), null == c && (c = setTimeout(d, 1e3));
}
function m(e, t, n) {
    a.default.track(o.HAw.CHANNEL_AUTOCOMPLETE_OPEN, {
        ...(0, l.dI)(t),
        ...(0, l.H$)(t.guild_id),
        autocomplete_type: e,
        num_emoji_results: n?.numEmojiResults ?? 0,
        num_locked_emoji_results: n?.numLockedEmojiResults ?? 0,
        num_sticker_results: n?.numStickerResults ?? 0,
        game_mentions_available: n?.gameMentionsAvailable,
    });
}
function f(e, t, n, i) {
    a.default.track(o.HAw.CHANNEL_AUTOCOMPLETE_SELECTED, {
        ...(0, l.dI)(n),
        ...(0, l.H$)(n.guild_id),
        autocomplete_type: e,
        selection_type: t,
        emoji_id: i?.emojiId,
        sticker_id: i?.stickerId,
        num_emoji_results: i?.numEmojiResults ?? 0,
        num_sticker_results: i?.numStickerResults ?? 0,
        emoji_name: i?.expressionName ?? "",
        is_custom: i?.isCustom ?? !1,
        is_animated: i?.isAnimated ?? !1,
        application_id: i?.gameId,
    });
}
function p(e) {
    let { sticker: t, stickerSelectLocation: n, isReplacement: l, analyticsLocations: i } = e;
    a.default.track(o.HAw.STICKER_ATTACHED, {
        replaced: l,
        source: (function (e) {
            switch (e) {
                case s.D6.AUTOCOMPLETE:
                    return "autocomplete";
                case s.D6.STICKER_PICKER:
                    return "picker";
                case s.D6.BUILT_IN_INTEGRATION:
                    return "built_in_integration";
                default:
                    return null;
            }
        })(n),
        sticker_id: t.id,
        location_stack: i,
    });
}
