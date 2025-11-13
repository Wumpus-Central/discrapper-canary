n.d(t, { Z: () => R });
var r = n(951288),
    i = n(647438),
    a = n(512722),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(660216),
    u = n(825209),
    d = n(706454),
    f = n(494620),
    _ = n(131951),
    p = n(556296),
    h = n(924557),
    m = n(435064),
    g = n(894694),
    E = n(779618),
    b = n(39604),
    y = n(356659),
    O = n(981631),
    v = n(37113),
    I = n(388032),
    T = n(556865);
function S(e, t, n) {
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
function A(e) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
function C(e, t) {
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
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : C(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function R() {
    let {
            clipsEnabled: e,
            remindersEnabled: t,
            decoupledClipsEnabled: n,
            clipsLength: a,
            clipsQuality: S,
        } = (0, s.cj)([m.Z], () => m.Z.getSettings()),
        C = (0, s.e7)([m.Z], () => m.Z.getHardwareClassification()),
        R = (0, s.e7)([p.ZP], () => p.ZP.getKeybindForAction(O.kg4.SAVE_CLIP, !0)),
        P = (0, s.e7)([p.ZP], () => p.ZP.getKeybindForAction(O.kg4.SAVE_SCREENSHOT, !0)),
        D = m.Z.isDecoupledGameClippingEnabled(),
        w = (0, E.Z)(_.Z),
        { showClipsHeaderEntrypoint: x } = h.NV.useExperiment(
            { location: "clips_recording_settings" },
            { autoTrackExposure: !1 },
        ),
        L = (0, h.PP)();
    o()(null != R, "Save clip keybind unset"), o()(null != P, "Save screenshot keybind unset");
    let M = (0, s.e7)([d.default], () => d.default.locale),
        j = i.useMemo(
            () => [
                {
                    value: y.OT.SECONDS_30,
                    label: I.intl.formatToPlainString(I.t["bTFv/3"], { count: 30 }),
                },
                {
                    value: y.OT.MINUTES_1,
                    label: I.intl.formatToPlainString(I.t.ICo9Nk, { count: 1 }),
                },
                {
                    value: y.OT.MINUTES_2,
                    label: I.intl.formatToPlainString(I.t.ICo9Nk, { count: 2 }),
                },
            ],
            [M],
        ),
        k = i.useMemo(
            () => [
                {
                    value: v.ApplicationStreamResolutions.RESOLUTION_480,
                    label: I.intl.formatToPlainString(I.t.TEOC0I, {
                        resolution: v.ApplicationStreamResolutions.RESOLUTION_480,
                    }),
                },
                {
                    value: v.ApplicationStreamResolutions.RESOLUTION_720,
                    label: I.intl.formatToPlainString(I.t.TEOC0I, {
                        resolution: v.ApplicationStreamResolutions.RESOLUTION_720,
                    }),
                },
                {
                    value: v.ApplicationStreamResolutions.RESOLUTION_1080,
                    label: I.intl.formatToPlainString(I.t.TEOC0I, {
                        resolution: v.ApplicationStreamResolutions.RESOLUTION_1080,
                    }),
                },
                {
                    value: v.ApplicationStreamResolutions.RESOLUTION_1440,
                    label: I.intl.formatToPlainString(I.t.TEOC0I, {
                        resolution: v.ApplicationStreamResolutions.RESOLUTION_1440,
                    }),
                },
                {
                    value: v.ApplicationStreamResolutions.RESOLUTION_SOURCE,
                    label: I.intl.string(I.t.XjXqzh),
                },
            ],
            [M],
        ),
        U = i.useMemo(
            () => [
                {
                    value: v.ApplicationStreamFPS.FPS_15,
                    label: I.intl.formatToPlainString(I.t.Qb44XH, { fps: v.ApplicationStreamFPS.FPS_15 }),
                },
                {
                    value: v.ApplicationStreamFPS.FPS_30,
                    label: I.intl.formatToPlainString(I.t.Qb44XH, { fps: v.ApplicationStreamFPS.FPS_30 }),
                },
                {
                    value: v.ApplicationStreamFPS.FPS_60,
                    label: I.intl.formatToPlainString(I.t.Qb44XH, { fps: v.ApplicationStreamFPS.FPS_60 }),
                },
            ],
            [M],
        ),
        G = i.useCallback(
            (e) => {
                c.Z.setKeybind(N(A({}, R), { shortcut: e }));
            },
            [R],
        ),
        B = i.useCallback(
            (e) => {
                c.Z.setKeybind(N(A({}, P), { shortcut: e }));
            },
            [P],
        );
    return (0, r.jsxs)(l.C3N, {
        children: [
            (0, r.jsx)(f.Z, { children: I.intl.string(I.t["Z+MfqT"]) }),
            C === g.xH.BELOW_MINIMUM
                ? (0, r.jsx)(f.Z, {
                      look: f.z.WARNING,
                      children: I.intl.string(I.t.SIxrIF),
                  })
                : null,
            (0, r.jsx)(l.rsf, {
                label: I.intl.string(I.t.h8rgrK),
                description: I.intl.string(I.t["4Qw3NO"]),
                checked: e,
                onChange: (e) =>
                    b.em({
                        clipsEnabled: e,
                        trackAnalytics: !0,
                    }),
            }),
            D &&
                w &&
                (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(l.rsf, {
                        label: I.intl.string(I.t.yXvykv),
                        description: I.intl.string(I.t.YP3ujk),
                        checked: n,
                        onChange: (e) =>
                            b._Q({
                                enabled: e,
                                trackAnalytics: !0,
                            }),
                    }),
                }),
            x &&
                (0, r.jsx)(l.rsf, {
                    label: I.intl.string(I.t["3zwNf6"]),
                    description: I.intl.string(I.t.m4Cjj9),
                    checked: t,
                    onChange: (e) => b.N0(e),
                }),
            (0, r.jsx)(l.q4e, {
                onChange: b.eU,
                label: I.intl.string(I.t.OgfUio),
                description: I.intl.string(I.t.H7j4tY),
                value: a,
                options: j,
            }),
            (0, r.jsx)(l.q4e, {
                onChange: (e) =>
                    b.yi({
                        resolution: e,
                        frameRate: S.frameRate,
                    }),
                label: I.intl.string(I.t.aFudZJ),
                description: I.intl.string(I.t.nIrkW5),
                value: S.resolution,
                options: k,
            }),
            (0, r.jsx)(l.q4e, {
                onChange: (e) =>
                    b.yi({
                        resolution: S.resolution,
                        frameRate: e,
                    }),
                label: I.intl.string(I.t["2wScL1"]),
                description: I.intl.string(I.t["Rf9+fy"]),
                value: S.frameRate,
                options: U,
            }),
            (0, r.jsx)(l.gNt, {
                label: I.intl.string(I.t.pf54EU),
                description: I.intl.string(I.t["QyB/jK"]),
                layout: "horizontal",
                children: (0, r.jsx)("div", {
                    className: T.keyRecorder,
                    children: (0, r.jsx)(u.Z, {
                        defaultValue: R.shortcut,
                        onChange: G,
                    }),
                }),
            }),
            L &&
                (0, r.jsx)(l.gNt, {
                    label: I.intl.string(I.t["0U/hj7"]),
                    description: I.intl.string(I.t["5zxkdo"]),
                    layout: "horizontal",
                    children: (0, r.jsx)("div", {
                        className: T.keyRecorder,
                        children: (0, r.jsx)(u.Z, {
                            defaultValue: P.shortcut,
                            onChange: B,
                        }),
                    }),
                }),
        ],
    });
}
