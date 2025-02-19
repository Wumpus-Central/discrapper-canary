n.d(t, { Z: () => u });
var r,
    i = n(442837),
    s = n(570140);
function a(e, t, n) {
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
let l = {},
    o = null;
function c() {
    (l = {}), (o = null);
}
class d extends (r = i.ZP.Store) {
    getEmailSettings() {
        return {
            categories: l,
            initialized: o
        };
    }
}
a(d, 'displayName', 'EmailSettingsStore');
let u = new d(s.Z, {
    CONNECTION_OPEN: c,
    LOGOUT: c,
    EMAIL_SETTINGS_FETCH_SUCCESS: function (e) {
        let { settings: t } = e;
        (l = t.categories), (o = t.initialized);
    },
    EMAIL_SETTINGS_UPDATE_SUCCESS: function (e) {
        let { settings: t } = e;
        l = t.categories;
    },
    EMAIL_SETTINGS_UPDATE: function (e) {
        let { updates: t } = e;
        l = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    r.forEach(function (t) {
                        a(e, t, n[t]);
                    });
            }
            return e;
        })({}, l, t);
    }
});
