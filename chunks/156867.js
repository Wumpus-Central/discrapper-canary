n.d(t, { B: () => s8, T: () => s4 }), n(321073);
var l,
    i,
    s = n(627968),
    r = n(64700),
    a = n(735438),
    o = n.n(a),
    d = n(837381),
    c = n(887129),
    u = n(17928),
    h = n(661531),
    A = n(715828),
    g = n(312138),
    m = n(475825),
    f = n(707554),
    p = n(140735),
    C = n(38021),
    E = n(331322),
    x = n(534514),
    N = n(834730),
    _ = n(276293),
    S = n(983851),
    I = n(534890),
    b = n(951001),
    G = n(820284),
    R = n(775602),
    v = n(793574),
    j = n(688810),
    y = n(915089),
    M = n(5180),
    T = n(554146),
    L = n(177953),
    U = n(812993),
    D = n(533550),
    O = n(624458),
    P = n(844944),
    V = n(513461),
    w = n(663997),
    H = n(652793),
    B = n(576705),
    k = n(221950),
    F = n(652215),
    K = n(375708);
function z(e) {
    let { guild: t, selected: n } = e,
        l = (0, u.bG)([B.A], () => B.A.can(F.xBc.KICK_MEMBERS, t)),
        i = (0, u.bG)([P.A], () => P.A.getSubmittedGuildJoinRequestTotal(t.id)),
        a = l ? (i ?? 0) : 0;
    r.useEffect(() => {
        l &&
            t.features.has(F.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
            t.features.has(F.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
            O.A.fetchGuildJoinRequests({ guildId: t.id, status: V.B5.SUBMITTED, limit: w.L });
    }, [l, t]);
    let o = r.useCallback(() => {
            (0, k.aZ)(t.id);
        }, [t.id]),
        d = (0, D.q8)(t.id, T.M.MEMBERS_LAUNCH_UPSELL);
    return (0, s.jsx)("div", {
        ref: d,
        children: (0, s.jsx)(H.G, {
            id: `members-${t.id}`,
            renderIcon: (e) => (0, s.jsx)(L.n, { size: "md", color: "currentColor", className: e }),
            text: K.intl.string(K.t.oclz3Z),
            selected: n,
            onClick: o,
            trailing: a > 0 ? (0, s.jsx)(U.hV, { count: a }) : null,
        }),
    });
}
var W = n(581007),
    Y = n(522435),
    q = n(285406),
    X = n(582904),
    Z = n(419534),
    J = n(395504),
    $ = n(192308),
    Q = n(990078),
    ee = n(939249),
    et = n(789645),
    en = n(687966),
    el = n(131607),
    ei = n(976860),
    es = n(746080),
    er = n(49999),
    ea = n(576709),
    eo = n(494352),
    ed = n(907305);
let ec = r.memo(function (e) {
    let { guildId: t, selected: l } = e,
        [i, a] = (0, el.ww)([T.M.GAME_SERVER_HOSTING_NEW_BADGE], t),
        o = i === T.M.GAME_SERVER_HOSTING_NEW_BADGE,
        d = r.useCallback(() => {
            a(er.i.USER_DISMISS), (0, ei.pX)(F.BVt.CHANNEL(t, es.VV.GAME_SERVERS));
        }, [t, a]),
        c = r.useCallback(
            (e) => {
                e.stopPropagation(),
                    (0, $.openModalLazy)(async () => {
                        let { default: e } = await n.e("2872").then(n.bind(n, 128459));
                        return (n) => (0, s.jsx)(e, { ...n, guildId: t });
                    });
            },
            [t],
        ),
        u = (0, s.jsxs)("div", {
            className: eo.c,
            children: [
                (0, s.jsx)("div", {
                    className: ed.Xs,
                    children: (0, s.jsx)(Q.m, {
                        text: K.intl.string(K.t.fgq1gs),
                        position: "top",
                        children: (0, s.jsx)(ee.D, {
                            onClick: c,
                            "aria-label": K.intl.string(K.t.fgq1gs),
                            children: (0, s.jsx)(et.P, { size: "xs", color: "currentColor", className: ed.gE }),
                        }),
                    }),
                }),
                o &&
                    (0, s.jsx)("div", {
                        className: ed.yW,
                        children: (0, s.jsx)(U.Lp, {
                            disableColor: !0,
                            text: K.intl.string(K.t.y2b7CA),
                            className: eo.q,
                        }),
                    }),
            ],
        });
    return (0, s.jsx)(H.G, {
        className: ed.Ki,
        id: `game-server-empty-${t}`,
        renderIcon: (e) => (0, s.jsx)(en._, { size: "md", className: e, color: "currentColor" }),
        text: K.intl.string(ea.default.vCzwM7),
        selected: l,
        onClick: d,
        trailing: u,
    });
});
var eu = n(361158),
    eh = n(186111),
    eA = n(696943),
    eg = n(881190);
let em = r.memo(function (e) {
    let { guildId: t, selected: n } = e,
        l = (0, $.useHasAnyModalOpen)(),
        i = (0, u.bG)([eh.A], () => eh.A.hasLayers()),
        a = (0, eu.xr)((e) => e.fullScreenLayers.length > 0),
        [o, d] = (0, el.ww)([T.M.GAME_SERVER_HOSTING_NEW_BADGE], t),
        c = o === T.M.GAME_SERVER_HOSTING_NEW_BADGE,
        [h, A] = (0, el.ww)(l || i || a || !c ? [] : [T.M.GAME_SERVER_HOSTING_NEW_COACHMARK], t),
        g = r.useCallback(
            (e) => {
                d(e), A(e);
            },
            [d, A],
        ),
        m = r.useCallback(() => {
            g(er.i.USER_DISMISS), (0, ei.pX)(F.BVt.CHANNEL(t, es.VV.GAME_SERVERS));
        }, [t, g]),
        f = r.useRef(null),
        p = h === T.M.GAME_SERVER_HOSTING_NEW_COACHMARK,
        C = r.useCallback(() => (0, s.jsx)(eA.mn, { channelRowRef: f, guildId: t, markAsDismissed: g }), [t, g]);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(H.G, {
                ref: f,
                id: `game-server-${t}`,
                renderIcon: (e) => (0, s.jsx)(en._, { size: "md", className: e, color: "currentColor" }),
                text: K.intl.string(ea.default.vCzwM7),
                selected: n,
                onClick: m,
                trailing: c
                    ? (0, s.jsx)(U.Lp, { disableColor: !0, text: K.intl.string(K.t.y2b7CA), className: eg.q })
                    : null,
            }),
            p && C(),
        ],
    });
});
var ef = n(503698),
    ep = n.n(ef),
    eC = n(695366),
    eE = n(104510),
    ex = n(544048),
    eN = n(868652),
    e_ = n(379229),
    eS = n(482487),
    eI = n(289007),
    eb = n(828162),
    eG = n(853513),
    eR = n(738247);
function ev(e) {
    let { indicator: t } = e;
    if (null == t) return null;
    switch (t.type) {
        case e_.cD.WARNING:
            return (0, s.jsx)(eC.E, { color: h.A.colors.STATUS_WARNING, size: "sm" });
        case e_.cD.UNREAD:
            return (0, s.jsx)(U.hV, { count: t.count, color: h.A.colors.BACKGROUND_MOD_STRONG.css });
        default:
            return null;
    }
}
let ej = { animation: { BEG: 0, END: 75 }, LOOP: { BEG: 76, END: 376 } },
    ey = r.memo(function (e) {
        let { guildId: t, selected: l } = e,
            i = (0, eI.Ay)(t),
            { showNewBadgeOnRow: a, dismissNewBadgeIfShown: o } = (0, eS.A)(
                t,
                i?.indicator != null || i?.popout != null,
            ),
            d = r.useCallback(() => {
                o(),
                    (0, eN.Zm)(t),
                    (0, eb.A)(t, v.A.GUILD_POWERUPS_CHANNEL_LIST_ROW),
                    i?.popout?.markAsDismissed(er.i.INDIRECT_ACTION);
            }, [t, o, i]),
            c = r.useRef(null),
            A = (0, $.useModalsStore)($.hasAnyModalOpenSelector),
            g = (0, u.bG)([eh.A], () => eh.A.hasLayers()),
            m = (0, eu.xr)((e) => e.fullScreenLayers.length > 0),
            f = A || g || m,
            p = r.useCallback(() => {
                if (i?.popout == null || f) return null;
                switch (i?.popout?.type) {
                    case e_.o.LEVEL_REACHED:
                        return (0, s.jsx)(eA.HW, { guildId: t, channelRowRef: c, ...i.popout });
                    case e_.o.PERKS_AVAILABLE:
                        return (0, s.jsx)(eA.UB, { guildId: t, channelRowRef: c, ...i.popout });
                    case e_.o.PERKS_PURCHASABLE:
                        return (0, s.jsx)(eA.lw, { guildId: t, channelRowRef: c, ...i.popout });
                    case e_.o.NEW_PERK_AVAILABLE:
                        return (0, s.jsx)(eA.bo, { guildId: t, channelRowRef: c, ...i.popout });
                    case e_.o.BOOST_TO_UNLOCK:
                        return (0, s.jsx)(eA.Gw, { guildId: t, channelRowRef: c, ...i.popout });
                    case e_.o.EXPIRING_PERK:
                        return (0, s.jsx)(eA.Mr, { guildId: t, channelRowRef: c, ...i.popout });
                    case e_.o.GAME_SERVER_HOSTING_AVAILABLE:
                    case e_.o.GAME_SERVER_HOSTING_GUILD_ELIGIBLE:
                        return (0, s.jsx)(eA.jz, { guildId: t, channelRowRef: c, ...i.popout });
                    case e_.o.GAME_SERVER_NEW_GAMES:
                        return (0, s.jsx)(eA.YX, { guildId: t, channelRowRef: c, ...i.popout });
                    case e_.o.GAME_SERVER_PRICING_CHANGE:
                        return (0, s.jsx)(eA.Ns, { guildId: t, channelRowRef: c, ...i.popout });
                    default:
                        return (0, s.jsx)("div", {});
                }
            }, [t, i?.popout, c, f]),
            [C, E] = r.useState(null);
        r.useEffect(() => {
            i?.popout == null && E(null);
        }, [i?.popout]);
        let x = r.useCallback((e) => {
            E(e);
        }, []);
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(H.G, {
                    ref: c,
                    className: eR.kL,
                    id: `skill-trees-${t}`,
                    renderIcon: (e) => (0, s.jsx)(eE._, { size: "md", className: e, color: "currentColor" }),
                    background:
                        i?.popout != null &&
                        (0, s.jsx)("div", {
                            className: eR.Fi,
                            children: (0, s.jsx)(ex.t, {
                                nextScene: null == C ? "animation" : "LOOP",
                                className: eR.UU,
                                sceneSegments: ej,
                                importData: () => n.e("67807").then(n.t.bind(n, 217762, 19)),
                                onScenePlay: x,
                                rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
                            }),
                        }),
                    text: (0, s.jsx)("span", {
                        className: ep()({ [eR.A7]: i?.showUnread === !0 }),
                        children: K.intl.string(eG.default.yv3DJJ),
                    }),
                    selected: l,
                    onClick: d,
                    showUnread: i?.showUnread === !0,
                    trailing: a
                        ? (0, s.jsx)(U.Lp, { text: K.intl.string(K.t.y2b7CA), color: h.A.colors.BACKGROUND_BRAND.css })
                        : (0, s.jsx)(ev, { indicator: i?.indicator }),
                }),
                p(),
            ],
        });
    });
var eM = n(580929),
    eT = n(717421),
    eL = n(442433),
    eU = n(230135),
    eD = n(228366);
let eO = {};
class eP extends u.Ay.PersistedStore {
    static displayName = "GuildBoostingProgressBarPersistedStore";
    static persistKey = "PremiumGuildProgressBarPersistedStore";
    initialize(e) {
        null != e && (eO = e);
    }
    getState() {
        return eO;
    }
    getCountForGuild(e) {
        return eO[e];
    }
}
let eV = new eP(eD.h, {
    APPLIED_GUILD_BOOST_COUNT_UPDATE: function (e) {
        let { guildId: t, premiumCount: n } = e;
        eO = { ...eO, [t]: n };
    },
    APPLIED_GUILD_BOOST_COUNT_RESET: function () {
        eO = {};
    },
});
var ew = n(147925),
    eH = n(363487),
    eB = n(568065);
function ek(e) {
    return (0, r.useMemo)(() => {
        if (null == e) return 0;
        let t = e?.features.has(F.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) === !0 ? 0 : F.M2T[F.TVA.TIER_3],
            n = Object.values(eB.sy),
            l = Object.values(eB.YV);
        return (
            n.concat(l).forEach((n) => {
                null == n.includedInLevel && (n.isEnabled?.(e.id) ?? !0) && (t += n.boostPrice);
            }),
            t
        );
    }, [e]);
}
var eF = n(424460);
let eK = r.forwardRef((e, t) => {
    let { appliedBoostCount: n, maxBoostCount: l, premiumSubscriberCount: i, className: a } = e,
        o = n >= l,
        d = Math.min((n / l) * 100, 100),
        c = `calc(${d}% - 4px)`,
        [u, h] = (0, eT.z)(
            () => ({ width: n === i ? c : "calc(0% - 0px)", config: { tension: 250, damping: 5, mass: 1 } }),
            "respect-motion-settings",
            [n, i],
        );
    return (
        r.useEffect(() => {
            h({ width: c });
        }, [c, h]),
        (0, s.jsxs)("div", {
            ref: t,
            className: eF.hQ,
            children: [
                (0, s.jsx)("div", { className: ep()(eF.L$, a) }),
                (0, s.jsx)(eM.animated.div, { className: ep()(eF.qB, { [eF.mu]: d <= 5 }), style: u }),
                (0, s.jsxs)("div", {
                    className: eF.FS,
                    children: [
                        (0, s.jsxs)("div", {
                            className: eF.Ui,
                            children: [
                                (0, s.jsx)(N.E, {
                                    className: eF.Qq,
                                    variant: "text-xs/semibold",
                                    children: K.intl.string(eG.default.NI6Ihe),
                                }),
                                i >= l &&
                                    (0, s.jsx)(N.E, {
                                        className: eF.Qq,
                                        variant: "text-xs/semibold",
                                        children: "\uD83C\uDF89",
                                    }),
                            ],
                        }),
                        (0, s.jsxs)("div", {
                            className: eF.Ui,
                            children: [
                                (0, s.jsx)(N.E, {
                                    className: ep()(eF.Qq, eF.ue),
                                    variant: "text-xs/semibold",
                                    children: o
                                        ? K.intl.formatToPlainString(eG.default["Ehpq+7"], { appliedBoostCount: n })
                                        : K.intl.formatToPlainString(eG.default["/rbPDs"], {
                                              appliedBoostCount: n,
                                              maxBoostCount: l,
                                          }),
                                }),
                                (0, s.jsx)(ew.A, {
                                    width: 12,
                                    height: 12,
                                    direction: ew.A.Directions.RIGHT,
                                    className: ep()(eF.Qq, eF.ue),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
function ez(e) {
    let { guild: t, withMargin: l } = e,
        i = ek(t),
        a = (0, eH.A)(t.id),
        o = r.useCallback(() => {
            (0, eb.A)(t.id, v.A.GUILD_BOOSTING_SIDEBAR_DISPLAY);
        }, [t.id]),
        d = (0, u.bG)([eV], () => eV.getCountForGuild(t.id) ?? 0);
    r.useEffect(() => {
        d !== t.premiumSubscriberCount && (0, eU.u)(t.id, t.premiumSubscriberCount);
    }, [t.id, d, t.premiumSubscriberCount]);
    let c = r.useCallback(
        (e) => {
            a &&
                (0, eL.L3)(e, async () => {
                    let { default: e } = await n.e("71728").then(n.bind(n, 709843));
                    return (n) => (0, s.jsx)(e, { ...n, guild: t });
                });
        },
        [a, t],
    );
    return (0, s.jsx)(ee.D, {
        "aria-label": void 0,
        role: "button",
        focusProps: { offset: { left: 10, right: 4 } },
        onClick: o,
        className: ep()(eF.kL, { [eF.aF]: l }),
        onContextMenu: c,
        children: (0, s.jsx)(eK, {
            appliedBoostCount: d,
            maxBoostCount: i,
            premiumSubscriberCount: t.premiumSubscriberCount,
        }),
    });
}
function eW(e) {
    let { guild: t, withMargin: n } = e;
    return (0, s.jsx)(ez, { guild: t, withMargin: n });
}
eK.displayName = "GuildPowerupsProgressBarUI";
var eY = n(455234),
    eq = n(181079),
    eX = n(734057),
    eZ = n(607567),
    eJ = n(403362),
    e$ = n(996439),
    eQ = n(935208),
    e0 = n(63995),
    e1 = n(518769);
function e3(e) {
    let { voiceState: t, userNick: n, user: l } = e,
        i = (0, eZ.hz)(t, n);
    return { user: l, voiceState: t, nick: n, comparator: i };
}
var e2 = n(787541),
    e9 = n(79858),
    e5 = n(95701),
    e7 = n(72314),
    e6 = n(808728),
    e4 = n(967198),
    e8 = n(297469),
    te = n(960755),
    tt = n(866842),
    tn = n(633965),
    tl = n(702841),
    ti = n(41200),
    ts = n(496767),
    tr = n(134413),
    ta = n(701785),
    to = n(101611),
    td = n(473529),
    tc = n(978165),
    tu = n(960253),
    th = n(71393),
    tA = n(770666),
    tg = n(508654),
    tm = n(521427),
    tf = n(488803),
    tp = n(969117);
let tC = (0, n(945810).mj)({
    name: "2026-04-mobile-boost-progress-bar",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var tE = n(871123),
    tx = n(281405),
    tN = n(3026),
    t_ = n(821609),
    tS = n(187322),
    tI = n(847374),
    tb = n(499373),
    tG = n(285796),
    tR = n(914430),
    tv = n(913247),
    tj = n(639627),
    ty = n(66834),
    tM = n(999903),
    tT = n(544169),
    tL = n(422258),
    tU = n(770376),
    tD = n(924985),
    tO = n(769765),
    tP = n(543465);
n(667532);
var tV = n(111613);
function tw(e, t) {
    return null != e && null != t && (e === t || ((0, e5.tr)(e) && (0, e5.tr)(t)) || ((0, e5.ay)(e) && (0, e5.ay)(t)));
}
function tH(e, t, n, l) {
    let i = -1;
    if (
        (l.find((e, n) => {
            let { channel: l } = e;
            return l.id === t && ((i = n), !0);
        }),
        i < 0)
    )
        return null;
    for (let t = i; t >= 0 && t < l.length; t += e) {
        let e = l[t];
        if (tw(e.channel.type, n)) return e;
    }
    return null;
}
function tB(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (null == e) return 0;
    let l = null;
    return (
        t
            .filter((t) => {
                let {
                    channel: { type: l },
                } = t;
                return null != e && (n || tw(e.type, l));
            })
            .find((t, n) => {
                let {
                    channel: { id: i },
                } = t;
                return null != e && i === e.id && ((l = n), !0);
            }),
        l
    );
}
function tk(e) {
    return { referenceId: e.id, parentId: e.parent_id };
}
function tF(e, t, n, l, i) {
    if (null == e || null == n) return null;
    let { GUILD_CATEGORY: s } = F.rbe;
    if (e.type === s)
        return l === t || (l < t && e.type === n.type)
            ? tk(n)
            : l > t
              ? (function (e, t, n) {
                    let { GUILD_CATEGORY: l } = F.rbe,
                        i = n[(tB(t, n, !0) ?? 0) + 1],
                        s = tH(-1, t.id, e.type, n);
                    return null == s || s.channel.id === e.id
                        ? null
                        : null == i || i.channel.type === l
                          ? { referenceId: s.channel.id, parentId: null }
                          : null;
                })(e, n, i)
              : null;
    if (tw(e.type, n.type)) return tk(n);
    if (l < t) {
        let t, l;
        if (n.type === s) {
            let t = i[(tB(n, i, !0) ?? 0) - 1],
                l = tH(1, n.id, e.type, i);
            if (null == t) return { referenceId: null, parentId: null };
            if (null != l) {
                if (tw(t.channel.type, e.type) || (e.isGuildVocal() && (0, e5.tr)(t.channel.type)))
                    return { referenceId: l.channel.id, parentId: t.channel.parent_id };
                if (t.channel.isCategory()) return { referenceId: l.channel.id, parentId: t.channel.id };
            }
            return null;
        }
        return (
            (t = i[(tB(n, i, !0) ?? 0) - 1]),
            (l = tH(1, n.id, e.type, i)),
            null != t || e.isGuildVocal()
                ? (0, e5.tr)(e.type) && null != l && ((0, e5.tr)(t.channel.type) || t.channel.isCategory())
                    ? { referenceId: l.channel.id, parentId: n.parent_id }
                    : null
                : { referenceId: null != l ? l.channel.id : null, parentId: null }
        );
    }
    if (n.type === s) {
        let t = i[(tB(n, i, !0) ?? 0) + 1],
            l = tH(-1, n.id, e.type, i);
        if (null != l) {
            if (null == t) return { referenceId: l.channel.id, parentId: n.id };
            if (tw(t.channel.type, e.type) || ((0, e5.tr)(e.type) && t.channel.isGuildVocal()))
                return { referenceId: l.channel.id, parentId: t.channel.parent_id };
            if (t.channel.isCategory()) return { referenceId: l.channel.id, parentId: n.id };
        }
        return null;
    }
    let r = i[(tB(n, i, !0) ?? 0) + 1],
        a = tH(-1, n.id, e.type, i);
    if (null == a) return null;
    if (e.isGuildVocal()) {
        if (null == r || r.channel.isCategory()) return { referenceId: a.channel.id, parentId: n.parent_id };
        if (r.channel.isGuildVocal()) return { referenceId: a.channel.id, parentId: r.channel.parent_id };
    }
    return e.isCategory() && (null == r || r.channel.isCategory())
        ? { referenceId: a.channel.id, parentId: null }
        : null;
}
var tK = n(488926);
let tz = "DRAGGABLE_GUILD_CHANNEL";
function tW(e, t) {
    if (null == e || null == t) return null;
    if (!(0, M.ai)(e)) return eX.A.getChannel(t);
    let n = e6.Ay.getChannels(e),
        l =
            n[e6.I6].find((e) => e.channel.id === t) ??
            n[e6.vM].find((e) => e.channel.id === t) ??
            n[F.rbe.GUILD_CATEGORY].find((e) => e.channel.id === t);
    return l?.channel;
}
function tY(e, t) {
    if (null != e.parent_id) {
        let t = eX.A.getChannel(e.parent_id);
        if (null != t) return B.A.can(F.xBc.MANAGE_CHANNELS, t);
    }
    return B.A.can(F.xBc.MANAGE_CHANNELS, t);
}
function tq(e) {
    return (0, tv.T)(
        tz,
        {
            drop(e, t) {
                let n,
                    l = e4.A.getGuildId(),
                    i = t.getItem(),
                    r = tF(tW(l, i.id), i.position, e.channel, e.position, i.channelList);
                if (null == r) return;
                let a = tW(l, i.id);
                if (null == a) return;
                let o = tO.A.getCategories(l),
                    d = th.A.getGuild(l);
                if (null == d) return;
                let c = (function (e, t, n, l) {
                    let i,
                        s,
                        r = [],
                        a = [],
                        o = l._categories,
                        d = (t) => {
                            var n, l;
                            let a;
                            return (
                                (a =
                                    null == i ||
                                    null == s ||
                                    ((n = i),
                                    (l = s),
                                    +(null == n || null == l || null == t[n] || t[n].channel !== e || null == t[l]))
                                        ? [...t]
                                        : tV.Ay.moveItemFromTo(t, i, s)),
                                (r = r.concat(
                                    tV.Ay.calculatePositionDeltas({
                                        oldOrdering: t,
                                        newOrdering: a,
                                        idGetter: (e) => {
                                            let { channel: t } = e;
                                            return t.id;
                                        },
                                        existingPositionGetter: (e) => {
                                            let { channel: t } = e;
                                            return t.position;
                                        },
                                    }),
                                )),
                                a
                            );
                        };
                    if (e.isCategory()) {
                        let n = [...o].slice(1);
                        (i = tB(e, n)), (s = tB(t, n)), (a = d(n)).unshift(o[0]);
                    }
                    if ((0, e5.tr)(e.type) || e.isCategory()) {
                        let n = (0, tM.A)(a.length > 0 ? a : o, l, (e) => {
                            let {
                                channel: { type: t },
                            } = e;
                            return (0, e5.tr)(t);
                        });
                        (i = tB(e, n)), (s = tB(t, n)), d(n);
                    }
                    if (e.isGuildVocal() || e.isCategory()) {
                        let n = (0, tM.A)(a.length > 0 ? a : o, l, (e) => {
                            let { channel: t } = e;
                            return t.isGuildVocal();
                        });
                        (i = tB(e, n)), (s = tB(t, n)), d(n);
                    }
                    return (
                        e.parent_id !== n &&
                            null == r.find((t) => t.id === e.id && ((t.parent_id = n), !0)) &&
                            r.push({ id: e.id, parent_id: n }),
                        r
                    );
                })(a, tW(l, r.referenceId), r.parentId, o);
                if (0 !== c.length) {
                    if ((0, M.ai)(l)) return void (0, tL.zN)(c);
                    if (
                        ((c = c.filter((e) => {
                            let { id: t } = e,
                                n = eX.A.getChannel(t);
                            if (null == n) return !1;
                            let l = eX.A.getChannel(n.parent_id);
                            return n.type === F.rbe.GUILD_CATEGORY || null == l
                                ? B.A.can(F.xBc.MANAGE_CHANNELS, d)
                                : B.A.can(F.xBc.MANAGE_CHANNELS, l);
                        })),
                        a.parent_id !== r.parentId &&
                            c.find((e) => {
                                if (e.id !== a.id) return !1;
                                let t = eX.A.getChannel(e.parent_id);
                                if (!(null != t && B.A.can(F.xBc.MANAGE_ROLES, a) && B.A.can(F.xBc.MANAGE_ROLES, t)))
                                    return !0;
                                let l = tK.r(a, t),
                                    i = tK.r(a, eX.A.getChannel(a.parent_id));
                                return ((null != a.parent_id || l) && (!i || l)) || (n = e), !0;
                            }),
                        null != n)
                    ) {
                        let e = eX.A.getChannel(n.parent_id);
                        null != e &&
                            (0, $.openModal)((t) =>
                                (0, s.jsx)(tT.default, {
                                    ...t,
                                    channel: a,
                                    category: e,
                                    onConfirm: () => {
                                        null != n && ((n.lock_permissions = !0), ty.A.batchChannelUpdate(l, c));
                                    },
                                    onCancel: () => {
                                        null != n && ty.A.batchChannelUpdate(l, c);
                                    },
                                }),
                            );
                    } else ty.A.batchChannelUpdate(l, c);
                }
            },
            canDrop(e, t) {
                let n = t.getItem(),
                    l = eX.A.getChannel(n.id);
                if (null == l) return !1;
                let i = tF(eX.A.getChannel(n.id), n.position, e.channel, e.position, n.channelList);
                if (null == i) return !1;
                if ((0, M.ai)(e4.A.getGuildId())) return !0;
                if (tP.Ay.isFavorite(n.guildId, e.channel.id)) return !1;
                let s = th.A.getGuild(n.guildId);
                if (null == s) return !1;
                let r = eX.A.getChannel(i.parentId),
                    a = eX.A.getChannel(l.parent_id),
                    o = B.A.can(F.xBc.MANAGE_CHANNELS, s),
                    d = null != a ? B.A.can(F.xBc.MANAGE_CHANNELS, a) : o,
                    c = null != r ? B.A.can(F.xBc.MANAGE_CHANNELS, r) : o;
                return d && c;
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
        (0, tj.I)(
            tz,
            {
                canDrag(e) {
                    let { channel: t } = e;
                    if ((0, M.ai)(e4.A.getGuildId())) return !0;
                    let l = th.A.getGuild(t.getGuildId());
                    return (
                        null != l &&
                        ((0, J.WW)(l.id) && tY(t, l)
                            ? ((0, tU.A)() &&
                                  (0, $.openModalLazy)(async () => {
                                      let { default: e } = await Promise.all([n.e("57729"), n.e("24848")]).then(
                                          n.bind(n, 354643),
                                      );
                                      return (t) => (0, s.jsx)(e, { ...t });
                                  }),
                              !1)
                            : tP.Ay.isFavorite(l.id, t.id) && tY(t, l)
                              ? ((0, $.openModalLazy)(async () => {
                                    let { default: e } = await n.e("80545").then(n.bind(n, 933752));
                                    return (n) => (0, s.jsx)(e, { ...n, guildId: l.id, channelId: t.id });
                                }),
                                !1)
                              : tY(t, l))
                    );
                },
                beginDrag(e) {
                    let {
                            channel: { id: t, parent_id: n, guild_id: l, type: i },
                            position: s,
                        } = e,
                        r = e4.A.getGuildId(),
                        a = tO.A.getCategories(r);
                    return {
                        isChannelDrag: !0,
                        id: t,
                        position: s,
                        parentId: n,
                        type: i,
                        channelList: (0, tM.A)(a._categories, a, (e) => {
                            let { channel: t } = e;
                            return t.type === F.rbe.GUILD_CATEGORY && null != a[t.id] && 0 === a[t.id].length
                                ? !!(0, M.ai)(r) ||
                                      (B.A.can(F.xBc.MANAGE_CHANNELS, t) && B.A.can(F.xBc.VIEW_CHANNEL, t))
                                : !tD.A.isCollapsed(t.parent_id);
                        }),
                        guildId: l,
                    };
                },
            },
            (e) => ({ connectChannelDragSource: e.dragSource(), connectDragPreview: e.dragPreview() }),
        )(e),
    );
}
var tX = n(47167),
    tZ = n(485947),
    tJ = n(551851),
    t$ = n(546980);
function tQ(e) {
    e.stopPropagation();
}
let t0 = tq(
        r.memo(function (e) {
            let t,
                {
                    channel: l,
                    connectChannelDragSource: i,
                    connectChannelDropTarget: a,
                    disableManageChannels: o,
                    position: c,
                    sortingPosition: h,
                    hideIcon: A,
                    children: g,
                } = e,
                m = (0, u.bG)([tP.Ay], () => tP.Ay.isChannelMuted(l.getGuildId(), l.id)),
                f = (0, u.bG)([tD.A], () => tD.A.isCollapsed(l.id)),
                p = (0, u.bG)([B.A], () => B.A.can(F.xBc.MANAGE_CHANNELS, l)),
                C = (0, tX.Ay)(l);
            t = null != h ? (c > h ? t$.mU : t$.TR) : t$.fx;
            let E = r.useCallback(() => {
                    f ? (0, tR.fh)(l.id) : (0, tR.Gv)(l.id);
                }, [l.id, f]),
                x = r.useCallback(
                    (e) => {
                        if ("null" !== l.id) {
                            let t = th.A.getGuild(l.getGuildId());
                            null != t &&
                                (0, eL.L3)(e, async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("26132"),
                                        n.e("91763"),
                                        n.e("38730"),
                                        n.e("35321"),
                                        n.e("50033"),
                                        n.e("3998"),
                                        n.e("30997"),
                                        n.e("12255"),
                                        n.e("40959"),
                                        n.e("79995"),
                                        n.e("91377"),
                                        n.e("35723"),
                                        n.e("12520"),
                                        n.e("18733"),
                                    ]).then(n.bind(n, 71132));
                                    return (n) => (0, s.jsx)(e, { ...n, channel: l, guild: t });
                                });
                        }
                    },
                    [l],
                ),
                N = r.useCallback(() => {
                    let e = l.type === F.rbe.GUILD_CATEGORY ? null : l.type,
                        t = l.getGuildId();
                    null != t &&
                        (0, $.openModalLazy)(async () => {
                            let { default: i } = await Promise.all([
                                n.e("79086"),
                                n.e("21293"),
                                n.e("37398"),
                                n.e("11585"),
                                n.e("3589"),
                                n.e("92513"),
                                n.e("89916"),
                                n.e("60773"),
                                n.e("8018"),
                                n.e("20379"),
                                n.e("19193"),
                                n.e("77487"),
                                n.e("7775"),
                                n.e("58608"),
                                n.e("28034"),
                            ]).then(n.bind(n, 333369));
                            return (n) =>
                                (0, s.jsx)(i, {
                                    ...n,
                                    channelType: e,
                                    guildId: t,
                                    categoryId: "null" !== l.id ? l.id : null,
                                });
                        });
                }, [l]),
                { role: _, tabIndex: S, ...I } = (0, d.rm)(l.id),
                b = r.useRef(null),
                G = r.useRef(null),
                R = (0, s.jsxs)("li", {
                    className: t,
                    "data-dnd-name": C,
                    children: [
                        (0, s.jsx)(tS.vN, {
                            focusTarget: b,
                            ringTarget: G,
                            offset: { left: 4, right: 4 },
                            children: (0, s.jsxs)("div", {
                                ref: G,
                                className: ep()(t$.Ki, t$.iE, { [t$.yZ]: f, [t$.SU]: m, [t$.vk]: !0 }),
                                onContextMenu: x,
                                children: [
                                    (0, s.jsxs)(ee.D, {
                                        innerRef: b,
                                        className: t$.rb,
                                        tabIndex: S,
                                        ...I,
                                        onClick: E,
                                        "aria-label": K.intl.formatToPlainString(K.t.y5l3J2, { categoryName: C }),
                                        "aria-expanded": !f,
                                        focusProps: { enabled: !1 },
                                        children: [
                                            (0, s.jsx)(tZ.A, {
                                                className: t$.UU,
                                                children: (0, s.jsx)(tN.A, { children: C }),
                                            }),
                                            A
                                                ? null
                                                : (0, s.jsx)(tI.a, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: t$.Kk,
                                                  }),
                                        ],
                                    }),
                                    (0, s.jsx)("div", {
                                        onClick: tQ,
                                        className: t$.Y_,
                                        children:
                                            p && !o
                                                ? (0, s.jsx)(Q.m, {
                                                      text: K.intl.string(K.t["fUYU+j"]),
                                                      children: (0, s.jsx)(ee.D, {
                                                          className: ep()(t$.c9, t$.ih),
                                                          onClick: N,
                                                          tabIndex: S,
                                                          role: "button",
                                                          "aria-label": K.intl.string(K.t["fUYU+j"]),
                                                          children: (0, s.jsx)(tb.T, {
                                                              size: "xs",
                                                              color: "currentColor",
                                                              className: t$.hs,
                                                          }),
                                                      }),
                                                  })
                                                : null,
                                    }),
                                ],
                            }),
                        }),
                        g,
                    ],
                });
            return null != a && null != i ? a(i(R)) : R;
        }),
    ),
    t1 = r.memo(function (e) {
        let { name: t, onDismiss: n, className: l } = e;
        return (0, s.jsx)("li", {
            className: ep()(l, t$.fx),
            children: (0, s.jsxs)("div", {
                className: ep()(t$.Ki, t$._V),
                children: [
                    (0, s.jsx)("div", {
                        className: t$.rb,
                        children: (0, s.jsx)(tZ.A, { className: t$.UU, children: (0, s.jsx)(tN.A, { children: t }) }),
                    }),
                    null != n
                        ? (0, s.jsx)(Q.m, {
                              asContainer: !0,
                              text: K.intl.string(K.t["5qNmsU"]),
                              children: (0, s.jsx)(ee.D, {
                                  className: t$.r,
                                  onClick: n,
                                  children: (0, s.jsx)(tG.a, { size: "md", color: "currentColor", className: t$.X8 }),
                              }),
                          })
                        : null,
                ],
            }),
        });
    }),
    t3 = r.memo(function (e) {
        let { category: t } = e,
            n = (0, u.bG)([tJ.A], () => tJ.A.isVoiceCategoryCollapsed(t.guild.id)),
            l = r.useCallback(() => {
                var e, l;
                n
                    ? ((e = t.guild.id), eD.h.dispatch({ type: "VOICE_CATEGORY_EXPAND", guildId: e, expand: !0 }))
                    : ((l = t.guild.id), eD.h.dispatch({ type: "VOICE_CATEGORY_COLLAPSE", guildId: l, expand: !1 }));
            }, [t.guild.id, n]);
        return (0, s.jsx)("div", {
            className: t$.oA,
            children: (0, s.jsx)(t_.$, {
                variant: "secondary",
                fullWidth: !0,
                onClick: l,
                icon: S.H,
                text: n ? K.intl.string(K.t["/eB9Bg"]) : K.intl.string(K.t.Q2gPWl),
            }),
        });
    }),
    t2 = r.memo(function (e) {
        let { category: t, channel: n } = e,
            l = (0, u.bG)([tJ.A], () => tJ.A.isVoiceCategoryCollapsed(t.guild.id));
        return l || null == n || n.record.type === F.rbe.GUILD_CATEGORY
            ? l
                ? (0, s.jsx)("li", {
                      className: t$.fx,
                      children: (0, s.jsx)("div", {
                          className: ep()(t$.Ki, t$._V),
                          children: (0, s.jsx)(tZ.A, {
                              className: t$.UU,
                              children: (0, s.jsx)(tN.A, { children: K.intl.string(K.t["V/u9Dy"]) }),
                          }),
                      }),
                  })
                : null
            : (0, s.jsx)("div", { style: { height: 16 } });
    }),
    t9 = r.memo(function (e) {
        let { channel: t } = e,
            n = (0, tX.Ay)(t);
        return (0, s.jsx)("li", {
            className: t$.fx,
            children: (0, s.jsx)("div", {
                className: ep()(t$.Ki, t$._V),
                children: (0, s.jsx)(tZ.A, { className: t$.UU, children: (0, s.jsx)(tN.A, { children: n }) }),
            }),
        });
    });
var t5 = n(728321),
    t7 = n(244083);
let t6 = { origin: { x: -36, y: 7 }, targetWidth: 232, targetHeight: 40, offset: { x: 0, y: 0 } };
var t4 = n(121880);
let t8 = r.memo(function (e) {
    let {
            sectionIndex: t,
            guild: n,
            guildChannels: l,
            guildChannelsVersion: i,
            selectedChannelId: a,
            disableManageChannels: o,
        } = e,
        d = r.useCallback(() => {
            let e = l.getCategoryFromSection(l.recentsSectionNumber);
            if (null == e) return;
            let t = null,
                i = e.getShownChannelAndThreadIds();
            null != a && i.includes(a) && (t = (0, Z.xb)(l)), (0, Z.DD)(n.id, i, t);
        }, [n.id, a, l, i]),
        { density: c } = (0, C.wR)(),
        u = "compact" === c ? 8 : 12;
    switch (t) {
        case e8.PU:
            return (0, s.jsx)("div", { style: { height: u } });
        case e8.bK:
            if (n.features.has(F.GuildFeatures.HUB)) return null;
            return (0, s.jsx)("div", { style: { height: u } });
        case e8.HP:
            return (0, s.jsx)(t1, { name: K.intl.string(K.t.mlPMCy) });
        case l.recentsSectionNumber:
            return (0, s.jsx)(t1, { name: K.intl.string(K.t.gKcrqM), onDismiss: d });
        case l.voiceChannelsSectionNumber: {
            let e = l.getCategoryFromSection(l.voiceChannelsSectionNumber);
            if (null == e || e.isEmpty()) return null;
            let n = l.getChannelFromSectionRow(t, 0)?.channel;
            return (0, s.jsxs)(r.Fragment, {
                children: [(0, s.jsx)("div", { className: t4.ts }), (0, s.jsx)(t2, { category: e, channel: n })],
            });
        }
        case e8.TF: {
            let e = l.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, s.jsx)(t0, {
                channel: e.record,
                position: e.position,
                disableManageChannels: o,
                children: (0, s.jsx)(t5.A, {
                    inlineSpecs: t6,
                    arrowAlignment: t7.oN.TOP,
                    tutorialId: "organize-by-topic",
                    position: "right",
                }),
            });
        }
        default: {
            let e = l.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, s.jsx)(t0, { channel: e.record, position: e.position, disableManageChannels: o });
        }
    }
});
var ne = n(104171),
    nt = n(186369),
    nn = n(970812),
    nl = n(871237),
    ni = n(349828);
function ns(e, t, n) {
    return {
        hasDivider:
            !(function (e, t) {
                if (t === e8.PU) {
                    let t = e.getGuildActionSection().getRows();
                    return (
                        (1 === t.length && t[0] === tx.n.GUILD_PREMIUM_PROGRESS_BAR) ||
                        e.getGuildActionSection().isEmpty()
                    );
                }
                return 0 === e.getSections(!1)[t];
            })(e, n) &&
            (n === e8.PU ||
                (e.id === ni.Vc
                    ? n !== e.getSections(!1).length - 1
                    : n === e8.HP ||
                      (!!t && n !== e8.bK && (n === e.recentsSectionNumber || (e.voiceChannelsSectionNumber, !1))))),
        canHaveVoiceSummary:
            n !== e8.PU &&
            n !== e8.HP &&
            n !== e8.bK &&
            n !== e.recentsSectionNumber &&
            n !== e.voiceChannelsSectionNumber,
    };
}
let nr = r.memo(function (e) {
        let { guildChannels: t, guildChannelsVersion: n } = e,
            l = r.useMemo(() => t.getCategoryFromSection(t.voiceChannelsSectionNumber), [t, n]);
        return null == l ? null : (0, s.jsx)(t3, { category: l });
    }),
    na = r.memo(function (e) {
        let {
                sectionIndex: t,
                guildChannels: n,
                guildChannelsVersion: l,
                voiceStates: i,
                guildId: a,
                selectedChannelId: o,
                selectedVoiceChannelId: d,
                optInEnabled: c,
            } = e,
            { hasDivider: h, canHaveVoiceSummary: A } = r.useMemo(() => ns(n, c, t), [n, c, t, l]),
            g = r.useMemo(() => (t === e8.PU ? null : n.getCategoryFromSection(t)), [n, t, l]),
            m = (0, J.jN)(a),
            { enableWaveformIcon: f } = (0, nt.b)(a, "ChannelListSectionFooter"),
            p = (0, u.yK)([tP.Ay], () => {
                if (null == g || !g.isCollapsed || !A) return [];
                let e = g.getChannelRecords(),
                    t = [];
                for (let n of e) {
                    if (!n.isGuildVocal()) continue;
                    let e = tP.Ay.isChannelOrParentOptedIn(a, n.id);
                    (!m || e) && t.push(n);
                }
                return t;
            }, [g, A, a, m]),
            C = r.useMemo(
                () => (0, nl.fK)({ channels: p, selectedChannelId: o, selectedVoiceChannelId: d, voiceStates: i }),
                [p, o, d, i],
            );
        if (t === n.voiceChannelsSectionNumber) return (0, s.jsx)(nr, { guildChannels: n, guildChannelsVersion: l });
        let E = h ? (0, s.jsx)("div", { className: t4.ts }) : null;
        return A && 0 !== C.length
            ? (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsx)("div", {
                          className: t4.qz,
                          children: (0, s.jsx)(ne.Ay, {
                              renderIcon: !0,
                              users: C,
                              max: 8,
                              showUserPopout: !0,
                              guildId: a,
                              renderLeadingIcon: f
                                  ? (e) => (0, s.jsx)(nn.A, { color: "currentColor", className: ep()(e, ed.Gj) })
                                  : void 0,
                          }),
                      }),
                      E,
                  ],
              })
            : E;
    });
var no = n(625903),
    nd = n(283973),
    nc = n(933832),
    nu = n(435183),
    nh = n(698441),
    nA = n(855687),
    ng = n(816662),
    nm = n(446600),
    nf = n(616356);
function np(e, t, n) {
    return null != t && !!t && !tw(n, e.type);
}
function nC(e, t) {
    return null == t ? ed.fx : e > t ? ed.mU : ed.TR;
}
function nE(e) {
    let { channel: t, disableManageChannels: n, tabIndex: l, forceShowButtons: i, hasChannelInfo: r = !1 } = e;
    return (0, u.bG)(
        [B.A, e4.A],
        () =>
            n ||
            (0, M.ai)(e4.A.getGuildId()) ||
            (!B.A.can(F.xBc.MANAGE_CHANNELS, t) &&
                !B.A.can(F.xBc.MANAGE_ROLES, t) &&
                !B.A.can(F.xBc.MANAGE_WEBHOOKS, t)) ||
            ((0, e5.tr)(t.type) && !B.A.can(F.xBc.VIEW_CHANNEL, t)) ||
            (t.isGuildVocal() && !B.A.can(F.xBc.CONNECT, t)) ||
            !e5.bk.has(t.type) ||
            t.isModeratorReportChannel(),
    )
        ? null
        : (0, s.jsx)(Q.m, {
              asContainer: !0,
              text: K.intl.string(K.t["3gUsJb"]),
              children: (0, s.jsx)(ee.D, {
                  className: ep()(ed.Xs, i ? ed.Tf : void 0, r ? ed.bw : ed.UI),
                  onClick: function () {
                      nu.Ay.open(t.id);
                  },
                  tabIndex: l,
                  "aria-label": K.intl.string(K.t["3gUsJb"]),
                  children: (0, s.jsx)(no.Z, { size: "xs", color: "currentColor", className: ed.gE }),
              }),
          });
}
function nx(e) {
    let {
            channel: t,
            isDefaultChannel: l = !1,
            locked: i,
            tabIndex: a,
            forceShowButtons: o,
            hasChannelInfo: d = !1,
        } = e,
        c = (0, u.bG)([th.A], () => th.A.getGuild(t.getGuildId())),
        h = (0, u.bG)([nm.A], () => nm.A.getStageInstanceByChannel(t.id), [t.id]),
        A = (0, u.bG)([nh.Ay], () => nh.Ay.getActiveEventByChannel(t.id), [t.id]),
        g = (0, u.bG)([B.A], () => (0, nA.K)(B.A, c, t, h)),
        m = (0, u.bG)([], () =>
            t?.type === F.rbe.GUILD_VOICE ? K.intl.string(K.t["EE+P0H"]) : K.intl.string(K.t["0jeAXt"]),
        ),
        f = r.useRef(null);
    if (i || !g || t.isModeratorReportChannel() || t.isThread()) return null;
    let p = (0, s.jsx)(nd.R, { size: "xs", className: ed.gE, "aria-hidden": !0, color: "currentColor" });
    return (
        l &&
            (p = (0, s.jsx)(t5.A, {
                childRef: f,
                tutorialId: "instant-invite",
                position: "left",
                children: (0, s.jsx)("div", { ref: f, children: p }),
            })),
        (0, s.jsx)(Q.m, {
            asContainer: !0,
            text: m,
            children: (0, s.jsx)(ee.D, {
                className: ep()(ed.Xs, o ? ed.Tf : void 0, d ? ed.bw : ed.UI),
                onClick: function () {
                    if (null != c) {
                        let e = nf.A.getAllActiveStreams().filter(
                            (e) => e.state !== F.XYD.ENDED && e.channelId === t.id,
                        );
                        (0, $.openModalLazy)(async () => {
                            let { default: l } = await Promise.all([
                                n.e("92430"),
                                n.e("54453"),
                                n.e("59957"),
                                n.e("28136"),
                                n.e("16084"),
                                n.e("22547"),
                            ]).then(n.bind(n, 1310));
                            return (n) =>
                                (0, s.jsx)(l, {
                                    ...n,
                                    guild: c,
                                    channel: t,
                                    streamUserId: 1 === e.length ? e[0].ownerId : null,
                                    source: F.PE1.GUILD_CHANNELS,
                                    guildScheduledEvent: A,
                                });
                        });
                    }
                },
                tabIndex: a,
                "aria-label": m,
                children: p,
            }),
        })
    );
}
function nN(e) {
    let { channel: t } = e;
    return (0, s.jsx)(Q.m, {
        asContainer: !0,
        text: K.intl.string(K.t["ROh4T+"]),
        children: (0, s.jsx)(ee.D, {
            className: ed.Xs,
            onClick: function () {
                (0, ng.Ol)(t.guild_id, t.id);
            },
            "aria-label": K.intl.string(K.t["ROh4T+"]),
            children: (0, s.jsx)(et.P, { size: "xs", color: "currentColor", className: ed.gE }),
        }),
    });
}
function n_(e) {
    let { channel: t } = e;
    return (0, s.jsx)(Q.m, {
        asContainer: !0,
        text: K.intl.string(K.t["N2c/Un"]),
        children: (0, s.jsx)(ee.D, {
            className: ed.Xs,
            onClick: function () {
                (0, ng.jA)(t.guild_id, t.id, !0, { section: F.JJy.CHANNEL_LIST });
            },
            "aria-label": K.intl.string(K.t["N2c/Un"]),
            children: (0, s.jsx)(nc.A, { size: "xs", color: "currentColor", className: ed.gE }),
        }),
    });
}
class nS extends r.PureComponent {
    static defaultProps = { isDefaultChannel: !1 };
    renderEditButton() {
        return (0, s.jsx)(nE, { ...this.props });
    }
    renderInviteButton() {
        return (0, s.jsx)(nx, { ...this.props });
    }
    renderRemoveSuggestionButton() {
        return (0, s.jsx)(nN, { ...this.props });
    }
    renderAcceptSuggestionButton() {
        return (0, s.jsx)(n_, { ...this.props });
    }
    getClassName() {
        let { position: e, sortingPosition: t } = this.props;
        return nC(e, t);
    }
    isDisabled() {
        let { channel: e, sorting: t, sortingType: n } = this.props;
        return np(e, t, n);
    }
}
var nI = n(166444),
    nb = n(790782);
let nG = tq(function (e) {
    let {
            guild: t,
            selectedChannelId: l,
            position: i,
            disableManageChannels: a,
            sorting: o,
            sortingType: d,
            sortingPosition: c,
            connectChannelDragSource: h,
            connectChannelDropTarget: A,
            tabIndex: g,
        } = e,
        m = (0, u.bG)([eX.A, e6.Ay], () => {
            let e = e6.Ay.getDirectoryChannelIds(t.id);
            return 0 === e.length ? null : eX.A.getChannel(e[0]);
        }),
        f = (0, u.bG)([eX.A], () => eX.A.getChannel(m?.parent_id)),
        p = l === m?.id,
        C = (0, tX.Ay)(m),
        E = (0, u.bG)([B.A], () =>
            null != f ? B.A.can(F.xBc.MANAGE_CHANNELS, f) : null != t && B.A.can(F.xBc.MANAGE_CHANNELS, t),
        ),
        x = r.useCallback(
            (e) => {
                null != m &&
                    (0, eL.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("26132"),
                            n.e("30997"),
                            n.e("79995"),
                            n.e("29559"),
                        ]).then(n.bind(n, 994058));
                        return (t) => (0, s.jsx)(e, { ...t, channel: m });
                    });
            },
            [m],
        );
    if (null == m) return null;
    let N = nC(i, c),
        _ = np(m, o, d),
        S = (0, s.jsx)("div", {
            className: ep()(N, { [ed.r9]: _, [ed.wH]: p }),
            "data-dnd-name": C,
            children: (0, s.jsxs)(nI.Ay, {
                className: ed.Ki,
                channel: m,
                guild: t,
                selected: p,
                onContextMenu: x,
                forceInteractable: !0,
                resolvedUnreadSetting: nb.e.ONLY_MENTIONS,
                children: [
                    (0, s.jsx)(nx, { channel: m, tabIndex: g }),
                    (0, s.jsx)(nE, { channel: m, disableManageChannels: a, tabIndex: g }),
                ],
            }),
        });
    return E && (S = A(h(S))), S;
});
var nR = n(34188),
    nv = n(733391),
    nj = n(832163),
    ny = n(517907),
    nM = n(31969),
    nT = n(44724),
    nL = n(43105),
    nU = n(486318),
    nD = n(469611);
function nO(e) {
    let {
        targetElementRef: t,
        onRender: n,
        onRequestClose: l,
        onActionClick: i,
        onActionMouseDown: a,
        position: o = "right",
        align: d = "top",
        caretConfig: c = { align: "start" },
        graphicSource: u,
        title: h,
        body: A,
        actionLabel: g,
    } = e;
    r.useEffect(() => {
        n?.();
    }, [n]);
    let m = r.useMemo(() => {
        switch (u.type) {
            case "asset":
                return { type: "image", src: u.src, aspectRatio: "6/4" };
            case "sku":
                return (0, nU.e)({
                    imageUrl: u.imageUrl,
                    backgroundImageUrl: u.backgroundImageUrl,
                    altText: K.intl.string(K.t["ulQB+t"]),
                    customClassNames: { containerClassName: nD.z, foregroundImageClassName: nD._ },
                });
        }
    }, [u]);
    return (0, s.jsx)(nL.A, {
        size: "lg",
        shouldShow: !0,
        position: o,
        caretConfig: c,
        gradientColor: "purple",
        alignmentStrategy: "edge",
        align: d,
        badge: { type: "new", variant: "default" },
        onRequestClose: l,
        actions: [{ text: g ?? K.intl.string(K.t.RzWDqY), variant: "primary", onClick: i, onMouseDown: a }],
        targetElementRef: t,
        title: h,
        body: A,
        graphic: m,
    });
}
var nP = n(770178),
    nV = n(206939);
let nw = Math.ceil(Math.sqrt(115200)),
    nH = (nw - 240) / 2,
    nB = r.forwardRef(function (e, t) {
        let { children: n } = e,
            [l, i] = r.useState(-1),
            a = r.useCallback((e) => {
                i(e.contentRect.width);
            }, []),
            o = (0, nP.w)(a, [], { fireOnMount: !0 }),
            [{ shineSpring: d }, c] = (0, eT.z)(() => ({
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
            A = r.useMemo(
                () =>
                    n(
                        (0, s.jsx)(eM.animated.div, {
                            className: nV.q,
                            style: {
                                transform: d.to(
                                    (e) => `translateX(calc(${e * l}px + ${e * nw}px)) translateY(-50%) rotate(45deg)`,
                                ),
                            },
                        }),
                    ),
                [n, l, d],
            );
        return (
            r.useImperativeHandle(t, () => ({ onMouseEnter: u, onMouseLeave: h }), [u, h]),
            (0, s.jsx)("div", {
                className: nV.i,
                onMouseEnter: u,
                onMouseLeave: h,
                onFocus: u,
                onBlur: h,
                ref: o,
                style: { "--custom-shine-dimensions": "240px", "--custom-shine-rotated-dimensions-delta": `${nH}px` },
                children: A,
            })
        );
    });
var nk = n(371794),
    nF = n(998218),
    nK = n(430825),
    nz = n(645591),
    nW = n(377084);
let nY = r.memo(function (e) {
    let { guild: t, selected: l } = e,
        i = r.useRef(null),
        a = r.useRef(null),
        o = (0, $.useHasAnyModalOpen)(),
        d = (0, u.bG)([eh.A], () => eh.A.hasLayers()),
        c = (0, eu.xr)((e) => e.fullScreenLayers.length > 0);
    r.useEffect(() => {
        (0, nv.Kh)(t.id);
    }, [t.id]);
    let A = (0, u.bG)([nj.A], () => nj.A.getAnnouncement(t.id)),
        g = A?.state === "success" ? A.announcement : void 0,
        [m, f] = (0, el.x_)(T.M.GAME_SHOP_NEW_BADGE, t.id, g?.id ?? "", void 0, !0),
        p = m === T.M.GAME_SHOP_NEW_BADGE && null != g,
        C = (0, tE.nY)(t.id),
        E = (0, nM.F)("storefront_badge", { applicationId: C }),
        x = (0, ny.A)({ applicationId: C, location: "game_shop_channel_row" }),
        _ = null;
    p ? (_ = K.intl.string(K.t.y2b7CA)) : x && (_ = K.intl.string(nK.default.hriMCc)), null != E && (_ = E.text);
    let [S, I] = (0, el.x_)(T.M.GAME_SHOP_NEW_DROP_POPOVER, t.id, g?.id ?? ""),
        b = S === T.M.GAME_SHOP_NEW_DROP_POPOVER && null != g;
    r.useEffect(() => {
        l && (p && f(er.i.INDIRECT_ACTION), b && I(er.i.INDIRECT_ACTION));
    }, [f, I, l, p, b]);
    let G = r.useCallback(() => {
            f(er.i.TAKE_ACTION), I(er.i.TAKE_ACTION);
            let e = (0, tE.mq)(t.id),
                n = nj.A.getStorefrontState(e)?.activePage ?? 0;
            (0, ei.pX)(F.BVt.CHANNELS_GAME_SHOP(t.id, n));
        }, [t.id, f, I]),
        R = r.useCallback(() => {
            (0, nT.X)({ guildId: t.id, forceFetch: b });
        }, [t.id, b]),
        v = r.useCallback(() => {
            I(er.i.USER_DISMISS);
        }, [I]),
        j = r.useCallback(
            (e) => {
                null != t &&
                    (0, eL.L3)(e, async () => {
                        let { default: e } = await n.e("99523").then(n.bind(n, 819233));
                        return (n) => (0, s.jsx)(e, { ...n, guild: t });
                    });
            },
            [t],
        ),
        y = r.useCallback(() => {
            i.current?.onMouseEnter(null, 500);
        }, [i]),
        M = r.useCallback(
            (e) =>
                (0, s.jsx)(H.G, {
                    background: (0, s.jsx)("div", { className: nW.D }),
                    innerClassName: nW.Z,
                    ref: a,
                    id: `game-shop-${t.id}`,
                    renderIcon: (e) =>
                        (0, s.jsx)(nR.U, {
                            size: "custom",
                            color: "currentColor",
                            width: 20,
                            height: 20,
                            className: e,
                        }),
                    text: (0, s.jsx)(N.E, {
                        variant: "text-md/medium",
                        className: nz.UU,
                        children: K.intl.string(K.t.vyaWs7),
                    }),
                    selected: l,
                    onMouseDown: R,
                    onClick: G,
                    onContextMenu: j,
                    trailing: (0, s.jsxs)(s.Fragment, {
                        children: [
                            null != _ && (0, s.jsx)(U.Lp, { text: _, color: h.A.colors.BACKGROUND_BRAND.css }),
                            e,
                        ],
                    }),
                }),
            [t.id, l, R, G, j, _],
        ),
        L = r.useMemo(() => {
            if (null == g) return null;
            switch (g.type) {
                case "guild-application-announcement": {
                    let e =
                            null != g.assetId
                                ? nF.A.toURLSafe((0, nk.YE)(g.applicationId, g.assetId, 128, "webp"))
                                : void 0,
                        t =
                            null != g.backgroundImageAssetId
                                ? nF.A.toURLSafe((0, nk.YE)(g.applicationId, g.backgroundImageAssetId, 128, "webp"))
                                : void 0;
                    if (null == e) return null;
                    return {
                        graphicSource: { type: "sku", imageUrl: e, backgroundImageUrl: t },
                        title: K.intl.string(K.t["7PvvS9"]),
                        body: K.intl.formatToPlainString(K.t["9J4h1a"], { applicationName: g.applicationName }),
                    };
                }
                case "guild-discord-announcement":
                    if ("" === g.assetFullyQualifiedURL) return null;
                    return {
                        graphicSource: { type: "asset", src: g.assetFullyQualifiedURL },
                        title: g.popoverTitle,
                        body: g.popoverBody,
                        actionLabel: g.popoverCta,
                    };
                default:
                    return null;
            }
        }, [g]),
        D = r.useCallback(
            () =>
                b && null != L
                    ? (0, s.jsx)(nO, {
                          onActionClick: G,
                          onActionMouseDown: R,
                          onRender: y,
                          onRequestClose: v,
                          targetElementRef: a,
                          ...L,
                      })
                    : null,
            [b, L, G, R, y, v],
        );
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(nB, { ref: i, children: M }), !o && !d && !c && D()] });
});
var nq = n(740426),
    nX = n(826673),
    nZ = n(591552),
    nJ = n(202776),
    n$ = n(454058),
    nQ = n(568548);
function n0(e) {
    let { guild: t, selected: l } = e,
        i = (0, nJ.A)(t),
        a = (0, nX.JZ)(T.M.CHANNEL_BROWSER_NEW_BADGE_NUX),
        o = (0, tl.yK)([n$.A], () =>
            Array.from(n$.A.getNewChannelIds(t.id)).filter((e) => n$.A.shouldIndicateNewChannel(t.id, e)),
        ),
        d = (0, tl.bG)([nQ.Ay], () => nQ.Ay.hasUnread(t.id, nb.P.GUILD_ONBOARDING_QUESTION)),
        c = o.length > e8.rR,
        u = (0, tl.bG)([nZ.A, nQ.Ay], () => {
            let e = nZ.A.lastFetchedAt(t.id),
                n = nQ.Ay.lastMessageId(t.id, nb.P.GUILD_ONBOARDING_QUESTION);
            if (null == n) return !1;
            let l = eQ.default.extractTimestamp(n);
            return null != e && e > l;
        }),
        A = r.useCallback(() => {
            (0, ei.pX)(F.BVt.CHANNEL(t.id, i ? es.VV.CUSTOMIZE_COMMUNITY : es.VV.CHANNEL_BROWSER));
        }, [t.id, i]),
        g = r.useCallback(
            (e) => {
                (0, eL.L3)(e, async () => {
                    let { default: e } = await Promise.all([n.e("13446"), n.e("17699"), n.e("30412")]).then(
                        n.bind(n, 807431),
                    );
                    return (n) => (0, s.jsx)(e, { ...n, guild: t });
                });
            },
            [t],
        ),
        m = null;
    return (
        (a && !d && !c) ||
            l ||
            u ||
            (m = (0, s.jsx)(U.Lp, { color: h.A.colors.BADGE_BACKGROUND_BRAND.css, text: K.intl.string(K.t.y2b7CA) })),
        (0, s.jsx)(H.G, {
            id: `channels-${t.id}`,
            renderIcon: (e) => (0, s.jsx)(nq.k, { size: "md", color: "currentColor", className: e }),
            text: i ? K.intl.string(K.t.h9mGOP) : K.intl.string(K.t.et6wav),
            selected: l,
            onClick: A,
            onContextMenu: g,
            trailing: m,
        })
    );
}
var n1 = n(855473);
function n3(e) {
    let { guild: t, selected: n } = e;
    return (0, s.jsx)(H.G, {
        id: `home-tab-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(n1.Z, { size: "md", color: "currentColor", className: e }),
        text: K.intl.string(K.t.VbpLyU),
        selected: n,
        onClick: function () {
            (0, ei.pX)(F.BVt.CHANNEL(t.id, es.VV.GUILD_HOME));
        },
    });
}
var n2 = n(5373),
    n9 = n(65995),
    n5 = n(33011);
function n7(e, t) {
    return (0, s.jsx)(N.E, { variant: "text-xs/bold", color: "text-default", children: e }, t);
}
let n6 = r.memo(function (e) {
    let { guild: t } = e,
        n = (0, u.bG)([ta.h], () => ta.h.getNewMemberActions(t.id), [t.id]),
        l = (0, u.bG)([n9.A], () => n9.A.getCompletedActions(t.id)),
        i = r.useMemo(() => {
            if (null == n || null == l) return 0;
            let e = 0;
            return (
                n.forEach((t) => {
                    null != l[t.channelId] && e++;
                }),
                e
            );
        }, [l, n]),
        a = null == n ? 0 : n.length,
        o = (0, d.rm)(`progress-bar-${t.id}`);
    return (0, s.jsxs)("li", {
        children: [
            (0, s.jsxs)(ee.D, {
                ...o,
                role: "button",
                focusProps: { offset: { right: 4 } },
                className: n5.G9,
                onClick: function () {
                    (0, ei.pX)(F.BVt.CHANNEL(t.id, es.VV.GUILD_HOME));
                },
                children: [
                    (0, s.jsxs)("div", {
                        className: n5.A1,
                        children: [
                            (0, s.jsx)(x.D, { variant: "heading-sm/bold", children: K.intl.string(K.t.SnrR3x) }),
                            (0, s.jsxs)("div", {
                                className: n5.Ib,
                                children: [
                                    (0, s.jsx)(N.E, {
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        className: n5.Cv,
                                        children: K.intl.format(K.t.eqZ1lW, {
                                            numberHook: n7,
                                            total: a.toString(),
                                            completed: i.toString(),
                                        }),
                                    }),
                                    (0, s.jsx)(ew.A, {
                                        className: n5.UE,
                                        width: 16,
                                        height: 16,
                                        direction: ew.A.Directions.RIGHT,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, s.jsx)(n2.i, {
                        className: n5.hr,
                        foregroundGradientColor: [
                            h.A.unsafe_rawColors.GREEN_300.css,
                            h.A.unsafe_rawColors.GREEN_230.css,
                        ],
                        percent: (i / a) * 100 + 3,
                        animate: !0,
                    }),
                ],
            }),
            (0, s.jsx)("div", { role: "separator", className: n5.yF }),
        ],
    });
});
var n4 = n(581925);
function n8(e) {
    let { guild: t, selected: n } = e;
    return (0, s.jsx)(H.G, {
        id: `official-messages-page-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(n4.L, { size: "md", color: "currentColor", className: e }),
        text: K.intl.string(K.t.xHEzFh),
        selected: n,
        onClick: function () {
            (0, ei.pX)(F.BVt.CHANNEL(t.id, es.VV.GUILD_OFFICIAL_MESSAGES));
        },
    });
}
var le = n(514179);
function lt(e) {
    let { guild: t, selected: l } = e;
    return (0, s.jsx)(H.G, {
        id: `subscriptions-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(le.A, { className: e }),
        text: K.intl.string(K.t["KzCF/6"]),
        selected: l,
        onClick: function () {
            (0, ei.pX)(F.BVt.CHANNEL(t.id, es.VV.ROLE_SUBSCRIPTIONS));
        },
        onContextMenu: function (e) {
            null != t &&
                (0, eL.L3)(e, async () => {
                    let { default: e } = await n.e("71911").then(n.bind(n, 978554));
                    return (n) => (0, s.jsx)(e, { ...n, guild: t });
                });
        },
    });
}
var ln = n(506774),
    ll = n(95561),
    li = n(289397),
    ls = n(486418),
    lr = n(575926),
    la = n(440293),
    lo = n(174459),
    ld = n(634654),
    lc = n(391277);
function lu(e) {
    let { guildId: t, selected: n, handleClick: l } = e,
        i = (0, la.w)(t),
        r = (0, tl.bG)([th.A], () => th.A.getGuild(t)),
        a = r?.features.has(F.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) === !0,
        o = "false" === ln.w.get(ld.bJ, "false"),
        d = (0, tl.bG)([R.Ay], () => R.Ay.useReducedMotion);
    return (0, s.jsx)(H.G, {
        id: `shop-${t}`,
        className: ep()(lc.A2, { [lc.wH]: n, [lc.ST]: o }),
        innerClassName: lc.LE,
        renderIcon: (e) => (0, s.jsx)(lr.h, { width: 20, height: 20, className: ep()([e, lc.sV]) }),
        text: K.intl.string(K.t.al5EXL),
        selected: n,
        onClick: l,
        trailing: (0, s.jsxs)("div", {
            className: lc.ai,
            children: [
                d
                    ? (0, s.jsx)(U.Lp, {
                          color: h.A.unsafe_rawColors.BRAND_260.css,
                          text: K.intl.string(K.t.y2b7CA),
                          className: lc.Ad,
                      })
                    : (0, s.jsx)("img", {
                          src: (0, li.n)("server_products/storefront/money.gif"),
                          className: lc.TG,
                          alt: "",
                      }),
                n &&
                    (0, s.jsx)(ee.D, {
                        className: lc.b,
                        onClick: function (e) {
                            e.stopPropagation(),
                                (0, nX.Dr)(T.M.SERVER_SHOP_PHANTOM_PREVIEW),
                                lo.default.track(F.HAw.GUILD_SHOP_PREVIEW_CLICK, {
                                    ...(0, ll.H$)(t),
                                    action_taken: ld.hN.DISMISS_CHANNEL_ROW,
                                }),
                                (i && a) || (0, ei.bG)(F.BVt.CHANNEL(t, e6.Ay.getDefaultChannel(t)?.id));
                        },
                        "aria-label": K.intl.string(K.t.cpT0Cq),
                        children: (0, s.jsx)(tG.a, { size: "xs", color: "currentColor" }),
                    }),
            ],
        }),
    });
}
function lh(e) {
    let { guild: t, selected: l } = e;
    function i() {
        ln.w.set(ld.bJ, "true"), (0, ei.pX)(F.BVt.CHANNEL(t.id, es.VV.GUILD_SHOP));
    }
    return (0, ls.P)(t)
        ? (0, s.jsx)(lu, { guildId: t.id, selected: l, handleClick: i })
        : (0, s.jsx)(H.G, {
              id: `shop-${t.id}`,
              renderIcon: (e) => (0, s.jsx)(lr.h, { width: 20, height: 20, className: e }),
              text: K.intl.string(K.t.al5EXL),
              selected: l,
              onClick: i,
              onContextMenu: function (e) {
                  null != t &&
                      (0, eL.L3)(e, async () => {
                          let { default: e } = await n.e("52565").then(n.bind(n, 345332));
                          return (n) => (0, s.jsx)(e, { ...n, guild: t });
                      });
              },
          });
}
var lA = n(308528),
    lg = n(262763),
    lm = n(499211),
    lf = n(406704),
    lp = n(747926),
    lC = n(977997),
    lE = n(807632),
    lx = n(37411);
function lN(e) {
    let { thread: t, tabIndex: n } = e,
        l = (0, lE.YG)(t),
        i = (0, lE.IO)(t),
        r = (0, lf._M)(t);
    return l && i && r ? (0, s.jsx)(l_, { thread: t, tabIndex: n }) : null;
}
function l_(e) {
    let { thread: t, tabIndex: n } = e,
        l = (0, u.bG)([lC.A], () => lC.A.isInChannel(t.id), [t.id]),
        { needSubscriptionToAccess: i } = (0, lm.A)(t.id),
        a = r.useCallback(() => {
            lg.A.handleVoiceConnect({ channel: t, connected: l, needSubscriptionToAccess: i, locked: !1 });
        }, [t, l, i]),
        o = r.useCallback(() => {
            (0, lp.JA)(t, !0, lx.H9.CHANNEL_LIST);
        }, [t]);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(Q.m, {
                asContainer: !0,
                text: K.intl.string(K.t["96ANUN"]),
                children: (0, s.jsx)(ee.D, {
                    className: ed.Xs,
                    onClick: a,
                    tabIndex: n,
                    "aria-label": K.intl.string(K.t["96ANUN"]),
                    children: (0, s.jsx)(S.H, { size: "xs", color: "currentColor", className: ed.gE }),
                }),
            }),
            (0, s.jsx)(Q.m, {
                asContainer: !0,
                text: K.intl.string(K.t.ZXxLQg),
                children: (0, s.jsx)(ee.D, {
                    className: ed.Xs,
                    onClick: o,
                    tabIndex: n,
                    "aria-label": K.intl.string(K.t.ZXxLQg),
                    children: (0, s.jsx)(I.o, { size: "xs", color: "currentColor", className: ed.gE }),
                }),
            }),
        ],
    });
}
var lS = n(152007);
function lI(e) {
    return null != e && e > 0;
}
var lb = n(405018),
    lG = n(428689),
    lR = n(852878);
function lv(e) {
    let { total: t, users: n, videoLimit: l } = e;
    return (0, s.jsxs)("div", {
        className: lR.iE,
        children: [
            (0, s.jsxs)("span", {
                className: ep()(lR.VV, { [lR.Ki]: l, [lR.$G]: n >= 100 }),
                children: [
                    l ? (0, s.jsx)(lG.n, { size: "md", color: "currentColor", className: lR.LB }) : null,
                    n.toString().padStart(2, "0"),
                ],
            }),
            (0, s.jsx)("span", {
                className: ep()(lR.X5, { [lR.$G]: t >= 100 }),
                children: t.toString().padStart(2, "0"),
            }),
        ],
    });
}
function lj(e) {
    let { channel: t, video: n, userCount: l } = e,
        { limit: i } = (0, lb.A)(t),
        r = -1,
        a = !1;
    return (
        t.userLimit > 0 && (r = t.userLimit),
        n && i > 0 && ((a = r < 0 || i < r), (r = r > 0 ? Math.min(r, i) : i)),
        (0, s.jsx)(lv, { users: l, total: r, videoLimit: a })
    );
}
var ly = n(701665);
function lM(e) {
    let { mentionsCount: t, isMentionLowImportance: n } = e;
    return (0, s.jsx)("div", {
        className: ly.R,
        "aria-hidden": !0,
        children: (0, s.jsx)(U.hV, {
            count: t,
            color: n ? h.A.colors.BACKGROUND_MOD_STRONG.css : h.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
        }),
    });
}
var lT = n(588224),
    lL = n(998510);
function lU(e) {
    let { thread: t, countInVoice: n, hasVideo: l, mentionCount: i, isMentionLowImportance: r } = e,
        a = n > 0 && t.userLimit > 0,
        o = lI(i);
    return a || o
        ? (0, s.jsxs)("div", {
              className: ed.yW,
              children: [
                  a ? (0, s.jsx)(lj, { userCount: n, video: l, channel: t }) : null,
                  o ? (0, s.jsx)(lM, { mentionsCount: i, isMentionLowImportance: r }) : null,
              ],
          })
        : null;
}
function lD(e) {
    let { style: t, withGuildIcon: n, inverted: l } = e,
        i = { className: ep()(lL.GI, { [lL.a7]: n }, { [lL.BJ]: l }), style: t },
        { density: r } = (0, C.wR)();
    switch (r) {
        case "cozy":
            return (0, s.jsxs)("svg", {
                ...i,
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
                ...i,
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
                ...i,
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
let lO = r.memo(function (e) {
        let { thread: t, isSelectedChannel: l, isSelectedVoice: i, isLast: a, withGuildIcon: o } = e,
            c = (0, u.bG)([eZ.Ay], () => eZ.Ay.getVoiceStatesForChannel(t), [t]),
            h = (0, u.bG)([lC.A], () => lC.A.hasVideo(t.id)),
            {
                unread: A,
                mentionCount: g,
                isMentionLowImportance: m,
            } = (0, u.cf)([nQ.Ay], () => ({
                unread: nQ.Ay.hasUnread(t.id),
                mentionCount: nQ.Ay.getMentionCount(t.id),
                isMentionLowImportance: nQ.Ay.getIsMentionLowImportance(t.id),
            })),
            f = (0, u.bG)([lS.A], () => lS.A.isMuted(t.id)),
            p = r.useCallback(
                (e) => {
                    (0, lp.JA)(t, !e.shiftKey, lx.H9.CHANNEL_LIST);
                },
                [t],
            ),
            C = r.useCallback(() => {
                lA.A.preload(t.guild_id, t.id);
            }, [t.guild_id, t.id]),
            E = r.useCallback(
                (e) => {
                    let l = eX.A.getChannel(t.id);
                    null != l &&
                        (0, eL.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                n.e("26132"),
                                n.e("91763"),
                                n.e("38730"),
                                n.e("34971"),
                                n.e("3998"),
                                n.e("43266"),
                                n.e("91671"),
                                n.e("12255"),
                                n.e("40959"),
                                n.e("96804"),
                                n.e("65200"),
                                n.e("85802"),
                                n.e("26250"),
                                n.e("51212"),
                                n.e("84615"),
                            ]).then(n.bind(n, 612826));
                            return (t) => (0, s.jsx)(e, { ...t, channel: l });
                        });
                },
                [t.id],
            ),
            x = null == c ? 0 : c.length,
            { role: N, ..._ } = (0, d.rm)(t.id),
            S = r.useRef(null),
            I =
                g > 0
                    ? K.intl.formatToPlainString(K.t["ZL7+I6"], { channelName: t.name, mentionCount: g })
                    : A
                      ? K.intl.formatToPlainString(K.t.YlVvmc, { channelName: t.name })
                      : K.intl.formatToPlainString(K.t["0nZpiF"], { channelName: t.name });
        return (0, s.jsxs)("li", {
            role: N,
            className: ep()(ed.fx, { [ed.wH]: l }),
            children: [
                (0, s.jsx)(lD, { withGuildIcon: o }),
                a
                    ? null
                    : (0, s.jsx)(lD, {
                          withGuildIcon: o,
                          inverted: !0,
                          style: { transform: "rotateX(180deg) translateY(-9px)" },
                      }),
                (0, s.jsx)(tS.vN, {
                    focusTarget: S,
                    ringTarget: S,
                    offset: { top: 2, bottom: 2, right: 4 },
                    children: (0, s.jsxs)("div", {
                        className: ep()(ed.Ki, nz.iE, nz.ZS, {
                            [nz.J1]: l,
                            [nz.F4]: !l && f,
                            [nz.V2]: !f && !l && A,
                            [nz.lY]: o,
                        }),
                        onMouseDown: C,
                        onContextMenu: E,
                        children: [
                            !A || f || l ? null : (0, s.jsx)("div", { className: ep()(nz.gy, nz.WS) }),
                            (0, s.jsx)(ee.D, {
                                ..._,
                                innerRef: S,
                                className: nz.nf,
                                onClick: p,
                                "aria-label": I,
                                focusProps: { enabled: !1 },
                                children: (0, s.jsxs)("div", {
                                    className: ep()(nz.Y5, nz.__invalid_threadMainContent),
                                    children: [
                                        (0, s.jsx)(tN.A, { className: nz.UU, "aria-hidden": !0, children: t.name }),
                                        (0, s.jsxs)("div", {
                                            className: nz.Y_,
                                            onClick: nI.dG,
                                            onKeyDown: nI.dG,
                                            children: [
                                                (0, s.jsx)(lU, {
                                                    thread: t,
                                                    countInVoice: x,
                                                    hasVideo: h,
                                                    mentionCount: g,
                                                    isMentionLowImportance: m,
                                                }),
                                                (0, s.jsx)(lN, { thread: t, tabIndex: _.tabIndex }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                }),
                (0, s.jsx)(lT.A, {
                    channel: t,
                    collapsed: !i && 1 !== c.length,
                    collapsedMax: 6,
                    voiceStates: c,
                    isThread: !0,
                }),
            ],
        });
    }),
    lP = r.memo(function (e) {
        let { channel: t, selectedChannel: n, selectedVoiceChannelId: l, sortedThreadIds: i, withGuildIcon: r } = e,
            a = (0, tX.Ay)(t),
            { density: o } = (0, C.wR)(),
            d = (0, u.yK)([eX.A], () => i.map((e) => eX.A.getChannel(e)).filter(eJ.Vq), [i]),
            c = (0, u.bG)([eZ.Ay], () => {
                let e = d[d.length - 1];
                if (null == e) return 0;
                let t = eZ.Ay.getVoiceStates(e.guild_id)[e.id];
                return null == t || 0 === t.length ? 0 : l !== e.id ? 40 : 32 * t.length + 8;
            });
        return (0, s.jsx)("li", {
            className: lL.kL,
            children: (0, s.jsxs)("ul", {
                role: "group",
                "aria-label": K.intl.formatToPlainString(K.t.EiyIi6, { channelName: a }),
                children: [
                    (0, s.jsx)("div", {
                        className: ep()(lL.eh, { [lL.ET]: r }),
                        style: { bottom: ("cozy" === o ? 28 : 24) + c },
                    }),
                    d.map((e, t) =>
                        (0, s.jsx)(
                            lO,
                            {
                                thread: e,
                                isSelectedChannel: n?.id === e.id,
                                isSelectedVoice: l === e.id,
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
var lV = n(922016),
    lw = n(367513),
    lH = n(296216),
    lB = n(963027),
    lk = n(202384),
    lF = n(51758),
    lK = n(139033),
    lz = n(305866),
    lW = n(123292),
    lY = n(830215),
    lq = n(315982),
    lX = n(480900),
    lZ = n(557722),
    lJ = n(834942),
    l$ = n(287809),
    lQ = n(53516),
    l0 = n(725673),
    l1 = (((l = {})[(l.VOICE = 0)] = "VOICE"), l);
let l3 = function (e) {
    let { type: t, guildId: l, closePopout: i } = e,
        r = (0, y.GV)(),
        a = (0, u.bG)([lJ.A], () => lJ.A.getCheck(l), [l]),
        {
            notClaimed: o,
            notEmailVerified: d,
            notPhoneVerified: c,
            missingVerificationRole: h,
            verificationRole: A,
        } = a,
        {
            header: g,
            body: m,
            buttonText: f,
        } = (function (e, t) {
            if (0 !== e) return { header: null, body: null, buttonText: null };
            {
                let e = K.intl.string(K.t["6zY8BI"]),
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
                    ? { header: e, body: K.intl.string(K.t.IRxUlG), buttonText: K.intl.string(K.t.fiNVin) }
                    : l
                      ? { header: e, body: K.intl.string(K.t.vW8iUF), buttonText: K.intl.string(K.t["50gfOv"]) }
                      : i
                        ? { header: e, body: K.intl.string(K.t.vdSOpz), buttonText: K.intl.string(K.t.lm1UKt) }
                        : s
                          ? {
                                header: e,
                                body: K.intl.formatToPlainString(K.t.v1ktYb, { min: F.$8o.MEMBER_AGE }),
                                buttonText: K.intl.string(K.t.BddRzS),
                            }
                          : r
                            ? {
                                  header: e,
                                  body: K.intl.formatToPlainString(K.t.sncw41, { min: F.$8o.ACCOUNT_AGE }),
                                  buttonText: K.intl.string(K.t.BddRzS),
                              }
                            : a && null != o && null === o.tags.guild_connections
                              ? {
                                    header: e,
                                    body: K.intl.format(K.t.MZbCuG, { roleName: `@${o.name}` }),
                                    buttonText: K.intl.string(K.t["6Ge2LG"]),
                                }
                              : { header: e, body: null, buttonText: null };
            }
        })(t, a);
    return null == g || null == m
        ? null
        : (0, s.jsxs)(lz.l, {
              className: l0.kL,
              "aria-labelledby": r,
              children: [
                  (0, s.jsx)("img", { alt: "", className: l0.Sl, src: n(303528) }),
                  (0, s.jsxs)("div", {
                      className: l0.Qs,
                      children: [
                          (0, s.jsx)(x.D, { variant: "heading-md/semibold", id: r, children: g }),
                          (0, s.jsx)(N.E, { color: "text-default", variant: "text-sm/normal", children: m }),
                          (0, s.jsxs)("div", {
                              className: l0.UD,
                              children: [
                                  null != f
                                      ? (0, s.jsx)("div", {
                                            "data-button-hoisted-classname-wrapper": !0,
                                            className: l0.FS,
                                            children: (0, s.jsx)(t_.$, {
                                                variant: "primary",
                                                text: f,
                                                onClick: () => {
                                                    o
                                                        ? lq.R()
                                                        : c
                                                          ? (0, $.openModalLazy)(
                                                                async () => {
                                                                    let { default: e } = await Promise.all([
                                                                        n.e("56643"),
                                                                        n.e("65264"),
                                                                        n.e("86380"),
                                                                        n.e("89545"),
                                                                        n.e("91531"),
                                                                        n.e("11493"),
                                                                        n.e("84704"),
                                                                    ]).then(n.bind(n, 615715));
                                                                    return (t) =>
                                                                        (0, s.jsx)(e, {
                                                                            reason: lZ.d.GUILD_PHONE_REQUIRED,
                                                                            ...t,
                                                                        });
                                                                },
                                                                { modalKey: lQ.V },
                                                            )
                                                          : d
                                                            ? (lY.A.verifyResend(),
                                                              (0, lK.A)({
                                                                  title: K.intl.string(K.t.LykQYk),
                                                                  subtitle: K.intl.format(K.t.azKEPy, {
                                                                      email: l$.default.getCurrentUser()?.email,
                                                                  }),
                                                              }))
                                                            : h && null != A && (0, lX.b)(A, l),
                                                        i();
                                                },
                                            }),
                                        })
                                      : null,
                                  o || c || d
                                      ? (0, s.jsx)(lW.Q, {
                                            onClick: i,
                                            text: K.intl.string(K.t.oEAioF),
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
var l2 = n(824865),
    l9 = n(378570),
    l5 = n(790535),
    l7 = n(113783),
    l6 = n(96566),
    l4 = n(280450),
    l8 = n(312006),
    ie = n(505543),
    it = n(994500),
    il = n(685399),
    ii = n(475889),
    is = n(693879),
    ir = n(435470),
    ia = n(35275),
    io = n(75879);
function id(e) {
    let { locked: t } = e;
    return (0, s.jsx)("div", {
        className: ep()(ed.Xs, io.U),
        children: (0, s.jsx)(ia.A, {
            className: ed.gE,
            color: t ? h.A.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css : void 0,
        }),
    });
}
var ic = n(695633),
    iu = n(669715),
    ih = n(769015),
    iA = n(999436);
function ig(e) {
    let { className: t, embeddedApps: n, muted: l } = e;
    if (n.length <= 0) return null;
    {
        if (1 === n.length)
            return (0, s.jsx)("div", {
                className: ep()(iA.kL, t, l && iA.F4),
                children: (0, s.jsx)(ih.A, { game: n[0].application, className: iA.wK }),
            });
        let e = n.length - 1;
        return (0, s.jsxs)("div", {
            className: ep()(iA.kL, t, l && iA.F4),
            children: [
                (0, s.jsx)(ih.A, { game: n[0].application, className: iA.wK }),
                2 === n.length
                    ? (0, s.jsx)(ih.A, { game: n[1].application, className: iA.wK })
                    : (0, s.jsx)(N.E, {
                          className: iA.ju,
                          variant: "text-xs/bold",
                          color: "interactive-text-active",
                          children: `+${e}`,
                      }),
            ],
        });
    }
}
function im(e) {
    let {
            channel: t,
            isChannelSelected: n,
            isChannelCollapsed: l,
            voiceStates: i,
            enableConnectedUserLimit: r,
            enableActivities: a,
            isSubscriptionGated: o,
            needSubscriptionToAccess: d,
            isNewChannel: c,
            muted: A,
            resolvedUnreadSetting: g,
        } = e,
        m = (0, u.bG)([nQ.Ay], () => nQ.Ay.getMentionCount(t.id)),
        f = (0, u.bG)([nQ.Ay], () => nQ.Ay.getIsMentionLowImportance(t.id)),
        p = (0, il.Ay)(t),
        C = (0, u.bG)([B.A], () => !B.A.can(F.xBc.CONNECT, t)),
        E = (0, ii.H)(t),
        x = (0, u.bG)([lC.A], () => lC.A.hasVideo(t.id)),
        _ = (0, l6.qT)(t.id) && t.isGuildStageVoice(),
        S = (function (e) {
            let { channel: t, locked: n, video: l, selected: i } = e;
            return (
                (function (e) {
                    let { channel: t, video: n, considerMaxStageVoiceUserLimit: l = !0 } = e,
                        { limit: i } = (0, lb.A)(t),
                        s = -1;
                    return (t.userLimit > 0 && (s = t.userLimit),
                    n && i > 0 && (s = s > 0 ? Math.min(s, i) : i),
                    l && s === F.RCc)
                        ? 0
                        : s;
                })({ channel: t, video: l }) > 0 &&
                !n &&
                !i
            );
        })({ channel: t, locked: C, video: (x || _) && null == E, selected: n }),
        I = (0, u.bG)([ic.A], () => ic.A.getNewThreadCount(t.guild_id, t.id)),
        b = (0, ir.ed)(t.guild_id, t.id),
        G = (0, u.bG)([th.A], () => th.A.getGuild(t.guild_id)?.features.has(F.GuildFeatures.COMMUNITY) ?? !1);
    if (lI(m)) return (0, s.jsx)(lM, { mentionsCount: m, isMentionLowImportance: f });
    if (o) return (0, s.jsx)(id, { locked: d });
    if (c) return (0, s.jsx)(U.Lp, { text: K.intl.string(K.t.y2b7CA), color: h.A.colors.BADGE_BACKGROUND_BRAND.css });
    if (!A && g === nb.e.ALL_MESSAGES && t.isForumLikeChannel() && null != I && I > 0)
        return (0, s.jsx)(N.E, {
            variant: "text-xs/semibold",
            color: "text-brand",
            children: K.intl.format(K.t.GkAbqY, { count: (0, U.Gu)(I) }),
        });
    if (!A && t.isForumLikeChannel() && null != b && b > 0)
        return (0, s.jsx)(N.E, { variant: "text-xs/semibold", color: "text-muted", children: (0, U.Gu)(b) });
    let R = i?.length ?? 0;
    return null != r && r && S
        ? (0, s.jsx)(lj, { userCount: R, video: x || _, channel: t })
        : l && (0, iu.t)(i) && G
          ? (0, s.jsx)(U.Lp, { text: K.intl.string(K.t.dI3q4h), color: h.A.unsafe_rawColors.RED_400.css })
          : null != E
            ? (0, s.jsx)(is.z, { textColor: "text-feedback-positive", entry: { start: E } })
            : null != a && a && p.length > 0
              ? (0, s.jsx)(ig, { embeddedApps: p, muted: A })
              : null;
}
var ip = n(582630);
class iC extends nS {
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
        return (0, nl.Pd)(e, lC.A, th.A);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        if (n) return ed.ZS;
        if (null != t)
            if (e > t) return ed.mU;
            else return ed.TR;
        return ed.fx;
    }
    handleClick = () => {
        let { channel: e, locked: t, connected: n, unverifiedAccount: l, isSuggestedSection: i } = this.props,
            s = e.getGuildId();
        null != s && (0, lF.V)(s) && (0, lk.Ze)(s),
            l && this.setState({ shouldShowGuildVerificationPopout: !0 }),
            t || n || e.isRoleSubscriptionTemplatePreviewChannel() || (0, l5.av)(e),
            __OVERLAY__ || (0, l9.iN)(e.id, i ? { source: l2.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
    };
    handleClickChat = () => {
        let { channel: e, locked: t, isSuggestedSection: n } = this.props;
        __OVERLAY__ || t || (0, l9.iN)(e.id, n ? { source: l2.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            l = th.A.getGuild(t.getGuildId());
        null != l &&
            (0, eL.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("26132"),
                    n.e("46652"),
                    n.e("93103"),
                    n.e("93190"),
                    n.e("91763"),
                    n.e("38730"),
                    n.e("35321"),
                    n.e("50033"),
                    n.e("34971"),
                    n.e("3998"),
                    n.e("43266"),
                    n.e("9004"),
                    n.e("74610"),
                    n.e("30997"),
                    n.e("12255"),
                    n.e("40959"),
                    n.e("79995"),
                    n.e("42339"),
                    n.e("44058"),
                    n.e("91377"),
                    n.e("35723"),
                    n.e("12520"),
                    n.e("66540"),
                    n.e("29542"),
                    n.e("19690"),
                    n.e("26792"),
                    n.e("12052"),
                    n.e("18663"),
                    n.e("99990"),
                    n.e("99854"),
                ]).then(n.bind(n, 119357));
                return (n) => (0, s.jsx)(e, { ...n, channel: t, guild: l });
            });
    };
    renderVoiceUsers() {
        let { channel: e, collapsed: t, tabIndex: n, speakerVoiceStates: l, numAudience: i } = this.props;
        return (0, s.jsx)(lT.A, { channel: e, voiceStates: l, collapsed: t, tabIndex: n, numAudience: i });
    }
    renderPopout = () => {
        let { channel: e } = this.props,
            { shouldShowGuildVerificationPopout: t } = this.state;
        if (t)
            return (0, s.jsx)(l3, {
                type: l1.VOICE,
                guildId: e.guild_id,
                closePopout: this.closeGuildVerificationPopout,
            });
        throw Error("VoiceChannel.renderPopout: There must always be something to render");
    };
    renderOpenChatButton = () => {
        let { channel: e, locked: t, forceShowButtons: n } = this.props;
        if (!t)
            return (0, s.jsx)(Q.m, {
                asContainer: !0,
                text: K.intl.string(K.t.ZXxLQg),
                children: (0, s.jsx)(ee.D, {
                    className: ep()(ed.Xs, n ? ed.Tf : null),
                    onClick: () => {
                        lw.A.updateChatOpen(e.id, !0), this.handleClickChat();
                    },
                    "aria-label": K.intl.string(K.t.ZXxLQg),
                    children: (0, s.jsx)(I.o, { size: "xs", color: "currentColor", className: ed.gE }),
                }),
            });
    };
    renderChannelInfo() {
        return this.props.channelInfo;
    }
    getTooltipText = () => {
        let { connected: e } = this.props;
        return this.isFull() && !e ? K.intl.string(K.t.rZfiNq) : null;
    };
    renderSubtitle = () => {
        let e = this.props.stageInstance?.topic;
        return null == e ? null : (0, s.jsx)(tN.A, { children: e });
    };
    render() {
        let {
                channel: e,
                selected: t,
                connected: n,
                locked: l,
                connectChannelDropTarget: i,
                connectChannelDragSource: r,
                connectUserDropTarget: a,
                connectDragPreview: o,
                canReorderChannel: d,
                canMoveMembers: c,
                stageInstance: u,
                isSubscriptionGated: h,
                needSubscriptionToAccess: A,
                unread: g,
                resolvedUnreadSetting: m,
                mentionCount: f,
                isFavoriteSuggestion: p,
            } = this.props,
            { shouldShowGuildVerificationPopout: C } = this.state,
            E = (0, s.jsxs)("li", {
                className: ep()(this.getModeClass(), { [ed.r9]: this.isDisabled() }),
                "data-dnd-name": (0, tX.m1)(e, l$.default, it.A),
                children: [
                    (0, s.jsx)(lV.Y, {
                        targetElementRef: this.channelItemRef,
                        position: "right",
                        renderPopout: this.renderPopout,
                        spacing: 17,
                        onRequestClose: this.closeGuildVerificationPopout,
                        shouldShow: C,
                        children: () =>
                            (0, s.jsx)(Q.m, {
                                text: this.getTooltipText(),
                                children: (0, s.jsxs)(nI.Ay, {
                                    ref: this.channelItemRef,
                                    className: ed.Ki,
                                    iconClassName: ep()({ [ip.G]: null != u }),
                                    channel: e,
                                    selected: !p && t,
                                    connected: n,
                                    unread: n ? g : void 0,
                                    resolvedUnreadSetting: m,
                                    mentionCount: f,
                                    locked: l,
                                    onClick: () => {
                                        this.handleClick();
                                    },
                                    onContextMenu: (e) => {
                                        this.handleContextMenu(e);
                                    },
                                    connectDragPreview: o,
                                    subtitle: this.renderSubtitle(),
                                    isFavoriteSuggestion: p,
                                    "aria-label": (0, lB.Ay)({
                                        channel: e,
                                        unread: g,
                                        mentionCount: f,
                                        isSubscriptionGated: h,
                                        needSubscriptionToAccess: A,
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
        return c && (E = a(E)), d && (E = i(r(E))), E;
    }
}
let iE = tq((0, lH.F)(iC));
function ix(e) {
    var t;
    let n,
        l,
        { guild: i, channel: r, disableSorting: a, isFavoriteCategory: o, collapsed: d, voiceStates: c } = e,
        h = (0, u.cf)([nQ.Ay], () => ({ unread: nQ.Ay.hasUnread(r.id), mentionCount: nQ.Ay.getMentionCount(r.id) })),
        A = (0, u.bG)([tP.Ay], () => tP.Ay.resolveUnreadSetting(r)),
        g = (0, u.cf)([eX.A, lJ.A, B.A], () => {
            let e = eX.A.getChannel(r.parent_id),
                t = lJ.A.getCheck(r.guild_id);
            return {
                canManageChannel: null != i && B.A.can(F.xBc.MANAGE_CHANNELS, r),
                canReorderChannel:
                    !0 !== a &&
                    (i.id === ni.Vc ||
                        (null != e ? B.A.can(F.xBc.MANAGE_CHANNELS, e) : B.A.can(F.xBc.MANAGE_CHANNELS, i))),
                canMoveMembers: B.A.can(F.xBc.MOVE_MEMBERS, r),
                locked: !B.A.can(F.xBc.CONNECT, r),
                bypassLimit: B.A.can(F.xBc.MOVE_MEMBERS, r),
                unverifiedAccount: !t.canChat,
            };
        }),
        m = (0, u.bG)([tD.A], () => tD.A.isCollapsed(r.parent_id)),
        f =
            ((t = r.id),
            (n = (0, ie.A)(t)),
            (l = (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return (0, u.cf)([l8.Ay, l4.default], () => {
                    let n = l4.default.getId();
                    return l8.Ay.getPermissionsForUser(n, e, t);
                }, [e, t]);
            })(t, !0).moderator),
            !n && l ? 1 : 0),
        p = (0, u.bG)([nm.A], () => nm.A.getStageInstanceByChannel(r.id), [r.id]),
        C = (0, l7.zy)(r.id, e1.ip.AUDIENCE),
        { isSubscriptionGated: E, needSubscriptionToAccess: x } = (0, lm.A)(r.id),
        N = (0, u.bG)([tP.Ay], () => tP.Ay.isFavorite(i.id, r.id)),
        _ = (0, l6.xn)(r.id),
        S = im({
            channel: r,
            isChannelSelected: !1,
            isChannelCollapsed: d,
            voiceStates: c,
            isSubscriptionGated: E,
            needSubscriptionToAccess: x,
            enableConnectedUserLimit: _ || (r.userLimit > 0 && r.userLimit < F.RCc),
        }),
        I = e.connected && null == S;
    return (0, s.jsx)(iE, {
        categoryCollapsed: m,
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
        channelInfo: S,
        resolvedUnreadSetting: A,
    });
}
function iN(e, t) {
    let n = t.getGuildId();
    if (null == n) throw Error("TextChannel, preloadChannel: Channel does not have a guildId");
    lA.A.preload(n, t.id);
}
let i_ = tq(
        class extends nS {
            handleContextMenu = (e) => {
                let { channel: t } = this.props,
                    l = th.A.getGuild(t.getGuildId());
                null != l &&
                    (0, eL.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("26132"),
                            n.e("3998"),
                            n.e("9004"),
                            n.e("30997"),
                            n.e("12255"),
                            n.e("40959"),
                            n.e("79995"),
                            n.e("44058"),
                            n.e("15669"),
                        ]).then(n.bind(n, 313140));
                        return (n) => (0, s.jsx)(e, { ...n, channel: t, guild: l });
                    });
            };
            handleClick = (e) => {
                let t = e.getGuildId();
                if (null == t) throw Error("TextChannel, transitionTo: Channel does not have a guildId");
                (0, ei.pX)(F.BVt.CHANNEL(t, e.id), {
                    state: {
                        analyticsSource: {
                            page: F.liQ.GUILD_CHANNEL,
                            section: F.JJy.CHANNEL_LIST,
                            object: F.ZSU.CHANNEL,
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
                        canReorderChannel: r,
                    } = this.props,
                    a = (0, s.jsx)("li", {
                        className: ep()(this.getClassName(), { [ed.r9]: this.isDisabled() }),
                        "data-dnd-name": (0, tX.m1)(e, l$.default, it.A),
                        children: (0, s.jsxs)(nI.Ay, {
                            className: ed.Ki,
                            channel: e,
                            selected: t,
                            onClick: this.handleClick,
                            onMouseDown: iN,
                            onContextMenu: this.handleContextMenu,
                            connectDragPreview: r ? i : null,
                            "aria-label": (0, lB.Ay)({ channel: e }),
                            resolvedUnreadSetting: nb.e.ONLY_MENTIONS,
                            children: [this.renderInviteButton(), this.renderEditButton()],
                        }),
                    });
                return r ? n(l(a)) : a;
            }
        },
    ),
    iS = r.memo(function (e) {
        let { channel: t, guild: n, disableSorting: l } = e,
            i = (0, u.cf)([eX.A, B.A], () => {
                let e = eX.A.getChannel(t.parent_id);
                return {
                    canManageChannel: B.A.can(F.xBc.MANAGE_CHANNELS, t),
                    canReorderChannel:
                        !0 !== l && null != e ? B.A.can(F.xBc.MANAGE_CHANNELS, e) : B.A.can(F.xBc.MANAGE_CHANNELS, n),
                };
            });
        return (0, s.jsx)(i_, { ...i, ...e });
    });
var iI = n(172218),
    ib = n(811024),
    iG = n(323073);
function iR(e) {
    if (null == e) return null;
    switch (e.type) {
        case "embedded-activities":
        case "event":
            return { subtitle: e.name };
        case "go-live":
            return { subtitle: K.intl.string(K.t.Pa817q) };
    }
    return null;
}
var iv = n(414808),
    ij = n(302005),
    iy = n(696451),
    iM = n(763827),
    iT = n(56059),
    iL = n(163328),
    iU = n(778712),
    iD = n(730134),
    iO = n(707539),
    iP = n(486020),
    iV = n(550837);
function iw(e) {
    let { channel: t } = e,
        l = (0, u.yK)([ic.A, nQ.Ay, B.A], () => {
            let e = ic.A.getActiveJoinedRelevantThreadsForParent(t.guild_id, t.id);
            return o()(ic.A.getActiveJoinedThreadsForParent(t.guild_id, t.id))
                .values()
                .map((e) => e.channel)
                .concat(o().values(ic.A.getActiveUnjoinedThreadsForParent(t.guild_id, t.id)))
                .filter((t) => !(t.id in e) && B.A.can(F.xBc.VIEW_CHANNEL, t))
                .sort((e, t) => {
                    let n = nQ.Ay.lastMessageId(e.id),
                        l = nQ.Ay.lastMessageId(t.id);
                    return eQ.default.compare(n, l);
                })
                .reverse()
                .value();
        }),
        i = t.isForumLikeChannel() ? 5 : 3,
        a = t.isForumLikeChannel() ? iT.b : iL.y;
    return (
        r.useEffect(() => {
            (0, iO.TE)();
        }, []),
        (0, s.jsxs)("div", {
            className: iV.SW,
            children: [
                (0, s.jsx)(N.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: iV.DD,
                    children: t.isForumLikeChannel() ? K.intl.string(K.t.ioVdO2) : K.intl.string(K.t.VNYs2v),
                }),
                (0, s.jsxs)("div", {
                    className: iV.p_,
                    children: [
                        l
                            .slice(0, t.isForumLikeChannel() ? l.length : i)
                            .map((e) => (0, s.jsx)(iH, { thread: e }, e.id))
                            .filter((e) => r.isValidElement(e))
                            .slice(0, i),
                        (0, s.jsxs)(ee.D, {
                            className: iV.nM,
                            onClick: () => {
                                t.isForumLikeChannel()
                                    ? (0, l9.iN)(t.id)
                                    : (0, $.openModalLazy)(async () => {
                                          let { default: e } = await Promise.all([
                                              n.e("36250"),
                                              n.e("8073"),
                                              n.e("37634"),
                                              n.e("42157"),
                                              n.e("42247"),
                                              n.e("56402"),
                                              n.e("81647"),
                                              n.e("76602"),
                                              n.e("40402"),
                                              n.e("39970"),
                                              n.e("72789"),
                                              n.e("79049"),
                                              n.e("65437"),
                                              n.e("44567"),
                                              n.e("1812"),
                                              n.e("51743"),
                                              n.e("84042"),
                                              n.e("65225"),
                                          ]).then(n.bind(n, 126768));
                                          return (n) => (0, s.jsx)(e, { channel: t, ...n });
                                      });
                            },
                            children: [
                                (0, s.jsx)("div", {
                                    className: iV.R4,
                                    children: (0, s.jsx)(a, { size: "custom", className: iV.Kk }),
                                }),
                                (0, s.jsx)("div", {
                                    className: iV.Pf,
                                    children: (0, s.jsx)(N.E, {
                                        variant: "text-sm/normal",
                                        color: "none",
                                        children: K.intl.string(K.t["4qdZ93"]),
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
function iH(e) {
    let { thread: t } = e,
        n = (0, u.bG)([l$.default], () => l$.default.getUser(t.ownerId)),
        l = (0, iO.JO)(t);
    return (0, s.jsxs)(ee.D, {
        className: iV.nM,
        onClick: function (e) {
            (0, lp.JA)(t, t.isForumPost() ? e.shiftKey : !e.shiftKey, lx.H9.POPOUT);
        },
        children: [
            (0, s.jsx)("div", {
                className: iV.R4,
                children:
                    null == n
                        ? (0, s.jsx)("img", {
                              className: iV.my,
                              src: iP.Ay.getDefaultAvatarURL(void 0, void 0),
                              alt: "",
                          })
                        : (0, s.jsx)(iD.A, { className: iV.my, user: n, size: iU._3.SIZE_16 }),
            }),
            (0, s.jsxs)("div", {
                className: iV.Pf,
                children: [
                    (0, s.jsx)(N.E, { className: iV.UU, variant: "text-sm/normal", color: "none", children: t.name }),
                    (0, s.jsx)(N.E, { variant: "text-sm/normal", color: "text-muted", children: "\u2022" }),
                    (0, s.jsx)(N.E, {
                        className: iV.vE,
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: (0, iO.aK)(l),
                    }),
                ],
            }),
        ],
    });
}
var iB = n(364522),
    ik = n(302959),
    iF = n(35903),
    iK = n(970928),
    iz = n(427262),
    iW = n(456644);
let iY = ne.DN.SIZE_24;
function iq(e) {
    let { activity: t, embeddedApp: n } = e,
        l = t?.assets,
        i = t?.application_id;
    if (null == l || (null == l.large_image && null == l.small_image)) {
        let e = iP.Ay.getApplicationIconURL({ id: n.application.id, icon: n.application.icon }),
            t = n.application.name;
        return (0, s.jsx)(Q.m, {
            text: t,
            position: "top",
            asContainer: !0,
            children: (0, s.jsx)("img", { alt: t, src: e, className: iW.P3 }),
        });
    }
    let r = l.large_image ?? l.small_image;
    return null != r
        ? (0, s.jsx)("img", { alt: l.large_text ?? "", src: (0, iK.uD)(i, r, [128, 128]), className: iW.P3 })
        : null;
}
function iX(e) {
    let { activity: t, embeddedApp: n, channel: l } = e,
        i = Array.from(n.embeddedActivity.userIds),
        r = (0, u.yK)([l$.default], () => i.map((e) => l$.default.getUser(e)).filter(eJ.Vq));
    return (0, s.jsx)("div", {
        className: iW.ec,
        children: (0, s.jsxs)("div", {
            className: iW.Wh,
            children: [
                (0, s.jsx)(iq, { activity: t, embeddedApp: n }),
                (0, s.jsxs)("div", {
                    className: iW.X0,
                    children: [
                        (0, s.jsx)(x.D, {
                            variant: "heading-sm/semibold",
                            color: "text-strong",
                            className: iW.wx,
                            lineClamp: 1,
                            children: n.application.name,
                        }),
                        t?.details != null &&
                            "" !== t.details &&
                            (0, s.jsx)(N.E, {
                                variant: "text-xs/normal",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.details,
                            }),
                        t?.state != null &&
                            "" !== t.state &&
                            (0, s.jsx)(N.E, {
                                variant: "text-xs/normal",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.state,
                            }),
                        i.length > 0 &&
                            (0, s.jsx)(ne.Ay, {
                                className: iW.TN,
                                guildId: l.guild_id,
                                users: r,
                                size: iY,
                                max: 7,
                                renderUser: function (e) {
                                    if (null == e || e === ne.mt) return null;
                                    let t = iz.Ay.getName(e);
                                    return (0, s.jsx)(
                                        Q.m,
                                        {
                                            asContainer: !0,
                                            text: t,
                                            position: "bottom",
                                            children: (0, s.jsx)("img", {
                                                src: e.getAvatarURL(l.guild_id, iY),
                                                alt: t,
                                                className: iW.my,
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
var iZ = n(793425);
function iJ(e) {
    let { channel: t, presenceActivity: n, embeddedApp: l, onAction: i } = e,
        r = Array.from(l.embeddedActivity.userIds),
        a = (0, u.bG)([l$.default], () => l$.default.getUser(r[0]));
    return null == a
        ? null
        : (0, s.jsxs)("div", {
              className: iZ.Eb,
              children: [
                  (0, s.jsx)("div", {
                      className: iZ.Il,
                      children: (0, s.jsx)(iX, { activity: n, embeddedApp: l, channel: t }),
                  }),
                  (0, s.jsx)("div", {
                      className: iZ.M4,
                      children: (0, s.jsx)(iF.A, {
                          type: ik.M.VOICE_CHANNEL,
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
var i$ = n(713654),
    iQ = n(869552);
function i0(e) {
    let { channel: t } = e,
        n = (0, u.bG)([th.A], () => th.A.getGuild(t.guild_id)),
        l = (0, tX.Ay)(t),
        i = (0, i$.gU)(t, n);
    return null == i
        ? null
        : (0, s.jsxs)("div", {
              className: iQ.hY,
              children: [
                  (0, s.jsx)(i, { className: iQ.p }),
                  (0, s.jsx)(N.E, {
                      variant: "text-md/semibold",
                      color: "interactive-text-default",
                      className: iQ.HA,
                      children: l,
                  }),
              ],
          });
}
var i1 = n(802625);
function i3(e) {
    let { channel: t, onAction: n } = e,
        l = (0, il.Ay)(t),
        i = Array.from((0, il.Rz)(l).values());
    return 0 === i.length
        ? null
        : (0, s.jsxs)(iB.Ip, {
              className: i1.kL,
              children: [
                  (0, s.jsx)("div", { className: i1.oT, children: (0, s.jsx)(i0, { channel: t }) }),
                  (0, s.jsx)("div", { className: i1.zN }),
                  i.map((e, l) =>
                      (0, s.jsx)(
                          iJ,
                          { embeddedApp: e, presenceActivity: e.presenceActivity ?? void 0, channel: t, onAction: n },
                          l,
                      ),
                  ),
              ],
          });
}
class i2 extends nS {
    state = { shouldShowThreadsPopout: !1, shouldShowActivities: !1 };
    channelItemRef = r.createRef();
    assignRef = (e, t) => {
        null != e && (e.current = t);
    };
    setChannelItemRef = (e) => {
        (this.channelItemRef.current = e), this.assignRef(this.props.channelItemRef, e);
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
        this.resetTextChannelPopoutTimers(),
            (this.exitTimer = setTimeout(() => {
                this.state.shouldShowActivities && this.setState({ shouldShowActivities: !1 }),
                    this.state.shouldShowThreadsPopout && this.setState({ shouldShowThreadsPopout: !1 });
            }, 250));
    };
    handleThreadsPopoutClose = () => {
        this.resetTextChannelPopoutTimers(), this.setState({ shouldShowThreadsPopout: !1 });
    };
    handleActivitiesPopoutClose = () => {
        this.resetTextChannelPopoutTimers(), this.setState({ shouldShowActivities: !1 });
    };
    handleClosePopout = () => {
        this.state.shouldShowActivities && this.handleActivitiesPopoutClose(),
            this.state.shouldShowThreadsPopout && this.handleThreadsPopoutClose();
    };
    handleMouseDown = () => {
        this.handleActivitiesPopoutClose(), this.handleThreadsPopoutClose();
        let { channel: e } = this.props,
            t = e.getGuildId();
        lA.A.preload(t ?? F.ME, e.id);
    };
    renderPopout = (e) => {
        let { channel: t, sorting: n, embeddedApps: l, channelIsContentGated: i } = this.props,
            { shouldShowActivities: r } = this.state;
        return t.isModeratorReportChannel() || i
            ? null
            : null != l && l.length > 0 && r && !n
              ? (0, s.jsx)(i3, { onAction: this.handleActivitiesPopoutClose, channel: t })
              : (0, s.jsx)(iw, { ...e, channel: this.props.channel });
    };
    componentWillUnmount() {
        this.resetTextChannelPopoutTimers();
    }
    resetTextChannelPopoutTimers() {
        null != this.enterTimer && (clearTimeout(this.enterTimer), (this.enterTimer = null)),
            null != this.exitTimer && (clearTimeout(this.exitTimer), (this.exitTimer = null));
    }
    handleContextMenu = (e) => {
        let { channel: t } = this.props;
        if (t.type === F.rbe.GROUP_DM)
            return void (0, eL.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("26132"),
                    n.e("46652"),
                    n.e("93190"),
                    n.e("91763"),
                    n.e("38730"),
                    n.e("34971"),
                    n.e("42339"),
                    n.e("68530"),
                    n.e("12520"),
                    n.e("17244"),
                    n.e("53416"),
                    n.e("60200"),
                ]).then(n.bind(n, 4027));
                return (n) => (0, s.jsx)(e, { ...n, channel: t, selected: !0 });
            });
        if (t.type === F.rbe.DM) {
            let l = l$.default.getUser(t.getRecipientId());
            null != l &&
                (0, eL.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("71406"),
                        n.e("41831"),
                        n.e("62323"),
                        n.e("88429"),
                        n.e("94881"),
                        n.e("26132"),
                        n.e("46652"),
                        n.e("93103"),
                        n.e("93190"),
                        n.e("34552"),
                        n.e("91763"),
                        n.e("8757"),
                        n.e("71210"),
                        n.e("85968"),
                        n.e("38730"),
                        n.e("89673"),
                        n.e("68403"),
                        n.e("88342"),
                        n.e("29787"),
                        n.e("89421"),
                        n.e("98965"),
                        n.e("82073"),
                        n.e("97558"),
                        n.e("91994"),
                        n.e("76665"),
                        n.e("35313"),
                        n.e("76273"),
                        n.e("36564"),
                        n.e("34971"),
                        n.e("45996"),
                        n.e("792"),
                        n.e("92822"),
                        n.e("23427"),
                        n.e("29422"),
                        n.e("74610"),
                        n.e("38056"),
                        n.e("9291"),
                        n.e("7059"),
                        n.e("8829"),
                        n.e("42339"),
                        n.e("16054"),
                        n.e("17244"),
                        n.e("98199"),
                        n.e("41175"),
                        n.e("39778"),
                    ]).then(n.bind(n, 385913));
                    return (n) => (0, s.jsx)(e, { ...n, user: l, channel: t, showModalItems: !1 });
                });
            return;
        }
        if (t.isModeratorReportChannel())
            return void (0, eL.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("26132"),
                    n.e("46652"),
                    n.e("91763"),
                    n.e("38730"),
                    n.e("35321"),
                    n.e("50033"),
                    n.e("34971"),
                    n.e("43266"),
                    n.e("30997"),
                    n.e("79995"),
                    n.e("78580"),
                ]).then(n.bind(n, 907647));
                return (n) => (0, s.jsx)(e, { ...n, channel: t });
            });
        let l = th.A.getGuild(t.getGuildId());
        null != l &&
            (0, eL.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("26132"),
                    n.e("46652"),
                    n.e("93190"),
                    n.e("91763"),
                    n.e("38730"),
                    n.e("35321"),
                    n.e("50033"),
                    n.e("34971"),
                    n.e("3998"),
                    n.e("43266"),
                    n.e("9004"),
                    n.e("30997"),
                    n.e("12255"),
                    n.e("40959"),
                    n.e("79995"),
                    n.e("42339"),
                    n.e("44058"),
                    n.e("91377"),
                    n.e("65200"),
                    n.e("35723"),
                    n.e("12520"),
                    n.e("66540"),
                    n.e("29542"),
                    n.e("12052"),
                    n.e("25173"),
                ]).then(n.bind(n, 468916));
                return (n) => (0, s.jsx)(e, { ...n, channel: t, guild: l });
            });
    };
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e ? null : (0, s.jsx)("div", { className: ed.yW, children: e });
    }
    render() {
        let {
                channel: e,
                guild: t,
                selected: n,
                muted: l,
                unread: i,
                hasActiveThreads: r,
                hasMoreActiveThreads: a,
                mentionCount: o,
                connectChannelDropTarget: d,
                connectChannelDragSource: c,
                connectDragPreview: u,
                canReorderChannel: h,
                isSubscriptionGated: A,
                isFavoriteSuggestion: g,
                subtitle: m,
                forceTopLevelThread: f,
                embeddedApps: p,
                resolvedUnreadSetting: C,
                enableActivities: E,
                showMenuItemPopover: x,
                markMenuItemPopoverAsDismissed: N,
                channelItemRef: _,
                isSuggestedSection: S,
            } = this.props,
            I = _ ?? this.channelItemRef,
            b = !x && a,
            G = !x && E && null != p && p.length > 0,
            R = iR(m),
            v = (0, s.jsxs)("li", {
                className: ep()(this.getClassName(), { [ed.r9]: this.isDisabled(), [ed.wH]: n }),
                "data-dnd-name": (0, tX.m1)(e, l$.default, it.A),
                onMouseEnter: b || G ? this.handleMouseEnter : void 0,
                onMouseLeave: b || G ? this.handleMouseLeave : void 0,
                children: [
                    (0, s.jsx)(lV.Y, {
                        targetElementRef: I,
                        position: "right",
                        renderPopout: this.renderPopout,
                        onRequestClose: this.handleClosePopout,
                        spacing: 17,
                        shouldShow: (b && this.state.shouldShowThreadsPopout) || (G && this.state.shouldShowActivities),
                        children: () =>
                            (0, s.jsxs)(nI.Ay, {
                                ref: this.setChannelItemRef,
                                className: ed.Ki,
                                channel: e,
                                guild: t,
                                selected: !g && n,
                                muted: l,
                                unread: i,
                                mentionCount: o,
                                hasActiveThreads: r,
                                subtitle: R?.subtitle,
                                subtitleColor: R?.color,
                                onMouseDown: this.handleMouseDown,
                                onContextMenu: this.handleContextMenu,
                                connectDragPreview: h ? u : null,
                                isFavoriteSuggestion: g,
                                channelTypeOverride: f ? F.rbe.GUILD_TEXT : void 0,
                                resolvedUnreadSetting: C,
                                transitionExtras: S ? { source: l2.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
                                "aria-label": (0, lB.Ay)({
                                    channel: e,
                                    unread: i,
                                    mentionCount: o,
                                    isSubscriptionGated: A,
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
                                                this.renderInviteButton(),
                                                this.renderEditButton(),
                                            ],
                                        }),
                                ],
                            }),
                    }),
                    x && (0, s.jsx)(iv.A, { targetElementRef: I, markMenuItemPopoverAsDismissed: N }),
                ],
            });
        return h ? d(c(v)) : v;
    }
}
let i9 = tq(i2);
function i5(e) {
    let { channel: t, guild: n, disableSorting: l, isFavoriteCategory: i, muted: a, selected: o } = e,
        { hasActiveThreads: d, hasMoreActiveThreads: c } = (0, lf.NR)(t),
        h = (0, u.cf)([nQ.Ay], () => ({
            unread: nQ.Ay.hasUnread(t.id),
            ackMessageId: nQ.Ay.ackMessageId(t.id),
            isLowImportanceMention: nQ.Ay.getIsMentionLowImportance(t.id),
        })),
        A = (0, u.bG)([tP.Ay], () => tP.Ay.resolveUnreadSetting(t)),
        g = (0, u.cf)([eX.A, B.A], () => {
            let e = eX.A.getChannel(t.parent_id);
            return {
                canManageChannel: B.A.can(F.xBc.MANAGE_CHANNELS, t),
                canReorderChannel:
                    !0 !== l &&
                    (n.id === ni.Vc ||
                        (null != e ? B.A.can(F.xBc.MANAGE_CHANNELS, e) : B.A.can(F.xBc.MANAGE_CHANNELS, n))),
            };
        }),
        m = (0, u.bG)([n$.A], () => n$.A.shouldIndicateNewChannel(n.id, t.id)),
        { needSubscriptionToAccess: f, isSubscriptionGated: p } = (0, lm.A)(t.id),
        C = (0, u.bG)([tP.Ay], () => tP.Ay.isFavorite(n.id, t.id)),
        E = (0, iG.ni)(t),
        x = (0, ib.Gp)(t.id),
        N = im({
            channel: t,
            isChannelCollapsed: !1,
            isChannelSelected: o,
            isSubscriptionGated: p,
            needSubscriptionToAccess: f,
            isNewChannel: m,
            muted: a,
            enableActivities: x,
            resolvedUnreadSetting: A,
        }),
        _ = (0, il.Ay)(t),
        [S, I] = r.useState(!1),
        b = (0, iI.K)(
            r.useCallback((e) => {
                I(e);
            }, []),
        ),
        { showMenuItemPopover: G, markMenuItemPopoverAsDismissed: R } = (0, ij.z)({
            location: "TextChannel",
            isChannelSelected: o,
            isTargetInViewport: S,
            channelType: t.type,
            isPopoverAllowed: n.id !== ni.Vc,
        });
    return (0, u.bG)([iM.A, iy.Ay], () => iM.A.getChannelId() !== t.id && iy.Ay.isCurrentUserGuest(t.getGuildId()))
        ? null
        : (0, s.jsx)(i9, {
              ...h,
              ...g,
              ...e,
              hasActiveThreads: d,
              hasMoreActiveThreads: c,
              isSubscriptionGated: p,
              needSubscriptionToAccess: f,
              isNewChannel: m && e.canBeNewChannel,
              isFavoriteSuggestion: i && !C,
              channelIsContentGated: E,
              channelInfo: N,
              embeddedApps: _,
              resolvedUnreadSetting: A,
              hasChannelInfo: null != N,
              enableActivities: x,
              showMenuItemPopover: G,
              markMenuItemPopoverAsDismissed: R,
              channelItemRef: b,
          });
}
var i7 = n(900797),
    i6 = n(250719),
    i4 = n(636585),
    i8 = n(531685),
    se =
        (((i = {}).HIDDEN = "hidden"),
        (i.UNREAD = "unread"),
        (i.MENTIONS = "mentions"),
        (i.VOICE_CHANNELS = "voice-channels"),
        i);
let st = { mode: "hidden", mentionCount: 0, targetChannelId: null },
    sn = { topBar: st, bottomBar: st },
    sl = {},
    si = {};
function ss(e) {
    let t = eX.A.getChannel(e);
    return (
        !(null == t || null == t.getGuildId() || t.isGuildVocal()) &&
        !(t.isThread() ? lS.A.isMuted(t.id) : tP.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, eY.Y)(t)
    );
}
function sr(e) {
    let t = eX.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let l = tP.Ay.isGuildCollapsed(n),
        i = tP.Ay.isChannelMuted(n, t.id);
    return (!l || !i) && nQ.Ay.getMentionCount(e) > 0;
}
function sa(e) {
    return (
        !tP.Ay.isChannelMuted(e.guild_id, e.id) &&
        (e.isGuildStageVoice()
            ? e0.A.getMutableParticipants(e.id, e1.ip.SPEAKER).length > 0
            : eZ.Ay.getVoiceStatesForChannel(e).length > 0)
    );
}
function so(e) {
    let { guildChannels: t } = te.A.getGuildWithoutChangingGuildActionRows(e),
        n = t.getChannels(si[e] ?? []);
    if (null == n || 0 === n.length) return !1;
    let l = null,
        i = null,
        s = null,
        r = null,
        a = !0,
        d = !0,
        c = !1,
        u = t.getCategoryFromSection(t.voiceChannelsSectionNumber),
        h = u?.getShownChannelIds() ?? [],
        [A, g, m] = t.getSlicedChannels(n);
    for (let e = 0; e < g.length; e++) {
        let t = g[e];
        if (
            ((ss(t.id) || o().some(t.threadIds, ss)) && (d = !1),
            (sr(t.id) || o().some(t.threadIds, sr)) && (a = !1),
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
        for (let e = A.length - 1; e >= 0; e--) {
            let t = A[e];
            (ss(t.id) || o().some(t.threadIds, ss)) && (null == i && (i = t.id), (p = !0)),
                (sr(t.id) || o().some(t.threadIds, sr)) &&
                    (null == l && (l = t.id),
                    (f += nQ.Ay.getMentionCount(t.id)),
                    (f += o().sumBy(t.threadIds, nQ.Ay.getMentionCount)));
        }
    if (d || a)
        for (let e = 0; e < m.length; e++) {
            let t = m[e];
            if (!d && !a) break;
            (ss(t.id) || o().some(t.threadIds, ss)) && (null == r && (r = t.id), (E = !0)),
                (sr(t.id) || o().some(t.threadIds, sr)) &&
                    (null == s && (s = t.id),
                    (C += nQ.Ay.getMentionCount(t.id)),
                    (C += o().sumBy(t.threadIds, nQ.Ay.getMentionCount)));
        }
    let x = null,
        N = null,
        _ = u?.getChannelRecords() ?? [];
    a && C > 0
        ? (x = { mode: "mentions", mentionCount: C, targetChannelId: s })
        : !c && o().some(_, sa)
          ? (x = { mode: "voice-channels", mentionCount: 0, targetChannelId: null })
          : d && E && (x = { mode: "unread", mentionCount: 0, targetChannelId: r }),
        a && f > 0
            ? (N = { mode: "mentions", mentionCount: f, targetChannelId: l })
            : d && p && (N = { mode: "unread", mentionCount: 0, targetChannelId: i });
    let S = null != N && (null == x || ("mentions" !== x.mode && "mentions" === N.mode)),
        I = null != x && ("mentions" === x.mode || !S);
    return (sl[e] = { topBar: S ? (N ?? st) : st, bottomBar: I ? (x ?? st) : st }), !0;
}
let sd = o().throttle(so, 200);
function sc(e) {
    let { guildId: t } = e,
        n = th.A.getGuild(t);
    return null != n && !!n.features.has(F.GuildFeatures.COMMUNITY) && sd(t);
}
function su(e) {
    let { id: t } = e,
        n = eX.A.getChannel(t);
    if (null == n) return !1;
    let l = th.A.getGuild(n.guild_id);
    return null != l && !!l.features.has(F.GuildFeatures.COMMUNITY) && sd(n.guild_id);
}
function sh(e) {
    let { channel: t } = e,
        n = eX.A.getChannel(t.id);
    if (null == n) return !1;
    let l = th.A.getGuild(t.guild_id);
    return null != l && !!l.features.has(F.GuildFeatures.COMMUNITY) && sd(n.guild_id);
}
function sA(e) {
    let { channelId: t } = e,
        n = eX.A.getChannel(t);
    if (null == n) return !1;
    let l = th.A.getGuild(n.guild_id);
    return (
        null != l && !!l.features.has(F.GuildFeatures.COMMUNITY) && e4.A.getGuildId() === n.guild_id && sd(n.guild_id)
    );
}
function sg(e) {
    let { guildId: t } = e;
    return null != t && sd(t);
}
class sm extends u.Ay.Store {
    static displayName = "ChannelListUnreadsStore";
    initialize() {
        this.waitFor(te.A, eX.A, th.A, lS.A, nQ.Ay, e4.A, eZ.Ay, e0.A, tP.Ay);
    }
    getUnreadStateForGuildId(e) {
        return sl[e] ?? sn;
    }
}
let sf = new sm(eD.h, {
    UPDATE_CHANNEL_LIST_DIMENSIONS: function (e) {
        let { guildId: t, channelIds: n } = e,
            l = th.A.getGuild(t);
        return (
            null != l &&
            !!l.features.has(F.GuildFeatures.COMMUNITY) &&
            null != n &&
            !o().isEqual(si[t], n) &&
            ((si[t] = n), so(t))
        );
    },
    BULK_ACK: function (e) {
        let { channels: t } = e,
            n = !1;
        return (
            o()(t)
                .map((e) => {
                    let { channelId: t } = e;
                    return eX.A.getChannel(t)?.guild_id;
                })
                .filter(eJ.Vq)
                .uniq()
                .forEach((e) => {
                    let t = th.A.getGuild(e);
                    null != t && t.features.has(F.GuildFeatures.COMMUNITY) && sd(e) && (n = !0);
                }),
            n
        );
    },
    CHANNEL_ACK: sA,
    CHANNEL_DELETE: sh,
    CHANNEL_LOCAL_ACK: sA,
    MESSAGE_ACK: sA,
    MESSAGE_CREATE: sA,
    MESSAGE_DELETE_BULK: sA,
    MESSAGE_DELETE: sA,
    PASSIVE_UPDATE_V2: function (e) {
        let t = th.A.getGuild(e.guildId);
        return !!(e.channels.length > 0 && null != t && t.features.has(F.GuildFeatures.COMMUNITY)) && sd(e.guildId);
    },
    RESORT_THREADS: sA,
    THREAD_CREATE: sh,
    THREAD_DELETE: sh,
    THREAD_LIST_SYNC: sc,
    THREAD_MEMBER_UPDATE: su,
    THREAD_MEMBERS_UPDATE: su,
    THREAD_UPDATE: sh,
    BULK_CLEAR_RECENTS: sc,
    CATEGORY_COLLAPSE_ALL: sc,
    CATEGORY_EXPAND_ALL: sc,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = e4.A.getGuildId();
        if (null == n || !new Set(t.map((e) => e.guildId)).has(n)) return !1;
        let l = sl[n];
        return null != l && "voice-channels" === l.bottomBar.mode && sd(n);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: sg,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: sg,
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: t } = e;
        for (let e of t) null != e.guild_id && sd(e.guild_id);
    },
    USER_GUILD_SETTINGS_GUILD_UPDATE: sg,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: sg,
});
var sp = n(335543);
let sC = { friction: 30, tension: 300 };
function sE(e) {
    let { guildChannels: t, jumpToVoiceChannels: n } = e,
        l = t.getCategoryFromSection(t.voiceChannelsSectionNumber),
        i = (0, i6.A)(t.id),
        a = r.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), n();
            },
            [n],
        ),
        o = l?.getChannelRecords() ?? [],
        d = (0, nl.fK)({ channels: o, selectedChannelId: null, selectedVoiceChannelId: null, voiceStates: i });
    return (0, s.jsxs)(ee.D, {
        className: ep()(sp.M0, sp.OF),
        onClick: a,
        children: [
            (0, s.jsx)(S.H, { size: "custom", className: sp.Gs, width: 14, height: 14, color: "currentColor" }),
            (0, s.jsx)(N.E, {
                variant: "text-xs/semibold",
                className: sp.pM,
                children: K.intl.format(K.t["fDlr+F"], { count: d.length }),
            }),
            (0, s.jsx)(i4.A, {
                guildId: t.id,
                className: sp.J$,
                users: d.slice(0, 4),
                renderMoreUsers: () => null,
                max: 4,
                size: iU._3.SIZE_16,
            }),
        ],
    });
}
function sx(e) {
    let { position: t, guildChannels: n, guildChannelsVersion: l, jumpToVoiceChannels: i, jumpToChannel: a } = e,
        { bottomBar: o, topBar: d } = (0, u.cf)([sf], () => sf.getUnreadStateForGuildId(n.id)),
        c = (0, u.bG)([i8.A], () => i8.A.isFocused()),
        { mode: h, mentionCount: A, targetChannelId: g } = "bottom" === t ? o : d,
        m = h === se.HIDDEN,
        f = (0, eT.z)(
            {
                to: { transform: m ? ("bottom" === t ? "translateY(180%)" : "translateY(-180%)") : "translateY(0%)" },
                config: sC,
            },
            c ? "respect-motion-settings" : "animate-never",
        ),
        p = r.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), null != g && a(g);
            },
            [a, g],
        );
    return (0, s.jsx)("div", {
        className: ep()(sp.kL, { [sp.Mn]: "top" === t, [sp.sQ]: "bottom" === t }),
        children: (0, s.jsx)(eM.animated.div, {
            className: sp.pK,
            style: f,
            "aria-hidden": m,
            children: (() => {
                switch (h) {
                    case se.HIDDEN:
                        return (0, s.jsx)("div", { className: ep()(sp.M0, sp.Te) });
                    case se.UNREAD:
                        return (0, s.jsxs)(ee.D, {
                            className: sp.M0,
                            onClick: p,
                            children: [
                                "bottom" === t
                                    ? (0, s.jsx)(tI.a, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: sp.z_,
                                          height: 14,
                                          width: 14,
                                      })
                                    : (0, s.jsx)(i7.t, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: sp.z_,
                                          height: 14,
                                          width: 14,
                                      }),
                                (0, s.jsx)(N.E, {
                                    variant: "text-xs/semibold",
                                    color: "interactive-text-default",
                                    className: sp.pM,
                                    children: K.intl.string(K.t.FCRiT3),
                                }),
                            ],
                        });
                    case se.MENTIONS:
                        return (0, s.jsx)(ee.D, {
                            className: ep()(sp.M0, sp.vU),
                            onClick: p,
                            children: (0, s.jsx)(N.E, {
                                variant: "text-xs/semibold",
                                color: "badge-text-brand",
                                className: sp.pM,
                                children: K.intl.format(K.t.EQcLyp, { count: A }),
                            }),
                        });
                    case se.VOICE_CHANNELS:
                        return (0, s.jsx)(sE, { jumpToVoiceChannels: i, guildChannels: n, guildChannelsVersion: l });
                    default:
                        return;
                }
            })(),
        }),
    });
}
var sN = n(310953),
    s_ = n(173860);
function sS(e) {
    let t = eX.A.getChannel(e);
    return (
        null != t &&
        null != t.getGuildId() &&
        !(t.isThread() ? lS.A.isMuted(t.id) : tP.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, eY.Y)(t)
    );
}
function sI(e) {
    let t = eX.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let l = tP.Ay.isGuildCollapsed(n),
        i = tP.Ay.isChannelMuted(n, t.id);
    return (!l || !i) && nQ.Ay.getMentionCount(e) > 0;
}
let sb = r.forwardRef(function (e, t) {
    let { guildId: n, guildChannels: l, guildChannelsVersion: i, ...r } = e,
        a = (0, sN.W)(n, l, i, { withVoiceChannels: !1 }, { ignoreRecents: !0 }),
        o = (0, u.bG)([i8.A], () => i8.A.isFocused());
    return (0, s.jsx)(s_.A, { ref: t, ...r, isUnread: sS, isMentioned: sI, items: a, animate: o });
});
var sG = n(81466);
function sR(e) {
    let { guild: t, selected: l } = e,
        { hasUnread: i, mentionCount: r } = (0, u.cf)(
            [nQ.Ay],
            () => ({
                hasUnread: nQ.Ay.hasUnread(t.id, nb.P.GUILD_EVENT),
                mentionCount: nQ.Ay.getMentionCount(t.id, nb.P.GUILD_EVENT),
            }),
            [t.id],
        ),
        a = (0, u.bG)([tP.Ay], () => tP.Ay.isMuteScheduledEventsEnabled(t.id));
    async function o() {
        await (0, $.openModalLazy)(async () => {
            let { default: e } = await Promise.all([
                n.e("85948"),
                n.e("12940"),
                n.e("52443"),
                n.e("11266"),
                n.e("4278"),
                n.e("89881"),
                n.e("43513"),
                n.e("47626"),
                n.e("56373"),
                n.e("70644"),
                n.e("49347"),
                n.e("64287"),
                n.e("53934"),
                n.e("68248"),
                n.e("69647"),
                n.e("98354"),
                n.e("11588"),
            ]).then(n.bind(n, 15823));
            return (n) => (0, s.jsx)(e, { ...n, guildId: t.id });
        }),
            (0, nX.Dr)(T.M.GUILD_HEADER_EVENT_UPSELL);
    }
    let d = (0, tg.Ay)(t.id),
        c = d.length > 0 ? K.intl.formatToPlainString(K.t.IBdqSu, { number: d.length }) : K.intl.string(K.t.tlopTM);
    return (0, s.jsx)(H.G, {
        id: `upcoming-events-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(sG.C, { size: "md", color: "currentColor", className: e }),
        text: c,
        selected: l,
        onClick: o,
        onContextMenu: function (e) {
            (0, eL.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("26386"), n.e("19990")]).then(n.bind(n, 221621));
                return (n) => (0, s.jsx)(e, { ...n, guildId: t.id });
            });
        },
        showUnread: i && !a,
        trailing: !a && r > 0 ? (0, s.jsx)(U.hV, { className: nz.Do, disableColor: !0, count: r }) : null,
    });
}
var sv = n(845056),
    sj = n(765379),
    sy = n(271683),
    sM = n(725613),
    sT = n(857253),
    sL = n(360729),
    sU = n(22231),
    sD = n(241326),
    sO = n(750943),
    sP = n(743674),
    sV = n(888697),
    sw = n(26741),
    sH = n(493819),
    sB = n(722884),
    sk = n(844045),
    sF = n(31950);
function sK(e) {
    let { channel: t, imageUrl: l, animatedUrl: i, bannerHash: a, canModifyHangout: o } = e,
        d = (0, sP.S)(l),
        c = (0, Y.je)(t),
        u = (0, sw.P9)({ guildId: t.guild_id, channelId: t.id, bannerHash: a }),
        h = r.useCallback(() => {
            (0, sw.J_)({ guildId: t.guild_id, channelId: t.id }), (0, sB.A)({ channel: t });
        }, [t]),
        A = r.useCallback(() => {
            (0, sw.nK)({ guildId: t.guild_id, channelId: t.id }), (0, sV.e2)(t.id);
        }, [t.guild_id, t.id]),
        g = r.useCallback(
            (e) => {
                c
                    ? (0, eL.L3)(e, async () => {
                          let { default: e } = await n.e("55558").then(n.bind(n, 316421));
                          return (n) => (0, s.jsx)(e, { ...n, channel: t });
                      })
                    : e.preventDefault();
            },
            [t, c],
        );
    return (0, s.jsxs)("div", {
        ref: u,
        className: sF.rs,
        onContextMenu: g,
        children: [
            (0, s.jsx)("div", {
                className: sF.ZS,
                style: null != d ? { backgroundColor: d } : void 0,
                children: (0, s.jsx)(sH.A, { imageUrl: l, animatedUrl: i, className: sF.Sl }),
            }),
            o
                ? (0, s.jsxs)("div", {
                      className: sF.n_,
                      children: [
                          (0, s.jsx)(Q.m, {
                              text: K.intl.string(sk.default.XJ4UpB),
                              children: (0, s.jsx)(ee.D, {
                                  className: sF.HF,
                                  onClick: h,
                                  children: (0, s.jsx)(sU.R, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                          (0, s.jsx)(Q.m, {
                              text: K.intl.string(sk.default.XV4qT6),
                              children: (0, s.jsx)(ee.D, {
                                  className: sF.HF,
                                  onClick: A,
                                  children: (0, s.jsx)(sD.u, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function sz(e) {
    let { channel: t } = e,
        n = (0, sw.dX)({ guildId: t.guild_id, channelId: t.id }),
        l = r.useCallback(() => {
            (0, sw.J_)({ guildId: t.guild_id, channelId: t.id }), (0, sB.A)({ channel: t });
        }, [t]);
    return (0, s.jsx)("div", {
        ref: n,
        className: sF._o,
        children: (0, s.jsxs)(ee.D, {
            className: sF.hH,
            onClick: l,
            children: [
                (0, s.jsx)(sO.X, { size: "xs", color: "currentColor" }),
                (0, s.jsx)(N.E, {
                    variant: "text-sm/medium",
                    color: "currentColor",
                    children: K.intl.string(sk.default.NGcIOF),
                }),
            ],
        }),
    });
}
function sW(e) {
    let { channel: t, isConnected: n } = e,
        { enableHangoutWindow: l } = (0, W.Dm)({ guildId: t.guild_id, location: "HangoutWindow" }),
        i = (0, Y.W6)(t),
        a = n && i,
        o = t.voiceHangout,
        d = o?.banner_hash,
        c = r.useMemo(() => {
            if (null == d || null == t.guild_id) return null;
            let e = (0, Y.Sq)({ guildId: t.guild_id, bannerHash: d });
            return null == e ? null : { bannerHash: d, ...e };
        }, [t.guild_id, d]);
    return l
        ? null != c
            ? (0, s.jsx)(sK, {
                  channel: t,
                  imageUrl: c.imageUrl,
                  animatedUrl: c.animatedUrl,
                  bannerHash: c.bannerHash,
                  canModifyHangout: a,
              })
            : a
              ? (0, s.jsx)(sz, { channel: t })
              : null
        : null;
}
var sY = n(290863),
    sq = n(461213),
    sX = n(532622),
    sZ = n(882840),
    sJ = n(46054),
    s$ = n(514416),
    sQ = n(992595);
function s0(e) {
    let { channel: t, connected: n, hovered: l, subtitle: i, onClick: a } = e,
        o = (0, sZ.l)(t),
        { enableHangoutWindow: d } = (0, W.Dm)({ guildId: t.guild_id, location: "VoiceChannelStatus" }),
        c = d && (0, Y.lr)(t),
        u = null != o && o.length > 0,
        h = (0, sX.Ay)(t, !0),
        A = null != i && i.length > 0;
    if (
        (r.useEffect(() => {
            u && lo.default.track(F.HAw.VOICE_CHANNEL_TOPIC_VIEWED, { channel_id: t.id, guild_id: t.guild_id });
        }, [u, t.id, t.guild_id]),
        null == t.guild_id)
    )
        return null;
    let g = ep()(s$.Ui, n && h ? s$.BI : null);
    return u
        ? (0, s.jsx)(ee.D, {
              className: g,
              onClick: h ? a : void 0,
              children: (0, s.jsx)(N.E, {
                  variant: "text-xs/medium",
                  className: ep()(s$.qS, sQ.PT),
                  children: (0, s.jsx)(tN.A, { children: sJ.A.parseVoiceChannelStatus(o, !0, { channelId: t.id }) }),
              }),
          })
        : n && h && !c && (!A || l)
          ? (0, s.jsxs)(ee.D, {
                className: g,
                onClick: a,
                children: [
                    (0, s.jsx)(N.E, {
                        variant: "text-xs/medium",
                        className: s$.qS,
                        children: K.intl.string(K.t.Mgpxiw),
                    }),
                    (0, s.jsx)(sU.R, { color: "currentColor", className: s$.rD, size: "xxs" }),
                ],
            })
          : A
            ? (0, s.jsx)(tN.A, { children: i })
            : null;
}
class s1 extends nS {
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
            unverifiedAccount: l,
            needSubscriptionToAccess: i,
            mentionCount: s,
            isSuggestedSection: r,
            guildRoomsEnabled: a,
        } = this.props;
        l && this.setState({ shouldShowGuildVerificationPopout: !0 });
        let o = s > 0;
        o && lw.A.updateChatOpen(n.id, !0),
            lg.A.handleVoiceConnect({
                channel: n,
                connected: t,
                needSubscriptionToAccess: i,
                routeDirectlyToChannel: o || a,
                locked: e,
                transitionExtras: r ? { source: l2.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
            });
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            l = th.A.getGuild(t.getGuildId());
        null != l &&
            (0, eL.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("26132"),
                    n.e("46652"),
                    n.e("93103"),
                    n.e("93190"),
                    n.e("91763"),
                    n.e("38730"),
                    n.e("35321"),
                    n.e("50033"),
                    n.e("34971"),
                    n.e("3998"),
                    n.e("43266"),
                    n.e("9004"),
                    n.e("74610"),
                    n.e("30997"),
                    n.e("12255"),
                    n.e("40959"),
                    n.e("79995"),
                    n.e("42339"),
                    n.e("44058"),
                    n.e("91377"),
                    n.e("35723"),
                    n.e("12520"),
                    n.e("66540"),
                    n.e("29542"),
                    n.e("19690"),
                    n.e("26792"),
                    n.e("12052"),
                    n.e("18663"),
                    n.e("99990"),
                    n.e("99854"),
                ]).then(n.bind(n, 119357));
                return (n) => (0, s.jsx)(e, { ...n, channel: t, guild: l });
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
        return (0, nl.Pd)(e, lC.A, th.A);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        if (n) return ed.ZS;
        if (null != t)
            if (e > t) return ed.mU;
            else return ed.TR;
        return ed.fx;
    }
    handleClick = () => {
        let { channel: e } = this.props,
            t = e.getGuildId();
        null != t && (0, lF.V)(t) && (0, lk.Ze)(t), this.handleVoiceConnect();
    };
    handleVoiceStatusClick = (e) => {
        let { connected: t, channel: n } = this.props;
        t && (e.stopPropagation(), (0, sy.A)({ channel: n }));
    };
    renderSubtitle() {
        let { channel: e, connected: t } = this.props,
            n = iR(this.props.subtitle)?.subtitle,
            { hovered: l } = this.state;
        return (0, s.jsx)(s0, {
            onClick: this.handleVoiceStatusClick,
            channel: e,
            connected: t,
            subtitle: n,
            hovered: l,
        });
    }
    renderVoiceUsers() {
        let { channel: e, voiceStates: t, collapsed: n, withGuildIcon: l, tabIndex: i } = this.props;
        return (0, s.jsx)(lT.A, {
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
        return !(null != n && n.length > 0) || l ? null : (0, s.jsx)(sW, { channel: e, isConnected: t });
    }
    renderPopout = () => {
        let { channel: e } = this.props,
            { shouldShowGuildVerificationPopout: t } = this.state;
        return t
            ? (0, s.jsx)(l3, { type: l1.VOICE, guildId: e.guild_id, closePopout: this.closeGuildVerificationPopout })
            : null;
    };
    renderOpenChatButton = () => {
        let { channel: e, locked: t, forceShowButtons: n, isSuggestedSection: l } = this.props;
        if (!t)
            return (0, s.jsx)(Q.m, {
                asContainer: !0,
                text: K.intl.string(K.t.ZXxLQg),
                children: (0, s.jsx)(ee.D, {
                    className: ep()(ed.Xs, n ? ed.Tf : null),
                    onClick: () => {
                        lw.A.updateChatOpen(e.id, !0),
                            (0, l9.iN)(e.id, l ? { source: l2.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
                    },
                    "aria-label": K.intl.string(K.t.ZXxLQg),
                    children: (0, s.jsx)(I.o, { size: "xs", color: "currentColor", className: ed.gE }),
                }),
            });
    };
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e ? null : (0, s.jsx)("div", { className: ed.yW, children: e });
    }
    getTooltipText = () => {
        let { connected: e } = this.props;
        return this.isFull() && !e ? K.intl.string(K.t.rZfiNq) : null;
    };
    render() {
        let {
                channel: e,
                selected: t,
                connected: n,
                unread: l,
                resolvedUnreadSetting: i,
                mentionCount: r,
                locked: a,
                connectChannelDropTarget: o,
                connectChannelDragSource: d,
                connectUserDropTarget: c,
                connectDragPreview: u,
                canReorderChannel: h,
                canMoveMembers: A,
                showTutorial: g,
                hasActiveEvent: m,
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
            R = (0, s.jsxs)("li", {
                ref: this.ref,
                className: ep()(this.getModeClass(), { [ed.r9]: this.isDisabled(), [ed.fy]: _ }),
                "data-dnd-name": (0, tX.m1)(e, l$.default, it.A),
                children: [
                    _ &&
                        (0, s.jsxs)(s.Fragment, {
                            children: [
                                (0, s.jsx)("div", { className: ed.UQ }),
                                (0, s.jsx)("div", { className: ed.l0 }),
                            ],
                        }),
                    (0, s.jsx)("div", {
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        children: (0, s.jsx)(lV.Y, {
                            targetElementRef: this.channelItemRef,
                            position: "right",
                            renderPopout: this.renderPopout,
                            onRequestClose: this.closeGuildVerificationPopout,
                            spacing: 17,
                            shouldShow: b,
                            children: () =>
                                (0, s.jsx)(Q.m, {
                                    text: this.getTooltipText(),
                                    children: (0, s.jsxs)(nI.Ay, {
                                        ref: this.channelItemRef,
                                        className: ed.Ki,
                                        iconClassName: ep()({ [ed.Gj]: m || x || G }),
                                        hasActiveEvent: m,
                                        channel: e,
                                        selected: !C && t,
                                        connected: n,
                                        unread: n ? l : void 0,
                                        resolvedUnreadSetting: i,
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
                                        "aria-label": (0, lB.Ay)({
                                            channel: e,
                                            unread: l,
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
            A && (R = c(R)),
            h && (R = o(d(R))),
            g &&
                (R = (0, s.jsx)(t5.A, {
                    childRef: this.ref,
                    tutorialId: "voice-conversations",
                    position: "right",
                    offsetX: -20,
                    children: R,
                })),
            R
        );
    }
}
let s3 = tq((0, lH.F)(s1));
function s2(e) {
    let {
            guild: t,
            channel: n,
            disableSorting: l,
            isFavoriteCategory: i,
            selected: r,
            collapsed: a,
            voiceStates: o,
        } = e,
        d = (0, u.cf)([nQ.Ay], () => ({ unread: nQ.Ay.hasUnread(n.id), mentionCount: nQ.Ay.getMentionCount(n.id) })),
        c = (0, u.bG)([tP.Ay], () => tP.Ay.resolveUnreadSetting(n)),
        h = (0, u.cf)([eX.A, lJ.A, B.A], () => {
            let e = eX.A.getChannel(n.parent_id),
                i = lJ.A.getCheck(n.guild_id);
            return {
                canManageChannel: B.A.can(F.xBc.MANAGE_CHANNELS, n),
                canReorderChannel:
                    !0 !== l &&
                    (t.id === ni.Vc ||
                        (null != e ? B.A.can(F.xBc.MANAGE_CHANNELS, e) : B.A.can(F.xBc.MANAGE_CHANNELS, t))),
                canMoveMembers: B.A.can(F.xBc.MOVE_MEMBERS, n),
                locked: !B.A.can(F.xBc.CONNECT, n),
                bypassLimit: B.A.can(F.xBc.MOVE_MEMBERS, n),
                unverifiedAccount: !i.canChat,
            };
        }),
        A = (0, u.bG)([lC.A], () => lC.A.hasVideo(n.id)),
        { enabled: g } = sL.A.useExperiment({ guildId: t.id, location: "VoiceChannel" }),
        m = (0, il.Ay)(n),
        f = (0, u.yK)([sq.A, sY.A, l4.default], () => {
            if (null == o || 0 === o.length) return [];
            let e = l4.default.getId(),
                t = [];
            for (let { user: l } of o)
                for (let i of l.id === e ? sq.A.getActivities() : sY.A.getActivities(l.id, n.guild_id))
                    !(0, sv.N)(i) || (0, sj.A)(i) || null == i.name || t.includes(i.name) || t.push(i.name);
            return t;
        }, [o, n.guild_id]),
        p = (0, tX.Ay)(n),
        C = (0, tg.Qs)(n.id),
        E = (0, u.bG)([sM.A], () => sM.A.getStartTime(n), [n]),
        { isSubscriptionGated: x, needSubscriptionToAccess: N } = (0, lm.A)(n.id),
        _ = (0, sT.A)(),
        S = (0, u.bG)([tP.Ay], () => tP.Ay.isFavorite(t.id, n.id)),
        I = e.connected || _?.channelId === n.id,
        { enableHighlight: b, enableWaveformIcon: G } = (0, nt.b)(t.id, "VoiceChannel"),
        R = null != o && o.length > 0,
        v = b && R,
        j = G && R,
        y = im({
            channel: n,
            isChannelSelected: r,
            isChannelCollapsed: a,
            voiceStates: o,
            isSubscriptionGated: x,
            needSubscriptionToAccess: N,
            enableConnectedUserLimit: !0,
            enableActivities: !0,
        }),
        M = I && null == y;
    return (0, s.jsx)(s3, {
        channelName: p,
        embeddedApps: m,
        nonEmbeddedActivityNames: f,
        embeddedActivityType: F.$pd.PLAYING,
        video: A,
        hasActiveEvent: null != C,
        isSubscriptionGated: x,
        needSubscriptionToAccess: N,
        ...d,
        ...h,
        ...e,
        connected: I,
        isFavoriteSuggestion: i && !S,
        forceShowButtons: M,
        channelInfo: y,
        resolvedUnreadSetting: c,
        hasChannelInfo: null != y,
        hasStartTime: null != E,
        voiceChannelStartTime: E,
        shouldHighlightChannel: v,
        shouldUseAnimatedWaveform: j,
        guildRoomsEnabled: g,
    });
}
n(131955);
var s9 = n(335993);
function s5(e) {
    return (
        h.A.modules.channels.NAME_LINE_HEIGHT.resolve({ density: e }) +
        2 * h.A.space.SPACE_XXS.resolve({ density: e }) +
        2
    );
}
class s7 extends r.PureComponent {
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
        this.setState({ initialized: !0 }), (0, tn.Ei)(this.getVisibleChannels);
    }
    componentWillUnmount() {
        this.updateChannelListScroll.cancel();
    }
    componentDidUpdate(e, t) {
        let { scrollToChannel: n, guildId: l, selectedChannelId: i } = this.props,
            { initialized: s } = this.state,
            { scrollTop: r } = e7.A.getGuildDimensions(l);
        null != n
            ? (this.scrollToChannel(n), b.A.clearChannelListScrollTo(l))
            : l !== e.guildId
              ? null != r && this.scrollTo(r)
              : i !== e.selectedChannelId
                ? this.scrollToChannel(i)
                : !t.initialized &&
                  s &&
                  (null == r && null != i
                      ? this.scrollToChannel(i, !1, 8, this.handleListScroll)
                      : this.scrollTo(r ?? 0, this.handleListScroll)),
            this.testShouldSkipTutorial();
    }
    getSectionRowsFromChannel(e) {
        return this.props.guildChannels.getSectionRowsFromChannel(e);
    }
    setListRef = (e) => {
        let { ref: t } = this.context;
        (t.current = e?.getScrollerNode() ?? null), (this._list = e);
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
                    a = s.threadOffset * s5(r);
                i.scrollIntoViewRect({ start: e + a, end: e + a + s5(r), padding: n, animate: t, callback: l });
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
            if ((0, A.o)(s) && s.section >= this.props.guildChannels.favoritesSectionNumber) {
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
            null != e && e(t), this.updateChannelListScroll(n);
        }
        null != this.unreadTopRef.current && this.unreadTopRef.current.calculateState(),
            null != this.unreadBottomRef.current && this.unreadBottomRef.current.calculateState();
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
                if (l < e8.bK || e.isPlaceholderRow(l, i)) return !1;
                let s = e.getChannelFromSectionRow(l, i);
                if (null == s) return !1;
                let { channel: r, category: a } = s;
                return (
                    !!(0, e5.ig)(r.record.type) &&
                    (!a.isCollapsed || !a.isMuted) &&
                    !r.isMuted &&
                    !!t.isItemVisible(l, i, !0) &&
                    (0, eY.Y)(r.record)
                );
            })
        );
    }
    updateChannelListScroll = (0, a.throttle)((e) => {
        b.A.updateChannelListScroll(this.props.guildId, e, this.getVisibleChannels());
    }, 100);
    getSectionHeight = (e) => {
        let { guild: t, guildChannels: n, density: l } = this.props,
            i = "compact" === l ? 8 : 12;
        if (e === e8.PU) return i;
        if (e === e8.bK) return t.features.has(F.GuildFeatures.HUB) ? 0 : i;
        if (e === n.voiceChannelsSectionNumber) {
            let t = n.getCategoryFromSection(e);
            if (null == t || t.isEmpty()) return 0;
            if (t.isCollapsed) return 49;
            let l = n.getChannelFromSectionRow(e, 0)?.channel;
            return null == l || l.record.type === F.rbe.GUILD_CATEGORY ? 9 : 25;
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
            let { hasDivider: d, canHaveVoiceSummary: c } = ns(n, r, t),
                u = d ? (a ? 9 : 12) : 0;
            if (!c || t === e8.PU) return u;
            let h = n.getNamedCategoryFromSection(t);
            return null == h ||
                !(function (e) {
                    let { category: t, voiceStates: n, selectedChannelId: l, selectedVoiceChannelId: i } = e;
                    return (
                        (function (e) {
                            let { category: t, voiceStates: n, selectedChannelId: l, selectedVoiceChannelId: i } = e;
                            return !0 !== tD.A.isCollapsed(t.record.id)
                                ? []
                                : t.getChannelRecords().filter((e) => {
                                      if (!B.A.can(F.xBc.VIEW_CHANNEL, e)) return !1;
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
            a = s5(r);
        if (e === e8.PU) {
            let e = n.getGuildActionSection();
            return e.isEmpty()
                ? 0
                : e.getRow(t) === tx.n.GUILD_PREMIUM_PROGRESS_BAR
                  ? e.getRows().length > 1
                      ? 69
                      : 57
                  : a;
        }
        if (n.isPlaceholderRow(e, t)) return 0;
        let o = n.getChannelFromSectionRow(e, t);
        if (null == o) return 0;
        let { channel: d, category: c } = o;
        if (d.record.type === F.rbe.GUILD_CATEGORY) return 40;
        for (let e of d.threadIds) {
            let { density: t = "default" } = this.props;
            a += s5(t);
            let n = l[d.id];
            null != n && n.length > 0 && (a += s === e ? 32 * n.length : 32);
        }
        if (d.record.isGuildVoice()) {
            let e = l[d.id];
            if (null != e && e.length > 0) {
                let t = 32 * e.length;
                if (
                    (d.isCollapsed || c.isCollapsed ? (t = 32) : (0, X.Ln)(d.record) && (t += 32),
                    (a += t + h.A.space.SPACE_XS.resolve({ density: r })),
                    !d.isCollapsed && !c.isCollapsed)
                ) {
                    let { enableHangoutWindow: e } = (0, W.kY)({ guildId: d.record.guild_id, location: "ChannelList" });
                    e && ((0, Y.lr)(d.record) ? (a += 134) : s === d.id && (a += 44));
                }
            }
            d.id === this.props.rtcConnectedChannelId && (a += 32 * this.props.rtcDesyncedVoiceStatesCount);
        }
        if (((null != d.subtitle || s === d.id) && (a += 16), d.record.isGuildStageVoice())) {
            let e = l[d.id] ?? [],
                t = i[d.id] ?? [];
            if (null != e && e.length > 0) {
                let e = 32 * t.length;
                d.isCollapsed || c.isCollapsed ? (e = Math.ceil(e / 5)) : (e += 32), (a += e + 8);
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
        null != n && s.includes(n) && (i = (0, Z.xb)(t)), (0, Z.DD)(e.id, s, i);
    };
    renderSection = (e) => {
        let { section: t } = e,
            {
                guildChannels: n,
                guildChannelsVersion: l,
                guild: i,
                selectedChannelId: r,
                disableManageChannels: a,
            } = this.props;
        return (0, s.jsx)(
            t8,
            {
                sectionIndex: t,
                guild: i,
                guildChannels: n,
                guildChannelsVersion: l,
                selectedChannelId: r,
                disableManageChannels: a,
            },
            (function (e, t) {
                switch (e) {
                    case e8.PU:
                        return "hoisted-spacer";
                    case e8.bK:
                        return "uncategorized-spacer";
                    case e8.HP:
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
                selectedChannelId: a,
                selectedVoiceChannel: o,
                selectedVoiceChannelId: d,
                guildChannels: c,
                voiceStates: u,
                disableManageChannels: h,
                stageChannelSpeakerVoiceStates: A,
                optInEnabled: g,
                withGuildIcon: m,
            } = this.props;
        if (t === e8.PU) {
            let e = c.getGuildActionSection(),
                t = e.getRow(n);
            if (null == t) return null;
            switch (t) {
                case tx.n.GUILD_HUB_HEADER_OPTIONS:
                    return (0, s.jsx)(
                        q.A,
                        { guild: l, channel: e6.Ay.getDefaultChannel(l.id) },
                        tx.n.GUILD_HUB_HEADER_OPTIONS,
                    );
                case tx.n.GUILD_PREMIUM_PROGRESS_BAR:
                    let i = e.getRows();
                    return (0, s.jsx)(eW, { guild: l, withMargin: i.length > 1 }, tx.n.GUILD_PREMIUM_PROGRESS_BAR);
                case tx.n.GUILD_HOME:
                    return (0, s.jsx)(n3, { guild: l, selected: a === es.VV.GUILD_HOME }, tx.n.GUILD_HOME);
                case tx.n.GUILD_SCHEDULED_EVENTS:
                    return (0, s.jsx)(
                        sR,
                        { guild: l, selected: a === tx.n.GUILD_SCHEDULED_EVENTS },
                        tx.n.GUILD_SCHEDULED_EVENTS,
                    );
                case tx.n.GUILD_ROLE_SUBSCRIPTIONS:
                    return (0, s.jsx)(
                        lt,
                        { guild: l, selected: a === es.VV.ROLE_SUBSCRIPTIONS },
                        tx.n.GUILD_ROLE_SUBSCRIPTIONS,
                    );
                case tx.n.GUILD_SHOP:
                    return (0, s.jsx)(lh, { guild: l, selected: a === es.VV.GUILD_SHOP }, tx.n.GUILD_SHOP);
                case tx.n.GUILD_GAME_SHOP:
                    return (0, s.jsx)(nY, { guild: l, selected: a === es.VV.GAME_SHOP }, tx.n.GUILD_GAME_SHOP);
                case tx.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
                    return (0, s.jsx)(n6, { guild: l });
                case tx.n.CHANNELS_AND_ROLES:
                    return (0, s.jsx)(
                        n0,
                        { guild: l, selected: a === es.VV.CHANNEL_BROWSER || a === es.VV.CUSTOMIZE_COMMUNITY },
                        tx.n.CHANNELS_AND_ROLES,
                    );
                case tx.n.GUILD_DIRECTORY:
                    return (0, s.jsx)(
                        nG,
                        { guild: l, selectedChannelId: a, disableManageChannels: h },
                        tx.n.GUILD_DIRECTORY,
                    );
                case tx.n.GUILD_MOD_DASH_MEMBER_SAFETY:
                    return (0, s.jsx)(
                        z,
                        { guild: l, selected: a === es.VV.MEMBER_SAFETY },
                        tx.n.GUILD_MOD_DASH_MEMBER_SAFETY,
                    );
                case tx.n.GUILD_BOOSTS:
                    return (0, s.jsx)(ey, { guildId: l.id, selected: a === es.VV.GUILD_BOOSTS }, tx.n.GUILD_BOOSTS);
                case tx.n.GAME_SERVERS:
                    return (0, s.jsx)(em, { guildId: l.id, selected: a === es.VV.GAME_SERVERS }, tx.n.GAME_SERVERS);
                case tx.n.GAME_SERVERS_EMPTY:
                    return (0, s.jsx)(
                        ec,
                        { guildId: l.id, selected: a === es.VV.GAME_SERVERS },
                        tx.n.GAME_SERVERS_EMPTY,
                    );
                case tx.n.GUILD_OFFICIAL_MESSAGES:
                    return (0, s.jsx)(
                        n8,
                        { guild: l, selected: a === es.VV.GUILD_OFFICIAL_MESSAGES },
                        tx.n.GUILD_OFFICIAL_MESSAGES,
                    );
                default:
                    return null;
            }
        }
        if (c.isPlaceholderRow(t, n)) return null;
        let f = c.getChannelFromSectionRow(t, n);
        if (null == f) return null;
        let { category: p, channel: C } = f,
            E = p instanceof e8.xu,
            x = C.record,
            N = `${t}${C.id}`;
        switch (x.type) {
            case F.rbe.GUILD_ANNOUNCEMENT:
            case F.rbe.GUILD_TEXT:
            case F.rbe.GUILD_FORUM:
            case F.rbe.GUILD_MEDIA:
            case F.rbe.DM:
            case F.rbe.GROUP_DM:
                return (0, s.jsxs)(
                    r.Fragment,
                    {
                        children: [
                            (0, s.jsx)(i5, {
                                channel: x,
                                guild: l,
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
                                ? (0, s.jsx)(lP, {
                                      withGuildIcon: m,
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
            case F.rbe.GUILD_STAGE_VOICE:
                return (0, s.jsx)(
                    ix,
                    {
                        channel: x,
                        guild: l,
                        position: C.position,
                        selected: a === C.id,
                        connected: d === C.id,
                        collapsed: C.isCollapsed || p.isCollapsed,
                        voiceStates: u[C.id] ?? [],
                        speakerVoiceStates: A[C.id] ?? [],
                        disableManageChannels: h,
                        isFavoriteCategory: E,
                        isSuggestedSection: t === c.recentsSectionNumber,
                    },
                    N,
                );
            case F.rbe.GUILD_VOICE:
                return (0, s.jsx)(
                    s2,
                    {
                        channel: x,
                        guild: l,
                        position: C.position,
                        selected: a === C.id,
                        connected: d === C.id,
                        collapsed: C.isCollapsed || p.isCollapsed,
                        voiceStates: u[C.id],
                        subtitle: C.subtitle,
                        disableManageChannels: h,
                        showTutorial: C.isFirstVoiceChannel,
                        isFavoriteCategory: E,
                        withGuildIcon: m,
                        isSuggestedSection: t === c.recentsSectionNumber,
                    },
                    N,
                );
            case F.rbe.GUILD_STORE:
                return (0, s.jsx)(iS, { channel: x, guild: l, position: C.position, selected: a === C.id }, N);
            case F.rbe.GUILD_CATEGORY:
                if (t !== c.voiceChannelsSectionNumber) return null;
                return (0, s.jsx)(t9, { channel: x }, `readonly-${x.id}`);
            case F.rbe.PUBLIC_THREAD:
            case F.rbe.PRIVATE_THREAD:
            case F.rbe.ANNOUNCEMENT_THREAD:
                return (0, s.jsx)(
                    i5,
                    {
                        channel: x,
                        guild: l,
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
                guildChannelsVersion: l,
                voiceStates: i,
                selectedChannelId: r,
                selectedVoiceChannelId: a,
                optInEnabled: o,
                guildId: d,
            } = this.props;
        return (0, s.jsx)(
            na,
            {
                guildId: d,
                guildChannels: n,
                guildChannelsVersion: l,
                sectionIndex: t,
                voiceStates: i,
                selectedChannelId: r,
                selectedVoiceChannelId: a,
                optInEnabled: o,
            },
            (function (e, t, n) {
                if (e === t.voiceChannelsSectionNumber) return "voice-channels-button";
                let { hasDivider: l, canHaveVoiceSummary: i } = ns(t, n, e);
                return `section-footer-${e}${l ? "-divider" : ""}${i ? "-voice-summary" : ""}`;
            })(t, n, o),
        );
    };
    renderTopUnread() {
        let { topMention: e, bottomUnread: t, bottomMention: n, isUnreadVisible: l } = this.state,
            { guildId: i, guildChannels: r, guildChannelsVersion: a } = this.props;
        return (0, s.jsx)("div", {
            className: t4.Eo,
            children: (0, s.jsx)(sb, {
                ref: this.unreadTopRef,
                textUnread: K.intl.string(K.t.FCRiT3),
                textMention: K.intl.string(K.t["8zH0LJ"]),
                hide: null == e && (l || null != t || null != n),
                className: t4.Vq,
                barClassName: t4.bu,
                guildId: i,
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
            { bottomMention: l, isUnreadVisible: i } = this.state;
        return (0, s.jsx)(sb, {
            reverse: !0,
            ref: this.unreadBottomRef,
            textUnread: K.intl.string(K.t.FCRiT3),
            textMention: K.intl.string(K.t["8zH0LJ"]),
            hide: null == l && i,
            className: t4.di,
            barClassName: t4.bu,
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
        if (e !== e8.PU) {
            if (null == t)
                return e === e8.HP
                    ? "favorites-header"
                    : e === n.recentsSectionNumber
                      ? "recents-header"
                      : e === n.voiceChannelsSectionNumber
                        ? "voice-channels"
                        : e === e8.bK
                          ? "uncategorized-header"
                          : n.getNamedCategoryFromSection(e)?.id;
            if (!n.isPlaceholderRow(e, t)) return n.getChannelFromSectionRow(e, t)?.channel?.id;
        }
    };
    renderList() {
        let { guildChannels: e, guildBanner: t, selectedGuildId: n, density: l } = this.props,
            i = {};
        (0, M.ai)(n) && (i["data-favorites"] = !0);
        let { ref: r, ...a } = this.context,
            o = 0;
        null != t && (o = 84);
        let d = "compact" === l ? 8 : 12;
        return (0, s.jsx)(g.sk, {
            children: (t) =>
                (0, s.jsx)(
                    m.OZ,
                    {
                        ref: this.setListRef,
                        className: t4.XG,
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
                        innerAriaLabel: K.intl.string(K.t.OGiMXJ),
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
        if (!e9.A.shouldShow("voice-conversations")) return;
        let { guildChannels: e } = this.props,
            t = e.getFirstVoiceChannel();
        if (null == t) return void e2.X8("voice-conversations");
        let n = this._list;
        if (null != n)
            for (let { section: e, row: l } of this.getSectionRowsFromChannel(t.id))
                n.isItemVisible(e, l) || e2.X8("voice-conversations");
    };
    render() {
        let { guildChannels: e, guildChannelsVersion: t, showNewUnreadsBar: n } = this.props;
        return (0, s.jsx)(y.V0, {
            children: (l) =>
                (0, s.jsx)(f.F, {
                    component: (0, s.jsx)(p.A, {
                        children: (0, s.jsx)(f.H, { id: l, children: K.intl.string(K.t.OGiMXJ) }),
                    }),
                    children: n
                        ? (0, s.jsxs)(r.Fragment, {
                              children: [
                                  (0, s.jsx)("div", {
                                      className: t4.Eo,
                                      children: (0, s.jsx)(sx, {
                                          position: "top",
                                          guildChannels: e,
                                          guildChannelsVersion: t,
                                          jumpToVoiceChannels: this.jumpToVoiceChannels,
                                          jumpToChannel: this.jumpToChannel,
                                      }),
                                  }),
                                  this.renderList(),
                                  (0, s.jsx)(sx, {
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
let s6 = (e) => {
    let { guildId: t, selectedChannelId: n, selectedVoiceChannelId: l } = e,
        i = (0, u.bG)([R.Ay], () => R.Ay.keyboardModeEnabled),
        { analyticsLocations: a } = (0, j.Ay)(v.A.GUILD_CHANNEL_LIST),
        o = (0, u.bG)([eX.A], () => eX.A.getChannel(n)),
        h = (0, u.bG)([eX.A], () => eX.A.getChannel(l)),
        A = (0, u.bG)([e4.A], () => e4.A.getGuildId()),
        g = (0, J.jN)(t),
        m = r.useRef(null),
        f = r.useCallback((e, t) => {
            let n = m.current;
            null != n &&
                (F.Ut1.test(t) || (0, es.jq)(t)
                    ? n.scrollToChannel(t, !1, 16, () => {
                          requestAnimationFrame(() => document.querySelector(e)?.focus());
                      })
                    : document.querySelector(e)?.focus());
        }, []),
        p = r.useCallback(
            () =>
                new Promise((e) => {
                    let t = m.current;
                    if (null == t) return e();
                    t.scrollTo(0, () => requestAnimationFrame(() => e()));
                }),
            [],
        ),
        C = r.useCallback(
            () =>
                new Promise((e) => {
                    let t = m.current;
                    if (null == t) return e();
                    t.scrollTo(Number.MAX_SAFE_INTEGER, () => requestAnimationFrame(() => e()));
                }),
            [],
        ),
        E = (0, c.Ay)({
            id: "channels",
            defaultFocused: n ?? void 0,
            isEnabled: i,
            setFocus: f,
            scrollToStart: p,
            scrollToEnd: C,
        }),
        x = E.setFocus;
    r.useEffect(() => {
        null != n && x(n);
    }, [n, x]);
    let N = (function (e) {
        let [t] = (0, u.bG)(
            [e0.A, eX.A, eq.A],
            () => {
                let t;
                return [
                    (t =
                        e === F.YYv
                            ? eQ.default
                                  .keys(eq.A.getFavoriteChannels())
                                  .map((e) => eX.A.getChannel(e))
                                  .filter(eJ.Vq)
                                  .filter((e) => e.isGuildStageVoice())
                            : e0.A.getChannels(e)).reduce((e, t) => {
                        let n = e0.A.getMutableParticipants(t.id, e1.ip.SPEAKER);
                        return (e[t.id] = n.filter((e) => e.type === e1.wY.VOICE).map(e3)), e;
                    }, {}),
                    t.reduce((e, t) => {
                        let { id: n } = t;
                        return e + e0.A.getParticipantsVersion(n);
                    }, 0),
                ];
            },
            [e],
            e$.D,
        );
        return t;
    })(t);
    return (0, s.jsx)(j.f5, {
        value: a,
        children: (0, s.jsx)(G.A, {
            section: F.JJy.GUILD_CHANNEL_LIST,
            children: (0, s.jsx)(d.hD, {
                navigator: E,
                children: (0, s.jsx)(s7, {
                    ...e,
                    listNavigator: E,
                    ref: m,
                    selectedChannel: o,
                    selectedVoiceChannel: h,
                    stageChannelSpeakerVoiceStates: N,
                    selectedGuildId: A,
                    optInEnabled: g,
                }),
            }),
        }),
    });
};
function s4(e) {
    let { guildChannels: t, shouldShowEmptyState: n } = (0, tt.D)(),
        { density: l } = (0, C.wR)();
    return n
        ? (0, s.jsx)("div", {
              className: t4.XG,
              children: (0, s.jsxs)(E.B, {
                  gap: 8,
                  children: [
                      (0, s.jsxs)(E.B, {
                          gap: 8,
                          padding: { top: 16, right: 16, bottom: 0, left: 16 },
                          fullWidth: !1,
                          children: [
                              (0, s.jsx)(x.D, {
                                  variant: "heading-md/semibold",
                                  children: K.intl.string(s9.default["1n0TGE"]),
                              }),
                              (0, s.jsx)(N.E, {
                                  variant: "text-sm/medium",
                                  color: "text-muted",
                                  children: K.intl.string(s9.default.Wwzrs9),
                              }),
                          ],
                      }),
                      (0, s.jsx)("div", { className: t4.ts }),
                      (0, s.jsxs)("div", {
                          className: t4.MS,
                          "aria-hidden": "true",
                          children: [
                              (0, s.jsxs)("div", {
                                  className: t4.pS,
                                  children: [
                                      (0, s.jsx)(_.N, { size: "xs", color: h.A.colors.ICON_MUTED }),
                                      (0, s.jsx)("div", { className: t4.Qs }),
                                  ],
                              }),
                              (0, s.jsxs)("div", {
                                  className: t4.pS,
                                  children: [
                                      (0, s.jsx)(S.H, { size: "xs", color: h.A.colors.ICON_MUTED }),
                                      (0, s.jsx)("div", { className: t4.iR }),
                                  ],
                              }),
                              (0, s.jsxs)("div", {
                                  className: t4.pS,
                                  children: [
                                      (0, s.jsx)(I.o, { size: "xs", color: h.A.colors.ICON_MUTED }),
                                      (0, s.jsx)("div", { className: t4.Qs }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : (0, s.jsx)(s6, { ...e, guildChannels: t, guildChannelsVersion: 0, withGuildIcon: !1, density: l });
}
function s8(e) {
    let t = (function (e) {
            var t;
            let n,
                l,
                i =
                    ((t = e.id),
                    (n = (0, tA.A)(t)),
                    (l = (0, tg.Ay)(t)),
                    !(0, u.bG)([th.A], () => {
                        if (null == t) return !1;
                        let e = th.A.getGuild(t);
                        return e?.features.has(F.GuildFeatures.HUB) ?? !1;
                    }, [t]) &&
                        (n || l.length > 0)),
                s = (0, ts.W)(e.id),
                r = (0, tu.vz)(e.id),
                a = (0, ti.r)(e),
                o = (0, tE.jz)(e),
                d = (0, td.d)(e.id),
                c = (0, tl.bG)([ta.h], () => ta.h.getNewMemberActions(e.id), [e.id]),
                h = (0, tc.A)(e.id),
                A = (0, to.jY)(e.id),
                g = (0, tr.fw)(e.id),
                m = [],
                f = e.features.has(F.GuildFeatures.HUB),
                p = e.features.has(F.GuildFeatures.COMMUNITY),
                C = e.features.has(F.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
                E = (0, eH.A)(e.id);
            tC.useConfig({ location: "useGuildActionRows" }).enabled;
            let x = ek(e),
                N = (0, tm.bW)(e.id, "useGuildActionRows"),
                _ = (0, tf.C$)(e.id, "useGuildActionRows"),
                S = e.features.has(F.GuildFeatures.GAME_SERVERS),
                I = (0, tp.N)("useGuildActionRows"),
                [b] = (0, el.kn)(_ && I && !S ? [T.M.EMPTY_GAME_SERVER_TAB] : [], void 0, !0);
            return (
                f && m.push(tx.n.GUILD_HUB_HEADER_OPTIONS),
                !A && d && h && null != c && c.length > 0
                    ? m.push(tx.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR)
                    : e.premiumProgressBarEnabled && x > 0 && m.push(tx.n.GUILD_PREMIUM_PROGRESS_BAR),
                !f && d && m.push(tx.n.GUILD_HOME),
                i && m.push(tx.n.GUILD_SCHEDULED_EVENTS),
                !f && p && m.push(tx.n.CHANNELS_AND_ROLES),
                r && m.push(tx.n.GUILD_ROLE_SUBSCRIPTIONS),
                a && m.push(tx.n.GUILD_SHOP),
                o && m.push(tx.n.GUILD_GAME_SHOP),
                ((g && (p || C)) || (s && e.features.has(F.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL))) &&
                    m.push(tx.n.GUILD_MOD_DASH_MEMBER_SAFETY),
                E && m.push(tx.n.GUILD_BOOSTS),
                N && m.push(tx.n.GUILD_OFFICIAL_MESSAGES),
                _ && (S ? m.push(tx.n.GAME_SERVERS) : null != b && m.push(tx.n.GAME_SERVERS_EMPTY)),
                m
            );
        })(e.guild),
        n = (0, u.cf)([te.A], () => te.A.getGuild(e.guildId, { guildActionRows: t })),
        { density: l } = (0, C.wR)();
    return (0, s.jsx)(s6, { ...e, ...n, density: l });
}
