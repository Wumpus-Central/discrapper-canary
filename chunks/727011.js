"use strict";
n.d(t, { X: () => l });
var i = n(734057),
    r = n(174459),
    a = n(652215);
function s(e) {
    let t = i.A.getChannel(e);
    return { channel_id: e, channel_type: t?.type ?? null, guild_id: t?.guild_id ?? null };
}
let l = {
    trackEntrypointImpression(e) {
        r.default.track(a.HAw.TOPICAL_NAV_ENTRYPOINT_IMPRESSION, {
            ...s(e.channelId),
            conversation_count: e.conversationCount,
        });
    },
    trackTopicsUnitImpression(e) {
        r.default.track(a.HAw.TOPICAL_NAV_TOPICS_UNIT_IMPRESSION, {
            ...s(e.channelId),
            conversation_ids: e.conversationIds,
            is_focus_mode: e.isFocusMode,
        });
    },
    trackPreviewImpression(e) {
        r.default.track(a.HAw.TOPICAL_NAV_PREVIEW_IMPRESSION, {
            ...s(e.channelId),
            conversation_id: e.conversationId,
            is_focus_mode: e.isFocusMode,
        });
    },
    trackTopicsUnitClicked(e) {
        r.default.track(a.HAw.TOPICAL_NAV_TOPICS_UNIT_CLICKED, {
            ...s(e.channelId),
            conversation_id: e.conversationId,
            is_focus_mode: e.isFocusMode,
        });
    },
    trackFocusModeImpression(e) {
        r.default.track(a.HAw.TOPICAL_NAV_FOCUS_MODE_IMPRESSION, {
            ...s(e.channelId),
            conversation_id: e.conversationId,
        });
    },
    trackFocusModeDismissed(e) {
        r.default.track(a.HAw.TOPICAL_NAV_FOCUS_MODE_DISMISSED, {
            ...s(e.channelId),
            conversation_id: e.conversationId,
            dismiss_reason: e.dismissReason,
        });
    },
    trackThumbsClicked(e) {
        r.default.track(a.HAw.TOPICAL_NAV_THUMBS_CLICKED, {
            ...s(e.channelId),
            conversation_id: e.conversationId,
            is_thumbs_up: e.isThumbsUp,
            is_focus_mode: e.isFocusMode,
        });
    },
    trackThumbsDownReasonSelected(e) {
        r.default.track(a.HAw.TOPICAL_NAV_THUMBS_DOWN_REASON_SELECTED, {
            ...s(e.channelId),
            conversation_id: e.conversationId,
            is_focus_mode: e.isFocusMode,
            reasons: e.reasons,
            other_text: e.otherText,
        });
    },
};
