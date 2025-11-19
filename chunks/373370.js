n.d(t, {
    CR: () => j,
    DD: () => L,
}),
    n(953529);
var r = n(473749),
    i = n(442837),
    a = n(594174),
    o = n(63063),
    s = n(111361),
    l = n(509212),
    c = n(113434),
    u = n(497505),
    d = n(302914),
    f = n(46140),
    _ = n(981631),
    p = n(474936),
    h = n(388032);
function m(e, t, n) {
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
function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
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
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let y = "NVIDIA GeForce NOW";
function O(e, t, n) {
    return n ? h.intl.formatToPlainString(e, t) : h.intl.format(e, t);
}
function v(e) {
    let t,
        { quest: n, taskDetails: r, withoutMarkdown: i, hasNitro: a, collectibleRewardDuration: o } = e,
        s = (0, l.B3)(n.config),
        { targetMinutes: c } = r,
        u = n.config.messages.gameTitle,
        d = (0, l.f$)(n.config),
        _ = (0, l._p)(n.config),
        p = n.config.features.includes(f.S7.NON_GAMING_PLAY_QUEST);
    return O(
        (t =
            a && d
                ? _
                    ? p
                        ? h.t.ztXW8V
                        : h.t["eb/Sna"]
                    : p
                      ? h.t["1AcTqm"]
                      : h.t.ziB0HF
                : d || null != o
                  ? p
                      ? h.t.enQ3jU
                      : h.t.AwuMRS
                  : p
                    ? h.t["e+K3xJ"]
                    : h.t.NIimTt),
        {
            gameTitle: u,
            streamingDurationRequirement: c,
            rewardNameWithArticle: s,
            duration: o,
            targetMinutes: c,
        },
        i,
    );
}
function I(e) {
    let t,
        { quest: n, taskDetails: r, withoutMarkdown: i, hasNitro: a, collectibleRewardDuration: o } = e,
        s = (0, l.B3)(n.config),
        { targetMinutes: c } = r,
        u = n.config.messages.gameTitle,
        d = (0, l.f$)(n.config),
        f = (0, l._p)(n.config);
    return O(
        (t = a && d ? (f ? h.t["eb/Sna"] : h.t.ziB0HF) : d || null != o ? h.t.AwuMRS : h.t.NIimTt),
        {
            gameTitle: u,
            targetMinutes: c,
            rewardNameWithArticle: s,
            duration: o,
            streamingDurationRequirement: c,
        },
        i,
    );
}
function T(e) {
    let t,
        { quest: n, taskDetails: r, withoutMarkdown: i, hasNitro: a, collectibleRewardDuration: o } = e,
        s = (0, l.B3)(n.config),
        { targetMinutes: c } = r,
        u = n.config.messages.gameTitle,
        d = (0, l.f$)(n.config),
        _ = (0, l._p)(n.config),
        p = n.config.features.includes(f.S7.NON_GAMING_PLAY_QUEST);
    return O(
        (t =
            a && d
                ? _
                    ? p
                        ? h.t.ztXW8V
                        : h.t["eb/Sna"]
                    : p
                      ? h.t["1AcTqm"]
                      : h.t.ziB0HF
                : d || null != o
                  ? p
                      ? h.t.enQ3jU
                      : h.t.AwuMRS
                  : p
                    ? h.t["03VJqu"]
                    : h.t.FZL5Q5),
        {
            gameTitle: u,
            streamingDurationRequirement: c,
            rewardNameWithArticle: s,
            duration: o,
            questReward: s,
        },
        i,
    );
}
function S(e) {
    let { quest: t, taskDetails: n, withoutMarkdown: r } = e,
        { targetMinutes: i } = n,
        a = t.config.messages.gameTitle;
    return O(
        h.t["a/ia7F"],
        {
            gameTitle: a,
            streamingDurationRequirement: i,
        },
        r,
    );
}
function A(e, t, n, r) {
    var i;
    let a,
        o = (0, l.z1)(e.config),
        s = null != (i = null == o ? void 0 : o.messages.videoTitle) ? i : "video",
        c = (0, l.B3)(e.config),
        u = (0, l.f$)(e.config),
        d = (0, l._p)(e.config);
    return O(
        (a =
            u && n
                ? d
                    ? h.t["xqX+r5"]
                    : h.t["vs/xBu"]
                : u || null != t
                  ? h.t["W/HkLO"]
                  : e.id === f.V6
                    ? h.t.Rsd5bL
                    : h.t["g+InPC"]),
        {
            videoTitle: s,
            rewardNameWithArticle: c,
            duration: t,
        },
        r,
    );
}
function C(e) {
    let { quest: t, taskDetails: n, withoutMarkdown: r, questContent: i } = e,
        a = n.targetMinutes,
        s = (0, l.B3)(t.config);
    return (0, l.KM)(t)
        ? O(
              h.t.VYwSSu,
              {
                  streamingDurationRequirement: a,
                  questReward: s,
              },
              r,
          )
        : t.config.features.includes(f.S7.CLOUD_GAMING_ACTIVITY)
          ? i === u.jn.QUESTS_EMBED
              ? O(
                    h.t["C+2RxC"],
                    {
                        activityName: t.config.messages.gameTitle,
                        providerName: y,
                        providerLink: o.Z.getArticleURL(_.BhN.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST),
                        questReward: s,
                    },
                    r,
                )
              : O(
                    h.t["0NNM3l"],
                    {
                        activityName: t.config.messages.gameTitle,
                        providerName: y,
                        providerLink: o.Z.getArticleURL(_.BhN.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST),
                        streamingDurationRequirement: a,
                        questReward: s,
                    },
                    r,
                )
          : O(
                h.t.UuzHh8,
                {
                    activityName: t.config.messages.gameTitle,
                    streamingDurationRequirement: a,
                    questReward: s,
                },
                r,
            );
}
function N(e) {
    let t,
        { quest: n, taskDetails: r, withoutMarkdown: i, hasNitro: a, collectibleRewardDuration: o } = e,
        s = (0, l.B3)(n.config),
        { targetMinutes: c } = r,
        u = n.config.messages.gameTitle,
        d = (0, l.f$)(n.config),
        f = (0, l._p)(n.config);
    return O(
        (t = a && d ? (f ? h.t["X8Yt/1"] : h.t.smG9ql) : d || null != o ? h.t.BLyDvO : h.t["hkJ+Gs"]),
        {
            gameTitle: u,
            streamingDurationRequirement: c,
            duration: o,
            questReward: s,
        },
        i,
    );
}
function R(e) {
    var t;
    let { quest: n, gameSheetHook: r, rewardNameWithArticle: i, targetMinutes: a } = e,
        o = {
            [f.S7.PACKAGE_ACTION_ADVENTURE]: h.t.H485IA,
            [f.S7.PACKAGE_RPG_MMO]: h.t["3XS8Ni"],
            [f.S7.PACKAGE_RACING_SPORTS]: h.t["X+UCju"],
            [f.S7.PACKAGE_SANDBOX_CREATIVE]: h.t["6o4n1Q"],
            [f.S7.PACKAGE_FAMILY_FRIENDLY]: h.t.DUsNmf,
            [f.S7.PACKAGE_HOLIDAY_SEASON]: h.t["cWP8/Z"],
            [f.S7.PACKAGE_NEW_YEARS]: h.t["8+sIJz"],
        },
        s = n.config.features.find((e) => e in o),
        l = null != (t = null != s ? o[s] : null) ? t : h.t.CDeHul;
    return h.intl.format(l, {
        rewardNameWithArticle: i,
        targetMinutes: a,
        gameSheetHook: r,
    });
}
function P(e) {
    let {
            quest: t,
            taskDetails: n,
            sourceQuestContent: r,
            withoutMarkdown: i,
            popoutTargetElementRef: a,
            onGameSheetOpened: o,
            onGameSheetClosed: s,
        } = e,
        c = (0, l.B3)(t.config),
        { targetMinutes: u, applications: f } = n;
    if (i)
        return h.intl.formatToPlainString(h.t["1votF6"], {
            rewardNameWithArticle: c,
            targetMinutes: u,
        });
    let _ = (0, d.C)({
        quest: t,
        sourceQuestContent: r,
        applications: null != f ? f : [],
        popoutTargetElementRef: a,
        onGameSheetOpened: o,
        onGameSheetClosed: s,
    });
    return R({
        quest: t,
        rewardNameWithArticle: c,
        targetMinutes: u,
        gameSheetHook: _,
    });
}
function D(e) {
    let {
            quest: t,
            taskDetails: n,
            questContent: r,
            thirdPartyTaskDetails: i,
            sourceQuestContent: a,
            withoutMarkdown: o,
            currentUser: c,
            popoutTargetElementRef: u,
            onGameSheetOpened: d,
            onGameSheetClosed: f,
        } = e,
        _ = (0, s.I5)(c, p.PremiumTypes.TIER_2),
        h = (0, l.Kr)(t.config),
        m = (0, l.$J)(t) && (0, l.$H)(t);
    if ((0, l.Pb)(t))
        return P({
            quest: t,
            taskDetails: n,
            sourceQuestContent: a,
            withoutMarkdown: o,
            popoutTargetElementRef: u,
            onGameSheetOpened: d,
            onGameSheetClosed: f,
        });
    if (m)
        return v({
            quest: t,
            taskDetails: n,
            withoutMarkdown: o,
            hasNitro: _,
            collectibleRewardDuration: h,
        });
    if ((0, l.$J)(t))
        return I({
            quest: t,
            taskDetails: n,
            withoutMarkdown: o,
            hasNitro: _,
            collectibleRewardDuration: h,
        });
    if ((0, l.$H)(t))
        return T({
            quest: t,
            taskDetails: n,
            withoutMarkdown: o,
            hasNitro: _,
            collectibleRewardDuration: h,
        });
    if ((0, l.oo)({ quest: t }))
        return S({
            quest: t,
            taskDetails: n,
            withoutMarkdown: o,
        });
    else if ((0, l.q8)(t)) return A(t, h, _, o);
    else if ((0, l.pO)(t))
        return C({
            quest: t,
            taskDetails: n,
            withoutMarkdown: o,
            questContent: r,
        });
    return null != i
        ? i.description
        : N({
              quest: t,
              taskDetails: n,
              withoutMarkdown: o,
              hasNitro: _,
              collectibleRewardDuration: h,
          });
}
function w(e) {
    var t;
    return D(
        b(g({}, e), {
            currentUser: null != (t = e.currentUser) ? t : a.default.getCurrentUser(),
            popoutTargetElementRef: e.popoutTargetElementRef,
            onGameSheetOpened: e.onGameSheetOpened,
            onGameSheetClosed: e.onGameSheetClosed,
        }),
    );
}
function L(e) {
    let { quest: t, questContent: n, sourceQuestContent: r } = e,
        o = (0, c.uA)({
            quest: t,
            questContent: n,
            sourceQuestContent: r,
        }),
        s = (0, i.e7)([a.default], () => a.default.getCurrentUser()),
        l = (0, c.Jf)(t);
    return w(
        b(g({}, e), {
            connectedConsoleLinkOnClick: o,
            currentUser: s,
            withoutMarkdown: !1,
            thirdPartyTaskDetails: null != l ? l : void 0,
        }),
    );
}
function x(e) {
    return (0, l.$J)(e) || (0, l.pO)(e) ? 0 : (0, l.Dr)({ quest: e }) ? 1 : (0, l.q8)(e) ? 2 : 3 * !!(0, l.Vl)(e);
}
function M(e) {
    return r.useMemo(() => x(e), [e]);
}
function j(e) {
    let { quest: t, shortText: n = !1 } = e;
    switch (M(t)) {
        case 0:
            if (t.config.features.includes(f.S7.CLOUD_GAMING_ACTIVITY)) return h.intl.string(h.t["+qoymD"]);
            if (t.config.features.includes(f.S7.START_QUEST_CTA)) return h.intl.string(n ? h.t.E4kW5O : h.t["Ie9++s"]);
            return h.intl.string(h.t.l7E81v);
        case 1:
            return h.intl.string(h.t.l7E81v);
        case 2:
            return h.intl.string(h.t.umdNin);
        case 3:
            return t.config.features.includes(f.S7.START_QUEST_CTA)
                ? h.intl.string(n ? h.t.CkUzLd : h.t["hRIVy+"])
                : h.intl.string(h.t.l7E81v);
    }
}
