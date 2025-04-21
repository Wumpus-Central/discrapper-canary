n.d(t, { Z: () => u });
var i,
    r = n(442837),
    s = n(570140);
function l(e, t, n) {
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
let a = {},
    o = null;
function c() {
    (a = {}), (o = null);
}
class d extends (i = r.ZP.Store) {
    getEmailSettings() {
        return {
            categories: a,
            initialized: o
        };
    }
}
l(d, 'displayName', 'EmailSettingsStore');
let u = new d(s.Z, {
    CONNECTION_OPEN: c,
    LOGOUT: c,
    EMAIL_SETTINGS_FETCH_SUCCESS: function (e) {
        let { settings: t } = e;
        (a = t.categories), (o = t.initialized);
    },
    EMAIL_SETTINGS_UPDATE_SUCCESS: function (e) {
        let { settings: t } = e;
        a = t.categories;
    },
    EMAIL_SETTINGS_UPDATE: function (e) {
        let { updates: t } = e;
        a = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    i = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (i = i.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    i.forEach(function (t) {
                        l(e, t, n[t]);
                    });
            }
            return e;
        })({}, a, t);
    }
});
