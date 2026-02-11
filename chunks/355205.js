n.d(t, { A: () => ev }), n(321073);
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
    m = n(397927),
    p = n(73153),
    g = n(298990),
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
    q = n(87001),
    X = n(249972),
    J = n(277009),
    Q = n(201805),
    $ = n(95701),
    Z = n(616356),
    ee = n(961350),
    et = n(734057),
    en = n(71393),
    ei = n(430452),
    el = n(576705),
    es = n(290863),
    ea = n(994500),
    er = n(309010),
    eo = n(287809),
    ed = n(157257),
    ec = n(954571),
    eu = n(975571),
    eh = n(723702),
    eA = n(498057),
    em = n(994314),
    ep = n(485599),
    eg = n(204722),
    e_ = n(535111),
    ef = n(652215),
    ex = n(5867),
    eC = n(49999),
    eE = n(165610),
    eI = n(654487),
    eN = n(985018),
    eb = n(176869);
let eS = (0, x.A)(function (e) {
    let { message: t } = e;
    return (0, i.jsx)(em.A, { children: t });
});
class eT extends l.PureComponent {
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
            className: eb.YX,
            children: (0, i.jsx)(m.akl, { importData: t, shouldAnimate: !e, className: eb._7 }),
        });
    }
    renderActions() {
        return (0, i.jsx)(eg.f, { ...this.props, inviteButtonRef: this.inviteButtonRef });
    }
    renderAccountLinkPopover() {
        let {
                hasAlreadyLinked: e,
                accountLinkCopyConfig: t,
                blockAccountLinkDismissibleContent: n,
                application: l,
                activity: s,
                embeddedActivity: a,
                analyticsContext: r,
                runningGame: d,
                parentAnalyticsLocation: c,
                analyticsLocations: m,
                canStartAuthorization: p,
                accountLinkButtonRef: _,
                startAuthorization: f,
                didStartAuthorization: x,
            } = this.props,
            C = (0, eg.W)(l, s, a),
            E = [];
        return n
            ? null
            : (e && x
                  ? C && null == a
                      ? E.push(u.M.ACCOUNT_LINK_INVITE_FRIENDS)
                      : E.push(u.M.POST_ACCOUNT_CONNECTION_RTC_POPOVER)
                  : p && null != l && E.push(u.M.ACCOUNT_LINK_PROMPT),
              (0, i.jsx)(P.Ay, {
                  contentTypes: E,
                  groupName: eC.m.ACCOUNT_NAME_ZONE,
                  bypassAutoDismiss: !0,
                  children: (e) => {
                      let { visibleContent: n, markAsDismissed: a } = e;
                      return n === u.M.ACCOUNT_LINK_INVITE_FRIENDS
                          ? (0, i.jsx)(A.AM, {
                                title: eN.intl.string(eN.t["0l2pEt"]),
                                body: eN.intl.string(eN.t["DSZUK/"]),
                                targetElementRef: this.inviteButtonRef,
                                align: "right",
                                shouldShow: !0,
                                onRequestClose: () => a(eC.i.USER_DISMISS),
                                caretConfig: { align: "end" },
                                actions: [
                                    {
                                        text: eN.intl.string(eN.t.YdkBCH),
                                        onClick: () => {
                                            a(eC.i.TAKE_ACTION),
                                                o()(null != s, "Received null activity"),
                                                ec.default.track(ef.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                                                    action_type: "invite_to_game",
                                                    game_id: d?.id ?? null,
                                                    application_id: s.application_id,
                                                }),
                                                (0, L.X)(c, L.O.INVITE),
                                                ec.default.track(ef.HAw.OPEN_MODAL, {
                                                    type: "Send Join Invite",
                                                    application_id: s.application_id,
                                                    location: r.location,
                                                }),
                                                (0, g.qf)(s, !1);
                                        },
                                    },
                                ],
                            })
                          : n === u.M.POST_ACCOUNT_CONNECTION_RTC_POPOVER
                            ? (0, i.jsx)(A.AM, {
                                  title: eN.intl.string(eN.t.MxAlrB),
                                  body: eN.intl.string(eN.t["/UTTEg"]),
                                  targetElementRef: this.accountLinkUpsellTargetRef,
                                  position: "top",
                                  align: "left",
                                  caretConfig: { align: "start" },
                                  actions: [
                                      {
                                          text: eN.intl.string(eN.t.aRIFWD),
                                          onClick: () => {
                                              a(eC.i.TAKE_ACTION),
                                                  window.open(eu.A.getArticleURL(ef.MVz.IN_GAME_FEATURES), "_blank");
                                          },
                                      },
                                  ],
                                  shouldShow: !0,
                                  onRequestClose: () => a(eC.i.USER_DISMISS),
                              })
                            : n === u.M.ACCOUNT_LINK_PROMPT
                              ? (0, i.jsx)(A.AM, {
                                    graphic: {
                                        type: "dynamic",
                                        component: h.DynamicGraphicComponent.ACCOUNT_LINK_DISPLAY,
                                        props: { application: l },
                                    },
                                    title: eN.intl.formatToPlainString(t.altTitle ? eN.t.hUbQT2 : eN.t["lo6H6+"], {
                                        gameName: l.name,
                                    }),
                                    body: eN.intl.string(t.altBody ? eN.t["JKqu+4"] : eN.t.qYAzOp),
                                    targetElementRef: _,
                                    align: "right",
                                    shouldShow: !0,
                                    gradientColor: "purple",
                                    onRequestClose: () => a(eC.i.USER_DISMISS),
                                    caretConfig: { align: "end" },
                                    actions: [
                                        {
                                            text: eN.intl.string(t.altCta ? eN.t.jynBQ5 : eN.t.lw71Nf),
                                            onClick: () => {
                                                a(eC.i.TAKE_ACTION), f({ analyticsLocations: m });
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
            isForceShowSharingPopout: l,
            setIsForceShowSharingPopout: s,
        } = this.props;
        return (0, i.jsx)(e_.O, {
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
            { title: l, sanitizedTitle: s } = (0, K.A)(t);
        return (0, i.jsxs)("div", {
            className: eb.cm,
            ref: this.accountLinkUpsellTargetRef,
            children: [
                e
                    ? (0, i.jsx)(W.A, { title: s, icon: t?.sourceIcon })
                    : (0, i.jsx)(D.Ay, { look: D.Ay.Looks.GRAY, size: D.Ay.Sizes.SMALL, className: eb.Ok }),
                (0, i.jsxs)("div", {
                    className: eb.pq,
                    children: [
                        (0, i.jsx)(ep.A, { children: l }),
                        null != n &&
                            (0, i.jsxs)("div", {
                                className: eb.qi,
                                children: [
                                    (0, i.jsx)(m.tvc, { size: "xxs", color: U.k0.PREMIUM_TIER_2 }),
                                    (0, i.jsx)(J.A, { className: eb.s, variant: "text-xxs/semibold", children: n }),
                                ],
                            }),
                    ],
                }),
            ],
        });
    }
    handleApplicationLinkClick = () => {
        let { isActivityPopoutOpen: e } = this.props;
        this.handleChannelLinkClick(), e && p.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
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
                (0, $.pQ)(e.type) && (0, b.gk)(ex.Gd.PANEL));
    };
    handleFrameLinkClick = () => {
        let { frame: e, isActivityPopoutOpen: t } = this.props;
        (o()(null != e, "Frame cannot be null during navigation click"), t)
            ? p.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" })
            : w.A.updateFrameLayoutMode({ applicationId: e.applicationId, layoutMode: eE.y.FOCUSED });
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
            ? ((e = ef.BVt.CHANNEL(a.id, l.id)), (c = `${c} / ${a.name}`))
            : null != l && (e = ef.BVt.CHANNEL(ef.ME, l.id));
        let u = (0, i.jsx)(z.A, {
                href: e,
                onClick: this.handleChannelLinkClick,
                children: (0, i.jsx)(em.A, { className: eb.Ix, children: c }),
            }),
            h = (0, i.jsx)(z.A, {
                href: e,
                onClick: this.handleApplicationLinkClick,
                children: (0, i.jsx)(ep.A, { className: eb._W, children: t.name }),
            }),
            A = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(B.A, {
                        className: eb.Gt,
                        game: t,
                        size: B.M.SMALL,
                        ref: this.accountLinkUpsellTargetRef,
                    }),
                    (0, i.jsx)(v.M, {
                        popoutTargetRef: this.activityPopoutTargetRef,
                        isForceShowSharingPopout: r,
                        setIsForceShowSharingPopout: o,
                        children: (0, i.jsxs)("div", {
                            className: eb.pq,
                            children: [h, null != l && (0, $.pQ)(l.type) ? u : (0, i.jsx)(eS, { timestamps: d })],
                        }),
                    }),
                ],
            });
        return (0, i.jsx)("div", { className: eb.cm, children: A });
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
                className: eb.rB,
                children: (0, i.jsx)(ep.A, { className: eb._W, children: e.name }),
            }),
            s = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(B.A, {
                        className: eb.Gt,
                        game: e,
                        size: B.M.SMALL,
                        ref: this.accountLinkUpsellTargetRef,
                    }),
                    (0, i.jsxs)("div", { className: eb.pq, children: [l, (0, i.jsx)(eS, { timestamps: n })] }),
                ],
            });
        return (0, i.jsx)("div", { className: eb.cm, children: s });
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
            activity: d,
            className: c,
        } = this.props;
        if (
            !s &&
            ((!(0, eg.W)(o, d, t) &&
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
            className: a()(eb.nd, c),
            ref: this.activityPopoutTargetRef,
            children: (0, i.jsxs)("div", {
                className: eb.rf,
                children: [u(), this.renderActions(), this.renderAccountLinkPopover()],
            }),
        });
    }
}
let ev = (0, C.A)(function (e) {
    let { guildId: t, ...n } = e,
        s = (0, c.bG)([ee.default], () => ee.default.getId()),
        a = (0, c.bG)([V.Ay, ed.A], () => (0, Y.A)(V.Ay, ed.A)),
        r = (0, c.bG)([er.A, et.A], () => et.A.getChannel(er.A.getVoiceChannelId())),
        o = (0, c.bG)([S.Ay], () => S.Ay.getConnectedActivityChannelId()),
        u = (0, c.bG)([et.A], () => et.A.getChannel(o)),
        h = (0, c.bG)([en.A], () => en.A.getGuild(u?.guild_id)),
        [A, m] = (0, c.yK)([Z.A], () => [Z.A.getCurrentUserActiveStream(), Z.A.getStreamerActiveStreamMetadata()]),
        p = (0, c.bG)([I.A], () => I.A.useReducedMotion),
        g = (0, c.bG)([S.Ay], () => S.Ay.getCurrentEmbeddedActivity()),
        _ = (0, c.bG)([k.A], () => k.A.getConnectedFrame()),
        f = (0, c.bG)([en.A, el.A], () => null == r || H.vz(r, en.A, el.A, !1)),
        [x] = (0, R.A)([
            (null != m && null != m.id
                ? m.id
                : null != a && null != a.id
                  ? a.id
                  : null != g
                    ? g.applicationId
                    : null != _
                      ? _.applicationId
                      : void 0) ?? "",
        ]),
        C = (0, c.bG)([G.A], () => G.A.getFakeGameData()),
        b = (0, c.bG)([S.Ay], () => S.Ay.getCurrentEmbeddedActivity()),
        v = (0, T.u)() && null != b && (0, N.f)(),
        O = (0, c.bG)([ei.Ay], () => (0, F.A)(ei.Ay) && (0, eh.isWindows)()),
        L = (0, c.bG)([es.A], () => (null != s ? es.A.findActivity(s, (e) => e.type === ef.$pd.PLAYING) : null)),
        D = null != A && A.ownerId === s && A.state !== ef.XYD.ENDED,
        U = (0, c.bG)([eo.default, ea.A], () => (null != u ? (0, M.m1)(u, eo.default, ea.A) : void 0)),
        P = (0, X.A)(),
        [w, B] = l.useState(!1),
        K = (0, c.bG)([q.A], () => q.A.getWindowOpen(ef.MLl.ACTIVITY_POPOUT)),
        {
            hasAlreadyLinked: W,
            canStartAuthorization: z,
            connectionApp: J,
            startAuthorization: $,
        } = (0, j.RD)(x, { allowedFlows: [j._M.RPC, j._M.WEB] }),
        [eu, em] = l.useState(!1),
        ep = (0, E.A)(x?.id);
    l.useEffect(() => {
        ep !== x?.id && em(!1);
    }, [x, ep]);
    let { isQuestBarEmpty: eg, hasLoadedQuestBar: e_ } = (0, Q.c9)({ location: eI.rE.CONFLICT_CHECKS }),
        { parentAnalyticsLocation: ex, analyticsLocations: eC } = (0, y.Ay)(),
        eE = eA.A.useConfig({ location: "ActivityPanelGameCard" }),
        eN = (0, d.K)((e) => {
            e &&
                null != J &&
                ec.default.track(ef.HAw.ACTIVITY_PANEL_SDK_LINK_VIEWED, {
                    game_id: a?.id ?? null,
                    application_id: J.id,
                });
        });
    return (0, i.jsx)(eT, {
        ...n,
        guildId: t,
        canGoLive: O || v || void 0 !== C,
        activity: L,
        embeddedActivity: g,
        frame: _,
        userId: s,
        runningGame: C ?? a,
        application: x,
        useReducedMotion: p,
        isStreaming: D,
        channel: u,
        canStream: f,
        stream: A,
        streamMetadata: m,
        channelName: U,
        guildForConnectedChannel: h,
        streamQualityIndicator: P,
        isForceShowSharingPopout: w,
        setIsForceShowSharingPopout: B,
        isActivityPopoutOpen: K,
        hasAlreadyLinked: W,
        blockAccountLinkDismissibleContent: !e_ || !eg,
        accountLinkCopyConfig: eE,
        parentAnalyticsLocation: ex,
        analyticsLocations: eC,
        canStartAuthorization: z,
        accountLinkButtonRef: eN,
        startAuthorization: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return em(!0), $(...t);
        },
        didStartAuthorization: eu,
        connectionApp: J,
    });
});
