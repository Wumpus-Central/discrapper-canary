n.d(t, { w: () => P }), n(388685), n(539854);
var r = n(54381),
    i = n(473749),
    a = n(354012),
    o = n(120356),
    s = n.n(o),
    l = n(442837),
    c = n(198168),
    u = n(481060),
    d = n(607070),
    f = n(299363),
    p = n(793903),
    _ = n(950796),
    h = n(392358),
    m = n(591146),
    g = n(877371),
    E = n(314910),
    b = n(928518),
    y = n(706454),
    O = n(210887),
    v = n(451478),
    S = n(998502),
    I = n(264783),
    T = n(892071),
    C = n(271860),
    A = n(388032);
function N(e, t, n, r, o) {
    let s = i.useContext(p.Z),
        l = i.useCallback(
            () => ({
                i18n: {
                    CANCEL: A.intl.string(A.t["ETE/oC"]),
                    BACK: A.intl.string(A.t["13/7kX"]),
                    NEXT: A.intl.string(A.t.PDTjLN),
                    SPINNER_LOADING_LABEL: A.intl.string(A.t.ZTNur7),
                    BUTTON_LOADING_STARTED_LABEL: A.intl.string(A.t.pfChQr),
                    BUTTON_LOADING_FINISHED_LABEL: A.intl.string(A.t.SVParY),
                    CLOSE_BUTTON_LABEL: A.intl.string(A.t.cpT0Cq),
                    PLAY_BUTTON_LABEL: A.intl.string(A.t.RscU7I),
                    PAUSE_BUTTON_LABEL: A.intl.string(A.t.ZcgDJX),
                    NEW: A.intl.string(A.t.y2b7CA),
                    BETA: A.intl.string(A.t.oW0eUd),
                    EARLY_ACCESS: A.intl.string(A.t.EYxi0o),
                    BILLING_TRIAL_FREE_TRIAL_TEXT: A.intl.string(A.t.IBYG5U),
                    MODAL_DONT_SHOW_AGAIN: A.intl.string(C.default.m3Vfcs),
                    LISTBOX_EMPTY_STATE: A.intl.string(C.default.db85vU),
                    LISTBOX_EMPTY_STATE_WITH_QUERY: (e) => A.intl.formatToPlainString(C.default.bPKiId, { query: e }),
                    KEY_CTRL_A11Y_LABEL: A.intl.string(A.t.jm6v8i),
                    KEY_CMD_A11Y_LABEL: A.intl.string(A.t.pYkiQq),
                    KEY_ALT_A11Y_LABEL: A.intl.string(A.t.R2n7d3),
                    KEY_OPTION_A11Y_LABEL: A.intl.string(A.t.FMYSJY),
                    KEY_SHIFT: A.intl.string(A.t["L+jWo5"]),
                    KEY_SHIFT_A11Y_LABEL: A.intl.string(A.t["q+/2+S"]),
                    KEY_UP_A11Y_LABEL: A.intl.string(A.t.HxzHDb),
                    KEY_DOWN_A11Y_LABEL: A.intl.string(A.t["a+iRlH"]),
                    KEY_LEFT_A11Y_LABEL: A.intl.string(A.t.xFjIVC),
                    KEY_RIGHT_A11Y_LABEL: A.intl.string(A.t["BT3jf/"]),
                    KEY_PAGEUP: A.intl.string(A.t.VdCWGI),
                    KEY_PAGEDOWN: A.intl.string(A.t.gpSh3U),
                    KEY_ANY: A.intl.string(A.t.CkGpcV),
                    KEY_ENTER: A.intl.string(A.t.SUweGy),
                    KEY_ENTER_A11Y_LABEL: A.intl.string(A.t.yLNala),
                    KEY_RETURN_A11Y_LABEL: A.intl.string(A.t.V7nPj0),
                    KEY_ESCAPE: A.intl.string(A.t.cQmsQF),
                    KEY_ESCAPE_A11Y_LABEL: A.intl.string(A.t["2qsw5/"]),
                    KEY_BACKSPACE: A.intl.string(A.t["L+36+h"]),
                    KEY_BACKSPACE_A11Y_LABEL: A.intl.string(A.t["9c/Ikv"]),
                    KEY_DELETE_A11Y_LABEL: A.intl.string(A.t.BTFDmq),
                    DATE_INPUT_OPEN_CALENDAR_LABEL: A.intl.string(C.default.I8kUqR),
                    CALENDAR_PREVIOUS_MONTH_LABEL: A.intl.string(C.default.raS6yf),
                    CALENDAR_NEXT_MONTH_LABEL: A.intl.string(C.default["/cp93l"]),
                    INLINE_NOTICE_GENERIC_ERROR: A.intl.string(A.t["rTU7/z"]),
                    STEP_INDICATOR: (e, t) =>
                        A.intl.formatToPlainString(C.default["v2YSk/"], {
                            stepNumber: e,
                            stepCount: t,
                        }),
                },
                locale: o,
                theme: e,
                saturation: t,
                defaultLayerContext: E.nz,
                experiments: { enabledExperiments: n },
                trackImpression: s,
                isWindowFocused: () => r,
                dynamicGraphicComponents: c._,
            }),
            [e, t, n, s, r, o],
        ),
        [u, d] = i.useState(l);
    return (
        i.useLayoutEffect(() => {
            function e() {
                d(l);
            }
            (0, a.waitForAllDefaultIntlMessagesLoaded)().then(e), A.intl.onLocaleChange(e);
        }, [l]),
        u
    );
}
function P(e) {
    let { windowKey: t, themeOverride: n, children: a } = e,
        o = null != t,
        [c] = i.useState(() => S.ZP.getEnableHardwareAcceleration()),
        {
            locale: p,
            theme: E,
            focused: C,
            currentWindow: A,
            fontScale: P,
            fontScaleClass: w,
            keyboardModeEnabled: R,
            saturation: D,
            desaturateUserColors: x,
            useForcedColors: L,
            systemForcedColors: j,
            useReducedMotion: M,
            alwaysShowLinkDecorations: k,
            highContrastMode: U,
        } = (0, l.cj)([y.default, d.Z, O.Z, b.Z, v.Z], () => {
            var e;
            return {
                locale: y.default.locale,
                theme: null != n ? n : O.Z.theme,
                focused: o ? b.Z.getWindowFocused(t) : v.Z.isFocused(),
                currentWindow: o && null != (e = b.Z.getWindow(t)) ? e : window,
                fontScale: d.Z.fontScale,
                fontScaleClass: d.Z.fontScaleClass,
                keyboardModeEnabled: d.Z.keyboardModeEnabled,
                saturation: d.Z.saturation,
                desaturateUserColors: d.Z.desaturateUserColors,
                useForcedColors: d.Z.useForcedColors,
                systemForcedColors: d.Z.systemForcedColors,
                useReducedMotion: d.Z.useReducedMotion,
                alwaysShowLinkDecorations: d.Z.alwaysShowLinkDecorations,
                highContrastMode: d.Z.isHighContrastModeEnabled,
            };
        }),
        G = f.U.useExperiment({ location: "RootThemeContextProvider" }, { autoTrackExposure: !0 }).enabled,
        Z = (0, h.Z)(A, __OVERLAY__ || C),
        F = 0;
    1 !== D && (F = (0, u.OdO)(F, u.bgu.REDUCE_SATURATION_ENABLED));
    let B = (0, I.A)(),
        V = (0, m.Ml)("RootThemeContextProvider"),
        H = (0, m.CL)("RootThemeContextProvider"),
        Y = (0, m.VM)("RootThemeContextProvider"),
        W = (0, g.A)("RootThemeContextProvider"),
        K = (0, _.On)({ isPopoutWindow: o }),
        z = N(
            E,
            D,
            i.useMemo(() => {
                let e = [];
                return (
                    V && e.push("refresh-fast-follow-avatars"),
                    H && e.push("refresh-fast-follow-guild-bg"),
                    Y && e.push("refresh-fast-follow-distinct-borders"),
                    W && e.push("mana-toggle-inputs"),
                    e
                );
            }, [V, H, Y, W]),
            C,
            p,
        );
    return (0, r.jsx)(u.kb5, {
        value: z,
        children: (0, r.jsx)(u.wMY, {
            theme: E,
            flags: F,
            saturation: D,
            density: B,
            children: (0, r.jsx)(T.cE, {
                lang: p,
                theme: E,
                density: B,
                focused: C,
                fontScale: P,
                fontScaleClass: w,
                keyboardModeEnabled: R,
                mouseMode: Z,
                saturation: D,
                desaturateUserColors: x,
                useForcedColors: L,
                systemForcedColors: j,
                useReducedMotion: M,
                alwaysShowLinkDecorations: k,
                hardwareAccelerationEnabled: c,
                highContrastMode: G && U,
                isPopoutWindow: o,
                rootClassName: s()(K, {
                    "refresh-fast-follow-avatars": V,
                    "refresh-fast-follow-guild-bg": H,
                    "refresh-fast-follow-distinct-borders": Y,
                }),
                children: a,
            }),
        }),
    });
}
