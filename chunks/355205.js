n.d(t, { A: () => eO }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r),
    d = n(172218),
    c = n(311907),
    u = n(554146),
    h = n(116833),
    A = n(342494),
    _ = n(397927),
    m = n(73153),
    g = n(298990),
    p = n(367513),
    f = n(951001),
    x = n(492684),
    E = n(707606),
    I = n(475743),
    C = n(775602),
    N = n(646865),
    T = n(795816),
    S = n(933958),
    b = n(47563),
    v = n(576437),
    y = n(688810),
    j = n(362490),
    R = n(429913),
    O = n(568598),
    L = n(384059),
    M = n(47167),
    D = n(402216),
    U = n(404374),
    G = n(379848),
    P = n(625180),
    k = n(91242),
    w = n(596458),
    B = n(638934),
    V = n(15285),
    H = n(769015),
    F = n(334074),
    W = n(279250),
    K = n(880144),
    Y = n(277680),
    z = n(118277),
    q = n(905552),
    X = n(95035),
    $ = n(87001),
    Q = n(249972),
    J = n(277009),
    Z = n(201805),
    ee = n(95701),
    et = n(616356),
    en = n(961350),
    ei = n(734057),
    el = n(184989),
    es = n(71393),
    ea = n(430452),
    er = n(576705),
    eo = n(290863),
    ed = n(994500),
    ec = n(309010),
    eu = n(287809),
    eh = n(157257),
    eA = n(954571),
    e_ = n(975571),
    em = n(723702),
    eg = n(498057),
    ep = n(994314),
    ef = n(485599),
    ex = n(204722),
    eE = n(535111),
    eI = n(652215),
    eC = n(5867),
    eN = n(49999),
    eT = n(165610),
    eS = n(9626),
    eb = n(985018),
    ev = n(852216);
function ey(e) {
    let {
            application: t,
            activity: n,
            embeddedActivity: l,
            runningGame: s,
            hasAlreadyLinked: a,
            didStartAuthorization: r,
            canStartAuthorization: d,
            startAuthorization: c,
            accountLinkUpsellTargetRef: _,
            inviteButtonRef: m,
            accountLinkButtonRef: p,
            gameCommunityGuildId: f,
            parentAnalyticsLocation: x,
            analyticsLocations: E,
            analyticsContext: I,
        } = e,
        { isQuestBarEmpty: C, hasLoadedQuestBar: N } = (0, Z.c9)(),
        T = eg.A.useConfig({ location: "ActivityPanelGameCard" }),
        S = !N || !C,
        b = (0, ex.W)(t, n, l),
        v = [],
        y = !1;
    S ||
        (a && r
            ? b && null == l
                ? v.push(u.M.ACCOUNT_LINK_INVITE_FRIENDS)
                : v.push(u.M.POST_ACCOUNT_CONNECTION_RTC_POPOVER)
            : !a && d && null != t && (y = !0),
        null != f && s?.id != null && s?.name != null && v.push(u.M.JOIN_GAME_COMMUNITY_RTC_CTA));
    let { shouldShow: j, markAsDismissed: R } = (0, F.A)({
        application: t,
        disabled: !y,
        dismissibleContent: u.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL,
        dismissibleContentGroupName: eN.m.ACCOUNT_NAME_ZONE,
        bypassAutoDismiss: !0,
    });
    return S
        ? null
        : (0, i.jsx)(G.Ay, {
              contentTypes: v,
              groupName: eN.m.ACCOUNT_NAME_ZONE,
              bypassAutoDismiss: !0,
              children: (e) => {
                  let { visibleContent: l, markAsDismissed: a } = e;
                  return l === u.M.ACCOUNT_LINK_INVITE_FRIENDS
                      ? (0, i.jsx)(A.AM, {
                            title: eb.intl.string(eb.t["0l2pEt"]),
                            body: eb.intl.string(eb.t["DSZUK/"]),
                            targetElementRef: m,
                            align: "right",
                            shouldShow: !0,
                            onRequestClose: () => a(eN.i.USER_DISMISS),
                            caretConfig: { align: "end" },
                            actions: [
                                {
                                    text: eb.intl.string(eb.t.YdkBCH),
                                    onClick: () => {
                                        a(eN.i.TAKE_ACTION),
                                            o()(null != n, "Received null activity"),
                                            eA.default.track(eI.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                                                action_type: "invite_to_game",
                                                game_id: s?.id ?? null,
                                                application_id: n.application_id,
                                            }),
                                            (0, L.X)(x, L.O.INVITE),
                                            eA.default.track(eI.HAw.OPEN_MODAL, {
                                                type: "Send Join Invite",
                                                application_id: n.application_id,
                                                location: I.location,
                                            }),
                                            (0, g.qf)(n, !1);
                                    },
                                },
                            ],
                        })
                      : l === u.M.POST_ACCOUNT_CONNECTION_RTC_POPOVER
                        ? (0, i.jsx)(A.AM, {
                              title: eb.intl.string(eb.t.MxAlrB),
                              body: eb.intl.string(eb.t["/UTTEg"]),
                              targetElementRef: _,
                              position: "top",
                              align: "left",
                              caretConfig: { align: "start" },
                              actions: [
                                  {
                                      text: eb.intl.string(eb.t.aRIFWD),
                                      onClick: () => {
                                          a(eN.i.TAKE_ACTION),
                                              window.open(e_.A.getArticleURL(eI.MVz.IN_GAME_FEATURES), "_blank");
                                      },
                                  },
                              ],
                              shouldShow: !0,
                              onRequestClose: () => a(eN.i.USER_DISMISS),
                          })
                        : j
                          ? (0, i.jsx)(A.AM, {
                                graphic: {
                                    type: "dynamic",
                                    component: h.DynamicGraphicComponent.ACCOUNT_LINK_DISPLAY,
                                    props: { application: t },
                                },
                                title: eb.intl.formatToPlainString(T.altTitle ? eb.t.hUbQT2 : eb.t["lo6H6+"], {
                                    gameName: t.name,
                                }),
                                body: eb.intl.string(T.altBody ? eb.t["JKqu+4"] : eb.t.qYAzOp),
                                targetElementRef: p,
                                align: "right",
                                shouldShow: !0,
                                gradientColor: "purple",
                                onRequestClose: () => R(eN.i.USER_DISMISS),
                                caretConfig: { align: "end" },
                                actions: [
                                    {
                                        text: eb.intl.string(T.altCta ? eb.t.jynBQ5 : eb.t.lw71Nf),
                                        onClick: () => {
                                            R(eN.i.TAKE_ACTION), c({ analyticsLocations: E });
                                        },
                                    },
                                ],
                            })
                          : l === u.M.JOIN_GAME_COMMUNITY_RTC_CTA && null != f && s?.id != null && s?.name != null
                            ? (0, i.jsx)(w.A, {
                                  targetElementRef: _,
                                  gameId: s.id,
                                  gameName: s.name,
                                  gameCommunityGuildId: f,
                                  markAsDismissed: a,
                              })
                            : void 0;
              },
          });
}
let ej = (0, x.A)(function (e) {
    let { message: t } = e;
    return (0, i.jsx)(ep.A, { children: t });
});
class eR extends l.PureComponent {
    activityPopoutTargetRef = l.createRef();
    accountLinkUpsellTargetRef = l.createRef();
    inviteButtonRef = l.createRef();
    renderSparkles() {
        let { useReducedMotion: e } = this.props;
        async function t() {
            let { default: e } = await n.e("3408").then(n.t.bind(n, 707827, 19));
            return e;
        }
        return (0, i.jsx)("div", {
            className: ev.YX,
            children: (0, i.jsx)(_.akl, { importData: t, shouldAnimate: !e, className: ev._7 }),
        });
    }
    renderActions() {
        return (0, i.jsx)(ex.f, { ...this.props, inviteButtonRef: this.inviteButtonRef });
    }
    renderDismissiblePopovers() {
        let {
            application: e,
            activity: t,
            embeddedActivity: n,
            runningGame: l,
            hasAlreadyLinked: s,
            didStartAuthorization: a,
            canStartAuthorization: r,
            startAuthorization: o,
            accountLinkButtonRef: d,
            parentAnalyticsLocation: c,
            analyticsLocations: u,
            gameCommunityGuildId: h,
            analyticsContext: A,
        } = this.props;
        return (0, i.jsx)(ey, {
            application: e,
            activity: t,
            embeddedActivity: n,
            runningGame: l,
            hasAlreadyLinked: s,
            didStartAuthorization: a,
            canStartAuthorization: r,
            startAuthorization: o,
            accountLinkUpsellTargetRef: this.accountLinkUpsellTargetRef,
            inviteButtonRef: this.inviteButtonRef,
            accountLinkButtonRef: d,
            gameCommunityGuildId: h,
            activityPopoutTargetRef: this.activityPopoutTargetRef,
            parentAnalyticsLocation: c,
            analyticsLocations: u,
            analyticsContext: A,
        });
    }
    renderGame() {
        let {
            isStreaming: e,
            application: t,
            runningGame: n,
            isForceShowSharingPopout: l,
            setIsForceShowSharingPopout: s,
        } = this.props;
        return (0, i.jsx)(eE.O, {
            isStreaming: e,
            application: t,
            game: n,
            onClickNotSharing: () => s(!0),
            isForceShowSharingPopout: l,
            setIsForceShowSharingPopout: s,
            ref: this.accountLinkUpsellTargetRef,
            popoutTargetRef: this.activityPopoutTargetRef,
        });
    }
    renderScreenshare() {
        let { isStreaming: e, streamMetadata: t, streamQualityIndicator: n } = this.props,
            { title: l, sanitizedTitle: s } = (0, Y.A)(t);
        return (0, i.jsxs)("div", {
            className: ev.cm,
            ref: this.accountLinkUpsellTargetRef,
            children: [
                e
                    ? (0, i.jsx)(z.A, { title: s, icon: t?.sourceIcon })
                    : (0, i.jsx)(D.Ay, { look: D.Ay.Looks.GRAY, size: D.Ay.Sizes.SMALL, className: ev.Ok }),
                (0, i.jsxs)("div", {
                    className: ev.pq,
                    children: [
                        (0, i.jsx)(ef.A, { children: l }),
                        null != n &&
                            (0, i.jsxs)("div", {
                                className: ev.qi,
                                children: [
                                    (0, i.jsx)(_.tvc, { size: "xxs", color: U.k0.PREMIUM_TIER_2 }),
                                    (0, i.jsx)(J.A, { className: ev.s, variant: "text-xxs/semibold", children: n }),
                                ],
                            }),
                    ],
                }),
            ],
        });
    }
    handleApplicationLinkClick = () => {
        let { isActivityPopoutOpen: e } = this.props;
        this.handleChannelLinkClick(), e && m.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
    };
    handleChannelLinkClick = () => {
        let { channel: e, embeddedActivity: t, isActivityPopoutOpen: n } = this.props;
        o()(null != t, "Activity cannot be null during navigation click"),
            o()(null != e, "Channel cannot be null during navigation click"),
            f.A.channelListScrollTo(e.guild_id ?? eI.ME, e.id),
            !n &&
                ((0, ee.gV)(e.type) &&
                    p.A.selectParticipant(
                        e.id,
                        (0, O.Qt)({ applicationId: t.applicationId, instanceId: t.compositeInstanceId }),
                    ),
                (0, ee.pQ)(e.type) && (0, T.gk)(eC.Gd.PANEL));
    };
    handleFrameLinkClick = () => {
        let { frame: e, isActivityPopoutOpen: t } = this.props;
        (o()(null != e, "Frame cannot be null during navigation click"), t)
            ? m.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" })
            : P.A.updateFrameLayoutMode({ applicationId: e.applicationId, layoutMode: eT.y.FOCUSED });
    };
    renderEmbeddedActivity() {
        let e,
            {
                application: t,
                embeddedActivity: n,
                channel: l,
                channelName: s,
                guildForConnectedChannel: a,
                isForceShowSharingPopout: r,
                setIsForceShowSharingPopout: o,
            } = this.props;
        if (null == n || null == t) return null;
        let d = { start: n.connectedSince },
            c = s;
        null != a && null != l
            ? ((e = eI.BVt.CHANNEL(a.id, l.id)), (c = `${c} / ${a.name}`))
            : null != l && (e = eI.BVt.CHANNEL(eI.ME, l.id));
        let u = (0, i.jsx)(X.A, {
                href: e,
                onClick: this.handleChannelLinkClick,
                children: (0, i.jsx)(ep.A, { className: ev.Ix, children: c }),
            }),
            h = (0, i.jsx)(X.A, {
                href: e,
                onClick: this.handleApplicationLinkClick,
                children: (0, i.jsx)(ef.A, { className: ev._W, children: t.name }),
            }),
            A = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(H.A, {
                        className: ev.Gt,
                        game: t,
                        size: H.M.SMALL,
                        ref: this.accountLinkUpsellTargetRef,
                    }),
                    (0, i.jsx)(v.M, {
                        popoutTargetRef: this.activityPopoutTargetRef,
                        isForceShowSharingPopout: r,
                        setIsForceShowSharingPopout: o,
                        children: (0, i.jsxs)("div", {
                            className: ev.pq,
                            children: [h, null != l && (0, ee.pQ)(l.type) ? u : (0, i.jsx)(ej, { timestamps: d })],
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
            l = (0, i.jsx)(_.DUT, {
                onClick: this.handleFrameLinkClick,
                onMouseDown: (e) => {
                    e.stopPropagation();
                },
                className: ev.rB,
                children: (0, i.jsx)(ef.A, { className: ev._W, children: e.name }),
            }),
            s = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(H.A, {
                        className: ev.Gt,
                        game: e,
                        size: H.M.SMALL,
                        ref: this.accountLinkUpsellTargetRef,
                    }),
                    (0, i.jsxs)("div", { className: ev.pq, children: [l, (0, i.jsx)(ej, { timestamps: n })] }),
                ],
            });
        return (0, i.jsx)("div", { className: ev.cm, children: s });
    }
    render() {
        let {
            canGoLive: e,
            embeddedActivity: t,
            frame: n,
            runningGame: l,
            debugRunningGame: s,
            isStreaming: r,
            streamMetadata: o,
            application: d,
            activity: c,
            className: u,
        } = this.props;
        if (
            !r &&
            ((!(0, ex.W)(d, c, t) &&
                !(function (e) {
                    let { application: t, frame: n } = e;
                    return null != t && null != n && n.applicationId === t.id;
                })({ application: d, frame: n }) &&
                !e &&
                null == s) ||
                (null == l && null == t && null == n))
        )
            return null;
        let h = () =>
            null == l || (r && o?.pid == null)
                ? null != t
                    ? this.renderEmbeddedActivity()
                    : null != n
                      ? this.renderFrame()
                      : this.renderScreenshare()
                : this.renderGame();
        return (0, i.jsx)("div", {
            className: a()(ev.nd, u),
            ref: this.activityPopoutTargetRef,
            children: (0, i.jsxs)("div", {
                className: ev.rf,
                children: [h(), this.renderActions(), this.renderDismissiblePopovers()],
            }),
        });
    }
}
let eO = (0, E.A)(function (e) {
    let { guildId: t, ...n } = e,
        s = (0, c.bG)([en.default], () => en.default.getId()),
        a = (0, c.bG)([V.Ay, eh.A], () => (0, q.A)(V.Ay, eh.A)),
        r = (0, c.bG)([V.Ay], () => V.Ay.getDebugRunningGame()),
        o = (0, c.bG)([ec.A, ei.A], () => ei.A.getChannel(ec.A.getVoiceChannelId())),
        u = (0, c.bG)([S.Ay], () => S.Ay.getConnectedActivityChannelId()),
        h = (0, c.bG)([ei.A], () => ei.A.getChannel(u)),
        A = (0, c.bG)([es.A], () => es.A.getGuild(h?.guild_id)),
        [_, m] = (0, c.yK)([et.A], () => [et.A.getCurrentUserActiveStream(), et.A.getStreamerActiveStreamMetadata()]),
        g = (0, c.bG)([C.A], () => C.A.useReducedMotion),
        p = (0, c.bG)([S.Ay], () => S.Ay.getCurrentEmbeddedActivity()),
        f = (0, c.bG)([k.A], () => k.A.getConnectedFrame()),
        x = (0, c.bG)([es.A, er.A], () => null == o || W.vz(o, es.A, er.A, !1)),
        [E] = (0, R.A)([
            (null != m && null != m.id
                ? m.id
                : null != a && null != a.id
                  ? a.id
                  : null != p
                    ? p.applicationId
                    : null != f
                      ? f.applicationId
                      : void 0) ?? "",
        ]),
        T = (0, c.bG)([S.Ay], () => S.Ay.getCurrentEmbeddedActivity()),
        v = (0, b.u)() && null != T && (0, N.f)(),
        O = (0, c.bG)([ea.Ay], () => (0, K.A)(ea.Ay) && (0, em.isWindows)()),
        L = (0, c.bG)([eo.A], () => (null != s ? eo.A.findActivity(s, (e) => e.type === eI.$pd.PLAYING) : null)),
        D = null != _ && _.ownerId === s && _.state !== eI.XYD.ENDED,
        U = (0, c.bG)([eu.default, ed.A], () => (null != h ? (0, M.m1)(h, eu.default, ed.A) : void 0)),
        G = (0, Q.A)(),
        [P, w] = l.useState(!1),
        H = (0, c.bG)([$.A], () => $.A.getWindowOpen(eI.MLl.ACTIVITY_POPOUT)),
        { parentAnalyticsLocation: F, analyticsLocations: Y } = (0, y.Ay)(),
        {
            hasAlreadyLinked: z,
            canStartAuthorization: X,
            connectionApp: J,
            startAuthorization: Z,
        } = (0, j.RD)(E, { allowedFlows: [j._M.RPC, j._M.WEB] }),
        [ee, e_] = l.useState(!1),
        eg = (0, I.A)(E?.id);
    l.useEffect(() => {
        eg !== E?.id && e_(!1);
    }, [E, eg, e_]);
    let ep = (0, d.K)((e) => {
            e &&
                null != J &&
                eA.default.track(eI.HAw.ACTIVITY_PANEL_SDK_LINK_VIEWED, {
                    game_id: a?.id ?? null,
                    application_id: J.id,
                });
        }),
        { enabled: ef } = B.A.useConfig({ location: "ActivityPanelGameCard" }),
        ex = l.useMemo(() => (a?.id != null ? eS.g[a.id] : void 0), [a?.id]),
        eE = (0, c.bG)([el.A], () => null != ex && el.A.isMember(ex), [ex]),
        eC = ef && null != ex && !eE ? ex : void 0;
    return (0, i.jsx)(eR, {
        ...n,
        guildId: t,
        canGoLive: O || v,
        activity: L,
        embeddedActivity: p,
        frame: f,
        userId: s,
        runningGame: a,
        debugRunningGame: r,
        application: E,
        useReducedMotion: g,
        isStreaming: D,
        channel: h,
        canStream: x,
        stream: _,
        streamMetadata: m,
        channelName: U,
        guildForConnectedChannel: A,
        streamQualityIndicator: G,
        isForceShowSharingPopout: P,
        setIsForceShowSharingPopout: w,
        isActivityPopoutOpen: H,
        hasAlreadyLinked: z,
        parentAnalyticsLocation: F,
        analyticsLocations: Y,
        canStartAuthorization: X,
        accountLinkButtonRef: ep,
        startAuthorization: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return e_(!0), Z(...t);
        },
        didStartAuthorization: ee,
        connectionApp: J,
        gameCommunityGuildId: eC,
    });
});
