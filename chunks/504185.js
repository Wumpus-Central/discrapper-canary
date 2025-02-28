n.d(t, {
    Z: () => ep,
    e: () => eu
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(392711),
    s = n(442837),
    c = n(433517),
    u = n(481060),
    d = n(570140),
    p = n(393238),
    h = n(493773),
    f = n(40851),
    m = n(100527),
    g = n(906732),
    b = n(358221),
    _ = n(414910),
    C = n(909820),
    v = n(493010),
    y = n(71127),
    x = n(185935),
    j = n(522651),
    O = n(540059),
    E = n(788983),
    N = n(928518),
    I = n(703656),
    P = n(493754),
    S = n(880831),
    Z = n(73563),
    T = n(800965),
    A = n(107169),
    w = n(891551),
    R = n(314897),
    M = n(979696),
    k = n(430824),
    L = n(496675),
    D = n(944486),
    W = n(594174),
    U = n(358085),
    B = n(998502),
    H = n(922482),
    F = n(431328),
    G = n(501655),
    V = n(427679),
    z = n(513449),
    Y = n(153349),
    q = n(901434),
    K = n(302270),
    X = n(308177),
    Q = n(700483),
    J = n(686468),
    $ = n(801405),
    ee = n(903108),
    et = n(981631),
    en = n(354459),
    er = n(388032),
    ei = n(452192);
let el = 'HasBeenInStageChannel',
    eo = (e, t) => () => {
        let n = e.getGuildId();
        null != n && null != t && (0, I.XU)(n, t), E.hP(e);
    },
    ea = () => {
        d.Z.wait(() => E.xv(et.KJ3.CHANNEL_CALL_POPOUT));
    },
    es = (e) => {
        (0, j.v)(m.Z.VOICE_CONTROL_TRAY, j.d.STAY_ON_TOP, e), E.hY(et.KJ3.CHANNEL_CALL_POPOUT, e);
    };
function ec(e) {
    let { channel: t, appContext: n, popoutOpen: l, popoutWindow: o, popoutWindowAlwaysOnTop: a, selectedParticipant: c } = e,
        { parentAnalyticsLocation: u } = (0, g.ZP)(),
        d = t.getGuildId(),
        p = (0, s.e7)([D.Z], () => D.Z.getMostRecentSelectedTextChannelId(d), [d]),
        h = R.default.getId(),
        f = !(0, s.e7)([b.Z], () => b.Z.isFullscreenInContext(n)) && (!U.isPlatformEmbedded || (U.isPlatformEmbedded && B.ZP.supportsFeature(et.eRX.POPOUT_WINDOWS))),
        m = null != c && c.type !== en.fO.ACTIVITY && c.user.id !== h,
        C = i.useMemo(() => {
            var e;
            return null !== (e = null == o ? void 0 : o.window) && void 0 !== e ? e : window;
        }, [o]),
        v = (0, $.Z)({
            channel: t,
            appContext: n,
            popoutOpen: l,
            popoutWindow: o,
            currentWindow: C
        }),
        y = n === et.IlC.POPOUT && U.isPlatformEmbedded && B.ZP.supportsFeature(et.eRX.POPOUT_WINDOWS);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            m
                ? (0, r.jsx)(w.Z, {
                      context: (0, _.Z)(c.type),
                      userId: c.user.id,
                      currentWindow: C,
                      sliderClassName: ei.volumeSlider,
                      location: u
                  })
                : null,
            y
                ? (0, r.jsx)(A.Z, {
                      className: ei.rightTrayIcon,
                      popoutWindowAlwaysOnTop: a,
                      onToggleStayOnTop: es
                  })
                : null,
            f
                ? (0, r.jsx)(T.Z, {
                      className: ei.rightTrayIcon,
                      popoutOpen: l,
                      onOpenPopout: () => {
                          (0, j.v)(u, j.d.POPOUT, !0), eo(t, p)();
                      },
                      onClosePopout: () => {
                          (0, j.v)(u, j.d.POPOUT, !1), ea();
                      }
                  })
                : null,
            v
        ]
    });
}
function eu(e) {
    var t, n;
    let { channel: i } = e,
        l = (0, f.bp)(),
        o = (0, s.e7)([L.Z], () => L.Z.can(et.Plq.CREATE_INSTANT_INVITE, i)),
        a = (0, s.e7)([k.Z], () => k.Z.getGuild(i.guild_id)),
        c = (0, s.e7)([V.Z], () => V.Z.getStageInstanceByChannel(i.id)),
        d = o || (null == c ? void 0 : c.invite_code) != null,
        p = (0, O.Q3)('StageChannelInviteButton'),
        h = null !== (n = null === (t = W.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()) && void 0 !== n && n;
    return null != a && d
        ? (0, r.jsx)(P.Z, {
              size: p && h ? u.zxk.Sizes.MEDIUM : u.zxk.Sizes.SMALL,
              color: p && h ? u.zxk.Colors.TRANSPARENT : ei.customInviteButtonColors,
              channel: i,
              appContext: l,
              className: ei.__invalid_leftTrayIcon,
              analyticsLocation: et.ZY5.GUILD_CHANNEL
          })
        : null;
}
function ed(e) {
    var t, n;
    let l,
        { channel: c, toggleRequestToSpeakSidebar: u, showRequestToSpeakSidebar: d, popoutWindow: p, popoutWindowAlwaysOnTop: h, popoutOpen: _, chatOpen: v } = e,
        { analyticsLocations: y } = (0, g.ZP)(m.Z.VOICE_CONTROL_TRAY),
        x = (0, f.bp)(),
        j = (0, s.e7)([D.Z], () => D.Z.getVoiceChannelId() === c.id, [c.id]),
        E = (0, s.e7)([L.Z], () => L.Z.can(et.Plq.CONNECT, c)),
        N = (0, F.w8)(c.id, G.pV.SPEAKER),
        I = (0, s.e7)([b.Z], () => b.Z.getSelectedParticipant(c.id)),
        P = _ && x !== et.IlC.POPOUT,
        T = (0, O.Q3)('StageChannelCallContent'),
        A = null !== (n = null === (t = W.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()) && void 0 !== n && n,
        [w, R] = i.useState(0),
        { isOnStartStageScreen: k } = (0, z.ZP)();
    (0, z.MV)(c);
    let U = (0, s.e7)([M.Z], () => M.Z.getToastsEnabled(c.id)),
        B = (0, ee.Z)(c) ? (null != I ? '84px' : '124px') : null != I ? '0px' : '48px';
    return (
        (l = k
            ? (0, r.jsx)(J.Z, {
                  channel: c,
                  onContinueClick: () => {
                      (0, z.Ku)(!1), j || (0, H.TM)(c);
                  }
              })
            : j
              ? (0, r.jsx)(X.Z, {
                    channel: c,
                    onScroll: (e) => {
                        let { scrollTop: t } = e.target;
                        (0, a.debounce)(() => R(t), 1000, { leading: !0 })();
                    }
                })
              : (0, r.jsx)(q.Z, {
                    participants: N,
                    channel: c,
                    hasConnectPermission: E
                })),
        (0, r.jsx)(Z.Z, {
            style: {
                height: 'calc(100% - '.concat(B, ')'),
                paddingTop: B
            },
            disableGradients: (!!T && !j) || (0 === w && Z.e.TOP),
            renderBottomLeft: () =>
                T && A
                    ? null
                    : (0, r.jsx)(g.Gt, {
                          value: y,
                          children: (0, r.jsx)(eu, { channel: c })
                      }),
            renderBottomCenter: () =>
                j
                    ? (0, r.jsx)(g.Gt, {
                          value: y,
                          children: (0, r.jsx)(Q.Z, {
                              channel: c,
                              isOnStartStageScreen: k
                          })
                      })
                    : null,
            renderBottomRight: () =>
                j
                    ? (0, r.jsx)(g.Gt, {
                          value: y,
                          children: (0, r.jsx)(ec, {
                              channel: c,
                              appContext: x,
                              popoutOpen: _,
                              popoutWindow: p,
                              popoutWindowAlwaysOnTop: h,
                              selectedParticipant: I
                          })
                      })
                    : null,
            renderHeader: () =>
                (0, r.jsx)(K.Z, {
                    inPopout: x === et.IlC.POPOUT,
                    toggleRequestToSpeakSidebar: u,
                    showRequestToSpeakSidebar: d,
                    channel: c
                }),
            renderChatToasts: () =>
                !U || v || P
                    ? null
                    : (0, r.jsx)(C.ZP, {
                          children: (0, r.jsx)(S.Z, {
                              className: o()(ei.chatToasts, { [ei.rtsSidebarOpen]: d }),
                              channelId: c.id
                          })
                      }),
            onActive: () => {},
            onPreventIdle: () => {},
            onAllowIdle: () => {},
            onForceIdle: () => {},
            screenMessage: P ? { mainText: er.NW.string(er.t.J5bXZW) } : null,
            idle: !1,
            children: !P && l
        })
    );
}
function ep(e) {
    let { channel: t } = e,
        [l, a] = i.useState(!1),
        d = i.useCallback(() => {
            a(!l);
        }, [l, a]),
        { popoutWindow: _, popoutWindowAlwaysOnTop: j } = (0, s.cj)([N.Z], () => ({
            popoutWindow: N.Z.getWindow(et.KJ3.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: N.Z.getIsAlwaysOnTop(et.KJ3.CHANNEL_CALL_POPOUT)
        })),
        O = null != _ && !_.closed,
        { analyticsLocations: E } = (0, g.ZP)(m.Z.STAGE_CHANNEL_CALL),
        I = (0, f.bp)(),
        { chatOpen: P, participantsListOpen: S } = (0, s.cj)(
            [b.Z],
            () => ({
                chatOpen: b.Z.getChatOpen(t.id),
                participantsListOpen: b.Z.getParticipantsListOpen(t.id)
            }),
            [t.id]
        ),
        Z = (0, s.e7)([k.Z], () => k.Z.getGuild(t.guild_id), [t.guild_id]),
        { hasParticipantsPanel: T } = (0, x.Z)({ location: 'StageChannelCall' });
    (0, h.ZP)(() => {
        null == c.K.get(el) &&
            ((0, u.ZDy)(async () => {
                let { default: e } = await n.e('37194').then(n.bind(n, 947422));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        (r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = r);
                                    });
                            }
                            return e;
                        })({}, t)
                    );
            }),
            c.K.set(el, Date.now()));
    });
    let { width: A = 0, ref: w } = (0, p.Z)(),
        R = A - 550,
        M = !O || (O && I === et.IlC.POPOUT);
    return (0, r.jsx)(g.Gt, {
        value: E,
        children: (0, r.jsxs)(C.B2, {
            children: [
                (0, r.jsxs)('div', {
                    className: ei.container,
                    ref: w,
                    children: [
                        (0, r.jsx)(u.f6W, {
                            theme: et.BRd.DARK,
                            children: (e) =>
                                (0, r.jsx)('div', {
                                    className: o()(ei.callContainer, e, {
                                        [ei.sidebarVisible]: l,
                                        [ei.sidebarOrChatVisible]: l || P || S
                                    }),
                                    children: (0, r.jsx)(ed, {
                                        channel: t,
                                        toggleRequestToSpeakSidebar: d,
                                        showRequestToSpeakSidebar: l,
                                        popoutWindow: _,
                                        popoutWindowAlwaysOnTop: j,
                                        popoutOpen: O,
                                        chatOpen: P
                                    })
                                })
                        }),
                        l
                            ? (0, r.jsx)(Y.Z, {
                                  channel: t,
                                  toggleRequestToSpeakSidebar: d,
                                  chatOpen: P
                              })
                            : null,
                        (0, r.jsxs)('div', {
                            className: ei.channelChatWrapper,
                            children: [
                                P &&
                                    M &&
                                    (0, r.jsx)(v.Z, {
                                        channel: t,
                                        guild: Z,
                                        maxWidth: R
                                    }),
                                S &&
                                    T &&
                                    M &&
                                    (0, r.jsx)(y.Z, {
                                        channel: t,
                                        maxWidth: R
                                    })
                            ]
                        })
                    ]
                }),
                (0, r.jsx)(C.H_, {})
            ]
        })
    });
}
