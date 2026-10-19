i.d(e, { H: () => S, y: () => N });
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
    y = i(192820),
    m = i(576705),
    g = i(309010),
    I = i(287809),
    E = i(753070),
    _ = i(105292);
function N(t) {
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
        _ = (0, a.bG)([y.Ay], () => (0, c.A)(y.Ay)),
        N = (0, a.bG)([p.A, m.A], () => null != A && (0, u.vz)(A, p.A, m.A));
    return l.useCallback(async () => {
        await C({
            pid: e,
            voiceChannelId: d,
            user: E,
            canGoLive: _,
            canStream: N,
            analyticsLocation: i,
            allowOneClickGoLive: n,
            onBeforeShowModal: r,
            onOneClickGoLive: s,
            appContext: o,
        });
    }, [e, d, E, _, N, i, n, r, s, o]);
}
async function S(t) {
    let {
            pid: e,
            analyticsLocation: i,
            allowOneClickGoLive: n = !1,
            onBeforeShowModal: l,
            onOneClickGoLive: a,
            appContext: r,
            selectSource: s = !1,
        } = t,
        o = g.Ay.getVoiceChannelId(),
        d = f.A.getChannel(o),
        A = I.default.getCurrentUser(),
        E = null != d && (0, u.vz)(d, p.A, m.A),
        _ = (0, c.A)(y.Ay);
    await C({
        pid: e,
        voiceChannelId: o,
        user: A,
        canGoLive: _,
        canStream: E,
        analyticsLocation: i,
        allowOneClickGoLive: n,
        onBeforeShowModal: l,
        onOneClickGoLive: a,
        appContext: r,
        selectSource: s,
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
        onOneClickGoLive: y,
        appContext: m,
        selectSource: g = !1,
    } = t;
    if (u && c) {
        if (f && null !== l) {
            let t = A.A.getState().preset;
            if (t === E.jQ.PRESET_DOCUMENTS) {
                let { allowAutoQuality: e } = (0, o.eO)({ location: "overlay _goLive" });
                t = e ? E.jQ.PRESET_AUTO : E.jQ.PRESET_VIDEO;
            }
            let [i] = await (0, d.A)(e, { preset: t });
            if (i) return void y?.();
        }
        if (null == a)
            return void (0, r.P0)({ text: _.intl.string(_.t.OKnWyb), variant: "critical", surface: "overlay" });
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
                        i.e("561547"),
                        i.e("937494"),
                        i.e("82001"),
                        i.e("352435"),
                        i.e("191782"),
                        i.e("190088"),
                    ]).then(i.bind(i, 266536));
                    return (i) => (0, n.jsx)(t, { ...i, sourcePID: e, selectSource: g });
                },
                { contextKey: null != m ? (0, s.modalContextFromAppContext)(m) : void 0 },
            ));
    }
}
