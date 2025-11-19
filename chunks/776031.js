n.d(t, { Z: () => S });
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
function I(e, t) {
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
function T(e, t) {
    (0, o.ZDy)(
        async () => {
            let { default: e } = await n.e("28479").then(n.bind(n, 78865));
            return (n) => (0, r.jsx)(e, I(O({}, n), { analyticsSource: t }));
        },
        { contextKey: e === m.IlC.POPOUT ? o.u1M : o.z1l },
    );
}
function S(e, t) {
    let { preset: n, resolution: y, fps: v, soundshareEnabled: S } = (0, a.cj)([u.Z], () => u.Z.getState()),
        A = (0, a.e7)([_.Z], () => _.Z.getGoLiveSource()),
        C = (0, a.e7)([h.default], () => h.default.getCurrentUser()),
        N = (0, a.e7)([f.Z], () => {
            var t;
            return null == (t = f.Z.getGuild(null == e ? void 0 : e.guildId)) ? void 0 : t.premiumTier;
        }),
        { location: R } = (0, l.O)(),
        P = (0, a.e7)([p.Z, d.Z], () => d.Z.getChannel(p.Z.getVoiceChannelId())),
        D = i.useCallback(
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
                                  sound: S,
                              })
                            : null != A.cameraSource &&
                              (e.cameraSettings = {
                                  videoDeviceGuid: A.cameraSource.videoDeviceGuid,
                                  audioDeviceGuid: A.cameraSource.audioDeviceGuid,
                              }),
                            s.Z.setGoLiveSource(e);
                    }
                } else
                    T(
                        t,
                        I(O({}, R), {
                            object: m.qAy.RADIO_ITEM,
                            objectType: i,
                        }),
                    );
            },
            [t, R, S, A],
        );
    if (null == e) return null;
    let w = n === g.ApplicationStreamPresets.PRESET_DOCUMENTS ? g.ApplicationStreamFPS.FPS_30 : v,
        L = g.af.map((e) => {
            let { value: t, label: n } = e,
                i = (0, c.Z)(g.ApplicationStreamPresets.PRESET_CUSTOM, y, t, C, N, P);
            return (0, r.jsx)(
                o.k5B,
                {
                    group: "stream-settings-fps",
                    id: "stream-settings-fps-".concat(t),
                    label: n,
                    checked: t === v,
                    action: () => D(i, y, t, m.AnalyticsObjectTypes.RESOLUTION),
                },
                "stream-settings-fps-".concat(t),
            );
        }),
        x = g.km.map((e) => {
            let { value: t, label: n } = e,
                i = (0, c.Z)(g.ApplicationStreamPresets.PRESET_CUSTOM, t, w, C, N, P);
            return (0, r.jsx)(
                o.k5B,
                {
                    group: "stream-settings-resolution",
                    id: "stream-settings-resolution-".concat(t),
                    label: n,
                    checked: t === y,
                    action: () => D(i, t, w, m.AnalyticsObjectTypes.RESOLUTION),
                },
                "stream-settings-resolution-".concat(t),
            );
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(o.kSQ, {
                label: b.intl.string(b.t.SkkeIt),
                children: L,
            }),
            (0, r.jsx)(o.kSQ, {
                label: b.intl.string(b.t.rHyPXg),
                children: x,
            }),
        ],
    });
}
