n.d(t, { B: () => sZ, T: () => sX }), n(321073);
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
    T = n(554146),
    L = n(177953),
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
        d = (0, D.q8)(t.id, T.M.MEMBERS_LAUNCH_UPSELL);
    return (0, s.jsx)("div", {
        ref: d,
        children: (0, s.jsx)(H.G, {
            id: `members-${t.id}`,
            renderIcon: (e) => (0, s.jsx)(L.n, { size: "md", color: "currentColor", className: e }),
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
    eA = n(166978),
    eg = n(658809);
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
        p = r.useRef(null),
        f = h === T.M.GAME_SERVER_HOSTING_NEW_COACHMARK,
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
var eM = n(873174),
    ey = n(717421),
    eT = n(442433),
    eL = n(230135),
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
        d !== t.premiumSubscriberCount && (0, eL.u)(t.id, t.premiumSubscriberCount);
    }, [t.id, d, t.premiumSubscriberCount]);
    let c = r.useCallback(
        (e) => {
            a &&
                (0, eT.L3)(e, async () => {
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
    e6 = n(808728),
    e7 = n(967198),
    e8 = n(297469),
    e4 = n(960755),
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
    tT = n(422258),
    tL = n(770376),
    tU = n(924985),
    tD = n(769765);
n(667532);
var tO = n(111613);
function tP(e, t) {
    return null != e && null != t && (e === t || ((0, e9.tr)(e) && (0, e9.tr)(t)) || ((0, e9.ay)(e) && (0, e9.ay)(t)));
}
function tV(e, t, n, l) {
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
        if (tP(e.channel.type, n)) return e;
    }
    return null;
}
function tw(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (null == e) return 0;
    let l = null;
    return (
        t
            .filter((t) => {
                let {
                    channel: { type: l },
                } = t;
                return null != e && (n || tP(e.type, l));
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
function tH(e) {
    return { referenceId: e.id, parentId: e.parent_id };
}
function tB(e, t, n, l, i) {
    if (null == e || null == n) return null;
    let { GUILD_CATEGORY: s } = F.rbe;
    if (e.type === s)
        return l === t || (l < t && e.type === n.type)
            ? tH(n)
            : l > t
              ? (function (e, t, n) {
                    let { GUILD_CATEGORY: l } = F.rbe,
                        i = n[(tw(t, n, !0) ?? 0) + 1],
                        s = tV(-1, t.id, e.type, n);
                    return null == s || s.channel.id === e.id
                        ? null
                        : null == i || i.channel.type === l
                          ? { referenceId: s.channel.id, parentId: null }
                          : null;
                })(e, n, i)
              : null;
    if (tP(e.type, n.type)) return tH(n);
    if (l < t) {
        let t, l;
        if (n.type === s) {
            let t = i[(tw(n, i, !0) ?? 0) - 1],
                l = tV(1, n.id, e.type, i);
            if (null == t) return { referenceId: null, parentId: null };
            if (null != l) {
                if (tP(t.channel.type, e.type) || (e.isGuildVocal() && (0, e9.tr)(t.channel.type)))
                    return { referenceId: l.channel.id, parentId: t.channel.parent_id };
                if (t.channel.isCategory()) return { referenceId: l.channel.id, parentId: t.channel.id };
            }
            return null;
        }
        return (
            (t = i[(tw(n, i, !0) ?? 0) - 1]),
            (l = tV(1, n.id, e.type, i)),
            null != t || e.isGuildVocal()
                ? (0, e9.tr)(e.type) && null != l && ((0, e9.tr)(t.channel.type) || t.channel.isCategory())
                    ? { referenceId: l.channel.id, parentId: n.parent_id }
                    : null
                : { referenceId: null != l ? l.channel.id : null, parentId: null }
        );
    }
    if (n.type === s) {
        let t = i[(tw(n, i, !0) ?? 0) + 1],
            l = tV(-1, n.id, e.type, i);
        if (null != l) {
            if (null == t) return { referenceId: l.channel.id, parentId: n.id };
            if (tP(t.channel.type, e.type) || ((0, e9.tr)(e.type) && t.channel.isGuildVocal()))
                return { referenceId: l.channel.id, parentId: t.channel.parent_id };
            if (t.channel.isCategory()) return { referenceId: l.channel.id, parentId: n.id };
        }
        return null;
    }
    let r = i[(tw(n, i, !0) ?? 0) + 1],
        a = tV(-1, n.id, e.type, i);
    if (null == a) return null;
    if (e.isGuildVocal()) {
        if (null == r || r.channel.isCategory()) return { referenceId: a.channel.id, parentId: n.parent_id };
        if (r.channel.isGuildVocal()) return { referenceId: a.channel.id, parentId: r.channel.parent_id };
    }
    return e.isCategory() && (null == r || r.channel.isCategory())
        ? { referenceId: a.channel.id, parentId: null }
        : null;
}
var tk = n(488926);
let tF = "DRAGGABLE_GUILD_CHANNEL";
function tz(e, t) {
    if (null == e || null == t) return null;
    if (!(0, y.ai)(e)) return eq.A.getChannel(t);
    let n = e6.Ay.getChannels(e),
        l =
            n[e6.I6].find((e) => e.channel.id === t) ??
            n[e6.vM].find((e) => e.channel.id === t) ??
            n[F.rbe.GUILD_CATEGORY].find((e) => e.channel.id === t);
    return l?.channel;
}
function tK(e) {
    return (0, tR.T)(
        tF,
        {
            drop(e, t) {
                let n,
                    l = e7.A.getGuildId(),
                    i = t.getItem(),
                    r = tB(tz(l, i.id), i.position, e.channel, e.position, i.channelList);
                if (null == r) return;
                let a = tz(l, i.id);
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
                                        : tO.Ay.moveItemFromTo(t, i, s)),
                                (r = r.concat(
                                    tO.Ay.calculatePositionDeltas({
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
                        (i = tw(e, n)), (s = tw(t, n)), (a = d(n)).unshift(o[0]);
                    }
                    if ((0, e9.tr)(e.type) || e.isCategory()) {
                        let n = (0, tM.A)(a.length > 0 ? a : o, l, (e) => {
                            let {
                                channel: { type: t },
                            } = e;
                            return (0, e9.tr)(t);
                        });
                        (i = tw(e, n)), (s = tw(t, n)), d(n);
                    }
                    if (e.isGuildVocal() || e.isCategory()) {
                        let n = (0, tM.A)(a.length > 0 ? a : o, l, (e) => {
                            let { channel: t } = e;
                            return t.isGuildVocal();
                        });
                        (i = tw(e, n)), (s = tw(t, n)), d(n);
                    }
                    return (
                        e.parent_id !== n &&
                            null == r.find((t) => t.id === e.id && ((t.parent_id = n), !0)) &&
                            r.push({ id: e.id, parent_id: n }),
                        r
                    );
                })(a, tz(l, r.referenceId), r.parentId, o);
                if (0 !== c.length) {
                    if ((0, y.ai)(l)) return void (0, tT.zN)(c);
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
                                let l = tk.r(a, t),
                                    i = tk.r(a, eq.A.getChannel(a.parent_id));
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
                let i = tB(eq.A.getChannel(n.id), n.position, e.channel, e.position, n.channelList);
                if (null == i) return !1;
                if ((0, y.ai)(e7.A.getGuildId())) return !0;
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
            tF,
            {
                canDrag(e) {
                    let { channel: t } = e;
                    if ((0, y.ai)(e7.A.getGuildId())) return !0;
                    let l = tu.A.getGuild(t.getGuildId());
                    if (null == l) return !1;
                    if ((0, J.WW)(l.id) && B.A.can(F.xBc.MANAGE_CHANNELS, l))
                        return (
                            (0, tL.A)() &&
                                (0, $.openModalLazy)(async () => {
                                    let { default: e } = await Promise.all([n.e("57729"), n.e("24848")]).then(
                                        n.bind(n, 354643),
                                    );
                                    return (t) => (0, s.jsx)(e, { ...t });
                                }),
                            !1
                        );
                    if (t.type === F.rbe.GUILD_CATEGORY) return B.A.can(F.xBc.MANAGE_CHANNELS, l) && !(0, J.WW)(l.id);
                    let i = eq.A.getChannel(t.parent_id);
                    return (
                        (null != i && B.A.can(F.xBc.MANAGE_CHANNELS, i)) ||
                        (null == i && B.A.can(F.xBc.MANAGE_CHANNELS, l))
                    );
                },
                beginDrag(e) {
                    let {
                            channel: { id: t, parent_id: n, guild_id: l, type: i },
                            position: s,
                        } = e,
                        r = e7.A.getGuildId(),
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
var tW = n(47167),
    tY = n(485947),
    tq = n(543465),
    tX = n(551851),
    tZ = n(546980);
function tJ(e) {
    e.stopPropagation();
}
let t$ = tK(
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
                m = (0, u.bG)([tq.Ay], () => tq.Ay.isChannelMuted(l.getGuildId(), l.id)),
                p = (0, u.bG)([tU.A], () => tU.A.isCollapsed(l.id)),
                f = (0, u.bG)([B.A], () => B.A.can(F.xBc.MANAGE_CHANNELS, l)),
                C = (0, tW.Ay)(l);
            t = null != h ? (c > h ? tZ.mU : tZ.TR) : tZ.fx;
            let E = r.useCallback(() => {
                    p ? (0, tG.fh)(l.id) : (0, tG.Gv)(l.id);
                }, [l.id, p]),
                x = r.useCallback(
                    (e) => {
                        if ("null" !== l.id) {
                            let t = tu.A.getGuild(l.getGuildId());
                            null != t &&
                                (0, eT.L3)(e, async () => {
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
                                className: ef()(tZ.Ki, tZ.iE, { [tZ.yZ]: p, [tZ.SU]: m, [tZ.vk]: !0 }),
                                onContextMenu: x,
                                children: [
                                    (0, s.jsxs)(ee.D, {
                                        innerRef: b,
                                        className: tZ.rb,
                                        tabIndex: S,
                                        ...I,
                                        onClick: E,
                                        "aria-label": z.intl.formatToPlainString(z.t.y5l3J2, { categoryName: C }),
                                        "aria-expanded": !p,
                                        focusProps: { enabled: !1 },
                                        children: [
                                            (0, s.jsx)(tY.A, {
                                                className: tZ.UU,
                                                children: (0, s.jsx)(tx.A, { children: C }),
                                            }),
                                            A
                                                ? null
                                                : (0, s.jsx)(tS.a, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: tZ.Kk,
                                                  }),
                                        ],
                                    }),
                                    (0, s.jsx)("div", {
                                        onClick: tJ,
                                        className: tZ.Y_,
                                        children:
                                            f && !o
                                                ? (0, s.jsx)(Q.m, {
                                                      text: z.intl.string(z.t["fUYU+j"]),
                                                      children: (0, s.jsx)(ee.D, {
                                                          className: ef()(tZ.c9, tZ.ih),
                                                          onClick: N,
                                                          tabIndex: S,
                                                          role: "button",
                                                          "aria-label": z.intl.string(z.t["fUYU+j"]),
                                                          children: (0, s.jsx)(tI.T, {
                                                              size: "xs",
                                                              color: "currentColor",
                                                              className: tZ.hs,
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
    tQ = r.memo(function (e) {
        let { name: t, onDismiss: n, className: l } = e;
        return (0, s.jsx)("li", {
            className: ef()(l, tZ.fx),
            children: (0, s.jsxs)("div", {
                className: ef()(tZ.Ki, tZ._V),
                children: [
                    (0, s.jsx)("div", {
                        className: tZ.rb,
                        children: (0, s.jsx)(tY.A, { className: tZ.UU, children: (0, s.jsx)(tx.A, { children: t }) }),
                    }),
                    null != n
                        ? (0, s.jsx)(Q.m, {
                              asContainer: !0,
                              text: z.intl.string(z.t["5qNmsU"]),
                              children: (0, s.jsx)(ee.D, {
                                  className: tZ.r,
                                  onClick: n,
                                  children: (0, s.jsx)(tb.a, { size: "md", color: "currentColor", className: tZ.X8 }),
                              }),
                          })
                        : null,
                ],
            }),
        });
    }),
    t0 = r.memo(function (e) {
        let { category: t } = e,
            n = (0, u.bG)([tX.A], () => tX.A.isVoiceCategoryCollapsed(t.guild.id)),
            l = r.useCallback(() => {
                var e, l;
                n
                    ? ((e = t.guild.id), eU.h.dispatch({ type: "VOICE_CATEGORY_EXPAND", guildId: e, expand: !0 }))
                    : ((l = t.guild.id), eU.h.dispatch({ type: "VOICE_CATEGORY_COLLAPSE", guildId: l, expand: !1 }));
            }, [t.guild.id, n]);
        return (0, s.jsx)("div", {
            className: tZ.oA,
            children: (0, s.jsx)(tN.$, {
                variant: "secondary",
                fullWidth: !0,
                onClick: l,
                icon: S.H,
                text: n ? z.intl.string(z.t["/eB9Bg"]) : z.intl.string(z.t.Q2gPWl),
            }),
        });
    }),
    t1 = r.memo(function (e) {
        let { category: t, channel: n } = e,
            l = (0, u.bG)([tX.A], () => tX.A.isVoiceCategoryCollapsed(t.guild.id));
        return l || null == n || n.record.type === F.rbe.GUILD_CATEGORY
            ? l
                ? (0, s.jsx)("li", {
                      className: tZ.fx,
                      children: (0, s.jsx)("div", {
                          className: ef()(tZ.Ki, tZ._V),
                          children: (0, s.jsx)(tY.A, {
                              className: tZ.UU,
                              children: (0, s.jsx)(tx.A, { children: z.intl.string(z.t["V/u9Dy"]) }),
                          }),
                      }),
                  })
                : null
            : (0, s.jsx)("div", { style: { height: 16 } });
    }),
    t3 = r.memo(function (e) {
        let { channel: t } = e,
            n = (0, tW.Ay)(t);
        return (0, s.jsx)("li", {
            className: tZ.fx,
            children: (0, s.jsx)("div", {
                className: ef()(tZ.Ki, tZ._V),
                children: (0, s.jsx)(tY.A, { className: tZ.UU, children: (0, s.jsx)(tx.A, { children: n }) }),
            }),
        });
    });
var t2 = n(728321),
    t9 = n(244083);
let t5 = { origin: { x: -36, y: 7 }, targetWidth: 232, targetHeight: 40, offset: { x: 0, y: 0 } };
var t6 = n(121880);
let t7 = r.memo(function (e) {
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
            return (0, s.jsx)(tQ, { name: z.intl.string(z.t.mlPMCy) });
        case l.recentsSectionNumber:
            return (0, s.jsx)(tQ, { name: z.intl.string(z.t.gKcrqM), onDismiss: d });
        case l.voiceChannelsSectionNumber: {
            let e = l.getCategoryFromSection(l.voiceChannelsSectionNumber);
            if (null == e || e.isEmpty()) return null;
            let n = l.getChannelFromSectionRow(t, 0)?.channel;
            return (0, s.jsxs)(r.Fragment, {
                children: [(0, s.jsx)("div", { className: t6.ts }), (0, s.jsx)(t1, { category: e, channel: n })],
            });
        }
        case e8.TF: {
            let e = l.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, s.jsx)(t$, {
                channel: e.record,
                position: e.position,
                disableManageChannels: o,
                children: (0, s.jsx)(t2.A, {
                    inlineSpecs: t5,
                    arrowAlignment: t9.oN.TOP,
                    tutorialId: "organize-by-topic",
                    position: "right",
                }),
            });
        }
        default: {
            let e = l.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, s.jsx)(t$, { channel: e.record, position: e.position, disableManageChannels: o });
        }
    }
});
var t8 = n(104171),
    t4 = n(186369),
    ne = n(970812),
    nt = n(871237),
    nn = n(349828);
function nl(e, t, n) {
    return {
        hasDivider:
            !(function (e, t) {
                if (t === e8.PU) {
                    let t = e.getGuildActionSection().getRows();
                    return (
                        (1 === t.length && t[0] === tE.n.GUILD_PREMIUM_PROGRESS_BAR) ||
                        e.getGuildActionSection().isEmpty()
                    );
                }
                return 0 === e.getSections(!1)[t];
            })(e, n) &&
            (n === e8.PU ||
                (e.id === nn.Vc
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
let ni = r.memo(function (e) {
        let { guildChannels: t, guildChannelsVersion: n } = e,
            l = r.useMemo(() => t.getCategoryFromSection(t.voiceChannelsSectionNumber), [t, n]);
        return null == l ? null : (0, s.jsx)(t0, { category: l });
    }),
    ns = r.memo(function (e) {
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
            { hasDivider: h, canHaveVoiceSummary: A } = r.useMemo(() => nl(n, c, t), [n, c, t, l]),
            g = r.useMemo(() => (t === e8.PU ? null : n.getCategoryFromSection(t)), [n, t, l]),
            m = (0, J.jN)(a),
            { enableWaveformIcon: p } = (0, t4.b)(a, "ChannelListSectionFooter"),
            f = (0, u.yK)([tq.Ay], () => {
                if (null == g || !g.isCollapsed || !A) return [];
                let e = g.getChannelRecords(),
                    t = [];
                for (let n of e) {
                    if (!n.isGuildVocal()) continue;
                    let e = tq.Ay.isChannelOrParentOptedIn(a, n.id);
                    (!m || e) && t.push(n);
                }
                return t;
            }, [g, A, a, m]),
            C = r.useMemo(
                () => (0, nt.fK)({ channels: f, selectedChannelId: o, selectedVoiceChannelId: d, voiceStates: i }),
                [f, o, d, i],
            );
        if (t === n.voiceChannelsSectionNumber) return (0, s.jsx)(ni, { guildChannels: n, guildChannelsVersion: l });
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
                                  ? (e) => (0, s.jsx)(ne.A, { color: "currentColor", className: ef()(e, ed.Gj) })
                                  : void 0,
                          }),
                      }),
                      E,
                  ],
              })
            : E;
    });
var nr = n(625903),
    na = n(283973),
    no = n(933832),
    nd = n(435183),
    nc = n(698441),
    nu = n(855687),
    nh = n(816662),
    nA = n(446600),
    ng = n(616356);
function nm(e, t, n) {
    return null != t && !!t && !tP(n, e.type);
}
function np(e, t) {
    return null == t ? ed.fx : e > t ? ed.mU : ed.TR;
}
function nf(e) {
    let { channel: t, disableManageChannels: n, tabIndex: l, forceShowButtons: i, hasChannelInfo: r = !1 } = e;
    return (0, u.bG)(
        [B.A, e7.A],
        () =>
            n ||
            (0, y.ai)(e7.A.getGuildId()) ||
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
                      nd.Ay.open(t.id);
                  },
                  tabIndex: l,
                  "aria-label": z.intl.string(z.t["3gUsJb"]),
                  children: (0, s.jsx)(nr.Z, { size: "xs", color: "currentColor", className: ed.gE }),
              }),
          });
}
function nC(e) {
    let {
            channel: t,
            isDefaultChannel: l = !1,
            locked: i,
            tabIndex: a,
            forceShowButtons: o,
            hasChannelInfo: d = !1,
        } = e,
        c = (0, u.bG)([tu.A], () => tu.A.getGuild(t.getGuildId())),
        h = (0, u.bG)([nA.A], () => nA.A.getStageInstanceByChannel(t.id), [t.id]),
        A = (0, u.bG)([nc.Ay], () => nc.Ay.getActiveEventByChannel(t.id), [t.id]),
        g = (0, u.bG)([B.A], () => (0, nu.K)(B.A, c, t, h)),
        m = (0, u.bG)([], () =>
            t?.type === F.rbe.GUILD_VOICE ? z.intl.string(z.t["EE+P0H"]) : z.intl.string(z.t["0jeAXt"]),
        ),
        p = r.useRef(null);
    if (i || !g || t.isModeratorReportChannel() || t.isThread()) return null;
    let f = (0, s.jsx)(na.R, { size: "xs", className: ed.gE, "aria-hidden": !0, color: "currentColor" });
    return (
        l &&
            (f = (0, s.jsx)(t2.A, {
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
                        let e = ng.A.getAllActiveStreams().filter(
                            (e) => e.state !== F.XYD.ENDED && e.channelId === t.id,
                        );
                        (0, $.openModalLazy)(async () => {
                            let { default: l } = await Promise.all([
                                n.e("16639"),
                                n.e("49817"),
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
function nE(e) {
    let { channel: t } = e;
    return (0, s.jsx)(Q.m, {
        asContainer: !0,
        text: z.intl.string(z.t["ROh4T+"]),
        children: (0, s.jsx)(ee.D, {
            className: ed.Xs,
            onClick: () => {
                (0, nh.Ol)(t.guild_id, t.id);
            },
            "aria-label": z.intl.string(z.t["ROh4T+"]),
            children: (0, s.jsx)(et.P, { size: "xs", color: "currentColor", className: ed.gE }),
        }),
    });
}
function nx(e) {
    let { channel: t } = e;
    return (0, s.jsx)(Q.m, {
        asContainer: !0,
        text: z.intl.string(z.t["N2c/Un"]),
        children: (0, s.jsx)(ee.D, {
            className: ed.Xs,
            onClick: () => {
                (0, nh.jA)(t.guild_id, t.id, !0, { section: F.JJy.CHANNEL_LIST });
            },
            "aria-label": z.intl.string(z.t["N2c/Un"]),
            children: (0, s.jsx)(no.A, { size: "xs", color: "currentColor", className: ed.gE }),
        }),
    });
}
class nN extends r.PureComponent {
    static defaultProps = { isDefaultChannel: !1 };
    renderEditButton() {
        return (0, s.jsx)(nf, { ...this.props });
    }
    renderInviteButton() {
        return (0, s.jsx)(nC, { ...this.props });
    }
    renderRemoveSuggestionButton() {
        return (0, s.jsx)(nE, { ...this.props });
    }
    renderAcceptSuggestionButton() {
        return (0, s.jsx)(nx, { ...this.props });
    }
    getClassName() {
        let { position: e, sortingPosition: t } = this.props;
        return np(e, t);
    }
    isDisabled() {
        let { channel: e, sorting: t, sortingType: n } = this.props;
        return nm(e, t, n);
    }
}
var n_ = n(166444),
    nS = n(790782);
let nI = tK(function (e) {
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
        m = (0, u.bG)([eq.A, e6.Ay], () => {
            let e = e6.Ay.getDirectoryChannelIds(t.id);
            return 0 === e.length ? null : eq.A.getChannel(e[0]);
        }),
        p = (0, u.bG)([eq.A], () => eq.A.getChannel(m?.parent_id)),
        f = l === m?.id,
        C = (0, tW.Ay)(m),
        E = (0, u.bG)([B.A], () =>
            null != p ? B.A.can(F.xBc.MANAGE_CHANNELS, p) : null != t && B.A.can(F.xBc.MANAGE_CHANNELS, t),
        ),
        x = r.useCallback(
            (e) => {
                null != m &&
                    (0, eT.L3)(e, async () => {
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
    let N = np(i, c),
        _ = nm(m, o, d),
        S = (0, s.jsx)("div", {
            className: ef()(N, { [ed.r9]: _, [ed.wH]: f }),
            "data-dnd-name": C,
            children: (0, s.jsxs)(n_.Ay, {
                className: ed.Ki,
                channel: m,
                guild: t,
                selected: f,
                onContextMenu: x,
                forceInteractable: !0,
                resolvedUnreadSetting: nS.e.ONLY_MENTIONS,
                children: [
                    (0, s.jsx)(nC, { channel: m, tabIndex: g }),
                    (0, s.jsx)(nf, { channel: m, disableManageChannels: a, tabIndex: g }),
                ],
            }),
        });
    return E && (S = A(h(S))), S;
});
var nb = n(34188),
    nG = n(733391),
    nR = n(832163),
    nv = n(44724),
    nj = n(43105),
    nM = n(486318),
    ny = n(469611);
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
                return (0, nM.e)({
                    imageUrl: u.imageUrl,
                    backgroundImageUrl: u.backgroundImageUrl,
                    altText: z.intl.string(z.t["ulQB+t"]),
                    customClassNames: { containerClassName: ny.z, foregroundImageClassName: ny._ },
                });
        }
    }, [u]);
    return (0, s.jsx)(nj.A, {
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
var nL = n(770178),
    nU = n(206939);
let nD = Math.ceil(Math.sqrt(115200)),
    nO = (nD - 240) / 2,
    nP = r.forwardRef(function (e, t) {
        let { children: n } = e,
            [l, i] = r.useState(-1),
            a = r.useCallback((e) => {
                i(e.contentRect.width);
            }, []),
            o = (0, nL.w)(a, [], { fireOnMount: !0 }),
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
                            className: nU.q,
                            style: {
                                transform: d.to(
                                    (e) => `translateX(calc(${e * l}px + ${e * nD}px)) translateY(-50%) rotate(45deg)`,
                                ),
                            },
                        }),
                    ),
                [n, l, d],
            );
        return (
            r.useImperativeHandle(t, () => ({ onMouseEnter: u, onMouseLeave: h }), [u, h]),
            (0, s.jsx)("div", {
                className: nU.i,
                onMouseEnter: u,
                onMouseLeave: h,
                onFocus: u,
                onBlur: h,
                ref: o,
                style: { "--custom-shine-dimensions": "240px", "--custom-shine-rotated-dimensions-delta": `${nO}px` },
                children: A,
            })
        );
    });
var nV = n(371794),
    nw = n(998218),
    nH = n(645591),
    nB = n(377084);
let nk = r.memo(function (e) {
    let { guild: t, selected: l } = e,
        i = r.useRef(null),
        a = r.useRef(null),
        o = (0, $.useHasAnyModalOpen)(),
        d = (0, u.bG)([eh.A], () => eh.A.hasLayers()),
        c = (0, eu.xr)((e) => e.fullScreenLayers.length > 0);
    r.useEffect(() => {
        (0, nG.Kh)(t.id);
    }, [t.id]);
    let A = (0, u.bG)([nR.A], () => nR.A.getAnnouncement(t.id)),
        g = A?.state === "success" ? A.announcement : void 0,
        [m, p] = (0, el.x_)(T.M.GAME_SHOP_NEW_BADGE, t.id, g?.id ?? "", void 0, !0),
        f = m === T.M.GAME_SHOP_NEW_BADGE && null != g,
        [C, E] = (0, el.x_)(T.M.GAME_SHOP_NEW_DROP_POPOVER, t.id, g?.id ?? ""),
        x = C === T.M.GAME_SHOP_NEW_DROP_POPOVER && null != g;
    r.useEffect(() => {
        l && (f && p(er.i.INDIRECT_ACTION), x && E(er.i.INDIRECT_ACTION));
    }, [p, E, l, f, x]);
    let _ = r.useCallback(() => {
            p(er.i.TAKE_ACTION), E(er.i.TAKE_ACTION);
            let e = nR.A.getStorefrontState(t.id)?.activePage ?? 0;
            (0, ei.pX)(F.BVt.CHANNELS_GAME_SHOP(t.id, e));
        }, [t.id, p, E]),
        S = r.useCallback(() => {
            (0, nv.X)({ guildId: t.id, forceFetch: x });
        }, [t.id, x]),
        I = r.useCallback(() => {
            E(er.i.USER_DISMISS);
        }, [E]),
        b = r.useCallback(
            (e) => {
                null != t &&
                    (0, eT.L3)(e, async () => {
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
                    background: (0, s.jsx)("div", { className: nB.D }),
                    innerClassName: nB.Z,
                    ref: a,
                    id: `game-shop-${t.id}`,
                    renderIcon: (e) =>
                        (0, s.jsx)(nb.U, {
                            size: "custom",
                            color: "currentColor",
                            width: 20,
                            height: 20,
                            className: e,
                        }),
                    text: (0, s.jsx)(N.E, {
                        variant: "text-md/medium",
                        className: nH.UU,
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
                                ? nw.A.toURLSafe((0, nV.YE)(g.applicationId, g.assetId, 128, "webp"))
                                : void 0,
                        t =
                            null != g.backgroundImageAssetId
                                ? nw.A.toURLSafe((0, nV.YE)(g.applicationId, g.backgroundImageAssetId, 128, "webp"))
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
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(nP, { ref: i, children: R }), !o && !d && !c && j()] });
});
var nF = n(740426),
    nz = n(826673),
    nK = n(591552),
    nW = n(202776),
    nY = n(454058),
    nq = n(222823);
function nX(e) {
    let { guild: t, selected: l } = e,
        i = (0, nW.A)(t),
        a = (0, nz.JZ)(T.M.CHANNEL_BROWSER_NEW_BADGE_NUX),
        o = (0, tn.yK)([nY.A], () =>
            Array.from(nY.A.getNewChannelIds(t.id)).filter((e) => nY.A.shouldIndicateNewChannel(t.id, e)),
        ),
        d = (0, tn.bG)([nq.Ay], () => nq.Ay.hasUnread(t.id, nS.P.GUILD_ONBOARDING_QUESTION)),
        c = o.length > e8.rR,
        u = (0, tn.bG)([nK.A, nq.Ay], () => {
            let e = nK.A.lastFetchedAt(t.id),
                n = nq.Ay.lastMessageId(t.id, nS.P.GUILD_ONBOARDING_QUESTION);
            if (null == n) return !1;
            let l = e$.default.extractTimestamp(n);
            return null != e && e > l;
        }),
        A = r.useCallback(() => {
            (0, ei.pX)(F.BVt.CHANNEL(t.id, i ? es.VV.CUSTOMIZE_COMMUNITY : es.VV.CHANNEL_BROWSER));
        }, [t.id, i]),
        g = r.useCallback(
            (e) => {
                (0, eT.L3)(e, async () => {
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
            renderIcon: (e) => (0, s.jsx)(nF.k, { size: "md", color: "currentColor", className: e }),
            text: i ? z.intl.string(z.t.h9mGOP) : z.intl.string(z.t.et6wav),
            selected: l,
            onClick: A,
            onContextMenu: g,
            trailing: m,
        })
    );
}
var nZ = n(855473);
function nJ(e) {
    let { guild: t, selected: n } = e;
    return (0, s.jsx)(H.G, {
        id: `home-tab-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(nZ.Z, { size: "md", color: "currentColor", className: e }),
        text: z.intl.string(z.t.VbpLyU),
        selected: n,
        onClick: function () {
            (0, ei.pX)(F.BVt.CHANNEL(t.id, es.VV.GUILD_HOME));
        },
    });
}
var n$ = n(5373),
    nQ = n(65995),
    n0 = n(33011);
function n1(e, t) {
    return (0, s.jsx)(N.E, { variant: "text-xs/bold", color: "text-default", children: e }, t);
}
let n3 = r.memo(function (e) {
    let { guild: t } = e,
        n = (0, u.bG)([tr.h], () => tr.h.getNewMemberActions(t.id), [t.id]),
        l = (0, u.bG)([nQ.A], () => nQ.A.getCompletedActions(t.id)),
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
                className: n0.G9,
                onClick: function () {
                    (0, ei.pX)(F.BVt.CHANNEL(t.id, es.VV.GUILD_HOME));
                },
                children: [
                    (0, s.jsxs)("div", {
                        className: n0.A1,
                        children: [
                            (0, s.jsx)(x.D, { variant: "heading-sm/bold", children: z.intl.string(z.t.SnrR3x) }),
                            (0, s.jsxs)("div", {
                                className: n0.Ib,
                                children: [
                                    (0, s.jsx)(N.E, {
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        className: n0.Cv,
                                        children: z.intl.format(z.t.eqZ1lW, {
                                            numberHook: n1,
                                            total: a.toString(),
                                            completed: i.toString(),
                                        }),
                                    }),
                                    (0, s.jsx)(eV.A, {
                                        className: n0.UE,
                                        width: 16,
                                        height: 16,
                                        direction: eV.A.Directions.RIGHT,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, s.jsx)(n$.i, {
                        className: n0.hr,
                        foregroundGradientColor: [
                            h.A.unsafe_rawColors.GREEN_300.css,
                            h.A.unsafe_rawColors.GREEN_230.css,
                        ],
                        percent: (i / a) * 100 + 3,
                        animate: !0,
                    }),
                ],
            }),
            (0, s.jsx)("div", { role: "separator", className: n0.yF }),
        ],
    });
});
var n2 = n(581925);
function n9(e) {
    let { guild: t, selected: n } = e;
    return (0, s.jsx)(H.G, {
        id: `official-messages-page-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(n2.L, { size: "md", color: "currentColor", className: e }),
        text: z.intl.string(z.t["0C5w9r"]),
        selected: n,
        onClick: () => {
            (0, ei.pX)(F.BVt.CHANNEL(t.id, es.VV.GUILD_OFFICIAL_MESSAGES));
        },
    });
}
var n5 = n(514179);
function n6(e) {
    let { guild: t, selected: l } = e;
    return (0, s.jsx)(H.G, {
        id: `subscriptions-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(n5.A, { className: e }),
        text: z.intl.string(z.t["KzCF/6"]),
        selected: l,
        onClick: () => {
            (0, ei.pX)(F.BVt.CHANNEL(t.id, es.VV.ROLE_SUBSCRIPTIONS));
        },
        onContextMenu: (e) => {
            null != t &&
                (0, eT.L3)(e, async () => {
                    let { default: e } = await n.e("71911").then(n.bind(n, 978554));
                    return (n) => (0, s.jsx)(e, { ...n, guild: t });
                });
        },
    });
}
var n7 = n(506774),
    n8 = n(95561),
    n4 = n(289397),
    le = n(486418),
    lt = n(575926),
    ln = n(440293),
    ll = n(174459),
    li = n(634654),
    ls = n(391277);
function lr(e) {
    let { guildId: t, selected: n, handleClick: l } = e,
        i = (0, ln.w)(t),
        r = (0, tn.bG)([tu.A], () => tu.A.getGuild(t)),
        a = r?.features.has(F.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) === !0,
        o = "false" === n7.w.get(li.bJ, "false"),
        d = (0, tn.bG)([R.A], () => R.A.useReducedMotion);
    return (0, s.jsx)(H.G, {
        id: `shop-${t}`,
        className: ef()(ls.A2, { [ls.wH]: n, [ls.ST]: o }),
        innerClassName: ls.LE,
        renderIcon: (e) => (0, s.jsx)(lt.h, { width: 20, height: 20, className: ef()([e, ls.sV]) }),
        text: z.intl.string(z.t.al5EXL),
        selected: n,
        onClick: l,
        trailing: (0, s.jsxs)("div", {
            className: ls.ai,
            children: [
                d
                    ? (0, s.jsx)(U.Lp, {
                          color: h.A.unsafe_rawColors.BRAND_260.css,
                          text: z.intl.string(z.t.y2b7CA),
                          className: ls.Ad,
                      })
                    : (0, s.jsx)("img", {
                          src: (0, n4.n)("server_products/storefront/money.gif"),
                          className: ls.TG,
                          alt: "",
                      }),
                n &&
                    (0, s.jsx)(ee.D, {
                        className: ls.b,
                        onClick: (e) => {
                            e.stopPropagation(),
                                (0, nz.Dr)(T.M.SERVER_SHOP_PHANTOM_PREVIEW),
                                ll.default.track(F.HAw.GUILD_SHOP_PREVIEW_CLICK, {
                                    ...(0, n8.H$)(t),
                                    action_taken: li.hN.DISMISS_CHANNEL_ROW,
                                }),
                                (i && a) || (0, ei.bG)(F.BVt.CHANNEL(t, e6.Ay.getDefaultChannel(t)?.id));
                        },
                        "aria-label": z.intl.string(z.t.cpT0Cq),
                        children: (0, s.jsx)(tb.a, { size: "xs", color: "currentColor" }),
                    }),
            ],
        }),
    });
}
function la(e) {
    let { guild: t, selected: l } = e,
        i = (0, le.P)(t),
        r = () => {
            n7.w.set(li.bJ, "true"), (0, ei.pX)(F.BVt.CHANNEL(t.id, es.VV.GUILD_SHOP));
        };
    return i
        ? (0, s.jsx)(lr, { guildId: t.id, selected: l, handleClick: r })
        : (0, s.jsx)(H.G, {
              id: `shop-${t.id}`,
              renderIcon: (e) => (0, s.jsx)(lt.h, { width: 20, height: 20, className: e }),
              text: z.intl.string(z.t.al5EXL),
              selected: l,
              onClick: r,
              onContextMenu: (e) => {
                  null != t &&
                      (0, eT.L3)(e, async () => {
                          let { default: e } = await n.e("52565").then(n.bind(n, 345332));
                          return (n) => (0, s.jsx)(e, { ...n, guild: t });
                      });
              },
          });
}
var lo = n(308528),
    ld = n(152007),
    lc = n(747926),
    lu = n(977997);
function lh(e) {
    return null != e && e > 0;
}
var lA = n(405018),
    lg = n(428689),
    lm = n(852878);
function lp(e) {
    let { total: t, users: n, videoLimit: l } = e;
    return (0, s.jsxs)("div", {
        className: lm.iE,
        children: [
            (0, s.jsxs)("span", {
                className: ef()(lm.VV, { [lm.Ki]: l, [lm.$G]: n >= 100 }),
                children: [
                    l ? (0, s.jsx)(lg.n, { size: "md", color: "currentColor", className: lm.LB }) : null,
                    n.toString().padStart(2, "0"),
                ],
            }),
            (0, s.jsx)("span", {
                className: ef()(lm.X5, { [lm.$G]: t >= 100 }),
                children: t.toString().padStart(2, "0"),
            }),
        ],
    });
}
function lf(e) {
    let { channel: t, video: n, userCount: l } = e,
        { limit: i } = (0, lA.A)(t),
        r = -1,
        a = !1;
    return (
        t.userLimit > 0 && (r = t.userLimit),
        n && i > 0 && ((a = r < 0 || i < r), (r = r > 0 ? Math.min(r, i) : i)),
        (0, s.jsx)(lp, { users: l, total: r, videoLimit: a })
    );
}
var lC = n(701665);
function lE(e) {
    let { mentionsCount: t, isMentionLowImportance: n } = e;
    return (0, s.jsx)("div", {
        className: lC.R,
        "aria-hidden": !0,
        children: (0, s.jsx)(U.hV, {
            count: t,
            color: n ? h.A.colors.BACKGROUND_MOD_STRONG.css : h.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
        }),
    });
}
var lx = n(588224),
    lN = n(37411),
    l_ = n(998510);
function lS(e) {
    let { style: t, withGuildIcon: n, inverted: l } = e,
        i = { className: ef()(l_.GI, { [l_.a7]: n }, { [l_.BJ]: l }), style: t },
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
let lI = r.memo(function (e) {
        let { thread: t, isSelectedChannel: l, isSelectedVoice: i, isLast: a, withGuildIcon: o } = e,
            c = (0, u.bG)([eX.Ay], () => eX.Ay.getVoiceStatesForChannel(t), [t]),
            h = (0, u.bG)([lu.A], () => lu.A.hasVideo(t.id)),
            {
                unread: A,
                mentionCount: g,
                isMentionLowImportance: m,
            } = (0, u.cf)([nq.Ay], () => ({
                unread: nq.Ay.hasUnread(t.id),
                mentionCount: nq.Ay.getMentionCount(t.id),
                isMentionLowImportance: nq.Ay.getIsMentionLowImportance(t.id),
            })),
            p = (0, u.bG)([ld.A], () => ld.A.isMuted(t.id)),
            f = r.useCallback(
                (e) => {
                    (0, lc.JA)(t, !e.shiftKey, lN.H9.CHANNEL_LIST);
                },
                [t],
            ),
            C = r.useCallback(() => {
                lo.A.preload(t.guild_id, t.id);
            }, [t.guild_id, t.id]),
            E = r.useCallback(
                (e) => {
                    let l = eq.A.getChannel(t.id);
                    null != l &&
                        (0, eT.L3)(e, async () => {
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
                (0, s.jsx)(lS, { withGuildIcon: o }),
                a
                    ? null
                    : (0, s.jsx)(lS, {
                          withGuildIcon: o,
                          inverted: !0,
                          style: { transform: "rotateX(180deg) translateY(-9px)" },
                      }),
                (0, s.jsx)(t_.vN, {
                    focusTarget: S,
                    ringTarget: S,
                    offset: { top: 2, bottom: 2, right: 4 },
                    children: (0, s.jsxs)("div", {
                        className: ef()(ed.Ki, nH.iE, nH.ZS, {
                            [nH.J1]: l,
                            [nH.F4]: !l && p,
                            [nH.V2]: !p && !l && A,
                            [nH.lY]: o,
                        }),
                        onMouseDown: C,
                        onContextMenu: E,
                        children: [
                            !A || p || l ? null : (0, s.jsx)("div", { className: ef()(nH.gy, nH.WS) }),
                            (0, s.jsx)(ee.D, {
                                ..._,
                                innerRef: S,
                                className: nH.nf,
                                onClick: f,
                                "aria-label": I,
                                focusProps: { enabled: !1 },
                                children: (0, s.jsxs)("div", {
                                    className: ef()(nH.Y5, nH.__invalid_threadMainContent),
                                    children: [
                                        (0, s.jsx)(tx.A, { className: nH.UU, "aria-hidden": !0, children: t.name }),
                                        (0, s.jsxs)("div", {
                                            className: nH.Y_,
                                            children: [
                                                x > 0 && t.userLimit > 0
                                                    ? (0, s.jsx)(lf, { userCount: x, video: h, channel: t })
                                                    : null,
                                                lh(g)
                                                    ? (0, s.jsx)(lE, { mentionsCount: g, isMentionLowImportance: m })
                                                    : null,
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                }),
                (0, s.jsx)(lx.A, {
                    channel: t,
                    collapsed: !i && 1 !== c.length,
                    collapsedMax: 6,
                    voiceStates: c,
                    isThread: !0,
                }),
            ],
        });
    }),
    lb = r.memo(function (e) {
        let { channel: t, selectedChannel: n, selectedVoiceChannelId: l, sortedThreadIds: i, withGuildIcon: r } = e,
            a = (0, tW.Ay)(t),
            { density: o } = (0, C.wR)(),
            d = (0, u.yK)([eq.A], () => i.map((e) => eq.A.getChannel(e)).filter(eZ.Vq), [i]),
            c = (0, u.bG)([eX.Ay], () => {
                let e = d[d.length - 1];
                if (null == e) return 0;
                let t = eX.Ay.getVoiceStates(e.guild_id)[e.id];
                return null == t || 0 === t.length ? 0 : l !== e.id ? 40 : 32 * t.length + 8;
            });
        return (0, s.jsx)("li", {
            className: l_.kL,
            children: (0, s.jsxs)("ul", {
                role: "group",
                "aria-label": z.intl.formatToPlainString(z.t.EiyIi6, { channelName: a }),
                children: [
                    (0, s.jsx)("div", {
                        className: ef()(l_.eh, { [l_.ET]: r }),
                        style: { bottom: ("cozy" === o ? 28 : 24) + c },
                    }),
                    d.map((e, t) =>
                        (0, s.jsx)(
                            lI,
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
var lG = n(922016),
    lR = n(367513),
    lv = n(296216),
    lj = n(963027),
    lM = n(202384),
    ly = n(51758),
    lT = n(499211),
    lL = n(139033),
    lU = n(305866),
    lD = n(123292),
    lO = n(830215),
    lP = n(315982),
    lV = n(480900),
    lw = n(557722),
    lH = n(834942),
    lB = n(287809),
    lk = n(53516),
    lF = n(725673),
    lz = n(824078),
    lK = (((l = {})[(l.VOICE = 0)] = "VOICE"), l);
let lW = (e) => {
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
        } = (0, u.bG)([lH.A], () => lH.A.getCheck(l), [l]),
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
        : (0, s.jsxs)(lU.l, {
              className: ef()(lz.popover, lF.kL),
              "aria-labelledby": r,
              children: [
                  (0, s.jsx)("img", { alt: "", className: lF.Sl, src: n(303528) }),
                  (0, s.jsxs)("div", {
                      className: lF.Qs,
                      children: [
                          (0, s.jsx)(x.D, { variant: "heading-md/semibold", id: r, children: m }),
                          (0, s.jsx)(N.E, { color: "text-default", variant: "text-sm/normal", children: p }),
                          (0, s.jsxs)("div", {
                              className: lF.UD,
                              children: [
                                  null != f
                                      ? (0, s.jsx)("div", {
                                            "data-button-hoisted-classname-wrapper": !0,
                                            className: lF.FS,
                                            children: (0, s.jsx)(tN.$, {
                                                variant: "primary",
                                                text: f,
                                                onClick: () => {
                                                    a
                                                        ? lP.R()
                                                        : d
                                                          ? (0, $.openModalLazy)(
                                                                async () => {
                                                                    let { default: e } = await Promise.all([
                                                                        n.e("58735"),
                                                                        n.e("4782"),
                                                                        n.e("88566"),
                                                                        n.e("89545"),
                                                                        n.e("91531"),
                                                                        n.e("11493"),
                                                                        n.e("84704"),
                                                                    ]).then(n.bind(n, 615715));
                                                                    return (t) =>
                                                                        (0, s.jsx)(e, {
                                                                            reason: lw.d.GUILD_PHONE_REQUIRED,
                                                                            ...t,
                                                                        });
                                                                },
                                                                { modalKey: lk.V },
                                                            )
                                                          : o
                                                            ? (lO.A.verifyResend(),
                                                              (0, lL.A)({
                                                                  title: z.intl.string(z.t.LykQYk),
                                                                  subtitle: z.intl.format(z.t.azKEPy, {
                                                                      email: lB.default.getCurrentUser()?.email,
                                                                  }),
                                                              }))
                                                            : A && null != g && (0, lV.b)(g, l),
                                                        i();
                                                },
                                            }),
                                        })
                                      : null,
                                  a || d || o
                                      ? (0, s.jsx)(lD.Q, {
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
var lY = n(824865),
    lq = n(378570),
    lX = n(790535),
    lZ = n(113783),
    lJ = n(96566),
    l$ = n(495544),
    lQ = n(312006),
    l0 = n(505543),
    l1 = n(994500),
    l3 = n(685399),
    l2 = n(475889),
    l9 = n(85451),
    l5 = n(435470),
    l6 = n(35275),
    l7 = n(75879);
function l8(e) {
    let { locked: t } = e;
    return (0, s.jsx)("div", {
        className: ef()(ed.Xs, l7.U),
        children: (0, s.jsx)(l6.A, {
            className: ed.gE,
            color: t ? h.A.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css : void 0,
        }),
    });
}
var l4 = n(695633),
    ie = n(669715),
    it = n(137177),
    il = n(999436);
function ii(e) {
    let { className: t, embeddedApps: n, muted: l } = e;
    if (n.length <= 0) return null;
    {
        if (1 === n.length)
            return (0, s.jsx)("div", {
                className: ef()(il.kL, t, l && il.F4),
                children: (0, s.jsx)(it.A, { game: n[0].application, className: il.wK }),
            });
        let e = n.length - 1;
        return (0, s.jsxs)("div", {
            className: ef()(il.kL, t, l && il.F4),
            children: [
                (0, s.jsx)(it.A, { game: n[0].application, className: il.wK }),
                2 === n.length
                    ? (0, s.jsx)(it.A, { game: n[1].application, className: il.wK })
                    : (0, s.jsx)(N.E, {
                          className: il.ju,
                          variant: "text-xs/bold",
                          color: "interactive-text-active",
                          children: `+${e}`,
                      }),
            ],
        });
    }
}
function is(e) {
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
        m = (0, u.bG)([nq.Ay], () => nq.Ay.getMentionCount(t.id)),
        p = (0, u.bG)([nq.Ay], () => nq.Ay.getIsMentionLowImportance(t.id)),
        f = (0, l3.Ay)(t),
        C = (0, u.bG)([B.A], () => !B.A.can(F.xBc.CONNECT, t)),
        E = (0, l2.H)(t),
        x = (0, u.bG)([lu.A], () => lu.A.hasVideo(t.id)),
        _ = (0, lJ.qT)(t.id) && t.isGuildStageVoice(),
        S = (function (e) {
            let { channel: t, locked: n, video: l, selected: i } = e;
            return (
                (function (e) {
                    let { channel: t, video: n, considerMaxStageVoiceUserLimit: l = !0 } = e,
                        { limit: i } = (0, lA.A)(t),
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
        I = (0, u.bG)([l4.A], () => l4.A.getNewThreadCount(t.guild_id, t.id)),
        b = (0, l5.ed)(t.guild_id, t.id),
        G = (0, u.bG)([tu.A], () => tu.A.getGuild(t.guild_id)?.features.has(F.GuildFeatures.COMMUNITY) ?? !1);
    if (lh(m)) return (0, s.jsx)(lE, { mentionsCount: m, isMentionLowImportance: p });
    if (o) return (0, s.jsx)(l8, { locked: d });
    if (c) return (0, s.jsx)(U.Lp, { text: z.intl.string(z.t.y2b7CA), color: h.A.colors.BADGE_BACKGROUND_BRAND.css });
    if (!A && g === nS.e.ALL_MESSAGES && t.isForumLikeChannel() && null != I && I > 0)
        return (0, s.jsx)(N.E, {
            variant: "text-xs/semibold",
            color: "text-brand",
            children: z.intl.format(z.t.GkAbqY, { count: (0, U.Gu)(I) }),
        });
    if (!A && t.isForumLikeChannel() && null != b && b > 0)
        return (0, s.jsx)(N.E, { variant: "text-xs/semibold", color: "text-muted", children: (0, U.Gu)(b) });
    let R = i?.length ?? 0;
    return null != r && r && S
        ? (0, s.jsx)(lf, { userCount: R, video: x || _, channel: t })
        : l && (0, ie.t)(i) && G
          ? (0, s.jsx)(U.Lp, { text: z.intl.string(z.t.dI3q4h), color: h.A.unsafe_rawColors.RED_400.css })
          : null != E
            ? (0, s.jsx)(l9.z, { textColor: "text-feedback-positive", entry: { start: E } })
            : null != a && a && f.length > 0
              ? (0, s.jsx)(ii, { embeddedApps: f, muted: A })
              : null;
}
var ir = n(582630);
class ia extends nN {
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
        return (0, nt.Pd)(e, lu.A, tu.A);
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
        null != s && (0, ly.V)(s) && (0, lM.Ze)(s),
            l && this.setState({ shouldShowGuildVerificationPopout: !0 }),
            t || n || e.isRoleSubscriptionTemplatePreviewChannel() || (0, lX.av)(e),
            __OVERLAY__ || (0, lq.iN)(e.id, i ? { source: lY.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
    };
    handleClickChat = () => {
        let { channel: e, locked: t, isSuggestedSection: n } = this.props;
        __OVERLAY__ || t || (0, lq.iN)(e.id, n ? { source: lY.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            l = tu.A.getGuild(t.getGuildId());
        null != l &&
            (0, eT.L3)(e, async () => {
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
        return (0, s.jsx)(lx.A, { channel: e, voiceStates: l, collapsed: t, tabIndex: n, numAudience: i });
    }
    renderPopout = () => {
        let { channel: e } = this.props,
            { shouldShowGuildVerificationPopout: t } = this.state;
        if (t)
            return (0, s.jsx)(lW, {
                type: lK.VOICE,
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
                        lR.A.updateChatOpen(e.id, !0), this.handleClickChat();
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
                "data-dnd-name": (0, tW.m1)(e, lB.default, l1.A),
                children: [
                    (0, s.jsx)(lG.Y, {
                        targetElementRef: this.channelItemRef,
                        position: "right",
                        renderPopout: this.renderPopout,
                        spacing: 17,
                        onRequestClose: this.closeGuildVerificationPopout,
                        shouldShow: C,
                        children: () =>
                            (0, s.jsx)(Q.m, {
                                text: this.getTooltipText(),
                                children: (0, s.jsxs)(n_.Ay, {
                                    ref: this.channelItemRef,
                                    className: ed.Ki,
                                    iconClassName: ef()({ [ir.G]: null != u }),
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
                                    "aria-label": (0, lj.Ay)({
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
let io = tK((0, lv.F)(ia));
function id(e) {
    var t;
    let n,
        l,
        { guild: i, channel: r, disableSorting: a, isFavoriteCategory: o, collapsed: d, voiceStates: c } = e,
        h = (0, u.cf)([nq.Ay], () => ({ unread: nq.Ay.hasUnread(r.id), mentionCount: nq.Ay.getMentionCount(r.id) })),
        A = (0, u.bG)([tq.Ay], () => tq.Ay.resolveUnreadSetting(r)),
        g = (0, u.cf)([eq.A, lH.A, B.A], () => {
            let e = eq.A.getChannel(r.parent_id),
                t = lH.A.getCheck(r.guild_id);
            return {
                canManageChannel: null != i && B.A.can(F.xBc.MANAGE_CHANNELS, r),
                canReorderChannel:
                    !0 !== a &&
                    (i.id === nn.Vc ||
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
            (n = (0, l0.A)(t)),
            (l = (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return (0, u.cf)([lQ.Ay, l$.default], () => {
                    let n = l$.default.getId();
                    return lQ.Ay.getPermissionsForUser(n, e, t);
                }, [e, t]);
            })(t, !0).moderator),
            !n && l ? 1 : 0),
        f = (0, u.bG)([nA.A], () => nA.A.getStageInstanceByChannel(r.id), [r.id]),
        C = (0, lZ.zy)(r.id, e0.ip.AUDIENCE),
        { isSubscriptionGated: E, needSubscriptionToAccess: x } = (0, lT.A)(r.id),
        N = (0, u.bG)([tq.Ay], () => tq.Ay.isFavorite(i.id, r.id)),
        _ = (0, lJ.xn)(r.id),
        S = is({
            channel: r,
            isChannelSelected: !1,
            isChannelCollapsed: d,
            voiceStates: c,
            isSubscriptionGated: E,
            needSubscriptionToAccess: x,
            enableConnectedUserLimit: _ || (r.userLimit > 0 && r.userLimit < F.RCc),
        }),
        I = e.connected && null == S;
    return (0, s.jsx)(io, {
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
function ic(e, t) {
    let n = t.getGuildId();
    if (null == n) throw Error("TextChannel, preloadChannel: Channel does not have a guildId");
    lo.A.preload(n, t.id);
}
let iu = tK(
        class extends nN {
            handleContextMenu = (e) => {
                let { channel: t } = this.props,
                    l = tu.A.getGuild(t.getGuildId());
                null != l &&
                    (0, eT.L3)(e, async () => {
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
                        "data-dnd-name": (0, tW.m1)(e, lB.default, l1.A),
                        children: (0, s.jsxs)(n_.Ay, {
                            className: ed.Ki,
                            channel: e,
                            selected: t,
                            onClick: this.handleClick,
                            onMouseDown: ic,
                            onContextMenu: this.handleContextMenu,
                            connectDragPreview: r ? i : null,
                            "aria-label": (0, lj.Ay)({ channel: e }),
                            resolvedUnreadSetting: nS.e.ONLY_MENTIONS,
                            children: [this.renderInviteButton(), this.renderEditButton()],
                        }),
                    });
                return r ? n(l(a)) : a;
            }
        },
    ),
    ih = r.memo(function (e) {
        let { channel: t, guild: n, disableSorting: l } = e,
            i = (0, u.cf)([eq.A, B.A], () => {
                let e = eq.A.getChannel(t.parent_id);
                return {
                    canManageChannel: B.A.can(F.xBc.MANAGE_CHANNELS, t),
                    canReorderChannel:
                        !0 !== l && null != e ? B.A.can(F.xBc.MANAGE_CHANNELS, e) : B.A.can(F.xBc.MANAGE_CHANNELS, n),
                };
            });
        return (0, s.jsx)(iu, { ...i, ...e });
    });
var iA = n(172218),
    ig = n(811024),
    im = n(323073);
function ip(e) {
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
var iC = n(414808),
    iE = n(302005),
    ix = n(406704),
    iN = n(696451),
    i_ = n(763827),
    iS = n(56059),
    iI = n(163328),
    ib = n(778712),
    iG = n(730134),
    iR = n(707539),
    iv = n(486020),
    ij = n(550837);
function iM(e) {
    let { channel: t } = e,
        l = (0, u.yK)([l4.A, nq.Ay, B.A], () => {
            let e = l4.A.getActiveJoinedRelevantThreadsForParent(t.guild_id, t.id);
            return o()(l4.A.getActiveJoinedThreadsForParent(t.guild_id, t.id))
                .values()
                .map((e) => e.channel)
                .concat(o().values(l4.A.getActiveUnjoinedThreadsForParent(t.guild_id, t.id)))
                .filter((t) => !(t.id in e) && B.A.can(F.xBc.VIEW_CHANNEL, t))
                .sort((e, t) => {
                    let n = nq.Ay.lastMessageId(e.id),
                        l = nq.Ay.lastMessageId(t.id);
                    return e$.default.compare(n, l);
                })
                .reverse()
                .value();
        }),
        i = t.isForumLikeChannel() ? 5 : 3,
        a = t.isForumLikeChannel() ? iS.b : iI.y;
    return (
        r.useEffect(() => {
            (0, iR.TE)();
        }, []),
        (0, s.jsxs)("div", {
            className: ef()(lz.popover, ij.SW),
            children: [
                (0, s.jsx)(N.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: ij.DD,
                    children: t.isForumLikeChannel() ? z.intl.string(z.t.ioVdO2) : z.intl.string(z.t.VNYs2v),
                }),
                (0, s.jsxs)("div", {
                    className: ij.p_,
                    children: [
                        l
                            .slice(0, t.isForumLikeChannel() ? l.length : i)
                            .map((e) => (0, s.jsx)(iy, { thread: e }, e.id))
                            .filter((e) => r.isValidElement(e))
                            .slice(0, i),
                        (0, s.jsxs)(ee.D, {
                            className: ij.nM,
                            onClick: () => {
                                t.isForumLikeChannel()
                                    ? (0, lq.iN)(t.id)
                                    : (0, $.openModalLazy)(async () => {
                                          let { default: e } = await Promise.all([
                                              n.e("88566"),
                                              n.e("44890"),
                                              n.e("63336"),
                                              n.e("72813"),
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
                                    className: ij.R4,
                                    children: (0, s.jsx)(a, { size: "custom", className: ij.Kk }),
                                }),
                                (0, s.jsx)("div", {
                                    className: ij.Pf,
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
function iy(e) {
    let { thread: t } = e,
        n = (0, u.bG)([lB.default], () => lB.default.getUser(t.ownerId)),
        l = (0, iR.JO)(t);
    return (0, s.jsxs)(ee.D, {
        className: ij.nM,
        onClick: (e) => {
            (0, lc.JA)(t, t.isForumPost() ? e.shiftKey : !e.shiftKey, lN.H9.POPOUT);
        },
        children: [
            (0, s.jsx)("div", {
                className: ij.R4,
                children:
                    null == n
                        ? (0, s.jsx)("img", {
                              className: ij.my,
                              src: iv.Ay.getDefaultAvatarURL(void 0, void 0),
                              alt: "",
                          })
                        : (0, s.jsx)(iG.A, { className: ij.my, user: n, size: ib._3.SIZE_16 }),
            }),
            (0, s.jsxs)("div", {
                className: ij.Pf,
                children: [
                    (0, s.jsx)(N.E, { className: ij.UU, variant: "text-sm/normal", color: "none", children: t.name }),
                    (0, s.jsx)(N.E, { variant: "text-sm/normal", color: "text-muted", children: "\u2022" }),
                    (0, s.jsx)(N.E, {
                        className: ij.vE,
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: (0, iR.aK)(l),
                    }),
                ],
            }),
        ],
    });
}
var iT = n(364522),
    iL = n(302959),
    iU = n(35903),
    iD = n(970928),
    iO = n(427262),
    iP = n(456644);
let iV = t8.DN.SIZE_24;
function iw(e) {
    let { activity: t, embeddedApp: n } = e,
        l = t?.assets,
        i = t?.application_id;
    if (null == l || (null == l.large_image && null == l.small_image)) {
        let e = iv.Ay.getApplicationIconURL({ id: n.application.id, icon: n.application.icon }),
            t = n.application.name;
        return (0, s.jsx)(Q.m, {
            text: t,
            position: "top",
            asContainer: !0,
            children: (0, s.jsx)("img", { alt: t, src: e, className: iP.P3 }),
        });
    }
    let r = l.large_image ?? l.small_image;
    return null != r
        ? (0, s.jsx)("img", { alt: l.large_text ?? "", src: (0, iD.uD)(i, r, [128, 128]), className: iP.P3 })
        : null;
}
function iH(e) {
    let { activity: t, embeddedApp: n, channel: l } = e,
        i = Array.from(n.embeddedActivity.userIds),
        r = (0, u.yK)([lB.default], () => i.map((e) => lB.default.getUser(e)).filter(eZ.Vq));
    return (0, s.jsx)("div", {
        className: iP.ec,
        children: (0, s.jsxs)("div", {
            className: iP.Wh,
            children: [
                (0, s.jsx)(iw, { activity: t, embeddedApp: n }),
                (0, s.jsxs)("div", {
                    className: iP.X0,
                    children: [
                        (0, s.jsx)(x.D, {
                            variant: "heading-sm/semibold",
                            color: "text-strong",
                            className: iP.wx,
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
                                className: iP.TN,
                                guildId: l.guild_id,
                                users: r,
                                size: iV,
                                max: 7,
                                renderUser: (e) => {
                                    if (null == e || e === t8.mt) return null;
                                    let t = iO.Ay.getName(e);
                                    return (0, s.jsx)(
                                        Q.m,
                                        {
                                            asContainer: !0,
                                            text: t,
                                            position: "bottom",
                                            children: (0, s.jsx)("img", {
                                                src: e.getAvatarURL(l.guild_id, iV),
                                                alt: t,
                                                className: iP.my,
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
var iB = n(793425);
function ik(e) {
    let { channel: t, presenceActivity: n, embeddedApp: l, onAction: i } = e,
        r = Array.from(l.embeddedActivity.userIds),
        a = (0, u.bG)([lB.default], () => lB.default.getUser(r[0]));
    return null == a
        ? null
        : (0, s.jsxs)("div", {
              className: iB.Eb,
              children: [
                  (0, s.jsx)("div", {
                      className: iB.Il,
                      children: (0, s.jsx)(iH, { activity: n, embeddedApp: l, channel: t }),
                  }),
                  (0, s.jsx)("div", {
                      className: iB.M4,
                      children: (0, s.jsx)(iU.A, {
                          type: iL.M.VOICE_CHANNEL,
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
var iF = n(713654),
    iz = n(869552);
function iK(e) {
    let { channel: t } = e,
        n = (0, u.bG)([tu.A], () => tu.A.getGuild(t.guild_id)),
        l = (0, tW.Ay)(t),
        i = (0, iF.gU)(t, n);
    return null == i
        ? null
        : (0, s.jsxs)("div", {
              className: iz.hY,
              children: [
                  (0, s.jsx)(i, { className: iz.p }),
                  (0, s.jsx)(N.E, {
                      variant: "text-md/semibold",
                      color: "interactive-text-default",
                      className: iz.HA,
                      children: l,
                  }),
              ],
          });
}
var iW = n(802625);
function iY(e) {
    let { channel: t, onAction: n } = e,
        l = (0, l3.Ay)(t),
        i = Array.from((0, l3.Rz)(l).values());
    return 0 === i.length
        ? null
        : (0, s.jsxs)(iT.Ip, {
              className: ef()(lz.popover, iW.kL),
              children: [
                  (0, s.jsx)("div", { className: iW.oT, children: (0, s.jsx)(iK, { channel: t }) }),
                  (0, s.jsx)("div", { className: iW.zN }),
                  i.map((e, l) =>
                      (0, s.jsx)(
                          ik,
                          { embeddedApp: e, presenceActivity: e.presenceActivity ?? void 0, channel: t, onAction: n },
                          l,
                      ),
                  ),
              ],
          });
}
class iq extends nN {
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
        lo.A.preload(t ?? F.ME, e.id);
    };
    renderPopout = (e) => {
        let { channel: t, sorting: n, embeddedApps: l, channelIsContentGated: i } = this.props,
            { shouldShowActivities: r } = this.state;
        return t.isModeratorReportChannel() || i
            ? null
            : null != l && l.length > 0 && r && !n
              ? (0, s.jsx)(iY, { onAction: this.handleActivitiesPopoutClose, channel: t })
              : (0, s.jsx)(iM, { ...e, channel: this.props.channel });
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
            return void (0, eT.L3)(e, async () => {
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
            let l = lB.default.getUser(t.getRecipientId());
            null != l &&
                (0, eT.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("954"),
                        n.e("56377"),
                        n.e("7578"),
                        n.e("16639"),
                        n.e("88667"),
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
            return void (0, eT.L3)(e, async () => {
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
            (0, eT.L3)(e, async () => {
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
            R = ip(m),
            v = (0, s.jsxs)("li", {
                className: ef()(this.getClassName(), { [ed.r9]: this.isDisabled(), [ed.wH]: n }),
                "data-dnd-name": (0, tW.m1)(e, lB.default, l1.A),
                onMouseEnter: b || G ? this.handleMouseEnter : void 0,
                onMouseLeave: b || G ? this.handleMouseLeave : void 0,
                children: [
                    (0, s.jsx)(lG.Y, {
                        targetElementRef: I,
                        position: "right",
                        renderPopout: this.renderPopout,
                        onRequestClose: this.handleClosePopout,
                        spacing: 17,
                        shouldShow: (b && this.state.shouldShowThreadsPopout) || (G && this.state.shouldShowActivities),
                        children: () =>
                            (0, s.jsxs)(n_.Ay, {
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
                                transitionExtras: S ? { source: lY.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
                                "aria-label": (0, lj.Ay)({
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
                    x && (0, s.jsx)(iC.A, { targetElementRef: I, markMenuItemPopoverAsDismissed: N }),
                ],
            });
        return h ? d(c(v)) : v;
    }
}
let iX = tK(iq);
function iZ(e) {
    let { channel: t, guild: n, disableSorting: l, isFavoriteCategory: i, muted: a, selected: o } = e,
        { hasActiveThreads: d, hasMoreActiveThreads: c } = (0, ix.NR)(t),
        h = (0, u.cf)([nq.Ay], () => ({
            unread: nq.Ay.hasUnread(t.id),
            ackMessageId: nq.Ay.ackMessageId(t.id),
            isLowImportanceMention: nq.Ay.getIsMentionLowImportance(t.id),
        })),
        A = (0, u.bG)([tq.Ay], () => tq.Ay.resolveUnreadSetting(t)),
        g = (0, u.cf)([eq.A, B.A], () => {
            let e = eq.A.getChannel(t.parent_id);
            return {
                canManageChannel: B.A.can(F.xBc.MANAGE_CHANNELS, t),
                canReorderChannel:
                    !0 !== l &&
                    (n.id === nn.Vc ||
                        (null != e ? B.A.can(F.xBc.MANAGE_CHANNELS, e) : B.A.can(F.xBc.MANAGE_CHANNELS, n))),
            };
        }),
        m = (0, u.bG)([nY.A], () => nY.A.shouldIndicateNewChannel(n.id, t.id)),
        { needSubscriptionToAccess: p, isSubscriptionGated: f } = (0, lT.A)(t.id),
        C = (0, u.bG)([tq.Ay], () => tq.Ay.isFavorite(n.id, t.id)),
        E = (0, im.ni)(t),
        x = (0, ig.Gp)(t.id),
        N = is({
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
        _ = (0, l3.Ay)(t),
        [S, I] = r.useState(!1),
        b = (0, iA.K)(
            r.useCallback((e) => {
                I(e);
            }, []),
        ),
        { showMenuItemPopover: G, markMenuItemPopoverAsDismissed: R } = (0, iE.z)({
            location: "TextChannel",
            isChannelSelected: o,
            isTargetInViewport: S,
            channelType: t.type,
            isPopoverAllowed: n.id !== nn.Vc,
        });
    return (0, u.bG)([i_.A, iN.Ay], () => i_.A.getChannelId() !== t.id && iN.Ay.isCurrentUserGuest(t.getGuildId()))
        ? null
        : (0, s.jsx)(iX, {
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
var iJ = n(900797),
    i$ = n(250719),
    iQ = n(636585),
    i0 = n(531685),
    i1 =
        (((i = {}).HIDDEN = "hidden"),
        (i.UNREAD = "unread"),
        (i.MENTIONS = "mentions"),
        (i.VOICE_CHANNELS = "voice-channels"),
        i);
let i3 = { mode: "hidden", mentionCount: 0, targetChannelId: null },
    i2 = { topBar: i3, bottomBar: i3 },
    i9 = {},
    i5 = {};
function i6(e) {
    let t = eq.A.getChannel(e);
    return (
        !(null == t || null == t.getGuildId() || t.isGuildVocal()) &&
        !(t.isThread() ? ld.A.isMuted(t.id) : tq.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, eW.Y)(t)
    );
}
function i7(e) {
    let t = eq.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let l = tq.Ay.isGuildCollapsed(n),
        i = tq.Ay.isChannelMuted(n, t.id);
    return (!l || !i) && nq.Ay.getMentionCount(e) > 0;
}
function i8(e) {
    return (
        !tq.Ay.isChannelMuted(e.guild_id, e.id) &&
        (e.isGuildStageVoice()
            ? eQ.A.getMutableParticipants(e.id, e0.ip.SPEAKER).length > 0
            : eX.Ay.getVoiceStatesForChannel(e).length > 0)
    );
}
function i4(e) {
    let { guildChannels: t } = e4.A.getGuildWithoutChangingGuildActionRows(e),
        n = t.getChannels(i5[e] ?? []);
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
            (i7(t.id) || o().some(t.threadIds, i7)) && (a = !1),
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
                (i7(t.id) || o().some(t.threadIds, i7)) &&
                    (null == l && (l = t.id),
                    (p += nq.Ay.getMentionCount(t.id)),
                    (p += o().sumBy(t.threadIds, nq.Ay.getMentionCount)));
        }
    if (d || a)
        for (let e = 0; e < m.length; e++) {
            let t = m[e];
            if (!d && !a) break;
            (i6(t.id) || o().some(t.threadIds, i6)) && (null == r && (r = t.id), (E = !0)),
                (i7(t.id) || o().some(t.threadIds, i7)) &&
                    (null == s && (s = t.id),
                    (C += nq.Ay.getMentionCount(t.id)),
                    (C += o().sumBy(t.threadIds, nq.Ay.getMentionCount)));
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
    return (i9[e] = { topBar: S ? (N ?? i3) : i3, bottomBar: I ? (x ?? i3) : i3 }), !0;
}
let se = o().throttle(i4, 200);
function st(e) {
    let { guildId: t } = e,
        n = tu.A.getGuild(t);
    return null != n && !!n.features.has(F.GuildFeatures.COMMUNITY) && se(t);
}
function sn(e) {
    let { id: t } = e,
        n = eq.A.getChannel(t);
    if (null == n) return !1;
    let l = tu.A.getGuild(n.guild_id);
    return null != l && !!l.features.has(F.GuildFeatures.COMMUNITY) && se(n.guild_id);
}
function sl(e) {
    let { channel: t } = e,
        n = eq.A.getChannel(t.id);
    if (null == n) return !1;
    let l = tu.A.getGuild(t.guild_id);
    return null != l && !!l.features.has(F.GuildFeatures.COMMUNITY) && se(n.guild_id);
}
function si(e) {
    let { channelId: t } = e,
        n = eq.A.getChannel(t);
    if (null == n) return !1;
    let l = tu.A.getGuild(n.guild_id);
    return (
        null != l && !!l.features.has(F.GuildFeatures.COMMUNITY) && e7.A.getGuildId() === n.guild_id && se(n.guild_id)
    );
}
function ss(e) {
    let { guildId: t } = e;
    return null != t && se(t);
}
class sr extends u.Ay.Store {
    static displayName = "ChannelListUnreadsStore";
    initialize() {
        this.waitFor(e4.A, eq.A, tu.A, ld.A, nq.Ay, e7.A, eX.Ay, eQ.A, tq.Ay);
    }
    getUnreadStateForGuildId(e) {
        return i9[e] ?? i2;
    }
}
let sa = new sr(eU.h, {
    UPDATE_CHANNEL_LIST_DIMENSIONS: function (e) {
        let { guildId: t, channelIds: n } = e,
            l = tu.A.getGuild(t);
        return (
            null != l &&
            !!l.features.has(F.GuildFeatures.COMMUNITY) &&
            null != n &&
            !o().isEqual(i5[t], n) &&
            ((i5[t] = n), i4(t))
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
                    null != t && t.features.has(F.GuildFeatures.COMMUNITY) && se(e) && (n = !0);
                }),
            n
        );
    },
    CHANNEL_ACK: si,
    CHANNEL_DELETE: sl,
    CHANNEL_LOCAL_ACK: si,
    MESSAGE_ACK: si,
    MESSAGE_CREATE: si,
    MESSAGE_DELETE_BULK: si,
    MESSAGE_DELETE: si,
    PASSIVE_UPDATE_V2: function (e) {
        let t = tu.A.getGuild(e.guildId);
        return !!(e.channels.length > 0 && null != t && t.features.has(F.GuildFeatures.COMMUNITY)) && se(e.guildId);
    },
    RESORT_THREADS: si,
    THREAD_CREATE: sl,
    THREAD_DELETE: sl,
    THREAD_LIST_SYNC: st,
    THREAD_MEMBER_UPDATE: sn,
    THREAD_MEMBERS_UPDATE: sn,
    THREAD_UPDATE: sl,
    BULK_CLEAR_RECENTS: st,
    CATEGORY_COLLAPSE_ALL: st,
    CATEGORY_EXPAND_ALL: st,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = e7.A.getGuildId();
        if (null == n || !new Set(t.map((e) => e.guildId)).has(n)) return !1;
        let l = i9[n];
        return null != l && "voice-channels" === l.bottomBar.mode && se(n);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: ss,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: ss,
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: t } = e;
        for (let e of t) null != e.guild_id && se(e.guild_id);
    },
    USER_GUILD_SETTINGS_GUILD_UPDATE: ss,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: ss,
});
var so = n(335543);
let sd = { friction: 30, tension: 300 };
function sc(e) {
    let { guildChannels: t, jumpToVoiceChannels: n } = e,
        l = t.getCategoryFromSection(t.voiceChannelsSectionNumber),
        i = (0, i$.A)(t.id),
        a = r.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), n();
            },
            [n],
        ),
        o = l?.getChannelRecords() ?? [],
        d = (0, nt.fK)({ channels: o, selectedChannelId: null, selectedVoiceChannelId: null, voiceStates: i });
    return (0, s.jsxs)(ee.D, {
        className: ef()(so.M0, so.OF),
        onClick: a,
        children: [
            (0, s.jsx)(S.H, { size: "custom", className: so.Gs, width: 14, height: 14, color: "currentColor" }),
            (0, s.jsx)(N.E, {
                variant: "text-xs/semibold",
                className: so.pM,
                children: z.intl.format(z.t["fDlr+F"], { count: d.length }),
            }),
            (0, s.jsx)(iQ.A, {
                guildId: t.id,
                className: so.J$,
                users: d.slice(0, 4),
                renderMoreUsers: () => null,
                max: 4,
                size: ib._3.SIZE_16,
            }),
        ],
    });
}
function su(e) {
    let { position: t, guildChannels: n, guildChannelsVersion: l, jumpToVoiceChannels: i, jumpToChannel: a } = e,
        { bottomBar: o, topBar: d } = (0, u.cf)([sa], () => sa.getUnreadStateForGuildId(n.id)),
        c = (0, u.bG)([i0.A], () => i0.A.isFocused()),
        { mode: h, mentionCount: A, targetChannelId: g } = "bottom" === t ? o : d,
        m = h === i1.HIDDEN,
        p = (0, ey.z)(
            {
                to: { transform: m ? ("bottom" === t ? "translateY(180%)" : "translateY(-180%)") : "translateY(0%)" },
                config: sd,
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
        className: ef()(so.kL, { [so.Mn]: "top" === t, [so.sQ]: "bottom" === t }),
        children: (0, s.jsx)(eM.animated.div, {
            className: so.pK,
            style: p,
            "aria-hidden": m,
            children:
                h === i1.HIDDEN
                    ? (0, s.jsx)("div", { className: ef()(so.M0, so.Te) })
                    : h === i1.UNREAD
                      ? (0, s.jsxs)(ee.D, {
                            className: so.M0,
                            onClick: f,
                            children: [
                                "bottom" === t
                                    ? (0, s.jsx)(tS.a, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: so.z_,
                                          height: 14,
                                          width: 14,
                                      })
                                    : (0, s.jsx)(iJ.t, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: so.z_,
                                          height: 14,
                                          width: 14,
                                      }),
                                (0, s.jsx)(N.E, {
                                    variant: "text-xs/semibold",
                                    color: "interactive-text-default",
                                    className: so.pM,
                                    children: z.intl.string(z.t.FCRiT3),
                                }),
                            ],
                        })
                      : h === i1.MENTIONS
                        ? (0, s.jsx)(ee.D, {
                              className: ef()(so.M0, so.vU),
                              onClick: f,
                              children: (0, s.jsx)(N.E, {
                                  variant: "text-xs/semibold",
                                  color: "badge-text-brand",
                                  className: so.pM,
                                  children: z.intl.format(z.t.EQcLyp, { count: A }),
                              }),
                          })
                        : h === i1.VOICE_CHANNELS
                          ? (0, s.jsx)(sc, { jumpToVoiceChannels: i, guildChannels: n, guildChannelsVersion: l })
                          : void 0,
        }),
    });
}
var sh = n(310953),
    sA = n(173860);
function sg(e) {
    let t = eq.A.getChannel(e);
    return (
        null != t &&
        null != t.getGuildId() &&
        !(t.isThread() ? ld.A.isMuted(t.id) : tq.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, eW.Y)(t)
    );
}
function sm(e) {
    let t = eq.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let l = tq.Ay.isGuildCollapsed(n),
        i = tq.Ay.isChannelMuted(n, t.id);
    return (!l || !i) && nq.Ay.getMentionCount(e) > 0;
}
let sp = r.forwardRef(function (e, t) {
    let { guildId: n, guildChannels: l, guildChannelsVersion: i, ...r } = e,
        a = (0, sh.W)(n, l, i, { withVoiceChannels: !1 }, { ignoreRecents: !0 }),
        o = (0, u.bG)([i0.A], () => i0.A.isFocused());
    return (0, s.jsx)(sA.A, { ref: t, ...r, isUnread: sg, isMentioned: sm, items: a, animate: o });
});
var sf = n(81466);
function sC(e) {
    let { guild: t, selected: l } = e,
        { hasUnread: i, mentionCount: r } = (0, u.cf)(
            [nq.Ay],
            () => ({
                hasUnread: nq.Ay.hasUnread(t.id, nS.P.GUILD_EVENT),
                mentionCount: nq.Ay.getMentionCount(t.id, nS.P.GUILD_EVENT),
            }),
            [t.id],
        ),
        a = (0, u.bG)([tq.Ay], () => tq.Ay.isMuteScheduledEventsEnabled(t.id));
    async function o() {
        await (0, $.openModalLazy)(async () => {
            let { default: e } = await Promise.all([
                n.e("954"),
                n.e("8909"),
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
            (0, nz.Dr)(T.M.GUILD_HEADER_EVENT_UPSELL);
    }
    let d = (0, tA.Ay)(t.id),
        c = d.length > 0 ? z.intl.formatToPlainString(z.t.IBdqSu, { number: d.length }) : z.intl.string(z.t.tlopTM);
    return (0, s.jsx)(H.G, {
        id: `upcoming-events-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(sf.C, { size: "md", color: "currentColor", className: e }),
        text: c,
        selected: l,
        onClick: o,
        onContextMenu: (e) => {
            (0, eT.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("26386"), n.e("19990")]).then(n.bind(n, 221621));
                return (n) => (0, s.jsx)(e, { ...n, guildId: t.id });
            });
        },
        showUnread: i && !a,
        trailing: !a && r > 0 ? (0, s.jsx)(U.hV, { className: nH.Do, disableColor: !0, count: r }) : null,
    });
}
var sE = n(271683),
    sx = n(725613),
    sN = n(262763),
    s_ = n(857253),
    sS = n(22231),
    sI = n(241326),
    sb = n(750943),
    sG = n(743674),
    sR = n(888697),
    sv = n(26741),
    sj = n(493819),
    sM = n(722884),
    sy = n(844045),
    sT = n(31950);
function sL(e) {
    let { channel: t, imageUrl: l, animatedUrl: i, bannerHash: a, canModifyHangout: o } = e,
        d = (0, sG.S)(l),
        c = (0, Y.je)(t),
        u = (0, sv.P9)({ guildId: t.guild_id, channelId: t.id, bannerHash: a }),
        h = r.useCallback(() => {
            (0, sv.J_)({ guildId: t.guild_id, channelId: t.id }), (0, sM.A)({ channel: t });
        }, [t]),
        A = r.useCallback(() => {
            (0, sv.nK)({ guildId: t.guild_id, channelId: t.id }), (0, sR.e2)(t.id);
        }, [t.guild_id, t.id]),
        g = r.useCallback(
            (e) => {
                c
                    ? (0, eT.L3)(e, async () => {
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
                children: (0, s.jsx)(sj.A, { imageUrl: l, animatedUrl: i, className: sT.Sl }),
            }),
            o
                ? (0, s.jsxs)("div", {
                      className: sT.n_,
                      children: [
                          (0, s.jsx)(Q.m, {
                              text: z.intl.string(sy.default.XJ4UpB),
                              children: (0, s.jsx)(ee.D, {
                                  className: sT.HF,
                                  onClick: h,
                                  children: (0, s.jsx)(sS.R, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                          (0, s.jsx)(Q.m, {
                              text: z.intl.string(sy.default.XV4qT6),
                              children: (0, s.jsx)(ee.D, {
                                  className: sT.HF,
                                  onClick: A,
                                  children: (0, s.jsx)(sI.u, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function sU(e) {
    let { channel: t } = e,
        n = (0, sv.dX)({ guildId: t.guild_id, channelId: t.id }),
        l = r.useCallback(() => {
            (0, sv.J_)({ guildId: t.guild_id, channelId: t.id }), (0, sM.A)({ channel: t });
        }, [t]);
    return (0, s.jsx)("div", {
        ref: n,
        className: sT._o,
        children: (0, s.jsxs)(ee.D, {
            className: sT.hH,
            onClick: l,
            children: [
                (0, s.jsx)(sb.X, { size: "xs", color: "currentColor" }),
                (0, s.jsx)(N.E, {
                    variant: "text-sm/medium",
                    color: "currentColor",
                    children: z.intl.string(sy.default.NGcIOF),
                }),
            ],
        }),
    });
}
function sD(e) {
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
            ? (0, s.jsx)(sL, {
                  channel: t,
                  imageUrl: c.imageUrl,
                  animatedUrl: c.animatedUrl,
                  bannerHash: c.bannerHash,
                  canModifyHangout: a,
              })
            : a
              ? (0, s.jsx)(sU, { channel: t })
              : null
        : null;
}
var sO = n(532622),
    sP = n(882840),
    sV = n(46054),
    sw = n(514416),
    sH = n(992595);
function sB(e) {
    let { channel: t, connected: n, hovered: l, subtitle: i, onClick: a } = e,
        o = (0, sP.l)(t),
        { enableHangoutWindow: d } = (0, W.Dm)({ guildId: t.guild_id, location: "VoiceChannelStatus" }),
        c = d && (0, Y.lr)(t),
        u = null != o && o.length > 0,
        h = (0, sO.Ay)(t, !0),
        A = null != i && i.length > 0;
    if (
        (r.useEffect(() => {
            u && ll.default.track(F.HAw.VOICE_CHANNEL_TOPIC_VIEWED, { channel_id: t.id, guild_id: t.guild_id });
        }, [u, t.id, t.guild_id]),
        null == t.guild_id)
    )
        return null;
    let g = ef()(sw.Ui, n && h ? sw.BI : null);
    return u
        ? (0, s.jsx)(ee.D, {
              className: g,
              onClick: h ? a : void 0,
              children: (0, s.jsx)(N.E, {
                  variant: "text-xs/medium",
                  className: ef()(sw.qS, sH.PT),
                  children: (0, s.jsx)(tx.A, { children: sV.A.parseVoiceChannelStatus(o, !0, { channelId: t.id }) }),
              }),
          })
        : n && h && !c && (!A || l)
          ? (0, s.jsxs)(ee.D, {
                className: g,
                onClick: a,
                children: [
                    (0, s.jsx)(N.E, {
                        variant: "text-xs/medium",
                        className: sw.qS,
                        children: z.intl.string(z.t.Mgpxiw),
                    }),
                    (0, s.jsx)(sS.R, { color: "currentColor", className: sw.rD, size: "xxs" }),
                ],
            })
          : A
            ? (0, s.jsx)(tx.A, { children: i })
            : null;
}
class sk extends nN {
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
        a && lR.A.updateChatOpen(n.id, !0),
            sN.A.handleVoiceConnect({
                channel: n,
                connected: t,
                needSubscriptionToAccess: i,
                routeDirectlyToChannel: a,
                locked: e,
                transitionExtras: r ? { source: lY.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
            });
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            l = tu.A.getGuild(t.getGuildId());
        null != l &&
            (0, eT.L3)(e, async () => {
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
        return (0, nt.Pd)(e, lu.A, tu.A);
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
        null != t && (0, ly.V)(t) && (0, lM.Ze)(t), this.handleVoiceConnect();
    };
    handleVoiceStatusClick = (e) => {
        let { connected: t, channel: n } = this.props;
        t && (e.stopPropagation(), (0, sE.A)({ channel: n }));
    };
    renderSubtitle() {
        let { channel: e, connected: t } = this.props,
            n = ip(this.props.subtitle)?.subtitle,
            { hovered: l } = this.state;
        return (0, s.jsx)(sB, {
            onClick: this.handleVoiceStatusClick,
            channel: e,
            connected: t,
            subtitle: n,
            hovered: l,
        });
    }
    renderVoiceUsers() {
        let { channel: e, voiceStates: t, collapsed: n, withGuildIcon: l, tabIndex: i } = this.props;
        return (0, s.jsx)(lx.A, {
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
        return !(null != n && n.length > 0) || l ? null : (0, s.jsx)(sD, { channel: e, isConnected: t });
    }
    renderPopout = () => {
        let { channel: e } = this.props,
            { shouldShowGuildVerificationPopout: t } = this.state;
        return t
            ? (0, s.jsx)(lW, { type: lK.VOICE, guildId: e.guild_id, closePopout: this.closeGuildVerificationPopout })
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
                        lR.A.updateChatOpen(e.id, !0),
                            (0, lq.iN)(e.id, l ? { source: lY.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
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
                "data-dnd-name": (0, tW.m1)(e, lB.default, l1.A),
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
                        children: (0, s.jsx)(lG.Y, {
                            targetElementRef: this.channelItemRef,
                            position: "right",
                            renderPopout: this.renderPopout,
                            onRequestClose: this.closeGuildVerificationPopout,
                            spacing: 17,
                            shouldShow: b,
                            children: () =>
                                (0, s.jsx)(Q.m, {
                                    text: this.getTooltipText(),
                                    children: (0, s.jsxs)(n_.Ay, {
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
                                        "aria-label": (0, lj.Ay)({
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
                (R = (0, s.jsx)(t2.A, {
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
let sF = tK((0, lv.F)(sk));
function sz(e) {
    let {
            guild: t,
            channel: n,
            disableSorting: l,
            isFavoriteCategory: i,
            selected: r,
            collapsed: a,
            voiceStates: o,
        } = e,
        d = (0, u.cf)([nq.Ay], () => ({ unread: nq.Ay.hasUnread(n.id), mentionCount: nq.Ay.getMentionCount(n.id) })),
        c = (0, u.bG)([tq.Ay], () => tq.Ay.resolveUnreadSetting(n)),
        h = (0, u.cf)([eq.A, lH.A, B.A], () => {
            let e = eq.A.getChannel(n.parent_id),
                i = lH.A.getCheck(n.guild_id);
            return {
                canManageChannel: B.A.can(F.xBc.MANAGE_CHANNELS, n),
                canReorderChannel:
                    !0 !== l &&
                    (t.id === nn.Vc ||
                        (null != e ? B.A.can(F.xBc.MANAGE_CHANNELS, e) : B.A.can(F.xBc.MANAGE_CHANNELS, t))),
                canMoveMembers: B.A.can(F.xBc.MOVE_MEMBERS, n),
                locked: !B.A.can(F.xBc.CONNECT, n),
                bypassLimit: B.A.can(F.xBc.MOVE_MEMBERS, n),
                unverifiedAccount: !i.canChat,
            };
        }),
        A = (0, u.bG)([lu.A], () => lu.A.hasVideo(n.id)),
        g = (0, l3.Ay)(n),
        m = (0, tW.Ay)(n),
        p = (0, tA.Qs)(n.id),
        f = (0, u.bG)([sx.A], () => sx.A.getStartTime(n), [n]),
        { isSubscriptionGated: C, needSubscriptionToAccess: E } = (0, lT.A)(n.id),
        x = (0, s_.A)(),
        N = (0, u.bG)([tq.Ay], () => tq.Ay.isFavorite(t.id, n.id)),
        _ = e.connected || x?.channelId === n.id,
        { enableHighlight: S, enableWaveformIcon: I } = (0, t4.b)(t.id, "VoiceChannel"),
        b = null != o && o.length > 0,
        G = S && b,
        R = I && b,
        v = is({
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
    return (0, s.jsx)(sF, {
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
var sK = n(335993);
function sW(e) {
    return (
        h.A.modules.channels.NAME_LINE_HEIGHT.resolve({ density: e }) +
        2 * h.A.space.SPACE_XXS.resolve({ density: e }) +
        2
    );
}
class sY extends r.PureComponent {
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
                    a = s.threadOffset * sW(r);
                i.scrollIntoViewRect({ start: e + a, end: e + a + sW(r), padding: n, animate: t, callback: l });
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
            let { hasDivider: d, canHaveVoiceSummary: c } = nl(n, r, t),
                u = d ? (a ? 9 : 12) : 0;
            if (!c || t === e8.PU) return u;
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
            a = sW(r);
        if (e === e8.PU) {
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
            a += sW(t);
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
            t7,
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
                case tE.n.GUILD_HUB_HEADER_OPTIONS:
                    return (0, s.jsx)(
                        q.A,
                        { guild: l, channel: e6.Ay.getDefaultChannel(l.id) },
                        tE.n.GUILD_HUB_HEADER_OPTIONS,
                    );
                case tE.n.GUILD_PREMIUM_PROGRESS_BAR:
                    let i = e.getRows();
                    return (0, s.jsx)(eK, { guild: l, withMargin: i.length > 1 }, tE.n.GUILD_PREMIUM_PROGRESS_BAR);
                case tE.n.GUILD_HOME:
                    return (0, s.jsx)(nJ, { guild: l, selected: a === es.VV.GUILD_HOME }, tE.n.GUILD_HOME);
                case tE.n.GUILD_SCHEDULED_EVENTS:
                    return (0, s.jsx)(
                        sC,
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
                    return (0, s.jsx)(la, { guild: l, selected: a === es.VV.GUILD_SHOP }, tE.n.GUILD_SHOP);
                case tE.n.GUILD_GAME_SHOP:
                    return (0, s.jsx)(nk, { guild: l, selected: a === es.VV.GAME_SHOP }, tE.n.GUILD_GAME_SHOP);
                case tE.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
                    return (0, s.jsx)(n3, { guild: l });
                case tE.n.CHANNELS_AND_ROLES:
                    return (0, s.jsx)(
                        nX,
                        { guild: l, selected: a === es.VV.CHANNEL_BROWSER || a === es.VV.CUSTOMIZE_COMMUNITY },
                        tE.n.CHANNELS_AND_ROLES,
                    );
                case tE.n.GUILD_DIRECTORY:
                    return (0, s.jsx)(
                        nI,
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
                        n9,
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
            E = f instanceof e8.xu,
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
                            (0, s.jsx)(iZ, {
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
                                ? (0, s.jsx)(lb, {
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
                    id,
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
                    sz,
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
                return (0, s.jsx)(ih, { channel: x, guild: l, position: C.position, selected: a === C.id }, N);
            case F.rbe.GUILD_CATEGORY:
                if (t !== c.voiceChannelsSectionNumber) return null;
                return (0, s.jsx)(t3, { channel: x }, `readonly-${x.id}`);
            case F.rbe.PUBLIC_THREAD:
            case F.rbe.PRIVATE_THREAD:
            case F.rbe.ANNOUNCEMENT_THREAD:
                return (0, s.jsx)(
                    iZ,
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
            ns,
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
                let { hasDivider: l, canHaveVoiceSummary: i } = nl(t, n, e);
                return `section-footer-${e}${l ? "-divider" : ""}${i ? "-voice-summary" : ""}`;
            })(t, n, o),
        );
    };
    renderTopUnread() {
        let { topMention: e, bottomUnread: t, bottomMention: n, isUnreadVisible: l } = this.state,
            { guildId: i, guildChannels: r, guildChannelsVersion: a } = this.props;
        return (0, s.jsx)("div", {
            className: t6.Eo,
            children: (0, s.jsx)(sp, {
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
        return (0, s.jsx)(sp, {
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
                                      children: (0, s.jsx)(su, {
                                          position: "top",
                                          guildChannels: e,
                                          guildChannelsVersion: t,
                                          jumpToVoiceChannels: this.jumpToVoiceChannels,
                                          jumpToChannel: this.jumpToChannel,
                                      }),
                                  }),
                                  this.renderList(),
                                  (0, s.jsx)(su, {
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
let sq = (e) => {
    let { guildId: t, selectedChannelId: n, selectedVoiceChannelId: l } = e,
        i = (0, u.bG)([R.A], () => R.A.keyboardModeEnabled),
        { analyticsLocations: a } = (0, j.Ay)(v.A.GUILD_CHANNEL_LIST),
        o = (0, u.bG)([eq.A], () => eq.A.getChannel(n)),
        h = (0, u.bG)([eq.A], () => eq.A.getChannel(l)),
        A = (0, u.bG)([e7.A], () => e7.A.getGuildId()),
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
                children: (0, s.jsx)(sY, {
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
function sX(e) {
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
                                  children: z.intl.string(sK.default["1n0TGE"]),
                              }),
                              (0, s.jsx)(N.E, {
                                  variant: "text-sm/medium",
                                  color: "text-muted",
                                  children: z.intl.string(sK.default.Wwzrs9),
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
        : (0, s.jsx)(sq, { ...e, guildChannels: t, guildChannelsVersion: 0, withGuildIcon: !1, density: l });
}
function sZ(e) {
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
                [b] = (0, el.kn)(_ && I && !S ? [T.M.EMPTY_GAME_SERVER_TAB] : [], void 0, !0);
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
        n = (0, u.cf)([e4.A], () => e4.A.getGuild(e.guildId, { guildActionRows: t })),
        { density: l } = (0, C.wR)();
    return (0, s.jsx)(sq, { ...e, ...n, density: l });
}
