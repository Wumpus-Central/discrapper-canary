n.d(t, {
    A: () => E,
});
var r,
    i = n(311907),
    a = n(73153);

function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}
let l = !1,
    c = !1,
    u = {},
    d = null;

function f(e) {
    let { consents: t } = e;
    null != t && ((u = o({}, u, t)), (c = !0));
}

function p(e) {
    let { consents: t } = e;
    (u = o({}, t)), (l = !0);
}

function _(e) {
    let { consents: t } = e;
    (u = o({}, t)), (l = !0);
}

function h(e) {
    d = e.consentRequired;
}

function m() {
    d = null;
}
class g extends (r = i.Ay.Store) {
    hasConsented(e) {
        return null != u[e] && u[e].consented;
    }
    get consents() {
        return u;
    }
    get fetchedConsents() {
        return l;
    }
    get receivedConsentsInConnectionOpen() {
        return c;
    }
    getAuthenticationConsentRequired() {
        return d;
    }
}
s(g, "displayName", "ConsentStore");
let E = new g(a.h, {
    CONNECTION_OPEN: f,
    OVERLAY_INITIALIZE: p,
    UPDATE_CONSENTS: _,
    SET_CONSENT_REQUIRED: h,
    LOGOUT: m,
});
