n.d(t, { E: () => M });
var i = n(477900),
    r = n(582128),
    l = n(855986),
    s = n(477782),
    a = n(183623),
    o = n(959988),
    c = n(827343),
    u = n(401843),
    d = n(71689),
    m = n(338771),
    h = n(929921),
    g = n(754712),
    f = n(723702),
    p = n(74329),
    A = n(192308),
    E = n(231723),
    b = n(212245),
    C = n(676030),
    v = n(474626),
    y = n(375742),
    I = n(734057),
    T = n(71393),
    _ = n(309010),
    R = n(287809),
    x = n(652215),
    S = n(753070),
    O = n(731854),
    k = n(792996),
    N = n(818348);
function M(e) {
    let {
            stream: t,
            handleGoLive: M,
            showReportOption: P = !1,
            disableChangeWindows: D = !1,
            minimal: j = !1,
            appContext: w = x.BRT.APP,
        } = e,
        { desktopSourceId: U, lastPickedContent: z } = (0, l.cf)([d.Ay, g.Ay], () => {
            let { desktopSource: e } = g.Ay.getGoLiveSource() ?? {},
                t = d.Ay.getLastPickedContent();
            return { desktopSourceId: e?.id, lastPickedContent: t };
        }),
        L = (0, l.bG)([h.A], () => h.A.getState().soundshareEnabled),
        V = g.Ay.supports(O.O5.DESKTOP_CAPTURE_APPLICATIONS),
        F = (0, l.bG)([g.Ay], () => g.Ay.supports(O.O5.SOUNDSHARE)),
        G = (0, l.bG)([g.Ay], () => g.Ay.supportsScreenSoundshare()),
        W = (function (e, t) {
            let { preset: a, resolution: o, fps: u, soundshareEnabled: d } = (0, l.cf)([h.A], () => h.A.getState()),
                m = (0, l.bG)([g.Ay], () => g.Ay.getGoLiveSource()),
                f = (0, l.bG)([R.default], () => R.default.getCurrentUser()),
                p = (0, l.bG)([T.A], () => T.A.getGuild(e?.guildId)?.premiumTier),
                { location: N } = (0, b.p)(),
                M = (0, l.bG)([_.Ay, I.A], () => I.A.getChannel(_.Ay.getVoiceChannelId())),
                P = r.useCallback(
                    (e, r, l, s) => {
                        if (e) {
                            if (null != m) {
                                let e = {
                                    qualityOptions: { preset: S.jQ.PRESET_CUSTOM, resolution: r, frameRate: l },
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
                                    c.default.setGoLiveSource(e));
                            }
                        } else {
                            var a;
                            ((a = { ...N, object: x.ZSU.RADIO_ITEM, objectType: s }),
                                (0, A.mM)(
                                    async () => {
                                        let { default: e } = await Promise.all([
                                            n.e(629972),
                                            n.e(334168),
                                            n.e(454048),
                                            n.e(300699),
                                            n.e(349619),
                                            n.e(922716),
                                            n.e(398125),
                                            n.e(221825),
                                            n.e(930758),
                                            n.e(776195),
                                            n.e(593600),
                                            n.e(707826),
                                            n.e(799657),
                                            n.e(960286),
                                            n.e(668867),
                                            n.e(18630),
                                        ]).then(n.bind(n, 826789));
                                        return (t) => (0, i.jsx)(e, { ...t, analyticsSource: a });
                                    },
                                    { contextKey: t === x.BRT.POPOUT ? "popout" : E.SY },
                                ));
                        }
                    },
                    [t, N, d, m],
                );
            if (null == e) return null;
            let D = a === S.jQ.PRESET_DOCUMENTS ? S.kn.FPS_30 : u,
                j = (0, v.A)("useStreamSettingsItems", f, e.guildId),
                w = o === j?.maxResolution && u === j?.maxFPS;
            function U(e) {
                return w ? ((0, y.A)(e, f, p, M) ?? o) : o;
            }
            let z = U(u),
                L = S.ce.map((e) => {
                    let { value: t, label: n, subtext: r } = e,
                        l = U(t),
                        a = (0, C.A)(S.jQ.PRESET_CUSTOM, l, t, f, p, M);
                    return (0, i.jsx)(
                        s.iD,
                        {
                            group: "stream-settings-fps",
                            id: `stream-settings-fps-${t}`,
                            label: n,
                            subtext: r,
                            checked: t === u,
                            action: () => {
                                (w && t === u) || P(a, l, t, x.btD.RESOLUTION);
                            },
                        },
                        `stream-settings-fps-${t}`,
                    );
                }),
                V = S.Jk.map((e) => {
                    let { value: t, label: n, subtext: r } = e,
                        l = (0, C.A)(S.jQ.PRESET_CUSTOM, t, D, f, p, M);
                    return (0, i.jsx)(
                        s.iD,
                        {
                            group: "stream-settings-resolution",
                            id: `stream-settings-resolution-${t}`,
                            label: n,
                            subtext: r,
                            checked: t === z,
                            action: () => {
                                (w && t === z) || P(l, t, D, x.btD.RESOLUTION);
                            },
                        },
                        `stream-settings-resolution-${t}`,
                    );
                });
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(s.rX, { label: k.intl.string(k.t.SkkeIt), children: L }),
                    (0, i.jsx)(s.rX, { label: k.intl.string(k.t.rHyPXg), children: V }),
                ],
            });
        })(t, w),
        H = (0, p.A)(t, w, N.FX),
        B = null != U && F && (!U.startsWith("screen") || G),
        q = (0, l.bG)([g.Ay], () => g.Ay.getUseSystemScreensharePicker() && (0, f.j9)()),
        X = r.useCallback(() => {
            U?.startsWith("prepicked:")
                ? g.Ay.getMediaEngine().eachConnection((e) => {
                      e.context === O.x.STREAM && e.presentDesktopSourcePicker("window");
                  })
                : M();
        }, [U, M]),
        K = U?.startsWith("prepicked:") ?? !1,
        Y = (0, f.cX)() && f.isPlatformEmbedded && K && (z?.windows.length ?? 0) > 0,
        Z = (0, f.cX)() && f.isPlatformEmbedded && K && (z?.applications.length ?? 0) > 0,
        J = Y
            ? k.intl.string(k.t.qDK8gQ)
            : Z
              ? k.intl.string(k.t["3m8w+Q"])
              : j
                ? k.intl.string(k.t.eAktHv)
                : k.intl.string(k.t.qntSal),
        $ = r.useCallback(() => {
            let { preset: e, resolution: t, fps: n } = h.A.getState(),
                i = { qualityOptions: { preset: e, resolution: t, frameRate: n }, context: O.x.STREAM };
            (null != U && (i.desktopSettings = { sourceId: U, sound: !L }),
                (0, u.Xd)({ preset: e, resolution: t, frameRate: n, soundshareEnabled: !L }),
                c.default.setGoLiveSource(i));
        }, [U, L]);
    if (null == t)
        return (0, i.jsx)(s.Dr, {
            id: "share-your-screen",
            label: k.intl.string(k.t.fjBNo1),
            icon: a.ScreenArrowIcon,
            leadingAccessory: { type: "icon", icon: a.ScreenArrowIcon },
            action: M,
        });
    let Q = f.isPlatformEmbedded
            ? (0, i.jsx)(s.Dr, { id: "stream-settings", label: k.intl.string(k.t.ytAD9d), children: W })
            : null,
        ee = B
            ? (0, i.jsx)(s.sL, {
                  id: "stream-settings-audio-enable",
                  label: j ? k.intl.string(k.t.af2Tw1) : k.intl.string(k.t.ZJEHt7),
                  checked: L,
                  action: $,
              })
            : null,
        et =
            !V || D || q
                ? null
                : (0, i.jsx)(s.Dr, {
                      id: "change-windows",
                      label: J,
                      icon: a.ScreenArrowIcon,
                      leadingAccessory: { type: "icon", icon: a.ScreenArrowIcon },
                      action: X,
                  }),
        en = (0, i.jsx)(s.Dr, {
            id: "stop-streaming",
            color: "danger",
            label: k.intl.string(k.t.S5anIc),
            icon: o.ScreenXIcon,
            leadingAccessory: { type: "icon", icon: o.ScreenXIcon },
            action: () => (0, m.A)(t),
        });
    return j
        ? (0, i.jsxs)(i.Fragment, { children: [en, et, Q, ee] })
        : (0, i.jsxs)(i.Fragment, { children: [Q, P ? H : null, ee, et, en] });
}
