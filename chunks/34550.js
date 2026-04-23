r.d(t, { $b: () => f, Cm: () => p, JO: () => x, dN: () => A, h6: () => h, mf: () => E });
var o = r(554146),
    a = r(367727),
    l = r(994500),
    n = r(954571),
    i = r(927813),
    s = r(609415),
    d = r(842524),
    u = r(235390),
    c = r(14594),
    _ = r(652215);
let b = 3 * i.A.Millis.DAY,
    g = i.A.Millis.WEEK,
    m = i.A.Millis.DAYS_30,
    p = () => {
        if (!(0, s.Bv)("block_user_feedback_utils")) return !1;
        let e = l.A.getSinces();
        return Object.keys(e).some((t) => {
            let r = Date.now() - Date.parse(e[t]);
            return l.A.isBlocked(t) && r > g && r < m;
        });
    },
    f = (e, t, r, o) => {
        n.default.track(_.HAw.BLOCK_USER_FEEDBACK_SUBMITTED, { rating: e, feedback: t, reason: r, skipped: o });
    },
    h = () => {
        let { enabled: e, shouldGetShorterIgnoreDuration: t } = (0, u.MA)("ignore_user_feedback_utils");
        if (!e) return !1;
        let { isDismissed: r } = (0, a.FZ)(o.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, { cooldownDurationMs: c.aH });
        if (r) return !1;
        let n = t ? b : g,
            i = d.A.getIgnoreTimestamps();
        return Object.keys(i).some((e) => {
            let t = Date.now() - Number(i[e]);
            return l.A.isIgnored(e) && t > n && t < m;
        });
    },
    E = (e, t, r, o) => {
        n.default.track(_.HAw.IGNORE_USER_FEEDBACK_SUBMITTED, { rating: e, feedback: t, reason: r, skipped: o });
    },
    x = (e) => (e === o.M.AGE_VERIFICATION_SURVEY_MODAL_CLOSE ? c.mg.KID_STARTED : c.mg.GET_STARTED),
    A = (e, t, r, o, a) => {
        n.default.track(_.HAw.AGE_VERIFICATION_FEEDBACK_SUBMITTED, {
            rating: e,
            feedback: t,
            reason: r,
            skipped: o,
            entrypoint: a,
        });
    };
