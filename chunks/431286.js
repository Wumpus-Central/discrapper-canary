(n.d(t, { t: () => S }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(636977),
    o = n(442837),
    s = n(704215),
    a = n(952265),
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
function S() {
    let { hasLayers: e } = (0, o.cj)([f.Z], () => ({ hasLayers: f.Z.hasLayers() })),
        { onboardingModalOpenedPrior: t } = (0, o.cj)([O.Z], () => ({ onboardingModalOpenedPrior: O.Z.onboardingModalOpenedPrior })),
        { enabled: S } = (0, _.hl)({ location: 'virtual_currency_announcement_modal' }),
        [x, I] = (0, h.US)(S ? [s.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL] : [], ...y.b.useSelectedDismissibleContent),
        P = (0, c.s9z)(c.JQI);
    i.useEffect(() => {
        if (x !== s.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL) return;
        let i = g.default.getCurrentUser();
        !(!S || t || (0, m.EO)(i)) &&
            (e ||
                P ||
                (u.Z.dispatch({ type: 'VIRTUAL_CURRENCY_ONBOARDING_MODAL_OPEN' }),
                (0, a.ZD)(
                    async () => {
                        let { WrappedAnnouncementModal: e } = await n.e('86653').then(n.bind(n, 993318));
                        return function (t) {
                            let { onClose: n, transitionState: i } = t,
                                o = async () => {
                                    (await n(), I(C.L.USER_DISMISS));
                                };
                            return (0, r.jsx)(e, {
                                transitionState: i,
                                onClose: o,
                                ctaOnClick: () => {
                                    (I(C.L.TAKE_ACTION),
                                        (0, d.Q3)(s.z.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK, {
                                            dismissAction: C.L.INDIRECT_ACTION,
                                            groupName: C.R.VIRTUAL_CURRENCY_ONBOARDING
                                        }),
                                        (0, d.Q3)(s.z.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK, {
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
                            (I(C.L.USER_DISMISS), (0, c.Mr3)(E));
                        }
                    }
                )));
    }, [x, S, t, I, e, P]);
}
