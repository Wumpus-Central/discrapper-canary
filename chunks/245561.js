t.d(e, {
    GU: function () {
        return d;
    }
});
var i = t(200651);
t(192379);
var r = t(120356),
    l = t.n(r),
    a = t(481060),
    s = t(596454),
    o = t(889989),
    c = t(630480);
function d(n) {
    let e,
        { applicationId: t, storeListingBenefits: r, skuBenefits: a, className: s } = n;
    return (
        null != r
            ? (e = r.map((n) =>
                  (0, i.jsx)(
                      m,
                      {
                          applicationId: t,
                          benefit: n,
                          className: l()(c.__invalid_benefit, s)
                      },
                      n.id
                  )
              ))
            : null != a &&
              (e = a.map((n, e) =>
                  (0, i.jsx)(
                      u,
                      {
                          benefit: n,
                          className: l()(c.__invalid_benefit, s)
                      },
                      e
                  )
              )),
        (0, i.jsx)(i.Fragment, { children: e })
    );
}
function u(n) {
    let { benefit: e, className: t, emojiContainerClassName: r, showsDescription: o = !0, nameTextVariant: d = 'text-md/medium', nameTextColor: u = 'header-primary' } = n;
    return (0, i.jsxs)('div', {
        className: l()(c.container, t),
        children: [
            null != e.emoji &&
                (0, i.jsx)('div', {
                    className: l()(c.emojiContainer, r),
                    children: (0, i.jsx)(s.Z, {
                        emojiId: e.emoji.id,
                        emojiName: e.emoji.name,
                        animated: e.emoji.animated
                    })
                }),
            (0, i.jsxs)('div', {
                className: c.infoContainer,
                children: [
                    (0, i.jsx)(a.Text, {
                        variant: d,
                        color: u,
                        className: c.name,
                        children: e.name
                    }),
                    o &&
                        (0, i.jsx)(a.Text, {
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
    let { applicationId: e, benefit: t, className: r, emojiContainerClassName: s, showsDescription: d = !0, nameTextVariant: u = 'text-md/medium', nameTextColor: m = 'header-primary' } = n;
    return (0, i.jsxs)('div', {
        className: l()(c.container, r),
        children: [
            (0, i.jsx)('div', {
                className: l()(c.emojiContainer, s),
                children: (0, o.n)(e, t.icon)
            }),
            (0, i.jsxs)('div', {
                className: c.infoContainer,
                children: [
                    (0, i.jsx)(a.Text, {
                        variant: u,
                        color: m,
                        className: c.name,
                        children: t.name
                    }),
                    d &&
                        (0, i.jsx)(a.Text, {
                            color: 'interactive-normal',
                            variant: 'text-sm/normal',
                            children: t.description
                        })
                ]
            })
        ]
    });
}
