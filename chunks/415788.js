n.d(e, { default: () => L }), n(388685);
var s = n(200651),
    a = n(192379),
    i = n(948789),
    o = n(704215),
    r = n(100527),
    c = n(906732),
    u = n(243778),
    d = n(790527),
    l = n(981631),
    b = n(921944),
    C = n(388032),
    _ = n(970248),
    E = n(746458);
function L(t) {
    let { upsellType: e, onClose: n, transitionState: L } = t,
        [S, p] = (0, u.US)([o.z.Q1_2025_FOLLOW_UP_REVERSE_TRIAL_OFFER]);
    return (
        (0, c.ZP)(r.Z.REVERSE_TRIAL_UPSELL_MODAL),
        a.useEffect(
            () => () => {
                p(b.L.USER_DISMISS);
            },
            [p]
        ),
        (0, s.jsx)(d.Z, {
            artURL: E.Z,
            artContainerClassName: _.artContainer,
            enableArtBoxShadow: !1,
            type: e,
            title: C.intl.string(C.t.CCMEZW),
            body: C.intl.string(C.t.gFGZZG),
            bodyClassName: _.subHeader,
            glowUp: C.intl.string(C.t.gFGZZG),
            onSubscribeClick: () => {
                p(b.L.TAKE_ACTION);
            },
            secondaryCTA: C.intl.string(C.t.ZnqyZ2),
            secondaryCTAClassName: _.secondaryCTA,
            onSecondaryClick: function () {
                p(b.L.TAKE_ACTION), n(), (0, i.uL)(l.Z5c.APPLICATION_STORE);
            },
            subscribeButtonText: C.intl.string(C.t.J61px8),
            subscribeButtonClassname: _.subscribeButton,
            useSubscribeButtonGradient: !0,
            hidePremiumOfferUpsell: !0,
            showEnhancedUpsell: !0,
            hideBackButton: !0,
            analyticsLocation: {
                section: l.jXE.REVERSE_TRIAL_UPSELL_MODAL,
                object: l.qAy.BUTTON_CTA
            },
            transitionState: L,
            onClose: () => (p(b.L.USER_DISMISS), n())
        })
    );
}
