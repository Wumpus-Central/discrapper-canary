"use strict";
n.d(t, { JO: () => C, Cm: () => T, dN: () => v, $b: () => S, mf: () => y, h6: () => N });
var i = n(554146),
    r = n(281678),
    s = n(994500),
    a = n(174459),
    o = n(927813),
    l = n(609415),
    u = n(17928),
    c = n(228366);
let d = _();
function _() {
    return { ignoreTimestamps: {} };
}
class f extends u.Ay.PersistedStore {
    static displayName = "IgnoreNoticeStore";
    static persistKey = "IgnoreNoticeStore";
    initialize(e) {
        let t = e?.ignoreTimestamps ?? {};
        d = { ..._(), ignoreTimestamps: t };
    }
    getState() {
        return d;
    }
    getIgnoreTimestamps() {
        return d.ignoreTimestamps;
    }
}
let h = new f(c.h, {
        RELATIONSHIP_IGNORE_USER_SUCCESS: function (e) {
            let { userId: t, timestamp: n } = e;
            d.ignoreTimestamps[t] = n;
        },
    }),
    p = (0, n(600975).C)({
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
var E = n(14594),
    m = n(652215);
let g = 3 * o.A.Millis.DAY,
    A = o.A.Millis.WEEK,
    I = o.A.Millis.DAYS_30,
    T = () => {
        if (!(0, l.Bv)("block_user_feedback_utils")) return !1;
        let e = s.A.getSinces();
        return Object.keys(e).some((t) => {
            let n = Date.now() - Date.parse(e[t]);
            return s.A.isBlocked(t) && n > A && n < I;
        });
    },
    S = (e, t, n, i) => {
        a.default.track(m.HAw.BLOCK_USER_FEEDBACK_SUBMITTED, { rating: e, feedback: t, reason: n, skipped: i });
    },
    N = () => {
        let { enabled: e, shouldGetShorterIgnoreDuration: t } = p.getCurrentConfig(
            { location: "ignore_user_feedback_utils" },
            { autoTrackExposure: !0 },
        );
        if (!e) return !1;
        let { isDismissed: n } = (0, r.FZ)(i.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, { cooldownDurationMs: E.aH });
        if (n) return !1;
        let a = t ? g : A,
            o = h.getIgnoreTimestamps();
        return Object.keys(o).some((e) => {
            let t = Date.now() - Number(o[e]);
            return s.A.isIgnored(e) && t > a && t < I;
        });
    },
    y = (e, t, n, i) => {
        a.default.track(m.HAw.IGNORE_USER_FEEDBACK_SUBMITTED, { rating: e, feedback: t, reason: n, skipped: i });
    },
    C = (e) => (e === i.M.AGE_VERIFICATION_SURVEY_MODAL_CLOSE ? E.mg.KID_STARTED : E.mg.GET_STARTED),
    v = (e, t, n, i, r) => {
        a.default.track(m.HAw.AGE_VERIFICATION_FEEDBACK_SUBMITTED, {
            rating: e,
            feedback: t,
            reason: n,
            skipped: i,
            entrypoint: r,
        });
    };
