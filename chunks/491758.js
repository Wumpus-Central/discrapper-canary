n.d(t, { Z: () => R });
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
    h = n(358085),
    m = n(924557),
    g = n(435064),
    E = n(894694),
    b = n(779618),
    y = n(341569),
    O = n(39604),
    v = n(356659),
    S = n(981631),
    I = n(37113),
    T = n(388032),
    C = n(263753);
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
                A(e, t, n[t]);
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
function w(e, t) {
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
function R() {
    let e = (0, y.nq)(),
        t = (0, y.z8)(),
        n = (0, h.isWindows)(),
        { remindersEnabled: a, clipsLength: A, clipsQuality: P } = (0, s.cj)([g.Z], () => g.Z.getSettings()),
        R = (0, s.e7)([g.Z], () => g.Z.getHardwareClassification()),
        D = (0, s.e7)([_.ZP], () => _.ZP.getKeybindForAction(S.kg4.SAVE_CLIP, !0)),
        x = (0, s.e7)([_.ZP], () => _.ZP.getKeybindForAction(S.kg4.SAVE_SCREENSHOT, !0)),
        L = (0, b.Z)(p.Z),
        { showClipsHeaderEntrypoint: j } = m.NV.useExperiment(
            { location: "clips_recording_settings" },
            { autoTrackExposure: !1 },
        ),
        M = (0, m.PP)();
    o()(null != D, "Save clip keybind unset"), o()(null != x, "Save screenshot keybind unset");
    let k = (0, s.e7)([d.default], () => d.default.locale),
        U = i.useMemo(
            () => [
                {
                    id: "30sec",
                    value: v.OT.SECONDS_30,
                    label: T.intl.formatToPlainString(T.t["bTFv/3"], { count: 30 }),
                },
                {
                    id: "1min",
                    value: v.OT.MINUTES_1,
                    label: T.intl.formatToPlainString(T.t.ICo9Nk, { count: 1 }),
                },
                {
                    id: "2min",
                    value: v.OT.MINUTES_2,
                    label: T.intl.formatToPlainString(T.t.ICo9Nk, { count: 2 }),
                },
            ],
            [k],
        ),
        G = i.useMemo(
            () => [
                {
                    id: "480p",
                    value: I.LY.RESOLUTION_480,
                    label: T.intl.formatToPlainString(T.t.TEOC0I, { resolution: I.LY.RESOLUTION_480 }),
                },
                {
                    id: "720p",
                    value: I.LY.RESOLUTION_720,
                    label: T.intl.formatToPlainString(T.t.TEOC0I, { resolution: I.LY.RESOLUTION_720 }),
                },
                {
                    id: "1080p",
                    value: I.LY.RESOLUTION_1080,
                    label: T.intl.formatToPlainString(T.t.TEOC0I, { resolution: I.LY.RESOLUTION_1080 }),
                },
                {
                    id: "1440p",
                    value: I.LY.RESOLUTION_1440,
                    label: T.intl.formatToPlainString(T.t.TEOC0I, { resolution: I.LY.RESOLUTION_1440 }),
                },
                {
                    id: "source",
                    value: I.LY.RESOLUTION_SOURCE,
                    label: T.intl.string(T.t.XjXqzh),
                },
            ],
            [k],
        ),
        Z = i.useMemo(
            () => [
                {
                    id: "15fps",
                    value: I.ws.FPS_15,
                    label: T.intl.formatToPlainString(T.t.Qb44XH, { fps: I.ws.FPS_15 }),
                },
                {
                    id: "30fps",
                    value: I.ws.FPS_30,
                    label: T.intl.formatToPlainString(T.t.Qb44XH, { fps: I.ws.FPS_30 }),
                },
                {
                    id: "60fps",
                    value: I.ws.FPS_60,
                    label: T.intl.formatToPlainString(T.t.Qb44XH, { fps: I.ws.FPS_60 }),
                },
            ],
            [k],
        ),
        F = i.useCallback(
            (e) => {
                c.Z.setKeybind(w(N({}, D), { shortcut: e }));
            },
            [D],
        ),
        B = i.useCallback(
            (e) => {
                c.Z.setKeybind(w(N({}, x), { shortcut: e }));
            },
            [x],
        );
    return (0, r.jsxs)(l.C3N, {
        children: [
            (0, r.jsx)(f.Z, { children: T.intl.string(T.t["Z+MfqT"]) }),
            R === E.xH.BELOW_MINIMUM
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
            (0, r.jsx)(l.PhF, {
                onSelectionChange: O.eU,
                label: T.intl.string(T.t.OgfUio),
                description: T.intl.string(T.t.H7j4tY),
                value: A,
                options: U,
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, r.jsx)(l.PhF, {
                onSelectionChange: (e) => {
                    O.yi({
                        resolution: e,
                        frameRate: P.frameRate,
                    });
                },
                label: T.intl.string(T.t.aFudZJ),
                description: T.intl.string(T.t.nIrkW5),
                value: P.resolution,
                options: G,
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, r.jsx)(l.PhF, {
                onSelectionChange: (e) => {
                    O.yi({
                        resolution: P.resolution,
                        frameRate: e,
                    });
                },
                label: T.intl.string(T.t["2wScL1"]),
                description: T.intl.string(T.t["Rf9+fy"]),
                value: P.frameRate,
                options: Z,
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, r.jsx)(l.gNt, {
                label: T.intl.string(T.t.pf54EU),
                description: T.intl.string(T.t["QyB/jK"]),
                layout: "horizontal",
                children: (0, r.jsx)("div", {
                    className: C.keyRecorder,
                    children: (0, r.jsx)(u.Z, {
                        defaultValue: D.shortcut,
                        onChange: F,
                    }),
                }),
            }),
            M &&
                (0, r.jsx)(l.gNt, {
                    label: T.intl.string(T.t["0U/hj7"]),
                    description: T.intl.string(T.t["5zxkdo"]),
                    layout: "horizontal",
                    children: (0, r.jsx)("div", {
                        className: C.keyRecorder,
                        children: (0, r.jsx)(u.Z, {
                            defaultValue: x.shortcut,
                            onChange: B,
                        }),
                    }),
                }),
        ],
    });
}
