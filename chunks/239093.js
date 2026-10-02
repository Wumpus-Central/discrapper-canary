n.d(t, {
    A8: () => O,
    AT: () => A,
    Eb: () => v,
    Iv: () => T,
    M8: () => S,
    Qv: () => m,
    V5: () => g,
    XN: () => p,
    ZU: () => f,
    aC: () => L,
    d$: () => E,
    g0: () => I,
    nY: () => N,
    qN: () => y,
    ti: () => b,
    w$: () => R,
    wQ: () => D,
    xw: () => h,
    yN: () => C,
});
var i,
    r,
    a,
    s,
    l,
    o,
    d,
    c,
    u = n(562708),
    _ = n(652215);
class E {
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
class A {
    static CLASSIFICATION_ID = "classification_id";
    static INCIDENT_TIMESTAMP = "incident_time";
}
var h = (((i = {}).POLICY_VIOLATION_DETAIL = "policy_violation_detail"), (i.LEARN_MORE_LINK = "learn_more_link"), i);
class I {
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
var f =
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
    p =
        (((a = {})[(a.SystemDM = 0)] = "SystemDM"),
        (a[(a.StandingTab = 1)] = "StandingTab"),
        (a[(a.AppealIngestion = 2)] = "AppealIngestion"),
        a);
Object.freeze({
    SPEED_BUMP: _.JJy.APPEAL_INGESTION_SPEED_BUMP,
    COLLECT_SIGNAL: _.JJy.APPEAL_INGESTION_COLLECT_SIGNAL,
    CONFIRM_SUBMISSION: _.JJy.APPEAL_INGESTION_CONFIRM_SUBMISSION,
    REQUEST_SENT: _.JJy.APPEAL_INGESTION_REQUEST_SENT,
    THANKS: _.JJy.APPEAL_INGESTION_THANKS,
    SPAM: _.JJy.APPEAL_INGESTION_SPAM,
});
var T =
    (((s = {})[(s.DIDNT_VIOLATE_POLICY = 0)] = "DIDNT_VIOLATE_POLICY"),
    (s[(s.TOO_STRICT_UNFAIR = 1)] = "TOO_STRICT_UNFAIR"),
    (s[(s.DONT_AGREE_PENALTY = 2)] = "DONT_AGREE_PENALTY"),
    (s[(s.SOMETHING_ELSE = 3)] = "SOMETHING_ELSE"),
    s);
let m = [0, 1, 2, 3],
    g = 372,
    S = 279,
    N = { impression_group: u.ImpressionGroups.APPEAL_INGESTION };
var C =
    (((l = {}).SPEED_BUMP = "speed-bump"),
    (l.COLLECT_SIGNAL = "collect-signal"),
    (l.CONFIRM_SUBMISSION = "confirm-submission"),
    (l.REQUEST_SENT = "request-sent"),
    (l.THANKS = "thanks"),
    l);
let O = {
    "speed-bump": { next: "collect-signal", prev: null },
    "collect-signal": { next: "confirm-submission", prev: "speed-bump" },
    "confirm-submission": { next: "request-sent", prev: "collect-signal" },
    "request-sent": { next: null, prev: null },
};
var R =
        (((o = {})[(o.USER = 1)] = "USER"),
        (o[(o.GUILD_OWNER = 2)] = "GUILD_OWNER"),
        (o[(o.GUILD_MEMBER = 3)] = "GUILD_MEMBER"),
        o),
    L =
        (((d = {})[(d.PENDING = 1)] = "PENDING"),
        (d[(d.UNBANNED = 2)] = "UNBANNED"),
        (d[(d.VERIFIED_OTHER_VIOLATIONS_REMAIN = 3)] = "VERIFIED_OTHER_VIOLATIONS_REMAIN"),
        (d[(d.UNDERAGE = 4)] = "UNDERAGE"),
        (d[(d.UNDERAGE_MANUAL_REVIEW = 5)] = "UNDERAGE_MANUAL_REVIEW"),
        d),
    y =
        (((c = {}).LOADING = "loading"),
        (c.ERROR = "error"),
        (c.SUCCESS = "success"),
        (c.FAILURE = "failure"),
        (c.NONE = "none"),
        (c.VERIFIED = "verified"),
        (c.VERIFIED_OTHER_VIOLATIONS_REMAIN = "verified_other_violations_remain"),
        (c.UNDERAGE = "underage"),
        (c.UNDERAGE_MANUAL_REVIEW = "underage_manual_review"),
        c);
let D = 2e3,
    v = 15e3,
    b = 5;
