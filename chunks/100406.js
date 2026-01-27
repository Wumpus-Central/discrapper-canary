n.d(t, {
    CA: () => d,
    NI: () => u,
    cR: () => c,
});
var r = n(110259),
    i = n(933681),
    l = n(73153),
    s = n(499785),
    a = n(431144),
    o = n(652215);
async function c() {
    try {
        let e = await s.A.get({
            url: o.Rsh.EMAIL_SETTINGS,
            trackedActionData: {
                event: r.NetworkActionNames.EMAIL_SETTINGS_FETCH,
                properties: (e) => {
                    var t;
                    let n = null == e || null == (t = e.body) ? void 0 : t.initialized;
                    return (0, i.e0)({
                        initialized: n,
                    });
                },
            },
            rejectWithError: !0,
        });
        return (
            l.h.dispatch({
                type: "EMAIL_SETTINGS_FETCH_SUCCESS",
                settings: e.body,
            }),
            e.body
        );
    } catch (e) {
        l.h.dispatch({
            type: "EMAIL_SETTINGS_FETCH_FAILURE",
        });
    }
}
async function d(e, t) {
    l.h.dispatch({
        type: "EMAIL_SETTINGS_UPDATE",
        updates: {
            [e]: t,
        },
    });
    try {
        let n = await s.A.patch({
            url: o.Rsh.EMAIL_SETTINGS,
            body: {
                settings: {
                    categories: {
                        [e]: t,
                    },
                },
            },
            trackedActionData: {
                event: r.NetworkActionNames.EMAIL_SETTINGS_UPDATE,
                properties: {
                    category: e,
                    value: t,
                },
            },
            rejectWithError: !0,
        });
        l.h.dispatch({
            type: "EMAIL_SETTINGS_UPDATE_SUCCESS",
            settings: n.body,
        });
    } catch (e) {
        l.h.dispatch({
            type: "EMAIL_SETTINGS_UPDATE_FAILURE",
        });
    }
}
async function u() {
    let e = a.Zk.reduce((e, t) => {
        var n, r;
        return (
            (n = (function (e) {
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
            })({}, e)),
            (r = r =
                {
                    [t]: !1,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(r)).forEach(function (e) {
                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                  }),
            n
        );
    }, {});
    l.h.dispatch({
        type: "EMAIL_SETTINGS_UPDATE",
        updates: e,
    });
    try {
        let t = await s.A.patch({
            url: o.Rsh.EMAIL_SETTINGS,
            body: {
                settings: {
                    categories: e,
                },
            },
            trackedActionData: {
                event: r.NetworkActionNames.EMAIL_SETTINGS_UPDATE,
                properties: {
                    category: "marketing",
                    value: !1,
                },
            },
            rejectWithError: !0,
        });
        l.h.dispatch({
            type: "EMAIL_SETTINGS_UPDATE_SUCCESS",
            settings: t.body,
        });
    } catch (e) {
        l.h.dispatch({
            type: "EMAIL_SETTINGS_UPDATE_FAILURE",
        });
    }
}
