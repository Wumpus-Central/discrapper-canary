n.d(t, { B: () => rs, T: () => ri }), n(321073);
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
    eG = n(914732),
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
    tS = n(683180),
    tI = n(281405),
    tb = n(3026),
    tG = n(821609),
    tR = n(187322),
    tv = n(847374),
    tj = n(499373),
    ty = n(285796),
    tM = n(914430),
    tL = n(913247),
    tT = n(639627),
    tU = n(66834),
    tD = n(999903),
    tO = n(544169),
    tP = n(422258),
    tV = n(770376),
    tw = n(924985),
    tH = n(769765),
    tB = n(543465);
n(667532);
var tk = n(111613);
function tF(e, t) {
    return null != e && null != t && (e === t || ((0, e5.tr)(e) && (0, e5.tr)(t)) || ((0, e5.ay)(e) && (0, e5.ay)(t)));
}
function tK(e, t, n, l) {
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
        if (tF(e.channel.type, n)) return e;
    }
    return null;
}
function tz(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (null == e) return 0;
    let l = null;
    return (
        t
            .filter((t) => {
                let {
                    channel: { type: l },
                } = t;
                return null != e && (n || tF(e.type, l));
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
function tW(e) {
    return { referenceId: e.id, parentId: e.parent_id };
}
function tY(e, t, n, l, i) {
    if (null == e || null == n) return null;
    let { GUILD_CATEGORY: s } = F.rbe;
    if (e.type === s)
        return l === t || (l < t && e.type === n.type)
            ? tW(n)
            : l > t
              ? (function (e, t, n) {
                    let { GUILD_CATEGORY: l } = F.rbe,
                        i = n[(tz(t, n, !0) ?? 0) + 1],
                        s = tK(-1, t.id, e.type, n);
                    return null == s || s.channel.id === e.id
                        ? null
                        : null == i || i.channel.type === l
                          ? { referenceId: s.channel.id, parentId: null }
                          : null;
                })(e, n, i)
              : null;
    if (tF(e.type, n.type)) return tW(n);
    if (l < t) {
        let t, l;
        if (n.type === s) {
            let t = i[(tz(n, i, !0) ?? 0) - 1],
                l = tK(1, n.id, e.type, i);
            if (null == t) return { referenceId: null, parentId: null };
            if (null != l) {
                if (tF(t.channel.type, e.type) || (e.isGuildVocal() && (0, e5.tr)(t.channel.type)))
                    return { referenceId: l.channel.id, parentId: t.channel.parent_id };
                if (t.channel.isCategory()) return { referenceId: l.channel.id, parentId: t.channel.id };
            }
            return null;
        }
        return (
            (t = i[(tz(n, i, !0) ?? 0) - 1]),
            (l = tK(1, n.id, e.type, i)),
            null != t || e.isGuildVocal()
                ? (0, e5.tr)(e.type) && null != l && ((0, e5.tr)(t.channel.type) || t.channel.isCategory())
                    ? { referenceId: l.channel.id, parentId: n.parent_id }
                    : null
                : { referenceId: null != l ? l.channel.id : null, parentId: null }
        );
    }
    if (n.type === s) {
        let t = i[(tz(n, i, !0) ?? 0) + 1],
            l = tK(-1, n.id, e.type, i);
        if (null != l) {
            if (null == t) return { referenceId: l.channel.id, parentId: n.id };
            if (tF(t.channel.type, e.type) || ((0, e5.tr)(e.type) && t.channel.isGuildVocal()))
                return { referenceId: l.channel.id, parentId: t.channel.parent_id };
            if (t.channel.isCategory()) return { referenceId: l.channel.id, parentId: n.id };
        }
        return null;
    }
    let r = i[(tz(n, i, !0) ?? 0) + 1],
        a = tK(-1, n.id, e.type, i);
    if (null == a) return null;
    if (e.isGuildVocal()) {
        if (null == r || r.channel.isCategory()) return { referenceId: a.channel.id, parentId: n.parent_id };
        if (r.channel.isGuildVocal()) return { referenceId: a.channel.id, parentId: r.channel.parent_id };
    }
    return e.isCategory() && (null == r || r.channel.isCategory())
        ? { referenceId: a.channel.id, parentId: null }
        : null;
}
var tX = n(488926);
let tq = "DRAGGABLE_GUILD_CHANNEL";
function tJ(e, t) {
    if (null == e || null == t) return null;
    if (!(0, M.ai)(e)) return eZ.A.getChannel(t);
    let n = e8.Ay.getChannels(e),
        l =
            n[e8.I6].find((e) => e.channel.id === t) ??
            n[e8.vM].find((e) => e.channel.id === t) ??
            n[F.rbe.GUILD_CATEGORY].find((e) => e.channel.id === t);
    return l?.channel;
}
function tZ(e, t) {
    if (null != e.parent_id) {
        let t = eZ.A.getChannel(e.parent_id);
        if (null != t) return B.A.can(F.xBc.MANAGE_CHANNELS, t);
    }
    return B.A.can(F.xBc.MANAGE_CHANNELS, t);
}
function t$(e) {
    return (0, tL.T)(
        tq,
        {
            drop(e, t) {
                let n,
                    l = te.A.getGuildId(),
                    i = t.getItem(),
                    r = tY(tJ(l, i.id), i.position, e.channel, e.position, i.channelList);
                if (null == r) return;
                let a = tJ(l, i.id);
                if (null == a) return;
                let o = tH.A.getCategories(l),
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
                                    : tk.Ay.moveItemFromTo(t, i, s)),
                            (r = r.concat(
                                tk.Ay.calculatePositionDeltas({
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
                        (i = tz(e, n)), (s = tz(t, n)), (a = d(n)).unshift(o[0]);
                    }
                    if ((0, e5.tr)(e.type) || e.isCategory()) {
                        let n = (0, tD.A)(a.length > 0 ? a : o, l, (e) => {
                            let {
                                channel: { type: t },
                            } = e;
                            return (0, e5.tr)(t);
                        });
                        (i = tz(e, n)), (s = tz(t, n)), d(n);
                    }
                    if (e.isGuildVocal() || e.isCategory()) {
                        let n = (0, tD.A)(a.length > 0 ? a : o, l, (e) => {
                            let { channel: t } = e;
                            return t.isGuildVocal();
                        });
                        (i = tz(e, n)), (s = tz(t, n)), d(n);
                    }
                    return (
                        e.parent_id !== n &&
                            null == r.find((t) => t.id === e.id && ((t.parent_id = n), !0)) &&
                            r.push({ id: e.id, parent_id: n }),
                        r
                    );
                })(a, tJ(l, r.referenceId), r.parentId, o);
                if (0 !== c.length) {
                    if ((0, M.ai)(l)) return void (0, tP.zN)(c);
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
                                let l = tX.r(a, t),
                                    i = tX.r(a, eZ.A.getChannel(a.parent_id));
                                return ((null != a.parent_id || l) && (!i || l)) || (n = e), !0;
                            }),
                        null != n)
                    ) {
                        let e = eZ.A.getChannel(n.parent_id);
                        null != e &&
                            (0, en.openModal)((t) =>
                                (0, s.jsx)(tO.default, {
                                    ...t,
                                    channel: a,
                                    category: e,
                                    onConfirm: () => {
                                        null != n && ((n.lock_permissions = !0), tU.A.batchChannelUpdate(l, c));
                                    },
                                    onCancel: () => {
                                        null != n && tU.A.batchChannelUpdate(l, c);
                                    },
                                }),
                            );
                    } else tU.A.batchChannelUpdate(l, c);
                }
            },
            canDrop(e, t) {
                let n = t.getItem(),
                    l = eZ.A.getChannel(n.id);
                if (null == l) return !1;
                let i = tY(eZ.A.getChannel(n.id), n.position, e.channel, e.position, n.channelList);
                if (null == i) return !1;
                if ((0, M.ai)(te.A.getGuildId())) return !0;
                if (tB.Ay.isFavorite(n.guildId, e.channel.id)) return !1;
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
        (0, tT.I)(
            tq,
            {
                canDrag(e) {
                    let { channel: t } = e;
                    if ((0, M.ai)(te.A.getGuildId())) return !0;
                    let l = tg.A.getGuild(t.getGuildId());
                    return (
                        null != l &&
                        ((0, et.WW)(l.id) && tZ(t, l)
                            ? ((0, tV.A)() &&
                                  (0, en.openModalLazy)(async () => {
                                      let { default: e } = await Promise.all([n.e("57729"), n.e("24848")]).then(
                                          n.bind(n, 354643),
                                      );
                                      return (t) => (0, s.jsx)(e, { ...t });
                                  }),
                              !1)
                            : tB.Ay.isFavorite(l.id, t.id) && tZ(t, l)
                              ? ((0, en.openModalLazy)(async () => {
                                    let { default: e } = await n.e("80545").then(n.bind(n, 933752));
                                    return (n) => (0, s.jsx)(e, { ...n, guildId: l.id, channelId: t.id });
                                }),
                                !1)
                              : tZ(t, l))
                    );
                },
                beginDrag(e) {
                    let {
                            channel: { id: t, parent_id: n, guild_id: l, type: i },
                            position: s,
                        } = e,
                        r = te.A.getGuildId(),
                        a = tH.A.getCategories(r);
                    return {
                        isChannelDrag: !0,
                        id: t,
                        position: s,
                        parentId: n,
                        type: i,
                        channelList: (0, tD.A)(a._categories, a, (e) => {
                            let { channel: t } = e;
                            return t.type === F.rbe.GUILD_CATEGORY && null != a[t.id] && 0 === a[t.id].length
                                ? !!(0, M.ai)(r) ||
                                      (B.A.can(F.xBc.MANAGE_CHANNELS, t) && B.A.can(F.xBc.VIEW_CHANNEL, t))
                                : !tw.A.isCollapsed(t.parent_id);
                        }),
                        guildId: l,
                    };
                },
            },
            (e) => ({ connectChannelDragSource: e.dragSource(), connectDragPreview: e.dragPreview() }),
        )(e),
    );
}
var tQ = n(47167),
    t0 = n(485947),
    t1 = n(551851),
    t2 = n(485596);
function t3(e) {
    e.stopPropagation();
}
let t9 = t$(
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
                m = (0, u.bG)([tB.Ay], () => tB.Ay.isChannelMuted(l.getGuildId(), l.id)),
                f = (0, u.bG)([tw.A], () => tw.A.isCollapsed(l.id)),
                p = (0, u.bG)([B.A], () => B.A.can(F.xBc.MANAGE_CHANNELS, l)),
                C = (0, tQ.Ay)(l);
            t = null != h ? (c > h ? t2.mU : t2.TR) : t2.fx;
            let E = r.useCallback(() => {
                    f ? (0, tM.fh)(l.id) : (0, tM.Gv)(l.id);
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
                        (0, s.jsx)(tR.vN, {
                            focusTarget: b,
                            ringTarget: G,
                            offset: { left: 4, right: 4 },
                            children: (0, s.jsxs)("div", {
                                ref: G,
                                className: eE()(t2.Ki, t2.iE, { [t2.yZ]: f, [t2.SU]: m, [t2.vk]: !0 }),
                                onContextMenu: x,
                                children: [
                                    (0, s.jsxs)(ei.D, {
                                        innerRef: b,
                                        className: t2.rb,
                                        tabIndex: S,
                                        ...I,
                                        onClick: E,
                                        "aria-label": K.intl.formatToPlainString(K.t.y5l3J2, { categoryName: C }),
                                        "aria-expanded": !f,
                                        focusProps: { enabled: !1 },
                                        children: [
                                            (0, s.jsx)(t0.A, {
                                                className: t2.UU,
                                                children: (0, s.jsx)(tb.A, { children: C }),
                                            }),
                                            A
                                                ? null
                                                : (0, s.jsx)(tv.a, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: t2.Kk,
                                                  }),
                                        ],
                                    }),
                                    (0, s.jsx)("div", {
                                        onClick: t3,
                                        className: t2.Y_,
                                        children:
                                            p && !o
                                                ? (0, s.jsx)(el.m, {
                                                      text: K.intl.string(K.t["fUYU+j"]),
                                                      children: (0, s.jsx)(ei.D, {
                                                          className: eE()(t2.c9, t2.ih),
                                                          onClick: N,
                                                          tabIndex: S,
                                                          role: "button",
                                                          "aria-label": K.intl.string(K.t["fUYU+j"]),
                                                          children: (0, s.jsx)(tj.T, {
                                                              size: "xs",
                                                              color: "currentColor",
                                                              className: t2.hs,
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
    t7 = r.memo(function (e) {
        let { name: t, onDismiss: n, className: l } = e;
        return (0, s.jsx)("li", {
            className: eE()(l, t2.fx),
            children: (0, s.jsxs)("div", {
                className: eE()(t2.Ki, t2._V),
                children: [
                    (0, s.jsx)("div", {
                        className: t2.rb,
                        children: (0, s.jsx)(t0.A, { className: t2.UU, children: (0, s.jsx)(tb.A, { children: t }) }),
                    }),
                    null != n
                        ? (0, s.jsx)(el.m, {
                              asContainer: !0,
                              text: K.intl.string(K.t["5qNmsU"]),
                              children: (0, s.jsx)(ei.D, {
                                  className: t2.r,
                                  onClick: n,
                                  children: (0, s.jsx)(ty.a, { size: "md", color: "currentColor", className: t2.X8 }),
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
            l = r.useCallback(() => {
                var e, l;
                n
                    ? ((e = t.guild.id), eP.h.dispatch({ type: "VOICE_CATEGORY_EXPAND", guildId: e, expand: !0 }))
                    : ((l = t.guild.id), eP.h.dispatch({ type: "VOICE_CATEGORY_COLLAPSE", guildId: l, expand: !1 }));
            }, [t.guild.id, n]);
        return (0, s.jsx)("div", {
            className: t2.oA,
            children: (0, s.jsx)(tG.$, {
                variant: "secondary",
                fullWidth: !0,
                onClick: l,
                icon: S.H,
                text: n ? K.intl.string(K.t["/eB9Bg"]) : K.intl.string(K.t.Q2gPWl),
            }),
        });
    }),
    t5 = r.memo(function (e) {
        let { category: t, channel: n } = e,
            l = (0, u.bG)([t1.A], () => t1.A.isVoiceCategoryCollapsed(t.guild.id));
        return l || null == n || n.record.type === F.rbe.GUILD_CATEGORY
            ? l
                ? (0, s.jsx)("li", {
                      className: t2.fx,
                      children: (0, s.jsx)("div", {
                          className: eE()(t2.Ki, t2._V),
                          children: (0, s.jsx)(t0.A, {
                              className: t2.UU,
                              children: (0, s.jsx)(tb.A, { children: K.intl.string(K.t["V/u9Dy"]) }),
                          }),
                      }),
                  })
                : null
            : (0, s.jsx)("div", { style: { height: 16 } });
    }),
    t4 = r.memo(function (e) {
        let { channel: t } = e,
            n = (0, tQ.Ay)(t);
        return (0, s.jsx)("li", {
            className: t2.fx,
            children: (0, s.jsx)("div", {
                className: eE()(t2.Ki, t2._V),
                children: (0, s.jsx)(t0.A, { className: t2.UU, children: (0, s.jsx)(tb.A, { children: n }) }),
            }),
        });
    });
var t8 = n(728321),
    ne = n(244083);
let nt = { origin: { x: -36, y: 7 }, targetWidth: 232, targetHeight: 40, offset: { x: 0, y: 0 } };
var nn = n(808240);
let nl = r.memo(function (e) {
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
            return (0, s.jsx)(t7, { name: K.intl.string(K.t.mlPMCy) });
        case l.recentsSectionNumber:
            return (0, s.jsx)(t7, { name: K.intl.string(K.t.gKcrqM), onDismiss: d });
        case l.voiceChannelsSectionNumber: {
            let e = l.getCategoryFromSection(l.voiceChannelsSectionNumber);
            if (null == e || e.isEmpty()) return null;
            let n = l.getChannelFromSectionRow(t, 0)?.channel;
            return (0, s.jsxs)(r.Fragment, {
                children: [(0, s.jsx)("div", { className: nn.ts }), (0, s.jsx)(t5, { category: e, channel: n })],
            });
        }
        case tt.TF: {
            let e = l.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, s.jsx)(t9, {
                channel: e.record,
                position: e.position,
                disableManageChannels: o,
                children: (0, s.jsx)(t8.A, {
                    inlineSpecs: nt,
                    arrowAlignment: ne.oN.TOP,
                    tutorialId: "organize-by-topic",
                    position: "right",
                }),
            });
        }
        default: {
            let e = l.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, s.jsx)(t9, { channel: e.record, position: e.position, disableManageChannels: o });
        }
    }
});
var ni = n(104171),
    ns = n(186369),
    nr = n(970812),
    na = n(871237),
    no = n(349828);
function nd(e, t, n) {
    return {
        hasDivider:
            !(function (e, t) {
                if (t === tt.PU) {
                    let t = e.getGuildActionSection().getRows();
                    return (
                        (1 === t.length && t[0] === tI.n.GUILD_PREMIUM_PROGRESS_BAR) ||
                        e.getGuildActionSection().isEmpty()
                    );
                }
                return 0 === e.getSections(!1)[t];
            })(e, n) &&
            (n === tt.PU ||
                (e.id === no.Vc
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
let nc = r.memo(function (e) {
        let { guildChannels: t, guildChannelsVersion: n } = e,
            l = r.useMemo(() => t.getCategoryFromSection(t.voiceChannelsSectionNumber), [t, n]);
        return null == l ? null : (0, s.jsx)(t6, { category: l });
    }),
    nu = r.memo(function (e) {
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
            { hasDivider: h, canHaveVoiceSummary: A } = r.useMemo(() => nd(n, c, t), [n, c, t, l]),
            g = r.useMemo(() => (t === tt.PU ? null : n.getCategoryFromSection(t)), [n, t, l]),
            m = (0, et.jN)(a),
            { enableWaveformIcon: f } = (0, ns.b)(a, "ChannelListSectionFooter"),
            p = (0, u.yK)([tB.Ay], () => {
                if (null == g || !g.isCollapsed || !A) return [];
                let e = g.getChannelRecords(),
                    t = [];
                for (let n of e) {
                    if (!n.isGuildVocal()) continue;
                    let e = tB.Ay.isChannelOrParentOptedIn(a, n.id);
                    (!m || e) && t.push(n);
                }
                return t;
            }, [g, A, a, m]),
            C = r.useMemo(
                () => (0, na.fK)({ channels: p, selectedChannelId: o, selectedVoiceChannelId: d, voiceStates: i }),
                [p, o, d, i],
            );
        if (t === n.voiceChannelsSectionNumber) return (0, s.jsx)(nc, { guildChannels: n, guildChannelsVersion: l });
        let E = h ? (0, s.jsx)("div", { className: nn.ts }) : null;
        return A && 0 !== C.length
            ? (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsx)("div", {
                          className: nn.qz,
                          children: (0, s.jsx)(ni.Ay, {
                              renderIcon: !0,
                              users: C,
                              max: 8,
                              showUserPopout: !0,
                              guildId: a,
                              renderLeadingIcon: f
                                  ? (e) => (0, s.jsx)(nr.A, { color: "currentColor", className: eE()(e, eu.Gj) })
                                  : void 0,
                          }),
                      }),
                      E,
                  ],
              })
            : E;
    });
var nh = n(625903),
    nA = n(283973),
    ng = n(933832),
    nm = n(435183),
    nf = n(698441),
    np = n(855687),
    nC = n(816662),
    nE = n(446600),
    nx = n(616356);
function nN(e, t, n) {
    return null != t && !!t && !tF(n, e.type);
}
function n_(e, t) {
    return null == t ? eu.fx : e > t ? eu.mU : eu.TR;
}
function nS(e) {
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
                      nm.Ay.open(t.id);
                  },
                  tabIndex: l,
                  "aria-label": K.intl.string(K.t["3gUsJb"]),
                  children: (0, s.jsx)(nh.Z, { size: "xs", color: "currentColor", className: eu.gE }),
              }),
          });
}
function nI(e) {
    let {
            channel: t,
            isDefaultChannel: l = !1,
            locked: i,
            tabIndex: a,
            forceShowButtons: o,
            hasChannelInfo: d = !1,
        } = e,
        c = (0, u.bG)([tg.A], () => tg.A.getGuild(t.getGuildId())),
        h = (0, u.bG)([nE.A], () => nE.A.getStageInstanceByChannel(t.id), [t.id]),
        A = (0, u.bG)([nf.Ay], () => nf.Ay.getActiveEventByChannel(t.id), [t.id]),
        g = (0, u.bG)([B.A], () => (0, np.K)(B.A, c, t, h)),
        m = (0, u.bG)([], () =>
            t?.type === F.rbe.GUILD_VOICE ? K.intl.string(K.t["EE+P0H"]) : K.intl.string(K.t["0jeAXt"]),
        ),
        f = r.useRef(null);
    if (i || !g || t.isModeratorReportChannel() || t.isThread()) return null;
    let p = (0, s.jsx)(nA.R, { size: "xs", className: eu.gE, "aria-hidden": !0, color: "currentColor" });
    return (
        l &&
            (p = (0, s.jsx)(t8.A, {
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
                        let e = nx.A.getAllActiveStreams().filter(
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
function nb(e) {
    let { channel: t } = e;
    return (0, s.jsx)(el.m, {
        asContainer: !0,
        text: K.intl.string(K.t["ROh4T+"]),
        children: (0, s.jsx)(ei.D, {
            className: eu.Xs,
            onClick: function () {
                (0, nC.Ol)(t.guild_id, t.id);
            },
            "aria-label": K.intl.string(K.t["ROh4T+"]),
            children: (0, s.jsx)(es.P, { size: "xs", color: "currentColor", className: eu.gE }),
        }),
    });
}
function nG(e) {
    let { channel: t } = e;
    return (0, s.jsx)(el.m, {
        asContainer: !0,
        text: K.intl.string(K.t["N2c/Un"]),
        children: (0, s.jsx)(ei.D, {
            className: eu.Xs,
            onClick: function () {
                (0, nC.jA)(t.guild_id, t.id, !0, { section: F.JJy.CHANNEL_LIST });
            },
            "aria-label": K.intl.string(K.t["N2c/Un"]),
            children: (0, s.jsx)(ng.A, { size: "xs", color: "currentColor", className: eu.gE }),
        }),
    });
}
class nR extends r.PureComponent {
    static defaultProps = { isDefaultChannel: !1 };
    renderEditButton() {
        return (0, s.jsx)(nS, { ...this.props });
    }
    renderInviteButton() {
        return (0, s.jsx)(nI, { ...this.props });
    }
    renderRemoveSuggestionButton() {
        return (0, s.jsx)(nb, { ...this.props });
    }
    renderAcceptSuggestionButton() {
        return (0, s.jsx)(nG, { ...this.props });
    }
    getClassName() {
        let { position: e, sortingPosition: t } = this.props;
        return n_(e, t);
    }
    isDisabled() {
        let { channel: e, sorting: t, sortingType: n } = this.props;
        return nN(e, t, n);
    }
}
var nv = n(929481),
    nj = n(790782);
let ny = t$(function (e) {
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
        C = (0, tQ.Ay)(m),
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
    let N = n_(i, c),
        _ = nN(m, o, d),
        S = (0, s.jsx)("div", {
            className: eE()(N, { [eu.r9]: _, [eu.wH]: p }),
            "data-dnd-name": C,
            children: (0, s.jsxs)(nv.Ay, {
                className: eu.Ki,
                channel: m,
                guild: t,
                selected: p,
                onContextMenu: x,
                forceInteractable: !0,
                resolvedUnreadSetting: nj.e.ONLY_MENTIONS,
                children: [
                    (0, s.jsx)(nI, { channel: m, tabIndex: g }),
                    (0, s.jsx)(nS, { channel: m, disableManageChannels: a, tabIndex: g }),
                ],
            }),
        });
    return E && (S = A(h(S))), S;
});
var nM = n(34188),
    nL = n(733391),
    nT = n(832163),
    nU = n(517907),
    nD = n(31969),
    nO = n(44724),
    nP = n(849134),
    nV = n(770178),
    nw = n(65347);
let nH = Math.ceil(Math.sqrt(115200)),
    nB = (nH - 240) / 2,
    nk = r.forwardRef(function (e, t) {
        let { children: n } = e,
            [l, i] = r.useState(-1),
            a = r.useCallback((e) => {
                i(e.contentRect.width);
            }, []),
            o = (0, nV.w)(a, [], { fireOnMount: !0 }),
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
                            className: nw.q,
                            style: {
                                transform: d.to(
                                    (e) => `translateX(calc(${e * l}px + ${e * nH}px)) translateY(-50%) rotate(45deg)`,
                                ),
                            },
                        }),
                    ),
                [n, l, d],
            );
        return (
            r.useImperativeHandle(t, () => ({ onMouseEnter: u, onMouseLeave: h }), [u, h]),
            (0, s.jsx)("div", {
                className: nw.i,
                onMouseEnter: u,
                onMouseLeave: h,
                onFocus: u,
                onBlur: h,
                ref: o,
                style: { "--custom-shine-dimensions": "240px", "--custom-shine-rotated-dimensions-delta": `${nB}px` },
                children: A,
            })
        );
    });
var nF = n(371794),
    nK = n(240248),
    nz = n(998218),
    nW = n(430825),
    nY = n(601551),
    nX = n(876772);
let nq = r.memo(function (e) {
    let { guild: t, selected: l } = e,
        i = r.useRef(null),
        a = r.useRef(null),
        o = (0, en.useHasAnyModalOpen)(),
        d = (0, u.bG)([eg.A], () => eg.A.hasLayers()),
        c = (0, eA.xr)((e) => e.fullScreenLayers.length > 0);
    r.useEffect(() => {
        (0, nL.Kh)(t.id);
    }, [t.id]);
    let A = (0, u.bG)([nT.A], () => nT.A.getAnnouncement(t.id)),
        g = A?.state === "success" ? A.announcement : void 0,
        [m, f] = (0, ea.x_)(L.M.GAME_SHOP_NEW_BADGE, t.id, g?.id ?? "", void 0, !0),
        p = m === L.M.GAME_SHOP_NEW_BADGE && null != g,
        C = (0, t_.nY)(t.id),
        E = (0, nD.F)("storefront_badge", { applicationId: C }),
        x = (0, nU.A)({ applicationId: C, location: "game_shop_channel_row" }),
        _ = null;
    p ? (_ = K.intl.string(K.t.y2b7CA)) : x && (_ = K.intl.string(nW.default.hriMCc)), null != E && (_ = E.text);
    let [S, I] = (0, ea.x_)(L.M.GAME_SHOP_NEW_DROP_POPOVER, t.id, g?.id ?? ""),
        b = S === L.M.GAME_SHOP_NEW_DROP_POPOVER && null != g;
    r.useEffect(() => {
        l && (p && f(eo.i.INDIRECT_ACTION), b && I(eo.i.INDIRECT_ACTION));
    }, [f, I, l, p, b]);
    let G = r.useCallback(() => {
            f(eo.i.TAKE_ACTION), I(eo.i.TAKE_ACTION);
            let e = (0, t_.mq)(t.id),
                n = nT.A.getStorefrontState(e)?.activePage ?? 0;
            (0, Y.pX)(F.BVt.CHANNELS_GAME_SHOP(t.id, n));
        }, [t.id, f, I]),
        R = r.useCallback(() => {
            (0, nO.X)({ guildId: t.id, forceFetch: b });
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
                    background: (0, s.jsx)("div", { className: nX.D }),
                    innerClassName: nX.Z,
                    ref: a,
                    id: `game-shop-${t.id}`,
                    renderIcon: (e) =>
                        (0, s.jsx)(nM.U, {
                            size: "custom",
                            color: "currentColor",
                            width: 20,
                            height: 20,
                            className: e,
                        }),
                    text: (0, s.jsx)(N.E, {
                        variant: "text-md/medium",
                        className: nY.UU,
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
                                ? nz.A.toURLSafe((0, nF.YE)(g.applicationId, g.assetId, 256, "webp"))
                                : void 0,
                        t =
                            null != g.backgroundImageAssetId
                                ? nz.A.toURLSafe((0, nF.YE)(g.applicationId, g.backgroundImageAssetId, 256, "webp"))
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
                    if ((0, nK.uJ)(e) && (0, nK.uJ)(t)) return null;
                    return {
                        graphicSource: (0, nK.uJ)(e) ? { type: "asset", src: t } : { type: "video", src: e },
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
                    ? (0, s.jsx)(nP.A, {
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
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(nk, { ref: i, children: M }), !o && !d && !c && D()] });
});
var nJ = n(740426),
    nZ = n(826673),
    n$ = n(591552),
    nQ = n(202776),
    n0 = n(454058),
    n1 = n(568548);
function n2(e) {
    let { guild: t, selected: l } = e,
        i = (0, nQ.A)(t),
        a = (0, nZ.HX)(L.M.CHANNEL_BROWSER_NEW_BADGE_NUX),
        o = (0, ts.yK)([n0.A], () =>
            Array.from(n0.A.getNewChannelIds(t.id)).filter((e) => n0.A.shouldIndicateNewChannel(t.id, e)),
        ),
        d = (0, ts.bG)([n1.Ay], () => n1.Ay.hasUnread(t.id, nj.P.GUILD_ONBOARDING_QUESTION)),
        c = o.length > tt.rR,
        u = (0, ts.bG)([n$.A, n1.Ay], () => {
            let e = n$.A.lastFetchedAt(t.id),
                n = n1.Ay.lastMessageId(t.id, nj.P.GUILD_ONBOARDING_QUESTION);
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
            renderIcon: (e) => (0, s.jsx)(nJ.k, { size: "md", color: "currentColor", className: e }),
            text: i ? K.intl.string(K.t.h9mGOP) : K.intl.string(K.t.et6wav),
            selected: l,
            onClick: A,
            onContextMenu: g,
            trailing: m,
        })
    );
}
var n3 = n(855473);
function n9(e) {
    let { guild: t, selected: n } = e;
    return (0, s.jsx)(H.G, {
        id: `home-tab-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(n3.Z, { size: "md", color: "currentColor", className: e }),
        text: K.intl.string(K.t.VbpLyU),
        selected: n,
        onClick: function () {
            (0, Y.pX)(F.BVt.CHANNEL(t.id, X.VV.GUILD_HOME));
        },
    });
}
var n7 = n(5373),
    n6 = n(65995),
    n5 = n(408619);
function n4(e, t) {
    return (0, s.jsx)(N.E, { variant: "text-xs/bold", color: "text-default", children: e }, t);
}
let n8 = r.memo(function (e) {
    let { guild: t } = e,
        n = (0, u.bG)([td.h], () => td.h.getNewMemberActions(t.id), [t.id]),
        l = (0, u.bG)([n6.A], () => n6.A.getCompletedActions(t.id)),
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
                className: n5.G9,
                onClick: function () {
                    (0, Y.pX)(F.BVt.CHANNEL(t.id, X.VV.GUILD_HOME));
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
                                            numberHook: n4,
                                            total: a.toString(),
                                            completed: i.toString(),
                                        }),
                                    }),
                                    (0, s.jsx)(eB.A, {
                                        className: n5.UE,
                                        width: 16,
                                        height: 16,
                                        direction: eB.A.Directions.RIGHT,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, s.jsx)(n7.i, {
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
var le = n(581925);
function lt(e) {
    let { guild: t, selected: n } = e;
    return (0, s.jsx)(H.G, {
        id: `official-messages-page-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(le.L, { size: "md", color: "currentColor", className: e }),
        text: K.intl.string(K.t.xHEzFh),
        selected: n,
        onClick: function () {
            (0, Y.pX)(F.BVt.CHANNEL(t.id, X.VV.GUILD_OFFICIAL_MESSAGES));
        },
    });
}
var ln = n(514179);
function ll(e) {
    let { guild: t, selected: l } = e;
    return (0, s.jsx)(H.G, {
        id: `subscriptions-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(ln.A, { className: e }),
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
var li = n(506774),
    ls = n(95561),
    lr = n(289397),
    la = n(486418),
    lo = n(575926),
    ld = n(440293),
    lc = n(174459),
    lu = n(634654),
    lh = n(726965);
function lA(e) {
    let { guildId: t, selected: n, handleClick: l } = e,
        i = (0, ld.w)(t),
        r = (0, ts.bG)([tg.A], () => tg.A.getGuild(t)),
        a = r?.features.has(F.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) === !0,
        o = "false" === li.w.get(lu.bJ, "false"),
        d = (0, ts.bG)([R.Ay], () => R.Ay.useReducedMotion);
    return (0, s.jsx)(H.G, {
        id: `shop-${t}`,
        className: eE()(lh.A2, { [lh.wH]: n, [lh.ST]: o }),
        innerClassName: lh.LE,
        renderIcon: (e) => (0, s.jsx)(lo.h, { width: 20, height: 20, className: eE()([e, lh.sV]) }),
        text: K.intl.string(K.t.al5EXL),
        selected: n,
        onClick: l,
        trailing: (0, s.jsxs)("div", {
            className: lh.ai,
            children: [
                d
                    ? (0, s.jsx)(U.Lp, {
                          color: h.A.unsafe_rawColors.BRAND_260.css,
                          text: K.intl.string(K.t.y2b7CA),
                          className: lh.Ad,
                      })
                    : (0, s.jsx)("img", {
                          src: (0, lr.n)("server_products/storefront/money.gif"),
                          className: lh.TG,
                          alt: "",
                      }),
                n &&
                    (0, s.jsx)(ei.D, {
                        className: lh.b,
                        onClick: function (e) {
                            e.stopPropagation(),
                                (0, nZ.Dr)(L.M.SERVER_SHOP_PHANTOM_PREVIEW),
                                lc.default.track(F.HAw.GUILD_SHOP_PREVIEW_CLICK, {
                                    ...(0, ls.H$)(t),
                                    action_taken: lu.hN.DISMISS_CHANNEL_ROW,
                                }),
                                (i && a) || (0, Y.bG)(F.BVt.CHANNEL(t, e8.Ay.getDefaultChannel(t)?.id));
                        },
                        "aria-label": K.intl.string(K.t.cpT0Cq),
                        children: (0, s.jsx)(ty.a, { size: "xs", color: "currentColor" }),
                    }),
            ],
        }),
    });
}
function lg(e) {
    let { guild: t, selected: l } = e;
    function i() {
        li.w.set(lu.bJ, "true"), (0, Y.pX)(F.BVt.CHANNEL(t.id, X.VV.GUILD_SHOP));
    }
    return (0, la.P)(t)
        ? (0, s.jsx)(lA, { guildId: t.id, selected: l, handleClick: i })
        : (0, s.jsx)(H.G, {
              id: `shop-${t.id}`,
              renderIcon: (e) => (0, s.jsx)(lo.h, { width: 20, height: 20, className: e }),
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
var lm = n(308528),
    lf = n(262763),
    lp = n(499211),
    lC = n(406704),
    lE = n(747926),
    lx = n(977997),
    lN = n(807632),
    l_ = n(37411);
function lS(e) {
    let { thread: t, tabIndex: n } = e,
        l = (0, lN.YG)(t),
        i = (0, lN.IO)(t),
        r = (0, lC._M)(t);
    return l && i && r ? (0, s.jsx)(lI, { thread: t, tabIndex: n }) : null;
}
function lI(e) {
    let { thread: t, tabIndex: n } = e,
        l = (0, u.bG)([lx.A], () => lx.A.isInChannel(t.id), [t.id]),
        { needSubscriptionToAccess: i } = (0, lp.A)(t.id),
        a = r.useCallback(() => {
            lf.A.handleVoiceConnect({ channel: t, connected: l, needSubscriptionToAccess: i, locked: !1 });
        }, [t, l, i]),
        o = r.useCallback(() => {
            (0, lE.JA)(t, !0, l_.H9.CHANNEL_LIST);
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
var lb = n(152007);
function lG(e) {
    return null != e && e > 0;
}
var lR = n(405018),
    lv = n(428689),
    lj = n(785574);
function ly(e) {
    let { total: t, users: n, videoLimit: l } = e;
    return (0, s.jsxs)("div", {
        className: lj.iE,
        children: [
            (0, s.jsxs)(N.E, {
                tag: "span",
                color: "text-subtle",
                variant: "text-xs/medium",
                className: eE()(lj.VV, { [lj.Ki]: l, [lj.$G]: n >= 100 }),
                children: [
                    l ? (0, s.jsx)(lv.n, { size: "md", color: "currentColor", className: lj.LB }) : null,
                    n.toString().padStart(2, "0"),
                ],
            }),
            (0, s.jsx)(N.E, {
                tag: "span",
                color: "text-subtle",
                variant: "text-xs/medium",
                className: eE()(lj.X5, { [lj.$G]: t >= 100 }),
                children: t.toString().padStart(2, "0"),
            }),
        ],
    });
}
function lM(e) {
    let { channel: t, video: n, userCount: l } = e,
        { limit: i } = (0, lR.A)(t),
        r = -1,
        a = !1;
    return (
        t.userLimit > 0 && (r = t.userLimit),
        n && i > 0 && ((a = r < 0 || i < r), (r = r > 0 ? Math.min(r, i) : i)),
        (0, s.jsx)(ly, { users: l, total: r, videoLimit: a })
    );
}
var lL = n(664841);
function lT(e) {
    let { mentionsCount: t, isMentionLowImportance: n } = e;
    return (0, s.jsx)("div", {
        className: lL.R,
        "aria-hidden": !0,
        children: (0, s.jsx)(U.hV, {
            count: t,
            color: n ? h.A.colors.BACKGROUND_MOD_STRONG.css : h.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
        }),
    });
}
var lU = n(588224),
    lD = n(684086);
function lO(e) {
    let { thread: t, countInVoice: n, hasVideo: l, mentionCount: i, isMentionLowImportance: r } = e,
        a = n > 0 && t.userLimit > 0,
        o = lG(i);
    return a || o
        ? (0, s.jsxs)("div", {
              className: eu.yW,
              children: [
                  a ? (0, s.jsx)(lM, { userCount: n, video: l, channel: t }) : null,
                  o ? (0, s.jsx)(lT, { mentionsCount: i, isMentionLowImportance: r }) : null,
              ],
          })
        : null;
}
function lP(e) {
    let { style: t, withGuildIcon: n, inverted: l } = e,
        i = { className: eE()(lD.GI, { [lD.a7]: n }, { [lD.BJ]: l }), style: t },
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
let lV = r.memo(function (e) {
        let { thread: t, isSelectedChannel: l, isSelectedVoice: i, isLast: a, withGuildIcon: o } = e,
            c = (0, u.bG)([e$.Ay], () => e$.Ay.getVoiceStatesForChannel(t), [t]),
            h = (0, u.bG)([lx.A], () => lx.A.hasVideo(t.id)),
            {
                unread: A,
                mentionCount: g,
                isMentionLowImportance: m,
            } = (0, u.cf)([n1.Ay], () => ({
                unread: n1.Ay.hasUnread(t.id),
                mentionCount: n1.Ay.getMentionCount(t.id),
                isMentionLowImportance: n1.Ay.getIsMentionLowImportance(t.id),
            })),
            f = (0, u.bG)([lb.A], () => lb.A.isMuted(t.id)),
            p = r.useCallback(
                (e) => {
                    (0, lE.JA)(t, !e.shiftKey, l_.H9.CHANNEL_LIST);
                },
                [t],
            ),
            C = r.useCallback(() => {
                lm.A.preload(t.guild_id, t.id);
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
            { role: _, ...S } = (0, d.rm)(t.id),
            I = r.useRef(null),
            b =
                g > 0
                    ? K.intl.formatToPlainString(K.t["ZL7+I6"], { channelName: t.name, mentionCount: g })
                    : A
                      ? K.intl.formatToPlainString(K.t.YlVvmc, { channelName: t.name })
                      : K.intl.formatToPlainString(K.t["0nZpiF"], { channelName: t.name });
        return (0, s.jsxs)("li", {
            role: _,
            className: eE()(eu.fx, { [eu.wH]: l }),
            children: [
                (0, s.jsx)(lP, { withGuildIcon: o }),
                a
                    ? null
                    : (0, s.jsx)(lP, {
                          withGuildIcon: o,
                          inverted: !0,
                          style: { transform: "rotateX(180deg) translateY(-9px)" },
                      }),
                (0, s.jsx)(tR.vN, {
                    focusTarget: I,
                    ringTarget: I,
                    offset: { top: 2, bottom: 2, right: 4 },
                    children: (0, s.jsxs)("div", {
                        className: eE()(eu.Ki, nY.iE, nY.ZS, {
                            [nY.J1]: l,
                            [nY.F4]: !l && f,
                            [nY.V2]: !f && !l && A,
                            [nY.lY]: o,
                        }),
                        onMouseDown: C,
                        onContextMenu: E,
                        children: [
                            !A || f || l ? null : (0, s.jsx)("div", { className: eE()(nY.gy, nY.WS) }),
                            (0, s.jsx)(ei.D, {
                                ...S,
                                innerRef: I,
                                className: nY.nf,
                                onClick: p,
                                "aria-label": b,
                                focusProps: { enabled: !1 },
                                children: (0, s.jsxs)("div", {
                                    className: eE()(nY.Y5, nY.__invalid_threadMainContent),
                                    children: [
                                        (0, s.jsx)(tb.A, {
                                            className: nY.UU,
                                            "aria-hidden": !0,
                                            children: (0, s.jsx)(N.E, {
                                                variant: "text-sm/medium",
                                                color: "none",
                                                children: t.name,
                                            }),
                                        }),
                                        (0, s.jsxs)("div", {
                                            className: nY.Y_,
                                            onClick: nv.dG,
                                            onKeyDown: nv.dG,
                                            children: [
                                                (0, s.jsx)(lO, {
                                                    thread: t,
                                                    countInVoice: x,
                                                    hasVideo: h,
                                                    mentionCount: g,
                                                    isMentionLowImportance: m,
                                                }),
                                                (0, s.jsx)(lS, { thread: t, tabIndex: S.tabIndex }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                }),
                (0, s.jsx)(lU.A, {
                    channel: t,
                    collapsed: !i && 1 !== c.length,
                    collapsedMax: 6,
                    voiceStates: c,
                    isThread: !0,
                }),
            ],
        });
    }),
    lw = r.memo(function (e) {
        let { channel: t, selectedChannel: n, selectedVoiceChannelId: l, sortedThreadIds: i, withGuildIcon: r } = e,
            a = (0, tQ.Ay)(t),
            { density: o } = (0, C.wR)(),
            d = (0, u.yK)([eZ.A], () => i.map((e) => eZ.A.getChannel(e)).filter(eQ.Vq), [i]),
            c = (0, u.bG)([e$.Ay], () => {
                let e = d[d.length - 1];
                if (null == e) return 0;
                let t = e$.Ay.getVoiceStates(e.guild_id)[e.id];
                return null == t || 0 === t.length ? 0 : l !== e.id ? 40 : 32 * t.length + 8;
            });
        return (0, s.jsx)("li", {
            className: lD.kL,
            children: (0, s.jsxs)("ul", {
                role: "group",
                "aria-label": K.intl.formatToPlainString(K.t.EiyIi6, { channelName: a }),
                children: [
                    (0, s.jsx)("div", {
                        className: eE()(lD.eh, { [lD.ET]: r }),
                        style: { bottom: ("cozy" === o ? 28 : 24) + c },
                    }),
                    d.map((e, t) =>
                        (0, s.jsx)(
                            lV,
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
var lH = n(922016),
    lB = n(367513),
    lk = n(296216),
    lF = n(963027),
    lK = n(202384),
    lz = n(51758),
    lW = n(139033),
    lY = n(305866),
    lX = n(123292),
    lq = n(830215),
    lJ = n(315982),
    lZ = n(480900),
    l$ = n(557722),
    lQ = n(834942),
    l0 = n(287809),
    l1 = n(53516),
    l2 = n(914081),
    l3 = (((l = {})[(l.VOICE = 0)] = "VOICE"), l);
let l9 = function (e) {
    let { type: t, guildId: l, closePopout: i } = e,
        r = (0, y.GV)(),
        a = (0, u.bG)([lQ.A], () => lQ.A.getCheck(l), [l]),
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
        : (0, s.jsxs)(lY.l, {
              className: l2.kL,
              "aria-labelledby": r,
              children: [
                  (0, s.jsx)("img", { alt: "", className: l2.Sl, src: n(303528) }),
                  (0, s.jsxs)("div", {
                      className: l2.Qs,
                      children: [
                          (0, s.jsx)(x.D, { variant: "heading-md/semibold", id: r, children: g }),
                          (0, s.jsx)(N.E, { color: "text-default", variant: "text-sm/normal", children: m }),
                          (0, s.jsxs)("div", {
                              className: l2.UD,
                              children: [
                                  null != f
                                      ? (0, s.jsx)("div", {
                                            "data-button-hoisted-classname-wrapper": !0,
                                            className: l2.FS,
                                            children: (0, s.jsx)(tG.$, {
                                                variant: "primary",
                                                text: f,
                                                onClick: function () {
                                                    o
                                                        ? lJ.R()
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
                                                                            reason: l$.d.GUILD_PHONE_REQUIRED,
                                                                            ...t,
                                                                        });
                                                                },
                                                                { modalKey: l1.V },
                                                            )
                                                          : d
                                                            ? (lq.A.verifyResend(),
                                                              (0, lW.A)({
                                                                  title: K.intl.string(K.t.LykQYk),
                                                                  subtitle: K.intl.format(K.t.azKEPy, {
                                                                      email: l0.default.getCurrentUser()?.email,
                                                                  }),
                                                              }))
                                                            : h && null != A && (0, lZ.b)(A, l),
                                                        i();
                                                },
                                            }),
                                        })
                                      : null,
                                  o || c || d
                                      ? (0, s.jsx)(lX.Q, {
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
var l7 = n(824865),
    l6 = n(378570),
    l5 = n(790535),
    l4 = n(113783),
    l8 = n(96566),
    ie = n(280450),
    it = n(312006),
    il = n(505543),
    ii = n(994500),
    is = n(685399),
    ir = n(475889),
    ia = n(693879),
    io = n(435470),
    id = n(35275),
    ic = n(138383);
function iu(e) {
    let { locked: t } = e;
    return (0, s.jsx)("div", {
        className: eE()(eu.Xs, ic.U),
        children: (0, s.jsx)(id.A, {
            className: eu.gE,
            color: t ? h.A.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css : void 0,
        }),
    });
}
var ih = n(695633),
    iA = n(669715),
    ig = n(769015),
    im = n(364132);
function ip(e) {
    let { className: t, embeddedApps: n, muted: l } = e;
    if (n.length <= 0) return null;
    {
        if (1 === n.length)
            return (0, s.jsx)("div", {
                className: eE()(im.kL, t, l && im.F4),
                children: (0, s.jsx)(ig.A, { game: n[0].application, className: im.wK }),
            });
        let e = n.length - 1;
        return (0, s.jsxs)("div", {
            className: eE()(im.kL, t, l && im.F4),
            children: [
                (0, s.jsx)(ig.A, { game: n[0].application, className: im.wK }),
                2 === n.length
                    ? (0, s.jsx)(ig.A, { game: n[1].application, className: im.wK })
                    : (0, s.jsx)(N.E, {
                          className: im.ju,
                          variant: "text-xs/bold",
                          color: "interactive-text-active",
                          children: `+${e}`,
                      }),
            ],
        });
    }
}
function iC(e) {
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
        m = (0, u.bG)([n1.Ay], () => n1.Ay.getMentionCount(t.id)),
        f = (0, u.bG)([n1.Ay], () => n1.Ay.getIsMentionLowImportance(t.id)),
        p = (0, is.Ay)(t),
        C = (0, u.bG)([B.A], () => !B.A.can(F.xBc.CONNECT, t)),
        E = (0, ir.H)(t),
        x = (0, u.bG)([lx.A], () => lx.A.hasVideo(t.id)),
        _ = (0, l8.qT)(t.id) && t.isGuildStageVoice(),
        S = (function (e) {
            let { channel: t, locked: n, video: l, selected: i } = e;
            return (
                (function (e) {
                    let { channel: t, video: n, considerMaxStageVoiceUserLimit: l = !0 } = e,
                        { limit: i } = (0, lR.A)(t),
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
        I = (0, u.bG)([ih.A], () => ih.A.getNewThreadCount(t.guild_id, t.id)),
        b = (0, io.ed)(t.guild_id, t.id),
        G = (0, u.bG)([tg.A], () => tg.A.getGuild(t.guild_id)?.features.has(F.GuildFeatures.COMMUNITY) ?? !1);
    if (lG(m)) return (0, s.jsx)(lT, { mentionsCount: m, isMentionLowImportance: f });
    if (o) return (0, s.jsx)(iu, { locked: d });
    if (c) return (0, s.jsx)(U.Lp, { text: K.intl.string(K.t.y2b7CA), color: h.A.colors.BADGE_BACKGROUND_BRAND.css });
    if (!A && g === nj.e.ALL_MESSAGES && t.isForumLikeChannel() && null != I && I > 0)
        return (0, s.jsx)(N.E, {
            variant: "text-xs/semibold",
            color: "text-brand",
            children: K.intl.format(K.t.GkAbqY, { count: (0, U.Gu)(I) }),
        });
    if (!A && t.isForumLikeChannel() && null != b && b > 0)
        return (0, s.jsx)(N.E, { variant: "text-xs/semibold", color: "text-muted", children: (0, U.Gu)(b) });
    let R = i?.length ?? 0;
    return null != r && r && S
        ? (0, s.jsx)(lM, { userCount: R, video: x || _, channel: t })
        : l && (0, iA.t)(i) && G
          ? (0, s.jsx)(U.Lp, { text: K.intl.string(K.t.dI3q4h), color: h.A.unsafe_rawColors.RED_400.css })
          : null != E
            ? (0, s.jsx)(ia.z, { textColor: "text-feedback-positive", entry: { start: E } })
            : null != a && a && p.length > 0
              ? (0, s.jsx)(ip, { embeddedApps: p, muted: A })
              : null;
}
var iE = n(182222);
class ix extends nR {
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
        return (0, na.Pd)(e, lx.A, tg.A);
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
        null != s && (0, lz.V)(s) && (0, lK.Ze)(s),
            l && this.setState({ shouldShowGuildVerificationPopout: !0 }),
            t || n || e.isRoleSubscriptionTemplatePreviewChannel() || (0, l5.av)(e),
            __OVERLAY__ || (0, l6.iN)(e.id, i ? { source: l7.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
    };
    handleClickChat = () => {
        let { channel: e, locked: t, isSuggestedSection: n } = this.props;
        __OVERLAY__ || t || (0, l6.iN)(e.id, n ? { source: l7.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
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
        return (0, s.jsx)(lU.A, { channel: e, voiceStates: l, collapsed: t, tabIndex: n, numAudience: i });
    }
    renderPopout = () => {
        let { channel: e } = this.props,
            { shouldShowGuildVerificationPopout: t } = this.state;
        if (t)
            return (0, s.jsx)(l9, {
                type: l3.VOICE,
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
                        lB.A.updateChatOpen(e.id, !0), this.handleClickChat();
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
        return null == e ? null : (0, s.jsx)(tb.A, { children: e });
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
                "data-dnd-name": (0, tQ.m1)(e, l0.default, ii.A),
                children: [
                    (0, s.jsx)(lH.Y, {
                        targetElementRef: this.channelItemRef,
                        position: "right",
                        renderPopout: this.renderPopout,
                        spacing: 17,
                        onRequestClose: this.closeGuildVerificationPopout,
                        shouldShow: C,
                        children: () =>
                            (0, s.jsx)(el.m, {
                                text: this.getTooltipText(),
                                children: (0, s.jsxs)(nv.Ay, {
                                    ref: this.channelItemRef,
                                    className: eu.Ki,
                                    iconClassName: eE()({ [iE.G]: null != u }),
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
                                    "aria-label": (0, lF.Ay)({
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
let iN = t$((0, lk.F)(ix));
function i_(e) {
    var t;
    let n,
        l,
        { guild: i, channel: r, disableSorting: a, isFavoriteCategory: o, collapsed: d, voiceStates: c } = e,
        h = (0, u.cf)([n1.Ay], () => ({ unread: n1.Ay.hasUnread(r.id), mentionCount: n1.Ay.getMentionCount(r.id) })),
        A = (0, u.bG)([tB.Ay], () => tB.Ay.resolveUnreadSetting(r)),
        g = (0, u.cf)([eZ.A, lQ.A, B.A], () => {
            let e = eZ.A.getChannel(r.parent_id),
                t = lQ.A.getCheck(r.guild_id);
            return {
                canManageChannel: null != i && B.A.can(F.xBc.MANAGE_CHANNELS, r),
                canReorderChannel:
                    !0 !== a &&
                    (i.id === no.Vc ||
                        (null != e ? B.A.can(F.xBc.MANAGE_CHANNELS, e) : B.A.can(F.xBc.MANAGE_CHANNELS, i))),
                canMoveMembers: B.A.can(F.xBc.MOVE_MEMBERS, r),
                locked: !B.A.can(F.xBc.CONNECT, r),
                bypassLimit: B.A.can(F.xBc.MOVE_MEMBERS, r),
                unverifiedAccount: !t.canChat,
            };
        }),
        m = (0, u.bG)([tw.A], () => tw.A.isCollapsed(r.parent_id)),
        f =
            ((t = r.id),
            (n = (0, il.A)(t)),
            (l = (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return (0, u.cf)([it.Ay, ie.default], () => {
                    let n = ie.default.getId();
                    return it.Ay.getPermissionsForUser(n, e, t);
                }, [e, t]);
            })(t, !0).moderator),
            !n && l ? 1 : 0),
        p = (0, u.bG)([nE.A], () => nE.A.getStageInstanceByChannel(r.id), [r.id]),
        C = (0, l4.zy)(r.id, e3.ip.AUDIENCE),
        { isSubscriptionGated: E, needSubscriptionToAccess: x } = (0, lp.A)(r.id),
        N = (0, u.bG)([tB.Ay], () => tB.Ay.isFavorite(i.id, r.id)),
        _ = (0, l8.xn)(r.id),
        S = iC({
            channel: r,
            isChannelSelected: !1,
            isChannelCollapsed: d,
            voiceStates: c,
            isSubscriptionGated: E,
            needSubscriptionToAccess: x,
            enableConnectedUserLimit: _ || (r.userLimit > 0 && r.userLimit < F.RCc),
        }),
        I = e.connected && null == S;
    return (0, s.jsx)(iN, {
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
function iS(e, t) {
    let n = t.getGuildId();
    if (null == n) throw Error("TextChannel, preloadChannel: Channel does not have a guildId");
    lm.A.preload(n, t.id);
}
let iI = t$(
        class extends nR {
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
                        "data-dnd-name": (0, tQ.m1)(e, l0.default, ii.A),
                        children: (0, s.jsxs)(nv.Ay, {
                            className: eu.Ki,
                            channel: e,
                            selected: t,
                            onClick: this.handleClick,
                            onMouseDown: iS,
                            onContextMenu: this.handleContextMenu,
                            connectDragPreview: r ? i : null,
                            "aria-label": (0, lF.Ay)({ channel: e }),
                            resolvedUnreadSetting: nj.e.ONLY_MENTIONS,
                            children: [this.renderInviteButton(), this.renderEditButton()],
                        }),
                    });
                return r ? n(l(a)) : a;
            }
        },
    ),
    ib = r.memo(function (e) {
        let { channel: t, guild: n, disableSorting: l } = e,
            i = (0, u.cf)([eZ.A, B.A], () => {
                let e = eZ.A.getChannel(t.parent_id);
                return {
                    canManageChannel: B.A.can(F.xBc.MANAGE_CHANNELS, t),
                    canReorderChannel:
                        !0 !== l && null != e ? B.A.can(F.xBc.MANAGE_CHANNELS, e) : B.A.can(F.xBc.MANAGE_CHANNELS, n),
                };
            });
        return (0, s.jsx)(iI, { ...i, ...e });
    });
var iG = n(172218),
    iR = n(811024),
    iv = n(323073);
function ij(e) {
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
var iy = n(414808),
    iM = n(302005),
    iL = n(696451),
    iT = n(763827),
    iU = n(56059),
    iD = n(163328),
    iO = n(778712),
    iP = n(730134),
    iV = n(707539),
    iw = n(486020),
    iH = n(49741);
function iB(e) {
    let { channel: t } = e,
        l = (0, u.yK)([ih.A, n1.Ay, B.A], () => {
            let e = ih.A.getActiveJoinedRelevantThreadsForParent(t.guild_id, t.id);
            return o()(ih.A.getActiveJoinedThreadsForParent(t.guild_id, t.id))
                .values()
                .map((e) => e.channel)
                .concat(o().values(ih.A.getActiveUnjoinedThreadsForParent(t.guild_id, t.id)))
                .filter((t) => !(t.id in e) && B.A.can(F.xBc.VIEW_CHANNEL, t))
                .sort((e, t) => {
                    let n = n1.Ay.lastMessageId(e.id),
                        l = n1.Ay.lastMessageId(t.id);
                    return e1.default.compare(n, l);
                })
                .reverse()
                .value();
        }),
        i = t.isForumLikeChannel() ? 5 : 3,
        a = t.isForumLikeChannel() ? iU.b : iD.y;
    return (
        r.useEffect(() => {
            (0, iV.TE)();
        }, []),
        (0, s.jsxs)("div", {
            className: iH.SW,
            children: [
                (0, s.jsx)(N.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: iH.DD,
                    children: t.isForumLikeChannel() ? K.intl.string(K.t.ioVdO2) : K.intl.string(K.t.VNYs2v),
                }),
                (0, s.jsxs)("div", {
                    className: iH.p_,
                    children: [
                        l
                            .slice(0, t.isForumLikeChannel() ? l.length : i)
                            .map((e) => (0, s.jsx)(ik, { thread: e }, e.id))
                            .filter((e) => r.isValidElement(e))
                            .slice(0, i),
                        (0, s.jsxs)(ei.D, {
                            className: iH.nM,
                            onClick: function () {
                                t.isForumLikeChannel()
                                    ? (0, l6.iN)(t.id)
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
                                    className: iH.R4,
                                    children: (0, s.jsx)(a, { size: "custom", className: iH.Kk }),
                                }),
                                (0, s.jsx)("div", {
                                    className: iH.Pf,
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
function ik(e) {
    let { thread: t } = e,
        n = (0, u.bG)([l0.default], () => l0.default.getUser(t.ownerId)),
        l = (0, iV.JO)(t);
    return (0, s.jsxs)(ei.D, {
        className: iH.nM,
        onClick: function (e) {
            (0, lE.JA)(t, t.isForumPost() ? e.shiftKey : !e.shiftKey, l_.H9.POPOUT);
        },
        children: [
            (0, s.jsx)("div", {
                className: iH.R4,
                children:
                    null == n
                        ? (0, s.jsx)("img", {
                              className: iH.my,
                              src: iw.Ay.getDefaultAvatarURL(void 0, void 0),
                              alt: "",
                          })
                        : (0, s.jsx)(iP.A, { className: iH.my, user: n, size: iO._3.SIZE_16 }),
            }),
            (0, s.jsxs)("div", {
                className: iH.Pf,
                children: [
                    (0, s.jsx)(N.E, { className: iH.UU, variant: "text-sm/normal", color: "none", children: t.name }),
                    (0, s.jsx)(N.E, { variant: "text-sm/normal", color: "text-muted", children: "\u2022" }),
                    (0, s.jsx)(N.E, {
                        className: iH.vE,
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: (0, iV.aK)(l),
                    }),
                ],
            }),
        ],
    });
}
var iF = n(364522),
    iK = n(302959),
    iz = n(35903),
    iW = n(970928),
    iY = n(427262),
    iX = n(989628);
let iq = ni.DN.SIZE_24;
function iJ(e) {
    let { activity: t, embeddedApp: n } = e,
        l = t?.assets,
        i = t?.application_id;
    if (null == l || (null == l.large_image && null == l.small_image)) {
        let e = iw.Ay.getApplicationIconURL({ id: n.application.id, icon: n.application.icon }),
            t = n.application.name;
        return (0, s.jsx)(el.m, {
            text: t,
            position: "top",
            asContainer: !0,
            children: (0, s.jsx)("img", { alt: t, src: e, className: iX.P3 }),
        });
    }
    let r = l.large_image ?? l.small_image;
    return null != r
        ? (0, s.jsx)("img", { alt: l.large_text ?? "", src: (0, iW.uD)(i, r, [128, 128]), className: iX.P3 })
        : null;
}
function iZ(e) {
    let { activity: t, embeddedApp: n, channel: l } = e,
        i = Array.from(n.embeddedActivity.userIds),
        r = (0, u.yK)([l0.default], () => i.map((e) => l0.default.getUser(e)).filter(eQ.Vq));
    return (0, s.jsx)("div", {
        className: iX.ec,
        children: (0, s.jsxs)("div", {
            className: iX.Wh,
            children: [
                (0, s.jsx)(iJ, { activity: t, embeddedApp: n }),
                (0, s.jsxs)("div", {
                    className: iX.X0,
                    children: [
                        (0, s.jsx)(x.D, {
                            variant: "heading-sm/semibold",
                            color: "text-strong",
                            className: iX.wx,
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
                            (0, s.jsx)(ni.Ay, {
                                className: iX.TN,
                                guildId: l.guild_id,
                                users: r,
                                size: iq,
                                max: 7,
                                renderUser: function (e) {
                                    if (null == e || e === ni.mt) return null;
                                    let t = iY.Ay.getName(e);
                                    return (0, s.jsx)(
                                        el.m,
                                        {
                                            asContainer: !0,
                                            text: t,
                                            position: "bottom",
                                            children: (0, s.jsx)("img", {
                                                src: e.getAvatarURL(l.guild_id, iq),
                                                alt: t,
                                                className: iX.my,
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
var i$ = n(237913);
function iQ(e) {
    let { channel: t, presenceActivity: n, embeddedApp: l, onAction: i } = e,
        r = Array.from(l.embeddedActivity.userIds),
        a = (0, u.bG)([l0.default], () => l0.default.getUser(r[0]));
    return null == a
        ? null
        : (0, s.jsxs)("div", {
              className: i$.Eb,
              children: [
                  (0, s.jsx)("div", {
                      className: i$.Il,
                      children: (0, s.jsx)(iZ, { activity: n, embeddedApp: l, channel: t }),
                  }),
                  (0, s.jsx)("div", {
                      className: i$.M4,
                      children: (0, s.jsx)(iz.A, {
                          type: iK.M.VOICE_CHANNEL,
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
var i0 = n(713654),
    i1 = n(980248);
function i2(e) {
    let { channel: t } = e,
        n = (0, u.bG)([tg.A], () => tg.A.getGuild(t.guild_id)),
        l = (0, tQ.Ay)(t),
        i = (0, i0.gU)(t, n);
    return null == i
        ? null
        : (0, s.jsxs)("div", {
              className: i1.hY,
              children: [
                  (0, s.jsx)(i, { className: i1.p }),
                  (0, s.jsx)(N.E, {
                      variant: "text-md/semibold",
                      color: "interactive-text-default",
                      className: i1.HA,
                      children: l,
                  }),
              ],
          });
}
var i3 = n(565449);
function i9(e) {
    let { channel: t, onAction: n } = e,
        l = (0, is.Ay)(t),
        i = Array.from((0, is.Rz)(l).values());
    return 0 === i.length
        ? null
        : (0, s.jsxs)(iF.Ip, {
              className: i3.kL,
              children: [
                  (0, s.jsx)("div", { className: i3.oT, children: (0, s.jsx)(i2, { channel: t }) }),
                  (0, s.jsx)("div", { className: i3.zN }),
                  i.map((e, l) =>
                      (0, s.jsx)(
                          iQ,
                          { embeddedApp: e, presenceActivity: e.presenceActivity ?? void 0, channel: t, onAction: n },
                          l,
                      ),
                  ),
              ],
          });
}
class i7 extends nR {
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
        lm.A.preload(t ?? F.ME, e.id);
    };
    renderPopout = (e) => {
        let { channel: t, sorting: n, embeddedApps: l, channelIsContentGated: i } = this.props,
            { shouldShowActivities: r } = this.state;
        return t.isModeratorReportChannel() || i
            ? null
            : null != l && l.length > 0 && r && !n
              ? (0, s.jsx)(i9, { onAction: this.handleActivitiesPopoutClose, channel: t })
              : (0, s.jsx)(iB, { ...e, channel: this.props.channel });
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
            let l = l0.default.getUser(t.getRecipientId());
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
            R = ij(m),
            v = (0, s.jsxs)("li", {
                className: eE()(this.getClassName(), { [eu.r9]: this.isDisabled(), [eu.wH]: n }),
                "data-dnd-name": (0, tQ.m1)(e, l0.default, ii.A),
                onMouseEnter: b || G ? this.handleMouseEnter : void 0,
                onMouseLeave: b || G ? this.handleMouseLeave : void 0,
                children: [
                    (0, s.jsx)(lH.Y, {
                        targetElementRef: I,
                        position: "right",
                        renderPopout: this.renderPopout,
                        onRequestClose: this.handleClosePopout,
                        spacing: 17,
                        shouldShow: (b && this.state.shouldShowThreadsPopout) || (G && this.state.shouldShowActivities),
                        children: () =>
                            (0, s.jsxs)(nv.Ay, {
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
                                transitionExtras: S ? { source: l7.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
                                "aria-label": (0, lF.Ay)({
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
                    x && (0, s.jsx)(iy.A, { targetElementRef: I, markMenuItemPopoverAsDismissed: N }),
                ],
            });
        return h ? d(c(v)) : v;
    }
}
let i6 = t$(i7);
function i5(e) {
    let { channel: t, guild: n, disableSorting: l, isFavoriteCategory: i, muted: a, selected: o } = e,
        { hasActiveThreads: d, hasMoreActiveThreads: c } = (0, lC.NR)(t),
        h = (0, u.cf)([n1.Ay], () => ({
            unread: n1.Ay.hasUnread(t.id),
            ackMessageId: n1.Ay.ackMessageId(t.id),
            isLowImportanceMention: n1.Ay.getIsMentionLowImportance(t.id),
        })),
        A = (0, u.bG)([tB.Ay], () => tB.Ay.resolveUnreadSetting(t)),
        g = (0, u.cf)([eZ.A, B.A], () => {
            let e = eZ.A.getChannel(t.parent_id);
            return {
                canManageChannel: B.A.can(F.xBc.MANAGE_CHANNELS, t),
                canReorderChannel:
                    !0 !== l &&
                    (n.id === no.Vc ||
                        (null != e ? B.A.can(F.xBc.MANAGE_CHANNELS, e) : B.A.can(F.xBc.MANAGE_CHANNELS, n))),
            };
        }),
        m = (0, u.bG)([n0.A], () => n0.A.shouldIndicateNewChannel(n.id, t.id)),
        { needSubscriptionToAccess: f, isSubscriptionGated: p } = (0, lp.A)(t.id),
        C = (0, u.bG)([tB.Ay], () => tB.Ay.isFavorite(n.id, t.id)),
        E = (0, iv.ni)(t),
        x = (0, iR.Gp)(t.id),
        N = iC({
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
        _ = (0, is.Ay)(t),
        [S, I] = r.useState(!1),
        b = (0, iG.K)(
            r.useCallback((e) => {
                I(e);
            }, []),
        ),
        { showMenuItemPopover: G, markMenuItemPopoverAsDismissed: R } = (0, iM.z)({
            location: "TextChannel",
            isChannelSelected: o,
            isTargetInViewport: S,
            channelType: t.type,
            isPopoverAllowed: n.id !== no.Vc,
        });
    return (0, u.bG)([iT.A, iL.Ay], () => iT.A.getChannelId() !== t.id && iL.Ay.isCurrentUserGuest(t.getGuildId()))
        ? null
        : (0, s.jsx)(i6, {
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
var i4 = n(900797),
    i8 = n(250719),
    se = n(636585),
    st = n(531685),
    sn =
        (((i = {}).HIDDEN = "hidden"),
        (i.UNREAD = "unread"),
        (i.MENTIONS = "mentions"),
        (i.VOICE_CHANNELS = "voice-channels"),
        i);
let sl = { mode: "hidden", mentionCount: 0, targetChannelId: null },
    si = { topBar: sl, bottomBar: sl },
    ss = {},
    sr = {};
function sa(e) {
    let t = eZ.A.getChannel(e);
    return (
        !(null == t || null == t.getGuildId() || t.isGuildVocal()) &&
        !(t.isThread() ? lb.A.isMuted(t.id) : tB.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, eq.Y)(t)
    );
}
function so(e) {
    let t = eZ.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let l = tB.Ay.isGuildCollapsed(n),
        i = tB.Ay.isChannelMuted(n, t.id);
    return (!l || !i) && n1.Ay.getMentionCount(e) > 0;
}
function sd(e) {
    return (
        !tB.Ay.isChannelMuted(e.guild_id, e.id) &&
        (e.isGuildStageVoice()
            ? e2.A.getMutableParticipants(e.id, e3.ip.SPEAKER).length > 0
            : e$.Ay.getVoiceStatesForChannel(e).length > 0)
    );
}
function sc(e) {
    let { guildChannels: t } = tn.A.getGuildWithoutChangingGuildActionRows(e),
        n = t.getChannels(sr[e] ?? []);
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
            ((sa(t.id) || o().some(t.threadIds, sa)) && (d = !1),
            (so(t.id) || o().some(t.threadIds, so)) && (a = !1),
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
            (sa(t.id) || o().some(t.threadIds, sa)) && (null == i && (i = t.id), (p = !0)),
                (so(t.id) || o().some(t.threadIds, so)) &&
                    (null == l && (l = t.id),
                    (f += n1.Ay.getMentionCount(t.id)),
                    (f += o().sumBy(t.threadIds, n1.Ay.getMentionCount)));
        }
    if (d || a)
        for (let e = 0; e < m.length; e++) {
            let t = m[e];
            if (!d && !a) break;
            (sa(t.id) || o().some(t.threadIds, sa)) && (null == r && (r = t.id), (E = !0)),
                (so(t.id) || o().some(t.threadIds, so)) &&
                    (null == s && (s = t.id),
                    (C += n1.Ay.getMentionCount(t.id)),
                    (C += o().sumBy(t.threadIds, n1.Ay.getMentionCount)));
        }
    let x = null,
        N = null,
        _ = u?.getChannelRecords() ?? [];
    a && C > 0
        ? (x = { mode: "mentions", mentionCount: C, targetChannelId: s })
        : !c && o().some(_, sd)
          ? (x = { mode: "voice-channels", mentionCount: 0, targetChannelId: null })
          : d && E && (x = { mode: "unread", mentionCount: 0, targetChannelId: r }),
        a && f > 0
            ? (N = { mode: "mentions", mentionCount: f, targetChannelId: l })
            : d && p && (N = { mode: "unread", mentionCount: 0, targetChannelId: i });
    let S = null != N && (null == x || ("mentions" !== x.mode && "mentions" === N.mode)),
        I = null != x && ("mentions" === x.mode || !S);
    return (ss[e] = { topBar: S ? (N ?? sl) : sl, bottomBar: I ? (x ?? sl) : sl }), !0;
}
let su = o().throttle(sc, 200);
function sh(e) {
    let { guildId: t } = e,
        n = tg.A.getGuild(t);
    return null != n && !!n.features.has(F.GuildFeatures.COMMUNITY) && su(t);
}
function sA(e) {
    let { id: t } = e,
        n = eZ.A.getChannel(t);
    if (null == n) return !1;
    let l = tg.A.getGuild(n.guild_id);
    return null != l && !!l.features.has(F.GuildFeatures.COMMUNITY) && su(n.guild_id);
}
function sg(e) {
    let { channel: t } = e,
        n = eZ.A.getChannel(t.id);
    if (null == n) return !1;
    let l = tg.A.getGuild(t.guild_id);
    return null != l && !!l.features.has(F.GuildFeatures.COMMUNITY) && su(n.guild_id);
}
function sm(e) {
    let { channelId: t } = e,
        n = eZ.A.getChannel(t);
    if (null == n) return !1;
    let l = tg.A.getGuild(n.guild_id);
    return (
        null != l && !!l.features.has(F.GuildFeatures.COMMUNITY) && te.A.getGuildId() === n.guild_id && su(n.guild_id)
    );
}
function sf(e) {
    let { guildId: t } = e;
    return null != t && su(t);
}
class sp extends u.Ay.Store {
    static displayName = "ChannelListUnreadsStore";
    initialize() {
        this.waitFor(tn.A, eZ.A, tg.A, lb.A, n1.Ay, te.A, e$.Ay, e2.A, tB.Ay);
    }
    getUnreadStateForGuildId(e) {
        return ss[e] ?? si;
    }
}
let sC = new sp(eP.h, {
    UPDATE_CHANNEL_LIST_DIMENSIONS: function (e) {
        let { guildId: t, channelIds: n } = e,
            l = tg.A.getGuild(t);
        return (
            null != l &&
            !!l.features.has(F.GuildFeatures.COMMUNITY) &&
            null != n &&
            !o().isEqual(sr[t], n) &&
            ((sr[t] = n), sc(t))
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
                    null != t && t.features.has(F.GuildFeatures.COMMUNITY) && su(e) && (n = !0);
                }),
            n
        );
    },
    CHANNEL_ACK: sm,
    CHANNEL_DELETE: sg,
    CHANNEL_LOCAL_ACK: sm,
    MESSAGE_ACK: sm,
    MESSAGE_CREATE: sm,
    MESSAGE_DELETE_BULK: sm,
    MESSAGE_DELETE: sm,
    PASSIVE_UPDATE_V2: function (e) {
        let t = tg.A.getGuild(e.guildId);
        return !!(e.channels.length > 0 && null != t && t.features.has(F.GuildFeatures.COMMUNITY)) && su(e.guildId);
    },
    RESORT_THREADS: sm,
    THREAD_CREATE: sg,
    THREAD_DELETE: sg,
    THREAD_LIST_SYNC: sh,
    THREAD_MEMBER_UPDATE: sA,
    THREAD_MEMBERS_UPDATE: sA,
    THREAD_UPDATE: sg,
    BULK_CLEAR_RECENTS: sh,
    CATEGORY_COLLAPSE_ALL: sh,
    CATEGORY_EXPAND_ALL: sh,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = te.A.getGuildId();
        if (null == n || !new Set(t.map((e) => e.guildId)).has(n)) return !1;
        let l = ss[n];
        return null != l && "voice-channels" === l.bottomBar.mode && su(n);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: sf,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: sf,
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: t } = e;
        for (let e of t) null != e.guild_id && su(e.guild_id);
    },
    USER_GUILD_SETTINGS_GUILD_UPDATE: sf,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: sf,
});
var sE = n(168799);
let sx = { friction: 30, tension: 300 };
function sN(e) {
    let { guildChannels: t, jumpToVoiceChannels: n } = e,
        l = t.getCategoryFromSection(t.voiceChannelsSectionNumber),
        i = (0, i8.A)(t.id),
        a = r.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), n();
            },
            [n],
        ),
        o = l?.getChannelRecords() ?? [],
        d = (0, na.fK)({ channels: o, selectedChannelId: null, selectedVoiceChannelId: null, voiceStates: i });
    return (0, s.jsxs)(ei.D, {
        className: eE()(sE.M0, sE.OF),
        onClick: a,
        children: [
            (0, s.jsx)(S.H, { size: "custom", className: sE.Gs, width: 14, height: 14, color: "currentColor" }),
            (0, s.jsx)(N.E, {
                variant: "text-xs/semibold",
                className: sE.pM,
                children: K.intl.format(K.t["fDlr+F"], { count: d.length }),
            }),
            (0, s.jsx)(se.A, {
                guildId: t.id,
                className: sE.J$,
                users: d.slice(0, 4),
                renderMoreUsers: () => null,
                max: 4,
                size: iO._3.SIZE_16,
            }),
        ],
    });
}
function s_(e) {
    let { position: t, guildChannels: n, guildChannelsVersion: l, jumpToVoiceChannels: i, jumpToChannel: a } = e,
        { bottomBar: o, topBar: d } = (0, u.cf)([sC], () => sC.getUnreadStateForGuildId(n.id)),
        c = (0, u.bG)([st.A], () => st.A.isFocused()),
        { mode: h, mentionCount: A, targetChannelId: g } = "bottom" === t ? o : d,
        m = h === sn.HIDDEN,
        f = (0, eU.z)(
            {
                to: { transform: m ? ("bottom" === t ? "translateY(180%)" : "translateY(-180%)") : "translateY(0%)" },
                config: sx,
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
        className: eE()(sE.kL, { [sE.Mn]: "top" === t, [sE.sQ]: "bottom" === t }),
        children: (0, s.jsx)(eT.animated.div, {
            className: sE.pK,
            style: f,
            "aria-hidden": m,
            children: (function () {
                switch (h) {
                    case sn.HIDDEN:
                        return (0, s.jsx)("div", { className: eE()(sE.M0, sE.Te) });
                    case sn.UNREAD:
                        return (0, s.jsxs)(ei.D, {
                            className: sE.M0,
                            onClick: p,
                            children: [
                                "bottom" === t
                                    ? (0, s.jsx)(tv.a, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: sE.z_,
                                          height: 14,
                                          width: 14,
                                      })
                                    : (0, s.jsx)(i4.t, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: sE.z_,
                                          height: 14,
                                          width: 14,
                                      }),
                                (0, s.jsx)(N.E, {
                                    variant: "text-xs/semibold",
                                    color: "interactive-text-default",
                                    className: sE.pM,
                                    children: K.intl.string(K.t.FCRiT3),
                                }),
                            ],
                        });
                    case sn.MENTIONS:
                        return (0, s.jsx)(ei.D, {
                            className: eE()(sE.M0, sE.vU),
                            onClick: p,
                            children: (0, s.jsx)(N.E, {
                                variant: "text-xs/semibold",
                                color: "badge-text-brand",
                                className: sE.pM,
                                children: K.intl.format(K.t.EQcLyp, { count: A }),
                            }),
                        });
                    case sn.VOICE_CHANNELS:
                        return (0, s.jsx)(sN, { jumpToVoiceChannels: i, guildChannels: n, guildChannelsVersion: l });
                    default:
                        return;
                }
            })(),
        }),
    });
}
var sS = n(310953),
    sI = n(173860);
function sb(e) {
    let t = eZ.A.getChannel(e);
    return (
        null != t &&
        null != t.getGuildId() &&
        !(t.isThread() ? lb.A.isMuted(t.id) : tB.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, eq.Y)(t)
    );
}
function sG(e) {
    let t = eZ.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let l = tB.Ay.isGuildCollapsed(n),
        i = tB.Ay.isChannelMuted(n, t.id);
    return (!l || !i) && n1.Ay.getMentionCount(e) > 0;
}
let sR = r.forwardRef(function (e, t) {
    let { guildId: n, guildChannels: l, guildChannelsVersion: i, ...r } = e,
        a = (0, sS.W)(n, l, i, { withVoiceChannels: !1 }, { ignoreRecents: !0 }),
        o = (0, u.bG)([st.A], () => st.A.isFocused());
    return (0, s.jsx)(sI.A, { ref: t, ...r, isUnread: sb, isMentioned: sG, items: a, animate: o });
});
var sv = n(81466);
function sj(e) {
    let { guild: t, selected: l } = e,
        { hasUnread: i, mentionCount: r } = (0, u.cf)(
            [n1.Ay],
            () => ({
                hasUnread: n1.Ay.hasUnread(t.id, nj.P.GUILD_EVENT),
                mentionCount: n1.Ay.getMentionCount(t.id, nj.P.GUILD_EVENT),
            }),
            [t.id],
        ),
        a = (0, u.bG)([tB.Ay], () => tB.Ay.isMuteScheduledEventsEnabled(t.id));
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
                n.e("48263"),
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
            (0, nZ.Dr)(L.M.GUILD_HEADER_EVENT_UPSELL);
    }
    let d = (0, tf.Ay)(t.id),
        c = d.length > 0 ? K.intl.formatToPlainString(K.t.IBdqSu, { number: d.length }) : K.intl.string(K.t.tlopTM);
    return (0, s.jsx)(H.G, {
        id: `upcoming-events-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(sv.C, { size: "md", color: "currentColor", className: e }),
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
        trailing: !a && r > 0 ? (0, s.jsx)(U.hV, { className: nY.Do, disableColor: !0, count: r }) : null,
    });
}
var sy = n(152367),
    sM = n(818085);
function sL(e) {
    let { guild: t, selected: n } = e;
    return (0, s.jsx)(H.G, {
        id: `vibegrations-${t.id}`,
        renderIcon: (e) =>
            (0, s.jsx)(sy.D, { size: "custom", color: "currentColor", width: 20, height: 20, className: e }),
        text: K.intl.string(sM.default.Xmvb23),
        selected: n,
        onClick: () => (0, Y.pX)(F.BVt.CHANNEL(t.id, X.VV.VIBEGRATIONS)),
    });
}
var sT = n(845056),
    sU = n(765379),
    sD = n(271683),
    sO = n(725613),
    sP = n(857253),
    sV = n(360729),
    sw = n(22231),
    sH = n(241326),
    sB = n(750943),
    sk = n(743674),
    sF = n(888697),
    sK = n(26741),
    sz = n(493819),
    sW = n(722884),
    sY = n(844045),
    sX = n(52102);
function sq(e) {
    let { channel: t, imageUrl: l, animatedUrl: i, bannerHash: a, canModifyHangout: o } = e,
        d = (0, sk.S)(l),
        c = (0, Z.je)(t),
        u = (0, sK.P9)({ guildId: t.guild_id, channelId: t.id, bannerHash: a }),
        h = r.useCallback(() => {
            (0, sK.J_)({ guildId: t.guild_id, channelId: t.id }), (0, sW.A)({ channel: t });
        }, [t]),
        A = r.useCallback(() => {
            (0, sK.nK)({ guildId: t.guild_id, channelId: t.id }), (0, sF.e2)(t.id);
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
        className: sX.rs,
        onContextMenu: g,
        children: [
            (0, s.jsx)("div", {
                className: sX.ZS,
                style: null != d ? { backgroundColor: d } : void 0,
                children: (0, s.jsx)(sz.A, { imageUrl: l, animatedUrl: i, className: sX.Sl }),
            }),
            o
                ? (0, s.jsxs)("div", {
                      className: sX.n_,
                      children: [
                          (0, s.jsx)(el.m, {
                              text: K.intl.string(sY.default.XJ4UpB),
                              children: (0, s.jsx)(ei.D, {
                                  className: sX.HF,
                                  onClick: h,
                                  children: (0, s.jsx)(sw.R, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                          (0, s.jsx)(el.m, {
                              text: K.intl.string(sY.default.XV4qT6),
                              children: (0, s.jsx)(ei.D, {
                                  className: sX.HF,
                                  onClick: A,
                                  children: (0, s.jsx)(sH.u, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function sJ(e) {
    let { channel: t } = e,
        n = (0, sK.dX)({ guildId: t.guild_id, channelId: t.id }),
        l = r.useCallback(() => {
            (0, sK.J_)({ guildId: t.guild_id, channelId: t.id }), (0, sW.A)({ channel: t });
        }, [t]);
    return (0, s.jsx)("div", {
        ref: n,
        className: sX._o,
        children: (0, s.jsxs)(ei.D, {
            className: sX.hH,
            onClick: l,
            children: [
                (0, s.jsx)(sB.X, { size: "xs", color: "currentColor" }),
                (0, s.jsx)(N.E, {
                    variant: "text-sm/medium",
                    color: "currentColor",
                    children: K.intl.string(sY.default.NGcIOF),
                }),
            ],
        }),
    });
}
function sZ(e) {
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
            ? (0, s.jsx)(sq, {
                  channel: t,
                  imageUrl: c.imageUrl,
                  animatedUrl: c.animatedUrl,
                  bannerHash: c.bannerHash,
                  canModifyHangout: a,
              })
            : a
              ? (0, s.jsx)(sJ, { channel: t })
              : null
        : null;
}
var s$ = n(290863),
    sQ = n(461213),
    s0 = n(532622),
    s1 = n(882840),
    s2 = n(208971),
    s3 = n(46054),
    s9 = n(500216),
    s7 = n(742715);
function s6(e) {
    let { channel: t, connected: n, hovered: l, subtitle: i, onClick: a } = e,
        o = (0, s2.G)((0, s1.l)(t)),
        { enableHangoutWindow: d } = (0, J.Dm)({ guildId: t.guild_id, location: "VoiceChannelStatus" }),
        c = d && (0, Z.lr)(t),
        u = null != o && o.length > 0,
        h = (0, s0.Ay)(t, !0),
        A = null != i && i.length > 0;
    if (
        (r.useEffect(() => {
            u && lc.default.track(F.HAw.VOICE_CHANNEL_TOPIC_VIEWED, { channel_id: t.id, guild_id: t.guild_id });
        }, [u, t.id, t.guild_id]),
        null == t.guild_id)
    )
        return null;
    let g = eE()(s9.Ui, n && h ? s9.BI : null);
    return u
        ? (0, s.jsx)(ei.D, {
              className: g,
              onClick: h ? a : void 0,
              children: (0, s.jsx)(N.E, {
                  variant: "text-xs/medium",
                  className: eE()(s9.qS, s7.PT),
                  children: (0, s.jsx)(tb.A, { children: s3.A.parseVoiceChannelStatus(o, !0, { channelId: t.id }) }),
              }),
          })
        : n && h && !c && (!A || l)
          ? (0, s.jsxs)(ei.D, {
                className: g,
                onClick: a,
                children: [
                    (0, s.jsx)(N.E, {
                        variant: "text-xs/medium",
                        className: s9.qS,
                        children: K.intl.string(K.t.Mgpxiw),
                    }),
                    (0, s.jsx)(sw.R, { color: "currentColor", className: s9.rD, size: "xxs" }),
                ],
            })
          : A
            ? (0, s.jsx)(tb.A, { children: i })
            : null;
}
class s5 extends nR {
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
        o && lB.A.updateChatOpen(n.id, !0),
            lf.A.handleVoiceConnect({
                channel: n,
                connected: t,
                needSubscriptionToAccess: i,
                routeDirectlyToChannel: o || a,
                locked: e,
                transitionExtras: r ? { source: l7.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
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
        return (0, na.Pd)(e, lx.A, tg.A);
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
        null != t && (0, lz.V)(t) && (0, lK.Ze)(t), this.handleVoiceConnect();
    };
    handleVoiceStatusClick = (e) => {
        let { connected: t, channel: n } = this.props;
        t && (e.stopPropagation(), (0, sD.A)({ channel: n }));
    };
    renderSubtitle() {
        let { channel: e, connected: t } = this.props,
            n = ij(this.props.subtitle)?.subtitle,
            { hovered: l } = this.state;
        return (0, s.jsx)(s6, {
            onClick: this.handleVoiceStatusClick,
            channel: e,
            connected: t,
            subtitle: n,
            hovered: l,
        });
    }
    renderVoiceUsers() {
        let { channel: e, voiceStates: t, collapsed: n, withGuildIcon: l, tabIndex: i } = this.props;
        return (0, s.jsx)(lU.A, {
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
        return !(null != n && n.length > 0) || l ? null : (0, s.jsx)(sZ, { channel: e, isConnected: t });
    }
    renderPopout = () => {
        let { channel: e } = this.props,
            { shouldShowGuildVerificationPopout: t } = this.state;
        return t
            ? (0, s.jsx)(l9, { type: l3.VOICE, guildId: e.guild_id, closePopout: this.closeGuildVerificationPopout })
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
                        lB.A.updateChatOpen(e.id, !0),
                            (0, l6.iN)(e.id, l ? { source: l7.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
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
                "data-dnd-name": (0, tQ.m1)(e, l0.default, ii.A),
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
                        children: (0, s.jsx)(lH.Y, {
                            targetElementRef: this.channelItemRef,
                            position: "right",
                            renderPopout: this.renderPopout,
                            onRequestClose: this.closeGuildVerificationPopout,
                            spacing: 17,
                            shouldShow: b,
                            children: () =>
                                (0, s.jsx)(el.m, {
                                    text: this.getTooltipText(),
                                    children: (0, s.jsxs)(nv.Ay, {
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
                                        "aria-label": (0, lF.Ay)({
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
                (R = (0, s.jsx)(t8.A, {
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
let s4 = t$((0, lk.F)(s5));
function s8(e) {
    let {
            guild: t,
            channel: n,
            disableSorting: l,
            isFavoriteCategory: i,
            selected: r,
            collapsed: a,
            voiceStates: o,
        } = e,
        d = (0, u.cf)([n1.Ay], () => ({ unread: n1.Ay.hasUnread(n.id), mentionCount: n1.Ay.getMentionCount(n.id) })),
        c = (0, u.bG)([tB.Ay], () => tB.Ay.resolveUnreadSetting(n)),
        h = (0, u.cf)([eZ.A, lQ.A, B.A], () => {
            let e = eZ.A.getChannel(n.parent_id),
                i = lQ.A.getCheck(n.guild_id);
            return {
                canManageChannel: B.A.can(F.xBc.MANAGE_CHANNELS, n),
                canReorderChannel:
                    !0 !== l &&
                    (t.id === no.Vc ||
                        (null != e ? B.A.can(F.xBc.MANAGE_CHANNELS, e) : B.A.can(F.xBc.MANAGE_CHANNELS, t))),
                canMoveMembers: B.A.can(F.xBc.MOVE_MEMBERS, n),
                locked: !B.A.can(F.xBc.CONNECT, n),
                bypassLimit: B.A.can(F.xBc.MOVE_MEMBERS, n),
                unverifiedAccount: !i.canChat,
            };
        }),
        A = (0, u.bG)([lx.A], () => lx.A.hasVideo(n.id)),
        { enabled: g } = sV.A.useExperiment({ guildId: t.id, location: "VoiceChannel" }),
        m = (0, is.Ay)(n),
        f = (0, u.yK)([sQ.A, s$.A, ie.default], () => {
            if (null == o || 0 === o.length) return [];
            let e = ie.default.getId(),
                t = [];
            for (let { user: l } of o)
                for (let i of l.id === e ? sQ.A.getActivities() : s$.A.getActivities(l.id, n.guild_id))
                    !(0, sT.N)(i) || (0, sU.A)(i) || null == i.name || t.includes(i.name) || t.push(i.name);
            return t;
        }, [o, n.guild_id]),
        p = (0, tQ.Ay)(n),
        C = (0, tf.Qs)(n.id),
        E = (0, u.bG)([sO.A], () => sO.A.getStartTime(n), [n]),
        { isSubscriptionGated: x, needSubscriptionToAccess: N } = (0, lp.A)(n.id),
        _ = (0, sP.A)(),
        S = (0, u.bG)([tB.Ay], () => tB.Ay.isFavorite(t.id, n.id)),
        I = e.connected || _?.channelId === n.id,
        { enableHighlight: b, enableWaveformIcon: G } = (0, ns.b)(t.id, "VoiceChannel"),
        R = null != o && o.length > 0,
        v = b && R,
        j = G && R,
        y = iC({
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
    return (0, s.jsx)(s4, {
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
var re = n(335993);
function rt(e) {
    return (
        h.A.modules.channels.NAME_LINE_HEIGHT.resolve({ density: e }) +
        2 * h.A.space.SPACE_XXS.resolve({ density: e }) +
        2
    );
}
class rn extends r.PureComponent {
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
                    a = s.threadOffset * rt(r);
                i.scrollIntoViewRect({ start: e + a, end: e + a + rt(r), padding: n, animate: t, callback: l });
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
            let { hasDivider: d, canHaveVoiceSummary: c } = nd(n, r, t),
                u = d ? (a ? 9 : 12) : 0;
            if (!c || t === tt.PU) return u;
            let h = n.getNamedCategoryFromSection(t);
            return null == h ||
                !(function (e) {
                    let { category: t, voiceStates: n, selectedChannelId: l, selectedVoiceChannelId: i } = e;
                    return (
                        (function (e) {
                            let { category: t, voiceStates: n, selectedChannelId: l, selectedVoiceChannelId: i } = e;
                            return !0 !== tw.A.isCollapsed(t.record.id)
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
            a = rt(r);
        if (e === tt.PU) {
            let e = n.getGuildActionSection();
            return e.isEmpty()
                ? 0
                : e.getRow(t) === tI.n.GUILD_PREMIUM_PROGRESS_BAR
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
            a += rt(t);
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
            nl,
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
                case tI.n.GUILD_HUB_HEADER_OPTIONS:
                    return (0, s.jsx)(
                        $.A,
                        { guild: l, channel: e8.Ay.getDefaultChannel(l.id) },
                        tI.n.GUILD_HUB_HEADER_OPTIONS,
                    );
                case tI.n.GUILD_PREMIUM_PROGRESS_BAR:
                    let i = e.getRows();
                    return (0, s.jsx)(eX, { guild: l, withMargin: i.length > 1 }, tI.n.GUILD_PREMIUM_PROGRESS_BAR);
                case tI.n.GUILD_SPACE:
                    return (0, s.jsx)(q, { guild: l, selected: a === X.VV.GUILD_SPACE }, tI.n.GUILD_SPACE);
                case tI.n.GUILD_HOME:
                    return (0, s.jsx)(n9, { guild: l, selected: a === X.VV.GUILD_HOME }, tI.n.GUILD_HOME);
                case tI.n.GUILD_SCHEDULED_EVENTS:
                    return (0, s.jsx)(
                        sj,
                        { guild: l, selected: a === tI.n.GUILD_SCHEDULED_EVENTS },
                        tI.n.GUILD_SCHEDULED_EVENTS,
                    );
                case tI.n.GUILD_ROLE_SUBSCRIPTIONS:
                    return (0, s.jsx)(
                        ll,
                        { guild: l, selected: a === X.VV.ROLE_SUBSCRIPTIONS },
                        tI.n.GUILD_ROLE_SUBSCRIPTIONS,
                    );
                case tI.n.GUILD_SHOP:
                    return (0, s.jsx)(lg, { guild: l, selected: a === X.VV.GUILD_SHOP }, tI.n.GUILD_SHOP);
                case tI.n.GUILD_GAME_SHOP:
                    return (0, s.jsx)(nq, { guild: l, selected: a === X.VV.GAME_SHOP }, tI.n.GUILD_GAME_SHOP);
                case tI.n.GUILD_VIBEGRATIONS:
                    return (0, s.jsx)(sL, { guild: l, selected: a === X.VV.VIBEGRATIONS }, tI.n.GUILD_VIBEGRATIONS);
                case tI.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
                    return (0, s.jsx)(n8, { guild: l });
                case tI.n.CHANNELS_AND_ROLES:
                    return (0, s.jsx)(
                        n2,
                        { guild: l, selected: a === X.VV.CHANNEL_BROWSER || a === X.VV.CUSTOMIZE_COMMUNITY },
                        tI.n.CHANNELS_AND_ROLES,
                    );
                case tI.n.GUILD_DIRECTORY:
                    return (0, s.jsx)(
                        ny,
                        { guild: l, selectedChannelId: a, disableManageChannels: h },
                        tI.n.GUILD_DIRECTORY,
                    );
                case tI.n.GUILD_MOD_DASH_MEMBER_SAFETY:
                    return (0, s.jsx)(
                        z,
                        { guild: l, selected: a === X.VV.MEMBER_SAFETY },
                        tI.n.GUILD_MOD_DASH_MEMBER_SAFETY,
                    );
                case tI.n.GUILD_BOOSTS:
                    return (0, s.jsx)(eL, { guildId: l.id, selected: a === X.VV.GUILD_BOOSTS }, tI.n.GUILD_BOOSTS);
                case tI.n.GAME_SERVERS:
                    return (0, s.jsx)(ep, { guildId: l.id, selected: a === X.VV.GAME_SERVERS }, tI.n.GAME_SERVERS);
                case tI.n.GAME_SERVERS_EMPTY:
                    return (0, s.jsx)(
                        eh,
                        { guildId: l.id, selected: a === X.VV.GAME_SERVERS },
                        tI.n.GAME_SERVERS_EMPTY,
                    );
                case tI.n.GUILD_OFFICIAL_MESSAGES:
                    return (0, s.jsx)(
                        lt,
                        { guild: l, selected: a === X.VV.GUILD_OFFICIAL_MESSAGES },
                        tI.n.GUILD_OFFICIAL_MESSAGES,
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
                                ? (0, s.jsx)(lw, {
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
                    i_,
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
                    s8,
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
                return (0, s.jsx)(ib, { channel: x, guild: l, position: C.position, selected: a === C.id }, N);
            case F.rbe.GUILD_CATEGORY:
                if (t !== c.voiceChannelsSectionNumber) return null;
                return (0, s.jsx)(t4, { channel: x }, `readonly-${x.id}`);
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
            nu,
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
                let { hasDivider: l, canHaveVoiceSummary: i } = nd(t, n, e);
                return `section-footer-${e}${l ? "-divider" : ""}${i ? "-voice-summary" : ""}`;
            })(t, n, o),
        );
    };
    renderTopUnread() {
        let { topMention: e, bottomUnread: t, bottomMention: n, isUnreadVisible: l } = this.state,
            { guildId: i, guildChannels: r, guildChannelsVersion: a } = this.props;
        return (0, s.jsx)("div", {
            className: nn.Eo,
            children: (0, s.jsx)(sR, {
                ref: this.unreadTopRef,
                textUnread: K.intl.string(K.t.FCRiT3),
                textMention: K.intl.string(K.t["8zH0LJ"]),
                hide: null == e && (l || null != t || null != n),
                className: nn.Vq,
                barClassName: nn.bu,
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
        return (0, s.jsx)(sR, {
            reverse: !0,
            ref: this.unreadBottomRef,
            textUnread: K.intl.string(K.t.FCRiT3),
            textMention: K.intl.string(K.t["8zH0LJ"]),
            hide: null == l && i,
            className: nn.di,
            barClassName: nn.bu,
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
                        className: nn.XG,
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
                                      className: nn.Eo,
                                      children: (0, s.jsx)(s_, {
                                          position: "top",
                                          guildChannels: e,
                                          guildChannelsVersion: t,
                                          jumpToVoiceChannels: this.jumpToVoiceChannels,
                                          jumpToChannel: this.jumpToChannel,
                                      }),
                                  }),
                                  this.renderList(),
                                  (0, s.jsx)(s_, {
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
let rl = (e) => {
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
                children: (0, s.jsx)(rn, {
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
function ri(e) {
    let { guildChannels: t, shouldShowEmptyState: n } = (0, tl.D)(),
        { density: l } = (0, C.wR)();
    return n
        ? (0, s.jsx)("div", {
              className: nn.XG,
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
                                  children: K.intl.string(re.default["1n0TGE"]),
                              }),
                              (0, s.jsx)(N.E, {
                                  variant: "text-sm/medium",
                                  color: "text-muted",
                                  children: K.intl.string(re.default.Wwzrs9),
                              }),
                          ],
                      }),
                      (0, s.jsx)("div", { className: nn.ts }),
                      (0, s.jsxs)("div", {
                          className: nn.MS,
                          "aria-hidden": "true",
                          children: [
                              (0, s.jsxs)("div", {
                                  className: nn.pS,
                                  children: [
                                      (0, s.jsx)(_.N, { size: "xs", color: h.A.colors.ICON_MUTED }),
                                      (0, s.jsx)("div", { className: nn.Qs }),
                                  ],
                              }),
                              (0, s.jsxs)("div", {
                                  className: nn.pS,
                                  children: [
                                      (0, s.jsx)(S.H, { size: "xs", color: h.A.colors.ICON_MUTED }),
                                      (0, s.jsx)("div", { className: nn.iR }),
                                  ],
                              }),
                              (0, s.jsxs)("div", {
                                  className: nn.pS,
                                  children: [
                                      (0, s.jsx)(I.o, { size: "xs", color: h.A.colors.ICON_MUTED }),
                                      (0, s.jsx)("div", { className: nn.Qs }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : (0, s.jsx)(rl, { ...e, guildChannels: t, guildChannelsVersion: 0, withGuildIcon: !1, density: l });
}
function rs(e) {
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
                h = (0, tS.QI)(e, "useGuildActionRows"),
                A = (0, th.A)(e.id),
                g = (0, tc.jY)(e.id),
                m = (0, to.fw)(e.id),
                f = (0, tp.U)(e, "useGuildActionRows"),
                p = [],
                C = e.features.has(F.GuildFeatures.HUB),
                E = e.features.has(F.GuildFeatures.COMMUNITY),
                x = e.features.has(F.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
                N = (0, ek.A)(e.id);
            tN.useConfig({ location: "useGuildActionRows" }).enabled;
            let _ = eK(e),
                S = (0, tC.bW)(e.id, "useGuildActionRows"),
                I = (0, tE.C$)(e.id, "useGuildActionRows"),
                b = e.features.has(F.GuildFeatures.GAME_SERVERS),
                G = (0, tx.N)("useGuildActionRows"),
                [R] = (0, ea.kn)(I && G && !b ? [L.M.EMPTY_GAME_SERVER_TAB] : [], void 0, !0);
            return (
                f && p.push(tI.n.GUILD_SPACE),
                C && p.push(tI.n.GUILD_HUB_HEADER_OPTIONS),
                !g && d && A && null != c && c.length > 0
                    ? p.push(tI.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR)
                    : e.premiumProgressBarEnabled && _ > 0 && p.push(tI.n.GUILD_PREMIUM_PROGRESS_BAR),
                !C && d && p.push(tI.n.GUILD_HOME),
                i && p.push(tI.n.GUILD_SCHEDULED_EVENTS),
                !C && E && p.push(tI.n.CHANNELS_AND_ROLES),
                r && p.push(tI.n.GUILD_ROLE_SUBSCRIPTIONS),
                a && p.push(tI.n.GUILD_SHOP),
                o && p.push(tI.n.GUILD_GAME_SHOP),
                ((m && (E || x)) || (s && e.features.has(F.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL))) &&
                    p.push(tI.n.GUILD_MOD_DASH_MEMBER_SAFETY),
                N && p.push(tI.n.GUILD_BOOSTS),
                S && p.push(tI.n.GUILD_OFFICIAL_MESSAGES),
                I && (b ? p.push(tI.n.GAME_SERVERS) : null != R && p.push(tI.n.GAME_SERVERS_EMPTY)),
                h && p.push(tI.n.GUILD_VIBEGRATIONS),
                p
            );
        })(e.guild),
        n = (0, u.cf)([tn.A], () => tn.A.getGuild(e.guildId, { guildActionRows: t })),
        { density: l } = (0, C.wR)();
    return (0, s.jsx)(rl, { ...e, ...n, density: l });
}
