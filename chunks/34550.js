n.d(t, {
    $b: () => _,
    Cm: () => h,
    JO: () => y,
    dN: () => v,
    h6: () => b,
    mf: () => A,
});
var r = n(554146),
    i = n(367727),
    l = n(994500),
    a = n(954571),
    s = n(927813),
    o = n(609415),
    c = n(842524),
    u = n(235390),
    d = n(14594),
    p = n(652215);
let m = 3 * s.A.Millis.DAY,
    f = s.A.Millis.WEEK,
    g = s.A.Millis.DAYS_30,
    h = () => {
        if (!(0, o.Bv)("block_user_feedback_utils")) return !1;
        let e = l.A.getSinces();
        return Object.keys(e).some((t) => {
            let n = Date.now() - Date.parse(e[t]);
            return l.A.isBlocked(t) && n > f && n < g;
        });
    },
    _ = (e, t, n, r) => {
        a.default.track(p.HAw.BLOCK_USER_FEEDBACK_SUBMITTED, {
            rating: e,
            feedback: t,
            reason: n,
            skipped: r,
        });
    },
    b = () => {
        let { enabled: e, shouldGetShorterIgnoreDuration: t } = (0, u.MA)("ignore_user_feedback_utils");
        if (!e) return !1;
        let { isDismissed: n } = (0, i.FZ)(r.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, {
            cooldownDurationMs: d.aH,
        });
        if (n) return !1;
        let a = t ? m : f,
            s = c.A.getIgnoreTimestamps();
        return Object.keys(s).some((e) => {
            let t = Date.now() - Number(s[e]);
            return l.A.isIgnored(e) && t > a && t < g;
        });
    },
    A = (e, t, n, r) => {
        a.default.track(p.HAw.IGNORE_USER_FEEDBACK_SUBMITTED, {
            rating: e,
            feedback: t,
            reason: n,
            skipped: r,
        });
    },
    y = (e) => (e === r.M.AGE_VERIFICATION_SURVEY_MODAL_CLOSE ? d.mg.KID_STARTED : d.mg.GET_STARTED),
    v = (e, t, n, r, i) => {
        a.default.track(p.HAw.AGE_VERIFICATION_FEEDBACK_SUBMITTED, {
            rating: e,
            feedback: t,
            reason: n,
            skipped: r,
            entrypoint: i,
        });
    };
