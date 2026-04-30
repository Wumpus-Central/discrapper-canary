n.d(t, {
    JM: () => o,
    Js: () => c,
    Jx: () => u,
    Xm: () => A,
    YT: () => l,
    fx: () => E,
    up: () => _,
    wr: () => d,
    xv: () => I,
});
var i = n(957565),
    a = n(561844),
    r = n(654487),
    s = n(985018);
function l(e) {
    let { quest: t, taskDetails: n, thirdPartyTaskDetails: i } = e;
    if (t.userStatus?.completedAt != null) return s.intl.string(s.t.BzFeTF);
    if (t.userStatus?.enrolledAt != null) {
        let { percentComplete: e } = n,
            t = null != i ? i.percentComplete : e;
        return t >= 0.75
            ? s.intl.string(s.t.gvCR4H)
            : t >= 0.45 && t <= 0.55
              ? s.intl.string(s.t.JNx8sG)
              : t > 0
                ? s.intl.string(s.t.JMbfnc)
                : s.intl.string(s.t["7e5k7L"]);
    }
    return s.intl.formatToPlainString(s.t.EQa7os, { questName: t.config.messages.questName });
}
function o(e) {
    let {
        isTargetedDisclosure: t,
        isContextualDisclosure: n,
        isVideoQuest: i,
        gamePublisher: a,
        gameTitle: r,
        cosponsorName: l,
    } = e;
    if (t) {
        if (n) return s.intl.string(s.t.nPg6f1);
        let e =
            null == l
                ? s.intl.formatToPlainString(s.t.Piihy1, { gamePublisher: a })
                : s.intl.formatToPlainString(s.t.DV47Gy, { gamePublisher: a, cosponsorName: l });
        return `${e} ${s.intl.string(s.t.fEbrT8)}`;
    }
    return i
        ? s.intl.formatToPlainString(s.t.zDHY3s, { gamePublisher: a })
        : s.intl.formatToPlainString(s.t.euizJY, { gamePublisher: a, gameTitle: r });
}
function d(e) {
    return e.config.ctaConfig.buttonLabel;
}
function c(e) {
    switch (e) {
        case r.kL.SUGGESTED:
            return s.intl.string(s.t.gBfXPZ);
        case r.kL.MOST_RECENT:
            return s.intl.string(s.t.K6oEu2);
        case r.kL.EXPIRING_SOON:
            return s.intl.string(s.t.IB22n3);
        case r.kL.RECENTLY_ENROLLED:
            return s.intl.string(s.t["BB+2tX"]);
    }
}
function _(e) {
    switch (e) {
        case r.BQ.VIRTUAL_CURRENCY:
            return s.intl.string(s.t.ElYQFS);
        case r.BQ.COLLECTIBLE:
            return s.intl.string(s.t.Jg17Ut);
        case r.BQ.IN_GAME:
            return s.intl.string(s.t["O/J2kr"]);
        case r.Pc.VIDEO:
            return s.intl.string(s.t.e0iISA);
        case r.Pc.PLAY:
            return s.intl.string(s.t["1nJR4p"]);
    }
}
function E(e) {
    switch (e) {
        case "reward":
            return s.intl.string(s.t.vjLqAU);
        case "task":
            return s.intl.string(s.t.Hufmss);
    }
}
function u(e) {
    return e.ctaConfig.link;
}
let A = (e, t) => {
    (0, a.Y5)({
        questId: e,
        questContent: t.content,
        questContentCTA: t.ctaContent,
        questContentPosition: t.position,
        impressionId: t.impressionId,
        sourceQuestContent: t.sourceQuestContent,
    }),
        (0, i.C)(`${location.protocol}//${location.host}/quests/${e}`);
};
function I(e) {
    if (0 === e.rewardsConfig.rewards.length) throw Error(`Quest ${e.id} has no rewards configured`);
    return e.rewardsConfig.rewards[0];
}
