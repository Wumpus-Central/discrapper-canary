n.d(t, { A: () => ej }), n(321073);
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
    g = n(397927),
    m = n(73153),
    p = n(298990),
    _ = n(367513),
    x = n(951001),
    f = n(492684),
    E = n(707606),
    C = n(475743),
    I = n(775602),
    S = n(646865),
    b = n(795816),
    N = n(933958),
    T = n(47563),
    j = n(576437),
    v = n(688810),
    y = n(362490),
    R = n(429913),
    O = n(568598),
    L = n(384059),
    D = n(47167),
    M = n(402216),
    G = n(603047),
    U = n(404374),
    P = n(379848),
    k = n(625180),
    w = n(91242),
    V = n(15285),
    B = n(769015),
    H = n(279250),
    F = n(880144),
    Y = n(277680),
    W = n(118277),
    K = n(905552),
    z = n(95035),
    X = n(87001),
    q = n(249972),
    J = n(277009),
    Q = n(201805),
    Z = n(95701),
    $ = n(616356),
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
    eg = n(994314),
    em = n(485599),
    ep = n(204722),
    e_ = n(535111),
    ex = n(652215),
    ef = n(5867),
    eE = n(49999),
    eC = n(165610),
    eI = n(654487),
    eS = n(985018),
    eb = n(176869);
let eN = (0, f.A)(function (e) {
    let { message: t } = e;
    return (0, i.jsx)(eg.A, { children: t });
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
            children: (0, i.jsx)(g.akl, { importData: t, shouldAnimate: !e, className: eb._7 }),
        });
    }
    renderActions() {
        return (0, i.jsx)(ep.f, { ...this.props, inviteButtonRef: this.inviteButtonRef });
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
                analyticsLocations: g,
                canStartAuthorization: m,
                accountLinkButtonRef: _,
                startAuthorization: x,
                didStartAuthorization: f,
            } = this.props,
            E = (0, ep.W)(l, s, a),
            C = [];
        return n
            ? null
            : (e && f
                  ? E && null == a
                      ? C.push(u.M.ACCOUNT_LINK_INVITE_FRIENDS)
                      : C.push(u.M.POST_ACCOUNT_CONNECTION_RTC_POPOVER)
                  : m && null != l && C.push(u.M.ACCOUNT_LINK_PROMPT),
              (0, i.jsx)(P.Ay, {
                  contentTypes: C,
                  groupName: eE.m.ACCOUNT_NAME_ZONE,
                  bypassAutoDismiss: !0,
                  children: (e) => {
                      let { visibleContent: n, markAsDismissed: a } = e;
                      return n === u.M.ACCOUNT_LINK_INVITE_FRIENDS
                          ? (0, i.jsx)(A.AM, {
                                title: eS.intl.string(eS.t["0l2pEt"]),
                                body: eS.intl.string(eS.t["DSZUK/"]),
                                targetElementRef: this.inviteButtonRef,
                                align: "right",
                                shouldShow: !0,
                                onRequestClose: () => a(eE.i.USER_DISMISS),
                                caretConfig: { align: "end" },
                                actions: [
                                    {
                                        text: eS.intl.string(eS.t.YdkBCH),
                                        onClick: () => {
                                            a(eE.i.TAKE_ACTION),
                                                o()(null != s, "Received null activity"),
                                                ec.default.track(ex.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                                                    action_type: "invite_to_game",
                                                    game_id: d?.id ?? null,
                                                    application_id: s.application_id,
                                                }),
                                                (0, L.X)(c, L.O.INVITE),
                                                ec.default.track(ex.HAw.OPEN_MODAL, {
                                                    type: "Send Join Invite",
                                                    application_id: s.application_id,
                                                    location: r.location,
                                                }),
                                                (0, p.qf)(s, !1);
                                        },
                                    },
                                ],
                            })
                          : n === u.M.POST_ACCOUNT_CONNECTION_RTC_POPOVER
                            ? (0, i.jsx)(A.AM, {
                                  title: eS.intl.string(eS.t.MxAlrB),
                                  body: eS.intl.string(eS.t["/UTTEg"]),
                                  targetElementRef: this.accountLinkUpsellTargetRef,
                                  position: "top",
                                  align: "left",
                                  caretConfig: { align: "start" },
                                  actions: [
                                      {
                                          text: eS.intl.string(eS.t.aRIFWD),
                                          onClick: () => {
                                              a(eE.i.TAKE_ACTION),
                                                  window.open(eu.A.getArticleURL(ex.MVz.IN_GAME_FEATURES), "_blank");
                                          },
                                      },
                                  ],
                                  shouldShow: !0,
                                  onRequestClose: () => a(eE.i.USER_DISMISS),
                              })
                            : n === u.M.ACCOUNT_LINK_PROMPT
                              ? (0, i.jsx)(A.AM, {
                                    graphic: {
                                        type: "dynamic",
                                        component: h.DynamicGraphicComponent.ACCOUNT_LINK_DISPLAY,
                                        props: { application: l },
                                    },
                                    title: eS.intl.formatToPlainString(t.altTitle ? eS.t.hUbQT2 : eS.t["lo6H6+"], {
                                        gameName: l.name,
                                    }),
                                    body: eS.intl.string(t.altBody ? eS.t["JKqu+4"] : eS.t.qYAzOp),
                                    targetElementRef: _,
                                    align: "right",
                                    shouldShow: !0,
                                    gradientColor: "purple",
                                    onRequestClose: () => a(eE.i.USER_DISMISS),
                                    caretConfig: { align: "end" },
                                    actions: [
                                        {
                                            text: eS.intl.string(t.altCta ? eS.t.jynBQ5 : eS.t.lw71Nf),
                                            onClick: () => {
                                                a(eE.i.TAKE_ACTION), x({ analyticsLocations: g });
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
            { title: l, sanitizedTitle: s } = (0, Y.A)(t);
        return (0, i.jsxs)("div", {
            className: eb.cm,
            ref: this.accountLinkUpsellTargetRef,
            children: [
                e
                    ? (0, i.jsx)(W.A, { title: s, icon: t?.sourceIcon })
                    : (0, i.jsx)(M.Ay, { look: M.Ay.Looks.GRAY, size: M.Ay.Sizes.SMALL, className: eb.Ok }),
                (0, i.jsxs)("div", {
                    className: eb.pq,
                    children: [
                        (0, i.jsx)(em.A, { children: l }),
                        null != n &&
                            (0, i.jsxs)("div", {
                                className: eb.qi,
                                children: [
                                    (0, i.jsx)(g.tvc, { size: "xxs", color: U.k0.PREMIUM_TIER_2 }),
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
        this.handleChannelLinkClick(), e && m.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
    };
    handleChannelLinkClick = () => {
        let { channel: e, embeddedActivity: t, isActivityPopoutOpen: n } = this.props;
        o()(null != t, "Activity cannot be null during navigation click"),
            o()(null != e, "Channel cannot be null during navigation click"),
            x.A.channelListScrollTo(e.guild_id ?? ex.ME, e.id),
            !n &&
                ((0, Z.gV)(e.type) &&
                    _.A.selectParticipant(
                        e.id,
                        (0, O.Qt)({ applicationId: t.applicationId, instanceId: t.compositeInstanceId }),
                    ),
                (0, Z.pQ)(e.type) && (0, b.gk)(ef.Gd.PANEL));
    };
    handleFrameLinkClick = () => {
        let { frame: e, isActivityPopoutOpen: t } = this.props;
        (o()(null != e, "Frame cannot be null during navigation click"), t)
            ? m.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" })
            : k.A.updateFrameLayoutMode({ applicationId: e.applicationId, layoutMode: eC.y.FOCUSED });
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
            ? ((e = ex.BVt.CHANNEL(a.id, l.id)), (c = `${c} / ${a.name}`))
            : null != l && (e = ex.BVt.CHANNEL(ex.ME, l.id));
        let u = (0, i.jsx)(z.A, {
                href: e,
                onClick: this.handleChannelLinkClick,
                children: (0, i.jsx)(eg.A, { className: eb.Ix, children: c }),
            }),
            h = (0, i.jsx)(z.A, {
                href: e,
                onClick: this.handleApplicationLinkClick,
                children: (0, i.jsx)(em.A, { className: eb._W, children: t.name }),
            }),
            A = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(B.A, {
                        className: eb.Gt,
                        game: t,
                        size: B.M.SMALL,
                        ref: this.accountLinkUpsellTargetRef,
                    }),
                    (0, i.jsx)(j.M, {
                        popoutTargetRef: this.activityPopoutTargetRef,
                        isForceShowSharingPopout: r,
                        setIsForceShowSharingPopout: o,
                        children: (0, i.jsxs)("div", {
                            className: eb.pq,
                            children: [h, null != l && (0, Z.pQ)(l.type) ? u : (0, i.jsx)(eN, { timestamps: d })],
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
            l = (0, i.jsx)(g.DUT, {
                onClick: this.handleFrameLinkClick,
                onMouseDown: (e) => {
                    e.stopPropagation();
                },
                className: eb.rB,
                children: (0, i.jsx)(em.A, { className: eb._W, children: e.name }),
            }),
            s = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(B.A, {
                        className: eb.Gt,
                        game: e,
                        size: B.M.SMALL,
                        ref: this.accountLinkUpsellTargetRef,
                    }),
                    (0, i.jsxs)("div", { className: eb.pq, children: [l, (0, i.jsx)(eN, { timestamps: n })] }),
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
            ((!(0, ep.W)(o, d, t) &&
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
let ej = (0, E.A)(function (e) {
    let { guildId: t, ...n } = e,
        s = (0, c.bG)([ee.default], () => ee.default.getId()),
        a = (0, c.bG)([V.Ay, ed.A], () => (0, K.A)(V.Ay, ed.A)),
        r = (0, c.bG)([er.A, et.A], () => et.A.getChannel(er.A.getVoiceChannelId())),
        o = (0, c.bG)([N.Ay], () => N.Ay.getConnectedActivityChannelId()),
        u = (0, c.bG)([et.A], () => et.A.getChannel(o)),
        h = (0, c.bG)([en.A], () => en.A.getGuild(u?.guild_id)),
        [A, g] = (0, c.yK)([$.A], () => [$.A.getCurrentUserActiveStream(), $.A.getStreamerActiveStreamMetadata()]),
        m = (0, c.bG)([I.A], () => I.A.useReducedMotion),
        p = (0, c.bG)([N.Ay], () => N.Ay.getCurrentEmbeddedActivity()),
        _ = (0, c.bG)([w.A], () => w.A.getConnectedFrame()),
        x = (0, c.bG)([en.A, el.A], () => null == r || H.vz(r, en.A, el.A, !1)),
        [f] = (0, R.A)([
            (null != g && null != g.id
                ? g.id
                : null != a && null != a.id
                  ? a.id
                  : null != p
                    ? p.applicationId
                    : null != _
                      ? _.applicationId
                      : void 0) ?? "",
        ]),
        E = (0, c.bG)([G.A], () => G.A.getFakeGameData()),
        b = (0, c.bG)([N.Ay], () => N.Ay.getCurrentEmbeddedActivity()),
        j = (0, T.u)() && null != b && (0, S.f)(),
        O = (0, c.bG)([ei.A], () => (0, F.A)(ei.A) && (0, eh.isWindows)()),
        L = (0, c.bG)([es.A], () => (null != s ? es.A.findActivity(s, (e) => e.type === ex.$pd.PLAYING) : null)),
        M = null != A && A.ownerId === s && A.state !== ex.XYD.ENDED,
        U = (0, c.bG)([eo.default, ea.A], () => (null != u ? (0, D.m1)(u, eo.default, ea.A) : void 0)),
        P = (0, q.A)(),
        [k, B] = l.useState(!1),
        Y = (0, c.bG)([X.A], () => X.A.getWindowOpen(ex.MLl.ACTIVITY_POPOUT)),
        {
            hasAlreadyLinked: W,
            canStartAuthorization: z,
            connectionApp: J,
            startAuthorization: Z,
        } = (0, y.RD)(f, { allowedFlows: [y._M.RPC, y._M.WEB] }),
        [eu, eg] = l.useState(!1),
        em = (0, C.A)(f?.id);
    l.useEffect(() => {
        em !== f?.id && eg(!1);
    }, [f, em]);
    let { isQuestBarEmpty: ep, hasLoadedQuestBar: e_ } = (0, Q.c9)({ location: eI.rE.CONFLICT_CHECKS }),
        { parentAnalyticsLocation: ef, analyticsLocations: eE } = (0, v.Ay)(),
        eC = eA.A.useConfig({ location: "ActivityPanelGameCard" }),
        eS = (0, d.K)((e) => {
            e &&
                null != J &&
                ec.default.track(ex.HAw.ACTIVITY_PANEL_SDK_LINK_VIEWED, {
                    game_id: a?.id ?? null,
                    application_id: J.id,
                });
        });
    return (0, i.jsx)(eT, {
        ...n,
        guildId: t,
        canGoLive: O || j || void 0 !== E,
        activity: L,
        embeddedActivity: p,
        frame: _,
        userId: s,
        runningGame: E ?? a,
        application: f,
        useReducedMotion: m,
        isStreaming: M,
        channel: u,
        canStream: x,
        stream: A,
        streamMetadata: g,
        channelName: U,
        guildForConnectedChannel: h,
        streamQualityIndicator: P,
        isForceShowSharingPopout: k,
        setIsForceShowSharingPopout: B,
        isActivityPopoutOpen: Y,
        hasAlreadyLinked: W,
        blockAccountLinkDismissibleContent: !e_ || !ep,
        accountLinkCopyConfig: eC,
        parentAnalyticsLocation: ef,
        analyticsLocations: eE,
        canStartAuthorization: z,
        accountLinkButtonRef: eS,
        startAuthorization: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return eg(!0), Z(...t);
        },
        didStartAuthorization: eu,
        connectionApp: J,
    });
});
