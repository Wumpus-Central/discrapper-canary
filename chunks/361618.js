"use strict";
n.d(t, { A: () => S });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(192308),
    o = n(231723),
    l = n(477782),
    u = n(827343),
    c = n(212245),
    d = n(874124),
    _ = n(929921),
    f = n(734057),
    p = n(71393),
    h = n(430452),
    E = n(309010),
    m = n(287809),
    g = n(652215),
    A = n(753070),
    I = n(731854),
    T = n(985018);
function S(e, t) {
    let { preset: S, resolution: y, fps: N, soundshareEnabled: v } = (0, s.cf)([_.A], () => _.A.getState()),
        C = (0, s.bG)([h.Ay], () => h.Ay.getGoLiveSource()),
        O = (0, s.bG)([m.default], () => m.default.getCurrentUser()),
        R = (0, s.bG)([p.A], () => p.A.getGuild(e?.guildId)?.premiumTier),
        { location: b } = (0, c.p)(),
        D = (0, s.bG)([E.A, f.A], () => f.A.getChannel(E.A.getVoiceChannelId())),
        L = i.useCallback(
            (e, i, s, l) => {
                if (e) {
                    if (null != C) {
                        let e = {
                            qualityOptions: { preset: A.jQ.PRESET_CUSTOM, resolution: i, frameRate: s },
                            context: I.x.STREAM,
                        };
                        null != C.desktopSource
                            ? (e.desktopSettings = { sourceId: C.desktopSource.id, sound: v })
                            : null != C.cameraSource &&
                              (e.cameraSettings = {
                                  videoDeviceGuid: C.cameraSource.videoDeviceGuid,
                                  audioDeviceGuid: C.cameraSource.audioDeviceGuid,
                              }),
                            u.A.setGoLiveSource(e);
                    }
                } else {
                    var c;
                    (c = { ...b, object: g.ZSU.RADIO_ITEM, objectType: l }),
                        (0, a.openModalLazy)(
                            async () => {
                                let { default: e } = await n.e("18630").then(n.bind(n, 826789));
                                return (t) => (0, r.jsx)(e, { ...t, analyticsSource: c });
                            },
                            { contextKey: t === g.BRT.POPOUT ? o.KX : o.SY },
                        );
                }
            },
            [t, b, v, C],
        );
    if (null == e) return null;
    let w = S === A.jQ.PRESET_DOCUMENTS ? A.kn.FPS_30 : N,
        M = A.ce.map((e) => {
            let { value: t, label: n, subtext: i } = e,
                s = (0, d.A)(A.jQ.PRESET_CUSTOM, y, t, O, R, D);
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
                s = (0, d.A)(A.jQ.PRESET_CUSTOM, t, w, O, R, D);
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
