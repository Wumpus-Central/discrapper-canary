n.d(t, {
    default: () => Z,
    s: () => E
});
var c = n(200651);
n(192379);
var a = n(481060),
    d = n(921813),
    o = n(687158),
    s = n(576635),
    r = n(594174),
    i = n(98278),
    f = n(792254),
    p = n(790527),
    A = n(474936),
    b = n(981631),
    l = n(486324),
    u = n(388032),
    R = n(784687);
function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            c = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (c = c.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            c.forEach(function (t) {
                var c;
                (c = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: c,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = c);
            });
    }
    return e;
}
function E(e, t) {
    let d = r.default.getCurrentUser();
    return (
        null != d &&
        ((0, a.ZDy)(async () => {
            let { default: o } = await Promise.resolve().then(n.bind(n, 378879));
            return (n) =>
                (0, c.jsx)(
                    o,
                    L(
                        {
                            user: d,
                            imageSrc: t,
                            uploadType: e,
                            analyticsSource: b.Sbl.PROFILE_PANEL,
                            analyticsLocation: {
                                section: b.jXE.USER_PROFILE,
                                object: b.qAy.BUTTON_CTA
                            },
                            onSecondaryClick: a.pTH
                        },
                        n
                    )
                );
        }),
        !0)
    );
}
function Z(e) {
    var { user: t, uploadType: n, imageSrc: a, onClose: r, analyticsSource: b, analyticsLocation: E, onSecondaryClick: Z } = e,
        g = (function (e, t) {
            if (null == e) return {};
            var n,
                c,
                a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        c,
                        a = {},
                        d = Object.keys(e);
                    for (c = 0; c < d.length; c++) (n = d[c]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var d = Object.getOwnPropertySymbols(e);
                for (c = 0; c < d.length; c++) (n = d[c]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
            }
            return a;
        })(e, ['user', 'uploadType', 'imageSrc', 'onClose', 'analyticsSource', 'analyticsLocation', 'onSecondaryClick']);
    let _ = (0, o.ZP)(t.id),
        { primaryColor: m, secondaryColor: O } = (0, s.Z)({
            user: t,
            displayProfile: _,
            pendingAvatarSrc: n === l.pC.AVATAR ? a : void 0,
            isPreview: !0
        }),
        C = n === l.pC.AVATAR || n === l.pC.BANNER,
        N = null != a,
        h = (0, f.Z)(n === l.pC.AVATAR ? A.cd.ANIMATED_AVATAR_MODAL_UPSELL : A.cd.ANIMATED_BANNER_MODAL_UPSELL);
    return C
        ? (0, c.jsx)(
              p.Z,
              L(
                  {
                      artURL: N ? void 0 : h,
                      modalClassName: N ? R.modal : void 0,
                      modalContentClassName: N ? R.modalContent : void 0,
                      type: n === l.pC.AVATAR ? A.cd.ANIMATED_AVATAR_MODAL_UPSELL : A.cd.ANIMATED_BANNER_MODAL_UPSELL,
                      title: n === l.pC.AVATAR ? u.NW.string(u.t['X7tO6+']) : u.NW.string(u.t.zXPa2N),
                      body: n === l.pC.AVATAR ? u.NW.string(u.t.ifCRdH) : u.NW.string(u.t.yQAnf3),
                      glowUp: n === l.pC.AVATAR ? u.NW.string(u.t.ifCRdH) : u.NW.string(u.t.yQAnf3),
                      onSecondaryClick: () => {
                          null == Z || Z(), (0, i.$)(r);
                      },
                      secondaryCTA: u.NW.string(u.t.PcTCBw),
                      onClose: r,
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
                                    user: t,
                                    canUsePremiumCustomization: !0,
                                    disabledInputs: !0,
                                    pendingAvatar: n === l.pC.AVATAR ? a : void 0,
                                    pendingBanner: n === l.pC.BANNER ? a : void 0,
                                    pendingThemeColors: [m, O],
                                    hideExampleButton: !0
                                })
                            })
                          : void 0
                  },
                  g
              )
          )
        : null;
}
