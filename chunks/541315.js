n.d(t, { Cm: () => R, $b: () => C, mf: () => m, h6: () => O });
var i = n(554146),
    l = n(367727),
    r = n(994500),
    s = n(174459),
    a = n(927813),
    o = n(17928),
    c = n(228366);
let E = u();
function u() {
    return { ignoreTimestamps: {} };
}
class d extends o.Ay.PersistedStore {
    static displayName = "IgnoreNoticeStore";
    static persistKey = "IgnoreNoticeStore";
    initialize(e) {
        let t = e?.ignoreTimestamps ?? {};
        E = { ...u(), ignoreTimestamps: t };
    }
    getState() {
        return E;
    }
    getIgnoreTimestamps() {
        return E.ignoreTimestamps;
    }
}
let _ = new d(c.h, {
    RELATIONSHIP_IGNORE_USER_SUCCESS: function (e) {
        let { userId: t, timestamp: n } = e;
        E.ignoreTimestamps[t] = n;
    },
});
var A = n(14594),
    T = n(652215);
let I = a.A.Millis.WEEK,
    N = a.A.Millis.DAYS_30;
function R() {
    let e = r.A.getSinces();
    return Object.keys(e).some((t) => {
        let n = Date.now() - Date.parse(e[t]);
        return r.A.isBlocked(t) && n > I && n < N;
    });
}
function C(e, t, n, i) {
    s.default.track(T.HAw.BLOCK_USER_FEEDBACK_SUBMITTED, { rating: e, feedback: t, reason: n, skipped: i });
}
function O() {
    let { isDismissed: e } = (0, l.FZ)(i.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, { cooldownDurationMs: A.aH });
    if (e) return !1;
    let t = _.getIgnoreTimestamps();
    return Object.keys(t).some((e) => {
        let n = Date.now() - Number(t[e]);
        return r.A.isIgnored(e) && n > I && n < N;
    });
}
function m(e, t, n, i) {
    s.default.track(T.HAw.IGNORE_USER_FEEDBACK_SUBMITTED, { rating: e, feedback: t, reason: n, skipped: i });
}
