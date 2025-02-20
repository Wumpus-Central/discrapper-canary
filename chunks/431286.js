n.d(t, { i: () => v }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(704215),
    a = n(952265),
    s = n(481060),
    c = n(570140),
    u = n(243778),
    d = n(341907),
    p = n(819640),
    h = n(751648),
    f = n(822857),
    g = n(479766),
    m = n(921944),
    b = n(642145);
function v() {
    let { hasLayers: e } = (0, l.cj)([p.Z], () => ({ hasLayers: p.Z.hasLayers() })),
        { onboardingModalOpenedPrior: t } = (0, l.cj)([g.Z], () => ({ onboardingModalOpenedPrior: g.Z.onboardingModalOpenedPrior })),
        { enabled: v } = (0, f.W)({ location: 'vc-announcement-modal' }),
        y = v ? [o.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL] : [],
        [_, O] = (0, u.US)(y, void 0, !0),
        j = (0, s.s9z)(s.JQI);
    i.useEffect(() => {
        v &&
            !t &&
            _ === o.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL &&
            !e &&
            !j &&
            (c.Z.dispatch({ type: 'VIRTUAL_CURRENCY_ONBOARDING_MODAL_OPEN' }),
            (0, a.ZD)(
                async () => {
                    let { AnnouncementModal: e } = await n.e('3073').then(n.bind(n, 520156));
                    return function (t) {
                        let { onClose: n, transitionState: i } = t;
                        return (0, r.jsx)(e, {
                            transitionState: i,
                            onClose: n,
                            ctaOnClick: () => {
                                (0, h.jM)(), (0, d.navigateToQuestHome)({ questId: b.V }), n();
                            }
                        });
                    };
                },
                {
                    onCloseCallback: () => {
                        O(m.L.UNKNOWN), (0, h.U9)();
                    }
                }
            ));
    }, [_, v, t, O, e, j]);
}
