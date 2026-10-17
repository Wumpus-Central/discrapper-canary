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
    y = i(71393),
    p = i(192820),
    m = i(576705),
    g = i(309010),
    E = i(287809),
    I = i(753070),
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
        I = (0, a.bG)([E.default], () => E.default.getCurrentUser()),
        _ = (0, a.bG)([p.Ay], () => (0, c.A)(p.Ay)),
        N = (0, a.bG)([y.A, m.A], () => null != A && (0, u.vz)(A, y.A, m.A));
    return l.useCallback(async () => {
        await C({
            pid: e,
            voiceChannelId: d,
            user: I,
            canGoLive: _,
            canStream: N,
            analyticsLocation: i,
            allowOneClickGoLive: n,
            onBeforeShowModal: r,
            onOneClickGoLive: s,
            appContext: o,
        });
    }, [e, d, I, _, N, i, n, r, s, o]);
}
async function S(t) {
    let {
            pid: e,
            analyticsLocation: i,
            allowOneClickGoLive: n = !1,
            onBeforeShowModal: l,
            onOneClickGoLive: a,
            appContext: r,
        } = t,
        s = g.Ay.getVoiceChannelId(),
        o = f.A.getChannel(s),
        d = E.default.getCurrentUser(),
        A = null != o && (0, u.vz)(o, y.A, m.A),
        I = (0, c.A)(p.Ay);
    await C({
        pid: e,
        voiceChannelId: s,
        user: d,
        canGoLive: I,
        canStream: A,
        analyticsLocation: i,
        allowOneClickGoLive: n,
        onBeforeShowModal: l,
        onOneClickGoLive: a,
        appContext: r,
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
        onBeforeShowModal: y,
        onOneClickGoLive: p,
        appContext: m,
    } = t;
    if (u && c) {
        if (f && null !== l) {
            let t = A.A.getState().preset;
            if (t === I.jQ.PRESET_DOCUMENTS) {
                let { allowAutoQuality: e } = (0, o.eO)({ location: "overlay _goLive" });
                t = e ? I.jQ.PRESET_AUTO : I.jQ.PRESET_VIDEO;
            }
            let [i] = await (0, d.A)(e, { preset: t });
            if (i) return void p?.();
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
                        i.e("561547"),
                        i.e("937494"),
                        i.e("82001"),
                        i.e("352435"),
                        i.e("191782"),
                        i.e("190088"),
                    ]).then(i.bind(i, 266536));
                    return (i) => (0, n.jsx)(t, { ...i, sourcePID: e, selectSource: !1 });
                },
                { contextKey: null != m ? (0, s.modalContextFromAppContext)(m) : void 0 },
            ));
    }
}
