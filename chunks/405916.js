n.d(t, { E: () => I });
var i = n(477900),
    r = n(582128),
    l = n(17928),
    s = n(477782),
    a = n(183623),
    o = n(959988),
    u = n(827343),
    c = n(401843),
    d = n(725792),
    A = n(338771),
    h = n(929921),
    m = n(453028),
    g = n(723702),
    E = n(74329),
    f = n(192308),
    b = n(231723),
    p = n(212245),
    C = n(327649),
    S = n(734057),
    v = n(71393),
    _ = n(309010),
    O = n(287809),
    T = n(652215),
    x = n(753070),
    y = n(731854),
    j = n(375708),
    R = n(818348);
function I(e) {
    let {
            stream: t,
            handleGoLive: I,
            showReportOption: N = !1,
            disableChangeWindows: M = !1,
            minimal: L = !1,
            appContext: D = T.BRT.APP,
        } = e,
        { desktopSourceId: k, lastPickedContent: P } = (0, l.cf)([d.Ay, m.Ay], () => {
            let { desktopSource: e } = m.Ay.getGoLiveSource() ?? {},
                t = d.Ay.getLastPickedContent();
            return { desktopSourceId: e?.id, lastPickedContent: t };
        }),
        U = (0, l.bG)([h.A], () => h.A.getState().soundshareEnabled),
        w = m.Ay.supports(y.O5.DESKTOP_CAPTURE_APPLICATIONS),
        z = (0, l.bG)([m.Ay], () => m.Ay.supports(y.O5.SOUNDSHARE)),
        G = (0, l.bG)([m.Ay], () => m.Ay.supportsScreenSoundshare()),
        V = (function (e, t) {
            let { preset: a, resolution: o, fps: c, soundshareEnabled: d } = (0, l.cf)([h.A], () => h.A.getState()),
                A = (0, l.bG)([m.Ay], () => m.Ay.getGoLiveSource()),
                g = (0, l.bG)([O.default], () => O.default.getCurrentUser()),
                E = (0, l.bG)([v.A], () => v.A.getGuild(e?.guildId)?.premiumTier),
                { location: R } = (0, p.p)(),
                I = (0, l.bG)([_.Ay, S.A], () => S.A.getChannel(_.Ay.getVoiceChannelId())),
                N = r.useCallback(
                    (e, r, l, s) => {
                        if (e) {
                            if (null != A) {
                                let e = {
                                    qualityOptions: { preset: x.jQ.PRESET_CUSTOM, resolution: r, frameRate: l },
                                    context: y.x.STREAM,
                                };
                                null != A.desktopSource
                                    ? (e.desktopSettings = { sourceId: A.desktopSource.id, sound: d })
                                    : null != A.cameraSource &&
                                      (e.cameraSettings = {
                                          videoDeviceGuid: A.cameraSource.videoDeviceGuid,
                                          audioDeviceGuid: A.cameraSource.audioDeviceGuid,
                                          sound: d,
                                      }),
                                    u.A.setGoLiveSource(e);
                            }
                        } else {
                            var a;
                            (a = { ...R, object: T.ZSU.RADIO_ITEM, objectType: s }),
                                (0, f.openModalLazy)(
                                    async () => {
                                        let { default: e } = await Promise.all([
                                            n.e("629972"),
                                            n.e("334168"),
                                            n.e("454048"),
                                            n.e("300699"),
                                            n.e("599666"),
                                            n.e("349619"),
                                            n.e("740428"),
                                            n.e("398125"),
                                            n.e("221825"),
                                            n.e("593600"),
                                            n.e("276640"),
                                            n.e("431011"),
                                            n.e("799657"),
                                            n.e("400954"),
                                            n.e("493475"),
                                            n.e("18630"),
                                        ]).then(n.bind(n, 826789));
                                        return (t) => (0, i.jsx)(e, { ...t, analyticsSource: a });
                                    },
                                    { contextKey: t === T.BRT.POPOUT ? b.KX : b.SY },
                                );
                        }
                    },
                    [t, R, d, A],
                );
            if (null == e) return null;
            let M = a === x.jQ.PRESET_DOCUMENTS ? x.kn.FPS_30 : c,
                L = x.ce.map((e) => {
                    let { value: t, label: n, subtext: r } = e,
                        l = (0, C.A)(x.jQ.PRESET_CUSTOM, o, t, g, E, I);
                    return (0, i.jsx)(
                        s.iD,
                        {
                            group: "stream-settings-fps",
                            id: `stream-settings-fps-${t}`,
                            label: n,
                            subtext: r,
                            checked: t === c,
                            action: () => N(l, o, t, T.AnalyticsObjectTypes.RESOLUTION),
                        },
                        `stream-settings-fps-${t}`,
                    );
                }),
                D = x.Jk.map((e) => {
                    let { value: t, label: n, subtext: r } = e,
                        l = (0, C.A)(x.jQ.PRESET_CUSTOM, t, M, g, E, I);
                    return (0, i.jsx)(
                        s.iD,
                        {
                            group: "stream-settings-resolution",
                            id: `stream-settings-resolution-${t}`,
                            label: n,
                            subtext: r,
                            checked: t === o,
                            action: () => N(l, t, M, T.AnalyticsObjectTypes.RESOLUTION),
                        },
                        `stream-settings-resolution-${t}`,
                    );
                });
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(s.rX, { label: j.intl.string(j.t.SkkeIt), children: L }),
                    (0, i.jsx)(s.rX, { label: j.intl.string(j.t.rHyPXg), children: D }),
                ],
            });
        })(t, D),
        F = (0, E.A)(t, D, R.FX),
        K = null != k && z && (!k.startsWith("screen") || G),
        B = (0, l.bG)([m.Ay], () => m.Ay.getUseSystemScreensharePicker() && (0, g.isLinux)()),
        H = r.useCallback(() => {
            k?.startsWith("prepicked:")
                ? m.Ay.getMediaEngine().eachConnection((e) => {
                      e.context === y.x.STREAM && e.presentDesktopSourcePicker("window");
                  })
                : I();
        }, [k, I]),
        W = k?.startsWith("prepicked:") ?? !1,
        J = (0, g.isMac)() && g.isPlatformEmbedded && W && (P?.windows.length ?? 0) > 0,
        q = (0, g.isMac)() && g.isPlatformEmbedded && W && (P?.applications.length ?? 0) > 0,
        Y = J
            ? j.intl.string(j.t.qDK8gQ)
            : q
              ? j.intl.string(j.t["3m8w+Q"])
              : L
                ? j.intl.string(j.t.eAktHv)
                : j.intl.string(j.t.qntSal),
        X = r.useCallback(() => {
            let { preset: e, resolution: t, fps: n } = h.A.getState(),
                i = { qualityOptions: { preset: e, resolution: t, frameRate: n }, context: y.x.STREAM };
            null != k && (i.desktopSettings = { sourceId: k, sound: !U }),
                (0, c.Xd)({ preset: e, resolution: t, frameRate: n, soundshareEnabled: !U }),
                u.A.setGoLiveSource(i);
        }, [k, U]);
    if (null == t)
        return (0, i.jsx)(s.Dr, {
            id: "share-your-screen",
            label: j.intl.string(j.t.fjBNo1),
            icon: a.F,
            leadingAccessory: { type: "icon", icon: a.F },
            action: I,
        });
    let Q = g.isPlatformEmbedded
            ? (0, i.jsx)(s.Dr, { id: "stream-settings", label: j.intl.string(j.t.ytAD9d), children: V })
            : null,
        Z = K
            ? (0, i.jsx)(s.sL, {
                  id: "stream-settings-audio-enable",
                  label: L ? j.intl.string(j.t.af2Tw1) : j.intl.string(j.t.ZJEHt7),
                  checked: U,
                  action: X,
              })
            : null,
        $ =
            !w || M || B
                ? null
                : (0, i.jsx)(s.Dr, {
                      id: "change-windows",
                      label: Y,
                      icon: a.F,
                      leadingAccessory: { type: "icon", icon: a.F },
                      action: H,
                  }),
        ee = (0, i.jsx)(s.Dr, {
            id: "stop-streaming",
            color: "danger",
            label: j.intl.string(j.t.S5anIc),
            icon: o.G,
            leadingAccessory: { type: "icon", icon: o.G },
            action: () => (0, A.A)(t),
        });
    return L
        ? (0, i.jsxs)(i.Fragment, { children: [ee, $, Q, Z] })
        : (0, i.jsxs)(i.Fragment, { children: [Q, N ? F : null, Z, $, ee] });
}
