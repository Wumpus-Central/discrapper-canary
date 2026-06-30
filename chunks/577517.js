"use strict";
n.d(t, { A: () => d });
var i = n(17928),
    r = n(228366);
let s = null,
    a = null,
    o = null;
function l() {
    let e = new Date();
    return e.setHours(0, 0, 0, 0), e.getTime();
}
class u extends i.Ay.PersistedStore {
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
        (s = e?.lastWarningFetchDayStart ?? null), (a = e?.lastModalShownDayStart ?? null), (o = e?.warning ?? null);
    }
    getWarning() {
        return o;
    }
    shouldFetchToday() {
        return null == s || s !== l();
    }
    hasShownModalToday() {
        return null != a && a === l();
    }
    getState() {
        return { lastWarningFetchDayStart: s, lastModalShownDayStart: a, warning: o };
    }
}
let c = new u(r.h, {
        PARENTAL_CONSENT_WARNING_FETCH_SUCCESS: function (e) {
            let { warning: t } = e;
            (o = t), (s = l()), c.persist();
        },
        PARENTAL_CONSENT_WARNING_MODAL_SHOWN: function () {
            (a = l()), c.persist();
        },
        LOGOUT: function () {
            (s = null), (a = null), (o = null), c.persist();
        },
    }),
    d = c;
