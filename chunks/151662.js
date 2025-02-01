n.d(t, { Z: () => m });
var i,
    s,
    r,
    l = n(442837),
    a = n(570140);
let o = {},
    c = null;
function d() {
    (o = {}), (c = null);
}
class u extends (r = l.ZP.Store) {
    getEmailSettings() {
        return {
            categories: o,
            initialized: c
        };
    }
}
(s = 'EmailSettingsStore'),
    (i = 'displayName') in u
        ? Object.defineProperty(u, i, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (u[i] = s);
let m = new u(a.Z, {
    CONNECTION_OPEN: d,
    LOGOUT: d,
    EMAIL_SETTINGS_FETCH_SUCCESS: function (e) {
        let { settings: t } = e;
        (o = t.categories), (c = t.initialized);
    },
    EMAIL_SETTINGS_UPDATE_SUCCESS: function (e) {
        let { settings: t } = e;
        o = t.categories;
    },
    EMAIL_SETTINGS_UPDATE: function (e) {
        let { updates: t } = e;
        o = {
            ...o,
            ...t
        };
    }
});
