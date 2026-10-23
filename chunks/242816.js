n.d(t, { A: () => i0 });
var i,
    r = n(477900),
    a = n(582128),
    s = n(503698),
    l = n.n(s),
    o = n(435558),
    d = n.n(o),
    c = n(806163),
    u = n(837381),
    _ = n(621466),
    E = n(17928),
    A = n(52133),
    h = n(451988),
    f = n(661531),
    I = n(331322),
    p = n(312138),
    T = n(602853),
    m = n(43990),
    g = n(689175),
    S = n(951001),
    N = n(964486),
    C = n(260762),
    O = n(793574),
    R = n(688810),
    L = n(198052),
    y = n(268218),
    D = n(749884);
n(321073);
var v = n(862328),
    b = n(67811),
    M = n(27232),
    P = n(308528),
    U = n(933958),
    w = n(969151),
    G = n(941971),
    x = n(900848),
    k = n(771640),
    F = n(366811),
    B = n(616356),
    V = n(734057),
    H = n(309010),
    j = n(977997),
    W = n(935208),
    Y = n(181079),
    K = n(5180),
    $ = n(863005),
    z = n(152007),
    X = n(458294),
    q = n(576705),
    Z = n(573163),
    Q = n(543465),
    J = n(428784),
    ee = n(451394),
    et = n(597601),
    en = n(834730),
    ei = n(983851),
    er = n(183623),
    ea = n(323384),
    es = n(866665),
    el = n(104171),
    eo = n(63995),
    ed = n(518769),
    ec = n(287809),
    eu = n(607567),
    e_ = n(403362),
    eE = n(652215),
    eA = n(105292),
    eh = n(785332);
function ef(e, t) {
    return 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              className: eh.nM,
              children: [
                  (0, r.jsx)(e, { className: eh.RI, color: "currentColor" }),
                  (0, r.jsx)(el.Ay, { guildId: void 0, users: t, max: 6 }),
              ],
          });
}
function eI() {
    let e = (0, E.yK)([Y.A, V.A], () =>
            W.default
                .keys(Y.A.getFavoriteChannels())
                .map((e) => V.A.getChannel(e))
                .filter(e_.Vq),
        ),
        t = e.map((e) => e.id),
        n = e.filter((e) => e.type === eE.rbe.GUILD_VOICE),
        i = e.filter((e) => e.type === eE.rbe.GUILD_STAGE_VOICE).map((e) => e.id),
        a = (0, E.yK)(
            [eu.Ay],
            () =>
                d().flatMap(n, (e) =>
                    eu.Ay.getVoiceStatesForChannel(e).map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
                ),
            [n],
        ),
        s = (0, E.yK)([eo.A], () =>
            d().flatMap(i, (e) =>
                eo.A.getMutableParticipants(e, ed.ip.SPEAKER)
                    .filter((e) => e.type === ed.wY.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
            ),
        ),
        l = (0, E.bG)([eo.A], () => {
            let e = 0;
            for (let t of i) e += eo.A.getParticipantCount(t, ed.ip.AUDIENCE);
            return e;
        }),
        o = (0, E.yK)(
            [B.A],
            () =>
                B.A.getAllApplicationStreams()
                    .filter((e) => t.includes(e.channelId))
                    .map((e) => e.ownerId),
            [t],
        ),
        c = (0, E.yK)(
            [U.Ay],
            () => {
                let e = U.Ay.getEmbeddedActivitiesByChannel(),
                    n = [];
                for (let i of t) n.push(...(e.get(i)?.flatMap((e) => Array.from(e.userIds)) ?? []));
                return n;
            },
            [t],
        ),
        u = (0, E.yK)([ec.default], () => c.map((e) => ec.default.getUser(e)), [c]),
        _ = (0, E.yK)([ec.default], () => o.map((e) => ec.default.getUser(e)), [o]),
        A = ef(
            ei.H,
            a.filter((e) => !o.includes(e.id) && !c.includes(e.id)),
        ),
        h =
            0 === s.length
                ? null
                : (0, r.jsxs)("div", {
                      className: eh.nM,
                      children: [
                          (0, r.jsx)(ee.q, { size: "lg", color: "currentColor", className: eh.RI }),
                          (0, r.jsx)(el.Ay, { guildId: void 0, users: s, max: 3 }),
                          (0, r.jsxs)("div", {
                              className: eh.GZ,
                              children: [
                                  (0, r.jsx)(et.L, { size: "xs", color: "currentColor" }),
                                  (0, r.jsx)(en.E, {
                                      className: eh._I,
                                      color: "text-default",
                                      variant: "text-xs/medium",
                                      children: l,
                                  }),
                              ],
                          }),
                      ],
                  }),
        f = ef(
            er.F,
            _.filter((e) => null != e && !c.includes(e.id)),
        ),
        I = ef(ea.k, u);
    return (0, r.jsxs)(r.Fragment, { children: [h, A, f, I] });
}
function ep() {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: l()(eh.nM, eh.Dl),
                children: (0, r.jsx)("span", { className: l()(eh.cN, eh.NT), children: eA.intl.string(eA.t.wMWyci) }),
            }),
            (0, r.jsx)(eI, {}),
        ],
    });
}
function eT(e) {
    let { "aria-label": t = !1, children: n } = e,
        i = a.useMemo(
            () =>
                (0, r.jsx)(en.E, {
                    variant: "text-md/semibold",
                    color: "text-default",
                    className: eh.A_,
                    children: (0, r.jsx)(ep, {}),
                }),
            [],
        );
    return (0, r.jsx)(es.m, {
        __unsupportedReactNodeAsText: i,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": !1 === t ? void 0 : t,
        asContainer: !0,
        children: n,
    });
}
var em = n(195572);
let eg = { analyticsSource: { page: eE.liQ.GUILD_CHANNEL, section: eE.JJy.CHANNEL_LIST, object: eE.ZSU.CHANNEL } };
function eS() {
    let e,
        t,
        n,
        i,
        s,
        l,
        o,
        d,
        c,
        _,
        A,
        h,
        f = (0, u.Vd)("favorites"),
        [I, p] = a.useState(!1),
        T = (0, J.$)("favorite-server-context"),
        { favoriteGuildMuted: m, favoriteChannels: g } = (0, E.cf)([Y.A], () => ({
            favoriteChannels: Y.A.getFavoriteChannels(),
            favoriteGuildMuted: Y.A.favoriteGuildMuted,
        })),
        S = (0, E.bG)([H.Ay], () => H.Ay.getChannelId(eE.YYv)),
        N = (0, E.bG)([V.A], () => V.A.getChannel(S)),
        C = (0, F.A)((e) => e.guildId),
        O = (0, K.ai)(C),
        { badge: R, unread: L } = (0, E.cf)([$.A, V.A, X.default, z.A, q.A, Z.Ay, Q.Ay], () => {
            let e = W.default.keys(g),
                t = new Set();
            return e.reduce(
                (e, n) => {
                    let i = V.A.getChannel(n),
                        r = i?.getGuildId(),
                        a = Z.Ay.getMentionCount(n);
                    if (
                        (t.has(n) || (t.add(n), (e.badge = e.badge + a)),
                        (e.unread = e.unread || (Z.Ay.hasUnread(n) && X.default.shouldCountChannelUnread(i, a))),
                        null != r)
                    ) {
                        let i = $.A.getActiveJoinedRelevantThreadsForParent(r, n);
                        for (let n in i) {
                            let i = Z.Ay.getMentionCount(n);
                            t.has(n) || (t.add(n), (e.badge += i));
                            let r = V.A.getChannel(n);
                            e.unread = e.unread || (Z.Ay.hasUnread(n) && X.default.shouldCountChannelUnread(r, i));
                        }
                    }
                    return e;
                },
                { badge: 0, unread: !1 },
            );
        }),
        y =
            ((t = null != (e = (0, E.bG)([H.Ay], () => H.Ay.getVoiceChannelId())) && null != g[e]),
            (n = (0, E.bG)([B.A], () => {
                if (!t) return !1;
                let e = B.A.getCurrentUserActiveStream();
                return null != e && null != g[e.channelId];
            })),
            (i = (0, E.bG)([B.A], () => B.A.getAllApplicationStreams().some((e) => null != g[e.channelId]))),
            (s = (0, E.bG)([j.A], () => t && null != e && j.A.hasVideo(e), [t, e])),
            (l = (0, E.yK)([U.Ay], () =>
                W.default.keys(g).reduce((e, t) => (e.push(...U.Ay.getEmbeddedActivitiesForChannel(t)), e), []),
            )),
            (o = (0, E.bG)([U.Ay], () =>
                Array.from(U.Ay.getSelfEmbeddedActivities().values()).some((e) => {
                    let { location: t } = e,
                        n = (0, w.H)(t);
                    return null != n && null != g[n];
                }),
            )),
            (d = l.length > 0),
            (c = !1),
            (_ = !1),
            (A = !1),
            (h = !1),
            t ? ((c = !s), (_ = s), (A = n), (h = o)) : ((A = i), (h = d)),
            (0, k.oi)({ audio: c, video: _, screenshare: A, liveStage: !1, isCurrentUserConnected: t, activity: h })),
        D = R > 0 ? (0, k.wN)(R) : null;
    return (0, r.jsxs)(x.c, {
        children: [
            (0, r.jsx)(G.A, { overlay: !0, selected: O, hovered: I, unread: L && !m }),
            (0, r.jsx)(eT, {
                children: (0, r.jsx)(v.Q, {
                    selected: !0,
                    upperBadge: y,
                    lowerBadge: D,
                    children: (0, r.jsx)("div", {
                        children: (0, r.jsx)(b.j, {
                            ...f,
                            ariaLabel: eA.intl.formatToPlainString(eA.t["/uzRss"], {
                                guildName: eA.intl.string(eA.t.wMWyci),
                                mentions: R,
                            }),
                            "aria-selected": O,
                            to: { pathname: eE.BVt.CHANNEL(eE.YYv, S), state: eg },
                            selected: O || I,
                            onMouseEnter: () => p(!0),
                            onMouseLeave: () => p(!1),
                            onMouseDown: function () {
                                null != N && P.A.preload(N.guild_id, N.id);
                            },
                            onContextMenu: T,
                            children: (0, r.jsx)(M.StarIcon, {
                                size: "custom",
                                color: "currentColor",
                                className: em.w,
                                width: 20,
                                height: 20,
                            }),
                        }),
                    }),
                }),
            }),
        ],
    });
}
var eN = n(633965),
    eC = n(857071),
    eO = n(851109),
    eR = n(72314),
    eL = n(543897),
    ey = n(696451),
    eD = n(71393),
    ev = n(711014),
    eb = n(723702),
    eM = n(757780),
    eP = n(263715),
    eU = n(967198),
    ew = n(173860),
    eG = n(383394),
    ex = n(131677),
    ek = n(73153);
let eF = {};
class eB extends E.Ay.PersistedStore {
    static displayName = "ViewHistoryStore";
    static persistKey = "ViewHistoryStore";
    initialize(e) {
        null != e &&
            Object.keys(e).forEach((t) => {
                "number" == typeof e[t] && (eF[t] = e[t]);
            });
    }
    getState() {
        return eF;
    }
    hasViewed(e) {
        return null != eF[e];
    }
}
let eV = new eB(ek.h, {
    VIEW_HISTORY_MARK_VIEW: function (e) {
        let { key: t } = e;
        eF[t] = Date.now();
    },
});
var eH = n(531685),
    ej = n(583613);
let eW = "app-download-item",
    eY = "add-server-item";
function eK() {
    return !1;
}
function e$(e) {
    let t = X.default.getMutableGuildStates();
    return (
        (e === eE.sFm.SERVER_DISCOVERY_BADGE && !eV.hasViewed(eE.sFm.SERVER_DISCOVERY_BADGE)) ||
        (e !== eW && e !== eY && t[e ?? "null"]?.highImportanceMentionCount > 0)
    );
}
let ez = (0, ej.L_)((e, t, n) => ["null", ...t, ...e, eY, eE.sFm.E3_SERVER_DISCOVERY_BADGE, eW]);
function eX(e) {
    let { ref: t, ...n } = e,
        i = (0, E.yK)([ev.Ay, ex.A, X.default], () =>
            ez(ev.Ay.getGuildFolders(), ex.A.getUnreadPrivateChannelIds(), X.default.getStoreChangeSentinel()),
        ),
        a = (0, E.bG)([eH.A], () => eH.A.isFocused()),
        s = (0, E.bG)([eG.A], () => eG.A.getExpandedFolders());
    return (0, r.jsx)(ew.A, {
        ...n,
        ref: t,
        items: i,
        isUnread: eK,
        textUnread: eA.intl.string(eA.t.y2b7CA),
        textMention: eA.intl.string(eA.t.y2b7CA),
        isMentioned: e$,
        animate: a,
        expandedFolders: s,
    });
}
n(667532);
var eq = n(868285),
    eZ = n(763827),
    eQ = n(941143),
    eJ = n(778712),
    e0 = n(812993),
    e1 = n(442433),
    e2 = n(620982),
    e3 = n(571694),
    e5 = n(47167),
    e6 = n(598104),
    e4 = n(297334),
    e7 = n(427358),
    e8 = n(907459),
    e9 = n(994500),
    te = n(145408);
let tt = (0, n(240921).Ay)({
    kind: "user",
    name: "2026-10-guild-tooltip-lazy-content",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function tn(e) {
    let t = tt.useConfig({ location: e }).enabled,
        [n, i] = a.useState(!1),
        [r] = a.useState(() => new h.Ep());
    return (
        a.useEffect(() => () => r.stop(), [r]),
        {
            isOpen: n,
            shouldRenderRichContent: !t || n,
            handleTooltipShow: a.useCallback(() => {
                (r.stop(), i(!0));
            }, [r]),
            handleTooltipHide: a.useCallback(() => {
                r.start(300, () => i(!1));
            }, [r]),
        }
    );
}
function ti(e) {
    let { icon: t, users: n } = e;
    return 0 === n.length
        ? null
        : (0, r.jsxs)("div", {
              className: eh.nM,
              children: [
                  (0, r.jsx)(t, { className: eh.RI, color: "currentColor" }),
                  (0, r.jsx)(el.Ay, { users: n, max: 6 }),
              ],
          });
}
function tr(e) {
    let { muteConfig: t, className: n } = e;
    return t?.end_time == null
        ? (0, r.jsx)(en.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: n,
              children: eA.intl.string(eA.t.fpKdS1),
          })
        : (0, r.jsx)(te.A, { muteConfig: t, className: n });
}
function ta(e) {
    let t,
        n,
        i,
        s,
        o,
        d,
        c,
        u,
        _,
        A,
        h,
        f,
        I,
        { channel: p } = e,
        T = p.id,
        {
            activityUsers: m,
            streamUsers: g,
            voiceUsers: S,
        } = ((t = p.id),
        (n = (0, E.bG)([e9.A], () => e9.A.getBlockedOrIgnoredIDs())),
        (i = (0, E.bG)([e7.A], () => e7.A.getUserAffinitiesMap(), [])),
        (s = (0, E.yK)(
            [U.Ay, ec.default],
            () =>
                U.Ay.getEmbeddedActivitiesForChannel(t)
                    .flatMap((e) => Array.from(e.userIds))
                    .map((e) => ec.default.getUser(e)),
            [t],
        )),
        (o = a.useMemo(() => (0, e4.aw)(s, n), [s, n])),
        (d = a.useMemo(() => (0, e8.L)(o, i, "DirectMessageTooltip - activityUsers"), [o, i])),
        (c = (0, E.yK)(
            [B.A, ec.default],
            () => {
                let e = B.A.getAllApplicationStreamsForChannel(t)
                    .map((e) => e.ownerId)
                    .map((e) => ec.default.getUser(e));
                return (0, e4.aw)(e, n);
            },
            [t, n],
        )),
        (u = a.useMemo(() => (0, e4.aw)(c, n), [c, n])),
        (_ = a.useMemo(() => (0, e8.L)(u, i, "DirectMessageTooltip - activityUsers"), [u, i])),
        (A = a.useMemo(() => _.filter((e) => !d.some((t) => t.id === e.id)), [_, d])),
        (h = (0, E.yK)(
            [eu.Ay],
            () => {
                let e = eu.Ay.getVoiceStatesForChannel(p).map((e) => {
                    let { user: t } = e;
                    return t;
                });
                return (0, e4.aw)(e, n);
            },
            [p, n],
        )),
        (f = a.useMemo(() => (0, e4.aw)(h, n), [h, n])),
        (I = a.useMemo(() => (0, e8.L)(f, i, "DirectMessageTooltip - voiceUsers"), [f, i])),
        {
            voiceUsers: a.useMemo(
                () => I.filter((e) => !d.some((t) => t.id === e.id) && !_.some((t) => t.id === e.id)),
                [I, d, _],
            ),
            streamUsers: A,
            activityUsers: d,
        }),
        N = (0, r.jsx)(ti, { icon: ei.H, users: S }),
        C = (0, r.jsx)(ti, { icon: er.F, users: g }),
        O = (0, r.jsx)(ti, { icon: ea.k, users: m }),
        { isMuted: R, muteConfig: L } = (0, E.cf)(
            [Q.Ay],
            () => ({ isMuted: Q.Ay.isChannelMuted(null, T), muteConfig: Q.Ay.getChannelMuteConfig(null, T) }),
            [T],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            N,
            C,
            O,
            R ? (0, r.jsx)(tr, { muteConfig: L, className: l()(eh.LM, { [eh.Sx]: null != N || null != C }) }) : null,
        ],
    });
}
function ts(e) {
    let { channel: t } = e,
        n = (0, e5.Ay)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: l()(eh.nM, eh.Dl),
                children: (0, r.jsx)("span", { className: l()(eh.cN, eh.NT), children: n }),
            }),
            (0, r.jsx)(ta, { channel: t }),
        ],
    });
}
function tl(e) {
    let { channel: t, children: n } = e,
        i = (0, e5.Ay)(t),
        { shouldRenderRichContent: s, handleTooltipShow: l, handleTooltipHide: o } = tn("DirectMessageTooltip"),
        d = a.useMemo(
            () =>
                (0, r.jsx)(en.E, {
                    variant: "text-md/semibold",
                    color: "text-default",
                    className: eh.A_,
                    children: s ? (0, r.jsx)(ts, { channel: t }) : i,
                }),
            [t, i, s],
        );
    return (0, r.jsx)(es.m, {
        __unsupportedReactNodeAsText: d,
        onTooltipShow: l,
        onTooltipHide: o,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": i ?? void 0,
        asContainer: !0,
        children: n,
    });
}
let to = { friction: 28, tension: 600 };
function td(e) {
    switch (e) {
        case "height":
        case "opacity":
            return { duration: 150, ...to };
        case "scale":
            return { ...to };
        default:
            throw Error(`DirectMessage: getSpringConfigs() - Invalid spring ${String(e)}`);
    }
}
class tc extends a.PureComponent {
    static defaultProps = { badge: 0, audio: !1, video: !1, isCurrentUserInThisDMCall: !1 };
    state = {
        hovered: !1,
        animating: !0,
        controller: new eQ.Controller({ scale: 0, height: 0, opacity: 0, config: td }),
    };
    componentWillEnter(e) {
        let { controller: t } = this.state;
        (e(),
            t
                .update({ immediate: !eH.A.isFocused(), height: 1, opacity: 1, scale: 1, config: td })
                .start()
                .then(() => this.setState({ animating: !1 })));
    }
    componentWillAppear(e) {
        let { controller: t } = this.state;
        t.update({ immediate: !0, scale: 1, opacity: 1, height: 1, config: td }).start().then(e);
    }
    componentWillLeave(e) {
        let { controller: t } = this.state;
        this.setState({ animating: !0 }, () =>
            t.update({ immediate: !eH.A.isFocused(), height: 0, opacity: 0, scale: 0, config: td }).start().then(e),
        );
    }
    componentWillUnmount() {
        this.state.controller.dispose();
    }
    getAnimatedStyle() {
        let { size: e } = this.props,
            { controller: t } = this.state,
            { opacity: n, height: i, scale: r } = t.springs;
        return { opacity: n, height: i.to([0, 1], [0, e]), transform: r.to([0, 1], [0.5, 1]).to((e) => `scale(${e})`) };
    }
    getChannelIcon() {
        let { channel: e } = this.props,
            t = e.type === eE.rbe.DM ? ec.default.getUser(e.getRecipientId()) : null;
        return null != t ? t.getAvatarURL(void 0, 48, !1) : (0, e3.Y)(e);
    }
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            i = t.type === eE.rbe.DM ? ec.default.getUser(t.getRecipientId()) : null;
        null != i
            ? (0, e1.L3)(e, async () => {
                  let { default: e } = await Promise.all([
                      n.e("339715"),
                      n.e("790484"),
                      n.e("780348"),
                      n.e("622936"),
                      n.e("216947"),
                      n.e("463317"),
                      n.e("926132"),
                      n.e("834552"),
                      n.e("993103"),
                      n.e("708757"),
                      n.e("893190"),
                      n.e("585968"),
                      n.e("393336"),
                      n.e("146652"),
                      n.e("776273"),
                      n.e("391763"),
                      n.e("28102"),
                      n.e("189673"),
                      n.e("882073"),
                      n.e("797558"),
                      n.e("955557"),
                      n.e("571210"),
                      n.e("691994"),
                      n.e("229787"),
                      n.e("576665"),
                      n.e("88342"),
                      n.e("311802"),
                      n.e("698965"),
                      n.e("368358"),
                      n.e("235313"),
                      n.e("947502"),
                      n.e("474610"),
                      n.e("436564"),
                      n.e("245996"),
                      n.e("700792"),
                      n.e("965789"),
                      n.e("592822"),
                      n.e("529422"),
                      n.e("823427"),
                      n.e("307059"),
                      n.e("309291"),
                      n.e("198415"),
                      n.e("838056"),
                      n.e("935483"),
                      n.e("508829"),
                      n.e("17244"),
                      n.e("516054"),
                      n.e("298199"),
                      n.e("864464"),
                      n.e("439778"),
                  ]).then(n.bind(n, 385913));
                  return (n) => (0, r.jsx)(e, { ...n, channel: t, user: i });
              })
            : (0, e1.L3)(e, async () => {
                  let { default: e } = await Promise.all([
                      n.e("926132"),
                      n.e("893190"),
                      n.e("393336"),
                      n.e("146652"),
                      n.e("391763"),
                      n.e("955557"),
                      n.e("368358"),
                      n.e("947502"),
                      n.e("965789"),
                      n.e("198415"),
                      n.e("935483"),
                      n.e("368530"),
                      n.e("566378"),
                      n.e("17244"),
                      n.e("153416"),
                      n.e("760200"),
                  ]).then(n.bind(n, 4027));
                  return (n) => (0, r.jsx)(e, { ...n, channel: t, selected: !1 });
              });
    };
    render() {
        let {
                channel: e,
                channelName: t,
                selected: n,
                badge: i,
                audio: a,
                video: s,
                stream: l,
                isCurrentUserInThisDMCall: o,
                isIncomingCall: d,
                isOngoingCall: c,
                unread: u,
                treeItemProps: _,
            } = this.props,
            { hovered: E, animating: A } = this.state,
            h = e.isMultiUserDM() && null == e.icon,
            f = () =>
                (0, r.jsx)(b.j, {
                    to: eE.BVt.CHANNEL(eE.ME, e.id),
                    onMouseEnter: () => this.setState({ hovered: !0 }),
                    onMouseLeave: () => this.setState({ hovered: !1 }),
                    selected: n || E,
                    ariaLabel:
                        null != t
                            ? [
                                  eA.intl.formatToPlainString(eA.t.hKarnZ, { name: t, mentions: i }),
                                  d ? eA.intl.string(eA.t["fk1/bX"]) : c ? eA.intl.string(eA.t["NGg/fm"]) : null,
                              ]
                                  .filter(Boolean)
                                  .join(", ")
                            : "",
                    onContextMenu: this.handleContextMenu,
                    icon: h ? void 0 : this.getChannelIcon(),
                    backgroundStyle: h ? "on-hover" : "always",
                    children: h
                        ? (0, r.jsx)(e6.A, {
                              channel: e,
                              size: eJ._3.SIZE_40,
                              facepileSizeOverride: eJ._3.SIZE_32,
                              "aria-hidden": !0,
                          })
                        : void 0,
                    ..._,
                });
        return (0, r.jsx)(eQ.animated.div, {
            style: this.getAnimatedStyle(),
            children: (0, r.jsxs)(x.c, {
                children: [
                    (0, r.jsx)(G.A, { overlay: !0, hovered: !A && E, selected: !A && n, unread: !A && u }),
                    (0, r.jsx)(tl, {
                        channel: e,
                        children: (0, r.jsx)(v.Q, {
                            rounded: !0,
                            selected: !1,
                            lowerBadge: i > 0 ? (0, k.wN)(i, void 0, !0) : null,
                            upperBadge: (0, k.oi)({ audio: a, video: s, screenshare: l, isCurrentUserConnected: o }),
                            lowerBadgeSize: { width: (0, e0.o6)(i) },
                            children: f(),
                        }),
                    }),
                ],
            }),
        });
    }
}
function tu(e) {
    let { ref: t, ...n } = e,
        i = n.channel.id,
        a = (0, e5.Ay)(n.channel),
        s = (0, u.Vd)(i, 2),
        l = (0, E.bG)([eZ.A], () => eZ.A.getChannelId(), []),
        o = (0, E.bG)([L.A], () => L.A.getMode(i), [i]),
        d = (0, E.bG)([B.A], () => B.A.getAllApplicationStreamsForChannel(i).length > 0),
        c = (0, E.bG)([eu.Ay], () => eu.Ay.getVoiceStatesForChannel(n.channel).length > 0, [n.channel]),
        _ = (0, E.bG)([H.Ay], () => H.Ay.getChannelId(), []),
        A = (0, E.bG)([Z.Ay], () => Z.Ay.getMentionCount(i), [i]),
        h = l === i,
        { isIncomingCall: I, isOngoingCall: p } = (0, e2.A)(i),
        m = !1,
        g = !1;
    (h || c) && ((m = o === eE._Of.VOICE), (g = o === eE._Of.VIDEO));
    let S = (0, T.r)(f.A.modules.guildbar.AVATAR_SIZE);
    return (0, r.jsx)(tc, {
        ...n,
        ref: t,
        channelName: a,
        unread: A > 0,
        selected: _ === i,
        badge: A,
        audio: m,
        video: g,
        stream: d,
        isCurrentUserInThisDMCall: h,
        isIncomingCall: I,
        isOngoingCall: p,
        size: S,
        treeItemProps: s,
    });
}
function t_() {
    (0, E.bG)([V.A], () => V.A.getPrivateChannelsVersion());
    let e = V.A.getMutablePrivateChannels(),
        t = (0, E.yK)([ex.A], () => ex.A.getUnreadPrivateChannelIds()),
        { selectedVoiceGuildId: n, selectedVoiceChannelId: i } = (0, E.cf)([eZ.A], () => ({
            selectedVoiceGuildId: eZ.A.getGuildId(),
            selectedVoiceChannelId: eZ.A.getChannelId(),
        })),
        s = t.map((t) => {
            let n = e[t];
            return null == n || n.id === i ? null : (0, r.jsx)(tu, { channel: n }, n.id);
        }),
        l = null == n && null != i ? e[i] : null;
    return (
        null != l && s.unshift((0, r.jsx)(tu, { channel: l }, l.id)),
        (0, r.jsx)(I.B, {
            id: "guild-list-unread-dms",
            role: "group",
            "aria-label": eA.intl.string(eA.t.YUU0RF),
            gap: "xs",
            hidden: s.length < 1,
            children: (0, r.jsx)(eq.F, { component: a.Fragment, children: s }),
        })
    );
}
var tE = n(192308),
    tA = n(32880),
    th = n(939249),
    tf = n(728309);
function tI(e) {
    let {
            children: t,
            text: n,
            disableWrapper: i = !1,
            disabled: s = !1,
            hideOnClick: o = !0,
            shouldShow: d,
            forceOpen: c,
            selected: u = !1,
        } = e,
        _ = a.useMemo(
            () =>
                null == n || s
                    ? null
                    : (0, r.jsx)(en.E, {
                          variant: "text-md/semibold",
                          color: "text-default",
                          className: eh.A_,
                          children: n,
                      }),
            [n, s],
        ),
        E = i ? t : (0, r.jsx)("div", { className: l()(tf.p, { [tf.w]: u }), children: t });
    return (0, r.jsx)(es.m, {
        __unsupportedReactNodeAsText: _,
        position: "right",
        spacing: 12,
        hideOnClick: o,
        shouldShow: d,
        forceOpen: c,
        ariaHidden: !0,
        asContainer: !i,
        children: E,
    });
}
var tp = n(93776);
let tT = function (e) {
        let { ref: t, ...n } = e,
            {
                id: i,
                onClick: s,
                onContextMenu: o,
                icon: d,
                selected: c,
                tooltip: _,
                upperBadge: E,
                lowerBadge: A,
                lowerBadgeSize: h,
                showPill: f = !0,
                className: I,
                "aria-label": p,
                children: T,
                onMouseEnter: m,
                onMouseLeave: g,
                onMouseDown: S,
            } = n,
            N = (0, u.Vd)(i),
            [C, O] = a.useState(!1),
            R = p ?? ("string" == typeof _ ? _ : void 0);
        return (0, r.jsxs)(x.c, {
            children: [
                f ? (0, r.jsx)(G.A, { overlay: !0, hovered: C, selected: c }) : null,
                (0, r.jsx)(tI, {
                    text: _,
                    selected: c,
                    children: (0, r.jsx)(v.Q, {
                        selected: !0,
                        upperBadge: E,
                        lowerBadge: A,
                        lowerBadgeSize: h,
                        children: (0, r.jsx)(th.D, {
                            innerRef: t,
                            onMouseEnter: () => {
                                (m?.(), O(!0));
                            },
                            onMouseLeave: () => {
                                (g?.(), O(!1));
                            },
                            onMouseDown: S,
                            className: l()(tp.oZ, I, { [tp.wH]: c || C }),
                            onClick: s,
                            "aria-label": R,
                            "aria-selected": c,
                            onContextMenu: o,
                            focusProps: { enabled: !1 },
                            ...N,
                            children: null != d && (0, r.jsx)(d, { className: tp.sF, color: "currentColor" }),
                        }),
                    }),
                }),
                T,
            ],
        });
    },
    tm = "DOWNLOAD_APPS";
function tg() {
    let e = (0, tE.useModalsStore)((e) => (0, tE.hasModalOpenSelector)(e, tm));
    return (0, r.jsx)(tT, {
        id: "app-download-button",
        onClick: () => {
            (0, tE.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 987482));
                    return (t) => (0, r.jsx)(e, { source: "Guilds", ...t });
                },
                { modalKey: tm },
            );
        },
        selected: e,
        tooltip: eA.intl.string(eA.t.Z7jwrJ),
        icon: tA.DownloadIcon,
    });
}
var tS = n(245604),
    tN = n(272613),
    tC = n(398884),
    tO = n(772366),
    tR = n(728321),
    tL = n(260509),
    ty = n(284009),
    tD = n.n(ty),
    tv = n(949152),
    tb = n(66834),
    tM = n(174459),
    tP = n(759223);
function tU(e) {
    let t = a.useRef(null),
        n = e.map((e) => e[0]);
    return (
        a.useLayoutEffect(() => {
            let n = requestAnimationFrame(() => {
                let n = t.current;
                if (null != n) for (let [t, i] of e) t ? n.classList.add(i) : n.classList.remove(i);
            });
            return () => cancelAnimationFrame(n);
        }, n),
        t
    );
}
function tw(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return (
        tD()(t.type !== eP.PJ.ROOT, "[GuildDropTarget] Tried using a root node as a drop target."),
        {
            accept: e,
            canDrop: (e) =>
                e.nodeId !== t.id &&
                (!i || e.type !== eP.PJ.FOLDER || t.type !== eP.PJ.FOLDER) &&
                (e.type !== eP.PJ.FOLDER || null == t.parentId),
            drop(e) {
                let { nodeId: r } = e;
                (i && t.type !== eP.PJ.FOLDER && tM.default.track(eE.HAw.GUILD_FOLDER_CREATED),
                    tb.A.moveById(r, t.id, n, i));
            },
            collect: (e) => ({ canDrop: e.canDrop(), isOver: e.isOver() }),
        }
    );
}
function tG(e) {
    let { name: t, targetNode: n, combine: i, below: s } = e,
        l = a.useMemo(() => tw([eP.PJ.GUILD, eP.PJ.FOLDER], n, s, i), [n, s, i]),
        [{ canDrop: o, isOver: d }, c] = (0, tv.H)(l),
        u = tU([
            [o, tP.OP],
            [d, tP.NQ],
        ]);
    return (0, r.jsx)("div", {
        ref: (e) => {
            ((u.current = e), c(e));
        },
        "data-dnd-name": eA.intl.formatToPlainString(eA.t["A5aDw+"], { itemName: t }),
        className: tP.aC,
    });
}
function tx(e) {
    let { name: t, targetNode: n, onDragOverChanged: i } = e,
        [{ canDrop: s, isOver: o }, d] = (0, tv.H)(() => tw([eP.PJ.GUILD], n, !0, !0));
    a.useEffect(() => {
        i?.(o);
    }, [i, o]);
    let c = tU([
        [s, tP.OP],
        [o, tP.NQ],
    ]);
    return (0, r.jsx)(tI, {
        text: t,
        shouldShow: o,
        forceOpen: o,
        disableWrapper: !0,
        children: (0, r.jsx)("div", {
            ref: (e) => {
                ((c.current = e), d(e));
            },
            "data-dnd-name": eA.intl.formatToPlainString(eA.t.qiQ0QI, { itemName: t }),
            className: l()(tP.dw, {}),
        }),
    });
}
let tk = a.memo(function (e) {
    let { name: t, targetNode: n, noCombine: i = !1, below: a = !1, onDragOverChanged: s } = e,
        l = !i && null == n.parentId;
    return (0, r.jsxs)("div", {
        className: tP.iE,
        "aria-hidden": !0,
        children: [
            (0, r.jsx)(tG, { name: t, targetNode: n, below: a }),
            l ? (0, r.jsx)(tx, { name: t, targetNode: n, onDragOverChanged: s }) : null,
        ],
    });
});
function tF(e) {
    let { name: t, targetNode: n } = e,
        [{ canDrop: i, isOver: a }, s] = (0, tv.H)(() => tw([eP.PJ.GUILD], n, !0, !0)),
        l = tU([[a, tP.a7]]),
        o = tU([
            [a, tP.NQ],
            [i, tP.OP],
        ]);
    return (0, r.jsx)("div", {
        ref: l,
        className: tP.Ro,
        "aria-hidden": !0,
        children: (0, r.jsx)("div", {
            className: tP.aO,
            children: (0, r.jsx)("div", {
                ref: (e) => {
                    ((o.current = e), s(e));
                },
                "aria-label": `At end of ${t}`,
                className: tP.aC,
            }),
        }),
    });
}
function tB(e) {
    let { children: t } = e,
        [, n] = (0, tv.H)({ accept: [] });
    return (0, r.jsx)("div", {
        ref: (e) => {
            n(e);
        },
        children: t,
    });
}
var tV = n(819638),
    tH = n(260727);
let tj = { origin: { x: -16, y: 0 }, targetWidth: 48, targetHeight: 48, offset: { x: 0, y: 0 } };
function tW(e) {
    (0, e1.L3)(e, async () => {
        let { default: e } = await n.e("117288").then(n.bind(n, 4571));
        return (t) => (0, r.jsx)(e, { ...t });
    });
}
function tY(e) {
    let { disableTooltip: t, lastTargetNode: n } = e,
        i = (0, E.yK)([eD.A], () => eD.A.getGuildsArray()),
        s = (0, E.bG)([ec.default], () => ec.default.getCurrentUser()),
        l = a.useMemo(() => i.some((e) => (0, tL.bM)(e, s)), [i, s]),
        o = (0, tE.useModalsStore)((e) => (0, tE.hasModalOpenSelector)(e, tV.fc)),
        { analyticsLocations: d } = (0, R.Ay)();
    return (0, r.jsx)("div", {
        className: tH.Uq,
        children: (0, r.jsxs)(tR.A, {
            tutorialId: l ? "create-more-servers" : "create-first-server",
            inlineSpecs: tj,
            position: "right",
            disabled: t,
            children: [
                (0, r.jsx)(tT, {
                    showPill: !1,
                    id: "create-join-button",
                    onClick: function () {
                        (0, tC.Sn)()
                            ? (0, tO.A)({
                                  analyticsSource: { page: eE.ThZ.CREATE_JOIN_GUILD_MODAL },
                                  analyticsLocation: {
                                      page: eE.ThZ.CREATE_JOIN_GUILD_MODAL,
                                      section: eE.JJy.GUILD_CAP_UPSELL_MODAL,
                                  },
                                  analyticsLocations: d,
                              })
                            : tN.A.openCreateGuildModal({ location: "Guild List" });
                    },
                    selected: o,
                    onContextMenu: tW,
                    tooltip: eA.intl.string(eA.t.l5WIbf),
                    icon: tS.U,
                }),
                null != n &&
                    (0, r.jsx)(tk, { name: eA.intl.string(eA.t["45xjM5"]), targetNode: n, below: !0, noCombine: !0 }),
            ],
        }),
    });
}
var tK = n(565787),
    t$ = n(791606),
    tz = n(486020),
    tX = n(183588);
function tq(e) {
    let [t, i] = a.useState(!1),
        s = (0, u.Vd)(`guild-${e.id}`);
    return (0, r.jsx)(x.c, {
        children: (0, r.jsx)(tI, {
            text: e.name,
            children: (0, r.jsx)(v.Q, {
                className: tX.o,
                selected: t,
                lowerBadge: (0, r.jsx)(e0.fk, { icon: (0, tK.k)(t$.A), disableColor: !0, className: tX._ }),
                children: (0, r.jsx)(b.j, {
                    name: e.name,
                    onMouseEnter: function () {
                        i(!0);
                    },
                    onMouseLeave: function () {
                        i(!1);
                    },
                    onClick: function () {
                        (0, tE.openModalLazy)(async () => {
                            let { default: t } = await n.e("642945").then(n.bind(n, 537560));
                            return (n) => (0, r.jsx)(t, { name: e.name, guildId: e.id, ...n });
                        });
                    },
                    icon:
                        null != e.icon
                            ? tz.Ay.getGuildIconURL({ id: e.id, icon: e.icon, canAnimate: !1, size: 42 })
                            : null,
                    ...s,
                }),
            }),
        }),
    });
}
var tZ = n(696292),
    tQ = n(836480),
    tJ = n(533129),
    t0 = n(726845),
    t1 = n(837057),
    t2 = n(310419),
    t3 = n(488995),
    t5 = n(324580),
    t6 = n(190107);
let t4 = function (e) {
    let { selected: t, onClick: n, questId: i, className: s, ref: l } = e,
        o = a.useCallback(() => {
            (0, tJ.WL)({ source: t3.GlobalDiscoveryAnalyticsLocations.GUILDS_BAR_ICON });
            let e = void 0 !== i ? t3.GlobalDiscoveryTab.QUESTS : t0.A.getField("selectedTab");
            switch (e) {
                case t3.GlobalDiscoveryTab.QUESTS:
                    return (0, t1.transitionToGlobalDiscovery)({
                        tab: t3.GlobalDiscoveryTab.QUESTS,
                        location: t6.rE.DISCOVERY_COMPASS,
                        questContent: tZ.u.DISCOVERY_COMPASS,
                        questId: i,
                    });
                case t3.GlobalDiscoveryTab.SERVERS:
                    return (0, t1.transitionToGlobalDiscovery)({
                        tab: t3.GlobalDiscoveryTab.SERVERS,
                        entrypoint: t5.J8.GUILDS_BAR,
                    });
                case t3.GlobalDiscoveryTab.APPS:
                    return (0, t1.transitionToGlobalDiscovery)({
                        tab: t3.GlobalDiscoveryTab.APPS,
                        newSessionState: {
                            entrypoint: { name: t2.sW.GLOBAL_DISCOVERY_BUTTON },
                            restorePreviousView: !0,
                        },
                    });
                default:
                    return (0, t1.transitionToGlobalDiscovery)({ tab: e });
            }
        }, [i]);
    return (0, r.jsx)(tT, {
        id: "guild-discover-button",
        ref: l,
        className: s,
        onClick: () => {
            (o(), void 0 !== n && n());
        },
        selected: t,
        tooltip: eA.intl.string(eA.t["4nEZLk"]),
        icon: tQ.CompassIcon,
    });
};
var t7 = n(506774),
    t8 = n(509963),
    t9 = n(111159),
    ne = n(793943),
    nt = n(927578),
    nn = n(350972),
    ni = n(677056),
    nr = n(526162),
    na = n(174197);
function ns() {
    let [e, t] = (0, E.yK)([ec.default, nr.A], () => [
            nr.A.getCurrentDesktopIcon(),
            nt.Ay.isPremium(ec.default.getCurrentUser()),
        ]),
        n = (0, ne.fy)().activePanel === ne.HP.APP_ICON,
        i = (0, na.gG)(e),
        a = i.id !== nn.LW.DEFAULT && (t || n),
        s = (0, r.jsx)(t9.p, { size: "custom", color: "currentColor", width: 24, height: 24 });
    return null != i && a ? (0, r.jsx)(ni.A, { id: i.id, size: na.N8.SIZE_48 }) : s;
}
var nl = n(531260),
    no = n(411976),
    nd = n(912309),
    nc = n(400492),
    nu = n(354670),
    n_ = n(619921),
    nE = n(340829),
    nA = n(966846),
    nh = n(674378),
    nf = n(394953),
    nI = n(202541),
    np = n(235079),
    nT = n(222219);
let nm = { origin: { x: -16, y: 0 }, targetWidth: 48, targetHeight: 48, offset: { x: 0, y: 0 } };
function ng(e) {
    let { selected: t, user: n, badge: i, link: s, showProgressBadge: l } = e,
        [o, d] = a.useState(!1),
        [c, _] = a.useState(!1),
        [E, A] = a.useState(null),
        [h, f] = a.useState(0),
        I = (0, u.Vd)("home"),
        p = (0, ne.fy)().activePanel === ne.HP.APP_ICON;
    function T() {
        (A(null), f(0), clearTimeout(E));
    }
    if (null == n) return null;
    let m = eA.intl.string(eA.t.YUU0RF);
    c && (m = t7.w.get(eE.wqg) ? eA.intl.string(eA.t["nkq1l+"]) : eA.intl.string(eA.t.Be8Q5E));
    let g = null;
    !t && l && (g = (0, r.jsx)(t8.A, { className: nT.Cp, determineOwnVisibility: !1 }));
    let S = t || o || p,
        N = (0, r.jsx)(v.Q, {
            selected: !0,
            lowerBadge: i > 0 ? (0, k.wN)(i) : null,
            upperBadge: g,
            lowerBadgeSize: { width: (0, e0.o6)(i) },
            children: (0, r.jsx)(b.j, {
                onMouseEnter: () => d(!0),
                onMouseLeave: () => d(!1),
                onClick: function () {
                    if (!__OVERLAY__ && (null != E && clearTimeout(E), A(setTimeout(T, 500)), f(h + 1), 15 === h)) {
                        T();
                        let e = !t7.w.get(eE.wqg);
                        (t7.w.set(eE.wqg, e),
                            e && t7.w.set(np.L, !0),
                            e ? (0, nc.Ak)("discodo") : (0, nc.Ak)("user_leave"),
                            _(!0),
                            setTimeout(() => {
                                _(!1);
                            }, 1e3));
                    }
                },
                selected: S,
                ariaLabel: eA.intl.string(eA.t.YUU0RF),
                "aria-owns": "guild-list-unread-dms",
                "aria-selected": t,
                ...I,
                to: {
                    pathname: s,
                    state: {
                        analyticsSource: {
                            page: eE.liQ.GUILD_CHANNEL,
                            section: eE.JJy.NAVIGATION,
                            object: eE.ZSU.BUTTON_HOME,
                        },
                    },
                },
                children: (0, r.jsx)(ns, {}),
            }),
        });
    return (0, r.jsx)("div", {
        className: nT.Uq,
        "data-guilds-bar-home": !0,
        children: (0, r.jsx)(tR.A, {
            inlineSpecs: nm,
            tutorialId: "friends-list",
            position: "right",
            children: (0, r.jsxs)(x.c, {
                children: [
                    (0, r.jsx)(G.A, { overlay: !0, selected: t, hovered: o }),
                    (0, r.jsx)(tI, { hideOnClick: !0, text: m, selected: t, children: N }),
                ],
            }),
        }),
    });
}
function nS() {
    let e = (function () {
            let e = (0, F.A)((e) => e.guildId),
                { pathname: t } = (0, c.zy)(),
                n = t.startsWith(eE.BVt.GUILD_DISCOVERY) || t.startsWith(eE.BVt.GLOBAL_DISCOVERY),
                i = t.startsWith(eE.BVt.GUILD_MEMBER_VERIFICATION("")),
                r = (0, nf.lI)();
            return null == e && !(n || i || r);
        })(),
        t = (0, E.bG)([nA.A, nE.A], () => {
            let e = (0, t8.v)(nA.A.activeItems, nE.A),
                { total: t, progress: n } = nh.zY(e),
                i = nh.uA(n, t);
            return i > 0 && i < 100;
        }),
        n = (0, nd.kX)(),
        i = Object.keys(nI.kb),
        a = (0, nl.A)(),
        { unviewedTrialCount: s, unviewedDiscountCount: l } = (0, E.cf)([nu.A], () => ({
            unviewedTrialCount: nu.A.getUnacknowledgedOffers(i).length,
            unviewedDiscountCount: nu.A.getUnacknowledgedDiscountOffers().length,
        })),
        o = a.fractionalState === nI.xc.NONE ? s + l : 0,
        d = (0, E.bG)([ec.default], () => ec.default.getCurrentUser()),
        u = (0, no.W)(),
        _ = n + o + u,
        A = _ === o && o > 0 && n + u === 0,
        h = n_.A.getHomeLink();
    return (
        A && (h = eE.BVt.APPLICATION_STORE),
        (0, r.jsx)(ng, {
            selected: e,
            user: d,
            selectedChannelId: H.Ay.getChannelId(eE.ME),
            badge: _,
            link: h,
            showProgressBadge: t,
        })
    );
}
var nN = n(545328);
function nC(e) {
    let { fullWidth: t } = e;
    return (0, r.jsx)(x.c, { children: (0, r.jsx)("div", { className: l()(nN.t, { [nN.I]: t }) }) });
}
var nO = n(28863),
    nR = n(695366),
    nL = n(919638),
    ny = n(818348),
    nD = n(837669);
function nv() {
    let e = (0, E.bG)([nL.A, eD.A], () => nL.A.unavailableGuilds.filter((e) => null == eD.A.getGuild(e)).length),
        t = (0, u.Vd)("unavailable-guilds-button");
    return e <= 0
        ? null
        : (0, r.jsx)(x.c, {
              children: (0, r.jsx)(tI, {
                  text: eA.intl.format(eA.t["TnH05/"], { count: e }),
                  children: (0, r.jsx)(nO.Anchor, {
                      href: ny.qF.STATUS,
                      target: "_blank",
                      className: nD.h,
                      "aria-label": eA.intl.formatToPlainString(eA.t["MEpX+2"], { count: e }),
                      ...t,
                      children: (0, r.jsx)(nR.E, { color: "currentColor", "aria-hidden": !0 }),
                  }),
              }),
          });
}
var nb = n(36412),
    nM = n(739822),
    nP = n(317097),
    nU = n(319060),
    nw = n(866323),
    nG = n(817281),
    nx = n(717117),
    nk = n(534409),
    nF = n(240248),
    nB = n(678708),
    nV = n(559106),
    nH = n(140735),
    nj = n(548118),
    nW = n(327580);
function nY(e) {
    let { guildId: t, animate: n } = e,
        i = (0, E.bG)([eD.A], () => eD.A.getGuild(t), [t]),
        a = (0, T.r)(f.A.modules.guildbar.AVATAR_SIZE);
    return null == i
        ? (0, r.jsx)("div", { className: l()(nW.VL, nW.zU), children: (0, r.jsx)(nR.E, { color: "currentColor" }) })
        : (0, r.jsx)(nj.Ay, {
              guild: i,
              animate: n,
              size: nj.Ay.Sizes.MINI,
              iconSize: a,
              lossless: !0,
              className: nW.VL,
              tabIndex: -1,
          });
}
function nK(e) {
    let { folderNode: t, hovered: n, sorting: i } = e,
        { children: a } = t,
        s = n && i,
        o = (0, r.jsx)("div", {
            className: nW.hJ,
            children: (0, r.jsx)("div", {
                className: nW.Eh,
                children: (0, r.jsx)(nB.FolderIcon, { size: "sm", color: "currentColor" }),
            }),
        }),
        d = (0, r.jsx)("div", {
            className: nW.qJ,
            children: (0, r.jsx)("div", {
                className: nW.jg,
                children: a.slice(0, 4).map((e) => (0, r.jsx)(nY, { guildId: e.id, animate: n }, e.id)),
            }),
        });
    return (0, r.jsxs)("div", {
        "aria-hidden": !0,
        className: l()({ [nW.NG]: s, [nW.yd]: !s }),
        children: [!s && o, d],
    });
}
function n$(e) {
    let {
            folderNode: t,
            expanded: n,
            sorting: i,
            mediaState: s,
            mentionCount: l = 0,
            isMentionLowImportance: o,
            tooltipName: d,
            folderGroupId: c,
            folderButtonContent: u,
            onClick: _,
            onContextMenu: E,
            onHoverChange: A,
            onKeyDown: h,
            treeItemProps: { onFocus: I, ...p },
            "aria-setsize": T,
            "aria-posinset": m,
        } = e,
        [g, S] = a.useState(!1),
        N = a.useCallback(() => {
            (i || S(!0), A?.(!0));
        }, [i, A]),
        C = a.useCallback(() => {
            (i || S(!1), A?.(!1));
        }, [i, A]),
        O = n || null == s ? null : (0, k.oi)(s),
        R =
            !n && l > 0
                ? (0, k.wN)(
                      l,
                      o ? f.A.colors.BACKGROUND_MOD_STRONG.css : f.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                  )
                : null;
    return (0, r.jsx)(nV.vN, {
        children: (0, r.jsxs)(th.D, {
            className: nW.H3,
            onClick: _,
            onContextMenu: E,
            onMouseEnter: N,
            onMouseLeave: C,
            onKeyDown: h,
            onFocus: I,
            focusProps: { enabled: !1 },
            ...p,
            role: "treeitem",
            "aria-setsize": T,
            "aria-posinset": m,
            "aria-expanded": n,
            "aria-owns": c,
            children: [
                (0, r.jsx)(nH.A, {
                    children: eA.intl.formatToPlainString(eA.t["90/DwM"], { folderName: d, mentions: l }),
                }),
                (0, r.jsx)(v.Q, {
                    "aria-hidden": !0,
                    isFolder: !0,
                    upperBadge: O,
                    lowerBadge: R,
                    lowerBadgeSize: { width: (0, e0.o6)(l) },
                    children: (0, r.jsx)("div", {
                        className: nW.vA,
                        children:
                            null != u
                                ? (0, r.jsx)("div", { className: nW.hJ, children: u })
                                : (0, r.jsx)(nK, { folderNode: t, hovered: g, sorting: i }),
                    }),
                }),
            ],
        }),
    });
}
var nz = n(573435),
    nX = n(167579);
function nq(e) {
    let { className: t, isFolder: n } = e,
        i = (0, T.r)(f.A.modules.guildbar.AVATAR_SIZE);
    return (0, r.jsx)(nz.Ay, {
        mask: nz.Ay.Masks.SQUIRCLE,
        className: l()(t, nX.OL, { [nX.lQ]: n }),
        width: i,
        height: i,
        children: (0, r.jsx)("div", { className: nX.ZU }),
    });
}
var nZ = n(114329),
    nQ = n(937067);
let nJ = (0, nF.xI)(nU.A.FOLDER_ITEM_ANIMATION_DURATION),
    n0 = (0, nx.P)(I.B),
    n1 = a.memo(function (e) {
        var t;
        let n,
            i,
            s,
            {
                folderNode: o,
                setNodeRef: d,
                selected: c,
                expanded: _,
                mediaState: E,
                mentionCount: A = 0,
                isMentionLowImportance: h,
                unread: I = !1,
                defaultFolderName: p,
                draggable: m = !1,
                sorting: g = !1,
                onDragStart: S,
                onDragEnd: N,
                onExpandCollapse: C,
                onContextMenu: O,
                renderChildNode: R,
                folderButtonSize: L,
                folderButtonContent: y,
                "aria-setsize": D,
                "aria-posinset": v,
            } = e,
            { id: b, name: M, children: P } = o,
            [U, w] = a.useState(!1),
            [k, F] = a.useState(!1),
            B = U || k,
            V = (0, nk.qK)("FolderItem");
        a.useEffect(() => {
            g && w(!1);
        }, [g]);
        let [{ dragging: H }, j] = (0, nM.i)({
                type: eP.PJ.FOLDER,
                item: () => (S?.(), { type: eP.PJ.FOLDER, nodeId: o.id }),
                end() {
                    (N?.(), (0, nG.um)(ev.Ay.getCompatibleGuildFolders()));
                },
                collect: (e) => ({ dragging: e.isDragging() }),
            }),
            W = a.useCallback((e) => {
                F(e);
            }, []),
            Y = a.useCallback(
                (e) => {
                    (("ArrowRight" === e.key && !_) || ("ArrowLeft" === e.key && _)) && C();
                },
                [C, _],
            ),
            K = null != M && "" !== M ? M : null != p && "" !== p ? p : eA.intl.string(eA.t.xV9hVh),
            $ = (0, u.Vd)(`${b}`),
            z = `folder-items-${b}`,
            X =
                ((t = P.length),
                (n = (0, T.r)(f.A.modules.guildbar.FOLDER_SIZE)),
                (i = (0, T.r)(f.A.modules.guildbar.AVATAR_SIZE)),
                t * (i + (s = (0, T.r)(f.A.space.SPACE_XS))) - s + (s - (n - i) / 2) + (0, T.r)(f.A.space.SPACE_4)),
            q = (0, nw.p)(!H && _, {
                from: { height: 0 },
                enter: { height: 1 },
                leave: { height: 0 },
                config: { duration: nJ },
            }),
            Z = a.useCallback((e) => d?.(b, e), [d, b]),
            Q = (0, r.jsxs)(x.c, {
                children: [
                    (0, r.jsx)(G.A, { overlay: !0, disabled: H || _, hovered: U, selected: c, unread: I }),
                    (0, r.jsx)(tI, {
                        text: K,
                        disabled: g,
                        selected: c,
                        disableWrapper: !0,
                        children: (0, r.jsx)("div", {
                            ref: m
                                ? (e) => {
                                      j(e);
                                  }
                                : void 0,
                            className: l()(nW.MJ, { [nW.L0]: "icon" === L || V, [nQ.oR]: !H && k && !_ }),
                            "data-dnd-name": K,
                            children: H
                                ? (0, r.jsx)(nq, { isFolder: !0 })
                                : (0, r.jsx)(n$, {
                                      folderNode: o,
                                      expanded: _,
                                      sorting: g,
                                      mediaState: E,
                                      mentionCount: A,
                                      isMentionLowImportance: h,
                                      tooltipName: K,
                                      folderGroupId: z,
                                      onClick: C,
                                      onContextMenu: O,
                                      onHoverChange: w,
                                      onKeyDown: Y,
                                      treeItemProps: $,
                                      folderButtonContent: y,
                                      "aria-setsize": D,
                                      "aria-posinset": v,
                                  }),
                        }),
                    }),
                    m ? (0, r.jsx)(tk, { name: K, targetNode: o, onDragOverChanged: W }) : null,
                ],
            }),
            J = (0, nZ.rk)(o.color),
            ee = null != J ? (0, nP.Hl)(J) : void 0;
        return (0, r.jsxs)("div", {
            ref: Z,
            className: l()(nW.qc, { [nW.Av]: _, [nW.Lg]: B }),
            style: { "--custom-folder-color": ee ?? "" },
            "data-drop-hovering": k,
            children: [
                !H && _ && (0, r.jsx)("span", { className: nW.GO }),
                Q,
                q((e, t, n) => {
                    let { key: i } = n;
                    return (
                        t &&
                        (0, r.jsx)(
                            n0,
                            {
                                id: z,
                                role: "group",
                                as: "ul",
                                gap: "xs",
                                className: nW.TN,
                                style: { height: e.height.to((e) => e * X) },
                                "aria-label": o.name,
                                children: P.map((t, n) => R(t, n, P.length, e.height)),
                            },
                            i,
                        )
                    );
                }),
                m && _ ? (0, r.jsx)(tF, { name: K, targetNode: o }) : null,
            ],
        });
    });
var n2 = n(354583);
let n3 = a.memo(function (e) {
    let t,
        i,
        s,
        l,
        o,
        d,
        c,
        u,
        _,
        A,
        h,
        { folderNode: f, ...I } = e,
        { id: p, name: T, color: m, children: g } = f,
        S = g.map((e) => e.id),
        N = (0, F.A)((e) => e.guildId),
        C = (0, E.bG)([eG.A], () => eG.A.isFolderExpanded(p)),
        O = (0, nb.y)(f),
        R =
            ((t = (0, E.bG)([eZ.A], () => eZ.A.getGuildId())),
            (i = f.children.map((e) => e.id)),
            (s = null != t && i.includes(t)),
            (l = !1),
            (o = !1),
            (d = !1),
            (c = (0, E.bG)([eZ.A], () => eZ.A.getChannelId())),
            (_ = null != (u = (0, n2.A)()?.guild_id) && i.includes(u)),
            (A = (0, E.bG)([j.A], () => null != c && j.A.hasVideo(c), [c])),
            (h = (0, E.bG)([B.A], () => B.A.getCurrentUserActiveStream())),
            s && ((l = !A), (o = A), (d = null != h && null != h.guildId && i.includes(h.guildId))),
            a.useMemo(
                () => ({ audio: l, video: o, screenshare: d, liveStage: _, isCurrentUserConnected: s }),
                [l, o, d, _, s],
            )),
        {
            mentionCount: L,
            isMentionLowImportance: y,
            unread: D,
        } = (0, E.cf)([X.default], () => ({
            mentionCount: S.map((e) => X.default.getMentionCount(e)).reduce((e, t) => e + t, 0),
            isMentionLowImportance: S.every((e) => X.default.getIsMentionLowImportance(e)),
            unread: S.some((e) => X.default.hasUnread(e)),
        })),
        v = a.useCallback(() => {
            tb.A.toggleGuildFolderExpand(p);
        }, [p]),
        b = a.useCallback(
            (e) => {
                (0, e1.L3)(e, async () => {
                    let { default: e } = await Promise.all([n.e("114748"), n.e("906240")]).then(n.bind(n, 595139));
                    return (t) =>
                        (0, r.jsx)(e, { ...t, folderId: p, folderName: T, folderColor: m, unread: D || L > 0 });
                });
            },
            [p, T, m, D, L],
        );
    return (0, r.jsx)(n1, {
        ...I,
        folderNode: f,
        expanded: C,
        selected: null != N && S.includes(N),
        mentionCount: L,
        isMentionLowImportance: y,
        unread: D,
        mediaState: R,
        defaultFolderName: O,
        onExpandCollapse: v,
        onContextMenu: b,
    });
});
var n5 = n(113494),
    n6 = n(821124),
    n4 = n(212455);
function n7(e) {
    let t = e?.features.has(eE.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL),
        n = (0, E.bG)(
            [n4.A, ec.default, ey.Ay],
            () => {
                if (null == e) return;
                let t = n4.A.getRequest(e.id),
                    n = ec.default.getCurrentUser();
                if (null == n || null == t || t.userId !== n.id) return;
                let i = ey.Ay.getMember(e.id, t.userId);
                if (!(null != i && !i.isPending) || (0, n6.Oe)(t)) return t.applicationStatus;
            },
            [e],
        );
    return t ? n : void 0;
}
var n8 = n(347951),
    n9 = n(34162);
function ie(e) {
    return (0, E.bG)([n9.A], () => n9.A.getGuildMediaState(e), [e]);
}
var it = n(607399),
    ii = n(702841),
    ir = n(750233),
    ia = n(976860),
    is = n(345942),
    il = n(676279);
function io(e) {
    let { guild: t, show: n, active: i, onAnimationStart: a, onAnimationRest: s } = e,
        o = {},
        d = {};
    ((o.transform = "translate3d(10px, 10px, 0) scale3d(3, 3, 1)"),
        (d.transform = "translate3d(0, 0, 0) scale3d(1, 1, 1)"));
    let c = (0, T.r)(f.A.unsafe_rawColors.BRAND_500).hex(),
        u = (0, T.r)(f.A.unsafe_rawColors.PRIMARY_630).hex();
    i && null == t.icon && ((o.backgroundColor = c), (d.backgroundColor = u));
    let _ = (0, nw.p)(n, { from: o, enter: d, leave: o, config: { duration: 100 }, onStart: a, onRest: s });
    return (0, r.jsx)(r.Fragment, {
        children: _(
            (e, n, i) =>
                n &&
                (0, r.jsx)(
                    "div",
                    {
                        className: nW.qc,
                        children: (0, r.jsx)("div", {
                            className: l()(nW.MJ, nW.L0),
                            style: { margin: 0 },
                            children: (0, r.jsx)(eQ.animated.div, {
                                className: nW.NG,
                                style: e,
                                children: (0, r.jsx)("div", {
                                    className: nW.qJ,
                                    children: (0, r.jsx)("div", {
                                        className: nW.jg,
                                        children: (0, r.jsx)(nj.Ay, {
                                            guild: t,
                                            size: nj.Ay.Sizes.SMOL,
                                            className: nW.VL,
                                        }),
                                    }),
                                }),
                            }),
                        }),
                    },
                    i.key,
                ),
        ),
    });
}
var id = n(454938),
    ic = n(714991),
    iu = n(107773),
    i_ = n(513461),
    iE = n(164956),
    iA = n(624265),
    ih = n(970278),
    iI = n(808728);
let ip = (0, n(945810).mj)({
    name: "2026-09-server-tooltip-notification-context",
    kind: "user",
    defaultConfig: { mode: "disabled" },
    variations: { 0: { mode: "disabled" }, 1: { mode: "latest" }, 2: { mode: "mentions_first" } },
});
function iT(e) {
    let { guildId: t, mode: n } = e,
        { channel: i, hasMention: a } = (0, E.cf)(
            [Q.Ay, V.A, $.A, Z.Ay, X.default],
            () => {
                if (Q.Ay.isMuted(t)) return { channel: null, hasMention: !1 };
                let e = { latest: null, latestMention: null };
                function i(t) {
                    if (!Z.Ay.hasUnreadOrMentions(t.id)) return;
                    let n = Z.Ay.getMentionCount(t.id);
                    if (!X.default.shouldCountChannelUnread(t, n)) return;
                    let i = Z.Ay.lastMessageId(t.id);
                    if (null == i) return;
                    let r = { channel: t, hasMention: n > 0, lastMessageId: i };
                    ((null == e.latest || W.default.compare(i, e.latest.lastMessageId) > 0) && (e.latest = r),
                        r.hasMention &&
                            (null == e.latestMention || W.default.compare(i, e.latestMention.lastMessageId) > 0) &&
                            (e.latestMention = r));
                }
                let r = V.A.getMutableGuildChannelsForGuild(t);
                for (let e in r) i(r[e]);
                let a = $.A.getActiveJoinedThreadsForGuild(t);
                for (let e in a)
                    for (let t in a[e]) {
                        let e = V.A.getChannel(t);
                        null != e && i(e);
                    }
                let s = "mentions_first" === n ? (e.latestMention ?? e.latest) : e.latest;
                return { channel: s?.channel ?? null, hasMention: s?.hasMention ?? !1 };
            },
            [t, n],
        ),
        s = (0, e5.Ay)(i);
    return null == i || null == s || 0 === s.length
        ? null
        : (0, r.jsx)(en.E, {
              className: eh.T5,
              color: "text-muted",
              variant: "text-xs/normal",
              lineClamp: 1,
              children: eA.intl.formatToPlainString(a ? eA.t.HwW3zP : eA.t.FwKQxx, { channelName: s }),
          });
}
function im(e, t, n) {
    return 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              className: eh.nM,
              children: [
                  (0, r.jsx)(e, { className: eh.RI, color: "currentColor" }),
                  (0, r.jsx)(el.Ay, { guildId: n, users: t, max: 6 }),
              ],
          });
}
function ig(e) {
    let { muteConfig: t, className: n } = e;
    return t?.end_time == null
        ? (0, r.jsx)(en.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: n,
              children: eA.intl.string(eA.t.fpKdS1),
          })
        : (0, r.jsx)(te.A, { muteConfig: t, className: n });
}
function iS(e) {
    let t,
        n,
        i,
        s,
        o,
        c,
        u,
        _,
        A,
        h,
        f,
        I,
        p,
        T,
        m,
        g,
        S,
        N,
        C,
        O,
        { guild: R } = e,
        L = R.id,
        {
            voiceUsersToShow: y,
            stageSpeakers: D,
            numStageListeners: v,
            streamUsersToShow: b,
            embeddedActivitiesUsers: M,
        } = ((t = R.id),
        (n = (0, E.yK)(
            [iI.Ay, ih.A, Q.Ay],
            () => [
                ...iI.Ay.getChannels(t)
                    [iI.vM].filter((e) => {
                        let { channel: n } = e;
                        return n.type === eE.rbe.GUILD_VOICE && !Q.Ay.isChannelMuted(t, n.id);
                    })
                    .map((e) => {
                        let { channel: t } = e;
                        return t.id;
                    }),
                ...Object.values(ih.A.getThreadsForGuild(t)).flatMap((e) => Object.keys(e)),
            ],
            [t],
        )),
        (i = (0, iA.Ay)(t)),
        (s = a.useMemo(() => i.map((e) => e.id), [i])),
        (o = (0, E.bG)([eu.Ay], () => eu.Ay.getVoiceStates(t), [t])),
        (c = (0, E.bG)([e9.A], () => e9.A.getBlockedOrIgnoredIDs())),
        (u = d().flatMap(n, (e) => {
            if (e === R.afkChannelId) return [];
            let t = (o[e] ?? []).map((e) => {
                let { user: t } = e;
                return t;
            });
            return (0, e4.aw)(t, c);
        })),
        (_ = (0, E.yK)([eo.A], () =>
            d().flatMap(s, (e) => {
                if (e === R.afkChannelId) return [];
                let t = eo.A.getMutableParticipants(e, ed.ip.SPEAKER)
                    .filter((e) => e.type === ed.wY.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    });
                return (0, e4.aw)(t, c);
            }),
        )),
        (A = (0, E.bG)([eo.A], () => {
            let e = 0;
            for (let t of s) e += eo.A.getParticipantCount(t, ed.ip.AUDIENCE);
            return e;
        })),
        (h = (0, E.yK)(
            [B.A, Q.Ay],
            () => {
                let e = B.A.getAllApplicationStreams()
                    .filter((e) => e.guildId === t && !Q.Ay.isChannelMuted(t, e.channelId))
                    .map((e) => e.ownerId);
                return (0, e4.F7)(e, c);
            },
            [c, t],
        )),
        (f = (0, E.yK)(
            [U.Ay, V.A],
            () => {
                let e = U.Ay.getEmbeddedActivitiesForGuild(t)
                    .filter((e) => {
                        let t = V.A.getBasicChannel((0, w.H)(e.location));
                        return t?.type !== eE.rbe.GUILD_SPACE;
                    })
                    .flatMap((e) => Array.from(e.userIds));
                return (0, e4.F7)(e, c);
            },
            [t, c],
        )),
        (I = (0, E.yK)(
            [ec.default],
            () => {
                let e = f.map((e) => ec.default.getUser(e));
                return (0, e4.aw)(e);
            },
            [f],
        )),
        (p = (0, E.yK)([ec.default], () => h.map((e) => ec.default.getUser(e)), [h])),
        (T = u.filter((e) => !h.includes(e.id) && !f.includes(e.id))),
        (m = (0, e4.aw)(T)),
        (g = p.filter((e) => null != e && !f.includes(e.id))),
        (S = (0, E.bG)([e7.A], () => e7.A.getUserAffinitiesMap(), [])),
        (N = a.useMemo(() => (0, e8.L)(m, S, "GuildTooltip - nonBlockedUsers"), [m, S])),
        (C = a.useMemo(() => (0, e8.L)(_, S, "GuildTooltip - stageSpeakers"), [_, S])),
        (O = a.useMemo(() => (0, e8.L)(g, S, "GuildTooltip - streamUsers"), [g, S])),
        {
            voiceUsersToShow: N,
            stageSpeakers: C,
            numStageListeners: A,
            streamUsersToShow: O,
            embeddedActivitiesUsers: a.useMemo(() => (0, e8.L)(I, S, "GuildTooltip - embeddedActivitiesUsers"), [I, S]),
            hasActivity: _.length > 0 || T.length > 0 || g.length > 0 || I.length > 0,
        }),
        P = im(ei.H, y, L),
        G =
            0 === D.length
                ? null
                : (0, r.jsxs)("div", {
                      className: eh.nM,
                      children: [
                          (0, r.jsx)(ee.q, { size: "lg", color: "currentColor", className: eh.RI }),
                          (0, r.jsx)(el.Ay, { guildId: L, users: D, max: 3 }),
                          (0, r.jsxs)("div", {
                              className: eh.GZ,
                              children: [
                                  (0, r.jsx)(et.L, { size: "xs", color: "currentColor" }),
                                  (0, r.jsx)(en.E, {
                                      className: eh._I,
                                      color: "text-default",
                                      variant: "text-xs/normal",
                                      children: v,
                                  }),
                              ],
                          }),
                      ],
                  }),
        x = im(er.F, b, L),
        k = im(ea.k, M, L),
        { isMuted: F, muteConfig: H } = (0, E.cf)(
            [Q.Ay],
            () => ({ isMuted: Q.Ay.isMuted(L), muteConfig: Q.Ay.getMuteConfig(L) }),
            [L],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            G,
            P,
            x,
            k,
            F ? (0, r.jsx)(ig, { muteConfig: H, className: l()(eh.LM, { [eh.Sx]: null != P || null != x }) }) : null,
        ],
    });
}
function iN(e) {
    let { guildJoinRequestStatus: t } = e;
    return (0, r.jsx)(en.E, {
        className: eh.BT,
        color: "text-default",
        variant: "text-xs/normal",
        children: (function (e) {
            switch (e) {
                case i_.B5.SUBMITTED:
                    return eA.intl.string(eA.t["9KFC98"]);
                case i_.B5.REJECTED:
                    return eA.intl.string(eA.t["TQY/Rd"]);
                case i_.B5.APPROVED:
                    return eA.intl.string(eA.t.WXHcq5);
                default:
                    return eA.intl.string(eA.t.fjHFC8);
            }
        })(t),
    });
}
function iC(e) {
    let { guild: t, isTooltipShown: n, shouldShowNotificationContext: i } = e,
        a = (0, id.A)(t),
        s = n7(t),
        o = null != s ? (0, r.jsx)(iN, { guildJoinRequestStatus: s }) : null,
        d = (0, r.jsx)(iS, { guild: t }),
        c = (0, E.bG)([iE.A], () => iE.A.isViewingRoles(t.id)),
        u = (0, n8.Ig)(t),
        _ =
            n && i
                ? (function () {
                      let { mode: e } = ip.getConfig({ location: "GuildTooltip.serverTooltipNotificationContext" });
                      return e;
                  })()
                : "disabled";
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: l()(eh.nM, eh.Dl),
                children: [
                    a
                        ? (0, r.jsx)(iu.A, { disableBoostClick: !0, guild: t, className: eh.WX })
                        : (0, r.jsx)(ic.A, { guild: t, size: 20, className: eh.aL }),
                    (0, r.jsx)("span", { className: l()(eh.cN, eh.NT), children: t.name }),
                ],
            }),
            "disabled" !== _ ? (0, r.jsx)(iT, { guildId: t.id, mode: _ }) : null,
            u
                ? (0, r.jsx)(en.E, {
                      className: eh.Ef,
                      color: "text-default",
                      variant: "text-sm/medium",
                      children: eA.intl.string(eA.t["2n0/Fk"]),
                  })
                : null,
            c
                ? (0, r.jsx)(en.E, {
                      className: eh.BT,
                      color: "text-default",
                      variant: "text-xs/normal",
                      children: eA.intl.string(eA.t["5LwN89"]),
                  })
                : (o ?? d),
        ],
    });
}
function iO(e) {
    let { guild: t, shouldShowNotificationContext: n = !1, disabled: i = !1, children: s } = e,
        { isOpen: l, shouldRenderRichContent: o, handleTooltipShow: d, handleTooltipHide: c } = tn("GuildTooltip"),
        u = a.useMemo(
            () =>
                i
                    ? null
                    : (0, r.jsx)(en.E, {
                          variant: "text-md/semibold",
                          color: "text-default",
                          className: eh.A_,
                          children: o
                              ? (0, r.jsx)(iC, { guild: t, isTooltipShown: l, shouldShowNotificationContext: n })
                              : t.name,
                      }),
            [i, t, l, o, n],
        );
    return (0, r.jsx)(es.m, {
        __unsupportedReactNodeAsText: u,
        onTooltipShow: d,
        onTooltipHide: c,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        asContainer: !0,
        children: s,
    });
}
let iR = { analyticsSource: { page: eE.liQ.GUILD_CHANNEL, section: eE.JJy.CHANNEL_LIST, object: eE.ZSU.CHANNEL } };
function iL(e, t) {
    (0, e1.L3)(e, async () => {
        let { default: e } = await Promise.all([
            n.e("203112"),
            n.e("876364"),
            n.e("135144"),
            n.e("996907"),
            n.e("816027"),
            n.e("562772"),
            n.e("8159"),
            n.e("780348"),
            n.e("361922"),
            n.e("179028"),
            n.e("403032"),
            n.e("684290"),
            n.e("295570"),
            n.e("301850"),
            n.e("936875"),
            n.e("862179"),
            n.e("722784"),
            n.e("326794"),
            n.e("906470"),
            n.e("860350"),
            n.e("774550"),
            n.e("923981"),
            n.e("839460"),
            n.e("706073"),
            n.e("227512"),
            n.e("262564"),
            n.e("71866"),
            n.e("891473"),
            n.e("101105"),
            n.e("263406"),
            n.e("1955"),
            n.e("341161"),
            n.e("410526"),
            n.e("202985"),
            n.e("603619"),
            n.e("833292"),
            n.e("222969"),
            n.e("515363"),
            n.e("149697"),
            n.e("128804"),
            n.e("60882"),
            n.e("71151"),
            n.e("227853"),
            n.e("286615"),
            n.e("70866"),
            n.e("311541"),
            n.e("795854"),
            n.e("870088"),
            n.e("300641"),
            n.e("571163"),
            n.e("586662"),
            n.e("831377"),
            n.e("709976"),
            n.e("750955"),
            n.e("953343"),
            n.e("279774"),
            n.e("763945"),
            n.e("261204"),
            n.e("686731"),
            n.e("807432"),
            n.e("873532"),
            n.e("590088"),
            n.e("807003"),
            n.e("46083"),
            n.e("152133"),
            n.e("747802"),
            n.e("626353"),
            n.e("71169"),
            n.e("736663"),
            n.e("419121"),
            n.e("489020"),
            n.e("919789"),
            n.e("669130"),
            n.e("802890"),
            n.e("82937"),
            n.e("987221"),
            n.e("157064"),
            n.e("156957"),
            n.e("918786"),
            n.e("701335"),
            n.e("257935"),
            n.e("724086"),
            n.e("358937"),
            n.e("448738"),
            n.e("700181"),
            n.e("804439"),
            n.e("84978"),
            n.e("894292"),
            n.e("153302"),
            n.e("88683"),
            n.e("363874"),
            n.e("750370"),
            n.e("972281"),
            n.e("307107"),
            n.e("896622"),
            n.e("466592"),
            n.e("73946"),
            n.e("282050"),
            n.e("440727"),
            n.e("387970"),
            n.e("847445"),
            n.e("547510"),
            n.e("966366"),
            n.e("983513"),
            n.e("76928"),
            n.e("355502"),
            n.e("528311"),
            n.e("411938"),
            n.e("653383"),
            n.e("122026"),
            n.e("31159"),
            n.e("952068"),
            n.e("768289"),
            n.e("772565"),
            n.e("533781"),
            n.e("328276"),
            n.e("592000"),
            n.e("524434"),
            n.e("854326"),
            n.e("984"),
            n.e("226229"),
            n.e("981833"),
            n.e("614929"),
            n.e("570473"),
            n.e("516497"),
            n.e("24774"),
            n.e("489565"),
            n.e("684231"),
            n.e("570690"),
            n.e("886631"),
            n.e("435860"),
            n.e("426782"),
            n.e("406322"),
            n.e("942571"),
            n.e("464759"),
            n.e("763343"),
            n.e("194704"),
            n.e("274461"),
            n.e("830560"),
            n.e("526575"),
            n.e("355703"),
            n.e("165291"),
            n.e("109383"),
            n.e("818291"),
            n.e("243794"),
            n.e("519435"),
            n.e("10985"),
            n.e("171206"),
            n.e("102075"),
            n.e("828178"),
            n.e("45036"),
            n.e("974119"),
            n.e("434683"),
            n.e("920955"),
            n.e("505928"),
            n.e("752657"),
            n.e("747973"),
            n.e("314001"),
            n.e("885251"),
            n.e("857871"),
            n.e("529366"),
            n.e("990185"),
            n.e("444038"),
            n.e("849162"),
            n.e("660201"),
            n.e("770925"),
            n.e("179301"),
            n.e("918347"),
            n.e("102247"),
            n.e("689521"),
            n.e("237403"),
            n.e("10886"),
            n.e("84993"),
            n.e("343298"),
            n.e("592268"),
            n.e("374962"),
            n.e("553627"),
            n.e("59599"),
            n.e("46238"),
            n.e("736919"),
            n.e("440636"),
            n.e("568960"),
            n.e("459257"),
            n.e("790484"),
            n.e("339715"),
            n.e("985301"),
            n.e("981059"),
            n.e("631323"),
            n.e("464452"),
            n.e("74979"),
            n.e("714144"),
            n.e("458855"),
            n.e("305161"),
            n.e("845486"),
            n.e("401425"),
            n.e("120561"),
            n.e("880186"),
            n.e("58353"),
            n.e("17256"),
            n.e("377016"),
            n.e("385504"),
            n.e("269714"),
            n.e("331696"),
            n.e("249918"),
            n.e("865429"),
            n.e("806391"),
            n.e("803511"),
            n.e("726399"),
            n.e("424216"),
            n.e("840100"),
            n.e("304350"),
            n.e("22865"),
            n.e("173896"),
            n.e("57358"),
            n.e("580305"),
            n.e("722765"),
            n.e("172413"),
            n.e("145006"),
            n.e("33909"),
            n.e("249169"),
            n.e("754596"),
            n.e("191601"),
            n.e("401106"),
            n.e("498589"),
            n.e("21486"),
            n.e("304419"),
            n.e("622936"),
            n.e("45268"),
            n.e("617281"),
            n.e("733199"),
            n.e("804510"),
            n.e("655327"),
            n.e("335532"),
            n.e("138545"),
            n.e("536490"),
            n.e("771137"),
            n.e("403655"),
            n.e("212037"),
            n.e("577154"),
            n.e("877730"),
            n.e("611899"),
            n.e("527552"),
            n.e("903758"),
            n.e("987828"),
            n.e("96922"),
            n.e("769266"),
            n.e("487873"),
            n.e("765626"),
            n.e("683302"),
            n.e("660608"),
            n.e("744554"),
            n.e("118203"),
            n.e("331212"),
            n.e("638259"),
            n.e("635958"),
            n.e("207998"),
            n.e("683621"),
            n.e("711162"),
            n.e("275179"),
            n.e("289789"),
            n.e("116125"),
            n.e("977412"),
            n.e("19385"),
            n.e("692811"),
            n.e("348567"),
            n.e("452075"),
            n.e("900277"),
            n.e("718126"),
            n.e("905581"),
            n.e("249681"),
            n.e("996382"),
            n.e("62052"),
            n.e("771657"),
            n.e("122218"),
            n.e("76428"),
            n.e("834552"),
            n.e("993103"),
            n.e("863232"),
            n.e("708757"),
            n.e("517888"),
            n.e("959880"),
            n.e("174016"),
            n.e("907167"),
            n.e("910471"),
            n.e("11301"),
            n.e("811133"),
            n.e("861060"),
            n.e("364827"),
            n.e("77333"),
            n.e("56366"),
            n.e("217229"),
            n.e("477175"),
            n.e("960235"),
            n.e("585968"),
            n.e("910486"),
            n.e("198329"),
            n.e("678157"),
            n.e("942374"),
            n.e("147134"),
            n.e("331988"),
            n.e("10866"),
            n.e("236850"),
            n.e("40291"),
            n.e("733115"),
            n.e("397270"),
            n.e("190779"),
            n.e("373122"),
            n.e("217951"),
            n.e("221856"),
            n.e("755936"),
            n.e("147662"),
            n.e("609705"),
            n.e("899843"),
            n.e("904448"),
            n.e("833703"),
            n.e("256274"),
            n.e("544571"),
            n.e("692990"),
            n.e("362931"),
            n.e("393336"),
            n.e("745959"),
            n.e("858529"),
            n.e("481987"),
            n.e("595653"),
            n.e("958038"),
            n.e("532039"),
            n.e("719466"),
            n.e("178565"),
            n.e("630267"),
            n.e("576909"),
            n.e("27355"),
            n.e("406174"),
            n.e("715555"),
            n.e("481647"),
            n.e("776273"),
            n.e("776602"),
            n.e("391763"),
            n.e("704434"),
            n.e("140402"),
            n.e("28102"),
            n.e("21921"),
            n.e("407170"),
            n.e("969354"),
            n.e("844780"),
            n.e("571210"),
            n.e("676418"),
            n.e("572963"),
            n.e("770291"),
            n.e("897073"),
            n.e("913823"),
            n.e("166495"),
            n.e("307575"),
            n.e("88342"),
            n.e("187110"),
            n.e("854461"),
            n.e("942724"),
            n.e("139970"),
            n.e("393766"),
            n.e("940258"),
            n.e("858164"),
            n.e("521930"),
            n.e("292583"),
            n.e("308555"),
            n.e("425055"),
            n.e("427032"),
            n.e("173764"),
            n.e("554241"),
            n.e("311802"),
            n.e("724303"),
            n.e("25949"),
            n.e("53102"),
            n.e("586127"),
            n.e("836863"),
            n.e("9205"),
            n.e("146070"),
            n.e("344502"),
            n.e("617249"),
            n.e("88599"),
            n.e("179049"),
            n.e("854622"),
            n.e("95340"),
            n.e("362422"),
            n.e("807936"),
            n.e("856437"),
            n.e("590365"),
            n.e("989088"),
            n.e("37977"),
            n.e("136149"),
            n.e("470068"),
            n.e("354044"),
            n.e("817989"),
            n.e("437065"),
            n.e("720590"),
            n.e("709640"),
            n.e("147626"),
            n.e("442901"),
            n.e("613867"),
            n.e("952548"),
            n.e("164776"),
            n.e("203589"),
            n.e("636373"),
            n.e("294857"),
            n.e("726033"),
            n.e("480830"),
            n.e("179745"),
            n.e("655708"),
            n.e("64504"),
            n.e("553984"),
            n.e("280854"),
            n.e("335395"),
            n.e("884601"),
            n.e("782969"),
            n.e("154469"),
            n.e("945413"),
            n.e("146844"),
            n.e("255580"),
            n.e("163235"),
            n.e("212055"),
            n.e("14035"),
            n.e("632756"),
            n.e("564850"),
            n.e("504370"),
            n.e("170104"),
            n.e("491793"),
            n.e("474610"),
            n.e("299854"),
            n.e("902564"),
            n.e("608557"),
            n.e("428967"),
            n.e("397224"),
            n.e("67878"),
            n.e("953858"),
            n.e("758946"),
            n.e("214285"),
            n.e("248330"),
            n.e("247660"),
            n.e("731503"),
            n.e("803332"),
            n.e("859546"),
            n.e("506620"),
            n.e("432805"),
            n.e("938149"),
            n.e("408362"),
            n.e("741678"),
            n.e("608032"),
            n.e("852617"),
            n.e("477970"),
            n.e("102698"),
            n.e("204744"),
            n.e("737021"),
            n.e("818465"),
            n.e("649362"),
            n.e("773534"),
            n.e("971430"),
            n.e("211185"),
            n.e("41332"),
            n.e("976516"),
            n.e("400501"),
            n.e("985794"),
            n.e("732194"),
            n.e("767837"),
            n.e("473384"),
            n.e("432209"),
            n.e("893349"),
            n.e("368062"),
            n.e("859991"),
            n.e("386317"),
            n.e("709371"),
            n.e("599719"),
            n.e("691461"),
            n.e("218203"),
            n.e("726511"),
            n.e("868214"),
            n.e("939171"),
            n.e("987478"),
            n.e("661814"),
            n.e("96680"),
            n.e("448399"),
            n.e("713567"),
            n.e("612287"),
            n.e("588070"),
            n.e("793438"),
            n.e("305557"),
            n.e("36227"),
            n.e("746183"),
            n.e("449145"),
            n.e("444567"),
            n.e("309004"),
            n.e("883952"),
            n.e("229666"),
            n.e("92295"),
            n.e("589916"),
            n.e("695170"),
            n.e("460773"),
            n.e("159957"),
            n.e("28676"),
            n.e("458273"),
            n.e("356664"),
            n.e("208018"),
            n.e("355513"),
            n.e("606949"),
            n.e("968763"),
            n.e("278045"),
            n.e("26001"),
            n.e("430997"),
            n.e("174192"),
            n.e("414591"),
            n.e("652111"),
            n.e("434786"),
            n.e("599976"),
            n.e("294607"),
            n.e("203930"),
            n.e("929792"),
            n.e("982730"),
            n.e("708536"),
            n.e("903663"),
            n.e("411353"),
            n.e("49716"),
            n.e("506045"),
            n.e("618706"),
            n.e("439089"),
            n.e("800872"),
            n.e("728136"),
            n.e("452531"),
            n.e("343116"),
            n.e("201243"),
            n.e("215920"),
            n.e("573330"),
            n.e("65393"),
            n.e("338601"),
            n.e("368530"),
            n.e("275859"),
            n.e("216084"),
            n.e("66580"),
            n.e("127659"),
            n.e("978046"),
            n.e("428235"),
            n.e("610943"),
            n.e("283230"),
            n.e("582486"),
            n.e("273669"),
            n.e("507775"),
            n.e("284819"),
            n.e("760989"),
            n.e("466147"),
            n.e("50342"),
            n.e("369501"),
            n.e("303710"),
            n.e("256373"),
            n.e("387634"),
            n.e("161058"),
            n.e("134504"),
            n.e("333097"),
            n.e("908608"),
            n.e("409391"),
            n.e("645830"),
            n.e("479971"),
            n.e("810262"),
            n.e("741786"),
            n.e("995602"),
            n.e("346313"),
            n.e("463726"),
            n.e("553203"),
            n.e("816589"),
            n.e("553683"),
            n.e("115368"),
            n.e("929569"),
            n.e("636002"),
            n.e("343233"),
            n.e("280098"),
            n.e("756684"),
            n.e("419690"),
            n.e("583827"),
            n.e("806354"),
            n.e("556026"),
            n.e("416301"),
            n.e("722191"),
            n.e("225961"),
            n.e("359702"),
            n.e("708364"),
            n.e("138733"),
            n.e("452823"),
            n.e("779348"),
            n.e("647011"),
            n.e("205896"),
            n.e("269178"),
            n.e("553584"),
            n.e("466913"),
            n.e("983947"),
            n.e("752695"),
            n.e("71719"),
            n.e("893767"),
            n.e("213848"),
            n.e("588307"),
            n.e("514878"),
            n.e("676376"),
            n.e("426508"),
            n.e("361347"),
            n.e("842935"),
            n.e("73091"),
            n.e("37786"),
            n.e("886692"),
            n.e("916373"),
            n.e("528038"),
            n.e("81398"),
            n.e("623522"),
            n.e("925172"),
            n.e("232347"),
            n.e("8458"),
            n.e("11810"),
            n.e("591977"),
            n.e("890152"),
            n.e("174337"),
            n.e("646570"),
            n.e("287973"),
            n.e("357197"),
            n.e("314863"),
            n.e("623386"),
            n.e("384951"),
            n.e("560165"),
            n.e("712390"),
            n.e("71167"),
            n.e("113446"),
            n.e("306410"),
            n.e("161309"),
            n.e("694529"),
            n.e("303807"),
            n.e("995210"),
            n.e("630313"),
            n.e("497743"),
            n.e("784853"),
            n.e("317699"),
            n.e("257032"),
            n.e("952831"),
            n.e("845322"),
            n.e("114748"),
            n.e("426386"),
            n.e("204665"),
            n.e("588860"),
        ]).then(n.bind(n, 237600));
        return (n) => (0, r.jsx)(e, { ...n, guild: t });
    });
}
let iy = a.memo(function (e) {
    let {
            guildNode: t,
            setRef: n,
            onDragStart: i,
            onDragEnd: s,
            route: o,
            guild: d,
            animatable: c,
            selected: _ = !1,
            unread: E = !1,
            mediaState: A,
            unavailable: I = !1,
            badge: p = 0,
            isMentionLowImportance: m,
            contextMenu: g = iL,
            draggable: S = !1,
            sorting: N = !1,
            preloadOnClick: C = !0,
            guildJoinRequestStatus: O,
            height: R,
            "aria-setsize": L,
            "aria-posinset": y,
        } = e,
        { id: D, parentId: M } = t,
        U = e.upperBadge ?? (I ? (0, k.em)() : null != A ? (0, k.oi)(A) : void 0),
        w = e.lowerBadge ?? void 0;
    null == w && p > 0
        ? (w =
              (0, k.wN)(
                  p,
                  m ? f.A.colors.BACKGROUND_MOD_STRONG.css : f.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
              ) ?? void 0)
        : null == w && null != O && (w = (0, k.eW)({ guildJoinRequestStatus: O }) ?? void 0);
    let F = e.lowerBadgeSize ?? { width: (0, e0.o6)(p) },
        [{ dragging: B }, V] = (0, nM.i)({
            type: eP.PJ.GUILD,
            item: () => (
                requestAnimationFrame(() => {
                    i?.();
                }),
                { type: t.type, nodeId: t.id }
            ),
            end() {
                (s?.(), (0, nG.um)(ev.Ay.getCompatibleGuildFolders()));
            },
            collect: (e) => ({ dragging: e.isDragging() }),
        }),
        H = (0, u.Vd)(D ?? eE.dJq, null != M ? 2 : 1),
        [j, W] = a.useState(!1),
        Y = !N && j,
        [K, $] = a.useState(!1),
        [z, X] = a.useState(!1),
        [q] = a.useState(() => new h.J_(70, () => X(!0))),
        Z = (0, il.nr)() && !it.Fr;
    a.useEffect(() => () => q.cancel(), [q]);
    let Q = a.useCallback(() => {
            null != o ? (0, ia.pX)(o, { state: iR }) : (0, is.u)(D, { state: iR });
        }, [D, o]),
        J = a.useCallback(() => {
            if (null != o || null == d || I || !C) return;
            let [e] = (0, ir.q)(d.id);
            null != e && P.A.preload(d.id, e);
        }, [o, d, I, C]),
        ee = (0, ii.bG)([ey.Ay], () => ey.Ay.isCurrentUserGuest(D)),
        et = a.useCallback(
            (e) => {
                null == d || ee || g(e, d);
            },
            [d, g, ee],
        ),
        en = a.useCallback(
            (e) => {
                "ArrowLeft" === e.key && null != M && document.querySelector(`[aria-owns=folder-items-${M}]`)?.focus();
            },
            [M],
        ),
        ei = a.useCallback(
            (e) => {
                e ? q.delay() : (q.cancel(), X(!1));
            },
            [q],
        );
    function er() {
        N || W(!0);
    }
    function ea() {
        N || W(!1);
    }
    let es = a.useCallback(
            (e) => {
                n?.(D, e);
            },
            [D, n],
        ),
        el = (0, T.r)(f.A.modules.guildbar.AVATAR_SIZE);
    if (null == d) return null;
    let eo = d.name;
    if (
        (p > 0
            ? (eo = eA.intl.formatToPlainString(eA.t["/uzRss"], { guildName: d.name, mentions: p }))
            : E && (eo = eA.intl.formatToPlainString(eA.t.lzqe42, { guildName: d.name })),
        null != A)
    ) {
        let e = [];
        (A.activeEvent && e.push(eA.intl.string(eA.t.dHvJ2p)),
            A.liveStage && e.push(eA.intl.string(eA.t.OO7ndG)),
            A.screenshare && e.push(eA.intl.string(eA.t.wsHMZ7)),
            A.video && e.push(eA.intl.string(eA.t.BrLCS0)),
            A.audio && e.push(eA.intl.string(eA.t.jPBhKy)),
            A.activity && e.push(eA.intl.string(eA.t.Y3Gii5)),
            e.length > 0 && (eo = `${eo}, ${e.join(" ")}`));
    }
    let ed = (0, r.jsx)(io, {
            guild: d,
            show: z,
            active: _,
            onAnimationStart: function () {
                $(z);
            },
            onAnimationRest: function () {
                z || $(!1);
            },
        }),
        ec = Z
            ? (0, r.jsx)(b.j, {
                  ariaLabel: eo,
                  name: d.name,
                  onClick: Q,
                  onMouseEnter: er,
                  onMouseLeave: ea,
                  onMouseDown: J,
                  onContextMenu: et,
                  onKeyDown: en,
                  icon: (0, tL.Iv)(d, 2 * el, Y && c, !0),
                  selected: _ || Y,
                  ...H,
                  "aria-setsize": L,
                  "aria-posinset": y,
                  "aria-selected": _,
              })
            : (0, r.jsx)(v.Q, {
                  selected: _,
                  children: (0, r.jsx)("div", {
                      ref: S
                          ? (e) => {
                                V(e);
                            }
                          : void 0,
                      "data-dnd-name": d.name,
                      "data-drop-hovering": z,
                      children: (0, r.jsx)(b.j, {
                          ariaLabel: eo,
                          name: d.name,
                          onClick: Q,
                          onMouseEnter: er,
                          onMouseLeave: ea,
                          onMouseDown: J,
                          onContextMenu: et,
                          onKeyDown: en,
                          icon: (0, tL.Iv)(d, 2 * el, Y && c, !0),
                          selected: _ || Y,
                          ...H,
                          "aria-setsize": L,
                          "aria-posinset": y,
                          "aria-selected": _,
                      }),
                  }),
              }),
        eu = z || K ? ed : ec,
        e_ = (0, r.jsx)(tB, { children: (0, r.jsx)(nq, {}) }),
        eh = Z
            ? (0, r.jsx)(eQ.animated.div, {
                  ref: S
                      ? (e) => {
                            V(e);
                        }
                      : void 0,
                  "data-dnd-name": d.name,
                  style: { scale: null == R ? 1 : R },
                  "data-drop-hovering": z,
                  className: l()(nQ.rN, { [nQ.p9]: N, [nQ.oR]: z, [nQ.wH]: z || _ }),
                  children: (0, r.jsx)(v.Q, {
                      selected: !0,
                      upperBadge: U,
                      lowerBadge: w,
                      lowerBadgeSize: F,
                      children: eu,
                  }),
              })
            : (0, r.jsx)(eQ.animated.div, {
                  style: { scale: null == R ? 1 : R },
                  className: l()(nQ.rN, { [nQ.p9]: N, [nQ.oR]: z, [nQ.wH]: z || _ }),
                  "data-drop-hovering": z,
                  children: (0, r.jsx)(v.Q, {
                      selected: _,
                      upperBadge: U,
                      lowerBadge: w,
                      lowerBadgeSize: F,
                      children: eu,
                  }),
              });
    return (0, r.jsxs)(x.c, {
        ref: es,
        children: [
            (0, r.jsx)(G.A, { overlay: !0, hovered: !B && Y, selected: !B && _, unread: !B && E }),
            (0, r.jsx)(iO, {
                guild: d,
                disabled: N,
                isDragging: B,
                shouldShowNotificationContext: !I && (E || p > 0),
                children: B ? e_ : eh,
            }),
            S ? (0, r.jsx)(tk, { name: d.name, targetNode: t, onDragOverChanged: ei }) : null,
        ],
    });
});
var iD = n(64061);
let iv = a.memo(function (e) {
    let { guildNode: t, lowerBadge: n } = e,
        i = t.id,
        s = (0, E.bG)([eD.A], () => eD.A.getGuild(i)),
        l = n7(s),
        o = (0, E.bG)([eH.A], () => eH.A.isFocused()),
        d = (0, E.bG)([nL.A], () => nL.A.isUnavailable(i)),
        c = (0, F.A)((e) => e.guildId),
        u = ie(i),
        {
            badge: _,
            unread: A,
            isMentionLowImportance: h,
        } = (0, E.cf)([X.default], () => ({
            badge: X.default.getMentionCount(i),
            isMentionLowImportance: X.default.getIsMentionLowImportance(i),
            unread: X.default.hasUnread(i),
        })),
        f = (0, n8.Ig)(s) && 0 === _,
        I = a.useMemo(
            () =>
                null != n
                    ? n
                    : f
                      ? (0, r.jsx)("div", {
                            className: iD.j,
                            children: (0, r.jsx)(n5.PauseIcon, {
                                size: "custom",
                                color: "currentColor",
                                className: iD.v,
                                width: 10,
                                height: 10,
                            }),
                        })
                      : null,
            [n, f],
        );
    return (0, r.jsx)(iy, {
        ...e,
        guild: s,
        unavailable: d,
        animatable: o,
        selected: c === i,
        badge: _,
        isMentionLowImportance: h,
        lowerBadge: I,
        unread: A,
        mediaState: u,
        guildJoinRequestStatus: l,
    });
});
var ib = n(265872),
    iM = n(297264),
    iP = n(821609),
    iU = n(339350),
    iw = n(475743),
    iG = n(624458),
    ix = n(408213),
    ik = (((i = {})[(i.PENDING_JOIN_REQUESTS_FOLDER = 1)] = "PENDING_JOIN_REQUESTS_FOLDER"), i),
    iF = n(928568);
function iB(e, t) {
    (0, e1.L3)(e, async () => {
        let { default: e } = await n.e("49056").then(n.bind(n, 97187));
        return (n) => (0, r.jsx)(e, { ...n, guild: t });
    });
}
function iV(e) {
    let { guildNode: t } = e,
        n = t.id,
        i = (0, E.bG)([n4.A], () => n4.A.getRequest(n)),
        a = (0, E.bG)([n4.A], () => n4.A.getJoinRequestGuild(n), [n]),
        s = (0, E.bG)([eH.A], () => eH.A.isFocused()),
        l = (0, E.bG)([eU.A], () => eU.A.getGuildId());
    return null == a
        ? null
        : (0, r.jsx)(iy, {
              guildNode: t,
              guild: a,
              animatable: s,
              draggable: !1,
              selected: n === l,
              preloadOnClick: !1,
              contextMenu: iB,
              lowerBadge:
                  i?.applicationStatus === i_.B5.REJECTED
                      ? (0, k.eW)({ guildJoinRequestStatus: i.applicationStatus })
                      : void 0,
              route: eE.BVt.GUILD_MEMBER_VERIFICATION(n),
          });
}
var iH = n(943536);
function ij(e) {
    let { onActivate: t, children: n } = e,
        i = a.useRef(null),
        s = (0, E.bG)([n4.A], () => n4.A.hasJoinRequestCoackmark()),
        l = a.useCallback(() => {
            ix.Ay.clearCoachmark();
        }, []),
        o = (0, iw.Ay)(s),
        d = a.useRef(null);
    return (
        a.useEffect(() => {
            s && s !== o && (t(), d.current?.ref?.current?.layerRef?.current?.updatePosition());
        }, [d, s, o, t]),
        (0, r.jsxs)("div", {
            className: iH.kL,
            children: [
                (0, r.jsx)(ib.Y, {
                    ref: d,
                    targetElementRef: i,
                    shouldShow: s,
                    renderPopout: () =>
                        (0, r.jsxs)("div", {
                            className: iH.jC,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: iH.Bm,
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: iH.q3,
                                            children: [
                                                (0, r.jsx)(iM.D, {
                                                    variant: "heading-md/medium",
                                                    children: eA.intl.string(eA.t["0YV0YE"]),
                                                }),
                                                (0, r.jsx)(en.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    children: eA.intl.string(eA.t["0UQVDL"]),
                                                }),
                                            ],
                                        }),
                                        (0, r.jsx)(iP.$, {
                                            variant: "primary",
                                            size: "sm",
                                            text: eA.intl.string(eA.t["4r+amb"]),
                                            fullWidth: !0,
                                            onClick: l,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", { className: iH.ed }),
                            ],
                        }),
                    position: "right",
                    animationPosition: "right",
                    align: "top",
                    spacing: 16,
                    children: (e) => (0, r.jsx)("div", { ...e, className: iH.Ne, ref: i }),
                }),
                n,
            ],
        })
    );
}
function iW(e) {
    let { onActivate: t } = e,
        [n, i] = a.useState(!1),
        s = (0, E.bG)([eU.A], () => eU.A.getGuildId()),
        l = (0, E.bG)([n4.A], () => n4.A.hasFetchedRequestToJoinGuilds),
        o = (0, iF.A)(),
        d = (0, iw.Ay)(s),
        c = a.useMemo(() => {
            let e = (0, eP.xW)({
                folderId: ik.PENDING_JOIN_REQUESTS_FOLDER,
                folderName: eA.intl.string(eA.t["scsU+l"]),
                expanded: n,
                guildIds: [],
            });
            for (let t of o) e.children.push((0, eP.EL)(t, e.id));
            return e;
        }, [o, n]);
    a.useEffect(() => {
        n && !l && iG.A.fetchRequestToJoinGuilds();
    }, [n, l]);
    let u = null != s && o.includes(s);
    return (a.useEffect(() => {
        !n && u && d !== s && i(!0);
    }, [n, u, d, s]),
    0 === o.length)
        ? null
        : (0, r.jsx)(ij, {
              onActivate: t,
              children: (0, r.jsx)(n1, {
                  folderNode: c,
                  expanded: n,
                  selected: u,
                  draggable: !1,
                  sorting: !1,
                  onExpandCollapse: () => {
                      (i(!n), ix.Ay.clearCoachmark());
                  },
                  folderButtonSize: "icon",
                  folderButtonContent: (0, r.jsx)("div", {
                      className: iH.rH,
                      children: (0, r.jsx)(iU.Q, { size: "sm", color: "currentColor" }),
                  }),
                  renderChildNode: function (e, t, n) {
                      return e.type !== eP.PJ.GUILD
                          ? null
                          : (0, r.jsx)(iV, { guildNode: e, "aria-setsize": n, "aria-posinset": t }, e.id);
                  },
              }),
          });
}
function iY(e) {
    let { guildId: t } = e,
        n = a.useMemo(() => (0, eP.EL)(t), [t]),
        i = (0, E.bG)([eD.A], () => eD.A.getGuild(t)),
        s = (0, E.bG)([eH.A], () => eH.A.isFocused()),
        l =
            t ===
            (0, F.A)((e) => {
                let { guildId: t } = e;
                return t;
            }),
        o = ie(t);
    return null == i
        ? null
        : (0, r.jsx)(iy, { guildNode: n, guild: i, animatable: s, selected: l, draggable: !1, mediaState: o });
}
var iK = n(987566);
let i$ = (0, y.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("896215"),
                n.e("237403"),
                n.e("12343"),
                n.e("592000"),
                n.e("524434"),
                n.e("849162"),
                n.e("839460"),
                n.e("706073"),
                n.e("227512"),
                n.e("778716"),
                n.e("570973"),
                n.e("718126"),
                n.e("481647"),
                n.e("776602"),
                n.e("391763"),
                n.e("704434"),
                n.e("140402"),
                n.e("844780"),
                n.e("139970"),
                n.e("858164"),
                n.e("427032"),
                n.e("368358"),
                n.e("617249"),
                n.e("362422"),
                n.e("856437"),
                n.e("442901"),
                n.e("550033"),
                n.e("713567"),
                n.e("444567"),
                n.e("695170"),
                n.e("963203"),
                n.e("275133"),
                n.e("228850"),
                n.e("285802"),
                n.e("127659"),
                n.e("65200"),
                n.e("860003"),
                n.e("472627"),
                n.e("941348"),
                n.e("802529"),
                n.e("307348"),
                n.e("130706"),
                n.e("303886"),
                n.e("241633"),
                n.e("108066"),
                n.e("96296"),
            ]).then(n.bind(n, 153571)),
        webpackId: 153571,
        name: "NotificationsInboxButton",
    }),
    iz = (0, eb.isWindows)() ? 4 : 12 * !(0, eb.isMac)();
function iX(e) {
    return e.startsWith(eE.BVt.GUILD_DISCOVERY) || e.startsWith(eE.BVt.GLOBAL_DISCOVERY);
}
class iq {
    guildsTree;
    setScrolling;
    setIsScrolledToBottom;
    onScroll;
    sizes;
    scrollerRef = a.createRef();
    nodeRefs = {};
    timeout = new h.Ep();
    observer;
    constructor(e, t, n, i, r) {
        ((this.guildsTree = e),
            (this.setScrolling = t),
            (this.setIsScrolledToBottom = n),
            (this.onScroll = i),
            (this.sizes = r),
            (0, eN.u9)(this.getVisibleGuildIds));
    }
    setResizeObserver = () => {
        let e = this.scrollerRef.current?.getScrollerNode();
        null != e && ((this.observer = new ResizeObserver(this.handleScroll)), this.observer.observe(e));
    };
    clearResizeObserver = () => {
        (this.observer?.disconnect(), (this.observer = void 0));
    };
    setGuildsTree(e) {
        this.guildsTree = e;
    }
    scrollToGuild = (e, t) => {
        let n = this.scrollerRef.current;
        if (
            null == n ||
            (null == e && iX(window.location.pathname)) ||
            e === eE.sFm.SERVER_DISCOVERY_BADGE ||
            e === eE.sFm.E3_SERVER_DISCOVERY_BADGE
        )
            return;
        if (null == e) return void n.scrollTo({ to: 0, animate: t });
        let i = this.nodeRefs[e];
        for (; null == i;) {
            let t = this.guildsTree.getNode(e);
            if (t?.parentId == null) break;
            i = this.nodeRefs[t.parentId];
        }
        null != i && (0, _.vq)(i)
            ? n.scrollIntoViewNode({ node: i, animate: t, padding: 24 })
            : n.scrollTo({ to: 0, animate: t });
    };
    handleJumpToGuild = (e) => {
        this.scrollToGuild(e, !0);
    };
    scrollTo = (e) => {
        this.scrollerRef.current?.scrollTo(e);
    };
    scrollToBottom = () => {
        this.scrollerRef.current?.scrollToBottom();
    };
    isItemVisible = (e, t, n) => {
        let { iconTotalSize: i, badgeVisibleBuffer: r, heightBeforeGuilds: a, bottomInset: s } = this.sizes,
            l = this.scrollerRef.current;
        if (null == l) return !1;
        let o = n.findIndex((t) => ("string" == typeof t || null == t ? t === e : t.includes(e)));
        if (o < 0) return !1;
        let d = i * o + a,
            c = l.getScrollerState();
        return (!t && !!(d >= c.scrollTop)) || (!!t && !!(d + i + r <= c.scrollTop + c.offsetHeight - s));
    };
    getVisibleGuildIds = () => {
        let e = this.scrollerRef.current;
        if (null == e) return [];
        let t = e.getScrollerState().offsetHeight,
            n = e.getScrollerNode()?.getBoundingClientRect().top;
        return void 0 === n
            ? []
            : this.guildsTree
                  .sortedGuildNodes()
                  .filter((e) => {
                      let i = e.parentId ?? e.id,
                          r = this.nodeRefs[i];
                      if (null == r) return !1;
                      let a = r.getBoundingClientRect(),
                          s = a.top - n;
                      return s + a.height > 0 && s < t;
                  })
                  .map((e) => {
                      let { id: t } = e;
                      return t;
                  });
    };
    handleScroll = () => {
        (this.setScrolling(!0),
            this.timeout.start(200, () => this.setScrolling(!1)),
            this._handleScrollDebounced(),
            this._handleScrollThrottled());
    };
    _handleScrollDebounced = d().debounce(() => {
        let e = this.scrollerRef.current;
        if (null == e) return;
        let { scrollTop: t } = e.getScrollerState();
        (S.A.updateGuildListScrollTo(t), this.onScroll());
    }, 200);
    _handleScrollThrottled = d().throttle(() => {
        let e = this.scrollerRef.current;
        null != e && this.setIsScrolledToBottom(e.isScrolledToBottom());
    }, 100);
    setNodeRef = (e, t) => {
        this.nodeRefs[e] = t;
    };
}
function iZ(e) {
    let { hideDms: t, scrollToTop: n, lurkingGuildIds: i } = e,
        a = (0, D.A)(),
        s = (0, E.yK)([eD.A, ey.Ay], () => eD.A.getGuildIds().filter((e) => ey.Ay.isCurrentUserGuest(e))),
        l = i.concat(s),
        { entrypoint: o } = (0, eO.X8)({ location: "GuildsBar" });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(nS, {}),
            o === eO.RK.SERVER_RAIL_TOP && (0, r.jsx)(i$, {}),
            a ? (0, r.jsx)(eS, {}) : null,
            !t && (0, r.jsx)(t_, {}),
            l.map((e) => (0, r.jsx)(iY, { guildId: e }, e)),
            (0, r.jsx)(iW, { onActivate: n }),
        ],
    });
}
function iQ(e) {
    let { guildDiscoveryButton: t, disableAppDownload: n, isOverlay: i, renderTreeNode: a, lurkingGuildIds: s } = e,
        [l] = (0, E.yK)([ev.Ay], () => {
            let e = ev.Ay.getGuildsTree();
            return [e, e.version];
        }),
        o = l.getRoots(),
        d = (0, E.yK)([eL.A], () => eL.A.getGeoRestrictedGuilds()).map((e) =>
            (0, r.jsx)(tq, { id: e.id, name: e.name, icon: e.icon }, e.id),
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(I.B, {
                role: "group",
                "aria-label": eA.intl.string(eA.t["7hB4kg"]),
                gap: "xs",
                children: o.map((e, t) => a(e, t, o.length)),
            }),
            d,
            (0, r.jsx)(nv, {}),
            i ? null : (0, r.jsx)(tY, { disableTooltip: s.length > 0, lastTargetNode: o[o.length - 1] }),
            i ? null : t,
            n ? null : (0, r.jsx)(tg, {}),
        ],
    });
}
function iJ(e) {
    var t;
    let { disableAppDownload: n = eb.isPlatformEmbedded, isOverlay: i = !1, className: s, themeOverride: o } = e,
        [d] = (0, E.yK)([ev.Ay], () => {
            let e = ev.Ay.getGuildsTree();
            return [e, e.version];
        }),
        _ = (0, E.bG)([eC.A], () => eC.A.lurkingGuildIds()),
        A = a.useMemo(() => (i ? [] : _), [_, i]),
        I = (0, E.bG)([L.A], () => L.A.isFullscreenInContext()),
        { isSorting: S, startSorting: C, stopSorting: y } = (0, eM.A)(),
        v = a.useRef(!1),
        [b] = a.useState(() => new h.Ep()),
        M = a.useRef(null),
        P = a.useRef(null),
        { ref: U, ...w } = (0, u.$y)(),
        G = (0, p.R7)(),
        [x, k] = a.useState(!1),
        B = (0, T.r)(f.A.modules.guildbar.AVATAR_SIZE),
        V = (0, T.r)(f.A.space.SPACE_XS),
        H = (0, D.A)(),
        { pathname: j } = (0, c.zy)(),
        { entrypoint: W } = (0, eO.X8)({ location: "GuildsBar" }),
        Y = +!!H + +(W === eO.RK.SERVER_RAIL_TOP),
        K = a.useMemo(() => {
            let e,
                t,
                n =
                    ((e = B + V),
                    {
                        iconSize: B,
                        iconTotalSize: e,
                        badgeVisibleBuffer: e - 16,
                        separatorSize: (t = 2 + V),
                        heightBeforeGuilds: iz + t + Y * e,
                        bottomInset: 16,
                    });
            return new iq(
                d,
                k,
                eE.tEg,
                () => {
                    (M.current?.calculateState(), P.current?.calculateState());
                },
                n,
            );
        }, [B, V, d, Y]);
    (a.useEffect(
        () => (
            K.setResizeObserver(),
            () => {
                K.clearResizeObserver();
            }
        ),
        [K],
    ),
        a.useEffect(() => {
            function e() {
                (M.current?.calculateState(), P.current?.calculateState());
            }
            return (X.default.addChangeListener(e), () => X.default.removeChangeListener(e));
        }, []));
    let { analyticsLocations: $ } = (0, R.Ay)(O.A.GUILDS_LIST),
        z = iX(j);
    ((0, N.u5)(() => {
        if (!v.current && 0 !== d.size) {
            if (!z) {
                let { scrollTop: e } = eR.A.getGuildListDimensions();
                K.scrollTo({ to: e, animate: !1 });
            }
            return ((v.current = !0), () => b.stop());
        }
    }),
        a.useEffect(() => {
            if ((K.setGuildsTree(d), v.current || 0 === d.size)) return;
            let e = F.A.getState().guildId;
            K.scrollToGuild(e, !1);
            let t = null;
            return F.A.subscribe((e) => {
                let { guildId: n } = e;
                n !== t && ((t = n), K.scrollToGuild(t, !1));
            });
        }, [d, K]));
    let q = a.useCallback(() => {
        K.scrollTo({ to: 0, animate: !1 });
    }, [K]);
    ((t = K.scrollToGuild),
        a.useEffect(() => {
            let e = null;
            function n() {
                let n = eU.A.getGuildId();
                n !== e && ((e = n ?? null), t(n ?? null, !1));
            }
            return (
                eU.A.addChangeListener(n),
                () => {
                    eU.A.removeChangeListener(n);
                }
            );
        }, [t]));
    let Z = a.useCallback(
            function e(t, n, i) {
                switch (t.type) {
                    case eP.PJ.FOLDER:
                        return (0, r.jsx)(
                            n3,
                            {
                                folderNode: t,
                                treeVersion: d.version,
                                setNodeRef: K.setNodeRef,
                                draggable: !0,
                                sorting: S,
                                onDragStart: C,
                                onDragEnd: y,
                                renderChildNode: e,
                                "aria-setsize": i,
                                "aria-posinset": void 0 !== n ? n + 1 : void 0,
                            },
                            t.id,
                        );
                    case eP.PJ.GUILD:
                        return (0, r.jsx)(
                            iv,
                            {
                                guildNode: t,
                                setRef: K.setNodeRef,
                                draggable: !0,
                                sorting: S,
                                onDragStart: C,
                                onDragEnd: y,
                                "aria-setsize": i,
                                "aria-posinset": void 0 !== n ? n + 1 : void 0,
                            },
                            t.id,
                        );
                    default:
                        return null;
                }
            },
            [C, y, S, K.setNodeRef, d.version],
        ),
        Q = (0, r.jsx)(t4, { selected: z, className: iK.ai }),
        J = W === eO.RK.SERVER_RAIL_BOTTOM;
    return (0, r.jsx)(R.f5, {
        value: $,
        children: (0, r.jsx)(m.N, {
            theme: o,
            children: (e) =>
                (0, r.jsxs)("nav", {
                    className: l()(iK.iE, s, e, { [iK.R]: I }),
                    "aria-label": eA.intl.string(eA.t.PjnF2t),
                    children: [
                        (0, r.jsx)(eX, {
                            ref: M,
                            isVisible: K.isItemVisible,
                            onJumpTo: K.handleJumpToGuild,
                            className: iK.Xl,
                            barClassName: iK.Sh,
                        }),
                        (0, r.jsxs)("div", {
                            ref: U,
                            ...w,
                            ...G,
                            role: "tree",
                            "aria-multiselectable": !1,
                            className: iK.B2,
                            children: [
                                (0, r.jsxs)(g.Ch, {
                                    className: l()({ [iK.XG]: !0, [iK.qw]: x }),
                                    fade: !0,
                                    experimental_useStack: !0,
                                    gap: "xs",
                                    ref: K.scrollerRef,
                                    onScroll: K.handleScroll,
                                    children: [
                                        (0, r.jsx)(iZ, { scrollToTop: q, lurkingGuildIds: A }),
                                        (0, r.jsx)(nC, {}),
                                        (0, r.jsx)(iQ, {
                                            guildDiscoveryButton: Q,
                                            disableAppDownload: n,
                                            isOverlay: i,
                                            renderTreeNode: Z,
                                            lurkingGuildIds: A,
                                        }),
                                    ],
                                }),
                                J &&
                                    (0, r.jsxs)("div", {
                                        children: [
                                            (0, r.jsx)(nC, { fullWidth: !0 }),
                                            (0, r.jsx)("div", { className: iK.JU, children: (0, r.jsx)(i$, {}) }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, r.jsx)(eX, {
                            reverse: !0,
                            ref: P,
                            isVisible: K.isItemVisible,
                            onJumpTo: K.handleJumpToGuild,
                            className: l()(iK.LZ, { [iK.CH]: !i && !J, [iK.c0]: !i && J }),
                            barClassName: iK.Sh,
                        }),
                    ],
                }),
        }),
    });
}
let i0 = a.memo(
    function (e) {
        let t = (0, C.A)("guildsnav");
        return (0, r.jsx)(u.hD, { navigator: t, children: (0, r.jsx)(iJ, { ...e }) });
    },
    (e, t) => !1 === t.isVisible || (0, A.A)(e, t),
);
