"use strict";
n.d(t, { E: () => L });
var i = n(627968),
    r = n(64700),
    s = n(17928),
    a = n(477782),
    o = n(183623),
    l = n(959988),
    d = n(827343),
    _ = n(401843),
    u = n(725792),
    c = n(338771),
    E = n(929921),
    h = n(969341),
    m = n(723702),
    f = n(74329),
    g = n(192308),
    p = n(231723),
    A = n(212245),
    I = n(327649),
    T = n(734057),
    S = n(71393),
    N = n(309010),
    C = n(287809),
    R = n(652215),
    O = n(753070),
    y = n(731854),
    v = n(985018),
    D = n(818348);
function L(e) {
    let {
            stream: t,
            handleGoLive: L,
            showReportOption: b = !1,
            disableChangeWindows: w = !1,
            minimal: P = !1,
            appContext: k = R.BRT.APP,
        } = e,
        { desktopSourceId: M, lastPickedContent: U } = (0, s.cf)([u.Ay, h.Ay], () => {
            let { desktopSource: e } = h.Ay.getGoLiveSource() ?? {},
                t = u.Ay.getLastPickedContent();
            return { desktopSourceId: e?.id, lastPickedContent: t };
        }),
        x = (0, s.bG)([E.A], () => E.A.getState().soundshareEnabled),
        G = h.Ay.supports(y.O5.DESKTOP_CAPTURE_APPLICATIONS),
        V = (0, s.bG)([h.Ay], () => h.Ay.supports(y.O5.SOUNDSHARE)),
        F = (0, s.bG)([h.Ay], () => h.Ay.supportsScreenSoundshare()),
        B = (function (e, t) {
            let { preset: o, resolution: l, fps: _, soundshareEnabled: u } = (0, s.cf)([E.A], () => E.A.getState()),
                c = (0, s.bG)([h.Ay], () => h.Ay.getGoLiveSource()),
                m = (0, s.bG)([C.default], () => C.default.getCurrentUser()),
                f = (0, s.bG)([S.A], () => S.A.getGuild(e?.guildId)?.premiumTier),
                { location: D } = (0, A.p)(),
                L = (0, s.bG)([N.A, T.A], () => T.A.getChannel(N.A.getVoiceChannelId())),
                b = r.useCallback(
                    (e, r, s, a) => {
                        if (e) {
                            if (null != c) {
                                let e = {
                                    qualityOptions: { preset: O.jQ.PRESET_CUSTOM, resolution: r, frameRate: s },
                                    context: y.x.STREAM,
                                };
                                null != c.desktopSource
                                    ? (e.desktopSettings = { sourceId: c.desktopSource.id, sound: u })
                                    : null != c.cameraSource &&
                                      (e.cameraSettings = {
                                          videoDeviceGuid: c.cameraSource.videoDeviceGuid,
                                          audioDeviceGuid: c.cameraSource.audioDeviceGuid,
                                      }),
                                    d.A.setGoLiveSource(e);
                            }
                        } else {
                            var o;
                            (o = { ...D, object: R.ZSU.RADIO_ITEM, objectType: a }),
                                (0, g.openModalLazy)(
                                    async () => {
                                        let { default: e } = await n.e("18630").then(n.bind(n, 826789));
                                        return (t) => (0, i.jsx)(e, { ...t, analyticsSource: o });
                                    },
                                    { contextKey: t === R.BRT.POPOUT ? p.KX : p.SY },
                                );
                        }
                    },
                    [t, D, u, c],
                );
            if (null == e) return null;
            let w = o === O.jQ.PRESET_DOCUMENTS ? O.kn.FPS_30 : _,
                P = O.ce.map((e) => {
                    let { value: t, label: n, subtext: r } = e,
                        s = (0, I.A)(O.jQ.PRESET_CUSTOM, l, t, m, f, L);
                    return (0, i.jsx)(
                        a.iD,
                        {
                            group: "stream-settings-fps",
                            id: `stream-settings-fps-${t}`,
                            label: n,
                            subtext: r,
                            checked: t === _,
                            action: () => b(s, l, t, R.AnalyticsObjectTypes.RESOLUTION),
                        },
                        `stream-settings-fps-${t}`,
                    );
                }),
                k = O.Jk.map((e) => {
                    let { value: t, label: n, subtext: r } = e,
                        s = (0, I.A)(O.jQ.PRESET_CUSTOM, t, w, m, f, L);
                    return (0, i.jsx)(
                        a.iD,
                        {
                            group: "stream-settings-resolution",
                            id: `stream-settings-resolution-${t}`,
                            label: n,
                            subtext: r,
                            checked: t === l,
                            action: () => b(s, t, w, R.AnalyticsObjectTypes.RESOLUTION),
                        },
                        `stream-settings-resolution-${t}`,
                    );
                });
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(a.rX, { label: v.intl.string(v.t.SkkeIt), children: P }),
                    (0, i.jsx)(a.rX, { label: v.intl.string(v.t.rHyPXg), children: k }),
                ],
            });
        })(t, k),
        H = (0, f.A)(t, k, D.FX),
        j = null != M && V && (!M.startsWith("screen") || F),
        W = (0, s.bG)([h.Ay], () => h.Ay.getUseSystemScreensharePicker() && (0, m.isLinux)()),
        Y = r.useCallback(() => {
            M?.startsWith("prepicked:")
                ? h.Ay.getMediaEngine().eachConnection((e) => {
                      e.context === y.x.STREAM && e.presentDesktopSourcePicker("window");
                  })
                : L();
        }, [M, L]),
        K = M?.startsWith("prepicked:") ?? !1,
        z = (0, m.isMac)() && m.isPlatformEmbedded && K && (U?.windows.length ?? 0) > 0,
        $ = (0, m.isMac)() && m.isPlatformEmbedded && K && (U?.applications.length ?? 0) > 0,
        q = z
            ? v.intl.string(v.t.qDK8gQ)
            : $
              ? v.intl.string(v.t["3m8w+Q"])
              : P
                ? v.intl.string(v.t.eAktHv)
                : v.intl.string(v.t.qntSal),
        X = r.useCallback(() => {
            let { preset: e, resolution: t, fps: n } = E.A.getState(),
                i = { qualityOptions: { preset: e, resolution: t, frameRate: n }, context: y.x.STREAM };
            null != M && (i.desktopSettings = { sourceId: M, sound: !x }),
                (0, _.Xd)({ preset: e, resolution: t, frameRate: n, soundshareEnabled: !x }),
                d.A.setGoLiveSource(i);
        }, [M, x]);
    if (null == t)
        return (0, i.jsx)(a.Dr, {
            id: "share-your-screen",
            label: v.intl.string(v.t.fjBNo1),
            icon: o.F,
            leadingAccessory: { type: "icon", icon: o.F },
            action: L,
        });
    let Z = m.isPlatformEmbedded
            ? (0, i.jsx)(a.Dr, { id: "stream-settings", label: v.intl.string(v.t.ytAD9d), children: B })
            : null,
        Q = j
            ? (0, i.jsx)(a.sL, {
                  id: "stream-settings-audio-enable",
                  label: P ? v.intl.string(v.t.af2Tw1) : v.intl.string(v.t.ZJEHt7),
                  checked: x,
                  action: X,
              })
            : null,
        J =
            !G || w || W
                ? null
                : (0, i.jsx)(a.Dr, {
                      id: "change-windows",
                      label: q,
                      icon: o.F,
                      leadingAccessory: { type: "icon", icon: o.F },
                      action: Y,
                  }),
        ee = (0, i.jsx)(a.Dr, {
            id: "stop-streaming",
            color: "danger",
            label: v.intl.string(v.t.S5anIc),
            icon: l.G,
            leadingAccessory: { type: "icon", icon: l.G },
            action: () => (0, c.A)(t),
        });
    return P
        ? (0, i.jsxs)(i.Fragment, { children: [ee, J, Z, Q] })
        : (0, i.jsxs)(i.Fragment, { children: [Z, b ? H : null, Q, J, ee] });
}
