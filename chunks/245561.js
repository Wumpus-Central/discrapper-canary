n.d(t, { GU: () => u }), n(266796);
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(596454),
    l = n(889989),
    c = n(97629);
function u(e) {
    let t,
        { applicationId: n, storeListingBenefits: i, skuBenefits: o, className: a } = e;
    return (
        null != i
            ? (t = i.map((e) =>
                  (0, r.jsx)(
                      f,
                      {
                          applicationId: n,
                          benefit: e,
                          className: a
                      },
                      e.id
                  )
              ))
            : null != o &&
              (t = o.map((e, t) =>
                  (0, r.jsx)(
                      d,
                      {
                          benefit: e,
                          className: a
                      },
                      t
                  )
              )),
        t
    );
}
function d(e) {
    let { benefit: t, className: n, emojiContainerClassName: i, showsDescription: l = !0, nameTextVariant: u = 'text-md/medium', nameTextColor: d = 'header-primary' } = e;
    return (0, r.jsxs)('div', {
        className: o()(c.container, n),
        children: [
            null != t.emoji &&
                (0, r.jsx)('div', {
                    className: o()(c.emojiContainer, i),
                    children: (0, r.jsx)(s.Z, {
                        emojiId: t.emoji.id,
                        emojiName: t.emoji.name,
                        animated: t.emoji.animated
                    })
                }),
            (0, r.jsxs)('div', {
                className: c.infoContainer,
                children: [
                    (0, r.jsx)(a.Text, {
                        variant: u,
                        color: d,
                        className: c.name,
                        children: t.name
                    }),
                    l &&
                        (0, r.jsx)(a.Text, {
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
    let { applicationId: t, benefit: n, className: i, emojiContainerClassName: s, showsDescription: u = !0, nameTextVariant: d = 'text-md/medium', nameTextColor: f = 'header-primary' } = e;
    return (0, r.jsxs)('div', {
        className: o()(c.container, i),
        children: [
            (0, r.jsx)('div', {
                className: o()(c.emojiContainer, s),
                children: (0, l.n)(t, n.icon)
            }),
            (0, r.jsxs)('div', {
                className: c.infoContainer,
                children: [
                    (0, r.jsx)(a.Text, {
                        variant: d,
                        color: f,
                        className: c.name,
                        children: n.name
                    }),
                    u &&
                        (0, r.jsx)(a.Text, {
                            color: 'interactive-normal',
                            variant: 'text-sm/normal',
                            children: n.description
                        })
                ]
            })
        ]
    });
}
