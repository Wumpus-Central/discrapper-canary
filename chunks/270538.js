n.d(t, { Z: () => p }), n(388685);
var r = n(147913),
    i = n(318885),
    a = n(624864),
    o = n(987650),
    s = n(981631);
function l(e, t, n) {
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
let c = null,
    u = new Map(),
    d = null;
class f extends r.Z {
    _initialize() {
        (c = null), u.clear(), (d = null);
    }
    _terminate() {
        (c = null), u.clear(), (d = null);
    }
    constructor(...e) {
        super(...e),
            l(this, "handleOverlayMounted", (e) => {
                c = Date.now();
            }),
            l(this, "handleNotificationEvent", (e) => {
                if (e.action !== o.bv.Viewed) return;
                let t = Date.now(),
                    n = e.notificationType;
                (d = {
                    timestamp: t,
                    notificationType: n,
                }),
                    u.set(n, t);
            }),
            l(this, "handleSetNotificationDisabledSetting", (e) => {
                let { shouldTrack: t, setting: n, disabled: r } = e;
                if (!t) return;
                let o = Date.now(),
                    l = null != c ? o - c : null,
                    f = null,
                    p = null;
                for (let [e, t] of u.entries()) {
                    let r = a.Z.getDisabledSettingByNotificationType(e);
                    if (null != r && r === n) {
                        let n = o - t;
                        (null == f || n < f) &&
                            ((f = n),
                            (p = {
                                notificationType: e,
                                timestamp: t,
                            }));
                    }
                }
                let _ =
                    null != d && null != p && d.notificationType === p.notificationType && d.timestamp === p.timestamp;
                (0, i.Q)(s.rMx.OVERLAY_NOTIFICATION_SETTING_UPDATED, {
                    setting: n,
                    disabled: r,
                    time_since_last_seen_overlay: l,
                    time_since_last_seen_notification: f,
                    is_most_recent_notification: _,
                    most_recent_notification_type: null == p ? void 0 : p.notificationType,
                });
            }),
            l(this, "actions", {
                OVERLAY_SET_NOTIFICATION_DISABLED_SETTING: this.handleSetNotificationDisabledSetting,
                OVERLAY_MOUNTED: this.handleOverlayMounted,
                OVERLAY_NOTIFICATION_EVENT: this.handleNotificationEvent,
            });
    }
}
let p = new f();
