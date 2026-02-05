"use strict";
n.d(t, { Ay: () => C, C3: () => y, sw: () => T, tM: () => I, wW: () => m, xc: () => A });
var r = n(353640),
    i = n(118356),
    a = n(554146),
    s = n(506774),
    o = n(97260),
    l = n(439372),
    u = n(826673),
    c = n(532624),
    d = n(350535),
    _ = n(589051),
    f = n(652215);
let p = "overlayKeybindExperimentPreviousKeybindSettings",
    h = new i.Vy("OverlayKeybindExperimentManager"),
    m = (0, r.v)(() => s.w.get(p, {}));
function g() {
    return m.getState();
}
function E(e) {
    m.setState((t) => ({ ...t, ...e }), !0), s.w.set(p, m.getState());
}
let A = () => {
        E({ isNewOverlayUser: void 0 });
    },
    I = () => {
        E({ isUsingDefaultOverlayKeybind: void 0 });
    },
    T = (e) => {
        E({ overrideIsNewOverlayUser: e });
    };
function y(e) {
    E({ overrideIsUsingDefaultOverlayKeybind: e });
}
function S() {
    let e = c.Ay.getKeybindForAction(f.hCu.TOGGLE_OVERLAY_INPUT_LOCK, !0);
    if (null == e) return !0;
    let t = (0, c.aS)();
    return (0, d.Xt)(e.shortcut, t.shortcut);
}
class v extends l.A {
    _hasInitialized = !1;
    _isProcessing = !1;
    initializeKeybind = () => {
        if (null != g().previousKeybind) return;
        let e = c.Ay.getOverlayKeybind();
        E({ previousKeybind: (0, d.dI)(e.shortcut) });
    };
    dispatchSetKeybind = (e) => {
        if (null == e) return;
        let t = c.Ay.getOverlayKeybind();
        return o.A.setKeybind({ ...t, shortcut: (0, d.OH)(e) });
    };
    restoreKeybind = async () => {
        let e = g().previousKeybind;
        null != e && (await this.dispatchSetKeybind(e));
    };
    processKeybindExperiment = async () => {
        this.initializeKeybind();
        let { keybindOverride: e } = (0, _.sq)("OverlayKeybindExperimentManager", !1),
            t = this.isEligibleForExperiment();
        g().keybindTreatment !== e &&
            (null == e
                ? (await this.restoreKeybind(), E({ keybindTreatment: void 0 }))
                : t && (await this.dispatchSetKeybind(e), E({ keybindTreatment: e })));
    };
    processExperiment = async () => {
        if (!__OVERLAY__ && !this._isProcessing) {
            this._isProcessing = !0;
            try {
                await this.processKeybindExperiment();
            } catch (e) {
                h.error("Experiments processing failed", { error: e });
            } finally {
                this._isProcessing = !1;
            }
        }
    };
    maybeInitExperiment = async () => {
        this._hasInitialized ||
            ((this._hasInitialized = !0),
            h.info("Experiments initializing..."),
            await this.processExperiment(),
            h.info("Experiments initialized"));
    };
    isNewOverlayUser = () =>
        (null == g().isNewOverlayUser &&
            E({
                isNewOverlayUser:
                    !(0, u.k8)(a.M.OVERLAY_OOP_WELCOME_SWITCH_FROM_IP_NUX) && !(0, u.k8)(a.M.OVERLAY_OOP_WELCOME_NUX),
            }),
        null != g().overrideIsNewOverlayUser)
            ? g().overrideIsNewOverlayUser
            : g().isNewOverlayUser;
    isUsingDefaultOverlayKeybind = () =>
        (null == g().isUsingDefaultOverlayKeybind && E({ isUsingDefaultOverlayKeybind: S() }),
        null != g().overrideIsUsingDefaultOverlayKeybind)
            ? g().overrideIsUsingDefaultOverlayKeybind
            : g().isUsingDefaultOverlayKeybind;
    isEligibleForExperiment = () => {
        let e = this.isNewOverlayUser(),
            t = this.isUsingDefaultOverlayKeybind();
        return e && t;
    };
    handlePostConnectionOpen = async () => {
        __OVERLAY__ || this._isProcessing || (await this.maybeInitExperiment());
    };
    handleExperimentsInit = async () => {
        __OVERLAY__ || this._isProcessing || (await this.maybeInitExperiment());
    };
    handleExperimentOverrideBucket = async (e) => {
        __OVERLAY__ ||
            this._isProcessing ||
            (h.info("Experiments processing...", { action: e }), await this.processExperiment());
    };
    handleKeybindSet = (e) => {
        __OVERLAY__ ||
            this._isProcessing ||
            (e.keybind.action === f.hCu.TOGGLE_OVERLAY_INPUT_LOCK &&
                E({ previousKeybind: (0, d.dI)(e.keybind.shortcut) }));
    };
    handleOverlayReady = () => {
        __OVERLAY__ ||
            (this.isEligibleForExperiment() && _.lR.trackExposure({ location: "OverlayKeybindExperimentManager" }));
    };
    actions = {
        POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
        EXPERIMENTS_FETCH_SUCCESS: this.handleExperimentsInit,
        EXPERIMENT_OVERRIDE_BUCKET: this.handleExperimentOverrideBucket,
        KEYBINDS_SET_KEYBIND: this.handleKeybindSet,
        OVERLAY_READY: this.handleOverlayReady,
    };
}
let C = new v();
