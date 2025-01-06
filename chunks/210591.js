n.d(t, {
    Z: function () {
        return x;
    }
}),
    n(47120),
    n(390547);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(752877),
    o = n(692547),
    c = n(481060),
    d = n(259580),
    u = n(293810),
    m = n(388032),
    h = n(566873);
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
                ? (0, i.jsx)(c.CircleCheckIcon, {
                      size: 'md',
                      color: 'currentColor',
                      secondaryColor: o.Z.unsafe_rawColors.WHITE_500.css,
                      className: a()(h.rowIcon, h.rowIconChecked)
                  })
                : (0, i.jsx)('div', { className: a()(h.rowIcon, h.rowIconEmpty) })
        ]
    });
}
function x(e) {
    let { children: t } = e,
        [n, l] = r.useState(!1),
        a = t.flatMap((e) => e.items.map((e) => e.completed)),
        o = a.filter((e) => e).length / a.length,
        x = 1 === o,
        p = (0, c.useSpring)({ width: ''.concat(100 * o, '%') }),
        f = [m.intl.format(m.t.wtQtXl, { promoPageGuideUrl: u.iv.PROMO_PAGE_GUIDE }), m.intl.format(m.t['0Fo0wc'], { caseStudiesUrl: u.iv.CASE_STUDIES }), m.intl.format(m.t['7JdzjI'], { subscriptionOfferingGuideUrl: u.iv.SUBSCRIPTION_OFFERING_GUIDE }), m.intl.format(m.t.zkXN6O, { tierStructureGuideUrl: u.iv.TIER_STRUCTURE_GUIDE })],
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
                                          t > 0 && (0, i.jsx)(c.FormDivider, { className: h.divider }),
                                          (0, i.jsx)(c.FormTitle, {
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
                      (0, i.jsx)(c.FormDivider, { className: h.divider }),
                      (0, i.jsx)(c.FormTitle, {
                          className: h.categoryTitle,
                          children: m.intl.string(m.t.FO0AIS)
                      }),
                      f.map((e, t) =>
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
                (0, i.jsxs)(c.Clickable, {
                    className: h.headerBar,
                    onClick: () => l((e) => !e),
                    children: [
                        (0, i.jsx)(c.Heading, {
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
                        children: (0, i.jsx)(s.animated.div, {
                            className: h.progressBarInner,
                            style: p
                        })
                    }),
                C
            ]
        })
    });
}
