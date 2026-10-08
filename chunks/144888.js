let i;
(n.d(t, { B: () => rA, i: () => rm }), n(321073));
var l,
    s,
    r = n(477900),
    a = n(582128),
    o = n(435558),
    d = n.n(o),
    c = n(837381),
    u = n(887129),
    h = n(17928),
    g = n(661531),
    m = n(715828),
    A = n(312138),
    f = n(475825),
    p = n(707554),
    C = n(140735),
    E = n(38021),
    x = n(951001),
    N = n(820284),
    _ = n(480747),
    S = n(437725),
    I = n(192308),
    b = n(999903),
    G = n(44757),
    j = n(97587),
    v = n(838533),
    R = n(79843),
    y = n(466152),
    T = n(5180),
    M = n(770376),
    L = n(924985),
    U = n(734057),
    D = n(769765),
    O = n(71393),
    P = n(576705),
    V = n(967198),
    w = n(543465),
    H = n(652215);
let k = "DRAGGABLE_GUILD_CHANNEL";
function B(e) {
    return (0, _.T)(
        k,
        {
            drop(e, t) {
                let n = V.A.getGuildId(),
                    i = t.getItem(),
                    l = (0, G.QO)((0, v.A)(n, i.id), i.position, e.channel, e.position, i.channelList);
                if (null == l) return;
                let s = (0, v.A)(n, i.id);
                if (null == s) return;
                let r = D.A.getCategories(n),
                    a = (0, G.RL)(s, (0, v.A)(n, l.referenceId), l.parentId, r);
                (0, y.A)(n, s, l.parentId, a);
            },
            canDrop(e, t) {
                let n = t.getItem(),
                    i = U.A.getChannel(n.id);
                if (null == i) return !1;
                let l = (0, G.QO)(U.A.getChannel(n.id), n.position, e.channel, e.position, n.channelList);
                if (null == l) return !1;
                if ((0, T.ai)(V.A.getGuildId())) return !0;
                if (w.Ay.isFavorite(n.guildId, e.channel.id)) return !1;
                let s = O.A.getGuild(n.guildId);
                if (null == s) return !1;
                let r = U.A.getChannel(l.parentId),
                    a = (0, j.Ay)((0, j.Fd)(i), s),
                    o = (0, j.Ay)(r, s);
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
        (0, S.I)(
            k,
            {
                canDrag(e) {
                    let { channel: t } = e,
                        i = V.A.getGuildId(),
                        l = (0, R.A)(t, i);
                    if (null == l) return !0;
                    switch (l.reason) {
                        case "no-permission":
                        default:
                            return !1;
                        case "opt-in-channels":
                            return (
                                (0, M.A)() &&
                                    (0, I.openModalLazy)(async () => {
                                        let { default: e } = await Promise.all([n.e("57729"), n.e("24848")]).then(
                                            n.bind(n, 354643),
                                        );
                                        return (t) => (0, r.jsx)(e, { ...t });
                                    }),
                                !1
                            );
                        case "pinned-channel":
                            return (
                                (0, I.openModalLazy)(async () => {
                                    let { default: e } = await n.e("280545").then(n.bind(n, 933752));
                                    return (n) => (0, r.jsx)(e, { ...n, guildId: l.guild.id, channelId: t.id });
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
                        r = V.A.getGuildId(),
                        a = D.A.getCategories(r);
                    return {
                        isChannelDrag: !0,
                        id: t,
                        position: s,
                        parentId: n,
                        type: l,
                        channelList: (0, b.A)(a._categories, a, (e) => {
                            let { channel: t } = e;
                            return t.type === H.rbe.GUILD_CATEGORY && null != a[t.id] && 0 === a[t.id].length
                                ? !!(0, T.ai)(r) ||
                                      (P.A.can(H.xBc.MANAGE_CHANNELS, t) && P.A.can(H.xBc.VIEW_CHANNEL, t))
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
var F = n(775602),
    K = n(793574),
    z = n(688810),
    W = n(915089),
    Y = n(554146),
    X = n(866665),
    q = n(939249),
    J = n(789645),
    Z = n(508770),
    $ = n(687966),
    Q = n(131607),
    ee = n(652793),
    et = n(976860),
    en = n(746080),
    ei = n(49999),
    el = n(394107),
    es = n(660183),
    er = n(275833),
    ea = n(964306);
let eo = a.memo(function (e) {
    let { guildId: t, selected: i } = e,
        [l, s] = (0, Q.ww)([Y.M.GAME_SERVER_HOSTING_NEW_BADGE], t),
        o = l === Y.M.GAME_SERVER_HOSTING_NEW_BADGE,
        d = a.useCallback(() => {
            (s(ei.i.USER_DISMISS), (0, et.pX)(H.BVt.CHANNEL(t, en.VV.GAME_SERVERS)));
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
            className: er.c,
            children: [
                (0, r.jsx)("div", {
                    className: ea.Xs,
                    children: (0, r.jsx)(X.m, {
                        text: es.intl.string(es.t.fgq1gs),
                        position: "top",
                        children: (0, r.jsx)(q.D, {
                            onClick: c,
                            "aria-label": es.intl.string(es.t.fgq1gs),
                            children: (0, r.jsx)(J.P, { size: "xs", color: "currentColor", className: ea.gE }),
                        }),
                    }),
                }),
                o &&
                    (0, r.jsx)("div", {
                        className: ea.yW,
                        children: (0, r.jsx)(Z.E, { type: "new", variant: "brand" }),
                    }),
            ],
        });
    return (0, r.jsx)(ee.G, {
        className: ea.Ki,
        id: `game-server-empty-${t}`,
        renderIcon: (e) => (0, r.jsx)($.GameControllerIcon, { size: "md", className: e, color: "currentColor" }),
        text: es.intl.string(el.default.vCzwM7),
        selected: i,
        onClick: d,
        trailing: u,
    });
});
var ed = n(361158),
    ec = n(270533),
    eu = n(186111);
let eh = a.memo(function (e) {
    let { guildId: t, selected: n } = e,
        i = (0, I.useHasAnyModalOpen)(),
        l = (0, h.bG)([eu.A], () => eu.A.hasLayers()),
        s = (0, ed.xr)((e) => e.fullScreenLayers.length > 0),
        [o, d] = (0, Q.ww)([Y.M.GAME_SERVER_HOSTING_NEW_BADGE], t),
        c = o === Y.M.GAME_SERVER_HOSTING_NEW_BADGE,
        [u, g] = (0, Q.ww)(i || l || s || !c ? [] : [Y.M.GAME_SERVER_HOSTING_NEW_COACHMARK], t),
        m = a.useCallback(
            (e) => {
                (d(e), g(e));
            },
            [d, g],
        ),
        A = a.useCallback(() => {
            (m(ei.i.USER_DISMISS), (0, et.pX)(H.BVt.CHANNEL(t, en.VV.GAME_SERVERS)));
        }, [t, m]),
        f = a.useRef(null),
        p = u === Y.M.GAME_SERVER_HOSTING_NEW_COACHMARK,
        C = a.useCallback(() => (0, r.jsx)(ec.mn, { channelRowRef: f, guildId: t, markAsDismissed: m }), [t, m]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(ee.G, {
                ref: f,
                id: `game-server-${t}`,
                renderIcon: (e) =>
                    (0, r.jsx)($.GameControllerIcon, { size: "md", className: e, color: "currentColor" }),
                text: es.intl.string(el.default.vCzwM7),
                selected: n,
                onClick: A,
                trailing: c ? (0, r.jsx)(Z.E, { type: "new", variant: "brand" }) : null,
            }),
            p && C(),
        ],
    });
});
var eg = n(177953),
    em = n(812993),
    eA = n(624458),
    ef = n(844944),
    ep = n(513461),
    eC = n(663997),
    eE = n(221950);
function ex(e) {
    let { guild: t, selected: n } = e,
        i = (0, h.bG)([P.A], () => P.A.can(H.xBc.KICK_MEMBERS, t)),
        l = (0, h.bG)([ef.A], () => ef.A.getSubmittedGuildJoinRequestTotal(t.id)),
        s = i ? (l ?? 0) : 0;
    a.useEffect(() => {
        i &&
            t.features.has(H.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
            t.features.has(H.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
            eA.A.fetchGuildJoinRequests({ guildId: t.id, status: ep.B5.SUBMITTED, limit: eC.L });
    }, [i, t]);
    let o = a.useCallback(() => {
        (0, eE.aZ)(t.id);
    }, [t.id]);
    return (0, r.jsx)(ee.G, {
        id: `members-${t.id}`,
        renderIcon: (e) => (0, r.jsx)(eg.n, { size: "md", color: "currentColor", className: e }),
        text: es.intl.string(es.t.oclz3Z),
        selected: n,
        onClick: o,
        trailing: s > 0 ? (0, r.jsx)(em.hV, { count: s }) : null,
    });
}
var eN = n(43105),
    e_ = n(332837),
    eS = n(93675),
    eI = n(942857),
    eb = n(313627),
    eG = n(61567),
    ej = n(151098);
function ev(e) {
    let { guild: t, selected: i } = e,
        l = (0, eI.A)(),
        [s, o] = (0, Q.kn)(l ? [] : [Y.M.GUILD_SPACE_COACHMARK], { bypassAutoDismiss: !0 }),
        d = s === Y.M.GUILD_SPACE_COACHMARK,
        c = a.useRef(null),
        u = (0, eb.mN)(t),
        h = a.useCallback(() => {
            (o(ei.i.USER_DISMISS), (0, et.pX)(H.BVt.CHANNEL(t.id, en.VV.GUILD_SPACE)));
        }, [t.id, o]),
        g = a.useCallback(() => {
            (o(ei.i.TAKE_ACTION), (0, et.pX)(H.BVt.CHANNEL(t.id, en.VV.GUILD_SPACE)));
        }, [t.id, o]),
        m = a.useCallback(
            (e) => {
                (e.stopPropagation(),
                    (0, I.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([
                            n.e("8422"),
                            n.e("37786"),
                            n.e("303807"),
                            n.e("842987"),
                            n.e("421410"),
                        ]).then(n.bind(n, 643065));
                        return (n) => (0, r.jsx)(e, { ...n, guildId: t.id });
                    }));
            },
            [t.id],
        ),
        A = d ? (0, r.jsx)(Z.E, { type: "new", variant: "brand" }) : null,
        f = u
            ? (0, r.jsxs)("div", {
                  className: ej.c,
                  children: [
                      (0, r.jsx)("div", {
                          className: ea.Xs,
                          children: (0, r.jsx)(X.m, {
                              text: es.intl.string(es.t.R9GHya),
                              position: "top",
                              children: (0, r.jsx)(q.D, {
                                  onClick: m,
                                  "aria-label": es.intl.string(es.t.R9GHya),
                                  children: (0, r.jsx)(J.P, { size: "xs", color: "currentColor", className: ea.gE }),
                              }),
                          }),
                      }),
                      null != A ? (0, r.jsx)("div", { className: ea.yW, children: A }) : null,
                  ],
              })
            : A;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(ee.G, {
                ref: c,
                className: u ? ea.Ki : void 0,
                id: `guild-space-tab-${t.id}`,
                renderIcon: (e) => (0, r.jsx)(e_.HomeIcon, { size: "md", color: "currentColor", className: e }),
                text: es.intl.string(es.t["04IVMq"]),
                selected: i,
                onClick: h,
                trailing: f,
            }),
            d
                ? (0, r.jsx)(eN.A, {
                      targetElementRef: c,
                      title: es.intl.string(eG.default["+OEqVQ"]),
                      body: es.intl.string(eG.default["BP//Ot"]),
                      graphic: {
                          type: "rive",
                          rive: eS.f,
                          aspectRatio: "16/9",
                          props: { dataBinding: { on: !0 }, withReducedMotion: "halt", fit: "contain" },
                      },
                      actions: [{ text: es.intl.string(es.t.RzWDqY), variant: "primary", onClick: g }],
                      shouldShow: !0,
                      position: "right",
                      align: "top",
                      alignmentStrategy: "edge",
                      caretConfig: { align: "start" },
                      scrollBehavior: "close",
                      onRequestClose: () => o(ei.i.USER_DISMISS),
                  })
                : null,
        ],
    });
}
var eR = n(581007),
    ey = n(522435),
    eT = n(285406),
    eM = n(582904),
    eL = n(419534),
    eU = n(395504),
    eD = n(503698),
    eO = n.n(eD),
    eP = n(695366),
    eV = n(104510),
    ew = n(544048),
    eH = n(868652),
    ek = n(379229),
    eB = n(482487),
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
        case ek.cD.WARNING:
            return (0, r.jsx)(eP.E, { color: g.A.colors.STATUS_WARNING, size: "sm" });
        case ek.cD.UNREAD:
            return (0, r.jsx)(em.hV, { count: t.count });
        default:
            return null;
    }
}
let eJ = { animation: { BEG: 0, END: 75 }, LOOP: { BEG: 76, END: 376 } },
    eZ = a.memo(function (e) {
        let { guildId: t, selected: i } = e,
            l = (0, eF.Ay)(t),
            { showHighlight: s, markAsDismissed: o } = (function () {
                let e = (0, eW.c)(ez.C.GUILD_BOOST_TAB_BANNER),
                    t = null != e && "guildBoostTabBanner" === e.properties.properties.oneofKind,
                    [n, i] = (0, Q.Cc)(t ? Y.M.GUILD_BOOST_TAB_HIGHLIGHT : null, e?.promotionId ?? "");
                return { showHighlight: n === Y.M.GUILD_BOOST_TAB_HIGHLIGHT, markAsDismissed: i };
            })(),
            { showNewBadgeOnRow: d, dismissNewBadgeIfShown: c } = (0, eB.A)(
                t,
                l?.indicator != null || l?.popout != null,
            ),
            u = a.useCallback(() => {
                (c(),
                    (0, eH.Zm)(t),
                    (0, eK.A)(t, K.A.GUILD_POWERUPS_CHANNEL_LIST_ROW),
                    l?.popout?.markAsDismissed(ei.i.INDIRECT_ACTION));
            }, [t, c, l]),
            m = a.useRef(null),
            A = (0, I.useModalsStore)(I.hasAnyModalOpenSelector),
            f = (0, h.bG)([eu.A], () => eu.A.hasLayers()),
            p = (0, ed.xr)((e) => e.fullScreenLayers.length > 0),
            C = A || f || p,
            E = a.useCallback(() => {
                if (l?.popout == null || C) return null;
                switch (l?.popout?.type) {
                    case ek.o.LEVEL_REACHED:
                        return (0, r.jsx)(ec.HW, { guildId: t, channelRowRef: m, ...l.popout });
                    case ek.o.PERKS_AVAILABLE:
                        return (0, r.jsx)(ec.UB, { guildId: t, channelRowRef: m, ...l.popout });
                    case ek.o.PERKS_PURCHASABLE:
                        return (0, r.jsx)(ec.lw, { guildId: t, channelRowRef: m, ...l.popout });
                    case ek.o.NEW_PERK_AVAILABLE:
                        return (0, r.jsx)(ec.bo, { guildId: t, channelRowRef: m, ...l.popout });
                    case ek.o.BOOST_TO_UNLOCK:
                        return (0, r.jsx)(ec.Gw, { guildId: t, channelRowRef: m, ...l.popout });
                    case ek.o.EXPIRING_PERK:
                        return (0, r.jsx)(ec.Mr, { guildId: t, channelRowRef: m, ...l.popout });
                    case ek.o.GAME_SERVER_HOSTING_AVAILABLE:
                    case ek.o.GAME_SERVER_HOSTING_GUILD_ELIGIBLE:
                        return (0, r.jsx)(ec.jz, { guildId: t, channelRowRef: m, ...l.popout });
                    case ek.o.GAME_SERVER_NEW_GAMES:
                        return (0, r.jsx)(ec.YX, { guildId: t, channelRowRef: m, ...l.popout });
                    default:
                        return (0, r.jsx)("div", {});
                }
            }, [t, l?.popout, m, C]);
        a.useEffect(() => {
            i && s && o(ei.i.AUTO_DISMISS);
        }, [i, s, o]);
        let x = l?.popout != null || s,
            [N, _] = a.useState(null);
        a.useEffect(() => {
            x || _(null);
        }, [x]);
        let S = a.useCallback((e) => {
            _(e);
        }, []);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(ee.G, {
                    ref: m,
                    className: eX.kL,
                    id: `skill-trees-${t}`,
                    renderIcon: (e) => (0, r.jsx)(eV._, { size: "md", className: e, color: "currentColor" }),
                    background:
                        x &&
                        (0, r.jsx)("div", {
                            className: eX.Fi,
                            children: (0, r.jsx)(ew.t, {
                                nextScene: null == N ? "animation" : "LOOP",
                                className: eX.UU,
                                sceneSegments: eJ,
                                importData: () => n.e("867807").then(n.t.bind(n, 217762, 19)),
                                onScenePlay: S,
                                rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
                            }),
                        }),
                    text: (0, r.jsx)("span", {
                        className: eO()({ [eX.A7]: l?.showUnread === !0 }),
                        children: es.intl.string(eY.default.yv3DJJ),
                    }),
                    selected: i,
                    onClick: u,
                    showUnread: l?.showUnread === !0,
                    trailing: d
                        ? (0, r.jsx)(em.Lp, {
                              text: es.intl.string(es.t.y2b7CA),
                              color: g.A.colors.BACKGROUND_BRAND.css,
                          })
                        : (0, r.jsx)(eq, { indicator: l?.indicator }),
                }),
                E(),
            ],
        });
    });
var e$ = n(202091),
    eQ = n(717421),
    e0 = n(834730),
    e1 = n(442433),
    e3 = n(230135),
    e2 = n(73153);
let e9 = {};
class e5 extends h.Ay.PersistedStore {
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
let e7 = new e5(e2.h, {
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
    return (0, a.useMemo)(() => {
        if (null == e) return 0;
        let t = e?.features.has(H.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) === !0 ? 0 : H.M2T[H.TVA.TIER_3],
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
let tn = (e) => {
    let { appliedBoostCount: t, maxBoostCount: n, premiumSubscriberCount: i, className: l, ref: s } = e,
        o = t >= n,
        d = Math.min((t / n) * 100, 100),
        c = `calc(${d}% - 4px)`,
        [u, h] = (0, eQ.z)(
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
            className: tt.hQ,
            children: [
                (0, r.jsx)("div", { className: eO()(tt.L$, l) }),
                (0, r.jsx)(e$.animated.div, { className: eO()(tt.qB, { [tt.mu]: d <= 5 }), style: u }),
                (0, r.jsxs)("div", {
                    className: tt.FS,
                    children: [
                        (0, r.jsxs)("div", {
                            className: tt.Ui,
                            children: [
                                (0, r.jsx)(e0.E, {
                                    className: tt.Qq,
                                    variant: "text-xs/semibold",
                                    children: es.intl.string(eY.default.NI6Ihe),
                                }),
                                i >= n &&
                                    (0, r.jsx)(e0.E, {
                                        className: tt.Qq,
                                        variant: "text-xs/semibold",
                                        children: "\uD83C\uDF89",
                                    }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: tt.Ui,
                            children: [
                                (0, r.jsx)(e0.E, {
                                    className: eO()(tt.Qq, tt.ue),
                                    variant: "text-xs/semibold",
                                    children: o
                                        ? es.intl.formatToPlainString(eY.default["Ehpq+7"], { appliedBoostCount: t })
                                        : es.intl.formatToPlainString(eY.default["/rbPDs"], {
                                              appliedBoostCount: t,
                                              maxBoostCount: n,
                                          }),
                                }),
                                (0, r.jsx)(e6.A, {
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
};
function ti(e) {
    let { guild: t, withMargin: i } = e,
        l = te(t),
        s = (0, e4.A)(t.id),
        o = a.useCallback(() => {
            (0, eK.A)(t.id, K.A.GUILD_BOOSTING_SIDEBAR_DISPLAY);
        }, [t.id]),
        d = (0, h.bG)([e7], () => e7.getCountForGuild(t.id) ?? 0);
    a.useEffect(() => {
        d !== t.premiumSubscriberCount && (0, e3.u)(t.id, t.premiumSubscriberCount);
    }, [t.id, d, t.premiumSubscriberCount]);
    let c = a.useCallback(
        (e) => {
            s &&
                (0, e1.L3)(e, async () => {
                    let { default: e } = await n.e("371728").then(n.bind(n, 709843));
                    return (n) => (0, r.jsx)(e, { ...n, guild: t });
                });
        },
        [s, t],
    );
    return (0, r.jsx)(q.D, {
        "aria-label": void 0,
        role: "button",
        focusProps: { offset: { left: 10, right: 4 } },
        onClick: o,
        className: eO()(tt.kL, { [tt.aF]: i }),
        onContextMenu: c,
        children: (0, r.jsx)(tn, {
            appliedBoostCount: d,
            maxBoostCount: l,
            premiumSubscriberCount: t.premiumSubscriberCount,
        }),
    });
}
function tl(e) {
    let { guild: t, withMargin: n } = e;
    return (0, r.jsx)(ti, { guild: t, withMargin: n });
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
function tg(e) {
    let { voiceState: t, userNick: n, user: i } = e,
        l = (0, ta.hz)(t, n);
    return { user: i, voiceState: t, nick: n, comparator: l };
}
var tm = n(787541),
    tA = n(79858),
    tf = n(600761),
    tp = n(95701),
    tC = n(72314),
    tE = n(808728),
    tx = n(297469),
    tN = n(960755),
    t_ = n(633965),
    tS = n(702841),
    tI = n(246338),
    tb = n(41200),
    tG = n(831617),
    tj = n(589603),
    tv = n(496767),
    tR = n(134413),
    ty = n(701785),
    tT = n(101611),
    tM = n(473529),
    tL = n(578484),
    tU = n(71165),
    tD = n(978165),
    tO = n(960253),
    tP = n(770666),
    tV = n(508654),
    tw = n(521427),
    tH = n(871123),
    tk = n(281405),
    tB = n(3026),
    tF = n(821609),
    tK = n(499373),
    tz = n(559106),
    tW = n(847374),
    tY = n(285796),
    tX = n(983851),
    tq = n(914430),
    tJ = n(47167),
    tZ = n(485947),
    t$ = n(970853),
    tQ = n(93055),
    t0 = n(349828),
    t1 = n(22277),
    t3 = n(551851),
    t2 = n(391507);
function t9(e) {
    e.stopPropagation();
}
function t5(e) {
    let { label: t, onClick: n, tabIndex: i } = e;
    return (0, r.jsx)(X.m, {
        text: t,
        children: (0, r.jsx)(q.D, {
            className: eO()(t2.c9, t2.ih),
            onClick: n,
            tabIndex: i,
            role: "button",
            "aria-label": t,
            children: (0, r.jsx)(tK.T, { size: "xs", color: "currentColor", className: t2.hs }),
        }),
    });
}
let t7 = B(
        a.memo(function (e) {
            let t,
                {
                    channel: i,
                    connectChannelDragSource: l,
                    connectChannelDropTarget: s,
                    disableManageChannels: o,
                    position: d,
                    sortingPosition: u,
                    hideIcon: g,
                    children: m,
                } = e,
                A = (0, h.bG)([w.Ay], () => w.Ay.isChannelMuted(i.getGuildId(), i.id)),
                f = (0, h.bG)([L.A], () => L.A.isCollapsed(i.id)),
                p = (0, h.bG)([P.A], () => P.A.can(H.xBc.MANAGE_CHANNELS, i)),
                C = (0, tJ.Ay)(i);
            t = null != u ? (d > u ? t2.mU : t2.TR) : t2.fx;
            let E = a.useCallback(() => {
                    f ? (0, tq.fh)(i.id) : (0, tq.Gv)(i.id);
                }, [i.id, f]),
                x = a.useCallback(
                    (e) => {
                        if ("null" !== i.id) {
                            let t = O.A.getGuild(i.getGuildId());
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
                                (0, r.jsx)(l, {
                                    ...n,
                                    channelType: e,
                                    guildId: t,
                                    categoryId: "null" !== i.id ? i.id : null,
                                });
                        });
                }, [i]),
                _ = (function (e, t) {
                    let n = (0, h.bG)([tr.A], () => tr.A.autoAddJoinedThreads),
                        { isAtLimit: i } = (0, tQ.ft)();
                    return n &&
                        i &&
                        null != t &&
                        (0, T.ai)(e.getGuildId()) &&
                        e.type === H.rbe.GUILD_CATEGORY &&
                        t.trim().toLowerCase() === t0.A.toLowerCase()
                        ? { label: es.intl.string(t1.default.WsUrMD), tooltip: es.intl.string(t1.default.dW9Kov) }
                        : null;
                })(i, C),
                S = (0, t$.A)(i);
            null == S && p && !o && (S = { label: es.intl.string(es.t["fUYU+j"]), perform: N });
            let { role: b, tabIndex: G, ...j } = (0, c.rm)(i.id),
                v = a.useRef(null),
                R = a.useRef(null),
                y = (0, r.jsxs)("li", {
                    className: t,
                    "data-dnd-name": C,
                    children: [
                        (0, r.jsx)(tz.vN, {
                            focusTarget: v,
                            ringTarget: R,
                            offset: { left: 4, right: 4 },
                            children: (0, r.jsxs)("div", {
                                ref: R,
                                className: eO()(t2.Ki, t2.iE, { [t2.yZ]: f, [t2.SU]: A, [t2.vk]: !0 }),
                                onContextMenu: x,
                                children: [
                                    (0, r.jsxs)(q.D, {
                                        innerRef: v,
                                        className: t2.rb,
                                        tabIndex: G,
                                        ...j,
                                        onClick: E,
                                        "aria-label": es.intl.formatToPlainString(es.t.y5l3J2, { categoryName: C }),
                                        "aria-expanded": !f,
                                        focusProps: { enabled: !1 },
                                        children: [
                                            (0, r.jsx)(tZ.A, {
                                                className: t2.UU,
                                                children: (0, r.jsx)(tB.A, { children: C }),
                                            }),
                                            null != _
                                                ? (0, r.jsx)("span", {
                                                      className: t2.qS,
                                                      children: (0, r.jsx)(X.m, {
                                                          asContainer: !0,
                                                          text: _.tooltip,
                                                          children: (0, r.jsx)(Z.E, {
                                                              type: { text: _.label },
                                                              variant: "default",
                                                          }),
                                                      }),
                                                  })
                                                : null,
                                            g
                                                ? null
                                                : (0, r.jsx)(tW.a, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: t2.Kk,
                                                  }),
                                        ],
                                    }),
                                    (0, r.jsx)("div", {
                                        onClick: t9,
                                        className: t2.Y_,
                                        children:
                                            null != S
                                                ? (0, r.jsx)(t5, { label: S.label, onClick: S.perform, tabIndex: G })
                                                : null,
                                    }),
                                ],
                            }),
                        }),
                        m,
                    ],
                });
            return null != s && null != l ? s(l(y)) : y;
        }),
    ),
    t6 = a.memo(function (e) {
        let { name: t, onDismiss: n, className: i } = e;
        return (0, r.jsx)("li", {
            className: eO()(i, t2.fx),
            children: (0, r.jsxs)("div", {
                className: eO()(t2.Ki, t2._V),
                children: [
                    (0, r.jsx)("div", {
                        className: t2.rb,
                        children: (0, r.jsx)(tZ.A, { className: t2.UU, children: (0, r.jsx)(tB.A, { children: t }) }),
                    }),
                    null != n
                        ? (0, r.jsx)(X.m, {
                              asContainer: !0,
                              text: es.intl.string(es.t["5qNmsU"]),
                              children: (0, r.jsx)(q.D, {
                                  className: t2.r,
                                  onClick: n,
                                  children: (0, r.jsx)(tY.a, { size: "md", color: "currentColor", className: t2.X8 }),
                              }),
                          })
                        : null,
                ],
            }),
        });
    }),
    t4 = a.memo(function (e) {
        let { category: t } = e,
            n = (0, h.bG)([t3.A], () => t3.A.isVoiceCategoryCollapsed(t.guild.id)),
            i = a.useCallback(() => {
                var e, i;
                n
                    ? ((e = t.guild.id), e2.h.dispatch({ type: "VOICE_CATEGORY_EXPAND", guildId: e, expand: !0 }))
                    : ((i = t.guild.id), e2.h.dispatch({ type: "VOICE_CATEGORY_COLLAPSE", guildId: i, expand: !1 }));
            }, [t.guild.id, n]);
        return (0, r.jsx)("div", {
            className: t2.oA,
            children: (0, r.jsx)(tF.$, {
                variant: "secondary",
                fullWidth: !0,
                onClick: i,
                icon: tX.H,
                text: n ? es.intl.string(es.t["/eB9Bg"]) : es.intl.string(es.t.Q2gPWl),
            }),
        });
    }),
    t8 = a.memo(function (e) {
        let { category: t, channel: n } = e,
            i = (0, h.bG)([t3.A], () => t3.A.isVoiceCategoryCollapsed(t.guild.id));
        return i || null == n || n.record.type === H.rbe.GUILD_CATEGORY
            ? i
                ? (0, r.jsx)("li", {
                      className: t2.fx,
                      children: (0, r.jsx)("div", {
                          className: eO()(t2.Ki, t2._V),
                          children: (0, r.jsx)(tZ.A, {
                              className: t2.UU,
                              children: (0, r.jsx)(tB.A, { children: es.intl.string(es.t["V/u9Dy"]) }),
                          }),
                      }),
                  })
                : null
            : (0, r.jsx)("div", { style: { height: 16 } });
    }),
    ne = a.memo(function (e) {
        let { channel: t } = e,
            n = (0, tJ.Ay)(t);
        return (0, r.jsx)("li", {
            className: t2.fx,
            children: (0, r.jsx)("div", {
                className: eO()(t2.Ki, t2._V),
                children: (0, r.jsx)(tZ.A, { className: t2.UU, children: (0, r.jsx)(tB.A, { children: n }) }),
            }),
        });
    });
var nt = n(728321),
    nn = n(244083);
let ni = { origin: { x: -36, y: 7 }, targetWidth: 232, targetHeight: 40, offset: { x: 0, y: 0 } };
var nl = n(906659);
let ns = a.memo(function (e) {
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
            (null != s && l.includes(s) && (t = (0, eL.xb)(i)), (0, eL.DD)(n.id, l, t));
        }, [n.id, s, i, l]),
        { density: c } = (0, E.wR)(),
        u = "compact" === c ? 8 : 12;
    switch (t) {
        case tx.PU:
            return (0, r.jsx)("div", { style: { height: u } });
        case tx.bK:
            if (n.features.has(H.GuildFeatures.HUB)) return null;
            return (0, r.jsx)("div", { style: { height: u } });
        case tx.HP:
            return (0, r.jsx)(t6, { name: es.intl.string(es.t.mlPMCy) });
        case i.recentsSectionNumber:
            return (0, r.jsx)(t6, { name: es.intl.string(es.t.gKcrqM), onDismiss: d });
        case i.voiceChannelsSectionNumber: {
            let e = i.getCategoryFromSection(i.voiceChannelsSectionNumber);
            if (null == e || e.isEmpty()) return null;
            let n = i.getChannelFromSectionRow(t, 0)?.channel;
            return (0, r.jsxs)(a.Fragment, {
                children: [(0, r.jsx)("div", { className: nl.ts }), (0, r.jsx)(t8, { category: e, channel: n })],
            });
        }
        case tx.TF: {
            let e = i.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, r.jsx)(t7, {
                channel: e.record,
                position: e.position,
                disableManageChannels: o,
                children: (0, r.jsx)(nt.A, {
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
            return (0, r.jsx)(t7, { channel: e.record, position: e.position, disableManageChannels: o });
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
                        (1 === t.length && t[0] === tk.n.GUILD_PREMIUM_PROGRESS_BAR) ||
                        e.getGuildActionSection().isEmpty()
                    );
                }
                return 0 === e.getSections(!1)[t];
            })(e, n) &&
            (n === tx.PU ||
                ((0, T.ai)(e.id)
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
let nu = a.memo(function (e) {
        let { guildChannels: t, guildChannelsVersion: n } = e,
            i = a.useMemo(() => t.getCategoryFromSection(t.voiceChannelsSectionNumber), [t, n]);
        return null == i ? null : (0, r.jsx)(t4, { category: i });
    }),
    nh = a.memo(function (e) {
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
            { hasDivider: u, canHaveVoiceSummary: g } = a.useMemo(() => nc(n, c, t), [n, c, t, i]),
            m = a.useMemo(() => (t === tx.PU ? null : n.getCategoryFromSection(t)), [n, t, i]),
            A = (0, eU.jN)(s),
            { enableWaveformIcon: f } = (0, na.b)(s, "ChannelListSectionFooter"),
            p = (0, h.yK)(
                [w.Ay],
                () => {
                    if (null == m || !m.isCollapsed || !g) return [];
                    let e = m.getChannelRecords(),
                        t = [];
                    for (let n of e) {
                        if (!n.isGuildVocal()) continue;
                        let e = w.Ay.isChannelOrParentOptedIn(s, n.id);
                        (!A || e) && t.push(n);
                    }
                    return t;
                },
                [m, g, s, A],
            ),
            C = a.useMemo(
                () => (0, nd.fK)({ channels: p, selectedChannelId: o, selectedVoiceChannelId: d, voiceStates: l }),
                [p, o, d, l],
            );
        if (t === n.voiceChannelsSectionNumber) return (0, r.jsx)(nu, { guildChannels: n, guildChannelsVersion: i });
        let E = u ? (0, r.jsx)("div", { className: nl.ts }) : null;
        return g && 0 !== C.length
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)("div", {
                          className: nl.qz,
                          children: (0, r.jsx)(nr.Ay, {
                              renderIcon: !0,
                              users: C,
                              max: 8,
                              showUserPopout: !0,
                              guildId: s,
                              renderLeadingIcon: f
                                  ? (e) => (0, r.jsx)(no.A, { color: "currentColor", className: eO()(e, ea.Gj) })
                                  : void 0,
                          }),
                      }),
                      E,
                  ],
              })
            : E;
    });
var ng = n(152367),
    nm = n(404373),
    nA = n(855793),
    nf = n(260498),
    np = n(309010),
    nC = n(775946),
    nE = n(248675);
function nx(e) {
    let { guild: t, selected: n } = e,
        i = (0, h.bG)([nf.Ay], () => nf.Ay.getSelectedProjectId(t.id), [t.id]),
        l = (0, h.bG)([np.Ay], () => np.Ay.getChannelId(), []),
        s = (0, h.bG)([V.A], () => V.A.getGuildId(), []),
        { hasUnread: a, badgeCount: o } = (0, nm.NC)();
    return (0, r.jsx)(ee.G, {
        id: `conjure-${t.id}`,
        renderIcon: (e) =>
            (0, r.jsx)(ng.D, { size: "custom", color: "currentColor", width: 20, height: 20, className: e }),
        text: es.intl.string(nE.default.uk6jhJ),
        selected: n,
        showUnread: a,
        trailing: o > 0 ? (0, r.jsx)(nC.A, { mentionsCount: o }) : void 0,
        background: (0, r.jsx)(nA.X8, { guildId: t.id }),
        onClick: () => {
            let e = l === en.VV.CONJURE && s === t.id;
            (0, et.pX)(H.BVt.CHANNEL(t.id, en.VV.CONJURE, null == i || e ? null : i));
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
    return null != t && !!t && !(0, G.ws)(n, e.type);
}
function nT(e, t) {
    return null == t ? ea.fx : e > t ? ea.mU : ea.TR;
}
function nM(e) {
    let {
        channel: t,
        disableManageChannels: n,
        tabIndex: i,
        forceShowButtons: l,
        shouldEnlargeTargets: s,
        hasChannelInfo: a = !1,
    } = e;
    return (0, h.bG)(
        [P.A, V.A],
        () =>
            n ||
            (0, T.ai)(V.A.getGuildId()) ||
            (!P.A.can(H.xBc.MANAGE_CHANNELS, t) &&
                !P.A.can(H.xBc.MANAGE_ROLES, t) &&
                !P.A.can(H.xBc.MANAGE_WEBHOOKS, t)) ||
            ((0, tp.tr)(t.type) && !P.A.can(H.xBc.VIEW_CHANNEL, t)) ||
            (t.isGuildVocal() && !P.A.can(H.xBc.CONNECT, t)) ||
            !tp.bk.has(t.type) ||
            t.isModeratorReportChannel(),
    )
        ? null
        : (0, r.jsx)(X.m, {
              asContainer: !0,
              text: es.intl.string(es.t["3gUsJb"]),
              ariaHidden: !0,
              children: (0, r.jsx)(q.D, {
                  className: eO()(ea.Xs, { [ea.Tf]: l, [ea.bw]: a, [ea.UI]: !a }),
                  onClick: function () {
                      nI.Ay.open(t.id);
                  },
                  tabIndex: i,
                  "aria-label": es.intl.string(es.t["3gUsJb"]),
                  focusProps: s ? { offset: 2 } : void 0,
                  children: (0, r.jsx)(nN.SettingsIcon, { size: "xs", color: "currentColor", className: ea.gE }),
              }),
          });
}
function nL(e) {
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
        g = (0, h.bG)([nv.A], () => nv.A.getStageInstanceByChannel(t.id), [t.id]),
        m = (0, h.bG)([nb.Ay], () => nb.Ay.getActiveEventByChannel(t.id), [t.id]),
        A = (0, h.bG)([P.A], () => (0, nG.K)(P.A, u, t, g)),
        f = (0, h.bG)([], () =>
            t?.type === H.rbe.GUILD_VOICE ? es.intl.string(es.t["EE+P0H"]) : es.intl.string(es.t["0jeAXt"]),
        ),
        p = a.useRef(null);
    if (l || !A || t.isModeratorReportChannel() || t.isThread()) return null;
    let C = (0, r.jsx)(n_.R, { size: "xs", className: ea.gE, "aria-hidden": !0, color: "currentColor" });
    return (
        i &&
            (C = (0, r.jsx)(nt.A, {
                childRef: p,
                tutorialId: "instant-invite",
                position: "left",
                children: (0, r.jsx)("div", { ref: p, children: C }),
            })),
        (0, r.jsx)(X.m, {
            asContainer: !0,
            text: f,
            ariaHidden: !0,
            children: (0, r.jsx)(q.D, {
                className: eO()(ea.Xs, { [ea.Tf]: o, [ea.bw]: c, [ea.UI]: !c }),
                onClick: function () {
                    if (null != u) {
                        let e = nR.A.getAllActiveStreams().filter(
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
                                    guildScheduledEvent: m,
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
function nU(e) {
    let { channel: t, shouldEnlargeTargets: n } = e;
    return (0, r.jsx)(X.m, {
        asContainer: !0,
        text: es.intl.string(es.t["ROh4T+"]),
        ariaHidden: !0,
        children: (0, r.jsx)(q.D, {
            className: ea.Xs,
            onClick: function () {
                (0, nj.Ol)(t.guild_id, t.id);
            },
            "aria-label": es.intl.string(es.t["ROh4T+"]),
            focusProps: n ? { offset: 2 } : void 0,
            children: (0, r.jsx)(J.P, { size: "xs", color: "currentColor", className: ea.gE }),
        }),
    });
}
function nD(e) {
    let { channel: t, shouldEnlargeTargets: n } = e;
    return (0, r.jsx)(X.m, {
        asContainer: !0,
        text: es.intl.string(es.t["N2c/Un"]),
        ariaHidden: !0,
        children: (0, r.jsx)(q.D, {
            className: ea.Xs,
            onClick: function () {
                (0, nj.jA)(t.guild_id, t.id, !0, { section: H.JJy.CHANNEL_LIST });
            },
            "aria-label": es.intl.string(es.t["N2c/Un"]),
            focusProps: n ? { offset: 2 } : void 0,
            children: (0, r.jsx)(nS.CheckmarkLargeIcon, { size: "xs", color: "currentColor", className: ea.gE }),
        }),
    });
}
class nO extends a.PureComponent {
    static defaultProps = { isDefaultChannel: !1 };
    renderEditButton() {
        return (0, r.jsx)(nM, { ...this.props });
    }
    renderInviteButton() {
        return (0, r.jsx)(nL, { ...this.props });
    }
    renderRemoveSuggestionButton() {
        return (0, r.jsx)(nU, { ...this.props });
    }
    renderAcceptSuggestionButton() {
        return (0, r.jsx)(nD, { ...this.props });
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
            disableManageChannels: s,
            sorting: o,
            sortingType: d,
            sortingPosition: c,
            connectChannelDragSource: u,
            connectChannelDropTarget: g,
            tabIndex: m,
        } = e,
        A = (0, h.bG)([U.A, tE.Ay], () => {
            let e = tE.Ay.getDirectoryChannelIds(t.id);
            return 0 === e.length ? null : U.A.getChannel(e[0]);
        }),
        f = (0, h.bG)([U.A], () => U.A.getChannel(A?.parent_id)),
        p = i === A?.id,
        C = (0, tJ.Ay)(A),
        E = (0, h.bG)([P.A], () =>
            null != f ? P.A.can(H.xBc.MANAGE_CHANNELS, f) : null != t && P.A.can(H.xBc.MANAGE_CHANNELS, t),
        ),
        x = a.useCallback(
            (e) => {
                null != A &&
                    (0, e1.L3)(e, async () => {
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
    let N = nT(l, c),
        _ = ny(A, o, d),
        S = (0, r.jsx)("div", {
            className: eO()(N, { [ea.r9]: _, [ea.wH]: p }),
            "data-dnd-name": C,
            children: (0, r.jsxs)(nP.Ay, {
                className: ea.Ki,
                channel: A,
                guild: t,
                selected: p,
                onContextMenu: x,
                forceInteractable: !0,
                resolvedUnreadSetting: nV.e.ONLY_MENTIONS,
                children: [
                    (0, r.jsx)(nL, { channel: A, tabIndex: m }),
                    (0, r.jsx)(nM, { channel: A, disableManageChannels: s, tabIndex: m }),
                ],
            }),
        });
    return (E && (S = g(u(S))), S);
});
var nH = n(34188),
    nk = n(733391),
    nB = n(832163),
    nF = n(831024),
    nK = n(44724),
    nz = n(849134),
    nW = n(770178),
    nY = n(307076);
let nX = Math.ceil(Math.sqrt(115200)),
    nq = (nX - 240) / 2;
function nJ(e) {
    let { children: t, ref: n } = e,
        [i, l] = a.useState(-1),
        s = a.useCallback((e) => {
            l(e.contentRect.width);
        }, []),
        o = (0, nW.w)(s, [], { fireOnMount: !0 }),
        [{ shineSpring: d }, c] = (0, eQ.z)(() => ({
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
        g = a.useMemo(
            () =>
                t(
                    (0, r.jsx)(e$.animated.div, {
                        className: nY.q,
                        style: {
                            transform: d.to(
                                (e) => `translateX(calc(${e * i}px + ${e * nX}px)) translateY(-50%) rotate(45deg)`,
                            ),
                        },
                    }),
                ),
            [t, i, d],
        );
    return (
        a.useImperativeHandle(n, () => ({ onMouseEnter: u, onMouseLeave: h }), [u, h]),
        (0, r.jsx)("div", {
            className: nY.i,
            onMouseEnter: u,
            onMouseLeave: h,
            onFocus: u,
            onBlur: h,
            ref: o,
            style: { "--custom-shine-dimensions": "240px", "--custom-shine-rotated-dimensions-delta": `${nq}px` },
            children: g,
        })
    );
}
var nZ = n(371794),
    n$ = n(240248),
    nQ = n(998218),
    n0 = n(672812),
    n1 = n(427797);
let n3 = a.memo(function (e) {
    let { guild: t, selected: i } = e,
        l = a.useRef(null),
        s = a.useRef(null),
        o = (0, I.useHasAnyModalOpen)(),
        d = (0, h.bG)([eu.A], () => eu.A.hasLayers()),
        c = (0, ed.xr)((e) => e.fullScreenLayers.length > 0);
    a.useEffect(() => {
        (0, nk.Kh)(t.id);
    }, [t.id]);
    let u = (0, h.bG)([nB.A], () => nB.A.getAnnouncement(t.id)),
        m = u?.state === "success" ? u.announcement : void 0,
        [A, f] = (0, Q.x_)(Y.M.GAME_SHOP_NEW_BADGE, t.id, m?.id ?? "", void 0, !0),
        p = A === Y.M.GAME_SHOP_NEW_BADGE && null != m,
        C = (0, tH.nY)(t.id),
        E = (0, nF.u)({ surface: "storefront_badge", applicationId: C }),
        x = null;
    (p && (x = es.intl.string(es.t.y2b7CA)), null != E && (x = E.text));
    let [N, _] = (0, Q.x_)(Y.M.GAME_SHOP_NEW_DROP_POPOVER, t.id, m?.id ?? ""),
        S = N === Y.M.GAME_SHOP_NEW_DROP_POPOVER && null != m;
    a.useEffect(() => {
        i && (p && f(ei.i.INDIRECT_ACTION), S && _(ei.i.INDIRECT_ACTION));
    }, [f, _, i, p, S]);
    let b = a.useCallback(() => {
            (f(ei.i.TAKE_ACTION), _(ei.i.TAKE_ACTION));
            let e = (0, tH.mq)(t.id),
                n = nB.A.getStorefrontState(e)?.activePage ?? 0;
            (0, et.pX)(H.BVt.CHANNELS_GAME_SHOP(t.id, n));
        }, [t.id, f, _]),
        G = a.useCallback(() => {
            (0, nK.X)({ guildId: t.id, forceFetch: S });
        }, [t.id, S]),
        j = a.useCallback(() => {
            _(ei.i.USER_DISMISS);
        }, [_]),
        v = a.useCallback(
            (e) => {
                null != t &&
                    (0, e1.L3)(e, async () => {
                        let { default: e } = await n.e("899523").then(n.bind(n, 41614));
                        return (n) => (0, r.jsx)(e, { ...n, guild: t });
                    });
            },
            [t],
        ),
        R = a.useCallback(() => {
            l.current?.onMouseEnter(null, 500);
        }, [l]),
        y = a.useCallback(
            (e) =>
                (0, r.jsx)(ee.G, {
                    background: (0, r.jsx)("div", { className: n1.D }),
                    innerClassName: n1.Z,
                    ref: s,
                    id: `game-shop-${t.id}`,
                    renderIcon: (e) =>
                        (0, r.jsx)(nH.U, {
                            size: "custom",
                            color: "currentColor",
                            width: 20,
                            height: 20,
                            className: e,
                        }),
                    text: (0, r.jsx)(e0.E, {
                        variant: "text-md/medium",
                        className: n0.UU,
                        children: es.intl.string(es.t.vyaWs7),
                    }),
                    selected: i,
                    onMouseDown: G,
                    onClick: b,
                    onContextMenu: v,
                    trailing: (0, r.jsxs)(r.Fragment, {
                        children: [
                            null != x && (0, r.jsx)(em.Lp, { text: x, color: g.A.colors.BACKGROUND_BRAND.css }),
                            e,
                        ],
                    }),
                }),
            [t.id, i, G, b, v, x],
        ),
        T = a.useMemo(() => {
            if (null == m) return null;
            switch (m.type) {
                case "guild-application-announcement": {
                    let e =
                            null != m.assetId
                                ? nQ.A.toURLSafe((0, nZ.YE)(m.applicationId, m.assetId, 256, "webp"))
                                : void 0,
                        t =
                            null != m.backgroundImageAssetId
                                ? nQ.A.toURLSafe((0, nZ.YE)(m.applicationId, m.backgroundImageAssetId, 256, "webp"))
                                : void 0;
                    if (null == e) return null;
                    return {
                        graphicSource: { type: "sku", imageUrl: e, backgroundImageUrl: t },
                        title: es.intl.string(es.t["7PvvS9"]),
                        body: es.intl.formatToPlainString(es.t["9J4h1a"], { applicationName: m.applicationName }),
                    };
                }
                case "guild-discord-announcement": {
                    let { videoAssetFullyQualifiedURL: e, assetFullyQualifiedURL: t } = m;
                    if ((0, n$.uJ)(e) && (0, n$.uJ)(t)) return null;
                    return {
                        graphicSource: (0, n$.uJ)(e) ? { type: "asset", src: t } : { type: "video", src: e },
                        title: m.popoverTitle,
                        body: m.popoverBody,
                        actionLabel: m.popoverCta,
                    };
                }
                default:
                    return null;
            }
        }, [m]),
        M = a.useCallback(
            () =>
                S && null != T
                    ? (0, r.jsx)(nz.A, {
                          onActionClick: b,
                          onActionMouseDown: G,
                          onRender: R,
                          onRequestClose: j,
                          targetElementRef: s,
                          ...T,
                      })
                    : null,
            [S, T, b, G, R, j],
        );
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(nJ, { ref: l, children: y }), !o && !d && !c && M()] });
});
var n2 = n(740426),
    n9 = n(826673),
    n5 = n(591552),
    n7 = n(202776),
    n6 = n(454058),
    n4 = n(573163);
function n8(e) {
    let { guild: t, selected: i } = e,
        l = (0, n7.A)(t),
        s = (0, n9.HX)(Y.M.CHANNEL_BROWSER_NEW_BADGE_NUX),
        o = (0, tS.yK)([n6.A], () =>
            Array.from(n6.A.getNewChannelIds(t.id)).filter((e) => n6.A.shouldIndicateNewChannel(t.id, e)),
        ),
        d = (0, tS.bG)([n4.Ay], () => n4.Ay.hasUnread(t.id, nV.P.GUILD_ONBOARDING_QUESTION)),
        c = o.length > tx.rR,
        u = (0, tS.bG)([n5.A, n4.Ay], () => {
            let e = n5.A.lastFetchedAt(t.id),
                n = n4.Ay.lastMessageId(t.id, nV.P.GUILD_ONBOARDING_QUESTION);
            if (null == n) return !1;
            let i = tc.default.extractTimestamp(n);
            return null != e && e > i;
        }),
        h = a.useCallback(() => {
            (0, et.pX)(H.BVt.CHANNEL(t.id, l ? en.VV.CUSTOMIZE_COMMUNITY : en.VV.CHANNEL_BROWSER));
        }, [t.id, l]),
        m = a.useCallback(
            (e) => {
                (0, e1.L3)(e, async () => {
                    let { default: e } = await Promise.all([n.e("113446"), n.e("317699"), n.e("830412")]).then(
                        n.bind(n, 807431),
                    );
                    return (n) => (0, r.jsx)(e, { ...n, guild: t });
                });
            },
            [t],
        ),
        A = null;
    return (
        (s && !d && !c) ||
            i ||
            u ||
            (A = (0, r.jsx)(em.Lp, {
                color: g.A.colors.BADGE_BACKGROUND_BRAND.css,
                text: es.intl.string(es.t.y2b7CA),
            })),
        (0, r.jsx)(ee.G, {
            id: `channels-${t.id}`,
            renderIcon: (e) => (0, r.jsx)(n2.k, { size: "md", color: "currentColor", className: e }),
            text: l ? es.intl.string(es.t.h9mGOP) : es.intl.string(es.t.et6wav),
            selected: i,
            onClick: h,
            onContextMenu: m,
            trailing: A,
        })
    );
}
var ie = n(855473);
function it(e) {
    let { guild: t, selected: n } = e;
    return (0, r.jsx)(ee.G, {
        id: `home-tab-${t.id}`,
        renderIcon: (e) => (0, r.jsx)(ie.Z, { size: "md", color: "currentColor", className: e }),
        text: es.intl.string(es.t.VbpLyU),
        selected: n,
        onClick: function () {
            (0, et.pX)(H.BVt.CHANNEL(t.id, en.VV.GUILD_HOME));
        },
    });
}
var ii = n(297264),
    il = n(5373),
    is = n(65995),
    ir = n(195702);
function ia(e, t) {
    return (0, r.jsx)(e0.E, { variant: "text-xs/bold", color: "text-default", children: e }, t);
}
let io = a.memo(function (e) {
    let { guild: t } = e,
        n = (0, h.bG)([ty.h], () => ty.h.getNewMemberActions(t.id), [t.id]),
        i = (0, h.bG)([is.A], () => is.A.getCompletedActions(t.id)),
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
    return (0, r.jsxs)("li", {
        children: [
            (0, r.jsxs)(q.D, {
                ...o,
                role: "button",
                focusProps: { offset: { right: 4 } },
                className: ir.G9,
                onClick: function () {
                    (0, et.pX)(H.BVt.CHANNEL(t.id, en.VV.GUILD_HOME));
                },
                children: [
                    (0, r.jsxs)("div", {
                        className: ir.A1,
                        children: [
                            (0, r.jsx)(ii.D, { variant: "heading-sm/bold", children: es.intl.string(es.t.SnrR3x) }),
                            (0, r.jsxs)("div", {
                                className: ir.Ib,
                                children: [
                                    (0, r.jsx)(e0.E, {
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        className: ir.Cv,
                                        children: es.intl.format(es.t.eqZ1lW, {
                                            numberHook: ia,
                                            total: s.toString(),
                                            completed: l.toString(),
                                        }),
                                    }),
                                    (0, r.jsx)(e6.A, {
                                        className: ir.UE,
                                        width: 16,
                                        height: 16,
                                        direction: e6.A.Directions.RIGHT,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)(il.i, {
                        className: ir.hr,
                        foregroundGradientColor: [
                            g.A.unsafe_rawColors.GREEN_300.css,
                            g.A.unsafe_rawColors.GREEN_230.css,
                        ],
                        percent: (l / s) * 100 + 3,
                        animate: !0,
                    }),
                ],
            }),
            (0, r.jsx)("div", { role: "separator", className: ir.yF }),
        ],
    });
});
var id = n(581925);
function ic(e) {
    let { guild: t, selected: n } = e;
    return (0, r.jsx)(ee.G, {
        id: `official-messages-page-${t.id}`,
        renderIcon: (e) => (0, r.jsx)(id.L, { size: "md", color: "currentColor", className: e }),
        text: es.intl.string(es.t.xHEzFh),
        selected: n,
        onClick: function () {
            (0, et.pX)(H.BVt.CHANNEL(t.id, en.VV.GUILD_OFFICIAL_MESSAGES));
        },
    });
}
var iu = n(590251),
    ih = n(413125),
    ig = n(600623),
    im = n(411392);
let iA = a.memo(function (e) {
    let { guild: t } = e,
        i = (0, h.bG)([tE.Ay], () => tE.Ay.getDefaultChannel(t.id), [t.id]),
        { steps: l } = (0, ih.c)(i, t),
        s = l.length,
        o = l.filter((e) => e.completed).length,
        d = l.find((e) => !e.completed),
        u = (0, c.rm)(`setup-progress-${t.id}`),
        m = s > 0 && null == d;
    return (a.useEffect(() => {
        m && (0, ig.vy)(t.id);
    }, [t.id, m]),
    null == d)
        ? null
        : (0, r.jsxs)("li", {
              children: [
                  (0, r.jsxs)(q.D, {
                      ...u,
                      role: "button",
                      className: im.nM,
                      onClick: function () {
                          var e;
                          ((e = t.id),
                              (0, I.openModalLazy)(async () => {
                                  let { default: t } = await Promise.all([
                                      n.e("883221"),
                                      n.e("457866"),
                                      n.e("270591"),
                                      n.e("149360"),
                                  ]).then(n.bind(n, 49843));
                                  return (n) => (0, r.jsx)(t, { guildId: e, ...n });
                              }));
                      },
                      children: [
                          (0, r.jsxs)("div", {
                              className: im.Ap,
                              children: [
                                  (0, r.jsx)(iu.a, {
                                      percent: 100,
                                      colorOverride: g.A.colors.BACKGROUND_MOD_STRONG.css,
                                      ringColorOverrideClassName: im.Tu,
                                      background: im.Tu,
                                  }),
                                  (0, r.jsx)(iu.a, {
                                      className: im.qB,
                                      percent: (o / s) * 100,
                                      colorOverride: g.A.colors.STATUS_POSITIVE.css,
                                      ringColorOverrideClassName: im.Tu,
                                      background: im.Tu,
                                  }),
                              ],
                          }),
                          (0, r.jsxs)("div", {
                              className: im.FS,
                              children: [
                                  (0, r.jsx)(ii.D, {
                                      variant: "heading-sm/bold",
                                      children: es.intl.string(es.t.o3HK3d),
                                  }),
                                  (0, r.jsx)(e0.E, {
                                      variant: "text-xs/medium",
                                      color: "text-muted",
                                      className: im.VA,
                                      children: es.intl.formatToPlainString(es.t.zhHW5c, {
                                          currStep: o + 1,
                                          total: s,
                                          step: d.title,
                                      }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, r.jsx)("div", { role: "separator", className: im.yF }),
              ],
          });
});
var ip = n(514179);
function iC(e) {
    let { guild: t, selected: i } = e;
    return (0, r.jsx)(ee.G, {
        id: `subscriptions-${t.id}`,
        renderIcon: (e) => (0, r.jsx)(ip.A, { className: e }),
        text: es.intl.string(es.t["KzCF/6"]),
        selected: i,
        onClick: function () {
            (0, et.pX)(H.BVt.CHANNEL(t.id, en.VV.ROLE_SUBSCRIPTIONS));
        },
        onContextMenu: function (e) {
            null != t &&
                (0, e1.L3)(e, async () => {
                    let { default: e } = await n.e("571911").then(n.bind(n, 978554));
                    return (n) => (0, r.jsx)(e, { ...n, guild: t });
                });
        },
    });
}
var iE = n(506774),
    ix = n(666860),
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
        s = (0, tS.bG)([O.A], () => O.A.getGuild(t)),
        a = s?.features.has(H.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) === !0,
        o = "false" === iE.w.get(iG.bJ, "false"),
        d = (0, tS.bG)([F.Ay], () => F.Ay.useReducedMotion);
    return (0, r.jsx)(ee.G, {
        id: `shop-${t}`,
        className: eO()(ij.A2, { [ij.wH]: n, [ij.ST]: o }),
        innerClassName: ij.LE,
        renderIcon: (e) => (0, r.jsx)(iS.h, { width: 20, height: 20, className: eO()([e, ij.sV]) }),
        text: es.intl.string(es.t.al5EXL),
        selected: n,
        onClick: i,
        trailing: (0, r.jsxs)("div", {
            className: ij.ai,
            children: [
                d
                    ? (0, r.jsx)("div", {
                          className: ij.Ad,
                          children: (0, r.jsx)(Z.E, { type: "new", variant: "brand" }),
                      })
                    : (0, r.jsx)("img", {
                          src: (0, iN.n)("server_products/storefront/money.gif"),
                          className: ij.TG,
                          alt: "",
                      }),
                n &&
                    (0, r.jsx)(q.D, {
                        className: ij.b,
                        onClick: function (e) {
                            (e.stopPropagation(),
                                (0, n9.Dr)(Y.M.SERVER_SHOP_PHANTOM_PREVIEW),
                                ib.default.track(H.HAw.GUILD_SHOP_PREVIEW_CLICK, {
                                    ...(0, ix.H$)(t),
                                    action_taken: iG.hN.DISMISS_CHANNEL_ROW,
                                }),
                                (l && a) || (0, et.bG)(H.BVt.CHANNEL(t, tE.Ay.getDefaultChannel(t)?.id)));
                        },
                        "aria-label": es.intl.string(es.t.cpT0Cq),
                        children: (0, r.jsx)(tY.a, { size: "xs", color: "currentColor" }),
                    }),
            ],
        }),
    });
}
function iR(e) {
    let { guild: t, selected: i } = e;
    function l() {
        (iE.w.set(iG.bJ, "true"), (0, et.pX)(H.BVt.CHANNEL(t.id, en.VV.GUILD_SHOP)));
    }
    return (0, i_.P)(t)
        ? (0, r.jsx)(iv, { guildId: t.id, selected: i, handleClick: l })
        : (0, r.jsx)(ee.G, {
              id: `shop-${t.id}`,
              renderIcon: (e) => (0, r.jsx)(iS.h, { width: 20, height: 20, className: e }),
              text: es.intl.string(es.t.al5EXL),
              selected: i,
              onClick: l,
              onContextMenu: function (e) {
                  null != t &&
                      (0, e1.L3)(e, async () => {
                          let { default: e } = await n.e("852565").then(n.bind(n, 345332));
                          return (n) => (0, r.jsx)(e, { ...n, guild: t });
                      });
              },
          });
}
var iy = n(308528),
    iT = n(534890),
    iM = n(262763),
    iL = n(499211),
    iU = n(406704),
    iD = n(747926),
    iO = n(977997),
    iP = n(807632),
    iV = n(37411);
function iw(e) {
    let { thread: t, tabIndex: n } = e,
        i = (0, iP.YG)(t),
        l = (0, iP.IO)(t),
        s = (0, iU._M)(t);
    return i && l && s ? (0, r.jsx)(iH, { thread: t, tabIndex: n }) : null;
}
function iH(e) {
    let { thread: t, tabIndex: n } = e,
        i = (0, h.bG)([iO.A], () => iO.A.isInChannel(t.id), [t.id]),
        { needSubscriptionToAccess: l } = (0, iL.A)(t.id),
        s = a.useCallback(() => {
            iM.A.handleVoiceConnect({ channel: t, connected: i, needSubscriptionToAccess: l, locked: !1 });
        }, [t, i, l]),
        o = a.useCallback(() => {
            (0, iD.JA)(t, !0, iV.H9.CHANNEL_LIST);
        }, [t]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(X.m, {
                asContainer: !0,
                text: es.intl.string(es.t["96ANUN"]),
                children: (0, r.jsx)(q.D, {
                    className: ea.Xs,
                    onClick: s,
                    tabIndex: n,
                    "aria-label": es.intl.string(es.t["96ANUN"]),
                    children: (0, r.jsx)(tX.H, { size: "xs", color: "currentColor", className: ea.gE }),
                }),
            }),
            (0, r.jsx)(X.m, {
                asContainer: !0,
                text: es.intl.string(es.t.ZXxLQg),
                children: (0, r.jsx)(q.D, {
                    className: ea.Xs,
                    onClick: o,
                    tabIndex: n,
                    "aria-label": es.intl.string(es.t.ZXxLQg),
                    children: (0, r.jsx)(iT.ChatIcon, { size: "xs", color: "currentColor", className: ea.gE }),
                }),
            }),
        ],
    });
}
var ik = n(897898),
    iB = n(152007);
function iF(e) {
    return null != e && e > 0;
}
var iK = n(405018),
    iz = n(428689),
    iW = n(525093);
function iY(e) {
    let { total: t, users: n, videoLimit: i } = e;
    return (0, r.jsxs)("div", {
        className: iW.iE,
        children: [
            (0, r.jsxs)(e0.E, {
                tag: "span",
                color: "text-subtle",
                variant: "text-xs/medium",
                className: eO()(iW.VV, { [iW.Ki]: i, [iW.$G]: n >= 100 }),
                children: [
                    i ? (0, r.jsx)(iz.VideoIcon, { size: "md", color: "currentColor", className: iW.LB }) : null,
                    n.toString().padStart(2, "0"),
                ],
            }),
            (0, r.jsx)(e0.E, {
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
        s = -1,
        a = !1;
    return (
        t.userLimit > 0 && (s = t.userLimit),
        n && l > 0 && ((a = s < 0 || l < s), (s = s > 0 ? Math.min(s, l) : l)),
        (0, r.jsx)(iY, { users: i, total: s, videoLimit: a })
    );
}
var iq = n(588224),
    iJ = n(447199);
function iZ(e) {
    let { thread: t, countInVoice: n, hasVideo: i, mentionCount: l, isMentionLowImportance: s } = e,
        a = n > 0 && t.userLimit > 0,
        o = iF(l);
    return a || o
        ? (0, r.jsxs)("div", {
              className: ea.yW,
              children: [
                  a ? (0, r.jsx)(iX, { userCount: n, video: i, channel: t }) : null,
                  o ? (0, r.jsx)(nC.A, { mentionsCount: l, isMentionLowImportance: s }) : null,
              ],
          })
        : null;
}
function i$(e) {
    let { style: t, withGuildIcon: n, inverted: i } = e,
        l = { className: eO()(iJ.GI, { [iJ.a7]: n }, { [iJ.BJ]: i }), style: t },
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
let iQ = a.memo(function (e) {
        let { thread: t, isSelectedChannel: i, isSelectedVoice: l, isLast: s, withGuildIcon: o } = e,
            d = (0, h.bG)([ta.Ay], () => ta.Ay.getVoiceStatesForChannel(t), [t]),
            u = (0, h.bG)([iO.A], () => iO.A.hasVideo(t.id)),
            g = (0, tJ.Ay)(t),
            {
                unread: m,
                mentionCount: A,
                isMentionLowImportance: f,
            } = (0, h.cf)([n4.Ay], () => ({
                unread: n4.Ay.hasUnread(t.id),
                mentionCount: n4.Ay.getMentionCount(t.id),
                isMentionLowImportance: n4.Ay.getIsMentionLowImportance(t.id),
            })),
            p = (0, h.bG)([iB.A], () => iB.A.isMuted(t.id)),
            C = a.useCallback(
                (e) => {
                    (0, iD.JA)(t, !e.shiftKey, iV.H9.CHANNEL_LIST);
                },
                [t],
            ),
            E = a.useCallback(() => {
                iy.A.preload(t.guild_id, t.id);
            }, [t.guild_id, t.id]),
            x = a.useCallback(
                (e) => {
                    (0, ik.A)(e, t);
                },
                [t],
            ),
            N = a.useCallback(
                (e) => {
                    let i = U.A.getChannel(t.id);
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
                            return (t) => (0, r.jsx)(e, { ...t, channel: i });
                        });
                },
                [t.id],
            ),
            _ = null == d ? 0 : d.length,
            { role: S, ...I } = (0, c.rm)(t.id),
            b = a.useRef(null),
            G =
                A > 0
                    ? es.intl.formatToPlainString(es.t["ZL7+I6"], { channelName: g, mentionCount: A })
                    : m
                      ? es.intl.formatToPlainString(es.t.YlVvmc, { channelName: g })
                      : es.intl.formatToPlainString(es.t["0nZpiF"], { channelName: g });
        return (0, r.jsxs)("li", {
            role: S,
            className: eO()(ea.fx, { [ea.wH]: i }),
            children: [
                (0, r.jsx)(i$, { withGuildIcon: o }),
                s
                    ? null
                    : (0, r.jsx)(i$, {
                          withGuildIcon: o,
                          inverted: !0,
                          style: { transform: "rotateX(180deg) translateY(-9px)" },
                      }),
                (0, r.jsx)(tz.vN, {
                    focusTarget: b,
                    ringTarget: b,
                    offset: { top: 2, bottom: 2, right: 4 },
                    children: (0, r.jsxs)("div", {
                        className: eO()(ea.Ki, n0.iE, n0.ZS, {
                            [n0.J1]: i,
                            [n0.F4]: !i && p,
                            [n0.V2]: !p && !i && m,
                            [n0.lY]: o,
                        }),
                        onMouseDown: E,
                        onContextMenu: N,
                        children: [
                            !m || p || i ? null : (0, r.jsx)("div", { className: eO()(n0.gy, n0.WS) }),
                            (0, r.jsx)(q.D, {
                                ...I,
                                innerRef: b,
                                className: n0.nf,
                                onClick: C,
                                onAuxClick: x,
                                "aria-label": G,
                                focusProps: { enabled: !1 },
                                children: (0, r.jsxs)("div", {
                                    className: eO()(n0.Y5, n0.__invalid_threadMainContent),
                                    children: [
                                        (0, r.jsx)(e0.E, {
                                            variant: "text-sm/medium",
                                            color: "none",
                                            className: n0.UU,
                                            children: (0, r.jsx)(tB.A, { "aria-hidden": !0, children: g }),
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: n0.Y_,
                                            onClick: nP.dG,
                                            onKeyDown: nP.dG,
                                            children: [
                                                (0, r.jsx)(iZ, {
                                                    thread: t,
                                                    countInVoice: _,
                                                    hasVideo: u,
                                                    mentionCount: A,
                                                    isMentionLowImportance: f,
                                                }),
                                                (0, r.jsx)(iw, { thread: t, tabIndex: I.tabIndex }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                }),
                (0, r.jsx)(iq.A, {
                    channel: t,
                    collapsed: !l && 1 !== d.length,
                    collapsedMax: 6,
                    voiceStates: d,
                    isThread: !0,
                }),
            ],
        });
    }),
    i0 = a.memo(function (e) {
        let { channel: t, selectedChannel: n, selectedVoiceChannelId: i, sortedThreadIds: l, withGuildIcon: s } = e,
            a = (0, tJ.Ay)(t),
            { density: o } = (0, E.wR)(),
            d = (0, h.yK)([U.A], () => l.map((e) => U.A.getChannel(e)).filter(to.Vq), [l]),
            c = (0, h.bG)([ta.Ay], () => {
                let e = d[d.length - 1];
                if (null == e) return 0;
                let t = ta.Ay.getVoiceStates(e.guild_id)[e.id];
                return null == t || 0 === t.length ? 0 : i !== e.id ? 40 : 32 * t.length + 8;
            });
        return (0, r.jsx)("li", {
            className: iJ.kL,
            children: (0, r.jsxs)("ul", {
                role: "group",
                "aria-label": es.intl.formatToPlainString(es.t.EiyIi6, { channelName: a }),
                children: [
                    (0, r.jsx)("div", {
                        className: eO()(iJ.eh, { [iJ.ET]: s }),
                        style: { bottom: ("cozy" === o ? 28 : 24) + c },
                    }),
                    d.map((e, t) =>
                        (0, r.jsx)(
                            iQ,
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
var i1 = n(922016),
    i3 = n(367513),
    i2 = n(296216),
    i9 = n(657043),
    i5 = n(963027),
    i7 = n(202384),
    i6 = n(51758),
    i4 = n(139033),
    i8 = n(305866),
    le = n(123292),
    lt = n(830215),
    ln = n(315982),
    li = n(480900),
    ll = n(557722),
    ls = n(834942),
    lr = n(287809),
    la = n(53516),
    lo = n(648580),
    ld = (((l = {})[(l.VOICE = 0)] = "VOICE"), l);
let lc = function (e) {
    let { type: t, guildId: i, closePopout: l } = e,
        s = (0, W.GV)(),
        a = (0, h.bG)([ls.A], () => ls.A.getCheck(i), [i]),
        {
            notClaimed: o,
            notEmailVerified: d,
            notPhoneVerified: c,
            missingVerificationRole: u,
            verificationRole: g,
        } = a,
        {
            header: m,
            body: A,
            buttonText: f,
        } = (function (e, t) {
            if (0 !== e) return { header: null, body: null, buttonText: null };
            {
                let e = es.intl.string(es.t["6zY8BI"]),
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
                    ? { header: e, body: es.intl.string(es.t.IRxUlG), buttonText: es.intl.string(es.t.fiNVin) }
                    : i
                      ? { header: e, body: es.intl.string(es.t.vW8iUF), buttonText: es.intl.string(es.t["50gfOv"]) }
                      : l
                        ? { header: e, body: es.intl.string(es.t.vdSOpz), buttonText: es.intl.string(es.t.lm1UKt) }
                        : s
                          ? {
                                header: e,
                                body: es.intl.formatToPlainString(es.t.v1ktYb, { min: H.$8o.MEMBER_AGE }),
                                buttonText: es.intl.string(es.t.BddRzS),
                            }
                          : r
                            ? {
                                  header: e,
                                  body: es.intl.formatToPlainString(es.t.sncw41, { min: H.$8o.ACCOUNT_AGE }),
                                  buttonText: es.intl.string(es.t.BddRzS),
                              }
                            : a && null != o && null === o.tags.guild_connections
                              ? {
                                    header: e,
                                    body: es.intl.format(es.t.MZbCuG, { roleName: `@${o.name}` }),
                                    buttonText: es.intl.string(es.t["6Ge2LG"]),
                                }
                              : { header: e, body: null, buttonText: null };
            }
        })(t, a);
    return null == m || null == A
        ? null
        : (0, r.jsxs)(i8.l, {
              className: lo.kL,
              "aria-labelledby": s,
              children: [
                  (0, r.jsx)("img", { alt: "", className: lo.Sl, src: n(303528) }),
                  (0, r.jsxs)("div", {
                      className: lo.Qs,
                      children: [
                          (0, r.jsx)(ii.D, { variant: "heading-md/semibold", id: s, children: m }),
                          (0, r.jsx)(e0.E, { color: "text-default", variant: "text-sm/normal", children: A }),
                          (0, r.jsxs)("div", {
                              className: lo.UD,
                              children: [
                                  null != f
                                      ? (0, r.jsx)("div", {
                                            "data-button-hoisted-classname-wrapper": !0,
                                            className: lo.FS,
                                            children: (0, r.jsx)(tF.$, {
                                                variant: "primary",
                                                text: f,
                                                onClick: function () {
                                                    (o
                                                        ? ln.R()
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
                                                                            reason: ll.d.GUILD_PHONE_REQUIRED,
                                                                            ...t,
                                                                        });
                                                                },
                                                                { modalKey: la.V },
                                                            )
                                                          : d
                                                            ? (lt.A.verifyResend(),
                                                              (0, i4.A)({
                                                                  title: es.intl.string(es.t.LykQYk),
                                                                  subtitle: es.intl.format(es.t.azKEPy, {
                                                                      email: lr.default.getCurrentUser()?.email,
                                                                  }),
                                                              }))
                                                            : u && null != g && (0, li.b)(g, i),
                                                        l());
                                                },
                                            }),
                                        })
                                      : null,
                                  o || c || d
                                      ? (0, r.jsx)(le.Q, {
                                            onClick: l,
                                            text: es.intl.string(es.t.oEAioF),
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
var lu = n(824865),
    lh = n(378570),
    lg = n(747376),
    lm = n(113783),
    lA = n(96566),
    lf = n(280450),
    lp = n(312006),
    lC = n(505543),
    lE = n(994500),
    lx = n(685399),
    lN = n(475889),
    l_ = n(693879),
    lS = n(435470),
    lI = n(35275),
    lb = n(300596);
function lG(e) {
    let { locked: t } = e;
    return (0, r.jsx)("div", {
        className: eO()(ea.Xs, lb.U),
        children: (0, r.jsx)(lI.A, {
            className: ea.gE,
            color: t ? g.A.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css : void 0,
        }),
    });
}
var lj = n(863005),
    lv = n(669715),
    lR = n(769015),
    ly = n(217223);
function lT(e) {
    let { className: t, embeddedApps: n, muted: i } = e;
    if (n.length <= 0) return null;
    {
        if (1 === n.length)
            return (0, r.jsx)("div", {
                className: eO()(ly.kL, t, i && ly.F4),
                children: (0, r.jsx)(lR.A, { game: n[0].application, className: ly.wK }),
            });
        let e = n.length - 1;
        return (0, r.jsxs)("div", {
            className: eO()(ly.kL, t, i && ly.F4),
            children: [
                (0, r.jsx)(lR.A, { game: n[0].application, className: ly.wK }),
                2 === n.length
                    ? (0, r.jsx)(lR.A, { game: n[1].application, className: ly.wK })
                    : (0, r.jsx)(e0.E, {
                          className: ly.ju,
                          variant: "text-xs/bold",
                          color: "interactive-text-active",
                          children: `+${e}`,
                      }),
            ],
        });
    }
}
var lM = n(905695);
function lL(e) {
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
        A = (0, h.bG)([n4.Ay], () => n4.Ay.getMentionCount(t.id)),
        f = (0, h.bG)([n4.Ay], () => n4.Ay.getIsMentionLowImportance(t.id)),
        p = (0, lx.Ay)(t),
        C = (0, h.bG)([P.A], () => !P.A.can(H.xBc.CONNECT, t)),
        E = (0, lN.H)(t),
        x = (0, h.bG)([iO.A], () => iO.A.hasVideo(t.id)),
        N = (0, lA.qT)(t.id) && t.isGuildStageVoice(),
        _ = (function (e) {
            let { channel: t, locked: n, video: i, selected: l } = e;
            return (
                (function (e) {
                    let { channel: t, video: n, considerMaxStageVoiceUserLimit: i = !0 } = e,
                        { limit: l } = (0, iK.A)(t),
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
        })({ channel: t, locked: C, video: (x || N) && null == E, selected: n }),
        S = (0, h.bG)([lj.A], () => lj.A.getNewThreadCount(t.guild_id, t.id)),
        I = (0, lS.ed)(t.guild_id, t.id),
        b = (0, h.bG)([O.A], () => O.A.getGuild(t.guild_id)?.features.has(H.GuildFeatures.COMMUNITY) ?? !1);
    if (iF(A)) return (0, r.jsx)(nC.A, { mentionsCount: A, isMentionLowImportance: f });
    if (o) return (0, r.jsx)(lG, { locked: d });
    if (c)
        return (0, r.jsx)(em.Lp, { text: es.intl.string(es.t.y2b7CA), color: g.A.colors.BADGE_BACKGROUND_BRAND.css });
    if (!u && m === nV.e.ALL_MESSAGES && t.isForumLikeChannel() && null != S && S > 0)
        return (0, r.jsx)(e0.E, {
            variant: "text-xs/semibold",
            color: "text-brand",
            className: lM.O,
            children: es.intl.format(es.t.GkAbqY, { count: (0, em.Gu)(S) }),
        });
    if (!u && t.isForumLikeChannel() && null != I && I > 0)
        return (0, r.jsx)(e0.E, { variant: "text-xs/semibold", color: "text-muted", children: (0, em.Gu)(I) });
    let G = l?.length ?? 0;
    return null != s && s && _
        ? (0, r.jsx)(iX, { userCount: G, video: x || N, channel: t })
        : i && (0, lv.t)(l) && b
          ? (0, r.jsx)(em.Lp, { text: es.intl.string(es.t.dI3q4h), color: g.A.unsafe_rawColors.RED_400.css })
          : null != E
            ? (0, r.jsx)(l_.z, { textColor: "text-feedback-positive", entry: { start: E } })
            : null != a && a && p.length > 0
              ? (0, r.jsx)(lT, { embeddedApps: p, muted: u })
              : null;
}
var lU = n(714619);
class lD extends nO {
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
        return (0, nd.Pd)(e, iO.A, O.A);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        if (n) return ea.ZS;
        if (null != t)
            if (e > t) return ea.mU;
            else return ea.TR;
        return ea.fx;
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
        (null != r && (0, i6.V)(r) && (0, i7.Ze)(r),
            i && this.setState({ shouldShowGuildVerificationPopout: !0 }),
            t ||
                n ||
                e.isRoleSubscriptionTemplatePreviewChannel() ||
                (s ? i3.A.updateChatOpen(e.id, !0) : (0, lg.av)(e)),
            __OVERLAY__ || (0, lh.iN)(e.id, l ? { source: lu.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0));
    };
    handleClickChat = () => {
        let { channel: e, locked: t, isSuggestedSection: n } = this.props;
        __OVERLAY__ || t || (0, lh.iN)(e.id, n ? { source: lu.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            i = O.A.getGuild(t.getGuildId());
        null != i &&
            (0, e1.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("926132"),
                    n.e("146652"),
                    n.e("993103"),
                    n.e("893190"),
                    n.e("393336"),
                    n.e("391763"),
                    n.e("955557"),
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
        return (0, r.jsx)(iq.A, { channel: e, voiceStates: i, collapsed: t, tabIndex: n, numAudience: l });
    }
    renderPopout = () => {
        let { channel: e } = this.props,
            { shouldShowGuildVerificationPopout: t } = this.state;
        if (t)
            return (0, r.jsx)(lc, {
                type: ld.VOICE,
                guildId: e.guild_id,
                closePopout: this.closeGuildVerificationPopout,
            });
        throw Error("VoiceChannel.renderPopout: There must always be something to render");
    };
    renderOpenChatButton = () => {
        let { channel: e, locked: t, forceShowButtons: n } = this.props;
        if (!t)
            return (0, r.jsx)(X.m, {
                asContainer: !0,
                text: es.intl.string(es.t.ZXxLQg),
                children: (0, r.jsx)(q.D, {
                    className: eO()(ea.Xs, n ? ea.Tf : null),
                    onClick: () => {
                        (i3.A.updateChatOpen(e.id, !0), this.handleClickChat());
                    },
                    "aria-label": es.intl.string(es.t.ZXxLQg),
                    children: (0, r.jsx)(iT.ChatIcon, { size: "xs", color: "currentColor", className: ea.gE }),
                }),
            });
    };
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e ? null : (0, r.jsx)("div", { className: ea.yW, children: e });
    }
    getTooltipText = () => {
        let { connected: e } = this.props;
        return this.isFull() && !e ? es.intl.string(es.t.rZfiNq) : null;
    };
    renderSubtitle = () => {
        let e = this.props.stageInstance?.topic;
        return null == e ? null : (0, r.jsx)(tB.A, { children: e });
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
                needSubscriptionToAccess: g,
                unread: m,
                resolvedUnreadSetting: A,
                mentionCount: f,
                isFavoriteSuggestion: p,
            } = this.props,
            { shouldShowGuildVerificationPopout: C } = this.state,
            E = (0, r.jsxs)("li", {
                className: eO()(this.getModeClass(), { [ea.r9]: this.isDisabled() }),
                "data-dnd-name": (0, tJ.m1)(e, lr.default, lE.A),
                children: [
                    (0, r.jsx)(i1.Y, {
                        targetElementRef: this.channelItemRef,
                        position: "right",
                        renderPopout: this.renderPopout,
                        spacing: 17,
                        onRequestClose: this.closeGuildVerificationPopout,
                        shouldShow: C,
                        children: () =>
                            (0, r.jsx)(X.m, {
                                text: this.getTooltipText(),
                                children: (0, r.jsxs)(nP.Ay, {
                                    ref: this.channelItemRef,
                                    className: ea.Ki,
                                    iconClassName: eO()({ [lU.G]: null != u }),
                                    channel: e,
                                    selected: !p && t,
                                    connected: n,
                                    unread: n ? m : void 0,
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
                                    "aria-label": (0, i5.Ay)({
                                        channel: e,
                                        unread: m,
                                        mentionCount: f,
                                        isSubscriptionGated: h,
                                        needSubscriptionToAccess: g,
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
        return (c && (E = a(E)), d && (E = l(s(E))), E);
    }
}
let lO = B((0, i2.F)(lD));
function lP(e) {
    var t;
    let n,
        i,
        { guild: l, channel: s, disableSorting: a, isFavoriteCategory: o, collapsed: d, voiceStates: c } = e,
        u = (0, h.cf)([n4.Ay], () => ({ unread: n4.Ay.hasUnread(s.id), mentionCount: n4.Ay.getMentionCount(s.id) })),
        g = (0, h.bG)([w.Ay], () => w.Ay.resolveUnreadSetting(s)),
        m = (0, h.cf)([U.A, ls.A, P.A], () => {
            let e = U.A.getChannel(s.parent_id),
                t = ls.A.getCheck(s.guild_id);
            return {
                canManageChannel: null != l && P.A.can(H.xBc.MANAGE_CHANNELS, s),
                canReorderChannel:
                    !0 !== a &&
                    ((0, T.ai)(l.id) ||
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
            (n = (0, lC.A)(t)),
            (i = (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return (0, h.cf)(
                    [lp.Ay, lf.default],
                    () => {
                        let n = lf.default.getId();
                        return lp.Ay.getPermissionsForUser(n, e, t);
                    },
                    [e, t],
                );
            })(t, !0).moderator),
            !n && i ? 1 : 0),
        p = (0, h.bG)([nv.A], () => nv.A.getStageInstanceByChannel(s.id), [s.id]),
        C = (0, lm.zy)(s.id, th.ip.AUDIENCE),
        { isSubscriptionGated: E, needSubscriptionToAccess: x } = (0, iL.A)(s.id),
        N = (0, h.bG)([w.Ay], () => w.Ay.isFavorite(l.id, s.id)),
        _ = (0, lA.xn)(s.id),
        S = lL({
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
        G = (0, i9.BX)("StageChannel");
    return (0, r.jsx)(lO, {
        categoryCollapsed: A,
        connectAction: f,
        numAudience: C,
        stageInstance: p,
        isSubscriptionGated: E,
        needSubscriptionToAccess: x,
        ...u,
        ...m,
        ...e,
        isFavoriteSuggestion: o && !N,
        forceShowButtons: I,
        openChatOnClick: b,
        channelInfo: S,
        resolvedUnreadSetting: g,
        shouldEnlargeTargets: G,
    });
}
function lV(e, t) {
    let n = t.getGuildId();
    if (null == n) throw Error("TextChannel, preloadChannel: Channel does not have a guildId");
    iy.A.preload(n, t.id);
}
let lw = B(
        class extends nO {
            handleContextMenu = (e) => {
                let { channel: t } = this.props,
                    i = O.A.getGuild(t.getGuildId());
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
                        return (n) => (0, r.jsx)(e, { ...n, channel: t, guild: i });
                    });
            };
            handleClick = (e) => {
                let t = e.getGuildId();
                if (null == t) throw Error("TextChannel, transitionTo: Channel does not have a guildId");
                (0, et.pX)(H.BVt.CHANNEL(t, e.id), {
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
                        className: eO()(this.getClassName(), { [ea.r9]: this.isDisabled() }),
                        "data-dnd-name": (0, tJ.m1)(e, lr.default, lE.A),
                        children: (0, r.jsxs)(nP.Ay, {
                            className: ea.Ki,
                            channel: e,
                            selected: t,
                            onClick: this.handleClick,
                            onMouseDown: lV,
                            onContextMenu: this.handleContextMenu,
                            connectDragPreview: s ? l : null,
                            "aria-label": (0, i5.Ay)({ channel: e }),
                            resolvedUnreadSetting: nV.e.ONLY_MENTIONS,
                            children: [this.renderInviteButton(), this.renderEditButton()],
                        }),
                    });
                return s ? n(i(a)) : a;
            }
        },
    ),
    lH = a.memo(function (e) {
        let { channel: t, guild: n, disableSorting: i } = e,
            l = (0, h.cf)([U.A, P.A], () => {
                let e = U.A.getChannel(t.parent_id);
                return {
                    canManageChannel: P.A.can(H.xBc.MANAGE_CHANNELS, t),
                    canReorderChannel:
                        !0 !== i && null != e ? P.A.can(H.xBc.MANAGE_CHANNELS, e) : P.A.can(H.xBc.MANAGE_CHANNELS, n),
                };
            }),
            s = (0, i9.BX)("StoreChannel");
        return (0, r.jsx)(lw, { ...l, ...e, shouldEnlargeTargets: s });
    });
var lk = n(172218),
    lB = n(811024),
    lF = n(323073);
function lK(e) {
    if (null == e) return null;
    switch (e.type) {
        case "embedded-activities":
        case "event":
            return { subtitle: e.name };
        case "go-live":
            return { subtitle: es.intl.string(es.t.Pa817q) };
    }
    return null;
}
var lz = n(3322),
    lW = n(696451),
    lY = n(763827),
    lX = n(56059),
    lq = n(163328),
    lJ = n(778712),
    lZ = n(730134),
    l$ = n(707539),
    lQ = n(486020),
    l0 = n(98098);
function l1(e) {
    let { channel: t } = e,
        i = (0, h.yK)([lj.A, n4.Ay, P.A], () => {
            let e = lj.A.getActiveJoinedRelevantThreadsForParent(t.guild_id, t.id);
            return d()(lj.A.getActiveJoinedThreadsForParent(t.guild_id, t.id))
                .values()
                .map((e) => e.channel)
                .concat(d().values(lj.A.getActiveUnjoinedThreadsForParent(t.guild_id, t.id)))
                .filter((t) => !(t.id in e) && P.A.can(H.xBc.VIEW_CHANNEL, t))
                .sort((e, t) => {
                    let n = n4.Ay.lastMessageId(e.id),
                        i = n4.Ay.lastMessageId(t.id);
                    return tc.default.compare(n, i);
                })
                .reverse()
                .value();
        }),
        l = t.isForumLikeChannel() ? 5 : 3,
        s = t.isForumLikeChannel() ? lX.b : lq.y;
    return (
        a.useEffect(() => {
            (0, l$.TE)();
        }, []),
        (0, r.jsxs)("div", {
            className: l0.SW,
            children: [
                (0, r.jsx)(e0.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: l0.DD,
                    children: t.isForumLikeChannel() ? es.intl.string(es.t.ioVdO2) : es.intl.string(es.t.VNYs2v),
                }),
                (0, r.jsxs)("div", {
                    className: l0.p_,
                    children: [
                        i
                            .slice(0, t.isForumLikeChannel() ? i.length : l)
                            .map((e) => (0, r.jsx)(l3, { thread: e }, e.id))
                            .filter((e) => a.isValidElement(e))
                            .slice(0, l),
                        (0, r.jsxs)(q.D, {
                            className: l0.nM,
                            onClick: function () {
                                t.isForumLikeChannel()
                                    ? (0, lh.iN)(t.id)
                                    : (0, I.openModalLazy)(async () => {
                                          let { default: e } = await Promise.all([
                                              n.e("327744"),
                                              n.e("852197"),
                                              n.e("225307"),
                                              n.e("332165"),
                                              n.e("618416"),
                                              n.e("501546"),
                                              n.e("849162"),
                                              n.e("802598"),
                                              n.e("242266"),
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
                                    className: l0.R4,
                                    children: (0, r.jsx)(s, { size: "custom", className: l0.Kk }),
                                }),
                                (0, r.jsx)("div", {
                                    className: l0.Pf,
                                    children: (0, r.jsx)(e0.E, {
                                        variant: "text-sm/normal",
                                        color: "none",
                                        children: es.intl.string(es.t["4qdZ93"]),
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
function l3(e) {
    let { thread: t } = e,
        n = (0, h.bG)([lr.default], () => lr.default.getUser(t.ownerId)),
        i = (0, l$.JO)(t);
    return (0, r.jsxs)(q.D, {
        className: l0.nM,
        onClick: function (e) {
            (0, iD.JA)(t, t.isForumPost() ? e.shiftKey : !e.shiftKey, iV.H9.POPOUT);
        },
        children: [
            (0, r.jsx)("div", {
                className: l0.R4,
                children:
                    null == n
                        ? (0, r.jsx)("img", {
                              className: l0.my,
                              src: lQ.Ay.getDefaultAvatarURL(void 0, void 0),
                              alt: "",
                          })
                        : (0, r.jsx)(lZ.A, { className: l0.my, user: n, size: lJ._3.SIZE_16 }),
            }),
            (0, r.jsxs)("div", {
                className: l0.Pf,
                children: [
                    (0, r.jsx)(e0.E, { className: l0.UU, variant: "text-sm/normal", color: "none", children: t.name }),
                    (0, r.jsx)(e0.E, { variant: "text-sm/normal", color: "text-muted", children: "\u2022" }),
                    (0, r.jsx)(e0.E, {
                        className: l0.vE,
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: (0, l$.aK)(i),
                    }),
                ],
            }),
        ],
    });
}
var l2 = n(334105);
function l9(e) {
    let { channel: t, isSuggestedSection: n } = e;
    return (0, r.jsx)(X.m, {
        asContainer: !0,
        text: es.intl.string(es.t.ZXxLQg),
        children: (0, r.jsx)(q.D, {
            className: ea.Xs,
            onClick: () => {
                ((0, l2.fJ)(t.getGuildId(), t.id),
                    (0, lh.iN)(t.id, n ? { source: lu.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0));
            },
            "aria-label": es.intl.string(es.t.ZXxLQg),
            children: (0, r.jsx)(iT.ChatIcon, { size: "xs", color: "currentColor", className: ea.gE }),
        }),
    });
}
var l5 = n(364522),
    l7 = n(302959),
    l6 = n(35903),
    l4 = n(970928),
    l8 = n(427262),
    se = n(641635);
let st = nr.DN.SIZE_24;
function sn(e) {
    let { activity: t, embeddedApp: n } = e,
        i = t?.assets,
        l = t?.application_id;
    if (null == i || (null == i.large_image && null == i.small_image)) {
        let e = lQ.Ay.getApplicationIconURL({ id: n.application.id, icon: n.application.icon }),
            t = n.application.name;
        return (0, r.jsx)(X.m, {
            text: t,
            position: "top",
            asContainer: !0,
            children: (0, r.jsx)("img", { alt: t, src: e, className: se.P3 }),
        });
    }
    let s = i.large_image ?? i.small_image;
    return null != s
        ? (0, r.jsx)("img", { alt: i.large_text ?? "", src: (0, l4.uD)(l, s, [128, 128]), className: se.P3 })
        : null;
}
function si(e) {
    let { activity: t, embeddedApp: n, channel: i } = e,
        l = Array.from(n.embeddedActivity.userIds),
        s = (0, h.yK)([lr.default], () => l.map((e) => lr.default.getUser(e)).filter(to.Vq));
    return (0, r.jsx)("div", {
        className: se.ec,
        children: (0, r.jsxs)("div", {
            className: se.Wh,
            children: [
                (0, r.jsx)(sn, { activity: t, embeddedApp: n }),
                (0, r.jsxs)("div", {
                    className: se.X0,
                    children: [
                        (0, r.jsx)(ii.D, {
                            variant: "heading-sm/semibold",
                            color: "text-strong",
                            className: se.wx,
                            lineClamp: 1,
                            children: n.application.name,
                        }),
                        t?.details != null &&
                            "" !== t.details &&
                            (0, r.jsx)(e0.E, {
                                variant: "text-xs/normal",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.details,
                            }),
                        t?.state != null &&
                            "" !== t.state &&
                            (0, r.jsx)(e0.E, {
                                variant: "text-xs/normal",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.state,
                            }),
                        l.length > 0 &&
                            (0, r.jsx)(nr.Ay, {
                                className: se.TN,
                                guildId: i.guild_id,
                                users: s,
                                size: st,
                                max: 7,
                                renderUser: function (e) {
                                    if (null == e || e === nr.mt) return null;
                                    let t = l8.Ay.getName(e);
                                    return (0, r.jsx)(
                                        X.m,
                                        {
                                            asContainer: !0,
                                            text: t,
                                            position: "bottom",
                                            children: (0, r.jsx)("img", {
                                                src: e.getAvatarURL(i.guild_id, st),
                                                alt: t,
                                                className: se.my,
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
var sl = n(584960);
function ss(e) {
    let { channel: t, presenceActivity: n, embeddedApp: i, onAction: l } = e,
        s = Array.from(i.embeddedActivity.userIds),
        a = (0, h.bG)([lr.default], () => lr.default.getUser(s[0]));
    return null == a
        ? null
        : (0, r.jsxs)("div", {
              className: sl.Eb,
              children: [
                  (0, r.jsx)("div", {
                      className: sl.Il,
                      children: (0, r.jsx)(si, { activity: n, embeddedApp: i, channel: t }),
                  }),
                  (0, r.jsx)("div", {
                      className: sl.M4,
                      children: (0, r.jsx)(l6.A, {
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
var sr = n(713654),
    sa = n(744399);
function so(e) {
    let { channel: t } = e,
        n = (0, h.bG)([O.A], () => O.A.getGuild(t.guild_id)),
        i = (0, tJ.Ay)(t),
        l = (0, sr.gU)(t, n);
    return null == l
        ? null
        : (0, r.jsxs)("div", {
              className: sa.hY,
              children: [
                  (0, r.jsx)(l, { className: sa.p }),
                  (0, r.jsx)(e0.E, {
                      variant: "text-md/semibold",
                      color: "interactive-text-default",
                      className: sa.HA,
                      children: i,
                  }),
              ],
          });
}
var sd = n(220650);
function sc(e) {
    let { channel: t, onAction: n } = e,
        i = (0, lx.Ay)(t),
        l = Array.from((0, lx.Rz)(i).values());
    return 0 === l.length
        ? null
        : (0, r.jsxs)(l5.Ip, {
              className: sd.kL,
              children: [
                  (0, r.jsx)("div", { className: sd.oT, children: (0, r.jsx)(so, { channel: t }) }),
                  (0, r.jsx)("div", { className: sd.zN }),
                  l.map((e, i) =>
                      (0, r.jsx)(
                          ss,
                          { embeddedApp: e, presenceActivity: e.presenceActivity ?? void 0, channel: t, onAction: n },
                          i,
                      ),
                  ),
              ],
          });
}
class su extends nO {
    state = { shouldShowThreadsPopout: !1, shouldShowActivities: !1, isMenuItemPopoverVisible: !1 };
    channelItemRef = a.createRef();
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
        iy.A.preload(t ?? H.ME, e.id);
    };
    renderPopout = (e) => {
        let { channel: t, sorting: n, embeddedApps: i, channelIsContentGated: l } = this.props,
            { shouldShowActivities: s } = this.state;
        return t.isModeratorReportChannel() || l
            ? null
            : null != i && i.length > 0 && s && !n
              ? (0, r.jsx)(sc, { onAction: this.handleActivitiesPopoutClose, channel: t })
              : (0, r.jsx)(l1, { ...e, channel: this.props.channel });
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
                return (n) => (0, r.jsx)(e, { ...n, channel: t, selected: !0 });
            });
        if (t.type === H.rbe.DM) {
            let i = lr.default.getUser(t.getRecipientId());
            null != i &&
                (0, e1.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("339715"),
                        n.e("790484"),
                        n.e("819113"),
                        n.e("622936"),
                        n.e("216947"),
                        n.e("463317"),
                        n.e("926132"),
                        n.e("834552"),
                        n.e("146652"),
                        n.e("993103"),
                        n.e("708757"),
                        n.e("585968"),
                        n.e("893190"),
                        n.e("393336"),
                        n.e("776273"),
                        n.e("391763"),
                        n.e("189673"),
                        n.e("28102"),
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
                        n.e("592822"),
                        n.e("965789"),
                        n.e("529422"),
                        n.e("823427"),
                        n.e("309291"),
                        n.e("198415"),
                        n.e("307059"),
                        n.e("838056"),
                        n.e("508829"),
                        n.e("17244"),
                        n.e("516054"),
                        n.e("298199"),
                        n.e("864464"),
                        n.e("439778"),
                    ]).then(n.bind(n, 385913));
                    return (n) => (0, r.jsx)(e, { ...n, user: i, channel: t, showModalItems: !1 });
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
                return (n) => (0, r.jsx)(e, { ...n, channel: t });
            });
        let i = O.A.getGuild(t.getGuildId());
        null != i &&
            (0, e1.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("926132"),
                    n.e("146652"),
                    n.e("993103"),
                    n.e("893190"),
                    n.e("393336"),
                    n.e("391763"),
                    n.e("955557"),
                    n.e("474610"),
                    n.e("947502"),
                    n.e("603998"),
                    n.e("550033"),
                    n.e("343266"),
                    n.e("965789"),
                    n.e("201050"),
                    n.e("198415"),
                    n.e("309004"),
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
                return (n) => (0, r.jsx)(e, { ...n, channel: t, guild: i });
            });
    };
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e ? null : (0, r.jsx)("div", { className: ea.yW, children: e });
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
                isSubscriptionGated: g,
                isFavoriteSuggestion: m,
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
            j = lK(A),
            v = _ ? { source: lu.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
            R = (0, r.jsxs)("li", {
                className: eO()(this.getClassName(), { [ea.r9]: this.isDisabled(), [ea.wH]: n }),
                "data-dnd-name": (0, tJ.m1)(e, lr.default, lE.A),
                onMouseEnter: b || G ? this.handleMouseEnter : void 0,
                onMouseLeave: b || G ? this.handleMouseLeave : void 0,
                children: [
                    (0, r.jsx)(i1.Y, {
                        targetElementRef: S,
                        position: "right",
                        renderPopout: this.renderPopout,
                        onRequestClose: this.handleClosePopout,
                        spacing: 17,
                        shouldShow: (b && this.state.shouldShowThreadsPopout) || (G && this.state.shouldShowActivities),
                        children: () =>
                            (0, r.jsxs)(nP.Ay, {
                                ref: this.setChannelItemRef,
                                className: ea.Ki,
                                channel: e,
                                guild: t,
                                selected: !m && n,
                                muted: i,
                                unread: l,
                                mentionCount: o,
                                hasActiveThreads: s,
                                subtitle: j?.subtitle,
                                subtitleColor: j?.color,
                                onMouseDown: this.handleMouseDown,
                                onContextMenu: this.handleContextMenu,
                                connectDragPreview: h ? u : null,
                                isFavoriteSuggestion: m,
                                channelTypeOverride: f ? H.rbe.GUILD_TEXT : void 0,
                                resolvedUnreadSetting: C,
                                transitionExtras: v,
                                "aria-label": (0, i5.Ay)({
                                    channel: e,
                                    unread: l,
                                    mentionCount: o,
                                    isSubscriptionGated: g,
                                    embeddedActivitiesCount: p?.length,
                                }),
                                children: [
                                    m &&
                                        (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                this.renderAcceptSuggestionButton(),
                                                this.renderRemoveSuggestionButton(),
                                            ],
                                        }),
                                    !m &&
                                        (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                this.renderChannelInfo(),
                                                e.type === H.rbe.GUILD_APP
                                                    ? (0, r.jsx)(l9, { channel: e, isSuggestedSection: _ })
                                                    : null,
                                                this.renderInviteButton(),
                                                this.renderEditButton(),
                                            ],
                                        }),
                                ],
                            }),
                    }),
                    n &&
                        (0, r.jsx)(lz.A, {
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
let sh = B(su);
function sg(e) {
    let { channel: t, guild: n, disableSorting: i, isFavoriteCategory: l, muted: s, selected: o } = e,
        { hasActiveThreads: d, hasMoreActiveThreads: c } = (0, iU.NR)(t),
        u = (0, h.cf)([n4.Ay], () => ({
            unread: n4.Ay.hasUnread(t.id),
            ackMessageId: n4.Ay.ackMessageId(t.id),
            isLowImportanceMention: n4.Ay.getIsMentionLowImportance(t.id),
        })),
        g = (0, h.bG)([w.Ay], () => w.Ay.resolveUnreadSetting(t)),
        m = (0, h.cf)([U.A, P.A], () => {
            let e = U.A.getChannel(t.parent_id);
            return {
                canManageChannel: P.A.can(H.xBc.MANAGE_CHANNELS, t),
                canReorderChannel:
                    !0 !== i &&
                    ((0, T.ai)(n.id) ||
                        (null != e ? P.A.can(H.xBc.MANAGE_CHANNELS, e) : P.A.can(H.xBc.MANAGE_CHANNELS, n))),
            };
        }),
        A = (0, h.bG)([n6.A], () => n6.A.shouldIndicateNewChannel(n.id, t.id)),
        { needSubscriptionToAccess: f, isSubscriptionGated: p } = (0, iL.A)(t.id),
        C = (0, h.bG)([w.Ay], () => w.Ay.isFavorite(n.id, t.id)),
        E = (0, lF.ni)(t),
        x = (0, lB.Gp)(t.id),
        N = lL({
            channel: t,
            isChannelCollapsed: !1,
            isChannelSelected: o,
            isSubscriptionGated: p,
            needSubscriptionToAccess: f,
            isNewChannel: A,
            muted: s,
            enableActivities: x,
            resolvedUnreadSetting: g,
        }),
        _ = (0, lx.Ay)(t),
        [S, I] = a.useState(!1),
        b = (0, lk.K)(
            a.useCallback((e) => {
                I(e);
            }, []),
        ),
        G = (0, h.bG)([lY.A, lW.Ay], () => lY.A.getChannelId() !== t.id && lW.Ay.isCurrentUserGuest(t.getGuildId())),
        j = (0, i9.BX)("ConnectedTextChannel");
    return G
        ? null
        : (0, r.jsx)(sh, {
              ...u,
              ...m,
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
              resolvedUnreadSetting: g,
              hasChannelInfo: null != N,
              enableActivities: x,
              isTargetInViewport: S,
              channelItemRef: b,
              shouldEnlargeTargets: j,
          });
}
var sm = n(900797),
    sA = n(636585),
    sf = n(531685),
    sp =
        (((s = {}).HIDDEN = "hidden"),
        (s.UNREAD = "unread"),
        (s.MENTIONS = "mentions"),
        (s.VOICE_CHANNELS = "voice-channels"),
        s);
let sC = { mode: "hidden", mentionCount: 0, targetChannelId: null },
    sE = { topBar: sC, bottomBar: sC },
    sx = {},
    sN = {};
function s_(e) {
    let t = U.A.getChannel(e);
    return (
        !(null == t || null == t.getGuildId() || t.isGuildVocal()) &&
        !(t.isThread() ? iB.A.isMuted(t.id) : w.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, ts.Y)(t)
    );
}
function sS(e) {
    let t = U.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let i = w.Ay.isGuildCollapsed(n),
        l = w.Ay.isChannelMuted(n, t.id);
    return (!i || !l) && n4.Ay.getMentionCount(e) > 0;
}
function sI(e) {
    return (
        !w.Ay.isChannelMuted(e.guild_id, e.id) &&
        (e.isGuildStageVoice()
            ? tu.A.getMutableParticipants(e.id, th.ip.SPEAKER).length > 0
            : ta.Ay.getVoiceStatesForChannel(e).length > 0)
    );
}
function sb(e) {
    let { guildChannels: t } = tN.A.getGuildWithoutChangingGuildActionRows(e),
        n = t.getChannels(sN[e] ?? []);
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
        [g, m, A] = t.getSlicedChannels(n);
    for (let e = 0; e < m.length; e++) {
        let t = m[e];
        if (
            ((s_(t.id) || d().some(t.threadIds, s_)) && (o = !1),
            (sS(t.id) || d().some(t.threadIds, sS)) && (a = !1),
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
        for (let e = g.length - 1; e >= 0; e--) {
            let t = g[e];
            ((s_(t.id) || d().some(t.threadIds, s_)) && (null == l && (l = t.id), (p = !0)),
                (sS(t.id) || d().some(t.threadIds, sS)) &&
                    (null == i && (i = t.id),
                    (f += n4.Ay.getMentionCount(t.id)),
                    (f += d().sumBy(t.threadIds, n4.Ay.getMentionCount))));
        }
    if (o || a)
        for (let e = 0; e < A.length; e++) {
            let t = A[e];
            if (!o && !a) break;
            ((s_(t.id) || d().some(t.threadIds, s_)) && (null == r && (r = t.id), (E = !0)),
                (sS(t.id) || d().some(t.threadIds, sS)) &&
                    (null == s && (s = t.id),
                    (C += n4.Ay.getMentionCount(t.id)),
                    (C += d().sumBy(t.threadIds, n4.Ay.getMentionCount))));
        }
    let x = null,
        N = null,
        _ = u?.getChannelRecords() ?? [];
    (a && C > 0
        ? (x = { mode: "mentions", mentionCount: C, targetChannelId: s })
        : !c && d().some(_, sI)
          ? (x = { mode: "voice-channels", mentionCount: 0, targetChannelId: null })
          : o && E && (x = { mode: "unread", mentionCount: 0, targetChannelId: r }),
        a && f > 0
            ? (N = { mode: "mentions", mentionCount: f, targetChannelId: i })
            : o && p && (N = { mode: "unread", mentionCount: 0, targetChannelId: l }));
    let S = null != N && (null == x || ("mentions" !== x.mode && "mentions" === N.mode)),
        I = null != x && ("mentions" === x.mode || !S);
    return ((sx[e] = { topBar: S ? (N ?? sC) : sC, bottomBar: I ? (x ?? sC) : sC }), !0);
}
let sG = d().throttle(sb, 200);
function sj(e) {
    let { guildId: t } = e,
        n = O.A.getGuild(t);
    return null != n && !!n.features.has(H.GuildFeatures.COMMUNITY) && sG(t);
}
function sv(e) {
    let { id: t } = e,
        n = U.A.getChannel(t);
    if (null == n) return !1;
    let i = O.A.getGuild(n.guild_id);
    return null != i && !!i.features.has(H.GuildFeatures.COMMUNITY) && sG(n.guild_id);
}
function sR(e) {
    let { channel: t } = e,
        n = U.A.getChannel(t.id);
    if (null == n) return !1;
    let i = O.A.getGuild(t.guild_id);
    return null != i && !!i.features.has(H.GuildFeatures.COMMUNITY) && sG(n.guild_id);
}
function sy(e) {
    let { channelId: t } = e,
        n = U.A.getChannel(t);
    if (null == n) return !1;
    let i = O.A.getGuild(n.guild_id);
    return (
        null != i && !!i.features.has(H.GuildFeatures.COMMUNITY) && V.A.getGuildId() === n.guild_id && sG(n.guild_id)
    );
}
function sT(e) {
    let { guildId: t } = e;
    return null != t && sG(t);
}
class sM extends h.Ay.Store {
    static displayName = "ChannelListUnreadsStore";
    initialize() {
        this.waitFor(tN.A, U.A, O.A, iB.A, n4.Ay, V.A, ta.Ay, tu.A, w.Ay, lr.default);
    }
    getUnreadStateForGuildId(e) {
        return sx[e] ?? sE;
    }
}
let sL = new sM(e2.h, {
    UPDATE_CHANNEL_LIST_DIMENSIONS: function (e) {
        let { guildId: t, channelIds: n } = e,
            i = O.A.getGuild(t);
        return (
            null != i &&
            !!i.features.has(H.GuildFeatures.COMMUNITY) &&
            null != n &&
            !d().isEqual(sN[t], n) &&
            ((sN[t] = n), sb(t))
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
                .filter(to.Vq)
                .uniq()
                .forEach((e) => {
                    let t = O.A.getGuild(e);
                    null != t && t.features.has(H.GuildFeatures.COMMUNITY) && sG(e) && (n = !0);
                }),
            n
        );
    },
    CHANNEL_ACK: sy,
    CHANNEL_DELETE: sR,
    CHANNEL_LOCAL_ACK: sy,
    MESSAGE_ACK: sy,
    MESSAGE_CREATE: sy,
    MESSAGE_DELETE_BULK: sy,
    MESSAGE_DELETE: sy,
    PASSIVE_UPDATE_V2: function (e) {
        let t = O.A.getGuild(e.guildId);
        return !!(e.channels.length > 0 && null != t && t.features.has(H.GuildFeatures.COMMUNITY)) && sG(e.guildId);
    },
    RESORT_THREADS: sy,
    THREAD_CREATE: sR,
    THREAD_DELETE: sR,
    THREAD_LIST_SYNC: sj,
    THREAD_MEMBER_UPDATE: sv,
    THREAD_MEMBERS_UPDATE: sv,
    THREAD_UPDATE: sR,
    BULK_CLEAR_RECENTS: sj,
    CATEGORY_COLLAPSE_ALL: sj,
    CATEGORY_EXPAND_ALL: sj,
    CURRENT_USER_UPDATE: function () {
        let e = lr.default.getCurrentUser()?.nsfwAllowed;
        if (e === i) return !1;
        i = e;
        let t = V.A.getGuildId();
        if (null == t) return !1;
        let n = O.A.getGuild(t);
        return null != n && !!n.features.has(H.GuildFeatures.COMMUNITY) && sG(t);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = V.A.getGuildId();
        if (null == n || !new Set(t.map((e) => e.guildId)).has(n)) return !1;
        let i = sx[n];
        return null != i && "voice-channels" === i.bottomBar.mode && sG(n);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: sT,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: sT,
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: t } = e;
        for (let e of t) null != e.guild_id && sG(e.guild_id);
    },
    USER_GUILD_SETTINGS_GUILD_UPDATE: sT,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: sT,
});
var sU = n(350536);
let sD = { friction: 30, tension: 300 };
function sO(e) {
    let { guildChannels: t, jumpToVoiceChannels: n } = e,
        i = t.getCategoryFromSection(t.voiceChannelsSectionNumber),
        l = (0, h.bG)([ta.Ay], () => ta.Ay.getVoiceStates(t.id), [t.id]),
        s = a.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), n());
            },
            [n],
        ),
        o = i?.getChannelRecords() ?? [],
        d = (0, nd.fK)({ channels: o, selectedChannelId: null, selectedVoiceChannelId: null, voiceStates: l });
    return (0, r.jsxs)(q.D, {
        className: eO()(sU.M0, sU.OF),
        onClick: s,
        children: [
            (0, r.jsx)(tX.H, { size: "custom", className: sU.Gs, width: 14, height: 14, color: "currentColor" }),
            (0, r.jsx)(e0.E, {
                variant: "text-xs/semibold",
                className: sU.pM,
                children: es.intl.format(es.t["fDlr+F"], { count: d.length }),
            }),
            (0, r.jsx)(sA.A, {
                guildId: t.id,
                className: sU.J$,
                users: d.slice(0, 4),
                renderMoreUsers: () => null,
                max: 4,
                size: lJ._3.SIZE_16,
            }),
        ],
    });
}
function sP(e) {
    let { position: t, guildChannels: n, guildChannelsVersion: i, jumpToVoiceChannels: l, jumpToChannel: s } = e,
        { bottomBar: o, topBar: d } = (0, h.cf)([sL], () => sL.getUnreadStateForGuildId(n.id)),
        c = (0, h.bG)([sf.A], () => sf.A.isFocused()),
        { mode: u, mentionCount: g, targetChannelId: m } = "bottom" === t ? o : d,
        A = u === sp.HIDDEN,
        f = (0, eQ.z)(
            {
                to: { transform: A ? ("bottom" === t ? "translateY(180%)" : "translateY(-180%)") : "translateY(0%)" },
                config: sD,
            },
            c ? "respect-motion-settings" : "animate-never",
        ),
        p = a.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), null != m && s(m));
            },
            [s, m],
        );
    return (0, r.jsx)("div", {
        className: eO()(sU.kL, { [sU.Mn]: "top" === t, [sU.sQ]: "bottom" === t }),
        children: (0, r.jsx)(e$.animated.div, {
            className: sU.pK,
            style: f,
            "aria-hidden": A,
            children: (function () {
                switch (u) {
                    case sp.HIDDEN:
                        return (0, r.jsx)("div", { className: eO()(sU.M0, sU.Te) });
                    case sp.UNREAD:
                        return (0, r.jsxs)(q.D, {
                            className: sU.M0,
                            onClick: p,
                            children: [
                                "bottom" === t
                                    ? (0, r.jsx)(tW.a, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: sU.z_,
                                          height: 14,
                                          width: 14,
                                      })
                                    : (0, r.jsx)(sm.t, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: sU.z_,
                                          height: 14,
                                          width: 14,
                                      }),
                                (0, r.jsx)(e0.E, {
                                    variant: "text-xs/semibold",
                                    color: "interactive-text-default",
                                    className: sU.pM,
                                    children: es.intl.string(es.t.FCRiT3),
                                }),
                            ],
                        });
                    case sp.MENTIONS:
                        return (0, r.jsx)(q.D, {
                            className: eO()(sU.M0, sU.vU),
                            onClick: p,
                            children: (0, r.jsx)(e0.E, {
                                variant: "text-xs/semibold",
                                color: "badge-text-brand",
                                className: sU.pM,
                                children: es.intl.format(es.t.EQcLyp, { count: g }),
                            }),
                        });
                    case sp.VOICE_CHANNELS:
                        return (0, r.jsx)(sO, { jumpToVoiceChannels: l, guildChannels: n, guildChannelsVersion: i });
                    default:
                        return;
                }
            })(),
        }),
    });
}
var sV = n(310953),
    sw = n(173860);
function sH(e) {
    let t = U.A.getChannel(e);
    return (
        null != t &&
        null != t.getGuildId() &&
        !(t.isThread() ? iB.A.isMuted(t.id) : w.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, ts.Y)(t)
    );
}
function sk(e) {
    let t = U.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let i = w.Ay.isGuildCollapsed(n),
        l = w.Ay.isChannelMuted(n, t.id);
    return (!i || !l) && n4.Ay.getMentionCount(e) > 0;
}
function sB(e) {
    let { guildId: t, guildChannels: n, guildChannelsVersion: i, ref: l, ...s } = e,
        a = (0, sV.W)(t, n, i, { withVoiceChannels: !1 }, { ignoreRecents: !0 }),
        o = (0, h.bG)([sf.A], () => sf.A.isFocused());
    return (0, r.jsx)(sw.A, { ref: l, ...s, isUnread: sH, isMentioned: sk, items: a, animate: o });
}
var sF = n(81466);
function sK(e) {
    let { guild: t, selected: i } = e,
        { hasUnread: l, mentionCount: s } = (0, h.cf)(
            [n4.Ay],
            () => ({
                hasUnread: n4.Ay.hasUnread(t.id, nV.P.GUILD_EVENT),
                mentionCount: n4.Ay.getMentionCount(t.id, nV.P.GUILD_EVENT),
            }),
            [t.id],
        ),
        a = (0, h.bG)([w.Ay], () => w.Ay.isMuteScheduledEventsEnabled(t.id));
    async function o() {
        await (0, I.openModalLazy)(async () => {
            let { default: e } = await Promise.all([
                n.e("489565"),
                n.e("684231"),
                n.e("570690"),
                n.e("886631"),
                n.e("884841"),
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
            return (n) => (0, r.jsx)(e, { ...n, guildId: t.id });
        });
    }
    let d = (0, tV.Ay)(t.id),
        c = d.length > 0 ? es.intl.formatToPlainString(es.t.IBdqSu, { number: d.length }) : es.intl.string(es.t.tlopTM);
    return (0, r.jsx)(ee.G, {
        id: `upcoming-events-${t.id}`,
        renderIcon: (e) => (0, r.jsx)(sF.CalendarIcon, { size: "md", color: "currentColor", className: e }),
        text: c,
        selected: i,
        onClick: o,
        onContextMenu: function (e) {
            (0, e1.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("426386"), n.e("819990")]).then(n.bind(n, 221621));
                return (n) => (0, r.jsx)(e, { ...n, guildId: t.id });
            });
        },
        showUnread: l && !a,
        trailing: !a && s > 0 ? (0, r.jsx)(em.hV, { className: n0.Do, disableColor: !0, count: s }) : null,
    });
}
var sz = n(845056),
    sW = n(765379),
    sY = n(271683),
    sX = n(725613),
    sq = n(857253),
    sJ = n(360729),
    sZ = n(22231),
    s$ = n(241326),
    sQ = n(750943),
    s0 = n(743674),
    s1 = n(888697),
    s3 = n(26741),
    s2 = n(493819),
    s9 = n(722884),
    s5 = n(579129),
    s7 = n(176431);
function s6(e) {
    let { channel: t, imageUrl: i, animatedUrl: l, bannerHash: s, canModifyHangout: o } = e,
        d = (0, s0.S)(i),
        c = (0, ey.je)(t),
        u = (0, s3.P9)({ guildId: t.guild_id, channelId: t.id, bannerHash: s }),
        h = a.useCallback(() => {
            ((0, s3.J_)({ guildId: t.guild_id, channelId: t.id }), (0, s9.A)({ channel: t }));
        }, [t]),
        g = a.useCallback(() => {
            ((0, s3.nK)({ guildId: t.guild_id, channelId: t.id }), (0, s1.e2)(t.id));
        }, [t.guild_id, t.id]),
        m = a.useCallback(
            (e) => {
                c
                    ? (0, e1.L3)(e, async () => {
                          let { default: e } = await n.e("555558").then(n.bind(n, 316421));
                          return (n) => (0, r.jsx)(e, { ...n, channel: t });
                      })
                    : e.preventDefault();
            },
            [t, c],
        );
    return (0, r.jsxs)("div", {
        ref: u,
        className: s7.rs,
        onContextMenu: m,
        children: [
            (0, r.jsx)("div", {
                className: s7.ZS,
                style: null != d ? { backgroundColor: d } : void 0,
                children: (0, r.jsx)(s2.A, { imageUrl: i, animatedUrl: l, className: s7.Sl }),
            }),
            o
                ? (0, r.jsxs)("div", {
                      className: s7.n_,
                      children: [
                          (0, r.jsx)(X.m, {
                              text: es.intl.string(s5.default.XJ4UpB),
                              children: (0, r.jsx)(q.D, {
                                  className: s7.HF,
                                  onClick: h,
                                  children: (0, r.jsx)(sZ.PencilIcon, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                          (0, r.jsx)(X.m, {
                              text: es.intl.string(s5.default.XV4qT6),
                              children: (0, r.jsx)(q.D, {
                                  className: s7.HF,
                                  onClick: g,
                                  children: (0, r.jsx)(s$.TrashIcon, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function s4(e) {
    let { channel: t } = e,
        n = (0, s3.dX)({ guildId: t.guild_id, channelId: t.id }),
        i = a.useCallback(() => {
            ((0, s3.J_)({ guildId: t.guild_id, channelId: t.id }), (0, s9.A)({ channel: t }));
        }, [t]);
    return (0, r.jsx)("div", {
        ref: n,
        className: s7._o,
        children: (0, r.jsxs)(q.D, {
            className: s7.hH,
            onClick: i,
            children: [
                (0, r.jsx)(sQ.X, { size: "xs", color: "currentColor" }),
                (0, r.jsx)(e0.E, {
                    variant: "text-sm/medium",
                    color: "currentColor",
                    children: es.intl.string(s5.default.NGcIOF),
                }),
            ],
        }),
    });
}
function s8(e) {
    let { channel: t, isConnected: n } = e,
        { enableHangoutWindow: i } = (0, eR.Dm)({ guildId: t.guild_id, location: "HangoutWindow" }),
        l = (0, ey.W6)(t),
        s = n && l,
        o = t.voiceHangout,
        d = o?.banner_hash,
        c = a.useMemo(() => {
            if (null == d || null == t.guild_id) return null;
            let e = (0, ey.Sq)({ guildId: t.guild_id, bannerHash: d });
            return null == e ? null : { bannerHash: d, ...e };
        }, [t.guild_id, d]);
    return i
        ? null != c
            ? (0, r.jsx)(s6, {
                  channel: t,
                  imageUrl: c.imageUrl,
                  animatedUrl: c.animatedUrl,
                  bannerHash: c.bannerHash,
                  canModifyHangout: s,
              })
            : s
              ? (0, r.jsx)(s4, { channel: t })
              : null
        : null;
}
var re = n(290863),
    rt = n(461213),
    rn = n(532622),
    ri = n(882840),
    rl = n(208971),
    rs = n(46054),
    rr = n(569381),
    ra = n(165648);
function ro(e) {
    let { channel: t, connected: n, hovered: i, subtitle: l, onClick: s } = e,
        o = (0, rl.G)((0, ri.l)(t)),
        { enableHangoutWindow: d } = (0, eR.Dm)({ guildId: t.guild_id, location: "VoiceChannelStatus" }),
        c = d && (0, ey.lr)(t),
        u = null != o && o.length > 0,
        h = (0, rn.Ay)(t, !0),
        g = null != l && l.length > 0;
    if (
        (a.useEffect(() => {
            u && ib.default.track(H.HAw.VOICE_CHANNEL_TOPIC_VIEWED, { channel_id: t.id, guild_id: t.guild_id });
        }, [u, t.id, t.guild_id]),
        null == t.guild_id)
    )
        return null;
    let m = eO()(rr.Ui, n && h ? rr.BI : null);
    return u
        ? (0, r.jsx)(q.D, {
              className: m,
              onClick: h ? s : void 0,
              children: (0, r.jsx)(e0.E, {
                  variant: "text-xs/medium",
                  className: eO()(rr.qS, ra.PT),
                  children: (0, r.jsx)(tB.A, { children: rs.A.parseVoiceChannelStatus(o, !0, { channelId: t.id }) }),
              }),
          })
        : n && h && !c && (!g || i)
          ? (0, r.jsxs)(q.D, {
                className: m,
                onClick: s,
                children: [
                    (0, r.jsx)(e0.E, {
                        variant: "text-xs/medium",
                        className: rr.qS,
                        children: es.intl.string(es.t.Mgpxiw),
                    }),
                    (0, r.jsx)(sZ.PencilIcon, { color: "currentColor", className: rr.rD, size: "xxs" }),
                ],
            })
          : g
            ? (0, r.jsx)(tB.A, { children: l })
            : null;
}
class rd extends nO {
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
        (o && i3.A.updateChatOpen(n.id, !0),
            iM.A.handleVoiceConnect({
                channel: n,
                connected: t,
                needSubscriptionToAccess: l,
                routeDirectlyToChannel: o || a,
                locked: e,
                transitionExtras: r ? { source: lu.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
            }));
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            i = O.A.getGuild(t.getGuildId());
        null != i &&
            (0, e1.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("926132"),
                    n.e("146652"),
                    n.e("993103"),
                    n.e("893190"),
                    n.e("393336"),
                    n.e("391763"),
                    n.e("955557"),
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
        return (0, nd.Pd)(e, iO.A, O.A);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        if (n) return ea.ZS;
        if (null != t)
            if (e > t) return ea.mU;
            else return ea.TR;
        return ea.fx;
    }
    handleClick = () => {
        let { channel: e } = this.props,
            t = e.getGuildId();
        (null != t && (0, i6.V)(t) && (0, i7.Ze)(t), this.handleVoiceConnect());
    };
    handleVoiceStatusClick = (e) => {
        let { connected: t, channel: n } = this.props;
        t && (e.stopPropagation(), (0, sY.A)({ channel: n }));
    };
    renderSubtitle() {
        let { channel: e, connected: t } = this.props,
            n = lK(this.props.subtitle)?.subtitle,
            { hovered: i } = this.state;
        return (0, r.jsx)(ro, {
            onClick: this.handleVoiceStatusClick,
            channel: e,
            connected: t,
            subtitle: n,
            hovered: i,
        });
    }
    renderVoiceUsers() {
        let { channel: e, voiceStates: t, collapsed: n, withGuildIcon: i, tabIndex: l } = this.props;
        return (0, r.jsx)(iq.A, {
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
        return !(null != n && n.length > 0) || i ? null : (0, r.jsx)(s8, { channel: e, isConnected: t });
    }
    renderPopout = () => {
        let { channel: e } = this.props,
            { shouldShowGuildVerificationPopout: t } = this.state;
        return t
            ? (0, r.jsx)(lc, { type: ld.VOICE, guildId: e.guild_id, closePopout: this.closeGuildVerificationPopout })
            : null;
    };
    renderOpenChatButton = () => {
        let { channel: e, locked: t, forceShowButtons: n, isSuggestedSection: i, shouldEnlargeTargets: l } = this.props;
        if (!t)
            return (0, r.jsx)(X.m, {
                asContainer: !0,
                text: es.intl.string(es.t.ZXxLQg),
                children: (0, r.jsx)(q.D, {
                    className: eO()(ea.Xs, { [ea.Tf]: n }),
                    onClick: () => {
                        (i3.A.updateChatOpen(e.id, !0),
                            (0, lh.iN)(e.id, i ? { source: lu.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0));
                    },
                    "aria-label": es.intl.string(es.t.ZXxLQg),
                    focusProps: l ? { offset: 2 } : void 0,
                    children: (0, r.jsx)(iT.ChatIcon, { size: "xs", color: "currentColor", className: ea.gE }),
                }),
            });
    };
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e ? null : (0, r.jsx)("div", { className: ea.yW, children: e });
    }
    getTooltipText = () => {
        let { connected: e } = this.props;
        return this.isFull() && !e ? es.intl.string(es.t.rZfiNq) : null;
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
                canMoveMembers: g,
                showTutorial: m,
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
            j = (0, r.jsxs)("li", {
                ref: this.ref,
                className: eO()(this.getModeClass(), { [ea.r9]: this.isDisabled(), [ea.fy]: _ }),
                "data-dnd-name": (0, tJ.m1)(e, lr.default, lE.A),
                children: [
                    _ &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)("div", { className: ea.UQ }),
                                (0, r.jsx)("div", { className: ea.l0 }),
                            ],
                        }),
                    (0, r.jsx)("div", {
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        children: (0, r.jsx)(i1.Y, {
                            targetElementRef: this.channelItemRef,
                            position: "right",
                            renderPopout: this.renderPopout,
                            onRequestClose: this.closeGuildVerificationPopout,
                            spacing: 17,
                            shouldShow: b,
                            children: () =>
                                (0, r.jsx)(X.m, {
                                    text: this.getTooltipText(),
                                    children: (0, r.jsxs)(nP.Ay, {
                                        ref: this.channelItemRef,
                                        className: ea.Ki,
                                        iconClassName: eO()({ [ea.Gj]: A || x || G }),
                                        hasActiveEvent: A,
                                        channel: e,
                                        selected: !C && t,
                                        connected: n,
                                        unread: n ? i : void 0,
                                        resolvedUnreadSetting: l,
                                        mentionCount: s,
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
                                        "aria-label": (0, i5.Ay)({
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
            g && (j = c(j)),
            h && (j = o(d(j))),
            m &&
                (j = (0, r.jsx)(nt.A, {
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
let rc = B((0, i2.F)(rd));
function ru(e) {
    let {
            guild: t,
            channel: n,
            disableSorting: i,
            isFavoriteCategory: l,
            selected: s,
            collapsed: a,
            voiceStates: o,
        } = e,
        d = (0, h.cf)([n4.Ay], () => ({ unread: n4.Ay.hasUnread(n.id), mentionCount: n4.Ay.getMentionCount(n.id) })),
        c = (0, h.bG)([w.Ay], () => w.Ay.resolveUnreadSetting(n)),
        u = (0, h.cf)([U.A, ls.A, P.A], () => {
            let e = U.A.getChannel(n.parent_id),
                l = ls.A.getCheck(n.guild_id);
            return {
                canManageChannel: P.A.can(H.xBc.MANAGE_CHANNELS, n),
                canReorderChannel:
                    !0 !== i &&
                    ((0, T.ai)(t.id) ||
                        (null != e ? P.A.can(H.xBc.MANAGE_CHANNELS, e) : P.A.can(H.xBc.MANAGE_CHANNELS, t))),
                canMoveMembers: P.A.can(H.xBc.MOVE_MEMBERS, n),
                locked: !P.A.can(H.xBc.CONNECT, n),
                bypassLimit: P.A.can(H.xBc.MOVE_MEMBERS, n),
                unverifiedAccount: !l.canChat,
            };
        }),
        g = (0, h.bG)([iO.A], () => iO.A.hasVideo(n.id)),
        { enabled: m } = (0, sJ.mf)({ guildId: t.id, location: "VoiceChannel" }),
        A = (0, lx.Ay)(n),
        f = (0, h.yK)(
            [rt.A, re.A, lf.default],
            () => {
                if (null == o || 0 === o.length) return [];
                let e = lf.default.getId(),
                    t = [];
                for (let { user: i } of o)
                    for (let l of i.id === e ? rt.A.getActivities() : re.A.getActivities(i.id, n.guild_id))
                        !(0, sz.N)(l) || (0, sW.A)(l) || null == l.name || t.includes(l.name) || t.push(l.name);
                return t;
            },
            [o, n.guild_id],
        ),
        p = (0, tJ.Ay)(n),
        C = (0, tV.Qs)(n.id),
        E = (0, h.bG)([sX.A], () => sX.A.getStartTime(n), [n]),
        { isSubscriptionGated: x, needSubscriptionToAccess: N } = (0, iL.A)(n.id),
        _ = (0, sq.A)(),
        S = (0, h.bG)([w.Ay], () => w.Ay.isFavorite(t.id, n.id)),
        I = e.connected || _?.channelId === n.id,
        { enableHighlight: b, enableWaveformIcon: G } = (0, na.b)(t.id, "VoiceChannel"),
        j = null != o && o.length > 0,
        v = b && j,
        R = G && j,
        y = lL({
            channel: n,
            isChannelSelected: s,
            isChannelCollapsed: a,
            voiceStates: o,
            isSubscriptionGated: x,
            needSubscriptionToAccess: N,
            enableConnectedUserLimit: !0,
            enableActivities: !0,
        }),
        M = I && null == y,
        L = (0, i9.BX)("VoiceChannel");
    return (0, r.jsx)(rc, {
        channelName: p,
        embeddedApps: A,
        nonEmbeddedActivityNames: f,
        embeddedActivityType: H.$pd.PLAYING,
        video: g,
        hasActiveEvent: null != C,
        isSubscriptionGated: x,
        needSubscriptionToAccess: N,
        ...d,
        ...u,
        ...e,
        connected: I,
        isFavoriteSuggestion: l && !S,
        forceShowButtons: M,
        channelInfo: y,
        resolvedUnreadSetting: c,
        hasChannelInfo: null != y,
        hasStartTime: null != E,
        voiceChannelStartTime: E,
        shouldHighlightChannel: v,
        shouldUseAnimatedWaveform: R,
        guildRoomsEnabled: m,
        shouldEnlargeTargets: L,
    });
}
n(131955);
function rh(e) {
    return (
        g.A.modules.channels.NAME_LINE_HEIGHT.resolve({ density: e }) +
        2 * g.A.space.SPACE_XXS.resolve({ density: e }) +
        2
    );
}
class rg extends a.PureComponent {
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
                    a = s.threadOffset * rh(r);
                l.scrollIntoViewRect({ start: e + a, end: e + a + rh(r), padding: n, animate: t, callback: i });
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
    updateChannelListScroll = (0, o.throttle)((e) => {
        x.A.updateChannelListScroll(this.props.guildId, e, this.getVisibleChannels());
    }, 100);
    getSectionHeight = (e) => {
        let { guild: t, guildChannels: n, density: i } = this.props,
            l = "compact" === i ? 8 : 12;
        if (e === tx.PU) return l;
        if (e === tx.bK) return t.features.has(H.GuildFeatures.HUB) ? 0 : l;
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
            let { hasDivider: d, canHaveVoiceSummary: c } = nc(n, r, t),
                u = d ? (a ? 9 : g.A.space.SPACE_SM.resolve({ density: o ?? "default" })) : 0;
            if (!c || t === tx.PU) return u;
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
            a = rh(r);
        if (e === tx.PU) {
            let e = n.getGuildActionSection();
            return e.isEmpty()
                ? 0
                : e.getRow(t) === tk.n.GUILD_PREMIUM_PROGRESS_BAR
                  ? e.getRows().length > 1
                      ? 69
                      : 57
                  : e.getRow(t) === tk.n.GUILD_ONBOARDING_SETUP_PROGRESS
                    ? e.getRows().length > 1
                        ? 63
                        : 51
                    : a;
        }
        if (n.isPlaceholderRow(e, t)) return 0;
        let o = n.getChannelFromSectionRow(e, t);
        if (null == o) return 0;
        let { channel: d, category: c } = o;
        if (d.record.type === H.rbe.GUILD_CATEGORY) return 40;
        for (let e of d.threadIds) {
            let { density: t = "default" } = this.props;
            a += rh(t);
            let n = i[d.id];
            null != n && n.length > 0 && (a += s === e ? 32 * n.length : 32);
        }
        if (d.record.isGuildVoice()) {
            let e = i[d.id];
            if (null != e && e.length > 0) {
                let t = 32 * e.length;
                if (
                    (d.isCollapsed || c.isCollapsed ? (t = 32) : (0, eM.Ln)(d.record) && (t += 32),
                    (a += t + g.A.space.SPACE_XS.resolve({ density: r })),
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
        (null != n && s.includes(n) && (l = (0, eL.xb)(t)), (0, eL.DD)(e.id, s, l));
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
            ns,
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
                selectedChannelId: s,
                selectedVoiceChannel: o,
                selectedVoiceChannelId: d,
                guildChannels: c,
                voiceStates: u,
                disableManageChannels: h,
                stageChannelSpeakerVoiceStates: g,
                optInEnabled: m,
                withGuildIcon: A,
            } = this.props;
        if (t === tx.PU) {
            let e = c.getGuildActionSection(),
                t = e.getRow(n);
            if (null == t) return null;
            switch (t) {
                case tk.n.GUILD_HUB_HEADER_OPTIONS:
                    return (0, r.jsx)(
                        eT.A,
                        { guild: i, channel: tE.Ay.getDefaultChannel(i.id) },
                        tk.n.GUILD_HUB_HEADER_OPTIONS,
                    );
                case tk.n.GUILD_PREMIUM_PROGRESS_BAR:
                    let l = e.getRows();
                    return (0, r.jsx)(tl, { guild: i, withMargin: l.length > 1 }, tk.n.GUILD_PREMIUM_PROGRESS_BAR);
                case tk.n.GUILD_SPACE:
                    return (0, r.jsx)(ev, { guild: i, selected: s === en.VV.GUILD_SPACE }, tk.n.GUILD_SPACE);
                case tk.n.GUILD_HOME:
                    return (0, r.jsx)(it, { guild: i, selected: s === en.VV.GUILD_HOME }, tk.n.GUILD_HOME);
                case tk.n.GUILD_SCHEDULED_EVENTS:
                    return (0, r.jsx)(
                        sK,
                        { guild: i, selected: s === tk.n.GUILD_SCHEDULED_EVENTS },
                        tk.n.GUILD_SCHEDULED_EVENTS,
                    );
                case tk.n.GUILD_ROLE_SUBSCRIPTIONS:
                    return (0, r.jsx)(
                        iC,
                        { guild: i, selected: s === en.VV.ROLE_SUBSCRIPTIONS },
                        tk.n.GUILD_ROLE_SUBSCRIPTIONS,
                    );
                case tk.n.GUILD_SHOP:
                    return (0, r.jsx)(iR, { guild: i, selected: s === en.VV.GUILD_SHOP }, tk.n.GUILD_SHOP);
                case tk.n.GUILD_GAME_SHOP:
                    return (0, r.jsx)(n3, { guild: i, selected: s === en.VV.GAME_SHOP }, tk.n.GUILD_GAME_SHOP);
                case tk.n.GUILD_CONJURE:
                    return (0, r.jsx)(nx, { guild: i, selected: s === en.VV.CONJURE }, tk.n.GUILD_CONJURE);
                case tk.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
                    return (0, r.jsx)(io, { guild: i });
                case tk.n.GUILD_ONBOARDING_SETUP_PROGRESS:
                    return (0, r.jsx)(iA, { guild: i }, tk.n.GUILD_ONBOARDING_SETUP_PROGRESS);
                case tk.n.CHANNELS_AND_ROLES:
                    return (0, r.jsx)(
                        n8,
                        { guild: i, selected: s === en.VV.CHANNEL_BROWSER || s === en.VV.CUSTOMIZE_COMMUNITY },
                        tk.n.CHANNELS_AND_ROLES,
                    );
                case tk.n.GUILD_DIRECTORY:
                    return (0, r.jsx)(
                        nw,
                        { guild: i, selectedChannelId: s, disableManageChannels: h },
                        tk.n.GUILD_DIRECTORY,
                    );
                case tk.n.GUILD_MOD_DASH_MEMBER_SAFETY:
                    return (0, r.jsx)(
                        ex,
                        { guild: i, selected: s === en.VV.MEMBER_SAFETY },
                        tk.n.GUILD_MOD_DASH_MEMBER_SAFETY,
                    );
                case tk.n.GUILD_BOOSTS:
                    return (0, r.jsx)(eZ, { guildId: i.id, selected: s === en.VV.GUILD_BOOSTS }, tk.n.GUILD_BOOSTS);
                case tk.n.GAME_SERVERS:
                    return (0, r.jsx)(eh, { guildId: i.id, selected: s === en.VV.GAME_SERVERS }, tk.n.GAME_SERVERS);
                case tk.n.GAME_SERVERS_EMPTY:
                    return (0, r.jsx)(
                        eo,
                        { guildId: i.id, selected: s === en.VV.GAME_SERVERS },
                        tk.n.GAME_SERVERS_EMPTY,
                    );
                case tk.n.GUILD_OFFICIAL_MESSAGES:
                    return (0, r.jsx)(
                        ic,
                        { guild: i, selected: s === en.VV.GUILD_OFFICIAL_MESSAGES },
                        tk.n.GUILD_OFFICIAL_MESSAGES,
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
                            (0, r.jsx)(sg, {
                                channel: x,
                                guild: i,
                                position: C.position,
                                selected: s === C.id,
                                muted: C.isMuted,
                                subtitle: C.subtitle,
                                disableManageChannels: h,
                                canBeNewChannel: m && t === c.recentsSectionNumber,
                                isFavoriteCategory: E,
                                isSuggestedSection: t === c.recentsSectionNumber,
                            }),
                            C.threadCount > 0
                                ? (0, r.jsx)(i0, {
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
                    lP,
                    {
                        channel: x,
                        guild: i,
                        position: C.position,
                        selected: s === C.id,
                        connected: d === C.id,
                        collapsed: C.isCollapsed || p.isCollapsed,
                        voiceStates: u[C.id] ?? [],
                        speakerVoiceStates: g[C.id] ?? [],
                        disableManageChannels: h,
                        isFavoriteCategory: E,
                        isSuggestedSection: t === c.recentsSectionNumber,
                    },
                    N,
                );
            case H.rbe.GUILD_VOICE:
                return (0, r.jsx)(
                    ru,
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
                return (0, r.jsx)(lH, { channel: x, guild: i, position: C.position, selected: s === C.id }, N);
            case H.rbe.GUILD_CATEGORY:
                if (t !== c.voiceChannelsSectionNumber) return null;
                return (0, r.jsx)(ne, { channel: x }, `readonly-${x.id}`);
            case H.rbe.PUBLIC_THREAD:
            case H.rbe.PRIVATE_THREAD:
            case H.rbe.ANNOUNCEMENT_THREAD:
                return (0, r.jsx)(
                    sg,
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
            nh,
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
                let { hasDivider: i, canHaveVoiceSummary: l } = nc(t, n, e);
                return `section-footer-${e}${i ? "-divider" : ""}${l ? "-voice-summary" : ""}`;
            })(t, n, o),
        );
    };
    renderTopUnread() {
        let { topMention: e, bottomUnread: t, bottomMention: n, isUnreadVisible: i } = this.state,
            { guildId: l, guildChannels: s, guildChannelsVersion: a } = this.props;
        return (0, r.jsx)("div", {
            className: nl.Eo,
            children: (0, r.jsx)(sB, {
                ref: this.unreadTopRef,
                textUnread: es.intl.string(es.t.FCRiT3),
                textMention: es.intl.string(es.t["8zH0LJ"]),
                hide: null == e && (i || null != t || null != n),
                className: nl.Vq,
                barClassName: nl.bu,
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
        return (0, r.jsx)(sB, {
            reverse: !0,
            ref: this.unreadBottomRef,
            textUnread: es.intl.string(es.t.FCRiT3),
            textMention: es.intl.string(es.t["8zH0LJ"]),
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
        (0, T.ai)(n) && (l["data-favorites"] = !0);
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
                        innerAriaLabel: es.intl.string(es.t.OGiMXJ),
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
        if (null == t) return void tm.X8("voice-conversations");
        let n = this._list;
        if (null != n)
            for (let { section: e, row: i } of this.getSectionRowsFromChannel(t.id))
                n.isItemVisible(e, i) || tm.X8("voice-conversations");
    };
    render() {
        let { guildChannels: e, guildChannelsVersion: t, showNewUnreadsBar: n } = this.props;
        return (0, r.jsx)(W.V0, {
            children: (i) =>
                (0, r.jsx)(p.F, {
                    component: (0, r.jsx)(C.A, {
                        children: (0, r.jsx)(p.H, { id: i, children: es.intl.string(es.t.OGiMXJ) }),
                    }),
                    children: n
                        ? (0, r.jsxs)(a.Fragment, {
                              children: [
                                  (0, r.jsx)("div", {
                                      className: nl.Eo,
                                      children: (0, r.jsx)(sP, {
                                          position: "top",
                                          guildChannels: e,
                                          guildChannelsVersion: t,
                                          jumpToVoiceChannels: this.jumpToVoiceChannels,
                                          jumpToChannel: this.jumpToChannel,
                                      }),
                                  }),
                                  this.renderList(),
                                  (0, r.jsx)(sP, {
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
let rm = (e) => {
    let { guildId: t, selectedChannelId: n, selectedVoiceChannelId: i } = e,
        l = (0, h.bG)([F.Ay], () => F.Ay.keyboardModeEnabled),
        { analyticsLocations: s } = (0, z.Ay)(K.A.GUILD_CHANNEL_LIST),
        o = (0, h.bG)([U.A], () => U.A.getChannel(n)),
        d = (0, h.bG)([U.A], () => U.A.getChannel(i)),
        g = (0, h.bG)([V.A], () => V.A.getGuildId()),
        m = (0, eU.jN)(t),
        A = a.useRef(null),
        f = a.useCallback((e, t) => {
            let n = A.current;
            null != n &&
                (H.Ut1.test(t) || (0, en.jq)(t)
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
            [tu.A, U.A, tr.A],
            () => {
                let t;
                return [
                    (t = (0, T.ai)(e)
                        ? tc.default
                              .keys(tr.A.getFavoriteChannels())
                              .map((e) => U.A.getChannel(e))
                              .filter(to.Vq)
                              .filter((e) => e.isGuildStageVoice())
                        : tu.A.getChannels(e)).reduce((e, t) => {
                        let n = tu.A.getMutableParticipants(t.id, th.ip.SPEAKER);
                        return ((e[t.id] = n.filter((e) => e.type === th.wY.VOICE).map(tg)), e);
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
    return (0, r.jsx)(z.f5, {
        value: s,
        children: (0, r.jsx)(N.A, {
            section: H.JJy.GUILD_CHANNEL_LIST,
            children: (0, r.jsxs)(c.hD, {
                navigator: E,
                children: [
                    (0, r.jsx)(tf.q, { containerRef: E.containerProps.ref, itemType: k }),
                    (0, r.jsx)(rg, {
                        ...e,
                        listNavigator: E,
                        ref: A,
                        selectedChannel: o,
                        selectedVoiceChannel: d,
                        stageChannelSpeakerVoiceStates: _,
                        selectedGuildId: g,
                        optInEnabled: m,
                    }),
                ],
            }),
        }),
    });
};
function rA(e) {
    let t = (function (e) {
            var t;
            let n,
                i,
                l =
                    ((t = e.id),
                    (n = (0, tP.A)(t)),
                    (i = (0, tV.Ay)(t)),
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
                s = (0, tv.W)(e.id),
                r = (0, tO.vz)(e.id),
                a = (0, tb.r)(e),
                o = (0, tH.jz)(e),
                d = (0, tM.d)(e.id),
                c = (0, tS.bG)([ty.h], () => ty.h.getNewMemberActions(e.id), [e.id]),
                u = (0, tI.Q9)(e, "useGuildActionRows"),
                g = (0, tD.A)(e.id),
                m = (0, tT.jY)(e.id),
                A = (0, tU.A)(e.id),
                { showSetupProgressRow: f } = (0, tL.D)(`useGuildActionRows${A ? "" : "-DISABLED"}`),
                p = (0, tR.fw)(e.id),
                C = (0, eb.Uq)(e.id, "useGuildActionRows"),
                E = [],
                x = e.features.has(H.GuildFeatures.HUB),
                N = e.features.has(H.GuildFeatures.COMMUNITY),
                _ = e.features.has(H.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
                S = (0, e4.A)(e.id),
                I = te(e),
                b = (0, tw.bW)(e.id, "useGuildActionRows"),
                G = (0, tG.C$)(e.id, "useGuildActionRows"),
                j = e.features.has(H.GuildFeatures.GAME_SERVERS),
                v = (0, tj.N)("useGuildActionRows"),
                [R] = (0, Q.kn)(G && v && !j ? [Y.M.EMPTY_GAME_SERVER_TAB] : [], { bypassAutoDismiss: !0 });
            return (
                x && E.push(tk.n.GUILD_HUB_HEADER_OPTIONS),
                A && f
                    ? E.push(tk.n.GUILD_ONBOARDING_SETUP_PROGRESS)
                    : !m && d && g && null != c && c.length > 0
                      ? E.push(tk.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR)
                      : e.premiumProgressBarEnabled && I > 0 && E.push(tk.n.GUILD_PREMIUM_PROGRESS_BAR),
                !x && d && E.push(tk.n.GUILD_HOME),
                C && E.push(tk.n.GUILD_SPACE),
                l && E.push(tk.n.GUILD_SCHEDULED_EVENTS),
                !x && N && E.push(tk.n.CHANNELS_AND_ROLES),
                r && E.push(tk.n.GUILD_ROLE_SUBSCRIPTIONS),
                a && E.push(tk.n.GUILD_SHOP),
                o && E.push(tk.n.GUILD_GAME_SHOP),
                ((p && (N || _)) || (s && e.features.has(H.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL))) &&
                    E.push(tk.n.GUILD_MOD_DASH_MEMBER_SAFETY),
                S && E.push(tk.n.GUILD_BOOSTS),
                b && E.push(tk.n.GUILD_OFFICIAL_MESSAGES),
                G && (j ? E.push(tk.n.GAME_SERVERS) : null != R && E.push(tk.n.GAME_SERVERS_EMPTY)),
                u && E.push(tk.n.GUILD_CONJURE),
                E
            );
        })(e.guild),
        n = (0, h.cf)([tN.A], () => tN.A.getGuild(e.guildId, { guildActionRows: t })),
        { density: i } = (0, E.wR)();
    return (0, r.jsx)(rm, { ...e, ...n, density: i });
}
