n.d(t, { Z: () => b }), n(388685), n(361932), n(187205), n(953529);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(620792),
    o = n(692547),
    c = n(481060),
    d = n(259580),
    u = n(293810),
    g = n(388032),
    f = n(57175);
function m(e) {
    let { checked: t, children: n } = e;
    return (0, r.jsxs)("div", {
        className: f.row,
        children: [
            (0, r.jsx)(c.Text, {
                variant: "text-md/normal",
                color: "interactive-text-active",
                className: f.rowText,
                children: n,
            }),
            t
                ? (0, r.jsx)(c.owK, {
                      size: "md",
                      color: "currentColor",
                      secondaryColor: o.Z.unsafe_rawColors.WHITE_500.css,
                      className: a()(f.rowIcon, f.rowIconChecked),
                  })
                : (0, r.jsx)("div", { className: a()(f.rowIcon, f.rowIconEmpty) }),
        ],
    });
}
function b(e) {
    let { children: t } = e,
        [n, l] = i.useState(!1),
        a = t.flatMap((e) => e.items.map((e) => e.completed)),
        o = a.filter((e) => e).length / a.length,
        b = 1 === o,
        p = (0, c.q_F)({ width: "".concat(100 * o, "%") }),
        h = [
            g.intl.format(g.t.wtQtXs, { promoPageGuideUrl: u.iv.PROMO_PAGE_GUIDE }),
            g.intl.format(g.t["0Fo0wf"], { caseStudiesUrl: u.iv.CASE_STUDIES }),
            g.intl.format(g.t["7JdzjA"], { subscriptionOfferingGuideUrl: u.iv.SUBSCRIPTION_OFFERING_GUIDE }),
            g.intl.format(g.t.zkXN6I, { tierStructureGuideUrl: u.iv.TIER_STRUCTURE_GUIDE }),
        ],
        x = n
            ? null
            : (0, r.jsxs)(c.C3N, {
                  children: [
                      !b &&
                          t.map((e, t) => {
                              let { title: n, items: l } = e;
                              return (0, r.jsxs)(
                                  i.Fragment,
                                  {
                                      children: [
                                          t > 0 && (0, r.jsx)(c.izJ, {}),
                                          (0, r.jsx)(c.gNt, {
                                              label: n,
                                              children: (0, r.jsx)(c.Kqy, {
                                                  gap: 8,
                                                  children: l.map((e, t) =>
                                                      (0, r.jsx)(
                                                          m,
                                                          {
                                                              children: e.description,
                                                              checked: e.completed,
                                                          },
                                                          t,
                                                      ),
                                                  ),
                                              }),
                                          }),
                                      ],
                                  },
                                  t,
                              );
                          }),
                      (0, r.jsx)(c.izJ, {}),
                      (0, r.jsx)(c.gNt, {
                          label: g.intl.string(g.t.FO0AIS),
                          children: (0, r.jsx)(c.Kqy, {
                              gap: 8,
                              children: h.map((e, t) =>
                                  (0, r.jsx)(
                                      "div",
                                      {
                                          className: f.row,
                                          children: (0, r.jsx)(c.Text, {
                                              variant: "text-md/normal",
                                              children: e,
                                          }),
                                      },
                                      t,
                                  ),
                              ),
                          }),
                      }),
                  ],
              });
    return (0, r.jsx)("div", {
        className: f.checklist,
        children: (0, r.jsx)("div", {
            className: f.container,
            children: (0, r.jsxs)(c.Kqy, {
                gap: 16,
                children: [
                    (0, r.jsxs)(c.P3F, {
                        className: f.headerBar,
                        onClick: () => l((e) => !e),
                        children: [
                            (0, r.jsx)(c.Heading, {
                                variant: "heading-md/semibold",
                                className: f.headerText,
                                children: g.intl.string(g.t["2Xbd/G"]),
                            }),
                            (0, r.jsx)(d.Z, {
                                direction: n ? d.Z.Directions.DOWN : d.Z.Directions.UP,
                                className: f.headerCaret,
                            }),
                        ],
                    }),
                    !b &&
                        (0, r.jsx)("div", {
                            className: f.progressBarOuter,
                            children: (0, r.jsx)(s.animated.div, {
                                className: f.progressBarInner,
                                style: p,
                            }),
                        }),
                    x,
                ],
            }),
        }),
    });
}
