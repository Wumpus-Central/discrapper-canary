n.d(e, { default: () => S }), n(388685);
var s = n(200651),
    i = n(192379),
    a = n(704215),
    r = n(100527),
    o = n(906732),
    c = n(243778),
    u = n(790527),
    b = n(981631),
    d = n(921944),
    _ = n(388032),
    l = n(970248),
    E = n(746458);
function S(t) {
    let { upsellType: e, onClose: n, transitionState: S } = t,
        [p, C] = (0, c.US)([a.z.Q1_2025_FOLLOW_UP_REVERSE_TRIAL_OFFER]);
    return (
        (0, o.ZP)(r.Z.REVERSE_TRIAL_UPSELL_MODAL),
        i.useEffect(
            () => () => {
                C(d.L.USER_DISMISS);
            },
            [C]
        ),
        (0, s.jsx)(u.Z, {
            artURL: E.Z,
            artContainerClassName: l.artContainer,
            enableArtBoxShadow: !1,
            type: e,
            title: _.intl.string(_.t.CCMEZW),
            body: _.intl.string(_.t.gFGZZG),
            bodyClassName: l.subHeader,
            glowUp: _.intl.string(_.t.gFGZZG),
            onSubscribeClick: () => {
                C(d.L.TAKE_ACTION);
            },
            backButtonText: _.intl.string(_.t.cpT0Cg),
            subscribeButtonText: _.intl.string(_.t.J61px8),
            subscribeButtonClassname: l.subscribeButton,
            useSubscribeButtonGradient: !0,
            hidePremiumOfferUpsell: !0,
            analyticsLocation: {
                section: b.jXE.REVERSE_TRIAL_UPSELL_MODAL,
                object: b.qAy.BUTTON_CTA
            },
            transitionState: S,
            onClose: () => (C(d.L.USER_DISMISS), n())
        })
    );
}
