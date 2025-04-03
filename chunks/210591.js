n.d(t, { Z: () => h }), n(47120), n(13667), n(390547), n(266796);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(642128),
    o = n(692547),
    c = n(481060),
    d = n(259580),
    u = n(293810),
    m = n(388032),
    g = n(218801);
function p(e) {
    let { checked: t, children: n } = e;
    return (0, r.jsxs)('div', {
        className: g.row,
        children: [
            (0, r.jsx)(c.Text, {
                variant: 'text-md/normal',
                color: 'interactive-active',
                className: g.rowText,
                children: n
            }),
            t
                ? (0, r.jsx)(c.owK, {
                      size: 'md',
                      color: 'currentColor',
                      secondaryColor: o.Z.unsafe_rawColors.WHITE_500.css,
                      className: a()(g.rowIcon, g.rowIconChecked)
                  })
                : (0, r.jsx)('div', { className: a()(g.rowIcon, g.rowIconEmpty) })
        ]
    });
}
function h(e) {
    let { children: t } = e,
        [n, s] = i.useState(!1),
        a = t.flatMap((e) => e.items.map((e) => e.completed)),
        o = a.filter((e) => e).length / a.length,
        h = 1 === o,
        f = (0, c.q_F)({ width: ''.concat(100 * o, '%') }),
        b = [m.NW.format(m.t.wtQtXl, { promoPageGuideUrl: u.iv.PROMO_PAGE_GUIDE }), m.NW.format(m.t['0Fo0wc'], { caseStudiesUrl: u.iv.CASE_STUDIES }), m.NW.format(m.t['7JdzjI'], { subscriptionOfferingGuideUrl: u.iv.SUBSCRIPTION_OFFERING_GUIDE }), m.NW.format(m.t.zkXN6O, { tierStructureGuideUrl: u.iv.TIER_STRUCTURE_GUIDE })],
        x = n
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      !h &&
                          t.map((e, t) => {
                              let { title: n, items: s } = e;
                              return (0, r.jsxs)(
                                  i.Fragment,
                                  {
                                      children: [
                                          t > 0 && (0, r.jsx)(c.$i$, { className: g.divider }),
                                          (0, r.jsx)(c.vwX, {
                                              className: g.categoryTitle,
                                              children: n
                                          }),
                                          s.map((e, t) =>
                                              (0, r.jsx)(
                                                  p,
                                                  {
                                                      children: e.description,
                                                      checked: e.completed
                                                  },
                                                  t
                                              )
                                          )
                                      ]
                                  },
                                  t
                              );
                          }),
                      (0, r.jsx)(c.$i$, { className: g.divider }),
                      (0, r.jsx)(c.vwX, {
                          className: g.categoryTitle,
                          children: m.NW.string(m.t.FO0AIS)
                      }),
                      b.map((e, t) =>
                          (0, r.jsx)(
                              'div',
                              {
                                  className: g.row,
                                  children: (0, r.jsx)(c.Text, {
                                      variant: 'text-md/normal',
                                      children: e
                                  })
                              },
                              t
                          )
                      )
                  ]
              });
    return (0, r.jsx)('div', {
        className: g.checklist,
        children: (0, r.jsxs)('div', {
            className: g.container,
            children: [
                (0, r.jsxs)(c.P3F, {
                    className: g.headerBar,
                    onClick: () => s((e) => !e),
                    children: [
                        (0, r.jsx)(c.X6q, {
                            variant: 'heading-md/semibold',
                            className: g.headerText,
                            children: m.NW.string(m.t['2Xbd/P'])
                        }),
                        (0, r.jsx)(d.Z, {
                            direction: n ? d.Z.Directions.DOWN : d.Z.Directions.UP,
                            className: g.headerCaret
                        })
                    ]
                }),
                !h &&
                    (0, r.jsx)('div', {
                        className: g.progressBarOuter,
                        children: (0, r.jsx)(l.animated.div, {
                            className: g.progressBarInner,
                            style: f
                        })
                    }),
                x
            ]
        })
    });
}
