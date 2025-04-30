n.d(t, { i: () => j }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(636977),
    o = n(442837),
    s = n(704215),
    a = n(952265),
    c = n(481060),
    u = n(570140),
    d = n(605236),
    h = n(243778),
    p = n(341907),
    f = n(819640),
    g = n(507808),
    m = n(822857),
    b = n(479766),
    _ = n(331663),
    y = n(981631),
    O = n(921944),
    v = n(46140);
let C = 'orb-announcement-modal-key';
function j() {
    let { hasLayers: e } = (0, o.cj)([f.Z], () => ({ hasLayers: f.Z.hasLayers() })),
        { onboardingModalOpenedPrior: t } = (0, o.cj)([b.Z], () => ({ onboardingModalOpenedPrior: b.Z.onboardingModalOpenedPrior })),
        { enabled: j } = (0, m.W)({ location: 'virtual_currency_announcement_modal' }),
        [S, E] = (0, h.US)(j ? [s.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL] : [], ..._.b.useSelectedDismissibleContent),
        x = (0, c.s9z)(c.JQI);
    i.useEffect(() => {
        j &&
            !t &&
            S === s.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL &&
            (e ||
                x ||
                (u.Z.dispatch({ type: 'VIRTUAL_CURRENCY_ONBOARDING_MODAL_OPEN' }),
                (0, a.ZD)(
                    async () => {
                        let { AnnouncementModal: e } = await n.e('86653').then(n.bind(n, 993318));
                        return function (t) {
                            let { onClose: n, transitionState: i } = t,
                                o = async () => {
                                    await n(), E(O.L.USER_DISMISS);
                                };
                            return (0, r.jsx)(e, {
                                transitionState: i,
                                onClose: o,
                                ctaOnClick: () => {
                                    E(O.L.TAKE_ACTION),
                                        (0, d.EW)(s.z.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK, {
                                            dismissAction: O.L.INDIRECT_ACTION,
                                            groupName: O.R.VIRTUAL_CURRENCY_ONBOARDING
                                        }),
                                        (0, d.EW)(s.z.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK, {
                                            dismissAction: O.L.INDIRECT_ACTION,
                                            groupName: O.R.VIRTUAL_CURRENCY_ONBOARDING
                                        }),
                                        (0, g.Y)({
                                            pageType: y.ZY5.ORBS_ANNOUNCEMENT_MODAL,
                                            sectionType: y.jXE.ORBS_ANNOUNCEMENT_MODAL,
                                            ctaObject: y.qAy.CTA_TO_ORB_INTRO_QUEST
                                        }),
                                        (0, p.navigateToQuestHome)({
                                            questId: v.V6,
                                            fromContent: l.j.ORBS_ANNOUNCEMENT_MODAL
                                        }),
                                        n();
                                }
                            });
                        };
                    },
                    {
                        modalKey: C,
                        onCloseRequest: () => {
                            E(O.L.USER_DISMISS), (0, c.Mr3)(C);
                        }
                    }
                )));
    }, [S, j, t, E, e, x]);
}
