r.d(n, {
    GU: function () {
        return d;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(481060),
    l = r(596454),
    u = r(889989),
    c = r(630480);
function d(e) {
    let n,
        { applicationId: r, storeListingBenefits: a, skuBenefits: s, className: l } = e;
    return (
        null != a
            ? (n = a.map((e) =>
                  (0, i.jsx)(
                      p,
                      {
                          applicationId: r,
                          benefit: e,
                          className: o()(c.__invalid_benefit, l)
                      },
                      e.id
                  )
              ))
            : null != s &&
              (n = s.map((e, n) =>
                  (0, i.jsx)(
                      f,
                      {
                          benefit: e,
                          className: o()(c.__invalid_benefit, l)
                      },
                      n
                  )
              )),
        (0, i.jsx)(i.Fragment, { children: n })
    );
}
function f(e) {
    let { benefit: n, className: r, emojiContainerClassName: a, showsDescription: u = !0, nameTextVariant: d = 'text-md/medium', nameTextColor: f = 'header-primary' } = e;
    return (0, i.jsxs)('div', {
        className: o()(c.container, r),
        children: [
            null != n.emoji &&
                (0, i.jsx)('div', {
                    className: o()(c.emojiContainer, a),
                    children: (0, i.jsx)(l.Z, {
                        emojiId: n.emoji.id,
                        emojiName: n.emoji.name,
                        animated: n.emoji.animated
                    })
                }),
            (0, i.jsxs)('div', {
                className: c.infoContainer,
                children: [
                    (0, i.jsx)(s.Text, {
                        variant: d,
                        color: f,
                        className: c.name,
                        children: n.name
                    }),
                    u &&
                        (0, i.jsx)(s.Text, {
                            color: 'interactive-normal',
                            variant: 'text-sm/normal',
                            children: n.description
                        })
                ]
            })
        ]
    });
}
function p(e) {
    let { applicationId: n, benefit: r, className: a, emojiContainerClassName: l, showsDescription: d = !0, nameTextVariant: f = 'text-md/medium', nameTextColor: p = 'header-primary' } = e;
    return (0, i.jsxs)('div', {
        className: o()(c.container, a),
        children: [
            (0, i.jsx)('div', {
                className: o()(c.emojiContainer, l),
                children: (0, u.n)(n, r.icon)
            }),
            (0, i.jsxs)('div', {
                className: c.infoContainer,
                children: [
                    (0, i.jsx)(s.Text, {
                        variant: f,
                        color: p,
                        className: c.name,
                        children: r.name
                    }),
                    d &&
                        (0, i.jsx)(s.Text, {
                            color: 'interactive-normal',
                            variant: 'text-sm/normal',
                            children: r.description
                        })
                ]
            })
        ]
    });
}
