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
    v = n(356659),
    I = n(981631),
    T = n(37113),
    S = n(526761),
    A = n(388032),
    C = n(556865);
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
function R(e) {
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
function D() {
    let e = (0, s.e7)([h.Z], () => h.Z.getHardwareEncoding()),
        {
            clipsEnabled: t,
            remindersEnabled: n,
            decoupledClipsEnabled: a,
            clipsLength: N,
            clipsQuality: P,
        } = (0, s.cj)([E.Z], () => E.Z.getSettings()),
        D = (0, s.e7)([E.Z], () => E.Z.getHardwareClassification()),
        L = (0, s.e7)([m.ZP], () => m.ZP.getKeybindForAction(I.kg4.SAVE_CLIP, !0)),
        x = E.Z.isDecoupledGameClippingEnabled(),
        M = (0, y.Z)(h.Z),
        { showClipsHeaderEntrypoint: j } = g.NV.useExperiment(
            { location: "clips_recording_settings" },
            { autoTrackExposure: !1 },
        );
    o()(null != L, "Save clip keybind unset");
    let k = (0, s.e7)([d.default], () => d.default.locale),
        U = i.useMemo(
            () => [
                {
                    value: v.OT.SECONDS_30,
                    label: A.intl.formatToPlainString(A.t["bTFv//"], { count: 30 }),
                },
                {
                    value: v.OT.MINUTES_1,
                    label: A.intl.formatToPlainString(A.t.ICo9Nj, { count: 1 }),
                },
                {
                    value: v.OT.MINUTES_2,
                    label: A.intl.formatToPlainString(A.t.ICo9Nj, { count: 2 }),
                },
            ],
            [k],
        ),
        G = i.useMemo(
            () => [
                {
                    value: T.LY.RESOLUTION_480,
                    label: A.intl.formatToPlainString(A.t.TEOC0N, { resolution: T.LY.RESOLUTION_480 }),
                },
                {
                    value: T.LY.RESOLUTION_720,
                    label: A.intl.formatToPlainString(A.t.TEOC0N, { resolution: T.LY.RESOLUTION_720 }),
                },
                {
                    value: T.LY.RESOLUTION_1080,
                    label: A.intl.formatToPlainString(A.t.TEOC0N, { resolution: T.LY.RESOLUTION_1080 }),
                },
                {
                    value: T.LY.RESOLUTION_1440,
                    label: A.intl.formatToPlainString(A.t.TEOC0N, { resolution: T.LY.RESOLUTION_1440 }),
                },
                {
                    value: T.LY.RESOLUTION_SOURCE,
                    label: A.intl.string(A.t.XjXqzs),
                },
            ],
            [k],
        ),
        B = i.useMemo(
            () => [
                {
                    value: T.ws.FPS_15,
                    label: A.intl.formatToPlainString(A.t.Qb44XF, { fps: T.ws.FPS_15 }),
                },
                {
                    value: T.ws.FPS_30,
                    label: A.intl.formatToPlainString(A.t.Qb44XF, { fps: T.ws.FPS_30 }),
                },
                {
                    value: T.ws.FPS_60,
                    label: A.intl.formatToPlainString(A.t.Qb44XF, { fps: T.ws.FPS_60 }),
                },
            ],
            [k],
        ),
        Z = i.useCallback(
            (e) => {
                c.Z.setKeybind(w(R({}, L), { shortcut: e }));
            },
            [L],
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
                            children: A.intl.format(A.t.kiaF4e, {
                                onClick: () =>
                                    (0, p.openUserSettings)(f.n.VOICE_AND_VIDEO_PANEL, {
                                        section: I.oAB.VOICE,
                                        subsection: S.gP,
                                        scrollPosition: S.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION,
                                    }),
                            }),
                        }),
                    D === b.x.BELOW_MINIMUM
                        ? (0, r.jsx)(_.Z, {
                              look: _.z.WARNING,
                              children: A.intl.string(A.t.SIxrIC),
                          })
                        : null,
                    (0, r.jsx)(l.rsf, {
                        label: A.intl.string(A.t.h8rgrK),
                        description: A.intl.string(A.t["4Qw3ND"]),
                        checked: t,
                        disabled: !e,
                        onChange: (e) =>
                            O.em({
                                clipsEnabled: e,
                                trackAnalytics: !0,
                            }),
                    }),
                    e && (0, r.jsx)(_.Z, { children: A.intl.string(A.t["Z+Mfqa"]) }),
                ],
            }),
            x &&
                M &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(l.izJ, {}),
                        (0, r.jsx)(l.hjN, {
                            disabled: !e,
                            children: (0, r.jsx)(l.rsf, {
                                label: A.intl.string(A.t.yXvykp),
                                description: A.intl.string(A.t.YP3ujo),
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
            j &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(l.izJ, {}),
                        (0, r.jsx)(l.hjN, {
                            children: (0, r.jsx)(l.rsf, {
                                label: A.intl.string(A.t["3zwNf3"]),
                                description: A.intl.string(A.t.m4Cjj4),
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
                        (0, r.jsx)(l.q4e, {
                            onChange: O.eU,
                            label: A.intl.string(A.t.OgfUio),
                            description: A.intl.string(A.t.H7j4tb),
                            value: N,
                            options: U,
                        }),
                        (0, r.jsx)(l.q4e, {
                            onChange: (e) =>
                                O.yi({
                                    resolution: e,
                                    frameRate: P.frameRate,
                                }),
                            label: A.intl.string(A.t.aFudZG),
                            description: A.intl.string(A.t.nIrkW1),
                            value: P.resolution,
                            options: G,
                        }),
                        (0, r.jsx)(l.q4e, {
                            onChange: (e) =>
                                O.yi({
                                    resolution: P.resolution,
                                    frameRate: e,
                                }),
                            label: A.intl.string(A.t["2wScLy"]),
                            description: A.intl.string(A.t["Rf9+f3"]),
                            value: P.frameRate,
                            options: B,
                        }),
                        (0, r.jsx)(l.gNt, {
                            label: A.intl.string(A.t.pf54ER),
                            description: A.intl.string(A.t["QyB/jI"]),
                            layout: "horizontal",
                            children: (0, r.jsx)("div", {
                                className: C.keyRecorder,
                                children: (0, r.jsx)(u.Z, {
                                    defaultValue: L.shortcut,
                                    onChange: Z,
                                }),
                            }),
                        }),
                    ],
                }),
            }),
        ],
    });
}
