n.d(t, { Z: () => T });
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
    s = n(846027),
    l = n(2052),
    c = n(451467),
    u = n(361291),
    d = n(592125),
    f = n(430824),
    p = n(131951),
    _ = n(944486),
    m = n(594174),
    h = n(981631),
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
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                y(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
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
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e, t) {
    (0, o.ZDy)(
        async () => {
            let { default: e } = await n.e("28479").then(n.bind(n, 78865));
            return (n) => (0, r.jsx)(e, S(O({}, n), { analyticsSource: t }));
        },
        { contextKey: e === h.IlC.POPOUT ? o.u1M : o.z1l },
    );
}
function T(e, t) {
    let { preset: n, resolution: y, fps: v, soundshareEnabled: T } = (0, a.cj)([u.Z], () => u.Z.getState()),
        A = (0, a.e7)([p.Z], () => p.Z.getGoLiveSource()),
        C = (0, a.e7)([m.default], () => m.default.getCurrentUser()),
        N = (0, a.e7)([f.Z], () => {
            var t;
            return null == (t = f.Z.getGuild(null == e ? void 0 : e.guildId)) ? void 0 : t.premiumTier;
        }),
        { location: P } = (0, l.O)(),
        R = (0, a.e7)([_.Z, d.Z], () => d.Z.getChannel(_.Z.getVoiceChannelId())),
        w = i.useCallback(
            (e, n, r, i) => {
                if (e) {
                    if (null != A) {
                        let e = {
                            qualityOptions: {
                                preset: g.ApplicationStreamPresets.PRESET_CUSTOM,
                                resolution: n,
                                frameRate: r,
                            },
                            context: E.Yn.STREAM,
                        };
                        null != A.desktopSource
                            ? (e.desktopSettings = {
                                  sourceId: A.desktopSource.id,
                                  sound: T,
                              })
                            : null != A.cameraSource &&
                              (e.cameraSettings = {
                                  videoDeviceGuid: A.cameraSource.videoDeviceGuid,
                                  audioDeviceGuid: A.cameraSource.audioDeviceGuid,
                              }),
                            s.Z.setGoLiveSource(e);
                    }
                } else
                    I(
                        t,
                        S(O({}, P), {
                            object: h.qAy.RADIO_ITEM,
                            objectType: i,
                        }),
                    );
            },
            [t, P, T, A],
        );
    if (null == e) return null;
    let D = n === g.ApplicationStreamPresets.PRESET_DOCUMENTS ? g.ApplicationStreamFPS.FPS_30 : v,
        x = g.af.map((e) => {
            let { value: t, label: n } = e,
                i = (0, c.Z)(g.ApplicationStreamPresets.PRESET_CUSTOM, y, t, C, N, R);
            return (0, r.jsx)(
                o.k5B,
                {
                    group: "stream-settings-fps",
                    id: "stream-settings-fps-".concat(t),
                    label: n,
                    checked: t === v,
                    action: () => w(i, y, t, h.AnalyticsObjectTypes.RESOLUTION),
                },
                "stream-settings-fps-".concat(t),
            );
        }),
        L = g.km.map((e) => {
            let { value: t, label: n } = e,
                i = (0, c.Z)(g.ApplicationStreamPresets.PRESET_CUSTOM, t, D, C, N, R);
            return (0, r.jsx)(
                o.k5B,
                {
                    group: "stream-settings-resolution",
                    id: "stream-settings-resolution-".concat(t),
                    label: n,
                    checked: t === y,
                    action: () => w(i, t, D, h.AnalyticsObjectTypes.RESOLUTION),
                },
                "stream-settings-resolution-".concat(t),
            );
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(o.kSQ, {
                label: b.intl.string(b.t.SkkeIt),
                children: x,
            }),
            (0, r.jsx)(o.kSQ, {
                label: b.intl.string(b.t.rHyPXg),
                children: L,
            }),
        ],
    });
}
