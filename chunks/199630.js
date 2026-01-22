s.d(e, {
    default: () => A,
}),
    s(896048);
var a = s(627968),
    n = s(64700),
    i = s(877227),
    r = s(554146),
    o = s(793574),
    c = s(688810),
    l = s(379848),
    _ = s(244975),
    b = s(652215),
    d = s(49999),
    u = s(985018),
    S = s(123568),
    f = s(888283);

function A(t) {
    let { upsellType: e, onClose: s, transitionState: A } = t,
        [C, E] = (0, l.kn)([r.M.Q2_2025_MARKETING_MOMENT_FOLLOW_UP_MODAL]);
    return (
        (0, c.Ay)(o.A.REVERSE_TRIAL_UPSELL_MODAL),
        n.useEffect(
            () => () => {
                E(d.i.USER_DISMISS);
            },
            [E],
        ),
        (0, a.jsx)(_.A, {
            artURL: f,
            artContainerClassName: S.JS,
            artClassName: S.Qw,
            enableArtBoxShadow: !1,
            type: e,
            title: u.intl.string(u.t.aupMtf),
            body: u.intl.string(u.t.AXmOUb),
            bodyClassName: S.uI,
            glowUp: u.intl.string(u.t.AXmOUb),
            onSubscribeClick: () => {
                E(d.i.TAKE_ACTION);
            },
            secondaryCTA: u.intl.string(u.t.SXYIpB),
            secondaryCTAClassName: S.vh,
            footerClassName: S.qr,
            headerClassName: S.wx,
            onSecondaryClick: function () {
                E(d.i.TAKE_ACTION), s(), (0, i.pX)(b.BVt.APPLICATION_STORE);
            },
            subscribeButtonText: u.intl.string(u.t.J61px0),
            subscribeButtonClassname: S.xF,
            useSubscribeButtonGradient: !0,
            hidePremiumOfferUpsell: !0,
            showEnhancedUpsell: !0,
            hideBackButton: !0,
            analyticsLocation: {
                section: b.JJy.REVERSE_TRIAL_UPSELL_MODAL,
                object: b.ZSU.BUTTON_CTA,
            },
            transitionState: A,
            onClose: () => (E(d.i.USER_DISMISS), s()),
        })
    );
}
