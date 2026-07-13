"use strict";
n.d(t, { e: () => G }), n(321073);
var i,
    r = n(627968),
    a = n(64700),
    s = n(919523),
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
    A = n(38021),
    h = n(818348);
function I(e) {
    let {
            children: t,
            theme: n = h.NJ.DARK,
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
                (0, A.dI)({
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
    return (0, r.jsx)(A.Dx.Provider, { value: I, children: t });
}
var f = n(775602),
    p = n(989395),
    T = n(71855),
    m = n(267102),
    g = n(652215);
let S = ["Shift", "Alt", "Meta", "Control"];
var N = n(534409);
let C = (0, n(945810).mj)({
    name: "2026-05-mana-type-consolidation",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var O = n(750506),
    R = n(869146),
    L = n(773669),
    D = n(363195),
    y = n(531685),
    v = n(19575),
    b = n(418842),
    M = n(597619),
    P = n(571247),
    U = n(375708);
let w = { Modal: d.ImpressionTypes.MODAL };
function G(e) {
    let { windowKey: t, themeOverride: n, children: i } = e,
        l = null != t,
        [d] = a.useState(() => v.Ay.getEnableHardwareAcceleration()),
        {
            locale: A,
            theme: h,
            focused: G,
            mainWindowVisible: x,
            currentWindow: k,
            fontScale: F,
            fontScaleClass: V,
            keyboardModeEnabled: B,
            saturation: H,
            desaturateUserColors: j,
            useForcedColors: W,
            systemForcedColors: Y,
            useReducedMotion: K,
            alwaysShowLinkDecorations: $,
            highContrastMode: z,
        } = (0, c.cf)([L.default, f.Ay, D.A, R.A, y.A], () => ({
            locale: L.default.locale,
            theme: n ?? D.A.theme,
            focused: l ? R.A.getWindowFocused(t) : y.A.isFocused(),
            mainWindowVisible: y.A.isVisible(),
            currentWindow: l ? (R.A.getWindow(t) ?? window) : window,
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
                        r.unsubscribe(g.jej.POPOUT_SHOW, e), r.unsubscribe(g.jej.POPOUT_HIDE, t);
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
                    return t && e.addEventListener(r, i), () => e?.removeEventListener(r, i);
                }, [e, s, n, t]),
                t && 0 === n && s
            );
        })(k, __OVERLAY__ || G),
        Z = 0;
    1 !== H && (Z |= _.REDUCE_SATURATION_ENABLED);
    let X = (0, b.C)(),
        Q = (0, N.qK)("RootThemeContextProvider"),
        J = (0, N.k5)("RootThemeContextProvider"),
        ee = (0, N.lV)("RootThemeContextProvider"),
        et = C.useConfig({ location: "RootThemeContextProvider" }).enabled,
        en = (0, T.m2)({ isPopoutWindow: l }),
        ei = (function (e) {
            let { theme: t, saturation: n, enabledExperiments: i, focused: r, mainWindowVisible: l, locale: o } = e,
                d = a.useContext(p.A),
                c = a.useCallback(
                    (e) => {
                        let { componentName: t, payload: n } = e;
                        d(
                            {
                                type: n.impressionType ?? w[t],
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
                            CANCEL: U.intl.string(U.t["ETE/oC"]),
                            BACK: U.intl.string(U.t["13/7kX"]),
                            NEXT: U.intl.string(U.t.PDTjLN),
                            SUBMIT: U.intl.string(U.t.geKm7t),
                            SPINNER_LOADING_LABEL: U.intl.string(U.t.ZTNur7),
                            BUTTON_LOADING_STARTED_LABEL: U.intl.string(U.t.pfChQr),
                            BUTTON_LOADING_FINISHED_LABEL: U.intl.string(U.t.SVParY),
                            CLOSE_BUTTON_LABEL: U.intl.string(U.t.cpT0Cq),
                            PLAY_BUTTON_LABEL: U.intl.string(U.t.RscU7I),
                            PAUSE_BUTTON_LABEL: U.intl.string(U.t.ZcgDJX),
                            NEW: U.intl.string(U.t.y2b7CA),
                            BETA: U.intl.string(U.t.oW0eUd),
                            EARLY_ACCESS: U.intl.string(U.t.EYxi0o),
                            BILLING_TRIAL_FREE_TRIAL_TEXT: U.intl.string(U.t.IBYG5U),
                            MODAL_DONT_SHOW_AGAIN: U.intl.string(P.default.m3Vfcs),
                            LISTBOX_EMPTY_STATE: U.intl.string(P.default.db85vU),
                            LISTBOX_EMPTY_STATE_WITH_QUERY: (e) =>
                                U.intl.formatToPlainString(P.default.bPKiId, { query: e }),
                            KEY_CTRL_A11Y_LABEL: U.intl.string(U.t.jm6v8i),
                            KEY_CMD_A11Y_LABEL: U.intl.string(U.t.pYkiQq),
                            KEY_ALT_A11Y_LABEL: U.intl.string(U.t.R2n7d3),
                            KEY_OPTION_A11Y_LABEL: U.intl.string(U.t.FMYSJY),
                            KEY_SHIFT: U.intl.string(U.t["L+jWo5"]),
                            KEY_SHIFT_A11Y_LABEL: U.intl.string(U.t["q+/2+S"]),
                            KEY_UP_A11Y_LABEL: U.intl.string(U.t.HxzHDb),
                            KEY_DOWN_A11Y_LABEL: U.intl.string(U.t["a+iRlH"]),
                            KEY_LEFT_A11Y_LABEL: U.intl.string(U.t.xFjIVC),
                            KEY_RIGHT_A11Y_LABEL: U.intl.string(U.t["BT3jf/"]),
                            KEY_PAGEUP: U.intl.string(U.t.VdCWGI),
                            KEY_PAGEDOWN: U.intl.string(U.t.gpSh3U),
                            KEY_ANY: U.intl.string(U.t.CkGpcV),
                            KEY_ENTER: U.intl.string(U.t.SUweGy),
                            KEY_ENTER_A11Y_LABEL: U.intl.string(U.t.yLNala),
                            KEY_RETURN_A11Y_LABEL: U.intl.string(U.t.V7nPj0),
                            KEY_ESCAPE: U.intl.string(U.t.cQmsQF),
                            KEY_ESCAPE_A11Y_LABEL: U.intl.string(U.t["2qsw5/"]),
                            KEY_BACKSPACE: U.intl.string(U.t["L+36+h"]),
                            KEY_BACKSPACE_A11Y_LABEL: U.intl.string(U.t["9c/Ikv"]),
                            KEY_DELETE_A11Y_LABEL: U.intl.string(U.t.BTFDmq),
                            DATE_INPUT_OPEN_CALENDAR_LABEL: U.intl.string(P.default.I8kUqR),
                            CALENDAR_PREVIOUS_MONTH_LABEL: U.intl.string(P.default.raS6yf),
                            CALENDAR_NEXT_MONTH_LABEL: U.intl.string(P.default["/cp93l"]),
                            INLINE_NOTICE_GENERIC_ERROR: U.intl.string(U.t["rTU7/z"]),
                            STEP_INDICATOR: (e, t) =>
                                U.intl.formatToPlainString(P.default["v2YSk/"], { stepNumber: e, stepCount: t }),
                            SELECT_PLACEHOLDER: U.intl.string(P.default["A+pfVR"]),
                            CLEAR_SELECTION: U.intl.string(P.default.JA5C7L),
                            SELECTED_TAGS_HEADING: U.intl.string(P.default.VMNfsY),
                            PERCENT_COMPLETE: (e) => U.intl.formatToPlainString(P.default["2L/ygS"], { percent: e }),
                        },
                        locale: o,
                        theme: t,
                        saturation: n,
                        defaultLayerContext: O.uY,
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
                    (0, s.waitForAllDefaultIntlMessagesLoaded)().then(e), U.intl.onLocaleChange(e);
                }, [_]),
                E
            );
        })({
            theme: h,
            saturation: H,
            enabledExperiments: a.useMemo(() => {
                let e = [];
                return (
                    Q && e.push("refresh-fast-follow-avatars"),
                    J && e.push("refresh-fast-follow-guild-bg"),
                    ee && e.push("refresh-fast-follow-distinct-borders"),
                    et && e.push("mana-type-consolidation"),
                    e
                );
            }, [Q, J, ee, et]),
            focused: G,
            mainWindowVisible: x,
            locale: A,
        });
    return (0, r.jsx)(E.GE, {
        value: ei,
        children: (0, r.jsx)(I, {
            theme: h,
            flags: Z,
            saturation: H,
            density: X,
            children: (0, r.jsx)(M.fs, {
                lang: A,
                theme: h,
                density: X,
                focused: G,
                fontScale: F,
                fontScaleClass: V,
                keyboardModeEnabled: B,
                mouseMode: q,
                saturation: H,
                desaturateUserColors: j,
                useForcedColors: W,
                systemForcedColors: Y,
                useReducedMotion: K,
                alwaysShowLinkDecorations: $,
                hardwareAccelerationEnabled: d,
                highContrastMode: z,
                isPopoutWindow: l,
                rootClassName: o()(en, {
                    "refresh-fast-follow-avatars": Q,
                    "refresh-fast-follow-guild-bg": J,
                    "refresh-fast-follow-distinct-borders": ee,
                    "mana-type-consolidation": et,
                }),
                children: i,
            }),
        }),
    });
}
