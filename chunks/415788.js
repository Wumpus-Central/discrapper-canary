(a.d(t, { default: () => S }), a(388685));
var s = a(255367),
    n = a(73800),
    r = a(948789),
    o = a(704215),
    i = a(100527),
    c = a(906732),
    u = a(243778),
    _ = a(790527),
    d = a(981631),
    l = a(921944),
    C = a(388032),
    b = a(970248),
    A = a(309389);
function S(e) {
    let { upsellType: t, onClose: a, transitionState: S } = e,
        [L, T] = (0, u.US)([o.z.Q2_2025_MARKETING_MOMENT_FOLLOW_UP_MODAL]);
    return (
        (0, c.ZP)(i.Z.REVERSE_TRIAL_UPSELL_MODAL),
        n.useEffect(
            () => () => {
                T(l.L.USER_DISMISS);
            },
            [T]
        ),
        (0, s.jsx)(_.Z, {
            artURL: A,
            artContainerClassName: b.artContainer,
            artClassName: b.art,
            enableArtBoxShadow: !1,
            type: t,
            title: C.intl.string(C.t.aupMtb),
            body: C.intl.string(C.t.AXmOUV),
            bodyClassName: b.subHeader,
            glowUp: C.intl.string(C.t.AXmOUV),
            onSubscribeClick: () => {
                T(l.L.TAKE_ACTION);
            },
            secondaryCTA: C.intl.string(C.t.SXYIpK),
            secondaryCTAClassName: b.secondaryCTA,
            footerClassName: b.footer,
            headerClassName: b.header,
            onSecondaryClick: function () {
                (T(l.L.TAKE_ACTION), a(), (0, r.uL)(d.Z5c.APPLICATION_STORE));
            },
            subscribeButtonText: C.intl.string(C.t.J61px8),
            subscribeButtonClassname: b.subscribeButton,
            useSubscribeButtonGradient: !0,
            hidePremiumOfferUpsell: !0,
            showEnhancedUpsell: !0,
            hideBackButton: !0,
            analyticsLocation: {
                section: d.jXE.REVERSE_TRIAL_UPSELL_MODAL,
                object: d.qAy.BUTTON_CTA
            },
            transitionState: S,
            onClose: () => (T(l.L.USER_DISMISS), a())
        })
    );
}
