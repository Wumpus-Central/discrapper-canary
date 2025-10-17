n.d(t, { Z: () => c });
var a = n(647438),
    r = n(704215),
    i = n(570140),
    l = n(972118),
    o = n(113434),
    s = n(46140);
let c = () => {
    let e = (0, l.Z)(r.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL),
        t = (0, l.Z)(r.z.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK),
        n = (0, l.Z)(r.z.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK),
        c = a.useCallback(() => {
            e.isDismissed && e.handleToggleDismissState(),
                t.isDismissed && t.handleToggleDismissState(),
                n.isDismissed && n.handleToggleDismissState(),
                i.Z.dispatch({ type: "VIRTUAL_CURRENCY_ONBOARDING_MODAL_RESET" });
        }, [t, n, e]),
        { handleResetStatusClick: d } = (0, o.kJ)(s.V6);
    return {
        resetOnboardingExperience: c,
        resetQuestStatus: d,
    };
};
