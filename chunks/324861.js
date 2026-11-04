var a = l(582128),
    n = l(554146),
    i = l(73153),
    r = l(20439),
    o = l(61387),
    s = l(221596);
l.d(
    t,
    {},
    {
        A: function () {
            let e = (0, r.A)(n.M.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL),
                t = (0, r.A)(n.M.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK),
                l = (0, r.A)(n.M.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK),
                u = a.useCallback(() => {
                    (e.isDismissed && e.handleToggleDismissState(),
                        t.isDismissed && t.handleToggleDismissState(),
                        l.isDismissed && l.handleToggleDismissState(),
                        i.h.dispatch({ type: "VIRTUAL_CURRENCY_ONBOARDING_MODAL_RESET" }));
                }, [t, l, e]),
                { handleResetStatusClick: d } = (0, o.j$)(s.Fw);
            return { resetOnboardingExperience: u, resetQuestStatus: d };
        },
    },
);
