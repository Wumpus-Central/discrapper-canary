n.d(t, {
    Q: () => c,
    U: () => d,
}),
    n(65821);
var r = n(562465),
    i = n(73153),
    l = n(652215),
    s = n(985018);

function a(e) {
    return (
        null != e &&
            null != e.body &&
            i.h.dispatch({
                type: "UPDATE_CONSENTS",
                consents: (function (e) {
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
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, e.body),
            }),
        e.body
    );
}

function o(e) {
    throw Error(
        e.status >= 500 && e.status <= 599
            ? s.intl.string(s.t.cvJdtg)
            : null != e && null != e.body && null != e.body.message
              ? e.body.message
              : s.intl.string(s.t.cvJdtg),
    );
}

function c() {
    return r.Bo.get({
        url: l.Rsh.SETTINGS_CONSENT,
        oldFormErrors: !0,
        rejectWithError: !1,
    }).then(a, (e) => Promise.reject(Error(e.body.message)));
}

function d(e, t) {
    return r.Bo.post({
        url: l.Rsh.SETTINGS_CONSENT,
        body: {
            grant: e,
            revoke: t,
        },
        oldFormErrors: !0,
        rejectWithError: !1,
    }).then(a, o);
}
