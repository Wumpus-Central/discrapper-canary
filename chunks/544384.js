n.d(t, {
    E: () => S,
    Z: () => A
});
var i = n(200651),
    r = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(846027),
    l = n(872810),
    u = n(410575),
    c = n(358221),
    d = n(418469),
    f = n(776031),
    _ = n(803647),
    p = n(361291),
    h = n(199902),
    m = n(131951),
    g = n(594174),
    E = n(5192),
    v = n(358085),
    y = n(521147),
    I = n(981631),
    T = n(65154),
    b = n(388032);
function S(e, t, n) {
    let i = (0, a.e7)([c.Z], () => (null != e ? c.Z.getSelectedParticipantId(e.id) : null)),
        r = (0, a.e7)([h.Z], () => (null != i ? h.Z.getActiveStreamForStreamKey(i) : null), [i]);
    return (0, a.Wu)(
        [g.default],
        () => {
            if (null == e) return [];
            let i = n
                .filter((e) => e.ownerId !== (null == t ? void 0 : t.id))
                .map((t) => ({
                    stream: t,
                    username: E.ZP.getName(e.getGuildId(), e.id, g.default.getUser(t.ownerId))
                }));
            return 1 === i.length && i[0].stream.ownerId === (null == r ? void 0 : r.ownerId) ? [] : i;
        },
        [e, r, n, t]
    );
}
function A(e) {
    var t, n, c;
    let { channel: h, currentUser: g, activeStreams: E, hideSelfOptions: A = !1, showReportOption: N = !1, handleGoLive: C, onClose: R, onSelect: O, appContext: D = I.IlC.APP, disableChangeWindows: x = !1 } = e,
        L = (0, a.e7)([m.Z], () => m.Z.getGoLiveSource()),
        P = (0, a.e7)([p.Z], () => p.Z.getState().soundshareEnabled),
        w = m.Z.supports(T.AN.DESKTOP_CAPTURE_APPLICATIONS),
        M = null !== (c = E.find((e) => e.ownerId === (null == g ? void 0 : g.id))) && void 0 !== c ? c : null,
        k = S(h, g, E),
        U = (0, f.Z)(M, D),
        G = (0, d.Z)(M, D, I.VqG),
        B = (0, a.e7)([m.Z], () => m.Z.supports(T.AN.SOUNDSHARE)),
        Z = (0, a.e7)([m.Z], () => m.Z.supportsScreenSoundshare()),
        F = (null == L ? void 0 : L.desktopSource) != null,
        V = null == L ? void 0 : null === (n = L.desktopSource) || void 0 === n ? void 0 : null === (t = n.id) || void 0 === t ? void 0 : t.startsWith('screen'),
        j = F && B && (!V || Z),
        H = y.Z.useExperiment(
            { location: 'ManageStreamsMenu' },
            {
                disable: !j,
                autoTrackExposure: !0
            }
        ).enabled,
        Y = r.useCallback(() => {
            var e, t, n;
            (null === (n = m.Z.getGoLiveSource()) || void 0 === n ? void 0 : null === (t = n.desktopSource) || void 0 === t ? void 0 : null === (e = t.id) || void 0 === e ? void 0 : e.startsWith('prepicked:'))
                ? m.Z.getMediaEngine().eachConnection((e) => {
                      e.context === T.Yn.STREAM && e.presentDesktopSourcePicker();
                  })
                : C();
        }, [C]),
        W = r.useCallback(() => {
            let { preset: e, resolution: t, fps: n } = p.Z.getState(),
                i = {
                    qualityOptions: {
                        preset: e,
                        resolution: t,
                        frameRate: n
                    },
                    context: T.Yn.STREAM
                };
            if ((null == L ? void 0 : L.desktopSource) != null) {
                var r;
                i.desktopSettings = {
                    sourceId: null == L ? void 0 : null === (r = L.desktopSource) || void 0 === r ? void 0 : r.id,
                    sound: !P
                };
            }
            (0, l.Rc)({
                preset: e,
                resolution: t,
                frameRate: n,
                soundshareEnabled: !P
            }),
                o.Z.setGoLiveSource(i);
        }, [L, P]),
        K =
            null == M
                ? (0, i.jsx)(s.sNh, {
                      id: 'share-your-screen',
                      label: b.intl.string(b.t.fjBNo6),
                      icon: s.hGI,
                      action: C
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          v.isPlatformEmbedded
                              ? (0, i.jsx)(s.sNh, {
                                    id: 'stream-settings',
                                    label: b.intl.string(b.t.ytAD9f),
                                    children: U
                                })
                              : null,
                          N ? G : null,
                          H
                              ? (0, i.jsx)(s.S89, {
                                    id: 'stream-settings-audio-enable',
                                    label: b.intl.string(b.t.ZJEHt7),
                                    checked: P,
                                    action: W
                                })
                              : null,
                          w && !x
                              ? (0, i.jsx)(s.sNh, {
                                    id: 'change-windows',
                                    label: b.intl.string(b.t.qntSam),
                                    icon: s.hGI,
                                    action: Y
                                })
                              : null,
                          (0, i.jsx)(s.sNh, {
                              id: 'stop-streaming',
                              label: b.intl.string(b.t.S5anIS),
                              icon: s.g5r,
                              action: () => (0, _.Z)(M)
                          })
                      ]
                  });
    return (0, i.jsx)(u.Z, {
        section: I.jXE.CONTEXT_MENU,
        children: (0, i.jsxs)(s.v2r, {
            onSelect: O,
            navId: 'manage-streams',
            onClose: R,
            'aria-label': null != M ? b.intl.string(b.t.S5anIS) : b.intl.string(b.t.fjBNo6),
            children: [
                (0, i.jsx)(s.kSQ, {
                    children: k.map((e) => {
                        let { stream: t, username: n } = e;
                        return (0, i.jsx)(
                            s.sNh,
                            {
                                id: t.ownerId,
                                label: b.intl.formatToPlainString(b.t['7rkg+/'], { username: n }),
                                icon: s.g5r,
                                action: () => (0, _.Z)(t)
                            },
                            'manage-stream-menu'.concat(t.ownerId)
                        );
                    })
                }),
                A ? null : K
            ]
        })
    });
}
