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
    m = n(338771),
    h = n(929921),
    g = n(360906),
    f = n(723702),
    A = n(74329),
    p = n(192308),
    E = n(231723),
    C = n(212245),
    b = n(327649),
    T = n(248174),
    v = n(375742),
    _ = n(734057),
    I = n(71393),
    y = n(309010),
    S = n(287809),
    R = n(652215),
    x = n(753070),
    O = n(731854),
    N = n(105292),
    k = n(818348);
function M(e) {
    let {
            stream: t,
            handleGoLive: M,
            showReportOption: P = !1,
            disableChangeWindows: D = !1,
            minimal: j = !1,
            appContext: U = R.BRT.APP,
        } = e,
        { desktopSourceId: w, lastPickedContent: L } = (0, l.cf)([d.Ay, g.Ay], () => {
            let { desktopSource: e } = g.Ay.getGoLiveSource() ?? {},
                t = d.Ay.getLastPickedContent();
            return { desktopSourceId: e?.id, lastPickedContent: t };
        }),
        z = (0, l.bG)([h.A], () => h.A.getState().soundshareEnabled),
        V = g.Ay.supports(O.O5.DESKTOP_CAPTURE_APPLICATIONS),
        G = (0, l.bG)([g.Ay], () => g.Ay.supports(O.O5.SOUNDSHARE)),
        F = (0, l.bG)([g.Ay], () => g.Ay.supportsScreenSoundshare()),
        W = (function (e, t) {
            let { preset: a, resolution: o, fps: c, soundshareEnabled: d } = (0, l.cf)([h.A], () => h.A.getState()),
                m = (0, l.bG)([g.Ay], () => g.Ay.getGoLiveSource()),
                f = (0, l.bG)([S.default], () => S.default.getCurrentUser()),
                A = (0, l.bG)([I.A], () => I.A.getGuild(e?.guildId)?.premiumTier),
                { location: k } = (0, C.p)(),
                M = (0, l.bG)([y.Ay, _.A], () => _.A.getChannel(y.Ay.getVoiceChannelId())),
                P = r.useCallback(
                    (e, r, l, s) => {
                        if (e) {
                            if (null != m) {
                                let e = {
                                    qualityOptions: { preset: x.jQ.PRESET_CUSTOM, resolution: r, frameRate: l },
                                    context: O.x.STREAM,
                                };
                                (null != m.desktopSource
                                    ? (e.desktopSettings = { sourceId: m.desktopSource.id, sound: d })
                                    : null != m.cameraSource &&
                                      (e.cameraSettings = {
                                          videoDeviceGuid: m.cameraSource.videoDeviceGuid,
                                          audioDeviceGuid: m.cameraSource.audioDeviceGuid,
                                          sound: d,
                                      }),
                                    u.default.setGoLiveSource(e));
                            }
                        } else {
                            var a;
                            ((a = { ...k, object: R.ZSU.RADIO_ITEM, objectType: s }),
                                (0, p.openModalLazy)(
                                    async () => {
                                        let { default: e } = await Promise.all([
                                            n.e("621820"),
                                            n.e("334168"),
                                            n.e("454048"),
                                            n.e("300699"),
                                            n.e("349619"),
                                            n.e("599666"),
                                            n.e("398125"),
                                            n.e("221825"),
                                            n.e("930758"),
                                            n.e("244560"),
                                            n.e("593600"),
                                            n.e("707826"),
                                            n.e("776195"),
                                            n.e("799657"),
                                            n.e("400954"),
                                            n.e("493475"),
                                            n.e("18630"),
                                        ]).then(n.bind(n, 826789));
                                        return (t) => (0, i.jsx)(e, { ...t, analyticsSource: a });
                                    },
                                    { contextKey: t === R.BRT.POPOUT ? E.KX : E.SY },
                                ));
                        }
                    },
                    [t, k, d, m],
                );
            if (null == e) return null;
            let D = a === x.jQ.PRESET_DOCUMENTS ? x.kn.FPS_30 : c,
                j = (0, T.A)("useStreamSettingsItems", f, e.guildId),
                U = o === j?.maxResolution && c === j?.maxFPS;
            function w(e) {
                return U ? ((0, v.A)(e, f, A, M) ?? o) : o;
            }
            let L = w(c),
                z = x.ce.map((e) => {
                    let { value: t, label: n, subtext: r } = e,
                        l = w(t),
                        a = (0, b.A)(x.jQ.PRESET_CUSTOM, l, t, f, A, M);
                    return (0, i.jsx)(
                        s.iD,
                        {
                            group: "stream-settings-fps",
                            id: `stream-settings-fps-${t}`,
                            label: n,
                            subtext: r,
                            checked: t === c,
                            action: () => {
                                (U && t === c) || P(a, l, t, R.AnalyticsObjectTypes.RESOLUTION);
                            },
                        },
                        `stream-settings-fps-${t}`,
                    );
                }),
                V = x.Jk.map((e) => {
                    let { value: t, label: n, subtext: r } = e,
                        l = (0, b.A)(x.jQ.PRESET_CUSTOM, t, D, f, A, M);
                    return (0, i.jsx)(
                        s.iD,
                        {
                            group: "stream-settings-resolution",
                            id: `stream-settings-resolution-${t}`,
                            label: n,
                            subtext: r,
                            checked: t === L,
                            action: () => {
                                (U && t === L) || P(l, t, D, R.AnalyticsObjectTypes.RESOLUTION);
                            },
                        },
                        `stream-settings-resolution-${t}`,
                    );
                });
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(s.rX, { label: N.intl.string(N.t.SkkeIt), children: z }),
                    (0, i.jsx)(s.rX, { label: N.intl.string(N.t.rHyPXg), children: V }),
                ],
            });
        })(t, U),
        H = (0, A.A)(t, U, k.FX),
        B = null != w && G && (!w.startsWith("screen") || F),
        q = (0, l.bG)([g.Ay], () => g.Ay.getUseSystemScreensharePicker() && (0, f.isLinux)()),
        K = r.useCallback(() => {
            w?.startsWith("prepicked:")
                ? g.Ay.getMediaEngine().eachConnection((e) => {
                      e.context === O.x.STREAM && e.presentDesktopSourcePicker("window");
                  })
                : M();
        }, [w, M]),
        J = w?.startsWith("prepicked:") ?? !1,
        Y = (0, f.isMac)() && f.isPlatformEmbedded && J && (L?.windows.length ?? 0) > 0,
        X = (0, f.isMac)() && f.isPlatformEmbedded && J && (L?.applications.length ?? 0) > 0,
        Z = Y
            ? N.intl.string(N.t.qDK8gQ)
            : X
              ? N.intl.string(N.t["3m8w+Q"])
              : j
                ? N.intl.string(N.t.eAktHv)
                : N.intl.string(N.t.qntSal),
        Q = r.useCallback(() => {
            let { preset: e, resolution: t, fps: n } = h.A.getState(),
                i = { qualityOptions: { preset: e, resolution: t, frameRate: n }, context: O.x.STREAM };
            (null != w && (i.desktopSettings = { sourceId: w, sound: !z }),
                (0, c.Xd)({ preset: e, resolution: t, frameRate: n, soundshareEnabled: !z }),
                u.default.setGoLiveSource(i));
        }, [w, z]);
    if (null == t)
        return (0, i.jsx)(s.Dr, {
            id: "share-your-screen",
            label: N.intl.string(N.t.fjBNo1),
            icon: a.F,
            leadingAccessory: { type: "icon", icon: a.F },
            action: M,
        });
    let $ = f.isPlatformEmbedded
            ? (0, i.jsx)(s.Dr, { id: "stream-settings", label: N.intl.string(N.t.ytAD9d), children: W })
            : null,
        ee = B
            ? (0, i.jsx)(s.sL, {
                  id: "stream-settings-audio-enable",
                  label: j ? N.intl.string(N.t.af2Tw1) : N.intl.string(N.t.ZJEHt7),
                  checked: z,
                  action: Q,
              })
            : null,
        et =
            !V || D || q
                ? null
                : (0, i.jsx)(s.Dr, {
                      id: "change-windows",
                      label: Z,
                      icon: a.F,
                      leadingAccessory: { type: "icon", icon: a.F },
                      action: K,
                  }),
        en = (0, i.jsx)(s.Dr, {
            id: "stop-streaming",
            color: "danger",
            label: N.intl.string(N.t.S5anIc),
            icon: o.G,
            leadingAccessory: { type: "icon", icon: o.G },
            action: () => (0, m.A)(t),
        });
    return j
        ? (0, i.jsxs)(i.Fragment, { children: [en, et, $, ee] })
        : (0, i.jsxs)(i.Fragment, { children: [$, P ? H : null, ee, et, en] });
}
