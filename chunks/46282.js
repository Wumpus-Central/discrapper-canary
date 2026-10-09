i.d(e, { H: () => C, y: () => S });
var n = i(477900),
    l = i(582128),
    a = i(17928),
    r = i(376357),
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
    E = i(652215),
    N = i(753070),
    _ = i(660183);
function S(t) {
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
        N = (0, a.bG)([y.Ay], () => (0, c.A)(y.Ay)),
        _ = (0, a.bG)([p.A, m.A], () => null != A && (0, u.vz)(A, p.A, m.A));
    return l.useCallback(async () => {
        await h({
            pid: e,
            voiceChannelId: d,
            user: E,
            canGoLive: N,
            canStream: _,
            analyticsLocation: i,
            allowOneClickGoLive: n,
            onBeforeShowModal: r,
            onOneClickGoLive: s,
            appContext: o,
        });
    }, [e, d, E, N, _, i, n, r, s, o]);
}
async function C(t) {
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
        d = I.default.getCurrentUser(),
        A = null != o && (0, u.vz)(o, p.A, m.A),
        E = (0, c.A)(y.Ay);
    await h({
        pid: e,
        voiceChannelId: s,
        user: d,
        canGoLive: E,
        canStream: A,
        analyticsLocation: i,
        allowOneClickGoLive: n,
        onBeforeShowModal: l,
        onOneClickGoLive: a,
        appContext: r,
    });
}
async function h(t) {
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
    } = t;
    if (u && c) {
        if (f && null !== l) {
            let t = A.A.getState().preset;
            if (t === N.jQ.PRESET_DOCUMENTS) {
                let { allowAutoQuality: e } = (0, o.eO)({ location: "overlay _goLive" });
                t = e ? N.jQ.PRESET_AUTO : N.jQ.PRESET_VIDEO;
            }
            let [i] = await (0, d.A)(e, { preset: t });
            if (i) return void y?.();
        }
        if (null == a)
            return void (0, r.P0)((0, r.ox)(_.intl.string(_.t.OKnWyb), r.Ck.FAILURE, { appContext: E.BRT.OVERLAY }));
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
                        i.e("763612"),
                        i.e("944801"),
                        i.e("944727"),
                        i.e("943371"),
                        i.e("725241"),
                        i.e("118577"),
                        i.e("39404"),
                        i.e("82001"),
                        i.e("191782"),
                        i.e("352435"),
                        i.e("190088"),
                    ]).then(i.bind(i, 266536));
                    return (i) => (0, n.jsx)(t, { ...i, sourcePID: e, selectSource: !1 });
                },
                { contextKey: null != m ? (0, s.modalContextFromAppContext)(m) : void 0 },
            ));
    }
}
