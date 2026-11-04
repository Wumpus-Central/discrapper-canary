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
    _ = n(17928),
    E = n(52133),
    A = n(451988),
    h = n(661531),
    f = n(331322),
    I = n(312138),
    p = n(602853),
    m = n(43990),
    T = n(689175),
    g = n(951001),
    S = n(964486),
    N = n(260762),
    C = n(793574),
    O = n(688810),
    R = n(198052),
    L = n(97005),
    y = n(741907),
    D = n(972013),
    b = n(751841),
    v = n(371169),
    P = n(260498),
    M = n(352571);
let U = [];
var w = n(736819),
    G = n(717421);
let x = { friction: 28, tension: 600 };
function k(e) {
    switch (e) {
        case "height":
        case "opacity":
            return { duration: 150, ...x };
        case "scale":
            return { ...x };
        default:
            throw Error(`getRailItemSpringConfig() - Invalid spring ${String(e)}`);
    }
}
var F = n(268218);
let B = (0, F.Fe)({
    createPromise: () =>
        Promise.all([
            n.e("163944"),
            n.e("916758"),
            n.e("356664"),
            n.e("540715"),
            n.e("741111"),
            n.e("11312"),
            n.e("745493"),
            n.e("442637"),
            n.e("292270"),
            n.e("914454"),
            n.e("382840"),
            n.e("814378"),
            n.e("801169"),
            n.e("484482"),
        ]).then(n.bind(n, 271122)),
    webpackId: 271122,
    name: "ConjureRailFolder",
});
function V(e) {
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
        [{ height: u, opacity: _, scale: E }, A] = (0, G.z)(() => {
            let e = +!!t;
            return { height: e, opacity: e, scale: e, config: k };
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
        ? (0, i.jsx)(w.animated.div, {
              style: {
                  opacity: _,
                  height: u.to([0, 1], [0, c]),
                  marginBottom: u.to([0, 1], [-s, 0]),
                  transform: E.to([0, 1], [0.5, 1]).to((e) => `scale(${e})`),
              },
              children: (0, i.jsx)("div", { ref: d, children: (0, i.jsx)(B, { projects: n }) }),
          })
        : null;
}
var H = n(749884);
n(321073);
var j = n(862328),
    W = n(67811),
    Y = n(27232),
    K = n(308528),
    $ = n(933958),
    z = n(969151),
    X = n(941971),
    q = n(900848),
    Z = n(771640),
    Q = n(366811),
    J = n(616356),
    ee = n(734057),
    et = n(309010),
    en = n(977997),
    ei = n(935208),
    er = n(181079),
    ea = n(5180),
    es = n(863005),
    el = n(152007),
    eo = n(458294),
    ed = n(576705),
    ec = n(573163),
    eu = n(543465),
    e_ = n(428784),
    eE = n(451394),
    eA = n(597601),
    eh = n(834730),
    ef = n(983851),
    eI = n(183623),
    ep = n(323384),
    em = n(866665),
    eT = n(104171),
    eg = n(63995),
    eS = n(518769),
    eN = n(287809),
    eC = n(607567),
    eO = n(403362),
    eR = n(652215),
    eL = n(105292),
    ey = n(785332);
function eD(e, t) {
    return 0 === t.length
        ? null
        : (0, i.jsxs)("div", {
              className: ey.nM,
              children: [
                  (0, i.jsx)(e, { className: ey.RI, color: "currentColor" }),
                  (0, i.jsx)(eT.Ay, { guildId: void 0, users: t, max: 6 }),
              ],
          });
}
function eb() {
    let e = (0, _.yK)([er.A, ee.A], () =>
            ei.default
                .keys(er.A.getFavoriteChannels())
                .map((e) => ee.A.getChannel(e))
                .filter(eO.Vq),
        ),
        t = e.map((e) => e.id),
        n = e.filter((e) => e.type === eR.rbe.GUILD_VOICE),
        r = e.filter((e) => e.type === eR.rbe.GUILD_STAGE_VOICE).map((e) => e.id),
        a = (0, _.yK)(
            [eC.Ay],
            () =>
                o().flatMap(n, (e) =>
                    eC.Ay.getVoiceStatesForChannel(e).map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
                ),
            [n],
        ),
        s = (0, _.yK)([eg.A], () =>
            o().flatMap(r, (e) =>
                eg.A.getMutableParticipants(e, eS.ip.SPEAKER)
                    .filter((e) => e.type === eS.wY.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
            ),
        ),
        l = (0, _.bG)([eg.A], () => {
            let e = 0;
            for (let t of r) e += eg.A.getParticipantCount(t, eS.ip.AUDIENCE);
            return e;
        }),
        d = (0, _.yK)(
            [J.A],
            () =>
                J.A.getAllApplicationStreams()
                    .filter((e) => t.includes(e.channelId))
                    .map((e) => e.ownerId),
            [t],
        ),
        c = (0, _.yK)(
            [$.Ay],
            () => {
                let e = $.Ay.getEmbeddedActivitiesByChannel(),
                    n = [];
                for (let i of t) n.push(...(e.get(i)?.flatMap((e) => Array.from(e.userIds)) ?? []));
                return n;
            },
            [t],
        ),
        u = (0, _.yK)([eN.default], () => c.map((e) => eN.default.getUser(e)), [c]),
        E = (0, _.yK)([eN.default], () => d.map((e) => eN.default.getUser(e)), [d]),
        A = eD(
            ef.H,
            a.filter((e) => !d.includes(e.id) && !c.includes(e.id)),
        ),
        h =
            0 === s.length
                ? null
                : (0, i.jsxs)("div", {
                      className: ey.nM,
                      children: [
                          (0, i.jsx)(eE.q, { size: "lg", color: "currentColor", className: ey.RI }),
                          (0, i.jsx)(eT.Ay, { guildId: void 0, users: s, max: 3 }),
                          (0, i.jsxs)("div", {
                              className: ey.GZ,
                              children: [
                                  (0, i.jsx)(eA.L, { size: "xs", color: "currentColor" }),
                                  (0, i.jsx)(eh.E, {
                                      className: ey._I,
                                      color: "text-default",
                                      variant: "body-xs/medium",
                                      children: l,
                                  }),
                              ],
                          }),
                      ],
                  }),
        f = eD(
            eI.F,
            E.filter((e) => null != e && !c.includes(e.id)),
        ),
        I = eD(ep.k, u);
    return (0, i.jsxs)(i.Fragment, { children: [h, A, f, I] });
}
function ev() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: s()(ey.nM, ey.Dl),
                children: (0, i.jsx)("span", { className: s()(ey.cN, ey.NT), children: eL.intl.string(eL.t.wMWyci) }),
            }),
            (0, i.jsx)(eb, {}),
        ],
    });
}
function eP(e) {
    let { "aria-label": t = !1, children: n } = e,
        a = r.useMemo(
            () =>
                (0, i.jsx)(eh.E, {
                    variant: "body-md/semibold",
                    color: "text-default",
                    className: ey.A_,
                    children: (0, i.jsx)(ev, {}),
                }),
            [],
        );
    return (0, i.jsx)(em.m, {
        __unsupportedReactNodeAsText: a,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": !1 === t ? void 0 : t,
        asContainer: !0,
        children: n,
    });
}
var eM = n(195572);
let eU = { analyticsSource: { page: eR.liQ.GUILD_CHANNEL, section: eR.JJy.CHANNEL_LIST, object: eR.ZSU.CHANNEL } };
function ew() {
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
        m = (0, e_.$)("favorite-server-context"),
        { favoriteGuildMuted: T, favoriteChannels: g } = (0, _.cf)([er.A], () => ({
            favoriteChannels: er.A.getFavoriteChannels(),
            favoriteGuildMuted: er.A.favoriteGuildMuted,
        })),
        S = (0, _.bG)([et.Ay], () => et.Ay.getChannelId(eR.YYv)),
        N = (0, _.bG)([ee.A], () => ee.A.getChannel(S)),
        C = (0, Q.A)((e) => e.guildId),
        O = (0, ea.ai)(C),
        { badge: R, unread: L } = (0, _.cf)([es.A, ee.A, eo.default, el.A, ed.A, ec.Ay, eu.Ay], () => {
            let e = ei.default.keys(g),
                t = new Set();
            return e.reduce(
                (e, n) => {
                    let i = ee.A.getChannel(n),
                        r = i?.getGuildId(),
                        a = ec.Ay.getMentionCount(n);
                    if (
                        (t.has(n) || (t.add(n), (e.badge = e.badge + a)),
                        (e.unread = e.unread || (ec.Ay.hasUnread(n) && eo.default.shouldCountChannelUnread(i, a))),
                        null != r)
                    ) {
                        let i = es.A.getActiveJoinedRelevantThreadsForParent(r, n);
                        for (let n in i) {
                            let i = ec.Ay.getMentionCount(n);
                            t.has(n) || (t.add(n), (e.badge += i));
                            let r = ee.A.getChannel(n);
                            e.unread = e.unread || (ec.Ay.hasUnread(n) && eo.default.shouldCountChannelUnread(r, i));
                        }
                    }
                    return e;
                },
                { badge: 0, unread: !1 },
            );
        }),
        y =
            ((t = null != (e = (0, _.bG)([et.Ay], () => et.Ay.getVoiceChannelId())) && null != g[e]),
            (n = (0, _.bG)([J.A], () => {
                if (!t) return !1;
                let e = J.A.getCurrentUserActiveStream();
                return null != e && null != g[e.channelId];
            })),
            (a = (0, _.bG)([J.A], () => J.A.getAllApplicationStreams().some((e) => null != g[e.channelId]))),
            (s = (0, _.bG)([en.A], () => t && null != e && en.A.hasVideo(e), [t, e])),
            (l = (0, _.yK)([$.Ay], () =>
                ei.default.keys(g).reduce((e, t) => (e.push(...$.Ay.getEmbeddedActivitiesForChannel(t)), e), []),
            )),
            (o = (0, _.bG)([$.Ay], () =>
                Array.from($.Ay.getSelfEmbeddedActivities().values()).some((e) => {
                    let { location: t } = e,
                        n = (0, z.H)(t);
                    return null != n && null != g[n];
                }),
            )),
            (d = l.length > 0),
            (u = !1),
            (E = !1),
            (A = !1),
            (h = !1),
            t ? ((u = !s), (E = s), (A = n), (h = o)) : ((A = a), (h = d)),
            (0, Z.oi)({ audio: u, video: E, screenshare: A, liveStage: !1, isCurrentUserConnected: t, activity: h })),
        D = R > 0 ? (0, Z.wN)(R) : null;
    return (0, i.jsxs)(q.c, {
        children: [
            (0, i.jsx)(X.A, { overlay: !0, selected: O, hovered: I, unread: L && !T }),
            (0, i.jsx)(eP, {
                children: (0, i.jsx)(j.Q, {
                    selected: !0,
                    upperBadge: y,
                    lowerBadge: D,
                    children: (0, i.jsx)("div", {
                        children: (0, i.jsx)(W.j, {
                            ...f,
                            ariaLabel: eL.intl.formatToPlainString(eL.t["/uzRss"], {
                                guildName: eL.intl.string(eL.t.wMWyci),
                                mentions: R,
                            }),
                            "aria-selected": O,
                            to: { pathname: eR.BVt.CHANNEL(eR.YYv, S), state: eU },
                            selected: O || I,
                            onMouseEnter: () => p(!0),
                            onMouseLeave: () => p(!1),
                            onMouseDown: function () {
                                null != N && K.A.preload(N.guild_id, N.id);
                            },
                            onContextMenu: m,
                            children: (0, i.jsx)(Y.StarIcon, {
                                size: "custom",
                                color: "currentColor",
                                className: eM.w,
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
var eG = n(633965),
    ex = n(857071),
    ek = n(851109),
    eF = n(72314),
    eB = n(543897),
    eV = n(696451),
    eH = n(71393),
    ej = n(711014),
    eW = n(723702),
    eY = n(757780),
    eK = n(263715),
    e$ = n(967198),
    ez = n(173860),
    eX = n(383394),
    eq = n(131677),
    eZ = n(73153);
let eQ = {};
class eJ extends _.Ay.PersistedStore {
    static displayName = "ViewHistoryStore";
    static persistKey = "ViewHistoryStore";
    initialize(e) {
        null != e &&
            Object.keys(e).forEach((t) => {
                "number" == typeof e[t] && (eQ[t] = e[t]);
            });
    }
    getState() {
        return eQ;
    }
    hasViewed(e) {
        return null != eQ[e];
    }
}
let e0 = new eJ(eZ.h, {
    VIEW_HISTORY_MARK_VIEW: function (e) {
        let { key: t } = e;
        eQ[t] = Date.now();
    },
});
var e1 = n(531685),
    e2 = n(583613);
let e3 = "app-download-item",
    e5 = "add-server-item";
function e4() {
    return !1;
}
function e6(e) {
    let t = eo.default.getMutableGuildStates();
    return (
        (e === eR.sFm.SERVER_DISCOVERY_BADGE && !e0.hasViewed(eR.sFm.SERVER_DISCOVERY_BADGE)) ||
        (e !== e3 && e !== e5 && t[e ?? "null"]?.highImportanceMentionCount > 0)
    );
}
let e7 = (0, e2.L_)((e, t, n) => ["null", ...t, ...e, e5, eR.sFm.E3_SERVER_DISCOVERY_BADGE, e3]);
function e8(e) {
    let { ref: t, ...n } = e,
        r = (0, _.yK)([ej.Ay, eq.A, eo.default], () =>
            e7(ej.Ay.getGuildFolders(), eq.A.getUnreadPrivateChannelIds(), eo.default.getStoreChangeSentinel()),
        ),
        a = (0, _.bG)([e1.A], () => e1.A.isFocused()),
        s = (0, _.bG)([eX.A], () => eX.A.getExpandedFolders());
    return (0, i.jsx)(ez.A, {
        ...n,
        ref: t,
        items: r,
        isUnread: e4,
        textUnread: eL.intl.string(eL.t.y2b7CA),
        textMention: eL.intl.string(eL.t.y2b7CA),
        isMentioned: e6,
        animate: a,
        expandedFolders: s,
    });
}
n(667532);
var e9 = n(868285),
    te = n(763827),
    tt = n(778712),
    tn = n(812993),
    ti = n(442433),
    tr = n(620982),
    ta = n(571694),
    ts = n(47167),
    tl = n(598104),
    to = n(976860),
    td = n(114129),
    tc = n(442325),
    tu = n(297334),
    t_ = n(427358),
    tE = n(907459),
    tA = n(994500),
    th = n(145408);
let tf = (0, n(240921).Ay)({
    kind: "user",
    name: "2026-10-guild-tooltip-lazy-content",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function tI(e) {
    let t = tf.useConfig({ location: e }).enabled,
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
function tp(e) {
    let { icon: t, users: n } = e;
    return 0 === n.length
        ? null
        : (0, i.jsxs)("div", {
              className: ey.nM,
              children: [
                  (0, i.jsx)(t, { className: ey.RI, color: "currentColor" }),
                  (0, i.jsx)(eT.Ay, { users: n, max: 6 }),
              ],
          });
}
function tm(e) {
    let { muteConfig: t, className: n } = e;
    return t?.end_time == null
        ? (0, i.jsx)(eh.E, {
              variant: "body-xs/normal",
              color: "text-muted",
              className: n,
              children: eL.intl.string(eL.t.fpKdS1),
          })
        : (0, i.jsx)(th.A, { muteConfig: t, className: n });
}
function tT(e) {
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
        m = p.id,
        {
            activityUsers: T,
            streamUsers: g,
            voiceUsers: S,
        } = ((t = p.id),
        (n = (0, _.bG)([tA.A], () => tA.A.getBlockedOrIgnoredIDs())),
        (a = (0, _.bG)([t_.A], () => t_.A.getUserAffinitiesMap(), [])),
        (l = (0, _.yK)(
            [$.Ay, eN.default],
            () =>
                $.Ay.getEmbeddedActivitiesForChannel(t)
                    .flatMap((e) => Array.from(e.userIds))
                    .map((e) => eN.default.getUser(e)),
            [t],
        )),
        (o = r.useMemo(() => (0, tu.aw)(l, n), [l, n])),
        (d = r.useMemo(() => (0, tE.L)(o, a, "DirectMessageTooltip - activityUsers"), [o, a])),
        (c = (0, _.yK)(
            [J.A, eN.default],
            () => {
                let e = J.A.getAllApplicationStreamsForChannel(t)
                    .map((e) => e.ownerId)
                    .map((e) => eN.default.getUser(e));
                return (0, tu.aw)(e, n);
            },
            [t, n],
        )),
        (u = r.useMemo(() => (0, tu.aw)(c, n), [c, n])),
        (E = r.useMemo(() => (0, tE.L)(u, a, "DirectMessageTooltip - activityUsers"), [u, a])),
        (A = r.useMemo(() => E.filter((e) => !d.some((t) => t.id === e.id)), [E, d])),
        (h = (0, _.yK)(
            [eC.Ay],
            () => {
                let e = eC.Ay.getVoiceStatesForChannel(p).map((e) => {
                    let { user: t } = e;
                    return t;
                });
                return (0, tu.aw)(e, n);
            },
            [p, n],
        )),
        (f = r.useMemo(() => (0, tu.aw)(h, n), [h, n])),
        (I = r.useMemo(() => (0, tE.L)(f, a, "DirectMessageTooltip - voiceUsers"), [f, a])),
        {
            voiceUsers: r.useMemo(
                () => I.filter((e) => !d.some((t) => t.id === e.id) && !E.some((t) => t.id === e.id)),
                [I, d, E],
            ),
            streamUsers: A,
            activityUsers: d,
        }),
        N = (0, i.jsx)(tp, { icon: ef.H, users: S }),
        C = (0, i.jsx)(tp, { icon: eI.F, users: g }),
        O = (0, i.jsx)(tp, { icon: ep.k, users: T }),
        { isMuted: R, muteConfig: L } = (0, _.cf)(
            [eu.Ay],
            () => ({ isMuted: eu.Ay.isChannelMuted(null, m), muteConfig: eu.Ay.getChannelMuteConfig(null, m) }),
            [m],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            N,
            C,
            O,
            R ? (0, i.jsx)(tm, { muteConfig: L, className: s()(ey.LM, { [ey.Sx]: null != N || null != C }) }) : null,
        ],
    });
}
function tg(e) {
    let { channel: t } = e,
        n = (0, ts.Ay)(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: s()(ey.nM, ey.Dl),
                children: (0, i.jsx)("span", { className: s()(ey.cN, ey.NT), children: n }),
            }),
            (0, i.jsx)(tT, { channel: t }),
        ],
    });
}
function tS(e) {
    let { channel: t, children: n } = e,
        a = (0, ts.Ay)(t),
        { shouldRenderRichContent: s, handleTooltipShow: l, handleTooltipHide: o } = tI("DirectMessageTooltip"),
        d = r.useMemo(
            () =>
                (0, i.jsx)(eh.E, {
                    variant: "body-md/semibold",
                    color: "text-default",
                    className: ey.A_,
                    children: s ? (0, i.jsx)(tg, { channel: t }) : a,
                }),
            [t, a, s],
        );
    return (0, i.jsx)(em.m, {
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
class tN extends r.PureComponent {
    static defaultProps = { badge: 0, audio: !1, video: !1, isCurrentUserInThisDMCall: !1 };
    state = {
        hovered: !1,
        animating: !0,
        controller: new w.Controller({ scale: 0, height: 0, opacity: 0, config: k }),
    };
    componentWillEnter(e) {
        let { controller: t } = this.state;
        (e(),
            t
                .update({ immediate: !e1.A.isFocused(), height: 1, opacity: 1, scale: 1, config: k })
                .start()
                .then(() => this.setState({ animating: !1 })));
    }
    componentWillAppear(e) {
        let { controller: t } = this.state;
        t.update({ immediate: !0, scale: 1, opacity: 1, height: 1, config: k }).start().then(e);
    }
    componentWillLeave(e) {
        let { controller: t } = this.state;
        this.setState({ animating: !0 }, () =>
            t.update({ immediate: !e1.A.isFocused(), height: 0, opacity: 0, scale: 0, config: k }).start().then(e),
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
            t = e.type === eR.rbe.DM ? eN.default.getUser(e.getRecipientId()) : null;
        return null != t ? t.getAvatarURL(void 0, 48, !1) : (0, ta.Y)(e);
    }
    handleSelectChannel = () => {
        let { channel: e } = this.props,
            t = tc.A.getTabForChannel(e.id);
        null != t ? (0, td.ZD)(t.id) : (0, to.pX)(eR.BVt.CHANNEL(eR.ME, e.id));
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            r = t.type === eR.rbe.DM ? eN.default.getUser(t.getRecipientId()) : null;
        null != r
            ? (0, ti.L3)(e, async () => {
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
                      n.e("585968"),
                      n.e("893190"),
                      n.e("393336"),
                      n.e("146652"),
                      n.e("776273"),
                      n.e("391763"),
                      n.e("28102"),
                      n.e("189673"),
                      n.e("571210"),
                      n.e("882073"),
                      n.e("797558"),
                      n.e("955557"),
                      n.e("691994"),
                      n.e("229787"),
                      n.e("88342"),
                      n.e("576665"),
                      n.e("311802"),
                      n.e("698965"),
                      n.e("591951"),
                      n.e("235313"),
                      n.e("474610"),
                      n.e("947502"),
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
                      n.e("508829"),
                      n.e("935483"),
                      n.e("516054"),
                      n.e("17244"),
                      n.e("298199"),
                      n.e("864464"),
                      n.e("439778"),
                  ]).then(n.bind(n, 385913));
                  return (n) => (0, i.jsx)(e, { ...n, channel: t, user: r });
              })
            : (0, ti.L3)(e, async () => {
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
                let a = tc.A.isEnabled();
                return (0, i.jsx)(W.j, {
                    to: a ? void 0 : eR.BVt.CHANNEL(eR.ME, e.id),
                    onClick: a ? this.handleSelectChannel : void 0,
                    onMouseEnter: () => this.setState({ hovered: !0 }),
                    onMouseLeave: () => this.setState({ hovered: !1 }),
                    selected: n || E,
                    ariaLabel:
                        null != t
                            ? [
                                  eL.intl.formatToPlainString(eL.t.hKarnZ, { name: t, mentions: r }),
                                  d ? eL.intl.string(eL.t["fk1/bX"]) : c ? eL.intl.string(eL.t["NGg/fm"]) : null,
                              ]
                                  .filter(Boolean)
                                  .join(", ")
                            : "",
                    onContextMenu: this.handleContextMenu,
                    icon: h ? void 0 : this.getChannelIcon(),
                    backgroundStyle: h ? "on-hover" : "always",
                    children: h
                        ? (0, i.jsx)(tl.A, {
                              channel: e,
                              size: tt._3.SIZE_40,
                              facepileSizeOverride: tt._3.SIZE_32,
                              "aria-hidden": !0,
                          })
                        : void 0,
                    ..._,
                });
            };
        return (0, i.jsx)(w.animated.div, {
            style: this.getAnimatedStyle(),
            children: (0, i.jsxs)(q.c, {
                children: [
                    (0, i.jsx)(X.A, { overlay: !0, hovered: !A && E, selected: !A && n, unread: !A && u }),
                    (0, i.jsx)(tS, {
                        channel: e,
                        children: (0, i.jsx)(j.Q, {
                            rounded: !0,
                            selected: !1,
                            lowerBadge: r > 0 ? (0, Z.wN)(r, void 0, !0) : null,
                            upperBadge: (0, Z.oi)({ audio: a, video: s, screenshare: l, isCurrentUserConnected: o }),
                            lowerBadgeSize: { width: (0, tn.o6)(r) },
                            children: f(),
                        }),
                    }),
                ],
            }),
        });
    }
}
function tC(e) {
    let { ref: t, ...n } = e,
        r = n.channel.id,
        a = (0, ts.Ay)(n.channel),
        s = (0, c.Vd)(r, 2),
        l = (0, _.bG)([te.A], () => te.A.getChannelId(), []),
        o = (0, _.bG)([R.A], () => R.A.getMode(r), [r]),
        d = (0, _.bG)([J.A], () => J.A.getAllApplicationStreamsForChannel(r).length > 0),
        u = (0, _.bG)([eC.Ay], () => eC.Ay.getVoiceStatesForChannel(n.channel).length > 0, [n.channel]),
        E = (0, _.bG)([et.Ay], () => et.Ay.getChannelId(), []),
        A = (0, _.bG)([ec.Ay], () => ec.Ay.getMentionCount(r), [r]),
        f = l === r,
        { isIncomingCall: I, isOngoingCall: m } = (0, tr.A)(r),
        T = !1,
        g = !1;
    (f || u) && ((T = o === eR._Of.VOICE), (g = o === eR._Of.VIDEO));
    let S = (0, p.r)(h.A.modules.guildbar.AVATAR_SIZE);
    return (0, i.jsx)(tN, {
        ...n,
        ref: t,
        channelName: a,
        unread: A > 0,
        selected: E === r,
        badge: A,
        audio: T,
        video: g,
        stream: d,
        isCurrentUserInThisDMCall: f,
        isIncomingCall: I,
        isOngoingCall: m,
        size: S,
        treeItemProps: s,
    });
}
function tO() {
    (0, _.bG)([ee.A], () => ee.A.getPrivateChannelsVersion());
    let e = ee.A.getMutablePrivateChannels(),
        t = (0, _.yK)([eq.A], () => eq.A.getUnreadPrivateChannelIds()),
        { selectedVoiceGuildId: n, selectedVoiceChannelId: a } = (0, _.cf)([te.A], () => ({
            selectedVoiceGuildId: te.A.getGuildId(),
            selectedVoiceChannelId: te.A.getChannelId(),
        })),
        s = t.map((t) => {
            let n = e[t];
            return null == n || n.id === a ? null : (0, i.jsx)(tC, { channel: n }, n.id);
        }),
        l = null == n && null != a ? e[a] : null;
    return (
        null != l && s.unshift((0, i.jsx)(tC, { channel: l }, l.id)),
        (0, i.jsx)(f.B, {
            id: "guild-list-unread-dms",
            role: "group",
            "aria-label": eL.intl.string(eL.t.YUU0RF),
            gap: "xs",
            hidden: s.length < 1,
            children: (0, i.jsx)(e9.F, { component: r.Fragment, children: s }),
        })
    );
}
var tR = n(192308),
    tL = n(32880),
    ty = n(939249),
    tD = n(550591),
    tb = n(93776);
let tv = function (e) {
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
                children: m,
                onMouseEnter: T,
                onMouseLeave: g,
                onMouseDown: S,
            } = n,
            N = (0, c.Vd)(a),
            [C, O] = r.useState(!1),
            R = p ?? ("string" == typeof _ ? _ : void 0);
        return (0, i.jsxs)(q.c, {
            children: [
                f ? (0, i.jsx)(X.A, { overlay: !0, hovered: C, selected: u }) : null,
                (0, i.jsx)(tD.A, {
                    text: _,
                    selected: u,
                    children: (0, i.jsx)(j.Q, {
                        selected: !0,
                        upperBadge: E,
                        lowerBadge: A,
                        lowerBadgeSize: h,
                        children: (0, i.jsx)(ty.D, {
                            innerRef: t,
                            onMouseEnter: () => {
                                (T?.(), O(!0));
                            },
                            onMouseLeave: () => {
                                (g?.(), O(!1));
                            },
                            onMouseDown: S,
                            className: s()(tb.oZ, I, { [tb.wH]: u || C }),
                            onClick: l,
                            "aria-label": R,
                            "aria-selected": u,
                            onContextMenu: o,
                            focusProps: { enabled: !1 },
                            ...N,
                            children: null != d && (0, i.jsx)(d, { className: tb.sF, color: "currentColor" }),
                        }),
                    }),
                }),
                m,
            ],
        });
    },
    tP = "DOWNLOAD_APPS";
function tM() {
    let e = (0, tR.useModalsStore)((e) => (0, tR.hasModalOpenSelector)(e, tP));
    return (0, i.jsx)(tv, {
        id: "app-download-button",
        onClick: () => {
            (0, tR.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 987482));
                    return (t) => (0, i.jsx)(e, { source: "Guilds", ...t });
                },
                { modalKey: tP },
            );
        },
        selected: e,
        tooltip: eL.intl.string(eL.t.Z7jwrJ),
        icon: tL.DownloadIcon,
    });
}
var tU = n(245604),
    tw = n(630685),
    tG = n(272613),
    tx = n(398884),
    tk = n(772366),
    tF = n(728321),
    tB = n(260509),
    tV = n(531053),
    tH = n(819638),
    tj = n(260727);
let tW = { origin: { x: -16, y: 0 }, targetWidth: 48, targetHeight: 48, offset: { x: 0, y: 0 } };
function tY(e) {
    (0, ti.L3)(e, async () => {
        let { default: e } = await n.e("117288").then(n.bind(n, 4571));
        return (t) => (0, i.jsx)(e, { ...t });
    });
}
function tK(e) {
    let { onClick: t, ...n } = e,
        r = (0, tw.P)("guild_list_add_server");
    return (0, i.jsx)(tv, { ...n, onClick: () => t(r), tooltip: eL.intl.string(r ? eL.t.riOUtB : eL.t.l5WIbf) });
}
function t$(e) {
    let { disableTooltip: t, lastTargetNode: n } = e,
        a = (0, _.yK)([eH.A], () => eH.A.getGuildsArray()),
        s = (0, _.bG)([eN.default], () => eN.default.getCurrentUser()),
        l = r.useMemo(() => a.some((e) => (0, tB.bM)(e, s)), [a, s]),
        o = (0, tR.useModalsStore)((e) => (0, tR.hasModalOpenSelector)(e, tH.fc)),
        { analyticsLocations: d } = (0, O.Ay)(),
        c = a.length >= eR.qlD && !(0, tx.Om)(s);
    function u(e) {
        (0, tx.Sn)()
            ? (0, tk.A)({
                  analyticsSource: { page: eR.ThZ.CREATE_JOIN_GUILD_MODAL },
                  analyticsLocation: { page: eR.ThZ.CREATE_JOIN_GUILD_MODAL, section: eR.JJy.GUILD_CAP_UPSELL_MODAL },
                  analyticsLocations: d,
              })
            : tG.A.openCreateGuildModal({ location: "Guild List", ...(e && { joinFirst: e }) });
    }
    let E = { showPill: !1, id: "create-join-button", selected: o, onContextMenu: tY, icon: tU.U };
    return (0, i.jsx)("div", {
        className: tj.Uq,
        children: (0, i.jsxs)(tF.A, {
            tutorialId: l ? "create-more-servers" : "create-first-server",
            inlineSpecs: tW,
            position: "right",
            disabled: t,
            children: [
                c
                    ? (0, i.jsx)(tv, { ...E, onClick: () => u(!1), tooltip: eL.intl.string(eL.t.l5WIbf) })
                    : (0, i.jsx)(tK, { ...E, onClick: u }),
                null != n &&
                    (0, i.jsx)(tV.Ay, {
                        name: eL.intl.string(eL.t["45xjM5"]),
                        targetNode: n,
                        below: !0,
                        noCombine: !0,
                    }),
            ],
        }),
    });
}
var tz = n(565787),
    tX = n(791606),
    tq = n(486020),
    tZ = n(183588);
function tQ(e) {
    let [t, a] = r.useState(!1),
        s = (0, c.Vd)(`guild-${e.id}`);
    return (0, i.jsx)(q.c, {
        children: (0, i.jsx)(tD.A, {
            text: e.name,
            children: (0, i.jsx)(j.Q, {
                className: tZ.o,
                selected: t,
                lowerBadge: (0, i.jsx)(tn.fk, { icon: (0, tz.k)(tX.A), disableColor: !0, className: tZ._ }),
                children: (0, i.jsx)(W.j, {
                    name: e.name,
                    onMouseEnter: function () {
                        a(!0);
                    },
                    onMouseLeave: function () {
                        a(!1);
                    },
                    onClick: function () {
                        (0, tR.openModalLazy)(async () => {
                            let { default: t } = await n.e("642945").then(n.bind(n, 537560));
                            return (n) => (0, i.jsx)(t, { name: e.name, guildId: e.id, ...n });
                        });
                    },
                    icon:
                        null != e.icon
                            ? tq.Ay.getGuildIconURL({ id: e.id, icon: e.icon, canAnimate: !1, size: 42 })
                            : null,
                    ...s,
                }),
            }),
        }),
    });
}
var tJ = n(696292),
    t0 = n(836480),
    t1 = n(533129),
    t2 = n(726845),
    t3 = n(837057),
    t5 = n(310419),
    t4 = n(488995),
    t6 = n(324580),
    t7 = n(190107);
let t8 = function (e) {
    let { selected: t, onClick: n, questId: a, className: s, ref: l } = e,
        o = r.useCallback(() => {
            (0, t1.WL)({ source: t4.GlobalDiscoveryAnalyticsLocations.GUILDS_BAR_ICON });
            let e = void 0 !== a ? t4.GlobalDiscoveryTab.QUESTS : t2.A.getField("selectedTab");
            switch (e) {
                case t4.GlobalDiscoveryTab.QUESTS:
                    return (0, t3.transitionToGlobalDiscovery)({
                        tab: t4.GlobalDiscoveryTab.QUESTS,
                        location: t7.rE.DISCOVERY_COMPASS,
                        questContent: tJ.u.DISCOVERY_COMPASS,
                        questId: a,
                    });
                case t4.GlobalDiscoveryTab.SERVERS:
                    return (0, t3.transitionToGlobalDiscovery)({
                        tab: t4.GlobalDiscoveryTab.SERVERS,
                        entrypoint: t6.J8.GUILDS_BAR,
                    });
                case t4.GlobalDiscoveryTab.APPS:
                    return (0, t3.transitionToGlobalDiscovery)({
                        tab: t4.GlobalDiscoveryTab.APPS,
                        newSessionState: {
                            entrypoint: { name: t5.sW.GLOBAL_DISCOVERY_BUTTON },
                            restorePreviousView: !0,
                        },
                    });
                default:
                    return (0, t3.transitionToGlobalDiscovery)({ tab: e });
            }
        }, [a]);
    return (0, i.jsx)(tv, {
        id: "guild-discover-button",
        ref: l,
        className: s,
        onClick: () => {
            (o(), void 0 !== n && n());
        },
        selected: t,
        tooltip: eL.intl.string(eL.t["4nEZLk"]),
        icon: t0.CompassIcon,
    });
};
var t9 = n(506774),
    ne = n(509963),
    nt = n(111159),
    nn = n(793943),
    ni = n(24482),
    nr = n(350972),
    na = n(677056),
    ns = n(526162),
    nl = n(174197);
function no() {
    let [e, t] = (0, _.yK)([eN.default, ns.A], () => [
            ns.A.getCurrentDesktopIcon(),
            ni.Ay.isPremium(eN.default.getCurrentUser()),
        ]),
        n = (0, nn.fy)().activePanel === nn.HP.APP_ICON,
        r = (0, nl.gG)(e),
        a = r.id !== nr.LW.DEFAULT && (t || n),
        s = (0, i.jsx)(nt.p, { size: "custom", color: "currentColor", width: 24, height: 24 });
    return null != r && a ? (0, i.jsx)(na.A, { id: r.id, size: nl.N8.SIZE_48 }) : s;
}
var nd = n(531260),
    nc = n(411976),
    nu = n(912309),
    n_ = n(400492),
    nE = n(354670),
    nA = n(619921),
    nh = n(340829),
    nf = n(966846),
    nI = n(674378),
    np = n(394953),
    nm = n(202541),
    nT = n(235079),
    ng = n(222219);
let nS = { origin: { x: -16, y: 0 }, targetWidth: 48, targetHeight: 48, offset: { x: 0, y: 0 } };
function nN(e) {
    let { selected: t, user: n, badge: a, link: s, showProgressBadge: l } = e,
        [o, d] = r.useState(!1),
        [u, _] = r.useState(!1),
        [E, A] = r.useState(null),
        [h, f] = r.useState(0),
        I = (0, c.Vd)("home"),
        p = (0, nn.fy)().activePanel === nn.HP.APP_ICON;
    function m() {
        (A(null), f(0), clearTimeout(E));
    }
    if (null == n) return null;
    let T = eL.intl.string(eL.t.YUU0RF);
    u && (T = t9.w.get(eR.wqg) ? eL.intl.string(eL.t["nkq1l+"]) : eL.intl.string(eL.t.Be8Q5E));
    let g = null;
    !t && l && (g = (0, i.jsx)(ne.A, { className: ng.Cp, determineOwnVisibility: !1 }));
    let S = t || o || p,
        N = (0, i.jsx)(j.Q, {
            selected: !0,
            lowerBadge: a > 0 ? (0, Z.wN)(a) : null,
            upperBadge: g,
            lowerBadgeSize: { width: (0, tn.o6)(a) },
            children: (0, i.jsx)(W.j, {
                onMouseEnter: () => d(!0),
                onMouseLeave: () => d(!1),
                onClick: function () {
                    if (!__OVERLAY__ && (null != E && clearTimeout(E), A(setTimeout(m, 500)), f(h + 1), 15 === h)) {
                        m();
                        let e = !t9.w.get(eR.wqg);
                        (t9.w.set(eR.wqg, e),
                            e && t9.w.set(nT.L, !0),
                            e ? (0, n_.Ak)("discodo") : (0, n_.Ak)("user_leave"),
                            _(!0),
                            setTimeout(() => {
                                _(!1);
                            }, 1e3));
                    }
                },
                selected: S,
                ariaLabel: eL.intl.string(eL.t.YUU0RF),
                "aria-owns": "guild-list-unread-dms",
                "aria-selected": t,
                ...I,
                to: {
                    pathname: s,
                    state: {
                        analyticsSource: {
                            page: eR.liQ.GUILD_CHANNEL,
                            section: eR.JJy.NAVIGATION,
                            object: eR.ZSU.BUTTON_HOME,
                        },
                    },
                },
                children: (0, i.jsx)(no, {}),
            }),
        });
    return (0, i.jsx)("div", {
        className: ng.Uq,
        "data-guilds-bar-home": !0,
        children: (0, i.jsx)(tF.A, {
            inlineSpecs: nS,
            tutorialId: "friends-list",
            position: "right",
            children: (0, i.jsxs)(q.c, {
                children: [
                    (0, i.jsx)(X.A, { overlay: !0, selected: t, hovered: o }),
                    (0, i.jsx)(tD.A, { hideOnClick: !0, text: T, selected: t, children: N }),
                ],
            }),
        }),
    });
}
function nC() {
    let e = (function () {
            let e = (0, Q.A)((e) => e.guildId),
                { pathname: t } = (0, d.zy)(),
                n = t.startsWith(eR.BVt.GUILD_DISCOVERY) || t.startsWith(eR.BVt.GLOBAL_DISCOVERY),
                i = t.startsWith(eR.BVt.GUILD_MEMBER_VERIFICATION("")),
                r = (0, np.lI)(),
                a = t.startsWith(eR.BVt.CONJURE);
            return null == e && !(n || i || r || a);
        })(),
        t = (0, _.bG)([nf.A, nh.A], () => {
            let e = (0, ne.v)(nf.A.activeItems, nh.A),
                { total: t, progress: n } = nI.zY(e),
                i = nI.uA(n, t);
            return i > 0 && i < 100;
        }),
        n = (0, nu.kX)(),
        r = Object.keys(nm.kb),
        a = (0, nd.A)(),
        { unviewedTrialCount: s, unviewedDiscountCount: l } = (0, _.cf)([nE.A], () => ({
            unviewedTrialCount: nE.A.getUnacknowledgedOffers(r).length,
            unviewedDiscountCount: nE.A.getUnacknowledgedDiscountOffers().length,
        })),
        o = a.fractionalState === nm.xc.NONE ? s + l : 0,
        c = (0, _.bG)([eN.default], () => eN.default.getCurrentUser()),
        u = (0, nc.W)(),
        E = n + o + u,
        A = E === o && o > 0 && n + u === 0,
        h = nA.A.getHomeLink();
    return (
        A && (h = eR.BVt.APPLICATION_STORE),
        (0, i.jsx)(nN, {
            selected: e,
            user: c,
            selectedChannelId: et.Ay.getChannelId(eR.ME),
            badge: E,
            link: h,
            showProgressBadge: t,
        })
    );
}
var nO = n(545328);
function nR(e) {
    let { fullWidth: t } = e;
    return (0, i.jsx)(q.c, { children: (0, i.jsx)("div", { className: s()(nO.t, { [nO.I]: t }) }) });
}
var nL = n(28863),
    ny = n(695366),
    nD = n(919638),
    nb = n(818348),
    nv = n(837669);
function nP() {
    let e = (0, _.bG)([nD.A, eH.A], () => nD.A.unavailableGuilds.filter((e) => null == eH.A.getGuild(e)).length),
        t = (0, c.Vd)("unavailable-guilds-button");
    return e <= 0
        ? null
        : (0, i.jsx)(q.c, {
              children: (0, i.jsx)(tD.A, {
                  text: eL.intl.format(eL.t["TnH05/"], { count: e }),
                  children: (0, i.jsx)(nL.Anchor, {
                      href: nb.qF.STATUS,
                      target: "_blank",
                      className: nv.h,
                      "aria-label": eL.intl.formatToPlainString(eL.t["MEpX+2"], { count: e }),
                      ...t,
                      children: (0, i.jsx)(ny.E, { color: "currentColor", "aria-hidden": !0 }),
                  }),
              }),
          });
}
var nM = n(66834),
    nU = n(945810),
    nw = n(404373),
    nG = n(738601),
    nx = n(313537);
let nk = [...nG.Nl, eu.Ay];
function nF(e) {
    return (0, _.yK)(
        [P.Ay, nU.Bt],
        () =>
            e.flatMap((e) => {
                let t = (0, nx.cR)(e);
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
                    let e = (0, nG.AK)(i);
                    n ||= "working" === e;
                    let r = (0, nx.fL)(P.Ay.getProject(i));
                    null == r || eu.Ay.isMuted(r) || ("unread" === e && (t += Math.max(1, (0, nw.xp)(i))));
                }
                return { unreadCount: t, working: n };
            })(e),
        [e],
    );
}
var nV = n(36412),
    nH = n(299874),
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
        h,
        { folderNode: f, ...I } = e,
        { id: p, name: m, color: T, children: g } = f,
        S = r.useMemo(() => g.map((e) => e.id), [g]),
        N = (0, Q.A)((e) => e.guildId),
        C = (0, _.bG)([eX.A], () => eX.A.isFolderExpanded(p)),
        O = (0, nV.y)(f),
        R =
            ((t = (0, _.bG)([te.A], () => te.A.getGuildId())),
            (a = f.children.map((e) => e.id)),
            (s = null != t && a.includes(t)),
            (l = !1),
            (o = !1),
            (d = !1),
            (c = (0, _.bG)([te.A], () => te.A.getChannelId())),
            (E = null != (u = (0, nj.A)()?.guild_id) && a.includes(u)),
            (A = (0, _.bG)([en.A], () => null != c && en.A.hasVideo(c), [c])),
            (h = (0, _.bG)([J.A], () => J.A.getCurrentUserActiveStream())),
            s && ((l = !A), (o = A), (d = null != h && null != h.guildId && a.includes(h.guildId))),
            r.useMemo(
                () => ({ audio: l, video: o, screenshare: d, liveStage: E, isCurrentUserConnected: s }),
                [l, o, d, E, s],
            )),
        {
            mentionCount: L,
            isMentionLowImportance: y,
            unread: D,
        } = (0, _.cf)([eo.default], () => ({
            mentionCount: S.map((e) => eo.default.getMentionCount(e)).reduce((e, t) => e + t, 0),
            isMentionLowImportance: S.every((e) => eo.default.getIsMentionLowImportance(e)),
            unread: S.some((e) => eo.default.hasUnread(e)),
        })),
        b = nB(nF(S)).unreadCount,
        v = L + b,
        P = r.useCallback(() => {
            nM.A.toggleGuildFolderExpand(p);
        }, [p]),
        M = r.useCallback(
            (e) => {
                (0, ti.L3)(e, async () => {
                    let { default: e } = await Promise.all([n.e("114748"), n.e("906240")]).then(n.bind(n, 595139));
                    return (t) =>
                        (0, i.jsx)(e, { ...t, folderId: p, folderName: m, folderColor: T, unread: D || v > 0 });
                });
            },
            [p, m, T, D, v],
        );
    return (0, i.jsx)(nH.A, {
        ...I,
        folderNode: f,
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
    nz = n(212455);
function nX(e) {
    let t = e?.features.has(eR.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL),
        n = (0, _.bG)(
            [nz.A, eN.default, eV.Ay],
            () => {
                if (null == e) return;
                let t = nz.A.getRequest(e.id),
                    n = eN.default.getCurrentUser();
                if (null == n || null == t || t.userId !== n.id) return;
                let i = eV.Ay.getMember(e.id, t.userId);
                if (!(null != i && !i.isPending) || (0, n$.Oe)(t)) return t.applicationStatus;
            },
            [e],
        );
    return t ? n : void 0;
}
var nq = n(347951),
    nZ = n(34162);
function nQ(e) {
    return (0, _.bG)([nZ.A], () => nZ.A.getGuildMediaState(e), [e]);
}
var nJ = n(739822),
    n0 = n(607399),
    n1 = n(702841),
    n2 = n(817281),
    n3 = n(876740),
    n5 = n(345942),
    n4 = n(676279),
    n6 = n(866323),
    n7 = n(548118),
    n8 = n(327580);
function n9(e) {
    let { guild: t, show: n, active: r, onAnimationStart: a, onAnimationRest: l } = e,
        o = {},
        d = {};
    ((o.transform = "translate3d(10px, 10px, 0) scale3d(3, 3, 1)"),
        (d.transform = "translate3d(0, 0, 0) scale3d(1, 1, 1)"));
    let c = (0, p.r)(h.A.unsafe_rawColors.BRAND_500).hex(),
        u = (0, p.r)(h.A.unsafe_rawColors.PRIMARY_630).hex();
    r && null == t.icon && ((o.backgroundColor = c), (d.backgroundColor = u));
    let _ = (0, n6.p)(n, { from: o, enter: d, leave: o, config: { duration: 100 }, onStart: a, onRest: l });
    return (0, i.jsx)(i.Fragment, {
        children: _(
            (e, n, r) =>
                n &&
                (0, i.jsx)(
                    "div",
                    {
                        className: n8.qc,
                        children: (0, i.jsx)("div", {
                            className: s()(n8.MJ, n8.L0),
                            style: { margin: 0 },
                            children: (0, i.jsx)(w.animated.div, {
                                className: n8.NG,
                                style: e,
                                children: (0, i.jsx)("div", {
                                    className: n8.qJ,
                                    children: (0, i.jsx)("div", {
                                        className: n8.jg,
                                        children: (0, i.jsx)(n7.Ay, {
                                            guild: t,
                                            size: n7.Ay.Sizes.SMOL,
                                            className: n8.VL,
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
    ii = n(107773),
    ir = n(513461),
    ia = n(164956),
    is = n(624265),
    il = n(970278),
    io = n(808728);
let id = (0, nU.mj)({
    name: "2026-09-server-tooltip-notification-context",
    kind: "user",
    defaultConfig: { mode: "disabled" },
    variations: { 0: { mode: "disabled" }, 1: { mode: "latest" }, 2: { mode: "mentions_first" } },
});
function ic(e) {
    let { guildId: t, mode: n } = e,
        { channel: r, hasMention: a } = (0, _.cf)(
            [eu.Ay, ee.A, es.A, ec.Ay, eo.default],
            () => {
                if (eu.Ay.isMuted(t)) return { channel: null, hasMention: !1 };
                let e = { latest: null, latestMention: null };
                function i(t) {
                    if (!ec.Ay.hasUnreadOrMentions(t.id)) return;
                    let n = ec.Ay.getMentionCount(t.id);
                    if (!eo.default.shouldCountChannelUnread(t, n)) return;
                    let i = ec.Ay.lastMessageId(t.id);
                    if (null == i) return;
                    let r = { channel: t, hasMention: n > 0, lastMessageId: i };
                    ((null == e.latest || ei.default.compare(i, e.latest.lastMessageId) > 0) && (e.latest = r),
                        r.hasMention &&
                            (null == e.latestMention || ei.default.compare(i, e.latestMention.lastMessageId) > 0) &&
                            (e.latestMention = r));
                }
                let r = ee.A.getMutableGuildChannelsForGuild(t);
                for (let e in r) i(r[e]);
                let a = es.A.getActiveJoinedThreadsForGuild(t);
                for (let e in a)
                    for (let t in a[e]) {
                        let e = ee.A.getChannel(t);
                        null != e && i(e);
                    }
                let s = "mentions_first" === n ? (e.latestMention ?? e.latest) : e.latest;
                return { channel: s?.channel ?? null, hasMention: s?.hasMention ?? !1 };
            },
            [t, n],
        ),
        s = (0, ts.Ay)(r);
    return null == r || null == s || 0 === s.length
        ? null
        : (0, i.jsx)(eh.E, {
              className: ey.T5,
              color: "text-muted",
              variant: "body-xs/normal",
              lineClamp: 1,
              children: eL.intl.formatToPlainString(a ? eL.t.HwW3zP : eL.t.FwKQxx, { channelName: s }),
          });
}
function iu(e, t, n) {
    return 0 === t.length
        ? null
        : (0, i.jsxs)("div", {
              className: ey.nM,
              children: [
                  (0, i.jsx)(e, { className: ey.RI, color: "currentColor" }),
                  (0, i.jsx)(eT.Ay, { guildId: n, users: t, max: 6 }),
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
              children: eL.intl.string(eL.t.fpKdS1),
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
        h,
        f,
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
            [io.Ay, il.A, eu.Ay],
            () => [
                ...io.Ay.getChannels(t)
                    [io.vM].filter((e) => {
                        let { channel: n } = e;
                        return n.type === eR.rbe.GUILD_VOICE && !eu.Ay.isChannelMuted(t, n.id);
                    })
                    .map((e) => {
                        let { channel: t } = e;
                        return t.id;
                    }),
                ...Object.values(il.A.getThreadsForGuild(t)).flatMap((e) => Object.keys(e)),
            ],
            [t],
        )),
        (a = (0, is.Ay)(t)),
        (l = r.useMemo(() => a.map((e) => e.id), [a])),
        (d = (0, _.bG)([eC.Ay], () => eC.Ay.getVoiceStates(t), [t])),
        (c = (0, _.bG)([tA.A], () => tA.A.getBlockedOrIgnoredIDs())),
        (u = o().flatMap(n, (e) => {
            if (e === R.afkChannelId) return [];
            let t = (d[e] ?? []).map((e) => {
                let { user: t } = e;
                return t;
            });
            return (0, tu.aw)(t, c);
        })),
        (E = (0, _.yK)([eg.A], () =>
            o().flatMap(l, (e) => {
                if (e === R.afkChannelId) return [];
                let t = eg.A.getMutableParticipants(e, eS.ip.SPEAKER)
                    .filter((e) => e.type === eS.wY.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    });
                return (0, tu.aw)(t, c);
            }),
        )),
        (A = (0, _.bG)([eg.A], () => {
            let e = 0;
            for (let t of l) e += eg.A.getParticipantCount(t, eS.ip.AUDIENCE);
            return e;
        })),
        (h = (0, _.yK)(
            [J.A, eu.Ay],
            () => {
                let e = J.A.getAllApplicationStreams()
                    .filter((e) => e.guildId === t && !eu.Ay.isChannelMuted(t, e.channelId))
                    .map((e) => e.ownerId);
                return (0, tu.F7)(e, c);
            },
            [c, t],
        )),
        (f = (0, _.yK)(
            [$.Ay, ee.A],
            () => {
                let e = $.Ay.getEmbeddedActivitiesForGuild(t)
                    .filter((e) => {
                        let t = ee.A.getBasicChannel((0, z.H)(e.location));
                        return t?.type !== eR.rbe.GUILD_SPACE;
                    })
                    .flatMap((e) => Array.from(e.userIds));
                return (0, tu.F7)(e, c);
            },
            [t, c],
        )),
        (I = (0, _.yK)(
            [eN.default],
            () => {
                let e = f.map((e) => eN.default.getUser(e));
                return (0, tu.aw)(e);
            },
            [f],
        )),
        (p = (0, _.yK)([eN.default], () => h.map((e) => eN.default.getUser(e)), [h])),
        (m = u.filter((e) => !h.includes(e.id) && !f.includes(e.id))),
        (T = (0, tu.aw)(m)),
        (g = p.filter((e) => null != e && !f.includes(e.id))),
        (S = (0, _.bG)([t_.A], () => t_.A.getUserAffinitiesMap(), [])),
        (N = r.useMemo(() => (0, tE.L)(T, S, "GuildTooltip - nonBlockedUsers"), [T, S])),
        (C = r.useMemo(() => (0, tE.L)(E, S, "GuildTooltip - stageSpeakers"), [E, S])),
        (O = r.useMemo(() => (0, tE.L)(g, S, "GuildTooltip - streamUsers"), [g, S])),
        {
            voiceUsersToShow: N,
            stageSpeakers: C,
            numStageListeners: A,
            streamUsersToShow: O,
            embeddedActivitiesUsers: r.useMemo(() => (0, tE.L)(I, S, "GuildTooltip - embeddedActivitiesUsers"), [I, S]),
            hasActivity: E.length > 0 || m.length > 0 || g.length > 0 || I.length > 0,
        }),
        M = iu(ef.H, y, L),
        U =
            0 === D.length
                ? null
                : (0, i.jsxs)("div", {
                      className: ey.nM,
                      children: [
                          (0, i.jsx)(eE.q, { size: "lg", color: "currentColor", className: ey.RI }),
                          (0, i.jsx)(eT.Ay, { guildId: L, users: D, max: 3 }),
                          (0, i.jsxs)("div", {
                              className: ey.GZ,
                              children: [
                                  (0, i.jsx)(eA.L, { size: "xs", color: "currentColor" }),
                                  (0, i.jsx)(eh.E, {
                                      className: ey._I,
                                      color: "text-default",
                                      variant: "body-xs/normal",
                                      children: b,
                                  }),
                              ],
                          }),
                      ],
                  }),
        w = iu(eI.F, v, L),
        G = iu(ep.k, P, L),
        { isMuted: x, muteConfig: k } = (0, _.cf)(
            [eu.Ay],
            () => ({ isMuted: eu.Ay.isMuted(L), muteConfig: eu.Ay.getMuteConfig(L) }),
            [L],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            U,
            M,
            w,
            G,
            x ? (0, i.jsx)(i_, { muteConfig: k, className: s()(ey.LM, { [ey.Sx]: null != M || null != w }) }) : null,
        ],
    });
}
function iA(e) {
    let { guildJoinRequestStatus: t } = e;
    return (0, i.jsx)(eh.E, {
        className: ey.BT,
        color: "text-default",
        variant: "body-xs/normal",
        children: (function (e) {
            switch (e) {
                case ir.B5.SUBMITTED:
                    return eL.intl.string(eL.t["9KFC98"]);
                case ir.B5.REJECTED:
                    return eL.intl.string(eL.t["TQY/Rd"]);
                case ir.B5.APPROVED:
                    return eL.intl.string(eL.t.WXHcq5);
                default:
                    return eL.intl.string(eL.t.fjHFC8);
            }
        })(t),
    });
}
function ih(e) {
    let { guild: t, isTooltipShown: n, shouldShowNotificationContext: r } = e,
        a = (0, ie.A)(t),
        l = nX(t),
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
                className: s()(ey.nM, ey.Dl),
                children: [
                    a
                        ? (0, i.jsx)(ii.A, { disableBoostClick: !0, guild: t, className: ey.WX })
                        : (0, i.jsx)(it.A, { guild: t, size: 20, className: ey.aL }),
                    (0, i.jsx)("span", { className: s()(ey.cN, ey.NT), children: t.name }),
                ],
            }),
            "disabled" !== E ? (0, i.jsx)(ic, { guildId: t.id, mode: E }) : null,
            u
                ? (0, i.jsx)(eh.E, {
                      className: ey.Ef,
                      color: "text-default",
                      variant: "body-sm/medium",
                      children: eL.intl.string(eL.t["2n0/Fk"]),
                  })
                : null,
            c
                ? (0, i.jsx)(eh.E, {
                      className: ey.BT,
                      color: "text-default",
                      variant: "body-xs/normal",
                      children: eL.intl.string(eL.t["5LwN89"]),
                  })
                : (o ?? d),
        ],
    });
}
function iI(e) {
    let { guild: t, shouldShowNotificationContext: n = !1, disabled: a = !1, children: s } = e,
        { isOpen: l, shouldRenderRichContent: o, handleTooltipShow: d, handleTooltipHide: c } = tI("GuildTooltip"),
        u = r.useMemo(
            () =>
                a
                    ? null
                    : (0, i.jsx)(eh.E, {
                          variant: "body-md/semibold",
                          color: "text-default",
                          className: ey.A_,
                          children: o
                              ? (0, i.jsx)(ih, { guild: t, isTooltipShown: l, shouldShowNotificationContext: n })
                              : t.name,
                      }),
            [a, t, l, o, n],
        );
    return (0, i.jsx)(em.m, {
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
    im = n(809526),
    iT = n(937067);
let ig = { analyticsSource: { page: eR.liQ.GUILD_CHANNEL, section: eR.JJy.CHANNEL_LIST, object: eR.ZSU.CHANNEL } };
function iS(e, t) {
    (0, ti.L3)(e, async () => {
        let { default: e } = await Promise.all([
            n.e("203112"),
            n.e("876364"),
            n.e("321735"),
            n.e("135144"),
            n.e("996907"),
            n.e("816027"),
            n.e("562772"),
            n.e("8159"),
            n.e("24312"),
            n.e("361922"),
            n.e("179028"),
            n.e("403032"),
            n.e("231541"),
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
            n.e("317446"),
            n.e("71866"),
            n.e("891473"),
            n.e("101105"),
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
            n.e("860596"),
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
            n.e("699250"),
            n.e("528311"),
            n.e("411938"),
            n.e("653383"),
            n.e("217991"),
            n.e("9796"),
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
            n.e("384054"),
            n.e("267387"),
            n.e("816348"),
            n.e("165291"),
            n.e("109383"),
            n.e("818291"),
            n.e("243794"),
            n.e("519435"),
            n.e("10985"),
            n.e("171206"),
            n.e("546547"),
            n.e("102075"),
            n.e("828178"),
            n.e("45036"),
            n.e("974119"),
            n.e("434683"),
            n.e("572388"),
            n.e("505928"),
            n.e("752657"),
            n.e("747973"),
            n.e("314001"),
            n.e("885251"),
            n.e("857871"),
            n.e("529366"),
            n.e("990185"),
            n.e("752924"),
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
            n.e("243852"),
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
            n.e("341432"),
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
            n.e("603977"),
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
            n.e("905581"),
            n.e("62052"),
            n.e("122218"),
            n.e("834552"),
            n.e("993103"),
            n.e("863232"),
            n.e("708757"),
            n.e("517888"),
            n.e("332447"),
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
            n.e("513"),
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
            n.e("544571"),
            n.e("692990"),
            n.e("714496"),
            n.e("362931"),
            n.e("393336"),
            n.e("745959"),
            n.e("858529"),
            n.e("481987"),
            n.e("595653"),
            n.e("958038"),
            n.e("532039"),
            n.e("719466"),
            n.e("468269"),
            n.e("576909"),
            n.e("830228"),
            n.e("27355"),
            n.e("953665"),
            n.e("406174"),
            n.e("481647"),
            n.e("776273"),
            n.e("776602"),
            n.e("704434"),
            n.e("140402"),
            n.e("391763"),
            n.e("492762"),
            n.e("28102"),
            n.e("497516"),
            n.e("393766"),
            n.e("21921"),
            n.e("844780"),
            n.e("811310"),
            n.e("571210"),
            n.e("572963"),
            n.e("676418"),
            n.e("70833"),
            n.e("897073"),
            n.e("770291"),
            n.e("166495"),
            n.e("521930"),
            n.e("307575"),
            n.e("88342"),
            n.e("187110"),
            n.e("570849"),
            n.e("854461"),
            n.e("942724"),
            n.e("139970"),
            n.e("173764"),
            n.e("940258"),
            n.e("858164"),
            n.e("25949"),
            n.e("308555"),
            n.e("323624"),
            n.e("427032"),
            n.e("554241"),
            n.e("311802"),
            n.e("724303"),
            n.e("292583"),
            n.e("53102"),
            n.e("586127"),
            n.e("470068"),
            n.e("179049"),
            n.e("132737"),
            n.e("146070"),
            n.e("344502"),
            n.e("88599"),
            n.e("836863"),
            n.e("203589"),
            n.e("854622"),
            n.e("95340"),
            n.e("807936"),
            n.e("590365"),
            n.e("989088"),
            n.e("37977"),
            n.e("136149"),
            n.e("354044"),
            n.e("817989"),
            n.e("437065"),
            n.e("720590"),
            n.e("709640"),
            n.e("147626"),
            n.e("613867"),
            n.e("952548"),
            n.e("792899"),
            n.e("636373"),
            n.e("169842"),
            n.e("294857"),
            n.e("726033"),
            n.e("480830"),
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
            n.e("212055"),
            n.e("163235"),
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
            n.e("756231"),
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
            n.e("775951"),
            n.e("818465"),
            n.e("773534"),
            n.e("649362"),
            n.e("971430"),
            n.e("722460"),
            n.e("340065"),
            n.e("976516"),
            n.e("400501"),
            n.e("985794"),
            n.e("732194"),
            n.e("767837"),
            n.e("473384"),
            n.e("432209"),
            n.e("920305"),
            n.e("368062"),
            n.e("859991"),
            n.e("556868"),
            n.e("386317"),
            n.e("709371"),
            n.e("599719"),
            n.e("764180"),
            n.e("218203"),
            n.e("136204"),
            n.e("726511"),
            n.e("868214"),
            n.e("939171"),
            n.e("987478"),
            n.e("661814"),
            n.e("96680"),
            n.e("140667"),
            n.e("916758"),
            n.e("713567"),
            n.e("612287"),
            n.e("588070"),
            n.e("460773"),
            n.e("793438"),
            n.e("208018"),
            n.e("589916"),
            n.e("305557"),
            n.e("36227"),
            n.e("104202"),
            n.e("850488"),
            n.e("444567"),
            n.e("229666"),
            n.e("92295"),
            n.e("356664"),
            n.e("695170"),
            n.e("449145"),
            n.e("309004"),
            n.e("338619"),
            n.e("848625"),
            n.e("458273"),
            n.e("606949"),
            n.e("968763"),
            n.e("278045"),
            n.e("883952"),
            n.e("26001"),
            n.e("159957"),
            n.e("242682"),
            n.e("540715"),
            n.e("174192"),
            n.e("414591"),
            n.e("652111"),
            n.e("258709"),
            n.e("434786"),
            n.e("506045"),
            n.e("147540"),
            n.e("294607"),
            n.e("618706"),
            n.e("430997"),
            n.e("982730"),
            n.e("708536"),
            n.e("411353"),
            n.e("49716"),
            n.e("203930"),
            n.e("439089"),
            n.e("800872"),
            n.e("903663"),
            n.e("452531"),
            n.e("201243"),
            n.e("215920"),
            n.e("573330"),
            n.e("812497"),
            n.e("728136"),
            n.e("65393"),
            n.e("338601"),
            n.e("343116"),
            n.e("368530"),
            n.e("275859"),
            n.e("978046"),
            n.e("216084"),
            n.e("66580"),
            n.e("387634"),
            n.e("127659"),
            n.e("507775"),
            n.e("428235"),
            n.e("610943"),
            n.e("283230"),
            n.e("582486"),
            n.e("273669"),
            n.e("745493"),
            n.e("284819"),
            n.e("414535"),
            n.e("760989"),
            n.e("466147"),
            n.e("161058"),
            n.e("50342"),
            n.e("369501"),
            n.e("303710"),
            n.e("256373"),
            n.e("134504"),
            n.e("409391"),
            n.e("645830"),
            n.e("479971"),
            n.e("810262"),
            n.e("351156"),
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
            n.e("649019"),
            n.e("852694"),
            n.e("921946"),
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
            mediaState: f,
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
        P = e.upperBadge ?? (0, Z.hP)({ unavailable: I, conjureWorking: L, mediaState: f }),
        M = e.lowerBadge ?? void 0;
    null == M && m > 0
        ? (M =
              (0, Z.wN)(
                  m,
                  T ? h.A.colors.BACKGROUND_MOD_STRONG.css : h.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
              ) ?? void 0)
        : null == M && null != O && (M = (0, Z.eW)({ guildJoinRequestStatus: O }) ?? void 0);
    let U = e.lowerBadgeSize ?? { width: (0, tn.o6)(m) },
        [{ dragging: G }, x] = (0, nJ.i)({
            type: eK.PJ.GUILD,
            item: () => (
                requestAnimationFrame(() => {
                    a?.();
                }),
                { type: t.type, nodeId: t.id }
            ),
            end() {
                (l?.(), (0, n2.um)(ej.Ay.getCompatibleGuildFolders()));
            },
            collect: (e) => ({ dragging: e.isDragging() }),
        }),
        k = (0, c.Vd)(b ?? eR.dJq, null != v ? 2 : 1),
        [F, B] = r.useState(!1),
        V = !N && F,
        [H, Y] = r.useState(!1),
        [$, z] = r.useState(!1),
        [Q] = r.useState(() => new A.J_(70, () => z(!0))),
        J = (0, n4.nr)() && !n0.Fr;
    r.useEffect(() => () => Q.cancel(), [Q]);
    let ee = r.useCallback(() => {
            null != o ? (0, to.pX)(o, { state: ig }) : (0, n5.u)(b, { state: ig });
        }, [b, o]),
        et = r.useCallback(() => {
            if (null != o || null == d || I || !C) return;
            let [e] = (0, n3.q)(d.id);
            null != e && K.A.preload(d.id, e);
        }, [o, d, I, C]),
        en = (0, n1.bG)([eV.Ay], () => eV.Ay.isCurrentUserGuest(b)),
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
                e ? Q.delay() : (Q.cancel(), z(!1));
            },
            [Q],
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
        ed = (0, p.r)(h.A.modules.guildbar.AVATAR_SIZE);
    if (null == d) return null;
    let ec = d.name;
    if (
        (m > 0
            ? (ec = eL.intl.formatToPlainString(eL.t["/uzRss"], { guildName: d.name, mentions: m }))
            : E && (ec = eL.intl.formatToPlainString(eL.t.lzqe42, { guildName: d.name })),
        null != f)
    ) {
        let e = [];
        (f.activeEvent && e.push(eL.intl.string(eL.t.dHvJ2p)),
            f.liveStage && e.push(eL.intl.string(eL.t.OO7ndG)),
            f.screenshare && e.push(eL.intl.string(eL.t.wsHMZ7)),
            f.video && e.push(eL.intl.string(eL.t.BrLCS0)),
            f.audio && e.push(eL.intl.string(eL.t.jPBhKy)),
            f.activity && e.push(eL.intl.string(eL.t.Y3Gii5)),
            e.length > 0 && (ec = `${ec}, ${e.join(" ")}`));
    }
    L && (ec = `${ec}, ${eL.intl.string(im.default["Y8pS+n"])}`);
    let eu = (0, i.jsx)(n9, {
            guild: d,
            show: $,
            active: _,
            onAnimationStart: function () {
                Y($);
            },
            onAnimationRest: function () {
                $ || Y(!1);
            },
        }),
        e_ = J
            ? (0, i.jsx)(W.j, {
                  ariaLabel: ec,
                  name: d.name,
                  onClick: ee,
                  onMouseEnter: es,
                  onMouseLeave: el,
                  onMouseDown: et,
                  onContextMenu: ei,
                  onKeyDown: er,
                  icon: (0, tB.Iv)(d, 2 * ed, V && u, !0),
                  selected: _ || V,
                  ...k,
                  "aria-setsize": y,
                  "aria-posinset": D,
                  "aria-selected": _,
              })
            : (0, i.jsx)(j.Q, {
                  selected: _,
                  children: (0, i.jsx)("div", {
                      ref: S
                          ? (e) => {
                                x(e);
                            }
                          : void 0,
                      "data-dnd-name": d.name,
                      "data-drop-hovering": $,
                      children: (0, i.jsx)(W.j, {
                          ariaLabel: ec,
                          name: d.name,
                          onClick: ee,
                          onMouseEnter: es,
                          onMouseLeave: el,
                          onMouseDown: et,
                          onContextMenu: ei,
                          onKeyDown: er,
                          icon: (0, tB.Iv)(d, 2 * ed, V && u, !0),
                          selected: _ || V,
                          ...k,
                          "aria-setsize": y,
                          "aria-posinset": D,
                          "aria-selected": _,
                      }),
                  }),
              }),
        eE = $ || H ? eu : e_,
        eA = (0, i.jsx)(tV.g4, { children: (0, i.jsx)(ip.A, {}) }),
        eh = J
            ? (0, i.jsx)(w.animated.div, {
                  ref: S
                      ? (e) => {
                            x(e);
                        }
                      : void 0,
                  "data-dnd-name": d.name,
                  style: { scale: null == R ? 1 : R },
                  "data-drop-hovering": $,
                  className: s()(iT.rN, { [iT.p9]: N, [iT.oR]: $, [iT.wH]: $ || _ }),
                  children: (0, i.jsx)(j.Q, {
                      selected: !0,
                      upperBadge: P,
                      lowerBadge: M,
                      lowerBadgeSize: U,
                      children: eE,
                  }),
              })
            : (0, i.jsx)(w.animated.div, {
                  style: { scale: null == R ? 1 : R },
                  className: s()(iT.rN, { [iT.p9]: N, [iT.oR]: $, [iT.wH]: $ || _ }),
                  "data-drop-hovering": $,
                  children: (0, i.jsx)(j.Q, {
                      selected: _,
                      maskShape: $ || H,
                      upperBadge: P,
                      lowerBadge: M,
                      lowerBadgeSize: U,
                      children: eE,
                  }),
              });
    return (0, i.jsxs)(q.c, {
        ref: eo,
        children: [
            (0, i.jsx)(X.A, { overlay: !0, hovered: !G && V, selected: !G && _, unread: !G && E }),
            (0, i.jsx)(iI, {
                guild: d,
                disabled: N,
                isDragging: G,
                shouldShowNotificationContext: !I && (E || m > 0),
                children: G ? eA : eh,
            }),
            S ? (0, i.jsx)(tV.Ay, { name: d.name, targetNode: t, onDragOverChanged: ea }) : null,
        ],
    });
});
var iC = n(64061);
let iO = r.memo(function (e) {
    let { guildNode: t, lowerBadge: n } = e,
        a = t.id,
        s = (0, _.bG)([eH.A], () => eH.A.getGuild(a)),
        l = nX(s),
        o = (0, _.bG)([e1.A], () => e1.A.isFocused()),
        d = (0, _.bG)([nD.A], () => nD.A.isUnavailable(a)),
        c = (0, Q.A)((e) => e.guildId),
        u = nQ(a),
        {
            badge: E,
            unread: A,
            isMentionLowImportance: h,
        } = (0, _.cf)([eo.default], () => ({
            badge: eo.default.getMentionCount(a),
            isMentionLowImportance: eo.default.getIsMentionLowImportance(a),
            unread: eo.default.hasUnread(a),
        })),
        f = nB(nF(r.useMemo(() => [a], [a]))),
        I = E + f.unreadCount,
        p = 0 === E && f.unreadCount > 0,
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
        isMentionLowImportance: h && 0 === f.unreadCount,
        lowerBadge: T,
        conjureWorking: f.working,
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
    (0, ti.L3)(e, async () => {
        let { default: e } = await n.e("49056").then(n.bind(n, 97187));
        return (n) => (0, i.jsx)(e, { ...n, guild: t });
    });
}
function iG(e) {
    let { guildNode: t } = e,
        n = t.id,
        r = (0, _.bG)([nz.A], () => nz.A.getRequest(n)),
        a = (0, _.bG)([nz.A], () => nz.A.getJoinRequestGuild(n), [n]),
        s = (0, _.bG)([e1.A], () => e1.A.isFocused()),
        l = (0, _.bG)([e$.A], () => e$.A.getGuildId());
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
              route: eR.BVt.GUILD_MEMBER_VERIFICATION(n),
          });
}
var ix = n(943536);
function ik(e) {
    let { onActivate: t, children: n } = e,
        a = r.useRef(null),
        s = (0, _.bG)([nz.A], () => nz.A.hasJoinRequestCoackmark()),
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
                                                    children: eL.intl.string(eL.t["0YV0YE"]),
                                                }),
                                                (0, i.jsx)(eh.E, {
                                                    variant: "body-xs/normal",
                                                    color: "text-muted",
                                                    children: eL.intl.string(eL.t["0UQVDL"]),
                                                }),
                                            ],
                                        }),
                                        (0, i.jsx)(iy.$, {
                                            variant: "primary",
                                            size: "sm",
                                            text: eL.intl.string(eL.t["4r+amb"]),
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
        s = (0, _.bG)([e$.A], () => e$.A.getGuildId()),
        l = (0, _.bG)([nz.A], () => nz.A.hasFetchedRequestToJoinGuilds),
        o = (0, iU.A)(),
        d = (0, ib.Ay)(s),
        c = r.useMemo(() => {
            let e = (0, eK.xW)({
                folderId: iM.U.PENDING_JOIN_REQUESTS_FOLDER,
                folderName: eL.intl.string(eL.t["scsU+l"]),
                expanded: n,
                guildIds: [],
            });
            for (let t of o) e.children.push((0, eK.EL)(t, e.id));
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
                      children: (0, i.jsx)(iD.Q, { size: "sm", color: "currentColor" }),
                  }),
                  renderChildNode: function (e, t, n) {
                      return e.type !== eK.PJ.GUILD
                          ? null
                          : (0, i.jsx)(iG, { guildNode: e, "aria-setsize": n, "aria-posinset": t }, e.id);
                  },
              }),
          });
}
function iB(e) {
    let { guildId: t } = e,
        n = r.useMemo(() => (0, eK.EL)(t), [t]),
        a = (0, _.bG)([eH.A], () => eH.A.getGuild(t)),
        s = (0, _.bG)([e1.A], () => e1.A.isFocused()),
        l =
            t ===
            (0, Q.A)((e) => {
                let { guildId: t } = e;
                return t;
            }),
        o = nQ(t);
    return null == a
        ? null
        : (0, i.jsx)(iN, { guildNode: n, guild: a, animatable: s, selected: l, draggable: !1, mediaState: o });
}
var iV = n(987566);
let iH = (0, F.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("185830"),
                n.e("237403"),
                n.e("12343"),
                n.e("592000"),
                n.e("524434"),
                n.e("849162"),
                n.e("778716"),
                n.e("570973"),
                n.e("481647"),
                n.e("776602"),
                n.e("704434"),
                n.e("140402"),
                n.e("391763"),
                n.e("844780"),
                n.e("139970"),
                n.e("858164"),
                n.e("427032"),
                n.e("591951"),
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
    ij = (0, eW.isWindows)() ? 4 : 12 * !(0, eW.isMac)();
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
    return e.startsWith(eR.BVt.GUILD_DISCOVERY) || e.startsWith(eR.BVt.GLOBAL_DISCOVERY);
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
            (0, eG.u9)(this.getVisibleGuildIds));
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
            e === eR.sFm.SERVER_DISCOVERY_BADGE ||
            e === eR.sFm.E3_SERVER_DISCOVERY_BADGE
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
        s = (0, H.A)(),
        l = (0, i.jsx)(V, { shown: a.shown, projects: a.projects }),
        o = (0, _.yK)([eH.A, eV.Ay], () => eH.A.getGuildIds().filter((e) => eV.Ay.isCurrentUserGuest(e))),
        d = r.concat(o),
        { entrypoint: c } = (0, ek.X8)({ location: "GuildsBar" });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(nC, {}),
            s ? null : l,
            c === ek.RK.SERVER_RAIL_TOP && (0, i.jsx)(iH, {}),
            s ? (0, i.jsx)(ew, {}) : null,
            s ? l : null,
            !t && (0, i.jsx)(tO, {}),
            d.map((e) => (0, i.jsx)(iB, { guildId: e }, e)),
            (0, i.jsx)(iF, { onActivate: n }),
        ],
    });
}
function iz(e) {
    let { guildDiscoveryButton: t, disableAppDownload: n, isOverlay: r, renderTreeNode: a, lurkingGuildIds: s } = e,
        [l] = (0, _.yK)([ej.Ay], () => {
            let e = ej.Ay.getGuildsTree();
            return [e, e.version];
        }),
        o = l.getRoots(),
        d = (0, _.yK)([eB.A], () => eB.A.getGeoRestrictedGuilds()).map((e) =>
            (0, i.jsx)(tQ, { id: e.id, name: e.name, icon: e.icon }, e.id),
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(f.B, {
                role: "group",
                "aria-label": eL.intl.string(eL.t["7hB4kg"]),
                gap: "xs",
                children: o.map((e, t) => a(e, t, o.length)),
            }),
            d,
            (0, i.jsx)(nP, {}),
            r ? null : (0, i.jsx)(t$, { disableTooltip: s.length > 0, lastTargetNode: o[o.length - 1] }),
            r ? null : t,
            n ? null : (0, i.jsx)(tM, {}),
        ],
    });
}
function iX(e) {
    var t;
    let { disableAppDownload: n = eW.isPlatformEmbedded, isOverlay: a = !1, className: l, themeOverride: o } = e,
        [u] = (0, _.yK)([ej.Ay], () => {
            let e = ej.Ay.getGuildsTree();
            return [e, e.version];
        }),
        E = (0, _.bG)([ex.A], () => ex.A.lurkingGuildIds()),
        f = r.useMemo(() => (a ? [] : E), [E, a]),
        g = (0, _.bG)([R.A], () => R.A.isFullscreenInContext()),
        { isSorting: N, startSorting: w, stopSorting: G } = (0, eY.A)(),
        x = r.useRef(!1),
        [k] = r.useState(() => new A.Ep()),
        F = r.useRef(null),
        B = r.useRef(null),
        { ref: V, ...j } = (0, c.$y)(),
        W = (0, I.R7)(),
        [Y, K] = r.useState(!1),
        $ = (0, p.r)(h.A.modules.guildbar.AVATAR_SIZE),
        z = (0, p.r)(h.A.space.SPACE_XS),
        X = (0, H.A)(),
        q = (function (e) {
            let t,
                n = (0, L.TW)(e),
                i = (0, _.bG)([D.A], () => D.A.isPinned()),
                { pathname: a } = (0, d.zy)(),
                s = (0, b.tb)(a);
            ((t = (0, _.yK)([P.Ay], () => P.Ay.getUnloadedParticipatingProjectIds())),
                r.useEffect(() => {
                    n && t.length > 0 && (0, v.tF)(t);
                }, [n, t]));
            let l = (0, y.UU)(() => P.Ay.getRailProjects()),
                o = (0, M.A)(l, (0, b.Xj)(a)),
                c = n ? o : U;
            return { shown: n && (s || i || c.length > 0), projects: c };
        })("GuildsBar"),
        { pathname: Z } = (0, d.zy)(),
        { entrypoint: J } = (0, ek.X8)({ location: "GuildsBar" }),
        ee = +!!X + (q.shown ? 1 + q.projects.length : 0) + +(J === ek.RK.SERVER_RAIL_TOP),
        et = r.useMemo(() => {
            let e = iW($, z, 0);
            return new iK(
                u,
                K,
                eR.tEg,
                () => {
                    (F.current?.calculateState(), B.current?.calculateState());
                },
                e,
            );
        }, [$, z, u]);
    (r.useLayoutEffect(() => {
        et.setSizes(iW($, z, ee));
    }, [et, $, z, ee]),
        r.useEffect(
            () => (
                et.setResizeObserver(),
                () => {
                    et.clearResizeObserver();
                }
            ),
            [et],
        ),
        r.useEffect(() => {
            function e() {
                (F.current?.calculateState(), B.current?.calculateState());
            }
            return (eo.default.addChangeListener(e), () => eo.default.removeChangeListener(e));
        }, []));
    let { analyticsLocations: en } = (0, O.Ay)(C.A.GUILDS_LIST),
        ei = iY(Z);
    ((0, S.u5)(() => {
        if (!x.current && 0 !== u.size) {
            if (!ei) {
                let { scrollTop: e } = eF.A.getGuildListDimensions();
                et.scrollTo({ to: e, animate: !1 });
            }
            return ((x.current = !0), () => k.stop());
        }
    }),
        r.useEffect(() => {
            if ((et.setGuildsTree(u), x.current || 0 === u.size)) return;
            let e = Q.A.getState().guildId;
            et.scrollToGuild(e, !1);
            let t = null;
            return Q.A.subscribe((e) => {
                let { guildId: n } = e;
                n !== t && ((t = n), et.scrollToGuild(t, !1));
            });
        }, [u, et]));
    let er = r.useCallback(() => {
        et.scrollTo({ to: 0, animate: !1 });
    }, [et]);
    ((t = et.scrollToGuild),
        r.useEffect(() => {
            let e = null;
            function n() {
                let n = e$.A.getGuildId();
                n !== e && ((e = n ?? null), t(n ?? null, !1));
            }
            return (
                e$.A.addChangeListener(n),
                () => {
                    e$.A.removeChangeListener(n);
                }
            );
        }, [t]));
    let ea = r.useCallback(
            function e(t, n, r) {
                switch (t.type) {
                    case eK.PJ.FOLDER:
                        return (0, i.jsx)(
                            nW,
                            {
                                folderNode: t,
                                treeVersion: u.version,
                                setNodeRef: et.setNodeRef,
                                draggable: !0,
                                sorting: N,
                                onDragStart: w,
                                onDragEnd: G,
                                renderChildNode: e,
                                "aria-setsize": r,
                                "aria-posinset": void 0 !== n ? n + 1 : void 0,
                            },
                            t.id,
                        );
                    case eK.PJ.GUILD:
                        return (0, i.jsx)(
                            iO,
                            {
                                guildNode: t,
                                setRef: et.setNodeRef,
                                draggable: !0,
                                sorting: N,
                                onDragStart: w,
                                onDragEnd: G,
                                "aria-setsize": r,
                                "aria-posinset": void 0 !== n ? n + 1 : void 0,
                            },
                            t.id,
                        );
                    default:
                        return null;
                }
            },
            [w, G, N, et.setNodeRef, u.version],
        ),
        es = (0, i.jsx)(t8, { selected: ei, className: iV.ai }),
        el = J === ek.RK.SERVER_RAIL_BOTTOM;
    return (0, i.jsx)(O.f5, {
        value: en,
        children: (0, i.jsx)(m.N, {
            theme: o,
            children: (e) =>
                (0, i.jsxs)("nav", {
                    className: s()(iV.iE, l, e, { [iV.R]: g }),
                    "aria-label": eL.intl.string(eL.t.PjnF2t),
                    children: [
                        (0, i.jsx)(e8, {
                            ref: F,
                            isVisible: et.isItemVisible,
                            onJumpTo: et.handleJumpToGuild,
                            className: iV.Xl,
                            barClassName: iV.Sh,
                        }),
                        (0, i.jsxs)("div", {
                            ref: V,
                            ...j,
                            ...W,
                            role: "tree",
                            "aria-multiselectable": !1,
                            className: iV.B2,
                            children: [
                                (0, i.jsxs)(T.Ch, {
                                    className: s()({ [iV.XG]: !0, [iV.qw]: Y }),
                                    fade: !0,
                                    experimental_useStack: !0,
                                    gap: "xs",
                                    ref: et.scrollerRef,
                                    onScroll: et.handleScroll,
                                    children: [
                                        (0, i.jsx)(i$, { scrollToTop: er, lurkingGuildIds: f, conjureRail: q }),
                                        (0, i.jsx)(nR, {}),
                                        (0, i.jsx)(iz, {
                                            guildDiscoveryButton: es,
                                            disableAppDownload: n,
                                            isOverlay: a,
                                            renderTreeNode: ea,
                                            lurkingGuildIds: f,
                                        }),
                                    ],
                                }),
                                el &&
                                    (0, i.jsxs)("div", {
                                        children: [
                                            (0, i.jsx)(nR, { fullWidth: !0 }),
                                            (0, i.jsx)("div", { className: iV.JU, children: (0, i.jsx)(iH, {}) }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, i.jsx)(e8, {
                            reverse: !0,
                            ref: B,
                            isVisible: et.isItemVisible,
                            onJumpTo: et.handleJumpToGuild,
                            className: s()(iV.LZ, { [iV.CH]: !a && !el, [iV.c0]: !a && el }),
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
        return (0, i.jsx)(c.hD, { navigator: t, children: (0, i.jsx)(iX, { ...e }) });
    },
    (e, t) => !1 === t.isVisible || (0, E.A)(e, t),
);
