r.d(n, {
    Z: function () {
        return C;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(848246),
    s = r(442837),
    l = r(481060),
    u = r(846027),
    c = r(2052),
    d = r(451467),
    f = r(386542),
    p = r(933843),
    h = r(746599),
    _ = r(361291),
    m = r(592125),
    g = r(430824),
    E = r(131951),
    v = r(944486),
    y = r(594174),
    b = r(981631),
    I = r(37113),
    T = r(65154),
    S = r(388032);
function A(e, n) {
    (0, l.openModalLazy)(
        async () => {
            let { default: e } = await r.e('28479').then(r.bind(r, 78865));
            return (r) =>
                (0, i.jsx)(e, {
                    ...r,
                    analyticsSource: n
                });
        },
        { contextKey: e === b.IlC.POPOUT ? l.POPOUT_MODAL_CONTEXT : l.DEFAULT_MODAL_CONTEXT }
    );
}
function C(e, n) {
    let { preset: r, resolution: C, fps: N } = (0, s.cj)([_.Z], () => _.Z.getState()),
        R = (0, s.e7)([E.Z], () => E.Z.getGoLiveSource()),
        O = (0, s.e7)([y.default], () => y.default.getCurrentUser()),
        D = (0, s.e7)([g.Z], () => {
            var n;
            return null === (n = g.Z.getGuild(null == e ? void 0 : e.guildId)) || void 0 === n ? void 0 : n.premiumTier;
        }),
        { location: x } = (0, c.O)(),
        { available: L, activated: w } = (0, f.k)(o.q.STREAM_HIGH_QUALITY),
        P = (0, s.e7)([v.Z, m.Z], () => m.Z.getChannel(v.Z.getVoiceChannelId())),
        M = a.useCallback(
            (e, r, i, a) => {
                if (e) {
                    if (null != R) {
                        let e = {
                            qualityOptions: {
                                preset: I.tI.PRESET_CUSTOM,
                                resolution: r,
                                frameRate: i
                            },
                            context: T.Yn.STREAM
                        };
                        null != R.desktopSource
                            ? (e.desktopSettings = {
                                  sourceId: R.desktopSource.id,
                                  sound: !0
                              })
                            : null != R.cameraSource &&
                              (e.cameraSettings = {
                                  videoDeviceGuid: R.cameraSource.videoDeviceGuid,
                                  audioDeviceGuid: R.cameraSource.audioDeviceGuid
                              }),
                            L && (0, h.J1)(!(0, p.mc)(r, i)),
                            u.Z.setGoLiveSource(e);
                    }
                } else
                    A(n, {
                        ...x,
                        object: b.qAy.RADIO_ITEM,
                        objectType: a
                    });
            },
            [n, x, R, L]
        );
    if (null == e) return null;
    let k = r === I.tI.PRESET_DOCUMENTS ? I.ws.FPS_30 : N,
        U = I.af.map((e) => {
            let { value: n, label: r } = e,
                a = (0, d.Z)(I.tI.PRESET_CUSTOM, C, n, O, D, P);
            return (0, i.jsx)(
                l.MenuRadioItem,
                {
                    group: 'stream-settings-fps',
                    id: 'stream-settings-fps-'.concat(n),
                    label: r,
                    checked: n === N,
                    action: () => M(a, C, n, b.Qqv.RESOLUTION)
                },
                'stream-settings-fps-'.concat(n)
            );
        }),
        B = I.km.map((e) => {
            let { value: n, label: r } = e,
                a = (0, d.Z)(I.tI.PRESET_CUSTOM, n, k, O, D, P);
            return (
                L && !w && (a = !1),
                (0, i.jsx)(
                    l.MenuRadioItem,
                    {
                        group: 'stream-settings-resolution',
                        id: 'stream-settings-resolution-'.concat(n),
                        label: r,
                        checked: n === C,
                        action: () => M(a, n, k, b.Qqv.RESOLUTION)
                    },
                    'stream-settings-resolution-'.concat(n)
                )
            );
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.MenuGroup, {
                label: S.intl.string(S.t.SkkeIi),
                children: U
            }),
            (0, i.jsx)(l.MenuGroup, {
                label: S.intl.string(S.t.rHyPXl),
                children: B
            })
        ]
    });
}
