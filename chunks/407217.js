n.d(t, { K: () => m, default: () => A });
var i = n(627968);
n(64700);
var s = n(397927),
    r = n(253604),
    a = n(287809),
    l = n(87719),
    o = n(244975),
    c = n(788868),
    d = n(652215),
    u = n(985018),
    _ = n(698290);
function m(e) {
    let { analyticsSource: t, onSubscribeFinish: r } = e,
        l = a.default.getCurrentUser();
    null != l &&
        (0, s.mMO)(async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 407217));
            return (n) =>
                (0, i.jsx)(e, {
                    user: l,
                    analyticsSource: t,
                    analyticsLocation: { section: d.JJy.USER_PROFILE, object: d.ZSU.BUTTON_CTA },
                    onSubscribeFinish: r,
                    ...n,
                });
        });
}
function A(e) {
    let { user: t, onClose: n, ...s } = e;
    return (0, i.jsx)(o.A, {
        modalClassName: _.yl,
        modalContentClassName: _.jE,
        type: c.e.TRY_IT_OUT_MODAL_UPSELL,
        title: u.intl.string(u.t.reVc0M),
        body: u.intl.string(u.t.KckEj7),
        glowUp: u.intl.string(u.t.reVc0M),
        onSecondaryClick: () => {
            (0, l.x)(n);
        },
        secondaryCTA: u.intl.string(u.t.PcTCB7),
        onClose: n,
        enableArtBoxShadow: !1,
        hideBackButton: !0,
        showEnhancedUpsell: !0,
        LeadingComponent: (0, i.jsx)("div", {
            className: _.wC,
            children: (0, i.jsx)(r.A, { containerClassName: _.i1, user: t, disabledInputs: !0 }),
        }),
        ...s,
    });
}
