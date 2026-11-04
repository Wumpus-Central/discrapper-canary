let i;
(n.d(t, { B: () => rK, i: () => rz }), n(321073));
var l,
    s,
    r = n(477900),
    a = n(582128),
    o = n(435558),
    d = n.n(o),
    c = n(837381),
    u = n(116903),
    h = n(855986),
    m = n(646514),
    g = n(715828),
    A = n(312138),
    f = n(475825),
    p = n(707554),
    C = n(140735),
    E = n(38021),
    x = n(951001),
    N = n(820284),
    _ = n(840508),
    S = n(126600),
    I = n(192308),
    b = n(999903),
    j = n(44757),
    v = n(97587),
    G = n(60914),
    y = n(79843),
    R = n(466152),
    M = n(5180),
    T = n(770376),
    L = n(924985),
    U = n(734057),
    D = n(769765),
    O = n(71393),
    P = n(576705),
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
                            let r = O.A.getGuild(t.guildId);
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
                                            (0, I.mM)(async () => {
                                                let { default: e } = await Promise.all([n.e(57729), n.e(24848)]).then(
                                                    n.bind(n, 354643),
                                                );
                                                return (t) => (0, r.jsx)(e, { ...t });
                                            }),
                                        !1
                                    );
                                case "pinned-channel":
                                    return (
                                        (0, I.mM)(async () => {
                                            let { default: t } = await n.e(280545).then(n.bind(n, 933752));
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
                                              (P.A.can(H.xBc.MANAGE_CHANNELS, t) && P.A.can(H.xBc.VIEW_CHANNEL, t))
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
var W = n(775602),
    z = n(793574),
    K = n(688810),
    Y = n(806163),
    X = n(615890),
    J = n(751841),
    q = n(371169),
    Z = n(260498),
    $ = n(352571),
    Q = n(313537),
    ee = n(465080);
let et = [];
var en = n(915089),
    ei = n(554146),
    el = n(866665),
    es = n(939249),
    er = n(789645),
    ea = n(805251),
    eo = n(687966),
    ed = n(263775),
    ec = n(652793),
    eu = n(976860),
    eh = n(746080),
    em = n(49999),
    eg = n(105518),
    eA = n(792996),
    ef = n(275833),
    ep = n(964306);
let eC = a.memo(function (e) {
    let { guildId: t, selected: i } = e,
        [l, s] = (0, ed.ww)([ei.M.GAME_SERVER_HOSTING_NEW_BADGE], t),
        o = l === ei.M.GAME_SERVER_HOSTING_NEW_BADGE,
        d = a.useCallback(() => {
            (s(em.i.USER_DISMISS), (0, eu.pX)(H.BVt.CHANNEL(t, eh.VV.GAME_SERVERS)));
        }, [t, s]),
        c = a.useCallback(
            (e) => {
                (e.stopPropagation(),
                    (0, I.mM)(async () => {
                        let { default: e } = await n.e(726702).then(n.bind(n, 758909));
                        return (n) => (0, r.jsx)(e, { ...n, guildId: t });
                    }));
            },
            [t],
        ),
        u = (0, r.jsxs)("div", {
            className: ef.c,
            children: [
                (0, r.jsx)("div", {
                    className: ep.Xs,
                    children: (0, r.jsx)(el.m, {
                        text: eA.intl.string(eA.t.fgq1gs),
                        position: "top",
                        children: (0, r.jsx)(es.D, {
                            onClick: c,
                            "aria-label": eA.intl.string(eA.t.fgq1gs),
                            children: (0, r.jsx)(er.P, { size: "xs", color: "currentColor", className: ep.gE }),
                        }),
                    }),
                }),
                o &&
                    (0, r.jsx)("div", {
                        className: ep.yW,
                        children: (0, r.jsx)(ea.E, { type: "new", variant: "primary" }),
                    }),
            ],
        });
    return (0, r.jsx)(ec.G, {
        className: ep.Ki,
        id: `game-server-empty-${t}`,
        renderIcon: (e) => (0, r.jsx)(eo.GameControllerIcon, { size: "md", className: e, color: "currentColor" }),
        text: eA.intl.string(eg.default.vCzwM7),
        selected: i,
        onClick: d,
        trailing: u,
    });
});
var eE = n(361158),
    ex = n(148700),
    eN = n(186111);
let e_ = a.memo(function (e) {
    let { guildId: t, selected: n } = e,
        i = (0, I.Rv)(),
        l = (0, h.bG)([eN.A], () => eN.A.hasLayers()),
        s = (0, eE.xr)((e) => e.fullScreenLayers.length > 0),
        [o, d] = (0, ed.ww)([ei.M.GAME_SERVER_HOSTING_NEW_BADGE], t),
        c = o === ei.M.GAME_SERVER_HOSTING_NEW_BADGE,
        [u, m] = (0, ed.ww)(i || l || s || !c ? [] : [ei.M.GAME_SERVER_HOSTING_NEW_COACHMARK], t),
        g = a.useCallback(
            (e) => {
                (d(e), m(e));
            },
            [d, m],
        ),
        A = a.useCallback(() => {
            (g(em.i.USER_DISMISS), (0, eu.pX)(H.BVt.CHANNEL(t, eh.VV.GAME_SERVERS)));
        }, [t, g]),
        f = a.useRef(null),
        p = u === ei.M.GAME_SERVER_HOSTING_NEW_COACHMARK,
        C = a.useCallback(() => (0, r.jsx)(ex.mn, { channelRowRef: f, guildId: t, markAsDismissed: g }), [t, g]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(ec.G, {
                ref: f,
                id: `game-server-${t}`,
                renderIcon: (e) =>
                    (0, r.jsx)(eo.GameControllerIcon, { size: "md", className: e, color: "currentColor" }),
                text: eA.intl.string(eg.default.vCzwM7),
                selected: n,
                onClick: A,
                trailing: c ? (0, r.jsx)(ea.E, { type: "new", variant: "primary" }) : null,
            }),
            p && C(),
        ],
    });
});
var eS = n(177953),
    eI = n(812993),
    eb = n(624458),
    ej = n(844944),
    ev = n(513461),
    eG = n(663997),
    ey = n(221950);
function eR(e) {
    let { guild: t, selected: n } = e,
        i = (0, h.bG)([P.A], () => P.A.can(H.xBc.KICK_MEMBERS, t)),
        l = (0, h.bG)([ej.A], () => ej.A.getSubmittedGuildJoinRequestTotal(t.id)),
        s = i ? (l ?? 0) : 0;
    a.useEffect(() => {
        i &&
            t.features.has(H.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
            t.features.has(H.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
            eb.A.fetchGuildJoinRequests({ guildId: t.id, status: ev.B5.SUBMITTED, limit: eG.L });
    }, [i, t]);
    let o = a.useCallback(() => {
        (0, ey.aZ)(t.id);
    }, [t.id]);
    return (0, r.jsx)(ec.G, {
        id: `members-${t.id}`,
        renderIcon: (e) => (0, r.jsx)(eS.n, { size: "md", color: "currentColor", className: e }),
        text: eA.intl.string(eA.t.oclz3Z),
        selected: n,
        onClick: o,
        trailing: s > 0 ? (0, r.jsx)(eI.hV, { count: s }) : null,
    });
}
var eM = n(332837),
    eT = n(942857),
    eL = n(593673),
    eU = n(313627),
    eD = n(43105),
    eO = n(480749),
    eP = n(135294);
function ew(e) {
    let t,
        n,
        { targetElementRef: i, guildName: l, isAdmin: s, isPublished: a, onCheckItOut: o, onDismiss: d } = e;
    return (
        s
            ? a
                ? ((t = eA.intl.string(eP.default.EIuDzZ)), (n = eA.intl.string(eP.default.ev0nwK)))
                : ((t = eA.intl.string(eP.default.O2eErX)), (n = eA.intl.string(eP.default["5W7HIh"])))
            : ((t = eA.intl.string(eP.default.PE4Cid)),
              (n = eA.intl.formatToPlainString(eP.default.Uf5Ve7, { serverName: l }))),
        (0, r.jsx)(eD.A, {
            targetElementRef: i,
            title: t,
            body: n,
            graphic: {
                type: "rive",
                rive: eO.f,
                aspectRatio: "16/9",
                props: { dataBinding: { on: !0 }, withReducedMotion: "halt", fit: "contain" },
            },
            actions: [{ text: eA.intl.string(eA.t.RzWDqY), variant: "primary", onClick: o }],
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
var eV = n(151098);
function eH(e) {
    let { guild: t, selected: i } = e,
        l = (0, eT.A)(),
        [s, o] = (0, ed.kn)(l ? [] : [ei.M.GUILD_SPACE_COACHMARK], { bypassAutoDismiss: !0 }),
        d = s === ei.M.GUILD_SPACE_COACHMARK,
        c = a.useRef(null),
        u = (0, eU.mN)(t),
        h = t.guildSpaceSettings?.publish_status === eL.B.PUBLISHED,
        m = a.useCallback(() => {
            (o(em.i.USER_DISMISS), (0, eu.pX)(H.BVt.CHANNEL(t.id, eh.VV.GUILD_SPACE)));
        }, [t.id, o]),
        g = a.useCallback(() => {
            (o(em.i.TAKE_ACTION), (0, eu.pX)(H.BVt.CHANNEL(t.id, eh.VV.GUILD_SPACE)));
        }, [t.id, o]),
        A = a.useCallback(() => {
            o(em.i.USER_DISMISS);
        }, [o]),
        f = a.useCallback(
            (e) => {
                (e.stopPropagation(),
                    (0, I.mM)(async () => {
                        let { default: e } = await Promise.all([
                            n.e(37786),
                            n.e(303807),
                            n.e(952831),
                            n.e(421410),
                        ]).then(n.bind(n, 643065));
                        return (n) => (0, r.jsx)(e, { ...n, guildId: t.id });
                    }));
            },
            [t.id],
        ),
        p = d ? (0, r.jsx)(ea.E, { type: "new", variant: "primary" }) : null,
        C =
            u && !h
                ? (0, r.jsxs)("div", {
                      className: eV.c,
                      children: [
                          (0, r.jsx)("div", {
                              className: ep.Xs,
                              children: (0, r.jsx)(el.m, {
                                  text: eA.intl.string(eA.t.R9GHya),
                                  position: "top",
                                  children: (0, r.jsx)(es.D, {
                                      onClick: f,
                                      "aria-label": eA.intl.string(eA.t.R9GHya),
                                      children: (0, r.jsx)(er.P, {
                                          size: "xs",
                                          color: "currentColor",
                                          className: ep.gE,
                                      }),
                                  }),
                              }),
                          }),
                          null != p ? (0, r.jsx)("div", { className: ep.yW, children: p }) : null,
                      ],
                  })
                : p;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(ec.G, {
                ref: c,
                className: u ? ep.Ki : void 0,
                id: `guild-space-tab-${t.id}`,
                renderIcon: (e) => (0, r.jsx)(eM.HomeIcon, { size: "md", color: "currentColor", className: e }),
                text: eA.intl.string(eA.t["04IVMq"]),
                selected: i,
                onClick: m,
                trailing: C,
            }),
            d
                ? (0, r.jsx)(ew, {
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
var ek = n(581007),
    eB = n(522435),
    eF = n(814255),
    eW = n(582904),
    ez = n(406997),
    eK = n(395504),
    eY = n(503698),
    eX = n.n(eY),
    eJ = n(172218),
    eq = n(695366),
    eZ = n(104510),
    e$ = n(544048),
    eQ = n(533993),
    e0 = n(379229),
    e1 = n(482487),
    e3 = n(836944),
    e9 = n(828162),
    e6 = n(877624),
    e2 = n(549996),
    e5 = n(586428),
    e7 = n(247806);
function e4(e) {
    let { indicator: t } = e;
    if (null == t) return null;
    switch (t.type) {
        case e0.cD.WARNING:
            return (0, r.jsx)(eq.E, { color: m.A.colors.STATUS_WARNING, size: "sm" });
        case e0.cD.UNREAD:
            return (0, r.jsx)(eI.hV, { count: t.count });
        default:
            return null;
    }
}
let e8 = { animation: { BEG: 0, END: 75 }, LOOP: { BEG: 76, END: 376 } },
    te = a.memo(function (e) {
        let { guildId: t, selected: i } = e,
            l = (0, e3.Ay)(t),
            { showHighlight: s, markAsDismissed: o } = (function () {
                let e = (0, e2.c)(e6.C.GUILD_BOOST_TAB_BANNER),
                    t = null != e && "guildBoostTabBanner" === e.properties.properties.oneofKind,
                    [n, i] = (0, ed.Cc)(t ? ei.M.GUILD_BOOST_TAB_HIGHLIGHT : null, e?.promotionId ?? "");
                return { showHighlight: n === ei.M.GUILD_BOOST_TAB_HIGHLIGHT, markAsDismissed: i };
            })(),
            { showNewBadgeOnRow: d, dismissNewBadgeIfShown: c } = (0, e1.A)(
                t,
                l?.indicator != null || l?.popout != null,
            ),
            u = a.useCallback(() => {
                (c(),
                    (0, eQ.Zm)(t),
                    (0, e9.A)(t, z.A.GUILD_POWERUPS_CHANNEL_LIST_ROW),
                    l?.popout?.markAsDismissed(em.i.INDIRECT_ACTION));
            }, [t, c, l]),
            [m, g] = a.useState(!1),
            A = (0, eJ.K)(g, 0),
            f = (0, I.re)(I.DX),
            p = (0, h.bG)([eN.A], () => eN.A.hasLayers()),
            C = (0, eE.xr)((e) => e.fullScreenLayers.length > 0),
            E = !m || f || p || C,
            x = a.useCallback(() => {
                if (l?.popout == null || E) return null;
                switch (l?.popout?.type) {
                    case e0.o.LEVEL_REACHED:
                        return (0, r.jsx)(ex.HW, { guildId: t, channelRowRef: A, ...l.popout });
                    case e0.o.PERKS_AVAILABLE:
                        return (0, r.jsx)(ex.UB, { guildId: t, channelRowRef: A, ...l.popout });
                    case e0.o.PERKS_PURCHASABLE:
                        return (0, r.jsx)(ex.lw, { guildId: t, channelRowRef: A, ...l.popout });
                    case e0.o.NEW_PERK_AVAILABLE:
                        return (0, r.jsx)(ex.bo, { guildId: t, channelRowRef: A, ...l.popout });
                    case e0.o.BOOST_TO_UNLOCK:
                        return (0, r.jsx)(ex.Gw, { guildId: t, channelRowRef: A, ...l.popout });
                    case e0.o.EXPIRING_PERK:
                        return (0, r.jsx)(ex.Mr, { guildId: t, channelRowRef: A, ...l.popout });
                    case e0.o.GAME_SERVER_HOSTING_AVAILABLE:
                    case e0.o.GAME_SERVER_HOSTING_GUILD_ELIGIBLE:
                        return (0, r.jsx)(ex.jz, { guildId: t, channelRowRef: A, ...l.popout });
                    case e0.o.GAME_SERVER_NEW_GAMES:
                        return (0, r.jsx)(ex.YX, { guildId: t, channelRowRef: A, ...l.popout });
                    default:
                        return (0, r.jsx)("div", {});
                }
            }, [t, l?.popout, A, E]);
        a.useEffect(() => {
            i && s && o(em.i.AUTO_DISMISS);
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
                (0, r.jsx)(ec.G, {
                    ref: A,
                    className: e7.kL,
                    id: `skill-trees-${t}`,
                    renderIcon: (e) => (0, r.jsx)(eZ._, { size: "md", className: e, color: "currentColor" }),
                    background:
                        N &&
                        (0, r.jsx)("div", {
                            className: e7.Fi,
                            children: (0, r.jsx)(e$.t, {
                                nextScene: null == _ ? "animation" : "LOOP",
                                className: e7.UU,
                                sceneSegments: e8,
                                importData: () => n.e(867807).then(n.t.bind(n, 217762, 19)),
                                onScenePlay: b,
                                rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
                            }),
                        }),
                    text: (0, r.jsx)("span", {
                        className: eX()({ [e7.A7]: l?.showUnread === !0 }),
                        children: eA.intl.string(e5.default.yv3DJJ),
                    }),
                    selected: i,
                    onClick: u,
                    showUnread: l?.showUnread === !0,
                    trailing: d
                        ? (0, r.jsx)(ea.E, { type: "new", variant: "primary" })
                        : (0, r.jsx)(e4, { indicator: l?.indicator }),
                }),
                x(),
            ],
        });
    });
var tt = n(736819),
    tn = n(717421),
    ti = n(834730),
    tl = n(442433),
    ts = n(230135),
    tr = n(73153);
let ta = {};
class to extends h.Ay.PersistedStore {
    static displayName = "GuildBoostingProgressBarPersistedStore";
    static persistKey = "PremiumGuildProgressBarPersistedStore";
    initialize(e) {
        null != e && (ta = e);
    }
    getState() {
        return ta;
    }
    getCountForGuild(e) {
        return ta[e];
    }
}
let td = new to(tr.h, {
    APPLIED_GUILD_BOOST_COUNT_UPDATE: function (e) {
        let { guildId: t, premiumCount: n } = e;
        ta = { ...ta, [t]: n };
    },
    APPLIED_GUILD_BOOST_COUNT_RESET: function () {
        ta = {};
    },
});
var tc = n(147925),
    tu = n(363487),
    th = n(568065);
function tm(e) {
    return (0, a.useMemo)(() => {
        if (null == e) return 0;
        let t = e?.features.has(H.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) === !0 ? 0 : H.M2T[H.TVA.TIER_3],
            n = Object.values(th.sy),
            i = Object.values(th.YV);
        return (
            n.concat(i).forEach((n) => {
                null == n.includedInLevel && (n.isEnabled?.(e.id) ?? !0) && (t += n.boostPrice);
            }),
            t
        );
    }, [e]);
}
var tg = n(196577);
let tA = (e) => {
    let { appliedBoostCount: t, maxBoostCount: n, premiumSubscriberCount: i, className: l, ref: s } = e,
        o = t >= n,
        d = Math.min((t / n) * 100, 100),
        c = `calc(${d}% - 4px)`,
        [u, h] = (0, tn.z)(
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
            className: tg.hQ,
            children: [
                (0, r.jsx)("div", { className: eX()(tg.L$, l) }),
                (0, r.jsx)(tt.animated.div, { className: eX()(tg.qB, { [tg.mu]: d <= 5 }), style: u }),
                (0, r.jsxs)("div", {
                    className: tg.FS,
                    children: [
                        (0, r.jsxs)("div", {
                            className: tg.Ui,
                            children: [
                                (0, r.jsx)(ti.E, {
                                    className: tg.Qq,
                                    variant: "body-xs/semibold",
                                    children: eA.intl.string(e5.default.NI6Ihe),
                                }),
                                i >= n &&
                                    (0, r.jsx)(ti.E, {
                                        className: tg.Qq,
                                        variant: "body-xs/semibold",
                                        children: "\uD83C\uDF89",
                                    }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: tg.Ui,
                            children: [
                                (0, r.jsx)(ti.E, {
                                    className: eX()(tg.Qq, tg.ue),
                                    variant: "body-xs/semibold",
                                    children: o
                                        ? eA.intl.formatToPlainString(e5.default["Ehpq+7"], { appliedBoostCount: t })
                                        : eA.intl.formatToPlainString(e5.default["/rbPDs"], {
                                              appliedBoostCount: t,
                                              maxBoostCount: n,
                                          }),
                                }),
                                (0, r.jsx)(tc.A, {
                                    width: 12,
                                    height: 12,
                                    direction: tc.A.Directions.RIGHT,
                                    className: eX()(tg.Qq, tg.ue, tg.OW),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
};
function tf(e) {
    let { guild: t, withMargin: i } = e,
        l = tm(t),
        s = (0, tu.A)(t.id),
        o = a.useCallback(() => {
            (0, e9.A)(t.id, z.A.GUILD_BOOSTING_SIDEBAR_DISPLAY);
        }, [t.id]),
        d = (0, h.bG)([td], () => td.getCountForGuild(t.id) ?? 0);
    a.useEffect(() => {
        d !== t.premiumSubscriberCount && (0, ts.u)(t.id, t.premiumSubscriberCount);
    }, [t.id, d, t.premiumSubscriberCount]);
    let c = a.useCallback(
        (e) => {
            s &&
                (0, tl.L3)(e, async () => {
                    let { default: e } = await n.e(371728).then(n.bind(n, 709843));
                    return (n) => (0, r.jsx)(e, { ...n, guild: t });
                });
        },
        [s, t],
    );
    return (0, r.jsx)(es.D, {
        "aria-label": void 0,
        role: "button",
        focusProps: { offset: { left: 10, right: 4 } },
        onClick: o,
        className: eX()(tg.kL, { [tg.aF]: i }),
        onContextMenu: c,
        children: (0, r.jsx)(tA, {
            appliedBoostCount: d,
            maxBoostCount: l,
            premiumSubscriberCount: t.premiumSubscriberCount,
        }),
    });
}
function tp(e) {
    let { guild: t, withMargin: n } = e;
    return (0, r.jsx)(tf, { guild: t, withMargin: n });
}
tA.displayName = "GuildPowerupsProgressBarUI";
var tC = n(455234),
    tE = n(181079),
    tx = n(607567),
    tN = n(403362),
    t_ = n(996439),
    tS = n(811091),
    tI = n(63995),
    tb = n(597886);
function tj(e) {
    let { voiceState: t, userNick: n, user: i } = e,
        l = (0, tx.hz)(t, n);
    return { user: i, voiceState: t, nick: n, comparator: l };
}
var tv = n(787541),
    tG = n(179913),
    ty = n(600761),
    tR = n(95701),
    tM = n(72314),
    tT = n(808728),
    tL = n(791513),
    tU = n(960755),
    tD = n(633965),
    tO = n(164636),
    tP = n(246338),
    tw = n(41200),
    tV = n(831617),
    tH = n(589603),
    tk = n(496767),
    tB = n(134413),
    tF = n(202776),
    tW = n(701785),
    tz = n(101611),
    tK = n(473529),
    tY = n(978165),
    tX = n(960253),
    tJ = n(770666),
    tq = n(508654),
    tZ = n(521427),
    t$ = n(871123),
    tQ = n(281405),
    t0 = n(3026),
    t1 = n(821609),
    t3 = n(499373),
    t9 = n(559106),
    t6 = n(847374),
    t2 = n(285796),
    t5 = n(983851),
    t7 = n(914430),
    t4 = n(47167),
    t8 = n(485947),
    ne = n(970853),
    nt = n(93055),
    nn = n(349828),
    ni = n(708526),
    nl = n(551851),
    ns = n(391507);
function nr(e) {
    e.stopPropagation();
}
function na(e) {
    let { label: t, onClick: n, tabIndex: i } = e;
    return (0, r.jsx)(el.m, {
        text: t,
        children: (0, r.jsx)(es.D, {
            className: eX()(ns.c9, ns.ih),
            onClick: n,
            tabIndex: i,
            role: "button",
            "aria-label": t,
            children: (0, r.jsx)(t3.T, { size: "xs", color: "currentColor", className: ns.hs }),
        }),
    });
}
let no = F(
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
                p = (0, h.bG)([P.A], () => P.A.can(H.xBc.MANAGE_CHANNELS, i)),
                C = (0, t4.Ay)(i);
            t = null != u ? (d > u ? ns.mU : ns.TR) : ns.fx;
            let E = a.useCallback(() => {
                    f ? (0, t7.fh)(i.id) : (0, t7.Gv)(i.id);
                }, [i.id, f]),
                x = a.useCallback(
                    (e) => {
                        if ("null" !== i.id) {
                            let t = O.A.getGuild(i.getGuildId());
                            null != t &&
                                (0, tl.L3)(e, async () => {
                                    let { default: e } = await Promise.all([
                                        n.e(926132),
                                        n.e(393336),
                                        n.e(391763),
                                        n.e(491001),
                                        n.e(676156),
                                        n.e(603998),
                                        n.e(550033),
                                        n.e(150773),
                                        n.e(412255),
                                        n.e(63340),
                                        n.e(430997),
                                        n.e(379995),
                                        n.e(591377),
                                        n.e(35723),
                                        n.e(566378),
                                        n.e(22056),
                                    ]).then(n.bind(n, 914907));
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
                        (0, I.mM)(async () => {
                            let { default: l } = await Promise.all([
                                n.e(377476),
                                n.e(597622),
                                n.e(746309),
                                n.e(778799),
                                n.e(844780),
                                n.e(470068),
                                n.e(203589),
                                n.e(692513),
                                n.e(460773),
                                n.e(208018),
                                n.e(589916),
                                n.e(298107),
                                n.e(526778),
                                n.e(819193),
                                n.e(507775),
                                n.e(524521),
                                n.e(358608),
                                n.e(640317),
                            ]).then(n.bind(n, 410380));
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
                    let n = (0, h.bG)([tE.A], () => tE.A.autoAddJoinedThreads),
                        { isAtLimit: i } = (0, nt.ft)();
                    return n &&
                        i &&
                        null != t &&
                        (0, M.ai)(e.getGuildId()) &&
                        e.type === H.rbe.GUILD_CATEGORY &&
                        t.trim().toLowerCase() === nn.A.toLowerCase()
                        ? { label: eA.intl.string(ni.default.WsUrMD), tooltip: eA.intl.string(ni.default.dW9Kov) }
                        : null;
                })(i, C),
                S = (0, ne.A)(i);
            null == S && p && !o && (S = { label: eA.intl.string(eA.t["fUYU+j"]), perform: N });
            let { role: b, tabIndex: j, ...v } = (0, c.rm)(i.id),
                G = a.useRef(null),
                y = a.useRef(null),
                R = (0, r.jsxs)("li", {
                    className: t,
                    "data-dnd-name": C,
                    children: [
                        (0, r.jsx)(t9.vN, {
                            focusTarget: G,
                            ringTarget: y,
                            offset: { left: 4, right: 4 },
                            children: (0, r.jsxs)("div", {
                                ref: y,
                                className: eX()(ns.Ki, ns.iE, { [ns.yZ]: f, [ns.SU]: A, [ns.vk]: !0 }),
                                onContextMenu: x,
                                children: [
                                    (0, r.jsxs)(es.D, {
                                        innerRef: G,
                                        className: ns.rb,
                                        tabIndex: j,
                                        ...v,
                                        onClick: E,
                                        "aria-label": eA.intl.formatToPlainString(eA.t.y5l3J2, { categoryName: C }),
                                        "aria-expanded": !f,
                                        focusProps: { enabled: !1 },
                                        children: [
                                            (0, r.jsx)(t8.A, {
                                                className: ns.UU,
                                                children: (0, r.jsx)(t0.A, { children: C }),
                                            }),
                                            null != _
                                                ? (0, r.jsx)("span", {
                                                      className: ns.qS,
                                                      children: (0, r.jsx)(el.m, {
                                                          asContainer: !0,
                                                          text: _.tooltip,
                                                          children: (0, r.jsx)(ea.E, {
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
                                                      className: ns.Kk,
                                                  }),
                                        ],
                                    }),
                                    (0, r.jsx)("div", {
                                        onClick: nr,
                                        className: ns.Y_,
                                        children:
                                            null != S
                                                ? (0, r.jsx)(na, { label: S.label, onClick: S.perform, tabIndex: j })
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
    nd = a.memo(function (e) {
        let { name: t, onDismiss: n, className: i } = e;
        return (0, r.jsx)("li", {
            className: eX()(i, ns.fx),
            children: (0, r.jsxs)("div", {
                className: eX()(ns.Ki, ns._V),
                children: [
                    (0, r.jsx)("div", {
                        className: ns.rb,
                        children: (0, r.jsx)(t8.A, { className: ns.UU, children: (0, r.jsx)(t0.A, { children: t }) }),
                    }),
                    null != n
                        ? (0, r.jsx)(el.m, {
                              asContainer: !0,
                              text: eA.intl.string(eA.t["5qNmsU"]),
                              children: (0, r.jsx)(es.D, {
                                  className: ns.r,
                                  onClick: n,
                                  children: (0, r.jsx)(t2.a, { size: "md", color: "currentColor", className: ns.X8 }),
                              }),
                          })
                        : null,
                ],
            }),
        });
    }),
    nc = a.memo(function (e) {
        let { category: t } = e,
            n = (0, h.bG)([nl.A], () => nl.A.isVoiceCategoryCollapsed(t.guild.id)),
            i = a.useCallback(() => {
                var e, i;
                n
                    ? ((e = t.guild.id), tr.h.dispatch({ type: "VOICE_CATEGORY_EXPAND", guildId: e, expand: !0 }))
                    : ((i = t.guild.id), tr.h.dispatch({ type: "VOICE_CATEGORY_COLLAPSE", guildId: i, expand: !1 }));
            }, [t.guild.id, n]);
        return (0, r.jsx)("div", {
            className: ns.oA,
            children: (0, r.jsx)(t1.$, {
                variant: "secondary",
                fullWidth: !0,
                onClick: i,
                icon: t5.H,
                text: n ? eA.intl.string(eA.t["/eB9Bg"]) : eA.intl.string(eA.t.Q2gPWl),
            }),
        });
    }),
    nu = a.memo(function (e) {
        let { category: t, channel: n } = e,
            i = (0, h.bG)([nl.A], () => nl.A.isVoiceCategoryCollapsed(t.guild.id));
        return i || null == n || n.record.type === H.rbe.GUILD_CATEGORY
            ? i
                ? (0, r.jsx)("li", {
                      className: ns.fx,
                      children: (0, r.jsx)("div", {
                          className: eX()(ns.Ki, ns._V),
                          children: (0, r.jsx)(t8.A, {
                              className: ns.UU,
                              children: (0, r.jsx)(t0.A, { children: eA.intl.string(eA.t["V/u9Dy"]) }),
                          }),
                      }),
                  })
                : null
            : (0, r.jsx)("div", { style: { height: 16 } });
    }),
    nh = a.memo(function (e) {
        let { channel: t } = e,
            n = (0, t4.Ay)(t);
        return (0, r.jsx)("li", {
            className: ns.fx,
            children: (0, r.jsx)("div", {
                className: eX()(ns.Ki, ns._V),
                children: (0, r.jsx)(t8.A, { className: ns.UU, children: (0, r.jsx)(t0.A, { children: n }) }),
            }),
        });
    });
var nm = n(728321),
    ng = n(244083);
let nA = { origin: { x: -36, y: 7 }, targetWidth: 232, targetHeight: 40, offset: { x: 0, y: 0 } };
var nf = n(906659);
let np = a.memo(function (e) {
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
            (null != s && l.includes(s) && (t = (0, ez.xb)(i)), (0, ez.DD)(n.id, l, t));
        }, [n.id, s, i, l]),
        { density: c } = (0, E.wR)(),
        u = "compact" === c ? 8 : 12;
    switch (t) {
        case 1:
            return (0, r.jsx)("div", { style: { height: u } });
        case 4:
            if (n.features.has(H.GuildFeatures.HUB)) return null;
            return (0, r.jsx)("div", { style: { height: u } });
        case 2:
            return (0, r.jsx)(nd, { name: eA.intl.string(eA.t.mlPMCy) });
        case i.recentsSectionNumber:
            return (0, r.jsx)(nd, { name: eA.intl.string(eA.t.gKcrqM), onDismiss: d });
        case i.voiceChannelsSectionNumber: {
            let e = i.getCategoryFromSection(i.voiceChannelsSectionNumber);
            if (null == e || e.isEmpty()) return null;
            let n = i.getChannelFromSectionRow(t, 0)?.channel;
            return (0, r.jsxs)(a.Fragment, {
                children: [(0, r.jsx)("div", { className: nf.ts }), (0, r.jsx)(nu, { category: e, channel: n })],
            });
        }
        case 5: {
            let e = i.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, r.jsx)(no, {
                channel: e.record,
                position: e.position,
                disableManageChannels: o,
                children: (0, r.jsx)(nm.A, {
                    inlineSpecs: nA,
                    arrowAlignment: ng.oN.TOP,
                    tutorialId: "organize-by-topic",
                    position: "right",
                }),
            });
        }
        default: {
            let e = i.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, r.jsx)(no, { channel: e.record, position: e.position, disableManageChannels: o });
        }
    }
});
var nC = n(104171),
    nE = n(186369),
    nx = n(970812),
    nN = n(147036);
function n_(e, t, n) {
    return {
        hasDivider:
            !(function (e, t) {
                if (1 === t) {
                    let t = e.getGuildActionSection().getRows();
                    return (
                        (1 === t.length && t[0] === tQ.n.GUILD_PREMIUM_PROGRESS_BAR) ||
                        e.getGuildActionSection().isEmpty()
                    );
                }
                return 0 === e.getSections(!1)[t];
            })(e, n) &&
            (1 === n ||
                ((0, M.ai)(e.id)
                    ? n !== e.getSections(!1).length - 1
                    : 2 === n ||
                      (!!t && 4 !== n && (n === e.recentsSectionNumber || (e.voiceChannelsSectionNumber, !1))))),
        canHaveVoiceSummary:
            1 !== n && 2 !== n && 4 !== n && n !== e.recentsSectionNumber && n !== e.voiceChannelsSectionNumber,
    };
}
let nS = a.memo(function (e) {
        let { guildChannels: t, guildChannelsVersion: n } = e,
            i = a.useMemo(() => t.getCategoryFromSection(t.voiceChannelsSectionNumber), [t, n]);
        return null == i ? null : (0, r.jsx)(nc, { category: i });
    }),
    nI = a.memo(function (e) {
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
            { hasDivider: u, canHaveVoiceSummary: m } = a.useMemo(() => n_(n, c, t), [n, c, t, i]),
            g = a.useMemo(() => (1 === t ? null : n.getCategoryFromSection(t)), [n, t, i]),
            A = (0, eK.jN)(s),
            { enableWaveformIcon: f } = (0, nE.b)(s, "ChannelListSectionFooter"),
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
                () => (0, nN.fK)({ channels: p, selectedChannelId: o, selectedVoiceChannelId: d, voiceStates: l }),
                [p, o, d, l],
            );
        if (t === n.voiceChannelsSectionNumber) return (0, r.jsx)(nS, { guildChannels: n, guildChannelsVersion: i });
        let E = u ? (0, r.jsx)("div", { className: nf.ts }) : null;
        return m && 0 !== C.length
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)("div", {
                          className: nf.qz,
                          children: (0, r.jsx)(nC.Ay, {
                              renderIcon: !0,
                              users: C,
                              max: 8,
                              showUserPopout: !0,
                              guildId: s,
                              renderLeadingIcon: f
                                  ? (e) => (0, r.jsx)(nx.A, { color: "currentColor", className: eX()(e, ep.Gj) })
                                  : void 0,
                          }),
                      }),
                      E,
                  ],
              })
            : E;
    });
var nb = n(683063),
    nj = n(289873),
    nv = n(513425),
    nG = n(722701),
    ny = n(731084),
    nR = n(381991),
    nM = n(845079),
    nT = n(738601),
    nL = n(800202),
    nU = n(947832),
    nD = n(218461),
    nO = n(308528),
    nP = n(534890),
    nw = n(262763),
    nV = n(499211),
    nH = n(406704),
    nk = n(747926),
    nB = n(977997),
    nF = n(807632),
    nW = n(37411);
function nz(e) {
    let { thread: t, tabIndex: n } = e,
        i = (0, nF.YG)(t),
        l = (0, nF.IO)(t),
        s = (0, nH._M)(t);
    return i && l && s ? (0, r.jsx)(nK, { thread: t, tabIndex: n }) : null;
}
function nK(e) {
    let { thread: t, tabIndex: n } = e,
        i = (0, h.bG)([nB.A], () => nB.A.isInChannel(t.id), [t.id]),
        { needSubscriptionToAccess: l } = (0, nV.A)(t.id),
        s = a.useCallback(() => {
            nw.A.handleVoiceConnect({ channel: t, connected: i, needSubscriptionToAccess: l, locked: !1 });
        }, [t, i, l]),
        o = a.useCallback(() => {
            (0, nk.JA)(t, !0, nW.H9.CHANNEL_LIST);
        }, [t]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(el.m, {
                asContainer: !0,
                text: eA.intl.string(eA.t["96ANUN"]),
                children: (0, r.jsx)(es.D, {
                    className: ep.Xs,
                    onClick: s,
                    tabIndex: n,
                    "aria-label": eA.intl.string(eA.t["96ANUN"]),
                    children: (0, r.jsx)(t5.H, { size: "xs", color: "currentColor", className: ep.gE }),
                }),
            }),
            (0, r.jsx)(el.m, {
                asContainer: !0,
                text: eA.intl.string(eA.t.ZXxLQg),
                children: (0, r.jsx)(es.D, {
                    className: ep.Xs,
                    onClick: o,
                    tabIndex: n,
                    "aria-label": eA.intl.string(eA.t.ZXxLQg),
                    children: (0, r.jsx)(nP.ChatIcon, { size: "xs", color: "currentColor", className: ep.gE }),
                }),
            }),
        ],
    });
}
var nY = n(897898),
    nX = n(152007);
function nJ(e) {
    return null != e && e > 0;
}
var nq = n(166444),
    nZ = n(182637),
    n$ = n(428689),
    nQ = n(525093);
function n0(e) {
    let { total: t, users: n, videoLimit: i } = e;
    return (0, r.jsxs)("div", {
        className: nQ.iE,
        children: [
            (0, r.jsxs)(ti.E, {
                tag: "span",
                color: "text-subtle",
                variant: "body-xs/medium",
                className: eX()(nQ.VV, { [nQ.Ki]: i, [nQ.$G]: n >= 100 }),
                children: [
                    i ? (0, r.jsx)(n$.VideoIcon, { size: "md", color: "currentColor", className: nQ.LB }) : null,
                    n.toString().padStart(2, "0"),
                ],
            }),
            (0, r.jsx)(ti.E, {
                tag: "span",
                color: "text-subtle",
                variant: "body-xs/medium",
                className: eX()(nQ.X5, { [nQ.$G]: t >= 100 }),
                children: t.toString().padStart(2, "0"),
            }),
        ],
    });
}
function n1(e) {
    let { channel: t, video: n, userCount: i } = e,
        { limit: l } = (0, nZ.A)(t),
        s = -1,
        a = !1;
    return (
        t.userLimit > 0 && (s = t.userLimit),
        n && l > 0 && ((a = s < 0 || l < s), (s = s > 0 ? Math.min(s, l) : l)),
        (0, r.jsx)(n0, { users: i, total: s, videoLimit: a })
    );
}
var n3 = n(146630);
function n9(e) {
    let { mentionsCount: t, isMentionLowImportance: n } = e;
    return (0, r.jsx)("div", {
        className: n3.R,
        "aria-hidden": !0,
        children: (0, r.jsx)(eI.hV, {
            count: t,
            color: n ? m.A.colors.BACKGROUND_MOD_STRONG.css : m.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
        }),
    });
}
var n6 = n(588224),
    n2 = n(672812),
    n5 = n(447199);
function n7(e) {
    let { thread: t, countInVoice: n, hasVideo: i, mentionCount: l, isMentionLowImportance: s } = e,
        a = n > 0 && t.userLimit > 0,
        o = nJ(l);
    return a || o
        ? (0, r.jsxs)("div", {
              className: ep.yW,
              children: [
                  a ? (0, r.jsx)(n1, { userCount: n, video: i, channel: t }) : null,
                  o ? (0, r.jsx)(n9, { mentionsCount: l, isMentionLowImportance: s }) : null,
              ],
          })
        : null;
}
function n4(e) {
    let { style: t, withGuildIcon: n, inverted: i } = e,
        l = { className: eX()(n5.GI, { [n5.a7]: n }, { [n5.BJ]: i }), style: t },
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
let n8 = a.memo(function (e) {
    let { thread: t, isSelectedChannel: i, isSelectedVoice: l, isLast: s, withGuildIcon: o } = e,
        d = (0, h.bG)([tx.Ay], () => tx.Ay.getVoiceStatesForChannel(t), [t]),
        u = (0, h.bG)([nB.A], () => nB.A.hasVideo(t.id)),
        m = (0, t4.Ay)(t),
        {
            unread: g,
            mentionCount: A,
            isMentionLowImportance: f,
        } = (0, h.cf)([nD.Ay], () => ({
            unread: nD.Ay.hasUnread(t.id),
            mentionCount: nD.Ay.getMentionCount(t.id),
            isMentionLowImportance: nD.Ay.getIsMentionLowImportance(t.id),
        })),
        p = (0, h.bG)([nX.A], () => nX.A.isMuted(t.id)),
        C = a.useCallback(
            (e) => {
                (0, nk.JA)(t, !e.shiftKey, nW.H9.CHANNEL_LIST);
            },
            [t],
        ),
        E = a.useCallback(() => {
            nO.A.preload(t.guild_id, t.id);
        }, [t.guild_id, t.id]),
        x = a.useCallback(
            (e) => {
                (0, nY.A)(e, t);
            },
            [t],
        ),
        N = a.useCallback(
            (e) => {
                let i = U.A.getChannel(t.id);
                null != i &&
                    (0, tl.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e(926132),
                            n.e(393336),
                            n.e(391763),
                            n.e(491001),
                            n.e(947502),
                            n.e(603998),
                            n.e(343266),
                            n.e(965789),
                            n.e(691671),
                            n.e(412255),
                            n.e(63340),
                            n.e(896804),
                            n.e(697367),
                            n.e(703869),
                            n.e(51212),
                            n.e(420105),
                        ]).then(n.bind(n, 949488));
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
                ? eA.intl.formatToPlainString(eA.t["ZL7+I6"], { channelName: m, mentionCount: A })
                : g
                  ? eA.intl.formatToPlainString(eA.t.YlVvmc, { channelName: m })
                  : eA.intl.formatToPlainString(eA.t["0nZpiF"], { channelName: m });
    return (0, r.jsxs)("li", {
        role: S,
        className: eX()(ep.fx, { [ep.wH]: i }),
        children: [
            (0, r.jsx)(n4, { withGuildIcon: o }),
            s
                ? null
                : (0, r.jsx)(n4, {
                      withGuildIcon: o,
                      inverted: !0,
                      style: { transform: "rotateX(180deg) translateY(-9px)" },
                  }),
            (0, r.jsx)(t9.vN, {
                focusTarget: b,
                ringTarget: b,
                offset: { top: 2, bottom: 2, right: 4 },
                children: (0, r.jsxs)("div", {
                    className: eX()(ep.Ki, n2.iE, n2.ZS, {
                        [n2.J1]: i,
                        [n2.F4]: !i && p,
                        [n2.V2]: !p && !i && g,
                        [n2.lY]: o,
                    }),
                    onMouseDown: E,
                    onContextMenu: N,
                    children: [
                        !g || p || i ? null : (0, r.jsx)("div", { className: eX()(n2.gy, n2.WS) }),
                        (0, r.jsx)(es.D, {
                            ...I,
                            innerRef: b,
                            className: n2.nf,
                            onClick: C,
                            onAuxClick: x,
                            "aria-label": j,
                            focusProps: { enabled: !1 },
                            children: (0, r.jsxs)("div", {
                                className: eX()(n2.Y5, n2.__invalid_threadMainContent),
                                children: [
                                    (0, r.jsx)(ti.E, {
                                        variant: "body-sm/medium",
                                        color: "none",
                                        className: n2.UU,
                                        children: (0, r.jsx)(t0.A, { "aria-hidden": !0, children: m }),
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: n2.Y_,
                                        onClick: nq.dG,
                                        onKeyDown: nq.dG,
                                        children: [
                                            (0, r.jsx)(n7, {
                                                thread: t,
                                                countInVoice: _,
                                                hasVideo: u,
                                                mentionCount: A,
                                                isMentionLowImportance: f,
                                            }),
                                            (0, r.jsx)(nz, { thread: t, tabIndex: I.tabIndex }),
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
var ie = n(790782),
    it = n(191850),
    ii = n(512656),
    il = n(162052);
let is = { transform: "rotateX(180deg) translateY(-9px)" };
function ir(e) {
    let { projectId: t } = e,
        { label: n, detail: i } = (function (e) {
            let {
                    activity: t,
                    compacting: n,
                    saving: i,
                    publishing: l,
                } = (0, h.cf)(
                    [nv.A, nG.A],
                    () => ({
                        activity: nv.A.getThinkingActivity(e),
                        compacting: nv.A.isCompacting(e),
                        saving: nv.A.isSaving(e),
                        publishing: nG.A.getPublishStatus(e)?.publishing === !0,
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
            return { label: (0, ny.Dy)({ activity: t, compacting: n, saving: i, publishing: l }), detail: r };
        })(t);
    return (0, r.jsx)(nb.u, {
        title: null != i ? n : void 0,
        body: i ?? n,
        lineClamp: 4,
        position: "right",
        ariaHidden: !0,
        children: (0, r.jsx)("div", {
            className: ep.yW,
            "aria-hidden": !0,
            children: (0, r.jsx)(nj.y, { type: nj.t.SPINNING_CIRCLE_SIMPLE, className: ii.u1, itemClassName: ii.pu }),
        }),
    });
}
function ia(e) {
    let { projectId: t } = e,
        n = eA.intl.string(it.default.bWzWw9),
        i = a.useCallback(
            (e) => {
                (e.stopPropagation(), (0, ee.tb)(t));
            },
            [t],
        );
    return (0, r.jsx)(el.m, {
        text: n,
        ariaHidden: !0,
        children: (0, r.jsx)(es.D, {
            className: ep.Xs,
            onClick: i,
            "aria-label": n,
            children: (0, r.jsx)(er.P, { size: "xs", color: "currentColor", className: ep.gE }),
        }),
    });
}
let io = a.memo(function (e) {
    let { project: t, guildId: i, isLast: l, selected: s } = e,
        o = t.id,
        d = (0, nT.yX)(o),
        u = (0, h.bG)([nD.Ay], () => nD.Ay.getMentionCount(o, ie.P.CONJURING_PROJECT), [o]),
        m = "working" === d,
        g = "unread" === d && !s,
        { role: A, ...f } = (0, c.rm)(`conjure-project-${o}`),
        p = a.useRef(null),
        C = a.useCallback(() => (0, nR.A)(o, "project_list"), [o]),
        { onContextMenu: E, importInput: x } = (function (e, t) {
            let i = e.id,
                { onExport: l, onImport: s, importInput: o } = (0, nL.A)(e);
            return {
                onContextMenu: a.useCallback(
                    (e) => {
                        (0, tl.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                n.e(341432),
                                n.e(246969),
                                n.e(356675),
                                n.e(566976),
                                n.e(387634),
                                n.e(916519),
                                n.e(46233),
                                n.e(90967),
                                n.e(277178),
                                n.e(241989),
                                n.e(22976),
                                n.e(819351),
                            ]).then(n.bind(n, 920394));
                            return () => (0, r.jsx)(e, { projectId: i, guildId: t, onExport: l, onImport: s });
                        });
                    },
                    [i, t, l, s],
                ),
                importInput: o,
            };
        })(t, i),
        N = [t.name, m ? eA.intl.string(it.default["Y8pS+n"]) : g ? eA.intl.string(it.default["N+3Pzk"]) : null]
            .filter((e) => null != e)
            .join(", ");
    return (0, r.jsxs)("li", {
        role: A,
        className: eX()(ep.fx, ii.nM, { [ep.wH]: s }),
        children: [
            (0, r.jsx)(n4, {}),
            l ? null : (0, r.jsx)(n4, { inverted: !0, style: is }),
            g ? (0, r.jsx)("div", { className: eX()(n2.gy, n2.WS, ii.gy) }) : null,
            (0, r.jsx)(t9.vN, {
                focusTarget: p,
                ringTarget: p,
                offset: { top: 2, bottom: 2, right: 4 },
                children: (0, r.jsx)("div", {
                    className: eX()(ep.Ki, n2.iE, n2.ZS, { [n2.J1]: s, [n2.V2]: g }),
                    children: (0, r.jsx)(es.D, {
                        ...f,
                        innerRef: p,
                        className: n2.nf,
                        onClick: C,
                        onContextMenu: E,
                        "aria-label": N,
                        focusProps: { enabled: !1 },
                        children: (0, r.jsxs)("div", {
                            className: n2.Y5,
                            children: [
                                (0, r.jsx)(nM.A, { project: t, size: "header" }),
                                (0, r.jsx)(ti.E, {
                                    variant: "body-sm/medium",
                                    color: "none",
                                    className: n2.UU,
                                    children: (0, r.jsx)(t0.A, {
                                        "aria-hidden": !0,
                                        className: m ? il.Hz : void 0,
                                        children: t.name,
                                    }),
                                }),
                                (0, r.jsxs)("div", {
                                    className: n2.Y_,
                                    children: [
                                        m
                                            ? (0, r.jsx)(ir, { projectId: o })
                                            : g
                                              ? (0, r.jsx)("div", {
                                                    className: ep.yW,
                                                    "aria-hidden": !0,
                                                    children: (0, r.jsx)(nU.A, { count: Math.max(1, u) }),
                                                })
                                              : null,
                                        s ? null : (0, r.jsx)(ia, { projectId: o }),
                                    ],
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
              className: n5.kL,
              children: (0, r.jsxs)("ul", {
                  role: "group",
                  "aria-label": eA.intl.string(it.default.e81UDK),
                  children: [
                      (0, r.jsx)("div", { className: n5.eh }),
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
    return (0, r.jsx)(ec.G, {
        id: `conjure-${t.id}`,
        renderIcon: (e) =>
            (0, r.jsx)(ic.D, { size: "custom", color: "currentColor", width: 20, height: 20, className: e }),
        text: eA.intl.string(it.default.uk6jhJ),
        selected: n,
        onClick: () => {
            let e = l === eh.VV.CONJURE && s === t.id;
            (0, eu.pX)(H.BVt.CHANNEL(t.id, eh.VV.CONJURE, null == i || e ? null : i));
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
    return null == t ? ep.fx : e > t ? ep.mU : ep.TR;
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
        [P.A, w.A],
        () =>
            n ||
            (0, M.ai)(w.A.getGuildId()) ||
            (!P.A.can(H.xBc.MANAGE_CHANNELS, t) &&
                !P.A.can(H.xBc.MANAGE_ROLES, t) &&
                !P.A.can(H.xBc.MANAGE_WEBHOOKS, t)) ||
            ((0, tR.tr)(t.type) && !P.A.can(H.xBc.VIEW_CHANNEL, t)) ||
            (t.isGuildVocal() && !P.A.can(H.xBc.CONNECT, t)) ||
            !tR.bk.has(t.type) ||
            t.isModeratorReportChannel(),
    )
        ? null
        : (0, r.jsx)(el.m, {
              asContainer: !0,
              text: eA.intl.string(eA.t["3gUsJb"]),
              ariaHidden: !0,
              children: (0, r.jsx)(es.D, {
                  className: eX()(ep.Xs, { [ep.Tf]: l, [ep.bw]: a, [ep.UI]: !a }),
                  onClick: function () {
                      ip.Ay.open(t.id);
                  },
                  tabIndex: i,
                  "aria-label": eA.intl.string(eA.t["3gUsJb"]),
                  focusProps: s ? { offset: 2 } : void 0,
                  children: (0, r.jsx)(im.SettingsIcon, { size: "xs", color: "currentColor", className: ep.gE }),
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
        u = (0, h.bG)([O.A], () => O.A.getGuild(t.getGuildId())),
        m = (0, h.bG)([iN.A], () => iN.A.getStageInstanceByChannel(t.id), [t.id]),
        g = (0, h.bG)([iC.Ay], () => iC.Ay.getActiveEventByChannel(t.id), [t.id]),
        A = (0, h.bG)([P.A], () => (0, iE.K)(P.A, u, t, m)),
        f = (0, h.bG)([], () =>
            t?.type === H.rbe.GUILD_VOICE ? eA.intl.string(eA.t["EE+P0H"]) : eA.intl.string(eA.t["0jeAXt"]),
        ),
        p = a.useRef(null);
    if (l || !A || t.isModeratorReportChannel() || t.isThread()) return null;
    let C = (0, r.jsx)(ig.R, { size: "xs", className: ep.gE, "aria-hidden": !0, color: "currentColor" });
    return (
        i &&
            (C = (0, r.jsx)(nm.A, {
                childRef: p,
                tutorialId: "instant-invite",
                position: "left",
                children: (0, r.jsx)("div", { ref: p, children: C }),
            })),
        (0, r.jsx)(el.m, {
            asContainer: !0,
            text: f,
            ariaHidden: !0,
            children: (0, r.jsx)(es.D, {
                className: eX()(ep.Xs, { [ep.Tf]: o, [ep.bw]: c, [ep.UI]: !c }),
                onClick: function () {
                    if (null != u) {
                        let e = i_.A.getAllActiveStreams().filter(
                            (e) => e.state !== H.XYD.ENDED && e.channelId === t.id,
                        );
                        (0, I.mM)(async () => {
                            let { default: i } = await Promise.all([
                                n.e(683621),
                                n.e(711162),
                                n.e(159957),
                                n.e(728136),
                                n.e(680029),
                                n.e(966623),
                            ]).then(n.bind(n, 660194));
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
    return (0, r.jsx)(el.m, {
        asContainer: !0,
        text: eA.intl.string(eA.t["ROh4T+"]),
        ariaHidden: !0,
        children: (0, r.jsx)(es.D, {
            className: ep.Xs,
            onClick: function () {
                (0, ix.Ol)(t.guild_id, t.id);
            },
            "aria-label": eA.intl.string(eA.t["ROh4T+"]),
            focusProps: n ? { offset: 2 } : void 0,
            children: (0, r.jsx)(er.P, { size: "xs", color: "currentColor", className: ep.gE }),
        }),
    });
}
function iG(e) {
    let { channel: t, shouldEnlargeTargets: n } = e;
    return (0, r.jsx)(el.m, {
        asContainer: !0,
        text: eA.intl.string(eA.t["N2c/Un"]),
        ariaHidden: !0,
        children: (0, r.jsx)(es.D, {
            className: ep.Xs,
            onClick: function () {
                (0, ix.jA)(t.guild_id, t.id, !0, { section: H.JJy.CHANNEL_LIST });
            },
            "aria-label": eA.intl.string(eA.t["N2c/Un"]),
            focusProps: n ? { offset: 2 } : void 0,
            children: (0, r.jsx)(iA.CheckmarkLargeIcon, { size: "xs", color: "currentColor", className: ep.gE }),
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
        A = (0, h.bG)([U.A, tT.A], () => {
            let e = tT.A.getDirectoryChannelIds(t.id);
            return 0 === e.length ? null : U.A.getChannel(e[0]);
        }),
        f = (0, h.bG)([U.A], () => U.A.getChannel(A?.parent_id)),
        p = i === A?.id,
        C = (0, t4.Ay)(A),
        E = (0, h.bG)([P.A], () =>
            null != f ? P.A.can(H.xBc.MANAGE_CHANNELS, f) : null != t && P.A.can(H.xBc.MANAGE_CHANNELS, t),
        ),
        x = a.useCallback(
            (e) => {
                null != A &&
                    (0, tl.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e(926132),
                            n.e(430997),
                            n.e(379995),
                            n.e(729559),
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
            className: eX()(N, { [ep.r9]: _, [ep.wH]: p }),
            "data-dnd-name": C,
            children: (0, r.jsxs)(nq.Ay, {
                className: ep.Ki,
                channel: A,
                guild: t,
                selected: p,
                onContextMenu: x,
                forceInteractable: !0,
                resolvedUnreadSetting: ie.e.ONLY_MENTIONS,
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
    iO = n(44724),
    iP = n(849134),
    iw = n(770178),
    iV = n(307076);
let iH = 50;
function ik(e) {
    let { children: t, ref: n } = e,
        [i, l] = a.useState(-1),
        s = a.useCallback((e) => {
            l(e.contentRect.width);
        }, []),
        o = (0, iw.w)(s, [], { fireOnMount: !0 }),
        [{ shineSpring: d }, c] = (0, tn.z)(() => ({
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
                    (0, r.jsx)(tt.animated.div, {
                        className: iV.q,
                        style: {
                            transform: d.to(
                                (e) => `translateX(calc(${e * i}px + ${340 * e}px)) translateY(-50%) rotate(45deg)`,
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
            style: { "--custom-shine-dimensions": "240px", "--custom-shine-rotated-dimensions-delta": `${iH}px` },
            children: m,
        })
    );
}
var iB = n(371794),
    iF = n(240248),
    iW = n(998218),
    iz = n(427797);
let iK = a.memo(function (e) {
    let { guild: t, selected: i } = e,
        l = a.useRef(null),
        s = a.useRef(null),
        o = (0, I.Rv)(),
        d = (0, h.bG)([eN.A], () => eN.A.hasLayers()),
        c = (0, eE.xr)((e) => e.fullScreenLayers.length > 0);
    a.useEffect(() => {
        (0, iL.Kh)(t.id);
    }, [t.id]);
    let u = (0, h.bG)([iU.A], () => iU.A.getAnnouncement(t.id)),
        m = u?.state === "success" ? u.announcement : void 0,
        [g, A] = (0, ed.x_)(ei.M.GAME_SHOP_NEW_BADGE, t.id, m?.id ?? "", void 0, !0),
        f = g === ei.M.GAME_SHOP_NEW_BADGE && null != m,
        p = (0, t$.nY)(t.id),
        C = (0, iD.u)({ surface: "storefront_badge", applicationId: p }),
        E = C?.tooltip,
        x = null;
    (f && (x = eA.intl.string(eA.t.y2b7CA)), null != C && (x = C.text));
    let [N, _] = (0, ed.x_)(ei.M.GAME_SHOP_NEW_DROP_POPOVER, t.id, m?.id ?? ""),
        S = N === ei.M.GAME_SHOP_NEW_DROP_POPOVER && null != m;
    a.useEffect(() => {
        i && (f && A(em.i.INDIRECT_ACTION), S && _(em.i.INDIRECT_ACTION));
    }, [A, _, i, f, S]);
    let b = a.useCallback(() => {
            (A(em.i.TAKE_ACTION), _(em.i.TAKE_ACTION));
            let e = (0, t$.mq)(t.id),
                n = iU.A.getStorefrontState(e)?.activePage ?? 0;
            (0, eu.pX)(H.BVt.CHANNELS_GAME_SHOP(t.id, n));
        }, [t.id, A, _]),
        j = a.useCallback(() => {
            (0, iO.X)({ guildId: t.id, forceFetch: S });
        }, [t.id, S]),
        v = a.useCallback(() => {
            _(em.i.USER_DISMISS);
        }, [_]),
        G = a.useCallback(
            (e) => {
                null != t &&
                    (0, tl.L3)(e, async () => {
                        let { default: e } = await n.e(899523).then(n.bind(n, 41614));
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
            let e = (0, r.jsx)(ea.E, { type: { text: x }, variant: "primary" });
            return null != E ? (0, r.jsx)(el.m, { asContainer: !0, text: E, children: e }) : e;
        }, [x, E]),
        M = a.useCallback(
            (e) =>
                (0, r.jsx)(ec.G, {
                    background: (0, r.jsx)("div", { className: iz.D }),
                    innerClassName: iz.Z,
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
                    text: (0, r.jsx)(ti.E, {
                        variant: "body-md/medium",
                        className: n2.UU,
                        children: eA.intl.string(eA.t.vyaWs7),
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
                                ? iW.A.toURLSafe((0, iB.YE)(m.applicationId, m.assetId, 256, "webp"))
                                : void 0,
                        t =
                            null != m.backgroundImageAssetId
                                ? iW.A.toURLSafe((0, iB.YE)(m.applicationId, m.backgroundImageAssetId, 256, "webp"))
                                : void 0;
                    if (null == e) return null;
                    return {
                        graphicSource: { type: "sku", imageUrl: e, backgroundImageUrl: t },
                        title: eA.intl.string(eA.t["7PvvS9"]),
                        body: eA.intl.formatToPlainString(eA.t["9J4h1a"], { applicationName: m.applicationName }),
                    };
                }
                case "guild-discord-announcement": {
                    let { videoAssetFullyQualifiedURL: e, assetFullyQualifiedURL: t } = m;
                    if ((0, iF.uJ)(e) && (0, iF.uJ)(t)) return null;
                    return {
                        graphicSource: (0, iF.uJ)(e) ? { type: "asset", src: t } : { type: "video", src: e },
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
                    ? (0, r.jsx)(iP.A, {
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
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(ik, { ref: l, children: M }), !o && !d && !c && L()] });
});
var iY = n(740426),
    iX = n(826673),
    iJ = n(591552),
    iq = n(454058);
function iZ(e) {
    let { guild: t, selected: i } = e,
        l = (0, tF.A)(t),
        s = (0, iX.HX)(ei.M.CHANNEL_BROWSER_NEW_BADGE_NUX),
        o = (0, tO.yK)([iq.A], () =>
            Array.from(iq.A.getNewChannelIds(t.id)).filter((e) => iq.A.shouldIndicateNewChannel(t.id, e)),
        ),
        d = (0, tO.bG)([nD.Ay], () => nD.Ay.hasUnread(t.id, ie.P.GUILD_ONBOARDING_QUESTION)),
        c = o.length > 2,
        u = (0, tO.bG)([iJ.A, nD.Ay], () => {
            let e = iJ.A.lastFetchedAt(t.id),
                n = nD.Ay.lastMessageId(t.id, ie.P.GUILD_ONBOARDING_QUESTION);
            if (null == n) return !1;
            let i = tS.default.extractTimestamp(n);
            return null != e && e > i;
        }),
        h = a.useCallback(() => {
            (0, eu.pX)(H.BVt.CHANNEL(t.id, l ? eh.VV.CUSTOMIZE_COMMUNITY : eh.VV.CHANNEL_BROWSER));
        }, [t.id, l]),
        m = a.useCallback(
            (e) => {
                (0, tl.L3)(e, async () => {
                    let { default: e } = await Promise.all([n.e(113446), n.e(317699), n.e(830412)]).then(
                        n.bind(n, 807431),
                    );
                    return (n) => (0, r.jsx)(e, { ...n, guild: t });
                });
            },
            [t],
        ),
        g = null;
    return (
        (s && !d && !c) || i || u || (g = (0, r.jsx)(ea.E, { type: "new", variant: "primary" })),
        (0, r.jsx)(ec.G, {
            id: `channels-${t.id}`,
            renderIcon: (e) => (0, r.jsx)(iY.k, { size: "md", color: "currentColor", className: e }),
            text: l ? eA.intl.string(eA.t.h9mGOP) : eA.intl.string(eA.t.et6wav),
            selected: i,
            onClick: h,
            onContextMenu: m,
            trailing: g,
        })
    );
}
var i$ = n(855473);
function iQ(e) {
    let { guild: t, selected: n } = e;
    return (0, r.jsx)(ec.G, {
        id: `home-tab-${t.id}`,
        renderIcon: (e) => (0, r.jsx)(i$.Z, { size: "md", color: "currentColor", className: e }),
        text: eA.intl.string(eA.t.VbpLyU),
        selected: n,
        onClick: function () {
            (0, eu.pX)(H.BVt.CHANNEL(t.id, eh.VV.GUILD_HOME));
        },
    });
}
var i0 = n(534514),
    i1 = n(5373),
    i3 = n(65995),
    i9 = n(195702);
function i6(e, t) {
    return (0, r.jsx)(ti.E, { variant: "body-xs/semibold", color: "text-default", children: e }, t);
}
let i2 = a.memo(function (e) {
    let { guild: t } = e,
        n = (0, h.bG)([tW.h], () => tW.h.getNewMemberActions(t.id), [t.id]),
        i = (0, h.bG)([i3.A], () => i3.A.getCompletedActions(t.id)),
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
                  (0, r.jsxs)(es.D, {
                      ...o,
                      role: "button",
                      focusProps: { offset: { right: 4 } },
                      className: i9.G9,
                      onClick: function () {
                          (0, eu.pX)(H.BVt.CHANNEL(t.id, eh.VV.GUILD_HOME));
                      },
                      children: [
                          (0, r.jsxs)("div", {
                              className: i9.A1,
                              children: [
                                  (0, r.jsx)(i0.D, {
                                      variant: "heading-xs/semibold",
                                      children: eA.intl.string(eA.t.SnrR3x),
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: i9.Ib,
                                      children: [
                                          (0, r.jsx)(ti.E, {
                                              variant: "body-xs/medium",
                                              color: "text-muted",
                                              className: i9.Cv,
                                              children: eA.intl.format(eA.t.eqZ1lW, {
                                                  numberHook: i6,
                                                  total: s.toString(),
                                                  completed: l.toString(),
                                              }),
                                          }),
                                          (0, r.jsx)(tc.A, {
                                              className: i9.UE,
                                              width: 16,
                                              height: 16,
                                              direction: tc.A.Directions.RIGHT,
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, r.jsx)(i1.i, {
                              className: i9.hr,
                              foregroundGradientColor: [
                                  m.A.unsafe_rawColors.GREEN_300.css,
                                  m.A.unsafe_rawColors.GREEN_230.css,
                              ],
                              percent: (l / s) * 100 + 3,
                              animate: !0,
                          }),
                      ],
                  }),
                  (0, r.jsx)("div", { role: "separator", className: i9.yF }),
              ],
          });
});
var i5 = n(581925);
function i7(e) {
    let { guild: t, selected: n } = e;
    return (0, r.jsx)(ec.G, {
        id: `official-messages-page-${t.id}`,
        renderIcon: (e) => (0, r.jsx)(i5.L, { size: "md", color: "currentColor", className: e }),
        text: eA.intl.string(eA.t.xHEzFh),
        selected: n,
        onClick: function () {
            (0, eu.pX)(H.BVt.CHANNEL(t.id, eh.VV.GUILD_OFFICIAL_MESSAGES));
        },
    });
}
var i4 = n(514179);
function i8(e) {
    let { guild: t, selected: i } = e;
    return (0, r.jsx)(ec.G, {
        id: `subscriptions-${t.id}`,
        renderIcon: (e) => (0, r.jsx)(i4.A, { className: e }),
        text: eA.intl.string(eA.t["KzCF/6"]),
        selected: i,
        onClick: function () {
            (0, eu.pX)(H.BVt.CHANNEL(t.id, eh.VV.ROLE_SUBSCRIPTIONS));
        },
        onContextMenu: function (e) {
            null != t &&
                (0, tl.L3)(e, async () => {
                    let { default: e } = await n.e(902097).then(n.bind(n, 238312));
                    return (n) => (0, r.jsx)(e, { ...n, guild: t });
                });
        },
    });
}
var le = n(506774),
    lt = n(149468),
    ln = n(289397),
    li = n(486418),
    ll = n(575926),
    ls = n(440293),
    lr = n(129230),
    la = n(634654),
    lo = n(888918);
function ld(e) {
    let { guildId: t, selected: n, handleClick: i } = e,
        l = (0, ls.w)(t),
        s = (0, tO.bG)([O.A], () => O.A.getGuild(t)),
        a = s?.features.has(H.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) === !0,
        o = "false" === le.w.get(la.bJ, "false"),
        d = (0, tO.bG)([W.Ay], () => W.Ay.useReducedMotion);
    return (0, r.jsx)(ec.G, {
        id: `shop-${t}`,
        className: eX()(lo.A2, { [lo.wH]: n, [lo.ST]: o }),
        innerClassName: lo.LE,
        renderIcon: (e) => (0, r.jsx)(ll.h, { width: 20, height: 20, className: eX()([e, lo.sV]) }),
        text: eA.intl.string(eA.t.al5EXL),
        selected: n,
        onClick: i,
        trailing: (0, r.jsxs)("div", {
            className: lo.ai,
            children: [
                d
                    ? (0, r.jsx)("div", {
                          className: lo.Ad,
                          children: (0, r.jsx)(ea.E, { type: "new", variant: "primary" }),
                      })
                    : (0, r.jsx)("img", {
                          src: (0, ln.n)("server_products/storefront/money.gif"),
                          className: lo.TG,
                          alt: "",
                      }),
                n &&
                    (0, r.jsx)(es.D, {
                        className: lo.b,
                        onClick: function (e) {
                            (e.stopPropagation(),
                                (0, iX.Dr)(ei.M.SERVER_SHOP_PHANTOM_PREVIEW),
                                lr.default.track(H.HAw.GUILD_SHOP_PREVIEW_CLICK, {
                                    ...(0, lt.H$)(t),
                                    action_taken: la.hN.DISMISS_CHANNEL_ROW,
                                }),
                                (l && a) || (0, eu.bG)(H.BVt.CHANNEL(t, tT.A.getDefaultChannel(t)?.id)));
                        },
                        "aria-label": eA.intl.string(eA.t.cpT0Cq),
                        children: (0, r.jsx)(t2.a, { size: "xs", color: "currentColor" }),
                    }),
            ],
        }),
    });
}
function lc(e) {
    let { guild: t, selected: i } = e;
    function l() {
        (le.w.set(la.bJ, "true"), (0, eu.pX)(H.BVt.CHANNEL(t.id, eh.VV.GUILD_SHOP)));
    }
    return (0, li.P)(t)
        ? (0, r.jsx)(ld, { guildId: t.id, selected: i, handleClick: l })
        : (0, r.jsx)(ec.G, {
              id: `shop-${t.id}`,
              renderIcon: (e) => (0, r.jsx)(ll.h, { width: 20, height: 20, className: e }),
              text: eA.intl.string(eA.t.al5EXL),
              selected: i,
              onClick: l,
              onContextMenu: function (e) {
                  null != t &&
                      (0, tl.L3)(e, async () => {
                          let { default: e } = await n.e(852565).then(n.bind(n, 345332));
                          return (n) => (0, r.jsx)(e, { ...n, guild: t });
                      });
              },
          });
}
let lu = a.memo(function (e) {
    let { channel: t, selectedChannel: n, selectedVoiceChannelId: i, sortedThreadIds: l, withGuildIcon: s } = e,
        a = (0, t4.Ay)(t),
        { density: o } = (0, E.wR)(),
        d = (0, h.yK)([U.A], () => l.map((e) => U.A.getChannel(e)).filter(tN.Vq), [l]),
        c = (0, h.bG)([tx.Ay], () => {
            let e = d[d.length - 1];
            if (null == e) return 0;
            let t = tx.Ay.getVoiceStates(e.guild_id)[e.id];
            return null == t || 0 === t.length ? 0 : i !== e.id ? 40 : 32 * t.length + 8;
        });
    return (0, r.jsx)("li", {
        className: n5.kL,
        children: (0, r.jsxs)("ul", {
            role: "group",
            "aria-label": eA.intl.formatToPlainString(eA.t.EiyIi6, { channelName: a }),
            children: [
                (0, r.jsx)("div", {
                    className: eX()(n5.eh, { [n5.ET]: s }),
                    style: { bottom: ("cozy" === o ? 28 : 24) + c },
                }),
                d.map((e, t) =>
                    (0, r.jsx)(
                        n8,
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
var lh = n(265872),
    lm = n(367513),
    lg = n(296216),
    lA = n(657043),
    lf = n(963027),
    lp = n(202384),
    lC = n(51758),
    lE = n(139033),
    lx = n(305866),
    lN = n(123292),
    l_ = n(830215),
    lS = n(315982),
    lI = n(480900),
    lb = n(557722),
    lj = n(834942),
    lv = n(287809),
    lG = n(53516),
    ly = n(648580),
    lR = (((l = {})[(l.VOICE = 0)] = "VOICE"), l);
let lM = function (e) {
    let { type: t, guildId: i, closePopout: l } = e,
        s = (0, en.GV)(),
        a = (0, h.bG)([lj.A], () => lj.A.getCheck(i), [i]),
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
                let e = eA.intl.string(eA.t["6zY8BI"]),
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
                    ? { header: e, body: eA.intl.string(eA.t.IRxUlG), buttonText: eA.intl.string(eA.t.fiNVin) }
                    : i
                      ? { header: e, body: eA.intl.string(eA.t.vW8iUF), buttonText: eA.intl.string(eA.t["50gfOv"]) }
                      : l
                        ? { header: e, body: eA.intl.string(eA.t.vdSOpz), buttonText: eA.intl.string(eA.t.lm1UKt) }
                        : s
                          ? {
                                header: e,
                                body: eA.intl.formatToPlainString(eA.t.v1ktYb, { min: H.$8o.MEMBER_AGE }),
                                buttonText: eA.intl.string(eA.t.BddRzS),
                            }
                          : r
                            ? {
                                  header: e,
                                  body: eA.intl.formatToPlainString(eA.t.sncw41, { min: H.$8o.ACCOUNT_AGE }),
                                  buttonText: eA.intl.string(eA.t.BddRzS),
                              }
                            : a && null != o && null === o.tags.guild_connections
                              ? {
                                    header: e,
                                    body: eA.intl.format(eA.t.MZbCuG, { roleName: `@${o.name}` }),
                                    buttonText: eA.intl.string(eA.t["6Ge2LG"]),
                                }
                              : { header: e, body: null, buttonText: null };
            }
        })(t, a);
    return null == g || null == A
        ? null
        : (0, r.jsxs)(lx.l, {
              className: ly.kL,
              "aria-labelledby": s,
              children: [
                  (0, r.jsx)("img", { alt: "", className: ly.Sl, src: n(303528) }),
                  (0, r.jsxs)("div", {
                      className: ly.Qs,
                      children: [
                          (0, r.jsx)(i0.D, { variant: "heading-sm/semibold", id: s, children: g }),
                          (0, r.jsx)(ti.E, { color: "text-default", variant: "body-sm/normal", children: A }),
                          (0, r.jsxs)("div", {
                              className: ly.UD,
                              children: [
                                  null != f
                                      ? (0, r.jsx)("div", {
                                            "data-button-hoisted-classname-wrapper": !0,
                                            className: ly.FS,
                                            children: (0, r.jsx)(t1.$, {
                                                variant: "primary",
                                                text: f,
                                                onClick: function () {
                                                    (o
                                                        ? lS.R()
                                                        : c
                                                          ? (0, I.mM)(
                                                                async () => {
                                                                    let { default: e } = await Promise.all([
                                                                        n.e(590275),
                                                                        n.e(766806),
                                                                        n.e(14775),
                                                                        n.e(989545),
                                                                        n.e(991531),
                                                                        n.e(757786),
                                                                        n.e(84704),
                                                                    ]).then(n.bind(n, 615715));
                                                                    return (t) =>
                                                                        (0, r.jsx)(e, {
                                                                            reason: lb.d.GUILD_PHONE_REQUIRED,
                                                                            ...t,
                                                                        });
                                                                },
                                                                { modalKey: lG.V },
                                                            )
                                                          : d
                                                            ? (l_.A.verifyResend(),
                                                              (0, lE.A)({
                                                                  title: eA.intl.string(eA.t.LykQYk),
                                                                  subtitle: eA.intl.format(eA.t.azKEPy, {
                                                                      email: lv.default.getCurrentUser()?.email,
                                                                  }),
                                                              }))
                                                            : u && null != m && (0, lI.b)(m, i),
                                                        l());
                                                },
                                            }),
                                        })
                                      : null,
                                  o || c || d
                                      ? (0, r.jsx)(lN.Q, {
                                            onClick: l,
                                            text: eA.intl.string(eA.t.oEAioF),
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
var lT = n(824865),
    lL = n(378570),
    lU = n(129095),
    lD = n(113783),
    lO = n(96566),
    lP = n(46653),
    lw = n(312006),
    lV = n(505543),
    lH = n(994500),
    lk = n(685399),
    lB = n(475889),
    lF = n(693879),
    lW = n(435470),
    lz = n(35275),
    lK = n(300596);
function lY(e) {
    let { locked: t } = e;
    return (0, r.jsx)("div", {
        className: eX()(ep.Xs, lK.U),
        children: (0, r.jsx)(lz.A, {
            className: ep.gE,
            color: t ? m.A.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css : void 0,
        }),
    });
}
var lX = n(863005),
    lJ = n(669715),
    lq = n(769015),
    lZ = n(217223);
function l$(e) {
    let { className: t, embeddedApps: n, muted: i } = e;
    if (n.length <= 0) return null;
    {
        if (1 === n.length)
            return (0, r.jsx)("div", {
                className: eX()(lZ.kL, t, i && lZ.F4),
                children: (0, r.jsx)(lq.A, { game: n[0].application, className: lZ.wK }),
            });
        let e = n.length - 1;
        return (0, r.jsxs)("div", {
            className: eX()(lZ.kL, t, i && lZ.F4),
            children: [
                (0, r.jsx)(lq.A, { game: n[0].application, className: lZ.wK }),
                2 === n.length
                    ? (0, r.jsx)(lq.A, { game: n[1].application, className: lZ.wK })
                    : (0, r.jsx)(ti.E, {
                          className: lZ.ju,
                          variant: "body-xs/semibold",
                          color: "interactive-text-active",
                          children: `+${e}`,
                      }),
            ],
        });
    }
}
var lQ = n(905695);
function l0(e) {
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
        g = (0, h.bG)([nD.Ay], () => nD.Ay.getMentionCount(t.id)),
        A = (0, h.bG)([nD.Ay], () => nD.Ay.getIsMentionLowImportance(t.id)),
        f = (0, lk.Ay)(t),
        p = (0, h.bG)([P.A], () => !P.A.can(H.xBc.CONNECT, t)),
        C = (0, lB.H)(t),
        E = (0, h.bG)([nB.A], () => nB.A.hasVideo(t.id)),
        x = (0, lO.qT)(t.id) && t.isGuildStageVoice(),
        N = (function (e) {
            let { channel: t, locked: n, video: i, selected: l } = e;
            return (
                (function (e) {
                    let { channel: t, video: n, considerMaxStageVoiceUserLimit: i = !0 } = e,
                        { limit: l } = (0, nZ.A)(t),
                        s = -1;
                    return (t.userLimit > 0 && (s = t.userLimit),
                    n && l > 0 && (s = s > 0 ? Math.min(s, l) : l),
                    i && 1e4 === s)
                        ? 0
                        : s;
                })({ channel: t, video: i }) > 0 &&
                !n &&
                !l
            );
        })({ channel: t, locked: p, video: (E || x) && null == C, selected: n }),
        _ = (0, h.bG)([lX.A], () => lX.A.getNewThreadCount(t.guild_id, t.id)),
        S = (0, lW.ed)(t.guild_id, t.id),
        I = (0, h.bG)([O.A], () => O.A.getGuild(t.guild_id)?.features.has(H.GuildFeatures.COMMUNITY) ?? !1);
    if (nJ(g)) return (0, r.jsx)(n9, { mentionsCount: g, isMentionLowImportance: A });
    if (o) return (0, r.jsx)(lY, { locked: d });
    if (c) return (0, r.jsx)(ea.E, { type: "new", variant: "primary" });
    if (!u && m === ie.e.ALL_MESSAGES && t.isForumLikeChannel() && null != _ && _ > 0)
        return (0, r.jsx)(ti.E, {
            variant: "body-xs/semibold",
            color: "text-brand",
            className: lQ.O,
            children: eA.intl.format(eA.t.GkAbqY, { count: (0, eI.Gu)(_) }),
        });
    if (!u && t.isForumLikeChannel() && null != S && S > 0)
        return (0, r.jsx)(ti.E, { variant: "body-xs/semibold", color: "text-muted", children: (0, eI.Gu)(S) });
    let b = l?.length ?? 0;
    return null != s && s && N
        ? (0, r.jsx)(n1, { userCount: b, video: E || x, channel: t })
        : i && (0, lJ.t)(l) && I
          ? (0, r.jsx)(ea.E, { type: { text: eA.intl.string(eA.t.dI3q4h) }, variant: "notification" })
          : null != C
            ? (0, r.jsx)(lF.z, { textColor: "text-feedback-positive", entry: { start: C } })
            : null != a && a && f.length > 0
              ? (0, r.jsx)(l$, { embeddedApps: f, muted: u })
              : null;
}
var l1 = n(714619);
let l3 = F(
    (0, lg.F)(
        class extends iy {
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
                return (0, nN.Pd)(e, nB.A, O.A);
            }
            getModeClass() {
                let { position: e, sortingPosition: t, isUserOver: n } = this.props;
                if (n) return ep.ZS;
                if (null != t)
                    if (e > t) return ep.mU;
                    else return ep.TR;
                return ep.fx;
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
                (null != r && (0, lC.V)(r) && (0, lp.Ze)(r),
                    i && this.setState({ shouldShowGuildVerificationPopout: !0 }),
                    t ||
                        n ||
                        e.isRoleSubscriptionTemplatePreviewChannel() ||
                        (s ? lm.A.updateChatOpen(e.id, !0) : (0, lU.av)(e)),
                    __OVERLAY__ || (0, lL.iN)(e.id, l ? { source: lT.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0));
            };
            handleClickChat = () => {
                let { channel: e, locked: t, isSuggestedSection: n } = this.props;
                __OVERLAY__ || t || (0, lL.iN)(e.id, n ? { source: lT.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
            };
            handleContextMenu = (e) => {
                let { channel: t } = this.props,
                    i = O.A.getGuild(t.getGuildId());
                null != i &&
                    (0, tl.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e(926132),
                            n.e(993103),
                            n.e(893190),
                            n.e(393336),
                            n.e(146652),
                            n.e(391763),
                            n.e(491001),
                            n.e(676156),
                            n.e(474610),
                            n.e(947502),
                            n.e(603998),
                            n.e(343266),
                            n.e(550033),
                            n.e(965789),
                            n.e(150773),
                            n.e(309004),
                            n.e(412255),
                            n.e(63340),
                            n.e(430997),
                            n.e(379995),
                            n.e(544058),
                            n.e(591377),
                            n.e(35723),
                            n.e(566378),
                            n.e(256372),
                            n.e(29542),
                            n.e(419690),
                            n.e(465694),
                            n.e(13107),
                            n.e(248804),
                            n.e(318663),
                            n.e(599990),
                            n.e(293340),
                        ]).then(n.bind(n, 428631));
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
                    return (0, r.jsx)(lM, {
                        type: lR.VOICE,
                        guildId: e.guild_id,
                        closePopout: this.closeGuildVerificationPopout,
                    });
                throw Error("VoiceChannel.renderPopout: There must always be something to render");
            };
            renderOpenChatButton = () => {
                let { channel: e, locked: t, forceShowButtons: n } = this.props;
                if (!t)
                    return (0, r.jsx)(el.m, {
                        asContainer: !0,
                        text: eA.intl.string(eA.t.ZXxLQg),
                        children: (0, r.jsx)(es.D, {
                            className: eX()(ep.Xs, n ? ep.Tf : null),
                            onClick: () => {
                                (lm.A.updateChatOpen(e.id, !0), this.handleClickChat());
                            },
                            "aria-label": eA.intl.string(eA.t.ZXxLQg),
                            children: (0, r.jsx)(nP.ChatIcon, { size: "xs", color: "currentColor", className: ep.gE }),
                        }),
                    });
            };
            renderChannelInfo() {
                let { channelInfo: e } = this.props;
                return null == e ? null : (0, r.jsx)("div", { className: ep.yW, children: e });
            }
            getTooltipText = () => {
                let { connected: e } = this.props;
                return this.isFull() && !e ? eA.intl.string(eA.t.rZfiNq) : null;
            };
            renderSubtitle = (e) => {
                let { disableTooltips: t } = e,
                    n = this.props.stageInstance?.topic;
                return null == n ? null : (0, r.jsx)(t0.A, { shouldShow: !t, children: n });
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
                        className: eX()(this.getModeClass(), { [ep.r9]: this.isDisabled() }),
                        "data-dnd-name": (0, t4.m1)(e, lv.default, lH.A),
                        children: [
                            (0, r.jsx)(lh.Y, {
                                targetElementRef: this.channelItemRef,
                                position: "right",
                                renderPopout: this.renderPopout,
                                spacing: 17,
                                onRequestClose: this.closeGuildVerificationPopout,
                                shouldShow: C,
                                children: () =>
                                    (0, r.jsx)(el.m, {
                                        text: E,
                                        children: (0, r.jsxs)(nq.Ay, {
                                            ref: this.channelItemRef,
                                            className: ep.Ki,
                                            disableOverflowTooltip: null != E,
                                            iconClassName: eX()({ [l1.G]: null != u }),
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
                                            "aria-label": (0, lf.Ay)({
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
        },
    ),
);
function l9(e) {
    var t;
    let n,
        i,
        { guild: l, channel: s, disableSorting: a, isFavoriteCategory: o, collapsed: d, voiceStates: c } = e,
        u = (0, h.cf)([nD.Ay], () => ({ unread: nD.Ay.hasUnread(s.id), mentionCount: nD.Ay.getMentionCount(s.id) })),
        m = (0, h.bG)([V.Ay], () => V.Ay.resolveUnreadSetting(s)),
        g = (0, h.cf)([U.A, lj.A, P.A], () => {
            let e = U.A.getChannel(s.parent_id),
                t = lj.A.getCheck(s.guild_id);
            return {
                canManageChannel: null != l && P.A.can(H.xBc.MANAGE_CHANNELS, s),
                canReorderChannel:
                    !0 !== a &&
                    ((0, M.ai)(l.id) ||
                        (null != e ? P.A.can(H.xBc.MANAGE_CHANNELS, e) : P.A.can(H.xBc.MANAGE_CHANNELS, l))),
                canMoveMembers: P.A.can(H.xBc.MOVE_MEMBERS, s),
                locked: !P.A.can(H.xBc.CONNECT, s),
                bypassLimit: P.A.can(H.xBc.MOVE_MEMBERS, s),
                unverifiedAccount: !t.canChat,
            };
        }),
        A = (0, h.bG)([L.A], () => L.A.isCollapsed(s.parent_id)),
        f =
            ((t = s.id),
            (n = (0, lV.A)(t)),
            (i = (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return (0, h.cf)(
                    [lw.Ay, lP.default],
                    () => {
                        let n = lP.default.getId();
                        return lw.Ay.getPermissionsForUser(n, e, t);
                    },
                    [e, t],
                );
            })(t, !0).moderator),
            !n && i ? 1 : 0),
        p = (0, h.bG)([iN.A], () => iN.A.getStageInstanceByChannel(s.id), [s.id]),
        C = (0, lD.zy)(s.id, tb.ip.AUDIENCE),
        { isSubscriptionGated: E, needSubscriptionToAccess: x } = (0, nV.A)(s.id),
        N = (0, h.bG)([V.Ay], () => V.Ay.isFavorite(l.id, s.id)),
        _ = (0, lO.xn)(s.id),
        S = l0({
            channel: s,
            isChannelSelected: !1,
            isChannelCollapsed: d,
            voiceStates: c,
            isSubscriptionGated: E,
            needSubscriptionToAccess: x,
            enableConnectedUserLimit: _ || (s.userLimit > 0 && s.userLimit < 1e4),
        }),
        I = e.connected && null == S,
        b = l.features.has(H.GuildFeatures.INTERNAL_EMPLOYEE_ONLY),
        j = (0, lA.BX)("StageChannel");
    return (0, r.jsx)(l3, {
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
function l6(e, t) {
    let n = t.getGuildId();
    if (null == n) throw Error("TextChannel, preloadChannel: Channel does not have a guildId");
    nO.A.preload(n, t.id);
}
let l2 = F(
        class extends iy {
            handleContextMenu = (e) => {
                let { channel: t } = this.props,
                    i = O.A.getGuild(t.getGuildId());
                null != i &&
                    (0, tl.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e(926132),
                            n.e(603998),
                            n.e(309004),
                            n.e(412255),
                            n.e(63340),
                            n.e(430997),
                            n.e(379995),
                            n.e(544058),
                            n.e(715669),
                        ]).then(n.bind(n, 313140));
                        return (n) => (0, r.jsx)(e, { ...n, channel: t, guild: i });
                    });
            };
            handleClick = (e) => {
                let t = e.getGuildId();
                if (null == t) throw Error("TextChannel, transitionTo: Channel does not have a guildId");
                (0, eu.pX)(H.BVt.CHANNEL(t, e.id), {
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
                        className: eX()(this.getClassName(), { [ep.r9]: this.isDisabled() }),
                        "data-dnd-name": (0, t4.m1)(e, lv.default, lH.A),
                        children: (0, r.jsxs)(nq.Ay, {
                            className: ep.Ki,
                            channel: e,
                            selected: t,
                            onClick: this.handleClick,
                            onMouseDown: l6,
                            onContextMenu: this.handleContextMenu,
                            connectDragPreview: s ? l : null,
                            "aria-label": (0, lf.Ay)({ channel: e }),
                            resolvedUnreadSetting: ie.e.ONLY_MENTIONS,
                            children: [this.renderInviteButton(), this.renderEditButton()],
                        }),
                    });
                return s ? n(i(a)) : a;
            }
        },
    ),
    l5 = a.memo(function (e) {
        let { channel: t, guild: n, disableSorting: i } = e,
            l = (0, h.cf)([U.A, P.A], () => {
                let e = U.A.getChannel(t.parent_id);
                return {
                    canManageChannel: P.A.can(H.xBc.MANAGE_CHANNELS, t),
                    canReorderChannel:
                        !0 !== i && null != e ? P.A.can(H.xBc.MANAGE_CHANNELS, e) : P.A.can(H.xBc.MANAGE_CHANNELS, n),
                };
            }),
            s = (0, lA.BX)("StoreChannel");
        return (0, r.jsx)(l2, { ...l, ...e, shouldEnlargeTargets: s });
    });
var l7 = n(811024),
    l4 = n(323073),
    l8 = n(911040);
function se(e) {
    if (null == e) return null;
    switch (e.type) {
        case "embedded-activities":
        case "event":
            return { subtitle: e.name };
        case "go-live":
            return { subtitle: eA.intl.string(eA.t.Pa817q) };
    }
    return null;
}
var st = n(967165),
    sn = n(730602),
    si = n(956518),
    sl = n(627363),
    ss = n(982844),
    sr = n(197184),
    sa = n(288254),
    so = n(91242),
    sd = n(165610),
    sc = n(696451),
    su = n(495867),
    sh = n(56059),
    sm = n(163328),
    sg = n(778712),
    sA = n(730134),
    sf = n(707539),
    sp = n(486020),
    sC = n(98098);
function sE(e) {
    let { channel: t } = e,
        i = (0, h.yK)([lX.A, nD.Ay, P.A], () => {
            let e = lX.A.getActiveJoinedRelevantThreadsForParent(t.guild_id, t.id);
            return d()(lX.A.getActiveJoinedThreadsForParent(t.guild_id, t.id))
                .values()
                .map((e) => e.channel)
                .concat(d().values(lX.A.getActiveUnjoinedThreadsForParent(t.guild_id, t.id)))
                .filter((t) => !(t.id in e) && P.A.can(H.xBc.VIEW_CHANNEL, t))
                .sort((e, t) => {
                    let n = nD.Ay.lastMessageId(e.id),
                        i = nD.Ay.lastMessageId(t.id);
                    return tS.default.compare(n, i);
                })
                .reverse()
                .value();
        }),
        l = t.isForumLikeChannel() ? 5 : 3,
        s = t.isForumLikeChannel() ? sh.b : sm.y;
    return (
        a.useEffect(() => {
            (0, sf.TE)();
        }, []),
        (0, r.jsxs)("div", {
            className: sC.SW,
            children: [
                (0, r.jsx)(ti.E, {
                    variant: "body-sm/medium",
                    color: "text-muted",
                    className: sC.DD,
                    children: t.isForumLikeChannel() ? eA.intl.string(eA.t.ioVdO2) : eA.intl.string(eA.t.VNYs2v),
                }),
                (0, r.jsxs)("div", {
                    className: sC.p_,
                    children: [
                        i
                            .slice(0, t.isForumLikeChannel() ? i.length : l)
                            .map((e) => (0, r.jsx)(sx, { thread: e }, e.id))
                            .filter((e) => a.isValidElement(e))
                            .slice(0, l),
                        (0, r.jsxs)(es.D, {
                            className: sC.nM,
                            onClick: function () {
                                t.isForumLikeChannel()
                                    ? (0, lL.iN)(t.id)
                                    : (0, I.mM)(async () => {
                                          let { default: e } = await Promise.all([
                                              n.e(327744),
                                              n.e(374962),
                                              n.e(592e3),
                                              n.e(524434),
                                              n.e(849162),
                                              n.e(927517),
                                              n.e(552705),
                                              n.e(481647),
                                              n.e(749248),
                                              n.e(704434),
                                              n.e(900361),
                                              n.e(139970),
                                              n.e(179049),
                                              n.e(294857),
                                              n.e(713567),
                                              n.e(444567),
                                              n.e(695170),
                                              n.e(25572),
                                              n.e(895851),
                                              n.e(258528),
                                              n.e(65225),
                                          ]).then(n.bind(n, 126768));
                                          return (n) => (0, r.jsx)(e, { channel: t, ...n });
                                      });
                            },
                            children: [
                                (0, r.jsx)("div", {
                                    className: sC.R4,
                                    children: (0, r.jsx)(s, { size: "custom", className: sC.Kk }),
                                }),
                                (0, r.jsx)("div", {
                                    className: sC.Pf,
                                    children: (0, r.jsx)(ti.E, {
                                        variant: "body-sm/normal",
                                        color: "none",
                                        children: eA.intl.string(eA.t["4qdZ93"]),
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
function sx(e) {
    let { thread: t } = e,
        n = (0, h.bG)([lv.default], () => lv.default.getUser(t.ownerId)),
        i = (0, sf.JO)(t);
    return (0, r.jsxs)(es.D, {
        className: sC.nM,
        onClick: function (e) {
            (0, nk.JA)(t, t.isForumPost() ? e.shiftKey : !e.shiftKey, nW.H9.POPOUT);
        },
        children: [
            (0, r.jsx)("div", {
                className: sC.R4,
                children:
                    null == n
                        ? (0, r.jsx)("img", {
                              className: sC.my,
                              src: sp.Ay.getDefaultAvatarURL(void 0, void 0),
                              alt: "",
                          })
                        : (0, r.jsx)(sA.A, { className: sC.my, user: n, size: sg._3.SIZE_16 }),
            }),
            (0, r.jsxs)("div", {
                className: sC.Pf,
                children: [
                    (0, r.jsx)(ti.E, { className: sC.UU, variant: "body-sm/normal", color: "none", children: t.name }),
                    (0, r.jsx)(ti.E, { variant: "body-sm/normal", color: "text-muted", children: "\u2022" }),
                    (0, r.jsx)(ti.E, {
                        className: sC.vE,
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: (0, sf.aK)(i),
                    }),
                ],
            }),
        ],
    });
}
var sN = n(70688),
    s_ = n(947162);
function sS(e) {
    let { frameId: t } = e;
    return (0, r.jsx)(el.m, {
        asContainer: !0,
        text: eA.intl.string(eA.t.VkMnR2),
        children: (0, r.jsx)(es.D, {
            className: ep.Xs,
            onClick: () => (0, s_.A)(t),
            "aria-label": eA.intl.string(eA.t.VkMnR2),
            children: (0, r.jsx)(sN.DoorExitIcon, { size: "xs", color: "currentColor", className: ep.gE }),
        }),
    });
}
var sI = n(664699);
function sb(e) {
    let { channel: t, isSuggestedSection: n } = e;
    return (0, r.jsx)(el.m, {
        asContainer: !0,
        text: eA.intl.string(eA.t.ZXxLQg),
        children: (0, r.jsx)(es.D, {
            className: ep.Xs,
            onClick: () => (0, sI.A)(t, n ? lT.A.CHANNEL_LIST_SUGGESTED_SECTION : void 0),
            "aria-label": eA.intl.string(eA.t.ZXxLQg),
            children: (0, r.jsx)(nP.ChatIcon, { size: "xs", color: "currentColor", className: ep.gE }),
        }),
    });
}
var sj = n(95362),
    sv = n(302959),
    sG = n(961272),
    sy = n(913659),
    sR = n(427262),
    sM = n(641635);
let sT = nC.DN.SIZE_24;
function sL(e) {
    let { activity: t, embeddedApp: n } = e,
        i = t?.assets,
        l = t?.application_id;
    if (null == i || (null == i.large_image && null == i.small_image)) {
        let e = sp.Ay.getApplicationIconURL({ id: n.application.id, icon: n.application.icon }),
            t = n.application.name;
        return (0, r.jsx)(el.m, {
            text: t,
            position: "top",
            asContainer: !0,
            children: (0, r.jsx)("img", { alt: t, src: e, className: sM.P3 }),
        });
    }
    let s = i.large_image ?? i.small_image;
    return null != s
        ? (0, r.jsx)("img", { alt: i.large_text ?? "", src: (0, sy.uD)(l, s, [128, 128]), className: sM.P3 })
        : null;
}
function sU(e) {
    let { activity: t, embeddedApp: n, channel: i } = e,
        l = Array.from(n.embeddedActivity.userIds),
        s = (0, h.yK)([lv.default], () => l.map((e) => lv.default.getUser(e)).filter(tN.Vq));
    return (0, r.jsx)("div", {
        className: sM.ec,
        children: (0, r.jsxs)("div", {
            className: sM.Wh,
            children: [
                (0, r.jsx)(sL, { activity: t, embeddedApp: n }),
                (0, r.jsxs)("div", {
                    className: sM.X0,
                    children: [
                        (0, r.jsx)(i0.D, {
                            variant: "heading-xs/semibold",
                            color: "text-strong",
                            className: sM.wx,
                            lineClamp: 1,
                            children: n.application.name,
                        }),
                        t?.details != null &&
                            "" !== t.details &&
                            (0, r.jsx)(ti.E, {
                                variant: "body-xs/normal",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.details,
                            }),
                        t?.state != null &&
                            "" !== t.state &&
                            (0, r.jsx)(ti.E, {
                                variant: "body-xs/normal",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.state,
                            }),
                        l.length > 0 &&
                            (0, r.jsx)(nC.Ay, {
                                className: sM.TN,
                                guildId: i.guild_id,
                                users: s,
                                size: sT,
                                max: 7,
                                renderUser: function (e) {
                                    if (null == e || e === nC.mt) return null;
                                    let t = sR.Ay.getName(e);
                                    return (0, r.jsx)(
                                        el.m,
                                        {
                                            asContainer: !0,
                                            text: t,
                                            position: "bottom",
                                            children: (0, r.jsx)("img", {
                                                src: e.getAvatarURL(i.guild_id, sT),
                                                alt: t,
                                                className: sM.my,
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
var sD = n(584960);
function sO(e) {
    let { channel: t, presenceActivity: n, embeddedApp: i, onAction: l } = e,
        s = Array.from(i.embeddedActivity.userIds),
        a = (0, h.bG)([lv.default], () => lv.default.getUser(s[0]));
    return null == a
        ? null
        : (0, r.jsxs)("div", {
              className: sD.Eb,
              children: [
                  (0, r.jsx)("div", {
                      className: sD.Il,
                      children: (0, r.jsx)(sU, { activity: n, embeddedApp: i, channel: t }),
                  }),
                  (0, r.jsx)("div", {
                      className: sD.M4,
                      children: (0, r.jsx)(sG.A, {
                          type: sv.M.VOICE_CHANNEL,
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
var sP = n(713654),
    sw = n(744399);
function sV(e) {
    let { channel: t } = e,
        n = (0, h.bG)([O.A], () => O.A.getGuild(t.guild_id)),
        i = (0, t4.Ay)(t),
        l = (0, sP.gU)(t, n);
    return null == l
        ? null
        : (0, r.jsxs)("div", {
              className: sw.hY,
              children: [
                  (0, r.jsx)(l, { className: sw.p }),
                  (0, r.jsx)(ti.E, {
                      variant: "body-md/semibold",
                      color: "interactive-text-default",
                      className: sw.HA,
                      children: i,
                  }),
              ],
          });
}
var sH = n(220650);
function sk(e) {
    let { channel: t, onAction: n } = e,
        i = (0, lk.Ay)(t),
        l = Array.from((0, lk.Rz)(i).values());
    return 0 === l.length
        ? null
        : (0, r.jsxs)(sj.Ip, {
              className: sH.kL,
              children: [
                  (0, r.jsx)("div", { className: sH.oT, children: (0, r.jsx)(sV, { channel: t }) }),
                  (0, r.jsx)("div", { className: sH.zN }),
                  l.map((e, i) =>
                      (0, r.jsx)(
                          sO,
                          { embeddedApp: e, presenceActivity: e.presenceActivity ?? void 0, channel: t, onAction: n },
                          i,
                      ),
                  ),
              ],
          });
}
let sB = F(
    class extends iy {
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
                (i = t?.type === H.rbe.GUILD_APP ? (0, sd.HD)(t) : null),
                null == t ||
                    null == n ||
                    null == i ||
                    null != so.A.getFrame((0, sd.VA)(n, i)) ||
                    !P.A.can(H.xBc.VIEW_CHANNEL, t) ||
                    (0, l4.qR)(t) ||
                    (0, sa.BV)(t) ||
                    (null != (0, si.Ay)(n) &&
                        ((0, sn.M)(n, (0, sr.A)(i), i.type),
                        (0, ss.A)(n).catch(H.tEg),
                        sl.YY.fetchMany([n]).catch(H.tEg))));
        };
        renderPopout = (e) => {
            let { channel: t, sorting: n, embeddedApps: i, channelIsContentGated: l } = this.props,
                { shouldShowActivities: s } = this.state;
            return t.isModeratorReportChannel() || l
                ? null
                : null != i && i.length > 0 && s && !n
                  ? (0, r.jsx)(sk, { onAction: this.handleActivitiesPopoutClose, channel: t })
                  : (0, r.jsx)(sE, { ...e, channel: this.props.channel });
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
                return void (0, tl.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e(926132),
                        n.e(893190),
                        n.e(393336),
                        n.e(146652),
                        n.e(391763),
                        n.e(491001),
                        n.e(947502),
                        n.e(965789),
                        n.e(150773),
                        n.e(368530),
                        n.e(566378),
                        n.e(17244),
                        n.e(153416),
                        n.e(760200),
                    ]).then(n.bind(n, 4027));
                    return (n) => (0, r.jsx)(e, { ...n, channel: t, selected: !0 });
                });
            if (t.type === H.rbe.DM) {
                let i = lv.default.getUser(t.getRecipientId());
                null != i &&
                    (0, tl.L3)(e, async () => {
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
                            n.e(516054),
                            n.e(17244),
                            n.e(298199),
                            n.e(861649),
                            n.e(439778),
                        ]).then(n.bind(n, 385913));
                        return (n) => (0, r.jsx)(e, { ...n, user: i, channel: t, showModalItems: !1 });
                    });
                return;
            }
            if (t.isModeratorReportChannel())
                return void (0, tl.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e(926132),
                        n.e(393336),
                        n.e(146652),
                        n.e(391763),
                        n.e(491001),
                        n.e(676156),
                        n.e(947502),
                        n.e(343266),
                        n.e(550033),
                        n.e(430997),
                        n.e(379995),
                        n.e(578580),
                    ]).then(n.bind(n, 907647));
                    return (n) => (0, r.jsx)(e, { ...n, channel: t });
                });
            let i = O.A.getGuild(t.getGuildId());
            null != i &&
                (0, tl.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e(926132),
                        n.e(993103),
                        n.e(893190),
                        n.e(393336),
                        n.e(146652),
                        n.e(391763),
                        n.e(491001),
                        n.e(676156),
                        n.e(474610),
                        n.e(947502),
                        n.e(603998),
                        n.e(343266),
                        n.e(550033),
                        n.e(965789),
                        n.e(150773),
                        n.e(309004),
                        n.e(412255),
                        n.e(63340),
                        n.e(430997),
                        n.e(356675),
                        n.e(379995),
                        n.e(544058),
                        n.e(697367),
                        n.e(591377),
                        n.e(35723),
                        n.e(566378),
                        n.e(256372),
                        n.e(29542),
                        n.e(588251),
                        n.e(248804),
                        n.e(638114),
                        n.e(122574),
                        n.e(611036),
                    ]).then(n.bind(n, 823255));
                    return (n) => (0, r.jsx)(e, { ...n, channel: t, guild: i });
                });
        };
        renderChannelInfo() {
            let { channelInfo: e } = this.props;
            return null == e ? null : (0, r.jsx)("div", { className: ep.yW, children: e });
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
                v = se(A),
                G = x ? { source: lT.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
                y = (0, lf.Ay)({
                    channel: e,
                    unread: l,
                    mentionCount: o,
                    isSubscriptionGated: m,
                    embeddedActivitiesCount: p?.length,
                }),
                R = (0, r.jsxs)("li", {
                    className: eX()(this.getClassName(), { [ep.r9]: this.isDisabled(), [ep.wH]: n }),
                    "data-dnd-name": (0, t4.m1)(e, lv.default, lH.A),
                    onMouseEnter: a || j ? this.handleMouseEnter : void 0,
                    onMouseLeave: a || j ? this.handleMouseLeave : void 0,
                    children: [
                        (0, r.jsx)(lh.Y, {
                            targetElementRef: this.channelItemRef,
                            position: "right",
                            renderPopout: this.renderPopout,
                            onRequestClose: this.handleClosePopout,
                            spacing: 17,
                            shouldShow:
                                (a && this.state.shouldShowThreadsPopout) || (j && this.state.shouldShowActivities),
                            children: () =>
                                (0, r.jsxs)(nq.Ay, {
                                    ref: this.channelItemRef,
                                    className: ep.Ki,
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
                                    iconClassName: null != S ? ep.Gj : void 0,
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
                                                    null != _ ? (0, r.jsx)(sS, { frameId: _ }) : null,
                                                    this.renderChannelInfo(),
                                                    e.type === H.rbe.GUILD_APP
                                                        ? (0, r.jsx)(sb, { channel: e, isSuggestedSection: x })
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
                            : (0, r.jsx)(st.A, {
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
    },
);
function sF(e) {
    let { channel: t, guild: n, disableSorting: i, isFavoriteCategory: l, muted: s, selected: a } = e,
        { hasActiveThreads: o, hasMoreActiveThreads: d } = (0, nH.NR)(t),
        c = (0, h.cf)([nD.Ay], () => ({
            unread: nD.Ay.hasUnread(t.id),
            ackMessageId: nD.Ay.ackMessageId(t.id),
            isLowImportanceMention: nD.Ay.getIsMentionLowImportance(t.id),
        })),
        u = (0, h.bG)([V.Ay], () => V.Ay.resolveUnreadSetting(t)),
        m = (0, h.cf)([U.A, P.A], () => {
            let e = U.A.getChannel(t.parent_id);
            return {
                canManageChannel: P.A.can(H.xBc.MANAGE_CHANNELS, t),
                canReorderChannel:
                    !0 !== i &&
                    ((0, M.ai)(n.id) ||
                        (null != e ? P.A.can(H.xBc.MANAGE_CHANNELS, e) : P.A.can(H.xBc.MANAGE_CHANNELS, n))),
            };
        }),
        g = (0, h.bG)([iq.A], () => iq.A.shouldIndicateNewChannel(n.id, t.id)),
        { needSubscriptionToAccess: A, isSubscriptionGated: f } = (0, nV.A)(t.id),
        p = (0, h.bG)([V.Ay], () => V.Ay.isFavorite(n.id, t.id)),
        C = (0, l4.ni)(t),
        E = (0, l7.Gp)(t.id),
        x = l0({
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
        N = (0, lk.Ay)(t),
        _ = (0, h.bG)([su.A, sc.Ay], () => su.A.getChannelId() !== t.id && sc.Ay.isCurrentUserGuest(t.getGuildId())),
        S = (0, lA.BX)("ConnectedTextChannel"),
        { frameId: I, runningLabel: b } = (0, l8.A)(t);
    return _
        ? null
        : (0, r.jsx)(sB, {
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
var sW = n(900797),
    sz = n(636585),
    sK = n(531685),
    sY =
        (((s = {}).HIDDEN = "hidden"),
        (s.UNREAD = "unread"),
        (s.MENTIONS = "mentions"),
        (s.VOICE_CHANNELS = "voice-channels"),
        s);
let sX = { mode: "hidden", mentionCount: 0, targetChannelId: null },
    sJ = { topBar: sX, bottomBar: sX },
    sq = {},
    sZ = {};
function s$(e) {
    let t = U.A.getChannel(e);
    return (
        !(null == t || null == t.getGuildId() || t.isGuildVocal()) &&
        !(t.isThread() ? nX.A.isMuted(t.id) : V.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, tC.Y)(t)
    );
}
function sQ(e) {
    let t = U.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let i = V.Ay.isGuildCollapsed(n),
        l = V.Ay.isChannelMuted(n, t.id);
    return (!i || !l) && nD.Ay.getMentionCount(e) > 0;
}
function s0(e) {
    return (
        !V.Ay.isChannelMuted(e.guild_id, e.id) &&
        (e.isGuildStageVoice()
            ? tI.A.getMutableParticipants(e.id, tb.ip.SPEAKER).length > 0
            : tx.Ay.getVoiceStatesForChannel(e).length > 0)
    );
}
function s1(e) {
    let { guildChannels: t } = tU.A.getGuildWithoutChangingGuildActionRows(e),
        n = t.getChannels(sZ[e] ?? []);
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
            ((s$(t.id) || d().some(t.threadIds, s$)) && (o = !1),
            (sQ(t.id) || d().some(t.threadIds, sQ)) && (a = !1),
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
            ((s$(t.id) || d().some(t.threadIds, s$)) && (null == l && (l = t.id), (p = !0)),
                (sQ(t.id) || d().some(t.threadIds, sQ)) &&
                    (null == i && (i = t.id),
                    (f += nD.Ay.getMentionCount(t.id)),
                    (f += d().sumBy(t.threadIds, nD.Ay.getMentionCount))));
        }
    if (o || a)
        for (let e = 0; e < A.length; e++) {
            let t = A[e];
            if (!o && !a) break;
            ((s$(t.id) || d().some(t.threadIds, s$)) && (null == r && (r = t.id), (E = !0)),
                (sQ(t.id) || d().some(t.threadIds, sQ)) &&
                    (null == s && (s = t.id),
                    (C += nD.Ay.getMentionCount(t.id)),
                    (C += d().sumBy(t.threadIds, nD.Ay.getMentionCount))));
        }
    let x = null,
        N = null,
        _ = u?.getChannelRecords() ?? [];
    (a && C > 0
        ? (x = { mode: "mentions", mentionCount: C, targetChannelId: s })
        : !c && d().some(_, s0)
          ? (x = { mode: "voice-channels", mentionCount: 0, targetChannelId: null })
          : o && E && (x = { mode: "unread", mentionCount: 0, targetChannelId: r }),
        a && f > 0
            ? (N = { mode: "mentions", mentionCount: f, targetChannelId: i })
            : o && p && (N = { mode: "unread", mentionCount: 0, targetChannelId: l }));
    let S = null != N && (null == x || ("mentions" !== x.mode && "mentions" === N.mode)),
        I = null != x && ("mentions" === x.mode || !S);
    return ((sq[e] = { topBar: S ? (N ?? sX) : sX, bottomBar: I ? (x ?? sX) : sX }), !0);
}
let s3 = d().throttle(s1, 200);
function s9(e) {
    let { guildId: t } = e,
        n = O.A.getGuild(t);
    return null != n && !!n.features.has(H.GuildFeatures.COMMUNITY) && s3(t);
}
function s6(e) {
    let { id: t } = e,
        n = U.A.getChannel(t);
    if (null == n) return !1;
    let i = O.A.getGuild(n.guild_id);
    return null != i && !!i.features.has(H.GuildFeatures.COMMUNITY) && s3(n.guild_id);
}
function s2(e) {
    let { channel: t } = e,
        n = U.A.getChannel(t.id);
    if (null == n) return !1;
    let i = O.A.getGuild(t.guild_id);
    return null != i && !!i.features.has(H.GuildFeatures.COMMUNITY) && s3(n.guild_id);
}
function s5(e) {
    let { channelId: t } = e,
        n = U.A.getChannel(t);
    if (null == n) return !1;
    let i = O.A.getGuild(n.guild_id);
    return (
        null != i && !!i.features.has(H.GuildFeatures.COMMUNITY) && w.A.getGuildId() === n.guild_id && s3(n.guild_id)
    );
}
function s7(e) {
    let { guildId: t } = e;
    return null != t && s3(t);
}
class s4 extends h.Ay.Store {
    static displayName = "ChannelListUnreadsStore";
    initialize() {
        this.waitFor(tU.A, U.A, O.A, nX.A, nD.Ay, w.A, tx.Ay, tI.A, V.Ay, lv.default);
    }
    getUnreadStateForGuildId(e) {
        return sq[e] ?? sJ;
    }
}
let s8 = new s4(tr.h, {
    UPDATE_CHANNEL_LIST_DIMENSIONS: function (e) {
        let { guildId: t, channelIds: n } = e,
            i = O.A.getGuild(t);
        return (
            null != i &&
            !!i.features.has(H.GuildFeatures.COMMUNITY) &&
            null != n &&
            !d().isEqual(sZ[t], n) &&
            ((sZ[t] = n), s1(t))
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
                .filter(tN.Vq)
                .uniq()
                .forEach((e) => {
                    let t = O.A.getGuild(e);
                    null != t && t.features.has(H.GuildFeatures.COMMUNITY) && s3(e) && (n = !0);
                }),
            n
        );
    },
    CHANNEL_ACK: s5,
    CHANNEL_DELETE: s2,
    CHANNEL_LOCAL_ACK: s5,
    MESSAGE_ACK: s5,
    MESSAGE_CREATE: s5,
    MESSAGE_DELETE_BULK: s5,
    MESSAGE_DELETE: s5,
    PASSIVE_UPDATE_V2: function (e) {
        let t = O.A.getGuild(e.guildId);
        return !!(e.channels.length > 0 && null != t && t.features.has(H.GuildFeatures.COMMUNITY)) && s3(e.guildId);
    },
    RESORT_THREADS: s5,
    THREAD_CREATE: s2,
    THREAD_DELETE: s2,
    THREAD_LIST_SYNC: s9,
    THREAD_MEMBER_UPDATE: s6,
    THREAD_MEMBERS_UPDATE: s6,
    THREAD_UPDATE: s2,
    BULK_CLEAR_RECENTS: s9,
    CATEGORY_COLLAPSE_ALL: s9,
    CATEGORY_EXPAND_ALL: s9,
    CURRENT_USER_UPDATE: function () {
        let e = lv.default.getCurrentUser()?.nsfwAllowed;
        if (e === i) return !1;
        i = e;
        let t = w.A.getGuildId();
        if (null == t) return !1;
        let n = O.A.getGuild(t);
        return null != n && !!n.features.has(H.GuildFeatures.COMMUNITY) && s3(t);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = w.A.getGuildId();
        if (null == n || !new Set(t.map((e) => e.guildId)).has(n)) return !1;
        let i = sq[n];
        return null != i && "voice-channels" === i.bottomBar.mode && s3(n);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: s7,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: s7,
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: t } = e;
        for (let e of t) null != e.guild_id && s3(e.guild_id);
    },
    USER_GUILD_SETTINGS_GUILD_UPDATE: s7,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: s7,
});
var re = n(350536);
let rt = { friction: 30, tension: 300 };
function rn(e) {
    let { guildChannels: t, jumpToVoiceChannels: n } = e,
        i = t.getCategoryFromSection(t.voiceChannelsSectionNumber),
        l = (0, h.bG)([tx.Ay], () => tx.Ay.getVoiceStates(t.id), [t.id]),
        s = a.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), n());
            },
            [n],
        ),
        o = i?.getChannelRecords() ?? [],
        d = (0, nN.fK)({ channels: o, selectedChannelId: null, selectedVoiceChannelId: null, voiceStates: l });
    return (0, r.jsxs)(es.D, {
        className: eX()(re.M0, re.OF),
        onClick: s,
        children: [
            (0, r.jsx)(t5.H, { size: "custom", className: re.Gs, width: 14, height: 14, color: "currentColor" }),
            (0, r.jsx)(ti.E, {
                variant: "body-xs/semibold",
                className: re.pM,
                children: eA.intl.format(eA.t["fDlr+F"], { count: d.length }),
            }),
            (0, r.jsx)(sz.A, {
                guildId: t.id,
                className: re.J$,
                users: d.slice(0, 4),
                renderMoreUsers: () => null,
                max: 4,
                size: sg._3.SIZE_16,
            }),
        ],
    });
}
function ri(e) {
    let { position: t, guildChannels: n, guildChannelsVersion: i, jumpToVoiceChannels: l, jumpToChannel: s } = e,
        { bottomBar: o, topBar: d } = (0, h.cf)([s8], () => s8.getUnreadStateForGuildId(n.id)),
        c = (0, h.bG)([sK.A], () => sK.A.isFocused()),
        { mode: u, mentionCount: m, targetChannelId: g } = "bottom" === t ? o : d,
        A = u === sY.HIDDEN,
        f = (0, tn.z)(
            {
                to: { transform: A ? ("bottom" === t ? "translateY(180%)" : "translateY(-180%)") : "translateY(0%)" },
                config: rt,
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
        className: eX()(re.kL, { [re.Mn]: "top" === t, [re.sQ]: "bottom" === t }),
        children: (0, r.jsx)(tt.animated.div, {
            className: re.pK,
            style: f,
            "aria-hidden": A,
            children: (function () {
                switch (u) {
                    case sY.HIDDEN:
                        return (0, r.jsx)("div", { className: eX()(re.M0, re.Te) });
                    case sY.UNREAD:
                        return (0, r.jsxs)(es.D, {
                            className: re.M0,
                            onClick: p,
                            children: [
                                "bottom" === t
                                    ? (0, r.jsx)(t6.a, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: re.z_,
                                          height: 14,
                                          width: 14,
                                      })
                                    : (0, r.jsx)(sW.t, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: re.z_,
                                          height: 14,
                                          width: 14,
                                      }),
                                (0, r.jsx)(ti.E, {
                                    variant: "body-xs/semibold",
                                    color: "interactive-text-default",
                                    className: re.pM,
                                    children: eA.intl.string(eA.t.FCRiT3),
                                }),
                            ],
                        });
                    case sY.MENTIONS:
                        return (0, r.jsx)(es.D, {
                            className: eX()(re.M0, re.vU),
                            onClick: p,
                            children: (0, r.jsx)(ti.E, {
                                variant: "body-xs/semibold",
                                color: "badge-primary-text",
                                className: re.pM,
                                children: eA.intl.format(eA.t.EQcLyp, { count: m }),
                            }),
                        });
                    case sY.VOICE_CHANNELS:
                        return (0, r.jsx)(rn, { jumpToVoiceChannels: l, guildChannels: n, guildChannelsVersion: i });
                    default:
                        return;
                }
            })(),
        }),
    });
}
var rl = n(310953),
    rs = n(173860);
function rr(e) {
    let t = U.A.getChannel(e);
    return (
        null != t &&
        null != t.getGuildId() &&
        !(t.isThread() ? nX.A.isMuted(t.id) : V.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, tC.Y)(t)
    );
}
function ra(e) {
    let t = U.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let i = V.Ay.isGuildCollapsed(n),
        l = V.Ay.isChannelMuted(n, t.id);
    return (!i || !l) && nD.Ay.getMentionCount(e) > 0;
}
function ro(e) {
    let { guildId: t, guildChannels: n, guildChannelsVersion: i, ref: l, ...s } = e,
        a = (0, rl.W)(t, n, i, { withVoiceChannels: !1 }, { ignoreRecents: !0 }),
        o = (0, h.bG)([sK.A], () => sK.A.isFocused());
    return (0, r.jsx)(rs.A, { ref: l, ...s, isUnread: rr, isMentioned: ra, items: a, animate: o });
}
var rd = n(81466);
function rc(e) {
    let { guild: t, selected: i } = e,
        { hasUnread: l, mentionCount: s } = (0, h.cf)(
            [nD.Ay],
            () => ({
                hasUnread: nD.Ay.hasUnread(t.id, ie.P.GUILD_EVENT),
                mentionCount: nD.Ay.getMentionCount(t.id, ie.P.GUILD_EVENT),
            }),
            [t.id],
        ),
        a = (0, h.bG)([V.Ay], () => V.Ay.isMuteScheduledEventsEnabled(t.id)),
        o = (0, tq.Ay)(t.id),
        d = o.length > 0 ? eA.intl.formatToPlainString(eA.t.IBdqSu, { number: o.length }) : eA.intl.string(eA.t.tlopTM);
    return (0, r.jsx)(ec.G, {
        id: `upcoming-events-${t.id}`,
        renderIcon: (e) => (0, r.jsx)(rd.CalendarIcon, { size: "md", color: "currentColor", className: e }),
        text: d,
        selected: i,
        onClick: async function () {
            await (0, I.mM)(async () => {
                let { default: e } = await Promise.all([
                    n.e(670870),
                    n.e(684231),
                    n.e(570690),
                    n.e(886631),
                    n.e(884841),
                    n.e(998835),
                    n.e(694303),
                    n.e(147626),
                    n.e(256373),
                    n.e(908170),
                    n.e(449347),
                    n.e(853934),
                    n.e(402076),
                    n.e(469647),
                    n.e(798354),
                    n.e(18181),
                    n.e(675506),
                ]).then(n.bind(n, 568036));
                return (n) => (0, r.jsx)(e, { ...n, guildId: t.id });
            });
        },
        onContextMenu: function (e) {
            (0, tl.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e(426386), n.e(571090)]).then(n.bind(n, 831721));
                return (n) => (0, r.jsx)(e, { ...n, guildId: t.id });
            });
        },
        showUnread: l && !a,
        trailing: !a && s > 0 ? (0, r.jsx)(eI.hV, { className: n2.Do, disableColor: !0, count: s }) : null,
    });
}
var ru = n(350835),
    rh = n(845056),
    rm = n(765379),
    rg = n(271683),
    rA = n(725613),
    rf = n(857253),
    rp = n(360729),
    rC = n(22231),
    rE = n(241326),
    rx = n(750943),
    rN = n(743674),
    r_ = n(888697),
    rS = n(26741),
    rI = n(493819),
    rb = n(722884),
    rj = n(335916),
    rv = n(176431);
function rG(e) {
    let { channel: t, imageUrl: i, animatedUrl: l, bannerHash: s, canModifyHangout: o } = e,
        d = (0, rN.S)(i),
        c = (0, eB.je)(t),
        u = (0, rS.P9)({ guildId: t.guild_id, channelId: t.id, bannerHash: s }),
        h = a.useCallback(() => {
            ((0, rS.J_)({ guildId: t.guild_id, channelId: t.id }), (0, rb.A)({ channel: t }));
        }, [t]),
        m = a.useCallback(() => {
            ((0, rS.nK)({ guildId: t.guild_id, channelId: t.id }), (0, r_.e2)(t.id));
        }, [t.guild_id, t.id]),
        g = a.useCallback(
            (e) => {
                c
                    ? (0, tl.L3)(e, async () => {
                          let { default: e } = await n.e(555558).then(n.bind(n, 316421));
                          return (n) => (0, r.jsx)(e, { ...n, channel: t });
                      })
                    : e.preventDefault();
            },
            [t, c],
        );
    return (0, r.jsxs)("div", {
        ref: u,
        className: rv.rs,
        onContextMenu: g,
        children: [
            (0, r.jsx)("div", {
                className: rv.ZS,
                style: null != d ? { backgroundColor: d } : void 0,
                children: (0, r.jsx)(rI.A, { imageUrl: i, animatedUrl: l, className: rv.Sl }),
            }),
            o
                ? (0, r.jsxs)("div", {
                      className: rv.n_,
                      children: [
                          (0, r.jsx)(el.m, {
                              text: eA.intl.string(rj.default.XJ4UpB),
                              children: (0, r.jsx)(es.D, {
                                  className: rv.HF,
                                  onClick: h,
                                  children: (0, r.jsx)(rC.PencilIcon, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                          (0, r.jsx)(el.m, {
                              text: eA.intl.string(rj.default.XV4qT6),
                              children: (0, r.jsx)(es.D, {
                                  className: rv.HF,
                                  onClick: m,
                                  children: (0, r.jsx)(rE.TrashIcon, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function ry(e) {
    let { channel: t } = e,
        n = (0, rS.dX)({ guildId: t.guild_id, channelId: t.id }),
        i = a.useCallback(() => {
            ((0, rS.J_)({ guildId: t.guild_id, channelId: t.id }), (0, rb.A)({ channel: t }));
        }, [t]);
    return (0, r.jsx)("div", {
        ref: n,
        className: rv._o,
        children: (0, r.jsxs)(es.D, {
            className: rv.hH,
            onClick: i,
            children: [
                (0, r.jsx)(rx.X, { size: "xs", color: "currentColor" }),
                (0, r.jsx)(ti.E, {
                    variant: "body-sm/medium",
                    color: "currentColor",
                    children: eA.intl.string(rj.default.NGcIOF),
                }),
            ],
        }),
    });
}
function rR(e) {
    let { channel: t, isConnected: n } = e,
        { enableHangoutWindow: i } = (0, ek.Dm)({ guildId: t.guild_id, location: "HangoutWindow" }),
        l = (0, eB.W6)(t),
        s = n && l,
        o = t.voiceHangout,
        d = o?.banner_hash,
        c = a.useMemo(() => {
            if (null == d || null == t.guild_id) return null;
            let e = (0, eB.Sq)({ guildId: t.guild_id, bannerHash: d });
            return null == e ? null : { bannerHash: d, ...e };
        }, [t.guild_id, d]);
    return i
        ? null != c
            ? (0, r.jsx)(rG, {
                  channel: t,
                  imageUrl: c.imageUrl,
                  animatedUrl: c.animatedUrl,
                  bannerHash: c.bannerHash,
                  canModifyHangout: s,
              })
            : s
              ? (0, r.jsx)(ry, { channel: t })
              : null
        : null;
}
var rM = n(290863),
    rT = n(894768),
    rL = n(532622),
    rU = n(882840),
    rD = n(208971),
    rO = n(46054),
    rP = n(569381),
    rw = n(165648);
function rV(e) {
    let { channel: t, connected: n, hovered: i, subtitle: l, disableTooltips: s = !1, onClick: o } = e,
        d = (0, rD.G)((0, rU.l)(t)),
        { enableHangoutWindow: c } = (0, ek.Dm)({ guildId: t.guild_id, location: "VoiceChannelStatus" }),
        u = c && (0, eB.lr)(t),
        h = null != d && d.length > 0,
        m = (0, rL.Ay)(t, !0),
        g = null != l && l.length > 0;
    if (
        (a.useEffect(() => {
            h && lr.default.track(H.HAw.VOICE_CHANNEL_TOPIC_VIEWED, { channel_id: t.id, guild_id: t.guild_id });
        }, [h, t.id, t.guild_id]),
        null == t.guild_id)
    )
        return null;
    let A = eX()(rP.Ui, n && m ? rP.BI : null);
    return h
        ? (0, r.jsx)(es.D, {
              className: A,
              onClick: m ? o : void 0,
              children: (0, r.jsx)(ti.E, {
                  variant: "body-xs/medium",
                  className: eX()(rP.qS, rw.PT),
                  children: (0, r.jsx)(t0.A, {
                      shouldShow: !s,
                      children: rO.A.parseVoiceChannelStatus(d, !0, { channelId: t.id }),
                  }),
              }),
          })
        : n && m && !u && (!g || i)
          ? (0, r.jsxs)(es.D, {
                className: A,
                onClick: o,
                children: [
                    (0, r.jsx)(ti.E, {
                        variant: "body-xs/medium",
                        className: rP.qS,
                        children: eA.intl.string(eA.t.Mgpxiw),
                    }),
                    (0, r.jsx)(rC.PencilIcon, { color: "currentColor", className: rP.rD, size: "xxs" }),
                ],
            })
          : g
            ? (0, r.jsx)(t0.A, { shouldShow: !s, children: l })
            : null;
}
let rH = F(
    (0, lg.F)(
        class extends iy {
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
                (o && lm.A.updateChatOpen(n.id, !0),
                    nw.A.handleVoiceConnect({
                        channel: n,
                        connected: t,
                        needSubscriptionToAccess: l,
                        routeDirectlyToChannel: o || a,
                        locked: e,
                        transitionExtras: r ? { source: lT.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
                    }));
            };
            handleContextMenu = (e) => {
                let { channel: t } = this.props,
                    i = O.A.getGuild(t.getGuildId());
                null != i &&
                    (0, tl.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e(926132),
                            n.e(993103),
                            n.e(893190),
                            n.e(393336),
                            n.e(146652),
                            n.e(391763),
                            n.e(491001),
                            n.e(676156),
                            n.e(474610),
                            n.e(947502),
                            n.e(603998),
                            n.e(343266),
                            n.e(550033),
                            n.e(965789),
                            n.e(150773),
                            n.e(309004),
                            n.e(412255),
                            n.e(63340),
                            n.e(430997),
                            n.e(379995),
                            n.e(544058),
                            n.e(591377),
                            n.e(35723),
                            n.e(566378),
                            n.e(256372),
                            n.e(29542),
                            n.e(419690),
                            n.e(465694),
                            n.e(13107),
                            n.e(248804),
                            n.e(318663),
                            n.e(599990),
                            n.e(293340),
                        ]).then(n.bind(n, 428631));
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
                return (0, nN.Pd)(e, nB.A, O.A);
            }
            getModeClass() {
                let { position: e, sortingPosition: t, isUserOver: n } = this.props;
                if (n) return ep.ZS;
                if (null != t)
                    if (e > t) return ep.mU;
                    else return ep.TR;
                return ep.fx;
            }
            handleClick = () => {
                let { channel: e } = this.props,
                    t = e.getGuildId();
                (null != t && (0, lC.V)(t) && (0, lp.Ze)(t), this.handleVoiceConnect());
            };
            handleVoiceStatusClick = (e) => {
                let { connected: t, channel: n } = this.props;
                t && (e.stopPropagation(), (0, rg.A)({ channel: n }));
            };
            renderSubtitle(e) {
                let { disableTooltips: t } = e,
                    { channel: n, connected: i } = this.props,
                    l = se(this.props.subtitle)?.subtitle,
                    { hovered: s } = this.state;
                return (0, r.jsx)(rV, {
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
                return !(null != n && n.length > 0) || i ? null : (0, r.jsx)(rR, { channel: e, isConnected: t });
            }
            renderPopout = () => {
                let { channel: e } = this.props,
                    { shouldShowGuildVerificationPopout: t } = this.state;
                return t
                    ? (0, r.jsx)(lM, {
                          type: lR.VOICE,
                          guildId: e.guild_id,
                          closePopout: this.closeGuildVerificationPopout,
                      })
                    : null;
            };
            renderOpenChatButton = () => {
                let {
                    channel: e,
                    locked: t,
                    forceShowButtons: n,
                    isSuggestedSection: i,
                    shouldEnlargeTargets: l,
                } = this.props;
                if (!t)
                    return (0, r.jsx)(el.m, {
                        asContainer: !0,
                        text: eA.intl.string(eA.t.ZXxLQg),
                        children: (0, r.jsx)(es.D, {
                            className: eX()(ep.Xs, { [ep.Tf]: n }),
                            onClick: () => {
                                (lm.A.updateChatOpen(e.id, !0),
                                    (0, lL.iN)(e.id, i ? { source: lT.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0));
                            },
                            "aria-label": eA.intl.string(eA.t.ZXxLQg),
                            focusProps: l ? { offset: 2 } : void 0,
                            children: (0, r.jsx)(nP.ChatIcon, { size: "xs", color: "currentColor", className: ep.gE }),
                        }),
                    });
            };
            renderChannelInfo() {
                let { channelInfo: e } = this.props;
                return null == e ? null : (0, r.jsx)("div", { className: ep.yW, children: e });
            }
            getTooltipText = () => {
                let { connected: e } = this.props;
                return this.isFull() && !e ? eA.intl.string(eA.t.rZfiNq) : null;
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
                        className: eX()(this.getModeClass(), { [ep.r9]: this.isDisabled(), [ep.fy]: _ }),
                        "data-dnd-name": (0, t4.m1)(e, lv.default, lH.A),
                        children: [
                            _ &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)("div", { className: ep.UQ }),
                                        (0, r.jsx)("div", { className: ep.l0 }),
                                    ],
                                }),
                            (0, r.jsx)("div", {
                                onMouseEnter: this.handleMouseEnter,
                                onMouseLeave: this.handleMouseLeave,
                                children: (0, r.jsx)(lh.Y, {
                                    targetElementRef: this.channelItemRef,
                                    position: "right",
                                    renderPopout: this.renderPopout,
                                    onRequestClose: this.closeGuildVerificationPopout,
                                    spacing: 17,
                                    shouldShow: b,
                                    children: () =>
                                        (0, r.jsx)(el.m, {
                                            text: j,
                                            children: (0, r.jsxs)(nq.Ay, {
                                                ref: this.channelItemRef,
                                                className: ep.Ki,
                                                disableOverflowTooltip: null != j,
                                                iconClassName: eX()({ [ep.Gj]: A || x || v }),
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
                                                "aria-label": (0, lf.Ay)({
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
                        (G = (0, r.jsx)(nm.A, {
                            childRef: this.ref,
                            tutorialId: "voice-conversations",
                            position: "right",
                            offsetX: -20,
                            children: G,
                        })),
                    G
                );
            }
        },
    ),
);
function rk(e) {
    let {
            guild: t,
            channel: n,
            disableSorting: i,
            isFavoriteCategory: l,
            selected: s,
            collapsed: a,
            voiceStates: o,
        } = e,
        d = (0, h.cf)([nD.Ay], () => ({ unread: nD.Ay.hasUnread(n.id), mentionCount: nD.Ay.getMentionCount(n.id) })),
        c = (0, h.bG)([V.Ay], () => V.Ay.resolveUnreadSetting(n)),
        u = (0, h.cf)([U.A, lj.A, P.A], () => {
            let e = U.A.getChannel(n.parent_id),
                l = lj.A.getCheck(n.guild_id);
            return {
                canManageChannel: P.A.can(H.xBc.MANAGE_CHANNELS, n),
                canReorderChannel:
                    !0 !== i &&
                    ((0, M.ai)(t.id) ||
                        (null != e ? P.A.can(H.xBc.MANAGE_CHANNELS, e) : P.A.can(H.xBc.MANAGE_CHANNELS, t))),
                canMoveMembers: P.A.can(H.xBc.MOVE_MEMBERS, n),
                locked: !P.A.can(H.xBc.CONNECT, n),
                bypassLimit: P.A.can(H.xBc.MOVE_MEMBERS, n),
                unverifiedAccount: !l.canChat,
            };
        }),
        m = (0, h.bG)([nB.A], () => nB.A.hasVideo(n.id)),
        { enabled: g } = (0, rp.mf)({ guildId: t.id, location: "VoiceChannel" }),
        A = (0, lk.Ay)(n),
        f = (0, h.yK)(
            [rT.A, rM.A, lP.default],
            () => {
                if (null == o || 0 === o.length) return [];
                let e = lP.default.getId(),
                    t = [];
                for (let { user: i } of o)
                    for (let l of i.id === e ? rT.A.getActivities() : rM.A.getActivities(i.id, n.guild_id))
                        !(0, rh.N)(l) || (0, rm.A)(l) || null == l.name || t.includes(l.name) || t.push(l.name);
                return t;
            },
            [o, n.guild_id],
        ),
        p = (0, t4.Ay)(n),
        C = (0, tq.Qs)(n.id),
        E = (0, h.bG)([rA.A], () => rA.A.getStartTime(n), [n]),
        { isSubscriptionGated: x, needSubscriptionToAccess: N } = (0, nV.A)(n.id),
        _ = (0, rf.A)(),
        S = (0, h.bG)([V.Ay], () => V.Ay.isFavorite(t.id, n.id)),
        I = e.connected || _?.channelId === n.id,
        { enableHighlight: b, enableWaveformIcon: j } = (0, nE.b)(t.id, "VoiceChannel"),
        v = null != o && o.length > 0,
        G = b && v,
        y = j && v,
        R = l0({
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
        L = (0, lA.BX)("VoiceChannel");
    return (0, r.jsx)(rH, {
        channelName: p,
        embeddedApps: A,
        nonEmbeddedActivityNames: f,
        embeddedActivityType: ru.$.PLAYING,
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
let rB = [];
function rF(e) {
    return (
        m.A.modules.channels.NAME_LINE_HEIGHT.resolve({ density: e }) +
        2 * m.A.space.SPACE_XXS.resolve({ density: e }) +
        2
    );
}
class rW extends a.PureComponent {
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
        (this.setState({ initialized: !0 }), (0, tD.Ei)(this.getVisibleChannels));
    }
    componentWillUnmount() {
        this.updateChannelListScroll.cancel();
    }
    componentDidUpdate(e, t) {
        let { scrollToChannel: n, guildId: i, selectedChannelId: l } = this.props,
            { initialized: s } = this.state,
            { scrollTop: r } = tM.A.getGuildDimensions(i);
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
                    a = s.threadOffset * rF(r);
                l.scrollIntoViewRect({ start: e + a, end: e + a + rF(r), padding: n, animate: t, callback: i });
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
                if (i < 4 || e.isPlaceholderRow(i, l)) return !1;
                let s = e.getChannelFromSectionRow(i, l);
                if (null == s) return !1;
                let { channel: r, category: a } = s;
                return (
                    !!(0, tR.ig)(r.record.type) &&
                    (!a.isCollapsed || !a.isMuted) &&
                    !r.isMuted &&
                    !!t.isItemVisible(i, l, !0) &&
                    (0, tC.Y)(r.record)
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
        if (1 === e) return l;
        if (4 === e) return t.features.has(H.GuildFeatures.HUB) ? 0 : l;
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
            let { hasDivider: d, canHaveVoiceSummary: c } = n_(n, r, t),
                u = d ? (a ? 9 : m.A.space.SPACE_SM.resolve({ density: o ?? "default" })) : 0;
            if (!c || 1 === t) return u;
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
                                      if (!P.A.can(H.xBc.VIEW_CHANNEL, e)) return !1;
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
            a = rF(r);
        if (1 === e) {
            let e = n.getGuildActionSection();
            return e.isEmpty()
                ? 0
                : e.getRow(t) === tQ.n.GUILD_CONJURE
                  ? a * (1 + (this.props.conjureProjects?.length ?? 0))
                  : e.getRow(t) === tQ.n.GUILD_PREMIUM_PROGRESS_BAR
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
            a += rF(t);
            let n = i[d.id];
            null != n && n.length > 0 && (a += s === e ? 32 * n.length : 32);
        }
        if (d.record.isGuildVoice()) {
            let e = i[d.id];
            if (null != e && e.length > 0) {
                let t = 32 * e.length;
                if (
                    (d.isCollapsed || c.isCollapsed ? (t = 32) : (0, eW.Ln)(d.record) && (t += 32),
                    (a += t + m.A.space.SPACE_XS.resolve({ density: r })),
                    !d.isCollapsed && !c.isCollapsed)
                ) {
                    let { enableHangoutWindow: e } = (0, ek.kY)({
                        guildId: d.record.guild_id,
                        location: "ChannelList",
                    });
                    e && ((0, eB.lr)(d.record) ? (a += 134) : s === d.id && (a += 44));
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
        (null != n && s.includes(n) && (l = (0, ez.xb)(t)), (0, ez.DD)(e.id, s, l));
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
            np,
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
                    case 1:
                        return "hoisted-spacer";
                    case 4:
                        return "uncategorized-spacer";
                    case 2:
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
        if (1 === t) {
            let e = c.getGuildActionSection(),
                t = e.getRow(n);
            if (null == t) return null;
            switch (t) {
                case tQ.n.GUILD_HUB_HEADER_OPTIONS:
                    return (0, r.jsx)(
                        eF.A,
                        { guild: i, channel: tT.A.getDefaultChannel(i.id) },
                        tQ.n.GUILD_HUB_HEADER_OPTIONS,
                    );
                case tQ.n.GUILD_PREMIUM_PROGRESS_BAR:
                    let l = e.getRows();
                    return (0, r.jsx)(tp, { guild: i, withMargin: l.length > 1 }, tQ.n.GUILD_PREMIUM_PROGRESS_BAR);
                case tQ.n.GUILD_SPACE:
                    return (0, r.jsx)(eH, { guild: i, selected: s === eh.VV.GUILD_SPACE }, tQ.n.GUILD_SPACE);
                case tQ.n.GUILD_HOME:
                    return (0, r.jsx)(iQ, { guild: i, selected: s === eh.VV.GUILD_HOME }, tQ.n.GUILD_HOME);
                case tQ.n.GUILD_SCHEDULED_EVENTS:
                    return (0, r.jsx)(
                        rc,
                        { guild: i, selected: s === tQ.n.GUILD_SCHEDULED_EVENTS },
                        tQ.n.GUILD_SCHEDULED_EVENTS,
                    );
                case tQ.n.GUILD_ROLE_SUBSCRIPTIONS:
                    return (0, r.jsx)(
                        i8,
                        { guild: i, selected: s === eh.VV.ROLE_SUBSCRIPTIONS },
                        tQ.n.GUILD_ROLE_SUBSCRIPTIONS,
                    );
                case tQ.n.GUILD_SHOP:
                    return (0, r.jsx)(lc, { guild: i, selected: s === eh.VV.GUILD_SHOP }, tQ.n.GUILD_SHOP);
                case tQ.n.GUILD_GAME_SHOP:
                    return (0, r.jsx)(iK, { guild: i, selected: s === eh.VV.GAME_SHOP }, tQ.n.GUILD_GAME_SHOP);
                case tQ.n.GUILD_CONJURE:
                    return (0, r.jsxs)(
                        a.Fragment,
                        {
                            children: [
                                (0, r.jsx)(ih, { guild: i, selected: s === eh.VV.CONJURE }),
                                (0, r.jsx)(id, { guildId: i.id, projects: this.props.conjureProjects ?? rB }),
                            ],
                        },
                        tQ.n.GUILD_CONJURE,
                    );
                case tQ.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
                    return (0, r.jsx)(i2, { guild: i });
                case tQ.n.CHANNELS_AND_ROLES:
                    return (0, r.jsx)(
                        iZ,
                        { guild: i, selected: s === eh.VV.CHANNEL_BROWSER || s === eh.VV.CUSTOMIZE_COMMUNITY },
                        tQ.n.CHANNELS_AND_ROLES,
                    );
                case tQ.n.GUILD_DIRECTORY:
                    return (0, r.jsx)(
                        iR,
                        { guild: i, selectedChannelId: s, disableManageChannels: h },
                        tQ.n.GUILD_DIRECTORY,
                    );
                case tQ.n.GUILD_MOD_DASH_MEMBER_SAFETY:
                    return (0, r.jsx)(
                        eR,
                        { guild: i, selected: s === eh.VV.MEMBER_SAFETY },
                        tQ.n.GUILD_MOD_DASH_MEMBER_SAFETY,
                    );
                case tQ.n.GUILD_BOOSTS:
                    return (0, r.jsx)(te, { guildId: i.id, selected: s === eh.VV.GUILD_BOOSTS }, tQ.n.GUILD_BOOSTS);
                case tQ.n.GAME_SERVERS:
                    return (0, r.jsx)(e_, { guildId: i.id, selected: s === eh.VV.GAME_SERVERS }, tQ.n.GAME_SERVERS);
                case tQ.n.GAME_SERVERS_EMPTY:
                    return (0, r.jsx)(
                        eC,
                        { guildId: i.id, selected: s === eh.VV.GAME_SERVERS },
                        tQ.n.GAME_SERVERS_EMPTY,
                    );
                case tQ.n.GUILD_OFFICIAL_MESSAGES:
                    return (0, r.jsx)(
                        i7,
                        { guild: i, selected: s === eh.VV.GUILD_OFFICIAL_MESSAGES },
                        tQ.n.GUILD_OFFICIAL_MESSAGES,
                    );
                default:
                    return null;
            }
        }
        if (c.isPlaceholderRow(t, n)) return null;
        let f = c.getChannelFromSectionRow(t, n);
        if (null == f) return null;
        let { category: p, channel: C } = f,
            E = p instanceof tL.xu,
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
                            (0, r.jsx)(sF, {
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
                                ? (0, r.jsx)(lu, {
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
                    l9,
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
                    rk,
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
                return (0, r.jsx)(l5, { channel: x, guild: i, position: C.position, selected: s === C.id }, N);
            case H.rbe.GUILD_CATEGORY:
                if (t !== c.voiceChannelsSectionNumber) return null;
                return (0, r.jsx)(nh, { channel: x }, `readonly-${x.id}`);
            case H.rbe.PUBLIC_THREAD:
            case H.rbe.PRIVATE_THREAD:
            case H.rbe.ANNOUNCEMENT_THREAD:
                return (0, r.jsx)(
                    sF,
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
            nI,
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
                let { hasDivider: i, canHaveVoiceSummary: l } = n_(t, n, e);
                return `section-footer-${e}${i ? "-divider" : ""}${l ? "-voice-summary" : ""}`;
            })(t, n, o),
        );
    };
    renderTopUnread() {
        let { topMention: e, bottomUnread: t, bottomMention: n, isUnreadVisible: i } = this.state,
            { guildId: l, guildChannels: s, guildChannelsVersion: a } = this.props;
        return (0, r.jsx)("div", {
            className: nf.Eo,
            children: (0, r.jsx)(ro, {
                ref: this.unreadTopRef,
                textUnread: eA.intl.string(eA.t.FCRiT3),
                textMention: eA.intl.string(eA.t["8zH0LJ"]),
                hide: null == e && (i || null != t || null != n),
                className: nf.Vq,
                barClassName: nf.bu,
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
        return (0, r.jsx)(ro, {
            reverse: !0,
            ref: this.unreadBottomRef,
            textUnread: eA.intl.string(eA.t.FCRiT3),
            textMention: eA.intl.string(eA.t["8zH0LJ"]),
            hide: null == i && l,
            className: nf.di,
            barClassName: nf.bu,
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
        if (1 !== e) {
            if (null == t)
                return 2 === e
                    ? "favorites-header"
                    : e === n.recentsSectionNumber
                      ? "recents-header"
                      : e === n.voiceChannelsSectionNumber
                        ? "voice-channels"
                        : 4 === e
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
                        className: nf.XG,
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
                        innerAriaLabel: eA.intl.string(eA.t.OGiMXJ),
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
        if (!tG.A.shouldShow("voice-conversations")) return;
        let { guildChannels: e } = this.props,
            t = e.getFirstVoiceChannel();
        if (null == t) return void tv.X8("voice-conversations");
        let n = this._list;
        if (null != n)
            for (let { section: e, row: i } of this.getSectionRowsFromChannel(t.id))
                n.isItemVisible(e, i) || tv.X8("voice-conversations");
    };
    render() {
        let { guildChannels: e, guildChannelsVersion: t, showNewUnreadsBar: n } = this.props;
        return (0, r.jsx)(en.V0, {
            children: (i) =>
                (0, r.jsx)(p.F, {
                    component: (0, r.jsx)(C.A, {
                        children: (0, r.jsx)(p.H, { id: i, children: eA.intl.string(eA.t.OGiMXJ) }),
                    }),
                    children: n
                        ? (0, r.jsxs)(a.Fragment, {
                              children: [
                                  (0, r.jsx)("div", {
                                      className: nf.Eo,
                                      children: (0, r.jsx)(ri, {
                                          position: "top",
                                          guildChannels: e,
                                          guildChannelsVersion: t,
                                          jumpToVoiceChannels: this.jumpToVoiceChannels,
                                          jumpToChannel: this.jumpToChannel,
                                      }),
                                  }),
                                  this.renderList(),
                                  (0, r.jsx)(ri, {
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
let rz = (e) => {
    let { guildId: t, selectedChannelId: n, selectedVoiceChannelId: i } = e,
        l = (0, h.bG)([W.Ay], () => W.Ay.keyboardModeEnabled),
        { analyticsLocations: s } = (0, K.Ay)(z.A.GUILD_CHANNEL_LIST),
        o = (0, h.bG)([U.A], () => U.A.getChannel(n)),
        d = (0, h.bG)([U.A], () => U.A.getChannel(i)),
        m = (0, h.bG)([w.A], () => w.A.getGuildId()),
        g = (0, eK.jN)(t),
        A = a.useRef(null),
        f = a.useCallback((e, t) => {
            let n = A.current;
            null != n &&
                (H.Ut1.test(t) || (0, eh.jq)(t)
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
            [tI.A, U.A, tE.A],
            () => {
                let t;
                return [
                    (t = (0, M.ai)(e)
                        ? tS.default
                              .keys(tE.A.getFavoriteChannels())
                              .map((e) => U.A.getChannel(e))
                              .filter(tN.Vq)
                              .filter((e) => e.isGuildStageVoice())
                        : tI.A.getChannels(e)).reduce((e, t) => {
                        let n = tI.A.getMutableParticipants(t.id, tb.ip.SPEAKER);
                        return ((e[t.id] = n.filter((e) => e.type === tb.wY.VOICE).map(tj)), e);
                    }, {}),
                    t.reduce((e, t) => {
                        let { id: n } = t;
                        return e + tI.A.getParticipantsVersion(n);
                    }, 0),
                ];
            },
            [e],
            t_.D,
        );
        return t;
    })(t);
    return (0, r.jsx)(K.f5, {
        value: s,
        children: (0, r.jsx)(N.A, {
            section: H.JJy.GUILD_CHANNEL_LIST,
            children: (0, r.jsxs)(c.hD, {
                navigator: E,
                children: [
                    (0, r.jsx)(ty.q, { containerRef: E.containerProps.ref, itemType: k }),
                    (0, r.jsx)(rW, {
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
function rK(e) {
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
                    (n = (0, tJ.A)(t)),
                    (i = (0, tq.Ay)(t)),
                    !(0, h.bG)(
                        [O.A],
                        () => {
                            if (null == t) return !1;
                            let e = O.A.getGuild(t);
                            return e?.features.has(H.GuildFeatures.HUB) ?? !1;
                        },
                        [t],
                    ) &&
                        (n || i.length > 0)),
                s = (0, tk.W)(e.id),
                r = (0, tX.vz)(e.id),
                a = (0, tw.r)(e),
                o = (0, t$.jz)(e),
                d = (0, tK.d)(e.id),
                c = (0, tO.bG)([tW.h], () => tW.h.getNewMemberActions(e.id), [e.id]),
                u = (0, tP.Q9)(e, "useGuildActionRows"),
                m = (0, tY.A)(e.id),
                g = (0, tz.jY)(e.id),
                A = (0, tB.fw)(e.id),
                f = (0, eU.Uq)(e.id, "useGuildActionRows"),
                p = !0 === (0, tF.A)(e),
                C = (0, eK.jN)(e.id),
                E = [],
                x = e.features.has(H.GuildFeatures.HUB),
                N = e.features.has(H.GuildFeatures.COMMUNITY),
                _ = e.features.has(H.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
                S = (0, tu.A)(e.id),
                I = tm(e),
                b = (0, tZ.bW)(e.id, "useGuildActionRows"),
                j = (0, tV.C$)(e.id, "useGuildActionRows"),
                v = e.features.has(H.GuildFeatures.GAME_SERVERS),
                G = (0, tH.N)("useGuildActionRows"),
                [y] = (0, ed.kn)(j && G && !v ? [ei.M.EMPTY_GAME_SERVER_TAB] : [], { bypassAutoDismiss: !0 });
            return (
                x && E.push(tQ.n.GUILD_HUB_HEADER_OPTIONS),
                !g && d && m && null != c && c.length > 0
                    ? E.push(tQ.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR)
                    : e.premiumProgressBarEnabled && I > 0 && E.push(tQ.n.GUILD_PREMIUM_PROGRESS_BAR),
                !x && d && E.push(tQ.n.GUILD_HOME),
                f && E.push(tQ.n.GUILD_SPACE),
                l && E.push(tQ.n.GUILD_SCHEDULED_EVENTS),
                !x && N && (p || C) && E.push(tQ.n.CHANNELS_AND_ROLES),
                r && E.push(tQ.n.GUILD_ROLE_SUBSCRIPTIONS),
                a && E.push(tQ.n.GUILD_SHOP),
                o && E.push(tQ.n.GUILD_GAME_SHOP),
                ((A && (N || _)) || (s && e.features.has(H.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL))) &&
                    E.push(tQ.n.GUILD_MOD_DASH_MEMBER_SAFETY),
                S && E.push(tQ.n.GUILD_BOOSTS),
                b && E.push(tQ.n.GUILD_OFFICIAL_MESSAGES),
                j && (v ? E.push(tQ.n.GAME_SERVERS) : null != y && E.push(tQ.n.GAME_SERVERS_EMPTY)),
                u && E.push(tQ.n.GUILD_CONJURE),
                E
            );
        })(e.guild),
        m = (0, h.cf)([tU.A], () => tU.A.getGuild(e.guildId, { guildActionRows: u })),
        g =
            ((t = e.guildId),
            (n = u.includes(tQ.n.GUILD_CONJURE)),
            (i = (0, J.Xj)((0, Y.zy)().pathname)),
            a.useEffect(() => {
                n && "unattempted" === Z.Ay.getGuildProjectsFetchState(t) && (0, q.listProjects)(t);
            }, [n, t]),
            (l = (0, X.UU)(() => (n ? (0, Q.cR)(t) : et), [n, t])),
            (s = (0, $.A)(l, i)),
            (o = (0, h.yK)(ee.F4, () => l.filter((e) => (0, ee.gM)(e.id)).map((e) => e.id), [l])),
            (c = (function (e) {
                let [t, n] = a.useState(Date.now),
                    i = e.reduce((e, n) => (null != n && n > t && n < e ? n : e), 1 / 0);
                return (
                    a.useEffect(() => {
                        if (1 / 0 === i) return;
                        let e = setTimeout(() => n(Date.now()), i - Date.now());
                        return () => clearTimeout(e);
                    }, [i]),
                    t
                );
            })((d = (0, h.yK)(ee.F4, () => l.map((e) => (0, ee._V)(e.id)), [l])))),
            a.useMemo(() => {
                let e = new Set(s),
                    t = new Set(o);
                return l.filter((n, l) => {
                    if (n.id === i) return !0;
                    let s = d[l];
                    return (null != s && s > c) || (e.has(n) && !t.has(n.id));
                });
            }, [l, s, o, d, c, i])),
        { density: A } = (0, E.wR)();
    return (0, r.jsx)(rz, { ...e, ...m, conjureProjects: g, density: A });
}
