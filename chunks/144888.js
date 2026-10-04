(n.d(t, { B: () => rg, i: () => rm }), n(321073));
var i,
    l,
    s = n(477900),
    r = n(582128),
    a = n(435558),
    o = n.n(a),
    d = n(837381),
    c = n(887129),
    u = n(17928),
    h = n(661531),
    m = n(715828),
    g = n(312138),
    A = n(475825),
    f = n(707554),
    p = n(140735),
    C = n(38021),
    E = n(951001),
    x = n(820284),
    N = n(480747),
    _ = n(437725),
    S = n(192308),
    I = n(999903),
    b = n(44757),
    G = n(97587),
    j = n(838533),
    v = n(79843),
    R = n(466152),
    y = n(5180),
    T = n(770376),
    L = n(924985),
    M = n(734057),
    U = n(769765),
    D = n(71393),
    O = n(576705),
    P = n(967198),
    V = n(543465),
    w = n(652215);
let H = "DRAGGABLE_GUILD_CHANNEL";
function B(e) {
    return (0, N.T)(
        H,
        {
            drop(e, t) {
                let n = P.A.getGuildId(),
                    i = t.getItem(),
                    l = (0, b.QO)((0, j.A)(n, i.id), i.position, e.channel, e.position, i.channelList);
                if (null == l) return;
                let s = (0, j.A)(n, i.id);
                if (null == s) return;
                let r = U.A.getCategories(n),
                    a = (0, b.RL)(s, (0, j.A)(n, l.referenceId), l.parentId, r);
                (0, R.A)(n, s, l.parentId, a);
            },
            canDrop(e, t) {
                let n = t.getItem(),
                    i = M.A.getChannel(n.id);
                if (null == i) return !1;
                let l = (0, b.QO)(M.A.getChannel(n.id), n.position, e.channel, e.position, n.channelList);
                if (null == l) return !1;
                if ((0, y.ai)(P.A.getGuildId())) return !0;
                if (V.Ay.isFavorite(n.guildId, e.channel.id)) return !1;
                let s = D.A.getGuild(n.guildId);
                if (null == s) return !1;
                let r = M.A.getChannel(l.parentId),
                    a = (0, G.Ay)((0, G.Fd)(i), s),
                    o = (0, G.Ay)(r, s);
                return a && o;
            },
        },
        (e, t) => {
            let n = t.getItem();
            return null == n || null == n.isChannelDrag
                ? {
                      connectChannelDropTarget: e.dropTarget(),
                      sorting: !1,
                      sortingType: null,
                      sortingPosition: null,
                      sortingParent: null,
                  }
                : {
                      connectChannelDropTarget: e.dropTarget(),
                      sorting: !0,
                      sortingType: n.type,
                      sortingPosition: t.isOver() && t.canDrop() ? n.position : null,
                      sortingParent: t.isOver() && t.canDrop() ? n.parentId : null,
                  };
        },
    )(
        (0, _.I)(
            H,
            {
                canDrag(e) {
                    let { channel: t } = e,
                        i = P.A.getGuildId(),
                        l = (0, v.A)(t, i);
                    if (null == l) return !0;
                    switch (l.reason) {
                        case "no-permission":
                        default:
                            return !1;
                        case "opt-in-channels":
                            return (
                                (0, T.A)() &&
                                    (0, S.openModalLazy)(async () => {
                                        let { default: e } = await Promise.all([n.e("57729"), n.e("24848")]).then(
                                            n.bind(n, 354643),
                                        );
                                        return (t) => (0, s.jsx)(e, { ...t });
                                    }),
                                !1
                            );
                        case "pinned-channel":
                            return (
                                (0, S.openModalLazy)(async () => {
                                    let { default: e } = await n.e("280545").then(n.bind(n, 933752));
                                    return (n) => (0, s.jsx)(e, { ...n, guildId: l.guild.id, channelId: t.id });
                                }),
                                !1
                            );
                    }
                },
                beginDrag(e) {
                    let {
                            channel: { id: t, parent_id: n, guild_id: i, type: l },
                            position: s,
                        } = e,
                        r = P.A.getGuildId(),
                        a = U.A.getCategories(r);
                    return {
                        isChannelDrag: !0,
                        id: t,
                        position: s,
                        parentId: n,
                        type: l,
                        channelList: (0, I.A)(a._categories, a, (e) => {
                            let { channel: t } = e;
                            return t.type === w.rbe.GUILD_CATEGORY && null != a[t.id] && 0 === a[t.id].length
                                ? !!(0, y.ai)(r) ||
                                      (O.A.can(w.xBc.MANAGE_CHANNELS, t) && O.A.can(w.xBc.VIEW_CHANNEL, t))
                                : !L.A.isCollapsed(t.parent_id);
                        }),
                        guildId: i,
                    };
                },
            },
            (e) => ({ connectChannelDragSource: e.dragSource(), connectDragPreview: e.dragPreview() }),
        )(e),
    );
}
var k = n(775602),
    F = n(793574),
    K = n(688810),
    z = n(915089),
    W = n(554146),
    Y = n(866665),
    X = n(939249),
    q = n(789645),
    Z = n(812993),
    $ = n(687966),
    J = n(131607),
    Q = n(652793),
    ee = n(976860),
    et = n(746080),
    en = n(49999),
    ei = n(394107),
    el = n(375708),
    es = n(275833),
    er = n(964306);
let ea = r.memo(function (e) {
    let { guildId: t, selected: i } = e,
        [l, a] = (0, J.ww)([W.M.GAME_SERVER_HOSTING_NEW_BADGE], t),
        o = l === W.M.GAME_SERVER_HOSTING_NEW_BADGE,
        d = r.useCallback(() => {
            (a(en.i.USER_DISMISS), (0, ee.pX)(w.BVt.CHANNEL(t, et.VV.GAME_SERVERS)));
        }, [t, a]),
        c = r.useCallback(
            (e) => {
                (e.stopPropagation(),
                    (0, S.openModalLazy)(async () => {
                        let { default: e } = await n.e("726702").then(n.bind(n, 758909));
                        return (n) => (0, s.jsx)(e, { ...n, guildId: t });
                    }));
            },
            [t],
        ),
        u = (0, s.jsxs)("div", {
            className: es.c,
            children: [
                (0, s.jsx)("div", {
                    className: er.Xs,
                    children: (0, s.jsx)(Y.m, {
                        text: el.intl.string(el.t.fgq1gs),
                        position: "top",
                        children: (0, s.jsx)(X.D, {
                            onClick: c,
                            "aria-label": el.intl.string(el.t.fgq1gs),
                            children: (0, s.jsx)(q.P, { size: "xs", color: "currentColor", className: er.gE }),
                        }),
                    }),
                }),
                o &&
                    (0, s.jsx)("div", {
                        className: er.yW,
                        children: (0, s.jsx)(Z.Lp, {
                            disableColor: !0,
                            text: el.intl.string(el.t.y2b7CA),
                            className: es.q,
                        }),
                    }),
            ],
        });
    return (0, s.jsx)(Q.G, {
        className: er.Ki,
        id: `game-server-empty-${t}`,
        renderIcon: (e) => (0, s.jsx)($.GameControllerIcon, { size: "md", className: e, color: "currentColor" }),
        text: el.intl.string(ei.default.vCzwM7),
        selected: i,
        onClick: d,
        trailing: u,
    });
});
var eo = n(361158),
    ed = n(270533),
    ec = n(186111),
    eu = n(917782);
let eh = r.memo(function (e) {
    let { guildId: t, selected: n } = e,
        i = (0, S.useHasAnyModalOpen)(),
        l = (0, u.bG)([ec.A], () => ec.A.hasLayers()),
        a = (0, eo.xr)((e) => e.fullScreenLayers.length > 0),
        [o, d] = (0, J.ww)([W.M.GAME_SERVER_HOSTING_NEW_BADGE], t),
        c = o === W.M.GAME_SERVER_HOSTING_NEW_BADGE,
        [h, m] = (0, J.ww)(i || l || a || !c ? [] : [W.M.GAME_SERVER_HOSTING_NEW_COACHMARK], t),
        g = r.useCallback(
            (e) => {
                (d(e), m(e));
            },
            [d, m],
        ),
        A = r.useCallback(() => {
            (g(en.i.USER_DISMISS), (0, ee.pX)(w.BVt.CHANNEL(t, et.VV.GAME_SERVERS)));
        }, [t, g]),
        f = r.useRef(null),
        p = h === W.M.GAME_SERVER_HOSTING_NEW_COACHMARK,
        C = r.useCallback(() => (0, s.jsx)(ed.mn, { channelRowRef: f, guildId: t, markAsDismissed: g }), [t, g]);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(Q.G, {
                ref: f,
                id: `game-server-${t}`,
                renderIcon: (e) =>
                    (0, s.jsx)($.GameControllerIcon, { size: "md", className: e, color: "currentColor" }),
                text: el.intl.string(ei.default.vCzwM7),
                selected: n,
                onClick: A,
                trailing: c
                    ? (0, s.jsx)(Z.Lp, { disableColor: !0, text: el.intl.string(el.t.y2b7CA), className: eu.q })
                    : null,
            }),
            p && C(),
        ],
    });
});
var em = n(177953),
    eg = n(624458),
    eA = n(844944),
    ef = n(513461),
    ep = n(663997),
    eC = n(221950);
function eE(e) {
    let { guild: t, selected: n } = e,
        i = (0, u.bG)([O.A], () => O.A.can(w.xBc.KICK_MEMBERS, t)),
        l = (0, u.bG)([eA.A], () => eA.A.getSubmittedGuildJoinRequestTotal(t.id)),
        a = i ? (l ?? 0) : 0;
    r.useEffect(() => {
        i &&
            t.features.has(w.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
            t.features.has(w.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
            eg.A.fetchGuildJoinRequests({ guildId: t.id, status: ef.B5.SUBMITTED, limit: ep.L });
    }, [i, t]);
    let o = r.useCallback(() => {
        (0, eC.aZ)(t.id);
    }, [t.id]);
    return (0, s.jsx)(Q.G, {
        id: `members-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(em.n, { size: "md", color: "currentColor", className: e }),
        text: el.intl.string(el.t.oclz3Z),
        selected: n,
        onClick: o,
        trailing: a > 0 ? (0, s.jsx)(Z.hV, { count: a }) : null,
    });
}
var ex = n(43105),
    eN = n(508770),
    e_ = n(332837),
    eS = n(93675),
    eI = n(942857),
    eb = n(313627),
    eG = n(968176),
    ej = n(151098);
function ev(e) {
    let { guild: t, selected: i } = e,
        l = (0, eI.A)(),
        [a, o] = (0, J.kn)(l ? [] : [W.M.GUILD_SPACE_COACHMARK], void 0, !0),
        d = a === W.M.GUILD_SPACE_COACHMARK,
        c = r.useRef(null),
        u = (0, eb.mN)(t),
        h = r.useCallback(() => {
            (o(en.i.USER_DISMISS), (0, ee.pX)(w.BVt.CHANNEL(t.id, et.VV.GUILD_SPACE)));
        }, [t.id, o]),
        m = r.useCallback(() => {
            (o(en.i.TAKE_ACTION), (0, ee.pX)(w.BVt.CHANNEL(t.id, et.VV.GUILD_SPACE)));
        }, [t.id, o]),
        g = r.useCallback(
            (e) => {
                (e.stopPropagation(),
                    (0, S.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([
                            n.e("8422"),
                            n.e("37786"),
                            n.e("303807"),
                            n.e("842987"),
                            n.e("421410"),
                        ]).then(n.bind(n, 643065));
                        return (n) => (0, s.jsx)(e, { ...n, guildId: t.id });
                    }));
            },
            [t.id],
        ),
        A = d ? (0, s.jsx)(eN.E, { type: "new", variant: "brand" }) : null,
        f = u
            ? (0, s.jsxs)("div", {
                  className: ej.c,
                  children: [
                      (0, s.jsx)("div", {
                          className: er.Xs,
                          children: (0, s.jsx)(Y.m, {
                              text: el.intl.string(el.t.R9GHya),
                              position: "top",
                              children: (0, s.jsx)(X.D, {
                                  onClick: g,
                                  "aria-label": el.intl.string(el.t.R9GHya),
                                  children: (0, s.jsx)(q.P, { size: "xs", color: "currentColor", className: er.gE }),
                              }),
                          }),
                      }),
                      null != A ? (0, s.jsx)("div", { className: er.yW, children: A }) : null,
                  ],
              })
            : A;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(Q.G, {
                ref: c,
                className: u ? er.Ki : void 0,
                id: `guild-space-tab-${t.id}`,
                renderIcon: (e) => (0, s.jsx)(e_.HomeIcon, { size: "md", color: "currentColor", className: e }),
                text: el.intl.string(el.t["04IVMq"]),
                selected: i,
                onClick: h,
                trailing: f,
            }),
            d
                ? (0, s.jsx)(ex.A, {
                      targetElementRef: c,
                      title: el.intl.string(eG.default["+OEqVQ"]),
                      body: el.intl.string(eG.default["BP//Ot"]),
                      graphic: {
                          type: "rive",
                          rive: eS.f,
                          aspectRatio: "16/9",
                          props: { dataBinding: { on: !0 }, withReducedMotion: "halt", fit: "contain" },
                      },
                      actions: [{ text: el.intl.string(el.t.RzWDqY), variant: "primary", onClick: m }],
                      shouldShow: !0,
                      position: "right",
                      align: "top",
                      alignmentStrategy: "edge",
                      caretConfig: { align: "start" },
                      scrollBehavior: "close",
                      onRequestClose: () => o(en.i.USER_DISMISS),
                  })
                : null,
        ],
    });
}
var eR = n(581007),
    ey = n(522435),
    eT = n(285406),
    eL = n(582904),
    eM = n(419534),
    eU = n(395504),
    eD = n(503698),
    eO = n.n(eD),
    eP = n(695366),
    eV = n(104510),
    ew = n(544048),
    eH = n(868652),
    eB = n(379229),
    ek = n(482487),
    eF = n(914732),
    eK = n(828162),
    ez = n(877624),
    eW = n(549996),
    eY = n(25525),
    eX = n(247806);
function eq(e) {
    let { indicator: t } = e;
    if (null == t) return null;
    switch (t.type) {
        case eB.cD.WARNING:
            return (0, s.jsx)(eP.E, { color: h.A.colors.STATUS_WARNING, size: "sm" });
        case eB.cD.UNREAD:
            return (0, s.jsx)(Z.hV, { count: t.count });
        default:
            return null;
    }
}
let eZ = { animation: { BEG: 0, END: 75 }, LOOP: { BEG: 76, END: 376 } },
    e$ = r.memo(function (e) {
        let { guildId: t, selected: i } = e,
            l = (0, eF.Ay)(t),
            { showHighlight: a, markAsDismissed: o } = (function () {
                let e = (0, eW.c)(ez.C.GUILD_BOOST_TAB_BANNER),
                    t = null != e && "guildBoostTabBanner" === e.properties.properties.oneofKind,
                    [n, i] = (0, J.Cc)(t ? W.M.GUILD_BOOST_TAB_HIGHLIGHT : null, e?.promotionId ?? "");
                return { showHighlight: n === W.M.GUILD_BOOST_TAB_HIGHLIGHT, markAsDismissed: i };
            })(),
            { showNewBadgeOnRow: d, dismissNewBadgeIfShown: c } = (0, ek.A)(
                t,
                l?.indicator != null || l?.popout != null,
            ),
            m = r.useCallback(() => {
                (c(),
                    (0, eH.Zm)(t),
                    (0, eK.A)(t, F.A.GUILD_POWERUPS_CHANNEL_LIST_ROW),
                    l?.popout?.markAsDismissed(en.i.INDIRECT_ACTION));
            }, [t, c, l]),
            g = r.useRef(null),
            A = (0, S.useModalsStore)(S.hasAnyModalOpenSelector),
            f = (0, u.bG)([ec.A], () => ec.A.hasLayers()),
            p = (0, eo.xr)((e) => e.fullScreenLayers.length > 0),
            C = A || f || p,
            E = r.useCallback(() => {
                if (l?.popout == null || C) return null;
                switch (l?.popout?.type) {
                    case eB.o.LEVEL_REACHED:
                        return (0, s.jsx)(ed.HW, { guildId: t, channelRowRef: g, ...l.popout });
                    case eB.o.PERKS_AVAILABLE:
                        return (0, s.jsx)(ed.UB, { guildId: t, channelRowRef: g, ...l.popout });
                    case eB.o.PERKS_PURCHASABLE:
                        return (0, s.jsx)(ed.lw, { guildId: t, channelRowRef: g, ...l.popout });
                    case eB.o.NEW_PERK_AVAILABLE:
                        return (0, s.jsx)(ed.bo, { guildId: t, channelRowRef: g, ...l.popout });
                    case eB.o.BOOST_TO_UNLOCK:
                        return (0, s.jsx)(ed.Gw, { guildId: t, channelRowRef: g, ...l.popout });
                    case eB.o.EXPIRING_PERK:
                        return (0, s.jsx)(ed.Mr, { guildId: t, channelRowRef: g, ...l.popout });
                    case eB.o.GAME_SERVER_HOSTING_AVAILABLE:
                    case eB.o.GAME_SERVER_HOSTING_GUILD_ELIGIBLE:
                        return (0, s.jsx)(ed.jz, { guildId: t, channelRowRef: g, ...l.popout });
                    case eB.o.GAME_SERVER_NEW_GAMES:
                        return (0, s.jsx)(ed.YX, { guildId: t, channelRowRef: g, ...l.popout });
                    default:
                        return (0, s.jsx)("div", {});
                }
            }, [t, l?.popout, g, C]);
        r.useEffect(() => {
            i && a && o(en.i.AUTO_DISMISS);
        }, [i, a, o]);
        let x = l?.popout != null || a,
            [N, _] = r.useState(null);
        r.useEffect(() => {
            x || _(null);
        }, [x]);
        let I = r.useCallback((e) => {
            _(e);
        }, []);
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(Q.G, {
                    ref: g,
                    className: eX.kL,
                    id: `skill-trees-${t}`,
                    renderIcon: (e) => (0, s.jsx)(eV._, { size: "md", className: e, color: "currentColor" }),
                    background:
                        x &&
                        (0, s.jsx)("div", {
                            className: eX.Fi,
                            children: (0, s.jsx)(ew.t, {
                                nextScene: null == N ? "animation" : "LOOP",
                                className: eX.UU,
                                sceneSegments: eZ,
                                importData: () => n.e("867807").then(n.t.bind(n, 217762, 19)),
                                onScenePlay: I,
                                rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
                            }),
                        }),
                    text: (0, s.jsx)("span", {
                        className: eO()({ [eX.A7]: l?.showUnread === !0 }),
                        children: el.intl.string(eY.default.yv3DJJ),
                    }),
                    selected: i,
                    onClick: m,
                    showUnread: l?.showUnread === !0,
                    trailing: d
                        ? (0, s.jsx)(Z.Lp, {
                              text: el.intl.string(el.t.y2b7CA),
                              color: h.A.colors.BACKGROUND_BRAND.css,
                          })
                        : (0, s.jsx)(eq, { indicator: l?.indicator }),
                }),
                E(),
            ],
        });
    });
var eJ = n(202091),
    eQ = n(717421),
    e0 = n(834730),
    e1 = n(442433),
    e3 = n(230135),
    e2 = n(73153);
let e9 = {};
class e7 extends u.Ay.PersistedStore {
    static displayName = "GuildBoostingProgressBarPersistedStore";
    static persistKey = "PremiumGuildProgressBarPersistedStore";
    initialize(e) {
        null != e && (e9 = e);
    }
    getState() {
        return e9;
    }
    getCountForGuild(e) {
        return e9[e];
    }
}
let e5 = new e7(e2.h, {
    APPLIED_GUILD_BOOST_COUNT_UPDATE: function (e) {
        let { guildId: t, premiumCount: n } = e;
        e9 = { ...e9, [t]: n };
    },
    APPLIED_GUILD_BOOST_COUNT_RESET: function () {
        e9 = {};
    },
});
var e6 = n(147925),
    e4 = n(363487),
    e8 = n(568065);
function te(e) {
    return (0, r.useMemo)(() => {
        if (null == e) return 0;
        let t = e?.features.has(w.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) === !0 ? 0 : w.M2T[w.TVA.TIER_3],
            n = Object.values(e8.sy),
            i = Object.values(e8.YV);
        return (
            n.concat(i).forEach((n) => {
                null == n.includedInLevel && (n.isEnabled?.(e.id) ?? !0) && (t += n.boostPrice);
            }),
            t
        );
    }, [e]);
}
var tt = n(196577);
let tn = r.forwardRef((e, t) => {
    let { appliedBoostCount: n, maxBoostCount: i, premiumSubscriberCount: l, className: a } = e,
        o = n >= i,
        d = Math.min((n / i) * 100, 100),
        c = `calc(${d}% - 4px)`,
        [u, h] = (0, eQ.z)(
            () => ({ width: n === l ? c : "calc(0% - 0px)", config: { tension: 250, damping: 5, mass: 1 } }),
            "respect-motion-settings",
            [n, l],
        );
    return (
        r.useEffect(() => {
            h({ width: c });
        }, [c, h]),
        (0, s.jsxs)("div", {
            ref: t,
            className: tt.hQ,
            children: [
                (0, s.jsx)("div", { className: eO()(tt.L$, a) }),
                (0, s.jsx)(eJ.animated.div, { className: eO()(tt.qB, { [tt.mu]: d <= 5 }), style: u }),
                (0, s.jsxs)("div", {
                    className: tt.FS,
                    children: [
                        (0, s.jsxs)("div", {
                            className: tt.Ui,
                            children: [
                                (0, s.jsx)(e0.E, {
                                    className: tt.Qq,
                                    variant: "text-xs/semibold",
                                    children: el.intl.string(eY.default.NI6Ihe),
                                }),
                                l >= i &&
                                    (0, s.jsx)(e0.E, {
                                        className: tt.Qq,
                                        variant: "text-xs/semibold",
                                        children: "\uD83C\uDF89",
                                    }),
                            ],
                        }),
                        (0, s.jsxs)("div", {
                            className: tt.Ui,
                            children: [
                                (0, s.jsx)(e0.E, {
                                    className: eO()(tt.Qq, tt.ue),
                                    variant: "text-xs/semibold",
                                    children: o
                                        ? el.intl.formatToPlainString(eY.default["Ehpq+7"], { appliedBoostCount: n })
                                        : el.intl.formatToPlainString(eY.default["/rbPDs"], {
                                              appliedBoostCount: n,
                                              maxBoostCount: i,
                                          }),
                                }),
                                (0, s.jsx)(e6.A, {
                                    width: 12,
                                    height: 12,
                                    direction: e6.A.Directions.RIGHT,
                                    className: eO()(tt.Qq, tt.ue, tt.OW),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
function ti(e) {
    let { guild: t, withMargin: i } = e,
        l = te(t),
        a = (0, e4.A)(t.id),
        o = r.useCallback(() => {
            (0, eK.A)(t.id, F.A.GUILD_BOOSTING_SIDEBAR_DISPLAY);
        }, [t.id]),
        d = (0, u.bG)([e5], () => e5.getCountForGuild(t.id) ?? 0);
    r.useEffect(() => {
        d !== t.premiumSubscriberCount && (0, e3.u)(t.id, t.premiumSubscriberCount);
    }, [t.id, d, t.premiumSubscriberCount]);
    let c = r.useCallback(
        (e) => {
            a &&
                (0, e1.L3)(e, async () => {
                    let { default: e } = await n.e("371728").then(n.bind(n, 709843));
                    return (n) => (0, s.jsx)(e, { ...n, guild: t });
                });
        },
        [a, t],
    );
    return (0, s.jsx)(X.D, {
        "aria-label": void 0,
        role: "button",
        focusProps: { offset: { left: 10, right: 4 } },
        onClick: o,
        className: eO()(tt.kL, { [tt.aF]: i }),
        onContextMenu: c,
        children: (0, s.jsx)(tn, {
            appliedBoostCount: d,
            maxBoostCount: l,
            premiumSubscriberCount: t.premiumSubscriberCount,
        }),
    });
}
function tl(e) {
    let { guild: t, withMargin: n } = e;
    return (0, s.jsx)(ti, { guild: t, withMargin: n });
}
tn.displayName = "GuildPowerupsProgressBarUI";
var ts = n(455234),
    tr = n(181079),
    ta = n(607567),
    to = n(403362),
    td = n(996439),
    tc = n(935208),
    tu = n(63995),
    th = n(518769);
function tm(e) {
    let { voiceState: t, userNick: n, user: i } = e,
        l = (0, ta.hz)(t, n);
    return { user: i, voiceState: t, nick: n, comparator: l };
}
var tg = n(787541),
    tA = n(79858),
    tf = n(600761),
    tp = n(95701),
    tC = n(72314),
    tE = n(808728),
    tx = n(297469),
    tN = n(960755),
    t_ = n(633965),
    tS = n(702841),
    tI = n(870440),
    tb = n(41200),
    tG = n(831617),
    tj = n(589603),
    tv = n(496767),
    tR = n(134413),
    ty = n(701785),
    tT = n(101611),
    tL = n(473529),
    tM = n(578484),
    tU = n(71165),
    tD = n(978165),
    tO = n(960253),
    tP = n(770666),
    tV = n(508654),
    tw = n(521427),
    tH = n(871123),
    tB = n(281405),
    tk = n(3026),
    tF = n(821609),
    tK = n(499373),
    tz = n(559106),
    tW = n(847374),
    tY = n(285796),
    tX = n(983851),
    tq = n(914430),
    tZ = n(47167),
    t$ = n(485947),
    tJ = n(970853),
    tQ = n(93055),
    t0 = n(349828),
    t1 = n(22277),
    t3 = n(551851),
    t2 = n(391507);
function t9(e) {
    e.stopPropagation();
}
function t7(e) {
    let { label: t, onClick: n, tabIndex: i } = e;
    return (0, s.jsx)(Y.m, {
        text: t,
        children: (0, s.jsx)(X.D, {
            className: eO()(t2.c9, t2.ih),
            onClick: n,
            tabIndex: i,
            role: "button",
            "aria-label": t,
            children: (0, s.jsx)(tK.T, { size: "xs", color: "currentColor", className: t2.hs }),
        }),
    });
}
let t5 = B(
        r.memo(function (e) {
            let t,
                {
                    channel: i,
                    connectChannelDragSource: l,
                    connectChannelDropTarget: a,
                    disableManageChannels: o,
                    position: c,
                    sortingPosition: h,
                    hideIcon: m,
                    children: g,
                } = e,
                A = (0, u.bG)([V.Ay], () => V.Ay.isChannelMuted(i.getGuildId(), i.id)),
                f = (0, u.bG)([L.A], () => L.A.isCollapsed(i.id)),
                p = (0, u.bG)([O.A], () => O.A.can(w.xBc.MANAGE_CHANNELS, i)),
                C = (0, tZ.Ay)(i);
            t = null != h ? (c > h ? t2.mU : t2.TR) : t2.fx;
            let E = r.useCallback(() => {
                    f ? (0, tq.fh)(i.id) : (0, tq.Gv)(i.id);
                }, [i.id, f]),
                x = r.useCallback(
                    (e) => {
                        if ("null" !== i.id) {
                            let t = D.A.getGuild(i.getGuildId());
                            null != t &&
                                (0, e1.L3)(e, async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("926132"),
                                        n.e("393336"),
                                        n.e("391763"),
                                        n.e("955557"),
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
                                    return (n) => (0, s.jsx)(e, { ...n, channel: i, guild: t });
                                });
                        }
                    },
                    [i],
                ),
                N = r.useCallback(() => {
                    let e = i.type === w.rbe.GUILD_CATEGORY ? null : i.type,
                        t = i.getGuildId();
                    null != t &&
                        (0, S.openModalLazy)(async () => {
                            let { default: l } = await Promise.all([
                                n.e("377476"),
                                n.e("403032"),
                                n.e("746309"),
                                n.e("778799"),
                                n.e("470068"),
                                n.e("203589"),
                                n.e("692513"),
                                n.e("589916"),
                                n.e("460773"),
                                n.e("208018"),
                                n.e("120379"),
                                n.e("824547"),
                                n.e("819193"),
                                n.e("507775"),
                                n.e("662068"),
                                n.e("358608"),
                                n.e("221500"),
                            ]).then(n.bind(n, 906724));
                            return (n) =>
                                (0, s.jsx)(l, {
                                    ...n,
                                    channelType: e,
                                    guildId: t,
                                    categoryId: "null" !== i.id ? i.id : null,
                                });
                        });
                }, [i]),
                _ = (function (e, t) {
                    let n = (0, u.bG)([tr.A], () => tr.A.autoAddJoinedThreads),
                        { isAtLimit: i } = (0, tQ.ft)();
                    return n &&
                        i &&
                        null != t &&
                        (0, y.ai)(e.getGuildId()) &&
                        e.type === w.rbe.GUILD_CATEGORY &&
                        t.trim().toLowerCase() === t0.A.toLowerCase()
                        ? { label: el.intl.string(t1.default.WsUrMD), tooltip: el.intl.string(t1.default.dW9Kov) }
                        : null;
                })(i, C),
                I = (0, tJ.A)(i);
            null == I && p && !o && (I = { label: el.intl.string(el.t["fUYU+j"]), perform: N });
            let { role: b, tabIndex: G, ...j } = (0, d.rm)(i.id),
                v = r.useRef(null),
                R = r.useRef(null),
                T = (0, s.jsxs)("li", {
                    className: t,
                    "data-dnd-name": C,
                    children: [
                        (0, s.jsx)(tz.vN, {
                            focusTarget: v,
                            ringTarget: R,
                            offset: { left: 4, right: 4 },
                            children: (0, s.jsxs)("div", {
                                ref: R,
                                className: eO()(t2.Ki, t2.iE, { [t2.yZ]: f, [t2.SU]: A, [t2.vk]: !0 }),
                                onContextMenu: x,
                                children: [
                                    (0, s.jsxs)(X.D, {
                                        innerRef: v,
                                        className: t2.rb,
                                        tabIndex: G,
                                        ...j,
                                        onClick: E,
                                        "aria-label": el.intl.formatToPlainString(el.t.y5l3J2, { categoryName: C }),
                                        "aria-expanded": !f,
                                        focusProps: { enabled: !1 },
                                        children: [
                                            (0, s.jsx)(t$.A, {
                                                className: t2.UU,
                                                children: (0, s.jsx)(tk.A, { children: C }),
                                            }),
                                            null != _
                                                ? (0, s.jsx)("span", {
                                                      className: t2.qS,
                                                      children: (0, s.jsx)(Y.m, {
                                                          asContainer: !0,
                                                          text: _.tooltip,
                                                          children: (0, s.jsx)(eN.E, {
                                                              type: { text: _.label },
                                                              variant: "default",
                                                          }),
                                                      }),
                                                  })
                                                : null,
                                            m
                                                ? null
                                                : (0, s.jsx)(tW.a, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: t2.Kk,
                                                  }),
                                        ],
                                    }),
                                    (0, s.jsx)("div", {
                                        onClick: t9,
                                        className: t2.Y_,
                                        children:
                                            null != I
                                                ? (0, s.jsx)(t7, { label: I.label, onClick: I.perform, tabIndex: G })
                                                : null,
                                    }),
                                ],
                            }),
                        }),
                        g,
                    ],
                });
            return null != a && null != l ? a(l(T)) : T;
        }),
    ),
    t6 = r.memo(function (e) {
        let { name: t, onDismiss: n, className: i } = e;
        return (0, s.jsx)("li", {
            className: eO()(i, t2.fx),
            children: (0, s.jsxs)("div", {
                className: eO()(t2.Ki, t2._V),
                children: [
                    (0, s.jsx)("div", {
                        className: t2.rb,
                        children: (0, s.jsx)(t$.A, { className: t2.UU, children: (0, s.jsx)(tk.A, { children: t }) }),
                    }),
                    null != n
                        ? (0, s.jsx)(Y.m, {
                              asContainer: !0,
                              text: el.intl.string(el.t["5qNmsU"]),
                              children: (0, s.jsx)(X.D, {
                                  className: t2.r,
                                  onClick: n,
                                  children: (0, s.jsx)(tY.a, { size: "md", color: "currentColor", className: t2.X8 }),
                              }),
                          })
                        : null,
                ],
            }),
        });
    }),
    t4 = r.memo(function (e) {
        let { category: t } = e,
            n = (0, u.bG)([t3.A], () => t3.A.isVoiceCategoryCollapsed(t.guild.id)),
            i = r.useCallback(() => {
                var e, i;
                n
                    ? ((e = t.guild.id), e2.h.dispatch({ type: "VOICE_CATEGORY_EXPAND", guildId: e, expand: !0 }))
                    : ((i = t.guild.id), e2.h.dispatch({ type: "VOICE_CATEGORY_COLLAPSE", guildId: i, expand: !1 }));
            }, [t.guild.id, n]);
        return (0, s.jsx)("div", {
            className: t2.oA,
            children: (0, s.jsx)(tF.$, {
                variant: "secondary",
                fullWidth: !0,
                onClick: i,
                icon: tX.H,
                text: n ? el.intl.string(el.t["/eB9Bg"]) : el.intl.string(el.t.Q2gPWl),
            }),
        });
    }),
    t8 = r.memo(function (e) {
        let { category: t, channel: n } = e,
            i = (0, u.bG)([t3.A], () => t3.A.isVoiceCategoryCollapsed(t.guild.id));
        return i || null == n || n.record.type === w.rbe.GUILD_CATEGORY
            ? i
                ? (0, s.jsx)("li", {
                      className: t2.fx,
                      children: (0, s.jsx)("div", {
                          className: eO()(t2.Ki, t2._V),
                          children: (0, s.jsx)(t$.A, {
                              className: t2.UU,
                              children: (0, s.jsx)(tk.A, { children: el.intl.string(el.t["V/u9Dy"]) }),
                          }),
                      }),
                  })
                : null
            : (0, s.jsx)("div", { style: { height: 16 } });
    }),
    ne = r.memo(function (e) {
        let { channel: t } = e,
            n = (0, tZ.Ay)(t);
        return (0, s.jsx)("li", {
            className: t2.fx,
            children: (0, s.jsx)("div", {
                className: eO()(t2.Ki, t2._V),
                children: (0, s.jsx)(t$.A, { className: t2.UU, children: (0, s.jsx)(tk.A, { children: n }) }),
            }),
        });
    });
var nt = n(728321),
    nn = n(244083);
let ni = { origin: { x: -36, y: 7 }, targetWidth: 232, targetHeight: 40, offset: { x: 0, y: 0 } };
var nl = n(906659);
let ns = r.memo(function (e) {
    let {
            sectionIndex: t,
            guild: n,
            guildChannels: i,
            guildChannelsVersion: l,
            selectedChannelId: a,
            disableManageChannels: o,
        } = e,
        d = r.useCallback(() => {
            let e = i.getCategoryFromSection(i.recentsSectionNumber);
            if (null == e) return;
            let t = null,
                l = e.getShownChannelAndThreadIds();
            (null != a && l.includes(a) && (t = (0, eM.xb)(i)), (0, eM.DD)(n.id, l, t));
        }, [n.id, a, i, l]),
        { density: c } = (0, C.wR)(),
        u = "compact" === c ? 8 : 12;
    switch (t) {
        case tx.PU:
            return (0, s.jsx)("div", { style: { height: u } });
        case tx.bK:
            if (n.features.has(w.GuildFeatures.HUB)) return null;
            return (0, s.jsx)("div", { style: { height: u } });
        case tx.HP:
            return (0, s.jsx)(t6, { name: el.intl.string(el.t.mlPMCy) });
        case i.recentsSectionNumber:
            return (0, s.jsx)(t6, { name: el.intl.string(el.t.gKcrqM), onDismiss: d });
        case i.voiceChannelsSectionNumber: {
            let e = i.getCategoryFromSection(i.voiceChannelsSectionNumber);
            if (null == e || e.isEmpty()) return null;
            let n = i.getChannelFromSectionRow(t, 0)?.channel;
            return (0, s.jsxs)(r.Fragment, {
                children: [(0, s.jsx)("div", { className: nl.ts }), (0, s.jsx)(t8, { category: e, channel: n })],
            });
        }
        case tx.TF: {
            let e = i.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, s.jsx)(t5, {
                channel: e.record,
                position: e.position,
                disableManageChannels: o,
                children: (0, s.jsx)(nt.A, {
                    inlineSpecs: ni,
                    arrowAlignment: nn.oN.TOP,
                    tutorialId: "organize-by-topic",
                    position: "right",
                }),
            });
        }
        default: {
            let e = i.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, s.jsx)(t5, { channel: e.record, position: e.position, disableManageChannels: o });
        }
    }
});
var nr = n(104171),
    na = n(186369),
    no = n(970812),
    nd = n(147036);
function nc(e, t, n) {
    return {
        hasDivider:
            !(function (e, t) {
                if (t === tx.PU) {
                    let t = e.getGuildActionSection().getRows();
                    return (
                        (1 === t.length && t[0] === tB.n.GUILD_PREMIUM_PROGRESS_BAR) ||
                        e.getGuildActionSection().isEmpty()
                    );
                }
                return 0 === e.getSections(!1)[t];
            })(e, n) &&
            (n === tx.PU ||
                ((0, y.ai)(e.id)
                    ? n !== e.getSections(!1).length - 1
                    : n === tx.HP ||
                      (!!t && n !== tx.bK && (n === e.recentsSectionNumber || (e.voiceChannelsSectionNumber, !1))))),
        canHaveVoiceSummary:
            n !== tx.PU &&
            n !== tx.HP &&
            n !== tx.bK &&
            n !== e.recentsSectionNumber &&
            n !== e.voiceChannelsSectionNumber,
    };
}
let nu = r.memo(function (e) {
        let { guildChannels: t, guildChannelsVersion: n } = e,
            i = r.useMemo(() => t.getCategoryFromSection(t.voiceChannelsSectionNumber), [t, n]);
        return null == i ? null : (0, s.jsx)(t4, { category: i });
    }),
    nh = r.memo(function (e) {
        let {
                sectionIndex: t,
                guildChannels: n,
                guildChannelsVersion: i,
                voiceStates: l,
                guildId: a,
                selectedChannelId: o,
                selectedVoiceChannelId: d,
                optInEnabled: c,
            } = e,
            { hasDivider: h, canHaveVoiceSummary: m } = r.useMemo(() => nc(n, c, t), [n, c, t, i]),
            g = r.useMemo(() => (t === tx.PU ? null : n.getCategoryFromSection(t)), [n, t, i]),
            A = (0, eU.jN)(a),
            { enableWaveformIcon: f } = (0, na.b)(a, "ChannelListSectionFooter"),
            p = (0, u.yK)(
                [V.Ay],
                () => {
                    if (null == g || !g.isCollapsed || !m) return [];
                    let e = g.getChannelRecords(),
                        t = [];
                    for (let n of e) {
                        if (!n.isGuildVocal()) continue;
                        let e = V.Ay.isChannelOrParentOptedIn(a, n.id);
                        (!A || e) && t.push(n);
                    }
                    return t;
                },
                [g, m, a, A],
            ),
            C = r.useMemo(
                () => (0, nd.fK)({ channels: p, selectedChannelId: o, selectedVoiceChannelId: d, voiceStates: l }),
                [p, o, d, l],
            );
        if (t === n.voiceChannelsSectionNumber) return (0, s.jsx)(nu, { guildChannels: n, guildChannelsVersion: i });
        let E = h ? (0, s.jsx)("div", { className: nl.ts }) : null;
        return m && 0 !== C.length
            ? (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsx)("div", {
                          className: nl.qz,
                          children: (0, s.jsx)(nr.Ay, {
                              renderIcon: !0,
                              users: C,
                              max: 8,
                              showUserPopout: !0,
                              guildId: a,
                              renderLeadingIcon: f
                                  ? (e) => (0, s.jsx)(no.A, { color: "currentColor", className: eO()(e, er.Gj) })
                                  : void 0,
                          }),
                      }),
                      E,
                  ],
              })
            : E;
    });
var nm = n(152367),
    ng = n(222454),
    nA = n(26278),
    nf = n(594211),
    np = n(309010),
    nC = n(775946),
    nE = n(248675);
function nx(e) {
    let { guild: t, selected: n } = e,
        i = (0, u.bG)([nA.Ay], () => nA.Ay.getSelectedProjectId(t.id), [t.id]),
        l = (0, u.bG)([np.Ay], () => np.Ay.getChannelId(), []),
        r = (0, u.bG)([P.A], () => P.A.getGuildId(), []),
        { hasUnread: a, badgeCount: o } = (0, ng.OI)();
    return (0, s.jsx)(Q.G, {
        id: `vibegrations-${t.id}`,
        renderIcon: (e) =>
            (0, s.jsx)(nm.D, { size: "custom", color: "currentColor", width: 20, height: 20, className: e }),
        text: el.intl.string(nE.default.Xmvb23),
        selected: n,
        showUnread: a,
        trailing: o > 0 ? (0, s.jsx)(nC.A, { mentionsCount: o }) : void 0,
        background: (0, s.jsx)(nf.gT, { guildId: t.id }),
        onClick: () => {
            let e = l === et.VV.VIBEGRATIONS && r === t.id;
            (0, ee.pX)(w.BVt.CHANNEL(t.id, et.VV.VIBEGRATIONS, null == i || e ? null : i));
        },
    });
}
var nN = n(625903),
    n_ = n(283973),
    nS = n(933832),
    nI = n(435183),
    nb = n(698441),
    nG = n(855687),
    nj = n(816662),
    nv = n(446600),
    nR = n(616356);
function ny(e, t, n) {
    return null != t && !!t && !(0, b.ws)(n, e.type);
}
function nT(e, t) {
    return null == t ? er.fx : e > t ? er.mU : er.TR;
}
function nL(e) {
    let { channel: t, disableManageChannels: n, tabIndex: i, forceShowButtons: l, hasChannelInfo: r = !1 } = e;
    return (0, u.bG)(
        [O.A, P.A],
        () =>
            n ||
            (0, y.ai)(P.A.getGuildId()) ||
            (!O.A.can(w.xBc.MANAGE_CHANNELS, t) &&
                !O.A.can(w.xBc.MANAGE_ROLES, t) &&
                !O.A.can(w.xBc.MANAGE_WEBHOOKS, t)) ||
            ((0, tp.tr)(t.type) && !O.A.can(w.xBc.VIEW_CHANNEL, t)) ||
            (t.isGuildVocal() && !O.A.can(w.xBc.CONNECT, t)) ||
            !tp.bk.has(t.type) ||
            t.isModeratorReportChannel(),
    )
        ? null
        : (0, s.jsx)(Y.m, {
              asContainer: !0,
              text: el.intl.string(el.t["3gUsJb"]),
              children: (0, s.jsx)(X.D, {
                  className: eO()(er.Xs, l ? er.Tf : void 0, r ? er.bw : er.UI),
                  onClick: function () {
                      nI.Ay.open(t.id);
                  },
                  tabIndex: i,
                  "aria-label": el.intl.string(el.t["3gUsJb"]),
                  children: (0, s.jsx)(nN.SettingsIcon, { size: "xs", color: "currentColor", className: er.gE }),
              }),
          });
}
function nM(e) {
    let {
            channel: t,
            isDefaultChannel: i = !1,
            locked: l,
            tabIndex: a,
            forceShowButtons: o,
            hasChannelInfo: d = !1,
        } = e,
        c = (0, u.bG)([D.A], () => D.A.getGuild(t.getGuildId())),
        h = (0, u.bG)([nv.A], () => nv.A.getStageInstanceByChannel(t.id), [t.id]),
        m = (0, u.bG)([nb.Ay], () => nb.Ay.getActiveEventByChannel(t.id), [t.id]),
        g = (0, u.bG)([O.A], () => (0, nG.K)(O.A, c, t, h)),
        A = (0, u.bG)([], () =>
            t?.type === w.rbe.GUILD_VOICE ? el.intl.string(el.t["EE+P0H"]) : el.intl.string(el.t["0jeAXt"]),
        ),
        f = r.useRef(null);
    if (l || !g || t.isModeratorReportChannel() || t.isThread()) return null;
    let p = (0, s.jsx)(n_.R, { size: "xs", className: er.gE, "aria-hidden": !0, color: "currentColor" });
    return (
        i &&
            (p = (0, s.jsx)(nt.A, {
                childRef: f,
                tutorialId: "instant-invite",
                position: "left",
                children: (0, s.jsx)("div", { ref: f, children: p }),
            })),
        (0, s.jsx)(Y.m, {
            asContainer: !0,
            text: A,
            children: (0, s.jsx)(X.D, {
                className: eO()(er.Xs, o ? er.Tf : void 0, d ? er.bw : er.UI),
                onClick: function () {
                    if (null != c) {
                        let e = nR.A.getAllActiveStreams().filter(
                            (e) => e.state !== w.XYD.ENDED && e.channelId === t.id,
                        );
                        (0, S.openModalLazy)(async () => {
                            let { default: i } = await Promise.all([
                                n.e("683621"),
                                n.e("711162"),
                                n.e("159957"),
                                n.e("728136"),
                                n.e("216084"),
                                n.e("284819"),
                            ]).then(n.bind(n, 405342));
                            return (n) =>
                                (0, s.jsx)(i, {
                                    ...n,
                                    guild: c,
                                    channel: t,
                                    streamUserId: 1 === e.length ? e[0].ownerId : null,
                                    source: w.PE1.GUILD_CHANNELS,
                                    guildScheduledEvent: m,
                                });
                        });
                    }
                },
                tabIndex: a,
                "aria-label": A,
                children: p,
            }),
        })
    );
}
function nU(e) {
    let { channel: t } = e;
    return (0, s.jsx)(Y.m, {
        asContainer: !0,
        text: el.intl.string(el.t["ROh4T+"]),
        children: (0, s.jsx)(X.D, {
            className: er.Xs,
            onClick: function () {
                (0, nj.Ol)(t.guild_id, t.id);
            },
            "aria-label": el.intl.string(el.t["ROh4T+"]),
            children: (0, s.jsx)(q.P, { size: "xs", color: "currentColor", className: er.gE }),
        }),
    });
}
function nD(e) {
    let { channel: t } = e;
    return (0, s.jsx)(Y.m, {
        asContainer: !0,
        text: el.intl.string(el.t["N2c/Un"]),
        children: (0, s.jsx)(X.D, {
            className: er.Xs,
            onClick: function () {
                (0, nj.jA)(t.guild_id, t.id, !0, { section: w.JJy.CHANNEL_LIST });
            },
            "aria-label": el.intl.string(el.t["N2c/Un"]),
            children: (0, s.jsx)(nS.CheckmarkLargeIcon, { size: "xs", color: "currentColor", className: er.gE }),
        }),
    });
}
class nO extends r.PureComponent {
    static defaultProps = { isDefaultChannel: !1 };
    renderEditButton() {
        return (0, s.jsx)(nL, { ...this.props });
    }
    renderInviteButton() {
        return (0, s.jsx)(nM, { ...this.props });
    }
    renderRemoveSuggestionButton() {
        return (0, s.jsx)(nU, { ...this.props });
    }
    renderAcceptSuggestionButton() {
        return (0, s.jsx)(nD, { ...this.props });
    }
    getClassName() {
        let { position: e, sortingPosition: t } = this.props;
        return nT(e, t);
    }
    isDisabled() {
        let { channel: e, sorting: t, sortingType: n } = this.props;
        return ny(e, t, n);
    }
}
var nP = n(166444),
    nV = n(790782);
let nw = B(function (e) {
    let {
            guild: t,
            selectedChannelId: i,
            position: l,
            disableManageChannels: a,
            sorting: o,
            sortingType: d,
            sortingPosition: c,
            connectChannelDragSource: h,
            connectChannelDropTarget: m,
            tabIndex: g,
        } = e,
        A = (0, u.bG)([M.A, tE.Ay], () => {
            let e = tE.Ay.getDirectoryChannelIds(t.id);
            return 0 === e.length ? null : M.A.getChannel(e[0]);
        }),
        f = (0, u.bG)([M.A], () => M.A.getChannel(A?.parent_id)),
        p = i === A?.id,
        C = (0, tZ.Ay)(A),
        E = (0, u.bG)([O.A], () =>
            null != f ? O.A.can(w.xBc.MANAGE_CHANNELS, f) : null != t && O.A.can(w.xBc.MANAGE_CHANNELS, t),
        ),
        x = r.useCallback(
            (e) => {
                null != A &&
                    (0, e1.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("926132"),
                            n.e("430997"),
                            n.e("379995"),
                            n.e("729559"),
                        ]).then(n.bind(n, 994058));
                        return (t) => (0, s.jsx)(e, { ...t, channel: A });
                    });
            },
            [A],
        );
    if (null == A) return null;
    let N = nT(l, c),
        _ = ny(A, o, d),
        S = (0, s.jsx)("div", {
            className: eO()(N, { [er.r9]: _, [er.wH]: p }),
            "data-dnd-name": C,
            children: (0, s.jsxs)(nP.Ay, {
                className: er.Ki,
                channel: A,
                guild: t,
                selected: p,
                onContextMenu: x,
                forceInteractable: !0,
                resolvedUnreadSetting: nV.e.ONLY_MENTIONS,
                children: [
                    (0, s.jsx)(nM, { channel: A, tabIndex: g }),
                    (0, s.jsx)(nL, { channel: A, disableManageChannels: a, tabIndex: g }),
                ],
            }),
        });
    return (E && (S = m(h(S))), S);
});
var nH = n(34188),
    nB = n(733391),
    nk = n(832163),
    nF = n(831024),
    nK = n(44724),
    nz = n(849134),
    nW = n(770178),
    nY = n(307076);
let nX = Math.ceil(Math.sqrt(115200)),
    nq = (nX - 240) / 2,
    nZ = r.forwardRef(function (e, t) {
        let { children: n } = e,
            [i, l] = r.useState(-1),
            a = r.useCallback((e) => {
                l(e.contentRect.width);
            }, []),
            o = (0, nW.w)(a, [], { fireOnMount: !0 }),
            [{ shineSpring: d }, c] = (0, eQ.z)(() => ({
                from: { shineSpring: 0 },
                config: { clamp: !0, mass: 1, tension: 170, friction: 38 },
            })),
            u = r.useCallback(
                (e, t) => {
                    c({ shineSpring: 1, delay: t, reset: !0, loop: { reset: !0, delay: 1600 } });
                },
                [c],
            ),
            h = r.useCallback(() => {
                c({ shineSpring: 0, immediate: !0, loop: !1 });
            }, [c]),
            m = r.useMemo(
                () =>
                    n(
                        (0, s.jsx)(eJ.animated.div, {
                            className: nY.q,
                            style: {
                                transform: d.to(
                                    (e) => `translateX(calc(${e * i}px + ${e * nX}px)) translateY(-50%) rotate(45deg)`,
                                ),
                            },
                        }),
                    ),
                [n, i, d],
            );
        return (
            r.useImperativeHandle(t, () => ({ onMouseEnter: u, onMouseLeave: h }), [u, h]),
            (0, s.jsx)("div", {
                className: nY.i,
                onMouseEnter: u,
                onMouseLeave: h,
                onFocus: u,
                onBlur: h,
                ref: o,
                style: { "--custom-shine-dimensions": "240px", "--custom-shine-rotated-dimensions-delta": `${nq}px` },
                children: m,
            })
        );
    });
var n$ = n(371794),
    nJ = n(240248),
    nQ = n(998218),
    n0 = n(672812),
    n1 = n(427797);
let n3 = r.memo(function (e) {
    let { guild: t, selected: i } = e,
        l = r.useRef(null),
        a = r.useRef(null),
        o = (0, S.useHasAnyModalOpen)(),
        d = (0, u.bG)([ec.A], () => ec.A.hasLayers()),
        c = (0, eo.xr)((e) => e.fullScreenLayers.length > 0);
    r.useEffect(() => {
        (0, nB.Kh)(t.id);
    }, [t.id]);
    let m = (0, u.bG)([nk.A], () => nk.A.getAnnouncement(t.id)),
        g = m?.state === "success" ? m.announcement : void 0,
        [A, f] = (0, J.x_)(W.M.GAME_SHOP_NEW_BADGE, t.id, g?.id ?? "", void 0, !0),
        p = A === W.M.GAME_SHOP_NEW_BADGE && null != g,
        C = (0, tH.nY)(t.id),
        E = (0, nF.u)({ surface: "storefront_badge", applicationId: C }),
        x = null;
    (p && (x = el.intl.string(el.t.y2b7CA)), null != E && (x = E.text));
    let [N, _] = (0, J.x_)(W.M.GAME_SHOP_NEW_DROP_POPOVER, t.id, g?.id ?? ""),
        I = N === W.M.GAME_SHOP_NEW_DROP_POPOVER && null != g;
    r.useEffect(() => {
        i && (p && f(en.i.INDIRECT_ACTION), I && _(en.i.INDIRECT_ACTION));
    }, [f, _, i, p, I]);
    let b = r.useCallback(() => {
            (f(en.i.TAKE_ACTION), _(en.i.TAKE_ACTION));
            let e = (0, tH.mq)(t.id),
                n = nk.A.getStorefrontState(e)?.activePage ?? 0;
            (0, ee.pX)(w.BVt.CHANNELS_GAME_SHOP(t.id, n));
        }, [t.id, f, _]),
        G = r.useCallback(() => {
            (0, nK.X)({ guildId: t.id, forceFetch: I });
        }, [t.id, I]),
        j = r.useCallback(() => {
            _(en.i.USER_DISMISS);
        }, [_]),
        v = r.useCallback(
            (e) => {
                null != t &&
                    (0, e1.L3)(e, async () => {
                        let { default: e } = await n.e("899523").then(n.bind(n, 41614));
                        return (n) => (0, s.jsx)(e, { ...n, guild: t });
                    });
            },
            [t],
        ),
        R = r.useCallback(() => {
            l.current?.onMouseEnter(null, 500);
        }, [l]),
        y = r.useCallback(
            (e) =>
                (0, s.jsx)(Q.G, {
                    background: (0, s.jsx)("div", { className: n1.D }),
                    innerClassName: n1.Z,
                    ref: a,
                    id: `game-shop-${t.id}`,
                    renderIcon: (e) =>
                        (0, s.jsx)(nH.U, {
                            size: "custom",
                            color: "currentColor",
                            width: 20,
                            height: 20,
                            className: e,
                        }),
                    text: (0, s.jsx)(e0.E, {
                        variant: "text-md/medium",
                        className: n0.UU,
                        children: el.intl.string(el.t.vyaWs7),
                    }),
                    selected: i,
                    onMouseDown: G,
                    onClick: b,
                    onContextMenu: v,
                    trailing: (0, s.jsxs)(s.Fragment, {
                        children: [
                            null != x && (0, s.jsx)(Z.Lp, { text: x, color: h.A.colors.BACKGROUND_BRAND.css }),
                            e,
                        ],
                    }),
                }),
            [t.id, i, G, b, v, x],
        ),
        T = r.useMemo(() => {
            if (null == g) return null;
            switch (g.type) {
                case "guild-application-announcement": {
                    let e =
                            null != g.assetId
                                ? nQ.A.toURLSafe((0, n$.YE)(g.applicationId, g.assetId, 256, "webp"))
                                : void 0,
                        t =
                            null != g.backgroundImageAssetId
                                ? nQ.A.toURLSafe((0, n$.YE)(g.applicationId, g.backgroundImageAssetId, 256, "webp"))
                                : void 0;
                    if (null == e) return null;
                    return {
                        graphicSource: { type: "sku", imageUrl: e, backgroundImageUrl: t },
                        title: el.intl.string(el.t["7PvvS9"]),
                        body: el.intl.formatToPlainString(el.t["9J4h1a"], { applicationName: g.applicationName }),
                    };
                }
                case "guild-discord-announcement": {
                    let { videoAssetFullyQualifiedURL: e, assetFullyQualifiedURL: t } = g;
                    if ((0, nJ.uJ)(e) && (0, nJ.uJ)(t)) return null;
                    return {
                        graphicSource: (0, nJ.uJ)(e) ? { type: "asset", src: t } : { type: "video", src: e },
                        title: g.popoverTitle,
                        body: g.popoverBody,
                        actionLabel: g.popoverCta,
                    };
                }
                default:
                    return null;
            }
        }, [g]),
        L = r.useCallback(
            () =>
                I && null != T
                    ? (0, s.jsx)(nz.A, {
                          onActionClick: b,
                          onActionMouseDown: G,
                          onRender: R,
                          onRequestClose: j,
                          targetElementRef: a,
                          ...T,
                      })
                    : null,
            [I, T, b, G, R, j],
        );
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(nZ, { ref: l, children: y }), !o && !d && !c && L()] });
});
var n2 = n(740426),
    n9 = n(826673),
    n7 = n(591552),
    n5 = n(202776),
    n6 = n(454058),
    n4 = n(573163);
function n8(e) {
    let { guild: t, selected: i } = e,
        l = (0, n5.A)(t),
        a = (0, n9.HX)(W.M.CHANNEL_BROWSER_NEW_BADGE_NUX),
        o = (0, tS.yK)([n6.A], () =>
            Array.from(n6.A.getNewChannelIds(t.id)).filter((e) => n6.A.shouldIndicateNewChannel(t.id, e)),
        ),
        d = (0, tS.bG)([n4.Ay], () => n4.Ay.hasUnread(t.id, nV.P.GUILD_ONBOARDING_QUESTION)),
        c = o.length > tx.rR,
        u = (0, tS.bG)([n7.A, n4.Ay], () => {
            let e = n7.A.lastFetchedAt(t.id),
                n = n4.Ay.lastMessageId(t.id, nV.P.GUILD_ONBOARDING_QUESTION);
            if (null == n) return !1;
            let i = tc.default.extractTimestamp(n);
            return null != e && e > i;
        }),
        m = r.useCallback(() => {
            (0, ee.pX)(w.BVt.CHANNEL(t.id, l ? et.VV.CUSTOMIZE_COMMUNITY : et.VV.CHANNEL_BROWSER));
        }, [t.id, l]),
        g = r.useCallback(
            (e) => {
                (0, e1.L3)(e, async () => {
                    let { default: e } = await Promise.all([n.e("113446"), n.e("317699"), n.e("830412")]).then(
                        n.bind(n, 807431),
                    );
                    return (n) => (0, s.jsx)(e, { ...n, guild: t });
                });
            },
            [t],
        ),
        A = null;
    return (
        (a && !d && !c) ||
            i ||
            u ||
            (A = (0, s.jsx)(Z.Lp, { color: h.A.colors.BADGE_BACKGROUND_BRAND.css, text: el.intl.string(el.t.y2b7CA) })),
        (0, s.jsx)(Q.G, {
            id: `channels-${t.id}`,
            renderIcon: (e) => (0, s.jsx)(n2.k, { size: "md", color: "currentColor", className: e }),
            text: l ? el.intl.string(el.t.h9mGOP) : el.intl.string(el.t.et6wav),
            selected: i,
            onClick: m,
            onContextMenu: g,
            trailing: A,
        })
    );
}
var ie = n(855473);
function it(e) {
    let { guild: t, selected: n } = e;
    return (0, s.jsx)(Q.G, {
        id: `home-tab-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(ie.Z, { size: "md", color: "currentColor", className: e }),
        text: el.intl.string(el.t.VbpLyU),
        selected: n,
        onClick: function () {
            (0, ee.pX)(w.BVt.CHANNEL(t.id, et.VV.GUILD_HOME));
        },
    });
}
var ii = n(297264),
    il = n(5373),
    is = n(65995),
    ir = n(195702);
function ia(e, t) {
    return (0, s.jsx)(e0.E, { variant: "text-xs/bold", color: "text-default", children: e }, t);
}
let io = r.memo(function (e) {
    let { guild: t } = e,
        n = (0, u.bG)([ty.h], () => ty.h.getNewMemberActions(t.id), [t.id]),
        i = (0, u.bG)([is.A], () => is.A.getCompletedActions(t.id)),
        l = r.useMemo(() => {
            if (null == n || null == i) return 0;
            let e = 0;
            return (
                n.forEach((t) => {
                    null != i[t.channelId] && e++;
                }),
                e
            );
        }, [i, n]),
        a = null == n ? 0 : n.length,
        o = (0, d.rm)(`progress-bar-${t.id}`);
    return (0, s.jsxs)("li", {
        children: [
            (0, s.jsxs)(X.D, {
                ...o,
                role: "button",
                focusProps: { offset: { right: 4 } },
                className: ir.G9,
                onClick: function () {
                    (0, ee.pX)(w.BVt.CHANNEL(t.id, et.VV.GUILD_HOME));
                },
                children: [
                    (0, s.jsxs)("div", {
                        className: ir.A1,
                        children: [
                            (0, s.jsx)(ii.D, { variant: "heading-sm/bold", children: el.intl.string(el.t.SnrR3x) }),
                            (0, s.jsxs)("div", {
                                className: ir.Ib,
                                children: [
                                    (0, s.jsx)(e0.E, {
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        className: ir.Cv,
                                        children: el.intl.format(el.t.eqZ1lW, {
                                            numberHook: ia,
                                            total: a.toString(),
                                            completed: l.toString(),
                                        }),
                                    }),
                                    (0, s.jsx)(e6.A, {
                                        className: ir.UE,
                                        width: 16,
                                        height: 16,
                                        direction: e6.A.Directions.RIGHT,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, s.jsx)(il.i, {
                        className: ir.hr,
                        foregroundGradientColor: [
                            h.A.unsafe_rawColors.GREEN_300.css,
                            h.A.unsafe_rawColors.GREEN_230.css,
                        ],
                        percent: (l / a) * 100 + 3,
                        animate: !0,
                    }),
                ],
            }),
            (0, s.jsx)("div", { role: "separator", className: ir.yF }),
        ],
    });
});
var id = n(581925);
function ic(e) {
    let { guild: t, selected: n } = e;
    return (0, s.jsx)(Q.G, {
        id: `official-messages-page-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(id.L, { size: "md", color: "currentColor", className: e }),
        text: el.intl.string(el.t.xHEzFh),
        selected: n,
        onClick: function () {
            (0, ee.pX)(w.BVt.CHANNEL(t.id, et.VV.GUILD_OFFICIAL_MESSAGES));
        },
    });
}
var iu = n(590251),
    ih = n(413125),
    im = n(600623),
    ig = n(411392);
let iA = r.memo(function (e) {
    let { guild: t } = e,
        i = (0, u.bG)([tE.Ay], () => tE.Ay.getDefaultChannel(t.id), [t.id]),
        { steps: l } = (0, ih.c)(i, t),
        a = l.length,
        o = l.filter((e) => e.completed).length,
        c = l.find((e) => !e.completed),
        m = (0, d.rm)(`setup-progress-${t.id}`),
        g = a > 0 && null == c;
    return (r.useEffect(() => {
        g && (0, im.vy)(t.id);
    }, [t.id, g]),
    null == c)
        ? null
        : (0, s.jsxs)("li", {
              children: [
                  (0, s.jsxs)(X.D, {
                      ...m,
                      role: "button",
                      className: ig.nM,
                      onClick: function () {
                          var e;
                          ((e = t.id),
                              (0, S.openModalLazy)(async () => {
                                  let { default: t } = await Promise.all([
                                      n.e("883221"),
                                      n.e("457866"),
                                      n.e("270591"),
                                      n.e("149360"),
                                  ]).then(n.bind(n, 49843));
                                  return (n) => (0, s.jsx)(t, { guildId: e, ...n });
                              }));
                      },
                      children: [
                          (0, s.jsxs)("div", {
                              className: ig.Ap,
                              children: [
                                  (0, s.jsx)(iu.a, {
                                      percent: 100,
                                      colorOverride: h.A.colors.BACKGROUND_MOD_STRONG.css,
                                      ringColorOverrideClassName: ig.Tu,
                                      background: ig.Tu,
                                  }),
                                  (0, s.jsx)(iu.a, {
                                      className: ig.qB,
                                      percent: (o / a) * 100,
                                      colorOverride: h.A.colors.STATUS_POSITIVE.css,
                                      ringColorOverrideClassName: ig.Tu,
                                      background: ig.Tu,
                                  }),
                              ],
                          }),
                          (0, s.jsxs)("div", {
                              className: ig.FS,
                              children: [
                                  (0, s.jsx)(ii.D, {
                                      variant: "heading-sm/bold",
                                      children: el.intl.string(el.t.o3HK3d),
                                  }),
                                  (0, s.jsx)(e0.E, {
                                      variant: "text-xs/medium",
                                      color: "text-muted",
                                      className: ig.VA,
                                      children: el.intl.formatToPlainString(el.t.zhHW5c, {
                                          currStep: o + 1,
                                          total: a,
                                          step: c.title,
                                      }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, s.jsx)("div", { role: "separator", className: ig.yF }),
              ],
          });
});
var ip = n(514179);
function iC(e) {
    let { guild: t, selected: i } = e;
    return (0, s.jsx)(Q.G, {
        id: `subscriptions-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(ip.A, { className: e }),
        text: el.intl.string(el.t["KzCF/6"]),
        selected: i,
        onClick: function () {
            (0, ee.pX)(w.BVt.CHANNEL(t.id, et.VV.ROLE_SUBSCRIPTIONS));
        },
        onContextMenu: function (e) {
            null != t &&
                (0, e1.L3)(e, async () => {
                    let { default: e } = await n.e("571911").then(n.bind(n, 978554));
                    return (n) => (0, s.jsx)(e, { ...n, guild: t });
                });
        },
    });
}
var iE = n(506774),
    ix = n(95561),
    iN = n(289397),
    i_ = n(486418),
    iS = n(575926),
    iI = n(440293),
    ib = n(174459),
    iG = n(634654),
    ij = n(888918);
function iv(e) {
    let { guildId: t, selected: n, handleClick: i } = e,
        l = (0, iI.w)(t),
        r = (0, tS.bG)([D.A], () => D.A.getGuild(t)),
        a = r?.features.has(w.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) === !0,
        o = "false" === iE.w.get(iG.bJ, "false"),
        d = (0, tS.bG)([k.Ay], () => k.Ay.useReducedMotion);
    return (0, s.jsx)(Q.G, {
        id: `shop-${t}`,
        className: eO()(ij.A2, { [ij.wH]: n, [ij.ST]: o }),
        innerClassName: ij.LE,
        renderIcon: (e) => (0, s.jsx)(iS.h, { width: 20, height: 20, className: eO()([e, ij.sV]) }),
        text: el.intl.string(el.t.al5EXL),
        selected: n,
        onClick: i,
        trailing: (0, s.jsxs)("div", {
            className: ij.ai,
            children: [
                d
                    ? (0, s.jsx)(Z.Lp, {
                          color: h.A.unsafe_rawColors.BRAND_260.css,
                          text: el.intl.string(el.t.y2b7CA),
                          className: ij.Ad,
                      })
                    : (0, s.jsx)("img", {
                          src: (0, iN.n)("server_products/storefront/money.gif"),
                          className: ij.TG,
                          alt: "",
                      }),
                n &&
                    (0, s.jsx)(X.D, {
                        className: ij.b,
                        onClick: function (e) {
                            (e.stopPropagation(),
                                (0, n9.Dr)(W.M.SERVER_SHOP_PHANTOM_PREVIEW),
                                ib.default.track(w.HAw.GUILD_SHOP_PREVIEW_CLICK, {
                                    ...(0, ix.H$)(t),
                                    action_taken: iG.hN.DISMISS_CHANNEL_ROW,
                                }),
                                (l && a) || (0, ee.bG)(w.BVt.CHANNEL(t, tE.Ay.getDefaultChannel(t)?.id)));
                        },
                        "aria-label": el.intl.string(el.t.cpT0Cq),
                        children: (0, s.jsx)(tY.a, { size: "xs", color: "currentColor" }),
                    }),
            ],
        }),
    });
}
function iR(e) {
    let { guild: t, selected: i } = e;
    function l() {
        (iE.w.set(iG.bJ, "true"), (0, ee.pX)(w.BVt.CHANNEL(t.id, et.VV.GUILD_SHOP)));
    }
    return (0, i_.P)(t)
        ? (0, s.jsx)(iv, { guildId: t.id, selected: i, handleClick: l })
        : (0, s.jsx)(Q.G, {
              id: `shop-${t.id}`,
              renderIcon: (e) => (0, s.jsx)(iS.h, { width: 20, height: 20, className: e }),
              text: el.intl.string(el.t.al5EXL),
              selected: i,
              onClick: l,
              onContextMenu: function (e) {
                  null != t &&
                      (0, e1.L3)(e, async () => {
                          let { default: e } = await n.e("852565").then(n.bind(n, 345332));
                          return (n) => (0, s.jsx)(e, { ...n, guild: t });
                      });
              },
          });
}
var iy = n(308528),
    iT = n(534890),
    iL = n(262763),
    iM = n(499211),
    iU = n(406704),
    iD = n(747926),
    iO = n(977997),
    iP = n(807632),
    iV = n(37411);
function iw(e) {
    let { thread: t, tabIndex: n } = e,
        i = (0, iP.YG)(t),
        l = (0, iP.IO)(t),
        r = (0, iU._M)(t);
    return i && l && r ? (0, s.jsx)(iH, { thread: t, tabIndex: n }) : null;
}
function iH(e) {
    let { thread: t, tabIndex: n } = e,
        i = (0, u.bG)([iO.A], () => iO.A.isInChannel(t.id), [t.id]),
        { needSubscriptionToAccess: l } = (0, iM.A)(t.id),
        a = r.useCallback(() => {
            iL.A.handleVoiceConnect({ channel: t, connected: i, needSubscriptionToAccess: l, locked: !1 });
        }, [t, i, l]),
        o = r.useCallback(() => {
            (0, iD.JA)(t, !0, iV.H9.CHANNEL_LIST);
        }, [t]);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(Y.m, {
                asContainer: !0,
                text: el.intl.string(el.t["96ANUN"]),
                children: (0, s.jsx)(X.D, {
                    className: er.Xs,
                    onClick: a,
                    tabIndex: n,
                    "aria-label": el.intl.string(el.t["96ANUN"]),
                    children: (0, s.jsx)(tX.H, { size: "xs", color: "currentColor", className: er.gE }),
                }),
            }),
            (0, s.jsx)(Y.m, {
                asContainer: !0,
                text: el.intl.string(el.t.ZXxLQg),
                children: (0, s.jsx)(X.D, {
                    className: er.Xs,
                    onClick: o,
                    tabIndex: n,
                    "aria-label": el.intl.string(el.t.ZXxLQg),
                    children: (0, s.jsx)(iT.ChatIcon, { size: "xs", color: "currentColor", className: er.gE }),
                }),
            }),
        ],
    });
}
var iB = n(897898),
    ik = n(152007);
function iF(e) {
    return null != e && e > 0;
}
var iK = n(405018),
    iz = n(428689),
    iW = n(525093);
function iY(e) {
    let { total: t, users: n, videoLimit: i } = e;
    return (0, s.jsxs)("div", {
        className: iW.iE,
        children: [
            (0, s.jsxs)(e0.E, {
                tag: "span",
                color: "text-subtle",
                variant: "text-xs/medium",
                className: eO()(iW.VV, { [iW.Ki]: i, [iW.$G]: n >= 100 }),
                children: [
                    i ? (0, s.jsx)(iz.VideoIcon, { size: "md", color: "currentColor", className: iW.LB }) : null,
                    n.toString().padStart(2, "0"),
                ],
            }),
            (0, s.jsx)(e0.E, {
                tag: "span",
                color: "text-subtle",
                variant: "text-xs/medium",
                className: eO()(iW.X5, { [iW.$G]: t >= 100 }),
                children: t.toString().padStart(2, "0"),
            }),
        ],
    });
}
function iX(e) {
    let { channel: t, video: n, userCount: i } = e,
        { limit: l } = (0, iK.A)(t),
        r = -1,
        a = !1;
    return (
        t.userLimit > 0 && (r = t.userLimit),
        n && l > 0 && ((a = r < 0 || l < r), (r = r > 0 ? Math.min(r, l) : l)),
        (0, s.jsx)(iY, { users: i, total: r, videoLimit: a })
    );
}
var iq = n(588224),
    iZ = n(447199);
function i$(e) {
    let { thread: t, countInVoice: n, hasVideo: i, mentionCount: l, isMentionLowImportance: r } = e,
        a = n > 0 && t.userLimit > 0,
        o = iF(l);
    return a || o
        ? (0, s.jsxs)("div", {
              className: er.yW,
              children: [
                  a ? (0, s.jsx)(iX, { userCount: n, video: i, channel: t }) : null,
                  o ? (0, s.jsx)(nC.A, { mentionsCount: l, isMentionLowImportance: r }) : null,
              ],
          })
        : null;
}
function iJ(e) {
    let { style: t, withGuildIcon: n, inverted: i } = e,
        l = { className: eO()(iZ.GI, { [iZ.a7]: n }, { [iZ.BJ]: i }), style: t },
        { density: r } = (0, C.wR)();
    switch (r) {
        case "cozy":
            return (0, s.jsxs)("svg", {
                ...l,
                width: "10",
                height: "20",
                viewBox: "0 0 10 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    (0, s.jsx)("path", {
                        d: "M0 15H2c0 1.6569 1.3432 3 3 3v2c-2.7614 0-5-2.2386-5-7ZM0 4H2V15H0V4ZM2 4H0C0 3.4477.4477 3 1 3c.5523 0 1 .4477 1 1Z",
                        fill: "currentColor",
                    }),
                    (0, s.jsx)("path", {
                        d: "M6 20V18H9v2H6Zm3 0V18s1 0 1 1-1 1-.989 1.004ZM6 18v2H5V18H6Z",
                        fill: "currentColor",
                    }),
                ],
            });
        case "compact":
            return (0, s.jsxs)("svg", {
                ...l,
                width: "10",
                height: "19",
                viewBox: "0 0 10 19",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    (0, s.jsx)("path", {
                        d: "M0 11H2c0 1.6569 1.3432 3 3 3v2c-2.7614 0-5-2.2386-5-7ZM0 0H2V11H0V0ZM2 0H0C0-.5523.4477-1 1-1c.5523 0 1 .4477 1 1Z",
                        fill: "currentColor",
                    }),
                    (0, s.jsx)("path", {
                        d: "M6 16V14H9v2H6Zm3 0V14s1 0 1 1-1 1-.989 1.004ZM6 14v2H5V14H6Z",
                        fill: "currentColor",
                    }),
                ],
            });
        default:
            return (0, s.jsxs)("svg", {
                ...l,
                width: "10",
                height: "19",
                viewBox: "0 0 10 19",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    (0, s.jsx)("path", {
                        d: "M0 13H2c0 1.6569 1.3432 3 3 3v2c-2.7614 0-5-2.2386-5-7ZM0 2H2V13H0V2ZM2 2H0C0 1.4477.4477 1 1 1c.5523 0 1 .4477 1 1Z",
                        fill: "currentColor",
                    }),
                    (0, s.jsx)("path", {
                        d: "M6 18V16H9v2H6Zm3 0V16s1 0 1 1-1 1-.989 1.004ZM6 16v2H5V16H6Z",
                        fill: "currentColor",
                    }),
                ],
            });
    }
}
let iQ = r.memo(function (e) {
        let { thread: t, isSelectedChannel: i, isSelectedVoice: l, isLast: a, withGuildIcon: o } = e,
            c = (0, u.bG)([ta.Ay], () => ta.Ay.getVoiceStatesForChannel(t), [t]),
            h = (0, u.bG)([iO.A], () => iO.A.hasVideo(t.id)),
            m = (0, tZ.Ay)(t),
            {
                unread: g,
                mentionCount: A,
                isMentionLowImportance: f,
            } = (0, u.cf)([n4.Ay], () => ({
                unread: n4.Ay.hasUnread(t.id),
                mentionCount: n4.Ay.getMentionCount(t.id),
                isMentionLowImportance: n4.Ay.getIsMentionLowImportance(t.id),
            })),
            p = (0, u.bG)([ik.A], () => ik.A.isMuted(t.id)),
            C = r.useCallback(
                (e) => {
                    (0, iD.JA)(t, !e.shiftKey, iV.H9.CHANNEL_LIST);
                },
                [t],
            ),
            E = r.useCallback(() => {
                iy.A.preload(t.guild_id, t.id);
            }, [t.guild_id, t.id]),
            x = r.useCallback(
                (e) => {
                    (0, iB.A)(e, t);
                },
                [t],
            ),
            N = r.useCallback(
                (e) => {
                    let i = M.A.getChannel(t.id);
                    null != i &&
                        (0, e1.L3)(e, async () => {
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
                                n.e("65200"),
                                n.e("285802"),
                                n.e("703869"),
                                n.e("51212"),
                                n.e("584615"),
                            ]).then(n.bind(n, 612826));
                            return (t) => (0, s.jsx)(e, { ...t, channel: i });
                        });
                },
                [t.id],
            ),
            _ = null == c ? 0 : c.length,
            { role: S, ...I } = (0, d.rm)(t.id),
            b = r.useRef(null),
            G =
                A > 0
                    ? el.intl.formatToPlainString(el.t["ZL7+I6"], { channelName: m, mentionCount: A })
                    : g
                      ? el.intl.formatToPlainString(el.t.YlVvmc, { channelName: m })
                      : el.intl.formatToPlainString(el.t["0nZpiF"], { channelName: m });
        return (0, s.jsxs)("li", {
            role: S,
            className: eO()(er.fx, { [er.wH]: i }),
            children: [
                (0, s.jsx)(iJ, { withGuildIcon: o }),
                a
                    ? null
                    : (0, s.jsx)(iJ, {
                          withGuildIcon: o,
                          inverted: !0,
                          style: { transform: "rotateX(180deg) translateY(-9px)" },
                      }),
                (0, s.jsx)(tz.vN, {
                    focusTarget: b,
                    ringTarget: b,
                    offset: { top: 2, bottom: 2, right: 4 },
                    children: (0, s.jsxs)("div", {
                        className: eO()(er.Ki, n0.iE, n0.ZS, {
                            [n0.J1]: i,
                            [n0.F4]: !i && p,
                            [n0.V2]: !p && !i && g,
                            [n0.lY]: o,
                        }),
                        onMouseDown: E,
                        onContextMenu: N,
                        children: [
                            !g || p || i ? null : (0, s.jsx)("div", { className: eO()(n0.gy, n0.WS) }),
                            (0, s.jsx)(X.D, {
                                ...I,
                                innerRef: b,
                                className: n0.nf,
                                onClick: C,
                                onAuxClick: x,
                                "aria-label": G,
                                focusProps: { enabled: !1 },
                                children: (0, s.jsxs)("div", {
                                    className: eO()(n0.Y5, n0.__invalid_threadMainContent),
                                    children: [
                                        (0, s.jsx)(e0.E, {
                                            variant: "text-sm/medium",
                                            color: "none",
                                            className: n0.UU,
                                            children: (0, s.jsx)(tk.A, { "aria-hidden": !0, children: m }),
                                        }),
                                        (0, s.jsxs)("div", {
                                            className: n0.Y_,
                                            onClick: nP.dG,
                                            onKeyDown: nP.dG,
                                            children: [
                                                (0, s.jsx)(i$, {
                                                    thread: t,
                                                    countInVoice: _,
                                                    hasVideo: h,
                                                    mentionCount: A,
                                                    isMentionLowImportance: f,
                                                }),
                                                (0, s.jsx)(iw, { thread: t, tabIndex: I.tabIndex }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                }),
                (0, s.jsx)(iq.A, {
                    channel: t,
                    collapsed: !l && 1 !== c.length,
                    collapsedMax: 6,
                    voiceStates: c,
                    isThread: !0,
                }),
            ],
        });
    }),
    i0 = r.memo(function (e) {
        let { channel: t, selectedChannel: n, selectedVoiceChannelId: i, sortedThreadIds: l, withGuildIcon: r } = e,
            a = (0, tZ.Ay)(t),
            { density: o } = (0, C.wR)(),
            d = (0, u.yK)([M.A], () => l.map((e) => M.A.getChannel(e)).filter(to.Vq), [l]),
            c = (0, u.bG)([ta.Ay], () => {
                let e = d[d.length - 1];
                if (null == e) return 0;
                let t = ta.Ay.getVoiceStates(e.guild_id)[e.id];
                return null == t || 0 === t.length ? 0 : i !== e.id ? 40 : 32 * t.length + 8;
            });
        return (0, s.jsx)("li", {
            className: iZ.kL,
            children: (0, s.jsxs)("ul", {
                role: "group",
                "aria-label": el.intl.formatToPlainString(el.t.EiyIi6, { channelName: a }),
                children: [
                    (0, s.jsx)("div", {
                        className: eO()(iZ.eh, { [iZ.ET]: r }),
                        style: { bottom: ("cozy" === o ? 28 : 24) + c },
                    }),
                    d.map((e, t) =>
                        (0, s.jsx)(
                            iQ,
                            {
                                thread: e,
                                isSelectedChannel: n?.id === e.id,
                                isSelectedVoice: i === e.id,
                                isLast: t === d.length - 1,
                                withGuildIcon: r,
                            },
                            e.id,
                        ),
                    ),
                ],
            }),
        });
    });
var i1 = n(922016),
    i3 = n(367513),
    i2 = n(296216),
    i9 = n(963027),
    i7 = n(202384),
    i5 = n(51758),
    i6 = n(139033),
    i4 = n(305866),
    i8 = n(123292),
    le = n(830215),
    lt = n(315982),
    ln = n(480900),
    li = n(557722),
    ll = n(834942),
    ls = n(287809),
    lr = n(53516),
    la = n(648580),
    lo = (((i = {})[(i.VOICE = 0)] = "VOICE"), i);
let ld = function (e) {
    let { type: t, guildId: i, closePopout: l } = e,
        r = (0, z.GV)(),
        a = (0, u.bG)([ll.A], () => ll.A.getCheck(i), [i]),
        {
            notClaimed: o,
            notEmailVerified: d,
            notPhoneVerified: c,
            missingVerificationRole: h,
            verificationRole: m,
        } = a,
        {
            header: g,
            body: A,
            buttonText: f,
        } = (function (e, t) {
            if (0 !== e) return { header: null, body: null, buttonText: null };
            {
                let e = el.intl.string(el.t["6zY8BI"]),
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
                    ? { header: e, body: el.intl.string(el.t.IRxUlG), buttonText: el.intl.string(el.t.fiNVin) }
                    : i
                      ? { header: e, body: el.intl.string(el.t.vW8iUF), buttonText: el.intl.string(el.t["50gfOv"]) }
                      : l
                        ? { header: e, body: el.intl.string(el.t.vdSOpz), buttonText: el.intl.string(el.t.lm1UKt) }
                        : s
                          ? {
                                header: e,
                                body: el.intl.formatToPlainString(el.t.v1ktYb, { min: w.$8o.MEMBER_AGE }),
                                buttonText: el.intl.string(el.t.BddRzS),
                            }
                          : r
                            ? {
                                  header: e,
                                  body: el.intl.formatToPlainString(el.t.sncw41, { min: w.$8o.ACCOUNT_AGE }),
                                  buttonText: el.intl.string(el.t.BddRzS),
                              }
                            : a && null != o && null === o.tags.guild_connections
                              ? {
                                    header: e,
                                    body: el.intl.format(el.t.MZbCuG, { roleName: `@${o.name}` }),
                                    buttonText: el.intl.string(el.t["6Ge2LG"]),
                                }
                              : { header: e, body: null, buttonText: null };
            }
        })(t, a);
    return null == g || null == A
        ? null
        : (0, s.jsxs)(i4.l, {
              className: la.kL,
              "aria-labelledby": r,
              children: [
                  (0, s.jsx)("img", { alt: "", className: la.Sl, src: n(303528) }),
                  (0, s.jsxs)("div", {
                      className: la.Qs,
                      children: [
                          (0, s.jsx)(ii.D, { variant: "heading-md/semibold", id: r, children: g }),
                          (0, s.jsx)(e0.E, { color: "text-default", variant: "text-sm/normal", children: A }),
                          (0, s.jsxs)("div", {
                              className: la.UD,
                              children: [
                                  null != f
                                      ? (0, s.jsx)("div", {
                                            "data-button-hoisted-classname-wrapper": !0,
                                            className: la.FS,
                                            children: (0, s.jsx)(tF.$, {
                                                variant: "primary",
                                                text: f,
                                                onClick: function () {
                                                    (o
                                                        ? lt.R()
                                                        : c
                                                          ? (0, S.openModalLazy)(
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
                                                                        (0, s.jsx)(e, {
                                                                            reason: li.d.GUILD_PHONE_REQUIRED,
                                                                            ...t,
                                                                        });
                                                                },
                                                                { modalKey: lr.V },
                                                            )
                                                          : d
                                                            ? (le.A.verifyResend(),
                                                              (0, i6.A)({
                                                                  title: el.intl.string(el.t.LykQYk),
                                                                  subtitle: el.intl.format(el.t.azKEPy, {
                                                                      email: ls.default.getCurrentUser()?.email,
                                                                  }),
                                                              }))
                                                            : h && null != m && (0, ln.b)(m, i),
                                                        l());
                                                },
                                            }),
                                        })
                                      : null,
                                  o || c || d
                                      ? (0, s.jsx)(i8.Q, {
                                            onClick: l,
                                            text: el.intl.string(el.t.oEAioF),
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
var lc = n(824865),
    lu = n(378570),
    lh = n(747376),
    lm = n(113783),
    lg = n(96566),
    lA = n(280450),
    lf = n(312006),
    lp = n(505543),
    lC = n(994500),
    lE = n(685399),
    lx = n(475889),
    lN = n(693879),
    l_ = n(435470),
    lS = n(35275),
    lI = n(300596);
function lb(e) {
    let { locked: t } = e;
    return (0, s.jsx)("div", {
        className: eO()(er.Xs, lI.U),
        children: (0, s.jsx)(lS.A, {
            className: er.gE,
            color: t ? h.A.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css : void 0,
        }),
    });
}
var lG = n(863005),
    lj = n(669715),
    lv = n(769015),
    lR = n(217223);
function ly(e) {
    let { className: t, embeddedApps: n, muted: i } = e;
    if (n.length <= 0) return null;
    {
        if (1 === n.length)
            return (0, s.jsx)("div", {
                className: eO()(lR.kL, t, i && lR.F4),
                children: (0, s.jsx)(lv.A, { game: n[0].application, className: lR.wK }),
            });
        let e = n.length - 1;
        return (0, s.jsxs)("div", {
            className: eO()(lR.kL, t, i && lR.F4),
            children: [
                (0, s.jsx)(lv.A, { game: n[0].application, className: lR.wK }),
                2 === n.length
                    ? (0, s.jsx)(lv.A, { game: n[1].application, className: lR.wK })
                    : (0, s.jsx)(e0.E, {
                          className: lR.ju,
                          variant: "text-xs/bold",
                          color: "interactive-text-active",
                          children: `+${e}`,
                      }),
            ],
        });
    }
}
var lT = n(905695);
function lL(e) {
    let {
            channel: t,
            isChannelSelected: n,
            isChannelCollapsed: i,
            voiceStates: l,
            enableConnectedUserLimit: r,
            enableActivities: a,
            isSubscriptionGated: o,
            needSubscriptionToAccess: d,
            isNewChannel: c,
            muted: m,
            resolvedUnreadSetting: g,
        } = e,
        A = (0, u.bG)([n4.Ay], () => n4.Ay.getMentionCount(t.id)),
        f = (0, u.bG)([n4.Ay], () => n4.Ay.getIsMentionLowImportance(t.id)),
        p = (0, lE.Ay)(t),
        C = (0, u.bG)([O.A], () => !O.A.can(w.xBc.CONNECT, t)),
        E = (0, lx.H)(t),
        x = (0, u.bG)([iO.A], () => iO.A.hasVideo(t.id)),
        N = (0, lg.qT)(t.id) && t.isGuildStageVoice(),
        _ = (function (e) {
            let { channel: t, locked: n, video: i, selected: l } = e;
            return (
                (function (e) {
                    let { channel: t, video: n, considerMaxStageVoiceUserLimit: i = !0 } = e,
                        { limit: l } = (0, iK.A)(t),
                        s = -1;
                    return (t.userLimit > 0 && (s = t.userLimit),
                    n && l > 0 && (s = s > 0 ? Math.min(s, l) : l),
                    i && s === w.RCc)
                        ? 0
                        : s;
                })({ channel: t, video: i }) > 0 &&
                !n &&
                !l
            );
        })({ channel: t, locked: C, video: (x || N) && null == E, selected: n }),
        S = (0, u.bG)([lG.A], () => lG.A.getNewThreadCount(t.guild_id, t.id)),
        I = (0, l_.ed)(t.guild_id, t.id),
        b = (0, u.bG)([D.A], () => D.A.getGuild(t.guild_id)?.features.has(w.GuildFeatures.COMMUNITY) ?? !1);
    if (iF(A)) return (0, s.jsx)(nC.A, { mentionsCount: A, isMentionLowImportance: f });
    if (o) return (0, s.jsx)(lb, { locked: d });
    if (c) return (0, s.jsx)(Z.Lp, { text: el.intl.string(el.t.y2b7CA), color: h.A.colors.BADGE_BACKGROUND_BRAND.css });
    if (!m && g === nV.e.ALL_MESSAGES && t.isForumLikeChannel() && null != S && S > 0)
        return (0, s.jsx)(e0.E, {
            variant: "text-xs/semibold",
            color: "text-brand",
            className: lT.O,
            children: el.intl.format(el.t.GkAbqY, { count: (0, Z.Gu)(S) }),
        });
    if (!m && t.isForumLikeChannel() && null != I && I > 0)
        return (0, s.jsx)(e0.E, { variant: "text-xs/semibold", color: "text-muted", children: (0, Z.Gu)(I) });
    let G = l?.length ?? 0;
    return null != r && r && _
        ? (0, s.jsx)(iX, { userCount: G, video: x || N, channel: t })
        : i && (0, lj.t)(l) && b
          ? (0, s.jsx)(Z.Lp, { text: el.intl.string(el.t.dI3q4h), color: h.A.unsafe_rawColors.RED_400.css })
          : null != E
            ? (0, s.jsx)(lN.z, { textColor: "text-feedback-positive", entry: { start: E } })
            : null != a && a && p.length > 0
              ? (0, s.jsx)(ly, { embeddedApps: p, muted: m })
              : null;
}
var lM = n(714619);
class lU extends nO {
    channelItemRef = r.createRef();
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
        return (0, nd.Pd)(e, iO.A, D.A);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        if (n) return er.ZS;
        if (null != t)
            if (e > t) return er.mU;
            else return er.TR;
        return er.fx;
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
        (null != r && (0, i5.V)(r) && (0, i7.Ze)(r),
            i && this.setState({ shouldShowGuildVerificationPopout: !0 }),
            t ||
                n ||
                e.isRoleSubscriptionTemplatePreviewChannel() ||
                (s ? i3.A.updateChatOpen(e.id, !0) : (0, lh.av)(e)),
            __OVERLAY__ || (0, lu.iN)(e.id, l ? { source: lc.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0));
    };
    handleClickChat = () => {
        let { channel: e, locked: t, isSuggestedSection: n } = this.props;
        __OVERLAY__ || t || (0, lu.iN)(e.id, n ? { source: lc.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            i = D.A.getGuild(t.getGuildId());
        null != i &&
            (0, e1.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("926132"),
                    n.e("146652"),
                    n.e("893190"),
                    n.e("393336"),
                    n.e("391763"),
                    n.e("955557"),
                    n.e("947502"),
                    n.e("603998"),
                    n.e("550033"),
                    n.e("343266"),
                    n.e("965789"),
                    n.e("309004"),
                    n.e("198415"),
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
                    n.e("426792"),
                    n.e("248804"),
                    n.e("318663"),
                    n.e("599990"),
                    n.e("599854"),
                ]).then(n.bind(n, 119357));
                return (n) => (0, s.jsx)(e, { ...n, channel: t, guild: i });
            });
    };
    renderVoiceUsers() {
        let { channel: e, collapsed: t, tabIndex: n, speakerVoiceStates: i, numAudience: l } = this.props;
        return (0, s.jsx)(iq.A, { channel: e, voiceStates: i, collapsed: t, tabIndex: n, numAudience: l });
    }
    renderPopout = () => {
        let { channel: e } = this.props,
            { shouldShowGuildVerificationPopout: t } = this.state;
        if (t)
            return (0, s.jsx)(ld, {
                type: lo.VOICE,
                guildId: e.guild_id,
                closePopout: this.closeGuildVerificationPopout,
            });
        throw Error("VoiceChannel.renderPopout: There must always be something to render");
    };
    renderOpenChatButton = () => {
        let { channel: e, locked: t, forceShowButtons: n } = this.props;
        if (!t)
            return (0, s.jsx)(Y.m, {
                asContainer: !0,
                text: el.intl.string(el.t.ZXxLQg),
                children: (0, s.jsx)(X.D, {
                    className: eO()(er.Xs, n ? er.Tf : null),
                    onClick: () => {
                        (i3.A.updateChatOpen(e.id, !0), this.handleClickChat());
                    },
                    "aria-label": el.intl.string(el.t.ZXxLQg),
                    children: (0, s.jsx)(iT.ChatIcon, { size: "xs", color: "currentColor", className: er.gE }),
                }),
            });
    };
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e ? null : (0, s.jsx)("div", { className: er.yW, children: e });
    }
    getTooltipText = () => {
        let { connected: e } = this.props;
        return this.isFull() && !e ? el.intl.string(el.t.rZfiNq) : null;
    };
    renderSubtitle = () => {
        let e = this.props.stageInstance?.topic;
        return null == e ? null : (0, s.jsx)(tk.A, { children: e });
    };
    render() {
        let {
                channel: e,
                selected: t,
                connected: n,
                locked: i,
                connectChannelDropTarget: l,
                connectChannelDragSource: r,
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
            E = (0, s.jsxs)("li", {
                className: eO()(this.getModeClass(), { [er.r9]: this.isDisabled() }),
                "data-dnd-name": (0, tZ.m1)(e, ls.default, lC.A),
                children: [
                    (0, s.jsx)(i1.Y, {
                        targetElementRef: this.channelItemRef,
                        position: "right",
                        renderPopout: this.renderPopout,
                        spacing: 17,
                        onRequestClose: this.closeGuildVerificationPopout,
                        shouldShow: C,
                        children: () =>
                            (0, s.jsx)(Y.m, {
                                text: this.getTooltipText(),
                                children: (0, s.jsxs)(nP.Ay, {
                                    ref: this.channelItemRef,
                                    className: er.Ki,
                                    iconClassName: eO()({ [lM.G]: null != u }),
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
                                    subtitle: this.renderSubtitle(),
                                    isFavoriteSuggestion: p,
                                    "aria-label": (0, i9.Ay)({
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
        return (c && (E = a(E)), d && (E = l(r(E))), E);
    }
}
let lD = B((0, i2.F)(lU));
function lO(e) {
    var t;
    let n,
        i,
        { guild: l, channel: r, disableSorting: a, isFavoriteCategory: o, collapsed: d, voiceStates: c } = e,
        h = (0, u.cf)([n4.Ay], () => ({ unread: n4.Ay.hasUnread(r.id), mentionCount: n4.Ay.getMentionCount(r.id) })),
        m = (0, u.bG)([V.Ay], () => V.Ay.resolveUnreadSetting(r)),
        g = (0, u.cf)([M.A, ll.A, O.A], () => {
            let e = M.A.getChannel(r.parent_id),
                t = ll.A.getCheck(r.guild_id);
            return {
                canManageChannel: null != l && O.A.can(w.xBc.MANAGE_CHANNELS, r),
                canReorderChannel:
                    !0 !== a &&
                    ((0, y.ai)(l.id) ||
                        (null != e ? O.A.can(w.xBc.MANAGE_CHANNELS, e) : O.A.can(w.xBc.MANAGE_CHANNELS, l))),
                canMoveMembers: O.A.can(w.xBc.MOVE_MEMBERS, r),
                locked: !O.A.can(w.xBc.CONNECT, r),
                bypassLimit: O.A.can(w.xBc.MOVE_MEMBERS, r),
                unverifiedAccount: !t.canChat,
            };
        }),
        A = (0, u.bG)([L.A], () => L.A.isCollapsed(r.parent_id)),
        f =
            ((t = r.id),
            (n = (0, lp.A)(t)),
            (i = (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return (0, u.cf)(
                    [lf.Ay, lA.default],
                    () => {
                        let n = lA.default.getId();
                        return lf.Ay.getPermissionsForUser(n, e, t);
                    },
                    [e, t],
                );
            })(t, !0).moderator),
            !n && i ? 1 : 0),
        p = (0, u.bG)([nv.A], () => nv.A.getStageInstanceByChannel(r.id), [r.id]),
        C = (0, lm.zy)(r.id, th.ip.AUDIENCE),
        { isSubscriptionGated: E, needSubscriptionToAccess: x } = (0, iM.A)(r.id),
        N = (0, u.bG)([V.Ay], () => V.Ay.isFavorite(l.id, r.id)),
        _ = (0, lg.xn)(r.id),
        S = lL({
            channel: r,
            isChannelSelected: !1,
            isChannelCollapsed: d,
            voiceStates: c,
            isSubscriptionGated: E,
            needSubscriptionToAccess: x,
            enableConnectedUserLimit: _ || (r.userLimit > 0 && r.userLimit < w.RCc),
        }),
        I = e.connected && null == S,
        b = l.features.has(w.GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
    return (0, s.jsx)(lD, {
        categoryCollapsed: A,
        connectAction: f,
        numAudience: C,
        stageInstance: p,
        isSubscriptionGated: E,
        needSubscriptionToAccess: x,
        ...h,
        ...g,
        ...e,
        isFavoriteSuggestion: o && !N,
        forceShowButtons: I,
        openChatOnClick: b,
        channelInfo: S,
        resolvedUnreadSetting: m,
    });
}
function lP(e, t) {
    let n = t.getGuildId();
    if (null == n) throw Error("TextChannel, preloadChannel: Channel does not have a guildId");
    iy.A.preload(n, t.id);
}
let lV = B(
        class extends nO {
            handleContextMenu = (e) => {
                let { channel: t } = this.props,
                    i = D.A.getGuild(t.getGuildId());
                null != i &&
                    (0, e1.L3)(e, async () => {
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
                        return (n) => (0, s.jsx)(e, { ...n, channel: t, guild: i });
                    });
            };
            handleClick = (e) => {
                let t = e.getGuildId();
                if (null == t) throw Error("TextChannel, transitionTo: Channel does not have a guildId");
                (0, ee.pX)(w.BVt.CHANNEL(t, e.id), {
                    state: {
                        analyticsSource: {
                            page: w.liQ.GUILD_CHANNEL,
                            section: w.JJy.CHANNEL_LIST,
                            object: w.ZSU.CHANNEL,
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
                        canReorderChannel: r,
                    } = this.props,
                    a = (0, s.jsx)("li", {
                        className: eO()(this.getClassName(), { [er.r9]: this.isDisabled() }),
                        "data-dnd-name": (0, tZ.m1)(e, ls.default, lC.A),
                        children: (0, s.jsxs)(nP.Ay, {
                            className: er.Ki,
                            channel: e,
                            selected: t,
                            onClick: this.handleClick,
                            onMouseDown: lP,
                            onContextMenu: this.handleContextMenu,
                            connectDragPreview: r ? l : null,
                            "aria-label": (0, i9.Ay)({ channel: e }),
                            resolvedUnreadSetting: nV.e.ONLY_MENTIONS,
                            children: [this.renderInviteButton(), this.renderEditButton()],
                        }),
                    });
                return r ? n(i(a)) : a;
            }
        },
    ),
    lw = r.memo(function (e) {
        let { channel: t, guild: n, disableSorting: i } = e,
            l = (0, u.cf)([M.A, O.A], () => {
                let e = M.A.getChannel(t.parent_id);
                return {
                    canManageChannel: O.A.can(w.xBc.MANAGE_CHANNELS, t),
                    canReorderChannel:
                        !0 !== i && null != e ? O.A.can(w.xBc.MANAGE_CHANNELS, e) : O.A.can(w.xBc.MANAGE_CHANNELS, n),
                };
            });
        return (0, s.jsx)(lV, { ...l, ...e });
    });
var lH = n(172218),
    lB = n(811024),
    lk = n(323073);
function lF(e) {
    if (null == e) return null;
    switch (e.type) {
        case "embedded-activities":
        case "event":
            return { subtitle: e.name };
        case "go-live":
            return { subtitle: el.intl.string(el.t.Pa817q) };
    }
    return null;
}
var lK = n(3322),
    lz = n(696451),
    lW = n(763827),
    lY = n(56059),
    lX = n(163328),
    lq = n(778712),
    lZ = n(730134),
    l$ = n(707539),
    lJ = n(486020),
    lQ = n(98098);
function l0(e) {
    let { channel: t } = e,
        i = (0, u.yK)([lG.A, n4.Ay, O.A], () => {
            let e = lG.A.getActiveJoinedRelevantThreadsForParent(t.guild_id, t.id);
            return o()(lG.A.getActiveJoinedThreadsForParent(t.guild_id, t.id))
                .values()
                .map((e) => e.channel)
                .concat(o().values(lG.A.getActiveUnjoinedThreadsForParent(t.guild_id, t.id)))
                .filter((t) => !(t.id in e) && O.A.can(w.xBc.VIEW_CHANNEL, t))
                .sort((e, t) => {
                    let n = n4.Ay.lastMessageId(e.id),
                        i = n4.Ay.lastMessageId(t.id);
                    return tc.default.compare(n, i);
                })
                .reverse()
                .value();
        }),
        l = t.isForumLikeChannel() ? 5 : 3,
        a = t.isForumLikeChannel() ? lY.b : lX.y;
    return (
        r.useEffect(() => {
            (0, l$.TE)();
        }, []),
        (0, s.jsxs)("div", {
            className: lQ.SW,
            children: [
                (0, s.jsx)(e0.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: lQ.DD,
                    children: t.isForumLikeChannel() ? el.intl.string(el.t.ioVdO2) : el.intl.string(el.t.VNYs2v),
                }),
                (0, s.jsxs)("div", {
                    className: lQ.p_,
                    children: [
                        i
                            .slice(0, t.isForumLikeChannel() ? i.length : l)
                            .map((e) => (0, s.jsx)(l1, { thread: e }, e.id))
                            .filter((e) => r.isValidElement(e))
                            .slice(0, l),
                        (0, s.jsxs)(X.D, {
                            className: lQ.nM,
                            onClick: function () {
                                t.isForumLikeChannel()
                                    ? (0, lu.iN)(t.id)
                                    : (0, S.openModalLazy)(async () => {
                                          let { default: e } = await Promise.all([
                                              n.e("327744"),
                                              n.e("852197"),
                                              n.e("225307"),
                                              n.e("332165"),
                                              n.e("618416"),
                                              n.e("524434"),
                                              n.e("849162"),
                                              n.e("802598"),
                                              n.e("242266"),
                                              n.e("552705"),
                                              n.e("481647"),
                                              n.e("776602"),
                                              n.e("140402"),
                                              n.e("139970"),
                                              n.e("179049"),
                                              n.e("294857"),
                                              n.e("713567"),
                                              n.e("444567"),
                                              n.e("695170"),
                                              n.e("49716"),
                                              n.e("751743"),
                                              n.e("384042"),
                                              n.e("65225"),
                                          ]).then(n.bind(n, 126768));
                                          return (n) => (0, s.jsx)(e, { channel: t, ...n });
                                      });
                            },
                            children: [
                                (0, s.jsx)("div", {
                                    className: lQ.R4,
                                    children: (0, s.jsx)(a, { size: "custom", className: lQ.Kk }),
                                }),
                                (0, s.jsx)("div", {
                                    className: lQ.Pf,
                                    children: (0, s.jsx)(e0.E, {
                                        variant: "text-sm/normal",
                                        color: "none",
                                        children: el.intl.string(el.t["4qdZ93"]),
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
function l1(e) {
    let { thread: t } = e,
        n = (0, u.bG)([ls.default], () => ls.default.getUser(t.ownerId)),
        i = (0, l$.JO)(t);
    return (0, s.jsxs)(X.D, {
        className: lQ.nM,
        onClick: function (e) {
            (0, iD.JA)(t, t.isForumPost() ? e.shiftKey : !e.shiftKey, iV.H9.POPOUT);
        },
        children: [
            (0, s.jsx)("div", {
                className: lQ.R4,
                children:
                    null == n
                        ? (0, s.jsx)("img", {
                              className: lQ.my,
                              src: lJ.Ay.getDefaultAvatarURL(void 0, void 0),
                              alt: "",
                          })
                        : (0, s.jsx)(lZ.A, { className: lQ.my, user: n, size: lq._3.SIZE_16 }),
            }),
            (0, s.jsxs)("div", {
                className: lQ.Pf,
                children: [
                    (0, s.jsx)(e0.E, { className: lQ.UU, variant: "text-sm/normal", color: "none", children: t.name }),
                    (0, s.jsx)(e0.E, { variant: "text-sm/normal", color: "text-muted", children: "\u2022" }),
                    (0, s.jsx)(e0.E, {
                        className: lQ.vE,
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: (0, l$.aK)(i),
                    }),
                ],
            }),
        ],
    });
}
var l3 = n(334105);
function l2(e) {
    let { channel: t, isSuggestedSection: n } = e;
    return (0, s.jsx)(Y.m, {
        asContainer: !0,
        text: el.intl.string(el.t.ZXxLQg),
        children: (0, s.jsx)(X.D, {
            className: er.Xs,
            onClick: () => {
                ((0, l3.fJ)(t.getGuildId(), t.id),
                    (0, lu.iN)(t.id, n ? { source: lc.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0));
            },
            "aria-label": el.intl.string(el.t.ZXxLQg),
            children: (0, s.jsx)(iT.ChatIcon, { size: "xs", color: "currentColor", className: er.gE }),
        }),
    });
}
var l9 = n(364522),
    l7 = n(302959),
    l5 = n(35903),
    l6 = n(970928),
    l4 = n(427262),
    l8 = n(641635);
let se = nr.DN.SIZE_24;
function st(e) {
    let { activity: t, embeddedApp: n } = e,
        i = t?.assets,
        l = t?.application_id;
    if (null == i || (null == i.large_image && null == i.small_image)) {
        let e = lJ.Ay.getApplicationIconURL({ id: n.application.id, icon: n.application.icon }),
            t = n.application.name;
        return (0, s.jsx)(Y.m, {
            text: t,
            position: "top",
            asContainer: !0,
            children: (0, s.jsx)("img", { alt: t, src: e, className: l8.P3 }),
        });
    }
    let r = i.large_image ?? i.small_image;
    return null != r
        ? (0, s.jsx)("img", { alt: i.large_text ?? "", src: (0, l6.uD)(l, r, [128, 128]), className: l8.P3 })
        : null;
}
function sn(e) {
    let { activity: t, embeddedApp: n, channel: i } = e,
        l = Array.from(n.embeddedActivity.userIds),
        r = (0, u.yK)([ls.default], () => l.map((e) => ls.default.getUser(e)).filter(to.Vq));
    return (0, s.jsx)("div", {
        className: l8.ec,
        children: (0, s.jsxs)("div", {
            className: l8.Wh,
            children: [
                (0, s.jsx)(st, { activity: t, embeddedApp: n }),
                (0, s.jsxs)("div", {
                    className: l8.X0,
                    children: [
                        (0, s.jsx)(ii.D, {
                            variant: "heading-sm/semibold",
                            color: "text-strong",
                            className: l8.wx,
                            lineClamp: 1,
                            children: n.application.name,
                        }),
                        t?.details != null &&
                            "" !== t.details &&
                            (0, s.jsx)(e0.E, {
                                variant: "text-xs/normal",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.details,
                            }),
                        t?.state != null &&
                            "" !== t.state &&
                            (0, s.jsx)(e0.E, {
                                variant: "text-xs/normal",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.state,
                            }),
                        l.length > 0 &&
                            (0, s.jsx)(nr.Ay, {
                                className: l8.TN,
                                guildId: i.guild_id,
                                users: r,
                                size: se,
                                max: 7,
                                renderUser: function (e) {
                                    if (null == e || e === nr.mt) return null;
                                    let t = l4.Ay.getName(e);
                                    return (0, s.jsx)(
                                        Y.m,
                                        {
                                            asContainer: !0,
                                            text: t,
                                            position: "bottom",
                                            children: (0, s.jsx)("img", {
                                                src: e.getAvatarURL(i.guild_id, se),
                                                alt: t,
                                                className: l8.my,
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
var si = n(584960);
function sl(e) {
    let { channel: t, presenceActivity: n, embeddedApp: i, onAction: l } = e,
        r = Array.from(i.embeddedActivity.userIds),
        a = (0, u.bG)([ls.default], () => ls.default.getUser(r[0]));
    return null == a
        ? null
        : (0, s.jsxs)("div", {
              className: si.Eb,
              children: [
                  (0, s.jsx)("div", {
                      className: si.Il,
                      children: (0, s.jsx)(sn, { activity: n, embeddedApp: i, channel: t }),
                  }),
                  (0, s.jsx)("div", {
                      className: si.M4,
                      children: (0, s.jsx)(l5.A, {
                          type: l7.M.VOICE_CHANNEL,
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
var ss = n(713654),
    sr = n(744399);
function sa(e) {
    let { channel: t } = e,
        n = (0, u.bG)([D.A], () => D.A.getGuild(t.guild_id)),
        i = (0, tZ.Ay)(t),
        l = (0, ss.gU)(t, n);
    return null == l
        ? null
        : (0, s.jsxs)("div", {
              className: sr.hY,
              children: [
                  (0, s.jsx)(l, { className: sr.p }),
                  (0, s.jsx)(e0.E, {
                      variant: "text-md/semibold",
                      color: "interactive-text-default",
                      className: sr.HA,
                      children: i,
                  }),
              ],
          });
}
var so = n(220650);
function sd(e) {
    let { channel: t, onAction: n } = e,
        i = (0, lE.Ay)(t),
        l = Array.from((0, lE.Rz)(i).values());
    return 0 === l.length
        ? null
        : (0, s.jsxs)(l9.Ip, {
              className: so.kL,
              children: [
                  (0, s.jsx)("div", { className: so.oT, children: (0, s.jsx)(sa, { channel: t }) }),
                  (0, s.jsx)("div", { className: so.zN }),
                  l.map((e, i) =>
                      (0, s.jsx)(
                          sl,
                          { embeddedApp: e, presenceActivity: e.presenceActivity ?? void 0, channel: t, onAction: n },
                          i,
                      ),
                  ),
              ],
          });
}
class sc extends nO {
    state = { shouldShowThreadsPopout: !1, shouldShowActivities: !1, isMenuItemPopoverVisible: !1 };
    channelItemRef = r.createRef();
    assignRef = (e, t) => {
        null != e && (e.current = t);
    };
    setChannelItemRef = (e) => {
        ((this.channelItemRef.current = e), this.assignRef(this.props.channelItemRef, e));
    };
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
    handleMenuItemPopoverVisibilityChange = (e) => {
        this.setState({ isMenuItemPopoverVisible: e });
    };
    handleClosePopout = () => {
        (this.state.shouldShowActivities && this.handleActivitiesPopoutClose(),
            this.state.shouldShowThreadsPopout && this.handleThreadsPopoutClose());
    };
    handleMouseDown = () => {
        (this.handleActivitiesPopoutClose(), this.handleThreadsPopoutClose());
        let { channel: e } = this.props,
            t = e.getGuildId();
        iy.A.preload(t ?? w.ME, e.id);
    };
    renderPopout = (e) => {
        let { channel: t, sorting: n, embeddedApps: i, channelIsContentGated: l } = this.props,
            { shouldShowActivities: r } = this.state;
        return t.isModeratorReportChannel() || l
            ? null
            : null != i && i.length > 0 && r && !n
              ? (0, s.jsx)(sd, { onAction: this.handleActivitiesPopoutClose, channel: t })
              : (0, s.jsx)(l0, { ...e, channel: this.props.channel });
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
        if (t.type === w.rbe.GROUP_DM)
            return void (0, e1.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("926132"),
                    n.e("146652"),
                    n.e("893190"),
                    n.e("393336"),
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
                return (n) => (0, s.jsx)(e, { ...n, channel: t, selected: !0 });
            });
        if (t.type === w.rbe.DM) {
            let i = ls.default.getUser(t.getRecipientId());
            null != i &&
                (0, e1.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("790484"),
                        n.e("597981"),
                        n.e("622936"),
                        n.e("216947"),
                        n.e("463317"),
                        n.e("926132"),
                        n.e("146652"),
                        n.e("834552"),
                        n.e("708757"),
                        n.e("585968"),
                        n.e("893190"),
                        n.e("393336"),
                        n.e("776273"),
                        n.e("391763"),
                        n.e("189673"),
                        n.e("955557"),
                        n.e("571210"),
                        n.e("882073"),
                        n.e("797558"),
                        n.e("88342"),
                        n.e("691994"),
                        n.e("229787"),
                        n.e("311802"),
                        n.e("576665"),
                        n.e("698965"),
                        n.e("235313"),
                        n.e("947502"),
                        n.e("436564"),
                        n.e("245996"),
                        n.e("700792"),
                        n.e("965789"),
                        n.e("592822"),
                        n.e("529422"),
                        n.e("823427"),
                        n.e("198415"),
                        n.e("309291"),
                        n.e("307059"),
                        n.e("838056"),
                        n.e("508829"),
                        n.e("17244"),
                        n.e("516054"),
                        n.e("298199"),
                        n.e("864464"),
                        n.e("439778"),
                    ]).then(n.bind(n, 385913));
                    return (n) => (0, s.jsx)(e, { ...n, user: i, channel: t, showModalItems: !1 });
                });
            return;
        }
        if (t.isModeratorReportChannel())
            return void (0, e1.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("926132"),
                    n.e("146652"),
                    n.e("393336"),
                    n.e("391763"),
                    n.e("955557"),
                    n.e("947502"),
                    n.e("550033"),
                    n.e("343266"),
                    n.e("430997"),
                    n.e("379995"),
                    n.e("578580"),
                ]).then(n.bind(n, 907647));
                return (n) => (0, s.jsx)(e, { ...n, channel: t });
            });
        let i = D.A.getGuild(t.getGuildId());
        null != i &&
            (0, e1.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("926132"),
                    n.e("146652"),
                    n.e("893190"),
                    n.e("393336"),
                    n.e("391763"),
                    n.e("955557"),
                    n.e("947502"),
                    n.e("603998"),
                    n.e("550033"),
                    n.e("343266"),
                    n.e("965789"),
                    n.e("309004"),
                    n.e("198415"),
                    n.e("412255"),
                    n.e("63340"),
                    n.e("430997"),
                    n.e("379995"),
                    n.e("544058"),
                    n.e("591377"),
                    n.e("65200"),
                    n.e("35723"),
                    n.e("566378"),
                    n.e("256372"),
                    n.e("29542"),
                    n.e("248804"),
                    n.e("670954"),
                    n.e("25173"),
                ]).then(n.bind(n, 468916));
                return (n) => (0, s.jsx)(e, { ...n, channel: t, guild: i });
            });
    };
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e ? null : (0, s.jsx)("div", { className: er.yW, children: e });
    }
    render() {
        let {
                channel: e,
                guild: t,
                selected: n,
                muted: i,
                unread: l,
                hasActiveThreads: r,
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
                isTargetInViewport: x,
                channelItemRef: N,
                isSuggestedSection: _,
            } = this.props,
            S = N ?? this.channelItemRef,
            { isMenuItemPopoverVisible: I } = this.state,
            b = !I && a,
            G = !I && E && null != p && p.length > 0,
            j = lF(A),
            v = _ ? { source: lc.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
            R = (0, s.jsxs)("li", {
                className: eO()(this.getClassName(), { [er.r9]: this.isDisabled(), [er.wH]: n }),
                "data-dnd-name": (0, tZ.m1)(e, ls.default, lC.A),
                onMouseEnter: b || G ? this.handleMouseEnter : void 0,
                onMouseLeave: b || G ? this.handleMouseLeave : void 0,
                children: [
                    (0, s.jsx)(i1.Y, {
                        targetElementRef: S,
                        position: "right",
                        renderPopout: this.renderPopout,
                        onRequestClose: this.handleClosePopout,
                        spacing: 17,
                        shouldShow: (b && this.state.shouldShowThreadsPopout) || (G && this.state.shouldShowActivities),
                        children: () =>
                            (0, s.jsxs)(nP.Ay, {
                                ref: this.setChannelItemRef,
                                className: er.Ki,
                                channel: e,
                                guild: t,
                                selected: !g && n,
                                muted: i,
                                unread: l,
                                mentionCount: o,
                                hasActiveThreads: r,
                                subtitle: j?.subtitle,
                                subtitleColor: j?.color,
                                onMouseDown: this.handleMouseDown,
                                onContextMenu: this.handleContextMenu,
                                connectDragPreview: h ? u : null,
                                isFavoriteSuggestion: g,
                                channelTypeOverride: f ? w.rbe.GUILD_TEXT : void 0,
                                resolvedUnreadSetting: C,
                                transitionExtras: v,
                                "aria-label": (0, i9.Ay)({
                                    channel: e,
                                    unread: l,
                                    mentionCount: o,
                                    isSubscriptionGated: m,
                                    embeddedActivitiesCount: p?.length,
                                }),
                                children: [
                                    g &&
                                        (0, s.jsxs)(s.Fragment, {
                                            children: [
                                                this.renderAcceptSuggestionButton(),
                                                this.renderRemoveSuggestionButton(),
                                            ],
                                        }),
                                    !g &&
                                        (0, s.jsxs)(s.Fragment, {
                                            children: [
                                                this.renderChannelInfo(),
                                                e.type === w.rbe.GUILD_APP
                                                    ? (0, s.jsx)(l2, { channel: e, isSuggestedSection: _ })
                                                    : null,
                                                this.renderInviteButton(),
                                                this.renderEditButton(),
                                            ],
                                        }),
                                ],
                            }),
                    }),
                    n &&
                        (0, s.jsx)(lK.A, {
                            targetElementRef: S,
                            channelType: e.type,
                            isTargetInViewport: x,
                            onVisibilityChange: this.handleMenuItemPopoverVisibilityChange,
                        }),
                ],
            });
        return h ? d(c(R)) : R;
    }
}
let su = B(sc);
function sh(e) {
    let { channel: t, guild: n, disableSorting: i, isFavoriteCategory: l, muted: a, selected: o } = e,
        { hasActiveThreads: d, hasMoreActiveThreads: c } = (0, iU.NR)(t),
        h = (0, u.cf)([n4.Ay], () => ({
            unread: n4.Ay.hasUnread(t.id),
            ackMessageId: n4.Ay.ackMessageId(t.id),
            isLowImportanceMention: n4.Ay.getIsMentionLowImportance(t.id),
        })),
        m = (0, u.bG)([V.Ay], () => V.Ay.resolveUnreadSetting(t)),
        g = (0, u.cf)([M.A, O.A], () => {
            let e = M.A.getChannel(t.parent_id);
            return {
                canManageChannel: O.A.can(w.xBc.MANAGE_CHANNELS, t),
                canReorderChannel:
                    !0 !== i &&
                    ((0, y.ai)(n.id) ||
                        (null != e ? O.A.can(w.xBc.MANAGE_CHANNELS, e) : O.A.can(w.xBc.MANAGE_CHANNELS, n))),
            };
        }),
        A = (0, u.bG)([n6.A], () => n6.A.shouldIndicateNewChannel(n.id, t.id)),
        { needSubscriptionToAccess: f, isSubscriptionGated: p } = (0, iM.A)(t.id),
        C = (0, u.bG)([V.Ay], () => V.Ay.isFavorite(n.id, t.id)),
        E = (0, lk.ni)(t),
        x = (0, lB.Gp)(t.id),
        N = lL({
            channel: t,
            isChannelCollapsed: !1,
            isChannelSelected: o,
            isSubscriptionGated: p,
            needSubscriptionToAccess: f,
            isNewChannel: A,
            muted: a,
            enableActivities: x,
            resolvedUnreadSetting: m,
        }),
        _ = (0, lE.Ay)(t),
        [S, I] = r.useState(!1),
        b = (0, lH.K)(
            r.useCallback((e) => {
                I(e);
            }, []),
        );
    return (0, u.bG)([lW.A, lz.Ay], () => lW.A.getChannelId() !== t.id && lz.Ay.isCurrentUserGuest(t.getGuildId()))
        ? null
        : (0, s.jsx)(su, {
              ...h,
              ...g,
              ...e,
              hasActiveThreads: d,
              hasMoreActiveThreads: c,
              isSubscriptionGated: p,
              needSubscriptionToAccess: f,
              isNewChannel: A && e.canBeNewChannel,
              isFavoriteSuggestion: l && !C,
              channelIsContentGated: E,
              channelInfo: N,
              embeddedApps: _,
              resolvedUnreadSetting: m,
              hasChannelInfo: null != N,
              enableActivities: x,
              isTargetInViewport: S,
              channelItemRef: b,
          });
}
var sm = n(900797),
    sg = n(636585),
    sA = n(531685),
    sf =
        (((l = {}).HIDDEN = "hidden"),
        (l.UNREAD = "unread"),
        (l.MENTIONS = "mentions"),
        (l.VOICE_CHANNELS = "voice-channels"),
        l);
let sp = { mode: "hidden", mentionCount: 0, targetChannelId: null },
    sC = { topBar: sp, bottomBar: sp },
    sE = {},
    sx = {};
function sN(e) {
    let t = M.A.getChannel(e);
    return (
        !(null == t || null == t.getGuildId() || t.isGuildVocal()) &&
        !(t.isThread() ? ik.A.isMuted(t.id) : V.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, ts.Y)(t)
    );
}
function s_(e) {
    let t = M.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let i = V.Ay.isGuildCollapsed(n),
        l = V.Ay.isChannelMuted(n, t.id);
    return (!i || !l) && n4.Ay.getMentionCount(e) > 0;
}
function sS(e) {
    return (
        !V.Ay.isChannelMuted(e.guild_id, e.id) &&
        (e.isGuildStageVoice()
            ? tu.A.getMutableParticipants(e.id, th.ip.SPEAKER).length > 0
            : ta.Ay.getVoiceStatesForChannel(e).length > 0)
    );
}
function sI(e) {
    let { guildChannels: t } = tN.A.getGuildWithoutChangingGuildActionRows(e),
        n = t.getChannels(sx[e] ?? []);
    if (null == n || 0 === n.length) return !1;
    let i = null,
        l = null,
        s = null,
        r = null,
        a = !0,
        d = !0,
        c = !1,
        u = t.getCategoryFromSection(t.voiceChannelsSectionNumber),
        h = u?.getShownChannelIds() ?? [],
        [m, g, A] = t.getSlicedChannels(n);
    for (let e = 0; e < g.length; e++) {
        let t = g[e];
        if (
            ((sN(t.id) || o().some(t.threadIds, sN)) && (d = !1),
            (s_(t.id) || o().some(t.threadIds, s_)) && (a = !1),
            h.includes(t.id) && (c = !0),
            !d && !a && c)
        )
            break;
    }
    let f = 0,
        p = !1,
        C = 0,
        E = !1;
    if (d || a)
        for (let e = m.length - 1; e >= 0; e--) {
            let t = m[e];
            ((sN(t.id) || o().some(t.threadIds, sN)) && (null == l && (l = t.id), (p = !0)),
                (s_(t.id) || o().some(t.threadIds, s_)) &&
                    (null == i && (i = t.id),
                    (f += n4.Ay.getMentionCount(t.id)),
                    (f += o().sumBy(t.threadIds, n4.Ay.getMentionCount))));
        }
    if (d || a)
        for (let e = 0; e < A.length; e++) {
            let t = A[e];
            if (!d && !a) break;
            ((sN(t.id) || o().some(t.threadIds, sN)) && (null == r && (r = t.id), (E = !0)),
                (s_(t.id) || o().some(t.threadIds, s_)) &&
                    (null == s && (s = t.id),
                    (C += n4.Ay.getMentionCount(t.id)),
                    (C += o().sumBy(t.threadIds, n4.Ay.getMentionCount))));
        }
    let x = null,
        N = null,
        _ = u?.getChannelRecords() ?? [];
    (a && C > 0
        ? (x = { mode: "mentions", mentionCount: C, targetChannelId: s })
        : !c && o().some(_, sS)
          ? (x = { mode: "voice-channels", mentionCount: 0, targetChannelId: null })
          : d && E && (x = { mode: "unread", mentionCount: 0, targetChannelId: r }),
        a && f > 0
            ? (N = { mode: "mentions", mentionCount: f, targetChannelId: i })
            : d && p && (N = { mode: "unread", mentionCount: 0, targetChannelId: l }));
    let S = null != N && (null == x || ("mentions" !== x.mode && "mentions" === N.mode)),
        I = null != x && ("mentions" === x.mode || !S);
    return ((sE[e] = { topBar: S ? (N ?? sp) : sp, bottomBar: I ? (x ?? sp) : sp }), !0);
}
let sb = o().throttle(sI, 200);
function sG(e) {
    let { guildId: t } = e,
        n = D.A.getGuild(t);
    return null != n && !!n.features.has(w.GuildFeatures.COMMUNITY) && sb(t);
}
function sj(e) {
    let { id: t } = e,
        n = M.A.getChannel(t);
    if (null == n) return !1;
    let i = D.A.getGuild(n.guild_id);
    return null != i && !!i.features.has(w.GuildFeatures.COMMUNITY) && sb(n.guild_id);
}
function sv(e) {
    let { channel: t } = e,
        n = M.A.getChannel(t.id);
    if (null == n) return !1;
    let i = D.A.getGuild(t.guild_id);
    return null != i && !!i.features.has(w.GuildFeatures.COMMUNITY) && sb(n.guild_id);
}
function sR(e) {
    let { channelId: t } = e,
        n = M.A.getChannel(t);
    if (null == n) return !1;
    let i = D.A.getGuild(n.guild_id);
    return (
        null != i && !!i.features.has(w.GuildFeatures.COMMUNITY) && P.A.getGuildId() === n.guild_id && sb(n.guild_id)
    );
}
function sy(e) {
    let { guildId: t } = e;
    return null != t && sb(t);
}
class sT extends u.Ay.Store {
    static displayName = "ChannelListUnreadsStore";
    initialize() {
        this.waitFor(tN.A, M.A, D.A, ik.A, n4.Ay, P.A, ta.Ay, tu.A, V.Ay);
    }
    getUnreadStateForGuildId(e) {
        return sE[e] ?? sC;
    }
}
let sL = new sT(e2.h, {
    UPDATE_CHANNEL_LIST_DIMENSIONS: function (e) {
        let { guildId: t, channelIds: n } = e,
            i = D.A.getGuild(t);
        return (
            null != i &&
            !!i.features.has(w.GuildFeatures.COMMUNITY) &&
            null != n &&
            !o().isEqual(sx[t], n) &&
            ((sx[t] = n), sI(t))
        );
    },
    BULK_ACK: function (e) {
        let { channels: t } = e,
            n = !1;
        return (
            o()(t)
                .map((e) => {
                    let { channelId: t } = e;
                    return M.A.getChannel(t)?.guild_id;
                })
                .filter(to.Vq)
                .uniq()
                .forEach((e) => {
                    let t = D.A.getGuild(e);
                    null != t && t.features.has(w.GuildFeatures.COMMUNITY) && sb(e) && (n = !0);
                }),
            n
        );
    },
    CHANNEL_ACK: sR,
    CHANNEL_DELETE: sv,
    CHANNEL_LOCAL_ACK: sR,
    MESSAGE_ACK: sR,
    MESSAGE_CREATE: sR,
    MESSAGE_DELETE_BULK: sR,
    MESSAGE_DELETE: sR,
    PASSIVE_UPDATE_V2: function (e) {
        let t = D.A.getGuild(e.guildId);
        return !!(e.channels.length > 0 && null != t && t.features.has(w.GuildFeatures.COMMUNITY)) && sb(e.guildId);
    },
    RESORT_THREADS: sR,
    THREAD_CREATE: sv,
    THREAD_DELETE: sv,
    THREAD_LIST_SYNC: sG,
    THREAD_MEMBER_UPDATE: sj,
    THREAD_MEMBERS_UPDATE: sj,
    THREAD_UPDATE: sv,
    BULK_CLEAR_RECENTS: sG,
    CATEGORY_COLLAPSE_ALL: sG,
    CATEGORY_EXPAND_ALL: sG,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = P.A.getGuildId();
        if (null == n || !new Set(t.map((e) => e.guildId)).has(n)) return !1;
        let i = sE[n];
        return null != i && "voice-channels" === i.bottomBar.mode && sb(n);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: sy,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: sy,
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: t } = e;
        for (let e of t) null != e.guild_id && sb(e.guild_id);
    },
    USER_GUILD_SETTINGS_GUILD_UPDATE: sy,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: sy,
});
var sM = n(350536);
let sU = { friction: 30, tension: 300 };
function sD(e) {
    let { guildChannels: t, jumpToVoiceChannels: n } = e,
        i = t.getCategoryFromSection(t.voiceChannelsSectionNumber),
        l = (0, u.bG)([ta.Ay], () => ta.Ay.getVoiceStates(t.id), [t.id]),
        a = r.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), n());
            },
            [n],
        ),
        o = i?.getChannelRecords() ?? [],
        d = (0, nd.fK)({ channels: o, selectedChannelId: null, selectedVoiceChannelId: null, voiceStates: l });
    return (0, s.jsxs)(X.D, {
        className: eO()(sM.M0, sM.OF),
        onClick: a,
        children: [
            (0, s.jsx)(tX.H, { size: "custom", className: sM.Gs, width: 14, height: 14, color: "currentColor" }),
            (0, s.jsx)(e0.E, {
                variant: "text-xs/semibold",
                className: sM.pM,
                children: el.intl.format(el.t["fDlr+F"], { count: d.length }),
            }),
            (0, s.jsx)(sg.A, {
                guildId: t.id,
                className: sM.J$,
                users: d.slice(0, 4),
                renderMoreUsers: () => null,
                max: 4,
                size: lq._3.SIZE_16,
            }),
        ],
    });
}
function sO(e) {
    let { position: t, guildChannels: n, guildChannelsVersion: i, jumpToVoiceChannels: l, jumpToChannel: a } = e,
        { bottomBar: o, topBar: d } = (0, u.cf)([sL], () => sL.getUnreadStateForGuildId(n.id)),
        c = (0, u.bG)([sA.A], () => sA.A.isFocused()),
        { mode: h, mentionCount: m, targetChannelId: g } = "bottom" === t ? o : d,
        A = h === sf.HIDDEN,
        f = (0, eQ.z)(
            {
                to: { transform: A ? ("bottom" === t ? "translateY(180%)" : "translateY(-180%)") : "translateY(0%)" },
                config: sU,
            },
            c ? "respect-motion-settings" : "animate-never",
        ),
        p = r.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), null != g && a(g));
            },
            [a, g],
        );
    return (0, s.jsx)("div", {
        className: eO()(sM.kL, { [sM.Mn]: "top" === t, [sM.sQ]: "bottom" === t }),
        children: (0, s.jsx)(eJ.animated.div, {
            className: sM.pK,
            style: f,
            "aria-hidden": A,
            children: (function () {
                switch (h) {
                    case sf.HIDDEN:
                        return (0, s.jsx)("div", { className: eO()(sM.M0, sM.Te) });
                    case sf.UNREAD:
                        return (0, s.jsxs)(X.D, {
                            className: sM.M0,
                            onClick: p,
                            children: [
                                "bottom" === t
                                    ? (0, s.jsx)(tW.a, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: sM.z_,
                                          height: 14,
                                          width: 14,
                                      })
                                    : (0, s.jsx)(sm.t, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: sM.z_,
                                          height: 14,
                                          width: 14,
                                      }),
                                (0, s.jsx)(e0.E, {
                                    variant: "text-xs/semibold",
                                    color: "interactive-text-default",
                                    className: sM.pM,
                                    children: el.intl.string(el.t.FCRiT3),
                                }),
                            ],
                        });
                    case sf.MENTIONS:
                        return (0, s.jsx)(X.D, {
                            className: eO()(sM.M0, sM.vU),
                            onClick: p,
                            children: (0, s.jsx)(e0.E, {
                                variant: "text-xs/semibold",
                                color: "badge-text-brand",
                                className: sM.pM,
                                children: el.intl.format(el.t.EQcLyp, { count: m }),
                            }),
                        });
                    case sf.VOICE_CHANNELS:
                        return (0, s.jsx)(sD, { jumpToVoiceChannels: l, guildChannels: n, guildChannelsVersion: i });
                    default:
                        return;
                }
            })(),
        }),
    });
}
var sP = n(310953),
    sV = n(173860);
function sw(e) {
    let t = M.A.getChannel(e);
    return (
        null != t &&
        null != t.getGuildId() &&
        !(t.isThread() ? ik.A.isMuted(t.id) : V.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, ts.Y)(t)
    );
}
function sH(e) {
    let t = M.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let i = V.Ay.isGuildCollapsed(n),
        l = V.Ay.isChannelMuted(n, t.id);
    return (!i || !l) && n4.Ay.getMentionCount(e) > 0;
}
let sB = r.forwardRef(function (e, t) {
    let { guildId: n, guildChannels: i, guildChannelsVersion: l, ...r } = e,
        a = (0, sP.W)(n, i, l, { withVoiceChannels: !1 }, { ignoreRecents: !0 }),
        o = (0, u.bG)([sA.A], () => sA.A.isFocused());
    return (0, s.jsx)(sV.A, { ref: t, ...r, isUnread: sw, isMentioned: sH, items: a, animate: o });
});
var sk = n(81466);
function sF(e) {
    let { guild: t, selected: i } = e,
        { hasUnread: l, mentionCount: r } = (0, u.cf)(
            [n4.Ay],
            () => ({
                hasUnread: n4.Ay.hasUnread(t.id, nV.P.GUILD_EVENT),
                mentionCount: n4.Ay.getMentionCount(t.id, nV.P.GUILD_EVENT),
            }),
            [t.id],
        ),
        a = (0, u.bG)([V.Ay], () => V.Ay.isMuteScheduledEventsEnabled(t.id));
    async function o() {
        await (0, S.openModalLazy)(async () => {
            let { default: e } = await Promise.all([
                n.e("489565"),
                n.e("684231"),
                n.e("570690"),
                n.e("886631"),
                n.e("476227"),
                n.e("998835"),
                n.e("998392"),
                n.e("694303"),
                n.e("147626"),
                n.e("256373"),
                n.e("970644"),
                n.e("449347"),
                n.e("464287"),
                n.e("853934"),
                n.e("468248"),
                n.e("469647"),
                n.e("798354"),
                n.e("188353"),
                n.e("886571"),
            ]).then(n.bind(n, 318104));
            return (n) => (0, s.jsx)(e, { ...n, guildId: t.id });
        });
    }
    let d = (0, tV.Ay)(t.id),
        c = d.length > 0 ? el.intl.formatToPlainString(el.t.IBdqSu, { number: d.length }) : el.intl.string(el.t.tlopTM);
    return (0, s.jsx)(Q.G, {
        id: `upcoming-events-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(sk.CalendarIcon, { size: "md", color: "currentColor", className: e }),
        text: c,
        selected: i,
        onClick: o,
        onContextMenu: function (e) {
            (0, e1.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("426386"), n.e("819990")]).then(n.bind(n, 221621));
                return (n) => (0, s.jsx)(e, { ...n, guildId: t.id });
            });
        },
        showUnread: l && !a,
        trailing: !a && r > 0 ? (0, s.jsx)(Z.hV, { className: n0.Do, disableColor: !0, count: r }) : null,
    });
}
var sK = n(845056),
    sz = n(765379),
    sW = n(271683),
    sY = n(725613),
    sX = n(857253),
    sq = n(360729),
    sZ = n(22231),
    s$ = n(241326),
    sJ = n(750943),
    sQ = n(743674),
    s0 = n(888697),
    s1 = n(26741),
    s3 = n(493819),
    s2 = n(722884),
    s9 = n(579129),
    s7 = n(176431);
function s5(e) {
    let { channel: t, imageUrl: i, animatedUrl: l, bannerHash: a, canModifyHangout: o } = e,
        d = (0, sQ.S)(i),
        c = (0, ey.je)(t),
        u = (0, s1.P9)({ guildId: t.guild_id, channelId: t.id, bannerHash: a }),
        h = r.useCallback(() => {
            ((0, s1.J_)({ guildId: t.guild_id, channelId: t.id }), (0, s2.A)({ channel: t }));
        }, [t]),
        m = r.useCallback(() => {
            ((0, s1.nK)({ guildId: t.guild_id, channelId: t.id }), (0, s0.e2)(t.id));
        }, [t.guild_id, t.id]),
        g = r.useCallback(
            (e) => {
                c
                    ? (0, e1.L3)(e, async () => {
                          let { default: e } = await n.e("555558").then(n.bind(n, 316421));
                          return (n) => (0, s.jsx)(e, { ...n, channel: t });
                      })
                    : e.preventDefault();
            },
            [t, c],
        );
    return (0, s.jsxs)("div", {
        ref: u,
        className: s7.rs,
        onContextMenu: g,
        children: [
            (0, s.jsx)("div", {
                className: s7.ZS,
                style: null != d ? { backgroundColor: d } : void 0,
                children: (0, s.jsx)(s3.A, { imageUrl: i, animatedUrl: l, className: s7.Sl }),
            }),
            o
                ? (0, s.jsxs)("div", {
                      className: s7.n_,
                      children: [
                          (0, s.jsx)(Y.m, {
                              text: el.intl.string(s9.default.XJ4UpB),
                              children: (0, s.jsx)(X.D, {
                                  className: s7.HF,
                                  onClick: h,
                                  children: (0, s.jsx)(sZ.PencilIcon, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                          (0, s.jsx)(Y.m, {
                              text: el.intl.string(s9.default.XV4qT6),
                              children: (0, s.jsx)(X.D, {
                                  className: s7.HF,
                                  onClick: m,
                                  children: (0, s.jsx)(s$.TrashIcon, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function s6(e) {
    let { channel: t } = e,
        n = (0, s1.dX)({ guildId: t.guild_id, channelId: t.id }),
        i = r.useCallback(() => {
            ((0, s1.J_)({ guildId: t.guild_id, channelId: t.id }), (0, s2.A)({ channel: t }));
        }, [t]);
    return (0, s.jsx)("div", {
        ref: n,
        className: s7._o,
        children: (0, s.jsxs)(X.D, {
            className: s7.hH,
            onClick: i,
            children: [
                (0, s.jsx)(sJ.X, { size: "xs", color: "currentColor" }),
                (0, s.jsx)(e0.E, {
                    variant: "text-sm/medium",
                    color: "currentColor",
                    children: el.intl.string(s9.default.NGcIOF),
                }),
            ],
        }),
    });
}
function s4(e) {
    let { channel: t, isConnected: n } = e,
        { enableHangoutWindow: i } = (0, eR.Dm)({ guildId: t.guild_id, location: "HangoutWindow" }),
        l = (0, ey.W6)(t),
        a = n && l,
        o = t.voiceHangout,
        d = o?.banner_hash,
        c = r.useMemo(() => {
            if (null == d || null == t.guild_id) return null;
            let e = (0, ey.Sq)({ guildId: t.guild_id, bannerHash: d });
            return null == e ? null : { bannerHash: d, ...e };
        }, [t.guild_id, d]);
    return i
        ? null != c
            ? (0, s.jsx)(s5, {
                  channel: t,
                  imageUrl: c.imageUrl,
                  animatedUrl: c.animatedUrl,
                  bannerHash: c.bannerHash,
                  canModifyHangout: a,
              })
            : a
              ? (0, s.jsx)(s6, { channel: t })
              : null
        : null;
}
var s8 = n(290863),
    re = n(461213),
    rt = n(532622),
    rn = n(882840),
    ri = n(208971),
    rl = n(46054),
    rs = n(569381),
    rr = n(165648);
function ra(e) {
    let { channel: t, connected: n, hovered: i, subtitle: l, onClick: a } = e,
        o = (0, ri.G)((0, rn.l)(t)),
        { enableHangoutWindow: d } = (0, eR.Dm)({ guildId: t.guild_id, location: "VoiceChannelStatus" }),
        c = d && (0, ey.lr)(t),
        u = null != o && o.length > 0,
        h = (0, rt.Ay)(t, !0),
        m = null != l && l.length > 0;
    if (
        (r.useEffect(() => {
            u && ib.default.track(w.HAw.VOICE_CHANNEL_TOPIC_VIEWED, { channel_id: t.id, guild_id: t.guild_id });
        }, [u, t.id, t.guild_id]),
        null == t.guild_id)
    )
        return null;
    let g = eO()(rs.Ui, n && h ? rs.BI : null);
    return u
        ? (0, s.jsx)(X.D, {
              className: g,
              onClick: h ? a : void 0,
              children: (0, s.jsx)(e0.E, {
                  variant: "text-xs/medium",
                  className: eO()(rs.qS, rr.PT),
                  children: (0, s.jsx)(tk.A, { children: rl.A.parseVoiceChannelStatus(o, !0, { channelId: t.id }) }),
              }),
          })
        : n && h && !c && (!m || i)
          ? (0, s.jsxs)(X.D, {
                className: g,
                onClick: a,
                children: [
                    (0, s.jsx)(e0.E, {
                        variant: "text-xs/medium",
                        className: rs.qS,
                        children: el.intl.string(el.t.Mgpxiw),
                    }),
                    (0, s.jsx)(sZ.PencilIcon, { color: "currentColor", className: rs.rD, size: "xxs" }),
                ],
            })
          : m
            ? (0, s.jsx)(tk.A, { children: l })
            : null;
}
class ro extends nO {
    state = { shouldShowGuildVerificationPopout: !1, hovered: !1 };
    ref = r.createRef();
    channelItemRef = r.createRef();
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
        (o && i3.A.updateChatOpen(n.id, !0),
            iL.A.handleVoiceConnect({
                channel: n,
                connected: t,
                needSubscriptionToAccess: l,
                routeDirectlyToChannel: o || a,
                locked: e,
                transitionExtras: r ? { source: lc.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
            }));
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            i = D.A.getGuild(t.getGuildId());
        null != i &&
            (0, e1.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("926132"),
                    n.e("146652"),
                    n.e("893190"),
                    n.e("393336"),
                    n.e("391763"),
                    n.e("955557"),
                    n.e("947502"),
                    n.e("603998"),
                    n.e("550033"),
                    n.e("343266"),
                    n.e("965789"),
                    n.e("309004"),
                    n.e("198415"),
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
                    n.e("426792"),
                    n.e("248804"),
                    n.e("318663"),
                    n.e("599990"),
                    n.e("599854"),
                ]).then(n.bind(n, 119357));
                return (n) => (0, s.jsx)(e, { ...n, channel: t, guild: i });
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
        return (0, nd.Pd)(e, iO.A, D.A);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        if (n) return er.ZS;
        if (null != t)
            if (e > t) return er.mU;
            else return er.TR;
        return er.fx;
    }
    handleClick = () => {
        let { channel: e } = this.props,
            t = e.getGuildId();
        (null != t && (0, i5.V)(t) && (0, i7.Ze)(t), this.handleVoiceConnect());
    };
    handleVoiceStatusClick = (e) => {
        let { connected: t, channel: n } = this.props;
        t && (e.stopPropagation(), (0, sW.A)({ channel: n }));
    };
    renderSubtitle() {
        let { channel: e, connected: t } = this.props,
            n = lF(this.props.subtitle)?.subtitle,
            { hovered: i } = this.state;
        return (0, s.jsx)(ra, {
            onClick: this.handleVoiceStatusClick,
            channel: e,
            connected: t,
            subtitle: n,
            hovered: i,
        });
    }
    renderVoiceUsers() {
        let { channel: e, voiceStates: t, collapsed: n, withGuildIcon: i, tabIndex: l } = this.props;
        return (0, s.jsx)(iq.A, {
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
        return !(null != n && n.length > 0) || i ? null : (0, s.jsx)(s4, { channel: e, isConnected: t });
    }
    renderPopout = () => {
        let { channel: e } = this.props,
            { shouldShowGuildVerificationPopout: t } = this.state;
        return t
            ? (0, s.jsx)(ld, { type: lo.VOICE, guildId: e.guild_id, closePopout: this.closeGuildVerificationPopout })
            : null;
    };
    renderOpenChatButton = () => {
        let { channel: e, locked: t, forceShowButtons: n, isSuggestedSection: i } = this.props;
        if (!t)
            return (0, s.jsx)(Y.m, {
                asContainer: !0,
                text: el.intl.string(el.t.ZXxLQg),
                children: (0, s.jsx)(X.D, {
                    className: eO()(er.Xs, n ? er.Tf : null),
                    onClick: () => {
                        (i3.A.updateChatOpen(e.id, !0),
                            (0, lu.iN)(e.id, i ? { source: lc.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0));
                    },
                    "aria-label": el.intl.string(el.t.ZXxLQg),
                    children: (0, s.jsx)(iT.ChatIcon, { size: "xs", color: "currentColor", className: er.gE }),
                }),
            });
    };
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e ? null : (0, s.jsx)("div", { className: er.yW, children: e });
    }
    getTooltipText = () => {
        let { connected: e } = this.props;
        return this.isFull() && !e ? el.intl.string(el.t.rZfiNq) : null;
    };
    render() {
        let {
                channel: e,
                selected: t,
                connected: n,
                unread: i,
                resolvedUnreadSetting: l,
                mentionCount: r,
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
            G = _ || S,
            j = (0, s.jsxs)("li", {
                ref: this.ref,
                className: eO()(this.getModeClass(), { [er.r9]: this.isDisabled(), [er.fy]: _ }),
                "data-dnd-name": (0, tZ.m1)(e, ls.default, lC.A),
                children: [
                    _ &&
                        (0, s.jsxs)(s.Fragment, {
                            children: [
                                (0, s.jsx)("div", { className: er.UQ }),
                                (0, s.jsx)("div", { className: er.l0 }),
                            ],
                        }),
                    (0, s.jsx)("div", {
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        children: (0, s.jsx)(i1.Y, {
                            targetElementRef: this.channelItemRef,
                            position: "right",
                            renderPopout: this.renderPopout,
                            onRequestClose: this.closeGuildVerificationPopout,
                            spacing: 17,
                            shouldShow: b,
                            children: () =>
                                (0, s.jsx)(Y.m, {
                                    text: this.getTooltipText(),
                                    children: (0, s.jsxs)(nP.Ay, {
                                        ref: this.channelItemRef,
                                        className: er.Ki,
                                        iconClassName: eO()({ [er.Gj]: A || x || G }),
                                        hasActiveEvent: A,
                                        channel: e,
                                        selected: !C && t,
                                        connected: n,
                                        unread: n ? i : void 0,
                                        resolvedUnreadSetting: l,
                                        mentionCount: r,
                                        locked: a,
                                        subtitle: this.renderSubtitle(),
                                        onClick: () => {
                                            this.handleClick();
                                        },
                                        onContextMenu: (e) => {
                                            this.handleContextMenu(e);
                                        },
                                        connectDragPreview: u,
                                        isFavoriteSuggestion: C,
                                        "aria-label": (0, i9.Ay)({
                                            channel: e,
                                            unread: i,
                                            mentionCount: r,
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
                                                (0, s.jsxs)(s.Fragment, {
                                                    children: [
                                                        this.renderAcceptSuggestionButton(),
                                                        this.renderRemoveSuggestionButton(),
                                                    ],
                                                }),
                                            !C &&
                                                (0, s.jsxs)(s.Fragment, {
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
            m && (j = c(j)),
            h && (j = o(d(j))),
            g &&
                (j = (0, s.jsx)(nt.A, {
                    childRef: this.ref,
                    tutorialId: "voice-conversations",
                    position: "right",
                    offsetX: -20,
                    children: j,
                })),
            j
        );
    }
}
let rd = B((0, i2.F)(ro));
function rc(e) {
    let {
            guild: t,
            channel: n,
            disableSorting: i,
            isFavoriteCategory: l,
            selected: r,
            collapsed: a,
            voiceStates: o,
        } = e,
        d = (0, u.cf)([n4.Ay], () => ({ unread: n4.Ay.hasUnread(n.id), mentionCount: n4.Ay.getMentionCount(n.id) })),
        c = (0, u.bG)([V.Ay], () => V.Ay.resolveUnreadSetting(n)),
        h = (0, u.cf)([M.A, ll.A, O.A], () => {
            let e = M.A.getChannel(n.parent_id),
                l = ll.A.getCheck(n.guild_id);
            return {
                canManageChannel: O.A.can(w.xBc.MANAGE_CHANNELS, n),
                canReorderChannel:
                    !0 !== i &&
                    ((0, y.ai)(t.id) ||
                        (null != e ? O.A.can(w.xBc.MANAGE_CHANNELS, e) : O.A.can(w.xBc.MANAGE_CHANNELS, t))),
                canMoveMembers: O.A.can(w.xBc.MOVE_MEMBERS, n),
                locked: !O.A.can(w.xBc.CONNECT, n),
                bypassLimit: O.A.can(w.xBc.MOVE_MEMBERS, n),
                unverifiedAccount: !l.canChat,
            };
        }),
        m = (0, u.bG)([iO.A], () => iO.A.hasVideo(n.id)),
        { enabled: g } = (0, sq.mf)({ guildId: t.id, location: "VoiceChannel" }),
        A = (0, lE.Ay)(n),
        f = (0, u.yK)(
            [re.A, s8.A, lA.default],
            () => {
                if (null == o || 0 === o.length) return [];
                let e = lA.default.getId(),
                    t = [];
                for (let { user: i } of o)
                    for (let l of i.id === e ? re.A.getActivities() : s8.A.getActivities(i.id, n.guild_id))
                        !(0, sK.N)(l) || (0, sz.A)(l) || null == l.name || t.includes(l.name) || t.push(l.name);
                return t;
            },
            [o, n.guild_id],
        ),
        p = (0, tZ.Ay)(n),
        C = (0, tV.Qs)(n.id),
        E = (0, u.bG)([sY.A], () => sY.A.getStartTime(n), [n]),
        { isSubscriptionGated: x, needSubscriptionToAccess: N } = (0, iM.A)(n.id),
        _ = (0, sX.A)(),
        S = (0, u.bG)([V.Ay], () => V.Ay.isFavorite(t.id, n.id)),
        I = e.connected || _?.channelId === n.id,
        { enableHighlight: b, enableWaveformIcon: G } = (0, na.b)(t.id, "VoiceChannel"),
        j = null != o && o.length > 0,
        v = b && j,
        R = G && j,
        T = lL({
            channel: n,
            isChannelSelected: r,
            isChannelCollapsed: a,
            voiceStates: o,
            isSubscriptionGated: x,
            needSubscriptionToAccess: N,
            enableConnectedUserLimit: !0,
            enableActivities: !0,
        }),
        L = I && null == T;
    return (0, s.jsx)(rd, {
        channelName: p,
        embeddedApps: A,
        nonEmbeddedActivityNames: f,
        embeddedActivityType: w.$pd.PLAYING,
        video: m,
        hasActiveEvent: null != C,
        isSubscriptionGated: x,
        needSubscriptionToAccess: N,
        ...d,
        ...h,
        ...e,
        connected: I,
        isFavoriteSuggestion: l && !S,
        forceShowButtons: L,
        channelInfo: T,
        resolvedUnreadSetting: c,
        hasChannelInfo: null != T,
        hasStartTime: null != E,
        voiceChannelStartTime: E,
        shouldHighlightChannel: v,
        shouldUseAnimatedWaveform: R,
        guildRoomsEnabled: g,
    });
}
n(131955);
function ru(e) {
    return (
        h.A.modules.channels.NAME_LINE_HEIGHT.resolve({ density: e }) +
        2 * h.A.space.SPACE_XXS.resolve({ density: e }) +
        2
    );
}
class rh extends r.PureComponent {
    static contextType = d.nC;
    _list = null;
    unreadTopRef = r.createRef();
    unreadBottomRef = r.createRef();
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
        (this.setState({ initialized: !0 }), (0, t_.Ei)(this.getVisibleChannels));
    }
    componentWillUnmount() {
        this.updateChannelListScroll.cancel();
    }
    componentDidUpdate(e, t) {
        let { scrollToChannel: n, guildId: i, selectedChannelId: l } = this.props,
            { initialized: s } = this.state,
            { scrollTop: r } = tC.A.getGuildDimensions(i);
        (null != n
            ? (this.scrollToChannel(n), E.A.clearChannelListScrollTo(i))
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
                    a = s.threadOffset * ru(r);
                l.scrollIntoViewRect({ start: e + a, end: e + a + ru(r), padding: n, animate: t, callback: i });
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
            if ((0, m.o)(s) && s.section >= this.props.guildChannels.favoritesSectionNumber) {
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
                if (i < tx.bK || e.isPlaceholderRow(i, l)) return !1;
                let s = e.getChannelFromSectionRow(i, l);
                if (null == s) return !1;
                let { channel: r, category: a } = s;
                return (
                    !!(0, tp.ig)(r.record.type) &&
                    (!a.isCollapsed || !a.isMuted) &&
                    !r.isMuted &&
                    !!t.isItemVisible(i, l, !0) &&
                    (0, ts.Y)(r.record)
                );
            })
        );
    }
    updateChannelListScroll = (0, a.throttle)((e) => {
        E.A.updateChannelListScroll(this.props.guildId, e, this.getVisibleChannels());
    }, 100);
    getSectionHeight = (e) => {
        let { guild: t, guildChannels: n, density: i } = this.props,
            l = "compact" === i ? 8 : 12;
        if (e === tx.PU) return l;
        if (e === tx.bK) return t.features.has(w.GuildFeatures.HUB) ? 0 : l;
        if (e === n.voiceChannelsSectionNumber) {
            let t = n.getCategoryFromSection(e);
            if (null == t || t.isEmpty()) return 0;
            if (t.isCollapsed) return 49;
            let i = n.getChannelFromSectionRow(e, 0)?.channel;
            return null == i || i.record.type === w.rbe.GUILD_CATEGORY ? 9 : 25;
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
            let { hasDivider: d, canHaveVoiceSummary: c } = nc(n, r, t),
                u = d ? (a ? 9 : h.A.space.SPACE_SM.resolve({ density: o ?? "default" })) : 0;
            if (!c || t === tx.PU) return u;
            let m = n.getNamedCategoryFromSection(t);
            return null == m ||
                !(function (e) {
                    let { category: t, voiceStates: n, selectedChannelId: i, selectedVoiceChannelId: l } = e;
                    return (
                        (function (e) {
                            let { category: t, voiceStates: n, selectedChannelId: i, selectedVoiceChannelId: l } = e;
                            return !0 !== L.A.isCollapsed(t.record.id)
                                ? []
                                : t.getChannelRecords().filter((e) => {
                                      if (!O.A.can(w.xBc.VIEW_CHANNEL, e)) return !1;
                                      let t = n[e.id] ?? [];
                                      return e.id !== l && e.id !== i && t.length > 0;
                                  });
                        })({ category: t, selectedChannelId: i, selectedVoiceChannelId: l, voiceStates: n }).length > 0
                    );
                })({ category: m, selectedChannelId: l, selectedVoiceChannelId: s, voiceStates: i })
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
            a = ru(r);
        if (e === tx.PU) {
            let e = n.getGuildActionSection();
            return e.isEmpty()
                ? 0
                : e.getRow(t) === tB.n.GUILD_PREMIUM_PROGRESS_BAR
                  ? e.getRows().length > 1
                      ? 69
                      : 57
                  : e.getRow(t) === tB.n.GUILD_ONBOARDING_SETUP_PROGRESS
                    ? e.getRows().length > 1
                        ? 63
                        : 51
                    : a;
        }
        if (n.isPlaceholderRow(e, t)) return 0;
        let o = n.getChannelFromSectionRow(e, t);
        if (null == o) return 0;
        let { channel: d, category: c } = o;
        if (d.record.type === w.rbe.GUILD_CATEGORY) return 40;
        for (let e of d.threadIds) {
            let { density: t = "default" } = this.props;
            a += ru(t);
            let n = i[d.id];
            null != n && n.length > 0 && (a += s === e ? 32 * n.length : 32);
        }
        if (d.record.isGuildVoice()) {
            let e = i[d.id];
            if (null != e && e.length > 0) {
                let t = 32 * e.length;
                if (
                    (d.isCollapsed || c.isCollapsed ? (t = 32) : (0, eL.Ln)(d.record) && (t += 32),
                    (a += t + h.A.space.SPACE_XS.resolve({ density: r })),
                    !d.isCollapsed && !c.isCollapsed)
                ) {
                    let { enableHangoutWindow: e } = (0, eR.kY)({
                        guildId: d.record.guild_id,
                        location: "ChannelList",
                    });
                    e && ((0, ey.lr)(d.record) ? (a += 134) : s === d.id && (a += 44));
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
        (null != n && s.includes(n) && (l = (0, eM.xb)(t)), (0, eM.DD)(e.id, s, l));
    };
    renderSection = (e) => {
        let { section: t } = e,
            {
                guildChannels: n,
                guildChannelsVersion: i,
                guild: l,
                selectedChannelId: r,
                disableManageChannels: a,
            } = this.props;
        return (0, s.jsx)(
            ns,
            {
                sectionIndex: t,
                guild: l,
                guildChannels: n,
                guildChannelsVersion: i,
                selectedChannelId: r,
                disableManageChannels: a,
            },
            (function (e, t) {
                switch (e) {
                    case tx.PU:
                        return "hoisted-spacer";
                    case tx.bK:
                        return "uncategorized-spacer";
                    case tx.HP:
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
                selectedChannelId: a,
                selectedVoiceChannel: o,
                selectedVoiceChannelId: d,
                guildChannels: c,
                voiceStates: u,
                disableManageChannels: h,
                stageChannelSpeakerVoiceStates: m,
                optInEnabled: g,
                withGuildIcon: A,
            } = this.props;
        if (t === tx.PU) {
            let e = c.getGuildActionSection(),
                t = e.getRow(n);
            if (null == t) return null;
            switch (t) {
                case tB.n.GUILD_HUB_HEADER_OPTIONS:
                    return (0, s.jsx)(
                        eT.A,
                        { guild: i, channel: tE.Ay.getDefaultChannel(i.id) },
                        tB.n.GUILD_HUB_HEADER_OPTIONS,
                    );
                case tB.n.GUILD_PREMIUM_PROGRESS_BAR:
                    let l = e.getRows();
                    return (0, s.jsx)(tl, { guild: i, withMargin: l.length > 1 }, tB.n.GUILD_PREMIUM_PROGRESS_BAR);
                case tB.n.GUILD_SPACE:
                    return (0, s.jsx)(ev, { guild: i, selected: a === et.VV.GUILD_SPACE }, tB.n.GUILD_SPACE);
                case tB.n.GUILD_HOME:
                    return (0, s.jsx)(it, { guild: i, selected: a === et.VV.GUILD_HOME }, tB.n.GUILD_HOME);
                case tB.n.GUILD_SCHEDULED_EVENTS:
                    return (0, s.jsx)(
                        sF,
                        { guild: i, selected: a === tB.n.GUILD_SCHEDULED_EVENTS },
                        tB.n.GUILD_SCHEDULED_EVENTS,
                    );
                case tB.n.GUILD_ROLE_SUBSCRIPTIONS:
                    return (0, s.jsx)(
                        iC,
                        { guild: i, selected: a === et.VV.ROLE_SUBSCRIPTIONS },
                        tB.n.GUILD_ROLE_SUBSCRIPTIONS,
                    );
                case tB.n.GUILD_SHOP:
                    return (0, s.jsx)(iR, { guild: i, selected: a === et.VV.GUILD_SHOP }, tB.n.GUILD_SHOP);
                case tB.n.GUILD_GAME_SHOP:
                    return (0, s.jsx)(n3, { guild: i, selected: a === et.VV.GAME_SHOP }, tB.n.GUILD_GAME_SHOP);
                case tB.n.GUILD_VIBEGRATIONS:
                    return (0, s.jsx)(nx, { guild: i, selected: a === et.VV.VIBEGRATIONS }, tB.n.GUILD_VIBEGRATIONS);
                case tB.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
                    return (0, s.jsx)(io, { guild: i });
                case tB.n.GUILD_ONBOARDING_SETUP_PROGRESS:
                    return (0, s.jsx)(iA, { guild: i }, tB.n.GUILD_ONBOARDING_SETUP_PROGRESS);
                case tB.n.CHANNELS_AND_ROLES:
                    return (0, s.jsx)(
                        n8,
                        { guild: i, selected: a === et.VV.CHANNEL_BROWSER || a === et.VV.CUSTOMIZE_COMMUNITY },
                        tB.n.CHANNELS_AND_ROLES,
                    );
                case tB.n.GUILD_DIRECTORY:
                    return (0, s.jsx)(
                        nw,
                        { guild: i, selectedChannelId: a, disableManageChannels: h },
                        tB.n.GUILD_DIRECTORY,
                    );
                case tB.n.GUILD_MOD_DASH_MEMBER_SAFETY:
                    return (0, s.jsx)(
                        eE,
                        { guild: i, selected: a === et.VV.MEMBER_SAFETY },
                        tB.n.GUILD_MOD_DASH_MEMBER_SAFETY,
                    );
                case tB.n.GUILD_BOOSTS:
                    return (0, s.jsx)(e$, { guildId: i.id, selected: a === et.VV.GUILD_BOOSTS }, tB.n.GUILD_BOOSTS);
                case tB.n.GAME_SERVERS:
                    return (0, s.jsx)(eh, { guildId: i.id, selected: a === et.VV.GAME_SERVERS }, tB.n.GAME_SERVERS);
                case tB.n.GAME_SERVERS_EMPTY:
                    return (0, s.jsx)(
                        ea,
                        { guildId: i.id, selected: a === et.VV.GAME_SERVERS },
                        tB.n.GAME_SERVERS_EMPTY,
                    );
                case tB.n.GUILD_OFFICIAL_MESSAGES:
                    return (0, s.jsx)(
                        ic,
                        { guild: i, selected: a === et.VV.GUILD_OFFICIAL_MESSAGES },
                        tB.n.GUILD_OFFICIAL_MESSAGES,
                    );
                default:
                    return null;
            }
        }
        if (c.isPlaceholderRow(t, n)) return null;
        let f = c.getChannelFromSectionRow(t, n);
        if (null == f) return null;
        let { category: p, channel: C } = f,
            E = p instanceof tx.xu,
            x = C.record,
            N = `${t}${C.id}`;
        switch (x.type) {
            case w.rbe.GUILD_ANNOUNCEMENT:
            case w.rbe.GUILD_TEXT:
            case w.rbe.GUILD_FORUM:
            case w.rbe.GUILD_MEDIA:
            case w.rbe.DM:
            case w.rbe.GROUP_DM:
            case w.rbe.GUILD_APP:
                return (0, s.jsxs)(
                    r.Fragment,
                    {
                        children: [
                            (0, s.jsx)(sh, {
                                channel: x,
                                guild: i,
                                position: C.position,
                                selected: a === C.id,
                                muted: C.isMuted,
                                subtitle: C.subtitle,
                                disableManageChannels: h,
                                canBeNewChannel: g && t === c.recentsSectionNumber,
                                isFavoriteCategory: E,
                                isSuggestedSection: t === c.recentsSectionNumber,
                            }),
                            C.threadCount > 0
                                ? (0, s.jsx)(i0, {
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
            case w.rbe.GUILD_STAGE_VOICE:
                return (0, s.jsx)(
                    lO,
                    {
                        channel: x,
                        guild: i,
                        position: C.position,
                        selected: a === C.id,
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
            case w.rbe.GUILD_VOICE:
                return (0, s.jsx)(
                    rc,
                    {
                        channel: x,
                        guild: i,
                        position: C.position,
                        selected: a === C.id,
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
            case w.rbe.GUILD_STORE:
                return (0, s.jsx)(lw, { channel: x, guild: i, position: C.position, selected: a === C.id }, N);
            case w.rbe.GUILD_CATEGORY:
                if (t !== c.voiceChannelsSectionNumber) return null;
                return (0, s.jsx)(ne, { channel: x }, `readonly-${x.id}`);
            case w.rbe.PUBLIC_THREAD:
            case w.rbe.PRIVATE_THREAD:
            case w.rbe.ANNOUNCEMENT_THREAD:
                return (0, s.jsx)(
                    sh,
                    {
                        channel: x,
                        guild: i,
                        position: C.position,
                        selected: a === C.id,
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
                selectedChannelId: r,
                selectedVoiceChannelId: a,
                optInEnabled: o,
                guildId: d,
            } = this.props;
        return (0, s.jsx)(
            nh,
            {
                guildId: d,
                guildChannels: n,
                guildChannelsVersion: i,
                sectionIndex: t,
                voiceStates: l,
                selectedChannelId: r,
                selectedVoiceChannelId: a,
                optInEnabled: o,
            },
            (function (e, t, n) {
                if (e === t.voiceChannelsSectionNumber) return "voice-channels-button";
                let { hasDivider: i, canHaveVoiceSummary: l } = nc(t, n, e);
                return `section-footer-${e}${i ? "-divider" : ""}${l ? "-voice-summary" : ""}`;
            })(t, n, o),
        );
    };
    renderTopUnread() {
        let { topMention: e, bottomUnread: t, bottomMention: n, isUnreadVisible: i } = this.state,
            { guildId: l, guildChannels: r, guildChannelsVersion: a } = this.props;
        return (0, s.jsx)("div", {
            className: nl.Eo,
            children: (0, s.jsx)(sB, {
                ref: this.unreadTopRef,
                textUnread: el.intl.string(el.t.FCRiT3),
                textMention: el.intl.string(el.t["8zH0LJ"]),
                hide: null == e && (i || null != t || null != n),
                className: nl.Vq,
                barClassName: nl.bu,
                guildId: l,
                guildChannels: r,
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
        return (0, s.jsx)(sB, {
            reverse: !0,
            ref: this.unreadBottomRef,
            textUnread: el.intl.string(el.t.FCRiT3),
            textMention: el.intl.string(el.t["8zH0LJ"]),
            hide: null == i && l,
            className: nl.di,
            barClassName: nl.bu,
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
        if (e !== tx.PU) {
            if (null == t)
                return e === tx.HP
                    ? "favorites-header"
                    : e === n.recentsSectionNumber
                      ? "recents-header"
                      : e === n.voiceChannelsSectionNumber
                        ? "voice-channels"
                        : e === tx.bK
                          ? "uncategorized-header"
                          : n.getNamedCategoryFromSection(e)?.id;
            if (!n.isPlaceholderRow(e, t)) return n.getChannelFromSectionRow(e, t)?.channel?.id;
        }
    };
    renderList() {
        let { guildChannels: e, guildBanner: t, selectedGuildId: n, density: i } = this.props,
            l = {};
        (0, y.ai)(n) && (l["data-favorites"] = !0);
        let { ref: r, ...a } = this.context,
            o = 0;
        null != t && (o = 84);
        let d = "compact" === i ? 8 : 12;
        return (0, s.jsx)(g.sk, {
            children: (t) =>
                (0, s.jsx)(
                    A.OZ,
                    {
                        ref: this.setListRef,
                        className: nl.XG,
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
                        innerAriaLabel: el.intl.string(el.t.OGiMXJ),
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
        if (!tA.A.shouldShow("voice-conversations")) return;
        let { guildChannels: e } = this.props,
            t = e.getFirstVoiceChannel();
        if (null == t) return void tg.X8("voice-conversations");
        let n = this._list;
        if (null != n)
            for (let { section: e, row: i } of this.getSectionRowsFromChannel(t.id))
                n.isItemVisible(e, i) || tg.X8("voice-conversations");
    };
    render() {
        let { guildChannels: e, guildChannelsVersion: t, showNewUnreadsBar: n } = this.props;
        return (0, s.jsx)(z.V0, {
            children: (i) =>
                (0, s.jsx)(f.F, {
                    component: (0, s.jsx)(p.A, {
                        children: (0, s.jsx)(f.H, { id: i, children: el.intl.string(el.t.OGiMXJ) }),
                    }),
                    children: n
                        ? (0, s.jsxs)(r.Fragment, {
                              children: [
                                  (0, s.jsx)("div", {
                                      className: nl.Eo,
                                      children: (0, s.jsx)(sO, {
                                          position: "top",
                                          guildChannels: e,
                                          guildChannelsVersion: t,
                                          jumpToVoiceChannels: this.jumpToVoiceChannels,
                                          jumpToChannel: this.jumpToChannel,
                                      }),
                                  }),
                                  this.renderList(),
                                  (0, s.jsx)(sO, {
                                      position: "bottom",
                                      guildChannels: e,
                                      guildChannelsVersion: t,
                                      jumpToVoiceChannels: this.jumpToVoiceChannels,
                                      jumpToChannel: this.jumpToChannel,
                                  }),
                              ],
                          })
                        : (0, s.jsxs)(r.Fragment, {
                              children: [this.renderTopUnread(), this.renderList(), this.renderBottomUnread()],
                          }),
                }),
        });
    }
}
let rm = (e) => {
    let { guildId: t, selectedChannelId: n, selectedVoiceChannelId: i } = e,
        l = (0, u.bG)([k.Ay], () => k.Ay.keyboardModeEnabled),
        { analyticsLocations: a } = (0, K.Ay)(F.A.GUILD_CHANNEL_LIST),
        o = (0, u.bG)([M.A], () => M.A.getChannel(n)),
        h = (0, u.bG)([M.A], () => M.A.getChannel(i)),
        m = (0, u.bG)([P.A], () => P.A.getGuildId()),
        g = (0, eU.jN)(t),
        A = r.useRef(null),
        f = r.useCallback((e, t) => {
            let n = A.current;
            null != n &&
                (w.Ut1.test(t) || (0, et.jq)(t)
                    ? n.scrollToChannel(t, !1, 16, () => {
                          requestAnimationFrame(() => document.querySelector(e)?.focus());
                      })
                    : document.querySelector(e)?.focus());
        }, []),
        p = r.useCallback(
            () =>
                new Promise((e) => {
                    let t = A.current;
                    if (null == t) return e();
                    t.scrollTo(0, () => requestAnimationFrame(() => e()));
                }),
            [],
        ),
        C = r.useCallback(
            () =>
                new Promise((e) => {
                    let t = A.current;
                    if (null == t) return e();
                    t.scrollTo(Number.MAX_SAFE_INTEGER, () => requestAnimationFrame(() => e()));
                }),
            [],
        ),
        E = (0, c.Ay)({
            id: "channels",
            defaultFocused: n ?? void 0,
            isEnabled: l,
            setFocus: f,
            scrollToStart: p,
            scrollToEnd: C,
        }),
        N = E.setFocus;
    r.useEffect(() => {
        null != n && N(n);
    }, [n, N]);
    let _ = (function (e) {
        let [t] = (0, u.bG)(
            [tu.A, M.A, tr.A],
            () => {
                let t;
                return [
                    (t = (0, y.ai)(e)
                        ? tc.default
                              .keys(tr.A.getFavoriteChannels())
                              .map((e) => M.A.getChannel(e))
                              .filter(to.Vq)
                              .filter((e) => e.isGuildStageVoice())
                        : tu.A.getChannels(e)).reduce((e, t) => {
                        let n = tu.A.getMutableParticipants(t.id, th.ip.SPEAKER);
                        return ((e[t.id] = n.filter((e) => e.type === th.wY.VOICE).map(tm)), e);
                    }, {}),
                    t.reduce((e, t) => {
                        let { id: n } = t;
                        return e + tu.A.getParticipantsVersion(n);
                    }, 0),
                ];
            },
            [e],
            td.D,
        );
        return t;
    })(t);
    return (0, s.jsx)(K.f5, {
        value: a,
        children: (0, s.jsx)(x.A, {
            section: w.JJy.GUILD_CHANNEL_LIST,
            children: (0, s.jsxs)(d.hD, {
                navigator: E,
                children: [
                    (0, s.jsx)(tf.q, { containerRef: E.containerProps.ref, itemType: H }),
                    (0, s.jsx)(rh, {
                        ...e,
                        listNavigator: E,
                        ref: A,
                        selectedChannel: o,
                        selectedVoiceChannel: h,
                        stageChannelSpeakerVoiceStates: _,
                        selectedGuildId: m,
                        optInEnabled: g,
                    }),
                ],
            }),
        }),
    });
};
function rg(e) {
    let t = (function (e) {
            var t;
            let n,
                i,
                l =
                    ((t = e.id),
                    (n = (0, tP.A)(t)),
                    (i = (0, tV.Ay)(t)),
                    !(0, u.bG)(
                        [D.A],
                        () => {
                            if (null == t) return !1;
                            let e = D.A.getGuild(t);
                            return e?.features.has(w.GuildFeatures.HUB) ?? !1;
                        },
                        [t],
                    ) &&
                        (n || i.length > 0)),
                s = (0, tv.W)(e.id),
                r = (0, tO.vz)(e.id),
                a = (0, tb.r)(e),
                o = (0, tH.jz)(e),
                d = (0, tL.d)(e.id),
                c = (0, tS.bG)([ty.h], () => ty.h.getNewMemberActions(e.id), [e.id]),
                h = (0, tI.by)(e, "useGuildActionRows"),
                m = (0, tD.A)(e.id),
                g = (0, tT.jY)(e.id),
                A = (0, tU.A)(e.id),
                { showSetupProgressRow: f } = (0, tM.D)(`useGuildActionRows${A ? "" : "-DISABLED"}`),
                p = (0, tR.fw)(e.id),
                C = (0, eb.Uq)(e.id, "useGuildActionRows"),
                E = [],
                x = e.features.has(w.GuildFeatures.HUB),
                N = e.features.has(w.GuildFeatures.COMMUNITY),
                _ = e.features.has(w.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
                S = (0, e4.A)(e.id),
                I = te(e),
                b = (0, tw.bW)(e.id, "useGuildActionRows"),
                G = (0, tG.C$)(e.id, "useGuildActionRows"),
                j = e.features.has(w.GuildFeatures.GAME_SERVERS),
                v = (0, tj.N)("useGuildActionRows"),
                [R] = (0, J.kn)(G && v && !j ? [W.M.EMPTY_GAME_SERVER_TAB] : [], void 0, !0);
            return (
                x && E.push(tB.n.GUILD_HUB_HEADER_OPTIONS),
                A && f
                    ? E.push(tB.n.GUILD_ONBOARDING_SETUP_PROGRESS)
                    : !g && d && m && null != c && c.length > 0
                      ? E.push(tB.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR)
                      : e.premiumProgressBarEnabled && I > 0 && E.push(tB.n.GUILD_PREMIUM_PROGRESS_BAR),
                !x && d && E.push(tB.n.GUILD_HOME),
                C && E.push(tB.n.GUILD_SPACE),
                l && E.push(tB.n.GUILD_SCHEDULED_EVENTS),
                !x && N && E.push(tB.n.CHANNELS_AND_ROLES),
                r && E.push(tB.n.GUILD_ROLE_SUBSCRIPTIONS),
                a && E.push(tB.n.GUILD_SHOP),
                o && E.push(tB.n.GUILD_GAME_SHOP),
                ((p && (N || _)) || (s && e.features.has(w.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL))) &&
                    E.push(tB.n.GUILD_MOD_DASH_MEMBER_SAFETY),
                S && E.push(tB.n.GUILD_BOOSTS),
                b && E.push(tB.n.GUILD_OFFICIAL_MESSAGES),
                G && (j ? E.push(tB.n.GAME_SERVERS) : null != R && E.push(tB.n.GAME_SERVERS_EMPTY)),
                h && E.push(tB.n.GUILD_VIBEGRATIONS),
                E
            );
        })(e.guild),
        n = (0, u.cf)([tN.A], () => tN.A.getGuild(e.guildId, { guildActionRows: t })),
        { density: i } = (0, C.wR)();
    return (0, s.jsx)(rm, { ...e, ...n, density: i });
}
