n.d(t, { Z: () => ed }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
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
    _ = n(358221),
    C = n(414910),
    x = n(909820),
    v = n(493010),
    E = n(71127),
    I = n(185935),
    b = n(540059),
    Z = n(788983),
    N = n(928518),
    T = n(703656),
    S = n(493754),
    j = n(880831),
    y = n(73563),
    A = n(800965),
    P = n(107169),
    R = n(891551),
    M = n(314897),
    L = n(979696),
    k = n(430824),
    O = n(496675),
    D = n(944486),
    w = n(358085),
    U = n(998502),
    B = n(922482),
    F = n(431328),
    H = n(501655),
    G = n(427679),
    V = n(513449),
    z = n(153349),
    W = n(901434),
    Y = n(302270),
    q = n(308177),
    K = n(700483),
    X = n(686468),
    J = n(801405),
    Q = n(903108),
    $ = n(981631),
    ee = n(354459),
    et = n(388032),
    en = n(197623);
let ei = 'HasBeenInStageChannel',
    el = (e, t) => () => {
        let n = e.getGuildId();
        null != n && null != t && (0, T.XU)(n, t), Z.hP(e);
    },
    ea = () => {
        u.Z.wait(() => Z.xv($.KJ3.CHANNEL_CALL_POPOUT));
    },
    er = (e) => {
        Z.hY($.KJ3.CHANNEL_CALL_POPOUT, e);
    };
function es(e) {
    let { channel: t, appContext: n, popoutOpen: a, popoutWindow: r, popoutWindowAlwaysOnTop: s, selectedParticipant: c } = e,
        d = t.getGuildId(),
        u = (0, o.e7)([D.Z], () => D.Z.getMostRecentSelectedTextChannelId(d), [d]),
        h = M.default.getId(),
        p = !(0, o.e7)([_.Z], () => _.Z.isFullscreenInContext(n)) && (!w.isPlatformEmbedded || (w.isPlatformEmbedded && U.ZP.supportsFeature($.eRX.POPOUT_WINDOWS))),
        m = null != c && c.type !== ee.fO.ACTIVITY && c.user.id !== h,
        f = l.useMemo(() => {
            var e;
            return null !== (e = null == r ? void 0 : r.window) && void 0 !== e ? e : window;
        }, [r]),
        g = (0, J.Z)({
            channel: t,
            appContext: n,
            popoutOpen: a,
            popoutWindow: r,
            currentWindow: f
        }),
        x = n === $.IlC.POPOUT && w.isPlatformEmbedded && U.ZP.supportsFeature($.eRX.POPOUT_WINDOWS);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            m
                ? (0, i.jsx)(R.Z, {
                      context: (0, C.Z)(c.type),
                      userId: c.user.id,
                      currentWindow: f,
                      sliderClassName: en.volumeSlider
                  })
                : null,
            x
                ? (0, i.jsx)(P.Z, {
                      className: en.rightTrayIcon,
                      popoutWindowAlwaysOnTop: s,
                      onToggleStayOnTop: er
                  })
                : null,
            p
                ? (0, i.jsx)(A.Z, {
                      className: en.rightTrayIcon,
                      popoutOpen: a,
                      onOpenPopout: el(t, u),
                      onClosePopout: ea
                  })
                : null,
            g
        ]
    });
}
function eo(e) {
    let { channel: t } = e,
        n = (0, m.bp)(),
        l = (0, o.e7)([O.Z], () => O.Z.can($.Plq.CREATE_INSTANT_INVITE, t)),
        a = (0, o.e7)([k.Z], () => k.Z.getGuild(t.guild_id)),
        r = (0, o.e7)([G.Z], () => G.Z.getStageInstanceByChannel(t.id)),
        s = l || (null == r ? void 0 : r.invite_code) != null;
    return null != a && s
        ? (0, i.jsx)(S.Z, {
              channel: t,
              appContext: n,
              className: en.__invalid_leftTrayIcon,
              analyticsLocation: $.ZY5.GUILD_CHANNEL
          })
        : null;
}
function ec(e) {
    let t,
        { channel: n, toggleRequestToSpeakSidebar: a, showRequestToSpeakSidebar: c, popoutWindow: d, popoutWindowAlwaysOnTop: u, popoutOpen: h, chatOpen: p } = e,
        f = (0, m.bp)(),
        g = (0, o.e7)([D.Z], () => D.Z.getVoiceChannelId() === n.id, [n.id]),
        C = (0, o.e7)([O.Z], () => O.Z.can($.Plq.CONNECT, n)),
        v = (0, F.w8)(n.id, H.pV.SPEAKER),
        E = (0, o.e7)([_.Z], () => _.Z.getSelectedParticipant(n.id)),
        I = h && f !== $.IlC.POPOUT,
        Z = (0, b.Q3)('StageChannelCallContent'),
        [N, T] = l.useState(0),
        { isOnStartStageScreen: S } = (0, V.ZP)();
    (0, V.MV)(n);
    let A = (0, o.e7)([L.Z], () => L.Z.getToastsEnabled(n.id)),
        P = (0, Q.Z)(n) ? (null != E ? '84px' : '124px') : null != E ? '0px' : '48px';
    return (
        (t = S
            ? (0, i.jsx)(X.Z, {
                  channel: n,
                  onContinueClick: () => {
                      (0, V.Ku)(!1), g || (0, B.TM)(n);
                  }
              })
            : g
              ? (0, i.jsx)(q.Z, {
                    channel: n,
                    onScroll: (e) => {
                        let { scrollTop: t } = e.target;
                        (0, s.debounce)(() => T(t), 1000, { leading: !0 })();
                    }
                })
              : (0, i.jsx)(W.Z, {
                    participants: v,
                    channel: n,
                    hasConnectPermission: C
                })),
        (0, i.jsx)(y.Z, {
            style: {
                height: 'calc(100% - '.concat(P, ')'),
                paddingTop: P
            },
            disableGradients: !!Z || (0 === N && y.e.TOP),
            renderBottomLeft: () => (0, i.jsx)(eo, { channel: n }),
            renderBottomCenter: () =>
                g
                    ? (0, i.jsx)(K.Z, {
                          channel: n,
                          isOnStartStageScreen: S
                      })
                    : null,
            renderBottomRight: () =>
                g
                    ? (0, i.jsx)(es, {
                          channel: n,
                          appContext: f,
                          popoutOpen: h,
                          popoutWindow: d,
                          popoutWindowAlwaysOnTop: u,
                          selectedParticipant: E
                      })
                    : null,
            renderHeader: () =>
                (0, i.jsx)(Y.Z, {
                    inPopout: f === $.IlC.POPOUT,
                    toggleRequestToSpeakSidebar: a,
                    showRequestToSpeakSidebar: c,
                    channel: n
                }),
            renderChatToasts: () =>
                !A || p || I
                    ? null
                    : (0, i.jsx)(x.ZP, {
                          children: (0, i.jsx)(j.Z, {
                              className: r()(en.chatToasts, { [en.rtsSidebarOpen]: c }),
                              channelId: n.id
                          })
                      }),
            onActive: () => {},
            onPreventIdle: () => {},
            onAllowIdle: () => {},
            onForceIdle: () => {},
            screenMessage: I ? { mainText: et.intl.string(et.t.J5bXZW) } : null,
            idle: !1,
            children: !I && t
        })
    );
}
function ed(e) {
    let { channel: t } = e,
        [a, s] = l.useState(!1),
        u = l.useCallback(() => {
            s(!a);
        }, [a, s]),
        { popoutWindow: C, popoutWindowAlwaysOnTop: b } = (0, o.cj)([N.Z], () => ({
            popoutWindow: N.Z.getWindow($.KJ3.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: N.Z.getIsAlwaysOnTop($.KJ3.CHANNEL_CALL_POPOUT)
        })),
        Z = null != C && !C.closed,
        { analyticsLocations: T } = (0, g.ZP)(f.Z.STAGE_CHANNEL_CALL),
        S = (0, m.bp)(),
        { chatOpen: j, participantsListOpen: y } = (0, o.cj)(
            [_.Z],
            () => ({
                chatOpen: _.Z.getChatOpen(t.id),
                participantsListOpen: _.Z.getParticipantsListOpen(t.id)
            }),
            [t.id]
        ),
        A = (0, o.e7)([k.Z], () => k.Z.getGuild(t.guild_id), [t.guild_id]),
        { hasParticipantsPanel: P } = (0, I.Z)({ location: 'StageChannelCall' });
    (0, p.ZP)(() => {
        null == c.K.get(ei) &&
            ((0, d.ZDy)(async () => {
                let { default: e } = await n.e('37194').then(n.bind(n, 947422));
                return (t) => (0, i.jsx)(e, { ...t });
            }),
            c.K.set(ei, Date.now()));
    });
    let { width: R = 0, ref: M } = (0, h.Z)(),
        L = R - 550,
        O = !Z || (Z && S === $.IlC.POPOUT);
    return (0, i.jsx)(g.Gt, {
        value: T,
        children: (0, i.jsxs)(x.B2, {
            children: [
                (0, i.jsxs)('div', {
                    className: en.container,
                    ref: M,
                    children: [
                        (0, i.jsx)(d.f6W, {
                            theme: $.BRd.DARK,
                            children: (e) =>
                                (0, i.jsx)('div', {
                                    className: r()(en.callContainer, e, {
                                        [en.sidebarVisible]: a,
                                        [en.sidebarOrChatVisible]: a || j || y
                                    }),
                                    children: (0, i.jsx)(ec, {
                                        channel: t,
                                        toggleRequestToSpeakSidebar: u,
                                        showRequestToSpeakSidebar: a,
                                        popoutWindow: C,
                                        popoutWindowAlwaysOnTop: b,
                                        popoutOpen: Z,
                                        chatOpen: j
                                    })
                                })
                        }),
                        a
                            ? (0, i.jsx)(z.Z, {
                                  channel: t,
                                  toggleRequestToSpeakSidebar: u,
                                  chatOpen: j
                              })
                            : null,
                        (0, i.jsxs)('div', {
                            className: en.channelChatWrapper,
                            children: [
                                j &&
                                    O &&
                                    (0, i.jsx)(v.Z, {
                                        channel: t,
                                        guild: A,
                                        maxWidth: L
                                    }),
                                y &&
                                    P &&
                                    O &&
                                    (0, i.jsx)(E.Z, {
                                        channel: t,
                                        maxWidth: L
                                    })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)(x.H_, {})
            ]
        })
    });
}
