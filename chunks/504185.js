n.d(t, {
    Z: () => eu,
    e: () => ec
}),
    n(47120);
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
    w = n(594174),
    U = n(358085),
    B = n(998502),
    F = n(922482),
    H = n(431328),
    G = n(501655),
    V = n(427679),
    z = n(513449),
    W = n(153349),
    Y = n(901434),
    q = n(302270),
    K = n(308177),
    X = n(700483),
    J = n(686468),
    Q = n(801405),
    $ = n(903108),
    ee = n(981631),
    et = n(354459),
    en = n(388032),
    ei = n(197623);
let el = 'HasBeenInStageChannel',
    ea = (e, t) => () => {
        let n = e.getGuildId();
        null != n && null != t && (0, T.XU)(n, t), Z.hP(e);
    },
    er = () => {
        u.Z.wait(() => Z.xv(ee.KJ3.CHANNEL_CALL_POPOUT));
    },
    es = (e) => {
        Z.hY(ee.KJ3.CHANNEL_CALL_POPOUT, e);
    };
function eo(e) {
    let { channel: t, appContext: n, popoutOpen: a, popoutWindow: r, popoutWindowAlwaysOnTop: s, selectedParticipant: c } = e,
        d = t.getGuildId(),
        u = (0, o.e7)([D.Z], () => D.Z.getMostRecentSelectedTextChannelId(d), [d]),
        h = M.default.getId(),
        p = !(0, o.e7)([_.Z], () => _.Z.isFullscreenInContext(n)) && (!U.isPlatformEmbedded || (U.isPlatformEmbedded && B.ZP.supportsFeature(ee.eRX.POPOUT_WINDOWS))),
        m = null != c && c.type !== et.fO.ACTIVITY && c.user.id !== h,
        f = l.useMemo(() => {
            var e;
            return null !== (e = null == r ? void 0 : r.window) && void 0 !== e ? e : window;
        }, [r]),
        g = (0, Q.Z)({
            channel: t,
            appContext: n,
            popoutOpen: a,
            popoutWindow: r,
            currentWindow: f
        }),
        x = n === ee.IlC.POPOUT && U.isPlatformEmbedded && B.ZP.supportsFeature(ee.eRX.POPOUT_WINDOWS);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            m
                ? (0, i.jsx)(R.Z, {
                      context: (0, C.Z)(c.type),
                      userId: c.user.id,
                      currentWindow: f,
                      sliderClassName: ei.volumeSlider
                  })
                : null,
            x
                ? (0, i.jsx)(P.Z, {
                      className: ei.rightTrayIcon,
                      popoutWindowAlwaysOnTop: s,
                      onToggleStayOnTop: es
                  })
                : null,
            p
                ? (0, i.jsx)(A.Z, {
                      className: ei.rightTrayIcon,
                      popoutOpen: a,
                      onOpenPopout: ea(t, u),
                      onClosePopout: er
                  })
                : null,
            g
        ]
    });
}
function ec(e) {
    var t, n;
    let { channel: l } = e,
        a = (0, m.bp)(),
        r = (0, o.e7)([O.Z], () => O.Z.can(ee.Plq.CREATE_INSTANT_INVITE, l)),
        s = (0, o.e7)([k.Z], () => k.Z.getGuild(l.guild_id)),
        c = (0, o.e7)([V.Z], () => V.Z.getStageInstanceByChannel(l.id)),
        u = r || (null == c ? void 0 : c.invite_code) != null,
        h = (0, b.Q3)('StageChannelInviteButton'),
        p = null !== (n = null === (t = w.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()) && void 0 !== n && n;
    return null != s && u
        ? (0, i.jsx)(S.Z, {
              size: h && p ? d.zxk.Sizes.MEDIUM : d.zxk.Sizes.SMALL,
              color: h && p ? d.zxk.Colors.TRANSPARENT : ei.customInviteButtonColors,
              channel: l,
              appContext: a,
              className: ei.__invalid_leftTrayIcon,
              analyticsLocation: ee.ZY5.GUILD_CHANNEL
          })
        : null;
}
function ed(e) {
    var t, n;
    let a,
        { channel: c, toggleRequestToSpeakSidebar: d, showRequestToSpeakSidebar: u, popoutWindow: h, popoutWindowAlwaysOnTop: p, popoutOpen: f, chatOpen: g } = e,
        C = (0, m.bp)(),
        v = (0, o.e7)([D.Z], () => D.Z.getVoiceChannelId() === c.id, [c.id]),
        E = (0, o.e7)([O.Z], () => O.Z.can(ee.Plq.CONNECT, c)),
        I = (0, H.w8)(c.id, G.pV.SPEAKER),
        Z = (0, o.e7)([_.Z], () => _.Z.getSelectedParticipant(c.id)),
        N = f && C !== ee.IlC.POPOUT,
        T = (0, b.Q3)('StageChannelCallContent'),
        S = null !== (n = null === (t = w.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()) && void 0 !== n && n,
        [A, P] = l.useState(0),
        { isOnStartStageScreen: R } = (0, z.ZP)();
    (0, z.MV)(c);
    let M = (0, o.e7)([L.Z], () => L.Z.getToastsEnabled(c.id)),
        k = (0, $.Z)(c) ? (null != Z ? '84px' : '124px') : null != Z ? '0px' : '48px';
    return (
        (a = R
            ? (0, i.jsx)(J.Z, {
                  channel: c,
                  onContinueClick: () => {
                      (0, z.Ku)(!1), v || (0, F.TM)(c);
                  }
              })
            : v
              ? (0, i.jsx)(K.Z, {
                    channel: c,
                    onScroll: (e) => {
                        let { scrollTop: t } = e.target;
                        (0, s.debounce)(() => P(t), 1000, { leading: !0 })();
                    }
                })
              : (0, i.jsx)(Y.Z, {
                    participants: I,
                    channel: c,
                    hasConnectPermission: E
                })),
        (0, i.jsx)(y.Z, {
            style: {
                height: 'calc(100% - '.concat(k, ')'),
                paddingTop: k
            },
            disableGradients: (!!T && !v) || (0 === A && y.e.TOP),
            renderBottomLeft: () => (T && S ? null : (0, i.jsx)(ec, { channel: c })),
            renderBottomCenter: () =>
                v
                    ? (0, i.jsx)(X.Z, {
                          channel: c,
                          isOnStartStageScreen: R
                      })
                    : null,
            renderBottomRight: () =>
                v
                    ? (0, i.jsx)(eo, {
                          channel: c,
                          appContext: C,
                          popoutOpen: f,
                          popoutWindow: h,
                          popoutWindowAlwaysOnTop: p,
                          selectedParticipant: Z
                      })
                    : null,
            renderHeader: () =>
                (0, i.jsx)(q.Z, {
                    inPopout: C === ee.IlC.POPOUT,
                    toggleRequestToSpeakSidebar: d,
                    showRequestToSpeakSidebar: u,
                    channel: c
                }),
            renderChatToasts: () =>
                !M || g || N
                    ? null
                    : (0, i.jsx)(x.ZP, {
                          children: (0, i.jsx)(j.Z, {
                              className: r()(ei.chatToasts, { [ei.rtsSidebarOpen]: u }),
                              channelId: c.id
                          })
                      }),
            onActive: () => {},
            onPreventIdle: () => {},
            onAllowIdle: () => {},
            onForceIdle: () => {},
            screenMessage: N ? { mainText: en.intl.string(en.t.J5bXZW) } : null,
            idle: !1,
            children: !N && a
        })
    );
}
function eu(e) {
    let { channel: t } = e,
        [a, s] = l.useState(!1),
        u = l.useCallback(() => {
            s(!a);
        }, [a, s]),
        { popoutWindow: C, popoutWindowAlwaysOnTop: b } = (0, o.cj)([N.Z], () => ({
            popoutWindow: N.Z.getWindow(ee.KJ3.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: N.Z.getIsAlwaysOnTop(ee.KJ3.CHANNEL_CALL_POPOUT)
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
        null == c.K.get(el) &&
            ((0, d.ZDy)(async () => {
                let { default: e } = await n.e('37194').then(n.bind(n, 947422));
                return (t) => (0, i.jsx)(e, { ...t });
            }),
            c.K.set(el, Date.now()));
    });
    let { width: R = 0, ref: M } = (0, h.Z)(),
        L = R - 550,
        O = !Z || (Z && S === ee.IlC.POPOUT);
    return (0, i.jsx)(g.Gt, {
        value: T,
        children: (0, i.jsxs)(x.B2, {
            children: [
                (0, i.jsxs)('div', {
                    className: ei.container,
                    ref: M,
                    children: [
                        (0, i.jsx)(d.f6W, {
                            theme: ee.BRd.DARK,
                            children: (e) =>
                                (0, i.jsx)('div', {
                                    className: r()(ei.callContainer, e, {
                                        [ei.sidebarVisible]: a,
                                        [ei.sidebarOrChatVisible]: a || j || y
                                    }),
                                    children: (0, i.jsx)(ed, {
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
                            ? (0, i.jsx)(W.Z, {
                                  channel: t,
                                  toggleRequestToSpeakSidebar: u,
                                  chatOpen: j
                              })
                            : null,
                        (0, i.jsxs)('div', {
                            className: ei.channelChatWrapper,
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
