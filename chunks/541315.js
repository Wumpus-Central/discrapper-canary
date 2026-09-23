n.d(t, { Cm: () => R, $b: () => C, mf: () => S, h6: () => O });
var i = n(554146),
    l = n(367727),
    r = n(994500),
    s = n(174459),
    a = n(927813),
    E = n(17928),
    o = n(228366);
let c = u();
function u() {
    return { ignoreTimestamps: {} };
}
class _ extends E.Ay.PersistedStore {
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
let A = new _(o.h, {
    RELATIONSHIP_IGNORE_USER_SUCCESS: function (e) {
        let { userId: t, timestamp: n } = e;
        c.ignoreTimestamps[t] = n;
    },
});
var T = n(14594),
    d = n(652215);
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
    s.default.track(d.HAw.BLOCK_USER_FEEDBACK_SUBMITTED, { rating: e, feedback: t, reason: n, skipped: i });
}
function O() {
    let { isDismissed: e } = (0, l.FZ)(i.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, { cooldownDurationMs: T.aH });
    if (e) return !1;
    let t = A.getIgnoreTimestamps();
    return Object.keys(t).some((e) => {
        let n = Date.now() - Number(t[e]);
        return r.A.isIgnored(e) && n > I && n < N;
    });
}
function S(e, t, n, i) {
    s.default.track(d.HAw.IGNORE_USER_FEEDBACK_SUBMITTED, { rating: e, feedback: t, reason: n, skipped: i });
}
