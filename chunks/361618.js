"use strict";
n.d(t, { A: () => T });
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
    p = n(309010),
    h = n(287809),
    m = n(652215),
    g = n(753070),
    E = n(731854),
    A = n(985018);
function I(e, t) {
    (0, s.mMO)(
        async () => {
            let { default: e } = await n.e("18630").then(n.bind(n, 826789));
            return (n) => (0, r.jsx)(e, { ...n, analyticsSource: t });
        },
        { contextKey: e === m.BRT.POPOUT ? s.KX8 : s.SYi },
    );
}
function T(e, t) {
    let { preset: n, resolution: T, fps: y, soundshareEnabled: S } = (0, a.cf)([c.A], () => c.A.getState()),
        v = (0, a.bG)([f.A], () => f.A.getGoLiveSource()),
        C = (0, a.bG)([h.default], () => h.default.getCurrentUser()),
        b = (0, a.bG)([_.A], () => _.A.getGuild(e?.guildId)?.premiumTier),
        { location: N } = (0, l.p)(),
        R = (0, a.bG)([p.A, d.A], () => d.A.getChannel(p.A.getVoiceChannelId())),
        O = i.useCallback(
            (e, n, r, i) => {
                if (e) {
                    if (null != v) {
                        let e = {
                            qualityOptions: { preset: g.jQ.PRESET_CUSTOM, resolution: n, frameRate: r },
                            context: E.x.STREAM,
                        };
                        null != v.desktopSource
                            ? (e.desktopSettings = { sourceId: v.desktopSource.id, sound: S })
                            : null != v.cameraSource &&
                              (e.cameraSettings = {
                                  videoDeviceGuid: v.cameraSource.videoDeviceGuid,
                                  audioDeviceGuid: v.cameraSource.audioDeviceGuid,
                              }),
                            o.A.setGoLiveSource(e);
                    }
                } else I(t, { ...N, object: m.ZSU.RADIO_ITEM, objectType: i });
            },
            [t, N, S, v],
        );
    if (null == e) return null;
    let D = n === g.jQ.PRESET_DOCUMENTS ? g.kn.FPS_30 : y,
        L = g.ce.map((e) => {
            let { value: t, label: n, subtext: i } = e,
                a = (0, u.A)(g.jQ.PRESET_CUSTOM, T, t, C, b, R);
            return (0, r.jsx)(
                s.iDA,
                {
                    group: "stream-settings-fps",
                    id: `stream-settings-fps-${t}`,
                    label: n,
                    subtext: i,
                    checked: t === y,
                    action: () => O(a, T, t, m.AnalyticsObjectTypes.RESOLUTION),
                },
                `stream-settings-fps-${t}`,
            );
        }),
        w = g.Jk.map((e) => {
            let { value: t, label: n, subtext: i } = e,
                a = (0, u.A)(g.jQ.PRESET_CUSTOM, t, D, C, b, R);
            return (0, r.jsx)(
                s.iDA,
                {
                    group: "stream-settings-resolution",
                    id: `stream-settings-resolution-${t}`,
                    label: n,
                    subtext: i,
                    checked: t === T,
                    action: () => O(a, t, D, m.AnalyticsObjectTypes.RESOLUTION),
                },
                `stream-settings-resolution-${t}`,
            );
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.rXV, { label: A.intl.string(A.t.SkkeIt), children: L }),
            (0, r.jsx)(s.rXV, { label: A.intl.string(A.t.rHyPXg), children: w }),
        ],
    });
}
