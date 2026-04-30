l.d(t, { A: () => u });
var a = l(64700),
    n = l(554146),
    i = l(228366),
    r = l(20439),
    o = l(31587),
    s = l(190107);
let u = () => {
    let e = (0, r.A)(n.M.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL),
        t = (0, r.A)(n.M.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK),
        l = (0, r.A)(n.M.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK),
        u = a.useCallback(() => {
            e.isDismissed && e.handleToggleDismissState(),
                t.isDismissed && t.handleToggleDismissState(),
                l.isDismissed && l.handleToggleDismissState(),
                i.h.dispatch({ type: "VIRTUAL_CURRENCY_ONBOARDING_MODAL_RESET" });
        }, [t, l, e]),
        { handleResetStatusClick: d } = (0, o.j$)(s.Fw);
    return { resetOnboardingExperience: u, resetQuestStatus: d };
};
