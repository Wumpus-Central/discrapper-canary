"use strict";
n.d(t, { A: () => y });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(827343),
    l = n(212245),
    u = n(874124),
    c = n(929921),
    d = n(734057),
    _ = n(71393),
    f = n(430452),
    h = n(309010),
    p = n(287809),
    g = n(652215),
    E = n(753070),
    A = n(731854),
    I = n(985018);
function T(e, t) {
    (0, s.mMO)(
        async () => {
            let { default: e } = await n.e("18630").then(n.bind(n, 826789));
            return (n) => (0, r.jsx)(e, { ...n, analyticsSource: t });
        },
        { contextKey: e === g.BRT.POPOUT ? s.KX8 : s.SYi },
    );
}
function y(e, t) {
    let { preset: n, resolution: y, fps: S, soundshareEnabled: v } = (0, a.cf)([c.A], () => c.A.getState()),
        C = (0, a.bG)([f.Ay], () => f.Ay.getGoLiveSource()),
        b = (0, a.bG)([p.default], () => p.default.getCurrentUser()),
        N = (0, a.bG)([_.A], () => _.A.getGuild(e?.guildId)?.premiumTier),
        { location: R } = (0, l.p)(),
        O = (0, a.bG)([h.A, d.A], () => d.A.getChannel(h.A.getVoiceChannelId())),
        D = i.useCallback(
            (e, n, r, i) => {
                if (e) {
                    if (null != C) {
                        let e = {
                            qualityOptions: { preset: E.jQ.PRESET_CUSTOM, resolution: n, frameRate: r },
                            context: A.x.STREAM,
                        };
                        null != C.desktopSource
                            ? (e.desktopSettings = { sourceId: C.desktopSource.id, sound: v })
                            : null != C.cameraSource &&
                              (e.cameraSettings = {
                                  videoDeviceGuid: C.cameraSource.videoDeviceGuid,
                                  audioDeviceGuid: C.cameraSource.audioDeviceGuid,
                              }),
                            o.A.setGoLiveSource(e);
                    }
                } else T(t, { ...R, object: g.ZSU.RADIO_ITEM, objectType: i });
            },
            [t, R, v, C],
        );
    if (null == e) return null;
    let L = n === E.jQ.PRESET_DOCUMENTS ? E.kn.FPS_30 : S,
        w = E.ce.map((e) => {
            let { value: t, label: n, subtext: i } = e,
                a = (0, u.A)(E.jQ.PRESET_CUSTOM, y, t, b, N, O);
            return (0, r.jsx)(
                s.iDA,
                {
                    group: "stream-settings-fps",
                    id: `stream-settings-fps-${t}`,
                    label: n,
                    subtext: i,
                    checked: t === S,
                    action: () => D(a, y, t, g.AnalyticsObjectTypes.RESOLUTION),
                },
                `stream-settings-fps-${t}`,
            );
        }),
        x = E.Jk.map((e) => {
            let { value: t, label: n, subtext: i } = e,
                a = (0, u.A)(E.jQ.PRESET_CUSTOM, t, L, b, N, O);
            return (0, r.jsx)(
                s.iDA,
                {
                    group: "stream-settings-resolution",
                    id: `stream-settings-resolution-${t}`,
                    label: n,
                    subtext: i,
                    checked: t === y,
                    action: () => D(a, t, L, g.AnalyticsObjectTypes.RESOLUTION),
                },
                `stream-settings-resolution-${t}`,
            );
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.rXV, { label: I.intl.string(I.t.SkkeIt), children: w }),
            (0, r.jsx)(s.rXV, { label: I.intl.string(I.t.rHyPXg), children: x }),
        ],
    });
}
