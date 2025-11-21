n.d(t, { Z: () => c });
var r = n(473749),
    i = n(704215),
    a = n(570140),
    o = n(972118),
    s = n(313481),
    l = n(324805);
let c = () => {
    let e = (0, o.Z)(i.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL),
        t = (0, o.Z)(i.z.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK),
        n = (0, o.Z)(i.z.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK),
        c = r.useCallback(() => {
            e.isDismissed && e.handleToggleDismissState(),
                t.isDismissed && t.handleToggleDismissState(),
                n.isDismissed && n.handleToggleDismissState(),
                a.Z.dispatch({ type: "VIRTUAL_CURRENCY_ONBOARDING_MODAL_RESET" });
        }, [t, n, e]),
        { handleResetStatusClick: u } = (0, s.kJ)(l.V6);
    return {
        resetOnboardingExperience: c,
        resetQuestStatus: u,
    };
};
