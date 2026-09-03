n.d(t, { E: () => M });
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
    m = n(45630),
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
    N = n(818348);
function M(e) {
    let {
            stream: t,
            handleGoLive: M,
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
        z = (0, l.bG)([h.A], () => h.A.getState().soundshareEnabled),
        G = m.Ay.supports(R.O5.DESKTOP_CAPTURE_APPLICATIONS),
        V = (0, l.bG)([m.Ay], () => m.Ay.supports(R.O5.SOUNDSHARE)),
        F = (0, l.bG)([m.Ay], () => m.Ay.supportsScreenSoundshare()),
        K = (function (e, t) {
            let { preset: a, resolution: o, fps: c, soundshareEnabled: d } = (0, l.cf)([h.A], () => h.A.getState()),
                A = (0, l.bG)([m.Ay], () => m.Ay.getGoLiveSource()),
                g = (0, l.bG)([x.default], () => x.default.getCurrentUser()),
                f = (0, l.bG)([O.A], () => O.A.getGuild(e?.guildId)?.premiumTier),
                { location: N } = (0, p.p)(),
                M = (0, l.bG)([T.Ay, _.A], () => _.A.getChannel(T.Ay.getVoiceChannelId())),
                L = r.useCallback(
                    (e, r, l, s) => {
                        if (e) {
                            if (null != A) {
                                let e = {
                                    qualityOptions: { preset: j.jQ.PRESET_CUSTOM, resolution: r, frameRate: l },
                                    context: R.x.STREAM,
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
                            (a = { ...N, object: y.ZSU.RADIO_ITEM, objectType: s }),
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
                                    { contextKey: t === y.BRT.POPOUT ? b.KX : b.SY },
                                );
                        }
                    },
                    [t, N, d, A],
                );
            if (null == e) return null;
            let D = a === j.jQ.PRESET_DOCUMENTS ? j.kn.FPS_30 : c,
                k = (0, S.A)("useStreamSettingsItems", g, e.guildId),
                P = o === k?.maxResolution && c === k?.maxFPS;
            function U(e) {
                return P ? ((0, v.A)(e, g, f, M) ?? o) : o;
            }
            let w = U(c),
                z = j.ce.map((e) => {
                    let { value: t, label: n, subtext: r } = e,
                        l = U(t),
                        a = (0, C.A)(j.jQ.PRESET_CUSTOM, l, t, g, f, M);
                    return (0, i.jsx)(
                        s.iD,
                        {
                            group: "stream-settings-fps",
                            id: `stream-settings-fps-${t}`,
                            label: n,
                            subtext: r,
                            checked: t === c,
                            action: () => {
                                (P && t === c) || L(a, l, t, y.AnalyticsObjectTypes.RESOLUTION);
                            },
                        },
                        `stream-settings-fps-${t}`,
                    );
                }),
                G = j.Jk.map((e) => {
                    let { value: t, label: n, subtext: r } = e,
                        l = (0, C.A)(j.jQ.PRESET_CUSTOM, t, D, g, f, M);
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
        B = (0, f.A)(t, P, N.FX),
        H = null != U && V && (!U.startsWith("screen") || F),
        W = (0, l.bG)([m.Ay], () => m.Ay.getUseSystemScreensharePicker() && (0, g.isLinux)()),
        J = r.useCallback(() => {
            U?.startsWith("prepicked:")
                ? m.Ay.getMediaEngine().eachConnection((e) => {
                      e.context === R.x.STREAM && e.presentDesktopSourcePicker("window");
                  })
                : M();
        }, [U, M]),
        q = U?.startsWith("prepicked:") ?? !1,
        Y = (0, g.isMac)() && g.isPlatformEmbedded && q && (w?.windows.length ?? 0) > 0,
        X = (0, g.isMac)() && g.isPlatformEmbedded && q && (w?.applications.length ?? 0) > 0,
        Q = Y
            ? I.intl.string(I.t.qDK8gQ)
            : X
              ? I.intl.string(I.t["3m8w+Q"])
              : k
                ? I.intl.string(I.t.eAktHv)
                : I.intl.string(I.t.qntSal),
        Z = r.useCallback(() => {
            let { preset: e, resolution: t, fps: n } = h.A.getState(),
                i = { qualityOptions: { preset: e, resolution: t, frameRate: n }, context: R.x.STREAM };
            null != U && (i.desktopSettings = { sourceId: U, sound: !z }),
                (0, c.Xd)({ preset: e, resolution: t, frameRate: n, soundshareEnabled: !z }),
                u.A.setGoLiveSource(i);
        }, [U, z]);
    if (null == t)
        return (0, i.jsx)(s.Dr, {
            id: "share-your-screen",
            label: I.intl.string(I.t.fjBNo1),
            icon: a.F,
            leadingAccessory: { type: "icon", icon: a.F },
            action: M,
        });
    let $ = g.isPlatformEmbedded
            ? (0, i.jsx)(s.Dr, { id: "stream-settings", label: I.intl.string(I.t.ytAD9d), children: K })
            : null,
        ee = H
            ? (0, i.jsx)(s.sL, {
                  id: "stream-settings-audio-enable",
                  label: k ? I.intl.string(I.t.af2Tw1) : I.intl.string(I.t.ZJEHt7),
                  checked: z,
                  action: Z,
              })
            : null,
        et =
            !G || D || W
                ? null
                : (0, i.jsx)(s.Dr, {
                      id: "change-windows",
                      label: Q,
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
            action: () => (0, A.A)(t),
        });
    return k
        ? (0, i.jsxs)(i.Fragment, { children: [en, et, $, ee] })
        : (0, i.jsxs)(i.Fragment, { children: [$, L ? B : null, ee, et, en] });
}
