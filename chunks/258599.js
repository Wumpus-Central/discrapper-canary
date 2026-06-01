"use strict";
n.d(t, { e: () => x }), n(321073);
var i,
    r = n(627968),
    s = n(64700),
    a = n(919523),
    o = n(503698),
    l = n.n(o),
    u = n(17928),
    c = n(116833);
n(938796);
var d =
        (((i = {})[(i.MOBILE_DARK_GRADIENT_THEME_ENABLED = 4)] = "MOBILE_DARK_GRADIENT_THEME_ENABLED"),
        (i[(i.MOBILE_LIGHT_GRADIENT_THEME_ENABLED = 8)] = "MOBILE_LIGHT_GRADIENT_THEME_ENABLED"),
        (i[(i.REDUCED_CONTRAST_ENABLED = 16)] = "REDUCED_CONTRAST_ENABLED"),
        (i[(i.INCREASED_CONTRAST_ENABLED = 32)] = "INCREASED_CONTRAST_ENABLED"),
        (i[(i.REDUCE_SATURATION_ENABLED = 64)] = "REDUCE_SATURATION_ENABLED"),
        i),
    _ = n(460890),
    h = n(38021),
    f = n(818348);
function p(e) {
    let {
            children: t,
            theme: n = f.NJ.DARK,
            primaryColor: i = null,
            secondaryColor: a = null,
            gradient: o = null,
            flags: l = 0,
            contrast: u = 1,
            saturation: c = 1,
            density: d = "compact",
            disableAdaptiveTheme: _ = !1,
            reduceAdaptiveTheme: p = !1,
        } = e,
        E = s.useMemo(
            () =>
                (0, h.dI)({
                    theme: n,
                    primaryColor: i,
                    secondaryColor: a,
                    gradient: o,
                    flags: l,
                    contrast: u,
                    saturation: c,
                    density: d,
                    disableAdaptiveTheme: _,
                    reduceAdaptiveTheme: p,
                }),
            [n, i, a, o, l, u, c, d, _, p],
        );
    return (0, r.jsx)(h.Dx.Provider, { value: E, children: t });
}
var E = n(775602),
    m = n(989395),
    g = n(71855),
    A = n(267102),
    I = n(652215);
let T = ["Shift", "Alt", "Meta", "Control"];
var S = n(534409),
    y = n(614738);
let N = (0, n(945810).mj)({
    name: "2026-05-mana-type-consolidation",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var v = n(750506),
    C = n(869146),
    R = n(773669),
    O = n(363195),
    b = n(531685),
    D = n(19575),
    L = n(418842),
    w = n(597619),
    M = n(571247),
    P = n(375708);
function x(e) {
    let { windowKey: t, themeOverride: n, children: i } = e,
        o = null != t,
        [h] = s.useState(() => D.Ay.getEnableHardwareAcceleration()),
        {
            locale: f,
            theme: x,
            focused: k,
            currentWindow: U,
            fontScale: G,
            fontScaleClass: F,
            keyboardModeEnabled: V,
            saturation: B,
            desaturateUserColors: H,
            useForcedColors: j,
            systemForcedColors: Y,
            useReducedMotion: W,
            alwaysShowLinkDecorations: K,
            highContrastMode: $,
        } = (0, u.cf)([R.default, E.A, O.A, C.A, b.A], () => ({
            locale: R.default.locale,
            theme: n ?? O.A.theme,
            focused: o ? C.A.getWindowFocused(t) : b.A.isFocused(),
            currentWindow: o ? (C.A.getWindow(t) ?? window) : window,
            fontScale: E.A.fontScale,
            fontScaleClass: E.A.fontScaleClass,
            keyboardModeEnabled: E.A.keyboardModeEnabled,
            saturation: E.A.saturation,
            desaturateUserColors: E.A.desaturateUserColors,
            useForcedColors: E.A.useForcedColors,
            systemForcedColors: E.A.systemForcedColors,
            useReducedMotion: E.A.useReducedMotion,
            alwaysShowLinkDecorations: E.A.alwaysShowLinkDecorations,
            highContrastMode: E.A.isHighContrastModeEnabled,
        })),
        z = (function (e, t) {
            let [n, i] = s.useState(0),
                r = (0, A.aL)();
            s.useEffect(() => {
                let e = () => i((e) => e + 1),
                    t = () => i((e) => Math.max(0, e - 1));
                return (
                    r.subscribe(I.jej.POPOUT_SHOW, e),
                    r.subscribe(I.jej.POPOUT_HIDE, t),
                    () => {
                        r.unsubscribe(I.jej.POPOUT_SHOW, e), r.unsubscribe(I.jej.POPOUT_HIDE, t);
                    }
                );
            }, [r]);
            let [a, o] = s.useState(!1);
            return (
                s.useLayoutEffect(() => {
                    let i = (e) => {
                            (!t || n > 0) && a
                                ? o(!1)
                                : (!a && n > 0) ||
                                  (e instanceof KeyboardEvent &&
                                      (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || T.indexOf(e.key) >= 0)) ||
                                  o((e) => !e);
                        },
                        r = a ? "keyup" : "mousemove";
                    return t && e.addEventListener(r, i), () => e?.removeEventListener(r, i);
                }, [e, a, n, t]),
                t && 0 === n && a
            );
        })(U, __OVERLAY__ || k),
        q = 0;
    1 !== B && (q |= d.REDUCE_SATURATION_ENABLED);
    let X = (0, L.C)(),
        Z = (0, S.qK)("RootThemeContextProvider"),
        Q = (0, S.k5)("RootThemeContextProvider"),
        J = (0, S.lV)("RootThemeContextProvider"),
        ee = (0, y.y)("RootThemeContextProvider"),
        et = N.useConfig({ location: "RootThemeContextProvider" }).enabled,
        en = (0, g.m2)({ isPopoutWindow: o }),
        ei = (function (e, t, n, i, r) {
            let o = s.useContext(m.A),
                l = s.useCallback(
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
                        locale: r,
                        theme: e,
                        saturation: t,
                        defaultLayerContext: v.uY,
                        experiments: { enabledExperiments: n },
                        trackImpression: o,
                        isWindowFocused: () => i,
                        dynamicGraphicComponents: c.Q,
                    }),
                    [e, t, n, o, i, r],
                ),
                [u, d] = s.useState(l);
            return (
                s.useLayoutEffect(() => {
                    function e() {
                        d(l);
                    }
                    (0, a.waitForAllDefaultIntlMessagesLoaded)().then(e), P.intl.onLocaleChange(e);
                }, [l]),
                u
            );
        })(
            x,
            B,
            s.useMemo(() => {
                let e = [];
                return (
                    Z && e.push("refresh-fast-follow-avatars"),
                    Q && e.push("refresh-fast-follow-guild-bg"),
                    J && e.push("refresh-fast-follow-distinct-borders"),
                    ee && e.push("mana-toggle-inputs"),
                    et && e.push("mana-type-consolidation"),
                    e
                );
            }, [Z, Q, J, ee, et]),
            k,
            f,
        );
    return (0, r.jsx)(_.GE, {
        value: ei,
        children: (0, r.jsx)(p, {
            theme: x,
            flags: q,
            saturation: B,
            density: X,
            children: (0, r.jsx)(w.fs, {
                lang: f,
                theme: x,
                density: X,
                focused: k,
                fontScale: G,
                fontScaleClass: F,
                keyboardModeEnabled: V,
                mouseMode: z,
                saturation: B,
                desaturateUserColors: H,
                useForcedColors: j,
                systemForcedColors: Y,
                useReducedMotion: W,
                alwaysShowLinkDecorations: K,
                hardwareAccelerationEnabled: h,
                highContrastMode: $,
                isPopoutWindow: o,
                rootClassName: l()(en, {
                    "refresh-fast-follow-avatars": Z,
                    "refresh-fast-follow-guild-bg": Q,
                    "refresh-fast-follow-distinct-borders": J,
                }),
                children: i,
            }),
        }),
    });
}
