n.d(t, { Z: () => R });
var i = n(200651),
    s = n(192379),
    r = n(512722),
    l = n.n(r),
    a = n(442837),
    o = n(481060),
    c = n(660216),
    d = n(230711),
    u = n(825209),
    m = n(706454),
    h = n(494620),
    g = n(131951),
    x = n(556296),
    _ = n(924557),
    p = n(435064),
    E = n(894694),
    C = n(779618),
    f = n(39604),
    T = n(442334),
    N = n(356659),
    S = n(981631),
    I = n(37113),
    b = n(526761),
    v = n(388032),
    j = n(209004),
    A = n(301899),
    O = n(483938);
function R() {
    let e = (0, a.e7)([g.Z], () => g.Z.getHardwareEncoding()),
        { clipsEnabled: t, remindersEnabled: n, decoupledClipsEnabled: r, clipsLength: R, clipsQuality: P } = (0, a.cj)([p.Z], () => p.Z.getSettings()),
        D = (0, a.e7)([p.Z], () => p.Z.getHardwareClassification()),
        y = (0, a.e7)([x.ZP], () => x.ZP.getKeybindForAction(S.kg4.SAVE_CLIP, !0)),
        Z = p.Z.isDecoupledGameClippingEnabled(),
        k = (0, C.Z)(g.Z),
        { showClipsHeaderEntrypoint: L } = _.NV.useExperiment({ location: 'clips_recording_settings' }, { autoTrackExposure: !1 });
    l()(null != y, 'Save clip keybind unset');
    let B = (0, a.e7)([m.default], () => m.default.locale),
        M = s.useMemo(
            () => [
                {
                    value: N.OT.SECONDS_30,
                    label: v.intl.formatToPlainString(v.t['bTFv//'], { count: 30 })
                },
                {
                    value: N.OT.MINUTES_1,
                    label: v.intl.formatToPlainString(v.t.ICo9Nj, { count: 1 })
                },
                {
                    value: N.OT.MINUTES_2,
                    label: v.intl.formatToPlainString(v.t.ICo9Nj, { count: 2 })
                }
            ],
            [B]
        ),
        w = s.useMemo(
            () => [
                {
                    value: I.LY.RESOLUTION_480,
                    label: v.intl.formatToPlainString(v.t.TEOC0N, { resolution: I.LY.RESOLUTION_480 })
                },
                {
                    value: I.LY.RESOLUTION_720,
                    label: v.intl.formatToPlainString(v.t.TEOC0N, { resolution: I.LY.RESOLUTION_720 })
                },
                {
                    value: I.LY.RESOLUTION_1080,
                    label: v.intl.formatToPlainString(v.t.TEOC0N, { resolution: I.LY.RESOLUTION_1080 })
                },
                {
                    value: I.LY.RESOLUTION_1440,
                    label: v.intl.formatToPlainString(v.t.TEOC0N, { resolution: I.LY.RESOLUTION_1440 })
                },
                {
                    value: I.LY.RESOLUTION_SOURCE,
                    label: v.intl.string(v.t.XjXqzs)
                }
            ],
            [B]
        ),
        V = s.useMemo(
            () => [
                {
                    value: I.ws.FPS_15,
                    label: v.intl.formatToPlainString(v.t.Qb44XF, { fps: I.ws.FPS_15 })
                },
                {
                    value: I.ws.FPS_30,
                    label: v.intl.formatToPlainString(v.t.Qb44XF, { fps: I.ws.FPS_30 })
                },
                {
                    value: I.ws.FPS_60,
                    label: v.intl.formatToPlainString(v.t.Qb44XF, { fps: I.ws.FPS_60 })
                }
            ],
            [B]
        ),
        U = s.useCallback(
            (e) => {
                c.Z.setKeybind({
                    ...y,
                    shortcut: e
                });
            },
            [y]
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(o.hjN, {
                disabled: !e,
                children: [
                    !e &&
                        (0, i.jsx)(h.Z, {
                            look: h.z.WARNING,
                            className: A.formItem,
                            children: v.intl.format(v.t.kiaF4e, { onClick: () => d.Z.open(S.oAB.VOICE, null, { scrollPosition: b.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION }) })
                        }),
                    D === E.x.BELOW_MINIMUM
                        ? (0, i.jsx)(h.Z, {
                              look: h.z.WARNING,
                              className: A.formItem,
                              children: v.intl.string(v.t.SIxrIC)
                          })
                        : null,
                    (0, i.jsx)(o.j7V, {
                        hideBorder: !0,
                        disabled: !e,
                        className: A.formItem,
                        value: t,
                        note: v.intl.string(v.t['4Qw3ND']),
                        onChange: (e) =>
                            f.em({
                                clipsEnabled: e,
                                trackAnalytics: !0
                            }),
                        children: v.intl.string(v.t.h8rgrK)
                    }),
                    e &&
                        (0, i.jsx)(h.Z, {
                            className: A.formItem,
                            children: v.intl.string(v.t['Z+Mfqa'])
                        })
                ]
            }),
            Z &&
                k &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(o.$i$, {}),
                        (0, i.jsx)(o.hjN, {
                            className: O.marginTop20,
                            disabled: !e,
                            children: (0, i.jsx)(o.j7V, {
                                hideBorder: !0,
                                disabled: !e,
                                className: A.formItem,
                                value: r,
                                note: v.intl.string(v.t.YP3ujo),
                                onChange: (e) =>
                                    f._Q({
                                        enabled: e,
                                        trackAnalytics: !0
                                    }),
                                children: v.intl.string(v.t.yXvykp)
                            })
                        })
                    ]
                }),
            L &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(o.$i$, {}),
                        (0, i.jsx)(o.hjN, {
                            className: O.marginTop20,
                            children: (0, i.jsx)(o.j7V, {
                                hideBorder: !0,
                                className: A.formItem,
                                value: n,
                                note: v.intl.string(v.t.m4Cjj4),
                                onChange: (e) => f.N0(e),
                                children: v.intl.string(v.t['3zwNf3'])
                            })
                        })
                    ]
                }),
            (0, i.jsx)(o.$i$, {}),
            (0, i.jsxs)(o.hjN, {
                className: O.marginTop20,
                children: [
                    (0, i.jsx)(T.Q, {
                        className: A.formItem,
                        select: f.eU,
                        title: v.intl.string(v.t.OgfUio),
                        note: v.intl.string(v.t.H7j4tb),
                        value: R,
                        options: M
                    }),
                    (0, i.jsx)(T.Q, {
                        className: A.formItem,
                        select: (e) =>
                            f.yi({
                                resolution: e,
                                frameRate: P.frameRate
                            }),
                        title: v.intl.string(v.t.aFudZG),
                        note: v.intl.string(v.t.nIrkW1),
                        value: P.resolution,
                        options: w
                    }),
                    (0, i.jsx)(T.Q, {
                        className: A.formItem,
                        select: (e) =>
                            f.yi({
                                resolution: P.resolution,
                                frameRate: e
                            }),
                        title: v.intl.string(v.t['2wScLy']),
                        note: v.intl.string(v.t['Rf9+f3']),
                        value: P.frameRate,
                        options: V
                    }),
                    (0, i.jsx)(T.O, {
                        className: A.formItem,
                        title: v.intl.string(v.t.pf54ER),
                        note: v.intl.string(v.t['QyB/jI']),
                        children: (0, i.jsx)('div', {
                            className: j.keyRecorder,
                            children: (0, i.jsx)(u.Z, {
                                defaultValue: y.shortcut,
                                onChange: U
                            })
                        })
                    })
                ]
            })
        ]
    });
}
