n.d(t, { Z: () => m }), n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817);
var i = n(192379),
    s = n(442837),
    r = n(704215),
    l = n(570140),
    a = n(804501),
    o = n(113434),
    c = n(581883),
    d = n(751648),
    u = n(642145);
let m = () => {
    var e;
    let t =
            null !==
                (e = (0, s.e7)([c.Z], () => {
                    var e;
                    return null === (e = c.Z.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents;
                })) && void 0 !== e
                ? e
                : new Uint8Array(),
        n = (0, a.x)(r.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL, t),
        m = i.useCallback(() => {
            n.isDismissed && n.handleToggleDismissState(), (0, d.l)(), l.Z.dispatch({ type: 'VIRTUAL_CURRENCY_ONBOARDING_MODAL_RESET' });
        }, [n]),
        { handleResetStatusClick: h } = (0, o.kJ)(u.V);
    return {
        resetOnboardingAnnouncementModal: m,
        resetQuestStatus: h
    };
};
