let i;
(n.d(t, { B: () => rq, i: () => rJ }), n(321073));
var l,
    s,
    r = n(477900),
    a = n(582128),
    o = n(435558),
    d = n.n(o),
    c = n(837381),
    u = n(887129),
    h = n(17928),
    m = n(661531),
    g = n(715828),
    A = n(312138),
    f = n(475825),
    p = n(707554),
    C = n(140735),
    E = n(38021),
    x = n(951001),
    N = n(820284),
    _ = n(949152),
    S = n(739822),
    I = n(192308),
    b = n(999903),
    j = n(44757),
    v = n(97587),
    G = n(838533),
    y = n(79843),
    R = n(466152),
    M = n(5180),
    T = n(770376),
    L = n(924985),
    U = n(734057),
    D = n(769765),
    P = n(71393),
    O = n(576705),
    w = n(967198),
    V = n(543465),
    H = n(652215);
let k = "DRAGGABLE_GUILD_CHANNEL";
function B(e) {
    let t = e.getItem();
    return null == t || null == t.isChannelDrag
        ? { sorting: !1, sortingType: null, sortingPosition: null, sortingParent: null }
        : {
              sorting: !0,
              sortingType: t.type,
              sortingPosition: e.isOver() && e.canDrop() ? t.position : null,
              sortingParent: e.isOver() && e.canDrop() ? t.parentId : null,
          };
}
function F(e) {
    return a.memo(function (t) {
        let { channel: i, position: l } = t,
            [s, a] = (0, _.H)(
                () => ({
                    accept: k,
                    drop: (e) =>
                        (function (e, t) {
                            let { channel: n, position: i } = e,
                                l = w.A.getGuildId(),
                                s = (0, j.QO)((0, G.A)(l, t.id), t.position, n, i, t.channelList);
                            if (null == s) return;
                            let r = (0, G.A)(l, t.id);
                            if (null == r) return;
                            let a = D.A.getCategories(l),
                                o = (0, j.RL)(r, (0, G.A)(l, s.referenceId), s.parentId, a);
                            (0, R.A)(l, r, s.parentId, o);
                        })({ channel: i, position: l }, e),
                    canDrop: (e) =>
                        (function (e, t) {
                            let { channel: n, position: i } = e,
                                l = U.A.getChannel(t.id);
                            if (null == l) return !1;
                            let s = (0, j.QO)(U.A.getChannel(t.id), t.position, n, i, t.channelList);
                            if (null == s) return !1;
                            if ((0, M.ai)(w.A.getGuildId())) return !0;
                            if (V.Ay.isFavorite(t.guildId, n.id)) return !1;
                            let r = P.A.getGuild(t.guildId);
                            if (null == r) return !1;
                            let a = U.A.getChannel(s.parentId),
                                o = (0, v.Ay)((0, v.Fd)(l), r),
                                d = (0, v.Ay)(a, r);
                            return o && d;
                        })({ channel: i, position: l }, e),
                    collect: B,
                }),
                [i, l],
            ),
            [, o, d] = (0, S.i)(
                () => ({
                    type: k,
                    canDrag: () =>
                        (function (e) {
                            let t = w.A.getGuildId(),
                                i = (0, y.A)(e, t);
                            if (null == i) return !0;
                            switch (i.reason) {
                                case "no-permission":
                                default:
                                    return !1;
                                case "opt-in-channels":
                                    return (
                                        (0, T.A)() &&
                                            (0, I.openModalLazy)(async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e("57729"),
                                                    n.e("24848"),
                                                ]).then(n.bind(n, 354643));
                                                return (t) => (0, r.jsx)(e, { ...t });
                                            }),
                                        !1
                                    );
                                case "pinned-channel":
                                    return (
                                        (0, I.openModalLazy)(async () => {
                                            let { default: t } = await n.e("280545").then(n.bind(n, 933752));
                                            return (n) => (0, r.jsx)(t, { ...n, guildId: i.guild.id, channelId: e.id });
                                        }),
                                        !1
                                    );
                            }
                        })(i),
                    item: () =>
                        (function (e, t) {
                            let { id: n, parent_id: i, guild_id: l, type: s } = e,
                                r = w.A.getGuildId(),
                                a = D.A.getCategories(r);
                            return {
                                isChannelDrag: !0,
                                id: n,
                                position: t,
                                parentId: i,
                                type: s,
                                channelList: (0, b.A)(a._categories, a, (e) => {
                                    let { channel: t } = e;
                                    return t.type === H.rbe.GUILD_CATEGORY && null != a[t.id] && 0 === a[t.id].length
                                        ? !!(0, M.ai)(r) ||
                                              (O.A.can(H.xBc.MANAGE_CHANNELS, t) && O.A.can(H.xBc.VIEW_CHANNEL, t))
                                        : !L.A.isCollapsed(t.parent_id);
                                }),
                                guildId: l,
                            };
                        })(i, l),
                }),
                [i, l],
            );
        return (0, r.jsx)(e, {
            ...t,
            ...s,
            connectChannelDropTarget: a,
            connectChannelDragSource: o,
            connectDragPreview: d,
        });
    });
}
var z = n(775602),
    K = n(793574),
    W = n(688810),
    Y = n(806163),
    X = n(277867),
    J = n(751841),
    q = n(371169),
    Z = n(260498),
    $ = n(352571),
    Q = n(313537),
    ee = n(802645);
let et = [],
    en = [Z.Ay, ...ee.F4];
var ei = n(915089),
    el = n(554146),
    es = n(866665),
    er = n(939249),
    ea = n(789645),
    eo = n(62010),
    ed = n(687966),
    ec = n(131607),
    eu = n(652793),
    eh = n(976860),
    em = n(746080),
    eg = n(49999),
    eA = n(135570),
    ef = n(105292),
    ep = n(275833),
    eC = n(964306);
let eE = a.memo(function (e) {
    let { guildId: t, selected: i } = e,
        [l, s] = (0, ec.ww)([el.M.GAME_SERVER_HOSTING_NEW_BADGE], t),
        o = l === el.M.GAME_SERVER_HOSTING_NEW_BADGE,
        d = a.useCallback(() => {
            (s(eg.i.USER_DISMISS), (0, eh.pX)(H.BVt.CHANNEL(t, em.VV.GAME_SERVERS)));
        }, [t, s]),
        c = a.useCallback(
            (e) => {
                (e.stopPropagation(),
                    (0, I.openModalLazy)(async () => {
                        let { default: e } = await n.e("726702").then(n.bind(n, 758909));
                        return (n) => (0, r.jsx)(e, { ...n, guildId: t });
                    }));
            },
            [t],
        ),
        u = (0, r.jsxs)("div", {
            className: ep.c,
            children: [
                (0, r.jsx)("div", {
                    className: eC.Xs,
                    children: (0, r.jsx)(es.m, {
                        text: ef.intl.string(ef.t.fgq1gs),
                        position: "top",
                        children: (0, r.jsx)(er.D, {
                            onClick: c,
                            "aria-label": ef.intl.string(ef.t.fgq1gs),
                            children: (0, r.jsx)(ea.P, { size: "xs", color: "currentColor", className: eC.gE }),
                        }),
                    }),
                }),
                o &&
                    (0, r.jsx)("div", {
                        className: eC.yW,
                        children: (0, r.jsx)(eo.E, { type: "new", variant: "primary" }),
                    }),
            ],
        });
    return (0, r.jsx)(eu.G, {
        className: eC.Ki,
        id: `game-server-empty-${t}`,
        renderIcon: (e) => (0, r.jsx)(ed.GameControllerIcon, { size: "md", className: e, color: "currentColor" }),
        text: ef.intl.string(eA.default.vCzwM7),
        selected: i,
        onClick: d,
        trailing: u,
    });
});
var ex = n(361158),
    eN = n(696943),
    e_ = n(186111);
let eS = a.memo(function (e) {
    let { guildId: t, selected: n } = e,
        i = (0, I.useHasAnyModalOpen)(),
        l = (0, h.bG)([e_.A], () => e_.A.hasLayers()),
        s = (0, ex.xr)((e) => e.fullScreenLayers.length > 0),
        [o, d] = (0, ec.ww)([el.M.GAME_SERVER_HOSTING_NEW_BADGE], t),
        c = o === el.M.GAME_SERVER_HOSTING_NEW_BADGE,
        [u, m] = (0, ec.ww)(i || l || s || !c ? [] : [el.M.GAME_SERVER_HOSTING_NEW_COACHMARK], t),
        g = a.useCallback(
            (e) => {
                (d(e), m(e));
            },
            [d, m],
        ),
        A = a.useCallback(() => {
            (g(eg.i.USER_DISMISS), (0, eh.pX)(H.BVt.CHANNEL(t, em.VV.GAME_SERVERS)));
        }, [t, g]),
        f = a.useRef(null),
        p = u === el.M.GAME_SERVER_HOSTING_NEW_COACHMARK,
        C = a.useCallback(() => (0, r.jsx)(eN.mn, { channelRowRef: f, guildId: t, markAsDismissed: g }), [t, g]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eu.G, {
                ref: f,
                id: `game-server-${t}`,
                renderIcon: (e) =>
                    (0, r.jsx)(ed.GameControllerIcon, { size: "md", className: e, color: "currentColor" }),
                text: ef.intl.string(eA.default.vCzwM7),
                selected: n,
                onClick: A,
                trailing: c ? (0, r.jsx)(eo.E, { type: "new", variant: "primary" }) : null,
            }),
            p && C(),
        ],
    });
});
var eI = n(177953),
    eb = n(812993),
    ej = n(624458),
    ev = n(844944),
    eG = n(513461),
    ey = n(663997),
    eR = n(221950);
function eM(e) {
    let { guild: t, selected: n } = e,
        i = (0, h.bG)([O.A], () => O.A.can(H.xBc.KICK_MEMBERS, t)),
        l = (0, h.bG)([ev.A], () => ev.A.getSubmittedGuildJoinRequestTotal(t.id)),
        s = i ? (l ?? 0) : 0;
    a.useEffect(() => {
        i &&
            t.features.has(H.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
            t.features.has(H.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
            ej.A.fetchGuildJoinRequests({ guildId: t.id, status: eG.B5.SUBMITTED, limit: ey.L });
    }, [i, t]);
    let o = a.useCallback(() => {
        (0, eR.aZ)(t.id);
    }, [t.id]);
    return (0, r.jsx)(eu.G, {
        id: `members-${t.id}`,
        renderIcon: (e) => (0, r.jsx)(eI.n, { size: "md", color: "currentColor", className: e }),
        text: ef.intl.string(ef.t.oclz3Z),
        selected: n,
        onClick: o,
        trailing: s > 0 ? (0, r.jsx)(eb.hV, { count: s }) : null,
    });
}
var eT = n(332837),
    eL = n(942857),
    eU = n(593673),
    eD = n(313627),
    eP = n(43105),
    eO = n(93675),
    ew = n(880098);
function eV(e) {
    let t,
        n,
        { targetElementRef: i, guildName: l, isAdmin: s, isPublished: a, onCheckItOut: o, onDismiss: d } = e;
    return (
        s
            ? a
                ? ((t = ef.intl.string(ew.default.EIuDzZ)), (n = ef.intl.string(ew.default.ev0nwK)))
                : ((t = ef.intl.string(ew.default.O2eErX)), (n = ef.intl.string(ew.default["5W7HIh"])))
            : ((t = ef.intl.string(ew.default.PE4Cid)),
              (n = ef.intl.formatToPlainString(ew.default.Uf5Ve7, { serverName: l }))),
        (0, r.jsx)(eP.A, {
            targetElementRef: i,
            title: t,
            body: n,
            graphic: {
                type: "rive",
                rive: eO.f,
                aspectRatio: "16/9",
                props: { dataBinding: { on: !0 }, withReducedMotion: "halt", fit: "contain" },
            },
            actions: [{ text: ef.intl.string(ef.t.RzWDqY), variant: "primary", onClick: o }],
            shouldShow: !0,
            position: "right",
            align: "top",
            alignmentStrategy: "edge",
            caretConfig: { align: "start" },
            scrollBehavior: "close",
            onRequestClose: d,
        })
    );
}
var eH = n(151098);
function ek(e) {
    let { guild: t, selected: i } = e,
        l = (0, eL.A)(),
        [s, o] = (0, ec.kn)(l ? [] : [el.M.GUILD_SPACE_COACHMARK], { bypassAutoDismiss: !0 }),
        d = s === el.M.GUILD_SPACE_COACHMARK,
        c = a.useRef(null),
        u = (0, eD.mN)(t),
        h = t.guildSpaceSettings?.publish_status === eU.B.PUBLISHED,
        m = a.useCallback(() => {
            (o(eg.i.USER_DISMISS), (0, eh.pX)(H.BVt.CHANNEL(t.id, em.VV.GUILD_SPACE)));
        }, [t.id, o]),
        g = a.useCallback(() => {
            (o(eg.i.TAKE_ACTION), (0, eh.pX)(H.BVt.CHANNEL(t.id, em.VV.GUILD_SPACE)));
        }, [t.id, o]),
        A = a.useCallback(() => {
            o(eg.i.USER_DISMISS);
        }, [o]),
        f = a.useCallback(
            (e) => {
                (e.stopPropagation(),
                    (0, I.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([
                            n.e("37786"),
                            n.e("303807"),
                            n.e("952831"),
                            n.e("421410"),
                        ]).then(n.bind(n, 643065));
                        return (n) => (0, r.jsx)(e, { ...n, guildId: t.id });
                    }));
            },
            [t.id],
        ),
        p = d ? (0, r.jsx)(eo.E, { type: "new", variant: "primary" }) : null,
        C =
            u && !h
                ? (0, r.jsxs)("div", {
                      className: eH.c,
                      children: [
                          (0, r.jsx)("div", {
                              className: eC.Xs,
                              children: (0, r.jsx)(es.m, {
                                  text: ef.intl.string(ef.t.R9GHya),
                                  position: "top",
                                  children: (0, r.jsx)(er.D, {
                                      onClick: f,
                                      "aria-label": ef.intl.string(ef.t.R9GHya),
                                      children: (0, r.jsx)(ea.P, {
                                          size: "xs",
                                          color: "currentColor",
                                          className: eC.gE,
                                      }),
                                  }),
                              }),
                          }),
                          null != p ? (0, r.jsx)("div", { className: eC.yW, children: p }) : null,
                      ],
                  })
                : p;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eu.G, {
                ref: c,
                className: u ? eC.Ki : void 0,
                id: `guild-space-tab-${t.id}`,
                renderIcon: (e) => (0, r.jsx)(eT.HomeIcon, { size: "md", color: "currentColor", className: e }),
                text: ef.intl.string(ef.t["04IVMq"]),
                selected: i,
                onClick: m,
                trailing: C,
            }),
            d
                ? (0, r.jsx)(eV, {
                      targetElementRef: c,
                      guildName: t.name,
                      isAdmin: u,
                      isPublished: h,
                      onCheckItOut: g,
                      onDismiss: A,
                  })
                : null,
        ],
    });
}
var eB = n(581007),
    eF = n(522435),
    ez = n(285406),
    eK = n(582904),
    eW = n(419534),
    eY = n(395504),
    eX = n(503698),
    eJ = n.n(eX),
    eq = n(172218),
    eZ = n(695366),
    e$ = n(104510),
    eQ = n(544048),
    e0 = n(868652),
    e1 = n(379229),
    e3 = n(37725),
    e9 = n(914732),
    e2 = n(828162),
    e6 = n(877624),
    e5 = n(549996),
    e7 = n(959456),
    e4 = n(247806);
function e8(e) {
    let { indicator: t } = e;
    if (null == t) return null;
    switch (t.type) {
        case e1.cD.WARNING:
            return (0, r.jsx)(eZ.E, { color: m.A.colors.STATUS_WARNING, size: "sm" });
        case e1.cD.UNREAD:
            return (0, r.jsx)(eb.hV, { count: t.count });
        default:
            return null;
    }
}
let te = { animation: { BEG: 0, END: 75 }, LOOP: { BEG: 76, END: 376 } },
    tt = a.memo(function (e) {
        let { guildId: t, selected: i } = e,
            l = (0, e9.Ay)(t),
            { showHighlight: s, markAsDismissed: o } = (function () {
                let e = (0, e5.c)(e6.C.GUILD_BOOST_TAB_BANNER),
                    t = null != e && "guildBoostTabBanner" === e.properties.properties.oneofKind,
                    [n, i] = (0, ec.Cc)(t ? el.M.GUILD_BOOST_TAB_HIGHLIGHT : null, e?.promotionId ?? "");
                return { showHighlight: n === el.M.GUILD_BOOST_TAB_HIGHLIGHT, markAsDismissed: i };
            })(),
            { showNewBadgeOnRow: d, dismissNewBadgeIfShown: c } = (0, e3.A)(
                t,
                l?.indicator != null || l?.popout != null,
            ),
            u = a.useCallback(() => {
                (c(),
                    (0, e0.Zm)(t),
                    (0, e2.A)(t, K.A.GUILD_POWERUPS_CHANNEL_LIST_ROW),
                    l?.popout?.markAsDismissed(eg.i.INDIRECT_ACTION));
            }, [t, c, l]),
            [m, g] = a.useState(!1),
            A = (0, eq.K)(g, 0),
            f = (0, I.useModalsStore)(I.hasAnyModalOpenSelector),
            p = (0, h.bG)([e_.A], () => e_.A.hasLayers()),
            C = (0, ex.xr)((e) => e.fullScreenLayers.length > 0),
            E = !m || f || p || C,
            x = a.useCallback(() => {
                if (l?.popout == null || E) return null;
                switch (l?.popout?.type) {
                    case e1.o.LEVEL_REACHED:
                        return (0, r.jsx)(eN.HW, { guildId: t, channelRowRef: A, ...l.popout });
                    case e1.o.PERKS_AVAILABLE:
                        return (0, r.jsx)(eN.UB, { guildId: t, channelRowRef: A, ...l.popout });
                    case e1.o.PERKS_PURCHASABLE:
                        return (0, r.jsx)(eN.lw, { guildId: t, channelRowRef: A, ...l.popout });
                    case e1.o.NEW_PERK_AVAILABLE:
                        return (0, r.jsx)(eN.bo, { guildId: t, channelRowRef: A, ...l.popout });
                    case e1.o.BOOST_TO_UNLOCK:
                        return (0, r.jsx)(eN.Gw, { guildId: t, channelRowRef: A, ...l.popout });
                    case e1.o.EXPIRING_PERK:
                        return (0, r.jsx)(eN.Mr, { guildId: t, channelRowRef: A, ...l.popout });
                    case e1.o.GAME_SERVER_HOSTING_AVAILABLE:
                    case e1.o.GAME_SERVER_HOSTING_GUILD_ELIGIBLE:
                        return (0, r.jsx)(eN.jz, { guildId: t, channelRowRef: A, ...l.popout });
                    case e1.o.GAME_SERVER_NEW_GAMES:
                        return (0, r.jsx)(eN.YX, { guildId: t, channelRowRef: A, ...l.popout });
                    default:
                        return (0, r.jsx)("div", {});
                }
            }, [t, l?.popout, A, E]);
        a.useEffect(() => {
            i && s && o(eg.i.AUTO_DISMISS);
        }, [i, s, o]);
        let N = l?.popout != null || s,
            [_, S] = a.useState(null);
        a.useEffect(() => {
            N || S(null);
        }, [N]);
        let b = a.useCallback((e) => {
            S(e);
        }, []);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(eu.G, {
                    ref: A,
                    className: e4.kL,
                    id: `skill-trees-${t}`,
                    renderIcon: (e) => (0, r.jsx)(e$._, { size: "md", className: e, color: "currentColor" }),
                    background:
                        N &&
                        (0, r.jsx)("div", {
                            className: e4.Fi,
                            children: (0, r.jsx)(eQ.t, {
                                nextScene: null == _ ? "animation" : "LOOP",
                                className: e4.UU,
                                sceneSegments: te,
                                importData: () => n.e("867807").then(n.t.bind(n, 217762, 19)),
                                onScenePlay: b,
                                rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
                            }),
                        }),
                    text: (0, r.jsx)("span", {
                        className: eJ()({ [e4.A7]: l?.showUnread === !0 }),
                        children: ef.intl.string(e7.default.yv3DJJ),
                    }),
                    selected: i,
                    onClick: u,
                    showUnread: l?.showUnread === !0,
                    trailing: d
                        ? (0, r.jsx)(eo.E, { type: "new", variant: "primary" })
                        : (0, r.jsx)(e8, { indicator: l?.indicator }),
                }),
                x(),
            ],
        });
    });
var tn = n(29477),
    ti = n(717421),
    tl = n(834730),
    ts = n(442433),
    tr = n(230135),
    ta = n(73153);
let to = {};
class td extends h.Ay.PersistedStore {
    static displayName = "GuildBoostingProgressBarPersistedStore";
    static persistKey = "PremiumGuildProgressBarPersistedStore";
    initialize(e) {
        null != e && (to = e);
    }
    getState() {
        return to;
    }
    getCountForGuild(e) {
        return to[e];
    }
}
let tc = new td(ta.h, {
    APPLIED_GUILD_BOOST_COUNT_UPDATE: function (e) {
        let { guildId: t, premiumCount: n } = e;
        to = { ...to, [t]: n };
    },
    APPLIED_GUILD_BOOST_COUNT_RESET: function () {
        to = {};
    },
});
var tu = n(147925),
    th = n(363487),
    tm = n(568065);
function tg(e) {
    return (0, a.useMemo)(() => {
        if (null == e) return 0;
        let t = e?.features.has(H.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) === !0 ? 0 : H.M2T[H.TVA.TIER_3],
            n = Object.values(tm.sy),
            i = Object.values(tm.YV);
        return (
            n.concat(i).forEach((n) => {
                null == n.includedInLevel && (n.isEnabled?.(e.id) ?? !0) && (t += n.boostPrice);
            }),
            t
        );
    }, [e]);
}
var tA = n(196577);
let tf = (e) => {
    let { appliedBoostCount: t, maxBoostCount: n, premiumSubscriberCount: i, className: l, ref: s } = e,
        o = t >= n,
        d = Math.min((t / n) * 100, 100),
        c = `calc(${d}% - 4px)`,
        [u, h] = (0, ti.z)(
            () => ({ width: t === i ? c : "calc(0% - 0px)", config: { tension: 250, damping: 5, mass: 1 } }),
            "respect-motion-settings",
            [t, i],
        );
    return (
        a.useEffect(() => {
            h({ width: c });
        }, [c, h]),
        (0, r.jsxs)("div", {
            ref: s,
            className: tA.hQ,
            children: [
                (0, r.jsx)("div", { className: eJ()(tA.L$, l) }),
                (0, r.jsx)(tn.animated.div, { className: eJ()(tA.qB, { [tA.mu]: d <= 5 }), style: u }),
                (0, r.jsxs)("div", {
                    className: tA.FS,
                    children: [
                        (0, r.jsxs)("div", {
                            className: tA.Ui,
                            children: [
                                (0, r.jsx)(tl.E, {
                                    className: tA.Qq,
                                    variant: "text-xs/semibold",
                                    children: ef.intl.string(e7.default.NI6Ihe),
                                }),
                                i >= n &&
                                    (0, r.jsx)(tl.E, {
                                        className: tA.Qq,
                                        variant: "text-xs/semibold",
                                        children: "\uD83C\uDF89",
                                    }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: tA.Ui,
                            children: [
                                (0, r.jsx)(tl.E, {
                                    className: eJ()(tA.Qq, tA.ue),
                                    variant: "text-xs/semibold",
                                    children: o
                                        ? ef.intl.formatToPlainString(e7.default["Ehpq+7"], { appliedBoostCount: t })
                                        : ef.intl.formatToPlainString(e7.default["/rbPDs"], {
                                              appliedBoostCount: t,
                                              maxBoostCount: n,
                                          }),
                                }),
                                (0, r.jsx)(tu.A, {
                                    width: 12,
                                    height: 12,
                                    direction: tu.A.Directions.RIGHT,
                                    className: eJ()(tA.Qq, tA.ue, tA.OW),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
};
function tp(e) {
    let { guild: t, withMargin: i } = e,
        l = tg(t),
        s = (0, th.A)(t.id),
        o = a.useCallback(() => {
            (0, e2.A)(t.id, K.A.GUILD_BOOSTING_SIDEBAR_DISPLAY);
        }, [t.id]),
        d = (0, h.bG)([tc], () => tc.getCountForGuild(t.id) ?? 0);
    a.useEffect(() => {
        d !== t.premiumSubscriberCount && (0, tr.u)(t.id, t.premiumSubscriberCount);
    }, [t.id, d, t.premiumSubscriberCount]);
    let c = a.useCallback(
        (e) => {
            s &&
                (0, ts.L3)(e, async () => {
                    let { default: e } = await n.e("371728").then(n.bind(n, 709843));
                    return (n) => (0, r.jsx)(e, { ...n, guild: t });
                });
        },
        [s, t],
    );
    return (0, r.jsx)(er.D, {
        "aria-label": void 0,
        role: "button",
        focusProps: { offset: { left: 10, right: 4 } },
        onClick: o,
        className: eJ()(tA.kL, { [tA.aF]: i }),
        onContextMenu: c,
        children: (0, r.jsx)(tf, {
            appliedBoostCount: d,
            maxBoostCount: l,
            premiumSubscriberCount: t.premiumSubscriberCount,
        }),
    });
}
function tC(e) {
    let { guild: t, withMargin: n } = e;
    return (0, r.jsx)(tp, { guild: t, withMargin: n });
}
tf.displayName = "GuildPowerupsProgressBarUI";
var tE = n(455234),
    tx = n(181079),
    tN = n(607567),
    t_ = n(403362),
    tS = n(996439),
    tI = n(935208),
    tb = n(63995),
    tj = n(518769);
function tv(e) {
    let { voiceState: t, userNick: n, user: i } = e,
        l = (0, tN.hz)(t, n);
    return { user: i, voiceState: t, nick: n, comparator: l };
}
var tG = n(787541),
    ty = n(79858),
    tR = n(600761),
    tM = n(95701),
    tT = n(72314),
    tL = n(808728),
    tU = n(297469),
    tD = n(960755),
    tP = n(633965),
    tO = n(702841),
    tw = n(246338),
    tV = n(41200),
    tH = n(831617),
    tk = n(589603),
    tB = n(496767),
    tF = n(134413),
    tz = n(202776),
    tK = n(701785),
    tW = n(101611),
    tY = n(473529),
    tX = n(978165),
    tJ = n(960253),
    tq = n(770666),
    tZ = n(508654),
    t$ = n(521427),
    tQ = n(871123),
    t0 = n(281405),
    t1 = n(3026),
    t3 = n(821609),
    t9 = n(499373),
    t2 = n(559106),
    t6 = n(847374),
    t5 = n(285796),
    t7 = n(983851),
    t4 = n(914430),
    t8 = n(47167),
    ne = n(485947),
    nt = n(970853),
    nn = n(93055),
    ni = n(349828),
    nl = n(760658),
    ns = n(551851),
    nr = n(391507);
function na(e) {
    e.stopPropagation();
}
function no(e) {
    let { label: t, onClick: n, tabIndex: i } = e;
    return (0, r.jsx)(es.m, {
        text: t,
        children: (0, r.jsx)(er.D, {
            className: eJ()(nr.c9, nr.ih),
            onClick: n,
            tabIndex: i,
            role: "button",
            "aria-label": t,
            children: (0, r.jsx)(t9.T, { size: "xs", color: "currentColor", className: nr.hs }),
        }),
    });
}
let nd = F(
        a.memo(function (e) {
            let t,
                {
                    channel: i,
                    connectChannelDragSource: l,
                    connectChannelDropTarget: s,
                    disableManageChannels: o,
                    position: d,
                    sortingPosition: u,
                    hideIcon: m,
                    children: g,
                } = e,
                A = (0, h.bG)([V.Ay], () => V.Ay.isChannelMuted(i.getGuildId(), i.id)),
                f = (0, h.bG)([L.A], () => L.A.isCollapsed(i.id)),
                p = (0, h.bG)([O.A], () => O.A.can(H.xBc.MANAGE_CHANNELS, i)),
                C = (0, t8.Ay)(i);
            t = null != u ? (d > u ? nr.mU : nr.TR) : nr.fx;
            let E = a.useCallback(() => {
                    f ? (0, t4.fh)(i.id) : (0, t4.Gv)(i.id);
                }, [i.id, f]),
                x = a.useCallback(
                    (e) => {
                        if ("null" !== i.id) {
                            let t = P.A.getGuild(i.getGuildId());
                            null != t &&
                                (0, ts.L3)(e, async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("926132"),
                                        n.e("393336"),
                                        n.e("391763"),
                                        n.e("955557"),
                                        n.e("676156"),
                                        n.e("603998"),
                                        n.e("550033"),
                                        n.e("198415"),
                                        n.e("412255"),
                                        n.e("63340"),
                                        n.e("430997"),
                                        n.e("379995"),
                                        n.e("591377"),
                                        n.e("35723"),
                                        n.e("566378"),
                                        n.e("715675"),
                                    ]).then(n.bind(n, 740438));
                                    return (n) => (0, r.jsx)(e, { ...n, channel: i, guild: t });
                                });
                        }
                    },
                    [i],
                ),
                N = a.useCallback(() => {
                    let e = i.type === H.rbe.GUILD_CATEGORY ? null : i.type,
                        t = i.getGuildId();
                    null != t &&
                        (0, I.openModalLazy)(async () => {
                            let { default: l } = await Promise.all([
                                n.e("377476"),
                                n.e("403032"),
                                n.e("746309"),
                                n.e("778799"),
                                n.e("844780"),
                                n.e("470068"),
                                n.e("203589"),
                                n.e("692513"),
                                n.e("460773"),
                                n.e("208018"),
                                n.e("589916"),
                                n.e("120379"),
                                n.e("309254"),
                                n.e("819193"),
                                n.e("507775"),
                                n.e("662068"),
                                n.e("358608"),
                                n.e("951219"),
                            ]).then(n.bind(n, 83262));
                            return (n) =>
                                (0, r.jsx)(l, {
                                    ...n,
                                    channelType: e,
                                    guildId: t,
                                    categoryId: "null" !== i.id ? i.id : null,
                                });
                        });
                }, [i]),
                _ = (function (e, t) {
                    let n = (0, h.bG)([tx.A], () => tx.A.autoAddJoinedThreads),
                        { isAtLimit: i } = (0, nn.ft)();
                    return n &&
                        i &&
                        null != t &&
                        (0, M.ai)(e.getGuildId()) &&
                        e.type === H.rbe.GUILD_CATEGORY &&
                        t.trim().toLowerCase() === ni.A.toLowerCase()
                        ? { label: ef.intl.string(nl.default.WsUrMD), tooltip: ef.intl.string(nl.default.dW9Kov) }
                        : null;
                })(i, C),
                S = (0, nt.A)(i);
            null == S && p && !o && (S = { label: ef.intl.string(ef.t["fUYU+j"]), perform: N });
            let { role: b, tabIndex: j, ...v } = (0, c.rm)(i.id),
                G = a.useRef(null),
                y = a.useRef(null),
                R = (0, r.jsxs)("li", {
                    className: t,
                    "data-dnd-name": C,
                    children: [
                        (0, r.jsx)(t2.vN, {
                            focusTarget: G,
                            ringTarget: y,
                            offset: { left: 4, right: 4 },
                            children: (0, r.jsxs)("div", {
                                ref: y,
                                className: eJ()(nr.Ki, nr.iE, { [nr.yZ]: f, [nr.SU]: A, [nr.vk]: !0 }),
                                onContextMenu: x,
                                children: [
                                    (0, r.jsxs)(er.D, {
                                        innerRef: G,
                                        className: nr.rb,
                                        tabIndex: j,
                                        ...v,
                                        onClick: E,
                                        "aria-label": ef.intl.formatToPlainString(ef.t.y5l3J2, { categoryName: C }),
                                        "aria-expanded": !f,
                                        focusProps: { enabled: !1 },
                                        children: [
                                            (0, r.jsx)(ne.A, {
                                                className: nr.UU,
                                                children: (0, r.jsx)(t1.A, { children: C }),
                                            }),
                                            null != _
                                                ? (0, r.jsx)("span", {
                                                      className: nr.qS,
                                                      children: (0, r.jsx)(es.m, {
                                                          asContainer: !0,
                                                          text: _.tooltip,
                                                          children: (0, r.jsx)(eo.E, {
                                                              type: { text: _.label },
                                                              variant: "secondary",
                                                          }),
                                                      }),
                                                  })
                                                : null,
                                            m
                                                ? null
                                                : (0, r.jsx)(t6.a, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: nr.Kk,
                                                  }),
                                        ],
                                    }),
                                    (0, r.jsx)("div", {
                                        onClick: na,
                                        className: nr.Y_,
                                        children:
                                            null != S
                                                ? (0, r.jsx)(no, { label: S.label, onClick: S.perform, tabIndex: j })
                                                : null,
                                    }),
                                ],
                            }),
                        }),
                        g,
                    ],
                });
            return null != s && null != l ? s(l(R)) : R;
        }),
    ),
    nc = a.memo(function (e) {
        let { name: t, onDismiss: n, className: i } = e;
        return (0, r.jsx)("li", {
            className: eJ()(i, nr.fx),
            children: (0, r.jsxs)("div", {
                className: eJ()(nr.Ki, nr._V),
                children: [
                    (0, r.jsx)("div", {
                        className: nr.rb,
                        children: (0, r.jsx)(ne.A, { className: nr.UU, children: (0, r.jsx)(t1.A, { children: t }) }),
                    }),
                    null != n
                        ? (0, r.jsx)(es.m, {
                              asContainer: !0,
                              text: ef.intl.string(ef.t["5qNmsU"]),
                              children: (0, r.jsx)(er.D, {
                                  className: nr.r,
                                  onClick: n,
                                  children: (0, r.jsx)(t5.a, { size: "md", color: "currentColor", className: nr.X8 }),
                              }),
                          })
                        : null,
                ],
            }),
        });
    }),
    nu = a.memo(function (e) {
        let { category: t } = e,
            n = (0, h.bG)([ns.A], () => ns.A.isVoiceCategoryCollapsed(t.guild.id)),
            i = a.useCallback(() => {
                var e, i;
                n
                    ? ((e = t.guild.id), ta.h.dispatch({ type: "VOICE_CATEGORY_EXPAND", guildId: e, expand: !0 }))
                    : ((i = t.guild.id), ta.h.dispatch({ type: "VOICE_CATEGORY_COLLAPSE", guildId: i, expand: !1 }));
            }, [t.guild.id, n]);
        return (0, r.jsx)("div", {
            className: nr.oA,
            children: (0, r.jsx)(t3.$, {
                variant: "secondary",
                fullWidth: !0,
                onClick: i,
                icon: t7.H,
                text: n ? ef.intl.string(ef.t["/eB9Bg"]) : ef.intl.string(ef.t.Q2gPWl),
            }),
        });
    }),
    nh = a.memo(function (e) {
        let { category: t, channel: n } = e,
            i = (0, h.bG)([ns.A], () => ns.A.isVoiceCategoryCollapsed(t.guild.id));
        return i || null == n || n.record.type === H.rbe.GUILD_CATEGORY
            ? i
                ? (0, r.jsx)("li", {
                      className: nr.fx,
                      children: (0, r.jsx)("div", {
                          className: eJ()(nr.Ki, nr._V),
                          children: (0, r.jsx)(ne.A, {
                              className: nr.UU,
                              children: (0, r.jsx)(t1.A, { children: ef.intl.string(ef.t["V/u9Dy"]) }),
                          }),
                      }),
                  })
                : null
            : (0, r.jsx)("div", { style: { height: 16 } });
    }),
    nm = a.memo(function (e) {
        let { channel: t } = e,
            n = (0, t8.Ay)(t);
        return (0, r.jsx)("li", {
            className: nr.fx,
            children: (0, r.jsx)("div", {
                className: eJ()(nr.Ki, nr._V),
                children: (0, r.jsx)(ne.A, { className: nr.UU, children: (0, r.jsx)(t1.A, { children: n }) }),
            }),
        });
    });
var ng = n(728321),
    nA = n(244083);
let nf = { origin: { x: -36, y: 7 }, targetWidth: 232, targetHeight: 40, offset: { x: 0, y: 0 } };
var np = n(906659);
let nC = a.memo(function (e) {
    let {
            sectionIndex: t,
            guild: n,
            guildChannels: i,
            guildChannelsVersion: l,
            selectedChannelId: s,
            disableManageChannels: o,
        } = e,
        d = a.useCallback(() => {
            let e = i.getCategoryFromSection(i.recentsSectionNumber);
            if (null == e) return;
            let t = null,
                l = e.getShownChannelAndThreadIds();
            (null != s && l.includes(s) && (t = (0, eW.xb)(i)), (0, eW.DD)(n.id, l, t));
        }, [n.id, s, i, l]),
        { density: c } = (0, E.wR)(),
        u = "compact" === c ? 8 : 12;
    switch (t) {
        case tU.PU:
            return (0, r.jsx)("div", { style: { height: u } });
        case tU.bK:
            if (n.features.has(H.GuildFeatures.HUB)) return null;
            return (0, r.jsx)("div", { style: { height: u } });
        case tU.HP:
            return (0, r.jsx)(nc, { name: ef.intl.string(ef.t.mlPMCy) });
        case i.recentsSectionNumber:
            return (0, r.jsx)(nc, { name: ef.intl.string(ef.t.gKcrqM), onDismiss: d });
        case i.voiceChannelsSectionNumber: {
            let e = i.getCategoryFromSection(i.voiceChannelsSectionNumber);
            if (null == e || e.isEmpty()) return null;
            let n = i.getChannelFromSectionRow(t, 0)?.channel;
            return (0, r.jsxs)(a.Fragment, {
                children: [(0, r.jsx)("div", { className: np.ts }), (0, r.jsx)(nh, { category: e, channel: n })],
            });
        }
        case tU.TF: {
            let e = i.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, r.jsx)(nd, {
                channel: e.record,
                position: e.position,
                disableManageChannels: o,
                children: (0, r.jsx)(ng.A, {
                    inlineSpecs: nf,
                    arrowAlignment: nA.oN.TOP,
                    tutorialId: "organize-by-topic",
                    position: "right",
                }),
            });
        }
        default: {
            let e = i.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, r.jsx)(nd, { channel: e.record, position: e.position, disableManageChannels: o });
        }
    }
});
var nE = n(104171),
    nx = n(186369),
    nN = n(970812),
    n_ = n(147036);
function nS(e, t, n) {
    return {
        hasDivider:
            !(function (e, t) {
                if (t === tU.PU) {
                    let t = e.getGuildActionSection().getRows();
                    return (
                        (1 === t.length && t[0] === t0.n.GUILD_PREMIUM_PROGRESS_BAR) ||
                        e.getGuildActionSection().isEmpty()
                    );
                }
                return 0 === e.getSections(!1)[t];
            })(e, n) &&
            (n === tU.PU ||
                ((0, M.ai)(e.id)
                    ? n !== e.getSections(!1).length - 1
                    : n === tU.HP ||
                      (!!t && n !== tU.bK && (n === e.recentsSectionNumber || (e.voiceChannelsSectionNumber, !1))))),
        canHaveVoiceSummary:
            n !== tU.PU &&
            n !== tU.HP &&
            n !== tU.bK &&
            n !== e.recentsSectionNumber &&
            n !== e.voiceChannelsSectionNumber,
    };
}
let nI = a.memo(function (e) {
        let { guildChannels: t, guildChannelsVersion: n } = e,
            i = a.useMemo(() => t.getCategoryFromSection(t.voiceChannelsSectionNumber), [t, n]);
        return null == i ? null : (0, r.jsx)(nu, { category: i });
    }),
    nb = a.memo(function (e) {
        let {
                sectionIndex: t,
                guildChannels: n,
                guildChannelsVersion: i,
                voiceStates: l,
                guildId: s,
                selectedChannelId: o,
                selectedVoiceChannelId: d,
                optInEnabled: c,
            } = e,
            { hasDivider: u, canHaveVoiceSummary: m } = a.useMemo(() => nS(n, c, t), [n, c, t, i]),
            g = a.useMemo(() => (t === tU.PU ? null : n.getCategoryFromSection(t)), [n, t, i]),
            A = (0, eY.jN)(s),
            { enableWaveformIcon: f } = (0, nx.b)(s, "ChannelListSectionFooter"),
            p = (0, h.yK)(
                [V.Ay],
                () => {
                    if (null == g || !g.isCollapsed || !m) return [];
                    let e = g.getChannelRecords(),
                        t = [];
                    for (let n of e) {
                        if (!n.isGuildVocal()) continue;
                        let e = V.Ay.isChannelOrParentOptedIn(s, n.id);
                        (!A || e) && t.push(n);
                    }
                    return t;
                },
                [g, m, s, A],
            ),
            C = a.useMemo(
                () => (0, n_.fK)({ channels: p, selectedChannelId: o, selectedVoiceChannelId: d, voiceStates: l }),
                [p, o, d, l],
            );
        if (t === n.voiceChannelsSectionNumber) return (0, r.jsx)(nI, { guildChannels: n, guildChannelsVersion: i });
        let E = u ? (0, r.jsx)("div", { className: np.ts }) : null;
        return m && 0 !== C.length
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)("div", {
                          className: np.qz,
                          children: (0, r.jsx)(nE.Ay, {
                              renderIcon: !0,
                              users: C,
                              max: 8,
                              showUserPopout: !0,
                              guildId: s,
                              renderLeadingIcon: f
                                  ? (e) => (0, r.jsx)(nN.A, { color: "currentColor", className: eJ()(e, eC.Gj) })
                                  : void 0,
                          }),
                      }),
                      E,
                  ],
              })
            : E;
    });
var nj = n(683063),
    nv = n(289873),
    nG = n(805942),
    ny = n(722701),
    nR = n(731084),
    nM = n(381991),
    nT = n(845079),
    nL = n(738601),
    nU = n(800202),
    nD = n(947832),
    nP = n(573163),
    nO = n(308528),
    nw = n(534890),
    nV = n(262763),
    nH = n(499211),
    nk = n(406704),
    nB = n(747926),
    nF = n(977997),
    nz = n(807632),
    nK = n(37411);
function nW(e) {
    let { thread: t, tabIndex: n } = e,
        i = (0, nz.YG)(t),
        l = (0, nz.IO)(t),
        s = (0, nk._M)(t);
    return i && l && s ? (0, r.jsx)(nY, { thread: t, tabIndex: n }) : null;
}
function nY(e) {
    let { thread: t, tabIndex: n } = e,
        i = (0, h.bG)([nF.A], () => nF.A.isInChannel(t.id), [t.id]),
        { needSubscriptionToAccess: l } = (0, nH.A)(t.id),
        s = a.useCallback(() => {
            nV.A.handleVoiceConnect({ channel: t, connected: i, needSubscriptionToAccess: l, locked: !1 });
        }, [t, i, l]),
        o = a.useCallback(() => {
            (0, nB.JA)(t, !0, nK.H9.CHANNEL_LIST);
        }, [t]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(es.m, {
                asContainer: !0,
                text: ef.intl.string(ef.t["96ANUN"]),
                children: (0, r.jsx)(er.D, {
                    className: eC.Xs,
                    onClick: s,
                    tabIndex: n,
                    "aria-label": ef.intl.string(ef.t["96ANUN"]),
                    children: (0, r.jsx)(t7.H, { size: "xs", color: "currentColor", className: eC.gE }),
                }),
            }),
            (0, r.jsx)(es.m, {
                asContainer: !0,
                text: ef.intl.string(ef.t.ZXxLQg),
                children: (0, r.jsx)(er.D, {
                    className: eC.Xs,
                    onClick: o,
                    tabIndex: n,
                    "aria-label": ef.intl.string(ef.t.ZXxLQg),
                    children: (0, r.jsx)(nw.ChatIcon, { size: "xs", color: "currentColor", className: eC.gE }),
                }),
            }),
        ],
    });
}
var nX = n(897898),
    nJ = n(152007);
function nq(e) {
    return null != e && e > 0;
}
var nZ = n(166444),
    n$ = n(182637),
    nQ = n(428689),
    n0 = n(525093);
function n1(e) {
    let { total: t, users: n, videoLimit: i } = e;
    return (0, r.jsxs)("div", {
        className: n0.iE,
        children: [
            (0, r.jsxs)(tl.E, {
                tag: "span",
                color: "text-subtle",
                variant: "text-xs/medium",
                className: eJ()(n0.VV, { [n0.Ki]: i, [n0.$G]: n >= 100 }),
                children: [
                    i ? (0, r.jsx)(nQ.VideoIcon, { size: "md", color: "currentColor", className: n0.LB }) : null,
                    n.toString().padStart(2, "0"),
                ],
            }),
            (0, r.jsx)(tl.E, {
                tag: "span",
                color: "text-subtle",
                variant: "text-xs/medium",
                className: eJ()(n0.X5, { [n0.$G]: t >= 100 }),
                children: t.toString().padStart(2, "0"),
            }),
        ],
    });
}
function n3(e) {
    let { channel: t, video: n, userCount: i } = e,
        { limit: l } = (0, n$.A)(t),
        s = -1,
        a = !1;
    return (
        t.userLimit > 0 && (s = t.userLimit),
        n && l > 0 && ((a = s < 0 || l < s), (s = s > 0 ? Math.min(s, l) : l)),
        (0, r.jsx)(n1, { users: i, total: s, videoLimit: a })
    );
}
var n9 = n(146630);
function n2(e) {
    let { mentionsCount: t, isMentionLowImportance: n } = e;
    return (0, r.jsx)("div", {
        className: n9.R,
        "aria-hidden": !0,
        children: (0, r.jsx)(eb.hV, {
            count: t,
            color: n ? m.A.colors.BACKGROUND_MOD_STRONG.css : m.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
        }),
    });
}
var n6 = n(588224),
    n5 = n(672812),
    n7 = n(447199);
function n4(e) {
    let { thread: t, countInVoice: n, hasVideo: i, mentionCount: l, isMentionLowImportance: s } = e,
        a = n > 0 && t.userLimit > 0,
        o = nq(l);
    return a || o
        ? (0, r.jsxs)("div", {
              className: eC.yW,
              children: [
                  a ? (0, r.jsx)(n3, { userCount: n, video: i, channel: t }) : null,
                  o ? (0, r.jsx)(n2, { mentionsCount: l, isMentionLowImportance: s }) : null,
              ],
          })
        : null;
}
function n8(e) {
    let { style: t, withGuildIcon: n, inverted: i } = e,
        l = { className: eJ()(n7.GI, { [n7.a7]: n }, { [n7.BJ]: i }), style: t },
        { density: s } = (0, E.wR)();
    switch (s) {
        case "cozy":
            return (0, r.jsxs)("svg", {
                ...l,
                width: "10",
                height: "20",
                viewBox: "0 0 10 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    (0, r.jsx)("path", {
                        d: "M0 15H2c0 1.6569 1.3432 3 3 3v2c-2.7614 0-5-2.2386-5-7ZM0 4H2V15H0V4ZM2 4H0C0 3.4477.4477 3 1 3c.5523 0 1 .4477 1 1Z",
                        fill: "currentColor",
                    }),
                    (0, r.jsx)("path", {
                        d: "M6 20V18H9v2H6Zm3 0V18s1 0 1 1-1 1-.989 1.004ZM6 18v2H5V18H6Z",
                        fill: "currentColor",
                    }),
                ],
            });
        case "compact":
            return (0, r.jsxs)("svg", {
                ...l,
                width: "10",
                height: "19",
                viewBox: "0 0 10 19",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    (0, r.jsx)("path", {
                        d: "M0 11H2c0 1.6569 1.3432 3 3 3v2c-2.7614 0-5-2.2386-5-7ZM0 0H2V11H0V0ZM2 0H0C0-.5523.4477-1 1-1c.5523 0 1 .4477 1 1Z",
                        fill: "currentColor",
                    }),
                    (0, r.jsx)("path", {
                        d: "M6 16V14H9v2H6Zm3 0V14s1 0 1 1-1 1-.989 1.004ZM6 14v2H5V14H6Z",
                        fill: "currentColor",
                    }),
                ],
            });
        default:
            return (0, r.jsxs)("svg", {
                ...l,
                width: "10",
                height: "19",
                viewBox: "0 0 10 19",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    (0, r.jsx)("path", {
                        d: "M0 13H2c0 1.6569 1.3432 3 3 3v2c-2.7614 0-5-2.2386-5-7ZM0 2H2V13H0V2ZM2 2H0C0 1.4477.4477 1 1 1c.5523 0 1 .4477 1 1Z",
                        fill: "currentColor",
                    }),
                    (0, r.jsx)("path", {
                        d: "M6 18V16H9v2H6Zm3 0V16s1 0 1 1-1 1-.989 1.004ZM6 16v2H5V16H6Z",
                        fill: "currentColor",
                    }),
                ],
            });
    }
}
let ie = a.memo(function (e) {
    let { thread: t, isSelectedChannel: i, isSelectedVoice: l, isLast: s, withGuildIcon: o } = e,
        d = (0, h.bG)([tN.Ay], () => tN.Ay.getVoiceStatesForChannel(t), [t]),
        u = (0, h.bG)([nF.A], () => nF.A.hasVideo(t.id)),
        m = (0, t8.Ay)(t),
        {
            unread: g,
            mentionCount: A,
            isMentionLowImportance: f,
        } = (0, h.cf)([nP.Ay], () => ({
            unread: nP.Ay.hasUnread(t.id),
            mentionCount: nP.Ay.getMentionCount(t.id),
            isMentionLowImportance: nP.Ay.getIsMentionLowImportance(t.id),
        })),
        p = (0, h.bG)([nJ.A], () => nJ.A.isMuted(t.id)),
        C = a.useCallback(
            (e) => {
                (0, nB.JA)(t, !e.shiftKey, nK.H9.CHANNEL_LIST);
            },
            [t],
        ),
        E = a.useCallback(() => {
            nO.A.preload(t.guild_id, t.id);
        }, [t.guild_id, t.id]),
        x = a.useCallback(
            (e) => {
                (0, nX.A)(e, t);
            },
            [t],
        ),
        N = a.useCallback(
            (e) => {
                let i = U.A.getChannel(t.id);
                null != i &&
                    (0, ts.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("926132"),
                            n.e("393336"),
                            n.e("391763"),
                            n.e("955557"),
                            n.e("947502"),
                            n.e("603998"),
                            n.e("343266"),
                            n.e("965789"),
                            n.e("691671"),
                            n.e("412255"),
                            n.e("63340"),
                            n.e("896804"),
                            n.e("697367"),
                            n.e("703869"),
                            n.e("51212"),
                            n.e("584615"),
                        ]).then(n.bind(n, 612826));
                        return (t) => (0, r.jsx)(e, { ...t, channel: i });
                    });
            },
            [t.id],
        ),
        _ = null == d ? 0 : d.length,
        { role: S, ...I } = (0, c.rm)(t.id),
        b = a.useRef(null),
        j =
            A > 0
                ? ef.intl.formatToPlainString(ef.t["ZL7+I6"], { channelName: m, mentionCount: A })
                : g
                  ? ef.intl.formatToPlainString(ef.t.YlVvmc, { channelName: m })
                  : ef.intl.formatToPlainString(ef.t["0nZpiF"], { channelName: m });
    return (0, r.jsxs)("li", {
        role: S,
        className: eJ()(eC.fx, { [eC.wH]: i }),
        children: [
            (0, r.jsx)(n8, { withGuildIcon: o }),
            s
                ? null
                : (0, r.jsx)(n8, {
                      withGuildIcon: o,
                      inverted: !0,
                      style: { transform: "rotateX(180deg) translateY(-9px)" },
                  }),
            (0, r.jsx)(t2.vN, {
                focusTarget: b,
                ringTarget: b,
                offset: { top: 2, bottom: 2, right: 4 },
                children: (0, r.jsxs)("div", {
                    className: eJ()(eC.Ki, n5.iE, n5.ZS, {
                        [n5.J1]: i,
                        [n5.F4]: !i && p,
                        [n5.V2]: !p && !i && g,
                        [n5.lY]: o,
                    }),
                    onMouseDown: E,
                    onContextMenu: N,
                    children: [
                        !g || p || i ? null : (0, r.jsx)("div", { className: eJ()(n5.gy, n5.WS) }),
                        (0, r.jsx)(er.D, {
                            ...I,
                            innerRef: b,
                            className: n5.nf,
                            onClick: C,
                            onAuxClick: x,
                            "aria-label": j,
                            focusProps: { enabled: !1 },
                            children: (0, r.jsxs)("div", {
                                className: eJ()(n5.Y5, n5.__invalid_threadMainContent),
                                children: [
                                    (0, r.jsx)(tl.E, {
                                        variant: "text-sm/medium",
                                        color: "none",
                                        className: n5.UU,
                                        children: (0, r.jsx)(t1.A, { "aria-hidden": !0, children: m }),
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: n5.Y_,
                                        onClick: nZ.dG,
                                        onKeyDown: nZ.dG,
                                        children: [
                                            (0, r.jsx)(n4, {
                                                thread: t,
                                                countInVoice: _,
                                                hasVideo: u,
                                                mentionCount: A,
                                                isMentionLowImportance: f,
                                            }),
                                            (0, r.jsx)(nW, { thread: t, tabIndex: I.tabIndex }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(n6.A, {
                channel: t,
                collapsed: !l && 1 !== d.length,
                collapsedMax: 6,
                voiceStates: d,
                isThread: !0,
            }),
        ],
    });
});
var it = n(790782),
    ii = n(809526),
    il = n(512656),
    is = n(162052);
let ir = { transform: "rotateX(180deg) translateY(-9px)" };
function ia(e) {
    let { projectId: t } = e,
        { label: n, detail: i } = (function (e) {
            let {
                    activity: t,
                    compacting: n,
                    saving: i,
                    publishing: l,
                } = (0, h.cf)(
                    [nG.A, ny.A],
                    () => ({
                        activity: nG.A.getThinkingActivity(e),
                        compacting: nG.A.isCompacting(e),
                        saving: nG.A.isSaving(e),
                        publishing: ny.A.getPublishStatus(e)?.publishing === !0,
                    }),
                    [e],
                ),
                s = t?.text ?? "",
                r = a.useMemo(
                    () =>
                        (function (e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 160,
                                n = e.split(/\n\s*\n/);
                            for (let e = n.length - 1; e >= 0; e--) {
                                let i = n[e]
                                    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
                                    .replace(/^\s{0,3}#{1,6}\s+/gm, "")
                                    .replace(/^\s*(?:[-*+]|\d+[.)])\s+/gm, "")
                                    .replace(/[`*~]|__/g, "")
                                    .replace(/\s+/g, " ")
                                    .trim();
                                if ("" === i) continue;
                                if (i.length <= t) return i;
                                let l = i.slice(-t),
                                    s = l.indexOf(" ");
                                return `\u{2026}${-1 !== s && s < t / 4 ? l.slice(s + 1) : l}`;
                            }
                            return null;
                        })(s),
                    [s],
                );
            return { label: (0, nR.Dy)({ activity: t, compacting: n, saving: i, publishing: l }), detail: r };
        })(t);
    return (0, r.jsx)(nj.u, {
        title: null != i ? n : void 0,
        body: i ?? n,
        lineClamp: 4,
        position: "right",
        ariaHidden: !0,
        children: (0, r.jsx)("div", {
            className: eC.yW,
            "aria-hidden": !0,
            children: (0, r.jsx)(nv.y, { type: nv.t.SPINNING_CIRCLE_SIMPLE, className: il.u1, itemClassName: il.pu }),
        }),
    });
}
let io = a.memo(function (e) {
    let { project: t, guildId: i, isLast: l, selected: s } = e,
        o = t.id,
        d = (0, nL.yX)(o),
        u = (0, h.bG)([nP.Ay], () => nP.Ay.getMentionCount(o, it.P.CONJURING_PROJECT), [o]),
        m = "working" === d,
        g = "unread" === d && !s,
        { role: A, ...f } = (0, c.rm)(`conjure-project-${o}`),
        p = a.useRef(null),
        C = a.useCallback(() => (0, nM.A)(o, "project_list"), [o]),
        { onContextMenu: E, importInput: x } = (function (e, t) {
            let i = e.id,
                { onExport: l, onImport: s, importInput: o } = (0, nU.A)(e);
            return {
                onContextMenu: a.useCallback(
                    (e) => {
                        (0, ts.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                n.e("341432"),
                                n.e("463461"),
                                n.e("356675"),
                                n.e("824126"),
                                n.e("387634"),
                                n.e("916519"),
                                n.e("46233"),
                                n.e("664918"),
                                n.e("520825"),
                                n.e("241989"),
                                n.e("36243"),
                                n.e("819351"),
                            ]).then(n.bind(n, 920394));
                            return () => (0, r.jsx)(e, { projectId: i, guildId: t, onExport: l, onImport: s });
                        });
                    },
                    [i, t, l, s],
                ),
                importInput: o,
            };
        })(t, i),
        N = [t.name, m ? ef.intl.string(ii.default["Y8pS+n"]) : g ? ef.intl.string(ii.default["N+3Pzk"]) : null]
            .filter((e) => null != e)
            .join(", ");
    return (0, r.jsxs)("li", {
        role: A,
        className: eJ()(eC.fx, il.nM, { [eC.wH]: s }),
        children: [
            (0, r.jsx)(n8, {}),
            l ? null : (0, r.jsx)(n8, { inverted: !0, style: ir }),
            g ? (0, r.jsx)("div", { className: eJ()(n5.gy, n5.WS, il.gy) }) : null,
            (0, r.jsx)(t2.vN, {
                focusTarget: p,
                ringTarget: p,
                offset: { top: 2, bottom: 2, right: 4 },
                children: (0, r.jsx)("div", {
                    className: eJ()(n5.iE, n5.ZS, { [n5.J1]: s, [n5.V2]: g }),
                    children: (0, r.jsx)(er.D, {
                        ...f,
                        innerRef: p,
                        className: n5.nf,
                        onClick: C,
                        onContextMenu: E,
                        "aria-label": N,
                        focusProps: { enabled: !1 },
                        children: (0, r.jsxs)("div", {
                            className: n5.Y5,
                            children: [
                                (0, r.jsx)(nT.A, { project: t, size: "header" }),
                                (0, r.jsx)(tl.E, {
                                    variant: "text-sm/medium",
                                    color: "none",
                                    className: n5.UU,
                                    children: (0, r.jsx)(t1.A, {
                                        "aria-hidden": !0,
                                        className: m ? is.Hz : void 0,
                                        children: t.name,
                                    }),
                                }),
                                (0, r.jsx)("div", {
                                    className: n5.Y_,
                                    children: m
                                        ? (0, r.jsx)(ia, { projectId: o })
                                        : g
                                          ? (0, r.jsx)("div", {
                                                className: eC.yW,
                                                "aria-hidden": !0,
                                                children: (0, r.jsx)(nD.A, { count: Math.max(1, u) }),
                                            })
                                          : null,
                                }),
                            ],
                        }),
                    }),
                }),
            }),
            x,
        ],
    });
});
function id(e) {
    let { guildId: t, projects: n } = e,
        i = (0, J.Xj)((0, Y.zy)().pathname);
    return 0 === n.length
        ? null
        : (0, r.jsx)("li", {
              className: n7.kL,
              children: (0, r.jsxs)("ul", {
                  role: "group",
                  "aria-label": ef.intl.string(ii.default.e81UDK),
                  children: [
                      (0, r.jsx)("div", { className: n7.eh }),
                      n.map((e, l) =>
                          (0, r.jsx)(
                              io,
                              { project: e, guildId: t, isLast: l === n.length - 1, selected: e.id === i },
                              e.id,
                          ),
                      ),
                  ],
              }),
          });
}
var ic = n(152367),
    iu = n(309010);
function ih(e) {
    let { guild: t, selected: n } = e,
        i = (0, h.bG)([Z.Ay], () => Z.Ay.getSelectedProjectId(t.id), [t.id]),
        l = (0, h.bG)([iu.Ay], () => iu.Ay.getChannelId(), []),
        s = (0, h.bG)([w.A], () => w.A.getGuildId(), []);
    return (0, r.jsx)(eu.G, {
        id: `conjure-${t.id}`,
        renderIcon: (e) =>
            (0, r.jsx)(ic.D, { size: "custom", color: "currentColor", width: 20, height: 20, className: e }),
        text: ef.intl.string(ii.default.uk6jhJ),
        selected: n,
        onClick: () => {
            let e = l === em.VV.CONJURE && s === t.id;
            (0, eh.pX)(H.BVt.CHANNEL(t.id, em.VV.CONJURE, null == i || e ? null : i));
        },
    });
}
var im = n(625903),
    ig = n(283973),
    iA = n(933832),
    ip = n(435183),
    iC = n(698441),
    iE = n(855687),
    ix = n(816662),
    iN = n(446600),
    i_ = n(616356);
function iS(e, t, n) {
    return null != t && !!t && !(0, j.ws)(n, e.type);
}
function iI(e, t) {
    return null == t ? eC.fx : e > t ? eC.mU : eC.TR;
}
function ib(e) {
    let {
        channel: t,
        disableManageChannels: n,
        tabIndex: i,
        forceShowButtons: l,
        shouldEnlargeTargets: s,
        hasChannelInfo: a = !1,
    } = e;
    return (0, h.bG)(
        [O.A, w.A],
        () =>
            n ||
            (0, M.ai)(w.A.getGuildId()) ||
            (!O.A.can(H.xBc.MANAGE_CHANNELS, t) &&
                !O.A.can(H.xBc.MANAGE_ROLES, t) &&
                !O.A.can(H.xBc.MANAGE_WEBHOOKS, t)) ||
            ((0, tM.tr)(t.type) && !O.A.can(H.xBc.VIEW_CHANNEL, t)) ||
            (t.isGuildVocal() && !O.A.can(H.xBc.CONNECT, t)) ||
            !tM.bk.has(t.type) ||
            t.isModeratorReportChannel(),
    )
        ? null
        : (0, r.jsx)(es.m, {
              asContainer: !0,
              text: ef.intl.string(ef.t["3gUsJb"]),
              ariaHidden: !0,
              children: (0, r.jsx)(er.D, {
                  className: eJ()(eC.Xs, { [eC.Tf]: l, [eC.bw]: a, [eC.UI]: !a }),
                  onClick: function () {
                      ip.Ay.open(t.id);
                  },
                  tabIndex: i,
                  "aria-label": ef.intl.string(ef.t["3gUsJb"]),
                  focusProps: s ? { offset: 2 } : void 0,
                  children: (0, r.jsx)(im.SettingsIcon, { size: "xs", color: "currentColor", className: eC.gE }),
              }),
          });
}
function ij(e) {
    let {
            channel: t,
            isDefaultChannel: i = !1,
            locked: l,
            tabIndex: s,
            forceShowButtons: o,
            shouldEnlargeTargets: d,
            hasChannelInfo: c = !1,
        } = e,
        u = (0, h.bG)([P.A], () => P.A.getGuild(t.getGuildId())),
        m = (0, h.bG)([iN.A], () => iN.A.getStageInstanceByChannel(t.id), [t.id]),
        g = (0, h.bG)([iC.Ay], () => iC.Ay.getActiveEventByChannel(t.id), [t.id]),
        A = (0, h.bG)([O.A], () => (0, iE.K)(O.A, u, t, m)),
        f = (0, h.bG)([], () =>
            t?.type === H.rbe.GUILD_VOICE ? ef.intl.string(ef.t["EE+P0H"]) : ef.intl.string(ef.t["0jeAXt"]),
        ),
        p = a.useRef(null);
    if (l || !A || t.isModeratorReportChannel() || t.isThread()) return null;
    let C = (0, r.jsx)(ig.R, { size: "xs", className: eC.gE, "aria-hidden": !0, color: "currentColor" });
    return (
        i &&
            (C = (0, r.jsx)(ng.A, {
                childRef: p,
                tutorialId: "instant-invite",
                position: "left",
                children: (0, r.jsx)("div", { ref: p, children: C }),
            })),
        (0, r.jsx)(es.m, {
            asContainer: !0,
            text: f,
            ariaHidden: !0,
            children: (0, r.jsx)(er.D, {
                className: eJ()(eC.Xs, { [eC.Tf]: o, [eC.bw]: c, [eC.UI]: !c }),
                onClick: function () {
                    if (null != u) {
                        let e = i_.A.getAllActiveStreams().filter(
                            (e) => e.state !== H.XYD.ENDED && e.channelId === t.id,
                        );
                        (0, I.openModalLazy)(async () => {
                            let { default: i } = await Promise.all([
                                n.e("683621"),
                                n.e("711162"),
                                n.e("159957"),
                                n.e("728136"),
                                n.e("216084"),
                                n.e("284819"),
                            ]).then(n.bind(n, 405342));
                            return (n) =>
                                (0, r.jsx)(i, {
                                    ...n,
                                    guild: u,
                                    channel: t,
                                    streamUserId: 1 === e.length ? e[0].ownerId : null,
                                    source: H.PE1.GUILD_CHANNELS,
                                    guildScheduledEvent: g,
                                });
                        });
                    }
                },
                tabIndex: s,
                "aria-label": f,
                focusProps: d ? { offset: 2 } : void 0,
                children: C,
            }),
        })
    );
}
function iv(e) {
    let { channel: t, shouldEnlargeTargets: n } = e;
    return (0, r.jsx)(es.m, {
        asContainer: !0,
        text: ef.intl.string(ef.t["ROh4T+"]),
        ariaHidden: !0,
        children: (0, r.jsx)(er.D, {
            className: eC.Xs,
            onClick: function () {
                (0, ix.Ol)(t.guild_id, t.id);
            },
            "aria-label": ef.intl.string(ef.t["ROh4T+"]),
            focusProps: n ? { offset: 2 } : void 0,
            children: (0, r.jsx)(ea.P, { size: "xs", color: "currentColor", className: eC.gE }),
        }),
    });
}
function iG(e) {
    let { channel: t, shouldEnlargeTargets: n } = e;
    return (0, r.jsx)(es.m, {
        asContainer: !0,
        text: ef.intl.string(ef.t["N2c/Un"]),
        ariaHidden: !0,
        children: (0, r.jsx)(er.D, {
            className: eC.Xs,
            onClick: function () {
                (0, ix.jA)(t.guild_id, t.id, !0, { section: H.JJy.CHANNEL_LIST });
            },
            "aria-label": ef.intl.string(ef.t["N2c/Un"]),
            focusProps: n ? { offset: 2 } : void 0,
            children: (0, r.jsx)(iA.CheckmarkLargeIcon, { size: "xs", color: "currentColor", className: eC.gE }),
        }),
    });
}
class iy extends a.PureComponent {
    static defaultProps = { isDefaultChannel: !1 };
    renderEditButton() {
        return (0, r.jsx)(ib, { ...this.props });
    }
    renderInviteButton() {
        return (0, r.jsx)(ij, { ...this.props });
    }
    renderRemoveSuggestionButton() {
        return (0, r.jsx)(iv, { ...this.props });
    }
    renderAcceptSuggestionButton() {
        return (0, r.jsx)(iG, { ...this.props });
    }
    getClassName() {
        let { position: e, sortingPosition: t } = this.props;
        return iI(e, t);
    }
    isDisabled() {
        let { channel: e, sorting: t, sortingType: n } = this.props;
        return iS(e, t, n);
    }
}
let iR = F(function (e) {
    let {
            guild: t,
            selectedChannelId: i,
            position: l,
            disableManageChannels: s,
            sorting: o,
            sortingType: d,
            sortingPosition: c,
            connectChannelDragSource: u,
            connectChannelDropTarget: m,
            tabIndex: g,
        } = e,
        A = (0, h.bG)([U.A, tL.Ay], () => {
            let e = tL.Ay.getDirectoryChannelIds(t.id);
            return 0 === e.length ? null : U.A.getChannel(e[0]);
        }),
        f = (0, h.bG)([U.A], () => U.A.getChannel(A?.parent_id)),
        p = i === A?.id,
        C = (0, t8.Ay)(A),
        E = (0, h.bG)([O.A], () =>
            null != f ? O.A.can(H.xBc.MANAGE_CHANNELS, f) : null != t && O.A.can(H.xBc.MANAGE_CHANNELS, t),
        ),
        x = a.useCallback(
            (e) => {
                null != A &&
                    (0, ts.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("926132"),
                            n.e("430997"),
                            n.e("379995"),
                            n.e("729559"),
                        ]).then(n.bind(n, 994058));
                        return (t) => (0, r.jsx)(e, { ...t, channel: A });
                    });
            },
            [A],
        );
    if (null == A) return null;
    let N = iI(l, c),
        _ = iS(A, o, d),
        S = (0, r.jsx)("div", {
            className: eJ()(N, { [eC.r9]: _, [eC.wH]: p }),
            "data-dnd-name": C,
            children: (0, r.jsxs)(nZ.Ay, {
                className: eC.Ki,
                channel: A,
                guild: t,
                selected: p,
                onContextMenu: x,
                forceInteractable: !0,
                resolvedUnreadSetting: it.e.ONLY_MENTIONS,
                children: [
                    (0, r.jsx)(ij, { channel: A, tabIndex: g }),
                    (0, r.jsx)(ib, { channel: A, disableManageChannels: s, tabIndex: g }),
                ],
            }),
        });
    return (E && (S = m(u(S))), S);
});
var iM = n(34188),
    iT = n(812095),
    iL = n(733391),
    iU = n(832163),
    iD = n(831024),
    iP = n(44724),
    iO = n(849134),
    iw = n(770178),
    iV = n(307076);
let iH = Math.ceil(Math.sqrt(115200)),
    ik = (iH - 240) / 2;
function iB(e) {
    let { children: t, ref: n } = e,
        [i, l] = a.useState(-1),
        s = a.useCallback((e) => {
            l(e.contentRect.width);
        }, []),
        o = (0, iw.w)(s, [], { fireOnMount: !0 }),
        [{ shineSpring: d }, c] = (0, ti.z)(() => ({
            from: { shineSpring: 0 },
            config: { clamp: !0, mass: 1, tension: 170, friction: 38 },
        })),
        u = a.useCallback(
            (e, t) => {
                c({ shineSpring: 1, delay: t, reset: !0, loop: { reset: !0, delay: 1600 } });
            },
            [c],
        ),
        h = a.useCallback(() => {
            c({ shineSpring: 0, immediate: !0, loop: !1 });
        }, [c]),
        m = a.useMemo(
            () =>
                t(
                    (0, r.jsx)(tn.animated.div, {
                        className: iV.q,
                        style: {
                            transform: d.to(
                                (e) => `translateX(calc(${e * i}px + ${e * iH}px)) translateY(-50%) rotate(45deg)`,
                            ),
                        },
                    }),
                ),
            [t, i, d],
        );
    return (
        a.useImperativeHandle(n, () => ({ onMouseEnter: u, onMouseLeave: h }), [u, h]),
        (0, r.jsx)("div", {
            className: iV.i,
            onMouseEnter: u,
            onMouseLeave: h,
            onFocus: u,
            onBlur: h,
            ref: o,
            style: { "--custom-shine-dimensions": "240px", "--custom-shine-rotated-dimensions-delta": `${ik}px` },
            children: m,
        })
    );
}
var iF = n(371794),
    iz = n(240248),
    iK = n(998218),
    iW = n(427797);
let iY = a.memo(function (e) {
    let { guild: t, selected: i } = e,
        l = a.useRef(null),
        s = a.useRef(null),
        o = (0, I.useHasAnyModalOpen)(),
        d = (0, h.bG)([e_.A], () => e_.A.hasLayers()),
        c = (0, ex.xr)((e) => e.fullScreenLayers.length > 0);
    a.useEffect(() => {
        (0, iL.Kh)(t.id);
    }, [t.id]);
    let u = (0, h.bG)([iU.A], () => iU.A.getAnnouncement(t.id)),
        m = u?.state === "success" ? u.announcement : void 0,
        [g, A] = (0, ec.x_)(el.M.GAME_SHOP_NEW_BADGE, t.id, m?.id ?? "", void 0, !0),
        f = g === el.M.GAME_SHOP_NEW_BADGE && null != m,
        p = (0, tQ.nY)(t.id),
        C = (0, iD.u)({ surface: "storefront_badge", applicationId: p }),
        E = C?.tooltip,
        x = null;
    (f && (x = ef.intl.string(ef.t.y2b7CA)), null != C && (x = C.text));
    let [N, _] = (0, ec.x_)(el.M.GAME_SHOP_NEW_DROP_POPOVER, t.id, m?.id ?? ""),
        S = N === el.M.GAME_SHOP_NEW_DROP_POPOVER && null != m;
    a.useEffect(() => {
        i && (f && A(eg.i.INDIRECT_ACTION), S && _(eg.i.INDIRECT_ACTION));
    }, [A, _, i, f, S]);
    let b = a.useCallback(() => {
            (A(eg.i.TAKE_ACTION), _(eg.i.TAKE_ACTION));
            let e = (0, tQ.mq)(t.id),
                n = iU.A.getStorefrontState(e)?.activePage ?? 0;
            (0, eh.pX)(H.BVt.CHANNELS_GAME_SHOP(t.id, n));
        }, [t.id, A, _]),
        j = a.useCallback(() => {
            (0, iP.X)({ guildId: t.id, forceFetch: S });
        }, [t.id, S]),
        v = a.useCallback(() => {
            _(eg.i.USER_DISMISS);
        }, [_]),
        G = a.useCallback(
            (e) => {
                null != t &&
                    (0, ts.L3)(e, async () => {
                        let { default: e } = await n.e("899523").then(n.bind(n, 41614));
                        return (n) => (0, r.jsx)(e, { ...n, guild: t });
                    });
            },
            [t],
        ),
        y = a.useCallback(() => {
            l.current?.onMouseEnter(null, 500);
        }, [l]),
        R = a.useMemo(() => {
            if (null == x) return null;
            let e = (0, r.jsx)(eo.E, { type: { text: x }, variant: "primary" });
            return null != E ? (0, r.jsx)(es.m, { asContainer: !0, text: E, children: e }) : e;
        }, [x, E]),
        M = a.useCallback(
            (e) =>
                (0, r.jsx)(eu.G, {
                    background: (0, r.jsx)("div", { className: iW.D }),
                    innerClassName: iW.Z,
                    ref: s,
                    id: `game-shop-${t.id}`,
                    renderIcon: (e) =>
                        (0, r.jsx)(iM.U, {
                            size: "custom",
                            color: "currentColor",
                            width: 20,
                            height: 20,
                            className: e,
                        }),
                    text: (0, r.jsx)(tl.E, {
                        variant: "text-md/medium",
                        className: n5.UU,
                        children: ef.intl.string(ef.t.vyaWs7),
                    }),
                    selected: i,
                    onMouseDown: j,
                    onClick: b,
                    onContextMenu: G,
                    trailing: (0, r.jsxs)(r.Fragment, { children: [R, e] }),
                }),
            [t.id, i, j, b, G, R],
        ),
        T = a.useMemo(() => {
            if (null == m) return null;
            switch (m.type) {
                case "guild-application-announcement": {
                    let e =
                            null != m.assetId
                                ? iK.A.toURLSafe((0, iF.YE)(m.applicationId, m.assetId, 256, "webp"))
                                : void 0,
                        t =
                            null != m.backgroundImageAssetId
                                ? iK.A.toURLSafe((0, iF.YE)(m.applicationId, m.backgroundImageAssetId, 256, "webp"))
                                : void 0;
                    if (null == e) return null;
                    return {
                        graphicSource: { type: "sku", imageUrl: e, backgroundImageUrl: t },
                        title: ef.intl.string(ef.t["7PvvS9"]),
                        body: ef.intl.formatToPlainString(ef.t["9J4h1a"], { applicationName: m.applicationName }),
                    };
                }
                case "guild-discord-announcement": {
                    let { videoAssetFullyQualifiedURL: e, assetFullyQualifiedURL: t } = m;
                    if ((0, iz.uJ)(e) && (0, iz.uJ)(t)) return null;
                    return {
                        graphicSource: (0, iz.uJ)(e) ? { type: "asset", src: t } : { type: "video", src: e },
                        title: m.popoverTitle,
                        body: (0, iT.M)(m.popoverBody),
                        actionLabel: m.popoverCta,
                    };
                }
                default:
                    return null;
            }
        }, [m]),
        L = a.useCallback(
            () =>
                S && null != T
                    ? (0, r.jsx)(iO.A, {
                          onActionClick: b,
                          onActionMouseDown: j,
                          onRender: y,
                          onRequestClose: v,
                          targetElementRef: s,
                          ...T,
                      })
                    : null,
            [S, T, b, j, y, v],
        );
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(iB, { ref: l, children: M }), !o && !d && !c && L()] });
});
var iX = n(740426),
    iJ = n(826673),
    iq = n(591552),
    iZ = n(454058);
function i$(e) {
    let { guild: t, selected: i } = e,
        l = (0, tz.A)(t),
        s = (0, iJ.HX)(el.M.CHANNEL_BROWSER_NEW_BADGE_NUX),
        o = (0, tO.yK)([iZ.A], () =>
            Array.from(iZ.A.getNewChannelIds(t.id)).filter((e) => iZ.A.shouldIndicateNewChannel(t.id, e)),
        ),
        d = (0, tO.bG)([nP.Ay], () => nP.Ay.hasUnread(t.id, it.P.GUILD_ONBOARDING_QUESTION)),
        c = o.length > tU.rR,
        u = (0, tO.bG)([iq.A, nP.Ay], () => {
            let e = iq.A.lastFetchedAt(t.id),
                n = nP.Ay.lastMessageId(t.id, it.P.GUILD_ONBOARDING_QUESTION);
            if (null == n) return !1;
            let i = tI.default.extractTimestamp(n);
            return null != e && e > i;
        }),
        h = a.useCallback(() => {
            (0, eh.pX)(H.BVt.CHANNEL(t.id, l ? em.VV.CUSTOMIZE_COMMUNITY : em.VV.CHANNEL_BROWSER));
        }, [t.id, l]),
        m = a.useCallback(
            (e) => {
                (0, ts.L3)(e, async () => {
                    let { default: e } = await Promise.all([n.e("113446"), n.e("317699"), n.e("830412")]).then(
                        n.bind(n, 807431),
                    );
                    return (n) => (0, r.jsx)(e, { ...n, guild: t });
                });
            },
            [t],
        ),
        g = null;
    return (
        (s && !d && !c) || i || u || (g = (0, r.jsx)(eo.E, { type: "new", variant: "primary" })),
        (0, r.jsx)(eu.G, {
            id: `channels-${t.id}`,
            renderIcon: (e) => (0, r.jsx)(iX.k, { size: "md", color: "currentColor", className: e }),
            text: l ? ef.intl.string(ef.t.h9mGOP) : ef.intl.string(ef.t.et6wav),
            selected: i,
            onClick: h,
            onContextMenu: m,
            trailing: g,
        })
    );
}
var iQ = n(855473);
function i0(e) {
    let { guild: t, selected: n } = e;
    return (0, r.jsx)(eu.G, {
        id: `home-tab-${t.id}`,
        renderIcon: (e) => (0, r.jsx)(iQ.Z, { size: "md", color: "currentColor", className: e }),
        text: ef.intl.string(ef.t.VbpLyU),
        selected: n,
        onClick: function () {
            (0, eh.pX)(H.BVt.CHANNEL(t.id, em.VV.GUILD_HOME));
        },
    });
}
var i1 = n(534514),
    i3 = n(5373),
    i9 = n(65995),
    i2 = n(195702);
function i6(e, t) {
    return (0, r.jsx)(tl.E, { variant: "text-xs/semibold", color: "text-default", children: e }, t);
}
let i5 = a.memo(function (e) {
    let { guild: t } = e,
        n = (0, h.bG)([tK.h], () => tK.h.getNewMemberActions(t.id), [t.id]),
        i = (0, h.bG)([i9.A], () => i9.A.getCompletedActions(t.id)),
        l = a.useMemo(() => {
            if (null == n || null == i) return 0;
            let e = 0;
            return (
                n.forEach((t) => {
                    null != i[t.channelId] && e++;
                }),
                e
            );
        }, [i, n]),
        s = null == n ? 0 : n.length,
        o = (0, c.rm)(`progress-bar-${t.id}`);
    return 0 === s
        ? null
        : (0, r.jsxs)("li", {
              children: [
                  (0, r.jsxs)(er.D, {
                      ...o,
                      role: "button",
                      focusProps: { offset: { right: 4 } },
                      className: i2.G9,
                      onClick: function () {
                          (0, eh.pX)(H.BVt.CHANNEL(t.id, em.VV.GUILD_HOME));
                      },
                      children: [
                          (0, r.jsxs)("div", {
                              className: i2.A1,
                              children: [
                                  (0, r.jsx)(i1.D, {
                                      variant: "heading-sm/semibold",
                                      children: ef.intl.string(ef.t.SnrR3x),
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: i2.Ib,
                                      children: [
                                          (0, r.jsx)(tl.E, {
                                              variant: "text-xs/medium",
                                              color: "text-muted",
                                              className: i2.Cv,
                                              children: ef.intl.format(ef.t.eqZ1lW, {
                                                  numberHook: i6,
                                                  total: s.toString(),
                                                  completed: l.toString(),
                                              }),
                                          }),
                                          (0, r.jsx)(tu.A, {
                                              className: i2.UE,
                                              width: 16,
                                              height: 16,
                                              direction: tu.A.Directions.RIGHT,
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, r.jsx)(i3.i, {
                              className: i2.hr,
                              foregroundGradientColor: [
                                  m.A.unsafe_rawColors.GREEN_300.css,
                                  m.A.unsafe_rawColors.GREEN_230.css,
                              ],
                              percent: (l / s) * 100 + 3,
                              animate: !0,
                          }),
                      ],
                  }),
                  (0, r.jsx)("div", { role: "separator", className: i2.yF }),
              ],
          });
});
var i7 = n(581925);
function i4(e) {
    let { guild: t, selected: n } = e;
    return (0, r.jsx)(eu.G, {
        id: `official-messages-page-${t.id}`,
        renderIcon: (e) => (0, r.jsx)(i7.L, { size: "md", color: "currentColor", className: e }),
        text: ef.intl.string(ef.t.xHEzFh),
        selected: n,
        onClick: function () {
            (0, eh.pX)(H.BVt.CHANNEL(t.id, em.VV.GUILD_OFFICIAL_MESSAGES));
        },
    });
}
var i8 = n(514179);
function le(e) {
    let { guild: t, selected: i } = e;
    return (0, r.jsx)(eu.G, {
        id: `subscriptions-${t.id}`,
        renderIcon: (e) => (0, r.jsx)(i8.A, { className: e }),
        text: ef.intl.string(ef.t["KzCF/6"]),
        selected: i,
        onClick: function () {
            (0, eh.pX)(H.BVt.CHANNEL(t.id, em.VV.ROLE_SUBSCRIPTIONS));
        },
        onContextMenu: function (e) {
            null != t &&
                (0, ts.L3)(e, async () => {
                    let { default: e } = await n.e("571911").then(n.bind(n, 978554));
                    return (n) => (0, r.jsx)(e, { ...n, guild: t });
                });
        },
    });
}
var lt = n(506774),
    ln = n(666860),
    li = n(289397),
    ll = n(486418),
    ls = n(575926),
    lr = n(440293),
    la = n(174459),
    lo = n(634654),
    ld = n(888918);
function lc(e) {
    let { guildId: t, selected: n, handleClick: i } = e,
        l = (0, lr.w)(t),
        s = (0, tO.bG)([P.A], () => P.A.getGuild(t)),
        a = s?.features.has(H.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) === !0,
        o = "false" === lt.w.get(lo.bJ, "false"),
        d = (0, tO.bG)([z.Ay], () => z.Ay.useReducedMotion);
    return (0, r.jsx)(eu.G, {
        id: `shop-${t}`,
        className: eJ()(ld.A2, { [ld.wH]: n, [ld.ST]: o }),
        innerClassName: ld.LE,
        renderIcon: (e) => (0, r.jsx)(ls.h, { width: 20, height: 20, className: eJ()([e, ld.sV]) }),
        text: ef.intl.string(ef.t.al5EXL),
        selected: n,
        onClick: i,
        trailing: (0, r.jsxs)("div", {
            className: ld.ai,
            children: [
                d
                    ? (0, r.jsx)("div", {
                          className: ld.Ad,
                          children: (0, r.jsx)(eo.E, { type: "new", variant: "primary" }),
                      })
                    : (0, r.jsx)("img", {
                          src: (0, li.n)("server_products/storefront/money.gif"),
                          className: ld.TG,
                          alt: "",
                      }),
                n &&
                    (0, r.jsx)(er.D, {
                        className: ld.b,
                        onClick: function (e) {
                            (e.stopPropagation(),
                                (0, iJ.Dr)(el.M.SERVER_SHOP_PHANTOM_PREVIEW),
                                la.default.track(H.HAw.GUILD_SHOP_PREVIEW_CLICK, {
                                    ...(0, ln.H$)(t),
                                    action_taken: lo.hN.DISMISS_CHANNEL_ROW,
                                }),
                                (l && a) || (0, eh.bG)(H.BVt.CHANNEL(t, tL.Ay.getDefaultChannel(t)?.id)));
                        },
                        "aria-label": ef.intl.string(ef.t.cpT0Cq),
                        children: (0, r.jsx)(t5.a, { size: "xs", color: "currentColor" }),
                    }),
            ],
        }),
    });
}
function lu(e) {
    let { guild: t, selected: i } = e;
    function l() {
        (lt.w.set(lo.bJ, "true"), (0, eh.pX)(H.BVt.CHANNEL(t.id, em.VV.GUILD_SHOP)));
    }
    return (0, ll.P)(t)
        ? (0, r.jsx)(lc, { guildId: t.id, selected: i, handleClick: l })
        : (0, r.jsx)(eu.G, {
              id: `shop-${t.id}`,
              renderIcon: (e) => (0, r.jsx)(ls.h, { width: 20, height: 20, className: e }),
              text: ef.intl.string(ef.t.al5EXL),
              selected: i,
              onClick: l,
              onContextMenu: function (e) {
                  null != t &&
                      (0, ts.L3)(e, async () => {
                          let { default: e } = await n.e("852565").then(n.bind(n, 345332));
                          return (n) => (0, r.jsx)(e, { ...n, guild: t });
                      });
              },
          });
}
let lh = a.memo(function (e) {
    let { channel: t, selectedChannel: n, selectedVoiceChannelId: i, sortedThreadIds: l, withGuildIcon: s } = e,
        a = (0, t8.Ay)(t),
        { density: o } = (0, E.wR)(),
        d = (0, h.yK)([U.A], () => l.map((e) => U.A.getChannel(e)).filter(t_.Vq), [l]),
        c = (0, h.bG)([tN.Ay], () => {
            let e = d[d.length - 1];
            if (null == e) return 0;
            let t = tN.Ay.getVoiceStates(e.guild_id)[e.id];
            return null == t || 0 === t.length ? 0 : i !== e.id ? 40 : 32 * t.length + 8;
        });
    return (0, r.jsx)("li", {
        className: n7.kL,
        children: (0, r.jsxs)("ul", {
            role: "group",
            "aria-label": ef.intl.formatToPlainString(ef.t.EiyIi6, { channelName: a }),
            children: [
                (0, r.jsx)("div", {
                    className: eJ()(n7.eh, { [n7.ET]: s }),
                    style: { bottom: ("cozy" === o ? 28 : 24) + c },
                }),
                d.map((e, t) =>
                    (0, r.jsx)(
                        ie,
                        {
                            thread: e,
                            isSelectedChannel: n?.id === e.id,
                            isSelectedVoice: i === e.id,
                            isLast: t === d.length - 1,
                            withGuildIcon: s,
                        },
                        e.id,
                    ),
                ),
            ],
        }),
    });
});
var lm = n(265872),
    lg = n(367513),
    lA = n(296216),
    lf = n(657043),
    lp = n(963027),
    lC = n(202384),
    lE = n(51758),
    lx = n(139033),
    lN = n(305866),
    l_ = n(123292),
    lS = n(830215),
    lI = n(315982),
    lb = n(480900),
    lj = n(557722),
    lv = n(834942),
    lG = n(287809),
    ly = n(53516),
    lR = n(648580),
    lM = (((l = {})[(l.VOICE = 0)] = "VOICE"), l);
let lT = function (e) {
    let { type: t, guildId: i, closePopout: l } = e,
        s = (0, ei.GV)(),
        a = (0, h.bG)([lv.A], () => lv.A.getCheck(i), [i]),
        {
            notClaimed: o,
            notEmailVerified: d,
            notPhoneVerified: c,
            missingVerificationRole: u,
            verificationRole: m,
        } = a,
        {
            header: g,
            body: A,
            buttonText: f,
        } = (function (e, t) {
            if (0 !== e) return { header: null, body: null, buttonText: null };
            {
                let e = ef.intl.string(ef.t["6zY8BI"]),
                    {
                        notClaimed: n,
                        notPhoneVerified: i,
                        notEmailVerified: l,
                        newMember: s,
                        newAccount: r,
                        missingVerificationRole: a,
                        verificationRole: o,
                    } = t;
                return n
                    ? { header: e, body: ef.intl.string(ef.t.IRxUlG), buttonText: ef.intl.string(ef.t.fiNVin) }
                    : i
                      ? { header: e, body: ef.intl.string(ef.t.vW8iUF), buttonText: ef.intl.string(ef.t["50gfOv"]) }
                      : l
                        ? { header: e, body: ef.intl.string(ef.t.vdSOpz), buttonText: ef.intl.string(ef.t.lm1UKt) }
                        : s
                          ? {
                                header: e,
                                body: ef.intl.formatToPlainString(ef.t.v1ktYb, { min: H.$8o.MEMBER_AGE }),
                                buttonText: ef.intl.string(ef.t.BddRzS),
                            }
                          : r
                            ? {
                                  header: e,
                                  body: ef.intl.formatToPlainString(ef.t.sncw41, { min: H.$8o.ACCOUNT_AGE }),
                                  buttonText: ef.intl.string(ef.t.BddRzS),
                              }
                            : a && null != o && null === o.tags.guild_connections
                              ? {
                                    header: e,
                                    body: ef.intl.format(ef.t.MZbCuG, { roleName: `@${o.name}` }),
                                    buttonText: ef.intl.string(ef.t["6Ge2LG"]),
                                }
                              : { header: e, body: null, buttonText: null };
            }
        })(t, a);
    return null == g || null == A
        ? null
        : (0, r.jsxs)(lN.l, {
              className: lR.kL,
              "aria-labelledby": s,
              children: [
                  (0, r.jsx)("img", { alt: "", className: lR.Sl, src: n(303528) }),
                  (0, r.jsxs)("div", {
                      className: lR.Qs,
                      children: [
                          (0, r.jsx)(i1.D, { variant: "heading-md/semibold", id: s, children: g }),
                          (0, r.jsx)(tl.E, { color: "text-default", variant: "text-sm/normal", children: A }),
                          (0, r.jsxs)("div", {
                              className: lR.UD,
                              children: [
                                  null != f
                                      ? (0, r.jsx)("div", {
                                            "data-button-hoisted-classname-wrapper": !0,
                                            className: lR.FS,
                                            children: (0, r.jsx)(t3.$, {
                                                variant: "primary",
                                                text: f,
                                                onClick: function () {
                                                    (o
                                                        ? lI.R()
                                                        : c
                                                          ? (0, I.openModalLazy)(
                                                                async () => {
                                                                    let { default: e } = await Promise.all([
                                                                        n.e("590275"),
                                                                        n.e("766806"),
                                                                        n.e("14775"),
                                                                        n.e("989545"),
                                                                        n.e("991531"),
                                                                        n.e("311493"),
                                                                        n.e("84704"),
                                                                    ]).then(n.bind(n, 615715));
                                                                    return (t) =>
                                                                        (0, r.jsx)(e, {
                                                                            reason: lj.d.GUILD_PHONE_REQUIRED,
                                                                            ...t,
                                                                        });
                                                                },
                                                                { modalKey: ly.V },
                                                            )
                                                          : d
                                                            ? (lS.A.verifyResend(),
                                                              (0, lx.A)({
                                                                  title: ef.intl.string(ef.t.LykQYk),
                                                                  subtitle: ef.intl.format(ef.t.azKEPy, {
                                                                      email: lG.default.getCurrentUser()?.email,
                                                                  }),
                                                              }))
                                                            : u && null != m && (0, lb.b)(m, i),
                                                        l());
                                                },
                                            }),
                                        })
                                      : null,
                                  o || c || d
                                      ? (0, r.jsx)(l_.Q, {
                                            onClick: l,
                                            text: ef.intl.string(ef.t.oEAioF),
                                            variant: "secondary",
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
              ],
          });
};
var lL = n(824865),
    lU = n(378570),
    lD = n(747376),
    lP = n(113783),
    lO = n(96566),
    lw = n(280450),
    lV = n(312006),
    lH = n(505543),
    lk = n(994500),
    lB = n(685399),
    lF = n(475889),
    lz = n(693879),
    lK = n(435470),
    lW = n(35275),
    lY = n(300596);
function lX(e) {
    let { locked: t } = e;
    return (0, r.jsx)("div", {
        className: eJ()(eC.Xs, lY.U),
        children: (0, r.jsx)(lW.A, {
            className: eC.gE,
            color: t ? m.A.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css : void 0,
        }),
    });
}
var lJ = n(863005),
    lq = n(669715),
    lZ = n(769015),
    l$ = n(217223);
function lQ(e) {
    let { className: t, embeddedApps: n, muted: i } = e;
    if (n.length <= 0) return null;
    {
        if (1 === n.length)
            return (0, r.jsx)("div", {
                className: eJ()(l$.kL, t, i && l$.F4),
                children: (0, r.jsx)(lZ.A, { game: n[0].application, className: l$.wK }),
            });
        let e = n.length - 1;
        return (0, r.jsxs)("div", {
            className: eJ()(l$.kL, t, i && l$.F4),
            children: [
                (0, r.jsx)(lZ.A, { game: n[0].application, className: l$.wK }),
                2 === n.length
                    ? (0, r.jsx)(lZ.A, { game: n[1].application, className: l$.wK })
                    : (0, r.jsx)(tl.E, {
                          className: l$.ju,
                          variant: "text-xs/semibold",
                          color: "interactive-text-active",
                          children: `+${e}`,
                      }),
            ],
        });
    }
}
var l0 = n(905695);
function l1(e) {
    let {
            channel: t,
            isChannelSelected: n,
            isChannelCollapsed: i,
            voiceStates: l,
            enableConnectedUserLimit: s,
            enableActivities: a,
            isSubscriptionGated: o,
            needSubscriptionToAccess: d,
            isNewChannel: c,
            muted: u,
            resolvedUnreadSetting: m,
        } = e,
        g = (0, h.bG)([nP.Ay], () => nP.Ay.getMentionCount(t.id)),
        A = (0, h.bG)([nP.Ay], () => nP.Ay.getIsMentionLowImportance(t.id)),
        f = (0, lB.Ay)(t),
        p = (0, h.bG)([O.A], () => !O.A.can(H.xBc.CONNECT, t)),
        C = (0, lF.H)(t),
        E = (0, h.bG)([nF.A], () => nF.A.hasVideo(t.id)),
        x = (0, lO.qT)(t.id) && t.isGuildStageVoice(),
        N = (function (e) {
            let { channel: t, locked: n, video: i, selected: l } = e;
            return (
                (function (e) {
                    let { channel: t, video: n, considerMaxStageVoiceUserLimit: i = !0 } = e,
                        { limit: l } = (0, n$.A)(t),
                        s = -1;
                    return (t.userLimit > 0 && (s = t.userLimit),
                    n && l > 0 && (s = s > 0 ? Math.min(s, l) : l),
                    i && s === H.RCc)
                        ? 0
                        : s;
                })({ channel: t, video: i }) > 0 &&
                !n &&
                !l
            );
        })({ channel: t, locked: p, video: (E || x) && null == C, selected: n }),
        _ = (0, h.bG)([lJ.A], () => lJ.A.getNewThreadCount(t.guild_id, t.id)),
        S = (0, lK.ed)(t.guild_id, t.id),
        I = (0, h.bG)([P.A], () => P.A.getGuild(t.guild_id)?.features.has(H.GuildFeatures.COMMUNITY) ?? !1);
    if (nq(g)) return (0, r.jsx)(n2, { mentionsCount: g, isMentionLowImportance: A });
    if (o) return (0, r.jsx)(lX, { locked: d });
    if (c) return (0, r.jsx)(eo.E, { type: "new", variant: "primary" });
    if (!u && m === it.e.ALL_MESSAGES && t.isForumLikeChannel() && null != _ && _ > 0)
        return (0, r.jsx)(tl.E, {
            variant: "text-xs/semibold",
            color: "text-brand",
            className: l0.O,
            children: ef.intl.format(ef.t.GkAbqY, { count: (0, eb.Gu)(_) }),
        });
    if (!u && t.isForumLikeChannel() && null != S && S > 0)
        return (0, r.jsx)(tl.E, { variant: "text-xs/semibold", color: "text-muted", children: (0, eb.Gu)(S) });
    let b = l?.length ?? 0;
    return null != s && s && N
        ? (0, r.jsx)(n3, { userCount: b, video: E || x, channel: t })
        : i && (0, lq.t)(l) && I
          ? (0, r.jsx)(eo.E, { type: { text: ef.intl.string(ef.t.dI3q4h) }, variant: "notification" })
          : null != C
            ? (0, r.jsx)(lz.z, { textColor: "text-feedback-positive", entry: { start: C } })
            : null != a && a && f.length > 0
              ? (0, r.jsx)(lQ, { embeddedApps: f, muted: u })
              : null;
}
var l3 = n(714619);
class l9 extends iy {
    channelItemRef = a.createRef();
    state = { shouldShowGuildVerificationPopout: !1 };
    closeGuildVerificationPopout = () => {
        this.setState({ shouldShowGuildVerificationPopout: !1 });
    };
    getVoiceStatesCount() {
        let { voiceStates: e } = this.props;
        return e?.length ?? 0;
    }
    isFull() {
        let { channel: e } = this.props;
        return (0, n_.Pd)(e, nF.A, P.A);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        if (n) return eC.ZS;
        if (null != t)
            if (e > t) return eC.mU;
            else return eC.TR;
        return eC.fx;
    }
    handleClick = () => {
        let {
                channel: e,
                locked: t,
                connected: n,
                unverifiedAccount: i,
                isSuggestedSection: l,
                openChatOnClick: s,
            } = this.props,
            r = e.getGuildId();
        (null != r && (0, lE.V)(r) && (0, lC.Ze)(r),
            i && this.setState({ shouldShowGuildVerificationPopout: !0 }),
            t ||
                n ||
                e.isRoleSubscriptionTemplatePreviewChannel() ||
                (s ? lg.A.updateChatOpen(e.id, !0) : (0, lD.av)(e)),
            __OVERLAY__ || (0, lU.iN)(e.id, l ? { source: lL.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0));
    };
    handleClickChat = () => {
        let { channel: e, locked: t, isSuggestedSection: n } = this.props;
        __OVERLAY__ || t || (0, lU.iN)(e.id, n ? { source: lL.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            i = P.A.getGuild(t.getGuildId());
        null != i &&
            (0, ts.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("926132"),
                    n.e("993103"),
                    n.e("893190"),
                    n.e("393336"),
                    n.e("146652"),
                    n.e("391763"),
                    n.e("955557"),
                    n.e("676156"),
                    n.e("474610"),
                    n.e("947502"),
                    n.e("603998"),
                    n.e("550033"),
                    n.e("343266"),
                    n.e("965789"),
                    n.e("198415"),
                    n.e("309004"),
                    n.e("412255"),
                    n.e("63340"),
                    n.e("430997"),
                    n.e("379995"),
                    n.e("544058"),
                    n.e("591377"),
                    n.e("35723"),
                    n.e("566378"),
                    n.e("256372"),
                    n.e("29542"),
                    n.e("419690"),
                    n.e("465694"),
                    n.e("426792"),
                    n.e("248804"),
                    n.e("318663"),
                    n.e("599990"),
                    n.e("599854"),
                ]).then(n.bind(n, 119357));
                return (n) => (0, r.jsx)(e, { ...n, channel: t, guild: i });
            });
    };
    renderVoiceUsers() {
        let { channel: e, collapsed: t, tabIndex: n, speakerVoiceStates: i, numAudience: l } = this.props;
        return (0, r.jsx)(n6.A, { channel: e, voiceStates: i, collapsed: t, tabIndex: n, numAudience: l });
    }
    renderPopout = () => {
        let { channel: e } = this.props,
            { shouldShowGuildVerificationPopout: t } = this.state;
        if (t)
            return (0, r.jsx)(lT, {
                type: lM.VOICE,
                guildId: e.guild_id,
                closePopout: this.closeGuildVerificationPopout,
            });
        throw Error("VoiceChannel.renderPopout: There must always be something to render");
    };
    renderOpenChatButton = () => {
        let { channel: e, locked: t, forceShowButtons: n } = this.props;
        if (!t)
            return (0, r.jsx)(es.m, {
                asContainer: !0,
                text: ef.intl.string(ef.t.ZXxLQg),
                children: (0, r.jsx)(er.D, {
                    className: eJ()(eC.Xs, n ? eC.Tf : null),
                    onClick: () => {
                        (lg.A.updateChatOpen(e.id, !0), this.handleClickChat());
                    },
                    "aria-label": ef.intl.string(ef.t.ZXxLQg),
                    children: (0, r.jsx)(nw.ChatIcon, { size: "xs", color: "currentColor", className: eC.gE }),
                }),
            });
    };
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e ? null : (0, r.jsx)("div", { className: eC.yW, children: e });
    }
    getTooltipText = () => {
        let { connected: e } = this.props;
        return this.isFull() && !e ? ef.intl.string(ef.t.rZfiNq) : null;
    };
    renderSubtitle = (e) => {
        let { disableTooltips: t } = e,
            n = this.props.stageInstance?.topic;
        return null == n ? null : (0, r.jsx)(t1.A, { shouldShow: !t, children: n });
    };
    render() {
        let {
                channel: e,
                selected: t,
                connected: n,
                locked: i,
                connectChannelDropTarget: l,
                connectChannelDragSource: s,
                connectUserDropTarget: a,
                connectDragPreview: o,
                canReorderChannel: d,
                canMoveMembers: c,
                stageInstance: u,
                isSubscriptionGated: h,
                needSubscriptionToAccess: m,
                unread: g,
                resolvedUnreadSetting: A,
                mentionCount: f,
                isFavoriteSuggestion: p,
            } = this.props,
            { shouldShowGuildVerificationPopout: C } = this.state,
            E = this.getTooltipText(),
            x = (0, r.jsxs)("li", {
                className: eJ()(this.getModeClass(), { [eC.r9]: this.isDisabled() }),
                "data-dnd-name": (0, t8.m1)(e, lG.default, lk.A),
                children: [
                    (0, r.jsx)(lm.Y, {
                        targetElementRef: this.channelItemRef,
                        position: "right",
                        renderPopout: this.renderPopout,
                        spacing: 17,
                        onRequestClose: this.closeGuildVerificationPopout,
                        shouldShow: C,
                        children: () =>
                            (0, r.jsx)(es.m, {
                                text: E,
                                children: (0, r.jsxs)(nZ.Ay, {
                                    ref: this.channelItemRef,
                                    className: eC.Ki,
                                    disableOverflowTooltip: null != E,
                                    iconClassName: eJ()({ [l3.G]: null != u }),
                                    channel: e,
                                    selected: !p && t,
                                    connected: n,
                                    unread: n ? g : void 0,
                                    resolvedUnreadSetting: A,
                                    mentionCount: f,
                                    locked: i,
                                    onClick: () => {
                                        this.handleClick();
                                    },
                                    onContextMenu: (e) => {
                                        this.handleContextMenu(e);
                                    },
                                    connectDragPreview: o,
                                    subtitle: this.renderSubtitle({ disableTooltips: null != E }),
                                    isFavoriteSuggestion: p,
                                    "aria-label": (0, lp.Ay)({
                                        channel: e,
                                        unread: g,
                                        mentionCount: f,
                                        isSubscriptionGated: h,
                                        needSubscriptionToAccess: m,
                                    }),
                                    children: [
                                        p && this.renderAcceptSuggestionButton(),
                                        p && this.renderRemoveSuggestionButton(),
                                        !p && this.renderOpenChatButton(),
                                        !p && this.renderInviteButton(),
                                        !p && this.renderEditButton(),
                                        !p && this.renderChannelInfo(),
                                    ],
                                }),
                            }),
                    }),
                    this.renderVoiceUsers(),
                ],
            });
        return (c && (x = a(x)), d && (x = l(s(x))), x);
    }
}
let l2 = F((0, lA.F)(l9));
function l6(e) {
    var t;
    let n,
        i,
        { guild: l, channel: s, disableSorting: a, isFavoriteCategory: o, collapsed: d, voiceStates: c } = e,
        u = (0, h.cf)([nP.Ay], () => ({ unread: nP.Ay.hasUnread(s.id), mentionCount: nP.Ay.getMentionCount(s.id) })),
        m = (0, h.bG)([V.Ay], () => V.Ay.resolveUnreadSetting(s)),
        g = (0, h.cf)([U.A, lv.A, O.A], () => {
            let e = U.A.getChannel(s.parent_id),
                t = lv.A.getCheck(s.guild_id);
            return {
                canManageChannel: null != l && O.A.can(H.xBc.MANAGE_CHANNELS, s),
                canReorderChannel:
                    !0 !== a &&
                    ((0, M.ai)(l.id) ||
                        (null != e ? O.A.can(H.xBc.MANAGE_CHANNELS, e) : O.A.can(H.xBc.MANAGE_CHANNELS, l))),
                canMoveMembers: O.A.can(H.xBc.MOVE_MEMBERS, s),
                locked: !O.A.can(H.xBc.CONNECT, s),
                bypassLimit: O.A.can(H.xBc.MOVE_MEMBERS, s),
                unverifiedAccount: !t.canChat,
            };
        }),
        A = (0, h.bG)([L.A], () => L.A.isCollapsed(s.parent_id)),
        f =
            ((t = s.id),
            (n = (0, lH.A)(t)),
            (i = (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return (0, h.cf)(
                    [lV.Ay, lw.default],
                    () => {
                        let n = lw.default.getId();
                        return lV.Ay.getPermissionsForUser(n, e, t);
                    },
                    [e, t],
                );
            })(t, !0).moderator),
            !n && i ? 1 : 0),
        p = (0, h.bG)([iN.A], () => iN.A.getStageInstanceByChannel(s.id), [s.id]),
        C = (0, lP.zy)(s.id, tj.ip.AUDIENCE),
        { isSubscriptionGated: E, needSubscriptionToAccess: x } = (0, nH.A)(s.id),
        N = (0, h.bG)([V.Ay], () => V.Ay.isFavorite(l.id, s.id)),
        _ = (0, lO.xn)(s.id),
        S = l1({
            channel: s,
            isChannelSelected: !1,
            isChannelCollapsed: d,
            voiceStates: c,
            isSubscriptionGated: E,
            needSubscriptionToAccess: x,
            enableConnectedUserLimit: _ || (s.userLimit > 0 && s.userLimit < H.RCc),
        }),
        I = e.connected && null == S,
        b = l.features.has(H.GuildFeatures.INTERNAL_EMPLOYEE_ONLY),
        j = (0, lf.BX)("StageChannel");
    return (0, r.jsx)(l2, {
        categoryCollapsed: A,
        connectAction: f,
        numAudience: C,
        stageInstance: p,
        isSubscriptionGated: E,
        needSubscriptionToAccess: x,
        ...u,
        ...g,
        ...e,
        isFavoriteSuggestion: o && !N,
        forceShowButtons: I,
        openChatOnClick: b,
        channelInfo: S,
        resolvedUnreadSetting: m,
        shouldEnlargeTargets: j,
    });
}
function l5(e, t) {
    let n = t.getGuildId();
    if (null == n) throw Error("TextChannel, preloadChannel: Channel does not have a guildId");
    nO.A.preload(n, t.id);
}
let l7 = F(
        class extends iy {
            handleContextMenu = (e) => {
                let { channel: t } = this.props,
                    i = P.A.getGuild(t.getGuildId());
                null != i &&
                    (0, ts.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("926132"),
                            n.e("603998"),
                            n.e("309004"),
                            n.e("412255"),
                            n.e("63340"),
                            n.e("430997"),
                            n.e("379995"),
                            n.e("544058"),
                            n.e("715669"),
                        ]).then(n.bind(n, 313140));
                        return (n) => (0, r.jsx)(e, { ...n, channel: t, guild: i });
                    });
            };
            handleClick = (e) => {
                let t = e.getGuildId();
                if (null == t) throw Error("TextChannel, transitionTo: Channel does not have a guildId");
                (0, eh.pX)(H.BVt.CHANNEL(t, e.id), {
                    state: {
                        analyticsSource: {
                            page: H.liQ.GUILD_CHANNEL,
                            section: H.JJy.CHANNEL_LIST,
                            object: H.ZSU.CHANNEL,
                        },
                    },
                });
            };
            render() {
                let {
                        channel: e,
                        selected: t,
                        connectChannelDropTarget: n,
                        connectChannelDragSource: i,
                        connectDragPreview: l,
                        canReorderChannel: s,
                    } = this.props,
                    a = (0, r.jsx)("li", {
                        className: eJ()(this.getClassName(), { [eC.r9]: this.isDisabled() }),
                        "data-dnd-name": (0, t8.m1)(e, lG.default, lk.A),
                        children: (0, r.jsxs)(nZ.Ay, {
                            className: eC.Ki,
                            channel: e,
                            selected: t,
                            onClick: this.handleClick,
                            onMouseDown: l5,
                            onContextMenu: this.handleContextMenu,
                            connectDragPreview: s ? l : null,
                            "aria-label": (0, lp.Ay)({ channel: e }),
                            resolvedUnreadSetting: it.e.ONLY_MENTIONS,
                            children: [this.renderInviteButton(), this.renderEditButton()],
                        }),
                    });
                return s ? n(i(a)) : a;
            }
        },
    ),
    l4 = a.memo(function (e) {
        let { channel: t, guild: n, disableSorting: i } = e,
            l = (0, h.cf)([U.A, O.A], () => {
                let e = U.A.getChannel(t.parent_id);
                return {
                    canManageChannel: O.A.can(H.xBc.MANAGE_CHANNELS, t),
                    canReorderChannel:
                        !0 !== i && null != e ? O.A.can(H.xBc.MANAGE_CHANNELS, e) : O.A.can(H.xBc.MANAGE_CHANNELS, n),
                };
            }),
            s = (0, lf.BX)("StoreChannel");
        return (0, r.jsx)(l7, { ...l, ...e, shouldEnlargeTargets: s });
    });
var l8 = n(811024),
    se = n(323073),
    st = n(911040);
function sn(e) {
    if (null == e) return null;
    switch (e.type) {
        case "embedded-activities":
        case "event":
            return { subtitle: e.name };
        case "go-live":
            return { subtitle: ef.intl.string(ef.t.Pa817q) };
    }
    return null;
}
var si = n(967165),
    sl = n(730602),
    ss = n(956518),
    sr = n(627363),
    sa = n(982844),
    so = n(197184),
    sd = n(288254),
    sc = n(91242),
    su = n(165610),
    sh = n(696451),
    sm = n(763827),
    sg = n(56059),
    sA = n(163328),
    sf = n(778712),
    sp = n(730134),
    sC = n(707539),
    sE = n(486020),
    sx = n(98098);
function sN(e) {
    let { channel: t } = e,
        i = (0, h.yK)([lJ.A, nP.Ay, O.A], () => {
            let e = lJ.A.getActiveJoinedRelevantThreadsForParent(t.guild_id, t.id);
            return d()(lJ.A.getActiveJoinedThreadsForParent(t.guild_id, t.id))
                .values()
                .map((e) => e.channel)
                .concat(d().values(lJ.A.getActiveUnjoinedThreadsForParent(t.guild_id, t.id)))
                .filter((t) => !(t.id in e) && O.A.can(H.xBc.VIEW_CHANNEL, t))
                .sort((e, t) => {
                    let n = nP.Ay.lastMessageId(e.id),
                        i = nP.Ay.lastMessageId(t.id);
                    return tI.default.compare(n, i);
                })
                .reverse()
                .value();
        }),
        l = t.isForumLikeChannel() ? 5 : 3,
        s = t.isForumLikeChannel() ? sg.b : sA.y;
    return (
        a.useEffect(() => {
            (0, sC.TE)();
        }, []),
        (0, r.jsxs)("div", {
            className: sx.SW,
            children: [
                (0, r.jsx)(tl.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: sx.DD,
                    children: t.isForumLikeChannel() ? ef.intl.string(ef.t.ioVdO2) : ef.intl.string(ef.t.VNYs2v),
                }),
                (0, r.jsxs)("div", {
                    className: sx.p_,
                    children: [
                        i
                            .slice(0, t.isForumLikeChannel() ? i.length : l)
                            .map((e) => (0, r.jsx)(s_, { thread: e }, e.id))
                            .filter((e) => a.isValidElement(e))
                            .slice(0, l),
                        (0, r.jsxs)(er.D, {
                            className: sx.nM,
                            onClick: function () {
                                t.isForumLikeChannel()
                                    ? (0, lU.iN)(t.id)
                                    : (0, I.openModalLazy)(async () => {
                                          let { default: e } = await Promise.all([
                                              n.e("327744"),
                                              n.e("374962"),
                                              n.e("592000"),
                                              n.e("524434"),
                                              n.e("849162"),
                                              n.e("927517"),
                                              n.e("552705"),
                                              n.e("481647"),
                                              n.e("776602"),
                                              n.e("704434"),
                                              n.e("140402"),
                                              n.e("139970"),
                                              n.e("179049"),
                                              n.e("294857"),
                                              n.e("713567"),
                                              n.e("444567"),
                                              n.e("695170"),
                                              n.e("49716"),
                                              n.e("751743"),
                                              n.e("409980"),
                                              n.e("65225"),
                                          ]).then(n.bind(n, 126768));
                                          return (n) => (0, r.jsx)(e, { channel: t, ...n });
                                      });
                            },
                            children: [
                                (0, r.jsx)("div", {
                                    className: sx.R4,
                                    children: (0, r.jsx)(s, { size: "custom", className: sx.Kk }),
                                }),
                                (0, r.jsx)("div", {
                                    className: sx.Pf,
                                    children: (0, r.jsx)(tl.E, {
                                        variant: "text-sm/normal",
                                        color: "none",
                                        children: ef.intl.string(ef.t["4qdZ93"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
}
function s_(e) {
    let { thread: t } = e,
        n = (0, h.bG)([lG.default], () => lG.default.getUser(t.ownerId)),
        i = (0, sC.JO)(t);
    return (0, r.jsxs)(er.D, {
        className: sx.nM,
        onClick: function (e) {
            (0, nB.JA)(t, t.isForumPost() ? e.shiftKey : !e.shiftKey, nK.H9.POPOUT);
        },
        children: [
            (0, r.jsx)("div", {
                className: sx.R4,
                children:
                    null == n
                        ? (0, r.jsx)("img", {
                              className: sx.my,
                              src: sE.Ay.getDefaultAvatarURL(void 0, void 0),
                              alt: "",
                          })
                        : (0, r.jsx)(sp.A, { className: sx.my, user: n, size: sf._3.SIZE_16 }),
            }),
            (0, r.jsxs)("div", {
                className: sx.Pf,
                children: [
                    (0, r.jsx)(tl.E, { className: sx.UU, variant: "text-sm/normal", color: "none", children: t.name }),
                    (0, r.jsx)(tl.E, { variant: "text-sm/normal", color: "text-muted", children: "\u2022" }),
                    (0, r.jsx)(tl.E, {
                        className: sx.vE,
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: (0, sC.aK)(i),
                    }),
                ],
            }),
        ],
    });
}
var sS = n(70688),
    sI = n(545691);
function sb(e) {
    let { frameId: t } = e;
    return (0, r.jsx)(es.m, {
        asContainer: !0,
        text: ef.intl.string(ef.t.VkMnR2),
        children: (0, r.jsx)(er.D, {
            className: eC.Xs,
            onClick: () => (0, sI.A)(t),
            "aria-label": ef.intl.string(ef.t.VkMnR2),
            children: (0, r.jsx)(sS.DoorExitIcon, { size: "xs", color: "currentColor", className: eC.gE }),
        }),
    });
}
var sj = n(664699);
function sv(e) {
    let { channel: t, isSuggestedSection: n } = e;
    return (0, r.jsx)(es.m, {
        asContainer: !0,
        text: ef.intl.string(ef.t.ZXxLQg),
        children: (0, r.jsx)(er.D, {
            className: eC.Xs,
            onClick: () => (0, sj.A)(t, n ? lL.A.CHANNEL_LIST_SUGGESTED_SECTION : void 0),
            "aria-label": ef.intl.string(ef.t.ZXxLQg),
            children: (0, r.jsx)(nw.ChatIcon, { size: "xs", color: "currentColor", className: eC.gE }),
        }),
    });
}
var sG = n(364522),
    sy = n(302959),
    sR = n(709899),
    sM = n(970928),
    sT = n(427262),
    sL = n(641635);
let sU = nE.DN.SIZE_24;
function sD(e) {
    let { activity: t, embeddedApp: n } = e,
        i = t?.assets,
        l = t?.application_id;
    if (null == i || (null == i.large_image && null == i.small_image)) {
        let e = sE.Ay.getApplicationIconURL({ id: n.application.id, icon: n.application.icon }),
            t = n.application.name;
        return (0, r.jsx)(es.m, {
            text: t,
            position: "top",
            asContainer: !0,
            children: (0, r.jsx)("img", { alt: t, src: e, className: sL.P3 }),
        });
    }
    let s = i.large_image ?? i.small_image;
    return null != s
        ? (0, r.jsx)("img", { alt: i.large_text ?? "", src: (0, sM.uD)(l, s, [128, 128]), className: sL.P3 })
        : null;
}
function sP(e) {
    let { activity: t, embeddedApp: n, channel: i } = e,
        l = Array.from(n.embeddedActivity.userIds),
        s = (0, h.yK)([lG.default], () => l.map((e) => lG.default.getUser(e)).filter(t_.Vq));
    return (0, r.jsx)("div", {
        className: sL.ec,
        children: (0, r.jsxs)("div", {
            className: sL.Wh,
            children: [
                (0, r.jsx)(sD, { activity: t, embeddedApp: n }),
                (0, r.jsxs)("div", {
                    className: sL.X0,
                    children: [
                        (0, r.jsx)(i1.D, {
                            variant: "heading-sm/semibold",
                            color: "text-strong",
                            className: sL.wx,
                            lineClamp: 1,
                            children: n.application.name,
                        }),
                        t?.details != null &&
                            "" !== t.details &&
                            (0, r.jsx)(tl.E, {
                                variant: "text-xs/normal",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.details,
                            }),
                        t?.state != null &&
                            "" !== t.state &&
                            (0, r.jsx)(tl.E, {
                                variant: "text-xs/normal",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.state,
                            }),
                        l.length > 0 &&
                            (0, r.jsx)(nE.Ay, {
                                className: sL.TN,
                                guildId: i.guild_id,
                                users: s,
                                size: sU,
                                max: 7,
                                renderUser: function (e) {
                                    if (null == e || e === nE.mt) return null;
                                    let t = sT.Ay.getName(e);
                                    return (0, r.jsx)(
                                        es.m,
                                        {
                                            asContainer: !0,
                                            text: t,
                                            position: "bottom",
                                            children: (0, r.jsx)("img", {
                                                src: e.getAvatarURL(i.guild_id, sU),
                                                alt: t,
                                                className: sL.my,
                                            }),
                                        },
                                        e.id,
                                    );
                                },
                            }),
                    ],
                }),
            ],
        }),
    });
}
var sO = n(584960);
function sw(e) {
    let { channel: t, presenceActivity: n, embeddedApp: i, onAction: l } = e,
        s = Array.from(i.embeddedActivity.userIds),
        a = (0, h.bG)([lG.default], () => lG.default.getUser(s[0]));
    return null == a
        ? null
        : (0, r.jsxs)("div", {
              className: sO.Eb,
              children: [
                  (0, r.jsx)("div", {
                      className: sO.Il,
                      children: (0, r.jsx)(sP, { activity: n, embeddedApp: i, channel: t }),
                  }),
                  (0, r.jsx)("div", {
                      className: sO.M4,
                      children: (0, r.jsx)(sR.A, {
                          type: sy.M.VOICE_CHANNEL,
                          activity: n,
                          embeddedActivity: i.embeddedActivity,
                          user: a,
                          guildId: t.getGuildId(),
                          channelId: t.id,
                          buttonVariant: "primary",
                          onAction: l,
                      }),
                  }),
              ],
          });
}
var sV = n(713654),
    sH = n(744399);
function sk(e) {
    let { channel: t } = e,
        n = (0, h.bG)([P.A], () => P.A.getGuild(t.guild_id)),
        i = (0, t8.Ay)(t),
        l = (0, sV.gU)(t, n);
    return null == l
        ? null
        : (0, r.jsxs)("div", {
              className: sH.hY,
              children: [
                  (0, r.jsx)(l, { className: sH.p }),
                  (0, r.jsx)(tl.E, {
                      variant: "text-md/semibold",
                      color: "interactive-text-default",
                      className: sH.HA,
                      children: i,
                  }),
              ],
          });
}
var sB = n(220650);
function sF(e) {
    let { channel: t, onAction: n } = e,
        i = (0, lB.Ay)(t),
        l = Array.from((0, lB.Rz)(i).values());
    return 0 === l.length
        ? null
        : (0, r.jsxs)(sG.Ip, {
              className: sB.kL,
              children: [
                  (0, r.jsx)("div", { className: sB.oT, children: (0, r.jsx)(sk, { channel: t }) }),
                  (0, r.jsx)("div", { className: sB.zN }),
                  l.map((e, i) =>
                      (0, r.jsx)(
                          sw,
                          { embeddedApp: e, presenceActivity: e.presenceActivity ?? void 0, channel: t, onAction: n },
                          i,
                      ),
                  ),
              ],
          });
}
class sz extends iy {
    state = { shouldShowThreadsPopout: !1, shouldShowActivities: !1 };
    channelItemRef = a.createRef();
    enterTimer = null;
    exitTimer = null;
    handleMouseEnter = () => {
        (this.props.channelIsContentGated && null == this.props.embeddedApps) ||
            (this.resetTextChannelPopoutTimers(),
            (this.enterTimer = setTimeout(() => {
                null != this.props.embeddedApps && this.props.embeddedApps.length > 0
                    ? this.setState({ shouldShowActivities: !0 })
                    : this.props.channelIsContentGated || this.setState({ shouldShowThreadsPopout: !0 });
            }, 200)));
    };
    handleMouseLeave = () => {
        (this.resetTextChannelPopoutTimers(),
            (this.exitTimer = setTimeout(() => {
                (this.state.shouldShowActivities && this.setState({ shouldShowActivities: !1 }),
                    this.state.shouldShowThreadsPopout && this.setState({ shouldShowThreadsPopout: !1 }));
            }, 250)));
    };
    handleThreadsPopoutClose = () => {
        (this.resetTextChannelPopoutTimers(), this.setState({ shouldShowThreadsPopout: !1 }));
    };
    handleActivitiesPopoutClose = () => {
        (this.resetTextChannelPopoutTimers(), this.setState({ shouldShowActivities: !1 }));
    };
    handleClosePopout = () => {
        (this.state.shouldShowActivities && this.handleActivitiesPopoutClose(),
            this.state.shouldShowThreadsPopout && this.handleThreadsPopoutClose());
    };
    handleMouseDown = () => {
        var e;
        let t, n, i;
        (this.handleActivitiesPopoutClose(), this.handleThreadsPopoutClose());
        let { channel: l } = this.props,
            s = l.getGuildId();
        (nO.A.preload(s ?? H.ME, l.id),
            (e = l.id),
            (t = U.A.getChannel(e)),
            (n = t?.application_id),
            (i = t?.type === H.rbe.GUILD_APP ? (0, su.HD)(t) : null),
            null == t ||
                null == n ||
                null == i ||
                null != sc.A.getFrame((0, su.VA)(n, i)) ||
                !O.A.can(H.xBc.VIEW_CHANNEL, t) ||
                (0, se.qR)(t) ||
                (0, sd.BV)(t) ||
                (null != (0, ss.Ay)(n) &&
                    ((0, sl.M)(n, (0, so.A)(i), i.type),
                    (0, sa.A)(n).catch(H.tEg),
                    sr.YY.fetchMany([n]).catch(H.tEg))));
    };
    renderPopout = (e) => {
        let { channel: t, sorting: n, embeddedApps: i, channelIsContentGated: l } = this.props,
            { shouldShowActivities: s } = this.state;
        return t.isModeratorReportChannel() || l
            ? null
            : null != i && i.length > 0 && s && !n
              ? (0, r.jsx)(sF, { onAction: this.handleActivitiesPopoutClose, channel: t })
              : (0, r.jsx)(sN, { ...e, channel: this.props.channel });
    };
    componentWillUnmount() {
        this.resetTextChannelPopoutTimers();
    }
    resetTextChannelPopoutTimers() {
        (null != this.enterTimer && (clearTimeout(this.enterTimer), (this.enterTimer = null)),
            null != this.exitTimer && (clearTimeout(this.exitTimer), (this.exitTimer = null)));
    }
    handleContextMenu = (e) => {
        let { channel: t } = this.props;
        if (t.type === H.rbe.GROUP_DM)
            return void (0, ts.L3)(e, async () => {
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
                    n.e("368530"),
                    n.e("566378"),
                    n.e("17244"),
                    n.e("153416"),
                    n.e("760200"),
                ]).then(n.bind(n, 4027));
                return (n) => (0, r.jsx)(e, { ...n, channel: t, selected: !0 });
            });
        if (t.type === H.rbe.DM) {
            let i = lG.default.getUser(t.getRecipientId());
            null != i &&
                (0, ts.L3)(e, async () => {
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
                        n.e("516054"),
                        n.e("17244"),
                        n.e("298199"),
                        n.e("864464"),
                        n.e("439778"),
                    ]).then(n.bind(n, 385913));
                    return (n) => (0, r.jsx)(e, { ...n, user: i, channel: t, showModalItems: !1 });
                });
            return;
        }
        if (t.isModeratorReportChannel())
            return void (0, ts.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("926132"),
                    n.e("393336"),
                    n.e("146652"),
                    n.e("391763"),
                    n.e("955557"),
                    n.e("676156"),
                    n.e("947502"),
                    n.e("550033"),
                    n.e("343266"),
                    n.e("430997"),
                    n.e("379995"),
                    n.e("578580"),
                ]).then(n.bind(n, 907647));
                return (n) => (0, r.jsx)(e, { ...n, channel: t });
            });
        let i = P.A.getGuild(t.getGuildId());
        null != i &&
            (0, ts.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("926132"),
                    n.e("993103"),
                    n.e("893190"),
                    n.e("393336"),
                    n.e("146652"),
                    n.e("391763"),
                    n.e("955557"),
                    n.e("676156"),
                    n.e("474610"),
                    n.e("947502"),
                    n.e("603998"),
                    n.e("550033"),
                    n.e("343266"),
                    n.e("965789"),
                    n.e("198415"),
                    n.e("309004"),
                    n.e("412255"),
                    n.e("63340"),
                    n.e("430997"),
                    n.e("356675"),
                    n.e("379995"),
                    n.e("544058"),
                    n.e("697367"),
                    n.e("591377"),
                    n.e("35723"),
                    n.e("566378"),
                    n.e("256372"),
                    n.e("29542"),
                    n.e("477233"),
                    n.e("248804"),
                    n.e("638114"),
                    n.e("529005"),
                    n.e("335517"),
                ]).then(n.bind(n, 317804));
                return (n) => (0, r.jsx)(e, { ...n, channel: t, guild: i });
            });
    };
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e ? null : (0, r.jsx)("div", { className: eC.yW, children: e });
    }
    render() {
        let {
                channel: e,
                guild: t,
                selected: n,
                muted: i,
                unread: l,
                hasActiveThreads: s,
                hasMoreActiveThreads: a,
                mentionCount: o,
                connectChannelDropTarget: d,
                connectChannelDragSource: c,
                connectDragPreview: u,
                canReorderChannel: h,
                isSubscriptionGated: m,
                isFavoriteSuggestion: g,
                subtitle: A,
                forceTopLevelThread: f,
                embeddedApps: p,
                resolvedUnreadSetting: C,
                enableActivities: E,
                isSuggestedSection: x,
                sorting: N,
                appFrameId: _,
                appRunningLabel: S,
            } = this.props,
            { shouldShowThreadsPopout: I, shouldShowActivities: b } = this.state,
            j = E && null != p && p.length > 0,
            v = sn(A),
            G = x ? { source: lL.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
            y = (0, lp.Ay)({
                channel: e,
                unread: l,
                mentionCount: o,
                isSubscriptionGated: m,
                embeddedActivitiesCount: p?.length,
            }),
            R = (0, r.jsxs)("li", {
                className: eJ()(this.getClassName(), { [eC.r9]: this.isDisabled(), [eC.wH]: n }),
                "data-dnd-name": (0, t8.m1)(e, lG.default, lk.A),
                onMouseEnter: a || j ? this.handleMouseEnter : void 0,
                onMouseLeave: a || j ? this.handleMouseLeave : void 0,
                children: [
                    (0, r.jsx)(lm.Y, {
                        targetElementRef: this.channelItemRef,
                        position: "right",
                        renderPopout: this.renderPopout,
                        onRequestClose: this.handleClosePopout,
                        spacing: 17,
                        shouldShow: (a && this.state.shouldShowThreadsPopout) || (j && this.state.shouldShowActivities),
                        children: () =>
                            (0, r.jsxs)(nZ.Ay, {
                                ref: this.channelItemRef,
                                className: eC.Ki,
                                channel: e,
                                guild: t,
                                selected: !g && n,
                                muted: i,
                                unread: l,
                                mentionCount: o,
                                hasActiveThreads: s,
                                subtitle: v?.subtitle,
                                subtitleColor: v?.color,
                                onMouseDown: this.handleMouseDown,
                                onContextMenu: this.handleContextMenu,
                                connectDragPreview: h ? u : null,
                                isFavoriteSuggestion: g,
                                channelTypeOverride: f ? H.rbe.GUILD_TEXT : void 0,
                                resolvedUnreadSetting: C,
                                transitionExtras: G,
                                iconClassName: null != S ? eC.Gj : void 0,
                                iconTooltipText: S ?? void 0,
                                "aria-label": null != S ? `${y}, ${S}` : y,
                                children: [
                                    g &&
                                        (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                this.renderAcceptSuggestionButton(),
                                                this.renderRemoveSuggestionButton(),
                                            ],
                                        }),
                                    !g &&
                                        (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                null != _ ? (0, r.jsx)(sb, { frameId: _ }) : null,
                                                this.renderChannelInfo(),
                                                e.type === H.rbe.GUILD_APP
                                                    ? (0, r.jsx)(sv, { channel: e, isSuggestedSection: x })
                                                    : null,
                                                this.renderInviteButton(),
                                                this.renderEditButton(),
                                            ],
                                        }),
                                ],
                            }),
                    }),
                    e.type !== H.rbe.GUILD_APP || g
                        ? null
                        : (0, r.jsx)(si.A, {
                              applicationId: e.application_id,
                              guildId: e.guild_id,
                              targetElementRef: this.channelItemRef,
                              disabled: !0 === N || I || b,
                              position: "right",
                              animationPosition: "left",
                              spacing: 17,
                          }),
                ],
            });
        return h ? d(c(R)) : R;
    }
}
let sK = F(sz);
function sW(e) {
    let { channel: t, guild: n, disableSorting: i, isFavoriteCategory: l, muted: s, selected: a } = e,
        { hasActiveThreads: o, hasMoreActiveThreads: d } = (0, nk.NR)(t),
        c = (0, h.cf)([nP.Ay], () => ({
            unread: nP.Ay.hasUnread(t.id),
            ackMessageId: nP.Ay.ackMessageId(t.id),
            isLowImportanceMention: nP.Ay.getIsMentionLowImportance(t.id),
        })),
        u = (0, h.bG)([V.Ay], () => V.Ay.resolveUnreadSetting(t)),
        m = (0, h.cf)([U.A, O.A], () => {
            let e = U.A.getChannel(t.parent_id);
            return {
                canManageChannel: O.A.can(H.xBc.MANAGE_CHANNELS, t),
                canReorderChannel:
                    !0 !== i &&
                    ((0, M.ai)(n.id) ||
                        (null != e ? O.A.can(H.xBc.MANAGE_CHANNELS, e) : O.A.can(H.xBc.MANAGE_CHANNELS, n))),
            };
        }),
        g = (0, h.bG)([iZ.A], () => iZ.A.shouldIndicateNewChannel(n.id, t.id)),
        { needSubscriptionToAccess: A, isSubscriptionGated: f } = (0, nH.A)(t.id),
        p = (0, h.bG)([V.Ay], () => V.Ay.isFavorite(n.id, t.id)),
        C = (0, se.ni)(t),
        E = (0, l8.Gp)(t.id),
        x = l1({
            channel: t,
            isChannelCollapsed: !1,
            isChannelSelected: a,
            isSubscriptionGated: f,
            needSubscriptionToAccess: A,
            isNewChannel: g,
            muted: s,
            enableActivities: E,
            resolvedUnreadSetting: u,
        }),
        N = (0, lB.Ay)(t),
        _ = (0, h.bG)([sm.A, sh.Ay], () => sm.A.getChannelId() !== t.id && sh.Ay.isCurrentUserGuest(t.getGuildId())),
        S = (0, lf.BX)("ConnectedTextChannel"),
        { frameId: I, runningLabel: b } = (0, st.A)(t);
    return _
        ? null
        : (0, r.jsx)(sK, {
              ...c,
              ...m,
              ...e,
              hasActiveThreads: o,
              hasMoreActiveThreads: d,
              isSubscriptionGated: f,
              needSubscriptionToAccess: A,
              isNewChannel: g && e.canBeNewChannel,
              isFavoriteSuggestion: l && !p,
              channelIsContentGated: C,
              channelInfo: x,
              embeddedApps: N,
              resolvedUnreadSetting: u,
              hasChannelInfo: null != x,
              enableActivities: E,
              shouldEnlargeTargets: S,
              appFrameId: I,
              appRunningLabel: b,
          });
}
var sY = n(900797),
    sX = n(636585),
    sJ = n(531685),
    sq =
        (((s = {}).HIDDEN = "hidden"),
        (s.UNREAD = "unread"),
        (s.MENTIONS = "mentions"),
        (s.VOICE_CHANNELS = "voice-channels"),
        s);
let sZ = { mode: "hidden", mentionCount: 0, targetChannelId: null },
    s$ = { topBar: sZ, bottomBar: sZ },
    sQ = {},
    s0 = {};
function s1(e) {
    let t = U.A.getChannel(e);
    return (
        !(null == t || null == t.getGuildId() || t.isGuildVocal()) &&
        !(t.isThread() ? nJ.A.isMuted(t.id) : V.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, tE.Y)(t)
    );
}
function s3(e) {
    let t = U.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let i = V.Ay.isGuildCollapsed(n),
        l = V.Ay.isChannelMuted(n, t.id);
    return (!i || !l) && nP.Ay.getMentionCount(e) > 0;
}
function s9(e) {
    return (
        !V.Ay.isChannelMuted(e.guild_id, e.id) &&
        (e.isGuildStageVoice()
            ? tb.A.getMutableParticipants(e.id, tj.ip.SPEAKER).length > 0
            : tN.Ay.getVoiceStatesForChannel(e).length > 0)
    );
}
function s2(e) {
    let { guildChannels: t } = tD.A.getGuildWithoutChangingGuildActionRows(e),
        n = t.getChannels(s0[e] ?? []);
    if (null == n || 0 === n.length) return !1;
    let i = null,
        l = null,
        s = null,
        r = null,
        a = !0,
        o = !0,
        c = !1,
        u = t.getCategoryFromSection(t.voiceChannelsSectionNumber),
        h = u?.getShownChannelIds() ?? [],
        [m, g, A] = t.getSlicedChannels(n);
    for (let e = 0; e < g.length; e++) {
        let t = g[e];
        if (
            ((s1(t.id) || d().some(t.threadIds, s1)) && (o = !1),
            (s3(t.id) || d().some(t.threadIds, s3)) && (a = !1),
            h.includes(t.id) && (c = !0),
            !o && !a && c)
        )
            break;
    }
    let f = 0,
        p = !1,
        C = 0,
        E = !1;
    if (o || a)
        for (let e = m.length - 1; e >= 0; e--) {
            let t = m[e];
            ((s1(t.id) || d().some(t.threadIds, s1)) && (null == l && (l = t.id), (p = !0)),
                (s3(t.id) || d().some(t.threadIds, s3)) &&
                    (null == i && (i = t.id),
                    (f += nP.Ay.getMentionCount(t.id)),
                    (f += d().sumBy(t.threadIds, nP.Ay.getMentionCount))));
        }
    if (o || a)
        for (let e = 0; e < A.length; e++) {
            let t = A[e];
            if (!o && !a) break;
            ((s1(t.id) || d().some(t.threadIds, s1)) && (null == r && (r = t.id), (E = !0)),
                (s3(t.id) || d().some(t.threadIds, s3)) &&
                    (null == s && (s = t.id),
                    (C += nP.Ay.getMentionCount(t.id)),
                    (C += d().sumBy(t.threadIds, nP.Ay.getMentionCount))));
        }
    let x = null,
        N = null,
        _ = u?.getChannelRecords() ?? [];
    (a && C > 0
        ? (x = { mode: "mentions", mentionCount: C, targetChannelId: s })
        : !c && d().some(_, s9)
          ? (x = { mode: "voice-channels", mentionCount: 0, targetChannelId: null })
          : o && E && (x = { mode: "unread", mentionCount: 0, targetChannelId: r }),
        a && f > 0
            ? (N = { mode: "mentions", mentionCount: f, targetChannelId: i })
            : o && p && (N = { mode: "unread", mentionCount: 0, targetChannelId: l }));
    let S = null != N && (null == x || ("mentions" !== x.mode && "mentions" === N.mode)),
        I = null != x && ("mentions" === x.mode || !S);
    return ((sQ[e] = { topBar: S ? (N ?? sZ) : sZ, bottomBar: I ? (x ?? sZ) : sZ }), !0);
}
let s6 = d().throttle(s2, 200);
function s5(e) {
    let { guildId: t } = e,
        n = P.A.getGuild(t);
    return null != n && !!n.features.has(H.GuildFeatures.COMMUNITY) && s6(t);
}
function s7(e) {
    let { id: t } = e,
        n = U.A.getChannel(t);
    if (null == n) return !1;
    let i = P.A.getGuild(n.guild_id);
    return null != i && !!i.features.has(H.GuildFeatures.COMMUNITY) && s6(n.guild_id);
}
function s4(e) {
    let { channel: t } = e,
        n = U.A.getChannel(t.id);
    if (null == n) return !1;
    let i = P.A.getGuild(t.guild_id);
    return null != i && !!i.features.has(H.GuildFeatures.COMMUNITY) && s6(n.guild_id);
}
function s8(e) {
    let { channelId: t } = e,
        n = U.A.getChannel(t);
    if (null == n) return !1;
    let i = P.A.getGuild(n.guild_id);
    return (
        null != i && !!i.features.has(H.GuildFeatures.COMMUNITY) && w.A.getGuildId() === n.guild_id && s6(n.guild_id)
    );
}
function re(e) {
    let { guildId: t } = e;
    return null != t && s6(t);
}
class rt extends h.Ay.Store {
    static displayName = "ChannelListUnreadsStore";
    initialize() {
        this.waitFor(tD.A, U.A, P.A, nJ.A, nP.Ay, w.A, tN.Ay, tb.A, V.Ay, lG.default);
    }
    getUnreadStateForGuildId(e) {
        return sQ[e] ?? s$;
    }
}
let rn = new rt(ta.h, {
    UPDATE_CHANNEL_LIST_DIMENSIONS: function (e) {
        let { guildId: t, channelIds: n } = e,
            i = P.A.getGuild(t);
        return (
            null != i &&
            !!i.features.has(H.GuildFeatures.COMMUNITY) &&
            null != n &&
            !d().isEqual(s0[t], n) &&
            ((s0[t] = n), s2(t))
        );
    },
    BULK_ACK: function (e) {
        let { channels: t } = e,
            n = !1;
        return (
            d()(t)
                .map((e) => {
                    let { channelId: t } = e;
                    return U.A.getChannel(t)?.guild_id;
                })
                .filter(t_.Vq)
                .uniq()
                .forEach((e) => {
                    let t = P.A.getGuild(e);
                    null != t && t.features.has(H.GuildFeatures.COMMUNITY) && s6(e) && (n = !0);
                }),
            n
        );
    },
    CHANNEL_ACK: s8,
    CHANNEL_DELETE: s4,
    CHANNEL_LOCAL_ACK: s8,
    MESSAGE_ACK: s8,
    MESSAGE_CREATE: s8,
    MESSAGE_DELETE_BULK: s8,
    MESSAGE_DELETE: s8,
    PASSIVE_UPDATE_V2: function (e) {
        let t = P.A.getGuild(e.guildId);
        return !!(e.channels.length > 0 && null != t && t.features.has(H.GuildFeatures.COMMUNITY)) && s6(e.guildId);
    },
    RESORT_THREADS: s8,
    THREAD_CREATE: s4,
    THREAD_DELETE: s4,
    THREAD_LIST_SYNC: s5,
    THREAD_MEMBER_UPDATE: s7,
    THREAD_MEMBERS_UPDATE: s7,
    THREAD_UPDATE: s4,
    BULK_CLEAR_RECENTS: s5,
    CATEGORY_COLLAPSE_ALL: s5,
    CATEGORY_EXPAND_ALL: s5,
    CURRENT_USER_UPDATE: function () {
        let e = lG.default.getCurrentUser()?.nsfwAllowed;
        if (e === i) return !1;
        i = e;
        let t = w.A.getGuildId();
        if (null == t) return !1;
        let n = P.A.getGuild(t);
        return null != n && !!n.features.has(H.GuildFeatures.COMMUNITY) && s6(t);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = w.A.getGuildId();
        if (null == n || !new Set(t.map((e) => e.guildId)).has(n)) return !1;
        let i = sQ[n];
        return null != i && "voice-channels" === i.bottomBar.mode && s6(n);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: re,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: re,
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: t } = e;
        for (let e of t) null != e.guild_id && s6(e.guild_id);
    },
    USER_GUILD_SETTINGS_GUILD_UPDATE: re,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: re,
});
var ri = n(350536);
let rl = { friction: 30, tension: 300 };
function rs(e) {
    let { guildChannels: t, jumpToVoiceChannels: n } = e,
        i = t.getCategoryFromSection(t.voiceChannelsSectionNumber),
        l = (0, h.bG)([tN.Ay], () => tN.Ay.getVoiceStates(t.id), [t.id]),
        s = a.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), n());
            },
            [n],
        ),
        o = i?.getChannelRecords() ?? [],
        d = (0, n_.fK)({ channels: o, selectedChannelId: null, selectedVoiceChannelId: null, voiceStates: l });
    return (0, r.jsxs)(er.D, {
        className: eJ()(ri.M0, ri.OF),
        onClick: s,
        children: [
            (0, r.jsx)(t7.H, { size: "custom", className: ri.Gs, width: 14, height: 14, color: "currentColor" }),
            (0, r.jsx)(tl.E, {
                variant: "text-xs/semibold",
                className: ri.pM,
                children: ef.intl.format(ef.t["fDlr+F"], { count: d.length }),
            }),
            (0, r.jsx)(sX.A, {
                guildId: t.id,
                className: ri.J$,
                users: d.slice(0, 4),
                renderMoreUsers: () => null,
                max: 4,
                size: sf._3.SIZE_16,
            }),
        ],
    });
}
function rr(e) {
    let { position: t, guildChannels: n, guildChannelsVersion: i, jumpToVoiceChannels: l, jumpToChannel: s } = e,
        { bottomBar: o, topBar: d } = (0, h.cf)([rn], () => rn.getUnreadStateForGuildId(n.id)),
        c = (0, h.bG)([sJ.A], () => sJ.A.isFocused()),
        { mode: u, mentionCount: m, targetChannelId: g } = "bottom" === t ? o : d,
        A = u === sq.HIDDEN,
        f = (0, ti.z)(
            {
                to: { transform: A ? ("bottom" === t ? "translateY(180%)" : "translateY(-180%)") : "translateY(0%)" },
                config: rl,
            },
            c ? "respect-motion-settings" : "animate-never",
        ),
        p = a.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), null != g && s(g));
            },
            [s, g],
        );
    return (0, r.jsx)("div", {
        className: eJ()(ri.kL, { [ri.Mn]: "top" === t, [ri.sQ]: "bottom" === t }),
        children: (0, r.jsx)(tn.animated.div, {
            className: ri.pK,
            style: f,
            "aria-hidden": A,
            children: (function () {
                switch (u) {
                    case sq.HIDDEN:
                        return (0, r.jsx)("div", { className: eJ()(ri.M0, ri.Te) });
                    case sq.UNREAD:
                        return (0, r.jsxs)(er.D, {
                            className: ri.M0,
                            onClick: p,
                            children: [
                                "bottom" === t
                                    ? (0, r.jsx)(t6.a, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: ri.z_,
                                          height: 14,
                                          width: 14,
                                      })
                                    : (0, r.jsx)(sY.t, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: ri.z_,
                                          height: 14,
                                          width: 14,
                                      }),
                                (0, r.jsx)(tl.E, {
                                    variant: "text-xs/semibold",
                                    color: "interactive-text-default",
                                    className: ri.pM,
                                    children: ef.intl.string(ef.t.FCRiT3),
                                }),
                            ],
                        });
                    case sq.MENTIONS:
                        return (0, r.jsx)(er.D, {
                            className: eJ()(ri.M0, ri.vU),
                            onClick: p,
                            children: (0, r.jsx)(tl.E, {
                                variant: "text-xs/semibold",
                                color: "badge-primary-text",
                                className: ri.pM,
                                children: ef.intl.format(ef.t.EQcLyp, { count: m }),
                            }),
                        });
                    case sq.VOICE_CHANNELS:
                        return (0, r.jsx)(rs, { jumpToVoiceChannels: l, guildChannels: n, guildChannelsVersion: i });
                    default:
                        return;
                }
            })(),
        }),
    });
}
var ra = n(310953),
    ro = n(173860);
function rd(e) {
    let t = U.A.getChannel(e);
    return (
        null != t &&
        null != t.getGuildId() &&
        !(t.isThread() ? nJ.A.isMuted(t.id) : V.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, tE.Y)(t)
    );
}
function rc(e) {
    let t = U.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let i = V.Ay.isGuildCollapsed(n),
        l = V.Ay.isChannelMuted(n, t.id);
    return (!i || !l) && nP.Ay.getMentionCount(e) > 0;
}
function ru(e) {
    let { guildId: t, guildChannels: n, guildChannelsVersion: i, ref: l, ...s } = e,
        a = (0, ra.W)(t, n, i, { withVoiceChannels: !1 }, { ignoreRecents: !0 }),
        o = (0, h.bG)([sJ.A], () => sJ.A.isFocused());
    return (0, r.jsx)(ro.A, { ref: l, ...s, isUnread: rd, isMentioned: rc, items: a, animate: o });
}
var rh = n(81466);
function rm(e) {
    let { guild: t, selected: i } = e,
        { hasUnread: l, mentionCount: s } = (0, h.cf)(
            [nP.Ay],
            () => ({
                hasUnread: nP.Ay.hasUnread(t.id, it.P.GUILD_EVENT),
                mentionCount: nP.Ay.getMentionCount(t.id, it.P.GUILD_EVENT),
            }),
            [t.id],
        ),
        a = (0, h.bG)([V.Ay], () => V.Ay.isMuteScheduledEventsEnabled(t.id));
    async function o() {
        await (0, I.openModalLazy)(async () => {
            let { default: e } = await Promise.all([
                n.e("670870"),
                n.e("684231"),
                n.e("570690"),
                n.e("886631"),
                n.e("884841"),
                n.e("998835"),
                n.e("694303"),
                n.e("147626"),
                n.e("256373"),
                n.e("970644"),
                n.e("449347"),
                n.e("853934"),
                n.e("468248"),
                n.e("469647"),
                n.e("798354"),
                n.e("188353"),
                n.e("886571"),
            ]).then(n.bind(n, 318104));
            return (n) => (0, r.jsx)(e, { ...n, guildId: t.id });
        });
    }
    let d = (0, tZ.Ay)(t.id),
        c = d.length > 0 ? ef.intl.formatToPlainString(ef.t.IBdqSu, { number: d.length }) : ef.intl.string(ef.t.tlopTM);
    return (0, r.jsx)(eu.G, {
        id: `upcoming-events-${t.id}`,
        renderIcon: (e) => (0, r.jsx)(rh.CalendarIcon, { size: "md", color: "currentColor", className: e }),
        text: c,
        selected: i,
        onClick: o,
        onContextMenu: function (e) {
            (0, ts.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("426386"), n.e("819990")]).then(n.bind(n, 221621));
                return (n) => (0, r.jsx)(e, { ...n, guildId: t.id });
            });
        },
        showUnread: l && !a,
        trailing: !a && s > 0 ? (0, r.jsx)(eb.hV, { className: n5.Do, disableColor: !0, count: s }) : null,
    });
}
var rg = n(350835),
    rA = n(845056),
    rf = n(765379),
    rp = n(271683),
    rC = n(725613),
    rE = n(857253),
    rx = n(360729),
    rN = n(22231),
    r_ = n(241326),
    rS = n(750943),
    rI = n(743674),
    rb = n(888697),
    rj = n(26741),
    rv = n(493819),
    rG = n(722884),
    ry = n(649712),
    rR = n(176431);
function rM(e) {
    let { channel: t, imageUrl: i, animatedUrl: l, bannerHash: s, canModifyHangout: o } = e,
        d = (0, rI.S)(i),
        c = (0, eF.je)(t),
        u = (0, rj.P9)({ guildId: t.guild_id, channelId: t.id, bannerHash: s }),
        h = a.useCallback(() => {
            ((0, rj.J_)({ guildId: t.guild_id, channelId: t.id }), (0, rG.A)({ channel: t }));
        }, [t]),
        m = a.useCallback(() => {
            ((0, rj.nK)({ guildId: t.guild_id, channelId: t.id }), (0, rb.e2)(t.id));
        }, [t.guild_id, t.id]),
        g = a.useCallback(
            (e) => {
                c
                    ? (0, ts.L3)(e, async () => {
                          let { default: e } = await n.e("555558").then(n.bind(n, 316421));
                          return (n) => (0, r.jsx)(e, { ...n, channel: t });
                      })
                    : e.preventDefault();
            },
            [t, c],
        );
    return (0, r.jsxs)("div", {
        ref: u,
        className: rR.rs,
        onContextMenu: g,
        children: [
            (0, r.jsx)("div", {
                className: rR.ZS,
                style: null != d ? { backgroundColor: d } : void 0,
                children: (0, r.jsx)(rv.A, { imageUrl: i, animatedUrl: l, className: rR.Sl }),
            }),
            o
                ? (0, r.jsxs)("div", {
                      className: rR.n_,
                      children: [
                          (0, r.jsx)(es.m, {
                              text: ef.intl.string(ry.default.XJ4UpB),
                              children: (0, r.jsx)(er.D, {
                                  className: rR.HF,
                                  onClick: h,
                                  children: (0, r.jsx)(rN.PencilIcon, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                          (0, r.jsx)(es.m, {
                              text: ef.intl.string(ry.default.XV4qT6),
                              children: (0, r.jsx)(er.D, {
                                  className: rR.HF,
                                  onClick: m,
                                  children: (0, r.jsx)(r_.TrashIcon, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function rT(e) {
    let { channel: t } = e,
        n = (0, rj.dX)({ guildId: t.guild_id, channelId: t.id }),
        i = a.useCallback(() => {
            ((0, rj.J_)({ guildId: t.guild_id, channelId: t.id }), (0, rG.A)({ channel: t }));
        }, [t]);
    return (0, r.jsx)("div", {
        ref: n,
        className: rR._o,
        children: (0, r.jsxs)(er.D, {
            className: rR.hH,
            onClick: i,
            children: [
                (0, r.jsx)(rS.X, { size: "xs", color: "currentColor" }),
                (0, r.jsx)(tl.E, {
                    variant: "text-sm/medium",
                    color: "currentColor",
                    children: ef.intl.string(ry.default.NGcIOF),
                }),
            ],
        }),
    });
}
function rL(e) {
    let { channel: t, isConnected: n } = e,
        { enableHangoutWindow: i } = (0, eB.Dm)({ guildId: t.guild_id, location: "HangoutWindow" }),
        l = (0, eF.W6)(t),
        s = n && l,
        o = t.voiceHangout,
        d = o?.banner_hash,
        c = a.useMemo(() => {
            if (null == d || null == t.guild_id) return null;
            let e = (0, eF.Sq)({ guildId: t.guild_id, bannerHash: d });
            return null == e ? null : { bannerHash: d, ...e };
        }, [t.guild_id, d]);
    return i
        ? null != c
            ? (0, r.jsx)(rM, {
                  channel: t,
                  imageUrl: c.imageUrl,
                  animatedUrl: c.animatedUrl,
                  bannerHash: c.bannerHash,
                  canModifyHangout: s,
              })
            : s
              ? (0, r.jsx)(rT, { channel: t })
              : null
        : null;
}
var rU = n(290863),
    rD = n(461213),
    rP = n(532622),
    rO = n(882840),
    rw = n(208971),
    rV = n(46054),
    rH = n(569381),
    rk = n(165648);
function rB(e) {
    let { channel: t, connected: n, hovered: i, subtitle: l, disableTooltips: s = !1, onClick: o } = e,
        d = (0, rw.G)((0, rO.l)(t)),
        { enableHangoutWindow: c } = (0, eB.Dm)({ guildId: t.guild_id, location: "VoiceChannelStatus" }),
        u = c && (0, eF.lr)(t),
        h = null != d && d.length > 0,
        m = (0, rP.Ay)(t, !0),
        g = null != l && l.length > 0;
    if (
        (a.useEffect(() => {
            h && la.default.track(H.HAw.VOICE_CHANNEL_TOPIC_VIEWED, { channel_id: t.id, guild_id: t.guild_id });
        }, [h, t.id, t.guild_id]),
        null == t.guild_id)
    )
        return null;
    let A = eJ()(rH.Ui, n && m ? rH.BI : null);
    return h
        ? (0, r.jsx)(er.D, {
              className: A,
              onClick: m ? o : void 0,
              children: (0, r.jsx)(tl.E, {
                  variant: "text-xs/medium",
                  className: eJ()(rH.qS, rk.PT),
                  children: (0, r.jsx)(t1.A, {
                      shouldShow: !s,
                      children: rV.A.parseVoiceChannelStatus(d, !0, { channelId: t.id }),
                  }),
              }),
          })
        : n && m && !u && (!g || i)
          ? (0, r.jsxs)(er.D, {
                className: A,
                onClick: o,
                children: [
                    (0, r.jsx)(tl.E, {
                        variant: "text-xs/medium",
                        className: rH.qS,
                        children: ef.intl.string(ef.t.Mgpxiw),
                    }),
                    (0, r.jsx)(rN.PencilIcon, { color: "currentColor", className: rH.rD, size: "xxs" }),
                ],
            })
          : g
            ? (0, r.jsx)(t1.A, { shouldShow: !s, children: l })
            : null;
}
class rF extends iy {
    state = { shouldShowGuildVerificationPopout: !1, hovered: !1 };
    ref = a.createRef();
    channelItemRef = a.createRef();
    closeGuildVerificationPopout = () => {
        this.setState({ shouldShowGuildVerificationPopout: !1 });
    };
    handleVoiceConnect = () => {
        let {
            locked: e,
            connected: t,
            channel: n,
            unverifiedAccount: i,
            needSubscriptionToAccess: l,
            mentionCount: s,
            isSuggestedSection: r,
            guildRoomsEnabled: a,
        } = this.props;
        i && this.setState({ shouldShowGuildVerificationPopout: !0 });
        let o = s > 0;
        (o && lg.A.updateChatOpen(n.id, !0),
            nV.A.handleVoiceConnect({
                channel: n,
                connected: t,
                needSubscriptionToAccess: l,
                routeDirectlyToChannel: o || a,
                locked: e,
                transitionExtras: r ? { source: lL.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
            }));
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            i = P.A.getGuild(t.getGuildId());
        null != i &&
            (0, ts.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("926132"),
                    n.e("993103"),
                    n.e("893190"),
                    n.e("393336"),
                    n.e("146652"),
                    n.e("391763"),
                    n.e("955557"),
                    n.e("676156"),
                    n.e("474610"),
                    n.e("947502"),
                    n.e("603998"),
                    n.e("550033"),
                    n.e("343266"),
                    n.e("965789"),
                    n.e("198415"),
                    n.e("309004"),
                    n.e("412255"),
                    n.e("63340"),
                    n.e("430997"),
                    n.e("379995"),
                    n.e("544058"),
                    n.e("591377"),
                    n.e("35723"),
                    n.e("566378"),
                    n.e("256372"),
                    n.e("29542"),
                    n.e("419690"),
                    n.e("465694"),
                    n.e("426792"),
                    n.e("248804"),
                    n.e("318663"),
                    n.e("599990"),
                    n.e("599854"),
                ]).then(n.bind(n, 119357));
                return (n) => (0, r.jsx)(e, { ...n, channel: t, guild: i });
            });
    };
    handleMouseEnter = () => {
        this.setState({ hovered: !0 });
    };
    handleMouseLeave = () => {
        this.setState({ hovered: !1 });
    };
    getVoiceStatesCount() {
        let { voiceStates: e } = this.props;
        return e?.length ?? 0;
    }
    isFull() {
        let { channel: e } = this.props;
        return (0, n_.Pd)(e, nF.A, P.A);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        if (n) return eC.ZS;
        if (null != t)
            if (e > t) return eC.mU;
            else return eC.TR;
        return eC.fx;
    }
    handleClick = () => {
        let { channel: e } = this.props,
            t = e.getGuildId();
        (null != t && (0, lE.V)(t) && (0, lC.Ze)(t), this.handleVoiceConnect());
    };
    handleVoiceStatusClick = (e) => {
        let { connected: t, channel: n } = this.props;
        t && (e.stopPropagation(), (0, rp.A)({ channel: n }));
    };
    renderSubtitle(e) {
        let { disableTooltips: t } = e,
            { channel: n, connected: i } = this.props,
            l = sn(this.props.subtitle)?.subtitle,
            { hovered: s } = this.state;
        return (0, r.jsx)(rB, {
            onClick: this.handleVoiceStatusClick,
            channel: n,
            connected: i,
            subtitle: l,
            hovered: s,
            disableTooltips: t,
        });
    }
    renderVoiceUsers() {
        let { channel: e, voiceStates: t, collapsed: n, withGuildIcon: i, tabIndex: l } = this.props;
        return (0, r.jsx)(n6.A, {
            channel: e,
            collapsed: n,
            collapsedMax: 6,
            voiceStates: t,
            withGuildIcon: i,
            tabIndex: l,
        });
    }
    renderHangoutWindow() {
        let { channel: e, connected: t, voiceStates: n, collapsed: i } = this.props;
        return !(null != n && n.length > 0) || i ? null : (0, r.jsx)(rL, { channel: e, isConnected: t });
    }
    renderPopout = () => {
        let { channel: e } = this.props,
            { shouldShowGuildVerificationPopout: t } = this.state;
        return t
            ? (0, r.jsx)(lT, { type: lM.VOICE, guildId: e.guild_id, closePopout: this.closeGuildVerificationPopout })
            : null;
    };
    renderOpenChatButton = () => {
        let { channel: e, locked: t, forceShowButtons: n, isSuggestedSection: i, shouldEnlargeTargets: l } = this.props;
        if (!t)
            return (0, r.jsx)(es.m, {
                asContainer: !0,
                text: ef.intl.string(ef.t.ZXxLQg),
                children: (0, r.jsx)(er.D, {
                    className: eJ()(eC.Xs, { [eC.Tf]: n }),
                    onClick: () => {
                        (lg.A.updateChatOpen(e.id, !0),
                            (0, lU.iN)(e.id, i ? { source: lL.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0));
                    },
                    "aria-label": ef.intl.string(ef.t.ZXxLQg),
                    focusProps: l ? { offset: 2 } : void 0,
                    children: (0, r.jsx)(nw.ChatIcon, { size: "xs", color: "currentColor", className: eC.gE }),
                }),
            });
    };
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e ? null : (0, r.jsx)("div", { className: eC.yW, children: e });
    }
    getTooltipText = () => {
        let { connected: e } = this.props;
        return this.isFull() && !e ? ef.intl.string(ef.t.rZfiNq) : null;
    };
    render() {
        let {
                channel: e,
                selected: t,
                connected: n,
                unread: i,
                resolvedUnreadSetting: l,
                mentionCount: s,
                locked: a,
                connectChannelDropTarget: o,
                connectChannelDragSource: d,
                connectUserDropTarget: c,
                connectDragPreview: u,
                canReorderChannel: h,
                canMoveMembers: m,
                showTutorial: g,
                hasActiveEvent: A,
                embeddedApps: f,
                isSubscriptionGated: p,
                isFavoriteSuggestion: C,
                withGuildIcon: E,
                hasStartTime: x,
                voiceChannelStartTime: N,
                shouldHighlightChannel: _,
                shouldUseAnimatedWaveform: S,
                voiceStates: I,
            } = this.props,
            { shouldShowGuildVerificationPopout: b } = this.state,
            j = this.getTooltipText(),
            v = _ || S,
            G = (0, r.jsxs)("li", {
                ref: this.ref,
                className: eJ()(this.getModeClass(), { [eC.r9]: this.isDisabled(), [eC.fy]: _ }),
                "data-dnd-name": (0, t8.m1)(e, lG.default, lk.A),
                children: [
                    _ &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)("div", { className: eC.UQ }),
                                (0, r.jsx)("div", { className: eC.l0 }),
                            ],
                        }),
                    (0, r.jsx)("div", {
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        children: (0, r.jsx)(lm.Y, {
                            targetElementRef: this.channelItemRef,
                            position: "right",
                            renderPopout: this.renderPopout,
                            onRequestClose: this.closeGuildVerificationPopout,
                            spacing: 17,
                            shouldShow: b,
                            children: () =>
                                (0, r.jsx)(es.m, {
                                    text: j,
                                    children: (0, r.jsxs)(nZ.Ay, {
                                        ref: this.channelItemRef,
                                        className: eC.Ki,
                                        disableOverflowTooltip: null != j,
                                        iconClassName: eJ()({ [eC.Gj]: A || x || v }),
                                        hasActiveEvent: A,
                                        channel: e,
                                        selected: !C && t,
                                        connected: n,
                                        unread: n ? i : void 0,
                                        resolvedUnreadSetting: l,
                                        mentionCount: s,
                                        locked: a,
                                        subtitle: this.renderSubtitle({ disableTooltips: null != j }),
                                        onClick: () => {
                                            this.handleClick();
                                        },
                                        onContextMenu: (e) => {
                                            this.handleContextMenu(e);
                                        },
                                        connectDragPreview: u,
                                        isFavoriteSuggestion: C,
                                        "aria-label": (0, lp.Ay)({
                                            channel: e,
                                            unread: i,
                                            mentionCount: s,
                                            voiceStates: I,
                                            activityNames: [
                                                ...new Set([
                                                    ...f.map((e) => e.application.name),
                                                    ...this.props.nonEmbeddedActivityNames,
                                                ]),
                                            ],
                                            isSubscriptionGated: p,
                                            voiceChannelStartTime: N,
                                        }),
                                        withGuildIcon: E,
                                        children: [
                                            C &&
                                                (0, r.jsxs)(r.Fragment, {
                                                    children: [
                                                        this.renderAcceptSuggestionButton(),
                                                        this.renderRemoveSuggestionButton(),
                                                    ],
                                                }),
                                            !C &&
                                                (0, r.jsxs)(r.Fragment, {
                                                    children: [
                                                        this.renderOpenChatButton(),
                                                        this.renderInviteButton(),
                                                        this.renderEditButton(),
                                                        this.renderChannelInfo(),
                                                    ],
                                                }),
                                        ],
                                    }),
                                }),
                        }),
                    }),
                    this.renderHangoutWindow(),
                    this.renderVoiceUsers(),
                ],
            });
        return (
            m && (G = c(G)),
            h && (G = o(d(G))),
            g &&
                (G = (0, r.jsx)(ng.A, {
                    childRef: this.ref,
                    tutorialId: "voice-conversations",
                    position: "right",
                    offsetX: -20,
                    children: G,
                })),
            G
        );
    }
}
let rz = F((0, lA.F)(rF));
function rK(e) {
    let {
            guild: t,
            channel: n,
            disableSorting: i,
            isFavoriteCategory: l,
            selected: s,
            collapsed: a,
            voiceStates: o,
        } = e,
        d = (0, h.cf)([nP.Ay], () => ({ unread: nP.Ay.hasUnread(n.id), mentionCount: nP.Ay.getMentionCount(n.id) })),
        c = (0, h.bG)([V.Ay], () => V.Ay.resolveUnreadSetting(n)),
        u = (0, h.cf)([U.A, lv.A, O.A], () => {
            let e = U.A.getChannel(n.parent_id),
                l = lv.A.getCheck(n.guild_id);
            return {
                canManageChannel: O.A.can(H.xBc.MANAGE_CHANNELS, n),
                canReorderChannel:
                    !0 !== i &&
                    ((0, M.ai)(t.id) ||
                        (null != e ? O.A.can(H.xBc.MANAGE_CHANNELS, e) : O.A.can(H.xBc.MANAGE_CHANNELS, t))),
                canMoveMembers: O.A.can(H.xBc.MOVE_MEMBERS, n),
                locked: !O.A.can(H.xBc.CONNECT, n),
                bypassLimit: O.A.can(H.xBc.MOVE_MEMBERS, n),
                unverifiedAccount: !l.canChat,
            };
        }),
        m = (0, h.bG)([nF.A], () => nF.A.hasVideo(n.id)),
        { enabled: g } = (0, rx.mf)({ guildId: t.id, location: "VoiceChannel" }),
        A = (0, lB.Ay)(n),
        f = (0, h.yK)(
            [rD.A, rU.A, lw.default],
            () => {
                if (null == o || 0 === o.length) return [];
                let e = lw.default.getId(),
                    t = [];
                for (let { user: i } of o)
                    for (let l of i.id === e ? rD.A.getActivities() : rU.A.getActivities(i.id, n.guild_id))
                        !(0, rA.N)(l) || (0, rf.A)(l) || null == l.name || t.includes(l.name) || t.push(l.name);
                return t;
            },
            [o, n.guild_id],
        ),
        p = (0, t8.Ay)(n),
        C = (0, tZ.Qs)(n.id),
        E = (0, h.bG)([rC.A], () => rC.A.getStartTime(n), [n]),
        { isSubscriptionGated: x, needSubscriptionToAccess: N } = (0, nH.A)(n.id),
        _ = (0, rE.A)(),
        S = (0, h.bG)([V.Ay], () => V.Ay.isFavorite(t.id, n.id)),
        I = e.connected || _?.channelId === n.id,
        { enableHighlight: b, enableWaveformIcon: j } = (0, nx.b)(t.id, "VoiceChannel"),
        v = null != o && o.length > 0,
        G = b && v,
        y = j && v,
        R = l1({
            channel: n,
            isChannelSelected: s,
            isChannelCollapsed: a,
            voiceStates: o,
            isSubscriptionGated: x,
            needSubscriptionToAccess: N,
            enableConnectedUserLimit: !0,
            enableActivities: !0,
        }),
        T = I && null == R,
        L = (0, lf.BX)("VoiceChannel");
    return (0, r.jsx)(rz, {
        channelName: p,
        embeddedApps: A,
        nonEmbeddedActivityNames: f,
        embeddedActivityType: rg.$.PLAYING,
        video: m,
        hasActiveEvent: null != C,
        isSubscriptionGated: x,
        needSubscriptionToAccess: N,
        ...d,
        ...u,
        ...e,
        connected: I,
        isFavoriteSuggestion: l && !S,
        forceShowButtons: T,
        channelInfo: R,
        resolvedUnreadSetting: c,
        hasChannelInfo: null != R,
        hasStartTime: null != E,
        voiceChannelStartTime: E,
        shouldHighlightChannel: G,
        shouldUseAnimatedWaveform: y,
        guildRoomsEnabled: g,
        shouldEnlargeTargets: L,
    });
}
n(131955);
let rW = [];
function rY(e) {
    return (
        m.A.modules.channels.NAME_LINE_HEIGHT.resolve({ density: e }) +
        2 * m.A.space.SPACE_XXS.resolve({ density: e }) +
        2
    );
}
class rX extends a.PureComponent {
    static contextType = c.nC;
    _list = null;
    unreadTopRef = a.createRef();
    unreadBottomRef = a.createRef();
    static defaultProps = { density: "default" };
    state = {
        initialized: !1,
        isUnreadVisible: !0,
        topUnread: null,
        topMention: null,
        bottomUnread: null,
        bottomMention: null,
    };
    componentDidMount() {
        (this.setState({ initialized: !0 }), (0, tP.Ei)(this.getVisibleChannels));
    }
    componentWillUnmount() {
        this.updateChannelListScroll.cancel();
    }
    componentDidUpdate(e, t) {
        let { scrollToChannel: n, guildId: i, selectedChannelId: l } = this.props,
            { initialized: s } = this.state,
            { scrollTop: r } = tT.A.getGuildDimensions(i);
        (null != n
            ? (this.scrollToChannel(n), x.A.clearChannelListScrollTo(i))
            : i !== e.guildId
              ? null != r && this.scrollTo(r)
              : l !== e.selectedChannelId
                ? this.scrollToChannel(l)
                : !t.initialized &&
                  s &&
                  (null == r && null != l
                      ? this.scrollToChannel(l, !1, 8, this.handleListScroll)
                      : this.scrollTo(r ?? 0, this.handleListScroll)),
            this.testShouldSkipTutorial());
    }
    getSectionRowsFromChannel(e) {
        return this.props.guildChannels.getSectionRowsFromChannel(e);
    }
    setListRef = (e) => {
        let { ref: t } = this.context;
        ((t.current = e?.getScrollerNode() ?? null), (this._list = e));
    };
    scrollTo(e, t) {
        this._list?.scrollTo({ to: e, animate: !1, callback: t });
    }
    scrollToChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8,
            i = arguments.length > 3 ? arguments[3] : void 0,
            l = this._list,
            s = this.getSectionRowsFromChannel(e)[0];
        if (null != s && null != l)
            if (null != s.threadOffset) {
                let [e] = l.getScrollPosition(s.section, s.row),
                    { density: r = "default" } = this.props,
                    a = s.threadOffset * rY(r);
                l.scrollIntoViewRect({ start: e + a, end: e + a + rY(r), padding: n, animate: t, callback: i });
            } else l.scrollToIndex({ section: s.section, row: s.row, animate: t, padding: n, callback: i });
        else i?.();
    }
    jumpToVoiceChannels = () => {
        let { guildChannels: e, voiceStates: t } = this.props,
            n = 0,
            i = e.getCategoryFromSection(e.voiceChannelsSectionNumber)?.getShownChannelIds() ?? [];
        for (let e = 0; e < i.length - 1; e++)
            if ((t[i[e]] ?? []).length > 0) {
                n = e + 1;
                break;
            }
        this._list?.scrollToIndex({ section: e.voiceChannelsSectionNumber, row: n, animate: !0, padding: 8 });
    };
    jumpToChannel = (e) => this.scrollToChannel(e, !0, 32);
    jumpToChannelWithMentionsAndUnreads = (e, t) => {
        let [n, i] = t;
        return this.scrollToChannel(e, !0, null != n && null != i ? 32 : 8);
    };
    isChannelVisible = (e, t) => {
        let n = this.getSectionRowsFromChannel(e),
            i = this._list;
        if (null == i) return !1;
        for (let { row: e, section: l } of n) {
            let [n, s] = i.getScrollPosition(l, e),
                r = i.getScrollerState();
            if ((t && n + s < r.scrollTop + r.offsetHeight) || (!t && n > r.scrollTop)) return !0;
        }
        return !1;
    };
    getVisibleChannels = () => {
        let e = this._list;
        if (null == e) return [];
        let t = e.getItems(),
            n = e.getScrollerState(),
            i = [];
        for (var l = 0; l < t.length; l++) {
            let s = t[l];
            if ((0, g.o)(s) && s.section >= this.props.guildChannels.favoritesSectionNumber) {
                let t = this.props.guildChannels.getChannelFromSectionRow(s.section, s.row),
                    [l, r] = e.getScrollPosition(s.section, s.row);
                null != t && l + r < n.scrollTop + n.offsetHeight && l > n.scrollTop && i.push(t.channel.id);
            }
        }
        return i;
    };
    handleResize = () => {
        let { showNewUnreadsBar: e } = this.props,
            t = this._list?.getScrollerState() ?? null;
        if ((this.setState({ isUnreadVisible: this.isUnreadVisible() }), e && null != t)) {
            let { scrollTop: e } = t;
            this.updateChannelListScroll(e);
        }
    };
    handleListScroll = () => {
        let { onScroll: e } = this.props,
            t = this._list?.getScrollerState() ?? null;
        if (null != t) {
            let { scrollTop: n } = t;
            (null != e && e(t), this.updateChannelListScroll(n));
        }
        (null != this.unreadTopRef.current && this.unreadTopRef.current.calculateState(),
            null != this.unreadBottomRef.current && this.unreadBottomRef.current.calculateState());
    };
    handleUnreadCalculate = (e, t, n) => {
        let i = this.isUnreadVisible();
        n
            ? this.setState({ isUnreadVisible: i, bottomUnread: t, bottomMention: e })
            : this.setState({ isUnreadVisible: i, topUnread: t, topMention: e });
    };
    isUnreadVisible() {
        let { guildChannels: e } = this.props,
            t = this._list;
        return (
            null != t &&
            t.getItems().some((n) => {
                if ("row" !== n.type) return !1;
                let { section: i, row: l } = n;
                if (i < tU.bK || e.isPlaceholderRow(i, l)) return !1;
                let s = e.getChannelFromSectionRow(i, l);
                if (null == s) return !1;
                let { channel: r, category: a } = s;
                return (
                    !!(0, tM.ig)(r.record.type) &&
                    (!a.isCollapsed || !a.isMuted) &&
                    !r.isMuted &&
                    !!t.isItemVisible(i, l, !0) &&
                    (0, tE.Y)(r.record)
                );
            })
        );
    }
    updateChannelListScroll = (0, o.throttle)((e) => {
        x.A.updateChannelListScroll(this.props.guildId, e, this.getVisibleChannels());
    }, 100);
    getSectionHeight = (e) => {
        let { guild: t, guildChannels: n, density: i } = this.props,
            l = "compact" === i ? 8 : 12;
        if (e === tU.PU) return l;
        if (e === tU.bK) return t.features.has(H.GuildFeatures.HUB) ? 0 : l;
        if (e === n.voiceChannelsSectionNumber) {
            let t = n.getCategoryFromSection(e);
            if (null == t || t.isEmpty()) return 0;
            if (t.isCollapsed) return 49;
            let i = n.getChannelFromSectionRow(e, 0)?.channel;
            return null == i || i.record.type === H.rbe.GUILD_CATEGORY ? 9 : 25;
        }
        return "compact" === i ? 32 : 40;
    };
    getSectionFooterHeight = (e) => {
        let {
            guildChannels: t,
            voiceStates: n,
            selectedVoiceChannelId: i,
            selectedChannelId: l,
            optInEnabled: s,
            guildChannelsVersion: r,
        } = this.props;
        return (function (e) {
            let {
                sectionIndex: t,
                guildChannels: n,
                voiceStates: i,
                selectedChannelId: l,
                selectedVoiceChannelId: s,
                optInEnabled: r,
                visualRefreshEnabled: a,
                density: o,
            } = e;
            if (t === n.voiceChannelsSectionNumber) return 44;
            let { hasDivider: d, canHaveVoiceSummary: c } = nS(n, r, t),
                u = d ? (a ? 9 : m.A.space.SPACE_SM.resolve({ density: o ?? "default" })) : 0;
            if (!c || t === tU.PU) return u;
            let h = n.getNamedCategoryFromSection(t);
            return null == h ||
                !(function (e) {
                    let { category: t, voiceStates: n, selectedChannelId: i, selectedVoiceChannelId: l } = e;
                    return (
                        (function (e) {
                            let { category: t, voiceStates: n, selectedChannelId: i, selectedVoiceChannelId: l } = e;
                            return !0 !== L.A.isCollapsed(t.record.id)
                                ? []
                                : t.getChannelRecords().filter((e) => {
                                      if (!O.A.can(H.xBc.VIEW_CHANNEL, e)) return !1;
                                      let t = n[e.id] ?? [];
                                      return e.id !== l && e.id !== i && t.length > 0;
                                  });
                        })({ category: t, selectedChannelId: i, selectedVoiceChannelId: l, voiceStates: n }).length > 0
                    );
                })({ category: h, selectedChannelId: l, selectedVoiceChannelId: s, voiceStates: i })
                ? u
                : (a && "cozy" === o ? 42 : 34) + u;
        })({
            sectionIndex: e,
            guildChannels: t,
            guildChannelsVersion: r,
            voiceStates: n,
            selectedChannelId: l,
            selectedVoiceChannelId: i,
            optInEnabled: s,
            density: this.props.density,
        });
    };
    getRowHeight = (e, t) => {
        let {
                guildChannels: n,
                voiceStates: i,
                stageChannelSpeakerVoiceStates: l,
                selectedVoiceChannelId: s,
                density: r = "default",
            } = this.props,
            a = rY(r);
        if (e === tU.PU) {
            let e = n.getGuildActionSection();
            return e.isEmpty()
                ? 0
                : e.getRow(t) === t0.n.GUILD_CONJURE
                  ? a * (1 + (this.props.conjureProjects?.length ?? 0))
                  : e.getRow(t) === t0.n.GUILD_PREMIUM_PROGRESS_BAR
                    ? e.getRows().length > 1
                        ? 69
                        : 57
                    : a;
        }
        if (n.isPlaceholderRow(e, t)) return 0;
        let o = n.getChannelFromSectionRow(e, t);
        if (null == o) return 0;
        let { channel: d, category: c } = o;
        if (d.record.type === H.rbe.GUILD_CATEGORY) return 40;
        for (let e of d.threadIds) {
            let { density: t = "default" } = this.props;
            a += rY(t);
            let n = i[d.id];
            null != n && n.length > 0 && (a += s === e ? 32 * n.length : 32);
        }
        if (d.record.isGuildVoice()) {
            let e = i[d.id];
            if (null != e && e.length > 0) {
                let t = 32 * e.length;
                if (
                    (d.isCollapsed || c.isCollapsed ? (t = 32) : (0, eK.Ln)(d.record) && (t += 32),
                    (a += t + m.A.space.SPACE_XS.resolve({ density: r })),
                    !d.isCollapsed && !c.isCollapsed)
                ) {
                    let { enableHangoutWindow: e } = (0, eB.kY)({
                        guildId: d.record.guild_id,
                        location: "ChannelList",
                    });
                    e && ((0, eF.lr)(d.record) ? (a += 134) : s === d.id && (a += 44));
                }
            }
            d.id === this.props.rtcConnectedChannelId && (a += 32 * this.props.rtcDesyncedVoiceStatesCount);
        }
        if (((null != d.subtitle || s === d.id) && (a += 16), d.record.isGuildStageVoice())) {
            let e = i[d.id] ?? [],
                t = l[d.id] ?? [];
            if (null != e && e.length > 0) {
                let e = 32 * t.length;
                (d.isCollapsed || c.isCollapsed ? (e = Math.ceil(e / 5)) : (e += 32), (a += e + 8));
            }
        }
        return a;
    };
    dismissRecents = () => {
        let { guild: e, guildChannels: t, selectedChannelId: n } = this.props,
            i = t.getCategoryFromSection(t.recentsSectionNumber);
        if (null == i) return;
        let l = null,
            s = i.getShownChannelAndThreadIds();
        (null != n && s.includes(n) && (l = (0, eW.xb)(t)), (0, eW.DD)(e.id, s, l));
    };
    renderSection = (e) => {
        let { section: t } = e,
            {
                guildChannels: n,
                guildChannelsVersion: i,
                guild: l,
                selectedChannelId: s,
                disableManageChannels: a,
            } = this.props;
        return (0, r.jsx)(
            nC,
            {
                sectionIndex: t,
                guild: l,
                guildChannels: n,
                guildChannelsVersion: i,
                selectedChannelId: s,
                disableManageChannels: a,
            },
            (function (e, t) {
                switch (e) {
                    case tU.PU:
                        return "hoisted-spacer";
                    case tU.bK:
                        return "uncategorized-spacer";
                    case tU.HP:
                        return "favorites";
                    case t.recentsSectionNumber:
                        return "recents-header";
                    case t.voiceChannelsSectionNumber:
                        return "voice-channels-header";
                    default: {
                        let n = t.getNamedCategoryFromSection(e);
                        if (null != n) return `category-${n.id}`;
                        return `section-${e}`;
                    }
                }
            })(t, n),
        );
    };
    renderRow = (e) => {
        let { section: t, row: n } = e,
            {
                guild: i,
                selectedChannel: l,
                selectedChannelId: s,
                selectedVoiceChannel: o,
                selectedVoiceChannelId: d,
                guildChannels: c,
                voiceStates: u,
                disableManageChannels: h,
                stageChannelSpeakerVoiceStates: m,
                optInEnabled: g,
                withGuildIcon: A,
            } = this.props;
        if (t === tU.PU) {
            let e = c.getGuildActionSection(),
                t = e.getRow(n);
            if (null == t) return null;
            switch (t) {
                case t0.n.GUILD_HUB_HEADER_OPTIONS:
                    return (0, r.jsx)(
                        ez.A,
                        { guild: i, channel: tL.Ay.getDefaultChannel(i.id) },
                        t0.n.GUILD_HUB_HEADER_OPTIONS,
                    );
                case t0.n.GUILD_PREMIUM_PROGRESS_BAR:
                    let l = e.getRows();
                    return (0, r.jsx)(tC, { guild: i, withMargin: l.length > 1 }, t0.n.GUILD_PREMIUM_PROGRESS_BAR);
                case t0.n.GUILD_SPACE:
                    return (0, r.jsx)(ek, { guild: i, selected: s === em.VV.GUILD_SPACE }, t0.n.GUILD_SPACE);
                case t0.n.GUILD_HOME:
                    return (0, r.jsx)(i0, { guild: i, selected: s === em.VV.GUILD_HOME }, t0.n.GUILD_HOME);
                case t0.n.GUILD_SCHEDULED_EVENTS:
                    return (0, r.jsx)(
                        rm,
                        { guild: i, selected: s === t0.n.GUILD_SCHEDULED_EVENTS },
                        t0.n.GUILD_SCHEDULED_EVENTS,
                    );
                case t0.n.GUILD_ROLE_SUBSCRIPTIONS:
                    return (0, r.jsx)(
                        le,
                        { guild: i, selected: s === em.VV.ROLE_SUBSCRIPTIONS },
                        t0.n.GUILD_ROLE_SUBSCRIPTIONS,
                    );
                case t0.n.GUILD_SHOP:
                    return (0, r.jsx)(lu, { guild: i, selected: s === em.VV.GUILD_SHOP }, t0.n.GUILD_SHOP);
                case t0.n.GUILD_GAME_SHOP:
                    return (0, r.jsx)(iY, { guild: i, selected: s === em.VV.GAME_SHOP }, t0.n.GUILD_GAME_SHOP);
                case t0.n.GUILD_CONJURE:
                    return (0, r.jsxs)(
                        a.Fragment,
                        {
                            children: [
                                (0, r.jsx)(ih, { guild: i, selected: s === em.VV.CONJURE }),
                                (0, r.jsx)(id, { guildId: i.id, projects: this.props.conjureProjects ?? rW }),
                            ],
                        },
                        t0.n.GUILD_CONJURE,
                    );
                case t0.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
                    return (0, r.jsx)(i5, { guild: i });
                case t0.n.CHANNELS_AND_ROLES:
                    return (0, r.jsx)(
                        i$,
                        { guild: i, selected: s === em.VV.CHANNEL_BROWSER || s === em.VV.CUSTOMIZE_COMMUNITY },
                        t0.n.CHANNELS_AND_ROLES,
                    );
                case t0.n.GUILD_DIRECTORY:
                    return (0, r.jsx)(
                        iR,
                        { guild: i, selectedChannelId: s, disableManageChannels: h },
                        t0.n.GUILD_DIRECTORY,
                    );
                case t0.n.GUILD_MOD_DASH_MEMBER_SAFETY:
                    return (0, r.jsx)(
                        eM,
                        { guild: i, selected: s === em.VV.MEMBER_SAFETY },
                        t0.n.GUILD_MOD_DASH_MEMBER_SAFETY,
                    );
                case t0.n.GUILD_BOOSTS:
                    return (0, r.jsx)(tt, { guildId: i.id, selected: s === em.VV.GUILD_BOOSTS }, t0.n.GUILD_BOOSTS);
                case t0.n.GAME_SERVERS:
                    return (0, r.jsx)(eS, { guildId: i.id, selected: s === em.VV.GAME_SERVERS }, t0.n.GAME_SERVERS);
                case t0.n.GAME_SERVERS_EMPTY:
                    return (0, r.jsx)(
                        eE,
                        { guildId: i.id, selected: s === em.VV.GAME_SERVERS },
                        t0.n.GAME_SERVERS_EMPTY,
                    );
                case t0.n.GUILD_OFFICIAL_MESSAGES:
                    return (0, r.jsx)(
                        i4,
                        { guild: i, selected: s === em.VV.GUILD_OFFICIAL_MESSAGES },
                        t0.n.GUILD_OFFICIAL_MESSAGES,
                    );
                default:
                    return null;
            }
        }
        if (c.isPlaceholderRow(t, n)) return null;
        let f = c.getChannelFromSectionRow(t, n);
        if (null == f) return null;
        let { category: p, channel: C } = f,
            E = p instanceof tU.xu,
            x = C.record,
            N = `${t}${C.id}`;
        switch (x.type) {
            case H.rbe.GUILD_ANNOUNCEMENT:
            case H.rbe.GUILD_TEXT:
            case H.rbe.GUILD_FORUM:
            case H.rbe.GUILD_MEDIA:
            case H.rbe.DM:
            case H.rbe.GROUP_DM:
            case H.rbe.GUILD_APP:
                return (0, r.jsxs)(
                    a.Fragment,
                    {
                        children: [
                            (0, r.jsx)(sW, {
                                channel: x,
                                guild: i,
                                position: C.position,
                                selected: s === C.id,
                                muted: C.isMuted,
                                subtitle: C.subtitle,
                                disableManageChannels: h,
                                canBeNewChannel: g && t === c.recentsSectionNumber,
                                isFavoriteCategory: E,
                                isSuggestedSection: t === c.recentsSectionNumber,
                            }),
                            C.threadCount > 0
                                ? (0, r.jsx)(lh, {
                                      withGuildIcon: A,
                                      channel: x,
                                      sortedThreadIds: C.threadIds,
                                      selectedChannel: null != l && (l.id === C.id || l.parent_id === x.id) ? l : null,
                                      selectedVoiceChannelId: o?.parent_id === x.id ? d : null,
                                  })
                                : null,
                        ],
                    },
                    N,
                );
            case H.rbe.GUILD_STAGE_VOICE:
                return (0, r.jsx)(
                    l6,
                    {
                        channel: x,
                        guild: i,
                        position: C.position,
                        selected: s === C.id,
                        connected: d === C.id,
                        collapsed: C.isCollapsed || p.isCollapsed,
                        voiceStates: u[C.id] ?? [],
                        speakerVoiceStates: m[C.id] ?? [],
                        disableManageChannels: h,
                        isFavoriteCategory: E,
                        isSuggestedSection: t === c.recentsSectionNumber,
                    },
                    N,
                );
            case H.rbe.GUILD_VOICE:
                return (0, r.jsx)(
                    rK,
                    {
                        channel: x,
                        guild: i,
                        position: C.position,
                        selected: s === C.id,
                        connected: d === C.id,
                        collapsed: C.isCollapsed || p.isCollapsed,
                        voiceStates: u[C.id],
                        subtitle: C.subtitle,
                        disableManageChannels: h,
                        showTutorial: C.isFirstVoiceChannel,
                        isFavoriteCategory: E,
                        withGuildIcon: A,
                        isSuggestedSection: t === c.recentsSectionNumber,
                    },
                    N,
                );
            case H.rbe.GUILD_STORE:
                return (0, r.jsx)(l4, { channel: x, guild: i, position: C.position, selected: s === C.id }, N);
            case H.rbe.GUILD_CATEGORY:
                if (t !== c.voiceChannelsSectionNumber) return null;
                return (0, r.jsx)(nm, { channel: x }, `readonly-${x.id}`);
            case H.rbe.PUBLIC_THREAD:
            case H.rbe.PRIVATE_THREAD:
            case H.rbe.ANNOUNCEMENT_THREAD:
                return (0, r.jsx)(
                    sW,
                    {
                        channel: x,
                        guild: i,
                        position: C.position,
                        selected: s === C.id,
                        muted: C.isMuted,
                        subtitle: C.subtitle,
                        disableManageChannels: h,
                        canBeNewChannel: !1,
                        isFavoriteCategory: !1,
                        forceTopLevelThread: !0,
                    },
                    N,
                );
            default:
                return null;
        }
    };
    renderSectionFooter = (e) => {
        let { section: t } = e,
            {
                guildChannels: n,
                guildChannelsVersion: i,
                voiceStates: l,
                selectedChannelId: s,
                selectedVoiceChannelId: a,
                optInEnabled: o,
                guildId: d,
            } = this.props;
        return (0, r.jsx)(
            nb,
            {
                guildId: d,
                guildChannels: n,
                guildChannelsVersion: i,
                sectionIndex: t,
                voiceStates: l,
                selectedChannelId: s,
                selectedVoiceChannelId: a,
                optInEnabled: o,
            },
            (function (e, t, n) {
                if (e === t.voiceChannelsSectionNumber) return "voice-channels-button";
                let { hasDivider: i, canHaveVoiceSummary: l } = nS(t, n, e);
                return `section-footer-${e}${i ? "-divider" : ""}${l ? "-voice-summary" : ""}`;
            })(t, n, o),
        );
    };
    renderTopUnread() {
        let { topMention: e, bottomUnread: t, bottomMention: n, isUnreadVisible: i } = this.state,
            { guildId: l, guildChannels: s, guildChannelsVersion: a } = this.props;
        return (0, r.jsx)("div", {
            className: np.Eo,
            children: (0, r.jsx)(ru, {
                ref: this.unreadTopRef,
                textUnread: ef.intl.string(ef.t.FCRiT3),
                textMention: ef.intl.string(ef.t["8zH0LJ"]),
                hide: null == e && (i || null != t || null != n),
                className: np.Vq,
                barClassName: np.bu,
                guildId: l,
                guildChannels: s,
                guildChannelsVersion: a,
                isVisible: this.isChannelVisible,
                onJumpTo: this.jumpToChannelWithMentionsAndUnreads,
                onCalculate: this.handleUnreadCalculate,
            }),
        });
    }
    renderBottomUnread() {
        let { guildId: e, guildChannels: t, guildChannelsVersion: n } = this.props,
            { bottomMention: i, isUnreadVisible: l } = this.state;
        return (0, r.jsx)(ru, {
            reverse: !0,
            ref: this.unreadBottomRef,
            textUnread: ef.intl.string(ef.t.FCRiT3),
            textMention: ef.intl.string(ef.t["8zH0LJ"]),
            hide: null == i && l,
            className: np.di,
            barClassName: np.bu,
            guildId: e,
            guildChannels: t,
            guildChannelsVersion: n,
            isVisible: this.isChannelVisible,
            onJumpTo: this.jumpToChannelWithMentionsAndUnreads,
            onCalculate: this.handleUnreadCalculate,
        });
    }
    getAnchorId = (e, t) => {
        let { guildChannels: n } = this.props;
        if (e !== tU.PU) {
            if (null == t)
                return e === tU.HP
                    ? "favorites-header"
                    : e === n.recentsSectionNumber
                      ? "recents-header"
                      : e === n.voiceChannelsSectionNumber
                        ? "voice-channels"
                        : e === tU.bK
                          ? "uncategorized-header"
                          : n.getNamedCategoryFromSection(e)?.id;
            if (!n.isPlaceholderRow(e, t)) return n.getChannelFromSectionRow(e, t)?.channel?.id;
        }
    };
    renderList() {
        let { guildChannels: e, guildBanner: t, selectedGuildId: n, density: i } = this.props,
            l = {};
        (0, M.ai)(n) && (l["data-favorites"] = !0);
        let { ref: s, ...a } = this.context,
            o = 0;
        null != t && (o = 84);
        let d = "compact" === i ? 8 : 12;
        return (0, r.jsx)(A.sk, {
            children: (t) =>
                (0, r.jsx)(
                    f.OZ,
                    {
                        ref: this.setListRef,
                        className: np.XG,
                        fade: !0,
                        sectionHeight: this.getSectionHeight,
                        footerHeight: this.getSectionFooterHeight,
                        rowHeight: this.getRowHeight,
                        paddingTop: o,
                        paddingBottom: d,
                        renderSection: this.renderSection,
                        renderFooter: this.renderSectionFooter,
                        renderRow: this.renderRow,
                        onScroll: this.handleListScroll,
                        onResize: this.handleResize,
                        onContentResize: this.handleResize,
                        sections: e.getSections(!0),
                        innerAriaLabel: ef.intl.string(ef.t.OGiMXJ),
                        innerTag: "ul",
                        getAnchorId: this.getAnchorId,
                        ...a,
                        ...t,
                        ...l,
                    },
                    "guild-channels",
                ),
        });
    }
    testShouldSkipTutorial = () => {
        if (!ty.A.shouldShow("voice-conversations")) return;
        let { guildChannels: e } = this.props,
            t = e.getFirstVoiceChannel();
        if (null == t) return void tG.X8("voice-conversations");
        let n = this._list;
        if (null != n)
            for (let { section: e, row: i } of this.getSectionRowsFromChannel(t.id))
                n.isItemVisible(e, i) || tG.X8("voice-conversations");
    };
    render() {
        let { guildChannels: e, guildChannelsVersion: t, showNewUnreadsBar: n } = this.props;
        return (0, r.jsx)(ei.V0, {
            children: (i) =>
                (0, r.jsx)(p.F, {
                    component: (0, r.jsx)(C.A, {
                        children: (0, r.jsx)(p.H, { id: i, children: ef.intl.string(ef.t.OGiMXJ) }),
                    }),
                    children: n
                        ? (0, r.jsxs)(a.Fragment, {
                              children: [
                                  (0, r.jsx)("div", {
                                      className: np.Eo,
                                      children: (0, r.jsx)(rr, {
                                          position: "top",
                                          guildChannels: e,
                                          guildChannelsVersion: t,
                                          jumpToVoiceChannels: this.jumpToVoiceChannels,
                                          jumpToChannel: this.jumpToChannel,
                                      }),
                                  }),
                                  this.renderList(),
                                  (0, r.jsx)(rr, {
                                      position: "bottom",
                                      guildChannels: e,
                                      guildChannelsVersion: t,
                                      jumpToVoiceChannels: this.jumpToVoiceChannels,
                                      jumpToChannel: this.jumpToChannel,
                                  }),
                              ],
                          })
                        : (0, r.jsxs)(a.Fragment, {
                              children: [this.renderTopUnread(), this.renderList(), this.renderBottomUnread()],
                          }),
                }),
        });
    }
}
let rJ = (e) => {
    let { guildId: t, selectedChannelId: n, selectedVoiceChannelId: i } = e,
        l = (0, h.bG)([z.Ay], () => z.Ay.keyboardModeEnabled),
        { analyticsLocations: s } = (0, W.Ay)(K.A.GUILD_CHANNEL_LIST),
        o = (0, h.bG)([U.A], () => U.A.getChannel(n)),
        d = (0, h.bG)([U.A], () => U.A.getChannel(i)),
        m = (0, h.bG)([w.A], () => w.A.getGuildId()),
        g = (0, eY.jN)(t),
        A = a.useRef(null),
        f = a.useCallback((e, t) => {
            let n = A.current;
            null != n &&
                (H.Ut1.test(t) || (0, em.jq)(t)
                    ? n.scrollToChannel(t, !1, 16, () => {
                          requestAnimationFrame(() => document.querySelector(e)?.focus());
                      })
                    : document.querySelector(e)?.focus());
        }, []),
        p = a.useCallback(
            () =>
                new Promise((e) => {
                    let t = A.current;
                    if (null == t) return e();
                    t.scrollTo(0, () => requestAnimationFrame(() => e()));
                }),
            [],
        ),
        C = a.useCallback(
            () =>
                new Promise((e) => {
                    let t = A.current;
                    if (null == t) return e();
                    t.scrollTo(Number.MAX_SAFE_INTEGER, () => requestAnimationFrame(() => e()));
                }),
            [],
        ),
        E = (0, u.Ay)({
            id: "channels",
            defaultFocused: n ?? void 0,
            isEnabled: l,
            setFocus: f,
            scrollToStart: p,
            scrollToEnd: C,
        }),
        x = E.setFocus;
    a.useEffect(() => {
        null != n && x(n);
    }, [n, x]);
    let _ = (function (e) {
        let [t] = (0, h.bG)(
            [tb.A, U.A, tx.A],
            () => {
                let t;
                return [
                    (t = (0, M.ai)(e)
                        ? tI.default
                              .keys(tx.A.getFavoriteChannels())
                              .map((e) => U.A.getChannel(e))
                              .filter(t_.Vq)
                              .filter((e) => e.isGuildStageVoice())
                        : tb.A.getChannels(e)).reduce((e, t) => {
                        let n = tb.A.getMutableParticipants(t.id, tj.ip.SPEAKER);
                        return ((e[t.id] = n.filter((e) => e.type === tj.wY.VOICE).map(tv)), e);
                    }, {}),
                    t.reduce((e, t) => {
                        let { id: n } = t;
                        return e + tb.A.getParticipantsVersion(n);
                    }, 0),
                ];
            },
            [e],
            tS.D,
        );
        return t;
    })(t);
    return (0, r.jsx)(W.f5, {
        value: s,
        children: (0, r.jsx)(N.A, {
            section: H.JJy.GUILD_CHANNEL_LIST,
            children: (0, r.jsxs)(c.hD, {
                navigator: E,
                children: [
                    (0, r.jsx)(tR.q, { containerRef: E.containerProps.ref, itemType: k }),
                    (0, r.jsx)(rX, {
                        ...e,
                        listNavigator: E,
                        ref: A,
                        selectedChannel: o,
                        selectedVoiceChannel: d,
                        stageChannelSpeakerVoiceStates: _,
                        selectedGuildId: m,
                        optInEnabled: g,
                    }),
                ],
            }),
        }),
    });
};
function rq(e) {
    var t, n;
    let i,
        l,
        s,
        o,
        d,
        c,
        u = (function (e) {
            var t;
            let n,
                i,
                l =
                    ((t = e.id),
                    (n = (0, tq.A)(t)),
                    (i = (0, tZ.Ay)(t)),
                    !(0, h.bG)(
                        [P.A],
                        () => {
                            if (null == t) return !1;
                            let e = P.A.getGuild(t);
                            return e?.features.has(H.GuildFeatures.HUB) ?? !1;
                        },
                        [t],
                    ) &&
                        (n || i.length > 0)),
                s = (0, tB.W)(e.id),
                r = (0, tJ.vz)(e.id),
                a = (0, tV.r)(e),
                o = (0, tQ.jz)(e),
                d = (0, tY.d)(e.id),
                c = (0, tO.bG)([tK.h], () => tK.h.getNewMemberActions(e.id), [e.id]),
                u = (0, tw.Q9)(e, "useGuildActionRows"),
                m = (0, tX.A)(e.id),
                g = (0, tW.jY)(e.id),
                A = (0, tF.fw)(e.id),
                f = (0, eD.Uq)(e.id, "useGuildActionRows"),
                p = !0 === (0, tz.A)(e),
                C = (0, eY.jN)(e.id),
                E = [],
                x = e.features.has(H.GuildFeatures.HUB),
                N = e.features.has(H.GuildFeatures.COMMUNITY),
                _ = e.features.has(H.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
                S = (0, th.A)(e.id),
                I = tg(e),
                b = (0, t$.bW)(e.id, "useGuildActionRows"),
                j = (0, tH.C$)(e.id, "useGuildActionRows"),
                v = e.features.has(H.GuildFeatures.GAME_SERVERS),
                G = (0, tk.N)("useGuildActionRows"),
                [y] = (0, ec.kn)(j && G && !v ? [el.M.EMPTY_GAME_SERVER_TAB] : [], { bypassAutoDismiss: !0 });
            return (
                x && E.push(t0.n.GUILD_HUB_HEADER_OPTIONS),
                !g && d && m && null != c && c.length > 0
                    ? E.push(t0.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR)
                    : e.premiumProgressBarEnabled && I > 0 && E.push(t0.n.GUILD_PREMIUM_PROGRESS_BAR),
                !x && d && E.push(t0.n.GUILD_HOME),
                f && E.push(t0.n.GUILD_SPACE),
                l && E.push(t0.n.GUILD_SCHEDULED_EVENTS),
                !x && N && (p || C) && E.push(t0.n.CHANNELS_AND_ROLES),
                r && E.push(t0.n.GUILD_ROLE_SUBSCRIPTIONS),
                a && E.push(t0.n.GUILD_SHOP),
                o && E.push(t0.n.GUILD_GAME_SHOP),
                ((A && (N || _)) || (s && e.features.has(H.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL))) &&
                    E.push(t0.n.GUILD_MOD_DASH_MEMBER_SAFETY),
                S && E.push(t0.n.GUILD_BOOSTS),
                b && E.push(t0.n.GUILD_OFFICIAL_MESSAGES),
                j && (v ? E.push(t0.n.GAME_SERVERS) : null != y && E.push(t0.n.GAME_SERVERS_EMPTY)),
                u && E.push(t0.n.GUILD_CONJURE),
                E
            );
        })(e.guild),
        m = (0, h.cf)([tD.A], () => tD.A.getGuild(e.guildId, { guildActionRows: u })),
        g =
            ((t = e.guildId),
            (n = u.includes(t0.n.GUILD_CONJURE)),
            (i = (0, J.Xj)((0, Y.zy)().pathname)),
            a.useEffect(() => {
                n && "unattempted" === Z.Ay.getGuildProjectsFetchState(t) && (0, q.listProjects)(t);
            }, [n, t]),
            (l = (0, h.yK)(
                en,
                () =>
                    n
                        ? (0, X.B8)(
                              (0, Q.cR)(t).map((e) => ({
                                  project: e,
                                  time: Math.max((0, X.uC)(e), (0, ee.tU)(e.id) ?? 0),
                              })),
                          )
                        : et,
                [n, t],
            )),
            (s = (0, $.A)(l, i)),
            (o = (0, h.yK)(ee.F4, () => l.map((e) => (0, ee.tU)(e.id) ?? 0), [l])),
            (d = (function (e) {
                let [t, n] = a.useState(Date.now),
                    i = e.reduce((e, n) => (n > t && n < e ? n : e), 1 / 0);
                return (
                    a.useEffect(() => {
                        if (i === 1 / 0) return;
                        let e = setTimeout(() => n(Date.now()), i - Date.now());
                        return () => clearTimeout(e);
                    }, [i]),
                    t
                );
            })(a.useMemo(() => o.map((e) => e + ee.p4), [o]))),
            (c = (0, h.yK)(ee.F4, () => l.filter((e, t) => (0, ee.gM)(e.id, o[t] > 0 ? o[t] : null)).map((e) => e.id), [
                l,
                o,
            ])),
            a.useMemo(() => {
                let e = new Set(s),
                    t = new Set(c);
                return l.filter((n, l) => n.id === i || (!t.has(n.id) && (e.has(n) || d - o[l] < ee.p4)));
            }, [l, s, c, o, d, i])),
        { density: A } = (0, E.wR)();
    return (0, r.jsx)(rJ, { ...e, ...m, conjureProjects: g, density: A });
}
