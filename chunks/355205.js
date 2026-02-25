"use strict";
n.d(t, { A: () => eO }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(284009),
    o = n.n(a),
    c = n(172218),
    d = n(311907),
    u = n(554146),
    h = n(116833),
    A = n(342494),
    p = n(397927),
    g = n(73153),
    m = n(298990),
    _ = n(367513),
    f = n(951001),
    x = n(492684),
    C = n(707606),
    E = n(475743),
    I = n(775602),
    N = n(646865),
    b = n(795816),
    S = n(933958),
    T = n(47563),
    y = n(576437),
    v = n(688810),
    j = n(362490),
    R = n(429913),
    O = n(568598),
    L = n(384059),
    M = n(47167),
    D = n(402216),
    G = n(603047),
    U = n(404374),
    P = n(379848),
    w = n(625180),
    k = n(91242),
    V = n(596458),
    B = n(638934),
    H = n(15285),
    F = n(769015),
    K = n(279250),
    W = n(880144),
    Y = n(277680),
    z = n(118277),
    X = n(905552),
    q = n(95035),
    J = n(87001),
    Q = n(249972),
    $ = n(277009),
    Z = n(201805),
    ee = n(95701),
    et = n(616356),
    en = n(961350),
    ei = n(734057),
    es = n(184989),
    el = n(71393),
    er = n(430452),
    ea = n(576705),
    eo = n(290863),
    ec = n(994500),
    ed = n(309010),
    eu = n(287809),
    eh = n(157257),
    eA = n(954571),
    ep = n(975571),
    eg = n(723702),
    em = n(498057),
    e_ = n(994314),
    ef = n(485599),
    ex = n(204722),
    eC = n(535111),
    eE = n(652215),
    eI = n(5867),
    eN = n(49999),
    eb = n(165610),
    eS = n(9626),
    eT = n(654487),
    ey = n(985018),
    ev = n(424795);
let ej = (0, x.A)(function (e) {
    let { message: t } = e;
    return (0, i.jsx)(e_.A, { children: t });
});
class eR extends s.PureComponent {
    activityPopoutTargetRef = s.createRef();
    accountLinkUpsellTargetRef = s.createRef();
    inviteButtonRef = s.createRef();
    renderSparkles() {
        let { useReducedMotion: e } = this.props;
        async function t() {
            let { default: e } = await n.e("3408").then(n.t.bind(n, 707827, 19));
            return e;
        }
        return (0, i.jsx)("div", {
            className: ev.YX,
            children: (0, i.jsx)(p.akl, { importData: t, shouldAnimate: !e, className: ev._7 }),
        });
    }
    renderActions() {
        return (0, i.jsx)(ex.f, { ...this.props, inviteButtonRef: this.inviteButtonRef });
    }
    renderDismissiblePopovers() {
        let {
            hasAlreadyLinked: e,
            accountLinkCopyConfig: t,
            blockAccountLinkDismissibleContent: n,
            application: s,
            activity: l,
            embeddedActivity: r,
            analyticsContext: a,
            runningGame: c,
            parentAnalyticsLocation: d,
            analyticsLocations: p,
            canStartAuthorization: g,
            accountLinkButtonRef: _,
            startAuthorization: f,
            didStartAuthorization: x,
            gameCommunityGuildId: C,
        } = this.props;
        if (n) return null;
        let E = (0, ex.W)(s, l, r),
            I = [];
        return (
            e && x
                ? E && null == r
                    ? I.push(u.M.ACCOUNT_LINK_INVITE_FRIENDS)
                    : I.push(u.M.POST_ACCOUNT_CONNECTION_RTC_POPOVER)
                : g && null != s && I.push(u.M.ACCOUNT_LINK_PROMPT),
            null != C && c?.id != null && c?.name != null && I.push(u.M.JOIN_GAME_COMMUNITY_RTC_CTA),
            (0, i.jsx)(P.Ay, {
                contentTypes: I,
                groupName: eN.m.ACCOUNT_NAME_ZONE,
                bypassAutoDismiss: !0,
                children: (e) => {
                    let { visibleContent: n, markAsDismissed: r } = e;
                    return n === u.M.ACCOUNT_LINK_INVITE_FRIENDS
                        ? (0, i.jsx)(A.AM, {
                              title: ey.intl.string(ey.t["0l2pEt"]),
                              body: ey.intl.string(ey.t["DSZUK/"]),
                              targetElementRef: this.inviteButtonRef,
                              align: "right",
                              shouldShow: !0,
                              onRequestClose: () => r(eN.i.USER_DISMISS),
                              caretConfig: { align: "end" },
                              actions: [
                                  {
                                      text: ey.intl.string(ey.t.YdkBCH),
                                      onClick: () => {
                                          r(eN.i.TAKE_ACTION),
                                              o()(null != l, "Received null activity"),
                                              eA.default.track(eE.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                                                  action_type: "invite_to_game",
                                                  game_id: c?.id ?? null,
                                                  application_id: l.application_id,
                                              }),
                                              (0, L.X)(d, L.O.INVITE),
                                              eA.default.track(eE.HAw.OPEN_MODAL, {
                                                  type: "Send Join Invite",
                                                  application_id: l.application_id,
                                                  location: a.location,
                                              }),
                                              (0, m.qf)(l, !1);
                                      },
                                  },
                              ],
                          })
                        : n === u.M.POST_ACCOUNT_CONNECTION_RTC_POPOVER
                          ? (0, i.jsx)(A.AM, {
                                title: ey.intl.string(ey.t.MxAlrB),
                                body: ey.intl.string(ey.t["/UTTEg"]),
                                targetElementRef: this.accountLinkUpsellTargetRef,
                                position: "top",
                                align: "left",
                                caretConfig: { align: "start" },
                                actions: [
                                    {
                                        text: ey.intl.string(ey.t.aRIFWD),
                                        onClick: () => {
                                            r(eN.i.TAKE_ACTION),
                                                window.open(ep.A.getArticleURL(eE.MVz.IN_GAME_FEATURES), "_blank");
                                        },
                                    },
                                ],
                                shouldShow: !0,
                                onRequestClose: () => r(eN.i.USER_DISMISS),
                            })
                          : n === u.M.ACCOUNT_LINK_PROMPT
                            ? (0, i.jsx)(A.AM, {
                                  graphic: {
                                      type: "dynamic",
                                      component: h.DynamicGraphicComponent.ACCOUNT_LINK_DISPLAY,
                                      props: { application: s },
                                  },
                                  title: ey.intl.formatToPlainString(t.altTitle ? ey.t.hUbQT2 : ey.t["lo6H6+"], {
                                      gameName: s.name,
                                  }),
                                  body: ey.intl.string(t.altBody ? ey.t["JKqu+4"] : ey.t.qYAzOp),
                                  targetElementRef: _,
                                  align: "right",
                                  shouldShow: !0,
                                  gradientColor: "purple",
                                  onRequestClose: () => r(eN.i.USER_DISMISS),
                                  caretConfig: { align: "end" },
                                  actions: [
                                      {
                                          text: ey.intl.string(t.altCta ? ey.t.jynBQ5 : ey.t.lw71Nf),
                                          onClick: () => {
                                              r(eN.i.TAKE_ACTION), f({ analyticsLocations: p });
                                          },
                                      },
                                  ],
                              })
                            : n === u.M.JOIN_GAME_COMMUNITY_RTC_CTA && null != C && c?.id != null && c?.name != null
                              ? (0, i.jsx)(V.A, {
                                    targetElementRef: this.activityPopoutTargetRef,
                                    gameId: c.id,
                                    gameName: c.name,
                                    gameCommunityGuildId: C,
                                    markAsDismissed: r,
                                })
                              : void 0;
                },
            })
        );
    }
    renderGame() {
        let {
            isStreaming: e,
            application: t,
            runningGame: n,
            isForceShowSharingPopout: s,
            setIsForceShowSharingPopout: l,
        } = this.props;
        return (0, i.jsx)(eC.O, {
            isStreaming: e,
            application: t,
            game: n,
            onClickNotSharing: () => l(!0),
            isForceShowSharingPopout: s,
            setIsForceShowSharingPopout: l,
            ref: this.accountLinkUpsellTargetRef,
            popoutTargetRef: this.activityPopoutTargetRef,
        });
    }
    renderScreenshare() {
        let { isStreaming: e, streamMetadata: t, streamQualityIndicator: n } = this.props,
            { title: s, sanitizedTitle: l } = (0, Y.A)(t);
        return (0, i.jsxs)("div", {
            className: ev.cm,
            ref: this.accountLinkUpsellTargetRef,
            children: [
                e
                    ? (0, i.jsx)(z.A, { title: l, icon: t?.sourceIcon })
                    : (0, i.jsx)(D.Ay, { look: D.Ay.Looks.GRAY, size: D.Ay.Sizes.SMALL, className: ev.Ok }),
                (0, i.jsxs)("div", {
                    className: ev.pq,
                    children: [
                        (0, i.jsx)(ef.A, { children: s }),
                        null != n &&
                            (0, i.jsxs)("div", {
                                className: ev.qi,
                                children: [
                                    (0, i.jsx)(p.tvc, { size: "xxs", color: U.k0.PREMIUM_TIER_2 }),
                                    (0, i.jsx)($.A, { className: ev.s, variant: "text-xxs/semibold", children: n }),
                                ],
                            }),
                    ],
                }),
            ],
        });
    }
    handleApplicationLinkClick = () => {
        let { isActivityPopoutOpen: e } = this.props;
        this.handleChannelLinkClick(), e && g.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
    };
    handleChannelLinkClick = () => {
        let { channel: e, embeddedActivity: t, isActivityPopoutOpen: n } = this.props;
        o()(null != t, "Activity cannot be null during navigation click"),
            o()(null != e, "Channel cannot be null during navigation click"),
            f.A.channelListScrollTo(e.guild_id ?? eE.ME, e.id),
            !n &&
                ((0, ee.gV)(e.type) &&
                    _.A.selectParticipant(
                        e.id,
                        (0, O.Qt)({ applicationId: t.applicationId, instanceId: t.compositeInstanceId }),
                    ),
                (0, ee.pQ)(e.type) && (0, b.gk)(eI.Gd.PANEL));
    };
    handleFrameLinkClick = () => {
        let { frame: e, isActivityPopoutOpen: t } = this.props;
        (o()(null != e, "Frame cannot be null during navigation click"), t)
            ? g.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" })
            : w.A.updateFrameLayoutMode({ applicationId: e.applicationId, layoutMode: eb.y.FOCUSED });
    };
    renderEmbeddedActivity() {
        let e,
            {
                application: t,
                embeddedActivity: n,
                channel: s,
                channelName: l,
                guildForConnectedChannel: r,
                isForceShowSharingPopout: a,
                setIsForceShowSharingPopout: o,
            } = this.props;
        if (null == n || null == t) return null;
        let c = { start: n.connectedSince },
            d = l;
        null != r && null != s
            ? ((e = eE.BVt.CHANNEL(r.id, s.id)), (d = `${d} / ${r.name}`))
            : null != s && (e = eE.BVt.CHANNEL(eE.ME, s.id));
        let u = (0, i.jsx)(q.A, {
                href: e,
                onClick: this.handleChannelLinkClick,
                children: (0, i.jsx)(e_.A, { className: ev.Ix, children: d }),
            }),
            h = (0, i.jsx)(q.A, {
                href: e,
                onClick: this.handleApplicationLinkClick,
                children: (0, i.jsx)(ef.A, { className: ev._W, children: t.name }),
            }),
            A = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(F.A, {
                        className: ev.Gt,
                        game: t,
                        size: F.M.SMALL,
                        ref: this.accountLinkUpsellTargetRef,
                    }),
                    (0, i.jsx)(y.M, {
                        popoutTargetRef: this.activityPopoutTargetRef,
                        isForceShowSharingPopout: a,
                        setIsForceShowSharingPopout: o,
                        children: (0, i.jsxs)("div", {
                            className: ev.pq,
                            children: [h, null != s && (0, ee.pQ)(s.type) ? u : (0, i.jsx)(ej, { timestamps: c })],
                        }),
                    }),
                ],
            });
        return (0, i.jsx)("div", { className: ev.cm, children: A });
    }
    renderFrame() {
        let { application: e, frame: t } = this.props;
        if (null == t || null == e) return null;
        let n = { start: t.connectedSince },
            s = (0, i.jsx)(p.DUT, {
                onClick: this.handleFrameLinkClick,
                onMouseDown: (e) => {
                    e.stopPropagation();
                },
                className: ev.rB,
                children: (0, i.jsx)(ef.A, { className: ev._W, children: e.name }),
            }),
            l = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(F.A, {
                        className: ev.Gt,
                        game: e,
                        size: F.M.SMALL,
                        ref: this.accountLinkUpsellTargetRef,
                    }),
                    (0, i.jsxs)("div", { className: ev.pq, children: [s, (0, i.jsx)(ej, { timestamps: n })] }),
                ],
            });
        return (0, i.jsx)("div", { className: ev.cm, children: l });
    }
    render() {
        let {
            canGoLive: e,
            embeddedActivity: t,
            frame: n,
            runningGame: s,
            isStreaming: l,
            streamMetadata: a,
            application: o,
            activity: c,
            className: d,
        } = this.props;
        if (
            !l &&
            ((!(0, ex.W)(o, c, t) &&
                !(function (e) {
                    let { application: t, frame: n } = e;
                    return null != t && null != n && n.applicationId === t.id;
                })({ application: o, frame: n }) &&
                !e) ||
                (null == s && null == t && null == n))
        )
            return null;
        let u = () =>
            null == s || (l && a?.pid == null)
                ? null != t
                    ? this.renderEmbeddedActivity()
                    : null != n
                      ? this.renderFrame()
                      : this.renderScreenshare()
                : this.renderGame();
        return (0, i.jsx)("div", {
            className: r()(ev.nd, d),
            ref: this.activityPopoutTargetRef,
            children: (0, i.jsxs)("div", {
                className: ev.rf,
                children: [u(), this.renderActions(), this.renderDismissiblePopovers()],
            }),
        });
    }
}
let eO = (0, C.A)(function (e) {
    let { guildId: t, ...n } = e,
        l = (0, d.bG)([en.default], () => en.default.getId()),
        r = (0, d.bG)([H.Ay, eh.A], () => (0, X.A)(H.Ay, eh.A)),
        a = (0, d.bG)([ed.A, ei.A], () => ei.A.getChannel(ed.A.getVoiceChannelId())),
        o = (0, d.bG)([S.Ay], () => S.Ay.getConnectedActivityChannelId()),
        u = (0, d.bG)([ei.A], () => ei.A.getChannel(o)),
        h = (0, d.bG)([el.A], () => el.A.getGuild(u?.guild_id)),
        [A, p] = (0, d.yK)([et.A], () => [et.A.getCurrentUserActiveStream(), et.A.getStreamerActiveStreamMetadata()]),
        g = (0, d.bG)([I.A], () => I.A.useReducedMotion),
        m = (0, d.bG)([S.Ay], () => S.Ay.getCurrentEmbeddedActivity()),
        _ = (0, d.bG)([k.A], () => k.A.getConnectedFrame()),
        f = (0, d.bG)([el.A, ea.A], () => null == a || K.vz(a, el.A, ea.A, !1)),
        [x] = (0, R.A)([
            (null != p && null != p.id
                ? p.id
                : null != r && null != r.id
                  ? r.id
                  : null != m
                    ? m.applicationId
                    : null != _
                      ? _.applicationId
                      : void 0) ?? "",
        ]),
        C = (0, d.bG)([G.A], () => G.A.getFakeGameData()),
        b = (0, d.bG)([S.Ay], () => S.Ay.getCurrentEmbeddedActivity()),
        y = (0, T.u)() && null != b && (0, N.f)(),
        O = (0, d.bG)([er.Ay], () => (0, W.A)(er.Ay) && (0, eg.isWindows)()),
        L = (0, d.bG)([eo.A], () => (null != l ? eo.A.findActivity(l, (e) => e.type === eE.$pd.PLAYING) : null)),
        D = null != A && A.ownerId === l && A.state !== eE.XYD.ENDED,
        U = (0, d.bG)([eu.default, ec.A], () => (null != u ? (0, M.m1)(u, eu.default, ec.A) : void 0)),
        P = (0, Q.A)(),
        [w, V] = s.useState(!1),
        F = (0, d.bG)([J.A], () => J.A.getWindowOpen(eE.MLl.ACTIVITY_POPOUT)),
        {
            hasAlreadyLinked: Y,
            canStartAuthorization: z,
            connectionApp: q,
            startAuthorization: $,
        } = (0, j.RD)(x, { allowedFlows: [j._M.RPC, j._M.WEB] }),
        [ee, ep] = s.useState(!1),
        e_ = (0, E.A)(x?.id);
    s.useEffect(() => {
        e_ !== x?.id && ep(!1);
    }, [x, e_]);
    let { isQuestBarEmpty: ef, hasLoadedQuestBar: ex } = (0, Z.c9)({ location: eT.rE.CONFLICT_CHECKS }),
        { parentAnalyticsLocation: eC, analyticsLocations: eI } = (0, v.Ay)(),
        eN = em.A.useConfig({ location: "ActivityPanelGameCard" }),
        eb = (0, c.K)((e) => {
            e &&
                null != q &&
                eA.default.track(eE.HAw.ACTIVITY_PANEL_SDK_LINK_VIEWED, {
                    game_id: r?.id ?? null,
                    application_id: q.id,
                });
        }),
        { enabled: ey } = B.A.useConfig({ location: "ActivityPanelGameCard" }),
        ev = s.useMemo(() => (r?.id != null ? eS.g[r.id] : void 0), [r?.id]),
        ej = (0, d.bG)([es.A], () => null != ev && es.A.isMember(ev), [ev]),
        eO = ey && null != ev && !ej ? ev : void 0;
    return (0, i.jsx)(eR, {
        ...n,
        guildId: t,
        canGoLive: O || y || void 0 !== C,
        activity: L,
        embeddedActivity: m,
        frame: _,
        userId: l,
        runningGame: C ?? r,
        application: x,
        useReducedMotion: g,
        isStreaming: D,
        channel: u,
        canStream: f,
        stream: A,
        streamMetadata: p,
        channelName: U,
        guildForConnectedChannel: h,
        streamQualityIndicator: P,
        isForceShowSharingPopout: w,
        setIsForceShowSharingPopout: V,
        isActivityPopoutOpen: F,
        hasAlreadyLinked: Y,
        blockAccountLinkDismissibleContent: !ex || !ef,
        accountLinkCopyConfig: eN,
        parentAnalyticsLocation: eC,
        analyticsLocations: eI,
        canStartAuthorization: z,
        accountLinkButtonRef: eb,
        startAuthorization: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return ep(!0), $(...t);
        },
        didStartAuthorization: ee,
        connectionApp: q,
        gameCommunityGuildId: eO,
    });
});
