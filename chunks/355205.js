"use strict";
n.d(t, { A: () => ev }), n(321073);
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
    b = n(646865),
    N = n(795816),
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
    V = n(15285),
    B = n(769015),
    H = n(279250),
    F = n(880144),
    K = n(277680),
    W = n(118277),
    Y = n(905552),
    z = n(95035),
    X = n(87001),
    q = n(249972),
    J = n(277009),
    Q = n(201805),
    $ = n(95701),
    Z = n(616356),
    ee = n(961350),
    et = n(734057),
    en = n(71393),
    ei = n(430452),
    es = n(576705),
    el = n(290863),
    er = n(994500),
    ea = n(309010),
    eo = n(287809),
    ec = n(157257),
    ed = n(954571),
    eu = n(975571),
    eh = n(723702),
    eA = n(498057),
    ep = n(994314),
    eg = n(485599),
    em = n(204722),
    e_ = n(535111),
    ef = n(652215),
    ex = n(5867),
    eC = n(49999),
    eE = n(165610),
    eI = n(654487),
    eb = n(985018),
    eN = n(176869);
let eS = (0, x.A)(function (e) {
    let { message: t } = e;
    return (0, i.jsx)(ep.A, { children: t });
});
class eT extends s.PureComponent {
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
            className: eN.YX,
            children: (0, i.jsx)(p.akl, { importData: t, shouldAnimate: !e, className: eN._7 }),
        });
    }
    renderActions() {
        return (0, i.jsx)(em.f, { ...this.props, inviteButtonRef: this.inviteButtonRef });
    }
    renderAccountLinkPopover() {
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
            } = this.props,
            C = (0, em.W)(s, l, r),
            E = [];
        return n
            ? null
            : (e && x
                  ? C && null == r
                      ? E.push(u.M.ACCOUNT_LINK_INVITE_FRIENDS)
                      : E.push(u.M.POST_ACCOUNT_CONNECTION_RTC_POPOVER)
                  : g && null != s && E.push(u.M.ACCOUNT_LINK_PROMPT),
              (0, i.jsx)(P.Ay, {
                  contentTypes: E,
                  groupName: eC.m.ACCOUNT_NAME_ZONE,
                  bypassAutoDismiss: !0,
                  children: (e) => {
                      let { visibleContent: n, markAsDismissed: r } = e;
                      return n === u.M.ACCOUNT_LINK_INVITE_FRIENDS
                          ? (0, i.jsx)(A.AM, {
                                title: eb.intl.string(eb.t["0l2pEt"]),
                                body: eb.intl.string(eb.t["DSZUK/"]),
                                targetElementRef: this.inviteButtonRef,
                                align: "right",
                                shouldShow: !0,
                                onRequestClose: () => r(eC.i.USER_DISMISS),
                                caretConfig: { align: "end" },
                                actions: [
                                    {
                                        text: eb.intl.string(eb.t.YdkBCH),
                                        onClick: () => {
                                            r(eC.i.TAKE_ACTION),
                                                o()(null != l, "Received null activity"),
                                                ed.default.track(ef.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                                                    action_type: "invite_to_game",
                                                    game_id: c?.id ?? null,
                                                    application_id: l.application_id,
                                                }),
                                                (0, L.X)(d, L.O.INVITE),
                                                ed.default.track(ef.HAw.OPEN_MODAL, {
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
                                  title: eb.intl.string(eb.t.MxAlrB),
                                  body: eb.intl.string(eb.t["/UTTEg"]),
                                  targetElementRef: this.accountLinkUpsellTargetRef,
                                  position: "top",
                                  align: "left",
                                  caretConfig: { align: "start" },
                                  actions: [
                                      {
                                          text: eb.intl.string(eb.t.aRIFWD),
                                          onClick: () => {
                                              r(eC.i.TAKE_ACTION),
                                                  window.open(eu.A.getArticleURL(ef.MVz.IN_GAME_FEATURES), "_blank");
                                          },
                                      },
                                  ],
                                  shouldShow: !0,
                                  onRequestClose: () => r(eC.i.USER_DISMISS),
                              })
                            : n === u.M.ACCOUNT_LINK_PROMPT
                              ? (0, i.jsx)(A.AM, {
                                    graphic: {
                                        type: "dynamic",
                                        component: h.DynamicGraphicComponent.ACCOUNT_LINK_DISPLAY,
                                        props: { application: s },
                                    },
                                    title: eb.intl.formatToPlainString(t.altTitle ? eb.t.hUbQT2 : eb.t["lo6H6+"], {
                                        gameName: s.name,
                                    }),
                                    body: eb.intl.string(t.altBody ? eb.t["JKqu+4"] : eb.t.qYAzOp),
                                    targetElementRef: _,
                                    align: "right",
                                    shouldShow: !0,
                                    gradientColor: "purple",
                                    onRequestClose: () => r(eC.i.USER_DISMISS),
                                    caretConfig: { align: "end" },
                                    actions: [
                                        {
                                            text: eb.intl.string(t.altCta ? eb.t.jynBQ5 : eb.t.lw71Nf),
                                            onClick: () => {
                                                r(eC.i.TAKE_ACTION), f({ analyticsLocations: p });
                                            },
                                        },
                                    ],
                                })
                              : void 0;
                  },
              }));
    }
    renderGame() {
        let {
            isStreaming: e,
            application: t,
            runningGame: n,
            isForceShowSharingPopout: s,
            setIsForceShowSharingPopout: l,
        } = this.props;
        return (0, i.jsx)(e_.O, {
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
            { title: s, sanitizedTitle: l } = (0, K.A)(t);
        return (0, i.jsxs)("div", {
            className: eN.cm,
            ref: this.accountLinkUpsellTargetRef,
            children: [
                e
                    ? (0, i.jsx)(W.A, { title: l, icon: t?.sourceIcon })
                    : (0, i.jsx)(D.Ay, { look: D.Ay.Looks.GRAY, size: D.Ay.Sizes.SMALL, className: eN.Ok }),
                (0, i.jsxs)("div", {
                    className: eN.pq,
                    children: [
                        (0, i.jsx)(eg.A, { children: s }),
                        null != n &&
                            (0, i.jsxs)("div", {
                                className: eN.qi,
                                children: [
                                    (0, i.jsx)(p.tvc, { size: "xxs", color: U.k0.PREMIUM_TIER_2 }),
                                    (0, i.jsx)(J.A, { className: eN.s, variant: "text-xxs/semibold", children: n }),
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
            f.A.channelListScrollTo(e.guild_id ?? ef.ME, e.id),
            !n &&
                ((0, $.gV)(e.type) &&
                    _.A.selectParticipant(
                        e.id,
                        (0, O.Qt)({ applicationId: t.applicationId, instanceId: t.compositeInstanceId }),
                    ),
                (0, $.pQ)(e.type) && (0, N.gk)(ex.Gd.PANEL));
    };
    handleFrameLinkClick = () => {
        let { frame: e, isActivityPopoutOpen: t } = this.props;
        (o()(null != e, "Frame cannot be null during navigation click"), t)
            ? g.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" })
            : w.A.updateFrameLayoutMode({ applicationId: e.applicationId, layoutMode: eE.y.FOCUSED });
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
            ? ((e = ef.BVt.CHANNEL(r.id, s.id)), (d = `${d} / ${r.name}`))
            : null != s && (e = ef.BVt.CHANNEL(ef.ME, s.id));
        let u = (0, i.jsx)(z.A, {
                href: e,
                onClick: this.handleChannelLinkClick,
                children: (0, i.jsx)(ep.A, { className: eN.Ix, children: d }),
            }),
            h = (0, i.jsx)(z.A, {
                href: e,
                onClick: this.handleApplicationLinkClick,
                children: (0, i.jsx)(eg.A, { className: eN._W, children: t.name }),
            }),
            A = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(B.A, {
                        className: eN.Gt,
                        game: t,
                        size: B.M.SMALL,
                        ref: this.accountLinkUpsellTargetRef,
                    }),
                    (0, i.jsx)(v.M, {
                        popoutTargetRef: this.activityPopoutTargetRef,
                        isForceShowSharingPopout: a,
                        setIsForceShowSharingPopout: o,
                        children: (0, i.jsxs)("div", {
                            className: eN.pq,
                            children: [h, null != s && (0, $.pQ)(s.type) ? u : (0, i.jsx)(eS, { timestamps: c })],
                        }),
                    }),
                ],
            });
        return (0, i.jsx)("div", { className: eN.cm, children: A });
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
                className: eN.rB,
                children: (0, i.jsx)(eg.A, { className: eN._W, children: e.name }),
            }),
            l = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(B.A, {
                        className: eN.Gt,
                        game: e,
                        size: B.M.SMALL,
                        ref: this.accountLinkUpsellTargetRef,
                    }),
                    (0, i.jsxs)("div", { className: eN.pq, children: [s, (0, i.jsx)(eS, { timestamps: n })] }),
                ],
            });
        return (0, i.jsx)("div", { className: eN.cm, children: l });
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
            ((!(0, em.W)(o, c, t) &&
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
            className: r()(eN.nd, d),
            ref: this.activityPopoutTargetRef,
            children: (0, i.jsxs)("div", {
                className: eN.rf,
                children: [u(), this.renderActions(), this.renderAccountLinkPopover()],
            }),
        });
    }
}
let ev = (0, C.A)(function (e) {
    let { guildId: t, ...n } = e,
        l = (0, d.bG)([ee.default], () => ee.default.getId()),
        r = (0, d.bG)([V.Ay, ec.A], () => (0, Y.A)(V.Ay, ec.A)),
        a = (0, d.bG)([ea.A, et.A], () => et.A.getChannel(ea.A.getVoiceChannelId())),
        o = (0, d.bG)([S.Ay], () => S.Ay.getConnectedActivityChannelId()),
        u = (0, d.bG)([et.A], () => et.A.getChannel(o)),
        h = (0, d.bG)([en.A], () => en.A.getGuild(u?.guild_id)),
        [A, p] = (0, d.yK)([Z.A], () => [Z.A.getCurrentUserActiveStream(), Z.A.getStreamerActiveStreamMetadata()]),
        g = (0, d.bG)([I.A], () => I.A.useReducedMotion),
        m = (0, d.bG)([S.Ay], () => S.Ay.getCurrentEmbeddedActivity()),
        _ = (0, d.bG)([k.A], () => k.A.getConnectedFrame()),
        f = (0, d.bG)([en.A, es.A], () => null == a || H.vz(a, en.A, es.A, !1)),
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
        N = (0, d.bG)([S.Ay], () => S.Ay.getCurrentEmbeddedActivity()),
        v = (0, T.u)() && null != N && (0, b.f)(),
        O = (0, d.bG)([ei.Ay], () => (0, F.A)(ei.Ay) && (0, eh.isWindows)()),
        L = (0, d.bG)([el.A], () => (null != l ? el.A.findActivity(l, (e) => e.type === ef.$pd.PLAYING) : null)),
        D = null != A && A.ownerId === l && A.state !== ef.XYD.ENDED,
        U = (0, d.bG)([eo.default, er.A], () => (null != u ? (0, M.m1)(u, eo.default, er.A) : void 0)),
        P = (0, q.A)(),
        [w, B] = s.useState(!1),
        K = (0, d.bG)([X.A], () => X.A.getWindowOpen(ef.MLl.ACTIVITY_POPOUT)),
        {
            hasAlreadyLinked: W,
            canStartAuthorization: z,
            connectionApp: J,
            startAuthorization: $,
        } = (0, j.RD)(x, { allowedFlows: [j._M.RPC, j._M.WEB] }),
        [eu, ep] = s.useState(!1),
        eg = (0, E.A)(x?.id);
    s.useEffect(() => {
        eg !== x?.id && ep(!1);
    }, [x, eg]);
    let { isQuestBarEmpty: em, hasLoadedQuestBar: e_ } = (0, Q.c9)({ location: eI.rE.CONFLICT_CHECKS }),
        { parentAnalyticsLocation: ex, analyticsLocations: eC } = (0, y.Ay)(),
        eE = eA.A.useConfig({ location: "ActivityPanelGameCard" }),
        eb = (0, c.K)((e) => {
            e &&
                null != J &&
                ed.default.track(ef.HAw.ACTIVITY_PANEL_SDK_LINK_VIEWED, {
                    game_id: r?.id ?? null,
                    application_id: J.id,
                });
        });
    return (0, i.jsx)(eT, {
        ...n,
        guildId: t,
        canGoLive: O || v || void 0 !== C,
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
        setIsForceShowSharingPopout: B,
        isActivityPopoutOpen: K,
        hasAlreadyLinked: W,
        blockAccountLinkDismissibleContent: !e_ || !em,
        accountLinkCopyConfig: eE,
        parentAnalyticsLocation: ex,
        analyticsLocations: eC,
        canStartAuthorization: z,
        accountLinkButtonRef: eb,
        startAuthorization: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return ep(!0), $(...t);
        },
        didStartAuthorization: eu,
        connectionApp: J,
    });
});
