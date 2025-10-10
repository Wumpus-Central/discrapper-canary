n.d(t, { Z: () => f }), n(388685), n(361932), n(187205), n(953529);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    s = n.n(l),
    a = n(137317),
    o = n(692547),
    c = n(481060),
    d = n(259580),
    u = n(293810),
    g = n(388032),
    m = n(937028);
function p(e) {
    let { checked: t, children: n } = e;
    return (0, r.jsxs)("div", {
        className: m.row,
        children: [
            (0, r.jsx)(c.Text, {
                variant: "text-md/normal",
                color: "interactive-active",
                className: m.rowText,
                children: n,
            }),
            t
                ? (0, r.jsx)(c.owK, {
                      size: "md",
                      color: "currentColor",
                      secondaryColor: o.Z.unsafe_rawColors.WHITE_500.css,
                      className: s()(m.rowIcon, m.rowIconChecked),
                  })
                : (0, r.jsx)("div", { className: s()(m.rowIcon, m.rowIconEmpty) }),
        ],
    });
}
function f(e) {
    let { children: t } = e,
        [n, l] = i.useState(!1),
        s = t.flatMap((e) => e.items.map((e) => e.completed)),
        o = s.filter((e) => e).length / s.length,
        f = 1 === o,
        h = (0, c.q_F)({ width: "".concat(100 * o, "%") }),
        x = [
            g.intl.format(g.t.wtQtXl, { promoPageGuideUrl: u.iv.PROMO_PAGE_GUIDE }),
            g.intl.format(g.t["0Fo0wc"], { caseStudiesUrl: u.iv.CASE_STUDIES }),
            g.intl.format(g.t["7JdzjI"], { subscriptionOfferingGuideUrl: u.iv.SUBSCRIPTION_OFFERING_GUIDE }),
            g.intl.format(g.t.zkXN6O, { tierStructureGuideUrl: u.iv.TIER_STRUCTURE_GUIDE }),
        ],
        b = n
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      !f &&
                          t.map((e, t) => {
                              let { title: n, items: l } = e;
                              return (0, r.jsxs)(
                                  i.Fragment,
                                  {
                                      children: [
                                          t > 0 && (0, r.jsx)(c.izJ, { className: m.divider }),
                                          (0, r.jsx)(c.vwX, {
                                              className: m.categoryTitle,
                                              children: n,
                                          }),
                                          l.map((e, t) =>
                                              (0, r.jsx)(
                                                  p,
                                                  {
                                                      children: e.description,
                                                      checked: e.completed,
                                                  },
                                                  t,
                                              ),
                                          ),
                                      ],
                                  },
                                  t,
                              );
                          }),
                      (0, r.jsx)(c.izJ, { className: m.divider }),
                      (0, r.jsx)(c.vwX, {
                          className: m.categoryTitle,
                          children: g.intl.string(g.t.FO0AIS),
                      }),
                      x.map((e, t) =>
                          (0, r.jsx)(
                              "div",
                              {
                                  className: m.row,
                                  children: (0, r.jsx)(c.Text, {
                                      variant: "text-md/normal",
                                      children: e,
                                  }),
                              },
                              t,
                          ),
                      ),
                  ],
              });
    return (0, r.jsx)("div", {
        className: m.checklist,
        children: (0, r.jsxs)("div", {
            className: m.container,
            children: [
                (0, r.jsxs)(c.P3F, {
                    className: m.headerBar,
                    onClick: () => l((e) => !e),
                    children: [
                        (0, r.jsx)(c.X6q, {
                            variant: "heading-md/semibold",
                            className: m.headerText,
                            children: g.intl.string(g.t["2Xbd/P"]),
                        }),
                        (0, r.jsx)(d.Z, {
                            direction: n ? d.Z.Directions.DOWN : d.Z.Directions.UP,
                            className: m.headerCaret,
                        }),
                    ],
                }),
                !f &&
                    (0, r.jsx)("div", {
                        className: m.progressBarOuter,
                        children: (0, r.jsx)(a.animated.div, {
                            className: m.progressBarInner,
                            style: h,
                        }),
                    }),
                b,
            ],
        }),
    });
}
