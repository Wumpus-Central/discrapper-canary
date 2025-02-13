n.d(e, { default: () => p }), n(47120);
var s = n(200651);
n(192379);
var r = n(120356),
    i = n.n(r),
    a = n(704215),
    o = n(100527),
    c = n(906732),
    u = n(243778),
    b = n(790527),
    d = n(474936),
    E = n(981631),
    l = n(921944),
    _ = n(388032),
    L = n(323509),
    S = n(746458);
function p(t) {
    let e,
        n,
        r,
        { upsellType: p, onClose: C, transitionState: g } = t,
        A = p === d.cd.REVERSE_TRIAL_FOLLOWUP_UPSELL,
        [R, T] = (0, u.US)([a.z.REVERSE_TRIAL_ENDED_UPSELL]);
    return (
        (0, c.ZP)(o.Z.REVERSE_TRIAL_UPSELL_MODAL),
        A ? ((e = _.intl.string(_.t.CCMEZW)), (n = _.intl.string(_.t.gFGZZG)), (r = _.intl.string(_.t.J61px8))) : ((e = _.intl.string(_.t.N1JBY2)), (n = _.intl.string(_.t['h5/w39'])), (r = _.intl.string(_.t['8x0jKS']))),
        (0, s.jsx)(b.Z, {
            artURL: S.Z,
            artContainerClassName: i()(L.artContainer, { [L.grayArt]: !A }),
            enableArtBoxShadow: !1,
            type: p,
            title: e,
            body: n,
            bodyClassName: L.subHeader,
            glowUp: n,
            onSubscribeClick: () => {
                T(l.L.TAKE_ACTION);
            },
            backButtonText: _.intl.string(_.t.cpT0Cg),
            subscribeButtonText: r,
            subscribeButtonClassname: L.subscribeButton,
            useSubscribeButtonGradient: !0,
            hidePremiumOfferUpsell: !0,
            analyticsLocation: {
                section: E.jXE.REVERSE_TRIAL_UPSELL_MODAL,
                object: E.qAy.BUTTON_CTA
            },
            transitionState: g,
            onClose: () => (T(l.L.USER_DISMISS), C())
        })
    );
}
