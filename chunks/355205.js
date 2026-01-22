n.d(t, { A: () => eT }), n(321073), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(284009),
    o = n.n(s),
    c = n(172218),
    u = n(311907),
    d = n(554146),
    f = n(116833),
    p = n(342494),
    h = n(397927),
    b = n(73153),
    g = n(298990),
    m = n(367513),
    A = n(951001),
    y = n(492684),
    O = n(707606),
    j = n(475743),
    v = n(775602),
    x = n(646865),
    E = n(795816),
    _ = n(933958),
    C = n(47563),
    S = n(576437),
    I = n(688810),
    N = n(362490),
    T = n(429913),
    P = n(568598),
    w = n(384059),
    R = n(47167),
    D = n(402216),
    M = n(603047),
    L = n(404374),
    G = n(379848),
    k = n(625180),
    U = n(91242),
    V = n(15285),
    F = n(769015),
    H = n(279250),
    B = n(880144),
    K = n(277680),
    W = n(118277),
    z = n(905552),
    Y = n(95035),
    q = n(87001),
    X = n(249972),
    J = n(277009),
    Q = n(201805),
    Z = n(95701),
    $ = n(616356),
    ee = n(961350),
    et = n(734057),
    en = n(71393),
    er = n(430452),
    el = n(576705),
    ei = n(290863),
    ea = n(994500),
    es = n(309010),
    eo = n(287809),
    ec = n(157257),
    eu = n(954571),
    ed = n(975571),
    ef = n(723702),
    ep = n(498057),
    eh = n(994314),
    eb = n(485599),
    eg = n(204722),
    em = n(535111),
    eA = n(652215),
    ey = n(5867),
    eO = n(49999),
    ej = n(165610),
    ev = n(654487),
    ex = n(985018),
    eE = n(176869);
function e_(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function eC(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                e_(e, t, n[t]);
            });
    }
    return e;
}
function eS(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eI = (0, y.A)(function (e) {
    let { message: t } = e;
    return (0, r.jsx)(eh.A, { children: t });
});
class eN extends l.PureComponent {
    renderSparkles() {
        let { useReducedMotion: e } = this.props;
        async function t() {
            let { default: e } = await n.e("3408").then(n.t.bind(n, 707827, 19));
            return e;
        }
        return (0, r.jsx)("div", {
            className: eE.YX,
            children: (0, r.jsx)(h.akl, {
                importData: t,
                shouldAnimate: !e,
                className: eE._7,
            }),
        });
    }
    renderActions() {
        return (0, r.jsx)(eg.f, eS(eC({}, this.props), { inviteButtonRef: this.inviteButtonRef }));
    }
    renderAccountLinkPopover() {
        let {
                hasAlreadyLinked: e,
                accountLinkCopyConfig: t,
                blockAccountLinkDismissibleContent: n,
                application: l,
                activity: i,
                embeddedActivity: a,
                analyticsContext: s,
                runningGame: c,
                parentAnalyticsLocation: u,
                analyticsLocations: h,
                canStartAuthorization: b,
                accountLinkButtonRef: m,
                startAuthorization: A,
                didStartAuthorization: y,
            } = this.props,
            O = (0, eg.W)(l, i, a),
            j = [];
        return n
            ? null
            : (e && y
                  ? O && null == a
                      ? j.push(d.M.ACCOUNT_LINK_INVITE_FRIENDS)
                      : j.push(d.M.POST_ACCOUNT_CONNECTION_RTC_POPOVER)
                  : b && null != l && j.push(d.M.ACCOUNT_LINK_PROMPT),
              (0, r.jsx)(G.Ay, {
                  contentTypes: j,
                  groupName: eO.m.ACCOUNT_NAME_ZONE,
                  bypassAutoDismiss: !0,
                  children: (e) => {
                      let { visibleContent: n, markAsDismissed: a } = e;
                      return n === d.M.ACCOUNT_LINK_INVITE_FRIENDS
                          ? (0, r.jsx)(p.AM, {
                                title: ex.intl.string(ex.t["0l2pEt"]),
                                body: ex.intl.string(ex.t["DSZUK/"]),
                                targetElementRef: this.inviteButtonRef,
                                align: "right",
                                shouldShow: !0,
                                onRequestClose: () => a(eO.i.USER_DISMISS),
                                caretConfig: { align: "end" },
                                actions: [
                                    {
                                        text: ex.intl.string(ex.t.YdkBCH),
                                        onClick: () => {
                                            var e;
                                            a(eO.i.TAKE_ACTION),
                                                o()(null != i, "Received null activity"),
                                                eu.default.track(eA.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                                                    action_type: "invite_to_game",
                                                    game_id: null != (e = null == c ? void 0 : c.id) ? e : null,
                                                    application_id: i.application_id,
                                                }),
                                                (0, w.X)(u, w.O.INVITE),
                                                eu.default.track(eA.HAw.OPEN_MODAL, {
                                                    type: "Send Join Invite",
                                                    application_id: i.application_id,
                                                    location: s.location,
                                                }),
                                                (0, g.qf)(i, !1);
                                        },
                                    },
                                ],
                            })
                          : n === d.M.POST_ACCOUNT_CONNECTION_RTC_POPOVER
                            ? (0, r.jsx)(p.AM, {
                                  title: ex.intl.string(ex.t.MxAlrB),
                                  body: ex.intl.string(ex.t["/UTTEg"]),
                                  targetElementRef: this.accountLinkUpsellTargetRef,
                                  position: "top",
                                  align: "left",
                                  caretConfig: { align: "start" },
                                  actions: [
                                      {
                                          text: ex.intl.string(ex.t.aRIFWD),
                                          onClick: () => {
                                              a(eO.i.TAKE_ACTION),
                                                  window.open(ed.A.getArticleURL(eA.MVz.IN_GAME_FEATURES), "_blank");
                                          },
                                      },
                                  ],
                                  shouldShow: !0,
                                  onRequestClose: () => a(eO.i.USER_DISMISS),
                              })
                            : n === d.M.ACCOUNT_LINK_PROMPT
                              ? (0, r.jsx)(p.AM, {
                                    graphic: {
                                        type: "dynamic",
                                        component: f.DynamicGraphicComponent.ACCOUNT_LINK_DISPLAY,
                                        props: { application: l },
                                    },
                                    title: ex.intl.formatToPlainString(t.altTitle ? ex.t.hUbQT2 : ex.t["lo6H6+"], {
                                        gameName: l.name,
                                    }),
                                    body: ex.intl.string(t.altBody ? ex.t["JKqu+4"] : ex.t.qYAzOp),
                                    targetElementRef: m,
                                    align: "right",
                                    shouldShow: !0,
                                    gradientColor: "purple",
                                    onRequestClose: () => a(eO.i.USER_DISMISS),
                                    caretConfig: { align: "end" },
                                    actions: [
                                        {
                                            text: ex.intl.string(t.altCta ? ex.t.jynBQ5 : ex.t.lw71Nf),
                                            onClick: () => {
                                                a(eO.i.TAKE_ACTION), A({ analyticsLocations: h });
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
            setIsForceShowSharingPopout: i,
        } = this.props;
        return (0, r.jsx)(em.O, {
            isStreaming: e,
            application: t,
            game: n,
            onClickNotSharing: () => i(!0),
            isForceShowSharingPopout: l,
            setIsForceShowSharingPopout: i,
            ref: this.accountLinkUpsellTargetRef,
            popoutTargetRef: this.activityPopoutTargetRef,
        });
    }
    renderScreenshare() {
        let { isStreaming: e, streamMetadata: t, streamQualityIndicator: n } = this.props,
            { title: l, sanitizedTitle: i } = (0, K.A)(t);
        return (0, r.jsxs)("div", {
            className: eE.cm,
            ref: this.accountLinkUpsellTargetRef,
            children: [
                e
                    ? (0, r.jsx)(W.A, {
                          title: i,
                          icon: null == t ? void 0 : t.sourceIcon,
                      })
                    : (0, r.jsx)(D.Ay, {
                          look: D.Ay.Looks.GRAY,
                          size: D.Ay.Sizes.SMALL,
                          className: eE.Ok,
                      }),
                (0, r.jsxs)("div", {
                    className: eE.pq,
                    children: [
                        (0, r.jsx)(eb.A, { children: l }),
                        null != n &&
                            (0, r.jsxs)("div", {
                                className: eE.qi,
                                children: [
                                    (0, r.jsx)(h.tvc, {
                                        size: "xxs",
                                        color: L.k0.PREMIUM_TIER_2,
                                    }),
                                    (0, r.jsx)(J.A, {
                                        className: eE.s,
                                        variant: "text-xxs/semibold",
                                        children: n,
                                    }),
                                ],
                            }),
                    ],
                }),
            ],
        });
    }
    renderEmbeddedActivity() {
        let e,
            {
                application: t,
                embeddedActivity: n,
                channel: l,
                channelName: i,
                guildForConnectedChannel: a,
                isForceShowSharingPopout: s,
                setIsForceShowSharingPopout: o,
            } = this.props;
        if (null == n || null == t) return null;
        let c = { start: n.connectedSince },
            u = i;
        null != a && null != l
            ? ((e = eA.BVt.CHANNEL(a.id, l.id)), (u = "".concat(u, " / ").concat(a.name)))
            : null != l && (e = eA.BVt.CHANNEL(eA.ME, l.id));
        let d = (0, r.jsx)(Y.A, {
                href: e,
                onClick: this.handleChannelLinkClick,
                children: (0, r.jsx)(eh.A, {
                    className: eE.Ix,
                    children: u,
                }),
            }),
            f = (0, r.jsx)(Y.A, {
                href: e,
                onClick: this.handleApplicationLinkClick,
                children: (0, r.jsx)(eb.A, {
                    className: eE._W,
                    children: t.name,
                }),
            }),
            p = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(F.A, {
                        className: eE.Gt,
                        game: t,
                        size: F.M.SMALL,
                        ref: this.accountLinkUpsellTargetRef,
                    }),
                    (0, r.jsx)(S.M, {
                        popoutTargetRef: this.activityPopoutTargetRef,
                        isForceShowSharingPopout: s,
                        setIsForceShowSharingPopout: o,
                        children: (0, r.jsxs)("div", {
                            className: eE.pq,
                            children: [f, null != l && (0, Z.pQ)(l.type) ? d : (0, r.jsx)(eI, { timestamps: c })],
                        }),
                    }),
                ],
            });
        return (0, r.jsx)("div", {
            className: eE.cm,
            children: p,
        });
    }
    renderFrame() {
        let { application: e, frame: t } = this.props;
        if (null == t || null == e) return null;
        let n = { start: t.connectedSince },
            l = (0, r.jsx)(h.DUT, {
                onClick: this.handleFrameLinkClick,
                onMouseDown: (e) => {
                    e.stopPropagation();
                },
                className: eE.rB,
                children: (0, r.jsx)(eb.A, {
                    className: eE._W,
                    children: e.name,
                }),
            }),
            i = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(F.A, {
                        className: eE.Gt,
                        game: e,
                        size: F.M.SMALL,
                        ref: this.accountLinkUpsellTargetRef,
                    }),
                    (0, r.jsxs)("div", {
                        className: eE.pq,
                        children: [l, (0, r.jsx)(eI, { timestamps: n })],
                    }),
                ],
            });
        return (0, r.jsx)("div", {
            className: eE.cm,
            children: i,
        });
    }
    render() {
        let {
            canGoLive: e,
            embeddedActivity: t,
            frame: n,
            runningGame: l,
            isStreaming: i,
            streamMetadata: s,
            application: o,
            activity: c,
            className: u,
        } = this.props;
        if (
            !i &&
            ((!(0, eg.W)(o, c, t) &&
                !(function (e) {
                    let { application: t, frame: n } = e;
                    return null != t && null != n && n.applicationId === t.id;
                })({
                    application: o,
                    frame: n,
                }) &&
                !e) ||
                (null == l && null == t && null == n))
        )
            return null;
        let d = () =>
            null == l || (i && (null == s ? void 0 : s.pid) == null)
                ? null != t
                    ? this.renderEmbeddedActivity()
                    : null != n
                      ? this.renderFrame()
                      : this.renderScreenshare()
                : this.renderGame();
        return (0, r.jsx)("div", {
            className: a()(eE.nd, u),
            ref: this.activityPopoutTargetRef,
            children: (0, r.jsxs)("div", {
                className: eE.rf,
                children: [d(), this.renderActions(), this.renderAccountLinkPopover()],
            }),
        });
    }
    constructor(...e) {
        super(...e),
            e_(this, "activityPopoutTargetRef", l.createRef()),
            e_(this, "accountLinkUpsellTargetRef", l.createRef()),
            e_(this, "inviteButtonRef", l.createRef()),
            e_(this, "handleApplicationLinkClick", () => {
                let { isActivityPopoutOpen: e } = this.props;
                this.handleChannelLinkClick(), e && b.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
            }),
            e_(this, "handleChannelLinkClick", () => {
                var e;
                let { channel: t, embeddedActivity: n, isActivityPopoutOpen: r } = this.props;
                o()(null != n, "Activity cannot be null during navigation click"),
                    o()(null != t, "Channel cannot be null during navigation click"),
                    A.A.channelListScrollTo(null != (e = t.guild_id) ? e : eA.ME, t.id),
                    !r &&
                        ((0, Z.gV)(t.type) &&
                            m.A.selectParticipant(
                                t.id,
                                (0, P.Qt)({
                                    applicationId: n.applicationId,
                                    instanceId: n.compositeInstanceId,
                                }),
                            ),
                        (0, Z.pQ)(t.type) && (0, E.gk)(ey.Gd.PANEL));
            }),
            e_(this, "handleFrameLinkClick", () => {
                let { frame: e, isActivityPopoutOpen: t } = this.props;
                (o()(null != e, "Frame cannot be null during navigation click"), t)
                    ? b.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" })
                    : k.A.updateFrameLayoutMode({
                          applicationId: e.applicationId,
                          layoutMode: ej.y.FOCUSED,
                      });
            });
    }
}
let eT = (0, O.A)(function (e) {
    var t;
    let { guildId: n } = e,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l,
                i = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
                    (r = n[l]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                return i;
            }
            if (
                ((i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        i = Object.getOwnPropertyNames(e);
                    for (r = 0; r < i.length; r++)
                        (n = i[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                    return l;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
                    (r = n[l]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            return i;
        })(e, ["guildId"]),
        a = (0, u.bG)([ee.default], () => ee.default.getId()),
        s = (0, u.bG)([V.Ay, ec.A], () => (0, z.A)(V.Ay, ec.A)),
        o = (0, u.bG)([es.A, et.A], () => et.A.getChannel(es.A.getVoiceChannelId())),
        d = (0, u.bG)([_.Ay], () => _.Ay.getConnectedActivityChannelId()),
        f = (0, u.bG)([et.A], () => et.A.getChannel(d)),
        p = (0, u.bG)([en.A], () => en.A.getGuild(null == f ? void 0 : f.guild_id)),
        [h, b] = (0, u.yK)([$.A], () => [$.A.getCurrentUserActiveStream(), $.A.getStreamerActiveStreamMetadata()]),
        g = (0, u.bG)([v.A], () => v.A.useReducedMotion),
        m = (0, u.bG)([_.Ay], () => _.Ay.getCurrentEmbeddedActivity()),
        A = (0, u.bG)([U.A], () => U.A.getConnectedFrame()),
        y = (0, u.bG)([en.A, el.A], () => null == o || H.vz(o, en.A, el.A, !1)),
        [O] = (0, T.A)([
            null !=
            (t =
                null != b && null != b.id
                    ? b.id
                    : null != s && null != s.id
                      ? s.id
                      : null != m
                        ? m.applicationId
                        : null != A
                          ? A.applicationId
                          : void 0)
                ? t
                : "",
        ]),
        E = (0, u.bG)([M.A], () => M.A.getFakeGameData()),
        S = (0, u.bG)([_.Ay], () => _.Ay.getCurrentEmbeddedActivity()),
        P = (0, C.u)() && null != S && (0, x.f)(),
        w = (0, u.bG)([er.A], () => (0, B.A)(er.A) && (0, ef.isWindows)()),
        D = (0, u.bG)([ei.A], () => (null != a ? ei.A.findActivity(a, (e) => e.type === eA.$pd.PLAYING) : null)),
        L = null != h && h.ownerId === a && h.state !== eA.XYD.ENDED,
        G = (0, u.bG)([eo.default, ea.A], () => (null != f ? (0, R.m1)(f, eo.default, ea.A) : void 0)),
        k = (0, X.A)(),
        [F, K] = l.useState(!1),
        W = (0, u.bG)([q.A], () => q.A.getWindowOpen(eA.MLl.ACTIVITY_POPOUT)),
        {
            hasAlreadyLinked: Y,
            canStartAuthorization: J,
            connectionApp: Z,
            startAuthorization: ed,
        } = (0, N.RD)(O, {
            allowedFlows: [N._M.RPC, N._M.WEB],
        }),
        [eh, eb] = l.useState(!1),
        eg = (0, j.A)(null == O ? void 0 : O.id);
    l.useEffect(() => {
        eg !== (null == O ? void 0 : O.id) && eb(!1);
    }, [O, eg]);
    let { isQuestBarEmpty: em, hasLoadedQuestBar: ey } = (0, Q.c9)({ location: ev.rE.CONFLICT_CHECKS }),
        { parentAnalyticsLocation: eO, analyticsLocations: ej } = (0, I.Ay)(),
        ex = ep.A.useConfig({ location: "ActivityPanelGameCard" }),
        eE = (0, c.K)((e) => {
            if (e && null != Z) {
                var t;
                eu.default.track(eA.HAw.ACTIVITY_PANEL_SDK_LINK_VIEWED, {
                    game_id: null != (t = null == s ? void 0 : s.id) ? t : null,
                    application_id: Z.id,
                });
            }
        });
    return (0, r.jsx)(
        eN,
        eS(eC({}, i), {
            guildId: n,
            canGoLive: w || P || void 0 !== E,
            activity: D,
            embeddedActivity: m,
            frame: A,
            userId: a,
            runningGame: null != E ? E : s,
            application: O,
            useReducedMotion: g,
            isStreaming: L,
            channel: f,
            canStream: y,
            stream: h,
            streamMetadata: b,
            channelName: G,
            guildForConnectedChannel: p,
            streamQualityIndicator: k,
            isForceShowSharingPopout: F,
            setIsForceShowSharingPopout: K,
            isActivityPopoutOpen: W,
            hasAlreadyLinked: Y,
            blockAccountLinkDismissibleContent: !ey || !em,
            accountLinkCopyConfig: ex,
            parentAnalyticsLocation: eO,
            analyticsLocations: ej,
            canStartAuthorization: J,
            accountLinkButtonRef: eE,
            startAuthorization: function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return eb(!0), ed(...t);
            },
            didStartAuthorization: eh,
            connectionApp: Z,
        }),
    );
});
