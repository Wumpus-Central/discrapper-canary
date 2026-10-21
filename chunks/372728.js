n.d(t, { A: () => T });
var i = n(477900),
    a = n(582128),
    r = n(877624),
    l = n(793574),
    s = n(688810),
    o = n(975571),
    d = n(713271),
    c = n(852218),
    u = n(164832),
    m = n(323390),
    f = n(562730),
    g = n(60163),
    b = n(652215),
    p = n(310235),
    A = n(685477),
    P = n(973507),
    E = n(105292),
    C = n(635088);
function T(e) {
    let { enabled: t } = f.A.useConfig({ location: e }),
        { enabled: n } = m.A.useConfig({ location: e }),
        { assetUrl: T } = (0, g.A)(r.C.MARKETING_PAGE_REWARDS_BENTO_BOX),
        { analyticsLocations: _ } = (0, s.Ay)(l.A.PREMIUM_MARKETING_BENTO_BOX);
    return (0, a.useMemo)(
        () =>
            t && n && null != T
                ? {
                      name: d.N.CODE_BLURPLE,
                      caption: (0, i.jsx)("img", { src: C.A, alt: "Call of Duty: MW4" }),
                      title: E.intl.string(P.default.E1sPHw),
                      description: E.intl.string(P.default.py5vQi),
                      previewImage: T,
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
                                      analyticsLocations: _,
                                      isLocked: !0,
                                  }),
                          },
                      ],
                  }
                : null,
        [t, n, T, _],
    );
}
