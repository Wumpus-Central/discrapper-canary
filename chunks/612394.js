"use strict";
n.d(t, { AR: () => d, So: () => _, fh: () => h, uA: () => c });
var i = n(111956),
    r = n.n(i),
    s = n(95561),
    a = n(352505),
    o = n(194004),
    l = n(174459),
    u = n(652215);
function c(e, t, n) {
    l.default.track(u.HAw.CHANNEL_AUTOCOMPLETE_OPEN, {
        ...(0, s.dI)(t),
        ...(0, s.H$)(t.guild_id),
        autocomplete_type: e,
        num_emoji_results: n?.numEmojiResults ?? 0,
        num_locked_emoji_results: n?.numLockedEmojiResults ?? 0,
        num_sticker_results: n?.numStickerResults ?? 0,
    });
}
let d = r()((e, t, n) => {
    a.r.getConfig({ location: "autocomplete_analytics" }).enabled &&
        l.default.track(u.HAw.DETECTABLE_GAME_SEARCHED, { surface: e, query_length: t, result_count: n });
}, 50);
function _(e, t, n, i) {
    l.default.track(u.HAw.CHANNEL_AUTOCOMPLETE_SELECTED, {
        ...(0, s.dI)(n),
        ...(0, s.H$)(n.guild_id),
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
function h(e) {
    let { sticker: t, stickerSelectLocation: n, isReplacement: i, analyticsLocations: r } = e;
    l.default.track(u.HAw.STICKER_ATTACHED, {
        replaced: i,
        source: (function (e) {
            switch (e) {
                case o.D6.AUTOCOMPLETE:
                    return "autocomplete";
                case o.D6.STICKER_PICKER:
                    return "picker";
                case o.D6.BUILT_IN_INTEGRATION:
                    return "built_in_integration";
                default:
                    return null;
            }
        })(n),
        sticker_id: t.id,
        location_stack: r,
    });
}
