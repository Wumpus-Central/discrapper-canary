n.d(t, { Z: () => x }), n(388685);
var r = n(147913),
    i = n(710845),
    a = n(522474),
    o = n(451478),
    s = n(830917),
    l = n(41534),
    c = n(837268),
    u = n(32300),
    d = n(371651),
    f = n(610394),
    _ = n(501787);
function p(e, t, n) {
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
let h = new i.Z("OverlayWindowRAFManager"),
    m = window.requestAnimationFrame.bind(window),
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
            let t = a.Z.getWindow(_.$J);
            if (null == t || "function" != typeof t.requestAnimationFrame) return (y = "OverlayNotAvailable"), m(e);
            if (!v) return (y = "MainWindowFocused"), m(e);
            if (!b(!0)) return (y = "NoOverlayRendering"), m(e);
            let n = null !== f.Z.getFocusedRunningGame(),
                r = o.Z.isFocused((0, s.ZY)(t));
            if ((o.Z.isFocused() && h.error("Main window is reported as focused when it should not be!"), n || r)) {
                y = n ? "OverlayGameFocused" : "OverlayWindowFocused";
                let r = t.requestAnimationFrame((t) => {
                    S(r), e(t);
                });
                return T(r, e), r;
            }
        } catch (e) {
            h.error("RAF redirect failed, falling back to original. Cause:", e),
                (0, l.D1)(e, d.default.getOverlayMethod(f.Z.getTargetPID()));
        }
        return (y = "None"), m(e);
    };
function R() {
    return !o.Z.isFocused() || !o.Z.isVisible();
}
function P() {
    let e = a.Z.getWindow(_.$J),
        t = null != e && "function" == typeof e.cancelAnimationFrame;
    C().forEach((n) => {
        let { timeoutId: r, callback: i } = n;
        t && e.cancelAnimationFrame(r), m(i);
    }),
        A();
}
function D(e) {
    if (e === v) return;
    let t = !e && v;
    (v = e), t && P();
}
class w extends r.Z {
    _initialize() {
        D(R());
    }
    _terminate() {
        window.requestAnimationFrame = m;
    }
    getLastRAFCallbackReason() {
        return y;
    }
    handleUpdateOverlayMethod() {
        let { enabled: e } = (0, u.td)("OverlayWindowRAFManager");
        if (!(!e || __OVERLAY__)) {
            if (!O && !b(!1)) {
                (window.requestAnimationFrame = m), (y = "NoOverlayRendering"), P();
                return;
            }
            h.info("Patching window RAF to use overlay window"), (window.requestAnimationFrame = N);
        }
    }
    handleWindowStateChage() {
        D(R());
    }
    handleOverlayRenderDebugMode(e) {
        let { enabled: t, mode: n } = e;
        n === c.GO.OverlayRafManagerForceEnabled &&
            ((O = t), t ? (window.requestAnimationFrame = N) : v || ((window.requestAnimationFrame = m), P()));
    }
    constructor(...e) {
        super(...e),
            p(this, "actions", {
                OVERLAY_UPDATE_OVERLAY_METHOD: this.handleUpdateOverlayMethod,
                WINDOW_VISIBILITY_CHANGE: this.handleWindowStateChage,
                WINDOW_FOCUS: this.handleWindowStateChage,
                OVERLAY_RENDER_DEBUG_MODE: this.handleOverlayRenderDebugMode,
            });
    }
}
let x = new w();
