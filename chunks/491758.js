n.d(t, { Z: () => D });
var r = n(54381),
    i = n(473749),
    a = n(512722),
    o = n.n(a),
    s = n(442837),
    l = n(199849),
    c = n(481060),
    u = n(660216),
    d = n(825209),
    f = n(706454),
    p = n(494620),
    _ = n(131951),
    m = n(556296),
    h = n(358085),
    g = n(924557),
    E = n(435064),
    b = n(894694),
    y = n(779618),
    O = n(341569),
    v = n(39604),
    S = n(356659),
    I = n(981631),
    T = n(37113),
    C = n(388032),
    A = n(263753);
function N(e, t, n) {
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
function P(e) {
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
                N(e, t, n[t]);
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
function w(e, t) {
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
    let e = (0, O.nq)(),
        t = (0, O.z8)(),
        n = (0, h.isWindows)(),
        { remindersEnabled: a, clipsLength: N, clipsQuality: R } = (0, s.cj)([E.Z], () => E.Z.getSettings()),
        D = (0, s.e7)([E.Z], () => E.Z.getHardwareClassification()),
        x = (0, s.e7)([m.ZP], () => m.ZP.getKeybindForAction(I.kg4.SAVE_CLIP, !0)),
        L = (0, s.e7)([m.ZP], () => m.ZP.getKeybindForAction(I.kg4.SAVE_SCREENSHOT, !0)),
        j = (0, y.Z)(_.Z),
        { showClipsHeaderEntrypoint: M } = g.NV.useExperiment(
            { location: "clips_recording_settings" },
            { autoTrackExposure: !1 },
        ),
        k = (0, g.PP)();
    o()(null != x, "Save clip keybind unset"), o()(null != L, "Save screenshot keybind unset");
    let U = (0, s.e7)([f.default], () => f.default.locale),
        G = i.useMemo(
            () => [
                {
                    value: S.OT.SECONDS_30,
                    label: C.intl.formatToPlainString(C.t["bTFv/3"], { count: 30 }),
                },
                {
                    value: S.OT.MINUTES_1,
                    label: C.intl.formatToPlainString(C.t.ICo9Nk, { count: 1 }),
                },
                {
                    value: S.OT.MINUTES_2,
                    label: C.intl.formatToPlainString(C.t.ICo9Nk, { count: 2 }),
                },
            ],
            [U],
        ),
        Z = i.useMemo(
            () => [
                {
                    value: T.LY.RESOLUTION_480,
                    label: C.intl.formatToPlainString(C.t.TEOC0I, { resolution: T.LY.RESOLUTION_480 }),
                },
                {
                    value: T.LY.RESOLUTION_720,
                    label: C.intl.formatToPlainString(C.t.TEOC0I, { resolution: T.LY.RESOLUTION_720 }),
                },
                {
                    value: T.LY.RESOLUTION_1080,
                    label: C.intl.formatToPlainString(C.t.TEOC0I, { resolution: T.LY.RESOLUTION_1080 }),
                },
                {
                    value: T.LY.RESOLUTION_1440,
                    label: C.intl.formatToPlainString(C.t.TEOC0I, { resolution: T.LY.RESOLUTION_1440 }),
                },
                {
                    value: T.LY.RESOLUTION_SOURCE,
                    label: C.intl.string(C.t.XjXqzh),
                },
            ],
            [U],
        ),
        F = i.useMemo(
            () => [
                {
                    value: T.ws.FPS_15,
                    label: C.intl.formatToPlainString(C.t.Qb44XH, { fps: T.ws.FPS_15 }),
                },
                {
                    value: T.ws.FPS_30,
                    label: C.intl.formatToPlainString(C.t.Qb44XH, { fps: T.ws.FPS_30 }),
                },
                {
                    value: T.ws.FPS_60,
                    label: C.intl.formatToPlainString(C.t.Qb44XH, { fps: T.ws.FPS_60 }),
                },
            ],
            [U],
        ),
        B = i.useCallback(
            (e) => {
                u.Z.setKeybind(w(P({}, x), { shortcut: e }));
            },
            [x],
        ),
        V = i.useCallback(
            (e) => {
                u.Z.setKeybind(w(P({}, L), { shortcut: e }));
            },
            [L],
        );
    return (0, r.jsxs)(c.C3N, {
        children: [
            (0, r.jsx)(p.Z, { children: C.intl.string(C.t["Z+MfqT"]) }),
            D === b.xH.BELOW_MINIMUM
                ? (0, r.jsx)(p.Z, {
                      look: p.z.WARNING,
                      children: C.intl.string(C.t.SIxrIF),
                  })
                : null,
            (0, r.jsx)(c.rsf, {
                label: C.intl.string(C.t.h8rgrK),
                description: C.intl.string(C.t["4Qw3NO"]),
                checked: t,
                onChange: (e) =>
                    v.em({
                        clipsEnabled: e,
                        trackAnalytics: !0,
                    }),
            }),
            n &&
                j &&
                (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(c.rsf, {
                        label: C.intl.string(C.t.yXvykv),
                        description: C.intl.string(C.t.YP3ujk),
                        checked: e,
                        onChange: (e) =>
                            v._Q({
                                enabled: e,
                                trackAnalytics: !0,
                            }),
                    }),
                }),
            M &&
                (0, r.jsx)(c.rsf, {
                    label: C.intl.string(C.t["3zwNf6"]),
                    description: C.intl.string(C.t.m4Cjj9),
                    checked: a,
                    onChange: (e) => v.N0(e),
                }),
            (0, r.jsx)(l.y6, {
                onChange: v.eU,
                label: C.intl.string(C.t.OgfUio),
                description: C.intl.string(C.t.H7j4tY),
                value: N,
                options: G,
            }),
            (0, r.jsx)(l.y6, {
                onChange: (e) =>
                    v.yi({
                        resolution: e,
                        frameRate: R.frameRate,
                    }),
                label: C.intl.string(C.t.aFudZJ),
                description: C.intl.string(C.t.nIrkW5),
                value: R.resolution,
                options: Z,
            }),
            (0, r.jsx)(l.y6, {
                onChange: (e) =>
                    v.yi({
                        resolution: R.resolution,
                        frameRate: e,
                    }),
                label: C.intl.string(C.t["2wScL1"]),
                description: C.intl.string(C.t["Rf9+fy"]),
                value: R.frameRate,
                options: F,
            }),
            (0, r.jsx)(c.gNt, {
                label: C.intl.string(C.t.pf54EU),
                description: C.intl.string(C.t["QyB/jK"]),
                layout: "horizontal",
                children: (0, r.jsx)("div", {
                    className: A.keyRecorder,
                    children: (0, r.jsx)(d.Z, {
                        defaultValue: x.shortcut,
                        onChange: B,
                    }),
                }),
            }),
            k &&
                (0, r.jsx)(c.gNt, {
                    label: C.intl.string(C.t["0U/hj7"]),
                    description: C.intl.string(C.t["5zxkdo"]),
                    layout: "horizontal",
                    children: (0, r.jsx)("div", {
                        className: A.keyRecorder,
                        children: (0, r.jsx)(d.Z, {
                            defaultValue: L.shortcut,
                            onChange: V,
                        }),
                    }),
                }),
        ],
    });
}
