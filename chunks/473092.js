n.d(t, {
    KQ: () => l,
    Lm: () => d,
    MC: () => s,
    NM: () => u,
    pb: () => o,
    qc: () => c
});
var i = n(594174),
    r = n(626135),
    a = n(981631);
function s(e, t) {
    let { channelId: n, warningId: i, senderId: a, warningType: s } = t;
    r.default.track(e, {
        channel_id: n,
        warning_id: null != i ? parseInt(i) : void 0,
        warning_type: s,
        other_user_id: a
    });
}
var o = (function (e) {
    return (e.SAFETY_WARNING_BANNER = 'safety_warning_banner'), (e.SAFETY_TAKEOVER_MODAL = 'safety_takeover_modal'), (e.SAFETY_TOOLS_NUDGE_TOOLTIP = 'safety_tools_nudge_tooltip'), (e.SAFETY_TOOLS_BUTTON = 'safety_tools_button'), e;
})({});
function l(e) {
    let { channelId: t, warningId: n, senderId: i, warningType: s, viewName: o, isNudgeWarning: l } = e;
    r.default.track(a.rMx.SAFETY_WARNING_VIEWED, {
        channel_id: t,
        warning_id: null != n ? parseInt(n) : void 0,
        warning_type: s,
        other_user_id: i,
        view_name: o,
        is_nudge_warning: l
    });
}
var u = (function (e) {
    return (e.OPEN_MORE_TIPS = 'open_more_tips'), (e.USER_BANNER_DISMISS = 'user_banner_dismiss'), (e.USER_BANNER_BLOCK_CONFIRM = 'user_banner_block_confirm'), (e.USER_BANNER_BLOCK_AND_REPORT_CONFIRM = 'user_banner_block_and_report_confirm'), (e.USER_BANNER_BLOCK_CANCEL = 'user_banner_block_cancel'), (e.USER_BANNER_OPEN_SAFETY_TOOLS = 'user_banner_open_safety_tools'), (e.USER_BANNER_IGNORE_CONFIRM = 'user_banner_ignore_confirm'), (e.USER_BANNER_MUTE = 'user_banner_mute'), (e.USER_MODAL_BLOCK_CONFIRM = 'user_modal_block_confirm'), (e.USER_MODAL_BLOCK_CANCEL = 'user_modal_block_cancel'), (e.USER_TAKEOVER_MODAL_DISMISS = 'user_takeover_modal_dismiss'), (e.USER_TAKEOVER_MODAL_TAKE_ACTION = 'user_takeover_modal_take_action'), (e.USER_TAKEOVER_MODAL_SAFETY_TIPS = 'user_takeover_modal_safety_tips'), (e.USER_TAKEOVER_MODAL_BLOCK = 'user_takeover_modal_block'), (e.USER_TAKEOVER_MODAL_UNBLOCK = 'user_takeover_modal_unblock'), (e.USER_TAKEOVER_MODAL_REPORT = 'user_takeover_modal_report'), (e.USER_TAKEOVER_MODAL_NO_FILTR = 'user_takeover_modal_no_filtr'), (e.USER_TAKEOVER_MODAL_THROUGHLINE = 'user_takeover_modal_throughline'), (e.USER_TAKEOVER_MODAL_CTL = 'user_takeover_modal_ctl'), (e.USER_TAKEOVER_MODAL_CTL_SMS = 'user_takeover_modal_ctl_sms'), (e.USER_TAKEOVER_MODAL_CTL_WEB = 'user_takeover_modal_ctl_web'), (e.USER_SAFETY_TOOLS_BUTTON_CLICK = 'user_safety_tools_button_click'), (e.USER_SAFETY_TOOLS_IGNORE = 'user_safety_tools_ignore'), (e.USER_SAFETY_TOOLS_UNIGNORE = 'user_safety_tools_unignore'), (e.USER_SAFETY_TOOLS_BLOCK_CONFIRM = 'user_safety_tools_block_confirm'), (e.USER_SAFETY_TOOLS_BLOCK_AND_REPORT_CONFIRM = 'user_safety_tools_block_and_report_confirm'), (e.USER_SAFETY_TOOLS_BLOCK_CANCEL = 'user_safety_tools_block_cancel'), (e.USER_SAFETY_TOOLS_UNBLOCK = 'user_safety_tools_unblock'), (e.USER_SAFETY_TOOLS_REPORT = 'user_safety_tools_report'), (e.USER_SAFETY_TOOLS_NO_FILTR = 'user_safety_tools_no_filtr'), (e.USER_SAFETY_TOOLS_THROUGHLINE = 'user_safety_tools_throughline'), (e.USER_SAFETY_TOOLS_CTL = 'user_safety_tools_ctl'), (e.USER_SAFETY_TOOLS_CTL_SMS = 'user_safety_tools_ctl_sms'), (e.USER_SAFETY_TOOLS_CTL_WEB = 'user_safety_tools_ctl_web'), (e.USER_SAFETY_TOOLS_VIBING_WUMPUS = 'user_safety_tools_vibing_wumpus'), (e.USER_SAFETY_TOOLS_SAFETY_TIPS = 'user_safety_tools_safety_tips'), (e.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS = 'user_safety_tools_about_safety_alerts'), (e.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS_DISMISS = 'user_safety_tools_about_safety_alerts_dismiss'), (e.USER_SAFETY_TOOLS_DISMISS = 'user_safety_tools_dismiss'), (e.USER_MODAL_LEARN_MORE = 'user_modal_learn_more'), (e.USER_MODAL_MUTE = 'user_modal_mute'), (e.USER_MODAL_UNMUTE = 'user_modal_unmute'), (e.USER_MODAL_IGNORE = 'user_modal_ignore'), (e.USER_MODAL_UNIGNORE = 'user_modal_unignore'), (e.FEEDBACK_UPVOTE = 'feedback_upvote'), (e.FEEDBACK_DOWNVOTE = 'feedback_downvote'), e;
})({});
function c(e) {
    let { channelId: t, warningId: n, senderId: i, warningType: s, cta: o, isNudgeWarning: l } = e;
    r.default.track(a.rMx.SAFETY_WARNING_CTA_CLICKED, {
        channel_id: t,
        warning_id: null != n ? parseInt(n) : void 0,
        warning_type: s,
        other_user_id: i,
        cta: o,
        is_nudge_warning: l
    });
}
function d() {
    var e;
    return !1 === (null === (e = i.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed);
}
