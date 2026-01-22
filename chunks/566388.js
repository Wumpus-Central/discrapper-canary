n.d(t, {
    A: () => eu,
    l: () => eo,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(735438),
    o = n(311907),
    c = n(506774),
    u = n(397927),
    d = n(73153),
    f = n(765671),
    p = n(964486),
    h = n(793574),
    b = n(688810),
    g = n(313961),
    m = n(520698),
    A = n(43189),
    y = n(518530),
    O = n(264250),
    j = n(261718),
    v = n(384059),
    x = n(267102),
    E = n(574172),
    _ = n(869146),
    C = n(976860),
    S = n(993952),
    I = n(461782),
    N = n(20465),
    T = n(156652),
    P = n(128286),
    w = n(619344),
    R = n(821747),
    D = n(961350),
    M = n(249288),
    L = n(71393),
    G = n(576705),
    k = n(309010),
    U = n(723702),
    V = n(837921),
    F = n(323443),
    H = n(113783),
    B = n(69407),
    K = n(446600),
    W = n(571909),
    z = n(374873),
    Y = n(623413),
    q = n(707251),
    X = n(357819),
    J = n(717965),
    Q = n(895903),
    Z = n(542372),
    $ = n(533233),
    ee = n(652215),
    et = n(806931),
    en = n(985018),
    er = n(105626);

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
let ei = "HasBeenInStageChannel",
    ea = (e) => {
        (0, v.X)(h.A.VOICE_CONTROL_TRAY, v.O.STAY_ON_TOP, e), E.setAlwaysOnTop(ee.MLl.CHANNEL_CALL_POPOUT, e);
    };

function es(e) {
    let {
            channel: t,
            appContext: n,
            popoutOpen: i,
            popoutWindow: a,
            popoutWindowAlwaysOnTop: s,
            selectedParticipant: c,
        } = e,
        { parentAnalyticsLocation: u } = (0, b.Ay)(),
        f = t.getGuildId(),
        p = (0, o.bG)([k.A], () => k.A.getMostRecentSelectedTextChannelId(f), [f]),
        h = D.default.getId(),
        A =
            !(0, o.bG)([g.A], () => g.A.isFullscreenInContext(n)) &&
            (!U.isPlatformEmbedded || (U.isPlatformEmbedded && V.Ay.supportsFeature(ee.BYE.POPOUT_WINDOWS))),
        y = null != c && c.type !== et.lp.ACTIVITY && c.user.id !== h,
        O = l.useMemo(() => {
            var e;
            return null != (e = null == a ? void 0 : a.window) ? e : window;
        }, [a]),
        j = (0, Z.A)({
            channel: t,
            appContext: n,
            popoutOpen: i,
            popoutWindow: a,
            currentWindow: O,
        }),
        x = n === ee.BRT.POPOUT && U.isPlatformEmbedded && V.Ay.supportsFeature(ee.BYE.POPOUT_WINDOWS);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            y
                ? (0, r.jsx)(R.A, {
                      context: (0, m.A)(c.type),
                      userId: c.user.id,
                      currentWindow: O,
                      sliderClassName: er.MQ,
                      location: u,
                  })
                : null,
            x
                ? (0, r.jsx)(w.A, {
                      popoutWindowAlwaysOnTop: s,
                      onToggleStayOnTop: ea,
                  })
                : null,
            A
                ? (0, r.jsx)(P.A, {
                      popoutOpen: i,
                      onOpenPopout: () => {
                          (0, v.X)(u, v.O.POPOUT, !0),
                              (() => {
                                  let e = t.getGuildId();
                                  null != e && null != p && (0, C.uh)(e, p), E.openChannelCallPopout(t);
                              })();
                      },
                      onClosePopout: () => {
                          (0, v.X)(u, v.O.POPOUT, !1), d.h.wait(() => E.close(ee.MLl.CHANNEL_CALL_POPOUT));
                      },
                  })
                : null,
            j,
        ],
    });
}

function eo(e) {
    let { channel: t } = e,
        n = (0, x.Us)(),
        l = (0, o.bG)([G.A], () => G.A.can(ee.xBc.CREATE_INSTANT_INVITE, t)),
        i = (0, o.bG)([L.A], () => L.A.getGuild(t.guild_id)),
        a = (0, o.bG)([K.A], () => K.A.getStageInstanceByChannel(t.id)),
        s = l || (null == a ? void 0 : a.invite_code) != null;
    return null != i && s
        ? (0, r.jsx)(S.A, {
              size: "md",
              channel: t,
              appContext: n,
              analyticsLocation: ee.liQ.GUILD_CHANNEL,
          })
        : null;
}

function ec(e) {
    var t, n;
    let i,
        {
            channel: c,
            toggleRequestToSpeakSidebar: u,
            showRequestToSpeakSidebar: d,
            popoutWindow: f,
            popoutWindowAlwaysOnTop: p,
            popoutOpen: m,
            popoutType: y,
            chatOpen: O,
            idleProps: j,
        } = e,
        { analyticsLocations: v } = (0, b.Ay)(h.A.VOICE_CONTROL_TRAY),
        E = (0, x.Us)(),
        _ = (0, o.bG)([k.A], () => k.A.getVoiceChannelId() === c.id, [c.id]),
        C = (0, o.bG)([G.A], () => G.A.can(ee.xBc.CONNECT, c)),
        S = (0, H.E5)(c.id, B.ip.SPEAKER),
        I = (0, o.bG)([g.A], () => g.A.getSelectedParticipant(c.id)),
        P = m && E !== ee.BRT.POPOUT,
        [w, R] = l.useState(0),
        D = l.useMemo(
            () =>
                (0, s.debounce)(
                    (e) => {
                        let { scrollTop: t } = e.target;
                        R(t);
                    },
                    1e3,
                    {
                        leading: !0,
                    },
                ),
            [],
        ),
        { isOnStartStageScreen: L } = (0, W.Ay)();
    (0, W.vI)(c);
    let U = (0, o.bG)([M.A], () => M.A.getToastsEnabled(c.id)),
        V = (0, $.A)(c) ? (null != I ? "84px" : "124px") : null != I ? "0px" : "48px";
    return (
        L && (V = "0px"),
        (i = L
            ? (0, r.jsx)(Q.A, {
                  channel: c,
                  onContinueClick: () => {
                      (0, W.ek)(!1), _ || (0, F.cy)(c);
                  },
              })
            : _
              ? (0, r.jsx)(X.A, {
                    channel: c,
                    onScroll: D,
                    popoutType: y,
                })
              : (0, r.jsx)(Y.A, {
                    participants: S,
                    channel: c,
                    hasConnectPermission: C,
                })),
        (0, r.jsx)(
            T.A,
            ((t = el(
                {
                    style: {
                        height: "calc(100% - ".concat(V, ")"),
                        paddingTop: V,
                    },
                    disableGradients: !_ || (0 === w && T.x.TOP),
                    renderBottomCenter: () =>
                        _
                            ? (0, r.jsx)(b.f5, {
                                  value: v,
                                  children: (0, r.jsx)(J.A, {
                                      channel: c,
                                      isOnStartStageScreen: L,
                                  }),
                              })
                            : null,
                    renderBottomRight: () =>
                        _
                            ? (0, r.jsx)(b.f5, {
                                  value: v,
                                  children: (0, r.jsx)(es, {
                                      channel: c,
                                      appContext: E,
                                      popoutOpen: m,
                                      popoutWindow: f,
                                      popoutWindowAlwaysOnTop: p,
                                      selectedParticipant: I,
                                  }),
                              })
                            : null,
                    renderHeader: () =>
                        (0, r.jsx)(q.A, {
                            toggleRequestToSpeakSidebar: u,
                            showRequestToSpeakSidebar: d,
                            channel: c,
                        }),
                    renderChatToasts: () =>
                        !U || O || P
                            ? null
                            : (0, r.jsx)(A.Ay, {
                                  children: (0, r.jsx)(N.A, {
                                      className: a()(er.T6, {
                                          [er.c3]: d,
                                      }),
                                      channelId: c.id,
                                  }),
                              }),
                    screenMessage: P
                        ? {
                              mainText: en.intl.string(en.t.J5bXZU),
                          }
                        : null,
                },
                j,
            )),
            (n = n =
                {
                    children: !P && i,
                }),
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
    let { channel: t, popoutType: i } = e,
        [s, d] = l.useState(!1),
        m = l.useCallback(() => {
            d(!s);
        }, [s, d]),
        { popoutWindow: v, popoutWindowAlwaysOnTop: E } = (0, o.cf)([_.A], () => ({
            popoutWindow: _.A.getWindow(ee.MLl.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: _.A.getIsAlwaysOnTop(ee.MLl.CHANNEL_CALL_POPOUT),
        })),
        C = null != v && !v.closed,
        { analyticsLocations: S } = (0, b.Ay)(h.A.STAGE_CHANNEL_CALL),
        N = (0, x.Us)(),
        { chatOpen: T, participantsListOpen: P } = (0, o.cf)(
            [g.A],
            () => ({
                chatOpen: g.A.getChatOpen(t.id),
                participantsListOpen: g.A.getParticipantsListOpen(t.id),
            }),
            [t.id],
        ),
        w = (0, o.bG)([L.A], () => L.A.getGuild(t.guild_id), [t.guild_id]),
        { hasParticipantsPanel: R } = (0, j.A)({
            location: "StageChannelCall",
        });
    (0, p.Ay)(() => {
        null == c.w.get(ei) &&
            ((0, u.mMO)(async () => {
                let { default: e } = await n.e("56016").then(n.bind(n, 456947));
                return (t) => (0, r.jsx)(e, el({}, t));
            }),
            c.w.set(ei, Date.now()));
    });
    let { width: D = 0, ref: M } = (0, f.Ay)(),
        G = D - 550,
        k = !C || (C && N === ee.BRT.POPOUT);
    return (0, r.jsx)(b.f5, {
        value: S,
        children: (0, r.jsxs)(A.qh, {
            children: [
                (0, r.jsxs)("div", {
                    className: er.kL,
                    ref: M,
                    children: [
                        (0, r.jsx)(u.NPJ, {
                            theme: ee.NJ8.DARK,
                            children: (e) =>
                                (0, r.jsx)("div", {
                                    className: a()(er.ik, e, {
                                        [er.pR]: s,
                                        [er.gy]: s || T || P,
                                    }),
                                    children: (0, r.jsx)(I.Ay, {
                                        timeout: 2e3,
                                        children: (e) =>
                                            (0, r.jsx)(ec, {
                                                channel: t,
                                                toggleRequestToSpeakSidebar: m,
                                                showRequestToSpeakSidebar: s,
                                                popoutWindow: v,
                                                popoutWindowAlwaysOnTop: E,
                                                popoutOpen: C,
                                                popoutType: i,
                                                chatOpen: T,
                                                idleProps: e,
                                            }),
                                    }),
                                }),
                        }),
                        s
                            ? (0, r.jsx)(z.A, {
                                  channel: t,
                                  toggleRequestToSpeakSidebar: m,
                                  chatOpen: T,
                              })
                            : null,
                        (0, r.jsxs)("div", {
                            className: er.B2,
                            children: [
                                T &&
                                    k &&
                                    (0, r.jsx)(y.A, {
                                        channel: t,
                                        guild: w,
                                        maxWidth: G,
                                    }),
                                P &&
                                    R &&
                                    k &&
                                    (0, r.jsx)(O.A, {
                                        channel: t,
                                        maxWidth: G,
                                    }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(A.WD, {}),
            ],
        }),
    });
}
