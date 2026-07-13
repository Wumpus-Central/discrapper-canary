n.d(t, { E: () => R });
var i = n(627968),
    r = n(64700),
    l = n(17928),
    s = n(477782),
    a = n(183623),
    o = n(959988),
    c = n(827343),
    u = n(401843),
    d = n(725792),
    A = n(338771),
    h = n(929921),
    m = n(451409),
    g = n(723702),
    p = n(74329),
    f = n(192308),
    E = n(231723),
    b = n(212245),
    C = n(327649),
    v = n(734057),
    S = n(71393),
    y = n(309010),
    T = n(287809),
    x = n(652215),
    O = n(753070),
    _ = n(731854),
    j = n(375708),
    I = n(818348);
function R(e) {
    let {
            stream: t,
            handleGoLive: R,
            showReportOption: D = !1,
            disableChangeWindows: N = !1,
            minimal: M = !1,
            appContext: L = x.BRT.APP,
        } = e,
        { desktopSourceId: k, lastPickedContent: w } = (0, l.cf)([d.Ay, m.Ay], () => {
            let { desktopSource: e } = m.Ay.getGoLiveSource() ?? {},
                t = d.Ay.getLastPickedContent();
            return { desktopSourceId: e?.id, lastPickedContent: t };
        }),
        P = (0, l.bG)([h.A], () => h.A.getState().soundshareEnabled),
        U = m.Ay.supports(_.O5.DESKTOP_CAPTURE_APPLICATIONS),
        G = (0, l.bG)([m.Ay], () => m.Ay.supports(_.O5.SOUNDSHARE)),
        z = (0, l.bG)([m.Ay], () => m.Ay.supportsScreenSoundshare()),
        V = (function (e, t) {
            let { preset: a, resolution: o, fps: u, soundshareEnabled: d } = (0, l.cf)([h.A], () => h.A.getState()),
                A = (0, l.bG)([m.Ay], () => m.Ay.getGoLiveSource()),
                g = (0, l.bG)([T.default], () => T.default.getCurrentUser()),
                p = (0, l.bG)([S.A], () => S.A.getGuild(e?.guildId)?.premiumTier),
                { location: I } = (0, b.p)(),
                R = (0, l.bG)([y.A, v.A], () => v.A.getChannel(y.A.getVoiceChannelId())),
                D = r.useCallback(
                    (e, r, l, s) => {
                        if (e) {
                            if (null != A) {
                                let e = {
                                    qualityOptions: { preset: O.jQ.PRESET_CUSTOM, resolution: r, frameRate: l },
                                    context: _.x.STREAM,
                                };
                                null != A.desktopSource
                                    ? (e.desktopSettings = { sourceId: A.desktopSource.id, sound: d })
                                    : null != A.cameraSource &&
                                      (e.cameraSettings = {
                                          videoDeviceGuid: A.cameraSource.videoDeviceGuid,
                                          audioDeviceGuid: A.cameraSource.audioDeviceGuid,
                                          sound: d,
                                      }),
                                    c.A.setGoLiveSource(e);
                            }
                        } else {
                            var a;
                            (a = { ...I, object: x.ZSU.RADIO_ITEM, objectType: s }),
                                (0, f.openModalLazy)(
                                    async () => {
                                        let { default: e } = await Promise.all([n.e("93475"), n.e("18630")]).then(
                                            n.bind(n, 826789),
                                        );
                                        return (t) => (0, i.jsx)(e, { ...t, analyticsSource: a });
                                    },
                                    { contextKey: t === x.BRT.POPOUT ? E.KX : E.SY },
                                );
                        }
                    },
                    [t, I, d, A],
                );
            if (null == e) return null;
            let N = a === O.jQ.PRESET_DOCUMENTS ? O.kn.FPS_30 : u,
                M = O.ce.map((e) => {
                    let { value: t, label: n, subtext: r } = e,
                        l = (0, C.A)(O.jQ.PRESET_CUSTOM, o, t, g, p, R);
                    return (0, i.jsx)(
                        s.iD,
                        {
                            group: "stream-settings-fps",
                            id: `stream-settings-fps-${t}`,
                            label: n,
                            subtext: r,
                            checked: t === u,
                            action: () => D(l, o, t, x.AnalyticsObjectTypes.RESOLUTION),
                        },
                        `stream-settings-fps-${t}`,
                    );
                }),
                L = O.Jk.map((e) => {
                    let { value: t, label: n, subtext: r } = e,
                        l = (0, C.A)(O.jQ.PRESET_CUSTOM, t, N, g, p, R);
                    return (0, i.jsx)(
                        s.iD,
                        {
                            group: "stream-settings-resolution",
                            id: `stream-settings-resolution-${t}`,
                            label: n,
                            subtext: r,
                            checked: t === o,
                            action: () => D(l, t, N, x.AnalyticsObjectTypes.RESOLUTION),
                        },
                        `stream-settings-resolution-${t}`,
                    );
                });
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(s.rX, { label: j.intl.string(j.t.SkkeIt), children: M }),
                    (0, i.jsx)(s.rX, { label: j.intl.string(j.t.rHyPXg), children: L }),
                ],
            });
        })(t, L),
        F = (0, p.A)(t, L, I.FX),
        H = null != k && G && (!k.startsWith("screen") || z),
        K = (0, l.bG)([m.Ay], () => m.Ay.getUseSystemScreensharePicker() && (0, g.isLinux)()),
        B = r.useCallback(() => {
            k?.startsWith("prepicked:")
                ? m.Ay.getMediaEngine().eachConnection((e) => {
                      e.context === _.x.STREAM && e.presentDesktopSourcePicker("window");
                  })
                : R();
        }, [k, R]),
        W = k?.startsWith("prepicked:") ?? !1,
        J = (0, g.isMac)() && g.isPlatformEmbedded && W && (w?.windows.length ?? 0) > 0,
        q = (0, g.isMac)() && g.isPlatformEmbedded && W && (w?.applications.length ?? 0) > 0,
        Y = J
            ? j.intl.string(j.t.qDK8gQ)
            : q
              ? j.intl.string(j.t["3m8w+Q"])
              : M
                ? j.intl.string(j.t.eAktHv)
                : j.intl.string(j.t.qntSal),
        X = r.useCallback(() => {
            let { preset: e, resolution: t, fps: n } = h.A.getState(),
                i = { qualityOptions: { preset: e, resolution: t, frameRate: n }, context: _.x.STREAM };
            null != k && (i.desktopSettings = { sourceId: k, sound: !P }),
                (0, u.Xd)({ preset: e, resolution: t, frameRate: n, soundshareEnabled: !P }),
                c.A.setGoLiveSource(i);
        }, [k, P]);
    if (null == t)
        return (0, i.jsx)(s.Dr, {
            id: "share-your-screen",
            label: j.intl.string(j.t.fjBNo1),
            icon: a.F,
            leadingAccessory: { type: "icon", icon: a.F },
            action: R,
        });
    let Q = g.isPlatformEmbedded
            ? (0, i.jsx)(s.Dr, { id: "stream-settings", label: j.intl.string(j.t.ytAD9d), children: V })
            : null,
        Z = H
            ? (0, i.jsx)(s.sL, {
                  id: "stream-settings-audio-enable",
                  label: M ? j.intl.string(j.t.af2Tw1) : j.intl.string(j.t.ZJEHt7),
                  checked: P,
                  action: X,
              })
            : null,
        $ =
            !U || N || K
                ? null
                : (0, i.jsx)(s.Dr, {
                      id: "change-windows",
                      label: Y,
                      icon: a.F,
                      leadingAccessory: { type: "icon", icon: a.F },
                      action: B,
                  }),
        ee = (0, i.jsx)(s.Dr, {
            id: "stop-streaming",
            color: "danger",
            label: j.intl.string(j.t.S5anIc),
            icon: o.G,
            leadingAccessory: { type: "icon", icon: o.G },
            action: () => (0, A.A)(t),
        });
    return M
        ? (0, i.jsxs)(i.Fragment, { children: [ee, $, Q, Z] })
        : (0, i.jsxs)(i.Fragment, { children: [Q, D ? F : null, Z, $, ee] });
}
