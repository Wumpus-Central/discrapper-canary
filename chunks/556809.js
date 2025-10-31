n.d(t, { Z: () => L }), n(388685);
var r = n(147913),
    i = n(710845),
    a = n(522474),
    o = n(451478),
    s = n(145597),
    l = n(830917),
    c = n(41534),
    u = n(837268),
    d = n(32300),
    f = n(371651),
    _ = n(610394),
    p = n(501787);
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
let m = new i.Z("OverlayWindowRAFManager"),
    g = window.requestAnimationFrame.bind(window),
    E = new Set([u.gl.OutOfProcess, u.gl.OutOfProcessLimitedInteraction]),
    b = new Set([u.mM.OVERLAY_CRASHED, u.mM.OVERLAY_CRASHED_DISABLED]);
function y(e) {
    for (let t of Object.values(f.default.getTrackedGames()))
        if (!(!E.has(t.overlayMethod) || b.has(t.state)) && (!e || t.state === u.mM.OVERLAY_RENDERING)) return !0;
    return !1;
}
let O = null,
    v = !1,
    I = !1,
    T = {},
    S = (e, t) => {
        T[e] = t;
    },
    A = (e) => {
        delete T[e];
    },
    C = () => {
        T = {};
    },
    N = () =>
        Object.entries(T).map((e) => {
            let [t, n] = e;
            return {
                timeoutId: Number(t),
                callback: n,
            };
        }),
    R = (e) => {
        try {
            let t = a.Z.getWindow(p.$J);
            if (null == t || "function" != typeof t.requestAnimationFrame) return (O = "OverlayNotAvailable"), g(e);
            if (!I) return (O = "MainWindowFocused"), g(e);
            if (!y(!0)) return (O = "NoOverlayRendering"), g(e);
            let n = null !== _.Z.getFocusedRunningGame(),
                r = o.Z.isFocused((0, l.ZY)(t));
            if ((o.Z.isFocused() && m.error("Main window is reported as focused when it should not be!"), n || r)) {
                O = n ? "OverlayGameFocused" : "OverlayWindowFocused";
                let r = t.requestAnimationFrame((t) => {
                    A(r), e(t);
                });
                return S(r, e), r;
            }
        } catch (e) {
            m.error("RAF redirect failed, falling back to original. Cause:", e),
                (0, c.D1)(e, f.default.getOverlayMethod((0, s.getPID)()));
        }
        return (O = "None"), g(e);
    };
function P() {
    return !o.Z.isFocused() || !o.Z.isVisible();
}
function w() {
    let e = a.Z.getWindow(p.$J),
        t = null != e && "function" == typeof e.cancelAnimationFrame;
    N().forEach((n) => {
        let { timeoutId: r, callback: i } = n;
        t && e.cancelAnimationFrame(r), g(i);
    }),
        C();
}
function D(e) {
    if (e === I) return;
    let t = !e && I;
    (I = e), t && w();
}
class x extends r.Z {
    _initialize() {
        D(P());
    }
    _terminate() {
        window.requestAnimationFrame = g;
    }
    getLastRAFCallbackReason() {
        return O;
    }
    handleUpdateOverlayMethod() {
        let { enabled: e } = (0, d.td)("OverlayWindowRAFManager");
        if (!(!e || __OVERLAY__)) {
            if (!v && !y(!1)) {
                (window.requestAnimationFrame = g), (O = "NoOverlayRendering"), w();
                return;
            }
            m.info("Patching window RAF to use overlay window"), (window.requestAnimationFrame = R);
        }
    }
    handleWindowStateChage() {
        D(P());
    }
    handleOverlayRenderDebugMode(e) {
        let { enabled: t, mode: n } = e;
        n === u.GO.OverlayRafManagerForceEnabled &&
            ((v = t), t ? (window.requestAnimationFrame = R) : I || ((window.requestAnimationFrame = g), w()));
    }
    constructor(...e) {
        super(...e),
            h(this, "actions", {
                OVERLAY_UPDATE_OVERLAY_METHOD: this.handleUpdateOverlayMethod,
                WINDOW_VISIBILITY_CHANGE: this.handleWindowStateChage,
                WINDOW_FOCUS: this.handleWindowStateChage,
                OVERLAY_RENDER_DEBUG_MODE: this.handleOverlayRenderDebugMode,
            });
    }
}
let L = new x();
