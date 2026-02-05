"use strict";
let r;
n.d(t, { A: () => c }), n(321073);
var i = n(311907),
    a = n(73153);
let s = { hasAcceptedStoreTerms: !1, hasAcceptedEulaIds: [] };
function o() {
    r.hasAcceptedStoreTerms = !0;
}
function l(e) {
    let { eulaId: t } = e;
    if (r.hasAcceptedEulaIds.includes(t)) return !1;
    r.hasAcceptedEulaIds.push(t);
}
class u extends i.Ay.PersistedStore {
    static displayName = "ApplicationStoreUserSettingsStore";
    static persistKey = "ApplicationStoreUserSettingsStore";
    static migrations = [(e) => (null == e.hasAcceptedEulaIds ? { ...e, hasAcceptedEulaIds: [] } : e)];
    initialize(e) {
        r = e ?? s;
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
let c = new u(a.h, { APPLICATION_STORE_ACCEPT_STORE_TERMS: o, APPLICATION_STORE_ACCEPT_EULA: l });
