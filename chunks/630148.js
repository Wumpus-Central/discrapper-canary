(n.d(t, { A: () => U }), n(321073));
var i = n(451988),
    r = n(228366),
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
var h = n(823894),
    I = n(355097);
let f = {
        gifAutoPlay: { value: !1, reasonKey: I._A.GAME_MODE },
        animateEmoji: { value: !1, reasonKey: I._A.GAME_MODE },
        animateStickers: { value: h.BJ.ANIMATE_ON_INTERACTION, reasonKey: I._A.GAME_MODE },
    },
    p = Object.keys(f),
    T = new i.Ep(),
    m = new i.Ep(),
    g = new i.Ep(),
    S = 0,
    N = !1;
function C() {
    r.h.dispatch({ type: "GAME_MODE_DISCORD_FOCUS_CHANGE", focused: _.A.isFocused() });
}
function O(e) {
    r.h.dispatch({ type: "GAME_MODE_DISCORD_HOVER_CHANGE", hovered: e });
}
function R() {
    (m.stop(), O(!0));
}
function L() {
    m.start(2e3, () => O(!1));
}
function y() {
    ((N = !1),
        m.stop(),
        document.documentElement.removeEventListener("mouseenter", R),
        document.documentElement.removeEventListener("mouseleave", L));
}
function D(e) {
    S !== e && ((S = e), l.A?.window?.setFrameRate?.(null, e));
}
function v() {
    let e;
    ((e = E.A.enabled && E.A.hasRunningGame) !== N &&
        (e
            ? ((N = !0),
              document.documentElement.addEventListener("mouseenter", R),
              document.documentElement.addEventListener("mouseleave", L),
              O(document.documentElement.matches(":hover")))
            : (y(), O(!1))),
        D((0, A.A)()));
    let t = E.A.isThrottling,
        n = {},
        i = [];
    for (let e of p) {
        let r = u.A.getOverride(e);
        t ? null == r && (n[e] = f[e]) : r?.reasonKey === I._A.GAME_MODE && i.push(e);
    }
    (Object.keys(n).length > 0 && a.Ay.applySettingsOverride(n), i.length > 0 && a.Ay.clearSettingsOverride(...i));
}
function b() {
    r.h.isDispatching() ? g.start(0, v, !1) : v();
}
function M() {
    (y(), T.stop(), g.stop(), D(0));
}
class P extends s.A {
    actions = {
        POST_CONNECTION_OPEN: () => {
            g.start(0, () => {
                (C(), v());
            });
        },
        WINDOW_FOCUS: () => {
            T.start(2e3, C);
        },
        LOGOUT: () => M(),
    };
    stores = new Map().set(E.A, b).set(o.A, b).set(d.A, b).set(c.A, b).set(u.A, b);
    _terminate() {
        M();
    }
}
let U = new P();
