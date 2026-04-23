"use strict";
n.d(t, { $b: () => T, Cm: () => I, JO: () => p, dN: () => C, h6: () => N, mf: () => g });
var i = n(554146),
    r = n(367727),
    l = n(994500),
    s = n(954571),
    a = n(927813),
    o = n(609415),
    c = n(842524),
    u = n(235390),
    d = n(14594),
    _ = n(652215);
let E = 3 * a.A.Millis.DAY,
    A = a.A.Millis.WEEK,
    m = a.A.Millis.DAYS_30,
    I = () => {
        if (!(0, o.Bv)("block_user_feedback_utils")) return !1;
        let e = l.A.getSinces();
        return Object.keys(e).some((t) => {
            let n = Date.now() - Date.parse(e[t]);
            return l.A.isBlocked(t) && n > A && n < m;
        });
    },
    T = (e, t, n, i) => {
        s.default.track(_.HAw.BLOCK_USER_FEEDBACK_SUBMITTED, { rating: e, feedback: t, reason: n, skipped: i });
    },
    N = () => {
        let { enabled: e, shouldGetShorterIgnoreDuration: t } = (0, u.MA)("ignore_user_feedback_utils");
        if (!e) return !1;
        let { isDismissed: n } = (0, r.FZ)(i.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, { cooldownDurationMs: d.aH });
        if (n) return !1;
        let s = t ? E : A,
            a = c.A.getIgnoreTimestamps();
        return Object.keys(a).some((e) => {
            let t = Date.now() - Number(a[e]);
            return l.A.isIgnored(e) && t > s && t < m;
        });
    },
    g = (e, t, n, i) => {
        s.default.track(_.HAw.IGNORE_USER_FEEDBACK_SUBMITTED, { rating: e, feedback: t, reason: n, skipped: i });
    },
    p = (e) => (e === i.M.AGE_VERIFICATION_SURVEY_MODAL_CLOSE ? d.mg.KID_STARTED : d.mg.GET_STARTED),
    C = (e, t, n, i, r) => {
        s.default.track(_.HAw.AGE_VERIFICATION_FEEDBACK_SUBMITTED, {
            rating: e,
            feedback: t,
            reason: n,
            skipped: i,
            entrypoint: r,
        });
    };
