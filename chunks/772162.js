"use strict";
n.d(t, { A: () => _ });
var r = n(439372),
    i = n(815706),
    a = n(592598),
    s = n(672396),
    o = n(652215);
let l = null,
    u = new Map(),
    c = null;
class d extends r.A {
    _initialize() {
        (l = null), u.clear(), (c = null);
    }
    _terminate() {
        (l = null), u.clear(), (c = null);
    }
    handleOverlayMounted = (e) => {
        l = Date.now();
    };
    handleNotificationEvent = (e) => {
        if (e.action !== s.uj.Viewed) return;
        let t = Date.now(),
            n = e.notificationType;
        (c = { timestamp: t, notificationType: n }), u.set(n, t);
    };
    handleSetNotificationDisabledSetting = (e) => {
        let { shouldTrack: t, setting: n, disabled: r } = e;
        if (!t) return;
        let s = Date.now(),
            d = null != l ? s - l : null,
            _ = null,
            f = null;
        for (let [e, t] of u.entries()) {
            let r = a.A.getDisabledSettingByNotificationType(e);
            if (null != r && r === n) {
                let n = s - t;
                (null == _ || n < _) && ((_ = n), (f = { notificationType: e, timestamp: t }));
            }
        }
        let p = null != c && null != f && c.notificationType === f.notificationType && c.timestamp === f.timestamp;
        (0, i.z)(o.HAw.OVERLAY_NOTIFICATION_SETTING_UPDATED, {
            setting: n,
            disabled: r,
            time_since_last_seen_overlay: d,
            time_since_last_seen_notification: _,
            is_most_recent_notification: p,
            most_recent_notification_type: f?.notificationType,
        });
    };
    actions = {
        OVERLAY_SET_NOTIFICATION_DISABLED_SETTING: this.handleSetNotificationDisabledSetting,
        OVERLAY_MOUNTED: this.handleOverlayMounted,
        OVERLAY_NOTIFICATION_EVENT: this.handleNotificationEvent,
    };
}
let _ = new d();
