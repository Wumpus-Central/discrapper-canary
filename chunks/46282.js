var n = i(477900),
    l = i(582128),
    a = i(855986),
    r = i(858899),
    o = i(192308),
    s = i(258585),
    u = i(279250),
    c = i(880144),
    d = i(474834),
    f = i(929921),
    A = i(734057),
    p = i(71393),
    y = i(754712),
    m = i(576705),
    g = i(309010),
    I = i(287809),
    E = i(753070),
    _ = i(792996);
async function S(t) {
    let {
        pid: e,
        voiceChannelId: l,
        user: a,
        canGoLive: u,
        canStream: c,
        analyticsLocations: A,
        allowOneClickGoLive: p,
        onBeforeShowModal: y,
        onModalStreamStart: m,
        onOneClickGoLive: g,
        appContext: I,
        selectSource: S = !1,
    } = t;
    if (u && c) {
        if (p && null !== l) {
            let t = f.A.getState().preset;
            if (t === E.jQ.PRESET_DOCUMENTS) {
                let { allowAutoQuality: e } = (0, s.eO)({ location: "overlay _goLive" });
                t = e ? E.jQ.PRESET_AUTO : E.jQ.PRESET_VIDEO;
            }
            let [i] = await (0, d.A)(e, { preset: t, analyticsLocations: A });
            if (i) return void g?.();
        }
        if (null == a)
            return void (0, r.P0)({ text: _.intl.string(_.t.OKnWyb), variant: "critical", surface: "overlay" });
        (y?.(),
            (0, o.mM)(
                async () => {
                    let { default: t } = await Promise.all([
                        i.e(249169),
                        i.e(473782),
                        i.e(553464),
                        i.e(130662),
                        i.e(498552),
                        i.e(858337),
                        i.e(944801),
                        i.e(236946),
                        i.e(338601),
                        i.e(944727),
                        i.e(943371),
                        i.e(725241),
                        i.e(114792),
                        i.e(758913),
                        i.e(489876),
                        i.e(352435),
                        i.e(191782),
                        i.e(190088),
                    ]).then(i.bind(i, 742527));
                    return (i) =>
                        (0, n.jsx)(t, { ...i, sourcePID: e, selectSource: S, onStreamStart: m, analyticsLocations: A });
                },
                { contextKey: null != I ? (0, o.TI)(I) : void 0 },
            ));
    }
}
i.d(
    e,
    {},
    {
        H: async function (t) {
            let {
                    pid: e,
                    analyticsLocations: i,
                    allowOneClickGoLive: n = !1,
                    onBeforeShowModal: l,
                    onModalStreamStart: a,
                    onOneClickGoLive: r,
                    appContext: o,
                    selectSource: s = !1,
                } = t,
                d = g.Ay.getVoiceChannelId(),
                f = A.A.getChannel(d),
                E = I.default.getCurrentUser(),
                _ = null != f && (0, u.vz)(f, p.A, m.A),
                N = (0, c.A)(y.Ay);
            await S({
                pid: e,
                voiceChannelId: d,
                user: E,
                canGoLive: N,
                canStream: _,
                analyticsLocations: i,
                allowOneClickGoLive: n,
                onBeforeShowModal: l,
                onModalStreamStart: a,
                onOneClickGoLive: r,
                appContext: o,
                selectSource: s,
            });
        },
        y: function (t) {
            let { pid: e, allowOneClickGoLive: i = !1, onBeforeShowModal: n, onOneClickGoLive: r, appContext: o } = t,
                s = (0, a.bG)([g.Ay], () => g.Ay.getVoiceChannelId()),
                d = (0, a.bG)([A.A], () => A.A.getChannel(s), [s]),
                f = (0, a.bG)([I.default], () => I.default.getCurrentUser()),
                E = (0, a.bG)([y.Ay], () => (0, c.A)(y.Ay)),
                _ = (0, a.bG)([p.A, m.A], () => null != d && (0, u.vz)(d, p.A, m.A));
            return l.useCallback(async () => {
                await S({
                    pid: e,
                    voiceChannelId: s,
                    user: f,
                    canGoLive: E,
                    canStream: _,
                    allowOneClickGoLive: i,
                    onBeforeShowModal: n,
                    onOneClickGoLive: r,
                    appContext: o,
                });
            }, [e, s, f, E, _, i, n, r, o]);
        },
    },
);
