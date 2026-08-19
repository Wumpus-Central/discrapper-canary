"use strict";
n.d(t, {
    JM: () => _,
    Js: () => A,
    Jx: () => f,
    Xm: () => p,
    YT: () => u,
    fx: () => I,
    up: () => h,
    wr: () => E,
    xv: () => T,
});
var i = n(323889),
    r = n(274670),
    a = n(144779),
    s = n(957565),
    l = n(104886),
    o = n(561844),
    d = n(190107),
    c = n(375708);
function u(e) {
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
        gameTitle: a,
        cosponsorName: s,
    } = e;
    if (t) {
        if (n) return c.intl.string(c.t.nPg6f1);
        let e =
            null == s
                ? c.intl.formatToPlainString(c.t.Piihy1, { gamePublisher: r })
                : c.intl.formatToPlainString(c.t.DV47Gy, { gamePublisher: r, cosponsorName: s });
        return `${e} ${c.intl.string(c.t.fEbrT8)}`;
    }
    return i
        ? c.intl.formatToPlainString(c.t.zDHY3s, { gamePublisher: r })
        : c.intl.formatToPlainString(c.t.euizJY, { gamePublisher: r, gameTitle: a });
}
function E(e) {
    return e.config.ctaConfig.buttonLabel;
}
function A(e) {
    switch (e) {
        case d.kL.SUGGESTED:
            return c.intl.string(c.t.gBfXPZ);
        case d.kL.MOST_RECENT:
            return c.intl.string(c.t.K6oEu2);
        case d.kL.EXPIRING_SOON:
            return c.intl.string(c.t.IB22n3);
        case d.kL.RECENTLY_ENROLLED:
            return c.intl.string(c.t["BB+2tX"]);
    }
}
function h(e) {
    switch (e) {
        case d.BQ.VIRTUAL_CURRENCY:
            return c.intl.string(c.t.ElYQFS);
        case d.BQ.COLLECTIBLE:
            return c.intl.string(c.t.Jg17Ut);
        case d.BQ.IN_GAME:
            return c.intl.string(c.t["O/J2kr"]);
        case d.Pc.VIDEO:
            return c.intl.string(c.t.e0iISA);
        case d.Pc.PLAY:
            return c.intl.string(c.t["1nJR4p"]);
    }
}
function I(e) {
    switch (e) {
        case "reward":
            return c.intl.string(c.t.vjLqAU);
        case "task":
            return c.intl.string(c.t.Hufmss);
    }
}
function f(e) {
    return e.ctaConfig.link;
}
function p(e, t) {
    let { ctaContent: n } = t;
    (0, l.E5)(l.kI.STEP_2_CLICKED_INTERNAL, "copy_share_link")
        ? (0, r.r)({
              type: a.F.CLICK_INTERNAL,
              adCreativeType: i.p.QUEST,
              adCreativeId: e,
              questContentCTA: n,
              surfaceId: t.content,
              sourceQuestContent: t.sourceQuestContent,
              questContentPosition: t.position,
              impressionId: t.impressionId,
          })
        : (0, o.Y5)({
              questId: e,
              questContent: t.content,
              questContentCTA: n,
              questContentPosition: t.position,
              impressionId: t.impressionId,
              sourceQuestContent: t.sourceQuestContent,
          }),
        (0, s.C)(`${location.protocol}//${location.host}/quests/${e}`);
}
function T(e) {
    if (0 === e.rewardsConfig.rewards.length) throw Error(`Quest ${e.id} has no rewards configured`);
    return e.rewardsConfig.rewards[0];
}
