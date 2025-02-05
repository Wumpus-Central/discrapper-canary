n.d(t, { b: () => R }), n(47120), n(773603);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(848246),
    o = n(793030),
    c = n(442837),
    d = n(46973),
    u = n(481060),
    h = n(846027),
    p = n(607070),
    m = n(361291),
    f = n(131951),
    g = n(626135),
    _ = n(120522),
    C = n(386542),
    x = n(933843),
    v = n(746599),
    E = n(1163),
    I = n(738672),
    b = n(981631),
    Z = n(37113),
    N = n(388032),
    T = n(235726);
function S(e) {
    let { className: t, onDismiss: n } = e;
    return (0, i.jsx)(u.zxk, {
        className: t,
        'aria-label': N.intl.string(N.t.cpT0Cg),
        look: u.zxk.Looks.BLANK,
        size: u.zxk.Sizes.NONE,
        onClick: n,
        children: (0, i.jsx)(u.Dio, {
            size: 'xs',
            className: T.closeIcon,
            color: 'white'
        })
    });
}
let j = Z.LY.RESOLUTION_1440,
    y = Z.ws.FPS_60;
function A(e) {
    let { channel: t } = e,
        n = (0, c.e7)([p.Z], () => p.Z.useReducedMotion),
        [a, r] = l.useState(!1),
        { preset: o } = (0, c.cj)([m.Z], () => m.Z.getState()),
        C = (0, c.e7)([f.Z], () => f.Z.getGoLiveSource()),
        E = l.useCallback(() => {
            r(!0),
                (0, _.S)(s.q.STREAM_HIGH_QUALITY)
                    .then((e) => {
                        if (e) {
                            if (
                                ((0, v.J1)(!(0, x.mc)(j, y)),
                                g.default.track(b.rMx.PERK_DEMO_OFFER_ACCEPTED, {
                                    guild_id: t.guild_id,
                                    channel_id: t.id,
                                    perk_type: s.q.STREAM_HIGH_QUALITY,
                                    resolution: j,
                                    max_fps: y
                                }),
                                (0, v.cD)(!1),
                                null == C)
                            )
                                return;
                            let e = {
                                qualityOptions: {
                                    preset: o,
                                    resolution: j,
                                    frameRate: y
                                },
                                context: d.Yn.STREAM
                            };
                            null != C.desktopSource
                                ? (e.desktopSettings = {
                                      sourceId: C.desktopSource.id,
                                      sound: !0
                                  })
                                : null != C.cameraSource &&
                                  (e.cameraSettings = {
                                      videoDeviceGuid: C.cameraSource.videoDeviceGuid,
                                      audioDeviceGuid: C.cameraSource.audioDeviceGuid
                                  }),
                                h.Z.setGoLiveSource(e);
                        }
                    })
                    .catch(() => {})
                    .finally(() => {
                        r(!1);
                    });
        }, [o, t, C]);
    return (0, i.jsx)(u.gtL, {
        fullWidth: !0,
        pauseAnimation: n,
        color: u.zxk.Colors.GREEN,
        size: u.zxk.Sizes.SMALL,
        className: T.optInButton,
        onClick: E,
        submitting: a,
        children: N.intl.string(N.t['Rpn/09'])
    });
}
function P(e) {
    let { channel: t, hidden: n, onDismiss: l } = e,
        a = E.Z.useExperiment({ location: 'StreamButtonDemoOptInPopoutContent' }, { autoTrackExposure: !1 }).extendedDemoDuration;
    return (0, i.jsxs)('div', {
        className: r()(T.optInPopout, T.variant2OptInPopout, { [T.hidden]: n }),
        children: [
            (0, i.jsx)('img', {
                className: T.image,
                src: 'https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png',
                alt: 'HD Streaming Nitro Perk'
            }),
            (0, i.jsx)(S, {
                className: T.variant2CloseButton,
                onDismiss: l
            }),
            (0, i.jsx)('div', {
                className: T.variant2InfoContainerParent,
                children: (0, i.jsxs)('div', {
                    className: T.variant2InfoContainer,
                    children: [
                        (0, i.jsx)(o.xv, {
                            className: T.variant2Text,
                            variant: 'text-sm/medium',
                            children: a ? N.intl.string(N.t.ZYQ2zc) : N.intl.string(N.t.kr8AEx)
                        }),
                        (0, i.jsx)(A, { channel: t })
                    ]
                })
            })
        ]
    });
}
function R(e) {
    let { channel: t, ...n } = e,
        { shouldShowOptInPopout: a } = (0, C.k)(s.q.STREAM_HIGH_QUALITY),
        { enabled: r } = E.Z.useExperiment(
            { location: 'StreamButtonDemoOptInPopout' },
            {
                autoTrackExposure: !1,
                disable: !a
            }
        ),
        o = l.useRef(!1);
    return (l.useEffect(() => {
        a &&
            r &&
            !o.current &&
            ((o.current = !0),
            g.default.track(b.rMx.PERK_DEMO_OFFER_VIEWED, {
                guild_id: t.guild_id,
                channel_id: t.id,
                perk_type: s.q.STREAM_HIGH_QUALITY
            }));
    }, [a, r, t]),
    a && r)
        ? (0, i.jsx)(I.h, {
              ...n,
              renderComponent: (e) =>
                  (0, i.jsx)(P, {
                      ...e,
                      channel: t
                  })
          })
        : null;
}
