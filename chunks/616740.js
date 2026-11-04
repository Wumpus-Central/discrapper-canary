let l;
(n.d(t, { B: () => an, i: () => at }), n(321073));
var i,
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
        let { channel: l, position: i } = t,
            [s, a] = (0, _.H)(
                () => ({
                    accept: k,
                    drop: (e) =>
                        (function (e, t) {
                            let { channel: n, position: l } = e,
                                i = w.A.getGuildId(),
                                s = (0, j.QO)((0, G.A)(i, t.id), t.position, n, l, t.channelList);
                            if (null == s) return;
                            let r = (0, G.A)(i, t.id);
                            if (null == r) return;
                            let a = D.A.getCategories(i),
                                o = (0, j.RL)(r, (0, G.A)(i, s.referenceId), s.parentId, a);
                            (0, R.A)(i, r, s.parentId, o);
                        })({ channel: l, position: i }, e),
                    canDrop: (e) =>
                        (function (e, t) {
                            let { channel: n, position: l } = e,
                                i = U.A.getChannel(t.id);
                            if (null == i) return !1;
                            let s = (0, j.QO)(U.A.getChannel(t.id), t.position, n, l, t.channelList);
                            if (null == s) return !1;
                            if ((0, M.ai)(w.A.getGuildId())) return !0;
                            if (V.Ay.isFavorite(t.guildId, n.id)) return !1;
                            let r = O.A.getGuild(t.guildId);
                            if (null == r) return !1;
                            let a = U.A.getChannel(s.parentId),
                                o = (0, v.Ay)((0, v.Fd)(i), r),
                                d = (0, v.Ay)(a, r);
                            return o && d;
                        })({ channel: l, position: i }, e),
                    collect: B,
                }),
                [l, i],
            ),
            [, o, d] = (0, S.i)(
                () => ({
                    type: k,
                    canDrag: () =>
                        (function (e) {
                            let t = w.A.getGuildId(),
                                l = (0, y.A)(e, t);
                            if (null == l) return !0;
                            switch (l.reason) {
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
                                            return (n) => (0, r.jsx)(t, { ...n, guildId: l.guild.id, channelId: e.id });
                                        }),
                                        !1
                                    );
                            }
                        })(l),
                    item: () =>
                        (function (e, t) {
                            let { id: n, parent_id: l, guild_id: i, type: s } = e,
                                r = w.A.getGuildId(),
                                a = D.A.getCategories(r);
                            return {
                                isChannelDrag: !0,
                                id: n,
                                position: t,
                                parentId: l,
                                type: s,
                                channelList: (0, b.A)(a._categories, a, (e) => {
                                    let { channel: t } = e;
                                    return t.type === H.rbe.GUILD_CATEGORY && null != a[t.id] && 0 === a[t.id].length
                                        ? !!(0, M.ai)(r) ||
                                              (P.A.can(H.xBc.MANAGE_CHANNELS, t) && P.A.can(H.xBc.VIEW_CHANNEL, t))
                                        : !L.A.isCollapsed(t.parent_id);
                                }),
                                guildId: i,
                            };
                        })(l, i),
                }),
                [l, i],
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
    X = n(615890),
    J = n(751841),
    $ = n(371169),
    q = n(260498),
    Z = n(352571),
    Q = n(313537),
    ee = n(465080);
let et = [];
var en = n(915089),
    el = n(554146),
    ei = n(866665),
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
    let { guildId: t, selected: l } = e,
        [i, s] = (0, ed.ww)([el.M.GAME_SERVER_HOSTING_NEW_BADGE], t),
        o = i === el.M.GAME_SERVER_HOSTING_NEW_BADGE,
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
                    children: (0, r.jsx)(ei.m, {
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
        selected: l,
        onClick: d,
        trailing: u,
    });
});
var eE = n(361158),
    ex = n(148700),
    eN = n(186111);
let e_ = a.memo(function (e) {
    let { guildId: t, selected: n } = e,
        l = (0, I.Rv)(),
        i = (0, h.bG)([eN.A], () => eN.A.hasLayers()),
        s = (0, eE.xr)((e) => e.fullScreenLayers.length > 0),
        [o, d] = (0, ed.ww)([el.M.GAME_SERVER_HOSTING_NEW_BADGE], t),
        c = o === el.M.GAME_SERVER_HOSTING_NEW_BADGE,
        [u, m] = (0, ed.ww)(l || i || s || !c ? [] : [el.M.GAME_SERVER_HOSTING_NEW_COACHMARK], t),
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
        p = u === el.M.GAME_SERVER_HOSTING_NEW_COACHMARK,
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
        l = (0, h.bG)([P.A], () => P.A.can(H.xBc.KICK_MEMBERS, t)),
        i = (0, h.bG)([ej.A], () => ej.A.getSubmittedGuildJoinRequestTotal(t.id)),
        s = l ? (i ?? 0) : 0;
    a.useEffect(() => {
        l &&
            t.features.has(H.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
            t.features.has(H.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
            eb.A.fetchGuildJoinRequests({ guildId: t.id, status: ev.B5.SUBMITTED, limit: eG.L });
    }, [l, t]);
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
        { targetElementRef: l, guildName: i, isAdmin: s, isPublished: a, onCheckItOut: o, onDismiss: d } = e;
    return (
        s
            ? a
                ? ((t = eA.intl.string(eP.default.EIuDzZ)), (n = eA.intl.string(eP.default.ev0nwK)))
                : ((t = eA.intl.string(eP.default.O2eErX)), (n = eA.intl.string(eP.default["5W7HIh"])))
            : ((t = eA.intl.string(eP.default.PE4Cid)),
              (n = eA.intl.formatToPlainString(eP.default.Uf5Ve7, { serverName: i }))),
        (0, r.jsx)(eD.A, {
            targetElementRef: l,
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
    let { guild: t, selected: l } = e,
        i = (0, eT.A)(),
        [s, o] = (0, ed.kn)(i ? [] : [el.M.GUILD_SPACE_COACHMARK], { bypassAutoDismiss: !0 }),
        d = s === el.M.GUILD_SPACE_COACHMARK,
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
                              children: (0, r.jsx)(ei.m, {
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
                selected: l,
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
    ez = n(582904),
    eK = n(406997),
    eW = n(395504),
    eY = n(503698),
    eX = n.n(eY),
    eJ = n(172218),
    e$ = n(695366),
    eq = n(104510),
    eZ = n(544048),
    eQ = n(533993),
    e0 = n(379229),
    e1 = n(482487),
    e3 = n(836944),
    e6 = n(828162),
    e2 = n(877624),
    e9 = n(549996),
    e7 = n(586428),
    e5 = n(247806);
function e4(e) {
    let { indicator: t } = e;
    if (null == t) return null;
    switch (t.type) {
        case e0.cD.WARNING:
            return (0, r.jsx)(e$.E, { color: m.A.colors.STATUS_WARNING, size: "sm" });
        case e0.cD.UNREAD:
            return (0, r.jsx)(eI.hV, { count: t.count });
        default:
            return null;
    }
}
let e8 = { animation: { BEG: 0, END: 75 }, LOOP: { BEG: 76, END: 376 } },
    te = a.memo(function (e) {
        let { guildId: t, selected: l } = e,
            i = (0, e3.Ay)(t),
            { showHighlight: s, markAsDismissed: o } = (function () {
                let e = (0, e9.c)(e2.C.GUILD_BOOST_TAB_BANNER),
                    t = null != e && "guildBoostTabBanner" === e.properties.properties.oneofKind,
                    [n, l] = (0, ed.Cc)(t ? el.M.GUILD_BOOST_TAB_HIGHLIGHT : null, e?.promotionId ?? "");
                return { showHighlight: n === el.M.GUILD_BOOST_TAB_HIGHLIGHT, markAsDismissed: l };
            })(),
            { showNewBadgeOnRow: d, dismissNewBadgeIfShown: c } = (0, e1.A)(
                t,
                i?.indicator != null || i?.popout != null,
            ),
            u = a.useCallback(() => {
                (c(),
                    (0, eQ.Zm)(t),
                    (0, e6.A)(t, K.A.GUILD_POWERUPS_CHANNEL_LIST_ROW),
                    i?.popout?.markAsDismissed(em.i.INDIRECT_ACTION));
            }, [t, c, i]),
            [m, g] = a.useState(!1),
            A = (0, eJ.K)(g, 0),
            f = (0, I.re)(I.DX),
            p = (0, h.bG)([eN.A], () => eN.A.hasLayers()),
            C = (0, eE.xr)((e) => e.fullScreenLayers.length > 0),
            E = !m || f || p || C,
            x = a.useCallback(() => {
                if (i?.popout == null || E) return null;
                switch (i?.popout?.type) {
                    case e0.o.LEVEL_REACHED:
                        return (0, r.jsx)(ex.HW, { guildId: t, channelRowRef: A, ...i.popout });
                    case e0.o.PERKS_AVAILABLE:
                        return (0, r.jsx)(ex.UB, { guildId: t, channelRowRef: A, ...i.popout });
                    case e0.o.PERKS_PURCHASABLE:
                        return (0, r.jsx)(ex.lw, { guildId: t, channelRowRef: A, ...i.popout });
                    case e0.o.NEW_PERK_AVAILABLE:
                        return (0, r.jsx)(ex.bo, { guildId: t, channelRowRef: A, ...i.popout });
                    case e0.o.BOOST_TO_UNLOCK:
                        return (0, r.jsx)(ex.Gw, { guildId: t, channelRowRef: A, ...i.popout });
                    case e0.o.EXPIRING_PERK:
                        return (0, r.jsx)(ex.Mr, { guildId: t, channelRowRef: A, ...i.popout });
                    case e0.o.GAME_SERVER_HOSTING_AVAILABLE:
                    case e0.o.GAME_SERVER_HOSTING_GUILD_ELIGIBLE:
                        return (0, r.jsx)(ex.jz, { guildId: t, channelRowRef: A, ...i.popout });
                    case e0.o.GAME_SERVER_NEW_GAMES:
                        return (0, r.jsx)(ex.YX, { guildId: t, channelRowRef: A, ...i.popout });
                    default:
                        return (0, r.jsx)("div", {});
                }
            }, [t, i?.popout, A, E]);
        a.useEffect(() => {
            l && s && o(em.i.AUTO_DISMISS);
        }, [l, s, o]);
        let N = i?.popout != null || s,
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
                    className: e5.kL,
                    id: `skill-trees-${t}`,
                    renderIcon: (e) => (0, r.jsx)(eq._, { size: "md", className: e, color: "currentColor" }),
                    background:
                        N &&
                        (0, r.jsx)("div", {
                            className: e5.Fi,
                            children: (0, r.jsx)(eZ.t, {
                                nextScene: null == _ ? "animation" : "LOOP",
                                className: e5.UU,
                                sceneSegments: e8,
                                importData: () => n.e(867807).then(n.t.bind(n, 217762, 19)),
                                onScenePlay: b,
                                rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
                            }),
                        }),
                    text: (0, r.jsx)("span", {
                        className: eX()({ [e5.A7]: i?.showUnread === !0 }),
                        children: eA.intl.string(e7.default.yv3DJJ),
                    }),
                    selected: l,
                    onClick: u,
                    showUnread: i?.showUnread === !0,
                    trailing: d
                        ? (0, r.jsx)(ea.E, { type: "new", variant: "primary" })
                        : (0, r.jsx)(e4, { indicator: i?.indicator }),
                }),
                x(),
            ],
        });
    });
var tt = n(736819),
    tn = n(717421),
    tl = n(834730),
    ti = n(442433),
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
            l = Object.values(th.YV);
        return (
            n.concat(l).forEach((n) => {
                null == n.includedInLevel && (n.isEnabled?.(e.id) ?? !0) && (t += n.boostPrice);
            }),
            t
        );
    }, [e]);
}
var tg = n(196577);
let tA = (e) => {
    let { appliedBoostCount: t, maxBoostCount: n, premiumSubscriberCount: l, className: i, ref: s } = e,
        o = t >= n,
        d = Math.min((t / n) * 100, 100),
        c = `calc(${d}% - 4px)`,
        [u, h] = (0, tn.z)(
            () => ({ width: t === l ? c : "calc(0% - 0px)", config: { tension: 250, damping: 5, mass: 1 } }),
            "respect-motion-settings",
            [t, l],
        );
    return (
        a.useEffect(() => {
            h({ width: c });
        }, [c, h]),
        (0, r.jsxs)("div", {
            ref: s,
            className: tg.hQ,
            children: [
                (0, r.jsx)("div", { className: eX()(tg.L$, i) }),
                (0, r.jsx)(tt.animated.div, { className: eX()(tg.qB, { [tg.mu]: d <= 5 }), style: u }),
                (0, r.jsxs)("div", {
                    className: tg.FS,
                    children: [
                        (0, r.jsxs)("div", {
                            className: tg.Ui,
                            children: [
                                (0, r.jsx)(tl.E, {
                                    className: tg.Qq,
                                    variant: "body-xs/semibold",
                                    children: eA.intl.string(e7.default.NI6Ihe),
                                }),
                                l >= n &&
                                    (0, r.jsx)(tl.E, {
                                        className: tg.Qq,
                                        variant: "body-xs/semibold",
                                        children: "\uD83C\uDF89",
                                    }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: tg.Ui,
                            children: [
                                (0, r.jsx)(tl.E, {
                                    className: eX()(tg.Qq, tg.ue),
                                    variant: "body-xs/semibold",
                                    children: o
                                        ? eA.intl.formatToPlainString(e7.default["Ehpq+7"], { appliedBoostCount: t })
                                        : eA.intl.formatToPlainString(e7.default["/rbPDs"], {
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
    let { guild: t, withMargin: l } = e,
        i = tm(t),
        s = (0, tu.A)(t.id),
        o = a.useCallback(() => {
            (0, e6.A)(t.id, K.A.GUILD_BOOSTING_SIDEBAR_DISPLAY);
        }, [t.id]),
        d = (0, h.bG)([td], () => td.getCountForGuild(t.id) ?? 0);
    a.useEffect(() => {
        d !== t.premiumSubscriberCount && (0, ts.u)(t.id, t.premiumSubscriberCount);
    }, [t.id, d, t.premiumSubscriberCount]);
    let c = a.useCallback(
        (e) => {
            s &&
                (0, ti.L3)(e, async () => {
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
        className: eX()(tg.kL, { [tg.aF]: l }),
        onContextMenu: c,
        children: (0, r.jsx)(tA, {
            appliedBoostCount: d,
            maxBoostCount: i,
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
    let { voiceState: t, userNick: n, user: l } = e,
        i = (0, tx.hz)(t, n);
    return { user: l, voiceState: t, nick: n, comparator: i };
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
    tz = n(701785),
    tK = n(101611),
    tW = n(473529),
    tY = n(978165),
    tX = n(960253),
    tJ = n(770666),
    t$ = n(508654),
    tq = n(521427),
    tZ = n(871123),
    tQ = n(281405),
    t0 = n(3026),
    t1 = n(821609),
    t3 = n(499373),
    t6 = n(559106),
    t2 = n(847374),
    t9 = n(285796),
    t7 = n(983851),
    t5 = n(914430),
    t4 = n(47167),
    t8 = n(485947),
    ne = n(970853),
    nt = n(93055),
    nn = n(349828),
    nl = n(708526),
    ni = n(551851),
    ns = n(391507);
function nr(e) {
    e.stopPropagation();
}
function na(e) {
    let { label: t, onClick: n, tabIndex: l } = e;
    return (0, r.jsx)(ei.m, {
        text: t,
        children: (0, r.jsx)(es.D, {
            className: eX()(ns.c9, ns.ih),
            onClick: n,
            tabIndex: l,
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
                    channel: l,
                    connectChannelDragSource: i,
                    connectChannelDropTarget: s,
                    disableManageChannels: o,
                    position: d,
                    sortingPosition: u,
                    hideIcon: m,
                    children: g,
                } = e,
                A = (0, h.bG)([V.Ay], () => V.Ay.isChannelMuted(l.getGuildId(), l.id)),
                f = (0, h.bG)([L.A], () => L.A.isCollapsed(l.id)),
                p = (0, h.bG)([P.A], () => P.A.can(H.xBc.MANAGE_CHANNELS, l)),
                C = (0, t4.Ay)(l);
            t = null != u ? (d > u ? ns.mU : ns.TR) : ns.fx;
            let E = a.useCallback(() => {
                    f ? (0, t5.fh)(l.id) : (0, t5.Gv)(l.id);
                }, [l.id, f]),
                x = a.useCallback(
                    (e) => {
                        if ("null" !== l.id) {
                            let t = O.A.getGuild(l.getGuildId());
                            null != t &&
                                (0, ti.L3)(e, async () => {
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
                                    return (n) => (0, r.jsx)(e, { ...n, channel: l, guild: t });
                                });
                        }
                    },
                    [l],
                ),
                N = a.useCallback(() => {
                    let e = l.type === H.rbe.GUILD_CATEGORY ? null : l.type,
                        t = l.getGuildId();
                    null != t &&
                        (0, I.mM)(async () => {
                            let { default: i } = await Promise.all([
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
                                (0, r.jsx)(i, {
                                    ...n,
                                    channelType: e,
                                    guildId: t,
                                    categoryId: "null" !== l.id ? l.id : null,
                                });
                        });
                }, [l]),
                _ = (function (e, t) {
                    let n = (0, h.bG)([tE.A], () => tE.A.autoAddJoinedThreads),
                        { isAtLimit: l } = (0, nt.ft)();
                    return n &&
                        l &&
                        null != t &&
                        (0, M.ai)(e.getGuildId()) &&
                        e.type === H.rbe.GUILD_CATEGORY &&
                        t.trim().toLowerCase() === nn.A.toLowerCase()
                        ? { label: eA.intl.string(nl.default.WsUrMD), tooltip: eA.intl.string(nl.default.dW9Kov) }
                        : null;
                })(l, C),
                S = (0, ne.A)(l);
            null == S && p && !o && (S = { label: eA.intl.string(eA.t["fUYU+j"]), perform: N });
            let { role: b, tabIndex: j, ...v } = (0, c.rm)(l.id),
                G = a.useRef(null),
                y = a.useRef(null),
                R = (0, r.jsxs)("li", {
                    className: t,
                    "data-dnd-name": C,
                    children: [
                        (0, r.jsx)(t6.vN, {
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
                                                      children: (0, r.jsx)(ei.m, {
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
                                                : (0, r.jsx)(t2.a, {
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
            return null != s && null != i ? s(i(R)) : R;
        }),
    ),
    nd = a.memo(function (e) {
        let { name: t, onDismiss: n, className: l } = e;
        return (0, r.jsx)("li", {
            className: eX()(l, ns.fx),
            children: (0, r.jsxs)("div", {
                className: eX()(ns.Ki, ns._V),
                children: [
                    (0, r.jsx)("div", {
                        className: ns.rb,
                        children: (0, r.jsx)(t8.A, { className: ns.UU, children: (0, r.jsx)(t0.A, { children: t }) }),
                    }),
                    null != n
                        ? (0, r.jsx)(ei.m, {
                              asContainer: !0,
                              text: eA.intl.string(eA.t["5qNmsU"]),
                              children: (0, r.jsx)(es.D, {
                                  className: ns.r,
                                  onClick: n,
                                  children: (0, r.jsx)(t9.a, { size: "md", color: "currentColor", className: ns.X8 }),
                              }),
                          })
                        : null,
                ],
            }),
        });
    }),
    nc = a.memo(function (e) {
        let { category: t } = e,
            n = (0, h.bG)([ni.A], () => ni.A.isVoiceCategoryCollapsed(t.guild.id)),
            l = a.useCallback(() => {
                var e, l;
                n
                    ? ((e = t.guild.id), tr.h.dispatch({ type: "VOICE_CATEGORY_EXPAND", guildId: e, expand: !0 }))
                    : ((l = t.guild.id), tr.h.dispatch({ type: "VOICE_CATEGORY_COLLAPSE", guildId: l, expand: !1 }));
            }, [t.guild.id, n]);
        return (0, r.jsx)("div", {
            className: ns.oA,
            children: (0, r.jsx)(t1.$, {
                variant: "secondary",
                fullWidth: !0,
                onClick: l,
                icon: t7.H,
                text: n ? eA.intl.string(eA.t["/eB9Bg"]) : eA.intl.string(eA.t.Q2gPWl),
            }),
        });
    }),
    nu = a.memo(function (e) {
        let { category: t, channel: n } = e,
            l = (0, h.bG)([ni.A], () => ni.A.isVoiceCategoryCollapsed(t.guild.id));
        return l || null == n || n.record.type === H.rbe.GUILD_CATEGORY
            ? l
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
            guildChannels: l,
            guildChannelsVersion: i,
            selectedChannelId: s,
            disableManageChannels: o,
        } = e,
        d = a.useCallback(() => {
            let e = l.getCategoryFromSection(l.recentsSectionNumber);
            if (null == e) return;
            let t = null,
                i = e.getShownChannelAndThreadIds();
            (null != s && i.includes(s) && (t = (0, eK.xb)(l)), (0, eK.DD)(n.id, i, t));
        }, [n.id, s, l, i]),
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
        case l.recentsSectionNumber:
            return (0, r.jsx)(nd, { name: eA.intl.string(eA.t.gKcrqM), onDismiss: d });
        case l.voiceChannelsSectionNumber: {
            let e = l.getCategoryFromSection(l.voiceChannelsSectionNumber);
            if (null == e || e.isEmpty()) return null;
            let n = l.getChannelFromSectionRow(t, 0)?.channel;
            return (0, r.jsxs)(a.Fragment, {
                children: [(0, r.jsx)("div", { className: nf.ts }), (0, r.jsx)(nu, { category: e, channel: n })],
            });
        }
        case 5: {
            let e = l.getNamedCategoryFromSection(t);
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
            let e = l.getNamedCategoryFromSection(t);
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
            l = a.useMemo(() => t.getCategoryFromSection(t.voiceChannelsSectionNumber), [t, n]);
        return null == l ? null : (0, r.jsx)(nc, { category: l });
    }),
    nI = a.memo(function (e) {
        let {
                sectionIndex: t,
                guildChannels: n,
                guildChannelsVersion: l,
                voiceStates: i,
                guildId: s,
                selectedChannelId: o,
                selectedVoiceChannelId: d,
                optInEnabled: c,
            } = e,
            { hasDivider: u, canHaveVoiceSummary: m } = a.useMemo(() => n_(n, c, t), [n, c, t, l]),
            g = a.useMemo(() => (1 === t ? null : n.getCategoryFromSection(t)), [n, t, l]),
            A = (0, eW.jN)(s),
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
                () => (0, nN.fK)({ channels: p, selectedChannelId: o, selectedVoiceChannelId: d, voiceStates: i }),
                [p, o, d, i],
            );
        if (t === n.voiceChannelsSectionNumber) return (0, r.jsx)(nS, { guildChannels: n, guildChannelsVersion: l });
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
    nz = n(37411);
function nK(e) {
    let { thread: t, tabIndex: n } = e,
        l = (0, nF.YG)(t),
        i = (0, nF.IO)(t),
        s = (0, nH._M)(t);
    return l && i && s ? (0, r.jsx)(nW, { thread: t, tabIndex: n }) : null;
}
function nW(e) {
    let { thread: t, tabIndex: n } = e,
        l = (0, h.bG)([nB.A], () => nB.A.isInChannel(t.id), [t.id]),
        { needSubscriptionToAccess: i } = (0, nV.A)(t.id),
        s = a.useCallback(() => {
            nw.A.handleVoiceConnect({ channel: t, connected: l, needSubscriptionToAccess: i, locked: !1 });
        }, [t, l, i]),
        o = a.useCallback(() => {
            (0, nk.JA)(t, !0, nz.H9.CHANNEL_LIST);
        }, [t]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(ei.m, {
                asContainer: !0,
                text: eA.intl.string(eA.t["96ANUN"]),
                children: (0, r.jsx)(es.D, {
                    className: ep.Xs,
                    onClick: s,
                    tabIndex: n,
                    "aria-label": eA.intl.string(eA.t["96ANUN"]),
                    children: (0, r.jsx)(t7.H, { size: "xs", color: "currentColor", className: ep.gE }),
                }),
            }),
            (0, r.jsx)(ei.m, {
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
var n$ = n(166444),
    nq = n(182637),
    nZ = n(428689),
    nQ = n(525093);
function n0(e) {
    let { total: t, users: n, videoLimit: l } = e;
    return (0, r.jsxs)("div", {
        className: nQ.iE,
        children: [
            (0, r.jsxs)(tl.E, {
                tag: "span",
                color: "text-subtle",
                variant: "body-xs/medium",
                className: eX()(nQ.VV, { [nQ.Ki]: l, [nQ.$G]: n >= 100 }),
                children: [
                    l ? (0, r.jsx)(nZ.VideoIcon, { size: "md", color: "currentColor", className: nQ.LB }) : null,
                    n.toString().padStart(2, "0"),
                ],
            }),
            (0, r.jsx)(tl.E, {
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
    let { channel: t, video: n, userCount: l } = e,
        { limit: i } = (0, nq.A)(t),
        s = -1,
        a = !1;
    return (
        t.userLimit > 0 && (s = t.userLimit),
        n && i > 0 && ((a = s < 0 || i < s), (s = s > 0 ? Math.min(s, i) : i)),
        (0, r.jsx)(n0, { users: l, total: s, videoLimit: a })
    );
}
var n3 = n(146630);
function n6(e) {
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
var n2 = n(588224),
    n9 = n(672812),
    n7 = n(447199);
function n5(e) {
    let { thread: t, countInVoice: n, hasVideo: l, mentionCount: i, isMentionLowImportance: s } = e,
        a = n > 0 && t.userLimit > 0,
        o = nJ(i);
    return a || o
        ? (0, r.jsxs)("div", {
              className: ep.yW,
              children: [
                  a ? (0, r.jsx)(n1, { userCount: n, video: l, channel: t }) : null,
                  o ? (0, r.jsx)(n6, { mentionsCount: i, isMentionLowImportance: s }) : null,
              ],
          })
        : null;
}
function n4(e) {
    let { style: t, withGuildIcon: n, inverted: l } = e,
        i = { className: eX()(n7.GI, { [n7.a7]: n }, { [n7.BJ]: l }), style: t },
        { density: s } = (0, E.wR)();
    switch (s) {
        case "cozy":
            return (0, r.jsxs)("svg", {
                ...i,
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
                ...i,
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
                ...i,
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
    let { thread: t, isSelectedChannel: l, isSelectedVoice: i, isLast: s, withGuildIcon: o } = e,
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
                (0, nk.JA)(t, !e.shiftKey, nz.H9.CHANNEL_LIST);
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
                let l = U.A.getChannel(t.id);
                null != l &&
                    (0, ti.L3)(e, async () => {
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
                        return (t) => (0, r.jsx)(e, { ...t, channel: l });
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
        className: eX()(ep.fx, { [ep.wH]: l }),
        children: [
            (0, r.jsx)(n4, { withGuildIcon: o }),
            s
                ? null
                : (0, r.jsx)(n4, {
                      withGuildIcon: o,
                      inverted: !0,
                      style: { transform: "rotateX(180deg) translateY(-9px)" },
                  }),
            (0, r.jsx)(t6.vN, {
                focusTarget: b,
                ringTarget: b,
                offset: { top: 2, bottom: 2, right: 4 },
                children: (0, r.jsxs)("div", {
                    className: eX()(ep.Ki, n9.iE, n9.ZS, {
                        [n9.J1]: l,
                        [n9.F4]: !l && p,
                        [n9.V2]: !p && !l && g,
                        [n9.lY]: o,
                    }),
                    onMouseDown: E,
                    onContextMenu: N,
                    children: [
                        !g || p || l ? null : (0, r.jsx)("div", { className: eX()(n9.gy, n9.WS) }),
                        (0, r.jsx)(es.D, {
                            ...I,
                            innerRef: b,
                            className: n9.nf,
                            onClick: C,
                            onAuxClick: x,
                            "aria-label": j,
                            focusProps: { enabled: !1 },
                            children: (0, r.jsxs)("div", {
                                className: eX()(n9.Y5, n9.__invalid_threadMainContent),
                                children: [
                                    (0, r.jsx)(tl.E, {
                                        variant: "body-sm/medium",
                                        color: "none",
                                        className: n9.UU,
                                        children: (0, r.jsx)(t0.A, { "aria-hidden": !0, children: m }),
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: n9.Y_,
                                        onClick: n$.dG,
                                        onKeyDown: n$.dG,
                                        children: [
                                            (0, r.jsx)(n5, {
                                                thread: t,
                                                countInVoice: _,
                                                hasVideo: u,
                                                mentionCount: A,
                                                isMentionLowImportance: f,
                                            }),
                                            (0, r.jsx)(nK, { thread: t, tabIndex: I.tabIndex }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(n2.A, {
                channel: t,
                collapsed: !i && 1 !== d.length,
                collapsedMax: 6,
                voiceStates: d,
                isThread: !0,
            }),
        ],
    });
});
var le = n(790782),
    lt = n(191850),
    ln = n(512656),
    ll = n(162052);
let li = { transform: "rotateX(180deg) translateY(-9px)" };
function ls(e) {
    let { projectId: t } = e,
        { label: n, detail: l } = (function (e) {
            let {
                    activity: t,
                    compacting: n,
                    saving: l,
                    publishing: i,
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
                                let l = n[e]
                                    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
                                    .replace(/^\s{0,3}#{1,6}\s+/gm, "")
                                    .replace(/^\s*(?:[-*+]|\d+[.)])\s+/gm, "")
                                    .replace(/[`*~]|__/g, "")
                                    .replace(/\s+/g, " ")
                                    .trim();
                                if ("" === l) continue;
                                if (l.length <= t) return l;
                                let i = l.slice(-t),
                                    s = i.indexOf(" ");
                                return `\u{2026}${-1 !== s && s < t / 4 ? i.slice(s + 1) : i}`;
                            }
                            return null;
                        })(s),
                    [s],
                );
            return { label: (0, ny.Dy)({ activity: t, compacting: n, saving: l, publishing: i }), detail: r };
        })(t);
    return (0, r.jsx)(nb.u, {
        title: null != l ? n : void 0,
        body: l ?? n,
        lineClamp: 4,
        position: "right",
        ariaHidden: !0,
        children: (0, r.jsx)("div", {
            className: ep.yW,
            "aria-hidden": !0,
            children: (0, r.jsx)(nj.y, { type: nj.t.SPINNING_CIRCLE_SIMPLE, className: ln.u1, itemClassName: ln.pu }),
        }),
    });
}
function lr(e) {
    let { projectId: t } = e,
        n = eA.intl.string(lt.default.bWzWw9),
        l = a.useCallback(
            (e) => {
                (e.stopPropagation(), (0, ee.tb)(t));
            },
            [t],
        );
    return (0, r.jsx)(ei.m, {
        text: n,
        ariaHidden: !0,
        children: (0, r.jsx)(es.D, {
            className: ep.Xs,
            onClick: l,
            "aria-label": n,
            children: (0, r.jsx)(er.P, { size: "xs", color: "currentColor", className: ep.gE }),
        }),
    });
}
let la = a.memo(function (e) {
    let { project: t, guildId: l, isLast: i, selected: s } = e,
        o = t.id,
        d = (0, nT.yX)(o),
        u = (0, h.bG)([nD.Ay], () => nD.Ay.getMentionCount(o, le.P.CONJURING_PROJECT), [o]),
        m = "working" === d,
        g = "unread" === d && !s,
        { role: A, ...f } = (0, c.rm)(`conjure-project-${o}`),
        p = a.useRef(null),
        C = a.useCallback(() => (0, nR.A)(o, "project_list"), [o]),
        { onContextMenu: E, importInput: x } = (function (e, t) {
            let l = e.id,
                { onExport: i, onImport: s, importInput: o } = (0, nL.A)(e);
            return {
                onContextMenu: a.useCallback(
                    (e) => {
                        (0, ti.L3)(e, async () => {
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
                            return () => (0, r.jsx)(e, { projectId: l, guildId: t, onExport: i, onImport: s });
                        });
                    },
                    [l, t, i, s],
                ),
                importInput: o,
            };
        })(t, l),
        N = [t.name, m ? eA.intl.string(lt.default["Y8pS+n"]) : g ? eA.intl.string(lt.default["N+3Pzk"]) : null]
            .filter((e) => null != e)
            .join(", ");
    return (0, r.jsxs)("li", {
        role: A,
        className: eX()(ep.fx, ln.nM, { [ep.wH]: s }),
        children: [
            (0, r.jsx)(n4, {}),
            i ? null : (0, r.jsx)(n4, { inverted: !0, style: li }),
            g ? (0, r.jsx)("div", { className: eX()(n9.gy, n9.WS, ln.gy) }) : null,
            (0, r.jsx)(t6.vN, {
                focusTarget: p,
                ringTarget: p,
                offset: { top: 2, bottom: 2, right: 4 },
                children: (0, r.jsx)("div", {
                    className: eX()(ep.Ki, n9.iE, n9.ZS, { [n9.J1]: s, [n9.V2]: g }),
                    children: (0, r.jsx)(es.D, {
                        ...f,
                        innerRef: p,
                        className: n9.nf,
                        onClick: C,
                        onContextMenu: E,
                        "aria-label": N,
                        focusProps: { enabled: !1 },
                        children: (0, r.jsxs)("div", {
                            className: n9.Y5,
                            children: [
                                (0, r.jsx)(nM.A, { project: t, size: "header" }),
                                (0, r.jsx)(tl.E, {
                                    variant: "body-sm/medium",
                                    color: "none",
                                    className: n9.UU,
                                    children: (0, r.jsx)(t0.A, {
                                        "aria-hidden": !0,
                                        className: m ? ll.Hz : void 0,
                                        children: t.name,
                                    }),
                                }),
                                (0, r.jsxs)("div", {
                                    className: n9.Y_,
                                    children: [
                                        m
                                            ? (0, r.jsx)(ls, { projectId: o })
                                            : g
                                              ? (0, r.jsx)("div", {
                                                    className: ep.yW,
                                                    "aria-hidden": !0,
                                                    children: (0, r.jsx)(nU.A, { count: Math.max(1, u) }),
                                                })
                                              : null,
                                        s ? null : (0, r.jsx)(lr, { projectId: o }),
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
function lo(e) {
    let { guildId: t, projects: n } = e,
        l = (0, J.Xj)((0, Y.zy)().pathname);
    return 0 === n.length
        ? null
        : (0, r.jsx)("li", {
              className: n7.kL,
              children: (0, r.jsxs)("ul", {
                  role: "group",
                  "aria-label": eA.intl.string(lt.default.e81UDK),
                  children: [
                      (0, r.jsx)("div", { className: n7.eh }),
                      n.map((e, i) =>
                          (0, r.jsx)(
                              la,
                              { project: e, guildId: t, isLast: i === n.length - 1, selected: e.id === l },
                              e.id,
                          ),
                      ),
                  ],
              }),
          });
}
var ld = n(152367),
    lc = n(844222),
    lu = n(97808),
    lh = n(778712),
    lm = n(866323),
    lg = n(696451),
    lA = n(287809),
    lf = n(562153),
    lp = n(503275),
    lC = n(80682),
    lE = n(617617),
    lx = n(46653),
    lN = n(290863),
    l_ = n(189117),
    lS = n(189714);
let lI = [lx.default, q.Ay, nv.A],
    lb = [q.Ay, lN.A, lE.A];
function lj(e, t) {
    return (
        e.length === t.length &&
        e.every(
            (e, n) => e.userId === t[n].userId && e.projectName === t[n].projectName && e.moreCount === t[n].moreCount,
        )
    );
}
var lv = n(386161);
let lG = { "--custom-collaborator-slot": 0 },
    ly = { "--custom-collaborator-slot": 1 },
    lR = { tension: 280, friction: 26, clamp: !0 },
    lM = { y: -2, scale: 1.05, config: { tension: 300, friction: 22, clamp: !0 } },
    lT = { y: 0, scale: 1, config: { tension: 180, friction: 24 } };
function lL(e) {
    let {
            collaborator: { avatarUrl: t, label: n },
            peekNonce: l,
        } = e,
        [{ y: i, scale: s }, o] = (0, tn.z)(() => ({ y: 0, scale: 1 }), "respect-motion-settings", []);
    return (
        a.useEffect(() => {
            null != l && o({ to: [lM, lT] });
        }, [l, o]),
        (0, r.jsx)(ei.m, {
            text: n,
            ariaHidden: !0,
            children: (0, r.jsxs)(tt.animated.div, {
                className: lv.my,
                role: "img",
                "aria-label": n,
                style: { transform: (0, tt.to)([i, s], (e, t) => `translateY(${e}px) scale(${t})`) },
                children: [
                    (0, r.jsx)("div", { className: lv.hN }),
                    (0, r.jsx)(lu.eu, { src: t, size: lh._3.SIZE_16, "aria-hidden": !0 }),
                ],
            }),
        })
    );
}
function lU(e) {
    let {
            collaborators: { shown: t },
        } = e,
        n = (function (e) {
            let t = a.useContext(lc.C).reducedMotion.enabled,
                [n, l] = a.useState(null),
                i = a.useRef(e);
            a.useEffect(() => {
                i.current = e;
            });
            let s = e.length > 0;
            return (
                a.useEffect(() => {
                    let e;
                    if (t || !s) return;
                    let n = () => {
                        e = setTimeout(
                            () => {
                                (l((e) => {
                                    let t = i.current,
                                        n = t.length > 1 ? t.filter((t) => t !== e?.userId) : t;
                                    return {
                                        userId: n[Math.floor(Math.random() * n.length)],
                                        nonce: (e?.nonce ?? 0) + 1,
                                    };
                                }),
                                    n());
                            },
                            4e3 + 2e3 * Math.random(),
                        );
                    };
                    return (n(), () => clearTimeout(e));
                }, [s, t]),
                n
            );
        })(
            t.map((e) => {
                let { userId: t } = e;
                return t;
            }),
        ),
        l = (0, lm.p)(
            t,
            { keys: (e) => e.userId, from: lG, enter: ly, leave: lG, config: lR },
            "respect-motion-settings",
        );
    return (0, r.jsx)("div", {
        className: lv.CJ,
        children: l((e, t) => {
            let { "--custom-collaborator-slot": l } = e;
            return (0, r.jsx)(tt.animated.div, {
                className: lv.NI,
                style: { "--custom-collaborator-slot": l },
                children: (0, r.jsx)(lL, { collaborator: t, peekNonce: n?.userId === t.userId ? n.nonce : null }),
            });
        }),
    });
}
var lD = n(309010);
function lO(e) {
    var t, n;
    let l,
        i,
        s,
        o,
        d,
        c,
        { guild: u, selected: m } = e,
        g = (0, h.bG)([q.Ay], () => q.Ay.getSelectedProjectId(u.id), [u.id]),
        A = (0, h.bG)([lD.Ay], () => lD.Ay.getChannelId(), []),
        f = (0, h.bG)([w.A], () => w.A.getGuildId(), []),
        p =
            ((n = t = u.id),
            (l = (0, h.yK)(
                lI,
                () =>
                    (function (e) {
                        let t = (0, Q.cR)(e),
                            n = new Set(t.map((e) => e.owner_user_id));
                        for (let e of t)
                            for (let t of nv.A.getMessages(e.id))
                                "user" === t.role && null != t.user_id && n.add(t.user_id);
                        return (n.delete(lx.default.getId()), [...n].slice(0, 25));
                    })(n),
                [n],
            )),
            (i = a.useMemo(() => (l.length > 0 ? { [n]: l } : {}), [n, l])),
            (0, lC.Eq)(i, "ConjureServerWorkingCollaborators"),
            (s = (0, h.bG)(
                lb,
                () => {
                    let e = new Map();
                    for (let t of (0, Q.cR)(n)) (0, lS.j)(lE.A.settings, t.id) || e.set(t.id, t);
                    let t = [];
                    for (let i of l) {
                        let l = new Map(),
                            s = 1 / 0;
                        for (let t of lN.A.getUnfilteredActivities(i, n)) {
                            let n = t.party?.id != null ? e.get(t.party.id) : null;
                            null != n &&
                                (0, l_.$_)(t) &&
                                (l.set(n.id, n.name), (s = Math.min(s, t.timestamps?.start ?? 0)));
                        }
                        let [r] = l.values();
                        null != r && t.push({ userId: i, projectName: r, moreCount: l.size - 1, startedAt: s });
                    }
                    return t
                        .sort((e, t) =>
                            e.startedAt !== t.startedAt
                                ? e.startedAt - t.startedAt
                                : e.userId < t.userId
                                  ? -1
                                  : +(e.userId > t.userId),
                        )
                        .map((e) => {
                            let { userId: t, projectName: n, moreCount: l } = e;
                            return { userId: t, projectName: n, moreCount: l };
                        });
                },
                [n, l],
                lj,
            )),
            (o = a.useMemo(
                () =>
                    s.map((e) => {
                        let { userId: t } = e;
                        return t;
                    }),
                [s],
            )),
            (d = (0, h.yK)([lA.default, lg.Ay], () => o.map((e) => (0, lf.mG)(t, null, lA.default.getUser(e))), [
                t,
                o,
            ])),
            (c = (0, h.yK)([lA.default], () => o.map((e) => lA.default.getUser(e)?.getAvatarURL(t, 16)), [t, o])),
            a.useEffect(() => {
                for (let e of o) (0, lp.Y_)(e);
            }, [o]),
            a.useMemo(() => {
                let e = s.map((e, t) => {
                    let { projectName: n, moreCount: l } = e;
                    return eA.intl.formatToPlainString(lt.default.FZED79, { name: d[t], projectName: n, moreCount: l });
                });
                return {
                    shown: s.slice(0, 3).map((t, n) => {
                        let { userId: l } = t;
                        return { userId: l, avatarUrl: c[n], label: e[n] };
                    }),
                    label:
                        0 === e.length
                            ? null
                            : new Intl.ListFormat(eA.intl.currentLocale, { type: "unit", style: "short" }).format(e),
                };
            }, [s, d, c])),
        C = eA.intl.string(lt.default.uk6jhJ);
    return (0, r.jsx)(ec.G, {
        id: `conjure-${u.id}`,
        renderIcon: (e) =>
            (0, r.jsx)(ld.D, { size: "custom", color: "currentColor", width: 20, height: 20, className: e }),
        text: C,
        "aria-label": null != p.label ? `${C}, ${p.label}` : C,
        trailing: (0, r.jsx)(lU, { collaborators: p }),
        selected: m,
        onClick: () => {
            let e = A === eh.VV.CONJURE && f === u.id;
            (0, eu.pX)(H.BVt.CHANNEL(u.id, eh.VV.CONJURE, null == g || e ? null : g));
        },
    });
}
var lP = n(625903),
    lw = n(283973),
    lV = n(933832),
    lH = n(435183),
    lk = n(698441),
    lB = n(855687),
    lF = n(816662),
    lz = n(446600),
    lK = n(616356);
function lW(e, t, n) {
    return null != t && !!t && !(0, j.ws)(n, e.type);
}
function lY(e, t) {
    return null == t ? ep.fx : e > t ? ep.mU : ep.TR;
}
function lX(e) {
    let {
        channel: t,
        disableManageChannels: n,
        tabIndex: l,
        forceShowButtons: i,
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
        : (0, r.jsx)(ei.m, {
              asContainer: !0,
              text: eA.intl.string(eA.t["3gUsJb"]),
              ariaHidden: !0,
              children: (0, r.jsx)(es.D, {
                  className: eX()(ep.Xs, { [ep.Tf]: i, [ep.bw]: a, [ep.UI]: !a }),
                  onClick: function () {
                      lH.Ay.open(t.id);
                  },
                  tabIndex: l,
                  "aria-label": eA.intl.string(eA.t["3gUsJb"]),
                  focusProps: s ? { offset: 2 } : void 0,
                  children: (0, r.jsx)(lP.SettingsIcon, { size: "xs", color: "currentColor", className: ep.gE }),
              }),
          });
}
function lJ(e) {
    let {
            channel: t,
            isDefaultChannel: l = !1,
            locked: i,
            tabIndex: s,
            forceShowButtons: o,
            shouldEnlargeTargets: d,
            hasChannelInfo: c = !1,
        } = e,
        u = (0, h.bG)([O.A], () => O.A.getGuild(t.getGuildId())),
        m = (0, h.bG)([lz.A], () => lz.A.getStageInstanceByChannel(t.id), [t.id]),
        g = (0, h.bG)([lk.Ay], () => lk.Ay.getActiveEventByChannel(t.id), [t.id]),
        A = (0, h.bG)([P.A], () => (0, lB.K)(P.A, u, t, m)),
        f = (0, h.bG)([], () =>
            t?.type === H.rbe.GUILD_VOICE ? eA.intl.string(eA.t["EE+P0H"]) : eA.intl.string(eA.t["0jeAXt"]),
        ),
        p = a.useRef(null);
    if (i || !A || t.isModeratorReportChannel() || t.isThread()) return null;
    let C = (0, r.jsx)(lw.R, { size: "xs", className: ep.gE, "aria-hidden": !0, color: "currentColor" });
    return (
        l &&
            (C = (0, r.jsx)(nm.A, {
                childRef: p,
                tutorialId: "instant-invite",
                position: "left",
                children: (0, r.jsx)("div", { ref: p, children: C }),
            })),
        (0, r.jsx)(ei.m, {
            asContainer: !0,
            text: f,
            ariaHidden: !0,
            children: (0, r.jsx)(es.D, {
                className: eX()(ep.Xs, { [ep.Tf]: o, [ep.bw]: c, [ep.UI]: !c }),
                onClick: function () {
                    if (null != u) {
                        let e = lK.A.getAllActiveStreams().filter(
                            (e) => e.state !== H.XYD.ENDED && e.channelId === t.id,
                        );
                        (0, I.mM)(async () => {
                            let { default: l } = await Promise.all([
                                n.e(683621),
                                n.e(711162),
                                n.e(159957),
                                n.e(728136),
                                n.e(680029),
                                n.e(966623),
                            ]).then(n.bind(n, 660194));
                            return (n) =>
                                (0, r.jsx)(l, {
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
function l$(e) {
    let { channel: t, shouldEnlargeTargets: n } = e;
    return (0, r.jsx)(ei.m, {
        asContainer: !0,
        text: eA.intl.string(eA.t["ROh4T+"]),
        ariaHidden: !0,
        children: (0, r.jsx)(es.D, {
            className: ep.Xs,
            onClick: function () {
                (0, lF.Ol)(t.guild_id, t.id);
            },
            "aria-label": eA.intl.string(eA.t["ROh4T+"]),
            focusProps: n ? { offset: 2 } : void 0,
            children: (0, r.jsx)(er.P, { size: "xs", color: "currentColor", className: ep.gE }),
        }),
    });
}
function lq(e) {
    let { channel: t, shouldEnlargeTargets: n } = e;
    return (0, r.jsx)(ei.m, {
        asContainer: !0,
        text: eA.intl.string(eA.t["N2c/Un"]),
        ariaHidden: !0,
        children: (0, r.jsx)(es.D, {
            className: ep.Xs,
            onClick: function () {
                (0, lF.jA)(t.guild_id, t.id, !0, { section: H.JJy.CHANNEL_LIST });
            },
            "aria-label": eA.intl.string(eA.t["N2c/Un"]),
            focusProps: n ? { offset: 2 } : void 0,
            children: (0, r.jsx)(lV.CheckmarkLargeIcon, { size: "xs", color: "currentColor", className: ep.gE }),
        }),
    });
}
class lZ extends a.PureComponent {
    static defaultProps = { isDefaultChannel: !1 };
    renderEditButton() {
        return (0, r.jsx)(lX, { ...this.props });
    }
    renderInviteButton() {
        return (0, r.jsx)(lJ, { ...this.props });
    }
    renderRemoveSuggestionButton() {
        return (0, r.jsx)(l$, { ...this.props });
    }
    renderAcceptSuggestionButton() {
        return (0, r.jsx)(lq, { ...this.props });
    }
    getClassName() {
        let { position: e, sortingPosition: t } = this.props;
        return lY(e, t);
    }
    isDisabled() {
        let { channel: e, sorting: t, sortingType: n } = this.props;
        return lW(e, t, n);
    }
}
let lQ = F(function (e) {
    let {
            guild: t,
            selectedChannelId: l,
            position: i,
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
        p = l === A?.id,
        C = (0, t4.Ay)(A),
        E = (0, h.bG)([P.A], () =>
            null != f ? P.A.can(H.xBc.MANAGE_CHANNELS, f) : null != t && P.A.can(H.xBc.MANAGE_CHANNELS, t),
        ),
        x = a.useCallback(
            (e) => {
                null != A &&
                    (0, ti.L3)(e, async () => {
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
    let N = lY(i, c),
        _ = lW(A, o, d),
        S = (0, r.jsx)("div", {
            className: eX()(N, { [ep.r9]: _, [ep.wH]: p }),
            "data-dnd-name": C,
            children: (0, r.jsxs)(n$.Ay, {
                className: ep.Ki,
                channel: A,
                guild: t,
                selected: p,
                onContextMenu: x,
                forceInteractable: !0,
                resolvedUnreadSetting: le.e.ONLY_MENTIONS,
                children: [
                    (0, r.jsx)(lJ, { channel: A, tabIndex: g }),
                    (0, r.jsx)(lX, { channel: A, disableManageChannels: s, tabIndex: g }),
                ],
            }),
        });
    return (E && (S = m(u(S))), S);
});
var l0 = n(34188),
    l1 = n(812095),
    l3 = n(733391),
    l6 = n(832163),
    l2 = n(831024),
    l9 = n(44724),
    l7 = n(849134),
    l5 = n(770178),
    l4 = n(307076);
let l8 = 50;
function ie(e) {
    let { children: t, ref: n } = e,
        [l, i] = a.useState(-1),
        s = a.useCallback((e) => {
            i(e.contentRect.width);
        }, []),
        o = (0, l5.w)(s, [], { fireOnMount: !0 }),
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
                        className: l4.q,
                        style: {
                            transform: d.to(
                                (e) => `translateX(calc(${e * l}px + ${340 * e}px)) translateY(-50%) rotate(45deg)`,
                            ),
                        },
                    }),
                ),
            [t, l, d],
        );
    return (
        a.useImperativeHandle(n, () => ({ onMouseEnter: u, onMouseLeave: h }), [u, h]),
        (0, r.jsx)("div", {
            className: l4.i,
            onMouseEnter: u,
            onMouseLeave: h,
            onFocus: u,
            onBlur: h,
            ref: o,
            style: { "--custom-shine-dimensions": "240px", "--custom-shine-rotated-dimensions-delta": `${l8}px` },
            children: m,
        })
    );
}
var it = n(371794),
    il = n(240248),
    ii = n(998218),
    is = n(427797);
let ir = a.memo(function (e) {
    let { guild: t, selected: l } = e,
        i = a.useRef(null),
        s = a.useRef(null),
        o = (0, I.Rv)(),
        d = (0, h.bG)([eN.A], () => eN.A.hasLayers()),
        c = (0, eE.xr)((e) => e.fullScreenLayers.length > 0);
    a.useEffect(() => {
        (0, l3.Kh)(t.id);
    }, [t.id]);
    let u = (0, h.bG)([l6.A], () => l6.A.getAnnouncement(t.id)),
        m = u?.state === "success" ? u.announcement : void 0,
        [g, A] = (0, ed.x_)(el.M.GAME_SHOP_NEW_BADGE, t.id, m?.id ?? "", void 0, !0),
        f = g === el.M.GAME_SHOP_NEW_BADGE && null != m,
        p = (0, tZ.nY)(t.id),
        C = (0, l2.u)({ surface: "storefront_badge", applicationId: p }),
        E = C?.tooltip,
        x = null;
    (f && (x = eA.intl.string(eA.t.y2b7CA)), null != C && (x = C.text));
    let [N, _] = (0, ed.x_)(el.M.GAME_SHOP_NEW_DROP_POPOVER, t.id, m?.id ?? ""),
        S = N === el.M.GAME_SHOP_NEW_DROP_POPOVER && null != m;
    a.useEffect(() => {
        l && (f && A(em.i.INDIRECT_ACTION), S && _(em.i.INDIRECT_ACTION));
    }, [A, _, l, f, S]);
    let b = a.useCallback(() => {
            (A(em.i.TAKE_ACTION), _(em.i.TAKE_ACTION));
            let e = (0, tZ.mq)(t.id),
                n = l6.A.getStorefrontState(e)?.activePage ?? 0;
            (0, eu.pX)(H.BVt.CHANNELS_GAME_SHOP(t.id, n));
        }, [t.id, A, _]),
        j = a.useCallback(() => {
            (0, l9.X)({ guildId: t.id, forceFetch: S });
        }, [t.id, S]),
        v = a.useCallback(() => {
            _(em.i.USER_DISMISS);
        }, [_]),
        G = a.useCallback(
            (e) => {
                null != t &&
                    (0, ti.L3)(e, async () => {
                        let { default: e } = await n.e(899523).then(n.bind(n, 41614));
                        return (n) => (0, r.jsx)(e, { ...n, guild: t });
                    });
            },
            [t],
        ),
        y = a.useCallback(() => {
            i.current?.onMouseEnter(null, 500);
        }, [i]),
        R = a.useMemo(() => {
            if (null == x) return null;
            let e = (0, r.jsx)(ea.E, { type: { text: x }, variant: "primary" });
            return null != E ? (0, r.jsx)(ei.m, { asContainer: !0, text: E, children: e }) : e;
        }, [x, E]),
        M = a.useCallback(
            (e) =>
                (0, r.jsx)(ec.G, {
                    background: (0, r.jsx)("div", { className: is.D }),
                    innerClassName: is.Z,
                    ref: s,
                    id: `game-shop-${t.id}`,
                    renderIcon: (e) =>
                        (0, r.jsx)(l0.U, {
                            size: "custom",
                            color: "currentColor",
                            width: 20,
                            height: 20,
                            className: e,
                        }),
                    text: (0, r.jsx)(tl.E, {
                        variant: "body-md/medium",
                        className: n9.UU,
                        children: eA.intl.string(eA.t.vyaWs7),
                    }),
                    selected: l,
                    onMouseDown: j,
                    onClick: b,
                    onContextMenu: G,
                    trailing: (0, r.jsxs)(r.Fragment, { children: [R, e] }),
                }),
            [t.id, l, j, b, G, R],
        ),
        T = a.useMemo(() => {
            if (null == m) return null;
            switch (m.type) {
                case "guild-application-announcement": {
                    let e =
                            null != m.assetId
                                ? ii.A.toURLSafe((0, it.YE)(m.applicationId, m.assetId, 256, "webp"))
                                : void 0,
                        t =
                            null != m.backgroundImageAssetId
                                ? ii.A.toURLSafe((0, it.YE)(m.applicationId, m.backgroundImageAssetId, 256, "webp"))
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
                    if ((0, il.uJ)(e) && (0, il.uJ)(t)) return null;
                    return {
                        graphicSource: (0, il.uJ)(e) ? { type: "asset", src: t } : { type: "video", src: e },
                        title: m.popoverTitle,
                        body: (0, l1.M)(m.popoverBody),
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
                    ? (0, r.jsx)(l7.A, {
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
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(ie, { ref: i, children: M }), !o && !d && !c && L()] });
});
var ia = n(740426),
    io = n(826673),
    id = n(591552),
    ic = n(454058);
function iu(e) {
    let { guild: t, selected: l } = e,
        i = (0, tF.A)(t),
        s = (0, io.HX)(el.M.CHANNEL_BROWSER_NEW_BADGE_NUX),
        o = (0, tO.yK)([ic.A], () =>
            Array.from(ic.A.getNewChannelIds(t.id)).filter((e) => ic.A.shouldIndicateNewChannel(t.id, e)),
        ),
        d = (0, tO.bG)([nD.Ay], () => nD.Ay.hasUnread(t.id, le.P.GUILD_ONBOARDING_QUESTION)),
        c = o.length > 2,
        u = (0, tO.bG)([id.A, nD.Ay], () => {
            let e = id.A.lastFetchedAt(t.id),
                n = nD.Ay.lastMessageId(t.id, le.P.GUILD_ONBOARDING_QUESTION);
            if (null == n) return !1;
            let l = tS.default.extractTimestamp(n);
            return null != e && e > l;
        }),
        h = a.useCallback(() => {
            (0, eu.pX)(H.BVt.CHANNEL(t.id, i ? eh.VV.CUSTOMIZE_COMMUNITY : eh.VV.CHANNEL_BROWSER));
        }, [t.id, i]),
        m = a.useCallback(
            (e) => {
                (0, ti.L3)(e, async () => {
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
        (s && !d && !c) || l || u || (g = (0, r.jsx)(ea.E, { type: "new", variant: "primary" })),
        (0, r.jsx)(ec.G, {
            id: `channels-${t.id}`,
            renderIcon: (e) => (0, r.jsx)(ia.k, { size: "md", color: "currentColor", className: e }),
            text: i ? eA.intl.string(eA.t.h9mGOP) : eA.intl.string(eA.t.et6wav),
            selected: l,
            onClick: h,
            onContextMenu: m,
            trailing: g,
        })
    );
}
var ih = n(855473);
function im(e) {
    let { guild: t, selected: n } = e;
    return (0, r.jsx)(ec.G, {
        id: `home-tab-${t.id}`,
        renderIcon: (e) => (0, r.jsx)(ih.Z, { size: "md", color: "currentColor", className: e }),
        text: eA.intl.string(eA.t.VbpLyU),
        selected: n,
        onClick: function () {
            (0, eu.pX)(H.BVt.CHANNEL(t.id, eh.VV.GUILD_HOME));
        },
    });
}
var ig = n(534514),
    iA = n(5373),
    ip = n(65995),
    iC = n(195702);
function iE(e, t) {
    return (0, r.jsx)(tl.E, { variant: "body-xs/semibold", color: "text-default", children: e }, t);
}
let ix = a.memo(function (e) {
    let { guild: t } = e,
        n = (0, h.bG)([tz.h], () => tz.h.getNewMemberActions(t.id), [t.id]),
        l = (0, h.bG)([ip.A], () => ip.A.getCompletedActions(t.id)),
        i = a.useMemo(() => {
            if (null == n || null == l) return 0;
            let e = 0;
            return (
                n.forEach((t) => {
                    null != l[t.channelId] && e++;
                }),
                e
            );
        }, [l, n]),
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
                      className: iC.G9,
                      onClick: function () {
                          (0, eu.pX)(H.BVt.CHANNEL(t.id, eh.VV.GUILD_HOME));
                      },
                      children: [
                          (0, r.jsxs)("div", {
                              className: iC.A1,
                              children: [
                                  (0, r.jsx)(ig.D, {
                                      variant: "heading-xs/semibold",
                                      children: eA.intl.string(eA.t.SnrR3x),
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: iC.Ib,
                                      children: [
                                          (0, r.jsx)(tl.E, {
                                              variant: "body-xs/medium",
                                              color: "text-muted",
                                              className: iC.Cv,
                                              children: eA.intl.format(eA.t.eqZ1lW, {
                                                  numberHook: iE,
                                                  total: s.toString(),
                                                  completed: i.toString(),
                                              }),
                                          }),
                                          (0, r.jsx)(tc.A, {
                                              className: iC.UE,
                                              width: 16,
                                              height: 16,
                                              direction: tc.A.Directions.RIGHT,
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, r.jsx)(iA.i, {
                              className: iC.hr,
                              foregroundGradientColor: [
                                  m.A.unsafe_rawColors.GREEN_300.css,
                                  m.A.unsafe_rawColors.GREEN_230.css,
                              ],
                              percent: (i / s) * 100 + 3,
                              animate: !0,
                          }),
                      ],
                  }),
                  (0, r.jsx)("div", { role: "separator", className: iC.yF }),
              ],
          });
});
var iN = n(581925);
function i_(e) {
    let { guild: t, selected: n } = e;
    return (0, r.jsx)(ec.G, {
        id: `official-messages-page-${t.id}`,
        renderIcon: (e) => (0, r.jsx)(iN.L, { size: "md", color: "currentColor", className: e }),
        text: eA.intl.string(eA.t.xHEzFh),
        selected: n,
        onClick: function () {
            (0, eu.pX)(H.BVt.CHANNEL(t.id, eh.VV.GUILD_OFFICIAL_MESSAGES));
        },
    });
}
var iS = n(514179);
function iI(e) {
    let { guild: t, selected: l } = e;
    return (0, r.jsx)(ec.G, {
        id: `subscriptions-${t.id}`,
        renderIcon: (e) => (0, r.jsx)(iS.A, { className: e }),
        text: eA.intl.string(eA.t["KzCF/6"]),
        selected: l,
        onClick: function () {
            (0, eu.pX)(H.BVt.CHANNEL(t.id, eh.VV.ROLE_SUBSCRIPTIONS));
        },
        onContextMenu: function (e) {
            null != t &&
                (0, ti.L3)(e, async () => {
                    let { default: e } = await n.e(902097).then(n.bind(n, 238312));
                    return (n) => (0, r.jsx)(e, { ...n, guild: t });
                });
        },
    });
}
var ib = n(506774),
    ij = n(149468),
    iv = n(289397),
    iG = n(486418),
    iy = n(575926),
    iR = n(440293),
    iM = n(129230),
    iT = n(634654),
    iL = n(888918);
function iU(e) {
    let { guildId: t, selected: n, handleClick: l } = e,
        i = (0, iR.w)(t),
        s = (0, tO.bG)([O.A], () => O.A.getGuild(t)),
        a = s?.features.has(H.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) === !0,
        o = "false" === ib.w.get(iT.bJ, "false"),
        d = (0, tO.bG)([z.Ay], () => z.Ay.useReducedMotion);
    return (0, r.jsx)(ec.G, {
        id: `shop-${t}`,
        className: eX()(iL.A2, { [iL.wH]: n, [iL.ST]: o }),
        innerClassName: iL.LE,
        renderIcon: (e) => (0, r.jsx)(iy.h, { width: 20, height: 20, className: eX()([e, iL.sV]) }),
        text: eA.intl.string(eA.t.al5EXL),
        selected: n,
        onClick: l,
        trailing: (0, r.jsxs)("div", {
            className: iL.ai,
            children: [
                d
                    ? (0, r.jsx)("div", {
                          className: iL.Ad,
                          children: (0, r.jsx)(ea.E, { type: "new", variant: "primary" }),
                      })
                    : (0, r.jsx)("img", {
                          src: (0, iv.n)("server_products/storefront/money.gif"),
                          className: iL.TG,
                          alt: "",
                      }),
                n &&
                    (0, r.jsx)(es.D, {
                        className: iL.b,
                        onClick: function (e) {
                            (e.stopPropagation(),
                                (0, io.Dr)(el.M.SERVER_SHOP_PHANTOM_PREVIEW),
                                iM.default.track(H.HAw.GUILD_SHOP_PREVIEW_CLICK, {
                                    ...(0, ij.H$)(t),
                                    action_taken: iT.hN.DISMISS_CHANNEL_ROW,
                                }),
                                (i && a) || (0, eu.bG)(H.BVt.CHANNEL(t, tT.A.getDefaultChannel(t)?.id)));
                        },
                        "aria-label": eA.intl.string(eA.t.cpT0Cq),
                        children: (0, r.jsx)(t9.a, { size: "xs", color: "currentColor" }),
                    }),
            ],
        }),
    });
}
function iD(e) {
    let { guild: t, selected: l } = e;
    function i() {
        (ib.w.set(iT.bJ, "true"), (0, eu.pX)(H.BVt.CHANNEL(t.id, eh.VV.GUILD_SHOP)));
    }
    return (0, iG.P)(t)
        ? (0, r.jsx)(iU, { guildId: t.id, selected: l, handleClick: i })
        : (0, r.jsx)(ec.G, {
              id: `shop-${t.id}`,
              renderIcon: (e) => (0, r.jsx)(iy.h, { width: 20, height: 20, className: e }),
              text: eA.intl.string(eA.t.al5EXL),
              selected: l,
              onClick: i,
              onContextMenu: function (e) {
                  null != t &&
                      (0, ti.L3)(e, async () => {
                          let { default: e } = await n.e(852565).then(n.bind(n, 345332));
                          return (n) => (0, r.jsx)(e, { ...n, guild: t });
                      });
              },
          });
}
let iO = a.memo(function (e) {
    let { channel: t, selectedChannel: n, selectedVoiceChannelId: l, sortedThreadIds: i, withGuildIcon: s } = e,
        a = (0, t4.Ay)(t),
        { density: o } = (0, E.wR)(),
        d = (0, h.yK)([U.A], () => i.map((e) => U.A.getChannel(e)).filter(tN.Vq), [i]),
        c = (0, h.bG)([tx.Ay], () => {
            let e = d[d.length - 1];
            if (null == e) return 0;
            let t = tx.Ay.getVoiceStates(e.guild_id)[e.id];
            return null == t || 0 === t.length ? 0 : l !== e.id ? 40 : 32 * t.length + 8;
        });
    return (0, r.jsx)("li", {
        className: n7.kL,
        children: (0, r.jsxs)("ul", {
            role: "group",
            "aria-label": eA.intl.formatToPlainString(eA.t.EiyIi6, { channelName: a }),
            children: [
                (0, r.jsx)("div", {
                    className: eX()(n7.eh, { [n7.ET]: s }),
                    style: { bottom: ("cozy" === o ? 28 : 24) + c },
                }),
                d.map((e, t) =>
                    (0, r.jsx)(
                        n8,
                        {
                            thread: e,
                            isSelectedChannel: n?.id === e.id,
                            isSelectedVoice: l === e.id,
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
var iP = n(265872),
    iw = n(367513),
    iV = n(296216),
    iH = n(657043),
    ik = n(963027),
    iB = n(202384),
    iF = n(51758),
    iz = n(139033),
    iK = n(305866),
    iW = n(123292),
    iY = n(830215),
    iX = n(315982),
    iJ = n(480900),
    i$ = n(557722),
    iq = n(834942),
    iZ = n(53516),
    iQ = n(648580),
    i0 = (((i = {})[(i.VOICE = 0)] = "VOICE"), i);
let i1 = function (e) {
    let { type: t, guildId: l, closePopout: i } = e,
        s = (0, en.GV)(),
        a = (0, h.bG)([iq.A], () => iq.A.getCheck(l), [l]),
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
                        notPhoneVerified: l,
                        notEmailVerified: i,
                        newMember: s,
                        newAccount: r,
                        missingVerificationRole: a,
                        verificationRole: o,
                    } = t;
                return n
                    ? { header: e, body: eA.intl.string(eA.t.IRxUlG), buttonText: eA.intl.string(eA.t.fiNVin) }
                    : l
                      ? { header: e, body: eA.intl.string(eA.t.vW8iUF), buttonText: eA.intl.string(eA.t["50gfOv"]) }
                      : i
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
        : (0, r.jsxs)(iK.l, {
              className: iQ.kL,
              "aria-labelledby": s,
              children: [
                  (0, r.jsx)("img", { alt: "", className: iQ.Sl, src: n(303528) }),
                  (0, r.jsxs)("div", {
                      className: iQ.Qs,
                      children: [
                          (0, r.jsx)(ig.D, { variant: "heading-sm/semibold", id: s, children: g }),
                          (0, r.jsx)(tl.E, { color: "text-default", variant: "body-sm/normal", children: A }),
                          (0, r.jsxs)("div", {
                              className: iQ.UD,
                              children: [
                                  null != f
                                      ? (0, r.jsx)("div", {
                                            "data-button-hoisted-classname-wrapper": !0,
                                            className: iQ.FS,
                                            children: (0, r.jsx)(t1.$, {
                                                variant: "primary",
                                                text: f,
                                                onClick: function () {
                                                    (o
                                                        ? iX.R()
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
                                                                            reason: i$.d.GUILD_PHONE_REQUIRED,
                                                                            ...t,
                                                                        });
                                                                },
                                                                { modalKey: iZ.V },
                                                            )
                                                          : d
                                                            ? (iY.A.verifyResend(),
                                                              (0, iz.A)({
                                                                  title: eA.intl.string(eA.t.LykQYk),
                                                                  subtitle: eA.intl.format(eA.t.azKEPy, {
                                                                      email: lA.default.getCurrentUser()?.email,
                                                                  }),
                                                              }))
                                                            : u && null != m && (0, iJ.b)(m, l),
                                                        i());
                                                },
                                            }),
                                        })
                                      : null,
                                  o || c || d
                                      ? (0, r.jsx)(iW.Q, {
                                            onClick: i,
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
var i3 = n(824865),
    i6 = n(378570),
    i2 = n(129095),
    i9 = n(113783),
    i7 = n(96566),
    i5 = n(312006),
    i4 = n(505543),
    i8 = n(994500),
    se = n(685399),
    st = n(475889),
    sn = n(693879),
    sl = n(435470),
    si = n(35275),
    ss = n(300596);
function sr(e) {
    let { locked: t } = e;
    return (0, r.jsx)("div", {
        className: eX()(ep.Xs, ss.U),
        children: (0, r.jsx)(si.A, {
            className: ep.gE,
            color: t ? m.A.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css : void 0,
        }),
    });
}
var sa = n(863005),
    so = n(669715),
    sd = n(769015),
    sc = n(217223);
function su(e) {
    let { className: t, embeddedApps: n, muted: l } = e;
    if (n.length <= 0) return null;
    {
        if (1 === n.length)
            return (0, r.jsx)("div", {
                className: eX()(sc.kL, t, l && sc.F4),
                children: (0, r.jsx)(sd.A, { game: n[0].application, className: sc.wK }),
            });
        let e = n.length - 1;
        return (0, r.jsxs)("div", {
            className: eX()(sc.kL, t, l && sc.F4),
            children: [
                (0, r.jsx)(sd.A, { game: n[0].application, className: sc.wK }),
                2 === n.length
                    ? (0, r.jsx)(sd.A, { game: n[1].application, className: sc.wK })
                    : (0, r.jsx)(tl.E, {
                          className: sc.ju,
                          variant: "body-xs/semibold",
                          color: "interactive-text-active",
                          children: `+${e}`,
                      }),
            ],
        });
    }
}
var sh = n(905695);
function sm(e) {
    let {
            channel: t,
            isChannelSelected: n,
            isChannelCollapsed: l,
            voiceStates: i,
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
        f = (0, se.Ay)(t),
        p = (0, h.bG)([P.A], () => !P.A.can(H.xBc.CONNECT, t)),
        C = (0, st.H)(t),
        E = (0, h.bG)([nB.A], () => nB.A.hasVideo(t.id)),
        x = (0, i7.qT)(t.id) && t.isGuildStageVoice(),
        N = (function (e) {
            let { channel: t, locked: n, video: l, selected: i } = e;
            return (
                (function (e) {
                    let { channel: t, video: n, considerMaxStageVoiceUserLimit: l = !0 } = e,
                        { limit: i } = (0, nq.A)(t),
                        s = -1;
                    return (t.userLimit > 0 && (s = t.userLimit),
                    n && i > 0 && (s = s > 0 ? Math.min(s, i) : i),
                    l && 1e4 === s)
                        ? 0
                        : s;
                })({ channel: t, video: l }) > 0 &&
                !n &&
                !i
            );
        })({ channel: t, locked: p, video: (E || x) && null == C, selected: n }),
        _ = (0, h.bG)([sa.A], () => sa.A.getNewThreadCount(t.guild_id, t.id)),
        S = (0, sl.ed)(t.guild_id, t.id),
        I = (0, h.bG)([O.A], () => O.A.getGuild(t.guild_id)?.features.has(H.GuildFeatures.COMMUNITY) ?? !1);
    if (nJ(g)) return (0, r.jsx)(n6, { mentionsCount: g, isMentionLowImportance: A });
    if (o) return (0, r.jsx)(sr, { locked: d });
    if (c) return (0, r.jsx)(ea.E, { type: "new", variant: "primary" });
    if (!u && m === le.e.ALL_MESSAGES && t.isForumLikeChannel() && null != _ && _ > 0)
        return (0, r.jsx)(tl.E, {
            variant: "body-xs/semibold",
            color: "text-brand",
            className: sh.O,
            children: eA.intl.format(eA.t.GkAbqY, { count: (0, eI.Gu)(_) }),
        });
    if (!u && t.isForumLikeChannel() && null != S && S > 0)
        return (0, r.jsx)(tl.E, { variant: "body-xs/semibold", color: "text-muted", children: (0, eI.Gu)(S) });
    let b = i?.length ?? 0;
    return null != s && s && N
        ? (0, r.jsx)(n1, { userCount: b, video: E || x, channel: t })
        : l && (0, so.t)(i) && I
          ? (0, r.jsx)(ea.E, { type: { text: eA.intl.string(eA.t.dI3q4h) }, variant: "notification" })
          : null != C
            ? (0, r.jsx)(sn.z, { textColor: "text-feedback-positive", entry: { start: C } })
            : null != a && a && f.length > 0
              ? (0, r.jsx)(su, { embeddedApps: f, muted: u })
              : null;
}
var sg = n(714619);
let sA = F(
    (0, iV.F)(
        class extends lZ {
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
                        unverifiedAccount: l,
                        isSuggestedSection: i,
                        openChatOnClick: s,
                    } = this.props,
                    r = e.getGuildId();
                (null != r && (0, iF.V)(r) && (0, iB.Ze)(r),
                    l && this.setState({ shouldShowGuildVerificationPopout: !0 }),
                    t ||
                        n ||
                        e.isRoleSubscriptionTemplatePreviewChannel() ||
                        (s ? iw.A.updateChatOpen(e.id, !0) : (0, i2.av)(e)),
                    __OVERLAY__ || (0, i6.iN)(e.id, i ? { source: i3.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0));
            };
            handleClickChat = () => {
                let { channel: e, locked: t, isSuggestedSection: n } = this.props;
                __OVERLAY__ || t || (0, i6.iN)(e.id, n ? { source: i3.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
            };
            handleContextMenu = (e) => {
                let { channel: t } = this.props,
                    l = O.A.getGuild(t.getGuildId());
                null != l &&
                    (0, ti.L3)(e, async () => {
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
                        return (n) => (0, r.jsx)(e, { ...n, channel: t, guild: l });
                    });
            };
            renderVoiceUsers() {
                let { channel: e, collapsed: t, tabIndex: n, speakerVoiceStates: l, numAudience: i } = this.props;
                return (0, r.jsx)(n2.A, { channel: e, voiceStates: l, collapsed: t, tabIndex: n, numAudience: i });
            }
            renderPopout = () => {
                let { channel: e } = this.props,
                    { shouldShowGuildVerificationPopout: t } = this.state;
                if (t)
                    return (0, r.jsx)(i1, {
                        type: i0.VOICE,
                        guildId: e.guild_id,
                        closePopout: this.closeGuildVerificationPopout,
                    });
                throw Error("VoiceChannel.renderPopout: There must always be something to render");
            };
            renderOpenChatButton = () => {
                let { channel: e, locked: t, forceShowButtons: n } = this.props;
                if (!t)
                    return (0, r.jsx)(ei.m, {
                        asContainer: !0,
                        text: eA.intl.string(eA.t.ZXxLQg),
                        children: (0, r.jsx)(es.D, {
                            className: eX()(ep.Xs, n ? ep.Tf : null),
                            onClick: () => {
                                (iw.A.updateChatOpen(e.id, !0), this.handleClickChat());
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
                        locked: l,
                        connectChannelDropTarget: i,
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
                        "data-dnd-name": (0, t4.m1)(e, lA.default, i8.A),
                        children: [
                            (0, r.jsx)(iP.Y, {
                                targetElementRef: this.channelItemRef,
                                position: "right",
                                renderPopout: this.renderPopout,
                                spacing: 17,
                                onRequestClose: this.closeGuildVerificationPopout,
                                shouldShow: C,
                                children: () =>
                                    (0, r.jsx)(ei.m, {
                                        text: E,
                                        children: (0, r.jsxs)(n$.Ay, {
                                            ref: this.channelItemRef,
                                            className: ep.Ki,
                                            disableOverflowTooltip: null != E,
                                            iconClassName: eX()({ [sg.G]: null != u }),
                                            channel: e,
                                            selected: !p && t,
                                            connected: n,
                                            unread: n ? g : void 0,
                                            resolvedUnreadSetting: A,
                                            mentionCount: f,
                                            locked: l,
                                            onClick: () => {
                                                this.handleClick();
                                            },
                                            onContextMenu: (e) => {
                                                this.handleContextMenu(e);
                                            },
                                            connectDragPreview: o,
                                            subtitle: this.renderSubtitle({ disableTooltips: null != E }),
                                            isFavoriteSuggestion: p,
                                            "aria-label": (0, ik.Ay)({
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
                return (c && (x = a(x)), d && (x = i(s(x))), x);
            }
        },
    ),
);
function sf(e) {
    var t;
    let n,
        l,
        { guild: i, channel: s, disableSorting: a, isFavoriteCategory: o, collapsed: d, voiceStates: c } = e,
        u = (0, h.cf)([nD.Ay], () => ({ unread: nD.Ay.hasUnread(s.id), mentionCount: nD.Ay.getMentionCount(s.id) })),
        m = (0, h.bG)([V.Ay], () => V.Ay.resolveUnreadSetting(s)),
        g = (0, h.cf)([U.A, iq.A, P.A], () => {
            let e = U.A.getChannel(s.parent_id),
                t = iq.A.getCheck(s.guild_id);
            return {
                canManageChannel: null != i && P.A.can(H.xBc.MANAGE_CHANNELS, s),
                canReorderChannel:
                    !0 !== a &&
                    ((0, M.ai)(i.id) ||
                        (null != e ? P.A.can(H.xBc.MANAGE_CHANNELS, e) : P.A.can(H.xBc.MANAGE_CHANNELS, i))),
                canMoveMembers: P.A.can(H.xBc.MOVE_MEMBERS, s),
                locked: !P.A.can(H.xBc.CONNECT, s),
                bypassLimit: P.A.can(H.xBc.MOVE_MEMBERS, s),
                unverifiedAccount: !t.canChat,
            };
        }),
        A = (0, h.bG)([L.A], () => L.A.isCollapsed(s.parent_id)),
        f =
            ((t = s.id),
            (n = (0, i4.A)(t)),
            (l = (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return (0, h.cf)(
                    [i5.Ay, lx.default],
                    () => {
                        let n = lx.default.getId();
                        return i5.Ay.getPermissionsForUser(n, e, t);
                    },
                    [e, t],
                );
            })(t, !0).moderator),
            !n && l ? 1 : 0),
        p = (0, h.bG)([lz.A], () => lz.A.getStageInstanceByChannel(s.id), [s.id]),
        C = (0, i9.zy)(s.id, tb.ip.AUDIENCE),
        { isSubscriptionGated: E, needSubscriptionToAccess: x } = (0, nV.A)(s.id),
        N = (0, h.bG)([V.Ay], () => V.Ay.isFavorite(i.id, s.id)),
        _ = (0, i7.xn)(s.id),
        S = sm({
            channel: s,
            isChannelSelected: !1,
            isChannelCollapsed: d,
            voiceStates: c,
            isSubscriptionGated: E,
            needSubscriptionToAccess: x,
            enableConnectedUserLimit: _ || (s.userLimit > 0 && s.userLimit < 1e4),
        }),
        I = e.connected && null == S,
        b = i.features.has(H.GuildFeatures.INTERNAL_EMPLOYEE_ONLY),
        j = (0, iH.BX)("StageChannel");
    return (0, r.jsx)(sA, {
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
function sp(e, t) {
    let n = t.getGuildId();
    if (null == n) throw Error("TextChannel, preloadChannel: Channel does not have a guildId");
    nO.A.preload(n, t.id);
}
let sC = F(
        class extends lZ {
            handleContextMenu = (e) => {
                let { channel: t } = this.props,
                    l = O.A.getGuild(t.getGuildId());
                null != l &&
                    (0, ti.L3)(e, async () => {
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
                        return (n) => (0, r.jsx)(e, { ...n, channel: t, guild: l });
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
                        connectChannelDragSource: l,
                        connectDragPreview: i,
                        canReorderChannel: s,
                    } = this.props,
                    a = (0, r.jsx)("li", {
                        className: eX()(this.getClassName(), { [ep.r9]: this.isDisabled() }),
                        "data-dnd-name": (0, t4.m1)(e, lA.default, i8.A),
                        children: (0, r.jsxs)(n$.Ay, {
                            className: ep.Ki,
                            channel: e,
                            selected: t,
                            onClick: this.handleClick,
                            onMouseDown: sp,
                            onContextMenu: this.handleContextMenu,
                            connectDragPreview: s ? i : null,
                            "aria-label": (0, ik.Ay)({ channel: e }),
                            resolvedUnreadSetting: le.e.ONLY_MENTIONS,
                            children: [this.renderInviteButton(), this.renderEditButton()],
                        }),
                    });
                return s ? n(l(a)) : a;
            }
        },
    ),
    sE = a.memo(function (e) {
        let { channel: t, guild: n, disableSorting: l } = e,
            i = (0, h.cf)([U.A, P.A], () => {
                let e = U.A.getChannel(t.parent_id);
                return {
                    canManageChannel: P.A.can(H.xBc.MANAGE_CHANNELS, t),
                    canReorderChannel:
                        !0 !== l && null != e ? P.A.can(H.xBc.MANAGE_CHANNELS, e) : P.A.can(H.xBc.MANAGE_CHANNELS, n),
                };
            }),
            s = (0, iH.BX)("StoreChannel");
        return (0, r.jsx)(sC, { ...i, ...e, shouldEnlargeTargets: s });
    });
var sx = n(811024),
    sN = n(323073),
    s_ = n(911040);
function sS(e) {
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
var sI = n(967165),
    sb = n(730602),
    sj = n(956518),
    sv = n(627363),
    sG = n(982844),
    sy = n(197184),
    sR = n(288254),
    sM = n(91242),
    sT = n(165610),
    sL = n(495867),
    sU = n(56059),
    sD = n(163328),
    sO = n(730134),
    sP = n(707539),
    sw = n(486020),
    sV = n(98098);
function sH(e) {
    let { channel: t } = e,
        l = (0, h.yK)([sa.A, nD.Ay, P.A], () => {
            let e = sa.A.getActiveJoinedRelevantThreadsForParent(t.guild_id, t.id);
            return d()(sa.A.getActiveJoinedThreadsForParent(t.guild_id, t.id))
                .values()
                .map((e) => e.channel)
                .concat(d().values(sa.A.getActiveUnjoinedThreadsForParent(t.guild_id, t.id)))
                .filter((t) => !(t.id in e) && P.A.can(H.xBc.VIEW_CHANNEL, t))
                .sort((e, t) => {
                    let n = nD.Ay.lastMessageId(e.id),
                        l = nD.Ay.lastMessageId(t.id);
                    return tS.default.compare(n, l);
                })
                .reverse()
                .value();
        }),
        i = t.isForumLikeChannel() ? 5 : 3,
        s = t.isForumLikeChannel() ? sU.b : sD.y;
    return (
        a.useEffect(() => {
            (0, sP.TE)();
        }, []),
        (0, r.jsxs)("div", {
            className: sV.SW,
            children: [
                (0, r.jsx)(tl.E, {
                    variant: "body-sm/medium",
                    color: "text-muted",
                    className: sV.DD,
                    children: t.isForumLikeChannel() ? eA.intl.string(eA.t.ioVdO2) : eA.intl.string(eA.t.VNYs2v),
                }),
                (0, r.jsxs)("div", {
                    className: sV.p_,
                    children: [
                        l
                            .slice(0, t.isForumLikeChannel() ? l.length : i)
                            .map((e) => (0, r.jsx)(sk, { thread: e }, e.id))
                            .filter((e) => a.isValidElement(e))
                            .slice(0, i),
                        (0, r.jsxs)(es.D, {
                            className: sV.nM,
                            onClick: function () {
                                t.isForumLikeChannel()
                                    ? (0, i6.iN)(t.id)
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
                                    className: sV.R4,
                                    children: (0, r.jsx)(s, { size: "custom", className: sV.Kk }),
                                }),
                                (0, r.jsx)("div", {
                                    className: sV.Pf,
                                    children: (0, r.jsx)(tl.E, {
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
function sk(e) {
    let { thread: t } = e,
        n = (0, h.bG)([lA.default], () => lA.default.getUser(t.ownerId)),
        l = (0, sP.JO)(t);
    return (0, r.jsxs)(es.D, {
        className: sV.nM,
        onClick: function (e) {
            (0, nk.JA)(t, t.isForumPost() ? e.shiftKey : !e.shiftKey, nz.H9.POPOUT);
        },
        children: [
            (0, r.jsx)("div", {
                className: sV.R4,
                children:
                    null == n
                        ? (0, r.jsx)("img", {
                              className: sV.my,
                              src: sw.Ay.getDefaultAvatarURL(void 0, void 0),
                              alt: "",
                          })
                        : (0, r.jsx)(sO.A, { className: sV.my, user: n, size: lh._3.SIZE_16 }),
            }),
            (0, r.jsxs)("div", {
                className: sV.Pf,
                children: [
                    (0, r.jsx)(tl.E, { className: sV.UU, variant: "body-sm/normal", color: "none", children: t.name }),
                    (0, r.jsx)(tl.E, { variant: "body-sm/normal", color: "text-muted", children: "\u2022" }),
                    (0, r.jsx)(tl.E, {
                        className: sV.vE,
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: (0, sP.aK)(l),
                    }),
                ],
            }),
        ],
    });
}
var sB = n(70688),
    sF = n(947162);
function sz(e) {
    let { frameId: t } = e;
    return (0, r.jsx)(ei.m, {
        asContainer: !0,
        text: eA.intl.string(eA.t.VkMnR2),
        children: (0, r.jsx)(es.D, {
            className: ep.Xs,
            onClick: () => (0, sF.A)(t),
            "aria-label": eA.intl.string(eA.t.VkMnR2),
            children: (0, r.jsx)(sB.DoorExitIcon, { size: "xs", color: "currentColor", className: ep.gE }),
        }),
    });
}
var sK = n(664699);
function sW(e) {
    let { channel: t, isSuggestedSection: n } = e;
    return (0, r.jsx)(ei.m, {
        asContainer: !0,
        text: eA.intl.string(eA.t.ZXxLQg),
        children: (0, r.jsx)(es.D, {
            className: ep.Xs,
            onClick: () => (0, sK.A)(t, n ? i3.A.CHANNEL_LIST_SUGGESTED_SECTION : void 0),
            "aria-label": eA.intl.string(eA.t.ZXxLQg),
            children: (0, r.jsx)(nP.ChatIcon, { size: "xs", color: "currentColor", className: ep.gE }),
        }),
    });
}
var sY = n(95362),
    sX = n(302959),
    sJ = n(961272),
    s$ = n(913659),
    sq = n(427262),
    sZ = n(641635);
let sQ = nC.DN.SIZE_24;
function s0(e) {
    let { activity: t, embeddedApp: n } = e,
        l = t?.assets,
        i = t?.application_id;
    if (null == l || (null == l.large_image && null == l.small_image)) {
        let e = sw.Ay.getApplicationIconURL({ id: n.application.id, icon: n.application.icon }),
            t = n.application.name;
        return (0, r.jsx)(ei.m, {
            text: t,
            position: "top",
            asContainer: !0,
            children: (0, r.jsx)("img", { alt: t, src: e, className: sZ.P3 }),
        });
    }
    let s = l.large_image ?? l.small_image;
    return null != s
        ? (0, r.jsx)("img", { alt: l.large_text ?? "", src: (0, s$.uD)(i, s, [128, 128]), className: sZ.P3 })
        : null;
}
function s1(e) {
    let { activity: t, embeddedApp: n, channel: l } = e,
        i = Array.from(n.embeddedActivity.userIds),
        s = (0, h.yK)([lA.default], () => i.map((e) => lA.default.getUser(e)).filter(tN.Vq));
    return (0, r.jsx)("div", {
        className: sZ.ec,
        children: (0, r.jsxs)("div", {
            className: sZ.Wh,
            children: [
                (0, r.jsx)(s0, { activity: t, embeddedApp: n }),
                (0, r.jsxs)("div", {
                    className: sZ.X0,
                    children: [
                        (0, r.jsx)(ig.D, {
                            variant: "heading-xs/semibold",
                            color: "text-strong",
                            className: sZ.wx,
                            lineClamp: 1,
                            children: n.application.name,
                        }),
                        t?.details != null &&
                            "" !== t.details &&
                            (0, r.jsx)(tl.E, {
                                variant: "body-xs/normal",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.details,
                            }),
                        t?.state != null &&
                            "" !== t.state &&
                            (0, r.jsx)(tl.E, {
                                variant: "body-xs/normal",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.state,
                            }),
                        i.length > 0 &&
                            (0, r.jsx)(nC.Ay, {
                                className: sZ.TN,
                                guildId: l.guild_id,
                                users: s,
                                size: sQ,
                                max: 7,
                                renderUser: function (e) {
                                    if (null == e || e === nC.mt) return null;
                                    let t = sq.Ay.getName(e);
                                    return (0, r.jsx)(
                                        ei.m,
                                        {
                                            asContainer: !0,
                                            text: t,
                                            position: "bottom",
                                            children: (0, r.jsx)("img", {
                                                src: e.getAvatarURL(l.guild_id, sQ),
                                                alt: t,
                                                className: sZ.my,
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
var s3 = n(584960);
function s6(e) {
    let { channel: t, presenceActivity: n, embeddedApp: l, onAction: i } = e,
        s = Array.from(l.embeddedActivity.userIds),
        a = (0, h.bG)([lA.default], () => lA.default.getUser(s[0]));
    return null == a
        ? null
        : (0, r.jsxs)("div", {
              className: s3.Eb,
              children: [
                  (0, r.jsx)("div", {
                      className: s3.Il,
                      children: (0, r.jsx)(s1, { activity: n, embeddedApp: l, channel: t }),
                  }),
                  (0, r.jsx)("div", {
                      className: s3.M4,
                      children: (0, r.jsx)(sJ.A, {
                          type: sX.M.VOICE_CHANNEL,
                          activity: n,
                          embeddedActivity: l.embeddedActivity,
                          user: a,
                          guildId: t.getGuildId(),
                          channelId: t.id,
                          buttonVariant: "primary",
                          onAction: i,
                      }),
                  }),
              ],
          });
}
var s2 = n(713654),
    s9 = n(744399);
function s7(e) {
    let { channel: t } = e,
        n = (0, h.bG)([O.A], () => O.A.getGuild(t.guild_id)),
        l = (0, t4.Ay)(t),
        i = (0, s2.gU)(t, n);
    return null == i
        ? null
        : (0, r.jsxs)("div", {
              className: s9.hY,
              children: [
                  (0, r.jsx)(i, { className: s9.p }),
                  (0, r.jsx)(tl.E, {
                      variant: "body-md/semibold",
                      color: "interactive-text-default",
                      className: s9.HA,
                      children: l,
                  }),
              ],
          });
}
var s5 = n(220650);
function s4(e) {
    let { channel: t, onAction: n } = e,
        l = (0, se.Ay)(t),
        i = Array.from((0, se.Rz)(l).values());
    return 0 === i.length
        ? null
        : (0, r.jsxs)(sY.Ip, {
              className: s5.kL,
              children: [
                  (0, r.jsx)("div", { className: s5.oT, children: (0, r.jsx)(s7, { channel: t }) }),
                  (0, r.jsx)("div", { className: s5.zN }),
                  i.map((e, l) =>
                      (0, r.jsx)(
                          s6,
                          { embeddedApp: e, presenceActivity: e.presenceActivity ?? void 0, channel: t, onAction: n },
                          l,
                      ),
                  ),
              ],
          });
}
let s8 = F(
    class extends lZ {
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
            let t, n, l;
            (this.handleActivitiesPopoutClose(), this.handleThreadsPopoutClose());
            let { channel: i } = this.props,
                s = i.getGuildId();
            (nO.A.preload(s ?? H.ME, i.id),
                (e = i.id),
                (t = U.A.getChannel(e)),
                (n = t?.application_id),
                (l = t?.type === H.rbe.GUILD_APP ? (0, sT.HD)(t) : null),
                null == t ||
                    null == n ||
                    null == l ||
                    null != sM.A.getFrame((0, sT.VA)(n, l)) ||
                    !P.A.can(H.xBc.VIEW_CHANNEL, t) ||
                    (0, sN.qR)(t) ||
                    (0, sR.BV)(t) ||
                    (null != (0, sj.Ay)(n) &&
                        ((0, sb.M)(n, (0, sy.A)(l), l.type),
                        (0, sG.A)(n).catch(H.tEg),
                        sv.YY.fetchMany([n]).catch(H.tEg))));
        };
        renderPopout = (e) => {
            let { channel: t, sorting: n, embeddedApps: l, channelIsContentGated: i } = this.props,
                { shouldShowActivities: s } = this.state;
            return t.isModeratorReportChannel() || i
                ? null
                : null != l && l.length > 0 && s && !n
                  ? (0, r.jsx)(s4, { onAction: this.handleActivitiesPopoutClose, channel: t })
                  : (0, r.jsx)(sH, { ...e, channel: this.props.channel });
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
                return void (0, ti.L3)(e, async () => {
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
                let l = lA.default.getUser(t.getRecipientId());
                null != l &&
                    (0, ti.L3)(e, async () => {
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
                        return (n) => (0, r.jsx)(e, { ...n, user: l, channel: t, showModalItems: !1 });
                    });
                return;
            }
            if (t.isModeratorReportChannel())
                return void (0, ti.L3)(e, async () => {
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
            let l = O.A.getGuild(t.getGuildId());
            null != l &&
                (0, ti.L3)(e, async () => {
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
                    return (n) => (0, r.jsx)(e, { ...n, channel: t, guild: l });
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
                    muted: l,
                    unread: i,
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
                v = sS(A),
                G = x ? { source: i3.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
                y = (0, ik.Ay)({
                    channel: e,
                    unread: i,
                    mentionCount: o,
                    isSubscriptionGated: m,
                    embeddedActivitiesCount: p?.length,
                }),
                R = (0, r.jsxs)("li", {
                    className: eX()(this.getClassName(), { [ep.r9]: this.isDisabled(), [ep.wH]: n }),
                    "data-dnd-name": (0, t4.m1)(e, lA.default, i8.A),
                    onMouseEnter: a || j ? this.handleMouseEnter : void 0,
                    onMouseLeave: a || j ? this.handleMouseLeave : void 0,
                    children: [
                        (0, r.jsx)(iP.Y, {
                            targetElementRef: this.channelItemRef,
                            position: "right",
                            renderPopout: this.renderPopout,
                            onRequestClose: this.handleClosePopout,
                            spacing: 17,
                            shouldShow:
                                (a && this.state.shouldShowThreadsPopout) || (j && this.state.shouldShowActivities),
                            children: () =>
                                (0, r.jsxs)(n$.Ay, {
                                    ref: this.channelItemRef,
                                    className: ep.Ki,
                                    channel: e,
                                    guild: t,
                                    selected: !g && n,
                                    muted: l,
                                    unread: i,
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
                                                    null != _ ? (0, r.jsx)(sz, { frameId: _ }) : null,
                                                    this.renderChannelInfo(),
                                                    e.type === H.rbe.GUILD_APP
                                                        ? (0, r.jsx)(sW, { channel: e, isSuggestedSection: x })
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
                            : (0, r.jsx)(sI.A, {
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
function re(e) {
    let { channel: t, guild: n, disableSorting: l, isFavoriteCategory: i, muted: s, selected: a } = e,
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
                    !0 !== l &&
                    ((0, M.ai)(n.id) ||
                        (null != e ? P.A.can(H.xBc.MANAGE_CHANNELS, e) : P.A.can(H.xBc.MANAGE_CHANNELS, n))),
            };
        }),
        g = (0, h.bG)([ic.A], () => ic.A.shouldIndicateNewChannel(n.id, t.id)),
        { needSubscriptionToAccess: A, isSubscriptionGated: f } = (0, nV.A)(t.id),
        p = (0, h.bG)([V.Ay], () => V.Ay.isFavorite(n.id, t.id)),
        C = (0, sN.ni)(t),
        E = (0, sx.Gp)(t.id),
        x = sm({
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
        N = (0, se.Ay)(t),
        _ = (0, h.bG)([sL.A, lg.Ay], () => sL.A.getChannelId() !== t.id && lg.Ay.isCurrentUserGuest(t.getGuildId())),
        S = (0, iH.BX)("ConnectedTextChannel"),
        { frameId: I, runningLabel: b } = (0, s_.A)(t);
    return _
        ? null
        : (0, r.jsx)(s8, {
              ...c,
              ...m,
              ...e,
              hasActiveThreads: o,
              hasMoreActiveThreads: d,
              isSubscriptionGated: f,
              needSubscriptionToAccess: A,
              isNewChannel: g && e.canBeNewChannel,
              isFavoriteSuggestion: i && !p,
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
var rt = n(900797),
    rn = n(636585),
    rl = n(531685),
    ri =
        (((s = {}).HIDDEN = "hidden"),
        (s.UNREAD = "unread"),
        (s.MENTIONS = "mentions"),
        (s.VOICE_CHANNELS = "voice-channels"),
        s);
let rs = { mode: "hidden", mentionCount: 0, targetChannelId: null },
    rr = { topBar: rs, bottomBar: rs },
    ra = {},
    ro = {};
function rd(e) {
    let t = U.A.getChannel(e);
    return (
        !(null == t || null == t.getGuildId() || t.isGuildVocal()) &&
        !(t.isThread() ? nX.A.isMuted(t.id) : V.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, tC.Y)(t)
    );
}
function rc(e) {
    let t = U.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let l = V.Ay.isGuildCollapsed(n),
        i = V.Ay.isChannelMuted(n, t.id);
    return (!l || !i) && nD.Ay.getMentionCount(e) > 0;
}
function ru(e) {
    return (
        !V.Ay.isChannelMuted(e.guild_id, e.id) &&
        (e.isGuildStageVoice()
            ? tI.A.getMutableParticipants(e.id, tb.ip.SPEAKER).length > 0
            : tx.Ay.getVoiceStatesForChannel(e).length > 0)
    );
}
function rh(e) {
    let { guildChannels: t } = tU.A.getGuildWithoutChangingGuildActionRows(e),
        n = t.getChannels(ro[e] ?? []);
    if (null == n || 0 === n.length) return !1;
    let l = null,
        i = null,
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
            ((rd(t.id) || d().some(t.threadIds, rd)) && (o = !1),
            (rc(t.id) || d().some(t.threadIds, rc)) && (a = !1),
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
            ((rd(t.id) || d().some(t.threadIds, rd)) && (null == i && (i = t.id), (p = !0)),
                (rc(t.id) || d().some(t.threadIds, rc)) &&
                    (null == l && (l = t.id),
                    (f += nD.Ay.getMentionCount(t.id)),
                    (f += d().sumBy(t.threadIds, nD.Ay.getMentionCount))));
        }
    if (o || a)
        for (let e = 0; e < A.length; e++) {
            let t = A[e];
            if (!o && !a) break;
            ((rd(t.id) || d().some(t.threadIds, rd)) && (null == r && (r = t.id), (E = !0)),
                (rc(t.id) || d().some(t.threadIds, rc)) &&
                    (null == s && (s = t.id),
                    (C += nD.Ay.getMentionCount(t.id)),
                    (C += d().sumBy(t.threadIds, nD.Ay.getMentionCount))));
        }
    let x = null,
        N = null,
        _ = u?.getChannelRecords() ?? [];
    (a && C > 0
        ? (x = { mode: "mentions", mentionCount: C, targetChannelId: s })
        : !c && d().some(_, ru)
          ? (x = { mode: "voice-channels", mentionCount: 0, targetChannelId: null })
          : o && E && (x = { mode: "unread", mentionCount: 0, targetChannelId: r }),
        a && f > 0
            ? (N = { mode: "mentions", mentionCount: f, targetChannelId: l })
            : o && p && (N = { mode: "unread", mentionCount: 0, targetChannelId: i }));
    let S = null != N && (null == x || ("mentions" !== x.mode && "mentions" === N.mode)),
        I = null != x && ("mentions" === x.mode || !S);
    return ((ra[e] = { topBar: S ? (N ?? rs) : rs, bottomBar: I ? (x ?? rs) : rs }), !0);
}
let rm = d().throttle(rh, 200);
function rg(e) {
    let { guildId: t } = e,
        n = O.A.getGuild(t);
    return null != n && !!n.features.has(H.GuildFeatures.COMMUNITY) && rm(t);
}
function rA(e) {
    let { id: t } = e,
        n = U.A.getChannel(t);
    if (null == n) return !1;
    let l = O.A.getGuild(n.guild_id);
    return null != l && !!l.features.has(H.GuildFeatures.COMMUNITY) && rm(n.guild_id);
}
function rf(e) {
    let { channel: t } = e,
        n = U.A.getChannel(t.id);
    if (null == n) return !1;
    let l = O.A.getGuild(t.guild_id);
    return null != l && !!l.features.has(H.GuildFeatures.COMMUNITY) && rm(n.guild_id);
}
function rp(e) {
    let { channelId: t } = e,
        n = U.A.getChannel(t);
    if (null == n) return !1;
    let l = O.A.getGuild(n.guild_id);
    return (
        null != l && !!l.features.has(H.GuildFeatures.COMMUNITY) && w.A.getGuildId() === n.guild_id && rm(n.guild_id)
    );
}
function rC(e) {
    let { guildId: t } = e;
    return null != t && rm(t);
}
class rE extends h.Ay.Store {
    static displayName = "ChannelListUnreadsStore";
    initialize() {
        this.waitFor(tU.A, U.A, O.A, nX.A, nD.Ay, w.A, tx.Ay, tI.A, V.Ay, lA.default);
    }
    getUnreadStateForGuildId(e) {
        return ra[e] ?? rr;
    }
}
let rx = new rE(tr.h, {
    UPDATE_CHANNEL_LIST_DIMENSIONS: function (e) {
        let { guildId: t, channelIds: n } = e,
            l = O.A.getGuild(t);
        return (
            null != l &&
            !!l.features.has(H.GuildFeatures.COMMUNITY) &&
            null != n &&
            !d().isEqual(ro[t], n) &&
            ((ro[t] = n), rh(t))
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
                    null != t && t.features.has(H.GuildFeatures.COMMUNITY) && rm(e) && (n = !0);
                }),
            n
        );
    },
    CHANNEL_ACK: rp,
    CHANNEL_DELETE: rf,
    CHANNEL_LOCAL_ACK: rp,
    MESSAGE_ACK: rp,
    MESSAGE_CREATE: rp,
    MESSAGE_DELETE_BULK: rp,
    MESSAGE_DELETE: rp,
    PASSIVE_UPDATE_V2: function (e) {
        let t = O.A.getGuild(e.guildId);
        return !!(e.channels.length > 0 && null != t && t.features.has(H.GuildFeatures.COMMUNITY)) && rm(e.guildId);
    },
    RESORT_THREADS: rp,
    THREAD_CREATE: rf,
    THREAD_DELETE: rf,
    THREAD_LIST_SYNC: rg,
    THREAD_MEMBER_UPDATE: rA,
    THREAD_MEMBERS_UPDATE: rA,
    THREAD_UPDATE: rf,
    BULK_CLEAR_RECENTS: rg,
    CATEGORY_COLLAPSE_ALL: rg,
    CATEGORY_EXPAND_ALL: rg,
    CURRENT_USER_UPDATE: function () {
        let e = lA.default.getCurrentUser()?.nsfwAllowed;
        if (e === l) return !1;
        l = e;
        let t = w.A.getGuildId();
        if (null == t) return !1;
        let n = O.A.getGuild(t);
        return null != n && !!n.features.has(H.GuildFeatures.COMMUNITY) && rm(t);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = w.A.getGuildId();
        if (null == n || !new Set(t.map((e) => e.guildId)).has(n)) return !1;
        let l = ra[n];
        return null != l && "voice-channels" === l.bottomBar.mode && rm(n);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: rC,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: rC,
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: t } = e;
        for (let e of t) null != e.guild_id && rm(e.guild_id);
    },
    USER_GUILD_SETTINGS_GUILD_UPDATE: rC,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: rC,
});
var rN = n(350536);
let r_ = { friction: 30, tension: 300 };
function rS(e) {
    let { guildChannels: t, jumpToVoiceChannels: n } = e,
        l = t.getCategoryFromSection(t.voiceChannelsSectionNumber),
        i = (0, h.bG)([tx.Ay], () => tx.Ay.getVoiceStates(t.id), [t.id]),
        s = a.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), n());
            },
            [n],
        ),
        o = l?.getChannelRecords() ?? [],
        d = (0, nN.fK)({ channels: o, selectedChannelId: null, selectedVoiceChannelId: null, voiceStates: i });
    return (0, r.jsxs)(es.D, {
        className: eX()(rN.M0, rN.OF),
        onClick: s,
        children: [
            (0, r.jsx)(t7.H, { size: "custom", className: rN.Gs, width: 14, height: 14, color: "currentColor" }),
            (0, r.jsx)(tl.E, {
                variant: "body-xs/semibold",
                className: rN.pM,
                children: eA.intl.format(eA.t["fDlr+F"], { count: d.length }),
            }),
            (0, r.jsx)(rn.A, {
                guildId: t.id,
                className: rN.J$,
                users: d.slice(0, 4),
                renderMoreUsers: () => null,
                max: 4,
                size: lh._3.SIZE_16,
            }),
        ],
    });
}
function rI(e) {
    let { position: t, guildChannels: n, guildChannelsVersion: l, jumpToVoiceChannels: i, jumpToChannel: s } = e,
        { bottomBar: o, topBar: d } = (0, h.cf)([rx], () => rx.getUnreadStateForGuildId(n.id)),
        c = (0, h.bG)([rl.A], () => rl.A.isFocused()),
        { mode: u, mentionCount: m, targetChannelId: g } = "bottom" === t ? o : d,
        A = u === ri.HIDDEN,
        f = (0, tn.z)(
            {
                to: { transform: A ? ("bottom" === t ? "translateY(180%)" : "translateY(-180%)") : "translateY(0%)" },
                config: r_,
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
        className: eX()(rN.kL, { [rN.Mn]: "top" === t, [rN.sQ]: "bottom" === t }),
        children: (0, r.jsx)(tt.animated.div, {
            className: rN.pK,
            style: f,
            "aria-hidden": A,
            children: (function () {
                switch (u) {
                    case ri.HIDDEN:
                        return (0, r.jsx)("div", { className: eX()(rN.M0, rN.Te) });
                    case ri.UNREAD:
                        return (0, r.jsxs)(es.D, {
                            className: rN.M0,
                            onClick: p,
                            children: [
                                "bottom" === t
                                    ? (0, r.jsx)(t2.a, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: rN.z_,
                                          height: 14,
                                          width: 14,
                                      })
                                    : (0, r.jsx)(rt.t, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: rN.z_,
                                          height: 14,
                                          width: 14,
                                      }),
                                (0, r.jsx)(tl.E, {
                                    variant: "body-xs/semibold",
                                    color: "interactive-text-default",
                                    className: rN.pM,
                                    children: eA.intl.string(eA.t.FCRiT3),
                                }),
                            ],
                        });
                    case ri.MENTIONS:
                        return (0, r.jsx)(es.D, {
                            className: eX()(rN.M0, rN.vU),
                            onClick: p,
                            children: (0, r.jsx)(tl.E, {
                                variant: "body-xs/semibold",
                                color: "badge-primary-text",
                                className: rN.pM,
                                children: eA.intl.format(eA.t.EQcLyp, { count: m }),
                            }),
                        });
                    case ri.VOICE_CHANNELS:
                        return (0, r.jsx)(rS, { jumpToVoiceChannels: i, guildChannels: n, guildChannelsVersion: l });
                    default:
                        return;
                }
            })(),
        }),
    });
}
var rb = n(310953),
    rj = n(173860);
function rv(e) {
    let t = U.A.getChannel(e);
    return (
        null != t &&
        null != t.getGuildId() &&
        !(t.isThread() ? nX.A.isMuted(t.id) : V.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, tC.Y)(t)
    );
}
function rG(e) {
    let t = U.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let l = V.Ay.isGuildCollapsed(n),
        i = V.Ay.isChannelMuted(n, t.id);
    return (!l || !i) && nD.Ay.getMentionCount(e) > 0;
}
function ry(e) {
    let { guildId: t, guildChannels: n, guildChannelsVersion: l, ref: i, ...s } = e,
        a = (0, rb.W)(t, n, l, { withVoiceChannels: !1 }, { ignoreRecents: !0 }),
        o = (0, h.bG)([rl.A], () => rl.A.isFocused());
    return (0, r.jsx)(rj.A, { ref: i, ...s, isUnread: rv, isMentioned: rG, items: a, animate: o });
}
var rR = n(81466);
function rM(e) {
    let { guild: t, selected: l } = e,
        { hasUnread: i, mentionCount: s } = (0, h.cf)(
            [nD.Ay],
            () => ({
                hasUnread: nD.Ay.hasUnread(t.id, le.P.GUILD_EVENT),
                mentionCount: nD.Ay.getMentionCount(t.id, le.P.GUILD_EVENT),
            }),
            [t.id],
        ),
        a = (0, h.bG)([V.Ay], () => V.Ay.isMuteScheduledEventsEnabled(t.id)),
        o = (0, t$.Ay)(t.id),
        d = o.length > 0 ? eA.intl.formatToPlainString(eA.t.IBdqSu, { number: o.length }) : eA.intl.string(eA.t.tlopTM);
    return (0, r.jsx)(ec.G, {
        id: `upcoming-events-${t.id}`,
        renderIcon: (e) => (0, r.jsx)(rR.CalendarIcon, { size: "md", color: "currentColor", className: e }),
        text: d,
        selected: l,
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
            (0, ti.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e(426386), n.e(571090)]).then(n.bind(n, 831721));
                return (n) => (0, r.jsx)(e, { ...n, guildId: t.id });
            });
        },
        showUnread: i && !a,
        trailing: !a && s > 0 ? (0, r.jsx)(eI.hV, { className: n9.Do, disableColor: !0, count: s }) : null,
    });
}
var rT = n(350835),
    rL = n(845056),
    rU = n(765379),
    rD = n(271683),
    rO = n(725613),
    rP = n(857253),
    rw = n(360729),
    rV = n(22231),
    rH = n(241326),
    rk = n(750943),
    rB = n(743674),
    rF = n(888697),
    rz = n(26741),
    rK = n(493819),
    rW = n(722884),
    rY = n(335916),
    rX = n(176431);
function rJ(e) {
    let { channel: t, imageUrl: l, animatedUrl: i, bannerHash: s, canModifyHangout: o } = e,
        d = (0, rB.S)(l),
        c = (0, eB.je)(t),
        u = (0, rz.P9)({ guildId: t.guild_id, channelId: t.id, bannerHash: s }),
        h = a.useCallback(() => {
            ((0, rz.J_)({ guildId: t.guild_id, channelId: t.id }), (0, rW.A)({ channel: t }));
        }, [t]),
        m = a.useCallback(() => {
            ((0, rz.nK)({ guildId: t.guild_id, channelId: t.id }), (0, rF.e2)(t.id));
        }, [t.guild_id, t.id]),
        g = a.useCallback(
            (e) => {
                c
                    ? (0, ti.L3)(e, async () => {
                          let { default: e } = await n.e(555558).then(n.bind(n, 316421));
                          return (n) => (0, r.jsx)(e, { ...n, channel: t });
                      })
                    : e.preventDefault();
            },
            [t, c],
        );
    return (0, r.jsxs)("div", {
        ref: u,
        className: rX.rs,
        onContextMenu: g,
        children: [
            (0, r.jsx)("div", {
                className: rX.ZS,
                style: null != d ? { backgroundColor: d } : void 0,
                children: (0, r.jsx)(rK.A, { imageUrl: l, animatedUrl: i, className: rX.Sl }),
            }),
            o
                ? (0, r.jsxs)("div", {
                      className: rX.n_,
                      children: [
                          (0, r.jsx)(ei.m, {
                              text: eA.intl.string(rY.default.XJ4UpB),
                              children: (0, r.jsx)(es.D, {
                                  className: rX.HF,
                                  onClick: h,
                                  children: (0, r.jsx)(rV.PencilIcon, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                          (0, r.jsx)(ei.m, {
                              text: eA.intl.string(rY.default.XV4qT6),
                              children: (0, r.jsx)(es.D, {
                                  className: rX.HF,
                                  onClick: m,
                                  children: (0, r.jsx)(rH.TrashIcon, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function r$(e) {
    let { channel: t } = e,
        n = (0, rz.dX)({ guildId: t.guild_id, channelId: t.id }),
        l = a.useCallback(() => {
            ((0, rz.J_)({ guildId: t.guild_id, channelId: t.id }), (0, rW.A)({ channel: t }));
        }, [t]);
    return (0, r.jsx)("div", {
        ref: n,
        className: rX._o,
        children: (0, r.jsxs)(es.D, {
            className: rX.hH,
            onClick: l,
            children: [
                (0, r.jsx)(rk.X, { size: "xs", color: "currentColor" }),
                (0, r.jsx)(tl.E, {
                    variant: "body-sm/medium",
                    color: "currentColor",
                    children: eA.intl.string(rY.default.NGcIOF),
                }),
            ],
        }),
    });
}
function rq(e) {
    let { channel: t, isConnected: n } = e,
        { enableHangoutWindow: l } = (0, ek.Dm)({ guildId: t.guild_id, location: "HangoutWindow" }),
        i = (0, eB.W6)(t),
        s = n && i,
        o = t.voiceHangout,
        d = o?.banner_hash,
        c = a.useMemo(() => {
            if (null == d || null == t.guild_id) return null;
            let e = (0, eB.Sq)({ guildId: t.guild_id, bannerHash: d });
            return null == e ? null : { bannerHash: d, ...e };
        }, [t.guild_id, d]);
    return l
        ? null != c
            ? (0, r.jsx)(rJ, {
                  channel: t,
                  imageUrl: c.imageUrl,
                  animatedUrl: c.animatedUrl,
                  bannerHash: c.bannerHash,
                  canModifyHangout: s,
              })
            : s
              ? (0, r.jsx)(r$, { channel: t })
              : null
        : null;
}
var rZ = n(894768),
    rQ = n(532622),
    r0 = n(882840),
    r1 = n(208971),
    r3 = n(46054),
    r6 = n(569381),
    r2 = n(165648);
function r9(e) {
    let { channel: t, connected: n, hovered: l, subtitle: i, disableTooltips: s = !1, onClick: o } = e,
        d = (0, r1.G)((0, r0.l)(t)),
        { enableHangoutWindow: c } = (0, ek.Dm)({ guildId: t.guild_id, location: "VoiceChannelStatus" }),
        u = c && (0, eB.lr)(t),
        h = null != d && d.length > 0,
        m = (0, rQ.Ay)(t, !0),
        g = null != i && i.length > 0;
    if (
        (a.useEffect(() => {
            h && iM.default.track(H.HAw.VOICE_CHANNEL_TOPIC_VIEWED, { channel_id: t.id, guild_id: t.guild_id });
        }, [h, t.id, t.guild_id]),
        null == t.guild_id)
    )
        return null;
    let A = eX()(r6.Ui, n && m ? r6.BI : null);
    return h
        ? (0, r.jsx)(es.D, {
              className: A,
              onClick: m ? o : void 0,
              children: (0, r.jsx)(tl.E, {
                  variant: "body-xs/medium",
                  className: eX()(r6.qS, r2.PT),
                  children: (0, r.jsx)(t0.A, {
                      shouldShow: !s,
                      children: r3.A.parseVoiceChannelStatus(d, !0, { channelId: t.id }),
                  }),
              }),
          })
        : n && m && !u && (!g || l)
          ? (0, r.jsxs)(es.D, {
                className: A,
                onClick: o,
                children: [
                    (0, r.jsx)(tl.E, {
                        variant: "body-xs/medium",
                        className: r6.qS,
                        children: eA.intl.string(eA.t.Mgpxiw),
                    }),
                    (0, r.jsx)(rV.PencilIcon, { color: "currentColor", className: r6.rD, size: "xxs" }),
                ],
            })
          : g
            ? (0, r.jsx)(t0.A, { shouldShow: !s, children: i })
            : null;
}
let r7 = F(
    (0, iV.F)(
        class extends lZ {
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
                    unverifiedAccount: l,
                    needSubscriptionToAccess: i,
                    mentionCount: s,
                    isSuggestedSection: r,
                    guildRoomsEnabled: a,
                } = this.props;
                l && this.setState({ shouldShowGuildVerificationPopout: !0 });
                let o = s > 0;
                (o && iw.A.updateChatOpen(n.id, !0),
                    nw.A.handleVoiceConnect({
                        channel: n,
                        connected: t,
                        needSubscriptionToAccess: i,
                        routeDirectlyToChannel: o || a,
                        locked: e,
                        transitionExtras: r ? { source: i3.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
                    }));
            };
            handleContextMenu = (e) => {
                let { channel: t } = this.props,
                    l = O.A.getGuild(t.getGuildId());
                null != l &&
                    (0, ti.L3)(e, async () => {
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
                        return (n) => (0, r.jsx)(e, { ...n, channel: t, guild: l });
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
                (null != t && (0, iF.V)(t) && (0, iB.Ze)(t), this.handleVoiceConnect());
            };
            handleVoiceStatusClick = (e) => {
                let { connected: t, channel: n } = this.props;
                t && (e.stopPropagation(), (0, rD.A)({ channel: n }));
            };
            renderSubtitle(e) {
                let { disableTooltips: t } = e,
                    { channel: n, connected: l } = this.props,
                    i = sS(this.props.subtitle)?.subtitle,
                    { hovered: s } = this.state;
                return (0, r.jsx)(r9, {
                    onClick: this.handleVoiceStatusClick,
                    channel: n,
                    connected: l,
                    subtitle: i,
                    hovered: s,
                    disableTooltips: t,
                });
            }
            renderVoiceUsers() {
                let { channel: e, voiceStates: t, collapsed: n, withGuildIcon: l, tabIndex: i } = this.props;
                return (0, r.jsx)(n2.A, {
                    channel: e,
                    collapsed: n,
                    collapsedMax: 6,
                    voiceStates: t,
                    withGuildIcon: l,
                    tabIndex: i,
                });
            }
            renderHangoutWindow() {
                let { channel: e, connected: t, voiceStates: n, collapsed: l } = this.props;
                return !(null != n && n.length > 0) || l ? null : (0, r.jsx)(rq, { channel: e, isConnected: t });
            }
            renderPopout = () => {
                let { channel: e } = this.props,
                    { shouldShowGuildVerificationPopout: t } = this.state;
                return t
                    ? (0, r.jsx)(i1, {
                          type: i0.VOICE,
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
                    isSuggestedSection: l,
                    shouldEnlargeTargets: i,
                } = this.props;
                if (!t)
                    return (0, r.jsx)(ei.m, {
                        asContainer: !0,
                        text: eA.intl.string(eA.t.ZXxLQg),
                        children: (0, r.jsx)(es.D, {
                            className: eX()(ep.Xs, { [ep.Tf]: n }),
                            onClick: () => {
                                (iw.A.updateChatOpen(e.id, !0),
                                    (0, i6.iN)(e.id, l ? { source: i3.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0));
                            },
                            "aria-label": eA.intl.string(eA.t.ZXxLQg),
                            focusProps: i ? { offset: 2 } : void 0,
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
                        unread: l,
                        resolvedUnreadSetting: i,
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
                        "data-dnd-name": (0, t4.m1)(e, lA.default, i8.A),
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
                                children: (0, r.jsx)(iP.Y, {
                                    targetElementRef: this.channelItemRef,
                                    position: "right",
                                    renderPopout: this.renderPopout,
                                    onRequestClose: this.closeGuildVerificationPopout,
                                    spacing: 17,
                                    shouldShow: b,
                                    children: () =>
                                        (0, r.jsx)(ei.m, {
                                            text: j,
                                            children: (0, r.jsxs)(n$.Ay, {
                                                ref: this.channelItemRef,
                                                className: ep.Ki,
                                                disableOverflowTooltip: null != j,
                                                iconClassName: eX()({ [ep.Gj]: A || x || v }),
                                                hasActiveEvent: A,
                                                channel: e,
                                                selected: !C && t,
                                                connected: n,
                                                unread: n ? l : void 0,
                                                resolvedUnreadSetting: i,
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
                                                "aria-label": (0, ik.Ay)({
                                                    channel: e,
                                                    unread: l,
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
function r5(e) {
    let {
            guild: t,
            channel: n,
            disableSorting: l,
            isFavoriteCategory: i,
            selected: s,
            collapsed: a,
            voiceStates: o,
        } = e,
        d = (0, h.cf)([nD.Ay], () => ({ unread: nD.Ay.hasUnread(n.id), mentionCount: nD.Ay.getMentionCount(n.id) })),
        c = (0, h.bG)([V.Ay], () => V.Ay.resolveUnreadSetting(n)),
        u = (0, h.cf)([U.A, iq.A, P.A], () => {
            let e = U.A.getChannel(n.parent_id),
                i = iq.A.getCheck(n.guild_id);
            return {
                canManageChannel: P.A.can(H.xBc.MANAGE_CHANNELS, n),
                canReorderChannel:
                    !0 !== l &&
                    ((0, M.ai)(t.id) ||
                        (null != e ? P.A.can(H.xBc.MANAGE_CHANNELS, e) : P.A.can(H.xBc.MANAGE_CHANNELS, t))),
                canMoveMembers: P.A.can(H.xBc.MOVE_MEMBERS, n),
                locked: !P.A.can(H.xBc.CONNECT, n),
                bypassLimit: P.A.can(H.xBc.MOVE_MEMBERS, n),
                unverifiedAccount: !i.canChat,
            };
        }),
        m = (0, h.bG)([nB.A], () => nB.A.hasVideo(n.id)),
        { enabled: g } = (0, rw.mf)({ guildId: t.id, location: "VoiceChannel" }),
        A = (0, se.Ay)(n),
        f = (0, h.yK)(
            [rZ.A, lN.A, lx.default],
            () => {
                if (null == o || 0 === o.length) return [];
                let e = lx.default.getId(),
                    t = [];
                for (let { user: l } of o)
                    for (let i of l.id === e ? rZ.A.getActivities() : lN.A.getActivities(l.id, n.guild_id))
                        !(0, rL.N)(i) || (0, rU.A)(i) || null == i.name || t.includes(i.name) || t.push(i.name);
                return t;
            },
            [o, n.guild_id],
        ),
        p = (0, t4.Ay)(n),
        C = (0, t$.Qs)(n.id),
        E = (0, h.bG)([rO.A], () => rO.A.getStartTime(n), [n]),
        { isSubscriptionGated: x, needSubscriptionToAccess: N } = (0, nV.A)(n.id),
        _ = (0, rP.A)(),
        S = (0, h.bG)([V.Ay], () => V.Ay.isFavorite(t.id, n.id)),
        I = e.connected || _?.channelId === n.id,
        { enableHighlight: b, enableWaveformIcon: j } = (0, nE.b)(t.id, "VoiceChannel"),
        v = null != o && o.length > 0,
        G = b && v,
        y = j && v,
        R = sm({
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
        L = (0, iH.BX)("VoiceChannel");
    return (0, r.jsx)(r7, {
        channelName: p,
        embeddedApps: A,
        nonEmbeddedActivityNames: f,
        embeddedActivityType: rT.$.PLAYING,
        video: m,
        hasActiveEvent: null != C,
        isSubscriptionGated: x,
        needSubscriptionToAccess: N,
        ...d,
        ...u,
        ...e,
        connected: I,
        isFavoriteSuggestion: i && !S,
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
let r4 = [];
function r8(e) {
    return (
        m.A.modules.channels.NAME_LINE_HEIGHT.resolve({ density: e }) +
        2 * m.A.space.SPACE_XXS.resolve({ density: e }) +
        2
    );
}
class ae extends a.PureComponent {
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
        let { scrollToChannel: n, guildId: l, selectedChannelId: i } = this.props,
            { initialized: s } = this.state,
            { scrollTop: r } = tM.A.getGuildDimensions(l);
        (null != n
            ? (this.scrollToChannel(n), x.A.clearChannelListScrollTo(l))
            : l !== e.guildId
              ? null != r && this.scrollTo(r)
              : i !== e.selectedChannelId
                ? this.scrollToChannel(i)
                : !t.initialized &&
                  s &&
                  (null == r && null != i
                      ? this.scrollToChannel(i, !1, 8, this.handleListScroll)
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
            l = arguments.length > 3 ? arguments[3] : void 0,
            i = this._list,
            s = this.getSectionRowsFromChannel(e)[0];
        if (null != s && null != i)
            if (null != s.threadOffset) {
                let [e] = i.getScrollPosition(s.section, s.row),
                    { density: r = "default" } = this.props,
                    a = s.threadOffset * r8(r);
                i.scrollIntoViewRect({ start: e + a, end: e + a + r8(r), padding: n, animate: t, callback: l });
            } else i.scrollToIndex({ section: s.section, row: s.row, animate: t, padding: n, callback: l });
        else l?.();
    }
    jumpToVoiceChannels = () => {
        let { guildChannels: e, voiceStates: t } = this.props,
            n = 0,
            l = e.getCategoryFromSection(e.voiceChannelsSectionNumber)?.getShownChannelIds() ?? [];
        for (let e = 0; e < l.length - 1; e++)
            if ((t[l[e]] ?? []).length > 0) {
                n = e + 1;
                break;
            }
        this._list?.scrollToIndex({ section: e.voiceChannelsSectionNumber, row: n, animate: !0, padding: 8 });
    };
    jumpToChannel = (e) => this.scrollToChannel(e, !0, 32);
    jumpToChannelWithMentionsAndUnreads = (e, t) => {
        let [n, l] = t;
        return this.scrollToChannel(e, !0, null != n && null != l ? 32 : 8);
    };
    isChannelVisible = (e, t) => {
        let n = this.getSectionRowsFromChannel(e),
            l = this._list;
        if (null == l) return !1;
        for (let { row: e, section: i } of n) {
            let [n, s] = l.getScrollPosition(i, e),
                r = l.getScrollerState();
            if ((t && n + s < r.scrollTop + r.offsetHeight) || (!t && n > r.scrollTop)) return !0;
        }
        return !1;
    };
    getVisibleChannels = () => {
        let e = this._list;
        if (null == e) return [];
        let t = e.getItems(),
            n = e.getScrollerState(),
            l = [];
        for (var i = 0; i < t.length; i++) {
            let s = t[i];
            if ((0, g.o)(s) && s.section >= this.props.guildChannels.favoritesSectionNumber) {
                let t = this.props.guildChannels.getChannelFromSectionRow(s.section, s.row),
                    [i, r] = e.getScrollPosition(s.section, s.row);
                null != t && i + r < n.scrollTop + n.offsetHeight && i > n.scrollTop && l.push(t.channel.id);
            }
        }
        return l;
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
        let l = this.isUnreadVisible();
        n
            ? this.setState({ isUnreadVisible: l, bottomUnread: t, bottomMention: e })
            : this.setState({ isUnreadVisible: l, topUnread: t, topMention: e });
    };
    isUnreadVisible() {
        let { guildChannels: e } = this.props,
            t = this._list;
        return (
            null != t &&
            t.getItems().some((n) => {
                if ("row" !== n.type) return !1;
                let { section: l, row: i } = n;
                if (l < 4 || e.isPlaceholderRow(l, i)) return !1;
                let s = e.getChannelFromSectionRow(l, i);
                if (null == s) return !1;
                let { channel: r, category: a } = s;
                return (
                    !!(0, tR.ig)(r.record.type) &&
                    (!a.isCollapsed || !a.isMuted) &&
                    !r.isMuted &&
                    !!t.isItemVisible(l, i, !0) &&
                    (0, tC.Y)(r.record)
                );
            })
        );
    }
    updateChannelListScroll = (0, o.throttle)((e) => {
        x.A.updateChannelListScroll(this.props.guildId, e, this.getVisibleChannels());
    }, 100);
    getSectionHeight = (e) => {
        let { guild: t, guildChannels: n, density: l } = this.props,
            i = "compact" === l ? 8 : 12;
        if (1 === e) return i;
        if (4 === e) return t.features.has(H.GuildFeatures.HUB) ? 0 : i;
        if (e === n.voiceChannelsSectionNumber) {
            let t = n.getCategoryFromSection(e);
            if (null == t || t.isEmpty()) return 0;
            if (t.isCollapsed) return 49;
            let l = n.getChannelFromSectionRow(e, 0)?.channel;
            return null == l || l.record.type === H.rbe.GUILD_CATEGORY ? 9 : 25;
        }
        return "compact" === l ? 32 : 40;
    };
    getSectionFooterHeight = (e) => {
        let {
            guildChannels: t,
            voiceStates: n,
            selectedVoiceChannelId: l,
            selectedChannelId: i,
            optInEnabled: s,
            guildChannelsVersion: r,
        } = this.props;
        return (function (e) {
            let {
                sectionIndex: t,
                guildChannels: n,
                voiceStates: l,
                selectedChannelId: i,
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
                    let { category: t, voiceStates: n, selectedChannelId: l, selectedVoiceChannelId: i } = e;
                    return (
                        (function (e) {
                            let { category: t, voiceStates: n, selectedChannelId: l, selectedVoiceChannelId: i } = e;
                            return !0 !== L.A.isCollapsed(t.record.id)
                                ? []
                                : t.getChannelRecords().filter((e) => {
                                      if (!P.A.can(H.xBc.VIEW_CHANNEL, e)) return !1;
                                      let t = n[e.id] ?? [];
                                      return e.id !== i && e.id !== l && t.length > 0;
                                  });
                        })({ category: t, selectedChannelId: l, selectedVoiceChannelId: i, voiceStates: n }).length > 0
                    );
                })({ category: h, selectedChannelId: i, selectedVoiceChannelId: s, voiceStates: l })
                ? u
                : (a && "cozy" === o ? 42 : 34) + u;
        })({
            sectionIndex: e,
            guildChannels: t,
            guildChannelsVersion: r,
            voiceStates: n,
            selectedChannelId: i,
            selectedVoiceChannelId: l,
            optInEnabled: s,
            density: this.props.density,
        });
    };
    getRowHeight = (e, t) => {
        let {
                guildChannels: n,
                voiceStates: l,
                stageChannelSpeakerVoiceStates: i,
                selectedVoiceChannelId: s,
                density: r = "default",
            } = this.props,
            a = r8(r);
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
            a += r8(t);
            let n = l[d.id];
            null != n && n.length > 0 && (a += s === e ? 32 * n.length : 32);
        }
        if (d.record.isGuildVoice()) {
            let e = l[d.id];
            if (null != e && e.length > 0) {
                let t = 32 * e.length;
                if (
                    (d.isCollapsed || c.isCollapsed ? (t = 32) : (0, ez.Ln)(d.record) && (t += 32),
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
            let e = l[d.id] ?? [],
                t = i[d.id] ?? [];
            if (null != e && e.length > 0) {
                let e = 32 * t.length;
                (d.isCollapsed || c.isCollapsed ? (e = Math.ceil(e / 5)) : (e += 32), (a += e + 8));
            }
        }
        return a;
    };
    dismissRecents = () => {
        let { guild: e, guildChannels: t, selectedChannelId: n } = this.props,
            l = t.getCategoryFromSection(t.recentsSectionNumber);
        if (null == l) return;
        let i = null,
            s = l.getShownChannelAndThreadIds();
        (null != n && s.includes(n) && (i = (0, eK.xb)(t)), (0, eK.DD)(e.id, s, i));
    };
    renderSection = (e) => {
        let { section: t } = e,
            {
                guildChannels: n,
                guildChannelsVersion: l,
                guild: i,
                selectedChannelId: s,
                disableManageChannels: a,
            } = this.props;
        return (0, r.jsx)(
            np,
            {
                sectionIndex: t,
                guild: i,
                guildChannels: n,
                guildChannelsVersion: l,
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
                guild: l,
                selectedChannel: i,
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
                        { guild: l, channel: tT.A.getDefaultChannel(l.id) },
                        tQ.n.GUILD_HUB_HEADER_OPTIONS,
                    );
                case tQ.n.GUILD_PREMIUM_PROGRESS_BAR:
                    let i = e.getRows();
                    return (0, r.jsx)(tp, { guild: l, withMargin: i.length > 1 }, tQ.n.GUILD_PREMIUM_PROGRESS_BAR);
                case tQ.n.GUILD_SPACE:
                    return (0, r.jsx)(eH, { guild: l, selected: s === eh.VV.GUILD_SPACE }, tQ.n.GUILD_SPACE);
                case tQ.n.GUILD_HOME:
                    return (0, r.jsx)(im, { guild: l, selected: s === eh.VV.GUILD_HOME }, tQ.n.GUILD_HOME);
                case tQ.n.GUILD_SCHEDULED_EVENTS:
                    return (0, r.jsx)(
                        rM,
                        { guild: l, selected: s === tQ.n.GUILD_SCHEDULED_EVENTS },
                        tQ.n.GUILD_SCHEDULED_EVENTS,
                    );
                case tQ.n.GUILD_ROLE_SUBSCRIPTIONS:
                    return (0, r.jsx)(
                        iI,
                        { guild: l, selected: s === eh.VV.ROLE_SUBSCRIPTIONS },
                        tQ.n.GUILD_ROLE_SUBSCRIPTIONS,
                    );
                case tQ.n.GUILD_SHOP:
                    return (0, r.jsx)(iD, { guild: l, selected: s === eh.VV.GUILD_SHOP }, tQ.n.GUILD_SHOP);
                case tQ.n.GUILD_GAME_SHOP:
                    return (0, r.jsx)(ir, { guild: l, selected: s === eh.VV.GAME_SHOP }, tQ.n.GUILD_GAME_SHOP);
                case tQ.n.GUILD_CONJURE:
                    return (0, r.jsxs)(
                        a.Fragment,
                        {
                            children: [
                                (0, r.jsx)(lO, { guild: l, selected: s === eh.VV.CONJURE }),
                                (0, r.jsx)(lo, { guildId: l.id, projects: this.props.conjureProjects ?? r4 }),
                            ],
                        },
                        tQ.n.GUILD_CONJURE,
                    );
                case tQ.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
                    return (0, r.jsx)(ix, { guild: l });
                case tQ.n.CHANNELS_AND_ROLES:
                    return (0, r.jsx)(
                        iu,
                        { guild: l, selected: s === eh.VV.CHANNEL_BROWSER || s === eh.VV.CUSTOMIZE_COMMUNITY },
                        tQ.n.CHANNELS_AND_ROLES,
                    );
                case tQ.n.GUILD_DIRECTORY:
                    return (0, r.jsx)(
                        lQ,
                        { guild: l, selectedChannelId: s, disableManageChannels: h },
                        tQ.n.GUILD_DIRECTORY,
                    );
                case tQ.n.GUILD_MOD_DASH_MEMBER_SAFETY:
                    return (0, r.jsx)(
                        eR,
                        { guild: l, selected: s === eh.VV.MEMBER_SAFETY },
                        tQ.n.GUILD_MOD_DASH_MEMBER_SAFETY,
                    );
                case tQ.n.GUILD_BOOSTS:
                    return (0, r.jsx)(te, { guildId: l.id, selected: s === eh.VV.GUILD_BOOSTS }, tQ.n.GUILD_BOOSTS);
                case tQ.n.GAME_SERVERS:
                    return (0, r.jsx)(e_, { guildId: l.id, selected: s === eh.VV.GAME_SERVERS }, tQ.n.GAME_SERVERS);
                case tQ.n.GAME_SERVERS_EMPTY:
                    return (0, r.jsx)(
                        eC,
                        { guildId: l.id, selected: s === eh.VV.GAME_SERVERS },
                        tQ.n.GAME_SERVERS_EMPTY,
                    );
                case tQ.n.GUILD_OFFICIAL_MESSAGES:
                    return (0, r.jsx)(
                        i_,
                        { guild: l, selected: s === eh.VV.GUILD_OFFICIAL_MESSAGES },
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
                            (0, r.jsx)(re, {
                                channel: x,
                                guild: l,
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
                                ? (0, r.jsx)(iO, {
                                      withGuildIcon: A,
                                      channel: x,
                                      sortedThreadIds: C.threadIds,
                                      selectedChannel: null != i && (i.id === C.id || i.parent_id === x.id) ? i : null,
                                      selectedVoiceChannelId: o?.parent_id === x.id ? d : null,
                                  })
                                : null,
                        ],
                    },
                    N,
                );
            case H.rbe.GUILD_STAGE_VOICE:
                return (0, r.jsx)(
                    sf,
                    {
                        channel: x,
                        guild: l,
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
                    r5,
                    {
                        channel: x,
                        guild: l,
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
                return (0, r.jsx)(sE, { channel: x, guild: l, position: C.position, selected: s === C.id }, N);
            case H.rbe.GUILD_CATEGORY:
                if (t !== c.voiceChannelsSectionNumber) return null;
                return (0, r.jsx)(nh, { channel: x }, `readonly-${x.id}`);
            case H.rbe.PUBLIC_THREAD:
            case H.rbe.PRIVATE_THREAD:
            case H.rbe.ANNOUNCEMENT_THREAD:
                return (0, r.jsx)(
                    re,
                    {
                        channel: x,
                        guild: l,
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
                guildChannelsVersion: l,
                voiceStates: i,
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
                guildChannelsVersion: l,
                sectionIndex: t,
                voiceStates: i,
                selectedChannelId: s,
                selectedVoiceChannelId: a,
                optInEnabled: o,
            },
            (function (e, t, n) {
                if (e === t.voiceChannelsSectionNumber) return "voice-channels-button";
                let { hasDivider: l, canHaveVoiceSummary: i } = n_(t, n, e);
                return `section-footer-${e}${l ? "-divider" : ""}${i ? "-voice-summary" : ""}`;
            })(t, n, o),
        );
    };
    renderTopUnread() {
        let { topMention: e, bottomUnread: t, bottomMention: n, isUnreadVisible: l } = this.state,
            { guildId: i, guildChannels: s, guildChannelsVersion: a } = this.props;
        return (0, r.jsx)("div", {
            className: nf.Eo,
            children: (0, r.jsx)(ry, {
                ref: this.unreadTopRef,
                textUnread: eA.intl.string(eA.t.FCRiT3),
                textMention: eA.intl.string(eA.t["8zH0LJ"]),
                hide: null == e && (l || null != t || null != n),
                className: nf.Vq,
                barClassName: nf.bu,
                guildId: i,
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
            { bottomMention: l, isUnreadVisible: i } = this.state;
        return (0, r.jsx)(ry, {
            reverse: !0,
            ref: this.unreadBottomRef,
            textUnread: eA.intl.string(eA.t.FCRiT3),
            textMention: eA.intl.string(eA.t["8zH0LJ"]),
            hide: null == l && i,
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
        let { guildChannels: e, guildBanner: t, selectedGuildId: n, density: l } = this.props,
            i = {};
        (0, M.ai)(n) && (i["data-favorites"] = !0);
        let { ref: s, ...a } = this.context,
            o = 0;
        null != t && (o = 84);
        let d = "compact" === l ? 8 : 12;
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
                        ...i,
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
            for (let { section: e, row: l } of this.getSectionRowsFromChannel(t.id))
                n.isItemVisible(e, l) || tv.X8("voice-conversations");
    };
    render() {
        let { guildChannels: e, guildChannelsVersion: t, showNewUnreadsBar: n } = this.props;
        return (0, r.jsx)(en.V0, {
            children: (l) =>
                (0, r.jsx)(p.F, {
                    component: (0, r.jsx)(C.A, {
                        children: (0, r.jsx)(p.H, { id: l, children: eA.intl.string(eA.t.OGiMXJ) }),
                    }),
                    children: n
                        ? (0, r.jsxs)(a.Fragment, {
                              children: [
                                  (0, r.jsx)("div", {
                                      className: nf.Eo,
                                      children: (0, r.jsx)(rI, {
                                          position: "top",
                                          guildChannels: e,
                                          guildChannelsVersion: t,
                                          jumpToVoiceChannels: this.jumpToVoiceChannels,
                                          jumpToChannel: this.jumpToChannel,
                                      }),
                                  }),
                                  this.renderList(),
                                  (0, r.jsx)(rI, {
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
let at = (e) => {
    let { guildId: t, selectedChannelId: n, selectedVoiceChannelId: l } = e,
        i = (0, h.bG)([z.Ay], () => z.Ay.keyboardModeEnabled),
        { analyticsLocations: s } = (0, W.Ay)(K.A.GUILD_CHANNEL_LIST),
        o = (0, h.bG)([U.A], () => U.A.getChannel(n)),
        d = (0, h.bG)([U.A], () => U.A.getChannel(l)),
        m = (0, h.bG)([w.A], () => w.A.getGuildId()),
        g = (0, eW.jN)(t),
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
            isEnabled: i,
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
    return (0, r.jsx)(W.f5, {
        value: s,
        children: (0, r.jsx)(N.A, {
            section: H.JJy.GUILD_CHANNEL_LIST,
            children: (0, r.jsxs)(c.hD, {
                navigator: E,
                children: [
                    (0, r.jsx)(ty.q, { containerRef: E.containerProps.ref, itemType: k }),
                    (0, r.jsx)(ae, {
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
function an(e) {
    var t, n;
    let l,
        i,
        s,
        o,
        d,
        c,
        u = (function (e) {
            var t;
            let n,
                l,
                i =
                    ((t = e.id),
                    (n = (0, tJ.A)(t)),
                    (l = (0, t$.Ay)(t)),
                    !(0, h.bG)(
                        [O.A],
                        () => {
                            if (null == t) return !1;
                            let e = O.A.getGuild(t);
                            return e?.features.has(H.GuildFeatures.HUB) ?? !1;
                        },
                        [t],
                    ) &&
                        (n || l.length > 0)),
                s = (0, tk.W)(e.id),
                r = (0, tX.vz)(e.id),
                a = (0, tw.r)(e),
                o = (0, tZ.jz)(e),
                d = (0, tW.d)(e.id),
                c = (0, tO.bG)([tz.h], () => tz.h.getNewMemberActions(e.id), [e.id]),
                u = (0, tP.Q9)(e, "useGuildActionRows"),
                m = (0, tY.A)(e.id),
                g = (0, tK.jY)(e.id),
                A = (0, tB.fw)(e.id),
                f = (0, eU.Uq)(e.id, "useGuildActionRows"),
                p = !0 === (0, tF.A)(e),
                C = (0, eW.jN)(e.id),
                E = [],
                x = e.features.has(H.GuildFeatures.HUB),
                N = e.features.has(H.GuildFeatures.COMMUNITY),
                _ = e.features.has(H.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
                S = (0, tu.A)(e.id),
                I = tm(e),
                b = (0, tq.bW)(e.id, "useGuildActionRows"),
                j = (0, tV.C$)(e.id, "useGuildActionRows"),
                v = e.features.has(H.GuildFeatures.GAME_SERVERS),
                G = (0, tH.N)("useGuildActionRows"),
                [y] = (0, ed.kn)(j && G && !v ? [el.M.EMPTY_GAME_SERVER_TAB] : [], { bypassAutoDismiss: !0 });
            return (
                x && E.push(tQ.n.GUILD_HUB_HEADER_OPTIONS),
                !g && d && m && null != c && c.length > 0
                    ? E.push(tQ.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR)
                    : e.premiumProgressBarEnabled && I > 0 && E.push(tQ.n.GUILD_PREMIUM_PROGRESS_BAR),
                !x && d && E.push(tQ.n.GUILD_HOME),
                f && E.push(tQ.n.GUILD_SPACE),
                i && E.push(tQ.n.GUILD_SCHEDULED_EVENTS),
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
            (l = (0, J.Xj)((0, Y.zy)().pathname)),
            a.useEffect(() => {
                n && "unattempted" === q.Ay.getGuildProjectsFetchState(t) && (0, $.listProjects)(t);
            }, [n, t]),
            (i = (0, X.UU)(() => (n ? (0, Q.cR)(t) : et), [n, t])),
            (s = (0, Z.A)(i, l)),
            (o = (0, h.yK)(ee.F4, () => i.filter((e) => (0, ee.gM)(e.id)).map((e) => e.id), [i])),
            (c = (function (e) {
                let [t, n] = a.useState(Date.now),
                    l = e.reduce((e, n) => (null != n && n > t && n < e ? n : e), 1 / 0);
                return (
                    a.useEffect(() => {
                        if (1 / 0 === l) return;
                        let e = setTimeout(() => n(Date.now()), l - Date.now());
                        return () => clearTimeout(e);
                    }, [l]),
                    t
                );
            })((d = (0, h.yK)(ee.F4, () => i.map((e) => (0, ee._V)(e.id)), [i])))),
            a.useMemo(() => {
                let e = new Set(s),
                    t = new Set(o);
                return i.filter((n, i) => {
                    if (n.id === l) return !0;
                    let s = d[i];
                    return (null != s && s > c) || (e.has(n) && !t.has(n.id));
                });
            }, [i, s, o, d, c, l])),
        { density: A } = (0, E.wR)();
    return (0, r.jsx)(at, { ...e, ...m, conjureProjects: g, density: A });
}
