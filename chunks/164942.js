"use strict";
n.d(t, { e: () => k }), n(321073);
var i,
    r = n(627968),
    s = n(64700),
    a = n(919523),
    o = n(503698),
    l = n.n(o),
    d = n(17928),
    _ = n(116833);
n(938796);
var u =
        (((i = {})[(i.MOBILE_DARK_GRADIENT_THEME_ENABLED = 4)] = "MOBILE_DARK_GRADIENT_THEME_ENABLED"),
        (i[(i.MOBILE_LIGHT_GRADIENT_THEME_ENABLED = 8)] = "MOBILE_LIGHT_GRADIENT_THEME_ENABLED"),
        (i[(i.REDUCED_CONTRAST_ENABLED = 16)] = "REDUCED_CONTRAST_ENABLED"),
        (i[(i.INCREASED_CONTRAST_ENABLED = 32)] = "INCREASED_CONTRAST_ENABLED"),
        (i[(i.REDUCE_SATURATION_ENABLED = 64)] = "REDUCE_SATURATION_ENABLED"),
        i),
    c = n(460890),
    E = n(38021),
    h = n(818348);
function m(e) {
    let {
            children: t,
            theme: n = h.NJ.DARK,
            primaryColor: i = null,
            secondaryColor: a = null,
            gradient: o = null,
            flags: l = 0,
            contrast: d = 1,
            saturation: _ = 1,
            density: u = "compact",
            disableAdaptiveTheme: c = !1,
            reduceAdaptiveTheme: m = !1,
        } = e,
        f = s.useMemo(
            () =>
                (0, E.dI)({
                    theme: n,
                    primaryColor: i,
                    secondaryColor: a,
                    gradient: o,
                    flags: l,
                    contrast: d,
                    saturation: _,
                    density: u,
                    disableAdaptiveTheme: c,
                    reduceAdaptiveTheme: m,
                }),
            [n, i, a, o, l, d, _, u, c, m],
        );
    return (0, r.jsx)(E.Dx.Provider, { value: f, children: t });
}
var f = n(775602),
    g = n(989395),
    p = n(71855),
    A = n(267102),
    I = n(652215);
let T = ["Shift", "Alt", "Meta", "Control"];
var S = n(534409),
    N = n(614738),
    C = n(750506),
    R = n(869146),
    O = n(773669),
    y = n(363195),
    v = n(531685),
    D = n(19575),
    L = n(418842),
    b = n(597619),
    w = n(571247),
    P = n(985018);
function k(e) {
    let { windowKey: t, themeOverride: n, children: i } = e,
        o = null != t,
        [E] = s.useState(() => D.Ay.getEnableHardwareAcceleration()),
        {
            locale: h,
            theme: k,
            focused: M,
            currentWindow: U,
            fontScale: x,
            fontScaleClass: G,
            keyboardModeEnabled: V,
            saturation: F,
            desaturateUserColors: B,
            useForcedColors: H,
            systemForcedColors: j,
            useReducedMotion: W,
            alwaysShowLinkDecorations: Y,
            highContrastMode: K,
        } = (0, d.cf)([O.default, f.A, y.A, R.A, v.A], () => ({
            locale: O.default.locale,
            theme: n ?? y.A.theme,
            focused: o ? R.A.getWindowFocused(t) : v.A.isFocused(),
            currentWindow: o ? (R.A.getWindow(t) ?? window) : window,
            fontScale: f.A.fontScale,
            fontScaleClass: f.A.fontScaleClass,
            keyboardModeEnabled: f.A.keyboardModeEnabled,
            saturation: f.A.saturation,
            desaturateUserColors: f.A.desaturateUserColors,
            useForcedColors: f.A.useForcedColors,
            systemForcedColors: f.A.systemForcedColors,
            useReducedMotion: f.A.useReducedMotion,
            alwaysShowLinkDecorations: f.A.alwaysShowLinkDecorations,
            highContrastMode: f.A.isHighContrastModeEnabled,
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
        })(U, __OVERLAY__ || M),
        $ = 0;
    1 !== F && ($ |= u.REDUCE_SATURATION_ENABLED);
    let q = (0, L.C)(),
        X = (0, S.qK)("RootThemeContextProvider"),
        Z = (0, S.k5)("RootThemeContextProvider"),
        Q = (0, S.lV)("RootThemeContextProvider"),
        J = (0, N.y)("RootThemeContextProvider"),
        ee = (0, p.m2)({ isPopoutWindow: o }),
        et = (function (e, t, n, i, r) {
            let o = s.useContext(g.A),
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
                            MODAL_DONT_SHOW_AGAIN: P.intl.string(w.default.m3Vfcs),
                            LISTBOX_EMPTY_STATE: P.intl.string(w.default.db85vU),
                            LISTBOX_EMPTY_STATE_WITH_QUERY: (e) =>
                                P.intl.formatToPlainString(w.default.bPKiId, { query: e }),
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
                            DATE_INPUT_OPEN_CALENDAR_LABEL: P.intl.string(w.default.I8kUqR),
                            CALENDAR_PREVIOUS_MONTH_LABEL: P.intl.string(w.default.raS6yf),
                            CALENDAR_NEXT_MONTH_LABEL: P.intl.string(w.default["/cp93l"]),
                            INLINE_NOTICE_GENERIC_ERROR: P.intl.string(P.t["rTU7/z"]),
                            STEP_INDICATOR: (e, t) =>
                                P.intl.formatToPlainString(w.default["v2YSk/"], { stepNumber: e, stepCount: t }),
                            SELECT_PLACEHOLDER: P.intl.string(w.default["A+pfVR"]),
                            CLEAR_SELECTION: P.intl.string(w.default.JA5C7L),
                            SELECTED_TAGS_HEADING: P.intl.string(w.default.VMNfsY),
                            PERCENT_COMPLETE: (e) => P.intl.formatToPlainString(w.default["2L/ygS"], { percent: e }),
                        },
                        locale: r,
                        theme: e,
                        saturation: t,
                        defaultLayerContext: C.uY,
                        experiments: { enabledExperiments: n },
                        trackImpression: o,
                        isWindowFocused: () => i,
                        dynamicGraphicComponents: _.Q,
                    }),
                    [e, t, n, o, i, r],
                ),
                [d, u] = s.useState(l);
            return (
                s.useLayoutEffect(() => {
                    function e() {
                        u(l);
                    }
                    (0, a.waitForAllDefaultIntlMessagesLoaded)().then(e), P.intl.onLocaleChange(e);
                }, [l]),
                d
            );
        })(
            k,
            F,
            s.useMemo(() => {
                let e = [];
                return (
                    X && e.push("refresh-fast-follow-avatars"),
                    Z && e.push("refresh-fast-follow-guild-bg"),
                    Q && e.push("refresh-fast-follow-distinct-borders"),
                    J && e.push("mana-toggle-inputs"),
                    e
                );
            }, [X, Z, Q, J]),
            M,
            h,
        );
    return (0, r.jsx)(c.GE, {
        value: et,
        children: (0, r.jsx)(m, {
            theme: k,
            flags: $,
            saturation: F,
            density: q,
            children: (0, r.jsx)(b.fs, {
                lang: h,
                theme: k,
                density: q,
                focused: M,
                fontScale: x,
                fontScaleClass: G,
                keyboardModeEnabled: V,
                mouseMode: z,
                saturation: F,
                desaturateUserColors: B,
                useForcedColors: H,
                systemForcedColors: j,
                useReducedMotion: W,
                alwaysShowLinkDecorations: Y,
                hardwareAccelerationEnabled: E,
                highContrastMode: K,
                isPopoutWindow: o,
                rootClassName: l()(ee, {
                    "refresh-fast-follow-avatars": X,
                    "refresh-fast-follow-guild-bg": Z,
                    "refresh-fast-follow-distinct-borders": Q,
                }),
                children: i,
            }),
        }),
    });
}
