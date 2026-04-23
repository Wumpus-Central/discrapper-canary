l.d(t, { A: () => d });
var a = l(64700),
    n = l(554146),
    r = l(228366),
    i = l(20439),
    o = l(890687),
    s = l(654487);
let d = () => {
    let e = (0, i.A)(n.M.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL),
        t = (0, i.A)(n.M.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK),
        l = (0, i.A)(n.M.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK),
        d = a.useCallback(() => {
            e.isDismissed && e.handleToggleDismissState(),
                t.isDismissed && t.handleToggleDismissState(),
                l.isDismissed && l.handleToggleDismissState(),
                r.h.dispatch({ type: "VIRTUAL_CURRENCY_ONBOARDING_MODAL_RESET" });
        }, [t, l, e]),
        { handleResetStatusClick: c } = (0, o.j$)(s.Fw);
    return { resetOnboardingExperience: d, resetQuestStatus: c };
};
