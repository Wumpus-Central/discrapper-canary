n.d(t, { Z: () => u }), n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817), n(610885), n(126298);
var r = n(192379),
    i = n(442837),
    s = n(704215),
    a = n(570140),
    l = n(804501),
    o = n(113434),
    c = n(581883),
    d = n(46140);
let u = () => {
    var e;
    let t =
            null !=
            (e = (0, i.e7)([c.Z], () => {
                var e;
                return null == (e = c.Z.settings.userContent) ? void 0 : e.dismissedContents;
            }))
                ? e
                : new Uint8Array(),
        n = (0, l.x)(s.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL, t),
        u = (0, l.x)(s.z.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK, t),
        m = (0, l.x)(s.z.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK, t),
        g = r.useCallback(() => {
            n.isDismissed && n.handleToggleDismissState(), u.isDismissed && u.handleToggleDismissState(), m.isDismissed && m.handleToggleDismissState(), a.Z.dispatch({ type: 'VIRTUAL_CURRENCY_ONBOARDING_MODAL_RESET' });
        }, [u, m, n]),
        { handleResetStatusClick: p } = (0, o.kJ)(d.V6);
    return {
        resetOnboardingAnnouncementModal: g,
        resetQuestStatus: p
    };
};
