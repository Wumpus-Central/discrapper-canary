n.d(t, { Z: () => P }), n(388685), n(35282), n(781311);
var r = n(951288),
    i = n(647438),
    a = n(512722),
    o = n.n(a),
    s = n(392711),
    l = n(442837),
    c = n(481060),
    u = n(660216),
    d = n(825209),
    f = n(706454),
    _ = n(494620),
    p = n(131951),
    h = n(556296),
    m = n(924557),
    g = n(435064),
    E = n(894694),
    b = n(779618),
    y = n(39604),
    O = n(356659),
    v = n(981631),
    I = n(37113),
    T = n(388032),
    S = n(298291);
function A(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                A(e, t, n[t]);
            });
    }
    return e;
}
function N(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : N(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function P() {
    let {
            clipsEnabled: e,
            remindersEnabled: t,
            decoupledClipsEnabled: n,
            clipsLength: a,
            clipsQuality: A,
            autoClipPhrases: N,
        } = (0, l.cj)([g.Z], () => g.Z.getSettings()),
        P = (0, l.e7)([g.Z], () => g.Z.getHardwareClassification()),
        w = (0, l.e7)([h.ZP], () => h.ZP.getKeybindForAction(v.kg4.SAVE_CLIP, !0)),
        D = (0, l.e7)([h.ZP], () => h.ZP.getKeybindForAction(v.kg4.SAVE_SCREENSHOT, !0)),
        [x, L] = i.useState(N.join(", ")),
        M = g.Z.isDecoupledGameClippingEnabled(),
        k = (0, b.Z)(p.Z),
        { showClipsHeaderEntrypoint: j, enableAdvancedSignals: U } = m.NV.useExperiment(
            { location: "clips_recording_settings" },
            { autoTrackExposure: !1 },
        ),
        G = (0, m.PP)();
    o()(null != w, "Save clip keybind unset"), o()(null != D, "Save screenshot keybind unset");
    let B = (0, l.e7)([f.default], () => f.default.locale),
        Z = i.useMemo(
            () =>
                (0, s.debounce)((e) => {
                    let t = e
                        .split(",")
                        .map((e) => e.trim())
                        .filter((e) => e.length > 0);
                    y.a2(t);
                }, 200),
            [],
        ),
        F = i.useCallback(
            (e) => {
                L(e), Z(e);
            },
            [Z],
        ),
        V = i.useMemo(
            () => [
                {
                    value: O.OT.SECONDS_30,
                    label: T.intl.formatToPlainString(T.t["bTFv/3"], { count: 30 }),
                },
                {
                    value: O.OT.MINUTES_1,
                    label: T.intl.formatToPlainString(T.t.ICo9Nk, { count: 1 }),
                },
                {
                    value: O.OT.MINUTES_2,
                    label: T.intl.formatToPlainString(T.t.ICo9Nk, { count: 2 }),
                },
            ],
            [B],
        ),
        H = i.useMemo(
            () => [
                {
                    value: I.ApplicationStreamResolutions.RESOLUTION_480,
                    label: T.intl.formatToPlainString(T.t.TEOC0I, {
                        resolution: I.ApplicationStreamResolutions.RESOLUTION_480,
                    }),
                },
                {
                    value: I.ApplicationStreamResolutions.RESOLUTION_720,
                    label: T.intl.formatToPlainString(T.t.TEOC0I, {
                        resolution: I.ApplicationStreamResolutions.RESOLUTION_720,
                    }),
                },
                {
                    value: I.ApplicationStreamResolutions.RESOLUTION_1080,
                    label: T.intl.formatToPlainString(T.t.TEOC0I, {
                        resolution: I.ApplicationStreamResolutions.RESOLUTION_1080,
                    }),
                },
                {
                    value: I.ApplicationStreamResolutions.RESOLUTION_1440,
                    label: T.intl.formatToPlainString(T.t.TEOC0I, {
                        resolution: I.ApplicationStreamResolutions.RESOLUTION_1440,
                    }),
                },
                {
                    value: I.ApplicationStreamResolutions.RESOLUTION_SOURCE,
                    label: T.intl.string(T.t.XjXqzh),
                },
            ],
            [B],
        ),
        Y = i.useMemo(
            () => [
                {
                    value: I.ApplicationStreamFPS.FPS_15,
                    label: T.intl.formatToPlainString(T.t.Qb44XH, { fps: I.ApplicationStreamFPS.FPS_15 }),
                },
                {
                    value: I.ApplicationStreamFPS.FPS_30,
                    label: T.intl.formatToPlainString(T.t.Qb44XH, { fps: I.ApplicationStreamFPS.FPS_30 }),
                },
                {
                    value: I.ApplicationStreamFPS.FPS_60,
                    label: T.intl.formatToPlainString(T.t.Qb44XH, { fps: I.ApplicationStreamFPS.FPS_60 }),
                },
            ],
            [B],
        ),
        W = i.useCallback(
            (e) => {
                u.Z.setKeybind(R(C({}, w), { shortcut: e }));
            },
            [w],
        ),
        K = i.useCallback(
            (e) => {
                u.Z.setKeybind(R(C({}, D), { shortcut: e }));
            },
            [D],
        );
    return (0, r.jsxs)(c.Kqy, {
        gap: 24,
        children: [
            P === E.xH.BELOW_MINIMUM
                ? (0, r.jsx)(_.Z, {
                      look: _.z.WARNING,
                      children: T.intl.string(T.t.SIxrIF),
                  })
                : null,
            (0, r.jsx)(c.rsf, {
                label: T.intl.string(T.t.h8rgrK),
                description: T.intl.string(T.t["4Qw3NO"]),
                checked: e,
                onChange: (e) =>
                    y.em({
                        clipsEnabled: e,
                        trackAnalytics: !0,
                    }),
            }),
            (0, r.jsx)(_.Z, { children: T.intl.string(T.t["Z+MfqT"]) }),
            M &&
                k &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(c.izJ, {}),
                        (0, r.jsx)(c.rsf, {
                            label: T.intl.string(T.t.yXvykv),
                            description: T.intl.string(T.t.YP3ujk),
                            checked: n,
                            onChange: (e) =>
                                y._Q({
                                    enabled: e,
                                    trackAnalytics: !0,
                                }),
                        }),
                    ],
                }),
            j &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(c.izJ, {}),
                        (0, r.jsx)(c.rsf, {
                            label: T.intl.string(T.t["3zwNf6"]),
                            description: T.intl.string(T.t.m4Cjj9),
                            checked: t,
                            onChange: (e) => y.N0(e),
                        }),
                    ],
                }),
            (0, r.jsx)(c.izJ, {}),
            (0, r.jsxs)(c.Kqy, {
                gap: 24,
                children: [
                    (0, r.jsx)(c.q4e, {
                        onChange: y.eU,
                        label: T.intl.string(T.t.OgfUio),
                        description: T.intl.string(T.t.H7j4tY),
                        value: a,
                        options: V,
                    }),
                    (0, r.jsx)(c.q4e, {
                        onChange: (e) =>
                            y.yi({
                                resolution: e,
                                frameRate: A.frameRate,
                            }),
                        label: T.intl.string(T.t.aFudZJ),
                        description: T.intl.string(T.t.nIrkW5),
                        value: A.resolution,
                        options: H,
                    }),
                    (0, r.jsx)(c.q4e, {
                        onChange: (e) =>
                            y.yi({
                                resolution: A.resolution,
                                frameRate: e,
                            }),
                        label: T.intl.string(T.t["2wScL1"]),
                        description: T.intl.string(T.t["Rf9+fy"]),
                        value: A.frameRate,
                        options: Y,
                    }),
                    U &&
                        (0, r.jsx)(c.gNt, {
                            label: T.intl.string(T.t.JIze0o),
                            description: T.intl.string(T.t.dA2fYk),
                            layout: "vertical",
                            children: (0, r.jsx)(c.oil, {
                                value: x,
                                onChange: F,
                            }),
                        }),
                    (0, r.jsx)(c.gNt, {
                        label: T.intl.string(T.t.pf54EU),
                        description: T.intl.string(T.t["QyB/jK"]),
                        layout: "horizontal",
                        children: (0, r.jsx)("div", {
                            className: S.keyRecorder,
                            children: (0, r.jsx)(d.Z, {
                                defaultValue: w.shortcut,
                                onChange: W,
                            }),
                        }),
                    }),
                    G &&
                        (0, r.jsx)(c.gNt, {
                            label: T.intl.string(T.t["0U/hj7"]),
                            description: T.intl.string(T.t["5zxkdo"]),
                            layout: "horizontal",
                            children: (0, r.jsx)("div", {
                                className: S.keyRecorder,
                                children: (0, r.jsx)(d.Z, {
                                    defaultValue: D.shortcut,
                                    onChange: K,
                                }),
                            }),
                        }),
                ],
            }),
        ],
    });
}
