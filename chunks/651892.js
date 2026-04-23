n.d(t, {
    JM: () => l,
    Js: () => E,
    Jx: () => u,
    Xm: () => I,
    YT: () => _,
    fx: () => c,
    up: () => d,
    wr: () => o,
    xv: () => A,
});
var i = n(957565),
    r = n(561844),
    a = n(654487),
    s = n(985018);
function _(e) {
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
function l(e) {
    let {
        isTargetedDisclosure: t,
        isContextualDisclosure: n,
        isVideoQuest: i,
        gamePublisher: r,
        gameTitle: a,
        cosponsorName: _,
    } = e;
    if (t) {
        if (n) return s.intl.string(s.t.nPg6f1);
        let e =
            null == _
                ? s.intl.formatToPlainString(s.t.Piihy1, { gamePublisher: r })
                : s.intl.formatToPlainString(s.t.DV47Gy, { gamePublisher: r, cosponsorName: _ });
        return `${e} ${s.intl.string(s.t.fEbrT8)}`;
    }
    return i
        ? s.intl.formatToPlainString(s.t.zDHY3s, { gamePublisher: r })
        : s.intl.formatToPlainString(s.t.euizJY, { gamePublisher: r, gameTitle: a });
}
function o(e) {
    return e.config.ctaConfig.buttonLabel;
}
function E(e) {
    switch (e) {
        case a.kL.SUGGESTED:
            return s.intl.string(s.t.gBfXPZ);
        case a.kL.MOST_RECENT:
            return s.intl.string(s.t.K6oEu2);
        case a.kL.EXPIRING_SOON:
            return s.intl.string(s.t.IB22n3);
        case a.kL.RECENTLY_ENROLLED:
            return s.intl.string(s.t["BB+2tX"]);
    }
}
function d(e) {
    switch (e) {
        case a.BQ.VIRTUAL_CURRENCY:
            return s.intl.string(s.t.ElYQFS);
        case a.BQ.COLLECTIBLE:
            return s.intl.string(s.t.Jg17Ut);
        case a.BQ.IN_GAME:
            return s.intl.string(s.t["O/J2kr"]);
        case a.Pc.VIDEO:
            return s.intl.string(s.t.e0iISA);
        case a.Pc.PLAY:
            return s.intl.string(s.t["1nJR4p"]);
    }
}
function c(e) {
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
let I = (e, t) => {
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
function A(e) {
    if (0 === e.rewardsConfig.rewards.length) throw Error(`Quest ${e.id} has no rewards configured`);
    return e.rewardsConfig.rewards[0];
}
