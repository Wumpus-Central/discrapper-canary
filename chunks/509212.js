n.d(t, {
    $H: () => ez,
    $J: () => tm,
    $V: () => tT,
    AV: () => eC,
    B2: () => tV,
    B3: () => tx,
    BM: () => tb,
    Bg: () => ex,
    Bz: () => tE,
    C1: () => tN,
    C9: () => tC,
    Dr: () => eW,
    F9: () => tZ,
    FI: () => tk,
    FX: () => eD,
    Fs: () => tR,
    GN: () => eN,
    Gd: () => tM,
    Gs: () => ee,
    HJ: () => th,
    Jg: () => eF,
    K: () => eU,
    KM: () => eX,
    Kr: () => ew,
    LM: () => eG,
    MC: () => J,
    NI: () => tq,
    NL: () => t$,
    Nj: () => eY,
    Nt: () => t0,
    PB: () => t_,
    PM: () => eS,
    Pb: () => eq,
    Qe: () => z,
    Qr: () => eh,
    Rc: () => tJ,
    Rt: () => to,
    T2: () => t1,
    Th: () => tX,
    U3: () => e_,
    V$: () => tI,
    VB: () => tU,
    Vl: () => ta,
    WP: () => ep,
    Xh: () => ev,
    Xv: () => eM,
    ZS: () => tB,
    ZZ: () => ei,
    Zp: () => tj,
    _D: () => er,
    _j: () => tA,
    _p: () => tw,
    _x: () => es,
    b7: () => tr,
    bA: () => tF,
    f$: () => tD,
    f2: () => e1,
    fY: () => tO,
    gI: () => tv,
    hF: () => tK,
    hQ: () => eE,
    iQ: () => ec,
    il: () => tn,
    jY: () => tY,
    lQ: () => eo,
    nc: () => e0,
    o9: () => eJ,
    oo: () => eV,
    pO: () => eK,
    q6: () => eu,
    q8: () => tf,
    qe: () => tH,
    t2: () => eA,
    u7: () => tL,
    uN: () => tW,
    vB: () => tQ,
    vQ: () => ek,
    vR: () => eB,
    wj: () => ej,
    xN: () => eL,
    xn: () => eP,
    yH: () => tP,
    yI: () => eb,
    ys: () => eZ,
    zE: () => eR,
    zK: () => eQ,
    zi: () => el,
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
    f = n(782568),
    _ = n(812206);
n(597688);
var p = n(231757),
    h = n(258609),
    m = n(102172),
    g = n(706454),
    E = n(313789),
    b = n(430824),
    y = n(866960),
    O = n(496675),
    v = n(979651),
    I = n(572004),
    T = n(585483),
    S = n(70956),
    A = n(630388),
    C = n(823379),
    N = n(358085),
    R = n(960048),
    P = n(22095),
    D = n(617136),
    w = n(569984),
    x = n(497505),
    L = n(184299),
    M = n(937797),
    k = n(566078),
    j = n(312046),
    U = n(46140),
    G = n(981631),
    B = n(701488),
    Z = n(388032);
function F(e, t, n) {
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
function V(e) {
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
                F(e, t, n[t]);
            });
    }
    return e;
}
function H(e, t) {
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
function Y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : H(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let W = 2592000000,
    K = new Set([l.n.PREMIUM_EXTENSION, l.n.PREMIUM_PERMANENT]);
function z(e) {
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
let q = (e) => e.application_id === B.Ev || e.platform === G.M7m.XBOX,
    X = (e) => e.platform === G.M7m.PS4 || e.platform === G.M7m.PS5;
function Q(e, t) {
    if (null == e) return;
    let n = new Set();
    for (let r of t) {
        let t = e.config.taskConfigV2.tasks[r];
        if (null != t && "applications" in t && Array.isArray(t.applications))
            for (let e of t.applications) n.add(e.id);
    }
    return Array.from(n);
}
function J(e) {
    if (null == e) return;
    let t = Object.keys(e.config.taskConfigV2.tasks);
    return Q(e, t);
}
function $(e) {
    return Q(e, [o.X.PLAY_ON_DESKTOP]);
}
function ee(e) {
    let t = Q(e, [o.X.PLAY_ON_XBOX, o.X.PLAY_ON_PLAYSTATION]);
    return null == t ? void 0 : t[0];
}
function et(e) {
    let t = Q(e, [o.X.PLAY_ACTIVITY]);
    return null == t ? void 0 : t[0];
}
function en(e, t) {
    let n = ee(t);
    if (null == n) return !1;
    let r = _.Z.getApplication(n);
    return null != r && e === r.name.toLowerCase();
}
function er(e, t) {
    return (
        null != e &&
        (q(e) || X(e)
            ? en(e.name.toLowerCase(), t)
            : (null != t && t.id === U.Jk && e.application_id === U.$z) ||
              (null != e.application_id && ea(e.application_id, t)))
    );
}
function ei(e, t) {
    for (let [n, r] of e) if (er(t, r) && !el(r)) return r;
}
function ea(e, t) {
    let n = J(t);
    return null != n && n.some((t) => t === e);
}
function eo(e, t) {
    let n;
    for (let [r, i] of e)
        if (ea(t, i) && !el(i)) {
            n = i;
            break;
        }
    return n;
}
function es(e, t, n) {
    var r;
    let i = Array.isArray(t) ? new Map(t.map((e) => [e.id, e])) : t,
        a = Array.isArray(n) ? new Map(n.map((e) => [e.id, e])) : n,
        o = i.get(e);
    if (null != o) return o;
    let s = null == (r = a.get(e)) ? void 0 : r.replacementId;
    if (null != s) return i.get(s);
}
function el(e) {
    return new Date(e.config.expiresAt).valueOf() <= Date.now();
}
function ec(e) {
    if (!el(e)) return !1;
    let t = Date.now() - W,
        n = new Date(e.config.expiresAt).valueOf();
    return null != e.config.expiresAt && !(n <= t);
}
function eu(e) {
    return (0, a.EQ)(e)
        .with({ config_version: 2 }, (e) => (0, j.Q)(e))
        .exhaustive();
}
function ed(e) {
    return null == e
        ? null
        : {
              lastBeatAt: e.last_beat_at,
              expiresAt: e.expires_at,
          };
}
function ef(e) {
    let t = {};
    for (let [n, r] of Object.entries(e))
        t[n] = {
            eventName: r.event_name,
            value: r.value,
            updatedAt: r.updated_at,
            completedAt: r.completed_at,
            heartbeat: ed(r.heartbeat),
        };
    return t;
}
function e_(e) {
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
        progress: ef(e.progress),
    };
}
function ep(e) {
    return {
        id: e.id,
        preview: e.preview,
        config: eu(e.config),
        userStatus: null == e.user_status ? null : e_(e.user_status),
        targetedContent: e.targeted_content,
    };
}
function eh(e) {
    return {
        id: e.id,
        replacementId: e.replacement_id,
    };
}
function em(e) {
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
function eg(e) {
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
        rewards: e.rewards.map(em),
        cosponsorMetadata: (0, j.s)(e.cosponsor_metadata),
    };
}
function eE(e) {
    return {
        id: e.id,
        config: eg(e.config),
        userStatus: null == e.user_status ? null : e_(e.user_status),
    };
}
function eb(e) {
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
function ey(e) {
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
                        rewardCode: eb(t.reward.reward_code),
                    },
                },
            };
    }
}
function eO(e) {
    return {
        skuId: e.sku_id,
        tenantMetadata: ey(e.tenant_metadata),
        consumed: e.consumed,
    };
}
function ev(e) {
    return {
        claimedAt: e.claimed_at,
        items: e.entitlements.map(eO),
        errors: e.errors,
    };
}
function eI(e) {
    return {
        eventName: e.event_name,
        title: e.title,
        description: e.description,
        target: e.target,
    };
}
let eT = (e) => "".concat(location.protocol, "//").concat(location.host, "/quests/").concat(e);
function eS(e, t, n) {
    let r = t.get(n);
    if (null == r) return;
    let i = e.get(r.quest.id);
    if (null != i && !el(i)) return i;
}
let eA = (e) => {
    switch (e) {
        case x.y$.XBOX:
            return Z.intl.string(Z.t.G84UWZ);
        case x.y$.PLAYSTATION:
            return Z.intl.string(Z.t["6IeKx2"]);
        case x.y$.SWITCH:
            return Z.intl.string(Z.t["1pp0su"]);
        case x.y$.PC:
            return Z.intl.string(Z.t["YK+wUg"]);
        case x.y$.CROSS_PLATFORM:
            return Z.intl.string(Z.t.UWVbzV);
    }
};
function eC(e) {
    var t, n;
    let { quest: r, taskDetails: i, thirdPartyTaskDetails: a } = e;
    if ((null == (t = r.userStatus) ? void 0 : t.completedAt) != null) return Z.intl.string(Z.t.BzFeTF);
    if ((null == (n = r.userStatus) ? void 0 : n.enrolledAt) != null) {
        let { percentComplete: e } = i,
            t = null != a ? a.percentComplete : e;
        return t >= 0.75
            ? Z.intl.string(Z.t.gvCR4H)
            : t >= 0.45 && t <= 0.55
              ? Z.intl.string(Z.t.JNx8sG)
              : t > 0
                ? Z.intl.string(Z.t.JMbfnc)
                : Z.intl.string(Z.t["7e5k7L"]);
    }
    return Z.intl.formatToPlainString(Z.t.EQa7os, { questName: r.config.messages.questName });
}
function eN(e) {
    return Object.keys(U.a_).includes(x.jn[e]);
}
function eR(e, t) {
    if (!eN(t)) return !1;
    let n = x.jn[t];
    return (0, A.yE)(e.dismissedQuestContent, U.a_[n]);
}
function eP(e) {
    let t = e.rewardsConfig.rewards.find((e) => e.type === c.w.COLLECTIBLE);
    return (null == t ? void 0 : t.type) === c.w.COLLECTIBLE ? t : null;
}
function eD(e) {
    let t = eP(e);
    return null != t && "expiresAtPremium" in t && null != t.expiresAtPremium ? tS(t.expiresAtPremium) : null;
}
function ew(e) {
    let t = eP(e);
    if (null == t || !("expiresAt" in t) || null == t.expiresAt) return null;
    let n = new Date(e.expiresAt),
        i = new Date(t.expiresAt),
        a = (0, r.Z)(i, n),
        o = Math.floor(a / 30) + +(a % 30 >= 25);
    if (o >= 12) {
        let e = Math.floor(o / 12);
        return Z.intl.formatToPlainString(Z.t.PClsrw, { years: e });
    }
    {
        if (o > 0) return Z.intl.formatToPlainString(Z.t.kridzK, { months: o });
        let e = (0, r.Z)(i, n);
        if (!(e >= 7)) return Z.intl.formatToPlainString(Z.t["k2UNz+"], { days: e });
        {
            let t = Math.ceil(e / 7);
            return Z.intl.formatToPlainString(Z.t.EmoBD2, { weeks: t });
        }
    }
}
function ex(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === c.w.FRACTIONAL_PREMIUM);
}
function eL(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === c.w.VIRTUAL_CURRENCY);
}
function eM(e) {
    return null != eP(e);
}
function ek(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === c.w.IN_GAME);
}
function ej(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === c.w.REWARD_CODE);
}
function eU(e) {
    var t;
    return null != (t = e.rewardsConfig.rewards.find((e) => e.type === c.w.IN_GAME)) ? t : null;
}
function eG(e) {
    let t = e.rewardsConfig.rewards.find((e) => e.type === c.w.VIRTUAL_CURRENCY);
    return null == t ? void 0 : t.orbQuantity;
}
function eB(e, t) {
    return e.targetedContent.includes(t);
}
function eZ(e, t) {
    R.Z.captureException(e, Y(V({}, t), { tags: Y(V({}, null == t ? void 0 : t.tags), { app_context: "quests" }) }));
}
function eF(e, t) {
    if (null == t || null == e) return null;
    for (let n of t) {
        let t = ei(e, n);
        if (null != t) return t;
    }
    return null;
}
function eV(e) {
    let {
            quest: { config: t },
        } = e,
        n = t.rewardsConfig;
    return (
        n.assignmentMethod === s.j.TIERED && n.rewards.length > 0 && n.rewards.every((e) => e.type === c.w.REWARD_CODE)
    );
}
function eH(e) {
    return null != e.taskConfigV2.tasks[o.X.PLAY_ON_DESKTOP];
}
function eY(e) {
    let { quest: t } = e;
    return eH(t.config);
}
function eW(e) {
    let { quest: t } = e;
    return null != t.config.taskConfigV2.tasks[o.X.STREAM_ON_DESKTOP];
}
function eK(e) {
    return null != e.config.taskConfigV2.tasks[o.X.PLAY_ACTIVITY];
}
function ez(e) {
    return null != e && eY({ quest: e });
}
function eq(e) {
    if (!(0, M.CD)("QuestUtils") || null == e) return !1;
    let t = $(e);
    return null != t && t.length > 1;
}
function eX(e) {
    return et(e) === U.Ts;
}
function eQ(e, t) {
    return k.r.build(e.config).features.has(t);
}
function eJ(e) {
    let { quest: t, idx: n } = e;
    if (null == n) return null;
    let r = t.config.rewardsConfig.rewards[n];
    return r.type === c.w.REWARD_CODE ? r : null;
}
function e$(e) {
    var t, n;
    let r = e.config.ctaConfig;
    return null == r
        ? null
        : ((0, N.isIOS)() || "ios" === (0, N.getOS)()) && (null == (t = r.ios) ? void 0 : t.iosAppId) != null
          ? "https://apps.apple.com/app/id".concat(r.ios.iosAppId)
          : ((0, N.isAndroid)() || "android" === (0, N.getOS)()) &&
              (null == (n = r.android) ? void 0 : n.androidAppId) != null
            ? "https://play.google.com/store/apps/details?id=".concat(r.android.androidAppId)
            : null;
}
function e0(e, t) {
    let n = k.r.build(e.config).ctaLink,
        r = e$(e);
    null != r && (n = r),
        (0, D._3)({
            questId: e.id,
            questContent: t.content,
            questContentCTA: t.ctaContent,
            questContentPosition: t.position,
            impressionId: t.impressionId,
            sourceQuestContent: t.sourceQuestContent,
        }),
        T.S.dispatch(G.CkL.QUEST_GAME_LINK_OPENED),
        (0, f.Z)(n);
}
let e1 = (e, t) => {
    (0, D._3)({
        questId: e,
        questContent: t.content,
        questContentCTA: t.ctaContent,
        questContentPosition: t.position,
        impressionId: t.impressionId,
        sourceQuestContent: t.sourceQuestContent,
    }),
        (0, I.JG)(eT(e));
};
function e2(e) {
    return (null == e ? void 0 : e.type) === o.X.PLAY_ON_DESKTOP;
}
let e3 = (e, t) => (e > 0 ? (0, i.floor)(Math.min(t / e, 1), 4) : 0),
    e4 = (e) => tE(e) || w.Z.isProgressingOnDesktop(e.id),
    e8 = (e, t) => {
        var n, r, a, o;
        let s =
            null == (o = e.userStatus) ||
            null == (a = o.progress) ||
            null == (r = a[t.type]) ||
            null == (n = r.heartbeat)
                ? void 0
                : n.lastBeatAt;
        if (null == s || !e4(e)) return 0;
        let l = Date.now() - new Date(s).valueOf();
        return (0, i.floor)(l / S.Z.Millis.SECOND, 2);
    },
    e5 = (e, t) => {
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
        if (tf(e)) {
            let n = w.Z.getOptimisticProgress(e.id, t.type);
            return null == n || n < l ? l : n;
        }
        return l + e8(e, t);
    },
    e6 = 0.99,
    e7 = (e, t) => {
        var n;
        let r = t.target;
        if ((null == (n = e.userStatus) ? void 0 : n.completedAt) != null) return r;
        let a = Math.min(r * e6, e5(e, t));
        return Math.max((0, i.floor)(a, 2), 0);
    },
    e9 = (e) => {
        var t, n, r;
        let { quest: i, taskType: a, includeTaskTypes: s = o.T.ALL } = e,
            l = i.config.taskConfigV2,
            c = null != a ? a : null == (t = Object.values(l.tasks).filter((e) => s.has(e.type))[0]) ? void 0 : t.type,
            u = null != (r = l.tasks[c]) ? r : l.tasks[o.X.STREAM_ON_DESKTOP];
        if (null == u) throw Error("No task with type ".concat(a, " found for quest ").concat(i.id, "!"));
        let d = u.target,
            f = e7(i, u),
            _ = Object.values(l.tasks).find(e2),
            p = null == _ || null == (n = _.applications) ? void 0 : n.map((e) => e.id);
        return {
            progressSeconds: f,
            targetSeconds: d,
            targetMinutes: Math.ceil(d / S.Z.Seconds.MINUTE),
            percentComplete: e3(d, f),
            taskType: c,
            applications: p,
        };
    },
    te = (e) => (o.T.ALL.has(e) ? e : null),
    tt = (e) => {
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
            .filter(C.lm)) {
            let t = te(e.eventName);
            if (null != t && (null == i ? void 0 : i.has(t)))
                return e9({
                    quest: r,
                    taskType: t,
                    includeTaskTypes: i,
                });
        }
        return e9({
            quest: r,
            includeTaskTypes: i,
        });
    },
    tn = (e, t) => {
        if (ta(e))
            return {
                progressSeconds: 0,
                targetSeconds: 1,
                targetMinutes: 1,
                percentComplete: 0,
                taskType: o.X.STREAM_ON_DESKTOP,
            };
        if (td(e))
            return tt({
                quest: e,
                includeTaskTypes: null != t ? t : tE(e) ? o.T.CONSOLE : o.T.ALL,
            });
        if (tf(e))
            if (tp(e))
                return e9({
                    quest: e,
                    taskType: o.X.WATCH_VIDEO_ON_MOBILE,
                });
            else
                return e9({
                    quest: e,
                    taskType: o.X.WATCH_VIDEO,
                });
        return ez(e)
            ? e9({
                  quest: e,
                  taskType: o.X.PLAY_ON_DESKTOP,
              })
            : eK(e)
              ? e9({
                    quest: e,
                    taskType: o.X.PLAY_ACTIVITY,
                })
              : e9({
                    quest: e,
                    taskType: o.X.STREAM_ON_DESKTOP,
                });
    };
function tr(e) {
    var t, n, r, i;
    let a = k.r.build(e.config).defaultInGameTask;
    if (null == a) return null;
    let o =
            null !=
            (i = null == (r = e.userStatus) || null == (n = r.progress) || null == (t = n[a.type]) ? void 0 : t.value)
                ? i
                : 0,
        s = e3(a.target, o);
    return {
        title: a.messages.taskTitle,
        description: a.messages.taskDescription,
        target: a.target,
        progress: o,
        percentComplete: s,
    };
}
let ti = (e) => (t) => e.some((e) => null != t.config.taskConfigV2.tasks[e]);
function ta(e) {
    return Array.from(o.T.IN_GAME).some((t) => null != e.config.taskConfigV2.tasks[t]);
}
function to(e) {
    return (ta(e) || eK(e)) && e.config.features.includes(U.S7.START_QUEST_CTA);
}
function ts(e) {
    return tl(e.targetSeconds - e.progressSeconds);
}
function tl(e) {
    return {
        minutes: Math.max(0, Math.floor(e / 60)),
        seconds: Math.max(0, Math.floor(e % 60)),
    };
}
function tc(e) {
    let t = ts(e);
    return tu(t.minutes, t.seconds);
}
function tu(e, t) {
    return "".concat(String(e).padStart(2, "0"), ":").concat(String(t).padStart(2, "0"));
}
let td = ti([o.X.PLAY_ON_XBOX, o.X.PLAY_ON_PLAYSTATION]),
    tf = ti([o.X.WATCH_VIDEO, o.X.WATCH_VIDEO_ON_MOBILE]),
    t_ = ti([o.X.WATCH_VIDEO]),
    tp = ti([o.X.WATCH_VIDEO_ON_MOBILE]),
    th = (e) => tp(e) && !t_(e);
function tm(e) {
    return td(e);
}
let tg = (e, t) => {
    var n, r;
    let i = null == e || null == (r = e.progress[t]) || null == (n = r.heartbeat) ? void 0 : n.expiresAt;
    if (null == i) return !1;
    let a = new Date(i).valueOf();
    return !isNaN(a) && a > Date.now();
};
function tE(e) {
    return null != e.userStatus && (tg(e.userStatus, o.X.PLAY_ON_XBOX) || tg(e.userStatus, o.X.PLAY_ON_PLAYSTATION));
}
function tb(e) {
    return !!tf(e) && (0, n(952265).nf)(tL(e.id));
}
function ty() {
    {
        let { openUserSettings: e } = n(518596);
        e(E.n.CONNECTIONS_PANEL, { section: G.oAB.CONNECTIONS });
    }
}
function tO(e, t) {
    let { platformType: n, quest: r } = e;
    (0, D._3)({
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
function tv(e, t) {
    let { quest: n } = e;
    (0, D._3)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentRowIndex: t.rowIndex,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId,
        sourceQuestContent: t.sourceQuestContent,
    });
    let r = tx(n);
    if (1 === r.length) return (0, p.Z)({ platformType: r.at(0) });
    d.Z.dispatch({
        type: "CONNECTIONS_GRID_MODAL_SHOW",
        onComplete: (e) => (0, p.Z)({ platformType: e }),
        includedPlatformTypes: new Set(r),
    });
}
function tI(e, t) {
    let { quest: n } = e;
    (0, D._3)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId,
        sourceQuestContent: t.sourceQuestContent,
    }),
        ty();
}
function tT() {
    return window.location.pathname.startsWith(G.Z5c.QUEST_HOME);
}
function tS(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" };
    return null == e ? "" : new Date(e).toLocaleDateString(g.default.locale, t);
}
function tA(e) {
    return "xbox" === e.connected_account_type ? G.ABu.XBOX : G.ABu.PLAYSTATION;
}
function tC(e) {
    return tA(e) === G.ABu.XBOX ? Z.t["mytEv+"] : Z.t.iDiwby;
}
function tN(e) {
    var t, n, r, i;
    let { quest: a, rewardCode: o, selectedPlatformType: s, sharedQuestFields: l } = e,
        c = eV({ quest: a }),
        u = null != s ? s : null == o ? void 0 : o.platform,
        d = c
            ? eJ({
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
function tR(e) {
    let { isTargetedDisclosure: t, gamePublisher: n, gameTitle: r, cosponsorName: i } = e;
    return t
        ? null == i
            ? Z.intl.formatToPlainString(Z.t.Piihy1, { gamePublisher: n })
            : Z.intl.formatToPlainString(Z.t.DV47Gy, {
                  gamePublisher: n,
                  cosponsorName: i,
              })
        : Z.intl.formatToPlainString(Z.t.euizJY, {
              gamePublisher: n,
              gameTitle: r,
          });
}
function tP(e) {
    let t = eY({ quest: e }) || eW({ quest: e }),
        n = td(e),
        r = [];
    return t && r.push(U.cd.DESKTOP), n && r.push(U.cd.CONSOLE), r;
}
function tD(e) {
    var t;
    let n = null == (t = eP(e)) ? void 0 : t.expirationMode;
    return null != n && K.has(n);
}
function tw(e) {
    var t;
    return tD(e) && (null == (t = eP(e)) ? void 0 : t.expirationMode) === l.n.PREMIUM_PERMANENT;
}
function tx(e) {
    let t = Object.keys(e.config.taskConfigV2.tasks),
        n = [];
    for (let e of t)
        switch (e) {
            case o.X.PLAY_ON_XBOX:
                n.push(G.ABu.XBOX);
                break;
            case o.X.PLAY_ON_PLAYSTATION:
                n.push(G.ABu.PLAYSTATION);
        }
    return n;
}
function tL(e) {
    return "VIDEO-QUEST-".concat(e);
}
function tM(e) {
    let t = tf(e),
        n = eK(e);
    return t || n;
}
function tk(e, t) {
    var n, r;
    el(e) ||
        (null == (n = e.userStatus) ? void 0 : n.enrolledAt) == null ||
        (null == (r = e.userStatus) ? void 0 : r.completedAt) != null ||
        (0, P.cT)(e.id, t);
}
function tj(e) {
    return {
        [x.jn.QUEST_BAR]: x.Ok.DESKTOP_ACCOUNT_PANEL_AREA,
        [x.jn.QUEST_BAR_V2]: x.Ok.DESKTOP_ACCOUNT_PANEL_AREA,
        [x.jn.QUEST_BAR_MOBILE]: x.Ok.MOBILE_HOME_DOCK_AREA,
    }[e];
}
function tU(e) {
    let t = tj(e);
    return null != t && U.v6.has(t);
}
let tG = "landscape";
function tB(e) {
    let t = e.assets.video;
    return null == t || null == t.width || null == t.height ? tG : t.width > t.height ? "landscape" : "portrait";
}
let tZ = (e) =>
    e.percentComplete > 0
        ? Z.intl.formatToPlainString(Z.t["c59/Tp"], { remainTime: tc(e) })
        : Z.intl.formatToPlainString(Z.t.GNsKiW, { remainTime: tc(e) });
function tF(e, t) {
    return e <= 0 || t <= 0 ? 0 : e >= t ? 1 : Math.min(1, Math.round((e / t) * 100) / 100);
}
function tV(e) {
    var t, n, r, i;
    let a = k.r.build(e).defaultWatchVideoTask;
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
        : Z.intl.string(Z.t.iiTtpJ);
}
function tH(e, t) {
    var n;
    let { quest: r, adDecisionData: i } = null != (n = w.Z.questToDeliverForPlacement.get(tj(t))) ? n : {};
    return null != i && (null == r ? void 0 : r.id) === e ? i : U.Jp;
}
function tY(e) {
    var t;
    let { metadataRaw: n } = null != (t = w.Z.questToDeliverForPlacement.get(tj(e))) ? t : {};
    return n;
}
function tW(e) {
    var t;
    let { adContext: n } = null != (t = w.Z.questToDeliverForPlacement.get(tj(e))) ? t : {};
    return n;
}
function tK(e) {
    var t, n;
    let r = null != (n = null == (t = e.userStatus) ? void 0 : t.claimedTier) ? n : 0;
    return "rewardsConfig" in e.config ? e.config.rewardsConfig.rewards[r] : e.config.rewards[r];
}
function tz(e) {
    return new Set(Object.keys(e.config.taskConfigV2.tasks));
}
function tq(e, t) {
    let n = new Map();
    for (let [r, i] of e)
        if (!(eq(i) || eQ(i, U.S7.NON_GAMING_PLAY_QUEST))) {
            for (let e of tz(i))
                if (t.has(e)) {
                    n.set(r, i);
                    break;
                }
        }
    return n;
}
function tX(e) {
    var t, n;
    let { questId: r, sourceQuestContent: i, videoSessionId: a } = e,
        o = L.ZP.getState().getVideoProgress(r);
    if (null == o) return;
    let s = w.Z.getQuest(r);
    null != s &&
        (null == (t = s.userStatus) ? void 0 : t.enrolledAt) != null &&
        (null == (n = s.userStatus) ? void 0 : n.completedAt) == null &&
        tk(s, o.maxTimestampSec);
    let l = tF(o.maxTimestampSec, o.duration);
    (0, D.dA)({
        questId: r,
        event: G.rMx.QUEST_VIDEO_PROGRESSED,
        properties: {
            progress: l,
            video_timestamp_seconds: o.maxTimestampSec,
            video_session_id: a,
        },
        sourceQuestContent: i,
    }),
        (0, D.dA)({
            questId: r,
            event: G.rMx.QUEST_VIDEO_MODAL_CLOSED,
            properties: {
                video_progress: l,
                video_session_id: a,
                network_connection_speed: y.Z.getEffectiveConnectionSpeed(),
            },
            sourceQuestContent: i,
        });
}
function tQ(e) {
    return e.sharePolicy !== u.X.NOT_SHAREABLE;
}
function tJ(e, t) {
    return null != e && null != t && (0, m.p9)(t, v.Z, b.Z, O.Z, h.default)[0];
}
function t$(e) {
    switch (e) {
        case U.yq.SUGGESTED:
            return Z.intl.string(Z.t.gBfXPZ);
        case U.yq.MOST_RECENT:
            return Z.intl.string(Z.t.K6oEu2);
        case U.yq.EXPIRING_SOON:
            return Z.intl.string(Z.t.IB22n3);
        case U.yq.RECENTLY_ENROLLED:
            return Z.intl.string(Z.t["BB+2tX"]);
    }
}
function t0(e) {
    switch (e) {
        case U.UP.VIRTUAL_CURRENCY:
            return Z.intl.string(Z.t.ElYQFS);
        case U.UP.COLLECTIBLE:
            return Z.intl.string(Z.t.Jg17Ut);
        case U.UP.IN_GAME:
            return Z.intl.string(Z.t["O/J2kr"]);
        case U.oH.VIDEO:
            return Z.intl.string(Z.t.e0iISA);
        case U.oH.PLAY:
            return Z.intl.string(Z.t["1nJR4p"]);
    }
}
function t1(e) {
    switch (e) {
        case "reward":
            return Z.intl.string(Z.t.vjLqAU);
        case "task":
            return Z.intl.string(Z.t.Hufmss);
    }
}
