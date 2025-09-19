n.d(t, { Z: () => g }), n(388685);
var r = n(433517),
    i = n(570140),
    a = n(13245),
    o = n(147913),
    s = n(355863),
    l = n(486016),
    c = n(32300),
    u = n(624864),
    d = n(610394),
    f = n(981631);
function _(e, t, n) {
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
let p = "overlayNegativeWidgetExperimentPreviousSettings";
function h(e) {
    let t = d.ZP.getWidgetByType(e);
    if (null != t) return s.Z.getWidget(t.id);
}
class m extends o.Z {
    constructor(...e) {
        super(...e),
            _(this, "getPreviousOverlaySettings", () =>
                r.K.get(p, {
                    widgetSettings: {},
                    notificationSettings: {},
                }),
            ),
            _(this, "setPreviousOverlaySettings", (e) => r.K.set(p, e)),
            _(this, "setPreviousWidgetSetting", (e, t) => {
                let n = this.getPreviousOverlaySettings();
                (n.widgetSettings[e] = { pinned: t }), this.setPreviousOverlaySettings(n);
            }),
            _(this, "deletePreviousWidgetSetting", (e) => {
                let t = this.getPreviousOverlaySettings();
                delete t.widgetSettings[e], this.setPreviousOverlaySettings(t);
            }),
            _(this, "setPreviousNotificationSetting", (e, t) => {
                let n = this.getPreviousOverlaySettings();
                (n.notificationSettings[e] = { disabled: t }), this.setPreviousOverlaySettings(n);
            }),
            _(this, "deletePreviousNotificationSetting", (e) => {
                let t = this.getPreviousOverlaySettings();
                delete t.notificationSettings[e], this.setPreviousOverlaySettings(t);
            }),
            _(this, "unpinWidgetForExperiment", async (e) => {
                if (null != this.getPreviousOverlaySettings().widgetSettings[e]) return;
                let t = h(e);
                null != t &&
                    (this.terminate(!0),
                    await i.Z.dispatch({
                        type: "LAYOUT_SET_PINNED",
                        widgetId: t.id,
                        pinned: !1,
                    }),
                    this.initialize(),
                    this.setPreviousWidgetSetting(e, t.pinned));
            }),
            _(this, "restoreWidget", async (e) => {
                var t;
                let n = null == (t = this.getPreviousOverlaySettings().widgetSettings[e]) ? void 0 : t.pinned;
                if (null == n) return;
                let r = h(e);
                null != r &&
                    (this.terminate(!0),
                    await i.Z.dispatch({
                        type: "LAYOUT_SET_PINNED",
                        widgetId: r.id,
                        pinned: n,
                    }),
                    this.initialize(),
                    this.deletePreviousWidgetSetting(e));
            }),
            _(this, "disableNotificationForExperiment", async (e) => {
                if (null != this.getPreviousOverlaySettings().notificationSettings[e]) return;
                let t = u.Z.isNotificationDisabled(e);
                this.terminate(!0),
                    await a.Z.setNotificationDisabledSetting(e, !0),
                    this.initialize(),
                    this.setPreviousNotificationSetting(e, t);
            }),
            _(this, "restoreNotification", async (e) => {
                var t;
                let n = null == (t = this.getPreviousOverlaySettings().notificationSettings[e]) ? void 0 : t.disabled;
                null != n &&
                    (this.terminate(!0),
                    await a.Z.setNotificationDisabledSetting(e, n),
                    this.initialize(),
                    this.deletePreviousNotificationSetting(e));
            }),
            _(this, "handleOverlayReady", async () => {
                if (__OVERLAY__) return;
                let {
                    voiceWidgetDefaultUnpinned: e,
                    videoWidgetDefaultUnpinned: t,
                    notificationsDefaultOff: n,
                } = c.aZ.getConfig({ location: "OverlayNegativeWidgetExperimentManager" });
                if (
                    (e ? await this.unpinWidgetForExperiment(f.Odu.VOICE_V3) : await this.restoreWidget(f.Odu.VOICE_V3),
                    t ? await this.unpinWidgetForExperiment(f.Odu.VIDEO) : await this.restoreWidget(f.Odu.VIDEO),
                    n)
                )
                    for (let e in l.OverlayNotificationDisabledSetting) await this.disableNotificationForExperiment(e);
                else for (let e in l.OverlayNotificationDisabledSetting) await this.restoreNotification(e);
            }),
            _(this, "handleSetNotificationDisabledSetting", (e) => {
                var t;
                let { setting: n, disabled: r } = e;
                if (__OVERLAY__) return;
                let i = this.getPreviousOverlaySettings();
                (null == i || null == (t = i.notificationSettings) ? void 0 : t[n]) != null &&
                    this.setPreviousNotificationSetting(n, r);
            }),
            _(this, "handleSetPinned", (e) => {
                var t;
                let { widgetId: n, pinned: i } = e;
                if (__OVERLAY__) return;
                let a = s.Z.getWidget(n);
                if (null == a || ![f.Odu.VOICE_V3, f.Odu.VIDEO].includes(a.type)) return;
                let o = r.K.get(p);
                (null == o || null == (t = o.widgetSettings) ? void 0 : t[a.type]) != null &&
                    (null != i
                        ? this.setPreviousWidgetSetting(a.type, i)
                        : this.setPreviousWidgetSetting(a.type, a.pinned));
            }),
            _(this, "actions", {
                OVERLAY_READY: this.handleOverlayReady,
                OVERLAY_SET_NOTIFICATION_DISABLED_SETTING: this.handleSetNotificationDisabledSetting,
                LAYOUT_SET_PINNED: this.handleSetPinned,
            });
    }
}
let g = new m();
