n.d(t, {
    b: function () {
        return M;
    }
}),
    n(47120),
    n(773603);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
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
    C = n(120522),
    x = n(386542),
    v = n(933843),
    _ = n(746599),
    I = n(1163),
    E = n(738672),
    b = n(981631),
    Z = n(37113),
    S = n(388032),
    N = n(235726);
function T(e) {
    let { className: t, onDismiss: n } = e;
    return (0, i.jsx)(u.Button, {
        className: t,
        'aria-label': S.intl.string(S.t.cpT0Cg),
        look: u.Button.Looks.BLANK,
        size: u.Button.Sizes.NONE,
        onClick: n,
        children: (0, i.jsx)(u.XSmallIcon, {
            size: 'xs',
            className: N.closeIcon,
            color: 'white'
        })
    });
}
let j = Z.LY.RESOLUTION_1440,
    A = Z.ws.FPS_60;
function y(e) {
    let { channel: t } = e,
        n = (0, c.e7)([p.Z], () => p.Z.useReducedMotion),
        [r, a] = l.useState(!1),
        { preset: o } = (0, c.cj)([m.Z], () => m.Z.getState()),
        x = (0, c.e7)([f.Z], () => f.Z.getGoLiveSource()),
        I = l.useCallback(() => {
            a(!0),
                (0, C.S)(s.q.STREAM_HIGH_QUALITY)
                    .then((e) => {
                        if (e) {
                            if (
                                ((0, _.J1)(!(0, v.mc)(j, A)),
                                g.default.track(b.rMx.PERK_DEMO_OFFER_ACCEPTED, {
                                    guild_id: t.guild_id,
                                    channel_id: t.id,
                                    perk_type: s.q.STREAM_HIGH_QUALITY,
                                    resolution: j,
                                    max_fps: A
                                }),
                                (0, _.cD)(!1),
                                null == x)
                            )
                                return;
                            let e = {
                                qualityOptions: {
                                    preset: o,
                                    resolution: j,
                                    frameRate: A
                                },
                                context: d.Yn.STREAM
                            };
                            null != x.desktopSource
                                ? (e.desktopSettings = {
                                      sourceId: x.desktopSource.id,
                                      sound: !0
                                  })
                                : null != x.cameraSource &&
                                  (e.cameraSettings = {
                                      videoDeviceGuid: x.cameraSource.videoDeviceGuid,
                                      audioDeviceGuid: x.cameraSource.audioDeviceGuid
                                  }),
                                h.Z.setGoLiveSource(e);
                        }
                    })
                    .catch(() => {})
                    .finally(() => {
                        a(!1);
                    });
        }, [o, t, x]);
    return (0, i.jsx)(u.ShinyButton, {
        fullWidth: !0,
        pauseAnimation: n,
        color: u.Button.Colors.GREEN,
        size: u.Button.Sizes.SMALL,
        className: N.optInButton,
        onClick: I,
        submitting: r,
        children: S.intl.string(S.t['Rpn/09'])
    });
}
function P(e) {
    let { channel: t, hidden: n, onDismiss: l } = e,
        r = I.Z.useExperiment({ location: 'StreamButtonDemoOptInPopoutContent' }, { autoTrackExposure: !1 }).extendedDemoDuration;
    return (0, i.jsxs)('div', {
        className: a()(N.optInPopout, N.variant2OptInPopout, { [N.hidden]: n }),
        children: [
            (0, i.jsx)('img', {
                className: N.image,
                src: 'https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png',
                alt: 'HD Streaming Nitro Perk'
            }),
            (0, i.jsx)(T, {
                className: N.variant2CloseButton,
                onDismiss: l
            }),
            (0, i.jsx)('div', {
                className: N.variant2InfoContainerParent,
                children: (0, i.jsxs)('div', {
                    className: N.variant2InfoContainer,
                    children: [
                        (0, i.jsx)(o.xv, {
                            className: N.variant2Text,
                            variant: 'text-sm/medium',
                            children: r ? S.intl.string(S.t.ZYQ2zc) : S.intl.string(S.t.kr8AEx)
                        }),
                        (0, i.jsx)(y, { channel: t })
                    ]
                })
            })
        ]
    });
}
function M(e) {
    let { channel: t, ...n } = e,
        { shouldShowOptInPopout: r } = (0, x.k)(s.q.STREAM_HIGH_QUALITY),
        { enabled: a } = I.Z.useExperiment(
            { location: 'StreamButtonDemoOptInPopout' },
            {
                autoTrackExposure: !1,
                disable: !r
            }
        ),
        o = l.useRef(!1);
    return (l.useEffect(() => {
        r &&
            a &&
            !o.current &&
            ((o.current = !0),
            g.default.track(b.rMx.PERK_DEMO_OFFER_VIEWED, {
                guild_id: t.guild_id,
                channel_id: t.id,
                perk_type: s.q.STREAM_HIGH_QUALITY
            }));
    }, [r, a, t]),
    r && a)
        ? (0, i.jsx)(E.h, {
              ...n,
              renderComponent: (e) =>
                  (0, i.jsx)(P, {
                      ...e,
                      channel: t
                  })
          })
        : null;
}
