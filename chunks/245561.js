n.d(t, { GU: () => c });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(596454),
    l = n(889989),
    u = n(83129);
function c(e) {
    let t,
        { applicationId: n, storeListingBenefits: r, skuBenefits: s, className: o } = e;
    return (
        null != r
            ? (t = r.map((e) =>
                  (0, i.jsx)(
                      f,
                      {
                          applicationId: n,
                          benefit: e,
                          className: a()(u.__invalid_benefit, o)
                      },
                      e.id
                  )
              ))
            : null != s &&
              (t = s.map((e, t) =>
                  (0, i.jsx)(
                      d,
                      {
                          benefit: e,
                          className: a()(u.__invalid_benefit, o)
                      },
                      t
                  )
              )),
        (0, i.jsx)(i.Fragment, { children: t })
    );
}
function d(e) {
    let { benefit: t, className: n, emojiContainerClassName: r, showsDescription: l = !0, nameTextVariant: c = 'text-md/medium', nameTextColor: d = 'header-primary' } = e;
    return (0, i.jsxs)('div', {
        className: a()(u.container, n),
        children: [
            null != t.emoji &&
                (0, i.jsx)('div', {
                    className: a()(u.emojiContainer, r),
                    children: (0, i.jsx)(o.Z, {
                        emojiId: t.emoji.id,
                        emojiName: t.emoji.name,
                        animated: t.emoji.animated
                    })
                }),
            (0, i.jsxs)('div', {
                className: u.infoContainer,
                children: [
                    (0, i.jsx)(s.Text, {
                        variant: c,
                        color: d,
                        className: u.name,
                        children: t.name
                    }),
                    l &&
                        (0, i.jsx)(s.Text, {
                            color: 'interactive-normal',
                            variant: 'text-sm/normal',
                            children: t.description
                        })
                ]
            })
        ]
    });
}
function f(e) {
    let { applicationId: t, benefit: n, className: r, emojiContainerClassName: o, showsDescription: c = !0, nameTextVariant: d = 'text-md/medium', nameTextColor: f = 'header-primary' } = e;
    return (0, i.jsxs)('div', {
        className: a()(u.container, r),
        children: [
            (0, i.jsx)('div', {
                className: a()(u.emojiContainer, o),
                children: (0, l.n)(t, n.icon)
            }),
            (0, i.jsxs)('div', {
                className: u.infoContainer,
                children: [
                    (0, i.jsx)(s.Text, {
                        variant: d,
                        color: f,
                        className: u.name,
                        children: n.name
                    }),
                    c &&
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
