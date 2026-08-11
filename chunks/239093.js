"use strict";
n.d(t, {
    A8: () => C,
    AT: () => E,
    Eb: () => D,
    Iv: () => p,
    M8: () => g,
    Qv: () => T,
    V5: () => m,
    XN: () => f,
    ZU: () => I,
    d$: () => _,
    g0: () => h,
    nY: () => S,
    qN: () => R,
    ti: () => y,
    w$: () => O,
    wQ: () => L,
    xw: () => A,
    yN: () => N,
});
var i,
    r,
    a,
    s,
    l,
    o,
    d,
    c = n(562708),
    u = n(652215);
class _ {
    static TOS_LINK = "https://discord.com/terms";
    static COMMUNITY_GUIDELINES = "https://discord.com/guidelines";
    static APPEALS_LINK = "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731";
    static WARNING_SYSTEM_HELPCENTER_LINK = "https://support.discord.com/hc/articles/18210965981847";
    static AGE_VERIFICATION_LINK = "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731";
    static SPAM_LINK =
        "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731&tf_360055270593=__dc.ticket_form-tnsv1_appeals_other_questions__";
    static LEARN_MORE_UU_APPEAL_LINK = "https://support.discord.com/hc/articles/360041820932";
    static APP_APPEAL_LINK = "https://dis.gd/app-appeal";
}
class E {
    static CLASSIFICATION_ID = "classification_id";
    static INCIDENT_TIMESTAMP = "incident_time";
}
var A = (((i = {}).POLICY_VIOLATION_DETAIL = "policy_violation_detail"), (i.LEARN_MORE_LINK = "learn_more_link"), i);
class h {
    static ICON_TYPE = "icon_type";
    static HEADER = "header";
    static BODY = "body";
    static CTAS = "ctas";
    static TIMESTAMP = "timestamp";
    static THEME = "theme";
    static CLIENT_VERSION_MESSAGE = "client_version_message";
    static LEARN_MORE_LINK = "learn_more_link";
    static CLASSIFICATION_ID = "classification_id";
}
var I =
        (((r = {})[(r.ViewViolationDetail = 0)] = "ViewViolationDetail"),
        (r[(r.ViewViolationsDropdown = 1)] = "ViewViolationsDropdown"),
        (r[(r.ClickLetUsKnow = 2)] = "ClickLetUsKnow"),
        (r[(r.ClickAgeVerificationLink = 3)] = "ClickAgeVerificationLink"),
        (r[(r.ClickSpamWebformLink = 4)] = "ClickSpamWebformLink"),
        (r[(r.ClickLearnMoreLink = 5)] = "ClickLearnMoreLink"),
        (r[(r.ClickCommunityGuidelinesLink = 6)] = "ClickCommunityGuidelinesLink"),
        (r[(r.ClickWarningSystemHelpcenterLink = 7)] = "ClickWarningSystemHelpcenterLink"),
        (r[(r.ClickAppAppealLink = 8)] = "ClickAppAppealLink"),
        r),
    f =
        (((a = {})[(a.SystemDM = 0)] = "SystemDM"),
        (a[(a.StandingTab = 1)] = "StandingTab"),
        (a[(a.AppealIngestion = 2)] = "AppealIngestion"),
        a);
Object.freeze({
    SPEED_BUMP: u.JJy.APPEAL_INGESTION_SPEED_BUMP,
    COLLECT_SIGNAL: u.JJy.APPEAL_INGESTION_COLLECT_SIGNAL,
    CONFIRM_SUBMISSION: u.JJy.APPEAL_INGESTION_CONFIRM_SUBMISSION,
    REQUEST_SENT: u.JJy.APPEAL_INGESTION_REQUEST_SENT,
    THANKS: u.JJy.APPEAL_INGESTION_THANKS,
    SPAM: u.JJy.APPEAL_INGESTION_SPAM,
});
var p =
    (((s = {})[(s.DIDNT_VIOLATE_POLICY = 0)] = "DIDNT_VIOLATE_POLICY"),
    (s[(s.TOO_STRICT_UNFAIR = 1)] = "TOO_STRICT_UNFAIR"),
    (s[(s.DONT_AGREE_PENALTY = 2)] = "DONT_AGREE_PENALTY"),
    (s[(s.SOMETHING_ELSE = 3)] = "SOMETHING_ELSE"),
    s);
let T = [0, 1, 2, 3],
    m = 372,
    g = 279,
    S = { impression_group: c.ImpressionGroups.APPEAL_INGESTION };
var N =
    (((l = {}).SPEED_BUMP = "speed-bump"),
    (l.COLLECT_SIGNAL = "collect-signal"),
    (l.CONFIRM_SUBMISSION = "confirm-submission"),
    (l.REQUEST_SENT = "request-sent"),
    (l.THANKS = "thanks"),
    l);
let C = {
    "speed-bump": { next: "collect-signal", prev: null },
    "collect-signal": { next: "confirm-submission", prev: "speed-bump" },
    "confirm-submission": { next: "request-sent", prev: "collect-signal" },
    "request-sent": { next: null, prev: null },
};
var O =
        (((o = {})[(o.USER = 1)] = "USER"),
        (o[(o.GUILD_OWNER = 2)] = "GUILD_OWNER"),
        (o[(o.GUILD_MEMBER = 3)] = "GUILD_MEMBER"),
        o),
    R =
        (((d = {}).LOADING = "loading"),
        (d.ERROR = "error"),
        (d.SUCCESS = "success"),
        (d.FAILURE = "failure"),
        (d.NONE = "none"),
        d);
let L = 2e3,
    D = 15e3,
    y = 5;
