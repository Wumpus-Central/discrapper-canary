"use strict";
n.d(t, {
    JM: () => _,
    Js: () => f,
    Jx: () => m,
    Xm: () => g,
    YT: () => d,
    fx: () => E,
    up: () => p,
    wr: () => h,
    xv: () => A,
});
var i = n(323889),
    r = n(274670),
    s = n(144779),
    a = n(957565),
    o = n(104886),
    l = n(561844),
    u = n(190107),
    c = n(375708);
function d(e) {
    let { quest: t, taskDetails: n, thirdPartyTaskDetails: i } = e;
    if (t.userStatus?.completedAt != null) return c.intl.string(c.t.BzFeTF);
    if (t.userStatus?.enrolledAt != null) {
        let { percentComplete: e } = n,
            t = null != i ? i.percentComplete : e;
        return t >= 0.75
            ? c.intl.string(c.t.gvCR4H)
            : t >= 0.45 && t <= 0.55
              ? c.intl.string(c.t.JNx8sG)
              : t > 0
                ? c.intl.string(c.t.JMbfnc)
                : c.intl.string(c.t["7e5k7L"]);
    }
    return c.intl.formatToPlainString(c.t.EQa7os, { questName: t.config.messages.questName });
}
function _(e) {
    let {
        isTargetedDisclosure: t,
        isContextualDisclosure: n,
        isVideoQuest: i,
        gamePublisher: r,
        gameTitle: s,
        cosponsorName: a,
    } = e;
    if (t) {
        if (n) return c.intl.string(c.t.nPg6f1);
        let e =
            null == a
                ? c.intl.formatToPlainString(c.t.Piihy1, { gamePublisher: r })
                : c.intl.formatToPlainString(c.t.DV47Gy, { gamePublisher: r, cosponsorName: a });
        return `${e} ${c.intl.string(c.t.fEbrT8)}`;
    }
    return i
        ? c.intl.formatToPlainString(c.t.zDHY3s, { gamePublisher: r })
        : c.intl.formatToPlainString(c.t.euizJY, { gamePublisher: r, gameTitle: s });
}
function h(e) {
    return e.config.ctaConfig.buttonLabel;
}
function f(e) {
    switch (e) {
        case u.kL.SUGGESTED:
            return c.intl.string(c.t.gBfXPZ);
        case u.kL.MOST_RECENT:
            return c.intl.string(c.t.K6oEu2);
        case u.kL.EXPIRING_SOON:
            return c.intl.string(c.t.IB22n3);
        case u.kL.RECENTLY_ENROLLED:
            return c.intl.string(c.t["BB+2tX"]);
    }
}
function p(e) {
    switch (e) {
        case u.BQ.VIRTUAL_CURRENCY:
            return c.intl.string(c.t.ElYQFS);
        case u.BQ.COLLECTIBLE:
            return c.intl.string(c.t.Jg17Ut);
        case u.BQ.IN_GAME:
            return c.intl.string(c.t["O/J2kr"]);
        case u.Pc.VIDEO:
            return c.intl.string(c.t.e0iISA);
        case u.Pc.PLAY:
            return c.intl.string(c.t["1nJR4p"]);
    }
}
function E(e) {
    switch (e) {
        case "reward":
            return c.intl.string(c.t.vjLqAU);
        case "task":
            return c.intl.string(c.t.Hufmss);
    }
}
function m(e) {
    return e.ctaConfig.link;
}
function g(e, t) {
    let { ctaContent: n } = t;
    (0, o.E5)(o.kI.STEP_2_CLICKED_INTERNAL, "copy_share_link")
        ? (0, r.r)({
              type: s.F.CLICK_INTERNAL,
              adCreativeType: i.p.QUEST,
              adCreativeId: e,
              questContentCTA: n,
              surfaceId: t.content,
              sourceQuestContent: t.sourceQuestContent,
              questContentPosition: t.position,
              impressionId: t.impressionId,
          })
        : (0, l.Y5)({
              questId: e,
              questContent: t.content,
              questContentCTA: n,
              questContentPosition: t.position,
              impressionId: t.impressionId,
              sourceQuestContent: t.sourceQuestContent,
          }),
        (0, a.C)(`${location.protocol}//${location.host}/quests/${e}`);
}
function A(e) {
    if (0 === e.rewardsConfig.rewards.length) throw Error(`Quest ${e.id} has no rewards configured`);
    return e.rewardsConfig.rewards[0];
}
