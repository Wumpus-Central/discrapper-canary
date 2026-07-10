n.d(e, { A: () => q });
var s = n(627968),
    u = n(64700),
    o = n(17928),
    i = n(661531),
    l = n(990078),
    c = n(242644),
    r = n(821609),
    a = n(775602),
    d = n(347135),
    C = n(801365),
    f = n(792620),
    S = n(630037),
    p = n(793574),
    A = n(662388),
    h = n(371912),
    m = n(758836),
    g = n(375708);
function x(t) {
    let { quest: e, onClaimRewardClick: n, size: u = "md" } = t,
        S = (0, d.LS)(e),
        p = (0, o.bG)([a.Ay], () => a.Ay.useReducedMotion),
        A = null != (0, C._Z)(e.config),
        h = (0, f.vv)(e),
        m =
            e.userStatus?.claimedAt != null
                ? A
                    ? g.intl.string(g.t.WYchde)
                    : g.intl.string(g.t.vTgCWx)
                : g.intl.string(g.t.cfY4PE),
        x =
            e.userStatus?.completedAt == null
                ? S
                    ? g.intl.string(g.t.NJ6Bnm)
                    : h
                      ? g.intl.string(g.t.USNO1K)
                      : void 0
                : void 0;
    return (0, s.jsx)(l.m, {
        text: x,
        children: (0, s.jsx)("div", {
            children: (0, s.jsx)(r.$, {
                variant: "secondary",
                fullWidth: !0,
                icon: (function (t, e) {
                    if (t.userStatus?.claimedAt == null)
                        return {
                            type: "rive",
                            asset: c.V,
                            riveProps: {
                                withReducedMotion: "play",
                                dataBinding: {
                                    locked: t.userStatus?.completedAt === null,
                                    fill: i.A.colors.ICON_STRONG,
                                    reducedMotion: e,
                                },
                            },
                        };
                })(e, p),
                onClick: n,
                text: m,
                disabled: e.userStatus?.completedAt == null,
                size: u,
            }),
        }),
    });
}
function k(t) {
    let e = (0, S.D)({
        quest: t.quest,
        questContent: t.questContent,
        sourceQuestContent: t.sourceQuestContent,
        onCloseModal: t.onClose,
    });
    return (0, s.jsx)(x, { ...t, onClaimRewardClick: e });
}
function v(t) {
    let e = (function (t) {
        let {
                quest: e,
                questContent: n,
                sourceQuestContent: s,
                onCloseModal: o,
                shouldShowShopIfAlreadyClaimed: i,
            } = t,
            l = (0, h.ix)({ quest: e, questContent: n, sourceQuestContent: s });
        return u.useCallback(
            (t) => {
                (0, C.ks)(e.config) && e.userStatus?.claimedAt != null && i
                    ? (o?.(t),
                      (0, A.Cz)({ tab: m.G2.ORBS, analyticsLocations: [], analyticsSource: p.A.QUEST_HOME_PAGE }))
                    : ((0, C.K9)(e.config) && o?.(t), l());
            },
            [e.config, e.userStatus?.claimedAt, l, i, o],
        );
    })({
        quest: t.quest,
        questContent: t.questContent,
        sourceQuestContent: t.sourceQuestContent,
        onCloseModal: t.onClose,
        shouldShowShopIfAlreadyClaimed: !0,
    });
    return (0, s.jsx)(x, { ...t, onClaimRewardClick: e });
}
function q(t) {
    let { shouldRedirectToQuestHome: e = !0, ...n } = t;
    return e ? (0, s.jsx)(k, { ...n }) : (0, s.jsx)(v, { ...n });
}
