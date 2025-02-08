n.d(t, {
    default: () => h,
    y: () => g
});
var i = n(200651);
n(192379);
var s = n(481060),
    r = n(490220),
    l = n(594174),
    a = n(98278),
    o = n(790527),
    c = n(474936),
    d = n(981631),
    u = n(388032),
    m = n(761346);
function g(e) {
    let t = l.default.getCurrentUser();
    null != t &&
        (0, s.ZDy)(async () => {
            let { default: s } = await Promise.resolve().then(n.bind(n, 267717));
            return (n) =>
                (0, i.jsx)(s, {
                    user: t,
                    analyticsSource: d.Sbl.PROFILE_PANEL,
                    analyticsLocation: {
                        section: d.jXE.USER_PROFILE,
                        object: d.qAy.BUTTON_CTA
                    },
                    onSubscribeFinish: e,
                    ...n
                });
        });
}
function h(e) {
    let { user: t, onClose: n, ...s } = e;
    return (0, i.jsx)(o.Z, {
        modalClassName: m.modal,
        modalContentClassName: m.modalContent,
        type: c.cd.TRY_IT_OUT_MODAL_UPSELL,
        title: u.intl.string(u.t.reVc0N),
        body: u.intl.string(u.t.KckEj4),
        glowUp: u.intl.string(u.t.reVc0N),
        onSecondaryClick: () => {
            (0, a.$)(n);
        },
        secondaryCTA: u.intl.string(u.t.PcTCBw),
        onClose: n,
        enableArtBoxShadow: !1,
        hideBackButton: !0,
        showEnhancedUpsell: !0,
        LeadingComponent: (0, i.jsx)('div', {
            className: m.previewContainerParent,
            children: (0, i.jsx)(r.Z, {
                containerClassName: m.previewContainer,
                user: t,
                disabledInputs: !0
            })
        }),
        ...s
    });
}
