n.d(t, {
    AV: () => u,
    Fs: () => d,
    M1: () => b,
    NL: () => p,
    Nt: () => _,
    T2: () => h,
    UH: () => y,
    V_: () => f,
    f2: () => E,
    zo: () => g,
}),
    n(415506);
var r = n(572004),
    i = n(358085),
    a = n(617136),
    o = n(49436),
    s = n(325916),
    l = n(324805),
    c = n(388032);
function u(e) {
    var t, n;
    let { quest: r, taskDetails: i, thirdPartyTaskDetails: a } = e;
    if ((null == (t = r.userStatus) ? void 0 : t.completedAt) != null) return c.intl.string(c.t.BzFeTF);
    if ((null == (n = r.userStatus) ? void 0 : n.enrolledAt) != null) {
        let { percentComplete: e } = i,
            t = null != a ? a.percentComplete : e;
        return t >= 0.75
            ? c.intl.string(c.t.gvCR4H)
            : t >= 0.45 && t <= 0.55
              ? c.intl.string(c.t.JNx8sG)
              : t > 0
                ? c.intl.string(c.t.JMbfnc)
                : c.intl.string(c.t["7e5k7L"]);
    }
    return c.intl.formatToPlainString(c.t.EQa7os, { questName: r.config.messages.questName });
}
function d(e) {
    let { isTargetedDisclosure: t, isVideoQuest: n, gamePublisher: r, gameTitle: i, cosponsorName: a } = e;
    return t
        ? null == a
            ? c.intl.formatToPlainString(c.t.Piihy1, { gamePublisher: r })
            : c.intl.formatToPlainString(c.t.DV47Gy, {
                  gamePublisher: r,
                  cosponsorName: a,
              })
        : n && "en-US" === c.intl.currentLocale
          ? c.intl.formatToPlainString(c.t.zDHY3s, { gamePublisher: r })
          : c.intl.formatToPlainString(c.t.euizJY, {
                gamePublisher: r,
                gameTitle: i,
            });
}
function f(e) {
    return e.config.ctaConfig.buttonLabel;
}
function p(e) {
    switch (e) {
        case l.yq.SUGGESTED:
            return c.intl.string(c.t.gBfXPZ);
        case l.yq.MOST_RECENT:
            return c.intl.string(c.t.K6oEu2);
        case l.yq.EXPIRING_SOON:
            return c.intl.string(c.t.IB22n3);
        case l.yq.RECENTLY_ENROLLED:
            return c.intl.string(c.t["BB+2tX"]);
    }
}
function _(e) {
    switch (e) {
        case l.UP.VIRTUAL_CURRENCY:
            return c.intl.string(c.t.ElYQFS);
        case l.UP.COLLECTIBLE:
            return c.intl.string(c.t.Jg17Ut);
        case l.UP.IN_GAME:
            return c.intl.string(c.t["O/J2kr"]);
        case l.oH.VIDEO:
            return c.intl.string(c.t.e0iISA);
        case l.oH.PLAY:
            return c.intl.string(c.t["1nJR4p"]);
    }
}
function h(e) {
    switch (e) {
        case "reward":
            return c.intl.string(c.t.vjLqAU);
        case "task":
            return c.intl.string(c.t.Hufmss);
    }
}
let m = (e) => "".concat(location.protocol, "//").concat(location.host, "/quests/").concat(e);
function g(e) {
    return e.ctaConfig.link;
}
let E = (e, t) => {
    (0, a._3)({
        questId: e,
        questContent: t.content,
        questContentCTA: t.ctaContent,
        questContentPosition: t.position,
        impressionId: t.impressionId,
        sourceQuestContent: t.sourceQuestContent,
    }),
        (0, r.JG)(m(e));
};
function b(e) {
    if (0 === e.rewardsConfig.rewards.length) throw Error("Quest ".concat(e.id, " has no rewards configured"));
    return e.rewardsConfig.rewards[0];
}
let y = (e) => {
    let { hasVideoAsset: t, playerState: n, pauseReason: r } = e;
    return t
        ? n === s.rq.PAUSED && r === o.yE.LOST_FOCUS
            ? c.intl.string(c.t["U7Xrb+"])
            : null
        : (0, i.isWeb)()
          ? c.intl.string(c.t["E1du/q"])
          : c.intl.string(c.t["rStN/7"]);
};
