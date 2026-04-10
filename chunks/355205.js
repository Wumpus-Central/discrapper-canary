n.d(t, { A: () => eH }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r),
    d = n(110259),
    c = n(172218),
    u = n(311907),
    h = n(554146),
    A = n(116833),
    _ = n(342494),
    m = n(397927),
    g = n(73153),
    p = n(298990),
    f = n(367513),
    x = n(951001),
    E = n(492684),
    I = n(707606),
    C = n(475743),
    N = n(775602),
    T = n(646865),
    S = n(795816),
    b = n(933958),
    v = n(47563),
    y = n(576437),
    j = n(688810),
    R = n(139286),
    O = n(443302),
    L = n(362490),
    M = n(627363),
    D = n(429913),
    U = n(568598),
    G = n(384059),
    P = n(47167),
    k = n(402216),
    w = n(404374),
    B = n(379848),
    V = n(625180),
    H = n(91242),
    F = n(596458),
    W = n(638934),
    K = n(15285),
    Y = n(769015),
    z = n(334074),
    q = n(279250),
    X = n(880144),
    $ = n(277680),
    Q = n(118277),
    J = n(905552),
    Z = n(95035),
    ee = n(716965),
    et = n(87001),
    en = n(249972),
    ei = n(277009),
    el = n(201805),
    es = n(95701),
    ea = n(616356),
    er = n(961350),
    eo = n(734057),
    ed = n(184989),
    ec = n(71393),
    eu = n(430452),
    eh = n(576705),
    eA = n(290863),
    e_ = n(994500),
    em = n(309010),
    eg = n(287809),
    ep = n(157257),
    ef = n(954571),
    ex = n(975571),
    eE = n(723702),
    eI = n(498057),
    eC = n(994314),
    eN = n(485599),
    eT = n(204722),
    eS = n(535111),
    eb = n(652215),
    ev = n(5867),
    ey = n(942370),
    ej = n(49999),
    eR = n(165610),
    eO = n(9626),
    eL = n(985018),
    eM = n(995309),
    eD = n(852216),
    eU = n(268920),
    eG = n(633217);
function eP(e) {
    let t,
        n,
        {
            application: l,
            connectionApp: s,
            isEligibleForIncentivizedAccountLinking: a,
            incentivizedAccountLinkingDisplayedApp: r,
            markRecurringAsDismissed: o,
            startAuthorization: c,
            analyticsLocations: u,
            accountLinkButtonRef: h,
        } = e,
        m = eI.A.useConfig({ location: "ActivityPanelGameCard" }),
        { defaultBody: g } = O.A.useConfig({ location: "ActivityPanelGameCard" }),
        p = a ? r : l,
        f = null == p;
    if (
        ((0, R.A)(
            {
                type: d.ImpressionTypes.POPOUT,
                name: d.ImpressionNames.GAME_ACCOUNT_LINK_RECURRING_UPSELL,
                properties: {
                    application_id: l?.id,
                    parent_application_id: s?.parentId,
                    type: a ? "incentivized" : "default",
                },
            },
            { disableTrack: f },
        ),
        f)
    )
        return null;
    let x = eL.intl.formatToPlainString(m.altTitle ? eL.t.hUbQT2 : eL.t["lo6H6+"], { gameName: p.name }),
        E = eL.intl.string(g ?? (m.altBody ? eL.t["JKqu+4"] : eL.t.qYAzOp)),
        I = eL.intl.string(m.altCta ? eL.t.jynBQ5 : eL.t.lw71Nf);
    a && (I = eL.intl.string(eM.default["2cOIOr"]));
    let C = [
        {
            text: I,
            onClick: () => {
                o(ej.i.TAKE_ACTION), c({ analyticsLocations: u });
            },
        },
    ];
    return (
        a &&
            ((t = "beta"),
            (x = eL.intl.formatToPlainString(eM.default.dPuaZE, { applicationName: p.name })),
            (E = eL.intl.string(eM.default.jR3bbS)),
            (n = {
                text: eL.intl.string(eL.t.hvVgAZ),
                link: "https://www.riotgames.com/integrating-with-discord",
                external: !0,
            })),
        (0, i.jsx)(_.AM, {
            size: a ? "lg" : void 0,
            graphic: {
                type: "dynamic",
                component: A.DynamicGraphicComponent.ACCOUNT_LINK_DISPLAY,
                props: { application: p, isIncentivizedAccountLinking: a },
            },
            badge: t,
            title: x,
            body: E,
            textLink: n,
            targetElementRef: h,
            align: "right",
            shouldShow: !0,
            gradientColor: "purple",
            onRequestClose: () => o(ej.i.USER_DISMISS),
            caretConfig: { align: "end" },
            actions: C,
        })
    );
}
function ek(e) {
    let t,
        { incentivizedAccountLinkingRewarded: n, markAsDismissed: l, accountLinkUpsellTargetRef: s } = e,
        a = eL.intl.string(eL.t.MxAlrB),
        r = eL.intl.string(eL.t["/UTTEg"]),
        o = [
            {
                text: eL.intl.string(eL.t.aRIFWD),
                onClick: () => {
                    l(ej.i.TAKE_ACTION), window.open(ex.A.getArticleURL(eb.MVz.IN_GAME_FEATURES), "_blank");
                },
            },
        ];
    return (
        n &&
            ((a = eL.intl.string(eM.default.ublzTG)),
            (r = eL.intl.string(eM.default.JgM2xu)),
            (t = { type: "video", src: eG.A, fallbackImageSrc: eU.A, aspectRatio: "2/1", loop: !0 })),
        (0, i.jsx)(_.AM, {
            graphic: t,
            title: a,
            body: r,
            targetElementRef: s,
            position: "top",
            align: "left",
            caretConfig: { align: "start" },
            actions: o,
            shouldShow: !0,
            onRequestClose: () => l(ej.i.USER_DISMISS),
        })
    );
}
function ew(e) {
    let {
            application: t,
            connectionApp: n,
            activity: s,
            embeddedActivity: a,
            runningGame: r,
            hasAlreadyLinked: d,
            didStartAuthorization: c,
            canStartAuthorization: u,
            startAuthorization: A,
            accountLinkUpsellTargetRef: m,
            inviteButtonRef: g,
            accountLinkButtonRef: f,
            gameCommunityGuildId: x,
            parentAnalyticsLocation: E,
            analyticsLocations: I,
            analyticsContext: C,
        } = e,
        { isQuestBarEmpty: N, hasLoadedQuestBar: T } = (0, el.c9)(),
        S = !T || !N,
        b = (0, eT.W)(t, s, a),
        v = [],
        { isEligible: y, displayedApp: j } = (function (e) {
            let { connectionApp: t } = e,
                { enabled: n } = O.A.useConfig({ location: "ActivityPanelGameCard" }),
                { data: i } = (0, M.YY)(t?.parentId ?? t?.id);
            return { isEligible: n && null != t && ey.Y.has(t.id), displayedApp: i };
        })({ connectionApp: n }),
        R = !1;
    S ||
        (d && c
            ? b && null == a
                ? v.push(h.M.ACCOUNT_LINK_INVITE_FRIENDS)
                : v.push(h.M.POST_ACCOUNT_CONNECTION_RTC_POPOVER)
            : !d && u && null != t && (R = !0),
        null != x && r?.id != null && r?.name != null && v.push(h.M.JOIN_GAME_COMMUNITY_RTC_CTA));
    let { shouldShow: L, markAsDismissed: D } = (0, z.A)({
            application: t,
            disabled: !R,
            dismissibleContent: h.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL,
            dismissibleContentGroupName: ej.m.ACCOUNT_NAME_ZONE,
            bypassAutoDismiss: !0,
        }),
        { rewarded: U } = (function (e) {
            let { isEligible: t, hasAlreadyLinked: n, didStartAuthorization: i, application: s } = e,
                [a, r] = l.useState(!1);
            return (
                l.useEffect(() => {
                    if (!t || !n || !i || a || null == s) return;
                    let e = !1;
                    return (
                        (0, ee.RI)({
                            applicationId: s.id,
                            onSuccess: () => {
                                e || r(!0);
                            },
                            onError: () => {},
                        }),
                        () => {
                            e = !0;
                        }
                    );
                }, [t, n, i, a, s]),
                { rewarded: a }
            );
        })({ isEligible: y, hasAlreadyLinked: d, didStartAuthorization: c, application: n });
    return S
        ? null
        : (0, i.jsx)(B.Ay, {
              contentTypes: v,
              groupName: ej.m.ACCOUNT_NAME_ZONE,
              bypassAutoDismiss: !0,
              children: (e) => {
                  let { visibleContent: l, markAsDismissed: a } = e;
                  return l === h.M.ACCOUNT_LINK_INVITE_FRIENDS
                      ? (0, i.jsx)(_.AM, {
                            title: eL.intl.string(eL.t["0l2pEt"]),
                            body: eL.intl.string(eL.t["DSZUK/"]),
                            targetElementRef: g,
                            align: "right",
                            shouldShow: !0,
                            onRequestClose: () => a(ej.i.USER_DISMISS),
                            caretConfig: { align: "end" },
                            actions: [
                                {
                                    text: eL.intl.string(eL.t.YdkBCH),
                                    onClick: () => {
                                        a(ej.i.TAKE_ACTION),
                                            o()(null != s, "Received null activity"),
                                            ef.default.track(eb.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                                                action_type: "invite_to_game",
                                                game_id: r?.id ?? null,
                                                application_id: s.application_id,
                                            }),
                                            (0, G.X)(E, G.O.INVITE),
                                            ef.default.track(eb.HAw.OPEN_MODAL, {
                                                type: "Send Join Invite",
                                                application_id: s.application_id,
                                                location: C.location,
                                            }),
                                            (0, p.qf)(s, !1);
                                    },
                                },
                            ],
                        })
                      : l === h.M.POST_ACCOUNT_CONNECTION_RTC_POPOVER
                        ? (0, i.jsx)(ek, {
                              incentivizedAccountLinkingRewarded: U,
                              markAsDismissed: a,
                              accountLinkUpsellTargetRef: m,
                          })
                        : L
                          ? (0, i.jsx)(eP, {
                                application: t,
                                connectionApp: n,
                                isEligibleForIncentivizedAccountLinking: y,
                                incentivizedAccountLinkingDisplayedApp: j,
                                markRecurringAsDismissed: D,
                                startAuthorization: A,
                                analyticsLocations: I,
                                accountLinkButtonRef: f,
                            })
                          : l === h.M.JOIN_GAME_COMMUNITY_RTC_CTA && null != x && r?.id != null && r?.name != null
                            ? (0, i.jsx)(F.A, {
                                  targetElementRef: m,
                                  gameId: r.id,
                                  gameName: r.name,
                                  gameCommunityGuildId: x,
                                  markAsDismissed: a,
                              })
                            : void 0;
              },
          });
}
let eB = (0, E.A)(function (e) {
    let { message: t } = e;
    return (0, i.jsx)(eC.A, { children: t });
});
class eV extends l.PureComponent {
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
            className: eD.YX,
            children: (0, i.jsx)(m.akl, { importData: t, shouldAnimate: !e, className: eD._7 }),
        });
    }
    renderActions() {
        return (0, i.jsx)(eT.f, { ...this.props, inviteButtonRef: this.inviteButtonRef });
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
            connectionApp: _,
        } = this.props;
        return (0, i.jsx)(ew, {
            application: e,
            connectionApp: _,
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
        return (0, i.jsx)(eS.O, {
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
            { title: l, sanitizedTitle: s } = (0, $.A)(t);
        return (0, i.jsxs)("div", {
            className: eD.cm,
            ref: this.accountLinkUpsellTargetRef,
            children: [
                e
                    ? (0, i.jsx)(Q.A, { title: s, icon: t?.sourceIcon })
                    : (0, i.jsx)(k.Ay, { look: k.Ay.Looks.GRAY, size: k.Ay.Sizes.SMALL, className: eD.Ok }),
                (0, i.jsxs)("div", {
                    className: eD.pq,
                    children: [
                        (0, i.jsx)(eN.A, { children: l }),
                        null != n &&
                            (0, i.jsxs)("div", {
                                className: eD.qi,
                                children: [
                                    (0, i.jsx)(m.tvc, { size: "xxs", color: w.k0.PREMIUM_TIER_2 }),
                                    (0, i.jsx)(ei.A, { className: eD.s, variant: "text-xxs/semibold", children: n }),
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
            x.A.channelListScrollTo(e.guild_id ?? eb.ME, e.id),
            !n &&
                ((0, es.gV)(e.type) &&
                    f.A.selectParticipant(
                        e.id,
                        (0, U.Qt)({ applicationId: t.applicationId, instanceId: t.compositeInstanceId }),
                    ),
                (0, es.pQ)(e.type) && (0, S.gk)(ev.Gd.PANEL));
    };
    handleFrameLinkClick = () => {
        let { frame: e, isActivityPopoutOpen: t } = this.props;
        (o()(null != e, "Frame cannot be null during navigation click"), t)
            ? g.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" })
            : V.A.updateFrameLayoutMode({ applicationId: e.applicationId, layoutMode: eR.y.FOCUSED });
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
            ? ((e = eb.BVt.CHANNEL(a.id, l.id)), (c = `${c} / ${a.name}`))
            : null != l && (e = eb.BVt.CHANNEL(eb.ME, l.id));
        let u = (0, i.jsx)(Z.A, {
                href: e,
                onClick: this.handleChannelLinkClick,
                children: (0, i.jsx)(eC.A, { className: eD.Ix, children: c }),
            }),
            h = (0, i.jsx)(Z.A, {
                href: e,
                onClick: this.handleApplicationLinkClick,
                children: (0, i.jsx)(eN.A, { className: eD._W, children: t.name }),
            }),
            A = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(Y.A, {
                        className: eD.Gt,
                        game: t,
                        size: Y.M.SMALL,
                        ref: this.accountLinkUpsellTargetRef,
                    }),
                    (0, i.jsx)(y.M, {
                        popoutTargetRef: this.activityPopoutTargetRef,
                        isForceShowSharingPopout: r,
                        setIsForceShowSharingPopout: o,
                        children: (0, i.jsxs)("div", {
                            className: eD.pq,
                            children: [h, null != l && (0, es.pQ)(l.type) ? u : (0, i.jsx)(eB, { timestamps: d })],
                        }),
                    }),
                ],
            });
        return (0, i.jsx)("div", { className: eD.cm, children: A });
    }
    renderFrame() {
        let { application: e, frame: t } = this.props;
        if (null == t || null == e) return null;
        let n = { start: t.connectedSince },
            l = (0, i.jsx)(m.DUT, {
                onClick: this.handleFrameLinkClick,
                onMouseDown: (e) => {
                    e.stopPropagation();
                },
                className: eD.rB,
                children: (0, i.jsx)(eN.A, { className: eD._W, children: e.name }),
            }),
            s = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(Y.A, {
                        className: eD.Gt,
                        game: e,
                        size: Y.M.SMALL,
                        ref: this.accountLinkUpsellTargetRef,
                    }),
                    (0, i.jsxs)("div", { className: eD.pq, children: [l, (0, i.jsx)(eB, { timestamps: n })] }),
                ],
            });
        return (0, i.jsx)("div", { className: eD.cm, children: s });
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
            ((!(0, eT.W)(d, c, t) &&
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
            className: a()(eD.nd, u),
            ref: this.activityPopoutTargetRef,
            children: (0, i.jsxs)("div", {
                className: eD.rf,
                children: [h(), this.renderActions(), this.renderDismissiblePopovers()],
            }),
        });
    }
}
let eH = (0, I.A)(function (e) {
    let { guildId: t, ...n } = e,
        s = (0, u.bG)([er.default], () => er.default.getId()),
        a = (0, u.bG)([K.Ay, ep.A], () => (0, J.A)(K.Ay, ep.A)),
        r = (0, u.bG)([K.Ay], () => K.Ay.getDebugRunningGame()),
        o = (0, u.bG)([em.A, eo.A], () => eo.A.getChannel(em.A.getVoiceChannelId())),
        d = (0, u.bG)([b.Ay], () => b.Ay.getConnectedActivityChannelId()),
        h = (0, u.bG)([eo.A], () => eo.A.getChannel(d)),
        A = (0, u.bG)([ec.A], () => ec.A.getGuild(h?.guild_id)),
        [_, m] = (0, u.yK)([ea.A], () => [ea.A.getCurrentUserActiveStream(), ea.A.getStreamerActiveStreamMetadata()]),
        g = (0, u.bG)([N.A], () => N.A.useReducedMotion),
        p = (0, u.bG)([b.Ay], () => b.Ay.getCurrentEmbeddedActivity()),
        f = (0, u.bG)([H.A], () => H.A.getConnectedFrame()),
        x = (0, u.bG)([ec.A, eh.A], () => null == o || q.vz(o, ec.A, eh.A, !1)),
        [E] = (0, D.A)([
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
        I = (0, u.bG)([b.Ay], () => b.Ay.getCurrentEmbeddedActivity()),
        S = (0, v.u)() && null != I && (0, T.f)(),
        y = (0, u.bG)([eu.Ay], () => (0, X.A)(eu.Ay) && (0, eE.isWindows)()),
        R = (0, u.bG)([eA.A], () => (null != s ? eA.A.findActivity(s, (e) => e.type === eb.$pd.PLAYING) : null)),
        O = null != _ && _.ownerId === s && _.state !== eb.XYD.ENDED,
        M = (0, u.bG)([eg.default, e_.A], () => (null != h ? (0, P.m1)(h, eg.default, e_.A) : void 0)),
        U = (0, en.A)(),
        [G, k] = l.useState(!1),
        w = (0, u.bG)([et.A], () => et.A.getWindowOpen(eb.MLl.ACTIVITY_POPOUT)),
        { parentAnalyticsLocation: B, analyticsLocations: V } = (0, j.Ay)(),
        {
            hasAlreadyLinked: F,
            canStartAuthorization: Y,
            connectionApp: z,
            startAuthorization: $,
        } = (0, L.RD)(E, { allowedFlows: [L._M.RPC, L._M.WEB] }),
        [Q, Z] = l.useState(!1),
        ee = (0, C.A)(E?.id);
    l.useEffect(() => {
        ee !== E?.id && Z(!1);
    }, [E, ee, Z]);
    let ei = (0, c.K)((e) => {
            e &&
                null != z &&
                ef.default.track(eb.HAw.ACTIVITY_PANEL_SDK_LINK_VIEWED, {
                    game_id: a?.id ?? null,
                    application_id: z.id,
                });
        }),
        { enabled: el } = W.A.useConfig({ location: "ActivityPanelGameCard" }),
        es = l.useMemo(() => (a?.id != null ? eO.g[a.id] : void 0), [a?.id]),
        ex = (0, u.bG)([ed.A], () => null != es && ed.A.isMember(es), [es]),
        eI = el && null != es && !ex ? es : void 0;
    return (0, i.jsx)(eV, {
        ...n,
        guildId: t,
        canGoLive: y || S,
        activity: R,
        embeddedActivity: p,
        frame: f,
        userId: s,
        runningGame: a,
        debugRunningGame: r,
        application: E,
        useReducedMotion: g,
        isStreaming: O,
        channel: h,
        canStream: x,
        stream: _,
        streamMetadata: m,
        channelName: M,
        guildForConnectedChannel: A,
        streamQualityIndicator: U,
        isForceShowSharingPopout: G,
        setIsForceShowSharingPopout: k,
        isActivityPopoutOpen: w,
        hasAlreadyLinked: F,
        parentAnalyticsLocation: B,
        analyticsLocations: V,
        canStartAuthorization: Y,
        accountLinkButtonRef: ei,
        startAuthorization: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return Z(!0), $(...t);
        },
        didStartAuthorization: Q,
        connectionApp: z,
        gameCommunityGuildId: eI,
    });
});
