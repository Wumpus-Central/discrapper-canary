n.d(t, {
    A: () => S,
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
    y = n(985018);

function b(e, t, n) {
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
                b(e, t, n[t]);
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

function A(e, t) {
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
    (0, s.mMO)(
        async () => {
            let { default: e } = await n.e("18630").then(n.bind(n, 826789));
            return (n) =>
                (0, r.jsx)(
                    e,
                    A(O({}, n), {
                        analyticsSource: t,
                    }),
                );
        },
        {
            contextKey: e === m.BRT.POPOUT ? s.KX8 : s.SYi,
        },
    );
}

function S(e, t) {
    let { preset: n, resolution: b, fps: v, soundshareEnabled: S } = (0, a.cf)([u.A], () => u.A.getState()),
        T = (0, a.bG)([p.A], () => p.A.getGoLiveSource()),
        C = (0, a.bG)([h.default], () => h.default.getCurrentUser()),
        N = (0, a.bG)([f.A], () => {
            var t;
            return null == (t = f.A.getGuild(null == e ? void 0 : e.guildId)) ? void 0 : t.premiumTier;
        }),
        { location: w } = (0, l.p)(),
        R = (0, a.bG)([_.A, d.A], () => d.A.getChannel(_.A.getVoiceChannelId())),
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
                                  sound: S,
                              })
                            : null != T.cameraSource &&
                              (e.cameraSettings = {
                                  videoDeviceGuid: T.cameraSource.videoDeviceGuid,
                                  audioDeviceGuid: T.cameraSource.audioDeviceGuid,
                              }),
                            o.A.setGoLiveSource(e);
                    }
                } else
                    I(
                        t,
                        A(O({}, w), {
                            object: m.ZSU.RADIO_ITEM,
                            objectType: i,
                        }),
                    );
            },
            [t, w, S, T],
        );
    if (null == e) return null;
    let D = n === g.jQ.PRESET_DOCUMENTS ? g.kn.FPS_30 : v,
        x = g.ce.map((e) => {
            let { value: t, label: n, subtext: i } = e,
                a = (0, c.A)(g.jQ.PRESET_CUSTOM, b, t, C, N, R);
            return (0, r.jsx)(
                s.iDA,
                {
                    group: "stream-settings-fps",
                    id: "stream-settings-fps-".concat(t),
                    label: n,
                    subtext: i,
                    checked: t === v,
                    action: () => P(a, b, t, m.AnalyticsObjectTypes.RESOLUTION),
                },
                "stream-settings-fps-".concat(t),
            );
        }),
        L = g.Jk.map((e) => {
            let { value: t, label: n, subtext: i } = e,
                a = (0, c.A)(g.jQ.PRESET_CUSTOM, t, D, C, N, R);
            return (0, r.jsx)(
                s.iDA,
                {
                    group: "stream-settings-resolution",
                    id: "stream-settings-resolution-".concat(t),
                    label: n,
                    subtext: i,
                    checked: t === b,
                    action: () => P(a, t, D, m.AnalyticsObjectTypes.RESOLUTION),
                },
                "stream-settings-resolution-".concat(t),
            );
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.rXV, {
                label: y.intl.string(y.t.SkkeIt),
                children: x,
            }),
            (0, r.jsx)(s.rXV, {
                label: y.intl.string(y.t.rHyPXg),
                children: L,
            }),
        ],
    });
}
