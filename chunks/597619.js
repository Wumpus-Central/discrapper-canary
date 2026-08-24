"use strict";
n.d(t, { xb: () => f, fs: () => p });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(607399),
    o = n(17928),
    d = n(112834),
    c = n(964486),
    u = n(775602),
    _ = n(723702),
    E = n(354328),
    A = n(742023),
    h = n(19575);
let I = r.createContext({ lang: "", style: "", className: "", focused: !1 });
function f() {
    let e = r.useContext(I);
    if (void 0 === e) throw Error("useRootElementContext must be used within a RootElementContextProvider");
    return e;
}
function p(e) {
    let t,
        {
            rootClassName: a,
            lang: f,
            theme: p,
            density: T,
            focused: m,
            fontScale: g,
            fontScaleClass: S,
            mouseMode: N,
            keyboardModeEnabled: C,
            saturation: O,
            desaturateUserColors: R,
            useForcedColors: L,
            systemForcedColors: y,
            useReducedMotion: D,
            alwaysShowLinkDecorations: v,
            hardwareAccelerationEnabled: b,
            highContrastMode: M,
            isPopoutWindow: P,
            children: U,
        } = e,
        w = window.CSS.supports("selector(::-webkit-scrollbar)"),
        G = (0, o.bG)([u.Ay], () => u.Ay.zoom),
        x = P ? "" : `--custom-zoom: ${G};`,
        k = (0, E.A)("highlight_mana_buttons"),
        F = (0, E.A)("highlight_mana_components"),
        V = (0, E.A)("highlight_mana_text"),
        B = (0, E.A)("highlight_void_toggleables"),
        H = (0, E.A)("highlight_void_buttons"),
        j = (0, E.A)("highlight_mana_text_overrides");
    r.useEffect(() => {
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
                (t = !0), e();
            }
        );
    }, [V]),
        r.useEffect(() => {
            if (!j) return;
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
                    (t = !0), e();
                }
            );
        }, [j]);
    let W = (0, o.bG)([A.Ay], () => A.Ay.hdrDynamicRange),
        Y = `font-size: ${g}%; --saturation-factor: ${O}; dynamic-range-limit: ${W}; ${x}`,
        K = s()(
            ((t = ""),
            (0, _.isWindows)()
                ? (t = "platform-win")
                : (0, _.isMac)()
                  ? (t = "platform-osx")
                  : (0, _.isLinux)()
                    ? (t = "platform-linux")
                    : (0, _.isWeb)() && (t = "platform-web"),
            __OVERLAY__ ? `${t} platform-overlay` : t),
            (0, d.m)(p),
            `density-${T}`,
            S,
            {
                "low-saturation": O <= 0.4,
                "keyboard-mode": C,
                "decorate-links": v,
                "no-webkit-scrollbar": !w,
                "has-webkit-scrollbar": w,
                "mouse-mode": N,
                "reduce-motion": D,
                "full-motion": !D,
                "is-mobile": l.Fr,
                "app-focused": m,
                "desaturate-user-colors": R,
                "disable-forced-colors": !L && "active" === y,
                "enable-forced-colors": L,
                "visual-refresh": !0,
                "hardware-acceleration-disabled": !b,
                "visual-refresh-chat-input": !1,
                "highlight-mana-buttons": k,
                "highlight-mana-components": F,
                "highlight-mana-text": V,
                "highlight-mana-text-overrides": j,
                "highlight-void-toggleables": B,
                "highlight-void-buttons": H,
                "high-contrast-mode": M,
            },
            a,
        ),
        $ = r.useMemo(() => ({ lang: f, style: Y, className: K, focused: m }), [f, Y, K, m]);
    return (
        (0, c.Ay)(() => {
            h.Ay.setTrafficLightPosition({ x: 9, y: 9 });
        }),
        (0, i.jsx)(I.Provider, { value: $, children: U })
    );
}
