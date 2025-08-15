n.d(t, {
    $H: () => ew,
    $J: () => e6,
    AV: () => ed,
    B2: () => tI,
    B3: () => t_,
    BM: () => e9,
    Bg: () => eg,
    Bz: () => e7,
    C1: () => tl,
    C9: () => ts,
    Dr: () => eR,
    F9: () => tO,
    FI: () => tm,
    FX: () => eh,
    Fs: () => tc,
    GN: () => ef,
    Gd: () => th,
    HJ: () => e8,
    Jg: () => eS,
    K: () => eO,
    KM: () => eD,
    Kr: () => em,
    LM: () => ev,
    MM: () => tR,
    Mo: () => tP,
    Nj: () => eC,
    OG: () => ti,
    PB: () => e3,
    PM: () => ec,
    Qe: () => B,
    Rs: () => el,
    U3: () => J,
    V$: () => tr,
    VB: () => tE,
    Vl: () => eX,
    WP: () => $,
    Xh: () => eo,
    Xv: () => eb,
    ZS: () => ty,
    ZZ: () => H,
    Zp: () => tg,
    _D: () => Z,
    _j: () => to,
    _p: () => tf,
    b7: () => ez,
    bA: () => tv,
    f$: () => td,
    f2: () => ek,
    fY: () => tt,
    gI: () => tn,
    hF: () => tN,
    hQ: () => en,
    iQ: () => z,
    il: () => eK,
    jY: () => tS,
    lQ: () => W,
    nc: () => eM,
    o9: () => ex,
    oo: () => eA,
    pO: () => eP,
    q6: () => q,
    q8: () => e2,
    qe: () => tT,
    t2: () => eu,
    u7: () => tp,
    uN: () => tA,
    vB: () => tw,
    vQ: () => ey,
    vR: () => eI,
    xN: () => eE,
    xn: () => ep,
    yH: () => tu,
    yI: () => er,
    ys: () => eT,
    zE: () => e_,
    zK: () => eL,
    zi: () => K,
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
    f = n(230711),
    _ = n(782568);
n(597688);
var p = n(231757),
    h = n(706454),
    m = n(866960),
    g = n(572004),
    E = n(585483),
    b = n(70956),
    y = n(630388),
    O = n(823379),
    v = n(960048),
    I = n(617136),
    T = n(272008),
    S = n(569984),
    A = n(497505),
    N = n(184299),
    C = n(566078),
    R = n(312046),
    P = n(46140),
    w = n(981631),
    D = n(701488),
    L = n(388032);
function x(e, t, n) {
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
function M(e) {
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
                x(e, t, n[t]);
            });
    }
    return e;
}
function k(e, t) {
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
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : k(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let U = 2592000000,
    G = new Set([l.n.PREMIUM_EXTENSION, l.n.PREMIUM_PERMANENT]);
function B(e) {
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
let V = (e) => e.application_id === D.Ev || e.platform === w.M7m.XBOX,
    F = (e) => e.platform === w.M7m.PS4 || e.platform === w.M7m.PS5;
function Z(e, t) {
    if (null == e) return !1;
    let n = e.name.toLowerCase(),
        r = C.r.build(t.config).application.name.toLowerCase();
    return V(e) || F(e) ? n === r : null != e.application_id && Y(e.application_id, t);
}
function H(e, t) {
    for (let [n, r] of e) if (Z(t, r) && !K(r)) return r;
}
function Y(e, t) {
    return null != C.r.build(t.config).application.ids.find((t) => t === e);
}
function W(e, t) {
    let n;
    for (let [r, i] of e)
        if (Y(t, i) && !K(i)) {
            n = i;
            break;
        }
    return n;
}
function K(e) {
    return new Date(e.config.expiresAt).valueOf() <= Date.now();
}
function z(e) {
    if (!K(e)) return !1;
    let t = Date.now() - U,
        n = new Date(e.config.expiresAt).valueOf();
    return null != e.config.expiresAt && !(n <= t);
}
function q(e) {
    return (0, a.EQ)(e)
        .with({ config_version: 2 }, (e) => (0, R.Q)(e))
        .exhaustive();
}
function X(e) {
    return null == e
        ? null
        : {
              lastBeatAt: e.last_beat_at,
              expiresAt: e.expires_at,
          };
}
function Q(e) {
    let t = {};
    for (let [n, r] of Object.entries(e))
        t[n] = {
            eventName: r.event_name,
            value: r.value,
            updatedAt: r.updated_at,
            completedAt: r.completed_at,
            heartbeat: X(r.heartbeat),
        };
    return t;
}
function J(e) {
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
        progress: Q(e.progress),
    };
}
function $(e) {
    return {
        id: e.id,
        preview: e.preview,
        config: q(e.config),
        userStatus: null == e.user_status ? null : J(e.user_status),
        targetedContent: e.targeted_content,
    };
}
function ee(e) {
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
function et(e) {
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
        rewards: e.rewards.map(ee),
        cosponsorMetadata: (0, R.s)(e.cosponsor_metadata),
    };
}
function en(e) {
    return {
        id: e.id,
        config: et(e.config),
        userStatus: null == e.user_status ? null : J(e.user_status),
    };
}
function er(e) {
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
function ei(e) {
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
                        rewardCode: er(t.reward.reward_code),
                    },
                },
            };
    }
}
function ea(e) {
    return {
        skuId: e.sku_id,
        tenantMetadata: ei(e.tenant_metadata),
        consumed: e.consumed,
    };
}
function eo(e) {
    return {
        claimedAt: e.claimed_at,
        items: e.entitlements.map(ea),
        errors: e.errors,
    };
}
function es(e) {
    return {
        eventName: e.event_name,
        title: e.title,
        description: e.description,
        target: e.target,
    };
}
let el = (e) => "".concat(location.protocol, "//").concat(location.host, "/quests/").concat(e);
function ec(e, t, n) {
    let r = t.get(n);
    if (null == r) return;
    let i = e.get(r.quest.id);
    if (null != i && !K(i)) return i;
}
let eu = (e) => {
    switch (e) {
        case A.y$.XBOX:
            return L.intl.string(L.t.G84UWV);
        case A.y$.PLAYSTATION:
            return L.intl.string(L.t["6IeKx8"]);
        case A.y$.SWITCH:
            return L.intl.string(L.t["1pp0sr"]);
        case A.y$.PC:
            return L.intl.string(L.t["YK+wUl"]);
        case A.y$.CROSS_PLATFORM:
            return L.intl.string(L.t.UWVbzc);
    }
};
function ed(e) {
    var t, n;
    let { quest: r, taskDetails: i, thirdPartyTaskDetails: a } = e;
    if ((null == (t = r.userStatus) ? void 0 : t.completedAt) != null) return L.intl.string(L.t.BzFeTE);
    if ((null == (n = r.userStatus) ? void 0 : n.enrolledAt) != null) {
        let { percentComplete: e } = i,
            t = null != a ? a.percentComplete : e;
        return t >= 0.75
            ? L.intl.string(L.t.gvCR4O)
            : t >= 0.45 && t <= 0.55
              ? L.intl.string(L.t.JNx8sL)
              : t > 0
                ? L.intl.string(L.t.JMbfnZ)
                : L.intl.string(L.t["7e5k7O"]);
    }
    return L.intl.formatToPlainString(L.t.EQa7oq, { questName: r.config.messages.questName });
}
function ef(e) {
    return Object.keys(P.a_).includes(A.jn[e]);
}
function e_(e, t) {
    if (!ef(t)) return !1;
    let n = A.jn[t];
    return (0, y.yE)(e.dismissedQuestContent, P.a_[n]);
}
function ep(e) {
    let t = e.rewardsConfig.rewards.find((e) => e.type === c.w.COLLECTIBLE);
    return (null == t ? void 0 : t.type) === c.w.COLLECTIBLE ? t : null;
}
function eh(e) {
    let t = ep(e);
    return null != t && "expiresAtPremium" in t && null != t.expiresAtPremium ? ta(t.expiresAtPremium) : null;
}
function em(e) {
    let t = ep(e);
    if (null == t || !("expiresAt" in t) || null == t.expiresAt) return null;
    let n = new Date(e.expiresAt),
        i = new Date(t.expiresAt),
        a = (0, r.Z)(i, n),
        o = Math.floor(a / 30) + +(a % 30 >= 25);
    if (o >= 12) {
        let e = Math.floor(o / 12);
        return L.intl.formatToPlainString(L.t.PClsr6, { years: e });
    }
    {
        if (o > 0) return L.intl.formatToPlainString(L.t.kridzM, { months: o });
        let e = (0, r.Z)(i, n);
        if (!(e >= 7)) return L.intl.formatToPlainString(L.t.k2UNz8, { days: e });
        {
            let t = Math.ceil(e / 7);
            return L.intl.formatToPlainString(L.t.EmoBDw, { weeks: t });
        }
    }
}
function eg(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === c.w.FRACTIONAL_PREMIUM);
}
function eE(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === c.w.VIRTUAL_CURRENCY);
}
function eb(e) {
    return null != ep(e);
}
function ey(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === c.w.IN_GAME);
}
function eO(e) {
    var t;
    return null != (t = e.rewardsConfig.rewards.find((e) => e.type === c.w.IN_GAME)) ? t : null;
}
function ev(e) {
    let t = e.rewardsConfig.rewards.find((e) => e.type === c.w.VIRTUAL_CURRENCY);
    return null == t ? void 0 : t.orbQuantity;
}
function eI(e, t) {
    return e.targetedContent.includes(t);
}
function eT(e, t) {
    v.Z.captureException(e, j(M({}, t), { tags: j(M({}, null == t ? void 0 : t.tags), { app_context: "quests" }) }));
}
function eS(e, t) {
    if (null == t || null == e) return null;
    for (let n of t) {
        let t = H(e, n);
        if (null != t) return t;
    }
    return null;
}
function eA(e) {
    let {
            quest: { config: t },
        } = e,
        n = t.rewardsConfig;
    return (
        n.assignmentMethod === s.j.TIERED && n.rewards.length > 0 && n.rewards.every((e) => e.type === c.w.REWARD_CODE)
    );
}
function eN(e) {
    return null != e.taskConfigV2.tasks[o.X.PLAY_ON_DESKTOP];
}
function eC(e) {
    let { quest: t } = e;
    return eN(t.config);
}
function eR(e) {
    let { quest: t } = e;
    return null != t.config.taskConfigV2.tasks[o.X.STREAM_ON_DESKTOP];
}
function eP(e) {
    return null != e.config.taskConfigV2.tasks[o.X.PLAY_ACTIVITY];
}
function ew(e) {
    return null != e && eC({ quest: e });
}
function eD(e) {
    let t = C.r.build(e.config).application.id;
    return eP(e) && t === P.Ts;
}
function eL(e, t) {
    return C.r.build(e.config).features.has(t);
}
function ex(e) {
    let { quest: t, idx: n } = e;
    if (null == n) return null;
    let r = t.config.rewardsConfig.rewards[n];
    return r.type === c.w.REWARD_CODE ? r : null;
}
function eM(e, t) {
    let n = C.r.build(e.config).application.link;
    (0, I._3)({
        questId: e.id,
        questContent: t.content,
        questContentCTA: t.ctaContent,
        questContentPosition: t.position,
        impressionId: t.impressionId,
        sourceQuestContent: t.sourceQuestContent,
    }),
        E.S.dispatch(w.CkL.QUEST_GAME_LINK_OPENED),
        (0, _.Z)(n);
}
let ek = (e, t) => {
    (0, I._3)({
        questId: e,
        questContent: t.content,
        questContentCTA: t.ctaContent,
        questContentPosition: t.position,
        impressionId: t.impressionId,
        sourceQuestContent: t.sourceQuestContent,
    }),
        (0, g.JG)(el(e));
};
function ej(e) {
    return (null == e ? void 0 : e.type) === o.X.PLAY_ON_DESKTOP;
}
let eU = (e, t) => (e > 0 ? (0, i.floor)(Math.min(t / e, 1), 4) : 0),
    eG = (e) => e7(e) || S.Z.isProgressingOnDesktop(e.id),
    eB = (e, t) => {
        var n, r, a, o;
        let s =
            null == (o = e.userStatus) ||
            null == (a = o.progress) ||
            null == (r = a[t.type]) ||
            null == (n = r.heartbeat)
                ? void 0
                : n.lastBeatAt;
        if (null == s || !eG(e)) return 0;
        let l = Date.now() - new Date(s).valueOf();
        return (0, i.floor)(l / b.Z.Millis.SECOND, 2);
    },
    eV = (e, t) => {
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
        if (e2(e)) {
            let n = S.Z.getOptimisticProgress(e.id, t.type);
            return null == n || n < l ? l : n;
        }
        return l + eB(e, t);
    },
    eF = 0.99,
    eZ = (e, t) => {
        var n;
        let r = t.target;
        if ((null == (n = e.userStatus) ? void 0 : n.completedAt) != null) return r;
        let a = Math.min(r * eF, eV(e, t));
        return Math.max((0, i.floor)(a, 2), 0);
    },
    eH = (e) => {
        var t, n;
        let { quest: r, taskType: i, includeTaskTypes: a = o.T.ALL } = e,
            s = r.config.taskConfigV2,
            l = null != i ? i : null == (t = Object.values(s.tasks).filter((e) => a.has(e.type))[0]) ? void 0 : t.type,
            c = null != (n = s.tasks[l]) ? n : s.tasks[o.X.STREAM_ON_DESKTOP];
        if (null == c) throw Error("No task with type ".concat(i, " found for quest ").concat(r.id, "!"));
        let u = c.target,
            d = eZ(r, c),
            f = ej(c) && null != c.applications && c.applications.length > 1;
        return {
            progressSeconds: d,
            targetSeconds: u,
            targetMinutes: Math.ceil(u / b.Z.Seconds.MINUTE),
            percentComplete: eU(u, d),
            taskType: l,
            isSponsoredQuest: f,
        };
    },
    eY = (e) => (o.T.ALL.has(e) ? e : null),
    eW = (e) => {
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
            .filter(O.lm)) {
            let t = eY(e.eventName);
            if (null != t && (null == i ? void 0 : i.has(t)))
                return eH({
                    quest: r,
                    taskType: t,
                    includeTaskTypes: i,
                });
        }
        return eH({
            quest: r,
            includeTaskTypes: i,
        });
    },
    eK = (e, t) => {
        if (eX(e))
            return {
                progressSeconds: 0,
                targetSeconds: 1,
                targetMinutes: 1,
                percentComplete: 0,
                taskType: o.X.STREAM_ON_DESKTOP,
            };
        if (e1(e))
            return eW({
                quest: e,
                includeTaskTypes: null != t ? t : e7(e) ? o.T.CONSOLE : o.T.ALL,
            });
        if (e2(e))
            if (e4(e))
                return eH({
                    quest: e,
                    taskType: o.X.WATCH_VIDEO_ON_MOBILE,
                });
            else
                return eH({
                    quest: e,
                    taskType: o.X.WATCH_VIDEO,
                });
        return ew(e)
            ? eH({
                  quest: e,
                  taskType: o.X.PLAY_ON_DESKTOP,
              })
            : eP(e)
              ? eH({
                    quest: e,
                    taskType: o.X.PLAY_ACTIVITY,
                })
              : eH({
                    quest: e,
                    taskType: o.X.STREAM_ON_DESKTOP,
                });
    };
function ez(e) {
    var t, n, r, i;
    let a = C.r.build(e.config).defaultInGameTask;
    if (null == a) return null;
    let o =
            null !=
            (i =
                null == (r = e.userStatus) || null == (n = r.progress) || null == (t = n[a.eventName])
                    ? void 0
                    : t.value)
                ? i
                : 0,
        s = eU(a.target, o);
    return {
        title: a.messages.taskTitle,
        description: a.messages.taskDescription,
        target: a.target,
        progress: o,
        percentComplete: s,
    };
}
let eq = (e) => (t) => e.some((e) => null != t.config.taskConfigV2.tasks[e]);
function eX(e) {
    return Array.from(o.T.IN_GAME).some((t) => null != e.config.taskConfigV2.tasks[t]);
}
function eQ(e) {
    return eJ(e.targetSeconds - e.progressSeconds);
}
function eJ(e) {
    return {
        minutes: Math.max(0, Math.floor(e / 60)),
        seconds: Math.max(0, Math.floor(e % 60)),
    };
}
function e$(e) {
    let t = eQ(e);
    return e0(t.minutes, t.seconds);
}
function e0(e, t) {
    return "".concat(String(e).padStart(2, "0"), ":").concat(String(t).padStart(2, "0"));
}
let e1 = eq([o.X.PLAY_ON_XBOX, o.X.PLAY_ON_PLAYSTATION]),
    e2 = eq([o.X.WATCH_VIDEO, o.X.WATCH_VIDEO_ON_MOBILE]),
    e3 = eq([o.X.WATCH_VIDEO]),
    e4 = eq([o.X.WATCH_VIDEO_ON_MOBILE]),
    e8 = (e) => e4(e) && !e3(e);
function e6(e) {
    return e1(e);
}
let e5 = (e, t) => {
    var n, r;
    let i = null == e || null == (r = e.progress[t]) || null == (n = r.heartbeat) ? void 0 : n.expiresAt;
    if (null == i) return !1;
    let a = new Date(i).valueOf();
    return !isNaN(a) && a > Date.now();
};
function e7(e) {
    return null != e.userStatus && (e5(e.userStatus, o.X.PLAY_ON_XBOX) || e5(e.userStatus, o.X.PLAY_ON_PLAYSTATION));
}
function e9(e) {
    return !!e2(e) && (0, n(952265).nf)(tp(e.id));
}
function te() {
    f.Z.open(w.oAB.CONNECTIONS);
}
function tt(e, t) {
    let { platformType: n, quest: r } = e;
    (0, I._3)({
        questId: r.id,
        questContent: t.content,
        sourceQuestContent: t.sourceQuestContent,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId,
    }),
        (0, p.Z)({
            platformType: n,
            location: t.ctaContent,
        });
}
function tn(e, t) {
    let { quest: n } = e;
    (0, I._3)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentRowIndex: t.rowIndex,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId,
        sourceQuestContent: t.sourceQuestContent,
    });
    let r = t_(n);
    if (1 === r.length) return (0, p.Z)({ platformType: r.at(0) });
    d.Z.dispatch({
        type: "CONNECTIONS_GRID_MODAL_SHOW",
        onComplete: (e) => (0, p.Z)({ platformType: e }),
        includedPlatformTypes: new Set(r),
    });
}
function tr(e, t) {
    let { quest: n } = e;
    (0, I._3)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId,
        sourceQuestContent: t.sourceQuestContent,
    }),
        te();
}
function ti() {
    return window.location.pathname.startsWith(w.Z5c.QUEST_HOME);
}
function ta(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" };
    return null == e ? "" : new Date(e).toLocaleDateString(h.default.locale, t);
}
function to(e) {
    return "xbox" === e.connected_account_type ? w.ABu.XBOX : w.ABu.PLAYSTATION;
}
function ts(e) {
    return to(e) === w.ABu.XBOX ? L.t.mytEv7 : L.t.iDiwb2;
}
function tl(e) {
    var t, n, r, i;
    let { quest: a, rewardCode: o, selectedPlatformType: s, sharedQuestFields: l } = e,
        c = eA({ quest: a }),
        u = null != s ? s : null == o ? void 0 : o.platform,
        d = c
            ? ex({
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
function tc(e) {
    let { isTargetedDisclosure: t, gamePublisher: n, gameTitle: r, cosponsorName: i } = e;
    return t
        ? null == i
            ? L.intl.formatToPlainString(L.t.Piihy8, { gamePublisher: n })
            : L.intl.formatToPlainString(L.t.DV47Gx, {
                  gamePublisher: n,
                  cosponsorName: i,
              })
        : L.intl.formatToPlainString(L.t.tOWwxM, {
              gamePublisher: n,
              gameTitle: r,
          });
}
function tu(e) {
    let t = eC({ quest: e }) || eR({ quest: e }),
        n = e1(e),
        r = [];
    return t && r.push(P.cd.DESKTOP), n && r.push(P.cd.CONSOLE), r;
}
function td(e) {
    var t;
    let n = null == (t = ep(e)) ? void 0 : t.expirationMode;
    return null != n && G.has(n);
}
function tf(e) {
    var t;
    return td(e) && (null == (t = ep(e)) ? void 0 : t.expirationMode) === l.n.PREMIUM_PERMANENT;
}
function t_(e) {
    let t = Object.keys(e.config.taskConfigV2.tasks),
        n = [];
    for (let e of t)
        switch (e) {
            case o.X.PLAY_ON_XBOX:
                n.push(w.ABu.XBOX);
                break;
            case o.X.PLAY_ON_PLAYSTATION:
                n.push(w.ABu.PLAYSTATION);
        }
    return n;
}
function tp(e) {
    return "VIDEO-QUEST-".concat(e);
}
function th(e) {
    let t = e2(e),
        n = eP(e);
    return t || n;
}
function tm(e, t) {
    var n, r;
    K(e) ||
        (null == (n = e.userStatus) ? void 0 : n.enrolledAt) == null ||
        (null == (r = e.userStatus) ? void 0 : r.completedAt) != null ||
        (0, T.cT)(e.id, t);
}
function tg(e) {
    return {
        [A.jn.QUEST_BAR]: A.Ok.DESKTOP_ACCOUNT_PANEL_AREA,
        [A.jn.QUEST_BAR_V2]: A.Ok.DESKTOP_ACCOUNT_PANEL_AREA,
        [A.jn.QUEST_BAR_MOBILE]: A.Ok.MOBILE_HOME_DOCK_AREA,
    }[e];
}
function tE(e) {
    let t = tg(e);
    return null != t && P.v6.has(t);
}
let tb = "landscape";
function ty(e) {
    let t = e.assets.video;
    return null == t || null == t.width || null == t.height ? tb : t.width > t.height ? "landscape" : "portrait";
}
let tO = (e) =>
    e.percentComplete > 0
        ? L.intl.formatToPlainString(L.t["c59/Tk"], { remainTime: e$(e) })
        : L.intl.formatToPlainString(L.t.GNsKiY, { remainTime: e$(e) });
function tv(e, t) {
    return e <= 0 || t <= 0 ? 0 : e >= t ? 1 : Math.min(1, Math.round((e / t) * 100) / 100);
}
function tI(e) {
    var t, n;
    let r = C.r.build(e).defaultWatchVideoTask;
    return null !=
        (n =
            null != (t = null == r ? void 0 : r.messages.videoEndCtaButtonLabel)
                ? t
                : null == r
                  ? void 0
                  : r.messages.videoEndCtaTitle)
        ? n
        : L.intl.string(L.t.iiTtpK);
}
function tT(e, t) {
    var n;
    let { quest: r, adDecisionData: i } = null != (n = S.Z.questToDeliverForPlacement.get(tg(t))) ? n : {};
    return null != i && (null == r ? void 0 : r.id) === e ? i : P.Jp;
}
function tS(e) {
    var t;
    let { metadataRaw: n } = null != (t = S.Z.questToDeliverForPlacement.get(tg(e))) ? t : {};
    return n;
}
function tA(e) {
    var t;
    let { adContext: n } = null != (t = S.Z.questToDeliverForPlacement.get(tg(e))) ? t : {};
    return n;
}
function tN(e) {
    var t, n;
    let r = null != (n = null == (t = e.userStatus) ? void 0 : t.claimedTier) ? n : 0;
    return "rewardsConfig" in e.config ? e.config.rewardsConfig.rewards[r] : e.config.rewards[r];
}
function tC(e) {
    return new Set(Object.keys(e.config.taskConfigV2.tasks));
}
function tR(e, t) {
    let n = new Map();
    for (let [r, i] of e)
        for (let e of tC(i))
            if (t.has(e)) {
                n.set(r, i);
                break;
            }
    return n;
}
function tP(e) {
    var t, n;
    let { questId: r, sourceQuestContent: i, videoSessionId: a } = e,
        o = N.ZP.getState().getVideoProgress(r);
    if (null == o) return;
    let s = S.Z.getQuest(r);
    null != s &&
        (null == (t = s.userStatus) ? void 0 : t.enrolledAt) != null &&
        (null == (n = s.userStatus) ? void 0 : n.completedAt) == null &&
        tm(s, o.maxTimestampSec);
    let l = tv(o.maxTimestampSec, o.duration);
    (0, I.dA)({
        questId: r,
        event: w.rMx.QUEST_VIDEO_PROGRESSED,
        properties: {
            progress: l,
            video_timestamp_seconds: o.maxTimestampSec,
            video_session_id: a,
        },
        sourceQuestContent: i,
    }),
        (0, I.dA)({
            questId: r,
            event: w.rMx.QUEST_VIDEO_MODAL_CLOSED,
            properties: {
                video_progress: l,
                video_session_id: a,
                network_connection_speed: m.Z.getEffectiveConnectionSpeed(),
            },
            sourceQuestContent: i,
        });
}
function tw(e) {
    return e.sharePolicy !== u.X.NOT_SHAREABLE;
}
