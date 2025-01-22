r.d(n, {
    E: function () {
        return A;
    },
    Z: function () {
        return C;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(442837),
    s = r(481060),
    l = r(846027),
    u = r(872810),
    c = r(410575),
    d = r(358221),
    f = r(418469),
    p = r(776031),
    h = r(803647),
    _ = r(361291),
    m = r(199902),
    g = r(131951),
    E = r(594174),
    v = r(5192),
    y = r(358085),
    b = r(521147),
    I = r(981631),
    T = r(65154),
    S = r(388032);
function A(e, n, r) {
    let i = (0, o.e7)([d.Z], () => (null != e ? d.Z.getSelectedParticipantId(e.id) : null)),
        a = (0, o.e7)([m.Z], () => (null != i ? m.Z.getActiveStreamForStreamKey(i) : null), [i]);
    return (0, o.Wu)(
        [E.default],
        () => {
            if (null == e) return [];
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
function C(e) {
    var n, r, d;
    let { channel: m, currentUser: E, activeStreams: v, hideSelfOptions: C = !1, showReportOption: N = !1, handleGoLive: R, onClose: O, onSelect: D, appContext: x = I.IlC.APP, disableChangeWindows: L = !1 } = e,
        w = (0, o.e7)([g.Z], () => g.Z.getGoLiveSource()),
        P = (0, o.e7)([_.Z], () => _.Z.getState().soundshareEnabled),
        M = g.Z.supports(T.AN.DESKTOP_CAPTURE_APPLICATIONS),
        k = null !== (d = v.find((e) => e.ownerId === (null == E ? void 0 : E.id))) && void 0 !== d ? d : null,
        U = A(m, E, v),
        B = (0, p.Z)(k, x),
        G = (0, f.Z)(k, x, I.VqG),
        Z = (0, o.e7)([g.Z], () => g.Z.supports(T.AN.SOUNDSHARE)),
        F = (0, o.e7)([g.Z], () => g.Z.supportsScreenSoundshare()),
        V = (null == w ? void 0 : w.desktopSource) != null,
        j = null == w ? void 0 : null === (r = w.desktopSource) || void 0 === r ? void 0 : null === (n = r.id) || void 0 === n ? void 0 : n.startsWith('screen'),
        H = V && Z && (!j || F),
        Y = b.Z.useExperiment(
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
                      e.context === T.Yn.STREAM && e.presentDesktopSourcePicker();
                  })
                : R();
        }, [R]),
        K = a.useCallback(() => {
            let { preset: e, resolution: n, fps: r } = _.Z.getState(),
                i = {
                    qualityOptions: {
                        preset: e,
                        resolution: n,
                        frameRate: r
                    },
                    context: T.Yn.STREAM
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
                ? (0, i.jsx)(s.MenuItem, {
                      id: 'share-your-screen',
                      label: S.intl.string(S.t.fjBNo6),
                      icon: s.ScreenArrowIcon,
                      action: R
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          y.isPlatformEmbedded
                              ? (0, i.jsx)(s.MenuItem, {
                                    id: 'stream-settings',
                                    label: S.intl.string(S.t.ytAD9f),
                                    children: B
                                })
                              : null,
                          N ? G : null,
                          Y
                              ? (0, i.jsx)(s.MenuCheckboxItem, {
                                    id: 'stream-settings-audio-enable',
                                    label: S.intl.string(S.t.ZJEHt7),
                                    checked: P,
                                    action: K
                                })
                              : null,
                          M && !L
                              ? (0, i.jsx)(s.MenuItem, {
                                    id: 'change-windows',
                                    label: S.intl.string(S.t.qntSam),
                                    icon: s.ScreenArrowIcon,
                                    action: W
                                })
                              : null,
                          (0, i.jsx)(s.MenuItem, {
                              id: 'stop-streaming',
                              label: S.intl.string(S.t.S5anIS),
                              icon: s.ScreenXIcon,
                              action: () => (0, h.Z)(k)
                          })
                      ]
                  });
    return (0, i.jsx)(c.Z, {
        section: I.jXE.CONTEXT_MENU,
        children: (0, i.jsxs)(s.Menu, {
            onSelect: D,
            navId: 'manage-streams',
            onClose: O,
            'aria-label': null != k ? S.intl.string(S.t.S5anIS) : S.intl.string(S.t.fjBNo6),
            children: [
                (0, i.jsx)(s.MenuGroup, {
                    children: U.map((e) => {
                        let { stream: n, username: r } = e;
                        return (0, i.jsx)(
                            s.MenuItem,
                            {
                                id: n.ownerId,
                                label: S.intl.formatToPlainString(S.t['7rkg+/'], { username: r }),
                                icon: s.ScreenXIcon,
                                action: () => (0, h.Z)(n)
                            },
                            'manage-stream-menu'.concat(n.ownerId)
                        );
                    })
                }),
                C ? null : z
            ]
        })
    });
}
