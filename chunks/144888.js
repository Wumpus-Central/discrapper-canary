(n.d(t, { B: () => rm, i: () => rh }), n(321073));
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
    L = n(770376),
    M = n(924985),
    T = n(734057),
    U = n(769765),
    D = n(71393),
    O = n(576705),
    P = n(967198),
    w = n(543465),
    V = n(652215);
let H = "DRAGGABLE_GUILD_CHANNEL";
function k(e) {
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
                    i = T.A.getChannel(n.id);
                if (null == i) return !1;
                let l = (0, b.QO)(T.A.getChannel(n.id), n.position, e.channel, e.position, n.channelList);
                if (null == l) return !1;
                if ((0, y.ai)(P.A.getGuildId())) return !0;
                if (w.Ay.isFavorite(n.guildId, e.channel.id)) return !1;
                let s = D.A.getGuild(n.guildId);
                if (null == s) return !1;
                let r = T.A.getChannel(l.parentId),
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
                                (0, L.A)() &&
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
                            return t.type === V.rbe.GUILD_CATEGORY && null != a[t.id] && 0 === a[t.id].length
                                ? !!(0, y.ai)(r) ||
                                      (O.A.can(V.xBc.MANAGE_CHANNELS, t) && O.A.can(V.xBc.VIEW_CHANNEL, t))
                                : !M.A.isCollapsed(t.parent_id);
                        }),
                        guildId: i,
                    };
                },
            },
            (e) => ({ connectChannelDragSource: e.dragSource(), connectDragPreview: e.dragPreview() }),
        )(e),
    );
}
var B = n(775602),
    F = n(793574),
    K = n(688810),
    z = n(915089),
    W = n(554146),
    Y = n(866665),
    X = n(939249),
    q = n(789645),
    J = n(508770),
    Z = n(687966),
    $ = n(131607),
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
        [l, a] = (0, $.ww)([W.M.GAME_SERVER_HOSTING_NEW_BADGE], t),
        o = l === W.M.GAME_SERVER_HOSTING_NEW_BADGE,
        d = r.useCallback(() => {
            (a(en.i.USER_DISMISS), (0, ee.pX)(V.BVt.CHANNEL(t, et.VV.GAME_SERVERS)));
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
                        children: (0, s.jsx)(J.E, { type: "new", variant: "brand" }),
                    }),
            ],
        });
    return (0, s.jsx)(Q.G, {
        className: er.Ki,
        id: `game-server-empty-${t}`,
        renderIcon: (e) => (0, s.jsx)(Z.GameControllerIcon, { size: "md", className: e, color: "currentColor" }),
        text: el.intl.string(ei.default.vCzwM7),
        selected: i,
        onClick: d,
        trailing: u,
    });
});
var eo = n(361158),
    ed = n(270533),
    ec = n(186111);
let eu = r.memo(function (e) {
    let { guildId: t, selected: n } = e,
        i = (0, S.useHasAnyModalOpen)(),
        l = (0, u.bG)([ec.A], () => ec.A.hasLayers()),
        a = (0, eo.xr)((e) => e.fullScreenLayers.length > 0),
        [o, d] = (0, $.ww)([W.M.GAME_SERVER_HOSTING_NEW_BADGE], t),
        c = o === W.M.GAME_SERVER_HOSTING_NEW_BADGE,
        [h, m] = (0, $.ww)(i || l || a || !c ? [] : [W.M.GAME_SERVER_HOSTING_NEW_COACHMARK], t),
        g = r.useCallback(
            (e) => {
                (d(e), m(e));
            },
            [d, m],
        ),
        A = r.useCallback(() => {
            (g(en.i.USER_DISMISS), (0, ee.pX)(V.BVt.CHANNEL(t, et.VV.GAME_SERVERS)));
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
                    (0, s.jsx)(Z.GameControllerIcon, { size: "md", className: e, color: "currentColor" }),
                text: el.intl.string(ei.default.vCzwM7),
                selected: n,
                onClick: A,
                trailing: c ? (0, s.jsx)(J.E, { type: "new", variant: "brand" }) : null,
            }),
            p && C(),
        ],
    });
});
var eh = n(177953),
    em = n(812993),
    eg = n(624458),
    eA = n(844944),
    ef = n(513461),
    ep = n(663997),
    eC = n(221950);
function eE(e) {
    let { guild: t, selected: n } = e,
        i = (0, u.bG)([O.A], () => O.A.can(V.xBc.KICK_MEMBERS, t)),
        l = (0, u.bG)([eA.A], () => eA.A.getSubmittedGuildJoinRequestTotal(t.id)),
        a = i ? (l ?? 0) : 0;
    r.useEffect(() => {
        i &&
            t.features.has(V.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
            t.features.has(V.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
            eg.A.fetchGuildJoinRequests({ guildId: t.id, status: ef.B5.SUBMITTED, limit: ep.L });
    }, [i, t]);
    let o = r.useCallback(() => {
        (0, eC.aZ)(t.id);
    }, [t.id]);
    return (0, s.jsx)(Q.G, {
        id: `members-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(eh.n, { size: "md", color: "currentColor", className: e }),
        text: el.intl.string(el.t.oclz3Z),
        selected: n,
        onClick: o,
        trailing: a > 0 ? (0, s.jsx)(em.hV, { count: a }) : null,
    });
}
var ex = n(43105),
    eN = n(332837),
    e_ = n(93675),
    eS = n(942857),
    eI = n(313627),
    eb = n(968176),
    eG = n(151098);
function ej(e) {
    let { guild: t, selected: i } = e,
        l = (0, eS.A)(),
        [a, o] = (0, $.kn)(l ? [] : [W.M.GUILD_SPACE_COACHMARK], void 0, !0),
        d = a === W.M.GUILD_SPACE_COACHMARK,
        c = r.useRef(null),
        u = (0, eI.mN)(t),
        h = r.useCallback(() => {
            (o(en.i.USER_DISMISS), (0, ee.pX)(V.BVt.CHANNEL(t.id, et.VV.GUILD_SPACE)));
        }, [t.id, o]),
        m = r.useCallback(() => {
            (o(en.i.TAKE_ACTION), (0, ee.pX)(V.BVt.CHANNEL(t.id, et.VV.GUILD_SPACE)));
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
        A = d ? (0, s.jsx)(J.E, { type: "new", variant: "brand" }) : null,
        f = u
            ? (0, s.jsxs)("div", {
                  className: eG.c,
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
                renderIcon: (e) => (0, s.jsx)(eN.HomeIcon, { size: "md", color: "currentColor", className: e }),
                text: el.intl.string(el.t["04IVMq"]),
                selected: i,
                onClick: h,
                trailing: f,
            }),
            d
                ? (0, s.jsx)(ex.A, {
                      targetElementRef: c,
                      title: el.intl.string(eb.default["+OEqVQ"]),
                      body: el.intl.string(eb.default["BP//Ot"]),
                      graphic: {
                          type: "rive",
                          rive: e_.f,
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
var ev = n(581007),
    eR = n(522435),
    ey = n(285406),
    eL = n(582904),
    eM = n(419534),
    eT = n(395504),
    eU = n(503698),
    eD = n.n(eU),
    eO = n(695366),
    eP = n(104510),
    ew = n(544048),
    eV = n(868652),
    eH = n(379229),
    ek = n(482487),
    eB = n(914732),
    eF = n(828162),
    eK = n(877624),
    ez = n(549996),
    eW = n(25525),
    eY = n(247806);
function eX(e) {
    let { indicator: t } = e;
    if (null == t) return null;
    switch (t.type) {
        case eH.cD.WARNING:
            return (0, s.jsx)(eO.E, { color: h.A.colors.STATUS_WARNING, size: "sm" });
        case eH.cD.UNREAD:
            return (0, s.jsx)(em.hV, { count: t.count });
        default:
            return null;
    }
}
let eq = { animation: { BEG: 0, END: 75 }, LOOP: { BEG: 76, END: 376 } },
    eJ = r.memo(function (e) {
        let { guildId: t, selected: i } = e,
            l = (0, eB.Ay)(t),
            { showHighlight: a, markAsDismissed: o } = (function () {
                let e = (0, ez.c)(eK.C.GUILD_BOOST_TAB_BANNER),
                    t = null != e && "guildBoostTabBanner" === e.properties.properties.oneofKind,
                    [n, i] = (0, $.Cc)(t ? W.M.GUILD_BOOST_TAB_HIGHLIGHT : null, e?.promotionId ?? "");
                return { showHighlight: n === W.M.GUILD_BOOST_TAB_HIGHLIGHT, markAsDismissed: i };
            })(),
            { showNewBadgeOnRow: d, dismissNewBadgeIfShown: c } = (0, ek.A)(
                t,
                l?.indicator != null || l?.popout != null,
            ),
            m = r.useCallback(() => {
                (c(),
                    (0, eV.Zm)(t),
                    (0, eF.A)(t, F.A.GUILD_POWERUPS_CHANNEL_LIST_ROW),
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
                    case eH.o.LEVEL_REACHED:
                        return (0, s.jsx)(ed.HW, { guildId: t, channelRowRef: g, ...l.popout });
                    case eH.o.PERKS_AVAILABLE:
                        return (0, s.jsx)(ed.UB, { guildId: t, channelRowRef: g, ...l.popout });
                    case eH.o.PERKS_PURCHASABLE:
                        return (0, s.jsx)(ed.lw, { guildId: t, channelRowRef: g, ...l.popout });
                    case eH.o.NEW_PERK_AVAILABLE:
                        return (0, s.jsx)(ed.bo, { guildId: t, channelRowRef: g, ...l.popout });
                    case eH.o.BOOST_TO_UNLOCK:
                        return (0, s.jsx)(ed.Gw, { guildId: t, channelRowRef: g, ...l.popout });
                    case eH.o.EXPIRING_PERK:
                        return (0, s.jsx)(ed.Mr, { guildId: t, channelRowRef: g, ...l.popout });
                    case eH.o.GAME_SERVER_HOSTING_AVAILABLE:
                    case eH.o.GAME_SERVER_HOSTING_GUILD_ELIGIBLE:
                        return (0, s.jsx)(ed.jz, { guildId: t, channelRowRef: g, ...l.popout });
                    case eH.o.GAME_SERVER_NEW_GAMES:
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
                    className: eY.kL,
                    id: `skill-trees-${t}`,
                    renderIcon: (e) => (0, s.jsx)(eP._, { size: "md", className: e, color: "currentColor" }),
                    background:
                        x &&
                        (0, s.jsx)("div", {
                            className: eY.Fi,
                            children: (0, s.jsx)(ew.t, {
                                nextScene: null == N ? "animation" : "LOOP",
                                className: eY.UU,
                                sceneSegments: eq,
                                importData: () => n.e("867807").then(n.t.bind(n, 217762, 19)),
                                onScenePlay: I,
                                rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
                            }),
                        }),
                    text: (0, s.jsx)("span", {
                        className: eD()({ [eY.A7]: l?.showUnread === !0 }),
                        children: el.intl.string(eW.default.yv3DJJ),
                    }),
                    selected: i,
                    onClick: m,
                    showUnread: l?.showUnread === !0,
                    trailing: d
                        ? (0, s.jsx)(em.Lp, {
                              text: el.intl.string(el.t.y2b7CA),
                              color: h.A.colors.BACKGROUND_BRAND.css,
                          })
                        : (0, s.jsx)(eX, { indicator: l?.indicator }),
                }),
                E(),
            ],
        });
    });
var eZ = n(202091),
    e$ = n(717421),
    eQ = n(834730),
    e0 = n(442433),
    e1 = n(230135),
    e3 = n(73153);
let e2 = {};
class e9 extends u.Ay.PersistedStore {
    static displayName = "GuildBoostingProgressBarPersistedStore";
    static persistKey = "PremiumGuildProgressBarPersistedStore";
    initialize(e) {
        null != e && (e2 = e);
    }
    getState() {
        return e2;
    }
    getCountForGuild(e) {
        return e2[e];
    }
}
let e5 = new e9(e3.h, {
    APPLIED_GUILD_BOOST_COUNT_UPDATE: function (e) {
        let { guildId: t, premiumCount: n } = e;
        e2 = { ...e2, [t]: n };
    },
    APPLIED_GUILD_BOOST_COUNT_RESET: function () {
        e2 = {};
    },
});
var e7 = n(147925),
    e6 = n(363487),
    e4 = n(568065);
function e8(e) {
    return (0, r.useMemo)(() => {
        if (null == e) return 0;
        let t = e?.features.has(V.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) === !0 ? 0 : V.M2T[V.TVA.TIER_3],
            n = Object.values(e4.sy),
            i = Object.values(e4.YV);
        return (
            n.concat(i).forEach((n) => {
                null == n.includedInLevel && (n.isEnabled?.(e.id) ?? !0) && (t += n.boostPrice);
            }),
            t
        );
    }, [e]);
}
var te = n(196577);
let tt = r.forwardRef((e, t) => {
    let { appliedBoostCount: n, maxBoostCount: i, premiumSubscriberCount: l, className: a } = e,
        o = n >= i,
        d = Math.min((n / i) * 100, 100),
        c = `calc(${d}% - 4px)`,
        [u, h] = (0, e$.z)(
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
            className: te.hQ,
            children: [
                (0, s.jsx)("div", { className: eD()(te.L$, a) }),
                (0, s.jsx)(eZ.animated.div, { className: eD()(te.qB, { [te.mu]: d <= 5 }), style: u }),
                (0, s.jsxs)("div", {
                    className: te.FS,
                    children: [
                        (0, s.jsxs)("div", {
                            className: te.Ui,
                            children: [
                                (0, s.jsx)(eQ.E, {
                                    className: te.Qq,
                                    variant: "text-xs/semibold",
                                    children: el.intl.string(eW.default.NI6Ihe),
                                }),
                                l >= i &&
                                    (0, s.jsx)(eQ.E, {
                                        className: te.Qq,
                                        variant: "text-xs/semibold",
                                        children: "\uD83C\uDF89",
                                    }),
                            ],
                        }),
                        (0, s.jsxs)("div", {
                            className: te.Ui,
                            children: [
                                (0, s.jsx)(eQ.E, {
                                    className: eD()(te.Qq, te.ue),
                                    variant: "text-xs/semibold",
                                    children: o
                                        ? el.intl.formatToPlainString(eW.default["Ehpq+7"], { appliedBoostCount: n })
                                        : el.intl.formatToPlainString(eW.default["/rbPDs"], {
                                              appliedBoostCount: n,
                                              maxBoostCount: i,
                                          }),
                                }),
                                (0, s.jsx)(e7.A, {
                                    width: 12,
                                    height: 12,
                                    direction: e7.A.Directions.RIGHT,
                                    className: eD()(te.Qq, te.ue, te.OW),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
function tn(e) {
    let { guild: t, withMargin: i } = e,
        l = e8(t),
        a = (0, e6.A)(t.id),
        o = r.useCallback(() => {
            (0, eF.A)(t.id, F.A.GUILD_BOOSTING_SIDEBAR_DISPLAY);
        }, [t.id]),
        d = (0, u.bG)([e5], () => e5.getCountForGuild(t.id) ?? 0);
    r.useEffect(() => {
        d !== t.premiumSubscriberCount && (0, e1.u)(t.id, t.premiumSubscriberCount);
    }, [t.id, d, t.premiumSubscriberCount]);
    let c = r.useCallback(
        (e) => {
            a &&
                (0, e0.L3)(e, async () => {
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
        className: eD()(te.kL, { [te.aF]: i }),
        onContextMenu: c,
        children: (0, s.jsx)(tt, {
            appliedBoostCount: d,
            maxBoostCount: l,
            premiumSubscriberCount: t.premiumSubscriberCount,
        }),
    });
}
function ti(e) {
    let { guild: t, withMargin: n } = e;
    return (0, s.jsx)(tn, { guild: t, withMargin: n });
}
tt.displayName = "GuildPowerupsProgressBarUI";
var tl = n(455234),
    ts = n(181079),
    tr = n(607567),
    ta = n(403362),
    to = n(996439),
    td = n(935208),
    tc = n(63995),
    tu = n(518769);
function th(e) {
    let { voiceState: t, userNick: n, user: i } = e,
        l = (0, tr.hz)(t, n);
    return { user: i, voiceState: t, nick: n, comparator: l };
}
var tm = n(787541),
    tg = n(79858),
    tA = n(600761),
    tf = n(95701),
    tp = n(72314),
    tC = n(808728),
    tE = n(297469),
    tx = n(960755),
    tN = n(633965),
    t_ = n(702841),
    tS = n(246338),
    tI = n(41200),
    tb = n(831617),
    tG = n(589603),
    tj = n(496767),
    tv = n(134413),
    tR = n(701785),
    ty = n(101611),
    tL = n(473529),
    tM = n(578484),
    tT = n(71165),
    tU = n(978165),
    tD = n(960253),
    tO = n(770666),
    tP = n(508654),
    tw = n(521427),
    tV = n(871123),
    tH = n(281405),
    tk = n(3026),
    tB = n(821609),
    tF = n(499373),
    tK = n(559106),
    tz = n(847374),
    tW = n(285796),
    tY = n(983851),
    tX = n(914430),
    tq = n(47167),
    tJ = n(485947),
    tZ = n(970853),
    t$ = n(93055),
    tQ = n(349828),
    t0 = n(22277),
    t1 = n(551851),
    t3 = n(391507);
function t2(e) {
    e.stopPropagation();
}
function t9(e) {
    let { label: t, onClick: n, tabIndex: i } = e;
    return (0, s.jsx)(Y.m, {
        text: t,
        children: (0, s.jsx)(X.D, {
            className: eD()(t3.c9, t3.ih),
            onClick: n,
            tabIndex: i,
            role: "button",
            "aria-label": t,
            children: (0, s.jsx)(tF.T, { size: "xs", color: "currentColor", className: t3.hs }),
        }),
    });
}
let t5 = k(
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
                A = (0, u.bG)([w.Ay], () => w.Ay.isChannelMuted(i.getGuildId(), i.id)),
                f = (0, u.bG)([M.A], () => M.A.isCollapsed(i.id)),
                p = (0, u.bG)([O.A], () => O.A.can(V.xBc.MANAGE_CHANNELS, i)),
                C = (0, tq.Ay)(i);
            t = null != h ? (c > h ? t3.mU : t3.TR) : t3.fx;
            let E = r.useCallback(() => {
                    f ? (0, tX.fh)(i.id) : (0, tX.Gv)(i.id);
                }, [i.id, f]),
                x = r.useCallback(
                    (e) => {
                        if ("null" !== i.id) {
                            let t = D.A.getGuild(i.getGuildId());
                            null != t &&
                                (0, e0.L3)(e, async () => {
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
                    let e = i.type === V.rbe.GUILD_CATEGORY ? null : i.type,
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
                    let n = (0, u.bG)([ts.A], () => ts.A.autoAddJoinedThreads),
                        { isAtLimit: i } = (0, t$.ft)();
                    return n &&
                        i &&
                        null != t &&
                        (0, y.ai)(e.getGuildId()) &&
                        e.type === V.rbe.GUILD_CATEGORY &&
                        t.trim().toLowerCase() === tQ.A.toLowerCase()
                        ? { label: el.intl.string(t0.default.WsUrMD), tooltip: el.intl.string(t0.default.dW9Kov) }
                        : null;
                })(i, C),
                I = (0, tZ.A)(i);
            null == I && p && !o && (I = { label: el.intl.string(el.t["fUYU+j"]), perform: N });
            let { role: b, tabIndex: G, ...j } = (0, d.rm)(i.id),
                v = r.useRef(null),
                R = r.useRef(null),
                L = (0, s.jsxs)("li", {
                    className: t,
                    "data-dnd-name": C,
                    children: [
                        (0, s.jsx)(tK.vN, {
                            focusTarget: v,
                            ringTarget: R,
                            offset: { left: 4, right: 4 },
                            children: (0, s.jsxs)("div", {
                                ref: R,
                                className: eD()(t3.Ki, t3.iE, { [t3.yZ]: f, [t3.SU]: A, [t3.vk]: !0 }),
                                onContextMenu: x,
                                children: [
                                    (0, s.jsxs)(X.D, {
                                        innerRef: v,
                                        className: t3.rb,
                                        tabIndex: G,
                                        ...j,
                                        onClick: E,
                                        "aria-label": el.intl.formatToPlainString(el.t.y5l3J2, { categoryName: C }),
                                        "aria-expanded": !f,
                                        focusProps: { enabled: !1 },
                                        children: [
                                            (0, s.jsx)(tJ.A, {
                                                className: t3.UU,
                                                children: (0, s.jsx)(tk.A, { children: C }),
                                            }),
                                            null != _
                                                ? (0, s.jsx)("span", {
                                                      className: t3.qS,
                                                      children: (0, s.jsx)(Y.m, {
                                                          asContainer: !0,
                                                          text: _.tooltip,
                                                          children: (0, s.jsx)(J.E, {
                                                              type: { text: _.label },
                                                              variant: "default",
                                                          }),
                                                      }),
                                                  })
                                                : null,
                                            m
                                                ? null
                                                : (0, s.jsx)(tz.a, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: t3.Kk,
                                                  }),
                                        ],
                                    }),
                                    (0, s.jsx)("div", {
                                        onClick: t2,
                                        className: t3.Y_,
                                        children:
                                            null != I
                                                ? (0, s.jsx)(t9, { label: I.label, onClick: I.perform, tabIndex: G })
                                                : null,
                                    }),
                                ],
                            }),
                        }),
                        g,
                    ],
                });
            return null != a && null != l ? a(l(L)) : L;
        }),
    ),
    t7 = r.memo(function (e) {
        let { name: t, onDismiss: n, className: i } = e;
        return (0, s.jsx)("li", {
            className: eD()(i, t3.fx),
            children: (0, s.jsxs)("div", {
                className: eD()(t3.Ki, t3._V),
                children: [
                    (0, s.jsx)("div", {
                        className: t3.rb,
                        children: (0, s.jsx)(tJ.A, { className: t3.UU, children: (0, s.jsx)(tk.A, { children: t }) }),
                    }),
                    null != n
                        ? (0, s.jsx)(Y.m, {
                              asContainer: !0,
                              text: el.intl.string(el.t["5qNmsU"]),
                              children: (0, s.jsx)(X.D, {
                                  className: t3.r,
                                  onClick: n,
                                  children: (0, s.jsx)(tW.a, { size: "md", color: "currentColor", className: t3.X8 }),
                              }),
                          })
                        : null,
                ],
            }),
        });
    }),
    t6 = r.memo(function (e) {
        let { category: t } = e,
            n = (0, u.bG)([t1.A], () => t1.A.isVoiceCategoryCollapsed(t.guild.id)),
            i = r.useCallback(() => {
                var e, i;
                n
                    ? ((e = t.guild.id), e3.h.dispatch({ type: "VOICE_CATEGORY_EXPAND", guildId: e, expand: !0 }))
                    : ((i = t.guild.id), e3.h.dispatch({ type: "VOICE_CATEGORY_COLLAPSE", guildId: i, expand: !1 }));
            }, [t.guild.id, n]);
        return (0, s.jsx)("div", {
            className: t3.oA,
            children: (0, s.jsx)(tB.$, {
                variant: "secondary",
                fullWidth: !0,
                onClick: i,
                icon: tY.H,
                text: n ? el.intl.string(el.t["/eB9Bg"]) : el.intl.string(el.t.Q2gPWl),
            }),
        });
    }),
    t4 = r.memo(function (e) {
        let { category: t, channel: n } = e,
            i = (0, u.bG)([t1.A], () => t1.A.isVoiceCategoryCollapsed(t.guild.id));
        return i || null == n || n.record.type === V.rbe.GUILD_CATEGORY
            ? i
                ? (0, s.jsx)("li", {
                      className: t3.fx,
                      children: (0, s.jsx)("div", {
                          className: eD()(t3.Ki, t3._V),
                          children: (0, s.jsx)(tJ.A, {
                              className: t3.UU,
                              children: (0, s.jsx)(tk.A, { children: el.intl.string(el.t["V/u9Dy"]) }),
                          }),
                      }),
                  })
                : null
            : (0, s.jsx)("div", { style: { height: 16 } });
    }),
    t8 = r.memo(function (e) {
        let { channel: t } = e,
            n = (0, tq.Ay)(t);
        return (0, s.jsx)("li", {
            className: t3.fx,
            children: (0, s.jsx)("div", {
                className: eD()(t3.Ki, t3._V),
                children: (0, s.jsx)(tJ.A, { className: t3.UU, children: (0, s.jsx)(tk.A, { children: n }) }),
            }),
        });
    });
var ne = n(728321),
    nt = n(244083);
let nn = { origin: { x: -36, y: 7 }, targetWidth: 232, targetHeight: 40, offset: { x: 0, y: 0 } };
var ni = n(906659);
let nl = r.memo(function (e) {
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
        case tE.PU:
            return (0, s.jsx)("div", { style: { height: u } });
        case tE.bK:
            if (n.features.has(V.GuildFeatures.HUB)) return null;
            return (0, s.jsx)("div", { style: { height: u } });
        case tE.HP:
            return (0, s.jsx)(t7, { name: el.intl.string(el.t.mlPMCy) });
        case i.recentsSectionNumber:
            return (0, s.jsx)(t7, { name: el.intl.string(el.t.gKcrqM), onDismiss: d });
        case i.voiceChannelsSectionNumber: {
            let e = i.getCategoryFromSection(i.voiceChannelsSectionNumber);
            if (null == e || e.isEmpty()) return null;
            let n = i.getChannelFromSectionRow(t, 0)?.channel;
            return (0, s.jsxs)(r.Fragment, {
                children: [(0, s.jsx)("div", { className: ni.ts }), (0, s.jsx)(t4, { category: e, channel: n })],
            });
        }
        case tE.TF: {
            let e = i.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, s.jsx)(t5, {
                channel: e.record,
                position: e.position,
                disableManageChannels: o,
                children: (0, s.jsx)(ne.A, {
                    inlineSpecs: nn,
                    arrowAlignment: nt.oN.TOP,
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
var ns = n(104171),
    nr = n(186369),
    na = n(970812),
    no = n(147036);
function nd(e, t, n) {
    return {
        hasDivider:
            !(function (e, t) {
                if (t === tE.PU) {
                    let t = e.getGuildActionSection().getRows();
                    return (
                        (1 === t.length && t[0] === tH.n.GUILD_PREMIUM_PROGRESS_BAR) ||
                        e.getGuildActionSection().isEmpty()
                    );
                }
                return 0 === e.getSections(!1)[t];
            })(e, n) &&
            (n === tE.PU ||
                ((0, y.ai)(e.id)
                    ? n !== e.getSections(!1).length - 1
                    : n === tE.HP ||
                      (!!t && n !== tE.bK && (n === e.recentsSectionNumber || (e.voiceChannelsSectionNumber, !1))))),
        canHaveVoiceSummary:
            n !== tE.PU &&
            n !== tE.HP &&
            n !== tE.bK &&
            n !== e.recentsSectionNumber &&
            n !== e.voiceChannelsSectionNumber,
    };
}
let nc = r.memo(function (e) {
        let { guildChannels: t, guildChannelsVersion: n } = e,
            i = r.useMemo(() => t.getCategoryFromSection(t.voiceChannelsSectionNumber), [t, n]);
        return null == i ? null : (0, s.jsx)(t6, { category: i });
    }),
    nu = r.memo(function (e) {
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
            { hasDivider: h, canHaveVoiceSummary: m } = r.useMemo(() => nd(n, c, t), [n, c, t, i]),
            g = r.useMemo(() => (t === tE.PU ? null : n.getCategoryFromSection(t)), [n, t, i]),
            A = (0, eT.jN)(a),
            { enableWaveformIcon: f } = (0, nr.b)(a, "ChannelListSectionFooter"),
            p = (0, u.yK)(
                [w.Ay],
                () => {
                    if (null == g || !g.isCollapsed || !m) return [];
                    let e = g.getChannelRecords(),
                        t = [];
                    for (let n of e) {
                        if (!n.isGuildVocal()) continue;
                        let e = w.Ay.isChannelOrParentOptedIn(a, n.id);
                        (!A || e) && t.push(n);
                    }
                    return t;
                },
                [g, m, a, A],
            ),
            C = r.useMemo(
                () => (0, no.fK)({ channels: p, selectedChannelId: o, selectedVoiceChannelId: d, voiceStates: l }),
                [p, o, d, l],
            );
        if (t === n.voiceChannelsSectionNumber) return (0, s.jsx)(nc, { guildChannels: n, guildChannelsVersion: i });
        let E = h ? (0, s.jsx)("div", { className: ni.ts }) : null;
        return m && 0 !== C.length
            ? (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsx)("div", {
                          className: ni.qz,
                          children: (0, s.jsx)(ns.Ay, {
                              renderIcon: !0,
                              users: C,
                              max: 8,
                              showUserPopout: !0,
                              guildId: a,
                              renderLeadingIcon: f
                                  ? (e) => (0, s.jsx)(na.A, { color: "currentColor", className: eD()(e, er.Gj) })
                                  : void 0,
                          }),
                      }),
                      E,
                  ],
              })
            : E;
    });
var nh = n(152367),
    nm = n(404373),
    ng = n(855793),
    nA = n(260498),
    nf = n(309010),
    np = n(775946),
    nC = n(248675);
function nE(e) {
    let { guild: t, selected: n } = e,
        i = (0, u.bG)([nA.Ay], () => nA.Ay.getSelectedProjectId(t.id), [t.id]),
        l = (0, u.bG)([nf.Ay], () => nf.Ay.getChannelId(), []),
        r = (0, u.bG)([P.A], () => P.A.getGuildId(), []),
        { hasUnread: a, badgeCount: o } = (0, nm.NC)();
    return (0, s.jsx)(Q.G, {
        id: `conjure-${t.id}`,
        renderIcon: (e) =>
            (0, s.jsx)(nh.D, { size: "custom", color: "currentColor", width: 20, height: 20, className: e }),
        text: el.intl.string(nC.default.uk6jhJ),
        selected: n,
        showUnread: a,
        trailing: o > 0 ? (0, s.jsx)(np.A, { mentionsCount: o }) : void 0,
        background: (0, s.jsx)(ng.X8, { guildId: t.id }),
        onClick: () => {
            let e = l === et.VV.CONJURE && r === t.id;
            (0, ee.pX)(V.BVt.CHANNEL(t.id, et.VV.CONJURE, null == i || e ? null : i));
        },
    });
}
var nx = n(625903),
    nN = n(283973),
    n_ = n(933832),
    nS = n(435183),
    nI = n(698441),
    nb = n(855687),
    nG = n(816662),
    nj = n(446600),
    nv = n(616356);
function nR(e, t, n) {
    return null != t && !!t && !(0, b.ws)(n, e.type);
}
function ny(e, t) {
    return null == t ? er.fx : e > t ? er.mU : er.TR;
}
function nL(e) {
    let { channel: t, disableManageChannels: n, tabIndex: i, forceShowButtons: l, hasChannelInfo: r = !1 } = e;
    return (0, u.bG)(
        [O.A, P.A],
        () =>
            n ||
            (0, y.ai)(P.A.getGuildId()) ||
            (!O.A.can(V.xBc.MANAGE_CHANNELS, t) &&
                !O.A.can(V.xBc.MANAGE_ROLES, t) &&
                !O.A.can(V.xBc.MANAGE_WEBHOOKS, t)) ||
            ((0, tf.tr)(t.type) && !O.A.can(V.xBc.VIEW_CHANNEL, t)) ||
            (t.isGuildVocal() && !O.A.can(V.xBc.CONNECT, t)) ||
            !tf.bk.has(t.type) ||
            t.isModeratorReportChannel(),
    )
        ? null
        : (0, s.jsx)(Y.m, {
              asContainer: !0,
              text: el.intl.string(el.t["3gUsJb"]),
              children: (0, s.jsx)(X.D, {
                  className: eD()(er.Xs, l ? er.Tf : void 0, r ? er.bw : er.UI),
                  onClick: function () {
                      nS.Ay.open(t.id);
                  },
                  tabIndex: i,
                  "aria-label": el.intl.string(el.t["3gUsJb"]),
                  children: (0, s.jsx)(nx.SettingsIcon, { size: "xs", color: "currentColor", className: er.gE }),
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
        h = (0, u.bG)([nj.A], () => nj.A.getStageInstanceByChannel(t.id), [t.id]),
        m = (0, u.bG)([nI.Ay], () => nI.Ay.getActiveEventByChannel(t.id), [t.id]),
        g = (0, u.bG)([O.A], () => (0, nb.K)(O.A, c, t, h)),
        A = (0, u.bG)([], () =>
            t?.type === V.rbe.GUILD_VOICE ? el.intl.string(el.t["EE+P0H"]) : el.intl.string(el.t["0jeAXt"]),
        ),
        f = r.useRef(null);
    if (l || !g || t.isModeratorReportChannel() || t.isThread()) return null;
    let p = (0, s.jsx)(nN.R, { size: "xs", className: er.gE, "aria-hidden": !0, color: "currentColor" });
    return (
        i &&
            (p = (0, s.jsx)(ne.A, {
                childRef: f,
                tutorialId: "instant-invite",
                position: "left",
                children: (0, s.jsx)("div", { ref: f, children: p }),
            })),
        (0, s.jsx)(Y.m, {
            asContainer: !0,
            text: A,
            children: (0, s.jsx)(X.D, {
                className: eD()(er.Xs, o ? er.Tf : void 0, d ? er.bw : er.UI),
                onClick: function () {
                    if (null != c) {
                        let e = nv.A.getAllActiveStreams().filter(
                            (e) => e.state !== V.XYD.ENDED && e.channelId === t.id,
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
                                    source: V.PE1.GUILD_CHANNELS,
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
function nT(e) {
    let { channel: t } = e;
    return (0, s.jsx)(Y.m, {
        asContainer: !0,
        text: el.intl.string(el.t["ROh4T+"]),
        children: (0, s.jsx)(X.D, {
            className: er.Xs,
            onClick: function () {
                (0, nG.Ol)(t.guild_id, t.id);
            },
            "aria-label": el.intl.string(el.t["ROh4T+"]),
            children: (0, s.jsx)(q.P, { size: "xs", color: "currentColor", className: er.gE }),
        }),
    });
}
function nU(e) {
    let { channel: t } = e;
    return (0, s.jsx)(Y.m, {
        asContainer: !0,
        text: el.intl.string(el.t["N2c/Un"]),
        children: (0, s.jsx)(X.D, {
            className: er.Xs,
            onClick: function () {
                (0, nG.jA)(t.guild_id, t.id, !0, { section: V.JJy.CHANNEL_LIST });
            },
            "aria-label": el.intl.string(el.t["N2c/Un"]),
            children: (0, s.jsx)(n_.CheckmarkLargeIcon, { size: "xs", color: "currentColor", className: er.gE }),
        }),
    });
}
class nD extends r.PureComponent {
    static defaultProps = { isDefaultChannel: !1 };
    renderEditButton() {
        return (0, s.jsx)(nL, { ...this.props });
    }
    renderInviteButton() {
        return (0, s.jsx)(nM, { ...this.props });
    }
    renderRemoveSuggestionButton() {
        return (0, s.jsx)(nT, { ...this.props });
    }
    renderAcceptSuggestionButton() {
        return (0, s.jsx)(nU, { ...this.props });
    }
    getClassName() {
        let { position: e, sortingPosition: t } = this.props;
        return ny(e, t);
    }
    isDisabled() {
        let { channel: e, sorting: t, sortingType: n } = this.props;
        return nR(e, t, n);
    }
}
var nO = n(166444),
    nP = n(790782);
let nw = k(function (e) {
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
        A = (0, u.bG)([T.A, tC.Ay], () => {
            let e = tC.Ay.getDirectoryChannelIds(t.id);
            return 0 === e.length ? null : T.A.getChannel(e[0]);
        }),
        f = (0, u.bG)([T.A], () => T.A.getChannel(A?.parent_id)),
        p = i === A?.id,
        C = (0, tq.Ay)(A),
        E = (0, u.bG)([O.A], () =>
            null != f ? O.A.can(V.xBc.MANAGE_CHANNELS, f) : null != t && O.A.can(V.xBc.MANAGE_CHANNELS, t),
        ),
        x = r.useCallback(
            (e) => {
                null != A &&
                    (0, e0.L3)(e, async () => {
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
    let N = ny(l, c),
        _ = nR(A, o, d),
        S = (0, s.jsx)("div", {
            className: eD()(N, { [er.r9]: _, [er.wH]: p }),
            "data-dnd-name": C,
            children: (0, s.jsxs)(nO.Ay, {
                className: er.Ki,
                channel: A,
                guild: t,
                selected: p,
                onContextMenu: x,
                forceInteractable: !0,
                resolvedUnreadSetting: nP.e.ONLY_MENTIONS,
                children: [
                    (0, s.jsx)(nM, { channel: A, tabIndex: g }),
                    (0, s.jsx)(nL, { channel: A, disableManageChannels: a, tabIndex: g }),
                ],
            }),
        });
    return (E && (S = m(h(S))), S);
});
var nV = n(34188),
    nH = n(733391),
    nk = n(832163),
    nB = n(831024),
    nF = n(44724),
    nK = n(849134),
    nz = n(770178),
    nW = n(307076);
let nY = Math.ceil(Math.sqrt(115200)),
    nX = (nY - 240) / 2,
    nq = r.forwardRef(function (e, t) {
        let { children: n } = e,
            [i, l] = r.useState(-1),
            a = r.useCallback((e) => {
                l(e.contentRect.width);
            }, []),
            o = (0, nz.w)(a, [], { fireOnMount: !0 }),
            [{ shineSpring: d }, c] = (0, e$.z)(() => ({
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
                        (0, s.jsx)(eZ.animated.div, {
                            className: nW.q,
                            style: {
                                transform: d.to(
                                    (e) => `translateX(calc(${e * i}px + ${e * nY}px)) translateY(-50%) rotate(45deg)`,
                                ),
                            },
                        }),
                    ),
                [n, i, d],
            );
        return (
            r.useImperativeHandle(t, () => ({ onMouseEnter: u, onMouseLeave: h }), [u, h]),
            (0, s.jsx)("div", {
                className: nW.i,
                onMouseEnter: u,
                onMouseLeave: h,
                onFocus: u,
                onBlur: h,
                ref: o,
                style: { "--custom-shine-dimensions": "240px", "--custom-shine-rotated-dimensions-delta": `${nX}px` },
                children: m,
            })
        );
    });
var nJ = n(371794),
    nZ = n(240248),
    n$ = n(998218),
    nQ = n(672812),
    n0 = n(427797);
let n1 = r.memo(function (e) {
    let { guild: t, selected: i } = e,
        l = r.useRef(null),
        a = r.useRef(null),
        o = (0, S.useHasAnyModalOpen)(),
        d = (0, u.bG)([ec.A], () => ec.A.hasLayers()),
        c = (0, eo.xr)((e) => e.fullScreenLayers.length > 0);
    r.useEffect(() => {
        (0, nH.Kh)(t.id);
    }, [t.id]);
    let m = (0, u.bG)([nk.A], () => nk.A.getAnnouncement(t.id)),
        g = m?.state === "success" ? m.announcement : void 0,
        [A, f] = (0, $.x_)(W.M.GAME_SHOP_NEW_BADGE, t.id, g?.id ?? "", void 0, !0),
        p = A === W.M.GAME_SHOP_NEW_BADGE && null != g,
        C = (0, tV.nY)(t.id),
        E = (0, nB.u)({ surface: "storefront_badge", applicationId: C }),
        x = null;
    (p && (x = el.intl.string(el.t.y2b7CA)), null != E && (x = E.text));
    let [N, _] = (0, $.x_)(W.M.GAME_SHOP_NEW_DROP_POPOVER, t.id, g?.id ?? ""),
        I = N === W.M.GAME_SHOP_NEW_DROP_POPOVER && null != g;
    r.useEffect(() => {
        i && (p && f(en.i.INDIRECT_ACTION), I && _(en.i.INDIRECT_ACTION));
    }, [f, _, i, p, I]);
    let b = r.useCallback(() => {
            (f(en.i.TAKE_ACTION), _(en.i.TAKE_ACTION));
            let e = (0, tV.mq)(t.id),
                n = nk.A.getStorefrontState(e)?.activePage ?? 0;
            (0, ee.pX)(V.BVt.CHANNELS_GAME_SHOP(t.id, n));
        }, [t.id, f, _]),
        G = r.useCallback(() => {
            (0, nF.X)({ guildId: t.id, forceFetch: I });
        }, [t.id, I]),
        j = r.useCallback(() => {
            _(en.i.USER_DISMISS);
        }, [_]),
        v = r.useCallback(
            (e) => {
                null != t &&
                    (0, e0.L3)(e, async () => {
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
                    background: (0, s.jsx)("div", { className: n0.D }),
                    innerClassName: n0.Z,
                    ref: a,
                    id: `game-shop-${t.id}`,
                    renderIcon: (e) =>
                        (0, s.jsx)(nV.U, {
                            size: "custom",
                            color: "currentColor",
                            width: 20,
                            height: 20,
                            className: e,
                        }),
                    text: (0, s.jsx)(eQ.E, {
                        variant: "text-md/medium",
                        className: nQ.UU,
                        children: el.intl.string(el.t.vyaWs7),
                    }),
                    selected: i,
                    onMouseDown: G,
                    onClick: b,
                    onContextMenu: v,
                    trailing: (0, s.jsxs)(s.Fragment, {
                        children: [
                            null != x && (0, s.jsx)(em.Lp, { text: x, color: h.A.colors.BACKGROUND_BRAND.css }),
                            e,
                        ],
                    }),
                }),
            [t.id, i, G, b, v, x],
        ),
        L = r.useMemo(() => {
            if (null == g) return null;
            switch (g.type) {
                case "guild-application-announcement": {
                    let e =
                            null != g.assetId
                                ? n$.A.toURLSafe((0, nJ.YE)(g.applicationId, g.assetId, 256, "webp"))
                                : void 0,
                        t =
                            null != g.backgroundImageAssetId
                                ? n$.A.toURLSafe((0, nJ.YE)(g.applicationId, g.backgroundImageAssetId, 256, "webp"))
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
                    if ((0, nZ.uJ)(e) && (0, nZ.uJ)(t)) return null;
                    return {
                        graphicSource: (0, nZ.uJ)(e) ? { type: "asset", src: t } : { type: "video", src: e },
                        title: g.popoverTitle,
                        body: g.popoverBody,
                        actionLabel: g.popoverCta,
                    };
                }
                default:
                    return null;
            }
        }, [g]),
        M = r.useCallback(
            () =>
                I && null != L
                    ? (0, s.jsx)(nK.A, {
                          onActionClick: b,
                          onActionMouseDown: G,
                          onRender: R,
                          onRequestClose: j,
                          targetElementRef: a,
                          ...L,
                      })
                    : null,
            [I, L, b, G, R, j],
        );
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(nq, { ref: l, children: y }), !o && !d && !c && M()] });
});
var n3 = n(740426),
    n2 = n(826673),
    n9 = n(591552),
    n5 = n(202776),
    n7 = n(454058),
    n6 = n(573163);
function n4(e) {
    let { guild: t, selected: i } = e,
        l = (0, n5.A)(t),
        a = (0, n2.HX)(W.M.CHANNEL_BROWSER_NEW_BADGE_NUX),
        o = (0, t_.yK)([n7.A], () =>
            Array.from(n7.A.getNewChannelIds(t.id)).filter((e) => n7.A.shouldIndicateNewChannel(t.id, e)),
        ),
        d = (0, t_.bG)([n6.Ay], () => n6.Ay.hasUnread(t.id, nP.P.GUILD_ONBOARDING_QUESTION)),
        c = o.length > tE.rR,
        u = (0, t_.bG)([n9.A, n6.Ay], () => {
            let e = n9.A.lastFetchedAt(t.id),
                n = n6.Ay.lastMessageId(t.id, nP.P.GUILD_ONBOARDING_QUESTION);
            if (null == n) return !1;
            let i = td.default.extractTimestamp(n);
            return null != e && e > i;
        }),
        m = r.useCallback(() => {
            (0, ee.pX)(V.BVt.CHANNEL(t.id, l ? et.VV.CUSTOMIZE_COMMUNITY : et.VV.CHANNEL_BROWSER));
        }, [t.id, l]),
        g = r.useCallback(
            (e) => {
                (0, e0.L3)(e, async () => {
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
            (A = (0, s.jsx)(em.Lp, {
                color: h.A.colors.BADGE_BACKGROUND_BRAND.css,
                text: el.intl.string(el.t.y2b7CA),
            })),
        (0, s.jsx)(Q.G, {
            id: `channels-${t.id}`,
            renderIcon: (e) => (0, s.jsx)(n3.k, { size: "md", color: "currentColor", className: e }),
            text: l ? el.intl.string(el.t.h9mGOP) : el.intl.string(el.t.et6wav),
            selected: i,
            onClick: m,
            onContextMenu: g,
            trailing: A,
        })
    );
}
var n8 = n(855473);
function ie(e) {
    let { guild: t, selected: n } = e;
    return (0, s.jsx)(Q.G, {
        id: `home-tab-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(n8.Z, { size: "md", color: "currentColor", className: e }),
        text: el.intl.string(el.t.VbpLyU),
        selected: n,
        onClick: function () {
            (0, ee.pX)(V.BVt.CHANNEL(t.id, et.VV.GUILD_HOME));
        },
    });
}
var it = n(297264),
    ii = n(5373),
    il = n(65995),
    is = n(195702);
function ir(e, t) {
    return (0, s.jsx)(eQ.E, { variant: "text-xs/bold", color: "text-default", children: e }, t);
}
let ia = r.memo(function (e) {
    let { guild: t } = e,
        n = (0, u.bG)([tR.h], () => tR.h.getNewMemberActions(t.id), [t.id]),
        i = (0, u.bG)([il.A], () => il.A.getCompletedActions(t.id)),
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
                className: is.G9,
                onClick: function () {
                    (0, ee.pX)(V.BVt.CHANNEL(t.id, et.VV.GUILD_HOME));
                },
                children: [
                    (0, s.jsxs)("div", {
                        className: is.A1,
                        children: [
                            (0, s.jsx)(it.D, { variant: "heading-sm/bold", children: el.intl.string(el.t.SnrR3x) }),
                            (0, s.jsxs)("div", {
                                className: is.Ib,
                                children: [
                                    (0, s.jsx)(eQ.E, {
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        className: is.Cv,
                                        children: el.intl.format(el.t.eqZ1lW, {
                                            numberHook: ir,
                                            total: a.toString(),
                                            completed: l.toString(),
                                        }),
                                    }),
                                    (0, s.jsx)(e7.A, {
                                        className: is.UE,
                                        width: 16,
                                        height: 16,
                                        direction: e7.A.Directions.RIGHT,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, s.jsx)(ii.i, {
                        className: is.hr,
                        foregroundGradientColor: [
                            h.A.unsafe_rawColors.GREEN_300.css,
                            h.A.unsafe_rawColors.GREEN_230.css,
                        ],
                        percent: (l / a) * 100 + 3,
                        animate: !0,
                    }),
                ],
            }),
            (0, s.jsx)("div", { role: "separator", className: is.yF }),
        ],
    });
});
var io = n(581925);
function id(e) {
    let { guild: t, selected: n } = e;
    return (0, s.jsx)(Q.G, {
        id: `official-messages-page-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(io.L, { size: "md", color: "currentColor", className: e }),
        text: el.intl.string(el.t.xHEzFh),
        selected: n,
        onClick: function () {
            (0, ee.pX)(V.BVt.CHANNEL(t.id, et.VV.GUILD_OFFICIAL_MESSAGES));
        },
    });
}
var ic = n(590251),
    iu = n(413125),
    ih = n(600623),
    im = n(411392);
let ig = r.memo(function (e) {
    let { guild: t } = e,
        i = (0, u.bG)([tC.Ay], () => tC.Ay.getDefaultChannel(t.id), [t.id]),
        { steps: l } = (0, iu.c)(i, t),
        a = l.length,
        o = l.filter((e) => e.completed).length,
        c = l.find((e) => !e.completed),
        m = (0, d.rm)(`setup-progress-${t.id}`),
        g = a > 0 && null == c;
    return (r.useEffect(() => {
        g && (0, ih.vy)(t.id);
    }, [t.id, g]),
    null == c)
        ? null
        : (0, s.jsxs)("li", {
              children: [
                  (0, s.jsxs)(X.D, {
                      ...m,
                      role: "button",
                      className: im.nM,
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
                              className: im.Ap,
                              children: [
                                  (0, s.jsx)(ic.a, {
                                      percent: 100,
                                      colorOverride: h.A.colors.BACKGROUND_MOD_STRONG.css,
                                      ringColorOverrideClassName: im.Tu,
                                      background: im.Tu,
                                  }),
                                  (0, s.jsx)(ic.a, {
                                      className: im.qB,
                                      percent: (o / a) * 100,
                                      colorOverride: h.A.colors.STATUS_POSITIVE.css,
                                      ringColorOverrideClassName: im.Tu,
                                      background: im.Tu,
                                  }),
                              ],
                          }),
                          (0, s.jsxs)("div", {
                              className: im.FS,
                              children: [
                                  (0, s.jsx)(it.D, {
                                      variant: "heading-sm/bold",
                                      children: el.intl.string(el.t.o3HK3d),
                                  }),
                                  (0, s.jsx)(eQ.E, {
                                      variant: "text-xs/medium",
                                      color: "text-muted",
                                      className: im.VA,
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
                  (0, s.jsx)("div", { role: "separator", className: im.yF }),
              ],
          });
});
var iA = n(514179);
function ip(e) {
    let { guild: t, selected: i } = e;
    return (0, s.jsx)(Q.G, {
        id: `subscriptions-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(iA.A, { className: e }),
        text: el.intl.string(el.t["KzCF/6"]),
        selected: i,
        onClick: function () {
            (0, ee.pX)(V.BVt.CHANNEL(t.id, et.VV.ROLE_SUBSCRIPTIONS));
        },
        onContextMenu: function (e) {
            null != t &&
                (0, e0.L3)(e, async () => {
                    let { default: e } = await n.e("571911").then(n.bind(n, 978554));
                    return (n) => (0, s.jsx)(e, { ...n, guild: t });
                });
        },
    });
}
var iC = n(506774),
    iE = n(95561),
    ix = n(289397),
    iN = n(486418),
    i_ = n(575926),
    iS = n(440293),
    iI = n(174459),
    ib = n(634654),
    iG = n(888918);
function ij(e) {
    let { guildId: t, selected: n, handleClick: i } = e,
        l = (0, iS.w)(t),
        r = (0, t_.bG)([D.A], () => D.A.getGuild(t)),
        a = r?.features.has(V.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) === !0,
        o = "false" === iC.w.get(ib.bJ, "false"),
        d = (0, t_.bG)([B.Ay], () => B.Ay.useReducedMotion);
    return (0, s.jsx)(Q.G, {
        id: `shop-${t}`,
        className: eD()(iG.A2, { [iG.wH]: n, [iG.ST]: o }),
        innerClassName: iG.LE,
        renderIcon: (e) => (0, s.jsx)(i_.h, { width: 20, height: 20, className: eD()([e, iG.sV]) }),
        text: el.intl.string(el.t.al5EXL),
        selected: n,
        onClick: i,
        trailing: (0, s.jsxs)("div", {
            className: iG.ai,
            children: [
                d
                    ? (0, s.jsx)(em.Lp, {
                          color: h.A.unsafe_rawColors.BRAND_260.css,
                          text: el.intl.string(el.t.y2b7CA),
                          className: iG.Ad,
                      })
                    : (0, s.jsx)("img", {
                          src: (0, ix.n)("server_products/storefront/money.gif"),
                          className: iG.TG,
                          alt: "",
                      }),
                n &&
                    (0, s.jsx)(X.D, {
                        className: iG.b,
                        onClick: function (e) {
                            (e.stopPropagation(),
                                (0, n2.Dr)(W.M.SERVER_SHOP_PHANTOM_PREVIEW),
                                iI.default.track(V.HAw.GUILD_SHOP_PREVIEW_CLICK, {
                                    ...(0, iE.H$)(t),
                                    action_taken: ib.hN.DISMISS_CHANNEL_ROW,
                                }),
                                (l && a) || (0, ee.bG)(V.BVt.CHANNEL(t, tC.Ay.getDefaultChannel(t)?.id)));
                        },
                        "aria-label": el.intl.string(el.t.cpT0Cq),
                        children: (0, s.jsx)(tW.a, { size: "xs", color: "currentColor" }),
                    }),
            ],
        }),
    });
}
function iv(e) {
    let { guild: t, selected: i } = e;
    function l() {
        (iC.w.set(ib.bJ, "true"), (0, ee.pX)(V.BVt.CHANNEL(t.id, et.VV.GUILD_SHOP)));
    }
    return (0, iN.P)(t)
        ? (0, s.jsx)(ij, { guildId: t.id, selected: i, handleClick: l })
        : (0, s.jsx)(Q.G, {
              id: `shop-${t.id}`,
              renderIcon: (e) => (0, s.jsx)(i_.h, { width: 20, height: 20, className: e }),
              text: el.intl.string(el.t.al5EXL),
              selected: i,
              onClick: l,
              onContextMenu: function (e) {
                  null != t &&
                      (0, e0.L3)(e, async () => {
                          let { default: e } = await n.e("852565").then(n.bind(n, 345332));
                          return (n) => (0, s.jsx)(e, { ...n, guild: t });
                      });
              },
          });
}
var iR = n(308528),
    iy = n(534890),
    iL = n(262763),
    iM = n(499211),
    iT = n(406704),
    iU = n(747926),
    iD = n(977997),
    iO = n(807632),
    iP = n(37411);
function iw(e) {
    let { thread: t, tabIndex: n } = e,
        i = (0, iO.YG)(t),
        l = (0, iO.IO)(t),
        r = (0, iT._M)(t);
    return i && l && r ? (0, s.jsx)(iV, { thread: t, tabIndex: n }) : null;
}
function iV(e) {
    let { thread: t, tabIndex: n } = e,
        i = (0, u.bG)([iD.A], () => iD.A.isInChannel(t.id), [t.id]),
        { needSubscriptionToAccess: l } = (0, iM.A)(t.id),
        a = r.useCallback(() => {
            iL.A.handleVoiceConnect({ channel: t, connected: i, needSubscriptionToAccess: l, locked: !1 });
        }, [t, i, l]),
        o = r.useCallback(() => {
            (0, iU.JA)(t, !0, iP.H9.CHANNEL_LIST);
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
                    children: (0, s.jsx)(tY.H, { size: "xs", color: "currentColor", className: er.gE }),
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
                    children: (0, s.jsx)(iy.ChatIcon, { size: "xs", color: "currentColor", className: er.gE }),
                }),
            }),
        ],
    });
}
var iH = n(897898),
    ik = n(152007);
function iB(e) {
    return null != e && e > 0;
}
var iF = n(405018),
    iK = n(428689),
    iz = n(525093);
function iW(e) {
    let { total: t, users: n, videoLimit: i } = e;
    return (0, s.jsxs)("div", {
        className: iz.iE,
        children: [
            (0, s.jsxs)(eQ.E, {
                tag: "span",
                color: "text-subtle",
                variant: "text-xs/medium",
                className: eD()(iz.VV, { [iz.Ki]: i, [iz.$G]: n >= 100 }),
                children: [
                    i ? (0, s.jsx)(iK.VideoIcon, { size: "md", color: "currentColor", className: iz.LB }) : null,
                    n.toString().padStart(2, "0"),
                ],
            }),
            (0, s.jsx)(eQ.E, {
                tag: "span",
                color: "text-subtle",
                variant: "text-xs/medium",
                className: eD()(iz.X5, { [iz.$G]: t >= 100 }),
                children: t.toString().padStart(2, "0"),
            }),
        ],
    });
}
function iY(e) {
    let { channel: t, video: n, userCount: i } = e,
        { limit: l } = (0, iF.A)(t),
        r = -1,
        a = !1;
    return (
        t.userLimit > 0 && (r = t.userLimit),
        n && l > 0 && ((a = r < 0 || l < r), (r = r > 0 ? Math.min(r, l) : l)),
        (0, s.jsx)(iW, { users: i, total: r, videoLimit: a })
    );
}
var iX = n(588224),
    iq = n(447199);
function iJ(e) {
    let { thread: t, countInVoice: n, hasVideo: i, mentionCount: l, isMentionLowImportance: r } = e,
        a = n > 0 && t.userLimit > 0,
        o = iB(l);
    return a || o
        ? (0, s.jsxs)("div", {
              className: er.yW,
              children: [
                  a ? (0, s.jsx)(iY, { userCount: n, video: i, channel: t }) : null,
                  o ? (0, s.jsx)(np.A, { mentionsCount: l, isMentionLowImportance: r }) : null,
              ],
          })
        : null;
}
function iZ(e) {
    let { style: t, withGuildIcon: n, inverted: i } = e,
        l = { className: eD()(iq.GI, { [iq.a7]: n }, { [iq.BJ]: i }), style: t },
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
let i$ = r.memo(function (e) {
        let { thread: t, isSelectedChannel: i, isSelectedVoice: l, isLast: a, withGuildIcon: o } = e,
            c = (0, u.bG)([tr.Ay], () => tr.Ay.getVoiceStatesForChannel(t), [t]),
            h = (0, u.bG)([iD.A], () => iD.A.hasVideo(t.id)),
            m = (0, tq.Ay)(t),
            {
                unread: g,
                mentionCount: A,
                isMentionLowImportance: f,
            } = (0, u.cf)([n6.Ay], () => ({
                unread: n6.Ay.hasUnread(t.id),
                mentionCount: n6.Ay.getMentionCount(t.id),
                isMentionLowImportance: n6.Ay.getIsMentionLowImportance(t.id),
            })),
            p = (0, u.bG)([ik.A], () => ik.A.isMuted(t.id)),
            C = r.useCallback(
                (e) => {
                    (0, iU.JA)(t, !e.shiftKey, iP.H9.CHANNEL_LIST);
                },
                [t],
            ),
            E = r.useCallback(() => {
                iR.A.preload(t.guild_id, t.id);
            }, [t.guild_id, t.id]),
            x = r.useCallback(
                (e) => {
                    (0, iH.A)(e, t);
                },
                [t],
            ),
            N = r.useCallback(
                (e) => {
                    let i = T.A.getChannel(t.id);
                    null != i &&
                        (0, e0.L3)(e, async () => {
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
            className: eD()(er.fx, { [er.wH]: i }),
            children: [
                (0, s.jsx)(iZ, { withGuildIcon: o }),
                a
                    ? null
                    : (0, s.jsx)(iZ, {
                          withGuildIcon: o,
                          inverted: !0,
                          style: { transform: "rotateX(180deg) translateY(-9px)" },
                      }),
                (0, s.jsx)(tK.vN, {
                    focusTarget: b,
                    ringTarget: b,
                    offset: { top: 2, bottom: 2, right: 4 },
                    children: (0, s.jsxs)("div", {
                        className: eD()(er.Ki, nQ.iE, nQ.ZS, {
                            [nQ.J1]: i,
                            [nQ.F4]: !i && p,
                            [nQ.V2]: !p && !i && g,
                            [nQ.lY]: o,
                        }),
                        onMouseDown: E,
                        onContextMenu: N,
                        children: [
                            !g || p || i ? null : (0, s.jsx)("div", { className: eD()(nQ.gy, nQ.WS) }),
                            (0, s.jsx)(X.D, {
                                ...I,
                                innerRef: b,
                                className: nQ.nf,
                                onClick: C,
                                onAuxClick: x,
                                "aria-label": G,
                                focusProps: { enabled: !1 },
                                children: (0, s.jsxs)("div", {
                                    className: eD()(nQ.Y5, nQ.__invalid_threadMainContent),
                                    children: [
                                        (0, s.jsx)(eQ.E, {
                                            variant: "text-sm/medium",
                                            color: "none",
                                            className: nQ.UU,
                                            children: (0, s.jsx)(tk.A, { "aria-hidden": !0, children: m }),
                                        }),
                                        (0, s.jsxs)("div", {
                                            className: nQ.Y_,
                                            onClick: nO.dG,
                                            onKeyDown: nO.dG,
                                            children: [
                                                (0, s.jsx)(iJ, {
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
                (0, s.jsx)(iX.A, {
                    channel: t,
                    collapsed: !l && 1 !== c.length,
                    collapsedMax: 6,
                    voiceStates: c,
                    isThread: !0,
                }),
            ],
        });
    }),
    iQ = r.memo(function (e) {
        let { channel: t, selectedChannel: n, selectedVoiceChannelId: i, sortedThreadIds: l, withGuildIcon: r } = e,
            a = (0, tq.Ay)(t),
            { density: o } = (0, C.wR)(),
            d = (0, u.yK)([T.A], () => l.map((e) => T.A.getChannel(e)).filter(ta.Vq), [l]),
            c = (0, u.bG)([tr.Ay], () => {
                let e = d[d.length - 1];
                if (null == e) return 0;
                let t = tr.Ay.getVoiceStates(e.guild_id)[e.id];
                return null == t || 0 === t.length ? 0 : i !== e.id ? 40 : 32 * t.length + 8;
            });
        return (0, s.jsx)("li", {
            className: iq.kL,
            children: (0, s.jsxs)("ul", {
                role: "group",
                "aria-label": el.intl.formatToPlainString(el.t.EiyIi6, { channelName: a }),
                children: [
                    (0, s.jsx)("div", {
                        className: eD()(iq.eh, { [iq.ET]: r }),
                        style: { bottom: ("cozy" === o ? 28 : 24) + c },
                    }),
                    d.map((e, t) =>
                        (0, s.jsx)(
                            i$,
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
var i0 = n(922016),
    i1 = n(367513),
    i3 = n(296216),
    i2 = n(963027),
    i9 = n(202384),
    i5 = n(51758),
    i7 = n(139033),
    i6 = n(305866),
    i4 = n(123292),
    i8 = n(830215),
    le = n(315982),
    lt = n(480900),
    ln = n(557722),
    li = n(834942),
    ll = n(287809),
    ls = n(53516),
    lr = n(648580),
    la = (((i = {})[(i.VOICE = 0)] = "VOICE"), i);
let lo = function (e) {
    let { type: t, guildId: i, closePopout: l } = e,
        r = (0, z.GV)(),
        a = (0, u.bG)([li.A], () => li.A.getCheck(i), [i]),
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
                                body: el.intl.formatToPlainString(el.t.v1ktYb, { min: V.$8o.MEMBER_AGE }),
                                buttonText: el.intl.string(el.t.BddRzS),
                            }
                          : r
                            ? {
                                  header: e,
                                  body: el.intl.formatToPlainString(el.t.sncw41, { min: V.$8o.ACCOUNT_AGE }),
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
        : (0, s.jsxs)(i6.l, {
              className: lr.kL,
              "aria-labelledby": r,
              children: [
                  (0, s.jsx)("img", { alt: "", className: lr.Sl, src: n(303528) }),
                  (0, s.jsxs)("div", {
                      className: lr.Qs,
                      children: [
                          (0, s.jsx)(it.D, { variant: "heading-md/semibold", id: r, children: g }),
                          (0, s.jsx)(eQ.E, { color: "text-default", variant: "text-sm/normal", children: A }),
                          (0, s.jsxs)("div", {
                              className: lr.UD,
                              children: [
                                  null != f
                                      ? (0, s.jsx)("div", {
                                            "data-button-hoisted-classname-wrapper": !0,
                                            className: lr.FS,
                                            children: (0, s.jsx)(tB.$, {
                                                variant: "primary",
                                                text: f,
                                                onClick: function () {
                                                    (o
                                                        ? le.R()
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
                                                                            reason: ln.d.GUILD_PHONE_REQUIRED,
                                                                            ...t,
                                                                        });
                                                                },
                                                                { modalKey: ls.V },
                                                            )
                                                          : d
                                                            ? (i8.A.verifyResend(),
                                                              (0, i7.A)({
                                                                  title: el.intl.string(el.t.LykQYk),
                                                                  subtitle: el.intl.format(el.t.azKEPy, {
                                                                      email: ll.default.getCurrentUser()?.email,
                                                                  }),
                                                              }))
                                                            : h && null != m && (0, lt.b)(m, i),
                                                        l());
                                                },
                                            }),
                                        })
                                      : null,
                                  o || c || d
                                      ? (0, s.jsx)(i4.Q, {
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
var ld = n(824865),
    lc = n(378570),
    lu = n(747376),
    lh = n(113783),
    lm = n(96566),
    lg = n(280450),
    lA = n(312006),
    lf = n(505543),
    lp = n(994500),
    lC = n(685399),
    lE = n(475889),
    lx = n(693879),
    lN = n(435470),
    l_ = n(35275),
    lS = n(300596);
function lI(e) {
    let { locked: t } = e;
    return (0, s.jsx)("div", {
        className: eD()(er.Xs, lS.U),
        children: (0, s.jsx)(l_.A, {
            className: er.gE,
            color: t ? h.A.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css : void 0,
        }),
    });
}
var lb = n(863005),
    lG = n(669715),
    lj = n(769015),
    lv = n(217223);
function lR(e) {
    let { className: t, embeddedApps: n, muted: i } = e;
    if (n.length <= 0) return null;
    {
        if (1 === n.length)
            return (0, s.jsx)("div", {
                className: eD()(lv.kL, t, i && lv.F4),
                children: (0, s.jsx)(lj.A, { game: n[0].application, className: lv.wK }),
            });
        let e = n.length - 1;
        return (0, s.jsxs)("div", {
            className: eD()(lv.kL, t, i && lv.F4),
            children: [
                (0, s.jsx)(lj.A, { game: n[0].application, className: lv.wK }),
                2 === n.length
                    ? (0, s.jsx)(lj.A, { game: n[1].application, className: lv.wK })
                    : (0, s.jsx)(eQ.E, {
                          className: lv.ju,
                          variant: "text-xs/bold",
                          color: "interactive-text-active",
                          children: `+${e}`,
                      }),
            ],
        });
    }
}
var ly = n(905695);
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
        A = (0, u.bG)([n6.Ay], () => n6.Ay.getMentionCount(t.id)),
        f = (0, u.bG)([n6.Ay], () => n6.Ay.getIsMentionLowImportance(t.id)),
        p = (0, lC.Ay)(t),
        C = (0, u.bG)([O.A], () => !O.A.can(V.xBc.CONNECT, t)),
        E = (0, lE.H)(t),
        x = (0, u.bG)([iD.A], () => iD.A.hasVideo(t.id)),
        N = (0, lm.qT)(t.id) && t.isGuildStageVoice(),
        _ = (function (e) {
            let { channel: t, locked: n, video: i, selected: l } = e;
            return (
                (function (e) {
                    let { channel: t, video: n, considerMaxStageVoiceUserLimit: i = !0 } = e,
                        { limit: l } = (0, iF.A)(t),
                        s = -1;
                    return (t.userLimit > 0 && (s = t.userLimit),
                    n && l > 0 && (s = s > 0 ? Math.min(s, l) : l),
                    i && s === V.RCc)
                        ? 0
                        : s;
                })({ channel: t, video: i }) > 0 &&
                !n &&
                !l
            );
        })({ channel: t, locked: C, video: (x || N) && null == E, selected: n }),
        S = (0, u.bG)([lb.A], () => lb.A.getNewThreadCount(t.guild_id, t.id)),
        I = (0, lN.ed)(t.guild_id, t.id),
        b = (0, u.bG)([D.A], () => D.A.getGuild(t.guild_id)?.features.has(V.GuildFeatures.COMMUNITY) ?? !1);
    if (iB(A)) return (0, s.jsx)(np.A, { mentionsCount: A, isMentionLowImportance: f });
    if (o) return (0, s.jsx)(lI, { locked: d });
    if (c)
        return (0, s.jsx)(em.Lp, { text: el.intl.string(el.t.y2b7CA), color: h.A.colors.BADGE_BACKGROUND_BRAND.css });
    if (!m && g === nP.e.ALL_MESSAGES && t.isForumLikeChannel() && null != S && S > 0)
        return (0, s.jsx)(eQ.E, {
            variant: "text-xs/semibold",
            color: "text-brand",
            className: ly.O,
            children: el.intl.format(el.t.GkAbqY, { count: (0, em.Gu)(S) }),
        });
    if (!m && t.isForumLikeChannel() && null != I && I > 0)
        return (0, s.jsx)(eQ.E, { variant: "text-xs/semibold", color: "text-muted", children: (0, em.Gu)(I) });
    let G = l?.length ?? 0;
    return null != r && r && _
        ? (0, s.jsx)(iY, { userCount: G, video: x || N, channel: t })
        : i && (0, lG.t)(l) && b
          ? (0, s.jsx)(em.Lp, { text: el.intl.string(el.t.dI3q4h), color: h.A.unsafe_rawColors.RED_400.css })
          : null != E
            ? (0, s.jsx)(lx.z, { textColor: "text-feedback-positive", entry: { start: E } })
            : null != a && a && p.length > 0
              ? (0, s.jsx)(lR, { embeddedApps: p, muted: m })
              : null;
}
var lM = n(714619);
class lT extends nD {
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
        return (0, no.Pd)(e, iD.A, D.A);
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
        (null != r && (0, i5.V)(r) && (0, i9.Ze)(r),
            i && this.setState({ shouldShowGuildVerificationPopout: !0 }),
            t ||
                n ||
                e.isRoleSubscriptionTemplatePreviewChannel() ||
                (s ? i1.A.updateChatOpen(e.id, !0) : (0, lu.av)(e)),
            __OVERLAY__ || (0, lc.iN)(e.id, l ? { source: ld.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0));
    };
    handleClickChat = () => {
        let { channel: e, locked: t, isSuggestedSection: n } = this.props;
        __OVERLAY__ || t || (0, lc.iN)(e.id, n ? { source: ld.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            i = D.A.getGuild(t.getGuildId());
        null != i &&
            (0, e0.L3)(e, async () => {
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
        return (0, s.jsx)(iX.A, { channel: e, voiceStates: i, collapsed: t, tabIndex: n, numAudience: l });
    }
    renderPopout = () => {
        let { channel: e } = this.props,
            { shouldShowGuildVerificationPopout: t } = this.state;
        if (t)
            return (0, s.jsx)(lo, {
                type: la.VOICE,
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
                    className: eD()(er.Xs, n ? er.Tf : null),
                    onClick: () => {
                        (i1.A.updateChatOpen(e.id, !0), this.handleClickChat());
                    },
                    "aria-label": el.intl.string(el.t.ZXxLQg),
                    children: (0, s.jsx)(iy.ChatIcon, { size: "xs", color: "currentColor", className: er.gE }),
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
                className: eD()(this.getModeClass(), { [er.r9]: this.isDisabled() }),
                "data-dnd-name": (0, tq.m1)(e, ll.default, lp.A),
                children: [
                    (0, s.jsx)(i0.Y, {
                        targetElementRef: this.channelItemRef,
                        position: "right",
                        renderPopout: this.renderPopout,
                        spacing: 17,
                        onRequestClose: this.closeGuildVerificationPopout,
                        shouldShow: C,
                        children: () =>
                            (0, s.jsx)(Y.m, {
                                text: this.getTooltipText(),
                                children: (0, s.jsxs)(nO.Ay, {
                                    ref: this.channelItemRef,
                                    className: er.Ki,
                                    iconClassName: eD()({ [lM.G]: null != u }),
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
                                    "aria-label": (0, i2.Ay)({
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
let lU = k((0, i3.F)(lT));
function lD(e) {
    var t;
    let n,
        i,
        { guild: l, channel: r, disableSorting: a, isFavoriteCategory: o, collapsed: d, voiceStates: c } = e,
        h = (0, u.cf)([n6.Ay], () => ({ unread: n6.Ay.hasUnread(r.id), mentionCount: n6.Ay.getMentionCount(r.id) })),
        m = (0, u.bG)([w.Ay], () => w.Ay.resolveUnreadSetting(r)),
        g = (0, u.cf)([T.A, li.A, O.A], () => {
            let e = T.A.getChannel(r.parent_id),
                t = li.A.getCheck(r.guild_id);
            return {
                canManageChannel: null != l && O.A.can(V.xBc.MANAGE_CHANNELS, r),
                canReorderChannel:
                    !0 !== a &&
                    ((0, y.ai)(l.id) ||
                        (null != e ? O.A.can(V.xBc.MANAGE_CHANNELS, e) : O.A.can(V.xBc.MANAGE_CHANNELS, l))),
                canMoveMembers: O.A.can(V.xBc.MOVE_MEMBERS, r),
                locked: !O.A.can(V.xBc.CONNECT, r),
                bypassLimit: O.A.can(V.xBc.MOVE_MEMBERS, r),
                unverifiedAccount: !t.canChat,
            };
        }),
        A = (0, u.bG)([M.A], () => M.A.isCollapsed(r.parent_id)),
        f =
            ((t = r.id),
            (n = (0, lf.A)(t)),
            (i = (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return (0, u.cf)(
                    [lA.Ay, lg.default],
                    () => {
                        let n = lg.default.getId();
                        return lA.Ay.getPermissionsForUser(n, e, t);
                    },
                    [e, t],
                );
            })(t, !0).moderator),
            !n && i ? 1 : 0),
        p = (0, u.bG)([nj.A], () => nj.A.getStageInstanceByChannel(r.id), [r.id]),
        C = (0, lh.zy)(r.id, tu.ip.AUDIENCE),
        { isSubscriptionGated: E, needSubscriptionToAccess: x } = (0, iM.A)(r.id),
        N = (0, u.bG)([w.Ay], () => w.Ay.isFavorite(l.id, r.id)),
        _ = (0, lm.xn)(r.id),
        S = lL({
            channel: r,
            isChannelSelected: !1,
            isChannelCollapsed: d,
            voiceStates: c,
            isSubscriptionGated: E,
            needSubscriptionToAccess: x,
            enableConnectedUserLimit: _ || (r.userLimit > 0 && r.userLimit < V.RCc),
        }),
        I = e.connected && null == S,
        b = l.features.has(V.GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
    return (0, s.jsx)(lU, {
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
function lO(e, t) {
    let n = t.getGuildId();
    if (null == n) throw Error("TextChannel, preloadChannel: Channel does not have a guildId");
    iR.A.preload(n, t.id);
}
let lP = k(
        class extends nD {
            handleContextMenu = (e) => {
                let { channel: t } = this.props,
                    i = D.A.getGuild(t.getGuildId());
                null != i &&
                    (0, e0.L3)(e, async () => {
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
                (0, ee.pX)(V.BVt.CHANNEL(t, e.id), {
                    state: {
                        analyticsSource: {
                            page: V.liQ.GUILD_CHANNEL,
                            section: V.JJy.CHANNEL_LIST,
                            object: V.ZSU.CHANNEL,
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
                        className: eD()(this.getClassName(), { [er.r9]: this.isDisabled() }),
                        "data-dnd-name": (0, tq.m1)(e, ll.default, lp.A),
                        children: (0, s.jsxs)(nO.Ay, {
                            className: er.Ki,
                            channel: e,
                            selected: t,
                            onClick: this.handleClick,
                            onMouseDown: lO,
                            onContextMenu: this.handleContextMenu,
                            connectDragPreview: r ? l : null,
                            "aria-label": (0, i2.Ay)({ channel: e }),
                            resolvedUnreadSetting: nP.e.ONLY_MENTIONS,
                            children: [this.renderInviteButton(), this.renderEditButton()],
                        }),
                    });
                return r ? n(i(a)) : a;
            }
        },
    ),
    lw = r.memo(function (e) {
        let { channel: t, guild: n, disableSorting: i } = e,
            l = (0, u.cf)([T.A, O.A], () => {
                let e = T.A.getChannel(t.parent_id);
                return {
                    canManageChannel: O.A.can(V.xBc.MANAGE_CHANNELS, t),
                    canReorderChannel:
                        !0 !== i && null != e ? O.A.can(V.xBc.MANAGE_CHANNELS, e) : O.A.can(V.xBc.MANAGE_CHANNELS, n),
                };
            });
        return (0, s.jsx)(lP, { ...l, ...e });
    });
var lV = n(172218),
    lH = n(811024),
    lk = n(323073);
function lB(e) {
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
var lF = n(3322),
    lK = n(696451),
    lz = n(763827),
    lW = n(56059),
    lY = n(163328),
    lX = n(778712),
    lq = n(730134),
    lJ = n(707539),
    lZ = n(486020),
    l$ = n(98098);
function lQ(e) {
    let { channel: t } = e,
        i = (0, u.yK)([lb.A, n6.Ay, O.A], () => {
            let e = lb.A.getActiveJoinedRelevantThreadsForParent(t.guild_id, t.id);
            return o()(lb.A.getActiveJoinedThreadsForParent(t.guild_id, t.id))
                .values()
                .map((e) => e.channel)
                .concat(o().values(lb.A.getActiveUnjoinedThreadsForParent(t.guild_id, t.id)))
                .filter((t) => !(t.id in e) && O.A.can(V.xBc.VIEW_CHANNEL, t))
                .sort((e, t) => {
                    let n = n6.Ay.lastMessageId(e.id),
                        i = n6.Ay.lastMessageId(t.id);
                    return td.default.compare(n, i);
                })
                .reverse()
                .value();
        }),
        l = t.isForumLikeChannel() ? 5 : 3,
        a = t.isForumLikeChannel() ? lW.b : lY.y;
    return (
        r.useEffect(() => {
            (0, lJ.TE)();
        }, []),
        (0, s.jsxs)("div", {
            className: l$.SW,
            children: [
                (0, s.jsx)(eQ.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: l$.DD,
                    children: t.isForumLikeChannel() ? el.intl.string(el.t.ioVdO2) : el.intl.string(el.t.VNYs2v),
                }),
                (0, s.jsxs)("div", {
                    className: l$.p_,
                    children: [
                        i
                            .slice(0, t.isForumLikeChannel() ? i.length : l)
                            .map((e) => (0, s.jsx)(l0, { thread: e }, e.id))
                            .filter((e) => r.isValidElement(e))
                            .slice(0, l),
                        (0, s.jsxs)(X.D, {
                            className: l$.nM,
                            onClick: function () {
                                t.isForumLikeChannel()
                                    ? (0, lc.iN)(t.id)
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
                                    className: l$.R4,
                                    children: (0, s.jsx)(a, { size: "custom", className: l$.Kk }),
                                }),
                                (0, s.jsx)("div", {
                                    className: l$.Pf,
                                    children: (0, s.jsx)(eQ.E, {
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
function l0(e) {
    let { thread: t } = e,
        n = (0, u.bG)([ll.default], () => ll.default.getUser(t.ownerId)),
        i = (0, lJ.JO)(t);
    return (0, s.jsxs)(X.D, {
        className: l$.nM,
        onClick: function (e) {
            (0, iU.JA)(t, t.isForumPost() ? e.shiftKey : !e.shiftKey, iP.H9.POPOUT);
        },
        children: [
            (0, s.jsx)("div", {
                className: l$.R4,
                children:
                    null == n
                        ? (0, s.jsx)("img", {
                              className: l$.my,
                              src: lZ.Ay.getDefaultAvatarURL(void 0, void 0),
                              alt: "",
                          })
                        : (0, s.jsx)(lq.A, { className: l$.my, user: n, size: lX._3.SIZE_16 }),
            }),
            (0, s.jsxs)("div", {
                className: l$.Pf,
                children: [
                    (0, s.jsx)(eQ.E, { className: l$.UU, variant: "text-sm/normal", color: "none", children: t.name }),
                    (0, s.jsx)(eQ.E, { variant: "text-sm/normal", color: "text-muted", children: "\u2022" }),
                    (0, s.jsx)(eQ.E, {
                        className: l$.vE,
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: (0, lJ.aK)(i),
                    }),
                ],
            }),
        ],
    });
}
var l1 = n(334105);
function l3(e) {
    let { channel: t, isSuggestedSection: n } = e;
    return (0, s.jsx)(Y.m, {
        asContainer: !0,
        text: el.intl.string(el.t.ZXxLQg),
        children: (0, s.jsx)(X.D, {
            className: er.Xs,
            onClick: () => {
                ((0, l1.fJ)(t.getGuildId(), t.id),
                    (0, lc.iN)(t.id, n ? { source: ld.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0));
            },
            "aria-label": el.intl.string(el.t.ZXxLQg),
            children: (0, s.jsx)(iy.ChatIcon, { size: "xs", color: "currentColor", className: er.gE }),
        }),
    });
}
var l2 = n(364522),
    l9 = n(302959),
    l5 = n(35903),
    l7 = n(970928),
    l6 = n(427262),
    l4 = n(641635);
let l8 = ns.DN.SIZE_24;
function se(e) {
    let { activity: t, embeddedApp: n } = e,
        i = t?.assets,
        l = t?.application_id;
    if (null == i || (null == i.large_image && null == i.small_image)) {
        let e = lZ.Ay.getApplicationIconURL({ id: n.application.id, icon: n.application.icon }),
            t = n.application.name;
        return (0, s.jsx)(Y.m, {
            text: t,
            position: "top",
            asContainer: !0,
            children: (0, s.jsx)("img", { alt: t, src: e, className: l4.P3 }),
        });
    }
    let r = i.large_image ?? i.small_image;
    return null != r
        ? (0, s.jsx)("img", { alt: i.large_text ?? "", src: (0, l7.uD)(l, r, [128, 128]), className: l4.P3 })
        : null;
}
function st(e) {
    let { activity: t, embeddedApp: n, channel: i } = e,
        l = Array.from(n.embeddedActivity.userIds),
        r = (0, u.yK)([ll.default], () => l.map((e) => ll.default.getUser(e)).filter(ta.Vq));
    return (0, s.jsx)("div", {
        className: l4.ec,
        children: (0, s.jsxs)("div", {
            className: l4.Wh,
            children: [
                (0, s.jsx)(se, { activity: t, embeddedApp: n }),
                (0, s.jsxs)("div", {
                    className: l4.X0,
                    children: [
                        (0, s.jsx)(it.D, {
                            variant: "heading-sm/semibold",
                            color: "text-strong",
                            className: l4.wx,
                            lineClamp: 1,
                            children: n.application.name,
                        }),
                        t?.details != null &&
                            "" !== t.details &&
                            (0, s.jsx)(eQ.E, {
                                variant: "text-xs/normal",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.details,
                            }),
                        t?.state != null &&
                            "" !== t.state &&
                            (0, s.jsx)(eQ.E, {
                                variant: "text-xs/normal",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.state,
                            }),
                        l.length > 0 &&
                            (0, s.jsx)(ns.Ay, {
                                className: l4.TN,
                                guildId: i.guild_id,
                                users: r,
                                size: l8,
                                max: 7,
                                renderUser: function (e) {
                                    if (null == e || e === ns.mt) return null;
                                    let t = l6.Ay.getName(e);
                                    return (0, s.jsx)(
                                        Y.m,
                                        {
                                            asContainer: !0,
                                            text: t,
                                            position: "bottom",
                                            children: (0, s.jsx)("img", {
                                                src: e.getAvatarURL(i.guild_id, l8),
                                                alt: t,
                                                className: l4.my,
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
var sn = n(584960);
function si(e) {
    let { channel: t, presenceActivity: n, embeddedApp: i, onAction: l } = e,
        r = Array.from(i.embeddedActivity.userIds),
        a = (0, u.bG)([ll.default], () => ll.default.getUser(r[0]));
    return null == a
        ? null
        : (0, s.jsxs)("div", {
              className: sn.Eb,
              children: [
                  (0, s.jsx)("div", {
                      className: sn.Il,
                      children: (0, s.jsx)(st, { activity: n, embeddedApp: i, channel: t }),
                  }),
                  (0, s.jsx)("div", {
                      className: sn.M4,
                      children: (0, s.jsx)(l5.A, {
                          type: l9.M.VOICE_CHANNEL,
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
var sl = n(713654),
    ss = n(744399);
function sr(e) {
    let { channel: t } = e,
        n = (0, u.bG)([D.A], () => D.A.getGuild(t.guild_id)),
        i = (0, tq.Ay)(t),
        l = (0, sl.gU)(t, n);
    return null == l
        ? null
        : (0, s.jsxs)("div", {
              className: ss.hY,
              children: [
                  (0, s.jsx)(l, { className: ss.p }),
                  (0, s.jsx)(eQ.E, {
                      variant: "text-md/semibold",
                      color: "interactive-text-default",
                      className: ss.HA,
                      children: i,
                  }),
              ],
          });
}
var sa = n(220650);
function so(e) {
    let { channel: t, onAction: n } = e,
        i = (0, lC.Ay)(t),
        l = Array.from((0, lC.Rz)(i).values());
    return 0 === l.length
        ? null
        : (0, s.jsxs)(l2.Ip, {
              className: sa.kL,
              children: [
                  (0, s.jsx)("div", { className: sa.oT, children: (0, s.jsx)(sr, { channel: t }) }),
                  (0, s.jsx)("div", { className: sa.zN }),
                  l.map((e, i) =>
                      (0, s.jsx)(
                          si,
                          { embeddedApp: e, presenceActivity: e.presenceActivity ?? void 0, channel: t, onAction: n },
                          i,
                      ),
                  ),
              ],
          });
}
class sd extends nD {
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
        iR.A.preload(t ?? V.ME, e.id);
    };
    renderPopout = (e) => {
        let { channel: t, sorting: n, embeddedApps: i, channelIsContentGated: l } = this.props,
            { shouldShowActivities: r } = this.state;
        return t.isModeratorReportChannel() || l
            ? null
            : null != i && i.length > 0 && r && !n
              ? (0, s.jsx)(so, { onAction: this.handleActivitiesPopoutClose, channel: t })
              : (0, s.jsx)(lQ, { ...e, channel: this.props.channel });
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
        if (t.type === V.rbe.GROUP_DM)
            return void (0, e0.L3)(e, async () => {
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
        if (t.type === V.rbe.DM) {
            let i = ll.default.getUser(t.getRecipientId());
            null != i &&
                (0, e0.L3)(e, async () => {
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
            return void (0, e0.L3)(e, async () => {
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
            (0, e0.L3)(e, async () => {
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
                    n.e("356675"),
                    n.e("65200"),
                    n.e("35723"),
                    n.e("566378"),
                    n.e("256372"),
                    n.e("29542"),
                    n.e("206152"),
                    n.e("248804"),
                    n.e("141049"),
                    n.e("982921"),
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
            j = lB(A),
            v = _ ? { source: ld.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
            R = (0, s.jsxs)("li", {
                className: eD()(this.getClassName(), { [er.r9]: this.isDisabled(), [er.wH]: n }),
                "data-dnd-name": (0, tq.m1)(e, ll.default, lp.A),
                onMouseEnter: b || G ? this.handleMouseEnter : void 0,
                onMouseLeave: b || G ? this.handleMouseLeave : void 0,
                children: [
                    (0, s.jsx)(i0.Y, {
                        targetElementRef: S,
                        position: "right",
                        renderPopout: this.renderPopout,
                        onRequestClose: this.handleClosePopout,
                        spacing: 17,
                        shouldShow: (b && this.state.shouldShowThreadsPopout) || (G && this.state.shouldShowActivities),
                        children: () =>
                            (0, s.jsxs)(nO.Ay, {
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
                                channelTypeOverride: f ? V.rbe.GUILD_TEXT : void 0,
                                resolvedUnreadSetting: C,
                                transitionExtras: v,
                                "aria-label": (0, i2.Ay)({
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
                                                e.type === V.rbe.GUILD_APP
                                                    ? (0, s.jsx)(l3, { channel: e, isSuggestedSection: _ })
                                                    : null,
                                                this.renderInviteButton(),
                                                this.renderEditButton(),
                                            ],
                                        }),
                                ],
                            }),
                    }),
                    n &&
                        (0, s.jsx)(lF.A, {
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
let sc = k(sd);
function su(e) {
    let { channel: t, guild: n, disableSorting: i, isFavoriteCategory: l, muted: a, selected: o } = e,
        { hasActiveThreads: d, hasMoreActiveThreads: c } = (0, iT.NR)(t),
        h = (0, u.cf)([n6.Ay], () => ({
            unread: n6.Ay.hasUnread(t.id),
            ackMessageId: n6.Ay.ackMessageId(t.id),
            isLowImportanceMention: n6.Ay.getIsMentionLowImportance(t.id),
        })),
        m = (0, u.bG)([w.Ay], () => w.Ay.resolveUnreadSetting(t)),
        g = (0, u.cf)([T.A, O.A], () => {
            let e = T.A.getChannel(t.parent_id);
            return {
                canManageChannel: O.A.can(V.xBc.MANAGE_CHANNELS, t),
                canReorderChannel:
                    !0 !== i &&
                    ((0, y.ai)(n.id) ||
                        (null != e ? O.A.can(V.xBc.MANAGE_CHANNELS, e) : O.A.can(V.xBc.MANAGE_CHANNELS, n))),
            };
        }),
        A = (0, u.bG)([n7.A], () => n7.A.shouldIndicateNewChannel(n.id, t.id)),
        { needSubscriptionToAccess: f, isSubscriptionGated: p } = (0, iM.A)(t.id),
        C = (0, u.bG)([w.Ay], () => w.Ay.isFavorite(n.id, t.id)),
        E = (0, lk.ni)(t),
        x = (0, lH.Gp)(t.id),
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
        _ = (0, lC.Ay)(t),
        [S, I] = r.useState(!1),
        b = (0, lV.K)(
            r.useCallback((e) => {
                I(e);
            }, []),
        );
    return (0, u.bG)([lz.A, lK.Ay], () => lz.A.getChannelId() !== t.id && lK.Ay.isCurrentUserGuest(t.getGuildId()))
        ? null
        : (0, s.jsx)(sc, {
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
var sh = n(900797),
    sm = n(636585),
    sg = n(531685),
    sA =
        (((l = {}).HIDDEN = "hidden"),
        (l.UNREAD = "unread"),
        (l.MENTIONS = "mentions"),
        (l.VOICE_CHANNELS = "voice-channels"),
        l);
let sf = { mode: "hidden", mentionCount: 0, targetChannelId: null },
    sp = { topBar: sf, bottomBar: sf },
    sC = {},
    sE = {};
function sx(e) {
    let t = T.A.getChannel(e);
    return (
        !(null == t || null == t.getGuildId() || t.isGuildVocal()) &&
        !(t.isThread() ? ik.A.isMuted(t.id) : w.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, tl.Y)(t)
    );
}
function sN(e) {
    let t = T.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let i = w.Ay.isGuildCollapsed(n),
        l = w.Ay.isChannelMuted(n, t.id);
    return (!i || !l) && n6.Ay.getMentionCount(e) > 0;
}
function s_(e) {
    return (
        !w.Ay.isChannelMuted(e.guild_id, e.id) &&
        (e.isGuildStageVoice()
            ? tc.A.getMutableParticipants(e.id, tu.ip.SPEAKER).length > 0
            : tr.Ay.getVoiceStatesForChannel(e).length > 0)
    );
}
function sS(e) {
    let { guildChannels: t } = tx.A.getGuildWithoutChangingGuildActionRows(e),
        n = t.getChannels(sE[e] ?? []);
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
            ((sx(t.id) || o().some(t.threadIds, sx)) && (d = !1),
            (sN(t.id) || o().some(t.threadIds, sN)) && (a = !1),
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
            ((sx(t.id) || o().some(t.threadIds, sx)) && (null == l && (l = t.id), (p = !0)),
                (sN(t.id) || o().some(t.threadIds, sN)) &&
                    (null == i && (i = t.id),
                    (f += n6.Ay.getMentionCount(t.id)),
                    (f += o().sumBy(t.threadIds, n6.Ay.getMentionCount))));
        }
    if (d || a)
        for (let e = 0; e < A.length; e++) {
            let t = A[e];
            if (!d && !a) break;
            ((sx(t.id) || o().some(t.threadIds, sx)) && (null == r && (r = t.id), (E = !0)),
                (sN(t.id) || o().some(t.threadIds, sN)) &&
                    (null == s && (s = t.id),
                    (C += n6.Ay.getMentionCount(t.id)),
                    (C += o().sumBy(t.threadIds, n6.Ay.getMentionCount))));
        }
    let x = null,
        N = null,
        _ = u?.getChannelRecords() ?? [];
    (a && C > 0
        ? (x = { mode: "mentions", mentionCount: C, targetChannelId: s })
        : !c && o().some(_, s_)
          ? (x = { mode: "voice-channels", mentionCount: 0, targetChannelId: null })
          : d && E && (x = { mode: "unread", mentionCount: 0, targetChannelId: r }),
        a && f > 0
            ? (N = { mode: "mentions", mentionCount: f, targetChannelId: i })
            : d && p && (N = { mode: "unread", mentionCount: 0, targetChannelId: l }));
    let S = null != N && (null == x || ("mentions" !== x.mode && "mentions" === N.mode)),
        I = null != x && ("mentions" === x.mode || !S);
    return ((sC[e] = { topBar: S ? (N ?? sf) : sf, bottomBar: I ? (x ?? sf) : sf }), !0);
}
let sI = o().throttle(sS, 200);
function sb(e) {
    let { guildId: t } = e,
        n = D.A.getGuild(t);
    return null != n && !!n.features.has(V.GuildFeatures.COMMUNITY) && sI(t);
}
function sG(e) {
    let { id: t } = e,
        n = T.A.getChannel(t);
    if (null == n) return !1;
    let i = D.A.getGuild(n.guild_id);
    return null != i && !!i.features.has(V.GuildFeatures.COMMUNITY) && sI(n.guild_id);
}
function sj(e) {
    let { channel: t } = e,
        n = T.A.getChannel(t.id);
    if (null == n) return !1;
    let i = D.A.getGuild(t.guild_id);
    return null != i && !!i.features.has(V.GuildFeatures.COMMUNITY) && sI(n.guild_id);
}
function sv(e) {
    let { channelId: t } = e,
        n = T.A.getChannel(t);
    if (null == n) return !1;
    let i = D.A.getGuild(n.guild_id);
    return (
        null != i && !!i.features.has(V.GuildFeatures.COMMUNITY) && P.A.getGuildId() === n.guild_id && sI(n.guild_id)
    );
}
function sR(e) {
    let { guildId: t } = e;
    return null != t && sI(t);
}
class sy extends u.Ay.Store {
    static displayName = "ChannelListUnreadsStore";
    initialize() {
        this.waitFor(tx.A, T.A, D.A, ik.A, n6.Ay, P.A, tr.Ay, tc.A, w.Ay);
    }
    getUnreadStateForGuildId(e) {
        return sC[e] ?? sp;
    }
}
let sL = new sy(e3.h, {
    UPDATE_CHANNEL_LIST_DIMENSIONS: function (e) {
        let { guildId: t, channelIds: n } = e,
            i = D.A.getGuild(t);
        return (
            null != i &&
            !!i.features.has(V.GuildFeatures.COMMUNITY) &&
            null != n &&
            !o().isEqual(sE[t], n) &&
            ((sE[t] = n), sS(t))
        );
    },
    BULK_ACK: function (e) {
        let { channels: t } = e,
            n = !1;
        return (
            o()(t)
                .map((e) => {
                    let { channelId: t } = e;
                    return T.A.getChannel(t)?.guild_id;
                })
                .filter(ta.Vq)
                .uniq()
                .forEach((e) => {
                    let t = D.A.getGuild(e);
                    null != t && t.features.has(V.GuildFeatures.COMMUNITY) && sI(e) && (n = !0);
                }),
            n
        );
    },
    CHANNEL_ACK: sv,
    CHANNEL_DELETE: sj,
    CHANNEL_LOCAL_ACK: sv,
    MESSAGE_ACK: sv,
    MESSAGE_CREATE: sv,
    MESSAGE_DELETE_BULK: sv,
    MESSAGE_DELETE: sv,
    PASSIVE_UPDATE_V2: function (e) {
        let t = D.A.getGuild(e.guildId);
        return !!(e.channels.length > 0 && null != t && t.features.has(V.GuildFeatures.COMMUNITY)) && sI(e.guildId);
    },
    RESORT_THREADS: sv,
    THREAD_CREATE: sj,
    THREAD_DELETE: sj,
    THREAD_LIST_SYNC: sb,
    THREAD_MEMBER_UPDATE: sG,
    THREAD_MEMBERS_UPDATE: sG,
    THREAD_UPDATE: sj,
    BULK_CLEAR_RECENTS: sb,
    CATEGORY_COLLAPSE_ALL: sb,
    CATEGORY_EXPAND_ALL: sb,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = P.A.getGuildId();
        if (null == n || !new Set(t.map((e) => e.guildId)).has(n)) return !1;
        let i = sC[n];
        return null != i && "voice-channels" === i.bottomBar.mode && sI(n);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: sR,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: sR,
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: t } = e;
        for (let e of t) null != e.guild_id && sI(e.guild_id);
    },
    USER_GUILD_SETTINGS_GUILD_UPDATE: sR,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: sR,
});
var sM = n(350536);
let sT = { friction: 30, tension: 300 };
function sU(e) {
    let { guildChannels: t, jumpToVoiceChannels: n } = e,
        i = t.getCategoryFromSection(t.voiceChannelsSectionNumber),
        l = (0, u.bG)([tr.Ay], () => tr.Ay.getVoiceStates(t.id), [t.id]),
        a = r.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), n());
            },
            [n],
        ),
        o = i?.getChannelRecords() ?? [],
        d = (0, no.fK)({ channels: o, selectedChannelId: null, selectedVoiceChannelId: null, voiceStates: l });
    return (0, s.jsxs)(X.D, {
        className: eD()(sM.M0, sM.OF),
        onClick: a,
        children: [
            (0, s.jsx)(tY.H, { size: "custom", className: sM.Gs, width: 14, height: 14, color: "currentColor" }),
            (0, s.jsx)(eQ.E, {
                variant: "text-xs/semibold",
                className: sM.pM,
                children: el.intl.format(el.t["fDlr+F"], { count: d.length }),
            }),
            (0, s.jsx)(sm.A, {
                guildId: t.id,
                className: sM.J$,
                users: d.slice(0, 4),
                renderMoreUsers: () => null,
                max: 4,
                size: lX._3.SIZE_16,
            }),
        ],
    });
}
function sD(e) {
    let { position: t, guildChannels: n, guildChannelsVersion: i, jumpToVoiceChannels: l, jumpToChannel: a } = e,
        { bottomBar: o, topBar: d } = (0, u.cf)([sL], () => sL.getUnreadStateForGuildId(n.id)),
        c = (0, u.bG)([sg.A], () => sg.A.isFocused()),
        { mode: h, mentionCount: m, targetChannelId: g } = "bottom" === t ? o : d,
        A = h === sA.HIDDEN,
        f = (0, e$.z)(
            {
                to: { transform: A ? ("bottom" === t ? "translateY(180%)" : "translateY(-180%)") : "translateY(0%)" },
                config: sT,
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
        className: eD()(sM.kL, { [sM.Mn]: "top" === t, [sM.sQ]: "bottom" === t }),
        children: (0, s.jsx)(eZ.animated.div, {
            className: sM.pK,
            style: f,
            "aria-hidden": A,
            children: (function () {
                switch (h) {
                    case sA.HIDDEN:
                        return (0, s.jsx)("div", { className: eD()(sM.M0, sM.Te) });
                    case sA.UNREAD:
                        return (0, s.jsxs)(X.D, {
                            className: sM.M0,
                            onClick: p,
                            children: [
                                "bottom" === t
                                    ? (0, s.jsx)(tz.a, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: sM.z_,
                                          height: 14,
                                          width: 14,
                                      })
                                    : (0, s.jsx)(sh.t, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: sM.z_,
                                          height: 14,
                                          width: 14,
                                      }),
                                (0, s.jsx)(eQ.E, {
                                    variant: "text-xs/semibold",
                                    color: "interactive-text-default",
                                    className: sM.pM,
                                    children: el.intl.string(el.t.FCRiT3),
                                }),
                            ],
                        });
                    case sA.MENTIONS:
                        return (0, s.jsx)(X.D, {
                            className: eD()(sM.M0, sM.vU),
                            onClick: p,
                            children: (0, s.jsx)(eQ.E, {
                                variant: "text-xs/semibold",
                                color: "badge-text-brand",
                                className: sM.pM,
                                children: el.intl.format(el.t.EQcLyp, { count: m }),
                            }),
                        });
                    case sA.VOICE_CHANNELS:
                        return (0, s.jsx)(sU, { jumpToVoiceChannels: l, guildChannels: n, guildChannelsVersion: i });
                    default:
                        return;
                }
            })(),
        }),
    });
}
var sO = n(310953),
    sP = n(173860);
function sw(e) {
    let t = T.A.getChannel(e);
    return (
        null != t &&
        null != t.getGuildId() &&
        !(t.isThread() ? ik.A.isMuted(t.id) : w.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, tl.Y)(t)
    );
}
function sV(e) {
    let t = T.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let i = w.Ay.isGuildCollapsed(n),
        l = w.Ay.isChannelMuted(n, t.id);
    return (!i || !l) && n6.Ay.getMentionCount(e) > 0;
}
let sH = r.forwardRef(function (e, t) {
    let { guildId: n, guildChannels: i, guildChannelsVersion: l, ...r } = e,
        a = (0, sO.W)(n, i, l, { withVoiceChannels: !1 }, { ignoreRecents: !0 }),
        o = (0, u.bG)([sg.A], () => sg.A.isFocused());
    return (0, s.jsx)(sP.A, { ref: t, ...r, isUnread: sw, isMentioned: sV, items: a, animate: o });
});
var sk = n(81466);
function sB(e) {
    let { guild: t, selected: i } = e,
        { hasUnread: l, mentionCount: r } = (0, u.cf)(
            [n6.Ay],
            () => ({
                hasUnread: n6.Ay.hasUnread(t.id, nP.P.GUILD_EVENT),
                mentionCount: n6.Ay.getMentionCount(t.id, nP.P.GUILD_EVENT),
            }),
            [t.id],
        ),
        a = (0, u.bG)([w.Ay], () => w.Ay.isMuteScheduledEventsEnabled(t.id));
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
    let d = (0, tP.Ay)(t.id),
        c = d.length > 0 ? el.intl.formatToPlainString(el.t.IBdqSu, { number: d.length }) : el.intl.string(el.t.tlopTM);
    return (0, s.jsx)(Q.G, {
        id: `upcoming-events-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(sk.CalendarIcon, { size: "md", color: "currentColor", className: e }),
        text: c,
        selected: i,
        onClick: o,
        onContextMenu: function (e) {
            (0, e0.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("426386"), n.e("819990")]).then(n.bind(n, 221621));
                return (n) => (0, s.jsx)(e, { ...n, guildId: t.id });
            });
        },
        showUnread: l && !a,
        trailing: !a && r > 0 ? (0, s.jsx)(em.hV, { className: nQ.Do, disableColor: !0, count: r }) : null,
    });
}
var sF = n(845056),
    sK = n(765379),
    sz = n(271683),
    sW = n(725613),
    sY = n(857253),
    sX = n(360729),
    sq = n(22231),
    sJ = n(241326),
    sZ = n(750943),
    s$ = n(743674),
    sQ = n(888697),
    s0 = n(26741),
    s1 = n(493819),
    s3 = n(722884),
    s2 = n(579129),
    s9 = n(176431);
function s5(e) {
    let { channel: t, imageUrl: i, animatedUrl: l, bannerHash: a, canModifyHangout: o } = e,
        d = (0, s$.S)(i),
        c = (0, eR.je)(t),
        u = (0, s0.P9)({ guildId: t.guild_id, channelId: t.id, bannerHash: a }),
        h = r.useCallback(() => {
            ((0, s0.J_)({ guildId: t.guild_id, channelId: t.id }), (0, s3.A)({ channel: t }));
        }, [t]),
        m = r.useCallback(() => {
            ((0, s0.nK)({ guildId: t.guild_id, channelId: t.id }), (0, sQ.e2)(t.id));
        }, [t.guild_id, t.id]),
        g = r.useCallback(
            (e) => {
                c
                    ? (0, e0.L3)(e, async () => {
                          let { default: e } = await n.e("555558").then(n.bind(n, 316421));
                          return (n) => (0, s.jsx)(e, { ...n, channel: t });
                      })
                    : e.preventDefault();
            },
            [t, c],
        );
    return (0, s.jsxs)("div", {
        ref: u,
        className: s9.rs,
        onContextMenu: g,
        children: [
            (0, s.jsx)("div", {
                className: s9.ZS,
                style: null != d ? { backgroundColor: d } : void 0,
                children: (0, s.jsx)(s1.A, { imageUrl: i, animatedUrl: l, className: s9.Sl }),
            }),
            o
                ? (0, s.jsxs)("div", {
                      className: s9.n_,
                      children: [
                          (0, s.jsx)(Y.m, {
                              text: el.intl.string(s2.default.XJ4UpB),
                              children: (0, s.jsx)(X.D, {
                                  className: s9.HF,
                                  onClick: h,
                                  children: (0, s.jsx)(sq.PencilIcon, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                          (0, s.jsx)(Y.m, {
                              text: el.intl.string(s2.default.XV4qT6),
                              children: (0, s.jsx)(X.D, {
                                  className: s9.HF,
                                  onClick: m,
                                  children: (0, s.jsx)(sJ.TrashIcon, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function s7(e) {
    let { channel: t } = e,
        n = (0, s0.dX)({ guildId: t.guild_id, channelId: t.id }),
        i = r.useCallback(() => {
            ((0, s0.J_)({ guildId: t.guild_id, channelId: t.id }), (0, s3.A)({ channel: t }));
        }, [t]);
    return (0, s.jsx)("div", {
        ref: n,
        className: s9._o,
        children: (0, s.jsxs)(X.D, {
            className: s9.hH,
            onClick: i,
            children: [
                (0, s.jsx)(sZ.X, { size: "xs", color: "currentColor" }),
                (0, s.jsx)(eQ.E, {
                    variant: "text-sm/medium",
                    color: "currentColor",
                    children: el.intl.string(s2.default.NGcIOF),
                }),
            ],
        }),
    });
}
function s6(e) {
    let { channel: t, isConnected: n } = e,
        { enableHangoutWindow: i } = (0, ev.Dm)({ guildId: t.guild_id, location: "HangoutWindow" }),
        l = (0, eR.W6)(t),
        a = n && l,
        o = t.voiceHangout,
        d = o?.banner_hash,
        c = r.useMemo(() => {
            if (null == d || null == t.guild_id) return null;
            let e = (0, eR.Sq)({ guildId: t.guild_id, bannerHash: d });
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
              ? (0, s.jsx)(s7, { channel: t })
              : null
        : null;
}
var s4 = n(290863),
    s8 = n(461213),
    re = n(532622),
    rt = n(882840),
    rn = n(208971),
    ri = n(46054),
    rl = n(569381),
    rs = n(165648);
function rr(e) {
    let { channel: t, connected: n, hovered: i, subtitle: l, onClick: a } = e,
        o = (0, rn.G)((0, rt.l)(t)),
        { enableHangoutWindow: d } = (0, ev.Dm)({ guildId: t.guild_id, location: "VoiceChannelStatus" }),
        c = d && (0, eR.lr)(t),
        u = null != o && o.length > 0,
        h = (0, re.Ay)(t, !0),
        m = null != l && l.length > 0;
    if (
        (r.useEffect(() => {
            u && iI.default.track(V.HAw.VOICE_CHANNEL_TOPIC_VIEWED, { channel_id: t.id, guild_id: t.guild_id });
        }, [u, t.id, t.guild_id]),
        null == t.guild_id)
    )
        return null;
    let g = eD()(rl.Ui, n && h ? rl.BI : null);
    return u
        ? (0, s.jsx)(X.D, {
              className: g,
              onClick: h ? a : void 0,
              children: (0, s.jsx)(eQ.E, {
                  variant: "text-xs/medium",
                  className: eD()(rl.qS, rs.PT),
                  children: (0, s.jsx)(tk.A, { children: ri.A.parseVoiceChannelStatus(o, !0, { channelId: t.id }) }),
              }),
          })
        : n && h && !c && (!m || i)
          ? (0, s.jsxs)(X.D, {
                className: g,
                onClick: a,
                children: [
                    (0, s.jsx)(eQ.E, {
                        variant: "text-xs/medium",
                        className: rl.qS,
                        children: el.intl.string(el.t.Mgpxiw),
                    }),
                    (0, s.jsx)(sq.PencilIcon, { color: "currentColor", className: rl.rD, size: "xxs" }),
                ],
            })
          : m
            ? (0, s.jsx)(tk.A, { children: l })
            : null;
}
class ra extends nD {
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
        (o && i1.A.updateChatOpen(n.id, !0),
            iL.A.handleVoiceConnect({
                channel: n,
                connected: t,
                needSubscriptionToAccess: l,
                routeDirectlyToChannel: o || a,
                locked: e,
                transitionExtras: r ? { source: ld.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
            }));
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            i = D.A.getGuild(t.getGuildId());
        null != i &&
            (0, e0.L3)(e, async () => {
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
        return (0, no.Pd)(e, iD.A, D.A);
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
        (null != t && (0, i5.V)(t) && (0, i9.Ze)(t), this.handleVoiceConnect());
    };
    handleVoiceStatusClick = (e) => {
        let { connected: t, channel: n } = this.props;
        t && (e.stopPropagation(), (0, sz.A)({ channel: n }));
    };
    renderSubtitle() {
        let { channel: e, connected: t } = this.props,
            n = lB(this.props.subtitle)?.subtitle,
            { hovered: i } = this.state;
        return (0, s.jsx)(rr, {
            onClick: this.handleVoiceStatusClick,
            channel: e,
            connected: t,
            subtitle: n,
            hovered: i,
        });
    }
    renderVoiceUsers() {
        let { channel: e, voiceStates: t, collapsed: n, withGuildIcon: i, tabIndex: l } = this.props;
        return (0, s.jsx)(iX.A, {
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
        return !(null != n && n.length > 0) || i ? null : (0, s.jsx)(s6, { channel: e, isConnected: t });
    }
    renderPopout = () => {
        let { channel: e } = this.props,
            { shouldShowGuildVerificationPopout: t } = this.state;
        return t
            ? (0, s.jsx)(lo, { type: la.VOICE, guildId: e.guild_id, closePopout: this.closeGuildVerificationPopout })
            : null;
    };
    renderOpenChatButton = () => {
        let { channel: e, locked: t, forceShowButtons: n, isSuggestedSection: i } = this.props;
        if (!t)
            return (0, s.jsx)(Y.m, {
                asContainer: !0,
                text: el.intl.string(el.t.ZXxLQg),
                children: (0, s.jsx)(X.D, {
                    className: eD()(er.Xs, n ? er.Tf : null),
                    onClick: () => {
                        (i1.A.updateChatOpen(e.id, !0),
                            (0, lc.iN)(e.id, i ? { source: ld.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0));
                    },
                    "aria-label": el.intl.string(el.t.ZXxLQg),
                    children: (0, s.jsx)(iy.ChatIcon, { size: "xs", color: "currentColor", className: er.gE }),
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
                className: eD()(this.getModeClass(), { [er.r9]: this.isDisabled(), [er.fy]: _ }),
                "data-dnd-name": (0, tq.m1)(e, ll.default, lp.A),
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
                        children: (0, s.jsx)(i0.Y, {
                            targetElementRef: this.channelItemRef,
                            position: "right",
                            renderPopout: this.renderPopout,
                            onRequestClose: this.closeGuildVerificationPopout,
                            spacing: 17,
                            shouldShow: b,
                            children: () =>
                                (0, s.jsx)(Y.m, {
                                    text: this.getTooltipText(),
                                    children: (0, s.jsxs)(nO.Ay, {
                                        ref: this.channelItemRef,
                                        className: er.Ki,
                                        iconClassName: eD()({ [er.Gj]: A || x || G }),
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
                                        "aria-label": (0, i2.Ay)({
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
                (j = (0, s.jsx)(ne.A, {
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
let ro = k((0, i3.F)(ra));
function rd(e) {
    let {
            guild: t,
            channel: n,
            disableSorting: i,
            isFavoriteCategory: l,
            selected: r,
            collapsed: a,
            voiceStates: o,
        } = e,
        d = (0, u.cf)([n6.Ay], () => ({ unread: n6.Ay.hasUnread(n.id), mentionCount: n6.Ay.getMentionCount(n.id) })),
        c = (0, u.bG)([w.Ay], () => w.Ay.resolveUnreadSetting(n)),
        h = (0, u.cf)([T.A, li.A, O.A], () => {
            let e = T.A.getChannel(n.parent_id),
                l = li.A.getCheck(n.guild_id);
            return {
                canManageChannel: O.A.can(V.xBc.MANAGE_CHANNELS, n),
                canReorderChannel:
                    !0 !== i &&
                    ((0, y.ai)(t.id) ||
                        (null != e ? O.A.can(V.xBc.MANAGE_CHANNELS, e) : O.A.can(V.xBc.MANAGE_CHANNELS, t))),
                canMoveMembers: O.A.can(V.xBc.MOVE_MEMBERS, n),
                locked: !O.A.can(V.xBc.CONNECT, n),
                bypassLimit: O.A.can(V.xBc.MOVE_MEMBERS, n),
                unverifiedAccount: !l.canChat,
            };
        }),
        m = (0, u.bG)([iD.A], () => iD.A.hasVideo(n.id)),
        { enabled: g } = (0, sX.mf)({ guildId: t.id, location: "VoiceChannel" }),
        A = (0, lC.Ay)(n),
        f = (0, u.yK)(
            [s8.A, s4.A, lg.default],
            () => {
                if (null == o || 0 === o.length) return [];
                let e = lg.default.getId(),
                    t = [];
                for (let { user: i } of o)
                    for (let l of i.id === e ? s8.A.getActivities() : s4.A.getActivities(i.id, n.guild_id))
                        !(0, sF.N)(l) || (0, sK.A)(l) || null == l.name || t.includes(l.name) || t.push(l.name);
                return t;
            },
            [o, n.guild_id],
        ),
        p = (0, tq.Ay)(n),
        C = (0, tP.Qs)(n.id),
        E = (0, u.bG)([sW.A], () => sW.A.getStartTime(n), [n]),
        { isSubscriptionGated: x, needSubscriptionToAccess: N } = (0, iM.A)(n.id),
        _ = (0, sY.A)(),
        S = (0, u.bG)([w.Ay], () => w.Ay.isFavorite(t.id, n.id)),
        I = e.connected || _?.channelId === n.id,
        { enableHighlight: b, enableWaveformIcon: G } = (0, nr.b)(t.id, "VoiceChannel"),
        j = null != o && o.length > 0,
        v = b && j,
        R = G && j,
        L = lL({
            channel: n,
            isChannelSelected: r,
            isChannelCollapsed: a,
            voiceStates: o,
            isSubscriptionGated: x,
            needSubscriptionToAccess: N,
            enableConnectedUserLimit: !0,
            enableActivities: !0,
        }),
        M = I && null == L;
    return (0, s.jsx)(ro, {
        channelName: p,
        embeddedApps: A,
        nonEmbeddedActivityNames: f,
        embeddedActivityType: V.$pd.PLAYING,
        video: m,
        hasActiveEvent: null != C,
        isSubscriptionGated: x,
        needSubscriptionToAccess: N,
        ...d,
        ...h,
        ...e,
        connected: I,
        isFavoriteSuggestion: l && !S,
        forceShowButtons: M,
        channelInfo: L,
        resolvedUnreadSetting: c,
        hasChannelInfo: null != L,
        hasStartTime: null != E,
        voiceChannelStartTime: E,
        shouldHighlightChannel: v,
        shouldUseAnimatedWaveform: R,
        guildRoomsEnabled: g,
    });
}
n(131955);
function rc(e) {
    return (
        h.A.modules.channels.NAME_LINE_HEIGHT.resolve({ density: e }) +
        2 * h.A.space.SPACE_XXS.resolve({ density: e }) +
        2
    );
}
class ru extends r.PureComponent {
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
        (this.setState({ initialized: !0 }), (0, tN.Ei)(this.getVisibleChannels));
    }
    componentWillUnmount() {
        this.updateChannelListScroll.cancel();
    }
    componentDidUpdate(e, t) {
        let { scrollToChannel: n, guildId: i, selectedChannelId: l } = this.props,
            { initialized: s } = this.state,
            { scrollTop: r } = tp.A.getGuildDimensions(i);
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
                    a = s.threadOffset * rc(r);
                l.scrollIntoViewRect({ start: e + a, end: e + a + rc(r), padding: n, animate: t, callback: i });
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
                if (i < tE.bK || e.isPlaceholderRow(i, l)) return !1;
                let s = e.getChannelFromSectionRow(i, l);
                if (null == s) return !1;
                let { channel: r, category: a } = s;
                return (
                    !!(0, tf.ig)(r.record.type) &&
                    (!a.isCollapsed || !a.isMuted) &&
                    !r.isMuted &&
                    !!t.isItemVisible(i, l, !0) &&
                    (0, tl.Y)(r.record)
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
        if (e === tE.PU) return l;
        if (e === tE.bK) return t.features.has(V.GuildFeatures.HUB) ? 0 : l;
        if (e === n.voiceChannelsSectionNumber) {
            let t = n.getCategoryFromSection(e);
            if (null == t || t.isEmpty()) return 0;
            if (t.isCollapsed) return 49;
            let i = n.getChannelFromSectionRow(e, 0)?.channel;
            return null == i || i.record.type === V.rbe.GUILD_CATEGORY ? 9 : 25;
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
            let { hasDivider: d, canHaveVoiceSummary: c } = nd(n, r, t),
                u = d ? (a ? 9 : h.A.space.SPACE_SM.resolve({ density: o ?? "default" })) : 0;
            if (!c || t === tE.PU) return u;
            let m = n.getNamedCategoryFromSection(t);
            return null == m ||
                !(function (e) {
                    let { category: t, voiceStates: n, selectedChannelId: i, selectedVoiceChannelId: l } = e;
                    return (
                        (function (e) {
                            let { category: t, voiceStates: n, selectedChannelId: i, selectedVoiceChannelId: l } = e;
                            return !0 !== M.A.isCollapsed(t.record.id)
                                ? []
                                : t.getChannelRecords().filter((e) => {
                                      if (!O.A.can(V.xBc.VIEW_CHANNEL, e)) return !1;
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
            a = rc(r);
        if (e === tE.PU) {
            let e = n.getGuildActionSection();
            return e.isEmpty()
                ? 0
                : e.getRow(t) === tH.n.GUILD_PREMIUM_PROGRESS_BAR
                  ? e.getRows().length > 1
                      ? 69
                      : 57
                  : e.getRow(t) === tH.n.GUILD_ONBOARDING_SETUP_PROGRESS
                    ? e.getRows().length > 1
                        ? 63
                        : 51
                    : a;
        }
        if (n.isPlaceholderRow(e, t)) return 0;
        let o = n.getChannelFromSectionRow(e, t);
        if (null == o) return 0;
        let { channel: d, category: c } = o;
        if (d.record.type === V.rbe.GUILD_CATEGORY) return 40;
        for (let e of d.threadIds) {
            let { density: t = "default" } = this.props;
            a += rc(t);
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
                    let { enableHangoutWindow: e } = (0, ev.kY)({
                        guildId: d.record.guild_id,
                        location: "ChannelList",
                    });
                    e && ((0, eR.lr)(d.record) ? (a += 134) : s === d.id && (a += 44));
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
            nl,
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
                    case tE.PU:
                        return "hoisted-spacer";
                    case tE.bK:
                        return "uncategorized-spacer";
                    case tE.HP:
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
        if (t === tE.PU) {
            let e = c.getGuildActionSection(),
                t = e.getRow(n);
            if (null == t) return null;
            switch (t) {
                case tH.n.GUILD_HUB_HEADER_OPTIONS:
                    return (0, s.jsx)(
                        ey.A,
                        { guild: i, channel: tC.Ay.getDefaultChannel(i.id) },
                        tH.n.GUILD_HUB_HEADER_OPTIONS,
                    );
                case tH.n.GUILD_PREMIUM_PROGRESS_BAR:
                    let l = e.getRows();
                    return (0, s.jsx)(ti, { guild: i, withMargin: l.length > 1 }, tH.n.GUILD_PREMIUM_PROGRESS_BAR);
                case tH.n.GUILD_SPACE:
                    return (0, s.jsx)(ej, { guild: i, selected: a === et.VV.GUILD_SPACE }, tH.n.GUILD_SPACE);
                case tH.n.GUILD_HOME:
                    return (0, s.jsx)(ie, { guild: i, selected: a === et.VV.GUILD_HOME }, tH.n.GUILD_HOME);
                case tH.n.GUILD_SCHEDULED_EVENTS:
                    return (0, s.jsx)(
                        sB,
                        { guild: i, selected: a === tH.n.GUILD_SCHEDULED_EVENTS },
                        tH.n.GUILD_SCHEDULED_EVENTS,
                    );
                case tH.n.GUILD_ROLE_SUBSCRIPTIONS:
                    return (0, s.jsx)(
                        ip,
                        { guild: i, selected: a === et.VV.ROLE_SUBSCRIPTIONS },
                        tH.n.GUILD_ROLE_SUBSCRIPTIONS,
                    );
                case tH.n.GUILD_SHOP:
                    return (0, s.jsx)(iv, { guild: i, selected: a === et.VV.GUILD_SHOP }, tH.n.GUILD_SHOP);
                case tH.n.GUILD_GAME_SHOP:
                    return (0, s.jsx)(n1, { guild: i, selected: a === et.VV.GAME_SHOP }, tH.n.GUILD_GAME_SHOP);
                case tH.n.GUILD_CONJURE:
                    return (0, s.jsx)(nE, { guild: i, selected: a === et.VV.CONJURE }, tH.n.GUILD_CONJURE);
                case tH.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
                    return (0, s.jsx)(ia, { guild: i });
                case tH.n.GUILD_ONBOARDING_SETUP_PROGRESS:
                    return (0, s.jsx)(ig, { guild: i }, tH.n.GUILD_ONBOARDING_SETUP_PROGRESS);
                case tH.n.CHANNELS_AND_ROLES:
                    return (0, s.jsx)(
                        n4,
                        { guild: i, selected: a === et.VV.CHANNEL_BROWSER || a === et.VV.CUSTOMIZE_COMMUNITY },
                        tH.n.CHANNELS_AND_ROLES,
                    );
                case tH.n.GUILD_DIRECTORY:
                    return (0, s.jsx)(
                        nw,
                        { guild: i, selectedChannelId: a, disableManageChannels: h },
                        tH.n.GUILD_DIRECTORY,
                    );
                case tH.n.GUILD_MOD_DASH_MEMBER_SAFETY:
                    return (0, s.jsx)(
                        eE,
                        { guild: i, selected: a === et.VV.MEMBER_SAFETY },
                        tH.n.GUILD_MOD_DASH_MEMBER_SAFETY,
                    );
                case tH.n.GUILD_BOOSTS:
                    return (0, s.jsx)(eJ, { guildId: i.id, selected: a === et.VV.GUILD_BOOSTS }, tH.n.GUILD_BOOSTS);
                case tH.n.GAME_SERVERS:
                    return (0, s.jsx)(eu, { guildId: i.id, selected: a === et.VV.GAME_SERVERS }, tH.n.GAME_SERVERS);
                case tH.n.GAME_SERVERS_EMPTY:
                    return (0, s.jsx)(
                        ea,
                        { guildId: i.id, selected: a === et.VV.GAME_SERVERS },
                        tH.n.GAME_SERVERS_EMPTY,
                    );
                case tH.n.GUILD_OFFICIAL_MESSAGES:
                    return (0, s.jsx)(
                        id,
                        { guild: i, selected: a === et.VV.GUILD_OFFICIAL_MESSAGES },
                        tH.n.GUILD_OFFICIAL_MESSAGES,
                    );
                default:
                    return null;
            }
        }
        if (c.isPlaceholderRow(t, n)) return null;
        let f = c.getChannelFromSectionRow(t, n);
        if (null == f) return null;
        let { category: p, channel: C } = f,
            E = p instanceof tE.xu,
            x = C.record,
            N = `${t}${C.id}`;
        switch (x.type) {
            case V.rbe.GUILD_ANNOUNCEMENT:
            case V.rbe.GUILD_TEXT:
            case V.rbe.GUILD_FORUM:
            case V.rbe.GUILD_MEDIA:
            case V.rbe.DM:
            case V.rbe.GROUP_DM:
            case V.rbe.GUILD_APP:
                return (0, s.jsxs)(
                    r.Fragment,
                    {
                        children: [
                            (0, s.jsx)(su, {
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
                                ? (0, s.jsx)(iQ, {
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
            case V.rbe.GUILD_STAGE_VOICE:
                return (0, s.jsx)(
                    lD,
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
            case V.rbe.GUILD_VOICE:
                return (0, s.jsx)(
                    rd,
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
            case V.rbe.GUILD_STORE:
                return (0, s.jsx)(lw, { channel: x, guild: i, position: C.position, selected: a === C.id }, N);
            case V.rbe.GUILD_CATEGORY:
                if (t !== c.voiceChannelsSectionNumber) return null;
                return (0, s.jsx)(t8, { channel: x }, `readonly-${x.id}`);
            case V.rbe.PUBLIC_THREAD:
            case V.rbe.PRIVATE_THREAD:
            case V.rbe.ANNOUNCEMENT_THREAD:
                return (0, s.jsx)(
                    su,
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
            nu,
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
                let { hasDivider: i, canHaveVoiceSummary: l } = nd(t, n, e);
                return `section-footer-${e}${i ? "-divider" : ""}${l ? "-voice-summary" : ""}`;
            })(t, n, o),
        );
    };
    renderTopUnread() {
        let { topMention: e, bottomUnread: t, bottomMention: n, isUnreadVisible: i } = this.state,
            { guildId: l, guildChannels: r, guildChannelsVersion: a } = this.props;
        return (0, s.jsx)("div", {
            className: ni.Eo,
            children: (0, s.jsx)(sH, {
                ref: this.unreadTopRef,
                textUnread: el.intl.string(el.t.FCRiT3),
                textMention: el.intl.string(el.t["8zH0LJ"]),
                hide: null == e && (i || null != t || null != n),
                className: ni.Vq,
                barClassName: ni.bu,
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
        return (0, s.jsx)(sH, {
            reverse: !0,
            ref: this.unreadBottomRef,
            textUnread: el.intl.string(el.t.FCRiT3),
            textMention: el.intl.string(el.t["8zH0LJ"]),
            hide: null == i && l,
            className: ni.di,
            barClassName: ni.bu,
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
        if (e !== tE.PU) {
            if (null == t)
                return e === tE.HP
                    ? "favorites-header"
                    : e === n.recentsSectionNumber
                      ? "recents-header"
                      : e === n.voiceChannelsSectionNumber
                        ? "voice-channels"
                        : e === tE.bK
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
                        className: ni.XG,
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
        if (!tg.A.shouldShow("voice-conversations")) return;
        let { guildChannels: e } = this.props,
            t = e.getFirstVoiceChannel();
        if (null == t) return void tm.X8("voice-conversations");
        let n = this._list;
        if (null != n)
            for (let { section: e, row: i } of this.getSectionRowsFromChannel(t.id))
                n.isItemVisible(e, i) || tm.X8("voice-conversations");
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
                                      className: ni.Eo,
                                      children: (0, s.jsx)(sD, {
                                          position: "top",
                                          guildChannels: e,
                                          guildChannelsVersion: t,
                                          jumpToVoiceChannels: this.jumpToVoiceChannels,
                                          jumpToChannel: this.jumpToChannel,
                                      }),
                                  }),
                                  this.renderList(),
                                  (0, s.jsx)(sD, {
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
let rh = (e) => {
    let { guildId: t, selectedChannelId: n, selectedVoiceChannelId: i } = e,
        l = (0, u.bG)([B.Ay], () => B.Ay.keyboardModeEnabled),
        { analyticsLocations: a } = (0, K.Ay)(F.A.GUILD_CHANNEL_LIST),
        o = (0, u.bG)([T.A], () => T.A.getChannel(n)),
        h = (0, u.bG)([T.A], () => T.A.getChannel(i)),
        m = (0, u.bG)([P.A], () => P.A.getGuildId()),
        g = (0, eT.jN)(t),
        A = r.useRef(null),
        f = r.useCallback((e, t) => {
            let n = A.current;
            null != n &&
                (V.Ut1.test(t) || (0, et.jq)(t)
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
            [tc.A, T.A, ts.A],
            () => {
                let t;
                return [
                    (t = (0, y.ai)(e)
                        ? td.default
                              .keys(ts.A.getFavoriteChannels())
                              .map((e) => T.A.getChannel(e))
                              .filter(ta.Vq)
                              .filter((e) => e.isGuildStageVoice())
                        : tc.A.getChannels(e)).reduce((e, t) => {
                        let n = tc.A.getMutableParticipants(t.id, tu.ip.SPEAKER);
                        return ((e[t.id] = n.filter((e) => e.type === tu.wY.VOICE).map(th)), e);
                    }, {}),
                    t.reduce((e, t) => {
                        let { id: n } = t;
                        return e + tc.A.getParticipantsVersion(n);
                    }, 0),
                ];
            },
            [e],
            to.D,
        );
        return t;
    })(t);
    return (0, s.jsx)(K.f5, {
        value: a,
        children: (0, s.jsx)(x.A, {
            section: V.JJy.GUILD_CHANNEL_LIST,
            children: (0, s.jsxs)(d.hD, {
                navigator: E,
                children: [
                    (0, s.jsx)(tA.q, { containerRef: E.containerProps.ref, itemType: H }),
                    (0, s.jsx)(ru, {
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
function rm(e) {
    let t = (function (e) {
            var t;
            let n,
                i,
                l =
                    ((t = e.id),
                    (n = (0, tO.A)(t)),
                    (i = (0, tP.Ay)(t)),
                    !(0, u.bG)(
                        [D.A],
                        () => {
                            if (null == t) return !1;
                            let e = D.A.getGuild(t);
                            return e?.features.has(V.GuildFeatures.HUB) ?? !1;
                        },
                        [t],
                    ) &&
                        (n || i.length > 0)),
                s = (0, tj.W)(e.id),
                r = (0, tD.vz)(e.id),
                a = (0, tI.r)(e),
                o = (0, tV.jz)(e),
                d = (0, tL.d)(e.id),
                c = (0, t_.bG)([tR.h], () => tR.h.getNewMemberActions(e.id), [e.id]),
                h = (0, tS.Q9)(e, "useGuildActionRows"),
                m = (0, tU.A)(e.id),
                g = (0, ty.jY)(e.id),
                A = (0, tT.A)(e.id),
                { showSetupProgressRow: f } = (0, tM.D)(`useGuildActionRows${A ? "" : "-DISABLED"}`),
                p = (0, tv.fw)(e.id),
                C = (0, eI.Uq)(e.id, "useGuildActionRows"),
                E = [],
                x = e.features.has(V.GuildFeatures.HUB),
                N = e.features.has(V.GuildFeatures.COMMUNITY),
                _ = e.features.has(V.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
                S = (0, e6.A)(e.id),
                I = e8(e),
                b = (0, tw.bW)(e.id, "useGuildActionRows"),
                G = (0, tb.C$)(e.id, "useGuildActionRows"),
                j = e.features.has(V.GuildFeatures.GAME_SERVERS),
                v = (0, tG.N)("useGuildActionRows"),
                [R] = (0, $.kn)(G && v && !j ? [W.M.EMPTY_GAME_SERVER_TAB] : [], void 0, !0);
            return (
                x && E.push(tH.n.GUILD_HUB_HEADER_OPTIONS),
                A && f
                    ? E.push(tH.n.GUILD_ONBOARDING_SETUP_PROGRESS)
                    : !g && d && m && null != c && c.length > 0
                      ? E.push(tH.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR)
                      : e.premiumProgressBarEnabled && I > 0 && E.push(tH.n.GUILD_PREMIUM_PROGRESS_BAR),
                !x && d && E.push(tH.n.GUILD_HOME),
                C && E.push(tH.n.GUILD_SPACE),
                l && E.push(tH.n.GUILD_SCHEDULED_EVENTS),
                !x && N && E.push(tH.n.CHANNELS_AND_ROLES),
                r && E.push(tH.n.GUILD_ROLE_SUBSCRIPTIONS),
                a && E.push(tH.n.GUILD_SHOP),
                o && E.push(tH.n.GUILD_GAME_SHOP),
                ((p && (N || _)) || (s && e.features.has(V.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL))) &&
                    E.push(tH.n.GUILD_MOD_DASH_MEMBER_SAFETY),
                S && E.push(tH.n.GUILD_BOOSTS),
                b && E.push(tH.n.GUILD_OFFICIAL_MESSAGES),
                G && (j ? E.push(tH.n.GAME_SERVERS) : null != R && E.push(tH.n.GAME_SERVERS_EMPTY)),
                h && E.push(tH.n.GUILD_CONJURE),
                E
            );
        })(e.guild),
        n = (0, u.cf)([tx.A], () => tx.A.getGuild(e.guildId, { guildActionRows: t })),
        { density: i } = (0, C.wR)();
    return (0, s.jsx)(rh, { ...e, ...n, density: i });
}
