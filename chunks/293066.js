"use strict";
let r;
n.d(t, { A: () => l }), n(321073);
var i = n(311907),
    s = n(73153);
let a = { hasAcceptedStoreTerms: !1, hasAcceptedEulaIds: [] };
class o extends i.Ay.PersistedStore {
    static displayName = "ApplicationStoreUserSettingsStore";
    static persistKey = "ApplicationStoreUserSettingsStore";
    static migrations = [(e) => (null == e.hasAcceptedEulaIds ? { ...e, hasAcceptedEulaIds: [] } : e)];
    initialize(e) {
        r = e ?? a;
    }
    getState() {
        return r;
    }
    get hasAcceptedStoreTerms() {
        return r.hasAcceptedStoreTerms;
    }
    hasAcceptedEULA(e) {
        return r.hasAcceptedEulaIds.includes(e);
    }
}
let l = new o(s.h, {
    APPLICATION_STORE_ACCEPT_STORE_TERMS: function () {
        r.hasAcceptedStoreTerms = !0;
    },
    APPLICATION_STORE_ACCEPT_EULA: function (e) {
        let { eulaId: t } = e;
        if (r.hasAcceptedEulaIds.includes(t)) return !1;
        r.hasAcceptedEulaIds.push(t);
    },
});
