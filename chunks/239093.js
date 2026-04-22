"use strict";
n.d(t, {
    A8: () => N,
    AT: () => f,
    Eb: () => C,
    Iv: () => g,
    M8: () => T,
    Qv: () => A,
    V5: () => I,
    XN: () => m,
    ZU: () => p,
    d$: () => _,
    g0: () => h,
    nY: () => S,
    qN: () => R,
    ti: () => b,
    w$: () => O,
    wQ: () => v,
    xw: () => E,
    yN: () => y,
});
var r,
    i,
    s,
    a,
    o,
    l,
    u,
    d = n(110259),
    c = n(652215);
class _ {
    static TOS_LINK = "https://discord.com/terms";
    static COMMUNITY_GUIDELINES = "https://discord.com/guidelines";
    static APPEALS_LINK = "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731";
    static WARNING_SYSTEM_HELPCENTER_LINK = "https://support.discord.com/hc/articles/18210965981847";
    static AGE_VERIFICATION_LINK = "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731";
    static SPAM_LINK =
        "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731&tf_360055270593=__dc.ticket_form-tnsv1_appeals_other_questions__";
    static LEARN_MORE_UU_APPEAL_LINK = "https://support.discord.com/hc/articles/360041820932";
}
class f {
    static CLASSIFICATION_ID = "classification_id";
    static INCIDENT_TIMESTAMP = "incident_time";
}
var E = (((r = {}).POLICY_VIOLATION_DETAIL = "policy_violation_detail"), (r.LEARN_MORE_LINK = "learn_more_link"), r);
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
var p =
        (((i = {})[(i.ViewViolationDetail = 0)] = "ViewViolationDetail"),
        (i[(i.ViewViolationsDropdown = 1)] = "ViewViolationsDropdown"),
        (i[(i.ClickLetUsKnow = 2)] = "ClickLetUsKnow"),
        (i[(i.ClickAgeVerificationLink = 3)] = "ClickAgeVerificationLink"),
        (i[(i.ClickSpamWebformLink = 4)] = "ClickSpamWebformLink"),
        (i[(i.ClickLearnMoreLink = 5)] = "ClickLearnMoreLink"),
        (i[(i.ClickCommunityGuidelinesLink = 6)] = "ClickCommunityGuidelinesLink"),
        (i[(i.ClickWarningSystemHelpcenterLink = 7)] = "ClickWarningSystemHelpcenterLink"),
        i),
    m =
        (((s = {})[(s.SystemDM = 0)] = "SystemDM"),
        (s[(s.StandingTab = 1)] = "StandingTab"),
        (s[(s.AppealIngestion = 2)] = "AppealIngestion"),
        s);
Object.freeze({
    SPEED_BUMP: c.JJy.APPEAL_INGESTION_SPEED_BUMP,
    COLLECT_SIGNAL: c.JJy.APPEAL_INGESTION_COLLECT_SIGNAL,
    CONFIRM_SUBMISSION: c.JJy.APPEAL_INGESTION_CONFIRM_SUBMISSION,
    REQUEST_SENT: c.JJy.APPEAL_INGESTION_REQUEST_SENT,
    THANKS: c.JJy.APPEAL_INGESTION_THANKS,
    SPAM: c.JJy.APPEAL_INGESTION_SPAM,
});
var g =
    (((a = {})[(a.DIDNT_VIOLATE_POLICY = 0)] = "DIDNT_VIOLATE_POLICY"),
    (a[(a.TOO_STRICT_UNFAIR = 1)] = "TOO_STRICT_UNFAIR"),
    (a[(a.DONT_AGREE_PENALTY = 2)] = "DONT_AGREE_PENALTY"),
    (a[(a.SOMETHING_ELSE = 3)] = "SOMETHING_ELSE"),
    a);
let A = [0, 1, 2, 3],
    I = 372,
    T = 279,
    S = { impression_group: d.ImpressionGroups.APPEAL_INGESTION };
var y =
    (((o = {}).SPEED_BUMP = "speed-bump"),
    (o.COLLECT_SIGNAL = "collect-signal"),
    (o.CONFIRM_SUBMISSION = "confirm-submission"),
    (o.REQUEST_SENT = "request-sent"),
    (o.THANKS = "thanks"),
    o);
let N = {
    "speed-bump": { next: "collect-signal", prev: null },
    "collect-signal": { next: "confirm-submission", prev: "speed-bump" },
    "confirm-submission": { next: "request-sent", prev: "collect-signal" },
    "request-sent": { next: null, prev: null },
};
var O =
        (((l = {})[(l.USER = 1)] = "USER"),
        (l[(l.GUILD_OWNER = 2)] = "GUILD_OWNER"),
        (l[(l.GUILD_MEMBER = 3)] = "GUILD_MEMBER"),
        l),
    R =
        (((u = {}).LOADING = "loading"),
        (u.ERROR = "error"),
        (u.SUCCESS = "success"),
        (u.FAILURE = "failure"),
        (u.NONE = "none"),
        u);
let v = 2e3,
    C = 15e3,
    b = 5;
