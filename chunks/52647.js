n.d(t, { Z: () => m }), n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817), n(610885), n(126298);
var r = n(192379),
    i = n(442837),
    s = n(704215),
    a = n(570140),
    l = n(804501),
    o = n(113434),
    c = n(581883),
    d = n(751648),
    u = n(642145);
let m = () => {
    var e;
    let t =
            null !==
                (e = (0, i.e7)([c.Z], () => {
                    var e;
                    return null === (e = c.Z.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents;
                })) && void 0 !== e
                ? e
                : new Uint8Array(),
        n = (0, l.x)(s.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL, t),
        m = r.useCallback(() => {
            n.isDismissed && n.handleToggleDismissState(), (0, d.l)(), a.Z.dispatch({ type: 'VIRTUAL_CURRENCY_ONBOARDING_MODAL_RESET' });
        }, [n]),
        { handleResetStatusClick: g } = (0, o.kJ)(u.V);
    return {
        resetOnboardingAnnouncementModal: m,
        resetQuestStatus: g
    };
};
