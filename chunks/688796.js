n.d(t, { G: () => E, default: () => I });
var i = n(627968);
n(64700);
var r = n(397927),
    l = n(287070),
    a = n(950191),
    s = n(101928),
    o = n(287809),
    d = n(87719),
    c = n(414345),
    u = n(377108),
    A = n(244975),
    h = n(788868),
    _ = n(652215),
    m = n(339984),
    g = n(985018),
    p = n(698290);
function E(e) {
    let { uploadType: t, imageSrc: l, analyticsSource: a } = e,
        s = o.default.getCurrentUser();
    return (
        null != s &&
        ((0, r.mMO)(async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 688796));
            return (n) =>
                (0, i.jsx)(e, {
                    user: s,
                    imageSrc: l,
                    uploadType: t,
                    analyticsSource: a,
                    analyticsLocation: { section: _.JJy.USER_PROFILE, object: _.ZSU.BUTTON_CTA },
                    onSecondaryClick: r.s7G,
                    ...n,
                });
        }),
        !0)
    );
}
function I(e) {
    let {
            user: t,
            uploadType: n,
            imageSrc: r,
            onClose: o,
            analyticsSource: _,
            analyticsLocation: E,
            onSecondaryClick: I,
            ...f
        } = e,
        C = (0, a.Ay)(t.id),
        { primaryColor: T, secondaryColor: N } = (0, s.A)({
            user: t,
            displayProfile: C,
            pendingAvatarSrc: n === m.HL.AVATAR ? r : void 0,
            isPreview: !0,
        }),
        S = n === m.HL.AVATAR || n === m.HL.BANNER,
        x = null != r,
        v = (0, u.u)(n === m.HL.AVATAR ? h.e.ANIMATED_AVATAR_MODAL_UPSELL : h.e.ANIMATED_BANNER_MODAL_UPSELL),
        y = (0, u.A)(n === m.HL.AVATAR ? h.e.ANIMATED_AVATAR_MODAL_UPSELL : h.e.ANIMATED_BANNER_MODAL_UPSELL);
    return S
        ? (0, c.g1)({ location: "getReducedMotionImageUrl" })
            ? (0, i.jsx)(A.F, {
                  title: n === m.HL.AVATAR ? g.intl.string(g.t.X7tO60) : g.intl.string(g.t.zXPa2C),
                  subtitle: n === m.HL.AVATAR ? g.intl.string(g.t.ifCRdB) : g.intl.string(g.t.yQAnf4),
                  graphic: y,
                  onSecondaryClick: () => {
                      I?.(), (0, d.x)(o);
                  },
                  secondaryCTA: g.intl.string(g.t.PcTCB7),
                  onClose: o,
                  ...f,
              })
            : (0, i.jsx)(A.A, {
                  artURL: x ? void 0 : v,
                  modalClassName: x ? p.yl : void 0,
                  modalContentClassName: x ? p.jE : void 0,
                  type: n === m.HL.AVATAR ? h.e.ANIMATED_AVATAR_MODAL_UPSELL : h.e.ANIMATED_BANNER_MODAL_UPSELL,
                  title: n === m.HL.AVATAR ? g.intl.string(g.t.X7tO60) : g.intl.string(g.t.zXPa2C),
                  body: n === m.HL.AVATAR ? g.intl.string(g.t.ifCRdB) : g.intl.string(g.t.yQAnf4),
                  glowUp: n === m.HL.AVATAR ? g.intl.string(g.t.ifCRdB) : g.intl.string(g.t.yQAnf4),
                  onSecondaryClick: () => {
                      I?.(), (0, d.x)(o);
                  },
                  secondaryCTA: g.intl.string(g.t.PcTCB7),
                  onClose: o,
                  enableArtBoxShadow: !1,
                  analyticsSource: _,
                  analyticsLocation: E,
                  hideBackButton: !0,
                  showEnhancedUpsell: !0,
                  LeadingComponent: x
                      ? (0, i.jsx)("div", {
                            className: p.wC,
                            children: (0, i.jsx)(l.A, {
                                containerClassName: p.i1,
                                user: t,
                                canUsePremiumCustomization: !0,
                                disabledInputs: !0,
                                pendingAvatar: n === m.HL.AVATAR ? r : void 0,
                                pendingBanner: n === m.HL.BANNER ? r : void 0,
                                pendingThemeColors: [T, N],
                                hideExampleButton: !0,
                            }),
                        })
                      : void 0,
                  ...f,
              })
        : null;
}
