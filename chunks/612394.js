"use strict";
n.d(t, { So: () => o, fh: () => c, uA: () => a });
var i = n(58149),
    l = n(842086),
    s = n(954571),
    r = n(652215);
function a(e, t, n) {
    s.default.track(r.HAw.CHANNEL_AUTOCOMPLETE_OPEN, {
        ...(0, i.dI)(t),
        ...(0, i.H$)(t.guild_id),
        autocomplete_type: e,
        num_emoji_results: n?.numEmojiResults ?? 0,
        num_locked_emoji_results: n?.numLockedEmojiResults ?? 0,
        num_sticker_results: n?.numStickerResults ?? 0,
    });
}
function o(e, t, n, l) {
    s.default.track(r.HAw.CHANNEL_AUTOCOMPLETE_SELECTED, {
        ...(0, i.dI)(n),
        ...(0, i.H$)(n.guild_id),
        autocomplete_type: e,
        selection_type: t,
        emoji_id: l?.emojiId,
        sticker_id: l?.stickerId,
        num_emoji_results: l?.numEmojiResults ?? 0,
        num_sticker_results: l?.numStickerResults ?? 0,
        emoji_name: l?.expressionName ?? "",
        is_custom: l?.isCustom ?? !1,
        is_animated: l?.isAnimated ?? !1,
        application_id: l?.applicationId,
    });
}
function c(e) {
    let { sticker: t, stickerSelectLocation: n, isReplacement: i, analyticsLocations: a } = e;
    s.default.track(r.HAw.STICKER_ATTACHED, {
        replaced: i,
        source: (function (e) {
            switch (e) {
                case l.D6.AUTOCOMPLETE:
                    return "autocomplete";
                case l.D6.STICKER_PICKER:
                    return "picker";
                case l.D6.BUILT_IN_INTEGRATION:
                    return "built_in_integration";
                default:
                    return null;
            }
        })(n),
        sticker_id: t.id,
        location_stack: a,
    });
}
