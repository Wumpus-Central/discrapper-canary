n.d(t, {
    Z: () => ed,
    e: () => eo,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(392711),
    o = n(442837),
    c = n(433517),
    d = n(481060),
    u = n(570140),
    p = n(393238),
    h = n(493773),
    f = n(100527),
    g = n(906732),
    m = n(358221),
    b = n(414910),
    _ = n(909820),
    y = n(493010),
    O = n(71127),
    j = n(185935),
    x = n(522651),
    v = n(728285),
    C = n(788983),
    I = n(928518),
    S = n(703656),
    E = n(493754),
    Z = n(937995),
    P = n(880831),
    T = n(73563),
    N = n(800965),
    R = n(107169),
    w = n(891551),
    A = n(314897),
    D = n(979696),
    L = n(430824),
    M = n(496675),
    k = n(944486),
    U = n(358085),
    G = n(998502),
    H = n(922482),
    F = n(431328),
    B = n(501655),
    V = n(427679),
    z = n(513449),
    W = n(153349),
    Y = n(901434),
    q = n(302270),
    K = n(308177),
    Q = n(700483),
    X = n(686468),
    J = n(801405),
    $ = n(903108),
    ee = n(981631),
    et = n(354459),
    en = n(388032),
    er = n(515074);
function ei(e) {
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
let el = "HasBeenInStageChannel",
    ea = (e) => {
        (0, x.v)(f.Z.VOICE_CONTROL_TRAY, x.d.STAY_ON_TOP, e), C.setAlwaysOnTop(ee.KJ3.CHANNEL_CALL_POPOUT, e);
    };
function es(e) {
    let {
            channel: t,
            appContext: n,
            popoutOpen: l,
            popoutWindow: a,
            popoutWindowAlwaysOnTop: s,
            selectedParticipant: c,
        } = e,
        { parentAnalyticsLocation: d } = (0, g.ZP)(),
        p = t.getGuildId(),
        h = (0, o.e7)([k.Z], () => k.Z.getMostRecentSelectedTextChannelId(p), [p]),
        f = A.default.getId(),
        _ =
            !(0, o.e7)([m.Z], () => m.Z.isFullscreenInContext(n)) &&
            (!U.isPlatformEmbedded || (U.isPlatformEmbedded && G.ZP.supportsFeature(ee.eRX.POPOUT_WINDOWS))),
        y = null != c && c.type !== et.fO.ACTIVITY && c.user.id !== f,
        O = i.useMemo(() => {
            var e;
            return null != (e = null == a ? void 0 : a.window) ? e : window;
        }, [a]),
        j = (0, J.Z)({
            channel: t,
            appContext: n,
            popoutOpen: l,
            popoutWindow: a,
            currentWindow: O,
        }),
        v = n === ee.IlC.POPOUT && U.isPlatformEmbedded && G.ZP.supportsFeature(ee.eRX.POPOUT_WINDOWS);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            y
                ? (0, r.jsx)(w.Z, {
                      context: (0, b.Z)(c.type),
                      userId: c.user.id,
                      currentWindow: O,
                      sliderClassName: er.volumeSlider,
                      location: d,
                  })
                : null,
            v
                ? (0, r.jsx)(R.Z, {
                      popoutWindowAlwaysOnTop: s,
                      onToggleStayOnTop: ea,
                  })
                : null,
            _
                ? (0, r.jsx)(N.Z, {
                      popoutOpen: l,
                      onOpenPopout: () => {
                          (0, x.v)(d, x.d.POPOUT, !0),
                              (() => {
                                  let e = t.getGuildId();
                                  null != e && null != h && (0, S.XU)(e, h), C.openChannelCallPopout(t);
                              })();
                      },
                      onClosePopout: () => {
                          (0, x.v)(d, x.d.POPOUT, !1), u.Z.wait(() => C.close(ee.KJ3.CHANNEL_CALL_POPOUT));
                      },
                  })
                : null,
            j,
        ],
    });
}
function eo(e) {
    let { channel: t } = e,
        n = (0, v.bp)(),
        i = (0, o.e7)([M.Z], () => M.Z.can(ee.Plq.CREATE_INSTANT_INVITE, t)),
        l = (0, o.e7)([L.Z], () => L.Z.getGuild(t.guild_id)),
        a = (0, o.e7)([V.Z], () => V.Z.getStageInstanceByChannel(t.id)),
        s = i || (null == a ? void 0 : a.invite_code) != null;
    return null != l && s
        ? (0, r.jsx)(E.Z, {
              size: "md",
              channel: t,
              appContext: n,
              analyticsLocation: ee.ZY5.GUILD_CHANNEL,
          })
        : null;
}
function ec(e) {
    var t, n;
    let l,
        {
            channel: c,
            toggleRequestToSpeakSidebar: d,
            showRequestToSpeakSidebar: u,
            popoutWindow: p,
            popoutWindowAlwaysOnTop: h,
            popoutOpen: b,
            popoutType: y,
            chatOpen: O,
            idleProps: j,
        } = e,
        { analyticsLocations: x } = (0, g.ZP)(f.Z.VOICE_CONTROL_TRAY),
        C = (0, v.bp)(),
        I = (0, o.e7)([k.Z], () => k.Z.getVoiceChannelId() === c.id, [c.id]),
        S = (0, o.e7)([M.Z], () => M.Z.can(ee.Plq.CONNECT, c)),
        E = (0, F.w8)(c.id, B.pV.SPEAKER),
        Z = (0, o.e7)([m.Z], () => m.Z.getSelectedParticipant(c.id)),
        N = b && C !== ee.IlC.POPOUT,
        [R, w] = i.useState(0),
        A = i.useMemo(
            () =>
                (0, s.debounce)(
                    (e) => {
                        let { scrollTop: t } = e.target;
                        w(t);
                    },
                    1000,
                    { leading: !0 },
                ),
            [],
        ),
        { isOnStartStageScreen: L } = (0, z.ZP)();
    (0, z.MV)(c);
    let U = (0, o.e7)([D.Z], () => D.Z.getToastsEnabled(c.id)),
        G = (0, $.Z)(c) ? (null != Z ? "84px" : "124px") : null != Z ? "0px" : "48px";
    return (
        L && (G = "0px"),
        (l = L
            ? (0, r.jsx)(X.Z, {
                  channel: c,
                  onContinueClick: () => {
                      (0, z.Ku)(!1), I || (0, H.TM)(c);
                  },
              })
            : I
              ? (0, r.jsx)(K.Z, {
                    channel: c,
                    onScroll: A,
                    popoutType: y,
                })
              : (0, r.jsx)(Y.Z, {
                    participants: E,
                    channel: c,
                    hasConnectPermission: S,
                })),
        (0, r.jsx)(
            T.Z,
            ((t = ei(
                {
                    style: {
                        height: "calc(100% - ".concat(G, ")"),
                        paddingTop: G,
                    },
                    disableGradients: !I || (0 === R && T.e.TOP),
                    renderBottomCenter: () =>
                        I
                            ? (0, r.jsx)(g.Gt, {
                                  value: x,
                                  children: (0, r.jsx)(Q.Z, {
                                      channel: c,
                                      isOnStartStageScreen: L,
                                  }),
                              })
                            : null,
                    renderBottomRight: () =>
                        I
                            ? (0, r.jsx)(g.Gt, {
                                  value: x,
                                  children: (0, r.jsx)(es, {
                                      channel: c,
                                      appContext: C,
                                      popoutOpen: b,
                                      popoutWindow: p,
                                      popoutWindowAlwaysOnTop: h,
                                      selectedParticipant: Z,
                                  }),
                              })
                            : null,
                    renderHeader: () =>
                        (0, r.jsx)(q.Z, {
                            toggleRequestToSpeakSidebar: d,
                            showRequestToSpeakSidebar: u,
                            channel: c,
                        }),
                    renderChatToasts: () =>
                        !U || O || N
                            ? null
                            : (0, r.jsx)(_.ZP, {
                                  children: (0, r.jsx)(P.Z, {
                                      className: a()(er.chatToasts, { [er.rtsSidebarOpen]: u }),
                                      channelId: c.id,
                                  }),
                              }),
                    screenMessage: N ? { mainText: en.intl.string(en.t.J5bXZU) } : null,
                },
                j,
            )),
            (n = n = { children: !N && l }),
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
function ed(e) {
    let { channel: t, popoutType: l } = e,
        [s, u] = i.useState(!1),
        b = i.useCallback(() => {
            u(!s);
        }, [s, u]),
        { popoutWindow: x, popoutWindowAlwaysOnTop: C } = (0, o.cj)([I.Z], () => ({
            popoutWindow: I.Z.getWindow(ee.KJ3.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: I.Z.getIsAlwaysOnTop(ee.KJ3.CHANNEL_CALL_POPOUT),
        })),
        S = null != x && !x.closed,
        { analyticsLocations: E } = (0, g.ZP)(f.Z.STAGE_CHANNEL_CALL),
        P = (0, v.bp)(),
        { chatOpen: T, participantsListOpen: N } = (0, o.cj)(
            [m.Z],
            () => ({
                chatOpen: m.Z.getChatOpen(t.id),
                participantsListOpen: m.Z.getParticipantsListOpen(t.id),
            }),
            [t.id],
        ),
        R = (0, o.e7)([L.Z], () => L.Z.getGuild(t.guild_id), [t.guild_id]),
        { hasParticipantsPanel: w } = (0, j.Z)({ location: "StageChannelCall" });
    (0, h.ZP)(() => {
        null == c.K.get(el) &&
            ((0, d.ZDy)(async () => {
                let { default: e } = await n.e("37194").then(n.bind(n, 947422));
                return (t) => (0, r.jsx)(e, ei({}, t));
            }),
            c.K.set(el, Date.now()));
    });
    let { width: A = 0, ref: D } = (0, p.ZP)(),
        M = A - 550,
        k = !S || (S && P === ee.IlC.POPOUT);
    return (0, r.jsx)(g.Gt, {
        value: E,
        children: (0, r.jsxs)(_.B2, {
            children: [
                (0, r.jsxs)("div", {
                    className: er.container,
                    ref: D,
                    children: [
                        (0, r.jsx)(d.f6W, {
                            theme: ee.BRd.DARK,
                            children: (e) =>
                                (0, r.jsx)("div", {
                                    className: a()(er.callContainer, e, {
                                        [er.sidebarVisible]: s,
                                        [er.sidebarOrChatVisible]: s || T || N,
                                    }),
                                    children: (0, r.jsx)(Z.ZP, {
                                        timeout: 2000,
                                        children: (e) =>
                                            (0, r.jsx)(ec, {
                                                channel: t,
                                                toggleRequestToSpeakSidebar: b,
                                                showRequestToSpeakSidebar: s,
                                                popoutWindow: x,
                                                popoutWindowAlwaysOnTop: C,
                                                popoutOpen: S,
                                                popoutType: l,
                                                chatOpen: T,
                                                idleProps: e,
                                            }),
                                    }),
                                }),
                        }),
                        s
                            ? (0, r.jsx)(W.Z, {
                                  channel: t,
                                  toggleRequestToSpeakSidebar: b,
                                  chatOpen: T,
                              })
                            : null,
                        (0, r.jsxs)("div", {
                            className: er.channelChatWrapper,
                            children: [
                                T &&
                                    k &&
                                    (0, r.jsx)(y.Z, {
                                        channel: t,
                                        guild: R,
                                        maxWidth: M,
                                    }),
                                N &&
                                    w &&
                                    k &&
                                    (0, r.jsx)(O.Z, {
                                        channel: t,
                                        maxWidth: M,
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
