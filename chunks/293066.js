"use strict";
let i;
n.d(t, { A: () => o }), n(321073);
var r = n(17928),
    a = n(228366);
let s = { hasAcceptedStoreTerms: !1, hasAcceptedEulaIds: [] };
class l extends r.Ay.PersistedStore {
    static displayName = "ApplicationStoreUserSettingsStore";
    static persistKey = "ApplicationStoreUserSettingsStore";
    static migrations = [(e) => (null == e.hasAcceptedEulaIds ? { ...e, hasAcceptedEulaIds: [] } : e)];
    initialize(e) {
        i = e ?? s;
    }
    getState() {
        return i;
    }
    get hasAcceptedStoreTerms() {
        return i.hasAcceptedStoreTerms;
    }
    hasAcceptedEULA(e) {
        return i.hasAcceptedEulaIds.includes(e);
    }
}
let o = new l(a.h, {
    APPLICATION_STORE_ACCEPT_STORE_TERMS: function () {
        i.hasAcceptedStoreTerms = !0;
    },
    APPLICATION_STORE_ACCEPT_EULA: function (e) {
        let { eulaId: t } = e;
        if (i.hasAcceptedEulaIds.includes(t)) return !1;
        i.hasAcceptedEulaIds.push(t);
    },
});
