"use strict";
n.d(t, {
    JM: () => E,
    Js: () => h,
    Jx: () => p,
    Xm: () => T,
    YT: () => u,
    fx: () => f,
    up: () => I,
    wr: () => A,
    xv: () => m,
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
let _ = {
    [i.p.QUEST]: { signals: c.t.fEbrT8, contextualSignals: c.t.nPg6f1 },
    [i.p.BOUNTY]: { signals: c.t.Wx2B4V, contextualSignals: c.t.f7iZVO },
};
function E(e) {
    let {
            adCreativeType: t,
            isTargetedDisclosure: n,
            isContextualDisclosure: r,
            isVideoQuest: a,
            gamePublisher: s,
            gameTitle: l,
            cosponsorName: o,
        } = e,
        d = _[t];
    if (n) {
        if (r) return c.intl.string(d.contextualSignals);
        let e =
            null == o
                ? c.intl.formatToPlainString(c.t.Piihy1, { gamePublisher: s })
                : c.intl.formatToPlainString(c.t.DV47Gy, { gamePublisher: s, cosponsorName: o });
        return `${e} ${c.intl.string(d.signals)}`;
    }
    return t !== i.p.QUEST
        ? c.intl.string(d.signals)
        : a
          ? c.intl.formatToPlainString(c.t.zDHY3s, { gamePublisher: s })
          : c.intl.formatToPlainString(c.t.euizJY, { gamePublisher: s, gameTitle: l ?? "" });
}
function A(e) {
    return e.config.ctaConfig.buttonLabel;
}
function h(e) {
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
function I(e) {
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
function f(e) {
    switch (e) {
        case "reward":
            return c.intl.string(c.t.vjLqAU);
        case "task":
            return c.intl.string(c.t.Hufmss);
    }
}
function p(e) {
    return e.ctaConfig.link;
}
function T(e, t) {
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
function m(e) {
    if (0 === e.rewardsConfig.rewards.length) throw Error(`Quest ${e.id} has no rewards configured`);
    return e.rewardsConfig.rewards[0];
}
