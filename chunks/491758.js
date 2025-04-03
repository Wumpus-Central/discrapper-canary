n.d(t, { Z: () => A });
var r = n(200651),
    i = n(192379),
    s = n(512722),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(660216),
    d = n(230711),
    u = n(825209),
    m = n(706454),
    g = n(494620),
    p = n(131951),
    h = n(556296),
    f = n(924557),
    b = n(435064),
    N = n(894694),
    x = n(779618),
    _ = n(39604),
    E = n(442334),
    j = n(356659),
    O = n(981631),
    C = n(37113),
    S = n(526761),
    v = n(388032),
    T = n(99645),
    I = n(802454),
    y = n(20493);
function A() {
    let e = (0, l.e7)([p.Z], () => p.Z.getHardwareEncoding()),
        { clipsEnabled: t, remindersEnabled: n, decoupledClipsEnabled: s, clipsLength: A, clipsQuality: P } = (0, l.cj)([b.Z], () => b.Z.getSettings()),
        R = (0, l.e7)([b.Z], () => b.Z.getHardwareClassification()),
        D = (0, l.e7)([h.ZP], () => h.ZP.getKeybindForAction(O.kg4.SAVE_CLIP, !0)),
        Z = b.Z.isDecoupledGameClippingEnabled(),
        w = (0, x.Z)(p.Z),
        { showClipsHeaderEntrypoint: k } = f.NV.useExperiment({ location: 'clips_recording_settings' }, { autoTrackExposure: !1 });
    a()(null != D, 'Save clip keybind unset');
    let W = (0, l.e7)([m.default], () => m.default.locale),
        L = i.useMemo(
            () => [
                {
                    value: j.OT.SECONDS_30,
                    label: v.NW.formatToPlainString(v.t['bTFv//'], { count: 30 })
                },
                {
                    value: j.OT.MINUTES_1,
                    label: v.NW.formatToPlainString(v.t.ICo9Nj, { count: 1 })
                },
                {
                    value: j.OT.MINUTES_2,
                    label: v.NW.formatToPlainString(v.t.ICo9Nj, { count: 2 })
                }
            ],
            [W]
        ),
        B = i.useMemo(
            () => [
                {
                    value: C.LY.RESOLUTION_480,
                    label: v.NW.formatToPlainString(v.t.TEOC0N, { resolution: C.LY.RESOLUTION_480 })
                },
                {
                    value: C.LY.RESOLUTION_720,
                    label: v.NW.formatToPlainString(v.t.TEOC0N, { resolution: C.LY.RESOLUTION_720 })
                },
                {
                    value: C.LY.RESOLUTION_1080,
                    label: v.NW.formatToPlainString(v.t.TEOC0N, { resolution: C.LY.RESOLUTION_1080 })
                },
                {
                    value: C.LY.RESOLUTION_1440,
                    label: v.NW.formatToPlainString(v.t.TEOC0N, { resolution: C.LY.RESOLUTION_1440 })
                },
                {
                    value: C.LY.RESOLUTION_SOURCE,
                    label: v.NW.string(v.t.XjXqzs)
                }
            ],
            [W]
        ),
        M = i.useMemo(
            () => [
                {
                    value: C.ws.FPS_15,
                    label: v.NW.formatToPlainString(v.t.Qb44XF, { fps: C.ws.FPS_15 })
                },
                {
                    value: C.ws.FPS_30,
                    label: v.NW.formatToPlainString(v.t.Qb44XF, { fps: C.ws.FPS_30 })
                },
                {
                    value: C.ws.FPS_60,
                    label: v.NW.formatToPlainString(v.t.Qb44XF, { fps: C.ws.FPS_60 })
                }
            ],
            [W]
        ),
        U = i.useCallback(
            (e) => {
                var t, n;
                c.Z.setKeybind(
                    ((t = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })({}, D)),
                    (n = n = { shortcut: e }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
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
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(o.hjN, {
                disabled: !e,
                children: [
                    !e &&
                        (0, r.jsx)(g.Z, {
                            look: g.z.WARNING,
                            className: I.formItem,
                            children: v.NW.format(v.t.kiaF4e, { onClick: () => d.Z.open(O.oAB.VOICE, null, { scrollPosition: S.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION }) })
                        }),
                    R === N.x.BELOW_MINIMUM
                        ? (0, r.jsx)(g.Z, {
                              look: g.z.WARNING,
                              className: I.formItem,
                              children: v.NW.string(v.t.SIxrIC)
                          })
                        : null,
                    (0, r.jsx)(o.j7V, {
                        hideBorder: !0,
                        disabled: !e,
                        className: I.formItem,
                        value: t,
                        note: v.NW.string(v.t['4Qw3ND']),
                        onChange: (e) =>
                            _.em({
                                clipsEnabled: e,
                                trackAnalytics: !0
                            }),
                        children: v.NW.string(v.t.h8rgrK)
                    }),
                    e &&
                        (0, r.jsx)(g.Z, {
                            className: I.formItem,
                            children: v.NW.string(v.t['Z+Mfqa'])
                        })
                ]
            }),
            Z &&
                w &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(o.$i$, {}),
                        (0, r.jsx)(o.hjN, {
                            className: y.marginTop20,
                            disabled: !e,
                            children: (0, r.jsx)(o.j7V, {
                                hideBorder: !0,
                                disabled: !e,
                                className: I.formItem,
                                value: s,
                                note: v.NW.string(v.t.YP3ujo),
                                onChange: (e) =>
                                    _._Q({
                                        enabled: e,
                                        trackAnalytics: !0
                                    }),
                                children: v.NW.string(v.t.yXvykp)
                            })
                        })
                    ]
                }),
            k &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(o.$i$, {}),
                        (0, r.jsx)(o.hjN, {
                            className: y.marginTop20,
                            children: (0, r.jsx)(o.j7V, {
                                hideBorder: !0,
                                className: I.formItem,
                                value: n,
                                note: v.NW.string(v.t.m4Cjj4),
                                onChange: (e) => _.N0(e),
                                children: v.NW.string(v.t['3zwNf3'])
                            })
                        })
                    ]
                }),
            (0, r.jsx)(o.$i$, {}),
            (0, r.jsxs)(o.hjN, {
                className: y.marginTop20,
                children: [
                    (0, r.jsx)(E.Q, {
                        className: I.formItem,
                        select: _.eU,
                        title: v.NW.string(v.t.OgfUio),
                        note: v.NW.string(v.t.H7j4tb),
                        value: A,
                        options: L
                    }),
                    (0, r.jsx)(E.Q, {
                        className: I.formItem,
                        select: (e) =>
                            _.yi({
                                resolution: e,
                                frameRate: P.frameRate
                            }),
                        title: v.NW.string(v.t.aFudZG),
                        note: v.NW.string(v.t.nIrkW1),
                        value: P.resolution,
                        options: B
                    }),
                    (0, r.jsx)(E.Q, {
                        className: I.formItem,
                        select: (e) =>
                            _.yi({
                                resolution: P.resolution,
                                frameRate: e
                            }),
                        title: v.NW.string(v.t['2wScLy']),
                        note: v.NW.string(v.t['Rf9+f3']),
                        value: P.frameRate,
                        options: M
                    }),
                    (0, r.jsx)(E.O, {
                        className: I.formItem,
                        title: v.NW.string(v.t.pf54ER),
                        note: v.NW.string(v.t['QyB/jI']),
                        children: (0, r.jsx)('div', {
                            className: T.keyRecorder,
                            children: (0, r.jsx)(u.Z, {
                                defaultValue: D.shortcut,
                                onChange: U
                            })
                        })
                    })
                ]
            })
        ]
    });
}
