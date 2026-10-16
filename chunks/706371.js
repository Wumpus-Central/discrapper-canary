n.d(t, { A: () => i7 });
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
    D = n(749884),
    v = n(771959);
n(321073);
var b = n(862328),
    M = n(67811),
    P = n(27232),
    U = n(308528),
    w = n(933958),
    G = n(969151),
    x = n(941971),
    k = n(900848),
    F = n(771640),
    B = n(366811),
    V = n(345942),
    H = n(616356),
    j = n(734057),
    W = n(309010),
    Y = n(977997),
    K = n(935208),
    $ = n(181079),
    z = n(5180),
    X = n(635233),
    q = n(863005),
    Z = n(152007),
    Q = n(458294),
    J = n(576705),
    ee = n(573163),
    et = n(543465),
    en = n(428784),
    ei = n(43105),
    er = n(384539),
    ea = n(105292),
    es = n(988572);
function el(e) {
    let { targetElementRef: t, onTakeAction: n, onRequestClose: i } = e;
    return (0, r.jsx)(ei.A, {
        targetElementRef: t,
        gradientColor: "nitro-pink",
        position: "right",
        alignmentStrategy: "edge",
        align: "top",
        caretConfig: { align: "start" },
        badge: { type: "beta", variant: "expressive" },
        graphic: { src: es.A, type: "image", aspectRatio: "16/9" },
        title: ea.intl.string(er.default["bu/mLv"]),
        body: ea.intl.string(er.default.kxQJ7q),
        onRequestClose: i,
        actions: [{ text: ea.intl.string(er.default["vN/KQ9"]), onClick: n }],
    });
}
var eo = n(451394),
    ed = n(597601),
    ec = n(834730),
    eu = n(983851),
    e_ = n(183623),
    eE = n(323384),
    eA = n(866665),
    eh = n(104171),
    ef = n(63995),
    eI = n(518769),
    ep = n(287809),
    eT = n(607567),
    em = n(403362),
    eg = n(652215),
    eS = n(785332);
function eN(e, t) {
    return 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              className: eS.nM,
              children: [
                  (0, r.jsx)(e, { className: eS.RI, color: "currentColor" }),
                  (0, r.jsx)(eh.Ay, { guildId: void 0, users: t, max: 6 }),
              ],
          });
}
function eC() {
    let e = (0, E.yK)([$.A, j.A], () =>
            K.default
                .keys($.A.getFavoriteChannels())
                .map((e) => j.A.getChannel(e))
                .filter(em.Vq),
        ),
        t = e.map((e) => e.id),
        n = e.filter((e) => e.type === eg.rbe.GUILD_VOICE),
        i = e.filter((e) => e.type === eg.rbe.GUILD_STAGE_VOICE).map((e) => e.id),
        a = (0, E.yK)(
            [eT.Ay],
            () =>
                d().flatMap(n, (e) =>
                    eT.Ay.getVoiceStatesForChannel(e).map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
                ),
            [n],
        ),
        s = (0, E.yK)([ef.A], () =>
            d().flatMap(i, (e) =>
                ef.A.getMutableParticipants(e, eI.ip.SPEAKER)
                    .filter((e) => e.type === eI.wY.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
            ),
        ),
        l = (0, E.bG)([ef.A], () => {
            let e = 0;
            for (let t of i) e += ef.A.getParticipantCount(t, eI.ip.AUDIENCE);
            return e;
        }),
        o = (0, E.yK)(
            [H.A],
            () =>
                H.A.getAllApplicationStreams()
                    .filter((e) => t.includes(e.channelId))
                    .map((e) => e.ownerId),
            [t],
        ),
        c = (0, E.yK)(
            [w.Ay],
            () => {
                let e = w.Ay.getEmbeddedActivitiesByChannel(),
                    n = [];
                for (let i of t) n.push(...(e.get(i)?.flatMap((e) => Array.from(e.userIds)) ?? []));
                return n;
            },
            [t],
        ),
        u = (0, E.yK)([ep.default], () => c.map((e) => ep.default.getUser(e)), [c]),
        _ = (0, E.yK)([ep.default], () => o.map((e) => ep.default.getUser(e)), [o]),
        A = eN(
            eu.H,
            a.filter((e) => !o.includes(e.id) && !c.includes(e.id)),
        ),
        h =
            0 === s.length
                ? null
                : (0, r.jsxs)("div", {
                      className: eS.nM,
                      children: [
                          (0, r.jsx)(eo.q, { size: "lg", color: "currentColor", className: eS.RI }),
                          (0, r.jsx)(eh.Ay, { guildId: void 0, users: s, max: 3 }),
                          (0, r.jsxs)("div", {
                              className: eS.GZ,
                              children: [
                                  (0, r.jsx)(ed.L, { size: "xs", color: "currentColor" }),
                                  (0, r.jsx)(ec.E, {
                                      className: eS._I,
                                      color: "text-default",
                                      variant: "text-xs/medium",
                                      children: l,
                                  }),
                              ],
                          }),
                      ],
                  }),
        f = eN(
            e_.F,
            _.filter((e) => null != e && !c.includes(e.id)),
        ),
        I = eN(eE.k, u);
    return (0, r.jsxs)(r.Fragment, { children: [h, A, f, I] });
}
function eO() {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: l()(eS.nM, eS.Dl),
                children: (0, r.jsx)("span", { className: l()(eS.cN, eS.NT), children: ea.intl.string(ea.t.wMWyci) }),
            }),
            (0, r.jsx)(eC, {}),
        ],
    });
}
function eR(e) {
    let { "aria-label": t = !1, children: n } = e,
        i = a.useMemo(
            () =>
                (0, r.jsx)(ec.E, {
                    variant: "text-md/semibold",
                    color: "text-default",
                    className: eS.A_,
                    children: (0, r.jsx)(eO, {}),
                }),
            [],
        );
    return (0, r.jsx)(eA.m, {
        __unsupportedReactNodeAsText: i,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": !1 === t ? void 0 : t,
        asContainer: !0,
        children: n,
    });
}
var eL = n(49999),
    ey = n(195572);
let eD = { analyticsSource: { page: eg.liQ.GUILD_CHANNEL, section: eg.JJy.CHANNEL_LIST, object: eg.ZSU.CHANNEL } };
function ev() {
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
        { shouldShowPopover: f, markPopoverAsDismissed: I } = (0, v.QQ)(),
        p = (0, u.Vd)("favorites"),
        T = a.useRef(null),
        [m, g] = a.useState(!1),
        S = (0, en.$)("favorite-server-context"),
        { favoriteGuildMuted: N, favoriteChannels: C } = (0, E.cf)([$.A], () => ({
            favoriteChannels: $.A.getFavoriteChannels(),
            favoriteGuildMuted: $.A.favoriteGuildMuted,
        })),
        O = (0, E.bG)([W.Ay], () => W.Ay.getChannelId(eg.YYv)),
        R = (0, E.bG)([j.A], () => j.A.getChannel(O)),
        L = (0, B.A)((e) => e.guildId),
        y = (0, z.ai)(L),
        { badge: D, unread: ei } = (0, E.cf)([q.A, j.A, Q.default, Z.A, J.A, ee.Ay, et.Ay], () => {
            let e = K.default.keys(C),
                t = new Set();
            return e.reduce(
                (e, n) => {
                    let i = j.A.getChannel(n),
                        r = i?.getGuildId(),
                        a = ee.Ay.getMentionCount(n);
                    if (
                        (t.has(n) || (t.add(n), (e.badge = e.badge + a)),
                        (e.unread = e.unread || (ee.Ay.hasUnread(n) && Q.default.shouldCountChannelUnread(i, a))),
                        null != r)
                    ) {
                        let i = q.A.getActiveJoinedRelevantThreadsForParent(r, n);
                        for (let n in i) {
                            let i = ee.Ay.getMentionCount(n);
                            t.has(n) || (t.add(n), (e.badge += i));
                            let r = j.A.getChannel(n);
                            e.unread = e.unread || (ee.Ay.hasUnread(n) && Q.default.shouldCountChannelUnread(r, i));
                        }
                    }
                    return e;
                },
                { badge: 0, unread: !1 },
            );
        }),
        er =
            ((t = null != (e = (0, E.bG)([W.Ay], () => W.Ay.getVoiceChannelId())) && null != C[e]),
            (n = (0, E.bG)([H.A], () => {
                if (!t) return !1;
                let e = H.A.getCurrentUserActiveStream();
                return null != e && null != C[e.channelId];
            })),
            (i = (0, E.bG)([H.A], () => H.A.getAllApplicationStreams().some((e) => null != C[e.channelId]))),
            (s = (0, E.bG)([Y.A], () => t && null != e && Y.A.hasVideo(e), [t, e])),
            (l = (0, E.yK)([w.Ay], () =>
                K.default.keys(C).reduce((e, t) => (e.push(...w.Ay.getEmbeddedActivitiesForChannel(t)), e), []),
            )),
            (o = (0, E.bG)([w.Ay], () =>
                Array.from(w.Ay.getSelfEmbeddedActivities().values()).some((e) => {
                    let { location: t } = e,
                        n = (0, G.H)(t);
                    return null != n && null != C[n];
                }),
            )),
            (d = l.length > 0),
            (c = !1),
            (_ = !1),
            (A = !1),
            (h = !1),
            t ? ((c = !s), (_ = s), (A = n), (h = o)) : ((A = i), (h = d)),
            (0, F.oi)({ audio: c, video: _, screenshare: A, liveStage: !1, isCurrentUserConnected: t, activity: h })),
        es = D > 0 ? (0, F.wN)(D) : null,
        eo = a.useCallback(
            (e) => {
                (e && ((0, X.mv)("intro_dc"), (0, V.u)(eg.YYv)), I(eL.i.TAKE_ACTION));
            },
            [I],
        );
    return (0, r.jsxs)(k.c, {
        children: [
            (0, r.jsx)(x.A, { overlay: !0, selected: y, hovered: m, unread: ei && !N }),
            (0, r.jsx)(eR, {
                children: (0, r.jsx)(b.Q, {
                    selected: !0,
                    upperBadge: er,
                    lowerBadge: es,
                    children: (0, r.jsx)("div", {
                        ref: T,
                        children: (0, r.jsx)(M.j, {
                            ...p,
                            ariaLabel: ea.intl.formatToPlainString(ea.t["/uzRss"], {
                                guildName: ea.intl.string(ea.t.wMWyci),
                                mentions: D,
                            }),
                            "aria-selected": y,
                            to: { pathname: eg.BVt.CHANNEL(eg.YYv, O), state: eD },
                            selected: y || m,
                            onClick: () => {
                                f && eo(!1);
                            },
                            onMouseEnter: () => g(!0),
                            onMouseLeave: () => g(!1),
                            onMouseDown: function () {
                                null != R && U.A.preload(R.guild_id, R.id);
                            },
                            onContextMenu: S,
                            children: (0, r.jsx)(P.StarIcon, {
                                size: "custom",
                                color: "currentColor",
                                className: ey.w,
                                width: 20,
                                height: 20,
                            }),
                        }),
                    }),
                }),
            }),
            f &&
                (0, r.jsx)(el, {
                    targetElementRef: T,
                    onTakeAction: () => eo(!0),
                    onRequestClose: () => I(eL.i.USER_DISMISS),
                }),
        ],
    });
}
var eb = n(633965),
    eM = n(857071),
    eP = n(851109),
    eU = n(72314),
    ew = n(543897),
    eG = n(696451),
    ex = n(71393),
    ek = n(711014),
    eF = n(723702),
    eB = n(757780),
    eV = n(263715),
    eH = n(967198),
    ej = n(173860),
    eW = n(383394),
    eY = n(131677),
    eK = n(73153);
let e$ = {};
class ez extends E.Ay.PersistedStore {
    static displayName = "ViewHistoryStore";
    static persistKey = "ViewHistoryStore";
    initialize(e) {
        null != e &&
            Object.keys(e).forEach((t) => {
                "number" == typeof e[t] && (e$[t] = e[t]);
            });
    }
    getState() {
        return e$;
    }
    hasViewed(e) {
        return null != e$[e];
    }
}
let eX = new ez(eK.h, {
    VIEW_HISTORY_MARK_VIEW: function (e) {
        let { key: t } = e;
        e$[t] = Date.now();
    },
});
var eq = n(531685),
    eZ = n(583613);
let eQ = "app-download-item",
    eJ = "add-server-item";
function e0() {
    return !1;
}
function e1(e) {
    let t = Q.default.getMutableGuildStates();
    return (
        (e === eg.sFm.SERVER_DISCOVERY_BADGE && !eX.hasViewed(eg.sFm.SERVER_DISCOVERY_BADGE)) ||
        (e !== eQ && e !== eJ && t[e ?? "null"]?.highImportanceMentionCount > 0)
    );
}
let e2 = (0, eZ.L_)((e, t, n) => ["null", ...t, ...e, eJ, eg.sFm.E3_SERVER_DISCOVERY_BADGE, eQ]);
function e3(e) {
    let { ref: t, ...n } = e,
        i = (0, E.yK)([ek.Ay, eY.A, Q.default], () =>
            e2(ek.Ay.getGuildFolders(), eY.A.getUnreadPrivateChannelIds(), Q.default.getStoreChangeSentinel()),
        ),
        a = (0, E.bG)([eq.A], () => eq.A.isFocused()),
        s = (0, E.bG)([eW.A], () => eW.A.getExpandedFolders());
    return (0, r.jsx)(ej.A, {
        ...n,
        ref: t,
        items: i,
        isUnread: e0,
        textUnread: ea.intl.string(ea.t.y2b7CA),
        textMention: ea.intl.string(ea.t.y2b7CA),
        isMentioned: e1,
        animate: a,
        expandedFolders: s,
    });
}
n(667532);
var e5 = n(868285),
    e6 = n(763827),
    e4 = n(308941),
    e7 = n(778712),
    e8 = n(812993),
    e9 = n(442433),
    te = n(620982),
    tt = n(571694),
    tn = n(47167),
    ti = n(598104),
    tr = n(297334),
    ta = n(427358),
    ts = n(907459),
    tl = n(994500),
    to = n(145408);
let td = (0, n(240921).Ay)({
    kind: "user",
    name: "2026-10-guild-tooltip-lazy-content",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function tc(e) {
    let t = td.useConfig({ location: e }).enabled,
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
function tu(e) {
    let { icon: t, users: n } = e;
    return 0 === n.length
        ? null
        : (0, r.jsxs)("div", {
              className: eS.nM,
              children: [
                  (0, r.jsx)(t, { className: eS.RI, color: "currentColor" }),
                  (0, r.jsx)(eh.Ay, { users: n, max: 6 }),
              ],
          });
}
function t_(e) {
    let { muteConfig: t, className: n } = e;
    return t?.end_time == null
        ? (0, r.jsx)(ec.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: n,
              children: ea.intl.string(ea.t.fpKdS1),
          })
        : (0, r.jsx)(to.A, { muteConfig: t, className: n });
}
function tE(e) {
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
        (n = (0, E.bG)([tl.A], () => tl.A.getBlockedOrIgnoredIDs())),
        (i = (0, E.bG)([ta.A], () => ta.A.getUserAffinitiesMap(), [])),
        (s = (0, E.yK)(
            [w.Ay, ep.default],
            () =>
                w.Ay.getEmbeddedActivitiesForChannel(t)
                    .flatMap((e) => Array.from(e.userIds))
                    .map((e) => ep.default.getUser(e)),
            [t],
        )),
        (o = a.useMemo(() => (0, tr.aw)(s, n), [s, n])),
        (d = a.useMemo(() => (0, ts.L)(o, i, "DirectMessageTooltip - activityUsers"), [o, i])),
        (c = (0, E.yK)(
            [H.A, ep.default],
            () => {
                let e = H.A.getAllApplicationStreamsForChannel(t)
                    .map((e) => e.ownerId)
                    .map((e) => ep.default.getUser(e));
                return (0, tr.aw)(e, n);
            },
            [t, n],
        )),
        (u = a.useMemo(() => (0, tr.aw)(c, n), [c, n])),
        (_ = a.useMemo(() => (0, ts.L)(u, i, "DirectMessageTooltip - activityUsers"), [u, i])),
        (A = a.useMemo(() => _.filter((e) => !d.some((t) => t.id === e.id)), [_, d])),
        (h = (0, E.yK)(
            [eT.Ay],
            () => {
                let e = eT.Ay.getVoiceStatesForChannel(p).map((e) => {
                    let { user: t } = e;
                    return t;
                });
                return (0, tr.aw)(e, n);
            },
            [p, n],
        )),
        (f = a.useMemo(() => (0, tr.aw)(h, n), [h, n])),
        (I = a.useMemo(() => (0, ts.L)(f, i, "DirectMessageTooltip - voiceUsers"), [f, i])),
        {
            voiceUsers: a.useMemo(
                () => I.filter((e) => !d.some((t) => t.id === e.id) && !_.some((t) => t.id === e.id)),
                [I, d, _],
            ),
            streamUsers: A,
            activityUsers: d,
        }),
        N = (0, r.jsx)(tu, { icon: eu.H, users: S }),
        C = (0, r.jsx)(tu, { icon: e_.F, users: g }),
        O = (0, r.jsx)(tu, { icon: eE.k, users: m }),
        { isMuted: R, muteConfig: L } = (0, E.cf)(
            [et.Ay],
            () => ({ isMuted: et.Ay.isChannelMuted(null, T), muteConfig: et.Ay.getChannelMuteConfig(null, T) }),
            [T],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            N,
            C,
            O,
            R ? (0, r.jsx)(t_, { muteConfig: L, className: l()(eS.LM, { [eS.Sx]: null != N || null != C }) }) : null,
        ],
    });
}
function tA(e) {
    let { channel: t } = e,
        n = (0, tn.Ay)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: l()(eS.nM, eS.Dl),
                children: (0, r.jsx)("span", { className: l()(eS.cN, eS.NT), children: n }),
            }),
            (0, r.jsx)(tE, { channel: t }),
        ],
    });
}
function th(e) {
    let { channel: t, children: n } = e,
        i = (0, tn.Ay)(t),
        { shouldRenderRichContent: s, handleTooltipShow: l, handleTooltipHide: o } = tc("DirectMessageTooltip"),
        d = a.useMemo(
            () =>
                (0, r.jsx)(ec.E, {
                    variant: "text-md/semibold",
                    color: "text-default",
                    className: eS.A_,
                    children: s ? (0, r.jsx)(tA, { channel: t }) : i,
                }),
            [t, i, s],
        );
    return (0, r.jsx)(eA.m, {
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
let tf = { friction: 28, tension: 600 };
function tI(e) {
    switch (e) {
        case "height":
        case "opacity":
            return { duration: 150, ...tf };
        case "scale":
            return { ...tf };
        default:
            throw Error(`DirectMessage: getSpringConfigs() - Invalid spring ${String(e)}`);
    }
}
class tp extends a.PureComponent {
    static defaultProps = { badge: 0, audio: !1, video: !1, isCurrentUserInThisDMCall: !1 };
    state = {
        hovered: !1,
        animating: !0,
        controller: new e4.Controller({ scale: 0, height: 0, opacity: 0, config: tI }),
    };
    componentWillEnter(e) {
        let { controller: t } = this.state;
        (e(),
            t
                .update({ immediate: !eq.A.isFocused(), height: 1, opacity: 1, scale: 1, config: tI })
                .start()
                .then(() => this.setState({ animating: !1 })));
    }
    componentWillAppear(e) {
        let { controller: t } = this.state;
        t.update({ immediate: !0, scale: 1, opacity: 1, height: 1, config: tI }).start().then(e);
    }
    componentWillLeave(e) {
        let { controller: t } = this.state;
        this.setState({ animating: !0 }, () =>
            t.update({ immediate: !eq.A.isFocused(), height: 0, opacity: 0, scale: 0, config: tI }).start().then(e),
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
            t = e.type === eg.rbe.DM ? ep.default.getUser(e.getRecipientId()) : null;
        return null != t ? t.getAvatarURL(void 0, 48, !1) : (0, tt.Y)(e);
    }
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            i = t.type === eg.rbe.DM ? ep.default.getUser(t.getRecipientId()) : null;
        null != i
            ? (0, e9.L3)(e, async () => {
                  let { default: e } = await Promise.all([
                      n.e("339715"),
                      n.e("790484"),
                      n.e("819113"),
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
                  return (n) => (0, r.jsx)(e, { ...n, channel: t, user: i });
              })
            : (0, e9.L3)(e, async () => {
                  let { default: e } = await Promise.all([
                      n.e("926132"),
                      n.e("893190"),
                      n.e("393336"),
                      n.e("146652"),
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
                (0, r.jsx)(M.j, {
                    to: eg.BVt.CHANNEL(eg.ME, e.id),
                    onMouseEnter: () => this.setState({ hovered: !0 }),
                    onMouseLeave: () => this.setState({ hovered: !1 }),
                    selected: n || E,
                    ariaLabel:
                        null != t
                            ? [
                                  ea.intl.formatToPlainString(ea.t.hKarnZ, { name: t, mentions: i }),
                                  d ? ea.intl.string(ea.t["fk1/bX"]) : c ? ea.intl.string(ea.t["NGg/fm"]) : null,
                              ]
                                  .filter(Boolean)
                                  .join(", ")
                            : "",
                    onContextMenu: this.handleContextMenu,
                    icon: h ? void 0 : this.getChannelIcon(),
                    backgroundStyle: h ? "on-hover" : "always",
                    children: h
                        ? (0, r.jsx)(ti.A, {
                              channel: e,
                              size: e7._3.SIZE_40,
                              facepileSizeOverride: e7._3.SIZE_32,
                              "aria-hidden": !0,
                          })
                        : void 0,
                    ..._,
                });
        return (0, r.jsx)(e4.animated.div, {
            style: this.getAnimatedStyle(),
            children: (0, r.jsxs)(k.c, {
                children: [
                    (0, r.jsx)(x.A, { overlay: !0, hovered: !A && E, selected: !A && n, unread: !A && u }),
                    (0, r.jsx)(th, {
                        channel: e,
                        children: (0, r.jsx)(b.Q, {
                            rounded: !0,
                            selected: !1,
                            lowerBadge: i > 0 ? (0, F.wN)(i, void 0, !0) : null,
                            upperBadge: (0, F.oi)({ audio: a, video: s, screenshare: l, isCurrentUserConnected: o }),
                            lowerBadgeSize: { width: (0, e8.o6)(i) },
                            children: f(),
                        }),
                    }),
                ],
            }),
        });
    }
}
function tT(e) {
    let { ref: t, ...n } = e,
        i = n.channel.id,
        a = (0, tn.Ay)(n.channel),
        s = (0, u.Vd)(i, 2),
        l = (0, E.bG)([e6.A], () => e6.A.getChannelId(), []),
        o = (0, E.bG)([L.A], () => L.A.getMode(i), [i]),
        d = (0, E.bG)([H.A], () => H.A.getAllApplicationStreamsForChannel(i).length > 0),
        c = (0, E.bG)([eT.Ay], () => eT.Ay.getVoiceStatesForChannel(n.channel).length > 0, [n.channel]),
        _ = (0, E.bG)([W.Ay], () => W.Ay.getChannelId(), []),
        A = (0, E.bG)([ee.Ay], () => ee.Ay.getMentionCount(i), [i]),
        h = l === i,
        { isIncomingCall: I, isOngoingCall: p } = (0, te.A)(i),
        m = !1,
        g = !1;
    (h || c) && ((m = o === eg._Of.VOICE), (g = o === eg._Of.VIDEO));
    let S = (0, T.r)(f.A.modules.guildbar.AVATAR_SIZE);
    return (0, r.jsx)(tp, {
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
function tm() {
    (0, E.bG)([j.A], () => j.A.getPrivateChannelsVersion());
    let e = j.A.getMutablePrivateChannels(),
        t = (0, E.yK)([eY.A], () => eY.A.getUnreadPrivateChannelIds()),
        { selectedVoiceGuildId: n, selectedVoiceChannelId: i } = (0, E.cf)([e6.A], () => ({
            selectedVoiceGuildId: e6.A.getGuildId(),
            selectedVoiceChannelId: e6.A.getChannelId(),
        })),
        s = t.map((t) => {
            let n = e[t];
            return null == n || n.id === i ? null : (0, r.jsx)(tT, { channel: n }, n.id);
        }),
        l = null == n && null != i ? e[i] : null;
    return (
        null != l && s.unshift((0, r.jsx)(tT, { channel: l }, l.id)),
        (0, r.jsx)(I.B, {
            id: "guild-list-unread-dms",
            role: "group",
            "aria-label": ea.intl.string(ea.t.YUU0RF),
            gap: "xs",
            hidden: s.length < 1,
            children: (0, r.jsx)(e5.F, { component: a.Fragment, children: s }),
        })
    );
}
var tg = n(192308),
    tS = n(32880),
    tN = n(939249),
    tC = n(728309);
function tO(e) {
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
                    : (0, r.jsx)(ec.E, {
                          variant: "text-md/semibold",
                          color: "text-default",
                          className: eS.A_,
                          children: n,
                      }),
            [n, s],
        ),
        E = i ? t : (0, r.jsx)("div", { className: l()(tC.p, { [tC.w]: u }), children: t });
    return (0, r.jsx)(eA.m, {
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
var tR = n(93776);
let tL = function (e) {
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
        return (0, r.jsxs)(k.c, {
            children: [
                f ? (0, r.jsx)(x.A, { overlay: !0, hovered: C, selected: c }) : null,
                (0, r.jsx)(tO, {
                    text: _,
                    selected: c,
                    children: (0, r.jsx)(b.Q, {
                        selected: !0,
                        upperBadge: E,
                        lowerBadge: A,
                        lowerBadgeSize: h,
                        children: (0, r.jsx)(tN.D, {
                            innerRef: t,
                            onMouseEnter: () => {
                                (m?.(), O(!0));
                            },
                            onMouseLeave: () => {
                                (g?.(), O(!1));
                            },
                            onMouseDown: S,
                            className: l()(tR.oZ, I, { [tR.wH]: c || C }),
                            onClick: s,
                            "aria-label": R,
                            "aria-selected": c,
                            onContextMenu: o,
                            focusProps: { enabled: !1 },
                            ...N,
                            children: null != d && (0, r.jsx)(d, { className: tR.sF, color: "currentColor" }),
                        }),
                    }),
                }),
                T,
            ],
        });
    },
    ty = "DOWNLOAD_APPS";
function tD() {
    let e = (0, tg.useModalsStore)((e) => (0, tg.hasModalOpenSelector)(e, ty));
    return (0, r.jsx)(tL, {
        id: "app-download-button",
        onClick: () => {
            (0, tg.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 987482));
                    return (t) => (0, r.jsx)(e, { source: "Guilds", ...t });
                },
                { modalKey: ty },
            );
        },
        selected: e,
        tooltip: ea.intl.string(ea.t.Z7jwrJ),
        icon: tS.DownloadIcon,
    });
}
var tv = n(245604),
    tb = n(272613),
    tM = n(398884),
    tP = n(772366),
    tU = n(728321),
    tw = n(260509),
    tG = n(284009),
    tx = n.n(tG),
    tk = n(949152),
    tF = n(66834),
    tB = n(174459),
    tV = n(759223);
function tH(e) {
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
function tj(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return (
        tx()(t.type !== eV.PJ.ROOT, "[GuildDropTarget] Tried using a root node as a drop target."),
        {
            accept: e,
            canDrop: (e) =>
                e.nodeId !== t.id &&
                (!i || e.type !== eV.PJ.FOLDER || t.type !== eV.PJ.FOLDER) &&
                (e.type !== eV.PJ.FOLDER || null == t.parentId),
            drop(e) {
                let { nodeId: r } = e;
                (i && t.type !== eV.PJ.FOLDER && tB.default.track(eg.HAw.GUILD_FOLDER_CREATED),
                    tF.A.moveById(r, t.id, n, i));
            },
            collect: (e) => ({ canDrop: e.canDrop(), isOver: e.isOver() }),
        }
    );
}
function tW(e) {
    let { name: t, targetNode: n, combine: i, below: s } = e,
        l = a.useMemo(() => tj([eV.PJ.GUILD, eV.PJ.FOLDER], n, s, i), [n, s, i]),
        [{ canDrop: o, isOver: d }, c] = (0, tk.H)(l),
        u = tH([
            [o, tV.OP],
            [d, tV.NQ],
        ]);
    return (0, r.jsx)("div", {
        ref: (e) => {
            ((u.current = e), c(e));
        },
        "data-dnd-name": ea.intl.formatToPlainString(ea.t["A5aDw+"], { itemName: t }),
        className: tV.aC,
    });
}
function tY(e) {
    let { name: t, targetNode: n, onDragOverChanged: i } = e,
        [{ canDrop: s, isOver: o }, d] = (0, tk.H)(() => tj([eV.PJ.GUILD], n, !0, !0));
    a.useEffect(() => {
        i?.(o);
    }, [i, o]);
    let c = tH([
        [s, tV.OP],
        [o, tV.NQ],
    ]);
    return (0, r.jsx)(tO, {
        text: t,
        shouldShow: o,
        forceOpen: o,
        disableWrapper: !0,
        children: (0, r.jsx)("div", {
            ref: (e) => {
                ((c.current = e), d(e));
            },
            "data-dnd-name": ea.intl.formatToPlainString(ea.t.qiQ0QI, { itemName: t }),
            className: l()(tV.dw, {}),
        }),
    });
}
let tK = a.memo(function (e) {
    let { name: t, targetNode: n, noCombine: i = !1, below: a = !1, onDragOverChanged: s } = e,
        l = !i && null == n.parentId;
    return (0, r.jsxs)("div", {
        className: tV.iE,
        "aria-hidden": !0,
        children: [
            (0, r.jsx)(tW, { name: t, targetNode: n, below: a }),
            l ? (0, r.jsx)(tY, { name: t, targetNode: n, onDragOverChanged: s }) : null,
        ],
    });
});
function t$(e) {
    let { name: t, targetNode: n } = e,
        [{ canDrop: i, isOver: a }, s] = (0, tk.H)(() => tj([eV.PJ.GUILD], n, !0, !0)),
        l = tH([[a, tV.a7]]),
        o = tH([
            [a, tV.NQ],
            [i, tV.OP],
        ]);
    return (0, r.jsx)("div", {
        ref: l,
        className: tV.Ro,
        "aria-hidden": !0,
        children: (0, r.jsx)("div", {
            className: tV.aO,
            children: (0, r.jsx)("div", {
                ref: (e) => {
                    ((o.current = e), s(e));
                },
                "aria-label": `At end of ${t}`,
                className: tV.aC,
            }),
        }),
    });
}
function tz(e) {
    let { children: t } = e,
        [, n] = (0, tk.H)({ accept: [] });
    return (0, r.jsx)("div", {
        ref: (e) => {
            n(e);
        },
        children: t,
    });
}
var tX = n(819638),
    tq = n(260727);
let tZ = { origin: { x: -16, y: 0 }, targetWidth: 48, targetHeight: 48, offset: { x: 0, y: 0 } };
function tQ(e) {
    (0, e9.L3)(e, async () => {
        let { default: e } = await n.e("117288").then(n.bind(n, 4571));
        return (t) => (0, r.jsx)(e, { ...t });
    });
}
function tJ(e) {
    let { disableTooltip: t, lastTargetNode: n } = e,
        i = (0, E.yK)([ex.A], () => ex.A.getGuildsArray()),
        s = (0, E.bG)([ep.default], () => ep.default.getCurrentUser()),
        l = a.useMemo(() => i.some((e) => (0, tw.bM)(e, s)), [i, s]),
        o = (0, tg.useModalsStore)((e) => (0, tg.hasModalOpenSelector)(e, tX.fc)),
        { analyticsLocations: d } = (0, R.Ay)();
    return (0, r.jsx)("div", {
        className: tq.Uq,
        children: (0, r.jsxs)(tU.A, {
            tutorialId: l ? "create-more-servers" : "create-first-server",
            inlineSpecs: tZ,
            position: "right",
            disabled: t,
            children: [
                (0, r.jsx)(tL, {
                    showPill: !1,
                    id: "create-join-button",
                    onClick: function () {
                        (0, tM.Sn)()
                            ? (0, tP.A)({
                                  analyticsSource: { page: eg.ThZ.CREATE_JOIN_GUILD_MODAL },
                                  analyticsLocation: {
                                      page: eg.ThZ.CREATE_JOIN_GUILD_MODAL,
                                      section: eg.JJy.GUILD_CAP_UPSELL_MODAL,
                                  },
                                  analyticsLocations: d,
                              })
                            : tb.A.openCreateGuildModal({ location: "Guild List" });
                    },
                    selected: o,
                    onContextMenu: tQ,
                    tooltip: ea.intl.string(ea.t.l5WIbf),
                    icon: tv.U,
                }),
                null != n &&
                    (0, r.jsx)(tK, { name: ea.intl.string(ea.t["45xjM5"]), targetNode: n, below: !0, noCombine: !0 }),
            ],
        }),
    });
}
var t0 = n(565787),
    t1 = n(791606),
    t2 = n(486020),
    t3 = n(183588);
function t5(e) {
    let [t, i] = a.useState(!1),
        s = (0, u.Vd)(`guild-${e.id}`);
    return (0, r.jsx)(k.c, {
        children: (0, r.jsx)(tO, {
            text: e.name,
            children: (0, r.jsx)(b.Q, {
                className: t3.o,
                selected: t,
                lowerBadge: (0, r.jsx)(e8.fk, { icon: (0, t0.k)(t1.A), disableColor: !0, className: t3._ }),
                children: (0, r.jsx)(M.j, {
                    name: e.name,
                    onMouseEnter: function () {
                        i(!0);
                    },
                    onMouseLeave: function () {
                        i(!1);
                    },
                    onClick: function () {
                        (0, tg.openModalLazy)(async () => {
                            let { default: t } = await n.e("642945").then(n.bind(n, 537560));
                            return (n) => (0, r.jsx)(t, { name: e.name, guildId: e.id, ...n });
                        });
                    },
                    icon:
                        null != e.icon
                            ? t2.Ay.getGuildIconURL({ id: e.id, icon: e.icon, canAnimate: !1, size: 42 })
                            : null,
                    ...s,
                }),
            }),
        }),
    });
}
var t6 = n(696292),
    t4 = n(836480),
    t7 = n(533129),
    t8 = n(726845),
    t9 = n(837057),
    ne = n(310419),
    nt = n(488995),
    nn = n(324580),
    ni = n(190107);
let nr = function (e) {
    let { selected: t, onClick: n, questId: i, className: s, ref: l } = e,
        o = a.useCallback(() => {
            (0, t7.WL)({ source: nt.GlobalDiscoveryAnalyticsLocations.GUILDS_BAR_ICON });
            let e = void 0 !== i ? nt.GlobalDiscoveryTab.QUESTS : t8.A.getField("selectedTab");
            switch (e) {
                case nt.GlobalDiscoveryTab.QUESTS:
                    return (0, t9.transitionToGlobalDiscovery)({
                        tab: nt.GlobalDiscoveryTab.QUESTS,
                        location: ni.rE.DISCOVERY_COMPASS,
                        questContent: t6.u.DISCOVERY_COMPASS,
                        questId: i,
                    });
                case nt.GlobalDiscoveryTab.SERVERS:
                    return (0, t9.transitionToGlobalDiscovery)({
                        tab: nt.GlobalDiscoveryTab.SERVERS,
                        entrypoint: nn.J8.GUILDS_BAR,
                    });
                case nt.GlobalDiscoveryTab.APPS:
                    return (0, t9.transitionToGlobalDiscovery)({
                        tab: nt.GlobalDiscoveryTab.APPS,
                        newSessionState: {
                            entrypoint: { name: ne.sW.GLOBAL_DISCOVERY_BUTTON },
                            restorePreviousView: !0,
                        },
                    });
                default:
                    return (0, t9.transitionToGlobalDiscovery)({ tab: e });
            }
        }, [i]);
    return (0, r.jsx)(tL, {
        id: "guild-discover-button",
        ref: l,
        className: s,
        onClick: () => {
            (o(), void 0 !== n && n());
        },
        selected: t,
        tooltip: ea.intl.string(ea.t["4nEZLk"]),
        icon: t4.CompassIcon,
    });
};
var na = n(506774),
    ns = n(509963),
    nl = n(111159),
    no = n(793943),
    nd = n(158045),
    nc = n(350972),
    nu = n(677056),
    n_ = n(526162),
    nE = n(174197);
function nA() {
    let [e, t] = (0, E.yK)([ep.default, n_.A], () => [
            n_.A.getCurrentDesktopIcon(),
            nd.Ay.isPremium(ep.default.getCurrentUser()),
        ]),
        n = (0, no.fy)().activePanel === no.HP.APP_ICON,
        i = (0, nE.gG)(e),
        a = i.id !== nc.LW.DEFAULT && (t || n),
        s = (0, r.jsx)(nl.p, { size: "custom", color: "currentColor", width: 24, height: 24 });
    return null != i && a ? (0, r.jsx)(nu.A, { id: i.id, size: nE.N8.SIZE_48 }) : s;
}
var nh = n(531260),
    nf = n(411976),
    nI = n(912309),
    np = n(400492),
    nT = n(354670),
    nm = n(619921),
    ng = n(340829),
    nS = n(966846),
    nN = n(674378),
    nC = n(394953),
    nO = n(202541),
    nR = n(235079),
    nL = n(222219);
let ny = { origin: { x: -16, y: 0 }, targetWidth: 48, targetHeight: 48, offset: { x: 0, y: 0 } };
function nD(e) {
    let { selected: t, user: n, badge: i, link: s, showProgressBadge: l } = e,
        [o, d] = a.useState(!1),
        [c, _] = a.useState(!1),
        [E, A] = a.useState(null),
        [h, f] = a.useState(0),
        I = (0, u.Vd)("home"),
        p = (0, no.fy)().activePanel === no.HP.APP_ICON;
    function T() {
        (A(null), f(0), clearTimeout(E));
    }
    if (null == n) return null;
    let m = ea.intl.string(ea.t.YUU0RF);
    c && (m = na.w.get(eg.wqg) ? ea.intl.string(ea.t["nkq1l+"]) : ea.intl.string(ea.t.Be8Q5E));
    let g = null;
    !t && l && (g = (0, r.jsx)(ns.A, { className: nL.Cp, determineOwnVisibility: !1 }));
    let S = t || o || p,
        N = (0, r.jsx)(b.Q, {
            selected: !0,
            lowerBadge: i > 0 ? (0, F.wN)(i) : null,
            upperBadge: g,
            lowerBadgeSize: { width: (0, e8.o6)(i) },
            children: (0, r.jsx)(M.j, {
                onMouseEnter: () => d(!0),
                onMouseLeave: () => d(!1),
                onClick: function () {
                    if (!__OVERLAY__ && (null != E && clearTimeout(E), A(setTimeout(T, 500)), f(h + 1), 15 === h)) {
                        T();
                        let e = !na.w.get(eg.wqg);
                        (na.w.set(eg.wqg, e),
                            e && na.w.set(nR.L, !0),
                            e ? (0, np.Ak)("discodo") : (0, np.Ak)("user_leave"),
                            _(!0),
                            setTimeout(() => {
                                _(!1);
                            }, 1e3));
                    }
                },
                selected: S,
                ariaLabel: ea.intl.string(ea.t.YUU0RF),
                "aria-owns": "guild-list-unread-dms",
                "aria-selected": t,
                ...I,
                to: {
                    pathname: s,
                    state: {
                        analyticsSource: {
                            page: eg.liQ.GUILD_CHANNEL,
                            section: eg.JJy.NAVIGATION,
                            object: eg.ZSU.BUTTON_HOME,
                        },
                    },
                },
                children: (0, r.jsx)(nA, {}),
            }),
        });
    return (0, r.jsx)("div", {
        className: nL.Uq,
        "data-guilds-bar-home": !0,
        children: (0, r.jsx)(tU.A, {
            inlineSpecs: ny,
            tutorialId: "friends-list",
            position: "right",
            children: (0, r.jsxs)(k.c, {
                children: [
                    (0, r.jsx)(x.A, { overlay: !0, selected: t, hovered: o }),
                    (0, r.jsx)(tO, { hideOnClick: !0, text: m, selected: t, children: N }),
                ],
            }),
        }),
    });
}
function nv() {
    let e = (function () {
            let e = (0, B.A)((e) => e.guildId),
                { pathname: t } = (0, c.zy)(),
                n = t.startsWith(eg.BVt.GUILD_DISCOVERY) || t.startsWith(eg.BVt.GLOBAL_DISCOVERY),
                i = t.startsWith(eg.BVt.GUILD_MEMBER_VERIFICATION("")),
                r = (0, nC.lI)();
            return null == e && !(n || i || r);
        })(),
        t = (0, E.bG)([nS.A, ng.A], () => {
            let e = (0, ns.v)(nS.A.activeItems, ng.A),
                { total: t, progress: n } = nN.zY(e),
                i = nN.uA(n, t);
            return i > 0 && i < 100;
        }),
        n = (0, nI.kX)(),
        i = Object.keys(nO.kb),
        a = (0, nh.A)(),
        { unviewedTrialCount: s, unviewedDiscountCount: l } = (0, E.cf)([nT.A], () => ({
            unviewedTrialCount: nT.A.getUnacknowledgedOffers(i).length,
            unviewedDiscountCount: nT.A.getUnacknowledgedDiscountOffers().length,
        })),
        o = a.fractionalState === nO.xc.NONE ? s + l : 0,
        d = (0, E.bG)([ep.default], () => ep.default.getCurrentUser()),
        u = (0, nf.W)(),
        _ = n + o + u,
        A = _ === o && o > 0 && n + u === 0,
        h = nm.A.getHomeLink();
    return (
        A && (h = eg.BVt.APPLICATION_STORE),
        (0, r.jsx)(nD, {
            selected: e,
            user: d,
            selectedChannelId: W.Ay.getChannelId(eg.ME),
            badge: _,
            link: h,
            showProgressBadge: t,
        })
    );
}
var nb = n(545328);
function nM(e) {
    let { fullWidth: t } = e;
    return (0, r.jsx)(k.c, { children: (0, r.jsx)("div", { className: l()(nb.t, { [nb.I]: t }) }) });
}
var nP = n(28863),
    nU = n(695366),
    nw = n(919638),
    nG = n(818348),
    nx = n(837669);
function nk() {
    let e = (0, E.bG)([nw.A, ex.A], () => nw.A.unavailableGuilds.filter((e) => null == ex.A.getGuild(e)).length),
        t = (0, u.Vd)("unavailable-guilds-button");
    return e <= 0
        ? null
        : (0, r.jsx)(k.c, {
              children: (0, r.jsx)(tO, {
                  text: ea.intl.format(ea.t["TnH05/"], { count: e }),
                  children: (0, r.jsx)(nP.Anchor, {
                      href: nG.qF.STATUS,
                      target: "_blank",
                      className: nx.h,
                      "aria-label": ea.intl.formatToPlainString(ea.t["MEpX+2"], { count: e }),
                      ...t,
                      children: (0, r.jsx)(nU.E, { color: "currentColor", "aria-hidden": !0 }),
                  }),
              }),
          });
}
var nF = n(36412),
    nB = n(739822),
    nV = n(317097),
    nH = n(319060),
    nj = n(866323),
    nW = n(817281),
    nY = n(717117),
    nK = n(534409),
    n$ = n(240248),
    nz = n(678708),
    nX = n(559106),
    nq = n(140735),
    nZ = n(548118),
    nQ = n(327580);
function nJ(e) {
    let { guildId: t, animate: n } = e,
        i = (0, E.bG)([ex.A], () => ex.A.getGuild(t), [t]),
        a = (0, T.r)(f.A.modules.guildbar.AVATAR_SIZE);
    return null == i
        ? (0, r.jsx)("div", { className: l()(nQ.VL, nQ.zU), children: (0, r.jsx)(nU.E, { color: "currentColor" }) })
        : (0, r.jsx)(nZ.Ay, {
              guild: i,
              animate: n,
              size: nZ.Ay.Sizes.MINI,
              iconSize: a,
              lossless: !0,
              className: nQ.VL,
              tabIndex: -1,
          });
}
function n0(e) {
    let { folderNode: t, hovered: n, sorting: i } = e,
        { children: a } = t,
        s = n && i,
        o = (0, r.jsx)("div", {
            className: nQ.hJ,
            children: (0, r.jsx)("div", {
                className: nQ.Eh,
                children: (0, r.jsx)(nz.FolderIcon, { size: "sm", color: "currentColor" }),
            }),
        }),
        d = (0, r.jsx)("div", {
            className: nQ.qJ,
            children: (0, r.jsx)("div", {
                className: nQ.jg,
                children: a.slice(0, 4).map((e) => (0, r.jsx)(nJ, { guildId: e.id, animate: n }, e.id)),
            }),
        });
    return (0, r.jsxs)("div", {
        "aria-hidden": !0,
        className: l()({ [nQ.NG]: s, [nQ.yd]: !s }),
        children: [!s && o, d],
    });
}
function n1(e) {
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
        O = n || null == s ? null : (0, F.oi)(s),
        R =
            !n && l > 0
                ? (0, F.wN)(
                      l,
                      o ? f.A.colors.BACKGROUND_MOD_STRONG.css : f.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                  )
                : null;
    return (0, r.jsx)(nX.vN, {
        children: (0, r.jsxs)(tN.D, {
            className: nQ.H3,
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
                (0, r.jsx)(nq.A, {
                    children: ea.intl.formatToPlainString(ea.t["90/DwM"], { folderName: d, mentions: l }),
                }),
                (0, r.jsx)(b.Q, {
                    "aria-hidden": !0,
                    isFolder: !0,
                    upperBadge: O,
                    lowerBadge: R,
                    lowerBadgeSize: { width: (0, e8.o6)(l) },
                    children: (0, r.jsx)("div", {
                        className: nQ.vA,
                        children:
                            null != u
                                ? (0, r.jsx)("div", { className: nQ.hJ, children: u })
                                : (0, r.jsx)(n0, { folderNode: t, hovered: g, sorting: i }),
                    }),
                }),
            ],
        }),
    });
}
var n2 = n(573435),
    n3 = n(167579);
function n5(e) {
    let { className: t, isFolder: n } = e,
        i = (0, T.r)(f.A.modules.guildbar.AVATAR_SIZE);
    return (0, r.jsx)(n2.Ay, {
        mask: n2.Ay.Masks.SQUIRCLE,
        className: l()(t, n3.OL, { [n3.lQ]: n }),
        width: i,
        height: i,
        children: (0, r.jsx)("div", { className: n3.ZU }),
    });
}
var n6 = n(114329),
    n4 = n(937067);
let n7 = (0, n$.xI)(nH.A.FOLDER_ITEM_ANIMATION_DURATION),
    n8 = (0, nY.P)(I.B),
    n9 = a.memo(function (e) {
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
            [G, F] = a.useState(!1),
            B = U || G,
            V = (0, nK.qK)("FolderItem");
        a.useEffect(() => {
            g && w(!1);
        }, [g]);
        let [{ dragging: H }, j] = (0, nB.i)({
                type: eV.PJ.FOLDER,
                item: () => (S?.(), { type: eV.PJ.FOLDER, nodeId: o.id }),
                end() {
                    (N?.(), (0, nW.um)(ek.Ay.getCompatibleGuildFolders()));
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
            K = null != M && "" !== M ? M : null != p && "" !== p ? p : ea.intl.string(ea.t.xV9hVh),
            $ = (0, u.Vd)(`${b}`),
            z = `folder-items-${b}`,
            X =
                ((t = P.length),
                (n = (0, T.r)(f.A.modules.guildbar.FOLDER_SIZE)),
                (i = (0, T.r)(f.A.modules.guildbar.AVATAR_SIZE)),
                t * (i + (s = (0, T.r)(f.A.space.SPACE_XS))) - s + (s - (n - i) / 2) + (0, T.r)(f.A.space.SPACE_4)),
            q = (0, nj.p)(!H && _, {
                from: { height: 0 },
                enter: { height: 1 },
                leave: { height: 0 },
                config: { duration: n7 },
            }),
            Z = a.useCallback((e) => d?.(b, e), [d, b]),
            Q = (0, r.jsxs)(k.c, {
                children: [
                    (0, r.jsx)(x.A, { overlay: !0, disabled: H || _, hovered: U, selected: c, unread: I }),
                    (0, r.jsx)(tO, {
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
                            className: l()(nQ.MJ, { [nQ.L0]: "icon" === L || V, [n4.oR]: !H && G && !_ }),
                            "data-dnd-name": K,
                            children: H
                                ? (0, r.jsx)(n5, { isFolder: !0 })
                                : (0, r.jsx)(n1, {
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
                    m ? (0, r.jsx)(tK, { name: K, targetNode: o, onDragOverChanged: W }) : null,
                ],
            }),
            J = (0, n6.rk)(o.color),
            ee = null != J ? (0, nV.Hl)(J) : void 0;
        return (0, r.jsxs)("div", {
            ref: Z,
            className: l()(nQ.qc, { [nQ.Av]: _, [nQ.Lg]: B }),
            style: { "--custom-folder-color": ee ?? "" },
            "data-drop-hovering": G,
            children: [
                !H && _ && (0, r.jsx)("span", { className: nQ.GO }),
                Q,
                q((e, t, n) => {
                    let { key: i } = n;
                    return (
                        t &&
                        (0, r.jsx)(
                            n8,
                            {
                                id: z,
                                role: "group",
                                as: "ul",
                                gap: "xs",
                                className: nQ.TN,
                                style: { height: e.height.to((e) => e * X) },
                                "aria-label": o.name,
                                children: P.map((t, n) => R(t, n, P.length, e.height)),
                            },
                            i,
                        )
                    );
                }),
                m && _ ? (0, r.jsx)(t$, { name: K, targetNode: o }) : null,
            ],
        });
    });
var ie = n(354583);
let it = a.memo(function (e) {
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
        N = (0, B.A)((e) => e.guildId),
        C = (0, E.bG)([eW.A], () => eW.A.isFolderExpanded(p)),
        O = (0, nF.y)(f),
        R =
            ((t = (0, E.bG)([e6.A], () => e6.A.getGuildId())),
            (i = f.children.map((e) => e.id)),
            (s = null != t && i.includes(t)),
            (l = !1),
            (o = !1),
            (d = !1),
            (c = (0, E.bG)([e6.A], () => e6.A.getChannelId())),
            (_ = null != (u = (0, ie.A)()?.guild_id) && i.includes(u)),
            (A = (0, E.bG)([Y.A], () => null != c && Y.A.hasVideo(c), [c])),
            (h = (0, E.bG)([H.A], () => H.A.getCurrentUserActiveStream())),
            s && ((l = !A), (o = A), (d = null != h && null != h.guildId && i.includes(h.guildId))),
            a.useMemo(
                () => ({ audio: l, video: o, screenshare: d, liveStage: _, isCurrentUserConnected: s }),
                [l, o, d, _, s],
            )),
        {
            mentionCount: L,
            isMentionLowImportance: y,
            unread: D,
        } = (0, E.cf)([Q.default], () => ({
            mentionCount: S.map((e) => Q.default.getMentionCount(e)).reduce((e, t) => e + t, 0),
            isMentionLowImportance: S.every((e) => Q.default.getIsMentionLowImportance(e)),
            unread: S.some((e) => Q.default.hasUnread(e)),
        })),
        v = a.useCallback(() => {
            tF.A.toggleGuildFolderExpand(p);
        }, [p]),
        b = a.useCallback(
            (e) => {
                (0, e9.L3)(e, async () => {
                    let { default: e } = await Promise.all([n.e("114748"), n.e("906240")]).then(n.bind(n, 595139));
                    return (t) =>
                        (0, r.jsx)(e, { ...t, folderId: p, folderName: T, folderColor: m, unread: D || L > 0 });
                });
            },
            [p, T, m, D, L],
        );
    return (0, r.jsx)(n9, {
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
var ii = n(113494),
    ir = n(821124),
    ia = n(212455);
function is(e) {
    let t = e?.features.has(eg.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL),
        n = (0, E.bG)(
            [ia.A, ep.default, eG.Ay],
            () => {
                if (null == e) return;
                let t = ia.A.getRequest(e.id),
                    n = ep.default.getCurrentUser();
                if (null == n || null == t || t.userId !== n.id) return;
                let i = eG.Ay.getMember(e.id, t.userId);
                if (!(null != i && !i.isPending) || (0, ir.Oe)(t)) return t.applicationStatus;
            },
            [e],
        );
    return t ? n : void 0;
}
var il = n(347951),
    io = n(34162);
function id(e) {
    return (0, E.bG)([io.A], () => io.A.getGuildMediaState(e), [e]);
}
var ic = n(607399),
    iu = n(702841),
    i_ = n(750233),
    iE = n(976860),
    iA = n(676279);
function ih(e) {
    let { guild: t, show: n, active: i, onAnimationStart: a, onAnimationRest: s } = e,
        o = {},
        d = {};
    ((o.transform = "translate3d(10px, 10px, 0) scale3d(3, 3, 1)"),
        (d.transform = "translate3d(0, 0, 0) scale3d(1, 1, 1)"));
    let c = (0, T.r)(f.A.unsafe_rawColors.BRAND_500).hex(),
        u = (0, T.r)(f.A.unsafe_rawColors.PRIMARY_630).hex();
    i && null == t.icon && ((o.backgroundColor = c), (d.backgroundColor = u));
    let _ = (0, nj.p)(n, { from: o, enter: d, leave: o, config: { duration: 100 }, onStart: a, onRest: s });
    return (0, r.jsx)(r.Fragment, {
        children: _(
            (e, n, i) =>
                n &&
                (0, r.jsx)(
                    "div",
                    {
                        className: nQ.qc,
                        children: (0, r.jsx)("div", {
                            className: l()(nQ.MJ, nQ.L0),
                            style: { margin: 0 },
                            children: (0, r.jsx)(e4.animated.div, {
                                className: nQ.NG,
                                style: e,
                                children: (0, r.jsx)("div", {
                                    className: nQ.qJ,
                                    children: (0, r.jsx)("div", {
                                        className: nQ.jg,
                                        children: (0, r.jsx)(nZ.Ay, {
                                            guild: t,
                                            size: nZ.Ay.Sizes.SMOL,
                                            className: nQ.VL,
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
var iI = n(454938),
    ip = n(714991),
    iT = n(107773),
    im = n(513461),
    ig = n(164956),
    iS = n(624265),
    iN = n(970278),
    iC = n(808728);
let iO = (0, n(945810).mj)({
    name: "2026-09-server-tooltip-notification-context",
    kind: "user",
    defaultConfig: { mode: "disabled" },
    variations: { 0: { mode: "disabled" }, 1: { mode: "latest" }, 2: { mode: "mentions_first" } },
});
function iR(e) {
    let { guildId: t, mode: n } = e,
        { channel: i, hasMention: a } = (0, E.cf)(
            [et.Ay, j.A, q.A, ee.Ay, Q.default],
            () => {
                if (et.Ay.isMuted(t)) return { channel: null, hasMention: !1 };
                let e = { latest: null, latestMention: null };
                function i(t) {
                    if (!ee.Ay.hasUnreadOrMentions(t.id)) return;
                    let n = ee.Ay.getMentionCount(t.id);
                    if (!Q.default.shouldCountChannelUnread(t, n)) return;
                    let i = ee.Ay.lastMessageId(t.id);
                    if (null == i) return;
                    let r = { channel: t, hasMention: n > 0, lastMessageId: i };
                    ((null == e.latest || K.default.compare(i, e.latest.lastMessageId) > 0) && (e.latest = r),
                        r.hasMention &&
                            (null == e.latestMention || K.default.compare(i, e.latestMention.lastMessageId) > 0) &&
                            (e.latestMention = r));
                }
                let r = j.A.getMutableGuildChannelsForGuild(t);
                for (let e in r) i(r[e]);
                let a = q.A.getActiveJoinedThreadsForGuild(t);
                for (let e in a)
                    for (let t in a[e]) {
                        let e = j.A.getChannel(t);
                        null != e && i(e);
                    }
                let s = "mentions_first" === n ? (e.latestMention ?? e.latest) : e.latest;
                return { channel: s?.channel ?? null, hasMention: s?.hasMention ?? !1 };
            },
            [t, n],
        ),
        s = (0, tn.Ay)(i);
    return null == i || null == s || 0 === s.length
        ? null
        : (0, r.jsx)(ec.E, {
              className: eS.T5,
              color: "text-muted",
              variant: "text-xs/normal",
              lineClamp: 1,
              children: ea.intl.formatToPlainString(a ? ea.t.HwW3zP : ea.t.FwKQxx, { channelName: s }),
          });
}
function iL(e, t, n) {
    return 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              className: eS.nM,
              children: [
                  (0, r.jsx)(e, { className: eS.RI, color: "currentColor" }),
                  (0, r.jsx)(eh.Ay, { guildId: n, users: t, max: 6 }),
              ],
          });
}
function iy(e) {
    let { muteConfig: t, className: n } = e;
    return t?.end_time == null
        ? (0, r.jsx)(ec.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: n,
              children: ea.intl.string(ea.t.fpKdS1),
          })
        : (0, r.jsx)(to.A, { muteConfig: t, className: n });
}
function iD(e) {
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
            [iC.Ay, iN.A, et.Ay],
            () => [
                ...iC.Ay.getChannels(t)
                    [iC.vM].filter((e) => {
                        let { channel: n } = e;
                        return n.type === eg.rbe.GUILD_VOICE && !et.Ay.isChannelMuted(t, n.id);
                    })
                    .map((e) => {
                        let { channel: t } = e;
                        return t.id;
                    }),
                ...Object.values(iN.A.getThreadsForGuild(t)).flatMap((e) => Object.keys(e)),
            ],
            [t],
        )),
        (i = (0, iS.Ay)(t)),
        (s = a.useMemo(() => i.map((e) => e.id), [i])),
        (o = (0, E.bG)([eT.Ay], () => eT.Ay.getVoiceStates(t), [t])),
        (c = (0, E.bG)([tl.A], () => tl.A.getBlockedOrIgnoredIDs())),
        (u = d().flatMap(n, (e) => {
            if (e === R.afkChannelId) return [];
            let t = (o[e] ?? []).map((e) => {
                let { user: t } = e;
                return t;
            });
            return (0, tr.aw)(t, c);
        })),
        (_ = (0, E.yK)([ef.A], () =>
            d().flatMap(s, (e) => {
                if (e === R.afkChannelId) return [];
                let t = ef.A.getMutableParticipants(e, eI.ip.SPEAKER)
                    .filter((e) => e.type === eI.wY.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    });
                return (0, tr.aw)(t, c);
            }),
        )),
        (A = (0, E.bG)([ef.A], () => {
            let e = 0;
            for (let t of s) e += ef.A.getParticipantCount(t, eI.ip.AUDIENCE);
            return e;
        })),
        (h = (0, E.yK)(
            [H.A, et.Ay],
            () => {
                let e = H.A.getAllApplicationStreams()
                    .filter((e) => e.guildId === t && !et.Ay.isChannelMuted(t, e.channelId))
                    .map((e) => e.ownerId);
                return (0, tr.F7)(e, c);
            },
            [c, t],
        )),
        (f = (0, E.yK)(
            [w.Ay, j.A],
            () => {
                let e = w.Ay.getEmbeddedActivitiesForGuild(t)
                    .filter((e) => {
                        let t = j.A.getBasicChannel((0, G.H)(e.location));
                        return t?.type !== eg.rbe.GUILD_SPACE;
                    })
                    .flatMap((e) => Array.from(e.userIds));
                return (0, tr.F7)(e, c);
            },
            [t, c],
        )),
        (I = (0, E.yK)(
            [ep.default],
            () => {
                let e = f.map((e) => ep.default.getUser(e));
                return (0, tr.aw)(e);
            },
            [f],
        )),
        (p = (0, E.yK)([ep.default], () => h.map((e) => ep.default.getUser(e)), [h])),
        (T = u.filter((e) => !h.includes(e.id) && !f.includes(e.id))),
        (m = (0, tr.aw)(T)),
        (g = p.filter((e) => null != e && !f.includes(e.id))),
        (S = (0, E.bG)([ta.A], () => ta.A.getUserAffinitiesMap(), [])),
        (N = a.useMemo(() => (0, ts.L)(m, S, "GuildTooltip - nonBlockedUsers"), [m, S])),
        (C = a.useMemo(() => (0, ts.L)(_, S, "GuildTooltip - stageSpeakers"), [_, S])),
        (O = a.useMemo(() => (0, ts.L)(g, S, "GuildTooltip - streamUsers"), [g, S])),
        {
            voiceUsersToShow: N,
            stageSpeakers: C,
            numStageListeners: A,
            streamUsersToShow: O,
            embeddedActivitiesUsers: a.useMemo(() => (0, ts.L)(I, S, "GuildTooltip - embeddedActivitiesUsers"), [I, S]),
            hasActivity: _.length > 0 || T.length > 0 || g.length > 0 || I.length > 0,
        }),
        P = iL(eu.H, y, L),
        U =
            0 === D.length
                ? null
                : (0, r.jsxs)("div", {
                      className: eS.nM,
                      children: [
                          (0, r.jsx)(eo.q, { size: "lg", color: "currentColor", className: eS.RI }),
                          (0, r.jsx)(eh.Ay, { guildId: L, users: D, max: 3 }),
                          (0, r.jsxs)("div", {
                              className: eS.GZ,
                              children: [
                                  (0, r.jsx)(ed.L, { size: "xs", color: "currentColor" }),
                                  (0, r.jsx)(ec.E, {
                                      className: eS._I,
                                      color: "text-default",
                                      variant: "text-xs/normal",
                                      children: v,
                                  }),
                              ],
                          }),
                      ],
                  }),
        x = iL(e_.F, b, L),
        k = iL(eE.k, M, L),
        { isMuted: F, muteConfig: B } = (0, E.cf)(
            [et.Ay],
            () => ({ isMuted: et.Ay.isMuted(L), muteConfig: et.Ay.getMuteConfig(L) }),
            [L],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            U,
            P,
            x,
            k,
            F ? (0, r.jsx)(iy, { muteConfig: B, className: l()(eS.LM, { [eS.Sx]: null != P || null != x }) }) : null,
        ],
    });
}
function iv(e) {
    let { guildJoinRequestStatus: t } = e;
    return (0, r.jsx)(ec.E, {
        className: eS.BT,
        color: "text-default",
        variant: "text-xs/normal",
        children: (function (e) {
            switch (e) {
                case im.B5.SUBMITTED:
                    return ea.intl.string(ea.t["9KFC98"]);
                case im.B5.REJECTED:
                    return ea.intl.string(ea.t["TQY/Rd"]);
                case im.B5.APPROVED:
                    return ea.intl.string(ea.t.WXHcq5);
                default:
                    return ea.intl.string(ea.t.fjHFC8);
            }
        })(t),
    });
}
function ib(e) {
    let { guild: t, isTooltipShown: n, shouldShowNotificationContext: i } = e,
        a = (0, iI.A)(t),
        s = is(t),
        o = null != s ? (0, r.jsx)(iv, { guildJoinRequestStatus: s }) : null,
        d = (0, r.jsx)(iD, { guild: t }),
        c = (0, E.bG)([ig.A], () => ig.A.isViewingRoles(t.id)),
        u = (0, il.Ig)(t),
        _ =
            n && i
                ? (function () {
                      let { mode: e } = iO.getConfig({ location: "GuildTooltip.serverTooltipNotificationContext" });
                      return e;
                  })()
                : "disabled";
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: l()(eS.nM, eS.Dl),
                children: [
                    a
                        ? (0, r.jsx)(iT.A, { disableBoostClick: !0, guild: t, className: eS.WX })
                        : (0, r.jsx)(ip.A, { guild: t, size: 20, className: eS.aL }),
                    (0, r.jsx)("span", { className: l()(eS.cN, eS.NT), children: t.name }),
                ],
            }),
            "disabled" !== _ ? (0, r.jsx)(iR, { guildId: t.id, mode: _ }) : null,
            u
                ? (0, r.jsx)(ec.E, {
                      className: eS.Ef,
                      color: "text-default",
                      variant: "text-sm/medium",
                      children: ea.intl.string(ea.t["2n0/Fk"]),
                  })
                : null,
            c
                ? (0, r.jsx)(ec.E, {
                      className: eS.BT,
                      color: "text-default",
                      variant: "text-xs/normal",
                      children: ea.intl.string(ea.t["5LwN89"]),
                  })
                : (o ?? d),
        ],
    });
}
function iM(e) {
    let { guild: t, shouldShowNotificationContext: n = !1, disabled: i = !1, children: s } = e,
        { isOpen: l, shouldRenderRichContent: o, handleTooltipShow: d, handleTooltipHide: c } = tc("GuildTooltip"),
        u = a.useMemo(
            () =>
                i
                    ? null
                    : (0, r.jsx)(ec.E, {
                          variant: "text-md/semibold",
                          color: "text-default",
                          className: eS.A_,
                          children: o
                              ? (0, r.jsx)(ib, { guild: t, isTooltipShown: l, shouldShowNotificationContext: n })
                              : t.name,
                      }),
            [i, t, l, o, n],
        );
    return (0, r.jsx)(eA.m, {
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
let iP = { analyticsSource: { page: eg.liQ.GUILD_CHANNEL, section: eg.JJy.CHANNEL_LIST, object: eg.ZSU.CHANNEL } };
function iU(e, t) {
    (0, e9.L3)(e, async () => {
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
            n.e("162775"),
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
            n.e("261868"),
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
            n.e("649500"),
            n.e("683426"),
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
            n.e("974119"),
            n.e("434683"),
            n.e("920955"),
            n.e("882297"),
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
            n.e("216112"),
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
            n.e("264572"),
            n.e("217229"),
            n.e("477175"),
            n.e("960235"),
            n.e("402368"),
            n.e("190779"),
            n.e("716460"),
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
            n.e("724285"),
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
            n.e("28102"),
            n.e("21921"),
            n.e("407170"),
            n.e("811310"),
            n.e("571210"),
            n.e("676418"),
            n.e("572963"),
            n.e("307575"),
            n.e("518954"),
            n.e("201050"),
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
            n.e("417886"),
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
            n.e("506620"),
            n.e("632756"),
            n.e("564850"),
            n.e("170104"),
            n.e("491793"),
            n.e("474610"),
            n.e("902564"),
            n.e("428967"),
            n.e("92935"),
            n.e("67878"),
            n.e("649362"),
            n.e("773534"),
            n.e("35557"),
            n.e("758946"),
            n.e("214285"),
            n.e("248330"),
            n.e("731503"),
            n.e("803332"),
            n.e("859546"),
            n.e("432805"),
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
            n.e("976516"),
            n.e("41332"),
            n.e("400501"),
            n.e("985794"),
            n.e("732194"),
            n.e("767837"),
            n.e("473384"),
            n.e("432209"),
            n.e("726511"),
            n.e("893349"),
            n.e("368062"),
            n.e("859991"),
            n.e("386317"),
            n.e("709371"),
            n.e("599719"),
            n.e("448399"),
            n.e("868214"),
            n.e("939171"),
            n.e("987478"),
            n.e("661814"),
            n.e("96680"),
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
            n.e("142266"),
            n.e("458273"),
            n.e("208018"),
            n.e("606949"),
            n.e("968763"),
            n.e("177243"),
            n.e("278045"),
            n.e("26001"),
            n.e("599976"),
            n.e("430997"),
            n.e("174192"),
            n.e("414591"),
            n.e("652111"),
            n.e("356664"),
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
            n.e("978046"),
            n.e("610943"),
            n.e("283230"),
            n.e("582486"),
            n.e("428235"),
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
            n.e("170571"),
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
            n.e("556967"),
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
        return (n) => (0, r.jsx)(e, { ...n, guild: t });
    });
}
let iw = a.memo(function (e) {
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
            contextMenu: g = iU,
            draggable: S = !1,
            sorting: N = !1,
            preloadOnClick: C = !0,
            guildJoinRequestStatus: O,
            height: R,
            "aria-setsize": L,
            "aria-posinset": y,
        } = e,
        { id: D, parentId: v } = t,
        P = e.upperBadge ?? (I ? (0, F.em)() : null != A ? (0, F.oi)(A) : void 0),
        w = e.lowerBadge ?? void 0;
    null == w && p > 0
        ? (w =
              (0, F.wN)(
                  p,
                  m ? f.A.colors.BACKGROUND_MOD_STRONG.css : f.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
              ) ?? void 0)
        : null == w && null != O && (w = (0, F.eW)({ guildJoinRequestStatus: O }) ?? void 0);
    let G = e.lowerBadgeSize ?? { width: (0, e8.o6)(p) },
        [{ dragging: B }, H] = (0, nB.i)({
            type: eV.PJ.GUILD,
            item: () => (
                requestAnimationFrame(() => {
                    i?.();
                }),
                { type: t.type, nodeId: t.id }
            ),
            end() {
                (s?.(), (0, nW.um)(ek.Ay.getCompatibleGuildFolders()));
            },
            collect: (e) => ({ dragging: e.isDragging() }),
        }),
        j = (0, u.Vd)(D ?? eg.dJq, null != v ? 2 : 1),
        [W, Y] = a.useState(!1),
        K = !N && W,
        [$, z] = a.useState(!1),
        [X, q] = a.useState(!1),
        [Z] = a.useState(() => new h.J_(70, () => q(!0))),
        Q = (0, iA.nr)() && !ic.Fr;
    a.useEffect(() => () => Z.cancel(), [Z]);
    let J = a.useCallback(() => {
            null != o ? (0, iE.pX)(o, { state: iP }) : (0, V.u)(D, { state: iP });
        }, [D, o]),
        ee = a.useCallback(() => {
            if (null != o || null == d || I || !C) return;
            let [e] = (0, i_.q)(d.id);
            null != e && U.A.preload(d.id, e);
        }, [o, d, I, C]),
        et = (0, iu.bG)([eG.Ay], () => eG.Ay.isCurrentUserGuest(D)),
        en = a.useCallback(
            (e) => {
                null == d || et || g(e, d);
            },
            [d, g, et],
        ),
        ei = a.useCallback(
            (e) => {
                "ArrowLeft" === e.key && null != v && document.querySelector(`[aria-owns=folder-items-${v}]`)?.focus();
            },
            [v],
        ),
        er = a.useCallback(
            (e) => {
                e ? Z.delay() : (Z.cancel(), q(!1));
            },
            [Z],
        );
    function es() {
        N || Y(!0);
    }
    function el() {
        N || Y(!1);
    }
    let eo = a.useCallback(
            (e) => {
                n?.(D, e);
            },
            [D, n],
        ),
        ed = (0, T.r)(f.A.modules.guildbar.AVATAR_SIZE);
    if (null == d) return null;
    let ec = d.name;
    if (
        (p > 0
            ? (ec = ea.intl.formatToPlainString(ea.t["/uzRss"], { guildName: d.name, mentions: p }))
            : E && (ec = ea.intl.formatToPlainString(ea.t.lzqe42, { guildName: d.name })),
        null != A)
    ) {
        let e = [];
        (A.activeEvent && e.push(ea.intl.string(ea.t.dHvJ2p)),
            A.liveStage && e.push(ea.intl.string(ea.t.OO7ndG)),
            A.screenshare && e.push(ea.intl.string(ea.t.wsHMZ7)),
            A.video && e.push(ea.intl.string(ea.t.BrLCS0)),
            A.audio && e.push(ea.intl.string(ea.t.jPBhKy)),
            A.activity && e.push(ea.intl.string(ea.t.Y3Gii5)),
            e.length > 0 && (ec = `${ec}, ${e.join(" ")}`));
    }
    let eu = (0, r.jsx)(ih, {
            guild: d,
            show: X,
            active: _,
            onAnimationStart: function () {
                z(X);
            },
            onAnimationRest: function () {
                X || z(!1);
            },
        }),
        e_ = Q
            ? (0, r.jsx)(M.j, {
                  ariaLabel: ec,
                  name: d.name,
                  onClick: J,
                  onMouseEnter: es,
                  onMouseLeave: el,
                  onMouseDown: ee,
                  onContextMenu: en,
                  onKeyDown: ei,
                  icon: (0, tw.Iv)(d, 2 * ed, K && c, !0),
                  selected: _ || K,
                  ...j,
                  "aria-setsize": L,
                  "aria-posinset": y,
                  "aria-selected": _,
              })
            : (0, r.jsx)(b.Q, {
                  selected: _,
                  children: (0, r.jsx)("div", {
                      ref: S
                          ? (e) => {
                                H(e);
                            }
                          : void 0,
                      "data-dnd-name": d.name,
                      "data-drop-hovering": X,
                      children: (0, r.jsx)(M.j, {
                          ariaLabel: ec,
                          name: d.name,
                          onClick: J,
                          onMouseEnter: es,
                          onMouseLeave: el,
                          onMouseDown: ee,
                          onContextMenu: en,
                          onKeyDown: ei,
                          icon: (0, tw.Iv)(d, 2 * ed, K && c, !0),
                          selected: _ || K,
                          ...j,
                          "aria-setsize": L,
                          "aria-posinset": y,
                          "aria-selected": _,
                      }),
                  }),
              }),
        eE = X || $ ? eu : e_,
        eA = (0, r.jsx)(tz, { children: (0, r.jsx)(n5, {}) }),
        eh = Q
            ? (0, r.jsx)(e4.animated.div, {
                  ref: S
                      ? (e) => {
                            H(e);
                        }
                      : void 0,
                  "data-dnd-name": d.name,
                  style: { scale: null == R ? 1 : R },
                  "data-drop-hovering": X,
                  className: l()(n4.rN, { [n4.p9]: N, [n4.oR]: X, [n4.wH]: X || _ }),
                  children: (0, r.jsx)(b.Q, {
                      selected: !0,
                      upperBadge: P,
                      lowerBadge: w,
                      lowerBadgeSize: G,
                      children: eE,
                  }),
              })
            : (0, r.jsx)(e4.animated.div, {
                  style: { scale: null == R ? 1 : R },
                  className: l()(n4.rN, { [n4.p9]: N, [n4.oR]: X, [n4.wH]: X || _ }),
                  "data-drop-hovering": X,
                  children: (0, r.jsx)(b.Q, {
                      selected: _,
                      upperBadge: P,
                      lowerBadge: w,
                      lowerBadgeSize: G,
                      children: eE,
                  }),
              });
    return (0, r.jsxs)(k.c, {
        ref: eo,
        children: [
            (0, r.jsx)(x.A, { overlay: !0, hovered: !B && K, selected: !B && _, unread: !B && E }),
            (0, r.jsx)(iM, {
                guild: d,
                disabled: N,
                isDragging: B,
                shouldShowNotificationContext: !I && (E || p > 0),
                children: B ? eA : eh,
            }),
            S ? (0, r.jsx)(tK, { name: d.name, targetNode: t, onDragOverChanged: er }) : null,
        ],
    });
});
var iG = n(64061);
let ix = a.memo(function (e) {
    let { guildNode: t, lowerBadge: n } = e,
        i = t.id,
        s = (0, E.bG)([ex.A], () => ex.A.getGuild(i)),
        l = is(s),
        o = (0, E.bG)([eq.A], () => eq.A.isFocused()),
        d = (0, E.bG)([nw.A], () => nw.A.isUnavailable(i)),
        c = (0, B.A)((e) => e.guildId),
        u = id(i),
        {
            badge: _,
            unread: A,
            isMentionLowImportance: h,
        } = (0, E.cf)([Q.default], () => ({
            badge: Q.default.getMentionCount(i),
            isMentionLowImportance: Q.default.getIsMentionLowImportance(i),
            unread: Q.default.hasUnread(i),
        })),
        f = (0, il.Ig)(s) && 0 === _,
        I = a.useMemo(
            () =>
                null != n
                    ? n
                    : f
                      ? (0, r.jsx)("div", {
                            className: iG.j,
                            children: (0, r.jsx)(ii.PauseIcon, {
                                size: "custom",
                                color: "currentColor",
                                className: iG.v,
                                width: 10,
                                height: 10,
                            }),
                        })
                      : null,
            [n, f],
        );
    return (0, r.jsx)(iw, {
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
var ik = n(922016),
    iF = n(297264),
    iB = n(821609),
    iV = n(339350),
    iH = n(475743),
    ij = n(624458),
    iW = n(408213),
    iY = (((i = {})[(i.PENDING_JOIN_REQUESTS_FOLDER = 1)] = "PENDING_JOIN_REQUESTS_FOLDER"), i),
    iK = n(928568);
function i$(e, t) {
    (0, e9.L3)(e, async () => {
        let { default: e } = await n.e("49056").then(n.bind(n, 97187));
        return (n) => (0, r.jsx)(e, { ...n, guild: t });
    });
}
function iz(e) {
    let { guildNode: t } = e,
        n = t.id,
        i = (0, E.bG)([ia.A], () => ia.A.getRequest(n)),
        a = (0, E.bG)([ia.A], () => ia.A.getJoinRequestGuild(n), [n]),
        s = (0, E.bG)([eq.A], () => eq.A.isFocused()),
        l = (0, E.bG)([eH.A], () => eH.A.getGuildId());
    return null == a
        ? null
        : (0, r.jsx)(iw, {
              guildNode: t,
              guild: a,
              animatable: s,
              draggable: !1,
              selected: n === l,
              preloadOnClick: !1,
              contextMenu: i$,
              lowerBadge:
                  i?.applicationStatus === im.B5.REJECTED
                      ? (0, F.eW)({ guildJoinRequestStatus: i.applicationStatus })
                      : void 0,
              route: eg.BVt.GUILD_MEMBER_VERIFICATION(n),
          });
}
var iX = n(943536);
function iq(e) {
    let { onActivate: t, children: n } = e,
        i = a.useRef(null),
        s = (0, E.bG)([ia.A], () => ia.A.hasJoinRequestCoackmark()),
        l = a.useCallback(() => {
            iW.Ay.clearCoachmark();
        }, []),
        o = (0, iH.Ay)(s),
        d = a.useRef(null);
    return (
        a.useEffect(() => {
            s && s !== o && (t(), d.current?.ref?.current?.layerRef?.current?.updatePosition());
        }, [d, s, o, t]),
        (0, r.jsxs)("div", {
            className: iX.kL,
            children: [
                (0, r.jsx)(ik.Y, {
                    ref: d,
                    targetElementRef: i,
                    shouldShow: s,
                    renderPopout: () =>
                        (0, r.jsxs)("div", {
                            className: iX.jC,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: iX.Bm,
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: iX.q3,
                                            children: [
                                                (0, r.jsx)(iF.D, {
                                                    variant: "heading-md/medium",
                                                    children: ea.intl.string(ea.t["0YV0YE"]),
                                                }),
                                                (0, r.jsx)(ec.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    children: ea.intl.string(ea.t["0UQVDL"]),
                                                }),
                                            ],
                                        }),
                                        (0, r.jsx)(iB.$, {
                                            variant: "primary",
                                            size: "sm",
                                            text: ea.intl.string(ea.t["4r+amb"]),
                                            fullWidth: !0,
                                            onClick: l,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", { className: iX.ed }),
                            ],
                        }),
                    position: "right",
                    animationPosition: "right",
                    align: "top",
                    spacing: 16,
                    children: (e) => (0, r.jsx)("div", { ...e, className: iX.Ne, ref: i }),
                }),
                n,
            ],
        })
    );
}
function iZ(e) {
    let { onActivate: t } = e,
        [n, i] = a.useState(!1),
        s = (0, E.bG)([eH.A], () => eH.A.getGuildId()),
        l = (0, E.bG)([ia.A], () => ia.A.hasFetchedRequestToJoinGuilds),
        o = (0, iK.A)(),
        d = (0, iH.Ay)(s),
        c = a.useMemo(() => {
            let e = (0, eV.xW)({
                folderId: iY.PENDING_JOIN_REQUESTS_FOLDER,
                folderName: ea.intl.string(ea.t["scsU+l"]),
                expanded: n,
                guildIds: [],
            });
            for (let t of o) e.children.push((0, eV.EL)(t, e.id));
            return e;
        }, [o, n]);
    a.useEffect(() => {
        n && !l && ij.A.fetchRequestToJoinGuilds();
    }, [n, l]);
    let u = null != s && o.includes(s);
    return (a.useEffect(() => {
        !n && u && d !== s && i(!0);
    }, [n, u, d, s]),
    0 === o.length)
        ? null
        : (0, r.jsx)(iq, {
              onActivate: t,
              children: (0, r.jsx)(n9, {
                  folderNode: c,
                  expanded: n,
                  selected: u,
                  draggable: !1,
                  sorting: !1,
                  onExpandCollapse: () => {
                      (i(!n), iW.Ay.clearCoachmark());
                  },
                  folderButtonSize: "icon",
                  folderButtonContent: (0, r.jsx)("div", {
                      className: iX.rH,
                      children: (0, r.jsx)(iV.Q, { size: "sm", color: "currentColor" }),
                  }),
                  renderChildNode: function (e, t, n) {
                      return e.type !== eV.PJ.GUILD
                          ? null
                          : (0, r.jsx)(iz, { guildNode: e, "aria-setsize": n, "aria-posinset": t }, e.id);
                  },
              }),
          });
}
function iQ(e) {
    let { guildId: t } = e,
        n = a.useMemo(() => (0, eV.EL)(t), [t]),
        i = (0, E.bG)([ex.A], () => ex.A.getGuild(t)),
        s = (0, E.bG)([eq.A], () => eq.A.isFocused()),
        l =
            t ===
            (0, B.A)((e) => {
                let { guildId: t } = e;
                return t;
            }),
        o = id(t);
    return null == i
        ? null
        : (0, r.jsx)(iw, { guildNode: n, guild: i, animatable: s, selected: l, draggable: !1, mediaState: o });
}
var iJ = n(987566);
let i0 = (0, y.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("80501"),
                n.e("237403"),
                n.e("12343"),
                n.e("649500"),
                n.e("683426"),
                n.e("524434"),
                n.e("849162"),
                n.e("839460"),
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
                n.e("285802"),
                n.e("65200"),
                n.e("860003"),
                n.e("472627"),
                n.e("941348"),
                n.e("81941"),
                n.e("641066"),
                n.e("130706"),
                n.e("303886"),
                n.e("241633"),
                n.e("108066"),
                n.e("96296"),
            ]).then(n.bind(n, 153571)),
        webpackId: 153571,
        name: "NotificationsInboxButton",
    }),
    i1 = (0, eF.isWindows)() ? 4 : 12 * !(0, eF.isMac)();
function i2(e) {
    return e.startsWith(eg.BVt.GUILD_DISCOVERY) || e.startsWith(eg.BVt.GLOBAL_DISCOVERY);
}
class i3 {
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
            (0, eb.u9)(this.getVisibleGuildIds));
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
            (null == e && i2(window.location.pathname)) ||
            e === eg.sFm.SERVER_DISCOVERY_BADGE ||
            e === eg.sFm.E3_SERVER_DISCOVERY_BADGE
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
function i5(e) {
    let { hideDms: t, scrollToTop: n, lurkingGuildIds: i } = e,
        s = (0, D.A)(),
        { shouldShowPopover: l } = (0, v.QQ)(),
        o = a.useRef(!1),
        d = l && s;
    a.useEffect(() => {
        (d && !o.current && n(), (o.current = d));
    }, [n, d]);
    let c = (0, E.yK)([ex.A, eG.Ay], () => ex.A.getGuildIds().filter((e) => eG.Ay.isCurrentUserGuest(e))),
        u = i.concat(c),
        { entrypoint: _ } = (0, eP.X8)({ location: "GuildsBar" });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(nv, {}),
            _ === eP.RK.SERVER_RAIL_TOP && (0, r.jsx)(i0, {}),
            (0, r.jsx)(v.Ay, {}),
            s ? (0, r.jsx)(ev, {}) : null,
            !t && (0, r.jsx)(tm, {}),
            u.map((e) => (0, r.jsx)(iQ, { guildId: e }, e)),
            (0, r.jsx)(iZ, { onActivate: n }),
        ],
    });
}
function i6(e) {
    let { guildDiscoveryButton: t, disableAppDownload: n, isOverlay: i, renderTreeNode: a, lurkingGuildIds: s } = e,
        [l] = (0, E.yK)([ek.Ay], () => {
            let e = ek.Ay.getGuildsTree();
            return [e, e.version];
        }),
        o = l.getRoots(),
        d = (0, E.yK)([ew.A], () => ew.A.getGeoRestrictedGuilds()).map((e) =>
            (0, r.jsx)(t5, { id: e.id, name: e.name, icon: e.icon }, e.id),
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(I.B, {
                role: "group",
                "aria-label": ea.intl.string(ea.t["7hB4kg"]),
                gap: "xs",
                children: o.map((e, t) => a(e, t, o.length)),
            }),
            d,
            (0, r.jsx)(nk, {}),
            i ? null : (0, r.jsx)(tJ, { disableTooltip: s.length > 0, lastTargetNode: o[o.length - 1] }),
            i ? null : t,
            n ? null : (0, r.jsx)(tD, {}),
        ],
    });
}
function i4(e) {
    var t;
    let { disableAppDownload: n = eF.isPlatformEmbedded, isOverlay: i = !1, className: s, themeOverride: o } = e,
        [d] = (0, E.yK)([ek.Ay], () => {
            let e = ek.Ay.getGuildsTree();
            return [e, e.version];
        }),
        _ = (0, E.bG)([eM.A], () => eM.A.lurkingGuildIds()),
        A = a.useMemo(() => (i ? [] : _), [_, i]),
        I = (0, E.bG)([L.A], () => L.A.isFullscreenInContext()),
        { isSorting: S, startSorting: C, stopSorting: y } = (0, eB.A)(),
        v = a.useRef(!1),
        [b] = a.useState(() => new h.Ep()),
        M = a.useRef(null),
        P = a.useRef(null),
        { ref: U, ...w } = (0, u.$y)(),
        G = (0, p.R7)(),
        [x, k] = a.useState(!1),
        F = (0, T.r)(f.A.modules.guildbar.AVATAR_SIZE),
        V = (0, T.r)(f.A.space.SPACE_XS),
        H = (0, D.A)(),
        { pathname: j } = (0, c.zy)(),
        { entrypoint: W } = (0, eP.X8)({ location: "GuildsBar" }),
        Y = +!!H + +(W === eP.RK.SERVER_RAIL_TOP),
        K = a.useMemo(() => {
            let e,
                t,
                n =
                    ((e = F + V),
                    {
                        iconSize: F,
                        iconTotalSize: e,
                        badgeVisibleBuffer: e - 16,
                        separatorSize: (t = 2 + V),
                        heightBeforeGuilds: i1 + t + Y * e,
                        bottomInset: 16,
                    });
            return new i3(
                d,
                k,
                eg.tEg,
                () => {
                    (M.current?.calculateState(), P.current?.calculateState());
                },
                n,
            );
        }, [F, V, d, Y]);
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
            return (Q.default.addChangeListener(e), () => Q.default.removeChangeListener(e));
        }, []));
    let { analyticsLocations: $ } = (0, R.Ay)(O.A.GUILDS_LIST),
        z = i2(j);
    ((0, N.u5)(() => {
        if (!v.current && 0 !== d.size) {
            if (!z) {
                let { scrollTop: e } = eU.A.getGuildListDimensions();
                K.scrollTo({ to: e, animate: !1 });
            }
            return ((v.current = !0), () => b.stop());
        }
    }),
        a.useEffect(() => {
            if ((K.setGuildsTree(d), v.current || 0 === d.size)) return;
            let e = B.A.getState().guildId;
            K.scrollToGuild(e, !1);
            let t = null;
            return B.A.subscribe((e) => {
                let { guildId: n } = e;
                n !== t && ((t = n), K.scrollToGuild(t, !1));
            });
        }, [d, K]));
    let X = a.useCallback(() => {
        K.scrollTo({ to: 0, animate: !1 });
    }, [K]);
    ((t = K.scrollToGuild),
        a.useEffect(() => {
            let e = null;
            function n() {
                let n = eH.A.getGuildId();
                n !== e && ((e = n ?? null), t(n ?? null, !1));
            }
            return (
                eH.A.addChangeListener(n),
                () => {
                    eH.A.removeChangeListener(n);
                }
            );
        }, [t]));
    let q = a.useCallback(
            function e(t, n, i) {
                switch (t.type) {
                    case eV.PJ.FOLDER:
                        return (0, r.jsx)(
                            it,
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
                    case eV.PJ.GUILD:
                        return (0, r.jsx)(
                            ix,
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
        Z = (0, r.jsx)(nr, { selected: z, className: iJ.ai }),
        J = W === eP.RK.SERVER_RAIL_BOTTOM;
    return (0, r.jsx)(R.f5, {
        value: $,
        children: (0, r.jsx)(m.N, {
            theme: o,
            children: (e) =>
                (0, r.jsxs)("nav", {
                    className: l()(iJ.iE, s, e, { [iJ.R]: I }),
                    "aria-label": ea.intl.string(ea.t.PjnF2t),
                    children: [
                        (0, r.jsx)(e3, {
                            ref: M,
                            isVisible: K.isItemVisible,
                            onJumpTo: K.handleJumpToGuild,
                            className: iJ.Xl,
                            barClassName: iJ.Sh,
                        }),
                        (0, r.jsxs)("div", {
                            ref: U,
                            ...w,
                            ...G,
                            role: "tree",
                            "aria-multiselectable": !1,
                            className: iJ.B2,
                            children: [
                                (0, r.jsxs)(g.zC, {
                                    className: l()({ [iJ.XG]: !0, [iJ.qw]: x }),
                                    experimental_useStack: !0,
                                    gap: "xs",
                                    ref: K.scrollerRef,
                                    onScroll: K.handleScroll,
                                    children: [
                                        (0, r.jsx)(i5, { scrollToTop: X, lurkingGuildIds: A }),
                                        (0, r.jsx)(nM, {}),
                                        (0, r.jsx)(i6, {
                                            guildDiscoveryButton: Z,
                                            disableAppDownload: n,
                                            isOverlay: i,
                                            renderTreeNode: q,
                                            lurkingGuildIds: A,
                                        }),
                                    ],
                                }),
                                J &&
                                    (0, r.jsxs)("div", {
                                        children: [
                                            (0, r.jsx)(nM, { fullWidth: !0 }),
                                            (0, r.jsx)("div", { className: iJ.JU, children: (0, r.jsx)(i0, {}) }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, r.jsx)(e3, {
                            reverse: !0,
                            ref: P,
                            isVisible: K.isItemVisible,
                            onJumpTo: K.handleJumpToGuild,
                            className: l()(iJ.LZ, { [iJ.CH]: !i && !J, [iJ.c0]: !i && J }),
                            barClassName: iJ.Sh,
                        }),
                    ],
                }),
        }),
    });
}
let i7 = a.memo(
    function (e) {
        let t = (0, C.A)("guildsnav");
        return (0, r.jsx)(u.hD, { navigator: t, children: (0, r.jsx)(i4, { ...e }) });
    },
    (e, t) => !1 === t.isVisible || (0, A.A)(e, t),
);
