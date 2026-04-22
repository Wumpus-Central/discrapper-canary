s.d(t, { A: () => E });
var r = s(627968);
s(64700);
var a = s(311907),
    i = s(462887),
    n = s(315629),
    l = s(331322),
    o = s(834730),
    c = s(404778),
    d = s(534514),
    m = s(821609),
    u = s(403581),
    _ = s(736653),
    x = s(166403),
    p = s(392943),
    g = s(975571),
    h = s(412260),
    f = s(852218),
    C = s(783420),
    b = s(811611),
    j = s(788868),
    A = s(652215),
    N = s(509287),
    I = s(985018),
    T = s(58396),
    v = s(386271);
function E() {
    let e = (0, _.Ay)(),
        t = (0, i.M)(e),
        s = (0, a.bG)([h.A], () => {
            let e = h.A.getPromotionByTypeAndKey(f.pt.MARKETING_MOMENT, f.zw);
            return null == e || e.endDate < new Date() ? null : e;
        }),
        E = (0, a.bG)([x.A], () => x.A.getPremiumTypeSubscription());
    return null == s
        ? null
        : (0, r.jsxs)(n.h, {
              color: "nitro-pink",
              className: T.kL,
              children: [
                  (0, r.jsxs)(l.B, {
                      direction: "horizontal",
                      justify: "space-between",
                      align: "center",
                      className: T.wx,
                      children: [
                          (0, r.jsx)(p.A, { className: T.Ss, color: t ? "white" : "black" }),
                          (0, r.jsx)(o.E, {
                              variant: "text-sm/medium",
                              color: t ? "text-subtle" : "text-default",
                              children: (0, b.ux)(s.endDate.toISOString()),
                          }),
                      ],
                  }),
                  (0, r.jsx)(c.c, { className: T.yF }),
                  (0, r.jsxs)(l.B, {
                      direction: "horizontal",
                      align: "center",
                      gap: 24,
                      children: [
                          (0, r.jsxs)(l.B, {
                              gap: 12,
                              className: T.rf,
                              children: [
                                  (0, r.jsx)(d.D, {
                                      variant: "heading-xl/semibold",
                                      children: I.intl.string(N.default["7OPz+z"]),
                                  }),
                                  (0, r.jsx)(o.E, {
                                      variant: "text-sm/medium",
                                      children: I.intl.format(null != E ? N.default["PyQY5+"] : N.default.SvqMnV, {
                                          date: s.endDate,
                                          helpCenterLink: g.A.getArticleURL(A.MVz.NITRO_CONTROL_CAMPAIGN),
                                      }),
                                  }),
                                  (0, r.jsx)("div", {
                                      className: T.lO,
                                      children: (0, r.jsx)(C.A, {
                                          subscriptionTier: j.pe.TIER_2,
                                          children: (e) => {
                                              let { onClick: t } = e;
                                              return (0, r.jsx)(m.$, {
                                                  variant: "expressive",
                                                  size: "md",
                                                  icon: u.t,
                                                  text: I.intl.string(I.t.J61px0),
                                                  onClick: t,
                                              });
                                          },
                                      }),
                                  }),
                              ],
                          }),
                          (0, r.jsx)("img", { src: v.A, alt: "", "aria-hidden": "true", className: T.oz }),
                      ],
                  }),
              ],
          });
}
