"use strict";
n.d(t, { A: () => h });
var r = n(311907),
    i = n(73153);
let a = !1,
    s = !1,
    o = {},
    l = null;
function u(e) {
    let { consents: t } = e;
    null != t && ((o = { ...o, ...t }), (s = !0));
}
function c(e) {
    let { consents: t } = e;
    (o = { ...t }), (a = !0);
}
function d(e) {
    let { consents: t } = e;
    (o = { ...t }), (a = !0);
}
function _(e) {
    l = e.consentRequired;
}
function f() {
    l = null;
}
class p extends r.Ay.Store {
    static displayName = "ConsentStore";
    hasConsented(e) {
        return null != o[e] && o[e].consented;
    }
    get consents() {
        return o;
    }
    get fetchedConsents() {
        return a;
    }
    get receivedConsentsInConnectionOpen() {
        return s;
    }
    getAuthenticationConsentRequired() {
        return l;
    }
}
let h = new p(i.h, {
    CONNECTION_OPEN: u,
    OVERLAY_INITIALIZE: c,
    UPDATE_CONSENTS: d,
    SET_CONSENT_REQUIRED: _,
    LOGOUT: f,
});
