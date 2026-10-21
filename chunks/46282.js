i.d(e, { H: () => N, y: () => _ });
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
    y = i(360906),
    m = i(576705),
    g = i(309010),
    I = i(287809),
    E = i(753070),
    S = i(105292);
function _(t) {
    let {
            pid: e,
            analyticsLocation: i,
            allowOneClickGoLive: n = !1,
            onBeforeShowModal: r,
            onOneClickGoLive: s,
            appContext: o,
        } = t,
        d = (0, a.bG)([g.Ay], () => g.Ay.getVoiceChannelId()),
        A = (0, a.bG)([f.A], () => f.A.getChannel(d), [d]),
        E = (0, a.bG)([I.default], () => I.default.getCurrentUser()),
        S = (0, a.bG)([y.Ay], () => (0, c.A)(y.Ay)),
        _ = (0, a.bG)([p.A, m.A], () => null != A && (0, u.vz)(A, p.A, m.A));
    return l.useCallback(async () => {
        await C({
            pid: e,
            voiceChannelId: d,
            user: E,
            canGoLive: S,
            canStream: _,
            analyticsLocation: i,
            allowOneClickGoLive: n,
            onBeforeShowModal: r,
            onOneClickGoLive: s,
            appContext: o,
        });
    }, [e, d, E, S, _, i, n, r, s, o]);
}
async function N(t) {
    let {
            pid: e,
            analyticsLocation: i,
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
        S = null != A && (0, u.vz)(A, p.A, m.A),
        _ = (0, c.A)(y.Ay);
    await C({
        pid: e,
        voiceChannelId: d,
        user: E,
        canGoLive: _,
        canStream: S,
        analyticsLocation: i,
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
        allowOneClickGoLive: f,
        onBeforeShowModal: p,
        onModalStreamStart: y,
        onOneClickGoLive: m,
        appContext: g,
        selectSource: I = !1,
    } = t;
    if (u && c) {
        if (f && null !== l) {
            let t = A.A.getState().preset;
            if (t === E.jQ.PRESET_DOCUMENTS) {
                let { allowAutoQuality: e } = (0, o.eO)({ location: "overlay _goLive" });
                t = e ? E.jQ.PRESET_AUTO : E.jQ.PRESET_VIDEO;
            }
            let [i] = await (0, d.A)(e, { preset: t });
            if (i) return void m?.();
        }
        if (null == a)
            return void (0, r.P0)({ text: S.intl.string(S.t.OKnWyb), variant: "critical", surface: "overlay" });
        (p?.(),
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
                    return (i) => (0, n.jsx)(t, { ...i, sourcePID: e, selectSource: I, onStreamStart: y });
                },
                { contextKey: null != g ? (0, s.modalContextFromAppContext)(g) : void 0 },
            ));
    }
}
