n.d(t, {
    AV: () => c,
    Fs: () => u,
    M1: () => E,
    NL: () => f,
    Nt: () => p,
    T2: () => _,
    V_: () => d,
    f2: () => g,
    zo: () => h,
}),
    n(415506);
var r = n(572004),
    i = n(617136),
    a = n(254579),
    o = n(283689),
    s = n(324805),
    l = n(388032);
function c(e) {
    var t, n;
    let { quest: r, taskDetails: i, thirdPartyTaskDetails: a } = e;
    if ((null == (t = r.userStatus) ? void 0 : t.completedAt) != null) return l.intl.string(l.t.BzFeTF);
    if ((null == (n = r.userStatus) ? void 0 : n.enrolledAt) != null) {
        let { percentComplete: e } = i,
            t = null != a ? a.percentComplete : e;
        return t >= 0.75
            ? l.intl.string(l.t.gvCR4H)
            : t >= 0.45 && t <= 0.55
              ? l.intl.string(l.t.JNx8sG)
              : t > 0
                ? l.intl.string(l.t.JMbfnc)
                : l.intl.string(l.t["7e5k7L"]);
    }
    return l.intl.formatToPlainString(l.t.EQa7os, { questName: r.config.messages.questName });
}
function u(e) {
    let { isTargetedDisclosure: t, gamePublisher: n, gameTitle: r, cosponsorName: i } = e;
    return t
        ? null == i
            ? l.intl.formatToPlainString(l.t.Piihy1, { gamePublisher: n })
            : l.intl.formatToPlainString(l.t.DV47Gy, {
                  gamePublisher: n,
                  cosponsorName: i,
              })
        : l.intl.formatToPlainString(l.t.euizJY, {
              gamePublisher: n,
              gameTitle: r,
          });
}
function d(e) {
    return null != e.config.ctaConfig.buttonLabel
        ? e.config.ctaConfig.buttonLabel
        : (0, a.q8)(e) ||
            (0, o.Pb)(e) ||
            (0, a.pO)(e) ||
            (0, a.Vl)(e) ||
            e.config.features.includes(s.S7.NON_GAMING_PLAY_QUEST)
          ? l.intl.string(l.t.hvVgAZ)
          : l.intl.string(l.t.lwQdjB);
}
function f(e) {
    switch (e) {
        case s.yq.SUGGESTED:
            return l.intl.string(l.t.gBfXPZ);
        case s.yq.MOST_RECENT:
            return l.intl.string(l.t.K6oEu2);
        case s.yq.EXPIRING_SOON:
            return l.intl.string(l.t.IB22n3);
        case s.yq.RECENTLY_ENROLLED:
            return l.intl.string(l.t["BB+2tX"]);
    }
}
function p(e) {
    switch (e) {
        case s.UP.VIRTUAL_CURRENCY:
            return l.intl.string(l.t.ElYQFS);
        case s.UP.COLLECTIBLE:
            return l.intl.string(l.t.Jg17Ut);
        case s.UP.IN_GAME:
            return l.intl.string(l.t["O/J2kr"]);
        case s.oH.VIDEO:
            return l.intl.string(l.t.e0iISA);
        case s.oH.PLAY:
            return l.intl.string(l.t["1nJR4p"]);
    }
}
function _(e) {
    switch (e) {
        case "reward":
            return l.intl.string(l.t.vjLqAU);
        case "task":
            return l.intl.string(l.t.Hufmss);
    }
}
let m = (e) => "".concat(location.protocol, "//").concat(location.host, "/quests/").concat(e);
function h(e) {
    return e.ctaConfig.link;
}
let g = (e, t) => {
    (0, i._3)({
        questId: e,
        questContent: t.content,
        questContentCTA: t.ctaContent,
        questContentPosition: t.position,
        impressionId: t.impressionId,
        sourceQuestContent: t.sourceQuestContent,
    }),
        (0, r.JG)(m(e));
};
function E(e) {
    if (0 === e.rewardsConfig.rewards.length) throw Error("Quest ".concat(e.id, " has no rewards configured"));
    return e.rewardsConfig.rewards[0];
}
