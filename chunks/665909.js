"use strict";
n.d(t, { QF: () => d, Wm: () => c, Wu: () => f, _$: () => _, gN: () => u, mO: () => l });
var r,
    i,
    s = n(287809),
    a = n(954571),
    o = n(652215);
function l(e, t) {
    let { channelId: n, warningId: r, senderId: i, warningType: s } = t;
    a.default.track(e, {
        channel_id: n,
        warning_id: null != r ? parseInt(r) : void 0,
        warning_type: s,
        other_user_id: i,
    });
}
var u =
    (((r = {}).SAFETY_WARNING_BANNER = "safety_warning_banner"),
    (r.SAFETY_TAKEOVER_MODAL = "safety_takeover_modal"),
    (r.SAFETY_TOOLS_NUDGE_TOOLTIP = "safety_tools_nudge_tooltip"),
    (r.SAFETY_TOOLS_BUTTON = "safety_tools_button"),
    r);
function d(e) {
    let { channelId: t, warningId: n, senderId: r, warningType: i, viewName: s, isNudgeWarning: l } = e;
    a.default.track(o.HAw.SAFETY_WARNING_VIEWED, {
        channel_id: t,
        warning_id: null != n ? parseInt(n) : void 0,
        warning_type: i,
        other_user_id: r,
        view_name: s,
        is_nudge_warning: l,
    });
}
var c =
    (((i = {}).OPEN_MORE_TIPS = "open_more_tips"),
    (i.USER_BANNER_DISMISS = "user_banner_dismiss"),
    (i.USER_BANNER_BLOCK_CONFIRM = "user_banner_block_confirm"),
    (i.USER_BANNER_BLOCK_AND_REPORT_CONFIRM = "user_banner_block_and_report_confirm"),
    (i.USER_BANNER_BLOCK_CANCEL = "user_banner_block_cancel"),
    (i.USER_BANNER_OPEN_SAFETY_TOOLS = "user_banner_open_safety_tools"),
    (i.USER_BANNER_IGNORE_CONFIRM = "user_banner_ignore_confirm"),
    (i.USER_BANNER_MUTE = "user_banner_mute"),
    (i.USER_MODAL_BLOCK_CONFIRM = "user_modal_block_confirm"),
    (i.USER_MODAL_BLOCK_CANCEL = "user_modal_block_cancel"),
    (i.USER_TAKEOVER_MODAL_DISMISS = "user_takeover_modal_dismiss"),
    (i.USER_TAKEOVER_MODAL_TAKE_ACTION = "user_takeover_modal_take_action"),
    (i.USER_TAKEOVER_MODAL_SAFETY_TIPS = "user_takeover_modal_safety_tips"),
    (i.USER_TAKEOVER_MODAL_BLOCK = "user_takeover_modal_block"),
    (i.USER_TAKEOVER_MODAL_UNBLOCK = "user_takeover_modal_unblock"),
    (i.USER_TAKEOVER_MODAL_REPORT = "user_takeover_modal_report"),
    (i.USER_TAKEOVER_MODAL_NO_FILTR = "user_takeover_modal_no_filtr"),
    (i.USER_TAKEOVER_MODAL_THROUGHLINE = "user_takeover_modal_throughline"),
    (i.USER_TAKEOVER_MODAL_CTL = "user_takeover_modal_ctl"),
    (i.USER_TAKEOVER_MODAL_CTL_SMS = "user_takeover_modal_ctl_sms"),
    (i.USER_TAKEOVER_MODAL_CTL_WEB = "user_takeover_modal_ctl_web"),
    (i.USER_SAFETY_TOOLS_BUTTON_CLICK = "user_safety_tools_button_click"),
    (i.USER_SAFETY_TOOLS_IGNORE = "user_safety_tools_ignore"),
    (i.USER_SAFETY_TOOLS_UNIGNORE = "user_safety_tools_unignore"),
    (i.USER_SAFETY_TOOLS_BLOCK_CONFIRM = "user_safety_tools_block_confirm"),
    (i.USER_SAFETY_TOOLS_BLOCK_AND_REPORT_CONFIRM = "user_safety_tools_block_and_report_confirm"),
    (i.USER_SAFETY_TOOLS_BLOCK_CANCEL = "user_safety_tools_block_cancel"),
    (i.USER_SAFETY_TOOLS_UNBLOCK = "user_safety_tools_unblock"),
    (i.USER_SAFETY_TOOLS_REPORT = "user_safety_tools_report"),
    (i.USER_SAFETY_TOOLS_NO_FILTR = "user_safety_tools_no_filtr"),
    (i.USER_SAFETY_TOOLS_THROUGHLINE = "user_safety_tools_throughline"),
    (i.USER_SAFETY_TOOLS_CTL = "user_safety_tools_ctl"),
    (i.USER_SAFETY_TOOLS_CTL_SMS = "user_safety_tools_ctl_sms"),
    (i.USER_SAFETY_TOOLS_CTL_WEB = "user_safety_tools_ctl_web"),
    (i.USER_SAFETY_TOOLS_VIBING_WUMPUS = "user_safety_tools_vibing_wumpus"),
    (i.USER_SAFETY_TOOLS_SAFETY_TIPS = "user_safety_tools_safety_tips"),
    (i.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS = "user_safety_tools_about_safety_alerts"),
    (i.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS_DISMISS = "user_safety_tools_about_safety_alerts_dismiss"),
    (i.USER_SAFETY_TOOLS_DISMISS = "user_safety_tools_dismiss"),
    (i.USER_MODAL_LEARN_MORE = "user_modal_learn_more"),
    (i.USER_MODAL_MUTE = "user_modal_mute"),
    (i.USER_MODAL_UNMUTE = "user_modal_unmute"),
    (i.USER_MODAL_IGNORE = "user_modal_ignore"),
    (i.USER_MODAL_UNIGNORE = "user_modal_unignore"),
    (i.FEEDBACK_UPVOTE = "feedback_upvote"),
    (i.FEEDBACK_DOWNVOTE = "feedback_downvote"),
    i);
function _(e) {
    let { channelId: t, warningId: n, senderId: r, warningType: i, cta: s, isNudgeWarning: l } = e;
    a.default.track(o.HAw.SAFETY_WARNING_CTA_CLICKED, {
        channel_id: t,
        warning_id: null != n ? parseInt(n) : void 0,
        warning_type: i,
        other_user_id: r,
        cta: s,
        is_nudge_warning: l,
    });
}
function f() {
    return !1 === s.default.getCurrentUser()?.nsfwAllowed;
}
