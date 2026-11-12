n.d(t, { E: () => D });
var i = n(477900),
    r = n(582128),
    l = n(855986),
    s = n(477782),
    a = n(183623),
    o = n(959988),
    u = n(687966),
    c = n(827343),
    d = n(401843),
    m = n(71689),
    h = n(338771),
    g = n(208603),
    f = n(929921),
    A = n(754712),
    p = n(723702),
    E = n(74329),
    C = n(192308),
    b = n(231723),
    v = n(212245),
    T = n(676030),
    _ = n(474626),
    I = n(375742),
    y = n(734057),
    R = n(71393),
    S = n(309010),
    x = n(287809),
    O = n(652215),
    P = n(753070),
    N = n(731854),
    k = n(792996),
    M = n(818348);
function D(e) {
    let {
            stream: t,
            handleGoLive: D,
            showReportOption: j = !1,
            disableChangeWindows: w = !1,
            minimal: U = !1,
            appContext: z = O.BRT.APP,
        } = e,
        { desktopSourceId: L, lastPickedContent: V } = (0, l.cf)([m.Ay, A.Ay], () => {
            let { desktopSource: e } = A.Ay.getGoLiveSource() ?? {},
                t = m.Ay.getLastPickedContent();
            return { desktopSourceId: e?.id, lastPickedContent: t };
        }),
        G = (0, l.bG)([f.A], () => f.A.getState().soundshareEnabled),
        F = A.Ay.supports(N.O5.DESKTOP_CAPTURE_APPLICATIONS),
        H = (0, l.bG)([A.Ay], () => A.Ay.supports(N.O5.SOUNDSHARE)),
        W = (0, l.bG)([A.Ay], () => A.Ay.supportsScreenSoundshare()),
        B = (function (e, t) {
            let { preset: a, resolution: o, fps: u, soundshareEnabled: d } = (0, l.cf)([f.A], () => f.A.getState()),
                m = (0, l.bG)([A.Ay], () => A.Ay.getGoLiveSource()),
                h = (0, l.bG)([x.default], () => x.default.getCurrentUser()),
                g = (0, l.bG)([R.A], () => R.A.getGuild(e?.guildId)?.premiumTier),
                { location: p } = (0, v.p)(),
                E = (0, l.bG)([S.Ay, y.A], () => y.A.getChannel(S.Ay.getVoiceChannelId())),
                M = r.useCallback(
                    (e, r, l, s) => {
                        if (e) {
                            if (null != m) {
                                let e = {
                                    qualityOptions: { preset: P.jQ.PRESET_CUSTOM, resolution: r, frameRate: l },
                                    context: N.x.STREAM,
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
                            ((a = { ...p, object: O.ZSU.RADIO_ITEM, objectType: s }),
                                (0, C.mM)(
                                    async () => {
                                        let { default: e } = await Promise.all([
                                            n.e(629972),
                                            n.e(334168),
                                            n.e(454048),
                                            n.e(300699),
                                            n.e(976759),
                                            n.e(398125),
                                            n.e(221825),
                                            n.e(143613),
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
                                    { contextKey: t === O.BRT.POPOUT ? "popout" : b.SY },
                                ));
                        }
                    },
                    [t, p, d, m],
                );
            if (null == e) return null;
            let D = a === P.jQ.PRESET_DOCUMENTS ? P.kn.FPS_30 : u,
                j = (0, _.A)("useStreamSettingsItems", h, e.guildId),
                w = o === j?.maxResolution && u === j?.maxFPS;
            function U(e) {
                return w ? ((0, I.A)(e, h, g, E) ?? o) : o;
            }
            let z = U(u),
                L = P.ce.map((e) => {
                    let { value: t, label: n, subtext: r } = e,
                        l = U(t),
                        a = (0, T.A)(P.jQ.PRESET_CUSTOM, l, t, h, g, E);
                    return (0, i.jsx)(
                        s.iD,
                        {
                            group: "stream-settings-fps",
                            id: `stream-settings-fps-${t}`,
                            label: n,
                            subtext: r,
                            checked: t === u,
                            action: () => {
                                (w && t === u) || M(a, l, t, O.btD.RESOLUTION);
                            },
                        },
                        `stream-settings-fps-${t}`,
                    );
                }),
                V = P.Jk.map((e) => {
                    let { value: t, label: n, subtext: r } = e,
                        l = (0, T.A)(P.jQ.PRESET_CUSTOM, t, D, h, g, E);
                    return (0, i.jsx)(
                        s.iD,
                        {
                            group: "stream-settings-resolution",
                            id: `stream-settings-resolution-${t}`,
                            label: n,
                            subtext: r,
                            checked: t === z,
                            action: () => {
                                (w && t === z) || M(l, t, D, O.btD.RESOLUTION);
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
        })(t, z),
        K = (0, E.A)(t, z, M.FX),
        q = null != L && H && (!L.startsWith("screen") || W),
        X = (0, l.bG)([A.Ay], () => A.Ay.getUseSystemScreensharePicker() && (0, p.j9)()),
        Y = (0, g.A)(t),
        Q = r.useCallback(() => {
            L?.startsWith("prepicked:")
                ? A.Ay.getMediaEngine().eachConnection((e) => {
                      e.context === N.x.STREAM && e.presentDesktopSourcePicker("window");
                  })
                : D();
        }, [L, D]),
        Z = L?.startsWith("prepicked:") ?? !1,
        J = (0, p.cX)() && p.isPlatformEmbedded && Z && (V?.windows.length ?? 0) > 0,
        $ = (0, p.cX)() && p.isPlatformEmbedded && Z && (V?.applications.length ?? 0) > 0,
        ee = J
            ? k.intl.string(k.t.qDK8gQ)
            : $
              ? k.intl.string(k.t["3m8w+Q"])
              : U
                ? k.intl.string(k.t.eAktHv)
                : k.intl.string(k.t.qntSal),
        et = r.useCallback(() => {
            let { preset: e, resolution: t, fps: n } = f.A.getState(),
                i = { qualityOptions: { preset: e, resolution: t, frameRate: n }, context: N.x.STREAM };
            (null != L && (i.desktopSettings = { sourceId: L, sound: !G }),
                (0, d.Xd)({ preset: e, resolution: t, frameRate: n, soundshareEnabled: !G }),
                c.default.setGoLiveSource(i));
        }, [L, G]);
    if (null == t)
        return (0, i.jsx)(s.Dr, {
            id: "share-your-screen",
            label: k.intl.string(k.t.fjBNo1),
            icon: a.ScreenArrowIcon,
            leadingAccessory: { type: "icon", icon: a.ScreenArrowIcon },
            action: D,
        });
    let en = p.isPlatformEmbedded
            ? (0, i.jsx)(s.Dr, { id: "stream-settings", label: k.intl.string(k.t.ytAD9d), children: B })
            : null,
        ei = q
            ? (0, i.jsx)(s.sL, {
                  id: "stream-settings-audio-enable",
                  label: U ? k.intl.string(k.t.af2Tw1) : k.intl.string(k.t.ZJEHt7),
                  checked: G,
                  action: et,
              })
            : null,
        er =
            !F || w || X
                ? null
                : (0, i.jsx)(s.Dr, {
                      id: "change-windows",
                      label: ee,
                      icon: a.ScreenArrowIcon,
                      leadingAccessory: { type: "icon", icon: a.ScreenArrowIcon },
                      action: Q,
                  }),
        el = (0, i.jsx)(s.Dr, {
            id: "stop-streaming",
            color: "danger",
            label: k.intl.string(k.t.S5anIc),
            icon: o.ScreenXIcon,
            leadingAccessory: { type: "icon", icon: o.ScreenXIcon },
            action: () => (0, h.A)(t),
        }),
        es =
            null != Y
                ? (0, i.jsx)(s.Dr, {
                      id: "pass-controller",
                      label: Y.label,
                      icon: u.GameControllerIcon,
                      leadingAccessory: { type: "icon", icon: u.GameControllerIcon },
                      action: Y.toggle,
                  })
                : null;
    return U
        ? (0, i.jsxs)(i.Fragment, { children: [el, er, en, ei, es] })
        : (0, i.jsxs)(i.Fragment, { children: [en, j ? K : null, ei, er, el, es] });
}
