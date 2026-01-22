n.d(t, {
    Q: () => d,
    U: () => f,
}),
    n(65821);
var r = n(562465),
    i = n(73153),
    a = n(652215),
    s = n(985018);

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

function c(e) {
    return (
        null != e &&
            null != e.body &&
            i.h.dispatch({
                type: "UPDATE_CONSENTS",
                consents: l({}, e.body),
            }),
        e.body
    );
}

function u(e) {
    let t;
    throw Error(
        (t =
            e.status >= 500 && e.status <= 599
                ? s.intl.string(s.t.cvJdtg)
                : null != e && null != e.body && null != e.body.message
                  ? e.body.message
                  : s.intl.string(s.t.cvJdtg)),
    );
}

function d() {
    return r.Bo.get({
        url: a.Rsh.SETTINGS_CONSENT,
        oldFormErrors: !0,
        rejectWithError: !1,
    }).then(c, (e) => Promise.reject(Error(e.body.message)));
}

function f(e, t) {
    return r.Bo.post({
        url: a.Rsh.SETTINGS_CONSENT,
        body: {
            grant: e,
            revoke: t,
        },
        oldFormErrors: !0,
        rejectWithError: !1,
    }).then(c, u);
}
