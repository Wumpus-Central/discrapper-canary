n.d(t, {
    $H: () => eK,
    $J: () => th,
    $V: () => tI,
    AV: () => eA,
    B2: () => tF,
    B3: () => tw,
    BM: () => tE,
    Bg: () => ew,
    Bz: () => tg,
    C1: () => tC,
    C9: () => tA,
    Dr: () => eY,
    F9: () => tB,
    FI: () => tM,
    FX: () => eP,
    Fs: () => tN,
    GN: () => eC,
    Gd: () => tL,
    Gs: () => ee,
    HJ: () => tp,
    Jg: () => eZ,
    K: () => ej,
    KM: () => eq,
    Kr: () => eD,
    LM: () => eU,
    MC: () => J,
    Mo: () => tq,
    NI: () => tz,
    NL: () => tJ,
    Nj: () => eH,
    Nt: () => t$,
    PB: () => tf,
    PM: () => eT,
    Pb: () => ez,
    Qe: () => z,
    Qr: () => ep,
    Rc: () => tQ,
    Rt: () => ta,
    T2: () => t0,
    U3: () => ef,
    V$: () => tv,
    VB: () => tj,
    Vl: () => ti,
    WP: () => e_,
    Xh: () => eO,
    Xv: () => eL,
    ZS: () => tG,
    ZZ: () => er,
    Zp: () => tk,
    _D: () => en,
    _j: () => tS,
    _p: () => tD,
    _x: () => eo,
    b7: () => tn,
    bA: () => tZ,
    f$: () => tP,
    f2: () => e0,
    fY: () => ty,
    gI: () => tO,
    hF: () => tW,
    hQ: () => eg,
    iQ: () => el,
    il: () => tt,
    jY: () => tH,
    lQ: () => ea,
    nc: () => e$,
    o9: () => eQ,
    oo: () => eF,
    pO: () => eW,
    q6: () => ec,
    q8: () => td,
    qe: () => tV,
    t2: () => eS,
    u7: () => tx,
    uN: () => tY,
    vB: () => tX,
    vQ: () => eM,
    vR: () => eG,
    wj: () => ek,
    xN: () => ex,
    xn: () => eR,
    yH: () => tR,
    yI: () => eE,
    ys: () => eB,
    zE: () => eN,
    zK: () => eX,
    zi: () => es,
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
function et(e, t) {
    let n = ee(t);
    if (null == n) return !1;
    let r = _.Z.getApplication(n);
    return null != r && e === r.name.toLowerCase();
}
function en(e, t) {
    return (
        null != e &&
        (q(e) || X(e)
            ? et(e.name.toLowerCase(), t)
            : (null != t && t.id === U.Jk && e.application_id === U.$z) ||
              (null != e.application_id && ei(e.application_id, t)))
    );
}
function er(e, t) {
    for (let [n, r] of e) if (en(t, r) && !es(r)) return r;
}
function ei(e, t) {
    let n = J(t);
    return null != n && n.some((t) => t === e);
}
function ea(e, t) {
    let n;
    for (let [r, i] of e)
        if (ei(t, i) && !es(i)) {
            n = i;
            break;
        }
    return n;
}
function eo(e, t, n) {
    var r;
    let i = Array.isArray(t) ? new Map(t.map((e) => [e.id, e])) : t,
        a = Array.isArray(n) ? new Map(n.map((e) => [e.id, e])) : n,
        o = i.get(e);
    if (null != o) return o;
    let s = null == (r = a.get(e)) ? void 0 : r.replacementId;
    if (null != s) return i.get(s);
}
function es(e) {
    return new Date(e.config.expiresAt).valueOf() <= Date.now();
}
function el(e) {
    if (!es(e)) return !1;
    let t = Date.now() - W,
        n = new Date(e.config.expiresAt).valueOf();
    return null != e.config.expiresAt && !(n <= t);
}
function ec(e) {
    return (0, a.EQ)(e)
        .with({ config_version: 2 }, (e) => (0, j.Q)(e))
        .exhaustive();
}
function eu(e) {
    return null == e
        ? null
        : {
              lastBeatAt: e.last_beat_at,
              expiresAt: e.expires_at,
          };
}
function ed(e) {
    let t = {};
    for (let [n, r] of Object.entries(e))
        t[n] = {
            eventName: r.event_name,
            value: r.value,
            updatedAt: r.updated_at,
            completedAt: r.completed_at,
            heartbeat: eu(r.heartbeat),
        };
    return t;
}
function ef(e) {
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
        progress: ed(e.progress),
    };
}
function e_(e) {
    return {
        id: e.id,
        preview: e.preview,
        config: ec(e.config),
        userStatus: null == e.user_status ? null : ef(e.user_status),
        targetedContent: e.targeted_content,
    };
}
function ep(e) {
    return {
        id: e.id,
        replacementId: e.replacement_id,
    };
}
function eh(e) {
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
function em(e) {
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
        rewards: e.rewards.map(eh),
        cosponsorMetadata: (0, j.s)(e.cosponsor_metadata),
    };
}
function eg(e) {
    return {
        id: e.id,
        config: em(e.config),
        userStatus: null == e.user_status ? null : ef(e.user_status),
    };
}
function eE(e) {
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
function eb(e) {
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
                        rewardCode: eE(t.reward.reward_code),
                    },
                },
            };
    }
}
function ey(e) {
    return {
        skuId: e.sku_id,
        tenantMetadata: eb(e.tenant_metadata),
        consumed: e.consumed,
    };
}
function eO(e) {
    return {
        claimedAt: e.claimed_at,
        items: e.entitlements.map(ey),
        errors: e.errors,
    };
}
function ev(e) {
    return {
        eventName: e.event_name,
        title: e.title,
        description: e.description,
        target: e.target,
    };
}
let eI = (e) => "".concat(location.protocol, "//").concat(location.host, "/quests/").concat(e);
function eT(e, t, n) {
    let r = t.get(n);
    if (null == r) return;
    let i = e.get(r.quest.id);
    if (null != i && !es(i)) return i;
}
let eS = (e) => {
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
function eA(e) {
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
function eC(e) {
    return Object.keys(U.a_).includes(x.jn[e]);
}
function eN(e, t) {
    if (!eC(t)) return !1;
    let n = x.jn[t];
    return (0, A.yE)(e.dismissedQuestContent, U.a_[n]);
}
function eR(e) {
    let t = e.rewardsConfig.rewards.find((e) => e.type === c.w.COLLECTIBLE);
    return (null == t ? void 0 : t.type) === c.w.COLLECTIBLE ? t : null;
}
function eP(e) {
    let t = eR(e);
    return null != t && "expiresAtPremium" in t && null != t.expiresAtPremium ? tT(t.expiresAtPremium) : null;
}
function eD(e) {
    let t = eR(e);
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
function ew(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === c.w.FRACTIONAL_PREMIUM);
}
function ex(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === c.w.VIRTUAL_CURRENCY);
}
function eL(e) {
    return null != eR(e);
}
function eM(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === c.w.IN_GAME);
}
function ek(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === c.w.REWARD_CODE);
}
function ej(e) {
    var t;
    return null != (t = e.rewardsConfig.rewards.find((e) => e.type === c.w.IN_GAME)) ? t : null;
}
function eU(e) {
    let t = e.rewardsConfig.rewards.find((e) => e.type === c.w.VIRTUAL_CURRENCY);
    return null == t ? void 0 : t.orbQuantity;
}
function eG(e, t) {
    return e.targetedContent.includes(t);
}
function eB(e, t) {
    R.Z.captureException(e, Y(V({}, t), { tags: Y(V({}, null == t ? void 0 : t.tags), { app_context: "quests" }) }));
}
function eZ(e, t) {
    if (null == t || null == e) return null;
    for (let n of t) {
        let t = er(e, n);
        if (null != t) return t;
    }
    return null;
}
function eF(e) {
    let {
            quest: { config: t },
        } = e,
        n = t.rewardsConfig;
    return (
        n.assignmentMethod === s.j.TIERED && n.rewards.length > 0 && n.rewards.every((e) => e.type === c.w.REWARD_CODE)
    );
}
function eV(e) {
    return null != e.taskConfigV2.tasks[o.X.PLAY_ON_DESKTOP];
}
function eH(e) {
    let { quest: t } = e;
    return eV(t.config);
}
function eY(e) {
    let { quest: t } = e;
    return null != t.config.taskConfigV2.tasks[o.X.STREAM_ON_DESKTOP];
}
function eW(e) {
    return null != e.config.taskConfigV2.tasks[o.X.PLAY_ACTIVITY];
}
function eK(e) {
    return null != e && eH({ quest: e });
}
function ez(e) {
    if (!(0, M.CD)("QuestUtils") || null == e) return !1;
    let t = $(e);
    return null != t && t.length > 1;
}
function eq(e) {
    let t = k.r.build(e.config).application.id;
    return eW(e) && t === U.Ts;
}
function eX(e, t) {
    return k.r.build(e.config).features.has(t);
}
function eQ(e) {
    let { quest: t, idx: n } = e;
    if (null == n) return null;
    let r = t.config.rewardsConfig.rewards[n];
    return r.type === c.w.REWARD_CODE ? r : null;
}
function eJ(e) {
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
function e$(e, t) {
    let n = k.r.build(e.config).ctaLink,
        r = eJ(e);
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
let e0 = (e, t) => {
    (0, D._3)({
        questId: e,
        questContent: t.content,
        questContentCTA: t.ctaContent,
        questContentPosition: t.position,
        impressionId: t.impressionId,
        sourceQuestContent: t.sourceQuestContent,
    }),
        (0, I.JG)(eI(e));
};
function e1(e) {
    return (null == e ? void 0 : e.type) === o.X.PLAY_ON_DESKTOP;
}
let e2 = (e, t) => (e > 0 ? (0, i.floor)(Math.min(t / e, 1), 4) : 0),
    e3 = (e) => tg(e) || w.Z.isProgressingOnDesktop(e.id),
    e4 = (e, t) => {
        var n, r, a, o;
        let s =
            null == (o = e.userStatus) ||
            null == (a = o.progress) ||
            null == (r = a[t.type]) ||
            null == (n = r.heartbeat)
                ? void 0
                : n.lastBeatAt;
        if (null == s || !e3(e)) return 0;
        let l = Date.now() - new Date(s).valueOf();
        return (0, i.floor)(l / S.Z.Millis.SECOND, 2);
    },
    e8 = (e, t) => {
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
        if (td(e)) {
            let n = w.Z.getOptimisticProgress(e.id, t.type);
            return null == n || n < l ? l : n;
        }
        return l + e4(e, t);
    },
    e5 = 0.99,
    e6 = (e, t) => {
        var n;
        let r = t.target;
        if ((null == (n = e.userStatus) ? void 0 : n.completedAt) != null) return r;
        let a = Math.min(r * e5, e8(e, t));
        return Math.max((0, i.floor)(a, 2), 0);
    },
    e7 = (e) => {
        var t, n, r;
        let { quest: i, taskType: a, includeTaskTypes: s = o.T.ALL } = e,
            l = i.config.taskConfigV2,
            c = null != a ? a : null == (t = Object.values(l.tasks).filter((e) => s.has(e.type))[0]) ? void 0 : t.type,
            u = null != (r = l.tasks[c]) ? r : l.tasks[o.X.STREAM_ON_DESKTOP];
        if (null == u) throw Error("No task with type ".concat(a, " found for quest ").concat(i.id, "!"));
        let d = u.target,
            f = e6(i, u),
            _ = Object.values(l.tasks).find(e1),
            p = null == _ || null == (n = _.applications) ? void 0 : n.map((e) => e.id);
        return {
            progressSeconds: f,
            targetSeconds: d,
            targetMinutes: Math.ceil(d / S.Z.Seconds.MINUTE),
            percentComplete: e2(d, f),
            taskType: c,
            applications: p,
        };
    },
    e9 = (e) => (o.T.ALL.has(e) ? e : null),
    te = (e) => {
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
            let t = e9(e.eventName);
            if (null != t && (null == i ? void 0 : i.has(t)))
                return e7({
                    quest: r,
                    taskType: t,
                    includeTaskTypes: i,
                });
        }
        return e7({
            quest: r,
            includeTaskTypes: i,
        });
    },
    tt = (e, t) => {
        if (ti(e))
            return {
                progressSeconds: 0,
                targetSeconds: 1,
                targetMinutes: 1,
                percentComplete: 0,
                taskType: o.X.STREAM_ON_DESKTOP,
            };
        if (tu(e))
            return te({
                quest: e,
                includeTaskTypes: null != t ? t : tg(e) ? o.T.CONSOLE : o.T.ALL,
            });
        if (td(e))
            if (t_(e))
                return e7({
                    quest: e,
                    taskType: o.X.WATCH_VIDEO_ON_MOBILE,
                });
            else
                return e7({
                    quest: e,
                    taskType: o.X.WATCH_VIDEO,
                });
        return eK(e)
            ? e7({
                  quest: e,
                  taskType: o.X.PLAY_ON_DESKTOP,
              })
            : eW(e)
              ? e7({
                    quest: e,
                    taskType: o.X.PLAY_ACTIVITY,
                })
              : e7({
                    quest: e,
                    taskType: o.X.STREAM_ON_DESKTOP,
                });
    };
function tn(e) {
    var t, n, r, i;
    let a = k.r.build(e.config).defaultInGameTask;
    if (null == a) return null;
    let o =
            null !=
            (i = null == (r = e.userStatus) || null == (n = r.progress) || null == (t = n[a.type]) ? void 0 : t.value)
                ? i
                : 0,
        s = e2(a.target, o);
    return {
        title: a.messages.taskTitle,
        description: a.messages.taskDescription,
        target: a.target,
        progress: o,
        percentComplete: s,
    };
}
let tr = (e) => (t) => e.some((e) => null != t.config.taskConfigV2.tasks[e]);
function ti(e) {
    return Array.from(o.T.IN_GAME).some((t) => null != e.config.taskConfigV2.tasks[t]);
}
function ta(e) {
    return (ti(e) || eW(e)) && e.config.features.includes(U.S7.START_QUEST_CTA);
}
function to(e) {
    return ts(e.targetSeconds - e.progressSeconds);
}
function ts(e) {
    return {
        minutes: Math.max(0, Math.floor(e / 60)),
        seconds: Math.max(0, Math.floor(e % 60)),
    };
}
function tl(e) {
    let t = to(e);
    return tc(t.minutes, t.seconds);
}
function tc(e, t) {
    return "".concat(String(e).padStart(2, "0"), ":").concat(String(t).padStart(2, "0"));
}
let tu = tr([o.X.PLAY_ON_XBOX, o.X.PLAY_ON_PLAYSTATION]),
    td = tr([o.X.WATCH_VIDEO, o.X.WATCH_VIDEO_ON_MOBILE]),
    tf = tr([o.X.WATCH_VIDEO]),
    t_ = tr([o.X.WATCH_VIDEO_ON_MOBILE]),
    tp = (e) => t_(e) && !tf(e);
function th(e) {
    return tu(e);
}
let tm = (e, t) => {
    var n, r;
    let i = null == e || null == (r = e.progress[t]) || null == (n = r.heartbeat) ? void 0 : n.expiresAt;
    if (null == i) return !1;
    let a = new Date(i).valueOf();
    return !isNaN(a) && a > Date.now();
};
function tg(e) {
    return null != e.userStatus && (tm(e.userStatus, o.X.PLAY_ON_XBOX) || tm(e.userStatus, o.X.PLAY_ON_PLAYSTATION));
}
function tE(e) {
    return !!td(e) && (0, n(952265).nf)(tx(e.id));
}
function tb() {
    {
        let { openUserSettings: e } = n(518596);
        e(E.n.CONNECTIONS_PANEL, { section: G.oAB.CONNECTIONS });
    }
}
function ty(e, t) {
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
function tO(e, t) {
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
    let r = tw(n);
    if (1 === r.length) return (0, p.Z)({ platformType: r.at(0) });
    d.Z.dispatch({
        type: "CONNECTIONS_GRID_MODAL_SHOW",
        onComplete: (e) => (0, p.Z)({ platformType: e }),
        includedPlatformTypes: new Set(r),
    });
}
function tv(e, t) {
    let { quest: n } = e;
    (0, D._3)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId,
        sourceQuestContent: t.sourceQuestContent,
    }),
        tb();
}
function tI() {
    return window.location.pathname.startsWith(G.Z5c.QUEST_HOME);
}
function tT(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" };
    return null == e ? "" : new Date(e).toLocaleDateString(g.default.locale, t);
}
function tS(e) {
    return "xbox" === e.connected_account_type ? G.ABu.XBOX : G.ABu.PLAYSTATION;
}
function tA(e) {
    return tS(e) === G.ABu.XBOX ? Z.t["mytEv+"] : Z.t.iDiwby;
}
function tC(e) {
    var t, n, r, i;
    let { quest: a, rewardCode: o, selectedPlatformType: s, sharedQuestFields: l } = e,
        c = eF({ quest: a }),
        u = null != s ? s : null == o ? void 0 : o.platform,
        d = c
            ? eQ({
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
function tN(e) {
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
function tR(e) {
    let t = eH({ quest: e }) || eY({ quest: e }),
        n = tu(e),
        r = [];
    return t && r.push(U.cd.DESKTOP), n && r.push(U.cd.CONSOLE), r;
}
function tP(e) {
    var t;
    let n = null == (t = eR(e)) ? void 0 : t.expirationMode;
    return null != n && K.has(n);
}
function tD(e) {
    var t;
    return tP(e) && (null == (t = eR(e)) ? void 0 : t.expirationMode) === l.n.PREMIUM_PERMANENT;
}
function tw(e) {
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
function tx(e) {
    return "VIDEO-QUEST-".concat(e);
}
function tL(e) {
    let t = td(e),
        n = eW(e);
    return t || n;
}
function tM(e, t) {
    var n, r;
    es(e) ||
        (null == (n = e.userStatus) ? void 0 : n.enrolledAt) == null ||
        (null == (r = e.userStatus) ? void 0 : r.completedAt) != null ||
        (0, P.cT)(e.id, t);
}
function tk(e) {
    return {
        [x.jn.QUEST_BAR]: x.Ok.DESKTOP_ACCOUNT_PANEL_AREA,
        [x.jn.QUEST_BAR_V2]: x.Ok.DESKTOP_ACCOUNT_PANEL_AREA,
        [x.jn.QUEST_BAR_MOBILE]: x.Ok.MOBILE_HOME_DOCK_AREA,
    }[e];
}
function tj(e) {
    let t = tk(e);
    return null != t && U.v6.has(t);
}
let tU = "landscape";
function tG(e) {
    let t = e.assets.video;
    return null == t || null == t.width || null == t.height ? tU : t.width > t.height ? "landscape" : "portrait";
}
let tB = (e) =>
    e.percentComplete > 0
        ? Z.intl.formatToPlainString(Z.t["c59/Tp"], { remainTime: tl(e) })
        : Z.intl.formatToPlainString(Z.t.GNsKiW, { remainTime: tl(e) });
function tZ(e, t) {
    return e <= 0 || t <= 0 ? 0 : e >= t ? 1 : Math.min(1, Math.round((e / t) * 100) / 100);
}
function tF(e) {
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
function tV(e, t) {
    var n;
    let { quest: r, adDecisionData: i } = null != (n = w.Z.questToDeliverForPlacement.get(tk(t))) ? n : {};
    return null != i && (null == r ? void 0 : r.id) === e ? i : U.Jp;
}
function tH(e) {
    var t;
    let { metadataRaw: n } = null != (t = w.Z.questToDeliverForPlacement.get(tk(e))) ? t : {};
    return n;
}
function tY(e) {
    var t;
    let { adContext: n } = null != (t = w.Z.questToDeliverForPlacement.get(tk(e))) ? t : {};
    return n;
}
function tW(e) {
    var t, n;
    let r = null != (n = null == (t = e.userStatus) ? void 0 : t.claimedTier) ? n : 0;
    return "rewardsConfig" in e.config ? e.config.rewardsConfig.rewards[r] : e.config.rewards[r];
}
function tK(e) {
    return new Set(Object.keys(e.config.taskConfigV2.tasks));
}
function tz(e, t) {
    let n = new Map();
    for (let [r, i] of e)
        if (!(ez(i) || eX(i, U.S7.NON_GAMING_PLAY_QUEST))) {
            for (let e of tK(i))
                if (t.has(e)) {
                    n.set(r, i);
                    break;
                }
        }
    return n;
}
function tq(e) {
    var t, n;
    let { questId: r, sourceQuestContent: i, videoSessionId: a } = e,
        o = L.ZP.getState().getVideoProgress(r);
    if (null == o) return;
    let s = w.Z.getQuest(r);
    null != s &&
        (null == (t = s.userStatus) ? void 0 : t.enrolledAt) != null &&
        (null == (n = s.userStatus) ? void 0 : n.completedAt) == null &&
        tM(s, o.maxTimestampSec);
    let l = tZ(o.maxTimestampSec, o.duration);
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
function tX(e) {
    return e.sharePolicy !== u.X.NOT_SHAREABLE;
}
function tQ(e, t) {
    return null != e && null != t && (0, m.p9)(t, v.Z, b.Z, O.Z, h.default)[0];
}
function tJ(e) {
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
function t$(e) {
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
function t0(e) {
    switch (e) {
        case "reward":
            return Z.intl.string(Z.t.vjLqAU);
        case "task":
            return Z.intl.string(Z.t.Hufmss);
    }
}
