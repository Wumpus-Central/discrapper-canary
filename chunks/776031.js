n.d(t, { Z: () => T });
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(481060),
    s = n(846027),
    l = n(2052),
    c = n(451467),
    u = n(361291),
    d = n(592125),
    f = n(430824),
    _ = n(131951),
    p = n(944486),
    h = n(594174),
    m = n(981631),
    g = n(37113),
    E = n(65154),
    b = n(388032);
function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e, t) {
    (0, a.ZDy)(
        async () => {
            let { default: e } = await n.e('28479').then(n.bind(n, 78865));
            return (n) => (0, r.jsx)(e, I(v({}, n), { analyticsSource: t }));
        },
        { contextKey: e === m.IlC.POPOUT ? a.u1M : a.z1l }
    );
}
function T(e, t) {
    let { preset: n, resolution: y, fps: O } = (0, o.cj)([u.Z], () => u.Z.getState()),
        T = (0, o.e7)([_.Z], () => _.Z.getGoLiveSource()),
        N = (0, o.e7)([h.default], () => h.default.getCurrentUser()),
        A = (0, o.e7)([f.Z], () => {
            var t;
            return null == (t = f.Z.getGuild(null == e ? void 0 : e.guildId)) ? void 0 : t.premiumTier;
        }),
        { location: C } = (0, l.O)(),
        R = (0, o.e7)([p.Z, d.Z], () => d.Z.getChannel(p.Z.getVoiceChannelId())),
        P = i.useCallback(
            (e, n, r, i) => {
                if (e) {
                    if (null != T) {
                        let e = {
                            qualityOptions: {
                                preset: g.tI.PRESET_CUSTOM,
                                resolution: n,
                                frameRate: r
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
                            s.Z.setGoLiveSource(e);
                    }
                } else
                    S(
                        t,
                        I(v({}, C), {
                            object: m.qAy.RADIO_ITEM,
                            objectType: i
                        })
                    );
            },
            [t, C, T]
        );
    if (null == e) return null;
    let w = n === g.tI.PRESET_DOCUMENTS ? g.ws.FPS_30 : O,
        D = g.af.map((e) => {
            let { value: t, label: n } = e,
                i = (0, c.Z)(g.tI.PRESET_CUSTOM, y, t, N, A, R);
            return (0, r.jsx)(
                a.k5B,
                {
                    group: 'stream-settings-fps',
                    id: 'stream-settings-fps-'.concat(t),
                    label: n,
                    checked: t === O,
                    action: () => P(i, y, t, m.Qqv.RESOLUTION)
                },
                'stream-settings-fps-'.concat(t)
            );
        }),
        L = g.km.map((e) => {
            let { value: t, label: n } = e,
                i = (0, c.Z)(g.tI.PRESET_CUSTOM, t, w, N, A, R);
            return (0, r.jsx)(
                a.k5B,
                {
                    group: 'stream-settings-resolution',
                    id: 'stream-settings-resolution-'.concat(t),
                    label: n,
                    checked: t === y,
                    action: () => P(i, t, w, m.Qqv.RESOLUTION)
                },
                'stream-settings-resolution-'.concat(t)
            );
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.kSQ, {
                label: b.NW.string(b.t.SkkeIi),
                children: D
            }),
            (0, r.jsx)(a.kSQ, {
                label: b.NW.string(b.t.rHyPXl),
                children: L
            })
        ]
    });
}
