n.d(t, { Z: () => d }),
    n(410992),
    n(227481),
    n(730884),
    n(20464),
    n(341884),
    n(364341),
    n(629680),
    n(505025),
    n(918970),
    n(121784),
    n(644351),
    n(146733);
var r = n(647438),
    i = n(442837),
    a = n(704215),
    o = n(570140),
    s = n(972118),
    l = n(113434),
    c = n(581883),
    u = n(46140);
let d = () => {
    var e;
    let t =
            null !=
            (e = (0, i.e7)([c.Z], () => {
                var e;
                return null == (e = c.Z.settings.userContent) ? void 0 : e.dismissedContents;
            }))
                ? e
                : new Uint8Array(),
        n = (0, s.Z)(a.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL, t),
        d = (0, s.Z)(a.z.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK, t),
        f = (0, s.Z)(a.z.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK, t),
        _ = r.useCallback(() => {
            n.isDismissed && n.handleToggleDismissState(),
                d.isDismissed && d.handleToggleDismissState(),
                f.isDismissed && f.handleToggleDismissState(),
                o.Z.dispatch({ type: "VIRTUAL_CURRENCY_ONBOARDING_MODAL_RESET" });
        }, [d, f, n]),
        { handleResetStatusClick: p } = (0, l.kJ)(u.V6);
    return {
        resetOnboardingAnnouncementModal: _,
        resetQuestStatus: p,
    };
};
