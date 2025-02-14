n.d(t, { i: () => v }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(704215),
    o = n(952265),
    s = n(481060),
    c = n(570140),
    d = n(243778),
    u = n(341907),
    h = n(819640),
    p = n(751648),
    m = n(822857),
    g = n(479766),
    f = n(921944),
    _ = n(642145);
function v() {
    let { hasLayers: e } = (0, r.cj)([h.Z], () => ({ hasLayers: h.Z.hasLayers() })),
        { onboardingModalOpenedPrior: t } = (0, r.cj)([g.Z], () => ({ onboardingModalOpenedPrior: g.Z.onboardingModalOpenedPrior })),
        { enabled: v } = (0, m.W)({ location: 'vc-announcement-modal' }),
        C = v ? [a.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL] : [],
        [x, I] = (0, d.US)(C, void 0, !0),
        Z = (0, s.s9z)(s.JQI);
    l.useEffect(() => {
        v &&
            !t &&
            x === a.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL &&
            !e &&
            !Z &&
            (c.Z.dispatch({ type: 'VIRTUAL_CURRENCY_ONBOARDING_MODAL_OPEN' }),
            (0, o.ZD)(
                async () => {
                    let { AnnouncementModal: e } = await n.e('3073').then(n.bind(n, 520156));
                    return function (t) {
                        let { onClose: n, transitionState: l } = t;
                        return (0, i.jsx)(e, {
                            transitionState: l,
                            onClose: n,
                            ctaOnClick: () => {
                                (0, p.jM)(), (0, u.navigateToQuestHome)({ questId: _.V }), n();
                            }
                        });
                    };
                },
                {
                    onCloseCallback: () => {
                        I(f.L.UNKNOWN), (0, p.U9)();
                    }
                }
            ));
    }, [x, v, t, I, e, Z]);
}
