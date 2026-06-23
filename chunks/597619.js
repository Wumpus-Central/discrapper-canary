"use strict";
n.d(t, { xb: () => m, fs: () => g });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(607399),
    l = n(17928),
    u = n(112834),
    c = n(964486),
    d = n(775602),
    _ = n(723702),
    h = n(354328),
    f = n(742023),
    p = n(19575);
let E = r.createContext({ lang: "", style: "", className: "", focused: !1 });
function m() {
    let e = r.useContext(E);
    if (void 0 === e) throw Error("useRootElementContext must be used within a RootElementContextProvider");
    return e;
}
function g(e) {
    let t,
        {
            rootClassName: n,
            lang: s,
            theme: m,
            density: g,
            focused: A,
            fontScale: I,
            fontScaleClass: T,
            mouseMode: S,
            keyboardModeEnabled: y,
            saturation: C,
            desaturateUserColors: N,
            useForcedColors: v,
            systemForcedColors: R,
            useReducedMotion: O,
            alwaysShowLinkDecorations: b,
            hardwareAccelerationEnabled: D,
            highContrastMode: L,
            isPopoutWindow: w,
            children: M,
        } = e,
        P = window.CSS.supports("selector(::-webkit-scrollbar)"),
        x = (0, l.bG)([d.Ay], () => d.Ay.zoom),
        k = w ? "" : `--custom-zoom: ${x};`,
        U = (0, h.A)("highlight_mana_buttons"),
        G = (0, h.A)("highlight_mana_components"),
        F = (0, h.A)("highlight_mana_text"),
        V = (0, h.A)("highlight_void_toggleables"),
        B = (0, h.A)("highlight_void_buttons"),
        j = (0, l.bG)([f.Ay], () => f.Ay.hdrDynamicRange),
        H = `font-size: ${I}%; --saturation-factor: ${C}; dynamic-range-limit: ${j}; ${k}`,
        Y = a()(
            ((t = ""),
            (0, _.isWindows)()
                ? (t = "platform-win")
                : (0, _.isMac)()
                  ? (t = "platform-osx")
                  : (0, _.isLinux)()
                    ? (t = "platform-linux")
                    : (0, _.isWeb)() && (t = "platform-web"),
            __OVERLAY__ ? `${t} platform-overlay` : t),
            (0, u.m)(m),
            `density-${g}`,
            T,
            {
                "low-saturation": C <= 0.4,
                "keyboard-mode": y,
                "decorate-links": b,
                "no-webkit-scrollbar": !P,
                "has-webkit-scrollbar": P,
                "mouse-mode": S,
                "reduce-motion": O,
                "full-motion": !O,
                "is-mobile": o.Fr,
                "app-focused": A,
                "desaturate-user-colors": N,
                "disable-forced-colors": !v && "active" === R,
                "enable-forced-colors": v,
                "visual-refresh": !0,
                "hardware-acceleration-disabled": !D,
                "visual-refresh-chat-input": !1,
                "highlight-mana-buttons": U,
                "highlight-mana-components": G,
                "highlight-mana-text": F,
                "highlight-void-toggleables": V,
                "highlight-void-buttons": B,
                "high-contrast-mode": L,
            },
            n,
        ),
        W = r.useMemo(() => ({ lang: s, style: H, className: Y, focused: A }), [s, H, Y, A]);
    return (
        (0, c.Ay)(() => {
            p.Ay.setTrafficLightPosition({ x: 9, y: 9 });
        }),
        (0, i.jsx)(E.Provider, { value: W, children: M })
    );
}
