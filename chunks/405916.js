n.d(t, { E: () => j });
var i = n(477900),
    r = n(582128),
    l = n(17928),
    s = n(477782),
    a = n(183623),
    o = n(959988),
    u = n(827343),
    c = n(401843),
    d = n(725792),
    h = n(338771),
    m = n(929921),
    A = n(360906),
    g = n(723702),
    E = n(74329),
    f = n(192308),
    p = n(231723),
    C = n(212245),
    _ = n(327649),
    b = n(248174),
    S = n(375742),
    T = n(734057),
    I = n(71393),
    v = n(309010),
    O = n(287809),
    y = n(652215),
    R = n(753070),
    x = n(731854),
    N = n(105292),
    M = n(818348);
function j(e) {
    let {
            stream: t,
            handleGoLive: j,
            showReportOption: D = !1,
            disableChangeWindows: P = !1,
            minimal: L = !1,
            appContext: k = y.BRT.APP,
        } = e,
        { desktopSourceId: U, lastPickedContent: w } = (0, l.cf)([d.Ay, A.Ay], () => {
            let { desktopSource: e } = A.Ay.getGoLiveSource() ?? {},
                t = d.Ay.getLastPickedContent();
            return { desktopSourceId: e?.id, lastPickedContent: t };
        }),
        V = (0, l.bG)([m.A], () => m.A.getState().soundshareEnabled),
        z = A.Ay.supports(x.O5.DESKTOP_CAPTURE_APPLICATIONS),
        G = (0, l.bG)([A.Ay], () => A.Ay.supports(x.O5.SOUNDSHARE)),
        F = (0, l.bG)([A.Ay], () => A.Ay.supportsScreenSoundshare()),
        W = (function (e, t) {
            let { preset: a, resolution: o, fps: c, soundshareEnabled: d } = (0, l.cf)([m.A], () => m.A.getState()),
                h = (0, l.bG)([A.Ay], () => A.Ay.getGoLiveSource()),
                g = (0, l.bG)([O.default], () => O.default.getCurrentUser()),
                E = (0, l.bG)([I.A], () => I.A.getGuild(e?.guildId)?.premiumTier),
                { location: M } = (0, C.p)(),
                j = (0, l.bG)([v.Ay, T.A], () => T.A.getChannel(v.Ay.getVoiceChannelId())),
                D = r.useCallback(
                    (e, r, l, s) => {
                        if (e) {
                            if (null != h) {
                                let e = {
                                    qualityOptions: { preset: R.jQ.PRESET_CUSTOM, resolution: r, frameRate: l },
                                    context: x.x.STREAM,
                                };
                                (null != h.desktopSource
                                    ? (e.desktopSettings = { sourceId: h.desktopSource.id, sound: d })
                                    : null != h.cameraSource &&
                                      (e.cameraSettings = {
                                          videoDeviceGuid: h.cameraSource.videoDeviceGuid,
                                          audioDeviceGuid: h.cameraSource.audioDeviceGuid,
                                          sound: d,
                                      }),
                                    u.default.setGoLiveSource(e));
                            }
                        } else {
                            var a;
                            ((a = { ...M, object: y.ZSU.RADIO_ITEM, objectType: s }),
                                (0, f.openModalLazy)(
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
                                    { contextKey: t === y.BRT.POPOUT ? p.KX : p.SY },
                                ));
                        }
                    },
                    [t, M, d, h],
                );
            if (null == e) return null;
            let P = a === R.jQ.PRESET_DOCUMENTS ? R.kn.FPS_30 : c,
                L = (0, b.A)("useStreamSettingsItems", g, e.guildId),
                k = o === L?.maxResolution && c === L?.maxFPS;
            function U(e) {
                return k ? ((0, S.A)(e, g, E, j) ?? o) : o;
            }
            let w = U(c),
                V = R.ce.map((e) => {
                    let { value: t, label: n, subtext: r } = e,
                        l = U(t),
                        a = (0, _.A)(R.jQ.PRESET_CUSTOM, l, t, g, E, j);
                    return (0, i.jsx)(
                        s.iD,
                        {
                            group: "stream-settings-fps",
                            id: `stream-settings-fps-${t}`,
                            label: n,
                            subtext: r,
                            checked: t === c,
                            action: () => {
                                (k && t === c) || D(a, l, t, y.AnalyticsObjectTypes.RESOLUTION);
                            },
                        },
                        `stream-settings-fps-${t}`,
                    );
                }),
                z = R.Jk.map((e) => {
                    let { value: t, label: n, subtext: r } = e,
                        l = (0, _.A)(R.jQ.PRESET_CUSTOM, t, P, g, E, j);
                    return (0, i.jsx)(
                        s.iD,
                        {
                            group: "stream-settings-resolution",
                            id: `stream-settings-resolution-${t}`,
                            label: n,
                            subtext: r,
                            checked: t === w,
                            action: () => {
                                (k && t === w) || D(l, t, P, y.AnalyticsObjectTypes.RESOLUTION);
                            },
                        },
                        `stream-settings-resolution-${t}`,
                    );
                });
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(s.rX, { label: N.intl.string(N.t.SkkeIt), children: V }),
                    (0, i.jsx)(s.rX, { label: N.intl.string(N.t.rHyPXg), children: z }),
                ],
            });
        })(t, k),
        H = (0, E.A)(t, k, M.FX),
        B = null != U && G && (!U.startsWith("screen") || F),
        K = (0, l.bG)([A.Ay], () => A.Ay.getUseSystemScreensharePicker() && (0, g.isLinux)()),
        q = r.useCallback(() => {
            U?.startsWith("prepicked:")
                ? A.Ay.getMediaEngine().eachConnection((e) => {
                      e.context === x.x.STREAM && e.presentDesktopSourcePicker("window");
                  })
                : j();
        }, [U, j]),
        Y = U?.startsWith("prepicked:") ?? !1,
        J = (0, g.isMac)() && g.isPlatformEmbedded && Y && (w?.windows.length ?? 0) > 0,
        X = (0, g.isMac)() && g.isPlatformEmbedded && Y && (w?.applications.length ?? 0) > 0,
        Z = J
            ? N.intl.string(N.t.qDK8gQ)
            : X
              ? N.intl.string(N.t["3m8w+Q"])
              : L
                ? N.intl.string(N.t.eAktHv)
                : N.intl.string(N.t.qntSal),
        Q = r.useCallback(() => {
            let { preset: e, resolution: t, fps: n } = m.A.getState(),
                i = { qualityOptions: { preset: e, resolution: t, frameRate: n }, context: x.x.STREAM };
            (null != U && (i.desktopSettings = { sourceId: U, sound: !V }),
                (0, c.Xd)({ preset: e, resolution: t, frameRate: n, soundshareEnabled: !V }),
                u.default.setGoLiveSource(i));
        }, [U, V]);
    if (null == t)
        return (0, i.jsx)(s.Dr, {
            id: "share-your-screen",
            label: N.intl.string(N.t.fjBNo1),
            icon: a.F,
            leadingAccessory: { type: "icon", icon: a.F },
            action: j,
        });
    let $ = g.isPlatformEmbedded
            ? (0, i.jsx)(s.Dr, { id: "stream-settings", label: N.intl.string(N.t.ytAD9d), children: W })
            : null,
        ee = B
            ? (0, i.jsx)(s.sL, {
                  id: "stream-settings-audio-enable",
                  label: L ? N.intl.string(N.t.af2Tw1) : N.intl.string(N.t.ZJEHt7),
                  checked: V,
                  action: Q,
              })
            : null,
        et =
            !z || P || K
                ? null
                : (0, i.jsx)(s.Dr, {
                      id: "change-windows",
                      label: Z,
                      icon: a.F,
                      leadingAccessory: { type: "icon", icon: a.F },
                      action: q,
                  }),
        en = (0, i.jsx)(s.Dr, {
            id: "stop-streaming",
            color: "danger",
            label: N.intl.string(N.t.S5anIc),
            icon: o.G,
            leadingAccessory: { type: "icon", icon: o.G },
            action: () => (0, h.A)(t),
        });
    return L
        ? (0, i.jsxs)(i.Fragment, { children: [en, et, $, ee] })
        : (0, i.jsxs)(i.Fragment, { children: [$, D ? H : null, ee, et, en] });
}
