n.d(t, { A: () => iq });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(435558),
    o = n.n(l),
    d = n(806163),
    c = n(837381),
    u = n(621466),
    _ = n(855986),
    E = n(52133),
    A = n(451988),
    f = n(646514),
    h = n(331322),
    I = n(312138),
    p = n(602853),
    m = n(43990),
    T = n(516521),
    g = n(951001),
    S = n(964486),
    N = n(260762),
    C = n(793574),
    O = n(688810),
    R = n(628983),
    L = n(499466),
    y = n(615890),
    D = n(972013),
    b = n(751841),
    v = n(233470),
    P = n(260498),
    M = n(313537),
    U = n(352571);
let w = [];
var G = n(120692),
    x = n(717421);
let k = { friction: 28, tension: 600 };
function F(e) {
    switch (e) {
        case "height":
        case "opacity":
            return { duration: 150, ...k };
        case "scale":
            return { ...k };
        default:
            throw Error(`getRailItemSpringConfig() - Invalid spring ${String(e)}`);
    }
}
var B = n(268218);
let V = (0, B.Fe)({
    createPromise: () =>
        Promise.all([
            n.e(490814),
            n.e(916758),
            n.e(356664),
            n.e(540715),
            n.e(741111),
            n.e(386594),
            n.e(745493),
            n.e(442637),
            n.e(292270),
            n.e(914454),
            n.e(382840),
            n.e(451942),
            n.e(537035),
            n.e(484482),
        ]).then(n.bind(n, 566481)),
    webpackId: 566481,
    name: "ConjureRailFolder",
});
function H(e) {
    let { shown: t, projects: n } = e,
        a = (0, p.r)(f.A.modules.guildbar.AVATAR_SIZE),
        s = (0, p.r)(f.A.space.SPACE_XS),
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
        [{ height: u, opacity: _, scale: E }, A] = (0, x.z)(() => {
            let e = +!!t;
            return { height: e, opacity: e, scale: e, config: F };
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
        ? (0, i.jsx)(G.animated.div, {
              style: {
                  opacity: _,
                  height: u.to([0, 1], [0, c]),
                  marginBottom: u.to([0, 1], [-s, 0]),
                  transform: E.to([0, 1], [0.5, 1]).to((e) => `scale(${e})`),
              },
              children: (0, i.jsx)("div", { ref: d, children: (0, i.jsx)(V, { projects: n }) }),
          })
        : null;
}
var j = n(749884);
n(321073);
var W = n(862328),
    Y = n(67811),
    K = n(27232),
    $ = n(308528),
    X = n(933958),
    z = n(969151),
    q = n(941971),
    Q = n(900848),
    Z = n(771640),
    J = n(366811),
    ee = n(616356),
    et = n(734057),
    en = n(309010),
    ei = n(977997),
    er = n(811091),
    ea = n(181079),
    es = n(5180),
    el = n(863005),
    eo = n(152007),
    ed = n(458294),
    ec = n(576705),
    eu = n(218461),
    e_ = n(543465),
    eE = n(428784),
    eA = n(451394),
    ef = n(597601),
    eh = n(834730),
    eI = n(983851),
    ep = n(183623),
    em = n(323384),
    eT = n(866665),
    eg = n(104171),
    eS = n(63995),
    eN = n(597886),
    eC = n(287809),
    eO = n(607567),
    eR = n(403362),
    eL = n(652215),
    ey = n(792996),
    eD = n(785332);
function eb(e, t) {
    return 0 === t.length
        ? null
        : (0, i.jsxs)("div", {
              className: eD.nM,
              children: [
                  (0, i.jsx)(e, { className: eD.RI, color: "currentColor" }),
                  (0, i.jsx)(eg.Ay, { guildId: void 0, users: t, max: 6 }),
              ],
          });
}
function ev() {
    let e = (0, _.yK)([ea.A, et.A], () =>
            er.default
                .keys(ea.A.getFavoriteChannels())
                .map((e) => et.A.getChannel(e))
                .filter(eR.Vq),
        ),
        t = e.map((e) => e.id),
        n = e.filter((e) => e.type === eL.rbe.GUILD_VOICE),
        r = e.filter((e) => e.type === eL.rbe.GUILD_STAGE_VOICE).map((e) => e.id),
        a = (0, _.yK)(
            [eO.Ay],
            () =>
                o().flatMap(n, (e) =>
                    eO.Ay.getVoiceStatesForChannel(e).map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
                ),
            [n],
        ),
        s = (0, _.yK)([eS.A], () =>
            o().flatMap(r, (e) =>
                eS.A.getMutableParticipants(e, eN.ip.SPEAKER)
                    .filter((e) => e.type === eN.wY.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
            ),
        ),
        l = (0, _.bG)([eS.A], () => {
            let e = 0;
            for (let t of r) e += eS.A.getParticipantCount(t, eN.ip.AUDIENCE);
            return e;
        }),
        d = (0, _.yK)(
            [ee.A],
            () =>
                ee.A.getAllApplicationStreams()
                    .filter((e) => t.includes(e.channelId))
                    .map((e) => e.ownerId),
            [t],
        ),
        c = (0, _.yK)(
            [X.Ay],
            () => {
                let e = X.Ay.getEmbeddedActivitiesByChannel(),
                    n = [];
                for (let i of t) n.push(...(e.get(i)?.flatMap((e) => Array.from(e.userIds)) ?? []));
                return n;
            },
            [t],
        ),
        u = (0, _.yK)([eC.default], () => c.map((e) => eC.default.getUser(e)), [c]),
        E = (0, _.yK)([eC.default], () => d.map((e) => eC.default.getUser(e)), [d]),
        A = eb(
            eI.VoiceNormalIcon,
            a.filter((e) => !d.includes(e.id) && !c.includes(e.id)),
        ),
        f =
            0 === s.length
                ? null
                : (0, i.jsxs)("div", {
                      className: eD.nM,
                      children: [
                          (0, i.jsx)(eA.StageIcon, { size: "lg", color: "currentColor", className: eD.RI }),
                          (0, i.jsx)(eg.Ay, { guildId: void 0, users: s, max: 3 }),
                          (0, i.jsxs)("div", {
                              className: eD.GZ,
                              children: [
                                  (0, i.jsx)(ef.HeadphonesIcon, { size: "xs", color: "currentColor" }),
                                  (0, i.jsx)(eh.E, {
                                      className: eD._I,
                                      color: "text-default",
                                      variant: "body-xs/medium",
                                      children: l,
                                  }),
                              ],
                          }),
                      ],
                  }),
        h = eb(
            ep.ScreenArrowIcon,
            E.filter((e) => null != e && !c.includes(e.id)),
        ),
        I = eb(em.AppsIcon, u);
    return (0, i.jsxs)(i.Fragment, { children: [f, A, h, I] });
}
function eP() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: s()(eD.nM, eD.Dl),
                children: (0, i.jsx)("span", { className: s()(eD.cN, eD.NT), children: ey.intl.string(ey.t.wMWyci) }),
            }),
            (0, i.jsx)(ev, {}),
        ],
    });
}
function eM(e) {
    let { "aria-label": t = !1, children: n } = e,
        a = r.useMemo(
            () =>
                (0, i.jsx)(eh.E, {
                    variant: "body-md/semibold",
                    color: "text-default",
                    className: eD.A_,
                    children: (0, i.jsx)(eP, {}),
                }),
            [],
        );
    return (0, i.jsx)(eT.m, {
        __unsupportedReactNodeAsText: a,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": !1 === t ? void 0 : t,
        asContainer: !0,
        children: n,
    });
}
var eU = n(195572);
let ew = { analyticsSource: { page: eL.liQ.GUILD_CHANNEL, section: eL.JJy.CHANNEL_LIST, object: eL.ZSU.CHANNEL } };
function eG() {
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
        f,
        h = (0, c.Vd)("favorites"),
        [I, p] = r.useState(!1),
        m = (0, eE.$)("favorite-server-context"),
        { favoriteGuildMuted: T, favoriteChannels: g } = (0, _.cf)([ea.A], () => ({
            favoriteChannels: ea.A.getFavoriteChannels(),
            favoriteGuildMuted: ea.A.favoriteGuildMuted,
        })),
        S = (0, _.bG)([en.Ay], () => en.Ay.getChannelId(eL.YYv)),
        N = (0, _.bG)([et.A], () => et.A.getChannel(S)),
        C = (0, J.A)((e) => e.guildId),
        O = (0, es.ai)(C),
        { badge: R, unread: L } = (0, _.cf)([el.A, et.A, ed.default, eo.A, ec.A, eu.Ay, e_.Ay], () => {
            let e = er.default.keys(g),
                t = new Set();
            return e.reduce(
                (e, n) => {
                    let i = et.A.getChannel(n),
                        r = i?.getGuildId(),
                        a = eu.Ay.getMentionCount(n);
                    if (
                        (t.has(n) || (t.add(n), (e.badge = e.badge + a)),
                        (e.unread = e.unread || (eu.Ay.hasUnread(n) && ed.default.shouldCountChannelUnread(i, a))),
                        null != r)
                    ) {
                        let i = el.A.getActiveJoinedRelevantThreadsForParent(r, n);
                        for (let n in i) {
                            let i = eu.Ay.getMentionCount(n);
                            t.has(n) || (t.add(n), (e.badge += i));
                            let r = et.A.getChannel(n);
                            e.unread = e.unread || (eu.Ay.hasUnread(n) && ed.default.shouldCountChannelUnread(r, i));
                        }
                    }
                    return e;
                },
                { badge: 0, unread: !1 },
            );
        }),
        y =
            ((t = null != (e = (0, _.bG)([en.Ay], () => en.Ay.getVoiceChannelId())) && null != g[e]),
            (n = (0, _.bG)([ee.A], () => {
                if (!t) return !1;
                let e = ee.A.getCurrentUserActiveStream();
                return null != e && null != g[e.channelId];
            })),
            (a = (0, _.bG)([ee.A], () => ee.A.getAllApplicationStreams().some((e) => null != g[e.channelId]))),
            (s = (0, _.bG)([ei.A], () => t && null != e && ei.A.hasVideo(e), [t, e])),
            (l = (0, _.yK)([X.Ay], () =>
                er.default.keys(g).reduce((e, t) => (e.push(...X.Ay.getEmbeddedActivitiesForChannel(t)), e), []),
            )),
            (o = (0, _.bG)([X.Ay], () =>
                Array.from(X.Ay.getSelfEmbeddedActivities().values()).some((e) => {
                    let { location: t } = e,
                        n = (0, z.H)(t);
                    return null != n && null != g[n];
                }),
            )),
            (d = l.length > 0),
            (u = !1),
            (E = !1),
            (A = !1),
            (f = !1),
            t ? ((u = !s), (E = s), (A = n), (f = o)) : ((A = a), (f = d)),
            (0, Z.oi)({ audio: u, video: E, screenshare: A, liveStage: !1, isCurrentUserConnected: t, activity: f })),
        D = R > 0 ? (0, Z.wN)(R) : null;
    return (0, i.jsxs)(Q.c, {
        children: [
            (0, i.jsx)(q.A, { overlay: !0, selected: O, hovered: I, unread: L && !T }),
            (0, i.jsx)(eM, {
                children: (0, i.jsx)(W.Q, {
                    selected: !0,
                    upperBadge: y,
                    lowerBadge: D,
                    children: (0, i.jsx)("div", {
                        children: (0, i.jsx)(Y.j, {
                            ...h,
                            ariaLabel: ey.intl.formatToPlainString(ey.t["/uzRss"], {
                                guildName: ey.intl.string(ey.t.wMWyci),
                                mentions: R,
                            }),
                            "aria-selected": O,
                            to: { pathname: eL.BVt.CHANNEL(eL.YYv, S), state: ew },
                            selected: O || I,
                            onMouseEnter: () => p(!0),
                            onMouseLeave: () => p(!1),
                            onMouseDown: function () {
                                null != N && $.A.preload(N.guild_id, N.id);
                            },
                            onContextMenu: m,
                            children: (0, i.jsx)(K.StarIcon, {
                                size: "custom",
                                color: "currentColor",
                                className: eU.w,
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
var ex = n(633965),
    ek = n(857071),
    eF = n(851109),
    eB = n(72314),
    eV = n(543897),
    eH = n(696451),
    ej = n(71393),
    eW = n(711014),
    eY = n(723702),
    eK = n(757780),
    e$ = n(263715),
    eX = n(967198),
    ez = n(173860),
    eq = n(383394),
    eQ = n(131677),
    eZ = n(73153);
let eJ = {};
class e0 extends _.Ay.PersistedStore {
    static displayName = "ViewHistoryStore";
    static persistKey = "ViewHistoryStore";
    initialize(e) {
        null != e &&
            Object.keys(e).forEach((t) => {
                "number" == typeof e[t] && (eJ[t] = e[t]);
            });
    }
    getState() {
        return eJ;
    }
    hasViewed(e) {
        return null != eJ[e];
    }
}
let e1 = new e0(eZ.h, {
    VIEW_HISTORY_MARK_VIEW: function (e) {
        let { key: t } = e;
        eJ[t] = Date.now();
    },
});
var e2 = n(531685),
    e3 = n(583613);
let e6 = "app-download-item",
    e5 = "add-server-item";
function e7() {
    return !1;
}
function e8(e) {
    let t = ed.default.getMutableGuildStates();
    return (
        (e === eL.sFm.SERVER_DISCOVERY_BADGE && !e1.hasViewed(eL.sFm.SERVER_DISCOVERY_BADGE)) ||
        (e !== e6 && e !== e5 && t[e ?? "null"]?.highImportanceMentionCount > 0)
    );
}
let e4 = (0, e3.L_)((e, t, n) => ["null", ...t, ...e, e5, eL.sFm.E3_SERVER_DISCOVERY_BADGE, e6]);
function e9(e) {
    let { ref: t, ...n } = e,
        r = (0, _.yK)([eW.Ay, eQ.A, ed.default], () =>
            e4(eW.Ay.getGuildFolders(), eQ.A.getUnreadPrivateChannelIds(), ed.default.getStoreChangeSentinel()),
        ),
        a = (0, _.bG)([e2.A], () => e2.A.isFocused()),
        s = (0, _.bG)([eq.A], () => eq.A.getExpandedFolders());
    return (0, i.jsx)(ez.A, {
        ...n,
        ref: t,
        items: r,
        isUnread: e7,
        textUnread: ey.intl.string(ey.t.y2b7CA),
        textMention: ey.intl.string(ey.t.y2b7CA),
        isMentioned: e8,
        animate: a,
        expandedFolders: s,
    });
}
n(667532);
var te = n(628274),
    tt = n(495867),
    tn = n(778712),
    ti = n(812993),
    tr = n(442433),
    ta = n(620982),
    ts = n(571694),
    tl = n(47167),
    to = n(598104),
    td = n(976860),
    tc = n(114129),
    tu = n(442325),
    t_ = n(297334),
    tE = n(812020),
    tA = n(907459),
    tf = n(994500),
    th = n(145408);
let tI = (0, n(400845).Ay)({
    kind: "user",
    name: "2026-10-guild-tooltip-lazy-content",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function tp(e) {
    let t = tI.useConfig({ location: e }).enabled,
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
function tm(e) {
    let { icon: t, users: n } = e;
    return 0 === n.length
        ? null
        : (0, i.jsxs)("div", {
              className: eD.nM,
              children: [
                  (0, i.jsx)(t, { className: eD.RI, color: "currentColor" }),
                  (0, i.jsx)(eg.Ay, { users: n, max: 6 }),
              ],
          });
}
function tT(e) {
    let { muteConfig: t, className: n } = e;
    return t?.end_time == null
        ? (0, i.jsx)(eh.E, {
              variant: "body-xs/normal",
              color: "text-muted",
              className: n,
              children: ey.intl.string(ey.t.fpKdS1),
          })
        : (0, i.jsx)(th.A, { muteConfig: t, className: n });
}
function tg(e) {
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
        f,
        h,
        I,
        { channel: p } = e,
        m = p.id,
        {
            activityUsers: T,
            streamUsers: g,
            voiceUsers: S,
        } = ((t = p.id),
        (n = (0, _.bG)([tf.A], () => tf.A.getBlockedOrIgnoredIDs())),
        (a = (0, _.bG)([tE.A], () => tE.A.getUserAffinitiesMap(), [])),
        (l = (0, _.yK)(
            [X.Ay, eC.default],
            () =>
                X.Ay.getEmbeddedActivitiesForChannel(t)
                    .flatMap((e) => Array.from(e.userIds))
                    .map((e) => eC.default.getUser(e)),
            [t],
        )),
        (o = r.useMemo(() => (0, t_.aw)(l, n), [l, n])),
        (d = r.useMemo(() => (0, tA.L)(o, a, "DirectMessageTooltip - activityUsers"), [o, a])),
        (c = (0, _.yK)(
            [ee.A, eC.default],
            () => {
                let e = ee.A.getAllApplicationStreamsForChannel(t)
                    .map((e) => e.ownerId)
                    .map((e) => eC.default.getUser(e));
                return (0, t_.aw)(e, n);
            },
            [t, n],
        )),
        (u = r.useMemo(() => (0, t_.aw)(c, n), [c, n])),
        (E = r.useMemo(() => (0, tA.L)(u, a, "DirectMessageTooltip - activityUsers"), [u, a])),
        (A = r.useMemo(() => E.filter((e) => !d.some((t) => t.id === e.id)), [E, d])),
        (f = (0, _.yK)(
            [eO.Ay],
            () => {
                let e = eO.Ay.getVoiceStatesForChannel(p).map((e) => {
                    let { user: t } = e;
                    return t;
                });
                return (0, t_.aw)(e, n);
            },
            [p, n],
        )),
        (h = r.useMemo(() => (0, t_.aw)(f, n), [f, n])),
        (I = r.useMemo(() => (0, tA.L)(h, a, "DirectMessageTooltip - voiceUsers"), [h, a])),
        {
            voiceUsers: r.useMemo(
                () => I.filter((e) => !d.some((t) => t.id === e.id) && !E.some((t) => t.id === e.id)),
                [I, d, E],
            ),
            streamUsers: A,
            activityUsers: d,
        }),
        N = (0, i.jsx)(tm, { icon: eI.VoiceNormalIcon, users: S }),
        C = (0, i.jsx)(tm, { icon: ep.ScreenArrowIcon, users: g }),
        O = (0, i.jsx)(tm, { icon: em.AppsIcon, users: T }),
        { isMuted: R, muteConfig: L } = (0, _.cf)(
            [e_.Ay],
            () => ({ isMuted: e_.Ay.isChannelMuted(null, m), muteConfig: e_.Ay.getChannelMuteConfig(null, m) }),
            [m],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            N,
            C,
            O,
            R ? (0, i.jsx)(tT, { muteConfig: L, className: s()(eD.LM, { [eD.Sx]: null != N || null != C }) }) : null,
        ],
    });
}
function tS(e) {
    let { channel: t } = e,
        n = (0, tl.Ay)(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: s()(eD.nM, eD.Dl),
                children: (0, i.jsx)("span", { className: s()(eD.cN, eD.NT), children: n }),
            }),
            (0, i.jsx)(tg, { channel: t }),
        ],
    });
}
function tN(e) {
    let { channel: t, children: n } = e,
        a = (0, tl.Ay)(t),
        { shouldRenderRichContent: s, handleTooltipShow: l, handleTooltipHide: o } = tp("DirectMessageTooltip"),
        d = r.useMemo(
            () =>
                (0, i.jsx)(eh.E, {
                    variant: "body-md/semibold",
                    color: "text-default",
                    className: eD.A_,
                    children: s ? (0, i.jsx)(tS, { channel: t }) : a,
                }),
            [t, a, s],
        );
    return (0, i.jsx)(eT.m, {
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
class tC extends r.PureComponent {
    static defaultProps = { badge: 0, audio: !1, video: !1, isCurrentUserInThisDMCall: !1 };
    state = {
        hovered: !1,
        animating: !0,
        controller: new G.Controller({ scale: 0, height: 0, opacity: 0, config: F }),
    };
    componentWillEnter(e) {
        let { controller: t } = this.state;
        (e(),
            t
                .update({ immediate: !e2.A.isFocused(), height: 1, opacity: 1, scale: 1, config: F })
                .start()
                .then(() => this.setState({ animating: !1 })));
    }
    componentWillAppear(e) {
        let { controller: t } = this.state;
        t.update({ immediate: !0, scale: 1, opacity: 1, height: 1, config: F }).start().then(e);
    }
    componentWillLeave(e) {
        let { controller: t } = this.state;
        this.setState({ animating: !0 }, () =>
            t.update({ immediate: !e2.A.isFocused(), height: 0, opacity: 0, scale: 0, config: F }).start().then(e),
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
            t = e.type === eL.rbe.DM ? eC.default.getUser(e.getRecipientId()) : null;
        return null != t ? t.getAvatarURL(void 0, 48, !1) : (0, ts.Y)(e);
    }
    handleSelectChannel = () => {
        let { channel: e } = this.props,
            t = tu.A.getTabForChannel(e.id);
        null != t ? (0, tc.ZD)(t.id) : (0, td.pX)(eL.BVt.CHANNEL(eL.ME, e.id));
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            r = t.type === eL.rbe.DM ? eC.default.getUser(t.getRecipientId()) : null;
        null != r
            ? (0, tr.L3)(e, async () => {
                  let { default: e } = await Promise.all([
                      n.e(339715),
                      n.e(790484),
                      n.e(24312),
                      n.e(622936),
                      n.e(216947),
                      n.e(463317),
                      n.e(926132),
                      n.e(834552),
                      n.e(993103),
                      n.e(708757),
                      n.e(585968),
                      n.e(893190),
                      n.e(393336),
                      n.e(146652),
                      n.e(713708),
                      n.e(776273),
                      n.e(391763),
                      n.e(885533),
                      n.e(189673),
                      n.e(571210),
                      n.e(576432),
                      n.e(797558),
                      n.e(491001),
                      n.e(451162),
                      n.e(229787),
                      n.e(88342),
                      n.e(576665),
                      n.e(311802),
                      n.e(698965),
                      n.e(382563),
                      n.e(235313),
                      n.e(474610),
                      n.e(947502),
                      n.e(579245),
                      n.e(245996),
                      n.e(700792),
                      n.e(965789),
                      n.e(552172),
                      n.e(529422),
                      n.e(823427),
                      n.e(307059),
                      n.e(309291),
                      n.e(150773),
                      n.e(838056),
                      n.e(508829),
                      n.e(935483),
                      n.e(516054),
                      n.e(17244),
                      n.e(298199),
                      n.e(861649),
                      n.e(439778),
                  ]).then(n.bind(n, 385913));
                  return (n) => (0, i.jsx)(e, { ...n, channel: t, user: r });
              })
            : (0, tr.L3)(e, async () => {
                  let { default: e } = await Promise.all([
                      n.e(926132),
                      n.e(893190),
                      n.e(393336),
                      n.e(146652),
                      n.e(391763),
                      n.e(491001),
                      n.e(382563),
                      n.e(947502),
                      n.e(965789),
                      n.e(150773),
                      n.e(935483),
                      n.e(368530),
                      n.e(566378),
                      n.e(17244),
                      n.e(153416),
                      n.e(760200),
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
            f = e.isMultiUserDM() && null == e.icon,
            h = () => {
                let a = tu.A.isEnabled();
                return (0, i.jsx)(Y.j, {
                    to: a ? void 0 : eL.BVt.CHANNEL(eL.ME, e.id),
                    onClick: a ? this.handleSelectChannel : void 0,
                    onMouseEnter: () => this.setState({ hovered: !0 }),
                    onMouseLeave: () => this.setState({ hovered: !1 }),
                    selected: n || E,
                    ariaLabel:
                        null != t
                            ? [
                                  ey.intl.formatToPlainString(ey.t.hKarnZ, { name: t, mentions: r }),
                                  d ? ey.intl.string(ey.t["fk1/bX"]) : c ? ey.intl.string(ey.t["NGg/fm"]) : null,
                              ]
                                  .filter(Boolean)
                                  .join(", ")
                            : "",
                    onContextMenu: this.handleContextMenu,
                    icon: f ? void 0 : this.getChannelIcon(),
                    backgroundStyle: f ? "on-hover" : "always",
                    children: f
                        ? (0, i.jsx)(to.A, {
                              channel: e,
                              size: tn._3.SIZE_40,
                              facepileSizeOverride: tn._3.SIZE_32,
                              "aria-hidden": !0,
                          })
                        : void 0,
                    ..._,
                });
            };
        return (0, i.jsx)(G.animated.div, {
            style: this.getAnimatedStyle(),
            children: (0, i.jsxs)(Q.c, {
                children: [
                    (0, i.jsx)(q.A, { overlay: !0, hovered: !A && E, selected: !A && n, unread: !A && u }),
                    (0, i.jsx)(tN, {
                        channel: e,
                        children: (0, i.jsx)(W.Q, {
                            rounded: !0,
                            selected: !1,
                            lowerBadge: r > 0 ? (0, Z.wN)(r, void 0, !0) : null,
                            upperBadge: (0, Z.oi)({ audio: a, video: s, screenshare: l, isCurrentUserConnected: o }),
                            lowerBadgeSize: { width: (0, ti.o6)(r) },
                            children: h(),
                        }),
                    }),
                ],
            }),
        });
    }
}
function tO(e) {
    let { ref: t, ...n } = e,
        r = n.channel.id,
        a = (0, tl.Ay)(n.channel),
        s = (0, c.Vd)(r, 2),
        l = (0, _.bG)([tt.A], () => tt.A.getChannelId(), []),
        o = (0, _.bG)([R.A], () => R.A.getMode(r), [r]),
        d = (0, _.bG)([ee.A], () => ee.A.getAllApplicationStreamsForChannel(r).length > 0),
        u = (0, _.bG)([eO.Ay], () => eO.Ay.getVoiceStatesForChannel(n.channel).length > 0, [n.channel]),
        E = (0, _.bG)([en.Ay], () => en.Ay.getChannelId(), []),
        A = (0, _.bG)([eu.Ay], () => eu.Ay.getMentionCount(r), [r]),
        h = l === r,
        { isIncomingCall: I, isOngoingCall: m } = (0, ta.A)(r),
        T = !1,
        g = !1;
    (h || u) && ((T = o === eL._Of.VOICE), (g = o === eL._Of.VIDEO));
    let S = (0, p.r)(f.A.modules.guildbar.AVATAR_SIZE);
    return (0, i.jsx)(tC, {
        ...n,
        ref: t,
        channelName: a,
        unread: A > 0,
        selected: E === r,
        badge: A,
        audio: T,
        video: g,
        stream: d,
        isCurrentUserInThisDMCall: h,
        isIncomingCall: I,
        isOngoingCall: m,
        size: S,
        treeItemProps: s,
    });
}
function tR() {
    (0, _.bG)([et.A], () => et.A.getPrivateChannelsVersion());
    let e = et.A.getMutablePrivateChannels(),
        t = (0, _.yK)([eQ.A], () => eQ.A.getUnreadPrivateChannelIds()),
        { selectedVoiceGuildId: n, selectedVoiceChannelId: a } = (0, _.cf)([tt.A], () => ({
            selectedVoiceGuildId: tt.A.getGuildId(),
            selectedVoiceChannelId: tt.A.getChannelId(),
        })),
        s = t.map((t) => {
            let n = e[t];
            return null == n || n.id === a ? null : (0, i.jsx)(tO, { channel: n }, n.id);
        }),
        l = null == n && null != a ? e[a] : null;
    return (
        null != l && s.unshift((0, i.jsx)(tO, { channel: l }, l.id)),
        (0, i.jsx)(h.B, {
            id: "guild-list-unread-dms",
            role: "group",
            "aria-label": ey.intl.string(ey.t.YUU0RF),
            gap: "xs",
            hidden: s.length < 1,
            children: (0, i.jsx)(te.F, { component: r.Fragment, children: s }),
        })
    );
}
var tL = n(192308),
    ty = n(32880),
    tD = n(939249),
    tb = n(550591),
    tv = n(93776);
let tP = function (e) {
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
                lowerBadgeSize: f,
                showPill: h = !0,
                className: I,
                "aria-label": p,
                children: m,
                onMouseEnter: T,
                onMouseLeave: g,
                onMouseDown: S,
            } = n,
            N = (0, c.Vd)(a),
            [C, O] = r.useState(!1),
            R = p ?? ("string" == typeof _ ? _ : void 0);
        return (0, i.jsxs)(Q.c, {
            children: [
                h ? (0, i.jsx)(q.A, { overlay: !0, hovered: C, selected: u }) : null,
                (0, i.jsx)(tb.A, {
                    text: _,
                    selected: u,
                    children: (0, i.jsx)(W.Q, {
                        selected: !0,
                        upperBadge: E,
                        lowerBadge: A,
                        lowerBadgeSize: f,
                        children: (0, i.jsx)(tD.D, {
                            innerRef: t,
                            onMouseEnter: () => {
                                (T?.(), O(!0));
                            },
                            onMouseLeave: () => {
                                (g?.(), O(!1));
                            },
                            onMouseDown: S,
                            className: s()(tv.oZ, I, { [tv.wH]: u || C }),
                            onClick: l,
                            "aria-label": R,
                            "aria-selected": u,
                            onContextMenu: o,
                            focusProps: { enabled: !1 },
                            ...N,
                            children: null != d && (0, i.jsx)(d, { className: tv.sF, color: "currentColor" }),
                        }),
                    }),
                }),
                m,
            ],
        });
    },
    tM = "DOWNLOAD_APPS";
function tU() {
    let e = (0, tL.re)((e) => (0, tL.fD)(e, tM));
    return (0, i.jsx)(tP, {
        id: "app-download-button",
        onClick: () => {
            (0, tL.mM)(
                async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 987482));
                    return (t) => (0, i.jsx)(e, { source: "Guilds", ...t });
                },
                { modalKey: tM },
            );
        },
        selected: e,
        tooltip: ey.intl.string(ey.t.Z7jwrJ),
        icon: ty.DownloadIcon,
    });
}
var tw = n(245604),
    tG = n(630685),
    tx = n(272613),
    tk = n(398884),
    tF = n(772366),
    tB = n(728321),
    tV = n(260509),
    tH = n(531053),
    tj = n(819638),
    tW = n(260727);
let tY = { origin: { x: -16, y: 0 }, targetWidth: 48, targetHeight: 48, offset: { x: 0, y: 0 } };
function tK(e) {
    (0, tr.L3)(e, async () => {
        let { default: e } = await n.e(117288).then(n.bind(n, 4571));
        return (t) => (0, i.jsx)(e, { ...t });
    });
}
function t$(e) {
    let { onClick: t, ...n } = e,
        r = (0, tG.P)("guild_list_add_server");
    return (0, i.jsx)(tP, { ...n, onClick: () => t(r), tooltip: ey.intl.string(r ? ey.t.riOUtB : ey.t.l5WIbf) });
}
function tX(e) {
    let { disableTooltip: t, lastTargetNode: n } = e,
        a = (0, _.yK)([ej.A], () => ej.A.getGuildsArray()),
        s = (0, _.bG)([eC.default], () => eC.default.getCurrentUser()),
        l = r.useMemo(() => a.some((e) => (0, tV.bM)(e, s)), [a, s]),
        o = (0, tL.re)((e) => (0, tL.fD)(e, tj.fc)),
        { analyticsLocations: d } = (0, O.Ay)(),
        c = a.length >= 100 && !(0, tk.Om)(s);
    function u(e) {
        (0, tk.Sn)()
            ? (0, tF.A)({
                  analyticsSource: { page: eL.ThZ.CREATE_JOIN_GUILD_MODAL },
                  analyticsLocation: { page: eL.ThZ.CREATE_JOIN_GUILD_MODAL, section: eL.JJy.GUILD_CAP_UPSELL_MODAL },
                  analyticsLocations: d,
              })
            : tx.A.openCreateGuildModal({ location: "Guild List", ...(e && { joinFirst: e }) });
    }
    let E = { showPill: !1, id: "create-join-button", selected: o, onContextMenu: tK, icon: tw.CirclePlusIcon };
    return (0, i.jsx)("div", {
        className: tW.Uq,
        children: (0, i.jsxs)(tB.A, {
            tutorialId: l ? "create-more-servers" : "create-first-server",
            inlineSpecs: tY,
            position: "right",
            disabled: t,
            children: [
                c
                    ? (0, i.jsx)(tP, { ...E, onClick: () => u(!1), tooltip: ey.intl.string(ey.t.l5WIbf) })
                    : (0, i.jsx)(t$, { ...E, onClick: u }),
                null != n &&
                    (0, i.jsx)(tH.Ay, {
                        name: ey.intl.string(ey.t["45xjM5"]),
                        targetNode: n,
                        below: !0,
                        noCombine: !0,
                    }),
            ],
        }),
    });
}
var tz = n(565787),
    tq = n(791606),
    tQ = n(486020),
    tZ = n(183588);
function tJ(e) {
    let [t, a] = r.useState(!1),
        s = (0, c.Vd)(`guild-${e.id}`);
    return (0, i.jsx)(Q.c, {
        children: (0, i.jsx)(tb.A, {
            text: e.name,
            children: (0, i.jsx)(W.Q, {
                className: tZ.o,
                selected: t,
                lowerBadge: (0, i.jsx)(ti.fk, { icon: (0, tz.k)(tq.A), disableColor: !0, className: tZ._ }),
                children: (0, i.jsx)(Y.j, {
                    name: e.name,
                    onMouseEnter: function () {
                        a(!0);
                    },
                    onMouseLeave: function () {
                        a(!1);
                    },
                    onClick: function () {
                        (0, tL.mM)(async () => {
                            let { default: t } = await n.e(642945).then(n.bind(n, 537560));
                            return (n) => (0, i.jsx)(t, { name: e.name, guildId: e.id, ...n });
                        });
                    },
                    icon:
                        null != e.icon
                            ? tQ.Ay.getGuildIconURL({ id: e.id, icon: e.icon, canAnimate: !1, size: 42 })
                            : null,
                    ...s,
                }),
            }),
        }),
    });
}
var t0 = n(696292),
    t1 = n(836480),
    t2 = n(533129),
    t3 = n(726845),
    t6 = n(837057),
    t5 = n(310419),
    t7 = n(488995),
    t8 = n(324580),
    t4 = n(221596);
let t9 = function (e) {
    let { selected: t, onClick: n, questId: a, className: s, ref: l } = e,
        o = r.useCallback(() => {
            (0, t2.WL)({ source: t7.st.GUILDS_BAR_ICON });
            let e = void 0 !== a ? t7.GlobalDiscoveryTab.QUESTS : t3.A.getField("selectedTab");
            switch (e) {
                case t7.GlobalDiscoveryTab.QUESTS:
                    return (0, t6.transitionToGlobalDiscovery)({
                        tab: t7.GlobalDiscoveryTab.QUESTS,
                        location: t4.rE.DISCOVERY_COMPASS,
                        questContent: t0.u.DISCOVERY_COMPASS,
                        questId: a,
                    });
                case t7.GlobalDiscoveryTab.SERVERS:
                    return (0, t6.transitionToGlobalDiscovery)({
                        tab: t7.GlobalDiscoveryTab.SERVERS,
                        entrypoint: t8.J8.GUILDS_BAR,
                    });
                case t7.GlobalDiscoveryTab.APPS:
                    return (0, t6.transitionToGlobalDiscovery)({
                        tab: t7.GlobalDiscoveryTab.APPS,
                        newSessionState: {
                            entrypoint: { name: t5.sW.GLOBAL_DISCOVERY_BUTTON },
                            restorePreviousView: !0,
                        },
                    });
                default:
                    return (0, t6.transitionToGlobalDiscovery)({ tab: e });
            }
        }, [a]);
    return (0, i.jsx)(tP, {
        id: "guild-discover-button",
        ref: l,
        className: s,
        onClick: () => {
            (o(), void 0 !== n && n());
        },
        selected: t,
        tooltip: ey.intl.string(ey.t["4nEZLk"]),
        icon: t1.CompassIcon,
    });
};
var ne = n(506774),
    nt = n(509963),
    nn = n(111159),
    ni = n(793943),
    nr = n(722178),
    na = n(350972),
    ns = n(677056),
    nl = n(526162),
    no = n(746322);
function nd() {
    let [e, t] = (0, _.yK)([eC.default, nl.A], () => [
            nl.A.getCurrentDesktopIcon(),
            nr.Ay.isPremium(eC.default.getCurrentUser()),
        ]),
        n = (0, ni.fy)().activePanel === ni.HP.APP_ICON,
        r = (0, no.gG)(e),
        a = r.id !== na.LW.DEFAULT && (t || n),
        s = (0, i.jsx)(nn.ClydeIcon, { size: "custom", color: "currentColor", width: 24, height: 24 });
    return null != r && a ? (0, i.jsx)(ns.A, { id: r.id, size: no.N8.SIZE_48 }) : s;
}
var nc = n(531260),
    nu = n(411976),
    n_ = n(912309),
    nE = n(400492),
    nA = n(19191),
    nf = n(619921),
    nh = n(659096),
    nI = n(966846),
    np = n(674378),
    nm = n(394953),
    nT = n(682901),
    ng = n(235079),
    nS = n(222219);
let nN = { origin: { x: -16, y: 0 }, targetWidth: 48, targetHeight: 48, offset: { x: 0, y: 0 } };
function nC(e) {
    let { selected: t, user: n, badge: a, link: s, showProgressBadge: l } = e,
        [o, d] = r.useState(!1),
        [u, _] = r.useState(!1),
        [E, A] = r.useState(null),
        [f, h] = r.useState(0),
        I = (0, c.Vd)("home"),
        p = (0, ni.fy)().activePanel === ni.HP.APP_ICON;
    function m() {
        (A(null), h(0), clearTimeout(E));
    }
    if (null == n) return null;
    let T = ey.intl.string(ey.t.YUU0RF);
    u && (T = ne.w.get(eL.wqg) ? ey.intl.string(ey.t["nkq1l+"]) : ey.intl.string(ey.t.Be8Q5E));
    let g = null;
    !t && l && (g = (0, i.jsx)(nt.A, { className: nS.Cp, determineOwnVisibility: !1 }));
    let S = t || o || p,
        N = (0, i.jsx)(W.Q, {
            selected: !0,
            lowerBadge: a > 0 ? (0, Z.wN)(a) : null,
            upperBadge: g,
            lowerBadgeSize: { width: (0, ti.o6)(a) },
            children: (0, i.jsx)(Y.j, {
                onMouseEnter: () => d(!0),
                onMouseLeave: () => d(!1),
                onClick: function () {
                    if (!__OVERLAY__ && (null != E && clearTimeout(E), A(setTimeout(m, 500)), h(f + 1), 15 === f)) {
                        m();
                        let e = !ne.w.get(eL.wqg);
                        (ne.w.set(eL.wqg, e),
                            e && ne.w.set(ng.L, !0),
                            e ? (0, nE.Ak)("discodo") : (0, nE.Ak)("user_leave"),
                            _(!0),
                            setTimeout(() => {
                                _(!1);
                            }, 1e3));
                    }
                },
                selected: S,
                ariaLabel: ey.intl.string(ey.t.YUU0RF),
                "aria-owns": "guild-list-unread-dms",
                "aria-selected": t,
                ...I,
                to: {
                    pathname: s,
                    state: {
                        analyticsSource: {
                            page: eL.liQ.GUILD_CHANNEL,
                            section: eL.JJy.NAVIGATION,
                            object: eL.ZSU.BUTTON_HOME,
                        },
                    },
                },
                children: (0, i.jsx)(nd, {}),
            }),
        });
    return (0, i.jsx)("div", {
        className: nS.Uq,
        "data-guilds-bar-home": !0,
        children: (0, i.jsx)(tB.A, {
            inlineSpecs: nN,
            tutorialId: "friends-list",
            position: "right",
            children: (0, i.jsxs)(Q.c, {
                children: [
                    (0, i.jsx)(q.A, { overlay: !0, selected: t, hovered: o }),
                    (0, i.jsx)(tb.A, { hideOnClick: !0, text: T, selected: t, children: N }),
                ],
            }),
        }),
    });
}
function nO() {
    let e = (function () {
            let e = (0, J.A)((e) => e.guildId),
                { pathname: t } = (0, d.zy)(),
                n = t.startsWith(eL.BVt.GUILD_DISCOVERY) || t.startsWith(eL.BVt.GLOBAL_DISCOVERY),
                i = t.startsWith(eL.BVt.GUILD_MEMBER_VERIFICATION("")),
                r = (0, nm.lI)(),
                a = t.startsWith(eL.BVt.CONJURE);
            return null == e && !(n || i || r || a);
        })(),
        t = (0, _.bG)([nI.A, nh.A], () => {
            let e = (0, nt.v)(nI.A.activeItems, nh.A),
                { total: t, progress: n } = np.zY(e),
                i = np.uA(n, t);
            return i > 0 && i < 100;
        }),
        n = (0, n_.kX)(),
        r = Object.keys(nT.kb),
        a = (0, nc.A)(),
        { unviewedTrialCount: s, unviewedDiscountCount: l } = (0, _.cf)([nA.A], () => ({
            unviewedTrialCount: nA.A.getUnacknowledgedOffers(r).length,
            unviewedDiscountCount: nA.A.getUnacknowledgedDiscountOffers().length,
        })),
        o = a.fractionalState === nT.xc.NONE ? s + l : 0,
        c = (0, _.bG)([eC.default], () => eC.default.getCurrentUser()),
        u = (0, nu.W)(),
        E = n + o + u,
        A = E === o && o > 0 && n + u === 0,
        f = nf.A.getHomeLink();
    return (
        A && (f = eL.BVt.APPLICATION_STORE),
        (0, i.jsx)(nC, {
            selected: e,
            user: c,
            selectedChannelId: en.Ay.getChannelId(eL.ME),
            badge: E,
            link: f,
            showProgressBadge: t,
        })
    );
}
var nR = n(545328);
function nL(e) {
    let { fullWidth: t } = e;
    return (0, i.jsx)(Q.c, { children: (0, i.jsx)("div", { className: s()(nR.t, { [nR.I]: t }) }) });
}
var ny = n(28863),
    nD = n(695366),
    nb = n(919638),
    nv = n(818348),
    nP = n(837669);
function nM() {
    let e = (0, _.bG)([nb.A, ej.A], () => nb.A.unavailableGuilds.filter((e) => null == ej.A.getGuild(e)).length),
        t = (0, c.Vd)("unavailable-guilds-button");
    return e <= 0
        ? null
        : (0, i.jsx)(Q.c, {
              children: (0, i.jsx)(tb.A, {
                  text: ey.intl.format(ey.t["TnH05/"], { count: e }),
                  children: (0, i.jsx)(ny.Anchor, {
                      href: nv.qF.STATUS,
                      target: "_blank",
                      className: nP.h,
                      "aria-label": ey.intl.formatToPlainString(ey.t["MEpX+2"], { count: e }),
                      ...t,
                      children: (0, i.jsx)(nD.CircleErrorIcon, { color: "currentColor", "aria-hidden": !0 }),
                  }),
              }),
          });
}
var nU = n(778858),
    nw = n(945810),
    nG = n(404373),
    nx = n(738601);
let nk = [...nx.Nl, e_.Ay];
function nF(e) {
    return (0, _.yK)(
        [P.Ay, nw.Bt],
        () =>
            e.flatMap((e) => {
                let t = (0, M.cR)(e);
                return 0 !== t.length && (0, L.cx)(e, "ConjureServerRailState") ? t.map((e) => e.id) : [];
            }),
        [e],
    );
}
function nB(e) {
    return (0, _.cf)(
        nk,
        () =>
            (function (e) {
                let t = 0,
                    n = !1;
                for (let i of e) {
                    let e = (0, nx.AK)(i);
                    n ||= "working" === e;
                    let r = (0, M.fL)(P.Ay.getProject(i));
                    null == r || e_.Ay.isMuted(r) || ("unread" === e && (t += Math.max(1, (0, nG.xp)(i))));
                }
                return { unreadCount: t, working: n };
            })(e),
        [e],
    );
}
var nV = n(36412),
    nH = n(283001),
    nj = n(354583);
let nW = r.memo(function (e) {
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
        f,
        { folderNode: h, ...I } = e,
        { id: p, name: m, color: T, children: g } = h,
        S = r.useMemo(() => g.map((e) => e.id), [g]),
        N = (0, J.A)((e) => e.guildId),
        C = (0, _.bG)([eq.A], () => eq.A.isFolderExpanded(p)),
        O = (0, nV.y)(h),
        R =
            ((t = (0, _.bG)([tt.A], () => tt.A.getGuildId())),
            (a = h.children.map((e) => e.id)),
            (s = null != t && a.includes(t)),
            (l = !1),
            (o = !1),
            (d = !1),
            (c = (0, _.bG)([tt.A], () => tt.A.getChannelId())),
            (E = null != (u = (0, nj.A)()?.guild_id) && a.includes(u)),
            (A = (0, _.bG)([ei.A], () => null != c && ei.A.hasVideo(c), [c])),
            (f = (0, _.bG)([ee.A], () => ee.A.getCurrentUserActiveStream())),
            s && ((l = !A), (o = A), (d = null != f && null != f.guildId && a.includes(f.guildId))),
            r.useMemo(
                () => ({ audio: l, video: o, screenshare: d, liveStage: E, isCurrentUserConnected: s }),
                [l, o, d, E, s],
            )),
        {
            mentionCount: L,
            isMentionLowImportance: y,
            unread: D,
        } = (0, _.cf)([ed.default], () => ({
            mentionCount: S.map((e) => ed.default.getMentionCount(e)).reduce((e, t) => e + t, 0),
            isMentionLowImportance: S.every((e) => ed.default.getIsMentionLowImportance(e)),
            unread: S.some((e) => ed.default.hasUnread(e)),
        })),
        b = nB(nF(S)).unreadCount,
        v = L + b,
        P = r.useCallback(() => {
            nU.A.toggleGuildFolderExpand(p);
        }, [p]),
        M = r.useCallback(
            (e) => {
                (0, tr.L3)(e, async () => {
                    let { default: e } = await Promise.all([n.e(114748), n.e(459612)]).then(n.bind(n, 865815));
                    return (t) =>
                        (0, i.jsx)(e, { ...t, folderId: p, folderName: m, folderColor: T, unread: D || v > 0 });
                });
            },
            [p, m, T, D, v],
        );
    return (0, i.jsx)(nH.A, {
        ...I,
        folderNode: h,
        expanded: C,
        selected: null != N && S.includes(N),
        mentionCount: v,
        isMentionLowImportance: y && 0 === b,
        conjureOnlyMentions: 0 === L && b > 0,
        unread: D,
        mediaState: R,
        defaultFolderName: O,
        onExpandCollapse: P,
        onContextMenu: M,
    });
});
var nY = n(113494),
    nK = n(947832),
    n$ = n(821124),
    nX = n(212455);
function nz(e) {
    let t = e?.features.has(eL.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL),
        n = (0, _.bG)(
            [nX.A, eC.default, eH.Ay],
            () => {
                if (null == e) return;
                let t = nX.A.getRequest(e.id),
                    n = eC.default.getCurrentUser();
                if (null == n || null == t || t.userId !== n.id) return;
                let i = eH.Ay.getMember(e.id, t.userId);
                if (!(null != i && !i.isPending) || (0, n$.Oe)(t)) return t.applicationStatus;
            },
            [e],
        );
    return t ? n : void 0;
}
var nq = n(347951),
    nQ = n(34162);
function nZ(e) {
    return (0, _.bG)([nQ.A], () => nQ.A.getGuildMediaState(e), [e]);
}
var nJ = n(126600),
    n0 = n(607399),
    n1 = n(164636),
    n2 = n(817281),
    n3 = n(879982),
    n6 = n(345942),
    n5 = n(676279),
    n7 = n(866323),
    n8 = n(682163),
    n4 = n(327580);
function n9(e) {
    let { guild: t, show: n, active: r, onAnimationStart: a, onAnimationRest: l } = e,
        o = {},
        d = {};
    ((o.transform = "translate3d(10px, 10px, 0) scale3d(3, 3, 1)"),
        (d.transform = "translate3d(0, 0, 0) scale3d(1, 1, 1)"));
    let c = (0, p.r)(f.A.unsafe_rawColors.BRAND_500).hex(),
        u = (0, p.r)(f.A.unsafe_rawColors.PRIMARY_630).hex();
    r && null == t.icon && ((o.backgroundColor = c), (d.backgroundColor = u));
    let _ = (0, n7.p)(n, { from: o, enter: d, leave: o, config: { duration: 100 }, onStart: a, onRest: l });
    return (0, i.jsx)(i.Fragment, {
        children: _(
            (e, n, r) =>
                n &&
                (0, i.jsx)(
                    "div",
                    {
                        className: n4.qc,
                        children: (0, i.jsx)("div", {
                            className: s()(n4.MJ, n4.L0),
                            style: { margin: 0 },
                            children: (0, i.jsx)(G.animated.div, {
                                className: n4.NG,
                                style: e,
                                children: (0, i.jsx)("div", {
                                    className: n4.qJ,
                                    children: (0, i.jsx)("div", {
                                        className: n4.jg,
                                        children: (0, i.jsx)(n8.Ay, {
                                            guild: t,
                                            size: n8.Ay.Sizes.SMOL,
                                            className: n4.VL,
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
var ie = n(454938),
    it = n(714991),
    ii = n(554783),
    ir = n(513461),
    ia = n(164956),
    is = n(624265),
    il = n(970278),
    io = n(808728);
let id = (0, nw.mj)({
    name: "2026-09-server-tooltip-notification-context",
    kind: "user",
    defaultConfig: { mode: "disabled" },
    variations: { 0: { mode: "disabled" }, 1: { mode: "latest" }, 2: { mode: "mentions_first" } },
});
function ic(e) {
    let { guildId: t, mode: n } = e,
        { channel: r, hasMention: a } = (0, _.cf)(
            [e_.Ay, et.A, el.A, eu.Ay, ed.default],
            () => {
                if (e_.Ay.isMuted(t)) return { channel: null, hasMention: !1 };
                let e = { latest: null, latestMention: null };
                function i(t) {
                    if (!eu.Ay.hasUnreadOrMentions(t.id)) return;
                    let n = eu.Ay.getMentionCount(t.id);
                    if (!ed.default.shouldCountChannelUnread(t, n)) return;
                    let i = eu.Ay.lastMessageId(t.id);
                    if (null == i) return;
                    let r = { channel: t, hasMention: n > 0, lastMessageId: i };
                    ((null == e.latest || er.default.compare(i, e.latest.lastMessageId) > 0) && (e.latest = r),
                        r.hasMention &&
                            (null == e.latestMention || er.default.compare(i, e.latestMention.lastMessageId) > 0) &&
                            (e.latestMention = r));
                }
                let r = et.A.getMutableGuildChannelsForGuild(t);
                for (let e in r) i(r[e]);
                let a = el.A.getActiveJoinedThreadsForGuild(t);
                for (let e in a)
                    for (let t in a[e]) {
                        let e = et.A.getChannel(t);
                        null != e && i(e);
                    }
                let s = "mentions_first" === n ? (e.latestMention ?? e.latest) : e.latest;
                return { channel: s?.channel ?? null, hasMention: s?.hasMention ?? !1 };
            },
            [t, n],
        ),
        s = (0, tl.Ay)(r);
    return null == r || null == s || 0 === s.length
        ? null
        : (0, i.jsx)(eh.E, {
              className: eD.T5,
              color: "text-muted",
              variant: "body-xs/normal",
              lineClamp: 1,
              children: ey.intl.formatToPlainString(a ? ey.t.HwW3zP : ey.t.FwKQxx, { channelName: s }),
          });
}
function iu(e, t, n) {
    return 0 === t.length
        ? null
        : (0, i.jsxs)("div", {
              className: eD.nM,
              children: [
                  (0, i.jsx)(e, { className: eD.RI, color: "currentColor" }),
                  (0, i.jsx)(eg.Ay, { guildId: n, users: t, max: 6 }),
              ],
          });
}
function i_(e) {
    let { muteConfig: t, className: n } = e;
    return t?.end_time == null
        ? (0, i.jsx)(eh.E, {
              variant: "body-xs/normal",
              color: "text-muted",
              className: n,
              children: ey.intl.string(ey.t.fpKdS1),
          })
        : (0, i.jsx)(th.A, { muteConfig: t, className: n });
}
function iE(e) {
    let t,
        n,
        a,
        l,
        d,
        c,
        u,
        E,
        A,
        f,
        h,
        I,
        p,
        m,
        T,
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
            numStageListeners: b,
            streamUsersToShow: v,
            embeddedActivitiesUsers: P,
        } = ((t = R.id),
        (n = (0, _.yK)(
            [io.A, il.A, e_.Ay],
            () => {
                let e = io.A.getChannels(t)
                        .VOCAL.filter((e) => {
                            let { channel: n } = e;
                            return n.type === eL.rbe.GUILD_VOICE && !e_.Ay.isChannelMuted(t, n.id);
                        })
                        .map((e) => {
                            let { channel: t } = e;
                            return t.id;
                        }),
                    n = Object.values(il.A.getThreadsForGuild(t)).flatMap((e) => Object.keys(e));
                return [...e, ...n];
            },
            [t],
        )),
        (a = (0, is.Ay)(t)),
        (l = r.useMemo(() => a.map((e) => e.id), [a])),
        (d = (0, _.bG)([eO.Ay], () => eO.Ay.getVoiceStates(t), [t])),
        (c = (0, _.bG)([tf.A], () => tf.A.getBlockedOrIgnoredIDs())),
        (u = o().flatMap(n, (e) => {
            if (e === R.afkChannelId) return [];
            let t = (d[e] ?? []).map((e) => {
                let { user: t } = e;
                return t;
            });
            return (0, t_.aw)(t, c);
        })),
        (E = (0, _.yK)([eS.A], () =>
            o().flatMap(l, (e) => {
                if (e === R.afkChannelId) return [];
                let t = eS.A.getMutableParticipants(e, eN.ip.SPEAKER)
                    .filter((e) => e.type === eN.wY.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    });
                return (0, t_.aw)(t, c);
            }),
        )),
        (A = (0, _.bG)([eS.A], () => {
            let e = 0;
            for (let t of l) e += eS.A.getParticipantCount(t, eN.ip.AUDIENCE);
            return e;
        })),
        (f = (0, _.yK)(
            [ee.A, e_.Ay],
            () => {
                let e = ee.A.getAllApplicationStreams()
                    .filter((e) => e.guildId === t && !e_.Ay.isChannelMuted(t, e.channelId))
                    .map((e) => e.ownerId);
                return (0, t_.F7)(e, c);
            },
            [c, t],
        )),
        (h = (0, _.yK)(
            [X.Ay, et.A],
            () => {
                let e = X.Ay.getEmbeddedActivitiesForGuild(t)
                    .filter((e) => {
                        let t = et.A.getBasicChannel((0, z.H)(e.location));
                        return t?.type !== eL.rbe.GUILD_SPACE;
                    })
                    .flatMap((e) => Array.from(e.userIds));
                return (0, t_.F7)(e, c);
            },
            [t, c],
        )),
        (I = (0, _.yK)(
            [eC.default],
            () => {
                let e = h.map((e) => eC.default.getUser(e));
                return (0, t_.aw)(e);
            },
            [h],
        )),
        (p = (0, _.yK)([eC.default], () => f.map((e) => eC.default.getUser(e)), [f])),
        (m = u.filter((e) => !f.includes(e.id) && !h.includes(e.id))),
        (T = (0, t_.aw)(m)),
        (g = p.filter((e) => null != e && !h.includes(e.id))),
        (S = (0, _.bG)([tE.A], () => tE.A.getUserAffinitiesMap(), [])),
        (N = r.useMemo(() => (0, tA.L)(T, S, "GuildTooltip - nonBlockedUsers"), [T, S])),
        (C = r.useMemo(() => (0, tA.L)(E, S, "GuildTooltip - stageSpeakers"), [E, S])),
        (O = r.useMemo(() => (0, tA.L)(g, S, "GuildTooltip - streamUsers"), [g, S])),
        {
            voiceUsersToShow: N,
            stageSpeakers: C,
            numStageListeners: A,
            streamUsersToShow: O,
            embeddedActivitiesUsers: r.useMemo(() => (0, tA.L)(I, S, "GuildTooltip - embeddedActivitiesUsers"), [I, S]),
            hasActivity: E.length > 0 || m.length > 0 || g.length > 0 || I.length > 0,
        }),
        M = iu(eI.VoiceNormalIcon, y, L),
        U =
            0 === D.length
                ? null
                : (0, i.jsxs)("div", {
                      className: eD.nM,
                      children: [
                          (0, i.jsx)(eA.StageIcon, { size: "lg", color: "currentColor", className: eD.RI }),
                          (0, i.jsx)(eg.Ay, { guildId: L, users: D, max: 3 }),
                          (0, i.jsxs)("div", {
                              className: eD.GZ,
                              children: [
                                  (0, i.jsx)(ef.HeadphonesIcon, { size: "xs", color: "currentColor" }),
                                  (0, i.jsx)(eh.E, {
                                      className: eD._I,
                                      color: "text-default",
                                      variant: "body-xs/normal",
                                      children: b,
                                  }),
                              ],
                          }),
                      ],
                  }),
        w = iu(ep.ScreenArrowIcon, v, L),
        G = iu(em.AppsIcon, P, L),
        { isMuted: x, muteConfig: k } = (0, _.cf)(
            [e_.Ay],
            () => ({ isMuted: e_.Ay.isMuted(L), muteConfig: e_.Ay.getMuteConfig(L) }),
            [L],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            U,
            M,
            w,
            G,
            x ? (0, i.jsx)(i_, { muteConfig: k, className: s()(eD.LM, { [eD.Sx]: null != M || null != w }) }) : null,
        ],
    });
}
function iA(e) {
    let { guildJoinRequestStatus: t } = e;
    return (0, i.jsx)(eh.E, {
        className: eD.BT,
        color: "text-default",
        variant: "body-xs/normal",
        children: (function (e) {
            switch (e) {
                case ir.B5.SUBMITTED:
                    return ey.intl.string(ey.t["9KFC98"]);
                case ir.B5.REJECTED:
                    return ey.intl.string(ey.t["TQY/Rd"]);
                case ir.B5.APPROVED:
                    return ey.intl.string(ey.t.WXHcq5);
                default:
                    return ey.intl.string(ey.t.fjHFC8);
            }
        })(t),
    });
}
function ih(e) {
    let { guild: t, isTooltipShown: n, shouldShowNotificationContext: r } = e,
        a = (0, ie.A)(t),
        l = nz(t),
        o = null != l ? (0, i.jsx)(iA, { guildJoinRequestStatus: l }) : null,
        d = (0, i.jsx)(iE, { guild: t }),
        c = (0, _.bG)([ia.A], () => ia.A.isViewingRoles(t.id)),
        u = (0, nq.Ig)(t),
        E =
            n && r
                ? (function () {
                      let { mode: e } = id.getConfig({ location: "GuildTooltip.serverTooltipNotificationContext" });
                      return e;
                  })()
                : "disabled";
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: s()(eD.nM, eD.Dl),
                children: [
                    a
                        ? (0, i.jsx)(ii.A, { disableBoostClick: !0, guild: t, className: eD.WX })
                        : (0, i.jsx)(it.A, { guild: t, size: 20, className: eD.aL }),
                    (0, i.jsx)("span", { className: s()(eD.cN, eD.NT), children: t.name }),
                ],
            }),
            "disabled" !== E ? (0, i.jsx)(ic, { guildId: t.id, mode: E }) : null,
            u
                ? (0, i.jsx)(eh.E, {
                      className: eD.Ef,
                      color: "text-default",
                      variant: "body-sm/medium",
                      children: ey.intl.string(ey.t["2n0/Fk"]),
                  })
                : null,
            c
                ? (0, i.jsx)(eh.E, {
                      className: eD.BT,
                      color: "text-default",
                      variant: "body-xs/normal",
                      children: ey.intl.string(ey.t["5LwN89"]),
                  })
                : (o ?? d),
        ],
    });
}
function iI(e) {
    let { guild: t, shouldShowNotificationContext: n = !1, disabled: a = !1, children: s } = e,
        { isOpen: l, shouldRenderRichContent: o, handleTooltipShow: d, handleTooltipHide: c } = tp("GuildTooltip"),
        u = r.useMemo(
            () =>
                a
                    ? null
                    : (0, i.jsx)(eh.E, {
                          variant: "body-md/semibold",
                          color: "text-default",
                          className: eD.A_,
                          children: o
                              ? (0, i.jsx)(ih, { guild: t, isTooltipShown: l, shouldShowNotificationContext: n })
                              : t.name,
                      }),
            [a, t, l, o, n],
        );
    return (0, i.jsx)(eT.m, {
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
var ip = n(107385),
    im = n(191850),
    iT = n(937067);
let ig = { analyticsSource: { page: eL.liQ.GUILD_CHANNEL, section: eL.JJy.CHANNEL_LIST, object: eL.ZSU.CHANNEL } };
function iS(e, t) {
    (0, tr.L3)(e, async () => {
        let { default: e } = await Promise.all([
            n.e(203112),
            n.e(876364),
            n.e(668756),
            n.e(389321),
            n.e(996907),
            n.e(816027),
            n.e(562772),
            n.e(8159),
            n.e(24312),
            n.e(361922),
            n.e(179028),
            n.e(307564),
            n.e(597622),
            n.e(965886),
            n.e(231541),
            n.e(295570),
            n.e(301850),
            n.e(936875),
            n.e(862179),
            n.e(722784),
            n.e(326794),
            n.e(906470),
            n.e(860350),
            n.e(774550),
            n.e(923981),
            n.e(578667),
            n.e(71866),
            n.e(891473),
            n.e(412117),
            n.e(263406),
            n.e(1955),
            n.e(341161),
            n.e(410526),
            n.e(202985),
            n.e(603619),
            n.e(175927),
            n.e(470126),
            n.e(149697),
            n.e(128804),
            n.e(60882),
            n.e(71151),
            n.e(227853),
            n.e(286615),
            n.e(735042),
            n.e(311541),
            n.e(274227),
            n.e(870088),
            n.e(300641),
            n.e(571163),
            n.e(586662),
            n.e(831377),
            n.e(709976),
            n.e(860596),
            n.e(279774),
            n.e(763945),
            n.e(261204),
            n.e(686731),
            n.e(807432),
            n.e(873532),
            n.e(590088),
            n.e(807003),
            n.e(46083),
            n.e(152133),
            n.e(747802),
            n.e(626353),
            n.e(71169),
            n.e(736663),
            n.e(419121),
            n.e(489020),
            n.e(919789),
            n.e(669130),
            n.e(802890),
            n.e(82937),
            n.e(987221),
            n.e(157064),
            n.e(156957),
            n.e(918786),
            n.e(701335),
            n.e(257935),
            n.e(724086),
            n.e(358937),
            n.e(448738),
            n.e(206189),
            n.e(804439),
            n.e(84978),
            n.e(894292),
            n.e(153302),
            n.e(88683),
            n.e(694414),
            n.e(750370),
            n.e(972281),
            n.e(307107),
            n.e(896622),
            n.e(466592),
            n.e(73946),
            n.e(228271),
            n.e(387970),
            n.e(847445),
            n.e(547510),
            n.e(966366),
            n.e(983513),
            n.e(76928),
            n.e(699250),
            n.e(528311),
            n.e(411938),
            n.e(653383),
            n.e(217991),
            n.e(9796),
            n.e(952068),
            n.e(768289),
            n.e(772565),
            n.e(758531),
            n.e(533781),
            n.e(328276),
            n.e(592e3),
            n.e(524434),
            n.e(882304),
            n.e(984),
            n.e(226229),
            n.e(118994),
            n.e(516497),
            n.e(24774),
            n.e(670870),
            n.e(684231),
            n.e(570690),
            n.e(886631),
            n.e(435860),
            n.e(426782),
            n.e(406322),
            n.e(942571),
            n.e(464759),
            n.e(763343),
            n.e(194704),
            n.e(274461),
            n.e(830560),
            n.e(384054),
            n.e(267387),
            n.e(816348),
            n.e(165291),
            n.e(109383),
            n.e(818291),
            n.e(243794),
            n.e(519435),
            n.e(10985),
            n.e(171206),
            n.e(546547),
            n.e(102075),
            n.e(828178),
            n.e(45036),
            n.e(974119),
            n.e(434683),
            n.e(572388),
            n.e(505928),
            n.e(752657),
            n.e(747973),
            n.e(314001),
            n.e(885251),
            n.e(857871),
            n.e(529366),
            n.e(990185),
            n.e(752924),
            n.e(849162),
            n.e(660201),
            n.e(770925),
            n.e(179301),
            n.e(918347),
            n.e(102247),
            n.e(689521),
            n.e(237403),
            n.e(10886),
            n.e(84993),
            n.e(592268),
            n.e(374962),
            n.e(439120),
            n.e(736919),
            n.e(440636),
            n.e(568960),
            n.e(459257),
            n.e(790484),
            n.e(339715),
            n.e(985301),
            n.e(981059),
            n.e(631323),
            n.e(464452),
            n.e(243852),
            n.e(714144),
            n.e(458855),
            n.e(305161),
            n.e(845486),
            n.e(401425),
            n.e(120561),
            n.e(880186),
            n.e(58353),
            n.e(17256),
            n.e(377016),
            n.e(385504),
            n.e(269714),
            n.e(331696),
            n.e(249918),
            n.e(865429),
            n.e(806391),
            n.e(817298),
            n.e(921528),
            n.e(214566),
            n.e(707551),
            n.e(726399),
            n.e(424216),
            n.e(840100),
            n.e(551257),
            n.e(173896),
            n.e(57358),
            n.e(580305),
            n.e(722765),
            n.e(172413),
            n.e(145006),
            n.e(156912),
            n.e(249169),
            n.e(754596),
            n.e(191601),
            n.e(232e3),
            n.e(21486),
            n.e(304419),
            n.e(622936),
            n.e(45268),
            n.e(617281),
            n.e(733199),
            n.e(603977),
            n.e(655327),
            n.e(335532),
            n.e(138545),
            n.e(536490),
            n.e(771137),
            n.e(403655),
            n.e(212037),
            n.e(577154),
            n.e(877730),
            n.e(611899),
            n.e(527552),
            n.e(903758),
            n.e(768071),
            n.e(96922),
            n.e(769266),
            n.e(487873),
            n.e(765626),
            n.e(683302),
            n.e(660608),
            n.e(744554),
            n.e(118203),
            n.e(331212),
            n.e(638259),
            n.e(635958),
            n.e(207998),
            n.e(683621),
            n.e(711162),
            n.e(275179),
            n.e(289789),
            n.e(116125),
            n.e(977412),
            n.e(19385),
            n.e(692811),
            n.e(324469),
            n.e(70379),
            n.e(417333),
            n.e(905581),
            n.e(62052),
            n.e(122218),
            n.e(834552),
            n.e(993103),
            n.e(863232),
            n.e(708757),
            n.e(295507),
            n.e(332447),
            n.e(959880),
            n.e(174016),
            n.e(22921),
            n.e(910471),
            n.e(11301),
            n.e(430858),
            n.e(861060),
            n.e(364827),
            n.e(77333),
            n.e(626565),
            n.e(257980),
            n.e(960235),
            n.e(585968),
            n.e(486137),
            n.e(80421),
            n.e(206027),
            n.e(393471),
            n.e(177641),
            n.e(198329),
            n.e(678157),
            n.e(942374),
            n.e(223219),
            n.e(130795),
            n.e(10866),
            n.e(313537),
            n.e(40291),
            n.e(733115),
            n.e(397270),
            n.e(406222),
            n.e(761597),
            n.e(373122),
            n.e(649408),
            n.e(221856),
            n.e(186212),
            n.e(755936),
            n.e(147662),
            n.e(316344),
            n.e(973973),
            n.e(274501),
            n.e(544571),
            n.e(692990),
            n.e(714496),
            n.e(305834),
            n.e(393336),
            n.e(745959),
            n.e(858529),
            n.e(481987),
            n.e(595653),
            n.e(958038),
            n.e(532039),
            n.e(719466),
            n.e(787412),
            n.e(576909),
            n.e(830228),
            n.e(27355),
            n.e(953665),
            n.e(406174),
            n.e(126437),
            n.e(481647),
            n.e(713708),
            n.e(776273),
            n.e(749248),
            n.e(704434),
            n.e(900361),
            n.e(391763),
            n.e(492762),
            n.e(885533),
            n.e(282833),
            n.e(393766),
            n.e(21921),
            n.e(811310),
            n.e(258398),
            n.e(844780),
            n.e(571210),
            n.e(572963),
            n.e(676418),
            n.e(70833),
            n.e(897073),
            n.e(648365),
            n.e(188689),
            n.e(161275),
            n.e(166495),
            n.e(761253),
            n.e(521930),
            n.e(88342),
            n.e(49782),
            n.e(570849),
            n.e(45072),
            n.e(942724),
            n.e(139970),
            n.e(173764),
            n.e(940258),
            n.e(830221),
            n.e(858164),
            n.e(357688),
            n.e(308555),
            n.e(323624),
            n.e(977547),
            n.e(554241),
            n.e(311802),
            n.e(724303),
            n.e(508371),
            n.e(885434),
            n.e(53102),
            n.e(586127),
            n.e(41250),
            n.e(179049),
            n.e(132737),
            n.e(146070),
            n.e(344502),
            n.e(88599),
            n.e(836863),
            n.e(68904),
            n.e(780262),
            n.e(658216),
            n.e(854622),
            n.e(629482),
            n.e(590365),
            n.e(989088),
            n.e(37977),
            n.e(136149),
            n.e(470068),
            n.e(354044),
            n.e(817989),
            n.e(437065),
            n.e(891585),
            n.e(720590),
            n.e(709640),
            n.e(147626),
            n.e(613867),
            n.e(952548),
            n.e(689393),
            n.e(893917),
            n.e(727779),
            n.e(412743),
            n.e(585503),
            n.e(203589),
            n.e(636373),
            n.e(382465),
            n.e(294857),
            n.e(230664),
            n.e(15481),
            n.e(179745),
            n.e(655708),
            n.e(676156),
            n.e(889638),
            n.e(668802),
            n.e(631358),
            n.e(459414),
            n.e(553984),
            n.e(335395),
            n.e(142867),
            n.e(884601),
            n.e(782969),
            n.e(882777),
            n.e(945413),
            n.e(146844),
            n.e(255580),
            n.e(402026),
            n.e(163235),
            n.e(776766),
            n.e(632756),
            n.e(564850),
            n.e(504370),
            n.e(941040),
            n.e(124791),
            n.e(35771),
            n.e(648344),
            n.e(170104),
            n.e(491793),
            n.e(474610),
            n.e(299854),
            n.e(620656),
            n.e(902564),
            n.e(608557),
            n.e(495786),
            n.e(428967),
            n.e(275716),
            n.e(704727),
            n.e(782791),
            n.e(538345),
            n.e(214285),
            n.e(248330),
            n.e(770182),
            n.e(373004),
            n.e(803332),
            n.e(129080),
            n.e(506620),
            n.e(238232),
            n.e(938149),
            n.e(408362),
            n.e(741678),
            n.e(608032),
            n.e(852617),
            n.e(477970),
            n.e(256769),
            n.e(102698),
            n.e(125964),
            n.e(737021),
            n.e(775951),
            n.e(318939),
            n.e(254506),
            n.e(178048),
            n.e(874342),
            n.e(138830),
            n.e(757901),
            n.e(976516),
            n.e(400501),
            n.e(985794),
            n.e(596286),
            n.e(695358),
            n.e(767837),
            n.e(473384),
            n.e(432209),
            n.e(996868),
            n.e(368062),
            n.e(859991),
            n.e(667092),
            n.e(225575),
            n.e(556868),
            n.e(823300),
            n.e(709371),
            n.e(787139),
            n.e(466718),
            n.e(330724),
            n.e(599719),
            n.e(764180),
            n.e(67422),
            n.e(136204),
            n.e(726511),
            n.e(531741),
            n.e(390213),
            n.e(939171),
            n.e(987478),
            n.e(465157),
            n.e(490010),
            n.e(140667),
            n.e(916758),
            n.e(660249),
            n.e(440142),
            n.e(713567),
            n.e(612287),
            n.e(720064),
            n.e(733416),
            n.e(305557),
            n.e(321640),
            n.e(938579),
            n.e(652212),
            n.e(36227),
            n.e(104202),
            n.e(975933),
            n.e(460773),
            n.e(444567),
            n.e(93907),
            n.e(229666),
            n.e(92295),
            n.e(208018),
            n.e(356664),
            n.e(589916),
            n.e(695170),
            n.e(495861),
            n.e(309004),
            n.e(335559),
            n.e(848625),
            n.e(458273),
            n.e(606949),
            n.e(968763),
            n.e(163069),
            n.e(883952),
            n.e(26001),
            n.e(159957),
            n.e(540715),
            n.e(174192),
            n.e(414591),
            n.e(652111),
            n.e(434786),
            n.e(506045),
            n.e(838090),
            n.e(590814),
            n.e(147540),
            n.e(294607),
            n.e(618706),
            n.e(430997),
            n.e(363430),
            n.e(708536),
            n.e(411353),
            n.e(25572),
            n.e(258709),
            n.e(781202),
            n.e(203930),
            n.e(439089),
            n.e(982730),
            n.e(800872),
            n.e(728136),
            n.e(903663),
            n.e(452531),
            n.e(276297),
            n.e(365011),
            n.e(201243),
            n.e(950535),
            n.e(215920),
            n.e(573330),
            n.e(269786),
            n.e(688138),
            n.e(65393),
            n.e(338601),
            n.e(343116),
            n.e(368530),
            n.e(275859),
            n.e(583518),
            n.e(978046),
            n.e(680029),
            n.e(66580),
            n.e(387634),
            n.e(127659),
            n.e(428235),
            n.e(610943),
            n.e(637038),
            n.e(635864),
            n.e(396854),
            n.e(582486),
            n.e(447864),
            n.e(710727),
            n.e(966016),
            n.e(745493),
            n.e(507775),
            n.e(794704),
            n.e(760989),
            n.e(184621),
            n.e(466147),
            n.e(462984),
            n.e(50342),
            n.e(369501),
            n.e(303710),
            n.e(256373),
            n.e(134504),
            n.e(409391),
            n.e(645830),
            n.e(479971),
            n.e(810262),
            n.e(248985),
            n.e(995602),
            n.e(346313),
            n.e(836681),
            n.e(553203),
            n.e(850298),
            n.e(218489),
            n.e(838336),
            n.e(553683),
            n.e(115368),
            n.e(636002),
            n.e(343233),
            n.e(280098),
            n.e(569468),
            n.e(756684),
            n.e(419690),
            n.e(583827),
            n.e(495748),
            n.e(138728),
            n.e(708364),
            n.e(138733),
            n.e(452823),
            n.e(556967),
            n.e(647011),
            n.e(205896),
            n.e(269178),
            n.e(553584),
            n.e(466913),
            n.e(983947),
            n.e(752695),
            n.e(574534),
            n.e(71719),
            n.e(893767),
            n.e(213848),
            n.e(588307),
            n.e(462500),
            n.e(676376),
            n.e(898358),
            n.e(639855),
            n.e(842935),
            n.e(73091),
            n.e(37786),
            n.e(214530),
            n.e(886692),
            n.e(675933),
            n.e(916373),
            n.e(528038),
            n.e(81398),
            n.e(616658),
            n.e(702210),
            n.e(118504),
            n.e(8458),
            n.e(11810),
            n.e(404332),
            n.e(890152),
            n.e(174337),
            n.e(347871),
            n.e(287973),
            n.e(314863),
            n.e(966308),
            n.e(623386),
            n.e(375428),
            n.e(384951),
            n.e(560165),
            n.e(940661),
            n.e(712390),
            n.e(884063),
            n.e(876401),
            n.e(113446),
            n.e(306410),
            n.e(606053),
            n.e(632607),
            n.e(229030),
            n.e(161309),
            n.e(694529),
            n.e(303807),
            n.e(143330),
            n.e(995210),
            n.e(114751),
            n.e(852694),
            n.e(695152),
            n.e(317699),
            n.e(257032),
            n.e(952831),
            n.e(845322),
            n.e(114748),
            n.e(426386),
            n.e(128219),
            n.e(588860),
        ]).then(n.bind(n, 871638));
        return (n) => (0, i.jsx)(e, { ...n, guild: t });
    });
}
let iN = r.memo(function (e) {
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
            mediaState: h,
            unavailable: I = !1,
            badge: m = 0,
            isMentionLowImportance: T,
            contextMenu: g = iS,
            draggable: S = !1,
            sorting: N = !1,
            preloadOnClick: C = !0,
            guildJoinRequestStatus: O,
            height: R,
            conjureWorking: L = !1,
            "aria-setsize": y,
            "aria-posinset": D,
        } = e,
        { id: b, parentId: v } = t,
        P = e.upperBadge ?? (0, Z.hP)({ unavailable: I, conjureWorking: L, mediaState: h }),
        M = e.lowerBadge ?? void 0;
    null == M && m > 0
        ? (M =
              (0, Z.wN)(
                  m,
                  T ? f.A.colors.BACKGROUND_MOD_STRONG.css : f.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
              ) ?? void 0)
        : null == M && null != O && (M = (0, Z.eW)({ guildJoinRequestStatus: O }) ?? void 0);
    let U = e.lowerBadgeSize ?? { width: (0, ti.o6)(m) },
        [{ dragging: w }, x] = (0, nJ.i)({
            type: e$.PJ.GUILD,
            item: () => (
                requestAnimationFrame(() => {
                    a?.();
                }),
                { type: t.type, nodeId: t.id }
            ),
            end() {
                (l?.(), (0, n2.um)(eW.Ay.getCompatibleGuildFolders()));
            },
            collect: (e) => ({ dragging: e.isDragging() }),
        }),
        k = (0, c.Vd)(b ?? "", null != v ? 2 : 1),
        [F, B] = r.useState(!1),
        V = !N && F,
        [H, j] = r.useState(!1),
        [K, X] = r.useState(!1),
        [z] = r.useState(() => new A.J_(70, () => X(!0))),
        J = (0, n5.nr)() && !n0.Fr;
    r.useEffect(() => () => z.cancel(), [z]);
    let ee = r.useCallback(() => {
            null != o ? (0, td.pX)(o, { state: ig }) : (0, n6.u)(b, { state: ig });
        }, [b, o]),
        et = r.useCallback(() => {
            if (null != o || null == d || I || !C) return;
            let [e] = (0, n3.q)(d.id);
            null != e && $.A.preload(d.id, e);
        }, [o, d, I, C]),
        en = (0, n1.bG)([eH.Ay], () => eH.Ay.isCurrentUserGuest(b)),
        ei = r.useCallback(
            (e) => {
                null == d || en || g(e, d);
            },
            [d, g, en],
        ),
        er = r.useCallback(
            (e) => {
                "ArrowLeft" === e.key && null != v && document.querySelector(`[aria-owns=folder-items-${v}]`)?.focus();
            },
            [v],
        ),
        ea = r.useCallback(
            (e) => {
                e ? z.delay() : (z.cancel(), X(!1));
            },
            [z],
        );
    function es() {
        N || B(!0);
    }
    function el() {
        N || B(!1);
    }
    let eo = r.useCallback(
            (e) => {
                n?.(b, e);
            },
            [b, n],
        ),
        ed = (0, p.r)(f.A.modules.guildbar.AVATAR_SIZE);
    if (null == d) return null;
    let ec = d.name;
    if (
        (m > 0
            ? (ec = ey.intl.formatToPlainString(ey.t["/uzRss"], { guildName: d.name, mentions: m }))
            : E && (ec = ey.intl.formatToPlainString(ey.t.lzqe42, { guildName: d.name })),
        null != h)
    ) {
        let e = [];
        (h.activeEvent && e.push(ey.intl.string(ey.t.dHvJ2p)),
            h.liveStage && e.push(ey.intl.string(ey.t.OO7ndG)),
            h.screenshare && e.push(ey.intl.string(ey.t.wsHMZ7)),
            h.video && e.push(ey.intl.string(ey.t.BrLCS0)),
            h.audio && e.push(ey.intl.string(ey.t.jPBhKy)),
            h.activity && e.push(ey.intl.string(ey.t.Y3Gii5)),
            e.length > 0 && (ec = `${ec}, ${e.join(" ")}`));
    }
    L && (ec = `${ec}, ${ey.intl.string(im.default["Y8pS+n"])}`);
    let eu = (0, i.jsx)(n9, {
            guild: d,
            show: K,
            active: _,
            onAnimationStart: function () {
                j(K);
            },
            onAnimationRest: function () {
                K || j(!1);
            },
        }),
        e_ = J
            ? (0, i.jsx)(Y.j, {
                  ariaLabel: ec,
                  name: d.name,
                  onClick: ee,
                  onMouseEnter: es,
                  onMouseLeave: el,
                  onMouseDown: et,
                  onContextMenu: ei,
                  onKeyDown: er,
                  icon: (0, tV.Iv)(d, 2 * ed, V && u, !0),
                  selected: _ || V,
                  ...k,
                  "aria-setsize": y,
                  "aria-posinset": D,
                  "aria-selected": _,
              })
            : (0, i.jsx)(W.Q, {
                  selected: _,
                  children: (0, i.jsx)("div", {
                      ref: S
                          ? (e) => {
                                x(e);
                            }
                          : void 0,
                      "data-dnd-name": d.name,
                      "data-drop-hovering": K,
                      children: (0, i.jsx)(Y.j, {
                          ariaLabel: ec,
                          name: d.name,
                          onClick: ee,
                          onMouseEnter: es,
                          onMouseLeave: el,
                          onMouseDown: et,
                          onContextMenu: ei,
                          onKeyDown: er,
                          icon: (0, tV.Iv)(d, 2 * ed, V && u, !0),
                          selected: _ || V,
                          ...k,
                          "aria-setsize": y,
                          "aria-posinset": D,
                          "aria-selected": _,
                      }),
                  }),
              }),
        eE = K || H ? eu : e_,
        eA = (0, i.jsx)(tH.g4, { children: (0, i.jsx)(ip.A, {}) }),
        ef = J
            ? (0, i.jsx)(G.animated.div, {
                  ref: S
                      ? (e) => {
                            x(e);
                        }
                      : void 0,
                  "data-dnd-name": d.name,
                  style: { scale: null == R ? 1 : R },
                  "data-drop-hovering": K,
                  className: s()(iT.rN, { [iT.p9]: N, [iT.oR]: K, [iT.wH]: K || _ }),
                  children: (0, i.jsx)(W.Q, {
                      selected: !0,
                      upperBadge: P,
                      lowerBadge: M,
                      lowerBadgeSize: U,
                      children: eE,
                  }),
              })
            : (0, i.jsx)(G.animated.div, {
                  style: { scale: null == R ? 1 : R },
                  className: s()(iT.rN, { [iT.p9]: N, [iT.oR]: K, [iT.wH]: K || _ }),
                  "data-drop-hovering": K,
                  children: (0, i.jsx)(W.Q, {
                      selected: _,
                      maskShape: K || H,
                      upperBadge: P,
                      lowerBadge: M,
                      lowerBadgeSize: U,
                      children: eE,
                  }),
              });
    return (0, i.jsxs)(Q.c, {
        ref: eo,
        children: [
            (0, i.jsx)(q.A, { overlay: !0, hovered: !w && V, selected: !w && _, unread: !w && E }),
            (0, i.jsx)(iI, {
                guild: d,
                disabled: N,
                isDragging: w,
                shouldShowNotificationContext: !I && (E || m > 0),
                children: w ? eA : ef,
            }),
            S ? (0, i.jsx)(tH.Ay, { name: d.name, targetNode: t, onDragOverChanged: ea }) : null,
        ],
    });
});
var iC = n(64061);
let iO = r.memo(function (e) {
    let { guildNode: t, lowerBadge: n } = e,
        a = t.id,
        s = (0, _.bG)([ej.A], () => ej.A.getGuild(a)),
        l = nz(s),
        o = (0, _.bG)([e2.A], () => e2.A.isFocused()),
        d = (0, _.bG)([nb.A], () => nb.A.isUnavailable(a)),
        c = (0, J.A)((e) => e.guildId),
        u = nZ(a),
        {
            badge: E,
            unread: A,
            isMentionLowImportance: f,
        } = (0, _.cf)([ed.default], () => ({
            badge: ed.default.getMentionCount(a),
            isMentionLowImportance: ed.default.getIsMentionLowImportance(a),
            unread: ed.default.hasUnread(a),
        })),
        h = nB(nF(r.useMemo(() => [a], [a]))),
        I = E + h.unreadCount,
        p = 0 === E && h.unreadCount > 0,
        m = (0, nq.Ig)(s) && 0 === I,
        T = r.useMemo(
            () =>
                null != n
                    ? n
                    : p
                      ? (0, i.jsx)(nK.A, { count: I })
                      : m
                        ? (0, i.jsx)("div", {
                              className: iC.j,
                              children: (0, i.jsx)(nY.PauseIcon, {
                                  size: "custom",
                                  color: "currentColor",
                                  className: iC.v,
                                  width: 10,
                                  height: 10,
                              }),
                          })
                        : null,
            [n, p, I, m],
        );
    return (0, i.jsx)(iN, {
        ...e,
        guild: s,
        unavailable: d,
        animatable: o,
        selected: c === a,
        badge: I,
        isMentionLowImportance: f && 0 === h.unreadCount,
        lowerBadge: T,
        conjureWorking: h.working,
        unread: A,
        mediaState: u,
        guildJoinRequestStatus: l,
    });
});
var iR = n(265872),
    iL = n(534514),
    iy = n(821609),
    iD = n(339350),
    ib = n(475743),
    iv = n(624458),
    iP = n(408213),
    iM = n(636449),
    iU = n(928568);
function iw(e, t) {
    (0, tr.L3)(e, async () => {
        let { default: e } = await n.e(49056).then(n.bind(n, 97187));
        return (n) => (0, i.jsx)(e, { ...n, guild: t });
    });
}
function iG(e) {
    let { guildNode: t } = e,
        n = t.id,
        r = (0, _.bG)([nX.A], () => nX.A.getRequest(n)),
        a = (0, _.bG)([nX.A], () => nX.A.getJoinRequestGuild(n), [n]),
        s = (0, _.bG)([e2.A], () => e2.A.isFocused()),
        l = (0, _.bG)([eX.A], () => eX.A.getGuildId());
    return null == a
        ? null
        : (0, i.jsx)(iN, {
              guildNode: t,
              guild: a,
              animatable: s,
              draggable: !1,
              selected: n === l,
              preloadOnClick: !1,
              contextMenu: iw,
              lowerBadge:
                  r?.applicationStatus === ir.B5.REJECTED
                      ? (0, Z.eW)({ guildJoinRequestStatus: r.applicationStatus })
                      : void 0,
              route: eL.BVt.GUILD_MEMBER_VERIFICATION(n),
          });
}
var ix = n(943536);
function ik(e) {
    let { onActivate: t, children: n } = e,
        a = r.useRef(null),
        s = (0, _.bG)([nX.A], () => nX.A.hasJoinRequestCoackmark()),
        l = r.useCallback(() => {
            iP.Ay.clearCoachmark();
        }, []),
        o = (0, ib.Ay)(s),
        d = r.useRef(null);
    return (
        r.useEffect(() => {
            s && s !== o && (t(), d.current?.ref?.current?.layerRef?.current?.updatePosition());
        }, [d, s, o, t]),
        (0, i.jsxs)("div", {
            className: ix.kL,
            children: [
                (0, i.jsx)(iR.Y, {
                    ref: d,
                    targetElementRef: a,
                    shouldShow: s,
                    renderPopout: () =>
                        (0, i.jsxs)("div", {
                            className: ix.jC,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: ix.Bm,
                                    children: [
                                        (0, i.jsxs)("div", {
                                            className: ix.q3,
                                            children: [
                                                (0, i.jsx)(iL.D, {
                                                    variant: "heading-sm/medium",
                                                    children: ey.intl.string(ey.t["0YV0YE"]),
                                                }),
                                                (0, i.jsx)(eh.E, {
                                                    variant: "body-xs/normal",
                                                    color: "text-muted",
                                                    children: ey.intl.string(ey.t["0UQVDL"]),
                                                }),
                                            ],
                                        }),
                                        (0, i.jsx)(iy.$, {
                                            variant: "primary",
                                            size: "sm",
                                            text: ey.intl.string(ey.t["4r+amb"]),
                                            fullWidth: !0,
                                            onClick: l,
                                        }),
                                    ],
                                }),
                                (0, i.jsx)("div", { className: ix.ed }),
                            ],
                        }),
                    position: "right",
                    animationPosition: "right",
                    align: "top",
                    spacing: 16,
                    children: (e) => (0, i.jsx)("div", { ...e, className: ix.Ne, ref: a }),
                }),
                n,
            ],
        })
    );
}
function iF(e) {
    let { onActivate: t } = e,
        [n, a] = r.useState(!1),
        s = (0, _.bG)([eX.A], () => eX.A.getGuildId()),
        l = (0, _.bG)([nX.A], () => nX.A.hasFetchedRequestToJoinGuilds),
        o = (0, iU.A)(),
        d = (0, ib.Ay)(s),
        c = r.useMemo(() => {
            let e = (0, e$.xW)({
                folderId: iM.U.PENDING_JOIN_REQUESTS_FOLDER,
                folderName: ey.intl.string(ey.t["scsU+l"]),
                expanded: n,
                guildIds: [],
            });
            for (let t of o) e.children.push((0, e$.EL)(t, e.id));
            return e;
        }, [o, n]);
    r.useEffect(() => {
        n && !l && iv.A.fetchRequestToJoinGuilds();
    }, [n, l]);
    let u = null != s && o.includes(s);
    return (r.useEffect(() => {
        !n && u && d !== s && a(!0);
    }, [n, u, d, s]),
    0 === o.length)
        ? null
        : (0, i.jsx)(ik, {
              onActivate: t,
              children: (0, i.jsx)(nH.A, {
                  folderNode: c,
                  expanded: n,
                  selected: u,
                  draggable: !1,
                  sorting: !1,
                  onExpandCollapse: () => {
                      (a(!n), iP.Ay.clearCoachmark());
                  },
                  folderButtonSize: "icon",
                  folderButtonContent: (0, i.jsx)("div", {
                      className: ix.rH,
                      children: (0, i.jsx)(iD.HourglassIcon, { size: "sm", color: "currentColor" }),
                  }),
                  renderChildNode: function (e, t, n) {
                      return e.type !== e$.PJ.GUILD
                          ? null
                          : (0, i.jsx)(iG, { guildNode: e, "aria-setsize": n, "aria-posinset": t }, e.id);
                  },
              }),
          });
}
function iB(e) {
    let { guildId: t } = e,
        n = r.useMemo(() => (0, e$.EL)(t), [t]),
        a = (0, _.bG)([ej.A], () => ej.A.getGuild(t)),
        s = (0, _.bG)([e2.A], () => e2.A.isFocused()),
        l =
            t ===
            (0, J.A)((e) => {
                let { guildId: t } = e;
                return t;
            }),
        o = nZ(t);
    return null == a
        ? null
        : (0, i.jsx)(iN, { guildNode: n, guild: a, animatable: s, selected: l, draggable: !1, mediaState: o });
}
var iV = n(987566);
let iH = (0, B.Fe)({
        createPromise: () =>
            Promise.all([
                n.e(185830),
                n.e(237403),
                n.e(12343),
                n.e(592e3),
                n.e(524434),
                n.e(849162),
                n.e(778716),
                n.e(570973),
                n.e(481647),
                n.e(749248),
                n.e(704434),
                n.e(900361),
                n.e(391763),
                n.e(844780),
                n.e(161275),
                n.e(761253),
                n.e(139970),
                n.e(858164),
                n.e(977547),
                n.e(508371),
                n.e(382563),
                n.e(676156),
                n.e(550033),
                n.e(713567),
                n.e(444567),
                n.e(695170),
                n.e(603303),
                n.e(954289),
                n.e(480945),
                n.e(228850),
                n.e(697367),
                n.e(127659),
                n.e(860003),
                n.e(472627),
                n.e(5331),
                n.e(941348),
                n.e(941088),
                n.e(33631),
                n.e(130706),
                n.e(303886),
                n.e(967154),
                n.e(96296),
            ]).then(n.bind(n, 489555)),
        webpackId: 489555,
        name: "NotificationsInboxButton",
    }),
    ij = (0, eY.uF)() ? 4 : 12 * !(0, eY.cX)();
function iW(e, t, n) {
    let i = e + t,
        r = 2 + t;
    return {
        iconSize: e,
        iconTotalSize: i,
        badgeVisibleBuffer: i - 16,
        separatorSize: r,
        heightBeforeGuilds: ij + r + n * i,
        bottomInset: 16,
    };
}
function iY(e) {
    return e.startsWith(eL.BVt.GUILD_DISCOVERY) || e.startsWith(eL.BVt.GLOBAL_DISCOVERY);
}
class iK {
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
            (0, ex.u9)(this.getVisibleGuildIds));
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
            (null == e && iY(window.location.pathname)) ||
            e === eL.sFm.SERVER_DISCOVERY_BADGE ||
            e === eL.sFm.E3_SERVER_DISCOVERY_BADGE
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
function i$(e) {
    let { hideDms: t, scrollToTop: n, lurkingGuildIds: r, conjureRail: a } = e,
        s = (0, j.A)(),
        l = (0, i.jsx)(H, { shown: a.shown, projects: a.projects }),
        o = (0, _.yK)([ej.A, eH.Ay], () => ej.A.getGuildIds().filter((e) => eH.Ay.isCurrentUserGuest(e))),
        d = r.concat(o),
        { entrypoint: c } = (0, eF.X8)({ location: "GuildsBar" });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(nO, {}),
            s ? null : l,
            c === eF.RK.SERVER_RAIL_TOP && (0, i.jsx)(iH, {}),
            s ? (0, i.jsx)(eG, {}) : null,
            s ? l : null,
            !t && (0, i.jsx)(tR, {}),
            d.map((e) => (0, i.jsx)(iB, { guildId: e }, e)),
            (0, i.jsx)(iF, { onActivate: n }),
        ],
    });
}
function iX(e) {
    let { guildDiscoveryButton: t, disableAppDownload: n, isOverlay: r, renderTreeNode: a, lurkingGuildIds: s } = e,
        [l] = (0, _.yK)([eW.Ay], () => {
            let e = eW.Ay.getGuildsTree();
            return [e, e.version];
        }),
        o = l.getRoots(),
        d = (0, _.yK)([eV.A], () => eV.A.getGeoRestrictedGuilds()).map((e) =>
            (0, i.jsx)(tJ, { id: e.id, name: e.name, icon: e.icon }, e.id),
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(h.B, {
                role: "group",
                "aria-label": ey.intl.string(ey.t["7hB4kg"]),
                gap: "xs",
                children: o.map((e, t) => a(e, t, o.length)),
            }),
            d,
            (0, i.jsx)(nM, {}),
            r ? null : (0, i.jsx)(tX, { disableTooltip: s.length > 0, lastTargetNode: o[o.length - 1] }),
            r ? null : t,
            n ? null : (0, i.jsx)(tU, {}),
        ],
    });
}
function iz(e) {
    var t;
    let { disableAppDownload: n = eY.isPlatformEmbedded, isOverlay: a = !1, className: l, themeOverride: o } = e,
        [u] = (0, _.yK)([eW.Ay], () => {
            let e = eW.Ay.getGuildsTree();
            return [e, e.version];
        }),
        E = (0, _.bG)([ek.A], () => ek.A.lurkingGuildIds()),
        h = r.useMemo(() => (a ? [] : E), [E, a]),
        g = (0, _.bG)([R.A], () => R.A.isFullscreenInContext()),
        { isSorting: N, startSorting: G, stopSorting: x } = (0, eK.A)(),
        k = r.useRef(!1),
        [F] = r.useState(() => new A.Ep()),
        B = r.useRef(null),
        V = r.useRef(null),
        { ref: H, ...W } = (0, c.$y)(),
        Y = (0, I.R7)(),
        [K, $] = r.useState(!1),
        X = (0, p.r)(f.A.modules.guildbar.AVATAR_SIZE),
        z = (0, p.r)(f.A.space.SPACE_XS),
        q = (0, j.A)(),
        Q = (function (e) {
            let t,
                n = (0, L.TW)(e),
                i = (0, _.bG)([D.A], () => D.A.isPinned()),
                { pathname: a } = (0, d.zy)(),
                s = (0, b.tb)(a);
            ((t = (0, _.yK)([P.Ay], () => P.Ay.getUnloadedParticipatingProjectIds())),
                r.useEffect(() => {
                    n && t.length > 0 && (0, v.tF)(t);
                }, [n, t]));
            let l = (0, y.U)(() => P.Ay.getRailProjects().filter((e) => null == (0, M.DC)(e))),
                o = (0, U.A)(l, (0, b.Xj)(a)),
                c = n ? o : w;
            return { shown: n && (s || i || c.length > 0), projects: c };
        })("GuildsBar"),
        { pathname: Z } = (0, d.zy)(),
        { entrypoint: ee } = (0, eF.X8)({ location: "GuildsBar" }),
        et = +!!q + (Q.shown ? 1 + Q.projects.length : 0) + +(ee === eF.RK.SERVER_RAIL_TOP),
        en = r.useMemo(() => {
            let e = iW(X, z, 0);
            return new iK(
                u,
                $,
                eL.tEg,
                () => {
                    (B.current?.calculateState(), V.current?.calculateState());
                },
                e,
            );
        }, [X, z, u]);
    (r.useLayoutEffect(() => {
        en.setSizes(iW(X, z, et));
    }, [en, X, z, et]),
        r.useEffect(
            () => (
                en.setResizeObserver(),
                () => {
                    en.clearResizeObserver();
                }
            ),
            [en],
        ),
        r.useEffect(() => {
            function e() {
                (B.current?.calculateState(), V.current?.calculateState());
            }
            return (ed.default.addChangeListener(e), () => ed.default.removeChangeListener(e));
        }, []));
    let { analyticsLocations: ei } = (0, O.Ay)(C.A.GUILDS_LIST),
        er = iY(Z);
    ((0, S.u5)(() => {
        if (!k.current && 0 !== u.size) {
            if (!er) {
                let { scrollTop: e } = eB.A.getGuildListDimensions();
                en.scrollTo({ to: e, animate: !1 });
            }
            return ((k.current = !0), () => F.stop());
        }
    }),
        r.useEffect(() => {
            if ((en.setGuildsTree(u), k.current || 0 === u.size)) return;
            let e = J.A.getState().guildId;
            en.scrollToGuild(e, !1);
            let t = null;
            return J.A.subscribe((e) => {
                let { guildId: n } = e;
                n !== t && ((t = n), en.scrollToGuild(t, !1));
            });
        }, [u, en]));
    let ea = r.useCallback(() => {
        en.scrollTo({ to: 0, animate: !1 });
    }, [en]);
    ((t = en.scrollToGuild),
        r.useEffect(() => {
            let e = null;
            function n() {
                let n = eX.A.getGuildId();
                n !== e && ((e = n ?? null), t(n ?? null, !1));
            }
            return (
                eX.A.addChangeListener(n),
                () => {
                    eX.A.removeChangeListener(n);
                }
            );
        }, [t]));
    let es = r.useCallback(
            function e(t, n, r) {
                switch (t.type) {
                    case e$.PJ.FOLDER:
                        return (0, i.jsx)(
                            nW,
                            {
                                folderNode: t,
                                treeVersion: u.version,
                                setNodeRef: en.setNodeRef,
                                draggable: !0,
                                sorting: N,
                                onDragStart: G,
                                onDragEnd: x,
                                renderChildNode: e,
                                "aria-setsize": r,
                                "aria-posinset": void 0 !== n ? n + 1 : void 0,
                            },
                            t.id,
                        );
                    case e$.PJ.GUILD:
                        return (0, i.jsx)(
                            iO,
                            {
                                guildNode: t,
                                setRef: en.setNodeRef,
                                draggable: !0,
                                sorting: N,
                                onDragStart: G,
                                onDragEnd: x,
                                "aria-setsize": r,
                                "aria-posinset": void 0 !== n ? n + 1 : void 0,
                            },
                            t.id,
                        );
                    default:
                        return null;
                }
            },
            [G, x, N, en.setNodeRef, u.version],
        ),
        el = (0, i.jsx)(t9, { selected: er, className: iV.ai }),
        eo = ee === eF.RK.SERVER_RAIL_BOTTOM;
    return (0, i.jsx)(O.f5, {
        value: ei,
        children: (0, i.jsx)(m.N, {
            theme: o,
            children: (e) =>
                (0, i.jsxs)("nav", {
                    className: s()(iV.iE, l, e, { [iV.R]: g }),
                    "aria-label": ey.intl.string(ey.t.PjnF2t),
                    children: [
                        (0, i.jsx)(e9, {
                            ref: B,
                            isVisible: en.isItemVisible,
                            onJumpTo: en.handleJumpToGuild,
                            className: iV.Xl,
                            barClassName: iV.Sh,
                        }),
                        (0, i.jsxs)("div", {
                            ref: H,
                            ...W,
                            ...Y,
                            role: "tree",
                            "aria-multiselectable": !1,
                            className: iV.B2,
                            children: [
                                (0, i.jsxs)(T.Ch, {
                                    className: s()({ [iV.XG]: !0, [iV.qw]: K }),
                                    fade: !0,
                                    experimental_useStack: !0,
                                    gap: "xs",
                                    ref: en.scrollerRef,
                                    onScroll: en.handleScroll,
                                    children: [
                                        (0, i.jsx)(i$, { scrollToTop: ea, lurkingGuildIds: h, conjureRail: Q }),
                                        (0, i.jsx)(nL, {}),
                                        (0, i.jsx)(iX, {
                                            guildDiscoveryButton: el,
                                            disableAppDownload: n,
                                            isOverlay: a,
                                            renderTreeNode: es,
                                            lurkingGuildIds: h,
                                        }),
                                    ],
                                }),
                                eo &&
                                    (0, i.jsxs)("div", {
                                        children: [
                                            (0, i.jsx)(nL, { fullWidth: !0 }),
                                            (0, i.jsx)("div", { className: iV.JU, children: (0, i.jsx)(iH, {}) }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, i.jsx)(e9, {
                            reverse: !0,
                            ref: V,
                            isVisible: en.isItemVisible,
                            onJumpTo: en.handleJumpToGuild,
                            className: s()(iV.LZ, { [iV.CH]: !a && !eo, [iV.c0]: !a && eo }),
                            barClassName: iV.Sh,
                        }),
                    ],
                }),
        }),
    });
}
let iq = r.memo(
    function (e) {
        let t = (0, N.A)("guildsnav");
        return (0, i.jsx)(c.hD, { navigator: t, children: (0, i.jsx)(iz, { ...e }) });
    },
    (e, t) => !1 === t.isVisible || (0, E.A)(e, t),
);
