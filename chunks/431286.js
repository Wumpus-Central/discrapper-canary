n.d(t, { i: () => O }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(636977),
    o = n(442837),
    a = n(704215),
    s = n(952265),
    c = n(481060),
    u = n(570140),
    d = n(605236),
    p = n(243778),
    h = n(341907),
    f = n(819640),
    g = n(822857),
    m = n(479766),
    b = n(331663),
    _ = n(921944),
    y = n(46140);
let v = 'orb-announcement-modal-key';
function O() {
    let { hasLayers: e } = (0, o.cj)([f.Z], () => ({ hasLayers: f.Z.hasLayers() })),
        { onboardingModalOpenedPrior: t } = (0, o.cj)([m.Z], () => ({ onboardingModalOpenedPrior: m.Z.onboardingModalOpenedPrior })),
        { enabled: O } = (0, g.W)({ location: 'virtual_currency_announcement_modal' }),
        [j, C] = (0, p.US)(O ? [a.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL] : [], ...b.b.useSelectedDismissibleContent),
        x = (0, c.s9z)(c.JQI);
    i.useEffect(() => {
        O &&
            !t &&
            j === a.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL &&
            (e ||
                x ||
                (u.Z.dispatch({ type: 'VIRTUAL_CURRENCY_ONBOARDING_MODAL_OPEN' }),
                (0, s.ZD)(
                    async () => {
                        let { AnnouncementModal: e } = await n.e('86653').then(n.bind(n, 993318));
                        return function (t) {
                            let { onClose: n, transitionState: i } = t,
                                o = async () => {
                                    await n(), C(_.L.USER_DISMISS);
                                };
                            return (0, r.jsx)(e, {
                                transitionState: i,
                                onClose: o,
                                ctaOnClick: () => {
                                    C(_.L.TAKE_ACTION),
                                        (0, d.EW)(a.z.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK, {
                                            dismissAction: _.L.INDIRECT_ACTION,
                                            groupName: _.R.VIRTUAL_CURRENCY_ONBOARDING
                                        }),
                                        (0, d.EW)(a.z.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK, {
                                            dismissAction: _.L.INDIRECT_ACTION,
                                            groupName: _.R.VIRTUAL_CURRENCY_ONBOARDING
                                        }),
                                        (0, h.navigateToQuestHome)({
                                            questId: y.V6,
                                            fromContent: l.j.ORBS_ANNOUNCEMENT_MODAL
                                        }),
                                        n();
                                }
                            });
                        };
                    },
                    {
                        modalKey: v,
                        onCloseRequest: () => {
                            C(_.L.USER_DISMISS), (0, c.Mr3)(v);
                        }
                    }
                )));
    }, [j, O, t, C, e, x]);
}
