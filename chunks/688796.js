n.d(t, {
    G: () => y,
    default: () => E,
});
var c = n(627968);
n(64700);
var a = n(397927),
    d = n(287070),
    s = n(950191),
    o = n(101928),
    r = n(287809),
    A = n(87719),
    i = n(377108),
    f = n(244975),
    p = n(788868),
    l = n(652215),
    b = n(339984),
    u = n(985018),
    L = n(698290);
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            c = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (c = c.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            c.forEach(function (t) {
                var c;
                (c = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: c,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = c);
            });
    }
    return e;
}
function y(e) {
    let { uploadType: t, imageSrc: d, analyticsSource: s } = e,
        o = r.default.getCurrentUser();
    return (
        null != o &&
        ((0, a.mMO)(async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 688796));
            return (n) =>
                (0, c.jsx)(
                    e,
                    g(
                        {
                            user: o,
                            imageSrc: d,
                            uploadType: t,
                            analyticsSource: s,
                            analyticsLocation: {
                                section: l.JJy.USER_PROFILE,
                                object: l.ZSU.BUTTON_CTA,
                            },
                            onSecondaryClick: a.s7G,
                        },
                        n,
                    ),
                );
        }),
        !0)
    );
}
function E(e) {
    let {
            user: t,
            uploadType: n,
            imageSrc: a,
            onClose: r,
            analyticsSource: l,
            analyticsLocation: y,
            onSecondaryClick: E,
        } = e,
        m = (function (e, t) {
            if (null == e) return {};
            var n,
                c,
                a,
                d = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (a = 0, n = Reflect.ownKeys(e); a < n.length; a++)
                    (c = n[a]),
                        !(t.indexOf(c) >= 0) && Object.prototype.propertyIsEnumerable.call(e, c) && (d[c] = e[c]);
                return d;
            }
            if (
                ((d = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        c,
                        a = {},
                        d = Object.getOwnPropertyNames(e);
                    for (c = 0; c < d.length; c++)
                        (n = d[c]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
                    return a;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
                    (c = n[a]),
                        !(t.indexOf(c) >= 0) && Object.prototype.propertyIsEnumerable.call(e, c) && (d[c] = e[c]);
            return d;
        })(e, [
            "user",
            "uploadType",
            "imageSrc",
            "onClose",
            "analyticsSource",
            "analyticsLocation",
            "onSecondaryClick",
        ]),
        O = (0, s.Ay)(t.id),
        { primaryColor: R, secondaryColor: _ } = (0, o.A)({
            user: t,
            displayProfile: O,
            pendingAvatarSrc: n === b.HL.AVATAR ? a : void 0,
            isPreview: !0,
        }),
        h = n === b.HL.AVATAR || n === b.HL.BANNER,
        N = null != a,
        T = (0, i.A)(n === b.HL.AVATAR ? p.e.ANIMATED_AVATAR_MODAL_UPSELL : p.e.ANIMATED_BANNER_MODAL_UPSELL);
    return h
        ? (0, c.jsx)(
              f.A,
              g(
                  {
                      artURL: N ? void 0 : T,
                      modalClassName: N ? L.yl : void 0,
                      modalContentClassName: N ? L.jE : void 0,
                      type: n === b.HL.AVATAR ? p.e.ANIMATED_AVATAR_MODAL_UPSELL : p.e.ANIMATED_BANNER_MODAL_UPSELL,
                      title: n === b.HL.AVATAR ? u.intl.string(u.t.X7tO60) : u.intl.string(u.t.zXPa2C),
                      body: n === b.HL.AVATAR ? u.intl.string(u.t.ifCRdB) : u.intl.string(u.t.yQAnf4),
                      glowUp: n === b.HL.AVATAR ? u.intl.string(u.t.ifCRdB) : u.intl.string(u.t.yQAnf4),
                      onSecondaryClick: () => {
                          null == E || E(), (0, A.x)(r);
                      },
                      secondaryCTA: u.intl.string(u.t.PcTCB7),
                      onClose: r,
                      enableArtBoxShadow: !1,
                      analyticsSource: l,
                      analyticsLocation: y,
                      hideBackButton: !0,
                      showEnhancedUpsell: !0,
                      LeadingComponent: N
                          ? (0, c.jsx)("div", {
                                className: L.wC,
                                children: (0, c.jsx)(d.A, {
                                    containerClassName: L.i1,
                                    user: t,
                                    canUsePremiumCustomization: !0,
                                    disabledInputs: !0,
                                    pendingAvatar: n === b.HL.AVATAR ? a : void 0,
                                    pendingBanner: n === b.HL.BANNER ? a : void 0,
                                    pendingThemeColors: [R, _],
                                    hideExampleButton: !0,
                                }),
                            })
                          : void 0,
                  },
                  m,
              ),
          )
        : null;
}
