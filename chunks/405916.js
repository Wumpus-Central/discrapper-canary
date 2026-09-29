n.d(t, { E: () => N });
var i = n(477900),
    r = n(582128),
    l = n(17928),
    s = n(477782),
    a = n(183623),
    o = n(959988),
    c = n(827343),
    u = n(401843),
    d = n(725792),
    h = n(338771),
    A = n(929921),
    m = n(25578),
    g = n(723702),
    f = n(74329),
    E = n(192308),
    b = n(231723),
    p = n(212245),
    C = n(327649),
    S = n(248174),
    v = n(375742),
    _ = n(734057),
    O = n(71393),
    T = n(309010),
    x = n(287809),
    y = n(652215),
    j = n(753070),
    R = n(731854),
    I = n(375708),
    M = n(818348);
function N(e) {
    let {
            stream: t,
            handleGoLive: N,
            showReportOption: L = !1,
            disableChangeWindows: D = !1,
            minimal: k = !1,
            appContext: P = y.BRT.APP,
        } = e,
        { desktopSourceId: U, lastPickedContent: w } = (0, l.cf)([d.Ay, m.Ay], () => {
            let { desktopSource: e } = m.Ay.getGoLiveSource() ?? {},
                t = d.Ay.getLastPickedContent();
            return { desktopSourceId: e?.id, lastPickedContent: t };
        }),
        z = (0, l.bG)([A.A], () => A.A.getState().soundshareEnabled),
        G = m.Ay.supports(R.O5.DESKTOP_CAPTURE_APPLICATIONS),
        V = (0, l.bG)([m.Ay], () => m.Ay.supports(R.O5.SOUNDSHARE)),
        F = (0, l.bG)([m.Ay], () => m.Ay.supportsScreenSoundshare()),
        K = (function (e, t) {
            let { preset: a, resolution: o, fps: u, soundshareEnabled: d } = (0, l.cf)([A.A], () => A.A.getState()),
                h = (0, l.bG)([m.Ay], () => m.Ay.getGoLiveSource()),
                g = (0, l.bG)([x.default], () => x.default.getCurrentUser()),
                f = (0, l.bG)([O.A], () => O.A.getGuild(e?.guildId)?.premiumTier),
                { location: M } = (0, p.p)(),
                N = (0, l.bG)([T.Ay, _.A], () => _.A.getChannel(T.Ay.getVoiceChannelId())),
                L = r.useCallback(
                    (e, r, l, s) => {
                        if (e) {
                            if (null != h) {
                                let e = {
                                    qualityOptions: { preset: j.jQ.PRESET_CUSTOM, resolution: r, frameRate: l },
                                    context: R.x.STREAM,
                                };
                                (null != h.desktopSource
                                    ? (e.desktopSettings = { sourceId: h.desktopSource.id, sound: d })
                                    : null != h.cameraSource &&
                                      (e.cameraSettings = {
                                          videoDeviceGuid: h.cameraSource.videoDeviceGuid,
                                          audioDeviceGuid: h.cameraSource.audioDeviceGuid,
                                          sound: d,
                                      }),
                                    c.A.setGoLiveSource(e));
                            }
                        } else {
                            var a;
                            ((a = { ...M, object: y.ZSU.RADIO_ITEM, objectType: s }),
                                (0, E.openModalLazy)(
                                    async () => {
                                        let { default: e } = await Promise.all([
                                            n.e("629972"),
                                            n.e("334168"),
                                            n.e("454048"),
                                            n.e("300699"),
                                            n.e("349619"),
                                            n.e("599666"),
                                            n.e("740428"),
                                            n.e("398125"),
                                            n.e("221825"),
                                            n.e("930758"),
                                            n.e("593600"),
                                            n.e("431011"),
                                            n.e("707826"),
                                            n.e("799657"),
                                            n.e("400954"),
                                            n.e("493475"),
                                            n.e("18630"),
                                        ]).then(n.bind(n, 826789));
                                        return (t) => (0, i.jsx)(e, { ...t, analyticsSource: a });
                                    },
                                    { contextKey: t === y.BRT.POPOUT ? b.KX : b.SY },
                                ));
                        }
                    },
                    [t, M, d, h],
                );
            if (null == e) return null;
            let D = a === j.jQ.PRESET_DOCUMENTS ? j.kn.FPS_30 : u,
                k = (0, S.A)("useStreamSettingsItems", g, e.guildId),
                P = o === k?.maxResolution && u === k?.maxFPS;
            function U(e) {
                return P ? ((0, v.A)(e, g, f, N) ?? o) : o;
            }
            let w = U(u),
                z = j.ce.map((e) => {
                    let { value: t, label: n, subtext: r } = e,
                        l = U(t),
                        a = (0, C.A)(j.jQ.PRESET_CUSTOM, l, t, g, f, N);
                    return (0, i.jsx)(
                        s.iD,
                        {
                            group: "stream-settings-fps",
                            id: `stream-settings-fps-${t}`,
                            label: n,
                            subtext: r,
                            checked: t === u,
                            action: () => {
                                (P && t === u) || L(a, l, t, y.AnalyticsObjectTypes.RESOLUTION);
                            },
                        },
                        `stream-settings-fps-${t}`,
                    );
                }),
                G = j.Jk.map((e) => {
                    let { value: t, label: n, subtext: r } = e,
                        l = (0, C.A)(j.jQ.PRESET_CUSTOM, t, D, g, f, N);
                    return (0, i.jsx)(
                        s.iD,
                        {
                            group: "stream-settings-resolution",
                            id: `stream-settings-resolution-${t}`,
                            label: n,
                            subtext: r,
                            checked: t === w,
                            action: () => {
                                (P && t === w) || L(l, t, D, y.AnalyticsObjectTypes.RESOLUTION);
                            },
                        },
                        `stream-settings-resolution-${t}`,
                    );
                });
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(s.rX, { label: I.intl.string(I.t.SkkeIt), children: z }),
                    (0, i.jsx)(s.rX, { label: I.intl.string(I.t.rHyPXg), children: G }),
                ],
            });
        })(t, P),
        B = (0, f.A)(t, P, M.FX),
        H = null != U && V && (!U.startsWith("screen") || F),
        W = (0, l.bG)([m.Ay], () => m.Ay.getUseSystemScreensharePicker() && (0, g.isLinux)()),
        J = r.useCallback(() => {
            U?.startsWith("prepicked:")
                ? m.Ay.getMediaEngine().eachConnection((e) => {
                      e.context === R.x.STREAM && e.presentDesktopSourcePicker("window");
                  })
                : N();
        }, [U, N]),
        q = U?.startsWith("prepicked:") ?? !1,
        Y = (0, g.isMac)() && g.isPlatformEmbedded && q && (w?.windows.length ?? 0) > 0,
        X = (0, g.isMac)() && g.isPlatformEmbedded && q && (w?.applications.length ?? 0) > 0,
        Z = Y
            ? I.intl.string(I.t.qDK8gQ)
            : X
              ? I.intl.string(I.t["3m8w+Q"])
              : k
                ? I.intl.string(I.t.eAktHv)
                : I.intl.string(I.t.qntSal),
        Q = r.useCallback(() => {
            let { preset: e, resolution: t, fps: n } = A.A.getState(),
                i = { qualityOptions: { preset: e, resolution: t, frameRate: n }, context: R.x.STREAM };
            (null != U && (i.desktopSettings = { sourceId: U, sound: !z }),
                (0, u.Xd)({ preset: e, resolution: t, frameRate: n, soundshareEnabled: !z }),
                c.A.setGoLiveSource(i));
        }, [U, z]);
    if (null == t)
        return (0, i.jsx)(s.Dr, {
            id: "share-your-screen",
            label: I.intl.string(I.t.fjBNo1),
            icon: a.F,
            leadingAccessory: { type: "icon", icon: a.F },
            action: N,
        });
    let $ = g.isPlatformEmbedded
            ? (0, i.jsx)(s.Dr, { id: "stream-settings", label: I.intl.string(I.t.ytAD9d), children: K })
            : null,
        ee = H
            ? (0, i.jsx)(s.sL, {
                  id: "stream-settings-audio-enable",
                  label: k ? I.intl.string(I.t.af2Tw1) : I.intl.string(I.t.ZJEHt7),
                  checked: z,
                  action: Q,
              })
            : null,
        et =
            !G || D || W
                ? null
                : (0, i.jsx)(s.Dr, {
                      id: "change-windows",
                      label: Z,
                      icon: a.F,
                      leadingAccessory: { type: "icon", icon: a.F },
                      action: J,
                  }),
        en = (0, i.jsx)(s.Dr, {
            id: "stop-streaming",
            color: "danger",
            label: I.intl.string(I.t.S5anIc),
            icon: o.G,
            leadingAccessory: { type: "icon", icon: o.G },
            action: () => (0, h.A)(t),
        });
    return k
        ? (0, i.jsxs)(i.Fragment, { children: [en, et, $, ee] })
        : (0, i.jsxs)(i.Fragment, { children: [$, L ? B : null, ee, et, en] });
}
