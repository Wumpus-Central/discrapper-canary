n.d(t, { _: () => T }), n(415506), n(388685);
var r = n(579806),
    i = n(710845),
    a = n(928518),
    o = n(998502),
    s = n(145597),
    l = n(427860),
    c = n(503522),
    u = n(610394),
    d = n(932404),
    f = n(575140),
    _ = n(886189),
    p = n(398269),
    h = n(987650),
    m = n(501787);
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
let E = new i.Z("OverlayV3NativeModule");
function b(e, t) {
    (0, d.bs)(e, "renderer_window_focus_changed", {
        windowHandle: t,
        popoutInitializationStages: u.Z.getPopoutInitializationStages(),
    }),
        (0, d.P9)(e, null != t ? (0, f.rd)(t) : null);
}
function y(e) {
    (0, d.bs)(e, "renderer_window_focus_lost", { popoutInitializationStages: u.Z.getPopoutInitializationStages() }),
        (0, d.VQ)(e);
}
function O(e) {
    (0, d.bs)(e, "successfully_shown", { popoutInitializationStages: u.Z.getPopoutInitializationStages() }),
        (0, d.uD)(e);
}
function v(e) {
    (0, d.bs)(null, "window_handle_initialized", {
        real_initialized: e,
        popoutInitializationStages: u.Z.getPopoutInitializationStages(),
    }),
        (0, d.zg)(e);
}
function I(e) {
    var t, n, r, i;
    null == (t = e.setFocusCallback) || t.call(e, b),
        null == (n = e.setFocusLostCallback) || n.call(e, y),
        null == (r = e.setSuccessfullyShownCallback) || r.call(e, O),
        null == (i = e.setOnWindowHandleInitializedCallback) || i.call(e, v),
        (0, d.bs)(null, "native_module_callbacks_setup"),
        E.verbose("Native module callbacks setup");
}
class T {
    static getInstance() {
        return null == this.instance && (this.instance = new T()), this.instance;
    }
    async initialize() {
        return await this.prepareOverlayModule();
    }
    getOverlayModule() {
        if (null == this.module) throw Error("Overlay module not loaded");
        return this.module;
    }
    destroy() {
        (this.module = null),
            (this.lastAssociatedPID = null),
            (this.trackedGamePids = new Set()),
            E.info("OverlayV3 Native Module destroyed");
    }
    getLastAssociatedPID() {
        return this.lastAssociatedPID;
    }
    prepareOverlayModule() {
        return (
            null != this.modulePromise || (this.modulePromise = this.loadOutOfProcessOverlayModule()),
            this.modulePromise
        );
    }
    async loadOutOfProcessOverlayModule() {
        if (!h.iP) return void E.error("Attempted to load overlay on an unsupported platform.");
        E.info("Loading Out of Process Overlay Module");
        try {
            await o.ZP.ensureModule("discord_desktop_overlay");
            let e = o.ZP.requireModule("discord_desktop_overlay");
            e.init(),
                e.setHostWindowCallbacks(
                    (e) => this.createOutOfProcessOverlayHostWindow(e),
                    () => this.destroyOutOfProcessOverlayHostWindow(),
                    (e) => this.refreshOutOfProcessOverlayHostWindow(e),
                ),
                (this.module = e),
                (0, d.bs)(null, "module_loaded"),
                (0, s.setOutOfProcessSupport)(!0),
                I(this.module),
                (0, d.U9)(),
                E.info("OverlayV3 Module Loaded");
        } catch (e) {
            throw (
                (E.error("failed loading overlay module", e),
                (0, s.setOutOfProcessSupport)(!1),
                (0, d.UK)(e),
                (this.module = null),
                (this.modulePromise = null),
                e)
            );
        }
    }
    async createOutOfProcessOverlayHostWindow(e) {
        E.verbose("Creating OOP Host Window for pid ".concat(e)), (0, d.pH)(e);
        let t = null;
        try {
            (0, d.bs)(e, "host_window_mounting_started", {
                popoutInitializationStages: u.Z.getPopoutInitializationStages(),
            }),
                await (0, _.s)(),
                (t = await this.openOverlayPopout()),
                await (0, d.sG)(e),
                (0, d.bs)(e, "host_window_created", {
                    hasWindow: null != t,
                    popoutInitializationStages: u.Z.getPopoutInitializationStages(),
                });
        } catch (t) {
            E.error("Error creating OOP host window:", t),
                (0, d.bs)(e, "host_window_mounting_failed", { error: t }, l.l6.Error);
        }
        try {
            r.Z.window.setBackgroundThrottling(!1);
        } catch (t) {
            E.error("Error setting background throttling:", t),
                (0, d.bs)(e, "background_throttling_setting_failed", { error: t }, l.l6.Error);
        }
        let n = null;
        try {
            var i;
            (n = await this.getNativeWindowHandleWithRetry()),
                c.Z.resetWindowState(),
                (0, d.bs)(e, "native_window_handle_retrieved", {
                    handle: n,
                    hasWindow: null != n,
                    popoutInitializationStages: u.Z.getPopoutInitializationStages(),
                }),
                await (0, d.xO)(e, n),
                (null == (i = this.module) ? void 0 : i.setOnWindowHandleInitializedCallback) == null &&
                    (await (0, d.zg)(!0));
        } catch (t) {
            E.error("Error getting native window handle:", t),
                (0, d.MP)(e, t, n),
                (0, d.bs)(
                    e,
                    "native_window_handle_retrieval_failed",
                    {
                        error: t,
                        handle: n,
                        hasWindow: null != n,
                        popoutInitializationStages: u.Z.getPopoutInitializationStages(),
                    },
                    l.l6.Error,
                );
        }
        return (
            null == n
                ? (0, d.PV)(e, Error("Native window handle not found"), {
                      crashType: "native",
                      isCrashedDisabled: !0,
                  })
                : (this.lastAssociatedPID = e),
            null != n ? n : ""
        );
    }
    destroyOutOfProcessOverlayHostWindow() {
        E.verbose("Destroying OOP host window"), (0, d.bs)(this.lastAssociatedPID, "host_window_destroyed");
        try {
            var e, t;
            null === r.Z || void 0 === r.Z || null == (e = r.Z.window) || e.close(m.$J),
                null === r.Z || void 0 === r.Z || null == (t = r.Z.window) || t.setBackgroundThrottling(!0),
                c.Z.resetWindowState(!1);
        } catch (e) {
            E.error("Error closing overlay window:", e);
        }
        (0, d.Hi)(this.lastAssociatedPID), (this.lastAssociatedPID = null);
    }
    refreshOutOfProcessOverlayHostWindow(e) {
        E.verbose("Refreshing OOP host window for pid ".concat(e)),
            (0, d.bs)(e, "host_window_refreshing_started", {
                popoutInitializationStages: u.Z.getPopoutInitializationStages(),
            }),
            (0, d.nV)(e, this.lastAssociatedPID),
            (this.lastAssociatedPID = e);
    }
    async openOverlayPopout() {
        return await (0, p.f)(), await this.getWindowWithRetry();
    }
    async getWithRetry(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3;
        for (let r = 0; r < n; r++) {
            let i = r + 1 >= n;
            try {
                let t = await e();
                if (null != t) return t;
            } catch (n) {
                if (i) throw n;
                let e = Math.pow(2, r + 1) * t;
                await new Promise((t) => setTimeout(t, e));
            }
        }
        return null;
    }
    async getWindowWithRetry() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
        return await this.getWithRetry(
            () => {
                let e = a.Z.getWindow(m.$J);
                if (null == e) throw Error("Overlay popout window not found");
                return Promise.resolve(e);
            },
            e,
            t,
        );
    }
    async getNativeWindowHandleWithRetry() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 500,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
        return await this.getWithRetry(
            async () => {
                var e;
                let t = await (null === r.Z || void 0 === r.Z || null == (e = r.Z.window)
                    ? void 0
                    : e.getNativeHandle(m.$J));
                return null != t ? (0, f.rd)(t) : null;
            },
            e,
            t,
        );
    }
    getNativeBreadcrumbs(e, t) {
        var n, r;
        null == (r = this.module) || null == (n = r.getBreadcrumbs) || n.call(r, e, t);
    }
    getDebuggingState(e) {
        var t, n;
        null == (n = this.module) || null == (t = n.getDebuggingState) || t.call(n, e);
    }
    setDetailedLogging(e) {
        var t, n;
        null == (n = this.module) || null == (t = n.setDetailedLogging) || t.call(n, e);
    }
    onNativePopoutShowInactiveSuccess() {
        var e, t;
        null == (t = this.module) || null == (e = t.onPopoutShowInactive) || e.call(t);
    }
    setRenderingWindowHandle(e, t) {
        var n, r;
        null == (r = this.module) || null == (n = r.setRenderingWindowHandle) || n.call(r, e),
            E.verbose("Setting rendering window handle for pid ".concat(t, ": ").concat(e));
    }
    setInteractionEnabled(e) {
        var t, n;
        null == (n = this.module) || null == (t = n.setInteractionEnabled) || t.call(n, e);
    }
    setLimitedInteraction(e) {
        var t, n;
        null == (n = this.module) || null == (t = n.setLimitedInteraction) || t.call(n, e), o.ZP.setFocusable(m.$J, !e);
    }
    setCaptureZoneCallback(e) {
        var t, n;
        null == (n = this.module) || null == (t = n.setCaptureZoneCallback) || t.call(n, e);
    }
    setCaptureZones(e) {
        var t, n;
        null == (n = this.module) || null == (t = n.setCaptureZones) || t.call(n, e);
    }
    readyToShow(e) {
        var t, n;
        null == (n = this.module) || null == (t = n.readyToShow) || t.call(n, e);
    }
    trackGame(e) {
        null != this.module && (this.module.trackGame(e), this.trackedGamePids.add(e), (0, d.NB)(e));
    }
    untrackGame(e) {
        if (null == this.module) return;
        this.module.untrackGame(e), this.trackedGamePids.delete(e);
        let t = this.trackedGamePids.values().next().value;
        this.lastAssociatedPID === e && null != t
            ? (this.lastAssociatedPID = t)
            : this.lastAssociatedPID === e && null == t && (this.lastAssociatedPID = null),
            (0, d.k0)(e);
    }
    constructor() {
        g(this, "module", null),
            g(this, "modulePromise", null),
            g(this, "isCrashedDisabled", !1),
            g(this, "lastAssociatedPID", null),
            g(this, "trackedGamePids", new Set());
    }
}
g(T, "instance", null);
