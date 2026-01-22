n.d(t, {
    $b: () => g,
    Cm: () => m,
    JO: () => y,
    dN: () => O,
    h6: () => E,
    mf: () => b,
});
var r = n(554146),
    i = n(367727),
    a = n(994500),
    s = n(954571),
    o = n(927813),
    l = n(609415),
    c = n(842524),
    u = n(235390),
    d = n(14594),
    f = n(652215);
let p = 3 * o.A.Millis.DAY,
    _ = o.A.Millis.WEEK,
    h = o.A.Millis.DAYS_30,
    m = () => {
        if (!(0, l.Bv)("block_user_feedback_utils")) return !1;
        let e = a.A.getSinces();
        return Object.keys(e).some((t) => {
            let n = t,
                r = Date.now() - Date.parse(e[n]);
            return a.A.isBlocked(n) && r > _ && r < h;
        });
    },
    g = (e, t, n, r) => {
        s.default.track(f.HAw.BLOCK_USER_FEEDBACK_SUBMITTED, {
            rating: e,
            feedback: t,
            reason: n,
            skipped: r,
        });
    },
    E = () => {
        let { enabled: e, shouldGetShorterIgnoreDuration: t } = (0, u.MA)("ignore_user_feedback_utils");
        if (!e) return !1;
        let { isDismissed: n } = (0, i.FZ)(r.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, {
            cooldownDurationMs: d.aH,
        });
        if (n) return !1;
        let s = t ? p : _,
            o = c.A.getIgnoreTimestamps();
        return Object.keys(o).some((e) => {
            let t = e,
                n = Date.now() - Number(o[t]);
            return a.A.isIgnored(t) && n > s && n < h;
        });
    },
    b = (e, t, n, r) => {
        s.default.track(f.HAw.IGNORE_USER_FEEDBACK_SUBMITTED, {
            rating: e,
            feedback: t,
            reason: n,
            skipped: r,
        });
    },
    y = (e) => (e === r.M.AGE_VERIFICATION_SURVEY_MODAL_CLOSE ? d.mg.KID_STARTED : d.mg.GET_STARTED),
    O = (e, t, n, r, i) => {
        s.default.track(f.HAw.AGE_VERIFICATION_FEEDBACK_SUBMITTED, {
            rating: e,
            feedback: t,
            reason: n,
            skipped: r,
            entrypoint: i,
        });
    };
