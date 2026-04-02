n.d(t, { A: () => S });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(582754),
    a = n(397927),
    r = n(736653),
    o = n(166403),
    d = n(392943),
    c = n(975571),
    u = n(412260),
    m = n(852218),
    g = n(783420),
    _ = n(811611),
    x = n(788868),
    A = n(652215),
    h = n(103659),
    p = n(985018),
    T = n(223093),
    f = n(386271);
function S() {
    let e = (0, r.Ay)(),
        t = (0, l.Mw)(e),
        n = (0, s.bG)([u.A], () => {
            let e = u.A.getPromotionByTypeAndKey(m.pt.MARKETING_MOMENT, m.zw);
            return null == e || e.endDate < new Date() ? null : e;
        }),
        S = (0, s.bG)([o.A], () => o.A.getPremiumTypeSubscription());
    return null == n
        ? null
        : (0, i.jsxs)(a.hLv, {
              color: "nitro-pink",
              className: T.kL,
              children: [
                  (0, i.jsxs)(a.BJc, {
                      direction: "horizontal",
                      justify: "space-between",
                      align: "center",
                      className: T.wx,
                      children: [
                          (0, i.jsx)(d.A, { className: T.Ss, color: t ? "white" : "black" }),
                          (0, i.jsx)(a.Text, {
                              variant: "text-sm/medium",
                              color: t ? "text-subtle" : "text-default",
                              children: (0, _.ux)(n.endDate.toISOString()),
                          }),
                      ],
                  }),
                  (0, i.jsx)(a.cGx, { className: T.yF }),
                  (0, i.jsxs)(a.BJc, {
                      direction: "horizontal",
                      align: "center",
                      gap: 24,
                      children: [
                          (0, i.jsxs)(a.BJc, {
                              gap: 12,
                              className: T.rf,
                              children: [
                                  (0, i.jsx)(a.Heading, {
                                      variant: "heading-xl/semibold",
                                      children: p.intl.string(h.default["7OPz+z"]),
                                  }),
                                  (0, i.jsx)(a.Text, {
                                      variant: "text-sm/medium",
                                      children: p.intl.format(null != S ? h.default["PyQY5+"] : h.default.SvqMnV, {
                                          date: n.endDate,
                                          helpCenterLink: c.A.getArticleURL(A.MVz.NITRO_CONTROL_CAMPAIGN),
                                      }),
                                  }),
                                  (0, i.jsx)("div", {
                                      className: T.lO,
                                      children: (0, i.jsx)(g.A, {
                                          subscriptionTier: x.pe.TIER_2,
                                          children: (e) => {
                                              let { onClick: t } = e;
                                              return (0, i.jsx)(a.Button, {
                                                  variant: "expressive",
                                                  size: "md",
                                                  icon: a.tvc,
                                                  text: p.intl.string(p.t.J61px0),
                                                  onClick: t,
                                              });
                                          },
                                      }),
                                  }),
                              ],
                          }),
                          (0, i.jsx)("img", { src: f.A, alt: "", "aria-hidden": "true", className: T.oz }),
                      ],
                  }),
              ],
          });
}
