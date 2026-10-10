n.d(t, { A: () => rg });
var i,
    r,
    a = n(477900),
    s = n(582128),
    l = n(503698),
    o = n.n(l),
    d = n(435558),
    c = n.n(d),
    u = n(806163),
    _ = n(837381),
    E = n(621466),
    A = n(17928),
    h = n(52133),
    f = n(451988),
    I = n(661531),
    p = n(331322),
    T = n(312138),
    m = n(602853),
    g = n(43990),
    S = n(689175),
    N = n(951001),
    C = n(964486),
    O = n(260762),
    R = n(793574),
    L = n(688810),
    y = n(198052),
    D = n(268218),
    v = n(749884),
    b = n(771959);
n(321073);
var M = n(862328),
    P = n(67811),
    U = n(27232),
    w = n(308528),
    G = n(933958),
    x = n(969151),
    k = n(941971),
    F = n(900848),
    B = n(771640),
    V = n(366811),
    H = n(345942),
    j = n(616356),
    W = n(734057),
    Y = n(309010),
    K = n(977997),
    $ = n(935208),
    z = n(181079),
    X = n(5180),
    Z = n(635233),
    q = n(863005),
    Q = n(152007),
    J = n(458294),
    ee = n(576705),
    et = n(573163),
    en = n(543465),
    ei = n(428784),
    er = n(43105),
    ea = n(22277),
    es = n(660183),
    el = n(988572);
function eo(e) {
    let { targetElementRef: t, onTakeAction: n, onRequestClose: i } = e;
    return (0, a.jsx)(er.A, {
        targetElementRef: t,
        gradientColor: "nitro-pink",
        position: "right",
        alignmentStrategy: "edge",
        align: "top",
        caretConfig: { align: "start" },
        badge: { type: "beta", variant: "expressive" },
        graphic: { src: el.A, type: "image", aspectRatio: "16/9" },
        title: es.intl.string(ea.default["bu/mLv"]),
        body: es.intl.string(ea.default.kxQJ7q),
        onRequestClose: i,
        actions: [{ text: es.intl.string(ea.default["vN/KQ9"]), onClick: n }],
    });
}
var ed = n(451394),
    ec = n(597601),
    eu = n(834730),
    e_ = n(983851),
    eE = n(183623),
    eA = n(323384),
    eh = n(866665),
    ef = n(104171),
    eI = n(63995),
    ep = n(518769),
    eT = n(287809),
    em = n(607567),
    eg = n(403362),
    eS = n(652215),
    eN = n(785332);
function eC(e, t) {
    return 0 === t.length
        ? null
        : (0, a.jsxs)("div", {
              className: eN.nM,
              children: [
                  (0, a.jsx)(e, { className: eN.RI, color: "currentColor" }),
                  (0, a.jsx)(ef.Ay, { guildId: void 0, users: t, max: 6 }),
              ],
          });
}
function eO() {
    let e = (0, A.yK)([z.A, W.A], () =>
            $.default
                .keys(z.A.getFavoriteChannels())
                .map((e) => W.A.getChannel(e))
                .filter(eg.Vq),
        ),
        t = e.map((e) => e.id),
        n = e.filter((e) => e.type === eS.rbe.GUILD_VOICE),
        i = e.filter((e) => e.type === eS.rbe.GUILD_STAGE_VOICE).map((e) => e.id),
        r = (0, A.yK)(
            [em.Ay],
            () =>
                c().flatMap(n, (e) =>
                    em.Ay.getVoiceStatesForChannel(e).map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
                ),
            [n],
        ),
        s = (0, A.yK)([eI.A], () =>
            c().flatMap(i, (e) =>
                eI.A.getMutableParticipants(e, ep.ip.SPEAKER)
                    .filter((e) => e.type === ep.wY.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
            ),
        ),
        l = (0, A.bG)([eI.A], () => {
            let e = 0;
            for (let t of i) e += eI.A.getParticipantCount(t, ep.ip.AUDIENCE);
            return e;
        }),
        o = (0, A.yK)(
            [j.A],
            () =>
                j.A.getAllApplicationStreams()
                    .filter((e) => t.includes(e.channelId))
                    .map((e) => e.ownerId),
            [t],
        ),
        d = (0, A.yK)(
            [G.Ay],
            () => {
                let e = G.Ay.getEmbeddedActivitiesByChannel(),
                    n = [];
                for (let i of t) n.push(...(e.get(i)?.flatMap((e) => Array.from(e.userIds)) ?? []));
                return n;
            },
            [t],
        ),
        u = (0, A.yK)([eT.default], () => d.map((e) => eT.default.getUser(e)), [d]),
        _ = (0, A.yK)([eT.default], () => o.map((e) => eT.default.getUser(e)), [o]),
        E = eC(
            e_.H,
            r.filter((e) => !o.includes(e.id) && !d.includes(e.id)),
        ),
        h =
            0 === s.length
                ? null
                : (0, a.jsxs)("div", {
                      className: eN.nM,
                      children: [
                          (0, a.jsx)(ed.q, { size: "lg", color: "currentColor", className: eN.RI }),
                          (0, a.jsx)(ef.Ay, { guildId: void 0, users: s, max: 3 }),
                          (0, a.jsxs)("div", {
                              className: eN.GZ,
                              children: [
                                  (0, a.jsx)(ec.L, { size: "xs", color: "currentColor" }),
                                  (0, a.jsx)(eu.E, {
                                      className: eN._I,
                                      color: "text-default",
                                      variant: "text-xs/medium",
                                      children: l,
                                  }),
                              ],
                          }),
                      ],
                  }),
        f = eC(
            eE.F,
            _.filter((e) => null != e && !d.includes(e.id)),
        ),
        I = eC(eA.k, u);
    return (0, a.jsxs)(a.Fragment, { children: [h, E, f, I] });
}
function eR() {
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", {
                className: o()(eN.nM, eN.Dl),
                children: (0, a.jsx)("span", { className: o()(eN.cN, eN.NT), children: es.intl.string(es.t.wMWyci) }),
            }),
            (0, a.jsx)(eO, {}),
        ],
    });
}
function eL(e) {
    let { "aria-label": t = !1, children: n } = e,
        i = s.useMemo(
            () =>
                (0, a.jsx)(eu.E, {
                    variant: "text-md/semibold",
                    color: "text-default",
                    className: eN.A_,
                    children: (0, a.jsx)(eR, {}),
                }),
            [],
        );
    return (0, a.jsx)(eh.m, {
        __unsupportedReactNodeAsText: i,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": !1 === t ? void 0 : t,
        asContainer: !0,
        children: n,
    });
}
var ey = n(49999),
    eD = n(195572);
let ev = { analyticsSource: { page: eS.liQ.GUILD_CHANNEL, section: eS.JJy.CHANNEL_LIST, object: eS.ZSU.CHANNEL } };
function eb() {
    let e,
        t,
        n,
        i,
        r,
        l,
        o,
        d,
        c,
        u,
        E,
        h,
        { shouldShowPopover: f, markPopoverAsDismissed: I } = (0, b.QQ)(),
        p = (0, _.Vd)("favorites"),
        T = s.useRef(null),
        [m, g] = s.useState(!1),
        S = (0, ei.$)("favorite-server-context"),
        { favoriteGuildMuted: N, favoriteChannels: C } = (0, A.cf)([z.A], () => ({
            favoriteChannels: z.A.getFavoriteChannels(),
            favoriteGuildMuted: z.A.favoriteGuildMuted,
        })),
        O = (0, A.bG)([Y.Ay], () => Y.Ay.getChannelId(eS.YYv)),
        R = (0, A.bG)([W.A], () => W.A.getChannel(O)),
        L = (0, V.A)((e) => e.guildId),
        y = (0, X.ai)(L),
        { badge: D, unread: v } = (0, A.cf)([q.A, W.A, J.default, Q.A, ee.A, et.Ay, en.Ay], () => {
            let e = $.default.keys(C),
                t = new Set();
            return e.reduce(
                (e, n) => {
                    let i = W.A.getChannel(n),
                        r = i?.getGuildId(),
                        a = et.Ay.getMentionCount(n);
                    if (
                        (t.has(n) || (t.add(n), (e.badge = e.badge + a)),
                        (e.unread = e.unread || (et.Ay.hasUnread(n) && J.default.shouldCountChannelUnread(i, a))),
                        null != r)
                    ) {
                        let i = q.A.getActiveJoinedRelevantThreadsForParent(r, n);
                        for (let n in i) {
                            let i = et.Ay.getMentionCount(n);
                            t.has(n) || (t.add(n), (e.badge += i));
                            let r = W.A.getChannel(n);
                            e.unread = e.unread || (et.Ay.hasUnread(n) && J.default.shouldCountChannelUnread(r, i));
                        }
                    }
                    return e;
                },
                { badge: 0, unread: !1 },
            );
        }),
        er =
            ((t = null != (e = (0, A.bG)([Y.Ay], () => Y.Ay.getVoiceChannelId())) && null != C[e]),
            (n = (0, A.bG)([j.A], () => {
                if (!t) return !1;
                let e = j.A.getCurrentUserActiveStream();
                return null != e && null != C[e.channelId];
            })),
            (i = (0, A.bG)([j.A], () => j.A.getAllApplicationStreams().some((e) => null != C[e.channelId]))),
            (r = (0, A.bG)([K.A], () => t && null != e && K.A.hasVideo(e), [t, e])),
            (l = (0, A.yK)([G.Ay], () =>
                $.default.keys(C).reduce((e, t) => (e.push(...G.Ay.getEmbeddedActivitiesForChannel(t)), e), []),
            )),
            (o = (0, A.bG)([G.Ay], () =>
                Array.from(G.Ay.getSelfEmbeddedActivities().values()).some((e) => {
                    let { location: t } = e,
                        n = (0, x.H)(t);
                    return null != n && null != C[n];
                }),
            )),
            (d = l.length > 0),
            (c = !1),
            (u = !1),
            (E = !1),
            (h = !1),
            t ? ((c = !r), (u = r), (E = n), (h = o)) : ((E = i), (h = d)),
            (0, B.oi)({ audio: c, video: u, screenshare: E, liveStage: !1, isCurrentUserConnected: t, activity: h })),
        ea = D > 0 ? (0, B.wN)(D) : null,
        el = s.useCallback(
            (e) => {
                (e && ((0, Z.mv)("intro_dc"), (0, H.u)(eS.YYv)), I(ey.i.TAKE_ACTION));
            },
            [I],
        );
    return (0, a.jsxs)(F.c, {
        children: [
            (0, a.jsx)(k.A, { overlay: !0, selected: y, hovered: m, unread: v && !N }),
            (0, a.jsx)(eL, {
                children: (0, a.jsx)(M.Q, {
                    selected: !0,
                    upperBadge: er,
                    lowerBadge: ea,
                    children: (0, a.jsx)("div", {
                        ref: T,
                        children: (0, a.jsx)(P.j, {
                            ...p,
                            ariaLabel: es.intl.formatToPlainString(es.t["/uzRss"], {
                                guildName: es.intl.string(es.t.wMWyci),
                                mentions: D,
                            }),
                            "aria-selected": y,
                            to: { pathname: eS.BVt.CHANNEL(eS.YYv, O), state: ev },
                            selected: y || m,
                            onClick: () => {
                                f && el(!1);
                            },
                            onMouseEnter: () => g(!0),
                            onMouseLeave: () => g(!1),
                            onMouseDown: function () {
                                null != R && w.A.preload(R.guild_id, R.id);
                            },
                            onContextMenu: S,
                            children: (0, a.jsx)(U.StarIcon, {
                                size: "custom",
                                color: "currentColor",
                                className: eD.w,
                                width: 20,
                                height: 20,
                            }),
                        }),
                    }),
                }),
            }),
            f &&
                (0, a.jsx)(eo, {
                    targetElementRef: T,
                    onTakeAction: () => el(!0),
                    onRequestClose: () => I(ey.i.USER_DISMISS),
                }),
        ],
    });
}
var eM = n(633965),
    eP = n(857071),
    eU = n(851109),
    ew = n(72314),
    eG = n(543897),
    ex = n(696451),
    ek = n(71393),
    eF = n(711014),
    eB = n(723702),
    eV = n(757780),
    eH = n(263715),
    ej = n(967198),
    eW = n(173860),
    eY = n(383394),
    eK = n(131677),
    e$ = n(73153);
let ez = {};
class eX extends A.Ay.PersistedStore {
    static displayName = "ViewHistoryStore";
    static persistKey = "ViewHistoryStore";
    initialize(e) {
        null != e &&
            Object.keys(e).forEach((t) => {
                "number" == typeof e[t] && (ez[t] = e[t]);
            });
    }
    getState() {
        return ez;
    }
    hasViewed(e) {
        return null != ez[e];
    }
}
let eZ = new eX(e$.h, {
    VIEW_HISTORY_MARK_VIEW: function (e) {
        let { key: t } = e;
        ez[t] = Date.now();
    },
});
var eq = n(531685),
    eQ = n(583613);
let eJ = "app-download-item",
    e0 = "add-server-item";
function e1() {
    return !1;
}
function e2(e) {
    let t = J.default.getMutableGuildStates();
    return (
        (e === eS.sFm.SERVER_DISCOVERY_BADGE && !eZ.hasViewed(eS.sFm.SERVER_DISCOVERY_BADGE)) ||
        (e !== eJ && e !== e0 && t[e ?? "null"]?.highImportanceMentionCount > 0)
    );
}
let e3 = (0, eQ.L_)((e, t, n) => ["null", ...t, ...e, e0, eS.sFm.E3_SERVER_DISCOVERY_BADGE, eJ]);
function e6(e) {
    let { ref: t, ...n } = e,
        i = (0, A.yK)([eF.Ay, eK.A, J.default], () =>
            e3(eF.Ay.getGuildFolders(), eK.A.getUnreadPrivateChannelIds(), J.default.getStoreChangeSentinel()),
        ),
        r = (0, A.bG)([eq.A], () => eq.A.isFocused()),
        s = (0, A.bG)([eY.A], () => eY.A.getExpandedFolders());
    return (0, a.jsx)(eW.A, {
        ...n,
        ref: t,
        items: i,
        isUnread: e1,
        textUnread: es.intl.string(es.t.y2b7CA),
        textMention: es.intl.string(es.t.y2b7CA),
        isMentioned: e2,
        animate: r,
        expandedFolders: s,
    });
}
n(667532);
var e5 = n(868285),
    e4 = n(763827),
    e7 = n(202091),
    e8 = n(778712),
    e9 = n(812993),
    te = n(442433),
    tt = n(620982),
    tn = n(571694),
    ti = n(47167),
    tr = n(598104),
    ta = n(297334),
    ts = n(427358),
    tl = n(907459),
    to = n(994500),
    td = n(145408),
    tc = n(240921);
let tu = (0, tc.Ay)({
    kind: "user",
    name: "2026-10-guild-tooltip-lazy-content",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function t_(e) {
    let t = tu.useConfig({ location: e }).enabled,
        [n, i] = s.useState(!1),
        [r] = s.useState(() => new f.Ep());
    return (
        s.useEffect(() => () => r.stop(), [r]),
        {
            isOpen: n,
            shouldRenderRichContent: !t || n,
            handleTooltipShow: s.useCallback(() => {
                (r.stop(), i(!0));
            }, [r]),
            handleTooltipHide: s.useCallback(() => {
                r.start(300, () => i(!1));
            }, [r]),
        }
    );
}
function tE(e) {
    let { icon: t, users: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsxs)("div", {
              className: eN.nM,
              children: [
                  (0, a.jsx)(t, { className: eN.RI, color: "currentColor" }),
                  (0, a.jsx)(ef.Ay, { users: n, max: 6 }),
              ],
          });
}
function tA(e) {
    let { muteConfig: t, className: n } = e;
    return t?.end_time == null
        ? (0, a.jsx)(eu.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: n,
              children: es.intl.string(es.t.fpKdS1),
          })
        : (0, a.jsx)(td.A, { muteConfig: t, className: n });
}
function th(e) {
    let t,
        n,
        i,
        r,
        l,
        d,
        c,
        u,
        _,
        E,
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
        (n = (0, A.bG)([to.A], () => to.A.getBlockedOrIgnoredIDs())),
        (i = (0, A.bG)([ts.A], () => ts.A.getUserAffinitiesMap(), [])),
        (r = (0, A.yK)(
            [G.Ay, eT.default],
            () =>
                G.Ay.getEmbeddedActivitiesForChannel(t)
                    .flatMap((e) => Array.from(e.userIds))
                    .map((e) => eT.default.getUser(e)),
            [t],
        )),
        (l = s.useMemo(() => (0, ta.aw)(r, n), [r, n])),
        (d = s.useMemo(() => (0, tl.L)(l, i, "DirectMessageTooltip - activityUsers"), [l, i])),
        (c = (0, A.yK)(
            [j.A, eT.default],
            () => {
                let e = j.A.getAllApplicationStreamsForChannel(t)
                    .map((e) => e.ownerId)
                    .map((e) => eT.default.getUser(e));
                return (0, ta.aw)(e, n);
            },
            [t, n],
        )),
        (u = s.useMemo(() => (0, ta.aw)(c, n), [c, n])),
        (_ = s.useMemo(() => (0, tl.L)(u, i, "DirectMessageTooltip - activityUsers"), [u, i])),
        (E = s.useMemo(() => _.filter((e) => !d.some((t) => t.id === e.id)), [_, d])),
        (h = (0, A.yK)(
            [em.Ay],
            () => {
                let e = em.Ay.getVoiceStatesForChannel(p).map((e) => {
                    let { user: t } = e;
                    return t;
                });
                return (0, ta.aw)(e, n);
            },
            [p, n],
        )),
        (f = s.useMemo(() => (0, ta.aw)(h, n), [h, n])),
        (I = s.useMemo(() => (0, tl.L)(f, i, "DirectMessageTooltip - voiceUsers"), [f, i])),
        {
            voiceUsers: s.useMemo(
                () => I.filter((e) => !d.some((t) => t.id === e.id) && !_.some((t) => t.id === e.id)),
                [I, d, _],
            ),
            streamUsers: E,
            activityUsers: d,
        }),
        N = (0, a.jsx)(tE, { icon: e_.H, users: S }),
        C = (0, a.jsx)(tE, { icon: eE.F, users: g }),
        O = (0, a.jsx)(tE, { icon: eA.k, users: m }),
        { isMuted: R, muteConfig: L } = (0, A.cf)(
            [en.Ay],
            () => ({ isMuted: en.Ay.isChannelMuted(null, T), muteConfig: en.Ay.getChannelMuteConfig(null, T) }),
            [T],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            N,
            C,
            O,
            R ? (0, a.jsx)(tA, { muteConfig: L, className: o()(eN.LM, { [eN.Sx]: null != N || null != C }) }) : null,
        ],
    });
}
function tf(e) {
    let { channel: t } = e,
        n = (0, ti.Ay)(t);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", {
                className: o()(eN.nM, eN.Dl),
                children: (0, a.jsx)("span", { className: o()(eN.cN, eN.NT), children: n }),
            }),
            (0, a.jsx)(th, { channel: t }),
        ],
    });
}
function tI(e) {
    let { channel: t, children: n } = e,
        i = (0, ti.Ay)(t),
        { shouldRenderRichContent: r, handleTooltipShow: l, handleTooltipHide: o } = t_("DirectMessageTooltip"),
        d = s.useMemo(
            () =>
                (0, a.jsx)(eu.E, {
                    variant: "text-md/semibold",
                    color: "text-default",
                    className: eN.A_,
                    children: r ? (0, a.jsx)(tf, { channel: t }) : i,
                }),
            [t, i, r],
        );
    return (0, a.jsx)(eh.m, {
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
let tp = { friction: 28, tension: 600 };
function tT(e) {
    switch (e) {
        case "height":
        case "opacity":
            return { duration: 150, ...tp };
        case "scale":
            return { ...tp };
        default:
            throw Error(`DirectMessage: getSpringConfigs() - Invalid spring ${String(e)}`);
    }
}
class tm extends s.PureComponent {
    static defaultProps = { badge: 0, audio: !1, video: !1, isCurrentUserInThisDMCall: !1 };
    state = {
        hovered: !1,
        animating: !0,
        controller: new e7.Controller({ scale: 0, height: 0, opacity: 0, config: tT }),
    };
    componentWillEnter(e) {
        let { controller: t } = this.state;
        (e(),
            t
                .update({ immediate: !eq.A.isFocused(), height: 1, opacity: 1, scale: 1, config: tT })
                .start()
                .then(() => this.setState({ animating: !1 })));
    }
    componentWillAppear(e) {
        let { controller: t } = this.state;
        t.update({ immediate: !0, scale: 1, opacity: 1, height: 1, config: tT }).start().then(e);
    }
    componentWillLeave(e) {
        let { controller: t } = this.state;
        this.setState({ animating: !0 }, () =>
            t.update({ immediate: !eq.A.isFocused(), height: 0, opacity: 0, scale: 0, config: tT }).start().then(e),
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
            t = e.type === eS.rbe.DM ? eT.default.getUser(e.getRecipientId()) : null;
        return null != t ? t.getAvatarURL(void 0, 48, !1) : (0, tn.Y)(e);
    }
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            i = t.type === eS.rbe.DM ? eT.default.getUser(t.getRecipientId()) : null;
        null != i
            ? (0, te.L3)(e, async () => {
                  let { default: e } = await Promise.all([
                      n.e("339715"),
                      n.e("790484"),
                      n.e("819113"),
                      n.e("622936"),
                      n.e("216947"),
                      n.e("463317"),
                      n.e("926132"),
                      n.e("834552"),
                      n.e("146652"),
                      n.e("993103"),
                      n.e("708757"),
                      n.e("893190"),
                      n.e("585968"),
                      n.e("393336"),
                      n.e("776273"),
                      n.e("391763"),
                      n.e("189673"),
                      n.e("28102"),
                      n.e("882073"),
                      n.e("797558"),
                      n.e("571210"),
                      n.e("955557"),
                      n.e("691994"),
                      n.e("229787"),
                      n.e("576665"),
                      n.e("88342"),
                      n.e("311802"),
                      n.e("698965"),
                      n.e("235313"),
                      n.e("474610"),
                      n.e("947502"),
                      n.e("436564"),
                      n.e("245996"),
                      n.e("700792"),
                      n.e("592822"),
                      n.e("529422"),
                      n.e("823427"),
                      n.e("965789"),
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
                  return (n) => (0, a.jsx)(e, { ...n, channel: t, user: i });
              })
            : (0, te.L3)(e, async () => {
                  let { default: e } = await Promise.all([
                      n.e("926132"),
                      n.e("146652"),
                      n.e("893190"),
                      n.e("393336"),
                      n.e("391763"),
                      n.e("955557"),
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
                  return (n) => (0, a.jsx)(e, { ...n, channel: t, selected: !1 });
              });
    };
    render() {
        let {
                channel: e,
                channelName: t,
                selected: n,
                badge: i,
                audio: r,
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
                (0, a.jsx)(P.j, {
                    to: eS.BVt.CHANNEL(eS.ME, e.id),
                    onMouseEnter: () => this.setState({ hovered: !0 }),
                    onMouseLeave: () => this.setState({ hovered: !1 }),
                    selected: n || E,
                    ariaLabel:
                        null != t
                            ? [
                                  es.intl.formatToPlainString(es.t.hKarnZ, { name: t, mentions: i }),
                                  d ? es.intl.string(es.t["fk1/bX"]) : c ? es.intl.string(es.t["NGg/fm"]) : null,
                              ]
                                  .filter(Boolean)
                                  .join(", ")
                            : "",
                    onContextMenu: this.handleContextMenu,
                    icon: h ? void 0 : this.getChannelIcon(),
                    backgroundStyle: h ? "on-hover" : "always",
                    children: h
                        ? (0, a.jsx)(tr.A, {
                              channel: e,
                              size: e8._3.SIZE_40,
                              facepileSizeOverride: e8._3.SIZE_32,
                              "aria-hidden": !0,
                          })
                        : void 0,
                    ..._,
                });
        return (0, a.jsx)(e7.animated.div, {
            style: this.getAnimatedStyle(),
            children: (0, a.jsxs)(F.c, {
                children: [
                    (0, a.jsx)(k.A, { overlay: !0, hovered: !A && E, selected: !A && n, unread: !A && u }),
                    (0, a.jsx)(tI, {
                        channel: e,
                        children: (0, a.jsx)(M.Q, {
                            rounded: !0,
                            selected: !1,
                            lowerBadge: i > 0 ? (0, B.wN)(i, void 0, !0) : null,
                            upperBadge: (0, B.oi)({ audio: r, video: s, screenshare: l, isCurrentUserConnected: o }),
                            lowerBadgeSize: { width: (0, e9.o6)(i) },
                            children: f(),
                        }),
                    }),
                ],
            }),
        });
    }
}
function tg(e) {
    let { ref: t, ...n } = e,
        i = n.channel.id,
        r = (0, ti.Ay)(n.channel),
        s = (0, _.Vd)(i, 2),
        l = (0, A.bG)([e4.A], () => e4.A.getChannelId(), []),
        o = (0, A.bG)([y.A], () => y.A.getMode(i), [i]),
        d = (0, A.bG)([j.A], () => j.A.getAllApplicationStreamsForChannel(i).length > 0),
        c = (0, A.bG)([em.Ay], () => em.Ay.getVoiceStatesForChannel(n.channel).length > 0, [n.channel]),
        u = (0, A.bG)([Y.Ay], () => Y.Ay.getChannelId(), []),
        E = (0, A.bG)([et.Ay], () => et.Ay.getMentionCount(i), [i]),
        h = l === i,
        { isIncomingCall: f, isOngoingCall: p } = (0, tt.A)(i),
        T = !1,
        g = !1;
    (h || c) && ((T = o === eS._Of.VOICE), (g = o === eS._Of.VIDEO));
    let S = (0, m.r)(I.A.modules.guildbar.AVATAR_SIZE);
    return (0, a.jsx)(tm, {
        ...n,
        ref: t,
        channelName: r,
        unread: E > 0,
        selected: u === i,
        badge: E,
        audio: T,
        video: g,
        stream: d,
        isCurrentUserInThisDMCall: h,
        isIncomingCall: f,
        isOngoingCall: p,
        size: S,
        treeItemProps: s,
    });
}
function tS() {
    (0, A.bG)([W.A], () => W.A.getPrivateChannelsVersion());
    let e = W.A.getMutablePrivateChannels(),
        t = (0, A.yK)([eK.A], () => eK.A.getUnreadPrivateChannelIds()),
        { selectedVoiceGuildId: n, selectedVoiceChannelId: i } = (0, A.cf)([e4.A], () => ({
            selectedVoiceGuildId: e4.A.getGuildId(),
            selectedVoiceChannelId: e4.A.getChannelId(),
        })),
        r = t.map((t) => {
            let n = e[t];
            return null == n || n.id === i ? null : (0, a.jsx)(tg, { channel: n }, n.id);
        }),
        l = null == n && null != i ? e[i] : null;
    return (
        null != l && r.unshift((0, a.jsx)(tg, { channel: l }, l.id)),
        (0, a.jsx)(p.B, {
            id: "guild-list-unread-dms",
            role: "group",
            "aria-label": es.intl.string(es.t.YUU0RF),
            gap: "xs",
            hidden: r.length < 1,
            children: (0, a.jsx)(e5.F, { component: s.Fragment, children: r }),
        })
    );
}
var tN = n(192308),
    tC = n(32880),
    tO = n(939249),
    tR = n(728309);
function tL(e) {
    let {
            children: t,
            text: n,
            disableWrapper: i = !1,
            disabled: r = !1,
            hideOnClick: l = !0,
            shouldShow: d,
            forceOpen: c,
            selected: u = !1,
        } = e,
        _ = s.useMemo(
            () =>
                null == n || r
                    ? null
                    : (0, a.jsx)(eu.E, {
                          variant: "text-md/semibold",
                          color: "text-default",
                          className: eN.A_,
                          children: n,
                      }),
            [n, r],
        ),
        E = i ? t : (0, a.jsx)("div", { className: o()(tR.p, { [tR.w]: u }), children: t });
    return (0, a.jsx)(eh.m, {
        __unsupportedReactNodeAsText: _,
        position: "right",
        spacing: 12,
        hideOnClick: l,
        shouldShow: d,
        forceOpen: c,
        ariaHidden: !0,
        asContainer: !i,
        children: E,
    });
}
var ty = n(93776);
let tD = function (e) {
        let { ref: t, ...n } = e,
            {
                id: i,
                onClick: r,
                onContextMenu: l,
                icon: d,
                selected: c,
                tooltip: u,
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
            N = (0, _.Vd)(i),
            [C, O] = s.useState(!1),
            R = p ?? ("string" == typeof u ? u : void 0);
        return (0, a.jsxs)(F.c, {
            children: [
                f ? (0, a.jsx)(k.A, { overlay: !0, hovered: C, selected: c }) : null,
                (0, a.jsx)(tL, {
                    text: u,
                    selected: c,
                    children: (0, a.jsx)(M.Q, {
                        selected: !0,
                        upperBadge: E,
                        lowerBadge: A,
                        lowerBadgeSize: h,
                        children: (0, a.jsx)(tO.D, {
                            innerRef: t,
                            onMouseEnter: () => {
                                (m?.(), O(!0));
                            },
                            onMouseLeave: () => {
                                (g?.(), O(!1));
                            },
                            onMouseDown: S,
                            className: o()(ty.oZ, I, { [ty.wH]: c || C }),
                            onClick: r,
                            "aria-label": R,
                            "aria-selected": c,
                            onContextMenu: l,
                            focusProps: { enabled: !1 },
                            ...N,
                            children: null != d && (0, a.jsx)(d, { className: ty.sF, color: "currentColor" }),
                        }),
                    }),
                }),
                T,
            ],
        });
    },
    tv = "DOWNLOAD_APPS";
function tb() {
    let e = (0, tN.useModalsStore)((e) => (0, tN.hasModalOpenSelector)(e, tv));
    return (0, a.jsx)(tD, {
        id: "app-download-button",
        onClick: () => {
            (0, tN.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 987482));
                    return (t) => (0, a.jsx)(e, { source: "Guilds", ...t });
                },
                { modalKey: tv },
            );
        },
        selected: e,
        tooltip: es.intl.string(es.t.Z7jwrJ),
        icon: tC.DownloadIcon,
    });
}
var tM = n(245604),
    tP = n(272613),
    tU = n(398884),
    tw = n(772366),
    tG = n(728321),
    tx = n(260509),
    tk = n(284009),
    tF = n.n(tk),
    tB = n(949152),
    tV = n(66834),
    tH = n(174459),
    tj = n(759223);
function tW(e) {
    let t = s.useRef(null),
        n = e.map((e) => e[0]);
    return (
        s.useLayoutEffect(() => {
            let n = requestAnimationFrame(() => {
                let n = t.current;
                if (null != n) for (let [t, i] of e) t ? n.classList.add(i) : n.classList.remove(i);
            });
            return () => cancelAnimationFrame(n);
        }, n),
        t
    );
}
function tY(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return (
        tF()(t.type !== eH.PJ.ROOT, "[GuildDropTarget] Tried using a root node as a drop target."),
        {
            accept: e,
            canDrop: (e) =>
                e.nodeId !== t.id &&
                (!i || e.type !== eH.PJ.FOLDER || t.type !== eH.PJ.FOLDER) &&
                (e.type !== eH.PJ.FOLDER || null == t.parentId),
            drop(e) {
                let { nodeId: r } = e;
                (i && t.type !== eH.PJ.FOLDER && tH.default.track(eS.HAw.GUILD_FOLDER_CREATED),
                    tV.A.moveById(r, t.id, n, i));
            },
            collect: (e) => ({ canDrop: e.canDrop(), isOver: e.isOver() }),
        }
    );
}
function tK(e) {
    let { name: t, targetNode: n, combine: i, below: r } = e,
        l = s.useMemo(() => tY([eH.PJ.GUILD, eH.PJ.FOLDER], n, r, i), [n, r, i]),
        [{ canDrop: o, isOver: d }, c] = (0, tB.H)(l),
        u = tW([
            [o, tj.OP],
            [d, tj.NQ],
        ]);
    return (0, a.jsx)("div", {
        ref: (e) => {
            ((u.current = e), c(e));
        },
        "data-dnd-name": es.intl.formatToPlainString(es.t["A5aDw+"], { itemName: t }),
        className: tj.aC,
    });
}
function t$(e) {
    let { name: t, targetNode: n, onDragOverChanged: i } = e,
        [{ canDrop: r, isOver: l }, d] = (0, tB.H)(() => tY([eH.PJ.GUILD], n, !0, !0));
    s.useEffect(() => {
        i?.(l);
    }, [i, l]);
    let c = tW([
        [r, tj.OP],
        [l, tj.NQ],
    ]);
    return (0, a.jsx)(tL, {
        text: t,
        shouldShow: l,
        forceOpen: l,
        disableWrapper: !0,
        children: (0, a.jsx)("div", {
            ref: (e) => {
                ((c.current = e), d(e));
            },
            "data-dnd-name": es.intl.formatToPlainString(es.t.qiQ0QI, { itemName: t }),
            className: o()(tj.dw, {}),
        }),
    });
}
let tz = s.memo(function (e) {
    let { name: t, targetNode: n, noCombine: i = !1, below: r = !1, onDragOverChanged: s } = e,
        l = !i && null == n.parentId;
    return (0, a.jsxs)("div", {
        className: tj.iE,
        "aria-hidden": !0,
        children: [
            (0, a.jsx)(tK, { name: t, targetNode: n, below: r }),
            l ? (0, a.jsx)(t$, { name: t, targetNode: n, onDragOverChanged: s }) : null,
        ],
    });
});
function tX(e) {
    let { name: t, targetNode: n } = e,
        [{ canDrop: i, isOver: r }, s] = (0, tB.H)(() => tY([eH.PJ.GUILD], n, !0, !0)),
        l = tW([[r, tj.a7]]),
        o = tW([
            [r, tj.NQ],
            [i, tj.OP],
        ]);
    return (0, a.jsx)("div", {
        ref: l,
        className: tj.Ro,
        "aria-hidden": !0,
        children: (0, a.jsx)("div", {
            className: tj.aO,
            children: (0, a.jsx)("div", {
                ref: (e) => {
                    ((o.current = e), s(e));
                },
                "aria-label": `At end of ${t}`,
                className: tj.aC,
            }),
        }),
    });
}
function tZ(e) {
    let { children: t } = e,
        [, n] = (0, tB.H)({ accept: [] });
    return (0, a.jsx)("div", {
        ref: (e) => {
            n(e);
        },
        children: t,
    });
}
var tq = n(819638),
    tQ = n(260727);
let tJ = { origin: { x: -16, y: 0 }, targetWidth: 48, targetHeight: 48, offset: { x: 0, y: 0 } };
function t0(e) {
    (0, te.L3)(e, async () => {
        let { default: e } = await n.e("117288").then(n.bind(n, 4571));
        return (t) => (0, a.jsx)(e, { ...t });
    });
}
function t1(e) {
    let { disableTooltip: t, lastTargetNode: n } = e,
        i = (0, A.yK)([ek.A], () => ek.A.getGuildsArray()),
        r = (0, A.bG)([eT.default], () => eT.default.getCurrentUser()),
        l = s.useMemo(() => i.some((e) => (0, tx.bM)(e, r)), [i, r]),
        o = (0, tN.useModalsStore)((e) => (0, tN.hasModalOpenSelector)(e, tq.fc)),
        { analyticsLocations: d } = (0, L.Ay)();
    return (0, a.jsx)("div", {
        className: tQ.Uq,
        children: (0, a.jsxs)(tG.A, {
            tutorialId: l ? "create-more-servers" : "create-first-server",
            inlineSpecs: tJ,
            position: "right",
            disabled: t,
            children: [
                (0, a.jsx)(tD, {
                    showPill: !1,
                    id: "create-join-button",
                    onClick: function () {
                        (0, tU.Sn)()
                            ? (0, tw.A)({
                                  analyticsSource: { page: eS.ThZ.CREATE_JOIN_GUILD_MODAL },
                                  analyticsLocation: {
                                      page: eS.ThZ.CREATE_JOIN_GUILD_MODAL,
                                      section: eS.JJy.GUILD_CAP_UPSELL_MODAL,
                                  },
                                  analyticsLocations: d,
                              })
                            : tP.A.openCreateGuildModal({ location: "Guild List" });
                    },
                    selected: o,
                    onContextMenu: t0,
                    tooltip: es.intl.string(es.t.l5WIbf),
                    icon: tM.U,
                }),
                null != n &&
                    (0, a.jsx)(tz, { name: es.intl.string(es.t["45xjM5"]), targetNode: n, below: !0, noCombine: !0 }),
            ],
        }),
    });
}
var t2 = n(565787),
    t3 = n(791606),
    t6 = n(486020),
    t5 = n(183588);
function t4(e) {
    let [t, i] = s.useState(!1),
        r = (0, _.Vd)(`guild-${e.id}`);
    return (0, a.jsx)(F.c, {
        children: (0, a.jsx)(tL, {
            text: e.name,
            children: (0, a.jsx)(M.Q, {
                className: t5.o,
                selected: t,
                lowerBadge: (0, a.jsx)(e9.fk, { icon: (0, t2.k)(t3.A), disableColor: !0, className: t5._ }),
                children: (0, a.jsx)(P.j, {
                    name: e.name,
                    onMouseEnter: function () {
                        i(!0);
                    },
                    onMouseLeave: function () {
                        i(!1);
                    },
                    onClick: function () {
                        (0, tN.openModalLazy)(async () => {
                            let { default: t } = await n.e("642945").then(n.bind(n, 537560));
                            return (n) => (0, a.jsx)(t, { name: e.name, guildId: e.id, ...n });
                        });
                    },
                    icon:
                        null != e.icon
                            ? t6.Ay.getGuildIconURL({ id: e.id, icon: e.icon, canAnimate: !1, size: 42 })
                            : null,
                    ...r,
                }),
            }),
        }),
    });
}
var t7 = n(696292),
    t8 = n(836480),
    t9 = n(533129),
    ne = n(726845),
    nt = n(837057),
    nn = n(310419),
    ni = n(488995),
    nr = n(324580),
    na = n(190107);
let ns = function (e) {
    let { selected: t, onClick: n, questId: i, className: r, ref: l } = e,
        o = s.useCallback(() => {
            (0, t9.WL)({ source: ni.GlobalDiscoveryAnalyticsLocations.GUILDS_BAR_ICON });
            let e = void 0 !== i ? ni.GlobalDiscoveryTab.QUESTS : ne.A.getField("selectedTab");
            switch (e) {
                case ni.GlobalDiscoveryTab.QUESTS:
                    return (0, nt.transitionToGlobalDiscovery)({
                        tab: ni.GlobalDiscoveryTab.QUESTS,
                        location: na.rE.DISCOVERY_COMPASS,
                        questContent: t7.u.DISCOVERY_COMPASS,
                        questId: i,
                    });
                case ni.GlobalDiscoveryTab.SERVERS:
                    return (0, nt.transitionToGlobalDiscovery)({
                        tab: ni.GlobalDiscoveryTab.SERVERS,
                        entrypoint: nr.J8.GUILDS_BAR,
                    });
                case ni.GlobalDiscoveryTab.APPS:
                    return (0, nt.transitionToGlobalDiscovery)({
                        tab: ni.GlobalDiscoveryTab.APPS,
                        newSessionState: {
                            entrypoint: { name: nn.sW.GLOBAL_DISCOVERY_BUTTON },
                            restorePreviousView: !0,
                        },
                    });
                default:
                    return (0, nt.transitionToGlobalDiscovery)({ tab: e });
            }
        }, [i]);
    return (0, a.jsx)(tD, {
        id: "guild-discover-button",
        ref: l,
        className: r,
        onClick: () => {
            (o(), void 0 !== n && n());
        },
        selected: t,
        tooltip: es.intl.string(es.t["4nEZLk"]),
        icon: t8.CompassIcon,
    });
};
var nl = n(506774),
    no = n(509963),
    nd = n(111159),
    nc = n(793943),
    nu = n(158045),
    n_ = n(350972),
    nE = n(677056),
    nA = n(526162),
    nh = n(174197);
function nf() {
    let [e, t] = (0, A.yK)([eT.default, nA.A], () => [
            nA.A.getCurrentDesktopIcon(),
            nu.Ay.isPremium(eT.default.getCurrentUser()),
        ]),
        n = (0, nc.fy)().activePanel === nc.HP.APP_ICON,
        i = (0, nh.gG)(e),
        r = i.id !== n_.LW.DEFAULT && (t || n),
        s = (0, a.jsx)(nd.p, { size: "custom", color: "currentColor", width: 24, height: 24 });
    return null != i && r ? (0, a.jsx)(nE.A, { id: i.id, size: nh.N8.SIZE_48 }) : s;
}
var nI = n(531260),
    np = n(411976),
    nT = n(912309),
    nm = n(400492),
    ng = n(354670),
    nS = n(619921),
    nN = n(340829),
    nC = n(966846),
    nO = n(674378),
    nR = n(394953),
    nL = n(202541),
    ny = n(235079),
    nD = n(222219);
let nv = { origin: { x: -16, y: 0 }, targetWidth: 48, targetHeight: 48, offset: { x: 0, y: 0 } };
function nb(e) {
    let { selected: t, user: n, badge: i, link: r, showProgressBadge: l } = e,
        [o, d] = s.useState(!1),
        [c, u] = s.useState(!1),
        [E, A] = s.useState(null),
        [h, f] = s.useState(0),
        I = (0, _.Vd)("home"),
        p = (0, nc.fy)().activePanel === nc.HP.APP_ICON;
    function T() {
        (A(null), f(0), clearTimeout(E));
    }
    if (null == n) return null;
    let m = es.intl.string(es.t.YUU0RF);
    c && (m = nl.w.get(eS.wqg) ? es.intl.string(es.t["nkq1l+"]) : es.intl.string(es.t.Be8Q5E));
    let g = null;
    !t && l && (g = (0, a.jsx)(no.A, { className: nD.Cp, determineOwnVisibility: !1 }));
    let S = t || o || p,
        N = (0, a.jsx)(M.Q, {
            selected: !0,
            lowerBadge: i > 0 ? (0, B.wN)(i) : null,
            upperBadge: g,
            lowerBadgeSize: { width: (0, e9.o6)(i) },
            children: (0, a.jsx)(P.j, {
                onMouseEnter: () => d(!0),
                onMouseLeave: () => d(!1),
                onClick: function () {
                    if (!__OVERLAY__ && (null != E && clearTimeout(E), A(setTimeout(T, 500)), f(h + 1), 15 === h)) {
                        T();
                        let e = !nl.w.get(eS.wqg);
                        (nl.w.set(eS.wqg, e),
                            e && nl.w.set(ny.L, !0),
                            e ? (0, nm.Ak)("discodo") : (0, nm.Ak)("user_leave"),
                            u(!0),
                            setTimeout(() => {
                                u(!1);
                            }, 1e3));
                    }
                },
                selected: S,
                ariaLabel: es.intl.string(es.t.YUU0RF),
                "aria-owns": "guild-list-unread-dms",
                "aria-selected": t,
                ...I,
                to: {
                    pathname: r,
                    state: {
                        analyticsSource: {
                            page: eS.liQ.GUILD_CHANNEL,
                            section: eS.JJy.NAVIGATION,
                            object: eS.ZSU.BUTTON_HOME,
                        },
                    },
                },
                children: (0, a.jsx)(nf, {}),
            }),
        });
    return (0, a.jsx)("div", {
        className: nD.Uq,
        "data-guilds-bar-home": !0,
        children: (0, a.jsx)(tG.A, {
            inlineSpecs: nv,
            tutorialId: "friends-list",
            position: "right",
            children: (0, a.jsxs)(F.c, {
                children: [
                    (0, a.jsx)(k.A, { overlay: !0, selected: t, hovered: o }),
                    (0, a.jsx)(tL, { hideOnClick: !0, text: m, selected: t, children: N }),
                ],
            }),
        }),
    });
}
function nM() {
    let e = (function () {
            let e = (0, V.A)((e) => e.guildId),
                { pathname: t } = (0, u.zy)(),
                n = t.startsWith(eS.BVt.GUILD_DISCOVERY) || t.startsWith(eS.BVt.GLOBAL_DISCOVERY),
                i = t.startsWith(eS.BVt.GUILD_MEMBER_VERIFICATION("")),
                r = (0, nR.lI)();
            return null == e && !(n || i || r);
        })(),
        t = (0, A.bG)([nC.A, nN.A], () => {
            let e = (0, no.v)(nC.A.activeItems, nN.A),
                { total: t, progress: n } = nO.zY(e),
                i = nO.uA(n, t);
            return i > 0 && i < 100;
        }),
        n = (0, nT.kX)(),
        i = Object.keys(nL.kb),
        r = (0, nI.A)(),
        { unviewedTrialCount: s, unviewedDiscountCount: l } = (0, A.cf)([ng.A], () => ({
            unviewedTrialCount: ng.A.getUnacknowledgedOffers(i).length,
            unviewedDiscountCount: ng.A.getUnacknowledgedDiscountOffers().length,
        })),
        o = r.fractionalState === nL.xc.NONE ? s + l : 0,
        d = (0, A.bG)([eT.default], () => eT.default.getCurrentUser()),
        c = (0, np.W)(),
        _ = n + o + c,
        E = _ === o && o > 0 && n + c === 0,
        h = nS.A.getHomeLink();
    return (
        E && (h = eS.BVt.APPLICATION_STORE),
        (0, a.jsx)(nb, {
            selected: e,
            user: d,
            selectedChannelId: Y.Ay.getChannelId(eS.ME),
            badge: _,
            link: h,
            showProgressBadge: t,
        })
    );
}
var nP = n(545328);
function nU(e) {
    let { fullWidth: t } = e;
    return (0, a.jsx)(F.c, { children: (0, a.jsx)("div", { className: o()(nP.t, { [nP.I]: t }) }) });
}
var nw = n(28863),
    nG = n(695366),
    nx = n(919638),
    nk = n(818348),
    nF = n(837669);
function nB() {
    let e = (0, A.bG)([nx.A, ek.A], () => nx.A.unavailableGuilds.filter((e) => null == ek.A.getGuild(e)).length),
        t = (0, _.Vd)("unavailable-guilds-button");
    return e <= 0
        ? null
        : (0, a.jsx)(F.c, {
              children: (0, a.jsx)(tL, {
                  text: es.intl.format(es.t["TnH05/"], { count: e }),
                  children: (0, a.jsx)(nw.Anchor, {
                      href: nk.qF.STATUS,
                      target: "_blank",
                      className: nF.h,
                      "aria-label": es.intl.formatToPlainString(es.t["MEpX+2"], { count: e }),
                      ...t,
                      children: (0, a.jsx)(nG.E, { color: "currentColor", "aria-hidden": !0 }),
                  }),
              }),
          });
}
var nV = n(36412),
    nH = n(739822),
    nj = n(317097),
    nW = n(319060),
    nY = n(866323),
    nK = n(817281),
    n$ = n(717117),
    nz = n(534409),
    nX = n(240248),
    nZ = n(678708),
    nq = n(559106),
    nQ = n(140735),
    nJ = n(548118),
    n0 = n(327580);
function n1(e) {
    let { guildId: t, animate: n } = e,
        i = (0, A.bG)([ek.A], () => ek.A.getGuild(t), [t]),
        r = (0, m.r)(I.A.modules.guildbar.AVATAR_SIZE);
    return null == i
        ? (0, a.jsx)("div", { className: o()(n0.VL, n0.zU), children: (0, a.jsx)(nG.E, { color: "currentColor" }) })
        : (0, a.jsx)(nJ.Ay, {
              guild: i,
              animate: n,
              size: nJ.Ay.Sizes.MINI,
              iconSize: r,
              lossless: !0,
              className: n0.VL,
              tabIndex: -1,
          });
}
function n2(e) {
    let { folderNode: t, hovered: n, sorting: i } = e,
        { children: r } = t,
        s = n && i,
        l = (0, a.jsx)("div", {
            className: n0.hJ,
            children: (0, a.jsx)("div", {
                className: n0.Eh,
                children: (0, a.jsx)(nZ.FolderIcon, { size: "sm", color: "currentColor" }),
            }),
        }),
        d = (0, a.jsx)("div", {
            className: n0.qJ,
            children: (0, a.jsx)("div", {
                className: n0.jg,
                children: r.slice(0, 4).map((e) => (0, a.jsx)(n1, { guildId: e.id, animate: n }, e.id)),
            }),
        });
    return (0, a.jsxs)("div", {
        "aria-hidden": !0,
        className: o()({ [n0.NG]: s, [n0.yd]: !s }),
        children: [!s && l, d],
    });
}
function n3(e) {
    let {
            folderNode: t,
            expanded: n,
            sorting: i,
            mediaState: r,
            mentionCount: l = 0,
            isMentionLowImportance: o,
            tooltipName: d,
            folderGroupId: c,
            folderButtonContent: u,
            onClick: _,
            onContextMenu: E,
            onHoverChange: A,
            onKeyDown: h,
            treeItemProps: { onFocus: f, ...p },
            "aria-setsize": T,
            "aria-posinset": m,
        } = e,
        [g, S] = s.useState(!1),
        N = s.useCallback(() => {
            (i || S(!0), A?.(!0));
        }, [i, A]),
        C = s.useCallback(() => {
            (i || S(!1), A?.(!1));
        }, [i, A]),
        O = n || null == r ? null : (0, B.oi)(r),
        R =
            !n && l > 0
                ? (0, B.wN)(
                      l,
                      o ? I.A.colors.BACKGROUND_MOD_STRONG.css : I.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                  )
                : null;
    return (0, a.jsx)(nq.vN, {
        children: (0, a.jsxs)(tO.D, {
            className: n0.H3,
            onClick: _,
            onContextMenu: E,
            onMouseEnter: N,
            onMouseLeave: C,
            onKeyDown: h,
            onFocus: f,
            focusProps: { enabled: !1 },
            ...p,
            role: "treeitem",
            "aria-setsize": T,
            "aria-posinset": m,
            "aria-expanded": n,
            "aria-owns": c,
            children: [
                (0, a.jsx)(nQ.A, {
                    children: es.intl.formatToPlainString(es.t["90/DwM"], { folderName: d, mentions: l }),
                }),
                (0, a.jsx)(M.Q, {
                    "aria-hidden": !0,
                    isFolder: !0,
                    upperBadge: O,
                    lowerBadge: R,
                    lowerBadgeSize: { width: (0, e9.o6)(l) },
                    children: (0, a.jsx)("div", {
                        className: n0.vA,
                        children:
                            null != u
                                ? (0, a.jsx)("div", { className: n0.hJ, children: u })
                                : (0, a.jsx)(n2, { folderNode: t, hovered: g, sorting: i }),
                    }),
                }),
            ],
        }),
    });
}
var n6 = n(573435),
    n5 = n(167579);
function n4(e) {
    let { className: t, isFolder: n } = e,
        i = (0, m.r)(I.A.modules.guildbar.AVATAR_SIZE);
    return (0, a.jsx)(n6.Ay, {
        mask: n6.Ay.Masks.SQUIRCLE,
        className: o()(t, n5.OL, { [n5.lQ]: n }),
        width: i,
        height: i,
        children: (0, a.jsx)("div", { className: n5.ZU }),
    });
}
var n7 = n(114329),
    n8 = n(937067);
let n9 = (0, nX.xI)(nW.A.FOLDER_ITEM_ANIMATION_DURATION),
    ie = (0, n$.P)(p.B),
    it = s.memo(function (e) {
        var t;
        let n,
            i,
            r,
            {
                folderNode: l,
                setNodeRef: d,
                selected: c,
                expanded: u,
                mediaState: E,
                mentionCount: A = 0,
                isMentionLowImportance: h,
                unread: f = !1,
                defaultFolderName: p,
                draggable: T = !1,
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
            { id: b, name: M, children: P } = l,
            [U, w] = s.useState(!1),
            [G, x] = s.useState(!1),
            B = U || G,
            V = (0, nz.qK)("FolderItem");
        s.useEffect(() => {
            g && w(!1);
        }, [g]);
        let [{ dragging: H }, j] = (0, nH.i)({
                type: eH.PJ.FOLDER,
                item: () => (S?.(), { type: eH.PJ.FOLDER, nodeId: l.id }),
                end() {
                    (N?.(), (0, nK.um)(eF.Ay.getCompatibleGuildFolders()));
                },
                collect: (e) => ({ dragging: e.isDragging() }),
            }),
            W = s.useCallback((e) => {
                x(e);
            }, []),
            Y = s.useCallback(
                (e) => {
                    (("ArrowRight" === e.key && !u) || ("ArrowLeft" === e.key && u)) && C();
                },
                [C, u],
            ),
            K = null != M && "" !== M ? M : null != p && "" !== p ? p : es.intl.string(es.t.xV9hVh),
            $ = (0, _.Vd)(`${b}`),
            z = `folder-items-${b}`,
            X =
                ((t = P.length),
                (n = (0, m.r)(I.A.modules.guildbar.FOLDER_SIZE)),
                (i = (0, m.r)(I.A.modules.guildbar.AVATAR_SIZE)),
                t * (i + (r = (0, m.r)(I.A.space.SPACE_XS))) - r + (r - (n - i) / 2) + (0, m.r)(I.A.space.SPACE_4)),
            Z = (0, nY.p)(!H && u, {
                from: { height: 0 },
                enter: { height: 1 },
                leave: { height: 0 },
                config: { duration: n9 },
            }),
            q = s.useCallback((e) => d?.(b, e), [d, b]),
            Q = (0, a.jsxs)(F.c, {
                children: [
                    (0, a.jsx)(k.A, { overlay: !0, disabled: H || u, hovered: U, selected: c, unread: f }),
                    (0, a.jsx)(tL, {
                        text: K,
                        disabled: g,
                        selected: c,
                        disableWrapper: !0,
                        children: (0, a.jsx)("div", {
                            ref: T
                                ? (e) => {
                                      j(e);
                                  }
                                : void 0,
                            className: o()(n0.MJ, { [n0.L0]: "icon" === L || V, [n8.oR]: !H && G && !u }),
                            "data-dnd-name": K,
                            children: H
                                ? (0, a.jsx)(n4, { isFolder: !0 })
                                : (0, a.jsx)(n3, {
                                      folderNode: l,
                                      expanded: u,
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
                    T ? (0, a.jsx)(tz, { name: K, targetNode: l, onDragOverChanged: W }) : null,
                ],
            }),
            J = (0, n7.rk)(l.color),
            ee = null != J ? (0, nj.Hl)(J) : void 0;
        return (0, a.jsxs)("div", {
            ref: q,
            className: o()(n0.qc, { [n0.Av]: u, [n0.Lg]: B }),
            style: { "--custom-folder-color": ee ?? "" },
            "data-drop-hovering": G,
            children: [
                !H && u && (0, a.jsx)("span", { className: n0.GO }),
                Q,
                Z((e, t, n) => {
                    let { key: i } = n;
                    return (
                        t &&
                        (0, a.jsx)(
                            ie,
                            {
                                id: z,
                                role: "group",
                                as: "ul",
                                gap: "xs",
                                className: n0.TN,
                                style: { height: e.height.to((e) => e * X) },
                                "aria-label": l.name,
                                children: P.map((t, n) => R(t, n, P.length, e.height)),
                            },
                            i,
                        )
                    );
                }),
                T && u ? (0, a.jsx)(tX, { name: K, targetNode: l }) : null,
            ],
        });
    });
var ii = n(354583);
let ir = s.memo(function (e) {
    let t,
        i,
        r,
        l,
        o,
        d,
        c,
        u,
        _,
        E,
        h,
        { folderNode: f, ...I } = e,
        { id: p, name: T, color: m, children: g } = f,
        S = g.map((e) => e.id),
        N = (0, V.A)((e) => e.guildId),
        C = (0, A.bG)([eY.A], () => eY.A.isFolderExpanded(p)),
        O = (0, nV.y)(f),
        R =
            ((t = (0, A.bG)([e4.A], () => e4.A.getGuildId())),
            (i = f.children.map((e) => e.id)),
            (r = null != t && i.includes(t)),
            (l = !1),
            (o = !1),
            (d = !1),
            (c = (0, A.bG)([e4.A], () => e4.A.getChannelId())),
            (_ = null != (u = (0, ii.A)()?.guild_id) && i.includes(u)),
            (E = (0, A.bG)([K.A], () => null != c && K.A.hasVideo(c), [c])),
            (h = (0, A.bG)([j.A], () => j.A.getCurrentUserActiveStream())),
            r && ((l = !E), (o = E), (d = null != h && null != h.guildId && i.includes(h.guildId))),
            s.useMemo(
                () => ({ audio: l, video: o, screenshare: d, liveStage: _, isCurrentUserConnected: r }),
                [l, o, d, _, r],
            )),
        {
            mentionCount: L,
            isMentionLowImportance: y,
            unread: D,
        } = (0, A.cf)([J.default], () => ({
            mentionCount: S.map((e) => J.default.getMentionCount(e)).reduce((e, t) => e + t, 0),
            isMentionLowImportance: S.every((e) => J.default.getIsMentionLowImportance(e)),
            unread: S.some((e) => J.default.hasUnread(e)),
        })),
        v = s.useCallback(() => {
            tV.A.toggleGuildFolderExpand(p);
        }, [p]),
        b = s.useCallback(
            (e) => {
                (0, te.L3)(e, async () => {
                    let { default: e } = await Promise.all([n.e("114748"), n.e("906240")]).then(n.bind(n, 595139));
                    return (t) =>
                        (0, a.jsx)(e, { ...t, folderId: p, folderName: T, folderColor: m, unread: D || L > 0 });
                });
            },
            [p, T, m, D, L],
        );
    return (0, a.jsx)(it, {
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
var ia = n(113494),
    is = n(821124),
    il = n(212455);
function io(e) {
    let t = e?.features.has(eS.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL),
        n = (0, A.bG)(
            [il.A, eT.default, ex.Ay],
            () => {
                if (null == e) return;
                let t = il.A.getRequest(e.id),
                    n = eT.default.getCurrentUser();
                if (null == n || null == t || t.userId !== n.id) return;
                let i = ex.Ay.getMember(e.id, t.userId);
                if (!(null != i && !i.isPending) || (0, is.Oe)(t)) return t.applicationStatus;
            },
            [e],
        );
    return t ? n : void 0;
}
var id = n(347951),
    ic = n(39304),
    iu = n(941426),
    i_ = n(38405),
    iE = n(34162);
let iA = new iu.Vy("GuildMediaStateShadowCompare"),
    ih = ["audio", "video", "screenshare", "liveStage", "activeEvent", "activity", "isCurrentUserConnected"],
    iI = 0,
    ip = 0,
    iT = new Map(),
    im = new Set();
function ig(e, t) {
    return ih.filter((n) => (e[n] ?? !1) !== (t[n] ?? !1));
}
var iS = (((i = {}).HOOK = "hook"), (i.STORE = "store"), (i.SHADOW = "shadow"), i);
let iN = (0, tc.Ay)({
    kind: "user",
    name: "2026-08-guilds-bar-media-state-store",
    defaultConfig: { source: "hook" },
    variations: { 0: { source: "hook" }, 1: { source: "store" }, 2: { source: "shadow" } },
});
var iC = n(478437),
    iO = n(811024),
    iR = n(890615),
    iL = n(508654),
    iy = n(446600),
    iD = n(95701),
    iv = n(280450);
function ib(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ee.A;
    return null != e && e.type !== iC.r.GUILD_STAGE_VOICE && t !== e.id && n.canBasicChannel(eS.hVb.VIEW_CHANNEL, e);
}
function iM(e) {
    let t = (0, A.bG)([en.Ay], () => en.Ay.isMuted(e)),
        n = (0, iL.BP)(e),
        i = (0, A.yK)([G.Ay, W.A, to.A], () =>
            G.Ay.getEmbeddedActivitiesForGuild(e).filter((e) => {
                let t = W.A.getBasicChannel((0, x.H)(e.location));
                if (t?.type === iC.r.GUILD_SPACE) return !1;
                let n = to.A.getBlockedOrIgnoredIDs();
                return !(0, ta.PH)([...e.userIds], n);
            }),
        ),
        r = (0, x.H)(i[0]?.location),
        a = (0, iO.Gp)(r),
        {
            guildHasVoice: s,
            guildHasVideo: l,
            selectedVoiceChannelHasVideo: o,
        } = (0, A.cf)(
            [Y.Ay, K.A, ek.A, ee.A, W.A, en.Ay],
            () => {
                let n = Y.Ay.getVoiceChannelId(),
                    i = ek.A.getGuild(e)?.afkChannelId,
                    r = K.A.getUsersWithVideo(e),
                    a = (0, ta.hs)(K.A.getVoiceStates(e));
                return {
                    guildHasVoice: (() => {
                        if (t) return !1;
                        for (let t in a) {
                            let n = a[t].channelId;
                            if (
                                null != n &&
                                ib(W.A.getBasicChannel(n), i ?? void 0, ee.A) &&
                                !en.Ay.isChannelMuted(e, n)
                            )
                                return !0;
                        }
                        return !1;
                    })(),
                    guildHasVideo: (() => {
                        if (t) return !1;
                        for (let t of r) {
                            let n = a[t]?.channelId;
                            if (
                                null != n &&
                                ib(W.A.getBasicChannel(n), i ?? void 0, ee.A) &&
                                !en.Ay.isChannelMuted(e, n)
                            )
                                return !0;
                        }
                        return !1;
                    })(),
                    selectedVoiceChannelHasVideo: null != n && K.A.hasVideo(n),
                };
            },
            [e, t],
        ),
        d = iv.default.getId();
    return (0, A.cf)(
        [Y.Ay, W.A, iy.A, j.A, ee.A, en.Ay],
        () => {
            let r = Y.Ay.getVoiceChannelId(),
                c = W.A.getChannel(r)?.guild_id === e,
                u = !1,
                _ = !1,
                E = !1,
                A = !1,
                h = !1,
                f = !1;
            if (!c && t)
                return {
                    audio: u,
                    video: A,
                    screenshare: h,
                    liveStage: E,
                    activeEvent: _,
                    activity: f,
                    isCurrentUserConnected: !1,
                };
            let I = $.default.keys(iy.A.getStageInstancesByGuild(e)).some((e) => {
                    let t = W.A.getBasicChannel(e);
                    return null != t && (0, iR.A)(t, ee.A);
                }),
                p = c && (W.A.getChannel(r)?.isGuildStageVoice() ?? !1),
                T = !!c && null != j.A.getActiveStreamForUser(d, e),
                m = (0, ta.Mt)(j.A.getAllApplicationStreams()).some(
                    (t) => t.guildId === e && !en.Ay.isChannelMuted(e, t.channelId),
                ),
                g = c && o,
                S = (() => {
                    if (a) return i.length > 0;
                    for (let e of i) {
                        let t = W.A.getChannel((0, x.H)(e.location));
                        if (null != t && (0, iD.gV)(t.type)) return !0;
                    }
                    return !1;
                })(),
                N = i.length > 0;
            return (
                c
                    ? ((u = !0), (_ = n?.channel_id === r), (E = p), (A = g), (h = T), (f = N))
                    : ((u = s), (_ = null != n), (E = I), (A = l), (h = m), (f = S)),
                {
                    audio: u,
                    video: A,
                    screenshare: h,
                    liveStage: E,
                    activeEvent: _,
                    activity: f,
                    isCurrentUserConnected: c || p,
                }
            );
        },
        [e, t, o, d, a, i, n, s, l],
    );
}
function iP(e) {
    return (0, A.bG)([iE.A], () => iE.A.getGuildMediaState(e), [e]);
}
function iU(e) {
    let t = iN.useConfig({ location: "GuildsBarGuild" }).source;
    switch (s.useRef(t).current) {
        case iS.STORE:
            return iP(e);
        case iS.SHADOW:
            let n, i;
            return (
                (n = iM(e)),
                (i = iP(e)),
                s.useEffect(() => {
                    !(function (e, t, n) {
                        let i = ig(t, n);
                        if (0 === i.length) return;
                        let r = 0 === ig(t, iE.A.getGuildMediaState(e)).length,
                            a = ic.HV() ?? "unknown";
                        if (
                            (function (e, t, n) {
                                if (im.has(e) || (n ? ip >= 15 : iI >= 15)) return !1;
                                let i = iT.get(t) ?? 0;
                                return !(i >= 3) && (im.add(e), iT.set(t, i + 1), n ? ip++ : iI++, !0);
                            })(`${a}:${i.join(",")}:${r ? "transient" : "persistent"}`, a, r)
                        ) {
                            var s;
                            let l, o;
                            ((l = (s = {
                                guildId: e,
                                lastAction: a,
                                mismatchedFields: i,
                                fromHook: t,
                                fromStore: n,
                                isTransient: r,
                            }).isTransient
                                ? "transient"
                                : "persistent"),
                                (o =
                                    `GuildMediaStateStore diverged from useGuildMediaState after ${s.lastAction} (${l}): ` +
                                    s.mismatchedFields.join(", ")),
                                iA.warn(o, s),
                                i_.A.captureMessage(o, {
                                    tags: {
                                        app_context: "guild_media_state_shadow",
                                        divergence_severity: l,
                                        divergence_action: s.lastAction,
                                    },
                                    extra: {
                                        guildId: s.guildId,
                                        mismatchedFields: s.mismatchedFields,
                                        fromHook: s.fromHook,
                                        fromStore: s.fromStore,
                                    },
                                }));
                        }
                    })(e, n, i);
                }, [e, n, i]),
                n
            );
        case iS.HOOK:
            return iM(e);
    }
}
var iw = n(607399),
    iG = n(702841),
    ix = n(750233),
    ik = n(976860),
    iF = n(676279);
function iB(e) {
    let { guild: t, show: n, active: i, onAnimationStart: r, onAnimationRest: s } = e,
        l = {},
        d = {};
    ((l.transform = "translate3d(10px, 10px, 0) scale3d(3, 3, 1)"),
        (d.transform = "translate3d(0, 0, 0) scale3d(1, 1, 1)"));
    let c = (0, m.r)(I.A.unsafe_rawColors.BRAND_500).hex(),
        u = (0, m.r)(I.A.unsafe_rawColors.PRIMARY_630).hex();
    i && null == t.icon && ((l.backgroundColor = c), (d.backgroundColor = u));
    let _ = (0, nY.p)(n, { from: l, enter: d, leave: l, config: { duration: 100 }, onStart: r, onRest: s });
    return (0, a.jsx)(a.Fragment, {
        children: _(
            (e, n, i) =>
                n &&
                (0, a.jsx)(
                    "div",
                    {
                        className: n0.qc,
                        children: (0, a.jsx)("div", {
                            className: o()(n0.MJ, n0.L0),
                            style: { margin: 0 },
                            children: (0, a.jsx)(e7.animated.div, {
                                className: n0.NG,
                                style: e,
                                children: (0, a.jsx)("div", {
                                    className: n0.qJ,
                                    children: (0, a.jsx)("div", {
                                        className: n0.jg,
                                        children: (0, a.jsx)(nJ.Ay, {
                                            guild: t,
                                            size: nJ.Ay.Sizes.SMOL,
                                            className: n0.VL,
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
var iV = n(454938),
    iH = n(714991),
    ij = n(107773),
    iW = n(513461),
    iY = n(164956),
    iK = n(624265),
    i$ = n(970278),
    iz = n(808728);
let iX = (0, n(945810).mj)({
    name: "2026-09-server-tooltip-notification-context",
    kind: "user",
    defaultConfig: { mode: "disabled" },
    variations: { 0: { mode: "disabled" }, 1: { mode: "latest" }, 2: { mode: "mentions_first" } },
});
function iZ(e) {
    let { guildId: t, mode: n } = e,
        { channel: i, hasMention: r } = (0, A.cf)(
            [en.Ay, W.A, q.A, et.Ay, J.default],
            () => {
                if (en.Ay.isMuted(t)) return { channel: null, hasMention: !1 };
                let e = { latest: null, latestMention: null };
                function i(t) {
                    if (!et.Ay.hasUnreadOrMentions(t.id)) return;
                    let n = et.Ay.getMentionCount(t.id);
                    if (!J.default.shouldCountChannelUnread(t, n)) return;
                    let i = et.Ay.lastMessageId(t.id);
                    if (null == i) return;
                    let r = { channel: t, hasMention: n > 0, lastMessageId: i };
                    ((null == e.latest || $.default.compare(i, e.latest.lastMessageId) > 0) && (e.latest = r),
                        r.hasMention &&
                            (null == e.latestMention || $.default.compare(i, e.latestMention.lastMessageId) > 0) &&
                            (e.latestMention = r));
                }
                let r = W.A.getMutableGuildChannelsForGuild(t);
                for (let e in r) i(r[e]);
                let a = q.A.getActiveJoinedThreadsForGuild(t);
                for (let e in a)
                    for (let t in a[e]) {
                        let e = W.A.getChannel(t);
                        null != e && i(e);
                    }
                let s = "mentions_first" === n ? (e.latestMention ?? e.latest) : e.latest;
                return { channel: s?.channel ?? null, hasMention: s?.hasMention ?? !1 };
            },
            [t, n],
        ),
        s = (0, ti.Ay)(i);
    return null == i || null == s || 0 === s.length
        ? null
        : (0, a.jsx)(eu.E, {
              className: eN.T5,
              color: "text-muted",
              variant: "text-xs/normal",
              lineClamp: 1,
              children: es.intl.formatToPlainString(r ? es.t.HwW3zP : es.t.FwKQxx, { channelName: s }),
          });
}
function iq(e, t, n) {
    return 0 === t.length
        ? null
        : (0, a.jsxs)("div", {
              className: eN.nM,
              children: [
                  (0, a.jsx)(e, { className: eN.RI, color: "currentColor" }),
                  (0, a.jsx)(ef.Ay, { guildId: n, users: t, max: 6 }),
              ],
          });
}
function iQ(e) {
    let { muteConfig: t, className: n } = e;
    return t?.end_time == null
        ? (0, a.jsx)(eu.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: n,
              children: es.intl.string(es.t.fpKdS1),
          })
        : (0, a.jsx)(td.A, { muteConfig: t, className: n });
}
function iJ(e) {
    let t,
        n,
        i,
        r,
        l,
        d,
        u,
        _,
        E,
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
        (n = (0, A.yK)(
            [iz.Ay, i$.A, en.Ay],
            () => [
                ...iz.Ay.getChannels(t)
                    [iz.vM].filter((e) => {
                        let { channel: n } = e;
                        return n.type === eS.rbe.GUILD_VOICE && !en.Ay.isChannelMuted(t, n.id);
                    })
                    .map((e) => {
                        let { channel: t } = e;
                        return t.id;
                    }),
                ...Object.values(i$.A.getThreadsForGuild(t)).flatMap((e) => Object.keys(e)),
            ],
            [t],
        )),
        (i = (0, iK.Ay)(t)),
        (r = s.useMemo(() => i.map((e) => e.id), [i])),
        (l = (0, A.bG)([em.Ay], () => em.Ay.getVoiceStates(t), [t])),
        (d = (0, A.bG)([to.A], () => to.A.getBlockedOrIgnoredIDs())),
        (u = c().flatMap(n, (e) => {
            if (e === R.afkChannelId) return [];
            let t = (l[e] ?? []).map((e) => {
                let { user: t } = e;
                return t;
            });
            return (0, ta.aw)(t, d);
        })),
        (_ = (0, A.yK)([eI.A], () =>
            c().flatMap(r, (e) => {
                if (e === R.afkChannelId) return [];
                let t = eI.A.getMutableParticipants(e, ep.ip.SPEAKER)
                    .filter((e) => e.type === ep.wY.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    });
                return (0, ta.aw)(t, d);
            }),
        )),
        (E = (0, A.bG)([eI.A], () => {
            let e = 0;
            for (let t of r) e += eI.A.getParticipantCount(t, ep.ip.AUDIENCE);
            return e;
        })),
        (h = (0, A.yK)(
            [j.A, en.Ay],
            () => {
                let e = j.A.getAllApplicationStreams()
                    .filter((e) => e.guildId === t && !en.Ay.isChannelMuted(t, e.channelId))
                    .map((e) => e.ownerId);
                return (0, ta.F7)(e, d);
            },
            [d, t],
        )),
        (f = (0, A.yK)(
            [G.Ay, W.A],
            () => {
                let e = G.Ay.getEmbeddedActivitiesForGuild(t)
                    .filter((e) => {
                        let t = W.A.getBasicChannel((0, x.H)(e.location));
                        return t?.type !== eS.rbe.GUILD_SPACE;
                    })
                    .flatMap((e) => Array.from(e.userIds));
                return (0, ta.F7)(e, d);
            },
            [t, d],
        )),
        (I = (0, A.yK)(
            [eT.default],
            () => {
                let e = f.map((e) => eT.default.getUser(e));
                return (0, ta.aw)(e);
            },
            [f],
        )),
        (p = (0, A.yK)([eT.default], () => h.map((e) => eT.default.getUser(e)), [h])),
        (T = u.filter((e) => !h.includes(e.id) && !f.includes(e.id))),
        (m = (0, ta.aw)(T)),
        (g = p.filter((e) => null != e && !f.includes(e.id))),
        (S = (0, A.bG)([ts.A], () => ts.A.getUserAffinitiesMap(), [])),
        (N = s.useMemo(() => (0, tl.L)(m, S, "GuildTooltip - nonBlockedUsers"), [m, S])),
        (C = s.useMemo(() => (0, tl.L)(_, S, "GuildTooltip - stageSpeakers"), [_, S])),
        (O = s.useMemo(() => (0, tl.L)(g, S, "GuildTooltip - streamUsers"), [g, S])),
        {
            voiceUsersToShow: N,
            stageSpeakers: C,
            numStageListeners: E,
            streamUsersToShow: O,
            embeddedActivitiesUsers: s.useMemo(() => (0, tl.L)(I, S, "GuildTooltip - embeddedActivitiesUsers"), [I, S]),
            hasActivity: _.length > 0 || T.length > 0 || g.length > 0 || I.length > 0,
        }),
        P = iq(e_.H, y, L),
        U =
            0 === D.length
                ? null
                : (0, a.jsxs)("div", {
                      className: eN.nM,
                      children: [
                          (0, a.jsx)(ed.q, { size: "lg", color: "currentColor", className: eN.RI }),
                          (0, a.jsx)(ef.Ay, { guildId: L, users: D, max: 3 }),
                          (0, a.jsxs)("div", {
                              className: eN.GZ,
                              children: [
                                  (0, a.jsx)(ec.L, { size: "xs", color: "currentColor" }),
                                  (0, a.jsx)(eu.E, {
                                      className: eN._I,
                                      color: "text-default",
                                      variant: "text-xs/normal",
                                      children: v,
                                  }),
                              ],
                          }),
                      ],
                  }),
        w = iq(eE.F, b, L),
        k = iq(eA.k, M, L),
        { isMuted: F, muteConfig: B } = (0, A.cf)(
            [en.Ay],
            () => ({ isMuted: en.Ay.isMuted(L), muteConfig: en.Ay.getMuteConfig(L) }),
            [L],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            U,
            P,
            w,
            k,
            F ? (0, a.jsx)(iQ, { muteConfig: B, className: o()(eN.LM, { [eN.Sx]: null != P || null != w }) }) : null,
        ],
    });
}
function i0(e) {
    let { guildJoinRequestStatus: t } = e;
    return (0, a.jsx)(eu.E, {
        className: eN.BT,
        color: "text-default",
        variant: "text-xs/normal",
        children: (function (e) {
            switch (e) {
                case iW.B5.SUBMITTED:
                    return es.intl.string(es.t["9KFC98"]);
                case iW.B5.REJECTED:
                    return es.intl.string(es.t["TQY/Rd"]);
                case iW.B5.APPROVED:
                    return es.intl.string(es.t.WXHcq5);
                default:
                    return es.intl.string(es.t.fjHFC8);
            }
        })(t),
    });
}
function i1(e) {
    let { guild: t, isTooltipShown: n, shouldShowNotificationContext: i } = e,
        r = (0, iV.A)(t),
        s = io(t),
        l = null != s ? (0, a.jsx)(i0, { guildJoinRequestStatus: s }) : null,
        d = (0, a.jsx)(iJ, { guild: t }),
        c = (0, A.bG)([iY.A], () => iY.A.isViewingRoles(t.id)),
        u = (0, id.Ig)(t),
        _ =
            n && i
                ? (function () {
                      let { mode: e } = iX.getConfig({ location: "GuildTooltip.serverTooltipNotificationContext" });
                      return e;
                  })()
                : "disabled";
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: o()(eN.nM, eN.Dl),
                children: [
                    r
                        ? (0, a.jsx)(ij.A, { disableBoostClick: !0, guild: t, className: eN.WX })
                        : (0, a.jsx)(iH.A, { guild: t, size: 20, className: eN.aL }),
                    (0, a.jsx)("span", { className: o()(eN.cN, eN.NT), children: t.name }),
                ],
            }),
            "disabled" !== _ ? (0, a.jsx)(iZ, { guildId: t.id, mode: _ }) : null,
            u
                ? (0, a.jsx)(eu.E, {
                      className: eN.Ef,
                      color: "text-default",
                      variant: "text-sm/medium",
                      children: es.intl.string(es.t["2n0/Fk"]),
                  })
                : null,
            c
                ? (0, a.jsx)(eu.E, {
                      className: eN.BT,
                      color: "text-default",
                      variant: "text-xs/normal",
                      children: es.intl.string(es.t["5LwN89"]),
                  })
                : (l ?? d),
        ],
    });
}
function i2(e) {
    let { guild: t, shouldShowNotificationContext: n = !1, disabled: i = !1, children: r } = e,
        { isOpen: l, shouldRenderRichContent: o, handleTooltipShow: d, handleTooltipHide: c } = t_("GuildTooltip"),
        u = s.useMemo(
            () =>
                i
                    ? null
                    : (0, a.jsx)(eu.E, {
                          variant: "text-md/semibold",
                          color: "text-default",
                          className: eN.A_,
                          children: o
                              ? (0, a.jsx)(i1, { guild: t, isTooltipShown: l, shouldShowNotificationContext: n })
                              : t.name,
                      }),
            [i, t, l, o, n],
        );
    return (0, a.jsx)(eh.m, {
        __unsupportedReactNodeAsText: u,
        onTooltipShow: d,
        onTooltipHide: c,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        asContainer: !0,
        children: r,
    });
}
let i3 = { analyticsSource: { page: eS.liQ.GUILD_CHANNEL, section: eS.JJy.CHANNEL_LIST, object: eS.ZSU.CHANNEL } };
function i6(e, t) {
    (0, te.L3)(e, async () => {
        let { default: e } = await Promise.all([
            n.e("203112"),
            n.e("876364"),
            n.e("135144"),
            n.e("996907"),
            n.e("816027"),
            n.e("562772"),
            n.e("8159"),
            n.e("819113"),
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
            n.e("618416"),
            n.e("902654"),
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
            n.e("222969"),
            n.e("515363"),
            n.e("162775"),
            n.e("128804"),
            n.e("60882"),
            n.e("71151"),
            n.e("227853"),
            n.e("286615"),
            n.e("70866"),
            n.e("311541"),
            n.e("472847"),
            n.e("870088"),
            n.e("300641"),
            n.e("932020"),
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
            n.e("699806"),
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
            n.e("436101"),
            n.e("976888"),
            n.e("387970"),
            n.e("847445"),
            n.e("547510"),
            n.e("966366"),
            n.e("983513"),
            n.e("76928"),
            n.e("355502"),
            n.e("528311"),
            n.e("411938"),
            n.e("326559"),
            n.e("217991"),
            n.e("31159"),
            n.e("952068"),
            n.e("768289"),
            n.e("772565"),
            n.e("533781"),
            n.e("328276"),
            n.e("225307"),
            n.e("332165"),
            n.e("501546"),
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
            n.e("403643"),
            n.e("323223"),
            n.e("830560"),
            n.e("526575"),
            n.e("588035"),
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
            n.e("480889"),
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
            n.e("216112"),
            n.e("179301"),
            n.e("918347"),
            n.e("102247"),
            n.e("689521"),
            n.e("209856"),
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
            n.e("202342"),
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
            n.e("489217"),
            n.e("655327"),
            n.e("335532"),
            n.e("138545"),
            n.e("536490"),
            n.e("771137"),
            n.e("403655"),
            n.e("317615"),
            n.e("577154"),
            n.e("877730"),
            n.e("611899"),
            n.e("527552"),
            n.e("903758"),
            n.e("962811"),
            n.e("930206"),
            n.e("365461"),
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
            n.e("774346"),
            n.e("905581"),
            n.e("249681"),
            n.e("996382"),
            n.e("62052"),
            n.e("771657"),
            n.e("122218"),
            n.e("76428"),
            n.e("834552"),
            n.e("863232"),
            n.e("993103"),
            n.e("708757"),
            n.e("517888"),
            n.e("811133"),
            n.e("959880"),
            n.e("174016"),
            n.e("907167"),
            n.e("910471"),
            n.e("11301"),
            n.e("861060"),
            n.e("364827"),
            n.e("77333"),
            n.e("56366"),
            n.e("217229"),
            n.e("477175"),
            n.e("960235"),
            n.e("402368"),
            n.e("190779"),
            n.e("910486"),
            n.e("221856"),
            n.e("678157"),
            n.e("147134"),
            n.e("996481"),
            n.e("331988"),
            n.e("10866"),
            n.e("585968"),
            n.e("40291"),
            n.e("733115"),
            n.e("397270"),
            n.e("373122"),
            n.e("217951"),
            n.e("755936"),
            n.e("147662"),
            n.e("609705"),
            n.e("749894"),
            n.e("904448"),
            n.e("833703"),
            n.e("256274"),
            n.e("544571"),
            n.e("692990"),
            n.e("362931"),
            n.e("745959"),
            n.e("858529"),
            n.e("481987"),
            n.e("595653"),
            n.e("958038"),
            n.e("532039"),
            n.e("719466"),
            n.e("630267"),
            n.e("576909"),
            n.e("27355"),
            n.e("406174"),
            n.e("715555"),
            n.e("393336"),
            n.e("481647"),
            n.e("776273"),
            n.e("776602"),
            n.e("704434"),
            n.e("140402"),
            n.e("391763"),
            n.e("21921"),
            n.e("407170"),
            n.e("811310"),
            n.e("28102"),
            n.e("571210"),
            n.e("676418"),
            n.e("572963"),
            n.e("307575"),
            n.e("897073"),
            n.e("942724"),
            n.e("913823"),
            n.e("393766"),
            n.e("166495"),
            n.e("401518"),
            n.e("88342"),
            n.e("187110"),
            n.e("854461"),
            n.e("139970"),
            n.e("554241"),
            n.e("940258"),
            n.e("724303"),
            n.e("198329"),
            n.e("858164"),
            n.e("521930"),
            n.e("292583"),
            n.e("308555"),
            n.e("53102"),
            n.e("110327"),
            n.e("586127"),
            n.e("427032"),
            n.e("173764"),
            n.e("875842"),
            n.e("311802"),
            n.e("9205"),
            n.e("25949"),
            n.e("836863"),
            n.e("854622"),
            n.e("807936"),
            n.e("344502"),
            n.e("146070"),
            n.e("617249"),
            n.e("88599"),
            n.e("179049"),
            n.e("95340"),
            n.e("362422"),
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
            n.e("255580"),
            n.e("442901"),
            n.e("952548"),
            n.e("613867"),
            n.e("164776"),
            n.e("299854"),
            n.e("203589"),
            n.e("608557"),
            n.e("636373"),
            n.e("294857"),
            n.e("726033"),
            n.e("247660"),
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
            n.e("163235"),
            n.e("212055"),
            n.e("14035"),
            n.e("632756"),
            n.e("564850"),
            n.e("102328"),
            n.e("170104"),
            n.e("491793"),
            n.e("474610"),
            n.e("902564"),
            n.e("428967"),
            n.e("92935"),
            n.e("649362"),
            n.e("67878"),
            n.e("773534"),
            n.e("35557"),
            n.e("758946"),
            n.e("214285"),
            n.e("248330"),
            n.e("731503"),
            n.e("803332"),
            n.e("859546"),
            n.e("938149"),
            n.e("408362"),
            n.e("741678"),
            n.e("608032"),
            n.e("852617"),
            n.e("477970"),
            n.e("844780"),
            n.e("102698"),
            n.e("204744"),
            n.e("737021"),
            n.e("818465"),
            n.e("153535"),
            n.e("971430"),
            n.e("218203"),
            n.e("211185"),
            n.e("201050"),
            n.e("976516"),
            n.e("41332"),
            n.e("400501"),
            n.e("985794"),
            n.e("767837"),
            n.e("473384"),
            n.e("282783"),
            n.e("432209"),
            n.e("726511"),
            n.e("893349"),
            n.e("368062"),
            n.e("859991"),
            n.e("386317"),
            n.e("709371"),
            n.e("265696"),
            n.e("599719"),
            n.e("448399"),
            n.e("286774"),
            n.e("939171"),
            n.e("987478"),
            n.e("96680"),
            n.e("868214"),
            n.e("661814"),
            n.e("713567"),
            n.e("612287"),
            n.e("588070"),
            n.e("793438"),
            n.e("305557"),
            n.e("36227"),
            n.e("145811"),
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
            n.e("208018"),
            n.e("606949"),
            n.e("968763"),
            n.e("278045"),
            n.e("26001"),
            n.e("599976"),
            n.e("430997"),
            n.e("174192"),
            n.e("414591"),
            n.e("652111"),
            n.e("434786"),
            n.e("294607"),
            n.e("203930"),
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
            n.e("298748"),
            n.e("978046"),
            n.e("610943"),
            n.e("283230"),
            n.e("582486"),
            n.e("273669"),
            n.e("507775"),
            n.e("284819"),
            n.e("760989"),
            n.e("466147"),
            n.e("50342"),
            n.e("428235"),
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
            n.e("8422"),
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
            n.e("845322"),
            n.e("114748"),
            n.e("426386"),
            n.e("842987"),
            n.e("204665"),
            n.e("588860"),
        ]).then(n.bind(n, 237600));
        return (n) => (0, a.jsx)(e, { ...n, guild: t });
    });
}
let i5 = s.memo(function (e) {
    let {
            guildNode: t,
            setRef: n,
            onDragStart: i,
            onDragEnd: r,
            route: l,
            guild: d,
            animatable: c,
            selected: u = !1,
            unread: E = !1,
            mediaState: A,
            unavailable: h = !1,
            badge: p = 0,
            isMentionLowImportance: T,
            contextMenu: g = i6,
            draggable: S = !1,
            sorting: N = !1,
            preloadOnClick: C = !0,
            guildJoinRequestStatus: O,
            height: R,
            "aria-setsize": L,
            "aria-posinset": y,
        } = e,
        { id: D, parentId: v } = t,
        b = e.upperBadge ?? (h ? (0, B.em)() : null != A ? (0, B.oi)(A) : void 0),
        U = e.lowerBadge ?? void 0;
    null == U && p > 0
        ? (U =
              (0, B.wN)(
                  p,
                  T ? I.A.colors.BACKGROUND_MOD_STRONG.css : I.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
              ) ?? void 0)
        : null == U && null != O && (U = (0, B.eW)({ guildJoinRequestStatus: O }) ?? void 0);
    let G = e.lowerBadgeSize ?? { width: (0, e9.o6)(p) },
        [{ dragging: x }, V] = (0, nH.i)({
            type: eH.PJ.GUILD,
            item: () => (
                requestAnimationFrame(() => {
                    i?.();
                }),
                { type: t.type, nodeId: t.id }
            ),
            end() {
                (r?.(), (0, nK.um)(eF.Ay.getCompatibleGuildFolders()));
            },
            collect: (e) => ({ dragging: e.isDragging() }),
        }),
        j = (0, _.Vd)(D ?? eS.dJq, null != v ? 2 : 1),
        [W, Y] = s.useState(!1),
        K = !N && W,
        [$, z] = s.useState(!1),
        [X, Z] = s.useState(!1),
        [q] = s.useState(() => new f.J_(70, () => Z(!0))),
        Q = (0, iF.nr)() && !iw.Fr;
    s.useEffect(() => () => q.cancel(), [q]);
    let J = s.useCallback(() => {
            null != l ? (0, ik.pX)(l, { state: i3 }) : (0, H.u)(D, { state: i3 });
        }, [D, l]),
        ee = s.useCallback(() => {
            if (null != l || null == d || h || !C) return;
            let [e] = (0, ix.q)(d.id);
            null != e && w.A.preload(d.id, e);
        }, [l, d, h, C]),
        et = (0, iG.bG)([ex.Ay], () => ex.Ay.isCurrentUserGuest(D)),
        en = s.useCallback(
            (e) => {
                null == d || et || g(e, d);
            },
            [d, g, et],
        ),
        ei = s.useCallback(
            (e) => {
                "ArrowLeft" === e.key && null != v && document.querySelector(`[aria-owns=folder-items-${v}]`)?.focus();
            },
            [v],
        ),
        er = s.useCallback(
            (e) => {
                e ? q.delay() : (q.cancel(), Z(!1));
            },
            [q],
        );
    function ea() {
        N || Y(!0);
    }
    function el() {
        N || Y(!1);
    }
    let eo = s.useCallback(
            (e) => {
                n?.(D, e);
            },
            [D, n],
        ),
        ed = (0, m.r)(I.A.modules.guildbar.AVATAR_SIZE);
    if (null == d) return null;
    let ec = d.name;
    if (
        (p > 0
            ? (ec = es.intl.formatToPlainString(es.t["/uzRss"], { guildName: d.name, mentions: p }))
            : E && (ec = es.intl.formatToPlainString(es.t.lzqe42, { guildName: d.name })),
        null != A)
    ) {
        let e = [];
        (A.activeEvent && e.push(es.intl.string(es.t.dHvJ2p)),
            A.liveStage && e.push(es.intl.string(es.t.OO7ndG)),
            A.screenshare && e.push(es.intl.string(es.t.wsHMZ7)),
            A.video && e.push(es.intl.string(es.t.BrLCS0)),
            A.audio && e.push(es.intl.string(es.t.jPBhKy)),
            A.activity && e.push(es.intl.string(es.t.Y3Gii5)),
            e.length > 0 && (ec = `${ec}, ${e.join(" ")}`));
    }
    let eu = (0, a.jsx)(iB, {
            guild: d,
            show: X,
            active: u,
            onAnimationStart: function () {
                z(X);
            },
            onAnimationRest: function () {
                X || z(!1);
            },
        }),
        e_ = Q
            ? (0, a.jsx)(P.j, {
                  ariaLabel: ec,
                  name: d.name,
                  onClick: J,
                  onMouseEnter: ea,
                  onMouseLeave: el,
                  onMouseDown: ee,
                  onContextMenu: en,
                  onKeyDown: ei,
                  icon: (0, tx.Iv)(d, 2 * ed, K && c, !0),
                  selected: u || K,
                  ...j,
                  "aria-setsize": L,
                  "aria-posinset": y,
                  "aria-selected": u,
              })
            : (0, a.jsx)(M.Q, {
                  selected: u,
                  children: (0, a.jsx)("div", {
                      ref: S
                          ? (e) => {
                                V(e);
                            }
                          : void 0,
                      "data-dnd-name": d.name,
                      "data-drop-hovering": X,
                      children: (0, a.jsx)(P.j, {
                          ariaLabel: ec,
                          name: d.name,
                          onClick: J,
                          onMouseEnter: ea,
                          onMouseLeave: el,
                          onMouseDown: ee,
                          onContextMenu: en,
                          onKeyDown: ei,
                          icon: (0, tx.Iv)(d, 2 * ed, K && c, !0),
                          selected: u || K,
                          ...j,
                          "aria-setsize": L,
                          "aria-posinset": y,
                          "aria-selected": u,
                      }),
                  }),
              }),
        eE = X || $ ? eu : e_,
        eA = (0, a.jsx)(tZ, { children: (0, a.jsx)(n4, {}) }),
        eh = Q
            ? (0, a.jsx)(e7.animated.div, {
                  ref: S
                      ? (e) => {
                            V(e);
                        }
                      : void 0,
                  "data-dnd-name": d.name,
                  style: { scale: null == R ? 1 : R },
                  "data-drop-hovering": X,
                  className: o()(n8.rN, { [n8.p9]: N, [n8.oR]: X, [n8.wH]: X || u }),
                  children: (0, a.jsx)(M.Q, {
                      selected: !0,
                      upperBadge: b,
                      lowerBadge: U,
                      lowerBadgeSize: G,
                      children: eE,
                  }),
              })
            : (0, a.jsx)(e7.animated.div, {
                  style: { scale: null == R ? 1 : R },
                  className: o()(n8.rN, { [n8.p9]: N, [n8.oR]: X, [n8.wH]: X || u }),
                  "data-drop-hovering": X,
                  children: (0, a.jsx)(M.Q, {
                      selected: u,
                      upperBadge: b,
                      lowerBadge: U,
                      lowerBadgeSize: G,
                      children: eE,
                  }),
              });
    return (0, a.jsxs)(F.c, {
        ref: eo,
        children: [
            (0, a.jsx)(k.A, { overlay: !0, hovered: !x && K, selected: !x && u, unread: !x && E }),
            (0, a.jsx)(i2, {
                guild: d,
                disabled: N,
                isDragging: x,
                shouldShowNotificationContext: !h && (E || p > 0),
                children: x ? eA : eh,
            }),
            S ? (0, a.jsx)(tz, { name: d.name, targetNode: t, onDragOverChanged: er }) : null,
        ],
    });
});
var i4 = n(64061);
let i7 = s.memo(function (e) {
    let { guildNode: t, lowerBadge: n } = e,
        i = t.id,
        r = (0, A.bG)([ek.A], () => ek.A.getGuild(i)),
        l = io(r),
        o = (0, A.bG)([eq.A], () => eq.A.isFocused()),
        d = (0, A.bG)([nx.A], () => nx.A.isUnavailable(i)),
        c = (0, V.A)((e) => e.guildId),
        u = iU(i),
        {
            badge: _,
            unread: E,
            isMentionLowImportance: h,
        } = (0, A.cf)([J.default], () => ({
            badge: J.default.getMentionCount(i),
            isMentionLowImportance: J.default.getIsMentionLowImportance(i),
            unread: J.default.hasUnread(i),
        })),
        f = (0, id.Ig)(r) && 0 === _,
        I = s.useMemo(
            () =>
                null != n
                    ? n
                    : f
                      ? (0, a.jsx)("div", {
                            className: i4.j,
                            children: (0, a.jsx)(ia.PauseIcon, {
                                size: "custom",
                                color: "currentColor",
                                className: i4.v,
                                width: 10,
                                height: 10,
                            }),
                        })
                      : null,
            [n, f],
        );
    return (0, a.jsx)(i5, {
        ...e,
        guild: r,
        unavailable: d,
        animatable: o,
        selected: c === i,
        badge: _,
        isMentionLowImportance: h,
        lowerBadge: I,
        unread: E,
        mediaState: u,
        guildJoinRequestStatus: l,
    });
});
var i8 = n(922016),
    i9 = n(297264),
    re = n(821609),
    rt = n(339350),
    rn = n(475743),
    ri = n(624458),
    rr = n(408213),
    ra = (((r = {})[(r.PENDING_JOIN_REQUESTS_FOLDER = 1)] = "PENDING_JOIN_REQUESTS_FOLDER"), r),
    rs = n(928568);
function rl(e, t) {
    (0, te.L3)(e, async () => {
        let { default: e } = await n.e("49056").then(n.bind(n, 97187));
        return (n) => (0, a.jsx)(e, { ...n, guild: t });
    });
}
function ro(e) {
    let { guildNode: t } = e,
        n = t.id,
        i = (0, A.bG)([il.A], () => il.A.getRequest(n)),
        r = (0, A.bG)([il.A], () => il.A.getJoinRequestGuild(n), [n]),
        s = (0, A.bG)([eq.A], () => eq.A.isFocused()),
        l = (0, A.bG)([ej.A], () => ej.A.getGuildId());
    return null == r
        ? null
        : (0, a.jsx)(i5, {
              guildNode: t,
              guild: r,
              animatable: s,
              draggable: !1,
              selected: n === l,
              preloadOnClick: !1,
              contextMenu: rl,
              lowerBadge:
                  i?.applicationStatus === iW.B5.REJECTED
                      ? (0, B.eW)({ guildJoinRequestStatus: i.applicationStatus })
                      : void 0,
              route: eS.BVt.GUILD_MEMBER_VERIFICATION(n),
          });
}
var rd = n(943536);
function rc(e) {
    let { onActivate: t, children: n } = e,
        i = s.useRef(null),
        r = (0, A.bG)([il.A], () => il.A.hasJoinRequestCoackmark()),
        l = s.useCallback(() => {
            rr.Ay.clearCoachmark();
        }, []),
        o = (0, rn.Ay)(r),
        d = s.useRef(null);
    return (
        s.useEffect(() => {
            r && r !== o && (t(), d.current?.ref?.current?.layerRef?.current?.updatePosition());
        }, [d, r, o, t]),
        (0, a.jsxs)("div", {
            className: rd.kL,
            children: [
                (0, a.jsx)(i8.Y, {
                    ref: d,
                    targetElementRef: i,
                    shouldShow: r,
                    renderPopout: () =>
                        (0, a.jsxs)("div", {
                            className: rd.jC,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: rd.Bm,
                                    children: [
                                        (0, a.jsxs)("div", {
                                            className: rd.q3,
                                            children: [
                                                (0, a.jsx)(i9.D, {
                                                    variant: "heading-md/medium",
                                                    children: es.intl.string(es.t["0YV0YE"]),
                                                }),
                                                (0, a.jsx)(eu.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    children: es.intl.string(es.t["0UQVDL"]),
                                                }),
                                            ],
                                        }),
                                        (0, a.jsx)(re.$, {
                                            variant: "primary",
                                            size: "sm",
                                            text: es.intl.string(es.t["4r+amb"]),
                                            fullWidth: !0,
                                            onClick: l,
                                        }),
                                    ],
                                }),
                                (0, a.jsx)("div", { className: rd.ed }),
                            ],
                        }),
                    position: "right",
                    animationPosition: "right",
                    align: "top",
                    spacing: 16,
                    children: (e) => (0, a.jsx)("div", { ...e, className: rd.Ne, ref: i }),
                }),
                n,
            ],
        })
    );
}
function ru(e) {
    let { onActivate: t } = e,
        [n, i] = s.useState(!1),
        r = (0, A.bG)([ej.A], () => ej.A.getGuildId()),
        l = (0, A.bG)([il.A], () => il.A.hasFetchedRequestToJoinGuilds),
        o = (0, rs.A)(),
        d = (0, rn.Ay)(r),
        c = s.useMemo(() => {
            let e = (0, eH.xW)({
                folderId: ra.PENDING_JOIN_REQUESTS_FOLDER,
                folderName: es.intl.string(es.t["scsU+l"]),
                expanded: n,
                guildIds: [],
            });
            for (let t of o) e.children.push((0, eH.EL)(t, e.id));
            return e;
        }, [o, n]);
    s.useEffect(() => {
        n && !l && ri.A.fetchRequestToJoinGuilds();
    }, [n, l]);
    let u = null != r && o.includes(r);
    return (s.useEffect(() => {
        !n && u && d !== r && i(!0);
    }, [n, u, d, r]),
    0 === o.length)
        ? null
        : (0, a.jsx)(rc, {
              onActivate: t,
              children: (0, a.jsx)(it, {
                  folderNode: c,
                  expanded: n,
                  selected: u,
                  draggable: !1,
                  sorting: !1,
                  onExpandCollapse: () => {
                      (i(!n), rr.Ay.clearCoachmark());
                  },
                  folderButtonSize: "icon",
                  folderButtonContent: (0, a.jsx)("div", {
                      className: rd.rH,
                      children: (0, a.jsx)(rt.Q, { size: "sm", color: "currentColor" }),
                  }),
                  renderChildNode: function (e, t, n) {
                      return e.type !== eH.PJ.GUILD
                          ? null
                          : (0, a.jsx)(ro, { guildNode: e, "aria-setsize": n, "aria-posinset": t }, e.id);
                  },
              }),
          });
}
function r_(e) {
    let { guildId: t } = e,
        n = s.useMemo(() => (0, eH.EL)(t), [t]),
        i = (0, A.bG)([ek.A], () => ek.A.getGuild(t)),
        r = (0, A.bG)([eq.A], () => eq.A.isFocused()),
        l =
            t ===
            (0, V.A)((e) => {
                let { guildId: t } = e;
                return t;
            }),
        o = iU(t);
    return null == i
        ? null
        : (0, a.jsx)(i5, { guildNode: n, guild: i, animatable: r, selected: l, draggable: !1, mediaState: o });
}
var rE = n(987566);
let rA = (0, D.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("209856"),
                n.e("225307"),
                n.e("332165"),
                n.e("618416"),
                n.e("501546"),
                n.e("849162"),
                n.e("902654"),
                n.e("706073"),
                n.e("227512"),
                n.e("778716"),
                n.e("705534"),
                n.e("774346"),
                n.e("481647"),
                n.e("776602"),
                n.e("704434"),
                n.e("140402"),
                n.e("391763"),
                n.e("139970"),
                n.e("858164"),
                n.e("427032"),
                n.e("617249"),
                n.e("362422"),
                n.e("856437"),
                n.e("442901"),
                n.e("844780"),
                n.e("550033"),
                n.e("713567"),
                n.e("444567"),
                n.e("695170"),
                n.e("963203"),
                n.e("275133"),
                n.e("228850"),
                n.e("127659"),
                n.e("65200"),
                n.e("860003"),
                n.e("285802"),
                n.e("472627"),
                n.e("941348"),
                n.e("81941"),
                n.e("307348"),
                n.e("130706"),
                n.e("303886"),
                n.e("108066"),
                n.e("96296"),
            ]).then(n.bind(n, 153571)),
        webpackId: 153571,
        name: "NotificationsInboxButton",
    }),
    rh = (0, eB.isWindows)() ? 4 : 12 * !(0, eB.isMac)();
function rf(e) {
    return e.startsWith(eS.BVt.GUILD_DISCOVERY) || e.startsWith(eS.BVt.GLOBAL_DISCOVERY);
}
class rI {
    guildsTree;
    setScrolling;
    setIsScrolledToBottom;
    onScroll;
    sizes;
    scrollerRef = s.createRef();
    nodeRefs = {};
    timeout = new f.Ep();
    observer;
    constructor(e, t, n, i, r) {
        ((this.guildsTree = e),
            (this.setScrolling = t),
            (this.setIsScrolledToBottom = n),
            (this.onScroll = i),
            (this.sizes = r),
            (0, eM.u9)(this.getVisibleGuildIds));
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
            (null == e && rf(window.location.pathname)) ||
            e === eS.sFm.SERVER_DISCOVERY_BADGE ||
            e === eS.sFm.E3_SERVER_DISCOVERY_BADGE
        )
            return;
        if (null == e) return void n.scrollTo({ to: 0, animate: t });
        let i = this.nodeRefs[e];
        for (; null == i;) {
            let t = this.guildsTree.getNode(e);
            if (t?.parentId == null) break;
            i = this.nodeRefs[t.parentId];
        }
        null != i && (0, E.vq)(i)
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
    _handleScrollDebounced = c().debounce(() => {
        let e = this.scrollerRef.current;
        if (null == e) return;
        let { scrollTop: t } = e.getScrollerState();
        (N.A.updateGuildListScrollTo(t), this.onScroll());
    }, 200);
    _handleScrollThrottled = c().throttle(() => {
        let e = this.scrollerRef.current;
        null != e && this.setIsScrolledToBottom(e.isScrolledToBottom());
    }, 100);
    setNodeRef = (e, t) => {
        this.nodeRefs[e] = t;
    };
}
function rp(e) {
    let { hideDms: t, scrollToTop: n, lurkingGuildIds: i } = e,
        r = (0, v.A)(),
        { shouldShowPopover: l } = (0, b.QQ)(),
        o = s.useRef(!1),
        d = l && r;
    s.useEffect(() => {
        (d && !o.current && n(), (o.current = d));
    }, [n, d]);
    let c = (0, A.yK)([ek.A, ex.Ay], () => ek.A.getGuildIds().filter((e) => ex.Ay.isCurrentUserGuest(e))),
        u = i.concat(c),
        { entrypoint: _ } = (0, eU.X8)({ location: "GuildsBar" });
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(nM, {}),
            _ === eU.RK.SERVER_RAIL_TOP && (0, a.jsx)(rA, {}),
            (0, a.jsx)(b.Ay, {}),
            r ? (0, a.jsx)(eb, {}) : null,
            !t && (0, a.jsx)(tS, {}),
            u.map((e) => (0, a.jsx)(r_, { guildId: e }, e)),
            (0, a.jsx)(ru, { onActivate: n }),
        ],
    });
}
function rT(e) {
    let { guildDiscoveryButton: t, disableAppDownload: n, isOverlay: i, renderTreeNode: r, lurkingGuildIds: s } = e,
        [l] = (0, A.yK)([eF.Ay], () => {
            let e = eF.Ay.getGuildsTree();
            return [e, e.version];
        }),
        o = l.getRoots(),
        d = (0, A.yK)([eG.A], () => eG.A.getGeoRestrictedGuilds()).map((e) =>
            (0, a.jsx)(t4, { id: e.id, name: e.name, icon: e.icon }, e.id),
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(p.B, {
                role: "group",
                "aria-label": es.intl.string(es.t["7hB4kg"]),
                gap: "xs",
                children: o.map((e, t) => r(e, t, o.length)),
            }),
            d,
            (0, a.jsx)(nB, {}),
            i ? null : (0, a.jsx)(t1, { disableTooltip: s.length > 0, lastTargetNode: o[o.length - 1] }),
            i ? null : t,
            n ? null : (0, a.jsx)(tb, {}),
        ],
    });
}
function rm(e) {
    var t;
    let { disableAppDownload: n = eB.isPlatformEmbedded, isOverlay: i = !1, className: r, themeOverride: l } = e,
        [d] = (0, A.yK)([eF.Ay], () => {
            let e = eF.Ay.getGuildsTree();
            return [e, e.version];
        }),
        c = (0, A.bG)([eP.A], () => eP.A.lurkingGuildIds()),
        E = s.useMemo(() => (i ? [] : c), [c, i]),
        h = (0, A.bG)([y.A], () => y.A.isFullscreenInContext()),
        { isSorting: p, startSorting: N, stopSorting: O } = (0, eV.A)(),
        D = s.useRef(!1),
        [b] = s.useState(() => new f.Ep()),
        M = s.useRef(null),
        P = s.useRef(null),
        { ref: U, ...w } = (0, _.$y)(),
        G = (0, T.R7)(),
        [x, k] = s.useState(!1),
        F = (0, m.r)(I.A.modules.guildbar.AVATAR_SIZE),
        B = (0, m.r)(I.A.space.SPACE_XS),
        H = (0, v.A)(),
        { pathname: j } = (0, u.zy)(),
        { entrypoint: W } = (0, eU.X8)({ location: "GuildsBar" }),
        Y = +!!H + +(W === eU.RK.SERVER_RAIL_TOP),
        K = s.useMemo(() => {
            let e,
                t,
                n =
                    ((e = F + B),
                    {
                        iconSize: F,
                        iconTotalSize: e,
                        badgeVisibleBuffer: e - 16,
                        separatorSize: (t = 2 + B),
                        heightBeforeGuilds: rh + t + Y * e,
                        bottomInset: 16,
                    });
            return new rI(
                d,
                k,
                eS.tEg,
                () => {
                    (M.current?.calculateState(), P.current?.calculateState());
                },
                n,
            );
        }, [F, B, d, Y]);
    (s.useEffect(
        () => (
            K.setResizeObserver(),
            () => {
                K.clearResizeObserver();
            }
        ),
        [K],
    ),
        s.useEffect(() => {
            function e() {
                (M.current?.calculateState(), P.current?.calculateState());
            }
            return (J.default.addChangeListener(e), () => J.default.removeChangeListener(e));
        }, []));
    let { analyticsLocations: $ } = (0, L.Ay)(R.A.GUILDS_LIST),
        z = rf(j);
    ((0, C.u5)(() => {
        if (!D.current && 0 !== d.size) {
            if (!z) {
                let { scrollTop: e } = ew.A.getGuildListDimensions();
                K.scrollTo({ to: e, animate: !1 });
            }
            return ((D.current = !0), () => b.stop());
        }
    }),
        s.useEffect(() => {
            if ((K.setGuildsTree(d), D.current || 0 === d.size)) return;
            let e = V.A.getState().guildId;
            K.scrollToGuild(e, !1);
            let t = null;
            return V.A.subscribe((e) => {
                let { guildId: n } = e;
                n !== t && ((t = n), K.scrollToGuild(t, !1));
            });
        }, [d, K]));
    let X = s.useCallback(() => {
        K.scrollTo({ to: 0, animate: !1 });
    }, [K]);
    ((t = K.scrollToGuild),
        s.useEffect(() => {
            let e = null;
            function n() {
                let n = ej.A.getGuildId();
                n !== e && ((e = n ?? null), t(n ?? null, !1));
            }
            return (
                ej.A.addChangeListener(n),
                () => {
                    ej.A.removeChangeListener(n);
                }
            );
        }, [t]));
    let Z = s.useCallback(
            function e(t, n, i) {
                switch (t.type) {
                    case eH.PJ.FOLDER:
                        return (0, a.jsx)(
                            ir,
                            {
                                folderNode: t,
                                treeVersion: d.version,
                                setNodeRef: K.setNodeRef,
                                draggable: !0,
                                sorting: p,
                                onDragStart: N,
                                onDragEnd: O,
                                renderChildNode: e,
                                "aria-setsize": i,
                                "aria-posinset": void 0 !== n ? n + 1 : void 0,
                            },
                            t.id,
                        );
                    case eH.PJ.GUILD:
                        return (0, a.jsx)(
                            i7,
                            {
                                guildNode: t,
                                setRef: K.setNodeRef,
                                draggable: !0,
                                sorting: p,
                                onDragStart: N,
                                onDragEnd: O,
                                "aria-setsize": i,
                                "aria-posinset": void 0 !== n ? n + 1 : void 0,
                            },
                            t.id,
                        );
                    default:
                        return null;
                }
            },
            [N, O, p, K.setNodeRef, d.version],
        ),
        q = (0, a.jsx)(ns, { selected: z, className: rE.ai }),
        Q = W === eU.RK.SERVER_RAIL_BOTTOM;
    return (0, a.jsx)(L.f5, {
        value: $,
        children: (0, a.jsx)(g.N, {
            theme: l,
            children: (e) =>
                (0, a.jsxs)("nav", {
                    className: o()(rE.iE, r, e, { [rE.R]: h }),
                    "aria-label": es.intl.string(es.t.PjnF2t),
                    children: [
                        (0, a.jsx)(e6, {
                            ref: M,
                            isVisible: K.isItemVisible,
                            onJumpTo: K.handleJumpToGuild,
                            className: rE.Xl,
                            barClassName: rE.Sh,
                        }),
                        (0, a.jsxs)("div", {
                            ref: U,
                            ...w,
                            ...G,
                            role: "tree",
                            "aria-multiselectable": !1,
                            className: rE.B2,
                            children: [
                                (0, a.jsxs)(S.zC, {
                                    className: o()({ [rE.XG]: !0, [rE.qw]: x }),
                                    experimental_useStack: !0,
                                    gap: "xs",
                                    ref: K.scrollerRef,
                                    onScroll: K.handleScroll,
                                    children: [
                                        (0, a.jsx)(rp, { scrollToTop: X, lurkingGuildIds: E }),
                                        (0, a.jsx)(nU, {}),
                                        (0, a.jsx)(rT, {
                                            guildDiscoveryButton: q,
                                            disableAppDownload: n,
                                            isOverlay: i,
                                            renderTreeNode: Z,
                                            lurkingGuildIds: E,
                                        }),
                                    ],
                                }),
                                Q &&
                                    (0, a.jsxs)("div", {
                                        children: [
                                            (0, a.jsx)(nU, { fullWidth: !0 }),
                                            (0, a.jsx)("div", { className: rE.JU, children: (0, a.jsx)(rA, {}) }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, a.jsx)(e6, {
                            reverse: !0,
                            ref: P,
                            isVisible: K.isItemVisible,
                            onJumpTo: K.handleJumpToGuild,
                            className: o()(rE.LZ, { [rE.CH]: !i && !Q, [rE.c0]: !i && Q }),
                            barClassName: rE.Sh,
                        }),
                    ],
                }),
        }),
    });
}
let rg = s.memo(
    function (e) {
        let t = (0, O.A)("guildsnav");
        return (0, a.jsx)(_.hD, { navigator: t, children: (0, a.jsx)(rm, { ...e }) });
    },
    (e, t) => !1 === t.isVisible || (0, h.A)(e, t),
);
