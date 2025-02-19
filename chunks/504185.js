n.d(t, {
    Z: () => ed,
    e: () => ec
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
    j = n(540059),
    O = n(788983),
    N = n(928518),
    E = n(703656),
    P = n(493754),
    I = n(880831),
    S = n(73563),
    Z = n(800965),
    T = n(107169),
    A = n(891551),
    w = n(314897),
    R = n(979696),
    k = n(430824),
    M = n(496675),
    L = n(944486),
    D = n(594174),
    W = n(358085),
    U = n(998502),
    B = n(922482),
    F = n(431328),
    H = n(501655),
    G = n(427679),
    V = n(513449),
    z = n(153349),
    q = n(901434),
    Y = n(302270),
    K = n(308177),
    X = n(700483),
    J = n(686468),
    Q = n(801405),
    $ = n(903108),
    ee = n(981631),
    et = n(354459),
    en = n(388032),
    er = n(284204);
let ei = 'HasBeenInStageChannel',
    el = (e, t) => () => {
        let n = e.getGuildId();
        null != n && null != t && (0, E.XU)(n, t), O.hP(e);
    },
    eo = () => {
        d.Z.wait(() => O.xv(ee.KJ3.CHANNEL_CALL_POPOUT));
    },
    ea = (e) => {
        O.hY(ee.KJ3.CHANNEL_CALL_POPOUT, e);
    };
function es(e) {
    let { channel: t, appContext: n, popoutOpen: l, popoutWindow: o, popoutWindowAlwaysOnTop: a, selectedParticipant: c } = e,
        u = t.getGuildId(),
        d = (0, s.e7)([L.Z], () => L.Z.getMostRecentSelectedTextChannelId(u), [u]),
        p = w.default.getId(),
        h = !(0, s.e7)([b.Z], () => b.Z.isFullscreenInContext(n)) && (!W.isPlatformEmbedded || (W.isPlatformEmbedded && U.ZP.supportsFeature(ee.eRX.POPOUT_WINDOWS))),
        f = null != c && c.type !== et.fO.ACTIVITY && c.user.id !== p,
        m = i.useMemo(() => {
            var e;
            return null !== (e = null == o ? void 0 : o.window) && void 0 !== e ? e : window;
        }, [o]),
        g = (0, Q.Z)({
            channel: t,
            appContext: n,
            popoutOpen: l,
            popoutWindow: o,
            currentWindow: m
        }),
        C = n === ee.IlC.POPOUT && W.isPlatformEmbedded && U.ZP.supportsFeature(ee.eRX.POPOUT_WINDOWS);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            f
                ? (0, r.jsx)(A.Z, {
                      context: (0, _.Z)(c.type),
                      userId: c.user.id,
                      currentWindow: m,
                      sliderClassName: er.volumeSlider
                  })
                : null,
            C
                ? (0, r.jsx)(T.Z, {
                      className: er.rightTrayIcon,
                      popoutWindowAlwaysOnTop: a,
                      onToggleStayOnTop: ea
                  })
                : null,
            h
                ? (0, r.jsx)(Z.Z, {
                      className: er.rightTrayIcon,
                      popoutOpen: l,
                      onOpenPopout: el(t, d),
                      onClosePopout: eo
                  })
                : null,
            g
        ]
    });
}
function ec(e) {
    var t, n;
    let { channel: i } = e,
        l = (0, f.bp)(),
        o = (0, s.e7)([M.Z], () => M.Z.can(ee.Plq.CREATE_INSTANT_INVITE, i)),
        a = (0, s.e7)([k.Z], () => k.Z.getGuild(i.guild_id)),
        c = (0, s.e7)([G.Z], () => G.Z.getStageInstanceByChannel(i.id)),
        d = o || (null == c ? void 0 : c.invite_code) != null,
        p = (0, j.Q3)('StageChannelInviteButton'),
        h = null !== (n = null === (t = D.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()) && void 0 !== n && n;
    return null != a && d
        ? (0, r.jsx)(P.Z, {
              size: p && h ? u.zxk.Sizes.MEDIUM : u.zxk.Sizes.SMALL,
              color: p && h ? u.zxk.Colors.TRANSPARENT : er.customInviteButtonColors,
              channel: i,
              appContext: l,
              className: er.__invalid_leftTrayIcon,
              analyticsLocation: ee.ZY5.GUILD_CHANNEL
          })
        : null;
}
function eu(e) {
    var t, n;
    let l,
        { channel: c, toggleRequestToSpeakSidebar: u, showRequestToSpeakSidebar: d, popoutWindow: p, popoutWindowAlwaysOnTop: h, popoutOpen: m, chatOpen: g } = e,
        _ = (0, f.bp)(),
        v = (0, s.e7)([L.Z], () => L.Z.getVoiceChannelId() === c.id, [c.id]),
        y = (0, s.e7)([M.Z], () => M.Z.can(ee.Plq.CONNECT, c)),
        x = (0, F.w8)(c.id, H.pV.SPEAKER),
        O = (0, s.e7)([b.Z], () => b.Z.getSelectedParticipant(c.id)),
        N = m && _ !== ee.IlC.POPOUT,
        E = (0, j.Q3)('StageChannelCallContent'),
        P = null !== (n = null === (t = D.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()) && void 0 !== n && n,
        [Z, T] = i.useState(0),
        { isOnStartStageScreen: A } = (0, V.ZP)();
    (0, V.MV)(c);
    let w = (0, s.e7)([R.Z], () => R.Z.getToastsEnabled(c.id)),
        k = (0, $.Z)(c) ? (null != O ? '84px' : '124px') : null != O ? '0px' : '48px';
    return (
        (l = A
            ? (0, r.jsx)(J.Z, {
                  channel: c,
                  onContinueClick: () => {
                      (0, V.Ku)(!1), v || (0, B.TM)(c);
                  }
              })
            : v
              ? (0, r.jsx)(K.Z, {
                    channel: c,
                    onScroll: (e) => {
                        let { scrollTop: t } = e.target;
                        (0, a.debounce)(() => T(t), 1000, { leading: !0 })();
                    }
                })
              : (0, r.jsx)(q.Z, {
                    participants: x,
                    channel: c,
                    hasConnectPermission: y
                })),
        (0, r.jsx)(S.Z, {
            style: {
                height: 'calc(100% - '.concat(k, ')'),
                paddingTop: k
            },
            disableGradients: (!!E && !v) || (0 === Z && S.e.TOP),
            renderBottomLeft: () => (E && P ? null : (0, r.jsx)(ec, { channel: c })),
            renderBottomCenter: () =>
                v
                    ? (0, r.jsx)(X.Z, {
                          channel: c,
                          isOnStartStageScreen: A
                      })
                    : null,
            renderBottomRight: () =>
                v
                    ? (0, r.jsx)(es, {
                          channel: c,
                          appContext: _,
                          popoutOpen: m,
                          popoutWindow: p,
                          popoutWindowAlwaysOnTop: h,
                          selectedParticipant: O
                      })
                    : null,
            renderHeader: () =>
                (0, r.jsx)(Y.Z, {
                    inPopout: _ === ee.IlC.POPOUT,
                    toggleRequestToSpeakSidebar: u,
                    showRequestToSpeakSidebar: d,
                    channel: c
                }),
            renderChatToasts: () =>
                !w || g || N
                    ? null
                    : (0, r.jsx)(C.ZP, {
                          children: (0, r.jsx)(I.Z, {
                              className: o()(er.chatToasts, { [er.rtsSidebarOpen]: d }),
                              channelId: c.id
                          })
                      }),
            onActive: () => {},
            onPreventIdle: () => {},
            onAllowIdle: () => {},
            onForceIdle: () => {},
            screenMessage: N ? { mainText: en.NW.string(en.t.J5bXZW) } : null,
            idle: !1,
            children: !N && l
        })
    );
}
function ed(e) {
    let { channel: t } = e,
        [l, a] = i.useState(!1),
        d = i.useCallback(() => {
            a(!l);
        }, [l, a]),
        { popoutWindow: _, popoutWindowAlwaysOnTop: j } = (0, s.cj)([N.Z], () => ({
            popoutWindow: N.Z.getWindow(ee.KJ3.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: N.Z.getIsAlwaysOnTop(ee.KJ3.CHANNEL_CALL_POPOUT)
        })),
        O = null != _ && !_.closed,
        { analyticsLocations: E } = (0, g.ZP)(m.Z.STAGE_CHANNEL_CALL),
        P = (0, f.bp)(),
        { chatOpen: I, participantsListOpen: S } = (0, s.cj)(
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
        null == c.K.get(ei) &&
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
            c.K.set(ei, Date.now()));
    });
    let { width: A = 0, ref: w } = (0, p.Z)(),
        R = A - 550,
        M = !O || (O && P === ee.IlC.POPOUT);
    return (0, r.jsx)(g.Gt, {
        value: E,
        children: (0, r.jsxs)(C.B2, {
            children: [
                (0, r.jsxs)('div', {
                    className: er.container,
                    ref: w,
                    children: [
                        (0, r.jsx)(u.f6W, {
                            theme: ee.BRd.DARK,
                            children: (e) =>
                                (0, r.jsx)('div', {
                                    className: o()(er.callContainer, e, {
                                        [er.sidebarVisible]: l,
                                        [er.sidebarOrChatVisible]: l || I || S
                                    }),
                                    children: (0, r.jsx)(eu, {
                                        channel: t,
                                        toggleRequestToSpeakSidebar: d,
                                        showRequestToSpeakSidebar: l,
                                        popoutWindow: _,
                                        popoutWindowAlwaysOnTop: j,
                                        popoutOpen: O,
                                        chatOpen: I
                                    })
                                })
                        }),
                        l
                            ? (0, r.jsx)(z.Z, {
                                  channel: t,
                                  toggleRequestToSpeakSidebar: d,
                                  chatOpen: I
                              })
                            : null,
                        (0, r.jsxs)('div', {
                            className: er.channelChatWrapper,
                            children: [
                                I &&
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
