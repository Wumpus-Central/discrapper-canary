n.d(t, { A: () => ra });
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
    g = n(516521),
    T = n(951001),
    S = n(964486),
    N = n(260762),
    C = n(793574),
    O = n(688810),
    R = n(628983),
    L = n(43105),
    y = n(192308),
    D = n(366056),
    b = n(862328),
    v = n(939249),
    P = n(941971),
    M = n(900848),
    U = n(550591),
    w = n(93776);
let G = function (e) {
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
            onMouseEnter: g,
            onMouseLeave: T,
            onMouseDown: S,
        } = n,
        N = (0, c.Vd)(a),
        [C, O] = r.useState(!1),
        R = p ?? ("string" == typeof _ ? _ : void 0);
    return (0, i.jsxs)(M.c, {
        children: [
            h ? (0, i.jsx)(P.A, { overlay: !0, hovered: C, selected: u }) : null,
            (0, i.jsx)(U.A, {
                text: _,
                selected: u,
                children: (0, i.jsx)(b.Q, {
                    selected: !0,
                    upperBadge: E,
                    lowerBadge: A,
                    lowerBadgeSize: f,
                    children: (0, i.jsx)(v.D, {
                        innerRef: t,
                        onMouseEnter: () => {
                            (g?.(), O(!0));
                        },
                        onMouseLeave: () => {
                            (T?.(), O(!1));
                        },
                        onMouseDown: S,
                        className: s()(w.oZ, I, { [w.wH]: u || C }),
                        onClick: l,
                        "aria-label": R,
                        "aria-selected": u,
                        onContextMenu: o,
                        focusProps: { enabled: !1 },
                        ...N,
                        children: null != d && (0, i.jsx)(d, { className: w.sF, color: "currentColor" }),
                    }),
                }),
            }),
            m,
        ],
    });
};
var x = n(186111),
    k = n(105283),
    F = n(554146),
    B = n(263775),
    V = n(142617),
    H = n(361158),
    j = n(359527),
    W = n(49999),
    Y = n(532294),
    K = n(852717),
    $ = n(792996),
    X = n(269640);
let z = { display: "contents", "--custom-checkpoint-primary": Y.Kr };
function q() {
    let e = r.useRef(null),
        { visible: t, markAsDismissed: n } = (function (e) {
            let t = (0, V.Pr)(e),
                [n, i] = (0, B.kn)(t ? [F.M.BUILD_A_BEAR_INTRO] : []),
                a = n === F.M.BUILD_A_BEAR_INTRO,
                s = (0, H.xr)((e) => e.fullScreenLayers.some((e) => e.key === j.p));
            return (
                r.useEffect(() => {
                    a && s && i(W.i.INDIRECT_ACTION);
                }, [a, s, i]),
                { visible: a, markAsDismissed: i }
            );
        })("CheckpointGuildsBarEntrypoint"),
        a = (0, y.Rv)(),
        s = (0, _.bG)([x.A], () => x.A.hasLayers()),
        l = !a && !s;
    if (!t) return null;
    let o = async () => {
        (await (0, k.D)("guilds_bar")) && n(W.i.TAKE_ACTION);
    };
    return (0, i.jsx)("div", {
        style: z,
        children: (0, i.jsx)(G, {
            id: "checkpoint-intro",
            ref: e,
            onClick: o,
            "aria-label": $.intl.string(K.default["8hclXY"]),
            tooltip: l ? void 0 : $.intl.string(K.default["8hclXY"]),
            icon: Q,
            className: X.H,
            children: (0, i.jsx)(L.A, {
                targetElementRef: e,
                shouldShow: l,
                position: "right",
                alignmentStrategy: "edge",
                align: "top",
                caretConfig: { align: "start" },
                graphic: { type: "image", src: "/assets/88d859762a7a6e23.webp", aspectRatio: "16/9" },
                title: $.intl.string(K.default.tgYaeZ),
                body: $.intl.string(K.default.BFc4lY),
                onRequestClose: () => n(W.i.USER_DISMISS),
                actions: [{ text: $.intl.string(K.default.UjtEWE), onClick: o }],
            }),
        }),
    });
}
function Q() {
    return (0, i.jsx)(D.ExperimentalCheckpointIcon, { size: "md", color: "white" });
}
var J = n(499466),
    Z = n(972013),
    ee = n(751841),
    et = n(233470),
    en = n(260498),
    ei = n(120692),
    er = n(717421);
let ea = { friction: 28, tension: 600 };
function es(e) {
    switch (e) {
        case "height":
        case "opacity":
            return { duration: 150, ...ea };
        case "scale":
            return { ...ea };
        default:
            throw Error(`getRailItemSpringConfig() - Invalid spring ${String(e)}`);
    }
}
var el = n(268218);
let eo = (0, el.Fe)({
    createPromise: () =>
        Promise.all([
            n.e(18190),
            n.e(916758),
            n.e(356664),
            n.e(540715),
            n.e(741111),
            n.e(386594),
            n.e(745493),
            n.e(442637),
            n.e(292270),
            n.e(382840),
            n.e(914454),
            n.e(170617),
            n.e(801169),
            n.e(484482),
        ]).then(n.bind(n, 101726)),
    webpackId: 101726,
    name: "ConjureRailFolder",
});
function ed(e) {
    let { shown: t } = e,
        n = (0, p.r)(f.A.modules.guildbar.AVATAR_SIZE),
        a = (0, p.r)(f.A.space.SPACE_XS),
        [s, l] = r.useState(t);
    t && !s && l(!0);
    let o = r.useRef(null),
        d = (function (e, t, n) {
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
        })(o, s, n),
        [{ height: c, opacity: u, scale: _ }, E] = (0, er.z)(() => {
            let e = +!!t;
            return { height: e, opacity: e, scale: e, config: es };
        }, "respect-motion-settings");
    return (r.useEffect(() => {
        let e = !0,
            n = requestIdleCallback(
                async function () {
                    let n = +!!t;
                    (await E({ height: n, opacity: n, scale: n }), e && !t && l(!1));
                },
                { timeout: 500 },
            );
        return () => {
            ((e = !1), cancelIdleCallback(n));
        };
    }, [E, t]),
    s)
        ? (0, i.jsx)(ei.animated.div, {
              style: {
                  opacity: u,
                  height: c.to([0, 1], [0, d]),
                  marginBottom: c.to([0, 1], [-a, 0]),
                  transform: _.to([0, 1], [0.5, 1]).to((e) => `scale(${e})`),
              },
              children: (0, i.jsx)("div", { ref: o, children: (0, i.jsx)(eo, {}) }),
          })
        : null;
}
var ec = n(749884);
n(321073);
var eu = n(67811),
    e_ = n(27232),
    eE = n(308528),
    eA = n(933958),
    ef = n(969151),
    eh = n(771640),
    eI = n(366811),
    ep = n(616356),
    em = n(734057),
    eg = n(309010),
    eT = n(977997),
    eS = n(661191),
    eN = n(181079),
    eC = n(5180),
    eO = n(863005),
    eR = n(152007),
    eL = n(458294),
    ey = n(576705),
    eD = n(218461),
    eb = n(543465),
    ev = n(428784),
    eP = n(451394),
    eM = n(597601),
    eU = n(834730),
    ew = n(983851),
    eG = n(183623),
    ex = n(323384),
    ek = n(866665),
    eF = n(104171),
    eB = n(63995),
    eV = n(597886),
    eH = n(287809),
    ej = n(607567),
    eW = n(403362),
    eY = n(652215),
    eK = n(785332);
function e$(e, t) {
    return 0 === t.length
        ? null
        : (0, i.jsxs)("div", {
              className: eK.nM,
              children: [
                  (0, i.jsx)(e, { className: eK.RI, color: "currentColor" }),
                  (0, i.jsx)(eF.Ay, { guildId: void 0, users: t, max: 6 }),
              ],
          });
}
function eX() {
    let e = (0, _.yK)([eN.A, em.A], () =>
            eS.default
                .keys(eN.A.getFavoriteChannels())
                .map((e) => em.A.getChannel(e))
                .filter(eW.Vq),
        ),
        t = e.map((e) => e.id),
        n = e.filter((e) => e.type === eY.rbe.GUILD_VOICE),
        r = e.filter((e) => e.type === eY.rbe.GUILD_STAGE_VOICE).map((e) => e.id),
        a = (0, _.yK)(
            [ej.Ay],
            () =>
                o().flatMap(n, (e) =>
                    ej.Ay.getVoiceStatesForChannel(e).map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
                ),
            [n],
        ),
        s = (0, _.yK)([eB.A], () =>
            o().flatMap(r, (e) =>
                eB.A.getMutableParticipants(e, eV.ip.SPEAKER)
                    .filter((e) => e.type === eV.wY.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
            ),
        ),
        l = (0, _.bG)([eB.A], () => {
            let e = 0;
            for (let t of r) e += eB.A.getParticipantCount(t, eV.ip.AUDIENCE);
            return e;
        }),
        d = (0, _.yK)(
            [ep.A],
            () =>
                ep.A.getAllApplicationStreams()
                    .filter((e) => t.includes(e.channelId))
                    .map((e) => e.ownerId),
            [t],
        ),
        c = (0, _.yK)(
            [eA.Ay],
            () => {
                let e = eA.Ay.getEmbeddedActivitiesByChannel(),
                    n = [];
                for (let i of t) n.push(...(e.get(i)?.flatMap((e) => Array.from(e.userIds)) ?? []));
                return n;
            },
            [t],
        ),
        u = (0, _.yK)([eH.default], () => c.map((e) => eH.default.getUser(e)), [c]),
        E = (0, _.yK)([eH.default], () => d.map((e) => eH.default.getUser(e)), [d]),
        A = e$(
            ew.VoiceNormalIcon,
            a.filter((e) => !d.includes(e.id) && !c.includes(e.id)),
        ),
        f =
            0 === s.length
                ? null
                : (0, i.jsxs)("div", {
                      className: eK.nM,
                      children: [
                          (0, i.jsx)(eP.StageIcon, { size: "lg", color: "currentColor", className: eK.RI }),
                          (0, i.jsx)(eF.Ay, { guildId: void 0, users: s, max: 3 }),
                          (0, i.jsxs)("div", {
                              className: eK.GZ,
                              children: [
                                  (0, i.jsx)(eM.HeadphonesIcon, { size: "xs", color: "currentColor" }),
                                  (0, i.jsx)(eU.E, {
                                      className: eK._I,
                                      color: "text-default",
                                      variant: "body-xs/medium",
                                      children: l,
                                  }),
                              ],
                          }),
                      ],
                  }),
        h = e$(
            eG.ScreenArrowIcon,
            E.filter((e) => null != e && !c.includes(e.id)),
        ),
        I = e$(ex.AppsIcon, u);
    return (0, i.jsxs)(i.Fragment, { children: [f, A, h, I] });
}
function ez() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: s()(eK.nM, eK.Dl),
                children: (0, i.jsx)("span", { className: s()(eK.cN, eK.NT), children: $.intl.string($.t.wMWyci) }),
            }),
            (0, i.jsx)(eX, {}),
        ],
    });
}
function eq(e) {
    let { "aria-label": t = !1, children: n } = e,
        a = r.useMemo(
            () =>
                (0, i.jsx)(eU.E, {
                    variant: "body-md/semibold",
                    color: "text-default",
                    className: eK.A_,
                    children: (0, i.jsx)(ez, {}),
                }),
            [],
        );
    return (0, i.jsx)(ek.m, {
        __unsupportedReactNodeAsText: a,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": !1 === t ? void 0 : t,
        asContainer: !0,
        children: n,
    });
}
var eQ = n(195572);
let eJ = { analyticsSource: { page: eY.liQ.GUILD_CHANNEL, section: eY.JJy.CHANNEL_LIST, object: eY.ZSU.CHANNEL } };
function eZ() {
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
        m = (0, ev.$)("favorite-server-context"),
        { favoriteGuildMuted: g, favoriteChannels: T } = (0, _.cf)([eN.A], () => ({
            favoriteChannels: eN.A.getFavoriteChannels(),
            favoriteGuildMuted: eN.A.favoriteGuildMuted,
        })),
        S = (0, _.bG)([eg.Ay], () => eg.Ay.getChannelId(eY.YYv)),
        N = (0, _.bG)([em.A], () => em.A.getChannel(S)),
        C = (0, eI.A)((e) => e.guildId),
        O = (0, eC.ai)(C),
        { badge: R, unread: L } = (0, _.cf)([eO.A, em.A, eL.default, eR.A, ey.A, eD.Ay, eb.Ay], () => {
            let e = eS.default.keys(T),
                t = new Set();
            return e.reduce(
                (e, n) => {
                    let i = em.A.getChannel(n),
                        r = i?.getGuildId(),
                        a = eD.Ay.getMentionCount(n);
                    if (
                        (t.has(n) || (t.add(n), (e.badge = e.badge + a)),
                        (e.unread = e.unread || (eD.Ay.hasUnread(n) && eL.default.shouldCountChannelUnread(i, a))),
                        null != r)
                    ) {
                        let i = eO.A.getActiveJoinedRelevantThreadsForParent(r, n);
                        for (let n in i) {
                            let i = eD.Ay.getMentionCount(n);
                            t.has(n) || (t.add(n), (e.badge += i));
                            let r = em.A.getChannel(n);
                            e.unread = e.unread || (eD.Ay.hasUnread(n) && eL.default.shouldCountChannelUnread(r, i));
                        }
                    }
                    return e;
                },
                { badge: 0, unread: !1 },
            );
        }),
        y =
            ((t = null != (e = (0, _.bG)([eg.Ay], () => eg.Ay.getVoiceChannelId())) && null != T[e]),
            (n = (0, _.bG)([ep.A], () => {
                if (!t) return !1;
                let e = ep.A.getCurrentUserActiveStream();
                return null != e && null != T[e.channelId];
            })),
            (a = (0, _.bG)([ep.A], () => ep.A.getAllApplicationStreams().some((e) => null != T[e.channelId]))),
            (s = (0, _.bG)([eT.A], () => t && null != e && eT.A.hasVideo(e), [t, e])),
            (l = (0, _.yK)([eA.Ay], () =>
                eS.default.keys(T).reduce((e, t) => (e.push(...eA.Ay.getEmbeddedActivitiesForChannel(t)), e), []),
            )),
            (o = (0, _.bG)([eA.Ay], () =>
                Array.from(eA.Ay.getSelfEmbeddedActivities().values()).some((e) => {
                    let { location: t } = e,
                        n = (0, ef.H)(t);
                    return null != n && null != T[n];
                }),
            )),
            (d = l.length > 0),
            (u = !1),
            (E = !1),
            (A = !1),
            (f = !1),
            t ? ((u = !s), (E = s), (A = n), (f = o)) : ((A = a), (f = d)),
            (0, eh.oi)({ audio: u, video: E, screenshare: A, liveStage: !1, isCurrentUserConnected: t, activity: f })),
        D = R > 0 ? (0, eh.wN)(R) : null;
    return (0, i.jsxs)(M.c, {
        children: [
            (0, i.jsx)(P.A, { overlay: !0, selected: O, hovered: I, unread: L && !g }),
            (0, i.jsx)(eq, {
                children: (0, i.jsx)(b.Q, {
                    selected: !0,
                    upperBadge: y,
                    lowerBadge: D,
                    children: (0, i.jsx)("div", {
                        children: (0, i.jsx)(eu.j, {
                            ...h,
                            ariaLabel: $.intl.formatToPlainString($.t["/uzRss"], {
                                guildName: $.intl.string($.t.wMWyci),
                                mentions: R,
                            }),
                            "aria-selected": O,
                            to: { pathname: eY.BVt.CHANNEL(eY.YYv, S), state: eJ },
                            selected: O || I,
                            onMouseEnter: () => p(!0),
                            onMouseLeave: () => p(!1),
                            onMouseDown: function () {
                                null != N && eE.A.preload(N.guild_id, N.id);
                            },
                            onContextMenu: m,
                            children: (0, i.jsx)(e_.StarIcon, {
                                size: "custom",
                                color: "currentColor",
                                className: eQ.w,
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
var e0 = n(185951),
    e1 = n(533129),
    e2 = n(837057),
    e3 = n(488995),
    e6 = n(749519),
    e5 = n(768942);
function e7(e, t, n) {
    let i = t.getBoundingClientRect(),
        r = n.getBoundingClientRect();
    if (Math.min(i.bottom, r.bottom) - Math.max(i.top, r.top) >= 0.5 * i.height) {
        let t = e.offsetParent?.getBoundingClientRect().top ?? 0;
        ((e.style.top = `${i.top - t}px`), (e.style.bottom = "auto"));
    } else (e.style.removeProperty("top"), e.style.removeProperty("bottom"));
}
function e8(e) {
    let { discoverButtonRef: t, scrollerRef: n, onClick: a, onRequestClose: s } = e,
        {
            anchorRef: l,
            handleAnchorRef: o,
            isAnchorPositioned: d,
        } = (function (e, t) {
            let n = r.useRef(null),
                [i, a] = r.useState(!1),
                s = r.useCallback(
                    (i) => {
                        n.current = i;
                        let r = e.current,
                            s = t.current?.getScrollerNode();
                        null != i && null != r && null != s && (e7(i, r, s), a(!0));
                    },
                    [e, t],
                );
            return (
                r.useLayoutEffect(() => {
                    let r = n.current,
                        a = e.current,
                        s = t.current?.getScrollerNode();
                    if (!i || null == r || null == a || null == s) return;
                    let l = () => e7(r, a, s),
                        o = new ResizeObserver(() => {
                            let e = r.getBoundingClientRect().top;
                            (l(), r.getBoundingClientRect().top !== e && window.dispatchEvent(new Event("resize")));
                        });
                    for (let e of (o.observe(s), s.children)) o.observe(e);
                    return (
                        s.addEventListener("scroll", l, { passive: !0 }),
                        window.addEventListener("resize", l),
                        () => {
                            (o.disconnect(),
                                s.removeEventListener("scroll", l),
                                window.removeEventListener("resize", l));
                        }
                    );
                }, [i, e, t]),
                { anchorRef: n, handleAnchorRef: s, isAnchorPositioned: i }
            );
        })(t, n),
        c = r.useCallback(() => {
            ((0, e1.WL)({ source: e3.st.GAMES_TAB_COACHMARK }),
                (0, e2.transitionToGlobalDiscovery)({ tab: e3.GlobalDiscoveryTab.GAMES }),
                a());
        }, [a]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { ref: o, className: e5.Y }),
            d
                ? (0, i.jsx)(L.A, {
                      targetElementRef: l,
                      position: "right",
                      alignmentStrategy: "edge",
                      align: "bottom",
                      caretConfig: { align: "end" },
                      title: $.intl.string(e6.default.fr7A8J),
                      body: $.intl.string(e6.default.d52k7Y),
                      graphic: {
                          type: "image",
                          src: "https://cdn.discordapp.com/assets/content/7cac91fa7947d949e265315fad6d550d743b3e422de7c61a36bdf58228e55903.svg",
                      },
                      actions: [{ text: $.intl.string($.t.RzWDqY), variant: "primary", onClick: c }],
                      onRequestClose: s,
                  })
                : null,
        ],
    });
}
var e4 = n(633965),
    e9 = n(857071),
    te = n(851109),
    tt = n(72314),
    tn = n(543897),
    ti = n(696451),
    tr = n(71393),
    ta = n(711014),
    ts = n(723702),
    tl = n(757780),
    to = n(263715),
    td = n(967198),
    tc = n(173860),
    tu = n(383394),
    t_ = n(131677),
    tE = n(73153);
let tA = {};
class tf extends _.Ay.PersistedStore {
    static displayName = "ViewHistoryStore";
    static persistKey = "ViewHistoryStore";
    initialize(e) {
        null != e &&
            Object.keys(e).forEach((t) => {
                "number" == typeof e[t] && (tA[t] = e[t]);
            });
    }
    getState() {
        return tA;
    }
    hasViewed(e) {
        return null != tA[e];
    }
}
let th = new tf(tE.h, {
    VIEW_HISTORY_MARK_VIEW: function (e) {
        let { key: t } = e;
        tA[t] = Date.now();
    },
});
var tI = n(531685),
    tp = n(583613);
let tm = "app-download-item",
    tg = "add-server-item";
function tT() {
    return !1;
}
function tS(e) {
    let t = eL.default.getMutableGuildStates();
    return (
        (e === eY.sFm.SERVER_DISCOVERY_BADGE && !th.hasViewed(eY.sFm.SERVER_DISCOVERY_BADGE)) ||
        (e !== tm && e !== tg && t[e ?? "null"]?.highImportanceMentionCount > 0)
    );
}
let tN = (0, tp.L_)((e, t, n) => ["null", ...t, ...e, tg, eY.sFm.E3_SERVER_DISCOVERY_BADGE, tm]);
function tC(e) {
    let { ref: t, ...n } = e,
        r = (0, _.yK)([ta.Ay, t_.A, eL.default], () =>
            tN(ta.Ay.getGuildFolders(), t_.A.getUnreadPrivateChannelIds(), eL.default.getStoreChangeSentinel()),
        ),
        a = (0, _.bG)([tI.A], () => tI.A.isFocused()),
        s = (0, _.bG)([tu.A], () => tu.A.getExpandedFolders());
    return (0, i.jsx)(tc.A, {
        ...n,
        ref: t,
        items: r,
        isUnread: tT,
        textUnread: $.intl.string($.t.y2b7CA),
        textMention: $.intl.string($.t.y2b7CA),
        isMentioned: tS,
        animate: a,
        expandedFolders: s,
    });
}
n(667532);
var tO = n(628274),
    tR = n(495867),
    tL = n(778712),
    ty = n(812993),
    tD = n(442433),
    tb = n(620982),
    tv = n(571694),
    tP = n(47167),
    tM = n(598104),
    tU = n(976860),
    tw = n(442325),
    tG = n(297334),
    tx = n(812020),
    tk = n(907459),
    tF = n(994500),
    tB = n(145408);
let tV = (0, n(400845).Ay)({
    kind: "user",
    name: "2026-10-guild-tooltip-lazy-content",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function tH(e) {
    let t = tV.useConfig({ location: e }).enabled,
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
function tj(e) {
    let { icon: t, users: n } = e;
    return 0 === n.length
        ? null
        : (0, i.jsxs)("div", {
              className: eK.nM,
              children: [
                  (0, i.jsx)(t, { className: eK.RI, color: "currentColor" }),
                  (0, i.jsx)(eF.Ay, { users: n, max: 6 }),
              ],
          });
}
function tW(e) {
    let { muteConfig: t, className: n } = e;
    return t?.end_time == null
        ? (0, i.jsx)(eU.E, {
              variant: "body-xs/normal",
              color: "text-muted",
              className: n,
              children: $.intl.string($.t.fpKdS1),
          })
        : (0, i.jsx)(tB.A, { muteConfig: t, className: n });
}
function tY(e) {
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
            activityUsers: g,
            streamUsers: T,
            voiceUsers: S,
        } = ((t = p.id),
        (n = (0, _.bG)([tF.A], () => tF.A.getBlockedOrIgnoredIDs())),
        (a = (0, _.bG)([tx.A], () => tx.A.getUserAffinitiesMap(), [])),
        (l = (0, _.yK)(
            [eA.Ay, eH.default],
            () =>
                eA.Ay.getEmbeddedActivitiesForChannel(t)
                    .flatMap((e) => Array.from(e.userIds))
                    .map((e) => eH.default.getUser(e)),
            [t],
        )),
        (o = r.useMemo(() => (0, tG.aw)(l, n), [l, n])),
        (d = r.useMemo(() => (0, tk.L)(o, a, "DirectMessageTooltip - activityUsers"), [o, a])),
        (c = (0, _.yK)(
            [ep.A, eH.default],
            () => {
                let e = ep.A.getAllApplicationStreamsForChannel(t)
                    .map((e) => e.ownerId)
                    .map((e) => eH.default.getUser(e));
                return (0, tG.aw)(e, n);
            },
            [t, n],
        )),
        (u = r.useMemo(() => (0, tG.aw)(c, n), [c, n])),
        (E = r.useMemo(() => (0, tk.L)(u, a, "DirectMessageTooltip - activityUsers"), [u, a])),
        (A = r.useMemo(() => E.filter((e) => !d.some((t) => t.id === e.id)), [E, d])),
        (f = (0, _.yK)(
            [ej.Ay],
            () => {
                let e = ej.Ay.getVoiceStatesForChannel(p).map((e) => {
                    let { user: t } = e;
                    return t;
                });
                return (0, tG.aw)(e, n);
            },
            [p, n],
        )),
        (h = r.useMemo(() => (0, tG.aw)(f, n), [f, n])),
        (I = r.useMemo(() => (0, tk.L)(h, a, "DirectMessageTooltip - voiceUsers"), [h, a])),
        {
            voiceUsers: r.useMemo(
                () => I.filter((e) => !d.some((t) => t.id === e.id) && !E.some((t) => t.id === e.id)),
                [I, d, E],
            ),
            streamUsers: A,
            activityUsers: d,
        }),
        N = (0, i.jsx)(tj, { icon: ew.VoiceNormalIcon, users: S }),
        C = (0, i.jsx)(tj, { icon: eG.ScreenArrowIcon, users: T }),
        O = (0, i.jsx)(tj, { icon: ex.AppsIcon, users: g }),
        { isMuted: R, muteConfig: L } = (0, _.cf)(
            [eb.Ay],
            () => ({ isMuted: eb.Ay.isChannelMuted(null, m), muteConfig: eb.Ay.getChannelMuteConfig(null, m) }),
            [m],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            N,
            C,
            O,
            R ? (0, i.jsx)(tW, { muteConfig: L, className: s()(eK.LM, { [eK.Sx]: null != N || null != C }) }) : null,
        ],
    });
}
function tK(e) {
    let { channel: t } = e,
        n = (0, tP.Ay)(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: s()(eK.nM, eK.Dl),
                children: (0, i.jsx)("span", { className: s()(eK.cN, eK.NT), children: n }),
            }),
            (0, i.jsx)(tY, { channel: t }),
        ],
    });
}
function t$(e) {
    let { channel: t, children: n } = e,
        a = (0, tP.Ay)(t),
        { shouldRenderRichContent: s, handleTooltipShow: l, handleTooltipHide: o } = tH("DirectMessageTooltip"),
        d = r.useMemo(
            () =>
                (0, i.jsx)(eU.E, {
                    variant: "body-md/semibold",
                    color: "text-default",
                    className: eK.A_,
                    children: s ? (0, i.jsx)(tK, { channel: t }) : a,
                }),
            [t, a, s],
        );
    return (0, i.jsx)(ek.m, {
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
class tX extends r.PureComponent {
    static defaultProps = { badge: 0, audio: !1, video: !1, isCurrentUserInThisDMCall: !1 };
    state = {
        hovered: !1,
        animating: !0,
        controller: new ei.Controller({ scale: 0, height: 0, opacity: 0, config: es }),
    };
    componentWillEnter(e) {
        let { controller: t } = this.state;
        (e(),
            t
                .update({ immediate: !tI.A.isFocused(), height: 1, opacity: 1, scale: 1, config: es })
                .start()
                .then(() => this.setState({ animating: !1 })));
    }
    componentWillAppear(e) {
        let { controller: t } = this.state;
        t.update({ immediate: !0, scale: 1, opacity: 1, height: 1, config: es }).start().then(e);
    }
    componentWillLeave(e) {
        let { controller: t } = this.state;
        this.setState({ animating: !0 }, () =>
            t.update({ immediate: !tI.A.isFocused(), height: 0, opacity: 0, scale: 0, config: es }).start().then(e),
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
            t = e.type === eY.rbe.DM ? eH.default.getUser(e.getRecipientId()) : null;
        return null != t ? t.getAvatarURL(void 0, 48, !1) : (0, tv.Y)(e);
    }
    handleSelectChannel = () => {
        let { channel: e } = this.props;
        (0, tU.pX)(eY.BVt.CHANNEL(eY.ME, e.id));
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            r = t.type === eY.rbe.DM ? eH.default.getUser(t.getRecipientId()) : null;
        null != r
            ? (0, tD.L3)(e, async () => {
                  let { default: e } = await Promise.all([
                      n.e(339715),
                      n.e(924697),
                      n.e(24312),
                      n.e(622936),
                      n.e(216947),
                      n.e(463317),
                      n.e(926132),
                      n.e(834552),
                      n.e(993103),
                      n.e(708757),
                      n.e(585968),
                      n.e(393336),
                      n.e(893190),
                      n.e(713708),
                      n.e(146652),
                      n.e(776273),
                      n.e(885533),
                      n.e(391763),
                      n.e(189673),
                      n.e(571210),
                      n.e(576432),
                      n.e(797558),
                      n.e(491001),
                      n.e(451162),
                      n.e(229787),
                      n.e(142867),
                      n.e(88342),
                      n.e(96539),
                      n.e(576665),
                      n.e(495786),
                      n.e(717479),
                      n.e(311802),
                      n.e(698965),
                      n.e(382563),
                      n.e(235313),
                      n.e(474610),
                      n.e(579245),
                      n.e(947502),
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
            : (0, tD.L3)(e, async () => {
                  let { default: e } = await Promise.all([
                      n.e(926132),
                      n.e(393336),
                      n.e(893190),
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
                let a = tw.A.isEnabled();
                return (0, i.jsx)(eu.j, {
                    to: a ? void 0 : eY.BVt.CHANNEL(eY.ME, e.id),
                    onClick: a ? this.handleSelectChannel : void 0,
                    onMouseEnter: () => this.setState({ hovered: !0 }),
                    onMouseLeave: () => this.setState({ hovered: !1 }),
                    selected: n || E,
                    ariaLabel:
                        null != t
                            ? [
                                  $.intl.formatToPlainString($.t.hKarnZ, { name: t, mentions: r }),
                                  d ? $.intl.string($.t["fk1/bX"]) : c ? $.intl.string($.t["NGg/fm"]) : null,
                              ]
                                  .filter(Boolean)
                                  .join(", ")
                            : "",
                    onContextMenu: this.handleContextMenu,
                    icon: f ? void 0 : this.getChannelIcon(),
                    backgroundStyle: f ? "on-hover" : "always",
                    children: f
                        ? (0, i.jsx)(tM.A, {
                              channel: e,
                              size: tL._3.SIZE_40,
                              facepileSizeOverride: tL._3.SIZE_32,
                              "aria-hidden": !0,
                          })
                        : void 0,
                    ..._,
                });
            };
        return (0, i.jsx)(ei.animated.div, {
            style: this.getAnimatedStyle(),
            children: (0, i.jsxs)(M.c, {
                children: [
                    (0, i.jsx)(P.A, { overlay: !0, hovered: !A && E, selected: !A && n, unread: !A && u }),
                    (0, i.jsx)(t$, {
                        channel: e,
                        children: (0, i.jsx)(b.Q, {
                            rounded: !0,
                            selected: !1,
                            lowerBadge: r > 0 ? (0, eh.wN)(r, void 0, !0) : null,
                            upperBadge: (0, eh.oi)({ audio: a, video: s, screenshare: l, isCurrentUserConnected: o }),
                            lowerBadgeSize: { width: (0, ty.o6)(r) },
                            children: h(),
                        }),
                    }),
                ],
            }),
        });
    }
}
function tz(e) {
    let { ref: t, ...n } = e,
        r = n.channel.id,
        a = (0, tP.Ay)(n.channel),
        s = (0, c.Vd)(r, 2),
        l = (0, _.bG)([tR.A], () => tR.A.getChannelId(), []),
        o = (0, _.bG)([R.A], () => R.A.getMode(r), [r]),
        d = (0, _.bG)([ep.A], () => ep.A.getAllApplicationStreamsForChannel(r).length > 0),
        u = (0, _.bG)([ej.Ay], () => ej.Ay.getVoiceStatesForChannel(n.channel).length > 0, [n.channel]),
        E = (0, _.bG)([eg.Ay], () => eg.Ay.getChannelId(), []),
        A = (0, _.bG)([eD.Ay], () => eD.Ay.getMentionCount(r), [r]),
        h = l === r,
        { isIncomingCall: I, isOngoingCall: m } = (0, tb.A)(r),
        g = !1,
        T = !1;
    (h || u) && ((g = o === eY._Of.VOICE), (T = o === eY._Of.VIDEO));
    let S = (0, p.r)(f.A.modules.guildbar.AVATAR_SIZE);
    return (0, i.jsx)(tX, {
        ...n,
        ref: t,
        channelName: a,
        unread: A > 0,
        selected: E === r,
        badge: A,
        audio: g,
        video: T,
        stream: d,
        isCurrentUserInThisDMCall: h,
        isIncomingCall: I,
        isOngoingCall: m,
        size: S,
        treeItemProps: s,
    });
}
function tq() {
    (0, _.bG)([em.A], () => em.A.getPrivateChannelsVersion());
    let e = em.A.getMutablePrivateChannels(),
        t = (0, _.yK)([t_.A], () => t_.A.getUnreadPrivateChannelIds()),
        { selectedVoiceGuildId: n, selectedVoiceChannelId: a } = (0, _.cf)([tR.A], () => ({
            selectedVoiceGuildId: tR.A.getGuildId(),
            selectedVoiceChannelId: tR.A.getChannelId(),
        })),
        s = t.map((t) => {
            let n = e[t];
            return null == n || n.id === a ? null : (0, i.jsx)(tz, { channel: n }, n.id);
        }),
        l = null == n && null != a ? e[a] : null;
    return (
        null != l && s.unshift((0, i.jsx)(tz, { channel: l }, l.id)),
        (0, i.jsx)(h.B, {
            id: "guild-list-unread-dms",
            role: "group",
            "aria-label": $.intl.string($.t.YUU0RF),
            gap: "xs",
            hidden: s.length < 1,
            children: (0, i.jsx)(tO.F, { component: r.Fragment, children: s }),
        })
    );
}
var tQ = n(32880),
    tJ = n(225123);
let tZ = "DOWNLOAD_APPS",
    t0 = r.lazy(() => Promise.all([n.e(845832), n.e(396871)]).then(n.bind(n, 214010)));
function t1() {
    let e = (0, y.re)((e) => (0, y.fD)(e, tZ)),
        t = r.useRef(null),
        a = (0, _.bG)(
            [eH.default, tJ.A],
            () => (0, ts.q4)() && null != eH.default.getCurrentUser() && tJ.A.isConnected(),
        );
    return (0, i.jsx)(G, {
        ref: t,
        id: "app-download-button",
        onClick: () => {
            (0, y.mM)(
                async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 987482));
                    return (t) => (0, i.jsx)(e, { source: "Guilds", ...t });
                },
                { modalKey: tZ },
            );
        },
        selected: e,
        tooltip: $.intl.string($.t.Z7jwrJ),
        icon: tQ.DownloadIcon,
        children: a
            ? (0, i.jsx)(r.Suspense, { fallback: null, children: (0, i.jsx)(t0, { targetElementRef: t }) })
            : null,
    });
}
var t2 = n(245604),
    t3 = n(630685),
    t6 = n(272613),
    t5 = n(398884),
    t7 = n(772366),
    t8 = n(728321),
    t4 = n(260509),
    t9 = n(531053),
    ne = n(819638),
    nt = n(260727);
let nn = { origin: { x: -16, y: 0 }, targetWidth: 48, targetHeight: 48, offset: { x: 0, y: 0 } };
function ni(e) {
    (0, tD.L3)(e, async () => {
        let { default: e } = await n.e(117288).then(n.bind(n, 4571));
        return (t) => (0, i.jsx)(e, { ...t });
    });
}
function nr(e) {
    let { onClick: t, ...n } = e,
        r = (0, t3.P)("guild_list_add_server");
    return (0, i.jsx)(G, { ...n, onClick: () => t(r), tooltip: $.intl.string(r ? $.t.riOUtB : $.t.l5WIbf) });
}
function na(e) {
    let { disableTooltip: t, lastTargetNode: n } = e,
        a = (0, _.yK)([tr.A], () => tr.A.getGuildsArray()),
        s = (0, _.bG)([eH.default], () => eH.default.getCurrentUser()),
        l = r.useMemo(() => a.some((e) => (0, t4.bM)(e, s)), [a, s]),
        o = (0, y.re)((e) => (0, y.fD)(e, ne.fc)),
        { analyticsLocations: d } = (0, O.Ay)(),
        c = a.length >= 100 && !(0, t5.Om)(s);
    function u(e) {
        (0, t5.Sn)()
            ? (0, t7.A)({
                  analyticsSource: { page: eY.ThZ.CREATE_JOIN_GUILD_MODAL },
                  analyticsLocation: { page: eY.ThZ.CREATE_JOIN_GUILD_MODAL, section: eY.JJy.GUILD_CAP_UPSELL_MODAL },
                  analyticsLocations: d,
              })
            : t6.A.openCreateGuildModal({ location: "Guild List", ...(e && { joinFirst: e }) });
    }
    let E = { showPill: !1, id: "create-join-button", selected: o, onContextMenu: ni, icon: t2.CirclePlusIcon };
    return (0, i.jsx)("div", {
        className: nt.Uq,
        children: (0, i.jsxs)(t8.A, {
            tutorialId: l ? "create-more-servers" : "create-first-server",
            inlineSpecs: nn,
            position: "right",
            disabled: t,
            children: [
                c
                    ? (0, i.jsx)(G, { ...E, onClick: () => u(!1), tooltip: $.intl.string($.t.l5WIbf) })
                    : (0, i.jsx)(nr, { ...E, onClick: u }),
                null != n &&
                    (0, i.jsx)(t9.Ay, { name: $.intl.string($.t["45xjM5"]), targetNode: n, below: !0, noCombine: !0 }),
            ],
        }),
    });
}
var ns = n(565787),
    nl = n(791606),
    no = n(486020),
    nd = n(183588);
function nc(e) {
    let [t, a] = r.useState(!1),
        s = (0, c.Vd)(`guild-${e.id}`);
    return (0, i.jsx)(M.c, {
        children: (0, i.jsx)(U.A, {
            text: e.name,
            children: (0, i.jsx)(b.Q, {
                className: nd.o,
                selected: t,
                lowerBadge: (0, i.jsx)(ty.fk, { icon: (0, ns.k)(nl.A), disableColor: !0, className: nd._ }),
                children: (0, i.jsx)(eu.j, {
                    name: e.name,
                    onMouseEnter: function () {
                        a(!0);
                    },
                    onMouseLeave: function () {
                        a(!1);
                    },
                    onClick: function () {
                        (0, y.mM)(async () => {
                            let { default: t } = await n.e(642945).then(n.bind(n, 537560));
                            return (n) => (0, i.jsx)(t, { name: e.name, guildId: e.id, ...n });
                        });
                    },
                    icon:
                        null != e.icon
                            ? no.Ay.getGuildIconURL({ id: e.id, icon: e.icon, canAnimate: !1, size: 42 })
                            : null,
                    ...s,
                }),
            }),
        }),
    });
}
var nu = n(696292),
    n_ = n(836480),
    nE = n(726845),
    nA = n(310419),
    nf = n(324580),
    nh = n(221596);
let nI = function (e) {
    let { selected: t, onClick: n, questId: a, className: s, ref: l } = e,
        o = r.useCallback(() => {
            (0, e1.WL)({ source: e3.st.GUILDS_BAR_ICON });
            let e = void 0 !== a ? e3.GlobalDiscoveryTab.QUESTS : nE.A.getField("selectedTab");
            switch (e) {
                case e3.GlobalDiscoveryTab.QUESTS:
                    return (0, e2.transitionToGlobalDiscovery)({
                        tab: e3.GlobalDiscoveryTab.QUESTS,
                        location: nh.rE.DISCOVERY_COMPASS,
                        questContent: nu.u.DISCOVERY_COMPASS,
                        questId: a,
                    });
                case e3.GlobalDiscoveryTab.SERVERS:
                    return (0, e2.transitionToGlobalDiscovery)({
                        tab: e3.GlobalDiscoveryTab.SERVERS,
                        entrypoint: nf.J8.GUILDS_BAR,
                    });
                case e3.GlobalDiscoveryTab.APPS:
                    return (0, e2.transitionToGlobalDiscovery)({
                        tab: e3.GlobalDiscoveryTab.APPS,
                        newSessionState: {
                            entrypoint: { name: nA.sW.GLOBAL_DISCOVERY_BUTTON },
                            restorePreviousView: !0,
                        },
                    });
                default:
                    return (0, e2.transitionToGlobalDiscovery)({ tab: e });
            }
        }, [a]);
    return (0, i.jsx)(G, {
        id: "guild-discover-button",
        ref: l,
        className: s,
        onClick: () => {
            (o(), void 0 !== n && n());
        },
        selected: t,
        tooltip: $.intl.string($.t["4nEZLk"]),
        icon: n_.CompassIcon,
    });
};
var np = n(506774),
    nm = n(509963),
    ng = n(111159),
    nT = n(793943),
    nS = n(448645),
    nN = n(350972),
    nC = n(677056),
    nO = n(526162),
    nR = n(236814);
function nL() {
    let [e, t, n] = (0, _.yK)([eH.default, nO.A], () => [
            nO.A.getCurrentDesktopIcon(),
            nS.Ay.isPremium(eH.default.getCurrentUser()),
            nO.A.canKeepDesktopIconWithoutPremium(nO.A.getCurrentDesktopIcon()),
        ]),
        r = (0, nT.fy)().activePanel === nT.HP.APP_ICON,
        a = (0, nR.gG)(e),
        s = a.id !== nN.LW.DEFAULT && (t || n || r),
        l = (0, i.jsx)(ng.ClydeIcon, { size: "custom", color: "currentColor", width: 24, height: 24 });
    return null != a && s ? (0, i.jsx)(nC.A, { id: a.id, size: nR.N8.SIZE_48 }) : l;
}
var ny = n(531260),
    nD = n(411976),
    nb = n(912309),
    nv = n(400492),
    nP = n(19191),
    nM = n(619921),
    nU = n(659096),
    nw = n(966846),
    nG = n(674378),
    nx = n(394953),
    nk = n(682901),
    nF = n(235079),
    nB = n(222219);
let nV = { origin: { x: -16, y: 0 }, targetWidth: 48, targetHeight: 48, offset: { x: 0, y: 0 } };
function nH(e) {
    let { selected: t, user: n, badge: a, link: s, showProgressBadge: l } = e,
        [o, d] = r.useState(!1),
        [u, _] = r.useState(!1),
        [E, A] = r.useState(null),
        [f, h] = r.useState(0),
        I = (0, c.Vd)("home"),
        p = (0, nT.fy)().activePanel === nT.HP.APP_ICON;
    function m() {
        (A(null), h(0), clearTimeout(E));
    }
    if (null == n) return null;
    let g = $.intl.string($.t.YUU0RF);
    u && (g = np.w.get(eY.wqg) ? $.intl.string($.t["nkq1l+"]) : $.intl.string($.t.Be8Q5E));
    let T = null;
    !t && l && (T = (0, i.jsx)(nm.A, { className: nB.Cp, determineOwnVisibility: !1 }));
    let S = t || o || p,
        N = (0, i.jsx)(b.Q, {
            selected: !0,
            lowerBadge: a > 0 ? (0, eh.wN)(a) : null,
            upperBadge: T,
            lowerBadgeSize: { width: (0, ty.o6)(a) },
            children: (0, i.jsx)(eu.j, {
                onMouseEnter: () => d(!0),
                onMouseLeave: () => d(!1),
                onClick: function () {
                    if (!__OVERLAY__ && (null != E && clearTimeout(E), A(setTimeout(m, 500)), h(f + 1), 15 === f)) {
                        m();
                        let e = !np.w.get(eY.wqg);
                        (np.w.set(eY.wqg, e),
                            e && np.w.set(nF.L, !0),
                            e ? (0, nv.Ak)("discodo") : (0, nv.Ak)("user_leave"),
                            _(!0),
                            setTimeout(() => {
                                _(!1);
                            }, 1e3));
                    }
                },
                selected: S,
                ariaLabel: $.intl.string($.t.YUU0RF),
                "aria-owns": "guild-list-unread-dms",
                "aria-selected": t,
                ...I,
                to: {
                    pathname: s,
                    state: {
                        analyticsSource: {
                            page: eY.liQ.GUILD_CHANNEL,
                            section: eY.JJy.NAVIGATION,
                            object: eY.ZSU.BUTTON_HOME,
                        },
                    },
                },
                children: (0, i.jsx)(nL, {}),
            }),
        });
    return (0, i.jsx)("div", {
        className: nB.Uq,
        "data-guilds-bar-home": !0,
        children: (0, i.jsx)(t8.A, {
            inlineSpecs: nV,
            tutorialId: "friends-list",
            position: "right",
            children: (0, i.jsxs)(M.c, {
                children: [
                    (0, i.jsx)(P.A, { overlay: !0, selected: t, hovered: o }),
                    (0, i.jsx)(U.A, { hideOnClick: !0, text: g, selected: t, children: N }),
                ],
            }),
        }),
    });
}
function nj() {
    let e = (function () {
            let e = (0, eI.A)((e) => e.guildId),
                { pathname: t } = (0, d.zy)(),
                n = t.startsWith(eY.BVt.GUILD_DISCOVERY) || t.startsWith(eY.BVt.GLOBAL_DISCOVERY),
                i = t.startsWith(eY.BVt.GUILD_MEMBER_VERIFICATION("")),
                r = (0, nx.lI)(),
                a = t.startsWith(eY.BVt.CONJURE);
            return null == e && !(n || i || r || a);
        })(),
        t = (0, _.bG)([nw.A, nU.A], () => {
            let e = (0, nm.v)(nw.A.activeItems, nU.A),
                { total: t, progress: n } = nG.zY(e),
                i = nG.uA(n, t);
            return i > 0 && i < 100;
        }),
        n = (0, nb.kX)(),
        r = Object.keys(nk.kb),
        a = (0, ny.A)(),
        { unviewedTrialCount: s, unviewedDiscountCount: l } = (0, _.cf)([nP.A], () => ({
            unviewedTrialCount: nP.A.getUnacknowledgedOffers(r).length,
            unviewedDiscountCount: nP.A.getUnacknowledgedDiscountOffers().length,
        })),
        o = a.fractionalState === nk.xc.NONE ? s + l : 0,
        c = (0, _.bG)([eH.default], () => eH.default.getCurrentUser()),
        u = (0, nD.W)(),
        E = n + o + u,
        A = E === o && o > 0 && n + u === 0,
        f = nM.A.getHomeLink();
    return (
        A && (f = eY.BVt.APPLICATION_STORE),
        (0, i.jsx)(nH, {
            selected: e,
            user: c,
            selectedChannelId: eg.Ay.getChannelId(eY.ME),
            badge: E,
            link: f,
            showProgressBadge: t,
        })
    );
}
var nW = n(545328);
function nY(e) {
    let { fullWidth: t } = e;
    return (0, i.jsx)(M.c, { children: (0, i.jsx)("div", { className: s()(nW.t, { [nW.I]: t }) }) });
}
var nK = n(28863),
    n$ = n(695366),
    nX = n(919638),
    nz = n(818348),
    nq = n(837669);
function nQ() {
    let e = (0, _.bG)([nX.A, tr.A], () => nX.A.unavailableGuilds.filter((e) => null == tr.A.getGuild(e)).length),
        t = (0, c.Vd)("unavailable-guilds-button");
    return e <= 0
        ? null
        : (0, i.jsx)(M.c, {
              children: (0, i.jsx)(U.A, {
                  text: $.intl.format($.t["TnH05/"], { count: e }),
                  children: (0, i.jsx)(nK.Anchor, {
                      href: nz.qF.STATUS,
                      target: "_blank",
                      className: nq.h,
                      "aria-label": $.intl.formatToPlainString($.t["MEpX+2"], { count: e }),
                      ...t,
                      children: (0, i.jsx)(n$.CircleErrorIcon, { color: "currentColor", "aria-hidden": !0 }),
                  }),
              }),
          });
}
var nJ = n(778858),
    nZ = n(945810),
    n0 = n(404373),
    n1 = n(738601),
    n2 = n(313537);
let n3 = [...n1.Nl, eb.Ay];
function n6(e) {
    return (0, _.yK)(
        [en.Ay, nZ.Bt],
        () =>
            e.flatMap((e) => {
                let t = (0, n2.cR)(e);
                return 0 !== t.length && (0, J.cx)(e, "ConjureServerRailState") ? t.map((e) => e.id) : [];
            }),
        [e],
    );
}
function n5(e) {
    return (0, _.cf)(
        n3,
        () =>
            (function (e) {
                let t = 0,
                    n = !1;
                for (let i of e) {
                    let e = en.Ay.getProject(i),
                        r = (0, n1.AK)(i);
                    n ||= "working" === r && null != e && en.Ay.isRailProject(e);
                    let a = (0, n2.fL)(e);
                    null == a || eb.Ay.isMuted(a) || ("unread" === r && (t += Math.max(1, (0, n0.xp)(i))));
                }
                return { unreadCount: t, working: n };
            })(e),
        [e],
    );
}
var n7 = n(36412),
    n8 = n(283001),
    n4 = n(354583);
let n9 = r.memo(function (e) {
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
        { id: p, name: m, color: g, children: T } = h,
        S = r.useMemo(() => T.map((e) => e.id), [T]),
        N = (0, eI.A)((e) => e.guildId),
        C = (0, _.bG)([tu.A], () => tu.A.isFolderExpanded(p)),
        O = (0, n7.y)(h),
        R =
            ((t = (0, _.bG)([tR.A], () => tR.A.getGuildId())),
            (a = h.children.map((e) => e.id)),
            (s = null != t && a.includes(t)),
            (l = !1),
            (o = !1),
            (d = !1),
            (c = (0, _.bG)([tR.A], () => tR.A.getChannelId())),
            (E = null != (u = (0, n4.A)()?.guild_id) && a.includes(u)),
            (A = (0, _.bG)([eT.A], () => null != c && eT.A.hasVideo(c), [c])),
            (f = (0, _.bG)([ep.A], () => ep.A.getCurrentUserActiveStream())),
            s && ((l = !A), (o = A), (d = null != f && null != f.guildId && a.includes(f.guildId))),
            r.useMemo(
                () => ({ audio: l, video: o, screenshare: d, liveStage: E, isCurrentUserConnected: s }),
                [l, o, d, E, s],
            )),
        {
            mentionCount: L,
            isMentionLowImportance: y,
            unread: D,
        } = (0, _.cf)([eL.default], () => ({
            mentionCount: S.map((e) => eL.default.getMentionCount(e)).reduce((e, t) => e + t, 0),
            isMentionLowImportance: S.every((e) => eL.default.getIsMentionLowImportance(e)),
            unread: S.some((e) => eL.default.hasUnread(e)),
        })),
        b = n5(n6(S)).unreadCount,
        v = L + b,
        P = r.useCallback(() => {
            nJ.A.toggleGuildFolderExpand(p);
        }, [p]),
        M = r.useCallback(
            (e) => {
                (0, tD.L3)(e, async () => {
                    let { default: e } = await Promise.all([n.e(114748), n.e(459612)]).then(n.bind(n, 865815));
                    return (t) =>
                        (0, i.jsx)(e, { ...t, folderId: p, folderName: m, folderColor: g, unread: D || v > 0 });
                });
            },
            [p, m, g, D, v],
        );
    return (0, i.jsx)(n8.A, {
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
var ie = n(113494),
    it = n(947832),
    ii = n(821124),
    ir = n(212455);
function ia(e) {
    let t = e?.features.has(eY.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL),
        n = (0, _.bG)(
            [ir.A, eH.default, ti.Ay],
            () => {
                if (null == e) return;
                let t = ir.A.getRequest(e.id),
                    n = eH.default.getCurrentUser();
                if (null == n || null == t || t.userId !== n.id) return;
                let i = ti.Ay.getMember(e.id, t.userId);
                if (!(null != i && !i.isPending) || (0, ii.Oe)(t)) return t.applicationStatus;
            },
            [e],
        );
    return t ? n : void 0;
}
var is = n(347951),
    il = n(34162);
function io(e) {
    return (0, _.bG)([il.A], () => il.A.getGuildMediaState(e), [e]);
}
var id = n(126600),
    ic = n(607399),
    iu = n(164636),
    i_ = n(817281),
    iE = n(879982),
    iA = n(345942),
    ih = n(676279),
    iI = n(866323),
    ip = n(682163),
    im = n(327580);
function ig(e) {
    let { guild: t, show: n, active: r, onAnimationStart: a, onAnimationRest: l } = e,
        o = {},
        d = {};
    ((o.transform = "translate3d(10px, 10px, 0) scale3d(3, 3, 1)"),
        (d.transform = "translate3d(0, 0, 0) scale3d(1, 1, 1)"));
    let c = (0, p.r)(f.A.unsafe_rawColors.BRAND_500).hex(),
        u = (0, p.r)(f.A.unsafe_rawColors.PRIMARY_630).hex();
    r && null == t.icon && ((o.backgroundColor = c), (d.backgroundColor = u));
    let _ = (0, iI.p)(n, { from: o, enter: d, leave: o, config: { duration: 100 }, onStart: a, onRest: l });
    return (0, i.jsx)(i.Fragment, {
        children: _(
            (e, n, r) =>
                n &&
                (0, i.jsx)(
                    "div",
                    {
                        className: im.qc,
                        children: (0, i.jsx)("div", {
                            className: s()(im.MJ, im.L0),
                            style: { margin: 0 },
                            children: (0, i.jsx)(ei.animated.div, {
                                className: im.NG,
                                style: e,
                                children: (0, i.jsx)("div", {
                                    className: im.qJ,
                                    children: (0, i.jsx)("div", {
                                        className: im.jg,
                                        children: (0, i.jsx)(ip.Ay, {
                                            guild: t,
                                            size: ip.Ay.Sizes.SMOL,
                                            className: im.VL,
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
var iT = n(454938),
    iS = n(714991),
    iN = n(554783),
    iC = n(513461),
    iO = n(164956),
    iR = n(624265),
    iL = n(970278),
    iy = n(808728);
let iD = (0, nZ.mj)({
    name: "2026-09-server-tooltip-notification-context",
    kind: "user",
    defaultConfig: { mode: "disabled" },
    variations: { 0: { mode: "disabled" }, 1: { mode: "latest" }, 2: { mode: "mentions_first" } },
});
function ib(e) {
    let { guildId: t, mode: n } = e,
        { channel: r, hasMention: a } = (0, _.cf)(
            [eb.Ay, em.A, eO.A, eD.Ay, eL.default],
            () => {
                if (eb.Ay.isMuted(t)) return { channel: null, hasMention: !1 };
                let e = { latest: null, latestMention: null };
                function i(t) {
                    if (!eD.Ay.hasUnreadOrMentions(t.id)) return;
                    let n = eD.Ay.getMentionCount(t.id);
                    if (!eL.default.shouldCountChannelUnread(t, n)) return;
                    let i = eD.Ay.lastMessageId(t.id);
                    if (null == i) return;
                    let r = { channel: t, hasMention: n > 0, lastMessageId: i };
                    ((null == e.latest || eS.default.compare(i, e.latest.lastMessageId) > 0) && (e.latest = r),
                        r.hasMention &&
                            (null == e.latestMention || eS.default.compare(i, e.latestMention.lastMessageId) > 0) &&
                            (e.latestMention = r));
                }
                let r = em.A.getMutableGuildChannelsForGuild(t);
                for (let e in r) i(r[e]);
                let a = eO.A.getActiveJoinedThreadsForGuild(t);
                for (let e in a)
                    for (let t in a[e]) {
                        let e = em.A.getChannel(t);
                        null != e && i(e);
                    }
                let s = "mentions_first" === n ? (e.latestMention ?? e.latest) : e.latest;
                return { channel: s?.channel ?? null, hasMention: s?.hasMention ?? !1 };
            },
            [t, n],
        ),
        s = (0, tP.Ay)(r);
    return null == r || null == s || 0 === s.length
        ? null
        : (0, i.jsx)(eU.E, {
              className: eK.T5,
              color: "text-muted",
              variant: "body-xs/normal",
              lineClamp: 1,
              children: $.intl.formatToPlainString(a ? $.t.HwW3zP : $.t.FwKQxx, { channelName: s }),
          });
}
function iv(e, t, n) {
    return 0 === t.length
        ? null
        : (0, i.jsxs)("div", {
              className: eK.nM,
              children: [
                  (0, i.jsx)(e, { className: eK.RI, color: "currentColor" }),
                  (0, i.jsx)(eF.Ay, { guildId: n, users: t, max: 6 }),
              ],
          });
}
function iP(e) {
    let { muteConfig: t, className: n } = e;
    return t?.end_time == null
        ? (0, i.jsx)(eU.E, {
              variant: "body-xs/normal",
              color: "text-muted",
              className: n,
              children: $.intl.string($.t.fpKdS1),
          })
        : (0, i.jsx)(tB.A, { muteConfig: t, className: n });
}
function iM(e) {
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
        g,
        T,
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
            [iy.A, iL.A, eb.Ay],
            () => {
                let e = iy.A.getChannels(t)
                        .VOCAL.filter((e) => {
                            let { channel: n } = e;
                            return n.type === eY.rbe.GUILD_VOICE && !eb.Ay.isChannelMuted(t, n.id);
                        })
                        .map((e) => {
                            let { channel: t } = e;
                            return t.id;
                        }),
                    n = Object.values(iL.A.getThreadsForGuild(t)).flatMap((e) => Object.keys(e));
                return [...e, ...n];
            },
            [t],
        )),
        (a = (0, iR.Ay)(t)),
        (l = r.useMemo(() => a.map((e) => e.id), [a])),
        (d = (0, _.bG)([ej.Ay], () => ej.Ay.getVoiceStates(t), [t])),
        (c = (0, _.bG)([tF.A], () => tF.A.getBlockedOrIgnoredIDs())),
        (u = o().flatMap(n, (e) => {
            if (e === R.afkChannelId) return [];
            let t = (d[e] ?? []).map((e) => {
                let { user: t } = e;
                return t;
            });
            return (0, tG.aw)(t, c);
        })),
        (E = (0, _.yK)([eB.A], () =>
            o().flatMap(l, (e) => {
                if (e === R.afkChannelId) return [];
                let t = eB.A.getMutableParticipants(e, eV.ip.SPEAKER)
                    .filter((e) => e.type === eV.wY.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    });
                return (0, tG.aw)(t, c);
            }),
        )),
        (A = (0, _.bG)([eB.A], () => {
            let e = 0;
            for (let t of l) e += eB.A.getParticipantCount(t, eV.ip.AUDIENCE);
            return e;
        })),
        (f = (0, _.yK)(
            [ep.A, eb.Ay],
            () => {
                let e = ep.A.getAllApplicationStreams()
                    .filter((e) => e.guildId === t && !eb.Ay.isChannelMuted(t, e.channelId))
                    .map((e) => e.ownerId);
                return (0, tG.F7)(e, c);
            },
            [c, t],
        )),
        (h = (0, _.yK)(
            [eA.Ay, em.A],
            () => {
                let e = eA.Ay.getEmbeddedActivitiesForGuild(t)
                    .filter((e) => {
                        let t = em.A.getBasicChannel((0, ef.H)(e.location));
                        return t?.type !== eY.rbe.GUILD_SPACE;
                    })
                    .flatMap((e) => Array.from(e.userIds));
                return (0, tG.F7)(e, c);
            },
            [t, c],
        )),
        (I = (0, _.yK)(
            [eH.default],
            () => {
                let e = h.map((e) => eH.default.getUser(e));
                return (0, tG.aw)(e);
            },
            [h],
        )),
        (p = (0, _.yK)([eH.default], () => f.map((e) => eH.default.getUser(e)), [f])),
        (m = u.filter((e) => !f.includes(e.id) && !h.includes(e.id))),
        (g = (0, tG.aw)(m)),
        (T = p.filter((e) => null != e && !h.includes(e.id))),
        (S = (0, _.bG)([tx.A], () => tx.A.getUserAffinitiesMap(), [])),
        (N = r.useMemo(() => (0, tk.L)(g, S, "GuildTooltip - nonBlockedUsers"), [g, S])),
        (C = r.useMemo(() => (0, tk.L)(E, S, "GuildTooltip - stageSpeakers"), [E, S])),
        (O = r.useMemo(() => (0, tk.L)(T, S, "GuildTooltip - streamUsers"), [T, S])),
        {
            voiceUsersToShow: N,
            stageSpeakers: C,
            numStageListeners: A,
            streamUsersToShow: O,
            embeddedActivitiesUsers: r.useMemo(() => (0, tk.L)(I, S, "GuildTooltip - embeddedActivitiesUsers"), [I, S]),
            hasActivity: E.length > 0 || m.length > 0 || T.length > 0 || I.length > 0,
        }),
        M = iv(ew.VoiceNormalIcon, y, L),
        U =
            0 === D.length
                ? null
                : (0, i.jsxs)("div", {
                      className: eK.nM,
                      children: [
                          (0, i.jsx)(eP.StageIcon, { size: "lg", color: "currentColor", className: eK.RI }),
                          (0, i.jsx)(eF.Ay, { guildId: L, users: D, max: 3 }),
                          (0, i.jsxs)("div", {
                              className: eK.GZ,
                              children: [
                                  (0, i.jsx)(eM.HeadphonesIcon, { size: "xs", color: "currentColor" }),
                                  (0, i.jsx)(eU.E, {
                                      className: eK._I,
                                      color: "text-default",
                                      variant: "body-xs/normal",
                                      children: b,
                                  }),
                              ],
                          }),
                      ],
                  }),
        w = iv(eG.ScreenArrowIcon, v, L),
        G = iv(ex.AppsIcon, P, L),
        { isMuted: x, muteConfig: k } = (0, _.cf)(
            [eb.Ay],
            () => ({ isMuted: eb.Ay.isMuted(L), muteConfig: eb.Ay.getMuteConfig(L) }),
            [L],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            U,
            M,
            w,
            G,
            x ? (0, i.jsx)(iP, { muteConfig: k, className: s()(eK.LM, { [eK.Sx]: null != M || null != w }) }) : null,
        ],
    });
}
function iU(e) {
    let { guildJoinRequestStatus: t } = e;
    return (0, i.jsx)(eU.E, {
        className: eK.BT,
        color: "text-default",
        variant: "body-xs/normal",
        children: (function (e) {
            switch (e) {
                case iC.B5.SUBMITTED:
                    return $.intl.string($.t["9KFC98"]);
                case iC.B5.REJECTED:
                    return $.intl.string($.t["TQY/Rd"]);
                case iC.B5.APPROVED:
                    return $.intl.string($.t.WXHcq5);
                default:
                    return $.intl.string($.t.fjHFC8);
            }
        })(t),
    });
}
function iw(e) {
    let { guild: t, isTooltipShown: n, shouldShowNotificationContext: r } = e,
        a = (0, iT.A)(t),
        l = ia(t),
        o = null != l ? (0, i.jsx)(iU, { guildJoinRequestStatus: l }) : null,
        d = (0, i.jsx)(iM, { guild: t }),
        c = (0, _.bG)([iO.A], () => iO.A.isViewingRoles(t.id)),
        u = (0, is.Ig)(t),
        E =
            n && r
                ? (function () {
                      let { mode: e } = iD.getConfig({ location: "GuildTooltip.serverTooltipNotificationContext" });
                      return e;
                  })()
                : "disabled";
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: s()(eK.nM, eK.Dl),
                children: [
                    a
                        ? (0, i.jsx)(iN.A, { disableBoostClick: !0, guild: t, className: eK.WX })
                        : (0, i.jsx)(iS.A, { guild: t, size: 20, className: eK.aL }),
                    (0, i.jsx)("span", { className: s()(eK.cN, eK.NT), children: t.name }),
                ],
            }),
            "disabled" !== E ? (0, i.jsx)(ib, { guildId: t.id, mode: E }) : null,
            u
                ? (0, i.jsx)(eU.E, {
                      className: eK.Ef,
                      color: "text-default",
                      variant: "body-sm/medium",
                      children: $.intl.string($.t["2n0/Fk"]),
                  })
                : null,
            c
                ? (0, i.jsx)(eU.E, {
                      className: eK.BT,
                      color: "text-default",
                      variant: "body-xs/normal",
                      children: $.intl.string($.t["5LwN89"]),
                  })
                : (o ?? d),
        ],
    });
}
function iG(e) {
    let { guild: t, shouldShowNotificationContext: n = !1, disabled: a = !1, children: s } = e,
        { isOpen: l, shouldRenderRichContent: o, handleTooltipShow: d, handleTooltipHide: c } = tH("GuildTooltip"),
        u = r.useMemo(
            () =>
                a
                    ? null
                    : (0, i.jsx)(eU.E, {
                          variant: "body-md/semibold",
                          color: "text-default",
                          className: eK.A_,
                          children: o
                              ? (0, i.jsx)(iw, { guild: t, isTooltipShown: l, shouldShowNotificationContext: n })
                              : t.name,
                      }),
            [a, t, l, o, n],
        );
    return (0, i.jsx)(ek.m, {
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
var ix = n(107385),
    ik = n(191850),
    iF = n(937067);
let iB = { analyticsSource: { page: eY.liQ.GUILD_CHANNEL, section: eY.JJy.CHANNEL_LIST, object: eY.ZSU.CHANNEL } };
function iV(e, t) {
    (0, tD.L3)(e, async () => {
        let { default: e } = await Promise.all([
            n.e(203112),
            n.e(876364),
            n.e(668756),
            n.e(697395),
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
            n.e(795854),
            n.e(870088),
            n.e(300641),
            n.e(571163),
            n.e(586662),
            n.e(831377),
            n.e(709976),
            n.e(750955),
            n.e(953343),
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
            n.e(684019),
            n.e(736663),
            n.e(846900),
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
            n.e(795345),
            n.e(894292),
            n.e(153302),
            n.e(88683),
            n.e(239204),
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
            n.e(658961),
            n.e(9796),
            n.e(952068),
            n.e(768289),
            n.e(772565),
            n.e(169191),
            n.e(79492),
            n.e(533781),
            n.e(328276),
            n.e(592e3),
            n.e(524434),
            n.e(653294),
            n.e(672402),
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
            n.e(270520),
            n.e(384054),
            n.e(731841),
            n.e(544242),
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
            n.e(920955),
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
            n.e(553627),
            n.e(887141),
            n.e(736919),
            n.e(440636),
            n.e(568960),
            n.e(459257),
            n.e(924697),
            n.e(549009),
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
            n.e(483754),
            n.e(865429),
            n.e(806391),
            n.e(880472),
            n.e(921528),
            n.e(214566),
            n.e(707551),
            n.e(726399),
            n.e(424216),
            n.e(842429),
            n.e(304350),
            n.e(22865),
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
            n.e(291532),
            n.e(3069),
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
            n.e(242517),
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
            n.e(708757),
            n.e(863232),
            n.e(517888),
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
            n.e(393336),
            n.e(761597),
            n.e(373122),
            n.e(649408),
            n.e(221856),
            n.e(686367),
            n.e(755936),
            n.e(147662),
            n.e(316344),
            n.e(801012),
            n.e(274501),
            n.e(965152),
            n.e(544571),
            n.e(692990),
            n.e(305834),
            n.e(745959),
            n.e(858529),
            n.e(481987),
            n.e(595653),
            n.e(958038),
            n.e(719466),
            n.e(255087),
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
            n.e(913823),
            n.e(21921),
            n.e(885533),
            n.e(282833),
            n.e(391763),
            n.e(393766),
            n.e(811310),
            n.e(258398),
            n.e(676418),
            n.e(572963),
            n.e(897073),
            n.e(844780),
            n.e(571210),
            n.e(166495),
            n.e(362274),
            n.e(49782),
            n.e(570849),
            n.e(45072),
            n.e(942724),
            n.e(139970),
            n.e(173764),
            n.e(188689),
            n.e(940258),
            n.e(161275),
            n.e(830221),
            n.e(761253),
            n.e(521930),
            n.e(357688),
            n.e(308555),
            n.e(857467),
            n.e(508371),
            n.e(858164),
            n.e(142867),
            n.e(885434),
            n.e(88342),
            n.e(586127),
            n.e(977547),
            n.e(554241),
            n.e(96539),
            n.e(724303),
            n.e(179049),
            n.e(132737),
            n.e(495786),
            n.e(53102),
            n.e(717479),
            n.e(344502),
            n.e(146070),
            n.e(836863),
            n.e(311802),
            n.e(41250),
            n.e(658216),
            n.e(854622),
            n.e(834968),
            n.e(590365),
            n.e(989088),
            n.e(37977),
            n.e(136149),
            n.e(470068),
            n.e(817989),
            n.e(88599),
            n.e(780262),
            n.e(147626),
            n.e(647177),
            n.e(613867),
            n.e(870663),
            n.e(689393),
            n.e(727779),
            n.e(412743),
            n.e(717602),
            n.e(585503),
            n.e(437065),
            n.e(891585),
            n.e(203589),
            n.e(709640),
            n.e(382465),
            n.e(294857),
            n.e(15481),
            n.e(952548),
            n.e(893917),
            n.e(668802),
            n.e(631358),
            n.e(459414),
            n.e(335395),
            n.e(636373),
            n.e(882777),
            n.e(945413),
            n.e(402026),
            n.e(163235),
            n.e(230664),
            n.e(655708),
            n.e(632756),
            n.e(564850),
            n.e(941040),
            n.e(124791),
            n.e(35771),
            n.e(648344),
            n.e(170104),
            n.e(491793),
            n.e(889638),
            n.e(553984),
            n.e(902564),
            n.e(884601),
            n.e(782969),
            n.e(731751),
            n.e(30441),
            n.e(704727),
            n.e(374916),
            n.e(214285),
            n.e(248330),
            n.e(373004),
            n.e(803332),
            n.e(776766),
            n.e(938149),
            n.e(408362),
            n.e(741678),
            n.e(504370),
            n.e(225575),
            n.e(676156),
            n.e(852617),
            n.e(256769),
            n.e(102698),
            n.e(125964),
            n.e(415266),
            n.e(737021),
            n.e(775951),
            n.e(428967),
            n.e(254506),
            n.e(62613),
            n.e(874342),
            n.e(911667),
            n.e(138830),
            n.e(533015),
            n.e(255580),
            n.e(976516),
            n.e(400501),
            n.e(985794),
            n.e(695358),
            n.e(767837),
            n.e(473384),
            n.e(129080),
            n.e(432209),
            n.e(229657),
            n.e(996868),
            n.e(238232),
            n.e(368062),
            n.e(859991),
            n.e(667092),
            n.e(608032),
            n.e(474610),
            n.e(477970),
            n.e(177102),
            n.e(299854),
            n.e(709371),
            n.e(330724),
            n.e(608557),
            n.e(599719),
            n.e(770182),
            n.e(506620),
            n.e(480436),
            n.e(823300),
            n.e(987478),
            n.e(318939),
            n.e(178048),
            n.e(556868),
            n.e(897461),
            n.e(726511),
            n.e(531741),
            n.e(390213),
            n.e(939171),
            n.e(465157),
            n.e(490010),
            n.e(140667),
            n.e(144472),
            n.e(916758),
            n.e(660249),
            n.e(440142),
            n.e(652212),
            n.e(713567),
            n.e(612287),
            n.e(720064),
            n.e(733416),
            n.e(838090),
            n.e(305557),
            n.e(321640),
            n.e(938579),
            n.e(36227),
            n.e(203930),
            n.e(975933),
            n.e(903663),
            n.e(444567),
            n.e(93907),
            n.e(159957),
            n.e(229666),
            n.e(92295),
            n.e(356664),
            n.e(589916),
            n.e(695170),
            n.e(495861),
            n.e(460773),
            n.e(309004),
            n.e(781202),
            n.e(335559),
            n.e(848625),
            n.e(458273),
            n.e(208018),
            n.e(606949),
            n.e(968763),
            n.e(163069),
            n.e(883952),
            n.e(26001),
            n.e(540715),
            n.e(414591),
            n.e(652111),
            n.e(434786),
            n.e(506045),
            n.e(215920),
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
            n.e(439089),
            n.e(982730),
            n.e(800872),
            n.e(728136),
            n.e(452531),
            n.e(338601),
            n.e(276297),
            n.e(365011),
            n.e(201243),
            n.e(950535),
            n.e(573330),
            n.e(269786),
            n.e(113945),
            n.e(65393),
            n.e(343116),
            n.e(368530),
            n.e(275859),
            n.e(583518),
            n.e(978046),
            n.e(807476),
            n.e(680029),
            n.e(127659),
            n.e(428235),
            n.e(610943),
            n.e(637038),
            n.e(635864),
            n.e(396854),
            n.e(447864),
            n.e(710727),
            n.e(966016),
            n.e(745493),
            n.e(507775),
            n.e(66580),
            n.e(794704),
            n.e(582486),
            n.e(760989),
            n.e(184621),
            n.e(466147),
            n.e(462984),
            n.e(369501),
            n.e(303710),
            n.e(256373),
            n.e(50342),
            n.e(409391),
            n.e(645830),
            n.e(134504),
            n.e(810262),
            n.e(479971),
            n.e(995602),
            n.e(346313),
            n.e(553203),
            n.e(218489),
            n.e(838336),
            n.e(115368),
            n.e(636002),
            n.e(343233),
            n.e(248985),
            n.e(569468),
            n.e(836681),
            n.e(756684),
            n.e(419690),
            n.e(583827),
            n.e(553683),
            n.e(495748),
            n.e(138728),
            n.e(708364),
            n.e(138733),
            n.e(753376),
            n.e(452823),
            n.e(280098),
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
            n.e(850298),
            n.e(675933),
            n.e(916373),
            n.e(528038),
            n.e(81398),
            n.e(608464),
            n.e(93685),
            n.e(118504),
            n.e(8458),
            n.e(11810),
            n.e(404332),
            n.e(890152),
            n.e(174337),
            n.e(347871),
            n.e(287973),
            n.e(245368),
            n.e(314863),
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
            n.e(96961),
            n.e(114751),
            n.e(852694),
            n.e(483504),
            n.e(317699),
            n.e(204309),
            n.e(952831),
            n.e(845322),
            n.e(114748),
            n.e(426386),
            n.e(916434),
            n.e(806979),
            n.e(588860),
        ]).then(n.bind(n, 587369));
        return (n) => (0, i.jsx)(e, { ...n, guild: t });
    });
}
let iH = r.memo(function (e) {
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
            isMentionLowImportance: g,
            contextMenu: T = iV,
            draggable: S = !1,
            sorting: N = !1,
            preloadOnClick: C = !0,
            guildJoinRequestStatus: O,
            height: R,
            conjureWorking: L = !1,
            "aria-setsize": y,
            "aria-posinset": D,
        } = e,
        { id: v, parentId: U } = t,
        w = e.upperBadge ?? (0, eh.hP)({ unavailable: I, conjureWorking: L, mediaState: h }),
        G = e.lowerBadge ?? void 0;
    null == G && m > 0
        ? (G =
              (0, eh.wN)(
                  m,
                  g ? f.A.colors.BACKGROUND_MOD_STRONG.css : f.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
              ) ?? void 0)
        : null == G && null != O && (G = (0, eh.eW)({ guildJoinRequestStatus: O }) ?? void 0);
    let x = e.lowerBadgeSize ?? { width: (0, ty.o6)(m) },
        [{ dragging: k }, F] = (0, id.i)({
            type: to.PJ.GUILD,
            item: () => (
                requestAnimationFrame(() => {
                    a?.();
                }),
                { type: t.type, nodeId: t.id }
            ),
            end() {
                (l?.(), (0, i_.um)(ta.Ay.getCompatibleGuildFolders()));
            },
            collect: (e) => ({ dragging: e.isDragging() }),
        }),
        B = (0, c.Vd)(v ?? "", null != U ? 2 : 1),
        [V, H] = r.useState(!1),
        j = !N && V,
        [W, Y] = r.useState(!1),
        [K, X] = r.useState(!1),
        [z] = r.useState(() => new A.J_(70, () => X(!0))),
        q = (0, ih.nr)() && !ic.Fr;
    r.useEffect(() => () => z.cancel(), [z]);
    let Q = r.useCallback(() => {
            null != o ? (0, tU.pX)(o, { state: iB }) : (0, iA.u)(v, { state: iB });
        }, [v, o]),
        J = r.useCallback(() => {
            if (null != o || null == d || I || !C) return;
            let [e] = (0, iE.q)(d.id);
            null != e && eE.A.preload(d.id, e);
        }, [o, d, I, C]),
        Z = (0, iu.bG)([ti.Ay], () => ti.Ay.isCurrentUserGuest(v)),
        ee = r.useCallback(
            (e) => {
                null == d || Z || T(e, d);
            },
            [d, T, Z],
        ),
        et = r.useCallback(
            (e) => {
                "ArrowLeft" === e.key && null != U && document.querySelector(`[aria-owns=folder-items-${U}]`)?.focus();
            },
            [U],
        ),
        en = r.useCallback(
            (e) => {
                e ? z.delay() : (z.cancel(), X(!1));
            },
            [z],
        );
    function er() {
        N || H(!0);
    }
    function ea() {
        N || H(!1);
    }
    let es = r.useCallback(
            (e) => {
                n?.(v, e);
            },
            [v, n],
        ),
        el = (0, p.r)(f.A.modules.guildbar.AVATAR_SIZE);
    if (null == d) return null;
    let eo = d.name;
    if (
        (m > 0
            ? (eo = $.intl.formatToPlainString($.t["/uzRss"], { guildName: d.name, mentions: m }))
            : E && (eo = $.intl.formatToPlainString($.t.lzqe42, { guildName: d.name })),
        null != h)
    ) {
        let e = [];
        (h.activeEvent && e.push($.intl.string($.t.dHvJ2p)),
            h.liveStage && e.push($.intl.string($.t.OO7ndG)),
            h.screenshare && e.push($.intl.string($.t.wsHMZ7)),
            h.video && e.push($.intl.string($.t.BrLCS0)),
            h.audio && e.push($.intl.string($.t.jPBhKy)),
            h.activity && e.push($.intl.string($.t.Y3Gii5)),
            e.length > 0 && (eo = `${eo}, ${e.join(" ")}`));
    }
    L && (eo = `${eo}, ${$.intl.string(ik.default["Y8pS+n"])}`);
    let ed = (0, i.jsx)(ig, {
            guild: d,
            show: K,
            active: _,
            onAnimationStart: function () {
                Y(K);
            },
            onAnimationRest: function () {
                K || Y(!1);
            },
        }),
        ec = q
            ? (0, i.jsx)(eu.j, {
                  ariaLabel: eo,
                  name: d.name,
                  onClick: Q,
                  onMouseEnter: er,
                  onMouseLeave: ea,
                  onMouseDown: J,
                  onContextMenu: ee,
                  onKeyDown: et,
                  icon: (0, t4.Iv)(d, 2 * el, j && u, !0),
                  selected: _ || j,
                  ...B,
                  "aria-setsize": y,
                  "aria-posinset": D,
                  "aria-selected": _,
              })
            : (0, i.jsx)(b.Q, {
                  selected: _,
                  children: (0, i.jsx)("div", {
                      ref: S
                          ? (e) => {
                                F(e);
                            }
                          : void 0,
                      "data-dnd-name": d.name,
                      "data-drop-hovering": K,
                      children: (0, i.jsx)(eu.j, {
                          ariaLabel: eo,
                          name: d.name,
                          onClick: Q,
                          onMouseEnter: er,
                          onMouseLeave: ea,
                          onMouseDown: J,
                          onContextMenu: ee,
                          onKeyDown: et,
                          icon: (0, t4.Iv)(d, 2 * el, j && u, !0),
                          selected: _ || j,
                          ...B,
                          "aria-setsize": y,
                          "aria-posinset": D,
                          "aria-selected": _,
                      }),
                  }),
              }),
        e_ = K || W ? ed : ec,
        eA = (0, i.jsx)(t9.g4, { children: (0, i.jsx)(ix.A, {}) }),
        ef = q
            ? (0, i.jsx)(ei.animated.div, {
                  ref: S
                      ? (e) => {
                            F(e);
                        }
                      : void 0,
                  "data-dnd-name": d.name,
                  style: { scale: null == R ? 1 : R },
                  "data-drop-hovering": K,
                  className: s()(iF.rN, { [iF.p9]: N, [iF.oR]: K, [iF.wH]: K || _ }),
                  children: (0, i.jsx)(b.Q, {
                      selected: !0,
                      upperBadge: w,
                      lowerBadge: G,
                      lowerBadgeSize: x,
                      children: e_,
                  }),
              })
            : (0, i.jsx)(ei.animated.div, {
                  style: { scale: null == R ? 1 : R },
                  className: s()(iF.rN, { [iF.p9]: N, [iF.oR]: K, [iF.wH]: K || _ }),
                  "data-drop-hovering": K,
                  children: (0, i.jsx)(b.Q, {
                      selected: _,
                      maskShape: K || W,
                      upperBadge: w,
                      lowerBadge: G,
                      lowerBadgeSize: x,
                      children: e_,
                  }),
              });
    return (0, i.jsxs)(M.c, {
        ref: es,
        children: [
            (0, i.jsx)(P.A, { overlay: !0, hovered: !k && j, selected: !k && _, unread: !k && E }),
            (0, i.jsx)(iG, {
                guild: d,
                disabled: N,
                isDragging: k,
                shouldShowNotificationContext: !I && (E || m > 0),
                children: k ? eA : ef,
            }),
            S ? (0, i.jsx)(t9.Ay, { name: d.name, targetNode: t, onDragOverChanged: en }) : null,
        ],
    });
});
var ij = n(64061);
let iW = r.memo(function (e) {
    let { guildNode: t, lowerBadge: n } = e,
        a = t.id,
        s = (0, _.bG)([tr.A], () => tr.A.getGuild(a)),
        l = ia(s),
        o = (0, _.bG)([tI.A], () => tI.A.isFocused()),
        d = (0, _.bG)([nX.A], () => nX.A.isUnavailable(a)),
        c = (0, eI.A)((e) => e.guildId),
        u = io(a),
        {
            badge: E,
            unread: A,
            isMentionLowImportance: f,
        } = (0, _.cf)([eL.default], () => ({
            badge: eL.default.getMentionCount(a),
            isMentionLowImportance: eL.default.getIsMentionLowImportance(a),
            unread: eL.default.hasUnread(a),
        })),
        h = n5(n6(r.useMemo(() => [a], [a]))),
        I = E + h.unreadCount,
        p = 0 === E && h.unreadCount > 0,
        m = (0, is.Ig)(s) && 0 === I,
        g = r.useMemo(
            () =>
                null != n
                    ? n
                    : p
                      ? (0, i.jsx)(it.A, { count: I })
                      : m
                        ? (0, i.jsx)("div", {
                              className: ij.j,
                              children: (0, i.jsx)(ie.PauseIcon, {
                                  size: "custom",
                                  color: "currentColor",
                                  className: ij.v,
                                  width: 10,
                                  height: 10,
                              }),
                          })
                        : null,
            [n, p, I, m],
        );
    return (0, i.jsx)(iH, {
        ...e,
        guild: s,
        unavailable: d,
        animatable: o,
        selected: c === a,
        badge: I,
        isMentionLowImportance: f && 0 === h.unreadCount,
        lowerBadge: g,
        conjureWorking: h.working,
        unread: A,
        mediaState: u,
        guildJoinRequestStatus: l,
    });
});
var iY = n(265872),
    iK = n(534514),
    i$ = n(821609),
    iX = n(339350),
    iz = n(475743),
    iq = n(624458),
    iQ = n(408213),
    iJ = n(636449),
    iZ = n(928568);
function i0(e, t) {
    (0, tD.L3)(e, async () => {
        let { default: e } = await n.e(49056).then(n.bind(n, 97187));
        return (n) => (0, i.jsx)(e, { ...n, guild: t });
    });
}
function i1(e) {
    let { guildNode: t } = e,
        n = t.id,
        r = (0, _.bG)([ir.A], () => ir.A.getRequest(n)),
        a = (0, _.bG)([ir.A], () => ir.A.getJoinRequestGuild(n), [n]),
        s = (0, _.bG)([tI.A], () => tI.A.isFocused()),
        l = (0, _.bG)([td.A], () => td.A.getGuildId());
    return null == a
        ? null
        : (0, i.jsx)(iH, {
              guildNode: t,
              guild: a,
              animatable: s,
              draggable: !1,
              selected: n === l,
              preloadOnClick: !1,
              contextMenu: i0,
              lowerBadge:
                  r?.applicationStatus === iC.B5.REJECTED
                      ? (0, eh.eW)({ guildJoinRequestStatus: r.applicationStatus })
                      : void 0,
              route: eY.BVt.GUILD_MEMBER_VERIFICATION(n),
          });
}
var i2 = n(943536);
function i3(e) {
    let { onActivate: t, children: n } = e,
        a = r.useRef(null),
        s = (0, _.bG)([ir.A], () => ir.A.hasJoinRequestCoackmark()),
        l = r.useCallback(() => {
            iQ.Ay.clearCoachmark();
        }, []),
        o = (0, iz.Ay)(s),
        d = r.useRef(null);
    return (
        r.useEffect(() => {
            s && s !== o && (t(), d.current?.ref?.current?.layerRef?.current?.updatePosition());
        }, [d, s, o, t]),
        (0, i.jsxs)("div", {
            className: i2.kL,
            children: [
                (0, i.jsx)(iY.Y, {
                    ref: d,
                    targetElementRef: a,
                    shouldShow: s,
                    renderPopout: () =>
                        (0, i.jsxs)("div", {
                            className: i2.jC,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: i2.Bm,
                                    children: [
                                        (0, i.jsxs)("div", {
                                            className: i2.q3,
                                            children: [
                                                (0, i.jsx)(iK.D, {
                                                    variant: "heading-sm/medium",
                                                    children: $.intl.string($.t["0YV0YE"]),
                                                }),
                                                (0, i.jsx)(eU.E, {
                                                    variant: "body-xs/normal",
                                                    color: "text-muted",
                                                    children: $.intl.string($.t["0UQVDL"]),
                                                }),
                                            ],
                                        }),
                                        (0, i.jsx)(i$.$, {
                                            variant: "primary",
                                            size: "sm",
                                            text: $.intl.string($.t["4r+amb"]),
                                            fullWidth: !0,
                                            onClick: l,
                                        }),
                                    ],
                                }),
                                (0, i.jsx)("div", { className: i2.ed }),
                            ],
                        }),
                    position: "right",
                    animationPosition: "right",
                    align: "top",
                    spacing: 16,
                    children: (e) => (0, i.jsx)("div", { ...e, className: i2.Ne, ref: a }),
                }),
                n,
            ],
        })
    );
}
function i6(e) {
    let { onActivate: t } = e,
        [n, a] = r.useState(!1),
        s = (0, _.bG)([td.A], () => td.A.getGuildId()),
        l = (0, _.bG)([ir.A], () => ir.A.hasFetchedRequestToJoinGuilds),
        o = (0, iZ.A)(),
        d = (0, iz.Ay)(s),
        c = r.useMemo(() => {
            let e = (0, to.xW)({
                folderId: iJ.U.PENDING_JOIN_REQUESTS_FOLDER,
                folderName: $.intl.string($.t["scsU+l"]),
                expanded: n,
                guildIds: [],
            });
            for (let t of o) e.children.push((0, to.EL)(t, e.id));
            return e;
        }, [o, n]);
    r.useEffect(() => {
        n && !l && iq.A.fetchRequestToJoinGuilds();
    }, [n, l]);
    let u = null != s && o.includes(s);
    return (r.useEffect(() => {
        !n && u && d !== s && a(!0);
    }, [n, u, d, s]),
    0 === o.length)
        ? null
        : (0, i.jsx)(i3, {
              onActivate: t,
              children: (0, i.jsx)(n8.A, {
                  folderNode: c,
                  expanded: n,
                  selected: u,
                  draggable: !1,
                  sorting: !1,
                  onExpandCollapse: () => {
                      (a(!n), iQ.Ay.clearCoachmark());
                  },
                  folderButtonSize: "icon",
                  folderButtonContent: (0, i.jsx)("div", {
                      className: i2.rH,
                      children: (0, i.jsx)(iX.HourglassIcon, { size: "sm", color: "currentColor" }),
                  }),
                  renderChildNode: function (e, t, n) {
                      return e.type !== to.PJ.GUILD
                          ? null
                          : (0, i.jsx)(i1, { guildNode: e, "aria-setsize": n, "aria-posinset": t }, e.id);
                  },
              }),
          });
}
function i5(e) {
    let { guildId: t } = e,
        n = r.useMemo(() => (0, to.EL)(t), [t]),
        a = (0, _.bG)([tr.A], () => tr.A.getGuild(t)),
        s = (0, _.bG)([tI.A], () => tI.A.isFocused()),
        l =
            t ===
            (0, eI.A)((e) => {
                let { guildId: t } = e;
                return t;
            }),
        o = io(t);
    return null == a
        ? null
        : (0, i.jsx)(iH, { guildNode: n, guild: a, animatable: s, selected: l, draggable: !1, mediaState: o });
}
var i7 = n(987566);
let i8 = (0, el.Fe)({
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
                n.e(139970),
                n.e(161275),
                n.e(761253),
                n.e(508371),
                n.e(858164),
                n.e(977547),
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
    i4 = (0, ts.uF)() ? 4 : 12 * !(0, ts.cX)();
function i9(e, t, n) {
    let i = e + t,
        r = 2 + t;
    return {
        iconSize: e,
        iconTotalSize: i,
        badgeVisibleBuffer: i - 16,
        separatorSize: r,
        heightBeforeGuilds: i4 + r + n * i,
        bottomInset: 16,
    };
}
function re(e) {
    return e.startsWith(eY.BVt.GUILD_DISCOVERY) || e.startsWith(eY.BVt.GLOBAL_DISCOVERY);
}
class rt {
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
            (0, e4.u9)(this.getVisibleGuildIds));
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
            (null == e && re(window.location.pathname)) ||
            e === eY.sFm.SERVER_DISCOVERY_BADGE ||
            e === eY.sFm.E3_SERVER_DISCOVERY_BADGE
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
        (T.A.updateGuildListScrollTo(t), this.onScroll());
    }, 200);
    _handleScrollThrottled = o().throttle(() => {
        let e = this.scrollerRef.current;
        null != e && this.setIsScrolledToBottom(e.isScrolledToBottom());
    }, 100);
    setNodeRef = (e, t) => {
        this.nodeRefs[e] = t;
    };
}
function rn(e) {
    let { hideDms: t, scrollToTop: n, lurkingGuildIds: r, conjureRailShown: a } = e,
        s = (0, ec.A)(),
        l = (0, i.jsx)(ed, { shown: a }),
        o = (0, _.yK)([tr.A, ti.Ay], () => tr.A.getGuildIds().filter((e) => ti.Ay.isCurrentUserGuest(e))),
        d = r.concat(o),
        { entrypoint: c } = (0, te.X8)({ location: "GuildsBar" });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(nj, {}),
            s ? null : l,
            c === te.RK.SERVER_RAIL_TOP && (0, i.jsx)(i8, {}),
            s ? (0, i.jsx)(eZ, {}) : null,
            s ? l : null,
            !t && (0, i.jsx)(tq, {}),
            (0, i.jsx)(q, {}),
            d.map((e) => (0, i.jsx)(i5, { guildId: e }, e)),
            (0, i.jsx)(i6, { onActivate: n }),
        ],
    });
}
function ri(e) {
    let { guildDiscoveryButton: t, disableAppDownload: n, isOverlay: r, renderTreeNode: a, lurkingGuildIds: s } = e,
        [l] = (0, _.yK)([ta.Ay], () => {
            let e = ta.Ay.getGuildsTree();
            return [e, e.version];
        }),
        o = l.getRoots(),
        d = (0, _.yK)([tn.A], () => tn.A.getGeoRestrictedGuilds()).map((e) =>
            (0, i.jsx)(nc, { id: e.id, name: e.name, icon: e.icon }, e.id),
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(h.B, {
                role: "group",
                "aria-label": $.intl.string($.t["7hB4kg"]),
                gap: "xs",
                children: o.map((e, t) => a(e, t, o.length)),
            }),
            d,
            (0, i.jsx)(nQ, {}),
            r ? null : (0, i.jsx)(na, { disableTooltip: s.length > 0, lastTargetNode: o[o.length - 1] }),
            r ? null : t,
            n ? null : (0, i.jsx)(t1, {}),
        ],
    });
}
function rr(e) {
    var t;
    let n,
        a,
        l,
        o,
        { disableAppDownload: u = ts.isPlatformEmbedded, isOverlay: E = !1, className: h, themeOverride: T } = e,
        [N] = (0, _.yK)([ta.Ay], () => {
            let e = ta.Ay.getGuildsTree();
            return [e, e.version];
        }),
        L = (0, _.bG)([e9.A], () => e9.A.lurkingGuildIds()),
        y = r.useMemo(() => (E ? [] : L), [L, E]),
        D = (0, _.bG)([R.A], () => R.A.isFullscreenInContext()),
        { isSorting: b, startSorting: v, stopSorting: P } = (0, tl.A)(),
        M = r.useRef(!1),
        [U] = r.useState(() => new A.Ep()),
        w = r.useRef(null),
        G = r.useRef(null),
        { ref: x, ...k } = (0, c.$y)(),
        V = (0, I.R7)(),
        [H, j] = r.useState(!1),
        Y = (0, p.r)(f.A.modules.guildbar.AVATAR_SIZE),
        K = (0, p.r)(f.A.space.SPACE_XS),
        X = (0, ec.A)(),
        z =
            ((n = (0, J.TW)("GuildsBar")),
            (a = (0, _.bG)([Z.A], () => Z.A.isPinned())),
            (l = (0, ee.tb)((0, d.zy)().pathname)),
            (o = (0, _.yK)([en.Ay], () => en.Ay.getUnloadedParticipatingProjectIds())),
            r.useEffect(() => {
                n && o.length > 0 && (0, et.tF)(o);
            }, [n, o]),
            n && (l || a)),
        { pathname: q } = (0, d.zy)(),
        { entrypoint: Q } = (0, te.X8)({ location: "GuildsBar" }),
        ei = +!!X + +!!z + +(Q === te.RK.SERVER_RAIL_TOP),
        er = r.useMemo(() => {
            let e = i9(Y, K, 0);
            return new rt(
                N,
                j,
                eY.tEg,
                () => {
                    (w.current?.calculateState(), G.current?.calculateState());
                },
                e,
            );
        }, [Y, K, N]);
    (r.useLayoutEffect(() => {
        er.setSizes(i9(Y, K, ei));
    }, [er, Y, K, ei]),
        r.useEffect(
            () => (
                er.setResizeObserver(),
                () => {
                    er.clearResizeObserver();
                }
            ),
            [er],
        ),
        r.useEffect(() => {
            function e() {
                (w.current?.calculateState(), G.current?.calculateState());
            }
            return (eL.default.addChangeListener(e), () => eL.default.removeChangeListener(e));
        }, []));
    let { analyticsLocations: ea } = (0, O.Ay)(C.A.GUILDS_LIST),
        es = re(q),
        el = r.useRef(null),
        {
            shouldShow: eo,
            handleTakeAction: ed,
            handleClose: eu,
        } = (function (e) {
            let t = (0, e0.f)("GlobalDiscoveryGamesTabCoachmark"),
                [n, i] = (0, B.kn)(e && t ? [F.M.GLOBAL_DISCOVERY_GAMES_TAB_COACHMARK] : [], { bypassAutoDismiss: !0 }),
                a = n === F.M.GLOBAL_DISCOVERY_GAMES_TAB_COACHMARK,
                s = r.useCallback(() => {
                    a && i(W.i.TAKE_ACTION);
                }, [a, i]);
            return {
                shouldShow: a,
                handleTakeAction: s,
                handleClose: r.useCallback(() => {
                    i(W.i.USER_DISMISS);
                }, [i]),
            };
        })(!E);
    ((0, S.u5)(() => {
        if (!M.current && 0 !== N.size) {
            if (!es) {
                let { scrollTop: e } = tt.A.getGuildListDimensions();
                er.scrollTo({ to: e, animate: !1 });
            }
            return ((M.current = !0), () => U.stop());
        }
    }),
        r.useEffect(() => {
            if ((er.setGuildsTree(N), M.current || 0 === N.size)) return;
            let e = eI.A.getState().guildId;
            er.scrollToGuild(e, !1);
            let t = null;
            return eI.A.subscribe((e) => {
                let { guildId: n } = e;
                n !== t && ((t = n), er.scrollToGuild(t, !1));
            });
        }, [N, er]));
    let e_ = r.useCallback(() => {
        er.scrollTo({ to: 0, animate: !1 });
    }, [er]);
    ((t = er.scrollToGuild),
        r.useEffect(() => {
            let e = null;
            function n() {
                let n = td.A.getGuildId();
                n !== e && ((e = n ?? null), t(n ?? null, !1));
            }
            return (
                td.A.addChangeListener(n),
                () => {
                    td.A.removeChangeListener(n);
                }
            );
        }, [t]));
    let eE = r.useCallback(
            function e(t, n, r) {
                switch (t.type) {
                    case to.PJ.FOLDER:
                        return (0, i.jsx)(
                            n9,
                            {
                                folderNode: t,
                                treeVersion: N.version,
                                setNodeRef: er.setNodeRef,
                                draggable: !0,
                                sorting: b,
                                onDragStart: v,
                                onDragEnd: P,
                                renderChildNode: e,
                                "aria-setsize": r,
                                "aria-posinset": void 0 !== n ? n + 1 : void 0,
                            },
                            t.id,
                        );
                    case to.PJ.GUILD:
                        return (0, i.jsx)(
                            iW,
                            {
                                guildNode: t,
                                setRef: er.setNodeRef,
                                draggable: !0,
                                sorting: b,
                                onDragStart: v,
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
            [v, P, b, er.setNodeRef, N.version],
        ),
        eA = (0, i.jsx)(nI, { ref: el, selected: es, className: i7.ai, onClick: ed }),
        ef = Q === te.RK.SERVER_RAIL_BOTTOM;
    return (0, i.jsx)(O.f5, {
        value: ea,
        children: (0, i.jsx)(m.N, {
            theme: T,
            children: (e) =>
                (0, i.jsxs)("nav", {
                    className: s()(i7.iE, h, e, { [i7.R]: D }),
                    "aria-label": $.intl.string($.t.PjnF2t),
                    children: [
                        (0, i.jsx)(tC, {
                            ref: w,
                            isVisible: er.isItemVisible,
                            onJumpTo: er.handleJumpToGuild,
                            className: i7.Xl,
                            barClassName: i7.Sh,
                        }),
                        (0, i.jsxs)("div", {
                            ref: x,
                            ...k,
                            ...V,
                            role: "tree",
                            "aria-multiselectable": !1,
                            className: i7.B2,
                            children: [
                                (0, i.jsxs)(g.Ch, {
                                    className: s()({ [i7.XG]: !0, [i7.qw]: H }),
                                    fade: !0,
                                    experimental_useStack: !0,
                                    gap: "xs",
                                    ref: er.scrollerRef,
                                    onScroll: er.handleScroll,
                                    children: [
                                        (0, i.jsx)(rn, { scrollToTop: e_, lurkingGuildIds: y, conjureRailShown: z }),
                                        (0, i.jsx)(nY, {}),
                                        (0, i.jsx)(ri, {
                                            guildDiscoveryButton: eA,
                                            disableAppDownload: u,
                                            isOverlay: E,
                                            renderTreeNode: eE,
                                            lurkingGuildIds: y,
                                        }),
                                    ],
                                }),
                                ef &&
                                    (0, i.jsxs)("div", {
                                        children: [
                                            (0, i.jsx)(nY, { fullWidth: !0 }),
                                            (0, i.jsx)("div", { className: i7.JU, children: (0, i.jsx)(i8, {}) }),
                                        ],
                                    }),
                            ],
                        }),
                        eo && !D
                            ? (0, i.jsx)(e8, {
                                  discoverButtonRef: el,
                                  scrollerRef: er.scrollerRef,
                                  onClick: ed,
                                  onRequestClose: eu,
                              })
                            : null,
                        (0, i.jsx)(tC, {
                            reverse: !0,
                            ref: G,
                            isVisible: er.isItemVisible,
                            onJumpTo: er.handleJumpToGuild,
                            className: s()(i7.LZ, { [i7.CH]: !E && !ef, [i7.c0]: !E && ef }),
                            barClassName: i7.Sh,
                        }),
                    ],
                }),
        }),
    });
}
let ra = r.memo(
    function (e) {
        let t = (0, N.A)("guildsnav");
        return (0, i.jsx)(c.hD, { navigator: t, children: (0, i.jsx)(rr, { ...e }) });
    },
    (e, t) => !1 === t.isVisible || (0, E.A)(e, t),
);
