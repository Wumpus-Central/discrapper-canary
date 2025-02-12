n.d(t, { Z: () => R });
var i = n(200651),
    s = n(192379),
    l = n(512722),
    r = n.n(l),
    a = n(442837),
    o = n(481060),
    c = n(660216),
    d = n(230711),
    u = n(825209),
    h = n(706454),
    m = n(494620),
    g = n(131951),
    x = n(556296),
    _ = n(924557),
    p = n(435064),
    E = n(894694),
    C = n(779618),
    f = n(39604),
    N = n(442334),
    I = n(356659),
    T = n(981631),
    S = n(37113),
    j = n(526761),
    v = n(388032),
    b = n(635446),
    A = n(639957),
    O = n(814632);
function R() {
    let e = (0, a.e7)([g.Z], () => g.Z.getHardwareEncoding()),
        { clipsEnabled: t, remindersEnabled: n, decoupledClipsEnabled: l, clipsLength: R, clipsQuality: D } = (0, a.cj)([p.Z], () => p.Z.getSettings()),
        P = (0, a.e7)([p.Z], () => p.Z.getHardwareClassification()),
        y = (0, a.e7)([x.ZP], () => x.ZP.getKeybindForAction(T.kg4.SAVE_CLIP, !0)),
        Z = p.Z.isDecoupledGameClippingEnabled(),
        L = (0, C.Z)(g.Z),
        { showClipsHeaderEntrypoint: k } = _.NV.useExperiment({ location: 'clips_recording_settings' }, { autoTrackExposure: !1 });
    r()(null != y, 'Save clip keybind unset');
    let B = (0, a.e7)([h.default], () => h.default.locale),
        M = s.useMemo(
            () => [
                {
                    value: I.OT.SECONDS_30,
                    label: v.intl.formatToPlainString(v.t['bTFv//'], { count: 30 })
                },
                {
                    value: I.OT.MINUTES_1,
                    label: v.intl.formatToPlainString(v.t.ICo9Nj, { count: 1 })
                },
                {
                    value: I.OT.MINUTES_2,
                    label: v.intl.formatToPlainString(v.t.ICo9Nj, { count: 2 })
                }
            ],
            [B]
        ),
        V = s.useMemo(
            () => [
                {
                    value: S.LY.RESOLUTION_480,
                    label: v.intl.formatToPlainString(v.t.TEOC0N, { resolution: S.LY.RESOLUTION_480 })
                },
                {
                    value: S.LY.RESOLUTION_720,
                    label: v.intl.formatToPlainString(v.t.TEOC0N, { resolution: S.LY.RESOLUTION_720 })
                },
                {
                    value: S.LY.RESOLUTION_1080,
                    label: v.intl.formatToPlainString(v.t.TEOC0N, { resolution: S.LY.RESOLUTION_1080 })
                },
                {
                    value: S.LY.RESOLUTION_1440,
                    label: v.intl.formatToPlainString(v.t.TEOC0N, { resolution: S.LY.RESOLUTION_1440 })
                },
                {
                    value: S.LY.RESOLUTION_SOURCE,
                    label: v.intl.string(v.t.XjXqzs)
                }
            ],
            [B]
        ),
        w = s.useMemo(
            () => [
                {
                    value: S.ws.FPS_15,
                    label: v.intl.formatToPlainString(v.t.Qb44XF, { fps: S.ws.FPS_15 })
                },
                {
                    value: S.ws.FPS_30,
                    label: v.intl.formatToPlainString(v.t.Qb44XF, { fps: S.ws.FPS_30 })
                },
                {
                    value: S.ws.FPS_60,
                    label: v.intl.formatToPlainString(v.t.Qb44XF, { fps: S.ws.FPS_60 })
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
                        (0, i.jsx)(m.Z, {
                            look: m.z.WARNING,
                            className: A.formItem,
                            children: v.intl.format(v.t.kiaF4e, { onClick: () => d.Z.open(T.oAB.VOICE, null, { scrollPosition: j.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION }) })
                        }),
                    P === E.x.BELOW_MINIMUM
                        ? (0, i.jsx)(m.Z, {
                              look: m.z.WARNING,
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
                        (0, i.jsx)(m.Z, {
                            className: A.formItem,
                            children: v.intl.string(v.t['Z+Mfqa'])
                        })
                ]
            }),
            Z &&
                L &&
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
                                value: l,
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
            k &&
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
                    (0, i.jsx)(N.Q, {
                        className: A.formItem,
                        select: f.eU,
                        title: v.intl.string(v.t.OgfUio),
                        note: v.intl.string(v.t.H7j4tb),
                        value: R,
                        options: M
                    }),
                    (0, i.jsx)(N.Q, {
                        className: A.formItem,
                        select: (e) =>
                            f.yi({
                                resolution: e,
                                frameRate: D.frameRate
                            }),
                        title: v.intl.string(v.t.aFudZG),
                        note: v.intl.string(v.t.nIrkW1),
                        value: D.resolution,
                        options: V
                    }),
                    (0, i.jsx)(N.Q, {
                        className: A.formItem,
                        select: (e) =>
                            f.yi({
                                resolution: D.resolution,
                                frameRate: e
                            }),
                        title: v.intl.string(v.t['2wScLy']),
                        note: v.intl.string(v.t['Rf9+f3']),
                        value: D.frameRate,
                        options: w
                    }),
                    (0, i.jsx)(N.O, {
                        className: A.formItem,
                        title: v.intl.string(v.t.pf54ER),
                        note: v.intl.string(v.t['QyB/jI']),
                        children: (0, i.jsx)('div', {
                            className: b.keyRecorder,
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
