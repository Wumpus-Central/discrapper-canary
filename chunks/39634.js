r.d(t, { JO: () => I, Cm: () => y, dN: () => w, $b: () => A, mf: () => v, h6: () => S });
var o = r(554146),
    a = r(367727),
    n = r(994500),
    l = r(954571),
    i = r(927813),
    s = r(609415),
    u = r(17928),
    d = r(228366);
let c = _();
function _() {
    return { ignoreTimestamps: {} };
}
class b extends u.Ay.PersistedStore {
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
let g = new b(d.h, {
        RELATIONSHIP_IGNORE_USER_SUCCESS: function (e) {
            let { userId: t, timestamp: r } = e;
            c.ignoreTimestamps[t] = r;
        },
    }),
    m = (0, r(600975).C)({
        kind: "user",
        id: "2025-04_ignore_user_feedback",
        label: "Ignore User Feedback Experiment",
        defaultConfig: { enabled: !1, shouldGetShorterIgnoreDuration: !1 },
        treatments: [
            {
                id: 1,
                label: "Enable Ignore User Feedback Survey",
                config: { enabled: !0, shouldGetShorterIgnoreDuration: !1 },
            },
            {
                id: 2,
                label: "Enable Ignore User Feedback Survey w/ shorter duration for testing",
                config: { enabled: !0, shouldGetShorterIgnoreDuration: !0 },
            },
        ],
    });
var p = r(14594),
    f = r(652215);
let h = 3 * i.A.Millis.DAY,
    E = i.A.Millis.WEEK,
    x = i.A.Millis.DAYS_30,
    y = () => {
        if (!(0, s.Bv)("block_user_feedback_utils")) return !1;
        let e = n.A.getSinces();
        return Object.keys(e).some((t) => {
            let r = Date.now() - Date.parse(e[t]);
            return n.A.isBlocked(t) && r > E && r < x;
        });
    },
    A = (e, t, r, o) => {
        l.default.track(f.HAw.BLOCK_USER_FEEDBACK_SUBMITTED, { rating: e, feedback: t, reason: r, skipped: o });
    },
    S = () => {
        let { enabled: e, shouldGetShorterIgnoreDuration: t } = m.getCurrentConfig(
            { location: "ignore_user_feedback_utils" },
            { autoTrackExposure: !0 },
        );
        if (!e) return !1;
        let { isDismissed: r } = (0, a.FZ)(o.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, { cooldownDurationMs: p.aH });
        if (r) return !1;
        let l = t ? h : E,
            i = g.getIgnoreTimestamps();
        return Object.keys(i).some((e) => {
            let t = Date.now() - Number(i[e]);
            return n.A.isIgnored(e) && t > l && t < x;
        });
    },
    v = (e, t, r, o) => {
        l.default.track(f.HAw.IGNORE_USER_FEEDBACK_SUBMITTED, { rating: e, feedback: t, reason: r, skipped: o });
    },
    I = (e) => (e === o.M.AGE_VERIFICATION_SURVEY_MODAL_CLOSE ? p.mg.KID_STARTED : p.mg.GET_STARTED),
    w = (e, t, r, o, a) => {
        l.default.track(f.HAw.AGE_VERIFICATION_FEEDBACK_SUBMITTED, {
            rating: e,
            feedback: t,
            reason: r,
            skipped: o,
            entrypoint: a,
        });
    };
