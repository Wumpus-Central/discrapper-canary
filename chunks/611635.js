"use strict";
n.d(t, { fs: () => A, xb: () => g });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(607399),
    l = n(311907),
    u = n(112834),
    d = n(964486),
    c = n(775602),
    _ = n(203740),
    f = n(614738),
    E = n(354328),
    h = n(964404),
    p = n(837921);
let m = i.createContext({ lang: "", style: "", className: "", focused: !1 });
function g() {
    let e = i.useContext(m);
    if (void 0 === e) throw Error("useRootElementContext must be used within a RootElementContextProvider");
    return e;
}
function A(e) {
    let {
            rootClassName: t,
            lang: n,
            theme: s,
            density: g,
            focused: A,
            fontScale: I,
            fontScaleClass: T,
            mouseMode: S,
            keyboardModeEnabled: y,
            saturation: N,
            desaturateUserColors: O,
            useForcedColors: R,
            systemForcedColors: v,
            useReducedMotion: C,
            alwaysShowLinkDecorations: b,
            hardwareAccelerationEnabled: D,
            highContrastMode: L,
            isPopoutWindow: w,
            children: M,
        } = e,
        P = window.CSS.supports("selector(::-webkit-scrollbar)"),
        U = (0, l.bG)([c.A], () => c.A.zoom),
        k = w ? "" : `--custom-zoom: ${U};`,
        x = (0, E.A)("highlight_mana_buttons"),
        G = (0, E.A)("highlight_mana_components"),
        V = (0, E.A)("highlight_void_toggleables"),
        F = (0, E.A)("highlight_void_buttons"),
        B = (0, l.bG)([h.Ay], () => h.Ay.hdrDynamicRange),
        H = `font-size: ${I}%; --saturation-factor: ${N}; dynamic-range-limit: ${B}; ${k}`,
        Y = a()(
            (0, _.A)(),
            (0, u.m)(s),
            `density-${g}`,
            T,
            {
                "low-saturation": N <= 0.4,
                "keyboard-mode": y,
                "decorate-links": b,
                "no-webkit-scrollbar": !P,
                "has-webkit-scrollbar": P,
                "mouse-mode": S,
                "reduce-motion": C,
                "full-motion": !C,
                "is-mobile": o.Fr,
                "app-focused": A,
                "desaturate-user-colors": O,
                "disable-forced-colors": !R && "active" === v,
                "enable-forced-colors": R,
                "visual-refresh": !0,
                "hardware-acceleration-disabled": !D,
                "visual-refresh-chat-input": !1,
                "mana-toggle-inputs": (0, f.y)("RootElementContextProvider"),
                "highlight-mana-buttons": x,
                "highlight-mana-components": G,
                "highlight-void-toggleables": V,
                "highlight-void-buttons": F,
                "high-contrast-mode": L,
            },
            t,
        ),
        W = i.useMemo(() => ({ lang: n, style: H, className: Y, focused: A }), [n, H, Y, A]);
    return (
        (0, d.Ay)(() => {
            p.Ay.setTrafficLightPosition({ x: 9, y: 9 });
        }),
        (0, r.jsx)(m.Provider, { value: W, children: M })
    );
}
