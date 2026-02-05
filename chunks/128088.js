a.d(t, { A: () => u });
var s = a(627968),
    n = a(64700),
    l = a(503698),
    i = a.n(l),
    r = a(827734),
    c = a(397927),
    o = a(580630),
    d = a(652215),
    m = a(985018),
    x = a(230378);
function _(e) {
    let { price: t, selected: a, onClick: n } = e;
    return (0, s.jsxs)(c.DUT, {
        className: i()(x.y3, { [x.wH]: a }),
        onClick: n,
        children: [
            a
                ? (0, s.jsx)(c.yr3, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      secondaryColor: r.A.unsafe_rawColors.WHITE.css,
                      color: r.A.unsafe_rawColors.BRAND_500.css,
                  })
                : (0, s.jsx)("svg", {
                      width: "20",
                      height: "20",
                      children: (0, s.jsx)("circle", { cx: 10, cy: 10, r: 10, className: x.n1 }),
                  }),
            (0, s.jsxs)("div", {
                className: x.Z6,
                children: [
                    (0, s.jsx)(c.Text, { variant: "text-sm/normal", tag: "span", children: (0, o.$g)(t, d.Yri.USD) }),
                    (0, s.jsx)(c.Text, { variant: "text-xxs/medium", tag: "span", children: "/mo." }),
                ],
            }),
        ],
    });
}
function u(e) {
    let { selectedTemplate: t, handleSelectTemplate: a, newPricesToPick: l } = e,
        [i, r] = n.useState(0);
    return (0, s.jsxs)("div", {
        className: x.kL,
        children: [
            (0, s.jsxs)("div", {
                className: x.Qs,
                children: [
                    (0, s.jsx)(c.Heading, {
                        variant: "heading-md/semibold",
                        children: m.intl.format(m.t["5WZ9Ct"], { tierName: t.listings[0].name }),
                    }),
                    (0, s.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        className: x.G3,
                        children: m.intl.format(m.t["5i7Uhb"], {
                            price: (0, o.$g)(t.listings[0].price_tier, d.Yri.USD),
                        }),
                    }),
                    l.map((e, t) => (0, s.jsx)(_, { price: e, selected: t === i, onClick: () => r(t) }, e)),
                ],
            }),
            (0, s.jsx)(c.Button, {
                variant: "primary",
                text: m.intl.string(m.t["1W7mCt"]),
                onClick: () => {
                    a({ ...t, listings: [{ ...t.listings[0], price_tier: l[i] }] });
                },
            }),
        ],
    });
}
