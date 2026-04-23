"use strict";
n.d(t, { A: () => _ });
var i = n(17928),
    r = n(228366);
let s = !1,
    a = !1,
    o = {},
    l = null;
class d extends i.Ay.Store {
    static displayName = "ConsentStore";
    hasConsented(e) {
        return null != o[e] && o[e].consented;
    }
    get consents() {
        return o;
    }
    get fetchedConsents() {
        return s;
    }
    get receivedConsentsInConnectionOpen() {
        return a;
    }
    getAuthenticationConsentRequired() {
        return l;
    }
}
let _ = new d(r.h, {
    CONNECTION_OPEN: function (e) {
        let { consents: t } = e;
        null != t && ((o = { ...o, ...t }), (a = !0));
    },
    OVERLAY_INITIALIZE: function (e) {
        let { consents: t } = e;
        (o = { ...t }), (s = !0);
    },
    UPDATE_CONSENTS: function (e) {
        let { consents: t } = e;
        (o = { ...t }), (s = !0);
    },
    SET_CONSENT_REQUIRED: function (e) {
        l = e.consentRequired;
    },
    LOGOUT: function () {
        l = null;
    },
});
