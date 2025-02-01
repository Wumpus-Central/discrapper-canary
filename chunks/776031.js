n.d(t, { Z: () => A });
var i = n(200651),
    r = n(192379),
    a = n(848246),
    s = n(442837),
    o = n(481060),
    l = n(846027),
    u = n(2052),
    c = n(451467),
    d = n(386542),
    f = n(933843),
    _ = n(746599),
    p = n(361291),
    h = n(592125),
    m = n(430824),
    g = n(131951),
    E = n(944486),
    v = n(594174),
    y = n(981631),
    I = n(37113),
    T = n(65154),
    b = n(388032);
function S(e, t) {
    (0, o.ZDy)(
        async () => {
            let { default: e } = await n.e('28479').then(n.bind(n, 78865));
            return (n) =>
                (0, i.jsx)(e, {
                    ...n,
                    analyticsSource: t
                });
        },
        { contextKey: e === y.IlC.POPOUT ? o.u1M : o.z1l }
    );
}
function A(e, t) {
    let { preset: n, resolution: A, fps: N } = (0, s.cj)([p.Z], () => p.Z.getState()),
        C = (0, s.e7)([g.Z], () => g.Z.getGoLiveSource()),
        R = (0, s.e7)([v.default], () => v.default.getCurrentUser()),
        O = (0, s.e7)([m.Z], () => {
            var t;
            return null === (t = m.Z.getGuild(null == e ? void 0 : e.guildId)) || void 0 === t ? void 0 : t.premiumTier;
        }),
        { location: D } = (0, u.O)(),
        { available: x, activated: L } = (0, d.k)(a.q.STREAM_HIGH_QUALITY),
        P = (0, s.e7)([E.Z, h.Z], () => h.Z.getChannel(E.Z.getVoiceChannelId())),
        w = r.useCallback(
            (e, n, i, r) => {
                if (e) {
                    if (null != C) {
                        let e = {
                            qualityOptions: {
                                preset: I.tI.PRESET_CUSTOM,
                                resolution: n,
                                frameRate: i
                            },
                            context: T.Yn.STREAM
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
                            x && (0, _.J1)(!(0, f.mc)(n, i)),
                            l.Z.setGoLiveSource(e);
                    }
                } else
                    S(t, {
                        ...D,
                        object: y.qAy.RADIO_ITEM,
                        objectType: r
                    });
            },
            [t, D, C, x]
        );
    if (null == e) return null;
    let M = n === I.tI.PRESET_DOCUMENTS ? I.ws.FPS_30 : N,
        k = I.af.map((e) => {
            let { value: t, label: n } = e,
                r = (0, c.Z)(I.tI.PRESET_CUSTOM, A, t, R, O, P);
            return (0, i.jsx)(
                o.k5B,
                {
                    group: 'stream-settings-fps',
                    id: 'stream-settings-fps-'.concat(t),
                    label: n,
                    checked: t === N,
                    action: () => w(r, A, t, y.Qqv.RESOLUTION)
                },
                'stream-settings-fps-'.concat(t)
            );
        }),
        U = I.km.map((e) => {
            let { value: t, label: n } = e,
                r = (0, c.Z)(I.tI.PRESET_CUSTOM, t, M, R, O, P);
            return (
                x && !L && (r = !1),
                (0, i.jsx)(
                    o.k5B,
                    {
                        group: 'stream-settings-resolution',
                        id: 'stream-settings-resolution-'.concat(t),
                        label: n,
                        checked: t === A,
                        action: () => w(r, t, M, y.Qqv.RESOLUTION)
                    },
                    'stream-settings-resolution-'.concat(t)
                )
            );
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.kSQ, {
                label: b.intl.string(b.t.SkkeIi),
                children: k
            }),
            (0, i.jsx)(o.kSQ, {
                label: b.intl.string(b.t.rHyPXl),
                children: U
            })
        ]
    });
}
