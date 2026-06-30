"use strict";
n.d(t, { A: () => L });
var i = n(439372),
    r = n(695515),
    s = n(158390),
    a = n(636537),
    o = n(941426),
    l = n(228366),
    u = n(927813),
    c = n(38405),
    d = n(17928);
let _ = null,
    h = null,
    f = null;
function p() {
    let e = new Date();
    return e.setHours(0, 0, 0, 0), e.getTime();
}
class E extends d.Ay.PersistedStore {
    static displayName = "ParentalConsentWarningStore";
    static persistKey = "ParentalConsentWarningStore";
    static migrations = [
        (e) => ({
            lastWarningFetchDayStart: e?.lastWarningFetchDayStart ?? null,
            lastModalShownDayStart: e?.lastModalShownDayStart ?? null,
            warning: e?.warning ?? null,
        }),
    ];
    initialize(e) {
        (_ = e?.lastWarningFetchDayStart ?? null), (h = e?.lastModalShownDayStart ?? null), (f = e?.warning ?? null);
    }
    getWarning() {
        return f;
    }
    shouldFetchToday() {
        return null == _ || _ !== p();
    }
    hasShownModalToday() {
        return null != h && h === p();
    }
    getState() {
        return { lastWarningFetchDayStart: _, lastModalShownDayStart: h, warning: f };
    }
}
let m = new E(l.h, {
        PARENTAL_CONSENT_WARNING_FETCH_SUCCESS: function (e) {
            let { warning: t } = e;
            (f = t), (_ = p()), m.persist();
        },
        PARENTAL_CONSENT_WARNING_MODAL_SHOWN: function () {
            (h = p()), m.persist();
        },
        LOGOUT: function () {
            (_ = null), (h = null), (f = null), m.persist();
        },
    }),
    g = new o.Vy("ParentalConsentWarning"),
    A = new s.A(5 * u.A.Millis.SECOND, 5 * u.A.Millis.MINUTE, !0),
    I = null,
    T = null,
    S = 0;
function y() {
    null != T && (clearTimeout(T), (T = null));
}
function C() {
    if (null != I) return I;
    let e = S;
    return (I = (async () => {
        try {
            var t;
            let n = await a.Bo.get({ url: "/users/@me/parental-consent/warning", rejectWithError: !0 });
            if (e !== S) return;
            let i =
                ((t = n.body),
                {
                    inGrace: !0 === t.in_grace,
                    daysRemaining: "number" == typeof t.days_remaining ? t.days_remaining : null,
                    surfaces: Array.isArray(t.surfaces) ? t.surfaces : [],
                });
            A.succeed(), y(), l.h.dispatch({ type: "PARENTAL_CONSENT_WARNING_FETCH_SUCCESS", warning: i });
        } catch (t) {
            if (e !== S) return;
            g.error("Failed to fetch parental-consent warning", t),
                c.A.captureException(t, { tags: { source: "parental_consent_warning", step: "fetch_warning" } }),
                null == T &&
                    (T = setTimeout(() => {
                        (T = null), N();
                    }, A.fail()));
        } finally {
            e === S && (I = null);
        }
    })());
}
async function N() {
    null == I && null == T && m.shouldFetchToday() && (await C());
}
async function v() {
    y(), null != I && (S++, (I = null)), await C();
}
let R = Object.freeze({ BANNER: "banner", MODAL: "modal" });
var O = n(191627);
function b(e) {
    return e.some((e) => e.link_status === O.Ef.ACTIVE && e.link_type === O.QM.PARENT);
}
class D extends i.A {
    actions = {
        POST_CONNECTION_OPEN: () => {
            m.getWarning()?.surfaces?.includes(R.BANNER) === !0 && b(Object.values(r.A.getLinkedUsers())) ? v() : N();
        },
        WINDOW_FOCUS: (e) => {
            let { focused: t } = e;
            t && N();
        },
        WINDOW_VISIBILITY_CHANGE: (e) => {
            let { visible: t } = e;
            t && N();
        },
        FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS: (e) => {
            let { linkedUsers: t } = e;
            b(t) && v();
        },
        LOGOUT: () => {
            S++, y(), (I = null), A.succeed();
        },
    };
}
let L = new D();
