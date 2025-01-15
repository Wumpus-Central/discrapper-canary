var i,
    r,
    s,
    a,
    l = n(442837),
    o = n(570140);
let c = {},
    d = null;
function u() {
    (c = {}), (d = null);
}
class m extends (a = l.ZP.Store) {
    getEmailSettings() {
        return {
            categories: c,
            initialized: d
        };
    }
}
(s = 'EmailSettingsStore'),
    (r = 'displayName') in (i = m)
        ? Object.defineProperty(i, r, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = s),
    (t.Z = new m(o.Z, {
        CONNECTION_OPEN: u,
        LOGOUT: u,
        EMAIL_SETTINGS_FETCH_SUCCESS: function (e) {
            let { settings: t } = e;
            (c = t.categories), (d = t.initialized);
        },
        EMAIL_SETTINGS_UPDATE_SUCCESS: function (e) {
            let { settings: t } = e;
            c = t.categories;
        },
        EMAIL_SETTINGS_UPDATE: function (e) {
            let { updates: t } = e;
            c = {
                ...c,
                ...t
            };
        }
    }));
