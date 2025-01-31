n.d(t, { Z: () => g });
var i,
    r = n(442837),
    a = n(570140);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let o = !1,
    l = !1,
    u = {},
    c = null;
function d(e) {
    let { consents: t } = e;
    null != t &&
        ((u = {
            ...u,
            ...t
        }),
        (l = !0));
}
function f(e) {
    let { consents: t } = e;
    (u = { ...t }), (o = !0);
}
function _(e) {
    let { consents: t } = e;
    (u = { ...t }), (o = !0);
}
function p(e) {
    c = e.consentRequired;
}
function h() {
    c = null;
}
class m extends (i = r.ZP.Store) {
    hasConsented(e) {
        return null != u[e] && u[e].consented;
    }
    get consents() {
        return u;
    }
    get fetchedConsents() {
        return o;
    }
    get receivedConsentsInConnectionOpen() {
        return l;
    }
    getAuthenticationConsentRequired() {
        return c;
    }
}
s(m, 'displayName', 'ConsentStore');
let g = new m(a.Z, {
    CONNECTION_OPEN: d,
    OVERLAY_INITIALIZE: f,
    UPDATE_CONSENTS: _,
    SET_CONSENT_REQUIRED: p,
    LOGOUT: h
});
