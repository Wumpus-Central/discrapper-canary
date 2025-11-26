n.d(t, {
    $H: () => eJ,
    $J: () => tv,
    $V: () => tP,
    AV: () => eD,
    B3: () => nt,
    BI: () => ni,
    BM: () => tS,
    Bg: () => ej,
    Bz: () => tT,
    C1: () => tx,
    DR: () => ei,
    Dr: () => eX,
    F9: () => tK,
    FI: () => tF,
    FX: () => eM,
    Fs: () => tM,
    GN: () => ew,
    Gd: () => tZ,
    Gs: () => et,
    HJ: () => tO,
    Jg: () => eY,
    K: () => eF,
    KM: () => e0,
    Kr: () => ek,
    LM: () => eV,
    MC: () => $,
    Mo: () => en,
    NI: () => t3,
    NL: () => t8,
    Nj: () => eq,
    Nt: () => t6,
    PB: () => tb,
    PM: () => eR,
    Pb: () => e$,
    Qe: () => q,
    Qr: () => eb,
    Rc: () => t5,
    Rt: () => tf,
    T2: () => t7,
    Th: () => t2,
    U3: () => eg,
    UE: () => e_,
    Uy: () => tL,
    V$: () => tR,
    VB: () => tH,
    V_: () => tX,
    Vl: () => td,
    WP: () => eE,
    Xh: () => eA,
    Xv: () => eG,
    ZS: () => tY,
    ZZ: () => es,
    Zp: () => tV,
    _4: () => tG,
    _D: () => eo,
    _j: () => tw,
    _p: () => tU,
    _x: () => eu,
    b7: () => tc,
    bA: () => tz,
    f$: () => tj,
    f2: () => e8,
    fY: () => tC,
    gI: () => tN,
    hF: () => t0,
    hQ: () => ev,
    iQ: () => ef,
    il: () => ts,
    jY: () => tJ,
    lQ: () => ec,
    nY: () => er,
    nc: () => e5,
    o9: () => e3,
    oo: () => eK,
    pO: () => eQ,
    q6: () => ep,
    q8: () => tE,
    qe: () => tQ,
    t2: () => eP,
    t6: () => nl,
    u7: () => tB,
    uN: () => t$,
    vB: () => t4,
    vQ: () => eB,
    vR: () => eH,
    vj: () => ee,
    w8: () => ne,
    wj: () => eZ,
    xN: () => eU,
    xn: () => ex,
    yH: () => tk,
    yI: () => eI,
    ys: () => eW,
    z1: () => tq,
    zE: () => eL,
    zG: () => nr,
    zi: () => ed,
    zo: () => e4,
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
    L = n(616022),
    x = n(49436),
    M = n(184299),
    k = n(937797),
    j = n(502288),
    U = n(312046),
    G = n(324805),
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
function W(e, t) {
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
            : W(Object(t)).forEach(function (n) {
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
    let t = J(e, [o.X.PLAY_ACTIVITY, o.X.ACHIEVEMENT_IN_ACTIVITY]);
    return null == t ? void 0 : t[0];
}
function ei(e) {
    let t = J(e, [o.X.STREAM_ON_DESKTOP]);
    return null == t ? void 0 : t[0];
}
function ea(e, t) {
    let n = et(t);
    if (null == n) return !1;
    let r = h.Z.getApplication(n);
    return null != r && e === r.name.toLowerCase();
}
function eo(e, t) {
    return (
        null != e &&
        (X(e) || Q(e)
            ? ea(e.name.toLowerCase(), t)
            : (null != t && t.id === G.Jk && e.application_id === G.$z) ||
              (null != e.application_id && el(e.application_id, t)))
    );
}
function es(e, t) {
    for (let [n, r] of e) if (eo(t, r) && !ed(r)) return r;
}
function el(e, t) {
    let n = $(t);
    return null != n && n.some((t) => t === e);
}
function ec(e, t) {
    let n;
    for (let [r, i] of e)
        if (el(t, i) && !ed(i)) {
            n = i;
            break;
        }
    return n;
}
function eu(e, t, n) {
    var r;
    let i = Array.isArray(t) ? new Map(t.map((e) => [e.id, e])) : t,
        a = Array.isArray(n) ? new Map(n.map((e) => [e.id, e])) : n,
        o = i.get(e);
    if (null != o) return o;
    let s = null == (r = a.get(e)) ? void 0 : r.replacementId;
    if (null != s) return i.get(s);
}
function ed(e) {
    return new Date(e.config.expiresAt).valueOf() <= Date.now();
}
function ef(e) {
    if (!ed(e)) return !1;
    let t = Date.now() - K,
        n = new Date(e.config.expiresAt).valueOf();
    return null != e.config.expiresAt && !(n <= t);
}
function e_(e) {
    let t = null,
        n = Date.now();
    for (let r of e) {
        let e = new Date(r.config.expiresAt).valueOf();
        !(e <= n) && (null == t || e < t) && (t = e);
    }
    return t;
}
function ep(e) {
    return (0, a.EQ)(e)
        .with({ config_version: 2 }, (e) => (0, U.Q)(e))
        .exhaustive();
}
function eh(e) {
    return null == e
        ? null
        : {
              lastBeatAt: e.last_beat_at,
              expiresAt: e.expires_at,
          };
}
function em(e) {
    let t = {};
    for (let [n, r] of Object.entries(e))
        t[n] = {
            eventName: r.event_name,
            value: r.value,
            updatedAt: r.updated_at,
            completedAt: r.completed_at,
            heartbeat: eh(r.heartbeat),
        };
    return t;
}
function eg(e) {
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
        progress: em(e.progress),
    };
}
function eE(e) {
    return {
        id: e.id,
        preview: e.preview,
        config: ep(e.config),
        userStatus: null == e.user_status ? null : eg(e.user_status),
        targetedContent: e.targeted_content,
    };
}
function eb(e) {
    return {
        id: e.id,
        replacementId: e.replacement_id,
    };
}
function ey(e) {
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
function eO(e) {
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
        rewards: e.rewards.map(ey),
        cosponsorMetadata: (0, U.s)(e.cosponsor_metadata),
    };
}
function ev(e) {
    return {
        id: e.id,
        config: eO(e.config),
        userStatus: null == e.user_status ? null : eg(e.user_status),
    };
}
function eI(e) {
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
function eT(e) {
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
                        rewardCode: eI(t.reward.reward_code),
                    },
                },
            };
    }
}
function eS(e) {
    return {
        skuId: e.sku_id,
        tenantMetadata: eT(e.tenant_metadata),
        consumed: e.consumed,
    };
}
function eA(e) {
    return {
        claimedAt: e.claimed_at,
        items: e.entitlements.map(eS),
        errors: e.errors,
    };
}
function eC(e) {
    return {
        eventName: e.event_name,
        title: e.title,
        description: e.description,
        target: e.target,
    };
}
let eN = (e) => "".concat(location.protocol, "//").concat(location.host, "/quests/").concat(e);
function eR(e, t, n) {
    let r = t.get(n);
    if (null == r) return;
    let i = e.get(r.quest.id);
    if (null != i && !ed(i)) return i;
}
let eP = (e) => {
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
function eD(e) {
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
function ew(e) {
    return Object.keys(G.a_).includes(x.jn[e]);
}
function eL(e, t) {
    if (!ew(t)) return !1;
    let n = x.jn[t];
    return (0, f.yE)(e.dismissedQuestContent, G.a_[n]);
}
function ex(e) {
    let t = e.rewardsConfig.rewards.find((e) => e.type === c.w.COLLECTIBLE);
    return (null == t ? void 0 : t.type) === c.w.COLLECTIBLE ? t : null;
}
function eM(e) {
    let t = ex(e);
    return null != t && "expiresAtPremium" in t && null != t.expiresAtPremium ? tD(t.expiresAtPremium) : null;
}
function ek(e) {
    let t = ex(e);
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
function ej(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === c.w.FRACTIONAL_PREMIUM);
}
function eU(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === c.w.VIRTUAL_CURRENCY);
}
function eG(e) {
    return null != ex(e);
}
function eB(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === c.w.IN_GAME);
}
function eZ(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === c.w.REWARD_CODE);
}
function eF(e) {
    var t;
    return null != (t = e.rewardsConfig.rewards.find((e) => e.type === c.w.IN_GAME)) ? t : null;
}
function eV(e) {
    let t = e.rewardsConfig.rewards.find((e) => e.type === c.w.VIRTUAL_CURRENCY);
    return null == t ? void 0 : t.orbQuantity;
}
function eH(e, t) {
    return e.targetedContent.includes(t);
}
function eW(e, t) {
    P.Z.captureException(e, Y(H({}, t), { tags: Y(H({}, null == t ? void 0 : t.tags), { app_context: "quests" }) }));
}
function eY(e, t) {
    if (null == t || null == e) return null;
    for (let n of t) {
        let t = es(e, n);
        if (null != t) return t;
    }
    return null;
}
function eK(e) {
    let {
            quest: { config: t },
        } = e,
        n = t.rewardsConfig;
    return (
        n.assignmentMethod === s.j.TIERED && n.rewards.length > 0 && n.rewards.every((e) => e.type === c.w.REWARD_CODE)
    );
}
function ez(e) {
    return null != e.taskConfigV2.tasks[o.X.PLAY_ON_DESKTOP];
}
function eq(e) {
    let { quest: t } = e;
    return ez(t.config);
}
function eX(e) {
    let { quest: t } = e;
    return null != t.config.taskConfigV2.tasks[o.X.STREAM_ON_DESKTOP];
}
function eQ(e) {
    return null != e.config.taskConfigV2.tasks[o.X.PLAY_ACTIVITY];
}
function eJ(e) {
    return null != e && eq({ quest: e });
}
function e$(e) {
    if (!(0, k.CD)("QuestUtils") || null == e) return !1;
    let t = ee(e);
    return null != t && t.length > 1;
}
function e0(e) {
    return en(e) === G.Ts;
}
function e1(e, t) {
    return new Set(e.config.features).has(t);
}
function e3(e) {
    let { quest: t, idx: n } = e;
    if (null == n) return null;
    let r = t.config.rewardsConfig.rewards[n];
    return r.type === c.w.REWARD_CODE ? r : null;
}
function e2(e) {
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
function e4(e) {
    return e.ctaConfig.link;
}
function e5(e, t) {
    let n = e4(e.config),
        r = e2(e);
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
let e8 = (e, t) => {
    (0, w._3)({
        questId: e,
        questContent: t.content,
        questContentCTA: t.ctaContent,
        questContentPosition: t.position,
        impressionId: t.impressionId,
        sourceQuestContent: t.sourceQuestContent,
    }),
        (0, S.JG)(eN(e));
};
function e6(e) {
    return (null == e ? void 0 : e.type) === o.X.PLAY_ON_DESKTOP;
}
let e7 = (e, t) => (e > 0 ? (0, i.floor)(Math.min(t / e, 1), 4) : 0),
    e9 = (e) => tT(e) || L.Z.isProgressingOnDesktop(e.id),
    te = (e, t) => {
        var n, r, a, o;
        let s =
            null == (o = e.userStatus) ||
            null == (a = o.progress) ||
            null == (r = a[t.type]) ||
            null == (n = r.heartbeat)
                ? void 0
                : n.lastBeatAt;
        if (null == s || !e9(e)) return 0;
        let l = Date.now() - new Date(s).valueOf();
        return (0, i.floor)(l / C.Z.Millis.SECOND, 2);
    },
    tt = (e, t) => {
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
        if (tE(e)) {
            let n = L.Z.getOptimisticProgress(e.id, t.type);
            return null == n || n < l ? l : n;
        }
        return l + te(e, t);
    },
    tn = 0.99,
    tr = (e, t) => {
        var n;
        let r = t.target;
        if ((null == (n = e.userStatus) ? void 0 : n.completedAt) != null) return r;
        let a = Math.min(r * tn, tt(e, t));
        return Math.max((0, i.floor)(a, 2), 0);
    },
    ti = (e) => {
        var t, n, r;
        let { quest: i, taskType: a, includeTaskTypes: s = o.T.ALL } = e,
            l = i.config.taskConfigV2,
            c = null != a ? a : null == (t = Object.values(l.tasks).filter((e) => s.has(e.type))[0]) ? void 0 : t.type,
            u = null != (r = l.tasks[c]) ? r : l.tasks[o.X.STREAM_ON_DESKTOP];
        if (null == u) throw Error("No task with type ".concat(a, " found for quest ").concat(i.id, "!"));
        let d = u.target,
            f = tr(i, u),
            _ = Object.values(l.tasks).find(e6),
            p = null == _ || null == (n = _.applications) ? void 0 : n.map((e) => e.id);
        return {
            progressSeconds: f,
            targetSeconds: d,
            targetMinutes: Math.ceil(d / C.Z.Seconds.MINUTE),
            percentComplete: e7(d, f),
            taskType: c,
            applications: p,
        };
    },
    ta = (e) => (o.T.ALL.has(e) ? e : null),
    to = (e) => {
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
            let t = ta(e.eventName);
            if (null != t && (null == i ? void 0 : i.has(t)))
                return ti({
                    quest: r,
                    taskType: t,
                    includeTaskTypes: i,
                });
        }
        return ti({
            quest: r,
            includeTaskTypes: i,
        });
    },
    ts = (e, t) => {
        if (td(e))
            return {
                progressSeconds: 0,
                targetSeconds: 1,
                targetMinutes: 1,
                percentComplete: 0,
                taskType: o.X.STREAM_ON_DESKTOP,
            };
        if (tg(e))
            return to({
                quest: e,
                includeTaskTypes: null != t ? t : tT(e) ? o.T.CONSOLE : o.T.ALL,
            });
        if (tE(e))
            if (ty(e))
                return ti({
                    quest: e,
                    taskType: o.X.WATCH_VIDEO_ON_MOBILE,
                });
            else
                return ti({
                    quest: e,
                    taskType: o.X.WATCH_VIDEO,
                });
        return eJ(e)
            ? ti({
                  quest: e,
                  taskType: o.X.PLAY_ON_DESKTOP,
              })
            : eQ(e)
              ? ti({
                    quest: e,
                    taskType: o.X.PLAY_ACTIVITY,
                })
              : ti({
                    quest: e,
                    taskType: o.X.STREAM_ON_DESKTOP,
                });
    };
function tl(e) {
    var t;
    let n = e.taskConfigV2.tasks,
        r = n[o.X.ACHIEVEMENT_IN_ACTIVITY],
        i = n[o.X.ACHIEVEMENT_IN_GAME];
    return null != (t = null != r ? r : i) ? t : null;
}
function tc(e) {
    var t, n, r, i;
    let a = tl(e.config);
    if (null == a) return null;
    let o =
            null !=
            (i = null == (r = e.userStatus) || null == (n = r.progress) || null == (t = n[a.type]) ? void 0 : t.value)
                ? i
                : 0,
        s = e7(a.target, o);
    return {
        title: a.messages.taskTitle,
        description: a.messages.taskDescription,
        target: a.target,
        progress: o,
        percentComplete: s,
    };
}
let tu = (e) => (t) => e.some((e) => null != t.config.taskConfigV2.tasks[e]);
function td(e) {
    return Array.from(o.T.IN_GAME).some((t) => null != e.config.taskConfigV2.tasks[t]);
}
function tf(e) {
    return (td(e) || eQ(e)) && e.config.features.includes(G.S7.START_QUEST_CTA);
}
function t_(e) {
    return tp(e.targetSeconds - e.progressSeconds);
}
function tp(e) {
    return {
        minutes: Math.max(0, Math.floor(e / 60)),
        seconds: Math.max(0, Math.floor(e % 60)),
    };
}
function th(e) {
    let t = t_(e);
    return tm(t.minutes, t.seconds);
}
function tm(e, t) {
    return "".concat(String(e).padStart(2, "0"), ":").concat(String(t).padStart(2, "0"));
}
let tg = tu([o.X.PLAY_ON_XBOX, o.X.PLAY_ON_PLAYSTATION]),
    tE = tu([o.X.WATCH_VIDEO, o.X.WATCH_VIDEO_ON_MOBILE]),
    tb = tu([o.X.WATCH_VIDEO]),
    ty = tu([o.X.WATCH_VIDEO_ON_MOBILE]),
    tO = (e) => ty(e) && !tb(e);
function tv(e) {
    return tg(e);
}
let tI = (e, t) => {
    var n, r;
    let i = null == e || null == (r = e.progress[t]) || null == (n = r.heartbeat) ? void 0 : n.expiresAt;
    if (null == i) return !1;
    let a = new Date(i).valueOf();
    return !isNaN(a) && a > Date.now();
};
function tT(e) {
    return null != e.userStatus && (tI(e.userStatus, o.X.PLAY_ON_XBOX) || tI(e.userStatus, o.X.PLAY_ON_PLAYSTATION));
}
function tS(e) {
    return !!tE(e) && (0, n(952265).nf)(tB(e.id));
}
function tA() {
    {
        let { openUserSettings: e } = n(518596);
        e(y.n.CONNECTIONS_PANEL, { section: B.oAB.CONNECTIONS });
    }
}
function tC(e, t) {
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
function tN(e, t) {
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
    let r = tG(n);
    if (1 === r.length) return (0, m.Z)({ platformType: r.at(0) });
    _.Z.dispatch({
        type: "CONNECTIONS_GRID_MODAL_SHOW",
        onComplete: (e) => (0, m.Z)({ platformType: e }),
        includedPlatformTypes: new Set(r),
    });
}
function tR(e, t) {
    let { quest: n } = e;
    (0, w._3)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId,
        sourceQuestContent: t.sourceQuestContent,
    }),
        tA();
}
function tP() {
    return window.location.pathname.startsWith(B.Z5c.QUEST_HOME);
}
function tD(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" };
    return null == e ? "" : new Date(e).toLocaleDateString(b.default.locale, t);
}
function tw(e) {
    return "xbox" === e.connected_account_type ? B.ABu.XBOX : B.ABu.PLAYSTATION;
}
function tL(e) {
    return tw(e) === B.ABu.XBOX ? F.t["mytEv+"] : F.t.iDiwby;
}
function tx(e) {
    var t, n, r, i;
    let { quest: a, rewardCode: o, selectedPlatformType: s } = e,
        l = eK({ quest: a }),
        c = null != s ? s : null == o ? void 0 : o.platform,
        u = l
            ? e3({
                  quest: a,
                  idx:
                      null != (r = null == o ? void 0 : o.tier)
                          ? r
                          : null == (t = a.userStatus)
                            ? void 0
                            : t.claimedTier,
              })
            : null,
        d = nn(a.config),
        f =
            null != (i = null == u || null == (n = u.messages) ? void 0 : n.redemptionInstructionsByPlatform)
                ? i
                : d.messages.redemptionInstructionsByPlatform;
    return null != c ? f[c] : void 0;
}
function tM(e) {
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
function tk(e) {
    let t = eq({ quest: e }) || eX({ quest: e }),
        n = tg(e),
        r = [];
    return t && r.push(G.cd.DESKTOP), n && r.push(G.cd.CONSOLE), r;
}
function tj(e) {
    var t;
    let n = null == (t = ex(e)) ? void 0 : t.expirationMode;
    return null != n && z.has(n);
}
function tU(e) {
    var t;
    return tj(e) && (null == (t = ex(e)) ? void 0 : t.expirationMode) === l.n.PREMIUM_PERMANENT;
}
function tG(e) {
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
function tB(e) {
    return "VIDEO-QUEST-".concat(e);
}
function tZ(e) {
    let t = tE(e),
        n = eQ(e);
    return t || n;
}
function tF(e, t) {
    var n, r;
    ed(e) ||
        (null == (n = e.userStatus) ? void 0 : n.enrolledAt) == null ||
        (null == (r = e.userStatus) ? void 0 : r.completedAt) != null ||
        (0, D.cT)(e.id, t);
}
function tV(e) {
    return {
        [x.jn.QUEST_BAR]: x.Ok.DESKTOP_ACCOUNT_PANEL_AREA,
        [x.jn.QUEST_BAR_V2]: x.Ok.DESKTOP_ACCOUNT_PANEL_AREA,
        [x.jn.QUEST_BAR_MOBILE]: x.Ok.MOBILE_HOME_DOCK_AREA,
    }[e];
}
function tH(e) {
    let t = tV(e);
    return null != t && G.v6.has(t);
}
let tW = "landscape";
function tY(e) {
    let t = e.assets.video;
    return null == t || null == t.width || null == t.height ? tW : t.width > t.height ? "landscape" : "portrait";
}
let tK = (e) =>
    e.percentComplete > 0
        ? F.intl.formatToPlainString(F.t["c59/Tp"], { remainTime: th(e) })
        : F.intl.formatToPlainString(F.t.GNsKiW, { remainTime: th(e) });
function tz(e, t) {
    return e <= 0 || t <= 0 ? 0 : e >= t ? 1 : Math.min(1, Math.round((e / t) * 100) / 100);
}
function tq(e) {
    var t;
    let n = e.taskConfigV2.tasks[o.X.WATCH_VIDEO],
        r = e.taskConfigV2.tasks[o.X.WATCH_VIDEO_ON_MOBILE];
    return null != n && null != r ? n : null != (t = null != r ? r : n) ? t : null;
}
function tX(e) {
    return e.ctaConfig.buttonLabel;
}
function tQ(e, t) {
    var n;
    let { quest: r, adDecisionData: i } = null != (n = L.Z.questToDeliverForPlacement.get(tV(t))) ? n : {};
    return null != i && (null == r ? void 0 : r.id) === e ? i : G.Jp;
}
function tJ(e) {
    var t;
    let { metadataRaw: n } = null != (t = L.Z.questToDeliverForPlacement.get(tV(e))) ? t : {};
    return n;
}
function t$(e) {
    var t;
    let { adContext: n } = null != (t = L.Z.questToDeliverForPlacement.get(tV(e))) ? t : {};
    return n;
}
function t0(e) {
    var t, n;
    let r = null != (n = null == (t = e.userStatus) ? void 0 : t.claimedTier) ? n : 0;
    return "rewardsConfig" in e.config ? e.config.rewardsConfig.rewards[r] : e.config.rewards[r];
}
function t1(e) {
    return new Set(Object.keys(e.config.taskConfigV2.tasks));
}
function t3(e, t) {
    let n = new Map();
    for (let [r, i] of e)
        if (!(e$(i) || e1(i, G.S7.NON_GAMING_PLAY_QUEST))) {
            for (let e of t1(i))
                if (t.has(e)) {
                    n.set(r, i);
                    break;
                }
        }
    return n;
}
function t2(e) {
    var t, n;
    let { questId: r, sourceQuestContent: i, videoSessionId: a } = e,
        o = M.ZP.getState().getVideoProgress(r);
    if (null == o) return;
    let s = L.Z.getQuest(r);
    null != s &&
        (null == (t = s.userStatus) ? void 0 : t.enrolledAt) != null &&
        (null == (n = s.userStatus) ? void 0 : n.completedAt) == null &&
        tF(s, o.maxTimestampSec);
    let l = tz(o.maxTimestampSec, o.duration);
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
function t4(e) {
    return e.sharePolicy !== u.X.NOT_SHAREABLE;
}
function t5(e, t) {
    return null != e && null != t && (0, E.p9)(t, T.Z, O.Z, I.Z, g.default)[0];
}
function t8(e) {
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
function t6(e) {
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
function t7(e) {
    switch (e) {
        case "reward":
            return F.intl.string(F.t.vjLqAU);
        case "task":
            return F.intl.string(F.t.Hufmss);
    }
}
function t9(e, t) {
    if (ej(e)) return (0, j.o8)(e);
    let n = nn(e);
    return t ? n.messages.nameWithArticle : n.messages.name;
}
function ne(e) {
    return t9(e, !1);
}
function nt(e) {
    return t9(e, !0);
}
function nn(e) {
    if (0 === e.rewardsConfig.rewards.length) throw Error("Quest ".concat(e.id, " has no rewards configured"));
    return e.rewardsConfig.rewards[0];
}
function nr(e) {
    let t = e.rewardsConfig.platforms;
    return t.length > 0 ? t[0] : x.y$.CROSS_PLATFORM;
}
function ni(e) {
    return tE({ config: e }) ? d.W.VIDEO : d.W.GAMEPLAY;
}
function na(e) {
    return {
        altText: e.alt_text,
        assetType: e.asset_type,
        url: e.url,
    };
}
function no(e) {
    return {
        ctaType: e.cta_type,
        title: e.title,
        url: e.url,
    };
}
function ns(e) {
    return {
        ctaType: e.cta_type,
        title: e.title,
        questId: e.quest_id,
    };
}
function nl(e) {
    if (1 !== e.version || !(x.rO.QUEST_HOME_BANNER in e.placements)) return null;
    let t = e.placements[x.rO.QUEST_HOME_BANNER];
    return null == t
        ? null
        : {
              placementType: x.rO.QUEST_HOME_BANNER,
              campaignId: t.campaign_id,
              labelTitle: t.label_title,
              labelSubtitle: t.label_subtitle,
              assetHeroImage: na(t.asset_hero_image),
              assetSponsorImage: na(t.asset_sponsor_image),
              ctaSponsorUrl: no(t.cta_sponsor_url),
              ctaQuests: t.cta_quests.map(ns),
              startsAt: t.starts_at,
              expiresAt: t.expires_at,
          };
}
