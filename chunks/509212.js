n.d(t, {
    $H: () => eq,
    $J: () => tg,
    $V: () => tS,
    AV: () => eN,
    B2: () => tH,
    B3: () => tL,
    BM: () => ty,
    Bg: () => eL,
    Bz: () => tb,
    C1: () => tR,
    C9: () => tN,
    DR: () => en,
    Dr: () => eK,
    F9: () => tF,
    FI: () => tj,
    FX: () => ew,
    Fs: () => tP,
    GN: () => eR,
    Gd: () => tk,
    Gs: () => ee,
    HJ: () => tm,
    Jg: () => eV,
    K: () => eG,
    KM: () => eQ,
    Kr: () => ex,
    LM: () => eB,
    MC: () => J,
    Mo: () => et,
    NI: () => tX,
    NL: () => t0,
    Nj: () => eW,
    Nt: () => t1,
    PB: () => tp,
    PM: () => eA,
    Pb: () => eX,
    Qe: () => z,
    Qr: () => em,
    Rc: () => t$,
    Rt: () => ts,
    T2: () => t2,
    Th: () => tQ,
    U3: () => ep,
    V$: () => tT,
    VB: () => tG,
    Vl: () => to,
    WP: () => eh,
    Xh: () => eI,
    Xv: () => ek,
    ZS: () => tZ,
    ZZ: () => ea,
    Zp: () => tU,
    _D: () => ei,
    _j: () => tC,
    _p: () => tx,
    _x: () => el,
    b7: () => ti,
    bA: () => tV,
    f$: () => tw,
    f2: () => e2,
    fY: () => tv,
    gI: () => tI,
    hF: () => tz,
    hQ: () => eb,
    iQ: () => eu,
    il: () => tr,
    jY: () => tW,
    lQ: () => es,
    nc: () => e1,
    o9: () => e$,
    oo: () => eH,
    pO: () => ez,
    q6: () => ed,
    q8: () => t_,
    qe: () => tY,
    t2: () => eC,
    u7: () => tM,
    uN: () => tK,
    vB: () => tJ,
    vQ: () => ej,
    vR: () => eZ,
    vj: () => $,
    wj: () => eU,
    xN: () => eM,
    xn: () => eD,
    yH: () => tD,
    yI: () => ey,
    ys: () => eF,
    zE: () => eP,
    zK: () => eJ,
    zi: () => ec,
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
    return n.size > 0 ? Array.from(n) : void 0;
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
function en(e) {
    let t = Q(e, [o.X.STREAM_ON_DESKTOP]);
    return null == t ? void 0 : t[0];
}
function er(e, t) {
    let n = ee(t);
    if (null == n) return !1;
    let r = _.Z.getApplication(n);
    return null != r && e === r.name.toLowerCase();
}
function ei(e, t) {
    return (
        null != e &&
        (q(e) || X(e)
            ? er(e.name.toLowerCase(), t)
            : (null != t && t.id === U.Jk && e.application_id === U.$z) ||
              (null != e.application_id && eo(e.application_id, t)))
    );
}
function ea(e, t) {
    for (let [n, r] of e) if (ei(t, r) && !ec(r)) return r;
}
function eo(e, t) {
    let n = J(t);
    return null != n && n.some((t) => t === e);
}
function es(e, t) {
    let n;
    for (let [r, i] of e)
        if (eo(t, i) && !ec(i)) {
            n = i;
            break;
        }
    return n;
}
function el(e, t, n) {
    var r;
    let i = Array.isArray(t) ? new Map(t.map((e) => [e.id, e])) : t,
        a = Array.isArray(n) ? new Map(n.map((e) => [e.id, e])) : n,
        o = i.get(e);
    if (null != o) return o;
    let s = null == (r = a.get(e)) ? void 0 : r.replacementId;
    if (null != s) return i.get(s);
}
function ec(e) {
    return new Date(e.config.expiresAt).valueOf() <= Date.now();
}
function eu(e) {
    if (!ec(e)) return !1;
    let t = Date.now() - W,
        n = new Date(e.config.expiresAt).valueOf();
    return null != e.config.expiresAt && !(n <= t);
}
function ed(e) {
    return (0, a.EQ)(e)
        .with({ config_version: 2 }, (e) => (0, j.Q)(e))
        .exhaustive();
}
function ef(e) {
    return null == e
        ? null
        : {
              lastBeatAt: e.last_beat_at,
              expiresAt: e.expires_at,
          };
}
function e_(e) {
    let t = {};
    for (let [n, r] of Object.entries(e))
        t[n] = {
            eventName: r.event_name,
            value: r.value,
            updatedAt: r.updated_at,
            completedAt: r.completed_at,
            heartbeat: ef(r.heartbeat),
        };
    return t;
}
function ep(e) {
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
        progress: e_(e.progress),
    };
}
function eh(e) {
    return {
        id: e.id,
        preview: e.preview,
        config: ed(e.config),
        userStatus: null == e.user_status ? null : ep(e.user_status),
        targetedContent: e.targeted_content,
    };
}
function em(e) {
    return {
        id: e.id,
        replacementId: e.replacement_id,
    };
}
function eg(e) {
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
function eE(e) {
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
        rewards: e.rewards.map(eg),
        cosponsorMetadata: (0, j.s)(e.cosponsor_metadata),
    };
}
function eb(e) {
    return {
        id: e.id,
        config: eE(e.config),
        userStatus: null == e.user_status ? null : ep(e.user_status),
    };
}
function ey(e) {
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
function eO(e) {
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
                        rewardCode: ey(t.reward.reward_code),
                    },
                },
            };
    }
}
function ev(e) {
    return {
        skuId: e.sku_id,
        tenantMetadata: eO(e.tenant_metadata),
        consumed: e.consumed,
    };
}
function eI(e) {
    return {
        claimedAt: e.claimed_at,
        items: e.entitlements.map(ev),
        errors: e.errors,
    };
}
function eT(e) {
    return {
        eventName: e.event_name,
        title: e.title,
        description: e.description,
        target: e.target,
    };
}
let eS = (e) => "".concat(location.protocol, "//").concat(location.host, "/quests/").concat(e);
function eA(e, t, n) {
    let r = t.get(n);
    if (null == r) return;
    let i = e.get(r.quest.id);
    if (null != i && !ec(i)) return i;
}
let eC = (e) => {
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
function eN(e) {
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
function eR(e) {
    return Object.keys(U.a_).includes(x.jn[e]);
}
function eP(e, t) {
    if (!eR(t)) return !1;
    let n = x.jn[t];
    return (0, A.yE)(e.dismissedQuestContent, U.a_[n]);
}
function eD(e) {
    let t = e.rewardsConfig.rewards.find((e) => e.type === c.w.COLLECTIBLE);
    return (null == t ? void 0 : t.type) === c.w.COLLECTIBLE ? t : null;
}
function ew(e) {
    let t = eD(e);
    return null != t && "expiresAtPremium" in t && null != t.expiresAtPremium ? tA(t.expiresAtPremium) : null;
}
function ex(e) {
    let t = eD(e);
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
function eL(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === c.w.FRACTIONAL_PREMIUM);
}
function eM(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === c.w.VIRTUAL_CURRENCY);
}
function ek(e) {
    return null != eD(e);
}
function ej(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === c.w.IN_GAME);
}
function eU(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === c.w.REWARD_CODE);
}
function eG(e) {
    var t;
    return null != (t = e.rewardsConfig.rewards.find((e) => e.type === c.w.IN_GAME)) ? t : null;
}
function eB(e) {
    let t = e.rewardsConfig.rewards.find((e) => e.type === c.w.VIRTUAL_CURRENCY);
    return null == t ? void 0 : t.orbQuantity;
}
function eZ(e, t) {
    return e.targetedContent.includes(t);
}
function eF(e, t) {
    R.Z.captureException(e, Y(V({}, t), { tags: Y(V({}, null == t ? void 0 : t.tags), { app_context: "quests" }) }));
}
function eV(e, t) {
    if (null == t || null == e) return null;
    for (let n of t) {
        let t = ea(e, n);
        if (null != t) return t;
    }
    return null;
}
function eH(e) {
    let {
            quest: { config: t },
        } = e,
        n = t.rewardsConfig;
    return (
        n.assignmentMethod === s.j.TIERED && n.rewards.length > 0 && n.rewards.every((e) => e.type === c.w.REWARD_CODE)
    );
}
function eY(e) {
    return null != e.taskConfigV2.tasks[o.X.PLAY_ON_DESKTOP];
}
function eW(e) {
    let { quest: t } = e;
    return eY(t.config);
}
function eK(e) {
    let { quest: t } = e;
    return null != t.config.taskConfigV2.tasks[o.X.STREAM_ON_DESKTOP];
}
function ez(e) {
    return null != e.config.taskConfigV2.tasks[o.X.PLAY_ACTIVITY];
}
function eq(e) {
    return null != e && eW({ quest: e });
}
function eX(e) {
    if (!(0, M.CD)("QuestUtils") || null == e) return !1;
    let t = $(e);
    return null != t && t.length > 1;
}
function eQ(e) {
    return et(e) === U.Ts;
}
function eJ(e, t) {
    return k.r.build(e.config).features.has(t);
}
function e$(e) {
    let { quest: t, idx: n } = e;
    if (null == n) return null;
    let r = t.config.rewardsConfig.rewards[n];
    return r.type === c.w.REWARD_CODE ? r : null;
}
function e0(e) {
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
function e1(e, t) {
    let n = k.r.build(e.config).ctaLink,
        r = e0(e);
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
let e2 = (e, t) => {
    (0, D._3)({
        questId: e,
        questContent: t.content,
        questContentCTA: t.ctaContent,
        questContentPosition: t.position,
        impressionId: t.impressionId,
        sourceQuestContent: t.sourceQuestContent,
    }),
        (0, I.JG)(eS(e));
};
function e3(e) {
    return (null == e ? void 0 : e.type) === o.X.PLAY_ON_DESKTOP;
}
let e4 = (e, t) => (e > 0 ? (0, i.floor)(Math.min(t / e, 1), 4) : 0),
    e8 = (e) => tb(e) || w.Z.isProgressingOnDesktop(e.id),
    e5 = (e, t) => {
        var n, r, a, o;
        let s =
            null == (o = e.userStatus) ||
            null == (a = o.progress) ||
            null == (r = a[t.type]) ||
            null == (n = r.heartbeat)
                ? void 0
                : n.lastBeatAt;
        if (null == s || !e8(e)) return 0;
        let l = Date.now() - new Date(s).valueOf();
        return (0, i.floor)(l / S.Z.Millis.SECOND, 2);
    },
    e6 = (e, t) => {
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
        if (t_(e)) {
            let n = w.Z.getOptimisticProgress(e.id, t.type);
            return null == n || n < l ? l : n;
        }
        return l + e5(e, t);
    },
    e7 = 0.99,
    e9 = (e, t) => {
        var n;
        let r = t.target;
        if ((null == (n = e.userStatus) ? void 0 : n.completedAt) != null) return r;
        let a = Math.min(r * e7, e6(e, t));
        return Math.max((0, i.floor)(a, 2), 0);
    },
    te = (e) => {
        var t, n, r;
        let { quest: i, taskType: a, includeTaskTypes: s = o.T.ALL } = e,
            l = i.config.taskConfigV2,
            c = null != a ? a : null == (t = Object.values(l.tasks).filter((e) => s.has(e.type))[0]) ? void 0 : t.type,
            u = null != (r = l.tasks[c]) ? r : l.tasks[o.X.STREAM_ON_DESKTOP];
        if (null == u) throw Error("No task with type ".concat(a, " found for quest ").concat(i.id, "!"));
        let d = u.target,
            f = e9(i, u),
            _ = Object.values(l.tasks).find(e3),
            p = null == _ || null == (n = _.applications) ? void 0 : n.map((e) => e.id);
        return {
            progressSeconds: f,
            targetSeconds: d,
            targetMinutes: Math.ceil(d / S.Z.Seconds.MINUTE),
            percentComplete: e4(d, f),
            taskType: c,
            applications: p,
        };
    },
    tt = (e) => (o.T.ALL.has(e) ? e : null),
    tn = (e) => {
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
            let t = tt(e.eventName);
            if (null != t && (null == i ? void 0 : i.has(t)))
                return te({
                    quest: r,
                    taskType: t,
                    includeTaskTypes: i,
                });
        }
        return te({
            quest: r,
            includeTaskTypes: i,
        });
    },
    tr = (e, t) => {
        if (to(e))
            return {
                progressSeconds: 0,
                targetSeconds: 1,
                targetMinutes: 1,
                percentComplete: 0,
                taskType: o.X.STREAM_ON_DESKTOP,
            };
        if (tf(e))
            return tn({
                quest: e,
                includeTaskTypes: null != t ? t : tb(e) ? o.T.CONSOLE : o.T.ALL,
            });
        if (t_(e))
            if (th(e))
                return te({
                    quest: e,
                    taskType: o.X.WATCH_VIDEO_ON_MOBILE,
                });
            else
                return te({
                    quest: e,
                    taskType: o.X.WATCH_VIDEO,
                });
        return eq(e)
            ? te({
                  quest: e,
                  taskType: o.X.PLAY_ON_DESKTOP,
              })
            : ez(e)
              ? te({
                    quest: e,
                    taskType: o.X.PLAY_ACTIVITY,
                })
              : te({
                    quest: e,
                    taskType: o.X.STREAM_ON_DESKTOP,
                });
    };
function ti(e) {
    var t, n, r, i;
    let a = k.r.build(e.config).defaultInGameTask;
    if (null == a) return null;
    let o =
            null !=
            (i = null == (r = e.userStatus) || null == (n = r.progress) || null == (t = n[a.type]) ? void 0 : t.value)
                ? i
                : 0,
        s = e4(a.target, o);
    return {
        title: a.messages.taskTitle,
        description: a.messages.taskDescription,
        target: a.target,
        progress: o,
        percentComplete: s,
    };
}
let ta = (e) => (t) => e.some((e) => null != t.config.taskConfigV2.tasks[e]);
function to(e) {
    return Array.from(o.T.IN_GAME).some((t) => null != e.config.taskConfigV2.tasks[t]);
}
function ts(e) {
    return (to(e) || ez(e)) && e.config.features.includes(U.S7.START_QUEST_CTA);
}
function tl(e) {
    return tc(e.targetSeconds - e.progressSeconds);
}
function tc(e) {
    return {
        minutes: Math.max(0, Math.floor(e / 60)),
        seconds: Math.max(0, Math.floor(e % 60)),
    };
}
function tu(e) {
    let t = tl(e);
    return td(t.minutes, t.seconds);
}
function td(e, t) {
    return "".concat(String(e).padStart(2, "0"), ":").concat(String(t).padStart(2, "0"));
}
let tf = ta([o.X.PLAY_ON_XBOX, o.X.PLAY_ON_PLAYSTATION]),
    t_ = ta([o.X.WATCH_VIDEO, o.X.WATCH_VIDEO_ON_MOBILE]),
    tp = ta([o.X.WATCH_VIDEO]),
    th = ta([o.X.WATCH_VIDEO_ON_MOBILE]),
    tm = (e) => th(e) && !tp(e);
function tg(e) {
    return tf(e);
}
let tE = (e, t) => {
    var n, r;
    let i = null == e || null == (r = e.progress[t]) || null == (n = r.heartbeat) ? void 0 : n.expiresAt;
    if (null == i) return !1;
    let a = new Date(i).valueOf();
    return !isNaN(a) && a > Date.now();
};
function tb(e) {
    return null != e.userStatus && (tE(e.userStatus, o.X.PLAY_ON_XBOX) || tE(e.userStatus, o.X.PLAY_ON_PLAYSTATION));
}
function ty(e) {
    return !!t_(e) && (0, n(952265).nf)(tM(e.id));
}
function tO() {
    {
        let { openUserSettings: e } = n(518596);
        e(E.n.CONNECTIONS_PANEL, { section: G.oAB.CONNECTIONS });
    }
}
function tv(e, t) {
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
function tI(e, t) {
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
    let r = tL(n);
    if (1 === r.length) return (0, p.Z)({ platformType: r.at(0) });
    d.Z.dispatch({
        type: "CONNECTIONS_GRID_MODAL_SHOW",
        onComplete: (e) => (0, p.Z)({ platformType: e }),
        includedPlatformTypes: new Set(r),
    });
}
function tT(e, t) {
    let { quest: n } = e;
    (0, D._3)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId,
        sourceQuestContent: t.sourceQuestContent,
    }),
        tO();
}
function tS() {
    return window.location.pathname.startsWith(G.Z5c.QUEST_HOME);
}
function tA(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" };
    return null == e ? "" : new Date(e).toLocaleDateString(g.default.locale, t);
}
function tC(e) {
    return "xbox" === e.connected_account_type ? G.ABu.XBOX : G.ABu.PLAYSTATION;
}
function tN(e) {
    return tC(e) === G.ABu.XBOX ? Z.t["mytEv+"] : Z.t.iDiwby;
}
function tR(e) {
    var t, n, r, i;
    let { quest: a, rewardCode: o, selectedPlatformType: s, sharedQuestFields: l } = e,
        c = eH({ quest: a }),
        u = null != s ? s : null == o ? void 0 : o.platform,
        d = c
            ? e$({
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
function tP(e) {
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
function tD(e) {
    let t = eW({ quest: e }) || eK({ quest: e }),
        n = tf(e),
        r = [];
    return t && r.push(U.cd.DESKTOP), n && r.push(U.cd.CONSOLE), r;
}
function tw(e) {
    var t;
    let n = null == (t = eD(e)) ? void 0 : t.expirationMode;
    return null != n && K.has(n);
}
function tx(e) {
    var t;
    return tw(e) && (null == (t = eD(e)) ? void 0 : t.expirationMode) === l.n.PREMIUM_PERMANENT;
}
function tL(e) {
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
function tM(e) {
    return "VIDEO-QUEST-".concat(e);
}
function tk(e) {
    let t = t_(e),
        n = ez(e);
    return t || n;
}
function tj(e, t) {
    var n, r;
    ec(e) ||
        (null == (n = e.userStatus) ? void 0 : n.enrolledAt) == null ||
        (null == (r = e.userStatus) ? void 0 : r.completedAt) != null ||
        (0, P.cT)(e.id, t);
}
function tU(e) {
    return {
        [x.jn.QUEST_BAR]: x.Ok.DESKTOP_ACCOUNT_PANEL_AREA,
        [x.jn.QUEST_BAR_V2]: x.Ok.DESKTOP_ACCOUNT_PANEL_AREA,
        [x.jn.QUEST_BAR_MOBILE]: x.Ok.MOBILE_HOME_DOCK_AREA,
    }[e];
}
function tG(e) {
    let t = tU(e);
    return null != t && U.v6.has(t);
}
let tB = "landscape";
function tZ(e) {
    let t = e.assets.video;
    return null == t || null == t.width || null == t.height ? tB : t.width > t.height ? "landscape" : "portrait";
}
let tF = (e) =>
    e.percentComplete > 0
        ? Z.intl.formatToPlainString(Z.t["c59/Tp"], { remainTime: tu(e) })
        : Z.intl.formatToPlainString(Z.t.GNsKiW, { remainTime: tu(e) });
function tV(e, t) {
    return e <= 0 || t <= 0 ? 0 : e >= t ? 1 : Math.min(1, Math.round((e / t) * 100) / 100);
}
function tH(e) {
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
function tY(e, t) {
    var n;
    let { quest: r, adDecisionData: i } = null != (n = w.Z.questToDeliverForPlacement.get(tU(t))) ? n : {};
    return null != i && (null == r ? void 0 : r.id) === e ? i : U.Jp;
}
function tW(e) {
    var t;
    let { metadataRaw: n } = null != (t = w.Z.questToDeliverForPlacement.get(tU(e))) ? t : {};
    return n;
}
function tK(e) {
    var t;
    let { adContext: n } = null != (t = w.Z.questToDeliverForPlacement.get(tU(e))) ? t : {};
    return n;
}
function tz(e) {
    var t, n;
    let r = null != (n = null == (t = e.userStatus) ? void 0 : t.claimedTier) ? n : 0;
    return "rewardsConfig" in e.config ? e.config.rewardsConfig.rewards[r] : e.config.rewards[r];
}
function tq(e) {
    return new Set(Object.keys(e.config.taskConfigV2.tasks));
}
function tX(e, t) {
    let n = new Map();
    for (let [r, i] of e)
        if (!(eX(i) || eJ(i, U.S7.NON_GAMING_PLAY_QUEST))) {
            for (let e of tq(i))
                if (t.has(e)) {
                    n.set(r, i);
                    break;
                }
        }
    return n;
}
function tQ(e) {
    var t, n;
    let { questId: r, sourceQuestContent: i, videoSessionId: a } = e,
        o = L.ZP.getState().getVideoProgress(r);
    if (null == o) return;
    let s = w.Z.getQuest(r);
    null != s &&
        (null == (t = s.userStatus) ? void 0 : t.enrolledAt) != null &&
        (null == (n = s.userStatus) ? void 0 : n.completedAt) == null &&
        tj(s, o.maxTimestampSec);
    let l = tV(o.maxTimestampSec, o.duration);
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
function tJ(e) {
    return e.sharePolicy !== u.X.NOT_SHAREABLE;
}
function t$(e, t) {
    return null != e && null != t && (0, m.p9)(t, v.Z, b.Z, O.Z, h.default)[0];
}
function t0(e) {
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
function t1(e) {
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
function t2(e) {
    switch (e) {
        case "reward":
            return Z.intl.string(Z.t.vjLqAU);
        case "task":
            return Z.intl.string(Z.t.Hufmss);
    }
}
