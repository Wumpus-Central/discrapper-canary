n.d(t, { xb: () => p, fs: () => T });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(607399),
    o = n(17928),
    d = n(112834),
    c = n(964486),
    u = n(775602),
    _ = n(657043),
    E = n(723702),
    A = n(354328),
    h = n(964404),
    f = n(19575);
let I = r.createContext({ lang: "", style: "", className: "", focused: !1 });
function p() {
    let e = r.useContext(I);
    if (void 0 === e) throw Error("useRootElementContext must be used within a RootElementContextProvider");
    return e;
}
function T(e) {
    let t,
        {
            rootClassName: a,
            lang: p,
            theme: T,
            density: m,
            focused: g,
            fontScale: S,
            fontScaleClass: N,
            mouseMode: C,
            keyboardModeEnabled: O,
            saturation: R,
            desaturateUserColors: L,
            useForcedColors: y,
            systemForcedColors: D,
            useReducedMotion: v,
            alwaysShowLinkDecorations: b,
            hardwareAccelerationEnabled: M,
            highContrastMode: P,
            isPopoutWindow: U,
            children: w,
        } = e,
        G = window.CSS.supports("selector(::-webkit-scrollbar)"),
        x = (0, o.bG)([u.Ay], () => u.Ay.zoom),
        k = U ? "" : `--custom-zoom: ${x};`,
        F = (0, A.A)("highlight_mana_buttons"),
        B = (0, A.A)("highlight_mana_components"),
        V = (0, A.A)("highlight_mana_text"),
        H = (0, A.A)("highlight_void_toggleables"),
        j = (0, A.A)("highlight_void_buttons"),
        W = (0, A.A)("highlight_mana_text_overrides");
    (r.useEffect(() => {
        if (!V) return;
        let e = () => {},
            t = !1;
        return (
            n
                .e("689064")
                .then(n.bind(n, 977691))
                .then((n) => {
                    t || (e = n.startComposedHighlight());
                }),
            () => {
                ((t = !0), e());
            }
        );
    }, [V]),
        r.useEffect(() => {
            if (!W) return;
            let e = () => {},
                t = !1;
            return (
                n
                    .e("689064")
                    .then(n.bind(n, 977691))
                    .then((n) => {
                        t || (e = n.startOverrideAudit());
                    }),
                () => {
                    ((t = !0), e());
                }
            );
        }, [W]));
    let Y = (0, o.bG)([h.Ay], () => h.Ay.hdrDynamicRange),
        K = (0, _.BX)("RootElementContextProvider"),
        $ = `font-size: ${S}%; --saturation-factor: ${R}; dynamic-range-limit: ${Y}; ${k}`,
        z = s()(
            ((t = ""),
            (0, E.isWindows)()
                ? (t = "platform-win")
                : (0, E.isMac)()
                  ? (t = "platform-osx")
                  : (0, E.isLinux)()
                    ? (t = "platform-linux")
                    : (0, E.isWeb)() && (t = "platform-web"),
            __OVERLAY__ ? `${t} platform-overlay` : t),
            (0, d.m)(T),
            `density-${m}`,
            N,
            {
                "low-saturation": R <= 0.4,
                "keyboard-mode": O,
                "decorate-links": b,
                "no-webkit-scrollbar": !G,
                "has-webkit-scrollbar": G,
                "mouse-mode": C,
                "reduce-motion": v,
                "full-motion": !v,
                "is-mobile": l.Fr,
                "app-focused": g,
                "desaturate-user-colors": L,
                "disable-forced-colors": !y && "active" === D,
                "enable-forced-colors": y,
                "visual-refresh": !0,
                "hardware-acceleration-disabled": !M,
                "visual-refresh-chat-input": !1,
                "highlight-mana-buttons": F,
                "highlight-mana-components": B,
                "highlight-mana-text": V,
                "highlight-mana-text-overrides": W,
                "highlight-void-toggleables": H,
                "highlight-void-buttons": j,
                "high-contrast-mode": P,
                "enlarge-target-size": K,
            },
            a,
        ),
        X = r.useMemo(() => ({ lang: p, style: $, className: z, focused: g }), [p, $, z, g]);
    return (
        (0, c.Ay)(() => {
            f.Ay.setTrafficLightPosition({ x: 9, y: 9 });
        }),
        (0, i.jsx)(I.Provider, { value: X, children: w })
    );
}
