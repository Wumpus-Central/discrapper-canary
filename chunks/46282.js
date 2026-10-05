i.d(e, { H: () => T, y: () => h });
var n = i(477900),
    l = i(582128),
    a = i(17928),
    r = i(739187),
    s = i(857250),
    o = i(97483),
    u = i(192308),
    c = i(258585),
    d = i(279250),
    A = i(880144),
    f = i(560595),
    p = i(929921),
    y = i(734057),
    m = i(71393),
    E = i(25578),
    g = i(576705),
    I = i(309010),
    _ = i(287809),
    N = i(652215),
    S = i(753070),
    C = i(375708);
function h(t) {
    let {
            pid: e,
            analyticsLocation: i,
            allowOneClickGoLive: n = !1,
            onBeforeShowModal: r,
            onOneClickGoLive: s,
            appContext: o,
        } = t,
        u = (0, a.bG)([I.Ay], () => I.Ay.getVoiceChannelId()),
        c = (0, a.bG)([y.A], () => y.A.getChannel(u), [u]),
        f = (0, a.bG)([_.default], () => _.default.getCurrentUser()),
        p = (0, a.bG)([E.Ay], () => (0, A.A)(E.Ay)),
        N = (0, a.bG)([m.A, g.A], () => null != c && (0, d.vz)(c, m.A, g.A));
    return l.useCallback(async () => {
        await v({
            pid: e,
            voiceChannelId: u,
            user: f,
            canGoLive: p,
            canStream: N,
            analyticsLocation: i,
            allowOneClickGoLive: n,
            onBeforeShowModal: r,
            onOneClickGoLive: s,
            appContext: o,
        });
    }, [e, u, f, p, N, i, n, r, s, o]);
}
async function T(t) {
    let {
            pid: e,
            analyticsLocation: i,
            allowOneClickGoLive: n = !1,
            onBeforeShowModal: l,
            onOneClickGoLive: a,
            appContext: r,
        } = t,
        s = I.Ay.getVoiceChannelId(),
        o = y.A.getChannel(s),
        u = _.default.getCurrentUser(),
        c = null != o && (0, d.vz)(o, m.A, g.A),
        f = (0, A.A)(E.Ay);
    await v({
        pid: e,
        voiceChannelId: s,
        user: u,
        canGoLive: f,
        canStream: c,
        analyticsLocation: i,
        allowOneClickGoLive: n,
        onBeforeShowModal: l,
        onOneClickGoLive: a,
        appContext: r,
    });
}
async function v(t) {
    let {
        pid: e,
        voiceChannelId: l,
        user: a,
        canGoLive: d,
        canStream: A,
        allowOneClickGoLive: y,
        onBeforeShowModal: m,
        onOneClickGoLive: E,
        appContext: g,
    } = t;
    if (d && A) {
        if (y && null !== l) {
            let t = p.A.getState().preset;
            if (t === S.jQ.PRESET_DOCUMENTS) {
                let { allowAutoQuality: e } = (0, c.eO)({ location: "overlay _goLive" });
                t = e ? S.jQ.PRESET_AUTO : S.jQ.PRESET_VIDEO;
            }
            let [i] = await (0, f.A)(e, { preset: t });
            if (i) return void E?.();
        }
        if (null == a)
            return void (0, r.P)((0, s.o)(C.intl.string(C.t.OKnWyb), o.Ck.FAILURE, { appContext: N.BRT.OVERLAY }));
        (m?.(),
            (0, u.openModalLazy)(
                async () => {
                    let { default: t } = await Promise.all([
                        i.e("238417"),
                        i.e("473782"),
                        i.e("553464"),
                        i.e("130662"),
                        i.e("498552"),
                        i.e("858337"),
                        i.e("236946"),
                        i.e("338601"),
                        i.e("706809"),
                        i.e("944801"),
                        i.e("944727"),
                        i.e("763612"),
                        i.e("59778"),
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
                { contextKey: null != g ? (0, u.modalContextFromAppContext)(g) : void 0 },
            ));
    }
}
