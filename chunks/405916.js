"use strict";
n.d(t, { E: () => v });
var i = n(627968),
    r = n(64700),
    a = n(17928),
    s = n(477782),
    l = n(183623),
    o = n(959988),
    d = n(827343),
    c = n(401843),
    u = n(725792),
    _ = n(338771),
    E = n(929921),
    A = n(451409),
    h = n(723702),
    I = n(74329),
    f = n(192308),
    p = n(231723),
    T = n(212245),
    m = n(327649),
    g = n(734057),
    S = n(71393),
    N = n(309010),
    C = n(287809),
    O = n(652215),
    R = n(753070),
    L = n(731854),
    D = n(375708),
    y = n(818348);
function v(e) {
    let {
            stream: t,
            handleGoLive: v,
            showReportOption: b = !1,
            disableChangeWindows: M = !1,
            minimal: P = !1,
            appContext: U = O.BRT.APP,
        } = e,
        { desktopSourceId: w, lastPickedContent: G } = (0, a.cf)([u.Ay, A.Ay], () => {
            let { desktopSource: e } = A.Ay.getGoLiveSource() ?? {},
                t = u.Ay.getLastPickedContent();
            return { desktopSourceId: e?.id, lastPickedContent: t };
        }),
        x = (0, a.bG)([E.A], () => E.A.getState().soundshareEnabled),
        k = A.Ay.supports(L.O5.DESKTOP_CAPTURE_APPLICATIONS),
        F = (0, a.bG)([A.Ay], () => A.Ay.supports(L.O5.SOUNDSHARE)),
        V = (0, a.bG)([A.Ay], () => A.Ay.supportsScreenSoundshare()),
        B = (function (e, t) {
            let { preset: l, resolution: o, fps: c, soundshareEnabled: u } = (0, a.cf)([E.A], () => E.A.getState()),
                _ = (0, a.bG)([A.Ay], () => A.Ay.getGoLiveSource()),
                h = (0, a.bG)([C.default], () => C.default.getCurrentUser()),
                I = (0, a.bG)([S.A], () => S.A.getGuild(e?.guildId)?.premiumTier),
                { location: y } = (0, T.p)(),
                v = (0, a.bG)([N.A, g.A], () => g.A.getChannel(N.A.getVoiceChannelId())),
                b = r.useCallback(
                    (e, r, a, s) => {
                        if (e) {
                            if (null != _) {
                                let e = {
                                    qualityOptions: { preset: R.jQ.PRESET_CUSTOM, resolution: r, frameRate: a },
                                    context: L.x.STREAM,
                                };
                                null != _.desktopSource
                                    ? (e.desktopSettings = { sourceId: _.desktopSource.id, sound: u })
                                    : null != _.cameraSource &&
                                      (e.cameraSettings = {
                                          videoDeviceGuid: _.cameraSource.videoDeviceGuid,
                                          audioDeviceGuid: _.cameraSource.audioDeviceGuid,
                                          sound: u,
                                      }),
                                    d.A.setGoLiveSource(e);
                            }
                        } else {
                            var l;
                            (l = { ...y, object: O.ZSU.RADIO_ITEM, objectType: s }),
                                (0, f.openModalLazy)(
                                    async () => {
                                        let { default: e } = await Promise.all([n.e("93475"), n.e("18630")]).then(
                                            n.bind(n, 826789),
                                        );
                                        return (t) => (0, i.jsx)(e, { ...t, analyticsSource: l });
                                    },
                                    { contextKey: t === O.BRT.POPOUT ? p.KX : p.SY },
                                );
                        }
                    },
                    [t, y, u, _],
                );
            if (null == e) return null;
            let M = l === R.jQ.PRESET_DOCUMENTS ? R.kn.FPS_30 : c,
                P = R.ce.map((e) => {
                    let { value: t, label: n, subtext: r } = e,
                        a = (0, m.A)(R.jQ.PRESET_CUSTOM, o, t, h, I, v);
                    return (0, i.jsx)(
                        s.iD,
                        {
                            group: "stream-settings-fps",
                            id: `stream-settings-fps-${t}`,
                            label: n,
                            subtext: r,
                            checked: t === c,
                            action: () => b(a, o, t, O.AnalyticsObjectTypes.RESOLUTION),
                        },
                        `stream-settings-fps-${t}`,
                    );
                }),
                U = R.Jk.map((e) => {
                    let { value: t, label: n, subtext: r } = e,
                        a = (0, m.A)(R.jQ.PRESET_CUSTOM, t, M, h, I, v);
                    return (0, i.jsx)(
                        s.iD,
                        {
                            group: "stream-settings-resolution",
                            id: `stream-settings-resolution-${t}`,
                            label: n,
                            subtext: r,
                            checked: t === o,
                            action: () => b(a, t, M, O.AnalyticsObjectTypes.RESOLUTION),
                        },
                        `stream-settings-resolution-${t}`,
                    );
                });
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(s.rX, { label: D.intl.string(D.t.SkkeIt), children: P }),
                    (0, i.jsx)(s.rX, { label: D.intl.string(D.t.rHyPXg), children: U }),
                ],
            });
        })(t, U),
        H = (0, I.A)(t, U, y.FX),
        j = null != w && F && (!w.startsWith("screen") || V),
        W = (0, a.bG)([A.Ay], () => A.Ay.getUseSystemScreensharePicker() && (0, h.isLinux)()),
        Y = r.useCallback(() => {
            w?.startsWith("prepicked:")
                ? A.Ay.getMediaEngine().eachConnection((e) => {
                      e.context === L.x.STREAM && e.presentDesktopSourcePicker("window");
                  })
                : v();
        }, [w, v]),
        K = w?.startsWith("prepicked:") ?? !1,
        $ = (0, h.isMac)() && h.isPlatformEmbedded && K && (G?.windows.length ?? 0) > 0,
        z = (0, h.isMac)() && h.isPlatformEmbedded && K && (G?.applications.length ?? 0) > 0,
        q = $
            ? D.intl.string(D.t.qDK8gQ)
            : z
              ? D.intl.string(D.t["3m8w+Q"])
              : P
                ? D.intl.string(D.t.eAktHv)
                : D.intl.string(D.t.qntSal),
        Z = r.useCallback(() => {
            let { preset: e, resolution: t, fps: n } = E.A.getState(),
                i = { qualityOptions: { preset: e, resolution: t, frameRate: n }, context: L.x.STREAM };
            null != w && (i.desktopSettings = { sourceId: w, sound: !x }),
                (0, c.Xd)({ preset: e, resolution: t, frameRate: n, soundshareEnabled: !x }),
                d.A.setGoLiveSource(i);
        }, [w, x]);
    if (null == t)
        return (0, i.jsx)(s.Dr, {
            id: "share-your-screen",
            label: D.intl.string(D.t.fjBNo1),
            icon: l.F,
            leadingAccessory: { type: "icon", icon: l.F },
            action: v,
        });
    let X = h.isPlatformEmbedded
            ? (0, i.jsx)(s.Dr, { id: "stream-settings", label: D.intl.string(D.t.ytAD9d), children: B })
            : null,
        Q = j
            ? (0, i.jsx)(s.sL, {
                  id: "stream-settings-audio-enable",
                  label: P ? D.intl.string(D.t.af2Tw1) : D.intl.string(D.t.ZJEHt7),
                  checked: x,
                  action: Z,
              })
            : null,
        J =
            !k || M || W
                ? null
                : (0, i.jsx)(s.Dr, {
                      id: "change-windows",
                      label: q,
                      icon: l.F,
                      leadingAccessory: { type: "icon", icon: l.F },
                      action: Y,
                  }),
        ee = (0, i.jsx)(s.Dr, {
            id: "stop-streaming",
            color: "danger",
            label: D.intl.string(D.t.S5anIc),
            icon: o.G,
            leadingAccessory: { type: "icon", icon: o.G },
            action: () => (0, _.A)(t),
        });
    return P
        ? (0, i.jsxs)(i.Fragment, { children: [ee, J, X, Q] })
        : (0, i.jsxs)(i.Fragment, { children: [X, b ? H : null, Q, J, ee] });
}
