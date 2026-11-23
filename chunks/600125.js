n.d(t, { E: () => L });
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
    f = n(293651),
    g = n(310685),
    A = n(929921),
    v = n(734057),
    E = n(71393),
    I = n(988468),
    y = n(723702),
    C = n(74329),
    S = n(192308),
    b = n(231723),
    w = n(212245),
    x = n(676030),
    T = n(474626),
    R = n(375742),
    _ = n(309010),
    k = n(287809),
    P = n(652215),
    M = n(753070),
    O = n(731854),
    D = n(792996),
    N = n(818348),
    j = n(791005);
function L(e) {
    let {
            stream: t,
            handleGoLive: L,
            showReportOption: U = !1,
            disableChangeWindows: z = !1,
            minimal: G = !1,
            appContext: W = P.BRT.APP,
        } = e,
        { desktopSourceId: F, lastPickedContent: V } = (0, l.cf)([h.Ay, I.Ay], () => {
            let { desktopSource: e } = I.Ay.getGoLiveSource() ?? {},
                t = h.Ay.getLastPickedContent();
            return { desktopSourceId: e?.id, lastPickedContent: t };
        }),
        q = t?.channelId,
        H = (0, l.bG)(
            [v.A, E.A],
            () => {
                let e = v.A.getChannel(q);
                return (0, f.HB)(e, E.A.getGuild(e?.guild_id));
            },
            [q],
        ),
        B = (0, g.T)(q, "SelfStreamContextMenu"),
        K = (0, l.bG)([A.A], () => A.A.getState().streamDrawingEnabled),
        X = (0, l.bG)([A.A], () => A.A.getState().soundshareEnabled),
        Y = I.Ay.supports(O.O5.DESKTOP_CAPTURE_APPLICATIONS),
        $ = (0, l.bG)([I.Ay], () => I.Ay.supports(O.O5.SOUNDSHARE)),
        J = (0, l.bG)([I.Ay], () => I.Ay.supportsScreenSoundshare()),
        Q = (function (e, t) {
            let { preset: a, resolution: o, fps: u, soundshareEnabled: d } = (0, l.cf)([A.A], () => A.A.getState()),
                h = (0, l.bG)([I.Ay], () => I.Ay.getGoLiveSource()),
                m = (0, l.bG)([k.default], () => k.default.getCurrentUser()),
                p = (0, l.bG)([E.A], () => E.A.getGuild(e?.guildId)?.premiumTier),
                { location: f } = (0, w.p)(),
                g = (0, l.bG)([_.Ay, v.A], () => v.A.getChannel(_.Ay.getVoiceChannelId())),
                y = r.useCallback(
                    (e, r, l, s) => {
                        if (e) {
                            if (null != h) {
                                let e = {
                                    qualityOptions: { preset: M.jQ.PRESET_CUSTOM, resolution: r, frameRate: l },
                                    context: O.x.STREAM,
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
                            ((a = { ...f, object: P.ZSU.RADIO_ITEM, objectType: s }),
                                (0, S.mM)(
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
                                    { contextKey: t === P.BRT.POPOUT ? "popout" : b.SY },
                                ));
                        }
                    },
                    [t, f, d, h],
                );
            if (null == e) return null;
            let C = a === M.jQ.PRESET_DOCUMENTS ? M.kn.FPS_30 : u,
                N = (0, T.A)("useStreamSettingsItems", m, e.guildId),
                j = o === N?.maxResolution && u === N?.maxFPS;
            function L(e) {
                return j ? ((0, R.A)(e, m, p, g) ?? o) : o;
            }
            let U = L(u),
                z = M.ce.map((e) => {
                    let { value: t, label: n, subtext: r } = e,
                        l = L(t),
                        a = (0, x.A)(M.jQ.PRESET_CUSTOM, l, t, m, p, g);
                    return (0, i.jsx)(
                        s.iD,
                        {
                            group: "stream-settings-fps",
                            id: `stream-settings-fps-${t}`,
                            label: n,
                            subtext: r,
                            checked: t === u,
                            action: () => {
                                (j && t === u) || y(a, l, t, P.btD.RESOLUTION);
                            },
                        },
                        `stream-settings-fps-${t}`,
                    );
                }),
                G = M.Jk.map((e) => {
                    let { value: t, label: n, subtext: r } = e,
                        l = (0, x.A)(M.jQ.PRESET_CUSTOM, t, C, m, p, g);
                    return (0, i.jsx)(
                        s.iD,
                        {
                            group: "stream-settings-resolution",
                            id: `stream-settings-resolution-${t}`,
                            label: n,
                            subtext: r,
                            checked: t === U,
                            action: () => {
                                (j && t === U) || y(l, t, C, P.btD.RESOLUTION);
                            },
                        },
                        `stream-settings-resolution-${t}`,
                    );
                });
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(s.rX, { label: D.intl.string(D.t.SkkeIt), children: z }),
                    (0, i.jsx)(s.rX, { label: D.intl.string(D.t.rHyPXg), children: G }),
                ],
            });
        })(t, W),
        Z = (0, C.A)(t, W, N.FX),
        ee = null != F && $ && (!F.startsWith("screen") || J),
        et = (0, l.bG)([I.Ay], () => I.Ay.getUseSystemScreensharePicker() && (0, y.j9)()),
        en = (0, p.A)(t),
        ei = r.useCallback(() => {
            F?.startsWith("prepicked:")
                ? I.Ay.getMediaEngine().eachConnection((e) => {
                      e.context === O.x.STREAM && e.presentDesktopSourcePicker("window");
                  })
                : L();
        }, [F, L]),
        er = F?.startsWith("prepicked:") ?? !1,
        el = (0, y.cX)() && y.isPlatformEmbedded && er && (V?.windows.length ?? 0) > 0,
        es = (0, y.cX)() && y.isPlatformEmbedded && er && (V?.applications.length ?? 0) > 0,
        ea = el
            ? D.intl.string(D.t.qDK8gQ)
            : es
              ? D.intl.string(D.t["3m8w+Q"])
              : G
                ? D.intl.string(D.t.eAktHv)
                : D.intl.string(D.t.qntSal),
        eo = r.useCallback(() => {
            let { preset: e, resolution: t, fps: n } = A.A.getState(),
                i = { qualityOptions: { preset: e, resolution: t, frameRate: n }, context: O.x.STREAM };
            (null != F && (i.desktopSettings = { sourceId: F, sound: !X }),
                (0, d.Xd)({ preset: e, resolution: t, frameRate: n, soundshareEnabled: !X }),
                c.default.setGoLiveSource(i));
        }, [F, X]);
    if (null == t)
        return (0, i.jsx)(s.Dr, {
            id: "share-your-screen",
            label: D.intl.string(D.t.fjBNo1),
            icon: a.ScreenArrowIcon,
            leadingAccessory: { type: "icon", icon: a.ScreenArrowIcon },
            action: L,
        });
    let eu = y.isPlatformEmbedded
            ? (0, i.jsx)(s.Dr, { id: "stream-settings", label: D.intl.string(D.t.ytAD9d), children: Q })
            : null,
        ec = ee
            ? (0, i.jsx)(s.sL, {
                  id: "stream-settings-audio-enable",
                  label: G ? D.intl.string(D.t.af2Tw1) : D.intl.string(D.t.ZJEHt7),
                  checked: X,
                  action: eo,
              })
            : null,
        ed =
            B && H
                ? (0, i.jsx)(s.sL, {
                      id: "stream-settings-drawing-enable",
                      label: D.intl.string(j.default.rvEHMm),
                      checked: K,
                      action: () => (0, d.Xd)({ streamDrawingEnabled: !K }),
                  })
                : null,
        eh =
            !Y || z || et
                ? null
                : (0, i.jsx)(s.Dr, {
                      id: "change-windows",
                      label: ea,
                      icon: a.ScreenArrowIcon,
                      leadingAccessory: { type: "icon", icon: a.ScreenArrowIcon },
                      action: ei,
                  }),
        em = (0, i.jsx)(s.Dr, {
            id: "stop-streaming",
            color: "danger",
            label: D.intl.string(D.t.S5anIc),
            icon: o.ScreenXIcon,
            leadingAccessory: { type: "icon", icon: o.ScreenXIcon },
            action: () => (0, m.A)(t),
        }),
        ep =
            null != en
                ? (0, i.jsx)(s.Dr, {
                      id: "pass-controller",
                      label: en.label,
                      icon: u.GameControllerIcon,
                      leadingAccessory: { type: "icon", icon: u.GameControllerIcon },
                      action: en.toggle,
                  })
                : null;
    return G
        ? (0, i.jsxs)(i.Fragment, { children: [em, eh, eu, ec, ed, ep] })
        : (0, i.jsxs)(i.Fragment, { children: [eu, U ? Z : null, ec, ed, eh, em, ep] });
}
