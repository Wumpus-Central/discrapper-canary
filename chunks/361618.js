"use strict";
n.d(t, { A: () => S });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(192308),
    o = n(231723),
    l = n(477782),
    u = n(827343),
    d = n(212245),
    c = n(874124),
    _ = n(929921),
    f = n(734057),
    E = n(71393),
    h = n(430452),
    p = n(309010),
    m = n(287809),
    g = n(652215),
    A = n(753070),
    I = n(731854),
    T = n(985018);
function S(e, t) {
    let { preset: S, resolution: y, fps: N, soundshareEnabled: O } = (0, s.cf)([_.A], () => _.A.getState()),
        R = (0, s.bG)([h.Ay], () => h.Ay.getGoLiveSource()),
        v = (0, s.bG)([m.default], () => m.default.getCurrentUser()),
        C = (0, s.bG)([E.A], () => E.A.getGuild(e?.guildId)?.premiumTier),
        { location: b } = (0, d.p)(),
        D = (0, s.bG)([p.A, f.A], () => f.A.getChannel(p.A.getVoiceChannelId())),
        L = i.useCallback(
            (e, i, s, l) => {
                if (e) {
                    if (null != R) {
                        let e = {
                            qualityOptions: { preset: A.jQ.PRESET_CUSTOM, resolution: i, frameRate: s },
                            context: I.x.STREAM,
                        };
                        null != R.desktopSource
                            ? (e.desktopSettings = { sourceId: R.desktopSource.id, sound: O })
                            : null != R.cameraSource &&
                              (e.cameraSettings = {
                                  videoDeviceGuid: R.cameraSource.videoDeviceGuid,
                                  audioDeviceGuid: R.cameraSource.audioDeviceGuid,
                              }),
                            u.A.setGoLiveSource(e);
                    }
                } else {
                    var d;
                    (d = { ...b, object: g.ZSU.RADIO_ITEM, objectType: l }),
                        (0, a.openModalLazy)(
                            async () => {
                                let { default: e } = await Promise.all([n.e("76640"), n.e("14138"), n.e("24123")]).then(
                                    n.bind(n, 826789),
                                );
                                return (t) => (0, r.jsx)(e, { ...t, analyticsSource: d });
                            },
                            { contextKey: t === g.BRT.POPOUT ? o.KX : o.SY },
                        );
                }
            },
            [t, b, O, R],
        );
    if (null == e) return null;
    let w = S === A.jQ.PRESET_DOCUMENTS ? A.kn.FPS_30 : N,
        M = A.ce.map((e) => {
            let { value: t, label: n, subtext: i } = e,
                s = (0, c.A)(A.jQ.PRESET_CUSTOM, y, t, v, C, D);
            return (0, r.jsx)(
                l.iD,
                {
                    group: "stream-settings-fps",
                    id: `stream-settings-fps-${t}`,
                    label: n,
                    subtext: i,
                    checked: t === N,
                    action: () => L(s, y, t, g.AnalyticsObjectTypes.RESOLUTION),
                },
                `stream-settings-fps-${t}`,
            );
        }),
        P = A.Jk.map((e) => {
            let { value: t, label: n, subtext: i } = e,
                s = (0, c.A)(A.jQ.PRESET_CUSTOM, t, w, v, C, D);
            return (0, r.jsx)(
                l.iD,
                {
                    group: "stream-settings-resolution",
                    id: `stream-settings-resolution-${t}`,
                    label: n,
                    subtext: i,
                    checked: t === y,
                    action: () => L(s, t, w, g.AnalyticsObjectTypes.RESOLUTION),
                },
                `stream-settings-resolution-${t}`,
            );
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.rX, { label: T.intl.string(T.t.SkkeIt), children: M }),
            (0, r.jsx)(l.rX, { label: T.intl.string(T.t.rHyPXg), children: P }),
        ],
    });
}
