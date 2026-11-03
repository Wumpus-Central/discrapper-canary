let i;
(n.d(t, { B: () => rK, i: () => rz }), n(321073));
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
    R = n(79843),
    y = n(466152),
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
                            (0, y.A)(l, r, s.parentId, o);
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
                                i = (0, R.A)(e, t);
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
    X = n(741907),
    J = n(751841),
    q = n(371169),
    Z = n(260498),
    $ = n(352571),
    Q = n(313537);
let ee = [];
var et = n(915089),
    en = n(554146),
    ei = n(866665),
    el = n(939249),
    es = n(789645),
    er = n(62010),
    ea = n(687966),
    eo = n(131607),
    ed = n(652793),
    ec = n(976860),
    eu = n(746080),
    eh = n(49999),
    em = n(135570),
    eg = n(105292),
    eA = n(275833),
    ef = n(964306);
let ep = a.memo(function (e) {
    let { guildId: t, selected: i } = e,
        [l, s] = (0, eo.ww)([en.M.GAME_SERVER_HOSTING_NEW_BADGE], t),
        o = l === en.M.GAME_SERVER_HOSTING_NEW_BADGE,
        d = a.useCallback(() => {
            (s(eh.i.USER_DISMISS), (0, ec.pX)(H.BVt.CHANNEL(t, eu.VV.GAME_SERVERS)));
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
            className: eA.c,
            children: [
                (0, r.jsx)("div", {
                    className: ef.Xs,
                    children: (0, r.jsx)(ei.m, {
                        text: eg.intl.string(eg.t.fgq1gs),
                        position: "top",
                        children: (0, r.jsx)(el.D, {
                            onClick: c,
                            "aria-label": eg.intl.string(eg.t.fgq1gs),
                            children: (0, r.jsx)(es.P, { size: "xs", color: "currentColor", className: ef.gE }),
                        }),
                    }),
                }),
                o &&
                    (0, r.jsx)("div", {
                        className: ef.yW,
                        children: (0, r.jsx)(er.E, { type: "new", variant: "primary" }),
                    }),
            ],
        });
    return (0, r.jsx)(ed.G, {
        className: ef.Ki,
        id: `game-server-empty-${t}`,
        renderIcon: (e) => (0, r.jsx)(ea.GameControllerIcon, { size: "md", className: e, color: "currentColor" }),
        text: eg.intl.string(em.default.vCzwM7),
        selected: i,
        onClick: d,
        trailing: u,
    });
});
var eC = n(361158),
    eE = n(696943),
    ex = n(186111);
let eN = a.memo(function (e) {
    let { guildId: t, selected: n } = e,
        i = (0, I.useHasAnyModalOpen)(),
        l = (0, h.bG)([ex.A], () => ex.A.hasLayers()),
        s = (0, eC.xr)((e) => e.fullScreenLayers.length > 0),
        [o, d] = (0, eo.ww)([en.M.GAME_SERVER_HOSTING_NEW_BADGE], t),
        c = o === en.M.GAME_SERVER_HOSTING_NEW_BADGE,
        [u, m] = (0, eo.ww)(i || l || s || !c ? [] : [en.M.GAME_SERVER_HOSTING_NEW_COACHMARK], t),
        g = a.useCallback(
            (e) => {
                (d(e), m(e));
            },
            [d, m],
        ),
        A = a.useCallback(() => {
            (g(eh.i.USER_DISMISS), (0, ec.pX)(H.BVt.CHANNEL(t, eu.VV.GAME_SERVERS)));
        }, [t, g]),
        f = a.useRef(null),
        p = u === en.M.GAME_SERVER_HOSTING_NEW_COACHMARK,
        C = a.useCallback(() => (0, r.jsx)(eE.mn, { channelRowRef: f, guildId: t, markAsDismissed: g }), [t, g]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(ed.G, {
                ref: f,
                id: `game-server-${t}`,
                renderIcon: (e) =>
                    (0, r.jsx)(ea.GameControllerIcon, { size: "md", className: e, color: "currentColor" }),
                text: eg.intl.string(em.default.vCzwM7),
                selected: n,
                onClick: A,
                trailing: c ? (0, r.jsx)(er.E, { type: "new", variant: "primary" }) : null,
            }),
            p && C(),
        ],
    });
});
var e_ = n(177953),
    eS = n(812993),
    eI = n(624458),
    eb = n(844944),
    ej = n(513461),
    ev = n(663997),
    eG = n(221950);
function eR(e) {
    let { guild: t, selected: n } = e,
        i = (0, h.bG)([O.A], () => O.A.can(H.xBc.KICK_MEMBERS, t)),
        l = (0, h.bG)([eb.A], () => eb.A.getSubmittedGuildJoinRequestTotal(t.id)),
        s = i ? (l ?? 0) : 0;
    a.useEffect(() => {
        i &&
            t.features.has(H.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
            t.features.has(H.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
            eI.A.fetchGuildJoinRequests({ guildId: t.id, status: ej.B5.SUBMITTED, limit: ev.L });
    }, [i, t]);
    let o = a.useCallback(() => {
        (0, eG.aZ)(t.id);
    }, [t.id]);
    return (0, r.jsx)(ed.G, {
        id: `members-${t.id}`,
        renderIcon: (e) => (0, r.jsx)(e_.n, { size: "md", color: "currentColor", className: e }),
        text: eg.intl.string(eg.t.oclz3Z),
        selected: n,
        onClick: o,
        trailing: s > 0 ? (0, r.jsx)(eS.hV, { count: s }) : null,
    });
}
var ey = n(332837),
    eM = n(942857),
    eT = n(593673),
    eL = n(313627),
    eU = n(43105),
    eD = n(93675),
    eP = n(880098);
function eO(e) {
    let t,
        n,
        { targetElementRef: i, guildName: l, isAdmin: s, isPublished: a, onCheckItOut: o, onDismiss: d } = e;
    return (
        s
            ? a
                ? ((t = eg.intl.string(eP.default.EIuDzZ)), (n = eg.intl.string(eP.default.ev0nwK)))
                : ((t = eg.intl.string(eP.default.O2eErX)), (n = eg.intl.string(eP.default["5W7HIh"])))
            : ((t = eg.intl.string(eP.default.PE4Cid)),
              (n = eg.intl.formatToPlainString(eP.default.Uf5Ve7, { serverName: l }))),
        (0, r.jsx)(eU.A, {
            targetElementRef: i,
            title: t,
            body: n,
            graphic: {
                type: "rive",
                rive: eD.f,
                aspectRatio: "16/9",
                props: { dataBinding: { on: !0 }, withReducedMotion: "halt", fit: "contain" },
            },
            actions: [{ text: eg.intl.string(eg.t.RzWDqY), variant: "primary", onClick: o }],
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
var ew = n(151098);
function eV(e) {
    let { guild: t, selected: i } = e,
        l = (0, eM.A)(),
        [s, o] = (0, eo.kn)(l ? [] : [en.M.GUILD_SPACE_COACHMARK], { bypassAutoDismiss: !0 }),
        d = s === en.M.GUILD_SPACE_COACHMARK,
        c = a.useRef(null),
        u = (0, eL.mN)(t),
        h = t.guildSpaceSettings?.publish_status === eT.B.PUBLISHED,
        m = a.useCallback(() => {
            (o(eh.i.USER_DISMISS), (0, ec.pX)(H.BVt.CHANNEL(t.id, eu.VV.GUILD_SPACE)));
        }, [t.id, o]),
        g = a.useCallback(() => {
            (o(eh.i.TAKE_ACTION), (0, ec.pX)(H.BVt.CHANNEL(t.id, eu.VV.GUILD_SPACE)));
        }, [t.id, o]),
        A = a.useCallback(() => {
            o(eh.i.USER_DISMISS);
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
        p = d ? (0, r.jsx)(er.E, { type: "new", variant: "primary" }) : null,
        C =
            u && !h
                ? (0, r.jsxs)("div", {
                      className: ew.c,
                      children: [
                          (0, r.jsx)("div", {
                              className: ef.Xs,
                              children: (0, r.jsx)(ei.m, {
                                  text: eg.intl.string(eg.t.R9GHya),
                                  position: "top",
                                  children: (0, r.jsx)(el.D, {
                                      onClick: f,
                                      "aria-label": eg.intl.string(eg.t.R9GHya),
                                      children: (0, r.jsx)(es.P, {
                                          size: "xs",
                                          color: "currentColor",
                                          className: ef.gE,
                                      }),
                                  }),
                              }),
                          }),
                          null != p ? (0, r.jsx)("div", { className: ef.yW, children: p }) : null,
                      ],
                  })
                : p;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(ed.G, {
                ref: c,
                className: u ? ef.Ki : void 0,
                id: `guild-space-tab-${t.id}`,
                renderIcon: (e) => (0, r.jsx)(ey.HomeIcon, { size: "md", color: "currentColor", className: e }),
                text: eg.intl.string(eg.t["04IVMq"]),
                selected: i,
                onClick: m,
                trailing: C,
            }),
            d
                ? (0, r.jsx)(eO, {
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
var eH = n(581007),
    ek = n(522435),
    eB = n(285406),
    eF = n(582904),
    ez = n(419534),
    eK = n(395504),
    eW = n(503698),
    eY = n.n(eW),
    eX = n(172218),
    eJ = n(695366),
    eq = n(104510),
    eZ = n(544048),
    e$ = n(868652),
    eQ = n(379229),
    e0 = n(37725),
    e1 = n(914732),
    e3 = n(828162),
    e9 = n(877624),
    e2 = n(549996),
    e5 = n(959456),
    e6 = n(247806);
function e7(e) {
    let { indicator: t } = e;
    if (null == t) return null;
    switch (t.type) {
        case eQ.cD.WARNING:
            return (0, r.jsx)(eJ.E, { color: m.A.colors.STATUS_WARNING, size: "sm" });
        case eQ.cD.UNREAD:
            return (0, r.jsx)(eS.hV, { count: t.count });
        default:
            return null;
    }
}
let e4 = { animation: { BEG: 0, END: 75 }, LOOP: { BEG: 76, END: 376 } },
    e8 = a.memo(function (e) {
        let { guildId: t, selected: i } = e,
            l = (0, e1.Ay)(t),
            { showHighlight: s, markAsDismissed: o } = (function () {
                let e = (0, e2.c)(e9.C.GUILD_BOOST_TAB_BANNER),
                    t = null != e && "guildBoostTabBanner" === e.properties.properties.oneofKind,
                    [n, i] = (0, eo.Cc)(t ? en.M.GUILD_BOOST_TAB_HIGHLIGHT : null, e?.promotionId ?? "");
                return { showHighlight: n === en.M.GUILD_BOOST_TAB_HIGHLIGHT, markAsDismissed: i };
            })(),
            { showNewBadgeOnRow: d, dismissNewBadgeIfShown: c } = (0, e0.A)(
                t,
                l?.indicator != null || l?.popout != null,
            ),
            u = a.useCallback(() => {
                (c(),
                    (0, e$.Zm)(t),
                    (0, e3.A)(t, K.A.GUILD_POWERUPS_CHANNEL_LIST_ROW),
                    l?.popout?.markAsDismissed(eh.i.INDIRECT_ACTION));
            }, [t, c, l]),
            [m, g] = a.useState(!1),
            A = (0, eX.K)(g, 0),
            f = (0, I.useModalsStore)(I.hasAnyModalOpenSelector),
            p = (0, h.bG)([ex.A], () => ex.A.hasLayers()),
            C = (0, eC.xr)((e) => e.fullScreenLayers.length > 0),
            E = !m || f || p || C,
            x = a.useCallback(() => {
                if (l?.popout == null || E) return null;
                switch (l?.popout?.type) {
                    case eQ.o.LEVEL_REACHED:
                        return (0, r.jsx)(eE.HW, { guildId: t, channelRowRef: A, ...l.popout });
                    case eQ.o.PERKS_AVAILABLE:
                        return (0, r.jsx)(eE.UB, { guildId: t, channelRowRef: A, ...l.popout });
                    case eQ.o.PERKS_PURCHASABLE:
                        return (0, r.jsx)(eE.lw, { guildId: t, channelRowRef: A, ...l.popout });
                    case eQ.o.NEW_PERK_AVAILABLE:
                        return (0, r.jsx)(eE.bo, { guildId: t, channelRowRef: A, ...l.popout });
                    case eQ.o.BOOST_TO_UNLOCK:
                        return (0, r.jsx)(eE.Gw, { guildId: t, channelRowRef: A, ...l.popout });
                    case eQ.o.EXPIRING_PERK:
                        return (0, r.jsx)(eE.Mr, { guildId: t, channelRowRef: A, ...l.popout });
                    case eQ.o.GAME_SERVER_HOSTING_AVAILABLE:
                    case eQ.o.GAME_SERVER_HOSTING_GUILD_ELIGIBLE:
                        return (0, r.jsx)(eE.jz, { guildId: t, channelRowRef: A, ...l.popout });
                    case eQ.o.GAME_SERVER_NEW_GAMES:
                        return (0, r.jsx)(eE.YX, { guildId: t, channelRowRef: A, ...l.popout });
                    default:
                        return (0, r.jsx)("div", {});
                }
            }, [t, l?.popout, A, E]);
        a.useEffect(() => {
            i && s && o(eh.i.AUTO_DISMISS);
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
                (0, r.jsx)(ed.G, {
                    ref: A,
                    className: e6.kL,
                    id: `skill-trees-${t}`,
                    renderIcon: (e) => (0, r.jsx)(eq._, { size: "md", className: e, color: "currentColor" }),
                    background:
                        N &&
                        (0, r.jsx)("div", {
                            className: e6.Fi,
                            children: (0, r.jsx)(eZ.t, {
                                nextScene: null == _ ? "animation" : "LOOP",
                                className: e6.UU,
                                sceneSegments: e4,
                                importData: () => n.e("867807").then(n.t.bind(n, 217762, 19)),
                                onScenePlay: b,
                                rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
                            }),
                        }),
                    text: (0, r.jsx)("span", {
                        className: eY()({ [e6.A7]: l?.showUnread === !0 }),
                        children: eg.intl.string(e5.default.yv3DJJ),
                    }),
                    selected: i,
                    onClick: u,
                    showUnread: l?.showUnread === !0,
                    trailing: d
                        ? (0, r.jsx)(er.E, { type: "new", variant: "primary" })
                        : (0, r.jsx)(e7, { indicator: l?.indicator }),
                }),
                x(),
            ],
        });
    });
var te = n(29477),
    tt = n(717421),
    tn = n(834730),
    ti = n(442433),
    tl = n(230135),
    ts = n(73153);
let tr = {};
class ta extends h.Ay.PersistedStore {
    static displayName = "GuildBoostingProgressBarPersistedStore";
    static persistKey = "PremiumGuildProgressBarPersistedStore";
    initialize(e) {
        null != e && (tr = e);
    }
    getState() {
        return tr;
    }
    getCountForGuild(e) {
        return tr[e];
    }
}
let to = new ta(ts.h, {
    APPLIED_GUILD_BOOST_COUNT_UPDATE: function (e) {
        let { guildId: t, premiumCount: n } = e;
        tr = { ...tr, [t]: n };
    },
    APPLIED_GUILD_BOOST_COUNT_RESET: function () {
        tr = {};
    },
});
var td = n(147925),
    tc = n(363487),
    tu = n(568065);
function th(e) {
    return (0, a.useMemo)(() => {
        if (null == e) return 0;
        let t = e?.features.has(H.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) === !0 ? 0 : H.M2T[H.TVA.TIER_3],
            n = Object.values(tu.sy),
            i = Object.values(tu.YV);
        return (
            n.concat(i).forEach((n) => {
                null == n.includedInLevel && (n.isEnabled?.(e.id) ?? !0) && (t += n.boostPrice);
            }),
            t
        );
    }, [e]);
}
var tm = n(196577);
let tg = (e) => {
    let { appliedBoostCount: t, maxBoostCount: n, premiumSubscriberCount: i, className: l, ref: s } = e,
        o = t >= n,
        d = Math.min((t / n) * 100, 100),
        c = `calc(${d}% - 4px)`,
        [u, h] = (0, tt.z)(
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
            className: tm.hQ,
            children: [
                (0, r.jsx)("div", { className: eY()(tm.L$, l) }),
                (0, r.jsx)(te.animated.div, { className: eY()(tm.qB, { [tm.mu]: d <= 5 }), style: u }),
                (0, r.jsxs)("div", {
                    className: tm.FS,
                    children: [
                        (0, r.jsxs)("div", {
                            className: tm.Ui,
                            children: [
                                (0, r.jsx)(tn.E, {
                                    className: tm.Qq,
                                    variant: "text-xs/semibold",
                                    children: eg.intl.string(e5.default.NI6Ihe),
                                }),
                                i >= n &&
                                    (0, r.jsx)(tn.E, {
                                        className: tm.Qq,
                                        variant: "text-xs/semibold",
                                        children: "\uD83C\uDF89",
                                    }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: tm.Ui,
                            children: [
                                (0, r.jsx)(tn.E, {
                                    className: eY()(tm.Qq, tm.ue),
                                    variant: "text-xs/semibold",
                                    children: o
                                        ? eg.intl.formatToPlainString(e5.default["Ehpq+7"], { appliedBoostCount: t })
                                        : eg.intl.formatToPlainString(e5.default["/rbPDs"], {
                                              appliedBoostCount: t,
                                              maxBoostCount: n,
                                          }),
                                }),
                                (0, r.jsx)(td.A, {
                                    width: 12,
                                    height: 12,
                                    direction: td.A.Directions.RIGHT,
                                    className: eY()(tm.Qq, tm.ue, tm.OW),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
};
function tA(e) {
    let { guild: t, withMargin: i } = e,
        l = th(t),
        s = (0, tc.A)(t.id),
        o = a.useCallback(() => {
            (0, e3.A)(t.id, K.A.GUILD_BOOSTING_SIDEBAR_DISPLAY);
        }, [t.id]),
        d = (0, h.bG)([to], () => to.getCountForGuild(t.id) ?? 0);
    a.useEffect(() => {
        d !== t.premiumSubscriberCount && (0, tl.u)(t.id, t.premiumSubscriberCount);
    }, [t.id, d, t.premiumSubscriberCount]);
    let c = a.useCallback(
        (e) => {
            s &&
                (0, ti.L3)(e, async () => {
                    let { default: e } = await n.e("371728").then(n.bind(n, 709843));
                    return (n) => (0, r.jsx)(e, { ...n, guild: t });
                });
        },
        [s, t],
    );
    return (0, r.jsx)(el.D, {
        "aria-label": void 0,
        role: "button",
        focusProps: { offset: { left: 10, right: 4 } },
        onClick: o,
        className: eY()(tm.kL, { [tm.aF]: i }),
        onContextMenu: c,
        children: (0, r.jsx)(tg, {
            appliedBoostCount: d,
            maxBoostCount: l,
            premiumSubscriberCount: t.premiumSubscriberCount,
        }),
    });
}
function tf(e) {
    let { guild: t, withMargin: n } = e;
    return (0, r.jsx)(tA, { guild: t, withMargin: n });
}
tg.displayName = "GuildPowerupsProgressBarUI";
var tp = n(455234),
    tC = n(181079),
    tE = n(607567),
    tx = n(403362),
    tN = n(996439),
    t_ = n(935208),
    tS = n(63995),
    tI = n(518769);
function tb(e) {
    let { voiceState: t, userNick: n, user: i } = e,
        l = (0, tE.hz)(t, n);
    return { user: i, voiceState: t, nick: n, comparator: l };
}
var tj = n(787541),
    tv = n(79858),
    tG = n(600761),
    tR = n(95701),
    ty = n(72314),
    tM = n(808728),
    tT = n(297469),
    tL = n(960755),
    tU = n(633965),
    tD = n(702841),
    tP = n(246338),
    tO = n(41200),
    tw = n(831617),
    tV = n(589603),
    tH = n(496767),
    tk = n(134413),
    tB = n(202776),
    tF = n(701785),
    tz = n(101611),
    tK = n(473529),
    tW = n(978165),
    tY = n(960253),
    tX = n(770666),
    tJ = n(508654),
    tq = n(521427),
    tZ = n(871123),
    t$ = n(281405),
    tQ = n(3026),
    t0 = n(821609),
    t1 = n(499373),
    t3 = n(559106),
    t9 = n(847374),
    t2 = n(285796),
    t5 = n(983851),
    t6 = n(914430),
    t7 = n(47167),
    t4 = n(485947),
    t8 = n(970853),
    ne = n(93055),
    nt = n(349828),
    nn = n(760658),
    ni = n(551851),
    nl = n(391507);
function ns(e) {
    e.stopPropagation();
}
function nr(e) {
    let { label: t, onClick: n, tabIndex: i } = e;
    return (0, r.jsx)(ei.m, {
        text: t,
        children: (0, r.jsx)(el.D, {
            className: eY()(nl.c9, nl.ih),
            onClick: n,
            tabIndex: i,
            role: "button",
            "aria-label": t,
            children: (0, r.jsx)(t1.T, { size: "xs", color: "currentColor", className: nl.hs }),
        }),
    });
}
let na = F(
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
                C = (0, t7.Ay)(i);
            t = null != u ? (d > u ? nl.mU : nl.TR) : nl.fx;
            let E = a.useCallback(() => {
                    f ? (0, t6.fh)(i.id) : (0, t6.Gv)(i.id);
                }, [i.id, f]),
                x = a.useCallback(
                    (e) => {
                        if ("null" !== i.id) {
                            let t = P.A.getGuild(i.getGuildId());
                            null != t &&
                                (0, ti.L3)(e, async () => {
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
                                n.e("589916"),
                                n.e("460773"),
                                n.e("208018"),
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
                    let n = (0, h.bG)([tC.A], () => tC.A.autoAddJoinedThreads),
                        { isAtLimit: i } = (0, ne.ft)();
                    return n &&
                        i &&
                        null != t &&
                        (0, M.ai)(e.getGuildId()) &&
                        e.type === H.rbe.GUILD_CATEGORY &&
                        t.trim().toLowerCase() === nt.A.toLowerCase()
                        ? { label: eg.intl.string(nn.default.WsUrMD), tooltip: eg.intl.string(nn.default.dW9Kov) }
                        : null;
                })(i, C),
                S = (0, t8.A)(i);
            null == S && p && !o && (S = { label: eg.intl.string(eg.t["fUYU+j"]), perform: N });
            let { role: b, tabIndex: j, ...v } = (0, c.rm)(i.id),
                G = a.useRef(null),
                R = a.useRef(null),
                y = (0, r.jsxs)("li", {
                    className: t,
                    "data-dnd-name": C,
                    children: [
                        (0, r.jsx)(t3.vN, {
                            focusTarget: G,
                            ringTarget: R,
                            offset: { left: 4, right: 4 },
                            children: (0, r.jsxs)("div", {
                                ref: R,
                                className: eY()(nl.Ki, nl.iE, { [nl.yZ]: f, [nl.SU]: A, [nl.vk]: !0 }),
                                onContextMenu: x,
                                children: [
                                    (0, r.jsxs)(el.D, {
                                        innerRef: G,
                                        className: nl.rb,
                                        tabIndex: j,
                                        ...v,
                                        onClick: E,
                                        "aria-label": eg.intl.formatToPlainString(eg.t.y5l3J2, { categoryName: C }),
                                        "aria-expanded": !f,
                                        focusProps: { enabled: !1 },
                                        children: [
                                            (0, r.jsx)(t4.A, {
                                                className: nl.UU,
                                                children: (0, r.jsx)(tQ.A, { children: C }),
                                            }),
                                            null != _
                                                ? (0, r.jsx)("span", {
                                                      className: nl.qS,
                                                      children: (0, r.jsx)(ei.m, {
                                                          asContainer: !0,
                                                          text: _.tooltip,
                                                          children: (0, r.jsx)(er.E, {
                                                              type: { text: _.label },
                                                              variant: "secondary",
                                                          }),
                                                      }),
                                                  })
                                                : null,
                                            m
                                                ? null
                                                : (0, r.jsx)(t9.a, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: nl.Kk,
                                                  }),
                                        ],
                                    }),
                                    (0, r.jsx)("div", {
                                        onClick: ns,
                                        className: nl.Y_,
                                        children:
                                            null != S
                                                ? (0, r.jsx)(nr, { label: S.label, onClick: S.perform, tabIndex: j })
                                                : null,
                                    }),
                                ],
                            }),
                        }),
                        g,
                    ],
                });
            return null != s && null != l ? s(l(y)) : y;
        }),
    ),
    no = a.memo(function (e) {
        let { name: t, onDismiss: n, className: i } = e;
        return (0, r.jsx)("li", {
            className: eY()(i, nl.fx),
            children: (0, r.jsxs)("div", {
                className: eY()(nl.Ki, nl._V),
                children: [
                    (0, r.jsx)("div", {
                        className: nl.rb,
                        children: (0, r.jsx)(t4.A, { className: nl.UU, children: (0, r.jsx)(tQ.A, { children: t }) }),
                    }),
                    null != n
                        ? (0, r.jsx)(ei.m, {
                              asContainer: !0,
                              text: eg.intl.string(eg.t["5qNmsU"]),
                              children: (0, r.jsx)(el.D, {
                                  className: nl.r,
                                  onClick: n,
                                  children: (0, r.jsx)(t2.a, { size: "md", color: "currentColor", className: nl.X8 }),
                              }),
                          })
                        : null,
                ],
            }),
        });
    }),
    nd = a.memo(function (e) {
        let { category: t } = e,
            n = (0, h.bG)([ni.A], () => ni.A.isVoiceCategoryCollapsed(t.guild.id)),
            i = a.useCallback(() => {
                var e, i;
                n
                    ? ((e = t.guild.id), ts.h.dispatch({ type: "VOICE_CATEGORY_EXPAND", guildId: e, expand: !0 }))
                    : ((i = t.guild.id), ts.h.dispatch({ type: "VOICE_CATEGORY_COLLAPSE", guildId: i, expand: !1 }));
            }, [t.guild.id, n]);
        return (0, r.jsx)("div", {
            className: nl.oA,
            children: (0, r.jsx)(t0.$, {
                variant: "secondary",
                fullWidth: !0,
                onClick: i,
                icon: t5.H,
                text: n ? eg.intl.string(eg.t["/eB9Bg"]) : eg.intl.string(eg.t.Q2gPWl),
            }),
        });
    }),
    nc = a.memo(function (e) {
        let { category: t, channel: n } = e,
            i = (0, h.bG)([ni.A], () => ni.A.isVoiceCategoryCollapsed(t.guild.id));
        return i || null == n || n.record.type === H.rbe.GUILD_CATEGORY
            ? i
                ? (0, r.jsx)("li", {
                      className: nl.fx,
                      children: (0, r.jsx)("div", {
                          className: eY()(nl.Ki, nl._V),
                          children: (0, r.jsx)(t4.A, {
                              className: nl.UU,
                              children: (0, r.jsx)(tQ.A, { children: eg.intl.string(eg.t["V/u9Dy"]) }),
                          }),
                      }),
                  })
                : null
            : (0, r.jsx)("div", { style: { height: 16 } });
    }),
    nu = a.memo(function (e) {
        let { channel: t } = e,
            n = (0, t7.Ay)(t);
        return (0, r.jsx)("li", {
            className: nl.fx,
            children: (0, r.jsx)("div", {
                className: eY()(nl.Ki, nl._V),
                children: (0, r.jsx)(t4.A, { className: nl.UU, children: (0, r.jsx)(tQ.A, { children: n }) }),
            }),
        });
    });
var nh = n(728321),
    nm = n(244083);
let ng = { origin: { x: -36, y: 7 }, targetWidth: 232, targetHeight: 40, offset: { x: 0, y: 0 } };
var nA = n(906659);
let nf = a.memo(function (e) {
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
        case tT.PU:
            return (0, r.jsx)("div", { style: { height: u } });
        case tT.bK:
            if (n.features.has(H.GuildFeatures.HUB)) return null;
            return (0, r.jsx)("div", { style: { height: u } });
        case tT.HP:
            return (0, r.jsx)(no, { name: eg.intl.string(eg.t.mlPMCy) });
        case i.recentsSectionNumber:
            return (0, r.jsx)(no, { name: eg.intl.string(eg.t.gKcrqM), onDismiss: d });
        case i.voiceChannelsSectionNumber: {
            let e = i.getCategoryFromSection(i.voiceChannelsSectionNumber);
            if (null == e || e.isEmpty()) return null;
            let n = i.getChannelFromSectionRow(t, 0)?.channel;
            return (0, r.jsxs)(a.Fragment, {
                children: [(0, r.jsx)("div", { className: nA.ts }), (0, r.jsx)(nc, { category: e, channel: n })],
            });
        }
        case tT.TF: {
            let e = i.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, r.jsx)(na, {
                channel: e.record,
                position: e.position,
                disableManageChannels: o,
                children: (0, r.jsx)(nh.A, {
                    inlineSpecs: ng,
                    arrowAlignment: nm.oN.TOP,
                    tutorialId: "organize-by-topic",
                    position: "right",
                }),
            });
        }
        default: {
            let e = i.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, r.jsx)(na, { channel: e.record, position: e.position, disableManageChannels: o });
        }
    }
});
var np = n(104171),
    nC = n(186369),
    nE = n(970812),
    nx = n(147036);
function nN(e, t, n) {
    return {
        hasDivider:
            !(function (e, t) {
                if (t === tT.PU) {
                    let t = e.getGuildActionSection().getRows();
                    return (
                        (1 === t.length && t[0] === t$.n.GUILD_PREMIUM_PROGRESS_BAR) ||
                        e.getGuildActionSection().isEmpty()
                    );
                }
                return 0 === e.getSections(!1)[t];
            })(e, n) &&
            (n === tT.PU ||
                ((0, M.ai)(e.id)
                    ? n !== e.getSections(!1).length - 1
                    : n === tT.HP ||
                      (!!t && n !== tT.bK && (n === e.recentsSectionNumber || (e.voiceChannelsSectionNumber, !1))))),
        canHaveVoiceSummary:
            n !== tT.PU &&
            n !== tT.HP &&
            n !== tT.bK &&
            n !== e.recentsSectionNumber &&
            n !== e.voiceChannelsSectionNumber,
    };
}
let n_ = a.memo(function (e) {
        let { guildChannels: t, guildChannelsVersion: n } = e,
            i = a.useMemo(() => t.getCategoryFromSection(t.voiceChannelsSectionNumber), [t, n]);
        return null == i ? null : (0, r.jsx)(nd, { category: i });
    }),
    nS = a.memo(function (e) {
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
            { hasDivider: u, canHaveVoiceSummary: m } = a.useMemo(() => nN(n, c, t), [n, c, t, i]),
            g = a.useMemo(() => (t === tT.PU ? null : n.getCategoryFromSection(t)), [n, t, i]),
            A = (0, eK.jN)(s),
            { enableWaveformIcon: f } = (0, nC.b)(s, "ChannelListSectionFooter"),
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
                () => (0, nx.fK)({ channels: p, selectedChannelId: o, selectedVoiceChannelId: d, voiceStates: l }),
                [p, o, d, l],
            );
        if (t === n.voiceChannelsSectionNumber) return (0, r.jsx)(n_, { guildChannels: n, guildChannelsVersion: i });
        let E = u ? (0, r.jsx)("div", { className: nA.ts }) : null;
        return m && 0 !== C.length
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)("div", {
                          className: nA.qz,
                          children: (0, r.jsx)(np.Ay, {
                              renderIcon: !0,
                              users: C,
                              max: 8,
                              showUserPopout: !0,
                              guildId: s,
                              renderLeadingIcon: f
                                  ? (e) => (0, r.jsx)(nE.A, { color: "currentColor", className: eY()(e, ef.Gj) })
                                  : void 0,
                          }),
                      }),
                      E,
                  ],
              })
            : E;
    });
var nI = n(683063),
    nb = n(289873),
    nj = n(805942),
    nv = n(722701),
    nG = n(731084),
    nR = n(381991),
    ny = n(738601),
    nM = n(573163),
    nT = n(308528),
    nL = n(534890),
    nU = n(262763),
    nD = n(499211),
    nP = n(406704),
    nO = n(747926),
    nw = n(977997),
    nV = n(807632),
    nH = n(37411);
function nk(e) {
    let { thread: t, tabIndex: n } = e,
        i = (0, nV.YG)(t),
        l = (0, nV.IO)(t),
        s = (0, nP._M)(t);
    return i && l && s ? (0, r.jsx)(nB, { thread: t, tabIndex: n }) : null;
}
function nB(e) {
    let { thread: t, tabIndex: n } = e,
        i = (0, h.bG)([nw.A], () => nw.A.isInChannel(t.id), [t.id]),
        { needSubscriptionToAccess: l } = (0, nD.A)(t.id),
        s = a.useCallback(() => {
            nU.A.handleVoiceConnect({ channel: t, connected: i, needSubscriptionToAccess: l, locked: !1 });
        }, [t, i, l]),
        o = a.useCallback(() => {
            (0, nO.JA)(t, !0, nH.H9.CHANNEL_LIST);
        }, [t]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(ei.m, {
                asContainer: !0,
                text: eg.intl.string(eg.t["96ANUN"]),
                children: (0, r.jsx)(el.D, {
                    className: ef.Xs,
                    onClick: s,
                    tabIndex: n,
                    "aria-label": eg.intl.string(eg.t["96ANUN"]),
                    children: (0, r.jsx)(t5.H, { size: "xs", color: "currentColor", className: ef.gE }),
                }),
            }),
            (0, r.jsx)(ei.m, {
                asContainer: !0,
                text: eg.intl.string(eg.t.ZXxLQg),
                children: (0, r.jsx)(el.D, {
                    className: ef.Xs,
                    onClick: o,
                    tabIndex: n,
                    "aria-label": eg.intl.string(eg.t.ZXxLQg),
                    children: (0, r.jsx)(nL.ChatIcon, { size: "xs", color: "currentColor", className: ef.gE }),
                }),
            }),
        ],
    });
}
var nF = n(897898),
    nz = n(152007);
function nK(e) {
    return null != e && e > 0;
}
var nW = n(166444),
    nY = n(182637),
    nX = n(428689),
    nJ = n(525093);
function nq(e) {
    let { total: t, users: n, videoLimit: i } = e;
    return (0, r.jsxs)("div", {
        className: nJ.iE,
        children: [
            (0, r.jsxs)(tn.E, {
                tag: "span",
                color: "text-subtle",
                variant: "text-xs/medium",
                className: eY()(nJ.VV, { [nJ.Ki]: i, [nJ.$G]: n >= 100 }),
                children: [
                    i ? (0, r.jsx)(nX.VideoIcon, { size: "md", color: "currentColor", className: nJ.LB }) : null,
                    n.toString().padStart(2, "0"),
                ],
            }),
            (0, r.jsx)(tn.E, {
                tag: "span",
                color: "text-subtle",
                variant: "text-xs/medium",
                className: eY()(nJ.X5, { [nJ.$G]: t >= 100 }),
                children: t.toString().padStart(2, "0"),
            }),
        ],
    });
}
function nZ(e) {
    let { channel: t, video: n, userCount: i } = e,
        { limit: l } = (0, nY.A)(t),
        s = -1,
        a = !1;
    return (
        t.userLimit > 0 && (s = t.userLimit),
        n && l > 0 && ((a = s < 0 || l < s), (s = s > 0 ? Math.min(s, l) : l)),
        (0, r.jsx)(nq, { users: i, total: s, videoLimit: a })
    );
}
var n$ = n(146630);
function nQ(e) {
    let { mentionsCount: t, isMentionLowImportance: n } = e;
    return (0, r.jsx)("div", {
        className: n$.R,
        "aria-hidden": !0,
        children: (0, r.jsx)(eS.hV, {
            count: t,
            color: n ? m.A.colors.BACKGROUND_MOD_STRONG.css : m.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
        }),
    });
}
var n0 = n(588224),
    n1 = n(672812),
    n3 = n(447199);
function n9(e) {
    let { thread: t, countInVoice: n, hasVideo: i, mentionCount: l, isMentionLowImportance: s } = e,
        a = n > 0 && t.userLimit > 0,
        o = nK(l);
    return a || o
        ? (0, r.jsxs)("div", {
              className: ef.yW,
              children: [
                  a ? (0, r.jsx)(nZ, { userCount: n, video: i, channel: t }) : null,
                  o ? (0, r.jsx)(nQ, { mentionsCount: l, isMentionLowImportance: s }) : null,
              ],
          })
        : null;
}
function n2(e) {
    let { style: t, withGuildIcon: n, inverted: i } = e,
        l = { className: eY()(n3.GI, { [n3.a7]: n }, { [n3.BJ]: i }), style: t },
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
let n5 = a.memo(function (e) {
    let { thread: t, isSelectedChannel: i, isSelectedVoice: l, isLast: s, withGuildIcon: o } = e,
        d = (0, h.bG)([tE.Ay], () => tE.Ay.getVoiceStatesForChannel(t), [t]),
        u = (0, h.bG)([nw.A], () => nw.A.hasVideo(t.id)),
        m = (0, t7.Ay)(t),
        {
            unread: g,
            mentionCount: A,
            isMentionLowImportance: f,
        } = (0, h.cf)([nM.Ay], () => ({
            unread: nM.Ay.hasUnread(t.id),
            mentionCount: nM.Ay.getMentionCount(t.id),
            isMentionLowImportance: nM.Ay.getIsMentionLowImportance(t.id),
        })),
        p = (0, h.bG)([nz.A], () => nz.A.isMuted(t.id)),
        C = a.useCallback(
            (e) => {
                (0, nO.JA)(t, !e.shiftKey, nH.H9.CHANNEL_LIST);
            },
            [t],
        ),
        E = a.useCallback(() => {
            nT.A.preload(t.guild_id, t.id);
        }, [t.guild_id, t.id]),
        x = a.useCallback(
            (e) => {
                (0, nF.A)(e, t);
            },
            [t],
        ),
        N = a.useCallback(
            (e) => {
                let i = U.A.getChannel(t.id);
                null != i &&
                    (0, ti.L3)(e, async () => {
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
                ? eg.intl.formatToPlainString(eg.t["ZL7+I6"], { channelName: m, mentionCount: A })
                : g
                  ? eg.intl.formatToPlainString(eg.t.YlVvmc, { channelName: m })
                  : eg.intl.formatToPlainString(eg.t["0nZpiF"], { channelName: m });
    return (0, r.jsxs)("li", {
        role: S,
        className: eY()(ef.fx, { [ef.wH]: i }),
        children: [
            (0, r.jsx)(n2, { withGuildIcon: o }),
            s
                ? null
                : (0, r.jsx)(n2, {
                      withGuildIcon: o,
                      inverted: !0,
                      style: { transform: "rotateX(180deg) translateY(-9px)" },
                  }),
            (0, r.jsx)(t3.vN, {
                focusTarget: b,
                ringTarget: b,
                offset: { top: 2, bottom: 2, right: 4 },
                children: (0, r.jsxs)("div", {
                    className: eY()(ef.Ki, n1.iE, n1.ZS, {
                        [n1.J1]: i,
                        [n1.F4]: !i && p,
                        [n1.V2]: !p && !i && g,
                        [n1.lY]: o,
                    }),
                    onMouseDown: E,
                    onContextMenu: N,
                    children: [
                        !g || p || i ? null : (0, r.jsx)("div", { className: eY()(n1.gy, n1.WS) }),
                        (0, r.jsx)(el.D, {
                            ...I,
                            innerRef: b,
                            className: n1.nf,
                            onClick: C,
                            onAuxClick: x,
                            "aria-label": j,
                            focusProps: { enabled: !1 },
                            children: (0, r.jsxs)("div", {
                                className: eY()(n1.Y5, n1.__invalid_threadMainContent),
                                children: [
                                    (0, r.jsx)(tn.E, {
                                        variant: "text-sm/medium",
                                        color: "none",
                                        className: n1.UU,
                                        children: (0, r.jsx)(tQ.A, { "aria-hidden": !0, children: m }),
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: n1.Y_,
                                        onClick: nW.dG,
                                        onKeyDown: nW.dG,
                                        children: [
                                            (0, r.jsx)(n9, {
                                                thread: t,
                                                countInVoice: _,
                                                hasVideo: u,
                                                mentionCount: A,
                                                isMentionLowImportance: f,
                                            }),
                                            (0, r.jsx)(nk, { thread: t, tabIndex: I.tabIndex }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(n0.A, {
                channel: t,
                collapsed: !l && 1 !== d.length,
                collapsedMax: 6,
                voiceStates: d,
                isThread: !0,
            }),
        ],
    });
});
var n6 = n(790782),
    n7 = n(809526),
    n4 = n(512656),
    n8 = n(162052);
let ie = { transform: "rotateX(180deg) translateY(-9px)" };
function it(e) {
    let { projectId: t } = e,
        { label: n, detail: i } = (function (e) {
            let {
                    activity: t,
                    compacting: n,
                    saving: i,
                    publishing: l,
                } = (0, h.cf)(
                    [nj.A, nv.A],
                    () => ({
                        activity: nj.A.getThinkingActivity(e),
                        compacting: nj.A.isCompacting(e),
                        saving: nj.A.isSaving(e),
                        publishing: nv.A.getPublishStatus(e)?.publishing === !0,
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
            return { label: (0, nG.Dy)({ activity: t, compacting: n, saving: i, publishing: l }), detail: r };
        })(t);
    return (0, r.jsx)(nI.u, {
        title: null != i ? n : void 0,
        body: i ?? n,
        lineClamp: 4,
        position: "right",
        ariaHidden: !0,
        children: (0, r.jsx)("div", {
            className: ef.yW,
            "aria-hidden": !0,
            children: (0, r.jsx)(nb.y, { type: nb.t.SPINNING_CIRCLE_SIMPLE, className: n4.u1, itemClassName: n4.pu }),
        }),
    });
}
let ii = a.memo(function (e) {
    let { project: t, isLast: n, selected: i } = e,
        l = t.id,
        s = (0, ny.yX)(l),
        o = (0, h.bG)([nM.Ay], () => nM.Ay.getMentionCount(l, n6.P.CONJURING_PROJECT), [l]),
        d = "working" === s,
        u = "unread" === s && !i,
        { role: m, ...g } = (0, c.rm)(`conjure-project-${l}`),
        A = a.useRef(null),
        f = a.useCallback(() => (0, nR.A)(l, "project_list"), [l]),
        p = [t.name, d ? eg.intl.string(n7.default["Y8pS+n"]) : u ? eg.intl.string(n7.default["N+3Pzk"]) : null]
            .filter((e) => null != e)
            .join(", ");
    return (0, r.jsxs)("li", {
        role: m,
        className: eY()(ef.fx, n4.nM, { [ef.wH]: i }),
        children: [
            (0, r.jsx)(n2, {}),
            n ? null : (0, r.jsx)(n2, { inverted: !0, style: ie }),
            u ? (0, r.jsx)("div", { className: eY()(n1.gy, n1.WS, n4.gy) }) : null,
            (0, r.jsx)(t3.vN, {
                focusTarget: A,
                ringTarget: A,
                offset: { top: 2, bottom: 2, right: 4 },
                children: (0, r.jsx)("div", {
                    className: eY()(n1.iE, n1.ZS, { [n1.J1]: i, [n1.V2]: u }),
                    children: (0, r.jsx)(el.D, {
                        ...g,
                        innerRef: A,
                        className: n1.nf,
                        onClick: f,
                        "aria-label": p,
                        focusProps: { enabled: !1 },
                        children: (0, r.jsxs)("div", {
                            className: n1.Y5,
                            children: [
                                (0, r.jsx)(tn.E, {
                                    variant: "text-sm/medium",
                                    color: "none",
                                    className: n1.UU,
                                    children: (0, r.jsx)(tQ.A, {
                                        "aria-hidden": !0,
                                        className: d ? n8.Hz : void 0,
                                        children: t.name,
                                    }),
                                }),
                                (0, r.jsx)("div", {
                                    className: n1.Y_,
                                    children: d
                                        ? (0, r.jsx)(it, { projectId: l })
                                        : u
                                          ? (0, r.jsx)("div", {
                                                className: ef.yW,
                                                children: (0, r.jsx)(nQ, { mentionsCount: Math.max(1, o) }),
                                            })
                                          : null,
                                }),
                            ],
                        }),
                    }),
                }),
            }),
        ],
    });
});
function il(e) {
    let { projects: t } = e,
        n = (0, J.Xj)((0, Y.zy)().pathname);
    return 0 === t.length
        ? null
        : (0, r.jsx)("li", {
              className: n3.kL,
              children: (0, r.jsxs)("ul", {
                  role: "group",
                  "aria-label": eg.intl.string(n7.default.e81UDK),
                  children: [
                      (0, r.jsx)("div", { className: n3.eh }),
                      t.map((e, i) =>
                          (0, r.jsx)(ii, { project: e, isLast: i === t.length - 1, selected: e.id === n }, e.id),
                      ),
                  ],
              }),
          });
}
var is = n(152367),
    ir = n(309010);
function ia(e) {
    let { guild: t, selected: n } = e,
        i = (0, h.bG)([Z.Ay], () => Z.Ay.getSelectedProjectId(t.id), [t.id]),
        l = (0, h.bG)([ir.Ay], () => ir.Ay.getChannelId(), []),
        s = (0, h.bG)([w.A], () => w.A.getGuildId(), []);
    return (0, r.jsx)(ed.G, {
        id: `conjure-${t.id}`,
        renderIcon: (e) =>
            (0, r.jsx)(is.D, { size: "custom", color: "currentColor", width: 20, height: 20, className: e }),
        text: eg.intl.string(n7.default.uk6jhJ),
        selected: n,
        onClick: () => {
            let e = l === eu.VV.CONJURE && s === t.id;
            (0, ec.pX)(H.BVt.CHANNEL(t.id, eu.VV.CONJURE, null == i || e ? null : i));
        },
    });
}
var io = n(625903),
    id = n(283973),
    ic = n(933832),
    iu = n(435183),
    ih = n(698441),
    im = n(855687),
    ig = n(816662),
    iA = n(446600),
    ip = n(616356);
function iC(e, t, n) {
    return null != t && !!t && !(0, j.ws)(n, e.type);
}
function iE(e, t) {
    return null == t ? ef.fx : e > t ? ef.mU : ef.TR;
}
function ix(e) {
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
            ((0, tR.tr)(t.type) && !O.A.can(H.xBc.VIEW_CHANNEL, t)) ||
            (t.isGuildVocal() && !O.A.can(H.xBc.CONNECT, t)) ||
            !tR.bk.has(t.type) ||
            t.isModeratorReportChannel(),
    )
        ? null
        : (0, r.jsx)(ei.m, {
              asContainer: !0,
              text: eg.intl.string(eg.t["3gUsJb"]),
              ariaHidden: !0,
              children: (0, r.jsx)(el.D, {
                  className: eY()(ef.Xs, { [ef.Tf]: l, [ef.bw]: a, [ef.UI]: !a }),
                  onClick: function () {
                      iu.Ay.open(t.id);
                  },
                  tabIndex: i,
                  "aria-label": eg.intl.string(eg.t["3gUsJb"]),
                  focusProps: s ? { offset: 2 } : void 0,
                  children: (0, r.jsx)(io.SettingsIcon, { size: "xs", color: "currentColor", className: ef.gE }),
              }),
          });
}
function iN(e) {
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
        m = (0, h.bG)([iA.A], () => iA.A.getStageInstanceByChannel(t.id), [t.id]),
        g = (0, h.bG)([ih.Ay], () => ih.Ay.getActiveEventByChannel(t.id), [t.id]),
        A = (0, h.bG)([O.A], () => (0, im.K)(O.A, u, t, m)),
        f = (0, h.bG)([], () =>
            t?.type === H.rbe.GUILD_VOICE ? eg.intl.string(eg.t["EE+P0H"]) : eg.intl.string(eg.t["0jeAXt"]),
        ),
        p = a.useRef(null);
    if (l || !A || t.isModeratorReportChannel() || t.isThread()) return null;
    let C = (0, r.jsx)(id.R, { size: "xs", className: ef.gE, "aria-hidden": !0, color: "currentColor" });
    return (
        i &&
            (C = (0, r.jsx)(nh.A, {
                childRef: p,
                tutorialId: "instant-invite",
                position: "left",
                children: (0, r.jsx)("div", { ref: p, children: C }),
            })),
        (0, r.jsx)(ei.m, {
            asContainer: !0,
            text: f,
            ariaHidden: !0,
            children: (0, r.jsx)(el.D, {
                className: eY()(ef.Xs, { [ef.Tf]: o, [ef.bw]: c, [ef.UI]: !c }),
                onClick: function () {
                    if (null != u) {
                        let e = ip.A.getAllActiveStreams().filter(
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
function i_(e) {
    let { channel: t, shouldEnlargeTargets: n } = e;
    return (0, r.jsx)(ei.m, {
        asContainer: !0,
        text: eg.intl.string(eg.t["ROh4T+"]),
        ariaHidden: !0,
        children: (0, r.jsx)(el.D, {
            className: ef.Xs,
            onClick: function () {
                (0, ig.Ol)(t.guild_id, t.id);
            },
            "aria-label": eg.intl.string(eg.t["ROh4T+"]),
            focusProps: n ? { offset: 2 } : void 0,
            children: (0, r.jsx)(es.P, { size: "xs", color: "currentColor", className: ef.gE }),
        }),
    });
}
function iS(e) {
    let { channel: t, shouldEnlargeTargets: n } = e;
    return (0, r.jsx)(ei.m, {
        asContainer: !0,
        text: eg.intl.string(eg.t["N2c/Un"]),
        ariaHidden: !0,
        children: (0, r.jsx)(el.D, {
            className: ef.Xs,
            onClick: function () {
                (0, ig.jA)(t.guild_id, t.id, !0, { section: H.JJy.CHANNEL_LIST });
            },
            "aria-label": eg.intl.string(eg.t["N2c/Un"]),
            focusProps: n ? { offset: 2 } : void 0,
            children: (0, r.jsx)(ic.CheckmarkLargeIcon, { size: "xs", color: "currentColor", className: ef.gE }),
        }),
    });
}
class iI extends a.PureComponent {
    static defaultProps = { isDefaultChannel: !1 };
    renderEditButton() {
        return (0, r.jsx)(ix, { ...this.props });
    }
    renderInviteButton() {
        return (0, r.jsx)(iN, { ...this.props });
    }
    renderRemoveSuggestionButton() {
        return (0, r.jsx)(i_, { ...this.props });
    }
    renderAcceptSuggestionButton() {
        return (0, r.jsx)(iS, { ...this.props });
    }
    getClassName() {
        let { position: e, sortingPosition: t } = this.props;
        return iE(e, t);
    }
    isDisabled() {
        let { channel: e, sorting: t, sortingType: n } = this.props;
        return iC(e, t, n);
    }
}
let ib = F(function (e) {
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
        A = (0, h.bG)([U.A, tM.Ay], () => {
            let e = tM.Ay.getDirectoryChannelIds(t.id);
            return 0 === e.length ? null : U.A.getChannel(e[0]);
        }),
        f = (0, h.bG)([U.A], () => U.A.getChannel(A?.parent_id)),
        p = i === A?.id,
        C = (0, t7.Ay)(A),
        E = (0, h.bG)([O.A], () =>
            null != f ? O.A.can(H.xBc.MANAGE_CHANNELS, f) : null != t && O.A.can(H.xBc.MANAGE_CHANNELS, t),
        ),
        x = a.useCallback(
            (e) => {
                null != A &&
                    (0, ti.L3)(e, async () => {
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
    let N = iE(l, c),
        _ = iC(A, o, d),
        S = (0, r.jsx)("div", {
            className: eY()(N, { [ef.r9]: _, [ef.wH]: p }),
            "data-dnd-name": C,
            children: (0, r.jsxs)(nW.Ay, {
                className: ef.Ki,
                channel: A,
                guild: t,
                selected: p,
                onContextMenu: x,
                forceInteractable: !0,
                resolvedUnreadSetting: n6.e.ONLY_MENTIONS,
                children: [
                    (0, r.jsx)(iN, { channel: A, tabIndex: g }),
                    (0, r.jsx)(ix, { channel: A, disableManageChannels: s, tabIndex: g }),
                ],
            }),
        });
    return (E && (S = m(u(S))), S);
});
var ij = n(34188),
    iv = n(812095),
    iG = n(733391),
    iR = n(832163),
    iy = n(831024),
    iM = n(44724),
    iT = n(849134),
    iL = n(770178),
    iU = n(307076);
let iD = Math.ceil(Math.sqrt(115200)),
    iP = (iD - 240) / 2;
function iO(e) {
    let { children: t, ref: n } = e,
        [i, l] = a.useState(-1),
        s = a.useCallback((e) => {
            l(e.contentRect.width);
        }, []),
        o = (0, iL.w)(s, [], { fireOnMount: !0 }),
        [{ shineSpring: d }, c] = (0, tt.z)(() => ({
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
                    (0, r.jsx)(te.animated.div, {
                        className: iU.q,
                        style: {
                            transform: d.to(
                                (e) => `translateX(calc(${e * i}px + ${e * iD}px)) translateY(-50%) rotate(45deg)`,
                            ),
                        },
                    }),
                ),
            [t, i, d],
        );
    return (
        a.useImperativeHandle(n, () => ({ onMouseEnter: u, onMouseLeave: h }), [u, h]),
        (0, r.jsx)("div", {
            className: iU.i,
            onMouseEnter: u,
            onMouseLeave: h,
            onFocus: u,
            onBlur: h,
            ref: o,
            style: { "--custom-shine-dimensions": "240px", "--custom-shine-rotated-dimensions-delta": `${iP}px` },
            children: m,
        })
    );
}
var iw = n(371794),
    iV = n(240248),
    iH = n(998218),
    ik = n(427797);
let iB = a.memo(function (e) {
    let { guild: t, selected: i } = e,
        l = a.useRef(null),
        s = a.useRef(null),
        o = (0, I.useHasAnyModalOpen)(),
        d = (0, h.bG)([ex.A], () => ex.A.hasLayers()),
        c = (0, eC.xr)((e) => e.fullScreenLayers.length > 0);
    a.useEffect(() => {
        (0, iG.Kh)(t.id);
    }, [t.id]);
    let u = (0, h.bG)([iR.A], () => iR.A.getAnnouncement(t.id)),
        m = u?.state === "success" ? u.announcement : void 0,
        [g, A] = (0, eo.x_)(en.M.GAME_SHOP_NEW_BADGE, t.id, m?.id ?? "", void 0, !0),
        f = g === en.M.GAME_SHOP_NEW_BADGE && null != m,
        p = (0, tZ.nY)(t.id),
        C = (0, iy.u)({ surface: "storefront_badge", applicationId: p }),
        E = C?.tooltip,
        x = null;
    (f && (x = eg.intl.string(eg.t.y2b7CA)), null != C && (x = C.text));
    let [N, _] = (0, eo.x_)(en.M.GAME_SHOP_NEW_DROP_POPOVER, t.id, m?.id ?? ""),
        S = N === en.M.GAME_SHOP_NEW_DROP_POPOVER && null != m;
    a.useEffect(() => {
        i && (f && A(eh.i.INDIRECT_ACTION), S && _(eh.i.INDIRECT_ACTION));
    }, [A, _, i, f, S]);
    let b = a.useCallback(() => {
            (A(eh.i.TAKE_ACTION), _(eh.i.TAKE_ACTION));
            let e = (0, tZ.mq)(t.id),
                n = iR.A.getStorefrontState(e)?.activePage ?? 0;
            (0, ec.pX)(H.BVt.CHANNELS_GAME_SHOP(t.id, n));
        }, [t.id, A, _]),
        j = a.useCallback(() => {
            (0, iM.X)({ guildId: t.id, forceFetch: S });
        }, [t.id, S]),
        v = a.useCallback(() => {
            _(eh.i.USER_DISMISS);
        }, [_]),
        G = a.useCallback(
            (e) => {
                null != t &&
                    (0, ti.L3)(e, async () => {
                        let { default: e } = await n.e("899523").then(n.bind(n, 41614));
                        return (n) => (0, r.jsx)(e, { ...n, guild: t });
                    });
            },
            [t],
        ),
        R = a.useCallback(() => {
            l.current?.onMouseEnter(null, 500);
        }, [l]),
        y = a.useMemo(() => {
            if (null == x) return null;
            let e = (0, r.jsx)(er.E, { type: { text: x }, variant: "primary" });
            return null != E ? (0, r.jsx)(ei.m, { asContainer: !0, text: E, children: e }) : e;
        }, [x, E]),
        M = a.useCallback(
            (e) =>
                (0, r.jsx)(ed.G, {
                    background: (0, r.jsx)("div", { className: ik.D }),
                    innerClassName: ik.Z,
                    ref: s,
                    id: `game-shop-${t.id}`,
                    renderIcon: (e) =>
                        (0, r.jsx)(ij.U, {
                            size: "custom",
                            color: "currentColor",
                            width: 20,
                            height: 20,
                            className: e,
                        }),
                    text: (0, r.jsx)(tn.E, {
                        variant: "text-md/medium",
                        className: n1.UU,
                        children: eg.intl.string(eg.t.vyaWs7),
                    }),
                    selected: i,
                    onMouseDown: j,
                    onClick: b,
                    onContextMenu: G,
                    trailing: (0, r.jsxs)(r.Fragment, { children: [y, e] }),
                }),
            [t.id, i, j, b, G, y],
        ),
        T = a.useMemo(() => {
            if (null == m) return null;
            switch (m.type) {
                case "guild-application-announcement": {
                    let e =
                            null != m.assetId
                                ? iH.A.toURLSafe((0, iw.YE)(m.applicationId, m.assetId, 256, "webp"))
                                : void 0,
                        t =
                            null != m.backgroundImageAssetId
                                ? iH.A.toURLSafe((0, iw.YE)(m.applicationId, m.backgroundImageAssetId, 256, "webp"))
                                : void 0;
                    if (null == e) return null;
                    return {
                        graphicSource: { type: "sku", imageUrl: e, backgroundImageUrl: t },
                        title: eg.intl.string(eg.t["7PvvS9"]),
                        body: eg.intl.formatToPlainString(eg.t["9J4h1a"], { applicationName: m.applicationName }),
                    };
                }
                case "guild-discord-announcement": {
                    let { videoAssetFullyQualifiedURL: e, assetFullyQualifiedURL: t } = m;
                    if ((0, iV.uJ)(e) && (0, iV.uJ)(t)) return null;
                    return {
                        graphicSource: (0, iV.uJ)(e) ? { type: "asset", src: t } : { type: "video", src: e },
                        title: m.popoverTitle,
                        body: (0, iv.M)(m.popoverBody),
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
                    ? (0, r.jsx)(iT.A, {
                          onActionClick: b,
                          onActionMouseDown: j,
                          onRender: R,
                          onRequestClose: v,
                          targetElementRef: s,
                          ...T,
                      })
                    : null,
            [S, T, b, j, R, v],
        );
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(iO, { ref: l, children: M }), !o && !d && !c && L()] });
});
var iF = n(740426),
    iz = n(826673),
    iK = n(591552),
    iW = n(454058);
function iY(e) {
    let { guild: t, selected: i } = e,
        l = (0, tB.A)(t),
        s = (0, iz.HX)(en.M.CHANNEL_BROWSER_NEW_BADGE_NUX),
        o = (0, tD.yK)([iW.A], () =>
            Array.from(iW.A.getNewChannelIds(t.id)).filter((e) => iW.A.shouldIndicateNewChannel(t.id, e)),
        ),
        d = (0, tD.bG)([nM.Ay], () => nM.Ay.hasUnread(t.id, n6.P.GUILD_ONBOARDING_QUESTION)),
        c = o.length > tT.rR,
        u = (0, tD.bG)([iK.A, nM.Ay], () => {
            let e = iK.A.lastFetchedAt(t.id),
                n = nM.Ay.lastMessageId(t.id, n6.P.GUILD_ONBOARDING_QUESTION);
            if (null == n) return !1;
            let i = t_.default.extractTimestamp(n);
            return null != e && e > i;
        }),
        h = a.useCallback(() => {
            (0, ec.pX)(H.BVt.CHANNEL(t.id, l ? eu.VV.CUSTOMIZE_COMMUNITY : eu.VV.CHANNEL_BROWSER));
        }, [t.id, l]),
        m = a.useCallback(
            (e) => {
                (0, ti.L3)(e, async () => {
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
        (s && !d && !c) || i || u || (g = (0, r.jsx)(er.E, { type: "new", variant: "primary" })),
        (0, r.jsx)(ed.G, {
            id: `channels-${t.id}`,
            renderIcon: (e) => (0, r.jsx)(iF.k, { size: "md", color: "currentColor", className: e }),
            text: l ? eg.intl.string(eg.t.h9mGOP) : eg.intl.string(eg.t.et6wav),
            selected: i,
            onClick: h,
            onContextMenu: m,
            trailing: g,
        })
    );
}
var iX = n(855473);
function iJ(e) {
    let { guild: t, selected: n } = e;
    return (0, r.jsx)(ed.G, {
        id: `home-tab-${t.id}`,
        renderIcon: (e) => (0, r.jsx)(iX.Z, { size: "md", color: "currentColor", className: e }),
        text: eg.intl.string(eg.t.VbpLyU),
        selected: n,
        onClick: function () {
            (0, ec.pX)(H.BVt.CHANNEL(t.id, eu.VV.GUILD_HOME));
        },
    });
}
var iq = n(534514),
    iZ = n(5373),
    i$ = n(65995),
    iQ = n(195702);
function i0(e, t) {
    return (0, r.jsx)(tn.E, { variant: "text-xs/semibold", color: "text-default", children: e }, t);
}
let i1 = a.memo(function (e) {
    let { guild: t } = e,
        n = (0, h.bG)([tF.h], () => tF.h.getNewMemberActions(t.id), [t.id]),
        i = (0, h.bG)([i$.A], () => i$.A.getCompletedActions(t.id)),
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
                  (0, r.jsxs)(el.D, {
                      ...o,
                      role: "button",
                      focusProps: { offset: { right: 4 } },
                      className: iQ.G9,
                      onClick: function () {
                          (0, ec.pX)(H.BVt.CHANNEL(t.id, eu.VV.GUILD_HOME));
                      },
                      children: [
                          (0, r.jsxs)("div", {
                              className: iQ.A1,
                              children: [
                                  (0, r.jsx)(iq.D, {
                                      variant: "heading-sm/semibold",
                                      children: eg.intl.string(eg.t.SnrR3x),
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: iQ.Ib,
                                      children: [
                                          (0, r.jsx)(tn.E, {
                                              variant: "text-xs/medium",
                                              color: "text-muted",
                                              className: iQ.Cv,
                                              children: eg.intl.format(eg.t.eqZ1lW, {
                                                  numberHook: i0,
                                                  total: s.toString(),
                                                  completed: l.toString(),
                                              }),
                                          }),
                                          (0, r.jsx)(td.A, {
                                              className: iQ.UE,
                                              width: 16,
                                              height: 16,
                                              direction: td.A.Directions.RIGHT,
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, r.jsx)(iZ.i, {
                              className: iQ.hr,
                              foregroundGradientColor: [
                                  m.A.unsafe_rawColors.GREEN_300.css,
                                  m.A.unsafe_rawColors.GREEN_230.css,
                              ],
                              percent: (l / s) * 100 + 3,
                              animate: !0,
                          }),
                      ],
                  }),
                  (0, r.jsx)("div", { role: "separator", className: iQ.yF }),
              ],
          });
});
var i3 = n(581925);
function i9(e) {
    let { guild: t, selected: n } = e;
    return (0, r.jsx)(ed.G, {
        id: `official-messages-page-${t.id}`,
        renderIcon: (e) => (0, r.jsx)(i3.L, { size: "md", color: "currentColor", className: e }),
        text: eg.intl.string(eg.t.xHEzFh),
        selected: n,
        onClick: function () {
            (0, ec.pX)(H.BVt.CHANNEL(t.id, eu.VV.GUILD_OFFICIAL_MESSAGES));
        },
    });
}
var i2 = n(514179);
function i5(e) {
    let { guild: t, selected: i } = e;
    return (0, r.jsx)(ed.G, {
        id: `subscriptions-${t.id}`,
        renderIcon: (e) => (0, r.jsx)(i2.A, { className: e }),
        text: eg.intl.string(eg.t["KzCF/6"]),
        selected: i,
        onClick: function () {
            (0, ec.pX)(H.BVt.CHANNEL(t.id, eu.VV.ROLE_SUBSCRIPTIONS));
        },
        onContextMenu: function (e) {
            null != t &&
                (0, ti.L3)(e, async () => {
                    let { default: e } = await n.e("571911").then(n.bind(n, 978554));
                    return (n) => (0, r.jsx)(e, { ...n, guild: t });
                });
        },
    });
}
var i6 = n(506774),
    i7 = n(666860),
    i4 = n(289397),
    i8 = n(486418),
    le = n(575926),
    lt = n(440293),
    ln = n(174459),
    li = n(634654),
    ll = n(888918);
function ls(e) {
    let { guildId: t, selected: n, handleClick: i } = e,
        l = (0, lt.w)(t),
        s = (0, tD.bG)([P.A], () => P.A.getGuild(t)),
        a = s?.features.has(H.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) === !0,
        o = "false" === i6.w.get(li.bJ, "false"),
        d = (0, tD.bG)([z.Ay], () => z.Ay.useReducedMotion);
    return (0, r.jsx)(ed.G, {
        id: `shop-${t}`,
        className: eY()(ll.A2, { [ll.wH]: n, [ll.ST]: o }),
        innerClassName: ll.LE,
        renderIcon: (e) => (0, r.jsx)(le.h, { width: 20, height: 20, className: eY()([e, ll.sV]) }),
        text: eg.intl.string(eg.t.al5EXL),
        selected: n,
        onClick: i,
        trailing: (0, r.jsxs)("div", {
            className: ll.ai,
            children: [
                d
                    ? (0, r.jsx)("div", {
                          className: ll.Ad,
                          children: (0, r.jsx)(er.E, { type: "new", variant: "primary" }),
                      })
                    : (0, r.jsx)("img", {
                          src: (0, i4.n)("server_products/storefront/money.gif"),
                          className: ll.TG,
                          alt: "",
                      }),
                n &&
                    (0, r.jsx)(el.D, {
                        className: ll.b,
                        onClick: function (e) {
                            (e.stopPropagation(),
                                (0, iz.Dr)(en.M.SERVER_SHOP_PHANTOM_PREVIEW),
                                ln.default.track(H.HAw.GUILD_SHOP_PREVIEW_CLICK, {
                                    ...(0, i7.H$)(t),
                                    action_taken: li.hN.DISMISS_CHANNEL_ROW,
                                }),
                                (l && a) || (0, ec.bG)(H.BVt.CHANNEL(t, tM.Ay.getDefaultChannel(t)?.id)));
                        },
                        "aria-label": eg.intl.string(eg.t.cpT0Cq),
                        children: (0, r.jsx)(t2.a, { size: "xs", color: "currentColor" }),
                    }),
            ],
        }),
    });
}
function lr(e) {
    let { guild: t, selected: i } = e;
    function l() {
        (i6.w.set(li.bJ, "true"), (0, ec.pX)(H.BVt.CHANNEL(t.id, eu.VV.GUILD_SHOP)));
    }
    return (0, i8.P)(t)
        ? (0, r.jsx)(ls, { guildId: t.id, selected: i, handleClick: l })
        : (0, r.jsx)(ed.G, {
              id: `shop-${t.id}`,
              renderIcon: (e) => (0, r.jsx)(le.h, { width: 20, height: 20, className: e }),
              text: eg.intl.string(eg.t.al5EXL),
              selected: i,
              onClick: l,
              onContextMenu: function (e) {
                  null != t &&
                      (0, ti.L3)(e, async () => {
                          let { default: e } = await n.e("852565").then(n.bind(n, 345332));
                          return (n) => (0, r.jsx)(e, { ...n, guild: t });
                      });
              },
          });
}
let la = a.memo(function (e) {
    let { channel: t, selectedChannel: n, selectedVoiceChannelId: i, sortedThreadIds: l, withGuildIcon: s } = e,
        a = (0, t7.Ay)(t),
        { density: o } = (0, E.wR)(),
        d = (0, h.yK)([U.A], () => l.map((e) => U.A.getChannel(e)).filter(tx.Vq), [l]),
        c = (0, h.bG)([tE.Ay], () => {
            let e = d[d.length - 1];
            if (null == e) return 0;
            let t = tE.Ay.getVoiceStates(e.guild_id)[e.id];
            return null == t || 0 === t.length ? 0 : i !== e.id ? 40 : 32 * t.length + 8;
        });
    return (0, r.jsx)("li", {
        className: n3.kL,
        children: (0, r.jsxs)("ul", {
            role: "group",
            "aria-label": eg.intl.formatToPlainString(eg.t.EiyIi6, { channelName: a }),
            children: [
                (0, r.jsx)("div", {
                    className: eY()(n3.eh, { [n3.ET]: s }),
                    style: { bottom: ("cozy" === o ? 28 : 24) + c },
                }),
                d.map((e, t) =>
                    (0, r.jsx)(
                        n5,
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
var lo = n(265872),
    ld = n(367513),
    lc = n(296216),
    lu = n(657043),
    lh = n(963027),
    lm = n(202384),
    lg = n(51758),
    lA = n(139033),
    lf = n(305866),
    lp = n(123292),
    lC = n(830215),
    lE = n(315982),
    lx = n(480900),
    lN = n(557722),
    l_ = n(834942),
    lS = n(287809),
    lI = n(53516),
    lb = n(648580),
    lj = (((l = {})[(l.VOICE = 0)] = "VOICE"), l);
let lv = function (e) {
    let { type: t, guildId: i, closePopout: l } = e,
        s = (0, et.GV)(),
        a = (0, h.bG)([l_.A], () => l_.A.getCheck(i), [i]),
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
                let e = eg.intl.string(eg.t["6zY8BI"]),
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
                    ? { header: e, body: eg.intl.string(eg.t.IRxUlG), buttonText: eg.intl.string(eg.t.fiNVin) }
                    : i
                      ? { header: e, body: eg.intl.string(eg.t.vW8iUF), buttonText: eg.intl.string(eg.t["50gfOv"]) }
                      : l
                        ? { header: e, body: eg.intl.string(eg.t.vdSOpz), buttonText: eg.intl.string(eg.t.lm1UKt) }
                        : s
                          ? {
                                header: e,
                                body: eg.intl.formatToPlainString(eg.t.v1ktYb, { min: H.$8o.MEMBER_AGE }),
                                buttonText: eg.intl.string(eg.t.BddRzS),
                            }
                          : r
                            ? {
                                  header: e,
                                  body: eg.intl.formatToPlainString(eg.t.sncw41, { min: H.$8o.ACCOUNT_AGE }),
                                  buttonText: eg.intl.string(eg.t.BddRzS),
                              }
                            : a && null != o && null === o.tags.guild_connections
                              ? {
                                    header: e,
                                    body: eg.intl.format(eg.t.MZbCuG, { roleName: `@${o.name}` }),
                                    buttonText: eg.intl.string(eg.t["6Ge2LG"]),
                                }
                              : { header: e, body: null, buttonText: null };
            }
        })(t, a);
    return null == g || null == A
        ? null
        : (0, r.jsxs)(lf.l, {
              className: lb.kL,
              "aria-labelledby": s,
              children: [
                  (0, r.jsx)("img", { alt: "", className: lb.Sl, src: n(303528) }),
                  (0, r.jsxs)("div", {
                      className: lb.Qs,
                      children: [
                          (0, r.jsx)(iq.D, { variant: "heading-md/semibold", id: s, children: g }),
                          (0, r.jsx)(tn.E, { color: "text-default", variant: "text-sm/normal", children: A }),
                          (0, r.jsxs)("div", {
                              className: lb.UD,
                              children: [
                                  null != f
                                      ? (0, r.jsx)("div", {
                                            "data-button-hoisted-classname-wrapper": !0,
                                            className: lb.FS,
                                            children: (0, r.jsx)(t0.$, {
                                                variant: "primary",
                                                text: f,
                                                onClick: function () {
                                                    (o
                                                        ? lE.R()
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
                                                                            reason: lN.d.GUILD_PHONE_REQUIRED,
                                                                            ...t,
                                                                        });
                                                                },
                                                                { modalKey: lI.V },
                                                            )
                                                          : d
                                                            ? (lC.A.verifyResend(),
                                                              (0, lA.A)({
                                                                  title: eg.intl.string(eg.t.LykQYk),
                                                                  subtitle: eg.intl.format(eg.t.azKEPy, {
                                                                      email: lS.default.getCurrentUser()?.email,
                                                                  }),
                                                              }))
                                                            : u && null != m && (0, lx.b)(m, i),
                                                        l());
                                                },
                                            }),
                                        })
                                      : null,
                                  o || c || d
                                      ? (0, r.jsx)(lp.Q, {
                                            onClick: l,
                                            text: eg.intl.string(eg.t.oEAioF),
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
var lG = n(824865),
    lR = n(378570),
    ly = n(747376),
    lM = n(113783),
    lT = n(96566),
    lL = n(280450),
    lU = n(312006),
    lD = n(505543),
    lP = n(994500),
    lO = n(685399),
    lw = n(475889),
    lV = n(693879),
    lH = n(435470),
    lk = n(35275),
    lB = n(300596);
function lF(e) {
    let { locked: t } = e;
    return (0, r.jsx)("div", {
        className: eY()(ef.Xs, lB.U),
        children: (0, r.jsx)(lk.A, {
            className: ef.gE,
            color: t ? m.A.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css : void 0,
        }),
    });
}
var lz = n(863005),
    lK = n(669715),
    lW = n(769015),
    lY = n(217223);
function lX(e) {
    let { className: t, embeddedApps: n, muted: i } = e;
    if (n.length <= 0) return null;
    {
        if (1 === n.length)
            return (0, r.jsx)("div", {
                className: eY()(lY.kL, t, i && lY.F4),
                children: (0, r.jsx)(lW.A, { game: n[0].application, className: lY.wK }),
            });
        let e = n.length - 1;
        return (0, r.jsxs)("div", {
            className: eY()(lY.kL, t, i && lY.F4),
            children: [
                (0, r.jsx)(lW.A, { game: n[0].application, className: lY.wK }),
                2 === n.length
                    ? (0, r.jsx)(lW.A, { game: n[1].application, className: lY.wK })
                    : (0, r.jsx)(tn.E, {
                          className: lY.ju,
                          variant: "text-xs/semibold",
                          color: "interactive-text-active",
                          children: `+${e}`,
                      }),
            ],
        });
    }
}
var lJ = n(905695);
function lq(e) {
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
        g = (0, h.bG)([nM.Ay], () => nM.Ay.getMentionCount(t.id)),
        A = (0, h.bG)([nM.Ay], () => nM.Ay.getIsMentionLowImportance(t.id)),
        f = (0, lO.Ay)(t),
        p = (0, h.bG)([O.A], () => !O.A.can(H.xBc.CONNECT, t)),
        C = (0, lw.H)(t),
        E = (0, h.bG)([nw.A], () => nw.A.hasVideo(t.id)),
        x = (0, lT.qT)(t.id) && t.isGuildStageVoice(),
        N = (function (e) {
            let { channel: t, locked: n, video: i, selected: l } = e;
            return (
                (function (e) {
                    let { channel: t, video: n, considerMaxStageVoiceUserLimit: i = !0 } = e,
                        { limit: l } = (0, nY.A)(t),
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
        _ = (0, h.bG)([lz.A], () => lz.A.getNewThreadCount(t.guild_id, t.id)),
        S = (0, lH.ed)(t.guild_id, t.id),
        I = (0, h.bG)([P.A], () => P.A.getGuild(t.guild_id)?.features.has(H.GuildFeatures.COMMUNITY) ?? !1);
    if (nK(g)) return (0, r.jsx)(nQ, { mentionsCount: g, isMentionLowImportance: A });
    if (o) return (0, r.jsx)(lF, { locked: d });
    if (c) return (0, r.jsx)(er.E, { type: "new", variant: "primary" });
    if (!u && m === n6.e.ALL_MESSAGES && t.isForumLikeChannel() && null != _ && _ > 0)
        return (0, r.jsx)(tn.E, {
            variant: "text-xs/semibold",
            color: "text-brand",
            className: lJ.O,
            children: eg.intl.format(eg.t.GkAbqY, { count: (0, eS.Gu)(_) }),
        });
    if (!u && t.isForumLikeChannel() && null != S && S > 0)
        return (0, r.jsx)(tn.E, { variant: "text-xs/semibold", color: "text-muted", children: (0, eS.Gu)(S) });
    let b = l?.length ?? 0;
    return null != s && s && N
        ? (0, r.jsx)(nZ, { userCount: b, video: E || x, channel: t })
        : i && (0, lK.t)(l) && I
          ? (0, r.jsx)(er.E, { type: { text: eg.intl.string(eg.t.dI3q4h) }, variant: "notification" })
          : null != C
            ? (0, r.jsx)(lV.z, { textColor: "text-feedback-positive", entry: { start: C } })
            : null != a && a && f.length > 0
              ? (0, r.jsx)(lX, { embeddedApps: f, muted: u })
              : null;
}
var lZ = n(714619);
class l$ extends iI {
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
        return (0, nx.Pd)(e, nw.A, P.A);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        if (n) return ef.ZS;
        if (null != t)
            if (e > t) return ef.mU;
            else return ef.TR;
        return ef.fx;
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
        (null != r && (0, lg.V)(r) && (0, lm.Ze)(r),
            i && this.setState({ shouldShowGuildVerificationPopout: !0 }),
            t ||
                n ||
                e.isRoleSubscriptionTemplatePreviewChannel() ||
                (s ? ld.A.updateChatOpen(e.id, !0) : (0, ly.av)(e)),
            __OVERLAY__ || (0, lR.iN)(e.id, l ? { source: lG.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0));
    };
    handleClickChat = () => {
        let { channel: e, locked: t, isSuggestedSection: n } = this.props;
        __OVERLAY__ || t || (0, lR.iN)(e.id, n ? { source: lG.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            i = P.A.getGuild(t.getGuildId());
        null != i &&
            (0, ti.L3)(e, async () => {
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
        return (0, r.jsx)(n0.A, { channel: e, voiceStates: i, collapsed: t, tabIndex: n, numAudience: l });
    }
    renderPopout = () => {
        let { channel: e } = this.props,
            { shouldShowGuildVerificationPopout: t } = this.state;
        if (t)
            return (0, r.jsx)(lv, {
                type: lj.VOICE,
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
                text: eg.intl.string(eg.t.ZXxLQg),
                children: (0, r.jsx)(el.D, {
                    className: eY()(ef.Xs, n ? ef.Tf : null),
                    onClick: () => {
                        (ld.A.updateChatOpen(e.id, !0), this.handleClickChat());
                    },
                    "aria-label": eg.intl.string(eg.t.ZXxLQg),
                    children: (0, r.jsx)(nL.ChatIcon, { size: "xs", color: "currentColor", className: ef.gE }),
                }),
            });
    };
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e ? null : (0, r.jsx)("div", { className: ef.yW, children: e });
    }
    getTooltipText = () => {
        let { connected: e } = this.props;
        return this.isFull() && !e ? eg.intl.string(eg.t.rZfiNq) : null;
    };
    renderSubtitle = (e) => {
        let { disableTooltips: t } = e,
            n = this.props.stageInstance?.topic;
        return null == n ? null : (0, r.jsx)(tQ.A, { shouldShow: !t, children: n });
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
                className: eY()(this.getModeClass(), { [ef.r9]: this.isDisabled() }),
                "data-dnd-name": (0, t7.m1)(e, lS.default, lP.A),
                children: [
                    (0, r.jsx)(lo.Y, {
                        targetElementRef: this.channelItemRef,
                        position: "right",
                        renderPopout: this.renderPopout,
                        spacing: 17,
                        onRequestClose: this.closeGuildVerificationPopout,
                        shouldShow: C,
                        children: () =>
                            (0, r.jsx)(ei.m, {
                                text: E,
                                children: (0, r.jsxs)(nW.Ay, {
                                    ref: this.channelItemRef,
                                    className: ef.Ki,
                                    disableOverflowTooltip: null != E,
                                    iconClassName: eY()({ [lZ.G]: null != u }),
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
                                    "aria-label": (0, lh.Ay)({
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
let lQ = F((0, lc.F)(l$));
function l0(e) {
    var t;
    let n,
        i,
        { guild: l, channel: s, disableSorting: a, isFavoriteCategory: o, collapsed: d, voiceStates: c } = e,
        u = (0, h.cf)([nM.Ay], () => ({ unread: nM.Ay.hasUnread(s.id), mentionCount: nM.Ay.getMentionCount(s.id) })),
        m = (0, h.bG)([V.Ay], () => V.Ay.resolveUnreadSetting(s)),
        g = (0, h.cf)([U.A, l_.A, O.A], () => {
            let e = U.A.getChannel(s.parent_id),
                t = l_.A.getCheck(s.guild_id);
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
            (n = (0, lD.A)(t)),
            (i = (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return (0, h.cf)(
                    [lU.Ay, lL.default],
                    () => {
                        let n = lL.default.getId();
                        return lU.Ay.getPermissionsForUser(n, e, t);
                    },
                    [e, t],
                );
            })(t, !0).moderator),
            !n && i ? 1 : 0),
        p = (0, h.bG)([iA.A], () => iA.A.getStageInstanceByChannel(s.id), [s.id]),
        C = (0, lM.zy)(s.id, tI.ip.AUDIENCE),
        { isSubscriptionGated: E, needSubscriptionToAccess: x } = (0, nD.A)(s.id),
        N = (0, h.bG)([V.Ay], () => V.Ay.isFavorite(l.id, s.id)),
        _ = (0, lT.xn)(s.id),
        S = lq({
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
        j = (0, lu.BX)("StageChannel");
    return (0, r.jsx)(lQ, {
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
function l1(e, t) {
    let n = t.getGuildId();
    if (null == n) throw Error("TextChannel, preloadChannel: Channel does not have a guildId");
    nT.A.preload(n, t.id);
}
let l3 = F(
        class extends iI {
            handleContextMenu = (e) => {
                let { channel: t } = this.props,
                    i = P.A.getGuild(t.getGuildId());
                null != i &&
                    (0, ti.L3)(e, async () => {
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
                (0, ec.pX)(H.BVt.CHANNEL(t, e.id), {
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
                        className: eY()(this.getClassName(), { [ef.r9]: this.isDisabled() }),
                        "data-dnd-name": (0, t7.m1)(e, lS.default, lP.A),
                        children: (0, r.jsxs)(nW.Ay, {
                            className: ef.Ki,
                            channel: e,
                            selected: t,
                            onClick: this.handleClick,
                            onMouseDown: l1,
                            onContextMenu: this.handleContextMenu,
                            connectDragPreview: s ? l : null,
                            "aria-label": (0, lh.Ay)({ channel: e }),
                            resolvedUnreadSetting: n6.e.ONLY_MENTIONS,
                            children: [this.renderInviteButton(), this.renderEditButton()],
                        }),
                    });
                return s ? n(i(a)) : a;
            }
        },
    ),
    l9 = a.memo(function (e) {
        let { channel: t, guild: n, disableSorting: i } = e,
            l = (0, h.cf)([U.A, O.A], () => {
                let e = U.A.getChannel(t.parent_id);
                return {
                    canManageChannel: O.A.can(H.xBc.MANAGE_CHANNELS, t),
                    canReorderChannel:
                        !0 !== i && null != e ? O.A.can(H.xBc.MANAGE_CHANNELS, e) : O.A.can(H.xBc.MANAGE_CHANNELS, n),
                };
            }),
            s = (0, lu.BX)("StoreChannel");
        return (0, r.jsx)(l3, { ...l, ...e, shouldEnlargeTargets: s });
    });
var l2 = n(811024),
    l5 = n(323073),
    l6 = n(911040);
function l7(e) {
    if (null == e) return null;
    switch (e.type) {
        case "embedded-activities":
        case "event":
            return { subtitle: e.name };
        case "go-live":
            return { subtitle: eg.intl.string(eg.t.Pa817q) };
    }
    return null;
}
var l4 = n(967165),
    l8 = n(730602),
    se = n(956518),
    st = n(627363),
    sn = n(982844),
    si = n(197184),
    sl = n(288254),
    ss = n(91242),
    sr = n(165610),
    sa = n(696451),
    so = n(763827),
    sd = n(56059),
    sc = n(163328),
    su = n(778712),
    sh = n(730134),
    sm = n(707539),
    sg = n(486020),
    sA = n(98098);
function sf(e) {
    let { channel: t } = e,
        i = (0, h.yK)([lz.A, nM.Ay, O.A], () => {
            let e = lz.A.getActiveJoinedRelevantThreadsForParent(t.guild_id, t.id);
            return d()(lz.A.getActiveJoinedThreadsForParent(t.guild_id, t.id))
                .values()
                .map((e) => e.channel)
                .concat(d().values(lz.A.getActiveUnjoinedThreadsForParent(t.guild_id, t.id)))
                .filter((t) => !(t.id in e) && O.A.can(H.xBc.VIEW_CHANNEL, t))
                .sort((e, t) => {
                    let n = nM.Ay.lastMessageId(e.id),
                        i = nM.Ay.lastMessageId(t.id);
                    return t_.default.compare(n, i);
                })
                .reverse()
                .value();
        }),
        l = t.isForumLikeChannel() ? 5 : 3,
        s = t.isForumLikeChannel() ? sd.b : sc.y;
    return (
        a.useEffect(() => {
            (0, sm.TE)();
        }, []),
        (0, r.jsxs)("div", {
            className: sA.SW,
            children: [
                (0, r.jsx)(tn.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: sA.DD,
                    children: t.isForumLikeChannel() ? eg.intl.string(eg.t.ioVdO2) : eg.intl.string(eg.t.VNYs2v),
                }),
                (0, r.jsxs)("div", {
                    className: sA.p_,
                    children: [
                        i
                            .slice(0, t.isForumLikeChannel() ? i.length : l)
                            .map((e) => (0, r.jsx)(sp, { thread: e }, e.id))
                            .filter((e) => a.isValidElement(e))
                            .slice(0, l),
                        (0, r.jsxs)(el.D, {
                            className: sA.nM,
                            onClick: function () {
                                t.isForumLikeChannel()
                                    ? (0, lR.iN)(t.id)
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
                                    className: sA.R4,
                                    children: (0, r.jsx)(s, { size: "custom", className: sA.Kk }),
                                }),
                                (0, r.jsx)("div", {
                                    className: sA.Pf,
                                    children: (0, r.jsx)(tn.E, {
                                        variant: "text-sm/normal",
                                        color: "none",
                                        children: eg.intl.string(eg.t["4qdZ93"]),
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
function sp(e) {
    let { thread: t } = e,
        n = (0, h.bG)([lS.default], () => lS.default.getUser(t.ownerId)),
        i = (0, sm.JO)(t);
    return (0, r.jsxs)(el.D, {
        className: sA.nM,
        onClick: function (e) {
            (0, nO.JA)(t, t.isForumPost() ? e.shiftKey : !e.shiftKey, nH.H9.POPOUT);
        },
        children: [
            (0, r.jsx)("div", {
                className: sA.R4,
                children:
                    null == n
                        ? (0, r.jsx)("img", {
                              className: sA.my,
                              src: sg.Ay.getDefaultAvatarURL(void 0, void 0),
                              alt: "",
                          })
                        : (0, r.jsx)(sh.A, { className: sA.my, user: n, size: su._3.SIZE_16 }),
            }),
            (0, r.jsxs)("div", {
                className: sA.Pf,
                children: [
                    (0, r.jsx)(tn.E, { className: sA.UU, variant: "text-sm/normal", color: "none", children: t.name }),
                    (0, r.jsx)(tn.E, { variant: "text-sm/normal", color: "text-muted", children: "\u2022" }),
                    (0, r.jsx)(tn.E, {
                        className: sA.vE,
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: (0, sm.aK)(i),
                    }),
                ],
            }),
        ],
    });
}
var sC = n(70688),
    sE = n(545691);
function sx(e) {
    let { frameId: t } = e;
    return (0, r.jsx)(ei.m, {
        asContainer: !0,
        text: eg.intl.string(eg.t.VkMnR2),
        children: (0, r.jsx)(el.D, {
            className: ef.Xs,
            onClick: () => (0, sE.A)(t),
            "aria-label": eg.intl.string(eg.t.VkMnR2),
            children: (0, r.jsx)(sC.DoorExitIcon, { size: "xs", color: "currentColor", className: ef.gE }),
        }),
    });
}
var sN = n(664699);
function s_(e) {
    let { channel: t, isSuggestedSection: n } = e;
    return (0, r.jsx)(ei.m, {
        asContainer: !0,
        text: eg.intl.string(eg.t.ZXxLQg),
        children: (0, r.jsx)(el.D, {
            className: ef.Xs,
            onClick: () => (0, sN.A)(t, n ? lG.A.CHANNEL_LIST_SUGGESTED_SECTION : void 0),
            "aria-label": eg.intl.string(eg.t.ZXxLQg),
            children: (0, r.jsx)(nL.ChatIcon, { size: "xs", color: "currentColor", className: ef.gE }),
        }),
    });
}
var sS = n(364522),
    sI = n(302959),
    sb = n(709899),
    sj = n(970928),
    sv = n(427262),
    sG = n(641635);
let sR = np.DN.SIZE_24;
function sy(e) {
    let { activity: t, embeddedApp: n } = e,
        i = t?.assets,
        l = t?.application_id;
    if (null == i || (null == i.large_image && null == i.small_image)) {
        let e = sg.Ay.getApplicationIconURL({ id: n.application.id, icon: n.application.icon }),
            t = n.application.name;
        return (0, r.jsx)(ei.m, {
            text: t,
            position: "top",
            asContainer: !0,
            children: (0, r.jsx)("img", { alt: t, src: e, className: sG.P3 }),
        });
    }
    let s = i.large_image ?? i.small_image;
    return null != s
        ? (0, r.jsx)("img", { alt: i.large_text ?? "", src: (0, sj.uD)(l, s, [128, 128]), className: sG.P3 })
        : null;
}
function sM(e) {
    let { activity: t, embeddedApp: n, channel: i } = e,
        l = Array.from(n.embeddedActivity.userIds),
        s = (0, h.yK)([lS.default], () => l.map((e) => lS.default.getUser(e)).filter(tx.Vq));
    return (0, r.jsx)("div", {
        className: sG.ec,
        children: (0, r.jsxs)("div", {
            className: sG.Wh,
            children: [
                (0, r.jsx)(sy, { activity: t, embeddedApp: n }),
                (0, r.jsxs)("div", {
                    className: sG.X0,
                    children: [
                        (0, r.jsx)(iq.D, {
                            variant: "heading-sm/semibold",
                            color: "text-strong",
                            className: sG.wx,
                            lineClamp: 1,
                            children: n.application.name,
                        }),
                        t?.details != null &&
                            "" !== t.details &&
                            (0, r.jsx)(tn.E, {
                                variant: "text-xs/normal",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.details,
                            }),
                        t?.state != null &&
                            "" !== t.state &&
                            (0, r.jsx)(tn.E, {
                                variant: "text-xs/normal",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.state,
                            }),
                        l.length > 0 &&
                            (0, r.jsx)(np.Ay, {
                                className: sG.TN,
                                guildId: i.guild_id,
                                users: s,
                                size: sR,
                                max: 7,
                                renderUser: function (e) {
                                    if (null == e || e === np.mt) return null;
                                    let t = sv.Ay.getName(e);
                                    return (0, r.jsx)(
                                        ei.m,
                                        {
                                            asContainer: !0,
                                            text: t,
                                            position: "bottom",
                                            children: (0, r.jsx)("img", {
                                                src: e.getAvatarURL(i.guild_id, sR),
                                                alt: t,
                                                className: sG.my,
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
var sT = n(584960);
function sL(e) {
    let { channel: t, presenceActivity: n, embeddedApp: i, onAction: l } = e,
        s = Array.from(i.embeddedActivity.userIds),
        a = (0, h.bG)([lS.default], () => lS.default.getUser(s[0]));
    return null == a
        ? null
        : (0, r.jsxs)("div", {
              className: sT.Eb,
              children: [
                  (0, r.jsx)("div", {
                      className: sT.Il,
                      children: (0, r.jsx)(sM, { activity: n, embeddedApp: i, channel: t }),
                  }),
                  (0, r.jsx)("div", {
                      className: sT.M4,
                      children: (0, r.jsx)(sb.A, {
                          type: sI.M.VOICE_CHANNEL,
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
var sU = n(713654),
    sD = n(744399);
function sP(e) {
    let { channel: t } = e,
        n = (0, h.bG)([P.A], () => P.A.getGuild(t.guild_id)),
        i = (0, t7.Ay)(t),
        l = (0, sU.gU)(t, n);
    return null == l
        ? null
        : (0, r.jsxs)("div", {
              className: sD.hY,
              children: [
                  (0, r.jsx)(l, { className: sD.p }),
                  (0, r.jsx)(tn.E, {
                      variant: "text-md/semibold",
                      color: "interactive-text-default",
                      className: sD.HA,
                      children: i,
                  }),
              ],
          });
}
var sO = n(220650);
function sw(e) {
    let { channel: t, onAction: n } = e,
        i = (0, lO.Ay)(t),
        l = Array.from((0, lO.Rz)(i).values());
    return 0 === l.length
        ? null
        : (0, r.jsxs)(sS.Ip, {
              className: sO.kL,
              children: [
                  (0, r.jsx)("div", { className: sO.oT, children: (0, r.jsx)(sP, { channel: t }) }),
                  (0, r.jsx)("div", { className: sO.zN }),
                  l.map((e, i) =>
                      (0, r.jsx)(
                          sL,
                          { embeddedApp: e, presenceActivity: e.presenceActivity ?? void 0, channel: t, onAction: n },
                          i,
                      ),
                  ),
              ],
          });
}
class sV extends iI {
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
        (nT.A.preload(s ?? H.ME, l.id),
            (e = l.id),
            (t = U.A.getChannel(e)),
            (n = t?.application_id),
            (i = t?.type === H.rbe.GUILD_APP ? (0, sr.HD)(t) : null),
            null == t ||
                null == n ||
                null == i ||
                null != ss.A.getFrame((0, sr.VA)(n, i)) ||
                !O.A.can(H.xBc.VIEW_CHANNEL, t) ||
                (0, l5.qR)(t) ||
                (0, sl.BV)(t) ||
                (null != (0, se.Ay)(n) &&
                    ((0, l8.M)(n, (0, si.A)(i), i.type),
                    (0, sn.A)(n).catch(H.tEg),
                    st.YY.fetchMany([n]).catch(H.tEg))));
    };
    renderPopout = (e) => {
        let { channel: t, sorting: n, embeddedApps: i, channelIsContentGated: l } = this.props,
            { shouldShowActivities: s } = this.state;
        return t.isModeratorReportChannel() || l
            ? null
            : null != i && i.length > 0 && s && !n
              ? (0, r.jsx)(sw, { onAction: this.handleActivitiesPopoutClose, channel: t })
              : (0, r.jsx)(sf, { ...e, channel: this.props.channel });
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
            let i = lS.default.getUser(t.getRecipientId());
            null != i &&
                (0, ti.L3)(e, async () => {
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
            return void (0, ti.L3)(e, async () => {
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
            (0, ti.L3)(e, async () => {
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
                    n.e("916758"),
                    n.e("550033"),
                    n.e("343266"),
                    n.e("965789"),
                    n.e("947802"),
                    n.e("198415"),
                    n.e("309004"),
                    n.e("540715"),
                    n.e("412255"),
                    n.e("63340"),
                    n.e("430997"),
                    n.e("741111"),
                    n.e("379995"),
                    n.e("356675"),
                    n.e("544058"),
                    n.e("697367"),
                    n.e("591377"),
                    n.e("11312"),
                    n.e("35723"),
                    n.e("566378"),
                    n.e("745493"),
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
        return null == e ? null : (0, r.jsx)("div", { className: ef.yW, children: e });
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
            v = l7(A),
            G = x ? { source: lG.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
            R = (0, lh.Ay)({
                channel: e,
                unread: l,
                mentionCount: o,
                isSubscriptionGated: m,
                embeddedActivitiesCount: p?.length,
            }),
            y = (0, r.jsxs)("li", {
                className: eY()(this.getClassName(), { [ef.r9]: this.isDisabled(), [ef.wH]: n }),
                "data-dnd-name": (0, t7.m1)(e, lS.default, lP.A),
                onMouseEnter: a || j ? this.handleMouseEnter : void 0,
                onMouseLeave: a || j ? this.handleMouseLeave : void 0,
                children: [
                    (0, r.jsx)(lo.Y, {
                        targetElementRef: this.channelItemRef,
                        position: "right",
                        renderPopout: this.renderPopout,
                        onRequestClose: this.handleClosePopout,
                        spacing: 17,
                        shouldShow: (a && this.state.shouldShowThreadsPopout) || (j && this.state.shouldShowActivities),
                        children: () =>
                            (0, r.jsxs)(nW.Ay, {
                                ref: this.channelItemRef,
                                className: ef.Ki,
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
                                iconClassName: null != S ? ef.Gj : void 0,
                                iconTooltipText: S ?? void 0,
                                "aria-label": null != S ? `${R}, ${S}` : R,
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
                                                null != _ ? (0, r.jsx)(sx, { frameId: _ }) : null,
                                                this.renderChannelInfo(),
                                                e.type === H.rbe.GUILD_APP
                                                    ? (0, r.jsx)(s_, { channel: e, isSuggestedSection: x })
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
                        : (0, r.jsx)(l4.A, {
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
        return h ? d(c(y)) : y;
    }
}
let sH = F(sV);
function sk(e) {
    let { channel: t, guild: n, disableSorting: i, isFavoriteCategory: l, muted: s, selected: a } = e,
        { hasActiveThreads: o, hasMoreActiveThreads: d } = (0, nP.NR)(t),
        c = (0, h.cf)([nM.Ay], () => ({
            unread: nM.Ay.hasUnread(t.id),
            ackMessageId: nM.Ay.ackMessageId(t.id),
            isLowImportanceMention: nM.Ay.getIsMentionLowImportance(t.id),
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
        g = (0, h.bG)([iW.A], () => iW.A.shouldIndicateNewChannel(n.id, t.id)),
        { needSubscriptionToAccess: A, isSubscriptionGated: f } = (0, nD.A)(t.id),
        p = (0, h.bG)([V.Ay], () => V.Ay.isFavorite(n.id, t.id)),
        C = (0, l5.ni)(t),
        E = (0, l2.Gp)(t.id),
        x = lq({
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
        N = (0, lO.Ay)(t),
        _ = (0, h.bG)([so.A, sa.Ay], () => so.A.getChannelId() !== t.id && sa.Ay.isCurrentUserGuest(t.getGuildId())),
        S = (0, lu.BX)("ConnectedTextChannel"),
        { frameId: I, runningLabel: b } = (0, l6.A)(t);
    return _
        ? null
        : (0, r.jsx)(sH, {
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
var sB = n(900797),
    sF = n(636585),
    sz = n(531685),
    sK =
        (((s = {}).HIDDEN = "hidden"),
        (s.UNREAD = "unread"),
        (s.MENTIONS = "mentions"),
        (s.VOICE_CHANNELS = "voice-channels"),
        s);
let sW = { mode: "hidden", mentionCount: 0, targetChannelId: null },
    sY = { topBar: sW, bottomBar: sW },
    sX = {},
    sJ = {};
function sq(e) {
    let t = U.A.getChannel(e);
    return (
        !(null == t || null == t.getGuildId() || t.isGuildVocal()) &&
        !(t.isThread() ? nz.A.isMuted(t.id) : V.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, tp.Y)(t)
    );
}
function sZ(e) {
    let t = U.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let i = V.Ay.isGuildCollapsed(n),
        l = V.Ay.isChannelMuted(n, t.id);
    return (!i || !l) && nM.Ay.getMentionCount(e) > 0;
}
function s$(e) {
    return (
        !V.Ay.isChannelMuted(e.guild_id, e.id) &&
        (e.isGuildStageVoice()
            ? tS.A.getMutableParticipants(e.id, tI.ip.SPEAKER).length > 0
            : tE.Ay.getVoiceStatesForChannel(e).length > 0)
    );
}
function sQ(e) {
    let { guildChannels: t } = tL.A.getGuildWithoutChangingGuildActionRows(e),
        n = t.getChannels(sJ[e] ?? []);
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
            ((sq(t.id) || d().some(t.threadIds, sq)) && (o = !1),
            (sZ(t.id) || d().some(t.threadIds, sZ)) && (a = !1),
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
            ((sq(t.id) || d().some(t.threadIds, sq)) && (null == l && (l = t.id), (p = !0)),
                (sZ(t.id) || d().some(t.threadIds, sZ)) &&
                    (null == i && (i = t.id),
                    (f += nM.Ay.getMentionCount(t.id)),
                    (f += d().sumBy(t.threadIds, nM.Ay.getMentionCount))));
        }
    if (o || a)
        for (let e = 0; e < A.length; e++) {
            let t = A[e];
            if (!o && !a) break;
            ((sq(t.id) || d().some(t.threadIds, sq)) && (null == r && (r = t.id), (E = !0)),
                (sZ(t.id) || d().some(t.threadIds, sZ)) &&
                    (null == s && (s = t.id),
                    (C += nM.Ay.getMentionCount(t.id)),
                    (C += d().sumBy(t.threadIds, nM.Ay.getMentionCount))));
        }
    let x = null,
        N = null,
        _ = u?.getChannelRecords() ?? [];
    (a && C > 0
        ? (x = { mode: "mentions", mentionCount: C, targetChannelId: s })
        : !c && d().some(_, s$)
          ? (x = { mode: "voice-channels", mentionCount: 0, targetChannelId: null })
          : o && E && (x = { mode: "unread", mentionCount: 0, targetChannelId: r }),
        a && f > 0
            ? (N = { mode: "mentions", mentionCount: f, targetChannelId: i })
            : o && p && (N = { mode: "unread", mentionCount: 0, targetChannelId: l }));
    let S = null != N && (null == x || ("mentions" !== x.mode && "mentions" === N.mode)),
        I = null != x && ("mentions" === x.mode || !S);
    return ((sX[e] = { topBar: S ? (N ?? sW) : sW, bottomBar: I ? (x ?? sW) : sW }), !0);
}
let s0 = d().throttle(sQ, 200);
function s1(e) {
    let { guildId: t } = e,
        n = P.A.getGuild(t);
    return null != n && !!n.features.has(H.GuildFeatures.COMMUNITY) && s0(t);
}
function s3(e) {
    let { id: t } = e,
        n = U.A.getChannel(t);
    if (null == n) return !1;
    let i = P.A.getGuild(n.guild_id);
    return null != i && !!i.features.has(H.GuildFeatures.COMMUNITY) && s0(n.guild_id);
}
function s9(e) {
    let { channel: t } = e,
        n = U.A.getChannel(t.id);
    if (null == n) return !1;
    let i = P.A.getGuild(t.guild_id);
    return null != i && !!i.features.has(H.GuildFeatures.COMMUNITY) && s0(n.guild_id);
}
function s2(e) {
    let { channelId: t } = e,
        n = U.A.getChannel(t);
    if (null == n) return !1;
    let i = P.A.getGuild(n.guild_id);
    return (
        null != i && !!i.features.has(H.GuildFeatures.COMMUNITY) && w.A.getGuildId() === n.guild_id && s0(n.guild_id)
    );
}
function s5(e) {
    let { guildId: t } = e;
    return null != t && s0(t);
}
class s6 extends h.Ay.Store {
    static displayName = "ChannelListUnreadsStore";
    initialize() {
        this.waitFor(tL.A, U.A, P.A, nz.A, nM.Ay, w.A, tE.Ay, tS.A, V.Ay, lS.default);
    }
    getUnreadStateForGuildId(e) {
        return sX[e] ?? sY;
    }
}
let s7 = new s6(ts.h, {
    UPDATE_CHANNEL_LIST_DIMENSIONS: function (e) {
        let { guildId: t, channelIds: n } = e,
            i = P.A.getGuild(t);
        return (
            null != i &&
            !!i.features.has(H.GuildFeatures.COMMUNITY) &&
            null != n &&
            !d().isEqual(sJ[t], n) &&
            ((sJ[t] = n), sQ(t))
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
                .filter(tx.Vq)
                .uniq()
                .forEach((e) => {
                    let t = P.A.getGuild(e);
                    null != t && t.features.has(H.GuildFeatures.COMMUNITY) && s0(e) && (n = !0);
                }),
            n
        );
    },
    CHANNEL_ACK: s2,
    CHANNEL_DELETE: s9,
    CHANNEL_LOCAL_ACK: s2,
    MESSAGE_ACK: s2,
    MESSAGE_CREATE: s2,
    MESSAGE_DELETE_BULK: s2,
    MESSAGE_DELETE: s2,
    PASSIVE_UPDATE_V2: function (e) {
        let t = P.A.getGuild(e.guildId);
        return !!(e.channels.length > 0 && null != t && t.features.has(H.GuildFeatures.COMMUNITY)) && s0(e.guildId);
    },
    RESORT_THREADS: s2,
    THREAD_CREATE: s9,
    THREAD_DELETE: s9,
    THREAD_LIST_SYNC: s1,
    THREAD_MEMBER_UPDATE: s3,
    THREAD_MEMBERS_UPDATE: s3,
    THREAD_UPDATE: s9,
    BULK_CLEAR_RECENTS: s1,
    CATEGORY_COLLAPSE_ALL: s1,
    CATEGORY_EXPAND_ALL: s1,
    CURRENT_USER_UPDATE: function () {
        let e = lS.default.getCurrentUser()?.nsfwAllowed;
        if (e === i) return !1;
        i = e;
        let t = w.A.getGuildId();
        if (null == t) return !1;
        let n = P.A.getGuild(t);
        return null != n && !!n.features.has(H.GuildFeatures.COMMUNITY) && s0(t);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = w.A.getGuildId();
        if (null == n || !new Set(t.map((e) => e.guildId)).has(n)) return !1;
        let i = sX[n];
        return null != i && "voice-channels" === i.bottomBar.mode && s0(n);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: s5,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: s5,
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: t } = e;
        for (let e of t) null != e.guild_id && s0(e.guild_id);
    },
    USER_GUILD_SETTINGS_GUILD_UPDATE: s5,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: s5,
});
var s4 = n(350536);
let s8 = { friction: 30, tension: 300 };
function re(e) {
    let { guildChannels: t, jumpToVoiceChannels: n } = e,
        i = t.getCategoryFromSection(t.voiceChannelsSectionNumber),
        l = (0, h.bG)([tE.Ay], () => tE.Ay.getVoiceStates(t.id), [t.id]),
        s = a.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), n());
            },
            [n],
        ),
        o = i?.getChannelRecords() ?? [],
        d = (0, nx.fK)({ channels: o, selectedChannelId: null, selectedVoiceChannelId: null, voiceStates: l });
    return (0, r.jsxs)(el.D, {
        className: eY()(s4.M0, s4.OF),
        onClick: s,
        children: [
            (0, r.jsx)(t5.H, { size: "custom", className: s4.Gs, width: 14, height: 14, color: "currentColor" }),
            (0, r.jsx)(tn.E, {
                variant: "text-xs/semibold",
                className: s4.pM,
                children: eg.intl.format(eg.t["fDlr+F"], { count: d.length }),
            }),
            (0, r.jsx)(sF.A, {
                guildId: t.id,
                className: s4.J$,
                users: d.slice(0, 4),
                renderMoreUsers: () => null,
                max: 4,
                size: su._3.SIZE_16,
            }),
        ],
    });
}
function rt(e) {
    let { position: t, guildChannels: n, guildChannelsVersion: i, jumpToVoiceChannels: l, jumpToChannel: s } = e,
        { bottomBar: o, topBar: d } = (0, h.cf)([s7], () => s7.getUnreadStateForGuildId(n.id)),
        c = (0, h.bG)([sz.A], () => sz.A.isFocused()),
        { mode: u, mentionCount: m, targetChannelId: g } = "bottom" === t ? o : d,
        A = u === sK.HIDDEN,
        f = (0, tt.z)(
            {
                to: { transform: A ? ("bottom" === t ? "translateY(180%)" : "translateY(-180%)") : "translateY(0%)" },
                config: s8,
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
        className: eY()(s4.kL, { [s4.Mn]: "top" === t, [s4.sQ]: "bottom" === t }),
        children: (0, r.jsx)(te.animated.div, {
            className: s4.pK,
            style: f,
            "aria-hidden": A,
            children: (function () {
                switch (u) {
                    case sK.HIDDEN:
                        return (0, r.jsx)("div", { className: eY()(s4.M0, s4.Te) });
                    case sK.UNREAD:
                        return (0, r.jsxs)(el.D, {
                            className: s4.M0,
                            onClick: p,
                            children: [
                                "bottom" === t
                                    ? (0, r.jsx)(t9.a, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: s4.z_,
                                          height: 14,
                                          width: 14,
                                      })
                                    : (0, r.jsx)(sB.t, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: s4.z_,
                                          height: 14,
                                          width: 14,
                                      }),
                                (0, r.jsx)(tn.E, {
                                    variant: "text-xs/semibold",
                                    color: "interactive-text-default",
                                    className: s4.pM,
                                    children: eg.intl.string(eg.t.FCRiT3),
                                }),
                            ],
                        });
                    case sK.MENTIONS:
                        return (0, r.jsx)(el.D, {
                            className: eY()(s4.M0, s4.vU),
                            onClick: p,
                            children: (0, r.jsx)(tn.E, {
                                variant: "text-xs/semibold",
                                color: "badge-primary-text",
                                className: s4.pM,
                                children: eg.intl.format(eg.t.EQcLyp, { count: m }),
                            }),
                        });
                    case sK.VOICE_CHANNELS:
                        return (0, r.jsx)(re, { jumpToVoiceChannels: l, guildChannels: n, guildChannelsVersion: i });
                    default:
                        return;
                }
            })(),
        }),
    });
}
var rn = n(310953),
    ri = n(173860);
function rl(e) {
    let t = U.A.getChannel(e);
    return (
        null != t &&
        null != t.getGuildId() &&
        !(t.isThread() ? nz.A.isMuted(t.id) : V.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, tp.Y)(t)
    );
}
function rs(e) {
    let t = U.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let i = V.Ay.isGuildCollapsed(n),
        l = V.Ay.isChannelMuted(n, t.id);
    return (!i || !l) && nM.Ay.getMentionCount(e) > 0;
}
function rr(e) {
    let { guildId: t, guildChannels: n, guildChannelsVersion: i, ref: l, ...s } = e,
        a = (0, rn.W)(t, n, i, { withVoiceChannels: !1 }, { ignoreRecents: !0 }),
        o = (0, h.bG)([sz.A], () => sz.A.isFocused());
    return (0, r.jsx)(ri.A, { ref: l, ...s, isUnread: rl, isMentioned: rs, items: a, animate: o });
}
var ra = n(81466);
function ro(e) {
    let { guild: t, selected: i } = e,
        { hasUnread: l, mentionCount: s } = (0, h.cf)(
            [nM.Ay],
            () => ({
                hasUnread: nM.Ay.hasUnread(t.id, n6.P.GUILD_EVENT),
                mentionCount: nM.Ay.getMentionCount(t.id, n6.P.GUILD_EVENT),
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
    let d = (0, tJ.Ay)(t.id),
        c = d.length > 0 ? eg.intl.formatToPlainString(eg.t.IBdqSu, { number: d.length }) : eg.intl.string(eg.t.tlopTM);
    return (0, r.jsx)(ed.G, {
        id: `upcoming-events-${t.id}`,
        renderIcon: (e) => (0, r.jsx)(ra.CalendarIcon, { size: "md", color: "currentColor", className: e }),
        text: c,
        selected: i,
        onClick: o,
        onContextMenu: function (e) {
            (0, ti.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("426386"), n.e("819990")]).then(n.bind(n, 221621));
                return (n) => (0, r.jsx)(e, { ...n, guildId: t.id });
            });
        },
        showUnread: l && !a,
        trailing: !a && s > 0 ? (0, r.jsx)(eS.hV, { className: n1.Do, disableColor: !0, count: s }) : null,
    });
}
var rd = n(350835),
    rc = n(845056),
    ru = n(765379),
    rh = n(271683),
    rm = n(725613),
    rg = n(857253),
    rA = n(360729),
    rf = n(22231),
    rp = n(241326),
    rC = n(750943),
    rE = n(743674),
    rx = n(888697),
    rN = n(26741),
    r_ = n(493819),
    rS = n(722884),
    rI = n(649712),
    rb = n(176431);
function rj(e) {
    let { channel: t, imageUrl: i, animatedUrl: l, bannerHash: s, canModifyHangout: o } = e,
        d = (0, rE.S)(i),
        c = (0, ek.je)(t),
        u = (0, rN.P9)({ guildId: t.guild_id, channelId: t.id, bannerHash: s }),
        h = a.useCallback(() => {
            ((0, rN.J_)({ guildId: t.guild_id, channelId: t.id }), (0, rS.A)({ channel: t }));
        }, [t]),
        m = a.useCallback(() => {
            ((0, rN.nK)({ guildId: t.guild_id, channelId: t.id }), (0, rx.e2)(t.id));
        }, [t.guild_id, t.id]),
        g = a.useCallback(
            (e) => {
                c
                    ? (0, ti.L3)(e, async () => {
                          let { default: e } = await n.e("555558").then(n.bind(n, 316421));
                          return (n) => (0, r.jsx)(e, { ...n, channel: t });
                      })
                    : e.preventDefault();
            },
            [t, c],
        );
    return (0, r.jsxs)("div", {
        ref: u,
        className: rb.rs,
        onContextMenu: g,
        children: [
            (0, r.jsx)("div", {
                className: rb.ZS,
                style: null != d ? { backgroundColor: d } : void 0,
                children: (0, r.jsx)(r_.A, { imageUrl: i, animatedUrl: l, className: rb.Sl }),
            }),
            o
                ? (0, r.jsxs)("div", {
                      className: rb.n_,
                      children: [
                          (0, r.jsx)(ei.m, {
                              text: eg.intl.string(rI.default.XJ4UpB),
                              children: (0, r.jsx)(el.D, {
                                  className: rb.HF,
                                  onClick: h,
                                  children: (0, r.jsx)(rf.PencilIcon, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                          (0, r.jsx)(ei.m, {
                              text: eg.intl.string(rI.default.XV4qT6),
                              children: (0, r.jsx)(el.D, {
                                  className: rb.HF,
                                  onClick: m,
                                  children: (0, r.jsx)(rp.TrashIcon, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function rv(e) {
    let { channel: t } = e,
        n = (0, rN.dX)({ guildId: t.guild_id, channelId: t.id }),
        i = a.useCallback(() => {
            ((0, rN.J_)({ guildId: t.guild_id, channelId: t.id }), (0, rS.A)({ channel: t }));
        }, [t]);
    return (0, r.jsx)("div", {
        ref: n,
        className: rb._o,
        children: (0, r.jsxs)(el.D, {
            className: rb.hH,
            onClick: i,
            children: [
                (0, r.jsx)(rC.X, { size: "xs", color: "currentColor" }),
                (0, r.jsx)(tn.E, {
                    variant: "text-sm/medium",
                    color: "currentColor",
                    children: eg.intl.string(rI.default.NGcIOF),
                }),
            ],
        }),
    });
}
function rG(e) {
    let { channel: t, isConnected: n } = e,
        { enableHangoutWindow: i } = (0, eH.Dm)({ guildId: t.guild_id, location: "HangoutWindow" }),
        l = (0, ek.W6)(t),
        s = n && l,
        o = t.voiceHangout,
        d = o?.banner_hash,
        c = a.useMemo(() => {
            if (null == d || null == t.guild_id) return null;
            let e = (0, ek.Sq)({ guildId: t.guild_id, bannerHash: d });
            return null == e ? null : { bannerHash: d, ...e };
        }, [t.guild_id, d]);
    return i
        ? null != c
            ? (0, r.jsx)(rj, {
                  channel: t,
                  imageUrl: c.imageUrl,
                  animatedUrl: c.animatedUrl,
                  bannerHash: c.bannerHash,
                  canModifyHangout: s,
              })
            : s
              ? (0, r.jsx)(rv, { channel: t })
              : null
        : null;
}
var rR = n(290863),
    ry = n(461213),
    rM = n(532622),
    rT = n(882840),
    rL = n(208971),
    rU = n(46054),
    rD = n(569381),
    rP = n(165648);
function rO(e) {
    let { channel: t, connected: n, hovered: i, subtitle: l, disableTooltips: s = !1, onClick: o } = e,
        d = (0, rL.G)((0, rT.l)(t)),
        { enableHangoutWindow: c } = (0, eH.Dm)({ guildId: t.guild_id, location: "VoiceChannelStatus" }),
        u = c && (0, ek.lr)(t),
        h = null != d && d.length > 0,
        m = (0, rM.Ay)(t, !0),
        g = null != l && l.length > 0;
    if (
        (a.useEffect(() => {
            h && ln.default.track(H.HAw.VOICE_CHANNEL_TOPIC_VIEWED, { channel_id: t.id, guild_id: t.guild_id });
        }, [h, t.id, t.guild_id]),
        null == t.guild_id)
    )
        return null;
    let A = eY()(rD.Ui, n && m ? rD.BI : null);
    return h
        ? (0, r.jsx)(el.D, {
              className: A,
              onClick: m ? o : void 0,
              children: (0, r.jsx)(tn.E, {
                  variant: "text-xs/medium",
                  className: eY()(rD.qS, rP.PT),
                  children: (0, r.jsx)(tQ.A, {
                      shouldShow: !s,
                      children: rU.A.parseVoiceChannelStatus(d, !0, { channelId: t.id }),
                  }),
              }),
          })
        : n && m && !u && (!g || i)
          ? (0, r.jsxs)(el.D, {
                className: A,
                onClick: o,
                children: [
                    (0, r.jsx)(tn.E, {
                        variant: "text-xs/medium",
                        className: rD.qS,
                        children: eg.intl.string(eg.t.Mgpxiw),
                    }),
                    (0, r.jsx)(rf.PencilIcon, { color: "currentColor", className: rD.rD, size: "xxs" }),
                ],
            })
          : g
            ? (0, r.jsx)(tQ.A, { shouldShow: !s, children: l })
            : null;
}
class rw extends iI {
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
        (o && ld.A.updateChatOpen(n.id, !0),
            nU.A.handleVoiceConnect({
                channel: n,
                connected: t,
                needSubscriptionToAccess: l,
                routeDirectlyToChannel: o || a,
                locked: e,
                transitionExtras: r ? { source: lG.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
            }));
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            i = P.A.getGuild(t.getGuildId());
        null != i &&
            (0, ti.L3)(e, async () => {
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
        return (0, nx.Pd)(e, nw.A, P.A);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        if (n) return ef.ZS;
        if (null != t)
            if (e > t) return ef.mU;
            else return ef.TR;
        return ef.fx;
    }
    handleClick = () => {
        let { channel: e } = this.props,
            t = e.getGuildId();
        (null != t && (0, lg.V)(t) && (0, lm.Ze)(t), this.handleVoiceConnect());
    };
    handleVoiceStatusClick = (e) => {
        let { connected: t, channel: n } = this.props;
        t && (e.stopPropagation(), (0, rh.A)({ channel: n }));
    };
    renderSubtitle(e) {
        let { disableTooltips: t } = e,
            { channel: n, connected: i } = this.props,
            l = l7(this.props.subtitle)?.subtitle,
            { hovered: s } = this.state;
        return (0, r.jsx)(rO, {
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
        return (0, r.jsx)(n0.A, {
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
        return !(null != n && n.length > 0) || i ? null : (0, r.jsx)(rG, { channel: e, isConnected: t });
    }
    renderPopout = () => {
        let { channel: e } = this.props,
            { shouldShowGuildVerificationPopout: t } = this.state;
        return t
            ? (0, r.jsx)(lv, { type: lj.VOICE, guildId: e.guild_id, closePopout: this.closeGuildVerificationPopout })
            : null;
    };
    renderOpenChatButton = () => {
        let { channel: e, locked: t, forceShowButtons: n, isSuggestedSection: i, shouldEnlargeTargets: l } = this.props;
        if (!t)
            return (0, r.jsx)(ei.m, {
                asContainer: !0,
                text: eg.intl.string(eg.t.ZXxLQg),
                children: (0, r.jsx)(el.D, {
                    className: eY()(ef.Xs, { [ef.Tf]: n }),
                    onClick: () => {
                        (ld.A.updateChatOpen(e.id, !0),
                            (0, lR.iN)(e.id, i ? { source: lG.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0));
                    },
                    "aria-label": eg.intl.string(eg.t.ZXxLQg),
                    focusProps: l ? { offset: 2 } : void 0,
                    children: (0, r.jsx)(nL.ChatIcon, { size: "xs", color: "currentColor", className: ef.gE }),
                }),
            });
    };
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e ? null : (0, r.jsx)("div", { className: ef.yW, children: e });
    }
    getTooltipText = () => {
        let { connected: e } = this.props;
        return this.isFull() && !e ? eg.intl.string(eg.t.rZfiNq) : null;
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
                className: eY()(this.getModeClass(), { [ef.r9]: this.isDisabled(), [ef.fy]: _ }),
                "data-dnd-name": (0, t7.m1)(e, lS.default, lP.A),
                children: [
                    _ &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)("div", { className: ef.UQ }),
                                (0, r.jsx)("div", { className: ef.l0 }),
                            ],
                        }),
                    (0, r.jsx)("div", {
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        children: (0, r.jsx)(lo.Y, {
                            targetElementRef: this.channelItemRef,
                            position: "right",
                            renderPopout: this.renderPopout,
                            onRequestClose: this.closeGuildVerificationPopout,
                            spacing: 17,
                            shouldShow: b,
                            children: () =>
                                (0, r.jsx)(ei.m, {
                                    text: j,
                                    children: (0, r.jsxs)(nW.Ay, {
                                        ref: this.channelItemRef,
                                        className: ef.Ki,
                                        disableOverflowTooltip: null != j,
                                        iconClassName: eY()({ [ef.Gj]: A || x || v }),
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
                                        "aria-label": (0, lh.Ay)({
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
                (G = (0, r.jsx)(nh.A, {
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
let rV = F((0, lc.F)(rw));
function rH(e) {
    let {
            guild: t,
            channel: n,
            disableSorting: i,
            isFavoriteCategory: l,
            selected: s,
            collapsed: a,
            voiceStates: o,
        } = e,
        d = (0, h.cf)([nM.Ay], () => ({ unread: nM.Ay.hasUnread(n.id), mentionCount: nM.Ay.getMentionCount(n.id) })),
        c = (0, h.bG)([V.Ay], () => V.Ay.resolveUnreadSetting(n)),
        u = (0, h.cf)([U.A, l_.A, O.A], () => {
            let e = U.A.getChannel(n.parent_id),
                l = l_.A.getCheck(n.guild_id);
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
        m = (0, h.bG)([nw.A], () => nw.A.hasVideo(n.id)),
        { enabled: g } = (0, rA.mf)({ guildId: t.id, location: "VoiceChannel" }),
        A = (0, lO.Ay)(n),
        f = (0, h.yK)(
            [ry.A, rR.A, lL.default],
            () => {
                if (null == o || 0 === o.length) return [];
                let e = lL.default.getId(),
                    t = [];
                for (let { user: i } of o)
                    for (let l of i.id === e ? ry.A.getActivities() : rR.A.getActivities(i.id, n.guild_id))
                        !(0, rc.N)(l) || (0, ru.A)(l) || null == l.name || t.includes(l.name) || t.push(l.name);
                return t;
            },
            [o, n.guild_id],
        ),
        p = (0, t7.Ay)(n),
        C = (0, tJ.Qs)(n.id),
        E = (0, h.bG)([rm.A], () => rm.A.getStartTime(n), [n]),
        { isSubscriptionGated: x, needSubscriptionToAccess: N } = (0, nD.A)(n.id),
        _ = (0, rg.A)(),
        S = (0, h.bG)([V.Ay], () => V.Ay.isFavorite(t.id, n.id)),
        I = e.connected || _?.channelId === n.id,
        { enableHighlight: b, enableWaveformIcon: j } = (0, nC.b)(t.id, "VoiceChannel"),
        v = null != o && o.length > 0,
        G = b && v,
        R = j && v,
        y = lq({
            channel: n,
            isChannelSelected: s,
            isChannelCollapsed: a,
            voiceStates: o,
            isSubscriptionGated: x,
            needSubscriptionToAccess: N,
            enableConnectedUserLimit: !0,
            enableActivities: !0,
        }),
        T = I && null == y,
        L = (0, lu.BX)("VoiceChannel");
    return (0, r.jsx)(rV, {
        channelName: p,
        embeddedApps: A,
        nonEmbeddedActivityNames: f,
        embeddedActivityType: rd.$.PLAYING,
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
        channelInfo: y,
        resolvedUnreadSetting: c,
        hasChannelInfo: null != y,
        hasStartTime: null != E,
        voiceChannelStartTime: E,
        shouldHighlightChannel: G,
        shouldUseAnimatedWaveform: R,
        guildRoomsEnabled: g,
        shouldEnlargeTargets: L,
    });
}
n(131955);
let rk = [];
function rB(e) {
    return (
        m.A.modules.channels.NAME_LINE_HEIGHT.resolve({ density: e }) +
        2 * m.A.space.SPACE_XXS.resolve({ density: e }) +
        2
    );
}
class rF extends a.PureComponent {
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
        (this.setState({ initialized: !0 }), (0, tU.Ei)(this.getVisibleChannels));
    }
    componentWillUnmount() {
        this.updateChannelListScroll.cancel();
    }
    componentDidUpdate(e, t) {
        let { scrollToChannel: n, guildId: i, selectedChannelId: l } = this.props,
            { initialized: s } = this.state,
            { scrollTop: r } = ty.A.getGuildDimensions(i);
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
                    a = s.threadOffset * rB(r);
                l.scrollIntoViewRect({ start: e + a, end: e + a + rB(r), padding: n, animate: t, callback: i });
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
                if (i < tT.bK || e.isPlaceholderRow(i, l)) return !1;
                let s = e.getChannelFromSectionRow(i, l);
                if (null == s) return !1;
                let { channel: r, category: a } = s;
                return (
                    !!(0, tR.ig)(r.record.type) &&
                    (!a.isCollapsed || !a.isMuted) &&
                    !r.isMuted &&
                    !!t.isItemVisible(i, l, !0) &&
                    (0, tp.Y)(r.record)
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
        if (e === tT.PU) return l;
        if (e === tT.bK) return t.features.has(H.GuildFeatures.HUB) ? 0 : l;
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
            let { hasDivider: d, canHaveVoiceSummary: c } = nN(n, r, t),
                u = d ? (a ? 9 : m.A.space.SPACE_SM.resolve({ density: o ?? "default" })) : 0;
            if (!c || t === tT.PU) return u;
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
            a = rB(r);
        if (e === tT.PU) {
            let e = n.getGuildActionSection();
            return e.isEmpty()
                ? 0
                : e.getRow(t) === t$.n.GUILD_CONJURE
                  ? a * (1 + (this.props.conjureProjects?.length ?? 0))
                  : e.getRow(t) === t$.n.GUILD_PREMIUM_PROGRESS_BAR
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
            a += rB(t);
            let n = i[d.id];
            null != n && n.length > 0 && (a += s === e ? 32 * n.length : 32);
        }
        if (d.record.isGuildVoice()) {
            let e = i[d.id];
            if (null != e && e.length > 0) {
                let t = 32 * e.length;
                if (
                    (d.isCollapsed || c.isCollapsed ? (t = 32) : (0, eF.Ln)(d.record) && (t += 32),
                    (a += t + m.A.space.SPACE_XS.resolve({ density: r })),
                    !d.isCollapsed && !c.isCollapsed)
                ) {
                    let { enableHangoutWindow: e } = (0, eH.kY)({
                        guildId: d.record.guild_id,
                        location: "ChannelList",
                    });
                    e && ((0, ek.lr)(d.record) ? (a += 134) : s === d.id && (a += 44));
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
            nf,
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
                    case tT.PU:
                        return "hoisted-spacer";
                    case tT.bK:
                        return "uncategorized-spacer";
                    case tT.HP:
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
        if (t === tT.PU) {
            let e = c.getGuildActionSection(),
                t = e.getRow(n);
            if (null == t) return null;
            switch (t) {
                case t$.n.GUILD_HUB_HEADER_OPTIONS:
                    return (0, r.jsx)(
                        eB.A,
                        { guild: i, channel: tM.Ay.getDefaultChannel(i.id) },
                        t$.n.GUILD_HUB_HEADER_OPTIONS,
                    );
                case t$.n.GUILD_PREMIUM_PROGRESS_BAR:
                    let l = e.getRows();
                    return (0, r.jsx)(tf, { guild: i, withMargin: l.length > 1 }, t$.n.GUILD_PREMIUM_PROGRESS_BAR);
                case t$.n.GUILD_SPACE:
                    return (0, r.jsx)(eV, { guild: i, selected: s === eu.VV.GUILD_SPACE }, t$.n.GUILD_SPACE);
                case t$.n.GUILD_HOME:
                    return (0, r.jsx)(iJ, { guild: i, selected: s === eu.VV.GUILD_HOME }, t$.n.GUILD_HOME);
                case t$.n.GUILD_SCHEDULED_EVENTS:
                    return (0, r.jsx)(
                        ro,
                        { guild: i, selected: s === t$.n.GUILD_SCHEDULED_EVENTS },
                        t$.n.GUILD_SCHEDULED_EVENTS,
                    );
                case t$.n.GUILD_ROLE_SUBSCRIPTIONS:
                    return (0, r.jsx)(
                        i5,
                        { guild: i, selected: s === eu.VV.ROLE_SUBSCRIPTIONS },
                        t$.n.GUILD_ROLE_SUBSCRIPTIONS,
                    );
                case t$.n.GUILD_SHOP:
                    return (0, r.jsx)(lr, { guild: i, selected: s === eu.VV.GUILD_SHOP }, t$.n.GUILD_SHOP);
                case t$.n.GUILD_GAME_SHOP:
                    return (0, r.jsx)(iB, { guild: i, selected: s === eu.VV.GAME_SHOP }, t$.n.GUILD_GAME_SHOP);
                case t$.n.GUILD_CONJURE:
                    return (0, r.jsxs)(
                        a.Fragment,
                        {
                            children: [
                                (0, r.jsx)(ia, { guild: i, selected: s === eu.VV.CONJURE }),
                                (0, r.jsx)(il, { projects: this.props.conjureProjects ?? rk }),
                            ],
                        },
                        t$.n.GUILD_CONJURE,
                    );
                case t$.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
                    return (0, r.jsx)(i1, { guild: i });
                case t$.n.CHANNELS_AND_ROLES:
                    return (0, r.jsx)(
                        iY,
                        { guild: i, selected: s === eu.VV.CHANNEL_BROWSER || s === eu.VV.CUSTOMIZE_COMMUNITY },
                        t$.n.CHANNELS_AND_ROLES,
                    );
                case t$.n.GUILD_DIRECTORY:
                    return (0, r.jsx)(
                        ib,
                        { guild: i, selectedChannelId: s, disableManageChannels: h },
                        t$.n.GUILD_DIRECTORY,
                    );
                case t$.n.GUILD_MOD_DASH_MEMBER_SAFETY:
                    return (0, r.jsx)(
                        eR,
                        { guild: i, selected: s === eu.VV.MEMBER_SAFETY },
                        t$.n.GUILD_MOD_DASH_MEMBER_SAFETY,
                    );
                case t$.n.GUILD_BOOSTS:
                    return (0, r.jsx)(e8, { guildId: i.id, selected: s === eu.VV.GUILD_BOOSTS }, t$.n.GUILD_BOOSTS);
                case t$.n.GAME_SERVERS:
                    return (0, r.jsx)(eN, { guildId: i.id, selected: s === eu.VV.GAME_SERVERS }, t$.n.GAME_SERVERS);
                case t$.n.GAME_SERVERS_EMPTY:
                    return (0, r.jsx)(
                        ep,
                        { guildId: i.id, selected: s === eu.VV.GAME_SERVERS },
                        t$.n.GAME_SERVERS_EMPTY,
                    );
                case t$.n.GUILD_OFFICIAL_MESSAGES:
                    return (0, r.jsx)(
                        i9,
                        { guild: i, selected: s === eu.VV.GUILD_OFFICIAL_MESSAGES },
                        t$.n.GUILD_OFFICIAL_MESSAGES,
                    );
                default:
                    return null;
            }
        }
        if (c.isPlaceholderRow(t, n)) return null;
        let f = c.getChannelFromSectionRow(t, n);
        if (null == f) return null;
        let { category: p, channel: C } = f,
            E = p instanceof tT.xu,
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
                            (0, r.jsx)(sk, {
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
                                ? (0, r.jsx)(la, {
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
                    l0,
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
                    rH,
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
                return (0, r.jsx)(l9, { channel: x, guild: i, position: C.position, selected: s === C.id }, N);
            case H.rbe.GUILD_CATEGORY:
                if (t !== c.voiceChannelsSectionNumber) return null;
                return (0, r.jsx)(nu, { channel: x }, `readonly-${x.id}`);
            case H.rbe.PUBLIC_THREAD:
            case H.rbe.PRIVATE_THREAD:
            case H.rbe.ANNOUNCEMENT_THREAD:
                return (0, r.jsx)(
                    sk,
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
            nS,
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
                let { hasDivider: i, canHaveVoiceSummary: l } = nN(t, n, e);
                return `section-footer-${e}${i ? "-divider" : ""}${l ? "-voice-summary" : ""}`;
            })(t, n, o),
        );
    };
    renderTopUnread() {
        let { topMention: e, bottomUnread: t, bottomMention: n, isUnreadVisible: i } = this.state,
            { guildId: l, guildChannels: s, guildChannelsVersion: a } = this.props;
        return (0, r.jsx)("div", {
            className: nA.Eo,
            children: (0, r.jsx)(rr, {
                ref: this.unreadTopRef,
                textUnread: eg.intl.string(eg.t.FCRiT3),
                textMention: eg.intl.string(eg.t["8zH0LJ"]),
                hide: null == e && (i || null != t || null != n),
                className: nA.Vq,
                barClassName: nA.bu,
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
        return (0, r.jsx)(rr, {
            reverse: !0,
            ref: this.unreadBottomRef,
            textUnread: eg.intl.string(eg.t.FCRiT3),
            textMention: eg.intl.string(eg.t["8zH0LJ"]),
            hide: null == i && l,
            className: nA.di,
            barClassName: nA.bu,
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
        if (e !== tT.PU) {
            if (null == t)
                return e === tT.HP
                    ? "favorites-header"
                    : e === n.recentsSectionNumber
                      ? "recents-header"
                      : e === n.voiceChannelsSectionNumber
                        ? "voice-channels"
                        : e === tT.bK
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
                        className: nA.XG,
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
                        innerAriaLabel: eg.intl.string(eg.t.OGiMXJ),
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
        if (!tv.A.shouldShow("voice-conversations")) return;
        let { guildChannels: e } = this.props,
            t = e.getFirstVoiceChannel();
        if (null == t) return void tj.X8("voice-conversations");
        let n = this._list;
        if (null != n)
            for (let { section: e, row: i } of this.getSectionRowsFromChannel(t.id))
                n.isItemVisible(e, i) || tj.X8("voice-conversations");
    };
    render() {
        let { guildChannels: e, guildChannelsVersion: t, showNewUnreadsBar: n } = this.props;
        return (0, r.jsx)(et.V0, {
            children: (i) =>
                (0, r.jsx)(p.F, {
                    component: (0, r.jsx)(C.A, {
                        children: (0, r.jsx)(p.H, { id: i, children: eg.intl.string(eg.t.OGiMXJ) }),
                    }),
                    children: n
                        ? (0, r.jsxs)(a.Fragment, {
                              children: [
                                  (0, r.jsx)("div", {
                                      className: nA.Eo,
                                      children: (0, r.jsx)(rt, {
                                          position: "top",
                                          guildChannels: e,
                                          guildChannelsVersion: t,
                                          jumpToVoiceChannels: this.jumpToVoiceChannels,
                                          jumpToChannel: this.jumpToChannel,
                                      }),
                                  }),
                                  this.renderList(),
                                  (0, r.jsx)(rt, {
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
        l = (0, h.bG)([z.Ay], () => z.Ay.keyboardModeEnabled),
        { analyticsLocations: s } = (0, W.Ay)(K.A.GUILD_CHANNEL_LIST),
        o = (0, h.bG)([U.A], () => U.A.getChannel(n)),
        d = (0, h.bG)([U.A], () => U.A.getChannel(i)),
        m = (0, h.bG)([w.A], () => w.A.getGuildId()),
        g = (0, eK.jN)(t),
        A = a.useRef(null),
        f = a.useCallback((e, t) => {
            let n = A.current;
            null != n &&
                (H.Ut1.test(t) || (0, eu.jq)(t)
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
            [tS.A, U.A, tC.A],
            () => {
                let t;
                return [
                    (t = (0, M.ai)(e)
                        ? t_.default
                              .keys(tC.A.getFavoriteChannels())
                              .map((e) => U.A.getChannel(e))
                              .filter(tx.Vq)
                              .filter((e) => e.isGuildStageVoice())
                        : tS.A.getChannels(e)).reduce((e, t) => {
                        let n = tS.A.getMutableParticipants(t.id, tI.ip.SPEAKER);
                        return ((e[t.id] = n.filter((e) => e.type === tI.wY.VOICE).map(tb)), e);
                    }, {}),
                    t.reduce((e, t) => {
                        let { id: n } = t;
                        return e + tS.A.getParticipantsVersion(n);
                    }, 0),
                ];
            },
            [e],
            tN.D,
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
                    (0, r.jsx)(tG.q, { containerRef: E.containerProps.ref, itemType: k }),
                    (0, r.jsx)(rF, {
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
        o = (function (e) {
            var t;
            let n,
                i,
                l =
                    ((t = e.id),
                    (n = (0, tX.A)(t)),
                    (i = (0, tJ.Ay)(t)),
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
                s = (0, tH.W)(e.id),
                r = (0, tY.vz)(e.id),
                a = (0, tO.r)(e),
                o = (0, tZ.jz)(e),
                d = (0, tK.d)(e.id),
                c = (0, tD.bG)([tF.h], () => tF.h.getNewMemberActions(e.id), [e.id]),
                u = (0, tP.Q9)(e, "useGuildActionRows"),
                m = (0, tW.A)(e.id),
                g = (0, tz.jY)(e.id),
                A = (0, tk.fw)(e.id),
                f = (0, eL.Uq)(e.id, "useGuildActionRows"),
                p = !0 === (0, tB.A)(e),
                C = (0, eK.jN)(e.id),
                E = [],
                x = e.features.has(H.GuildFeatures.HUB),
                N = e.features.has(H.GuildFeatures.COMMUNITY),
                _ = e.features.has(H.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
                S = (0, tc.A)(e.id),
                I = th(e),
                b = (0, tq.bW)(e.id, "useGuildActionRows"),
                j = (0, tw.C$)(e.id, "useGuildActionRows"),
                v = e.features.has(H.GuildFeatures.GAME_SERVERS),
                G = (0, tV.N)("useGuildActionRows"),
                [R] = (0, eo.kn)(j && G && !v ? [en.M.EMPTY_GAME_SERVER_TAB] : [], { bypassAutoDismiss: !0 });
            return (
                x && E.push(t$.n.GUILD_HUB_HEADER_OPTIONS),
                !g && d && m && null != c && c.length > 0
                    ? E.push(t$.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR)
                    : e.premiumProgressBarEnabled && I > 0 && E.push(t$.n.GUILD_PREMIUM_PROGRESS_BAR),
                !x && d && E.push(t$.n.GUILD_HOME),
                f && E.push(t$.n.GUILD_SPACE),
                l && E.push(t$.n.GUILD_SCHEDULED_EVENTS),
                !x && N && (p || C) && E.push(t$.n.CHANNELS_AND_ROLES),
                r && E.push(t$.n.GUILD_ROLE_SUBSCRIPTIONS),
                a && E.push(t$.n.GUILD_SHOP),
                o && E.push(t$.n.GUILD_GAME_SHOP),
                ((A && (N || _)) || (s && e.features.has(H.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL))) &&
                    E.push(t$.n.GUILD_MOD_DASH_MEMBER_SAFETY),
                S && E.push(t$.n.GUILD_BOOSTS),
                b && E.push(t$.n.GUILD_OFFICIAL_MESSAGES),
                j && (v ? E.push(t$.n.GAME_SERVERS) : null != R && E.push(t$.n.GAME_SERVERS_EMPTY)),
                u && E.push(t$.n.GUILD_CONJURE),
                E
            );
        })(e.guild),
        d = (0, h.cf)([tL.A], () => tL.A.getGuild(e.guildId, { guildActionRows: o })),
        c =
            ((t = e.guildId),
            (n = o.includes(t$.n.GUILD_CONJURE)),
            (i = (0, J.Xj)((0, Y.zy)().pathname)),
            a.useEffect(() => {
                n && "unattempted" === Z.Ay.getGuildProjectsFetchState(t) && (0, q.listProjects)(t);
            }, [n, t]),
            (l = (0, X.UU)(() => (n ? (0, Q.cR)(t) : ee), [n, t])),
            (s = (0, $.A)(l, i)),
            a.useMemo(() => {
                if (null == i || !l.some((e) => e.id === i)) return s;
                let e = new Set(s);
                return l.filter((t) => t.id === i || e.has(t));
            }, [l, s, i])),
        { density: u } = (0, E.wR)();
    return (0, r.jsx)(rz, { ...e, ...d, conjureProjects: c, density: u });
}
