"use strict";
let i;
n.d(t, { A: () => l }), n(321073);
var r = n(17928),
    s = n(228366);
let a = { hasAcceptedStoreTerms: !1, hasAcceptedEulaIds: [] };
class o extends r.Ay.PersistedStore {
    static displayName = "ApplicationStoreUserSettingsStore";
    static persistKey = "ApplicationStoreUserSettingsStore";
    static migrations = [(e) => (null == e.hasAcceptedEulaIds ? { ...e, hasAcceptedEulaIds: [] } : e)];
    initialize(e) {
        i = e ?? a;
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
let l = new o(s.h, {
    APPLICATION_STORE_ACCEPT_STORE_TERMS: function () {
        i.hasAcceptedStoreTerms = !0;
    },
    APPLICATION_STORE_ACCEPT_EULA: function (e) {
        let { eulaId: t } = e;
        if (i.hasAcceptedEulaIds.includes(t)) return !1;
        i.hasAcceptedEulaIds.push(t);
    },
});
