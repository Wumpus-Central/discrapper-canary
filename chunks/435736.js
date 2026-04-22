"use strict";
n.d(t, { Ay: () => N, C3: () => S, sw: () => T, tM: () => I, wW: () => p, xc: () => A });
var r = n(353640),
    i = n(118356),
    s = n(554146),
    a = n(506774),
    o = n(97260),
    l = n(439372),
    u = n(826673),
    d = n(532624),
    c = n(350535),
    _ = n(589051),
    f = n(652215);
let E = "overlayKeybindExperimentPreviousKeybindSettings",
    h = new i.Vy("OverlayKeybindExperimentManager"),
    p = (0, r.v)(() => a.w.get(E, {}));
function m() {
    return p.getState();
}
function g(e) {
    p.setState((t) => ({ ...t, ...e }), !0), a.w.set(E, p.getState());
}
let A = () => {
        g({ isNewOverlayUser: void 0 });
    },
    I = () => {
        g({ isUsingDefaultOverlayKeybind: void 0 });
    },
    T = (e) => {
        g({ overrideIsNewOverlayUser: e });
    };
function S(e) {
    g({ overrideIsUsingDefaultOverlayKeybind: e });
}
class y extends l.A {
    _hasInitialized = !1;
    _isProcessing = !1;
    initializeKeybind = () => {
        if (null != m().previousKeybind) return;
        let e = d.Ay.getOverlayKeybind();
        g({ previousKeybind: (0, c.dI)(e.shortcut) });
    };
    dispatchSetKeybind = (e) => {
        if (null == e) return;
        let t = d.Ay.getOverlayKeybind();
        return o.A.setKeybind({ ...t, shortcut: (0, c.OH)(e) });
    };
    restoreKeybind = async () => {
        let e = m().previousKeybind;
        null != e && (await this.dispatchSetKeybind(e));
    };
    processKeybindExperiment = async () => {
        this.initializeKeybind();
        let { keybindOverride: e } = (0, _.sq)("OverlayKeybindExperimentManager"),
            t = this.isEligibleForExperiment();
        m().keybindTreatment !== e &&
            (null == e
                ? (await this.restoreKeybind(), g({ keybindTreatment: void 0 }))
                : t && (await this.dispatchSetKeybind(e), g({ keybindTreatment: e })));
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
        (null == m().isNewOverlayUser &&
            g({
                isNewOverlayUser:
                    !(0, u.k8)(s.M.OVERLAY_OOP_WELCOME_SWITCH_FROM_IP_NUX) && !(0, u.k8)(s.M.OVERLAY_OOP_WELCOME_NUX),
            }),
        null != m().overrideIsNewOverlayUser)
            ? m().overrideIsNewOverlayUser
            : m().isNewOverlayUser;
    isUsingDefaultOverlayKeybind = () =>
        (null == m().isUsingDefaultOverlayKeybind &&
            g({
                isUsingDefaultOverlayKeybind: (function () {
                    let e = d.Ay.getKeybindForAction(f.hCu.TOGGLE_OVERLAY_INPUT_LOCK, !0);
                    if (null == e) return !0;
                    let t = (0, d.aS)();
                    return (0, c.Xt)(e.shortcut, t.shortcut);
                })(),
            }),
        null != m().overrideIsUsingDefaultOverlayKeybind)
            ? m().overrideIsUsingDefaultOverlayKeybind
            : m().isUsingDefaultOverlayKeybind;
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
                g({ previousKeybind: (0, c.dI)(e.keybind.shortcut) }));
    };
    handleOverlayReady = () => {
        __OVERLAY__ || (this.isEligibleForExperiment() && (0, _.sq)("OverlayKeybindExperimentManager"));
    };
    actions = {
        POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
        EXPERIMENTS_FETCH_SUCCESS: this.handleExperimentsInit,
        EXPERIMENT_OVERRIDE_BUCKET: this.handleExperimentOverrideBucket,
        KEYBINDS_SET_KEYBIND: this.handleKeybindSet,
        OVERLAY_READY: this.handleOverlayReady,
    };
}
let N = new y();
