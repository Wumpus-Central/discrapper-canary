var i,
    r,
    a,
    s,
    l = n(442837),
    o = n(570140);
let c = {},
    d = null;
function u() {
    (c = {}), (d = null);
}
class g extends (s = l.ZP.Store) {
    getEmailSettings() {
        return {
            categories: c,
            initialized: d
        };
    }
}
(a = 'EmailSettingsStore'),
    (r = 'displayName') in (i = g)
        ? Object.defineProperty(i, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = a),
    (t.Z = new g(o.Z, {
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
