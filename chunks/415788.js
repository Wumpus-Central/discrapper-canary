(n.d(t, { default: () => L }), n(388685));
var a = n(255367),
    r = n(73800),
    s = n(948789),
    o = n(704215),
    i = n(100527),
    u = n(906732),
    c = n(243778),
    l = n(790527),
    d = n(981631),
    _ = n(921944),
    C = n(388032),
    b = n(970248),
    A = n(309389);
function L(e) {
    let { upsellType: t, onClose: n, transitionState: L } = e,
        [S, T] = (0, c.US)([o.z.Q2_2025_MARKETING_MOMENT_FOLLOW_UP_MODAL]);
    return (
        (0, u.ZP)(i.Z.REVERSE_TRIAL_UPSELL_MODAL),
        r.useEffect(
            () => () => {
                T(_.L.USER_DISMISS);
            },
            [T]
        ),
        (0, a.jsx)(l.Z, {
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
                T(_.L.TAKE_ACTION);
            },
            secondaryCTA: C.intl.string(C.t.SXYIpK),
            secondaryCTAClassName: b.secondaryCTA,
            footerClassName: b.footer,
            headerClassName: b.header,
            onSecondaryClick: function () {
                (T(_.L.TAKE_ACTION), n(), (0, s.uL)(d.Z5c.APPLICATION_STORE));
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
            transitionState: L,
            onClose: () => (T(_.L.USER_DISMISS), n())
        })
    );
}
