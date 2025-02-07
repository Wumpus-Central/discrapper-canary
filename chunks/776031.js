n.d(t, { Z: () => I });
var i = n(200651),
    r = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(846027),
    l = n(2052),
    u = n(451467),
    c = n(361291),
    d = n(592125),
    f = n(430824),
    _ = n(131951),
    p = n(944486),
    h = n(594174),
    m = n(981631),
    g = n(37113),
    E = n(65154),
    v = n(388032);
function y(e, t) {
    (0, s.ZDy)(
        async () => {
            let { default: e } = await n.e('28479').then(n.bind(n, 78865));
            return (n) =>
                (0, i.jsx)(e, {
                    ...n,
                    analyticsSource: t
                });
        },
        { contextKey: e === m.IlC.POPOUT ? s.u1M : s.z1l }
    );
}
function I(e, t) {
    let { preset: n, resolution: I, fps: b } = (0, a.cj)([c.Z], () => c.Z.getState()),
        T = (0, a.e7)([_.Z], () => _.Z.getGoLiveSource()),
        S = (0, a.e7)([h.default], () => h.default.getCurrentUser()),
        A = (0, a.e7)([f.Z], () => {
            var t;
            return null === (t = f.Z.getGuild(null == e ? void 0 : e.guildId)) || void 0 === t ? void 0 : t.premiumTier;
        }),
        { location: N } = (0, l.O)(),
        C = (0, a.e7)([p.Z, d.Z], () => d.Z.getChannel(p.Z.getVoiceChannelId())),
        R = r.useCallback(
            (e, n, i, r) => {
                if (e) {
                    if (null != T) {
                        let e = {
                            qualityOptions: {
                                preset: g.tI.PRESET_CUSTOM,
                                resolution: n,
                                frameRate: i
                            },
                            context: E.Yn.STREAM
                        };
                        null != T.desktopSource
                            ? (e.desktopSettings = {
                                  sourceId: T.desktopSource.id,
                                  sound: !0
                              })
                            : null != T.cameraSource &&
                              (e.cameraSettings = {
                                  videoDeviceGuid: T.cameraSource.videoDeviceGuid,
                                  audioDeviceGuid: T.cameraSource.audioDeviceGuid
                              }),
                            o.Z.setGoLiveSource(e);
                    }
                } else
                    y(t, {
                        ...N,
                        object: m.qAy.RADIO_ITEM,
                        objectType: r
                    });
            },
            [t, N, T]
        );
    if (null == e) return null;
    let O = n === g.tI.PRESET_DOCUMENTS ? g.ws.FPS_30 : b,
        D = g.af.map((e) => {
            let { value: t, label: n } = e,
                r = (0, u.Z)(g.tI.PRESET_CUSTOM, I, t, S, A, C);
            return (0, i.jsx)(
                s.k5B,
                {
                    group: 'stream-settings-fps',
                    id: 'stream-settings-fps-'.concat(t),
                    label: n,
                    checked: t === b,
                    action: () => R(r, I, t, m.Qqv.RESOLUTION)
                },
                'stream-settings-fps-'.concat(t)
            );
        }),
        x = g.km.map((e) => {
            let { value: t, label: n } = e,
                r = (0, u.Z)(g.tI.PRESET_CUSTOM, t, O, S, A, C);
            return (0, i.jsx)(
                s.k5B,
                {
                    group: 'stream-settings-resolution',
                    id: 'stream-settings-resolution-'.concat(t),
                    label: n,
                    checked: t === I,
                    action: () => R(r, t, O, m.Qqv.RESOLUTION)
                },
                'stream-settings-resolution-'.concat(t)
            );
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(s.kSQ, {
                label: v.intl.string(v.t.SkkeIi),
                children: D
            }),
            (0, i.jsx)(s.kSQ, {
                label: v.intl.string(v.t.rHyPXl),
                children: x
            })
        ]
    });
}
