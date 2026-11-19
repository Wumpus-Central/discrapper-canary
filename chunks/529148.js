(n.d(t, { e: () => X }), n(321073));
var i,
    r = n(477900),
    a = n(582128),
    s = n(503698),
    l = n.n(s),
    o = n(855986);
n(938796);
var d =
        (((i = {})[(i.MOBILE_DARK_GRADIENT_THEME_ENABLED = 4)] = "MOBILE_DARK_GRADIENT_THEME_ENABLED"),
        (i[(i.MOBILE_LIGHT_GRADIENT_THEME_ENABLED = 8)] = "MOBILE_LIGHT_GRADIENT_THEME_ENABLED"),
        (i[(i.REDUCED_CONTRAST_ENABLED = 16)] = "REDUCED_CONTRAST_ENABLED"),
        (i[(i.INCREASED_CONTRAST_ENABLED = 32)] = "INCREASED_CONTRAST_ENABLED"),
        (i[(i.REDUCE_SATURATION_ENABLED = 64)] = "REDUCE_SATURATION_ENABLED"),
        i),
    c = n(116711),
    u = n(812743),
    _ = n(38021);
function E(e) {
    let {
            children: t,
            theme: n = u.NJ.DARK,
            primaryColor: i = null,
            secondaryColor: s = null,
            gradient: l = null,
            flags: o = 0,
            contrast: d = 1,
            saturation: c = 1,
            density: E = "compact",
            disableAdaptiveTheme: A = !1,
            reduceAdaptiveTheme: f = !1,
        } = e,
        h = a.useMemo(
            () =>
                (0, _.dI)({
                    theme: n,
                    primaryColor: i,
                    secondaryColor: s,
                    gradient: l,
                    flags: o,
                    contrast: d,
                    saturation: c,
                    density: E,
                    disableAdaptiveTheme: A,
                    reduceAdaptiveTheme: f,
                }),
            [n, i, s, l, o, d, c, E, A, f],
        );
    return (0, r.jsx)(_.Dx.Provider, { value: h, children: t });
}
var A = n(775602),
    f = n(71855),
    h = n(267102),
    I = n(652215);
let p = ["Shift", "Alt", "Meta", "Control"];
var m = n(534409),
    g = n(945810);
let T = (0, g.mj)({
    name: "2026-08-rive-web-perf",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var S = n(869146),
    N = n(442325),
    C = n(773669),
    O = n(413599),
    R = n(531685),
    L = n(253400),
    y = n(418842),
    D = n(607399),
    b = n(112834),
    v = n(964486),
    P = n(657043),
    M = n(723702);
let U = (0, g.mj)({
    kind: "user",
    name: "2026-10-mana-badge-refresh",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var w = n(354328),
    G = n(964404),
    x = n(611635);
function k(e) {
    let t,
        {
            rootClassName: i,
            lang: s,
            theme: d,
            density: c,
            focused: u,
            fontScale: _,
            fontScaleClass: E,
            mouseMode: f,
            keyboardModeEnabled: h,
            saturation: I,
            desaturateUserColors: p,
            useForcedColors: m,
            systemForcedColors: g,
            useReducedMotion: T,
            alwaysShowLinkDecorations: S,
            hardwareAccelerationEnabled: N,
            highContrastMode: C,
            isPopoutWindow: O,
            children: R,
        } = e,
        y = window.CSS.supports("selector(::-webkit-scrollbar)"),
        k = (0, o.bG)([A.Ay], () => A.Ay.zoom),
        F = O ? "" : `--custom-zoom: ${k};`,
        B = (0, w.A)("highlight_mana_buttons"),
        V = (0, w.A)("highlight_mana_components"),
        H = (0, w.A)("highlight_mana_text"),
        j = (0, w.A)("highlight_void_toggleables"),
        W = (0, w.A)("highlight_void_buttons"),
        Y = (0, w.A)("highlight_mana_text_overrides");
    (a.useEffect(() => {
        if (!H) return;
        let e = () => {},
            t = !1;
        return (
            Promise.all([n.e(887884), n.e(689064)])
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
                Promise.all([n.e(887884), n.e(689064)])
                    .then(n.bind(n, 977691))
                    .then((n) => {
                        t || (e = n.startOverrideAudit());
                    }),
                () => {
                    ((t = !0), e());
                }
            );
        }, [Y]));
    let K = (0, o.bG)([G.Ay], () => G.Ay.hdrDynamicRange),
        $ = (0, P.BX)("RootElementContextProvider"),
        X = U.useConfig({ location: "RootElementContextProvider" }).enabled,
        z = `font-size: ${_}%; --saturation-factor: ${I}; dynamic-range-limit: ${K}; ${F}`,
        q = l()(
            ((t = ""),
            (0, M.uF)()
                ? (t = "platform-win")
                : (0, M.cX)()
                  ? (t = "platform-osx")
                  : (0, M.j9)()
                    ? (t = "platform-linux")
                    : (0, M.HZ)() && (t = "platform-web"),
            __OVERLAY__ ? `${t} platform-overlay` : t),
            (0, b.m)(d),
            `density-${c}`,
            E,
            {
                "low-saturation": I <= 0.4,
                "keyboard-mode": h,
                "decorate-links": S,
                "no-webkit-scrollbar": !y,
                "has-webkit-scrollbar": y,
                "mouse-mode": f,
                "reduce-motion": T,
                "full-motion": !T,
                "is-mobile": D.Fr,
                "app-focused": u,
                "desaturate-user-colors": p,
                "disable-forced-colors": !m && "active" === g,
                "enable-forced-colors": m,
                "visual-refresh": !0,
                "hardware-acceleration-disabled": !N,
                "visual-refresh-chat-input": !1,
                "highlight-mana-buttons": B,
                "highlight-mana-components": V,
                "highlight-mana-text": H,
                "highlight-mana-text-overrides": Y,
                "highlight-void-toggleables": j,
                "highlight-void-buttons": W,
                "high-contrast-mode": C,
                "enlarge-target-size": $,
                "mana-badge-refresh": X,
            },
            i,
        ),
        Q = a.useMemo(() => ({ lang: s, style: z, className: q, focused: u }), [s, z, q, u]);
    return (
        (0, v.Ay)(() => {
            L.Ay.setTrafficLightPosition({ x: 9, y: 9 });
        }),
        (0, r.jsx)(x.q.Provider, { value: Q, children: R })
    );
}
var F = n(95498),
    B = n(613412),
    V = n(116833),
    H = n(449275),
    j = n(989395),
    W = n(750506),
    Y = n(738098),
    K = n(792996);
let $ = { Modal: B.ImpressionTypes.MODAL };
function X(e) {
    let { windowKey: t, themeOverride: n, children: i } = e,
        s = null != t,
        [u] = a.useState(() => L.Ay.getEnableHardwareAcceleration()),
        {
            locale: _,
            theme: g,
            focused: D,
            mainWindowVisible: b,
            currentWindow: v,
            fontScale: P,
            fontScaleClass: M,
            keyboardModeEnabled: U,
            saturation: w,
            desaturateUserColors: G,
            useForcedColors: x,
            systemForcedColors: B,
            useReducedMotion: X,
            alwaysShowLinkDecorations: z,
            highContrastMode: q,
        } = (0, o.cf)([C.default, A.Ay, O.A, S.A, R.A], () => ({
            locale: C.default.locale,
            theme: n ?? O.A.theme,
            focused: s ? S.A.getWindowFocused(t) : R.A.isFocused(),
            mainWindowVisible: R.A.isVisible(),
            currentWindow: s ? (S.A.getWindow(t) ?? window) : window,
            fontScale: A.Ay.fontScale,
            fontScaleClass: A.Ay.fontScaleClass,
            keyboardModeEnabled: A.Ay.keyboardModeEnabled,
            saturation: A.Ay.saturation,
            desaturateUserColors: A.Ay.desaturateUserColors,
            useForcedColors: A.Ay.useForcedColors,
            systemForcedColors: A.Ay.systemForcedColors,
            useReducedMotion: A.Ay.useReducedMotion,
            alwaysShowLinkDecorations: A.Ay.alwaysShowLinkDecorations,
            highContrastMode: A.Ay.isHighContrastModeEnabled,
        })),
        Q = (function (e, t) {
            let [n, i] = a.useState(0),
                r = (0, h.aL)();
            a.useEffect(() => {
                function e() {
                    return i((e) => e + 1);
                }
                function t() {
                    return i((e) => Math.max(0, e - 1));
                }
                return (
                    r.subscribe(I.jej.POPOUT_SHOW, e),
                    r.subscribe(I.jej.POPOUT_HIDE, t),
                    () => {
                        (r.unsubscribe(I.jej.POPOUT_SHOW, e), r.unsubscribe(I.jej.POPOUT_HIDE, t));
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
                                  (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || p.indexOf(e.key) >= 0)) ||
                              l((e) => !e);
                    }
                    let r = s ? "keyup" : "mousemove";
                    return (t && e.addEventListener(r, i), () => e?.removeEventListener(r, i));
                }, [e, s, n, t]),
                t && 0 === n && s
            );
        })(v, __OVERLAY__ || D),
        J = 0;
    1 !== w && (J |= d.REDUCE_SATURATION_ENABLED);
    let Z = (0, y.C)(),
        ee = (0, m.qK)("RootThemeContextProvider"),
        et = (0, m.k5)("RootThemeContextProvider"),
        en = (0, m.lV)("RootThemeContextProvider"),
        ei = T.useConfig({ location: "RootThemeContextProvider" }).enabled,
        er = (0, o.bG)([N.A], () => !s && N.A.isTabBarVisible(), [s]),
        ea = (0, f.m2)({ isPopoutWindow: s, hasChannelTabs: er }),
        es = (function (e) {
            let { theme: t, saturation: n, enabledExperiments: i, focused: r, mainWindowVisible: s, locale: l } = e,
                o = a.useContext(j.A),
                d = a.useCallback(
                    (e) => {
                        let { componentName: t, payload: n } = e;
                        o(
                            {
                                type: n.impressionType ?? $[t],
                                name: n.impression?.impressionName,
                                properties: n.impression?.impressionProperties,
                            },
                            { disableTrack: n.disableTrack },
                        );
                    },
                    [o],
                ),
                [c, u] = a.useState(0);
            return (
                a.useLayoutEffect(() => {
                    let e = !0;
                    function t() {
                        e && u((e) => e + 1);
                    }
                    !(async function () {
                        (await (0, F.waitForAllDefaultIntlMessagesLoaded)(), t());
                    })();
                    let n = K.intl.onLocaleChange(t),
                        i = (0, H.I)(t);
                    return () => {
                        ((e = !1), n(), i());
                    };
                }, []),
                a.useMemo(
                    () => ({
                        i18n: {
                            CANCEL: K.intl.string(K.t["ETE/oC"]),
                            BACK: K.intl.string(K.t["13/7kX"]),
                            NEXT: K.intl.string(K.t.PDTjLN),
                            SUBMIT: K.intl.string(K.t.geKm7t),
                            SPINNER_LOADING_LABEL: K.intl.string(K.t.ZTNur7),
                            BUTTON_LOADING_STARTED_LABEL: K.intl.string(K.t.pfChQr),
                            BUTTON_LOADING_FINISHED_LABEL: K.intl.string(K.t.SVParY),
                            CLOSE_BUTTON_LABEL: K.intl.string(K.t.cpT0Cq),
                            DISMISS_BUTTON_LABEL: K.intl.string(K.t.WAI6xu),
                            PLAY_BUTTON_LABEL: K.intl.string(K.t.RscU7I),
                            PAUSE_BUTTON_LABEL: K.intl.string(K.t.ZcgDJX),
                            NEW: K.intl.string(K.t.y2b7CA),
                            BETA: K.intl.string(K.t.oW0eUd),
                            EARLY_ACCESS: K.intl.string(K.t.EYxi0o),
                            BILLING_TRIAL_FREE_TRIAL_TEXT: K.intl.string(K.t.IBYG5U),
                            MODAL_DONT_SHOW_AGAIN: K.intl.string(Y.default.m3Vfcs),
                            SEARCH: K.intl.string(K.t["5h0QOP"]),
                            AUTOCOMPLETE_NO_RESULTS_HEADER: K.intl.string(K.t["4o4z3e"]),
                            AUTOCOMPLETE_NO_RESULTS_BODY: K.intl.string(K.t.QwSXv8),
                            LISTBOX_EMPTY_STATE: K.intl.string(Y.default.db85vU),
                            LISTBOX_EMPTY_STATE_WITH_QUERY: (e) =>
                                K.intl.formatToPlainString(Y.default.bPKiId, { query: e }),
                            KEY_CTRL_A11Y_LABEL: K.intl.string(K.t.jm6v8i),
                            KEY_CMD_A11Y_LABEL: K.intl.string(K.t.pYkiQq),
                            KEY_ALT_A11Y_LABEL: K.intl.string(K.t.R2n7d3),
                            KEY_OPTION_A11Y_LABEL: K.intl.string(K.t.FMYSJY),
                            KEY_SHIFT: K.intl.string(K.t["L+jWo5"]),
                            KEY_SHIFT_A11Y_LABEL: K.intl.string(K.t["q+/2+S"]),
                            KEY_UP_A11Y_LABEL: K.intl.string(K.t.HxzHDb),
                            KEY_DOWN_A11Y_LABEL: K.intl.string(K.t["a+iRlH"]),
                            KEY_LEFT_A11Y_LABEL: K.intl.string(K.t.xFjIVC),
                            KEY_RIGHT_A11Y_LABEL: K.intl.string(K.t["BT3jf/"]),
                            KEY_PAGEUP: K.intl.string(K.t.VdCWGI),
                            KEY_PAGEDOWN: K.intl.string(K.t.gpSh3U),
                            KEY_ANY: K.intl.string(K.t.CkGpcV),
                            KEY_ENTER: K.intl.string(K.t.SUweGy),
                            KEY_ENTER_A11Y_LABEL: K.intl.string(K.t.yLNala),
                            KEY_RETURN_A11Y_LABEL: K.intl.string(K.t.V7nPj0),
                            KEY_ESCAPE: K.intl.string(K.t.cQmsQF),
                            KEY_ESCAPE_A11Y_LABEL: K.intl.string(K.t["2qsw5/"]),
                            KEY_BACKSPACE: K.intl.string(K.t["L+36+h"]),
                            KEY_BACKSPACE_A11Y_LABEL: K.intl.string(K.t["9c/Ikv"]),
                            KEY_DELETE_A11Y_LABEL: K.intl.string(K.t.BTFDmq),
                            DATE_INPUT_OPEN_CALENDAR_LABEL: K.intl.string(Y.default.I8kUqR),
                            CALENDAR_PREVIOUS_MONTH_LABEL: K.intl.string(Y.default.raS6yf),
                            CALENDAR_NEXT_MONTH_LABEL: K.intl.string(Y.default["/cp93l"]),
                            INLINE_NOTICE_GENERIC_ERROR: K.intl.string(K.t["rTU7/z"]),
                            FEEDBACK_CRITICAL_ICON_A11Y_LABEL: K.intl.string(Y.default.uKMqrF),
                            FEEDBACK_WARNING_ICON_A11Y_LABEL: K.intl.string(Y.default["7vL/d/"]),
                            FEEDBACK_INFO_ICON_A11Y_LABEL: K.intl.string(Y.default.BReS7U),
                            FEEDBACK_POSITIVE_ICON_A11Y_LABEL: K.intl.string(Y.default["1MXXPf"]),
                            STEP_INDICATOR: (e, t) =>
                                K.intl.formatToPlainString(Y.default["v2YSk/"], { stepNumber: e, stepCount: t }),
                            SELECT_PLACEHOLDER: K.intl.string(Y.default["A+pfVR"]),
                            CLEAR_SELECTION: K.intl.string(Y.default.JA5C7L),
                            SELECTED_TAGS_HEADING: K.intl.string(Y.default.VMNfsY),
                            PRESS_DELETE_TO_REMOVE_TAG: K.intl.string(Y.default["/Y7vRd"]),
                            PERCENT_COMPLETE: (e) => K.intl.formatToPlainString(Y.default["2L/ygS"], { percent: e }),
                            TEXT_INPUT_CLEAR: K.intl.string(K.t.VkKicb),
                            TEXT_INPUT_VIEW_PASSWORD: K.intl.string(K.t.nFzpM5),
                            TEXT_INPUT_HIDE_PASSWORD: K.intl.string(K.t.Nusip4),
                            TEXT_INPUT_PASSWORD_VISIBLE: K.intl.string(K.t.agstwg),
                            TEXT_INPUT_PASSWORD_HIDDEN: K.intl.string(K.t.SHvAer),
                            CHARACTER_COUNT_LIMIT_REACHED: K.intl.string(K.t.c2Jqed),
                            CHARACTER_COUNT_A11Y_LABEL: (e) =>
                                K.intl.formatToPlainString(K.t.fR1cof, { remainingCharacters: e }),
                            MINIMUM_LENGTH_ERROR: (e) => K.intl.formatToPlainString(K.t["62rk1K"], { minLength: e }),
                            MAXIMUM_LENGTH_ERROR: (e) => K.intl.formatToPlainString(K.t.ICT5S6, { maxLength: e }),
                            MINIMUM_VALUE_ERROR: (e) => K.intl.formatToPlainString(K.t.ykmNSo, { min: e }),
                            MAXIMUM_VALUE_ERROR: (e) => K.intl.formatToPlainString(K.t.KiDDCk, { max: e }),
                            GLOBAL_BANNER_COUNTDOWN_TIME_LEFT: (e) =>
                                K.intl.formatToPlainString(Y.default.ody6zm, { time: e }),
                        },
                        locale: l,
                        theme: t,
                        saturation: n,
                        defaultLayerContext: W.uY,
                        experiments: { enabledExperiments: i },
                        trackImpression: d,
                        isWindowFocused: () => r,
                        isMainWindowVisible: () => s,
                        dynamicGraphicComponents: V.Q,
                    }),
                    [t, n, i, d, r, s, l, c],
                )
            );
        })({
            theme: g,
            saturation: w,
            enabledExperiments: a.useMemo(() => {
                let e = [];
                return (
                    ee && e.push("refresh-fast-follow-avatars"),
                    et && e.push("refresh-fast-follow-guild-bg"),
                    en && e.push("refresh-fast-follow-distinct-borders"),
                    ei && e.push("rive-web-perf"),
                    e
                );
            }, [ee, et, en, ei]),
            focused: D,
            mainWindowVisible: b,
            locale: _,
        });
    return (0, r.jsx)(c.GE, {
        value: es,
        children: (0, r.jsx)(E, {
            theme: g,
            flags: J,
            saturation: w,
            density: Z,
            children: (0, r.jsx)(k, {
                lang: _,
                theme: g,
                density: Z,
                focused: D,
                fontScale: P,
                fontScaleClass: M,
                keyboardModeEnabled: U,
                mouseMode: Q,
                saturation: w,
                desaturateUserColors: G,
                useForcedColors: x,
                systemForcedColors: B,
                useReducedMotion: X,
                alwaysShowLinkDecorations: z,
                hardwareAccelerationEnabled: u,
                highContrastMode: q,
                isPopoutWindow: s,
                rootClassName: l()(ea, {
                    "refresh-fast-follow-avatars": ee,
                    "refresh-fast-follow-guild-bg": et,
                    "refresh-fast-follow-distinct-borders": en,
                }),
                children: i,
            }),
        }),
    });
}
