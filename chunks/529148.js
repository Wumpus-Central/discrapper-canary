(n.d(t, { e: () => $ }), n(321073));
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
    v = n(657043),
    P = n(723702);
let M = (0, g.mj)({
    kind: "user",
    name: "2026-10-mana-badge-refresh",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var U = n(354328),
    w = n(964404),
    G = n(611635);
function x(e) {
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
        L = window.CSS.supports("selector(::-webkit-scrollbar)"),
        y = (0, o.bG)([A.Ay], () => A.Ay.zoom),
        x = O ? "" : `--custom-zoom: ${y};`,
        k = (0, U.A)("highlight_mana_buttons"),
        F = (0, U.A)("highlight_mana_components"),
        B = (0, U.A)("highlight_mana_text"),
        V = (0, U.A)("highlight_void_toggleables"),
        H = (0, U.A)("highlight_void_buttons"),
        j = (0, U.A)("highlight_mana_text_overrides");
    (a.useEffect(() => {
        if (!B) return;
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
    }, [B]),
        a.useEffect(() => {
            if (!j) return;
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
        }, [j]));
    let W = (0, o.bG)([w.Ay], () => w.Ay.hdrDynamicRange),
        Y = (0, v.BX)("RootElementContextProvider"),
        K = M.useConfig({ location: "RootElementContextProvider" }).enabled,
        $ = `font-size: ${_}%; --saturation-factor: ${I}; dynamic-range-limit: ${W}; ${x}`,
        X = l()(
            ((t = ""),
            (0, P.uF)()
                ? (t = "platform-win")
                : (0, P.cX)()
                  ? (t = "platform-osx")
                  : (0, P.j9)()
                    ? (t = "platform-linux")
                    : (0, P.HZ)() && (t = "platform-web"),
            __OVERLAY__ ? `${t} platform-overlay` : t),
            (0, b.m)(d),
            `density-${c}`,
            E,
            {
                "low-saturation": I <= 0.4,
                "keyboard-mode": h,
                "decorate-links": S,
                "no-webkit-scrollbar": !L,
                "has-webkit-scrollbar": L,
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
                "highlight-mana-buttons": k,
                "highlight-mana-components": F,
                "highlight-mana-text": B,
                "highlight-mana-text-overrides": j,
                "highlight-void-toggleables": V,
                "highlight-void-buttons": H,
                "high-contrast-mode": C,
                "enlarge-target-size": Y,
                "mana-badge-refresh": K,
            },
            i,
        ),
        z = a.useMemo(() => ({ lang: s, style: $, className: X, focused: u }), [s, $, X, u]);
    return (0, r.jsx)(G.q.Provider, { value: z, children: R });
}
var k = n(95498),
    F = n(613412),
    B = n(116833),
    V = n(449275),
    H = n(989395),
    j = n(750506),
    W = n(738098),
    Y = n(792996);
let K = { Modal: F.ImpressionTypes.MODAL };
function $(e) {
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
            useForcedColors: F,
            systemForcedColors: $,
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
        ea = (0, f.m2)({ isPopoutWindow: s, hasChannelTabs: er });
    a.useEffect(() => {
        s || L.Ay.setTrafficLightPosition(er ? { x: 14, y: 14 } : { x: 9, y: 9 });
    }, [s, er]);
    let es = (function (e) {
        let { theme: t, saturation: n, enabledExperiments: i, focused: r, mainWindowVisible: s, locale: l } = e,
            o = a.useContext(H.A),
            d = a.useCallback(
                (e) => {
                    let { componentName: t, payload: n } = e;
                    o(
                        {
                            type: n.impressionType ?? K[t],
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
                    (await (0, k.waitForAllDefaultIntlMessagesLoaded)(), t());
                })();
                let n = Y.intl.onLocaleChange(t),
                    i = (0, V.I)(t);
                return () => {
                    ((e = !1), n(), i());
                };
            }, []),
            a.useMemo(
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
                        TEXT_INPUT_VIEW_PASSWORD: Y.intl.string(Y.t.nFzpM5),
                        TEXT_INPUT_HIDE_PASSWORD: Y.intl.string(Y.t.Nusip4),
                        TEXT_INPUT_PASSWORD_VISIBLE: Y.intl.string(Y.t.agstwg),
                        TEXT_INPUT_PASSWORD_HIDDEN: Y.intl.string(Y.t.SHvAer),
                        CHARACTER_COUNT_LIMIT_REACHED: Y.intl.string(Y.t.c2Jqed),
                        CHARACTER_COUNT_A11Y_LABEL: (e) =>
                            Y.intl.formatToPlainString(Y.t.fR1cof, { remainingCharacters: e }),
                        MINIMUM_LENGTH_ERROR: (e) => Y.intl.formatToPlainString(Y.t["62rk1K"], { minLength: e }),
                        MAXIMUM_LENGTH_ERROR: (e) => Y.intl.formatToPlainString(Y.t.ICT5S6, { maxLength: e }),
                        MINIMUM_VALUE_ERROR: (e) => Y.intl.formatToPlainString(Y.t.ykmNSo, { min: e }),
                        MAXIMUM_VALUE_ERROR: (e) => Y.intl.formatToPlainString(Y.t.KiDDCk, { max: e }),
                        GLOBAL_BANNER_COUNTDOWN_TIME_LEFT: (e) =>
                            Y.intl.formatToPlainString(W.default.ody6zm, { time: e }),
                    },
                    locale: l,
                    theme: t,
                    saturation: n,
                    defaultLayerContext: j.uY,
                    experiments: { enabledExperiments: i },
                    trackImpression: d,
                    isWindowFocused: () => r,
                    isMainWindowVisible: () => s,
                    dynamicGraphicComponents: B.Q,
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
            children: (0, r.jsx)(x, {
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
                useForcedColors: F,
                systemForcedColors: $,
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
