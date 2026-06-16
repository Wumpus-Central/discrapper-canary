"use strict";
n.d(t, { e: () => U }), n(321073);
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
var y = n(534409),
    C = n(614738);
let N = (0, n(945810).mj)({
    name: "2026-05-mana-type-consolidation",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var v = n(750506),
    R = n(869146),
    O = n(773669),
    b = n(363195),
    D = n(531685),
    L = n(19575),
    w = n(418842),
    M = n(597619),
    P = n(571247),
    x = n(375708);
let k = { Modal: u.ImpressionTypes.MODAL };
function U(e) {
    let { windowKey: t, themeOverride: n, children: i } = e,
        o = null != t,
        [u] = s.useState(() => L.Ay.getEnableHardwareAcceleration()),
        {
            locale: f,
            theme: p,
            focused: U,
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
        } = (0, c.cf)([O.default, m.Ay, b.A, R.A, D.A], () => ({
            locale: O.default.locale,
            theme: n ?? b.A.theme,
            focused: o ? R.A.getWindowFocused(t) : D.A.isFocused(),
            currentWindow: o ? (R.A.getWindow(t) ?? window) : window,
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
                let e = () => i((e) => e + 1),
                    t = () => i((e) => Math.max(0, e - 1));
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
                    let i = (e) => {
                            (!t || n > 0) && a
                                ? o(!1)
                                : (!a && n > 0) ||
                                  (e instanceof KeyboardEvent &&
                                      (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || S.indexOf(e.key) >= 0)) ||
                                  o((e) => !e);
                        },
                        r = a ? "keyup" : "mousemove";
                    return t && e.addEventListener(r, i), () => e?.removeEventListener(r, i);
                }, [e, a, n, t]),
                t && 0 === n && a
            );
        })(G, __OVERLAY__ || U),
        Z = 0;
    1 !== j && (Z |= _.REDUCE_SATURATION_ENABLED);
    let X = (0, w.C)(),
        Q = (0, y.qK)("RootThemeContextProvider"),
        J = (0, y.k5)("RootThemeContextProvider"),
        ee = (0, y.lV)("RootThemeContextProvider"),
        et = (0, C.y)("RootThemeContextProvider"),
        en = N.useConfig({ location: "RootThemeContextProvider" }).enabled,
        ei = (0, A.m2)({ isPopoutWindow: o }),
        er = (function (e, t, n, i, r) {
            let o = s.useContext(g.A),
                l = s.useCallback(
                    (e) => {
                        let { componentName: t, payload: n } = e;
                        o(
                            {
                                type: n.impressionType ?? k[t],
                                name: n.impression?.impressionName,
                                properties: n.impression?.impressionProperties,
                            },
                            { disableTrack: n.disableTrack },
                        );
                    },
                    [o],
                ),
                u = s.useCallback(
                    () => ({
                        i18n: {
                            CANCEL: x.intl.string(x.t["ETE/oC"]),
                            BACK: x.intl.string(x.t["13/7kX"]),
                            NEXT: x.intl.string(x.t.PDTjLN),
                            SUBMIT: x.intl.string(x.t.geKm7t),
                            SPINNER_LOADING_LABEL: x.intl.string(x.t.ZTNur7),
                            BUTTON_LOADING_STARTED_LABEL: x.intl.string(x.t.pfChQr),
                            BUTTON_LOADING_FINISHED_LABEL: x.intl.string(x.t.SVParY),
                            CLOSE_BUTTON_LABEL: x.intl.string(x.t.cpT0Cq),
                            PLAY_BUTTON_LABEL: x.intl.string(x.t.RscU7I),
                            PAUSE_BUTTON_LABEL: x.intl.string(x.t.ZcgDJX),
                            NEW: x.intl.string(x.t.y2b7CA),
                            BETA: x.intl.string(x.t.oW0eUd),
                            EARLY_ACCESS: x.intl.string(x.t.EYxi0o),
                            BILLING_TRIAL_FREE_TRIAL_TEXT: x.intl.string(x.t.IBYG5U),
                            MODAL_DONT_SHOW_AGAIN: x.intl.string(P.default.m3Vfcs),
                            LISTBOX_EMPTY_STATE: x.intl.string(P.default.db85vU),
                            LISTBOX_EMPTY_STATE_WITH_QUERY: (e) =>
                                x.intl.formatToPlainString(P.default.bPKiId, { query: e }),
                            KEY_CTRL_A11Y_LABEL: x.intl.string(x.t.jm6v8i),
                            KEY_CMD_A11Y_LABEL: x.intl.string(x.t.pYkiQq),
                            KEY_ALT_A11Y_LABEL: x.intl.string(x.t.R2n7d3),
                            KEY_OPTION_A11Y_LABEL: x.intl.string(x.t.FMYSJY),
                            KEY_SHIFT: x.intl.string(x.t["L+jWo5"]),
                            KEY_SHIFT_A11Y_LABEL: x.intl.string(x.t["q+/2+S"]),
                            KEY_UP_A11Y_LABEL: x.intl.string(x.t.HxzHDb),
                            KEY_DOWN_A11Y_LABEL: x.intl.string(x.t["a+iRlH"]),
                            KEY_LEFT_A11Y_LABEL: x.intl.string(x.t.xFjIVC),
                            KEY_RIGHT_A11Y_LABEL: x.intl.string(x.t["BT3jf/"]),
                            KEY_PAGEUP: x.intl.string(x.t.VdCWGI),
                            KEY_PAGEDOWN: x.intl.string(x.t.gpSh3U),
                            KEY_ANY: x.intl.string(x.t.CkGpcV),
                            KEY_ENTER: x.intl.string(x.t.SUweGy),
                            KEY_ENTER_A11Y_LABEL: x.intl.string(x.t.yLNala),
                            KEY_RETURN_A11Y_LABEL: x.intl.string(x.t.V7nPj0),
                            KEY_ESCAPE: x.intl.string(x.t.cQmsQF),
                            KEY_ESCAPE_A11Y_LABEL: x.intl.string(x.t["2qsw5/"]),
                            KEY_BACKSPACE: x.intl.string(x.t["L+36+h"]),
                            KEY_BACKSPACE_A11Y_LABEL: x.intl.string(x.t["9c/Ikv"]),
                            KEY_DELETE_A11Y_LABEL: x.intl.string(x.t.BTFDmq),
                            DATE_INPUT_OPEN_CALENDAR_LABEL: x.intl.string(P.default.I8kUqR),
                            CALENDAR_PREVIOUS_MONTH_LABEL: x.intl.string(P.default.raS6yf),
                            CALENDAR_NEXT_MONTH_LABEL: x.intl.string(P.default["/cp93l"]),
                            INLINE_NOTICE_GENERIC_ERROR: x.intl.string(x.t["rTU7/z"]),
                            STEP_INDICATOR: (e, t) =>
                                x.intl.formatToPlainString(P.default["v2YSk/"], { stepNumber: e, stepCount: t }),
                            SELECT_PLACEHOLDER: x.intl.string(P.default["A+pfVR"]),
                            CLEAR_SELECTION: x.intl.string(P.default.JA5C7L),
                            SELECTED_TAGS_HEADING: x.intl.string(P.default.VMNfsY),
                            PERCENT_COMPLETE: (e) => x.intl.formatToPlainString(P.default["2L/ygS"], { percent: e }),
                        },
                        locale: r,
                        theme: e,
                        saturation: t,
                        defaultLayerContext: v.uY,
                        experiments: { enabledExperiments: n },
                        trackImpression: l,
                        isWindowFocused: () => i,
                        dynamicGraphicComponents: d.Q,
                    }),
                    [e, t, n, l, i, r],
                ),
                [c, _] = s.useState(u);
            return (
                s.useLayoutEffect(() => {
                    function e() {
                        _(u);
                    }
                    (0, a.waitForAllDefaultIntlMessagesLoaded)().then(e), x.intl.onLocaleChange(e);
                }, [u]),
                c
            );
        })(
            p,
            j,
            s.useMemo(() => {
                let e = [];
                return (
                    Q && e.push("refresh-fast-follow-avatars"),
                    J && e.push("refresh-fast-follow-guild-bg"),
                    ee && e.push("refresh-fast-follow-distinct-borders"),
                    et && e.push("mana-toggle-inputs"),
                    en && e.push("mana-type-consolidation"),
                    e
                );
            }, [Q, J, ee, et, en]),
            U,
            f,
        );
    return (0, r.jsx)(h.GE, {
        value: er,
        children: (0, r.jsx)(E, {
            theme: p,
            flags: Z,
            saturation: j,
            density: X,
            children: (0, r.jsx)(M.fs, {
                lang: f,
                theme: p,
                density: X,
                focused: U,
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
                rootClassName: l()(ei, {
                    "refresh-fast-follow-avatars": Q,
                    "refresh-fast-follow-guild-bg": J,
                    "refresh-fast-follow-distinct-borders": ee,
                }),
                children: i,
            }),
        }),
    });
}
