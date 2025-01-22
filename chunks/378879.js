c.r(t),
    c.d(t, {
        default: function () {
            return E;
        },
        openProfileUpsellModal: function () {
            return L;
        }
    });
var e = c(200651);
c(192379);
var a = c(481060),
    d = c(921813),
    s = c(687158),
    o = c(576635),
    i = c(594174),
    f = c(98278),
    p = c(792254),
    r = c(790527),
    A = c(474936),
    b = c(981631),
    u = c(486324),
    l = c(388032),
    R = c(761346);
function L(n, t) {
    let d = i.default.getCurrentUser();
    return (
        null != d &&
        ((0, a.openModalLazy)(async () => {
            let { default: s } = await Promise.resolve().then(c.bind(c, 378879));
            return (c) =>
                (0, e.jsx)(s, {
                    user: d,
                    imageSrc: t,
                    uploadType: n,
                    analyticsSource: b.Sbl.PROFILE_PANEL,
                    analyticsLocation: {
                        section: b.jXE.USER_PROFILE,
                        object: b.qAy.BUTTON_CTA
                    },
                    onSecondaryClick: a.closeAllModals,
                    ...c
                });
        }),
        !0)
    );
}
function E(n) {
    let { user: t, uploadType: c, imageSrc: a, onClose: i, analyticsSource: b, analyticsLocation: L, onSecondaryClick: E, ...C } = n,
        Z = (0, s.ZP)(t.id),
        { primaryColor: _, secondaryColor: m } = (0, o.Z)({
            user: t,
            displayProfile: Z,
            pendingAvatar: c === u.pC.AVATAR ? a : void 0,
            isPreview: !0
        }),
        T = c === u.pC.AVATAR || c === u.pC.BANNER,
        N = null != a,
        g = (0, p.Z)(c === u.pC.AVATAR ? A.cd.ANIMATED_AVATAR_MODAL_UPSELL : A.cd.ANIMATED_BANNER_MODAL_UPSELL);
    return T
        ? (0, e.jsx)(r.Z, {
              artURL: N ? void 0 : g,
              modalClassName: N ? R.modal : void 0,
              modalContentClassName: N ? R.modalContent : void 0,
              type: c === u.pC.AVATAR ? A.cd.ANIMATED_AVATAR_MODAL_UPSELL : A.cd.ANIMATED_BANNER_MODAL_UPSELL,
              title: c === u.pC.AVATAR ? l.intl.string(l.t['X7tO6+']) : l.intl.string(l.t.zXPa2N),
              body: c === u.pC.AVATAR ? l.intl.string(l.t.ifCRdH) : l.intl.string(l.t.yQAnf3),
              glowUp: c === u.pC.AVATAR ? l.intl.string(l.t.ifCRdH) : l.intl.string(l.t.yQAnf3),
              onSecondaryClick: () => {
                  null == E || E(), (0, f.$)(i);
              },
              secondaryCTA: l.intl.string(l.t.PcTCBw),
              onClose: i,
              enableArtBoxShadow: !1,
              analyticsSource: b,
              analyticsLocation: L,
              hideBackButton: !0,
              showEnhancedUpsell: !0,
              LeadingComponent: N
                  ? (0, e.jsx)('div', {
                        className: R.previewContainerParent,
                        children: (0, e.jsx)(d.Z, {
                            containerClassName: R.previewContainer,
                            user: t,
                            canUsePremiumCustomization: !0,
                            disabledInputs: !0,
                            pendingAvatar: c === u.pC.AVATAR ? a : void 0,
                            pendingBanner: c === u.pC.BANNER ? a : void 0,
                            pendingThemeColors: [_, m],
                            hideExampleButton: !0
                        })
                    })
                  : void 0,
              ...C
          })
        : null;
}
