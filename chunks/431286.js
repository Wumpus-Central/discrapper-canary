(n.d(t, { t: () => x }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(636977),
    o = n(442837),
    a = n(704215),
    s = n(952265),
    c = n(481060),
    u = n(570140),
    d = n(266454),
    h = n(243778),
    p = n(341907),
    f = n(819640),
    g = n(594174),
    m = n(74538),
    b = n(507808),
    _ = n(822857),
    O = n(479766),
    y = n(331663),
    v = n(981631),
    C = n(921944),
    j = n(46140);
let E = 'orb-announcement-modal-key';
function x() {
    let { enabled: e } = (0, _.hl)({ location: 'virtual_currency_announcement_modal' }),
        t = (0, o.e7)([O.Z], () => O.Z.onboardingModalOpenedPrior),
        { user: x } = (0, o.cj)([g.default], () => ({ user: g.default.getCurrentUser() })),
        S = (0, o.e7)([f.Z], () => f.Z.hasLayers()),
        I = (0, c.s9z)(c.JQI),
        P = t || (0, m.EO)(x) || S || I,
        [N, w] = (0, h.US)(e && !P ? [a.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL] : [], ...y.b.useSelectedDismissibleContent);
    i.useEffect(() => {
        N === a.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL &&
            (u.Z.dispatch({ type: 'VIRTUAL_CURRENCY_ONBOARDING_MODAL_OPEN' }),
            (0, s.ZD)(
                async () => {
                    let { WrappedAnnouncementModal: e } = await n.e('86653').then(n.bind(n, 993318));
                    return function (t) {
                        let { onClose: n, transitionState: i } = t,
                            o = async () => {
                                (await n(), w(C.L.USER_DISMISS));
                            };
                        return (0, r.jsx)(e, {
                            transitionState: i,
                            onClose: o,
                            ctaOnClick: () => {
                                (w(C.L.TAKE_ACTION),
                                    (0, d.Q3)(a.z.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK, {
                                        dismissAction: C.L.INDIRECT_ACTION,
                                        groupName: C.R.VIRTUAL_CURRENCY_ONBOARDING
                                    }),
                                    (0, d.Q3)(a.z.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK, {
                                        dismissAction: C.L.INDIRECT_ACTION,
                                        groupName: C.R.VIRTUAL_CURRENCY_ONBOARDING
                                    }),
                                    (0, b.Y)({
                                        pageType: v.ZY5.ORBS_ANNOUNCEMENT_MODAL,
                                        sectionType: v.jXE.ORBS_ANNOUNCEMENT_MODAL,
                                        ctaObject: v.qAy.CTA_TO_ORB_INTRO_QUEST
                                    }),
                                    (0, p.navigateToQuestHome)({
                                        questId: j.V6,
                                        fromContent: l.j.ORBS_ANNOUNCEMENT_MODAL
                                    }),
                                    n());
                            }
                        });
                    };
                },
                {
                    modalKey: E,
                    onCloseRequest: () => {
                        (w(C.L.USER_DISMISS), (0, c.Mr3)(E));
                    }
                }
            ));
    }, [N, e, t, w, S, I]);
}
