n.d(t, { i: () => _ }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(704215),
    a = n(952265),
    s = n(481060),
    c = n(570140),
    u = n(605236),
    d = n(243778),
    p = n(341907),
    h = n(819640),
    f = n(822857),
    g = n(479766),
    m = n(331663),
    b = n(921944),
    y = n(46140);
function _() {
    let { hasLayers: e } = (0, l.cj)([h.Z], () => ({ hasLayers: h.Z.hasLayers() })),
        { onboardingModalOpenedPrior: t } = (0, l.cj)([g.Z], () => ({ onboardingModalOpenedPrior: g.Z.onboardingModalOpenedPrior })),
        { enabled: _ } = (0, f.W)({ location: 'virtual_currency_announcement_modal' }),
        [v, O] = (0, d.US)(_ ? [o.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL] : [], ...m.b.useSelectedDismissibleContent),
        j = (0, s.s9z)(s.JQI);
    i.useEffect(() => {
        _ &&
            !t &&
            v === o.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL &&
            (e ||
                j ||
                (c.Z.dispatch({ type: 'VIRTUAL_CURRENCY_ONBOARDING_MODAL_OPEN' }),
                (0, a.ZD)(
                    async () => {
                        let { AnnouncementModal: e } = await n.e('86653').then(n.bind(n, 993318));
                        return function (t) {
                            let { onClose: n, transitionState: i } = t;
                            return (0, r.jsx)(e, {
                                transitionState: i,
                                onClose: n,
                                ctaOnClick: () => {
                                    O(b.L.USER_DISMISS_ALL),
                                        (0, u.EW)(o.z.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK, {
                                            dismissAction: b.L.USER_DISMISS_ALL,
                                            groupName: b.R.VIRTUAL_CURRENCY_ONBOARDING
                                        }),
                                        (0, u.EW)(o.z.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK, {
                                            dismissAction: b.L.USER_DISMISS_ALL,
                                            groupName: b.R.VIRTUAL_CURRENCY_ONBOARDING
                                        }),
                                        (0, p.navigateToQuestHome)({ questId: y.V6 }),
                                        n();
                                }
                            });
                        };
                    },
                    {
                        onCloseCallback: () => {
                            O(b.L.USER_DISMISS);
                        }
                    }
                )));
    }, [v, _, t, O, e, j]);
}
