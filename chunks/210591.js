n.d(t, { Z: () => h }), n(388685), n(361932), n(187205), n(953529);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(481752),
    o = n(692547),
    c = n(481060),
    u = n(259580),
    d = n(293810),
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
                      className: s()(g.rowIcon, g.rowIconChecked)
                  })
                : (0, r.jsx)('div', { className: s()(g.rowIcon, g.rowIconEmpty) })
        ]
    });
}
function h(e) {
    let { children: t } = e,
        [n, l] = i.useState(!1),
        s = t.flatMap((e) => e.items.map((e) => e.completed)),
        o = s.filter((e) => e).length / s.length,
        h = 1 === o,
        f = (0, c.q_F)({ width: ''.concat(100 * o, '%') }),
        x = [m.intl.format(m.t.wtQtXl, { promoPageGuideUrl: d.iv.PROMO_PAGE_GUIDE }), m.intl.format(m.t['0Fo0wc'], { caseStudiesUrl: d.iv.CASE_STUDIES }), m.intl.format(m.t['7JdzjI'], { subscriptionOfferingGuideUrl: d.iv.SUBSCRIPTION_OFFERING_GUIDE }), m.intl.format(m.t.zkXN6O, { tierStructureGuideUrl: d.iv.TIER_STRUCTURE_GUIDE })],
        b = n
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      !h &&
                          t.map((e, t) => {
                              let { title: n, items: l } = e;
                              return (0, r.jsxs)(
                                  i.Fragment,
                                  {
                                      children: [
                                          t > 0 && (0, r.jsx)(c.$i$, { className: g.divider }),
                                          (0, r.jsx)(c.vwX, {
                                              className: g.categoryTitle,
                                              children: n
                                          }),
                                          l.map((e, t) =>
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
                          children: m.intl.string(m.t.FO0AIS)
                      }),
                      x.map((e, t) =>
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
                    onClick: () => l((e) => !e),
                    children: [
                        (0, r.jsx)(c.X6q, {
                            variant: 'heading-md/semibold',
                            className: g.headerText,
                            children: m.intl.string(m.t['2Xbd/P'])
                        }),
                        (0, r.jsx)(u.Z, {
                            direction: n ? u.Z.Directions.DOWN : u.Z.Directions.UP,
                            className: g.headerCaret
                        })
                    ]
                }),
                !h &&
                    (0, r.jsx)('div', {
                        className: g.progressBarOuter,
                        children: (0, r.jsx)(a.animated.div, {
                            className: g.progressBarInner,
                            style: f
                        })
                    }),
                b
            ]
        })
    });
}
