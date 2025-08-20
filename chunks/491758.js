n.d(t, { Z: () => L });
var r = n(951288),
    i = n(647438),
    a = n(512722),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(660216),
    u = n(230711),
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
    O = n(442334),
    v = n(356659),
    I = n(981631),
    T = n(37113),
    S = n(526761),
    A = n(388032),
    C = n(556865),
    N = n(749799),
    R = n(197571);
function P(e, t, n) {
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
function w(e) {
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
                P(e, t, n[t]);
            });
    }
    return e;
}
function D(e, t) {
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
function x(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : D(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function L() {
    let e = (0, s.e7)([p.Z], () => p.Z.getHardwareEncoding()),
        {
            clipsEnabled: t,
            remindersEnabled: n,
            decoupledClipsEnabled: a,
            clipsLength: P,
            clipsQuality: D,
        } = (0, s.cj)([g.Z], () => g.Z.getSettings()),
        L = (0, s.e7)([g.Z], () => g.Z.getHardwareClassification()),
        j = (0, s.e7)([h.ZP], () => h.ZP.getKeybindForAction(I.kg4.SAVE_CLIP, !0)),
        M = g.Z.isDecoupledGameClippingEnabled(),
        k = (0, b.Z)(p.Z),
        { showClipsHeaderEntrypoint: U } = m.NV.useExperiment(
            { location: "clips_recording_settings" },
            { autoTrackExposure: !1 },
        );
    o()(null != j, "Save clip keybind unset");
    let G = (0, s.e7)([f.default], () => f.default.locale),
        B = i.useMemo(
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
            [G],
        ),
        Z = i.useMemo(
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
            [G],
        ),
        V = i.useMemo(
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
            [G],
        ),
        F = i.useCallback(
            (e) => {
                c.Z.setKeybind(x(w({}, j), { shortcut: e }));
            },
            [j],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(l.hjN, {
                disabled: !e,
                children: [
                    !e &&
                        (0, r.jsx)(_.Z, {
                            look: _.z.WARNING,
                            className: N.formItem,
                            children: A.intl.format(A.t.kiaF4e, {
                                onClick: () =>
                                    u.Z.open(I.oAB.VOICE, S.gP, {
                                        scrollPosition: S.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION,
                                    }),
                            }),
                        }),
                    L === E.x.BELOW_MINIMUM
                        ? (0, r.jsx)(_.Z, {
                              look: _.z.WARNING,
                              className: N.formItem,
                              children: A.intl.string(A.t.SIxrIC),
                          })
                        : null,
                    (0, r.jsx)(l.j7V, {
                        hideBorder: !0,
                        disabled: !e,
                        className: N.formItem,
                        value: t,
                        note: A.intl.string(A.t["4Qw3ND"]),
                        onChange: (e) =>
                            y.em({
                                clipsEnabled: e,
                                trackAnalytics: !0,
                            }),
                        children: A.intl.string(A.t.h8rgrK),
                    }),
                    e &&
                        (0, r.jsx)(_.Z, {
                            className: N.formItem,
                            children: A.intl.string(A.t["Z+Mfqa"]),
                        }),
                ],
            }),
            M &&
                k &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(l.$i$, {}),
                        (0, r.jsx)(l.hjN, {
                            className: R.marginTop20,
                            disabled: !e,
                            children: (0, r.jsx)(l.j7V, {
                                hideBorder: !0,
                                disabled: !e,
                                className: N.formItem,
                                value: a,
                                note: A.intl.string(A.t.YP3ujo),
                                onChange: (e) =>
                                    y._Q({
                                        enabled: e,
                                        trackAnalytics: !0,
                                    }),
                                children: A.intl.string(A.t.yXvykp),
                            }),
                        }),
                    ],
                }),
            U &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(l.$i$, {}),
                        (0, r.jsx)(l.hjN, {
                            className: R.marginTop20,
                            children: (0, r.jsx)(l.j7V, {
                                hideBorder: !0,
                                className: N.formItem,
                                value: n,
                                note: A.intl.string(A.t.m4Cjj4),
                                onChange: (e) => y.N0(e),
                                children: A.intl.string(A.t["3zwNf3"]),
                            }),
                        }),
                    ],
                }),
            (0, r.jsx)(l.$i$, {}),
            (0, r.jsxs)(l.hjN, {
                className: R.marginTop20,
                children: [
                    (0, r.jsx)(O.Q, {
                        className: N.formItem,
                        select: y.eU,
                        title: A.intl.string(A.t.OgfUio),
                        note: A.intl.string(A.t.H7j4tb),
                        value: P,
                        options: B,
                    }),
                    (0, r.jsx)(O.Q, {
                        className: N.formItem,
                        select: (e) =>
                            y.yi({
                                resolution: e,
                                frameRate: D.frameRate,
                            }),
                        title: A.intl.string(A.t.aFudZG),
                        note: A.intl.string(A.t.nIrkW1),
                        value: D.resolution,
                        options: Z,
                    }),
                    (0, r.jsx)(O.Q, {
                        className: N.formItem,
                        select: (e) =>
                            y.yi({
                                resolution: D.resolution,
                                frameRate: e,
                            }),
                        title: A.intl.string(A.t["2wScLy"]),
                        note: A.intl.string(A.t["Rf9+f3"]),
                        value: D.frameRate,
                        options: V,
                    }),
                    (0, r.jsx)(O.O, {
                        className: N.formItem,
                        title: A.intl.string(A.t.pf54ER),
                        note: A.intl.string(A.t["QyB/jI"]),
                        children: (0, r.jsx)("div", {
                            className: C.keyRecorder,
                            children: (0, r.jsx)(d.Z, {
                                defaultValue: j.shortcut,
                                onChange: F,
                            }),
                        }),
                    }),
                ],
            }),
        ],
    });
}
