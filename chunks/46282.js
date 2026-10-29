i.d(e, { H: () => N, y: () => S });
var n = i(477900),
    l = i(582128),
    a = i(17928),
    r = i(858899),
    s = i(192308),
    o = i(258585),
    u = i(279250),
    c = i(880144),
    d = i(560595),
    A = i(929921),
    f = i(734057),
    p = i(71393),
    y = i(999926),
    m = i(576705),
    g = i(309010),
    I = i(287809),
    E = i(753070),
    _ = i(105292);
function S(t) {
    let { pid: e, allowOneClickGoLive: i = !1, onBeforeShowModal: n, onOneClickGoLive: r, appContext: s } = t,
        o = (0, a.bG)([g.Ay], () => g.Ay.getVoiceChannelId()),
        d = (0, a.bG)([f.A], () => f.A.getChannel(o), [o]),
        A = (0, a.bG)([I.default], () => I.default.getCurrentUser()),
        E = (0, a.bG)([y.Ay], () => (0, c.A)(y.Ay)),
        _ = (0, a.bG)([p.A, m.A], () => null != d && (0, u.vz)(d, p.A, m.A));
    return l.useCallback(async () => {
        await C({
            pid: e,
            voiceChannelId: o,
            user: A,
            canGoLive: E,
            canStream: _,
            allowOneClickGoLive: i,
            onBeforeShowModal: n,
            onOneClickGoLive: r,
            appContext: s,
        });
    }, [e, o, A, E, _, i, n, r, s]);
}
async function N(t) {
    let {
            pid: e,
            analyticsLocations: i,
            allowOneClickGoLive: n = !1,
            onBeforeShowModal: l,
            onModalStreamStart: a,
            onOneClickGoLive: r,
            appContext: s,
            selectSource: o = !1,
        } = t,
        d = g.Ay.getVoiceChannelId(),
        A = f.A.getChannel(d),
        E = I.default.getCurrentUser(),
        _ = null != A && (0, u.vz)(A, p.A, m.A),
        S = (0, c.A)(y.Ay);
    await C({
        pid: e,
        voiceChannelId: d,
        user: E,
        canGoLive: S,
        canStream: _,
        analyticsLocations: i,
        allowOneClickGoLive: n,
        onBeforeShowModal: l,
        onModalStreamStart: a,
        onOneClickGoLive: r,
        appContext: s,
        selectSource: o,
    });
}
async function C(t) {
    let {
        pid: e,
        voiceChannelId: l,
        user: a,
        canGoLive: u,
        canStream: c,
        analyticsLocations: f,
        allowOneClickGoLive: p,
        onBeforeShowModal: y,
        onModalStreamStart: m,
        onOneClickGoLive: g,
        appContext: I,
        selectSource: S = !1,
    } = t;
    if (u && c) {
        if (p && null !== l) {
            let t = A.A.getState().preset;
            if (t === E.jQ.PRESET_DOCUMENTS) {
                let { allowAutoQuality: e } = (0, o.eO)({ location: "overlay _goLive" });
                t = e ? E.jQ.PRESET_AUTO : E.jQ.PRESET_VIDEO;
            }
            let [i] = await (0, d.A)(e, { preset: t, analyticsLocations: f });
            if (i) return void g?.();
        }
        if (null == a)
            return void (0, r.P0)({ text: _.intl.string(_.t.OKnWyb), variant: "critical", surface: "overlay" });
        (y?.(),
            (0, s.openModalLazy)(
                async () => {
                    let { default: t } = await Promise.all([
                        i.e("249169"),
                        i.e("473782"),
                        i.e("553464"),
                        i.e("130662"),
                        i.e("498552"),
                        i.e("858337"),
                        i.e("236946"),
                        i.e("338601"),
                        i.e("944801"),
                        i.e("944727"),
                        i.e("943371"),
                        i.e("725241"),
                        i.e("118577"),
                        i.e("39404"),
                        i.e("82001"),
                        i.e("352435"),
                        i.e("191782"),
                        i.e("190088"),
                    ]).then(i.bind(i, 266536));
                    return (i) =>
                        (0, n.jsx)(t, { ...i, sourcePID: e, selectSource: S, onStreamStart: m, analyticsLocations: f });
                },
                { contextKey: null != I ? (0, s.modalContextFromAppContext)(I) : void 0 },
            ));
    }
}
