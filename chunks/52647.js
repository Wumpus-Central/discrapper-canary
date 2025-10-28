n.d(t, { Z: () => c });
var a = n(647438),
    r = n(704215),
    l = n(570140),
    i = n(972118),
    o = n(113434),
    s = n(46140);
let c = () => {
    let e = (0, i.Z)(r.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL),
        t = (0, i.Z)(r.z.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK),
        n = (0, i.Z)(r.z.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK),
        c = a.useCallback(() => {
            e.isDismissed && e.handleToggleDismissState(),
                t.isDismissed && t.handleToggleDismissState(),
                n.isDismissed && n.handleToggleDismissState(),
                l.Z.dispatch({ type: "VIRTUAL_CURRENCY_ONBOARDING_MODAL_RESET" });
        }, [t, n, e]),
        { handleResetStatusClick: d } = (0, o.kJ)(s.V6);
    return {
        resetOnboardingExperience: c,
        resetQuestStatus: d,
    };
};
