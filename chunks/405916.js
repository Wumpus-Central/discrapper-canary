"use strict";
n.d(t, { E: () => D });
var i = n(627968),
    r = n(64700),
    s = n(17928),
    a = n(477782),
    o = n(183623),
    l = n(959988),
    u = n(827343),
    c = n(401843),
    d = n(725792),
    _ = n(338771),
    f = n(929921),
    h = n(761853),
    p = n(723702),
    E = n(74329),
    m = n(192308),
    g = n(231723),
    A = n(212245),
    I = n(327649),
    T = n(734057),
    S = n(71393),
    N = n(309010),
    y = n(287809),
    C = n(652215),
    v = n(753070),
    O = n(731854),
    R = n(375708),
    b = n(818348);
function D(e) {
    let {
            stream: t,
            handleGoLive: D,
            showReportOption: L = !1,
            disableChangeWindows: w = !1,
            minimal: M = !1,
            appContext: P = C.BRT.APP,
        } = e,
        { desktopSourceId: x, lastPickedContent: U } = (0, s.cf)([d.Ay, h.Ay], () => {
            let { desktopSource: e } = h.Ay.getGoLiveSource() ?? {},
                t = d.Ay.getLastPickedContent();
            return { desktopSourceId: e?.id, lastPickedContent: t };
        }),
        k = (0, s.bG)([f.A], () => f.A.getState().soundshareEnabled),
        G = h.Ay.supports(O.O5.DESKTOP_CAPTURE_APPLICATIONS),
        F = (0, s.bG)([h.Ay], () => h.Ay.supports(O.O5.SOUNDSHARE)),
        V = (0, s.bG)([h.Ay], () => h.Ay.supportsScreenSoundshare()),
        B = (function (e, t) {
            let { preset: o, resolution: l, fps: c, soundshareEnabled: d } = (0, s.cf)([f.A], () => f.A.getState()),
                _ = (0, s.bG)([h.Ay], () => h.Ay.getGoLiveSource()),
                p = (0, s.bG)([y.default], () => y.default.getCurrentUser()),
                E = (0, s.bG)([S.A], () => S.A.getGuild(e?.guildId)?.premiumTier),
                { location: b } = (0, A.p)(),
                D = (0, s.bG)([N.A, T.A], () => T.A.getChannel(N.A.getVoiceChannelId())),
                L = r.useCallback(
                    (e, r, s, a) => {
                        if (e) {
                            if (null != _) {
                                let e = {
                                    qualityOptions: { preset: v.jQ.PRESET_CUSTOM, resolution: r, frameRate: s },
                                    context: O.x.STREAM,
                                };
                                null != _.desktopSource
                                    ? (e.desktopSettings = { sourceId: _.desktopSource.id, sound: d })
                                    : null != _.cameraSource &&
                                      (e.cameraSettings = {
                                          videoDeviceGuid: _.cameraSource.videoDeviceGuid,
                                          audioDeviceGuid: _.cameraSource.audioDeviceGuid,
                                      }),
                                    u.A.setGoLiveSource(e);
                            }
                        } else {
                            var o;
                            (o = { ...b, object: C.ZSU.RADIO_ITEM, objectType: a }),
                                (0, m.openModalLazy)(
                                    async () => {
                                        let { default: e } = await Promise.all([
                                            n.e("85096"),
                                            n.e("62680"),
                                            n.e("87306"),
                                            n.e("41043"),
                                            n.e("18441"),
                                            n.e("98125"),
                                            n.e("21825"),
                                            n.e("76640"),
                                            n.e("14879"),
                                            n.e("86949"),
                                            n.e("99657"),
                                            n.e("84456"),
                                            n.e("93475"),
                                            n.e("18630"),
                                        ]).then(n.bind(n, 826789));
                                        return (t) => (0, i.jsx)(e, { ...t, analyticsSource: o });
                                    },
                                    { contextKey: t === C.BRT.POPOUT ? g.KX : g.SY },
                                );
                        }
                    },
                    [t, b, d, _],
                );
            if (null == e) return null;
            let w = o === v.jQ.PRESET_DOCUMENTS ? v.kn.FPS_30 : c,
                M = v.ce.map((e) => {
                    let { value: t, label: n, subtext: r } = e,
                        s = (0, I.A)(v.jQ.PRESET_CUSTOM, l, t, p, E, D);
                    return (0, i.jsx)(
                        a.iD,
                        {
                            group: "stream-settings-fps",
                            id: `stream-settings-fps-${t}`,
                            label: n,
                            subtext: r,
                            checked: t === c,
                            action: () => L(s, l, t, C.AnalyticsObjectTypes.RESOLUTION),
                        },
                        `stream-settings-fps-${t}`,
                    );
                }),
                P = v.Jk.map((e) => {
                    let { value: t, label: n, subtext: r } = e,
                        s = (0, I.A)(v.jQ.PRESET_CUSTOM, t, w, p, E, D);
                    return (0, i.jsx)(
                        a.iD,
                        {
                            group: "stream-settings-resolution",
                            id: `stream-settings-resolution-${t}`,
                            label: n,
                            subtext: r,
                            checked: t === l,
                            action: () => L(s, t, w, C.AnalyticsObjectTypes.RESOLUTION),
                        },
                        `stream-settings-resolution-${t}`,
                    );
                });
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(a.rX, { label: R.intl.string(R.t.SkkeIt), children: M }),
                    (0, i.jsx)(a.rX, { label: R.intl.string(R.t.rHyPXg), children: P }),
                ],
            });
        })(t, P),
        H = (0, E.A)(t, P, b.FX),
        j = null != x && F && (!x.startsWith("screen") || V),
        Y = (0, s.bG)([h.Ay], () => h.Ay.getUseSystemScreensharePicker() && (0, p.isLinux)()),
        W = r.useCallback(() => {
            x?.startsWith("prepicked:")
                ? h.Ay.getMediaEngine().eachConnection((e) => {
                      e.context === O.x.STREAM && e.presentDesktopSourcePicker("window");
                  })
                : D();
        }, [x, D]),
        K = x?.startsWith("prepicked:") ?? !1,
        z = (0, p.isMac)() && p.isPlatformEmbedded && K && (U?.windows.length ?? 0) > 0,
        $ = (0, p.isMac)() && p.isPlatformEmbedded && K && (U?.applications.length ?? 0) > 0,
        q = z
            ? R.intl.string(R.t.qDK8gQ)
            : $
              ? R.intl.string(R.t["3m8w+Q"])
              : M
                ? R.intl.string(R.t.eAktHv)
                : R.intl.string(R.t.qntSal),
        Z = r.useCallback(() => {
            let { preset: e, resolution: t, fps: n } = f.A.getState(),
                i = { qualityOptions: { preset: e, resolution: t, frameRate: n }, context: O.x.STREAM };
            null != x && (i.desktopSettings = { sourceId: x, sound: !k }),
                (0, c.Xd)({ preset: e, resolution: t, frameRate: n, soundshareEnabled: !k }),
                u.A.setGoLiveSource(i);
        }, [x, k]);
    if (null == t)
        return (0, i.jsx)(a.Dr, {
            id: "share-your-screen",
            label: R.intl.string(R.t.fjBNo1),
            icon: o.F,
            leadingAccessory: { type: "icon", icon: o.F },
            action: D,
        });
    let X = p.isPlatformEmbedded
            ? (0, i.jsx)(a.Dr, { id: "stream-settings", label: R.intl.string(R.t.ytAD9d), children: B })
            : null,
        Q = j
            ? (0, i.jsx)(a.sL, {
                  id: "stream-settings-audio-enable",
                  label: M ? R.intl.string(R.t.af2Tw1) : R.intl.string(R.t.ZJEHt7),
                  checked: k,
                  action: Z,
              })
            : null,
        J =
            !G || w || Y
                ? null
                : (0, i.jsx)(a.Dr, {
                      id: "change-windows",
                      label: q,
                      icon: o.F,
                      leadingAccessory: { type: "icon", icon: o.F },
                      action: W,
                  }),
        ee = (0, i.jsx)(a.Dr, {
            id: "stop-streaming",
            color: "danger",
            label: R.intl.string(R.t.S5anIc),
            icon: l.G,
            leadingAccessory: { type: "icon", icon: l.G },
            action: () => (0, _.A)(t),
        });
    return M
        ? (0, i.jsxs)(i.Fragment, { children: [ee, J, X, Q] })
        : (0, i.jsxs)(i.Fragment, { children: [X, L ? H : null, Q, J, ee] });
}
