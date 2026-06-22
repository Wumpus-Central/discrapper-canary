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
    h = n(929921),
    f = n(394459),
    p = n(723702),
    E = n(74329),
    m = n(192308),
    g = n(231723),
    A = n(212245),
    I = n(327649),
    T = n(734057),
    S = n(71393),
    y = n(309010),
    C = n(287809),
    N = n(652215),
    v = n(753070),
    R = n(731854),
    O = n(375708),
    b = n(818348);
function D(e) {
    let {
            stream: t,
            handleGoLive: D,
            showReportOption: L = !1,
            disableChangeWindows: w = !1,
            minimal: M = !1,
            appContext: P = N.BRT.APP,
        } = e,
        { desktopSourceId: x, lastPickedContent: k } = (0, s.cf)([d.Ay, f.Ay], () => {
            let { desktopSource: e } = f.Ay.getGoLiveSource() ?? {},
                t = d.Ay.getLastPickedContent();
            return { desktopSourceId: e?.id, lastPickedContent: t };
        }),
        U = (0, s.bG)([h.A], () => h.A.getState().soundshareEnabled),
        G = f.Ay.supports(R.O5.DESKTOP_CAPTURE_APPLICATIONS),
        F = (0, s.bG)([f.Ay], () => f.Ay.supports(R.O5.SOUNDSHARE)),
        V = (0, s.bG)([f.Ay], () => f.Ay.supportsScreenSoundshare()),
        B = (function (e, t) {
            let { preset: o, resolution: l, fps: c, soundshareEnabled: d } = (0, s.cf)([h.A], () => h.A.getState()),
                _ = (0, s.bG)([f.Ay], () => f.Ay.getGoLiveSource()),
                p = (0, s.bG)([C.default], () => C.default.getCurrentUser()),
                E = (0, s.bG)([S.A], () => S.A.getGuild(e?.guildId)?.premiumTier),
                { location: b } = (0, A.p)(),
                D = (0, s.bG)([y.A, T.A], () => T.A.getChannel(y.A.getVoiceChannelId())),
                L = r.useCallback(
                    (e, r, s, a) => {
                        if (e) {
                            if (null != _) {
                                let e = {
                                    qualityOptions: { preset: v.jQ.PRESET_CUSTOM, resolution: r, frameRate: s },
                                    context: R.x.STREAM,
                                };
                                null != _.desktopSource
                                    ? (e.desktopSettings = { sourceId: _.desktopSource.id, sound: d })
                                    : null != _.cameraSource &&
                                      (e.cameraSettings = {
                                          videoDeviceGuid: _.cameraSource.videoDeviceGuid,
                                          audioDeviceGuid: _.cameraSource.audioDeviceGuid,
                                          sound: d,
                                      }),
                                    u.A.setGoLiveSource(e);
                            }
                        } else {
                            var o;
                            (o = { ...b, object: N.ZSU.RADIO_ITEM, objectType: a }),
                                (0, m.openModalLazy)(
                                    async () => {
                                        let { default: e } = await Promise.all([
                                            n.e("62203"),
                                            n.e("39865"),
                                            n.e("50870"),
                                            n.e("54048"),
                                            n.e("87306"),
                                            n.e("41043"),
                                            n.e("65030"),
                                            n.e("76640"),
                                            n.e("99666"),
                                            n.e("72442"),
                                            n.e("24622"),
                                            n.e("62680"),
                                            n.e("21825"),
                                            n.e("75676"),
                                            n.e("18441"),
                                            n.e("86949"),
                                            n.e("52073"),
                                            n.e("93475"),
                                            n.e("18630"),
                                        ]).then(n.bind(n, 826789));
                                        return (t) => (0, i.jsx)(e, { ...t, analyticsSource: o });
                                    },
                                    { contextKey: t === N.BRT.POPOUT ? g.KX : g.SY },
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
                            action: () => L(s, l, t, N.AnalyticsObjectTypes.RESOLUTION),
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
                            action: () => L(s, t, w, N.AnalyticsObjectTypes.RESOLUTION),
                        },
                        `stream-settings-resolution-${t}`,
                    );
                });
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(a.rX, { label: O.intl.string(O.t.SkkeIt), children: M }),
                    (0, i.jsx)(a.rX, { label: O.intl.string(O.t.rHyPXg), children: P }),
                ],
            });
        })(t, P),
        j = (0, E.A)(t, P, b.FX),
        H = null != x && F && (!x.startsWith("screen") || V),
        Y = (0, s.bG)([f.Ay], () => f.Ay.getUseSystemScreensharePicker() && (0, p.isLinux)()),
        W = r.useCallback(() => {
            x?.startsWith("prepicked:")
                ? f.Ay.getMediaEngine().eachConnection((e) => {
                      e.context === R.x.STREAM && e.presentDesktopSourcePicker("window");
                  })
                : D();
        }, [x, D]),
        K = x?.startsWith("prepicked:") ?? !1,
        $ = (0, p.isMac)() && p.isPlatformEmbedded && K && (k?.windows.length ?? 0) > 0,
        z = (0, p.isMac)() && p.isPlatformEmbedded && K && (k?.applications.length ?? 0) > 0,
        q = $
            ? O.intl.string(O.t.qDK8gQ)
            : z
              ? O.intl.string(O.t["3m8w+Q"])
              : M
                ? O.intl.string(O.t.eAktHv)
                : O.intl.string(O.t.qntSal),
        Z = r.useCallback(() => {
            let { preset: e, resolution: t, fps: n } = h.A.getState(),
                i = { qualityOptions: { preset: e, resolution: t, frameRate: n }, context: R.x.STREAM };
            null != x && (i.desktopSettings = { sourceId: x, sound: !U }),
                (0, c.Xd)({ preset: e, resolution: t, frameRate: n, soundshareEnabled: !U }),
                u.A.setGoLiveSource(i);
        }, [x, U]);
    if (null == t)
        return (0, i.jsx)(a.Dr, {
            id: "share-your-screen",
            label: O.intl.string(O.t.fjBNo1),
            icon: o.F,
            leadingAccessory: { type: "icon", icon: o.F },
            action: D,
        });
    let X = p.isPlatformEmbedded
            ? (0, i.jsx)(a.Dr, { id: "stream-settings", label: O.intl.string(O.t.ytAD9d), children: B })
            : null,
        Q = H
            ? (0, i.jsx)(a.sL, {
                  id: "stream-settings-audio-enable",
                  label: M ? O.intl.string(O.t.af2Tw1) : O.intl.string(O.t.ZJEHt7),
                  checked: U,
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
            label: O.intl.string(O.t.S5anIc),
            icon: l.G,
            leadingAccessory: { type: "icon", icon: l.G },
            action: () => (0, _.A)(t),
        });
    return M
        ? (0, i.jsxs)(i.Fragment, { children: [ee, J, X, Q] })
        : (0, i.jsxs)(i.Fragment, { children: [X, L ? j : null, Q, J, ee] });
}
