"use strict";
n.d(t, {
    JM: () => d,
    Js: () => f,
    Jx: () => g,
    Xm: () => E,
    YT: () => c,
    fx: () => h,
    oK: () => I,
    up: () => p,
    wr: () => _,
    xv: () => A,
});
var r = n(957565),
    i = n(723702),
    a = n(341915),
    s = n(561844),
    o = n(261331),
    l = n(654487),
    u = n(985018);
function c(e) {
    let { quest: t, taskDetails: n, thirdPartyTaskDetails: r } = e;
    if (t.userStatus?.completedAt != null) return u.intl.string(u.t.BzFeTF);
    if (t.userStatus?.enrolledAt != null) {
        let { percentComplete: e } = n,
            t = null != r ? r.percentComplete : e;
        return t >= 0.75
            ? u.intl.string(u.t.gvCR4H)
            : t >= 0.45 && t <= 0.55
              ? u.intl.string(u.t.JNx8sG)
              : t > 0
                ? u.intl.string(u.t.JMbfnc)
                : u.intl.string(u.t["7e5k7L"]);
    }
    return u.intl.formatToPlainString(u.t.EQa7os, { questName: t.config.messages.questName });
}
function d(e) {
    let { isTargetedDisclosure: t, isVideoQuest: n, gamePublisher: r, gameTitle: i, cosponsorName: a } = e;
    return t
        ? null == a
            ? u.intl.formatToPlainString(u.t.Piihy1, { gamePublisher: r })
            : u.intl.formatToPlainString(u.t.DV47Gy, { gamePublisher: r, cosponsorName: a })
        : n && "en-US" === u.intl.currentLocale
          ? u.intl.formatToPlainString(u.t.zDHY3s, { gamePublisher: r })
          : u.intl.formatToPlainString(u.t.euizJY, { gamePublisher: r, gameTitle: i });
}
function _(e) {
    return e.config.ctaConfig.buttonLabel;
}
function f(e) {
    switch (e) {
        case l.kL.SUGGESTED:
            return u.intl.string(u.t.gBfXPZ);
        case l.kL.MOST_RECENT:
            return u.intl.string(u.t.K6oEu2);
        case l.kL.EXPIRING_SOON:
            return u.intl.string(u.t.IB22n3);
        case l.kL.RECENTLY_ENROLLED:
            return u.intl.string(u.t["BB+2tX"]);
    }
}
function p(e) {
    switch (e) {
        case l.BQ.VIRTUAL_CURRENCY:
            return u.intl.string(u.t.ElYQFS);
        case l.BQ.COLLECTIBLE:
            return u.intl.string(u.t.Jg17Ut);
        case l.BQ.IN_GAME:
            return u.intl.string(u.t["O/J2kr"]);
        case l.Pc.VIDEO:
            return u.intl.string(u.t.e0iISA);
        case l.Pc.PLAY:
            return u.intl.string(u.t["1nJR4p"]);
    }
}
function h(e) {
    switch (e) {
        case "reward":
            return u.intl.string(u.t.vjLqAU);
        case "task":
            return u.intl.string(u.t.Hufmss);
    }
}
let m = (e) => `${location.protocol}//${location.host}/quests/${e}`;
function g(e) {
    return e.ctaConfig.link;
}
let E = (e, t) => {
    (0, s.Y5)({
        questId: e,
        questContent: t.content,
        questContentCTA: t.ctaContent,
        questContentPosition: t.position,
        impressionId: t.impressionId,
        sourceQuestContent: t.sourceQuestContent,
    }),
        (0, r.C)(m(e));
};
function A(e) {
    if (0 === e.rewardsConfig.rewards.length) throw Error(`Quest ${e.id} has no rewards configured`);
    return e.rewardsConfig.rewards[0];
}
let I = (e) => {
    let { hasVideoAsset: t, playerState: n, pauseReason: r } = e;
    return t
        ? n === o.Q6.PAUSED && r === a.Yg.LOST_FOCUS
            ? u.intl.string(u.t["U7Xrb+"])
            : null
        : (0, i.isWeb)()
          ? u.intl.string(u.t["E1du/q"])
          : u.intl.string(u.t["rStN/7"]);
};
