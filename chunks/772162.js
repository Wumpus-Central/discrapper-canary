n.d(t, { A: () => _ });
var i = n(439372),
    r = n(815706),
    a = n(592598),
    s = n(672396),
    l = n(652215);
let o = null,
    d = new Map(),
    c = null;
class u extends i.A {
    _initialize() {
        (o = null), d.clear(), (c = null);
    }
    _terminate() {
        (o = null), d.clear(), (c = null);
    }
    handleOverlayMounted = (e) => {
        o = Date.now();
    };
    handleNotificationEvent = (e) => {
        if (e.action !== s.uj.Viewed) return;
        let t = Date.now(),
            n = e.notificationType;
        (c = { timestamp: t, notificationType: n }), d.set(n, t);
    };
    handleSetNotificationDisabledSetting = (e) => {
        let { shouldTrack: t, setting: n, disabled: i } = e;
        if (!t) return;
        let s = Date.now(),
            u = null != o ? s - o : null,
            _ = null,
            E = null;
        for (let [e, t] of d.entries()) {
            let i = a.A.getDisabledSettingByNotificationType(e);
            if (null != i && i === n) {
                let n = s - t;
                (null == _ || n < _) && ((_ = n), (E = { notificationType: e, timestamp: t }));
            }
        }
        let A = null != c && null != E && c.notificationType === E.notificationType && c.timestamp === E.timestamp;
        (0, r.z)(l.HAw.OVERLAY_NOTIFICATION_SETTING_UPDATED, {
            setting: n,
            disabled: i,
            time_since_last_seen_overlay: u,
            time_since_last_seen_notification: _,
            is_most_recent_notification: A,
            most_recent_notification_type: E?.notificationType,
        });
    };
    actions = {
        OVERLAY_SET_NOTIFICATION_DISABLED_SETTING: this.handleSetNotificationDisabledSetting,
        OVERLAY_MOUNTED: this.handleOverlayMounted,
        OVERLAY_NOTIFICATION_EVENT: this.handleNotificationEvent,
    };
}
let _ = new u();
