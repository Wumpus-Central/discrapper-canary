"use strict";
n.d(t, { A: () => eL }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(284009),
    o = n.n(r),
    c = n(172218),
    d = n(311907),
    u = n(554146),
    h = n(116833),
    A = n(342494),
    m = n(397927),
    _ = n(73153),
    p = n(298990),
    g = n(367513),
    f = n(951001),
    x = n(492684),
    E = n(707606),
    C = n(475743),
    I = n(775602),
    N = n(646865),
    b = n(795816),
    S = n(933958),
    T = n(47563),
    v = n(576437),
    y = n(688810),
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
    es = n(734057),
    el = n(184989),
    ea = n(71393),
    er = n(430452),
    eo = n(576705),
    ec = n(290863),
    ed = n(994500),
    eu = n(309010),
    eh = n(287809),
    eA = n(157257),
    em = n(954571),
    e_ = n(975571),
    ep = n(723702),
    eg = n(498057),
    ef = n(994314),
    ex = n(485599),
    eE = n(204722),
    eC = n(535111),
    eI = n(652215),
    eN = n(5867),
    eb = n(49999),
    eS = n(165610),
    eT = n(9626),
    ev = n(985018),
    ey = n(852216);
function ej(e) {
    let {
            application: t,
            activity: n,
            embeddedActivity: s,
            runningGame: l,
            hasAlreadyLinked: a,
            didStartAuthorization: r,
            canStartAuthorization: c,
            startAuthorization: d,
            accountLinkUpsellTargetRef: m,
            inviteButtonRef: _,
            accountLinkButtonRef: g,
            gameCommunityGuildId: f,
            parentAnalyticsLocation: x,
            analyticsLocations: E,
            analyticsContext: C,
        } = e,
        { isQuestBarEmpty: I, hasLoadedQuestBar: N } = (0, ee.c9)(),
        b = eg.A.useConfig({ location: "ActivityPanelGameCard" }),
        S = !N || !I,
        T = (0, eE.W)(t, n, s),
        v = [],
        y = !1;
    S ||
        (a && r
            ? T && null == s
                ? v.push(u.M.ACCOUNT_LINK_INVITE_FRIENDS)
                : v.push(u.M.POST_ACCOUNT_CONNECTION_RTC_POPOVER)
            : !a && c && null != t && (y = !0),
        null != f && l?.id != null && l?.name != null && v.push(u.M.JOIN_GAME_COMMUNITY_RTC_CTA));
    let { shouldShow: j, markAsDismissed: R } = (0, K.A)({
        application: t,
        disabled: !y,
        dismissibleContent: u.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL,
        dismissibleContentGroupName: eb.m.ACCOUNT_NAME_ZONE,
        bypassAutoDismiss: !0,
    });
    return S
        ? null
        : (0, i.jsx)(P.Ay, {
              contentTypes: v,
              groupName: eb.m.ACCOUNT_NAME_ZONE,
              bypassAutoDismiss: !0,
              children: (e) => {
                  let { visibleContent: s, markAsDismissed: a } = e;
                  return s === u.M.ACCOUNT_LINK_INVITE_FRIENDS
                      ? (0, i.jsx)(A.AM, {
                            title: ev.intl.string(ev.t["0l2pEt"]),
                            body: ev.intl.string(ev.t["DSZUK/"]),
                            targetElementRef: _,
                            align: "right",
                            shouldShow: !0,
                            onRequestClose: () => a(eb.i.USER_DISMISS),
                            caretConfig: { align: "end" },
                            actions: [
                                {
                                    text: ev.intl.string(ev.t.YdkBCH),
                                    onClick: () => {
                                        a(eb.i.TAKE_ACTION),
                                            o()(null != n, "Received null activity"),
                                            em.default.track(eI.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                                                action_type: "invite_to_game",
                                                game_id: l?.id ?? null,
                                                application_id: n.application_id,
                                            }),
                                            (0, L.X)(x, L.O.INVITE),
                                            em.default.track(eI.HAw.OPEN_MODAL, {
                                                type: "Send Join Invite",
                                                application_id: n.application_id,
                                                location: C.location,
                                            }),
                                            (0, p.qf)(n, !1);
                                    },
                                },
                            ],
                        })
                      : s === u.M.POST_ACCOUNT_CONNECTION_RTC_POPOVER
                        ? (0, i.jsx)(A.AM, {
                              title: ev.intl.string(ev.t.MxAlrB),
                              body: ev.intl.string(ev.t["/UTTEg"]),
                              targetElementRef: m,
                              position: "top",
                              align: "left",
                              caretConfig: { align: "start" },
                              actions: [
                                  {
                                      text: ev.intl.string(ev.t.aRIFWD),
                                      onClick: () => {
                                          a(eb.i.TAKE_ACTION),
                                              window.open(e_.A.getArticleURL(eI.MVz.IN_GAME_FEATURES), "_blank");
                                      },
                                  },
                              ],
                              shouldShow: !0,
                              onRequestClose: () => a(eb.i.USER_DISMISS),
                          })
                        : j
                          ? (0, i.jsx)(A.AM, {
                                graphic: {
                                    type: "dynamic",
                                    component: h.DynamicGraphicComponent.ACCOUNT_LINK_DISPLAY,
                                    props: { application: t },
                                },
                                title: ev.intl.formatToPlainString(b.altTitle ? ev.t.hUbQT2 : ev.t["lo6H6+"], {
                                    gameName: t.name,
                                }),
                                body: ev.intl.string(b.altBody ? ev.t["JKqu+4"] : ev.t.qYAzOp),
                                targetElementRef: g,
                                align: "right",
                                shouldShow: !0,
                                gradientColor: "purple",
                                onRequestClose: () => R(eb.i.USER_DISMISS),
                                caretConfig: { align: "end" },
                                actions: [
                                    {
                                        text: ev.intl.string(b.altCta ? ev.t.jynBQ5 : ev.t.lw71Nf),
                                        onClick: () => {
                                            R(eb.i.TAKE_ACTION), d({ analyticsLocations: E });
                                        },
                                    },
                                ],
                            })
                          : s === u.M.JOIN_GAME_COMMUNITY_RTC_CTA && null != f && l?.id != null && l?.name != null
                            ? (0, i.jsx)(V.A, {
                                  targetElementRef: m,
                                  gameId: l.id,
                                  gameName: l.name,
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
class eO extends s.PureComponent {
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
            className: ey.YX,
            children: (0, i.jsx)(m.akl, { importData: t, shouldAnimate: !e, className: ey._7 }),
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
            runningGame: s,
            hasAlreadyLinked: l,
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
            runningGame: s,
            hasAlreadyLinked: l,
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
            { title: s, sanitizedTitle: l } = (0, z.A)(t);
        return (0, i.jsxs)("div", {
            className: ey.cm,
            ref: this.accountLinkUpsellTargetRef,
            children: [
                e
                    ? (0, i.jsx)(q.A, { title: l, icon: t?.sourceIcon })
                    : (0, i.jsx)(D.Ay, { look: D.Ay.Looks.GRAY, size: D.Ay.Sizes.SMALL, className: ey.Ok }),
                (0, i.jsxs)("div", {
                    className: ey.pq,
                    children: [
                        (0, i.jsx)(ex.A, { children: s }),
                        null != n &&
                            (0, i.jsxs)("div", {
                                className: ey.qi,
                                children: [
                                    (0, i.jsx)(m.tvc, { size: "xxs", color: U.k0.PREMIUM_TIER_2 }),
                                    (0, i.jsx)(Z.A, { className: ey.s, variant: "text-xxs/semibold", children: n }),
                                ],
                            }),
                    ],
                }),
            ],
        });
    }
    handleApplicationLinkClick = () => {
        let { isActivityPopoutOpen: e } = this.props;
        this.handleChannelLinkClick(), e && _.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
    };
    handleChannelLinkClick = () => {
        let { channel: e, embeddedActivity: t, isActivityPopoutOpen: n } = this.props;
        o()(null != t, "Activity cannot be null during navigation click"),
            o()(null != e, "Channel cannot be null during navigation click"),
            f.A.channelListScrollTo(e.guild_id ?? eI.ME, e.id),
            !n &&
                ((0, et.gV)(e.type) &&
                    g.A.selectParticipant(
                        e.id,
                        (0, O.Qt)({ applicationId: t.applicationId, instanceId: t.compositeInstanceId }),
                    ),
                (0, et.pQ)(e.type) && (0, b.gk)(eN.Gd.PANEL));
    };
    handleFrameLinkClick = () => {
        let { frame: e, isActivityPopoutOpen: t } = this.props;
        (o()(null != e, "Frame cannot be null during navigation click"), t)
            ? _.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" })
            : w.A.updateFrameLayoutMode({ applicationId: e.applicationId, layoutMode: eS.y.FOCUSED });
    };
    renderEmbeddedActivity() {
        let e,
            {
                application: t,
                embeddedActivity: n,
                channel: s,
                channelName: l,
                guildForConnectedChannel: a,
                isForceShowSharingPopout: r,
                setIsForceShowSharingPopout: o,
            } = this.props;
        if (null == n || null == t) return null;
        let c = { start: n.connectedSince },
            d = l;
        null != a && null != s
            ? ((e = eI.BVt.CHANNEL(a.id, s.id)), (d = `${d} / ${a.name}`))
            : null != s && (e = eI.BVt.CHANNEL(eI.ME, s.id));
        let u = (0, i.jsx)(J.A, {
                href: e,
                onClick: this.handleChannelLinkClick,
                children: (0, i.jsx)(ef.A, { className: ey.Ix, children: d }),
            }),
            h = (0, i.jsx)(J.A, {
                href: e,
                onClick: this.handleApplicationLinkClick,
                children: (0, i.jsx)(ex.A, { className: ey._W, children: t.name }),
            }),
            A = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(F.A, {
                        className: ey.Gt,
                        game: t,
                        size: F.M.SMALL,
                        ref: this.accountLinkUpsellTargetRef,
                    }),
                    (0, i.jsx)(v.M, {
                        popoutTargetRef: this.activityPopoutTargetRef,
                        isForceShowSharingPopout: r,
                        setIsForceShowSharingPopout: o,
                        children: (0, i.jsxs)("div", {
                            className: ey.pq,
                            children: [h, null != s && (0, et.pQ)(s.type) ? u : (0, i.jsx)(eR, { timestamps: c })],
                        }),
                    }),
                ],
            });
        return (0, i.jsx)("div", { className: ey.cm, children: A });
    }
    renderFrame() {
        let { application: e, frame: t } = this.props;
        if (null == t || null == e) return null;
        let n = { start: t.connectedSince },
            s = (0, i.jsx)(m.DUT, {
                onClick: this.handleFrameLinkClick,
                onMouseDown: (e) => {
                    e.stopPropagation();
                },
                className: ey.rB,
                children: (0, i.jsx)(ex.A, { className: ey._W, children: e.name }),
            }),
            l = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(F.A, {
                        className: ey.Gt,
                        game: e,
                        size: F.M.SMALL,
                        ref: this.accountLinkUpsellTargetRef,
                    }),
                    (0, i.jsxs)("div", { className: ey.pq, children: [s, (0, i.jsx)(eR, { timestamps: n })] }),
                ],
            });
        return (0, i.jsx)("div", { className: ey.cm, children: l });
    }
    render() {
        let {
            canGoLive: e,
            embeddedActivity: t,
            frame: n,
            runningGame: s,
            isStreaming: l,
            streamMetadata: r,
            application: o,
            activity: c,
            className: d,
        } = this.props;
        if (
            !l &&
            ((!(0, eE.W)(o, c, t) &&
                !(function (e) {
                    let { application: t, frame: n } = e;
                    return null != t && null != n && n.applicationId === t.id;
                })({ application: o, frame: n }) &&
                !e) ||
                (null == s && null == t && null == n))
        )
            return null;
        let u = () =>
            null == s || (l && r?.pid == null)
                ? null != t
                    ? this.renderEmbeddedActivity()
                    : null != n
                      ? this.renderFrame()
                      : this.renderScreenshare()
                : this.renderGame();
        return (0, i.jsx)("div", {
            className: a()(ey.nd, d),
            ref: this.activityPopoutTargetRef,
            children: (0, i.jsxs)("div", {
                className: ey.rf,
                children: [u(), this.renderActions(), this.renderDismissiblePopovers()],
            }),
        });
    }
}
let eL = (0, E.A)(function (e) {
    let { guildId: t, ...n } = e,
        l = (0, d.bG)([ei.default], () => ei.default.getId()),
        a = (0, d.bG)([H.Ay, eA.A], () => (0, X.A)(H.Ay, eA.A)),
        r = (0, d.bG)([eu.A, es.A], () => es.A.getChannel(eu.A.getVoiceChannelId())),
        o = (0, d.bG)([S.Ay], () => S.Ay.getConnectedActivityChannelId()),
        u = (0, d.bG)([es.A], () => es.A.getChannel(o)),
        h = (0, d.bG)([ea.A], () => ea.A.getGuild(u?.guild_id)),
        [A, m] = (0, d.yK)([en.A], () => [en.A.getCurrentUserActiveStream(), en.A.getStreamerActiveStreamMetadata()]),
        _ = (0, d.bG)([I.A], () => I.A.useReducedMotion),
        p = (0, d.bG)([S.Ay], () => S.Ay.getCurrentEmbeddedActivity()),
        g = (0, d.bG)([k.A], () => k.A.getConnectedFrame()),
        f = (0, d.bG)([ea.A, eo.A], () => null == r || W.vz(r, ea.A, eo.A, !1)),
        [x] = (0, R.A)([
            (null != m && null != m.id
                ? m.id
                : null != a && null != a.id
                  ? a.id
                  : null != p
                    ? p.applicationId
                    : null != g
                      ? g.applicationId
                      : void 0) ?? "",
        ]),
        E = (0, d.bG)([G.A], () => G.A.getFakeGameData()),
        b = (0, d.bG)([S.Ay], () => S.Ay.getCurrentEmbeddedActivity()),
        v = (0, T.u)() && null != b && (0, N.f)(),
        O = (0, d.bG)([er.Ay], () => (0, Y.A)(er.Ay) && (0, ep.isWindows)()),
        L = (0, d.bG)([ec.A], () => (null != l ? ec.A.findActivity(l, (e) => e.type === eI.$pd.PLAYING) : null)),
        D = null != A && A.ownerId === l && A.state !== eI.XYD.ENDED,
        U = (0, d.bG)([eh.default, ed.A], () => (null != u ? (0, M.m1)(u, eh.default, ed.A) : void 0)),
        P = (0, $.A)(),
        [w, V] = s.useState(!1),
        F = (0, d.bG)([Q.A], () => Q.A.getWindowOpen(eI.MLl.ACTIVITY_POPOUT)),
        { parentAnalyticsLocation: K, analyticsLocations: z } = (0, y.Ay)(),
        {
            hasAlreadyLinked: q,
            canStartAuthorization: J,
            connectionApp: Z,
            startAuthorization: ee,
        } = (0, j.RD)(x, { allowedFlows: [j._M.RPC, j._M.WEB] }),
        [et, e_] = s.useState(!1),
        eg = (0, C.A)(x?.id);
    s.useEffect(() => {
        eg !== x?.id && e_(!1);
    }, [x, eg, e_]);
    let ef = (0, c.K)((e) => {
            e &&
                null != Z &&
                em.default.track(eI.HAw.ACTIVITY_PANEL_SDK_LINK_VIEWED, {
                    game_id: a?.id ?? null,
                    application_id: Z.id,
                });
        }),
        { enabled: ex } = B.A.useConfig({ location: "ActivityPanelGameCard" }),
        eE = s.useMemo(() => (a?.id != null ? eT.g[a.id] : void 0), [a?.id]),
        eC = (0, d.bG)([el.A], () => null != eE && el.A.isMember(eE), [eE]),
        eN = ex && null != eE && !eC ? eE : void 0;
    return (0, i.jsx)(eO, {
        ...n,
        guildId: t,
        canGoLive: O || v || void 0 !== E,
        activity: L,
        embeddedActivity: p,
        frame: g,
        userId: l,
        runningGame: E ?? a,
        application: x,
        useReducedMotion: _,
        isStreaming: D,
        channel: u,
        canStream: f,
        stream: A,
        streamMetadata: m,
        channelName: U,
        guildForConnectedChannel: h,
        streamQualityIndicator: P,
        isForceShowSharingPopout: w,
        setIsForceShowSharingPopout: V,
        isActivityPopoutOpen: F,
        hasAlreadyLinked: q,
        parentAnalyticsLocation: K,
        analyticsLocations: z,
        canStartAuthorization: J,
        accountLinkButtonRef: ef,
        startAuthorization: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return e_(!0), ee(...t);
        },
        didStartAuthorization: et,
        connectionApp: Z,
        gameCommunityGuildId: eN,
    });
});
