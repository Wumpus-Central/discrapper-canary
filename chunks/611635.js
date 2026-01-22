n.d(t, {
    fs: () => b,
    xb: () => E,
}),
    n(65821);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(607399),
    l = n(311907),
    c = n(397927),
    u = n(964486),
    d = n(775602),
    f = n(203740),
    p = n(614738),
    _ = n(354328),
    h = n(964404),
    m = n(837921);
let g = i.createContext({
    lang: "",
    style: "",
    className: "",
    focused: !1,
});

function E() {
    let e = i.useContext(g);
    if (void 0 === e) throw Error("useRootElementContext must be used within a RootElementContextProvider");
    return e;
}

function b(e) {
    let {
            rootClassName: t,
            lang: n,
            theme: a,
            density: E,
            focused: b,
            fontScale: y,
            fontScaleClass: O,
            mouseMode: A,
            keyboardModeEnabled: v,
            saturation: S,
            desaturateUserColors: I,
            useForcedColors: T,
            systemForcedColors: C,
            useReducedMotion: N,
            alwaysShowLinkDecorations: R,
            hardwareAccelerationEnabled: w,
            highContrastMode: P,
            isPopoutWindow: D,
            children: x,
        } = e,
        L = window.CSS.supports("selector(::-webkit-scrollbar)"),
        j = (0, l.bG)([d.A], () => d.A.zoom),
        M = D ? "" : "--custom-zoom: ".concat(j, ";"),
        k = (0, _.A)("highlight_mana_buttons"),
        U = (0, _.A)("highlight_mana_components"),
        G = (0, _.A)("highlight_void_toggleables"),
        V = (0, _.A)("highlight_void_buttons"),
        F = (0, l.bG)([h.Ay], () => h.Ay.hdrDynamicRange),
        B = "font-size: "
            .concat(y, "%; --saturation-factor: ")
            .concat(S, "; dynamic-range-limit: ")
            .concat(F, "; ")
            .concat(M),
        H = s()(
            (0, f.A)(),
            (0, c.mo9)(a),
            "density-".concat(E),
            O,
            {
                "low-saturation": S <= c.yvq,
                "keyboard-mode": v,
                "decorate-links": R,
                "no-webkit-scrollbar": !L,
                "has-webkit-scrollbar": L,
                "mouse-mode": A,
                "reduce-motion": N,
                "full-motion": !N,
                "is-mobile": o.Fr,
                "app-focused": b,
                "desaturate-user-colors": I,
                "disable-forced-colors": !T && "active" === C,
                "enable-forced-colors": T,
                "visual-refresh": !0,
                "hardware-acceleration-disabled": !w,
                "visual-refresh-chat-input": !1,
                "mana-toggle-inputs": (0, p.y)("RootElementContextProvider"),
                "highlight-mana-buttons": k,
                "highlight-mana-components": U,
                "highlight-void-toggleables": G,
                "highlight-void-buttons": V,
                "high-contrast-mode": P,
            },
            t,
        ),
        Y = i.useMemo(
            () => ({
                lang: n,
                style: B,
                className: H,
                focused: b,
            }),
            [n, B, H, b],
        );
    return (
        (0, u.Ay)(() => {
            m.Ay.setTrafficLightPosition({
                x: 9,
                y: 9,
            });
        }),
        (0, r.jsx)(g.Provider, {
            value: Y,
            children: x,
        })
    );
}
