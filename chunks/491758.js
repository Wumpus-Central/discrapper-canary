n.d(t, {
    Z: function () {
        return R;
    }
});
var i = n(200651),
    r = n(192379),
    s = n(512722),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(660216),
    d = n(230711),
    u = n(825209),
    m = n(706454),
    g = n(494620),
    h = n(131951),
    p = n(556296),
    x = n(924557),
    f = n(435064),
    _ = n(894694),
    E = n(779618),
    C = n(39604),
    T = n(442334),
    S = n(356659),
    b = n(981631),
    I = n(37113),
    N = n(526761),
    v = n(388032),
    A = n(413526),
    j = n(598603),
    O = n(275477);
function R() {
    let e = (0, l.e7)([h.Z], () => h.Z.getHardwareEncoding()),
        { clipsEnabled: t, remindersEnabled: n, decoupledClipsEnabled: s, clipsLength: R, clipsQuality: P } = (0, l.cj)([f.Z], () => f.Z.getSettings()),
        y = (0, l.e7)([f.Z], () => f.Z.getHardwareClassification()),
        B = (0, l.e7)([p.Z], () => p.Z.getKeybindForAction(b.kg4.SAVE_CLIP, !0)),
        D = f.Z.isDecoupledGameClippingEnabled(),
        Z = (0, E.Z)(h.Z),
        { showClipsHeaderEntrypoint: L } = x.NV.useExperiment({ location: 'clips_recording_settings' }, { autoTrackExposure: !1 });
    a()(null != B, 'Save clip keybind unset');
    let M = (0, l.e7)([m.default], () => m.default.locale),
        k = r.useMemo(
            () => [
                {
                    value: S.OT.SECONDS_30,
                    label: v.intl.formatToPlainString(v.t['bTFv//'], { count: 30 })
                },
                {
                    value: S.OT.MINUTES_1,
                    label: v.intl.formatToPlainString(v.t.ICo9Nj, { count: 1 })
                },
                {
                    value: S.OT.MINUTES_2,
                    label: v.intl.formatToPlainString(v.t.ICo9Nj, { count: 2 })
                }
            ],
            [M]
        ),
        w = r.useMemo(
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
            [M]
        ),
        U = r.useMemo(
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
            [M]
        ),
        F = r.useCallback(
            (e) => {
                c.Z.setKeybind({
                    ...B,
                    shortcut: e
                });
            },
            [B]
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(o.FormSection, {
                disabled: !e,
                children: [
                    !e &&
                        (0, i.jsx)(g.Z, {
                            look: g.z.WARNING,
                            className: j.formItem,
                            children: v.intl.format(v.t.kiaF4e, { onClick: () => d.Z.open(b.oAB.VOICE, null, { scrollPosition: N.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION }) })
                        }),
                    y === _.x.BELOW_MINIMUM
                        ? (0, i.jsx)(g.Z, {
                              look: g.z.WARNING,
                              className: j.formItem,
                              children: v.intl.string(v.t.SIxrIC)
                          })
                        : null,
                    (0, i.jsx)(o.FormSwitch, {
                        hideBorder: !0,
                        disabled: !e,
                        className: j.formItem,
                        value: t,
                        note: v.intl.string(v.t['4Qw3ND']),
                        onChange: (e) =>
                            C.em({
                                clipsEnabled: e,
                                trackAnalytics: !0
                            }),
                        children: v.intl.string(v.t.h8rgrK)
                    }),
                    e &&
                        (0, i.jsx)(g.Z, {
                            className: j.formItem,
                            children: v.intl.string(v.t['Z+Mfqa'])
                        })
                ]
            }),
            D &&
                Z &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(o.FormDivider, {}),
                        (0, i.jsx)(o.FormSection, {
                            className: O.marginTop20,
                            disabled: !e,
                            children: (0, i.jsx)(o.FormSwitch, {
                                hideBorder: !0,
                                disabled: !e,
                                className: j.formItem,
                                value: s,
                                note: v.intl.string(v.t.YP3ujo),
                                onChange: (e) =>
                                    C._Q({
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
                        (0, i.jsx)(o.FormDivider, {}),
                        (0, i.jsx)(o.FormSection, {
                            className: O.marginTop20,
                            children: (0, i.jsx)(o.FormSwitch, {
                                hideBorder: !0,
                                className: j.formItem,
                                value: n,
                                note: v.intl.string(v.t.m4Cjj4),
                                onChange: (e) => C.N0(e),
                                children: v.intl.string(v.t['3zwNf3'])
                            })
                        })
                    ]
                }),
            (0, i.jsx)(o.FormDivider, {}),
            (0, i.jsxs)(o.FormSection, {
                className: O.marginTop20,
                children: [
                    (0, i.jsx)(T.Q, {
                        className: j.formItem,
                        select: C.eU,
                        title: v.intl.string(v.t.OgfUio),
                        note: v.intl.string(v.t.H7j4tb),
                        value: R,
                        options: k
                    }),
                    (0, i.jsx)(T.Q, {
                        className: j.formItem,
                        select: (e) =>
                            C.yi({
                                resolution: e,
                                frameRate: P.frameRate
                            }),
                        title: v.intl.string(v.t.aFudZG),
                        note: v.intl.string(v.t.nIrkW1),
                        value: P.resolution,
                        options: w
                    }),
                    (0, i.jsx)(T.Q, {
                        className: j.formItem,
                        select: (e) =>
                            C.yi({
                                resolution: P.resolution,
                                frameRate: e
                            }),
                        title: v.intl.string(v.t['2wScLy']),
                        note: v.intl.string(v.t['Rf9+f3']),
                        value: P.frameRate,
                        options: U
                    }),
                    (0, i.jsx)(T.O, {
                        className: j.formItem,
                        title: v.intl.string(v.t.pf54ER),
                        note: v.intl.string(v.t['QyB/jI']),
                        children: (0, i.jsx)('div', {
                            className: A.keyRecorder,
                            children: (0, i.jsx)(u.Z, {
                                defaultValue: B.shortcut,
                                onChange: F
                            })
                        })
                    })
                ]
            })
        ]
    });
}
