"use strict";
n.d(t, { A: () => rI });
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
    I = n(451988),
    f = n(661531),
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
    V = n(771640),
    B = n(366811),
    H = n(345942),
    j = n(616356),
    W = n(734057),
    Y = n(309010),
    K = n(977997),
    $ = n(935208),
    z = n(181079),
    Z = n(5180),
    q = n(635233),
    X = n(863005),
    Q = n(152007),
    J = n(458294),
    ee = n(576705),
    et = n(573163),
    en = n(543465),
    ei = n(428784),
    er = n(43105),
    ea = n(266361),
    es = n(375708),
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
    eI = n(104171),
    ef = n(63995),
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
                  (0, a.jsx)(eI.Ay, { guildId: void 0, users: t, max: 6 }),
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
        s = (0, A.yK)([ef.A], () =>
            c().flatMap(i, (e) =>
                ef.A.getMutableParticipants(e, ep.ip.SPEAKER)
                    .filter((e) => e.type === ep.wY.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
            ),
        ),
        l = (0, A.bG)([ef.A], () => {
            let e = 0;
            for (let t of i) e += ef.A.getParticipantCount(t, ep.ip.AUDIENCE);
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
        d = (0, A.yK)([G.Ay], () => {
            let e = G.Ay.getEmbeddedActivitiesByChannel(),
                n = [];
            for (let i of t) n.push(...(e.get(i)?.flatMap((e) => Array.from(e.userIds)) ?? []));
            return n;
        }, [t]),
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
                          (0, a.jsx)(eI.Ay, { guildId: void 0, users: s, max: 3 }),
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
        I = eC(
            eE.F,
            _.filter((e) => null != e && !d.includes(e.id)),
        ),
        f = eC(eA.k, u);
    return (0, a.jsxs)(a.Fragment, { children: [h, E, I, f] });
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
        { shouldShowPopover: I, markPopoverAsDismissed: f } = (0, b.QQ)(),
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
        L = (0, B.A)((e) => e.guildId),
        y = (0, Z.ai)(L),
        { badge: D, unread: v } = (0, A.cf)([X.A, W.A, J.default, Q.A, ee.A, et.Ay, en.Ay], () => {
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
                        let i = X.A.getActiveJoinedRelevantThreadsForParent(r, n);
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
            (0, V.oi)({ audio: c, video: u, screenshare: E, liveStage: !1, isCurrentUserConnected: t, activity: h })),
        ea = D > 0 ? (0, V.wN)(D) : null,
        el = s.useCallback(
            (e) => {
                e && ((0, q.mv)("intro_dc"), (0, H.u)(eS.YYv)), f(ey.i.TAKE_ACTION);
            },
            [f],
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
                                I && el(!1);
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
            I &&
                (0, a.jsx)(eo, {
                    targetElementRef: T,
                    onTakeAction: () => el(!0),
                    onRequestClose: () => f(ey.i.USER_DISMISS),
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
    eV = n(723702),
    eB = n(757780),
    eH = n(263715),
    ej = n(967198),
    eW = n(173860),
    eY = n(383394),
    eK = n(131677),
    e$ = n(228366);
let ez = {};
class eZ extends A.Ay.PersistedStore {
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
let eq = new eZ(e$.h, {
    VIEW_HISTORY_MARK_VIEW: function (e) {
        let { key: t } = e;
        ez[t] = Date.now();
    },
});
var eX = n(531685),
    eQ = n(583613);
let eJ = "app-download-item",
    e0 = "add-server-item";
function e1() {
    return !1;
}
function e2(e) {
    let t = J.default.getMutableGuildStates();
    return (
        (e === eS.sFm.SERVER_DISCOVERY_BADGE && !eq.hasViewed(eS.sFm.SERVER_DISCOVERY_BADGE)) ||
        (e !== eJ && e !== e0 && t[e ?? "null"]?.highImportanceMentionCount > 0)
    );
}
let e3 = (0, eQ.L_)((e, t, n) => ["null", ...t, ...e, e0, eS.sFm.E3_SERVER_DISCOVERY_BADGE, eJ]),
    e5 = s.forwardRef(function (e, t) {
        let n = (0, A.yK)([eF.Ay, eK.A, J.default], () =>
                e3(eF.Ay.getGuildFolders(), eK.A.getUnreadPrivateChannelIds(), J.default.getStoreChangeSentinel()),
            ),
            i = (0, A.bG)([eX.A], () => eX.A.isFocused()),
            r = (0, A.bG)([eY.A], () => eY.A.getExpandedFolders());
        return (0, a.jsx)(eW.A, {
            ...e,
            ref: t,
            items: n,
            isUnread: e1,
            textUnread: es.intl.string(es.t.y2b7CA),
            textMention: es.intl.string(es.t.y2b7CA),
            isMentioned: e2,
            animate: i,
            expandedFolders: r,
        });
    });
n(667532);
var e4 = n(868285),
    e6 = n(763827),
    e7 = n(296704),
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
    td = n(145408);
function tc(e) {
    let { icon: t, users: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsxs)("div", {
              className: eN.nM,
              children: [
                  (0, a.jsx)(t, { className: eN.RI, color: "currentColor" }),
                  (0, a.jsx)(eI.Ay, { users: n, max: 6 }),
              ],
          });
}
function tu(e) {
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
function t_(e) {
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
        I,
        f,
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
        (c = (0, A.yK)([j.A, eT.default], () => {
            let e = j.A.getAllApplicationStreamsForChannel(t)
                .map((e) => e.ownerId)
                .map((e) => eT.default.getUser(e));
            return (0, ta.aw)(e, n);
        }, [t, n])),
        (u = s.useMemo(() => (0, ta.aw)(c, n), [c, n])),
        (_ = s.useMemo(() => (0, tl.L)(u, i, "DirectMessageTooltip - activityUsers"), [u, i])),
        (E = s.useMemo(() => _.filter((e) => !d.some((t) => t.id === e.id)), [_, d])),
        (h = (0, A.yK)([em.Ay], () => {
            let e = em.Ay.getVoiceStatesForChannel(p).map((e) => {
                let { user: t } = e;
                return t;
            });
            return (0, ta.aw)(e, n);
        }, [p, n])),
        (I = s.useMemo(() => (0, ta.aw)(h, n), [h, n])),
        (f = s.useMemo(() => (0, tl.L)(I, i, "DirectMessageTooltip - voiceUsers"), [I, i])),
        {
            voiceUsers: s.useMemo(
                () => f.filter((e) => !d.some((t) => t.id === e.id) && !_.some((t) => t.id === e.id)),
                [f, d, _],
            ),
            streamUsers: E,
            activityUsers: d,
        }),
        N = (0, a.jsx)(tc, { icon: e_.H, users: S }),
        C = (0, a.jsx)(tc, { icon: eE.F, users: g }),
        O = (0, a.jsx)(tc, { icon: eA.k, users: m }),
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
            R ? (0, a.jsx)(tu, { muteConfig: L, className: o()(eN.LM, { [eN.Sx]: null != N || null != C }) }) : null,
        ],
    });
}
function tE(e) {
    let { channel: t } = e,
        n = (0, ti.Ay)(t);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", {
                className: o()(eN.nM, eN.Dl),
                children: (0, a.jsx)("span", { className: o()(eN.cN, eN.NT), children: n }),
            }),
            (0, a.jsx)(t_, { channel: t }),
        ],
    });
}
function tA(e) {
    let { channel: t, children: n } = e,
        i = (0, ti.Ay)(t),
        r = s.useMemo(
            () =>
                (0, a.jsx)(eu.E, {
                    variant: "text-md/semibold",
                    color: "text-default",
                    className: eN.A_,
                    children: (0, a.jsx)(tE, { channel: t }),
                }),
            [t],
        );
    return (0, a.jsx)(eh.m, {
        __unsupportedReactNodeAsText: r,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": i ?? void 0,
        asContainer: !0,
        children: n,
    });
}
let th = { friction: 28, tension: 600 };
function tI(e) {
    switch (e) {
        case "height":
        case "opacity":
            return { duration: 150, ...th };
        case "scale":
            return { ...th };
        default:
            throw Error(`DirectMessage: getSpringConfigs() - Invalid spring ${String(e)}`);
    }
}
class tf extends s.PureComponent {
    static defaultProps = { badge: 0, audio: !1, video: !1, isCurrentUserInThisDMCall: !1 };
    state = {
        hovered: !1,
        animating: !0,
        controller: new e7.Controller({ scale: 0, height: 0, opacity: 0, config: tI }),
    };
    componentWillEnter(e) {
        let { controller: t } = this.state;
        e(),
            t
                .update({ immediate: !eX.A.isFocused(), height: 1, opacity: 1, scale: 1, config: tI })
                .start()
                .then(() => this.setState({ animating: !1 }));
    }
    componentWillAppear(e) {
        let { controller: t } = this.state;
        t.update({ immediate: !0, scale: 1, opacity: 1, height: 1, config: tI }).start().then(e);
    }
    componentWillLeave(e) {
        let { controller: t } = this.state;
        this.setState({ animating: !0 }, () =>
            t.update({ immediate: !eX.A.isFocused(), height: 0, opacity: 0, scale: 0, config: tI }).start().then(e),
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
                      n.e("790484"),
                      n.e("207322"),
                      n.e("622936"),
                      n.e("216947"),
                      n.e("866038"),
                      n.e("926132"),
                      n.e("146652"),
                      n.e("834552"),
                      n.e("708757"),
                      n.e("993103"),
                      n.e("585968"),
                      n.e("776273"),
                      n.e("893190"),
                      n.e("391763"),
                      n.e("571210"),
                      n.e("189673"),
                      n.e("88342"),
                      n.e("955557"),
                      n.e("229787"),
                      n.e("311802"),
                      n.e("698965"),
                      n.e("882073"),
                      n.e("797558"),
                      n.e("691994"),
                      n.e("576665"),
                      n.e("235313"),
                      n.e("474610"),
                      n.e("436564"),
                      n.e("170955"),
                      n.e("947502"),
                      n.e("245996"),
                      n.e("700792"),
                      n.e("592822"),
                      n.e("838056"),
                      n.e("965789"),
                      n.e("823427"),
                      n.e("529422"),
                      n.e("508829"),
                      n.e("309291"),
                      n.e("307059"),
                      n.e("187048"),
                      n.e("516054"),
                      n.e("298199"),
                      n.e("17244"),
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
                      n.e("391763"),
                      n.e("955557"),
                      n.e("170955"),
                      n.e("947502"),
                      n.e("965789"),
                      n.e("368530"),
                      n.e("187048"),
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
            I = () =>
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
                    (0, a.jsx)(tA, {
                        channel: e,
                        children: (0, a.jsx)(M.Q, {
                            rounded: !0,
                            selected: !1,
                            lowerBadge: i > 0 ? (0, V.wN)(i, void 0, !0) : null,
                            upperBadge: (0, V.oi)({ audio: r, video: s, screenshare: l, isCurrentUserConnected: o }),
                            lowerBadgeSize: { width: (0, e9.o6)(i) },
                            children: I(),
                        }),
                    }),
                ],
            }),
        });
    }
}
let tp = s.forwardRef(function (e, t) {
    let n = e.channel.id,
        i = (0, ti.Ay)(e.channel),
        r = (0, _.Vd)(n, 2),
        s = (0, A.bG)([e6.A], () => e6.A.getChannelId(), []),
        l = (0, A.bG)([y.A], () => y.A.getMode(n), [n]),
        o = (0, A.bG)([j.A], () => j.A.getAllApplicationStreamsForChannel(n).length > 0),
        d = (0, A.bG)([em.Ay], () => em.Ay.getVoiceStatesForChannel(e.channel).length > 0, [e.channel]),
        c = (0, A.bG)([Y.Ay], () => Y.Ay.getChannelId(), []),
        u = (0, A.bG)([et.Ay], () => et.Ay.getMentionCount(n), [n]),
        E = s === n,
        { isIncomingCall: h, isOngoingCall: I } = (0, tt.A)(n),
        p = !1,
        T = !1;
    (E || d) && ((p = l === eS._Of.VOICE), (T = l === eS._Of.VIDEO));
    let g = (0, m.r)(f.A.modules.guildbar.AVATAR_SIZE);
    return (0, a.jsx)(tf, {
        ...e,
        ref: t,
        channelName: i,
        unread: u > 0,
        selected: c === n,
        badge: u,
        audio: p,
        video: T,
        stream: o,
        isCurrentUserInThisDMCall: E,
        isIncomingCall: h,
        isOngoingCall: I,
        size: g,
        treeItemProps: r,
    });
});
function tT() {
    (0, A.bG)([W.A], () => W.A.getPrivateChannelsVersion());
    let e = W.A.getMutablePrivateChannels(),
        t = (0, A.yK)([eK.A], () => eK.A.getUnreadPrivateChannelIds()),
        { selectedVoiceGuildId: n, selectedVoiceChannelId: i } = (0, A.cf)([e6.A], () => ({
            selectedVoiceGuildId: e6.A.getGuildId(),
            selectedVoiceChannelId: e6.A.getChannelId(),
        })),
        r = t.map((t) => {
            let n = e[t];
            return null == n || n.id === i ? null : (0, a.jsx)(tp, { channel: n }, n.id);
        }),
        l = null == n && null != i ? e[i] : null;
    return (
        null != l && r.unshift((0, a.jsx)(tp, { channel: l }, l.id)),
        (0, a.jsx)(p.B, {
            id: "guild-list-unread-dms",
            role: "group",
            "aria-label": es.intl.string(es.t.YUU0RF),
            gap: "xs",
            hidden: r.length < 1,
            children: (0, a.jsx)(e4.F, { component: s.Fragment, children: r }),
        })
    );
}
var tm = n(192308),
    tg = n(32880),
    tS = n(939249),
    tN = n(728309);
function tC(e) {
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
        E = i ? t : (0, a.jsx)("div", { className: o()(tN.p, { [tN.w]: u }), children: t });
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
var tO = n(93776);
let tR = s.forwardRef(function (e, t) {
        let {
                id: n,
                onClick: i,
                onContextMenu: r,
                icon: l,
                selected: d,
                tooltip: c,
                upperBadge: u,
                lowerBadge: E,
                lowerBadgeSize: A,
                showPill: h = !0,
                className: I,
                "aria-label": f,
                children: p,
                onMouseEnter: T,
                onMouseLeave: m,
                onMouseDown: g,
            } = e,
            S = (0, _.Vd)(n),
            [N, C] = s.useState(!1),
            O = f ?? ("string" == typeof c ? c : void 0);
        return (0, a.jsxs)(F.c, {
            children: [
                h ? (0, a.jsx)(k.A, { overlay: !0, hovered: N, selected: d }) : null,
                (0, a.jsx)(tC, {
                    text: c,
                    selected: d,
                    children: (0, a.jsx)(M.Q, {
                        selected: !0,
                        upperBadge: u,
                        lowerBadge: E,
                        lowerBadgeSize: A,
                        children: (0, a.jsx)(tS.D, {
                            innerRef: t,
                            onMouseEnter: () => {
                                T?.(), C(!0);
                            },
                            onMouseLeave: () => {
                                m?.(), C(!1);
                            },
                            onMouseDown: g,
                            className: o()(tO.oZ, I, { [tO.wH]: d || N }),
                            onClick: i,
                            "aria-label": O,
                            "aria-selected": d,
                            onContextMenu: r,
                            focusProps: { enabled: !1 },
                            ...S,
                            children: null != l && (0, a.jsx)(l, { className: tO.sF, color: "currentColor" }),
                        }),
                    }),
                }),
                p,
            ],
        });
    }),
    tL = "DOWNLOAD_APPS";
function ty() {
    let e = (0, tm.useModalsStore)((e) => (0, tm.hasModalOpenSelector)(e, tL));
    return (0, a.jsx)(tR, {
        id: "app-download-button",
        onClick: () => {
            (0, tm.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 987482));
                    return (t) => (0, a.jsx)(e, { source: "Guilds", ...t });
                },
                { modalKey: tL },
            );
        },
        selected: e,
        tooltip: es.intl.string(es.t.Z7jwrJ),
        icon: tg.DownloadIcon,
    });
}
var tD = n(245604),
    tv = n(272613),
    tb = n(398884),
    tM = n(772366),
    tP = n(728321),
    tU = n(260509),
    tw = n(284009),
    tG = n.n(tw),
    tx = n(651300),
    tk = n(66834),
    tF = n(174459),
    tV = n(759223);
function tB(e) {
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
function tH(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return (
        tG()(t.type !== eH.PJ.ROOT, "[GuildDropTarget] Tried using a root node as a drop target."),
        {
            accept: e,
            canDrop: (e) =>
                e.nodeId !== t.id &&
                (!i || e.type !== eH.PJ.FOLDER || t.type !== eH.PJ.FOLDER) &&
                (e.type !== eH.PJ.FOLDER || null == t.parentId),
            drop(e) {
                let { nodeId: r } = e;
                i && t.type !== eH.PJ.FOLDER && tF.default.track(eS.HAw.GUILD_FOLDER_CREATED),
                    tk.A.moveById(r, t.id, n, i);
            },
            collect: (e) => ({ canDrop: e.canDrop(), isOver: e.isOver() }),
        }
    );
}
function tj(e) {
    let { name: t, targetNode: n, combine: i, below: r } = e,
        l = s.useMemo(() => tH([eH.PJ.GUILD, eH.PJ.FOLDER], n, r, i), [n, r, i]),
        [{ canDrop: o, isOver: d }, c] = (0, tx.H)(l),
        u = tB([
            [o, tV.OP],
            [d, tV.NQ],
        ]);
    return (0, a.jsx)("div", {
        ref: (e) => {
            (u.current = e), c(e);
        },
        "data-dnd-name": es.intl.formatToPlainString(es.t["A5aDw+"], { itemName: t }),
        className: tV.aC,
    });
}
function tW(e) {
    let { name: t, targetNode: n, onDragOverChanged: i } = e,
        [{ canDrop: r, isOver: l }, d] = (0, tx.H)(() => tH([eH.PJ.GUILD], n, !0, !0));
    s.useEffect(() => {
        i?.(l);
    }, [i, l]);
    let c = tB([
        [r, tV.OP],
        [l, tV.NQ],
    ]);
    return (0, a.jsx)(tC, {
        text: t,
        shouldShow: l,
        forceOpen: l,
        disableWrapper: !0,
        children: (0, a.jsx)("div", {
            ref: (e) => {
                (c.current = e), d(e);
            },
            "data-dnd-name": es.intl.formatToPlainString(es.t.qiQ0QI, { itemName: t }),
            className: o()(tV.dw, {}),
        }),
    });
}
let tY = s.memo(function (e) {
    let { name: t, targetNode: n, noCombine: i = !1, below: r = !1, onDragOverChanged: s } = e,
        l = !i && null == n.parentId;
    return (0, a.jsxs)("div", {
        className: tV.iE,
        "aria-hidden": !0,
        children: [
            (0, a.jsx)(tj, { name: t, targetNode: n, below: r }),
            l ? (0, a.jsx)(tW, { name: t, targetNode: n, onDragOverChanged: s }) : null,
        ],
    });
});
function tK(e) {
    let { name: t, targetNode: n } = e,
        [{ canDrop: i, isOver: r }, s] = (0, tx.H)(() => tH([eH.PJ.GUILD], n, !0, !0)),
        l = tB([[r, tV.a7]]),
        o = tB([
            [r, tV.NQ],
            [i, tV.OP],
        ]);
    return (0, a.jsx)("div", {
        ref: l,
        className: tV.Ro,
        "aria-hidden": !0,
        children: (0, a.jsx)("div", {
            className: tV.aO,
            children: (0, a.jsx)("div", {
                ref: (e) => {
                    (o.current = e), s(e);
                },
                "aria-label": `At end of ${t}`,
                className: tV.aC,
            }),
        }),
    });
}
function t$(e) {
    let { children: t } = e,
        [, n] = (0, tx.H)({ accept: [] });
    return (0, a.jsx)("div", {
        ref: (e) => {
            n(e);
        },
        children: t,
    });
}
var tz = n(819638),
    tZ = n(260727);
let tq = { origin: { x: -16, y: 0 }, targetWidth: 48, targetHeight: 48, offset: { x: 0, y: 0 } };
function tX(e) {
    (0, te.L3)(e, async () => {
        let { default: e } = await n.e("117288").then(n.bind(n, 4571));
        return (t) => (0, a.jsx)(e, { ...t });
    });
}
function tQ(e) {
    let { disableTooltip: t, lastTargetNode: n } = e,
        i = (0, A.yK)([ek.A], () => ek.A.getGuildsArray()),
        r = (0, A.bG)([eT.default], () => eT.default.getCurrentUser()),
        l = s.useMemo(() => i.some((e) => (0, tU.bM)(e, r)), [i, r]),
        o = (0, tm.useModalsStore)((e) => (0, tm.hasModalOpenSelector)(e, tz.fc)),
        { analyticsLocations: d } = (0, L.Ay)();
    return (0, a.jsx)("div", {
        className: tZ.Uq,
        children: (0, a.jsxs)(tP.A, {
            tutorialId: l ? "create-more-servers" : "create-first-server",
            inlineSpecs: tq,
            position: "right",
            disabled: t,
            children: [
                (0, a.jsx)(tR, {
                    showPill: !1,
                    id: "create-join-button",
                    onClick: function () {
                        (0, tb.Sn)()
                            ? (0, tM.A)({
                                  analyticsSource: { page: eS.ThZ.CREATE_JOIN_GUILD_MODAL },
                                  analyticsLocation: {
                                      page: eS.ThZ.CREATE_JOIN_GUILD_MODAL,
                                      section: eS.JJy.GUILD_CAP_UPSELL_MODAL,
                                  },
                                  analyticsLocations: d,
                              })
                            : tv.A.openCreateGuildModal({ location: "Guild List" });
                    },
                    selected: o,
                    onContextMenu: tX,
                    tooltip: es.intl.string(es.t.l5WIbf),
                    icon: tD.U,
                }),
                null != n &&
                    (0, a.jsx)(tY, { name: es.intl.string(es.t["45xjM5"]), targetNode: n, below: !0, noCombine: !0 }),
            ],
        }),
    });
}
var tJ = n(565787),
    t0 = n(791606),
    t1 = n(486020),
    t2 = n(183588);
function t3(e) {
    let [t, i] = s.useState(!1),
        r = (0, _.Vd)(`guild-${e.id}`);
    return (0, a.jsx)(F.c, {
        children: (0, a.jsx)(tC, {
            text: e.name,
            children: (0, a.jsx)(M.Q, {
                className: t2.o,
                selected: t,
                lowerBadge: (0, a.jsx)(e9.fk, { icon: (0, tJ.k)(t0.A), disableColor: !0, className: t2._ }),
                children: (0, a.jsx)(P.j, {
                    name: e.name,
                    onMouseEnter: function () {
                        i(!0);
                    },
                    onMouseLeave: function () {
                        i(!1);
                    },
                    onClick: function () {
                        (0, tm.openModalLazy)(async () => {
                            let { default: t } = await n.e("642945").then(n.bind(n, 537560));
                            return (n) => (0, a.jsx)(t, { name: e.name, guildId: e.id, ...n });
                        });
                    },
                    icon:
                        null != e.icon
                            ? t1.Ay.getGuildIconURL({ id: e.id, icon: e.icon, canAnimate: !1, size: 42 })
                            : null,
                    ...r,
                }),
            }),
        }),
    });
}
var t5 = n(696292),
    t4 = n(836480),
    t6 = n(533129),
    t7 = n(726845),
    t8 = n(837057),
    t9 = n(310419),
    ne = n(488995),
    nt = n(324580),
    nn = n(190107);
let ni = s.forwardRef(function (e, t) {
    let { selected: n, onClick: i, questId: r, className: l } = e,
        o = s.useCallback(() => {
            (0, t6.WL)({ source: ne.GlobalDiscoveryAnalyticsLocations.GUILDS_BAR_ICON });
            let e = void 0 !== r ? ne.GlobalDiscoveryTab.QUESTS : t7.A.getField("selectedTab");
            switch (e) {
                case ne.GlobalDiscoveryTab.QUESTS:
                    return (0, t8.transitionToGlobalDiscovery)({
                        tab: ne.GlobalDiscoveryTab.QUESTS,
                        location: nn.rE.DISCOVERY_COMPASS,
                        questContent: t5.u.DISCOVERY_COMPASS,
                        questId: r,
                    });
                case ne.GlobalDiscoveryTab.SERVERS:
                    return (0, t8.transitionToGlobalDiscovery)({
                        tab: ne.GlobalDiscoveryTab.SERVERS,
                        entrypoint: nt.J8.GUILDS_BAR,
                    });
                case ne.GlobalDiscoveryTab.APPS:
                    return (0, t8.transitionToGlobalDiscovery)({
                        tab: ne.GlobalDiscoveryTab.APPS,
                        newSessionState: {
                            entrypoint: { name: t9.sW.GLOBAL_DISCOVERY_BUTTON },
                            restorePreviousView: !0,
                        },
                    });
                default:
                    return (0, t8.transitionToGlobalDiscovery)({ tab: e });
            }
        }, [r]);
    return (0, a.jsx)(tR, {
        id: "guild-discover-button",
        ref: t,
        className: l,
        onClick: () => {
            o(), void 0 !== i && i();
        },
        selected: n,
        tooltip: es.intl.string(es.t["4nEZLk"]),
        icon: t4.CompassIcon,
    });
});
var nr = n(506774),
    na = n(509963),
    ns = n(111159),
    nl = n(793943),
    no = n(158045),
    nd = n(350972),
    nc = n(677056),
    nu = n(526162),
    n_ = n(174197);
function nE() {
    let [e, t] = (0, A.yK)([eT.default, nu.A], () => [
            nu.A.getCurrentDesktopIcon(),
            no.Ay.isPremium(eT.default.getCurrentUser()),
        ]),
        n = (0, nl.fy)().activePanel === nl.HP.APP_ICON,
        i = (0, n_.gG)(e),
        r = i.id !== nd.LW.DEFAULT && (t || n),
        s = (0, a.jsx)(ns.p, { size: "custom", color: "currentColor", width: 24, height: 24 });
    return null != i && r ? (0, a.jsx)(nc.A, { id: i.id, size: n_.N8.SIZE_48 }) : s;
}
var nA = n(531260),
    nh = n(411976),
    nI = n(912309),
    nf = n(400492),
    np = n(354670),
    nT = n(619921),
    nm = n(340829),
    ng = n(966846),
    nS = n(674378),
    nN = n(394953),
    nC = n(202541),
    nO = n(235079),
    nR = n(222219);
let nL = { origin: { x: -16, y: 0 }, targetWidth: 48, targetHeight: 48, offset: { x: 0, y: 0 } };
function ny(e) {
    let { selected: t, user: n, badge: i, link: r, showProgressBadge: l } = e,
        [o, d] = s.useState(!1),
        [c, u] = s.useState(!1),
        [E, A] = s.useState(null),
        [h, I] = s.useState(0),
        f = (0, _.Vd)("home"),
        p = (0, nl.fy)().activePanel === nl.HP.APP_ICON;
    function T() {
        A(null), I(0), clearTimeout(E);
    }
    if (null == n) return null;
    let m = es.intl.string(es.t.YUU0RF);
    c && (m = nr.w.get(eS.wqg) ? es.intl.string(es.t["nkq1l+"]) : es.intl.string(es.t.Be8Q5E));
    let g = null;
    !t && l && (g = (0, a.jsx)(na.A, { className: nR.Cp, determineOwnVisibility: !1 }));
    let S = t || o || p,
        N = (0, a.jsx)(M.Q, {
            selected: !0,
            lowerBadge: i > 0 ? (0, V.wN)(i) : null,
            upperBadge: g,
            lowerBadgeSize: { width: (0, e9.o6)(i) },
            children: (0, a.jsx)(P.j, {
                onMouseEnter: () => d(!0),
                onMouseLeave: () => d(!1),
                onClick: function () {
                    if (!__OVERLAY__ && (null != E && clearTimeout(E), A(setTimeout(T, 500)), I(h + 1), 15 === h)) {
                        T();
                        let e = !nr.w.get(eS.wqg);
                        nr.w.set(eS.wqg, e),
                            e && nr.w.set(nO.L, !0),
                            e ? (0, nf.Ak)("discodo") : (0, nf.Ak)("user_leave"),
                            u(!0),
                            setTimeout(() => {
                                u(!1);
                            }, 1e3);
                    }
                },
                selected: S,
                ariaLabel: es.intl.string(es.t.YUU0RF),
                "aria-owns": "guild-list-unread-dms",
                "aria-selected": t,
                ...f,
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
                children: (0, a.jsx)(nE, {}),
            }),
        });
    return (0, a.jsx)("div", {
        className: nR.Uq,
        children: (0, a.jsx)(tP.A, {
            inlineSpecs: nL,
            tutorialId: "friends-list",
            position: "right",
            children: (0, a.jsxs)(F.c, {
                children: [
                    (0, a.jsx)(k.A, { overlay: !0, selected: t, hovered: o }),
                    (0, a.jsx)(tC, { hideOnClick: !0, text: m, selected: t, children: N }),
                ],
            }),
        }),
    });
}
function nD() {
    let e = (function () {
            let e = (0, B.A)((e) => e.guildId),
                { pathname: t } = (0, u.zy)(),
                n = t.startsWith(eS.BVt.GUILD_DISCOVERY) || t.startsWith(eS.BVt.GLOBAL_DISCOVERY),
                i = t.startsWith(eS.BVt.GUILD_MEMBER_VERIFICATION("")),
                r = (0, nN.lI)();
            return null == e && !(n || i || r);
        })(),
        t = (0, A.bG)([ng.A, nm.A], () => {
            let e = (0, na.v)(ng.A.activeItems, nm.A),
                { total: t, progress: n } = nS.zY(e),
                i = nS.uA(n, t);
            return i > 0 && i < 100;
        }),
        n = (0, nI.kX)(),
        i = Object.keys(nC.TP),
        r = (0, nA.A)(),
        { unviewedTrialCount: s, unviewedDiscountCount: l } = (0, A.cf)([np.A], () => ({
            unviewedTrialCount: np.A.getUnacknowledgedOffers(i).length,
            unviewedDiscountCount: np.A.getUnacknowledgedDiscountOffers().length,
        })),
        o = r.fractionalState === nC.xc.NONE ? s + l : 0,
        d = (0, A.bG)([eT.default], () => eT.default.getCurrentUser()),
        c = (0, nh.W)(),
        _ = n + o + c,
        E = _ === o && o > 0 && n + c === 0,
        h = nT.A.getHomeLink();
    return (
        E && (h = eS.BVt.APPLICATION_STORE),
        (0, a.jsx)(ny, {
            selected: e,
            user: d,
            selectedChannelId: Y.Ay.getChannelId(eS.ME),
            badge: _,
            link: h,
            showProgressBadge: t,
        })
    );
}
var nv = n(545328);
function nb(e) {
    let { fullWidth: t } = e;
    return (0, a.jsx)(F.c, { children: (0, a.jsx)("div", { className: o()(nv.t, { [nv.I]: t }) }) });
}
var nM = n(28863),
    nP = n(695366),
    nU = n(919638),
    nw = n(818348),
    nG = n(837669);
function nx() {
    let e = (0, A.bG)([nU.A, ek.A], () => nU.A.unavailableGuilds.filter((e) => null == ek.A.getGuild(e)).length),
        t = (0, _.Vd)("unavailable-guilds-button");
    return e <= 0
        ? null
        : (0, a.jsx)(F.c, {
              children: (0, a.jsx)(tC, {
                  text: es.intl.format(es.t["TnH05/"], { count: e }),
                  children: (0, a.jsx)(nM.Anchor, {
                      href: nw.qF.STATUS,
                      target: "_blank",
                      className: nG.h,
                      "aria-label": es.intl.formatToPlainString(es.t["MEpX+2"], { count: e }),
                      ...t,
                      children: (0, a.jsx)(nP.E, { color: "currentColor", "aria-hidden": !0 }),
                  }),
              }),
          });
}
var nk = n(930235),
    nF = n(317097),
    nV = n(319060),
    nB = n(866323),
    nH = n(817281),
    nj = n(534409),
    nW = n(240248),
    nY = n(678708),
    nK = n(259678),
    n$ = n(140735),
    nz = n(548118),
    nZ = n(327580);
function nq(e) {
    let { guildId: t, animate: n } = e,
        i = (0, A.bG)([ek.A], () => ek.A.getGuild(t), [t]),
        r = (0, m.r)(f.A.modules.guildbar.AVATAR_SIZE);
    return null == i
        ? (0, a.jsx)("div", { className: o()(nZ.VL, nZ.zU), children: (0, a.jsx)(nP.E, { color: "currentColor" }) })
        : (0, a.jsx)(nz.Ay, {
              guild: i,
              animate: n,
              size: nz.Ay.Sizes.MINI,
              iconSize: r,
              lossless: !0,
              className: nZ.VL,
              tabIndex: -1,
          });
}
function nX(e) {
    let { folderNode: t, hovered: n, sorting: i } = e,
        { children: r } = t,
        s = n && i,
        l = (0, a.jsx)("div", {
            className: nZ.hJ,
            children: (0, a.jsx)("div", {
                className: nZ.Eh,
                children: (0, a.jsx)(nY.FolderIcon, { size: "sm", color: "currentColor" }),
            }),
        }),
        d = (0, a.jsx)("div", {
            className: nZ.qJ,
            children: (0, a.jsx)("div", {
                className: nZ.jg,
                children: r.slice(0, 4).map((e) => (0, a.jsx)(nq, { guildId: e.id, animate: n }, e.id)),
            }),
        });
    return (0, a.jsxs)("div", {
        "aria-hidden": !0,
        className: o()({ [nZ.NG]: s, [nZ.yd]: !s }),
        children: [!s && l, d],
    });
}
function nQ(e) {
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
            treeItemProps: { onFocus: I, ...p },
            "aria-setsize": T,
            "aria-posinset": m,
        } = e,
        [g, S] = s.useState(!1),
        N = s.useCallback(() => {
            i || S(!0), A?.(!0);
        }, [i, A]),
        C = s.useCallback(() => {
            i || S(!1), A?.(!1);
        }, [i, A]),
        O = n || null == r ? null : (0, V.oi)(r),
        R =
            !n && l > 0
                ? (0, V.wN)(
                      l,
                      o ? f.A.colors.BACKGROUND_MOD_STRONG.css : f.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                  )
                : null;
    return (0, a.jsx)(nK.vN, {
        children: (0, a.jsxs)(tS.D, {
            className: nZ.H3,
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
                (0, a.jsx)(n$.A, {
                    children: es.intl.formatToPlainString(es.t["90/DwM"], { folderName: d, mentions: l }),
                }),
                (0, a.jsx)(M.Q, {
                    "aria-hidden": !0,
                    isFolder: !0,
                    upperBadge: O,
                    lowerBadge: R,
                    lowerBadgeSize: { width: (0, e9.o6)(l) },
                    children: (0, a.jsx)("div", {
                        className: nZ.vA,
                        children:
                            null != u
                                ? (0, a.jsx)("div", { className: nZ.hJ, children: u })
                                : (0, a.jsx)(nX, { folderNode: t, hovered: g, sorting: i }),
                    }),
                }),
            ],
        }),
    });
}
var nJ = n(573435),
    n0 = n(167579);
function n1(e) {
    let { className: t, isFolder: n } = e,
        i = (0, m.r)(f.A.modules.guildbar.AVATAR_SIZE);
    return (0, a.jsx)(nJ.Ay, {
        mask: nJ.Ay.Masks.SQUIRCLE,
        className: o()(t, n0.OL, { [n0.lQ]: n }),
        width: i,
        height: i,
        children: (0, a.jsx)("div", { className: n0.ZU }),
    });
}
var n2 = n(114329),
    n3 = n(937067);
let n5 = (0, nW.xI)(nV.A.FOLDER_ITEM_ANIMATION_DURATION),
    n4 = (0, e7.animated)(p.B),
    n6 = s.memo(function (e) {
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
                unread: I = !1,
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
            V = U || G,
            B = (0, nj.qK)("FolderItem");
        s.useEffect(() => {
            g && w(!1);
        }, [g]);
        let [{ dragging: H }, j] = (0, nk.i)({
                type: eH.PJ.FOLDER,
                item: () => (S?.(), { type: eH.PJ.FOLDER, nodeId: l.id }),
                end() {
                    N?.(), (0, nH.um)(eF.Ay.getCompatibleGuildFolders());
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
            Z =
                ((t = P.length),
                (n = (0, m.r)(f.A.modules.guildbar.FOLDER_SIZE)),
                (i = (0, m.r)(f.A.modules.guildbar.AVATAR_SIZE)),
                t * (i + (r = (0, m.r)(f.A.space.SPACE_XS))) - r + (r - (n - i) / 2) + (0, m.r)(f.A.space.SPACE_4)),
            q = (0, nB.p)(!H && u, {
                from: { height: 0 },
                enter: { height: 1 },
                leave: { height: 0 },
                config: { duration: n5 },
            }),
            X = s.useCallback((e) => d?.(b, e), [d, b]),
            Q = (0, a.jsxs)(F.c, {
                children: [
                    (0, a.jsx)(k.A, { overlay: !0, disabled: H || u, hovered: U, selected: c, unread: I }),
                    (0, a.jsx)(tC, {
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
                            className: o()(nZ.MJ, { [nZ.L0]: "icon" === L || B, [n3.oR]: !H && G && !u }),
                            "data-dnd-name": K,
                            children: H
                                ? (0, a.jsx)(n1, { isFolder: !0 })
                                : (0, a.jsx)(nQ, {
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
                    T ? (0, a.jsx)(tY, { name: K, targetNode: l, onDragOverChanged: W }) : null,
                ],
            }),
            J = null != l.color ? l.color : n2.DO,
            ee = J === n2.DO ? void 0 : (0, nF.Hl)(J);
        return (0, a.jsxs)("div", {
            ref: X,
            className: o()(nZ.qc, { [nZ.Av]: u, [nZ.Lg]: V }),
            style: { "--custom-folder-color": ee ?? "" },
            "data-drop-hovering": G,
            children: [
                !H && u && (0, a.jsx)("span", { className: nZ.GO }),
                Q,
                q((e, t, n) => {
                    let { key: i } = n;
                    return (
                        t &&
                        (0, a.jsx)(
                            n4,
                            {
                                id: z,
                                role: "group",
                                as: "ul",
                                gap: "xs",
                                className: nZ.TN,
                                style: { height: e.height.to((e) => e * Z) },
                                "aria-label": l.name,
                                children: P.map((t, n) => R(t, n, P.length, e.height)),
                            },
                            i,
                        )
                    );
                }),
                T && u ? (0, a.jsx)(tK, { name: K, targetNode: l }) : null,
            ],
        });
    });
var n7 = n(354583);
let n8 = s.memo(function (e) {
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
        { folderNode: I, ...f } = e,
        { id: p, name: T, color: m, children: g } = I,
        S = g.map((e) => e.id),
        N = (0, B.A)((e) => e.guildId),
        C = (0, A.bG)([eY.A], () => eY.A.isFolderExpanded(p)),
        O = (function (e) {
            let t = e.children
                    .map((e) => {
                        let t = e.id,
                            n = ek.A.getGuild(t);
                        return null != n ? n.name : null;
                    })
                    .filter(eg.Vq),
                n = 2 * eS.F05,
                i = [];
            for (let e of t) (e.length < n || 0 === i.length) && (i.push(e), (n -= e.length));
            return `${i.join(", ")}${i.length < t.length ? ", ..." : ""}`;
        })(I),
        R =
            ((t = (0, A.bG)([e6.A], () => e6.A.getGuildId())),
            (i = I.children.map((e) => e.id)),
            (r = null != t && i.includes(t)),
            (l = !1),
            (o = !1),
            (d = !1),
            (c = (0, A.bG)([e6.A], () => e6.A.getChannelId())),
            (_ = null != (u = (0, n7.A)()?.guild_id) && i.includes(u)),
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
            tk.A.toggleGuildFolderExpand(p);
        }, [p]),
        b = s.useCallback(
            (e) => {
                (0, te.L3)(e, async () => {
                    let { default: e } = await n.e("232857").then(n.bind(n, 842112));
                    return (t) =>
                        (0, a.jsx)(e, { ...t, folderId: p, folderName: T, folderColor: m, unread: D || L > 0 });
                });
            },
            [p, T, m, D, L],
        );
    return (0, a.jsx)(n6, {
        ...f,
        folderNode: I,
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
var n9 = n(113494),
    ie = n(821124),
    it = n(212455);
function ii(e) {
    let t = e?.features.has(eS.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL),
        n = (0, A.bG)([it.A, eT.default, ex.Ay], () => {
            if (null == e) return;
            let t = it.A.getRequest(e.id),
                n = eT.default.getCurrentUser();
            if (null == n || null == t || t.userId !== n.id) return;
            let i = ex.Ay.getMember(e.id, t.userId);
            if (!(null != i && !i.isPending) || (0, ie.Oe)(t)) return t.applicationStatus;
        }, [e]);
    return t ? n : void 0;
}
var ir = n(347951),
    ia = n(39304),
    is = n(941426),
    il = n(38405),
    io = n(34162);
let id = new is.Vy("GuildMediaStateShadowCompare"),
    ic = ["audio", "video", "screenshare", "liveStage", "activeEvent", "activity", "isCurrentUserConnected"],
    iu = 0,
    i_ = 0,
    iE = new Map(),
    iA = new Set();
function ih(e, t) {
    return ic.filter((n) => (e[n] ?? !1) !== (t[n] ?? !1));
}
var iI = n(240921),
    ip = (((i = {}).HOOK = "hook"), (i.STORE = "store"), (i.SHADOW = "shadow"), i);
let iT = (0, iI.Ay)({
    kind: "user",
    name: "2026-08-guilds-bar-media-state-store",
    defaultConfig: { source: "hook" },
    variations: { 0: { source: "hook" }, 1: { source: "store" }, 2: { source: "shadow" } },
});
var im = n(478437),
    ig = n(811024),
    iS = n(890615),
    iN = n(508654),
    iC = n(446600),
    iO = n(95701),
    iR = n(280450),
    iL = n(581895);
function iy(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ee.A;
    return null != e && e.type !== im.r.GUILD_STAGE_VOICE && t !== e.id && n.canBasicChannel(eS.hVb.VIEW_CHANNEL, e);
}
function iD(e) {
    let t = (0, A.bG)([en.Ay], () => en.Ay.isMuted(e)),
        n = (0, iL.M)("useGuildMediaState"),
        i = (0, iN.BP)(e),
        r = (0, A.yK)([G.Ay, to.A], () =>
            G.Ay.getEmbeddedActivitiesForGuild(e).filter(
                (e) => !(0, ta.PH)([...e.userIds], to.A.getBlockedOrIgnoredIDs()),
            ),
        ),
        a = (0, x.H)(r[0]?.location),
        s = (0, ig.Gp)(a),
        {
            guildHasVoice: l,
            guildHasVideo: o,
            selectedVoiceChannelHasVideo: d,
        } = (0, A.cf)([Y.Ay, K.A, ek.A, ee.A, W.A, en.Ay], () => {
            let i = Y.Ay.getVoiceChannelId(),
                r = ek.A.getGuild(e)?.afkChannelId,
                a = K.A.getUsersWithVideo(e),
                s = (0, ta.hs)(K.A.getVoiceStates(e));
            return {
                guildHasVoice: (() => {
                    if (t) return !1;
                    for (let t in s) {
                        let i = s[t].channelId;
                        if (
                            null != i &&
                            iy(W.A.getBasicChannel(i), r ?? void 0, ee.A) &&
                            (!n || !en.Ay.isGuildOrCategoryOrChannelMuted(e, i))
                        )
                            return !0;
                    }
                    return !1;
                })(),
                guildHasVideo: (() => {
                    if (t) return !1;
                    for (let t of a) {
                        let i = s[t]?.channelId;
                        if (
                            null != i &&
                            iy(W.A.getBasicChannel(i), r ?? void 0, ee.A) &&
                            (!n || !en.Ay.isGuildOrCategoryOrChannelMuted(e, i))
                        )
                            return !0;
                    }
                    return !1;
                })(),
                selectedVoiceChannelHasVideo: null != i && K.A.hasVideo(i),
            };
        }, [e, t, n]),
        c = iR.default.getId();
    return (0, A.cf)([Y.Ay, W.A, G.Ay, iC.A, j.A, ee.A, en.Ay], () => {
        let a = Y.Ay.getVoiceChannelId(),
            u = W.A.getChannel(a)?.guild_id === e,
            _ = !1,
            E = !1,
            A = !1,
            h = !1,
            I = !1,
            f = !1;
        if (!u && t)
            return {
                audio: _,
                video: h,
                screenshare: I,
                liveStage: A,
                activeEvent: E,
                activity: f,
                isCurrentUserConnected: !1,
            };
        let p = $.default.keys(iC.A.getStageInstancesByGuild(e)).some((e) => {
                let t = W.A.getBasicChannel(e);
                return null != t && (0, iS.A)(t, ee.A);
            }),
            T = u && (W.A.getChannel(a)?.isGuildStageVoice() ?? !1),
            m = !!u && null != j.A.getActiveStreamForUser(c, e),
            g = (0, ta.Mt)(j.A.getAllApplicationStreams()).some(
                (t) => t.guildId === e && (!n || !en.Ay.isGuildOrCategoryOrChannelMuted(e, t.channelId)),
            ),
            S = u && d,
            N = (() => {
                if (s) return r.length > 0;
                for (let e of r) {
                    let t = W.A.getChannel((0, x.H)(e.location));
                    if (null != t && (0, iO.gV)(t.type)) return !0;
                }
                return !1;
            })(),
            C = G.Ay.getEmbeddedActivitiesForGuild(e).length > 0;
        return (
            u
                ? ((_ = !0), (E = i?.channel_id === a), (A = T), (h = S), (I = m), (f = C))
                : ((_ = l), (E = null != i), (A = p), (h = o), (I = g), (f = N)),
            {
                audio: _,
                video: h,
                screenshare: I,
                liveStage: A,
                activeEvent: E,
                activity: f,
                isCurrentUserConnected: u || T,
            }
        );
    }, [e, t, d, c, s, r, i, l, o, n]);
}
function iv(e) {
    return (0, A.bG)([io.A], () => io.A.getGuildMediaState(e), [e]);
}
function ib(e) {
    let t = iT.useConfig({ location: "GuildsBarGuild" }).source;
    switch (s.useRef(t).current) {
        case ip.STORE:
            return iv(e);
        case ip.SHADOW:
            let n, i;
            return (
                (n = iD(e)),
                (i = iv(e)),
                s.useEffect(() => {
                    !(function (e, t, n) {
                        let i = ih(t, n);
                        if (0 === i.length) return;
                        let r = 0 === ih(t, io.A.getGuildMediaState(e)).length,
                            a = ia.HV() ?? "unknown";
                        if (
                            (function (e, t, n) {
                                if (iA.has(e) || (n ? i_ >= 15 : iu >= 15)) return !1;
                                let i = iE.get(t) ?? 0;
                                return !(i >= 3) && (iA.add(e), iE.set(t, i + 1), n ? i_++ : iu++, !0);
                            })(`${a}:${i.join(",")}:${r ? "transient" : "persistent"}`, a, r)
                        ) {
                            var s;
                            let l, o;
                            (l = (s = {
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
                                id.warn(o, s),
                                il.A.captureMessage(o, {
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
                                });
                        }
                    })(e, n, i);
                }, [e, n, i]),
                n
            );
        case ip.HOOK:
            return iD(e);
    }
}
var iM = n(607399),
    iP = n(702841),
    iU = n(658128),
    iw = n(976860),
    iG = n(676279);
function ix(e) {
    let { guild: t, show: n, active: i, onAnimationStart: r, onAnimationRest: s } = e,
        l = {},
        d = {};
    (l.transform = "translate3d(10px, 10px, 0) scale3d(3, 3, 1)"),
        (d.transform = "translate3d(0, 0, 0) scale3d(1, 1, 1)");
    let c = (0, m.r)(f.A.unsafe_rawColors.BRAND_500).hex(),
        u = (0, m.r)(f.A.unsafe_rawColors.PRIMARY_630).hex();
    i && null == t.icon && ((l.backgroundColor = c), (d.backgroundColor = u));
    let _ = (0, nB.p)(n, { from: l, enter: d, leave: l, config: { duration: 100 }, onStart: r, onRest: s });
    return (0, a.jsx)(a.Fragment, {
        children: _(
            (e, n, i) =>
                n &&
                (0, a.jsx)(
                    "div",
                    {
                        className: nZ.qc,
                        children: (0, a.jsx)("div", {
                            className: o()(nZ.MJ, nZ.L0),
                            style: { margin: 0 },
                            children: (0, a.jsx)(e7.animated.div, {
                                className: nZ.NG,
                                style: e,
                                children: (0, a.jsx)("div", {
                                    className: nZ.qJ,
                                    children: (0, a.jsx)("div", {
                                        className: nZ.jg,
                                        children: (0, a.jsx)(nz.Ay, {
                                            guild: t,
                                            size: nz.Ay.Sizes.SMOL,
                                            className: nZ.VL,
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
var ik = n(454938),
    iF = n(714991),
    iV = n(107773),
    iB = n(513461),
    iH = n(164956),
    ij = n(624265),
    iW = n(970278),
    iY = n(808728);
function iK(e, t, n) {
    return 0 === t.length
        ? null
        : (0, a.jsxs)("div", {
              className: eN.nM,
              children: [
                  (0, a.jsx)(e, { className: eN.RI, color: "currentColor" }),
                  (0, a.jsx)(eI.Ay, { guildId: n, users: t, max: 6 }),
              ],
          });
}
function i$(e) {
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
function iz(e) {
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
        I,
        f,
        p,
        T,
        m,
        g,
        S,
        N,
        C,
        O,
        R,
        { guild: L } = e,
        y = L.id,
        {
            voiceUsersToShow: D,
            stageSpeakers: v,
            numStageListeners: b,
            streamUsersToShow: M,
            embeddedActivitiesUsers: P,
        } = ((t = L.id),
        (n = (0, iL.M)("useGuildTooltipActivity")),
        (i = (0, A.yK)(
            [iY.Ay, iW.A, en.Ay],
            () => [
                ...iY.Ay.getChannels(t)
                    [iY.vM].filter((e) => {
                        let { channel: i } = e;
                        return i.type === eS.rbe.GUILD_VOICE && (!n || !en.Ay.isGuildOrCategoryOrChannelMuted(t, i.id));
                    })
                    .map((e) => {
                        let { channel: t } = e;
                        return t.id;
                    }),
                ...Object.values(iW.A.getThreadsForGuild(t)).flatMap((e) => Object.keys(e)),
            ],
            [t, n],
        )),
        (r = (0, ij.Ay)(t)),
        (l = s.useMemo(() => r.map((e) => e.id), [r])),
        (d = (0, A.bG)([em.Ay], () => em.Ay.getVoiceStates(t), [t])),
        (u = (0, A.bG)([to.A], () => to.A.getBlockedOrIgnoredIDs())),
        (_ = c().flatMap(i, (e) => {
            if (e === L.afkChannelId) return [];
            let t = (d[e] ?? []).map((e) => {
                let { user: t } = e;
                return t;
            });
            return (0, ta.aw)(t, u);
        })),
        (E = (0, A.yK)([ef.A], () =>
            c().flatMap(l, (e) => {
                if (e === L.afkChannelId) return [];
                let t = ef.A.getMutableParticipants(e, ep.ip.SPEAKER)
                    .filter((e) => e.type === ep.wY.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    });
                return (0, ta.aw)(t, u);
            }),
        )),
        (h = (0, A.bG)([ef.A], () => {
            let e = 0;
            for (let t of l) e += ef.A.getParticipantCount(t, ep.ip.AUDIENCE);
            return e;
        })),
        (I = (0, A.yK)([j.A, en.Ay], () => {
            let e = j.A.getAllApplicationStreams()
                .filter((e) => e.guildId === t && (!n || !en.Ay.isGuildOrCategoryOrChannelMuted(t, e.channelId)))
                .map((e) => e.ownerId);
            return (0, ta.F7)(e, u);
        }, [u, t, n])),
        (f = (0, A.yK)([G.Ay], () => {
            let e = G.Ay.getEmbeddedActivitiesForGuild(t).flatMap((e) => Array.from(e.userIds));
            return (0, ta.F7)(e, u);
        }, [t, u])),
        (p = (0, A.yK)([eT.default], () => {
            let e = f.map((e) => eT.default.getUser(e));
            return (0, ta.aw)(e);
        }, [f])),
        (T = (0, A.yK)([eT.default], () => I.map((e) => eT.default.getUser(e)), [I])),
        (m = _.filter((e) => !I.includes(e.id) && !f.includes(e.id))),
        (g = (0, ta.aw)(m)),
        (S = T.filter((e) => null != e && !f.includes(e.id))),
        (N = (0, A.bG)([ts.A], () => ts.A.getUserAffinitiesMap(), [])),
        (C = s.useMemo(() => (0, tl.L)(g, N, "GuildTooltip - nonBlockedUsers"), [g, N])),
        (O = s.useMemo(() => (0, tl.L)(E, N, "GuildTooltip - stageSpeakers"), [E, N])),
        (R = s.useMemo(() => (0, tl.L)(S, N, "GuildTooltip - streamUsers"), [S, N])),
        {
            voiceUsersToShow: C,
            stageSpeakers: O,
            numStageListeners: h,
            streamUsersToShow: R,
            embeddedActivitiesUsers: s.useMemo(() => (0, tl.L)(p, N, "GuildTooltip - embeddedActivitiesUsers"), [p, N]),
            hasActivity: E.length > 0 || m.length > 0 || S.length > 0 || p.length > 0,
        }),
        U = iK(e_.H, D, y),
        w =
            0 === v.length
                ? null
                : (0, a.jsxs)("div", {
                      className: eN.nM,
                      children: [
                          (0, a.jsx)(ed.q, { size: "lg", color: "currentColor", className: eN.RI }),
                          (0, a.jsx)(eI.Ay, { guildId: y, users: v, max: 3 }),
                          (0, a.jsxs)("div", {
                              className: eN.GZ,
                              children: [
                                  (0, a.jsx)(ec.L, { size: "xs", color: "currentColor" }),
                                  (0, a.jsx)(eu.E, {
                                      className: eN._I,
                                      color: "text-default",
                                      variant: "text-xs/normal",
                                      children: b,
                                  }),
                              ],
                          }),
                      ],
                  }),
        x = iK(eE.F, M, y),
        k = iK(eA.k, P, y),
        { isMuted: F, muteConfig: V } = (0, A.cf)(
            [en.Ay],
            () => ({ isMuted: en.Ay.isMuted(y), muteConfig: en.Ay.getMuteConfig(y) }),
            [y],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            w,
            U,
            x,
            k,
            F ? (0, a.jsx)(i$, { muteConfig: V, className: o()(eN.LM, { [eN.Sx]: null != U || null != x }) }) : null,
        ],
    });
}
function iZ(e) {
    let { guildJoinRequestStatus: t } = e;
    return (0, a.jsx)(eu.E, {
        className: eN.BT,
        color: "text-default",
        variant: "text-xs/normal",
        children: (function (e) {
            switch (e) {
                case iB.B5.SUBMITTED:
                    return es.intl.string(es.t["9KFC98"]);
                case iB.B5.REJECTED:
                    return es.intl.string(es.t["TQY/Rd"]);
                case iB.B5.APPROVED:
                    return es.intl.string(es.t.WXHcq5);
                default:
                    return es.intl.string(es.t.fjHFC8);
            }
        })(t),
    });
}
function iq(e) {
    let { guild: t } = e,
        n = (0, ik.A)(t),
        i = ii(t),
        r = null != i ? (0, a.jsx)(iZ, { guildJoinRequestStatus: i }) : null,
        s = (0, a.jsx)(iz, { guild: t }),
        l = (0, A.bG)([iH.A], () => iH.A.isViewingRoles(t.id)),
        d = (0, ir.Ig)(t);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: o()(eN.nM, eN.Dl),
                children: [
                    n
                        ? (0, a.jsx)(iV.A, { disableBoostClick: !0, guild: t, className: eN.WX })
                        : (0, a.jsx)(iF.A, { guild: t, size: 20, className: eN.aL }),
                    (0, a.jsx)("span", { className: o()(eN.cN, eN.NT), children: t.name }),
                ],
            }),
            d
                ? (0, a.jsx)(eu.E, {
                      className: eN.Ef,
                      color: "text-default",
                      variant: "text-sm/medium",
                      children: es.intl.string(es.t["2n0/Fk"]),
                  })
                : null,
            l
                ? (0, a.jsx)(eu.E, {
                      className: eN.BT,
                      color: "text-default",
                      variant: "text-xs/normal",
                      children: es.intl.string(es.t["5LwN89"]),
                  })
                : (r ?? s),
        ],
    });
}
function iX(e) {
    let { guild: t, disabled: n = !1, "aria-label": i = !1, children: r } = e,
        l = s.useMemo(
            () =>
                n
                    ? null
                    : (0, a.jsx)(eu.E, {
                          variant: "text-md/semibold",
                          color: "text-default",
                          className: eN.A_,
                          children: (0, a.jsx)(iq, { guild: t }),
                      }),
            [n, t],
        );
    return (0, a.jsx)(eh.m, {
        __unsupportedReactNodeAsText: l,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": !1 === i ? void 0 : i,
        asContainer: !0,
        children: r,
    });
}
let iQ = { analyticsSource: { page: eS.liQ.GUILD_CHANNEL, section: eS.JJy.CHANNEL_LIST, object: eS.ZSU.CHANNEL } };
function iJ(e, t) {
    (0, te.L3)(e, async () => {
        let { default: e } = await Promise.all([
            n.e("866676"),
            n.e("876364"),
            n.e("925807"),
            n.e("996907"),
            n.e("816027"),
            n.e("562772"),
            n.e("8159"),
            n.e("207322"),
            n.e("361922"),
            n.e("65764"),
            n.e("186856"),
            n.e("3942"),
            n.e("766811"),
            n.e("295570"),
            n.e("686117"),
            n.e("936875"),
            n.e("862179"),
            n.e("722784"),
            n.e("326794"),
            n.e("906470"),
            n.e("860350"),
            n.e("774550"),
            n.e("376991"),
            n.e("923981"),
            n.e("618416"),
            n.e("706073"),
            n.e("227512"),
            n.e("923108"),
            n.e("891473"),
            n.e("414571"),
            n.e("1955"),
            n.e("341161"),
            n.e("401696"),
            n.e("542516"),
            n.e("661630"),
            n.e("349687"),
            n.e("128804"),
            n.e("71151"),
            n.e("227853"),
            n.e("286615"),
            n.e("311541"),
            n.e("472847"),
            n.e("870088"),
            n.e("287353"),
            n.e("586662"),
            n.e("758053"),
            n.e("247471"),
            n.e("889002"),
            n.e("709976"),
            n.e("807432"),
            n.e("630954"),
            n.e("750955"),
            n.e("28945"),
            n.e("767311"),
            n.e("571084"),
            n.e("279774"),
            n.e("771593"),
            n.e("602980"),
            n.e("146577"),
            n.e("410470"),
            n.e("245726"),
            n.e("711562"),
            n.e("661157"),
            n.e("609110"),
            n.e("157064"),
            n.e("156957"),
            n.e("918786"),
            n.e("701335"),
            n.e("257935"),
            n.e("724086"),
            n.e("877223"),
            n.e("448738"),
            n.e("590994"),
            n.e("258407"),
            n.e("894292"),
            n.e("153302"),
            n.e("836576"),
            n.e("253453"),
            n.e("82937"),
            n.e("829096"),
            n.e("750370"),
            n.e("972281"),
            n.e("641278"),
            n.e("761973"),
            n.e("636909"),
            n.e("466592"),
            n.e("742752"),
            n.e("282050"),
            n.e("436101"),
            n.e("976888"),
            n.e("387970"),
            n.e("847445"),
            n.e("919659"),
            n.e("698136"),
            n.e("718368"),
            n.e("983513"),
            n.e("76928"),
            n.e("355502"),
            n.e("528311"),
            n.e("38012"),
            n.e("411938"),
            n.e("653383"),
            n.e("696490"),
            n.e("31159"),
            n.e("952068"),
            n.e("451044"),
            n.e("772565"),
            n.e("533781"),
            n.e("737853"),
            n.e("461815"),
            n.e("524434"),
            n.e("854326"),
            n.e("984"),
            n.e("226229"),
            n.e("981833"),
            n.e("931937"),
            n.e("516497"),
            n.e("24774"),
            n.e("489565"),
            n.e("684231"),
            n.e("570690"),
            n.e("886631"),
            n.e("74336"),
            n.e("978898"),
            n.e("406322"),
            n.e("942571"),
            n.e("464759"),
            n.e("763343"),
            n.e("194704"),
            n.e("403643"),
            n.e("812793"),
            n.e("293612"),
            n.e("703728"),
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
            n.e("914175"),
            n.e("529366"),
            n.e("990185"),
            n.e("444038"),
            n.e("849162"),
            n.e("660201"),
            n.e("180644"),
            n.e("179301"),
            n.e("918347"),
            n.e("588861"),
            n.e("689521"),
            n.e("940226"),
            n.e("942305"),
            n.e("147637"),
            n.e("84993"),
            n.e("343298"),
            n.e("564664"),
            n.e("842631"),
            n.e("852197"),
            n.e("553627"),
            n.e("459257"),
            n.e("790484"),
            n.e("765073"),
            n.e("218366"),
            n.e("464452"),
            n.e("381673"),
            n.e("714144"),
            n.e("458855"),
            n.e("305161"),
            n.e("845486"),
            n.e("401425"),
            n.e("120561"),
            n.e("880186"),
            n.e("58353"),
            n.e("17256"),
            n.e("40416"),
            n.e("76283"),
            n.e("792513"),
            n.e("292699"),
            n.e("377016"),
            n.e("385504"),
            n.e("269714"),
            n.e("331696"),
            n.e("59766"),
            n.e("58333"),
            n.e("806391"),
            n.e("803511"),
            n.e("202342"),
            n.e("424216"),
            n.e("840100"),
            n.e("22865"),
            n.e("173896"),
            n.e("57358"),
            n.e("866539"),
            n.e("722765"),
            n.e("969003"),
            n.e("145006"),
            n.e("33909"),
            n.e("287116"),
            n.e("754596"),
            n.e("357625"),
            n.e("308093"),
            n.e("401106"),
            n.e("498589"),
            n.e("21486"),
            n.e("304419"),
            n.e("622936"),
            n.e("45268"),
            n.e("617281"),
            n.e("164716"),
            n.e("170282"),
            n.e("259465"),
            n.e("655327"),
            n.e("335532"),
            n.e("56955"),
            n.e("463455"),
            n.e("403655"),
            n.e("317615"),
            n.e("577154"),
            n.e("877730"),
            n.e("611899"),
            n.e("527552"),
            n.e("769266"),
            n.e("487873"),
            n.e("765626"),
            n.e("683302"),
            n.e("660608"),
            n.e("744554"),
            n.e("541137"),
            n.e("331212"),
            n.e("638259"),
            n.e("339072"),
            n.e("207998"),
            n.e("683621"),
            n.e("711162"),
            n.e("275179"),
            n.e("289789"),
            n.e("116125"),
            n.e("977412"),
            n.e("19385"),
            n.e("692811"),
            n.e("762332"),
            n.e("208607"),
            n.e("905581"),
            n.e("249681"),
            n.e("869047"),
            n.e("996382"),
            n.e("62052"),
            n.e("771657"),
            n.e("122218"),
            n.e("863232"),
            n.e("364827"),
            n.e("907167"),
            n.e("784569"),
            n.e("861060"),
            n.e("910471"),
            n.e("752457"),
            n.e("960235"),
            n.e("77333"),
            n.e("718573"),
            n.e("882722"),
            n.e("950106"),
            n.e("797595"),
            n.e("147662"),
            n.e("344057"),
            n.e("413736"),
            n.e("128504"),
            n.e("331988"),
            n.e("262156"),
            n.e("544571"),
            n.e("234303"),
            n.e("40291"),
            n.e("402368"),
            n.e("733115"),
            n.e("397270"),
            n.e("373122"),
            n.e("396656"),
            n.e("293159"),
            n.e("755936"),
            n.e("489088"),
            n.e("730760"),
            n.e("994723"),
            n.e("330316"),
            n.e("362931"),
            n.e("745959"),
            n.e("858529"),
            n.e("834552"),
            n.e("207264"),
            n.e("481987"),
            n.e("958038"),
            n.e("171202"),
            n.e("875201"),
            n.e("576909"),
            n.e("406174"),
            n.e("708757"),
            n.e("993103"),
            n.e("585968"),
            n.e("481647"),
            n.e("776273"),
            n.e("428367"),
            n.e("776602"),
            n.e("140402"),
            n.e("407170"),
            n.e("811310"),
            n.e("391763"),
            n.e("21921"),
            n.e("307575"),
            n.e("572963"),
            n.e("752511"),
            n.e("554241"),
            n.e("724303"),
            n.e("942724"),
            n.e("393766"),
            n.e("913823"),
            n.e("571210"),
            n.e("521930"),
            n.e("559460"),
            n.e("331549"),
            n.e("343437"),
            n.e("139970"),
            n.e("676418"),
            n.e("940258"),
            n.e("292583"),
            n.e("875842"),
            n.e("166495"),
            n.e("385653"),
            n.e("401518"),
            n.e("198329"),
            n.e("9205"),
            n.e("308555"),
            n.e("88342"),
            n.e("323354"),
            n.e("930233"),
            n.e("586127"),
            n.e("146070"),
            n.e("88599"),
            n.e("836863"),
            n.e("221200"),
            n.e("472789"),
            n.e("854622"),
            n.e("95340"),
            n.e("976894"),
            n.e("25949"),
            n.e("344502"),
            n.e("617249"),
            n.e("171273"),
            n.e("311802"),
            n.e("437065"),
            n.e("179049"),
            n.e("709640"),
            n.e("362422"),
            n.e("590365"),
            n.e("989088"),
            n.e("952548"),
            n.e("817989"),
            n.e("934771"),
            n.e("37977"),
            n.e("691671"),
            n.e("49653"),
            n.e("147626"),
            n.e("795596"),
            n.e("382644"),
            n.e("203589"),
            n.e("613867"),
            n.e("553984"),
            n.e("892471"),
            n.e("943780"),
            n.e("720590"),
            n.e("884601"),
            n.e("31267"),
            n.e("886414"),
            n.e("480830"),
            n.e("451224"),
            n.e("179745"),
            n.e("334409"),
            n.e("280854"),
            n.e("335395"),
            n.e("981004"),
            n.e("174630"),
            n.e("692215"),
            n.e("886246"),
            n.e("945413"),
            n.e("146844"),
            n.e("163235"),
            n.e("94983"),
            n.e("859546"),
            n.e("486672"),
            n.e("75029"),
            n.e("448948"),
            n.e("963244"),
            n.e("632756"),
            n.e("564850"),
            n.e("170104"),
            n.e("477970"),
            n.e("868214"),
            n.e("902564"),
            n.e("371477"),
            n.e("67878"),
            n.e("631965"),
            n.e("758946"),
            n.e("214285"),
            n.e("248330"),
            n.e("91450"),
            n.e("795752"),
            n.e("803332"),
            n.e("408362"),
            n.e("741678"),
            n.e("772401"),
            n.e("852617"),
            n.e("632364"),
            n.e("102698"),
            n.e("204744"),
            n.e("36227"),
            n.e("737021"),
            n.e("416731"),
            n.e("818465"),
            n.e("971430"),
            n.e("976516"),
            n.e("400501"),
            n.e("886243"),
            n.e("985794"),
            n.e("767837"),
            n.e("473384"),
            n.e("282783"),
            n.e("432209"),
            n.e("305557"),
            n.e("859991"),
            n.e("10039"),
            n.e("368062"),
            n.e("793438"),
            n.e("709371"),
            n.e("845437"),
            n.e("474610"),
            n.e("844780"),
            n.e("939171"),
            n.e("987478"),
            n.e("170955"),
            n.e("883952"),
            n.e("229666"),
            n.e("589916"),
            n.e("460773"),
            n.e("444567"),
            n.e("208018"),
            n.e("665927"),
            n.e("968763"),
            n.e("159957"),
            n.e("253320"),
            n.e("458273"),
            n.e("606949"),
            n.e("820930"),
            n.e("309004"),
            n.e("599976"),
            n.e("26001"),
            n.e("414591"),
            n.e("652111"),
            n.e("119454"),
            n.e("449145"),
            n.e("434786"),
            n.e("615109"),
            n.e("294607"),
            n.e("203930"),
            n.e("982730"),
            n.e("708536"),
            n.e("903663"),
            n.e("457458"),
            n.e("506045"),
            n.e("201243"),
            n.e("618706"),
            n.e("430997"),
            n.e("800872"),
            n.e("728136"),
            n.e("259797"),
            n.e("452531"),
            n.e("338601"),
            n.e("368530"),
            n.e("136894"),
            n.e("215920"),
            n.e("275859"),
            n.e("216084"),
            n.e("978046"),
            n.e("127659"),
            n.e("66580"),
            n.e("343116"),
            n.e("36624"),
            n.e("610943"),
            n.e("283230"),
            n.e("582486"),
            n.e("273669"),
            n.e("507775"),
            n.e("22547"),
            n.e("760989"),
            n.e("466147"),
            n.e("50342"),
            n.e("428235"),
            n.e("303710"),
            n.e("421778"),
            n.e("161058"),
            n.e("333097"),
            n.e("280098"),
            n.e("409391"),
            n.e("645830"),
            n.e("810262"),
            n.e("741786"),
            n.e("995602"),
            n.e("346313"),
            n.e("463726"),
            n.e("811817"),
            n.e("553683"),
            n.e("929569"),
            n.e("636002"),
            n.e("343233"),
            n.e("756684"),
            n.e("256373"),
            n.e("583827"),
            n.e("242749"),
            n.e("556026"),
            n.e("416301"),
            n.e("722191"),
            n.e("225961"),
            n.e("359702"),
            n.e("708364"),
            n.e("138733"),
            n.e("399108"),
            n.e("452823"),
            n.e("556967"),
            n.e("647011"),
            n.e("466913"),
            n.e("983947"),
            n.e("71719"),
            n.e("419690"),
            n.e("893767"),
            n.e("213848"),
            n.e("39214"),
            n.e("588307"),
            n.e("514878"),
            n.e("676376"),
            n.e("426508"),
            n.e("361347"),
            n.e("991643"),
            n.e("842935"),
            n.e("73091"),
            n.e("269178"),
            n.e("886692"),
            n.e("752695"),
            n.e("916373"),
            n.e("81398"),
            n.e("324484"),
            n.e("925172"),
            n.e("232347"),
            n.e("8458"),
            n.e("11810"),
            n.e("591977"),
            n.e("890152"),
            n.e("646570"),
            n.e("287973"),
            n.e("174337"),
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
            n.e("995210"),
            n.e("630313"),
            n.e("198415"),
            n.e("721300"),
            n.e("553584"),
            n.e("317699"),
            n.e("257032"),
            n.e("845322"),
            n.e("94832"),
            n.e("426386"),
            n.e("865338"),
            n.e("588860"),
        ]).then(n.bind(n, 860417));
        return (n) => (0, a.jsx)(e, { ...n, guild: t });
    });
}
let i0 = s.memo(function (e) {
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
            contextMenu: g = iJ,
            draggable: S = !1,
            sorting: N = !1,
            preloadOnClick: C = !0,
            guildJoinRequestStatus: O,
            height: R,
            "aria-setsize": L,
            "aria-posinset": y,
        } = e,
        { id: D, parentId: v } = t,
        b = e.upperBadge ?? (h ? (0, V.em)() : null != A ? (0, V.oi)(A) : void 0),
        U = e.lowerBadge ?? void 0;
    null == U && p > 0
        ? (U =
              (0, V.wN)(
                  p,
                  T ? f.A.colors.BACKGROUND_MOD_STRONG.css : f.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
              ) ?? void 0)
        : null == U && null != O && (U = (0, V.eW)({ guildJoinRequestStatus: O }) ?? void 0);
    let G = e.lowerBadgeSize ?? { width: (0, e9.o6)(p) },
        [{ dragging: x }, B] = (0, nk.i)({
            type: eH.PJ.GUILD,
            item: () => (
                requestAnimationFrame(() => {
                    i?.();
                }),
                { type: t.type, nodeId: t.id }
            ),
            end() {
                r?.(), (0, nH.um)(eF.Ay.getCompatibleGuildFolders());
            },
            collect: (e) => ({ dragging: e.isDragging() }),
        }),
        j = (0, _.Vd)(D ?? eS.dJq, null != v ? 2 : 1),
        [W, Y] = s.useState(!1),
        K = !N && W,
        [$, z] = s.useState(!1),
        [Z, q] = s.useState(!1),
        [X] = s.useState(() => new I.J_(70, () => q(!0))),
        Q = (0, iG.nr)() && !iM.Fr;
    s.useEffect(() => () => X.cancel(), [X]);
    let J = s.useCallback(() => {
            null != l ? (0, iw.pX)(l, { state: iQ }) : (0, H.u)(D, { state: iQ });
        }, [D, l]),
        ee = s.useCallback(() => {
            if (null != l || null == d || h || !C) return;
            let e = (0, iU.W)(d.id);
            null != e && w.A.preload(d.id, e);
        }, [l, d, h, C]),
        et = (0, iP.bG)([ex.Ay], () => ex.Ay.isCurrentUserGuest(D)),
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
                e ? X.delay() : (X.cancel(), q(!1));
            },
            [X],
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
        ed = (0, m.r)(f.A.modules.guildbar.AVATAR_SIZE);
    if (null == d) return null;
    let ec = d.name;
    if (
        (p > 0
            ? (ec = es.intl.formatToPlainString(es.t["/uzRss"], { guildName: d.name, mentions: p }))
            : E && (ec = es.intl.formatToPlainString(es.t.lzqe42, { guildName: d.name })),
        null != A)
    ) {
        let e = [];
        A.activeEvent && e.push(es.intl.string(es.t.dHvJ2p)),
            A.liveStage && e.push(es.intl.string(es.t.OO7ndG)),
            A.screenshare && e.push(es.intl.string(es.t.wsHMZ7)),
            A.video && e.push(es.intl.string(es.t.BrLCS0)),
            A.audio && e.push(es.intl.string(es.t.jPBhKy)),
            A.activity && e.push(es.intl.string(es.t.Y3Gii5)),
            e.length > 0 && (ec = `${ec}, ${e.join(" ")}`);
    }
    let eu = (0, a.jsx)(ix, {
            guild: d,
            show: Z,
            active: u,
            onAnimationStart: function () {
                z(Z);
            },
            onAnimationRest: function () {
                Z || z(!1);
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
                  icon: (0, tU.Iv)(d, 2 * ed, K && c, !0),
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
                                B(e);
                            }
                          : void 0,
                      "data-dnd-name": d.name,
                      "data-drop-hovering": Z,
                      children: (0, a.jsx)(P.j, {
                          ariaLabel: ec,
                          name: d.name,
                          onClick: J,
                          onMouseEnter: ea,
                          onMouseLeave: el,
                          onMouseDown: ee,
                          onContextMenu: en,
                          onKeyDown: ei,
                          icon: (0, tU.Iv)(d, 2 * ed, K && c, !0),
                          selected: u || K,
                          ...j,
                          "aria-setsize": L,
                          "aria-posinset": y,
                          "aria-selected": u,
                      }),
                  }),
              }),
        eE = Z || $ ? eu : e_,
        eA = (0, a.jsx)(t$, { children: (0, a.jsx)(n1, {}) }),
        eh = Q
            ? (0, a.jsx)(e7.animated.div, {
                  ref: S
                      ? (e) => {
                            B(e);
                        }
                      : void 0,
                  "data-dnd-name": d.name,
                  style: { scale: null == R ? 1 : R },
                  "data-drop-hovering": Z,
                  className: o()(n3.rN, { [n3.p9]: N, [n3.oR]: Z, [n3.wH]: Z || u }),
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
                  className: o()(n3.rN, { [n3.p9]: N, [n3.oR]: Z, [n3.wH]: Z || u }),
                  "data-drop-hovering": Z,
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
            (0, a.jsx)(iX, { guild: d, disabled: N, isDragging: x, children: x ? eA : eh }),
            S ? (0, a.jsx)(tY, { name: d.name, targetNode: t, onDragOverChanged: er }) : null,
        ],
    });
});
var i1 = n(64061);
let i2 = s.memo(function (e) {
    let { guildNode: t, lowerBadge: n } = e,
        i = t.id,
        r = (0, A.bG)([ek.A], () => ek.A.getGuild(i)),
        l = ii(r),
        o = (0, A.bG)([eX.A], () => eX.A.isFocused()),
        d = (0, A.bG)([nU.A], () => nU.A.isUnavailable(i)),
        c = (0, B.A)((e) => e.guildId),
        u = ib(i),
        {
            badge: _,
            unread: E,
            isMentionLowImportance: h,
        } = (0, A.cf)([J.default], () => ({
            badge: J.default.getMentionCount(i),
            isMentionLowImportance: J.default.getIsMentionLowImportance(i),
            unread: J.default.hasUnread(i),
        })),
        I = (0, ir.Ig)(r) && 0 === _,
        f = s.useMemo(
            () =>
                null != n
                    ? n
                    : I
                      ? (0, a.jsx)("div", {
                            className: i1.j,
                            children: (0, a.jsx)(n9.PauseIcon, {
                                size: "custom",
                                color: "currentColor",
                                className: i1.v,
                                width: 10,
                                height: 10,
                            }),
                        })
                      : null,
            [n, I],
        );
    return (0, a.jsx)(i0, {
        ...e,
        guild: r,
        unavailable: d,
        animatable: o,
        selected: c === i,
        badge: _,
        isMentionLowImportance: h,
        lowerBadge: f,
        unread: E,
        mediaState: u,
        guildJoinRequestStatus: l,
    });
});
var i3 = n(922016),
    i5 = n(297264),
    i4 = n(821609),
    i6 = n(339350),
    i7 = n(475743),
    i8 = n(624458),
    i9 = n(408213),
    re = (((r = {})[(r.PENDING_JOIN_REQUESTS_FOLDER = 1)] = "PENDING_JOIN_REQUESTS_FOLDER"), r),
    rt = n(928568);
function rn(e, t) {
    (0, te.L3)(e, async () => {
        let { default: e } = await n.e("49056").then(n.bind(n, 97187));
        return (n) => (0, a.jsx)(e, { ...n, guild: t });
    });
}
function ri(e) {
    let { guildNode: t } = e,
        n = t.id,
        i = (0, A.bG)([it.A], () => it.A.getRequest(n)),
        r = (0, A.bG)([it.A], () => it.A.getJoinRequestGuild(n), [n]),
        s = (0, A.bG)([eX.A], () => eX.A.isFocused()),
        l = (0, A.bG)([ej.A], () => ej.A.getGuildId());
    return null == r
        ? null
        : (0, a.jsx)(i0, {
              guildNode: t,
              guild: r,
              animatable: s,
              draggable: !1,
              selected: n === l,
              preloadOnClick: !1,
              contextMenu: rn,
              lowerBadge:
                  i?.applicationStatus === iB.B5.REJECTED
                      ? (0, V.eW)({ guildJoinRequestStatus: i.applicationStatus })
                      : void 0,
              route: eS.BVt.GUILD_MEMBER_VERIFICATION(n),
          });
}
var rr = n(943536);
function ra(e) {
    let { onActivate: t, children: n } = e,
        i = s.useRef(null),
        r = (0, A.bG)([it.A], () => it.A.hasJoinRequestCoackmark()),
        l = s.useCallback(() => {
            i9.Ay.clearCoachmark();
        }, []),
        o = (0, i7.Ay)(r),
        d = s.useRef(null);
    return (
        s.useEffect(() => {
            r && r !== o && (t(), d.current?.ref?.current?.layerRef?.current?.updatePosition());
        }, [d, r, o, t]),
        (0, a.jsxs)("div", {
            className: rr.kL,
            children: [
                (0, a.jsx)(i3.Y, {
                    ref: d,
                    targetElementRef: i,
                    shouldShow: r,
                    renderPopout: () =>
                        (0, a.jsxs)("div", {
                            className: rr.jC,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: rr.Bm,
                                    children: [
                                        (0, a.jsxs)("div", {
                                            className: rr.q3,
                                            children: [
                                                (0, a.jsx)(i5.D, {
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
                                        (0, a.jsx)(i4.$, {
                                            variant: "primary",
                                            size: "sm",
                                            text: es.intl.string(es.t["4r+amb"]),
                                            fullWidth: !0,
                                            onClick: l,
                                        }),
                                    ],
                                }),
                                (0, a.jsx)("div", { className: rr.ed }),
                            ],
                        }),
                    position: "right",
                    animationPosition: "right",
                    align: "top",
                    spacing: 16,
                    children: (e) => (0, a.jsx)("div", { ...e, className: rr.Ne, ref: i }),
                }),
                n,
            ],
        })
    );
}
function rs(e) {
    let { onActivate: t } = e,
        [n, i] = s.useState(!1),
        r = (0, A.bG)([ej.A], () => ej.A.getGuildId()),
        l = (0, A.bG)([it.A], () => it.A.hasFetchedRequestToJoinGuilds),
        o = (0, rt.A)(),
        d = (0, i7.Ay)(r),
        c = s.useMemo(() => {
            let e = (0, eH.xW)({
                folderId: re.PENDING_JOIN_REQUESTS_FOLDER,
                folderName: es.intl.string(es.t["scsU+l"]),
                expanded: n,
                guildIds: [],
            });
            for (let t of o) e.children.push((0, eH.EL)(t, e.id));
            return e;
        }, [o, n]);
    s.useEffect(() => {
        n && !l && i8.A.fetchRequestToJoinGuilds();
    }, [n, l]);
    let u = null != r && o.includes(r);
    return (s.useEffect(() => {
        !n && u && d !== r && i(!0);
    }, [n, u, d, r]),
    0 === o.length)
        ? null
        : (0, a.jsx)(ra, {
              onActivate: t,
              children: (0, a.jsx)(n6, {
                  folderNode: c,
                  expanded: n,
                  selected: u,
                  draggable: !1,
                  sorting: !1,
                  onExpandCollapse: () => {
                      i(!n), i9.Ay.clearCoachmark();
                  },
                  folderButtonSize: "icon",
                  folderButtonContent: (0, a.jsx)("div", {
                      className: rr.rH,
                      children: (0, a.jsx)(i6.Q, { size: "sm", color: "currentColor" }),
                  }),
                  renderChildNode: function (e, t, n) {
                      return e.type !== eH.PJ.GUILD
                          ? null
                          : (0, a.jsx)(ri, { guildNode: e, "aria-setsize": n, "aria-posinset": t }, e.id);
                  },
              }),
          });
}
function rl(e) {
    let { guildId: t } = e,
        n = s.useMemo(() => (0, eH.EL)(t), [t]),
        i = (0, A.bG)([ek.A], () => ek.A.getGuild(t)),
        r = (0, A.bG)([eX.A], () => eX.A.isFocused()),
        l =
            t ===
            (0, B.A)((e) => {
                let { guildId: t } = e;
                return t;
            }),
        o = ib(t);
    return null == i
        ? null
        : (0, a.jsx)(i0, { guildNode: n, guild: i, animatable: r, selected: l, draggable: !1, mediaState: o });
}
var ro = n(987566);
let rd = (0, D.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("118192"),
                n.e("940226"),
                n.e("12343"),
                n.e("461815"),
                n.e("618416"),
                n.e("524434"),
                n.e("849162"),
                n.e("706073"),
                n.e("227512"),
                n.e("778716"),
                n.e("570973"),
                n.e("481647"),
                n.e("776602"),
                n.e("140402"),
                n.e("391763"),
                n.e("343437"),
                n.e("139970"),
                n.e("472789"),
                n.e("617249"),
                n.e("362422"),
                n.e("382644"),
                n.e("75029"),
                n.e("535321"),
                n.e("844780"),
                n.e("550033"),
                n.e("444567"),
                n.e("665927"),
                n.e("615109"),
                n.e("275133"),
                n.e("480945"),
                n.e("228850"),
                n.e("127659"),
                n.e("65200"),
                n.e("860003"),
                n.e("285802"),
                n.e("941348"),
                n.e("190103"),
                n.e("956096"),
                n.e("303886"),
                n.e("108066"),
                n.e("96296"),
            ]).then(n.bind(n, 153571)),
        webpackId: 153571,
        name: "NotificationsInboxButton",
    }),
    rc = (0, eV.isWindows)() ? 4 : 12 * !(0, eV.isMac)();
function ru(e) {
    return e.startsWith(eS.BVt.GUILD_DISCOVERY) || e.startsWith(eS.BVt.GLOBAL_DISCOVERY);
}
class r_ {
    guildsTree;
    setScrolling;
    setIsScrolledToBottom;
    onScroll;
    sizes;
    scrollerRef = s.createRef();
    nodeRefs = {};
    timeout = new I.Ep();
    observer;
    constructor(e, t, n, i, r) {
        (this.guildsTree = e),
            (this.setScrolling = t),
            (this.setIsScrolledToBottom = n),
            (this.onScroll = i),
            (this.sizes = r),
            (0, eM.u9)(this.getVisibleGuildIds);
    }
    setResizeObserver = () => {
        let e = this.scrollerRef.current?.getScrollerNode();
        null != e && ((this.observer = new ResizeObserver(this.handleScroll)), this.observer.observe(e));
    };
    clearResizeObserver = () => {
        this.observer?.disconnect(), (this.observer = void 0);
    };
    setGuildsTree(e) {
        this.guildsTree = e;
    }
    scrollToGuild = (e, t) => {
        let n = this.scrollerRef.current;
        if (
            null == n ||
            (null == e && ru(window.location.pathname)) ||
            e === eS.sFm.SERVER_DISCOVERY_BADGE ||
            e === eS.sFm.E3_SERVER_DISCOVERY_BADGE
        )
            return;
        if (null == e) return void n.scrollTo({ to: 0, animate: t });
        let i = this.nodeRefs[e];
        for (; null == i; ) {
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
        this.setScrolling(!0),
            this.timeout.start(200, () => this.setScrolling(!1)),
            this._handleScrollDebounced(),
            this._handleScrollThrottled();
    };
    _handleScrollDebounced = c().debounce(() => {
        let e = this.scrollerRef.current;
        if (null == e) return;
        let { scrollTop: t } = e.getScrollerState();
        N.A.updateGuildListScrollTo(t), this.onScroll();
    }, 200);
    _handleScrollThrottled = c().throttle(() => {
        let e = this.scrollerRef.current;
        null != e && this.setIsScrolledToBottom(e.isScrolledToBottom());
    }, 100);
    setNodeRef = (e, t) => {
        this.nodeRefs[e] = t;
    };
}
function rE(e) {
    let { hideDms: t, scrollToTop: n, lurkingGuildIds: i } = e,
        r = (0, v.A)(),
        { shouldShowPopover: l } = (0, b.QQ)(),
        o = s.useRef(!1),
        d = l && r;
    s.useEffect(() => {
        d && !o.current && n(), (o.current = d);
    }, [n, d]);
    let c = (0, A.yK)([ek.A, ex.Ay], () => ek.A.getGuildIds().filter((e) => ex.Ay.isCurrentUserGuest(e))),
        u = i.concat(c),
        { entrypoint: _ } = (0, eU.X8)({ location: "GuildsBar" });
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(nD, {}),
            _ === eU.RK.SERVER_RAIL_TOP && (0, a.jsx)(rd, {}),
            (0, a.jsx)(b.Ay, {}),
            r ? (0, a.jsx)(eb, {}) : null,
            !t && (0, a.jsx)(tT, {}),
            u.map((e) => (0, a.jsx)(rl, { guildId: e }, e)),
            (0, a.jsx)(rs, { onActivate: n }),
        ],
    });
}
function rA(e) {
    let { guildDiscoveryButton: t, disableAppDownload: n, isOverlay: i, renderTreeNode: r, lurkingGuildIds: s } = e,
        [l] = (0, A.yK)([eF.Ay], () => {
            let e = eF.Ay.getGuildsTree();
            return [e, e.version];
        }),
        o = l.getRoots(),
        d = (0, A.yK)([eG.A], () => eG.A.getGeoRestrictedGuilds()).map((e) =>
            (0, a.jsx)(t3, { id: e.id, name: e.name, icon: e.icon }, e.id),
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
            (0, a.jsx)(nx, {}),
            i ? null : (0, a.jsx)(tQ, { disableTooltip: s.length > 0, lastTargetNode: o[o.length - 1] }),
            i ? null : t,
            n ? null : (0, a.jsx)(ty, {}),
        ],
    });
}
function rh(e) {
    var t;
    let { disableAppDownload: n = eV.isPlatformEmbedded, isOverlay: i = !1, className: r, themeOverride: l } = e,
        [d] = (0, A.yK)([eF.Ay], () => {
            let e = eF.Ay.getGuildsTree();
            return [e, e.version];
        }),
        c = (0, A.bG)([eP.A], () => eP.A.lurkingGuildIds()),
        E = s.useMemo(() => (i ? [] : c), [c, i]),
        h = (0, A.bG)([y.A], () => y.A.isFullscreenInContext()),
        { isSorting: p, startSorting: N, stopSorting: O } = (0, eB.A)(),
        D = s.useRef(!1),
        [b] = s.useState(() => new I.Ep()),
        M = s.useRef(null),
        P = s.useRef(null),
        { ref: U, ...w } = (0, _.$y)(),
        G = (0, T.R7)(),
        [x, k] = s.useState(!1),
        F = (0, m.r)(f.A.modules.guildbar.AVATAR_SIZE),
        V = (0, m.r)(f.A.space.SPACE_XS),
        H = (0, v.A)(),
        { pathname: j } = (0, u.zy)(),
        { entrypoint: W } = (0, eU.X8)({ location: "GuildsBar" }),
        Y = +!!H + +(W === eU.RK.SERVER_RAIL_TOP),
        K = s.useMemo(() => {
            let e,
                t,
                n =
                    ((e = F + V),
                    {
                        iconSize: F,
                        iconTotalSize: e,
                        badgeVisibleBuffer: e - 16,
                        separatorSize: (t = 2 + V),
                        heightBeforeGuilds: rc + t + Y * e,
                        bottomInset: 16,
                    });
            return new r_(
                d,
                k,
                eS.tEg,
                () => {
                    M.current?.calculateState(), P.current?.calculateState();
                },
                n,
            );
        }, [F, V, d, Y]);
    s.useEffect(
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
                M.current?.calculateState(), P.current?.calculateState();
            }
            return J.default.addChangeListener(e), () => J.default.removeChangeListener(e);
        }, []);
    let { analyticsLocations: $ } = (0, L.Ay)(R.A.GUILDS_LIST),
        z = ru(j);
    (0, C.u5)(() => {
        if (!D.current && 0 !== d.size) {
            if (!z) {
                let { scrollTop: e } = ew.A.getGuildListDimensions();
                K.scrollTo({ to: e, animate: !1 });
            }
            return (D.current = !0), () => b.stop();
        }
    }),
        s.useEffect(() => {
            if ((K.setGuildsTree(d), D.current || 0 === d.size)) return;
            let e = B.A.getState().guildId;
            K.scrollToGuild(e, !1);
            let t = null;
            return B.A.subscribe((e) => {
                let { guildId: n } = e;
                n !== t && ((t = n), K.scrollToGuild(t, !1));
            });
        }, [d, K]);
    let Z = s.useCallback(() => {
        K.scrollTo({ to: 0, animate: !1 });
    }, [K]);
    (t = K.scrollToGuild),
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
        }, [t]);
    let q = s.useCallback(
            function e(t, n, i) {
                switch (t.type) {
                    case eH.PJ.FOLDER:
                        return (0, a.jsx)(
                            n8,
                            {
                                folderNode: t,
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
                            i2,
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
            [N, O, p, K.setNodeRef],
        ),
        X = (0, a.jsx)(ni, { selected: z, className: ro.ai }),
        Q = W === eU.RK.SERVER_RAIL_BOTTOM;
    return (0, a.jsx)(L.f5, {
        value: $,
        children: (0, a.jsx)(g.N, {
            theme: l,
            children: (e) =>
                (0, a.jsxs)("nav", {
                    className: o()(ro.iE, r, e, { [ro.R]: h }),
                    "aria-label": es.intl.string(es.t.PjnF2t),
                    children: [
                        (0, a.jsx)(e5, {
                            ref: M,
                            isVisible: K.isItemVisible,
                            onJumpTo: K.handleJumpToGuild,
                            className: ro.Xl,
                            barClassName: ro.Sh,
                        }),
                        (0, a.jsxs)("div", {
                            ref: U,
                            ...w,
                            ...G,
                            role: "tree",
                            "aria-multiselectable": !1,
                            className: ro.B2,
                            children: [
                                (0, a.jsxs)(S.zC, {
                                    className: o()({ [ro.XG]: !0, [ro.qw]: x }),
                                    experimental_useStack: !0,
                                    gap: "xs",
                                    ref: K.scrollerRef,
                                    onScroll: K.handleScroll,
                                    children: [
                                        (0, a.jsx)(rE, { scrollToTop: Z, lurkingGuildIds: E }),
                                        (0, a.jsx)(nb, {}),
                                        (0, a.jsx)(rA, {
                                            guildDiscoveryButton: X,
                                            disableAppDownload: n,
                                            isOverlay: i,
                                            renderTreeNode: q,
                                            lurkingGuildIds: E,
                                        }),
                                    ],
                                }),
                                Q &&
                                    (0, a.jsxs)("div", {
                                        children: [
                                            (0, a.jsx)(nb, { fullWidth: !0 }),
                                            (0, a.jsx)("div", { className: ro.JU, children: (0, a.jsx)(rd, {}) }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, a.jsx)(e5, {
                            reverse: !0,
                            ref: P,
                            isVisible: K.isItemVisible,
                            onJumpTo: K.handleJumpToGuild,
                            className: o()(ro.LZ, { [ro.CH]: !i && !Q, [ro.c0]: !i && Q }),
                            barClassName: ro.Sh,
                        }),
                    ],
                }),
        }),
    });
}
let rI = s.memo(
    function (e) {
        let t = (0, O.A)("guildsnav");
        return (0, a.jsx)(_.hD, { navigator: t, children: (0, a.jsx)(rh, { ...e }) });
    },
    (e, t) => !1 === t.isVisible || (0, h.A)(e, t),
);
