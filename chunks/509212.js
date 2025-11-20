n.d(t, {
    $H: () => eQ,
    $J: () => tO,
    $V: () => tR,
    AV: () => eP,
    B2: () => tq,
    B3: () => ne,
    BI: () => nr,
    BM: () => tT,
    Bg: () => ek,
    Bz: () => tI,
    C1: () => tL,
    DR: () => er,
    Dr: () => eq,
    F9: () => tW,
    FI: () => tZ,
    FX: () => ex,
    Fs: () => tx,
    GN: () => eD,
    Gd: () => tB,
    Gs: () => et,
    HJ: () => ty,
    Jg: () => eY,
    K: () => eZ,
    KM: () => e$,
    Kr: () => eM,
    LM: () => eF,
    M1: () => nt,
    MC: () => $,
    Mo: () => en,
    NI: () => t1,
    NL: () => t5,
    Nj: () => ez,
    Nt: () => t8,
    PB: () => tE,
    PM: () => eN,
    Pb: () => eJ,
    Qe: () => q,
    Qr: () => eE,
    Rc: () => t4,
    Rt: () => td,
    T2: () => t6,
    Th: () => t3,
    U3: () => em,
    UE: () => ef,
    Uy: () => tw,
    V$: () => tN,
    VB: () => tV,
    Vl: () => tu,
    WP: () => eg,
    Xh: () => eS,
    Xv: () => eU,
    ZS: () => tY,
    ZZ: () => eo,
    Zp: () => tF,
    _4: () => tU,
    _D: () => ea,
    _j: () => tD,
    _p: () => tj,
    _x: () => ec,
    b7: () => tl,
    bA: () => tK,
    f$: () => tk,
    f2: () => e5,
    fY: () => tA,
    gI: () => tC,
    hF: () => t$,
    hQ: () => eO,
    iQ: () => ed,
    il: () => to,
    jY: () => tQ,
    lQ: () => el,
    nc: () => e4,
    o9: () => e1,
    oo: () => eW,
    pO: () => eX,
    q6: () => e_,
    q8: () => tg,
    qe: () => tX,
    t2: () => eR,
    u7: () => tG,
    uN: () => tJ,
    vB: () => t2,
    vQ: () => eG,
    vR: () => eV,
    vj: () => ee,
    w8: () => t9,
    wj: () => eB,
    xN: () => ej,
    xn: () => eL,
    yH: () => tM,
    yI: () => ev,
    ys: () => eH,
    z1: () => tz,
    zE: () => ew,
    zG: () => nn,
    zK: () => e0,
    zi: () => eu,
    zo: () => e2,
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
    d = n(319245),
    f = n(95015),
    _ = n(570140),
    p = n(782568),
    h = n(812206);
n(597688);
var m = n(231757),
    g = n(258609),
    E = n(102172),
    b = n(706454),
    y = n(313789),
    O = n(430824),
    v = n(866960),
    I = n(496675),
    T = n(979651),
    S = n(572004),
    A = n(585483),
    C = n(70956),
    N = n(823379),
    R = n(358085),
    P = n(960048),
    D = n(22095),
    w = n(617136),
    L = n(569984),
    x = n(497505),
    M = n(184299),
    k = n(937797),
    j = n(502288),
    U = n(312046),
    G = n(46140),
    B = n(981631),
    Z = n(701488),
    F = n(388032);
function V(e, t, n) {
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
function H(e) {
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
                V(e, t, n[t]);
            });
    }
    return e;
}
function Y(e, t) {
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
function W(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let K = 2592000000,
    z = new Set([l.n.PREMIUM_EXTENSION, l.n.PREMIUM_PERMANENT]);
function q(e) {
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
let X = (e) => e.application_id === Z.Ev || e.platform === B.M7m.XBOX,
    Q = (e) => e.platform === B.M7m.PS4 || e.platform === B.M7m.PS5;
function J(e, t) {
    if (null == e) return;
    let n = new Set();
    for (let r of t) {
        let t = e.config.taskConfigV2.tasks[r];
        if (null != t && "applications" in t && Array.isArray(t.applications))
            for (let e of t.applications) n.add(e.id);
    }
    return n.size > 0 ? Array.from(n) : void 0;
}
function $(e) {
    if (null == e) return;
    let t = Object.keys(e.config.taskConfigV2.tasks);
    return J(e, t);
}
function ee(e) {
    return J(e, [o.X.PLAY_ON_DESKTOP]);
}
function et(e) {
    let t = J(e, [o.X.PLAY_ON_XBOX, o.X.PLAY_ON_PLAYSTATION]);
    return null == t ? void 0 : t[0];
}
function en(e) {
    let t = J(e, [o.X.PLAY_ACTIVITY]);
    return null == t ? void 0 : t[0];
}
function er(e) {
    let t = J(e, [o.X.STREAM_ON_DESKTOP]);
    return null == t ? void 0 : t[0];
}
function ei(e, t) {
    let n = et(t);
    if (null == n) return !1;
    let r = h.Z.getApplication(n);
    return null != r && e === r.name.toLowerCase();
}
function ea(e, t) {
    return (
        null != e &&
        (X(e) || Q(e)
            ? ei(e.name.toLowerCase(), t)
            : (null != t && t.id === G.Jk && e.application_id === G.$z) ||
              (null != e.application_id && es(e.application_id, t)))
    );
}
function eo(e, t) {
    for (let [n, r] of e) if (ea(t, r) && !eu(r)) return r;
}
function es(e, t) {
    let n = $(t);
    return null != n && n.some((t) => t === e);
}
function el(e, t) {
    let n;
    for (let [r, i] of e)
        if (es(t, i) && !eu(i)) {
            n = i;
            break;
        }
    return n;
}
function ec(e, t, n) {
    var r;
    let i = Array.isArray(t) ? new Map(t.map((e) => [e.id, e])) : t,
        a = Array.isArray(n) ? new Map(n.map((e) => [e.id, e])) : n,
        o = i.get(e);
    if (null != o) return o;
    let s = null == (r = a.get(e)) ? void 0 : r.replacementId;
    if (null != s) return i.get(s);
}
function eu(e) {
    return new Date(e.config.expiresAt).valueOf() <= Date.now();
}
function ed(e) {
    if (!eu(e)) return !1;
    let t = Date.now() - K,
        n = new Date(e.config.expiresAt).valueOf();
    return null != e.config.expiresAt && !(n <= t);
}
function ef(e) {
    let t = null,
        n = Date.now();
    for (let r of e) {
        let e = new Date(r.config.expiresAt).valueOf();
        !(e <= n) && (null == t || e < t) && (t = e);
    }
    return t;
}
function e_(e) {
    return (0, a.EQ)(e)
        .with({ config_version: 2 }, (e) => (0, U.Q)(e))
        .exhaustive();
}
function ep(e) {
    return null == e
        ? null
        : {
              lastBeatAt: e.last_beat_at,
              expiresAt: e.expires_at,
          };
}
function eh(e) {
    let t = {};
    for (let [n, r] of Object.entries(e))
        t[n] = {
            eventName: r.event_name,
            value: r.value,
            updatedAt: r.updated_at,
            completedAt: r.completed_at,
            heartbeat: ep(r.heartbeat),
        };
    return t;
}
function em(e) {
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
        progress: eh(e.progress),
    };
}
function eg(e) {
    return {
        id: e.id,
        preview: e.preview,
        config: e_(e.config),
        userStatus: null == e.user_status ? null : em(e.user_status),
        targetedContent: e.targeted_content,
    };
}
function eE(e) {
    return {
        id: e.id,
        replacementId: e.replacement_id,
    };
}
function eb(e) {
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
function ey(e) {
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
        rewards: e.rewards.map(eb),
        cosponsorMetadata: (0, U.s)(e.cosponsor_metadata),
    };
}
function eO(e) {
    return {
        id: e.id,
        config: ey(e.config),
        userStatus: null == e.user_status ? null : em(e.user_status),
    };
}
function ev(e) {
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
function eI(e) {
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
                        rewardCode: ev(t.reward.reward_code),
                    },
                },
            };
    }
}
function eT(e) {
    return {
        skuId: e.sku_id,
        tenantMetadata: eI(e.tenant_metadata),
        consumed: e.consumed,
    };
}
function eS(e) {
    return {
        claimedAt: e.claimed_at,
        items: e.entitlements.map(eT),
        errors: e.errors,
    };
}
function eA(e) {
    return {
        eventName: e.event_name,
        title: e.title,
        description: e.description,
        target: e.target,
    };
}
let eC = (e) => "".concat(location.protocol, "//").concat(location.host, "/quests/").concat(e);
function eN(e, t, n) {
    let r = t.get(n);
    if (null == r) return;
    let i = e.get(r.quest.id);
    if (null != i && !eu(i)) return i;
}
let eR = (e) => {
    switch (e) {
        case x.y$.XBOX:
            return F.intl.string(F.t.G84UWZ);
        case x.y$.PLAYSTATION:
            return F.intl.string(F.t["6IeKx2"]);
        case x.y$.SWITCH:
            return F.intl.string(F.t["1pp0su"]);
        case x.y$.PC:
            return F.intl.string(F.t["YK+wUg"]);
        case x.y$.CROSS_PLATFORM:
            return F.intl.string(F.t.UWVbzV);
    }
};
function eP(e) {
    var t, n;
    let { quest: r, taskDetails: i, thirdPartyTaskDetails: a } = e;
    if ((null == (t = r.userStatus) ? void 0 : t.completedAt) != null) return F.intl.string(F.t.BzFeTF);
    if ((null == (n = r.userStatus) ? void 0 : n.enrolledAt) != null) {
        let { percentComplete: e } = i,
            t = null != a ? a.percentComplete : e;
        return t >= 0.75
            ? F.intl.string(F.t.gvCR4H)
            : t >= 0.45 && t <= 0.55
              ? F.intl.string(F.t.JNx8sG)
              : t > 0
                ? F.intl.string(F.t.JMbfnc)
                : F.intl.string(F.t["7e5k7L"]);
    }
    return F.intl.formatToPlainString(F.t.EQa7os, { questName: r.config.messages.questName });
}
function eD(e) {
    return Object.keys(G.a_).includes(x.jn[e]);
}
function ew(e, t) {
    if (!eD(t)) return !1;
    let n = x.jn[t];
    return (0, f.yE)(e.dismissedQuestContent, G.a_[n]);
}
function eL(e) {
    let t = e.rewardsConfig.rewards.find((e) => e.type === c.w.COLLECTIBLE);
    return (null == t ? void 0 : t.type) === c.w.COLLECTIBLE ? t : null;
}
function ex(e) {
    let t = eL(e);
    return null != t && "expiresAtPremium" in t && null != t.expiresAtPremium ? tP(t.expiresAtPremium) : null;
}
function eM(e) {
    let t = eL(e);
    if (null == t || !("expiresAt" in t) || null == t.expiresAt) return null;
    let n = new Date(e.expiresAt),
        i = new Date(t.expiresAt),
        a = (0, r.Z)(i, n),
        o = Math.floor(a / 30) + +(a % 30 >= 25);
    if (o >= 12) {
        let e = Math.floor(o / 12);
        return F.intl.formatToPlainString(F.t.PClsrw, { years: e });
    }
    {
        if (o > 0) return F.intl.formatToPlainString(F.t.kridzK, { months: o });
        let e = (0, r.Z)(i, n);
        if (!(e >= 7)) return F.intl.formatToPlainString(F.t["k2UNz+"], { days: e });
        {
            let t = Math.ceil(e / 7);
            return F.intl.formatToPlainString(F.t.EmoBD2, { weeks: t });
        }
    }
}
function ek(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === c.w.FRACTIONAL_PREMIUM);
}
function ej(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === c.w.VIRTUAL_CURRENCY);
}
function eU(e) {
    return null != eL(e);
}
function eG(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === c.w.IN_GAME);
}
function eB(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === c.w.REWARD_CODE);
}
function eZ(e) {
    var t;
    return null != (t = e.rewardsConfig.rewards.find((e) => e.type === c.w.IN_GAME)) ? t : null;
}
function eF(e) {
    let t = e.rewardsConfig.rewards.find((e) => e.type === c.w.VIRTUAL_CURRENCY);
    return null == t ? void 0 : t.orbQuantity;
}
function eV(e, t) {
    return e.targetedContent.includes(t);
}
function eH(e, t) {
    P.Z.captureException(e, W(H({}, t), { tags: W(H({}, null == t ? void 0 : t.tags), { app_context: "quests" }) }));
}
function eY(e, t) {
    if (null == t || null == e) return null;
    for (let n of t) {
        let t = eo(e, n);
        if (null != t) return t;
    }
    return null;
}
function eW(e) {
    let {
            quest: { config: t },
        } = e,
        n = t.rewardsConfig;
    return (
        n.assignmentMethod === s.j.TIERED && n.rewards.length > 0 && n.rewards.every((e) => e.type === c.w.REWARD_CODE)
    );
}
function eK(e) {
    return null != e.taskConfigV2.tasks[o.X.PLAY_ON_DESKTOP];
}
function ez(e) {
    let { quest: t } = e;
    return eK(t.config);
}
function eq(e) {
    let { quest: t } = e;
    return null != t.config.taskConfigV2.tasks[o.X.STREAM_ON_DESKTOP];
}
function eX(e) {
    return null != e.config.taskConfigV2.tasks[o.X.PLAY_ACTIVITY];
}
function eQ(e) {
    return null != e && ez({ quest: e });
}
function eJ(e) {
    if (!(0, k.CD)("QuestUtils") || null == e) return !1;
    let t = ee(e);
    return null != t && t.length > 1;
}
function e$(e) {
    return en(e) === G.Ts;
}
function e0(e, t) {
    return new Set(e.config.features).has(t);
}
function e1(e) {
    let { quest: t, idx: n } = e;
    if (null == n) return null;
    let r = t.config.rewardsConfig.rewards[n];
    return r.type === c.w.REWARD_CODE ? r : null;
}
function e3(e) {
    var t, n;
    let r = e.config.ctaConfig;
    return null == r
        ? null
        : ((0, R.isIOS)() || "ios" === (0, R.getOS)()) && (null == (t = r.ios) ? void 0 : t.iosAppId) != null
          ? "https://apps.apple.com/app/id".concat(r.ios.iosAppId)
          : ((0, R.isAndroid)() || "android" === (0, R.getOS)()) &&
              (null == (n = r.android) ? void 0 : n.androidAppId) != null
            ? "https://play.google.com/store/apps/details?id=".concat(r.android.androidAppId)
            : null;
}
function e2(e) {
    var t, n;
    return null != (n = null == (t = e.ctaConfig) ? void 0 : t.link) ? n : e.application.link;
}
function e4(e, t) {
    let n = e2(e.config),
        r = e3(e);
    null != r && (n = r),
        (0, w._3)({
            questId: e.id,
            questContent: t.content,
            questContentCTA: t.ctaContent,
            questContentPosition: t.position,
            impressionId: t.impressionId,
            sourceQuestContent: t.sourceQuestContent,
        }),
        A.S.dispatch(B.CkL.QUEST_GAME_LINK_OPENED),
        (0, p.Z)(n);
}
let e5 = (e, t) => {
    (0, w._3)({
        questId: e,
        questContent: t.content,
        questContentCTA: t.ctaContent,
        questContentPosition: t.position,
        impressionId: t.impressionId,
        sourceQuestContent: t.sourceQuestContent,
    }),
        (0, S.JG)(eC(e));
};
function e8(e) {
    return (null == e ? void 0 : e.type) === o.X.PLAY_ON_DESKTOP;
}
let e6 = (e, t) => (e > 0 ? (0, i.floor)(Math.min(t / e, 1), 4) : 0),
    e7 = (e) => tI(e) || L.Z.isProgressingOnDesktop(e.id),
    e9 = (e, t) => {
        var n, r, a, o;
        let s =
            null == (o = e.userStatus) ||
            null == (a = o.progress) ||
            null == (r = a[t.type]) ||
            null == (n = r.heartbeat)
                ? void 0
                : n.lastBeatAt;
        if (null == s || !e7(e)) return 0;
        let l = Date.now() - new Date(s).valueOf();
        return (0, i.floor)(l / C.Z.Millis.SECOND, 2);
    },
    te = (e, t) => {
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
        if (tg(e)) {
            let n = L.Z.getOptimisticProgress(e.id, t.type);
            return null == n || n < l ? l : n;
        }
        return l + e9(e, t);
    },
    tt = 0.99,
    tn = (e, t) => {
        var n;
        let r = t.target;
        if ((null == (n = e.userStatus) ? void 0 : n.completedAt) != null) return r;
        let a = Math.min(r * tt, te(e, t));
        return Math.max((0, i.floor)(a, 2), 0);
    },
    tr = (e) => {
        var t, n, r;
        let { quest: i, taskType: a, includeTaskTypes: s = o.T.ALL } = e,
            l = i.config.taskConfigV2,
            c = null != a ? a : null == (t = Object.values(l.tasks).filter((e) => s.has(e.type))[0]) ? void 0 : t.type,
            u = null != (r = l.tasks[c]) ? r : l.tasks[o.X.STREAM_ON_DESKTOP];
        if (null == u) throw Error("No task with type ".concat(a, " found for quest ").concat(i.id, "!"));
        let d = u.target,
            f = tn(i, u),
            _ = Object.values(l.tasks).find(e8),
            p = null == _ || null == (n = _.applications) ? void 0 : n.map((e) => e.id);
        return {
            progressSeconds: f,
            targetSeconds: d,
            targetMinutes: Math.ceil(d / C.Z.Seconds.MINUTE),
            percentComplete: e6(d, f),
            taskType: c,
            applications: p,
        };
    },
    ti = (e) => (o.T.ALL.has(e) ? e : null),
    ta = (e) => {
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
            .filter(N.lm)) {
            let t = ti(e.eventName);
            if (null != t && (null == i ? void 0 : i.has(t)))
                return tr({
                    quest: r,
                    taskType: t,
                    includeTaskTypes: i,
                });
        }
        return tr({
            quest: r,
            includeTaskTypes: i,
        });
    },
    to = (e, t) => {
        if (tu(e))
            return {
                progressSeconds: 0,
                targetSeconds: 1,
                targetMinutes: 1,
                percentComplete: 0,
                taskType: o.X.STREAM_ON_DESKTOP,
            };
        if (tm(e))
            return ta({
                quest: e,
                includeTaskTypes: null != t ? t : tI(e) ? o.T.CONSOLE : o.T.ALL,
            });
        if (tg(e))
            if (tb(e))
                return tr({
                    quest: e,
                    taskType: o.X.WATCH_VIDEO_ON_MOBILE,
                });
            else
                return tr({
                    quest: e,
                    taskType: o.X.WATCH_VIDEO,
                });
        return eQ(e)
            ? tr({
                  quest: e,
                  taskType: o.X.PLAY_ON_DESKTOP,
              })
            : eX(e)
              ? tr({
                    quest: e,
                    taskType: o.X.PLAY_ACTIVITY,
                })
              : tr({
                    quest: e,
                    taskType: o.X.STREAM_ON_DESKTOP,
                });
    };
function ts(e) {
    var t;
    let n = e.taskConfigV2.tasks,
        r = n[o.X.ACHIEVEMENT_IN_ACTIVITY],
        i = n[o.X.ACHIEVEMENT_IN_GAME];
    return null != (t = null != r ? r : i) ? t : null;
}
function tl(e) {
    var t, n, r, i;
    let a = ts(e.config);
    if (null == a) return null;
    let o =
            null !=
            (i = null == (r = e.userStatus) || null == (n = r.progress) || null == (t = n[a.type]) ? void 0 : t.value)
                ? i
                : 0,
        s = e6(a.target, o);
    return {
        title: a.messages.taskTitle,
        description: a.messages.taskDescription,
        target: a.target,
        progress: o,
        percentComplete: s,
    };
}
let tc = (e) => (t) => e.some((e) => null != t.config.taskConfigV2.tasks[e]);
function tu(e) {
    return Array.from(o.T.IN_GAME).some((t) => null != e.config.taskConfigV2.tasks[t]);
}
function td(e) {
    return (tu(e) || eX(e)) && e.config.features.includes(G.S7.START_QUEST_CTA);
}
function tf(e) {
    return t_(e.targetSeconds - e.progressSeconds);
}
function t_(e) {
    return {
        minutes: Math.max(0, Math.floor(e / 60)),
        seconds: Math.max(0, Math.floor(e % 60)),
    };
}
function tp(e) {
    let t = tf(e);
    return th(t.minutes, t.seconds);
}
function th(e, t) {
    return "".concat(String(e).padStart(2, "0"), ":").concat(String(t).padStart(2, "0"));
}
let tm = tc([o.X.PLAY_ON_XBOX, o.X.PLAY_ON_PLAYSTATION]),
    tg = tc([o.X.WATCH_VIDEO, o.X.WATCH_VIDEO_ON_MOBILE]),
    tE = tc([o.X.WATCH_VIDEO]),
    tb = tc([o.X.WATCH_VIDEO_ON_MOBILE]),
    ty = (e) => tb(e) && !tE(e);
function tO(e) {
    return tm(e);
}
let tv = (e, t) => {
    var n, r;
    let i = null == e || null == (r = e.progress[t]) || null == (n = r.heartbeat) ? void 0 : n.expiresAt;
    if (null == i) return !1;
    let a = new Date(i).valueOf();
    return !isNaN(a) && a > Date.now();
};
function tI(e) {
    return null != e.userStatus && (tv(e.userStatus, o.X.PLAY_ON_XBOX) || tv(e.userStatus, o.X.PLAY_ON_PLAYSTATION));
}
function tT(e) {
    return !!tg(e) && (0, n(952265).nf)(tG(e.id));
}
function tS() {
    {
        let { openUserSettings: e } = n(518596);
        e(y.n.CONNECTIONS_PANEL, { section: B.oAB.CONNECTIONS });
    }
}
function tA(e, t) {
    let { platformType: n, quest: r } = e;
    (0, w._3)({
        questId: r.id,
        questContent: t.content,
        sourceQuestContent: t.sourceQuestContent,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId,
    }),
        (0, m.Z)({
            platformType: n,
            location: t.ctaContent,
        });
}
function tC(e, t) {
    let { quest: n } = e;
    (0, w._3)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentRowIndex: t.rowIndex,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId,
        sourceQuestContent: t.sourceQuestContent,
    });
    let r = tU(n);
    if (1 === r.length) return (0, m.Z)({ platformType: r.at(0) });
    _.Z.dispatch({
        type: "CONNECTIONS_GRID_MODAL_SHOW",
        onComplete: (e) => (0, m.Z)({ platformType: e }),
        includedPlatformTypes: new Set(r),
    });
}
function tN(e, t) {
    let { quest: n } = e;
    (0, w._3)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId,
        sourceQuestContent: t.sourceQuestContent,
    }),
        tS();
}
function tR() {
    return window.location.pathname.startsWith(B.Z5c.QUEST_HOME);
}
function tP(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" };
    return null == e ? "" : new Date(e).toLocaleDateString(b.default.locale, t);
}
function tD(e) {
    return "xbox" === e.connected_account_type ? B.ABu.XBOX : B.ABu.PLAYSTATION;
}
function tw(e) {
    return tD(e) === B.ABu.XBOX ? F.t["mytEv+"] : F.t.iDiwby;
}
function tL(e) {
    var t, n, r, i;
    let { quest: a, rewardCode: o, selectedPlatformType: s } = e,
        l = eW({ quest: a }),
        c = null != s ? s : null == o ? void 0 : o.platform,
        u = l
            ? e1({
                  quest: a,
                  idx:
                      null != (r = null == o ? void 0 : o.tier)
                          ? r
                          : null == (t = a.userStatus)
                            ? void 0
                            : t.claimedTier,
              })
            : null,
        d = nt(a.config),
        f =
            null != (i = null == u || null == (n = u.messages) ? void 0 : n.redemptionInstructionsByPlatform)
                ? i
                : d.messages.redemptionInstructionsByPlatform;
    return null != c ? f[c] : void 0;
}
function tx(e) {
    let { isTargetedDisclosure: t, gamePublisher: n, gameTitle: r, cosponsorName: i } = e;
    return t
        ? null == i
            ? F.intl.formatToPlainString(F.t.Piihy1, { gamePublisher: n })
            : F.intl.formatToPlainString(F.t.DV47Gy, {
                  gamePublisher: n,
                  cosponsorName: i,
              })
        : F.intl.formatToPlainString(F.t.euizJY, {
              gamePublisher: n,
              gameTitle: r,
          });
}
function tM(e) {
    let t = ez({ quest: e }) || eq({ quest: e }),
        n = tm(e),
        r = [];
    return t && r.push(G.cd.DESKTOP), n && r.push(G.cd.CONSOLE), r;
}
function tk(e) {
    var t;
    let n = null == (t = eL(e)) ? void 0 : t.expirationMode;
    return null != n && z.has(n);
}
function tj(e) {
    var t;
    return tk(e) && (null == (t = eL(e)) ? void 0 : t.expirationMode) === l.n.PREMIUM_PERMANENT;
}
function tU(e) {
    let t = Object.keys(e.config.taskConfigV2.tasks),
        n = [];
    for (let e of t)
        switch (e) {
            case o.X.PLAY_ON_XBOX:
                n.push(B.ABu.XBOX);
                break;
            case o.X.PLAY_ON_PLAYSTATION:
                n.push(B.ABu.PLAYSTATION);
        }
    return n;
}
function tG(e) {
    return "VIDEO-QUEST-".concat(e);
}
function tB(e) {
    let t = tg(e),
        n = eX(e);
    return t || n;
}
function tZ(e, t) {
    var n, r;
    eu(e) ||
        (null == (n = e.userStatus) ? void 0 : n.enrolledAt) == null ||
        (null == (r = e.userStatus) ? void 0 : r.completedAt) != null ||
        (0, D.cT)(e.id, t);
}
function tF(e) {
    return {
        [x.jn.QUEST_BAR]: x.Ok.DESKTOP_ACCOUNT_PANEL_AREA,
        [x.jn.QUEST_BAR_V2]: x.Ok.DESKTOP_ACCOUNT_PANEL_AREA,
        [x.jn.QUEST_BAR_MOBILE]: x.Ok.MOBILE_HOME_DOCK_AREA,
    }[e];
}
function tV(e) {
    let t = tF(e);
    return null != t && G.v6.has(t);
}
let tH = "landscape";
function tY(e) {
    let t = e.assets.video;
    return null == t || null == t.width || null == t.height ? tH : t.width > t.height ? "landscape" : "portrait";
}
let tW = (e) =>
    e.percentComplete > 0
        ? F.intl.formatToPlainString(F.t["c59/Tp"], { remainTime: tp(e) })
        : F.intl.formatToPlainString(F.t.GNsKiW, { remainTime: tp(e) });
function tK(e, t) {
    return e <= 0 || t <= 0 ? 0 : e >= t ? 1 : Math.min(1, Math.round((e / t) * 100) / 100);
}
function tz(e) {
    var t;
    let n = e.taskConfigV2.tasks[o.X.WATCH_VIDEO],
        r = e.taskConfigV2.tasks[o.X.WATCH_VIDEO_ON_MOBILE];
    return null != n && null != r ? n : null != (t = null != r ? r : n) ? t : null;
}
function tq(e) {
    var t, n, r, i;
    let a = tz(e);
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
        : F.intl.string(F.t.iiTtpJ);
}
function tX(e, t) {
    var n;
    let { quest: r, adDecisionData: i } = null != (n = L.Z.questToDeliverForPlacement.get(tF(t))) ? n : {};
    return null != i && (null == r ? void 0 : r.id) === e ? i : G.Jp;
}
function tQ(e) {
    var t;
    let { metadataRaw: n } = null != (t = L.Z.questToDeliverForPlacement.get(tF(e))) ? t : {};
    return n;
}
function tJ(e) {
    var t;
    let { adContext: n } = null != (t = L.Z.questToDeliverForPlacement.get(tF(e))) ? t : {};
    return n;
}
function t$(e) {
    var t, n;
    let r = null != (n = null == (t = e.userStatus) ? void 0 : t.claimedTier) ? n : 0;
    return "rewardsConfig" in e.config ? e.config.rewardsConfig.rewards[r] : e.config.rewards[r];
}
function t0(e) {
    return new Set(Object.keys(e.config.taskConfigV2.tasks));
}
function t1(e, t) {
    let n = new Map();
    for (let [r, i] of e)
        if (!(eJ(i) || e0(i, G.S7.NON_GAMING_PLAY_QUEST))) {
            for (let e of t0(i))
                if (t.has(e)) {
                    n.set(r, i);
                    break;
                }
        }
    return n;
}
function t3(e) {
    var t, n;
    let { questId: r, sourceQuestContent: i, videoSessionId: a } = e,
        o = M.ZP.getState().getVideoProgress(r);
    if (null == o) return;
    let s = L.Z.getQuest(r);
    null != s &&
        (null == (t = s.userStatus) ? void 0 : t.enrolledAt) != null &&
        (null == (n = s.userStatus) ? void 0 : n.completedAt) == null &&
        tZ(s, o.maxTimestampSec);
    let l = tK(o.maxTimestampSec, o.duration);
    (0, w.dA)({
        questId: r,
        event: B.rMx.QUEST_VIDEO_PROGRESSED,
        properties: {
            progress: l,
            video_timestamp_seconds: o.maxTimestampSec,
            video_session_id: a,
        },
        sourceQuestContent: i,
    }),
        (0, w.dA)({
            questId: r,
            event: B.rMx.QUEST_VIDEO_MODAL_CLOSED,
            properties: {
                video_progress: l,
                video_session_id: a,
                network_connection_speed: v.Z.getEffectiveConnectionSpeed(),
            },
            sourceQuestContent: i,
        });
}
function t2(e) {
    return e.sharePolicy !== u.X.NOT_SHAREABLE;
}
function t4(e, t) {
    return null != e && null != t && (0, E.p9)(t, T.Z, O.Z, I.Z, g.default)[0];
}
function t5(e) {
    switch (e) {
        case G.yq.SUGGESTED:
            return F.intl.string(F.t.gBfXPZ);
        case G.yq.MOST_RECENT:
            return F.intl.string(F.t.K6oEu2);
        case G.yq.EXPIRING_SOON:
            return F.intl.string(F.t.IB22n3);
        case G.yq.RECENTLY_ENROLLED:
            return F.intl.string(F.t["BB+2tX"]);
    }
}
function t8(e) {
    switch (e) {
        case G.UP.VIRTUAL_CURRENCY:
            return F.intl.string(F.t.ElYQFS);
        case G.UP.COLLECTIBLE:
            return F.intl.string(F.t.Jg17Ut);
        case G.UP.IN_GAME:
            return F.intl.string(F.t["O/J2kr"]);
        case G.oH.VIDEO:
            return F.intl.string(F.t.e0iISA);
        case G.oH.PLAY:
            return F.intl.string(F.t["1nJR4p"]);
    }
}
function t6(e) {
    switch (e) {
        case "reward":
            return F.intl.string(F.t.vjLqAU);
        case "task":
            return F.intl.string(F.t.Hufmss);
    }
}
function t7(e, t) {
    if (ek(e)) return (0, j.o8)(e);
    let n = nt(e);
    return t ? n.messages.nameWithArticle : n.messages.name;
}
function t9(e) {
    return t7(e, !1);
}
function ne(e) {
    return t7(e, !0);
}
function nt(e) {
    if (0 === e.rewardsConfig.rewards.length) throw Error("Quest ".concat(e.id, " has no rewards configured"));
    return e.rewardsConfig.rewards[0];
}
function nn(e) {
    let t = e.rewardsConfig.platforms;
    return t.length > 0 ? t[0] : x.y$.CROSS_PLATFORM;
}
function nr(e) {
    return tg({ config: e }) ? d.W.VIDEO : d.W.GAMEPLAY;
}
