"use strict";
let i;
n.d(t, { A: () => D });
var r = n(627968);
n(64700);
var s = n(192308),
    a = n(439372),
    o = n(695515),
    l = n(158390),
    u = n(636537),
    c = n(941426),
    d = n(228366),
    _ = n(927813),
    h = n(38405);
let f = (0, n(945810).mj)({
    kind: "user",
    name: "2026-07-parental-consent-warning-fetch",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var E = n(577517);
let p = new c.Vy("ParentalConsentWarning"),
    m = new l.A(5 * _.A.Millis.SECOND, 5 * _.A.Millis.MINUTE, !0),
    g = null,
    A = null,
    I = 0;
function T() {
    null != A && (clearTimeout(A), (A = null));
}
function S() {
    if (!f.getConfig({ location: "parental_consent_warning_manager" }).enabled) return Promise.resolve();
    if (null != g) return g;
    let e = I;
    return (g = (async () => {
        try {
            var t;
            let n = await u.Bo.get({ url: "/users/@me/parental-consent/warning", rejectWithError: !0 });
            if (e !== I) return;
            let i =
                ((t = n.body),
                {
                    inGrace: !0 === t.in_grace,
                    daysRemaining: "number" == typeof t.days_remaining ? t.days_remaining : null,
                    surfaces: Array.isArray(t.surfaces) ? t.surfaces : [],
                });
            m.succeed(), T(), d.h.dispatch({ type: "PARENTAL_CONSENT_WARNING_FETCH_SUCCESS", warning: i });
        } catch (t) {
            if (e !== I) return;
            p.error("Failed to fetch parental-consent warning", t),
                h.A.captureException(t, { tags: { source: "parental_consent_warning", step: "fetch_warning" } }),
                null == A &&
                    (A = setTimeout(() => {
                        (A = null), N();
                    }, m.fail()));
        } finally {
            e === I && (g = null);
        }
    })());
}
async function N() {
    null == g && null == A && E.A.shouldFetchToday() && (await S());
}
async function C() {
    T(), null != g && (I++, (g = null)), await S();
}
var y = n(748209),
    O = n(191627);
function R(e) {
    return e.some((e) => e.link_status === O.Ef.ACTIVE && e.link_type === O.QM.PARENT);
}
function v(e) {
    let t = e?.daysRemaining;
    e?.surfaces?.includes(y.x.MODAL) !== !0 ||
        null == t ||
        !(t >= 0) ||
        E.A.hasShownModalToday() ||
        R(Object.values(o.A.getLinkedUsers())) ||
        (0, s.openModalLazy)(
            async () => {
                let { default: e } = await n.e("44947").then(n.bind(n, 145662));
                return (n) => (0, r.jsx)(e, { ...n, daysRemaining: t });
            },
            { modalKey: "ParentalConsentWarningModal" },
        );
}
function b() {
    E.A.shouldFetchToday() || v(E.A.getWarning());
}
class L extends a.A {
    actions = {
        PARENTAL_CONSENT_WARNING_FETCH_SUCCESS: (e) => {
            let { warning: t } = e;
            v(t);
        },
        POST_CONNECTION_OPEN: () => {
            (i = R(Object.values(o.A.getLinkedUsers()))), N(), b();
        },
        WINDOW_FOCUS: (e) => {
            let { focused: t } = e;
            t && (N(), b());
        },
        WINDOW_VISIBILITY_CHANGE: (e) => {
            let { visible: t } = e;
            t && (N(), b());
        },
        CURRENT_USER_UPDATE: (e) => {
            let { user: t } = e;
            if (void 0 === t.linked_users) return;
            let n = R(t.linked_users),
                r = i;
            (i = n),
                void 0 !== r && r !== n && (n ? E.A.getWarning()?.surfaces?.includes(y.x.BANNER) === !0 && C() : C());
        },
        LOGOUT: () => {
            (i = void 0), I++, T(), (g = null), m.succeed();
        },
    };
}
let D = new L();
