var i = n(477900),
    a = n(582128),
    r = n(517352),
    l = n(793574),
    s = n(688810),
    o = n(975571),
    d = n(713271),
    c = n(852218),
    u = n(670328),
    f = n(323390),
    m = n(562730),
    g = n(60163),
    b = n(652215),
    p = n(749962),
    A = n(116716),
    P = n(770300),
    E = n(792996),
    _ = n(635088);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { enabled: t } = m.A.useConfig({ location: e }),
                { enabled: n } = f.A.useConfig({ location: e }),
                { assetUrl: O } = (0, g.A)(r.oW.MARKETING_PAGE_REWARDS_BENTO_BOX),
                { analyticsLocations: T } = (0, s.Ay)(l.A.PREMIUM_MARKETING_BENTO_BOX);
            return (0, a.useMemo)(
                () =>
                    t && n && null != O
                        ? {
                              name: d.N.CODE_BLURPLE,
                              caption: (0, i.jsx)("img", { src: _.A, alt: "Call of Duty: MW4" }),
                              title: E.intl.string(P.default.E1sPHw),
                              description: E.intl.string(P.default.py5vQi),
                              previewImage: O,
                              descriptionCta: E.intl.string(A.default.WMK6Pg),
                              actions: [
                                  {
                                      variant: "secondary",
                                      text: E.intl.string(A.default.WMK6Pg),
                                      onClick: () =>
                                          (0, u.P)({
                                              partnerIds: [c.Bt],
                                              title: E.intl.string(P.default.PFtZV6),
                                              subtitle: E.intl.format(p.default.ieA3V0, {
                                                  termsUrl: o.A.getArticleURL(b.MVz.CODE_BLURPLE_PROMOTION),
                                              }),
                                              analyticsLocations: T,
                                              isLocked: !0,
                                          }),
                                  },
                              ],
                          }
                        : null,
                [t, n, O, T],
            );
        },
    },
);
