n.d(e, { default: () => L }), n(388685);
var s = n(200651),
    i = n(192379),
    r = n(948789),
    a = n(704215),
    o = n(100527),
    u = n(906732),
    c = n(243778),
    l = n(790527),
    b = n(981631),
    d = n(921944),
    _ = n(388032),
    A = n(970248),
    C = n(309389);
function L(t) {
    let { upsellType: e, onClose: n, transitionState: L } = t,
        [S, T] = (0, c.US)([a.z.Q2_2025_MARKETING_MOMENT_FOLLOW_UP_MODAL]);
    return (
        (0, u.ZP)(o.Z.REVERSE_TRIAL_UPSELL_MODAL),
        i.useEffect(
            () => () => {
                T(d.L.USER_DISMISS);
            },
            [T]
        ),
        (0, s.jsx)(l.Z, {
            artURL: C,
            artContainerClassName: A.artContainer,
            enableArtBoxShadow: !1,
            type: e,
            title: _.intl.string(_.t.aupMtb),
            body: _.intl.string(_.t.AXmOUV),
            bodyClassName: A.subHeader,
            glowUp: _.intl.string(_.t.AXmOUV),
            onSubscribeClick: () => {
                T(d.L.TAKE_ACTION);
            },
            secondaryCTA: _.intl.string(_.t.SXYIpK),
            secondaryCTAClassName: A.secondaryCTA,
            onSecondaryClick: function () {
                T(d.L.TAKE_ACTION), n(), (0, r.uL)(b.Z5c.APPLICATION_STORE);
            },
            subscribeButtonText: _.intl.string(_.t.J61px8),
            subscribeButtonClassname: A.subscribeButton,
            useSubscribeButtonGradient: !0,
            hidePremiumOfferUpsell: !0,
            showEnhancedUpsell: !0,
            hideBackButton: !0,
            analyticsLocation: {
                section: b.jXE.REVERSE_TRIAL_UPSELL_MODAL,
                object: b.qAy.BUTTON_CTA
            },
            transitionState: L,
            onClose: () => (T(d.L.USER_DISMISS), n())
        })
    );
}
