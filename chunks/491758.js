n.d(t, { Z: () => L });
var r = n(951288),
    i = n(647438),
    a = n(512722),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(660216),
    u = n(825209),
    d = n(706454),
    f = n(313789),
    _ = n(494620),
    p = n(518596),
    h = n(131951),
    m = n(556296),
    g = n(924557),
    E = n(435064),
    b = n(894694),
    y = n(779618),
    O = n(39604),
    v = n(442334),
    I = n(356659),
    T = n(981631),
    S = n(37113),
    A = n(526761),
    C = n(388032),
    N = n(298291);
function R(e, t, n) {
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
                R(e, t, n[t]);
            });
    }
    return e;
}
function w(e, t) {
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
function D(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : w(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function L() {
    let e = (0, s.e7)([h.Z], () => h.Z.getHardwareEncoding()),
        {
            clipsEnabled: t,
            remindersEnabled: n,
            decoupledClipsEnabled: a,
            clipsLength: R,
            clipsQuality: w,
        } = (0, s.cj)([E.Z], () => E.Z.getSettings()),
        L = (0, s.e7)([E.Z], () => E.Z.getHardwareClassification()),
        x = (0, s.e7)([m.ZP], () => m.ZP.getKeybindForAction(T.kg4.SAVE_CLIP, !0)),
        j = E.Z.isDecoupledGameClippingEnabled(),
        M = (0, y.Z)(h.Z),
        { showClipsHeaderEntrypoint: k } = g.NV.useExperiment(
            { location: "clips_recording_settings" },
            { autoTrackExposure: !1 },
        );
    o()(null != x, "Save clip keybind unset");
    let U = (0, s.e7)([d.default], () => d.default.locale),
        G = i.useMemo(
            () => [
                {
                    value: I.OT.SECONDS_30,
                    label: C.intl.formatToPlainString(C.t["bTFv//"], { count: 30 }),
                },
                {
                    value: I.OT.MINUTES_1,
                    label: C.intl.formatToPlainString(C.t.ICo9Nj, { count: 1 }),
                },
                {
                    value: I.OT.MINUTES_2,
                    label: C.intl.formatToPlainString(C.t.ICo9Nj, { count: 2 }),
                },
            ],
            [U],
        ),
        B = i.useMemo(
            () => [
                {
                    value: S.LY.RESOLUTION_480,
                    label: C.intl.formatToPlainString(C.t.TEOC0N, { resolution: S.LY.RESOLUTION_480 }),
                },
                {
                    value: S.LY.RESOLUTION_720,
                    label: C.intl.formatToPlainString(C.t.TEOC0N, { resolution: S.LY.RESOLUTION_720 }),
                },
                {
                    value: S.LY.RESOLUTION_1080,
                    label: C.intl.formatToPlainString(C.t.TEOC0N, { resolution: S.LY.RESOLUTION_1080 }),
                },
                {
                    value: S.LY.RESOLUTION_1440,
                    label: C.intl.formatToPlainString(C.t.TEOC0N, { resolution: S.LY.RESOLUTION_1440 }),
                },
                {
                    value: S.LY.RESOLUTION_SOURCE,
                    label: C.intl.string(C.t.XjXqzs),
                },
            ],
            [U],
        ),
        Z = i.useMemo(
            () => [
                {
                    value: S.ws.FPS_15,
                    label: C.intl.formatToPlainString(C.t.Qb44XF, { fps: S.ws.FPS_15 }),
                },
                {
                    value: S.ws.FPS_30,
                    label: C.intl.formatToPlainString(C.t.Qb44XF, { fps: S.ws.FPS_30 }),
                },
                {
                    value: S.ws.FPS_60,
                    label: C.intl.formatToPlainString(C.t.Qb44XF, { fps: S.ws.FPS_60 }),
                },
            ],
            [U],
        ),
        F = i.useCallback(
            (e) => {
                c.Z.setKeybind(D(P({}, x), { shortcut: e }));
            },
            [x],
        );
    return (0, r.jsxs)(l.Kqy, {
        gap: 24,
        children: [
            (0, r.jsxs)(l.hjN, {
                disabled: !e,
                children: [
                    !e &&
                        (0, r.jsx)(_.Z, {
                            look: _.z.WARNING,
                            children: C.intl.format(C.t.kiaF4e, {
                                onClick: () =>
                                    (0, p.openUserSettings)(f.n.VOICE_AND_VIDEO_PANEL, {
                                        section: T.oAB.VOICE,
                                        subsection: A.gP,
                                        scrollPosition: A.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION,
                                    }),
                            }),
                        }),
                    L === b.x.BELOW_MINIMUM
                        ? (0, r.jsx)(_.Z, {
                              look: _.z.WARNING,
                              children: C.intl.string(C.t.SIxrIC),
                          })
                        : null,
                    (0, r.jsx)(l.rsf, {
                        label: C.intl.string(C.t.h8rgrK),
                        description: C.intl.string(C.t["4Qw3ND"]),
                        checked: t,
                        disabled: !e,
                        onChange: (e) =>
                            O.em({
                                clipsEnabled: e,
                                trackAnalytics: !0,
                            }),
                    }),
                    e && (0, r.jsx)(_.Z, { children: C.intl.string(C.t["Z+Mfqa"]) }),
                ],
            }),
            j &&
                M &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(l.izJ, {}),
                        (0, r.jsx)(l.hjN, {
                            disabled: !e,
                            children: (0, r.jsx)(l.rsf, {
                                label: C.intl.string(C.t.yXvykp),
                                description: C.intl.string(C.t.YP3ujo),
                                checked: a,
                                disabled: !e,
                                onChange: (e) =>
                                    O._Q({
                                        enabled: e,
                                        trackAnalytics: !0,
                                    }),
                            }),
                        }),
                    ],
                }),
            k &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(l.izJ, {}),
                        (0, r.jsx)(l.hjN, {
                            children: (0, r.jsx)(l.rsf, {
                                label: C.intl.string(C.t["3zwNf3"]),
                                description: C.intl.string(C.t.m4Cjj4),
                                checked: n,
                                onChange: (e) => O.N0(e),
                            }),
                        }),
                    ],
                }),
            (0, r.jsx)(l.izJ, {}),
            (0, r.jsx)(l.hjN, {
                children: (0, r.jsxs)(l.Kqy, {
                    gap: 24,
                    children: [
                        (0, r.jsx)(v.Q, {
                            select: O.eU,
                            title: C.intl.string(C.t.OgfUio),
                            note: C.intl.string(C.t.H7j4tb),
                            value: R,
                            options: G,
                        }),
                        (0, r.jsx)(v.Q, {
                            select: (e) =>
                                O.yi({
                                    resolution: e,
                                    frameRate: w.frameRate,
                                }),
                            title: C.intl.string(C.t.aFudZG),
                            note: C.intl.string(C.t.nIrkW1),
                            value: w.resolution,
                            options: B,
                        }),
                        (0, r.jsx)(v.Q, {
                            select: (e) =>
                                O.yi({
                                    resolution: w.resolution,
                                    frameRate: e,
                                }),
                            title: C.intl.string(C.t["2wScLy"]),
                            note: C.intl.string(C.t["Rf9+f3"]),
                            value: w.frameRate,
                            options: Z,
                        }),
                        (0, r.jsx)(l.NIc, {
                            label: C.intl.string(C.t.pf54ER),
                            description: C.intl.string(C.t["QyB/jI"]),
                            layout: "horizontal",
                            children: (0, r.jsx)("div", {
                                className: N.keyRecorder,
                                children: (0, r.jsx)(u.Z, {
                                    defaultValue: x.shortcut,
                                    onChange: F,
                                }),
                            }),
                        }),
                    ],
                }),
            }),
        ],
    });
}
