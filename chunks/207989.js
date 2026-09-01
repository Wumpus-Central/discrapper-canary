"use strict";
var i = n(17928),
    r = n(455598),
    a = n(228366),
    s = n(761821);
let l = r.ej.create(),
    o = !1;
class d extends i.Ay.PersistedStore {
    static displayName = "NotifSettingsProtoStore";
    static persistKey = "NotifSettingsProtoStore-Cache";
    initialize(e) {
        !(function (e) {
            let t = e?.proto;
            if (null == t) return;
            let n = (0, s.ii)(r.ej, t);
            null != n && (l = n);
        })(e);
    }
    getState() {
        return { proto: (0, s.ob)(r.ej, l) };
    }
    get hasLoaded() {
        return o;
    }
    get settings() {
        return l;
    }
    getSetting(e) {
        return l.values[e];
    }
}
new d(a.h, {
    CONNECTION_OPEN: function (e) {
        let { notificationSettings: t } = e;
        (l = t.declarativeSettings ?? l), (o = !0);
    },
    NOTIFICATION_SETTINGS_UPDATE: function (e) {
        let { settings: t } = e,
            n = t.declarativeSettings;
        if (null == n) return !1;
        l = n;
    },
    DECLARATIVE_NOTIFICATION_SETTINGS_UPDATE: function (e) {
        let { declarativeSettings: t } = e;
        if (null == t) return !1;
        l = t;
    },
    LOGOUT: function () {
        (l = r.ej.create()), (o = !1);
    },
});
