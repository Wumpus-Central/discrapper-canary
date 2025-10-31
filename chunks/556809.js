n.d(t, { Z: () => x }), n(388685);
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
    E = [u.gl.OutOfProcess, u.gl.OutOfProcessLimitedInteraction];
function b() {
    for (let e of Object.values(f.default.getTrackedGames()))
        if (E.includes(e.overlayMethod) && e.state === u.mM.OVERLAY_RENDERING) return !0;
    return !1;
}
let y = null,
    O = !1,
    v = !1,
    I = {},
    T = (e, t) => {
        I[e] = t;
    },
    S = (e) => {
        delete I[e];
    },
    A = () => {
        I = {};
    },
    C = () =>
        Object.entries(I).map((e) => {
            let [t, n] = e;
            return {
                timeoutId: Number(t),
                callback: n,
            };
        }),
    N = (e) => {
        try {
            let t = a.Z.getWindow(p.$J);
            if (null == t || "function" != typeof t.requestAnimationFrame) return (y = "OverlayNotAvailable"), g(e);
            if (!v) return (y = "MainWindowFocused"), g(e);
            if (!b()) return (y = "NoOverlayRendering"), g(e);
            let n = null !== _.Z.getFocusedRunningGame(),
                r = o.Z.isFocused((0, l.ZY)(t));
            if ((o.Z.isFocused() && m.error("Main window is reported as focused when it should not be!"), n || r)) {
                y = n ? "OverlayGameFocused" : "OverlayWindowFocused";
                let r = t.requestAnimationFrame((t) => {
                    S(r), e(t);
                });
                return T(r, e), r;
            }
        } catch (e) {
            m.error("RAF redirect failed, falling back to original. Cause:", e),
                (0, c.D1)(e, f.default.getOverlayMethod((0, s.getPID)()));
        }
        return (y = "None"), g(e);
    };
function R() {
    return !o.Z.isFocused() || !o.Z.isVisible();
}
function P() {
    let e = a.Z.getWindow(p.$J),
        t = null != e && "function" == typeof e.cancelAnimationFrame;
    C().forEach((n) => {
        let { timeoutId: r, callback: i } = n;
        t && e.cancelAnimationFrame(r), g(i);
    }),
        A();
}
function w(e) {
    if (e === v) return;
    let t = !e && v;
    (v = e), t && P();
}
class D extends r.Z {
    _initialize() {
        w(R());
    }
    _terminate() {
        window.requestAnimationFrame = g;
    }
    getLastRAFCallbackReason() {
        return y;
    }
    handleUpdateOverlayMethod() {
        let { enabled: e } = (0, d.td)("OverlayWindowRAFManager");
        if (!(!e || __OVERLAY__)) {
            if (!O && !b()) {
                (window.requestAnimationFrame = g), (y = "NoOverlayRendering"), P();
                return;
            }
            m.info("Patching window RAF to use overlay window"), (window.requestAnimationFrame = N);
        }
    }
    handleWindowStateChage() {
        w(R());
    }
    handleOverlayRenderDebugMode(e) {
        let { enabled: t, mode: n } = e;
        n === u.GO.OverlayRafManagerForceEnabled &&
            ((O = t), t ? (window.requestAnimationFrame = N) : v || ((window.requestAnimationFrame = g), P()));
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
let x = new D();
