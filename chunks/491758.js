n.d(t, { Z: () => D });
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
    h = n(358085),
    m = n(924557),
    g = n(435064),
    E = n(894694),
    b = n(779618),
    y = n(341569),
    O = n(39604),
    v = n(356659),
    I = n(981631),
    T = n(37113),
    S = n(388032),
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
function R(e, t) {
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
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : R(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function D() {
    let e = (0, y.nq)(),
        t = (0, y.z8)(),
        n = (0, h.isWindows)(),
        { remindersEnabled: a, clipsLength: C, clipsQuality: R } = (0, s.cj)([g.Z], () => g.Z.getSettings()),
        D = (0, s.e7)([g.Z], () => g.Z.getHardwareClassification()),
        w = (0, s.e7)([p.ZP], () => p.ZP.getKeybindForAction(I.kg4.SAVE_CLIP, !0)),
        x = (0, s.e7)([p.ZP], () => p.ZP.getKeybindForAction(I.kg4.SAVE_SCREENSHOT, !0)),
        L = (0, b.Z)(_.Z),
        { showClipsHeaderEntrypoint: M } = m.NV.useExperiment(
            { location: "clips_recording_settings" },
            { autoTrackExposure: !1 },
        ),
        k = (0, m.PP)();
    o()(null != w, "Save clip keybind unset"), o()(null != x, "Save screenshot keybind unset");
    let j = (0, s.e7)([d.default], () => d.default.locale),
        U = i.useMemo(
            () => [
                {
                    value: v.OT.SECONDS_30,
                    label: S.intl.formatToPlainString(S.t["bTFv/3"], { count: 30 }),
                },
                {
                    value: v.OT.MINUTES_1,
                    label: S.intl.formatToPlainString(S.t.ICo9Nk, { count: 1 }),
                },
                {
                    value: v.OT.MINUTES_2,
                    label: S.intl.formatToPlainString(S.t.ICo9Nk, { count: 2 }),
                },
            ],
            [j],
        ),
        G = i.useMemo(
            () => [
                {
                    value: T.ApplicationStreamResolutions.RESOLUTION_480,
                    label: S.intl.formatToPlainString(S.t.TEOC0I, {
                        resolution: T.ApplicationStreamResolutions.RESOLUTION_480,
                    }),
                },
                {
                    value: T.ApplicationStreamResolutions.RESOLUTION_720,
                    label: S.intl.formatToPlainString(S.t.TEOC0I, {
                        resolution: T.ApplicationStreamResolutions.RESOLUTION_720,
                    }),
                },
                {
                    value: T.ApplicationStreamResolutions.RESOLUTION_1080,
                    label: S.intl.formatToPlainString(S.t.TEOC0I, {
                        resolution: T.ApplicationStreamResolutions.RESOLUTION_1080,
                    }),
                },
                {
                    value: T.ApplicationStreamResolutions.RESOLUTION_1440,
                    label: S.intl.formatToPlainString(S.t.TEOC0I, {
                        resolution: T.ApplicationStreamResolutions.RESOLUTION_1440,
                    }),
                },
                {
                    value: T.ApplicationStreamResolutions.RESOLUTION_SOURCE,
                    label: S.intl.string(S.t.XjXqzh),
                },
            ],
            [j],
        ),
        B = i.useMemo(
            () => [
                {
                    value: T.ApplicationStreamFPS.FPS_15,
                    label: S.intl.formatToPlainString(S.t.Qb44XH, { fps: T.ApplicationStreamFPS.FPS_15 }),
                },
                {
                    value: T.ApplicationStreamFPS.FPS_30,
                    label: S.intl.formatToPlainString(S.t.Qb44XH, { fps: T.ApplicationStreamFPS.FPS_30 }),
                },
                {
                    value: T.ApplicationStreamFPS.FPS_60,
                    label: S.intl.formatToPlainString(S.t.Qb44XH, { fps: T.ApplicationStreamFPS.FPS_60 }),
                },
            ],
            [j],
        ),
        Z = i.useCallback(
            (e) => {
                c.Z.setKeybind(P(N({}, w), { shortcut: e }));
            },
            [w],
        ),
        F = i.useCallback(
            (e) => {
                c.Z.setKeybind(P(N({}, x), { shortcut: e }));
            },
            [x],
        );
    return (0, r.jsxs)(l.C3N, {
        children: [
            (0, r.jsx)(f.Z, { children: S.intl.string(S.t["Z+MfqT"]) }),
            D === E.xH.BELOW_MINIMUM
                ? (0, r.jsx)(f.Z, {
                      look: f.z.WARNING,
                      children: S.intl.string(S.t.SIxrIF),
                  })
                : null,
            (0, r.jsx)(l.rsf, {
                label: S.intl.string(S.t.h8rgrK),
                description: S.intl.string(S.t["4Qw3NO"]),
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
                        label: S.intl.string(S.t.yXvykv),
                        description: S.intl.string(S.t.YP3ujk),
                        checked: e,
                        onChange: (e) =>
                            O._Q({
                                enabled: e,
                                trackAnalytics: !0,
                            }),
                    }),
                }),
            M &&
                (0, r.jsx)(l.rsf, {
                    label: S.intl.string(S.t["3zwNf6"]),
                    description: S.intl.string(S.t.m4Cjj9),
                    checked: a,
                    onChange: (e) => O.N0(e),
                }),
            (0, r.jsx)(l.q4e, {
                onChange: O.eU,
                label: S.intl.string(S.t.OgfUio),
                description: S.intl.string(S.t.H7j4tY),
                value: C,
                options: U,
            }),
            (0, r.jsx)(l.q4e, {
                onChange: (e) =>
                    O.yi({
                        resolution: e,
                        frameRate: R.frameRate,
                    }),
                label: S.intl.string(S.t.aFudZJ),
                description: S.intl.string(S.t.nIrkW5),
                value: R.resolution,
                options: G,
            }),
            (0, r.jsx)(l.q4e, {
                onChange: (e) =>
                    O.yi({
                        resolution: R.resolution,
                        frameRate: e,
                    }),
                label: S.intl.string(S.t["2wScL1"]),
                description: S.intl.string(S.t["Rf9+fy"]),
                value: R.frameRate,
                options: B,
            }),
            (0, r.jsx)(l.gNt, {
                label: S.intl.string(S.t.pf54EU),
                description: S.intl.string(S.t["QyB/jK"]),
                layout: "horizontal",
                children: (0, r.jsx)("div", {
                    className: A.keyRecorder,
                    children: (0, r.jsx)(u.Z, {
                        defaultValue: w.shortcut,
                        onChange: Z,
                    }),
                }),
            }),
            k &&
                (0, r.jsx)(l.gNt, {
                    label: S.intl.string(S.t["0U/hj7"]),
                    description: S.intl.string(S.t["5zxkdo"]),
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
