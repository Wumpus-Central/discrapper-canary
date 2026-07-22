n.d(t, { B: () => rt, T: () => re }), n(321073);
var l,
    i,
    s = n(627968),
    r = n(64700),
    a = n(435558),
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
    x = n(297264),
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
    L = n(554146),
    T = n(177953),
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
        d = (0, D.q8)(t.id, L.M.MEMBERS_LAUNCH_UPSELL);
    return (0, s.jsx)("div", {
        ref: d,
        children: (0, s.jsx)(H.G, {
            id: `members-${t.id}`,
            renderIcon: (e) => (0, s.jsx)(T.n, { size: "md", color: "currentColor", className: e }),
            text: K.intl.string(K.t.oclz3Z),
            selected: n,
            onClick: o,
            trailing: a > 0 ? (0, s.jsx)(U.hV, { count: a }) : null,
        }),
    });
}
var W = n(632015),
    Y = n(976860),
    X = n(746080);
function q(e) {
    let { guild: t, selected: n } = e;
    return (0, s.jsx)(H.G, {
        id: `guild-space-tab-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(W.f, { size: "md", color: "currentColor", className: e }),
        text: K.intl.string(K.t["04IVMq"]),
        selected: n,
        onClick: function () {
            (0, Y.pX)(F.BVt.CHANNEL(t.id, X.VV.GUILD_SPACE));
        },
    });
}
var J = n(581007),
    Z = n(522435),
    $ = n(285406),
    Q = n(582904),
    ee = n(419534),
    et = n(395504),
    en = n(192308),
    el = n(866665),
    ei = n(939249),
    es = n(789645),
    er = n(687966),
    ea = n(131607),
    eo = n(49999),
    ed = n(576709),
    ec = n(204392),
    eu = n(180961);
let eh = r.memo(function (e) {
    let { guildId: t, selected: l } = e,
        [i, a] = (0, ea.ww)([L.M.GAME_SERVER_HOSTING_NEW_BADGE], t),
        o = i === L.M.GAME_SERVER_HOSTING_NEW_BADGE,
        d = r.useCallback(() => {
            a(eo.i.USER_DISMISS), (0, Y.pX)(F.BVt.CHANNEL(t, X.VV.GAME_SERVERS));
        }, [t, a]),
        c = r.useCallback(
            (e) => {
                e.stopPropagation(),
                    (0, en.openModalLazy)(async () => {
                        let { default: e } = await n.e("2872").then(n.bind(n, 128459));
                        return (n) => (0, s.jsx)(e, { ...n, guildId: t });
                    });
            },
            [t],
        ),
        u = (0, s.jsxs)("div", {
            className: ec.c,
            children: [
                (0, s.jsx)("div", {
                    className: eu.Xs,
                    children: (0, s.jsx)(el.m, {
                        text: K.intl.string(K.t.fgq1gs),
                        position: "top",
                        children: (0, s.jsx)(ei.D, {
                            onClick: c,
                            "aria-label": K.intl.string(K.t.fgq1gs),
                            children: (0, s.jsx)(es.P, { size: "xs", color: "currentColor", className: eu.gE }),
                        }),
                    }),
                }),
                o &&
                    (0, s.jsx)("div", {
                        className: eu.yW,
                        children: (0, s.jsx)(U.Lp, {
                            disableColor: !0,
                            text: K.intl.string(K.t.y2b7CA),
                            className: ec.q,
                        }),
                    }),
            ],
        });
    return (0, s.jsx)(H.G, {
        className: eu.Ki,
        id: `game-server-empty-${t}`,
        renderIcon: (e) => (0, s.jsx)(er._, { size: "md", className: e, color: "currentColor" }),
        text: K.intl.string(ed.default.vCzwM7),
        selected: l,
        onClick: d,
        trailing: u,
    });
});
var eA = n(361158),
    eg = n(186111),
    em = n(270533),
    ef = n(603713);
let ep = r.memo(function (e) {
    let { guildId: t, selected: n } = e,
        l = (0, en.useHasAnyModalOpen)(),
        i = (0, u.bG)([eg.A], () => eg.A.hasLayers()),
        a = (0, eA.xr)((e) => e.fullScreenLayers.length > 0),
        [o, d] = (0, ea.ww)([L.M.GAME_SERVER_HOSTING_NEW_BADGE], t),
        c = o === L.M.GAME_SERVER_HOSTING_NEW_BADGE,
        [h, A] = (0, ea.ww)(l || i || a || !c ? [] : [L.M.GAME_SERVER_HOSTING_NEW_COACHMARK], t),
        g = r.useCallback(
            (e) => {
                d(e), A(e);
            },
            [d, A],
        ),
        m = r.useCallback(() => {
            g(eo.i.USER_DISMISS), (0, Y.pX)(F.BVt.CHANNEL(t, X.VV.GAME_SERVERS));
        }, [t, g]),
        f = r.useRef(null),
        p = h === L.M.GAME_SERVER_HOSTING_NEW_COACHMARK,
        C = r.useCallback(() => (0, s.jsx)(em.mn, { channelRowRef: f, guildId: t, markAsDismissed: g }), [t, g]);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(H.G, {
                ref: f,
                id: `game-server-${t}`,
                renderIcon: (e) => (0, s.jsx)(er._, { size: "md", className: e, color: "currentColor" }),
                text: K.intl.string(ed.default.vCzwM7),
                selected: n,
                onClick: m,
                trailing: c
                    ? (0, s.jsx)(U.Lp, { disableColor: !0, text: K.intl.string(K.t.y2b7CA), className: ef.q })
                    : null,
            }),
            p && C(),
        ],
    });
});
var eC = n(503698),
    eE = n.n(eC),
    ex = n(695366),
    eN = n(104510),
    e_ = n(544048),
    eS = n(868652),
    eI = n(379229),
    eb = n(482487),
    eG = n(381724),
    eR = n(828162),
    ev = n(853513),
    ej = n(689599);
function ey(e) {
    let { indicator: t } = e;
    if (null == t) return null;
    switch (t.type) {
        case eI.cD.WARNING:
            return (0, s.jsx)(ex.E, { color: h.A.colors.STATUS_WARNING, size: "sm" });
        case eI.cD.UNREAD:
            return (0, s.jsx)(U.hV, { count: t.count });
        default:
            return null;
    }
}
let eM = { animation: { BEG: 0, END: 75 }, LOOP: { BEG: 76, END: 376 } },
    eL = r.memo(function (e) {
        let { guildId: t, selected: l } = e,
            i = (0, eG.Ay)(t),
            { showNewBadgeOnRow: a, dismissNewBadgeIfShown: o } = (0, eb.A)(
                t,
                i?.indicator != null || i?.popout != null,
            ),
            d = r.useCallback(() => {
                o(),
                    (0, eS.Zm)(t),
                    (0, eR.A)(t, v.A.GUILD_POWERUPS_CHANNEL_LIST_ROW),
                    i?.popout?.markAsDismissed(eo.i.INDIRECT_ACTION);
            }, [t, o, i]),
            c = r.useRef(null),
            A = (0, en.useModalsStore)(en.hasAnyModalOpenSelector),
            g = (0, u.bG)([eg.A], () => eg.A.hasLayers()),
            m = (0, eA.xr)((e) => e.fullScreenLayers.length > 0),
            f = A || g || m,
            p = r.useCallback(() => {
                if (i?.popout == null || f) return null;
                switch (i?.popout?.type) {
                    case eI.o.LEVEL_REACHED:
                        return (0, s.jsx)(em.HW, { guildId: t, channelRowRef: c, ...i.popout });
                    case eI.o.PERKS_AVAILABLE:
                        return (0, s.jsx)(em.UB, { guildId: t, channelRowRef: c, ...i.popout });
                    case eI.o.PERKS_PURCHASABLE:
                        return (0, s.jsx)(em.lw, { guildId: t, channelRowRef: c, ...i.popout });
                    case eI.o.NEW_PERK_AVAILABLE:
                        return (0, s.jsx)(em.bo, { guildId: t, channelRowRef: c, ...i.popout });
                    case eI.o.BOOST_TO_UNLOCK:
                        return (0, s.jsx)(em.Gw, { guildId: t, channelRowRef: c, ...i.popout });
                    case eI.o.EXPIRING_PERK:
                        return (0, s.jsx)(em.Mr, { guildId: t, channelRowRef: c, ...i.popout });
                    case eI.o.GAME_SERVER_HOSTING_AVAILABLE:
                    case eI.o.GAME_SERVER_HOSTING_GUILD_ELIGIBLE:
                        return (0, s.jsx)(em.jz, { guildId: t, channelRowRef: c, ...i.popout });
                    case eI.o.GAME_SERVER_NEW_GAMES:
                        return (0, s.jsx)(em.YX, { guildId: t, channelRowRef: c, ...i.popout });
                    case eI.o.GAME_SERVER_PRICING_CHANGE:
                        return (0, s.jsx)(em.Ns, { guildId: t, channelRowRef: c, ...i.popout });
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
                    className: ej.kL,
                    id: `skill-trees-${t}`,
                    renderIcon: (e) => (0, s.jsx)(eN._, { size: "md", className: e, color: "currentColor" }),
                    background:
                        i?.popout != null &&
                        (0, s.jsx)("div", {
                            className: ej.Fi,
                            children: (0, s.jsx)(e_.t, {
                                nextScene: null == C ? "animation" : "LOOP",
                                className: ej.UU,
                                sceneSegments: eM,
                                importData: () => n.e("67807").then(n.t.bind(n, 217762, 19)),
                                onScenePlay: x,
                                rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
                            }),
                        }),
                    text: (0, s.jsx)("span", {
                        className: eE()({ [ej.A7]: i?.showUnread === !0 }),
                        children: K.intl.string(ev.default.yv3DJJ),
                    }),
                    selected: l,
                    onClick: d,
                    showUnread: i?.showUnread === !0,
                    trailing: a
                        ? (0, s.jsx)(U.Lp, { text: K.intl.string(K.t.y2b7CA), color: h.A.colors.BACKGROUND_BRAND.css })
                        : (0, s.jsx)(ey, { indicator: i?.indicator }),
                }),
                p(),
            ],
        });
    });
var eT = n(617498),
    eU = n(717421),
    eD = n(442433),
    eO = n(230135),
    eP = n(228366);
let eV = {};
class ew extends u.Ay.PersistedStore {
    static displayName = "GuildBoostingProgressBarPersistedStore";
    static persistKey = "PremiumGuildProgressBarPersistedStore";
    initialize(e) {
        null != e && (eV = e);
    }
    getState() {
        return eV;
    }
    getCountForGuild(e) {
        return eV[e];
    }
}
let eH = new ew(eP.h, {
    APPLIED_GUILD_BOOST_COUNT_UPDATE: function (e) {
        let { guildId: t, premiumCount: n } = e;
        eV = { ...eV, [t]: n };
    },
    APPLIED_GUILD_BOOST_COUNT_RESET: function () {
        eV = {};
    },
});
var eB = n(147925),
    ek = n(363487),
    eF = n(568065);
function eK(e) {
    return (0, r.useMemo)(() => {
        if (null == e) return 0;
        let t = e?.features.has(F.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) === !0 ? 0 : F.M2T[F.TVA.TIER_3],
            n = Object.values(eF.sy),
            l = Object.values(eF.YV);
        return (
            n.concat(l).forEach((n) => {
                null == n.includedInLevel && (n.isEnabled?.(e.id) ?? !0) && (t += n.boostPrice);
            }),
            t
        );
    }, [e]);
}
var ez = n(511636);
let eW = r.forwardRef((e, t) => {
    let { appliedBoostCount: n, maxBoostCount: l, premiumSubscriberCount: i, className: a } = e,
        o = n >= l,
        d = Math.min((n / l) * 100, 100),
        c = `calc(${d}% - 4px)`,
        [u, h] = (0, eU.z)(
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
            className: ez.hQ,
            children: [
                (0, s.jsx)("div", { className: eE()(ez.L$, a) }),
                (0, s.jsx)(eT.animated.div, { className: eE()(ez.qB, { [ez.mu]: d <= 5 }), style: u }),
                (0, s.jsxs)("div", {
                    className: ez.FS,
                    children: [
                        (0, s.jsxs)("div", {
                            className: ez.Ui,
                            children: [
                                (0, s.jsx)(N.E, {
                                    className: ez.Qq,
                                    variant: "text-xs/semibold",
                                    children: K.intl.string(ev.default.NI6Ihe),
                                }),
                                i >= l &&
                                    (0, s.jsx)(N.E, {
                                        className: ez.Qq,
                                        variant: "text-xs/semibold",
                                        children: "\uD83C\uDF89",
                                    }),
                            ],
                        }),
                        (0, s.jsxs)("div", {
                            className: ez.Ui,
                            children: [
                                (0, s.jsx)(N.E, {
                                    className: eE()(ez.Qq, ez.ue),
                                    variant: "text-xs/semibold",
                                    children: o
                                        ? K.intl.formatToPlainString(ev.default["Ehpq+7"], { appliedBoostCount: n })
                                        : K.intl.formatToPlainString(ev.default["/rbPDs"], {
                                              appliedBoostCount: n,
                                              maxBoostCount: l,
                                          }),
                                }),
                                (0, s.jsx)(eB.A, {
                                    width: 12,
                                    height: 12,
                                    direction: eB.A.Directions.RIGHT,
                                    className: eE()(ez.Qq, ez.ue),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
function eY(e) {
    let { guild: t, withMargin: l } = e,
        i = eK(t),
        a = (0, ek.A)(t.id),
        o = r.useCallback(() => {
            (0, eR.A)(t.id, v.A.GUILD_BOOSTING_SIDEBAR_DISPLAY);
        }, [t.id]),
        d = (0, u.bG)([eH], () => eH.getCountForGuild(t.id) ?? 0);
    r.useEffect(() => {
        d !== t.premiumSubscriberCount && (0, eO.u)(t.id, t.premiumSubscriberCount);
    }, [t.id, d, t.premiumSubscriberCount]);
    let c = r.useCallback(
        (e) => {
            a &&
                (0, eD.L3)(e, async () => {
                    let { default: e } = await n.e("71728").then(n.bind(n, 709843));
                    return (n) => (0, s.jsx)(e, { ...n, guild: t });
                });
        },
        [a, t],
    );
    return (0, s.jsx)(ei.D, {
        "aria-label": void 0,
        role: "button",
        focusProps: { offset: { left: 10, right: 4 } },
        onClick: o,
        className: eE()(ez.kL, { [ez.aF]: l }),
        onContextMenu: c,
        children: (0, s.jsx)(eW, {
            appliedBoostCount: d,
            maxBoostCount: i,
            premiumSubscriberCount: t.premiumSubscriberCount,
        }),
    });
}
function eX(e) {
    let { guild: t, withMargin: n } = e;
    return (0, s.jsx)(eY, { guild: t, withMargin: n });
}
eW.displayName = "GuildPowerupsProgressBarUI";
var eq = n(455234),
    eJ = n(181079),
    eZ = n(734057),
    e$ = n(607567),
    eQ = n(403362),
    e0 = n(996439),
    e1 = n(935208),
    e2 = n(63995),
    e3 = n(518769);
function e9(e) {
    let { voiceState: t, userNick: n, user: l } = e,
        i = (0, e$.hz)(t, n);
    return { user: l, voiceState: t, nick: n, comparator: i };
}
var e7 = n(787541),
    e6 = n(79858),
    e5 = n(95701),
    e4 = n(72314),
    e8 = n(808728),
    te = n(967198),
    tt = n(297469),
    tn = n(960755),
    tl = n(866842),
    ti = n(633965),
    ts = n(702841),
    tr = n(41200),
    ta = n(496767),
    to = n(134413),
    td = n(701785),
    tc = n(101611),
    tu = n(473529),
    th = n(978165),
    tA = n(960253),
    tg = n(71393),
    tm = n(770666),
    tf = n(508654),
    tp = n(470452),
    tC = n(521427),
    tE = n(488803),
    tx = n(969117);
let tN = (0, n(945810).mj)({
    name: "2026-04-mobile-boost-progress-bar",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var t_ = n(871123),
    tS = n(281405),
    tI = n(3026),
    tb = n(821609),
    tG = n(187322),
    tR = n(847374),
    tv = n(499373),
    tj = n(285796),
    ty = n(914430),
    tM = n(913247),
    tL = n(639627),
    tT = n(66834),
    tU = n(999903),
    tD = n(544169),
    tO = n(422258),
    tP = n(770376),
    tV = n(924985),
    tw = n(769765),
    tH = n(543465);
n(667532);
var tB = n(111613);
function tk(e, t) {
    return null != e && null != t && (e === t || ((0, e5.tr)(e) && (0, e5.tr)(t)) || ((0, e5.ay)(e) && (0, e5.ay)(t)));
}
function tF(e, t, n, l) {
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
        if (tk(e.channel.type, n)) return e;
    }
    return null;
}
function tK(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (null == e) return 0;
    let l = null;
    return (
        t
            .filter((t) => {
                let {
                    channel: { type: l },
                } = t;
                return null != e && (n || tk(e.type, l));
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
function tz(e) {
    return { referenceId: e.id, parentId: e.parent_id };
}
function tW(e, t, n, l, i) {
    if (null == e || null == n) return null;
    let { GUILD_CATEGORY: s } = F.rbe;
    if (e.type === s)
        return l === t || (l < t && e.type === n.type)
            ? tz(n)
            : l > t
              ? (function (e, t, n) {
                    let { GUILD_CATEGORY: l } = F.rbe,
                        i = n[(tK(t, n, !0) ?? 0) + 1],
                        s = tF(-1, t.id, e.type, n);
                    return null == s || s.channel.id === e.id
                        ? null
                        : null == i || i.channel.type === l
                          ? { referenceId: s.channel.id, parentId: null }
                          : null;
                })(e, n, i)
              : null;
    if (tk(e.type, n.type)) return tz(n);
    if (l < t) {
        let t, l;
        if (n.type === s) {
            let t = i[(tK(n, i, !0) ?? 0) - 1],
                l = tF(1, n.id, e.type, i);
            if (null == t) return { referenceId: null, parentId: null };
            if (null != l) {
                if (tk(t.channel.type, e.type) || (e.isGuildVocal() && (0, e5.tr)(t.channel.type)))
                    return { referenceId: l.channel.id, parentId: t.channel.parent_id };
                if (t.channel.isCategory()) return { referenceId: l.channel.id, parentId: t.channel.id };
            }
            return null;
        }
        return (
            (t = i[(tK(n, i, !0) ?? 0) - 1]),
            (l = tF(1, n.id, e.type, i)),
            null != t || e.isGuildVocal()
                ? (0, e5.tr)(e.type) && null != l && ((0, e5.tr)(t.channel.type) || t.channel.isCategory())
                    ? { referenceId: l.channel.id, parentId: n.parent_id }
                    : null
                : { referenceId: null != l ? l.channel.id : null, parentId: null }
        );
    }
    if (n.type === s) {
        let t = i[(tK(n, i, !0) ?? 0) + 1],
            l = tF(-1, n.id, e.type, i);
        if (null != l) {
            if (null == t) return { referenceId: l.channel.id, parentId: n.id };
            if (tk(t.channel.type, e.type) || ((0, e5.tr)(e.type) && t.channel.isGuildVocal()))
                return { referenceId: l.channel.id, parentId: t.channel.parent_id };
            if (t.channel.isCategory()) return { referenceId: l.channel.id, parentId: n.id };
        }
        return null;
    }
    let r = i[(tK(n, i, !0) ?? 0) + 1],
        a = tF(-1, n.id, e.type, i);
    if (null == a) return null;
    if (e.isGuildVocal()) {
        if (null == r || r.channel.isCategory()) return { referenceId: a.channel.id, parentId: n.parent_id };
        if (r.channel.isGuildVocal()) return { referenceId: a.channel.id, parentId: r.channel.parent_id };
    }
    return e.isCategory() && (null == r || r.channel.isCategory())
        ? { referenceId: a.channel.id, parentId: null }
        : null;
}
var tY = n(488926);
let tX = "DRAGGABLE_GUILD_CHANNEL";
function tq(e, t) {
    if (null == e || null == t) return null;
    if (!(0, M.ai)(e)) return eZ.A.getChannel(t);
    let n = e8.Ay.getChannels(e),
        l =
            n[e8.I6].find((e) => e.channel.id === t) ??
            n[e8.vM].find((e) => e.channel.id === t) ??
            n[F.rbe.GUILD_CATEGORY].find((e) => e.channel.id === t);
    return l?.channel;
}
function tJ(e, t) {
    if (null != e.parent_id) {
        let t = eZ.A.getChannel(e.parent_id);
        if (null != t) return B.A.can(F.xBc.MANAGE_CHANNELS, t);
    }
    return B.A.can(F.xBc.MANAGE_CHANNELS, t);
}
function tZ(e) {
    return (0, tM.T)(
        tX,
        {
            drop(e, t) {
                let n,
                    l = te.A.getGuildId(),
                    i = t.getItem(),
                    r = tW(tq(l, i.id), i.position, e.channel, e.position, i.channelList);
                if (null == r) return;
                let a = tq(l, i.id);
                if (null == a) return;
                let o = tw.A.getCategories(l),
                    d = tg.A.getGuild(l);
                if (null == d) return;
                let c = (function (e, t, n, l) {
                    let i,
                        s,
                        r = [],
                        a = [],
                        o = l._categories;
                    function d(t) {
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
                                    : tB.Ay.moveItemFromTo(t, i, s)),
                            (r = r.concat(
                                tB.Ay.calculatePositionDeltas({
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
                    }
                    if (e.isCategory()) {
                        let n = [...o].slice(1);
                        (i = tK(e, n)), (s = tK(t, n)), (a = d(n)).unshift(o[0]);
                    }
                    if ((0, e5.tr)(e.type) || e.isCategory()) {
                        let n = (0, tU.A)(a.length > 0 ? a : o, l, (e) => {
                            let {
                                channel: { type: t },
                            } = e;
                            return (0, e5.tr)(t);
                        });
                        (i = tK(e, n)), (s = tK(t, n)), d(n);
                    }
                    if (e.isGuildVocal() || e.isCategory()) {
                        let n = (0, tU.A)(a.length > 0 ? a : o, l, (e) => {
                            let { channel: t } = e;
                            return t.isGuildVocal();
                        });
                        (i = tK(e, n)), (s = tK(t, n)), d(n);
                    }
                    return (
                        e.parent_id !== n &&
                            null == r.find((t) => t.id === e.id && ((t.parent_id = n), !0)) &&
                            r.push({ id: e.id, parent_id: n }),
                        r
                    );
                })(a, tq(l, r.referenceId), r.parentId, o);
                if (0 !== c.length) {
                    if ((0, M.ai)(l)) return void (0, tO.zN)(c);
                    if (
                        ((c = c.filter((e) => {
                            let { id: t } = e,
                                n = eZ.A.getChannel(t);
                            if (null == n) return !1;
                            let l = eZ.A.getChannel(n.parent_id);
                            return n.type === F.rbe.GUILD_CATEGORY || null == l
                                ? B.A.can(F.xBc.MANAGE_CHANNELS, d)
                                : B.A.can(F.xBc.MANAGE_CHANNELS, l);
                        })),
                        a.parent_id !== r.parentId &&
                            c.find((e) => {
                                if (e.id !== a.id) return !1;
                                let t = eZ.A.getChannel(e.parent_id);
                                if (!(null != t && B.A.can(F.xBc.MANAGE_ROLES, a) && B.A.can(F.xBc.MANAGE_ROLES, t)))
                                    return !0;
                                let l = tY.r(a, t),
                                    i = tY.r(a, eZ.A.getChannel(a.parent_id));
                                return ((null != a.parent_id || l) && (!i || l)) || (n = e), !0;
                            }),
                        null != n)
                    ) {
                        let e = eZ.A.getChannel(n.parent_id);
                        null != e &&
                            (0, en.openModal)((t) =>
                                (0, s.jsx)(tD.default, {
                                    ...t,
                                    channel: a,
                                    category: e,
                                    onConfirm: () => {
                                        null != n && ((n.lock_permissions = !0), tT.A.batchChannelUpdate(l, c));
                                    },
                                    onCancel: () => {
                                        null != n && tT.A.batchChannelUpdate(l, c);
                                    },
                                }),
                            );
                    } else tT.A.batchChannelUpdate(l, c);
                }
            },
            canDrop(e, t) {
                let n = t.getItem(),
                    l = eZ.A.getChannel(n.id);
                if (null == l) return !1;
                let i = tW(eZ.A.getChannel(n.id), n.position, e.channel, e.position, n.channelList);
                if (null == i) return !1;
                if ((0, M.ai)(te.A.getGuildId())) return !0;
                if (tH.Ay.isFavorite(n.guildId, e.channel.id)) return !1;
                let s = tg.A.getGuild(n.guildId);
                if (null == s) return !1;
                let r = eZ.A.getChannel(i.parentId),
                    a = eZ.A.getChannel(l.parent_id),
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
        (0, tL.I)(
            tX,
            {
                canDrag(e) {
                    let { channel: t } = e;
                    if ((0, M.ai)(te.A.getGuildId())) return !0;
                    let l = tg.A.getGuild(t.getGuildId());
                    return (
                        null != l &&
                        ((0, et.WW)(l.id) && tJ(t, l)
                            ? ((0, tP.A)() &&
                                  (0, en.openModalLazy)(async () => {
                                      let { default: e } = await Promise.all([n.e("57729"), n.e("24848")]).then(
                                          n.bind(n, 354643),
                                      );
                                      return (t) => (0, s.jsx)(e, { ...t });
                                  }),
                              !1)
                            : tH.Ay.isFavorite(l.id, t.id) && tJ(t, l)
                              ? ((0, en.openModalLazy)(async () => {
                                    let { default: e } = await n.e("80545").then(n.bind(n, 933752));
                                    return (n) => (0, s.jsx)(e, { ...n, guildId: l.id, channelId: t.id });
                                }),
                                !1)
                              : tJ(t, l))
                    );
                },
                beginDrag(e) {
                    let {
                            channel: { id: t, parent_id: n, guild_id: l, type: i },
                            position: s,
                        } = e,
                        r = te.A.getGuildId(),
                        a = tw.A.getCategories(r);
                    return {
                        isChannelDrag: !0,
                        id: t,
                        position: s,
                        parentId: n,
                        type: i,
                        channelList: (0, tU.A)(a._categories, a, (e) => {
                            let { channel: t } = e;
                            return t.type === F.rbe.GUILD_CATEGORY && null != a[t.id] && 0 === a[t.id].length
                                ? !!(0, M.ai)(r) ||
                                      (B.A.can(F.xBc.MANAGE_CHANNELS, t) && B.A.can(F.xBc.VIEW_CHANNEL, t))
                                : !tV.A.isCollapsed(t.parent_id);
                        }),
                        guildId: l,
                    };
                },
            },
            (e) => ({ connectChannelDragSource: e.dragSource(), connectDragPreview: e.dragPreview() }),
        )(e),
    );
}
var t$ = n(47167),
    tQ = n(485947),
    t0 = n(551851),
    t1 = n(485596);
function t2(e) {
    e.stopPropagation();
}
let t3 = tZ(
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
                m = (0, u.bG)([tH.Ay], () => tH.Ay.isChannelMuted(l.getGuildId(), l.id)),
                f = (0, u.bG)([tV.A], () => tV.A.isCollapsed(l.id)),
                p = (0, u.bG)([B.A], () => B.A.can(F.xBc.MANAGE_CHANNELS, l)),
                C = (0, t$.Ay)(l);
            t = null != h ? (c > h ? t1.mU : t1.TR) : t1.fx;
            let E = r.useCallback(() => {
                    f ? (0, ty.fh)(l.id) : (0, ty.Gv)(l.id);
                }, [l.id, f]),
                x = r.useCallback(
                    (e) => {
                        if ("null" !== l.id) {
                            let t = tg.A.getGuild(l.getGuildId());
                            null != t &&
                                (0, eD.L3)(e, async () => {
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
                        (0, en.openModalLazy)(async () => {
                            let { default: i } = await Promise.all([
                                n.e("98574"),
                                n.e("94629"),
                                n.e("99726"),
                                n.e("36865"),
                                n.e("3589"),
                                n.e("92513"),
                                n.e("89916"),
                                n.e("60773"),
                                n.e("8018"),
                                n.e("20379"),
                                n.e("77487"),
                                n.e("19193"),
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
                        (0, s.jsx)(tG.vN, {
                            focusTarget: b,
                            ringTarget: G,
                            offset: { left: 4, right: 4 },
                            children: (0, s.jsxs)("div", {
                                ref: G,
                                className: eE()(t1.Ki, t1.iE, { [t1.yZ]: f, [t1.SU]: m, [t1.vk]: !0 }),
                                onContextMenu: x,
                                children: [
                                    (0, s.jsxs)(ei.D, {
                                        innerRef: b,
                                        className: t1.rb,
                                        tabIndex: S,
                                        ...I,
                                        onClick: E,
                                        "aria-label": K.intl.formatToPlainString(K.t.y5l3J2, { categoryName: C }),
                                        "aria-expanded": !f,
                                        focusProps: { enabled: !1 },
                                        children: [
                                            (0, s.jsx)(tQ.A, {
                                                className: t1.UU,
                                                children: (0, s.jsx)(tI.A, { children: C }),
                                            }),
                                            A
                                                ? null
                                                : (0, s.jsx)(tR.a, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: t1.Kk,
                                                  }),
                                        ],
                                    }),
                                    (0, s.jsx)("div", {
                                        onClick: t2,
                                        className: t1.Y_,
                                        children:
                                            p && !o
                                                ? (0, s.jsx)(el.m, {
                                                      text: K.intl.string(K.t["fUYU+j"]),
                                                      children: (0, s.jsx)(ei.D, {
                                                          className: eE()(t1.c9, t1.ih),
                                                          onClick: N,
                                                          tabIndex: S,
                                                          role: "button",
                                                          "aria-label": K.intl.string(K.t["fUYU+j"]),
                                                          children: (0, s.jsx)(tv.T, {
                                                              size: "xs",
                                                              color: "currentColor",
                                                              className: t1.hs,
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
    t9 = r.memo(function (e) {
        let { name: t, onDismiss: n, className: l } = e;
        return (0, s.jsx)("li", {
            className: eE()(l, t1.fx),
            children: (0, s.jsxs)("div", {
                className: eE()(t1.Ki, t1._V),
                children: [
                    (0, s.jsx)("div", {
                        className: t1.rb,
                        children: (0, s.jsx)(tQ.A, { className: t1.UU, children: (0, s.jsx)(tI.A, { children: t }) }),
                    }),
                    null != n
                        ? (0, s.jsx)(el.m, {
                              asContainer: !0,
                              text: K.intl.string(K.t["5qNmsU"]),
                              children: (0, s.jsx)(ei.D, {
                                  className: t1.r,
                                  onClick: n,
                                  children: (0, s.jsx)(tj.a, { size: "md", color: "currentColor", className: t1.X8 }),
                              }),
                          })
                        : null,
                ],
            }),
        });
    }),
    t7 = r.memo(function (e) {
        let { category: t } = e,
            n = (0, u.bG)([t0.A], () => t0.A.isVoiceCategoryCollapsed(t.guild.id)),
            l = r.useCallback(() => {
                var e, l;
                n
                    ? ((e = t.guild.id), eP.h.dispatch({ type: "VOICE_CATEGORY_EXPAND", guildId: e, expand: !0 }))
                    : ((l = t.guild.id), eP.h.dispatch({ type: "VOICE_CATEGORY_COLLAPSE", guildId: l, expand: !1 }));
            }, [t.guild.id, n]);
        return (0, s.jsx)("div", {
            className: t1.oA,
            children: (0, s.jsx)(tb.$, {
                variant: "secondary",
                fullWidth: !0,
                onClick: l,
                icon: S.H,
                text: n ? K.intl.string(K.t["/eB9Bg"]) : K.intl.string(K.t.Q2gPWl),
            }),
        });
    }),
    t6 = r.memo(function (e) {
        let { category: t, channel: n } = e,
            l = (0, u.bG)([t0.A], () => t0.A.isVoiceCategoryCollapsed(t.guild.id));
        return l || null == n || n.record.type === F.rbe.GUILD_CATEGORY
            ? l
                ? (0, s.jsx)("li", {
                      className: t1.fx,
                      children: (0, s.jsx)("div", {
                          className: eE()(t1.Ki, t1._V),
                          children: (0, s.jsx)(tQ.A, {
                              className: t1.UU,
                              children: (0, s.jsx)(tI.A, { children: K.intl.string(K.t["V/u9Dy"]) }),
                          }),
                      }),
                  })
                : null
            : (0, s.jsx)("div", { style: { height: 16 } });
    }),
    t5 = r.memo(function (e) {
        let { channel: t } = e,
            n = (0, t$.Ay)(t);
        return (0, s.jsx)("li", {
            className: t1.fx,
            children: (0, s.jsx)("div", {
                className: eE()(t1.Ki, t1._V),
                children: (0, s.jsx)(tQ.A, { className: t1.UU, children: (0, s.jsx)(tI.A, { children: n }) }),
            }),
        });
    });
var t4 = n(728321),
    t8 = n(244083);
let ne = { origin: { x: -36, y: 7 }, targetWidth: 232, targetHeight: 40, offset: { x: 0, y: 0 } };
var nt = n(808240);
let nn = r.memo(function (e) {
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
            null != a && i.includes(a) && (t = (0, ee.xb)(l)), (0, ee.DD)(n.id, i, t);
        }, [n.id, a, l, i]),
        { density: c } = (0, C.wR)(),
        u = "compact" === c ? 8 : 12;
    switch (t) {
        case tt.PU:
            return (0, s.jsx)("div", { style: { height: u } });
        case tt.bK:
            if (n.features.has(F.GuildFeatures.HUB)) return null;
            return (0, s.jsx)("div", { style: { height: u } });
        case tt.HP:
            return (0, s.jsx)(t9, { name: K.intl.string(K.t.mlPMCy) });
        case l.recentsSectionNumber:
            return (0, s.jsx)(t9, { name: K.intl.string(K.t.gKcrqM), onDismiss: d });
        case l.voiceChannelsSectionNumber: {
            let e = l.getCategoryFromSection(l.voiceChannelsSectionNumber);
            if (null == e || e.isEmpty()) return null;
            let n = l.getChannelFromSectionRow(t, 0)?.channel;
            return (0, s.jsxs)(r.Fragment, {
                children: [(0, s.jsx)("div", { className: nt.ts }), (0, s.jsx)(t6, { category: e, channel: n })],
            });
        }
        case tt.TF: {
            let e = l.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, s.jsx)(t3, {
                channel: e.record,
                position: e.position,
                disableManageChannels: o,
                children: (0, s.jsx)(t4.A, {
                    inlineSpecs: ne,
                    arrowAlignment: t8.oN.TOP,
                    tutorialId: "organize-by-topic",
                    position: "right",
                }),
            });
        }
        default: {
            let e = l.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, s.jsx)(t3, { channel: e.record, position: e.position, disableManageChannels: o });
        }
    }
});
var nl = n(104171),
    ni = n(186369),
    ns = n(970812),
    nr = n(871237),
    na = n(349828);
function no(e, t, n) {
    return {
        hasDivider:
            !(function (e, t) {
                if (t === tt.PU) {
                    let t = e.getGuildActionSection().getRows();
                    return (
                        (1 === t.length && t[0] === tS.n.GUILD_PREMIUM_PROGRESS_BAR) ||
                        e.getGuildActionSection().isEmpty()
                    );
                }
                return 0 === e.getSections(!1)[t];
            })(e, n) &&
            (n === tt.PU ||
                (e.id === na.Vc
                    ? n !== e.getSections(!1).length - 1
                    : n === tt.HP ||
                      (!!t && n !== tt.bK && (n === e.recentsSectionNumber || (e.voiceChannelsSectionNumber, !1))))),
        canHaveVoiceSummary:
            n !== tt.PU &&
            n !== tt.HP &&
            n !== tt.bK &&
            n !== e.recentsSectionNumber &&
            n !== e.voiceChannelsSectionNumber,
    };
}
let nd = r.memo(function (e) {
        let { guildChannels: t, guildChannelsVersion: n } = e,
            l = r.useMemo(() => t.getCategoryFromSection(t.voiceChannelsSectionNumber), [t, n]);
        return null == l ? null : (0, s.jsx)(t7, { category: l });
    }),
    nc = r.memo(function (e) {
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
            { hasDivider: h, canHaveVoiceSummary: A } = r.useMemo(() => no(n, c, t), [n, c, t, l]),
            g = r.useMemo(() => (t === tt.PU ? null : n.getCategoryFromSection(t)), [n, t, l]),
            m = (0, et.jN)(a),
            { enableWaveformIcon: f } = (0, ni.b)(a, "ChannelListSectionFooter"),
            p = (0, u.yK)([tH.Ay], () => {
                if (null == g || !g.isCollapsed || !A) return [];
                let e = g.getChannelRecords(),
                    t = [];
                for (let n of e) {
                    if (!n.isGuildVocal()) continue;
                    let e = tH.Ay.isChannelOrParentOptedIn(a, n.id);
                    (!m || e) && t.push(n);
                }
                return t;
            }, [g, A, a, m]),
            C = r.useMemo(
                () => (0, nr.fK)({ channels: p, selectedChannelId: o, selectedVoiceChannelId: d, voiceStates: i }),
                [p, o, d, i],
            );
        if (t === n.voiceChannelsSectionNumber) return (0, s.jsx)(nd, { guildChannels: n, guildChannelsVersion: l });
        let E = h ? (0, s.jsx)("div", { className: nt.ts }) : null;
        return A && 0 !== C.length
            ? (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsx)("div", {
                          className: nt.qz,
                          children: (0, s.jsx)(nl.Ay, {
                              renderIcon: !0,
                              users: C,
                              max: 8,
                              showUserPopout: !0,
                              guildId: a,
                              renderLeadingIcon: f
                                  ? (e) => (0, s.jsx)(ns.A, { color: "currentColor", className: eE()(e, eu.Gj) })
                                  : void 0,
                          }),
                      }),
                      E,
                  ],
              })
            : E;
    });
var nu = n(625903),
    nh = n(283973),
    nA = n(933832),
    ng = n(435183),
    nm = n(698441),
    nf = n(855687),
    np = n(816662),
    nC = n(446600),
    nE = n(616356);
function nx(e, t, n) {
    return null != t && !!t && !tk(n, e.type);
}
function nN(e, t) {
    return null == t ? eu.fx : e > t ? eu.mU : eu.TR;
}
function n_(e) {
    let { channel: t, disableManageChannels: n, tabIndex: l, forceShowButtons: i, hasChannelInfo: r = !1 } = e;
    return (0, u.bG)(
        [B.A, te.A],
        () =>
            n ||
            (0, M.ai)(te.A.getGuildId()) ||
            (!B.A.can(F.xBc.MANAGE_CHANNELS, t) &&
                !B.A.can(F.xBc.MANAGE_ROLES, t) &&
                !B.A.can(F.xBc.MANAGE_WEBHOOKS, t)) ||
            ((0, e5.tr)(t.type) && !B.A.can(F.xBc.VIEW_CHANNEL, t)) ||
            (t.isGuildVocal() && !B.A.can(F.xBc.CONNECT, t)) ||
            !e5.bk.has(t.type) ||
            t.isModeratorReportChannel(),
    )
        ? null
        : (0, s.jsx)(el.m, {
              asContainer: !0,
              text: K.intl.string(K.t["3gUsJb"]),
              children: (0, s.jsx)(ei.D, {
                  className: eE()(eu.Xs, i ? eu.Tf : void 0, r ? eu.bw : eu.UI),
                  onClick: function () {
                      ng.Ay.open(t.id);
                  },
                  tabIndex: l,
                  "aria-label": K.intl.string(K.t["3gUsJb"]),
                  children: (0, s.jsx)(nu.Z, { size: "xs", color: "currentColor", className: eu.gE }),
              }),
          });
}
function nS(e) {
    let {
            channel: t,
            isDefaultChannel: l = !1,
            locked: i,
            tabIndex: a,
            forceShowButtons: o,
            hasChannelInfo: d = !1,
        } = e,
        c = (0, u.bG)([tg.A], () => tg.A.getGuild(t.getGuildId())),
        h = (0, u.bG)([nC.A], () => nC.A.getStageInstanceByChannel(t.id), [t.id]),
        A = (0, u.bG)([nm.Ay], () => nm.Ay.getActiveEventByChannel(t.id), [t.id]),
        g = (0, u.bG)([B.A], () => (0, nf.K)(B.A, c, t, h)),
        m = (0, u.bG)([], () =>
            t?.type === F.rbe.GUILD_VOICE ? K.intl.string(K.t["EE+P0H"]) : K.intl.string(K.t["0jeAXt"]),
        ),
        f = r.useRef(null);
    if (i || !g || t.isModeratorReportChannel() || t.isThread()) return null;
    let p = (0, s.jsx)(nh.R, { size: "xs", className: eu.gE, "aria-hidden": !0, color: "currentColor" });
    return (
        l &&
            (p = (0, s.jsx)(t4.A, {
                childRef: f,
                tutorialId: "instant-invite",
                position: "left",
                children: (0, s.jsx)("div", { ref: f, children: p }),
            })),
        (0, s.jsx)(el.m, {
            asContainer: !0,
            text: m,
            children: (0, s.jsx)(ei.D, {
                className: eE()(eu.Xs, o ? eu.Tf : void 0, d ? eu.bw : eu.UI),
                onClick: function () {
                    if (null != c) {
                        let e = nE.A.getAllActiveStreams().filter(
                            (e) => e.state !== F.XYD.ENDED && e.channelId === t.id,
                        );
                        (0, en.openModalLazy)(async () => {
                            let { default: l } = await Promise.all([
                                n.e("27574"),
                                n.e("21149"),
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
function nI(e) {
    let { channel: t } = e;
    return (0, s.jsx)(el.m, {
        asContainer: !0,
        text: K.intl.string(K.t["ROh4T+"]),
        children: (0, s.jsx)(ei.D, {
            className: eu.Xs,
            onClick: function () {
                (0, np.Ol)(t.guild_id, t.id);
            },
            "aria-label": K.intl.string(K.t["ROh4T+"]),
            children: (0, s.jsx)(es.P, { size: "xs", color: "currentColor", className: eu.gE }),
        }),
    });
}
function nb(e) {
    let { channel: t } = e;
    return (0, s.jsx)(el.m, {
        asContainer: !0,
        text: K.intl.string(K.t["N2c/Un"]),
        children: (0, s.jsx)(ei.D, {
            className: eu.Xs,
            onClick: function () {
                (0, np.jA)(t.guild_id, t.id, !0, { section: F.JJy.CHANNEL_LIST });
            },
            "aria-label": K.intl.string(K.t["N2c/Un"]),
            children: (0, s.jsx)(nA.A, { size: "xs", color: "currentColor", className: eu.gE }),
        }),
    });
}
class nG extends r.PureComponent {
    static defaultProps = { isDefaultChannel: !1 };
    renderEditButton() {
        return (0, s.jsx)(n_, { ...this.props });
    }
    renderInviteButton() {
        return (0, s.jsx)(nS, { ...this.props });
    }
    renderRemoveSuggestionButton() {
        return (0, s.jsx)(nI, { ...this.props });
    }
    renderAcceptSuggestionButton() {
        return (0, s.jsx)(nb, { ...this.props });
    }
    getClassName() {
        let { position: e, sortingPosition: t } = this.props;
        return nN(e, t);
    }
    isDisabled() {
        let { channel: e, sorting: t, sortingType: n } = this.props;
        return nx(e, t, n);
    }
}
var nR = n(166444),
    nv = n(790782);
let nj = tZ(function (e) {
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
        m = (0, u.bG)([eZ.A, e8.Ay], () => {
            let e = e8.Ay.getDirectoryChannelIds(t.id);
            return 0 === e.length ? null : eZ.A.getChannel(e[0]);
        }),
        f = (0, u.bG)([eZ.A], () => eZ.A.getChannel(m?.parent_id)),
        p = l === m?.id,
        C = (0, t$.Ay)(m),
        E = (0, u.bG)([B.A], () =>
            null != f ? B.A.can(F.xBc.MANAGE_CHANNELS, f) : null != t && B.A.can(F.xBc.MANAGE_CHANNELS, t),
        ),
        x = r.useCallback(
            (e) => {
                null != m &&
                    (0, eD.L3)(e, async () => {
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
    let N = nN(i, c),
        _ = nx(m, o, d),
        S = (0, s.jsx)("div", {
            className: eE()(N, { [eu.r9]: _, [eu.wH]: p }),
            "data-dnd-name": C,
            children: (0, s.jsxs)(nR.Ay, {
                className: eu.Ki,
                channel: m,
                guild: t,
                selected: p,
                onContextMenu: x,
                forceInteractable: !0,
                resolvedUnreadSetting: nv.e.ONLY_MENTIONS,
                children: [
                    (0, s.jsx)(nS, { channel: m, tabIndex: g }),
                    (0, s.jsx)(n_, { channel: m, disableManageChannels: a, tabIndex: g }),
                ],
            }),
        });
    return E && (S = A(h(S))), S;
});
var ny = n(34188),
    nM = n(733391),
    nL = n(832163),
    nT = n(517907),
    nU = n(31969),
    nD = n(44724),
    nO = n(849134),
    nP = n(770178),
    nV = n(65347);
let nw = Math.ceil(Math.sqrt(115200)),
    nH = (nw - 240) / 2,
    nB = r.forwardRef(function (e, t) {
        let { children: n } = e,
            [l, i] = r.useState(-1),
            a = r.useCallback((e) => {
                i(e.contentRect.width);
            }, []),
            o = (0, nP.w)(a, [], { fireOnMount: !0 }),
            [{ shineSpring: d }, c] = (0, eU.z)(() => ({
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
                        (0, s.jsx)(eT.animated.div, {
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
    nF = n(240248),
    nK = n(998218),
    nz = n(430825),
    nW = n(601551),
    nY = n(876772);
let nX = r.memo(function (e) {
    let { guild: t, selected: l } = e,
        i = r.useRef(null),
        a = r.useRef(null),
        o = (0, en.useHasAnyModalOpen)(),
        d = (0, u.bG)([eg.A], () => eg.A.hasLayers()),
        c = (0, eA.xr)((e) => e.fullScreenLayers.length > 0);
    r.useEffect(() => {
        (0, nM.Kh)(t.id);
    }, [t.id]);
    let A = (0, u.bG)([nL.A], () => nL.A.getAnnouncement(t.id)),
        g = A?.state === "success" ? A.announcement : void 0,
        [m, f] = (0, ea.x_)(L.M.GAME_SHOP_NEW_BADGE, t.id, g?.id ?? "", void 0, !0),
        p = m === L.M.GAME_SHOP_NEW_BADGE && null != g,
        C = (0, t_.nY)(t.id),
        E = (0, nU.F)("storefront_badge", { applicationId: C }),
        x = (0, nT.A)({ applicationId: C, location: "game_shop_channel_row" }),
        _ = null;
    p ? (_ = K.intl.string(K.t.y2b7CA)) : x && (_ = K.intl.string(nz.default.hriMCc)), null != E && (_ = E.text);
    let [S, I] = (0, ea.x_)(L.M.GAME_SHOP_NEW_DROP_POPOVER, t.id, g?.id ?? ""),
        b = S === L.M.GAME_SHOP_NEW_DROP_POPOVER && null != g;
    r.useEffect(() => {
        l && (p && f(eo.i.INDIRECT_ACTION), b && I(eo.i.INDIRECT_ACTION));
    }, [f, I, l, p, b]);
    let G = r.useCallback(() => {
            f(eo.i.TAKE_ACTION), I(eo.i.TAKE_ACTION);
            let e = (0, t_.mq)(t.id),
                n = nL.A.getStorefrontState(e)?.activePage ?? 0;
            (0, Y.pX)(F.BVt.CHANNELS_GAME_SHOP(t.id, n));
        }, [t.id, f, I]),
        R = r.useCallback(() => {
            (0, nD.X)({ guildId: t.id, forceFetch: b });
        }, [t.id, b]),
        v = r.useCallback(() => {
            I(eo.i.USER_DISMISS);
        }, [I]),
        j = r.useCallback(
            (e) => {
                null != t &&
                    (0, eD.L3)(e, async () => {
                        let { default: e } = await n.e("99523").then(n.bind(n, 41614));
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
                    background: (0, s.jsx)("div", { className: nY.D }),
                    innerClassName: nY.Z,
                    ref: a,
                    id: `game-shop-${t.id}`,
                    renderIcon: (e) =>
                        (0, s.jsx)(ny.U, {
                            size: "custom",
                            color: "currentColor",
                            width: 20,
                            height: 20,
                            className: e,
                        }),
                    text: (0, s.jsx)(N.E, {
                        variant: "text-md/medium",
                        className: nW.UU,
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
        T = r.useMemo(() => {
            if (null == g) return null;
            switch (g.type) {
                case "guild-application-announcement": {
                    let e =
                            null != g.assetId
                                ? nK.A.toURLSafe((0, nk.YE)(g.applicationId, g.assetId, 256, "webp"))
                                : void 0,
                        t =
                            null != g.backgroundImageAssetId
                                ? nK.A.toURLSafe((0, nk.YE)(g.applicationId, g.backgroundImageAssetId, 256, "webp"))
                                : void 0;
                    if (null == e) return null;
                    return {
                        graphicSource: { type: "sku", imageUrl: e, backgroundImageUrl: t },
                        title: K.intl.string(K.t["7PvvS9"]),
                        body: K.intl.formatToPlainString(K.t["9J4h1a"], { applicationName: g.applicationName }),
                    };
                }
                case "guild-discord-announcement": {
                    let { videoAssetFullyQualifiedURL: e, assetFullyQualifiedURL: t } = g;
                    if ((0, nF.uJ)(e) && (0, nF.uJ)(t)) return null;
                    return {
                        graphicSource: (0, nF.uJ)(e) ? { type: "asset", src: t } : { type: "video", src: e },
                        title: g.popoverTitle,
                        body: g.popoverBody,
                        actionLabel: g.popoverCta,
                    };
                }
                default:
                    return null;
            }
        }, [g]),
        D = r.useCallback(
            () =>
                b && null != T
                    ? (0, s.jsx)(nO.A, {
                          onActionClick: G,
                          onActionMouseDown: R,
                          onRender: y,
                          onRequestClose: v,
                          targetElementRef: a,
                          ...T,
                      })
                    : null,
            [b, T, G, R, y, v],
        );
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(nB, { ref: i, children: M }), !o && !d && !c && D()] });
});
var nq = n(740426),
    nJ = n(826673),
    nZ = n(591552),
    n$ = n(202776),
    nQ = n(454058),
    n0 = n(568548);
function n1(e) {
    let { guild: t, selected: l } = e,
        i = (0, n$.A)(t),
        a = (0, nJ.HX)(L.M.CHANNEL_BROWSER_NEW_BADGE_NUX),
        o = (0, ts.yK)([nQ.A], () =>
            Array.from(nQ.A.getNewChannelIds(t.id)).filter((e) => nQ.A.shouldIndicateNewChannel(t.id, e)),
        ),
        d = (0, ts.bG)([n0.Ay], () => n0.Ay.hasUnread(t.id, nv.P.GUILD_ONBOARDING_QUESTION)),
        c = o.length > tt.rR,
        u = (0, ts.bG)([nZ.A, n0.Ay], () => {
            let e = nZ.A.lastFetchedAt(t.id),
                n = n0.Ay.lastMessageId(t.id, nv.P.GUILD_ONBOARDING_QUESTION);
            if (null == n) return !1;
            let l = e1.default.extractTimestamp(n);
            return null != e && e > l;
        }),
        A = r.useCallback(() => {
            (0, Y.pX)(F.BVt.CHANNEL(t.id, i ? X.VV.CUSTOMIZE_COMMUNITY : X.VV.CHANNEL_BROWSER));
        }, [t.id, i]),
        g = r.useCallback(
            (e) => {
                (0, eD.L3)(e, async () => {
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
var n2 = n(855473);
function n3(e) {
    let { guild: t, selected: n } = e;
    return (0, s.jsx)(H.G, {
        id: `home-tab-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(n2.Z, { size: "md", color: "currentColor", className: e }),
        text: K.intl.string(K.t.VbpLyU),
        selected: n,
        onClick: function () {
            (0, Y.pX)(F.BVt.CHANNEL(t.id, X.VV.GUILD_HOME));
        },
    });
}
var n9 = n(5373),
    n7 = n(65995),
    n6 = n(408619);
function n5(e, t) {
    return (0, s.jsx)(N.E, { variant: "text-xs/bold", color: "text-default", children: e }, t);
}
let n4 = r.memo(function (e) {
    let { guild: t } = e,
        n = (0, u.bG)([td.h], () => td.h.getNewMemberActions(t.id), [t.id]),
        l = (0, u.bG)([n7.A], () => n7.A.getCompletedActions(t.id)),
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
            (0, s.jsxs)(ei.D, {
                ...o,
                role: "button",
                focusProps: { offset: { right: 4 } },
                className: n6.G9,
                onClick: function () {
                    (0, Y.pX)(F.BVt.CHANNEL(t.id, X.VV.GUILD_HOME));
                },
                children: [
                    (0, s.jsxs)("div", {
                        className: n6.A1,
                        children: [
                            (0, s.jsx)(x.D, { variant: "heading-sm/bold", children: K.intl.string(K.t.SnrR3x) }),
                            (0, s.jsxs)("div", {
                                className: n6.Ib,
                                children: [
                                    (0, s.jsx)(N.E, {
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        className: n6.Cv,
                                        children: K.intl.format(K.t.eqZ1lW, {
                                            numberHook: n5,
                                            total: a.toString(),
                                            completed: i.toString(),
                                        }),
                                    }),
                                    (0, s.jsx)(eB.A, {
                                        className: n6.UE,
                                        width: 16,
                                        height: 16,
                                        direction: eB.A.Directions.RIGHT,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, s.jsx)(n9.i, {
                        className: n6.hr,
                        foregroundGradientColor: [
                            h.A.unsafe_rawColors.GREEN_300.css,
                            h.A.unsafe_rawColors.GREEN_230.css,
                        ],
                        percent: (i / a) * 100 + 3,
                        animate: !0,
                    }),
                ],
            }),
            (0, s.jsx)("div", { role: "separator", className: n6.yF }),
        ],
    });
});
var n8 = n(581925);
function le(e) {
    let { guild: t, selected: n } = e;
    return (0, s.jsx)(H.G, {
        id: `official-messages-page-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(n8.L, { size: "md", color: "currentColor", className: e }),
        text: K.intl.string(K.t.xHEzFh),
        selected: n,
        onClick: function () {
            (0, Y.pX)(F.BVt.CHANNEL(t.id, X.VV.GUILD_OFFICIAL_MESSAGES));
        },
    });
}
var lt = n(514179);
function ln(e) {
    let { guild: t, selected: l } = e;
    return (0, s.jsx)(H.G, {
        id: `subscriptions-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(lt.A, { className: e }),
        text: K.intl.string(K.t["KzCF/6"]),
        selected: l,
        onClick: function () {
            (0, Y.pX)(F.BVt.CHANNEL(t.id, X.VV.ROLE_SUBSCRIPTIONS));
        },
        onContextMenu: function (e) {
            null != t &&
                (0, eD.L3)(e, async () => {
                    let { default: e } = await n.e("71911").then(n.bind(n, 978554));
                    return (n) => (0, s.jsx)(e, { ...n, guild: t });
                });
        },
    });
}
var ll = n(506774),
    li = n(95561),
    ls = n(289397),
    lr = n(486418),
    la = n(575926),
    lo = n(440293),
    ld = n(174459),
    lc = n(634654),
    lu = n(726965);
function lh(e) {
    let { guildId: t, selected: n, handleClick: l } = e,
        i = (0, lo.w)(t),
        r = (0, ts.bG)([tg.A], () => tg.A.getGuild(t)),
        a = r?.features.has(F.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) === !0,
        o = "false" === ll.w.get(lc.bJ, "false"),
        d = (0, ts.bG)([R.Ay], () => R.Ay.useReducedMotion);
    return (0, s.jsx)(H.G, {
        id: `shop-${t}`,
        className: eE()(lu.A2, { [lu.wH]: n, [lu.ST]: o }),
        innerClassName: lu.LE,
        renderIcon: (e) => (0, s.jsx)(la.h, { width: 20, height: 20, className: eE()([e, lu.sV]) }),
        text: K.intl.string(K.t.al5EXL),
        selected: n,
        onClick: l,
        trailing: (0, s.jsxs)("div", {
            className: lu.ai,
            children: [
                d
                    ? (0, s.jsx)(U.Lp, {
                          color: h.A.unsafe_rawColors.BRAND_260.css,
                          text: K.intl.string(K.t.y2b7CA),
                          className: lu.Ad,
                      })
                    : (0, s.jsx)("img", {
                          src: (0, ls.n)("server_products/storefront/money.gif"),
                          className: lu.TG,
                          alt: "",
                      }),
                n &&
                    (0, s.jsx)(ei.D, {
                        className: lu.b,
                        onClick: function (e) {
                            e.stopPropagation(),
                                (0, nJ.Dr)(L.M.SERVER_SHOP_PHANTOM_PREVIEW),
                                ld.default.track(F.HAw.GUILD_SHOP_PREVIEW_CLICK, {
                                    ...(0, li.H$)(t),
                                    action_taken: lc.hN.DISMISS_CHANNEL_ROW,
                                }),
                                (i && a) || (0, Y.bG)(F.BVt.CHANNEL(t, e8.Ay.getDefaultChannel(t)?.id));
                        },
                        "aria-label": K.intl.string(K.t.cpT0Cq),
                        children: (0, s.jsx)(tj.a, { size: "xs", color: "currentColor" }),
                    }),
            ],
        }),
    });
}
function lA(e) {
    let { guild: t, selected: l } = e;
    function i() {
        ll.w.set(lc.bJ, "true"), (0, Y.pX)(F.BVt.CHANNEL(t.id, X.VV.GUILD_SHOP));
    }
    return (0, lr.P)(t)
        ? (0, s.jsx)(lh, { guildId: t.id, selected: l, handleClick: i })
        : (0, s.jsx)(H.G, {
              id: `shop-${t.id}`,
              renderIcon: (e) => (0, s.jsx)(la.h, { width: 20, height: 20, className: e }),
              text: K.intl.string(K.t.al5EXL),
              selected: l,
              onClick: i,
              onContextMenu: function (e) {
                  null != t &&
                      (0, eD.L3)(e, async () => {
                          let { default: e } = await n.e("52565").then(n.bind(n, 345332));
                          return (n) => (0, s.jsx)(e, { ...n, guild: t });
                      });
              },
          });
}
var lg = n(308528),
    lm = n(262763),
    lf = n(499211),
    lp = n(406704),
    lC = n(747926),
    lE = n(977997),
    lx = n(807632),
    lN = n(37411);
function l_(e) {
    let { thread: t, tabIndex: n } = e,
        l = (0, lx.YG)(t),
        i = (0, lx.IO)(t),
        r = (0, lp._M)(t);
    return l && i && r ? (0, s.jsx)(lS, { thread: t, tabIndex: n }) : null;
}
function lS(e) {
    let { thread: t, tabIndex: n } = e,
        l = (0, u.bG)([lE.A], () => lE.A.isInChannel(t.id), [t.id]),
        { needSubscriptionToAccess: i } = (0, lf.A)(t.id),
        a = r.useCallback(() => {
            lm.A.handleVoiceConnect({ channel: t, connected: l, needSubscriptionToAccess: i, locked: !1 });
        }, [t, l, i]),
        o = r.useCallback(() => {
            (0, lC.JA)(t, !0, lN.H9.CHANNEL_LIST);
        }, [t]);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(el.m, {
                asContainer: !0,
                text: K.intl.string(K.t["96ANUN"]),
                children: (0, s.jsx)(ei.D, {
                    className: eu.Xs,
                    onClick: a,
                    tabIndex: n,
                    "aria-label": K.intl.string(K.t["96ANUN"]),
                    children: (0, s.jsx)(S.H, { size: "xs", color: "currentColor", className: eu.gE }),
                }),
            }),
            (0, s.jsx)(el.m, {
                asContainer: !0,
                text: K.intl.string(K.t.ZXxLQg),
                children: (0, s.jsx)(ei.D, {
                    className: eu.Xs,
                    onClick: o,
                    tabIndex: n,
                    "aria-label": K.intl.string(K.t.ZXxLQg),
                    children: (0, s.jsx)(I.o, { size: "xs", color: "currentColor", className: eu.gE }),
                }),
            }),
        ],
    });
}
var lI = n(152007);
function lb(e) {
    return null != e && e > 0;
}
var lG = n(405018),
    lR = n(428689),
    lv = n(785574);
function lj(e) {
    let { total: t, users: n, videoLimit: l } = e;
    return (0, s.jsxs)("div", {
        className: lv.iE,
        children: [
            (0, s.jsxs)("span", {
                className: eE()(lv.VV, { [lv.Ki]: l, [lv.$G]: n >= 100 }),
                children: [
                    l ? (0, s.jsx)(lR.n, { size: "md", color: "currentColor", className: lv.LB }) : null,
                    n.toString().padStart(2, "0"),
                ],
            }),
            (0, s.jsx)("span", {
                className: eE()(lv.X5, { [lv.$G]: t >= 100 }),
                children: t.toString().padStart(2, "0"),
            }),
        ],
    });
}
function ly(e) {
    let { channel: t, video: n, userCount: l } = e,
        { limit: i } = (0, lG.A)(t),
        r = -1,
        a = !1;
    return (
        t.userLimit > 0 && (r = t.userLimit),
        n && i > 0 && ((a = r < 0 || i < r), (r = r > 0 ? Math.min(r, i) : i)),
        (0, s.jsx)(lj, { users: l, total: r, videoLimit: a })
    );
}
var lM = n(664841);
function lL(e) {
    let { mentionsCount: t, isMentionLowImportance: n } = e;
    return (0, s.jsx)("div", {
        className: lM.R,
        "aria-hidden": !0,
        children: (0, s.jsx)(U.hV, {
            count: t,
            color: n ? h.A.colors.BACKGROUND_MOD_STRONG.css : h.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
        }),
    });
}
var lT = n(588224),
    lU = n(684086);
function lD(e) {
    let { thread: t, countInVoice: n, hasVideo: l, mentionCount: i, isMentionLowImportance: r } = e,
        a = n > 0 && t.userLimit > 0,
        o = lb(i);
    return a || o
        ? (0, s.jsxs)("div", {
              className: eu.yW,
              children: [
                  a ? (0, s.jsx)(ly, { userCount: n, video: l, channel: t }) : null,
                  o ? (0, s.jsx)(lL, { mentionsCount: i, isMentionLowImportance: r }) : null,
              ],
          })
        : null;
}
function lO(e) {
    let { style: t, withGuildIcon: n, inverted: l } = e,
        i = { className: eE()(lU.GI, { [lU.a7]: n }, { [lU.BJ]: l }), style: t },
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
let lP = r.memo(function (e) {
        let { thread: t, isSelectedChannel: l, isSelectedVoice: i, isLast: a, withGuildIcon: o } = e,
            c = (0, u.bG)([e$.Ay], () => e$.Ay.getVoiceStatesForChannel(t), [t]),
            h = (0, u.bG)([lE.A], () => lE.A.hasVideo(t.id)),
            {
                unread: A,
                mentionCount: g,
                isMentionLowImportance: m,
            } = (0, u.cf)([n0.Ay], () => ({
                unread: n0.Ay.hasUnread(t.id),
                mentionCount: n0.Ay.getMentionCount(t.id),
                isMentionLowImportance: n0.Ay.getIsMentionLowImportance(t.id),
            })),
            f = (0, u.bG)([lI.A], () => lI.A.isMuted(t.id)),
            p = r.useCallback(
                (e) => {
                    (0, lC.JA)(t, !e.shiftKey, lN.H9.CHANNEL_LIST);
                },
                [t],
            ),
            C = r.useCallback(() => {
                lg.A.preload(t.guild_id, t.id);
            }, [t.guild_id, t.id]),
            E = r.useCallback(
                (e) => {
                    let l = eZ.A.getChannel(t.id);
                    null != l &&
                        (0, eD.L3)(e, async () => {
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
            className: eE()(eu.fx, { [eu.wH]: l }),
            children: [
                (0, s.jsx)(lO, { withGuildIcon: o }),
                a
                    ? null
                    : (0, s.jsx)(lO, {
                          withGuildIcon: o,
                          inverted: !0,
                          style: { transform: "rotateX(180deg) translateY(-9px)" },
                      }),
                (0, s.jsx)(tG.vN, {
                    focusTarget: S,
                    ringTarget: S,
                    offset: { top: 2, bottom: 2, right: 4 },
                    children: (0, s.jsxs)("div", {
                        className: eE()(eu.Ki, nW.iE, nW.ZS, {
                            [nW.J1]: l,
                            [nW.F4]: !l && f,
                            [nW.V2]: !f && !l && A,
                            [nW.lY]: o,
                        }),
                        onMouseDown: C,
                        onContextMenu: E,
                        children: [
                            !A || f || l ? null : (0, s.jsx)("div", { className: eE()(nW.gy, nW.WS) }),
                            (0, s.jsx)(ei.D, {
                                ..._,
                                innerRef: S,
                                className: nW.nf,
                                onClick: p,
                                "aria-label": I,
                                focusProps: { enabled: !1 },
                                children: (0, s.jsxs)("div", {
                                    className: eE()(nW.Y5, nW.__invalid_threadMainContent),
                                    children: [
                                        (0, s.jsx)(tI.A, { className: nW.UU, "aria-hidden": !0, children: t.name }),
                                        (0, s.jsxs)("div", {
                                            className: nW.Y_,
                                            onClick: nR.dG,
                                            onKeyDown: nR.dG,
                                            children: [
                                                (0, s.jsx)(lD, {
                                                    thread: t,
                                                    countInVoice: x,
                                                    hasVideo: h,
                                                    mentionCount: g,
                                                    isMentionLowImportance: m,
                                                }),
                                                (0, s.jsx)(l_, { thread: t, tabIndex: _.tabIndex }),
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
    lV = r.memo(function (e) {
        let { channel: t, selectedChannel: n, selectedVoiceChannelId: l, sortedThreadIds: i, withGuildIcon: r } = e,
            a = (0, t$.Ay)(t),
            { density: o } = (0, C.wR)(),
            d = (0, u.yK)([eZ.A], () => i.map((e) => eZ.A.getChannel(e)).filter(eQ.Vq), [i]),
            c = (0, u.bG)([e$.Ay], () => {
                let e = d[d.length - 1];
                if (null == e) return 0;
                let t = e$.Ay.getVoiceStates(e.guild_id)[e.id];
                return null == t || 0 === t.length ? 0 : l !== e.id ? 40 : 32 * t.length + 8;
            });
        return (0, s.jsx)("li", {
            className: lU.kL,
            children: (0, s.jsxs)("ul", {
                role: "group",
                "aria-label": K.intl.formatToPlainString(K.t.EiyIi6, { channelName: a }),
                children: [
                    (0, s.jsx)("div", {
                        className: eE()(lU.eh, { [lU.ET]: r }),
                        style: { bottom: ("cozy" === o ? 28 : 24) + c },
                    }),
                    d.map((e, t) =>
                        (0, s.jsx)(
                            lP,
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
var lw = n(922016),
    lH = n(367513),
    lB = n(296216),
    lk = n(963027),
    lF = n(202384),
    lK = n(51758),
    lz = n(139033),
    lW = n(305866),
    lY = n(123292),
    lX = n(830215),
    lq = n(315982),
    lJ = n(480900),
    lZ = n(557722),
    l$ = n(834942),
    lQ = n(287809),
    l0 = n(53516),
    l1 = n(914081),
    l2 = (((l = {})[(l.VOICE = 0)] = "VOICE"), l);
let l3 = function (e) {
    let { type: t, guildId: l, closePopout: i } = e,
        r = (0, y.GV)(),
        a = (0, u.bG)([l$.A], () => l$.A.getCheck(l), [l]),
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
        : (0, s.jsxs)(lW.l, {
              className: l1.kL,
              "aria-labelledby": r,
              children: [
                  (0, s.jsx)("img", { alt: "", className: l1.Sl, src: n(303528) }),
                  (0, s.jsxs)("div", {
                      className: l1.Qs,
                      children: [
                          (0, s.jsx)(x.D, { variant: "heading-md/semibold", id: r, children: g }),
                          (0, s.jsx)(N.E, { color: "text-default", variant: "text-sm/normal", children: m }),
                          (0, s.jsxs)("div", {
                              className: l1.UD,
                              children: [
                                  null != f
                                      ? (0, s.jsx)("div", {
                                            "data-button-hoisted-classname-wrapper": !0,
                                            className: l1.FS,
                                            children: (0, s.jsx)(tb.$, {
                                                variant: "primary",
                                                text: f,
                                                onClick: function () {
                                                    o
                                                        ? lq.R()
                                                        : c
                                                          ? (0, en.openModalLazy)(
                                                                async () => {
                                                                    let { default: e } = await Promise.all([
                                                                        n.e("49747"),
                                                                        n.e("72712"),
                                                                        n.e("18423"),
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
                                                                { modalKey: l0.V },
                                                            )
                                                          : d
                                                            ? (lX.A.verifyResend(),
                                                              (0, lz.A)({
                                                                  title: K.intl.string(K.t.LykQYk),
                                                                  subtitle: K.intl.format(K.t.azKEPy, {
                                                                      email: lQ.default.getCurrentUser()?.email,
                                                                  }),
                                                              }))
                                                            : h && null != A && (0, lJ.b)(A, l),
                                                        i();
                                                },
                                            }),
                                        })
                                      : null,
                                  o || c || d
                                      ? (0, s.jsx)(lY.Q, {
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
var l9 = n(824865),
    l7 = n(378570),
    l6 = n(790535),
    l5 = n(113783),
    l4 = n(96566),
    l8 = n(280450),
    ie = n(312006),
    it = n(505543),
    il = n(994500),
    ii = n(685399),
    is = n(475889),
    ir = n(693879),
    ia = n(435470),
    io = n(35275),
    id = n(138383);
function ic(e) {
    let { locked: t } = e;
    return (0, s.jsx)("div", {
        className: eE()(eu.Xs, id.U),
        children: (0, s.jsx)(io.A, {
            className: eu.gE,
            color: t ? h.A.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css : void 0,
        }),
    });
}
var iu = n(695633),
    ih = n(669715),
    iA = n(769015),
    ig = n(364132);
function im(e) {
    let { className: t, embeddedApps: n, muted: l } = e;
    if (n.length <= 0) return null;
    {
        if (1 === n.length)
            return (0, s.jsx)("div", {
                className: eE()(ig.kL, t, l && ig.F4),
                children: (0, s.jsx)(iA.A, { game: n[0].application, className: ig.wK }),
            });
        let e = n.length - 1;
        return (0, s.jsxs)("div", {
            className: eE()(ig.kL, t, l && ig.F4),
            children: [
                (0, s.jsx)(iA.A, { game: n[0].application, className: ig.wK }),
                2 === n.length
                    ? (0, s.jsx)(iA.A, { game: n[1].application, className: ig.wK })
                    : (0, s.jsx)(N.E, {
                          className: ig.ju,
                          variant: "text-xs/bold",
                          color: "interactive-text-active",
                          children: `+${e}`,
                      }),
            ],
        });
    }
}
function ip(e) {
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
        m = (0, u.bG)([n0.Ay], () => n0.Ay.getMentionCount(t.id)),
        f = (0, u.bG)([n0.Ay], () => n0.Ay.getIsMentionLowImportance(t.id)),
        p = (0, ii.Ay)(t),
        C = (0, u.bG)([B.A], () => !B.A.can(F.xBc.CONNECT, t)),
        E = (0, is.H)(t),
        x = (0, u.bG)([lE.A], () => lE.A.hasVideo(t.id)),
        _ = (0, l4.qT)(t.id) && t.isGuildStageVoice(),
        S = (function (e) {
            let { channel: t, locked: n, video: l, selected: i } = e;
            return (
                (function (e) {
                    let { channel: t, video: n, considerMaxStageVoiceUserLimit: l = !0 } = e,
                        { limit: i } = (0, lG.A)(t),
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
        I = (0, u.bG)([iu.A], () => iu.A.getNewThreadCount(t.guild_id, t.id)),
        b = (0, ia.ed)(t.guild_id, t.id),
        G = (0, u.bG)([tg.A], () => tg.A.getGuild(t.guild_id)?.features.has(F.GuildFeatures.COMMUNITY) ?? !1);
    if (lb(m)) return (0, s.jsx)(lL, { mentionsCount: m, isMentionLowImportance: f });
    if (o) return (0, s.jsx)(ic, { locked: d });
    if (c) return (0, s.jsx)(U.Lp, { text: K.intl.string(K.t.y2b7CA), color: h.A.colors.BADGE_BACKGROUND_BRAND.css });
    if (!A && g === nv.e.ALL_MESSAGES && t.isForumLikeChannel() && null != I && I > 0)
        return (0, s.jsx)(N.E, {
            variant: "text-xs/semibold",
            color: "text-brand",
            children: K.intl.format(K.t.GkAbqY, { count: (0, U.Gu)(I) }),
        });
    if (!A && t.isForumLikeChannel() && null != b && b > 0)
        return (0, s.jsx)(N.E, { variant: "text-xs/semibold", color: "text-muted", children: (0, U.Gu)(b) });
    let R = i?.length ?? 0;
    return null != r && r && S
        ? (0, s.jsx)(ly, { userCount: R, video: x || _, channel: t })
        : l && (0, ih.t)(i) && G
          ? (0, s.jsx)(U.Lp, { text: K.intl.string(K.t.dI3q4h), color: h.A.unsafe_rawColors.RED_400.css })
          : null != E
            ? (0, s.jsx)(ir.z, { textColor: "text-feedback-positive", entry: { start: E } })
            : null != a && a && p.length > 0
              ? (0, s.jsx)(im, { embeddedApps: p, muted: A })
              : null;
}
var iC = n(182222);
class iE extends nG {
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
        return (0, nr.Pd)(e, lE.A, tg.A);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        if (n) return eu.ZS;
        if (null != t)
            if (e > t) return eu.mU;
            else return eu.TR;
        return eu.fx;
    }
    handleClick = () => {
        let { channel: e, locked: t, connected: n, unverifiedAccount: l, isSuggestedSection: i } = this.props,
            s = e.getGuildId();
        null != s && (0, lK.V)(s) && (0, lF.Ze)(s),
            l && this.setState({ shouldShowGuildVerificationPopout: !0 }),
            t || n || e.isRoleSubscriptionTemplatePreviewChannel() || (0, l6.av)(e),
            __OVERLAY__ || (0, l7.iN)(e.id, i ? { source: l9.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
    };
    handleClickChat = () => {
        let { channel: e, locked: t, isSuggestedSection: n } = this.props;
        __OVERLAY__ || t || (0, l7.iN)(e.id, n ? { source: l9.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            l = tg.A.getGuild(t.getGuildId());
        null != l &&
            (0, eD.L3)(e, async () => {
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
                type: l2.VOICE,
                guildId: e.guild_id,
                closePopout: this.closeGuildVerificationPopout,
            });
        throw Error("VoiceChannel.renderPopout: There must always be something to render");
    };
    renderOpenChatButton = () => {
        let { channel: e, locked: t, forceShowButtons: n } = this.props;
        if (!t)
            return (0, s.jsx)(el.m, {
                asContainer: !0,
                text: K.intl.string(K.t.ZXxLQg),
                children: (0, s.jsx)(ei.D, {
                    className: eE()(eu.Xs, n ? eu.Tf : null),
                    onClick: () => {
                        lH.A.updateChatOpen(e.id, !0), this.handleClickChat();
                    },
                    "aria-label": K.intl.string(K.t.ZXxLQg),
                    children: (0, s.jsx)(I.o, { size: "xs", color: "currentColor", className: eu.gE }),
                }),
            });
    };
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e ? null : (0, s.jsx)("div", { className: eu.yW, children: e });
    }
    getTooltipText = () => {
        let { connected: e } = this.props;
        return this.isFull() && !e ? K.intl.string(K.t.rZfiNq) : null;
    };
    renderSubtitle = () => {
        let e = this.props.stageInstance?.topic;
        return null == e ? null : (0, s.jsx)(tI.A, { children: e });
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
                className: eE()(this.getModeClass(), { [eu.r9]: this.isDisabled() }),
                "data-dnd-name": (0, t$.m1)(e, lQ.default, il.A),
                children: [
                    (0, s.jsx)(lw.Y, {
                        targetElementRef: this.channelItemRef,
                        position: "right",
                        renderPopout: this.renderPopout,
                        spacing: 17,
                        onRequestClose: this.closeGuildVerificationPopout,
                        shouldShow: C,
                        children: () =>
                            (0, s.jsx)(el.m, {
                                text: this.getTooltipText(),
                                children: (0, s.jsxs)(nR.Ay, {
                                    ref: this.channelItemRef,
                                    className: eu.Ki,
                                    iconClassName: eE()({ [iC.G]: null != u }),
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
                                    "aria-label": (0, lk.Ay)({
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
let ix = tZ((0, lB.F)(iE));
function iN(e) {
    var t;
    let n,
        l,
        { guild: i, channel: r, disableSorting: a, isFavoriteCategory: o, collapsed: d, voiceStates: c } = e,
        h = (0, u.cf)([n0.Ay], () => ({ unread: n0.Ay.hasUnread(r.id), mentionCount: n0.Ay.getMentionCount(r.id) })),
        A = (0, u.bG)([tH.Ay], () => tH.Ay.resolveUnreadSetting(r)),
        g = (0, u.cf)([eZ.A, l$.A, B.A], () => {
            let e = eZ.A.getChannel(r.parent_id),
                t = l$.A.getCheck(r.guild_id);
            return {
                canManageChannel: null != i && B.A.can(F.xBc.MANAGE_CHANNELS, r),
                canReorderChannel:
                    !0 !== a &&
                    (i.id === na.Vc ||
                        (null != e ? B.A.can(F.xBc.MANAGE_CHANNELS, e) : B.A.can(F.xBc.MANAGE_CHANNELS, i))),
                canMoveMembers: B.A.can(F.xBc.MOVE_MEMBERS, r),
                locked: !B.A.can(F.xBc.CONNECT, r),
                bypassLimit: B.A.can(F.xBc.MOVE_MEMBERS, r),
                unverifiedAccount: !t.canChat,
            };
        }),
        m = (0, u.bG)([tV.A], () => tV.A.isCollapsed(r.parent_id)),
        f =
            ((t = r.id),
            (n = (0, it.A)(t)),
            (l = (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return (0, u.cf)([ie.Ay, l8.default], () => {
                    let n = l8.default.getId();
                    return ie.Ay.getPermissionsForUser(n, e, t);
                }, [e, t]);
            })(t, !0).moderator),
            !n && l ? 1 : 0),
        p = (0, u.bG)([nC.A], () => nC.A.getStageInstanceByChannel(r.id), [r.id]),
        C = (0, l5.zy)(r.id, e3.ip.AUDIENCE),
        { isSubscriptionGated: E, needSubscriptionToAccess: x } = (0, lf.A)(r.id),
        N = (0, u.bG)([tH.Ay], () => tH.Ay.isFavorite(i.id, r.id)),
        _ = (0, l4.xn)(r.id),
        S = ip({
            channel: r,
            isChannelSelected: !1,
            isChannelCollapsed: d,
            voiceStates: c,
            isSubscriptionGated: E,
            needSubscriptionToAccess: x,
            enableConnectedUserLimit: _ || (r.userLimit > 0 && r.userLimit < F.RCc),
        }),
        I = e.connected && null == S;
    return (0, s.jsx)(ix, {
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
function i_(e, t) {
    let n = t.getGuildId();
    if (null == n) throw Error("TextChannel, preloadChannel: Channel does not have a guildId");
    lg.A.preload(n, t.id);
}
let iS = tZ(
        class extends nG {
            handleContextMenu = (e) => {
                let { channel: t } = this.props,
                    l = tg.A.getGuild(t.getGuildId());
                null != l &&
                    (0, eD.L3)(e, async () => {
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
                (0, Y.pX)(F.BVt.CHANNEL(t, e.id), {
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
                        className: eE()(this.getClassName(), { [eu.r9]: this.isDisabled() }),
                        "data-dnd-name": (0, t$.m1)(e, lQ.default, il.A),
                        children: (0, s.jsxs)(nR.Ay, {
                            className: eu.Ki,
                            channel: e,
                            selected: t,
                            onClick: this.handleClick,
                            onMouseDown: i_,
                            onContextMenu: this.handleContextMenu,
                            connectDragPreview: r ? i : null,
                            "aria-label": (0, lk.Ay)({ channel: e }),
                            resolvedUnreadSetting: nv.e.ONLY_MENTIONS,
                            children: [this.renderInviteButton(), this.renderEditButton()],
                        }),
                    });
                return r ? n(l(a)) : a;
            }
        },
    ),
    iI = r.memo(function (e) {
        let { channel: t, guild: n, disableSorting: l } = e,
            i = (0, u.cf)([eZ.A, B.A], () => {
                let e = eZ.A.getChannel(t.parent_id);
                return {
                    canManageChannel: B.A.can(F.xBc.MANAGE_CHANNELS, t),
                    canReorderChannel:
                        !0 !== l && null != e ? B.A.can(F.xBc.MANAGE_CHANNELS, e) : B.A.can(F.xBc.MANAGE_CHANNELS, n),
                };
            });
        return (0, s.jsx)(iS, { ...i, ...e });
    });
var ib = n(172218),
    iG = n(811024),
    iR = n(323073);
function iv(e) {
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
var ij = n(414808),
    iy = n(302005),
    iM = n(696451),
    iL = n(763827),
    iT = n(56059),
    iU = n(163328),
    iD = n(778712),
    iO = n(730134),
    iP = n(707539),
    iV = n(486020),
    iw = n(49741);
function iH(e) {
    let { channel: t } = e,
        l = (0, u.yK)([iu.A, n0.Ay, B.A], () => {
            let e = iu.A.getActiveJoinedRelevantThreadsForParent(t.guild_id, t.id);
            return o()(iu.A.getActiveJoinedThreadsForParent(t.guild_id, t.id))
                .values()
                .map((e) => e.channel)
                .concat(o().values(iu.A.getActiveUnjoinedThreadsForParent(t.guild_id, t.id)))
                .filter((t) => !(t.id in e) && B.A.can(F.xBc.VIEW_CHANNEL, t))
                .sort((e, t) => {
                    let n = n0.Ay.lastMessageId(e.id),
                        l = n0.Ay.lastMessageId(t.id);
                    return e1.default.compare(n, l);
                })
                .reverse()
                .value();
        }),
        i = t.isForumLikeChannel() ? 5 : 3,
        a = t.isForumLikeChannel() ? iT.b : iU.y;
    return (
        r.useEffect(() => {
            (0, iP.TE)();
        }, []),
        (0, s.jsxs)("div", {
            className: iw.SW,
            children: [
                (0, s.jsx)(N.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: iw.DD,
                    children: t.isForumLikeChannel() ? K.intl.string(K.t.ioVdO2) : K.intl.string(K.t.VNYs2v),
                }),
                (0, s.jsxs)("div", {
                    className: iw.p_,
                    children: [
                        l
                            .slice(0, t.isForumLikeChannel() ? l.length : i)
                            .map((e) => (0, s.jsx)(iB, { thread: e }, e.id))
                            .filter((e) => r.isValidElement(e))
                            .slice(0, i),
                        (0, s.jsxs)(ei.D, {
                            className: iw.nM,
                            onClick: function () {
                                t.isForumLikeChannel()
                                    ? (0, l7.iN)(t.id)
                                    : (0, en.openModalLazy)(async () => {
                                          let { default: e } = await Promise.all([
                                              n.e("61178"),
                                              n.e("69977"),
                                              n.e("1248"),
                                              n.e("94149"),
                                              n.e("58921"),
                                              n.e("70469"),
                                              n.e("98232"),
                                              n.e("77066"),
                                              n.e("81647"),
                                              n.e("76602"),
                                              n.e("40402"),
                                              n.e("39970"),
                                              n.e("72789"),
                                              n.e("79049"),
                                              n.e("65437"),
                                              n.e("66948"),
                                              n.e("65927"),
                                              n.e("51743"),
                                              n.e("84042"),
                                              n.e("65225"),
                                          ]).then(n.bind(n, 126768));
                                          return (n) => (0, s.jsx)(e, { channel: t, ...n });
                                      });
                            },
                            children: [
                                (0, s.jsx)("div", {
                                    className: iw.R4,
                                    children: (0, s.jsx)(a, { size: "custom", className: iw.Kk }),
                                }),
                                (0, s.jsx)("div", {
                                    className: iw.Pf,
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
function iB(e) {
    let { thread: t } = e,
        n = (0, u.bG)([lQ.default], () => lQ.default.getUser(t.ownerId)),
        l = (0, iP.JO)(t);
    return (0, s.jsxs)(ei.D, {
        className: iw.nM,
        onClick: function (e) {
            (0, lC.JA)(t, t.isForumPost() ? e.shiftKey : !e.shiftKey, lN.H9.POPOUT);
        },
        children: [
            (0, s.jsx)("div", {
                className: iw.R4,
                children:
                    null == n
                        ? (0, s.jsx)("img", {
                              className: iw.my,
                              src: iV.Ay.getDefaultAvatarURL(void 0, void 0),
                              alt: "",
                          })
                        : (0, s.jsx)(iO.A, { className: iw.my, user: n, size: iD._3.SIZE_16 }),
            }),
            (0, s.jsxs)("div", {
                className: iw.Pf,
                children: [
                    (0, s.jsx)(N.E, { className: iw.UU, variant: "text-sm/normal", color: "none", children: t.name }),
                    (0, s.jsx)(N.E, { variant: "text-sm/normal", color: "text-muted", children: "\u2022" }),
                    (0, s.jsx)(N.E, {
                        className: iw.vE,
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: (0, iP.aK)(l),
                    }),
                ],
            }),
        ],
    });
}
var ik = n(364522),
    iF = n(302959),
    iK = n(35903),
    iz = n(970928),
    iW = n(427262),
    iY = n(989628);
let iX = nl.DN.SIZE_24;
function iq(e) {
    let { activity: t, embeddedApp: n } = e,
        l = t?.assets,
        i = t?.application_id;
    if (null == l || (null == l.large_image && null == l.small_image)) {
        let e = iV.Ay.getApplicationIconURL({ id: n.application.id, icon: n.application.icon }),
            t = n.application.name;
        return (0, s.jsx)(el.m, {
            text: t,
            position: "top",
            asContainer: !0,
            children: (0, s.jsx)("img", { alt: t, src: e, className: iY.P3 }),
        });
    }
    let r = l.large_image ?? l.small_image;
    return null != r
        ? (0, s.jsx)("img", { alt: l.large_text ?? "", src: (0, iz.uD)(i, r, [128, 128]), className: iY.P3 })
        : null;
}
function iJ(e) {
    let { activity: t, embeddedApp: n, channel: l } = e,
        i = Array.from(n.embeddedActivity.userIds),
        r = (0, u.yK)([lQ.default], () => i.map((e) => lQ.default.getUser(e)).filter(eQ.Vq));
    return (0, s.jsx)("div", {
        className: iY.ec,
        children: (0, s.jsxs)("div", {
            className: iY.Wh,
            children: [
                (0, s.jsx)(iq, { activity: t, embeddedApp: n }),
                (0, s.jsxs)("div", {
                    className: iY.X0,
                    children: [
                        (0, s.jsx)(x.D, {
                            variant: "heading-sm/semibold",
                            color: "text-strong",
                            className: iY.wx,
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
                            (0, s.jsx)(nl.Ay, {
                                className: iY.TN,
                                guildId: l.guild_id,
                                users: r,
                                size: iX,
                                max: 7,
                                renderUser: function (e) {
                                    if (null == e || e === nl.mt) return null;
                                    let t = iW.Ay.getName(e);
                                    return (0, s.jsx)(
                                        el.m,
                                        {
                                            asContainer: !0,
                                            text: t,
                                            position: "bottom",
                                            children: (0, s.jsx)("img", {
                                                src: e.getAvatarURL(l.guild_id, iX),
                                                alt: t,
                                                className: iY.my,
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
var iZ = n(237913);
function i$(e) {
    let { channel: t, presenceActivity: n, embeddedApp: l, onAction: i } = e,
        r = Array.from(l.embeddedActivity.userIds),
        a = (0, u.bG)([lQ.default], () => lQ.default.getUser(r[0]));
    return null == a
        ? null
        : (0, s.jsxs)("div", {
              className: iZ.Eb,
              children: [
                  (0, s.jsx)("div", {
                      className: iZ.Il,
                      children: (0, s.jsx)(iJ, { activity: n, embeddedApp: l, channel: t }),
                  }),
                  (0, s.jsx)("div", {
                      className: iZ.M4,
                      children: (0, s.jsx)(iK.A, {
                          type: iF.M.VOICE_CHANNEL,
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
var iQ = n(713654),
    i0 = n(980248);
function i1(e) {
    let { channel: t } = e,
        n = (0, u.bG)([tg.A], () => tg.A.getGuild(t.guild_id)),
        l = (0, t$.Ay)(t),
        i = (0, iQ.gU)(t, n);
    return null == i
        ? null
        : (0, s.jsxs)("div", {
              className: i0.hY,
              children: [
                  (0, s.jsx)(i, { className: i0.p }),
                  (0, s.jsx)(N.E, {
                      variant: "text-md/semibold",
                      color: "interactive-text-default",
                      className: i0.HA,
                      children: l,
                  }),
              ],
          });
}
var i2 = n(565449);
function i3(e) {
    let { channel: t, onAction: n } = e,
        l = (0, ii.Ay)(t),
        i = Array.from((0, ii.Rz)(l).values());
    return 0 === i.length
        ? null
        : (0, s.jsxs)(ik.Ip, {
              className: i2.kL,
              children: [
                  (0, s.jsx)("div", { className: i2.oT, children: (0, s.jsx)(i1, { channel: t }) }),
                  (0, s.jsx)("div", { className: i2.zN }),
                  i.map((e, l) =>
                      (0, s.jsx)(
                          i$,
                          { embeddedApp: e, presenceActivity: e.presenceActivity ?? void 0, channel: t, onAction: n },
                          l,
                      ),
                  ),
              ],
          });
}
class i9 extends nG {
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
        lg.A.preload(t ?? F.ME, e.id);
    };
    renderPopout = (e) => {
        let { channel: t, sorting: n, embeddedApps: l, channelIsContentGated: i } = this.props,
            { shouldShowActivities: r } = this.state;
        return t.isModeratorReportChannel() || i
            ? null
            : null != l && l.length > 0 && r && !n
              ? (0, s.jsx)(i3, { onAction: this.handleActivitiesPopoutClose, channel: t })
              : (0, s.jsx)(iH, { ...e, channel: this.props.channel });
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
            return void (0, eD.L3)(e, async () => {
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
            let l = lQ.default.getUser(t.getRecipientId());
            null != l &&
                (0, eD.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("97422"),
                        n.e("40351"),
                        n.e("76279"),
                        n.e("45309"),
                        n.e("97705"),
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
                        n.e("98199"),
                        n.e("17244"),
                        n.e("41175"),
                        n.e("39778"),
                    ]).then(n.bind(n, 385913));
                    return (n) => (0, s.jsx)(e, { ...n, user: l, channel: t, showModalItems: !1 });
                });
            return;
        }
        if (t.isModeratorReportChannel())
            return void (0, eD.L3)(e, async () => {
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
        let l = tg.A.getGuild(t.getGuildId());
        null != l &&
            (0, eD.L3)(e, async () => {
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
        return null == e ? null : (0, s.jsx)("div", { className: eu.yW, children: e });
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
            R = iv(m),
            v = (0, s.jsxs)("li", {
                className: eE()(this.getClassName(), { [eu.r9]: this.isDisabled(), [eu.wH]: n }),
                "data-dnd-name": (0, t$.m1)(e, lQ.default, il.A),
                onMouseEnter: b || G ? this.handleMouseEnter : void 0,
                onMouseLeave: b || G ? this.handleMouseLeave : void 0,
                children: [
                    (0, s.jsx)(lw.Y, {
                        targetElementRef: I,
                        position: "right",
                        renderPopout: this.renderPopout,
                        onRequestClose: this.handleClosePopout,
                        spacing: 17,
                        shouldShow: (b && this.state.shouldShowThreadsPopout) || (G && this.state.shouldShowActivities),
                        children: () =>
                            (0, s.jsxs)(nR.Ay, {
                                ref: this.setChannelItemRef,
                                className: eu.Ki,
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
                                transitionExtras: S ? { source: l9.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
                                "aria-label": (0, lk.Ay)({
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
                    x && (0, s.jsx)(ij.A, { targetElementRef: I, markMenuItemPopoverAsDismissed: N }),
                ],
            });
        return h ? d(c(v)) : v;
    }
}
let i7 = tZ(i9);
function i6(e) {
    let { channel: t, guild: n, disableSorting: l, isFavoriteCategory: i, muted: a, selected: o } = e,
        { hasActiveThreads: d, hasMoreActiveThreads: c } = (0, lp.NR)(t),
        h = (0, u.cf)([n0.Ay], () => ({
            unread: n0.Ay.hasUnread(t.id),
            ackMessageId: n0.Ay.ackMessageId(t.id),
            isLowImportanceMention: n0.Ay.getIsMentionLowImportance(t.id),
        })),
        A = (0, u.bG)([tH.Ay], () => tH.Ay.resolveUnreadSetting(t)),
        g = (0, u.cf)([eZ.A, B.A], () => {
            let e = eZ.A.getChannel(t.parent_id);
            return {
                canManageChannel: B.A.can(F.xBc.MANAGE_CHANNELS, t),
                canReorderChannel:
                    !0 !== l &&
                    (n.id === na.Vc ||
                        (null != e ? B.A.can(F.xBc.MANAGE_CHANNELS, e) : B.A.can(F.xBc.MANAGE_CHANNELS, n))),
            };
        }),
        m = (0, u.bG)([nQ.A], () => nQ.A.shouldIndicateNewChannel(n.id, t.id)),
        { needSubscriptionToAccess: f, isSubscriptionGated: p } = (0, lf.A)(t.id),
        C = (0, u.bG)([tH.Ay], () => tH.Ay.isFavorite(n.id, t.id)),
        E = (0, iR.ni)(t),
        x = (0, iG.Gp)(t.id),
        N = ip({
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
        _ = (0, ii.Ay)(t),
        [S, I] = r.useState(!1),
        b = (0, ib.K)(
            r.useCallback((e) => {
                I(e);
            }, []),
        ),
        { showMenuItemPopover: G, markMenuItemPopoverAsDismissed: R } = (0, iy.z)({
            location: "TextChannel",
            isChannelSelected: o,
            isTargetInViewport: S,
            channelType: t.type,
            isPopoverAllowed: n.id !== na.Vc,
        });
    return (0, u.bG)([iL.A, iM.Ay], () => iL.A.getChannelId() !== t.id && iM.Ay.isCurrentUserGuest(t.getGuildId()))
        ? null
        : (0, s.jsx)(i7, {
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
var i5 = n(900797),
    i4 = n(250719),
    i8 = n(636585),
    se = n(531685),
    st =
        (((i = {}).HIDDEN = "hidden"),
        (i.UNREAD = "unread"),
        (i.MENTIONS = "mentions"),
        (i.VOICE_CHANNELS = "voice-channels"),
        i);
let sn = { mode: "hidden", mentionCount: 0, targetChannelId: null },
    sl = { topBar: sn, bottomBar: sn },
    si = {},
    ss = {};
function sr(e) {
    let t = eZ.A.getChannel(e);
    return (
        !(null == t || null == t.getGuildId() || t.isGuildVocal()) &&
        !(t.isThread() ? lI.A.isMuted(t.id) : tH.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, eq.Y)(t)
    );
}
function sa(e) {
    let t = eZ.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let l = tH.Ay.isGuildCollapsed(n),
        i = tH.Ay.isChannelMuted(n, t.id);
    return (!l || !i) && n0.Ay.getMentionCount(e) > 0;
}
function so(e) {
    return (
        !tH.Ay.isChannelMuted(e.guild_id, e.id) &&
        (e.isGuildStageVoice()
            ? e2.A.getMutableParticipants(e.id, e3.ip.SPEAKER).length > 0
            : e$.Ay.getVoiceStatesForChannel(e).length > 0)
    );
}
function sd(e) {
    let { guildChannels: t } = tn.A.getGuildWithoutChangingGuildActionRows(e),
        n = t.getChannels(ss[e] ?? []);
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
            ((sr(t.id) || o().some(t.threadIds, sr)) && (d = !1),
            (sa(t.id) || o().some(t.threadIds, sa)) && (a = !1),
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
            (sr(t.id) || o().some(t.threadIds, sr)) && (null == i && (i = t.id), (p = !0)),
                (sa(t.id) || o().some(t.threadIds, sa)) &&
                    (null == l && (l = t.id),
                    (f += n0.Ay.getMentionCount(t.id)),
                    (f += o().sumBy(t.threadIds, n0.Ay.getMentionCount)));
        }
    if (d || a)
        for (let e = 0; e < m.length; e++) {
            let t = m[e];
            if (!d && !a) break;
            (sr(t.id) || o().some(t.threadIds, sr)) && (null == r && (r = t.id), (E = !0)),
                (sa(t.id) || o().some(t.threadIds, sa)) &&
                    (null == s && (s = t.id),
                    (C += n0.Ay.getMentionCount(t.id)),
                    (C += o().sumBy(t.threadIds, n0.Ay.getMentionCount)));
        }
    let x = null,
        N = null,
        _ = u?.getChannelRecords() ?? [];
    a && C > 0
        ? (x = { mode: "mentions", mentionCount: C, targetChannelId: s })
        : !c && o().some(_, so)
          ? (x = { mode: "voice-channels", mentionCount: 0, targetChannelId: null })
          : d && E && (x = { mode: "unread", mentionCount: 0, targetChannelId: r }),
        a && f > 0
            ? (N = { mode: "mentions", mentionCount: f, targetChannelId: l })
            : d && p && (N = { mode: "unread", mentionCount: 0, targetChannelId: i });
    let S = null != N && (null == x || ("mentions" !== x.mode && "mentions" === N.mode)),
        I = null != x && ("mentions" === x.mode || !S);
    return (si[e] = { topBar: S ? (N ?? sn) : sn, bottomBar: I ? (x ?? sn) : sn }), !0;
}
let sc = o().throttle(sd, 200);
function su(e) {
    let { guildId: t } = e,
        n = tg.A.getGuild(t);
    return null != n && !!n.features.has(F.GuildFeatures.COMMUNITY) && sc(t);
}
function sh(e) {
    let { id: t } = e,
        n = eZ.A.getChannel(t);
    if (null == n) return !1;
    let l = tg.A.getGuild(n.guild_id);
    return null != l && !!l.features.has(F.GuildFeatures.COMMUNITY) && sc(n.guild_id);
}
function sA(e) {
    let { channel: t } = e,
        n = eZ.A.getChannel(t.id);
    if (null == n) return !1;
    let l = tg.A.getGuild(t.guild_id);
    return null != l && !!l.features.has(F.GuildFeatures.COMMUNITY) && sc(n.guild_id);
}
function sg(e) {
    let { channelId: t } = e,
        n = eZ.A.getChannel(t);
    if (null == n) return !1;
    let l = tg.A.getGuild(n.guild_id);
    return (
        null != l && !!l.features.has(F.GuildFeatures.COMMUNITY) && te.A.getGuildId() === n.guild_id && sc(n.guild_id)
    );
}
function sm(e) {
    let { guildId: t } = e;
    return null != t && sc(t);
}
class sf extends u.Ay.Store {
    static displayName = "ChannelListUnreadsStore";
    initialize() {
        this.waitFor(tn.A, eZ.A, tg.A, lI.A, n0.Ay, te.A, e$.Ay, e2.A, tH.Ay);
    }
    getUnreadStateForGuildId(e) {
        return si[e] ?? sl;
    }
}
let sp = new sf(eP.h, {
    UPDATE_CHANNEL_LIST_DIMENSIONS: function (e) {
        let { guildId: t, channelIds: n } = e,
            l = tg.A.getGuild(t);
        return (
            null != l &&
            !!l.features.has(F.GuildFeatures.COMMUNITY) &&
            null != n &&
            !o().isEqual(ss[t], n) &&
            ((ss[t] = n), sd(t))
        );
    },
    BULK_ACK: function (e) {
        let { channels: t } = e,
            n = !1;
        return (
            o()(t)
                .map((e) => {
                    let { channelId: t } = e;
                    return eZ.A.getChannel(t)?.guild_id;
                })
                .filter(eQ.Vq)
                .uniq()
                .forEach((e) => {
                    let t = tg.A.getGuild(e);
                    null != t && t.features.has(F.GuildFeatures.COMMUNITY) && sc(e) && (n = !0);
                }),
            n
        );
    },
    CHANNEL_ACK: sg,
    CHANNEL_DELETE: sA,
    CHANNEL_LOCAL_ACK: sg,
    MESSAGE_ACK: sg,
    MESSAGE_CREATE: sg,
    MESSAGE_DELETE_BULK: sg,
    MESSAGE_DELETE: sg,
    PASSIVE_UPDATE_V2: function (e) {
        let t = tg.A.getGuild(e.guildId);
        return !!(e.channels.length > 0 && null != t && t.features.has(F.GuildFeatures.COMMUNITY)) && sc(e.guildId);
    },
    RESORT_THREADS: sg,
    THREAD_CREATE: sA,
    THREAD_DELETE: sA,
    THREAD_LIST_SYNC: su,
    THREAD_MEMBER_UPDATE: sh,
    THREAD_MEMBERS_UPDATE: sh,
    THREAD_UPDATE: sA,
    BULK_CLEAR_RECENTS: su,
    CATEGORY_COLLAPSE_ALL: su,
    CATEGORY_EXPAND_ALL: su,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = te.A.getGuildId();
        if (null == n || !new Set(t.map((e) => e.guildId)).has(n)) return !1;
        let l = si[n];
        return null != l && "voice-channels" === l.bottomBar.mode && sc(n);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: sm,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: sm,
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: t } = e;
        for (let e of t) null != e.guild_id && sc(e.guild_id);
    },
    USER_GUILD_SETTINGS_GUILD_UPDATE: sm,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: sm,
});
var sC = n(168799);
let sE = { friction: 30, tension: 300 };
function sx(e) {
    let { guildChannels: t, jumpToVoiceChannels: n } = e,
        l = t.getCategoryFromSection(t.voiceChannelsSectionNumber),
        i = (0, i4.A)(t.id),
        a = r.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), n();
            },
            [n],
        ),
        o = l?.getChannelRecords() ?? [],
        d = (0, nr.fK)({ channels: o, selectedChannelId: null, selectedVoiceChannelId: null, voiceStates: i });
    return (0, s.jsxs)(ei.D, {
        className: eE()(sC.M0, sC.OF),
        onClick: a,
        children: [
            (0, s.jsx)(S.H, { size: "custom", className: sC.Gs, width: 14, height: 14, color: "currentColor" }),
            (0, s.jsx)(N.E, {
                variant: "text-xs/semibold",
                className: sC.pM,
                children: K.intl.format(K.t["fDlr+F"], { count: d.length }),
            }),
            (0, s.jsx)(i8.A, {
                guildId: t.id,
                className: sC.J$,
                users: d.slice(0, 4),
                renderMoreUsers: () => null,
                max: 4,
                size: iD._3.SIZE_16,
            }),
        ],
    });
}
function sN(e) {
    let { position: t, guildChannels: n, guildChannelsVersion: l, jumpToVoiceChannels: i, jumpToChannel: a } = e,
        { bottomBar: o, topBar: d } = (0, u.cf)([sp], () => sp.getUnreadStateForGuildId(n.id)),
        c = (0, u.bG)([se.A], () => se.A.isFocused()),
        { mode: h, mentionCount: A, targetChannelId: g } = "bottom" === t ? o : d,
        m = h === st.HIDDEN,
        f = (0, eU.z)(
            {
                to: { transform: m ? ("bottom" === t ? "translateY(180%)" : "translateY(-180%)") : "translateY(0%)" },
                config: sE,
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
        className: eE()(sC.kL, { [sC.Mn]: "top" === t, [sC.sQ]: "bottom" === t }),
        children: (0, s.jsx)(eT.animated.div, {
            className: sC.pK,
            style: f,
            "aria-hidden": m,
            children: (function () {
                switch (h) {
                    case st.HIDDEN:
                        return (0, s.jsx)("div", { className: eE()(sC.M0, sC.Te) });
                    case st.UNREAD:
                        return (0, s.jsxs)(ei.D, {
                            className: sC.M0,
                            onClick: p,
                            children: [
                                "bottom" === t
                                    ? (0, s.jsx)(tR.a, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: sC.z_,
                                          height: 14,
                                          width: 14,
                                      })
                                    : (0, s.jsx)(i5.t, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: sC.z_,
                                          height: 14,
                                          width: 14,
                                      }),
                                (0, s.jsx)(N.E, {
                                    variant: "text-xs/semibold",
                                    color: "interactive-text-default",
                                    className: sC.pM,
                                    children: K.intl.string(K.t.FCRiT3),
                                }),
                            ],
                        });
                    case st.MENTIONS:
                        return (0, s.jsx)(ei.D, {
                            className: eE()(sC.M0, sC.vU),
                            onClick: p,
                            children: (0, s.jsx)(N.E, {
                                variant: "text-xs/semibold",
                                color: "badge-text-brand",
                                className: sC.pM,
                                children: K.intl.format(K.t.EQcLyp, { count: A }),
                            }),
                        });
                    case st.VOICE_CHANNELS:
                        return (0, s.jsx)(sx, { jumpToVoiceChannels: i, guildChannels: n, guildChannelsVersion: l });
                    default:
                        return;
                }
            })(),
        }),
    });
}
var s_ = n(310953),
    sS = n(173860);
function sI(e) {
    let t = eZ.A.getChannel(e);
    return (
        null != t &&
        null != t.getGuildId() &&
        !(t.isThread() ? lI.A.isMuted(t.id) : tH.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, eq.Y)(t)
    );
}
function sb(e) {
    let t = eZ.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let l = tH.Ay.isGuildCollapsed(n),
        i = tH.Ay.isChannelMuted(n, t.id);
    return (!l || !i) && n0.Ay.getMentionCount(e) > 0;
}
let sG = r.forwardRef(function (e, t) {
    let { guildId: n, guildChannels: l, guildChannelsVersion: i, ...r } = e,
        a = (0, s_.W)(n, l, i, { withVoiceChannels: !1 }, { ignoreRecents: !0 }),
        o = (0, u.bG)([se.A], () => se.A.isFocused());
    return (0, s.jsx)(sS.A, { ref: t, ...r, isUnread: sI, isMentioned: sb, items: a, animate: o });
});
var sR = n(81466);
function sv(e) {
    let { guild: t, selected: l } = e,
        { hasUnread: i, mentionCount: r } = (0, u.cf)(
            [n0.Ay],
            () => ({
                hasUnread: n0.Ay.hasUnread(t.id, nv.P.GUILD_EVENT),
                mentionCount: n0.Ay.getMentionCount(t.id, nv.P.GUILD_EVENT),
            }),
            [t.id],
        ),
        a = (0, u.bG)([tH.Ay], () => tH.Ay.isMuteScheduledEventsEnabled(t.id));
    async function o() {
        await (0, en.openModalLazy)(async () => {
            let { default: e } = await Promise.all([
                n.e("25996"),
                n.e("54948"),
                n.e("85251"),
                n.e("28634"),
                n.e("78638"),
                n.e("15462"),
                n.e("55513"),
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
            (0, nJ.Dr)(L.M.GUILD_HEADER_EVENT_UPSELL);
    }
    let d = (0, tf.Ay)(t.id),
        c = d.length > 0 ? K.intl.formatToPlainString(K.t.IBdqSu, { number: d.length }) : K.intl.string(K.t.tlopTM);
    return (0, s.jsx)(H.G, {
        id: `upcoming-events-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(sR.C, { size: "md", color: "currentColor", className: e }),
        text: c,
        selected: l,
        onClick: o,
        onContextMenu: function (e) {
            (0, eD.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("26386"), n.e("19990")]).then(n.bind(n, 221621));
                return (n) => (0, s.jsx)(e, { ...n, guildId: t.id });
            });
        },
        showUnread: i && !a,
        trailing: !a && r > 0 ? (0, s.jsx)(U.hV, { className: nW.Do, disableColor: !0, count: r }) : null,
    });
}
var sj = n(845056),
    sy = n(765379),
    sM = n(271683),
    sL = n(725613),
    sT = n(857253),
    sU = n(360729),
    sD = n(22231),
    sO = n(241326),
    sP = n(750943),
    sV = n(743674),
    sw = n(888697),
    sH = n(26741),
    sB = n(493819),
    sk = n(722884),
    sF = n(844045),
    sK = n(52102);
function sz(e) {
    let { channel: t, imageUrl: l, animatedUrl: i, bannerHash: a, canModifyHangout: o } = e,
        d = (0, sV.S)(l),
        c = (0, Z.je)(t),
        u = (0, sH.P9)({ guildId: t.guild_id, channelId: t.id, bannerHash: a }),
        h = r.useCallback(() => {
            (0, sH.J_)({ guildId: t.guild_id, channelId: t.id }), (0, sk.A)({ channel: t });
        }, [t]),
        A = r.useCallback(() => {
            (0, sH.nK)({ guildId: t.guild_id, channelId: t.id }), (0, sw.e2)(t.id);
        }, [t.guild_id, t.id]),
        g = r.useCallback(
            (e) => {
                c
                    ? (0, eD.L3)(e, async () => {
                          let { default: e } = await n.e("55558").then(n.bind(n, 316421));
                          return (n) => (0, s.jsx)(e, { ...n, channel: t });
                      })
                    : e.preventDefault();
            },
            [t, c],
        );
    return (0, s.jsxs)("div", {
        ref: u,
        className: sK.rs,
        onContextMenu: g,
        children: [
            (0, s.jsx)("div", {
                className: sK.ZS,
                style: null != d ? { backgroundColor: d } : void 0,
                children: (0, s.jsx)(sB.A, { imageUrl: l, animatedUrl: i, className: sK.Sl }),
            }),
            o
                ? (0, s.jsxs)("div", {
                      className: sK.n_,
                      children: [
                          (0, s.jsx)(el.m, {
                              text: K.intl.string(sF.default.XJ4UpB),
                              children: (0, s.jsx)(ei.D, {
                                  className: sK.HF,
                                  onClick: h,
                                  children: (0, s.jsx)(sD.R, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                          (0, s.jsx)(el.m, {
                              text: K.intl.string(sF.default.XV4qT6),
                              children: (0, s.jsx)(ei.D, {
                                  className: sK.HF,
                                  onClick: A,
                                  children: (0, s.jsx)(sO.u, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function sW(e) {
    let { channel: t } = e,
        n = (0, sH.dX)({ guildId: t.guild_id, channelId: t.id }),
        l = r.useCallback(() => {
            (0, sH.J_)({ guildId: t.guild_id, channelId: t.id }), (0, sk.A)({ channel: t });
        }, [t]);
    return (0, s.jsx)("div", {
        ref: n,
        className: sK._o,
        children: (0, s.jsxs)(ei.D, {
            className: sK.hH,
            onClick: l,
            children: [
                (0, s.jsx)(sP.X, { size: "xs", color: "currentColor" }),
                (0, s.jsx)(N.E, {
                    variant: "text-sm/medium",
                    color: "currentColor",
                    children: K.intl.string(sF.default.NGcIOF),
                }),
            ],
        }),
    });
}
function sY(e) {
    let { channel: t, isConnected: n } = e,
        { enableHangoutWindow: l } = (0, J.Dm)({ guildId: t.guild_id, location: "HangoutWindow" }),
        i = (0, Z.W6)(t),
        a = n && i,
        o = t.voiceHangout,
        d = o?.banner_hash,
        c = r.useMemo(() => {
            if (null == d || null == t.guild_id) return null;
            let e = (0, Z.Sq)({ guildId: t.guild_id, bannerHash: d });
            return null == e ? null : { bannerHash: d, ...e };
        }, [t.guild_id, d]);
    return l
        ? null != c
            ? (0, s.jsx)(sz, {
                  channel: t,
                  imageUrl: c.imageUrl,
                  animatedUrl: c.animatedUrl,
                  bannerHash: c.bannerHash,
                  canModifyHangout: a,
              })
            : a
              ? (0, s.jsx)(sW, { channel: t })
              : null
        : null;
}
var sX = n(290863),
    sq = n(461213),
    sJ = n(532622),
    sZ = n(882840),
    s$ = n(208971),
    sQ = n(46054),
    s0 = n(500216),
    s1 = n(742715);
function s2(e) {
    let { channel: t, connected: n, hovered: l, subtitle: i, onClick: a } = e,
        o = (0, s$.G)((0, sZ.l)(t)),
        { enableHangoutWindow: d } = (0, J.Dm)({ guildId: t.guild_id, location: "VoiceChannelStatus" }),
        c = d && (0, Z.lr)(t),
        u = null != o && o.length > 0,
        h = (0, sJ.Ay)(t, !0),
        A = null != i && i.length > 0;
    if (
        (r.useEffect(() => {
            u && ld.default.track(F.HAw.VOICE_CHANNEL_TOPIC_VIEWED, { channel_id: t.id, guild_id: t.guild_id });
        }, [u, t.id, t.guild_id]),
        null == t.guild_id)
    )
        return null;
    let g = eE()(s0.Ui, n && h ? s0.BI : null);
    return u
        ? (0, s.jsx)(ei.D, {
              className: g,
              onClick: h ? a : void 0,
              children: (0, s.jsx)(N.E, {
                  variant: "text-xs/medium",
                  className: eE()(s0.qS, s1.PT),
                  children: (0, s.jsx)(tI.A, { children: sQ.A.parseVoiceChannelStatus(o, !0, { channelId: t.id }) }),
              }),
          })
        : n && h && !c && (!A || l)
          ? (0, s.jsxs)(ei.D, {
                className: g,
                onClick: a,
                children: [
                    (0, s.jsx)(N.E, {
                        variant: "text-xs/medium",
                        className: s0.qS,
                        children: K.intl.string(K.t.Mgpxiw),
                    }),
                    (0, s.jsx)(sD.R, { color: "currentColor", className: s0.rD, size: "xxs" }),
                ],
            })
          : A
            ? (0, s.jsx)(tI.A, { children: i })
            : null;
}
class s3 extends nG {
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
        o && lH.A.updateChatOpen(n.id, !0),
            lm.A.handleVoiceConnect({
                channel: n,
                connected: t,
                needSubscriptionToAccess: i,
                routeDirectlyToChannel: o || a,
                locked: e,
                transitionExtras: r ? { source: l9.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
            });
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            l = tg.A.getGuild(t.getGuildId());
        null != l &&
            (0, eD.L3)(e, async () => {
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
        return (0, nr.Pd)(e, lE.A, tg.A);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        if (n) return eu.ZS;
        if (null != t)
            if (e > t) return eu.mU;
            else return eu.TR;
        return eu.fx;
    }
    handleClick = () => {
        let { channel: e } = this.props,
            t = e.getGuildId();
        null != t && (0, lK.V)(t) && (0, lF.Ze)(t), this.handleVoiceConnect();
    };
    handleVoiceStatusClick = (e) => {
        let { connected: t, channel: n } = this.props;
        t && (e.stopPropagation(), (0, sM.A)({ channel: n }));
    };
    renderSubtitle() {
        let { channel: e, connected: t } = this.props,
            n = iv(this.props.subtitle)?.subtitle,
            { hovered: l } = this.state;
        return (0, s.jsx)(s2, {
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
        return !(null != n && n.length > 0) || l ? null : (0, s.jsx)(sY, { channel: e, isConnected: t });
    }
    renderPopout = () => {
        let { channel: e } = this.props,
            { shouldShowGuildVerificationPopout: t } = this.state;
        return t
            ? (0, s.jsx)(l3, { type: l2.VOICE, guildId: e.guild_id, closePopout: this.closeGuildVerificationPopout })
            : null;
    };
    renderOpenChatButton = () => {
        let { channel: e, locked: t, forceShowButtons: n, isSuggestedSection: l } = this.props;
        if (!t)
            return (0, s.jsx)(el.m, {
                asContainer: !0,
                text: K.intl.string(K.t.ZXxLQg),
                children: (0, s.jsx)(ei.D, {
                    className: eE()(eu.Xs, n ? eu.Tf : null),
                    onClick: () => {
                        lH.A.updateChatOpen(e.id, !0),
                            (0, l7.iN)(e.id, l ? { source: l9.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
                    },
                    "aria-label": K.intl.string(K.t.ZXxLQg),
                    children: (0, s.jsx)(I.o, { size: "xs", color: "currentColor", className: eu.gE }),
                }),
            });
    };
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e ? null : (0, s.jsx)("div", { className: eu.yW, children: e });
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
                className: eE()(this.getModeClass(), { [eu.r9]: this.isDisabled(), [eu.fy]: _ }),
                "data-dnd-name": (0, t$.m1)(e, lQ.default, il.A),
                children: [
                    _ &&
                        (0, s.jsxs)(s.Fragment, {
                            children: [
                                (0, s.jsx)("div", { className: eu.UQ }),
                                (0, s.jsx)("div", { className: eu.l0 }),
                            ],
                        }),
                    (0, s.jsx)("div", {
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        children: (0, s.jsx)(lw.Y, {
                            targetElementRef: this.channelItemRef,
                            position: "right",
                            renderPopout: this.renderPopout,
                            onRequestClose: this.closeGuildVerificationPopout,
                            spacing: 17,
                            shouldShow: b,
                            children: () =>
                                (0, s.jsx)(el.m, {
                                    text: this.getTooltipText(),
                                    children: (0, s.jsxs)(nR.Ay, {
                                        ref: this.channelItemRef,
                                        className: eu.Ki,
                                        iconClassName: eE()({ [eu.Gj]: m || x || G }),
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
                                        "aria-label": (0, lk.Ay)({
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
                (R = (0, s.jsx)(t4.A, {
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
let s9 = tZ((0, lB.F)(s3));
function s7(e) {
    let {
            guild: t,
            channel: n,
            disableSorting: l,
            isFavoriteCategory: i,
            selected: r,
            collapsed: a,
            voiceStates: o,
        } = e,
        d = (0, u.cf)([n0.Ay], () => ({ unread: n0.Ay.hasUnread(n.id), mentionCount: n0.Ay.getMentionCount(n.id) })),
        c = (0, u.bG)([tH.Ay], () => tH.Ay.resolveUnreadSetting(n)),
        h = (0, u.cf)([eZ.A, l$.A, B.A], () => {
            let e = eZ.A.getChannel(n.parent_id),
                i = l$.A.getCheck(n.guild_id);
            return {
                canManageChannel: B.A.can(F.xBc.MANAGE_CHANNELS, n),
                canReorderChannel:
                    !0 !== l &&
                    (t.id === na.Vc ||
                        (null != e ? B.A.can(F.xBc.MANAGE_CHANNELS, e) : B.A.can(F.xBc.MANAGE_CHANNELS, t))),
                canMoveMembers: B.A.can(F.xBc.MOVE_MEMBERS, n),
                locked: !B.A.can(F.xBc.CONNECT, n),
                bypassLimit: B.A.can(F.xBc.MOVE_MEMBERS, n),
                unverifiedAccount: !i.canChat,
            };
        }),
        A = (0, u.bG)([lE.A], () => lE.A.hasVideo(n.id)),
        { enabled: g } = sU.A.useExperiment({ guildId: t.id, location: "VoiceChannel" }),
        m = (0, ii.Ay)(n),
        f = (0, u.yK)([sq.A, sX.A, l8.default], () => {
            if (null == o || 0 === o.length) return [];
            let e = l8.default.getId(),
                t = [];
            for (let { user: l } of o)
                for (let i of l.id === e ? sq.A.getActivities() : sX.A.getActivities(l.id, n.guild_id))
                    !(0, sj.N)(i) || (0, sy.A)(i) || null == i.name || t.includes(i.name) || t.push(i.name);
            return t;
        }, [o, n.guild_id]),
        p = (0, t$.Ay)(n),
        C = (0, tf.Qs)(n.id),
        E = (0, u.bG)([sL.A], () => sL.A.getStartTime(n), [n]),
        { isSubscriptionGated: x, needSubscriptionToAccess: N } = (0, lf.A)(n.id),
        _ = (0, sT.A)(),
        S = (0, u.bG)([tH.Ay], () => tH.Ay.isFavorite(t.id, n.id)),
        I = e.connected || _?.channelId === n.id,
        { enableHighlight: b, enableWaveformIcon: G } = (0, ni.b)(t.id, "VoiceChannel"),
        R = null != o && o.length > 0,
        v = b && R,
        j = G && R,
        y = ip({
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
    return (0, s.jsx)(s9, {
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
var s6 = n(335993);
function s5(e) {
    return (
        h.A.modules.channels.NAME_LINE_HEIGHT.resolve({ density: e }) +
        2 * h.A.space.SPACE_XXS.resolve({ density: e }) +
        2
    );
}
class s4 extends r.PureComponent {
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
        this.setState({ initialized: !0 }), (0, ti.Ei)(this.getVisibleChannels);
    }
    componentWillUnmount() {
        this.updateChannelListScroll.cancel();
    }
    componentDidUpdate(e, t) {
        let { scrollToChannel: n, guildId: l, selectedChannelId: i } = this.props,
            { initialized: s } = this.state,
            { scrollTop: r } = e4.A.getGuildDimensions(l);
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
                if (l < tt.bK || e.isPlaceholderRow(l, i)) return !1;
                let s = e.getChannelFromSectionRow(l, i);
                if (null == s) return !1;
                let { channel: r, category: a } = s;
                return (
                    !!(0, e5.ig)(r.record.type) &&
                    (!a.isCollapsed || !a.isMuted) &&
                    !r.isMuted &&
                    !!t.isItemVisible(l, i, !0) &&
                    (0, eq.Y)(r.record)
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
        if (e === tt.PU) return i;
        if (e === tt.bK) return t.features.has(F.GuildFeatures.HUB) ? 0 : i;
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
            let { hasDivider: d, canHaveVoiceSummary: c } = no(n, r, t),
                u = d ? (a ? 9 : 12) : 0;
            if (!c || t === tt.PU) return u;
            let h = n.getNamedCategoryFromSection(t);
            return null == h ||
                !(function (e) {
                    let { category: t, voiceStates: n, selectedChannelId: l, selectedVoiceChannelId: i } = e;
                    return (
                        (function (e) {
                            let { category: t, voiceStates: n, selectedChannelId: l, selectedVoiceChannelId: i } = e;
                            return !0 !== tV.A.isCollapsed(t.record.id)
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
        if (e === tt.PU) {
            let e = n.getGuildActionSection();
            return e.isEmpty()
                ? 0
                : e.getRow(t) === tS.n.GUILD_PREMIUM_PROGRESS_BAR
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
                    (d.isCollapsed || c.isCollapsed ? (t = 32) : (0, Q.Ln)(d.record) && (t += 32),
                    (a += t + h.A.space.SPACE_XS.resolve({ density: r })),
                    !d.isCollapsed && !c.isCollapsed)
                ) {
                    let { enableHangoutWindow: e } = (0, J.kY)({ guildId: d.record.guild_id, location: "ChannelList" });
                    e && ((0, Z.lr)(d.record) ? (a += 134) : s === d.id && (a += 44));
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
        null != n && s.includes(n) && (i = (0, ee.xb)(t)), (0, ee.DD)(e.id, s, i);
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
            nn,
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
                    case tt.PU:
                        return "hoisted-spacer";
                    case tt.bK:
                        return "uncategorized-spacer";
                    case tt.HP:
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
        if (t === tt.PU) {
            let e = c.getGuildActionSection(),
                t = e.getRow(n);
            if (null == t) return null;
            switch (t) {
                case tS.n.GUILD_HUB_HEADER_OPTIONS:
                    return (0, s.jsx)(
                        $.A,
                        { guild: l, channel: e8.Ay.getDefaultChannel(l.id) },
                        tS.n.GUILD_HUB_HEADER_OPTIONS,
                    );
                case tS.n.GUILD_PREMIUM_PROGRESS_BAR:
                    let i = e.getRows();
                    return (0, s.jsx)(eX, { guild: l, withMargin: i.length > 1 }, tS.n.GUILD_PREMIUM_PROGRESS_BAR);
                case tS.n.GUILD_SPACE:
                    return (0, s.jsx)(q, { guild: l, selected: a === X.VV.GUILD_SPACE }, tS.n.GUILD_SPACE);
                case tS.n.GUILD_HOME:
                    return (0, s.jsx)(n3, { guild: l, selected: a === X.VV.GUILD_HOME }, tS.n.GUILD_HOME);
                case tS.n.GUILD_SCHEDULED_EVENTS:
                    return (0, s.jsx)(
                        sv,
                        { guild: l, selected: a === tS.n.GUILD_SCHEDULED_EVENTS },
                        tS.n.GUILD_SCHEDULED_EVENTS,
                    );
                case tS.n.GUILD_ROLE_SUBSCRIPTIONS:
                    return (0, s.jsx)(
                        ln,
                        { guild: l, selected: a === X.VV.ROLE_SUBSCRIPTIONS },
                        tS.n.GUILD_ROLE_SUBSCRIPTIONS,
                    );
                case tS.n.GUILD_SHOP:
                    return (0, s.jsx)(lA, { guild: l, selected: a === X.VV.GUILD_SHOP }, tS.n.GUILD_SHOP);
                case tS.n.GUILD_GAME_SHOP:
                    return (0, s.jsx)(nX, { guild: l, selected: a === X.VV.GAME_SHOP }, tS.n.GUILD_GAME_SHOP);
                case tS.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
                    return (0, s.jsx)(n4, { guild: l });
                case tS.n.CHANNELS_AND_ROLES:
                    return (0, s.jsx)(
                        n1,
                        { guild: l, selected: a === X.VV.CHANNEL_BROWSER || a === X.VV.CUSTOMIZE_COMMUNITY },
                        tS.n.CHANNELS_AND_ROLES,
                    );
                case tS.n.GUILD_DIRECTORY:
                    return (0, s.jsx)(
                        nj,
                        { guild: l, selectedChannelId: a, disableManageChannels: h },
                        tS.n.GUILD_DIRECTORY,
                    );
                case tS.n.GUILD_MOD_DASH_MEMBER_SAFETY:
                    return (0, s.jsx)(
                        z,
                        { guild: l, selected: a === X.VV.MEMBER_SAFETY },
                        tS.n.GUILD_MOD_DASH_MEMBER_SAFETY,
                    );
                case tS.n.GUILD_BOOSTS:
                    return (0, s.jsx)(eL, { guildId: l.id, selected: a === X.VV.GUILD_BOOSTS }, tS.n.GUILD_BOOSTS);
                case tS.n.GAME_SERVERS:
                    return (0, s.jsx)(ep, { guildId: l.id, selected: a === X.VV.GAME_SERVERS }, tS.n.GAME_SERVERS);
                case tS.n.GAME_SERVERS_EMPTY:
                    return (0, s.jsx)(
                        eh,
                        { guildId: l.id, selected: a === X.VV.GAME_SERVERS },
                        tS.n.GAME_SERVERS_EMPTY,
                    );
                case tS.n.GUILD_OFFICIAL_MESSAGES:
                    return (0, s.jsx)(
                        le,
                        { guild: l, selected: a === X.VV.GUILD_OFFICIAL_MESSAGES },
                        tS.n.GUILD_OFFICIAL_MESSAGES,
                    );
                default:
                    return null;
            }
        }
        if (c.isPlaceholderRow(t, n)) return null;
        let f = c.getChannelFromSectionRow(t, n);
        if (null == f) return null;
        let { category: p, channel: C } = f,
            E = p instanceof tt.xu,
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
                            (0, s.jsx)(i6, {
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
                                ? (0, s.jsx)(lV, {
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
                    iN,
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
                    s7,
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
                return (0, s.jsx)(iI, { channel: x, guild: l, position: C.position, selected: a === C.id }, N);
            case F.rbe.GUILD_CATEGORY:
                if (t !== c.voiceChannelsSectionNumber) return null;
                return (0, s.jsx)(t5, { channel: x }, `readonly-${x.id}`);
            case F.rbe.PUBLIC_THREAD:
            case F.rbe.PRIVATE_THREAD:
            case F.rbe.ANNOUNCEMENT_THREAD:
                return (0, s.jsx)(
                    i6,
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
            nc,
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
                let { hasDivider: l, canHaveVoiceSummary: i } = no(t, n, e);
                return `section-footer-${e}${l ? "-divider" : ""}${i ? "-voice-summary" : ""}`;
            })(t, n, o),
        );
    };
    renderTopUnread() {
        let { topMention: e, bottomUnread: t, bottomMention: n, isUnreadVisible: l } = this.state,
            { guildId: i, guildChannels: r, guildChannelsVersion: a } = this.props;
        return (0, s.jsx)("div", {
            className: nt.Eo,
            children: (0, s.jsx)(sG, {
                ref: this.unreadTopRef,
                textUnread: K.intl.string(K.t.FCRiT3),
                textMention: K.intl.string(K.t["8zH0LJ"]),
                hide: null == e && (l || null != t || null != n),
                className: nt.Vq,
                barClassName: nt.bu,
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
        return (0, s.jsx)(sG, {
            reverse: !0,
            ref: this.unreadBottomRef,
            textUnread: K.intl.string(K.t.FCRiT3),
            textMention: K.intl.string(K.t["8zH0LJ"]),
            hide: null == l && i,
            className: nt.di,
            barClassName: nt.bu,
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
        if (e !== tt.PU) {
            if (null == t)
                return e === tt.HP
                    ? "favorites-header"
                    : e === n.recentsSectionNumber
                      ? "recents-header"
                      : e === n.voiceChannelsSectionNumber
                        ? "voice-channels"
                        : e === tt.bK
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
                        className: nt.XG,
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
        if (!e6.A.shouldShow("voice-conversations")) return;
        let { guildChannels: e } = this.props,
            t = e.getFirstVoiceChannel();
        if (null == t) return void e7.X8("voice-conversations");
        let n = this._list;
        if (null != n)
            for (let { section: e, row: l } of this.getSectionRowsFromChannel(t.id))
                n.isItemVisible(e, l) || e7.X8("voice-conversations");
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
                                      className: nt.Eo,
                                      children: (0, s.jsx)(sN, {
                                          position: "top",
                                          guildChannels: e,
                                          guildChannelsVersion: t,
                                          jumpToVoiceChannels: this.jumpToVoiceChannels,
                                          jumpToChannel: this.jumpToChannel,
                                      }),
                                  }),
                                  this.renderList(),
                                  (0, s.jsx)(sN, {
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
let s8 = (e) => {
    let { guildId: t, selectedChannelId: n, selectedVoiceChannelId: l } = e,
        i = (0, u.bG)([R.Ay], () => R.Ay.keyboardModeEnabled),
        { analyticsLocations: a } = (0, j.Ay)(v.A.GUILD_CHANNEL_LIST),
        o = (0, u.bG)([eZ.A], () => eZ.A.getChannel(n)),
        h = (0, u.bG)([eZ.A], () => eZ.A.getChannel(l)),
        A = (0, u.bG)([te.A], () => te.A.getGuildId()),
        g = (0, et.jN)(t),
        m = r.useRef(null),
        f = r.useCallback((e, t) => {
            let n = m.current;
            null != n &&
                (F.Ut1.test(t) || (0, X.jq)(t)
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
            [e2.A, eZ.A, eJ.A],
            () => {
                let t;
                return [
                    (t =
                        e === F.YYv
                            ? e1.default
                                  .keys(eJ.A.getFavoriteChannels())
                                  .map((e) => eZ.A.getChannel(e))
                                  .filter(eQ.Vq)
                                  .filter((e) => e.isGuildStageVoice())
                            : e2.A.getChannels(e)).reduce((e, t) => {
                        let n = e2.A.getMutableParticipants(t.id, e3.ip.SPEAKER);
                        return (e[t.id] = n.filter((e) => e.type === e3.wY.VOICE).map(e9)), e;
                    }, {}),
                    t.reduce((e, t) => {
                        let { id: n } = t;
                        return e + e2.A.getParticipantsVersion(n);
                    }, 0),
                ];
            },
            [e],
            e0.D,
        );
        return t;
    })(t);
    return (0, s.jsx)(j.f5, {
        value: a,
        children: (0, s.jsx)(G.A, {
            section: F.JJy.GUILD_CHANNEL_LIST,
            children: (0, s.jsx)(d.hD, {
                navigator: E,
                children: (0, s.jsx)(s4, {
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
function re(e) {
    let { guildChannels: t, shouldShowEmptyState: n } = (0, tl.D)(),
        { density: l } = (0, C.wR)();
    return n
        ? (0, s.jsx)("div", {
              className: nt.XG,
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
                                  children: K.intl.string(s6.default["1n0TGE"]),
                              }),
                              (0, s.jsx)(N.E, {
                                  variant: "text-sm/medium",
                                  color: "text-muted",
                                  children: K.intl.string(s6.default.Wwzrs9),
                              }),
                          ],
                      }),
                      (0, s.jsx)("div", { className: nt.ts }),
                      (0, s.jsxs)("div", {
                          className: nt.MS,
                          "aria-hidden": "true",
                          children: [
                              (0, s.jsxs)("div", {
                                  className: nt.pS,
                                  children: [
                                      (0, s.jsx)(_.N, { size: "xs", color: h.A.colors.ICON_MUTED }),
                                      (0, s.jsx)("div", { className: nt.Qs }),
                                  ],
                              }),
                              (0, s.jsxs)("div", {
                                  className: nt.pS,
                                  children: [
                                      (0, s.jsx)(S.H, { size: "xs", color: h.A.colors.ICON_MUTED }),
                                      (0, s.jsx)("div", { className: nt.iR }),
                                  ],
                              }),
                              (0, s.jsxs)("div", {
                                  className: nt.pS,
                                  children: [
                                      (0, s.jsx)(I.o, { size: "xs", color: h.A.colors.ICON_MUTED }),
                                      (0, s.jsx)("div", { className: nt.Qs }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : (0, s.jsx)(s8, { ...e, guildChannels: t, guildChannelsVersion: 0, withGuildIcon: !1, density: l });
}
function rt(e) {
    let t = (function (e) {
            var t;
            let n,
                l,
                i =
                    ((t = e.id),
                    (n = (0, tm.A)(t)),
                    (l = (0, tf.Ay)(t)),
                    !(0, u.bG)([tg.A], () => {
                        if (null == t) return !1;
                        let e = tg.A.getGuild(t);
                        return e?.features.has(F.GuildFeatures.HUB) ?? !1;
                    }, [t]) &&
                        (n || l.length > 0)),
                s = (0, ta.W)(e.id),
                r = (0, tA.vz)(e.id),
                a = (0, tr.r)(e),
                o = (0, t_.jz)(e),
                d = (0, tu.d)(e.id),
                c = (0, ts.bG)([td.h], () => td.h.getNewMemberActions(e.id), [e.id]),
                h = (0, th.A)(e.id),
                A = (0, tc.jY)(e.id),
                g = (0, to.fw)(e.id),
                m = (0, tp.U)(e, "useGuildActionRows"),
                f = [],
                p = e.features.has(F.GuildFeatures.HUB),
                C = e.features.has(F.GuildFeatures.COMMUNITY),
                E = e.features.has(F.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
                x = (0, ek.A)(e.id);
            tN.useConfig({ location: "useGuildActionRows" }).enabled;
            let N = eK(e),
                _ = (0, tC.bW)(e.id, "useGuildActionRows"),
                S = (0, tE.C$)(e.id, "useGuildActionRows"),
                I = e.features.has(F.GuildFeatures.GAME_SERVERS),
                b = (0, tx.N)("useGuildActionRows"),
                [G] = (0, ea.kn)(S && b && !I ? [L.M.EMPTY_GAME_SERVER_TAB] : [], void 0, !0);
            return (
                m && f.push(tS.n.GUILD_SPACE),
                p && f.push(tS.n.GUILD_HUB_HEADER_OPTIONS),
                !A && d && h && null != c && c.length > 0
                    ? f.push(tS.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR)
                    : e.premiumProgressBarEnabled && N > 0 && f.push(tS.n.GUILD_PREMIUM_PROGRESS_BAR),
                !p && d && f.push(tS.n.GUILD_HOME),
                i && f.push(tS.n.GUILD_SCHEDULED_EVENTS),
                !p && C && f.push(tS.n.CHANNELS_AND_ROLES),
                r && f.push(tS.n.GUILD_ROLE_SUBSCRIPTIONS),
                a && f.push(tS.n.GUILD_SHOP),
                o && f.push(tS.n.GUILD_GAME_SHOP),
                ((g && (C || E)) || (s && e.features.has(F.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL))) &&
                    f.push(tS.n.GUILD_MOD_DASH_MEMBER_SAFETY),
                x && f.push(tS.n.GUILD_BOOSTS),
                _ && f.push(tS.n.GUILD_OFFICIAL_MESSAGES),
                S && (I ? f.push(tS.n.GAME_SERVERS) : null != G && f.push(tS.n.GAME_SERVERS_EMPTY)),
                f
            );
        })(e.guild),
        n = (0, u.cf)([tn.A], () => tn.A.getGuild(e.guildId, { guildActionRows: t })),
        { density: l } = (0, C.wR)();
    return (0, s.jsx)(s8, { ...e, ...n, density: l });
}
