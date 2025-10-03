n.d(t, { Z: () => j }), n(388685), n(49124);
var r = n(579092),
    i = n(433517),
    a = n(765250),
    o = n(13245),
    s = n(147913),
    l = n(633289),
    c = n(314897),
    u = n(355863),
    d = n(145597),
    f = n(486016),
    _ = n(32300),
    p = n(624864),
    h = n(757744),
    m = n(981631);
function g(e, t, n) {
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
function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
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
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let O = "overlay-negative-experiment-notification-settings",
    v = "overlay-negative-experiment-widget-settings",
    I = !1,
    T = !1,
    S = !0,
    A = new r.Yd("OverlayNegativeWidgetExperimentManager");
function C(e) {
    switch (e) {
        case m.Odu.VOICE:
        case m.Odu.TEXT:
        case m.Odu.GUILDS:
        case m.Odu.GUILDS_TEXT:
        case m.Odu.QUICK_ACTIONS:
            return d.OVERLAY_LAYOUT_ID;
        default:
            return h.$S;
    }
}
function N(e) {
    let t = u.Z.getWidgetsByTypeAndLayout(e, C(e));
    if (0 !== t.length) return t[0];
}
class R {
    constructor() {
        g(this, "_widgetSettings", void 0),
            g(this, "_notificationSettings", void 0),
            g(this, "setWidgetSetting", (e, t) => {
                var n;
                (this._widgetSettings[e] = E({}, null != (n = this._widgetSettings[e]) ? n : {}, t)),
                    i.K.set(v, this._widgetSettings);
            }),
            g(this, "getWidgetSetting", (e) => this._widgetSettings[e]),
            g(this, "hasWidgetSetting", (e) => null != this._widgetSettings[e]),
            g(this, "setNotificationSetting", (e, t) => {
                var n;
                (this._notificationSettings[e] = E({}, null != (n = this._notificationSettings[e]) ? n : {}, t)),
                    i.K.set(O, this._notificationSettings);
            }),
            g(this, "hasNotificationSetting", (e) => null != this._notificationSettings[e]),
            g(this, "getNotificationSetting", (e) => this._notificationSettings[e]),
            (this._widgetSettings = i.K.get(v, {})),
            (this._notificationSettings = i.K.get(O, {}));
    }
}
class P {
    constructor() {
        g(this, "_defaultWidgetPinned", {}),
            g(this, "initializeAllDefaultWidgetConfigs", () => {
                for (let e of Object.keys(m.Odu)) {
                    let t = e,
                        n = u.Z.getWidgetConfig(t);
                    null != n &&
                        null == this._defaultWidgetPinned[t] &&
                        (this._defaultWidgetPinned[t] = n.defaultSettings.pinned);
                }
                A.info("Initialized all default widget configs", { defaultWidgetConfigs: this._defaultWidgetPinned });
            }),
            g(this, "overrideDefaultWidgetPinned", async (e, t) => {
                let n = u.Z.getWidgetConfig(e);
                if (null == n)
                    return void A.error("Override default widget pinned: Widget config not found", { widgetType: e });
                null == this._defaultWidgetPinned[e] && (this._defaultWidgetPinned[e] = n.defaultSettings.pinned),
                    await (0, a.K4)(e, { defaultSettings: y(E({}, n.defaultSettings), { pinned: t }) });
            }),
            g(this, "restoreDefaultWidgetPinned", async (e) => {
                let t = u.Z.getWidgetConfig(e);
                if (null == t)
                    return void A.error("Override default widget pinned: Widget config not found", { widgetType: e });
                if (null == this._defaultWidgetPinned[e]) return;
                let n = this._defaultWidgetPinned[e];
                await (0, a.K4)(e, { defaultSettings: y(E({}, t.defaultSettings), { pinned: n }) });
            }),
            g(this, "getWidgetPinned", (e) => {
                var t;
                return null != (t = this._defaultWidgetPinned[e]) && t;
            });
    }
}
class w {
    constructor() {
        g(this, "_storage", new R()),
            g(this, "_config", new P()),
            g(this, "updateWidgetPinned", (e, t) => {
                this._storage.setWidgetSetting(e, { pinned: t });
            }),
            g(this, "hasWidgetSetting", (e) => this._storage.hasWidgetSetting(e)),
            g(this, "initializeWidget", (e) => {
                let t = N(e);
                if (null == t) return void A.error("Initialize widget: Widget not found", { widgetType: e });
                if (this.hasWidgetSetting(e)) return;
                let n = t.pinned;
                this.updateWidgetPinned(e, n);
            }),
            g(this, "unpinWidget", async (e) => {
                let t = N(e);
                if (null == t) return void A.error("Unpin widget: Widget not found", { widgetType: e });
                let n = t.pinned;
                await this._config.overrideDefaultWidgetPinned(e, I),
                    await (0, a.xh)(t.id, {
                        forcedPinnedState: I,
                        shouldTrack: T,
                    }),
                    this.hasWidgetSetting(e) || this.updateWidgetPinned(e, n);
            }),
            g(this, "restoreWidget", async (e) => {
                var t;
                let n = this._storage.getWidgetSetting(e),
                    r = this._config.getWidgetPinned(e),
                    i = null != (t = null == n ? void 0 : n.pinned) ? t : r,
                    o = N(e);
                if (null == o) return void A.error("Restore widget: Widget not found", { widgetType: e });
                await this._config.restoreDefaultWidgetPinned(e),
                    null != i &&
                        (await (0, a.xh)(o.id, {
                            forcedPinnedState: i,
                            shouldTrack: T,
                        }),
                        this.updateWidgetPinned(e, i));
            }),
            g(this, "updateNotificationSetting", (e, t) => {
                this._storage.setNotificationSetting(e, { disabled: t });
            }),
            g(this, "hasNotificationSetting", (e) => this._storage.hasNotificationSetting(e)),
            g(this, "initializeNotification", (e) => {
                if (this.hasNotificationSetting(e)) return;
                let t = p.Z.isNotificationDisabled(e);
                this.updateNotificationSetting(e, t);
            }),
            g(this, "disableNotification", async (e) => {
                this.initializeNotification(e), await o.Z.setNotificationDisabledSetting(e, S, T);
            }),
            g(this, "restoreNotification", async (e) => {
                var t;
                let n = this._storage.getNotificationSetting(e),
                    r = null != (t = null == n ? void 0 : n.disabled) && t;
                null != r && (await o.Z.setNotificationDisabledSetting(e, r, T));
            }),
            this._config.initializeAllDefaultWidgetConfigs();
    }
}
function D() {
    return Object.values(f.OverlayNotificationDisabledSetting);
}
let L = new Set([
    f.OverlayNotificationDisabledSetting.WELCOME_GENERAL,
    f.OverlayNotificationDisabledSetting.GO_LIVE_NUDGE,
    f.OverlayNotificationDisabledSetting.GAME_ACTIVITY,
]);
class x extends s.Z {
    constructor(...e) {
        super(...e),
            g(this, "_settings", new w()),
            g(this, "_hasInitialized", !1),
            g(this, "_isProcessing", !1),
            g(this, "getWidgetExperimentSettings", () => {
                let {
                        voiceWidgetDefaultUnpinned: e,
                        videoWidgetDefaultUnpinned: t,
                        unlockedOnlyDefaultOverlay: n,
                    } = (0, _.Sy)("OverlayNegativeWidgetExperimentManager"),
                    r = new Set(),
                    i = new Set(),
                    a = e || n,
                    o = t || n;
                return (
                    a ? (r.add(m.Odu.VOICE_V3), r.add(m.Odu.VOICE)) : (i.add(m.Odu.VOICE_V3), i.add(m.Odu.VOICE)),
                    o ? r.add(m.Odu.VIDEO) : i.add(m.Odu.VIDEO),
                    n ? r.add(m.Odu.NOTIFICATIONS) : i.add(m.Odu.NOTIFICATIONS),
                    {
                        widgetsToOverride: r,
                        widgetsToRestore: i,
                    }
                );
            }),
            g(this, "processWidgetExperiment", async () => {
                let { widgetsToOverride: e, widgetsToRestore: t } = this.getWidgetExperimentSettings();
                for (let e of Object.values(m.Odu)) this._settings.initializeWidget(e);
                for (let e of t) await this._settings.restoreWidget(e);
                for (let t of e) await this._settings.unpinWidget(t);
                A.info(
                    "Widget experiment settings: ".concat(
                        JSON.stringify({
                            widgetsToOverride: e,
                            widgetsToRestore: t,
                        }),
                    ),
                );
            }),
            g(this, "getNotificationExperimentSettings", () => {
                let {
                        notificationsDefaultOff: e,
                        disableWelcomeNotification: t,
                        unlockedOnlyDefaultOverlay: n,
                    } = (0, _.Sy)("OverlayNegativeWidgetExperimentManager"),
                    r = new Set(),
                    i = new Set();
                for (let a of D())
                    n
                        ? r.add(a)
                        : t
                          ? L.has(a)
                              ? r.add(a)
                              : i.add(a)
                          : e && a !== f.OverlayNotificationDisabledSetting.WELCOME_GENERAL
                            ? r.add(a)
                            : i.add(a);
                return {
                    notificationsToOverride: r,
                    notificationsToRestore: i,
                };
            }),
            g(this, "processNotificationExperiment", async () => {
                let { notificationsToOverride: e, notificationsToRestore: t } =
                    this.getNotificationExperimentSettings();
                for (let e of D()) this._settings.initializeNotification(e);
                for (let e of t) await this._settings.restoreNotification(e);
                for (let t of e) await this._settings.disableNotification(t);
                A.info(
                    "Notification experiment settings: ".concat(
                        JSON.stringify({
                            notificationsToOverride: e,
                            notificationsToRestore: t,
                        }),
                    ),
                );
            }),
            g(this, "processAllExperiments", async () => {
                __OVERLAY__ ||
                    (this.terminate(!0),
                    (this._isProcessing = !0),
                    await this.processWidgetExperiment(),
                    await this.processNotificationExperiment(),
                    (this._isProcessing = !1),
                    this.initialize());
            }),
            g(this, "maybeInitExperiments", async (e) => {
                this._hasInitialized ||
                    ((this._hasInitialized = !0),
                    A.info("Experiments initializing... (".concat(e, ")")),
                    await this.processAllExperiments(),
                    A.info("Experiments initialized (".concat(e, ")")));
            }),
            g(this, "handlePostConnectionOpen", async () => {
                __OVERLAY__ ||
                    this._isProcessing ||
                    (l.Z.hasLoaded(c.default.getId()) && (await this.maybeInitExperiments("POST_CONNECTION_OPEN")));
            }),
            g(this, "handleExperimentsInit", async () => {
                __OVERLAY__ || this._isProcessing || (await this.maybeInitExperiments("EXPERIMENTS_FETCH_SUCCESS"));
            }),
            g(this, "handleExperimentOverrideBucket", async (e) => {
                __OVERLAY__ ||
                    this._isProcessing ||
                    (A.info("Experiments processing...", { action: e }), await this.processAllExperiments());
            }),
            g(this, "handleSetNotificationDisabledSetting", (e) => {
                let { setting: t, disabled: n } = e;
                __OVERLAY__ ||
                    this._isProcessing ||
                    (A.info("Setting notification disabled setting...", {
                        setting: t,
                        disabled: n,
                    }),
                    this._settings.updateNotificationSetting(t, n));
            }),
            g(this, "handleSetPinned", (e) => {
                let { widgetId: t, pinned: n } = e;
                if (__OVERLAY__ || this._isProcessing || null != n) return;
                let r = u.Z.getWidget(t);
                if (null == r) return;
                let i = r.pinned;
                A.info("Setting widget pinned...", {
                    widgetId: t,
                    pinned: i,
                }),
                    this._settings.updateWidgetPinned(r.type, i);
            }),
            g(this, "actions", {
                POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
                APEX_EXPERIMENTS_FETCH_SUCCESS: this.handleExperimentsInit,
                APEX_EXPERIMENT_OVERRIDE_CLEAR: this.handleExperimentOverrideBucket,
                APEX_EXPERIMENT_OVERRIDE_DELETE: this.handleExperimentOverrideBucket,
                APEX_EXPERIMENT_OVERRIDE_CREATE: this.handleExperimentOverrideBucket,
                OVERLAY_SET_NOTIFICATION_DISABLED_SETTING: this.handleSetNotificationDisabledSetting,
                EXPERIMENT_OVERRIDE_BUCKET: this.handleExperimentOverrideBucket,
                LAYOUT_SET_PINNED: this.handleSetPinned,
            });
    }
}
let j = new x();
