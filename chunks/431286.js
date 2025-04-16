n.d(t, { i: () => S }), n(388685);
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
    y = n(331663),
    _ = n(981631),
    v = n(921944),
    O = n(46140);
let C = 'orb-announcement-modal-key';
function S() {
    let { hasLayers: e } = (0, o.cj)([f.Z], () => ({ hasLayers: f.Z.hasLayers() })),
        { onboardingModalOpenedPrior: t } = (0, o.cj)([b.Z], () => ({ onboardingModalOpenedPrior: b.Z.onboardingModalOpenedPrior })),
        { enabled: S } = (0, m.W)({ location: 'virtual_currency_announcement_modal' }),
        [j, E] = (0, h.US)(S ? [s.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL] : [], ...y.b.useSelectedDismissibleContent),
        x = (0, c.s9z)(c.JQI);
    i.useEffect(() => {
        S &&
            !t &&
            j === s.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL &&
            (e ||
                x ||
                (u.Z.dispatch({ type: 'VIRTUAL_CURRENCY_ONBOARDING_MODAL_OPEN' }),
                (0, a.ZD)(
                    async () => {
                        let { AnnouncementModal: e } = await n.e('86653').then(n.bind(n, 993318));
                        return function (t) {
                            let { onClose: n, transitionState: i } = t,
                                o = async () => {
                                    await n(), E(v.L.USER_DISMISS);
                                };
                            return (0, r.jsx)(e, {
                                transitionState: i,
                                onClose: o,
                                ctaOnClick: () => {
                                    E(v.L.TAKE_ACTION),
                                        (0, d.EW)(s.z.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK, {
                                            dismissAction: v.L.INDIRECT_ACTION,
                                            groupName: v.R.VIRTUAL_CURRENCY_ONBOARDING
                                        }),
                                        (0, d.EW)(s.z.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK, {
                                            dismissAction: v.L.INDIRECT_ACTION,
                                            groupName: v.R.VIRTUAL_CURRENCY_ONBOARDING
                                        }),
                                        (0, g.Y)({
                                            pageType: _.ZY5.ORBS_ANNOUNCEMENT_MODAL,
                                            sectionType: _.jXE.ORBS_ANNOUNCEMENT_MODAL,
                                            ctaObject: _.qAy.CTA_TO_ORB_INTRO_QUEST
                                        }),
                                        (0, p.navigateToQuestHome)({
                                            questId: O.V6,
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
                            E(v.L.USER_DISMISS), (0, c.Mr3)(C);
                        }
                    }
                )));
    }, [j, S, t, E, e, x]);
}
