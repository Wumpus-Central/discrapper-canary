n.d(t, { Cm: () => R, $b: () => O, mf: () => C, h6: () => S });
var i = n(554146),
    l = n(367727),
    r = n(994500),
    s = n(174459),
    a = n(927813),
    E = n(17928),
    o = n(73153);
let c = _();
function _() {
    return { ignoreTimestamps: {} };
}
class u extends E.Ay.PersistedStore {
    static displayName = "IgnoreNoticeStore";
    static persistKey = "IgnoreNoticeStore";
    initialize(e) {
        let t = e?.ignoreTimestamps ?? {};
        c = { ..._(), ignoreTimestamps: t };
    }
    getState() {
        return c;
    }
    getIgnoreTimestamps() {
        return c.ignoreTimestamps;
    }
}
let A = new u(o.h, {
    RELATIONSHIP_IGNORE_USER_SUCCESS: function (e) {
        let { userId: t, timestamp: n } = e;
        c.ignoreTimestamps[t] = n;
    },
});
var T = n(14594),
    I = n(652215);
let d = a.A.Millis.WEEK,
    N = a.A.Millis.DAYS_30;
function R() {
    let e = r.A.getSinces();
    return Object.keys(e).some((t) => {
        let n = Date.now() - Date.parse(e[t]);
        return r.A.isBlocked(t) && n > d && n < N;
    });
}
function O(e, t, n, i) {
    s.default.track(I.HAw.BLOCK_USER_FEEDBACK_SUBMITTED, { rating: e, feedback: t, reason: n, skipped: i });
}
function S() {
    let { isDismissed: e } = (0, l.FZ)(i.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, { cooldownDurationMs: T.aH });
    if (e) return !1;
    let t = A.getIgnoreTimestamps();
    return Object.keys(t).some((e) => {
        let n = Date.now() - Number(t[e]);
        return r.A.isIgnored(e) && n > d && n < N;
    });
}
function C(e, t, n, i) {
    s.default.track(I.HAw.IGNORE_USER_FEEDBACK_SUBMITTED, { rating: e, feedback: t, reason: n, skipped: i });
}
