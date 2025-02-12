n.d(t, { Z: () => x }), n(47120), n(390547);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(642128),
    o = n(692547),
    c = n(481060),
    d = n(259580),
    u = n(293810),
    m = n(388032),
    h = n(622996);
function g(e) {
    let { checked: t, children: n } = e;
    return (0, i.jsxs)('div', {
        className: h.row,
        children: [
            (0, i.jsx)(c.Text, {
                variant: 'text-md/normal',
                color: 'interactive-active',
                className: h.rowText,
                children: n
            }),
            t
                ? (0, i.jsx)(c.owK, {
                      size: 'md',
                      color: 'currentColor',
                      secondaryColor: o.Z.unsafe_rawColors.WHITE_500.css,
                      className: s()(h.rowIcon, h.rowIconChecked)
                  })
                : (0, i.jsx)('div', { className: s()(h.rowIcon, h.rowIconEmpty) })
        ]
    });
}
function x(e) {
    let { children: t } = e,
        [n, l] = r.useState(!1),
        s = t.flatMap((e) => e.items.map((e) => e.completed)),
        o = s.filter((e) => e).length / s.length,
        x = 1 === o,
        p = (0, c.q_F)({ width: ''.concat(100 * o, '%') }),
        _ = [m.intl.format(m.t.wtQtXl, { promoPageGuideUrl: u.iv.PROMO_PAGE_GUIDE }), m.intl.format(m.t['0Fo0wc'], { caseStudiesUrl: u.iv.CASE_STUDIES }), m.intl.format(m.t['7JdzjI'], { subscriptionOfferingGuideUrl: u.iv.SUBSCRIPTION_OFFERING_GUIDE }), m.intl.format(m.t.zkXN6O, { tierStructureGuideUrl: u.iv.TIER_STRUCTURE_GUIDE })],
        C = n
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      !x &&
                          t.map((e, t) => {
                              let { title: n, items: l } = e;
                              return (0, i.jsxs)(
                                  r.Fragment,
                                  {
                                      children: [
                                          t > 0 && (0, i.jsx)(c.$i$, { className: h.divider }),
                                          (0, i.jsx)(c.vwX, {
                                              className: h.categoryTitle,
                                              children: n
                                          }),
                                          l.map((e, t) =>
                                              (0, i.jsx)(
                                                  g,
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
                      (0, i.jsx)(c.$i$, { className: h.divider }),
                      (0, i.jsx)(c.vwX, {
                          className: h.categoryTitle,
                          children: m.intl.string(m.t.FO0AIS)
                      }),
                      _.map((e, t) =>
                          (0, i.jsx)(
                              'div',
                              {
                                  className: h.row,
                                  children: (0, i.jsx)(c.Text, {
                                      variant: 'text-md/normal',
                                      children: e
                                  })
                              },
                              t
                          )
                      )
                  ]
              });
    return (0, i.jsx)('div', {
        className: h.checklist,
        children: (0, i.jsxs)('div', {
            className: h.container,
            children: [
                (0, i.jsxs)(c.P3F, {
                    className: h.headerBar,
                    onClick: () => l((e) => !e),
                    children: [
                        (0, i.jsx)(c.X6q, {
                            variant: 'heading-md/semibold',
                            className: h.headerText,
                            children: m.intl.string(m.t['2Xbd/P'])
                        }),
                        (0, i.jsx)(d.Z, {
                            direction: n ? d.Z.Directions.DOWN : d.Z.Directions.UP,
                            className: h.headerCaret
                        })
                    ]
                }),
                !x &&
                    (0, i.jsx)('div', {
                        className: h.progressBarOuter,
                        children: (0, i.jsx)(a.animated.div, {
                            className: h.progressBarInner,
                            style: p
                        })
                    }),
                C
            ]
        })
    });
}
