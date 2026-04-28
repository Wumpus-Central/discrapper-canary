"use strict";
n.d(t, { So: () => o, fh: () => c, uA: () => r });
var l = n(58149),
    i = n(194004),
    s = n(954571),
    a = n(652215);
function r(e, t, n) {
    s.default.track(a.HAw.CHANNEL_AUTOCOMPLETE_OPEN, {
        ...(0, l.dI)(t),
        ...(0, l.H$)(t.guild_id),
        autocomplete_type: e,
        num_emoji_results: n?.numEmojiResults ?? 0,
        num_locked_emoji_results: n?.numLockedEmojiResults ?? 0,
        num_sticker_results: n?.numStickerResults ?? 0,
    });
}
function o(e, t, n, i) {
    s.default.track(a.HAw.CHANNEL_AUTOCOMPLETE_SELECTED, {
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
        application_id: i?.applicationId,
    });
}
function c(e) {
    let { sticker: t, stickerSelectLocation: n, isReplacement: l, analyticsLocations: r } = e;
    s.default.track(a.HAw.STICKER_ATTACHED, {
        replaced: l,
        source: (function (e) {
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
        })(n),
        sticker_id: t.id,
        location_stack: r,
    });
}
