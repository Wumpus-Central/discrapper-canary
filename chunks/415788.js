a.d(t, { default: () => _ }), a(388685);
var s = a(54381),
    n = a(473749),
    r = a(948789),
    o = a(704215),
    i = a(100527),
    c = a(906732),
    u = a(243778),
    d = a(790527),
    b = a(981631),
    l = a(921944),
    C = a(388032),
    A = a(817992),
    S = a(309389);
function _(e) {
    let { upsellType: t, onClose: a, transitionState: _ } = e,
        [L, T] = (0, u.US)([o.z.Q2_2025_MARKETING_MOMENT_FOLLOW_UP_MODAL]);
    return (
        (0, c.ZP)(i.Z.REVERSE_TRIAL_UPSELL_MODAL),
        n.useEffect(
            () => () => {
                T(l.L.USER_DISMISS);
            },
            [T],
        ),
        (0, s.jsx)(d.Z, {
            artURL: S,
            artContainerClassName: A.artContainer,
            artClassName: A.art,
            enableArtBoxShadow: !1,
            type: t,
            title: C.intl.string(C.t.aupMtf),
            body: C.intl.string(C.t.AXmOUb),
            bodyClassName: A.subHeader,
            glowUp: C.intl.string(C.t.AXmOUb),
            onSubscribeClick: () => {
                T(l.L.TAKE_ACTION);
            },
            secondaryCTA: C.intl.string(C.t.SXYIpB),
            secondaryCTAClassName: A.secondaryCTA,
            footerClassName: A.footer,
            headerClassName: A.header,
            onSecondaryClick: function () {
                T(l.L.TAKE_ACTION), a(), (0, r.uL)(b.Z5c.APPLICATION_STORE);
            },
            subscribeButtonText: C.intl.string(C.t.J61px0),
            subscribeButtonClassname: A.subscribeButton,
            useSubscribeButtonGradient: !0,
            hidePremiumOfferUpsell: !0,
            showEnhancedUpsell: !0,
            hideBackButton: !0,
            analyticsLocation: {
                section: b.jXE.REVERSE_TRIAL_UPSELL_MODAL,
                object: b.qAy.BUTTON_CTA,
            },
            transitionState: _,
            onClose: () => (T(l.L.USER_DISMISS), a()),
        })
    );
}
