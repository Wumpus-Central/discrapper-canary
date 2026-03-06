"use strict";
n.d(t, { So: () => l, fh: () => c, uA: () => o });
var r = n(58149),
    i = n(842086),
    s = n(954571),
    a = n(652215);
function o(e, t, n) {
    s.default.track(a.HAw.CHANNEL_AUTOCOMPLETE_OPEN, {
        ...(0, r.dI)(t),
        ...(0, r.H$)(t.guild_id),
        autocomplete_type: e,
        num_emoji_results: n?.numEmojiResults ?? 0,
        num_locked_emoji_results: n?.numLockedEmojiResults ?? 0,
        num_sticker_results: n?.numStickerResults ?? 0,
    });
}
function l(e, t, n, i) {
    s.default.track(a.HAw.CHANNEL_AUTOCOMPLETE_SELECTED, {
        ...(0, r.dI)(n),
        ...(0, r.H$)(n.guild_id),
        autocomplete_type: e,
        selection_type: t,
        emoji_id: i?.emojiId,
        sticker_id: i?.stickerId,
        num_emoji_results: i?.numEmojiResults ?? 0,
        num_sticker_results: i?.numStickerResults ?? 0,
        emoji_name: i?.expressionName ?? "",
        is_custom: i?.isCustom ?? !1,
        is_animated: i?.isAnimated ?? !1,
        application_id: i?.applicationId,
    });
}
function u(e) {
    switch (e) {
        case i.D6.AUTOCOMPLETE:
            return "autocomplete";
        case i.D6.STICKER_PICKER:
            return "picker";
        case i.D6.BUILT_IN_INTEGRATION:
            return "built_in_integration";
        default:
            return null;
    }
}
function c(e) {
    let { sticker: t, stickerSelectLocation: n, isReplacement: r, analyticsLocations: i } = e;
    s.default.track(a.HAw.STICKER_ATTACHED, { replaced: r, source: u(n), sticker_id: t.id, location_stack: i });
}
