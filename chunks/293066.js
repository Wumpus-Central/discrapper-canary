let r;
n.d(t, {
    A: () => h,
}),
    n(321073);
var i,
    a = n(311907),
    s = n(73153);

function o(e, t, n) {
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

function l(e) {
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
                o(e, t, n[t]);
            });
    }
    return e;
}

function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let d = {
    hasAcceptedStoreTerms: !1,
    hasAcceptedEulaIds: [],
};

function f() {
    r.hasAcceptedStoreTerms = !0;
}

function p(e) {
    let { eulaId: t } = e;
    if (r.hasAcceptedEulaIds.includes(t)) return !1;
    r.hasAcceptedEulaIds.push(t);
}
class _ extends (i = a.Ay.PersistedStore) {
    initialize(e) {
        r = null != e ? e : d;
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
o(_, "displayName", "ApplicationStoreUserSettingsStore"),
    o(_, "persistKey", "ApplicationStoreUserSettingsStore"),
    o(_, "migrations", [
        (e) =>
            null == e.hasAcceptedEulaIds
                ? u(l({}, e), {
                      hasAcceptedEulaIds: [],
                  })
                : e,
    ]);
let h = new _(s.h, {
    APPLICATION_STORE_ACCEPT_STORE_TERMS: f,
    APPLICATION_STORE_ACCEPT_EULA: p,
});
