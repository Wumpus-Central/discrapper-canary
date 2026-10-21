n.d(t, {
    JM: () => c,
    Js: () => _,
    Jx: () => h,
    Xm: () => f,
    YT: () => d,
    fx: () => A,
    up: () => E,
    wr: () => u,
    xv: () => I,
});
var i = n(323889),
    r = n(274670),
    a = n(144779),
    s = n(957565),
    l = n(190107),
    o = n(105292);
function d(e) {
    let { quest: t, taskDetails: n, thirdPartyTaskDetails: i } = e;
    if (t.userStatus?.completedAt != null) return o.intl.string(o.t.BzFeTF);
    if (t.userStatus?.enrolledAt != null) {
        let { percentComplete: e } = n,
            t = null != i ? i.percentComplete : e;
        return t >= 0.75
            ? o.intl.string(o.t.gvCR4H)
            : t >= 0.45 && t <= 0.55
              ? o.intl.string(o.t.JNx8sG)
              : t > 0
                ? o.intl.string(o.t.JMbfnc)
                : o.intl.string(o.t["7e5k7L"]);
    }
    return o.intl.formatToPlainString(o.t.EQa7os, { questName: t.config.messages.questName });
}
function c(e) {
    let {
            adCreativeType: t,
            isTargetedDisclosure: n,
            isContextualDisclosure: r,
            isVideoQuest: a,
            gamePublisher: s,
            gameTitle: l,
            cosponsorName: d,
        } = e,
        c = o.intl.string(o.t.fEbrT8);
    if (n) {
        if (r) return o.intl.string(o.t.nPg6f1);
        let e =
            null == d
                ? o.intl.formatToPlainString(o.t.Piihy1, { gamePublisher: s })
                : o.intl.formatToPlainString(o.t.DV47Gy, { gamePublisher: s, cosponsorName: d });
        return `${e} ${c}`;
    }
    return t !== i.p.QUEST
        ? c
        : a
          ? o.intl.formatToPlainString(o.t.zDHY3s, { gamePublisher: s })
          : o.intl.formatToPlainString(o.t.euizJY, { gamePublisher: s, gameTitle: l ?? "" });
}
function u(e) {
    return e.config.ctaConfig.buttonLabel;
}
function _(e) {
    switch (e) {
        case l.kL.SUGGESTED:
            return o.intl.string(o.t.gBfXPZ);
        case l.kL.MOST_RECENT:
            return o.intl.string(o.t.K6oEu2);
        case l.kL.EXPIRING_SOON:
            return o.intl.string(o.t.IB22n3);
        case l.kL.RECENTLY_ENROLLED:
            return o.intl.string(o.t["BB+2tX"]);
    }
}
function E(e) {
    switch (e) {
        case l.BQ.VIRTUAL_CURRENCY:
            return o.intl.string(o.t.ElYQFS);
        case l.BQ.COLLECTIBLE:
            return o.intl.string(o.t.Jg17Ut);
        case l.BQ.IN_GAME:
            return o.intl.string(o.t["O/J2kr"]);
        case l.Pc.VIDEO:
            return o.intl.string(o.t.e0iISA);
        case l.Pc.PLAY:
            return o.intl.string(o.t["1nJR4p"]);
    }
}
function A(e) {
    switch (e) {
        case "reward":
            return o.intl.string(o.t.vjLqAU);
        case "task":
            return o.intl.string(o.t.Hufmss);
    }
}
function h(e) {
    return e.ctaConfig.link;
}
function f(e, t) {
    let { ctaContent: n } = t;
    ((0, r.r)({
        type: a.F.CLICK_INTERNAL,
        adCreativeType: i.p.QUEST,
        adCreativeId: e,
        questContentCTA: n,
        surfaceId: t.content,
        sourceQuestContent: t.sourceQuestContent,
        questContentPosition: t.position,
        impressionId: t.impressionId,
    }),
        (0, s.C)(`${location.protocol}//${location.host}/quests/${e}`));
}
function I(e) {
    if (0 === e.rewardsConfig.rewards.length) throw Error(`Quest ${e.id} has no rewards configured`);
    return e.rewardsConfig.rewards[0];
}
