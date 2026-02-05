n.d(t, { A: () => ed, l: () => er });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(735438),
    o = n(311907),
    d = n(506774),
    c = n(397927),
    u = n(73153),
    h = n(765671),
    A = n(964486),
    g = n(793574),
    m = n(688810),
    p = n(313961),
    _ = n(520698),
    x = n(43189),
    f = n(518530),
    E = n(264250),
    C = n(261718),
    I = n(384059),
    S = n(267102),
    b = n(574172),
    N = n(869146),
    T = n(976860),
    j = n(993952),
    v = n(461782),
    y = n(20465),
    R = n(156652),
    O = n(128286),
    L = n(619344),
    D = n(821747),
    M = n(961350),
    G = n(249288),
    U = n(71393),
    P = n(576705),
    k = n(309010),
    w = n(723702),
    V = n(837921),
    B = n(323443),
    H = n(113783),
    F = n(69407),
    Y = n(446600),
    W = n(571909),
    K = n(374873),
    z = n(623413),
    X = n(707251),
    q = n(357819),
    J = n(717965),
    Q = n(895903),
    Z = n(542372),
    $ = n(533233),
    ee = n(652215),
    et = n(806931),
    en = n(985018),
    ei = n(105626);
let el = "HasBeenInStageChannel",
    es = (e) => {
        (0, I.X)(g.A.VOICE_CONTROL_TRAY, I.O.STAY_ON_TOP, e), b.setAlwaysOnTop(ee.MLl.CHANNEL_CALL_POPOUT, e);
    };
function ea(e) {
    let {
            channel: t,
            appContext: n,
            popoutOpen: s,
            popoutWindow: a,
            popoutWindowAlwaysOnTop: r,
            selectedParticipant: d,
        } = e,
        { parentAnalyticsLocation: c } = (0, m.Ay)(),
        h = t.getGuildId(),
        A = (0, o.bG)([k.A], () => k.A.getMostRecentSelectedTextChannelId(h), [h]),
        g = M.default.getId(),
        x =
            !(0, o.bG)([p.A], () => p.A.isFullscreenInContext(n)) &&
            (!w.isPlatformEmbedded || (w.isPlatformEmbedded && V.Ay.supportsFeature(ee.BYE.POPOUT_WINDOWS))),
        f = null != d && d.type !== et.lp.ACTIVITY && d.user.id !== g,
        E = l.useMemo(() => a?.window ?? window, [a]),
        C = (0, Z.A)({ channel: t, appContext: n, popoutOpen: s, popoutWindow: a, currentWindow: E }),
        S = n === ee.BRT.POPOUT && w.isPlatformEmbedded && V.Ay.supportsFeature(ee.BYE.POPOUT_WINDOWS);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            f
                ? (0, i.jsx)(D.A, {
                      context: (0, _.A)(d.type),
                      userId: d.user.id,
                      currentWindow: E,
                      sliderClassName: ei.MQ,
                      location: c,
                  })
                : null,
            S ? (0, i.jsx)(L.A, { popoutWindowAlwaysOnTop: r, onToggleStayOnTop: es }) : null,
            x
                ? (0, i.jsx)(O.A, {
                      popoutOpen: s,
                      onOpenPopout: () => {
                          (0, I.X)(c, I.O.POPOUT, !0),
                              (() => {
                                  let e = t.getGuildId();
                                  null != e && null != A && (0, T.uh)(e, A), b.openChannelCallPopout(t);
                              })();
                      },
                      onClosePopout: () => {
                          (0, I.X)(c, I.O.POPOUT, !1), u.h.wait(() => b.close(ee.MLl.CHANNEL_CALL_POPOUT));
                      },
                  })
                : null,
            C,
        ],
    });
}
function er(e) {
    let { channel: t } = e,
        n = (0, S.Us)(),
        l = (0, o.bG)([P.A], () => P.A.can(ee.xBc.CREATE_INSTANT_INVITE, t)),
        s = (0, o.bG)([U.A], () => U.A.getGuild(t.guild_id)),
        a = (0, o.bG)([Y.A], () => Y.A.getStageInstanceByChannel(t.id)),
        r = l || a?.invite_code != null;
    return null != s && r
        ? (0, i.jsx)(j.A, { size: "md", channel: t, appContext: n, analyticsLocation: ee.liQ.GUILD_CHANNEL })
        : null;
}
function eo(e) {
    let t,
        {
            channel: n,
            toggleRequestToSpeakSidebar: s,
            showRequestToSpeakSidebar: d,
            popoutWindow: c,
            popoutWindowAlwaysOnTop: u,
            popoutOpen: h,
            popoutType: A,
            chatOpen: _,
            idleProps: f,
        } = e,
        { analyticsLocations: E } = (0, m.Ay)(g.A.VOICE_CONTROL_TRAY),
        C = (0, S.Us)(),
        I = (0, o.bG)([k.A], () => k.A.getVoiceChannelId() === n.id, [n.id]),
        b = (0, o.bG)([P.A], () => P.A.can(ee.xBc.CONNECT, n)),
        N = (0, H.E5)(n.id, F.ip.SPEAKER),
        T = (0, o.bG)([p.A], () => p.A.getSelectedParticipant(n.id)),
        j = h && C !== ee.BRT.POPOUT,
        [v, O] = l.useState(0),
        L = l.useMemo(
            () =>
                (0, r.debounce)(
                    (e) => {
                        let { scrollTop: t } = e.target;
                        O(t);
                    },
                    1e3,
                    { leading: !0 },
                ),
            [],
        ),
        { isOnStartStageScreen: D } = (0, W.Ay)();
    (0, W.vI)(n);
    let M = (0, o.bG)([G.A], () => G.A.getToastsEnabled(n.id)),
        U = (0, $.A)(n) ? (null != T ? "84px" : "124px") : null != T ? "0px" : "48px";
    return (
        D && (U = "0px"),
        (t = D
            ? (0, i.jsx)(Q.A, {
                  channel: n,
                  onContinueClick: () => {
                      (0, W.ek)(!1), I || (0, B.cy)(n);
                  },
              })
            : I
              ? (0, i.jsx)(q.A, { channel: n, onScroll: L, popoutType: A })
              : (0, i.jsx)(z.A, { participants: N, channel: n, hasConnectPermission: b })),
        (0, i.jsx)(R.A, {
            style: { height: `calc(100% - ${U})`, paddingTop: U },
            disableGradients: !I || (0 === v && R.x.TOP),
            renderBottomCenter: () =>
                I
                    ? (0, i.jsx)(m.f5, { value: E, children: (0, i.jsx)(J.A, { channel: n, isOnStartStageScreen: D }) })
                    : null,
            renderBottomRight: () =>
                I
                    ? (0, i.jsx)(m.f5, {
                          value: E,
                          children: (0, i.jsx)(ea, {
                              channel: n,
                              appContext: C,
                              popoutOpen: h,
                              popoutWindow: c,
                              popoutWindowAlwaysOnTop: u,
                              selectedParticipant: T,
                          }),
                      })
                    : null,
            renderHeader: () =>
                (0, i.jsx)(X.A, { toggleRequestToSpeakSidebar: s, showRequestToSpeakSidebar: d, channel: n }),
            renderChatToasts: () =>
                !M || _ || j
                    ? null
                    : (0, i.jsx)(x.Ay, {
                          children: (0, i.jsx)(y.A, { className: a()(ei.T6, { [ei.c3]: d }), channelId: n.id }),
                      }),
            screenMessage: j ? { mainText: en.intl.string(en.t.J5bXZU) } : null,
            ...f,
            children: !j && t,
        })
    );
}
function ed(e) {
    let { channel: t, popoutType: s } = e,
        [r, u] = l.useState(!1),
        _ = l.useCallback(() => {
            u(!r);
        }, [r, u]),
        { popoutWindow: I, popoutWindowAlwaysOnTop: b } = (0, o.cf)([N.A], () => ({
            popoutWindow: N.A.getWindow(ee.MLl.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: N.A.getIsAlwaysOnTop(ee.MLl.CHANNEL_CALL_POPOUT),
        })),
        T = null != I && !I.closed,
        { analyticsLocations: j } = (0, m.Ay)(g.A.STAGE_CHANNEL_CALL),
        y = (0, S.Us)(),
        { chatOpen: R, participantsListOpen: O } = (0, o.cf)(
            [p.A],
            () => ({ chatOpen: p.A.getChatOpen(t.id), participantsListOpen: p.A.getParticipantsListOpen(t.id) }),
            [t.id],
        ),
        L = (0, o.bG)([U.A], () => U.A.getGuild(t.guild_id), [t.guild_id]),
        { hasParticipantsPanel: D } = (0, C.A)({ location: "StageChannelCall" });
    (0, A.Ay)(() => {
        null == d.w.get(el) &&
            ((0, c.mMO)(async () => {
                let { default: e } = await n.e("56016").then(n.bind(n, 456947));
                return (t) => (0, i.jsx)(e, { ...t });
            }),
            d.w.set(el, Date.now()));
    });
    let { width: M = 0, ref: G } = (0, h.Ay)(),
        P = M - 550,
        k = !T || (T && y === ee.BRT.POPOUT);
    return (0, i.jsx)(m.f5, {
        value: j,
        children: (0, i.jsxs)(x.qh, {
            children: [
                (0, i.jsxs)("div", {
                    className: ei.kL,
                    ref: G,
                    children: [
                        (0, i.jsx)(c.NPJ, {
                            theme: ee.NJ8.DARK,
                            children: (e) =>
                                (0, i.jsx)("div", {
                                    className: a()(ei.ik, e, { [ei.pR]: r, [ei.gy]: r || R || O }),
                                    children: (0, i.jsx)(v.Ay, {
                                        timeout: 2e3,
                                        children: (e) =>
                                            (0, i.jsx)(eo, {
                                                channel: t,
                                                toggleRequestToSpeakSidebar: _,
                                                showRequestToSpeakSidebar: r,
                                                popoutWindow: I,
                                                popoutWindowAlwaysOnTop: b,
                                                popoutOpen: T,
                                                popoutType: s,
                                                chatOpen: R,
                                                idleProps: e,
                                            }),
                                    }),
                                }),
                        }),
                        r ? (0, i.jsx)(K.A, { channel: t, toggleRequestToSpeakSidebar: _, chatOpen: R }) : null,
                        (0, i.jsxs)("div", {
                            className: ei.B2,
                            children: [
                                R && k && (0, i.jsx)(f.A, { channel: t, guild: L, maxWidth: P }),
                                O && D && k && (0, i.jsx)(E.A, { channel: t, maxWidth: P }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)(x.WD, {}),
            ],
        }),
    });
}
