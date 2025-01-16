t.r(n),
    t.d(n, {
        default: function () {
            return Z;
        },
        openProfileUpsellModal: function () {
            return v;
        }
    });
var a = t(200651);
t(192379);
var i = t(481060),
    c = t(921813),
    o = t(687158),
    s = t(576635),
    r = t(594174),
    d = t(98278),
    l = t(792254),
    u = t(790527),
    f = t(474936),
    p = t(981631),
    A = t(486324),
    b = t(388032),
    m = t(761346);
function v(e, n) {
    let c = r.default.getCurrentUser();
    return (
        null != c &&
        ((0, i.openModalLazy)(async () => {
            let { default: o } = await Promise.resolve().then(t.bind(t, 378879));
            return (t) =>
                (0, a.jsx)(o, {
                    user: c,
                    imageSrc: n,
                    uploadType: e,
                    analyticsSource: p.Sbl.PROFILE_PANEL,
                    analyticsLocation: {
                        section: p.jXE.USER_PROFILE,
                        object: p.qAy.BUTTON_CTA
                    },
                    onSecondaryClick: i.closeAllModals,
                    ...t
                });
        }),
        !0)
    );
}
function Z(e) {
    let { user: n, uploadType: t, imageSrc: i, onClose: r, analyticsSource: p, analyticsLocation: v, onSecondaryClick: Z, ...h } = e,
        g = (0, o.ZP)(n.id),
        { primaryColor: C, secondaryColor: E } = (0, s.Z)({
            user: n,
            displayProfile: g,
            pendingAvatar: t === A.pC.AVATAR ? i : void 0,
            isPreview: !0
        }),
        P = t === A.pC.AVATAR || t === A.pC.BANNER,
        N = null != i,
        T = (0, l.Z)(t === A.pC.AVATAR ? f.cd.ANIMATED_AVATAR_MODAL_UPSELL : f.cd.ANIMATED_BANNER_MODAL_UPSELL);
    return P
        ? (0, a.jsx)(u.Z, {
              artURL: N ? void 0 : T,
              modalClassName: N ? m.modal : void 0,
              modalContentClassName: N ? m.modalContent : void 0,
              type: t === A.pC.AVATAR ? f.cd.ANIMATED_AVATAR_MODAL_UPSELL : f.cd.ANIMATED_BANNER_MODAL_UPSELL,
              title: t === A.pC.AVATAR ? b.intl.string(b.t['X7tO6+']) : b.intl.string(b.t.zXPa2N),
              body: t === A.pC.AVATAR ? b.intl.string(b.t.ifCRdH) : b.intl.string(b.t.yQAnf3),
              glowUp: t === A.pC.AVATAR ? b.intl.string(b.t.ifCRdH) : b.intl.string(b.t.yQAnf3),
              onSecondaryClick: () => {
                  null == Z || Z(), (0, d.$)(r);
              },
              secondaryCTA: b.intl.string(b.t.PcTCBw),
              onClose: r,
              enableArtBoxShadow: !1,
              analyticsSource: p,
              analyticsLocation: v,
              hideBackButton: !0,
              showEnhancedUpsell: !0,
              LeadingComponent: N
                  ? (0, a.jsx)('div', {
                        className: m.previewContainerParent,
                        children: (0, a.jsx)(c.Z, {
                            containerClassName: m.previewContainer,
                            user: n,
                            canUsePremiumCustomization: !0,
                            disabledInputs: !0,
                            pendingAvatar: t === A.pC.AVATAR ? i : void 0,
                            pendingBanner: t === A.pC.BANNER ? i : void 0,
                            pendingThemeColors: [C, E],
                            hideExampleButton: !0
                        })
                    })
                  : void 0,
              ...h
          })
        : null;
}
