n.d(t, {
    default: () => g,
    s: () => Z
});
var c = n(255367);
n(73800);
var a = n(481060),
    d = n(678135),
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
function Z(e) {
    let { uploadType: t, imageSrc: d, analyticsSource: o } = e,
        s = r.default.getCurrentUser();
    return (
        null != s &&
        ((0, a.ZDy)(async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 378879));
            return (n) =>
                (0, c.jsx)(
                    e,
                    L(
                        {
                            user: s,
                            imageSrc: d,
                            uploadType: t,
                            analyticsSource: o,
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
function g(e) {
    var { user: t, uploadType: n, imageSrc: a, onClose: r, analyticsSource: b, analyticsLocation: Z, onSecondaryClick: g } = e,
        E = (function (e, t) {
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
    let m = (0, o.ZP)(t.id),
        { primaryColor: _, secondaryColor: C } = (0, s.Z)({
            user: t,
            displayProfile: m,
            pendingAvatarSrc: n === l.pC.AVATAR ? a : void 0,
            isPreview: !0
        }),
        O = n === l.pC.AVATAR || n === l.pC.BANNER,
        h = null != a,
        T = (0, f.Z)(n === l.pC.AVATAR ? A.cd.ANIMATED_AVATAR_MODAL_UPSELL : A.cd.ANIMATED_BANNER_MODAL_UPSELL);
    return O
        ? (0, c.jsx)(
              p.Z,
              L(
                  {
                      artURL: h ? void 0 : T,
                      modalClassName: h ? R.modal : void 0,
                      modalContentClassName: h ? R.modalContent : void 0,
                      type: n === l.pC.AVATAR ? A.cd.ANIMATED_AVATAR_MODAL_UPSELL : A.cd.ANIMATED_BANNER_MODAL_UPSELL,
                      title: n === l.pC.AVATAR ? u.intl.string(u.t['X7tO6+']) : u.intl.string(u.t.zXPa2N),
                      body: n === l.pC.AVATAR ? u.intl.string(u.t.ifCRdH) : u.intl.string(u.t.yQAnf3),
                      glowUp: n === l.pC.AVATAR ? u.intl.string(u.t.ifCRdH) : u.intl.string(u.t.yQAnf3),
                      onSecondaryClick: () => {
                          null == g || g(), (0, i.$)(r);
                      },
                      secondaryCTA: u.intl.string(u.t.PcTCBw),
                      onClose: r,
                      enableArtBoxShadow: !1,
                      analyticsSource: b,
                      analyticsLocation: Z,
                      hideBackButton: !0,
                      showEnhancedUpsell: !0,
                      LeadingComponent: h
                          ? (0, c.jsx)('div', {
                                className: R.previewContainerParent,
                                children: (0, c.jsx)(d.Z, {
                                    containerClassName: R.previewContainer,
                                    user: t,
                                    canUsePremiumCustomization: !0,
                                    disabledInputs: !0,
                                    pendingAvatar: n === l.pC.AVATAR ? a : void 0,
                                    pendingBanner: n === l.pC.BANNER ? a : void 0,
                                    pendingThemeColors: [_, C],
                                    hideExampleButton: !0
                                })
                            })
                          : void 0
                  },
                  E
              )
          )
        : null;
}
