a.d(t, { default: () => S }), a(388685);
var s = a(54381),
    n = a(473749),
    r = a(948789),
    o = a(704215),
    i = a(100527),
    c = a(906732),
    u = a(243778),
    _ = a(790527),
    d = a(981631),
    b = a(921944),
    l = a(388032),
    C = a(675150),
    A = a(309389);
function S(e) {
    let { upsellType: t, onClose: a, transitionState: S } = e,
        [L, T] = (0, u.US)([o.z.Q2_2025_MARKETING_MOMENT_FOLLOW_UP_MODAL]);
    return (
        (0, c.ZP)(i.Z.REVERSE_TRIAL_UPSELL_MODAL),
        n.useEffect(
            () => () => {
                T(b.L.USER_DISMISS);
            },
            [T],
        ),
        (0, s.jsx)(_.Z, {
            artURL: A,
            artContainerClassName: C.artContainer,
            artClassName: C.art,
            enableArtBoxShadow: !1,
            type: t,
            title: l.intl.string(l.t.aupMtf),
            body: l.intl.string(l.t.AXmOUb),
            bodyClassName: C.subHeader,
            glowUp: l.intl.string(l.t.AXmOUb),
            onSubscribeClick: () => {
                T(b.L.TAKE_ACTION);
            },
            secondaryCTA: l.intl.string(l.t.SXYIpB),
            secondaryCTAClassName: C.secondaryCTA,
            footerClassName: C.footer,
            headerClassName: C.header,
            onSecondaryClick: function () {
                T(b.L.TAKE_ACTION), a(), (0, r.uL)(d.Z5c.APPLICATION_STORE);
            },
            subscribeButtonText: l.intl.string(l.t.J61px0),
            subscribeButtonClassname: C.subscribeButton,
            useSubscribeButtonGradient: !0,
            hidePremiumOfferUpsell: !0,
            showEnhancedUpsell: !0,
            hideBackButton: !0,
            analyticsLocation: {
                section: d.jXE.REVERSE_TRIAL_UPSELL_MODAL,
                object: d.qAy.BUTTON_CTA,
            },
            transitionState: S,
            onClose: () => (T(b.L.USER_DISMISS), a()),
        })
    );
}
