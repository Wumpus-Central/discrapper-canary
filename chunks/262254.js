n.d(e, { A: () => y });
var s = n(477900),
    l = n(582128),
    u = n(17928),
    i = n(661531),
    o = n(242644),
    r = n(821609),
    c = n(866665),
    a = n(775602),
    d = n(309593),
    C = n(801365),
    S = n(792620),
    A = n(608935),
    f = n(617986),
    m = n(630037),
    p = n(793574),
    h = n(839534),
    v = n(130490),
    x = n(758836),
    g = n(375708);
function k(t) {
    let { quest: e, onClaimRewardClick: n, size: l = "md" } = t,
        m = (0, d.LS)(e),
        p = (0, d.Hv)(),
        h = (0, u.bG)([a.Ay], () => a.Ay.useReducedMotion),
        v = null != (0, C._Z)(e.config),
        x = (0, S.vv)(e),
        k =
            e.userStatus?.claimedAt != null
                ? v
                    ? g.intl.string(g.t.WYchde)
                    : g.intl.string(g.t.vTgCWx)
                : g.intl.string(g.t.cfY4PE),
        j = e.userStatus?.completedAt != null && e.userStatus?.claimedAt == null,
        q = p && j,
        y =
            e.userStatus?.completedAt == null
                ? m
                    ? g.intl.string(g.t.NJ6Bnm)
                    : x
                      ? g.intl.string(g.t.USNO1K)
                      : void 0
                : void 0,
        b = (0, s.jsx)(r.$, {
            variant: "secondary",
            fullWidth: !0,
            icon: (function (t, e) {
                if (t.userStatus?.claimedAt == null)
                    return {
                        type: "rive",
                        asset: o.V,
                        riveProps: {
                            withReducedMotion: "play",
                            dataBinding: {
                                locked: t.userStatus?.completedAt === null,
                                fill: i.A.colors.ICON_STRONG,
                                reducedMotion: e,
                            },
                        },
                    };
            })(e, h),
            onClick: q ? f.FS : n,
            text: k,
            disabled: e.userStatus?.completedAt == null,
            "aria-disabled": q || void 0,
            size: l,
        });
    return q
        ? (0, s.jsx)(A.A, { fitContent: !0, children: b })
        : (0, s.jsx)(c.m, { text: y, children: (0, s.jsx)("div", { children: b }) });
}
function j(t) {
    let e = (0, m.D)({
        quest: t.quest,
        questContent: t.questContent,
        sourceQuestContent: t.sourceQuestContent,
        onCloseModal: t.onClose,
    });
    return (0, s.jsx)(k, { ...t, onClaimRewardClick: e });
}
function q(t) {
    let e = (function (t) {
        let {
                quest: e,
                questContent: n,
                sourceQuestContent: s,
                onCloseModal: u,
                shouldShowShopIfAlreadyClaimed: i,
            } = t,
            o = (0, v.ix)({ quest: e, questContent: n, sourceQuestContent: s });
        return l.useCallback(
            (t) => {
                (0, C.ks)(e.config) && e.userStatus?.claimedAt != null && i
                    ? (u?.(t),
                      (0, h.Cz)({ tab: x.G2.ORBS, analyticsLocations: [], analyticsSource: p.A.QUEST_HOME_PAGE }))
                    : ((0, C.K9)(e.config) && u?.(t), o());
            },
            [e.config, e.userStatus?.claimedAt, o, i, u],
        );
    })({
        quest: t.quest,
        questContent: t.questContent,
        sourceQuestContent: t.sourceQuestContent,
        onCloseModal: t.onClose,
        shouldShowShopIfAlreadyClaimed: !0,
    });
    return (0, s.jsx)(k, { ...t, onClaimRewardClick: e });
}
function y(t) {
    let { shouldRedirectToQuestHome: e = !0, ...n } = t;
    return e ? (0, s.jsx)(j, { ...n }) : (0, s.jsx)(q, { ...n });
}
