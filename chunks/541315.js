n.d(t, { Cm: () => p, $b: () => T, mf: () => g, h6: () => m });
var i = n(554146),
    r = n(501419),
    a = n(994500),
    s = n(174459),
    l = n(927813),
    o = n(17928),
    d = n(73153);
let c = u();
function u() {
    return { ignoreTimestamps: {} };
}
class _ extends o.Ay.PersistedStore {
    static displayName = "IgnoreNoticeStore";
    static persistKey = "IgnoreNoticeStore";
    initialize(e) {
        let t = e?.ignoreTimestamps ?? {};
        c = { ...u(), ignoreTimestamps: t };
    }
    getState() {
        return c;
    }
    getIgnoreTimestamps() {
        return c.ignoreTimestamps;
    }
}
let E = new _(d.h, {
    RELATIONSHIP_IGNORE_USER_SUCCESS: function (e) {
        let { userId: t, timestamp: n } = e;
        c.ignoreTimestamps[t] = n;
    },
});
var A = n(14594),
    h = n(652215);
let f = l.A.Millis.WEEK,
    I = l.A.Millis.DAYS_30;
function p() {
    let e = a.A.getSinces();
    return Object.keys(e).some((t) => {
        let n = Date.now() - Date.parse(e[t]);
        return a.A.isBlocked(t) && n > f && n < I;
    });
}
function T(e, t, n, i) {
    s.default.track(h.HAw.BLOCK_USER_FEEDBACK_SUBMITTED, { rating: e, feedback: t, reason: n, skipped: i });
}
function m() {
    let { isDismissed: e } = (0, r.FZ)(i.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, { cooldownDurationMs: A.aH });
    if (e) return !1;
    let t = E.getIgnoreTimestamps();
    return Object.keys(t).some((e) => {
        let n = Date.now() - Number(t[e]);
        return a.A.isIgnored(e) && n > f && n < I;
    });
}
function g(e, t, n, i) {
    s.default.track(h.HAw.IGNORE_USER_FEEDBACK_SUBMITTED, { rating: e, feedback: t, reason: n, skipped: i });
}
