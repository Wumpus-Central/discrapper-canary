n.d(t, {
    $H: () => ek,
    $J: () => ti,
    $V: () => tf,
    AV: () => eg,
    B2: () => tw,
    B3: () => tO,
    BM: () => ts,
    Bg: () => eI,
    Bz: () => to,
    C1: () => tm,
    C9: () => th,
    Dr: () => ej,
    F9: () => tR,
    FI: () => tT,
    FX: () => eO,
    Fs: () => tg,
    GN: () => eE,
    Gd: () => tI,
    HJ: () => tr,
    Jg: () => ew,
    K: () => eC,
    KM: () => eG,
    Kr: () => ev,
    LM: () => eN,
    Mo: () => tU,
    NI: () => tk,
    Nj: () => eL,
    PB: () => tt,
    PM: () => eh,
    Pb: () => eU,
    Qe: () => W,
    Rc: () => tB,
    Rt: () => e4,
    U3: () => ei,
    V$: () => td,
    VB: () => tA,
    Vl: () => e3,
    WP: () => ea,
    Xh: () => ef,
    Xv: () => eS,
    ZS: () => tN,
    ZZ: () => X,
    Zp: () => tS,
    _D: () => q,
    _j: () => tp,
    _p: () => ty,
    b7: () => e1,
    bA: () => tP,
    f$: () => tb,
    f2: () => eV,
    fY: () => tc,
    gI: () => tu,
    hF: () => tj,
    hQ: () => el,
    iQ: () => ee,
    il: () => e0,
    jY: () => tx,
    lQ: () => J,
    nc: () => eF,
    o9: () => eZ,
    oo: () => eD,
    pO: () => eM,
    q6: () => et,
    q8: () => te,
    qe: () => tD,
    t2: () => em,
    u7: () => tv,
    uN: () => tL,
    vB: () => tG,
    vQ: () => eA,
    vR: () => eR,
    xN: () => eT,
    xn: () => ey,
    yH: () => tE,
    yI: () => ec,
    ys: () => eP,
    zE: () => eb,
    zK: () => eB,
    zi: () => $,
}),
    n(388685),
    n(314940),
    n(953529),
    n(415506),
    n(642613),
    n(784620),
    n(973216),
    n(539854);
var r = n(991998),
    i = n(392711),
    a = n(278074),
    o = n(754700),
    s = n(551910),
    l = n(34738),
    c = n(887003),
    u = n(820827),
    d = n(570140),
    f = n(782568);
n(597688);
var _ = n(231757),
    p = n(258609),
    h = n(102172),
    m = n(706454),
    g = n(313789),
    E = n(430824),
    b = n(866960),
    y = n(496675),
    O = n(979651),
    v = n(572004),
    I = n(585483),
    T = n(70956),
    S = n(630388),
    A = n(823379),
    C = n(960048),
    N = n(617136),
    R = n(272008),
    P = n(569984),
    w = n(497505),
    D = n(184299),
    x = n(937797),
    L = n(566078),
    j = n(312046),
    M = n(46140),
    k = n(981631),
    U = n(701488),
    G = n(388032);
function B(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function Z(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                B(e, t, n[t]);
            });
    }
    return e;
}
function F(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function V(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : F(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let H = 2592000000,
    Y = new Set([l.n.PREMIUM_EXTENSION, l.n.PREMIUM_PERMANENT]);
function W(e) {
    try {
        return (0, a.EQ)(e.config)
            .with({ config_version: 2 }, () => !0)
            .exhaustive();
    } catch (n) {
        var t;
        return (
            console.error(
                "Unknown config version '".concat(null == e || null == (t = e.config) ? void 0 : t.config_version, "'"),
                n,
            ),
            !1
        );
    }
}
let K = (e) => e.application_id === U.Ev || e.platform === k.M7m.XBOX,
    z = (e) => e.platform === k.M7m.PS4 || e.platform === k.M7m.PS5;
function q(e, t) {
    if (null == e) return !1;
    let n = e.name.toLowerCase(),
        r = L.r.build(t.config).application.name.toLowerCase();
    return K(e) || z(e) ? n === r : null != e.application_id && Q(e.application_id, t);
}
function X(e, t) {
    for (let [n, r] of e) if (q(t, r) && !$(r)) return r;
}
function Q(e, t) {
    let n = L.r.build(t.config).applications;
    return null != n && n.some((t) => t.id === e);
}
function J(e, t) {
    let n;
    for (let [r, i] of e)
        if (Q(t, i) && !$(i)) {
            n = i;
            break;
        }
    return n;
}
function $(e) {
    return new Date(e.config.expiresAt).valueOf() <= Date.now();
}
function ee(e) {
    if (!$(e)) return !1;
    let t = Date.now() - H,
        n = new Date(e.config.expiresAt).valueOf();
    return null != e.config.expiresAt && !(n <= t);
}
function et(e) {
    return (0, a.EQ)(e)
        .with({ config_version: 2 }, (e) => (0, j.Q)(e))
        .exhaustive();
}
function en(e) {
    return null == e
        ? null
        : {
              lastBeatAt: e.last_beat_at,
              expiresAt: e.expires_at,
          };
}
function er(e) {
    let t = {};
    for (let [n, r] of Object.entries(e))
        t[n] = {
            eventName: r.event_name,
            value: r.value,
            updatedAt: r.updated_at,
            completedAt: r.completed_at,
            heartbeat: en(r.heartbeat),
        };
    return t;
}
function ei(e) {
    var t;
    return {
        userId: e.user_id,
        questId: e.quest_id,
        enrolledAt: e.enrolled_at,
        completedAt: e.completed_at,
        claimedAt: e.claimed_at,
        claimedTier: null != (t = e.claimed_tier) ? t : null,
        lastStreamHeartbeatAt: e.last_stream_heartbeat_at,
        streamProgressSeconds: e.stream_progress_seconds,
        dismissedQuestContent: e.dismissed_quest_content,
        progress: er(e.progress),
    };
}
function ea(e) {
    return {
        id: e.id,
        preview: e.preview,
        config: et(e.config),
        userStatus: null == e.user_status ? null : ei(e.user_status),
        targetedContent: e.targeted_content,
    };
}
function eo(e) {
    return e.type === c.w.VIRTUAL_CURRENCY
        ? {
              skuId: e.sku_id,
              type: e.type,
              name: e.name,
              nameWithArticle: e.name_with_article,
              collectibleProduct: e.collectible_product,
              orbQuantity: e.orb_quantity,
          }
        : {
              skuId: e.sku_id,
              type: e.type,
              name: e.name,
              nameWithArticle: e.name_with_article,
              asset: e.asset,
              assetVideo: e.asset_video,
              collectibleProduct: e.collectible_product,
          };
}
function es(e) {
    return {
        id: e.id,
        startsAt: e.starts_at,
        expiresAt: e.expires_at,
        features: e.features,
        messages: {
            questName: e.messages.quest_name,
            gamePublisher: e.messages.game_publisher,
            gameTitle: e.messages.game_title,
        },
        assets: {
            hero: e.assets.hero,
            heroVideo: e.assets.hero_video,
            questBarHero: e.assets.quest_bar_hero,
            questBarHeroVideo: e.assets.quest_bar_hero_video,
            gameTile: e.assets.game_tile,
            logotype: e.assets.logotype,
        },
        colors: {
            primary: e.colors.primary,
            secondary: e.colors.secondary,
        },
        rewards: e.rewards.map(eo),
        cosponsorMetadata: (0, j.s)(e.cosponsor_metadata),
    };
}
function el(e) {
    return {
        id: e.id,
        config: es(e.config),
        userStatus: null == e.user_status ? null : ei(e.user_status),
    };
}
function ec(e) {
    var t;
    return {
        userId: e.user_id,
        questId: e.quest_id,
        code: e.code,
        platform: e.platform,
        claimedAt: e.claimed_at,
        tier: null != (t = e.tier) ? t : null,
    };
}
function eu(e) {
    if ((null == e ? void 0 : e.quest_rewards) == null) return null;
    let t = e.quest_rewards;
    switch (t.reward.tag) {
        case c.w.IN_GAME:
            return { questRewards: { reward: { tag: t.reward.tag } } };
        case c.w.REWARD_CODE:
            return {
                questRewards: {
                    reward: {
                        tag: t.reward.tag,
                        rewardCode: ec(t.reward.reward_code),
                    },
                },
            };
    }
}
function ed(e) {
    return {
        skuId: e.sku_id,
        tenantMetadata: eu(e.tenant_metadata),
        consumed: e.consumed,
    };
}
function ef(e) {
    return {
        claimedAt: e.claimed_at,
        items: e.entitlements.map(ed),
        errors: e.errors,
    };
}
function e_(e) {
    return {
        eventName: e.event_name,
        title: e.title,
        description: e.description,
        target: e.target,
    };
}
let ep = (e) => "".concat(location.protocol, "//").concat(location.host, "/quests/").concat(e);
function eh(e, t, n) {
    let r = t.get(n);
    if (null == r) return;
    let i = e.get(r.quest.id);
    if (null != i && !$(i)) return i;
}
let em = (e) => {
    switch (e) {
        case w.y$.XBOX:
            return G.intl.string(G.t.G84UWV);
        case w.y$.PLAYSTATION:
            return G.intl.string(G.t["6IeKx8"]);
        case w.y$.SWITCH:
            return G.intl.string(G.t["1pp0sr"]);
        case w.y$.PC:
            return G.intl.string(G.t["YK+wUl"]);
        case w.y$.CROSS_PLATFORM:
            return G.intl.string(G.t.UWVbzc);
    }
};
function eg(e) {
    var t, n;
    let { quest: r, taskDetails: i, thirdPartyTaskDetails: a } = e;
    if ((null == (t = r.userStatus) ? void 0 : t.completedAt) != null) return G.intl.string(G.t.BzFeTE);
    if ((null == (n = r.userStatus) ? void 0 : n.enrolledAt) != null) {
        let { percentComplete: e } = i,
            t = null != a ? a.percentComplete : e;
        return t >= 0.75
            ? G.intl.string(G.t.gvCR4O)
            : t >= 0.45 && t <= 0.55
              ? G.intl.string(G.t.JNx8sL)
              : t > 0
                ? G.intl.string(G.t.JMbfnZ)
                : G.intl.string(G.t["7e5k7O"]);
    }
    return G.intl.formatToPlainString(G.t.EQa7oq, { questName: r.config.messages.questName });
}
function eE(e) {
    return Object.keys(M.a_).includes(w.jn[e]);
}
function eb(e, t) {
    if (!eE(t)) return !1;
    let n = w.jn[t];
    return (0, S.yE)(e.dismissedQuestContent, M.a_[n]);
}
function ey(e) {
    let t = e.rewardsConfig.rewards.find((e) => e.type === c.w.COLLECTIBLE);
    return (null == t ? void 0 : t.type) === c.w.COLLECTIBLE ? t : null;
}
function eO(e) {
    let t = ey(e);
    return null != t && "expiresAtPremium" in t && null != t.expiresAtPremium ? t_(t.expiresAtPremium) : null;
}
function ev(e) {
    let t = ey(e);
    if (null == t || !("expiresAt" in t) || null == t.expiresAt) return null;
    let n = new Date(e.expiresAt),
        i = new Date(t.expiresAt),
        a = (0, r.Z)(i, n),
        o = Math.floor(a / 30) + +(a % 30 >= 25);
    if (o >= 12) {
        let e = Math.floor(o / 12);
        return G.intl.formatToPlainString(G.t.PClsr6, { years: e });
    }
    {
        if (o > 0) return G.intl.formatToPlainString(G.t.kridzM, { months: o });
        let e = (0, r.Z)(i, n);
        if (!(e >= 7)) return G.intl.formatToPlainString(G.t.k2UNz8, { days: e });
        {
            let t = Math.ceil(e / 7);
            return G.intl.formatToPlainString(G.t.EmoBDw, { weeks: t });
        }
    }
}
function eI(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === c.w.FRACTIONAL_PREMIUM);
}
function eT(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === c.w.VIRTUAL_CURRENCY);
}
function eS(e) {
    return null != ey(e);
}
function eA(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === c.w.IN_GAME);
}
function eC(e) {
    var t;
    return null != (t = e.rewardsConfig.rewards.find((e) => e.type === c.w.IN_GAME)) ? t : null;
}
function eN(e) {
    let t = e.rewardsConfig.rewards.find((e) => e.type === c.w.VIRTUAL_CURRENCY);
    return null == t ? void 0 : t.orbQuantity;
}
function eR(e, t) {
    return e.targetedContent.includes(t);
}
function eP(e, t) {
    C.Z.captureException(e, V(Z({}, t), { tags: V(Z({}, null == t ? void 0 : t.tags), { app_context: "quests" }) }));
}
function ew(e, t) {
    if (null == t || null == e) return null;
    for (let n of t) {
        let t = X(e, n);
        if (null != t) return t;
    }
    return null;
}
function eD(e) {
    let {
            quest: { config: t },
        } = e,
        n = t.rewardsConfig;
    return (
        n.assignmentMethod === s.j.TIERED && n.rewards.length > 0 && n.rewards.every((e) => e.type === c.w.REWARD_CODE)
    );
}
function ex(e) {
    return null != e.taskConfigV2.tasks[o.X.PLAY_ON_DESKTOP];
}
function eL(e) {
    let { quest: t } = e;
    return ex(t.config);
}
function ej(e) {
    let { quest: t } = e;
    return null != t.config.taskConfigV2.tasks[o.X.STREAM_ON_DESKTOP];
}
function eM(e) {
    return null != e.config.taskConfigV2.tasks[o.X.PLAY_ACTIVITY];
}
function ek(e) {
    return null != e && eL({ quest: e });
}
function eU(e) {
    if (!(0, x.CD)("QuestUtils") || null == e) return !1;
    let t = L.r.build(e.config).applications;
    return null != t && t.length > 1;
}
function eG(e) {
    let t = L.r.build(e.config).application.id;
    return eM(e) && t === M.Ts;
}
function eB(e, t) {
    return L.r.build(e.config).features.has(t);
}
function eZ(e) {
    let { quest: t, idx: n } = e;
    if (null == n) return null;
    let r = t.config.rewardsConfig.rewards[n];
    return r.type === c.w.REWARD_CODE ? r : null;
}
function eF(e, t) {
    let n = L.r.build(e.config).application.link;
    (0, N._3)({
        questId: e.id,
        questContent: t.content,
        questContentCTA: t.ctaContent,
        questContentPosition: t.position,
        impressionId: t.impressionId,
        sourceQuestContent: t.sourceQuestContent,
    }),
        I.S.dispatch(k.CkL.QUEST_GAME_LINK_OPENED),
        (0, f.Z)(n);
}
let eV = (e, t) => {
    (0, N._3)({
        questId: e,
        questContent: t.content,
        questContentCTA: t.ctaContent,
        questContentPosition: t.position,
        impressionId: t.impressionId,
        sourceQuestContent: t.sourceQuestContent,
    }),
        (0, v.JG)(ep(e));
};
function eH(e) {
    return (null == e ? void 0 : e.type) === o.X.PLAY_ON_DESKTOP;
}
let eY = (e, t) => (e > 0 ? (0, i.floor)(Math.min(t / e, 1), 4) : 0),
    eW = (e) => to(e) || P.Z.isProgressingOnDesktop(e.id),
    eK = (e, t) => {
        var n, r, a, o;
        let s =
            null == (o = e.userStatus) ||
            null == (a = o.progress) ||
            null == (r = a[t.type]) ||
            null == (n = r.heartbeat)
                ? void 0
                : n.lastBeatAt;
        if (null == s || !eW(e)) return 0;
        let l = Date.now() - new Date(s).valueOf();
        return (0, i.floor)(l / T.Z.Millis.SECOND, 2);
    },
    ez = (e, t) => {
        var n, r, i, a, o;
        let s = null == (r = e.userStatus) || null == (n = r.progress) ? void 0 : n[t.type],
            l =
                null !=
                (o =
                    null != (a = null == s ? void 0 : s.value)
                        ? a
                        : null == (i = e.userStatus)
                          ? void 0
                          : i.streamProgressSeconds)
                    ? o
                    : 0;
        if (te(e)) {
            let n = P.Z.getOptimisticProgress(e.id, t.type);
            return null == n || n < l ? l : n;
        }
        return l + eK(e, t);
    },
    eq = 0.99,
    eX = (e, t) => {
        var n;
        let r = t.target;
        if ((null == (n = e.userStatus) ? void 0 : n.completedAt) != null) return r;
        let a = Math.min(r * eq, ez(e, t));
        return Math.max((0, i.floor)(a, 2), 0);
    },
    eQ = (e) => {
        var t, n, r;
        let { quest: i, taskType: a, includeTaskTypes: s = o.T.ALL } = e,
            l = i.config.taskConfigV2,
            c = null != a ? a : null == (t = Object.values(l.tasks).filter((e) => s.has(e.type))[0]) ? void 0 : t.type,
            u = null != (r = l.tasks[c]) ? r : l.tasks[o.X.STREAM_ON_DESKTOP];
        if (null == u) throw Error("No task with type ".concat(a, " found for quest ").concat(i.id, "!"));
        let d = u.target,
            f = eX(i, u),
            _ = Object.values(l.tasks).find(eH),
            p = null == _ || null == (n = _.applications) ? void 0 : n.map((e) => e.id);
        return {
            progressSeconds: f,
            targetSeconds: d,
            targetMinutes: Math.ceil(d / T.Z.Seconds.MINUTE),
            percentComplete: eY(d, f),
            taskType: c,
            applications: p,
        };
    },
    eJ = (e) => (o.T.ALL.has(e) ? e : null),
    e$ = (e) => {
        var t, n;
        let { quest: r, includeTaskTypes: i = o.T.ALL } = e;
        for (let e of Object.values(null != (n = null == (t = r.userStatus) ? void 0 : t.progress) ? n : {})
            .sort((e, t) => {
                var n, r;
                let i = null == e || null == (n = e.heartbeat) ? void 0 : n.lastBeatAt,
                    a = null == t || null == (r = t.heartbeat) ? void 0 : r.lastBeatAt;
                return null != i && null != a
                    ? new Date(i).valueOf() > new Date(a).valueOf()
                        ? -1
                        : 1
                    : null == i &&
                        null == a &&
                        (null == e ? void 0 : e.updatedAt) != null &&
                        (null == t ? void 0 : t.updatedAt) != null
                      ? new Date(e.updatedAt).valueOf() > new Date(t.updatedAt).valueOf()
                          ? -1
                          : 1
                      : null != i && null == a
                        ? -1
                        : 1;
            })
            .filter(A.lm)) {
            let t = eJ(e.eventName);
            if (null != t && (null == i ? void 0 : i.has(t)))
                return eQ({
                    quest: r,
                    taskType: t,
                    includeTaskTypes: i,
                });
        }
        return eQ({
            quest: r,
            includeTaskTypes: i,
        });
    },
    e0 = (e, t) => {
        if (e3(e))
            return {
                progressSeconds: 0,
                targetSeconds: 1,
                targetMinutes: 1,
                percentComplete: 0,
                taskType: o.X.STREAM_ON_DESKTOP,
            };
        if (e9(e))
            return e$({
                quest: e,
                includeTaskTypes: null != t ? t : to(e) ? o.T.CONSOLE : o.T.ALL,
            });
        if (te(e))
            if (tn(e))
                return eQ({
                    quest: e,
                    taskType: o.X.WATCH_VIDEO_ON_MOBILE,
                });
            else
                return eQ({
                    quest: e,
                    taskType: o.X.WATCH_VIDEO,
                });
        return ek(e)
            ? eQ({
                  quest: e,
                  taskType: o.X.PLAY_ON_DESKTOP,
              })
            : eM(e)
              ? eQ({
                    quest: e,
                    taskType: o.X.PLAY_ACTIVITY,
                })
              : eQ({
                    quest: e,
                    taskType: o.X.STREAM_ON_DESKTOP,
                });
    };
function e1(e) {
    var t, n, r, i;
    let a = L.r.build(e.config).defaultInGameTask;
    if (null == a) return null;
    let o =
            null !=
            (i = null == (r = e.userStatus) || null == (n = r.progress) || null == (t = n[a.type]) ? void 0 : t.value)
                ? i
                : 0,
        s = eY(a.target, o);
    return {
        title: a.messages.taskTitle,
        description: a.messages.taskDescription,
        target: a.target,
        progress: o,
        percentComplete: s,
    };
}
let e2 = (e) => (t) => e.some((e) => null != t.config.taskConfigV2.tasks[e]);
function e3(e) {
    return Array.from(o.T.IN_GAME).some((t) => null != e.config.taskConfigV2.tasks[t]);
}
function e4(e) {
    return (e3(e) || eM(e)) && e.config.features.includes(M.S7.START_QUEST_CTA);
}
function e8(e) {
    return e5(e.targetSeconds - e.progressSeconds);
}
function e5(e) {
    return {
        minutes: Math.max(0, Math.floor(e / 60)),
        seconds: Math.max(0, Math.floor(e % 60)),
    };
}
function e6(e) {
    let t = e8(e);
    return e7(t.minutes, t.seconds);
}
function e7(e, t) {
    return "".concat(String(e).padStart(2, "0"), ":").concat(String(t).padStart(2, "0"));
}
let e9 = e2([o.X.PLAY_ON_XBOX, o.X.PLAY_ON_PLAYSTATION]),
    te = e2([o.X.WATCH_VIDEO, o.X.WATCH_VIDEO_ON_MOBILE]),
    tt = e2([o.X.WATCH_VIDEO]),
    tn = e2([o.X.WATCH_VIDEO_ON_MOBILE]),
    tr = (e) => tn(e) && !tt(e);
function ti(e) {
    return e9(e);
}
let ta = (e, t) => {
    var n, r;
    let i = null == e || null == (r = e.progress[t]) || null == (n = r.heartbeat) ? void 0 : n.expiresAt;
    if (null == i) return !1;
    let a = new Date(i).valueOf();
    return !isNaN(a) && a > Date.now();
};
function to(e) {
    return null != e.userStatus && (ta(e.userStatus, o.X.PLAY_ON_XBOX) || ta(e.userStatus, o.X.PLAY_ON_PLAYSTATION));
}
function ts(e) {
    return !!te(e) && (0, n(952265).nf)(tv(e.id));
}
function tl() {
    {
        let { openUserSettings: e } = n(518596);
        e(g.n.CONNECTIONS_PANEL, { section: k.oAB.CONNECTIONS });
    }
}
function tc(e, t) {
    let { platformType: n, quest: r } = e;
    (0, N._3)({
        questId: r.id,
        questContent: t.content,
        sourceQuestContent: t.sourceQuestContent,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId,
    }),
        (0, _.Z)({
            platformType: n,
            location: t.ctaContent,
        });
}
function tu(e, t) {
    let { quest: n } = e;
    (0, N._3)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentRowIndex: t.rowIndex,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId,
        sourceQuestContent: t.sourceQuestContent,
    });
    let r = tO(n);
    if (1 === r.length) return (0, _.Z)({ platformType: r.at(0) });
    d.Z.dispatch({
        type: "CONNECTIONS_GRID_MODAL_SHOW",
        onComplete: (e) => (0, _.Z)({ platformType: e }),
        includedPlatformTypes: new Set(r),
    });
}
function td(e, t) {
    let { quest: n } = e;
    (0, N._3)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId,
        sourceQuestContent: t.sourceQuestContent,
    }),
        tl();
}
function tf() {
    return window.location.pathname.startsWith(k.Z5c.QUEST_HOME);
}
function t_(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" };
    return null == e ? "" : new Date(e).toLocaleDateString(m.default.locale, t);
}
function tp(e) {
    return "xbox" === e.connected_account_type ? k.ABu.XBOX : k.ABu.PLAYSTATION;
}
function th(e) {
    return tp(e) === k.ABu.XBOX ? G.t.mytEv7 : G.t.iDiwb2;
}
function tm(e) {
    var t, n, r, i;
    let { quest: a, rewardCode: o, selectedPlatformType: s, sharedQuestFields: l } = e,
        c = eD({ quest: a }),
        u = null != s ? s : null == o ? void 0 : o.platform,
        d = c
            ? eZ({
                  quest: a,
                  idx:
                      null != (r = null == o ? void 0 : o.tier)
                          ? r
                          : null == (t = a.userStatus)
                            ? void 0
                            : t.claimedTier,
              })
            : null,
        f =
            null != (i = null == d || null == (n = d.messages) ? void 0 : n.redemptionInstructionsByPlatform)
                ? i
                : l.defaultRewardRedemptionInstructionsByPlatform;
    return null != u ? f[u] : void 0;
}
function tg(e) {
    let { isTargetedDisclosure: t, gamePublisher: n, gameTitle: r, cosponsorName: i } = e;
    return t
        ? null == i
            ? G.intl.formatToPlainString(G.t.Piihy8, { gamePublisher: n })
            : G.intl.formatToPlainString(G.t.DV47Gx, {
                  gamePublisher: n,
                  cosponsorName: i,
              })
        : G.intl.formatToPlainString(G.t.tOWwxM, {
              gamePublisher: n,
              gameTitle: r,
          });
}
function tE(e) {
    let t = eL({ quest: e }) || ej({ quest: e }),
        n = e9(e),
        r = [];
    return t && r.push(M.cd.DESKTOP), n && r.push(M.cd.CONSOLE), r;
}
function tb(e) {
    var t;
    let n = null == (t = ey(e)) ? void 0 : t.expirationMode;
    return null != n && Y.has(n);
}
function ty(e) {
    var t;
    return tb(e) && (null == (t = ey(e)) ? void 0 : t.expirationMode) === l.n.PREMIUM_PERMANENT;
}
function tO(e) {
    let t = Object.keys(e.config.taskConfigV2.tasks),
        n = [];
    for (let e of t)
        switch (e) {
            case o.X.PLAY_ON_XBOX:
                n.push(k.ABu.XBOX);
                break;
            case o.X.PLAY_ON_PLAYSTATION:
                n.push(k.ABu.PLAYSTATION);
        }
    return n;
}
function tv(e) {
    return "VIDEO-QUEST-".concat(e);
}
function tI(e) {
    let t = te(e),
        n = eM(e);
    return t || n;
}
function tT(e, t) {
    var n, r;
    $(e) ||
        (null == (n = e.userStatus) ? void 0 : n.enrolledAt) == null ||
        (null == (r = e.userStatus) ? void 0 : r.completedAt) != null ||
        (0, R.cT)(e.id, t);
}
function tS(e) {
    return {
        [w.jn.QUEST_BAR]: w.Ok.DESKTOP_ACCOUNT_PANEL_AREA,
        [w.jn.QUEST_BAR_V2]: w.Ok.DESKTOP_ACCOUNT_PANEL_AREA,
        [w.jn.QUEST_BAR_MOBILE]: w.Ok.MOBILE_HOME_DOCK_AREA,
    }[e];
}
function tA(e) {
    let t = tS(e);
    return null != t && M.v6.has(t);
}
let tC = "landscape";
function tN(e) {
    let t = e.assets.video;
    return null == t || null == t.width || null == t.height ? tC : t.width > t.height ? "landscape" : "portrait";
}
let tR = (e) =>
    e.percentComplete > 0
        ? G.intl.formatToPlainString(G.t["c59/Tk"], { remainTime: e6(e) })
        : G.intl.formatToPlainString(G.t.GNsKiY, { remainTime: e6(e) });
function tP(e, t) {
    return e <= 0 || t <= 0 ? 0 : e >= t ? 1 : Math.min(1, Math.round((e / t) * 100) / 100);
}
function tw(e) {
    var t, n;
    let r = L.r.build(e).defaultWatchVideoTask;
    return null !=
        (n =
            null != (t = null == r ? void 0 : r.messages.videoEndCtaButtonLabel)
                ? t
                : null == r
                  ? void 0
                  : r.messages.videoEndCtaTitle)
        ? n
        : G.intl.string(G.t.iiTtpK);
}
function tD(e, t) {
    var n;
    let { quest: r, adDecisionData: i } = null != (n = P.Z.questToDeliverForPlacement.get(tS(t))) ? n : {};
    return null != i && (null == r ? void 0 : r.id) === e ? i : M.Jp;
}
function tx(e) {
    var t;
    let { metadataRaw: n } = null != (t = P.Z.questToDeliverForPlacement.get(tS(e))) ? t : {};
    return n;
}
function tL(e) {
    var t;
    let { adContext: n } = null != (t = P.Z.questToDeliverForPlacement.get(tS(e))) ? t : {};
    return n;
}
function tj(e) {
    var t, n;
    let r = null != (n = null == (t = e.userStatus) ? void 0 : t.claimedTier) ? n : 0;
    return "rewardsConfig" in e.config ? e.config.rewardsConfig.rewards[r] : e.config.rewards[r];
}
function tM(e) {
    return new Set(Object.keys(e.config.taskConfigV2.tasks));
}
function tk(e, t) {
    let n = new Map();
    for (let [r, i] of e)
        if (!eU(i)) {
            for (let e of tM(i))
                if (t.has(e)) {
                    n.set(r, i);
                    break;
                }
        }
    return n;
}
function tU(e) {
    var t, n;
    let { questId: r, sourceQuestContent: i, videoSessionId: a } = e,
        o = D.ZP.getState().getVideoProgress(r);
    if (null == o) return;
    let s = P.Z.getQuest(r);
    null != s &&
        (null == (t = s.userStatus) ? void 0 : t.enrolledAt) != null &&
        (null == (n = s.userStatus) ? void 0 : n.completedAt) == null &&
        tT(s, o.maxTimestampSec);
    let l = tP(o.maxTimestampSec, o.duration);
    (0, N.dA)({
        questId: r,
        event: k.rMx.QUEST_VIDEO_PROGRESSED,
        properties: {
            progress: l,
            video_timestamp_seconds: o.maxTimestampSec,
            video_session_id: a,
        },
        sourceQuestContent: i,
    }),
        (0, N.dA)({
            questId: r,
            event: k.rMx.QUEST_VIDEO_MODAL_CLOSED,
            properties: {
                video_progress: l,
                video_session_id: a,
                network_connection_speed: b.Z.getEffectiveConnectionSpeed(),
            },
            sourceQuestContent: i,
        });
}
function tG(e) {
    return e.sharePolicy !== u.X.NOT_SHAREABLE;
}
function tB(e, t) {
    return null != e && null != t && (0, h.p9)(t, O.Z, E.Z, y.Z, p.Z)[0];
}
