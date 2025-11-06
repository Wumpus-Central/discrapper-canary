n.d(t, {
    $H: () => eG,
    $J: () => ts,
    $V: () => th,
    AV: () => eE,
    B2: () => tL,
    B3: () => tT,
    BM: () => tu,
    Bg: () => eT,
    Bz: () => tc,
    C1: () => tb,
    C9: () => tE,
    Dr: () => ek,
    F9: () => tD,
    FI: () => tC,
    FX: () => ev,
    Fs: () => ty,
    GN: () => eb,
    Gd: () => tA,
    HJ: () => to,
    Jg: () => ex,
    K: () => eR,
    KM: () => eZ,
    Kr: () => eI,
    LM: () => eP,
    Mo: () => tZ,
    NI: () => tB,
    NL: () => tH,
    Nj: () => ej,
    Nt: () => tY,
    PB: () => ti,
    PM: () => em,
    Pb: () => eB,
    Qe: () => K,
    Rc: () => tV,
    Rt: () => e6,
    T2: () => tW,
    U3: () => ea,
    V$: () => tp,
    VB: () => tR,
    Vl: () => e5,
    WP: () => eo,
    Xh: () => e_,
    Xv: () => eA,
    ZS: () => tw,
    ZZ: () => Q,
    Zp: () => tN,
    _D: () => X,
    _j: () => tg,
    _p: () => tI,
    b7: () => e4,
    bA: () => tx,
    f$: () => tv,
    f2: () => eW,
    fY: () => tf,
    gI: () => t_,
    hF: () => tU,
    hQ: () => ec,
    iQ: () => et,
    il: () => e3,
    jY: () => tj,
    lQ: () => $,
    nc: () => eY,
    o9: () => eV,
    oo: () => eL,
    pO: () => eU,
    q6: () => en,
    q8: () => tr,
    qe: () => tM,
    t2: () => eg,
    u7: () => tS,
    uN: () => tk,
    vB: () => tF,
    vQ: () => eC,
    vR: () => ew,
    wj: () => eN,
    xN: () => eS,
    xn: () => eO,
    yH: () => tO,
    yI: () => eu,
    ys: () => eD,
    zE: () => ey,
    zK: () => eF,
    zi: () => ee,
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
    C = n(358085),
    N = n(960048),
    R = n(22095),
    P = n(617136),
    w = n(569984),
    D = n(497505),
    x = n(184299),
    L = n(937797),
    M = n(566078),
    j = n(312046),
    k = n(46140),
    U = n(981631),
    G = n(701488),
    B = n(388032);
function Z(e, t, n) {
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
function F(e) {
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
                Z(e, t, n[t]);
            });
    }
    return e;
}
function V(e, t) {
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
function H(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : V(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let Y = 2592000000,
    W = new Set([l.n.PREMIUM_EXTENSION, l.n.PREMIUM_PERMANENT]);
function K(e) {
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
let z = (e) => e.application_id === G.Ev || e.platform === U.M7m.XBOX,
    q = (e) => e.platform === U.M7m.PS4 || e.platform === U.M7m.PS5;
function X(e, t) {
    if (null == e) return !1;
    let n = e.name.toLowerCase(),
        r = M.r.build(t.config).application.name.toLowerCase();
    return z(e) || q(e)
        ? n === r
        : (null != t && t.id === k.Jk && e.application_id === k.$z) ||
              (null != e.application_id && J(e.application_id, t));
}
function Q(e, t) {
    for (let [n, r] of e) if (X(t, r) && !ee(r)) return r;
}
function J(e, t) {
    let n = M.r.build(t.config).applications;
    return null != n && n.some((t) => t.id === e);
}
function $(e, t) {
    let n;
    for (let [r, i] of e)
        if (J(t, i) && !ee(i)) {
            n = i;
            break;
        }
    return n;
}
function ee(e) {
    return new Date(e.config.expiresAt).valueOf() <= Date.now();
}
function et(e) {
    if (!ee(e)) return !1;
    let t = Date.now() - Y,
        n = new Date(e.config.expiresAt).valueOf();
    return null != e.config.expiresAt && !(n <= t);
}
function en(e) {
    return (0, a.EQ)(e)
        .with({ config_version: 2 }, (e) => (0, j.Q)(e))
        .exhaustive();
}
function er(e) {
    return null == e
        ? null
        : {
              lastBeatAt: e.last_beat_at,
              expiresAt: e.expires_at,
          };
}
function ei(e) {
    let t = {};
    for (let [n, r] of Object.entries(e))
        t[n] = {
            eventName: r.event_name,
            value: r.value,
            updatedAt: r.updated_at,
            completedAt: r.completed_at,
            heartbeat: er(r.heartbeat),
        };
    return t;
}
function ea(e) {
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
        progress: ei(e.progress),
    };
}
function eo(e) {
    return {
        id: e.id,
        preview: e.preview,
        config: en(e.config),
        userStatus: null == e.user_status ? null : ea(e.user_status),
        targetedContent: e.targeted_content,
    };
}
function es(e) {
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
function el(e) {
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
        rewards: e.rewards.map(es),
        cosponsorMetadata: (0, j.s)(e.cosponsor_metadata),
    };
}
function ec(e) {
    return {
        id: e.id,
        config: el(e.config),
        userStatus: null == e.user_status ? null : ea(e.user_status),
    };
}
function eu(e) {
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
function ed(e) {
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
                        rewardCode: eu(t.reward.reward_code),
                    },
                },
            };
    }
}
function ef(e) {
    return {
        skuId: e.sku_id,
        tenantMetadata: ed(e.tenant_metadata),
        consumed: e.consumed,
    };
}
function e_(e) {
    return {
        claimedAt: e.claimed_at,
        items: e.entitlements.map(ef),
        errors: e.errors,
    };
}
function ep(e) {
    return {
        eventName: e.event_name,
        title: e.title,
        description: e.description,
        target: e.target,
    };
}
let eh = (e) => "".concat(location.protocol, "//").concat(location.host, "/quests/").concat(e);
function em(e, t, n) {
    let r = t.get(n);
    if (null == r) return;
    let i = e.get(r.quest.id);
    if (null != i && !ee(i)) return i;
}
let eg = (e) => {
    switch (e) {
        case D.y$.XBOX:
            return B.intl.string(B.t.G84UWZ);
        case D.y$.PLAYSTATION:
            return B.intl.string(B.t["6IeKx2"]);
        case D.y$.SWITCH:
            return B.intl.string(B.t["1pp0su"]);
        case D.y$.PC:
            return B.intl.string(B.t["YK+wUg"]);
        case D.y$.CROSS_PLATFORM:
            return B.intl.string(B.t.UWVbzV);
    }
};
function eE(e) {
    var t, n;
    let { quest: r, taskDetails: i, thirdPartyTaskDetails: a } = e;
    if ((null == (t = r.userStatus) ? void 0 : t.completedAt) != null) return B.intl.string(B.t.BzFeTF);
    if ((null == (n = r.userStatus) ? void 0 : n.enrolledAt) != null) {
        let { percentComplete: e } = i,
            t = null != a ? a.percentComplete : e;
        return t >= 0.75
            ? B.intl.string(B.t.gvCR4H)
            : t >= 0.45 && t <= 0.55
              ? B.intl.string(B.t.JNx8sG)
              : t > 0
                ? B.intl.string(B.t.JMbfnc)
                : B.intl.string(B.t["7e5k7L"]);
    }
    return B.intl.formatToPlainString(B.t.EQa7os, { questName: r.config.messages.questName });
}
function eb(e) {
    return Object.keys(k.a_).includes(D.jn[e]);
}
function ey(e, t) {
    if (!eb(t)) return !1;
    let n = D.jn[t];
    return (0, S.yE)(e.dismissedQuestContent, k.a_[n]);
}
function eO(e) {
    let t = e.rewardsConfig.rewards.find((e) => e.type === c.w.COLLECTIBLE);
    return (null == t ? void 0 : t.type) === c.w.COLLECTIBLE ? t : null;
}
function ev(e) {
    let t = eO(e);
    return null != t && "expiresAtPremium" in t && null != t.expiresAtPremium ? tm(t.expiresAtPremium) : null;
}
function eI(e) {
    let t = eO(e);
    if (null == t || !("expiresAt" in t) || null == t.expiresAt) return null;
    let n = new Date(e.expiresAt),
        i = new Date(t.expiresAt),
        a = (0, r.Z)(i, n),
        o = Math.floor(a / 30) + +(a % 30 >= 25);
    if (o >= 12) {
        let e = Math.floor(o / 12);
        return B.intl.formatToPlainString(B.t.PClsrw, { years: e });
    }
    {
        if (o > 0) return B.intl.formatToPlainString(B.t.kridzK, { months: o });
        let e = (0, r.Z)(i, n);
        if (!(e >= 7)) return B.intl.formatToPlainString(B.t["k2UNz+"], { days: e });
        {
            let t = Math.ceil(e / 7);
            return B.intl.formatToPlainString(B.t.EmoBD2, { weeks: t });
        }
    }
}
function eT(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === c.w.FRACTIONAL_PREMIUM);
}
function eS(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === c.w.VIRTUAL_CURRENCY);
}
function eA(e) {
    return null != eO(e);
}
function eC(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === c.w.IN_GAME);
}
function eN(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === c.w.REWARD_CODE);
}
function eR(e) {
    var t;
    return null != (t = e.rewardsConfig.rewards.find((e) => e.type === c.w.IN_GAME)) ? t : null;
}
function eP(e) {
    let t = e.rewardsConfig.rewards.find((e) => e.type === c.w.VIRTUAL_CURRENCY);
    return null == t ? void 0 : t.orbQuantity;
}
function ew(e, t) {
    return e.targetedContent.includes(t);
}
function eD(e, t) {
    N.Z.captureException(e, H(F({}, t), { tags: H(F({}, null == t ? void 0 : t.tags), { app_context: "quests" }) }));
}
function ex(e, t) {
    if (null == t || null == e) return null;
    for (let n of t) {
        let t = Q(e, n);
        if (null != t) return t;
    }
    return null;
}
function eL(e) {
    let {
            quest: { config: t },
        } = e,
        n = t.rewardsConfig;
    return (
        n.assignmentMethod === s.j.TIERED && n.rewards.length > 0 && n.rewards.every((e) => e.type === c.w.REWARD_CODE)
    );
}
function eM(e) {
    return null != e.taskConfigV2.tasks[o.X.PLAY_ON_DESKTOP];
}
function ej(e) {
    let { quest: t } = e;
    return eM(t.config);
}
function ek(e) {
    let { quest: t } = e;
    return null != t.config.taskConfigV2.tasks[o.X.STREAM_ON_DESKTOP];
}
function eU(e) {
    return null != e.config.taskConfigV2.tasks[o.X.PLAY_ACTIVITY];
}
function eG(e) {
    return null != e && ej({ quest: e });
}
function eB(e) {
    if (!(0, L.CD)("QuestUtils") || null == e) return !1;
    let t = M.r.build(e.config).applications;
    return null != t && t.length > 1;
}
function eZ(e) {
    let t = M.r.build(e.config).application.id;
    return eU(e) && t === k.Ts;
}
function eF(e, t) {
    return M.r.build(e.config).features.has(t);
}
function eV(e) {
    let { quest: t, idx: n } = e;
    if (null == n) return null;
    let r = t.config.rewardsConfig.rewards[n];
    return r.type === c.w.REWARD_CODE ? r : null;
}
function eH(e) {
    var t, n;
    let r = e.config.ctaConfig;
    return null == r
        ? null
        : ((0, C.isIOS)() || "ios" === (0, C.getOS)()) && (null == (t = r.ios) ? void 0 : t.iosAppId) != null
          ? "https://apps.apple.com/app/id".concat(r.ios.iosAppId)
          : ((0, C.isAndroid)() || "android" === (0, C.getOS)()) &&
              (null == (n = r.android) ? void 0 : n.androidAppId) != null
            ? "https://play.google.com/store/apps/details?id=".concat(r.android.androidAppId)
            : null;
}
function eY(e, t) {
    let n = M.r.build(e.config).ctaLink,
        r = eH(e);
    null != r && (n = r),
        (0, P._3)({
            questId: e.id,
            questContent: t.content,
            questContentCTA: t.ctaContent,
            questContentPosition: t.position,
            impressionId: t.impressionId,
            sourceQuestContent: t.sourceQuestContent,
        }),
        I.S.dispatch(U.CkL.QUEST_GAME_LINK_OPENED),
        (0, f.Z)(n);
}
let eW = (e, t) => {
    (0, P._3)({
        questId: e,
        questContent: t.content,
        questContentCTA: t.ctaContent,
        questContentPosition: t.position,
        impressionId: t.impressionId,
        sourceQuestContent: t.sourceQuestContent,
    }),
        (0, v.JG)(eh(e));
};
function eK(e) {
    return (null == e ? void 0 : e.type) === o.X.PLAY_ON_DESKTOP;
}
let ez = (e, t) => (e > 0 ? (0, i.floor)(Math.min(t / e, 1), 4) : 0),
    eq = (e) => tc(e) || w.Z.isProgressingOnDesktop(e.id),
    eX = (e, t) => {
        var n, r, a, o;
        let s =
            null == (o = e.userStatus) ||
            null == (a = o.progress) ||
            null == (r = a[t.type]) ||
            null == (n = r.heartbeat)
                ? void 0
                : n.lastBeatAt;
        if (null == s || !eq(e)) return 0;
        let l = Date.now() - new Date(s).valueOf();
        return (0, i.floor)(l / T.Z.Millis.SECOND, 2);
    },
    eQ = (e, t) => {
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
        if (tr(e)) {
            let n = w.Z.getOptimisticProgress(e.id, t.type);
            return null == n || n < l ? l : n;
        }
        return l + eX(e, t);
    },
    eJ = 0.99,
    e$ = (e, t) => {
        var n;
        let r = t.target;
        if ((null == (n = e.userStatus) ? void 0 : n.completedAt) != null) return r;
        let a = Math.min(r * eJ, eQ(e, t));
        return Math.max((0, i.floor)(a, 2), 0);
    },
    e0 = (e) => {
        var t, n, r;
        let { quest: i, taskType: a, includeTaskTypes: s = o.T.ALL } = e,
            l = i.config.taskConfigV2,
            c = null != a ? a : null == (t = Object.values(l.tasks).filter((e) => s.has(e.type))[0]) ? void 0 : t.type,
            u = null != (r = l.tasks[c]) ? r : l.tasks[o.X.STREAM_ON_DESKTOP];
        if (null == u) throw Error("No task with type ".concat(a, " found for quest ").concat(i.id, "!"));
        let d = u.target,
            f = e$(i, u),
            _ = Object.values(l.tasks).find(eK),
            p = null == _ || null == (n = _.applications) ? void 0 : n.map((e) => e.id);
        return {
            progressSeconds: f,
            targetSeconds: d,
            targetMinutes: Math.ceil(d / T.Z.Seconds.MINUTE),
            percentComplete: ez(d, f),
            taskType: c,
            applications: p,
        };
    },
    e1 = (e) => (o.T.ALL.has(e) ? e : null),
    e2 = (e) => {
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
            let t = e1(e.eventName);
            if (null != t && (null == i ? void 0 : i.has(t)))
                return e0({
                    quest: r,
                    taskType: t,
                    includeTaskTypes: i,
                });
        }
        return e0({
            quest: r,
            includeTaskTypes: i,
        });
    },
    e3 = (e, t) => {
        if (e5(e))
            return {
                progressSeconds: 0,
                targetSeconds: 1,
                targetMinutes: 1,
                percentComplete: 0,
                taskType: o.X.STREAM_ON_DESKTOP,
            };
        if (tn(e))
            return e2({
                quest: e,
                includeTaskTypes: null != t ? t : tc(e) ? o.T.CONSOLE : o.T.ALL,
            });
        if (tr(e))
            if (ta(e))
                return e0({
                    quest: e,
                    taskType: o.X.WATCH_VIDEO_ON_MOBILE,
                });
            else
                return e0({
                    quest: e,
                    taskType: o.X.WATCH_VIDEO,
                });
        return eG(e)
            ? e0({
                  quest: e,
                  taskType: o.X.PLAY_ON_DESKTOP,
              })
            : eU(e)
              ? e0({
                    quest: e,
                    taskType: o.X.PLAY_ACTIVITY,
                })
              : e0({
                    quest: e,
                    taskType: o.X.STREAM_ON_DESKTOP,
                });
    };
function e4(e) {
    var t, n, r, i;
    let a = M.r.build(e.config).defaultInGameTask;
    if (null == a) return null;
    let o =
            null !=
            (i = null == (r = e.userStatus) || null == (n = r.progress) || null == (t = n[a.type]) ? void 0 : t.value)
                ? i
                : 0,
        s = ez(a.target, o);
    return {
        title: a.messages.taskTitle,
        description: a.messages.taskDescription,
        target: a.target,
        progress: o,
        percentComplete: s,
    };
}
let e8 = (e) => (t) => e.some((e) => null != t.config.taskConfigV2.tasks[e]);
function e5(e) {
    return Array.from(o.T.IN_GAME).some((t) => null != e.config.taskConfigV2.tasks[t]);
}
function e6(e) {
    return (e5(e) || eU(e)) && e.config.features.includes(k.S7.START_QUEST_CTA);
}
function e7(e) {
    return e9(e.targetSeconds - e.progressSeconds);
}
function e9(e) {
    return {
        minutes: Math.max(0, Math.floor(e / 60)),
        seconds: Math.max(0, Math.floor(e % 60)),
    };
}
function te(e) {
    let t = e7(e);
    return tt(t.minutes, t.seconds);
}
function tt(e, t) {
    return "".concat(String(e).padStart(2, "0"), ":").concat(String(t).padStart(2, "0"));
}
let tn = e8([o.X.PLAY_ON_XBOX, o.X.PLAY_ON_PLAYSTATION]),
    tr = e8([o.X.WATCH_VIDEO, o.X.WATCH_VIDEO_ON_MOBILE]),
    ti = e8([o.X.WATCH_VIDEO]),
    ta = e8([o.X.WATCH_VIDEO_ON_MOBILE]),
    to = (e) => ta(e) && !ti(e);
function ts(e) {
    return tn(e);
}
let tl = (e, t) => {
    var n, r;
    let i = null == e || null == (r = e.progress[t]) || null == (n = r.heartbeat) ? void 0 : n.expiresAt;
    if (null == i) return !1;
    let a = new Date(i).valueOf();
    return !isNaN(a) && a > Date.now();
};
function tc(e) {
    return null != e.userStatus && (tl(e.userStatus, o.X.PLAY_ON_XBOX) || tl(e.userStatus, o.X.PLAY_ON_PLAYSTATION));
}
function tu(e) {
    return !!tr(e) && (0, n(952265).nf)(tS(e.id));
}
function td() {
    {
        let { openUserSettings: e } = n(518596);
        e(g.n.CONNECTIONS_PANEL, { section: U.oAB.CONNECTIONS });
    }
}
function tf(e, t) {
    let { platformType: n, quest: r } = e;
    (0, P._3)({
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
function t_(e, t) {
    let { quest: n } = e;
    (0, P._3)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentRowIndex: t.rowIndex,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId,
        sourceQuestContent: t.sourceQuestContent,
    });
    let r = tT(n);
    if (1 === r.length) return (0, _.Z)({ platformType: r.at(0) });
    d.Z.dispatch({
        type: "CONNECTIONS_GRID_MODAL_SHOW",
        onComplete: (e) => (0, _.Z)({ platformType: e }),
        includedPlatformTypes: new Set(r),
    });
}
function tp(e, t) {
    let { quest: n } = e;
    (0, P._3)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId,
        sourceQuestContent: t.sourceQuestContent,
    }),
        td();
}
function th() {
    return window.location.pathname.startsWith(U.Z5c.QUEST_HOME);
}
function tm(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" };
    return null == e ? "" : new Date(e).toLocaleDateString(m.default.locale, t);
}
function tg(e) {
    return "xbox" === e.connected_account_type ? U.ABu.XBOX : U.ABu.PLAYSTATION;
}
function tE(e) {
    return tg(e) === U.ABu.XBOX ? B.t["mytEv+"] : B.t.iDiwby;
}
function tb(e) {
    var t, n, r, i;
    let { quest: a, rewardCode: o, selectedPlatformType: s, sharedQuestFields: l } = e,
        c = eL({ quest: a }),
        u = null != s ? s : null == o ? void 0 : o.platform,
        d = c
            ? eV({
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
function ty(e) {
    let { isTargetedDisclosure: t, gamePublisher: n, gameTitle: r, cosponsorName: i } = e;
    return t
        ? null == i
            ? B.intl.formatToPlainString(B.t.Piihy1, { gamePublisher: n })
            : B.intl.formatToPlainString(B.t.DV47Gy, {
                  gamePublisher: n,
                  cosponsorName: i,
              })
        : B.intl.formatToPlainString(B.t.euizJY, {
              gamePublisher: n,
              gameTitle: r,
          });
}
function tO(e) {
    let t = ej({ quest: e }) || ek({ quest: e }),
        n = tn(e),
        r = [];
    return t && r.push(k.cd.DESKTOP), n && r.push(k.cd.CONSOLE), r;
}
function tv(e) {
    var t;
    let n = null == (t = eO(e)) ? void 0 : t.expirationMode;
    return null != n && W.has(n);
}
function tI(e) {
    var t;
    return tv(e) && (null == (t = eO(e)) ? void 0 : t.expirationMode) === l.n.PREMIUM_PERMANENT;
}
function tT(e) {
    let t = Object.keys(e.config.taskConfigV2.tasks),
        n = [];
    for (let e of t)
        switch (e) {
            case o.X.PLAY_ON_XBOX:
                n.push(U.ABu.XBOX);
                break;
            case o.X.PLAY_ON_PLAYSTATION:
                n.push(U.ABu.PLAYSTATION);
        }
    return n;
}
function tS(e) {
    return "VIDEO-QUEST-".concat(e);
}
function tA(e) {
    let t = tr(e),
        n = eU(e);
    return t || n;
}
function tC(e, t) {
    var n, r;
    ee(e) ||
        (null == (n = e.userStatus) ? void 0 : n.enrolledAt) == null ||
        (null == (r = e.userStatus) ? void 0 : r.completedAt) != null ||
        (0, R.cT)(e.id, t);
}
function tN(e) {
    return {
        [D.jn.QUEST_BAR]: D.Ok.DESKTOP_ACCOUNT_PANEL_AREA,
        [D.jn.QUEST_BAR_V2]: D.Ok.DESKTOP_ACCOUNT_PANEL_AREA,
        [D.jn.QUEST_BAR_MOBILE]: D.Ok.MOBILE_HOME_DOCK_AREA,
    }[e];
}
function tR(e) {
    let t = tN(e);
    return null != t && k.v6.has(t);
}
let tP = "landscape";
function tw(e) {
    let t = e.assets.video;
    return null == t || null == t.width || null == t.height ? tP : t.width > t.height ? "landscape" : "portrait";
}
let tD = (e) =>
    e.percentComplete > 0
        ? B.intl.formatToPlainString(B.t["c59/Tp"], { remainTime: te(e) })
        : B.intl.formatToPlainString(B.t.GNsKiW, { remainTime: te(e) });
function tx(e, t) {
    return e <= 0 || t <= 0 ? 0 : e >= t ? 1 : Math.min(1, Math.round((e / t) * 100) / 100);
}
function tL(e) {
    var t, n, r, i;
    let a = M.r.build(e).defaultWatchVideoTask;
    return null !=
        (i =
            null !=
            (r =
                null != (n = null == (t = e.ctaConfig) ? void 0 : t.buttonLabel)
                    ? n
                    : null == a
                      ? void 0
                      : a.messages.videoEndCtaButtonLabel)
                ? r
                : null == a
                  ? void 0
                  : a.messages.videoEndCtaTitle)
        ? i
        : B.intl.string(B.t.iiTtpJ);
}
function tM(e, t) {
    var n;
    let { quest: r, adDecisionData: i } = null != (n = w.Z.questToDeliverForPlacement.get(tN(t))) ? n : {};
    return null != i && (null == r ? void 0 : r.id) === e ? i : k.Jp;
}
function tj(e) {
    var t;
    let { metadataRaw: n } = null != (t = w.Z.questToDeliverForPlacement.get(tN(e))) ? t : {};
    return n;
}
function tk(e) {
    var t;
    let { adContext: n } = null != (t = w.Z.questToDeliverForPlacement.get(tN(e))) ? t : {};
    return n;
}
function tU(e) {
    var t, n;
    let r = null != (n = null == (t = e.userStatus) ? void 0 : t.claimedTier) ? n : 0;
    return "rewardsConfig" in e.config ? e.config.rewardsConfig.rewards[r] : e.config.rewards[r];
}
function tG(e) {
    return new Set(Object.keys(e.config.taskConfigV2.tasks));
}
function tB(e, t) {
    let n = new Map();
    for (let [r, i] of e)
        if (!(eB(i) || eF(i, k.S7.NON_GAMING_PLAY_QUEST))) {
            for (let e of tG(i))
                if (t.has(e)) {
                    n.set(r, i);
                    break;
                }
        }
    return n;
}
function tZ(e) {
    var t, n;
    let { questId: r, sourceQuestContent: i, videoSessionId: a } = e,
        o = x.ZP.getState().getVideoProgress(r);
    if (null == o) return;
    let s = w.Z.getQuest(r);
    null != s &&
        (null == (t = s.userStatus) ? void 0 : t.enrolledAt) != null &&
        (null == (n = s.userStatus) ? void 0 : n.completedAt) == null &&
        tC(s, o.maxTimestampSec);
    let l = tx(o.maxTimestampSec, o.duration);
    (0, P.dA)({
        questId: r,
        event: U.rMx.QUEST_VIDEO_PROGRESSED,
        properties: {
            progress: l,
            video_timestamp_seconds: o.maxTimestampSec,
            video_session_id: a,
        },
        sourceQuestContent: i,
    }),
        (0, P.dA)({
            questId: r,
            event: U.rMx.QUEST_VIDEO_MODAL_CLOSED,
            properties: {
                video_progress: l,
                video_session_id: a,
                network_connection_speed: b.Z.getEffectiveConnectionSpeed(),
            },
            sourceQuestContent: i,
        });
}
function tF(e) {
    return e.sharePolicy !== u.X.NOT_SHAREABLE;
}
function tV(e, t) {
    return null != e && null != t && (0, h.p9)(t, O.Z, E.Z, y.Z, p.default)[0];
}
function tH(e) {
    switch (e) {
        case k.yq.SUGGESTED:
            return B.intl.string(B.t.gBfXPZ);
        case k.yq.MOST_RECENT:
            return B.intl.string(B.t.K6oEu2);
        case k.yq.EXPIRING_SOON:
            return B.intl.string(B.t.IB22n3);
        case k.yq.RECENTLY_ENROLLED:
            return B.intl.string(B.t["BB+2tX"]);
    }
}
function tY(e) {
    switch (e) {
        case k.UP.VIRTUAL_CURRENCY:
            return B.intl.string(B.t.ElYQFS);
        case k.UP.COLLECTIBLE:
            return B.intl.string(B.t.Jg17Ut);
        case k.UP.IN_GAME:
            return B.intl.string(B.t["O/J2kr"]);
        case k.oH.VIDEO:
            return B.intl.string(B.t.e0iISA);
        case k.oH.PLAY:
            return B.intl.string(B.t["1nJR4p"]);
    }
}
function tW(e) {
    switch (e) {
        case "reward":
            return B.intl.string(B.t.vjLqAU);
        case "task":
            return B.intl.string(B.t.Hufmss);
    }
}
