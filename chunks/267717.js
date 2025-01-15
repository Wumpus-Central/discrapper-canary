n.r(t),
    n.d(t, {
        default: function () {
            return h;
        },
        openPremiumTryItOutProfileUpsell: function () {
            return g;
        }
    });
var i = n(200651);
n(192379);
var r = n(481060),
    s = n(490220),
    a = n(594174),
    l = n(98278),
    o = n(790527),
    c = n(474936),
    d = n(981631),
    u = n(388032),
    m = n(374695);
function g(e) {
    let t = a.default.getCurrentUser();
    if (null != t)
        (0, r.openModalLazy)(async () => {
            let { default: r } = await Promise.resolve().then(n.bind(n, 267717));
            return (n) =>
                (0, i.jsx)(r, {
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
    let { user: t, onClose: n, ...r } = e;
    return (0, i.jsx)(o.Z, {
        modalClassName: m.modal,
        modalContentClassName: m.modalContent,
        type: c.cd.TRY_IT_OUT_MODAL_UPSELL,
        title: u.intl.string(u.t.reVc0N),
        body: u.intl.string(u.t.KckEj4),
        glowUp: u.intl.string(u.t.reVc0N),
        onSecondaryClick: () => {
            (0, l.$)(n);
        },
        secondaryCTA: u.intl.string(u.t.PcTCBw),
        onClose: n,
        enableArtBoxShadow: !1,
        hideBackButton: !0,
        showEnhancedUpsell: !0,
        LeadingComponent: (0, i.jsx)('div', {
            className: m.previewContainerParent,
            children: (0, i.jsx)(s.Z, {
                containerClassName: m.previewContainer,
                user: t,
                disabledInputs: !0
            })
        }),
        ...r
    });
}
