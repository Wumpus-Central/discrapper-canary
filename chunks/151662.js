var i,
    s,
    r,
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
(r = 'EmailSettingsStore'),
    (s = 'displayName') in (i = m)
        ? Object.defineProperty(i, s, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[s] = r),
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
