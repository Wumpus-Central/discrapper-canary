"use strict";
n.d(t, { A: () => d });
var r = n(311907),
    i = n(73153);
let s = !1,
    a = !1,
    o = {},
    l = null;
class u extends r.Ay.Store {
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
let d = new u(i.h, {
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
