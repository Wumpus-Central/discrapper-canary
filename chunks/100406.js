n.d(t, {
    CA: () => _,
    NI: () => h,
    cR: () => p,
});
var r = n(110259),
    i = n(933681),
    a = n(73153),
    s = n(499785),
    o = n(431144),
    l = n(652215);
function c(e, t, n) {
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
function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
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
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
async function p() {
    try {
        let e = await s.A.get({
            url: l.Rsh.EMAIL_SETTINGS,
            trackedActionData: {
                event: r.NetworkActionNames.EMAIL_SETTINGS_FETCH,
                properties: (e) => {
                    var t;
                    let n = null == e || null == (t = e.body) ? void 0 : t.initialized;
                    return (0, i.e0)({ initialized: n });
                },
            },
            rejectWithError: !0,
        });
        return (
            a.h.dispatch({
                type: "EMAIL_SETTINGS_FETCH_SUCCESS",
                settings: e.body,
            }),
            e.body
        );
    } catch (e) {
        a.h.dispatch({ type: "EMAIL_SETTINGS_FETCH_FAILURE" });
    }
}
async function _(e, t) {
    a.h.dispatch({
        type: "EMAIL_SETTINGS_UPDATE",
        updates: { [e]: t },
    });
    try {
        let n = await s.A.patch({
            url: l.Rsh.EMAIL_SETTINGS,
            body: { settings: { categories: { [e]: t } } },
            trackedActionData: {
                event: r.NetworkActionNames.EMAIL_SETTINGS_UPDATE,
                properties: {
                    category: e,
                    value: t,
                },
            },
            rejectWithError: !0,
        });
        a.h.dispatch({
            type: "EMAIL_SETTINGS_UPDATE_SUCCESS",
            settings: n.body,
        });
    } catch (e) {
        a.h.dispatch({ type: "EMAIL_SETTINGS_UPDATE_FAILURE" });
    }
}
async function h() {
    let e = o.Zk.reduce((e, t) => f(u({}, e), { [t]: !1 }), {});
    a.h.dispatch({
        type: "EMAIL_SETTINGS_UPDATE",
        updates: e,
    });
    try {
        let t = await s.A.patch({
            url: l.Rsh.EMAIL_SETTINGS,
            body: { settings: { categories: e } },
            trackedActionData: {
                event: r.NetworkActionNames.EMAIL_SETTINGS_UPDATE,
                properties: {
                    category: "marketing",
                    value: !1,
                },
            },
            rejectWithError: !0,
        });
        a.h.dispatch({
            type: "EMAIL_SETTINGS_UPDATE_SUCCESS",
            settings: t.body,
        });
    } catch (e) {
        a.h.dispatch({ type: "EMAIL_SETTINGS_UPDATE_FAILURE" });
    }
}
