(n.d(t, { e: () => $ }), n(321073));
var i,
    r = n(477900),
    a = n(582128),
    s = n(632296),
    l = n(503698),
    o = n.n(l),
    d = n(562708),
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
    T = n(71855),
    m = n(267102),
    g = n(652215);
let S = ["Shift", "Alt", "Meta", "Control"];
var N = n(534409),
    C = n(37537),
    O = n(945810);
let R = (0, O.mj)({
    name: "2026-08-rive-web-perf",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var L = n(750506),
    y = n(869146),
    D = n(773669),
    v = n(363195),
    b = n(531685),
    M = n(19575),
    P = n(418842),
    U = n(607399),
    w = n(112834),
    G = n(964486),
    x = n(657043),
    k = n(723702);
let F = (0, O.mj)({
    kind: "user",
    name: "2026-10-mana-badge-refresh",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var B = n(354328),
    V = n(964404),
    H = n(611635);
function j(e) {
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
            useForcedColors: T,
            systemForcedColors: m,
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
        v = (0, B.A)("highlight_mana_buttons"),
        b = (0, B.A)("highlight_mana_components"),
        P = (0, B.A)("highlight_mana_text"),
        j = (0, B.A)("highlight_void_toggleables"),
        W = (0, B.A)("highlight_void_buttons"),
        Y = (0, B.A)("highlight_mana_text_overrides");
    (a.useEffect(() => {
        if (!P) return;
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
    }, [P]),
        a.useEffect(() => {
            if (!Y) return;
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
        }, [Y]));
    let K = (0, c.bG)([V.Ay], () => V.Ay.hdrDynamicRange),
        $ = (0, x.BX)("RootElementContextProvider"),
        z = F.useConfig({ location: "RootElementContextProvider" }).enabled,
        X = `font-size: ${_}%; --saturation-factor: ${f}; dynamic-range-limit: ${K}; ${D}`,
        q = o()(
            ((t = ""),
            (0, k.isWindows)()
                ? (t = "platform-win")
                : (0, k.isMac)()
                  ? (t = "platform-osx")
                  : (0, k.isLinux)()
                    ? (t = "platform-linux")
                    : (0, k.isWeb)() && (t = "platform-web"),
            __OVERLAY__ ? `${t} platform-overlay` : t),
            (0, w.m)(l),
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
                "is-mobile": U.Fr,
                "app-focused": u,
                "desaturate-user-colors": p,
                "disable-forced-colors": !T && "active" === m,
                "enable-forced-colors": T,
                "visual-refresh": !0,
                "hardware-acceleration-disabled": !N,
                "visual-refresh-chat-input": !1,
                "highlight-mana-buttons": v,
                "highlight-mana-components": b,
                "highlight-mana-text": P,
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
        (0, G.Ay)(() => {
            M.Ay.setTrafficLightPosition({ x: 9, y: 9 });
        }),
        (0, r.jsx)(H.q.Provider, { value: Z, children: R })
    );
}
var W = n(474249),
    Y = n(105292);
let K = { Modal: d.ImpressionTypes.MODAL };
function $(e) {
    let { windowKey: t, themeOverride: n, children: i } = e,
        l = null != t,
        [d] = a.useState(() => M.Ay.getEnableHardwareAcceleration()),
        {
            locale: A,
            theme: h,
            focused: O,
            mainWindowVisible: U,
            currentWindow: w,
            fontScale: G,
            fontScaleClass: x,
            keyboardModeEnabled: k,
            saturation: F,
            desaturateUserColors: B,
            useForcedColors: V,
            systemForcedColors: H,
            useReducedMotion: $,
            alwaysShowLinkDecorations: z,
            highContrastMode: X,
        } = (0, c.cf)([D.default, I.Ay, v.A, y.A, b.A], () => ({
            locale: D.default.locale,
            theme: n ?? v.A.theme,
            focused: l ? y.A.getWindowFocused(t) : b.A.isFocused(),
            mainWindowVisible: b.A.isVisible(),
            currentWindow: l ? (y.A.getWindow(t) ?? window) : window,
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
        q = (function (e, t) {
            let [n, i] = a.useState(0),
                r = (0, m.aL)();
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
        })(w, __OVERLAY__ || O),
        Z = 0;
    1 !== F && (Z |= _.REDUCE_SATURATION_ENABLED);
    let Q = (0, P.C)(),
        J = (0, N.qK)("RootThemeContextProvider"),
        ee = (0, N.k5)("RootThemeContextProvider"),
        et = (0, N.lV)("RootThemeContextProvider"),
        en = (0, C.c)("RootThemeContextProvider"),
        ei = R.useConfig({ location: "RootThemeContextProvider" }).enabled,
        er = (0, T.m2)({ isPopoutWindow: l }),
        ea = (function (e) {
            let { theme: t, saturation: n, enabledExperiments: i, focused: r, mainWindowVisible: l, locale: o } = e,
                d = a.useContext(p.A),
                c = a.useCallback(
                    (e) => {
                        let { componentName: t, payload: n } = e;
                        d(
                            {
                                type: n.impressionType ?? K[t],
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
                            CANCEL: Y.intl.string(Y.t["ETE/oC"]),
                            BACK: Y.intl.string(Y.t["13/7kX"]),
                            NEXT: Y.intl.string(Y.t.PDTjLN),
                            SUBMIT: Y.intl.string(Y.t.geKm7t),
                            SPINNER_LOADING_LABEL: Y.intl.string(Y.t.ZTNur7),
                            BUTTON_LOADING_STARTED_LABEL: Y.intl.string(Y.t.pfChQr),
                            BUTTON_LOADING_FINISHED_LABEL: Y.intl.string(Y.t.SVParY),
                            CLOSE_BUTTON_LABEL: Y.intl.string(Y.t.cpT0Cq),
                            DISMISS_BUTTON_LABEL: Y.intl.string(Y.t.WAI6xu),
                            PLAY_BUTTON_LABEL: Y.intl.string(Y.t.RscU7I),
                            PAUSE_BUTTON_LABEL: Y.intl.string(Y.t.ZcgDJX),
                            NEW: Y.intl.string(Y.t.y2b7CA),
                            BETA: Y.intl.string(Y.t.oW0eUd),
                            EARLY_ACCESS: Y.intl.string(Y.t.EYxi0o),
                            BILLING_TRIAL_FREE_TRIAL_TEXT: Y.intl.string(Y.t.IBYG5U),
                            MODAL_DONT_SHOW_AGAIN: Y.intl.string(W.default.m3Vfcs),
                            SEARCH: Y.intl.string(Y.t["5h0QOP"]),
                            AUTOCOMPLETE_NO_RESULTS_HEADER: Y.intl.string(Y.t["4o4z3e"]),
                            AUTOCOMPLETE_NO_RESULTS_BODY: Y.intl.string(Y.t.QwSXv8),
                            LISTBOX_EMPTY_STATE: Y.intl.string(W.default.db85vU),
                            LISTBOX_EMPTY_STATE_WITH_QUERY: (e) =>
                                Y.intl.formatToPlainString(W.default.bPKiId, { query: e }),
                            KEY_CTRL_A11Y_LABEL: Y.intl.string(Y.t.jm6v8i),
                            KEY_CMD_A11Y_LABEL: Y.intl.string(Y.t.pYkiQq),
                            KEY_ALT_A11Y_LABEL: Y.intl.string(Y.t.R2n7d3),
                            KEY_OPTION_A11Y_LABEL: Y.intl.string(Y.t.FMYSJY),
                            KEY_SHIFT: Y.intl.string(Y.t["L+jWo5"]),
                            KEY_SHIFT_A11Y_LABEL: Y.intl.string(Y.t["q+/2+S"]),
                            KEY_UP_A11Y_LABEL: Y.intl.string(Y.t.HxzHDb),
                            KEY_DOWN_A11Y_LABEL: Y.intl.string(Y.t["a+iRlH"]),
                            KEY_LEFT_A11Y_LABEL: Y.intl.string(Y.t.xFjIVC),
                            KEY_RIGHT_A11Y_LABEL: Y.intl.string(Y.t["BT3jf/"]),
                            KEY_PAGEUP: Y.intl.string(Y.t.VdCWGI),
                            KEY_PAGEDOWN: Y.intl.string(Y.t.gpSh3U),
                            KEY_ANY: Y.intl.string(Y.t.CkGpcV),
                            KEY_ENTER: Y.intl.string(Y.t.SUweGy),
                            KEY_ENTER_A11Y_LABEL: Y.intl.string(Y.t.yLNala),
                            KEY_RETURN_A11Y_LABEL: Y.intl.string(Y.t.V7nPj0),
                            KEY_ESCAPE: Y.intl.string(Y.t.cQmsQF),
                            KEY_ESCAPE_A11Y_LABEL: Y.intl.string(Y.t["2qsw5/"]),
                            KEY_BACKSPACE: Y.intl.string(Y.t["L+36+h"]),
                            KEY_BACKSPACE_A11Y_LABEL: Y.intl.string(Y.t["9c/Ikv"]),
                            KEY_DELETE_A11Y_LABEL: Y.intl.string(Y.t.BTFDmq),
                            DATE_INPUT_OPEN_CALENDAR_LABEL: Y.intl.string(W.default.I8kUqR),
                            CALENDAR_PREVIOUS_MONTH_LABEL: Y.intl.string(W.default.raS6yf),
                            CALENDAR_NEXT_MONTH_LABEL: Y.intl.string(W.default["/cp93l"]),
                            INLINE_NOTICE_GENERIC_ERROR: Y.intl.string(Y.t["rTU7/z"]),
                            FEEDBACK_CRITICAL_ICON_A11Y_LABEL: Y.intl.string(W.default.uKMqrF),
                            FEEDBACK_WARNING_ICON_A11Y_LABEL: Y.intl.string(W.default["7vL/d/"]),
                            FEEDBACK_INFO_ICON_A11Y_LABEL: Y.intl.string(W.default.BReS7U),
                            FEEDBACK_POSITIVE_ICON_A11Y_LABEL: Y.intl.string(W.default["1MXXPf"]),
                            STEP_INDICATOR: (e, t) =>
                                Y.intl.formatToPlainString(W.default["v2YSk/"], { stepNumber: e, stepCount: t }),
                            SELECT_PLACEHOLDER: Y.intl.string(W.default["A+pfVR"]),
                            CLEAR_SELECTION: Y.intl.string(W.default.JA5C7L),
                            SELECTED_TAGS_HEADING: Y.intl.string(W.default.VMNfsY),
                            PRESS_DELETE_TO_REMOVE_TAG: Y.intl.string(W.default["/Y7vRd"]),
                            PERCENT_COMPLETE: (e) => Y.intl.formatToPlainString(W.default["2L/ygS"], { percent: e }),
                            TEXT_INPUT_CLEAR: Y.intl.string(Y.t.VkKicb),
                            CHARACTER_COUNT_LIMIT_REACHED: Y.intl.string(Y.t.c2Jqed),
                            CHARACTER_COUNT_A11Y_LABEL: (e) =>
                                Y.intl.formatToPlainString(Y.t.fR1cof, { remainingCharacters: e }),
                            MINIMUM_LENGTH_ERROR: (e) => Y.intl.formatToPlainString(Y.t["62rk1K"], { minLength: e }),
                            MAXIMUM_LENGTH_ERROR: (e) => Y.intl.formatToPlainString(Y.t.ICT5S6, { maxLength: e }),
                            MINIMUM_VALUE_ERROR: (e) => Y.intl.formatToPlainString(Y.t.ykmNSo, { min: e }),
                            MAXIMUM_VALUE_ERROR: (e) => Y.intl.formatToPlainString(Y.t.KiDDCk, { max: e }),
                        },
                        locale: o,
                        theme: t,
                        saturation: n,
                        defaultLayerContext: L.uY,
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
                    ((0, s.waitForAllDefaultIntlMessagesLoaded)().then(e), Y.intl.onLocaleChange(e));
                }, [_]),
                E
            );
        })({
            theme: h,
            saturation: F,
            enabledExperiments: a.useMemo(() => {
                let e = [];
                return (
                    J && e.push("refresh-fast-follow-avatars"),
                    ee && e.push("refresh-fast-follow-guild-bg"),
                    et && e.push("refresh-fast-follow-distinct-borders"),
                    en && e.push("mana-type-consolidation"),
                    ei && e.push("rive-web-perf"),
                    e
                );
            }, [J, ee, et, en, ei]),
            focused: O,
            mainWindowVisible: U,
            locale: A,
        });
    return (0, r.jsx)(E.GE, {
        value: ea,
        children: (0, r.jsx)(f, {
            theme: h,
            flags: Z,
            saturation: F,
            density: Q,
            children: (0, r.jsx)(j, {
                lang: A,
                theme: h,
                density: Q,
                focused: O,
                fontScale: G,
                fontScaleClass: x,
                keyboardModeEnabled: k,
                mouseMode: q,
                saturation: F,
                desaturateUserColors: B,
                useForcedColors: V,
                systemForcedColors: H,
                useReducedMotion: $,
                alwaysShowLinkDecorations: z,
                hardwareAccelerationEnabled: d,
                highContrastMode: X,
                isPopoutWindow: l,
                rootClassName: o()(er, {
                    "refresh-fast-follow-avatars": J,
                    "refresh-fast-follow-guild-bg": ee,
                    "refresh-fast-follow-distinct-borders": et,
                    "mana-type-consolidation": en,
                }),
                children: i,
            }),
        }),
    });
}
