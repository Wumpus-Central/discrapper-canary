s.d(e, { default: () => p }), s(47120);
var n = s(200651),
    a = s(192379),
    r = s(704215),
    i = s(100527),
    o = s(906732),
    c = s(243778),
    u = s(790527),
    b = s(981631),
    d = s(921944),
    _ = s(388032),
    E = s(970248),
    S = s(746458);
function p(t) {
    let { upsellType: e, onClose: s, transitionState: p } = t,
        [C, L] = (0, c.US)([r.z.Q1_2025_FOLLOW_UP_REVERSE_TRIAL_OFFER]);
    return (
        (0, o.ZP)(i.Z.REVERSE_TRIAL_UPSELL_MODAL),
        a.useEffect(
            () => () => {
                L(d.L.USER_DISMISS);
            },
            [L]
        ),
        (0, n.jsx)(u.Z, {
            artURL: S.Z,
            artContainerClassName: E.artContainer,
            enableArtBoxShadow: !1,
            type: e,
            title: _.NW.string(_.t.CCMEZW),
            body: _.NW.string(_.t.gFGZZG),
            bodyClassName: E.subHeader,
            glowUp: _.NW.string(_.t.gFGZZG),
            onSubscribeClick: () => {
                L(d.L.TAKE_ACTION);
            },
            backButtonText: _.NW.string(_.t.cpT0Cg),
            subscribeButtonText: _.NW.string(_.t.J61px8),
            subscribeButtonClassname: E.subscribeButton,
            useSubscribeButtonGradient: !0,
            hidePremiumOfferUpsell: !0,
            analyticsLocation: {
                section: b.jXE.REVERSE_TRIAL_UPSELL_MODAL,
                object: b.qAy.BUTTON_CTA
            },
            transitionState: p,
            onClose: () => (L(d.L.USER_DISMISS), s())
        })
    );
}
