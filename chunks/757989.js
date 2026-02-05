"use strict";
n.d(t, { A: () => L });
var r = n(118356),
    i = n(506774),
    a = n(391973),
    s = n(684013),
    o = n(439372),
    l = n(555528),
    u = n(9302),
    c = n(93465),
    d = n(589051),
    _ = n(592598),
    f = n(644434),
    p = n(652215);
let h = "overlay-negative-experiment-notification-settings",
    m = "overlay-negative-experiment-widget-settings",
    g = !1,
    E = !1,
    A = !0,
    I = new r.Vy("OverlayNegativeWidgetExperimentManager");
function T(e) {
    switch (e) {
        case p.uss.VOICE:
        case p.uss.TEXT:
        case p.uss.GUILDS:
        case p.uss.GUILDS_TEXT:
        case p.uss.QUICK_ACTIONS:
            return u.OVERLAY_LAYOUT_ID;
        default:
            return f.G;
    }
}
let y = { [p.uss.VIDEO]: !0, [p.uss.VOICE]: !0, [p.uss.VOICE_V3]: !0 };
function S(e) {
    let [t] = l.A.getWidgetsByTypeAndLayout(e, T(e));
    if (null != t || (([t] = l.A.getWidgetsByType(e)), null != t)) return t;
    for (let t of Object.values(l.A.getAllWidgets())) if (t.type === e) return t;
}
class v {
    _widgetSettings;
    _notificationSettings;
    constructor() {
        (this._widgetSettings = i.w.get(m, {})),
            (this._notificationSettings = i.w.get(h, {})),
            __OVERLAY__ && ((this._widgetSettings = {}), (this._notificationSettings = {}));
    }
    setWidgetSetting = (e, t) => {
        (this._widgetSettings[e] = { ...(this._widgetSettings[e] ?? {}), ...t }),
            __OVERLAY__ || i.w.set(m, this._widgetSettings);
    };
    getWidgetSetting = (e) => this._widgetSettings[e];
    hasWidgetSetting = (e) => null != this._widgetSettings[e];
    setNotificationSetting = (e, t) => {
        (this._notificationSettings[e] = { ...(this._notificationSettings[e] ?? {}), ...t }),
            __OVERLAY__ || i.w.set(h, this._notificationSettings);
    };
    hasNotificationSetting = (e) => null != this._notificationSettings[e];
    getNotificationSetting = (e) => this._notificationSettings[e];
}
class C {
    _defaultWidgetPinned = {};
    initializeAllDefaultWidgetConfigs = () => {
        for (let e of Object.keys(p.uss)) {
            let t = e,
                n = l.A.getWidgetConfig(t);
            null != n &&
                null == this._defaultWidgetPinned[t] &&
                (this._defaultWidgetPinned[t] = n.defaultSettings.pinned);
        }
    };
    overrideDefaultWidgetPinned = async (e, t) => {
        if (__OVERLAY__) return;
        let n = l.A.getWidgetConfig(e);
        null != n &&
            (null == this._defaultWidgetPinned[e] && (this._defaultWidgetPinned[e] = n.defaultSettings.pinned),
            await (0, a.qH)(e, { defaultSettings: { ...n.defaultSettings, pinned: t } }));
    };
    restoreDefaultWidgetPinned = async (e) => {
        if (__OVERLAY__) return;
        let t = l.A.getWidgetConfig(e);
        if (null == t || null == this._defaultWidgetPinned[e]) return;
        let n = this._defaultWidgetPinned[e];
        await (0, a.qH)(e, { defaultSettings: { ...t.defaultSettings, pinned: n } });
    };
    getDefaultWidgetPinned = (e) => {
        let t = this._defaultWidgetPinned[e];
        return null != t ? t : e in y && y[e];
    };
}
class b {
    _storage = new v();
    _config = new C();
    constructor() {
        this._config.initializeAllDefaultWidgetConfigs();
    }
    updateWidgetPinned = (e, t) => {
        this._storage.setWidgetSetting(e, { pinned: t });
    };
    hasWidgetSetting = (e) => this._storage.hasWidgetSetting(e);
    initializeWidget = (e) => {
        let t = S(e);
        if (null == t || this.hasWidgetSetting(e)) return;
        let n = t.pinned;
        this.updateWidgetPinned(e, n);
    };
    unpinWidget = async (e) => {
        let t = S(e);
        null != t &&
            (this.initializeWidget(e),
            __OVERLAY__ || (await this._config.overrideDefaultWidgetPinned(e, g)),
            await (0, a.v0)(t.id, { forcedPinnedState: g, shouldTrack: E }));
    };
    restoreWidget = async (e) => {
        let t = this._storage.getWidgetSetting(e),
            n = this._config.getDefaultWidgetPinned(e),
            r = t?.pinned ?? n,
            i = S(e);
        null == i ||
            (e === p.uss.VOICE && (r = !0),
            __OVERLAY__ || (await this._config.restoreDefaultWidgetPinned(e)),
            null != r && (await (0, a.v0)(i.id, { forcedPinnedState: r, shouldTrack: E })));
    };
    updateNotificationSetting = (e, t) => {
        this._storage.setNotificationSetting(e, { disabled: t });
    };
    hasNotificationSetting = (e) => this._storage.hasNotificationSetting(e);
    initializeNotification = (e) => {
        if (this.hasNotificationSetting(e)) return;
        let t = _.A.isNotificationDisabledBySetting(e);
        this.updateNotificationSetting(e, t);
    };
    disableNotification = async (e) => {
        this.initializeNotification(e), await s.A.setNotificationDisabledSetting(e, A, E);
    };
    restoreNotification = async (e) => {
        let t = this._storage.getNotificationSetting(e),
            n = t?.disabled ?? !1;
        null != n && (await s.A.setNotificationDisabledSetting(e, n, E));
    };
}
function N() {
    return Object.values(c.M);
}
let R = new Set([c.M.WELCOME_GENERAL, c.M.GO_LIVE_NUDGE, c.M.GAME_ACTIVITY]),
    O = "overlay-negative-widget-experiment-bucket";
class D extends o.A {
    _settings = new b();
    _hasInitialized = !1;
    _isProcessing = !1;
    _appliedExperimentBucket = "control";
    constructor() {
        super(), (this._appliedExperimentBucket = i.w.get(O) ?? "control");
    }
    setAppliedExperimentBucket = (e) => {
        (this._appliedExperimentBucket = e), i.w.set(O, e);
    };
    getRawAppliedExperimentBucket = () => (0, d.H)("applied-experiment-bucket");
    getWidgetExperimentSettings = (e) => {
        let {
                voiceWidgetDefaultUnpinned: t,
                videoWidgetDefaultUnpinned: n,
                unlockedOnlyDefaultOverlay: r,
            } = (0, d.aS)(`${__OVERLAY__ ? "LegacyOverlay" : "MainApp"}_ExperimentManager_WidgetSettings`, e),
            i = new Set(),
            a = new Set(),
            s = t || r,
            o = n || r;
        return (
            s ? (i.add(p.uss.VOICE_V3), i.add(p.uss.VOICE)) : (a.add(p.uss.VOICE_V3), a.add(p.uss.VOICE)),
            o ? i.add(p.uss.VIDEO) : a.add(p.uss.VIDEO),
            { widgetsToOverride: i, widgetsToRestore: a }
        );
    };
    processWidgetExperiment = (() => {
        var e = this;
        return async function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                { widgetsToOverride: n, widgetsToRestore: r } = e.getWidgetExperimentSettings(t);
            for (let t of Object.values(p.uss)) e._settings.initializeWidget(t);
            for (let t of r) await e._settings.restoreWidget(t);
            for (let t of n) await e._settings.unpinWidget(t);
            n.size > 0 && I.info("Experiment Override: Widgets", { widgetsToRestore: r, widgetsToOverride: n });
        };
    })();
    getNotificationExperimentSettings = (e) => {
        let {
                notificationsDefaultOff: t,
                disableWelcomeNotification: n,
                unlockedOnlyDefaultOverlay: r,
            } = (0, d.aS)(`${__OVERLAY__ ? "LegacyOverlay" : "MainApp"}_ExperimentManager_NotificationSettings`, e),
            i = new Set(),
            a = new Set();
        for (let e of N())
            r ? i.add(e) : n ? (R.has(e) ? i.add(e) : a.add(e)) : t && e !== c.M.WELCOME_GENERAL ? i.add(e) : a.add(e);
        return { notificationsToOverride: i, notificationsToRestore: a };
    };
    processNotificationExperiment = async (e) => {
        if (__OVERLAY__) return;
        let { notificationsToOverride: t, notificationsToRestore: n } = this.getNotificationExperimentSettings(e);
        for (let e of N()) this._settings.initializeNotification(e);
        for (let e of n) await this._settings.restoreNotification(e);
        for (let e of t) await this._settings.disableNotification(e);
        t.size > 0 &&
            I.info("Experiment Override: Notifications", { notificationsToRestore: n, notificationsToOverride: t });
    };
    processAllExperiments = async (e) => {
        if (this._isProcessing) return;
        let t = this.getRawAppliedExperimentBucket();
        if (this._appliedExperimentBucket !== t) {
            this._isProcessing = !0;
            try {
                await this.processWidgetExperiment(e), await this.processNotificationExperiment(e);
            } catch (e) {
                I.error("Experiments processing failed", { error: e });
            } finally {
                (this._isProcessing = !1), this.setAppliedExperimentBucket(t);
            }
        }
    };
    handlePostConnectionOpen = async () => {
        __OVERLAY__ ||
            this._isProcessing ||
            this._hasInitialized ||
            ((this._hasInitialized = !0), await this.processAllExperiments(!1));
    };
    handleExperimentOverrideBucket = async () => {
        this._isProcessing || (await this.processAllExperiments(!1));
    };
    handleSetNotificationDisabledSetting = (e) => {
        let { setting: t, disabled: n } = e;
        this._isProcessing || __OVERLAY__ || this._settings.updateNotificationSetting(t, n);
    };
    handleSetPinned = (e) => {
        let { widgetId: t, pinned: n } = e;
        if (this._isProcessing || null != n) return;
        let r = l.A.getWidget(t);
        if (null == r) return;
        let i = r.pinned;
        this._settings.updateWidgetPinned(r.type, i);
    };
    actions = {
        POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
        EXPERIMENT_OVERRIDE_BUCKET: this.handleExperimentOverrideBucket,
        OVERLAY_SET_NOTIFICATION_DISABLED_SETTING: this.handleSetNotificationDisabledSetting,
        LAYOUT_SET_PINNED: this.handleSetPinned,
    };
}
let L = new D();
