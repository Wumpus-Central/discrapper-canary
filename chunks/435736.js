"use strict";
n.d(t, { Ay: () => C, C3: () => S, sw: () => g, tM: () => m, wW: () => I, xc: () => T });
var i = n(196765),
    r = n(941426),
    a = n(554146),
    s = n(506774),
    l = n(97260),
    o = n(439372),
    d = n(826673),
    c = n(532624),
    u = n(350535),
    _ = n(589051),
    E = n(652215);
let A = "overlayKeybindExperimentPreviousKeybindSettings",
    h = new r.Vy("OverlayKeybindExperimentManager"),
    I = (0, i.v)(() => s.w.get(A, {}));
function f() {
    return I.getState();
}
function p(e) {
    I.setState((t) => ({ ...t, ...e }), !0), s.w.set(A, I.getState());
}
function T() {
    p({ isNewOverlayUser: void 0 });
}
function m() {
    p({ isUsingDefaultOverlayKeybind: void 0 });
}
function g(e) {
    p({ overrideIsNewOverlayUser: e });
}
function S(e) {
    p({ overrideIsUsingDefaultOverlayKeybind: e });
}
class N extends o.A {
    _hasInitialized = !1;
    _isProcessing = !1;
    initializeKeybind = () => {
        if (null != f().previousKeybind) return;
        let e = c.Ay.getOverlayKeybind();
        p({ previousKeybind: (0, u.dI)(e.shortcut) });
    };
    dispatchSetKeybind = (e) => {
        if (null == e) return;
        let t = c.Ay.getOverlayKeybind();
        return l.A.setKeybind({ ...t, shortcut: (0, u.OH)(e) });
    };
    restoreKeybind = async () => {
        let e = f().previousKeybind;
        null != e && (await this.dispatchSetKeybind(e));
    };
    processKeybindExperiment = async () => {
        this.initializeKeybind();
        let { keybindOverride: e } = (0, _.sq)("OverlayKeybindExperimentManager"),
            t = this.isEligibleForExperiment();
        f().keybindTreatment !== e &&
            (null == e
                ? (await this.restoreKeybind(), p({ keybindTreatment: void 0 }))
                : t && (await this.dispatchSetKeybind(e), p({ keybindTreatment: e })));
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
        (null == f().isNewOverlayUser &&
            p({
                isNewOverlayUser:
                    !(0, d.k8)(a.M.OVERLAY_OOP_WELCOME_SWITCH_FROM_IP_NUX) && !(0, d.k8)(a.M.OVERLAY_OOP_WELCOME_NUX),
            }),
        null != f().overrideIsNewOverlayUser)
            ? f().overrideIsNewOverlayUser
            : f().isNewOverlayUser;
    isUsingDefaultOverlayKeybind = () =>
        (null == f().isUsingDefaultOverlayKeybind &&
            p({
                isUsingDefaultOverlayKeybind: (function () {
                    let e = c.Ay.getKeybindForAction(E.hCu.TOGGLE_OVERLAY_INPUT_LOCK, !0);
                    if (null == e) return !0;
                    let t = (0, c.aS)();
                    return (0, u.Xt)(e.shortcut, t.shortcut);
                })(),
            }),
        null != f().overrideIsUsingDefaultOverlayKeybind)
            ? f().overrideIsUsingDefaultOverlayKeybind
            : f().isUsingDefaultOverlayKeybind;
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
            (e.keybind.action === E.hCu.TOGGLE_OVERLAY_INPUT_LOCK &&
                p({ previousKeybind: (0, u.dI)(e.keybind.shortcut) }));
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
let C = new N();
