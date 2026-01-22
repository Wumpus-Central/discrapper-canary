n.d(t, {
    A: () => c,
});
var r = n(64700),
    i = n(554146),
    a = n(73153),
    s = n(20439),
    o = n(890687),
    l = n(654487);
let c = () => {
    let e = (0, s.A)(i.M.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL),
        t = (0, s.A)(i.M.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK),
        n = (0, s.A)(i.M.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK),
        c = r.useCallback(() => {
            e.isDismissed && e.handleToggleDismissState(),
                t.isDismissed && t.handleToggleDismissState(),
                n.isDismissed && n.handleToggleDismissState(),
                a.h.dispatch({
                    type: "VIRTUAL_CURRENCY_ONBOARDING_MODAL_RESET",
                });
        }, [t, n, e]),
        { handleResetStatusClick: u } = (0, o.j$)(l.Fw);
    return {
        resetOnboardingExperience: c,
        resetQuestStatus: u,
    };
};
