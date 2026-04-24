"use strict";
n.d(t, { E: () => v });
var i = n(627968),
    r = n(64700),
    s = n(17928),
    a = n(477782),
    o = n(183623),
    l = n(959988),
    _ = n(827343),
    d = n(401843),
    u = n(725792),
    c = n(338771),
    E = n(929921),
    h = n(969341),
    m = n(723702),
    f = n(74329),
    g = n(192308),
    I = n(231723),
    A = n(212245),
    p = n(327649),
    T = n(734057),
    S = n(71393),
    N = n(309010),
    O = n(287809),
    R = n(652215),
    C = n(753070),
    y = n(731854),
    D = n(985018),
    L = n(818348);
function v(e) {
    let {
            stream: t,
            handleGoLive: v,
            showReportOption: w = !1,
            disableChangeWindows: P = !1,
            minimal: b = !1,
            appContext: k = R.BRT.APP,
        } = e,
        { desktopSourceId: U, lastPickedContent: M } = (0, s.cf)([u.Ay, h.Ay], () => {
            let { desktopSource: e } = h.Ay.getGoLiveSource() ?? {},
                t = u.Ay.getLastPickedContent();
            return { desktopSourceId: e?.id, lastPickedContent: t };
        }),
        G = (0, s.bG)([E.A], () => E.A.getState().soundshareEnabled),
        x = h.Ay.supports(y.O5.DESKTOP_CAPTURE_APPLICATIONS),
        V = (0, s.bG)([h.Ay], () => h.Ay.supports(y.O5.SOUNDSHARE)),
        F = (0, s.bG)([h.Ay], () => h.Ay.supportsScreenSoundshare()),
        B = (function (e, t) {
            let { preset: o, resolution: l, fps: d, soundshareEnabled: u } = (0, s.cf)([E.A], () => E.A.getState()),
                c = (0, s.bG)([h.Ay], () => h.Ay.getGoLiveSource()),
                m = (0, s.bG)([O.default], () => O.default.getCurrentUser()),
                f = (0, s.bG)([S.A], () => S.A.getGuild(e?.guildId)?.premiumTier),
                { location: L } = (0, A.p)(),
                v = (0, s.bG)([N.A, T.A], () => T.A.getChannel(N.A.getVoiceChannelId())),
                w = r.useCallback(
                    (e, r, s, a) => {
                        if (e) {
                            if (null != c) {
                                let e = {
                                    qualityOptions: { preset: C.jQ.PRESET_CUSTOM, resolution: r, frameRate: s },
                                    context: y.x.STREAM,
                                };
                                null != c.desktopSource
                                    ? (e.desktopSettings = { sourceId: c.desktopSource.id, sound: u })
                                    : null != c.cameraSource &&
                                      (e.cameraSettings = {
                                          videoDeviceGuid: c.cameraSource.videoDeviceGuid,
                                          audioDeviceGuid: c.cameraSource.audioDeviceGuid,
                                      }),
                                    _.A.setGoLiveSource(e);
                            }
                        } else {
                            var o;
                            (o = { ...L, object: R.ZSU.RADIO_ITEM, objectType: a }),
                                (0, g.openModalLazy)(
                                    async () => {
                                        let { default: e } = await Promise.all([
                                            n.e("80527"),
                                            n.e("14138"),
                                            n.e("30322"),
                                        ]).then(n.bind(n, 826789));
                                        return (t) => (0, i.jsx)(e, { ...t, analyticsSource: o });
                                    },
                                    { contextKey: t === R.BRT.POPOUT ? I.KX : I.SY },
                                );
                        }
                    },
                    [t, L, u, c],
                );
            if (null == e) return null;
            let P = o === C.jQ.PRESET_DOCUMENTS ? C.kn.FPS_30 : d,
                b = C.ce.map((e) => {
                    let { value: t, label: n, subtext: r } = e,
                        s = (0, p.A)(C.jQ.PRESET_CUSTOM, l, t, m, f, v);
                    return (0, i.jsx)(
                        a.iD,
                        {
                            group: "stream-settings-fps",
                            id: `stream-settings-fps-${t}`,
                            label: n,
                            subtext: r,
                            checked: t === d,
                            action: () => w(s, l, t, R.AnalyticsObjectTypes.RESOLUTION),
                        },
                        `stream-settings-fps-${t}`,
                    );
                }),
                k = C.Jk.map((e) => {
                    let { value: t, label: n, subtext: r } = e,
                        s = (0, p.A)(C.jQ.PRESET_CUSTOM, t, P, m, f, v);
                    return (0, i.jsx)(
                        a.iD,
                        {
                            group: "stream-settings-resolution",
                            id: `stream-settings-resolution-${t}`,
                            label: n,
                            subtext: r,
                            checked: t === l,
                            action: () => w(s, t, P, R.AnalyticsObjectTypes.RESOLUTION),
                        },
                        `stream-settings-resolution-${t}`,
                    );
                });
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(a.rX, { label: D.intl.string(D.t.SkkeIt), children: b }),
                    (0, i.jsx)(a.rX, { label: D.intl.string(D.t.rHyPXg), children: k }),
                ],
            });
        })(t, k),
        H = (0, f.A)(t, k, L.FX),
        Y = null != U && V && (!U.startsWith("screen") || F),
        W = (0, s.bG)([h.Ay], () => h.Ay.getUseSystemScreensharePicker() && (0, m.isLinux)()),
        K = r.useCallback(() => {
            U?.startsWith("prepicked:")
                ? h.Ay.getMediaEngine().eachConnection((e) => {
                      e.context === y.x.STREAM && e.presentDesktopSourcePicker("window");
                  })
                : v();
        }, [U, v]),
        j = U?.startsWith("prepicked:") ?? !1,
        $ = (0, m.isMac)() && m.isPlatformEmbedded && j && (M?.windows.length ?? 0) > 0,
        z = (0, m.isMac)() && m.isPlatformEmbedded && j && (M?.applications.length ?? 0) > 0,
        q = $
            ? D.intl.string(D.t.qDK8gQ)
            : z
              ? D.intl.string(D.t["3m8w+Q"])
              : b
                ? D.intl.string(D.t.eAktHv)
                : D.intl.string(D.t.qntSal),
        X = r.useCallback(() => {
            let { preset: e, resolution: t, fps: n } = E.A.getState(),
                i = { qualityOptions: { preset: e, resolution: t, frameRate: n }, context: y.x.STREAM };
            null != U && (i.desktopSettings = { sourceId: U, sound: !G }),
                (0, d.Xd)({ preset: e, resolution: t, frameRate: n, soundshareEnabled: !G }),
                _.A.setGoLiveSource(i);
        }, [U, G]);
    if (null == t)
        return (0, i.jsx)(a.Dr, {
            id: "share-your-screen",
            label: D.intl.string(D.t.fjBNo1),
            icon: o.F,
            leadingAccessory: { type: "icon", icon: o.F },
            action: v,
        });
    let Q = m.isPlatformEmbedded
            ? (0, i.jsx)(a.Dr, { id: "stream-settings", label: D.intl.string(D.t.ytAD9d), children: B })
            : null,
        J = Y
            ? (0, i.jsx)(a.sL, {
                  id: "stream-settings-audio-enable",
                  label: b ? D.intl.string(D.t.af2Tw1) : D.intl.string(D.t.ZJEHt7),
                  checked: G,
                  action: X,
              })
            : null,
        Z =
            !x || P || W
                ? null
                : (0, i.jsx)(a.Dr, {
                      id: "change-windows",
                      label: q,
                      icon: o.F,
                      leadingAccessory: { type: "icon", icon: o.F },
                      action: K,
                  }),
        ee = (0, i.jsx)(a.Dr, {
            id: "stop-streaming",
            color: "danger",
            label: D.intl.string(D.t.S5anIc),
            icon: l.G,
            leadingAccessory: { type: "icon", icon: l.G },
            action: () => (0, c.A)(t),
        });
    return b
        ? (0, i.jsxs)(i.Fragment, { children: [ee, Z, Q, J] })
        : (0, i.jsxs)(i.Fragment, { children: [Q, w ? H : null, J, Z, ee] });
}
