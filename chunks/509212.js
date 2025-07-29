(n.d(t, {
    $H: () => eP,
    $J: () => e4,
    AV: () => eu,
    B2: () => tO,
    B3: () => td,
    BM: () => e8,
    Bg: () => em,
    Bz: () => e6,
    C1: () => to,
    C9: () => ta,
    Dr: () => eC,
    F9: () => tb,
    FI: () => tp,
    FX: () => ep,
    Fs: () => ts,
    GN: () => ed,
    Gd: () => tf,
    HJ: () => e3,
    Jg: () => eT,
    K: () => ey,
    KM: () => ew,
    Kr: () => eh,
    LM: () => eO,
    MM: () => tS,
    Mo: () => tA,
    Nj: () => eN,
    OG: () => tn,
    PB: () => e1,
    PM: () => el,
    Qe: () => G,
    Rs: () => es,
    U3: () => Q,
    V$: () => tt,
    VB: () => tm,
    Vl: () => ez,
    WP: () => J,
    Xh: () => ea,
    Xv: () => eE,
    ZS: () => tE,
    ZZ: () => Z,
    Zp: () => th,
    _D: () => F,
    _j: () => ti,
    _p: () => tu,
    b7: () => eW,
    bA: () => ty,
    f$: () => tc,
    f2: () => eM,
    fY: () => e9,
    gI: () => te,
    hF: () => tI,
    hQ: () => et,
    iQ: () => K,
    il: () => eY,
    lQ: () => Y,
    nc: () => ex,
    o9: () => eL,
    oo: () => eS,
    pO: () => eR,
    q6: () => z,
    q8: () => e0,
    qe: () => tv,
    t2: () => ec,
    u7: () => t_,
    vQ: () => eb,
    vR: () => ev,
    xN: () => eg,
    xn: () => ef,
    yH: () => tl,
    yI: () => en,
    ys: () => eI,
    zE: () => e_,
    zK: () => eD,
    zi: () => W
}),
    n(388685),
    n(314940),
    n(953529),
    n(415506),
    n(642613),
    n(784620),
    n(973216),
    n(539854));
var r = n(991998),
    i = n(392711),
    a = n(278074),
    o = n(754700),
    s = n(551910),
    l = n(34738),
    c = n(887003),
    u = n(570140),
    d = n(230711),
    _ = n(782568);
n(597688);
var f = n(231757),
    p = n(706454),
    h = n(866960),
    m = n(572004),
    g = n(585483),
    E = n(70956),
    b = n(630388),
    y = n(823379),
    O = n(960048),
    v = n(617136),
    I = n(272008),
    T = n(569984),
    S = n(497505),
    A = n(184299),
    N = n(566078),
    C = n(312046),
    R = n(46140),
    P = n(981631),
    w = n(701488),
    D = n(388032);
function L(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                L(e, t, n[t]);
            }));
    }
    return e;
}
function M(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function k(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : M(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let j = 2592000000,
    U = new Set([l.n.PREMIUM_EXTENSION, l.n.PREMIUM_PERMANENT]);
function G(e) {
    try {
        return (0, a.EQ)(e.config)
            .with({ config_version: 2 }, () => !0)
            .exhaustive();
    } catch (n) {
        var t;
        return (console.error("Unknown config version '".concat(null == e || null == (t = e.config) ? void 0 : t.config_version, "'"), n), !1);
    }
}
let B = (e) => e.application_id === w.Ev || e.platform === P.M7m.XBOX,
    V = (e) => e.platform === P.M7m.PS4 || e.platform === P.M7m.PS5;
function F(e, t) {
    if (null == e) return !1;
    let n = e.name.toLowerCase(),
        r = N.r.build(t.config).application.name.toLowerCase();
    return B(e) || V(e) ? n === r : null != e.application_id && H(e.application_id, t);
}
function Z(e, t) {
    for (let [n, r] of e) if (F(t, r) && !W(r)) return r;
}
function H(e, t) {
    return null != N.r.build(t.config).application.ids.find((t) => t === e);
}
function Y(e, t) {
    let n;
    for (let [r, i] of e)
        if (H(t, i) && !W(i)) {
            n = i;
            break;
        }
    return n;
}
function W(e) {
    return new Date(e.config.expiresAt).valueOf() <= Date.now();
}
function K(e) {
    if (!W(e)) return !1;
    let t = Date.now() - j,
        n = new Date(e.config.expiresAt).valueOf();
    return null != e.config.expiresAt && !(n <= t);
}
function z(e) {
    return (0, a.EQ)(e)
        .with({ config_version: 2 }, (e) => (0, C.Q)(e))
        .exhaustive();
}
function q(e) {
    return null == e
        ? null
        : {
              lastBeatAt: e.last_beat_at,
              expiresAt: e.expires_at
          };
}
function X(e) {
    let t = {};
    for (let [n, r] of Object.entries(e))
        t[n] = {
            eventName: r.event_name,
            value: r.value,
            updatedAt: r.updated_at,
            completedAt: r.completed_at,
            heartbeat: q(r.heartbeat)
        };
    return t;
}
function Q(e) {
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
        progress: X(e.progress)
    };
}
function J(e) {
    return {
        id: e.id,
        preview: e.preview,
        config: z(e.config),
        userStatus: null == e.user_status ? null : Q(e.user_status),
        targetedContent: e.targeted_content
    };
}
function $(e) {
    return e.type === c.w.VIRTUAL_CURRENCY
        ? {
              skuId: e.sku_id,
              type: e.type,
              name: e.name,
              nameWithArticle: e.name_with_article,
              collectibleProduct: e.collectible_product,
              orbQuantity: e.orb_quantity
          }
        : {
              skuId: e.sku_id,
              type: e.type,
              name: e.name,
              nameWithArticle: e.name_with_article,
              asset: e.asset,
              assetVideo: e.asset_video,
              collectibleProduct: e.collectible_product
          };
}
function ee(e) {
    return {
        id: e.id,
        startsAt: e.starts_at,
        expiresAt: e.expires_at,
        features: e.features,
        messages: {
            questName: e.messages.quest_name,
            gamePublisher: e.messages.game_publisher,
            gameTitle: e.messages.game_title
        },
        assets: {
            hero: e.assets.hero,
            heroVideo: e.assets.hero_video,
            questBarHero: e.assets.quest_bar_hero,
            questBarHeroVideo: e.assets.quest_bar_hero_video,
            gameTile: e.assets.game_tile,
            logotype: e.assets.logotype
        },
        colors: {
            primary: e.colors.primary,
            secondary: e.colors.secondary
        },
        rewards: e.rewards.map($),
        cosponsorMetadata: (0, C.s)(e.cosponsor_metadata)
    };
}
function et(e) {
    return {
        id: e.id,
        config: ee(e.config),
        userStatus: null == e.user_status ? null : Q(e.user_status)
    };
}
function en(e) {
    var t;
    return {
        userId: e.user_id,
        questId: e.quest_id,
        code: e.code,
        platform: e.platform,
        claimedAt: e.claimed_at,
        tier: null != (t = e.tier) ? t : null
    };
}
function er(e) {
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
                        rewardCode: en(t.reward.reward_code)
                    }
                }
            };
    }
}
function ei(e) {
    return {
        skuId: e.sku_id,
        tenantMetadata: er(e.tenant_metadata),
        consumed: e.consumed
    };
}
function ea(e) {
    return {
        claimedAt: e.claimed_at,
        items: e.entitlements.map(ei),
        errors: e.errors
    };
}
function eo(e) {
    return {
        eventName: e.event_name,
        title: e.title,
        description: e.description,
        target: e.target
    };
}
let es = (e) => ''.concat(location.protocol, '//').concat(location.host, '/quests/').concat(e);
function el(e, t, n) {
    let r = t.get(n);
    if (null == r) return;
    let i = e.get(r.quest.id);
    if (null != i && !W(i)) return i;
}
let ec = (e) => {
    switch (e) {
        case S.y$.XBOX:
            return D.intl.string(D.t.G84UWV);
        case S.y$.PLAYSTATION:
            return D.intl.string(D.t['6IeKx8']);
        case S.y$.SWITCH:
            return D.intl.string(D.t['1pp0sr']);
        case S.y$.PC:
            return D.intl.string(D.t['YK+wUl']);
        case S.y$.CROSS_PLATFORM:
            return D.intl.string(D.t.UWVbzc);
    }
};
function eu(e) {
    var t, n;
    let { quest: r, taskDetails: i, thirdPartyTaskDetails: a } = e;
    if ((null == (t = r.userStatus) ? void 0 : t.completedAt) != null) return D.intl.string(D.t.BzFeTE);
    if ((null == (n = r.userStatus) ? void 0 : n.enrolledAt) != null) {
        let { percentComplete: e } = i,
            t = null != a ? a.percentComplete : e;
        return t >= 0.75 ? D.intl.string(D.t.gvCR4O) : t >= 0.45 && t <= 0.55 ? D.intl.string(D.t.JNx8sL) : t > 0 ? D.intl.string(D.t.JMbfnZ) : D.intl.string(D.t['7e5k7O']);
    }
    return D.intl.formatToPlainString(D.t.EQa7oq, { questName: r.config.messages.questName });
}
function ed(e) {
    return Object.keys(R.a_).includes(S.jn[e]);
}
function e_(e, t) {
    if (!ed(t)) return !1;
    let n = S.jn[t];
    return (0, b.yE)(e.dismissedQuestContent, R.a_[n]);
}
function ef(e) {
    let t = e.rewardsConfig.rewards.find((e) => e.type === c.w.COLLECTIBLE);
    return (null == t ? void 0 : t.type) === c.w.COLLECTIBLE ? t : null;
}
function ep(e) {
    let t = ef(e);
    return null != t && 'expiresAtPremium' in t && null != t.expiresAtPremium ? tr(t.expiresAtPremium) : null;
}
function eh(e) {
    let t = ef(e);
    if (null == t || !('expiresAt' in t) || null == t.expiresAt) return null;
    let n = new Date(e.expiresAt),
        i = new Date(t.expiresAt),
        a = (0, r.Z)(i, n),
        o = Math.floor(a / 30) + +(a % 30 >= 25);
    if (o >= 12) {
        let e = Math.floor(o / 12);
        return D.intl.formatToPlainString(D.t.PClsr6, { years: e });
    }
    {
        if (o > 0) return D.intl.formatToPlainString(D.t.kridzM, { months: o });
        let e = (0, r.Z)(i, n);
        if (!(e >= 7)) return D.intl.formatToPlainString(D.t.k2UNz8, { days: e });
        {
            let t = Math.ceil(e / 7);
            return D.intl.formatToPlainString(D.t.EmoBDw, { weeks: t });
        }
    }
}
function em(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === c.w.FRACTIONAL_PREMIUM);
}
function eg(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === c.w.VIRTUAL_CURRENCY);
}
function eE(e) {
    return null != ef(e);
}
function eb(e) {
    return e.rewardsConfig.rewards.some((e) => e.type === c.w.IN_GAME);
}
function ey(e) {
    var t;
    return null != (t = e.rewardsConfig.rewards.find((e) => e.type === c.w.IN_GAME)) ? t : null;
}
function eO(e) {
    let t = e.rewardsConfig.rewards.find((e) => e.type === c.w.VIRTUAL_CURRENCY);
    return null == t ? void 0 : t.orbQuantity;
}
function ev(e, t) {
    return e.targetedContent.includes(t);
}
function eI(e, t) {
    O.Z.captureException(e, k(x({}, t), { tags: k(x({}, null == t ? void 0 : t.tags), { app_context: 'quests' }) }));
}
function eT(e, t) {
    if (null == t || null == e) return null;
    for (let n of t) {
        let t = Z(e, n);
        if (null != t) return t;
    }
    return null;
}
function eS(e) {
    let {
            quest: { config: t }
        } = e,
        n = t.rewardsConfig;
    return n.assignmentMethod === s.j.TIERED && n.rewards.length > 0 && n.rewards.every((e) => e.type === c.w.REWARD_CODE);
}
function eA(e) {
    return null != e.taskConfigV2.tasks[o.X.PLAY_ON_DESKTOP];
}
function eN(e) {
    let { quest: t } = e;
    return eA(t.config);
}
function eC(e) {
    let { quest: t } = e;
    return null != t.config.taskConfigV2.tasks[o.X.STREAM_ON_DESKTOP];
}
function eR(e) {
    return null != e.config.taskConfigV2.tasks[o.X.PLAY_ACTIVITY];
}
function eP(e) {
    return null != e && eN({ quest: e });
}
function ew(e) {
    let t = N.r.build(e.config).application.id;
    return eR(e) && t === R.Ts;
}
function eD(e, t) {
    return N.r.build(e.config).features.has(t);
}
function eL(e) {
    let { quest: t, idx: n } = e;
    if (null == n) return null;
    let r = t.config.rewardsConfig.rewards[n];
    return r.type === c.w.REWARD_CODE ? r : null;
}
function ex(e, t) {
    let n = N.r.build(e.config).application.link;
    ((0, v._3)({
        questId: e.id,
        questContent: t.content,
        questContentCTA: t.ctaContent,
        questContentPosition: t.position,
        impressionId: t.impressionId,
        sourceQuestContent: t.sourceQuestContent
    }),
        g.S.dispatch(P.CkL.QUEST_GAME_LINK_OPENED),
        (0, _.Z)(n));
}
let eM = (e, t) => {
        ((0, v._3)({
            questId: e,
            questContent: t.content,
            questContentCTA: t.ctaContent,
            questContentPosition: t.position,
            impressionId: t.impressionId,
            sourceQuestContent: t.sourceQuestContent
        }),
            (0, m.JG)(es(e)));
    },
    ek = (e, t) => (e > 0 ? (0, i.floor)(Math.min(t / e, 1), 4) : 0),
    ej = (e) => e6(e) || T.Z.isProgressingOnDesktop(e.id),
    eU = (e, t) => {
        var n, r, a, o;
        let s = null == (o = e.userStatus) || null == (a = o.progress) || null == (r = a[t.type]) || null == (n = r.heartbeat) ? void 0 : n.lastBeatAt;
        if (null == s || !ej(e)) return 0;
        let l = Date.now() - new Date(s).valueOf();
        return (0, i.floor)(l / E.Z.Millis.SECOND, 2);
    },
    eG = (e, t) => {
        var n, r, i, a, o;
        let s = null == (r = e.userStatus) || null == (n = r.progress) ? void 0 : n[t.type],
            l = null != (o = null != (a = null == s ? void 0 : s.value) ? a : null == (i = e.userStatus) ? void 0 : i.streamProgressSeconds) ? o : 0;
        if (e0(e)) {
            let n = T.Z.getOptimisticProgress(e.id, t.type);
            return null == n || n < l ? l : n;
        }
        return l + eU(e, t);
    },
    eB = 0.99,
    eV = (e, t) => {
        var n;
        let r = t.target;
        if ((null == (n = e.userStatus) ? void 0 : n.completedAt) != null) return r;
        let a = Math.min(r * eB, eG(e, t));
        return Math.max((0, i.floor)(a, 2), 0);
    },
    eF = (e) => {
        var t, n;
        let { quest: r, taskType: i, includeTaskTypes: a = o.T.ALL } = e,
            s = r.config.taskConfigV2,
            l = null != i ? i : null == (t = Object.values(s.tasks).filter((e) => a.has(e.type))[0]) ? void 0 : t.type,
            c = null != (n = s.tasks[l]) ? n : s.tasks[o.X.STREAM_ON_DESKTOP];
        if (null == c) throw Error('No task with type '.concat(i, ' found for quest ').concat(r.id, '!'));
        let u = c.target,
            d = eV(r, c);
        return {
            progressSeconds: d,
            targetSeconds: u,
            targetMinutes: Math.ceil(u / E.Z.Seconds.MINUTE),
            percentComplete: ek(u, d),
            taskType: l
        };
    },
    eZ = (e) => (o.T.ALL.has(e) ? e : null),
    eH = (e) => {
        var t, n;
        let { quest: r, includeTaskTypes: i = o.T.ALL } = e;
        for (let e of Object.values(null != (n = null == (t = r.userStatus) ? void 0 : t.progress) ? n : {})
            .sort((e, t) => {
                var n, r;
                let i = null == e || null == (n = e.heartbeat) ? void 0 : n.lastBeatAt,
                    a = null == t || null == (r = t.heartbeat) ? void 0 : r.lastBeatAt;
                return null != i && null != a ? (new Date(i).valueOf() > new Date(a).valueOf() ? -1 : 1) : null == i && null == a && (null == e ? void 0 : e.updatedAt) != null && (null == t ? void 0 : t.updatedAt) != null ? (new Date(e.updatedAt).valueOf() > new Date(t.updatedAt).valueOf() ? -1 : 1) : null != i && null == a ? -1 : 1;
            })
            .filter(y.lm)) {
            let t = eZ(e.eventName);
            if (null != t && (null == i ? void 0 : i.has(t)))
                return eF({
                    quest: r,
                    taskType: t,
                    includeTaskTypes: i
                });
        }
        return eF({
            quest: r,
            includeTaskTypes: i
        });
    },
    eY = (e, t) => {
        if (ez(e))
            return {
                progressSeconds: 0,
                targetSeconds: 1,
                targetMinutes: 1,
                percentComplete: 0,
                taskType: o.X.STREAM_ON_DESKTOP
            };
        if (e$(e))
            return eH({
                quest: e,
                includeTaskTypes: null != t ? t : e6(e) ? o.T.CONSOLE : o.T.ALL
            });
        if (e0(e))
            if (e2(e))
                return eF({
                    quest: e,
                    taskType: o.X.WATCH_VIDEO_ON_MOBILE
                });
            else
                return eF({
                    quest: e,
                    taskType: o.X.WATCH_VIDEO
                });
        return eP(e)
            ? eF({
                  quest: e,
                  taskType: o.X.PLAY_ON_DESKTOP
              })
            : eR(e)
              ? eF({
                    quest: e,
                    taskType: o.X.PLAY_ACTIVITY
                })
              : eF({
                    quest: e,
                    taskType: o.X.STREAM_ON_DESKTOP
                });
    };
function eW(e) {
    var t, n, r, i;
    let a = N.r.build(e.config).defaultInGameTask;
    if (null == a) return null;
    let o = null != (i = null == (r = e.userStatus) || null == (n = r.progress) || null == (t = n[a.eventName]) ? void 0 : t.value) ? i : 0,
        s = ek(a.target, o);
    return {
        title: a.messages.taskTitle,
        description: a.messages.taskDescription,
        target: a.target,
        progress: o,
        percentComplete: s
    };
}
let eK = (e) => (t) => e.some((e) => null != t.config.taskConfigV2.tasks[e]);
function ez(e) {
    return Array.from(o.T.IN_GAME).some((t) => null != e.config.taskConfigV2.tasks[t]);
}
function eq(e) {
    return eX(e.targetSeconds - e.progressSeconds);
}
function eX(e) {
    return {
        minutes: Math.max(0, Math.floor(e / 60)),
        seconds: Math.max(0, Math.floor(e % 60))
    };
}
function eQ(e) {
    let t = eq(e);
    return eJ(t.minutes, t.seconds);
}
function eJ(e, t) {
    return ''.concat(String(e).padStart(2, '0'), ':').concat(String(t).padStart(2, '0'));
}
let e$ = eK([o.X.PLAY_ON_XBOX, o.X.PLAY_ON_PLAYSTATION]),
    e0 = eK([o.X.WATCH_VIDEO, o.X.WATCH_VIDEO_ON_MOBILE]),
    e1 = eK([o.X.WATCH_VIDEO]),
    e2 = eK([o.X.WATCH_VIDEO_ON_MOBILE]),
    e3 = (e) => e2(e) && !e1(e);
function e4(e) {
    return e$(e);
}
let e5 = (e, t) => {
    var n, r;
    let i = null == e || null == (r = e.progress[t]) || null == (n = r.heartbeat) ? void 0 : n.expiresAt;
    if (null == i) return !1;
    let a = new Date(i).valueOf();
    return !isNaN(a) && a > Date.now();
};
function e6(e) {
    return null != e.userStatus && (e5(e.userStatus, o.X.PLAY_ON_XBOX) || e5(e.userStatus, o.X.PLAY_ON_PLAYSTATION));
}
function e8(e) {
    return !!e0(e) && (0, n(952265).nf)(t_(e.id));
}
function e7() {
    d.Z.open(P.oAB.CONNECTIONS);
}
function e9(e, t) {
    let { platformType: n, quest: r } = e;
    ((0, v._3)({
        questId: r.id,
        questContent: t.content,
        sourceQuestContent: t.sourceQuestContent,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId
    }),
        (0, f.Z)({
            platformType: n,
            location: t.ctaContent
        }));
}
function te(e, t) {
    let { quest: n } = e;
    (0, v._3)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentRowIndex: t.rowIndex,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId,
        sourceQuestContent: t.sourceQuestContent
    });
    let r = td(n);
    if (1 === r.length) return (0, f.Z)({ platformType: r.at(0) });
    u.Z.dispatch({
        type: 'CONNECTIONS_GRID_MODAL_SHOW',
        onComplete: (e) => (0, f.Z)({ platformType: e }),
        includedPlatformTypes: new Set(r)
    });
}
function tt(e, t) {
    let { quest: n } = e;
    ((0, v._3)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId,
        sourceQuestContent: t.sourceQuestContent
    }),
        e7());
}
function tn() {
    return window.location.pathname.startsWith(P.Z5c.QUEST_HOME);
}
function tr(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: 'short' };
    return null == e ? '' : new Date(e).toLocaleDateString(p.default.locale, t);
}
function ti(e) {
    return 'xbox' === e.connected_account_type ? P.ABu.XBOX : P.ABu.PLAYSTATION;
}
function ta(e) {
    return ti(e) === P.ABu.XBOX ? D.t.mytEv7 : D.t.iDiwb2;
}
function to(e) {
    var t, n, r, i;
    let { quest: a, rewardCode: o, selectedPlatformType: s, sharedQuestFields: l } = e,
        c = eS({ quest: a }),
        u = null != s ? s : null == o ? void 0 : o.platform,
        d = c
            ? eL({
                  quest: a,
                  idx: null != (r = null == o ? void 0 : o.tier) ? r : null == (t = a.userStatus) ? void 0 : t.claimedTier
              })
            : null,
        _ = null != (i = null == d || null == (n = d.messages) ? void 0 : n.redemptionInstructionsByPlatform) ? i : l.defaultRewardRedemptionInstructionsByPlatform;
    return null != u ? _[u] : void 0;
}
function ts(e) {
    let { isTargetedDisclosure: t, gamePublisher: n, gameTitle: r, cosponsorName: i } = e;
    return t
        ? null == i
            ? D.intl.formatToPlainString(D.t.Piihy8, { gamePublisher: n })
            : D.intl.formatToPlainString(D.t.DV47Gx, {
                  gamePublisher: n,
                  cosponsorName: i
              })
        : D.intl.formatToPlainString(D.t.tOWwxM, {
              gamePublisher: n,
              gameTitle: r
          });
}
function tl(e) {
    let t = eN({ quest: e }) || eC({ quest: e }),
        n = e$(e),
        r = [];
    return (t && r.push(R.cd.DESKTOP), n && r.push(R.cd.CONSOLE), r);
}
function tc(e) {
    var t;
    let n = null == (t = ef(e)) ? void 0 : t.expirationMode;
    return null != n && U.has(n);
}
function tu(e) {
    var t;
    return tc(e) && (null == (t = ef(e)) ? void 0 : t.expirationMode) === l.n.PREMIUM_PERMANENT;
}
function td(e) {
    let t = Object.keys(e.config.taskConfigV2.tasks),
        n = [];
    for (let e of t)
        switch (e) {
            case o.X.PLAY_ON_XBOX:
                n.push(P.ABu.XBOX);
                break;
            case o.X.PLAY_ON_PLAYSTATION:
                n.push(P.ABu.PLAYSTATION);
        }
    return n;
}
function t_(e) {
    return 'VIDEO-QUEST-'.concat(e);
}
function tf(e) {
    let t = e0(e),
        n = eR(e);
    return t || n;
}
function tp(e, t) {
    var n, r;
    W(e) || (null == (n = e.userStatus) ? void 0 : n.enrolledAt) == null || (null == (r = e.userStatus) ? void 0 : r.completedAt) != null || (0, I.cT)(e.id, t);
}
function th(e) {
    return {
        [S.jn.QUEST_BAR]: S.Ok.DESKTOP_ACCOUNT_PANEL_AREA,
        [S.jn.QUEST_BAR_V2]: S.Ok.DESKTOP_ACCOUNT_PANEL_AREA,
        [S.jn.QUEST_BAR_MOBILE]: S.Ok.MOBILE_HOME_DOCK_AREA
    }[e];
}
function tm(e) {
    let t = th(e);
    return null != t && R.v6.has(t);
}
let tg = 'landscape';
function tE(e) {
    let t = e.assets.video;
    return null == t || null == t.width || null == t.height ? tg : t.width > t.height ? 'landscape' : 'portrait';
}
let tb = (e) => (e.percentComplete > 0 ? D.intl.formatToPlainString(D.t['c59/Tk'], { remainTime: eQ(e) }) : D.intl.formatToPlainString(D.t.GNsKiY, { remainTime: eQ(e) }));
function ty(e, t) {
    return e <= 0 || t <= 0 ? 0 : e >= t ? 1 : Math.min(1, Math.round((e / t) * 100) / 100);
}
function tO(e) {
    var t, n;
    let r = N.r.build(e).defaultWatchVideoTask;
    return null != (n = null != (t = null == r ? void 0 : r.messages.videoEndCtaButtonLabel) ? t : null == r ? void 0 : r.messages.videoEndCtaTitle) ? n : D.intl.string(D.t.iiTtpK);
}
function tv(e, t) {
    var n;
    let { quest: r, adDecisionData: i } = null != (n = T.Z.questToDeliverForPlacement.get(th(t))) ? n : {};
    return null != i && (null == r ? void 0 : r.id) === e ? i : R.Jp;
}
function tI(e) {
    var t, n;
    let r = null != (n = null == (t = e.userStatus) ? void 0 : t.claimedTier) ? n : 0;
    return 'rewardsConfig' in e.config ? e.config.rewardsConfig.rewards[r] : e.config.rewards[r];
}
function tT(e) {
    return new Set(Object.keys(e.config.taskConfigV2.tasks));
}
function tS(e, t) {
    let n = new Map();
    for (let [r, i] of e)
        for (let e of tT(i))
            if (t.has(e)) {
                n.set(r, i);
                break;
            }
    return n;
}
function tA(e) {
    var t, n;
    let { questId: r, sourceQuestContent: i, videoSessionId: a } = e,
        o = A.ZP.getState().getVideoProgress(r);
    if (null == o) return;
    let s = T.Z.getQuest(r);
    null != s && (null == (t = s.userStatus) ? void 0 : t.enrolledAt) != null && (null == (n = s.userStatus) ? void 0 : n.completedAt) == null && tp(s, o.maxTimestampSec);
    let l = ty(o.maxTimestampSec, o.duration);
    ((0, v.dA)({
        questId: r,
        event: P.rMx.QUEST_VIDEO_PROGRESSED,
        properties: {
            progress: l,
            video_timestamp_seconds: o.maxTimestampSec,
            video_session_id: a
        },
        sourceQuestContent: i
    }),
        (0, v.dA)({
            questId: r,
            event: P.rMx.QUEST_VIDEO_MODAL_CLOSED,
            properties: {
                video_progress: l,
                video_session_id: a,
                network_connection_speed: h.Z.getEffectiveConnectionSpeed()
            },
            sourceQuestContent: i
        }));
}
