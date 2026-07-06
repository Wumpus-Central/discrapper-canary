n.d(e, { A: () => q });
var s = n(627968),
    o = n(64700),
    u = n(17928),
    i = n(661531),
    l = n(990078),
    c = n(242644),
    r = n(821609),
    a = n(775602),
    d = n(347135),
    C = n(801365),
    f = n(792620),
    p = n(795965),
    S = n(793574),
    m = n(662388),
    A = n(371912),
    h = n(758836),
    x = n(375708);
function g(t) {
    let { quest: e, onClaimRewardClick: n, size: o = "md" } = t,
        p = (0, d.LS)(e),
        S = (0, u.bG)([a.Ay], () => a.Ay.useReducedMotion),
        m = null != (0, C._Z)(e.config),
        A = (0, f.vv)(e),
        h =
            e.userStatus?.claimedAt != null
                ? m
                    ? x.intl.string(x.t.WYchde)
                    : x.intl.string(x.t.vTgCWx)
                : x.intl.string(x.t.cfY4PE),
        g =
            e.userStatus?.completedAt == null
                ? p
                    ? x.intl.string(x.t.NJ6Bnm)
                    : A
                      ? x.intl.string(x.t.USNO1K)
                      : void 0
                : void 0;
    return (0, s.jsx)(l.m, {
        text: g,
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
                })(e, S),
                onClick: n,
                text: h,
                disabled: e.userStatus?.completedAt == null,
                size: o,
            }),
        }),
    });
}
function k(t) {
    let { experimentLocation: e, ...n } = t,
        o = (0, p.D)({
            quest: n.quest,
            questContent: n.questContent,
            sourceQuestContent: n.sourceQuestContent,
            experimentLocation: e,
            onCloseModal: n.onClose,
        });
    return (0, s.jsx)(g, { ...n, onClaimRewardClick: o });
}
function v(t) {
    let e = (function (t) {
        let {
                quest: e,
                questContent: n,
                sourceQuestContent: s,
                onCloseModal: u,
                shouldShowShopIfAlreadyClaimed: i,
            } = t,
            l = (0, A.ix)({ quest: e, questContent: n, sourceQuestContent: s });
        return o.useCallback(
            (t) => {
                (0, C.ks)(e.config) && e.userStatus?.claimedAt != null && i
                    ? (u?.(t),
                      (0, m.Cz)({ tab: h.G2.ORBS, analyticsLocations: [], analyticsSource: S.A.QUEST_HOME_PAGE }))
                    : ((0, C.K9)(e.config) && u?.(t), l());
            },
            [e.config, e.userStatus?.claimedAt, l, i, u],
        );
    })({
        quest: t.quest,
        questContent: t.questContent,
        sourceQuestContent: t.sourceQuestContent,
        onCloseModal: t.onClose,
        shouldShowShopIfAlreadyClaimed: !0,
    });
    return (0, s.jsx)(g, { ...t, onClaimRewardClick: e });
}
function q(t) {
    let { experimentLocation: e, ...n } = t;
    return null != e ? (0, s.jsx)(k, { ...n, experimentLocation: e }) : (0, s.jsx)(v, { ...n });
}
