(n.d(t, { e: () => x }), n(321073));
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
    E = n(460890),
    A = n(812743),
    h = n(38021);
function I(e) {
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
        I = a.useMemo(
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
    return (0, r.jsx)(h.Dx.Provider, { value: I, children: t });
}
var f = n(775602),
    p = n(989395),
    T = n(71855),
    m = n(267102),
    g = n(652215);
let S = ["Shift", "Alt", "Meta", "Control"];
var N = n(973283),
    C = n(534409),
    O = n(37537),
    R = n(750506),
    L = n(869146),
    y = n(773669),
    D = n(363195),
    v = n(531685),
    b = n(19575),
    M = n(418842),
    P = n(597619),
    U = n(314341),
    w = n(375708);
let G = { Modal: d.ImpressionTypes.MODAL };
function x(e) {
    let { windowKey: t, themeOverride: n, children: i } = e,
        l = null != t,
        [d] = a.useState(() => b.Ay.getEnableHardwareAcceleration()),
        {
            locale: A,
            theme: h,
            focused: x,
            mainWindowVisible: k,
            currentWindow: F,
            fontScale: B,
            fontScaleClass: V,
            keyboardModeEnabled: H,
            saturation: j,
            desaturateUserColors: W,
            useForcedColors: Y,
            systemForcedColors: K,
            useReducedMotion: $,
            alwaysShowLinkDecorations: z,
            highContrastMode: X,
        } = (0, c.cf)([y.default, f.Ay, D.A, L.A, v.A], () => ({
            locale: y.default.locale,
            theme: n ?? D.A.theme,
            focused: l ? L.A.getWindowFocused(t) : v.A.isFocused(),
            mainWindowVisible: v.A.isVisible(),
            currentWindow: l ? (L.A.getWindow(t) ?? window) : window,
            fontScale: f.Ay.fontScale,
            fontScaleClass: f.Ay.fontScaleClass,
            keyboardModeEnabled: f.Ay.keyboardModeEnabled,
            saturation: f.Ay.saturation,
            desaturateUserColors: f.Ay.desaturateUserColors,
            useForcedColors: f.Ay.useForcedColors,
            systemForcedColors: f.Ay.systemForcedColors,
            useReducedMotion: f.Ay.useReducedMotion,
            alwaysShowLinkDecorations: f.Ay.alwaysShowLinkDecorations,
            highContrastMode: f.Ay.isHighContrastModeEnabled,
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
        })(F, __OVERLAY__ || x),
        Z = 0;
    1 !== j && (Z |= _.REDUCE_SATURATION_ENABLED);
    let Q = (0, M.C)(),
        J = (0, C.qK)("RootThemeContextProvider"),
        ee = (0, C.k5)("RootThemeContextProvider"),
        et = (0, C.lV)("RootThemeContextProvider"),
        en = (0, O.c)("RootThemeContextProvider"),
        ei = (0, N.D)("RootThemeContextProvider"),
        er = (0, T.m2)({ isPopoutWindow: l }),
        ea = (function (e) {
            let { theme: t, saturation: n, enabledExperiments: i, focused: r, mainWindowVisible: l, locale: o } = e,
                d = a.useContext(p.A),
                c = a.useCallback(
                    (e) => {
                        let { componentName: t, payload: n } = e;
                        d(
                            {
                                type: n.impressionType ?? G[t],
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
                            CANCEL: w.intl.string(w.t["ETE/oC"]),
                            BACK: w.intl.string(w.t["13/7kX"]),
                            NEXT: w.intl.string(w.t.PDTjLN),
                            SUBMIT: w.intl.string(w.t.geKm7t),
                            SPINNER_LOADING_LABEL: w.intl.string(w.t.ZTNur7),
                            BUTTON_LOADING_STARTED_LABEL: w.intl.string(w.t.pfChQr),
                            BUTTON_LOADING_FINISHED_LABEL: w.intl.string(w.t.SVParY),
                            CLOSE_BUTTON_LABEL: w.intl.string(w.t.cpT0Cq),
                            DISMISS_BUTTON_LABEL: w.intl.string(w.t.WAI6xu),
                            PLAY_BUTTON_LABEL: w.intl.string(w.t.RscU7I),
                            PAUSE_BUTTON_LABEL: w.intl.string(w.t.ZcgDJX),
                            NEW: w.intl.string(w.t.y2b7CA),
                            BETA: w.intl.string(w.t.oW0eUd),
                            EARLY_ACCESS: w.intl.string(w.t.EYxi0o),
                            BILLING_TRIAL_FREE_TRIAL_TEXT: w.intl.string(w.t.IBYG5U),
                            MODAL_DONT_SHOW_AGAIN: w.intl.string(U.default.m3Vfcs),
                            SEARCH: w.intl.string(w.t["5h0QOP"]),
                            AUTOCOMPLETE_NO_RESULTS_HEADER: w.intl.string(w.t["4o4z3e"]),
                            AUTOCOMPLETE_NO_RESULTS_BODY: w.intl.string(w.t.QwSXv8),
                            LISTBOX_EMPTY_STATE: w.intl.string(U.default.db85vU),
                            LISTBOX_EMPTY_STATE_WITH_QUERY: (e) =>
                                w.intl.formatToPlainString(U.default.bPKiId, { query: e }),
                            KEY_CTRL_A11Y_LABEL: w.intl.string(w.t.jm6v8i),
                            KEY_CMD_A11Y_LABEL: w.intl.string(w.t.pYkiQq),
                            KEY_ALT_A11Y_LABEL: w.intl.string(w.t.R2n7d3),
                            KEY_OPTION_A11Y_LABEL: w.intl.string(w.t.FMYSJY),
                            KEY_SHIFT: w.intl.string(w.t["L+jWo5"]),
                            KEY_SHIFT_A11Y_LABEL: w.intl.string(w.t["q+/2+S"]),
                            KEY_UP_A11Y_LABEL: w.intl.string(w.t.HxzHDb),
                            KEY_DOWN_A11Y_LABEL: w.intl.string(w.t["a+iRlH"]),
                            KEY_LEFT_A11Y_LABEL: w.intl.string(w.t.xFjIVC),
                            KEY_RIGHT_A11Y_LABEL: w.intl.string(w.t["BT3jf/"]),
                            KEY_PAGEUP: w.intl.string(w.t.VdCWGI),
                            KEY_PAGEDOWN: w.intl.string(w.t.gpSh3U),
                            KEY_ANY: w.intl.string(w.t.CkGpcV),
                            KEY_ENTER: w.intl.string(w.t.SUweGy),
                            KEY_ENTER_A11Y_LABEL: w.intl.string(w.t.yLNala),
                            KEY_RETURN_A11Y_LABEL: w.intl.string(w.t.V7nPj0),
                            KEY_ESCAPE: w.intl.string(w.t.cQmsQF),
                            KEY_ESCAPE_A11Y_LABEL: w.intl.string(w.t["2qsw5/"]),
                            KEY_BACKSPACE: w.intl.string(w.t["L+36+h"]),
                            KEY_BACKSPACE_A11Y_LABEL: w.intl.string(w.t["9c/Ikv"]),
                            KEY_DELETE_A11Y_LABEL: w.intl.string(w.t.BTFDmq),
                            DATE_INPUT_OPEN_CALENDAR_LABEL: w.intl.string(U.default.I8kUqR),
                            CALENDAR_PREVIOUS_MONTH_LABEL: w.intl.string(U.default.raS6yf),
                            CALENDAR_NEXT_MONTH_LABEL: w.intl.string(U.default["/cp93l"]),
                            INLINE_NOTICE_GENERIC_ERROR: w.intl.string(w.t["rTU7/z"]),
                            FEEDBACK_CRITICAL_ICON_A11Y_LABEL: w.intl.string(U.default.uKMqrF),
                            FEEDBACK_WARNING_ICON_A11Y_LABEL: w.intl.string(U.default["7vL/d/"]),
                            FEEDBACK_INFO_ICON_A11Y_LABEL: w.intl.string(U.default.BReS7U),
                            FEEDBACK_POSITIVE_ICON_A11Y_LABEL: w.intl.string(U.default["1MXXPf"]),
                            STEP_INDICATOR: (e, t) =>
                                w.intl.formatToPlainString(U.default["v2YSk/"], { stepNumber: e, stepCount: t }),
                            SELECT_PLACEHOLDER: w.intl.string(U.default["A+pfVR"]),
                            CLEAR_SELECTION: w.intl.string(U.default.JA5C7L),
                            SELECTED_TAGS_HEADING: w.intl.string(U.default.VMNfsY),
                            PRESS_DELETE_TO_REMOVE_TAG: w.intl.string(U.default["/Y7vRd"]),
                            PERCENT_COMPLETE: (e) => w.intl.formatToPlainString(U.default["2L/ygS"], { percent: e }),
                            TEXT_INPUT_CLEAR: w.intl.string(w.t.VkKicb),
                            CHARACTER_COUNT_LIMIT_REACHED: w.intl.string(w.t.c2Jqed),
                            CHARACTER_COUNT_A11Y_LABEL: (e) =>
                                w.intl.formatToPlainString(w.t.fR1cof, { remainingCharacters: e }),
                            MINIMUM_LENGTH_ERROR: (e) => w.intl.formatToPlainString(w.t["62rk1K"], { minLength: e }),
                            MAXIMUM_LENGTH_ERROR: (e) => w.intl.formatToPlainString(w.t.ICT5S6, { maxLength: e }),
                            MINIMUM_VALUE_ERROR: (e) => w.intl.formatToPlainString(w.t.ykmNSo, { min: e }),
                            MAXIMUM_VALUE_ERROR: (e) => w.intl.formatToPlainString(w.t.KiDDCk, { max: e }),
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
                    ((0, s.waitForAllDefaultIntlMessagesLoaded)().then(e), w.intl.onLocaleChange(e));
                }, [_]),
                E
            );
        })({
            theme: h,
            saturation: j,
            enabledExperiments: a.useMemo(() => {
                let e = [];
                return (
                    J && e.push("refresh-fast-follow-avatars"),
                    ee && e.push("refresh-fast-follow-guild-bg"),
                    et && e.push("refresh-fast-follow-distinct-borders"),
                    en && e.push("mana-type-consolidation"),
                    ei && e.push("mana-notification-components"),
                    e
                );
            }, [J, ee, et, en, ei]),
            focused: x,
            mainWindowVisible: k,
            locale: A,
        });
    return (0, r.jsx)(E.GE, {
        value: ea,
        children: (0, r.jsx)(I, {
            theme: h,
            flags: Z,
            saturation: j,
            density: Q,
            children: (0, r.jsx)(P.fs, {
                lang: A,
                theme: h,
                density: Q,
                focused: x,
                fontScale: B,
                fontScaleClass: V,
                keyboardModeEnabled: H,
                mouseMode: q,
                saturation: j,
                desaturateUserColors: W,
                useForcedColors: Y,
                systemForcedColors: K,
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
