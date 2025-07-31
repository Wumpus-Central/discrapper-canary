n.d(t, { Z: () => A });
var i = n(255367),
    r = n(73800),
    s = n(512722),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(660216),
    d = n(230711),
    u = n(825209),
    m = n(706454),
    p = n(494620),
    g = n(131951),
    h = n(556296),
    f = n(924557),
    b = n(435064),
    x = n(894694),
    _ = n(779618),
    j = n(39604),
    O = n(442334),
    E = n(356659),
    C = n(981631),
    v = n(37113),
    S = n(526761),
    T = n(388032),
    N = n(99645),
    I = n(802454),
    y = n(20493);
function A() {
    let e = (0, l.e7)([g.Z], () => g.Z.getHardwareEncoding()),
        { clipsEnabled: t, remindersEnabled: n, decoupledClipsEnabled: s, clipsLength: A, clipsQuality: P } = (0, l.cj)([b.Z], () => b.Z.getSettings()),
        R = (0, l.e7)([b.Z], () => b.Z.getHardwareClassification()),
        D = (0, l.e7)([h.ZP], () => h.ZP.getKeybindForAction(C.kg4.SAVE_CLIP, !0)),
        Z = b.Z.isDecoupledGameClippingEnabled(),
        w = (0, _.Z)(g.Z),
        { showClipsHeaderEntrypoint: k } = f.NV.useExperiment({ location: 'clips_recording_settings' }, { autoTrackExposure: !1 });
    a()(null != D, 'Save clip keybind unset');
    let L = (0, l.e7)([m.default], () => m.default.locale),
        B = r.useMemo(
            () => [
                {
                    value: E.OT.SECONDS_30,
                    label: T.intl.formatToPlainString(T.t['bTFv//'], { count: 30 })
                },
                {
                    value: E.OT.MINUTES_1,
                    label: T.intl.formatToPlainString(T.t.ICo9Nj, { count: 1 })
                },
                {
                    value: E.OT.MINUTES_2,
                    label: T.intl.formatToPlainString(T.t.ICo9Nj, { count: 2 })
                }
            ],
            [L]
        ),
        M = r.useMemo(
            () => [
                {
                    value: v.LY.RESOLUTION_480,
                    label: T.intl.formatToPlainString(T.t.TEOC0N, { resolution: v.LY.RESOLUTION_480 })
                },
                {
                    value: v.LY.RESOLUTION_720,
                    label: T.intl.formatToPlainString(T.t.TEOC0N, { resolution: v.LY.RESOLUTION_720 })
                },
                {
                    value: v.LY.RESOLUTION_1080,
                    label: T.intl.formatToPlainString(T.t.TEOC0N, { resolution: v.LY.RESOLUTION_1080 })
                },
                {
                    value: v.LY.RESOLUTION_1440,
                    label: T.intl.formatToPlainString(T.t.TEOC0N, { resolution: v.LY.RESOLUTION_1440 })
                },
                {
                    value: v.LY.RESOLUTION_SOURCE,
                    label: T.intl.string(T.t.XjXqzs)
                }
            ],
            [L]
        ),
        U = r.useMemo(
            () => [
                {
                    value: v.ws.FPS_15,
                    label: T.intl.formatToPlainString(T.t.Qb44XF, { fps: v.ws.FPS_15 })
                },
                {
                    value: v.ws.FPS_30,
                    label: T.intl.formatToPlainString(T.t.Qb44XF, { fps: v.ws.FPS_30 })
                },
                {
                    value: v.ws.FPS_60,
                    label: T.intl.formatToPlainString(T.t.Qb44XF, { fps: v.ws.FPS_60 })
                }
            ],
            [L]
        ),
        V = r.useCallback(
            (e) => {
                var t, n;
                c.Z.setKeybind(
                    ((t = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                i = Object.keys(n);
                            ('function' == typeof Object.getOwnPropertySymbols &&
                                (i = i.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                i.forEach(function (t) {
                                    var i;
                                    ((i = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: i,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = i));
                                }));
                        }
                        return e;
                    })({}, D)),
                    (n = n = { shortcut: e }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var i = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, i);
                              }
                              return n;
                          })(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          }),
                    t)
                );
            },
            [D]
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(o.hjN, {
                disabled: !e,
                children: [
                    !e &&
                        (0, i.jsx)(p.Z, {
                            look: p.z.WARNING,
                            className: I.formItem,
                            children: T.intl.format(T.t.kiaF4e, { onClick: () => d.Z.open(C.oAB.VOICE, S.gP, { scrollPosition: S.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION }) })
                        }),
                    R === x.x.BELOW_MINIMUM
                        ? (0, i.jsx)(p.Z, {
                              look: p.z.WARNING,
                              className: I.formItem,
                              children: T.intl.string(T.t.SIxrIC)
                          })
                        : null,
                    (0, i.jsx)(o.j7V, {
                        hideBorder: !0,
                        disabled: !e,
                        className: I.formItem,
                        value: t,
                        note: T.intl.string(T.t['4Qw3ND']),
                        onChange: (e) =>
                            j.em({
                                clipsEnabled: e,
                                trackAnalytics: !0
                            }),
                        children: T.intl.string(T.t.h8rgrK)
                    }),
                    e &&
                        (0, i.jsx)(p.Z, {
                            className: I.formItem,
                            children: T.intl.string(T.t['Z+Mfqa'])
                        })
                ]
            }),
            Z &&
                w &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(o.$i$, {}),
                        (0, i.jsx)(o.hjN, {
                            className: y.marginTop20,
                            disabled: !e,
                            children: (0, i.jsx)(o.j7V, {
                                hideBorder: !0,
                                disabled: !e,
                                className: I.formItem,
                                value: s,
                                note: T.intl.string(T.t.YP3ujo),
                                onChange: (e) =>
                                    j._Q({
                                        enabled: e,
                                        trackAnalytics: !0
                                    }),
                                children: T.intl.string(T.t.yXvykp)
                            })
                        })
                    ]
                }),
            k &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(o.$i$, {}),
                        (0, i.jsx)(o.hjN, {
                            className: y.marginTop20,
                            children: (0, i.jsx)(o.j7V, {
                                hideBorder: !0,
                                className: I.formItem,
                                value: n,
                                note: T.intl.string(T.t.m4Cjj4),
                                onChange: (e) => j.N0(e),
                                children: T.intl.string(T.t['3zwNf3'])
                            })
                        })
                    ]
                }),
            (0, i.jsx)(o.$i$, {}),
            (0, i.jsxs)(o.hjN, {
                className: y.marginTop20,
                children: [
                    (0, i.jsx)(O.Q, {
                        className: I.formItem,
                        select: j.eU,
                        title: T.intl.string(T.t.OgfUio),
                        note: T.intl.string(T.t.H7j4tb),
                        value: A,
                        options: B
                    }),
                    (0, i.jsx)(O.Q, {
                        className: I.formItem,
                        select: (e) =>
                            j.yi({
                                resolution: e,
                                frameRate: P.frameRate
                            }),
                        title: T.intl.string(T.t.aFudZG),
                        note: T.intl.string(T.t.nIrkW1),
                        value: P.resolution,
                        options: M
                    }),
                    (0, i.jsx)(O.Q, {
                        className: I.formItem,
                        select: (e) =>
                            j.yi({
                                resolution: P.resolution,
                                frameRate: e
                            }),
                        title: T.intl.string(T.t['2wScLy']),
                        note: T.intl.string(T.t['Rf9+f3']),
                        value: P.frameRate,
                        options: U
                    }),
                    (0, i.jsx)(O.O, {
                        className: I.formItem,
                        title: T.intl.string(T.t.pf54ER),
                        note: T.intl.string(T.t['QyB/jI']),
                        children: (0, i.jsx)('div', {
                            className: N.keyRecorder,
                            children: (0, i.jsx)(u.Z, {
                                defaultValue: D.shortcut,
                                onChange: V
                            })
                        })
                    })
                ]
            })
        ]
    });
}
