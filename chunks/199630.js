s.d(t, { default: () => b });
var a = s(627968),
    n = s(64700),
    i = s(877227),
    r = s(554146),
    o = s(793574),
    _ = s(688810),
    c = s(379848),
    l = s(244975),
    u = s(652215),
    A = s(49999),
    S = s(985018),
    C = s(123568),
    d = s(888283);
function b(e) {
    let { upsellType: t, onClose: s, transitionState: b } = e,
        [E, T] = (0, c.kn)([r.M.Q2_2025_MARKETING_MOMENT_FOLLOW_UP_MODAL]);
    return (
        (0, _.Ay)(o.A.REVERSE_TRIAL_UPSELL_MODAL),
        n.useEffect(
            () => () => {
                T(A.i.USER_DISMISS);
            },
            [T],
        ),
        (0, a.jsx)(l.A, {
            artURL: d,
            artContainerClassName: C.JS,
            artClassName: C.Qw,
            enableArtBoxShadow: !1,
            type: t,
            title: S.intl.string(S.t.aupMtf),
            body: S.intl.string(S.t.AXmOUb),
            bodyClassName: C.uI,
            glowUp: S.intl.string(S.t.AXmOUb),
            onSubscribeClick: () => {
                T(A.i.TAKE_ACTION);
            },
            secondaryCTA: S.intl.string(S.t.SXYIpB),
            secondaryCTAClassName: C.vh,
            footerClassName: C.qr,
            headerClassName: C.wx,
            onSecondaryClick: function () {
                T(A.i.TAKE_ACTION), s(), (0, i.pX)(u.BVt.APPLICATION_STORE);
            },
            subscribeButtonText: S.intl.string(S.t.J61px0),
            subscribeButtonClassname: C.xF,
            useSubscribeButtonGradient: !0,
            hidePremiumOfferUpsell: !0,
            showEnhancedUpsell: !0,
            hideBackButton: !0,
            analyticsLocation: { section: u.JJy.REVERSE_TRIAL_UPSELL_MODAL, object: u.ZSU.BUTTON_CTA },
            transitionState: b,
            onClose: () => (T(A.i.USER_DISMISS), s()),
        })
    );
}
