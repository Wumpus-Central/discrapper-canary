n.d(t, {
    Z: () => eu,
    e: () => ec,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(392711),
    o = n(442837),
    c = n(433517),
    d = n(755721),
    u = n(481060),
    p = n(570140),
    h = n(393238),
    f = n(493773),
    g = n(100527),
    m = n(906732),
    b = n(358221),
    y = n(414910),
    _ = n(909820),
    O = n(493010),
    j = n(71127),
    v = n(185935),
    x = n(522651),
    C = n(728285),
    I = n(788983),
    E = n(928518),
    S = n(703656),
    Z = n(493754),
    T = n(937995),
    P = n(880831),
    N = n(73563),
    R = n(800965),
    w = n(107169),
    A = n(891551),
    D = n(314897),
    L = n(979696),
    M = n(430824),
    k = n(496675),
    U = n(944486),
    G = n(358085),
    H = n(998502),
    F = n(922482),
    B = n(431328),
    z = n(501655),
    V = n(427679),
    W = n(513449),
    Y = n(153349),
    q = n(901434),
    K = n(302270),
    Q = n(308177),
    X = n(700483),
    J = n(686468),
    $ = n(801405),
    ee = n(903108),
    et = n(981631),
    en = n(354459),
    er = n(388032),
    ei = n(515074);
function el(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let ea = "HasBeenInStageChannel",
    es = (e) => {
        (0, x.v)(g.Z.VOICE_CONTROL_TRAY, x.d.STAY_ON_TOP, e), I.hY(et.KJ3.CHANNEL_CALL_POPOUT, e);
    };
function eo(e) {
    let {
            channel: t,
            appContext: n,
            popoutOpen: l,
            popoutWindow: a,
            popoutWindowAlwaysOnTop: s,
            selectedParticipant: c,
        } = e,
        { parentAnalyticsLocation: d } = (0, m.ZP)(),
        u = t.getGuildId(),
        h = (0, o.e7)([U.Z], () => U.Z.getMostRecentSelectedTextChannelId(u), [u]),
        f = D.default.getId(),
        g =
            !(0, o.e7)([b.Z], () => b.Z.isFullscreenInContext(n)) &&
            (!G.isPlatformEmbedded || (G.isPlatformEmbedded && H.ZP.supportsFeature(et.eRX.POPOUT_WINDOWS))),
        _ = null != c && c.type !== en.fO.ACTIVITY && c.user.id !== f,
        O = i.useMemo(() => {
            var e;
            return null != (e = null == a ? void 0 : a.window) ? e : window;
        }, [a]),
        j = (0, $.Z)({
            channel: t,
            appContext: n,
            popoutOpen: l,
            popoutWindow: a,
            currentWindow: O,
        }),
        v = n === et.IlC.POPOUT && G.isPlatformEmbedded && H.ZP.supportsFeature(et.eRX.POPOUT_WINDOWS);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            _
                ? (0, r.jsx)(A.Z, {
                      context: (0, y.Z)(c.type),
                      userId: c.user.id,
                      currentWindow: O,
                      sliderClassName: ei.volumeSlider,
                      location: d,
                  })
                : null,
            v
                ? (0, r.jsx)(w.Z, {
                      popoutWindowAlwaysOnTop: s,
                      onToggleStayOnTop: es,
                  })
                : null,
            g
                ? (0, r.jsx)(R.Z, {
                      popoutOpen: l,
                      onOpenPopout: () => {
                          (0, x.v)(d, x.d.POPOUT, !0),
                              (() => {
                                  let e = t.getGuildId();
                                  null != e && null != h && (0, S.XU)(e, h), I.hP(t);
                              })();
                      },
                      onClosePopout: () => {
                          (0, x.v)(d, x.d.POPOUT, !1), p.Z.wait(() => I.xv(et.KJ3.CHANNEL_CALL_POPOUT));
                      },
                  })
                : null,
            j,
        ],
    });
}
function ec(e) {
    let { channel: t } = e,
        n = (0, C.bp)(),
        i = (0, o.e7)([k.Z], () => k.Z.can(et.Plq.CREATE_INSTANT_INVITE, t)),
        l = (0, o.e7)([M.Z], () => M.Z.getGuild(t.guild_id)),
        a = (0, o.e7)([V.Z], () => V.Z.getStageInstanceByChannel(t.id)),
        s = i || (null == a ? void 0 : a.invite_code) != null;
    return null != l && s
        ? (0, r.jsx)(Z.Z, {
              size: d.zx.Sizes.MEDIUM,
              color: d.zx.Colors.TRANSPARENT,
              channel: t,
              appContext: n,
              className: ei.__invalid_leftTrayIcon,
              analyticsLocation: et.ZY5.GUILD_CHANNEL,
          })
        : null;
}
function ed(e) {
    var t, n;
    let l,
        {
            channel: c,
            toggleRequestToSpeakSidebar: d,
            showRequestToSpeakSidebar: u,
            popoutWindow: p,
            popoutWindowAlwaysOnTop: h,
            popoutOpen: f,
            chatOpen: y,
            idleProps: O,
        } = e,
        { analyticsLocations: j } = (0, m.ZP)(g.Z.VOICE_CONTROL_TRAY),
        v = (0, C.bp)(),
        x = (0, o.e7)([U.Z], () => U.Z.getVoiceChannelId() === c.id, [c.id]),
        I = (0, o.e7)([k.Z], () => k.Z.can(et.Plq.CONNECT, c)),
        E = (0, B.w8)(c.id, z.pV.SPEAKER),
        S = (0, o.e7)([b.Z], () => b.Z.getSelectedParticipant(c.id)),
        Z = f && v !== et.IlC.POPOUT,
        [T, R] = i.useState(0),
        { isOnStartStageScreen: w } = (0, W.ZP)();
    (0, W.MV)(c);
    let A = (0, o.e7)([L.Z], () => L.Z.getToastsEnabled(c.id)),
        D = (0, ee.Z)(c) ? (null != S ? "84px" : "124px") : null != S ? "0px" : "48px";
    return (
        w && (D = "0px"),
        (l = w
            ? (0, r.jsx)(J.Z, {
                  channel: c,
                  onContinueClick: () => {
                      (0, W.Ku)(!1), x || (0, F.TM)(c);
                  },
              })
            : x
              ? (0, r.jsx)(Q.Z, {
                    channel: c,
                    onScroll: (e) => {
                        let { scrollTop: t } = e.target;
                        (0, s.debounce)(() => R(t), 1000, { leading: !0 })();
                    },
                })
              : (0, r.jsx)(q.Z, {
                    participants: E,
                    channel: c,
                    hasConnectPermission: I,
                })),
        (0, r.jsx)(
            N.Z,
            ((t = el(
                {
                    style: {
                        height: "calc(100% - ".concat(D, ")"),
                        paddingTop: D,
                    },
                    disableGradients: !x || (0 === T && N.e.TOP),
                    renderBottomCenter: () =>
                        x
                            ? (0, r.jsx)(m.Gt, {
                                  value: j,
                                  children: (0, r.jsx)(X.Z, {
                                      channel: c,
                                      isOnStartStageScreen: w,
                                  }),
                              })
                            : null,
                    renderBottomRight: () =>
                        x
                            ? (0, r.jsx)(m.Gt, {
                                  value: j,
                                  children: (0, r.jsx)(eo, {
                                      channel: c,
                                      appContext: v,
                                      popoutOpen: f,
                                      popoutWindow: p,
                                      popoutWindowAlwaysOnTop: h,
                                      selectedParticipant: S,
                                  }),
                              })
                            : null,
                    renderHeader: () =>
                        (0, r.jsx)(K.Z, {
                            toggleRequestToSpeakSidebar: d,
                            showRequestToSpeakSidebar: u,
                            channel: c,
                        }),
                    renderChatToasts: () =>
                        !A || y || Z
                            ? null
                            : (0, r.jsx)(_.ZP, {
                                  children: (0, r.jsx)(P.Z, {
                                      className: a()(ei.chatToasts, { [ei.rtsSidebarOpen]: u }),
                                      channelId: c.id,
                                  }),
                              }),
                    screenMessage: Z ? { mainText: er.intl.string(er.t.J5bXZW) } : null,
                },
                O,
            )),
            (n = n = { children: !Z && l }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t),
        )
    );
}
function eu(e) {
    let { channel: t } = e,
        [l, s] = i.useState(!1),
        d = i.useCallback(() => {
            s(!l);
        }, [l, s]),
        { popoutWindow: p, popoutWindowAlwaysOnTop: y } = (0, o.cj)([E.Z], () => ({
            popoutWindow: E.Z.getWindow(et.KJ3.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: E.Z.getIsAlwaysOnTop(et.KJ3.CHANNEL_CALL_POPOUT),
        })),
        x = null != p && !p.closed,
        { analyticsLocations: I } = (0, m.ZP)(g.Z.STAGE_CHANNEL_CALL),
        S = (0, C.bp)(),
        { chatOpen: Z, participantsListOpen: P } = (0, o.cj)(
            [b.Z],
            () => ({
                chatOpen: b.Z.getChatOpen(t.id),
                participantsListOpen: b.Z.getParticipantsListOpen(t.id),
            }),
            [t.id],
        ),
        N = (0, o.e7)([M.Z], () => M.Z.getGuild(t.guild_id), [t.guild_id]),
        { hasParticipantsPanel: R } = (0, v.Z)({ location: "StageChannelCall" });
    (0, f.ZP)(() => {
        null == c.K.get(ea) &&
            ((0, u.ZDy)(async () => {
                let { default: e } = await n.e("37194").then(n.bind(n, 947422));
                return (t) => (0, r.jsx)(e, el({}, t));
            }),
            c.K.set(ea, Date.now()));
    });
    let { width: w = 0, ref: A } = (0, h.ZP)(),
        D = w - 550,
        L = !x || (x && S === et.IlC.POPOUT);
    return (0, r.jsx)(m.Gt, {
        value: I,
        children: (0, r.jsxs)(_.B2, {
            children: [
                (0, r.jsxs)("div", {
                    className: ei.container,
                    ref: A,
                    children: [
                        (0, r.jsx)(u.f6W, {
                            theme: et.BRd.DARK,
                            children: (e) =>
                                (0, r.jsx)("div", {
                                    className: a()(ei.callContainer, e, {
                                        [ei.sidebarVisible]: l,
                                        [ei.sidebarOrChatVisible]: l || Z || P,
                                    }),
                                    children: (0, r.jsx)(T.ZP, {
                                        timeout: 2000,
                                        children: (e) =>
                                            (0, r.jsx)(ed, {
                                                channel: t,
                                                toggleRequestToSpeakSidebar: d,
                                                showRequestToSpeakSidebar: l,
                                                popoutWindow: p,
                                                popoutWindowAlwaysOnTop: y,
                                                popoutOpen: x,
                                                chatOpen: Z,
                                                idleProps: e,
                                            }),
                                    }),
                                }),
                        }),
                        l
                            ? (0, r.jsx)(Y.Z, {
                                  channel: t,
                                  toggleRequestToSpeakSidebar: d,
                                  chatOpen: Z,
                              })
                            : null,
                        (0, r.jsxs)("div", {
                            className: ei.channelChatWrapper,
                            children: [
                                Z &&
                                    L &&
                                    (0, r.jsx)(O.Z, {
                                        channel: t,
                                        guild: N,
                                        maxWidth: D,
                                    }),
                                P &&
                                    R &&
                                    L &&
                                    (0, r.jsx)(j.Z, {
                                        channel: t,
                                        maxWidth: D,
                                    }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(_.H_, {}),
            ],
        }),
    });
}
