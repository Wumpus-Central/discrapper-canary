(n.d(t, { e: () => K }), n(321073));
var i,
    r = n(477900),
    a = n(582128),
    s = n(632296),
    l = n(503698),
    o = n.n(l),
    d = n(131937),
    c = n(17928),
    u = n(116833);
n(938796);
var _ =
        (((i = {})[(i.MOBILE_DARK_GRADIENT_THEME_ENABLED = 4)] = "MOBILE_DARK_GRADIENT_THEME_ENABLED"),
        (i[(i.MOBILE_LIGHT_GRADIENT_THEME_ENABLED = 8)] = "MOBILE_LIGHT_GRADIENT_THEME_ENABLED"),
        (i[(i.REDUCED_CONTRAST_ENABLED = 16)] = "REDUCED_CONTRAST_ENABLED"),
        (i[(i.INCREASED_CONTRAST_ENABLED = 32)] = "INCREASED_CONTRAST_ENABLED"),
        (i[(i.REDUCE_SATURATION_ENABLED = 64)] = "REDUCE_SATURATION_ENABLED"),
        i),
    E = n(432816),
    A = n(812743),
    h = n(38021);
function f(e) {
    let {
            children: t,
            theme: n = A.NJ.DARK,
            primaryColor: i = null,
            secondaryColor: s = null,
            gradient: l = null,
            flags: o = 0,
            contrast: d = 1,
            saturation: c = 1,
            density: u = "compact",
            disableAdaptiveTheme: _ = !1,
            reduceAdaptiveTheme: E = !1,
        } = e,
        f = a.useMemo(
            () =>
                (0, h.dI)({
                    theme: n,
                    primaryColor: i,
                    secondaryColor: s,
                    gradient: l,
                    flags: o,
                    contrast: d,
                    saturation: c,
                    density: u,
                    disableAdaptiveTheme: _,
                    reduceAdaptiveTheme: E,
                }),
            [n, i, s, l, o, d, c, u, _, E],
        );
    return (0, r.jsx)(h.Dx.Provider, { value: f, children: t });
}
var I = n(775602),
    p = n(989395),
    m = n(71855),
    T = n(267102),
    g = n(652215);
let S = ["Shift", "Alt", "Meta", "Control"];
var N = n(534409),
    C = n(945810);
let O = (0, C.mj)({
    name: "2026-08-rive-web-perf",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var R = n(750506),
    L = n(869146),
    y = n(773669),
    D = n(363195),
    b = n(531685),
    v = n(19575),
    P = n(418842),
    M = n(607399),
    U = n(112834),
    w = n(964486),
    G = n(657043),
    x = n(723702);
let k = (0, C.mj)({
    kind: "user",
    name: "2026-10-mana-badge-refresh",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var F = n(354328),
    B = n(964404),
    V = n(611635);
function H(e) {
    let t,
        {
            rootClassName: i,
            lang: s,
            theme: l,
            density: d,
            focused: u,
            fontScale: _,
            fontScaleClass: E,
            mouseMode: A,
            keyboardModeEnabled: h,
            saturation: f,
            desaturateUserColors: p,
            useForcedColors: m,
            systemForcedColors: T,
            useReducedMotion: g,
            alwaysShowLinkDecorations: S,
            hardwareAccelerationEnabled: N,
            highContrastMode: C,
            isPopoutWindow: O,
            children: R,
        } = e,
        L = window.CSS.supports("selector(::-webkit-scrollbar)"),
        y = (0, c.bG)([I.Ay], () => I.Ay.zoom),
        D = O ? "" : `--custom-zoom: ${y};`,
        b = (0, F.A)("highlight_mana_buttons"),
        P = (0, F.A)("highlight_mana_components"),
        H = (0, F.A)("highlight_mana_text"),
        j = (0, F.A)("highlight_void_toggleables"),
        W = (0, F.A)("highlight_void_buttons"),
        Y = (0, F.A)("highlight_mana_text_overrides");
    (a.useEffect(() => {
        if (!H) return;
        let e = () => {},
            t = !1;
        return (
            Promise.all([n.e("887884"), n.e("689064")])
                .then(n.bind(n, 977691))
                .then((n) => {
                    t || (e = n.startComposedHighlight());
                }),
            () => {
                ((t = !0), e());
            }
        );
    }, [H]),
        a.useEffect(() => {
            if (!Y) return;
            let e = () => {},
                t = !1;
            return (
                Promise.all([n.e("887884"), n.e("689064")])
                    .then(n.bind(n, 977691))
                    .then((n) => {
                        t || (e = n.startOverrideAudit());
                    }),
                () => {
                    ((t = !0), e());
                }
            );
        }, [Y]));
    let K = (0, c.bG)([B.Ay], () => B.Ay.hdrDynamicRange),
        $ = (0, G.BX)("RootElementContextProvider"),
        z = k.useConfig({ location: "RootElementContextProvider" }).enabled,
        X = `font-size: ${_}%; --saturation-factor: ${f}; dynamic-range-limit: ${K}; ${D}`,
        q = o()(
            ((t = ""),
            (0, x.isWindows)()
                ? (t = "platform-win")
                : (0, x.isMac)()
                  ? (t = "platform-osx")
                  : (0, x.isLinux)()
                    ? (t = "platform-linux")
                    : (0, x.isWeb)() && (t = "platform-web"),
            __OVERLAY__ ? `${t} platform-overlay` : t),
            (0, U.m)(l),
            `density-${d}`,
            E,
            {
                "low-saturation": f <= 0.4,
                "keyboard-mode": h,
                "decorate-links": S,
                "no-webkit-scrollbar": !L,
                "has-webkit-scrollbar": L,
                "mouse-mode": A,
                "reduce-motion": g,
                "full-motion": !g,
                "is-mobile": M.Fr,
                "app-focused": u,
                "desaturate-user-colors": p,
                "disable-forced-colors": !m && "active" === T,
                "enable-forced-colors": m,
                "visual-refresh": !0,
                "hardware-acceleration-disabled": !N,
                "visual-refresh-chat-input": !1,
                "highlight-mana-buttons": b,
                "highlight-mana-components": P,
                "highlight-mana-text": H,
                "highlight-mana-text-overrides": Y,
                "highlight-void-toggleables": j,
                "highlight-void-buttons": W,
                "high-contrast-mode": C,
                "enlarge-target-size": $,
                "mana-badge-refresh": z,
            },
            i,
        ),
        Z = a.useMemo(() => ({ lang: s, style: X, className: q, focused: u }), [s, X, q, u]);
    return (
        (0, w.Ay)(() => {
            v.Ay.setTrafficLightPosition({ x: 9, y: 9 });
        }),
        (0, r.jsx)(V.q.Provider, { value: Z, children: R })
    );
}
var j = n(369782),
    W = n(105292);
let Y = { Modal: d.ImpressionTypes.MODAL };
function K(e) {
    let { windowKey: t, themeOverride: n, children: i } = e,
        l = null != t,
        [d] = a.useState(() => v.Ay.getEnableHardwareAcceleration()),
        {
            locale: A,
            theme: h,
            focused: C,
            mainWindowVisible: M,
            currentWindow: U,
            fontScale: w,
            fontScaleClass: G,
            keyboardModeEnabled: x,
            saturation: k,
            desaturateUserColors: F,
            useForcedColors: B,
            systemForcedColors: V,
            useReducedMotion: K,
            alwaysShowLinkDecorations: $,
            highContrastMode: z,
        } = (0, c.cf)([y.default, I.Ay, D.A, L.A, b.A], () => ({
            locale: y.default.locale,
            theme: n ?? D.A.theme,
            focused: l ? L.A.getWindowFocused(t) : b.A.isFocused(),
            mainWindowVisible: b.A.isVisible(),
            currentWindow: l ? (L.A.getWindow(t) ?? window) : window,
            fontScale: I.Ay.fontScale,
            fontScaleClass: I.Ay.fontScaleClass,
            keyboardModeEnabled: I.Ay.keyboardModeEnabled,
            saturation: I.Ay.saturation,
            desaturateUserColors: I.Ay.desaturateUserColors,
            useForcedColors: I.Ay.useForcedColors,
            systemForcedColors: I.Ay.systemForcedColors,
            useReducedMotion: I.Ay.useReducedMotion,
            alwaysShowLinkDecorations: I.Ay.alwaysShowLinkDecorations,
            highContrastMode: I.Ay.isHighContrastModeEnabled,
        })),
        X = (function (e, t) {
            let [n, i] = a.useState(0),
                r = (0, T.aL)();
            a.useEffect(() => {
                function e() {
                    return i((e) => e + 1);
                }
                function t() {
                    return i((e) => Math.max(0, e - 1));
                }
                return (
                    r.subscribe(g.jej.POPOUT_SHOW, e),
                    r.subscribe(g.jej.POPOUT_HIDE, t),
                    () => {
                        (r.unsubscribe(g.jej.POPOUT_SHOW, e), r.unsubscribe(g.jej.POPOUT_HIDE, t));
                    }
                );
            }, [r]);
            let [s, l] = a.useState(!1);
            return (
                a.useLayoutEffect(() => {
                    function i(e) {
                        (!t || n > 0) && s
                            ? l(!1)
                            : (!s && n > 0) ||
                              (e instanceof KeyboardEvent &&
                                  (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || S.indexOf(e.key) >= 0)) ||
                              l((e) => !e);
                    }
                    let r = s ? "keyup" : "mousemove";
                    return (t && e.addEventListener(r, i), () => e?.removeEventListener(r, i));
                }, [e, s, n, t]),
                t && 0 === n && s
            );
        })(U, __OVERLAY__ || C),
        q = 0;
    1 !== k && (q |= _.REDUCE_SATURATION_ENABLED);
    let Z = (0, P.C)(),
        Q = (0, N.qK)("RootThemeContextProvider"),
        J = (0, N.k5)("RootThemeContextProvider"),
        ee = (0, N.lV)("RootThemeContextProvider"),
        et = O.useConfig({ location: "RootThemeContextProvider" }).enabled,
        en = (0, m.m2)({ isPopoutWindow: l }),
        ei = (function (e) {
            let { theme: t, saturation: n, enabledExperiments: i, focused: r, mainWindowVisible: l, locale: o } = e,
                d = a.useContext(p.A),
                c = a.useCallback(
                    (e) => {
                        let { componentName: t, payload: n } = e;
                        d(
                            {
                                type: n.impressionType ?? Y[t],
                                name: n.impression?.impressionName,
                                properties: n.impression?.impressionProperties,
                            },
                            { disableTrack: n.disableTrack },
                        );
                    },
                    [d],
                ),
                _ = a.useCallback(
                    () => ({
                        i18n: {
                            CANCEL: W.intl.string(W.t["ETE/oC"]),
                            BACK: W.intl.string(W.t["13/7kX"]),
                            NEXT: W.intl.string(W.t.PDTjLN),
                            SUBMIT: W.intl.string(W.t.geKm7t),
                            SPINNER_LOADING_LABEL: W.intl.string(W.t.ZTNur7),
                            BUTTON_LOADING_STARTED_LABEL: W.intl.string(W.t.pfChQr),
                            BUTTON_LOADING_FINISHED_LABEL: W.intl.string(W.t.SVParY),
                            CLOSE_BUTTON_LABEL: W.intl.string(W.t.cpT0Cq),
                            DISMISS_BUTTON_LABEL: W.intl.string(W.t.WAI6xu),
                            PLAY_BUTTON_LABEL: W.intl.string(W.t.RscU7I),
                            PAUSE_BUTTON_LABEL: W.intl.string(W.t.ZcgDJX),
                            NEW: W.intl.string(W.t.y2b7CA),
                            BETA: W.intl.string(W.t.oW0eUd),
                            EARLY_ACCESS: W.intl.string(W.t.EYxi0o),
                            BILLING_TRIAL_FREE_TRIAL_TEXT: W.intl.string(W.t.IBYG5U),
                            MODAL_DONT_SHOW_AGAIN: W.intl.string(j.default.m3Vfcs),
                            SEARCH: W.intl.string(W.t["5h0QOP"]),
                            AUTOCOMPLETE_NO_RESULTS_HEADER: W.intl.string(W.t["4o4z3e"]),
                            AUTOCOMPLETE_NO_RESULTS_BODY: W.intl.string(W.t.QwSXv8),
                            LISTBOX_EMPTY_STATE: W.intl.string(j.default.db85vU),
                            LISTBOX_EMPTY_STATE_WITH_QUERY: (e) =>
                                W.intl.formatToPlainString(j.default.bPKiId, { query: e }),
                            KEY_CTRL_A11Y_LABEL: W.intl.string(W.t.jm6v8i),
                            KEY_CMD_A11Y_LABEL: W.intl.string(W.t.pYkiQq),
                            KEY_ALT_A11Y_LABEL: W.intl.string(W.t.R2n7d3),
                            KEY_OPTION_A11Y_LABEL: W.intl.string(W.t.FMYSJY),
                            KEY_SHIFT: W.intl.string(W.t["L+jWo5"]),
                            KEY_SHIFT_A11Y_LABEL: W.intl.string(W.t["q+/2+S"]),
                            KEY_UP_A11Y_LABEL: W.intl.string(W.t.HxzHDb),
                            KEY_DOWN_A11Y_LABEL: W.intl.string(W.t["a+iRlH"]),
                            KEY_LEFT_A11Y_LABEL: W.intl.string(W.t.xFjIVC),
                            KEY_RIGHT_A11Y_LABEL: W.intl.string(W.t["BT3jf/"]),
                            KEY_PAGEUP: W.intl.string(W.t.VdCWGI),
                            KEY_PAGEDOWN: W.intl.string(W.t.gpSh3U),
                            KEY_ANY: W.intl.string(W.t.CkGpcV),
                            KEY_ENTER: W.intl.string(W.t.SUweGy),
                            KEY_ENTER_A11Y_LABEL: W.intl.string(W.t.yLNala),
                            KEY_RETURN_A11Y_LABEL: W.intl.string(W.t.V7nPj0),
                            KEY_ESCAPE: W.intl.string(W.t.cQmsQF),
                            KEY_ESCAPE_A11Y_LABEL: W.intl.string(W.t["2qsw5/"]),
                            KEY_BACKSPACE: W.intl.string(W.t["L+36+h"]),
                            KEY_BACKSPACE_A11Y_LABEL: W.intl.string(W.t["9c/Ikv"]),
                            KEY_DELETE_A11Y_LABEL: W.intl.string(W.t.BTFDmq),
                            DATE_INPUT_OPEN_CALENDAR_LABEL: W.intl.string(j.default.I8kUqR),
                            CALENDAR_PREVIOUS_MONTH_LABEL: W.intl.string(j.default.raS6yf),
                            CALENDAR_NEXT_MONTH_LABEL: W.intl.string(j.default["/cp93l"]),
                            INLINE_NOTICE_GENERIC_ERROR: W.intl.string(W.t["rTU7/z"]),
                            FEEDBACK_CRITICAL_ICON_A11Y_LABEL: W.intl.string(j.default.uKMqrF),
                            FEEDBACK_WARNING_ICON_A11Y_LABEL: W.intl.string(j.default["7vL/d/"]),
                            FEEDBACK_INFO_ICON_A11Y_LABEL: W.intl.string(j.default.BReS7U),
                            FEEDBACK_POSITIVE_ICON_A11Y_LABEL: W.intl.string(j.default["1MXXPf"]),
                            STEP_INDICATOR: (e, t) =>
                                W.intl.formatToPlainString(j.default["v2YSk/"], { stepNumber: e, stepCount: t }),
                            SELECT_PLACEHOLDER: W.intl.string(j.default["A+pfVR"]),
                            CLEAR_SELECTION: W.intl.string(j.default.JA5C7L),
                            SELECTED_TAGS_HEADING: W.intl.string(j.default.VMNfsY),
                            PRESS_DELETE_TO_REMOVE_TAG: W.intl.string(j.default["/Y7vRd"]),
                            PERCENT_COMPLETE: (e) => W.intl.formatToPlainString(j.default["2L/ygS"], { percent: e }),
                            TEXT_INPUT_CLEAR: W.intl.string(W.t.VkKicb),
                            CHARACTER_COUNT_LIMIT_REACHED: W.intl.string(W.t.c2Jqed),
                            CHARACTER_COUNT_A11Y_LABEL: (e) =>
                                W.intl.formatToPlainString(W.t.fR1cof, { remainingCharacters: e }),
                            MINIMUM_LENGTH_ERROR: (e) => W.intl.formatToPlainString(W.t["62rk1K"], { minLength: e }),
                            MAXIMUM_LENGTH_ERROR: (e) => W.intl.formatToPlainString(W.t.ICT5S6, { maxLength: e }),
                            MINIMUM_VALUE_ERROR: (e) => W.intl.formatToPlainString(W.t.ykmNSo, { min: e }),
                            MAXIMUM_VALUE_ERROR: (e) => W.intl.formatToPlainString(W.t.KiDDCk, { max: e }),
                        },
                        locale: o,
                        theme: t,
                        saturation: n,
                        defaultLayerContext: R.uY,
                        experiments: { enabledExperiments: i },
                        trackImpression: c,
                        isWindowFocused: () => r,
                        isMainWindowVisible: () => l,
                        dynamicGraphicComponents: u.Q,
                    }),
                    [t, n, i, c, r, l, o],
                ),
                [E, A] = a.useState(_);
            return (
                a.useLayoutEffect(() => {
                    function e() {
                        A(_);
                    }
                    ((0, s.waitForAllDefaultIntlMessagesLoaded)().then(e), W.intl.onLocaleChange(e));
                }, [_]),
                E
            );
        })({
            theme: h,
            saturation: k,
            enabledExperiments: a.useMemo(() => {
                let e = [];
                return (
                    Q && e.push("refresh-fast-follow-avatars"),
                    J && e.push("refresh-fast-follow-guild-bg"),
                    ee && e.push("refresh-fast-follow-distinct-borders"),
                    et && e.push("rive-web-perf"),
                    e
                );
            }, [Q, J, ee, et]),
            focused: C,
            mainWindowVisible: M,
            locale: A,
        });
    return (0, r.jsx)(E.GE, {
        value: ei,
        children: (0, r.jsx)(f, {
            theme: h,
            flags: q,
            saturation: k,
            density: Z,
            children: (0, r.jsx)(H, {
                lang: A,
                theme: h,
                density: Z,
                focused: C,
                fontScale: w,
                fontScaleClass: G,
                keyboardModeEnabled: x,
                mouseMode: X,
                saturation: k,
                desaturateUserColors: F,
                useForcedColors: B,
                systemForcedColors: V,
                useReducedMotion: K,
                alwaysShowLinkDecorations: $,
                hardwareAccelerationEnabled: d,
                highContrastMode: z,
                isPopoutWindow: l,
                rootClassName: o()(en, {
                    "refresh-fast-follow-avatars": Q,
                    "refresh-fast-follow-guild-bg": J,
                    "refresh-fast-follow-distinct-borders": ee,
                }),
                children: i,
            }),
        }),
    });
}
