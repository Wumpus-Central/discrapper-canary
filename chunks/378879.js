e.d(n, {
    default: () => L,
    s: () => E
});
var c = e(200651);
e(192379);
var a = e(481060),
    d = e(921813),
    s = e(687158),
    o = e(576635),
    i = e(594174),
    f = e(98278),
    A = e(792254),
    p = e(790527),
    r = e(474936),
    b = e(981631),
    l = e(486324),
    u = e(388032),
    R = e(731788);
function E(t, n) {
    let d = i.default.getCurrentUser();
    return (
        null != d &&
        ((0, a.ZDy)(async () => {
            let { default: s } = await Promise.resolve().then(e.bind(e, 378879));
            return (e) =>
                (0, c.jsx)(s, {
                    user: d,
                    imageSrc: n,
                    uploadType: t,
                    analyticsSource: b.Sbl.PROFILE_PANEL,
                    analyticsLocation: {
                        section: b.jXE.USER_PROFILE,
                        object: b.qAy.BUTTON_CTA
                    },
                    onSecondaryClick: a.pTH,
                    ...e
                });
        }),
        !0)
    );
}
function L(t) {
    let { user: n, uploadType: e, imageSrc: a, onClose: i, analyticsSource: b, analyticsLocation: E, onSecondaryClick: L, ...C } = t,
        Z = (0, s.ZP)(n.id),
        { primaryColor: _, secondaryColor: m } = (0, o.Z)({
            user: n,
            displayProfile: Z,
            pendingAvatar: e === l.pC.AVATAR ? a : void 0,
            isPreview: !0
        }),
        T = e === l.pC.AVATAR || e === l.pC.BANNER,
        N = null != a,
        g = (0, A.Z)(e === l.pC.AVATAR ? r.cd.ANIMATED_AVATAR_MODAL_UPSELL : r.cd.ANIMATED_BANNER_MODAL_UPSELL);
    return T
        ? (0, c.jsx)(p.Z, {
              artURL: N ? void 0 : g,
              modalClassName: N ? R.modal : void 0,
              modalContentClassName: N ? R.modalContent : void 0,
              type: e === l.pC.AVATAR ? r.cd.ANIMATED_AVATAR_MODAL_UPSELL : r.cd.ANIMATED_BANNER_MODAL_UPSELL,
              title: e === l.pC.AVATAR ? u.intl.string(u.t['X7tO6+']) : u.intl.string(u.t.zXPa2N),
              body: e === l.pC.AVATAR ? u.intl.string(u.t.ifCRdH) : u.intl.string(u.t.yQAnf3),
              glowUp: e === l.pC.AVATAR ? u.intl.string(u.t.ifCRdH) : u.intl.string(u.t.yQAnf3),
              onSecondaryClick: () => {
                  null == L || L(), (0, f.$)(i);
              },
              secondaryCTA: u.intl.string(u.t.PcTCBw),
              onClose: i,
              enableArtBoxShadow: !1,
              analyticsSource: b,
              analyticsLocation: E,
              hideBackButton: !0,
              showEnhancedUpsell: !0,
              LeadingComponent: N
                  ? (0, c.jsx)('div', {
                        className: R.previewContainerParent,
                        children: (0, c.jsx)(d.Z, {
                            containerClassName: R.previewContainer,
                            user: n,
                            canUsePremiumCustomization: !0,
                            disabledInputs: !0,
                            pendingAvatar: e === l.pC.AVATAR ? a : void 0,
                            pendingBanner: e === l.pC.BANNER ? a : void 0,
                            pendingThemeColors: [_, m],
                            hideExampleButton: !0
                        })
                    })
                  : void 0,
              ...C
          })
        : null;
}
