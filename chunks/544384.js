r.d(n, {
    E: function () {
        return A;
    },
    Z: function () {
        return N;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(442837),
    o = r(481060),
    l = r(846027),
    u = r(872810),
    c = r(410575),
    d = r(358221),
    f = r(418469),
    _ = r(776031),
    h = r(803647),
    p = r(361291),
    m = r(199902),
    g = r(131951),
    E = r(594174),
    v = r(5192),
    I = r(358085),
    T = r(521147),
    b = r(981631),
    y = r(65154),
    S = r(388032);
function A(e, n, r) {
    let i = (0, s.e7)([d.Z], () => d.Z.getSelectedParticipantId(e.id)),
        a = (0, s.e7)([m.Z], () => (null != i ? m.Z.getActiveStreamForStreamKey(i) : null), [i]);
    return (0, s.Wu)(
        [E.default],
        () => {
            let i = r
                .filter((e) => e.ownerId !== (null == n ? void 0 : n.id))
                .map((n) => ({
                    stream: n,
                    username: v.ZP.getName(e.getGuildId(), e.id, E.default.getUser(n.ownerId))
                }));
            return 1 === i.length && i[0].stream.ownerId === (null == a ? void 0 : a.ownerId) ? [] : i;
        },
        [e, a, r, n]
    );
}
function N(e) {
    var n, r, d;
    let { channel: m, currentUser: E, activeStreams: v, hideSelfOptions: N = !1, showReportOption: C = !1, handleGoLive: R, onClose: O, onSelect: D, appContext: L = b.IlC.APP, disableChangeWindows: x = !1 } = e,
        w = (0, s.e7)([g.Z], () => g.Z.getGoLiveSource()),
        P = (0, s.e7)([p.Z], () => p.Z.getState().soundshareEnabled),
        M = g.Z.supports(y.AN.DESKTOP_CAPTURE_APPLICATIONS),
        k = null !== (d = v.find((e) => e.ownerId === (null == E ? void 0 : E.id))) && void 0 !== d ? d : null,
        U = A(m, E, v),
        B = (0, _.Z)(k, L),
        G = (0, f.Z)(k, L, b.VqG),
        Z = (0, s.e7)([g.Z], () => g.Z.supports(y.AN.SOUNDSHARE)),
        F = (0, s.e7)([g.Z], () => g.Z.supportsScreenSoundshare()),
        V = (null == w ? void 0 : w.desktopSource) != null,
        j = null == w ? void 0 : null === (r = w.desktopSource) || void 0 === r ? void 0 : null === (n = r.id) || void 0 === n ? void 0 : n.startsWith('screen'),
        H = V && Z && (!j || F),
        Y = T.Z.useExperiment(
            { location: 'ManageStreamsMenu' },
            {
                disable: !H,
                autoTrackExposure: !0
            }
        ).enabled,
        W = a.useCallback(() => {
            var e, n, r;
            (null === (r = g.Z.getGoLiveSource()) || void 0 === r ? void 0 : null === (n = r.desktopSource) || void 0 === n ? void 0 : null === (e = n.id) || void 0 === e ? void 0 : e.startsWith('prepicked:'))
                ? g.Z.getMediaEngine().eachConnection((e) => {
                      e.context === y.Yn.STREAM && e.presentDesktopSourcePicker();
                  })
                : R();
        }, [R]),
        K = a.useCallback(() => {
            let { preset: e, resolution: n, fps: r } = p.Z.getState(),
                i = {
                    qualityOptions: {
                        preset: e,
                        resolution: n,
                        frameRate: r
                    },
                    context: y.Yn.STREAM
                };
            if ((null == w ? void 0 : w.desktopSource) != null) {
                var a;
                i.desktopSettings = {
                    sourceId: null == w ? void 0 : null === (a = w.desktopSource) || void 0 === a ? void 0 : a.id,
                    sound: !P
                };
            }
            (0, u.Rc)({
                preset: e,
                resolution: n,
                frameRate: r,
                soundshareEnabled: !P
            }),
                l.Z.setGoLiveSource(i);
        }, [w, P]),
        z =
            null == k
                ? (0, i.jsx)(o.MenuItem, {
                      id: 'share-your-screen',
                      label: S.intl.string(S.t.fjBNo6),
                      icon: o.ScreenArrowIcon,
                      action: R
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          I.isPlatformEmbedded
                              ? (0, i.jsx)(o.MenuItem, {
                                    id: 'stream-settings',
                                    label: S.intl.string(S.t.ytAD9f),
                                    children: B
                                })
                              : null,
                          C ? G : null,
                          Y
                              ? (0, i.jsx)(o.MenuCheckboxItem, {
                                    id: 'stream-settings-audio-enable',
                                    label: S.intl.string(S.t.ZJEHt7),
                                    checked: P,
                                    action: K
                                })
                              : null,
                          M && !x
                              ? (0, i.jsx)(o.MenuItem, {
                                    id: 'change-windows',
                                    label: S.intl.string(S.t.qntSam),
                                    icon: o.ScreenArrowIcon,
                                    action: W
                                })
                              : null,
                          (0, i.jsx)(o.MenuItem, {
                              id: 'stop-streaming',
                              label: S.intl.string(S.t.S5anIS),
                              icon: o.ScreenXIcon,
                              action: () => (0, h.Z)(k)
                          })
                      ]
                  });
    return (0, i.jsx)(c.Z, {
        section: b.jXE.CONTEXT_MENU,
        children: (0, i.jsxs)(o.Menu, {
            onSelect: D,
            navId: 'manage-streams',
            onClose: O,
            'aria-label': null != k ? S.intl.string(S.t.S5anIS) : S.intl.string(S.t.fjBNo6),
            children: [
                (0, i.jsx)(o.MenuGroup, {
                    children: U.map((e) => {
                        let { stream: n, username: r } = e;
                        return (0, i.jsx)(
                            o.MenuItem,
                            {
                                id: n.ownerId,
                                label: S.intl.formatToPlainString(S.t['7rkg+/'], { username: r }),
                                icon: o.ScreenXIcon,
                                action: () => (0, h.Z)(n)
                            },
                            'manage-stream-menu'.concat(n.ownerId)
                        );
                    })
                }),
                N ? null : z
            ]
        })
    });
}
