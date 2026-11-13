n(321073);
var i = n(451988),
    r = n(73153),
    a = n(817281),
    s = n(439372),
    l = n(77729),
    o = n(887287),
    d = n(222506),
    c = n(293432),
    u = n(397438),
    _ = n(531685),
    E = n(188321),
    A = n(25202);
n(974477);
var f = n(392164),
    h = n(823894),
    I = n(355097);
let p = {
        gifAutoPlay: { value: !1, reasonKey: I._A.GAME_MODE },
        animateEmoji: { value: !1, reasonKey: I._A.GAME_MODE },
        animateStickers: { value: h.BJ.ANIMATE_ON_INTERACTION, reasonKey: I._A.GAME_MODE },
    },
    m = Object.keys(p),
    T = new i.Ep(),
    g = new i.Ep(),
    S = new i.Ep(),
    N = 0,
    C = 0,
    O = null,
    R = !1;
function L() {
    r.h.dispatch({ type: "GAME_MODE_DISCORD_FOCUS_CHANGE", focused: _.A.isFocused() });
}
function y(e) {
    r.h.dispatch({ type: "GAME_MODE_DISCORD_HOVER_CHANGE", hovered: e });
}
function D() {
    (g.stop(), y(!0));
}
function b() {
    g.start(2e3, () => y(!1));
}
function v() {
    ((R = !1),
        g.stop(),
        document.documentElement.removeEventListener("mouseenter", D),
        document.documentElement.removeEventListener("mouseleave", b));
}
function P(e) {
    N !== e && ((N = e), l.A?.window?.setFrameRate?.(null, e));
}
function M(e) {
    let t = c.A.isWindowFullyInitialized(f.f) ? (c.A.getWindow(f.f) ?? null) : null;
    (t !== O && ((O = t), (C = 0)), null != t && C !== e && ((C = e), l.A?.window?.setFrameRate?.(f.f, e)));
}
function U() {
    let e;
    ((e = E.A.enabled && E.A.hasRunningGame) !== R &&
        (e
            ? ((R = !0),
              document.documentElement.addEventListener("mouseenter", D),
              document.documentElement.addEventListener("mouseleave", b),
              y(document.documentElement.matches(":hover")))
            : (v(), y(!1))),
        P((0, A.A)()),
        M((0, A.j)()));
    let t = E.A.isThrottling,
        n = {},
        i = [];
    for (let e of m) {
        let r = u.A.getOverride(e);
        t ? null == r && (n[e] = p[e]) : r?.reasonKey === I._A.GAME_MODE && i.push(e);
    }
    (Object.keys(n).length > 0 && a.Ay.applySettingsOverride(n), i.length > 0 && a.Ay.clearSettingsOverride(...i));
}
function w() {
    r.h.isDispatching() ? S.start(0, U, !1) : U();
}
function G() {
    (v(), T.stop(), S.stop(), P(0), M(0));
}
class x extends s.A {
    actions = {
        POST_CONNECTION_OPEN: () => {
            S.start(0, () => {
                (L(), U());
            });
        },
        WINDOW_FOCUS: () => {
            T.start(2e3, L);
        },
        LOGOUT: () => G(),
    };
    stores = new Map().set(E.A, w).set(o.A, w).set(d.A, w).set(c.A, w).set(u.A, w);
    _terminate() {
        G();
    }
}
let k = new x();
n.d(t, {}, { A: k });
