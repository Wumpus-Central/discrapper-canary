i.d(e, {
    GU: function () {
        return d;
    }
});
var t = i(200651);
i(192379);
var r = i(120356),
    l = i.n(r),
    a = i(481060),
    s = i(596454),
    o = i(889989),
    c = i(630480);
function d(n) {
    let e,
        { applicationId: i, storeListingBenefits: r, skuBenefits: a, className: s } = n;
    return (
        null != r
            ? (e = r.map((n) =>
                  (0, t.jsx)(
                      m,
                      {
                          applicationId: i,
                          benefit: n,
                          className: l()(c.__invalid_benefit, s)
                      },
                      n.id
                  )
              ))
            : null != a &&
              (e = a.map((n, e) =>
                  (0, t.jsx)(
                      u,
                      {
                          benefit: n,
                          className: l()(c.__invalid_benefit, s)
                      },
                      e
                  )
              )),
        (0, t.jsx)(t.Fragment, { children: e })
    );
}
function u(n) {
    let { benefit: e, className: i, emojiContainerClassName: r, showsDescription: o = !0, nameTextVariant: d = 'text-md/medium', nameTextColor: u = 'header-primary' } = n;
    return (0, t.jsxs)('div', {
        className: l()(c.container, i),
        children: [
            null != e.emoji &&
                (0, t.jsx)('div', {
                    className: l()(c.emojiContainer, r),
                    children: (0, t.jsx)(s.Z, {
                        emojiId: e.emoji.id,
                        emojiName: e.emoji.name,
                        animated: e.emoji.animated
                    })
                }),
            (0, t.jsxs)('div', {
                className: c.infoContainer,
                children: [
                    (0, t.jsx)(a.Text, {
                        variant: d,
                        color: u,
                        className: c.name,
                        children: e.name
                    }),
                    o &&
                        (0, t.jsx)(a.Text, {
                            color: 'interactive-normal',
                            variant: 'text-sm/normal',
                            children: e.description
                        })
                ]
            })
        ]
    });
}
function m(n) {
    let { applicationId: e, benefit: i, className: r, emojiContainerClassName: s, showsDescription: d = !0, nameTextVariant: u = 'text-md/medium', nameTextColor: m = 'header-primary' } = n;
    return (0, t.jsxs)('div', {
        className: l()(c.container, r),
        children: [
            (0, t.jsx)('div', {
                className: l()(c.emojiContainer, s),
                children: (0, o.n)(e, i.icon)
            }),
            (0, t.jsxs)('div', {
                className: c.infoContainer,
                children: [
                    (0, t.jsx)(a.Text, {
                        variant: u,
                        color: m,
                        className: c.name,
                        children: i.name
                    }),
                    d &&
                        (0, t.jsx)(a.Text, {
                            color: 'interactive-normal',
                            variant: 'text-sm/normal',
                            children: i.description
                        })
                ]
            })
        ]
    });
}
