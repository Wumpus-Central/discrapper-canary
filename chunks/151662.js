n.d(t, { Z: () => m });
var r,
    i = n(442837),
    a = n(570140);
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
function s(e) {
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
let l = {},
    c = null;
function u(e) {
    let { settings: t } = e;
    (l = t.categories), (c = t.initialized);
}
function d(e) {
    let { settings: t } = e;
    l = t.categories;
}
function f(e) {
    let { updates: t } = e;
    l = s({}, l, t);
}
function p() {
    (l = {}), (c = null);
}
class _ extends (r = i.ZP.Store) {
    getEmailSettings() {
        return {
            categories: l,
            initialized: c,
        };
    }
}
o(_, "displayName", "EmailSettingsStore");
let m = new _(a.Z, {
    CONNECTION_OPEN: p,
    LOGOUT: p,
    EMAIL_SETTINGS_FETCH_SUCCESS: u,
    EMAIL_SETTINGS_UPDATE_SUCCESS: d,
    EMAIL_SETTINGS_UPDATE: f,
});
