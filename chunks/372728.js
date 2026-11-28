var i = n(477900),
    a = n(582128),
    l = n(517352),
    r = n(793574),
    o = n(688810),
    s = n(975571),
    d = n(713271),
    c = n(852218),
    u = n(88210),
    f = n(323390),
    m = n(562730),
    g = n(60163),
    b = n(652215),
    A = n(464660),
    p = n(30838),
    P = n(667510),
    E = n(792996),
    _ = n(635088);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { enabled: t } = m.A.useConfig({ location: e }),
                { enabled: n } = f.A.useConfig({ location: e }),
                { assetUrl: C } = (0, g.A)(l.oW.MARKETING_PAGE_REWARDS_BENTO_BOX),
                { analyticsLocations: T } = (0, o.Ay)(r.A.PREMIUM_MARKETING_BENTO_BOX);
            return (0, a.useMemo)(
                () =>
                    t && n && null != C
                        ? {
                              name: d.N.CODE_BLURPLE,
                              caption: (0, i.jsx)("img", { src: _.A, alt: "Call of Duty: MW4" }),
                              title: E.intl.string(P.default.E1sPHw),
                              description: E.intl.string(P.default.py5vQi),
                              previewImage: C,
                              descriptionCta: E.intl.string(p.default.WMK6Pg),
                              actions: [
                                  {
                                      variant: "secondary",
                                      text: E.intl.string(p.default.WMK6Pg),
                                      onClick: () =>
                                          (0, u.P)({
                                              partnerIds: [c.Bt],
                                              title: E.intl.string(P.default.PFtZV6),
                                              subtitle: E.intl.format(A.default.ieA3V0, {
                                                  termsUrl: s.A.getArticleURL(b.MVz.CODE_BLURPLE_PROMOTION),
                                              }),
                                              analyticsLocations: T,
                                              isLocked: !0,
                                          }),
                                  },
                              ],
                          }
                        : null,
                [t, n, C, T],
            );
        },
    },
);
