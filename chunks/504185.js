n.d(t, {
    Z: function () {
        return ec;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(392711),
    o = n(442837),
    c = n(433517),
    d = n(481060),
    u = n(570140),
    h = n(393238),
    p = n(493773),
    m = n(40851),
    f = n(100527),
    g = n(906732),
    C = n(358221),
    x = n(414910),
    v = n(909820),
    _ = n(493010),
    I = n(71127),
    E = n(185935),
    b = n(788983),
    Z = n(928518),
    N = n(703656),
    S = n(493754),
    T = n(880831),
    j = n(73563),
    A = n(800965),
    y = n(107169),
    P = n(891551),
    M = n(314897),
    R = n(979696),
    L = n(430824),
    k = n(496675),
    O = n(944486),
    D = n(358085),
    w = n(998502),
    B = n(922482),
    U = n(431328),
    H = n(501655),
    G = n(427679),
    F = n(513449),
    V = n(153349),
    z = n(901434),
    W = n(302270),
    K = n(308177),
    Y = n(700483),
    q = n(686468),
    X = n(801405),
    J = n(903108),
    Q = n(981631),
    $ = n(354459),
    ee = n(388032),
    et = n(322455);
let en = 'HasBeenInStageChannel',
    ei = (e, t) => () => {
        let n = e.getGuildId();
        null != n && null != t && (0, N.XU)(n, t), b.hP(e);
    },
    el = () => {
        u.Z.wait(() => b.xv(Q.KJ3.CHANNEL_CALL_POPOUT));
    },
    er = (e) => {
        b.hY(Q.KJ3.CHANNEL_CALL_POPOUT, e);
    };
function ea(e) {
    let { channel: t, appContext: n, popoutOpen: r, popoutWindow: a, popoutWindowAlwaysOnTop: s, selectedParticipant: c } = e,
        d = t.getGuildId(),
        u = (0, o.e7)([O.Z], () => O.Z.getMostRecentSelectedTextChannelId(d), [d]),
        h = M.default.getId(),
        p = !(0, o.e7)([C.Z], () => C.Z.isFullscreenInContext(n)) && (!D.isPlatformEmbedded || (D.isPlatformEmbedded && w.ZP.supportsFeature(Q.eRX.POPOUT_WINDOWS))),
        m = null != c && c.type !== $.fO.ACTIVITY && c.user.id !== h,
        f = l.useMemo(() => {
            var e;
            return null !== (e = null == a ? void 0 : a.window) && void 0 !== e ? e : window;
        }, [a]),
        g = (0, X.Z)({
            channel: t,
            appContext: n,
            popoutOpen: r,
            popoutWindow: a,
            currentWindow: f
        }),
        v = n === Q.IlC.POPOUT && D.isPlatformEmbedded && w.ZP.supportsFeature(Q.eRX.POPOUT_WINDOWS);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            m
                ? (0, i.jsx)(P.Z, {
                      context: (0, x.Z)(c.type),
                      userId: c.user.id,
                      currentWindow: f,
                      sliderClassName: et.volumeSlider
                  })
                : null,
            v
                ? (0, i.jsx)(y.Z, {
                      className: et.rightTrayIcon,
                      popoutWindowAlwaysOnTop: s,
                      onToggleStayOnTop: er
                  })
                : null,
            p
                ? (0, i.jsx)(A.Z, {
                      className: et.rightTrayIcon,
                      popoutOpen: r,
                      onOpenPopout: ei(t, u),
                      onClosePopout: el
                  })
                : null,
            g
        ]
    });
}
function es(e) {
    let { channel: t } = e,
        n = (0, m.bp)(),
        l = (0, o.e7)([k.Z], () => k.Z.can(Q.Plq.CREATE_INSTANT_INVITE, t)),
        r = (0, o.e7)([L.Z], () => L.Z.getGuild(t.guild_id)),
        a = (0, o.e7)([G.Z], () => G.Z.getStageInstanceByChannel(t.id)),
        s = l || (null == a ? void 0 : a.invite_code) != null;
    return null != r && s
        ? (0, i.jsx)(S.Z, {
              channel: t,
              appContext: n,
              className: et.__invalid_leftTrayIcon,
              analyticsLocation: Q.ZY5.GUILD_CHANNEL
          })
        : null;
}
function eo(e) {
    let t,
        { channel: n, toggleRequestToSpeakSidebar: r, showRequestToSpeakSidebar: c, popoutWindow: d, popoutWindowAlwaysOnTop: u, popoutOpen: h, chatOpen: p } = e,
        f = (0, m.bp)(),
        g = (0, o.e7)([O.Z], () => O.Z.getVoiceChannelId() === n.id, [n.id]),
        x = (0, o.e7)([k.Z], () => k.Z.can(Q.Plq.CONNECT, n)),
        _ = (0, U.w8)(n.id, H.pV.SPEAKER),
        I = (0, o.e7)([C.Z], () => C.Z.getSelectedParticipant(n.id)),
        E = h && f !== Q.IlC.POPOUT,
        [b, Z] = l.useState(0),
        { isOnStartStageScreen: N } = (0, F.ZP)();
    (0, F.MV)(n);
    let S = (0, o.e7)([R.Z], () => R.Z.getToastsEnabled(n.id)),
        A = (0, J.Z)(n) ? (null != I ? '84px' : '124px') : null != I ? '0px' : '48px';
    return (
        (t = N
            ? (0, i.jsx)(q.Z, {
                  channel: n,
                  onContinueClick: () => {
                      (0, F.Ku)(!1), !g && (0, B.TM)(n);
                  }
              })
            : g
              ? (0, i.jsx)(K.Z, {
                    channel: n,
                    onScroll: (e) => {
                        let { scrollTop: t } = e.target;
                        (0, s.debounce)(() => Z(t), 1000, { leading: !0 })();
                    }
                })
              : (0, i.jsx)(z.Z, {
                    participants: _,
                    channel: n,
                    hasConnectPermission: x
                })),
        (0, i.jsx)(j.Z, {
            style: {
                height: 'calc(100% - '.concat(A, ')'),
                paddingTop: A
            },
            disableGradients: 0 === b && j.e.TOP,
            renderBottomLeft: () => (0, i.jsx)(es, { channel: n }),
            renderBottomCenter: () =>
                g
                    ? (0, i.jsx)(Y.Z, {
                          channel: n,
                          isOnStartStageScreen: N
                      })
                    : null,
            renderBottomRight: () =>
                g
                    ? (0, i.jsx)(ea, {
                          channel: n,
                          appContext: f,
                          popoutOpen: h,
                          popoutWindow: d,
                          popoutWindowAlwaysOnTop: u,
                          selectedParticipant: I
                      })
                    : null,
            renderHeader: () =>
                (0, i.jsx)(W.Z, {
                    inPopout: f === Q.IlC.POPOUT,
                    toggleRequestToSpeakSidebar: r,
                    showRequestToSpeakSidebar: c,
                    channel: n
                }),
            renderChatToasts: () =>
                !S || p || E
                    ? null
                    : (0, i.jsx)(v.ZP, {
                          children: (0, i.jsx)(T.Z, {
                              className: a()(et.chatToasts, { [et.rtsSidebarOpen]: c }),
                              channelId: n.id
                          })
                      }),
            onActive: () => {},
            onPreventIdle: () => {},
            onAllowIdle: () => {},
            onForceIdle: () => {},
            screenMessage: E ? { mainText: ee.intl.string(ee.t.J5bXZW) } : null,
            idle: !1,
            children: !E && t
        })
    );
}
function ec(e) {
    let { channel: t } = e,
        [r, s] = l.useState(!1),
        u = l.useCallback(() => {
            s(!r);
        }, [r, s]),
        { popoutWindow: x, popoutWindowAlwaysOnTop: b } = (0, o.cj)([Z.Z], () => ({
            popoutWindow: Z.Z.getWindow(Q.KJ3.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: Z.Z.getIsAlwaysOnTop(Q.KJ3.CHANNEL_CALL_POPOUT)
        })),
        N = null != x && !x.closed,
        { analyticsLocations: S } = (0, g.ZP)(f.Z.STAGE_CHANNEL_CALL),
        T = (0, m.bp)(),
        { chatOpen: j, participantsListOpen: A } = (0, o.cj)(
            [C.Z],
            () => ({
                chatOpen: C.Z.getChatOpen(t.id),
                participantsListOpen: C.Z.getParticipantsListOpen(t.id)
            }),
            [t.id]
        ),
        y = (0, o.e7)([L.Z], () => L.Z.getGuild(t.guild_id), [t.guild_id]),
        { hasParticipantsPanel: P } = (0, E.Z)({ location: 'StageChannelCall' });
    (0, p.Z)(() => {
        null == c.K.get(en) &&
            ((0, d.openModalLazy)(async () => {
                let { default: e } = await n.e('37194').then(n.bind(n, 947422));
                return (t) => (0, i.jsx)(e, { ...t });
            }),
            c.K.set(en, Date.now()));
    });
    let { width: M = 0, ref: R } = (0, h.Z)(),
        k = M - 550,
        O = !N || (N && T === Q.IlC.POPOUT);
    return (0, i.jsx)(g.Gt, {
        value: S,
        children: (0, i.jsxs)(v.B2, {
            children: [
                (0, i.jsxs)('div', {
                    className: et.container,
                    ref: R,
                    children: [
                        (0, i.jsx)(d.ThemeProvider, {
                            theme: Q.BRd.DARK,
                            children: (e) =>
                                (0, i.jsx)('div', {
                                    className: a()(et.callContainer, e, {
                                        [et.sidebarVisible]: r,
                                        [et.sidebarOrChatVisible]: r || j || A
                                    }),
                                    children: (0, i.jsx)(eo, {
                                        channel: t,
                                        toggleRequestToSpeakSidebar: u,
                                        showRequestToSpeakSidebar: r,
                                        popoutWindow: x,
                                        popoutWindowAlwaysOnTop: b,
                                        popoutOpen: N,
                                        chatOpen: j
                                    })
                                })
                        }),
                        r
                            ? (0, i.jsx)(V.Z, {
                                  channel: t,
                                  toggleRequestToSpeakSidebar: u,
                                  chatOpen: j
                              })
                            : null,
                        (0, i.jsxs)('div', {
                            className: et.channelChatWrapper,
                            children: [
                                j &&
                                    O &&
                                    (0, i.jsx)(_.Z, {
                                        channel: t,
                                        guild: y,
                                        maxWidth: k
                                    }),
                                A &&
                                    P &&
                                    O &&
                                    (0, i.jsx)(I.Z, {
                                        channel: t,
                                        maxWidth: k
                                    })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)(v.H_, {})
            ]
        })
    });
}
