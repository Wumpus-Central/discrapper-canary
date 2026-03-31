n.d(t, { A: () => eL }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r),
    c = n(172218),
    d = n(311907),
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
    y = n(576437),
    v = n(688810),
    j = n(362490),
    R = n(429913),
    O = n(568598),
    L = n(384059),
    M = n(47167),
    D = n(402216),
    U = n(603047),
    G = n(404374),
    P = n(379848),
    k = n(625180),
    w = n(91242),
    B = n(596458),
    V = n(638934),
    H = n(15285),
    F = n(769015),
    K = n(334074),
    W = n(279250),
    Y = n(880144),
    z = n(277680),
    q = n(118277),
    X = n(905552),
    J = n(95035),
    Q = n(87001),
    $ = n(249972),
    Z = n(277009),
    ee = n(201805),
    et = n(95701),
    en = n(616356),
    ei = n(961350),
    el = n(734057),
    es = n(184989),
    ea = n(71393),
    er = n(430452),
    eo = n(576705),
    ec = n(290863),
    ed = n(994500),
    eu = n(309010),
    eh = n(287809),
    eA = n(157257),
    e_ = n(954571),
    em = n(975571),
    eg = n(723702),
    ep = n(498057),
    ef = n(994314),
    ex = n(485599),
    eE = n(204722),
    eI = n(535111),
    eC = n(652215),
    eN = n(5867),
    eT = n(49999),
    eS = n(165610),
    eb = n(9626),
    ey = n(985018),
    ev = n(852216);
function ej(e) {
    let {
            application: t,
            activity: n,
            embeddedActivity: l,
            runningGame: s,
            hasAlreadyLinked: a,
            didStartAuthorization: r,
            canStartAuthorization: c,
            startAuthorization: d,
            accountLinkUpsellTargetRef: _,
            inviteButtonRef: m,
            accountLinkButtonRef: p,
            gameCommunityGuildId: f,
            parentAnalyticsLocation: x,
            analyticsLocations: E,
            analyticsContext: I,
        } = e,
        { isQuestBarEmpty: C, hasLoadedQuestBar: N } = (0, ee.c9)(),
        T = ep.A.useConfig({ location: "ActivityPanelGameCard" }),
        S = !N || !C,
        b = (0, eE.W)(t, n, l),
        y = [],
        v = !1;
    S ||
        (a && r
            ? b && null == l
                ? y.push(u.M.ACCOUNT_LINK_INVITE_FRIENDS)
                : y.push(u.M.POST_ACCOUNT_CONNECTION_RTC_POPOVER)
            : !a && c && null != t && (v = !0),
        null != f && s?.id != null && s?.name != null && y.push(u.M.JOIN_GAME_COMMUNITY_RTC_CTA));
    let { shouldShow: j, markAsDismissed: R } = (0, K.A)({
        application: t,
        disabled: !v,
        dismissibleContent: u.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL,
        dismissibleContentGroupName: eT.m.ACCOUNT_NAME_ZONE,
        bypassAutoDismiss: !0,
    });
    return S
        ? null
        : (0, i.jsx)(P.Ay, {
              contentTypes: y,
              groupName: eT.m.ACCOUNT_NAME_ZONE,
              bypassAutoDismiss: !0,
              children: (e) => {
                  let { visibleContent: l, markAsDismissed: a } = e;
                  return l === u.M.ACCOUNT_LINK_INVITE_FRIENDS
                      ? (0, i.jsx)(A.AM, {
                            title: ey.intl.string(ey.t["0l2pEt"]),
                            body: ey.intl.string(ey.t["DSZUK/"]),
                            targetElementRef: m,
                            align: "right",
                            shouldShow: !0,
                            onRequestClose: () => a(eT.i.USER_DISMISS),
                            caretConfig: { align: "end" },
                            actions: [
                                {
                                    text: ey.intl.string(ey.t.YdkBCH),
                                    onClick: () => {
                                        a(eT.i.TAKE_ACTION),
                                            o()(null != n, "Received null activity"),
                                            e_.default.track(eC.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                                                action_type: "invite_to_game",
                                                game_id: s?.id ?? null,
                                                application_id: n.application_id,
                                            }),
                                            (0, L.X)(x, L.O.INVITE),
                                            e_.default.track(eC.HAw.OPEN_MODAL, {
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
                              title: ey.intl.string(ey.t.MxAlrB),
                              body: ey.intl.string(ey.t["/UTTEg"]),
                              targetElementRef: _,
                              position: "top",
                              align: "left",
                              caretConfig: { align: "start" },
                              actions: [
                                  {
                                      text: ey.intl.string(ey.t.aRIFWD),
                                      onClick: () => {
                                          a(eT.i.TAKE_ACTION),
                                              window.open(em.A.getArticleURL(eC.MVz.IN_GAME_FEATURES), "_blank");
                                      },
                                  },
                              ],
                              shouldShow: !0,
                              onRequestClose: () => a(eT.i.USER_DISMISS),
                          })
                        : j
                          ? (0, i.jsx)(A.AM, {
                                graphic: {
                                    type: "dynamic",
                                    component: h.DynamicGraphicComponent.ACCOUNT_LINK_DISPLAY,
                                    props: { application: t },
                                },
                                title: ey.intl.formatToPlainString(T.altTitle ? ey.t.hUbQT2 : ey.t["lo6H6+"], {
                                    gameName: t.name,
                                }),
                                body: ey.intl.string(T.altBody ? ey.t["JKqu+4"] : ey.t.qYAzOp),
                                targetElementRef: p,
                                align: "right",
                                shouldShow: !0,
                                gradientColor: "purple",
                                onRequestClose: () => R(eT.i.USER_DISMISS),
                                caretConfig: { align: "end" },
                                actions: [
                                    {
                                        text: ey.intl.string(T.altCta ? ey.t.jynBQ5 : ey.t.lw71Nf),
                                        onClick: () => {
                                            R(eT.i.TAKE_ACTION), d({ analyticsLocations: E });
                                        },
                                    },
                                ],
                            })
                          : l === u.M.JOIN_GAME_COMMUNITY_RTC_CTA && null != f && s?.id != null && s?.name != null
                            ? (0, i.jsx)(B.A, {
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
let eR = (0, x.A)(function (e) {
    let { message: t } = e;
    return (0, i.jsx)(ef.A, { children: t });
});
class eO extends l.PureComponent {
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
        return (0, i.jsx)(eE.f, { ...this.props, inviteButtonRef: this.inviteButtonRef });
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
            accountLinkButtonRef: c,
            parentAnalyticsLocation: d,
            analyticsLocations: u,
            gameCommunityGuildId: h,
            analyticsContext: A,
        } = this.props;
        return (0, i.jsx)(ej, {
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
            accountLinkButtonRef: c,
            gameCommunityGuildId: h,
            activityPopoutTargetRef: this.activityPopoutTargetRef,
            parentAnalyticsLocation: d,
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
        return (0, i.jsx)(eI.O, {
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
            { title: l, sanitizedTitle: s } = (0, z.A)(t);
        return (0, i.jsxs)("div", {
            className: ev.cm,
            ref: this.accountLinkUpsellTargetRef,
            children: [
                e
                    ? (0, i.jsx)(q.A, { title: s, icon: t?.sourceIcon })
                    : (0, i.jsx)(D.Ay, { look: D.Ay.Looks.GRAY, size: D.Ay.Sizes.SMALL, className: ev.Ok }),
                (0, i.jsxs)("div", {
                    className: ev.pq,
                    children: [
                        (0, i.jsx)(ex.A, { children: l }),
                        null != n &&
                            (0, i.jsxs)("div", {
                                className: ev.qi,
                                children: [
                                    (0, i.jsx)(_.tvc, { size: "xxs", color: G.k0.PREMIUM_TIER_2 }),
                                    (0, i.jsx)(Z.A, { className: ev.s, variant: "text-xxs/semibold", children: n }),
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
            f.A.channelListScrollTo(e.guild_id ?? eC.ME, e.id),
            !n &&
                ((0, et.gV)(e.type) &&
                    p.A.selectParticipant(
                        e.id,
                        (0, O.Qt)({ applicationId: t.applicationId, instanceId: t.compositeInstanceId }),
                    ),
                (0, et.pQ)(e.type) && (0, T.gk)(eN.Gd.PANEL));
    };
    handleFrameLinkClick = () => {
        let { frame: e, isActivityPopoutOpen: t } = this.props;
        (o()(null != e, "Frame cannot be null during navigation click"), t)
            ? m.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" })
            : k.A.updateFrameLayoutMode({ applicationId: e.applicationId, layoutMode: eS.y.FOCUSED });
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
        let c = { start: n.connectedSince },
            d = s;
        null != a && null != l
            ? ((e = eC.BVt.CHANNEL(a.id, l.id)), (d = `${d} / ${a.name}`))
            : null != l && (e = eC.BVt.CHANNEL(eC.ME, l.id));
        let u = (0, i.jsx)(J.A, {
                href: e,
                onClick: this.handleChannelLinkClick,
                children: (0, i.jsx)(ef.A, { className: ev.Ix, children: d }),
            }),
            h = (0, i.jsx)(J.A, {
                href: e,
                onClick: this.handleApplicationLinkClick,
                children: (0, i.jsx)(ex.A, { className: ev._W, children: t.name }),
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
                        isForceShowSharingPopout: r,
                        setIsForceShowSharingPopout: o,
                        children: (0, i.jsxs)("div", {
                            className: ev.pq,
                            children: [h, null != l && (0, et.pQ)(l.type) ? u : (0, i.jsx)(eR, { timestamps: c })],
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
                children: (0, i.jsx)(ex.A, { className: ev._W, children: e.name }),
            }),
            s = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(F.A, {
                        className: ev.Gt,
                        game: e,
                        size: F.M.SMALL,
                        ref: this.accountLinkUpsellTargetRef,
                    }),
                    (0, i.jsxs)("div", { className: ev.pq, children: [l, (0, i.jsx)(eR, { timestamps: n })] }),
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
            isStreaming: s,
            streamMetadata: r,
            application: o,
            activity: c,
            className: d,
        } = this.props;
        if (
            !s &&
            ((!(0, eE.W)(o, c, t) &&
                !(function (e) {
                    let { application: t, frame: n } = e;
                    return null != t && null != n && n.applicationId === t.id;
                })({ application: o, frame: n }) &&
                !e) ||
                (null == l && null == t && null == n))
        )
            return null;
        let u = () =>
            null == l || (s && r?.pid == null)
                ? null != t
                    ? this.renderEmbeddedActivity()
                    : null != n
                      ? this.renderFrame()
                      : this.renderScreenshare()
                : this.renderGame();
        return (0, i.jsx)("div", {
            className: a()(ev.nd, d),
            ref: this.activityPopoutTargetRef,
            children: (0, i.jsxs)("div", {
                className: ev.rf,
                children: [u(), this.renderActions(), this.renderDismissiblePopovers()],
            }),
        });
    }
}
let eL = (0, E.A)(function (e) {
    let { guildId: t, ...n } = e,
        s = (0, d.bG)([ei.default], () => ei.default.getId()),
        a = (0, d.bG)([H.Ay, eA.A], () => (0, X.A)(H.Ay, eA.A)),
        r = (0, d.bG)([eu.A, el.A], () => el.A.getChannel(eu.A.getVoiceChannelId())),
        o = (0, d.bG)([S.Ay], () => S.Ay.getConnectedActivityChannelId()),
        u = (0, d.bG)([el.A], () => el.A.getChannel(o)),
        h = (0, d.bG)([ea.A], () => ea.A.getGuild(u?.guild_id)),
        [A, _] = (0, d.yK)([en.A], () => [en.A.getCurrentUserActiveStream(), en.A.getStreamerActiveStreamMetadata()]),
        m = (0, d.bG)([C.A], () => C.A.useReducedMotion),
        g = (0, d.bG)([S.Ay], () => S.Ay.getCurrentEmbeddedActivity()),
        p = (0, d.bG)([w.A], () => w.A.getConnectedFrame()),
        f = (0, d.bG)([ea.A, eo.A], () => null == r || W.vz(r, ea.A, eo.A, !1)),
        [x] = (0, R.A)([
            (null != _ && null != _.id
                ? _.id
                : null != a && null != a.id
                  ? a.id
                  : null != g
                    ? g.applicationId
                    : null != p
                      ? p.applicationId
                      : void 0) ?? "",
        ]),
        E = (0, d.bG)([U.A], () => U.A.getFakeGameData()),
        T = (0, d.bG)([S.Ay], () => S.Ay.getCurrentEmbeddedActivity()),
        y = (0, b.u)() && null != T && (0, N.f)(),
        O = (0, d.bG)([er.Ay], () => (0, Y.A)(er.Ay) && (0, eg.isWindows)()),
        L = (0, d.bG)([ec.A], () => (null != s ? ec.A.findActivity(s, (e) => e.type === eC.$pd.PLAYING) : null)),
        D = null != A && A.ownerId === s && A.state !== eC.XYD.ENDED,
        G = (0, d.bG)([eh.default, ed.A], () => (null != u ? (0, M.m1)(u, eh.default, ed.A) : void 0)),
        P = (0, $.A)(),
        [k, B] = l.useState(!1),
        F = (0, d.bG)([Q.A], () => Q.A.getWindowOpen(eC.MLl.ACTIVITY_POPOUT)),
        { parentAnalyticsLocation: K, analyticsLocations: z } = (0, v.Ay)(),
        {
            hasAlreadyLinked: q,
            canStartAuthorization: J,
            connectionApp: Z,
            startAuthorization: ee,
        } = (0, j.RD)(x, { allowedFlows: [j._M.RPC, j._M.WEB] }),
        [et, em] = l.useState(!1),
        ep = (0, I.A)(x?.id);
    l.useEffect(() => {
        ep !== x?.id && em(!1);
    }, [x, ep, em]);
    let ef = (0, c.K)((e) => {
            e &&
                null != Z &&
                e_.default.track(eC.HAw.ACTIVITY_PANEL_SDK_LINK_VIEWED, {
                    game_id: a?.id ?? null,
                    application_id: Z.id,
                });
        }),
        { enabled: ex } = V.A.useConfig({ location: "ActivityPanelGameCard" }),
        eE = l.useMemo(() => (a?.id != null ? eb.g[a.id] : void 0), [a?.id]),
        eI = (0, d.bG)([es.A], () => null != eE && es.A.isMember(eE), [eE]),
        eN = ex && null != eE && !eI ? eE : void 0;
    return (0, i.jsx)(eO, {
        ...n,
        guildId: t,
        canGoLive: O || y || void 0 !== E,
        activity: L,
        embeddedActivity: g,
        frame: p,
        userId: s,
        runningGame: E ?? a,
        application: x,
        useReducedMotion: m,
        isStreaming: D,
        channel: u,
        canStream: f,
        stream: A,
        streamMetadata: _,
        channelName: G,
        guildForConnectedChannel: h,
        streamQualityIndicator: P,
        isForceShowSharingPopout: k,
        setIsForceShowSharingPopout: B,
        isActivityPopoutOpen: F,
        hasAlreadyLinked: q,
        parentAnalyticsLocation: K,
        analyticsLocations: z,
        canStartAuthorization: J,
        accountLinkButtonRef: ef,
        startAuthorization: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return em(!0), ee(...t);
        },
        didStartAuthorization: et,
        connectionApp: Z,
        gameCommunityGuildId: eN,
    });
});
