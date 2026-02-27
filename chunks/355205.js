"use strict";
n.d(t, { A: () => eM }), n(321073);
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
    p = n(397927),
    m = n(73153),
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
    B = n(596458),
    V = n(638934),
    H = n(15285),
    F = n(769015),
    K = n(334074),
    W = n(279250),
    Y = n(880144),
    z = n(277680),
    X = n(118277),
    q = n(905552),
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
    ep = n(954571),
    em = n(975571),
    eg = n(723702),
    e_ = n(498057),
    ef = n(994314),
    ex = n(485599),
    eC = n(204722),
    eE = n(535111),
    eI = n(652215),
    eN = n(5867),
    eb = n(49999),
    eS = n(165610),
    eT = n(9626),
    ey = n(654487),
    ev = n(985018),
    ej = n(176869);
function eR(e) {
    let {
            application: t,
            activity: n,
            embeddedActivity: s,
            runningGame: l,
            hasAlreadyLinked: a,
            didStartAuthorization: r,
            canStartAuthorization: c,
            startAuthorization: d,
            accountLinkUpsellTargetRef: p,
            inviteButtonRef: m,
            accountLinkButtonRef: _,
            gameCommunityGuildId: f,
            activityPopoutTargetRef: x,
            parentAnalyticsLocation: C,
            analyticsLocations: E,
            analyticsContext: I,
        } = e,
        { isQuestBarEmpty: N, hasLoadedQuestBar: b } = (0, ee.c9)({ location: ey.rE.CONFLICT_CHECKS }),
        S = e_.A.useConfig({ location: "ActivityPanelGameCard" }),
        T = !b || !N,
        y = (0, eC.W)(t, n, s),
        v = [],
        j = !1;
    T ||
        (a && r
            ? y && null == s
                ? v.push(u.M.ACCOUNT_LINK_INVITE_FRIENDS)
                : v.push(u.M.POST_ACCOUNT_CONNECTION_RTC_POPOVER)
            : !a && c && null != t && (j = !0),
        null != f && l?.id != null && l?.name != null && v.push(u.M.JOIN_GAME_COMMUNITY_RTC_CTA));
    let {
        shouldShow: R,
        markAsDismissed: O,
        isRecurringExperimentEnabled: M,
    } = (0, K.A)({
        application: t,
        experimentParams: { location: "ActivityPanelGameCard" },
        disabled: !j,
        dismissibleContent: u.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL,
        dismissibleContentGroupName: eb.m.ACCOUNT_NAME_ZONE,
        bypassAutoDismiss: !0,
    });
    !M && j && v.push(u.M.ACCOUNT_LINK_PROMPT);
    let D = (e, t) => {
        R ? O(t) : e(t);
    };
    return T
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
                            targetElementRef: m,
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
                                            ep.default.track(eI.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                                                action_type: "invite_to_game",
                                                game_id: l?.id ?? null,
                                                application_id: n.application_id,
                                            }),
                                            (0, L.X)(C, L.O.INVITE),
                                            ep.default.track(eI.HAw.OPEN_MODAL, {
                                                type: "Send Join Invite",
                                                application_id: n.application_id,
                                                location: I.location,
                                            }),
                                            (0, g.qf)(n, !1);
                                    },
                                },
                            ],
                        })
                      : s === u.M.POST_ACCOUNT_CONNECTION_RTC_POPOVER
                        ? (0, i.jsx)(A.AM, {
                              title: ev.intl.string(ev.t.MxAlrB),
                              body: ev.intl.string(ev.t["/UTTEg"]),
                              targetElementRef: p,
                              position: "top",
                              align: "left",
                              caretConfig: { align: "start" },
                              actions: [
                                  {
                                      text: ev.intl.string(ev.t.aRIFWD),
                                      onClick: () => {
                                          a(eb.i.TAKE_ACTION),
                                              window.open(em.A.getArticleURL(eI.MVz.IN_GAME_FEATURES), "_blank");
                                      },
                                  },
                              ],
                              shouldShow: !0,
                              onRequestClose: () => a(eb.i.USER_DISMISS),
                          })
                        : s === u.M.ACCOUNT_LINK_PROMPT || R
                          ? (0, i.jsx)(A.AM, {
                                graphic: {
                                    type: "dynamic",
                                    component: h.DynamicGraphicComponent.ACCOUNT_LINK_DISPLAY,
                                    props: { application: t },
                                },
                                title: ev.intl.formatToPlainString(S.altTitle ? ev.t.hUbQT2 : ev.t["lo6H6+"], {
                                    gameName: t.name,
                                }),
                                body: ev.intl.string(S.altBody ? ev.t["JKqu+4"] : ev.t.qYAzOp),
                                targetElementRef: _,
                                align: "right",
                                shouldShow: !0,
                                gradientColor: "purple",
                                onRequestClose: () => D(a, eb.i.USER_DISMISS),
                                caretConfig: { align: "end" },
                                actions: [
                                    {
                                        text: ev.intl.string(S.altCta ? ev.t.jynBQ5 : ev.t.lw71Nf),
                                        onClick: () => {
                                            D(a, eb.i.TAKE_ACTION), d({ analyticsLocations: E });
                                        },
                                    },
                                ],
                            })
                          : s === u.M.JOIN_GAME_COMMUNITY_RTC_CTA && null != f && l?.id != null && l?.name != null
                            ? (0, i.jsx)(B.A, {
                                  targetElementRef: x,
                                  gameId: l.id,
                                  gameName: l.name,
                                  gameCommunityGuildId: f,
                                  markAsDismissed: a,
                              })
                            : void 0;
              },
          });
}
let eO = (0, x.A)(function (e) {
    let { message: t } = e;
    return (0, i.jsx)(ef.A, { children: t });
});
class eL extends s.PureComponent {
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
            className: ej.YX,
            children: (0, i.jsx)(p.akl, { importData: t, shouldAnimate: !e, className: ej._7 }),
        });
    }
    renderActions() {
        return (0, i.jsx)(eC.f, { ...this.props, inviteButtonRef: this.inviteButtonRef });
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
        return (0, i.jsx)(eR, {
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
        return (0, i.jsx)(eE.O, {
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
            className: ej.cm,
            ref: this.accountLinkUpsellTargetRef,
            children: [
                e
                    ? (0, i.jsx)(X.A, { title: l, icon: t?.sourceIcon })
                    : (0, i.jsx)(D.Ay, { look: D.Ay.Looks.GRAY, size: D.Ay.Sizes.SMALL, className: ej.Ok }),
                (0, i.jsxs)("div", {
                    className: ej.pq,
                    children: [
                        (0, i.jsx)(ex.A, { children: s }),
                        null != n &&
                            (0, i.jsxs)("div", {
                                className: ej.qi,
                                children: [
                                    (0, i.jsx)(p.tvc, { size: "xxs", color: U.k0.PREMIUM_TIER_2 }),
                                    (0, i.jsx)(Z.A, { className: ej.s, variant: "text-xxs/semibold", children: n }),
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
                ((0, et.gV)(e.type) &&
                    _.A.selectParticipant(
                        e.id,
                        (0, O.Qt)({ applicationId: t.applicationId, instanceId: t.compositeInstanceId }),
                    ),
                (0, et.pQ)(e.type) && (0, b.gk)(eN.Gd.PANEL));
    };
    handleFrameLinkClick = () => {
        let { frame: e, isActivityPopoutOpen: t } = this.props;
        (o()(null != e, "Frame cannot be null during navigation click"), t)
            ? m.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" })
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
                children: (0, i.jsx)(ef.A, { className: ej.Ix, children: d }),
            }),
            h = (0, i.jsx)(J.A, {
                href: e,
                onClick: this.handleApplicationLinkClick,
                children: (0, i.jsx)(ex.A, { className: ej._W, children: t.name }),
            }),
            A = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(F.A, {
                        className: ej.Gt,
                        game: t,
                        size: F.M.SMALL,
                        ref: this.accountLinkUpsellTargetRef,
                    }),
                    (0, i.jsx)(y.M, {
                        popoutTargetRef: this.activityPopoutTargetRef,
                        isForceShowSharingPopout: r,
                        setIsForceShowSharingPopout: o,
                        children: (0, i.jsxs)("div", {
                            className: ej.pq,
                            children: [h, null != s && (0, et.pQ)(s.type) ? u : (0, i.jsx)(eO, { timestamps: c })],
                        }),
                    }),
                ],
            });
        return (0, i.jsx)("div", { className: ej.cm, children: A });
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
                className: ej.rB,
                children: (0, i.jsx)(ex.A, { className: ej._W, children: e.name }),
            }),
            l = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(F.A, {
                        className: ej.Gt,
                        game: e,
                        size: F.M.SMALL,
                        ref: this.accountLinkUpsellTargetRef,
                    }),
                    (0, i.jsxs)("div", { className: ej.pq, children: [s, (0, i.jsx)(eO, { timestamps: n })] }),
                ],
            });
        return (0, i.jsx)("div", { className: ej.cm, children: l });
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
            ((!(0, eC.W)(o, c, t) &&
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
            className: a()(ej.nd, d),
            ref: this.activityPopoutTargetRef,
            children: (0, i.jsxs)("div", {
                className: ej.rf,
                children: [u(), this.renderActions(), this.renderDismissiblePopovers()],
            }),
        });
    }
}
let eM = (0, C.A)(function (e) {
    let { guildId: t, ...n } = e,
        l = (0, d.bG)([ei.default], () => ei.default.getId()),
        a = (0, d.bG)([H.Ay, eA.A], () => (0, q.A)(H.Ay, eA.A)),
        r = (0, d.bG)([eu.A, es.A], () => es.A.getChannel(eu.A.getVoiceChannelId())),
        o = (0, d.bG)([S.Ay], () => S.Ay.getConnectedActivityChannelId()),
        u = (0, d.bG)([es.A], () => es.A.getChannel(o)),
        h = (0, d.bG)([ea.A], () => ea.A.getGuild(u?.guild_id)),
        [A, p] = (0, d.yK)([en.A], () => [en.A.getCurrentUserActiveStream(), en.A.getStreamerActiveStreamMetadata()]),
        m = (0, d.bG)([I.A], () => I.A.useReducedMotion),
        g = (0, d.bG)([S.Ay], () => S.Ay.getCurrentEmbeddedActivity()),
        _ = (0, d.bG)([k.A], () => k.A.getConnectedFrame()),
        f = (0, d.bG)([ea.A, eo.A], () => null == r || W.vz(r, ea.A, eo.A, !1)),
        [x] = (0, R.A)([
            (null != p && null != p.id
                ? p.id
                : null != a && null != a.id
                  ? a.id
                  : null != g
                    ? g.applicationId
                    : null != _
                      ? _.applicationId
                      : void 0) ?? "",
        ]),
        C = (0, d.bG)([G.A], () => G.A.getFakeGameData()),
        b = (0, d.bG)([S.Ay], () => S.Ay.getCurrentEmbeddedActivity()),
        y = (0, T.u)() && null != b && (0, N.f)(),
        O = (0, d.bG)([er.Ay], () => (0, Y.A)(er.Ay) && (0, eg.isWindows)()),
        L = (0, d.bG)([ec.A], () => (null != l ? ec.A.findActivity(l, (e) => e.type === eI.$pd.PLAYING) : null)),
        D = null != A && A.ownerId === l && A.state !== eI.XYD.ENDED,
        U = (0, d.bG)([eh.default, ed.A], () => (null != u ? (0, M.m1)(u, eh.default, ed.A) : void 0)),
        P = (0, $.A)(),
        [w, B] = s.useState(!1),
        F = (0, d.bG)([Q.A], () => Q.A.getWindowOpen(eI.MLl.ACTIVITY_POPOUT)),
        { parentAnalyticsLocation: K, analyticsLocations: z } = (0, v.Ay)(),
        {
            hasAlreadyLinked: X,
            canStartAuthorization: J,
            connectionApp: Z,
            startAuthorization: ee,
        } = (0, j.RD)(x, { allowedFlows: [j._M.RPC, j._M.WEB] }),
        [et, em] = s.useState(!1),
        e_ = (0, E.A)(x?.id);
    s.useEffect(() => {
        e_ !== x?.id && em(!1);
    }, [x, e_, em]);
    let ef = (0, c.K)((e) => {
            e &&
                null != Z &&
                ep.default.track(eI.HAw.ACTIVITY_PANEL_SDK_LINK_VIEWED, {
                    game_id: a?.id ?? null,
                    application_id: Z.id,
                });
        }),
        { enabled: ex } = V.A.useConfig({ location: "ActivityPanelGameCard" }),
        eC = s.useMemo(() => (a?.id != null ? eT.g[a.id] : void 0), [a?.id]),
        eE = (0, d.bG)([el.A], () => null != eC && el.A.isMember(eC), [eC]),
        eN = ex && null != eC && !eE ? eC : void 0;
    return (0, i.jsx)(eL, {
        ...n,
        guildId: t,
        canGoLive: O || y || void 0 !== C,
        activity: L,
        embeddedActivity: g,
        frame: _,
        userId: l,
        runningGame: C ?? a,
        application: x,
        useReducedMotion: m,
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
        isActivityPopoutOpen: F,
        hasAlreadyLinked: X,
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
