l.d(t, { A: () => u });
var a = l(64700),
    n = l(554146),
    r = l(73153),
    i = l(20439),
    s = l(890687),
    o = l(654487);
let u = () => {
    let e = (0, i.A)(n.M.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL),
        t = (0, i.A)(n.M.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK),
        l = (0, i.A)(n.M.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK),
        u = a.useCallback(() => {
            e.isDismissed && e.handleToggleDismissState(),
                t.isDismissed && t.handleToggleDismissState(),
                l.isDismissed && l.handleToggleDismissState(),
                r.h.dispatch({ type: "VIRTUAL_CURRENCY_ONBOARDING_MODAL_RESET" });
        }, [t, l, e]),
        { handleResetStatusClick: c } = (0, s.j$)(o.Fw);
    return { resetOnboardingExperience: u, resetQuestStatus: c };
};
