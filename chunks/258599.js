"use strict";
n.d(t, { e: () => k }), n(321073);
var i,
    r = n(627968),
    s = n(64700),
    a = n(919523),
    o = n(503698),
    l = n.n(o),
    u = n(562708),
    c = n(17928),
    d = n(116833);
n(938796);
var _ =
        (((i = {})[(i.MOBILE_DARK_GRADIENT_THEME_ENABLED = 4)] = "MOBILE_DARK_GRADIENT_THEME_ENABLED"),
        (i[(i.MOBILE_LIGHT_GRADIENT_THEME_ENABLED = 8)] = "MOBILE_LIGHT_GRADIENT_THEME_ENABLED"),
        (i[(i.REDUCED_CONTRAST_ENABLED = 16)] = "REDUCED_CONTRAST_ENABLED"),
        (i[(i.INCREASED_CONTRAST_ENABLED = 32)] = "INCREASED_CONTRAST_ENABLED"),
        (i[(i.REDUCE_SATURATION_ENABLED = 64)] = "REDUCE_SATURATION_ENABLED"),
        i),
    h = n(460890),
    f = n(38021),
    p = n(818348);
function E(e) {
    let {
            children: t,
            theme: n = p.NJ.DARK,
            primaryColor: i = null,
            secondaryColor: a = null,
            gradient: o = null,
            flags: l = 0,
            contrast: u = 1,
            saturation: c = 1,
            density: d = "compact",
            disableAdaptiveTheme: _ = !1,
            reduceAdaptiveTheme: h = !1,
        } = e,
        E = s.useMemo(
            () =>
                (0, f.dI)({
                    theme: n,
                    primaryColor: i,
                    secondaryColor: a,
                    gradient: o,
                    flags: l,
                    contrast: u,
                    saturation: c,
                    density: d,
                    disableAdaptiveTheme: _,
                    reduceAdaptiveTheme: h,
                }),
            [n, i, a, o, l, u, c, d, _, h],
        );
    return (0, r.jsx)(f.Dx.Provider, { value: E, children: t });
}
var m = n(775602),
    g = n(989395),
    A = n(71855),
    I = n(267102),
    T = n(652215);
let S = ["Shift", "Alt", "Meta", "Control"];
var y = n(534409);
let C = (0, n(945810).mj)({
    name: "2026-05-mana-type-consolidation",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var N = n(750506),
    v = n(869146),
    R = n(773669),
    O = n(363195),
    b = n(531685),
    D = n(19575),
    L = n(418842),
    w = n(597619),
    M = n(571247),
    P = n(375708);
let x = { Modal: u.ImpressionTypes.MODAL };
function k(e) {
    let { windowKey: t, themeOverride: n, children: i } = e,
        o = null != t,
        [u] = s.useState(() => D.Ay.getEnableHardwareAcceleration()),
        {
            locale: f,
            theme: p,
            focused: k,
            mainWindowVisible: U,
            currentWindow: G,
            fontScale: F,
            fontScaleClass: V,
            keyboardModeEnabled: B,
            saturation: j,
            desaturateUserColors: H,
            useForcedColors: Y,
            systemForcedColors: W,
            useReducedMotion: K,
            alwaysShowLinkDecorations: $,
            highContrastMode: z,
        } = (0, c.cf)([R.default, m.Ay, O.A, v.A, b.A], () => ({
            locale: R.default.locale,
            theme: n ?? O.A.theme,
            focused: o ? v.A.getWindowFocused(t) : b.A.isFocused(),
            mainWindowVisible: b.A.isVisible(),
            currentWindow: o ? (v.A.getWindow(t) ?? window) : window,
            fontScale: m.Ay.fontScale,
            fontScaleClass: m.Ay.fontScaleClass,
            keyboardModeEnabled: m.Ay.keyboardModeEnabled,
            saturation: m.Ay.saturation,
            desaturateUserColors: m.Ay.desaturateUserColors,
            useForcedColors: m.Ay.useForcedColors,
            systemForcedColors: m.Ay.systemForcedColors,
            useReducedMotion: m.Ay.useReducedMotion,
            alwaysShowLinkDecorations: m.Ay.alwaysShowLinkDecorations,
            highContrastMode: m.Ay.isHighContrastModeEnabled,
        })),
        q = (function (e, t) {
            let [n, i] = s.useState(0),
                r = (0, I.aL)();
            s.useEffect(() => {
                function e() {
                    return i((e) => e + 1);
                }
                function t() {
                    return i((e) => Math.max(0, e - 1));
                }
                return (
                    r.subscribe(T.jej.POPOUT_SHOW, e),
                    r.subscribe(T.jej.POPOUT_HIDE, t),
                    () => {
                        r.unsubscribe(T.jej.POPOUT_SHOW, e), r.unsubscribe(T.jej.POPOUT_HIDE, t);
                    }
                );
            }, [r]);
            let [a, o] = s.useState(!1);
            return (
                s.useLayoutEffect(() => {
                    function i(e) {
                        (!t || n > 0) && a
                            ? o(!1)
                            : (!a && n > 0) ||
                              (e instanceof KeyboardEvent &&
                                  (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || S.indexOf(e.key) >= 0)) ||
                              o((e) => !e);
                    }
                    let r = a ? "keyup" : "mousemove";
                    return t && e.addEventListener(r, i), () => e?.removeEventListener(r, i);
                }, [e, a, n, t]),
                t && 0 === n && a
            );
        })(G, __OVERLAY__ || k),
        Z = 0;
    1 !== j && (Z |= _.REDUCE_SATURATION_ENABLED);
    let X = (0, L.C)(),
        Q = (0, y.qK)("RootThemeContextProvider"),
        J = (0, y.k5)("RootThemeContextProvider"),
        ee = (0, y.lV)("RootThemeContextProvider"),
        et = C.useConfig({ location: "RootThemeContextProvider" }).enabled,
        en = (0, A.m2)({ isPopoutWindow: o }),
        ei = (function (e) {
            let { theme: t, saturation: n, enabledExperiments: i, focused: r, mainWindowVisible: o, locale: l } = e,
                u = s.useContext(g.A),
                c = s.useCallback(
                    (e) => {
                        let { componentName: t, payload: n } = e;
                        u(
                            {
                                type: n.impressionType ?? x[t],
                                name: n.impression?.impressionName,
                                properties: n.impression?.impressionProperties,
                            },
                            { disableTrack: n.disableTrack },
                        );
                    },
                    [u],
                ),
                _ = s.useCallback(
                    () => ({
                        i18n: {
                            CANCEL: P.intl.string(P.t["ETE/oC"]),
                            BACK: P.intl.string(P.t["13/7kX"]),
                            NEXT: P.intl.string(P.t.PDTjLN),
                            SUBMIT: P.intl.string(P.t.geKm7t),
                            SPINNER_LOADING_LABEL: P.intl.string(P.t.ZTNur7),
                            BUTTON_LOADING_STARTED_LABEL: P.intl.string(P.t.pfChQr),
                            BUTTON_LOADING_FINISHED_LABEL: P.intl.string(P.t.SVParY),
                            CLOSE_BUTTON_LABEL: P.intl.string(P.t.cpT0Cq),
                            PLAY_BUTTON_LABEL: P.intl.string(P.t.RscU7I),
                            PAUSE_BUTTON_LABEL: P.intl.string(P.t.ZcgDJX),
                            NEW: P.intl.string(P.t.y2b7CA),
                            BETA: P.intl.string(P.t.oW0eUd),
                            EARLY_ACCESS: P.intl.string(P.t.EYxi0o),
                            BILLING_TRIAL_FREE_TRIAL_TEXT: P.intl.string(P.t.IBYG5U),
                            MODAL_DONT_SHOW_AGAIN: P.intl.string(M.default.m3Vfcs),
                            LISTBOX_EMPTY_STATE: P.intl.string(M.default.db85vU),
                            LISTBOX_EMPTY_STATE_WITH_QUERY: (e) =>
                                P.intl.formatToPlainString(M.default.bPKiId, { query: e }),
                            KEY_CTRL_A11Y_LABEL: P.intl.string(P.t.jm6v8i),
                            KEY_CMD_A11Y_LABEL: P.intl.string(P.t.pYkiQq),
                            KEY_ALT_A11Y_LABEL: P.intl.string(P.t.R2n7d3),
                            KEY_OPTION_A11Y_LABEL: P.intl.string(P.t.FMYSJY),
                            KEY_SHIFT: P.intl.string(P.t["L+jWo5"]),
                            KEY_SHIFT_A11Y_LABEL: P.intl.string(P.t["q+/2+S"]),
                            KEY_UP_A11Y_LABEL: P.intl.string(P.t.HxzHDb),
                            KEY_DOWN_A11Y_LABEL: P.intl.string(P.t["a+iRlH"]),
                            KEY_LEFT_A11Y_LABEL: P.intl.string(P.t.xFjIVC),
                            KEY_RIGHT_A11Y_LABEL: P.intl.string(P.t["BT3jf/"]),
                            KEY_PAGEUP: P.intl.string(P.t.VdCWGI),
                            KEY_PAGEDOWN: P.intl.string(P.t.gpSh3U),
                            KEY_ANY: P.intl.string(P.t.CkGpcV),
                            KEY_ENTER: P.intl.string(P.t.SUweGy),
                            KEY_ENTER_A11Y_LABEL: P.intl.string(P.t.yLNala),
                            KEY_RETURN_A11Y_LABEL: P.intl.string(P.t.V7nPj0),
                            KEY_ESCAPE: P.intl.string(P.t.cQmsQF),
                            KEY_ESCAPE_A11Y_LABEL: P.intl.string(P.t["2qsw5/"]),
                            KEY_BACKSPACE: P.intl.string(P.t["L+36+h"]),
                            KEY_BACKSPACE_A11Y_LABEL: P.intl.string(P.t["9c/Ikv"]),
                            KEY_DELETE_A11Y_LABEL: P.intl.string(P.t.BTFDmq),
                            DATE_INPUT_OPEN_CALENDAR_LABEL: P.intl.string(M.default.I8kUqR),
                            CALENDAR_PREVIOUS_MONTH_LABEL: P.intl.string(M.default.raS6yf),
                            CALENDAR_NEXT_MONTH_LABEL: P.intl.string(M.default["/cp93l"]),
                            INLINE_NOTICE_GENERIC_ERROR: P.intl.string(P.t["rTU7/z"]),
                            STEP_INDICATOR: (e, t) =>
                                P.intl.formatToPlainString(M.default["v2YSk/"], { stepNumber: e, stepCount: t }),
                            SELECT_PLACEHOLDER: P.intl.string(M.default["A+pfVR"]),
                            CLEAR_SELECTION: P.intl.string(M.default.JA5C7L),
                            SELECTED_TAGS_HEADING: P.intl.string(M.default.VMNfsY),
                            PERCENT_COMPLETE: (e) => P.intl.formatToPlainString(M.default["2L/ygS"], { percent: e }),
                        },
                        locale: l,
                        theme: t,
                        saturation: n,
                        defaultLayerContext: N.uY,
                        experiments: { enabledExperiments: i },
                        trackImpression: c,
                        isWindowFocused: () => r,
                        isMainWindowVisible: () => o,
                        dynamicGraphicComponents: d.Q,
                    }),
                    [t, n, i, c, r, o, l],
                ),
                [h, f] = s.useState(_);
            return (
                s.useLayoutEffect(() => {
                    function e() {
                        f(_);
                    }
                    (0, a.waitForAllDefaultIntlMessagesLoaded)().then(e), P.intl.onLocaleChange(e);
                }, [_]),
                h
            );
        })({
            theme: p,
            saturation: j,
            enabledExperiments: s.useMemo(() => {
                let e = [];
                return (
                    Q && e.push("refresh-fast-follow-avatars"),
                    J && e.push("refresh-fast-follow-guild-bg"),
                    ee && e.push("refresh-fast-follow-distinct-borders"),
                    et && e.push("mana-type-consolidation"),
                    e
                );
            }, [Q, J, ee, et]),
            focused: k,
            mainWindowVisible: U,
            locale: f,
        });
    return (0, r.jsx)(h.GE, {
        value: ei,
        children: (0, r.jsx)(E, {
            theme: p,
            flags: Z,
            saturation: j,
            density: X,
            children: (0, r.jsx)(w.fs, {
                lang: f,
                theme: p,
                density: X,
                focused: k,
                fontScale: F,
                fontScaleClass: V,
                keyboardModeEnabled: B,
                mouseMode: q,
                saturation: j,
                desaturateUserColors: H,
                useForcedColors: Y,
                systemForcedColors: W,
                useReducedMotion: K,
                alwaysShowLinkDecorations: $,
                hardwareAccelerationEnabled: u,
                highContrastMode: z,
                isPopoutWindow: o,
                rootClassName: l()(en, {
                    "refresh-fast-follow-avatars": Q,
                    "refresh-fast-follow-guild-bg": J,
                    "refresh-fast-follow-distinct-borders": ee,
                }),
                children: i,
            }),
        }),
    });
}
