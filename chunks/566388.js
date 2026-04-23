n.r(t), n.d(t, { StageChannelInviteButton: () => es, default: () => eo });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(735438),
    o = n(311907),
    c = n(506774),
    d = n(192308),
    u = n(43990),
    _ = n(73153),
    A = n(765671),
    p = n(964486),
    h = n(793574),
    g = n(688810),
    m = n(313961),
    x = n(520698),
    f = n(43189),
    C = n(518530),
    E = n(384059),
    j = n(267102),
    b = n(574172),
    N = n(869146),
    T = n(976860),
    I = n(461782),
    v = n(20465),
    S = n(156652),
    y = n(128286),
    O = n(619344),
    L = n(821747),
    R = n(961350),
    U = n(249288),
    w = n(71393),
    P = n(576705),
    k = n(309010),
    M = n(723702),
    G = n(837921),
    D = n(323443),
    V = n(113783),
    B = n(69407),
    z = n(446600),
    K = n(571909),
    q = n(374873),
    H = n(623413),
    F = n(707251),
    Q = n(357819),
    Y = n(717965),
    W = n(696842),
    X = n(895903),
    Z = n(542372),
    $ = n(533233),
    J = n(652215),
    ee = n(806931),
    et = n(985018),
    en = n(678671);
let ei = "HasBeenInStageChannel",
    el = (e) => {
        (0, E.X)(h.A.VOICE_CONTROL_TRAY, E.O.STAY_ON_TOP, e), b.setAlwaysOnTop(J.MLl.CHANNEL_CALL_POPOUT, e);
    };
function ea(e) {
    let {
            channel: t,
            appContext: n,
            popoutOpen: a,
            popoutWindow: s,
            popoutWindowAlwaysOnTop: r,
            selectedParticipant: c,
        } = e,
        { parentAnalyticsLocation: d } = (0, g.Ay)(),
        u = t.getGuildId(),
        A = (0, o.bG)([k.A], () => k.A.getMostRecentSelectedTextChannelId(u), [u]),
        p = R.default.getId(),
        h =
            !(0, o.bG)([m.A], () => m.A.isFullscreenInContext(n)) &&
            (!M.isPlatformEmbedded || G.Ay.supportsFeature(J.BYE.POPOUT_WINDOWS)),
        f = null != c && c.type !== ee.lp.ACTIVITY && c.user.id !== p,
        C = l.useMemo(() => s?.window ?? window, [s]),
        j = (0, Z.A)({ channel: t, appContext: n, popoutOpen: a, popoutWindow: s, currentWindow: C }),
        N = n === J.BRT.POPOUT && M.isPlatformEmbedded && G.Ay.supportsFeature(J.BYE.POPOUT_WINDOWS);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            f
                ? (0, i.jsx)(L.A, {
                      context: (0, x.A)(c.type),
                      userId: c.user.id,
                      currentWindow: C,
                      sliderClassName: en.MQ,
                      location: d,
                  })
                : null,
            N ? (0, i.jsx)(O.A, { popoutWindowAlwaysOnTop: r, onToggleStayOnTop: el }) : null,
            h
                ? (0, i.jsx)(y.A, {
                      popoutOpen: a,
                      onOpenPopout: () => {
                          (0, E.X)(d, E.O.POPOUT, !0),
                              (() => {
                                  let e = t.getGuildId();
                                  null != e && null != A && (0, T.uh)(e, A), b.openChannelCallPopout(t);
                              })();
                      },
                      onClosePopout: () => {
                          (0, E.X)(d, E.O.POPOUT, !1), _.h.wait(() => b.close(J.MLl.CHANNEL_CALL_POPOUT));
                      },
                  })
                : null,
            j,
        ],
    });
}
function es(e) {
    let { channel: t } = e,
        n = (0, j.Us)(),
        l = (0, o.bG)([P.A], () => P.A.can(J.xBc.CREATE_INSTANT_INVITE, t)),
        a = (0, o.bG)([w.A], () => w.A.getGuild(t.guild_id)),
        s = (0, o.bG)([z.A], () => z.A.getStageInstanceByChannel(t.id)),
        r = l || s?.invite_code != null;
    return null != a && r
        ? (0, i.jsx)(W.A, { size: "md", channel: t, appContext: n, analyticsLocation: J.liQ.GUILD_CHANNEL })
        : null;
}
function er(e) {
    let t,
        {
            channel: n,
            toggleRequestToSpeakSidebar: a,
            showRequestToSpeakSidebar: c,
            popoutWindow: d,
            popoutWindowAlwaysOnTop: u,
            popoutOpen: _,
            popoutType: A,
            chatOpen: p,
            idleProps: x,
        } = e,
        { analyticsLocations: C } = (0, g.Ay)(h.A.VOICE_CONTROL_TRAY),
        E = (0, j.Us)(),
        b = (0, o.bG)([k.A], () => k.A.getVoiceChannelId() === n.id, [n.id]),
        N = (0, o.bG)([P.A], () => P.A.can(J.xBc.CONNECT, n)),
        T = (0, V.E5)(n.id, B.ip.SPEAKER),
        I = (0, o.bG)([m.A], () => m.A.getSelectedParticipant(n.id)),
        y = _ && E !== J.BRT.POPOUT,
        [O, L] = l.useState(0),
        R = l.useMemo(
            () =>
                (0, r.debounce)(
                    (e) => {
                        let { scrollTop: t } = e.target;
                        L(t);
                    },
                    1e3,
                    { leading: !0 },
                ),
            [],
        ),
        { isOnStartStageScreen: w } = (0, K.Ay)();
    (0, K.vI)(n);
    let M = (0, o.bG)([U.A], () => U.A.getToastsEnabled(n.id)),
        G = (0, $.A)(n) ? (null != I ? "84px" : "124px") : null != I ? "0px" : "48px";
    return (
        w && (G = "0px"),
        (t = w
            ? (0, i.jsx)(X.A, {
                  channel: n,
                  onContinueClick: () => {
                      (0, K.ek)(!1), b || (0, D.cy)(n);
                  },
              })
            : b
              ? (0, i.jsx)(Q.A, { channel: n, onScroll: R, popoutType: A })
              : (0, i.jsx)(H.A, { participants: T, channel: n, hasConnectPermission: N })),
        (0, i.jsx)(S.A, {
            style: { height: `calc(100% - ${G})`, paddingTop: G },
            disableGradients: !b || (0 === O && S.x.TOP),
            renderBottomCenter: () =>
                b
                    ? (0, i.jsx)(g.f5, { value: C, children: (0, i.jsx)(Y.A, { channel: n, isOnStartStageScreen: w }) })
                    : null,
            renderBottomRight: () =>
                b
                    ? (0, i.jsx)(g.f5, {
                          value: C,
                          children: (0, i.jsx)(ea, {
                              channel: n,
                              appContext: E,
                              popoutOpen: _,
                              popoutWindow: d,
                              popoutWindowAlwaysOnTop: u,
                              selectedParticipant: I,
                          }),
                      })
                    : null,
            renderHeader: () =>
                (0, i.jsx)(F.A, { toggleRequestToSpeakSidebar: a, showRequestToSpeakSidebar: c, channel: n }),
            renderChatToasts: () =>
                !M || p || y
                    ? null
                    : (0, i.jsx)(f.Ay, {
                          children: (0, i.jsx)(v.A, { className: s()(en.T6, { [en.c3]: c }), channelId: n.id }),
                      }),
            screenMessage: y ? { mainText: et.intl.string(et.t.J5bXZU) } : null,
            ...x,
            children: !y && t,
        })
    );
}
function eo(e) {
    let { channel: t, popoutType: a } = e,
        [r, _] = l.useState(!1),
        x = l.useCallback(() => {
            _(!r);
        }, [r, _]),
        { popoutWindow: E, popoutWindowAlwaysOnTop: b } = (0, o.cf)([N.A], () => ({
            popoutWindow: N.A.getWindow(J.MLl.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: N.A.getIsAlwaysOnTop(J.MLl.CHANNEL_CALL_POPOUT),
        })),
        T = null != E && !E.closed,
        { analyticsLocations: v } = (0, g.Ay)(h.A.STAGE_CHANNEL_CALL),
        S = (0, j.Us)(),
        y = (0, o.bG)([m.A], () => m.A.getChatOpen(t.id), [t.id]),
        O = (0, o.bG)([w.A], () => w.A.getGuild(t.guild_id), [t.guild_id]);
    (0, p.Ay)(() => {
        null == c.w.get(ei) &&
            ((0, d.openModalLazy)(async () => {
                let { default: e } = await n.e("56016").then(n.bind(n, 456947));
                return (t) => (0, i.jsx)(e, { ...t });
            }),
            c.w.set(ei, Date.now()));
    });
    let { width: L = 0, ref: R } = (0, A.Ay)(),
        U = !T || S === J.BRT.POPOUT;
    return (0, i.jsx)(g.f5, {
        value: v,
        children: (0, i.jsxs)(f.qh, {
            children: [
                (0, i.jsxs)("div", {
                    className: en.kL,
                    ref: R,
                    children: [
                        (0, i.jsx)(u.N, {
                            theme: J.NJ8.DARK,
                            children: (e) =>
                                (0, i.jsx)("div", {
                                    className: s()(en.ik, e, { [en.pR]: r, [en.gy]: r || y }),
                                    children: (0, i.jsx)(I.Ay, {
                                        timeout: 2e3,
                                        children: (e) =>
                                            (0, i.jsx)(er, {
                                                channel: t,
                                                toggleRequestToSpeakSidebar: x,
                                                showRequestToSpeakSidebar: r,
                                                popoutWindow: E,
                                                popoutWindowAlwaysOnTop: b,
                                                popoutOpen: T,
                                                popoutType: a,
                                                chatOpen: y,
                                                idleProps: e,
                                            }),
                                    }),
                                }),
                        }),
                        r ? (0, i.jsx)(q.A, { channel: t, toggleRequestToSpeakSidebar: x, chatOpen: y }) : null,
                        (0, i.jsx)("div", {
                            className: en.B2,
                            children: y && U && (0, i.jsx)(C.A, { channel: t, guild: O, maxWidth: L - 550 }),
                        }),
                    ],
                }),
                (0, i.jsx)(f.WD, {}),
            ],
        }),
    });
}
