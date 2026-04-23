"use strict";
n.d(t, { fs: () => A, xb: () => g });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(607399),
    l = n(311907),
    u = n(112834),
    c = n(964486),
    d = n(775602),
    _ = n(203740),
    f = n(614738),
    p = n(354328),
    h = n(964404),
    E = n(837921);
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
            desaturateUserColors: v,
            useForcedColors: C,
            systemForcedColors: O,
            useReducedMotion: R,
            alwaysShowLinkDecorations: b,
            hardwareAccelerationEnabled: D,
            highContrastMode: L,
            isPopoutWindow: w,
            children: M,
        } = e,
        P = window.CSS.supports("selector(::-webkit-scrollbar)"),
        x = (0, l.bG)([d.A], () => d.A.zoom),
        k = w ? "" : `--custom-zoom: ${x};`,
        U = (0, p.A)("highlight_mana_buttons"),
        G = (0, p.A)("highlight_mana_components"),
        F = (0, p.A)("highlight_void_toggleables"),
        V = (0, p.A)("highlight_void_buttons"),
        B = (0, l.bG)([h.Ay], () => h.Ay.hdrDynamicRange),
        H = `font-size: ${I}%; --saturation-factor: ${N}; dynamic-range-limit: ${B}; ${k}`,
        j = a()(
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
                "reduce-motion": R,
                "full-motion": !R,
                "is-mobile": o.Fr,
                "app-focused": A,
                "desaturate-user-colors": v,
                "disable-forced-colors": !C && "active" === O,
                "enable-forced-colors": C,
                "visual-refresh": !0,
                "hardware-acceleration-disabled": !D,
                "visual-refresh-chat-input": !1,
                "mana-toggle-inputs": (0, f.y)("RootElementContextProvider"),
                "highlight-mana-buttons": U,
                "highlight-mana-components": G,
                "highlight-void-toggleables": F,
                "highlight-void-buttons": V,
                "high-contrast-mode": L,
            },
            t,
        ),
        Y = i.useMemo(() => ({ lang: n, style: H, className: j, focused: A }), [n, H, j, A]);
    return (
        (0, c.Ay)(() => {
            E.Ay.setTrafficLightPosition({ x: 9, y: 9 });
        }),
        (0, r.jsx)(m.Provider, { value: Y, children: M })
    );
}
