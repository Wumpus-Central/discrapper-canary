"use strict";
n.d(t, { A: () => u });
var i = n(17928),
    r = n(228366);
let a = null,
    s = null,
    l = null;
function o() {
    let e = new Date();
    return e.setHours(0, 0, 0, 0), e.getTime();
}
class d extends i.Ay.PersistedStore {
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
        (a = e?.lastWarningFetchDayStart ?? null), (s = e?.lastModalShownDayStart ?? null), (l = e?.warning ?? null);
    }
    getWarning() {
        return l;
    }
    shouldFetchToday() {
        return null == a || a !== o();
    }
    hasShownModalToday() {
        return null != s && s === o();
    }
    getState() {
        return { lastWarningFetchDayStart: a, lastModalShownDayStart: s, warning: l };
    }
}
let c = new d(r.h, {
        PARENTAL_CONSENT_WARNING_FETCH_SUCCESS: function (e) {
            let { warning: t } = e;
            (l = t), (a = o()), c.persist();
        },
        PARENTAL_CONSENT_WARNING_MODAL_SHOWN: function () {
            (s = o()), c.persist();
        },
        PARENTAL_CONSENT_WARNING_CLEARED: function () {
            (l = null), c.persist();
        },
        LOGOUT: function () {
            (a = null), (s = null), (l = null), c.persist();
        },
    }),
    u = c;
