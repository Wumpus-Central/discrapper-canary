"use strict";
n.d(t, { fs: () => A, xb: () => E });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(607399),
    l = n(311907),
    u = n(397927),
    c = n(964486),
    d = n(775602),
    _ = n(203740),
    f = n(614738),
    p = n(354328),
    h = n(964404),
    m = n(837921);
let g = i.createContext({ lang: "", style: "", className: "", focused: !1 });
function E() {
    let e = i.useContext(g);
    if (void 0 === e) throw Error("useRootElementContext must be used within a RootElementContextProvider");
    return e;
}
function A(e) {
    let {
            rootClassName: t,
            lang: n,
            theme: a,
            density: E,
            focused: A,
            fontScale: I,
            fontScaleClass: T,
            mouseMode: y,
            keyboardModeEnabled: S,
            saturation: v,
            desaturateUserColors: C,
            useForcedColors: b,
            systemForcedColors: N,
            useReducedMotion: R,
            alwaysShowLinkDecorations: O,
            hardwareAccelerationEnabled: D,
            highContrastMode: L,
            isPopoutWindow: w,
            children: x,
        } = e,
        P = window.CSS.supports("selector(::-webkit-scrollbar)"),
        M = (0, l.bG)([d.A], () => d.A.zoom),
        k = w ? "" : `--custom-zoom: ${M};`,
        U = (0, p.A)("highlight_mana_buttons"),
        G = (0, p.A)("highlight_mana_components"),
        V = (0, p.A)("highlight_void_toggleables"),
        F = (0, p.A)("highlight_void_buttons"),
        B = (0, l.bG)([h.Ay], () => h.Ay.hdrDynamicRange),
        j = `font-size: ${I}%; --saturation-factor: ${v}; dynamic-range-limit: ${B}; ${k}`,
        H = s()(
            (0, _.A)(),
            (0, u.mo9)(a),
            `density-${E}`,
            T,
            {
                "low-saturation": v <= u.yvq,
                "keyboard-mode": S,
                "decorate-links": O,
                "no-webkit-scrollbar": !P,
                "has-webkit-scrollbar": P,
                "mouse-mode": y,
                "reduce-motion": R,
                "full-motion": !R,
                "is-mobile": o.Fr,
                "app-focused": A,
                "desaturate-user-colors": C,
                "disable-forced-colors": !b && "active" === N,
                "enable-forced-colors": b,
                "visual-refresh": !0,
                "hardware-acceleration-disabled": !D,
                "visual-refresh-chat-input": !1,
                "mana-toggle-inputs": (0, f.y)("RootElementContextProvider"),
                "highlight-mana-buttons": U,
                "highlight-mana-components": G,
                "highlight-void-toggleables": V,
                "highlight-void-buttons": F,
                "high-contrast-mode": L,
            },
            t,
        ),
        Y = i.useMemo(() => ({ lang: n, style: j, className: H, focused: A }), [n, j, H, A]);
    return (
        (0, c.Ay)(() => {
            m.Ay.setTrafficLightPosition({ x: 9, y: 9 });
        }),
        (0, r.jsx)(g.Provider, { value: Y, children: x })
    );
}
