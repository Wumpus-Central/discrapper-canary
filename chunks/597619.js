"use strict";
n.d(t, { xb: () => g, fs: () => A });
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
    h = n(614738),
    f = n(354328),
    p = n(742023),
    E = n(19575);
let m = r.createContext({ lang: "", style: "", className: "", focused: !1 });
function g() {
    let e = r.useContext(m);
    if (void 0 === e) throw Error("useRootElementContext must be used within a RootElementContextProvider");
    return e;
}
function A(e) {
    let t,
        {
            rootClassName: n,
            lang: s,
            theme: g,
            density: A,
            focused: I,
            fontScale: T,
            fontScaleClass: S,
            mouseMode: y,
            keyboardModeEnabled: C,
            saturation: N,
            desaturateUserColors: v,
            useForcedColors: R,
            systemForcedColors: O,
            useReducedMotion: b,
            alwaysShowLinkDecorations: D,
            hardwareAccelerationEnabled: L,
            highContrastMode: w,
            isPopoutWindow: M,
            children: P,
        } = e,
        x = window.CSS.supports("selector(::-webkit-scrollbar)"),
        k = (0, l.bG)([d.Ay], () => d.Ay.zoom),
        U = M ? "" : `--custom-zoom: ${k};`,
        G = (0, f.A)("highlight_mana_buttons"),
        F = (0, f.A)("highlight_mana_components"),
        V = (0, f.A)("highlight_mana_text"),
        B = (0, f.A)("highlight_void_toggleables"),
        j = (0, f.A)("highlight_void_buttons"),
        H = (0, l.bG)([p.Ay], () => p.Ay.hdrDynamicRange),
        Y = `font-size: ${T}%; --saturation-factor: ${N}; dynamic-range-limit: ${H}; ${U}`,
        W = a()(
            ((t = ""),
            (0, _.isWindows)()
                ? (t = "platform-win")
                : (0, _.isMac)()
                  ? (t = "platform-osx")
                  : (0, _.isLinux)()
                    ? (t = "platform-linux")
                    : (0, _.isWeb)() && (t = "platform-web"),
            __OVERLAY__ ? `${t} platform-overlay` : t),
            (0, u.m)(g),
            `density-${A}`,
            S,
            {
                "low-saturation": N <= 0.4,
                "keyboard-mode": C,
                "decorate-links": D,
                "no-webkit-scrollbar": !x,
                "has-webkit-scrollbar": x,
                "mouse-mode": y,
                "reduce-motion": b,
                "full-motion": !b,
                "is-mobile": o.Fr,
                "app-focused": I,
                "desaturate-user-colors": v,
                "disable-forced-colors": !R && "active" === O,
                "enable-forced-colors": R,
                "visual-refresh": !0,
                "hardware-acceleration-disabled": !L,
                "visual-refresh-chat-input": !1,
                "mana-toggle-inputs": (0, h.y)("RootElementContextProvider"),
                "highlight-mana-buttons": G,
                "highlight-mana-components": F,
                "highlight-mana-text": V,
                "highlight-void-toggleables": B,
                "highlight-void-buttons": j,
                "high-contrast-mode": w,
            },
            n,
        ),
        K = r.useMemo(() => ({ lang: s, style: Y, className: W, focused: I }), [s, Y, W, I]);
    return (
        (0, c.Ay)(() => {
            E.Ay.setTrafficLightPosition({ x: 9, y: 9 });
        }),
        (0, i.jsx)(m.Provider, { value: K, children: P })
    );
}
