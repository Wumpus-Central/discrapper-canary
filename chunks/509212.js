n.d(t, {
    $H: () => eD,
    $J: () => e7,
    AV: () => ef,
    B2: () => tT,
    B3: () => th,
    BM: () => tt,
    Bg: () => eE,
    Bz: () => te,
    C1: () => tu,
    C9: () => tc,
    Dr: () => eP,
    F9: () => tI,
    FI: () => tE,
    FX: () => em,
    Fs: () => td,
    GN: () => e_,
    Gd: () => tg,
    HJ: () => e5,
    Jg: () => eA,
    K: () => ev,
    KM: () => eL,
    Kr: () => eg,
    LM: () => eI,
    Mo: () => tD,
    NI: () => tw,
    Nj: () => eR,
    OG: () => to,
    PB: () => e8,
    PM: () => eu,
    Pb: () => ex,
    Qe: () => Z,
    U3: () => $,
    V$: () => ta,
    VB: () => ty,
    Vl: () => eJ,
    WP: () => ee,
    Xh: () => es,
    Xv: () => ey,
    ZS: () => tv,
    ZZ: () => Y,
    Zp: () => tb,
    _D: () => H,
    _j: () => tl,
    _p: () => tp,
    b7: () => eX,
    bA: () => tS,
    f$: () => t_,
    f2: () => eU,
    fY: () => tr,
    gI: () => ti,
    hF: () => tR,
    hQ: () => er,
    iQ: () => q,
    il: () => eq,
    jY: () => tC,
    lQ: () => K,
    nc: () => ek,
    o9: () => eM,
    oo: () => eC,
    pO: () => ew,
    q6: () => X,
    q8: () => e4,
    qe: () => tA,
    t2: () => ed,
    u7: () => tm,
    uN: () => tN,
    vB: () => tx,
    vQ: () => eO,
    vR: () => eS,
    xN: () => eb,
    xn: () => eh,
    yH: () => tf,
    yI: () => ei,
    ys: () => eT,
    zE: () => ep,
    zK: () => ej,
    zi: () => z,
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
    S = n(272008),
    T = n(569984),
    A = n(497505),
    C = n(184299),
    N = n(937797),
    R = n(566078),
    P = n(312046),
    w = n(46140),
    D = n(981631),
    x = n(701488),
    L = n(388032);
function j(e, t, n) {
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
                j(e, t, n[t]);
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
function U(e, t) {
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
let G = 2592000000,
    B = new Set([l.n.PREMIUM_EXTENSION, l.n.PREMIUM_PERMANENT]);
function Z(e) {
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
let F = (e) => e.application_id === x.Ev || e.platform === D.M7m.XBOX,
    V = (e) => e.platform === D.M7m.PS4 || e.platform === D.M7m.PS5;
function H(e, t) {
    if (null == e) return !1;
    let n = e.name.toLowerCase(),
        r = R.r.build(t.config).application.name.toLowerCase();
    return F(e) || V(e) ? n === r : null != e.application_id && W(e.application_id, t);
}
function Y(e, t) {
    for (let [n, r] of e) if (H(t, r) && !z(r)) return r;
}
function W(e, t) {
    return null != R.r.build(t.config).application.ids.find((t) => t === e);
}
function K(e, t) {
    let n;
    for (let [r, i] of e)
        if (W(t, i) && !z(i)) {
            n = i;
            break;
        }
    return n;
}
function z(e) {
    return new Date(e.config.expiresAt).valueOf() <= Date.now();
}
function q(e) {
    if (!z(e)) return !1;
    let t = Date.now() - G,
        n = new Date(e.config.expiresAt).valueOf();
    return null != e.config.expiresAt && !(n <= t);
}
function X(e) {
    return (0, a.EQ)(e)
        .with({ config_version: 2 }, (e) => (0, P.Q)(e))
        .exhaustive();
}
function Q(e) {
    return null == e
        ? null
        : {
              lastBeatAt: e.last_beat_at,
              expiresAt: e.expires_at,
          };
}
function J(e) {
    let t = {};
    for (let [n, r] of Object.entries(e))
        t[n] = {
            eventName: r.event_name,
            value: r.value,
            updatedAt: r.updated_at,
            completedAt: r.completed_at,
            heartbeat: Q(r.heartbeat),
        };
    return t;
}
function $(e) {
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
        progress: J(e.progress),
    };
}
function ee(e) {
    return {
        id: e.id,
        preview: e.preview,
        config: X(e.config),
        userStatus: null == e.user_status ? null : $(e.user_status),
        targetedContent: e.targeted_content,
    };
}
function et(e) {
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
function en(e) {
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
        rewards: e.rewards.map(et),
        cosponsorMetadata: (0, P.s)(e.cosponsor_metadata),
    };
}
function er(e) {
    return {
        id: e.id,
        config: en(e.config),
        userStatus: null == e.user_status ? null : $(e.user_status),
    };
}
function ei(e) {
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
function ea(e) {
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
                        rewardCode: ei(t.reward.reward_code),
                    },
                },
            };
    }
}
function eo(e) {
    return {
        skuId: e.sku_id,
        tenantMetadata: ea(e.tenant_metadata),
        consumed: e.consumed,
    };
}
function es(e) {
    return {
        claimedAt: e.claimed_at,
        items: e.entitlements.map(eo),
        errors: e.errors,
    };
}
function el(e) {
    return {
        eventName: e.event_name,
        title: e.title,
        description: e.description,
        target: e.target,
    };
}
let ec = (e) => "".concat(location.protocol, "//").concat(location.host, "/quests/").concat(e);
function eu(e, t, n) {
    let r = t.get(n);
    if (null == r) return;
    let i = e.get(r.quest.id);
    if (null != i && !z(i)) return i;
}
let ed = (e) => {
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
function ef(e) {
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
function e_(e) {
    return Object.keys(w.a_).includes(A.jn[e]);
}
function ep(e, t) {
    if (!e_(t)) return !1;
    let n = A.jn[t];
    return (0, y.yE)(e.dismissedQuestContent, w.a_[n]);
}
function eh(e) {
    let t = e.rewardsConfig.rewards.find((e) => e.type === c.w.COLLECTIBLE);
    return (null == t ? void 0 : t.type) === c.w.COLLECTIBLE ? t : null;
}
function em(e) {
    let t = eh(e);
    return null != t && "expiresAtPremium" in t && null != t.expiresAtPremium ? ts(t.expiresAtPremium) : null;
}
function eg(e) {
    let t = eh(e);
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
function eE(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === c.w.FRACTIONAL_PREMIUM);
}
function eb(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === c.w.VIRTUAL_CURRENCY);
}
function ey(e) {
    return null != eh(e);
}
function eO(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === c.w.IN_GAME);
}
function ev(e) {
    var t;
    return null != (t = e.rewardsConfig.rewards.find((e) => e.type === c.w.IN_GAME)) ? t : null;
}
function eI(e) {
    let t = e.rewardsConfig.rewards.find((e) => e.type === c.w.VIRTUAL_CURRENCY);
    return null == t ? void 0 : t.orbQuantity;
}
function eS(e, t) {
    return e.targetedContent.includes(t);
}
function eT(e, t) {
    v.Z.captureException(e, U(M({}, t), { tags: U(M({}, null == t ? void 0 : t.tags), { app_context: "quests" }) }));
}
function eA(e, t) {
    if (null == t || null == e) return null;
    for (let n of t) {
        let t = Y(e, n);
        if (null != t) return t;
    }
    return null;
}
function eC(e) {
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
function eR(e) {
    let { quest: t } = e;
    return eN(t.config);
}
function eP(e) {
    let { quest: t } = e;
    return null != t.config.taskConfigV2.tasks[o.X.STREAM_ON_DESKTOP];
}
function ew(e) {
    return null != e.config.taskConfigV2.tasks[o.X.PLAY_ACTIVITY];
}
function eD(e) {
    return null != e && eR({ quest: e });
}
function ex(e) {
    if (!(0, N.CD)("QuestUtils") || null == e) return !1;
    let t = R.r.build(e.config).applications;
    return null != t && t.length > 1;
}
function eL(e) {
    let t = R.r.build(e.config).application.id;
    return ew(e) && t === w.Ts;
}
function ej(e, t) {
    return R.r.build(e.config).features.has(t);
}
function eM(e) {
    let { quest: t, idx: n } = e;
    if (null == n) return null;
    let r = t.config.rewardsConfig.rewards[n];
    return r.type === c.w.REWARD_CODE ? r : null;
}
function ek(e, t) {
    let n = R.r.build(e.config).application.link;
    (0, I._3)({
        questId: e.id,
        questContent: t.content,
        questContentCTA: t.ctaContent,
        questContentPosition: t.position,
        impressionId: t.impressionId,
        sourceQuestContent: t.sourceQuestContent,
    }),
        E.S.dispatch(D.CkL.QUEST_GAME_LINK_OPENED),
        (0, _.Z)(n);
}
let eU = (e, t) => {
    (0, I._3)({
        questId: e,
        questContent: t.content,
        questContentCTA: t.ctaContent,
        questContentPosition: t.position,
        impressionId: t.impressionId,
        sourceQuestContent: t.sourceQuestContent,
    }),
        (0, g.JG)(ec(e));
};
function eG(e) {
    return (null == e ? void 0 : e.type) === o.X.PLAY_ON_DESKTOP;
}
let eB = (e, t) => (e > 0 ? (0, i.floor)(Math.min(t / e, 1), 4) : 0),
    eZ = (e) => te(e) || T.Z.isProgressingOnDesktop(e.id),
    eF = (e, t) => {
        var n, r, a, o;
        let s =
            null == (o = e.userStatus) ||
            null == (a = o.progress) ||
            null == (r = a[t.type]) ||
            null == (n = r.heartbeat)
                ? void 0
                : n.lastBeatAt;
        if (null == s || !eZ(e)) return 0;
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
        if (e4(e)) {
            let n = T.Z.getOptimisticProgress(e.id, t.type);
            return null == n || n < l ? l : n;
        }
        return l + eF(e, t);
    },
    eH = 0.99,
    eY = (e, t) => {
        var n;
        let r = t.target;
        if ((null == (n = e.userStatus) ? void 0 : n.completedAt) != null) return r;
        let a = Math.min(r * eH, eV(e, t));
        return Math.max((0, i.floor)(a, 2), 0);
    },
    eW = (e) => {
        var t, n, r;
        let { quest: i, taskType: a, includeTaskTypes: s = o.T.ALL } = e,
            l = i.config.taskConfigV2,
            c = null != a ? a : null == (t = Object.values(l.tasks).filter((e) => s.has(e.type))[0]) ? void 0 : t.type,
            u = null != (r = l.tasks[c]) ? r : l.tasks[o.X.STREAM_ON_DESKTOP];
        if (null == u) throw Error("No task with type ".concat(a, " found for quest ").concat(i.id, "!"));
        let d = u.target,
            f = eY(i, u),
            _ = Object.values(l.tasks).find(eG),
            p = null == _ || null == (n = _.applications) ? void 0 : n.map((e) => e.id);
        return {
            progressSeconds: f,
            targetSeconds: d,
            targetMinutes: Math.ceil(d / b.Z.Seconds.MINUTE),
            percentComplete: eB(d, f),
            taskType: c,
            applications: p,
        };
    },
    eK = (e) => (o.T.ALL.has(e) ? e : null),
    ez = (e) => {
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
            let t = eK(e.eventName);
            if (null != t && (null == i ? void 0 : i.has(t)))
                return eW({
                    quest: r,
                    taskType: t,
                    includeTaskTypes: i,
                });
        }
        return eW({
            quest: r,
            includeTaskTypes: i,
        });
    },
    eq = (e, t) => {
        if (eJ(e))
            return {
                progressSeconds: 0,
                targetSeconds: 1,
                targetMinutes: 1,
                percentComplete: 0,
                taskType: o.X.STREAM_ON_DESKTOP,
            };
        if (e3(e))
            return ez({
                quest: e,
                includeTaskTypes: null != t ? t : te(e) ? o.T.CONSOLE : o.T.ALL,
            });
        if (e4(e))
            if (e6(e))
                return eW({
                    quest: e,
                    taskType: o.X.WATCH_VIDEO_ON_MOBILE,
                });
            else
                return eW({
                    quest: e,
                    taskType: o.X.WATCH_VIDEO,
                });
        return eD(e)
            ? eW({
                  quest: e,
                  taskType: o.X.PLAY_ON_DESKTOP,
              })
            : ew(e)
              ? eW({
                    quest: e,
                    taskType: o.X.PLAY_ACTIVITY,
                })
              : eW({
                    quest: e,
                    taskType: o.X.STREAM_ON_DESKTOP,
                });
    };
function eX(e) {
    var t, n, r, i;
    let a = R.r.build(e.config).defaultInGameTask;
    if (null == a) return null;
    let o =
            null !=
            (i =
                null == (r = e.userStatus) || null == (n = r.progress) || null == (t = n[a.eventName])
                    ? void 0
                    : t.value)
                ? i
                : 0,
        s = eB(a.target, o);
    return {
        title: a.messages.taskTitle,
        description: a.messages.taskDescription,
        target: a.target,
        progress: o,
        percentComplete: s,
    };
}
let eQ = (e) => (t) => e.some((e) => null != t.config.taskConfigV2.tasks[e]);
function eJ(e) {
    return Array.from(o.T.IN_GAME).some((t) => null != e.config.taskConfigV2.tasks[t]);
}
function e$(e) {
    return e0(e.targetSeconds - e.progressSeconds);
}
function e0(e) {
    return {
        minutes: Math.max(0, Math.floor(e / 60)),
        seconds: Math.max(0, Math.floor(e % 60)),
    };
}
function e1(e) {
    let t = e$(e);
    return e2(t.minutes, t.seconds);
}
function e2(e, t) {
    return "".concat(String(e).padStart(2, "0"), ":").concat(String(t).padStart(2, "0"));
}
let e3 = eQ([o.X.PLAY_ON_XBOX, o.X.PLAY_ON_PLAYSTATION]),
    e4 = eQ([o.X.WATCH_VIDEO, o.X.WATCH_VIDEO_ON_MOBILE]),
    e8 = eQ([o.X.WATCH_VIDEO]),
    e6 = eQ([o.X.WATCH_VIDEO_ON_MOBILE]),
    e5 = (e) => e6(e) && !e8(e);
function e7(e) {
    return e3(e);
}
let e9 = (e, t) => {
    var n, r;
    let i = null == e || null == (r = e.progress[t]) || null == (n = r.heartbeat) ? void 0 : n.expiresAt;
    if (null == i) return !1;
    let a = new Date(i).valueOf();
    return !isNaN(a) && a > Date.now();
};
function te(e) {
    return null != e.userStatus && (e9(e.userStatus, o.X.PLAY_ON_XBOX) || e9(e.userStatus, o.X.PLAY_ON_PLAYSTATION));
}
function tt(e) {
    return !!e4(e) && (0, n(952265).nf)(tm(e.id));
}
function tn() {
    f.Z.open(D.oAB.CONNECTIONS);
}
function tr(e, t) {
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
function ti(e, t) {
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
    let r = th(n);
    if (1 === r.length) return (0, p.Z)({ platformType: r.at(0) });
    d.Z.dispatch({
        type: "CONNECTIONS_GRID_MODAL_SHOW",
        onComplete: (e) => (0, p.Z)({ platformType: e }),
        includedPlatformTypes: new Set(r),
    });
}
function ta(e, t) {
    let { quest: n } = e;
    (0, I._3)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId,
        sourceQuestContent: t.sourceQuestContent,
    }),
        tn();
}
function to() {
    return window.location.pathname.startsWith(D.Z5c.QUEST_HOME);
}
function ts(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" };
    return null == e ? "" : new Date(e).toLocaleDateString(h.default.locale, t);
}
function tl(e) {
    return "xbox" === e.connected_account_type ? D.ABu.XBOX : D.ABu.PLAYSTATION;
}
function tc(e) {
    return tl(e) === D.ABu.XBOX ? L.t.mytEv7 : L.t.iDiwb2;
}
function tu(e) {
    var t, n, r, i;
    let { quest: a, rewardCode: o, selectedPlatformType: s, sharedQuestFields: l } = e,
        c = eC({ quest: a }),
        u = null != s ? s : null == o ? void 0 : o.platform,
        d = c
            ? eM({
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
function td(e) {
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
function tf(e) {
    let t = eR({ quest: e }) || eP({ quest: e }),
        n = e3(e),
        r = [];
    return t && r.push(w.cd.DESKTOP), n && r.push(w.cd.CONSOLE), r;
}
function t_(e) {
    var t;
    let n = null == (t = eh(e)) ? void 0 : t.expirationMode;
    return null != n && B.has(n);
}
function tp(e) {
    var t;
    return t_(e) && (null == (t = eh(e)) ? void 0 : t.expirationMode) === l.n.PREMIUM_PERMANENT;
}
function th(e) {
    let t = Object.keys(e.config.taskConfigV2.tasks),
        n = [];
    for (let e of t)
        switch (e) {
            case o.X.PLAY_ON_XBOX:
                n.push(D.ABu.XBOX);
                break;
            case o.X.PLAY_ON_PLAYSTATION:
                n.push(D.ABu.PLAYSTATION);
        }
    return n;
}
function tm(e) {
    return "VIDEO-QUEST-".concat(e);
}
function tg(e) {
    let t = e4(e),
        n = ew(e);
    return t || n;
}
function tE(e, t) {
    var n, r;
    z(e) ||
        (null == (n = e.userStatus) ? void 0 : n.enrolledAt) == null ||
        (null == (r = e.userStatus) ? void 0 : r.completedAt) != null ||
        (0, S.cT)(e.id, t);
}
function tb(e) {
    return {
        [A.jn.QUEST_BAR]: A.Ok.DESKTOP_ACCOUNT_PANEL_AREA,
        [A.jn.QUEST_BAR_V2]: A.Ok.DESKTOP_ACCOUNT_PANEL_AREA,
        [A.jn.QUEST_BAR_MOBILE]: A.Ok.MOBILE_HOME_DOCK_AREA,
    }[e];
}
function ty(e) {
    let t = tb(e);
    return null != t && w.v6.has(t);
}
let tO = "landscape";
function tv(e) {
    let t = e.assets.video;
    return null == t || null == t.width || null == t.height ? tO : t.width > t.height ? "landscape" : "portrait";
}
let tI = (e) =>
    e.percentComplete > 0
        ? L.intl.formatToPlainString(L.t["c59/Tk"], { remainTime: e1(e) })
        : L.intl.formatToPlainString(L.t.GNsKiY, { remainTime: e1(e) });
function tS(e, t) {
    return e <= 0 || t <= 0 ? 0 : e >= t ? 1 : Math.min(1, Math.round((e / t) * 100) / 100);
}
function tT(e) {
    var t, n;
    let r = R.r.build(e).defaultWatchVideoTask;
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
function tA(e, t) {
    var n;
    let { quest: r, adDecisionData: i } = null != (n = T.Z.questToDeliverForPlacement.get(tb(t))) ? n : {};
    return null != i && (null == r ? void 0 : r.id) === e ? i : w.Jp;
}
function tC(e) {
    var t;
    let { metadataRaw: n } = null != (t = T.Z.questToDeliverForPlacement.get(tb(e))) ? t : {};
    return n;
}
function tN(e) {
    var t;
    let { adContext: n } = null != (t = T.Z.questToDeliverForPlacement.get(tb(e))) ? t : {};
    return n;
}
function tR(e) {
    var t, n;
    let r = null != (n = null == (t = e.userStatus) ? void 0 : t.claimedTier) ? n : 0;
    return "rewardsConfig" in e.config ? e.config.rewardsConfig.rewards[r] : e.config.rewards[r];
}
function tP(e) {
    return new Set(Object.keys(e.config.taskConfigV2.tasks));
}
function tw(e, t) {
    let n = new Map();
    for (let [r, i] of e)
        if (!ex(i)) {
            for (let e of tP(i))
                if (t.has(e)) {
                    n.set(r, i);
                    break;
                }
        }
    return n;
}
function tD(e) {
    var t, n;
    let { questId: r, sourceQuestContent: i, videoSessionId: a } = e,
        o = C.ZP.getState().getVideoProgress(r);
    if (null == o) return;
    let s = T.Z.getQuest(r);
    null != s &&
        (null == (t = s.userStatus) ? void 0 : t.enrolledAt) != null &&
        (null == (n = s.userStatus) ? void 0 : n.completedAt) == null &&
        tE(s, o.maxTimestampSec);
    let l = tS(o.maxTimestampSec, o.duration);
    (0, I.dA)({
        questId: r,
        event: D.rMx.QUEST_VIDEO_PROGRESSED,
        properties: {
            progress: l,
            video_timestamp_seconds: o.maxTimestampSec,
            video_session_id: a,
        },
        sourceQuestContent: i,
    }),
        (0, I.dA)({
            questId: r,
            event: D.rMx.QUEST_VIDEO_MODAL_CLOSED,
            properties: {
                video_progress: l,
                video_session_id: a,
                network_connection_speed: m.Z.getEffectiveConnectionSpeed(),
            },
            sourceQuestContent: i,
        });
}
function tx(e) {
    return e.sharePolicy !== u.X.NOT_SHAREABLE;
}
