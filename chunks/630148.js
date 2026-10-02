(n.d(t, { A: () => k }), n(321073));
var i = n(451988),
    r = n(73153),
    a = n(817281),
    s = n(439372),
    l = n(77729),
    o = n(489277),
    d = n(222506),
    c = n(567249),
    u = n(397438),
    _ = n(531685),
    E = n(188321),
    A = n(25202);
n(974477);
var h = n(392164),
    I = n(823894),
    f = n(355097);
let p = {
        gifAutoPlay: { value: !1, reasonKey: f._A.GAME_MODE },
        animateEmoji: { value: !1, reasonKey: f._A.GAME_MODE },
        animateStickers: { value: I.BJ.ANIMATE_ON_INTERACTION, reasonKey: f._A.GAME_MODE },
    },
    T = Object.keys(p),
    m = new i.Ep(),
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
function v() {
    g.start(2e3, () => y(!1));
}
function b() {
    ((R = !1),
        g.stop(),
        document.documentElement.removeEventListener("mouseenter", D),
        document.documentElement.removeEventListener("mouseleave", v));
}
function M(e) {
    N !== e && ((N = e), l.A?.window?.setFrameRate?.(null, e));
}
function P(e) {
    let t = c.A.isWindowFullyInitialized(h.f) ? (c.A.getWindow(h.f) ?? null) : null;
    (t !== O && ((O = t), (C = 0)), null != t && C !== e && ((C = e), l.A?.window?.setFrameRate?.(h.f, e)));
}
function U() {
    let e;
    ((e = E.A.enabled && E.A.hasRunningGame) !== R &&
        (e
            ? ((R = !0),
              document.documentElement.addEventListener("mouseenter", D),
              document.documentElement.addEventListener("mouseleave", v),
              y(document.documentElement.matches(":hover")))
            : (b(), y(!1))),
        M((0, A.A)()),
        P((0, A.j)()));
    let t = E.A.isThrottling,
        n = {},
        i = [];
    for (let e of T) {
        let r = u.A.getOverride(e);
        t ? null == r && (n[e] = p[e]) : r?.reasonKey === f._A.GAME_MODE && i.push(e);
    }
    (Object.keys(n).length > 0 && a.Ay.applySettingsOverride(n), i.length > 0 && a.Ay.clearSettingsOverride(...i));
}
function w() {
    r.h.isDispatching() ? S.start(0, U, !1) : U();
}
function G() {
    (b(), m.stop(), S.stop(), M(0), P(0));
}
class x extends s.A {
    actions = {
        POST_CONNECTION_OPEN: () => {
            S.start(0, () => {
                (L(), U());
            });
        },
        WINDOW_FOCUS: () => {
            m.start(2e3, L);
        },
        LOGOUT: () => G(),
    };
    stores = new Map().set(E.A, w).set(o.A, w).set(d.A, w).set(c.A, w).set(u.A, w);
    _terminate() {
        G();
    }
}
let k = new x();
