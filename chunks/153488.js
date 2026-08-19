"use strict";
n.d(t, { A: () => c });
var i = n(17928),
    r = n(228366);
let a = !1,
    s = !1,
    l = {},
    o = null;
class d extends i.Ay.Store {
    static displayName = "ConsentStore";
    hasConsented(e) {
        return null != l[e] && l[e].consented;
    }
    get consents() {
        return l;
    }
    get fetchedConsents() {
        return a;
    }
    get receivedConsentsInConnectionOpen() {
        return s;
    }
    getAuthenticationConsentRequired() {
        return o;
    }
}
let c = new d(r.h, {
    CONNECTION_OPEN: function (e) {
        let { consents: t } = e;
        null != t && ((l = { ...l, ...t }), (s = !0));
    },
    OVERLAY_INITIALIZE: function (e) {
        let { consents: t } = e;
        (l = { ...t }), (a = !0);
    },
    UPDATE_CONSENTS: function (e) {
        let { consents: t } = e;
        (l = { ...t }), (a = !0);
    },
    SET_CONSENT_REQUIRED: function (e) {
        o = e.consentRequired;
    },
    LOGOUT: function () {
        o = null;
    },
});
