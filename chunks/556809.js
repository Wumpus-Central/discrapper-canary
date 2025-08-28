n.d(t, { Z: () => w }), n(388685);
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
    E = null,
    b = !1,
    y = !1,
    O = {},
    v = (e, t) => {
        O[e] = t;
    },
    I = (e) => {
        delete O[e];
    },
    T = () => {
        O = {};
    },
    S = () =>
        Object.entries(O).map((e) => {
            let [t, n] = e;
            return {
                timeoutId: Number(t),
                callback: n,
            };
        }),
    A = (e) => {
        try {
            let t = a.Z.getWindow(p.$J);
            if (null == t || "function" != typeof t.requestAnimationFrame) return (E = "OverlayNotAvailable"), g(e);
            if (!y) return (E = "MainWindowFocused"), g(e);
            if (!f.default.isAnyOverlayRendering()) return (E = "NoOverlayRendering"), g(e);
            let n = null !== _.ZP.getFocusedRunningGame(),
                r = o.Z.isFocused((0, l.ZY)(t));
            if ((o.Z.isFocused() && m.error("Main window is reported as focused when it should not be!"), n || r)) {
                E = n ? "OverlayGameFocused" : "OverlayWindowFocused";
                let r = t.requestAnimationFrame((t) => {
                    I(r), e(t);
                });
                return v(r, e), r;
            }
        } catch (e) {
            m.error("RAF redirect failed, falling back to original", e),
                (0, c.D1)(e, _.ZP.getOverlayMethod((0, s.getPID)()));
        }
        return (E = "None"), g(e);
    };
function C() {
    return !o.Z.isFocused() || !o.Z.isVisible();
}
function N() {
    let e = a.Z.getWindow(p.$J),
        t = null != e && "function" == typeof e.cancelAnimationFrame;
    S().forEach((n) => {
        let { timeoutId: r, callback: i } = n;
        t && e.cancelAnimationFrame(r), g(i);
    }),
        T();
}
function R(e) {
    if (e === y) return;
    let t = !e && y;
    (y = e), t && N();
}
class P extends r.Z {
    _initialize() {
        R(C());
    }
    _terminate() {
        window.requestAnimationFrame = g;
    }
    getLastRAFCallbackReason() {
        return E;
    }
    handleUpdateOverlayMethod(e) {
        let { overlayMethod: t } = e,
            { enabled: n } = (0, d.td)("OverlayWindowRAFManager");
        if (!(!n || __OVERLAY__)) {
            if (!b && (t === u.gl.Disabled || t === u.gl.Hook)) {
                (window.requestAnimationFrame = g), N();
                return;
            }
            m.info("Patching window RAF to use overlay window"), (window.requestAnimationFrame = A);
        }
    }
    handleWindowStateChage() {
        R(C());
    }
    handleOverlayRenderDebugMode(e) {
        let { enabled: t, mode: n } = e;
        n === u.GO.OverlayRafManagerForceEnabled &&
            ((b = t), t ? (window.requestAnimationFrame = A) : y || ((window.requestAnimationFrame = g), N()));
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
let w = new P();
