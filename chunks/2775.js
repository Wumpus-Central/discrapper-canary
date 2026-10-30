n.d(t, { A: () => ik });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(435558),
    o = n.n(l),
    d = n(806163),
    c = n(837381),
    u = n(621466),
    _ = n(17928),
    E = n(52133),
    A = n(451988),
    h = n(661531),
    f = n(331322),
    I = n(312138),
    p = n(602853),
    T = n(43990),
    m = n(689175),
    g = n(951001),
    S = n(964486),
    N = n(260762),
    C = n(793574),
    O = n(688810),
    R = n(198052),
    L = n(97005),
    y = n(741907),
    D = n(972013),
    v = n(751841),
    b = n(738601),
    M = n(941143),
    P = n(717421);
let U = { friction: 28, tension: 600 };
function w(e) {
    switch (e) {
        case "height":
        case "opacity":
            return { duration: 150, ...U };
        case "scale":
            return { ...U };
        default:
            throw Error(`getRailItemSpringConfig() - Invalid spring ${String(e)}`);
    }
}
var G = n(268218);
let x = (0, G.Fe)({
    createPromise: () =>
        Promise.all([
            n.e("163944"),
            n.e("202622"),
            n.e("916758"),
            n.e("947802"),
            n.e("540715"),
            n.e("741111"),
            n.e("248748"),
            n.e("11312"),
            n.e("846308"),
            n.e("303133"),
            n.e("914454"),
            n.e("604606"),
            n.e("382840"),
            n.e("801169"),
            n.e("484482"),
        ]).then(n.bind(n, 271122)),
    webpackId: 271122,
    name: "ConjureRailFolder",
});
function k(e) {
    let { shown: t, projects: n } = e,
        a = (0, p.r)(h.A.modules.guildbar.AVATAR_SIZE),
        s = (0, p.r)(h.A.space.SPACE_XS),
        [l, o] = r.useState(t);
    t && !l && o(!0);
    let d = r.useRef(null),
        c = (function (e, t, n) {
            let [i, a] = r.useState(n);
            return (
                r.useLayoutEffect(() => {
                    let i = e.current;
                    if (!t || null == i) return;
                    let r = () => a(Math.max(i.offsetHeight, n));
                    r();
                    let s = new ResizeObserver(r);
                    return (s.observe(i), () => s.disconnect());
                }, [e, t, n]),
                i
            );
        })(d, l, a),
        [{ height: u, opacity: _, scale: E }, A] = (0, P.z)(() => {
            let e = +!!t;
            return { height: e, opacity: e, scale: e, config: w };
        }, "respect-motion-settings");
    return (r.useEffect(() => {
        let e = !0,
            n = requestIdleCallback(
                async function () {
                    let n = +!!t;
                    (await A({ height: n, opacity: n, scale: n }), e && !t && o(!1));
                },
                { timeout: 500 },
            );
        return () => {
            ((e = !1), cancelIdleCallback(n));
        };
    }, [A, t]),
    l)
        ? (0, i.jsx)(M.animated.div, {
              style: {
                  opacity: _,
                  height: u.to([0, 1], [0, c]),
                  marginBottom: u.to([0, 1], [-s, 0]),
                  transform: E.to([0, 1], [0.5, 1]).to((e) => `scale(${e})`),
              },
              children: (0, i.jsx)("div", { ref: d, children: (0, i.jsx)(x, { projects: n }) }),
          })
        : null;
}
var F = n(749884);
n(321073);
var B = n(862328),
    V = n(67811),
    H = n(27232),
    j = n(308528),
    W = n(933958),
    Y = n(969151),
    K = n(941971),
    $ = n(900848),
    z = n(771640),
    X = n(366811),
    q = n(616356),
    Z = n(734057),
    Q = n(309010),
    J = n(977997),
    ee = n(935208),
    et = n(181079),
    en = n(5180),
    ei = n(863005),
    er = n(152007),
    ea = n(458294),
    es = n(576705),
    el = n(573163),
    eo = n(543465),
    ed = n(428784),
    ec = n(451394),
    eu = n(597601),
    e_ = n(834730),
    eE = n(983851),
    eA = n(183623),
    eh = n(323384),
    ef = n(866665),
    eI = n(104171),
    ep = n(63995),
    eT = n(518769),
    em = n(287809),
    eg = n(607567),
    eS = n(403362),
    eN = n(652215),
    eC = n(105292),
    eO = n(785332);
function eR(e, t) {
    return 0 === t.length
        ? null
        : (0, i.jsxs)("div", {
              className: eO.nM,
              children: [
                  (0, i.jsx)(e, { className: eO.RI, color: "currentColor" }),
                  (0, i.jsx)(eI.Ay, { guildId: void 0, users: t, max: 6 }),
              ],
          });
}
function eL() {
    let e = (0, _.yK)([et.A, Z.A], () =>
            ee.default
                .keys(et.A.getFavoriteChannels())
                .map((e) => Z.A.getChannel(e))
                .filter(eS.Vq),
        ),
        t = e.map((e) => e.id),
        n = e.filter((e) => e.type === eN.rbe.GUILD_VOICE),
        r = e.filter((e) => e.type === eN.rbe.GUILD_STAGE_VOICE).map((e) => e.id),
        a = (0, _.yK)(
            [eg.Ay],
            () =>
                o().flatMap(n, (e) =>
                    eg.Ay.getVoiceStatesForChannel(e).map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
                ),
            [n],
        ),
        s = (0, _.yK)([ep.A], () =>
            o().flatMap(r, (e) =>
                ep.A.getMutableParticipants(e, eT.ip.SPEAKER)
                    .filter((e) => e.type === eT.wY.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
            ),
        ),
        l = (0, _.bG)([ep.A], () => {
            let e = 0;
            for (let t of r) e += ep.A.getParticipantCount(t, eT.ip.AUDIENCE);
            return e;
        }),
        d = (0, _.yK)(
            [q.A],
            () =>
                q.A.getAllApplicationStreams()
                    .filter((e) => t.includes(e.channelId))
                    .map((e) => e.ownerId),
            [t],
        ),
        c = (0, _.yK)(
            [W.Ay],
            () => {
                let e = W.Ay.getEmbeddedActivitiesByChannel(),
                    n = [];
                for (let i of t) n.push(...(e.get(i)?.flatMap((e) => Array.from(e.userIds)) ?? []));
                return n;
            },
            [t],
        ),
        u = (0, _.yK)([em.default], () => c.map((e) => em.default.getUser(e)), [c]),
        E = (0, _.yK)([em.default], () => d.map((e) => em.default.getUser(e)), [d]),
        A = eR(
            eE.H,
            a.filter((e) => !d.includes(e.id) && !c.includes(e.id)),
        ),
        h =
            0 === s.length
                ? null
                : (0, i.jsxs)("div", {
                      className: eO.nM,
                      children: [
                          (0, i.jsx)(ec.q, { size: "lg", color: "currentColor", className: eO.RI }),
                          (0, i.jsx)(eI.Ay, { guildId: void 0, users: s, max: 3 }),
                          (0, i.jsxs)("div", {
                              className: eO.GZ,
                              children: [
                                  (0, i.jsx)(eu.L, { size: "xs", color: "currentColor" }),
                                  (0, i.jsx)(e_.E, {
                                      className: eO._I,
                                      color: "text-default",
                                      variant: "text-xs/medium",
                                      children: l,
                                  }),
                              ],
                          }),
                      ],
                  }),
        f = eR(
            eA.F,
            E.filter((e) => null != e && !c.includes(e.id)),
        ),
        I = eR(eh.k, u);
    return (0, i.jsxs)(i.Fragment, { children: [h, A, f, I] });
}
function ey() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: s()(eO.nM, eO.Dl),
                children: (0, i.jsx)("span", { className: s()(eO.cN, eO.NT), children: eC.intl.string(eC.t.wMWyci) }),
            }),
            (0, i.jsx)(eL, {}),
        ],
    });
}
function eD(e) {
    let { "aria-label": t = !1, children: n } = e,
        a = r.useMemo(
            () =>
                (0, i.jsx)(e_.E, {
                    variant: "text-md/semibold",
                    color: "text-default",
                    className: eO.A_,
                    children: (0, i.jsx)(ey, {}),
                }),
            [],
        );
    return (0, i.jsx)(ef.m, {
        __unsupportedReactNodeAsText: a,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": !1 === t ? void 0 : t,
        asContainer: !0,
        children: n,
    });
}
var ev = n(195572);
let eb = { analyticsSource: { page: eN.liQ.GUILD_CHANNEL, section: eN.JJy.CHANNEL_LIST, object: eN.ZSU.CHANNEL } };
function eM() {
    let e,
        t,
        n,
        a,
        s,
        l,
        o,
        d,
        u,
        E,
        A,
        h,
        f = (0, c.Vd)("favorites"),
        [I, p] = r.useState(!1),
        T = (0, ed.$)("favorite-server-context"),
        { favoriteGuildMuted: m, favoriteChannels: g } = (0, _.cf)([et.A], () => ({
            favoriteChannels: et.A.getFavoriteChannels(),
            favoriteGuildMuted: et.A.favoriteGuildMuted,
        })),
        S = (0, _.bG)([Q.Ay], () => Q.Ay.getChannelId(eN.YYv)),
        N = (0, _.bG)([Z.A], () => Z.A.getChannel(S)),
        C = (0, X.A)((e) => e.guildId),
        O = (0, en.ai)(C),
        { badge: R, unread: L } = (0, _.cf)([ei.A, Z.A, ea.default, er.A, es.A, el.Ay, eo.Ay], () => {
            let e = ee.default.keys(g),
                t = new Set();
            return e.reduce(
                (e, n) => {
                    let i = Z.A.getChannel(n),
                        r = i?.getGuildId(),
                        a = el.Ay.getMentionCount(n);
                    if (
                        (t.has(n) || (t.add(n), (e.badge = e.badge + a)),
                        (e.unread = e.unread || (el.Ay.hasUnread(n) && ea.default.shouldCountChannelUnread(i, a))),
                        null != r)
                    ) {
                        let i = ei.A.getActiveJoinedRelevantThreadsForParent(r, n);
                        for (let n in i) {
                            let i = el.Ay.getMentionCount(n);
                            t.has(n) || (t.add(n), (e.badge += i));
                            let r = Z.A.getChannel(n);
                            e.unread = e.unread || (el.Ay.hasUnread(n) && ea.default.shouldCountChannelUnread(r, i));
                        }
                    }
                    return e;
                },
                { badge: 0, unread: !1 },
            );
        }),
        y =
            ((t = null != (e = (0, _.bG)([Q.Ay], () => Q.Ay.getVoiceChannelId())) && null != g[e]),
            (n = (0, _.bG)([q.A], () => {
                if (!t) return !1;
                let e = q.A.getCurrentUserActiveStream();
                return null != e && null != g[e.channelId];
            })),
            (a = (0, _.bG)([q.A], () => q.A.getAllApplicationStreams().some((e) => null != g[e.channelId]))),
            (s = (0, _.bG)([J.A], () => t && null != e && J.A.hasVideo(e), [t, e])),
            (l = (0, _.yK)([W.Ay], () =>
                ee.default.keys(g).reduce((e, t) => (e.push(...W.Ay.getEmbeddedActivitiesForChannel(t)), e), []),
            )),
            (o = (0, _.bG)([W.Ay], () =>
                Array.from(W.Ay.getSelfEmbeddedActivities().values()).some((e) => {
                    let { location: t } = e,
                        n = (0, Y.H)(t);
                    return null != n && null != g[n];
                }),
            )),
            (d = l.length > 0),
            (u = !1),
            (E = !1),
            (A = !1),
            (h = !1),
            t ? ((u = !s), (E = s), (A = n), (h = o)) : ((A = a), (h = d)),
            (0, z.oi)({ audio: u, video: E, screenshare: A, liveStage: !1, isCurrentUserConnected: t, activity: h })),
        D = R > 0 ? (0, z.wN)(R) : null;
    return (0, i.jsxs)($.c, {
        children: [
            (0, i.jsx)(K.A, { overlay: !0, selected: O, hovered: I, unread: L && !m }),
            (0, i.jsx)(eD, {
                children: (0, i.jsx)(B.Q, {
                    selected: !0,
                    upperBadge: y,
                    lowerBadge: D,
                    children: (0, i.jsx)("div", {
                        children: (0, i.jsx)(V.j, {
                            ...f,
                            ariaLabel: eC.intl.formatToPlainString(eC.t["/uzRss"], {
                                guildName: eC.intl.string(eC.t.wMWyci),
                                mentions: R,
                            }),
                            "aria-selected": O,
                            to: { pathname: eN.BVt.CHANNEL(eN.YYv, S), state: eb },
                            selected: O || I,
                            onMouseEnter: () => p(!0),
                            onMouseLeave: () => p(!1),
                            onMouseDown: function () {
                                null != N && j.A.preload(N.guild_id, N.id);
                            },
                            onContextMenu: T,
                            children: (0, i.jsx)(H.StarIcon, {
                                size: "custom",
                                color: "currentColor",
                                className: ev.w,
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
var eP = n(633965),
    eU = n(857071),
    ew = n(851109),
    eG = n(72314),
    ex = n(543897),
    ek = n(696451),
    eF = n(71393),
    eB = n(711014),
    eV = n(723702),
    eH = n(757780),
    ej = n(263715),
    eW = n(967198),
    eY = n(173860),
    eK = n(383394),
    e$ = n(131677),
    ez = n(73153);
let eX = {};
class eq extends _.Ay.PersistedStore {
    static displayName = "ViewHistoryStore";
    static persistKey = "ViewHistoryStore";
    initialize(e) {
        null != e &&
            Object.keys(e).forEach((t) => {
                "number" == typeof e[t] && (eX[t] = e[t]);
            });
    }
    getState() {
        return eX;
    }
    hasViewed(e) {
        return null != eX[e];
    }
}
let eZ = new eq(ez.h, {
    VIEW_HISTORY_MARK_VIEW: function (e) {
        let { key: t } = e;
        eX[t] = Date.now();
    },
});
var eQ = n(531685),
    eJ = n(583613);
let e0 = "app-download-item",
    e1 = "add-server-item";
function e2() {
    return !1;
}
function e3(e) {
    let t = ea.default.getMutableGuildStates();
    return (
        (e === eN.sFm.SERVER_DISCOVERY_BADGE && !eZ.hasViewed(eN.sFm.SERVER_DISCOVERY_BADGE)) ||
        (e !== e0 && e !== e1 && t[e ?? "null"]?.highImportanceMentionCount > 0)
    );
}
let e5 = (0, eJ.L_)((e, t, n) => ["null", ...t, ...e, e1, eN.sFm.E3_SERVER_DISCOVERY_BADGE, e0]);
function e4(e) {
    let { ref: t, ...n } = e,
        r = (0, _.yK)([eB.Ay, e$.A, ea.default], () =>
            e5(eB.Ay.getGuildFolders(), e$.A.getUnreadPrivateChannelIds(), ea.default.getStoreChangeSentinel()),
        ),
        a = (0, _.bG)([eQ.A], () => eQ.A.isFocused()),
        s = (0, _.bG)([eK.A], () => eK.A.getExpandedFolders());
    return (0, i.jsx)(eY.A, {
        ...n,
        ref: t,
        items: r,
        isUnread: e2,
        textUnread: eC.intl.string(eC.t.y2b7CA),
        textMention: eC.intl.string(eC.t.y2b7CA),
        isMentioned: e3,
        animate: a,
        expandedFolders: s,
    });
}
n(667532);
var e6 = n(868285),
    e7 = n(763827),
    e8 = n(778712),
    e9 = n(812993),
    te = n(442433),
    tt = n(620982),
    tn = n(571694),
    ti = n(47167),
    tr = n(598104),
    ta = n(976860),
    ts = n(114129),
    tl = n(442325),
    to = n(297334),
    td = n(427358),
    tc = n(907459),
    tu = n(994500),
    t_ = n(145408);
let tE = (0, n(240921).Ay)({
    kind: "user",
    name: "2026-10-guild-tooltip-lazy-content",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function tA(e) {
    let t = tE.useConfig({ location: e }).enabled,
        [n, i] = r.useState(!1),
        [a] = r.useState(() => new A.Ep());
    return (
        r.useEffect(() => () => a.stop(), [a]),
        {
            isOpen: n,
            shouldRenderRichContent: !t || n,
            handleTooltipShow: r.useCallback(() => {
                (a.stop(), i(!0));
            }, [a]),
            handleTooltipHide: r.useCallback(() => {
                a.start(300, () => i(!1));
            }, [a]),
        }
    );
}
function th(e) {
    let { icon: t, users: n } = e;
    return 0 === n.length
        ? null
        : (0, i.jsxs)("div", {
              className: eO.nM,
              children: [
                  (0, i.jsx)(t, { className: eO.RI, color: "currentColor" }),
                  (0, i.jsx)(eI.Ay, { users: n, max: 6 }),
              ],
          });
}
function tf(e) {
    let { muteConfig: t, className: n } = e;
    return t?.end_time == null
        ? (0, i.jsx)(e_.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: n,
              children: eC.intl.string(eC.t.fpKdS1),
          })
        : (0, i.jsx)(t_.A, { muteConfig: t, className: n });
}
function tI(e) {
    let t,
        n,
        a,
        l,
        o,
        d,
        c,
        u,
        E,
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
        (n = (0, _.bG)([tu.A], () => tu.A.getBlockedOrIgnoredIDs())),
        (a = (0, _.bG)([td.A], () => td.A.getUserAffinitiesMap(), [])),
        (l = (0, _.yK)(
            [W.Ay, em.default],
            () =>
                W.Ay.getEmbeddedActivitiesForChannel(t)
                    .flatMap((e) => Array.from(e.userIds))
                    .map((e) => em.default.getUser(e)),
            [t],
        )),
        (o = r.useMemo(() => (0, to.aw)(l, n), [l, n])),
        (d = r.useMemo(() => (0, tc.L)(o, a, "DirectMessageTooltip - activityUsers"), [o, a])),
        (c = (0, _.yK)(
            [q.A, em.default],
            () => {
                let e = q.A.getAllApplicationStreamsForChannel(t)
                    .map((e) => e.ownerId)
                    .map((e) => em.default.getUser(e));
                return (0, to.aw)(e, n);
            },
            [t, n],
        )),
        (u = r.useMemo(() => (0, to.aw)(c, n), [c, n])),
        (E = r.useMemo(() => (0, tc.L)(u, a, "DirectMessageTooltip - activityUsers"), [u, a])),
        (A = r.useMemo(() => E.filter((e) => !d.some((t) => t.id === e.id)), [E, d])),
        (h = (0, _.yK)(
            [eg.Ay],
            () => {
                let e = eg.Ay.getVoiceStatesForChannel(p).map((e) => {
                    let { user: t } = e;
                    return t;
                });
                return (0, to.aw)(e, n);
            },
            [p, n],
        )),
        (f = r.useMemo(() => (0, to.aw)(h, n), [h, n])),
        (I = r.useMemo(() => (0, tc.L)(f, a, "DirectMessageTooltip - voiceUsers"), [f, a])),
        {
            voiceUsers: r.useMemo(
                () => I.filter((e) => !d.some((t) => t.id === e.id) && !E.some((t) => t.id === e.id)),
                [I, d, E],
            ),
            streamUsers: A,
            activityUsers: d,
        }),
        N = (0, i.jsx)(th, { icon: eE.H, users: S }),
        C = (0, i.jsx)(th, { icon: eA.F, users: g }),
        O = (0, i.jsx)(th, { icon: eh.k, users: m }),
        { isMuted: R, muteConfig: L } = (0, _.cf)(
            [eo.Ay],
            () => ({ isMuted: eo.Ay.isChannelMuted(null, T), muteConfig: eo.Ay.getChannelMuteConfig(null, T) }),
            [T],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            N,
            C,
            O,
            R ? (0, i.jsx)(tf, { muteConfig: L, className: s()(eO.LM, { [eO.Sx]: null != N || null != C }) }) : null,
        ],
    });
}
function tp(e) {
    let { channel: t } = e,
        n = (0, ti.Ay)(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: s()(eO.nM, eO.Dl),
                children: (0, i.jsx)("span", { className: s()(eO.cN, eO.NT), children: n }),
            }),
            (0, i.jsx)(tI, { channel: t }),
        ],
    });
}
function tT(e) {
    let { channel: t, children: n } = e,
        a = (0, ti.Ay)(t),
        { shouldRenderRichContent: s, handleTooltipShow: l, handleTooltipHide: o } = tA("DirectMessageTooltip"),
        d = r.useMemo(
            () =>
                (0, i.jsx)(e_.E, {
                    variant: "text-md/semibold",
                    color: "text-default",
                    className: eO.A_,
                    children: s ? (0, i.jsx)(tp, { channel: t }) : a,
                }),
            [t, a, s],
        );
    return (0, i.jsx)(ef.m, {
        __unsupportedReactNodeAsText: d,
        onTooltipShow: l,
        onTooltipHide: o,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": a ?? void 0,
        asContainer: !0,
        children: n,
    });
}
class tm extends r.PureComponent {
    static defaultProps = { badge: 0, audio: !1, video: !1, isCurrentUserInThisDMCall: !1 };
    state = {
        hovered: !1,
        animating: !0,
        controller: new M.Controller({ scale: 0, height: 0, opacity: 0, config: w }),
    };
    componentWillEnter(e) {
        let { controller: t } = this.state;
        (e(),
            t
                .update({ immediate: !eQ.A.isFocused(), height: 1, opacity: 1, scale: 1, config: w })
                .start()
                .then(() => this.setState({ animating: !1 })));
    }
    componentWillAppear(e) {
        let { controller: t } = this.state;
        t.update({ immediate: !0, scale: 1, opacity: 1, height: 1, config: w }).start().then(e);
    }
    componentWillLeave(e) {
        let { controller: t } = this.state;
        this.setState({ animating: !0 }, () =>
            t.update({ immediate: !eQ.A.isFocused(), height: 0, opacity: 0, scale: 0, config: w }).start().then(e),
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
            t = e.type === eN.rbe.DM ? em.default.getUser(e.getRecipientId()) : null;
        return null != t ? t.getAvatarURL(void 0, 48, !1) : (0, tn.Y)(e);
    }
    handleSelectChannel = () => {
        let { channel: e } = this.props,
            t = tl.A.getTabForChannel(e.id);
        null != t ? (0, ts.ZD)(t.id) : (0, ta.pX)(eN.BVt.CHANNEL(eN.ME, e.id));
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            r = t.type === eN.rbe.DM ? em.default.getUser(t.getRecipientId()) : null;
        null != r
            ? (0, te.L3)(e, async () => {
                  let { default: e } = await Promise.all([
                      n.e("339715"),
                      n.e("790484"),
                      n.e("24312"),
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
                      n.e("591951"),
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
                  return (n) => (0, i.jsx)(e, { ...n, channel: t, user: r });
              })
            : (0, te.L3)(e, async () => {
                  let { default: e } = await Promise.all([
                      n.e("926132"),
                      n.e("893190"),
                      n.e("393336"),
                      n.e("146652"),
                      n.e("391763"),
                      n.e("955557"),
                      n.e("591951"),
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
                  return (n) => (0, i.jsx)(e, { ...n, channel: t, selected: !1 });
              });
    };
    render() {
        let {
                channel: e,
                channelName: t,
                selected: n,
                badge: r,
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
            f = () => {
                let a = tl.A.isEnabled();
                return (0, i.jsx)(V.j, {
                    to: a ? void 0 : eN.BVt.CHANNEL(eN.ME, e.id),
                    onClick: a ? this.handleSelectChannel : void 0,
                    onMouseEnter: () => this.setState({ hovered: !0 }),
                    onMouseLeave: () => this.setState({ hovered: !1 }),
                    selected: n || E,
                    ariaLabel:
                        null != t
                            ? [
                                  eC.intl.formatToPlainString(eC.t.hKarnZ, { name: t, mentions: r }),
                                  d ? eC.intl.string(eC.t["fk1/bX"]) : c ? eC.intl.string(eC.t["NGg/fm"]) : null,
                              ]
                                  .filter(Boolean)
                                  .join(", ")
                            : "",
                    onContextMenu: this.handleContextMenu,
                    icon: h ? void 0 : this.getChannelIcon(),
                    backgroundStyle: h ? "on-hover" : "always",
                    children: h
                        ? (0, i.jsx)(tr.A, {
                              channel: e,
                              size: e8._3.SIZE_40,
                              facepileSizeOverride: e8._3.SIZE_32,
                              "aria-hidden": !0,
                          })
                        : void 0,
                    ..._,
                });
            };
        return (0, i.jsx)(M.animated.div, {
            style: this.getAnimatedStyle(),
            children: (0, i.jsxs)($.c, {
                children: [
                    (0, i.jsx)(K.A, { overlay: !0, hovered: !A && E, selected: !A && n, unread: !A && u }),
                    (0, i.jsx)(tT, {
                        channel: e,
                        children: (0, i.jsx)(B.Q, {
                            rounded: !0,
                            selected: !1,
                            lowerBadge: r > 0 ? (0, z.wN)(r, void 0, !0) : null,
                            upperBadge: (0, z.oi)({ audio: a, video: s, screenshare: l, isCurrentUserConnected: o }),
                            lowerBadgeSize: { width: (0, e9.o6)(r) },
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
        r = n.channel.id,
        a = (0, ti.Ay)(n.channel),
        s = (0, c.Vd)(r, 2),
        l = (0, _.bG)([e7.A], () => e7.A.getChannelId(), []),
        o = (0, _.bG)([R.A], () => R.A.getMode(r), [r]),
        d = (0, _.bG)([q.A], () => q.A.getAllApplicationStreamsForChannel(r).length > 0),
        u = (0, _.bG)([eg.Ay], () => eg.Ay.getVoiceStatesForChannel(n.channel).length > 0, [n.channel]),
        E = (0, _.bG)([Q.Ay], () => Q.Ay.getChannelId(), []),
        A = (0, _.bG)([el.Ay], () => el.Ay.getMentionCount(r), [r]),
        f = l === r,
        { isIncomingCall: I, isOngoingCall: T } = (0, tt.A)(r),
        m = !1,
        g = !1;
    (f || u) && ((m = o === eN._Of.VOICE), (g = o === eN._Of.VIDEO));
    let S = (0, p.r)(h.A.modules.guildbar.AVATAR_SIZE);
    return (0, i.jsx)(tm, {
        ...n,
        ref: t,
        channelName: a,
        unread: A > 0,
        selected: E === r,
        badge: A,
        audio: m,
        video: g,
        stream: d,
        isCurrentUserInThisDMCall: f,
        isIncomingCall: I,
        isOngoingCall: T,
        size: S,
        treeItemProps: s,
    });
}
function tS() {
    (0, _.bG)([Z.A], () => Z.A.getPrivateChannelsVersion());
    let e = Z.A.getMutablePrivateChannels(),
        t = (0, _.yK)([e$.A], () => e$.A.getUnreadPrivateChannelIds()),
        { selectedVoiceGuildId: n, selectedVoiceChannelId: a } = (0, _.cf)([e7.A], () => ({
            selectedVoiceGuildId: e7.A.getGuildId(),
            selectedVoiceChannelId: e7.A.getChannelId(),
        })),
        s = t.map((t) => {
            let n = e[t];
            return null == n || n.id === a ? null : (0, i.jsx)(tg, { channel: n }, n.id);
        }),
        l = null == n && null != a ? e[a] : null;
    return (
        null != l && s.unshift((0, i.jsx)(tg, { channel: l }, l.id)),
        (0, i.jsx)(f.B, {
            id: "guild-list-unread-dms",
            role: "group",
            "aria-label": eC.intl.string(eC.t.YUU0RF),
            gap: "xs",
            hidden: s.length < 1,
            children: (0, i.jsx)(e6.F, { component: r.Fragment, children: s }),
        })
    );
}
var tN = n(192308),
    tC = n(32880),
    tO = n(939249),
    tR = n(550591),
    tL = n(93776);
let ty = function (e) {
        let { ref: t, ...n } = e,
            {
                id: a,
                onClick: l,
                onContextMenu: o,
                icon: d,
                selected: u,
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
            N = (0, c.Vd)(a),
            [C, O] = r.useState(!1),
            R = p ?? ("string" == typeof _ ? _ : void 0);
        return (0, i.jsxs)($.c, {
            children: [
                f ? (0, i.jsx)(K.A, { overlay: !0, hovered: C, selected: u }) : null,
                (0, i.jsx)(tR.A, {
                    text: _,
                    selected: u,
                    children: (0, i.jsx)(B.Q, {
                        selected: !0,
                        upperBadge: E,
                        lowerBadge: A,
                        lowerBadgeSize: h,
                        children: (0, i.jsx)(tO.D, {
                            innerRef: t,
                            onMouseEnter: () => {
                                (m?.(), O(!0));
                            },
                            onMouseLeave: () => {
                                (g?.(), O(!1));
                            },
                            onMouseDown: S,
                            className: s()(tL.oZ, I, { [tL.wH]: u || C }),
                            onClick: l,
                            "aria-label": R,
                            "aria-selected": u,
                            onContextMenu: o,
                            focusProps: { enabled: !1 },
                            ...N,
                            children: null != d && (0, i.jsx)(d, { className: tL.sF, color: "currentColor" }),
                        }),
                    }),
                }),
                T,
            ],
        });
    },
    tD = "DOWNLOAD_APPS";
function tv() {
    let e = (0, tN.useModalsStore)((e) => (0, tN.hasModalOpenSelector)(e, tD));
    return (0, i.jsx)(ty, {
        id: "app-download-button",
        onClick: () => {
            (0, tN.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 987482));
                    return (t) => (0, i.jsx)(e, { source: "Guilds", ...t });
                },
                { modalKey: tD },
            );
        },
        selected: e,
        tooltip: eC.intl.string(eC.t.Z7jwrJ),
        icon: tC.DownloadIcon,
    });
}
var tb = n(245604),
    tM = n(630685),
    tP = n(272613),
    tU = n(398884),
    tw = n(772366),
    tG = n(728321),
    tx = n(260509),
    tk = n(531053),
    tF = n(819638),
    tB = n(260727);
let tV = { origin: { x: -16, y: 0 }, targetWidth: 48, targetHeight: 48, offset: { x: 0, y: 0 } };
function tH(e) {
    (0, te.L3)(e, async () => {
        let { default: e } = await n.e("117288").then(n.bind(n, 4571));
        return (t) => (0, i.jsx)(e, { ...t });
    });
}
function tj(e) {
    let { onClick: t, ...n } = e,
        r = (0, tM.P)("guild_list_add_server");
    return (0, i.jsx)(ty, { ...n, onClick: () => t(r), tooltip: eC.intl.string(r ? eC.t.riOUtB : eC.t.l5WIbf) });
}
function tW(e) {
    let { disableTooltip: t, lastTargetNode: n } = e,
        a = (0, _.yK)([eF.A], () => eF.A.getGuildsArray()),
        s = (0, _.bG)([em.default], () => em.default.getCurrentUser()),
        l = r.useMemo(() => a.some((e) => (0, tx.bM)(e, s)), [a, s]),
        o = (0, tN.useModalsStore)((e) => (0, tN.hasModalOpenSelector)(e, tF.fc)),
        { analyticsLocations: d } = (0, O.Ay)(),
        c = a.length >= eN.qlD && !(0, tU.Om)(s);
    function u(e) {
        (0, tU.Sn)()
            ? (0, tw.A)({
                  analyticsSource: { page: eN.ThZ.CREATE_JOIN_GUILD_MODAL },
                  analyticsLocation: { page: eN.ThZ.CREATE_JOIN_GUILD_MODAL, section: eN.JJy.GUILD_CAP_UPSELL_MODAL },
                  analyticsLocations: d,
              })
            : tP.A.openCreateGuildModal({ location: "Guild List", ...(e && { joinFirst: e }) });
    }
    let E = { showPill: !1, id: "create-join-button", selected: o, onContextMenu: tH, icon: tb.U };
    return (0, i.jsx)("div", {
        className: tB.Uq,
        children: (0, i.jsxs)(tG.A, {
            tutorialId: l ? "create-more-servers" : "create-first-server",
            inlineSpecs: tV,
            position: "right",
            disabled: t,
            children: [
                c
                    ? (0, i.jsx)(ty, { ...E, onClick: () => u(!1), tooltip: eC.intl.string(eC.t.l5WIbf) })
                    : (0, i.jsx)(tj, { ...E, onClick: u }),
                null != n &&
                    (0, i.jsx)(tk.Ay, {
                        name: eC.intl.string(eC.t["45xjM5"]),
                        targetNode: n,
                        below: !0,
                        noCombine: !0,
                    }),
            ],
        }),
    });
}
var tY = n(565787),
    tK = n(791606),
    t$ = n(486020),
    tz = n(183588);
function tX(e) {
    let [t, a] = r.useState(!1),
        s = (0, c.Vd)(`guild-${e.id}`);
    return (0, i.jsx)($.c, {
        children: (0, i.jsx)(tR.A, {
            text: e.name,
            children: (0, i.jsx)(B.Q, {
                className: tz.o,
                selected: t,
                lowerBadge: (0, i.jsx)(e9.fk, { icon: (0, tY.k)(tK.A), disableColor: !0, className: tz._ }),
                children: (0, i.jsx)(V.j, {
                    name: e.name,
                    onMouseEnter: function () {
                        a(!0);
                    },
                    onMouseLeave: function () {
                        a(!1);
                    },
                    onClick: function () {
                        (0, tN.openModalLazy)(async () => {
                            let { default: t } = await n.e("642945").then(n.bind(n, 537560));
                            return (n) => (0, i.jsx)(t, { name: e.name, guildId: e.id, ...n });
                        });
                    },
                    icon:
                        null != e.icon
                            ? t$.Ay.getGuildIconURL({ id: e.id, icon: e.icon, canAnimate: !1, size: 42 })
                            : null,
                    ...s,
                }),
            }),
        }),
    });
}
var tq = n(696292),
    tZ = n(836480),
    tQ = n(533129),
    tJ = n(726845),
    t0 = n(837057),
    t1 = n(310419),
    t2 = n(488995),
    t3 = n(324580),
    t5 = n(190107);
let t4 = function (e) {
    let { selected: t, onClick: n, questId: a, className: s, ref: l } = e,
        o = r.useCallback(() => {
            (0, tQ.WL)({ source: t2.GlobalDiscoveryAnalyticsLocations.GUILDS_BAR_ICON });
            let e = void 0 !== a ? t2.GlobalDiscoveryTab.QUESTS : tJ.A.getField("selectedTab");
            switch (e) {
                case t2.GlobalDiscoveryTab.QUESTS:
                    return (0, t0.transitionToGlobalDiscovery)({
                        tab: t2.GlobalDiscoveryTab.QUESTS,
                        location: t5.rE.DISCOVERY_COMPASS,
                        questContent: tq.u.DISCOVERY_COMPASS,
                        questId: a,
                    });
                case t2.GlobalDiscoveryTab.SERVERS:
                    return (0, t0.transitionToGlobalDiscovery)({
                        tab: t2.GlobalDiscoveryTab.SERVERS,
                        entrypoint: t3.J8.GUILDS_BAR,
                    });
                case t2.GlobalDiscoveryTab.APPS:
                    return (0, t0.transitionToGlobalDiscovery)({
                        tab: t2.GlobalDiscoveryTab.APPS,
                        newSessionState: {
                            entrypoint: { name: t1.sW.GLOBAL_DISCOVERY_BUTTON },
                            restorePreviousView: !0,
                        },
                    });
                default:
                    return (0, t0.transitionToGlobalDiscovery)({ tab: e });
            }
        }, [a]);
    return (0, i.jsx)(ty, {
        id: "guild-discover-button",
        ref: l,
        className: s,
        onClick: () => {
            (o(), void 0 !== n && n());
        },
        selected: t,
        tooltip: eC.intl.string(eC.t["4nEZLk"]),
        icon: tZ.CompassIcon,
    });
};
var t6 = n(506774),
    t7 = n(509963),
    t8 = n(111159),
    t9 = n(793943),
    ne = n(24482),
    nt = n(350972),
    nn = n(677056),
    ni = n(526162),
    nr = n(174197);
function na() {
    let [e, t] = (0, _.yK)([em.default, ni.A], () => [
            ni.A.getCurrentDesktopIcon(),
            ne.Ay.isPremium(em.default.getCurrentUser()),
        ]),
        n = (0, t9.fy)().activePanel === t9.HP.APP_ICON,
        r = (0, nr.gG)(e),
        a = r.id !== nt.LW.DEFAULT && (t || n),
        s = (0, i.jsx)(t8.p, { size: "custom", color: "currentColor", width: 24, height: 24 });
    return null != r && a ? (0, i.jsx)(nn.A, { id: r.id, size: nr.N8.SIZE_48 }) : s;
}
var ns = n(531260),
    nl = n(411976),
    no = n(912309),
    nd = n(400492),
    nc = n(354670),
    nu = n(619921),
    n_ = n(340829),
    nE = n(966846),
    nA = n(674378),
    nh = n(394953),
    nf = n(202541),
    nI = n(235079),
    np = n(222219);
let nT = { origin: { x: -16, y: 0 }, targetWidth: 48, targetHeight: 48, offset: { x: 0, y: 0 } };
function nm(e) {
    let { selected: t, user: n, badge: a, link: s, showProgressBadge: l } = e,
        [o, d] = r.useState(!1),
        [u, _] = r.useState(!1),
        [E, A] = r.useState(null),
        [h, f] = r.useState(0),
        I = (0, c.Vd)("home"),
        p = (0, t9.fy)().activePanel === t9.HP.APP_ICON;
    function T() {
        (A(null), f(0), clearTimeout(E));
    }
    if (null == n) return null;
    let m = eC.intl.string(eC.t.YUU0RF);
    u && (m = t6.w.get(eN.wqg) ? eC.intl.string(eC.t["nkq1l+"]) : eC.intl.string(eC.t.Be8Q5E));
    let g = null;
    !t && l && (g = (0, i.jsx)(t7.A, { className: np.Cp, determineOwnVisibility: !1 }));
    let S = t || o || p,
        N = (0, i.jsx)(B.Q, {
            selected: !0,
            lowerBadge: a > 0 ? (0, z.wN)(a) : null,
            upperBadge: g,
            lowerBadgeSize: { width: (0, e9.o6)(a) },
            children: (0, i.jsx)(V.j, {
                onMouseEnter: () => d(!0),
                onMouseLeave: () => d(!1),
                onClick: function () {
                    if (!__OVERLAY__ && (null != E && clearTimeout(E), A(setTimeout(T, 500)), f(h + 1), 15 === h)) {
                        T();
                        let e = !t6.w.get(eN.wqg);
                        (t6.w.set(eN.wqg, e),
                            e && t6.w.set(nI.L, !0),
                            e ? (0, nd.Ak)("discodo") : (0, nd.Ak)("user_leave"),
                            _(!0),
                            setTimeout(() => {
                                _(!1);
                            }, 1e3));
                    }
                },
                selected: S,
                ariaLabel: eC.intl.string(eC.t.YUU0RF),
                "aria-owns": "guild-list-unread-dms",
                "aria-selected": t,
                ...I,
                to: {
                    pathname: s,
                    state: {
                        analyticsSource: {
                            page: eN.liQ.GUILD_CHANNEL,
                            section: eN.JJy.NAVIGATION,
                            object: eN.ZSU.BUTTON_HOME,
                        },
                    },
                },
                children: (0, i.jsx)(na, {}),
            }),
        });
    return (0, i.jsx)("div", {
        className: np.Uq,
        "data-guilds-bar-home": !0,
        children: (0, i.jsx)(tG.A, {
            inlineSpecs: nT,
            tutorialId: "friends-list",
            position: "right",
            children: (0, i.jsxs)($.c, {
                children: [
                    (0, i.jsx)(K.A, { overlay: !0, selected: t, hovered: o }),
                    (0, i.jsx)(tR.A, { hideOnClick: !0, text: m, selected: t, children: N }),
                ],
            }),
        }),
    });
}
function ng() {
    let e = (function () {
            let e = (0, X.A)((e) => e.guildId),
                { pathname: t } = (0, d.zy)(),
                n = t.startsWith(eN.BVt.GUILD_DISCOVERY) || t.startsWith(eN.BVt.GLOBAL_DISCOVERY),
                i = t.startsWith(eN.BVt.GUILD_MEMBER_VERIFICATION("")),
                r = (0, nh.lI)(),
                a = t.startsWith(eN.BVt.CONJURE);
            return null == e && !(n || i || r || a);
        })(),
        t = (0, _.bG)([nE.A, n_.A], () => {
            let e = (0, t7.v)(nE.A.activeItems, n_.A),
                { total: t, progress: n } = nA.zY(e),
                i = nA.uA(n, t);
            return i > 0 && i < 100;
        }),
        n = (0, no.kX)(),
        r = Object.keys(nf.kb),
        a = (0, ns.A)(),
        { unviewedTrialCount: s, unviewedDiscountCount: l } = (0, _.cf)([nc.A], () => ({
            unviewedTrialCount: nc.A.getUnacknowledgedOffers(r).length,
            unviewedDiscountCount: nc.A.getUnacknowledgedDiscountOffers().length,
        })),
        o = a.fractionalState === nf.xc.NONE ? s + l : 0,
        c = (0, _.bG)([em.default], () => em.default.getCurrentUser()),
        u = (0, nl.W)(),
        E = n + o + u,
        A = E === o && o > 0 && n + u === 0,
        h = nu.A.getHomeLink();
    return (
        A && (h = eN.BVt.APPLICATION_STORE),
        (0, i.jsx)(nm, {
            selected: e,
            user: c,
            selectedChannelId: Q.Ay.getChannelId(eN.ME),
            badge: E,
            link: h,
            showProgressBadge: t,
        })
    );
}
var nS = n(545328);
function nN(e) {
    let { fullWidth: t } = e;
    return (0, i.jsx)($.c, { children: (0, i.jsx)("div", { className: s()(nS.t, { [nS.I]: t }) }) });
}
var nC = n(28863),
    nO = n(695366),
    nR = n(919638),
    nL = n(818348),
    ny = n(837669);
function nD() {
    let e = (0, _.bG)([nR.A, eF.A], () => nR.A.unavailableGuilds.filter((e) => null == eF.A.getGuild(e)).length),
        t = (0, c.Vd)("unavailable-guilds-button");
    return e <= 0
        ? null
        : (0, i.jsx)($.c, {
              children: (0, i.jsx)(tR.A, {
                  text: eC.intl.format(eC.t["TnH05/"], { count: e }),
                  children: (0, i.jsx)(nC.Anchor, {
                      href: nL.qF.STATUS,
                      target: "_blank",
                      className: ny.h,
                      "aria-label": eC.intl.formatToPlainString(eC.t["MEpX+2"], { count: e }),
                      ...t,
                      children: (0, i.jsx)(nO.E, { color: "currentColor", "aria-hidden": !0 }),
                  }),
              }),
          });
}
var nv = n(66834),
    nb = n(36412),
    nM = n(299874),
    nP = n(354583);
let nU = r.memo(function (e) {
    let t,
        a,
        s,
        l,
        o,
        d,
        c,
        u,
        E,
        A,
        h,
        { folderNode: f, ...I } = e,
        { id: p, name: T, color: m, children: g } = f,
        S = g.map((e) => e.id),
        N = (0, X.A)((e) => e.guildId),
        C = (0, _.bG)([eK.A], () => eK.A.isFolderExpanded(p)),
        O = (0, nb.y)(f),
        R =
            ((t = (0, _.bG)([e7.A], () => e7.A.getGuildId())),
            (a = f.children.map((e) => e.id)),
            (s = null != t && a.includes(t)),
            (l = !1),
            (o = !1),
            (d = !1),
            (c = (0, _.bG)([e7.A], () => e7.A.getChannelId())),
            (E = null != (u = (0, nP.A)()?.guild_id) && a.includes(u)),
            (A = (0, _.bG)([J.A], () => null != c && J.A.hasVideo(c), [c])),
            (h = (0, _.bG)([q.A], () => q.A.getCurrentUserActiveStream())),
            s && ((l = !A), (o = A), (d = null != h && null != h.guildId && a.includes(h.guildId))),
            r.useMemo(
                () => ({ audio: l, video: o, screenshare: d, liveStage: E, isCurrentUserConnected: s }),
                [l, o, d, E, s],
            )),
        {
            mentionCount: L,
            isMentionLowImportance: y,
            unread: D,
        } = (0, _.cf)([ea.default], () => ({
            mentionCount: S.map((e) => ea.default.getMentionCount(e)).reduce((e, t) => e + t, 0),
            isMentionLowImportance: S.every((e) => ea.default.getIsMentionLowImportance(e)),
            unread: S.some((e) => ea.default.hasUnread(e)),
        })),
        v = r.useCallback(() => {
            nv.A.toggleGuildFolderExpand(p);
        }, [p]),
        b = r.useCallback(
            (e) => {
                (0, te.L3)(e, async () => {
                    let { default: e } = await Promise.all([n.e("114748"), n.e("906240")]).then(n.bind(n, 595139));
                    return (t) =>
                        (0, i.jsx)(e, { ...t, folderId: p, folderName: T, folderColor: m, unread: D || L > 0 });
                });
            },
            [p, T, m, D, L],
        );
    return (0, i.jsx)(nM.A, {
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
var nw = n(113494),
    nG = n(821124),
    nx = n(212455);
function nk(e) {
    let t = e?.features.has(eN.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL),
        n = (0, _.bG)(
            [nx.A, em.default, ek.Ay],
            () => {
                if (null == e) return;
                let t = nx.A.getRequest(e.id),
                    n = em.default.getCurrentUser();
                if (null == n || null == t || t.userId !== n.id) return;
                let i = ek.Ay.getMember(e.id, t.userId);
                if (!(null != i && !i.isPending) || (0, nG.Oe)(t)) return t.applicationStatus;
            },
            [e],
        );
    return t ? n : void 0;
}
var nF = n(347951),
    nB = n(34162);
function nV(e) {
    return (0, _.bG)([nB.A], () => nB.A.getGuildMediaState(e), [e]);
}
var nH = n(739822),
    nj = n(607399),
    nW = n(702841),
    nY = n(817281),
    nK = n(15152),
    n$ = n(345942),
    nz = n(676279),
    nX = n(866323),
    nq = n(548118),
    nZ = n(327580);
function nQ(e) {
    let { guild: t, show: n, active: r, onAnimationStart: a, onAnimationRest: l } = e,
        o = {},
        d = {};
    ((o.transform = "translate3d(10px, 10px, 0) scale3d(3, 3, 1)"),
        (d.transform = "translate3d(0, 0, 0) scale3d(1, 1, 1)"));
    let c = (0, p.r)(h.A.unsafe_rawColors.BRAND_500).hex(),
        u = (0, p.r)(h.A.unsafe_rawColors.PRIMARY_630).hex();
    r && null == t.icon && ((o.backgroundColor = c), (d.backgroundColor = u));
    let _ = (0, nX.p)(n, { from: o, enter: d, leave: o, config: { duration: 100 }, onStart: a, onRest: l });
    return (0, i.jsx)(i.Fragment, {
        children: _(
            (e, n, r) =>
                n &&
                (0, i.jsx)(
                    "div",
                    {
                        className: nZ.qc,
                        children: (0, i.jsx)("div", {
                            className: s()(nZ.MJ, nZ.L0),
                            style: { margin: 0 },
                            children: (0, i.jsx)(M.animated.div, {
                                className: nZ.NG,
                                style: e,
                                children: (0, i.jsx)("div", {
                                    className: nZ.qJ,
                                    children: (0, i.jsx)("div", {
                                        className: nZ.jg,
                                        children: (0, i.jsx)(nq.Ay, {
                                            guild: t,
                                            size: nq.Ay.Sizes.SMOL,
                                            className: nZ.VL,
                                        }),
                                    }),
                                }),
                            }),
                        }),
                    },
                    r.key,
                ),
        ),
    });
}
var nJ = n(454938),
    n0 = n(714991),
    n1 = n(107773),
    n2 = n(513461),
    n3 = n(164956),
    n5 = n(624265),
    n4 = n(970278),
    n6 = n(808728);
let n7 = (0, n(945810).mj)({
    name: "2026-09-server-tooltip-notification-context",
    kind: "user",
    defaultConfig: { mode: "disabled" },
    variations: { 0: { mode: "disabled" }, 1: { mode: "latest" }, 2: { mode: "mentions_first" } },
});
function n8(e) {
    let { guildId: t, mode: n } = e,
        { channel: r, hasMention: a } = (0, _.cf)(
            [eo.Ay, Z.A, ei.A, el.Ay, ea.default],
            () => {
                if (eo.Ay.isMuted(t)) return { channel: null, hasMention: !1 };
                let e = { latest: null, latestMention: null };
                function i(t) {
                    if (!el.Ay.hasUnreadOrMentions(t.id)) return;
                    let n = el.Ay.getMentionCount(t.id);
                    if (!ea.default.shouldCountChannelUnread(t, n)) return;
                    let i = el.Ay.lastMessageId(t.id);
                    if (null == i) return;
                    let r = { channel: t, hasMention: n > 0, lastMessageId: i };
                    ((null == e.latest || ee.default.compare(i, e.latest.lastMessageId) > 0) && (e.latest = r),
                        r.hasMention &&
                            (null == e.latestMention || ee.default.compare(i, e.latestMention.lastMessageId) > 0) &&
                            (e.latestMention = r));
                }
                let r = Z.A.getMutableGuildChannelsForGuild(t);
                for (let e in r) i(r[e]);
                let a = ei.A.getActiveJoinedThreadsForGuild(t);
                for (let e in a)
                    for (let t in a[e]) {
                        let e = Z.A.getChannel(t);
                        null != e && i(e);
                    }
                let s = "mentions_first" === n ? (e.latestMention ?? e.latest) : e.latest;
                return { channel: s?.channel ?? null, hasMention: s?.hasMention ?? !1 };
            },
            [t, n],
        ),
        s = (0, ti.Ay)(r);
    return null == r || null == s || 0 === s.length
        ? null
        : (0, i.jsx)(e_.E, {
              className: eO.T5,
              color: "text-muted",
              variant: "text-xs/normal",
              lineClamp: 1,
              children: eC.intl.formatToPlainString(a ? eC.t.HwW3zP : eC.t.FwKQxx, { channelName: s }),
          });
}
function n9(e, t, n) {
    return 0 === t.length
        ? null
        : (0, i.jsxs)("div", {
              className: eO.nM,
              children: [
                  (0, i.jsx)(e, { className: eO.RI, color: "currentColor" }),
                  (0, i.jsx)(eI.Ay, { guildId: n, users: t, max: 6 }),
              ],
          });
}
function ie(e) {
    let { muteConfig: t, className: n } = e;
    return t?.end_time == null
        ? (0, i.jsx)(e_.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: n,
              children: eC.intl.string(eC.t.fpKdS1),
          })
        : (0, i.jsx)(t_.A, { muteConfig: t, className: n });
}
function it(e) {
    let t,
        n,
        a,
        l,
        d,
        c,
        u,
        E,
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
        (n = (0, _.yK)(
            [n6.Ay, n4.A, eo.Ay],
            () => [
                ...n6.Ay.getChannels(t)
                    [n6.vM].filter((e) => {
                        let { channel: n } = e;
                        return n.type === eN.rbe.GUILD_VOICE && !eo.Ay.isChannelMuted(t, n.id);
                    })
                    .map((e) => {
                        let { channel: t } = e;
                        return t.id;
                    }),
                ...Object.values(n4.A.getThreadsForGuild(t)).flatMap((e) => Object.keys(e)),
            ],
            [t],
        )),
        (a = (0, n5.Ay)(t)),
        (l = r.useMemo(() => a.map((e) => e.id), [a])),
        (d = (0, _.bG)([eg.Ay], () => eg.Ay.getVoiceStates(t), [t])),
        (c = (0, _.bG)([tu.A], () => tu.A.getBlockedOrIgnoredIDs())),
        (u = o().flatMap(n, (e) => {
            if (e === R.afkChannelId) return [];
            let t = (d[e] ?? []).map((e) => {
                let { user: t } = e;
                return t;
            });
            return (0, to.aw)(t, c);
        })),
        (E = (0, _.yK)([ep.A], () =>
            o().flatMap(l, (e) => {
                if (e === R.afkChannelId) return [];
                let t = ep.A.getMutableParticipants(e, eT.ip.SPEAKER)
                    .filter((e) => e.type === eT.wY.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    });
                return (0, to.aw)(t, c);
            }),
        )),
        (A = (0, _.bG)([ep.A], () => {
            let e = 0;
            for (let t of l) e += ep.A.getParticipantCount(t, eT.ip.AUDIENCE);
            return e;
        })),
        (h = (0, _.yK)(
            [q.A, eo.Ay],
            () => {
                let e = q.A.getAllApplicationStreams()
                    .filter((e) => e.guildId === t && !eo.Ay.isChannelMuted(t, e.channelId))
                    .map((e) => e.ownerId);
                return (0, to.F7)(e, c);
            },
            [c, t],
        )),
        (f = (0, _.yK)(
            [W.Ay, Z.A],
            () => {
                let e = W.Ay.getEmbeddedActivitiesForGuild(t)
                    .filter((e) => {
                        let t = Z.A.getBasicChannel((0, Y.H)(e.location));
                        return t?.type !== eN.rbe.GUILD_SPACE;
                    })
                    .flatMap((e) => Array.from(e.userIds));
                return (0, to.F7)(e, c);
            },
            [t, c],
        )),
        (I = (0, _.yK)(
            [em.default],
            () => {
                let e = f.map((e) => em.default.getUser(e));
                return (0, to.aw)(e);
            },
            [f],
        )),
        (p = (0, _.yK)([em.default], () => h.map((e) => em.default.getUser(e)), [h])),
        (T = u.filter((e) => !h.includes(e.id) && !f.includes(e.id))),
        (m = (0, to.aw)(T)),
        (g = p.filter((e) => null != e && !f.includes(e.id))),
        (S = (0, _.bG)([td.A], () => td.A.getUserAffinitiesMap(), [])),
        (N = r.useMemo(() => (0, tc.L)(m, S, "GuildTooltip - nonBlockedUsers"), [m, S])),
        (C = r.useMemo(() => (0, tc.L)(E, S, "GuildTooltip - stageSpeakers"), [E, S])),
        (O = r.useMemo(() => (0, tc.L)(g, S, "GuildTooltip - streamUsers"), [g, S])),
        {
            voiceUsersToShow: N,
            stageSpeakers: C,
            numStageListeners: A,
            streamUsersToShow: O,
            embeddedActivitiesUsers: r.useMemo(() => (0, tc.L)(I, S, "GuildTooltip - embeddedActivitiesUsers"), [I, S]),
            hasActivity: E.length > 0 || T.length > 0 || g.length > 0 || I.length > 0,
        }),
        P = n9(eE.H, y, L),
        U =
            0 === D.length
                ? null
                : (0, i.jsxs)("div", {
                      className: eO.nM,
                      children: [
                          (0, i.jsx)(ec.q, { size: "lg", color: "currentColor", className: eO.RI }),
                          (0, i.jsx)(eI.Ay, { guildId: L, users: D, max: 3 }),
                          (0, i.jsxs)("div", {
                              className: eO.GZ,
                              children: [
                                  (0, i.jsx)(eu.L, { size: "xs", color: "currentColor" }),
                                  (0, i.jsx)(e_.E, {
                                      className: eO._I,
                                      color: "text-default",
                                      variant: "text-xs/normal",
                                      children: v,
                                  }),
                              ],
                          }),
                      ],
                  }),
        w = n9(eA.F, b, L),
        G = n9(eh.k, M, L),
        { isMuted: x, muteConfig: k } = (0, _.cf)(
            [eo.Ay],
            () => ({ isMuted: eo.Ay.isMuted(L), muteConfig: eo.Ay.getMuteConfig(L) }),
            [L],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            U,
            P,
            w,
            G,
            x ? (0, i.jsx)(ie, { muteConfig: k, className: s()(eO.LM, { [eO.Sx]: null != P || null != w }) }) : null,
        ],
    });
}
function ii(e) {
    let { guildJoinRequestStatus: t } = e;
    return (0, i.jsx)(e_.E, {
        className: eO.BT,
        color: "text-default",
        variant: "text-xs/normal",
        children: (function (e) {
            switch (e) {
                case n2.B5.SUBMITTED:
                    return eC.intl.string(eC.t["9KFC98"]);
                case n2.B5.REJECTED:
                    return eC.intl.string(eC.t["TQY/Rd"]);
                case n2.B5.APPROVED:
                    return eC.intl.string(eC.t.WXHcq5);
                default:
                    return eC.intl.string(eC.t.fjHFC8);
            }
        })(t),
    });
}
function ir(e) {
    let { guild: t, isTooltipShown: n, shouldShowNotificationContext: r } = e,
        a = (0, nJ.A)(t),
        l = nk(t),
        o = null != l ? (0, i.jsx)(ii, { guildJoinRequestStatus: l }) : null,
        d = (0, i.jsx)(it, { guild: t }),
        c = (0, _.bG)([n3.A], () => n3.A.isViewingRoles(t.id)),
        u = (0, nF.Ig)(t),
        E =
            n && r
                ? (function () {
                      let { mode: e } = n7.getConfig({ location: "GuildTooltip.serverTooltipNotificationContext" });
                      return e;
                  })()
                : "disabled";
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: s()(eO.nM, eO.Dl),
                children: [
                    a
                        ? (0, i.jsx)(n1.A, { disableBoostClick: !0, guild: t, className: eO.WX })
                        : (0, i.jsx)(n0.A, { guild: t, size: 20, className: eO.aL }),
                    (0, i.jsx)("span", { className: s()(eO.cN, eO.NT), children: t.name }),
                ],
            }),
            "disabled" !== E ? (0, i.jsx)(n8, { guildId: t.id, mode: E }) : null,
            u
                ? (0, i.jsx)(e_.E, {
                      className: eO.Ef,
                      color: "text-default",
                      variant: "text-sm/medium",
                      children: eC.intl.string(eC.t["2n0/Fk"]),
                  })
                : null,
            c
                ? (0, i.jsx)(e_.E, {
                      className: eO.BT,
                      color: "text-default",
                      variant: "text-xs/normal",
                      children: eC.intl.string(eC.t["5LwN89"]),
                  })
                : (o ?? d),
        ],
    });
}
function ia(e) {
    let { guild: t, shouldShowNotificationContext: n = !1, disabled: a = !1, children: s } = e,
        { isOpen: l, shouldRenderRichContent: o, handleTooltipShow: d, handleTooltipHide: c } = tA("GuildTooltip"),
        u = r.useMemo(
            () =>
                a
                    ? null
                    : (0, i.jsx)(e_.E, {
                          variant: "text-md/semibold",
                          color: "text-default",
                          className: eO.A_,
                          children: o
                              ? (0, i.jsx)(ir, { guild: t, isTooltipShown: l, shouldShowNotificationContext: n })
                              : t.name,
                      }),
            [a, t, l, o, n],
        );
    return (0, i.jsx)(ef.m, {
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
var is = n(107385),
    il = n(937067);
let io = { analyticsSource: { page: eN.liQ.GUILD_CHANNEL, section: eN.JJy.CHANNEL_LIST, object: eN.ZSU.CHANNEL } };
function id(e, t) {
    (0, te.L3)(e, async () => {
        let { default: e } = await Promise.all([
            n.e("203112"),
            n.e("876364"),
            n.e("135144"),
            n.e("996907"),
            n.e("816027"),
            n.e("562772"),
            n.e("8159"),
            n.e("24312"),
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
            n.e("412117"),
            n.e("263406"),
            n.e("1955"),
            n.e("341161"),
            n.e("410526"),
            n.e("202985"),
            n.e("603619"),
            n.e("175927"),
            n.e("470126"),
            n.e("149697"),
            n.e("128804"),
            n.e("60882"),
            n.e("71151"),
            n.e("227853"),
            n.e("286615"),
            n.e("735042"),
            n.e("311541"),
            n.e("274227"),
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
            n.e("367707"),
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
            n.e("206189"),
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
            n.e("228271"),
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
            n.e("670870"),
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
            n.e("267387"),
            n.e("816348"),
            n.e("165291"),
            n.e("109383"),
            n.e("818291"),
            n.e("243794"),
            n.e("519435"),
            n.e("10985"),
            n.e("171206"),
            n.e("975366"),
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
            n.e("487834"),
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
            n.e("250836"),
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
            n.e("817298"),
            n.e("921528"),
            n.e("794638"),
            n.e("707551"),
            n.e("726399"),
            n.e("424216"),
            n.e("840100"),
            n.e("742258"),
            n.e("173896"),
            n.e("57358"),
            n.e("580305"),
            n.e("722765"),
            n.e("172413"),
            n.e("145006"),
            n.e("156912"),
            n.e("249169"),
            n.e("754596"),
            n.e("191601"),
            n.e("232000"),
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
            n.e("768071"),
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
            n.e("910167"),
            n.e("70379"),
            n.e("417333"),
            n.e("131859"),
            n.e("905581"),
            n.e("62052"),
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
            n.e("710284"),
            n.e("861060"),
            n.e("364827"),
            n.e("77333"),
            n.e("217229"),
            n.e("477175"),
            n.e("960235"),
            n.e("585968"),
            n.e("734933"),
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
            n.e("114252"),
            n.e("221856"),
            n.e("186212"),
            n.e("755936"),
            n.e("147662"),
            n.e("46322"),
            n.e("899843"),
            n.e("904448"),
            n.e("833703"),
            n.e("544571"),
            n.e("55252"),
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
            n.e("675212"),
            n.e("413846"),
            n.e("576909"),
            n.e("27355"),
            n.e("953665"),
            n.e("406174"),
            n.e("481647"),
            n.e("776273"),
            n.e("776602"),
            n.e("391763"),
            n.e("305692"),
            n.e("704434"),
            n.e("140402"),
            n.e("28102"),
            n.e("393766"),
            n.e("21921"),
            n.e("497516"),
            n.e("811310"),
            n.e("844780"),
            n.e("571210"),
            n.e("676418"),
            n.e("572963"),
            n.e("70833"),
            n.e("897073"),
            n.e("770291"),
            n.e("166495"),
            n.e("307575"),
            n.e("88342"),
            n.e("323624"),
            n.e("187110"),
            n.e("854461"),
            n.e("942724"),
            n.e("139970"),
            n.e("940258"),
            n.e("858164"),
            n.e("521930"),
            n.e("308555"),
            n.e("292583"),
            n.e("153251"),
            n.e("427032"),
            n.e("173764"),
            n.e("554241"),
            n.e("311802"),
            n.e("724303"),
            n.e("25949"),
            n.e("53102"),
            n.e("586127"),
            n.e("617249"),
            n.e("836863"),
            n.e("132737"),
            n.e("362422"),
            n.e("146070"),
            n.e("344502"),
            n.e("88599"),
            n.e("179049"),
            n.e("854622"),
            n.e("95340"),
            n.e("233197"),
            n.e("807936"),
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
            n.e("613867"),
            n.e("952548"),
            n.e("792899"),
            n.e("203589"),
            n.e("636373"),
            n.e("294857"),
            n.e("726033"),
            n.e("480830"),
            n.e("64504"),
            n.e("179745"),
            n.e("655708"),
            n.e("676156"),
            n.e("553984"),
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
            n.e("903839"),
            n.e("525013"),
            n.e("953858"),
            n.e("758946"),
            n.e("214285"),
            n.e("248330"),
            n.e("247660"),
            n.e("731503"),
            n.e("803332"),
            n.e("859546"),
            n.e("644087"),
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
            n.e("773534"),
            n.e("649362"),
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
            n.e("556868"),
            n.e("386317"),
            n.e("709371"),
            n.e("599719"),
            n.e("691461"),
            n.e("218203"),
            n.e("136204"),
            n.e("726511"),
            n.e("868214"),
            n.e("939171"),
            n.e("987478"),
            n.e("202622"),
            n.e("661814"),
            n.e("96680"),
            n.e("140667"),
            n.e("916758"),
            n.e("607847"),
            n.e("713567"),
            n.e("612287"),
            n.e("588070"),
            n.e("793438"),
            n.e("305557"),
            n.e("36227"),
            n.e("104202"),
            n.e("850488"),
            n.e("947802"),
            n.e("449145"),
            n.e("444567"),
            n.e("309004"),
            n.e("229666"),
            n.e("848625"),
            n.e("92295"),
            n.e("589916"),
            n.e("695170"),
            n.e("460773"),
            n.e("883952"),
            n.e("159957"),
            n.e("338619"),
            n.e("540715"),
            n.e("458273"),
            n.e("208018"),
            n.e("606949"),
            n.e("968763"),
            n.e("278045"),
            n.e("26001"),
            n.e("430997"),
            n.e("174192"),
            n.e("414591"),
            n.e("652111"),
            n.e("434786"),
            n.e("147540"),
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
            n.e("242682"),
            n.e("196486"),
            n.e("65393"),
            n.e("338601"),
            n.e("368530"),
            n.e("275859"),
            n.e("216084"),
            n.e("66580"),
            n.e("978046"),
            n.e("127659"),
            n.e("428235"),
            n.e("610943"),
            n.e("283230"),
            n.e("582486"),
            n.e("387634"),
            n.e("273669"),
            n.e("846308"),
            n.e("507775"),
            n.e("284819"),
            n.e("760989"),
            n.e("466147"),
            n.e("50342"),
            n.e("369501"),
            n.e("686227"),
            n.e("303710"),
            n.e("256373"),
            n.e("414535"),
            n.e("161058"),
            n.e("134504"),
            n.e("409391"),
            n.e("645830"),
            n.e("479971"),
            n.e("810262"),
            n.e("741786"),
            n.e("995602"),
            n.e("346313"),
            n.e("463726"),
            n.e("553203"),
            n.e("635766"),
            n.e("553683"),
            n.e("115368"),
            n.e("636002"),
            n.e("343233"),
            n.e("280098"),
            n.e("614256"),
            n.e("756684"),
            n.e("419690"),
            n.e("583827"),
            n.e("806354"),
            n.e("359702"),
            n.e("708364"),
            n.e("138733"),
            n.e("452823"),
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
            n.e("361347"),
            n.e("842935"),
            n.e("73091"),
            n.e("37786"),
            n.e("886692"),
            n.e("916373"),
            n.e("528038"),
            n.e("81398"),
            n.e("518480"),
            n.e("925172"),
            n.e("167275"),
            n.e("8458"),
            n.e("11810"),
            n.e("591977"),
            n.e("890152"),
            n.e("174337"),
            n.e("646570"),
            n.e("287973"),
            n.e("314863"),
            n.e("623386"),
            n.e("375428"),
            n.e("384951"),
            n.e("560165"),
            n.e("712390"),
            n.e("71167"),
            n.e("113446"),
            n.e("306410"),
            n.e("161309"),
            n.e("694529"),
            n.e("303807"),
            n.e("143330"),
            n.e("995210"),
            n.e("852694"),
            n.e("998611"),
            n.e("317699"),
            n.e("257032"),
            n.e("952831"),
            n.e("845322"),
            n.e("114748"),
            n.e("426386"),
            n.e("204665"),
            n.e("588860"),
        ]).then(n.bind(n, 237600));
        return (n) => (0, i.jsx)(e, { ...n, guild: t });
    });
}
let ic = r.memo(function (e) {
    let {
            guildNode: t,
            setRef: n,
            onDragStart: a,
            onDragEnd: l,
            route: o,
            guild: d,
            animatable: u,
            selected: _ = !1,
            unread: E = !1,
            mediaState: f,
            unavailable: I = !1,
            badge: T = 0,
            isMentionLowImportance: m,
            contextMenu: g = id,
            draggable: S = !1,
            sorting: N = !1,
            preloadOnClick: C = !0,
            guildJoinRequestStatus: O,
            height: R,
            "aria-setsize": L,
            "aria-posinset": y,
        } = e,
        { id: D, parentId: v } = t,
        b = e.upperBadge ?? (I ? (0, z.em)() : null != f ? (0, z.oi)(f) : void 0),
        P = e.lowerBadge ?? void 0;
    null == P && T > 0
        ? (P =
              (0, z.wN)(
                  T,
                  m ? h.A.colors.BACKGROUND_MOD_STRONG.css : h.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
              ) ?? void 0)
        : null == P && null != O && (P = (0, z.eW)({ guildJoinRequestStatus: O }) ?? void 0);
    let U = e.lowerBadgeSize ?? { width: (0, e9.o6)(T) },
        [{ dragging: w }, G] = (0, nH.i)({
            type: ej.PJ.GUILD,
            item: () => (
                requestAnimationFrame(() => {
                    a?.();
                }),
                { type: t.type, nodeId: t.id }
            ),
            end() {
                (l?.(), (0, nY.um)(eB.Ay.getCompatibleGuildFolders()));
            },
            collect: (e) => ({ dragging: e.isDragging() }),
        }),
        x = (0, c.Vd)(D ?? eN.dJq, null != v ? 2 : 1),
        [k, F] = r.useState(!1),
        H = !N && k,
        [W, Y] = r.useState(!1),
        [X, q] = r.useState(!1),
        [Z] = r.useState(() => new A.J_(70, () => q(!0))),
        Q = (0, nz.nr)() && !nj.Fr;
    r.useEffect(() => () => Z.cancel(), [Z]);
    let J = r.useCallback(() => {
            null != o ? (0, ta.pX)(o, { state: io }) : (0, n$.u)(D, { state: io });
        }, [D, o]),
        ee = r.useCallback(() => {
            if (null != o || null == d || I || !C) return;
            let [e] = (0, nK.q)(d.id);
            null != e && j.A.preload(d.id, e);
        }, [o, d, I, C]),
        et = (0, nW.bG)([ek.Ay], () => ek.Ay.isCurrentUserGuest(D)),
        en = r.useCallback(
            (e) => {
                null == d || et || g(e, d);
            },
            [d, g, et],
        ),
        ei = r.useCallback(
            (e) => {
                "ArrowLeft" === e.key && null != v && document.querySelector(`[aria-owns=folder-items-${v}]`)?.focus();
            },
            [v],
        ),
        er = r.useCallback(
            (e) => {
                e ? Z.delay() : (Z.cancel(), q(!1));
            },
            [Z],
        );
    function ea() {
        N || F(!0);
    }
    function es() {
        N || F(!1);
    }
    let el = r.useCallback(
            (e) => {
                n?.(D, e);
            },
            [D, n],
        ),
        eo = (0, p.r)(h.A.modules.guildbar.AVATAR_SIZE);
    if (null == d) return null;
    let ed = d.name;
    if (
        (T > 0
            ? (ed = eC.intl.formatToPlainString(eC.t["/uzRss"], { guildName: d.name, mentions: T }))
            : E && (ed = eC.intl.formatToPlainString(eC.t.lzqe42, { guildName: d.name })),
        null != f)
    ) {
        let e = [];
        (f.activeEvent && e.push(eC.intl.string(eC.t.dHvJ2p)),
            f.liveStage && e.push(eC.intl.string(eC.t.OO7ndG)),
            f.screenshare && e.push(eC.intl.string(eC.t.wsHMZ7)),
            f.video && e.push(eC.intl.string(eC.t.BrLCS0)),
            f.audio && e.push(eC.intl.string(eC.t.jPBhKy)),
            f.activity && e.push(eC.intl.string(eC.t.Y3Gii5)),
            e.length > 0 && (ed = `${ed}, ${e.join(" ")}`));
    }
    let ec = (0, i.jsx)(nQ, {
            guild: d,
            show: X,
            active: _,
            onAnimationStart: function () {
                Y(X);
            },
            onAnimationRest: function () {
                X || Y(!1);
            },
        }),
        eu = Q
            ? (0, i.jsx)(V.j, {
                  ariaLabel: ed,
                  name: d.name,
                  onClick: J,
                  onMouseEnter: ea,
                  onMouseLeave: es,
                  onMouseDown: ee,
                  onContextMenu: en,
                  onKeyDown: ei,
                  icon: (0, tx.Iv)(d, 2 * eo, H && u, !0),
                  selected: _ || H,
                  ...x,
                  "aria-setsize": L,
                  "aria-posinset": y,
                  "aria-selected": _,
              })
            : (0, i.jsx)(B.Q, {
                  selected: _,
                  children: (0, i.jsx)("div", {
                      ref: S
                          ? (e) => {
                                G(e);
                            }
                          : void 0,
                      "data-dnd-name": d.name,
                      "data-drop-hovering": X,
                      children: (0, i.jsx)(V.j, {
                          ariaLabel: ed,
                          name: d.name,
                          onClick: J,
                          onMouseEnter: ea,
                          onMouseLeave: es,
                          onMouseDown: ee,
                          onContextMenu: en,
                          onKeyDown: ei,
                          icon: (0, tx.Iv)(d, 2 * eo, H && u, !0),
                          selected: _ || H,
                          ...x,
                          "aria-setsize": L,
                          "aria-posinset": y,
                          "aria-selected": _,
                      }),
                  }),
              }),
        e_ = X || W ? ec : eu,
        eE = (0, i.jsx)(tk.g4, { children: (0, i.jsx)(is.A, {}) }),
        eA = Q
            ? (0, i.jsx)(M.animated.div, {
                  ref: S
                      ? (e) => {
                            G(e);
                        }
                      : void 0,
                  "data-dnd-name": d.name,
                  style: { scale: null == R ? 1 : R },
                  "data-drop-hovering": X,
                  className: s()(il.rN, { [il.p9]: N, [il.oR]: X, [il.wH]: X || _ }),
                  children: (0, i.jsx)(B.Q, {
                      selected: !0,
                      upperBadge: b,
                      lowerBadge: P,
                      lowerBadgeSize: U,
                      children: e_,
                  }),
              })
            : (0, i.jsx)(M.animated.div, {
                  style: { scale: null == R ? 1 : R },
                  className: s()(il.rN, { [il.p9]: N, [il.oR]: X, [il.wH]: X || _ }),
                  "data-drop-hovering": X,
                  children: (0, i.jsx)(B.Q, {
                      selected: _,
                      upperBadge: b,
                      lowerBadge: P,
                      lowerBadgeSize: U,
                      children: e_,
                  }),
              });
    return (0, i.jsxs)($.c, {
        ref: el,
        children: [
            (0, i.jsx)(K.A, { overlay: !0, hovered: !w && H, selected: !w && _, unread: !w && E }),
            (0, i.jsx)(ia, {
                guild: d,
                disabled: N,
                isDragging: w,
                shouldShowNotificationContext: !I && (E || T > 0),
                children: w ? eE : eA,
            }),
            S ? (0, i.jsx)(tk.Ay, { name: d.name, targetNode: t, onDragOverChanged: er }) : null,
        ],
    });
});
var iu = n(64061);
let i_ = r.memo(function (e) {
    let { guildNode: t, lowerBadge: n } = e,
        a = t.id,
        s = (0, _.bG)([eF.A], () => eF.A.getGuild(a)),
        l = nk(s),
        o = (0, _.bG)([eQ.A], () => eQ.A.isFocused()),
        d = (0, _.bG)([nR.A], () => nR.A.isUnavailable(a)),
        c = (0, X.A)((e) => e.guildId),
        u = nV(a),
        {
            badge: E,
            unread: A,
            isMentionLowImportance: h,
        } = (0, _.cf)([ea.default], () => ({
            badge: ea.default.getMentionCount(a),
            isMentionLowImportance: ea.default.getIsMentionLowImportance(a),
            unread: ea.default.hasUnread(a),
        })),
        f = (0, nF.Ig)(s) && 0 === E,
        I = r.useMemo(
            () =>
                null != n
                    ? n
                    : f
                      ? (0, i.jsx)("div", {
                            className: iu.j,
                            children: (0, i.jsx)(nw.PauseIcon, {
                                size: "custom",
                                color: "currentColor",
                                className: iu.v,
                                width: 10,
                                height: 10,
                            }),
                        })
                      : null,
            [n, f],
        );
    return (0, i.jsx)(ic, {
        ...e,
        guild: s,
        unavailable: d,
        animatable: o,
        selected: c === a,
        badge: E,
        isMentionLowImportance: h,
        lowerBadge: I,
        unread: A,
        mediaState: u,
        guildJoinRequestStatus: l,
    });
});
var iE = n(265872),
    iA = n(297264),
    ih = n(821609),
    iI = n(339350),
    ip = n(475743),
    iT = n(624458),
    im = n(408213),
    ig = n(636449),
    iS = n(928568);
function iN(e, t) {
    (0, te.L3)(e, async () => {
        let { default: e } = await n.e("49056").then(n.bind(n, 97187));
        return (n) => (0, i.jsx)(e, { ...n, guild: t });
    });
}
function iC(e) {
    let { guildNode: t } = e,
        n = t.id,
        r = (0, _.bG)([nx.A], () => nx.A.getRequest(n)),
        a = (0, _.bG)([nx.A], () => nx.A.getJoinRequestGuild(n), [n]),
        s = (0, _.bG)([eQ.A], () => eQ.A.isFocused()),
        l = (0, _.bG)([eW.A], () => eW.A.getGuildId());
    return null == a
        ? null
        : (0, i.jsx)(ic, {
              guildNode: t,
              guild: a,
              animatable: s,
              draggable: !1,
              selected: n === l,
              preloadOnClick: !1,
              contextMenu: iN,
              lowerBadge:
                  r?.applicationStatus === n2.B5.REJECTED
                      ? (0, z.eW)({ guildJoinRequestStatus: r.applicationStatus })
                      : void 0,
              route: eN.BVt.GUILD_MEMBER_VERIFICATION(n),
          });
}
var iO = n(943536);
function iR(e) {
    let { onActivate: t, children: n } = e,
        a = r.useRef(null),
        s = (0, _.bG)([nx.A], () => nx.A.hasJoinRequestCoackmark()),
        l = r.useCallback(() => {
            im.Ay.clearCoachmark();
        }, []),
        o = (0, ip.Ay)(s),
        d = r.useRef(null);
    return (
        r.useEffect(() => {
            s && s !== o && (t(), d.current?.ref?.current?.layerRef?.current?.updatePosition());
        }, [d, s, o, t]),
        (0, i.jsxs)("div", {
            className: iO.kL,
            children: [
                (0, i.jsx)(iE.Y, {
                    ref: d,
                    targetElementRef: a,
                    shouldShow: s,
                    renderPopout: () =>
                        (0, i.jsxs)("div", {
                            className: iO.jC,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: iO.Bm,
                                    children: [
                                        (0, i.jsxs)("div", {
                                            className: iO.q3,
                                            children: [
                                                (0, i.jsx)(iA.D, {
                                                    variant: "heading-md/medium",
                                                    children: eC.intl.string(eC.t["0YV0YE"]),
                                                }),
                                                (0, i.jsx)(e_.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    children: eC.intl.string(eC.t["0UQVDL"]),
                                                }),
                                            ],
                                        }),
                                        (0, i.jsx)(ih.$, {
                                            variant: "primary",
                                            size: "sm",
                                            text: eC.intl.string(eC.t["4r+amb"]),
                                            fullWidth: !0,
                                            onClick: l,
                                        }),
                                    ],
                                }),
                                (0, i.jsx)("div", { className: iO.ed }),
                            ],
                        }),
                    position: "right",
                    animationPosition: "right",
                    align: "top",
                    spacing: 16,
                    children: (e) => (0, i.jsx)("div", { ...e, className: iO.Ne, ref: a }),
                }),
                n,
            ],
        })
    );
}
function iL(e) {
    let { onActivate: t } = e,
        [n, a] = r.useState(!1),
        s = (0, _.bG)([eW.A], () => eW.A.getGuildId()),
        l = (0, _.bG)([nx.A], () => nx.A.hasFetchedRequestToJoinGuilds),
        o = (0, iS.A)(),
        d = (0, ip.Ay)(s),
        c = r.useMemo(() => {
            let e = (0, ej.xW)({
                folderId: ig.U.PENDING_JOIN_REQUESTS_FOLDER,
                folderName: eC.intl.string(eC.t["scsU+l"]),
                expanded: n,
                guildIds: [],
            });
            for (let t of o) e.children.push((0, ej.EL)(t, e.id));
            return e;
        }, [o, n]);
    r.useEffect(() => {
        n && !l && iT.A.fetchRequestToJoinGuilds();
    }, [n, l]);
    let u = null != s && o.includes(s);
    return (r.useEffect(() => {
        !n && u && d !== s && a(!0);
    }, [n, u, d, s]),
    0 === o.length)
        ? null
        : (0, i.jsx)(iR, {
              onActivate: t,
              children: (0, i.jsx)(nM.A, {
                  folderNode: c,
                  expanded: n,
                  selected: u,
                  draggable: !1,
                  sorting: !1,
                  onExpandCollapse: () => {
                      (a(!n), im.Ay.clearCoachmark());
                  },
                  folderButtonSize: "icon",
                  folderButtonContent: (0, i.jsx)("div", {
                      className: iO.rH,
                      children: (0, i.jsx)(iI.Q, { size: "sm", color: "currentColor" }),
                  }),
                  renderChildNode: function (e, t, n) {
                      return e.type !== ej.PJ.GUILD
                          ? null
                          : (0, i.jsx)(iC, { guildNode: e, "aria-setsize": n, "aria-posinset": t }, e.id);
                  },
              }),
          });
}
function iy(e) {
    let { guildId: t } = e,
        n = r.useMemo(() => (0, ej.EL)(t), [t]),
        a = (0, _.bG)([eF.A], () => eF.A.getGuild(t)),
        s = (0, _.bG)([eQ.A], () => eQ.A.isFocused()),
        l =
            t ===
            (0, X.A)((e) => {
                let { guildId: t } = e;
                return t;
            }),
        o = nV(t);
    return null == a
        ? null
        : (0, i.jsx)(ic, { guildNode: n, guild: a, animatable: s, selected: l, draggable: !1, mediaState: o });
}
var iD = n(987566);
let iv = (0, G.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("231839"),
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
                n.e("131859"),
                n.e("481647"),
                n.e("776602"),
                n.e("391763"),
                n.e("704434"),
                n.e("140402"),
                n.e("844780"),
                n.e("139970"),
                n.e("858164"),
                n.e("427032"),
                n.e("617249"),
                n.e("591951"),
                n.e("362422"),
                n.e("233197"),
                n.e("676156"),
                n.e("550033"),
                n.e("713567"),
                n.e("444567"),
                n.e("695170"),
                n.e("275133"),
                n.e("480945"),
                n.e("228850"),
                n.e("697367"),
                n.e("127659"),
                n.e("860003"),
                n.e("472627"),
                n.e("941348"),
                n.e("802529"),
                n.e("156731"),
                n.e("130706"),
                n.e("303886"),
                n.e("108066"),
                n.e("96296"),
            ]).then(n.bind(n, 153571)),
        webpackId: 153571,
        name: "NotificationsInboxButton",
    }),
    ib = (0, eV.isWindows)() ? 4 : 12 * !(0, eV.isMac)();
function iM(e, t, n) {
    let i = e + t,
        r = 2 + t;
    return {
        iconSize: e,
        iconTotalSize: i,
        badgeVisibleBuffer: i - 16,
        separatorSize: r,
        heightBeforeGuilds: ib + r + n * i,
        bottomInset: 16,
    };
}
function iP(e) {
    return e.startsWith(eN.BVt.GUILD_DISCOVERY) || e.startsWith(eN.BVt.GLOBAL_DISCOVERY);
}
class iU {
    guildsTree;
    setScrolling;
    setIsScrolledToBottom;
    onScroll;
    sizes;
    scrollerRef = r.createRef();
    nodeRefs = {};
    timeout = new A.Ep();
    observer;
    constructor(e, t, n, i, r) {
        ((this.guildsTree = e),
            (this.setScrolling = t),
            (this.setIsScrolledToBottom = n),
            (this.onScroll = i),
            (this.sizes = r),
            (0, eP.u9)(this.getVisibleGuildIds));
    }
    setResizeObserver = () => {
        let e = this.scrollerRef.current?.getScrollerNode();
        null != e && ((this.observer = new ResizeObserver(this.handleScroll)), this.observer.observe(e));
    };
    clearResizeObserver = () => {
        (this.observer?.disconnect(), (this.observer = void 0));
    };
    setSizes(e) {
        ((this.sizes = e), this.onScroll());
    }
    setGuildsTree(e) {
        this.guildsTree = e;
    }
    scrollToGuild = (e, t) => {
        let n = this.scrollerRef.current;
        if (
            null == n ||
            (null == e && iP(window.location.pathname)) ||
            e === eN.sFm.SERVER_DISCOVERY_BADGE ||
            e === eN.sFm.E3_SERVER_DISCOVERY_BADGE
        )
            return;
        if (null == e) return void n.scrollTo({ to: 0, animate: t });
        let i = this.nodeRefs[e];
        for (; null == i;) {
            let t = this.guildsTree.getNode(e);
            if (t?.parentId == null) break;
            i = this.nodeRefs[t.parentId];
        }
        null != i && (0, u.vq)(i)
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
    _handleScrollDebounced = o().debounce(() => {
        let e = this.scrollerRef.current;
        if (null == e) return;
        let { scrollTop: t } = e.getScrollerState();
        (g.A.updateGuildListScrollTo(t), this.onScroll());
    }, 200);
    _handleScrollThrottled = o().throttle(() => {
        let e = this.scrollerRef.current;
        null != e && this.setIsScrolledToBottom(e.isScrolledToBottom());
    }, 100);
    setNodeRef = (e, t) => {
        this.nodeRefs[e] = t;
    };
}
function iw(e) {
    let { hideDms: t, scrollToTop: n, lurkingGuildIds: r, conjureRail: a } = e,
        s = (0, F.A)(),
        l = (0, i.jsx)(k, { shown: a.shown, projects: a.projects }),
        o = (0, _.yK)([eF.A, ek.Ay], () => eF.A.getGuildIds().filter((e) => ek.Ay.isCurrentUserGuest(e))),
        d = r.concat(o),
        { entrypoint: c } = (0, ew.X8)({ location: "GuildsBar" });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(ng, {}),
            s ? null : l,
            c === ew.RK.SERVER_RAIL_TOP && (0, i.jsx)(iv, {}),
            s ? (0, i.jsx)(eM, {}) : null,
            s ? l : null,
            !t && (0, i.jsx)(tS, {}),
            d.map((e) => (0, i.jsx)(iy, { guildId: e }, e)),
            (0, i.jsx)(iL, { onActivate: n }),
        ],
    });
}
function iG(e) {
    let { guildDiscoveryButton: t, disableAppDownload: n, isOverlay: r, renderTreeNode: a, lurkingGuildIds: s } = e,
        [l] = (0, _.yK)([eB.Ay], () => {
            let e = eB.Ay.getGuildsTree();
            return [e, e.version];
        }),
        o = l.getRoots(),
        d = (0, _.yK)([ex.A], () => ex.A.getGeoRestrictedGuilds()).map((e) =>
            (0, i.jsx)(tX, { id: e.id, name: e.name, icon: e.icon }, e.id),
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(f.B, {
                role: "group",
                "aria-label": eC.intl.string(eC.t["7hB4kg"]),
                gap: "xs",
                children: o.map((e, t) => a(e, t, o.length)),
            }),
            d,
            (0, i.jsx)(nD, {}),
            r ? null : (0, i.jsx)(tW, { disableTooltip: s.length > 0, lastTargetNode: o[o.length - 1] }),
            r ? null : t,
            n ? null : (0, i.jsx)(tv, {}),
        ],
    });
}
function ix(e) {
    var t;
    let { disableAppDownload: n = eV.isPlatformEmbedded, isOverlay: a = !1, className: l, themeOverride: o } = e,
        [u] = (0, _.yK)([eB.Ay], () => {
            let e = eB.Ay.getGuildsTree();
            return [e, e.version];
        }),
        E = (0, _.bG)([eU.A], () => eU.A.lurkingGuildIds()),
        f = r.useMemo(() => (a ? [] : E), [E, a]),
        g = (0, _.bG)([R.A], () => R.A.isFullscreenInContext()),
        { isSorting: N, startSorting: M, stopSorting: P } = (0, eH.A)(),
        U = r.useRef(!1),
        [w] = r.useState(() => new A.Ep()),
        G = r.useRef(null),
        x = r.useRef(null),
        { ref: k, ...B } = (0, c.$y)(),
        V = (0, I.R7)(),
        [H, j] = r.useState(!1),
        W = (0, p.r)(h.A.modules.guildbar.AVATAR_SIZE),
        Y = (0, p.r)(h.A.space.SPACE_XS),
        K = (0, F.A)(),
        $ = (function (e) {
            let t = (0, L.TW)(e),
                n = (0, _.bG)([D.A], () => D.A.isPinned()),
                { pathname: i } = (0, d.zy)(),
                a = (0, v.tb)(i),
                s = (0, v.Ww)(i),
                l = (function (e) {
                    let [t, n] = r.useState({ open: e, left: null }),
                        i = t.open !== e ? t.open : t.left;
                    return (
                        t.open !== e && n({ open: e, left: i }),
                        r.useEffect(() => {
                            null != i && n((e) => ({ ...e, left: null }));
                        }, [i]),
                        i
                    );
                })(s),
                o = (0, y.A)(),
                c = (function (e, t) {
                    let [n, i] = r.useState(() => new Set(e));
                    if (e.some((e) => !n.has(e)) || (null != t && n.has(t))) {
                        let r = new Set([...n, ...e]);
                        (null != t && r.delete(t), i(r));
                    }
                    let a = r.useRef(new Map());
                    return (
                        r.useEffect(() => {
                            let t = new Set(e);
                            for (let [e, i] of a.current)
                                (t.has(e) || !n.has(e)) && (clearTimeout(i), a.current.delete(e));
                            for (let e of n)
                                t.has(e) ||
                                    a.current.has(e) ||
                                    a.current.set(
                                        e,
                                        setTimeout(() => {
                                            (a.current.delete(e),
                                                i((t) => {
                                                    let n = new Set(t);
                                                    return (n.delete(e), n);
                                                }));
                                        }, 5e3),
                                    );
                        }, [e, n, 5e3]),
                        r.useEffect(() => {
                            let e = a.current;
                            return () => {
                                for (let t of e.values()) clearTimeout(t);
                                e.clear();
                            };
                        }, []),
                        n
                    );
                })(
                    (0, _.yK)(
                        b.Nl,
                        () =>
                            o
                                .filter((e) => {
                                    if (e.id === s) return !1;
                                    let t = (0, b.AK)(e.id);
                                    return "working" === t || ("unread" === t && e.id !== l);
                                })
                                .map((e) => e.id),
                        [o, s, l],
                    ),
                    s,
                ),
                u = r.useMemo(() => (t ? o.filter((e) => c.has(e.id)) : []), [t, o, c]);
            return { shown: t && (a || n || u.length > 0), projects: u };
        })("GuildsBar"),
        { pathname: z } = (0, d.zy)(),
        { entrypoint: q } = (0, ew.X8)({ location: "GuildsBar" }),
        Z = +!!K + ($.shown ? 1 + $.projects.length : 0) + +(q === ew.RK.SERVER_RAIL_TOP),
        Q = r.useMemo(() => {
            let e = iM(W, Y, 0);
            return new iU(
                u,
                j,
                eN.tEg,
                () => {
                    (G.current?.calculateState(), x.current?.calculateState());
                },
                e,
            );
        }, [W, Y, u]);
    (r.useLayoutEffect(() => {
        Q.setSizes(iM(W, Y, Z));
    }, [Q, W, Y, Z]),
        r.useEffect(
            () => (
                Q.setResizeObserver(),
                () => {
                    Q.clearResizeObserver();
                }
            ),
            [Q],
        ),
        r.useEffect(() => {
            function e() {
                (G.current?.calculateState(), x.current?.calculateState());
            }
            return (ea.default.addChangeListener(e), () => ea.default.removeChangeListener(e));
        }, []));
    let { analyticsLocations: J } = (0, O.Ay)(C.A.GUILDS_LIST),
        ee = iP(z);
    ((0, S.u5)(() => {
        if (!U.current && 0 !== u.size) {
            if (!ee) {
                let { scrollTop: e } = eG.A.getGuildListDimensions();
                Q.scrollTo({ to: e, animate: !1 });
            }
            return ((U.current = !0), () => w.stop());
        }
    }),
        r.useEffect(() => {
            if ((Q.setGuildsTree(u), U.current || 0 === u.size)) return;
            let e = X.A.getState().guildId;
            Q.scrollToGuild(e, !1);
            let t = null;
            return X.A.subscribe((e) => {
                let { guildId: n } = e;
                n !== t && ((t = n), Q.scrollToGuild(t, !1));
            });
        }, [u, Q]));
    let et = r.useCallback(() => {
        Q.scrollTo({ to: 0, animate: !1 });
    }, [Q]);
    ((t = Q.scrollToGuild),
        r.useEffect(() => {
            let e = null;
            function n() {
                let n = eW.A.getGuildId();
                n !== e && ((e = n ?? null), t(n ?? null, !1));
            }
            return (
                eW.A.addChangeListener(n),
                () => {
                    eW.A.removeChangeListener(n);
                }
            );
        }, [t]));
    let en = r.useCallback(
            function e(t, n, r) {
                switch (t.type) {
                    case ej.PJ.FOLDER:
                        return (0, i.jsx)(
                            nU,
                            {
                                folderNode: t,
                                treeVersion: u.version,
                                setNodeRef: Q.setNodeRef,
                                draggable: !0,
                                sorting: N,
                                onDragStart: M,
                                onDragEnd: P,
                                renderChildNode: e,
                                "aria-setsize": r,
                                "aria-posinset": void 0 !== n ? n + 1 : void 0,
                            },
                            t.id,
                        );
                    case ej.PJ.GUILD:
                        return (0, i.jsx)(
                            i_,
                            {
                                guildNode: t,
                                setRef: Q.setNodeRef,
                                draggable: !0,
                                sorting: N,
                                onDragStart: M,
                                onDragEnd: P,
                                "aria-setsize": r,
                                "aria-posinset": void 0 !== n ? n + 1 : void 0,
                            },
                            t.id,
                        );
                    default:
                        return null;
                }
            },
            [M, P, N, Q.setNodeRef, u.version],
        ),
        ei = (0, i.jsx)(t4, { selected: ee, className: iD.ai }),
        er = q === ew.RK.SERVER_RAIL_BOTTOM;
    return (0, i.jsx)(O.f5, {
        value: J,
        children: (0, i.jsx)(T.N, {
            theme: o,
            children: (e) =>
                (0, i.jsxs)("nav", {
                    className: s()(iD.iE, l, e, { [iD.R]: g }),
                    "aria-label": eC.intl.string(eC.t.PjnF2t),
                    children: [
                        (0, i.jsx)(e4, {
                            ref: G,
                            isVisible: Q.isItemVisible,
                            onJumpTo: Q.handleJumpToGuild,
                            className: iD.Xl,
                            barClassName: iD.Sh,
                        }),
                        (0, i.jsxs)("div", {
                            ref: k,
                            ...B,
                            ...V,
                            role: "tree",
                            "aria-multiselectable": !1,
                            className: iD.B2,
                            children: [
                                (0, i.jsxs)(m.Ch, {
                                    className: s()({ [iD.XG]: !0, [iD.qw]: H }),
                                    fade: !0,
                                    experimental_useStack: !0,
                                    gap: "xs",
                                    ref: Q.scrollerRef,
                                    onScroll: Q.handleScroll,
                                    children: [
                                        (0, i.jsx)(iw, { scrollToTop: et, lurkingGuildIds: f, conjureRail: $ }),
                                        (0, i.jsx)(nN, {}),
                                        (0, i.jsx)(iG, {
                                            guildDiscoveryButton: ei,
                                            disableAppDownload: n,
                                            isOverlay: a,
                                            renderTreeNode: en,
                                            lurkingGuildIds: f,
                                        }),
                                    ],
                                }),
                                er &&
                                    (0, i.jsxs)("div", {
                                        children: [
                                            (0, i.jsx)(nN, { fullWidth: !0 }),
                                            (0, i.jsx)("div", { className: iD.JU, children: (0, i.jsx)(iv, {}) }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, i.jsx)(e4, {
                            reverse: !0,
                            ref: x,
                            isVisible: Q.isItemVisible,
                            onJumpTo: Q.handleJumpToGuild,
                            className: s()(iD.LZ, { [iD.CH]: !a && !er, [iD.c0]: !a && er }),
                            barClassName: iD.Sh,
                        }),
                    ],
                }),
        }),
    });
}
let ik = r.memo(
    function (e) {
        let t = (0, N.A)("guildsnav");
        return (0, i.jsx)(c.hD, { navigator: t, children: (0, i.jsx)(ix, { ...e }) });
    },
    (e, t) => !1 === t.isVisible || (0, E.A)(e, t),
);
