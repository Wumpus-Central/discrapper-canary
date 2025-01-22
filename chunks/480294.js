var i,
    a = r(442837),
    o = r(570140);
function s(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let l = !1,
    u = !1,
    c = {},
    d = null;
function f(e) {
    let { consents: n } = e;
    null != n &&
        ((c = {
            ...c,
            ...n
        }),
        (u = !0));
}
function p(e) {
    let { consents: n } = e;
    (c = { ...n }), (l = !0);
}
function h(e) {
    d = e.consentRequired;
}
function _() {
    d = null;
}
class m extends (i = a.ZP.Store) {
    hasConsented(e) {
        return null != c[e] && c[e].consented;
    }
    get fetchedConsents() {
        return l;
    }
    get receivedConsentsInConnectionOpen() {
        return u;
    }
    getAuthenticationConsentRequired() {
        return d;
    }
}
s(m, 'displayName', 'ConsentStore'),
    (n.Z = new m(o.Z, {
        CONNECTION_OPEN: f,
        UPDATE_CONSENTS: p,
        SET_CONSENT_REQUIRED: h,
        LOGOUT: _
    }));
