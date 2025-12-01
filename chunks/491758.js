n.d(t, { Z: () => w });
var r = n(54381),
    i = n(473749),
    a = n(512722),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(660216),
    u = n(825209),
    d = n(706454),
    f = n(494620),
    p = n(131951),
    _ = n(556296),
    m = n(358085),
    h = n(924557),
    g = n(435064),
    E = n(894694),
    b = n(779618),
    y = n(341569),
    O = n(39604),
    v = n(356659),
    S = n(981631),
    I = n(37113),
    T = n(388032),
    A = n(556865);
function C(e, t, n) {
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
function N(e) {
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
                C(e, t, n[t]);
            });
    }
    return e;
}
function P(e, t) {
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
            : P(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function w() {
    let e = (0, y.nq)(),
        t = (0, y.z8)(),
        n = (0, m.isWindows)(),
        { remindersEnabled: a, clipsLength: C, clipsQuality: P } = (0, s.cj)([g.Z], () => g.Z.getSettings()),
        w = (0, s.e7)([g.Z], () => g.Z.getHardwareClassification()),
        D = (0, s.e7)([_.ZP], () => _.ZP.getKeybindForAction(S.kg4.SAVE_CLIP, !0)),
        x = (0, s.e7)([_.ZP], () => _.ZP.getKeybindForAction(S.kg4.SAVE_SCREENSHOT, !0)),
        L = (0, b.Z)(p.Z),
        { showClipsHeaderEntrypoint: j } = h.NV.useExperiment(
            { location: "clips_recording_settings" },
            { autoTrackExposure: !1 },
        ),
        M = (0, h.PP)();
    o()(null != D, "Save clip keybind unset"), o()(null != x, "Save screenshot keybind unset");
    let k = (0, s.e7)([d.default], () => d.default.locale),
        U = i.useMemo(
            () => [
                {
                    value: v.OT.SECONDS_30,
                    label: T.intl.formatToPlainString(T.t["bTFv/3"], { count: 30 }),
                },
                {
                    value: v.OT.MINUTES_1,
                    label: T.intl.formatToPlainString(T.t.ICo9Nk, { count: 1 }),
                },
                {
                    value: v.OT.MINUTES_2,
                    label: T.intl.formatToPlainString(T.t.ICo9Nk, { count: 2 }),
                },
            ],
            [k],
        ),
        G = i.useMemo(
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
            [k],
        ),
        Z = i.useMemo(
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
            [k],
        ),
        B = i.useCallback(
            (e) => {
                c.Z.setKeybind(R(N({}, D), { shortcut: e }));
            },
            [D],
        ),
        F = i.useCallback(
            (e) => {
                c.Z.setKeybind(R(N({}, x), { shortcut: e }));
            },
            [x],
        );
    return (0, r.jsxs)(l.C3N, {
        children: [
            (0, r.jsx)(f.Z, { children: T.intl.string(T.t["Z+MfqT"]) }),
            w === E.xH.BELOW_MINIMUM
                ? (0, r.jsx)(f.Z, {
                      look: f.z.WARNING,
                      children: T.intl.string(T.t.SIxrIF),
                  })
                : null,
            (0, r.jsx)(l.rsf, {
                label: T.intl.string(T.t.h8rgrK),
                description: T.intl.string(T.t["4Qw3NO"]),
                checked: t,
                onChange: (e) =>
                    O.em({
                        clipsEnabled: e,
                        trackAnalytics: !0,
                    }),
            }),
            n &&
                L &&
                (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(l.rsf, {
                        label: T.intl.string(T.t.yXvykv),
                        description: T.intl.string(T.t.YP3ujk),
                        checked: e,
                        onChange: (e) =>
                            O._Q({
                                enabled: e,
                                trackAnalytics: !0,
                            }),
                    }),
                }),
            j &&
                (0, r.jsx)(l.rsf, {
                    label: T.intl.string(T.t["3zwNf6"]),
                    description: T.intl.string(T.t.m4Cjj9),
                    checked: a,
                    onChange: (e) => O.N0(e),
                }),
            (0, r.jsx)(l.q4e, {
                onChange: O.eU,
                label: T.intl.string(T.t.OgfUio),
                description: T.intl.string(T.t.H7j4tY),
                value: C,
                options: U,
            }),
            (0, r.jsx)(l.q4e, {
                onChange: (e) =>
                    O.yi({
                        resolution: e,
                        frameRate: P.frameRate,
                    }),
                label: T.intl.string(T.t.aFudZJ),
                description: T.intl.string(T.t.nIrkW5),
                value: P.resolution,
                options: G,
            }),
            (0, r.jsx)(l.q4e, {
                onChange: (e) =>
                    O.yi({
                        resolution: P.resolution,
                        frameRate: e,
                    }),
                label: T.intl.string(T.t["2wScL1"]),
                description: T.intl.string(T.t["Rf9+fy"]),
                value: P.frameRate,
                options: Z,
            }),
            (0, r.jsx)(l.gNt, {
                label: T.intl.string(T.t.pf54EU),
                description: T.intl.string(T.t["QyB/jK"]),
                layout: "horizontal",
                children: (0, r.jsx)("div", {
                    className: A.keyRecorder,
                    children: (0, r.jsx)(u.Z, {
                        defaultValue: D.shortcut,
                        onChange: B,
                    }),
                }),
            }),
            M &&
                (0, r.jsx)(l.gNt, {
                    label: T.intl.string(T.t["0U/hj7"]),
                    description: T.intl.string(T.t["5zxkdo"]),
                    layout: "horizontal",
                    children: (0, r.jsx)("div", {
                        className: A.keyRecorder,
                        children: (0, r.jsx)(u.Z, {
                            defaultValue: x.shortcut,
                            onChange: F,
                        }),
                    }),
                }),
        ],
    });
}
