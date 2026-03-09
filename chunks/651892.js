"use strict";
n.d(t, {
    JM: () => d,
    Js: () => f,
    Jx: () => E,
    Xm: () => g,
    YT: () => c,
    fx: () => h,
    oK: () => I,
    up: () => p,
    wr: () => _,
    xv: () => A,
});
var r = n(957565),
    i = n(723702),
    s = n(341915),
    a = n(561844),
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
    let {
        isTargetedDisclosure: t,
        isContextualDisclosure: n,
        isVideoQuest: r,
        gamePublisher: i,
        gameTitle: s,
        cosponsorName: a,
    } = e;
    if (t) {
        let e =
                null == a
                    ? u.intl.formatToPlainString(u.t.Piihy1, { gamePublisher: i })
                    : u.intl.formatToPlainString(u.t.DV47Gy, { gamePublisher: i, cosponsorName: a }),
            t = n ? u.intl.string(u.t.nPg6f1) : u.intl.string(u.t.fEbrT8);
        return `${e} ${t}`;
    }
    return r
        ? u.intl.formatToPlainString(u.t.zDHY3s, { gamePublisher: i })
        : u.intl.formatToPlainString(u.t.euizJY, { gamePublisher: i, gameTitle: s });
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
function E(e) {
    return e.ctaConfig.link;
}
let g = (e, t) => {
    (0, a.Y5)({
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
        ? n === o.Q6.PAUSED && r === s.Yg.LOST_FOCUS
            ? u.intl.string(u.t.w6PeBF)
            : null
        : (0, i.isWeb)()
          ? u.intl.string(u.t["E1du/q"])
          : u.intl.string(u.t["rStN/7"]);
};
