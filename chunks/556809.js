n.d(t, { Z: () => x }), n(388685);
var r = n(147913),
    i = n(710845),
    a = n(522474),
    o = n(451478),
    s = n(830917),
    l = n(338388),
    c = n(837268),
    u = n(32300),
    d = n(371651),
    f = n(610394),
    p = n(501787);
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
let m = new i.Z("OverlayWindowRAFManager"),
    h = window.requestAnimationFrame.bind(window),
    g = new Set([c.gl.OutOfProcess, c.gl.OutOfProcessLimitedInteraction]),
    E = new Set([c.mM.OVERLAY_CRASHED, c.mM.OVERLAY_CRASHED_DISABLED]);
function b(e) {
    for (let t of Object.values(d.default.getTrackedGames()))
        if (!(!g.has(t.overlayMethod) || E.has(t.state)) && (!e || t.state === c.mM.OVERLAY_RENDERING)) return !0;
    return !1;
}
let y = null,
    O = !1,
    v = !1,
    S = {},
    I = (e, t) => {
        S[e] = t;
    },
    T = (e) => {
        delete S[e];
    },
    A = () => {
        S = {};
    },
    C = () =>
        Object.entries(S).map((e) => {
            let [t, n] = e;
            return {
                timeoutId: Number(t),
                callback: n,
            };
        }),
    N = (e) => {
        try {
            let t = a.Z.getWindow(p.$J);
            if (null == t || "function" != typeof t.requestAnimationFrame) return (y = "OverlayNotAvailable"), h(e);
            if (!v) return (y = "MainWindowFocused"), h(e);
            if (!b(!0)) return (y = "NoOverlayRendering"), h(e);
            let n = null !== f.Z.getFocusedRunningGame(),
                r = o.Z.isFocused((0, s.ZY)(t));
            if ((o.Z.isFocused() && m.error("Main window is reported as focused when it should not be!"), n || r)) {
                y = n ? "OverlayGameFocused" : "OverlayWindowFocused";
                let r = t.requestAnimationFrame((t) => {
                    T(r), e(t);
                });
                return I(r, e), r;
            }
        } catch (e) {
            m.error("RAF redirect failed, falling back to original. Cause:", e),
                (0, l.D1)(e, d.default.getOverlayMethod(f.Z.getTargetPID()));
        }
        return (y = "None"), h(e);
    };
function P() {
    return !o.Z.isFocused() || !o.Z.isVisible();
}
function R() {
    let e = a.Z.getWindow(p.$J),
        t = null != e && "function" == typeof e.cancelAnimationFrame;
    C().forEach((n) => {
        let { timeoutId: r, callback: i } = n;
        t && e.cancelAnimationFrame(r), h(i);
    }),
        A();
}
function w(e) {
    if (e === v) return;
    let t = !e && v;
    (v = e), t && R();
}
class D extends r.Z {
    _initialize() {
        w(P());
    }
    _terminate() {
        window.requestAnimationFrame = h;
    }
    getLastRAFCallbackReason() {
        return y;
    }
    handleUpdateOverlayMethod() {
        let { enabled: e } = (0, u.td)("OverlayWindowRAFManager");
        if (!(!e || __OVERLAY__)) {
            if (!O && !b(!1)) {
                (window.requestAnimationFrame = h), (y = "NoOverlayRendering"), R();
                return;
            }
            m.info("Patching window RAF to use overlay window"), (window.requestAnimationFrame = N);
        }
    }
    handleWindowStateChage() {
        w(P());
    }
    handleOverlayRenderDebugMode(e) {
        let { enabled: t, mode: n } = e;
        n === c.GO.OverlayRafManagerForceEnabled &&
            ((O = t), t ? (window.requestAnimationFrame = N) : v || ((window.requestAnimationFrame = h), R()));
    }
    constructor(...e) {
        super(...e),
            _(this, "actions", {
                OVERLAY_UPDATE_OVERLAY_METHOD: this.handleUpdateOverlayMethod,
                WINDOW_VISIBILITY_CHANGE: this.handleWindowStateChage,
                WINDOW_FOCUS: this.handleWindowStateChage,
                OVERLAY_RENDER_DEBUG_MODE: this.handleOverlayRenderDebugMode,
            });
    }
}
let x = new D();
