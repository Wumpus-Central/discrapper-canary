n.d(t, { G: () => g, default: () => E });
var i = n(627968);
n(64700);
var r = n(397927),
    a = n(287070),
    l = n(950191),
    s = n(101928),
    o = n(287809),
    d = n(87719),
    c = n(377108),
    u = n(244975),
    A = n(788868),
    h = n(652215),
    _ = n(339984),
    m = n(985018),
    p = n(698290);
function g(e) {
    let { uploadType: t, imageSrc: a, analyticsSource: l } = e,
        s = o.default.getCurrentUser();
    return (
        null != s &&
        ((0, r.mMO)(async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 688796));
            return (n) =>
                (0, i.jsx)(e, {
                    user: s,
                    imageSrc: a,
                    uploadType: t,
                    analyticsSource: l,
                    analyticsLocation: { section: h.JJy.USER_PROFILE, object: h.ZSU.BUTTON_CTA },
                    onSecondaryClick: r.s7G,
                    ...n,
                });
        }),
        !0)
    );
}
function E(e) {
    let {
            user: t,
            uploadType: n,
            imageSrc: r,
            onClose: o,
            analyticsSource: h,
            analyticsLocation: g,
            onSecondaryClick: E,
            ...f
        } = e,
        I = (0, l.Ay)(t.id),
        { primaryColor: C, secondaryColor: N } = (0, s.A)({
            user: t,
            displayProfile: I,
            pendingAvatarSrc: n === _.HL.AVATAR ? r : void 0,
            isPreview: !0,
        }),
        T = n === _.HL.AVATAR || n === _.HL.BANNER,
        S = null != r,
        x = (0, c.A)(n === _.HL.AVATAR ? A.e.ANIMATED_AVATAR_MODAL_UPSELL : A.e.ANIMATED_BANNER_MODAL_UPSELL);
    return T
        ? (0, i.jsx)(u.A, {
              artURL: S ? void 0 : x,
              modalClassName: S ? p.yl : void 0,
              modalContentClassName: S ? p.jE : void 0,
              type: n === _.HL.AVATAR ? A.e.ANIMATED_AVATAR_MODAL_UPSELL : A.e.ANIMATED_BANNER_MODAL_UPSELL,
              title: n === _.HL.AVATAR ? m.intl.string(m.t.X7tO60) : m.intl.string(m.t.zXPa2C),
              body: n === _.HL.AVATAR ? m.intl.string(m.t.ifCRdB) : m.intl.string(m.t.yQAnf4),
              glowUp: n === _.HL.AVATAR ? m.intl.string(m.t.ifCRdB) : m.intl.string(m.t.yQAnf4),
              onSecondaryClick: () => {
                  E?.(), (0, d.x)(o);
              },
              secondaryCTA: m.intl.string(m.t.PcTCB7),
              onClose: o,
              enableArtBoxShadow: !1,
              analyticsSource: h,
              analyticsLocation: g,
              hideBackButton: !0,
              showEnhancedUpsell: !0,
              LeadingComponent: S
                  ? (0, i.jsx)("div", {
                        className: p.wC,
                        children: (0, i.jsx)(a.A, {
                            containerClassName: p.i1,
                            user: t,
                            canUsePremiumCustomization: !0,
                            disabledInputs: !0,
                            pendingAvatar: n === _.HL.AVATAR ? r : void 0,
                            pendingBanner: n === _.HL.BANNER ? r : void 0,
                            pendingThemeColors: [C, N],
                            hideExampleButton: !0,
                        }),
                    })
                  : void 0,
              ...f,
          })
        : null;
}
