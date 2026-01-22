n.d(t, {
    A8: () => E,
    AT: () => o,
    Eb: () => A,
    Iv: () => f,
    M8: () => h,
    Qv: () => p,
    V5: () => _,
    XN: () => d,
    ZU: () => u,
    d$: () => s,
    g0: () => c,
    nY: () => m,
    qN: () => y,
    ti: () => v,
    w$: () => b,
    wQ: () => O,
    xw: () => l,
    yN: () => g,
});
var r = n(110259),
    i = n(652215);

function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class s {}
a(s, "TOS_LINK", "https://discord.com/terms"),
    a(s, "COMMUNITY_GUIDELINES", "https://discord.com/guidelines"),
    a(s, "APPEALS_LINK", "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731"),
    a(s, "WARNING_SYSTEM_HELPCENTER_LINK", "https://support.discord.com/hc/articles/18210965981847"),
    a(s, "AGE_VERIFICATION_LINK", "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731"),
    a(
        s,
        "SPAM_LINK",
        "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731&tf_360055270593=__dc.ticket_form-tnsv1_appeals_other_questions__",
    ),
    a(s, "LEARN_MORE_UU_APPEAL_LINK", "https://support.discord.com/hc/articles/360041820932");
class o {}
a(o, "CLASSIFICATION_ID", "classification_id"), a(o, "INCIDENT_TIMESTAMP", "incident_time");
var l = (function (e) {
    return (e.POLICY_VIOLATION_DETAIL = "policy_violation_detail"), (e.LEARN_MORE_LINK = "learn_more_link"), e;
})({});
class c {}
a(c, "ICON_TYPE", "icon_type"),
    a(c, "HEADER", "header"),
    a(c, "BODY", "body"),
    a(c, "CTAS", "ctas"),
    a(c, "TIMESTAMP", "timestamp"),
    a(c, "THEME", "theme"),
    a(c, "CLIENT_VERSION_MESSAGE", "client_version_message"),
    a(c, "LEARN_MORE_LINK", "learn_more_link"),
    a(c, "CLASSIFICATION_ID", "classification_id");
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
    d = (function (e) {
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
var f = (function (e) {
    return (
        (e[(e.DIDNT_VIOLATE_POLICY = 0)] = "DIDNT_VIOLATE_POLICY"),
        (e[(e.TOO_STRICT_UNFAIR = 1)] = "TOO_STRICT_UNFAIR"),
        (e[(e.DONT_AGREE_PENALTY = 2)] = "DONT_AGREE_PENALTY"),
        (e[(e.SOMETHING_ELSE = 3)] = "SOMETHING_ELSE"),
        e
    );
})({});
let p = [0, 1, 2, 3],
    _ = 372,
    h = 279,
    m = {
        impression_group: r.ImpressionGroups.APPEAL_INGESTION,
    };
var g = (function (e) {
    return (
        (e.SPEED_BUMP = "speed-bump"),
        (e.COLLECT_SIGNAL = "collect-signal"),
        (e.CONFIRM_SUBMISSION = "confirm-submission"),
        (e.REQUEST_SENT = "request-sent"),
        (e.THANKS = "thanks"),
        e
    );
})({});
let E = {
    "speed-bump": {
        next: "collect-signal",
        prev: null,
    },
    "collect-signal": {
        next: "confirm-submission",
        prev: "speed-bump",
    },
    "confirm-submission": {
        next: "request-sent",
        prev: "collect-signal",
    },
    "request-sent": {
        next: null,
        prev: null,
    },
};
var b = (function (e) {
        return (
            (e[(e.USER = 1)] = "USER"),
            (e[(e.GUILD_OWNER = 2)] = "GUILD_OWNER"),
            (e[(e.GUILD_MEMBER = 3)] = "GUILD_MEMBER"),
            e
        );
    })({}),
    y = (function (e) {
        return (
            (e.LOADING = "loading"),
            (e.ERROR = "error"),
            (e.SUCCESS = "success"),
            (e.FAILURE = "failure"),
            (e.NONE = "none"),
            e
        );
    })({});
let O = 2e3,
    A = 15e3,
    v = 5;
