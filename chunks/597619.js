"use strict";
n.d(t, { xb: () => p, fs: () => A });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(607399),
    l = n(17928),
    d = n(112834),
    _ = n(964486),
    u = n(775602),
    c = n(723702),
    E = n(614738),
    h = n(354328),
    m = n(964404),
    f = n(19575);
let g = r.createContext({ lang: "", style: "", className: "", focused: !1 });
function p() {
    let e = r.useContext(g);
    if (void 0 === e) throw Error("useRootElementContext must be used within a RootElementContextProvider");
    return e;
}
function A(e) {
    let t,
        {
            rootClassName: n,
            lang: s,
            theme: p,
            density: A,
            focused: I,
            fontScale: T,
            fontScaleClass: S,
            mouseMode: N,
            keyboardModeEnabled: C,
            saturation: R,
            desaturateUserColors: O,
            useForcedColors: y,
            systemForcedColors: v,
            useReducedMotion: D,
            alwaysShowLinkDecorations: L,
            hardwareAccelerationEnabled: b,
            highContrastMode: w,
            isPopoutWindow: P,
            children: k,
        } = e,
        M = window.CSS.supports("selector(::-webkit-scrollbar)"),
        U = (0, l.bG)([u.A], () => u.A.zoom),
        x = P ? "" : `--custom-zoom: ${U};`,
        G = (0, h.A)("highlight_mana_buttons"),
        V = (0, h.A)("highlight_mana_components"),
        F = (0, h.A)("highlight_void_toggleables"),
        B = (0, h.A)("highlight_void_buttons"),
        H = (0, l.bG)([m.Ay], () => m.Ay.hdrDynamicRange),
        j = `font-size: ${T}%; --saturation-factor: ${R}; dynamic-range-limit: ${H}; ${x}`,
        W = a()(
            ((t = ""),
            (0, c.isWindows)()
                ? (t = "platform-win")
                : (0, c.isMac)()
                  ? (t = "platform-osx")
                  : (0, c.isLinux)()
                    ? (t = "platform-linux")
                    : (0, c.isWeb)() && (t = "platform-web"),
            __OVERLAY__ ? `${t} platform-overlay` : t),
            (0, d.m)(p),
            `density-${A}`,
            S,
            {
                "low-saturation": R <= 0.4,
                "keyboard-mode": C,
                "decorate-links": L,
                "no-webkit-scrollbar": !M,
                "has-webkit-scrollbar": M,
                "mouse-mode": N,
                "reduce-motion": D,
                "full-motion": !D,
                "is-mobile": o.Fr,
                "app-focused": I,
                "desaturate-user-colors": O,
                "disable-forced-colors": !y && "active" === v,
                "enable-forced-colors": y,
                "visual-refresh": !0,
                "hardware-acceleration-disabled": !b,
                "visual-refresh-chat-input": !1,
                "mana-toggle-inputs": (0, E.y)("RootElementContextProvider"),
                "highlight-mana-buttons": G,
                "highlight-mana-components": V,
                "highlight-void-toggleables": F,
                "highlight-void-buttons": B,
                "high-contrast-mode": w,
            },
            n,
        ),
        Y = r.useMemo(() => ({ lang: s, style: j, className: W, focused: I }), [s, j, W, I]);
    return (
        (0, _.Ay)(() => {
            f.Ay.setTrafficLightPosition({ x: 9, y: 9 });
        }),
        (0, i.jsx)(g.Provider, { value: Y, children: k })
    );
}
