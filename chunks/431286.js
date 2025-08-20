n.d(t, { t: () => S }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(636977),
    o = n(442837),
    a = n(704215),
    s = n(952265),
    c = n(481060),
    u = n(570140),
    d = n(266454),
    p = n(243778),
    f = n(110560),
    h = n(819640),
    g = n(594174),
    m = n(74538),
    b = n(507808),
    O = n(822857),
    _ = n(479766),
    y = n(275388),
    v = n(331663),
    j = n(981631),
    C = n(921944),
    x = n(46140);
let E = "orb-announcement-modal-key";
function S() {
    let { enabled: e } = (0, O.hl)({ location: "virtual_currency_announcement_modal" }),
        t = (0, o.e7)([_.Z], () => _.Z.onboardingModalOpenedPrior),
        { user: S } = (0, o.cj)([g.default], () => ({ user: g.default.getCurrentUser() })),
        I = (0, o.e7)([h.Z], () => h.Z.hasLayers()),
        P = (0, y.GE)(E),
        N = (0, m.EO)(S) || I || P,
        [w, Z] = (0, p.US)(
            e && !N ? [a.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL] : [],
            ...v.b.useSelectedDismissibleContent,
        );
    i.useEffect(() => {
        w !== a.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL ||
            t ||
            (u.Z.dispatch({ type: "VIRTUAL_CURRENCY_ONBOARDING_MODAL_OPEN" }),
            (0, s.ZD)(
                async () => {
                    let { WrappedAnnouncementModal: e } = await n.e("86653").then(n.bind(n, 993318));
                    return function (t) {
                        let { onClose: n, transitionState: i } = t,
                            o = async () => {
                                await n(), Z(C.L.USER_DISMISS);
                            };
                        return (0, r.jsx)(e, {
                            transitionState: i,
                            onClose: o,
                            ctaOnClick: () => {
                                Z(C.L.TAKE_ACTION),
                                    (0, d.Q3)(a.z.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK, {
                                        dismissAction: C.L.INDIRECT_ACTION,
                                        groupName: C.R.VIRTUAL_CURRENCY_ONBOARDING,
                                    }),
                                    (0, d.Q3)(a.z.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK, {
                                        dismissAction: C.L.INDIRECT_ACTION,
                                        groupName: C.R.VIRTUAL_CURRENCY_ONBOARDING,
                                    }),
                                    (0, b.Y)({
                                        pageType: j.ZY5.ORBS_ANNOUNCEMENT_MODAL,
                                        sectionType: j.jXE.ORBS_ANNOUNCEMENT_MODAL,
                                        ctaObject: j.qAy.CTA_TO_ORB_INTRO_QUEST,
                                    }),
                                    (0, f.navigateToQuestHome)({
                                        questId: x.V6,
                                        fromContent: l.j.ORBS_ANNOUNCEMENT_MODAL,
                                    }),
                                    n();
                            },
                        });
                    };
                },
                {
                    modalKey: E,
                    onCloseRequest: () => {
                        Z(C.L.USER_DISMISS), (0, c.Mr3)(E);
                    },
                },
            ));
    }, [w, e, t, Z, I]);
}
