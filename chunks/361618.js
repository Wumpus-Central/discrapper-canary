n.d(t, {
    A: () => I,
});
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(827343),
    l = n(212245),
    c = n(874124),
    u = n(929921),
    d = n(734057),
    f = n(71393),
    p = n(430452),
    _ = n(309010),
    h = n(287809),
    m = n(652215),
    g = n(753070),
    E = n(731854),
    b = n(985018);

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

function A(e, t) {
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

function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function S(e, t) {
    (0, s.mMO)(
        async () => {
            let { default: e } = await n.e("18630").then(n.bind(n, 826789));
            return (n) =>
                (0, r.jsx)(
                    e,
                    v(O({}, n), {
                        analyticsSource: t,
                    }),
                );
        },
        {
            contextKey: e === m.BRT.POPOUT ? s.KX8 : s.SYi,
        },
    );
}

function I(e, t) {
    let { preset: n, resolution: y, fps: A, soundshareEnabled: I } = (0, a.cf)([u.A], () => u.A.getState()),
        T = (0, a.bG)([p.A], () => p.A.getGoLiveSource()),
        C = (0, a.bG)([h.default], () => h.default.getCurrentUser()),
        N = (0, a.bG)([f.A], () => {
            var t;
            return null == (t = f.A.getGuild(null == e ? void 0 : e.guildId)) ? void 0 : t.premiumTier;
        }),
        { location: R } = (0, l.p)(),
        w = (0, a.bG)([_.A, d.A], () => d.A.getChannel(_.A.getVoiceChannelId())),
        P = i.useCallback(
            (e, n, r, i) => {
                if (e) {
                    if (null != T) {
                        let e = {
                            qualityOptions: {
                                preset: g.jQ.PRESET_CUSTOM,
                                resolution: n,
                                frameRate: r,
                            },
                            context: E.x.STREAM,
                        };
                        null != T.desktopSource
                            ? (e.desktopSettings = {
                                  sourceId: T.desktopSource.id,
                                  sound: I,
                              })
                            : null != T.cameraSource &&
                              (e.cameraSettings = {
                                  videoDeviceGuid: T.cameraSource.videoDeviceGuid,
                                  audioDeviceGuid: T.cameraSource.audioDeviceGuid,
                              }),
                            o.A.setGoLiveSource(e);
                    }
                } else
                    S(
                        t,
                        v(O({}, R), {
                            object: m.ZSU.RADIO_ITEM,
                            objectType: i,
                        }),
                    );
            },
            [t, R, I, T],
        );
    if (null == e) return null;
    let D = n === g.jQ.PRESET_DOCUMENTS ? g.kn.FPS_30 : A,
        x = g.ce.map((e) => {
            let { value: t, label: n } = e,
                i = (0, c.A)(g.jQ.PRESET_CUSTOM, y, t, C, N, w);
            return (0, r.jsx)(
                s.iDA,
                {
                    group: "stream-settings-fps",
                    id: "stream-settings-fps-".concat(t),
                    label: n,
                    checked: t === A,
                    action: () => P(i, y, t, m.AnalyticsObjectTypes.RESOLUTION),
                },
                "stream-settings-fps-".concat(t),
            );
        }),
        L = g.Jk.map((e) => {
            let { value: t, label: n } = e,
                i = (0, c.A)(g.jQ.PRESET_CUSTOM, t, D, C, N, w);
            return (0, r.jsx)(
                s.iDA,
                {
                    group: "stream-settings-resolution",
                    id: "stream-settings-resolution-".concat(t),
                    label: n,
                    checked: t === y,
                    action: () => P(i, t, D, m.AnalyticsObjectTypes.RESOLUTION),
                },
                "stream-settings-resolution-".concat(t),
            );
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.rXV, {
                label: b.intl.string(b.t.SkkeIt),
                children: x,
            }),
            (0, r.jsx)(s.rXV, {
                label: b.intl.string(b.t.rHyPXg),
                children: L,
            }),
        ],
    });
}
