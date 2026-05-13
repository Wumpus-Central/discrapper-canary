r.d(t, { JO: () => k, Cm: () => p, dN: () => b, $b: () => C, mf: () => h, h6: () => f });
var i = r(554146),
    n = r(367727),
    s = r(994500),
    o = r(174459),
    a = r(927813),
    l = r(609415),
    u = r(17928),
    E = r(228366);
let _ = d();
function d() {
    return { ignoreTimestamps: {} };
}
class A extends u.Ay.PersistedStore {
    static displayName = "IgnoreNoticeStore";
    static persistKey = "IgnoreNoticeStore";
    initialize(e) {
        let t = e?.ignoreTimestamps ?? {};
        _ = { ...d(), ignoreTimestamps: t };
    }
    getState() {
        return _;
    }
    getIgnoreTimestamps() {
        return _.ignoreTimestamps;
    }
}
let c = new A(E.h, {
        RELATIONSHIP_IGNORE_USER_SUCCESS: function (e) {
            let { userId: t, timestamp: r } = e;
            _.ignoreTimestamps[t] = r;
        },
    }),
    I = (0, r(240921).Ay)({
        name: "2026-05-ignore-user-feedback",
        kind: "user",
        defaultConfig: { enabled: !1, shouldGetShorterIgnoreDuration: !1 },
        variations: {
            0: { enabled: !1, shouldGetShorterIgnoreDuration: !1 },
            1: { enabled: !0, shouldGetShorterIgnoreDuration: !1 },
            2: { enabled: !0, shouldGetShorterIgnoreDuration: !0 },
        },
    });
var S = r(14594),
    g = r(652215);
let m = 3 * a.A.Millis.DAY,
    D = a.A.Millis.WEEK,
    T = a.A.Millis.DAYS_30,
    p = () => {
        if (!(0, l.Bv)("block_user_feedback_utils")) return !1;
        let e = s.A.getSinces();
        return Object.keys(e).some((t) => {
            let r = Date.now() - Date.parse(e[t]);
            return s.A.isBlocked(t) && r > D && r < T;
        });
    },
    C = (e, t, r, i) => {
        o.default.track(g.HAw.BLOCK_USER_FEEDBACK_SUBMITTED, { rating: e, feedback: t, reason: r, skipped: i });
    },
    f = () => {
        let { enabled: e, shouldGetShorterIgnoreDuration: t } = I.getConfig({ location: "ignore_user_feedback_utils" });
        if (!e) return !1;
        let { isDismissed: r } = (0, n.FZ)(i.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, { cooldownDurationMs: S.aH });
        if (r) return !1;
        let o = t ? m : D,
            a = c.getIgnoreTimestamps();
        return Object.keys(a).some((e) => {
            let t = Date.now() - Number(a[e]);
            return s.A.isIgnored(e) && t > o && t < T;
        });
    },
    h = (e, t, r, i) => {
        o.default.track(g.HAw.IGNORE_USER_FEEDBACK_SUBMITTED, { rating: e, feedback: t, reason: r, skipped: i });
    },
    k = (e) => (e === i.M.AGE_VERIFICATION_SURVEY_MODAL_CLOSE ? S.mg.KID_STARTED : S.mg.GET_STARTED),
    b = (e, t, r, i, n) => {
        o.default.track(g.HAw.AGE_VERIFICATION_FEEDBACK_SUBMITTED, {
            rating: e,
            feedback: t,
            reason: r,
            skipped: i,
            entrypoint: n,
        });
    };
