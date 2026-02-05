"use strict";
n.d(t, {
    A8: () => g,
    AT: () => s,
    Eb: () => T,
    Iv: () => d,
    M8: () => p,
    Qv: () => _,
    V5: () => f,
    XN: () => c,
    ZU: () => u,
    d$: () => a,
    g0: () => l,
    nY: () => h,
    qN: () => A,
    ti: () => y,
    w$: () => E,
    wQ: () => I,
    xw: () => o,
    yN: () => m,
});
var r = n(110259),
    i = n(652215);
class a {
    static TOS_LINK = "https://discord.com/terms";
    static COMMUNITY_GUIDELINES = "https://discord.com/guidelines";
    static APPEALS_LINK = "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731";
    static WARNING_SYSTEM_HELPCENTER_LINK = "https://support.discord.com/hc/articles/18210965981847";
    static AGE_VERIFICATION_LINK = "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731";
    static SPAM_LINK =
        "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731&tf_360055270593=__dc.ticket_form-tnsv1_appeals_other_questions__";
    static LEARN_MORE_UU_APPEAL_LINK = "https://support.discord.com/hc/articles/360041820932";
}
class s {
    static CLASSIFICATION_ID = "classification_id";
    static INCIDENT_TIMESTAMP = "incident_time";
}
var o = (function (e) {
    return (e.POLICY_VIOLATION_DETAIL = "policy_violation_detail"), (e.LEARN_MORE_LINK = "learn_more_link"), e;
})({});
class l {
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
var u = (function (e) {
        return (
            (e[(e.ViewViolationDetail = 0)] = "ViewViolationDetail"),
            (e[(e.ViewViolationsDropdown = 1)] = "ViewViolationsDropdown"),
            (e[(e.ClickLetUsKnow = 2)] = "ClickLetUsKnow"),
            (e[(e.ClickAgeVerificationLink = 3)] = "ClickAgeVerificationLink"),
            (e[(e.ClickSpamWebformLink = 4)] = "ClickSpamWebformLink"),
            (e[(e.ClickLearnMoreLink = 5)] = "ClickLearnMoreLink"),
            (e[(e.ClickCommunityGuidelinesLink = 6)] = "ClickCommunityGuidelinesLink"),
            (e[(e.ClickWarningSystemHelpcenterLink = 7)] = "ClickWarningSystemHelpcenterLink"),
            e
        );
    })({}),
    c = (function (e) {
        return (
            (e[(e.SystemDM = 0)] = "SystemDM"),
            (e[(e.StandingTab = 1)] = "StandingTab"),
            (e[(e.AppealIngestion = 2)] = "AppealIngestion"),
            e
        );
    })({});
Object.freeze({
    SPEED_BUMP: i.JJy.APPEAL_INGESTION_SPEED_BUMP,
    COLLECT_SIGNAL: i.JJy.APPEAL_INGESTION_COLLECT_SIGNAL,
    CONFIRM_SUBMISSION: i.JJy.APPEAL_INGESTION_CONFIRM_SUBMISSION,
    REQUEST_SENT: i.JJy.APPEAL_INGESTION_REQUEST_SENT,
    THANKS: i.JJy.APPEAL_INGESTION_THANKS,
    SPAM: i.JJy.APPEAL_INGESTION_SPAM,
});
var d = (function (e) {
    return (
        (e[(e.DIDNT_VIOLATE_POLICY = 0)] = "DIDNT_VIOLATE_POLICY"),
        (e[(e.TOO_STRICT_UNFAIR = 1)] = "TOO_STRICT_UNFAIR"),
        (e[(e.DONT_AGREE_PENALTY = 2)] = "DONT_AGREE_PENALTY"),
        (e[(e.SOMETHING_ELSE = 3)] = "SOMETHING_ELSE"),
        e
    );
})({});
let _ = [0, 1, 2, 3],
    f = 372,
    p = 279,
    h = { impression_group: r.ImpressionGroups.APPEAL_INGESTION };
var m = (function (e) {
    return (
        (e.SPEED_BUMP = "speed-bump"),
        (e.COLLECT_SIGNAL = "collect-signal"),
        (e.CONFIRM_SUBMISSION = "confirm-submission"),
        (e.REQUEST_SENT = "request-sent"),
        (e.THANKS = "thanks"),
        e
    );
})({});
let g = {
    "speed-bump": { next: "collect-signal", prev: null },
    "collect-signal": { next: "confirm-submission", prev: "speed-bump" },
    "confirm-submission": { next: "request-sent", prev: "collect-signal" },
    "request-sent": { next: null, prev: null },
};
var E = (function (e) {
        return (
            (e[(e.USER = 1)] = "USER"),
            (e[(e.GUILD_OWNER = 2)] = "GUILD_OWNER"),
            (e[(e.GUILD_MEMBER = 3)] = "GUILD_MEMBER"),
            e
        );
    })({}),
    A = (function (e) {
        return (
            (e.LOADING = "loading"),
            (e.ERROR = "error"),
            (e.SUCCESS = "success"),
            (e.FAILURE = "failure"),
            (e.NONE = "none"),
            e
        );
    })({});
let I = 2e3,
    T = 15e3,
    y = 5;
