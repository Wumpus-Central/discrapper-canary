n.d(t, { B: () => sJ, T: () => sZ }), n(321073);
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
    p = n(707554),
    f = n(140735),
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
    M = n(915089),
    y = n(5180),
    L = n(554146),
    T = n(177953),
    U = n(777666),
    D = n(533550),
    O = n(624458),
    P = n(844944),
    V = n(513461),
    w = n(663997),
    H = n(652793),
    B = n(576705),
    k = n(221950),
    F = n(652215),
    z = n(375708);
function K(e) {
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
            text: z.intl.string(z.t.oclz3Z),
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
        [i, a] = (0, el.ww)([L.M.GAME_SERVER_HOSTING_NEW_BADGE], t),
        o = i === L.M.GAME_SERVER_HOSTING_NEW_BADGE,
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
                        text: z.intl.string(z.t.fgq1gs),
                        position: "top",
                        children: (0, s.jsx)(ee.D, {
                            onClick: c,
                            "aria-label": z.intl.string(z.t.fgq1gs),
                            children: (0, s.jsx)(et.P, { size: "xs", color: "currentColor", className: ed.gE }),
                        }),
                    }),
                }),
                o &&
                    (0, s.jsx)("div", {
                        className: ed.yW,
                        children: (0, s.jsx)(U.Lp, {
                            disableColor: !0,
                            text: z.intl.string(z.t.y2b7CA),
                            className: eo.q,
                        }),
                    }),
            ],
        });
    return (0, s.jsx)(H.G, {
        className: ed.Ki,
        id: `game-server-empty-${t}`,
        renderIcon: (e) => (0, s.jsx)(en._, { size: "md", className: e, color: "currentColor" }),
        text: z.intl.string(ea.default.vCzwM7),
        selected: l,
        onClick: d,
        trailing: u,
    });
});
var eu = n(663066),
    eh = n(186111),
    eA = n(696943),
    eg = n(658809);
let em = r.memo(function (e) {
    let { guildId: t, selected: n } = e,
        l = (0, $.useHasAnyModalOpen)(),
        i = (0, u.bG)([eh.A], () => eh.A.hasLayers()),
        a = (0, eu.xr)((e) => e.fullScreenLayers.length > 0),
        [o, d] = (0, el.ww)([L.M.GAME_SERVER_HOSTING_NEW_BADGE], t),
        c = o === L.M.GAME_SERVER_HOSTING_NEW_BADGE,
        [h, A] = (0, el.ww)(l || i || a || !c ? [] : [L.M.GAME_SERVER_HOSTING_NEW_COACHMARK], t),
        g = r.useCallback(
            (e) => {
                d(e), A(e);
            },
            [d, A],
        ),
        m = r.useCallback(() => {
            g(er.i.USER_DISMISS), (0, ei.pX)(F.BVt.CHANNEL(t, es.VV.GAME_SERVERS));
        }, [t, g]),
        p = r.useRef(null),
        f = h === L.M.GAME_SERVER_HOSTING_NEW_COACHMARK,
        C = r.useCallback(() => (0, s.jsx)(eA.mn, { channelRowRef: p, guildId: t, markAsDismissed: g }), [t, g]);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(H.G, {
                ref: p,
                id: `game-server-${t}`,
                renderIcon: (e) => (0, s.jsx)(en._, { size: "md", className: e, color: "currentColor" }),
                text: z.intl.string(ea.default.vCzwM7),
                selected: n,
                onClick: m,
                trailing: c
                    ? (0, s.jsx)(U.Lp, { disableColor: !0, text: z.intl.string(z.t.y2b7CA), className: eg.q })
                    : null,
            }),
            f && C(),
        ],
    });
});
var ep = n(503698),
    ef = n.n(ep),
    eC = n(695366),
    eE = n(104510),
    ex = n(544048),
    eN = n(868652),
    e_ = n(379229),
    eS = n(842846),
    eI = n(828162),
    eb = n(853513),
    eG = n(738247);
function eR(e) {
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
let ev = { animation: { BEG: 0, END: 75 }, LOOP: { BEG: 76, END: 376 } },
    ej = r.memo(function (e) {
        let { guildId: t, selected: l } = e,
            i = (0, eS.Ay)(t),
            a = r.useCallback(() => {
                (0, eN.Zm)(t),
                    (0, eI.A)(t, v.A.GUILD_POWERUPS_CHANNEL_LIST_ROW),
                    i?.popout?.markAsDismissed(er.i.INDIRECT_ACTION);
            }, [t, i]),
            o = r.useRef(null),
            d = (0, $.useModalsStore)($.hasAnyModalOpenSelector),
            c = (0, u.bG)([eh.A], () => eh.A.hasLayers()),
            h = (0, eu.xr)((e) => e.fullScreenLayers.length > 0),
            A = d || c || h,
            g = r.useCallback(() => {
                if (i?.popout == null || A) return null;
                switch (i?.popout?.type) {
                    case e_.o.LEVEL_REACHED:
                        return (0, s.jsx)(eA.HW, { guildId: t, channelRowRef: o, ...i.popout });
                    case e_.o.PERKS_AVAILABLE:
                        return (0, s.jsx)(eA.UB, { guildId: t, channelRowRef: o, ...i.popout });
                    case e_.o.PERKS_PURCHASABLE:
                        return (0, s.jsx)(eA.lw, { guildId: t, channelRowRef: o, ...i.popout });
                    case e_.o.NEW_PERK_AVAILABLE:
                        return (0, s.jsx)(eA.bo, { guildId: t, channelRowRef: o, ...i.popout });
                    case e_.o.BOOST_TO_UNLOCK:
                        return (0, s.jsx)(eA.Gw, { guildId: t, channelRowRef: o, ...i.popout });
                    case e_.o.EXPIRING_PERK:
                        return (0, s.jsx)(eA.Mr, { guildId: t, channelRowRef: o, ...i.popout });
                    case e_.o.GAME_SERVER_HOSTING_AVAILABLE:
                    case e_.o.GAME_SERVER_HOSTING_GUILD_ELIGIBLE:
                        return (0, s.jsx)(eA.jz, { guildId: t, channelRowRef: o, ...i.popout });
                    case e_.o.GAME_SERVER_NEW_GAMES:
                        return (0, s.jsx)(eA.YX, { guildId: t, channelRowRef: o, ...i.popout });
                    case e_.o.GAME_SERVER_PRICING_CHANGE:
                        return (0, s.jsx)(eA.Ns, { guildId: t, channelRowRef: o, ...i.popout });
                    default:
                        return (0, s.jsx)("div", {});
                }
            }, [t, i?.popout, o, A]),
            [m, p] = r.useState(null);
        r.useEffect(() => {
            i?.popout == null && p(null);
        }, [i?.popout]);
        let f = r.useCallback((e) => {
            p(e);
        }, []);
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(H.G, {
                    ref: o,
                    className: eG.kL,
                    id: `skill-trees-${t}`,
                    renderIcon: (e) => (0, s.jsx)(eE._, { size: "md", className: e, color: "currentColor" }),
                    background:
                        i?.popout != null &&
                        (0, s.jsx)("div", {
                            className: eG.Fi,
                            children: (0, s.jsx)(ex.t, {
                                nextScene: null == m ? "animation" : "LOOP",
                                className: eG.UU,
                                sceneSegments: ev,
                                importData: () => n.e("67807").then(n.t.bind(n, 217762, 19)),
                                onScenePlay: f,
                                rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
                            }),
                        }),
                    text: (0, s.jsx)("span", {
                        className: ef()({ [eG.A7]: i?.showUnread === !0 }),
                        children: z.intl.string(eb.default.yv3DJJ),
                    }),
                    selected: l,
                    onClick: a,
                    showUnread: i?.showUnread === !0,
                    trailing: (0, s.jsx)(eR, { indicator: i?.indicator }),
                }),
                g(),
            ],
        });
    });
var eM = n(922139),
    ey = n(717421),
    eL = n(442433),
    eT = n(230135),
    eU = n(228366);
let eD = {};
class eO extends u.Ay.PersistedStore {
    static displayName = "GuildBoostingProgressBarPersistedStore";
    static persistKey = "PremiumGuildProgressBarPersistedStore";
    initialize(e) {
        null != e && (eD = e);
    }
    getState() {
        return eD;
    }
    getCountForGuild(e) {
        return eD[e];
    }
}
let eP = new eO(eU.h, {
    APPLIED_GUILD_BOOST_COUNT_UPDATE: (e) => {
        let { guildId: t, premiumCount: n } = e;
        eD = { ...eD, [t]: n };
    },
    APPLIED_GUILD_BOOST_COUNT_RESET: function () {
        eD = {};
    },
});
var eV = n(147925),
    ew = n(363487),
    eH = n(568065);
function eB(e) {
    return (0, r.useMemo)(() => {
        if (null == e) return 0;
        let t = e?.features.has(F.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) === !0 ? 0 : F.M2T[F.TVA.TIER_3],
            n = Object.values(eH.sy),
            l = Object.values(eH.YV);
        return (
            n.concat(l).forEach((n) => {
                null == n.includedInLevel && (n.isEnabled?.(e.id) ?? !0) && (t += n.boostPrice);
            }),
            t
        );
    }, [e]);
}
var ek = n(424460);
let eF = r.forwardRef((e, t) => {
    let { appliedBoostCount: n, maxBoostCount: l, premiumSubscriberCount: i, className: a } = e,
        o = n >= l,
        d = Math.min((n / l) * 100, 100),
        c = `calc(${d}% - 4px)`,
        [u, h] = (0, ey.z)(
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
            className: ek.hQ,
            children: [
                (0, s.jsx)("div", { className: ef()(ek.L$, a) }),
                (0, s.jsx)(eM.animated.div, { className: ef()(ek.qB, { [ek.mu]: d <= 5 }), style: u }),
                (0, s.jsxs)("div", {
                    className: ek.FS,
                    children: [
                        (0, s.jsxs)("div", {
                            className: ek.Ui,
                            children: [
                                (0, s.jsx)(N.E, {
                                    className: ek.Qq,
                                    variant: "text-xs/semibold",
                                    children: z.intl.string(eb.default.NI6Ihe),
                                }),
                                i >= l &&
                                    (0, s.jsx)(N.E, {
                                        className: ek.Qq,
                                        variant: "text-xs/semibold",
                                        children: "\uD83C\uDF89",
                                    }),
                            ],
                        }),
                        (0, s.jsxs)("div", {
                            className: ek.Ui,
                            children: [
                                (0, s.jsx)(N.E, {
                                    className: ef()(ek.Qq, ek.ue),
                                    variant: "text-xs/semibold",
                                    children: o
                                        ? z.intl.formatToPlainString(eb.default["Ehpq+7"], { appliedBoostCount: n })
                                        : z.intl.formatToPlainString(eb.default["/rbPDs"], {
                                              appliedBoostCount: n,
                                              maxBoostCount: l,
                                          }),
                                }),
                                (0, s.jsx)(eV.A, {
                                    width: 12,
                                    height: 12,
                                    direction: eV.A.Directions.RIGHT,
                                    className: ef()(ek.Qq, ek.ue),
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
        i = eB(t),
        a = (0, ew.A)(t.id),
        o = r.useCallback(() => {
            (0, eI.A)(t.id, v.A.GUILD_BOOSTING_SIDEBAR_DISPLAY);
        }, [t.id]),
        d = (0, u.bG)([eP], () => eP.getCountForGuild(t.id) ?? 0);
    r.useEffect(() => {
        d !== t.premiumSubscriberCount && (0, eT.u)(t.id, t.premiumSubscriberCount);
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
        className: ef()(ek.kL, { [ek.aF]: l }),
        onContextMenu: c,
        children: (0, s.jsx)(eF, {
            appliedBoostCount: d,
            maxBoostCount: i,
            premiumSubscriberCount: t.premiumSubscriberCount,
        }),
    });
}
function eK(e) {
    let { guild: t, withMargin: n } = e;
    return (0, s.jsx)(ez, { guild: t, withMargin: n });
}
eF.displayName = "GuildPowerupsProgressBarUI";
var eW = n(455234),
    eY = n(181079),
    eq = n(734057),
    eX = n(607567),
    eZ = n(403362),
    eJ = n(996439),
    e$ = n(935208),
    eQ = n(63995),
    e0 = n(518769);
function e1(e) {
    let { voiceState: t, userNick: n, user: l } = e,
        i = (0, eX.hz)(t, n);
    return { user: l, voiceState: t, nick: n, comparator: i };
}
var e3 = n(787541),
    e2 = n(79858),
    e9 = n(95701),
    e5 = n(72314),
    e7 = n(808728),
    e6 = n(967198),
    e4 = n(297469),
    e8 = n(960755),
    te = n(866842),
    tt = n(633965),
    tn = n(702841),
    tl = n(41200),
    ti = n(496767),
    ts = n(134413),
    tr = n(701785),
    ta = n(101611),
    to = n(473529),
    td = n(978165),
    tc = n(960253),
    tu = n(71393),
    th = n(770666),
    tA = n(508654),
    tg = n(521427),
    tm = n(488803),
    tp = n(969117);
let tf = (0, n(945810).mj)({
    name: "2026-04-mobile-boost-progress-bar",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var tC = n(871123),
    tE = n(281405),
    tx = n(780645),
    tN = n(821609),
    t_ = n(187322),
    tS = n(847374),
    tI = n(499373),
    tb = n(285796),
    tG = n(914430),
    tR = n(913247),
    tv = n(22174),
    tj = n(66834),
    tM = n(999903),
    ty = n(544169),
    tL = n(422258),
    tT = n(770376),
    tU = n(924985),
    tD = n(769765),
    tO = n(543465);
n(667532);
var tP = n(111613);
function tV(e, t) {
    return null != e && null != t && (e === t || ((0, e9.tr)(e) && (0, e9.tr)(t)) || ((0, e9.ay)(e) && (0, e9.ay)(t)));
}
function tw(e, t, n, l) {
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
        if (tV(e.channel.type, n)) return e;
    }
    return null;
}
function tH(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (null == e) return 0;
    let l = null;
    return (
        t
            .filter((t) => {
                let {
                    channel: { type: l },
                } = t;
                return null != e && (n || tV(e.type, l));
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
function tB(e) {
    return { referenceId: e.id, parentId: e.parent_id };
}
function tk(e, t, n, l, i) {
    if (null == e || null == n) return null;
    let { GUILD_CATEGORY: s } = F.rbe;
    if (e.type === s)
        return l === t || (l < t && e.type === n.type)
            ? tB(n)
            : l > t
              ? (function (e, t, n) {
                    let { GUILD_CATEGORY: l } = F.rbe,
                        i = n[(tH(t, n, !0) ?? 0) + 1],
                        s = tw(-1, t.id, e.type, n);
                    return null == s || s.channel.id === e.id
                        ? null
                        : null == i || i.channel.type === l
                          ? { referenceId: s.channel.id, parentId: null }
                          : null;
                })(e, n, i)
              : null;
    if (tV(e.type, n.type)) return tB(n);
    if (l < t) {
        let t, l;
        if (n.type === s) {
            let t = i[(tH(n, i, !0) ?? 0) - 1],
                l = tw(1, n.id, e.type, i);
            if (null == t) return { referenceId: null, parentId: null };
            if (null != l) {
                if (tV(t.channel.type, e.type) || (e.isGuildVocal() && (0, e9.tr)(t.channel.type)))
                    return { referenceId: l.channel.id, parentId: t.channel.parent_id };
                if (t.channel.isCategory()) return { referenceId: l.channel.id, parentId: t.channel.id };
            }
            return null;
        }
        return (
            (t = i[(tH(n, i, !0) ?? 0) - 1]),
            (l = tw(1, n.id, e.type, i)),
            null != t || e.isGuildVocal()
                ? (0, e9.tr)(e.type) && null != l && ((0, e9.tr)(t.channel.type) || t.channel.isCategory())
                    ? { referenceId: l.channel.id, parentId: n.parent_id }
                    : null
                : { referenceId: null != l ? l.channel.id : null, parentId: null }
        );
    }
    if (n.type === s) {
        let t = i[(tH(n, i, !0) ?? 0) + 1],
            l = tw(-1, n.id, e.type, i);
        if (null != l) {
            if (null == t) return { referenceId: l.channel.id, parentId: n.id };
            if (tV(t.channel.type, e.type) || ((0, e9.tr)(e.type) && t.channel.isGuildVocal()))
                return { referenceId: l.channel.id, parentId: t.channel.parent_id };
            if (t.channel.isCategory()) return { referenceId: l.channel.id, parentId: n.id };
        }
        return null;
    }
    let r = i[(tH(n, i, !0) ?? 0) + 1],
        a = tw(-1, n.id, e.type, i);
    if (null == a) return null;
    if (e.isGuildVocal()) {
        if (null == r || r.channel.isCategory()) return { referenceId: a.channel.id, parentId: n.parent_id };
        if (r.channel.isGuildVocal()) return { referenceId: a.channel.id, parentId: r.channel.parent_id };
    }
    return e.isCategory() && (null == r || r.channel.isCategory())
        ? { referenceId: a.channel.id, parentId: null }
        : null;
}
var tF = n(488926);
let tz = "DRAGGABLE_GUILD_CHANNEL";
function tK(e, t) {
    if (null == e || null == t) return null;
    if (!(0, y.ai)(e)) return eq.A.getChannel(t);
    let n = e7.Ay.getChannels(e),
        l =
            n[e7.I6].find((e) => e.channel.id === t) ??
            n[e7.vM].find((e) => e.channel.id === t) ??
            n[F.rbe.GUILD_CATEGORY].find((e) => e.channel.id === t);
    return l?.channel;
}
function tW(e, t) {
    if (null != e.parent_id) {
        let t = eq.A.getChannel(e.parent_id);
        if (null != t) return B.A.can(F.xBc.MANAGE_CHANNELS, t);
    }
    return B.A.can(F.xBc.MANAGE_CHANNELS, t);
}
function tY(e) {
    return (0, tR.T)(
        tz,
        {
            drop(e, t) {
                let n,
                    l = e6.A.getGuildId(),
                    i = t.getItem(),
                    r = tk(tK(l, i.id), i.position, e.channel, e.position, i.channelList);
                if (null == r) return;
                let a = tK(l, i.id);
                if (null == a) return;
                let o = tD.A.getCategories(l),
                    d = tu.A.getGuild(l);
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
                                        : tP.Ay.moveItemFromTo(t, i, s)),
                                (r = r.concat(
                                    tP.Ay.calculatePositionDeltas({
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
                        (i = tH(e, n)), (s = tH(t, n)), (a = d(n)).unshift(o[0]);
                    }
                    if ((0, e9.tr)(e.type) || e.isCategory()) {
                        let n = (0, tM.A)(a.length > 0 ? a : o, l, (e) => {
                            let {
                                channel: { type: t },
                            } = e;
                            return (0, e9.tr)(t);
                        });
                        (i = tH(e, n)), (s = tH(t, n)), d(n);
                    }
                    if (e.isGuildVocal() || e.isCategory()) {
                        let n = (0, tM.A)(a.length > 0 ? a : o, l, (e) => {
                            let { channel: t } = e;
                            return t.isGuildVocal();
                        });
                        (i = tH(e, n)), (s = tH(t, n)), d(n);
                    }
                    return (
                        e.parent_id !== n &&
                            null == r.find((t) => t.id === e.id && ((t.parent_id = n), !0)) &&
                            r.push({ id: e.id, parent_id: n }),
                        r
                    );
                })(a, tK(l, r.referenceId), r.parentId, o);
                if (0 !== c.length) {
                    if ((0, y.ai)(l)) return void (0, tL.zN)(c);
                    if (
                        ((c = c.filter((e) => {
                            let { id: t } = e,
                                n = eq.A.getChannel(t);
                            if (null == n) return !1;
                            let l = eq.A.getChannel(n.parent_id);
                            return n.type === F.rbe.GUILD_CATEGORY || null == l
                                ? B.A.can(F.xBc.MANAGE_CHANNELS, d)
                                : B.A.can(F.xBc.MANAGE_CHANNELS, l);
                        })),
                        a.parent_id !== r.parentId &&
                            c.find((e) => {
                                if (e.id !== a.id) return !1;
                                let t = eq.A.getChannel(e.parent_id);
                                if (!(null != t && B.A.can(F.xBc.MANAGE_ROLES, a) && B.A.can(F.xBc.MANAGE_ROLES, t)))
                                    return !0;
                                let l = tF.r(a, t),
                                    i = tF.r(a, eq.A.getChannel(a.parent_id));
                                return ((null != a.parent_id || l) && (!i || l)) || (n = e), !0;
                            }),
                        null != n)
                    ) {
                        let e = eq.A.getChannel(n.parent_id);
                        null != e &&
                            (0, $.openModal)((t) =>
                                (0, s.jsx)(ty.default, {
                                    ...t,
                                    channel: a,
                                    category: e,
                                    onConfirm: () => {
                                        null != n && ((n.lock_permissions = !0), tj.A.batchChannelUpdate(l, c));
                                    },
                                    onCancel: () => {
                                        null != n && tj.A.batchChannelUpdate(l, c);
                                    },
                                }),
                            );
                    } else tj.A.batchChannelUpdate(l, c);
                }
            },
            canDrop(e, t) {
                let n = t.getItem(),
                    l = eq.A.getChannel(n.id);
                if (null == l) return !1;
                let i = tk(eq.A.getChannel(n.id), n.position, e.channel, e.position, n.channelList);
                if (null == i) return !1;
                if ((0, y.ai)(e6.A.getGuildId())) return !0;
                if (tO.Ay.isFavorite(n.guildId, e.channel.id)) return !1;
                let s = tu.A.getGuild(n.guildId);
                if (null == s) return !1;
                let r = eq.A.getChannel(i.parentId),
                    a = eq.A.getChannel(l.parent_id),
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
        (0, tv.I)(
            tz,
            {
                canDrag(e) {
                    let { channel: t } = e;
                    if ((0, y.ai)(e6.A.getGuildId())) return !0;
                    let l = tu.A.getGuild(t.getGuildId());
                    return (
                        null != l &&
                        ((0, J.WW)(l.id) && tW(t, l)
                            ? ((0, tT.A)() &&
                                  (0, $.openModalLazy)(async () => {
                                      let { default: e } = await Promise.all([n.e("57729"), n.e("24848")]).then(
                                          n.bind(n, 354643),
                                      );
                                      return (t) => (0, s.jsx)(e, { ...t });
                                  }),
                              !1)
                            : tO.Ay.isFavorite(l.id, t.id) && tW(t, l)
                              ? ((0, $.openModalLazy)(async () => {
                                    let { default: e } = await n.e("80545").then(n.bind(n, 933752));
                                    return (n) => (0, s.jsx)(e, { ...n, guildId: l.id, channelId: t.id });
                                }),
                                !1)
                              : tW(t, l))
                    );
                },
                beginDrag(e) {
                    let {
                            channel: { id: t, parent_id: n, guild_id: l, type: i },
                            position: s,
                        } = e,
                        r = e6.A.getGuildId(),
                        a = tD.A.getCategories(r);
                    return {
                        isChannelDrag: !0,
                        id: t,
                        position: s,
                        parentId: n,
                        type: i,
                        channelList: (0, tM.A)(a._categories, a, (e) => {
                            let { channel: t } = e;
                            return t.type === F.rbe.GUILD_CATEGORY && null != a[t.id] && 0 === a[t.id].length
                                ? !!(0, y.ai)(r) ||
                                      (B.A.can(F.xBc.MANAGE_CHANNELS, t) && B.A.can(F.xBc.VIEW_CHANNEL, t))
                                : !tU.A.isCollapsed(t.parent_id);
                        }),
                        guildId: l,
                    };
                },
            },
            (e) => ({ connectChannelDragSource: e.dragSource(), connectDragPreview: e.dragPreview() }),
        )(e),
    );
}
var tq = n(47167),
    tX = n(485947),
    tZ = n(551851),
    tJ = n(546980);
function t$(e) {
    e.stopPropagation();
}
let tQ = tY(
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
                m = (0, u.bG)([tO.Ay], () => tO.Ay.isChannelMuted(l.getGuildId(), l.id)),
                p = (0, u.bG)([tU.A], () => tU.A.isCollapsed(l.id)),
                f = (0, u.bG)([B.A], () => B.A.can(F.xBc.MANAGE_CHANNELS, l)),
                C = (0, tq.Ay)(l);
            t = null != h ? (c > h ? tJ.mU : tJ.TR) : tJ.fx;
            let E = r.useCallback(() => {
                    p ? (0, tG.fh)(l.id) : (0, tG.Gv)(l.id);
                }, [l.id, p]),
                x = r.useCallback(
                    (e) => {
                        if ("null" !== l.id) {
                            let t = tu.A.getGuild(l.getGuildId());
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
                                n.e("58735"),
                                n.e("11585"),
                                n.e("3589"),
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
                        (0, s.jsx)(t_.vN, {
                            focusTarget: b,
                            ringTarget: G,
                            offset: { left: 4, right: 4 },
                            children: (0, s.jsxs)("div", {
                                ref: G,
                                className: ef()(tJ.Ki, tJ.iE, { [tJ.yZ]: p, [tJ.SU]: m, [tJ.vk]: !0 }),
                                onContextMenu: x,
                                children: [
                                    (0, s.jsxs)(ee.D, {
                                        innerRef: b,
                                        className: tJ.rb,
                                        tabIndex: S,
                                        ...I,
                                        onClick: E,
                                        "aria-label": z.intl.formatToPlainString(z.t.y5l3J2, { categoryName: C }),
                                        "aria-expanded": !p,
                                        focusProps: { enabled: !1 },
                                        children: [
                                            (0, s.jsx)(tX.A, {
                                                className: tJ.UU,
                                                children: (0, s.jsx)(tx.A, { children: C }),
                                            }),
                                            A
                                                ? null
                                                : (0, s.jsx)(tS.a, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: tJ.Kk,
                                                  }),
                                        ],
                                    }),
                                    (0, s.jsx)("div", {
                                        onClick: t$,
                                        className: tJ.Y_,
                                        children:
                                            f && !o
                                                ? (0, s.jsx)(Q.m, {
                                                      text: z.intl.string(z.t["fUYU+j"]),
                                                      children: (0, s.jsx)(ee.D, {
                                                          className: ef()(tJ.c9, tJ.ih),
                                                          onClick: N,
                                                          tabIndex: S,
                                                          role: "button",
                                                          "aria-label": z.intl.string(z.t["fUYU+j"]),
                                                          children: (0, s.jsx)(tI.T, {
                                                              size: "xs",
                                                              color: "currentColor",
                                                              className: tJ.hs,
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
    t0 = r.memo(function (e) {
        let { name: t, onDismiss: n, className: l } = e;
        return (0, s.jsx)("li", {
            className: ef()(l, tJ.fx),
            children: (0, s.jsxs)("div", {
                className: ef()(tJ.Ki, tJ._V),
                children: [
                    (0, s.jsx)("div", {
                        className: tJ.rb,
                        children: (0, s.jsx)(tX.A, { className: tJ.UU, children: (0, s.jsx)(tx.A, { children: t }) }),
                    }),
                    null != n
                        ? (0, s.jsx)(Q.m, {
                              asContainer: !0,
                              text: z.intl.string(z.t["5qNmsU"]),
                              children: (0, s.jsx)(ee.D, {
                                  className: tJ.r,
                                  onClick: n,
                                  children: (0, s.jsx)(tb.a, { size: "md", color: "currentColor", className: tJ.X8 }),
                              }),
                          })
                        : null,
                ],
            }),
        });
    }),
    t1 = r.memo(function (e) {
        let { category: t } = e,
            n = (0, u.bG)([tZ.A], () => tZ.A.isVoiceCategoryCollapsed(t.guild.id)),
            l = r.useCallback(() => {
                var e, l;
                n
                    ? ((e = t.guild.id), eU.h.dispatch({ type: "VOICE_CATEGORY_EXPAND", guildId: e, expand: !0 }))
                    : ((l = t.guild.id), eU.h.dispatch({ type: "VOICE_CATEGORY_COLLAPSE", guildId: l, expand: !1 }));
            }, [t.guild.id, n]);
        return (0, s.jsx)("div", {
            className: tJ.oA,
            children: (0, s.jsx)(tN.$, {
                variant: "secondary",
                fullWidth: !0,
                onClick: l,
                icon: S.H,
                text: n ? z.intl.string(z.t["/eB9Bg"]) : z.intl.string(z.t.Q2gPWl),
            }),
        });
    }),
    t3 = r.memo(function (e) {
        let { category: t, channel: n } = e,
            l = (0, u.bG)([tZ.A], () => tZ.A.isVoiceCategoryCollapsed(t.guild.id));
        return l || null == n || n.record.type === F.rbe.GUILD_CATEGORY
            ? l
                ? (0, s.jsx)("li", {
                      className: tJ.fx,
                      children: (0, s.jsx)("div", {
                          className: ef()(tJ.Ki, tJ._V),
                          children: (0, s.jsx)(tX.A, {
                              className: tJ.UU,
                              children: (0, s.jsx)(tx.A, { children: z.intl.string(z.t["V/u9Dy"]) }),
                          }),
                      }),
                  })
                : null
            : (0, s.jsx)("div", { style: { height: 16 } });
    }),
    t2 = r.memo(function (e) {
        let { channel: t } = e,
            n = (0, tq.Ay)(t);
        return (0, s.jsx)("li", {
            className: tJ.fx,
            children: (0, s.jsx)("div", {
                className: ef()(tJ.Ki, tJ._V),
                children: (0, s.jsx)(tX.A, { className: tJ.UU, children: (0, s.jsx)(tx.A, { children: n }) }),
            }),
        });
    });
var t9 = n(728321),
    t5 = n(244083);
let t7 = { origin: { x: -36, y: 7 }, targetWidth: 232, targetHeight: 40, offset: { x: 0, y: 0 } };
var t6 = n(121880);
let t4 = r.memo(function (e) {
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
        case e4.PU:
            return (0, s.jsx)("div", { style: { height: u } });
        case e4.bK:
            if (n.features.has(F.GuildFeatures.HUB)) return null;
            return (0, s.jsx)("div", { style: { height: u } });
        case e4.HP:
            return (0, s.jsx)(t0, { name: z.intl.string(z.t.mlPMCy) });
        case l.recentsSectionNumber:
            return (0, s.jsx)(t0, { name: z.intl.string(z.t.gKcrqM), onDismiss: d });
        case l.voiceChannelsSectionNumber: {
            let e = l.getCategoryFromSection(l.voiceChannelsSectionNumber);
            if (null == e || e.isEmpty()) return null;
            let n = l.getChannelFromSectionRow(t, 0)?.channel;
            return (0, s.jsxs)(r.Fragment, {
                children: [(0, s.jsx)("div", { className: t6.ts }), (0, s.jsx)(t3, { category: e, channel: n })],
            });
        }
        case e4.TF: {
            let e = l.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, s.jsx)(tQ, {
                channel: e.record,
                position: e.position,
                disableManageChannels: o,
                children: (0, s.jsx)(t9.A, {
                    inlineSpecs: t7,
                    arrowAlignment: t5.oN.TOP,
                    tutorialId: "organize-by-topic",
                    position: "right",
                }),
            });
        }
        default: {
            let e = l.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, s.jsx)(tQ, { channel: e.record, position: e.position, disableManageChannels: o });
        }
    }
});
var t8 = n(104171),
    ne = n(186369),
    nt = n(970812),
    nn = n(871237),
    nl = n(349828);
function ni(e, t, n) {
    return {
        hasDivider:
            !(function (e, t) {
                if (t === e4.PU) {
                    let t = e.getGuildActionSection().getRows();
                    return (
                        (1 === t.length && t[0] === tE.n.GUILD_PREMIUM_PROGRESS_BAR) ||
                        e.getGuildActionSection().isEmpty()
                    );
                }
                return 0 === e.getSections(!1)[t];
            })(e, n) &&
            (n === e4.PU ||
                (e.id === nl.Vc
                    ? n !== e.getSections(!1).length - 1
                    : n === e4.HP ||
                      (!!t && n !== e4.bK && (n === e.recentsSectionNumber || (e.voiceChannelsSectionNumber, !1))))),
        canHaveVoiceSummary:
            n !== e4.PU &&
            n !== e4.HP &&
            n !== e4.bK &&
            n !== e.recentsSectionNumber &&
            n !== e.voiceChannelsSectionNumber,
    };
}
let ns = r.memo(function (e) {
        let { guildChannels: t, guildChannelsVersion: n } = e,
            l = r.useMemo(() => t.getCategoryFromSection(t.voiceChannelsSectionNumber), [t, n]);
        return null == l ? null : (0, s.jsx)(t1, { category: l });
    }),
    nr = r.memo(function (e) {
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
            { hasDivider: h, canHaveVoiceSummary: A } = r.useMemo(() => ni(n, c, t), [n, c, t, l]),
            g = r.useMemo(() => (t === e4.PU ? null : n.getCategoryFromSection(t)), [n, t, l]),
            m = (0, J.jN)(a),
            { enableWaveformIcon: p } = (0, ne.b)(a, "ChannelListSectionFooter"),
            f = (0, u.yK)([tO.Ay], () => {
                if (null == g || !g.isCollapsed || !A) return [];
                let e = g.getChannelRecords(),
                    t = [];
                for (let n of e) {
                    if (!n.isGuildVocal()) continue;
                    let e = tO.Ay.isChannelOrParentOptedIn(a, n.id);
                    (!m || e) && t.push(n);
                }
                return t;
            }, [g, A, a, m]),
            C = r.useMemo(
                () => (0, nn.fK)({ channels: f, selectedChannelId: o, selectedVoiceChannelId: d, voiceStates: i }),
                [f, o, d, i],
            );
        if (t === n.voiceChannelsSectionNumber) return (0, s.jsx)(ns, { guildChannels: n, guildChannelsVersion: l });
        let E = h ? (0, s.jsx)("div", { className: t6.ts }) : null;
        return A && 0 !== C.length
            ? (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsx)("div", {
                          className: t6.qz,
                          children: (0, s.jsx)(t8.Ay, {
                              renderIcon: !0,
                              users: C,
                              max: 8,
                              showUserPopout: !0,
                              guildId: a,
                              renderLeadingIcon: p
                                  ? (e) => (0, s.jsx)(nt.A, { color: "currentColor", className: ef()(e, ed.Gj) })
                                  : void 0,
                          }),
                      }),
                      E,
                  ],
              })
            : E;
    });
var na = n(625903),
    no = n(283973),
    nd = n(933832),
    nc = n(435183),
    nu = n(698441),
    nh = n(855687),
    nA = n(816662),
    ng = n(446600),
    nm = n(616356);
function np(e, t, n) {
    return null != t && !!t && !tV(n, e.type);
}
function nf(e, t) {
    return null == t ? ed.fx : e > t ? ed.mU : ed.TR;
}
function nC(e) {
    let { channel: t, disableManageChannels: n, tabIndex: l, forceShowButtons: i, hasChannelInfo: r = !1 } = e;
    return (0, u.bG)(
        [B.A, e6.A],
        () =>
            n ||
            (0, y.ai)(e6.A.getGuildId()) ||
            (!B.A.can(F.xBc.MANAGE_CHANNELS, t) &&
                !B.A.can(F.xBc.MANAGE_ROLES, t) &&
                !B.A.can(F.xBc.MANAGE_WEBHOOKS, t)) ||
            ((0, e9.tr)(t.type) && !B.A.can(F.xBc.VIEW_CHANNEL, t)) ||
            (t.isGuildVocal() && !B.A.can(F.xBc.CONNECT, t)) ||
            !e9.bk.has(t.type) ||
            t.isModeratorReportChannel(),
    )
        ? null
        : (0, s.jsx)(Q.m, {
              asContainer: !0,
              text: z.intl.string(z.t["3gUsJb"]),
              children: (0, s.jsx)(ee.D, {
                  className: ef()(ed.Xs, i ? ed.Tf : void 0, r ? ed.bw : ed.UI),
                  onClick: function () {
                      nc.Ay.open(t.id);
                  },
                  tabIndex: l,
                  "aria-label": z.intl.string(z.t["3gUsJb"]),
                  children: (0, s.jsx)(na.Z, { size: "xs", color: "currentColor", className: ed.gE }),
              }),
          });
}
function nE(e) {
    let {
            channel: t,
            isDefaultChannel: l = !1,
            locked: i,
            tabIndex: a,
            forceShowButtons: o,
            hasChannelInfo: d = !1,
        } = e,
        c = (0, u.bG)([tu.A], () => tu.A.getGuild(t.getGuildId())),
        h = (0, u.bG)([ng.A], () => ng.A.getStageInstanceByChannel(t.id), [t.id]),
        A = (0, u.bG)([nu.Ay], () => nu.Ay.getActiveEventByChannel(t.id), [t.id]),
        g = (0, u.bG)([B.A], () => (0, nh.K)(B.A, c, t, h)),
        m = (0, u.bG)([], () =>
            t?.type === F.rbe.GUILD_VOICE ? z.intl.string(z.t["EE+P0H"]) : z.intl.string(z.t["0jeAXt"]),
        ),
        p = r.useRef(null);
    if (i || !g || t.isModeratorReportChannel() || t.isThread()) return null;
    let f = (0, s.jsx)(no.R, { size: "xs", className: ed.gE, "aria-hidden": !0, color: "currentColor" });
    return (
        l &&
            (f = (0, s.jsx)(t9.A, {
                childRef: p,
                tutorialId: "instant-invite",
                position: "left",
                children: (0, s.jsx)("div", { ref: p, children: f }),
            })),
        (0, s.jsx)(Q.m, {
            asContainer: !0,
            text: m,
            children: (0, s.jsx)(ee.D, {
                className: ef()(ed.Xs, o ? ed.Tf : void 0, d ? ed.bw : ed.UI),
                onClick: function () {
                    if (null != c) {
                        let e = nm.A.getAllActiveStreams().filter(
                            (e) => e.state !== F.XYD.ENDED && e.channelId === t.id,
                        );
                        (0, $.openModalLazy)(async () => {
                            let { default: l } = await Promise.all([
                                n.e("63434"),
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
                children: f,
            }),
        })
    );
}
function nx(e) {
    let { channel: t } = e;
    return (0, s.jsx)(Q.m, {
        asContainer: !0,
        text: z.intl.string(z.t["ROh4T+"]),
        children: (0, s.jsx)(ee.D, {
            className: ed.Xs,
            onClick: () => {
                (0, nA.Ol)(t.guild_id, t.id);
            },
            "aria-label": z.intl.string(z.t["ROh4T+"]),
            children: (0, s.jsx)(et.P, { size: "xs", color: "currentColor", className: ed.gE }),
        }),
    });
}
function nN(e) {
    let { channel: t } = e;
    return (0, s.jsx)(Q.m, {
        asContainer: !0,
        text: z.intl.string(z.t["N2c/Un"]),
        children: (0, s.jsx)(ee.D, {
            className: ed.Xs,
            onClick: () => {
                (0, nA.jA)(t.guild_id, t.id, !0, { section: F.JJy.CHANNEL_LIST });
            },
            "aria-label": z.intl.string(z.t["N2c/Un"]),
            children: (0, s.jsx)(nd.A, { size: "xs", color: "currentColor", className: ed.gE }),
        }),
    });
}
class n_ extends r.PureComponent {
    static defaultProps = { isDefaultChannel: !1 };
    renderEditButton() {
        return (0, s.jsx)(nC, { ...this.props });
    }
    renderInviteButton() {
        return (0, s.jsx)(nE, { ...this.props });
    }
    renderRemoveSuggestionButton() {
        return (0, s.jsx)(nx, { ...this.props });
    }
    renderAcceptSuggestionButton() {
        return (0, s.jsx)(nN, { ...this.props });
    }
    getClassName() {
        let { position: e, sortingPosition: t } = this.props;
        return nf(e, t);
    }
    isDisabled() {
        let { channel: e, sorting: t, sortingType: n } = this.props;
        return np(e, t, n);
    }
}
var nS = n(166444),
    nI = n(790782);
let nb = tY(function (e) {
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
        m = (0, u.bG)([eq.A, e7.Ay], () => {
            let e = e7.Ay.getDirectoryChannelIds(t.id);
            return 0 === e.length ? null : eq.A.getChannel(e[0]);
        }),
        p = (0, u.bG)([eq.A], () => eq.A.getChannel(m?.parent_id)),
        f = l === m?.id,
        C = (0, tq.Ay)(m),
        E = (0, u.bG)([B.A], () =>
            null != p ? B.A.can(F.xBc.MANAGE_CHANNELS, p) : null != t && B.A.can(F.xBc.MANAGE_CHANNELS, t),
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
    let N = nf(i, c),
        _ = np(m, o, d),
        S = (0, s.jsx)("div", {
            className: ef()(N, { [ed.r9]: _, [ed.wH]: f }),
            "data-dnd-name": C,
            children: (0, s.jsxs)(nS.Ay, {
                className: ed.Ki,
                channel: m,
                guild: t,
                selected: f,
                onContextMenu: x,
                forceInteractable: !0,
                resolvedUnreadSetting: nI.e.ONLY_MENTIONS,
                children: [
                    (0, s.jsx)(nE, { channel: m, tabIndex: g }),
                    (0, s.jsx)(nC, { channel: m, disableManageChannels: a, tabIndex: g }),
                ],
            }),
        });
    return E && (S = A(h(S))), S;
});
var nG = n(34188),
    nR = n(733391),
    nv = n(832163),
    nj = n(44724),
    nM = n(43105),
    ny = n(486318),
    nL = n(469611);
function nT(e) {
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
                return (0, ny.e)({
                    imageUrl: u.imageUrl,
                    backgroundImageUrl: u.backgroundImageUrl,
                    altText: z.intl.string(z.t["ulQB+t"]),
                    customClassNames: { containerClassName: nL.z, foregroundImageClassName: nL._ },
                });
        }
    }, [u]);
    return (0, s.jsx)(nM.A, {
        size: "lg",
        shouldShow: !0,
        position: o,
        caretConfig: c,
        gradientColor: "purple",
        alignmentStrategy: "edge",
        align: d,
        badge: { type: "new", variant: "default" },
        onRequestClose: l,
        actions: [{ text: g ?? z.intl.string(z.t.RzWDqY), variant: "primary", onClick: i, onMouseDown: a }],
        targetElementRef: t,
        title: h,
        body: A,
        graphic: m,
    });
}
var nU = n(770178),
    nD = n(206939);
let nO = Math.ceil(Math.sqrt(115200)),
    nP = (nO - 240) / 2,
    nV = r.forwardRef(function (e, t) {
        let { children: n } = e,
            [l, i] = r.useState(-1),
            a = r.useCallback((e) => {
                i(e.contentRect.width);
            }, []),
            o = (0, nU.w)(a, [], { fireOnMount: !0 }),
            [{ shineSpring: d }, c] = (0, ey.z)(() => ({
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
                            className: nD.q,
                            style: {
                                transform: d.to(
                                    (e) => `translateX(calc(${e * l}px + ${e * nO}px)) translateY(-50%) rotate(45deg)`,
                                ),
                            },
                        }),
                    ),
                [n, l, d],
            );
        return (
            r.useImperativeHandle(t, () => ({ onMouseEnter: u, onMouseLeave: h }), [u, h]),
            (0, s.jsx)("div", {
                className: nD.i,
                onMouseEnter: u,
                onMouseLeave: h,
                onFocus: u,
                onBlur: h,
                ref: o,
                style: { "--custom-shine-dimensions": "240px", "--custom-shine-rotated-dimensions-delta": `${nP}px` },
                children: A,
            })
        );
    });
var nw = n(371794),
    nH = n(998218),
    nB = n(645591),
    nk = n(377084);
let nF = r.memo(function (e) {
    let { guild: t, selected: l } = e,
        i = r.useRef(null),
        a = r.useRef(null),
        o = (0, $.useHasAnyModalOpen)(),
        d = (0, u.bG)([eh.A], () => eh.A.hasLayers()),
        c = (0, eu.xr)((e) => e.fullScreenLayers.length > 0);
    r.useEffect(() => {
        (0, nR.Kh)(t.id);
    }, [t.id]);
    let A = (0, u.bG)([nv.A], () => nv.A.getAnnouncement(t.id)),
        g = A?.state === "success" ? A.announcement : void 0,
        [m, p] = (0, el.x_)(L.M.GAME_SHOP_NEW_BADGE, t.id, g?.id ?? "", void 0, !0),
        f = m === L.M.GAME_SHOP_NEW_BADGE && null != g,
        [C, E] = (0, el.x_)(L.M.GAME_SHOP_NEW_DROP_POPOVER, t.id, g?.id ?? ""),
        x = C === L.M.GAME_SHOP_NEW_DROP_POPOVER && null != g;
    r.useEffect(() => {
        l && (f && p(er.i.INDIRECT_ACTION), x && E(er.i.INDIRECT_ACTION));
    }, [p, E, l, f, x]);
    let _ = r.useCallback(() => {
            p(er.i.TAKE_ACTION), E(er.i.TAKE_ACTION);
            let e = nv.A.getStorefrontState(t.id)?.activePage ?? 0;
            (0, ei.pX)(F.BVt.CHANNELS_GAME_SHOP(t.id, e));
        }, [t.id, p, E]),
        S = r.useCallback(() => {
            (0, nj.X)({ guildId: t.id, forceFetch: x });
        }, [t.id, x]),
        I = r.useCallback(() => {
            E(er.i.USER_DISMISS);
        }, [E]),
        b = r.useCallback(
            (e) => {
                null != t &&
                    (0, eL.L3)(e, async () => {
                        let { default: e } = await n.e("99523").then(n.bind(n, 819233));
                        return (n) => (0, s.jsx)(e, { ...n, guild: t });
                    });
            },
            [t],
        ),
        G = r.useCallback(() => {
            i.current?.onMouseEnter(null, 500);
        }, [i]),
        R = r.useCallback(
            (e) =>
                (0, s.jsx)(H.G, {
                    background: (0, s.jsx)("div", { className: nk.D }),
                    innerClassName: nk.Z,
                    ref: a,
                    id: `game-shop-${t.id}`,
                    renderIcon: (e) =>
                        (0, s.jsx)(nG.U, {
                            size: "custom",
                            color: "currentColor",
                            width: 20,
                            height: 20,
                            className: e,
                        }),
                    text: (0, s.jsx)(N.E, {
                        variant: "text-md/medium",
                        className: nB.UU,
                        children: z.intl.string(z.t.vyaWs7),
                    }),
                    selected: l,
                    onMouseDown: S,
                    onClick: _,
                    onContextMenu: b,
                    trailing: (0, s.jsxs)(s.Fragment, {
                        children: [
                            f &&
                                (0, s.jsx)(U.Lp, {
                                    text: z.intl.string(z.t.y2b7CA),
                                    color: h.A.colors.BACKGROUND_BRAND.css,
                                }),
                            e,
                        ],
                    }),
                }),
            [t.id, l, S, _, b, f],
        ),
        v = r.useMemo(() => {
            if (null == g) return null;
            switch (g.type) {
                case "guild-application-announcement": {
                    let e =
                            null != g.assetId
                                ? nH.A.toURLSafe((0, nw.YE)(g.applicationId, g.assetId, 128, "webp"))
                                : void 0,
                        t =
                            null != g.backgroundImageAssetId
                                ? nH.A.toURLSafe((0, nw.YE)(g.applicationId, g.backgroundImageAssetId, 128, "webp"))
                                : void 0;
                    if (null == e) return null;
                    return {
                        graphicSource: { type: "sku", imageUrl: e, backgroundImageUrl: t },
                        title: z.intl.string(z.t["7PvvS9"]),
                        body: z.intl.formatToPlainString(z.t["9J4h1a"], { applicationName: g.applicationName }),
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
        j = r.useCallback(
            () =>
                x && null != v
                    ? (0, s.jsx)(nT, {
                          onActionClick: _,
                          onActionMouseDown: S,
                          onRender: G,
                          onRequestClose: I,
                          targetElementRef: a,
                          ...v,
                      })
                    : null,
            [x, v, _, S, G, I],
        );
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(nV, { ref: i, children: R }), !o && !d && !c && j()] });
});
var nz = n(740426),
    nK = n(826673),
    nW = n(591552),
    nY = n(202776),
    nq = n(454058),
    nX = n(222823);
function nZ(e) {
    let { guild: t, selected: l } = e,
        i = (0, nY.A)(t),
        a = (0, nK.JZ)(L.M.CHANNEL_BROWSER_NEW_BADGE_NUX),
        o = (0, tn.yK)([nq.A], () =>
            Array.from(nq.A.getNewChannelIds(t.id)).filter((e) => nq.A.shouldIndicateNewChannel(t.id, e)),
        ),
        d = (0, tn.bG)([nX.Ay], () => nX.Ay.hasUnread(t.id, nI.P.GUILD_ONBOARDING_QUESTION)),
        c = o.length > e4.rR,
        u = (0, tn.bG)([nW.A, nX.Ay], () => {
            let e = nW.A.lastFetchedAt(t.id),
                n = nX.Ay.lastMessageId(t.id, nI.P.GUILD_ONBOARDING_QUESTION);
            if (null == n) return !1;
            let l = e$.default.extractTimestamp(n);
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
            (m = (0, s.jsx)(U.Lp, { color: h.A.colors.BADGE_BACKGROUND_BRAND.css, text: z.intl.string(z.t.y2b7CA) })),
        (0, s.jsx)(H.G, {
            id: `channels-${t.id}`,
            renderIcon: (e) => (0, s.jsx)(nz.k, { size: "md", color: "currentColor", className: e }),
            text: i ? z.intl.string(z.t.h9mGOP) : z.intl.string(z.t.et6wav),
            selected: l,
            onClick: A,
            onContextMenu: g,
            trailing: m,
        })
    );
}
var nJ = n(855473);
function n$(e) {
    let { guild: t, selected: n } = e;
    return (0, s.jsx)(H.G, {
        id: `home-tab-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(nJ.Z, { size: "md", color: "currentColor", className: e }),
        text: z.intl.string(z.t.VbpLyU),
        selected: n,
        onClick: function () {
            (0, ei.pX)(F.BVt.CHANNEL(t.id, es.VV.GUILD_HOME));
        },
    });
}
var nQ = n(5373),
    n0 = n(65995),
    n1 = n(33011);
function n3(e, t) {
    return (0, s.jsx)(N.E, { variant: "text-xs/bold", color: "text-default", children: e }, t);
}
let n2 = r.memo(function (e) {
    let { guild: t } = e,
        n = (0, u.bG)([tr.h], () => tr.h.getNewMemberActions(t.id), [t.id]),
        l = (0, u.bG)([n0.A], () => n0.A.getCompletedActions(t.id)),
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
                className: n1.G9,
                onClick: function () {
                    (0, ei.pX)(F.BVt.CHANNEL(t.id, es.VV.GUILD_HOME));
                },
                children: [
                    (0, s.jsxs)("div", {
                        className: n1.A1,
                        children: [
                            (0, s.jsx)(x.D, { variant: "heading-sm/bold", children: z.intl.string(z.t.SnrR3x) }),
                            (0, s.jsxs)("div", {
                                className: n1.Ib,
                                children: [
                                    (0, s.jsx)(N.E, {
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        className: n1.Cv,
                                        children: z.intl.format(z.t.eqZ1lW, {
                                            numberHook: n3,
                                            total: a.toString(),
                                            completed: i.toString(),
                                        }),
                                    }),
                                    (0, s.jsx)(eV.A, {
                                        className: n1.UE,
                                        width: 16,
                                        height: 16,
                                        direction: eV.A.Directions.RIGHT,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, s.jsx)(nQ.i, {
                        className: n1.hr,
                        foregroundGradientColor: [
                            h.A.unsafe_rawColors.GREEN_300.css,
                            h.A.unsafe_rawColors.GREEN_230.css,
                        ],
                        percent: (i / a) * 100 + 3,
                        animate: !0,
                    }),
                ],
            }),
            (0, s.jsx)("div", { role: "separator", className: n1.yF }),
        ],
    });
});
var n9 = n(581925);
function n5(e) {
    let { guild: t, selected: n } = e;
    return (0, s.jsx)(H.G, {
        id: `official-messages-page-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(n9.L, { size: "md", color: "currentColor", className: e }),
        text: z.intl.string(z.t["0C5w9r"]),
        selected: n,
        onClick: () => {
            (0, ei.pX)(F.BVt.CHANNEL(t.id, es.VV.GUILD_OFFICIAL_MESSAGES));
        },
    });
}
var n7 = n(514179);
function n6(e) {
    let { guild: t, selected: l } = e;
    return (0, s.jsx)(H.G, {
        id: `subscriptions-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(n7.A, { className: e }),
        text: z.intl.string(z.t["KzCF/6"]),
        selected: l,
        onClick: () => {
            (0, ei.pX)(F.BVt.CHANNEL(t.id, es.VV.ROLE_SUBSCRIPTIONS));
        },
        onContextMenu: (e) => {
            null != t &&
                (0, eL.L3)(e, async () => {
                    let { default: e } = await n.e("71911").then(n.bind(n, 978554));
                    return (n) => (0, s.jsx)(e, { ...n, guild: t });
                });
        },
    });
}
var n4 = n(506774),
    n8 = n(95561),
    le = n(289397),
    lt = n(486418),
    ln = n(575926),
    ll = n(440293),
    li = n(174459),
    ls = n(634654),
    lr = n(391277);
function la(e) {
    let { guildId: t, selected: n, handleClick: l } = e,
        i = (0, ll.w)(t),
        r = (0, tn.bG)([tu.A], () => tu.A.getGuild(t)),
        a = r?.features.has(F.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) === !0,
        o = "false" === n4.w.get(ls.bJ, "false"),
        d = (0, tn.bG)([R.A], () => R.A.useReducedMotion);
    return (0, s.jsx)(H.G, {
        id: `shop-${t}`,
        className: ef()(lr.A2, { [lr.wH]: n, [lr.ST]: o }),
        innerClassName: lr.LE,
        renderIcon: (e) => (0, s.jsx)(ln.h, { width: 20, height: 20, className: ef()([e, lr.sV]) }),
        text: z.intl.string(z.t.al5EXL),
        selected: n,
        onClick: l,
        trailing: (0, s.jsxs)("div", {
            className: lr.ai,
            children: [
                d
                    ? (0, s.jsx)(U.Lp, {
                          color: h.A.unsafe_rawColors.BRAND_260.css,
                          text: z.intl.string(z.t.y2b7CA),
                          className: lr.Ad,
                      })
                    : (0, s.jsx)("img", {
                          src: (0, le.n)("server_products/storefront/money.gif"),
                          className: lr.TG,
                          alt: "",
                      }),
                n &&
                    (0, s.jsx)(ee.D, {
                        className: lr.b,
                        onClick: (e) => {
                            e.stopPropagation(),
                                (0, nK.Dr)(L.M.SERVER_SHOP_PHANTOM_PREVIEW),
                                li.default.track(F.HAw.GUILD_SHOP_PREVIEW_CLICK, {
                                    ...(0, n8.H$)(t),
                                    action_taken: ls.hN.DISMISS_CHANNEL_ROW,
                                }),
                                (i && a) || (0, ei.bG)(F.BVt.CHANNEL(t, e7.Ay.getDefaultChannel(t)?.id));
                        },
                        "aria-label": z.intl.string(z.t.cpT0Cq),
                        children: (0, s.jsx)(tb.a, { size: "xs", color: "currentColor" }),
                    }),
            ],
        }),
    });
}
function lo(e) {
    let { guild: t, selected: l } = e,
        i = (0, lt.P)(t),
        r = () => {
            n4.w.set(ls.bJ, "true"), (0, ei.pX)(F.BVt.CHANNEL(t.id, es.VV.GUILD_SHOP));
        };
    return i
        ? (0, s.jsx)(la, { guildId: t.id, selected: l, handleClick: r })
        : (0, s.jsx)(H.G, {
              id: `shop-${t.id}`,
              renderIcon: (e) => (0, s.jsx)(ln.h, { width: 20, height: 20, className: e }),
              text: z.intl.string(z.t.al5EXL),
              selected: l,
              onClick: r,
              onContextMenu: (e) => {
                  null != t &&
                      (0, eL.L3)(e, async () => {
                          let { default: e } = await n.e("52565").then(n.bind(n, 345332));
                          return (n) => (0, s.jsx)(e, { ...n, guild: t });
                      });
              },
          });
}
var ld = n(308528),
    lc = n(152007),
    lu = n(747926),
    lh = n(977997);
function lA(e) {
    return null != e && e > 0;
}
var lg = n(405018),
    lm = n(428689),
    lp = n(852878);
function lf(e) {
    let { total: t, users: n, videoLimit: l } = e;
    return (0, s.jsxs)("div", {
        className: lp.iE,
        children: [
            (0, s.jsxs)("span", {
                className: ef()(lp.VV, { [lp.Ki]: l, [lp.$G]: n >= 100 }),
                children: [
                    l ? (0, s.jsx)(lm.n, { size: "md", color: "currentColor", className: lp.LB }) : null,
                    n.toString().padStart(2, "0"),
                ],
            }),
            (0, s.jsx)("span", {
                className: ef()(lp.X5, { [lp.$G]: t >= 100 }),
                children: t.toString().padStart(2, "0"),
            }),
        ],
    });
}
function lC(e) {
    let { channel: t, video: n, userCount: l } = e,
        { limit: i } = (0, lg.A)(t),
        r = -1,
        a = !1;
    return (
        t.userLimit > 0 && (r = t.userLimit),
        n && i > 0 && ((a = r < 0 || i < r), (r = r > 0 ? Math.min(r, i) : i)),
        (0, s.jsx)(lf, { users: l, total: r, videoLimit: a })
    );
}
var lE = n(701665);
function lx(e) {
    let { mentionsCount: t, isMentionLowImportance: n } = e;
    return (0, s.jsx)("div", {
        className: lE.R,
        "aria-hidden": !0,
        children: (0, s.jsx)(U.hV, {
            count: t,
            color: n ? h.A.colors.BACKGROUND_MOD_STRONG.css : h.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
        }),
    });
}
var lN = n(588224),
    l_ = n(37411),
    lS = n(998510);
function lI(e) {
    let { style: t, withGuildIcon: n, inverted: l } = e,
        i = { className: ef()(lS.GI, { [lS.a7]: n }, { [lS.BJ]: l }), style: t },
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
let lb = r.memo(function (e) {
        let { thread: t, isSelectedChannel: l, isSelectedVoice: i, isLast: a, withGuildIcon: o } = e,
            c = (0, u.bG)([eX.Ay], () => eX.Ay.getVoiceStatesForChannel(t), [t]),
            h = (0, u.bG)([lh.A], () => lh.A.hasVideo(t.id)),
            {
                unread: A,
                mentionCount: g,
                isMentionLowImportance: m,
            } = (0, u.cf)([nX.Ay], () => ({
                unread: nX.Ay.hasUnread(t.id),
                mentionCount: nX.Ay.getMentionCount(t.id),
                isMentionLowImportance: nX.Ay.getIsMentionLowImportance(t.id),
            })),
            p = (0, u.bG)([lc.A], () => lc.A.isMuted(t.id)),
            f = r.useCallback(
                (e) => {
                    (0, lu.JA)(t, !e.shiftKey, l_.H9.CHANNEL_LIST);
                },
                [t],
            ),
            C = r.useCallback(() => {
                ld.A.preload(t.guild_id, t.id);
            }, [t.guild_id, t.id]),
            E = r.useCallback(
                (e) => {
                    let l = eq.A.getChannel(t.id);
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
                                n.e("85802"),
                                n.e("65200"),
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
                    ? z.intl.formatToPlainString(z.t["ZL7+I6"], { channelName: t.name, mentionCount: g })
                    : A
                      ? z.intl.formatToPlainString(z.t.YlVvmc, { channelName: t.name })
                      : z.intl.formatToPlainString(z.t["0nZpiF"], { channelName: t.name });
        return (0, s.jsxs)("li", {
            role: N,
            className: ef()(ed.fx, { [ed.wH]: l }),
            children: [
                (0, s.jsx)(lI, { withGuildIcon: o }),
                a
                    ? null
                    : (0, s.jsx)(lI, {
                          withGuildIcon: o,
                          inverted: !0,
                          style: { transform: "rotateX(180deg) translateY(-9px)" },
                      }),
                (0, s.jsx)(t_.vN, {
                    focusTarget: S,
                    ringTarget: S,
                    offset: { top: 2, bottom: 2, right: 4 },
                    children: (0, s.jsxs)("div", {
                        className: ef()(ed.Ki, nB.iE, nB.ZS, {
                            [nB.J1]: l,
                            [nB.F4]: !l && p,
                            [nB.V2]: !p && !l && A,
                            [nB.lY]: o,
                        }),
                        onMouseDown: C,
                        onContextMenu: E,
                        children: [
                            !A || p || l ? null : (0, s.jsx)("div", { className: ef()(nB.gy, nB.WS) }),
                            (0, s.jsx)(ee.D, {
                                ..._,
                                innerRef: S,
                                className: nB.nf,
                                onClick: f,
                                "aria-label": I,
                                focusProps: { enabled: !1 },
                                children: (0, s.jsxs)("div", {
                                    className: ef()(nB.Y5, nB.__invalid_threadMainContent),
                                    children: [
                                        (0, s.jsx)(tx.A, { className: nB.UU, "aria-hidden": !0, children: t.name }),
                                        (0, s.jsxs)("div", {
                                            className: nB.Y_,
                                            children: [
                                                x > 0 && t.userLimit > 0
                                                    ? (0, s.jsx)(lC, { userCount: x, video: h, channel: t })
                                                    : null,
                                                lA(g)
                                                    ? (0, s.jsx)(lx, { mentionsCount: g, isMentionLowImportance: m })
                                                    : null,
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                }),
                (0, s.jsx)(lN.A, {
                    channel: t,
                    collapsed: !i && 1 !== c.length,
                    collapsedMax: 6,
                    voiceStates: c,
                    isThread: !0,
                }),
            ],
        });
    }),
    lG = r.memo(function (e) {
        let { channel: t, selectedChannel: n, selectedVoiceChannelId: l, sortedThreadIds: i, withGuildIcon: r } = e,
            a = (0, tq.Ay)(t),
            { density: o } = (0, C.wR)(),
            d = (0, u.yK)([eq.A], () => i.map((e) => eq.A.getChannel(e)).filter(eZ.Vq), [i]),
            c = (0, u.bG)([eX.Ay], () => {
                let e = d[d.length - 1];
                if (null == e) return 0;
                let t = eX.Ay.getVoiceStates(e.guild_id)[e.id];
                return null == t || 0 === t.length ? 0 : l !== e.id ? 40 : 32 * t.length + 8;
            });
        return (0, s.jsx)("li", {
            className: lS.kL,
            children: (0, s.jsxs)("ul", {
                role: "group",
                "aria-label": z.intl.formatToPlainString(z.t.EiyIi6, { channelName: a }),
                children: [
                    (0, s.jsx)("div", {
                        className: ef()(lS.eh, { [lS.ET]: r }),
                        style: { bottom: ("cozy" === o ? 28 : 24) + c },
                    }),
                    d.map((e, t) =>
                        (0, s.jsx)(
                            lb,
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
var lR = n(922016),
    lv = n(367513),
    lj = n(296216),
    lM = n(963027),
    ly = n(202384),
    lL = n(51758),
    lT = n(499211),
    lU = n(139033),
    lD = n(305866),
    lO = n(123292),
    lP = n(830215),
    lV = n(315982),
    lw = n(480900),
    lH = n(557722),
    lB = n(834942),
    lk = n(287809),
    lF = n(53516),
    lz = n(725673),
    lK = n(824078),
    lW = (((l = {})[(l.VOICE = 0)] = "VOICE"), l);
let lY = (e) => {
    let { type: t, guildId: l, closePopout: i } = e,
        r = (0, M.GV)(),
        {
            notClaimed: a,
            notEmailVerified: o,
            notPhoneVerified: d,
            newAccount: c,
            newMember: h,
            missingVerificationRole: A,
            verificationRole: g,
        } = (0, u.bG)([lB.A], () => lB.A.getCheck(l), [l]),
        m = 0 === t ? z.intl.string(z.t["6zY8BI"]) : null,
        p = null,
        f = null;
    return (0 === t &&
        (a
            ? ((p = z.intl.string(z.t.IRxUlG)), (f = z.intl.string(z.t.fiNVin)))
            : d
              ? ((p = z.intl.string(z.t.vW8iUF)), (f = z.intl.string(z.t["50gfOv"])))
              : o
                ? ((p = z.intl.string(z.t.vdSOpz)), (f = z.intl.string(z.t.lm1UKt)))
                : h
                  ? ((p = z.intl.formatToPlainString(z.t.v1ktYb, { min: F.$8o.MEMBER_AGE })),
                    (f = z.intl.string(z.t.BddRzS)))
                  : c
                    ? ((p = z.intl.formatToPlainString(z.t.sncw41, { min: F.$8o.ACCOUNT_AGE })),
                      (f = z.intl.string(z.t.BddRzS)))
                    : A &&
                      null != g &&
                      null === g.tags.guild_connections &&
                      ((p = z.intl.format(z.t.MZbCuG, { roleName: `@${g?.name}` })),
                      (f = z.intl.string(z.t["6Ge2LG"])))),
    null == m || null == p)
        ? null
        : (0, s.jsxs)(lD.l, {
              className: ef()(lK.popover, lz.kL),
              "aria-labelledby": r,
              children: [
                  (0, s.jsx)("img", { alt: "", className: lz.Sl, src: n(303528) }),
                  (0, s.jsxs)("div", {
                      className: lz.Qs,
                      children: [
                          (0, s.jsx)(x.D, { variant: "heading-md/semibold", id: r, children: m }),
                          (0, s.jsx)(N.E, { color: "text-default", variant: "text-sm/normal", children: p }),
                          (0, s.jsxs)("div", {
                              className: lz.UD,
                              children: [
                                  null != f
                                      ? (0, s.jsx)("div", {
                                            "data-button-hoisted-classname-wrapper": !0,
                                            className: lz.FS,
                                            children: (0, s.jsx)(tN.$, {
                                                variant: "primary",
                                                text: f,
                                                onClick: () => {
                                                    a
                                                        ? lV.R()
                                                        : d
                                                          ? (0, $.openModalLazy)(
                                                                async () => {
                                                                    let { default: e } = await Promise.all([
                                                                        n.e("58735"),
                                                                        n.e("4782"),
                                                                        n.e("63434"),
                                                                        n.e("89545"),
                                                                        n.e("91531"),
                                                                        n.e("11493"),
                                                                        n.e("84704"),
                                                                    ]).then(n.bind(n, 615715));
                                                                    return (t) =>
                                                                        (0, s.jsx)(e, {
                                                                            reason: lH.d.GUILD_PHONE_REQUIRED,
                                                                            ...t,
                                                                        });
                                                                },
                                                                { modalKey: lF.V },
                                                            )
                                                          : o
                                                            ? (lP.A.verifyResend(),
                                                              (0, lU.A)({
                                                                  title: z.intl.string(z.t.LykQYk),
                                                                  subtitle: z.intl.format(z.t.azKEPy, {
                                                                      email: lk.default.getCurrentUser()?.email,
                                                                  }),
                                                              }))
                                                            : A && null != g && (0, lw.b)(g, l),
                                                        i();
                                                },
                                            }),
                                        })
                                      : null,
                                  a || d || o
                                      ? (0, s.jsx)(lO.Q, {
                                            onClick: i,
                                            text: z.intl.string(z.t.oEAioF),
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
var lq = n(824865),
    lX = n(378570),
    lZ = n(790535),
    lJ = n(113783),
    l$ = n(96566),
    lQ = n(495544),
    l0 = n(312006),
    l1 = n(505543),
    l3 = n(994500),
    l2 = n(685399),
    l9 = n(475889),
    l5 = n(85451),
    l7 = n(435470),
    l6 = n(35275),
    l4 = n(75879);
function l8(e) {
    let { locked: t } = e;
    return (0, s.jsx)("div", {
        className: ef()(ed.Xs, l4.U),
        children: (0, s.jsx)(l6.A, {
            className: ed.gE,
            color: t ? h.A.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css : void 0,
        }),
    });
}
var ie = n(695633),
    it = n(669715),
    il = n(137177),
    ii = n(999436);
function is(e) {
    let { className: t, embeddedApps: n, muted: l } = e;
    if (n.length <= 0) return null;
    {
        if (1 === n.length)
            return (0, s.jsx)("div", {
                className: ef()(ii.kL, t, l && ii.F4),
                children: (0, s.jsx)(il.A, { game: n[0].application, className: ii.wK }),
            });
        let e = n.length - 1;
        return (0, s.jsxs)("div", {
            className: ef()(ii.kL, t, l && ii.F4),
            children: [
                (0, s.jsx)(il.A, { game: n[0].application, className: ii.wK }),
                2 === n.length
                    ? (0, s.jsx)(il.A, { game: n[1].application, className: ii.wK })
                    : (0, s.jsx)(N.E, {
                          className: ii.ju,
                          variant: "text-xs/bold",
                          color: "interactive-text-active",
                          children: `+${e}`,
                      }),
            ],
        });
    }
}
function ir(e) {
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
        m = (0, u.bG)([nX.Ay], () => nX.Ay.getMentionCount(t.id)),
        p = (0, u.bG)([nX.Ay], () => nX.Ay.getIsMentionLowImportance(t.id)),
        f = (0, l2.Ay)(t),
        C = (0, u.bG)([B.A], () => !B.A.can(F.xBc.CONNECT, t)),
        E = (0, l9.H)(t),
        x = (0, u.bG)([lh.A], () => lh.A.hasVideo(t.id)),
        _ = (0, l$.qT)(t.id) && t.isGuildStageVoice(),
        S = (function (e) {
            let { channel: t, locked: n, video: l, selected: i } = e;
            return (
                (function (e) {
                    let { channel: t, video: n, considerMaxStageVoiceUserLimit: l = !0 } = e,
                        { limit: i } = (0, lg.A)(t),
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
        I = (0, u.bG)([ie.A], () => ie.A.getNewThreadCount(t.guild_id, t.id)),
        b = (0, l7.ed)(t.guild_id, t.id),
        G = (0, u.bG)([tu.A], () => tu.A.getGuild(t.guild_id)?.features.has(F.GuildFeatures.COMMUNITY) ?? !1);
    if (lA(m)) return (0, s.jsx)(lx, { mentionsCount: m, isMentionLowImportance: p });
    if (o) return (0, s.jsx)(l8, { locked: d });
    if (c) return (0, s.jsx)(U.Lp, { text: z.intl.string(z.t.y2b7CA), color: h.A.colors.BADGE_BACKGROUND_BRAND.css });
    if (!A && g === nI.e.ALL_MESSAGES && t.isForumLikeChannel() && null != I && I > 0)
        return (0, s.jsx)(N.E, {
            variant: "text-xs/semibold",
            color: "text-brand",
            children: z.intl.format(z.t.GkAbqY, { count: (0, U.Gu)(I) }),
        });
    if (!A && t.isForumLikeChannel() && null != b && b > 0)
        return (0, s.jsx)(N.E, { variant: "text-xs/semibold", color: "text-muted", children: (0, U.Gu)(b) });
    let R = i?.length ?? 0;
    return null != r && r && S
        ? (0, s.jsx)(lC, { userCount: R, video: x || _, channel: t })
        : l && (0, it.t)(i) && G
          ? (0, s.jsx)(U.Lp, { text: z.intl.string(z.t.dI3q4h), color: h.A.unsafe_rawColors.RED_400.css })
          : null != E
            ? (0, s.jsx)(l5.z, { textColor: "text-feedback-positive", entry: { start: E } })
            : null != a && a && f.length > 0
              ? (0, s.jsx)(is, { embeddedApps: f, muted: A })
              : null;
}
var ia = n(582630);
class io extends n_ {
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
        return (0, nn.Pd)(e, lh.A, tu.A);
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
        null != s && (0, lL.V)(s) && (0, ly.Ze)(s),
            l && this.setState({ shouldShowGuildVerificationPopout: !0 }),
            t || n || e.isRoleSubscriptionTemplatePreviewChannel() || (0, lZ.av)(e),
            __OVERLAY__ || (0, lX.iN)(e.id, i ? { source: lq.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
    };
    handleClickChat = () => {
        let { channel: e, locked: t, isSuggestedSection: n } = this.props;
        __OVERLAY__ || t || (0, lX.iN)(e.id, n ? { source: lq.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            l = tu.A.getGuild(t.getGuildId());
        null != l &&
            (0, eL.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("26132"),
                    n.e("46652"),
                    n.e("93190"),
                    n.e("93103"),
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
        return (0, s.jsx)(lN.A, { channel: e, voiceStates: l, collapsed: t, tabIndex: n, numAudience: i });
    }
    renderPopout = () => {
        let { channel: e } = this.props,
            { shouldShowGuildVerificationPopout: t } = this.state;
        if (t)
            return (0, s.jsx)(lY, {
                type: lW.VOICE,
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
                text: z.intl.string(z.t.ZXxLQg),
                children: (0, s.jsx)(ee.D, {
                    className: ef()(ed.Xs, n ? ed.Tf : null),
                    onClick: () => {
                        lv.A.updateChatOpen(e.id, !0), this.handleClickChat();
                    },
                    "aria-label": z.intl.string(z.t.ZXxLQg),
                    children: (0, s.jsx)(I.o, { size: "xs", color: "currentColor", className: ed.gE }),
                }),
            });
    };
    renderChannelInfo() {
        return this.props.channelInfo;
    }
    getTooltipText = () => {
        let { connected: e } = this.props;
        return this.isFull() && !e ? z.intl.string(z.t.rZfiNq) : null;
    };
    renderSubtitle = () => {
        let e = this.props.stageInstance?.topic;
        return null == e ? null : (0, s.jsx)(tx.A, { children: e });
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
                mentionCount: p,
                isFavoriteSuggestion: f,
            } = this.props,
            { shouldShowGuildVerificationPopout: C } = this.state,
            E = (0, s.jsxs)("li", {
                className: ef()(this.getModeClass(), { [ed.r9]: this.isDisabled() }),
                "data-dnd-name": (0, tq.m1)(e, lk.default, l3.A),
                children: [
                    (0, s.jsx)(lR.Y, {
                        targetElementRef: this.channelItemRef,
                        position: "right",
                        renderPopout: this.renderPopout,
                        spacing: 17,
                        onRequestClose: this.closeGuildVerificationPopout,
                        shouldShow: C,
                        children: () =>
                            (0, s.jsx)(Q.m, {
                                text: this.getTooltipText(),
                                children: (0, s.jsxs)(nS.Ay, {
                                    ref: this.channelItemRef,
                                    className: ed.Ki,
                                    iconClassName: ef()({ [ia.G]: null != u }),
                                    channel: e,
                                    selected: !f && t,
                                    connected: n,
                                    unread: n ? g : void 0,
                                    resolvedUnreadSetting: m,
                                    mentionCount: p,
                                    locked: l,
                                    onClick: () => {
                                        this.handleClick();
                                    },
                                    onContextMenu: (e) => {
                                        this.handleContextMenu(e);
                                    },
                                    connectDragPreview: o,
                                    subtitle: this.renderSubtitle(),
                                    isFavoriteSuggestion: f,
                                    "aria-label": (0, lM.Ay)({
                                        channel: e,
                                        unread: g,
                                        mentionCount: p,
                                        isSubscriptionGated: h,
                                        needSubscriptionToAccess: A,
                                    }),
                                    children: [
                                        f && this.renderAcceptSuggestionButton(),
                                        f && this.renderRemoveSuggestionButton(),
                                        !f && this.renderOpenChatButton(),
                                        !f && this.renderInviteButton(),
                                        !f && this.renderEditButton(),
                                        !f && this.renderChannelInfo(),
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
let id = tY((0, lj.F)(io));
function ic(e) {
    var t;
    let n,
        l,
        { guild: i, channel: r, disableSorting: a, isFavoriteCategory: o, collapsed: d, voiceStates: c } = e,
        h = (0, u.cf)([nX.Ay], () => ({ unread: nX.Ay.hasUnread(r.id), mentionCount: nX.Ay.getMentionCount(r.id) })),
        A = (0, u.bG)([tO.Ay], () => tO.Ay.resolveUnreadSetting(r)),
        g = (0, u.cf)([eq.A, lB.A, B.A], () => {
            let e = eq.A.getChannel(r.parent_id),
                t = lB.A.getCheck(r.guild_id);
            return {
                canManageChannel: null != i && B.A.can(F.xBc.MANAGE_CHANNELS, r),
                canReorderChannel:
                    !0 !== a &&
                    (i.id === nl.Vc ||
                        (null != e ? B.A.can(F.xBc.MANAGE_CHANNELS, e) : B.A.can(F.xBc.MANAGE_CHANNELS, i))),
                canMoveMembers: B.A.can(F.xBc.MOVE_MEMBERS, r),
                locked: !B.A.can(F.xBc.CONNECT, r),
                bypassLimit: B.A.can(F.xBc.MOVE_MEMBERS, r),
                unverifiedAccount: !t.canChat,
            };
        }),
        m = (0, u.bG)([tU.A], () => tU.A.isCollapsed(r.parent_id)),
        p =
            ((t = r.id),
            (n = (0, l1.A)(t)),
            (l = (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return (0, u.cf)([l0.Ay, lQ.default], () => {
                    let n = lQ.default.getId();
                    return l0.Ay.getPermissionsForUser(n, e, t);
                }, [e, t]);
            })(t, !0).moderator),
            !n && l ? 1 : 0),
        f = (0, u.bG)([ng.A], () => ng.A.getStageInstanceByChannel(r.id), [r.id]),
        C = (0, lJ.zy)(r.id, e0.ip.AUDIENCE),
        { isSubscriptionGated: E, needSubscriptionToAccess: x } = (0, lT.A)(r.id),
        N = (0, u.bG)([tO.Ay], () => tO.Ay.isFavorite(i.id, r.id)),
        _ = (0, l$.xn)(r.id),
        S = ir({
            channel: r,
            isChannelSelected: !1,
            isChannelCollapsed: d,
            voiceStates: c,
            isSubscriptionGated: E,
            needSubscriptionToAccess: x,
            enableConnectedUserLimit: _ || (r.userLimit > 0 && r.userLimit < F.RCc),
        }),
        I = e.connected && null == S;
    return (0, s.jsx)(id, {
        categoryCollapsed: m,
        connectAction: p,
        numAudience: C,
        stageInstance: f,
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
function iu(e, t) {
    let n = t.getGuildId();
    if (null == n) throw Error("TextChannel, preloadChannel: Channel does not have a guildId");
    ld.A.preload(n, t.id);
}
let ih = tY(
        class extends n_ {
            handleContextMenu = (e) => {
                let { channel: t } = this.props,
                    l = tu.A.getGuild(t.getGuildId());
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
                        className: ef()(this.getClassName(), { [ed.r9]: this.isDisabled() }),
                        "data-dnd-name": (0, tq.m1)(e, lk.default, l3.A),
                        children: (0, s.jsxs)(nS.Ay, {
                            className: ed.Ki,
                            channel: e,
                            selected: t,
                            onClick: this.handleClick,
                            onMouseDown: iu,
                            onContextMenu: this.handleContextMenu,
                            connectDragPreview: r ? i : null,
                            "aria-label": (0, lM.Ay)({ channel: e }),
                            resolvedUnreadSetting: nI.e.ONLY_MENTIONS,
                            children: [this.renderInviteButton(), this.renderEditButton()],
                        }),
                    });
                return r ? n(l(a)) : a;
            }
        },
    ),
    iA = r.memo(function (e) {
        let { channel: t, guild: n, disableSorting: l } = e,
            i = (0, u.cf)([eq.A, B.A], () => {
                let e = eq.A.getChannel(t.parent_id);
                return {
                    canManageChannel: B.A.can(F.xBc.MANAGE_CHANNELS, t),
                    canReorderChannel:
                        !0 !== l && null != e ? B.A.can(F.xBc.MANAGE_CHANNELS, e) : B.A.can(F.xBc.MANAGE_CHANNELS, n),
                };
            });
        return (0, s.jsx)(ih, { ...i, ...e });
    });
var ig = n(172218),
    im = n(811024),
    ip = n(323073);
function iC(e) {
    if (null == e) return null;
    switch (e.type) {
        case "embedded-activities":
        case "event":
            return { subtitle: e.name };
        case "go-live":
            return { subtitle: z.intl.string(z.t.Pa817q) };
    }
    return null;
}
var iE = n(414808),
    ix = n(302005),
    iN = n(406704),
    i_ = n(696451),
    iS = n(763827),
    iI = n(56059),
    ib = n(163328),
    iG = n(778712),
    iR = n(730134),
    iv = n(707539),
    ij = n(486020),
    iM = n(550837);
function iy(e) {
    let { channel: t } = e,
        l = (0, u.yK)([ie.A, nX.Ay, B.A], () => {
            let e = ie.A.getActiveJoinedRelevantThreadsForParent(t.guild_id, t.id);
            return o()(ie.A.getActiveJoinedThreadsForParent(t.guild_id, t.id))
                .values()
                .map((e) => e.channel)
                .concat(o().values(ie.A.getActiveUnjoinedThreadsForParent(t.guild_id, t.id)))
                .filter((t) => !(t.id in e) && B.A.can(F.xBc.VIEW_CHANNEL, t))
                .sort((e, t) => {
                    let n = nX.Ay.lastMessageId(e.id),
                        l = nX.Ay.lastMessageId(t.id);
                    return e$.default.compare(n, l);
                })
                .reverse()
                .value();
        }),
        i = t.isForumLikeChannel() ? 5 : 3,
        a = t.isForumLikeChannel() ? iI.b : ib.y;
    return (
        r.useEffect(() => {
            (0, iv.TE)();
        }, []),
        (0, s.jsxs)("div", {
            className: ef()(lK.popover, iM.SW),
            children: [
                (0, s.jsx)(N.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: iM.DD,
                    children: t.isForumLikeChannel() ? z.intl.string(z.t.ioVdO2) : z.intl.string(z.t.VNYs2v),
                }),
                (0, s.jsxs)("div", {
                    className: iM.p_,
                    children: [
                        l
                            .slice(0, t.isForumLikeChannel() ? l.length : i)
                            .map((e) => (0, s.jsx)(iL, { thread: e }, e.id))
                            .filter((e) => r.isValidElement(e))
                            .slice(0, i),
                        (0, s.jsxs)(ee.D, {
                            className: iM.nM,
                            onClick: () => {
                                t.isForumLikeChannel()
                                    ? (0, lX.iN)(t.id)
                                    : (0, $.openModalLazy)(async () => {
                                          let { default: e } = await Promise.all([
                                              n.e("63434"),
                                              n.e("38937"),
                                              n.e("65923"),
                                              n.e("71192"),
                                              n.e("56402"),
                                              n.e("76602"),
                                              n.e("28229"),
                                              n.e("39970"),
                                              n.e("72789"),
                                              n.e("65437"),
                                              n.e("95160"),
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
                                    className: iM.R4,
                                    children: (0, s.jsx)(a, { size: "custom", className: iM.Kk }),
                                }),
                                (0, s.jsx)("div", {
                                    className: iM.Pf,
                                    children: (0, s.jsx)(N.E, {
                                        variant: "text-sm/normal",
                                        color: "none",
                                        children: z.intl.string(z.t["4qdZ93"]),
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
function iL(e) {
    let { thread: t } = e,
        n = (0, u.bG)([lk.default], () => lk.default.getUser(t.ownerId)),
        l = (0, iv.JO)(t);
    return (0, s.jsxs)(ee.D, {
        className: iM.nM,
        onClick: (e) => {
            (0, lu.JA)(t, t.isForumPost() ? e.shiftKey : !e.shiftKey, l_.H9.POPOUT);
        },
        children: [
            (0, s.jsx)("div", {
                className: iM.R4,
                children:
                    null == n
                        ? (0, s.jsx)("img", {
                              className: iM.my,
                              src: ij.Ay.getDefaultAvatarURL(void 0, void 0),
                              alt: "",
                          })
                        : (0, s.jsx)(iR.A, { className: iM.my, user: n, size: iG._3.SIZE_16 }),
            }),
            (0, s.jsxs)("div", {
                className: iM.Pf,
                children: [
                    (0, s.jsx)(N.E, { className: iM.UU, variant: "text-sm/normal", color: "none", children: t.name }),
                    (0, s.jsx)(N.E, { variant: "text-sm/normal", color: "text-muted", children: "\u2022" }),
                    (0, s.jsx)(N.E, {
                        className: iM.vE,
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: (0, iv.aK)(l),
                    }),
                ],
            }),
        ],
    });
}
var iT = n(364522),
    iU = n(302959),
    iD = n(35903),
    iO = n(970928),
    iP = n(427262),
    iV = n(456644);
let iw = t8.DN.SIZE_24;
function iH(e) {
    let { activity: t, embeddedApp: n } = e,
        l = t?.assets,
        i = t?.application_id;
    if (null == l || (null == l.large_image && null == l.small_image)) {
        let e = ij.Ay.getApplicationIconURL({ id: n.application.id, icon: n.application.icon }),
            t = n.application.name;
        return (0, s.jsx)(Q.m, {
            text: t,
            position: "top",
            asContainer: !0,
            children: (0, s.jsx)("img", { alt: t, src: e, className: iV.P3 }),
        });
    }
    let r = l.large_image ?? l.small_image;
    return null != r
        ? (0, s.jsx)("img", { alt: l.large_text ?? "", src: (0, iO.uD)(i, r, [128, 128]), className: iV.P3 })
        : null;
}
function iB(e) {
    let { activity: t, embeddedApp: n, channel: l } = e,
        i = Array.from(n.embeddedActivity.userIds),
        r = (0, u.yK)([lk.default], () => i.map((e) => lk.default.getUser(e)).filter(eZ.Vq));
    return (0, s.jsx)("div", {
        className: iV.ec,
        children: (0, s.jsxs)("div", {
            className: iV.Wh,
            children: [
                (0, s.jsx)(iH, { activity: t, embeddedApp: n }),
                (0, s.jsxs)("div", {
                    className: iV.X0,
                    children: [
                        (0, s.jsx)(x.D, {
                            variant: "heading-sm/semibold",
                            color: "text-strong",
                            className: iV.wx,
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
                            (0, s.jsx)(t8.Ay, {
                                className: iV.TN,
                                guildId: l.guild_id,
                                users: r,
                                size: iw,
                                max: 7,
                                renderUser: (e) => {
                                    if (null == e || e === t8.mt) return null;
                                    let t = iP.Ay.getName(e);
                                    return (0, s.jsx)(
                                        Q.m,
                                        {
                                            asContainer: !0,
                                            text: t,
                                            position: "bottom",
                                            children: (0, s.jsx)("img", {
                                                src: e.getAvatarURL(l.guild_id, iw),
                                                alt: t,
                                                className: iV.my,
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
var ik = n(793425);
function iF(e) {
    let { channel: t, presenceActivity: n, embeddedApp: l, onAction: i } = e,
        r = Array.from(l.embeddedActivity.userIds),
        a = (0, u.bG)([lk.default], () => lk.default.getUser(r[0]));
    return null == a
        ? null
        : (0, s.jsxs)("div", {
              className: ik.Eb,
              children: [
                  (0, s.jsx)("div", {
                      className: ik.Il,
                      children: (0, s.jsx)(iB, { activity: n, embeddedApp: l, channel: t }),
                  }),
                  (0, s.jsx)("div", {
                      className: ik.M4,
                      children: (0, s.jsx)(iD.A, {
                          type: iU.M.VOICE_CHANNEL,
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
var iz = n(713654),
    iK = n(869552);
function iW(e) {
    let { channel: t } = e,
        n = (0, u.bG)([tu.A], () => tu.A.getGuild(t.guild_id)),
        l = (0, tq.Ay)(t),
        i = (0, iz.gU)(t, n);
    return null == i
        ? null
        : (0, s.jsxs)("div", {
              className: iK.hY,
              children: [
                  (0, s.jsx)(i, { className: iK.p }),
                  (0, s.jsx)(N.E, {
                      variant: "text-md/semibold",
                      color: "interactive-text-default",
                      className: iK.HA,
                      children: l,
                  }),
              ],
          });
}
var iY = n(802625);
function iq(e) {
    let { channel: t, onAction: n } = e,
        l = (0, l2.Ay)(t),
        i = Array.from((0, l2.Rz)(l).values());
    return 0 === i.length
        ? null
        : (0, s.jsxs)(iT.Ip, {
              className: ef()(lK.popover, iY.kL),
              children: [
                  (0, s.jsx)("div", { className: iY.oT, children: (0, s.jsx)(iW, { channel: t }) }),
                  (0, s.jsx)("div", { className: iY.zN }),
                  i.map((e, l) =>
                      (0, s.jsx)(
                          iF,
                          { embeddedApp: e, presenceActivity: e.presenceActivity ?? void 0, channel: t, onAction: n },
                          l,
                      ),
                  ),
              ],
          });
}
class iX extends n_ {
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
        ld.A.preload(t ?? F.ME, e.id);
    };
    renderPopout = (e) => {
        let { channel: t, sorting: n, embeddedApps: l, channelIsContentGated: i } = this.props,
            { shouldShowActivities: r } = this.state;
        return t.isModeratorReportChannel() || i
            ? null
            : null != l && l.length > 0 && r && !n
              ? (0, s.jsx)(iq, { onAction: this.handleActivitiesPopoutClose, channel: t })
              : (0, s.jsx)(iy, { ...e, channel: this.props.channel });
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
                    n.e("53416"),
                    n.e("60200"),
                ]).then(n.bind(n, 4027));
                return (n) => (0, s.jsx)(e, { ...n, channel: t, selected: !0 });
            });
        if (t.type === F.rbe.DM) {
            let l = lk.default.getUser(t.getRecipientId());
            null != l &&
                (0, eL.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("63434"),
                        n.e("6274"),
                        n.e("23531"),
                        n.e("94881"),
                        n.e("26132"),
                        n.e("46652"),
                        n.e("93190"),
                        n.e("34552"),
                        n.e("93103"),
                        n.e("8757"),
                        n.e("91763"),
                        n.e("89673"),
                        n.e("85968"),
                        n.e("68403"),
                        n.e("29787"),
                        n.e("71210"),
                        n.e("82073"),
                        n.e("97558"),
                        n.e("88342"),
                        n.e("91994"),
                        n.e("38730"),
                        n.e("42451"),
                        n.e("76665"),
                        n.e("98965"),
                        n.e("35313"),
                        n.e("76273"),
                        n.e("36564"),
                        n.e("34971"),
                        n.e("45996"),
                        n.e("792"),
                        n.e("92822"),
                        n.e("23427"),
                        n.e("29422"),
                        n.e("9291"),
                        n.e("74610"),
                        n.e("38056"),
                        n.e("7059"),
                        n.e("8829"),
                        n.e("42339"),
                        n.e("16054"),
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
        let l = tu.A.getGuild(t.getGuildId());
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
                forceTopLevelThread: p,
                embeddedApps: f,
                resolvedUnreadSetting: C,
                enableActivities: E,
                showMenuItemPopover: x,
                markMenuItemPopoverAsDismissed: N,
                channelItemRef: _,
                isSuggestedSection: S,
            } = this.props,
            I = _ ?? this.channelItemRef,
            b = !x && a,
            G = !x && E && null != f && f.length > 0,
            R = iC(m),
            v = (0, s.jsxs)("li", {
                className: ef()(this.getClassName(), { [ed.r9]: this.isDisabled(), [ed.wH]: n }),
                "data-dnd-name": (0, tq.m1)(e, lk.default, l3.A),
                onMouseEnter: b || G ? this.handleMouseEnter : void 0,
                onMouseLeave: b || G ? this.handleMouseLeave : void 0,
                children: [
                    (0, s.jsx)(lR.Y, {
                        targetElementRef: I,
                        position: "right",
                        renderPopout: this.renderPopout,
                        onRequestClose: this.handleClosePopout,
                        spacing: 17,
                        shouldShow: (b && this.state.shouldShowThreadsPopout) || (G && this.state.shouldShowActivities),
                        children: () =>
                            (0, s.jsxs)(nS.Ay, {
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
                                channelTypeOverride: p ? F.rbe.GUILD_TEXT : void 0,
                                resolvedUnreadSetting: C,
                                transitionExtras: S ? { source: lq.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
                                "aria-label": (0, lM.Ay)({
                                    channel: e,
                                    unread: i,
                                    mentionCount: o,
                                    isSubscriptionGated: A,
                                    embeddedActivitiesCount: f?.length,
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
                    x && (0, s.jsx)(iE.A, { targetElementRef: I, markMenuItemPopoverAsDismissed: N }),
                ],
            });
        return h ? d(c(v)) : v;
    }
}
let iZ = tY(iX);
function iJ(e) {
    let { channel: t, guild: n, disableSorting: l, isFavoriteCategory: i, muted: a, selected: o } = e,
        { hasActiveThreads: d, hasMoreActiveThreads: c } = (0, iN.NR)(t),
        h = (0, u.cf)([nX.Ay], () => ({
            unread: nX.Ay.hasUnread(t.id),
            ackMessageId: nX.Ay.ackMessageId(t.id),
            isLowImportanceMention: nX.Ay.getIsMentionLowImportance(t.id),
        })),
        A = (0, u.bG)([tO.Ay], () => tO.Ay.resolveUnreadSetting(t)),
        g = (0, u.cf)([eq.A, B.A], () => {
            let e = eq.A.getChannel(t.parent_id);
            return {
                canManageChannel: B.A.can(F.xBc.MANAGE_CHANNELS, t),
                canReorderChannel:
                    !0 !== l &&
                    (n.id === nl.Vc ||
                        (null != e ? B.A.can(F.xBc.MANAGE_CHANNELS, e) : B.A.can(F.xBc.MANAGE_CHANNELS, n))),
            };
        }),
        m = (0, u.bG)([nq.A], () => nq.A.shouldIndicateNewChannel(n.id, t.id)),
        { needSubscriptionToAccess: p, isSubscriptionGated: f } = (0, lT.A)(t.id),
        C = (0, u.bG)([tO.Ay], () => tO.Ay.isFavorite(n.id, t.id)),
        E = (0, ip.ni)(t),
        x = (0, im.Gp)(t.id),
        N = ir({
            channel: t,
            isChannelCollapsed: !1,
            isChannelSelected: o,
            isSubscriptionGated: f,
            needSubscriptionToAccess: p,
            isNewChannel: m,
            muted: a,
            enableActivities: x,
            resolvedUnreadSetting: A,
        }),
        _ = (0, l2.Ay)(t),
        [S, I] = r.useState(!1),
        b = (0, ig.K)(
            r.useCallback((e) => {
                I(e);
            }, []),
        ),
        { showMenuItemPopover: G, markMenuItemPopoverAsDismissed: R } = (0, ix.z)({
            location: "TextChannel",
            isChannelSelected: o,
            isTargetInViewport: S,
            channelType: t.type,
            isPopoverAllowed: n.id !== nl.Vc,
        });
    return (0, u.bG)([iS.A, i_.Ay], () => iS.A.getChannelId() !== t.id && i_.Ay.isCurrentUserGuest(t.getGuildId()))
        ? null
        : (0, s.jsx)(iZ, {
              ...h,
              ...g,
              ...e,
              hasActiveThreads: d,
              hasMoreActiveThreads: c,
              isSubscriptionGated: f,
              needSubscriptionToAccess: p,
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
var i$ = n(900797),
    iQ = n(250719),
    i0 = n(636585),
    i1 = n(531685),
    i3 =
        (((i = {}).HIDDEN = "hidden"),
        (i.UNREAD = "unread"),
        (i.MENTIONS = "mentions"),
        (i.VOICE_CHANNELS = "voice-channels"),
        i);
let i2 = { mode: "hidden", mentionCount: 0, targetChannelId: null },
    i9 = { topBar: i2, bottomBar: i2 },
    i5 = {},
    i7 = {};
function i6(e) {
    let t = eq.A.getChannel(e);
    return (
        !(null == t || null == t.getGuildId() || t.isGuildVocal()) &&
        !(t.isThread() ? lc.A.isMuted(t.id) : tO.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, eW.Y)(t)
    );
}
function i4(e) {
    let t = eq.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let l = tO.Ay.isGuildCollapsed(n),
        i = tO.Ay.isChannelMuted(n, t.id);
    return (!l || !i) && nX.Ay.getMentionCount(e) > 0;
}
function i8(e) {
    return (
        !tO.Ay.isChannelMuted(e.guild_id, e.id) &&
        (e.isGuildStageVoice()
            ? eQ.A.getMutableParticipants(e.id, e0.ip.SPEAKER).length > 0
            : eX.Ay.getVoiceStatesForChannel(e).length > 0)
    );
}
function se(e) {
    let { guildChannels: t } = e8.A.getGuildWithoutChangingGuildActionRows(e),
        n = t.getChannels(i7[e] ?? []);
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
            ((i6(t.id) || o().some(t.threadIds, i6)) && (d = !1),
            (i4(t.id) || o().some(t.threadIds, i4)) && (a = !1),
            h.includes(t.id) && (c = !0),
            !d && !a && c)
        )
            break;
    }
    let p = 0,
        f = !1,
        C = 0,
        E = !1;
    if (d || a)
        for (let e = A.length - 1; e >= 0; e--) {
            let t = A[e];
            (i6(t.id) || o().some(t.threadIds, i6)) && (null == i && (i = t.id), (f = !0)),
                (i4(t.id) || o().some(t.threadIds, i4)) &&
                    (null == l && (l = t.id),
                    (p += nX.Ay.getMentionCount(t.id)),
                    (p += o().sumBy(t.threadIds, nX.Ay.getMentionCount)));
        }
    if (d || a)
        for (let e = 0; e < m.length; e++) {
            let t = m[e];
            if (!d && !a) break;
            (i6(t.id) || o().some(t.threadIds, i6)) && (null == r && (r = t.id), (E = !0)),
                (i4(t.id) || o().some(t.threadIds, i4)) &&
                    (null == s && (s = t.id),
                    (C += nX.Ay.getMentionCount(t.id)),
                    (C += o().sumBy(t.threadIds, nX.Ay.getMentionCount)));
        }
    let x = null,
        N = null,
        _ = u?.getChannelRecords() ?? [];
    a && C > 0
        ? (x = { mode: "mentions", mentionCount: C, targetChannelId: s })
        : !c && o().some(_, i8)
          ? (x = { mode: "voice-channels", mentionCount: 0, targetChannelId: null })
          : d && E && (x = { mode: "unread", mentionCount: 0, targetChannelId: r }),
        a && p > 0
            ? (N = { mode: "mentions", mentionCount: p, targetChannelId: l })
            : d && f && (N = { mode: "unread", mentionCount: 0, targetChannelId: i });
    let S = null != N && (null == x || ("mentions" !== x.mode && "mentions" === N.mode)),
        I = null != x && ("mentions" === x.mode || !S);
    return (i5[e] = { topBar: S ? (N ?? i2) : i2, bottomBar: I ? (x ?? i2) : i2 }), !0;
}
let st = o().throttle(se, 200);
function sn(e) {
    let { guildId: t } = e,
        n = tu.A.getGuild(t);
    return null != n && !!n.features.has(F.GuildFeatures.COMMUNITY) && st(t);
}
function sl(e) {
    let { id: t } = e,
        n = eq.A.getChannel(t);
    if (null == n) return !1;
    let l = tu.A.getGuild(n.guild_id);
    return null != l && !!l.features.has(F.GuildFeatures.COMMUNITY) && st(n.guild_id);
}
function si(e) {
    let { channel: t } = e,
        n = eq.A.getChannel(t.id);
    if (null == n) return !1;
    let l = tu.A.getGuild(t.guild_id);
    return null != l && !!l.features.has(F.GuildFeatures.COMMUNITY) && st(n.guild_id);
}
function ss(e) {
    let { channelId: t } = e,
        n = eq.A.getChannel(t);
    if (null == n) return !1;
    let l = tu.A.getGuild(n.guild_id);
    return (
        null != l && !!l.features.has(F.GuildFeatures.COMMUNITY) && e6.A.getGuildId() === n.guild_id && st(n.guild_id)
    );
}
function sr(e) {
    let { guildId: t } = e;
    return null != t && st(t);
}
class sa extends u.Ay.Store {
    static displayName = "ChannelListUnreadsStore";
    initialize() {
        this.waitFor(e8.A, eq.A, tu.A, lc.A, nX.Ay, e6.A, eX.Ay, eQ.A, tO.Ay);
    }
    getUnreadStateForGuildId(e) {
        return i5[e] ?? i9;
    }
}
let so = new sa(eU.h, {
    UPDATE_CHANNEL_LIST_DIMENSIONS: function (e) {
        let { guildId: t, channelIds: n } = e,
            l = tu.A.getGuild(t);
        return (
            null != l &&
            !!l.features.has(F.GuildFeatures.COMMUNITY) &&
            null != n &&
            !o().isEqual(i7[t], n) &&
            ((i7[t] = n), se(t))
        );
    },
    BULK_ACK: function (e) {
        let { channels: t } = e,
            n = !1;
        return (
            o()(t)
                .map((e) => {
                    let { channelId: t } = e;
                    return eq.A.getChannel(t)?.guild_id;
                })
                .filter(eZ.Vq)
                .uniq()
                .forEach((e) => {
                    let t = tu.A.getGuild(e);
                    null != t && t.features.has(F.GuildFeatures.COMMUNITY) && st(e) && (n = !0);
                }),
            n
        );
    },
    CHANNEL_ACK: ss,
    CHANNEL_DELETE: si,
    CHANNEL_LOCAL_ACK: ss,
    MESSAGE_ACK: ss,
    MESSAGE_CREATE: ss,
    MESSAGE_DELETE_BULK: ss,
    MESSAGE_DELETE: ss,
    PASSIVE_UPDATE_V2: function (e) {
        let t = tu.A.getGuild(e.guildId);
        return !!(e.channels.length > 0 && null != t && t.features.has(F.GuildFeatures.COMMUNITY)) && st(e.guildId);
    },
    RESORT_THREADS: ss,
    THREAD_CREATE: si,
    THREAD_DELETE: si,
    THREAD_LIST_SYNC: sn,
    THREAD_MEMBER_UPDATE: sl,
    THREAD_MEMBERS_UPDATE: sl,
    THREAD_UPDATE: si,
    BULK_CLEAR_RECENTS: sn,
    CATEGORY_COLLAPSE_ALL: sn,
    CATEGORY_EXPAND_ALL: sn,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = e6.A.getGuildId();
        if (null == n || !new Set(t.map((e) => e.guildId)).has(n)) return !1;
        let l = i5[n];
        return null != l && "voice-channels" === l.bottomBar.mode && st(n);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: sr,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: sr,
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: t } = e;
        for (let e of t) null != e.guild_id && st(e.guild_id);
    },
    USER_GUILD_SETTINGS_GUILD_UPDATE: sr,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: sr,
});
var sd = n(335543);
let sc = { friction: 30, tension: 300 };
function su(e) {
    let { guildChannels: t, jumpToVoiceChannels: n } = e,
        l = t.getCategoryFromSection(t.voiceChannelsSectionNumber),
        i = (0, iQ.A)(t.id),
        a = r.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), n();
            },
            [n],
        ),
        o = l?.getChannelRecords() ?? [],
        d = (0, nn.fK)({ channels: o, selectedChannelId: null, selectedVoiceChannelId: null, voiceStates: i });
    return (0, s.jsxs)(ee.D, {
        className: ef()(sd.M0, sd.OF),
        onClick: a,
        children: [
            (0, s.jsx)(S.H, { size: "custom", className: sd.Gs, width: 14, height: 14, color: "currentColor" }),
            (0, s.jsx)(N.E, {
                variant: "text-xs/semibold",
                className: sd.pM,
                children: z.intl.format(z.t["fDlr+F"], { count: d.length }),
            }),
            (0, s.jsx)(i0.A, {
                guildId: t.id,
                className: sd.J$,
                users: d.slice(0, 4),
                renderMoreUsers: () => null,
                max: 4,
                size: iG._3.SIZE_16,
            }),
        ],
    });
}
function sh(e) {
    let { position: t, guildChannels: n, guildChannelsVersion: l, jumpToVoiceChannels: i, jumpToChannel: a } = e,
        { bottomBar: o, topBar: d } = (0, u.cf)([so], () => so.getUnreadStateForGuildId(n.id)),
        c = (0, u.bG)([i1.A], () => i1.A.isFocused()),
        { mode: h, mentionCount: A, targetChannelId: g } = "bottom" === t ? o : d,
        m = h === i3.HIDDEN,
        p = (0, ey.z)(
            {
                to: { transform: m ? ("bottom" === t ? "translateY(180%)" : "translateY(-180%)") : "translateY(0%)" },
                config: sc,
            },
            c ? "respect-motion-settings" : "animate-never",
        ),
        f = r.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), null != g && a(g);
            },
            [a, g],
        );
    return (0, s.jsx)("div", {
        className: ef()(sd.kL, { [sd.Mn]: "top" === t, [sd.sQ]: "bottom" === t }),
        children: (0, s.jsx)(eM.animated.div, {
            className: sd.pK,
            style: p,
            "aria-hidden": m,
            children:
                h === i3.HIDDEN
                    ? (0, s.jsx)("div", { className: ef()(sd.M0, sd.Te) })
                    : h === i3.UNREAD
                      ? (0, s.jsxs)(ee.D, {
                            className: sd.M0,
                            onClick: f,
                            children: [
                                "bottom" === t
                                    ? (0, s.jsx)(tS.a, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: sd.z_,
                                          height: 14,
                                          width: 14,
                                      })
                                    : (0, s.jsx)(i$.t, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: sd.z_,
                                          height: 14,
                                          width: 14,
                                      }),
                                (0, s.jsx)(N.E, {
                                    variant: "text-xs/semibold",
                                    color: "interactive-text-default",
                                    className: sd.pM,
                                    children: z.intl.string(z.t.FCRiT3),
                                }),
                            ],
                        })
                      : h === i3.MENTIONS
                        ? (0, s.jsx)(ee.D, {
                              className: ef()(sd.M0, sd.vU),
                              onClick: f,
                              children: (0, s.jsx)(N.E, {
                                  variant: "text-xs/semibold",
                                  color: "badge-text-brand",
                                  className: sd.pM,
                                  children: z.intl.format(z.t.EQcLyp, { count: A }),
                              }),
                          })
                        : h === i3.VOICE_CHANNELS
                          ? (0, s.jsx)(su, { jumpToVoiceChannels: i, guildChannels: n, guildChannelsVersion: l })
                          : void 0,
        }),
    });
}
var sA = n(310953),
    sg = n(173860);
function sm(e) {
    let t = eq.A.getChannel(e);
    return (
        null != t &&
        null != t.getGuildId() &&
        !(t.isThread() ? lc.A.isMuted(t.id) : tO.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, eW.Y)(t)
    );
}
function sp(e) {
    let t = eq.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let l = tO.Ay.isGuildCollapsed(n),
        i = tO.Ay.isChannelMuted(n, t.id);
    return (!l || !i) && nX.Ay.getMentionCount(e) > 0;
}
let sf = r.forwardRef(function (e, t) {
    let { guildId: n, guildChannels: l, guildChannelsVersion: i, ...r } = e,
        a = (0, sA.W)(n, l, i, { withVoiceChannels: !1 }, { ignoreRecents: !0 }),
        o = (0, u.bG)([i1.A], () => i1.A.isFocused());
    return (0, s.jsx)(sg.A, { ref: t, ...r, isUnread: sm, isMentioned: sp, items: a, animate: o });
});
var sC = n(81466);
function sE(e) {
    let { guild: t, selected: l } = e,
        { hasUnread: i, mentionCount: r } = (0, u.cf)(
            [nX.Ay],
            () => ({
                hasUnread: nX.Ay.hasUnread(t.id, nI.P.GUILD_EVENT),
                mentionCount: nX.Ay.getMentionCount(t.id, nI.P.GUILD_EVENT),
            }),
            [t.id],
        ),
        a = (0, u.bG)([tO.Ay], () => tO.Ay.isMuteScheduledEventsEnabled(t.id));
    async function o() {
        await (0, $.openModalLazy)(async () => {
            let { default: e } = await Promise.all([
                n.e("38937"),
                n.e("52443"),
                n.e("63434"),
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
            (0, nK.Dr)(L.M.GUILD_HEADER_EVENT_UPSELL);
    }
    let d = (0, tA.Ay)(t.id),
        c = d.length > 0 ? z.intl.formatToPlainString(z.t.IBdqSu, { number: d.length }) : z.intl.string(z.t.tlopTM);
    return (0, s.jsx)(H.G, {
        id: `upcoming-events-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(sC.C, { size: "md", color: "currentColor", className: e }),
        text: c,
        selected: l,
        onClick: o,
        onContextMenu: (e) => {
            (0, eL.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("26386"), n.e("19990")]).then(n.bind(n, 221621));
                return (n) => (0, s.jsx)(e, { ...n, guildId: t.id });
            });
        },
        showUnread: i && !a,
        trailing: !a && r > 0 ? (0, s.jsx)(U.hV, { className: nB.Do, disableColor: !0, count: r }) : null,
    });
}
var sx = n(271683),
    sN = n(725613),
    s_ = n(262763),
    sS = n(857253),
    sI = n(22231),
    sb = n(241326),
    sG = n(750943),
    sR = n(743674),
    sv = n(888697),
    sj = n(26741),
    sM = n(493819),
    sy = n(722884),
    sL = n(844045),
    sT = n(31950);
function sU(e) {
    let { channel: t, imageUrl: l, animatedUrl: i, bannerHash: a, canModifyHangout: o } = e,
        d = (0, sR.S)(l),
        c = (0, Y.je)(t),
        u = (0, sj.P9)({ guildId: t.guild_id, channelId: t.id, bannerHash: a }),
        h = r.useCallback(() => {
            (0, sj.J_)({ guildId: t.guild_id, channelId: t.id }), (0, sy.A)({ channel: t });
        }, [t]),
        A = r.useCallback(() => {
            (0, sj.nK)({ guildId: t.guild_id, channelId: t.id }), (0, sv.e2)(t.id);
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
        className: sT.rs,
        onContextMenu: g,
        children: [
            (0, s.jsx)("div", {
                className: sT.ZS,
                style: null != d ? { backgroundColor: d } : void 0,
                children: (0, s.jsx)(sM.A, { imageUrl: l, animatedUrl: i, className: sT.Sl }),
            }),
            o
                ? (0, s.jsxs)("div", {
                      className: sT.n_,
                      children: [
                          (0, s.jsx)(Q.m, {
                              text: z.intl.string(sL.default.XJ4UpB),
                              children: (0, s.jsx)(ee.D, {
                                  className: sT.HF,
                                  onClick: h,
                                  children: (0, s.jsx)(sI.R, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                          (0, s.jsx)(Q.m, {
                              text: z.intl.string(sL.default.XV4qT6),
                              children: (0, s.jsx)(ee.D, {
                                  className: sT.HF,
                                  onClick: A,
                                  children: (0, s.jsx)(sb.u, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function sD(e) {
    let { channel: t } = e,
        n = (0, sj.dX)({ guildId: t.guild_id, channelId: t.id }),
        l = r.useCallback(() => {
            (0, sj.J_)({ guildId: t.guild_id, channelId: t.id }), (0, sy.A)({ channel: t });
        }, [t]);
    return (0, s.jsx)("div", {
        ref: n,
        className: sT._o,
        children: (0, s.jsxs)(ee.D, {
            className: sT.hH,
            onClick: l,
            children: [
                (0, s.jsx)(sG.X, { size: "xs", color: "currentColor" }),
                (0, s.jsx)(N.E, {
                    variant: "text-sm/medium",
                    color: "currentColor",
                    children: z.intl.string(sL.default.NGcIOF),
                }),
            ],
        }),
    });
}
function sO(e) {
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
            ? (0, s.jsx)(sU, {
                  channel: t,
                  imageUrl: c.imageUrl,
                  animatedUrl: c.animatedUrl,
                  bannerHash: c.bannerHash,
                  canModifyHangout: a,
              })
            : a
              ? (0, s.jsx)(sD, { channel: t })
              : null
        : null;
}
var sP = n(532622),
    sV = n(882840),
    sw = n(46054),
    sH = n(514416),
    sB = n(992595);
function sk(e) {
    let { channel: t, connected: n, hovered: l, subtitle: i, onClick: a } = e,
        o = (0, sV.l)(t),
        { enableHangoutWindow: d } = (0, W.Dm)({ guildId: t.guild_id, location: "VoiceChannelStatus" }),
        c = d && (0, Y.lr)(t),
        u = null != o && o.length > 0,
        h = (0, sP.Ay)(t, !0),
        A = null != i && i.length > 0;
    if (
        (r.useEffect(() => {
            u && li.default.track(F.HAw.VOICE_CHANNEL_TOPIC_VIEWED, { channel_id: t.id, guild_id: t.guild_id });
        }, [u, t.id, t.guild_id]),
        null == t.guild_id)
    )
        return null;
    let g = ef()(sH.Ui, n && h ? sH.BI : null);
    return u
        ? (0, s.jsx)(ee.D, {
              className: g,
              onClick: h ? a : void 0,
              children: (0, s.jsx)(N.E, {
                  variant: "text-xs/medium",
                  className: ef()(sH.qS, sB.PT),
                  children: (0, s.jsx)(tx.A, { children: sw.A.parseVoiceChannelStatus(o, !0, { channelId: t.id }) }),
              }),
          })
        : n && h && !c && (!A || l)
          ? (0, s.jsxs)(ee.D, {
                className: g,
                onClick: a,
                children: [
                    (0, s.jsx)(N.E, {
                        variant: "text-xs/medium",
                        className: sH.qS,
                        children: z.intl.string(z.t.Mgpxiw),
                    }),
                    (0, s.jsx)(sI.R, { color: "currentColor", className: sH.rD, size: "xxs" }),
                ],
            })
          : A
            ? (0, s.jsx)(tx.A, { children: i })
            : null;
}
class sF extends n_ {
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
        } = this.props;
        l && this.setState({ shouldShowGuildVerificationPopout: !0 });
        let a = s > 0;
        a && lv.A.updateChatOpen(n.id, !0),
            s_.A.handleVoiceConnect({
                channel: n,
                connected: t,
                needSubscriptionToAccess: i,
                routeDirectlyToChannel: a,
                locked: e,
                transitionExtras: r ? { source: lq.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
            });
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            l = tu.A.getGuild(t.getGuildId());
        null != l &&
            (0, eL.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("26132"),
                    n.e("46652"),
                    n.e("93190"),
                    n.e("93103"),
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
        return (0, nn.Pd)(e, lh.A, tu.A);
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
        null != t && (0, lL.V)(t) && (0, ly.Ze)(t), this.handleVoiceConnect();
    };
    handleVoiceStatusClick = (e) => {
        let { connected: t, channel: n } = this.props;
        t && (e.stopPropagation(), (0, sx.A)({ channel: n }));
    };
    renderSubtitle() {
        let { channel: e, connected: t } = this.props,
            n = iC(this.props.subtitle)?.subtitle,
            { hovered: l } = this.state;
        return (0, s.jsx)(sk, {
            onClick: this.handleVoiceStatusClick,
            channel: e,
            connected: t,
            subtitle: n,
            hovered: l,
        });
    }
    renderVoiceUsers() {
        let { channel: e, voiceStates: t, collapsed: n, withGuildIcon: l, tabIndex: i } = this.props;
        return (0, s.jsx)(lN.A, {
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
        return !(null != n && n.length > 0) || l ? null : (0, s.jsx)(sO, { channel: e, isConnected: t });
    }
    renderPopout = () => {
        let { channel: e } = this.props,
            { shouldShowGuildVerificationPopout: t } = this.state;
        return t
            ? (0, s.jsx)(lY, { type: lW.VOICE, guildId: e.guild_id, closePopout: this.closeGuildVerificationPopout })
            : null;
    };
    renderOpenChatButton = () => {
        let { channel: e, locked: t, forceShowButtons: n, isSuggestedSection: l } = this.props;
        if (!t)
            return (0, s.jsx)(Q.m, {
                asContainer: !0,
                text: z.intl.string(z.t.ZXxLQg),
                children: (0, s.jsx)(ee.D, {
                    className: ef()(ed.Xs, n ? ed.Tf : null),
                    onClick: () => {
                        lv.A.updateChatOpen(e.id, !0),
                            (0, lX.iN)(e.id, l ? { source: lq.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
                    },
                    "aria-label": z.intl.string(z.t.ZXxLQg),
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
        return this.isFull() && !e ? z.intl.string(z.t.rZfiNq) : null;
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
                embeddedApps: p,
                isSubscriptionGated: f,
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
                className: ef()(this.getModeClass(), { [ed.r9]: this.isDisabled(), [ed.fy]: _ }),
                "data-dnd-name": (0, tq.m1)(e, lk.default, l3.A),
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
                        children: (0, s.jsx)(lR.Y, {
                            targetElementRef: this.channelItemRef,
                            position: "right",
                            renderPopout: this.renderPopout,
                            onRequestClose: this.closeGuildVerificationPopout,
                            spacing: 17,
                            shouldShow: b,
                            children: () =>
                                (0, s.jsx)(Q.m, {
                                    text: this.getTooltipText(),
                                    children: (0, s.jsxs)(nS.Ay, {
                                        ref: this.channelItemRef,
                                        className: ed.Ki,
                                        iconClassName: ef()({ [ed.Gj]: m || x || G }),
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
                                        "aria-label": (0, lM.Ay)({
                                            channel: e,
                                            unread: l,
                                            mentionCount: r,
                                            voiceStates: I,
                                            embeddedActivitiesCount: p.length,
                                            isSubscriptionGated: f,
                                            voiceChannelStartTime: N,
                                        }),
                                        "aria-describedby": (function (e) {
                                            let { channel: t, embeddedApps: n } = e;
                                            if (t.type === F.rbe.GUILD_VOICE) {
                                                if (null != n && n.length > 0) {
                                                    let e = n.map((e) => e.application.name);
                                                    return z.intl.formatToPlainString(z.t.LmYuHT, {
                                                        activeActivities: e.join(", "),
                                                    });
                                                }
                                            }
                                        })({ channel: e, embeddedApps: p }),
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
                (R = (0, s.jsx)(t9.A, {
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
let sz = tY((0, lj.F)(sF));
function sK(e) {
    let {
            guild: t,
            channel: n,
            disableSorting: l,
            isFavoriteCategory: i,
            selected: r,
            collapsed: a,
            voiceStates: o,
        } = e,
        d = (0, u.cf)([nX.Ay], () => ({ unread: nX.Ay.hasUnread(n.id), mentionCount: nX.Ay.getMentionCount(n.id) })),
        c = (0, u.bG)([tO.Ay], () => tO.Ay.resolveUnreadSetting(n)),
        h = (0, u.cf)([eq.A, lB.A, B.A], () => {
            let e = eq.A.getChannel(n.parent_id),
                i = lB.A.getCheck(n.guild_id);
            return {
                canManageChannel: B.A.can(F.xBc.MANAGE_CHANNELS, n),
                canReorderChannel:
                    !0 !== l &&
                    (t.id === nl.Vc ||
                        (null != e ? B.A.can(F.xBc.MANAGE_CHANNELS, e) : B.A.can(F.xBc.MANAGE_CHANNELS, t))),
                canMoveMembers: B.A.can(F.xBc.MOVE_MEMBERS, n),
                locked: !B.A.can(F.xBc.CONNECT, n),
                bypassLimit: B.A.can(F.xBc.MOVE_MEMBERS, n),
                unverifiedAccount: !i.canChat,
            };
        }),
        A = (0, u.bG)([lh.A], () => lh.A.hasVideo(n.id)),
        g = (0, l2.Ay)(n),
        m = (0, tq.Ay)(n),
        p = (0, tA.Qs)(n.id),
        f = (0, u.bG)([sN.A], () => sN.A.getStartTime(n), [n]),
        { isSubscriptionGated: C, needSubscriptionToAccess: E } = (0, lT.A)(n.id),
        x = (0, sS.A)(),
        N = (0, u.bG)([tO.Ay], () => tO.Ay.isFavorite(t.id, n.id)),
        _ = e.connected || x?.channelId === n.id,
        { enableHighlight: S, enableWaveformIcon: I } = (0, ne.b)(t.id, "VoiceChannel"),
        b = null != o && o.length > 0,
        G = S && b,
        R = I && b,
        v = ir({
            channel: n,
            isChannelSelected: r,
            isChannelCollapsed: a,
            voiceStates: o,
            isSubscriptionGated: C,
            needSubscriptionToAccess: E,
            enableConnectedUserLimit: !0,
            enableActivities: !0,
        }),
        j = _ && null == v;
    return (0, s.jsx)(sz, {
        channelName: m,
        embeddedApps: g,
        embeddedActivityType: F.$pd.PLAYING,
        video: A,
        hasActiveEvent: null != p,
        isSubscriptionGated: C,
        needSubscriptionToAccess: E,
        ...d,
        ...h,
        ...e,
        connected: _,
        isFavoriteSuggestion: i && !N,
        forceShowButtons: j,
        channelInfo: v,
        resolvedUnreadSetting: c,
        hasChannelInfo: null != v,
        hasStartTime: null != f,
        voiceChannelStartTime: f,
        shouldHighlightChannel: G,
        shouldUseAnimatedWaveform: R,
    });
}
n(131955);
var sW = n(335993);
function sY(e) {
    return (
        h.A.modules.channels.NAME_LINE_HEIGHT.resolve({ density: e }) +
        2 * h.A.space.SPACE_XXS.resolve({ density: e }) +
        2
    );
}
class sq extends r.PureComponent {
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
        this.setState({ initialized: !0 }), (0, tt.Ei)(this.getVisibleChannels);
    }
    componentWillUnmount() {
        this.updateChannelListScroll.cancel();
    }
    componentDidUpdate(e, t) {
        let { scrollToChannel: n, guildId: l, selectedChannelId: i } = this.props,
            { initialized: s } = this.state,
            { scrollTop: r } = e5.A.getGuildDimensions(l);
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
                    a = s.threadOffset * sY(r);
                i.scrollIntoViewRect({ start: e + a, end: e + a + sY(r), padding: n, animate: t, callback: l });
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
                if (l < e4.bK || e.isPlaceholderRow(l, i)) return !1;
                let s = e.getChannelFromSectionRow(l, i);
                if (null == s) return !1;
                let { channel: r, category: a } = s;
                return (
                    !!(0, e9.ig)(r.record.type) &&
                    (!a.isCollapsed || !a.isMuted) &&
                    !r.isMuted &&
                    !!t.isItemVisible(l, i, !0) &&
                    (0, eW.Y)(r.record)
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
        if (e === e4.PU) return i;
        if (e === e4.bK) return t.features.has(F.GuildFeatures.HUB) ? 0 : i;
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
            let { hasDivider: d, canHaveVoiceSummary: c } = ni(n, r, t),
                u = d ? (a ? 9 : 12) : 0;
            if (!c || t === e4.PU) return u;
            let h = n.getNamedCategoryFromSection(t);
            return null == h ||
                !(function (e) {
                    let { category: t, voiceStates: n, selectedChannelId: l, selectedVoiceChannelId: i } = e;
                    return (
                        (function (e) {
                            let { category: t, voiceStates: n, selectedChannelId: l, selectedVoiceChannelId: i } = e;
                            return !0 !== tU.A.isCollapsed(t.record.id)
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
            a = sY(r);
        if (e === e4.PU) {
            let e = n.getGuildActionSection();
            return e.isEmpty()
                ? 0
                : e.getRow(t) === tE.n.GUILD_PREMIUM_PROGRESS_BAR
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
            a += sY(t);
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
            t4,
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
                    case e4.PU:
                        return "hoisted-spacer";
                    case e4.bK:
                        return "uncategorized-spacer";
                    case e4.HP:
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
        if (t === e4.PU) {
            let e = c.getGuildActionSection(),
                t = e.getRow(n);
            if (null == t) return null;
            switch (t) {
                case tE.n.GUILD_HUB_HEADER_OPTIONS:
                    return (0, s.jsx)(
                        q.A,
                        { guild: l, channel: e7.Ay.getDefaultChannel(l.id) },
                        tE.n.GUILD_HUB_HEADER_OPTIONS,
                    );
                case tE.n.GUILD_PREMIUM_PROGRESS_BAR:
                    let i = e.getRows();
                    return (0, s.jsx)(eK, { guild: l, withMargin: i.length > 1 }, tE.n.GUILD_PREMIUM_PROGRESS_BAR);
                case tE.n.GUILD_HOME:
                    return (0, s.jsx)(n$, { guild: l, selected: a === es.VV.GUILD_HOME }, tE.n.GUILD_HOME);
                case tE.n.GUILD_SCHEDULED_EVENTS:
                    return (0, s.jsx)(
                        sE,
                        { guild: l, selected: a === tE.n.GUILD_SCHEDULED_EVENTS },
                        tE.n.GUILD_SCHEDULED_EVENTS,
                    );
                case tE.n.GUILD_ROLE_SUBSCRIPTIONS:
                    return (0, s.jsx)(
                        n6,
                        { guild: l, selected: a === es.VV.ROLE_SUBSCRIPTIONS },
                        tE.n.GUILD_ROLE_SUBSCRIPTIONS,
                    );
                case tE.n.GUILD_SHOP:
                    return (0, s.jsx)(lo, { guild: l, selected: a === es.VV.GUILD_SHOP }, tE.n.GUILD_SHOP);
                case tE.n.GUILD_GAME_SHOP:
                    return (0, s.jsx)(nF, { guild: l, selected: a === es.VV.GAME_SHOP }, tE.n.GUILD_GAME_SHOP);
                case tE.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
                    return (0, s.jsx)(n2, { guild: l });
                case tE.n.CHANNELS_AND_ROLES:
                    return (0, s.jsx)(
                        nZ,
                        { guild: l, selected: a === es.VV.CHANNEL_BROWSER || a === es.VV.CUSTOMIZE_COMMUNITY },
                        tE.n.CHANNELS_AND_ROLES,
                    );
                case tE.n.GUILD_DIRECTORY:
                    return (0, s.jsx)(
                        nb,
                        { guild: l, selectedChannelId: a, disableManageChannels: h },
                        tE.n.GUILD_DIRECTORY,
                    );
                case tE.n.GUILD_MOD_DASH_MEMBER_SAFETY:
                    return (0, s.jsx)(
                        K,
                        { guild: l, selected: a === es.VV.MEMBER_SAFETY },
                        tE.n.GUILD_MOD_DASH_MEMBER_SAFETY,
                    );
                case tE.n.GUILD_BOOSTS:
                    return (0, s.jsx)(ej, { guildId: l.id, selected: a === es.VV.GUILD_BOOSTS }, tE.n.GUILD_BOOSTS);
                case tE.n.GAME_SERVERS:
                    return (0, s.jsx)(em, { guildId: l.id, selected: a === es.VV.GAME_SERVERS }, tE.n.GAME_SERVERS);
                case tE.n.GAME_SERVERS_EMPTY:
                    return (0, s.jsx)(
                        ec,
                        { guildId: l.id, selected: a === es.VV.GAME_SERVERS },
                        tE.n.GAME_SERVERS_EMPTY,
                    );
                case tE.n.GUILD_OFFICIAL_MESSAGES:
                    return (0, s.jsx)(
                        n5,
                        { guild: l, selected: a === es.VV.GUILD_OFFICIAL_MESSAGES },
                        tE.n.GUILD_OFFICIAL_MESSAGES,
                    );
                default:
                    return null;
            }
        }
        if (c.isPlaceholderRow(t, n)) return null;
        let p = c.getChannelFromSectionRow(t, n);
        if (null == p) return null;
        let { category: f, channel: C } = p,
            E = f instanceof e4.xu,
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
                            (0, s.jsx)(iJ, {
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
                                ? (0, s.jsx)(lG, {
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
                    ic,
                    {
                        channel: x,
                        guild: l,
                        position: C.position,
                        selected: a === C.id,
                        connected: d === C.id,
                        collapsed: C.isCollapsed || f.isCollapsed,
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
                    sK,
                    {
                        channel: x,
                        guild: l,
                        position: C.position,
                        selected: a === C.id,
                        connected: d === C.id,
                        collapsed: C.isCollapsed || f.isCollapsed,
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
                return (0, s.jsx)(iA, { channel: x, guild: l, position: C.position, selected: a === C.id }, N);
            case F.rbe.GUILD_CATEGORY:
                if (t !== c.voiceChannelsSectionNumber) return null;
                return (0, s.jsx)(t2, { channel: x }, `readonly-${x.id}`);
            case F.rbe.PUBLIC_THREAD:
            case F.rbe.PRIVATE_THREAD:
            case F.rbe.ANNOUNCEMENT_THREAD:
                return (0, s.jsx)(
                    iJ,
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
            nr,
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
                let { hasDivider: l, canHaveVoiceSummary: i } = ni(t, n, e);
                return `section-footer-${e}${l ? "-divider" : ""}${i ? "-voice-summary" : ""}`;
            })(t, n, o),
        );
    };
    renderTopUnread() {
        let { topMention: e, bottomUnread: t, bottomMention: n, isUnreadVisible: l } = this.state,
            { guildId: i, guildChannels: r, guildChannelsVersion: a } = this.props;
        return (0, s.jsx)("div", {
            className: t6.Eo,
            children: (0, s.jsx)(sf, {
                ref: this.unreadTopRef,
                textUnread: z.intl.string(z.t.FCRiT3),
                textMention: z.intl.string(z.t["8zH0LJ"]),
                hide: null == e && (l || null != t || null != n),
                className: t6.Vq,
                barClassName: t6.bu,
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
        return (0, s.jsx)(sf, {
            reverse: !0,
            ref: this.unreadBottomRef,
            textUnread: z.intl.string(z.t.FCRiT3),
            textMention: z.intl.string(z.t["8zH0LJ"]),
            hide: null == l && i,
            className: t6.di,
            barClassName: t6.bu,
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
        if (e !== e4.PU) {
            if (null == t)
                return e === e4.HP
                    ? "favorites-header"
                    : e === n.recentsSectionNumber
                      ? "recents-header"
                      : e === n.voiceChannelsSectionNumber
                        ? "voice-channels"
                        : e === e4.bK
                          ? "uncategorized-header"
                          : n.getNamedCategoryFromSection(e)?.id;
            if (!n.isPlaceholderRow(e, t)) return n.getChannelFromSectionRow(e, t)?.channel?.id;
        }
    };
    renderList() {
        let { guildChannels: e, guildBanner: t, selectedGuildId: n, density: l } = this.props,
            i = {};
        (0, y.ai)(n) && (i["data-favorites"] = !0);
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
                        className: t6.XG,
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
                        innerAriaLabel: z.intl.string(z.t.OGiMXJ),
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
        if (!e2.A.shouldShow("voice-conversations")) return;
        let { guildChannels: e } = this.props,
            t = e.getFirstVoiceChannel();
        if (null == t) return void e3.X8("voice-conversations");
        let n = this._list;
        if (null != n)
            for (let { section: e, row: l } of this.getSectionRowsFromChannel(t.id))
                n.isItemVisible(e, l) || e3.X8("voice-conversations");
    };
    render() {
        let { guildChannels: e, guildChannelsVersion: t, showNewUnreadsBar: n } = this.props;
        return (0, s.jsx)(M.V0, {
            children: (l) =>
                (0, s.jsx)(p.F, {
                    component: (0, s.jsx)(f.A, {
                        children: (0, s.jsx)(p.H, { id: l, children: z.intl.string(z.t.OGiMXJ) }),
                    }),
                    children: n
                        ? (0, s.jsxs)(r.Fragment, {
                              children: [
                                  (0, s.jsx)("div", {
                                      className: t6.Eo,
                                      children: (0, s.jsx)(sh, {
                                          position: "top",
                                          guildChannels: e,
                                          guildChannelsVersion: t,
                                          jumpToVoiceChannels: this.jumpToVoiceChannels,
                                          jumpToChannel: this.jumpToChannel,
                                      }),
                                  }),
                                  this.renderList(),
                                  (0, s.jsx)(sh, {
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
let sX = (e) => {
    let { guildId: t, selectedChannelId: n, selectedVoiceChannelId: l } = e,
        i = (0, u.bG)([R.A], () => R.A.keyboardModeEnabled),
        { analyticsLocations: a } = (0, j.Ay)(v.A.GUILD_CHANNEL_LIST),
        o = (0, u.bG)([eq.A], () => eq.A.getChannel(n)),
        h = (0, u.bG)([eq.A], () => eq.A.getChannel(l)),
        A = (0, u.bG)([e6.A], () => e6.A.getGuildId()),
        g = (0, J.jN)(t),
        m = r.useRef(null),
        p = r.useCallback((e, t) => {
            let n = m.current;
            null != n &&
                (F.Ut1.test(t) || (0, es.jq)(t)
                    ? n.scrollToChannel(t, !1, 16, () => {
                          requestAnimationFrame(() => document.querySelector(e)?.focus());
                      })
                    : document.querySelector(e)?.focus());
        }, []),
        f = r.useCallback(
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
            setFocus: p,
            scrollToStart: f,
            scrollToEnd: C,
        }),
        x = E.setFocus;
    r.useEffect(() => {
        null != n && x(n);
    }, [n, x]);
    let N = (function (e) {
        let [t] = (0, u.bG)(
            [eQ.A, eq.A, eY.A],
            () => {
                let t;
                return [
                    (t =
                        e === F.YYv
                            ? e$.default
                                  .keys(eY.A.getFavoriteChannels())
                                  .map((e) => eq.A.getChannel(e))
                                  .filter(eZ.Vq)
                                  .filter((e) => e.isGuildStageVoice())
                            : eQ.A.getChannels(e)).reduce((e, t) => {
                        let n = eQ.A.getMutableParticipants(t.id, e0.ip.SPEAKER);
                        return (e[t.id] = n.filter((e) => e.type === e0.wY.VOICE).map(e1)), e;
                    }, {}),
                    t.reduce((e, t) => {
                        let { id: n } = t;
                        return e + eQ.A.getParticipantsVersion(n);
                    }, 0),
                ];
            },
            [e],
            eJ.D,
        );
        return t;
    })(t);
    return (0, s.jsx)(j.f5, {
        value: a,
        children: (0, s.jsx)(G.A, {
            section: F.JJy.GUILD_CHANNEL_LIST,
            children: (0, s.jsx)(d.hD, {
                navigator: E,
                children: (0, s.jsx)(sq, {
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
function sZ(e) {
    let { guildChannels: t, shouldShowEmptyState: n } = (0, te.D)(),
        { density: l } = (0, C.wR)();
    return n
        ? (0, s.jsx)("div", {
              className: t6.XG,
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
                                  children: z.intl.string(sW.default["1n0TGE"]),
                              }),
                              (0, s.jsx)(N.E, {
                                  variant: "text-sm/medium",
                                  color: "text-muted",
                                  children: z.intl.string(sW.default.Wwzrs9),
                              }),
                          ],
                      }),
                      (0, s.jsx)("div", { className: t6.ts }),
                      (0, s.jsxs)("div", {
                          className: t6.MS,
                          "aria-hidden": "true",
                          children: [
                              (0, s.jsxs)("div", {
                                  className: t6.pS,
                                  children: [
                                      (0, s.jsx)(_.N, { size: "xs", color: h.A.colors.ICON_MUTED }),
                                      (0, s.jsx)("div", { className: t6.Qs }),
                                  ],
                              }),
                              (0, s.jsxs)("div", {
                                  className: t6.pS,
                                  children: [
                                      (0, s.jsx)(S.H, { size: "xs", color: h.A.colors.ICON_MUTED }),
                                      (0, s.jsx)("div", { className: t6.iR }),
                                  ],
                              }),
                              (0, s.jsxs)("div", {
                                  className: t6.pS,
                                  children: [
                                      (0, s.jsx)(I.o, { size: "xs", color: h.A.colors.ICON_MUTED }),
                                      (0, s.jsx)("div", { className: t6.Qs }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : (0, s.jsx)(sX, { ...e, guildChannels: t, guildChannelsVersion: 0, withGuildIcon: !1, density: l });
}
function sJ(e) {
    let t = (function (e) {
            var t;
            let n,
                l,
                i =
                    ((t = e.id),
                    (n = (0, th.A)(t)),
                    (l = (0, tA.Ay)(t)),
                    !(0, u.bG)([tu.A], () => {
                        if (null == t) return !1;
                        let e = tu.A.getGuild(t);
                        return e?.features.has(F.GuildFeatures.HUB) ?? !1;
                    }, [t]) &&
                        (n || l.length > 0)),
                s = (0, ti.W)(e.id),
                r = (0, tc.vz)(e.id),
                a = (0, tl.r)(e),
                o = (0, tC.jz)(e),
                d = (0, to.d)(e.id),
                c = (0, tn.bG)([tr.h], () => tr.h.getNewMemberActions(e.id), [e.id]),
                h = (0, td.A)(e.id),
                A = (0, ta.jY)(e.id),
                g = (0, ts.fw)(e.id),
                m = [],
                p = e.features.has(F.GuildFeatures.HUB),
                f = e.features.has(F.GuildFeatures.COMMUNITY),
                C = e.features.has(F.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
                E = (0, ew.A)(e.id);
            tf.useConfig({ location: "useGuildActionRows" }).enabled;
            let x = eB(e),
                N = (0, tg.bW)(e.id, "useGuildActionRows"),
                _ = (0, tm.C$)(e.id, "useGuildActionRows"),
                S = e.features.has(F.GuildFeatures.GAME_SERVERS),
                I = (0, tp.N)("useGuildActionRows"),
                [b] = (0, el.kn)(_ && I && !S ? [L.M.EMPTY_GAME_SERVER_TAB] : [], void 0, !0);
            return (
                p && m.push(tE.n.GUILD_HUB_HEADER_OPTIONS),
                !A && d && h && null != c && c.length > 0
                    ? m.push(tE.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR)
                    : e.premiumProgressBarEnabled && x > 0 && m.push(tE.n.GUILD_PREMIUM_PROGRESS_BAR),
                !p && d && m.push(tE.n.GUILD_HOME),
                i && m.push(tE.n.GUILD_SCHEDULED_EVENTS),
                !p && f && m.push(tE.n.CHANNELS_AND_ROLES),
                r && m.push(tE.n.GUILD_ROLE_SUBSCRIPTIONS),
                a && m.push(tE.n.GUILD_SHOP),
                o && m.push(tE.n.GUILD_GAME_SHOP),
                ((g && (f || C)) || (s && e.features.has(F.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL))) &&
                    m.push(tE.n.GUILD_MOD_DASH_MEMBER_SAFETY),
                E && m.push(tE.n.GUILD_BOOSTS),
                N && m.push(tE.n.GUILD_OFFICIAL_MESSAGES),
                _ && (S ? m.push(tE.n.GAME_SERVERS) : null != b && m.push(tE.n.GAME_SERVERS_EMPTY)),
                m
            );
        })(e.guild),
        n = (0, u.cf)([e8.A], () => e8.A.getGuild(e.guildId, { guildActionRows: t })),
        { density: l } = (0, C.wR)();
    return (0, s.jsx)(sX, { ...e, ...n, density: l });
}
