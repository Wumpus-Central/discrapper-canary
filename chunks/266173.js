n.d(t, { Z: () => M }), n(388685);
var r = n(579092),
    i = n(433517),
    a = n(765250),
    o = n(13245),
    s = n(147913),
    l = n(355863),
    c = n(145597),
    u = n(486016),
    d = n(32300),
    f = n(624864),
    _ = n(757744),
    p = n(981631);
function h(e, t, n) {
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
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let b = "overlay-negative-experiment-notification-settings",
    y = "overlay-negative-experiment-widget-settings",
    O = !1,
    v = !1,
    I = !0,
    T = new r.Yd("OverlayNegativeWidgetExperimentManager");
function S(e) {
    switch (e) {
        case p.Odu.VOICE:
        case p.Odu.TEXT:
        case p.Odu.GUILDS:
        case p.Odu.GUILDS_TEXT:
        case p.Odu.QUICK_ACTIONS:
            return c.OVERLAY_LAYOUT_ID;
        default:
            return _.$S;
    }
}
let A = {
    [p.Odu.VIDEO]: !0,
    [p.Odu.VOICE]: !0,
    [p.Odu.VOICE_V3]: !0,
};
function C(e) {
    let [t] = l.Z.getWidgetsByTypeAndLayout(e, S(e));
    if (null != t || (([t] = l.Z.getWidgetsByType(e)), null != t)) return t;
    for (let t of Object.values(l.Z.getAllWidgets())) if (t.type === e) return t;
}
class N {
    constructor() {
        h(this, "_widgetSettings", void 0),
            h(this, "_notificationSettings", void 0),
            h(this, "setWidgetSetting", (e, t) => {
                var n;
                (this._widgetSettings[e] = m({}, null != (n = this._widgetSettings[e]) ? n : {}, t)),
                    __OVERLAY__ || i.K.set(y, this._widgetSettings);
            }),
            h(this, "getWidgetSetting", (e) => this._widgetSettings[e]),
            h(this, "hasWidgetSetting", (e) => null != this._widgetSettings[e]),
            h(this, "setNotificationSetting", (e, t) => {
                var n;
                (this._notificationSettings[e] = m({}, null != (n = this._notificationSettings[e]) ? n : {}, t)),
                    __OVERLAY__ || i.K.set(b, this._notificationSettings);
            }),
            h(this, "hasNotificationSetting", (e) => null != this._notificationSettings[e]),
            h(this, "getNotificationSetting", (e) => this._notificationSettings[e]),
            (this._widgetSettings = i.K.get(y, {})),
            (this._notificationSettings = i.K.get(b, {})),
            __OVERLAY__ && ((this._widgetSettings = {}), (this._notificationSettings = {}));
    }
}
class R {
    constructor() {
        h(this, "_defaultWidgetPinned", {}),
            h(this, "initializeAllDefaultWidgetConfigs", () => {
                for (let e of Object.keys(p.Odu)) {
                    let t = e,
                        n = l.Z.getWidgetConfig(t);
                    null != n &&
                        null == this._defaultWidgetPinned[t] &&
                        (this._defaultWidgetPinned[t] = n.defaultSettings.pinned);
                }
            }),
            h(this, "overrideDefaultWidgetPinned", async (e, t) => {
                if (__OVERLAY__) return;
                let n = l.Z.getWidgetConfig(e);
                null != n &&
                    (null == this._defaultWidgetPinned[e] && (this._defaultWidgetPinned[e] = n.defaultSettings.pinned),
                    await (0, a.K4)(e, { defaultSettings: E(m({}, n.defaultSettings), { pinned: t }) }));
            }),
            h(this, "restoreDefaultWidgetPinned", async (e) => {
                if (__OVERLAY__) return;
                let t = l.Z.getWidgetConfig(e);
                if (null == t || null == this._defaultWidgetPinned[e]) return;
                let n = this._defaultWidgetPinned[e];
                await (0, a.K4)(e, { defaultSettings: E(m({}, t.defaultSettings), { pinned: n }) });
            }),
            h(this, "getDefaultWidgetPinned", (e) => {
                let t = this._defaultWidgetPinned[e];
                return null != t ? t : e in A && A[e];
            });
    }
}
class P {
    constructor() {
        h(this, "_storage", new N()),
            h(this, "_config", new R()),
            h(this, "updateWidgetPinned", (e, t) => {
                this._storage.setWidgetSetting(e, { pinned: t });
            }),
            h(this, "hasWidgetSetting", (e) => this._storage.hasWidgetSetting(e)),
            h(this, "initializeWidget", (e) => {
                let t = C(e);
                if (null == t || this.hasWidgetSetting(e)) return;
                let n = t.pinned;
                this.updateWidgetPinned(e, n);
            }),
            h(this, "unpinWidget", async (e) => {
                let t = C(e);
                null != t &&
                    (this.initializeWidget(e),
                    __OVERLAY__ || (await this._config.overrideDefaultWidgetPinned(e, O)),
                    await (0, a.xh)(t.id, {
                        forcedPinnedState: O,
                        shouldTrack: v,
                    }));
            }),
            h(this, "restoreWidget", async (e) => {
                var t;
                let n = this._storage.getWidgetSetting(e),
                    r = this._config.getDefaultWidgetPinned(e),
                    i = null != (t = null == n ? void 0 : n.pinned) ? t : r,
                    o = C(e);
                null != o &&
                    (e === p.Odu.VOICE && (i = !0),
                    __OVERLAY__ || (await this._config.restoreDefaultWidgetPinned(e)),
                    null != i &&
                        (await (0, a.xh)(o.id, {
                            forcedPinnedState: i,
                            shouldTrack: v,
                        })));
            }),
            h(this, "updateNotificationSetting", (e, t) => {
                this._storage.setNotificationSetting(e, { disabled: t });
            }),
            h(this, "hasNotificationSetting", (e) => this._storage.hasNotificationSetting(e)),
            h(this, "initializeNotification", (e) => {
                if (this.hasNotificationSetting(e)) return;
                let t = f.Z.isNotificationDisabledBySetting(e);
                this.updateNotificationSetting(e, t);
            }),
            h(this, "disableNotification", async (e) => {
                this.initializeNotification(e), await o.Z.setNotificationDisabledSetting(e, I, v);
            }),
            h(this, "restoreNotification", async (e) => {
                var t;
                let n = this._storage.getNotificationSetting(e),
                    r = null != (t = null == n ? void 0 : n.disabled) && t;
                null != r && (await o.Z.setNotificationDisabledSetting(e, r, v));
            }),
            this._config.initializeAllDefaultWidgetConfigs();
    }
}
function D() {
    return Object.values(u.i);
}
let w = new Set([u.i.WELCOME_GENERAL, u.i.GO_LIVE_NUDGE, u.i.GAME_ACTIVITY]),
    x = "overlay-negative-widget-experiment-bucket";
class L extends s.Z {
    constructor() {
        var e, t;
        super(),
            (e = this),
            h(this, "_settings", new P()),
            h(this, "_hasInitialized", !1),
            h(this, "_isProcessing", !1),
            h(this, "_appliedExperimentBucket", "control"),
            h(this, "setAppliedExperimentBucket", (e) => {
                (this._appliedExperimentBucket = e), i.K.set(x, e);
            }),
            h(this, "getRawAppliedExperimentBucket", () => (0, d.hb)("applied-experiment-bucket")),
            h(this, "getWidgetExperimentSettings", (e) => {
                let {
                        voiceWidgetDefaultUnpinned: t,
                        videoWidgetDefaultUnpinned: n,
                        unlockedOnlyDefaultOverlay: r,
                    } = (0, d.Sy)(
                        "".concat(__OVERLAY__ ? "LegacyOverlay" : "MainApp", "_ExperimentManager_WidgetSettings"),
                        e,
                    ),
                    i = new Set(),
                    a = new Set(),
                    o = t || r,
                    s = n || r;
                return (
                    o ? (i.add(p.Odu.VOICE_V3), i.add(p.Odu.VOICE)) : (a.add(p.Odu.VOICE_V3), a.add(p.Odu.VOICE)),
                    s ? i.add(p.Odu.VIDEO) : a.add(p.Odu.VIDEO),
                    {
                        widgetsToOverride: i,
                        widgetsToRestore: a,
                    }
                );
            }),
            h(this, "processWidgetExperiment", async function () {
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { widgetsToOverride: n, widgetsToRestore: r } = e.getWidgetExperimentSettings(t);
                for (let t of Object.values(p.Odu)) e._settings.initializeWidget(t);
                for (let t of r) await e._settings.restoreWidget(t);
                for (let t of n) await e._settings.unpinWidget(t);
                n.size > 0 &&
                    T.info("Experiment Override: Widgets", {
                        widgetsToRestore: r,
                        widgetsToOverride: n,
                    });
            }),
            h(this, "getNotificationExperimentSettings", (e) => {
                let {
                        notificationsDefaultOff: t,
                        disableWelcomeNotification: n,
                        unlockedOnlyDefaultOverlay: r,
                    } = (0, d.Sy)(
                        "".concat(__OVERLAY__ ? "LegacyOverlay" : "MainApp", "_ExperimentManager_NotificationSettings"),
                        e,
                    ),
                    i = new Set(),
                    a = new Set();
                for (let e of D())
                    r
                        ? i.add(e)
                        : n
                          ? w.has(e)
                              ? i.add(e)
                              : a.add(e)
                          : t && e !== u.i.WELCOME_GENERAL
                            ? i.add(e)
                            : a.add(e);
                return {
                    notificationsToOverride: i,
                    notificationsToRestore: a,
                };
            }),
            h(this, "processNotificationExperiment", async (e) => {
                if (__OVERLAY__) return;
                let { notificationsToOverride: t, notificationsToRestore: n } =
                    this.getNotificationExperimentSettings(e);
                for (let e of D()) this._settings.initializeNotification(e);
                for (let e of n) await this._settings.restoreNotification(e);
                for (let e of t) await this._settings.disableNotification(e);
                t.size > 0 &&
                    T.info("Experiment Override: Notifications", {
                        notificationsToRestore: n,
                        notificationsToOverride: t,
                    });
            }),
            h(this, "processAllExperiments", async (e) => {
                if (this._isProcessing) return;
                let t = this.getRawAppliedExperimentBucket();
                if (this._appliedExperimentBucket !== t) {
                    this._isProcessing = !0;
                    try {
                        await this.processWidgetExperiment(e), await this.processNotificationExperiment(e);
                    } catch (e) {
                        T.error("Experiments processing failed", { error: e });
                    } finally {
                        (this._isProcessing = !1), this.setAppliedExperimentBucket(t);
                    }
                }
            }),
            h(this, "handlePostConnectionOpen", async () => {
                __OVERLAY__ ||
                    this._isProcessing ||
                    this._hasInitialized ||
                    ((this._hasInitialized = !0), await this.processAllExperiments(!1));
            }),
            h(this, "handleExperimentOverrideBucket", async () => {
                this._isProcessing || (await this.processAllExperiments(!1));
            }),
            h(this, "handleSetNotificationDisabledSetting", (e) => {
                let { setting: t, disabled: n } = e;
                !this._isProcessing && (__OVERLAY__ || this._settings.updateNotificationSetting(t, n));
            }),
            h(this, "handleSetPinned", (e) => {
                let { widgetId: t, pinned: n } = e;
                if (this._isProcessing || null != n) return;
                let r = l.Z.getWidget(t);
                if (null == r) return;
                let i = r.pinned;
                this._settings.updateWidgetPinned(r.type, i);
            }),
            h(this, "actions", {
                POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
                EXPERIMENT_OVERRIDE_BUCKET: this.handleExperimentOverrideBucket,
                OVERLAY_SET_NOTIFICATION_DISABLED_SETTING: this.handleSetNotificationDisabledSetting,
                LAYOUT_SET_PINNED: this.handleSetPinned,
            }),
            (this._appliedExperimentBucket = null != (t = i.K.get(x)) ? t : "control");
    }
}
let M = new L();
