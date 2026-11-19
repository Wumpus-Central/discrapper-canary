n.d(t, { E: () => N });
var i = n(477900),
    r = n(582128),
    l = n(855986),
    s = n(477782),
    a = n(183623),
    o = n(959988),
    u = n(687966),
    c = n(827343),
    d = n(401843),
    h = n(71689),
    m = n(338771),
    p = n(208603),
    f = n(929921),
    g = n(988468),
    A = n(723702),
    v = n(74329),
    E = n(192308),
    y = n(231723),
    I = n(212245),
    C = n(676030),
    b = n(474626),
    S = n(375742),
    w = n(734057),
    x = n(71393),
    T = n(309010),
    R = n(287809),
    _ = n(652215),
    k = n(753070),
    P = n(731854),
    M = n(792996),
    O = n(818348);
function N(e) {
    let {
            stream: t,
            handleGoLive: N,
            showReportOption: D = !1,
            disableChangeWindows: j = !1,
            minimal: L = !1,
            appContext: U = _.BRT.APP,
        } = e,
        { desktopSourceId: z, lastPickedContent: W } = (0, l.cf)([h.Ay, g.Ay], () => {
            let { desktopSource: e } = g.Ay.getGoLiveSource() ?? {},
                t = h.Ay.getLastPickedContent();
            return { desktopSourceId: e?.id, lastPickedContent: t };
        }),
        G = (0, l.bG)([f.A], () => f.A.getState().soundshareEnabled),
        V = g.Ay.supports(P.O5.DESKTOP_CAPTURE_APPLICATIONS),
        F = (0, l.bG)([g.Ay], () => g.Ay.supports(P.O5.SOUNDSHARE)),
        q = (0, l.bG)([g.Ay], () => g.Ay.supportsScreenSoundshare()),
        H = (function (e, t) {
            let { preset: a, resolution: o, fps: u, soundshareEnabled: d } = (0, l.cf)([f.A], () => f.A.getState()),
                h = (0, l.bG)([g.Ay], () => g.Ay.getGoLiveSource()),
                m = (0, l.bG)([R.default], () => R.default.getCurrentUser()),
                p = (0, l.bG)([x.A], () => x.A.getGuild(e?.guildId)?.premiumTier),
                { location: A } = (0, I.p)(),
                v = (0, l.bG)([T.Ay, w.A], () => w.A.getChannel(T.Ay.getVoiceChannelId())),
                O = r.useCallback(
                    (e, r, l, s) => {
                        if (e) {
                            if (null != h) {
                                let e = {
                                    qualityOptions: { preset: k.jQ.PRESET_CUSTOM, resolution: r, frameRate: l },
                                    context: P.x.STREAM,
                                };
                                (null != h.desktopSource
                                    ? (e.desktopSettings = { sourceId: h.desktopSource.id, sound: d })
                                    : null != h.cameraSource &&
                                      (e.cameraSettings = {
                                          videoDeviceGuid: h.cameraSource.videoDeviceGuid,
                                          audioDeviceGuid: h.cameraSource.audioDeviceGuid,
                                          sound: d,
                                      }),
                                    c.default.setGoLiveSource(e));
                            }
                        } else {
                            var a;
                            ((a = { ...A, object: _.ZSU.RADIO_ITEM, objectType: s }),
                                (0, E.mM)(
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
                                    { contextKey: t === _.BRT.POPOUT ? "popout" : y.SY },
                                ));
                        }
                    },
                    [t, A, d, h],
                );
            if (null == e) return null;
            let N = a === k.jQ.PRESET_DOCUMENTS ? k.kn.FPS_30 : u,
                D = (0, b.A)("useStreamSettingsItems", m, e.guildId),
                j = o === D?.maxResolution && u === D?.maxFPS;
            function L(e) {
                return j ? ((0, S.A)(e, m, p, v) ?? o) : o;
            }
            let U = L(u),
                z = k.ce.map((e) => {
                    let { value: t, label: n, subtext: r } = e,
                        l = L(t),
                        a = (0, C.A)(k.jQ.PRESET_CUSTOM, l, t, m, p, v);
                    return (0, i.jsx)(
                        s.iD,
                        {
                            group: "stream-settings-fps",
                            id: `stream-settings-fps-${t}`,
                            label: n,
                            subtext: r,
                            checked: t === u,
                            action: () => {
                                (j && t === u) || O(a, l, t, _.btD.RESOLUTION);
                            },
                        },
                        `stream-settings-fps-${t}`,
                    );
                }),
                W = k.Jk.map((e) => {
                    let { value: t, label: n, subtext: r } = e,
                        l = (0, C.A)(k.jQ.PRESET_CUSTOM, t, N, m, p, v);
                    return (0, i.jsx)(
                        s.iD,
                        {
                            group: "stream-settings-resolution",
                            id: `stream-settings-resolution-${t}`,
                            label: n,
                            subtext: r,
                            checked: t === U,
                            action: () => {
                                (j && t === U) || O(l, t, N, _.btD.RESOLUTION);
                            },
                        },
                        `stream-settings-resolution-${t}`,
                    );
                });
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(s.rX, { label: M.intl.string(M.t.SkkeIt), children: z }),
                    (0, i.jsx)(s.rX, { label: M.intl.string(M.t.rHyPXg), children: W }),
                ],
            });
        })(t, U),
        B = (0, v.A)(t, U, O.FX),
        K = null != z && F && (!z.startsWith("screen") || q),
        X = (0, l.bG)([g.Ay], () => g.Ay.getUseSystemScreensharePicker() && (0, A.j9)()),
        Y = (0, p.A)(t),
        $ = r.useCallback(() => {
            z?.startsWith("prepicked:")
                ? g.Ay.getMediaEngine().eachConnection((e) => {
                      e.context === P.x.STREAM && e.presentDesktopSourcePicker("window");
                  })
                : N();
        }, [z, N]),
        J = z?.startsWith("prepicked:") ?? !1,
        Q = (0, A.cX)() && A.isPlatformEmbedded && J && (W?.windows.length ?? 0) > 0,
        Z = (0, A.cX)() && A.isPlatformEmbedded && J && (W?.applications.length ?? 0) > 0,
        ee = Q
            ? M.intl.string(M.t.qDK8gQ)
            : Z
              ? M.intl.string(M.t["3m8w+Q"])
              : L
                ? M.intl.string(M.t.eAktHv)
                : M.intl.string(M.t.qntSal),
        et = r.useCallback(() => {
            let { preset: e, resolution: t, fps: n } = f.A.getState(),
                i = { qualityOptions: { preset: e, resolution: t, frameRate: n }, context: P.x.STREAM };
            (null != z && (i.desktopSettings = { sourceId: z, sound: !G }),
                (0, d.Xd)({ preset: e, resolution: t, frameRate: n, soundshareEnabled: !G }),
                c.default.setGoLiveSource(i));
        }, [z, G]);
    if (null == t)
        return (0, i.jsx)(s.Dr, {
            id: "share-your-screen",
            label: M.intl.string(M.t.fjBNo1),
            icon: a.ScreenArrowIcon,
            leadingAccessory: { type: "icon", icon: a.ScreenArrowIcon },
            action: N,
        });
    let en = A.isPlatformEmbedded
            ? (0, i.jsx)(s.Dr, { id: "stream-settings", label: M.intl.string(M.t.ytAD9d), children: H })
            : null,
        ei = K
            ? (0, i.jsx)(s.sL, {
                  id: "stream-settings-audio-enable",
                  label: L ? M.intl.string(M.t.af2Tw1) : M.intl.string(M.t.ZJEHt7),
                  checked: G,
                  action: et,
              })
            : null,
        er =
            !V || j || X
                ? null
                : (0, i.jsx)(s.Dr, {
                      id: "change-windows",
                      label: ee,
                      icon: a.ScreenArrowIcon,
                      leadingAccessory: { type: "icon", icon: a.ScreenArrowIcon },
                      action: $,
                  }),
        el = (0, i.jsx)(s.Dr, {
            id: "stop-streaming",
            color: "danger",
            label: M.intl.string(M.t.S5anIc),
            icon: o.ScreenXIcon,
            leadingAccessory: { type: "icon", icon: o.ScreenXIcon },
            action: () => (0, m.A)(t),
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
    return L
        ? (0, i.jsxs)(i.Fragment, { children: [el, er, en, ei, es] })
        : (0, i.jsxs)(i.Fragment, { children: [en, D ? B : null, ei, er, el, es] });
}
