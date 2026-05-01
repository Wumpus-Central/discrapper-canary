"use strict";
n.d(t, {
    JM: () => l,
    Js: () => c,
    Jx: () => f,
    Xm: () => h,
    YT: () => o,
    fx: () => _,
    up: () => d,
    wr: () => u,
    xv: () => p,
});
var i = n(957565),
    r = n(561844),
    s = n(190107),
    a = n(375708);
function o(e) {
    let { quest: t, taskDetails: n, thirdPartyTaskDetails: i } = e;
    if (t.userStatus?.completedAt != null) return a.intl.string(a.t.BzFeTF);
    if (t.userStatus?.enrolledAt != null) {
        let { percentComplete: e } = n,
            t = null != i ? i.percentComplete : e;
        return t >= 0.75
            ? a.intl.string(a.t.gvCR4H)
            : t >= 0.45 && t <= 0.55
              ? a.intl.string(a.t.JNx8sG)
              : t > 0
                ? a.intl.string(a.t.JMbfnc)
                : a.intl.string(a.t["7e5k7L"]);
    }
    return a.intl.formatToPlainString(a.t.EQa7os, { questName: t.config.messages.questName });
}
function l(e) {
    let {
        isTargetedDisclosure: t,
        isContextualDisclosure: n,
        isVideoQuest: i,
        gamePublisher: r,
        gameTitle: s,
        cosponsorName: o,
    } = e;
    if (t) {
        if (n) return a.intl.string(a.t.nPg6f1);
        let e =
            null == o
                ? a.intl.formatToPlainString(a.t.Piihy1, { gamePublisher: r })
                : a.intl.formatToPlainString(a.t.DV47Gy, { gamePublisher: r, cosponsorName: o });
        return `${e} ${a.intl.string(a.t.fEbrT8)}`;
    }
    return i
        ? a.intl.formatToPlainString(a.t.zDHY3s, { gamePublisher: r })
        : a.intl.formatToPlainString(a.t.euizJY, { gamePublisher: r, gameTitle: s });
}
function u(e) {
    return e.config.ctaConfig.buttonLabel;
}
function c(e) {
    switch (e) {
        case s.kL.SUGGESTED:
            return a.intl.string(a.t.gBfXPZ);
        case s.kL.MOST_RECENT:
            return a.intl.string(a.t.K6oEu2);
        case s.kL.EXPIRING_SOON:
            return a.intl.string(a.t.IB22n3);
        case s.kL.RECENTLY_ENROLLED:
            return a.intl.string(a.t["BB+2tX"]);
    }
}
function d(e) {
    switch (e) {
        case s.BQ.VIRTUAL_CURRENCY:
            return a.intl.string(a.t.ElYQFS);
        case s.BQ.COLLECTIBLE:
            return a.intl.string(a.t.Jg17Ut);
        case s.BQ.IN_GAME:
            return a.intl.string(a.t["O/J2kr"]);
        case s.Pc.VIDEO:
            return a.intl.string(a.t.e0iISA);
        case s.Pc.PLAY:
            return a.intl.string(a.t["1nJR4p"]);
    }
}
function _(e) {
    switch (e) {
        case "reward":
            return a.intl.string(a.t.vjLqAU);
        case "task":
            return a.intl.string(a.t.Hufmss);
    }
}
function f(e) {
    return e.ctaConfig.link;
}
let h = (e, t) => {
    (0, r.Y5)({
        questId: e,
        questContent: t.content,
        questContentCTA: t.ctaContent,
        questContentPosition: t.position,
        impressionId: t.impressionId,
        sourceQuestContent: t.sourceQuestContent,
    }),
        (0, i.C)(`${location.protocol}//${location.host}/quests/${e}`);
};
function p(e) {
    if (0 === e.rewardsConfig.rewards.length) throw Error(`Quest ${e.id} has no rewards configured`);
    return e.rewardsConfig.rewards[0];
}
