n.d(t, { A: () => eW }), n(321073);
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
    _ = n(265486),
    m = n(604121),
    g = n(403581),
    p = n(939249),
    f = n(73153),
    E = n(298990),
    x = n(367513),
    I = n(951001),
    C = n(492684),
    b = n(707606),
    N = n(475743),
    S = n(775602),
    v = n(646865),
    T = n(795816),
    y = n(933958),
    R = n(47563),
    j = n(576437),
    L = n(688810),
    O = n(139286),
    G = n(941314),
    D = n(362490),
    M = n(627363),
    U = n(429913),
    P = n(568598),
    w = n(384059),
    k = n(47167),
    V = n(402216),
    B = n(404374),
    H = n(379848),
    F = n(625180),
    W = n(91242),
    Y = n(596458),
    K = n(638934),
    z = n(15285),
    q = n(769015),
    X = n(334074),
    Q = n(279250),
    J = n(880144),
    Z = n(277680),
    $ = n(118277),
    ee = n(905552),
    et = n(95035),
    en = n(716965),
    ei = n(87001),
    el = n(27591),
    es = n(277009),
    ea = n(201805),
    er = n(95701),
    eo = n(616356),
    ed = n(961350),
    ec = n(734057),
    eu = n(184989),
    eh = n(71393),
    eA = n(430452),
    e_ = n(576705),
    em = n(290863),
    eg = n(994500),
    ep = n(309010),
    ef = n(287809),
    eE = n(157257),
    ex = n(954571),
    eI = n(975571),
    eC = n(723702),
    eb = n(498057),
    eN = n(994314),
    eS = n(485599),
    ev = n(204722),
    eT = n(535111),
    ey = n(652215),
    eR = n(5867),
    ej = n(942370),
    eL = n(49999),
    eO = n(165610),
    eG = n(9626),
    eD = n(985018),
    eM = n(911070),
    eU = n(490696),
    eP = n(268920),
    ew = n(633217);
function ek(e) {
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
        m = eb.A.useConfig({ location: "ActivityPanelGameCard" }),
        { defaultBody: g } = G.A.useConfig({ location: "ActivityPanelGameCard" }),
        p = a ? r : l,
        f = null == p;
    if (
        ((0, O.A)(
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
    let E = eD.intl.formatToPlainString(m.altTitle ? eD.t.hUbQT2 : eD.t["lo6H6+"], { gameName: p.name }),
        x = eD.intl.string(g ?? (m.altBody ? eD.t["JKqu+4"] : eD.t.qYAzOp)),
        I = eD.intl.string(m.altCta ? eD.t.jynBQ5 : eD.t.lw71Nf);
    a && (I = eD.intl.string(eM.default["2cOIOr"]));
    let C = [
        {
            text: I,
            onClick: () => {
                o(eL.i.TAKE_ACTION), c({ analyticsLocations: u });
            },
        },
    ];
    return (
        a &&
            ((t = "beta"),
            (E = eD.intl.formatToPlainString(eM.default.dPuaZE, { applicationName: p.name })),
            (x = eD.intl.string(eM.default.jR3bbS)),
            (n = {
                text: eD.intl.string(eD.t.hvVgAZ),
                link: "https://www.riotgames.com/integrating-with-discord",
                external: !0,
            })),
        (0, i.jsx)(_.A, {
            size: a ? "lg" : void 0,
            graphic: {
                type: "dynamic",
                component: A.DynamicGraphicComponent.ACCOUNT_LINK_DISPLAY,
                props: { application: p, isIncentivizedAccountLinking: a },
            },
            badge: t,
            title: E,
            body: x,
            textLink: n,
            targetElementRef: h,
            align: "right",
            shouldShow: !0,
            gradientColor: "purple",
            onRequestClose: () => o(eL.i.USER_DISMISS),
            caretConfig: { align: "end" },
            actions: C,
        })
    );
}
function eV(e) {
    let t,
        { incentivizedAccountLinkingRewarded: n, markAsDismissed: l, accountLinkUpsellTargetRef: s } = e,
        a = eD.intl.string(eD.t.MxAlrB),
        r = eD.intl.string(eD.t["/UTTEg"]),
        o = [
            {
                text: eD.intl.string(eD.t.aRIFWD),
                onClick: () => {
                    l(eL.i.TAKE_ACTION), window.open(eI.A.getArticleURL(ey.MVz.IN_GAME_FEATURES), "_blank");
                },
            },
        ];
    return (
        n &&
            ((a = eD.intl.string(eM.default.ublzTG)),
            (r = eD.intl.string(eM.default.JgM2xu)),
            (t = { type: "video", src: ew.A, fallbackImageSrc: eP.A, aspectRatio: "2/1", loop: !0 })),
        (0, i.jsx)(_.A, {
            graphic: t,
            title: a,
            body: r,
            targetElementRef: s,
            position: "top",
            align: "left",
            caretConfig: { align: "start" },
            actions: o,
            shouldShow: !0,
            onRequestClose: () => l(eL.i.USER_DISMISS),
        })
    );
}
function eB(e) {
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
            accountLinkButtonRef: p,
            gameCommunityGuildId: f,
            parentAnalyticsLocation: x,
            analyticsLocations: I,
            analyticsContext: C,
        } = e,
        { isQuestBarEmpty: b, hasLoadedQuestBar: N } = (0, ea.c9)(),
        S = !N || !b,
        v = (0, ev.W)(t, s, a),
        T = [],
        { isEligible: y, displayedApp: R } = (function (e) {
            let { connectionApp: t } = e,
                { enabled: n } = G.A.useConfig({ location: "ActivityPanelGameCard" }),
                { data: i } = (0, M.YY)(t?.parentId ?? t?.id);
            return { isEligible: n && null != t && ej.Y.has(t.id), displayedApp: i };
        })({ connectionApp: n }),
        j = !1;
    S ||
        (d && c
            ? v && null == a
                ? T.push(h.M.ACCOUNT_LINK_INVITE_FRIENDS)
                : T.push(h.M.POST_ACCOUNT_CONNECTION_RTC_POPOVER)
            : !d && u && null != t && (j = !0),
        null != f && r?.id != null && r?.name != null && T.push(h.M.JOIN_GAME_COMMUNITY_RTC_CTA));
    let { shouldShow: L, markAsDismissed: O } = (0, X.A)({
            application: t,
            disabled: !j,
            dismissibleContent: h.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL,
            dismissibleContentGroupName: eL.m.ACCOUNT_NAME_ZONE,
            bypassAutoDismiss: !0,
        }),
        { rewarded: D } = (function (e) {
            let { isEligible: t, hasAlreadyLinked: n, didStartAuthorization: i, application: s } = e,
                [a, r] = l.useState(!1);
            return (
                l.useEffect(() => {
                    if (!t || !n || !i || a || null == s) return;
                    let e = !1;
                    return (
                        (0, en.RI)({
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
        : (0, i.jsx)(H.Ay, {
              contentTypes: T,
              groupName: eL.m.ACCOUNT_NAME_ZONE,
              bypassAutoDismiss: !0,
              children: (e) => {
                  let { visibleContent: l, markAsDismissed: a } = e;
                  return l === h.M.ACCOUNT_LINK_INVITE_FRIENDS
                      ? (0, i.jsx)(_.A, {
                            title: eD.intl.string(eD.t["0l2pEt"]),
                            body: eD.intl.string(eD.t["DSZUK/"]),
                            targetElementRef: g,
                            align: "right",
                            shouldShow: !0,
                            onRequestClose: () => a(eL.i.USER_DISMISS),
                            caretConfig: { align: "end" },
                            actions: [
                                {
                                    text: eD.intl.string(eD.t.YdkBCH),
                                    onClick: () => {
                                        a(eL.i.TAKE_ACTION),
                                            o()(null != s, "Received null activity"),
                                            ex.default.track(ey.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                                                action_type: "invite_to_game",
                                                game_id: r?.id ?? null,
                                                application_id: s.application_id,
                                            }),
                                            (0, w.X)(x, w.O.INVITE),
                                            ex.default.track(ey.HAw.OPEN_MODAL, {
                                                type: "Send Join Invite",
                                                application_id: s.application_id,
                                                location: C.location,
                                            }),
                                            (0, E.qf)(s, !1);
                                    },
                                },
                            ],
                        })
                      : l === h.M.POST_ACCOUNT_CONNECTION_RTC_POPOVER
                        ? (0, i.jsx)(eV, {
                              incentivizedAccountLinkingRewarded: D,
                              markAsDismissed: a,
                              accountLinkUpsellTargetRef: m,
                          })
                        : L
                          ? (0, i.jsx)(ek, {
                                application: t,
                                connectionApp: n,
                                isEligibleForIncentivizedAccountLinking: y,
                                incentivizedAccountLinkingDisplayedApp: R,
                                markRecurringAsDismissed: O,
                                startAuthorization: A,
                                analyticsLocations: I,
                                accountLinkButtonRef: p,
                            })
                          : l === h.M.JOIN_GAME_COMMUNITY_RTC_CTA && null != f && r?.id != null && r?.name != null
                            ? (0, i.jsx)(Y.A, {
                                  targetElementRef: m,
                                  gameId: r.id,
                                  gameName: r.name,
                                  gameCommunityGuildId: f,
                                  markAsDismissed: a,
                              })
                            : void 0;
              },
          });
}
let eH = (0, C.A)(function (e) {
    let { message: t } = e;
    return (0, i.jsx)(eN.A, { children: t });
});
class eF extends l.PureComponent {
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
            className: eU.YX,
            children: (0, i.jsx)(m.a, { importData: t, shouldAnimate: !e, className: eU._7 }),
        });
    }
    renderActions() {
        return (0, i.jsx)(ev.f, { ...this.props, inviteButtonRef: this.inviteButtonRef });
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
        return (0, i.jsx)(eB, {
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
        return (0, i.jsx)(eT.O, {
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
            { title: l, sanitizedTitle: s } = (0, Z.A)(t);
        return (0, i.jsxs)("div", {
            className: eU.cm,
            ref: this.accountLinkUpsellTargetRef,
            children: [
                e
                    ? (0, i.jsx)($.A, { title: s, icon: t?.sourceIcon })
                    : (0, i.jsx)(V.Ay, { look: V.Ay.Looks.GRAY, size: V.Ay.Sizes.SMALL, className: eU.Ok }),
                (0, i.jsxs)("div", {
                    className: eU.pq,
                    children: [
                        (0, i.jsx)(eS.A, { children: l }),
                        null != n &&
                            (0, i.jsxs)("div", {
                                className: eU.qi,
                                children: [
                                    (0, i.jsx)(g.t, { size: "xxs", color: B.k0.PREMIUM_TIER_2 }),
                                    (0, i.jsx)(es.A, { className: eU.s, variant: "text-xxs/semibold", children: n }),
                                ],
                            }),
                    ],
                }),
            ],
        });
    }
    handleApplicationLinkClick = () => {
        let { isActivityPopoutOpen: e } = this.props;
        this.handleChannelLinkClick(), e && f.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
    };
    handleChannelLinkClick = () => {
        let { channel: e, embeddedActivity: t, isActivityPopoutOpen: n } = this.props;
        o()(null != t, "Activity cannot be null during navigation click"),
            o()(null != e, "Channel cannot be null during navigation click"),
            I.A.channelListScrollTo(e.guild_id ?? ey.ME, e.id),
            !n &&
                ((0, er.gV)(e.type) &&
                    x.A.selectParticipant(
                        e.id,
                        (0, P.Qt)({ applicationId: t.applicationId, instanceId: t.compositeInstanceId }),
                    ),
                (0, er.pQ)(e.type) && (0, T.gk)(eR.Gd.PANEL));
    };
    handleFrameLinkClick = () => {
        let { frame: e, isActivityPopoutOpen: t } = this.props;
        (o()(null != e, "Frame cannot be null during navigation click"), t)
            ? f.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" })
            : F.A.updateFrameLayoutMode({ applicationId: e.applicationId, layoutMode: eO.y.FOCUSED });
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
            ? ((e = ey.BVt.CHANNEL(a.id, l.id)), (c = `${c} / ${a.name}`))
            : null != l && (e = ey.BVt.CHANNEL(ey.ME, l.id));
        let u = (0, i.jsx)(et.A, {
                href: e,
                onClick: this.handleChannelLinkClick,
                children: (0, i.jsx)(eN.A, { className: eU.Ix, children: c }),
            }),
            h = (0, i.jsx)(et.A, {
                href: e,
                onClick: this.handleApplicationLinkClick,
                children: (0, i.jsx)(eS.A, { className: eU._W, children: t.name }),
            }),
            A = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(q.A, {
                        className: eU.Gt,
                        game: t,
                        size: q.M.SMALL,
                        ref: this.accountLinkUpsellTargetRef,
                    }),
                    (0, i.jsx)(j.M, {
                        popoutTargetRef: this.activityPopoutTargetRef,
                        isForceShowSharingPopout: r,
                        setIsForceShowSharingPopout: o,
                        children: (0, i.jsxs)("div", {
                            className: eU.pq,
                            children: [h, null != l && (0, er.pQ)(l.type) ? u : (0, i.jsx)(eH, { timestamps: d })],
                        }),
                    }),
                ],
            });
        return (0, i.jsx)("div", { className: eU.cm, children: A });
    }
    renderFrame() {
        let { application: e, frame: t } = this.props;
        if (null == t || null == e) return null;
        let n = { start: t.connectedSince },
            l = (0, i.jsx)(p.D, {
                onClick: this.handleFrameLinkClick,
                onMouseDown: (e) => {
                    e.stopPropagation();
                },
                className: eU.rB,
                children: (0, i.jsx)(eS.A, { className: eU._W, children: e.name }),
            }),
            s = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(q.A, {
                        className: eU.Gt,
                        game: e,
                        size: q.M.SMALL,
                        ref: this.accountLinkUpsellTargetRef,
                    }),
                    (0, i.jsxs)("div", { className: eU.pq, children: [l, (0, i.jsx)(eH, { timestamps: n })] }),
                ],
            });
        return (0, i.jsx)("div", { className: eU.cm, children: s });
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
            ((!(0, ev.W)(d, c, t) &&
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
            className: a()(eU.nd, u),
            ref: this.activityPopoutTargetRef,
            children: (0, i.jsxs)("div", {
                className: eU.rf,
                children: [h(), this.renderActions(), this.renderDismissiblePopovers()],
            }),
        });
    }
}
let eW = (0, b.A)(function (e) {
    let { guildId: t, ...n } = e,
        s = (0, u.bG)([ed.default], () => ed.default.getId()),
        a = (0, u.bG)([z.Ay, eE.A], () => (0, ee.A)(z.Ay, eE.A)),
        r = (0, u.bG)([z.Ay], () => z.Ay.getDebugRunningGame()),
        o = (0, u.bG)([ep.A, ec.A], () => ec.A.getChannel(ep.A.getVoiceChannelId())),
        d = (0, u.bG)([y.Ay], () => y.Ay.getConnectedActivityChannelId()),
        h = (0, u.bG)([ec.A], () => ec.A.getChannel(d)),
        A = (0, u.bG)([eh.A], () => eh.A.getGuild(h?.guild_id)),
        [_, m] = (0, u.yK)([eo.A], () => [eo.A.getCurrentUserActiveStream(), eo.A.getStreamerActiveStreamMetadata()]),
        g = (0, u.bG)([S.A], () => S.A.useReducedMotion),
        p = (0, u.bG)([y.Ay], () => y.Ay.getCurrentEmbeddedActivity()),
        f = (0, u.bG)([W.A], () => W.A.getConnectedFrame()),
        E = (0, u.bG)([eh.A, e_.A], () => null == o || Q.vz(o, eh.A, e_.A, !1)),
        [x] = (0, U.A)([
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
        I = (0, u.bG)([y.Ay], () => y.Ay.getCurrentEmbeddedActivity()),
        C = (0, R.u)() && null != I && (0, v.f)(),
        b = (0, u.bG)([eA.Ay], () => (0, J.A)(eA.Ay) && (0, eC.isWindows)()),
        T = (0, u.bG)([em.A], () => (null != s ? em.A.findActivity(s, (e) => e.type === ey.$pd.PLAYING) : null)),
        j = null != _ && _.ownerId === s && _.state !== ey.XYD.ENDED,
        O = (0, u.bG)([ef.default, eg.A], () => (null != h ? (0, k.m1)(h, ef.default, eg.A) : void 0)),
        G = (0, el.A)(),
        [M, P] = l.useState(!1),
        w = (0, u.bG)([ei.A], () => ei.A.getWindowOpen(ey.MLl.ACTIVITY_POPOUT)),
        { parentAnalyticsLocation: V, analyticsLocations: B } = (0, L.Ay)(),
        {
            hasAlreadyLinked: H,
            canStartAuthorization: F,
            connectionApp: Y,
            startAuthorization: q,
        } = (0, D.RD)(x, { allowedFlows: [D._M.RPC, D._M.WEB] }),
        [X, Z] = l.useState(!1),
        $ = (0, N.A)(x?.id);
    l.useEffect(() => {
        $ !== x?.id && Z(!1);
    }, [x, $, Z]);
    let et = (0, c.K)((e) => {
            e &&
                null != Y &&
                ex.default.track(ey.HAw.ACTIVITY_PANEL_SDK_LINK_VIEWED, {
                    game_id: a?.id ?? null,
                    application_id: Y.id,
                });
        }),
        { enabled: en } = K.A.useConfig({ location: "ActivityPanelGameCard" }),
        es = l.useMemo(() => (a?.id != null ? eG.g[a.id] : void 0), [a?.id]),
        ea = (0, u.bG)([eu.A], () => null != es && eu.A.isMember(es), [es]),
        er = en && null != es && !ea ? es : void 0;
    return (0, i.jsx)(eF, {
        ...n,
        guildId: t,
        canGoLive: b || C,
        activity: T,
        embeddedActivity: p,
        frame: f,
        userId: s,
        runningGame: a,
        debugRunningGame: r,
        application: x,
        useReducedMotion: g,
        isStreaming: j,
        channel: h,
        canStream: E,
        stream: _,
        streamMetadata: m,
        channelName: O,
        guildForConnectedChannel: A,
        streamQualityIndicator: G,
        isForceShowSharingPopout: M,
        setIsForceShowSharingPopout: P,
        isActivityPopoutOpen: w,
        hasAlreadyLinked: H,
        parentAnalyticsLocation: V,
        analyticsLocations: B,
        canStartAuthorization: F,
        accountLinkButtonRef: et,
        startAuthorization: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return Z(!0), q(...t);
        },
        didStartAuthorization: X,
        connectionApp: Y,
        gameCommunityGuildId: er,
    });
});
