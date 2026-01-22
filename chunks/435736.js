n.d(t, {
    Ay: () => R,
    C3: () => T,
    sw: () => I,
    tM: () => S,
    wW: () => y,
    xc: () => v,
}),
    n(896048);
var r = n(353640),
    i = n(118356),
    a = n(554146),
    s = n(506774),
    o = n(97260),
    l = n(439372),
    c = n(826673),
    u = n(532624),
    d = n(350535),
    f = n(589051),
    p = n(652215);
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
function h(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
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
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let E = "overlayKeybindExperimentPreviousKeybindSettings",
    b = new i.Vy("OverlayKeybindExperimentManager"),
    y = (0, r.v)(() => s.w.get(E, {}));
function O() {
    return y.getState();
}
function A(e) {
    y.setState((t) => h({}, t, e), !0), s.w.set(E, y.getState());
}
let v = () => {
        A({ isNewOverlayUser: void 0 });
    },
    S = () => {
        A({ isUsingDefaultOverlayKeybind: void 0 });
    },
    I = (e) => {
        A({ overrideIsNewOverlayUser: e });
    };
function T(e) {
    A({ overrideIsUsingDefaultOverlayKeybind: e });
}
function C() {
    let e = u.Ay.getKeybindForAction(p.hCu.TOGGLE_OVERLAY_INPUT_LOCK, !0);
    if (null == e) return !0;
    let t = (0, u.aS)();
    return (0, d.Xt)(e.shortcut, t.shortcut);
}
class N extends l.A {
    constructor(...e) {
        super(...e),
            _(this, "_hasInitialized", !1),
            _(this, "_isProcessing", !1),
            _(this, "initializeKeybind", () => {
                if (null != O().previousKeybind) return;
                let e = u.Ay.getOverlayKeybind();
                A({ previousKeybind: (0, d.dI)(e.shortcut) });
            }),
            _(this, "dispatchSetKeybind", (e) => {
                if (null == e) return;
                let t = u.Ay.getOverlayKeybind();
                return o.A.setKeybind(g(h({}, t), { shortcut: (0, d.OH)(e) }));
            }),
            _(this, "restoreKeybind", async () => {
                let e = O().previousKeybind;
                null != e && (await this.dispatchSetKeybind(e));
            }),
            _(this, "processKeybindExperiment", async () => {
                this.initializeKeybind();
                let { keybindOverride: e } = (0, f.sq)("OverlayKeybindExperimentManager", !1),
                    t = this.isEligibleForExperiment();
                O().keybindTreatment !== e &&
                    (null == e
                        ? (await this.restoreKeybind(), A({ keybindTreatment: void 0 }))
                        : t && (await this.dispatchSetKeybind(e), A({ keybindTreatment: e })));
            }),
            _(this, "processExperiment", async () => {
                if (!__OVERLAY__ && !this._isProcessing) {
                    this._isProcessing = !0;
                    try {
                        await this.processKeybindExperiment();
                    } catch (e) {
                        b.error("Experiments processing failed", { error: e });
                    } finally {
                        this._isProcessing = !1;
                    }
                }
            }),
            _(this, "maybeInitExperiment", async () => {
                this._hasInitialized ||
                    ((this._hasInitialized = !0),
                    b.info("Experiments initializing..."),
                    await this.processExperiment(),
                    b.info("Experiments initialized"));
            }),
            _(this, "isNewOverlayUser", () =>
                (null == O().isNewOverlayUser &&
                    A({
                        isNewOverlayUser:
                            !(0, c.k8)(a.M.OVERLAY_OOP_WELCOME_SWITCH_FROM_IP_NUX) &&
                            !(0, c.k8)(a.M.OVERLAY_OOP_WELCOME_NUX),
                    }),
                null != O().overrideIsNewOverlayUser)
                    ? O().overrideIsNewOverlayUser
                    : O().isNewOverlayUser,
            ),
            _(this, "isUsingDefaultOverlayKeybind", () =>
                (null == O().isUsingDefaultOverlayKeybind && A({ isUsingDefaultOverlayKeybind: C() }),
                null != O().overrideIsUsingDefaultOverlayKeybind)
                    ? O().overrideIsUsingDefaultOverlayKeybind
                    : O().isUsingDefaultOverlayKeybind,
            ),
            _(this, "isEligibleForExperiment", () => {
                let e = this.isNewOverlayUser(),
                    t = this.isUsingDefaultOverlayKeybind();
                return e && t;
            }),
            _(this, "handlePostConnectionOpen", async () => {
                __OVERLAY__ || this._isProcessing || (await this.maybeInitExperiment());
            }),
            _(this, "handleExperimentsInit", async () => {
                __OVERLAY__ || this._isProcessing || (await this.maybeInitExperiment());
            }),
            _(this, "handleExperimentOverrideBucket", async (e) => {
                __OVERLAY__ ||
                    this._isProcessing ||
                    (b.info("Experiments processing...", { action: e }), await this.processExperiment());
            }),
            _(this, "handleKeybindSet", (e) => {
                __OVERLAY__ ||
                    this._isProcessing ||
                    (e.keybind.action === p.hCu.TOGGLE_OVERLAY_INPUT_LOCK &&
                        A({ previousKeybind: (0, d.dI)(e.keybind.shortcut) }));
            }),
            _(this, "handleOverlayReady", () => {
                __OVERLAY__ ||
                    (this.isEligibleForExperiment() &&
                        f.lR.trackExposure({ location: "OverlayKeybindExperimentManager" }));
            }),
            _(this, "actions", {
                POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
                EXPERIMENTS_FETCH_SUCCESS: this.handleExperimentsInit,
                EXPERIMENT_OVERRIDE_BUCKET: this.handleExperimentOverrideBucket,
                KEYBINDS_SET_KEYBIND: this.handleKeybindSet,
                OVERLAY_READY: this.handleOverlayReady,
            });
    }
}
let R = new N();
