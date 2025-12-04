n.d(t, {
    AV: () => s,
    Fs: () => l,
    M1: () => h,
    NL: () => u,
    Nt: () => d,
    T2: () => f,
    V_: () => c,
    f2: () => m,
    zo: () => _,
}),
    n(415506);
var r = n(572004),
    i = n(617136),
    a = n(324805),
    o = n(388032);
function s(e) {
    var t, n;
    let { quest: r, taskDetails: i, thirdPartyTaskDetails: a } = e;
    if ((null == (t = r.userStatus) ? void 0 : t.completedAt) != null) return o.intl.string(o.t.BzFeTF);
    if ((null == (n = r.userStatus) ? void 0 : n.enrolledAt) != null) {
        let { percentComplete: e } = i,
            t = null != a ? a.percentComplete : e;
        return t >= 0.75
            ? o.intl.string(o.t.gvCR4H)
            : t >= 0.45 && t <= 0.55
              ? o.intl.string(o.t.JNx8sG)
              : t > 0
                ? o.intl.string(o.t.JMbfnc)
                : o.intl.string(o.t["7e5k7L"]);
    }
    return o.intl.formatToPlainString(o.t.EQa7os, { questName: r.config.messages.questName });
}
function l(e) {
    let { isTargetedDisclosure: t, gamePublisher: n, gameTitle: r, cosponsorName: i } = e;
    return t
        ? null == i
            ? o.intl.formatToPlainString(o.t.Piihy1, { gamePublisher: n })
            : o.intl.formatToPlainString(o.t.DV47Gy, {
                  gamePublisher: n,
                  cosponsorName: i,
              })
        : o.intl.formatToPlainString(o.t.euizJY, {
              gamePublisher: n,
              gameTitle: r,
          });
}
function c(e) {
    return e.config.ctaConfig.buttonLabel;
}
function u(e) {
    switch (e) {
        case a.yq.SUGGESTED:
            return o.intl.string(o.t.gBfXPZ);
        case a.yq.MOST_RECENT:
            return o.intl.string(o.t.K6oEu2);
        case a.yq.EXPIRING_SOON:
            return o.intl.string(o.t.IB22n3);
        case a.yq.RECENTLY_ENROLLED:
            return o.intl.string(o.t["BB+2tX"]);
    }
}
function d(e) {
    switch (e) {
        case a.UP.VIRTUAL_CURRENCY:
            return o.intl.string(o.t.ElYQFS);
        case a.UP.COLLECTIBLE:
            return o.intl.string(o.t.Jg17Ut);
        case a.UP.IN_GAME:
            return o.intl.string(o.t["O/J2kr"]);
        case a.oH.VIDEO:
            return o.intl.string(o.t.e0iISA);
        case a.oH.PLAY:
            return o.intl.string(o.t["1nJR4p"]);
    }
}
function f(e) {
    switch (e) {
        case "reward":
            return o.intl.string(o.t.vjLqAU);
        case "task":
            return o.intl.string(o.t.Hufmss);
    }
}
let p = (e) => "".concat(location.protocol, "//").concat(location.host, "/quests/").concat(e);
function _(e) {
    return e.ctaConfig.link;
}
let m = (e, t) => {
    (0, i._3)({
        questId: e,
        questContent: t.content,
        questContentCTA: t.ctaContent,
        questContentPosition: t.position,
        impressionId: t.impressionId,
        sourceQuestContent: t.sourceQuestContent,
    }),
        (0, r.JG)(p(e));
};
function h(e) {
    if (0 === e.rewardsConfig.rewards.length) throw Error("Quest ".concat(e.id, " has no rewards configured"));
    return e.rewardsConfig.rewards[0];
}
