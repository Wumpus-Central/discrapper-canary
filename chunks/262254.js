"use strict";
n.d(t, { A: () => y });
var i = n(627968),
    r = n(64700),
    s = n(17928),
    a = n(661531),
    o = n(990078),
    l = n(242644),
    u = n(821609),
    c = n(775602),
    d = n(347135),
    _ = n(801365),
    h = n(792620),
    f = n(795965),
    p = n(793574),
    E = n(662388),
    m = n(371912),
    g = n(758836),
    A = n(375708);
function I(e) {
    let { quest: t, onClaimRewardClick: n, size: r = "md" } = e,
        f = (0, d.LS)(t),
        p = (0, s.bG)([c.Ay], () => c.Ay.useReducedMotion),
        E = null != (0, _._Z)(t.config),
        m = (0, h.vv)(t),
        g =
            t.userStatus?.claimedAt != null
                ? E
                    ? A.intl.string(A.t.WYchde)
                    : A.intl.string(A.t.vTgCWx)
                : A.intl.string(A.t.cfY4PE),
        I =
            t.userStatus?.completedAt == null
                ? f
                    ? A.intl.string(A.t.NJ6Bnm)
                    : m
                      ? A.intl.string(A.t.USNO1K)
                      : void 0
                : void 0;
    return (0, i.jsx)(o.m, {
        text: I,
        children: (0, i.jsx)("div", {
            children: (0, i.jsx)(u.$, {
                variant: "secondary",
                fullWidth: !0,
                icon: (function (e, t) {
                    if (e.userStatus?.claimedAt == null)
                        return {
                            type: "rive",
                            asset: l.V,
                            riveProps: {
                                withReducedMotion: "play",
                                dataBinding: {
                                    locked: e.userStatus?.completedAt === null,
                                    fill: a.A.colors.ICON_STRONG,
                                    reducedMotion: t,
                                },
                            },
                        };
                })(t, p),
                onClick: n,
                text: g,
                disabled: t.userStatus?.completedAt == null,
                size: r,
            }),
        }),
    });
}
function T(e) {
    let { experimentLocation: t, ...n } = e,
        r = (0, f.D)({
            quest: n.quest,
            questContent: n.questContent,
            sourceQuestContent: n.sourceQuestContent,
            experimentLocation: t,
            onCloseModal: n.onClose,
        });
    return (0, i.jsx)(I, { ...n, onClaimRewardClick: r });
}
function S(e) {
    let t = (function (e) {
        let {
                quest: t,
                questContent: n,
                sourceQuestContent: i,
                onCloseModal: s,
                shouldShowShopIfAlreadyClaimed: a,
            } = e,
            o = (0, m.ix)({ quest: t, questContent: n, sourceQuestContent: i });
        return r.useCallback(
            (e) => {
                (0, _.ks)(t.config) && t.userStatus?.claimedAt != null && a
                    ? (s?.(e),
                      (0, E.Cz)({ tab: g.G2.ORBS, analyticsLocations: [], analyticsSource: p.A.QUEST_HOME_PAGE }))
                    : ((0, _.K9)(t.config) && s?.(e), o());
            },
            [t.config, t.userStatus?.claimedAt, o, a, s],
        );
    })({
        quest: e.quest,
        questContent: e.questContent,
        sourceQuestContent: e.sourceQuestContent,
        onCloseModal: e.onClose,
        shouldShowShopIfAlreadyClaimed: !0,
    });
    return (0, i.jsx)(I, { ...e, onClaimRewardClick: t });
}
function y(e) {
    let { experimentLocation: t, ...n } = e;
    return null != t ? (0, i.jsx)(T, { ...n, experimentLocation: t }) : (0, i.jsx)(S, { ...n });
}
