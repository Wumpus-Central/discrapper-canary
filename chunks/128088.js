t.d(a, { A: () => f });
var s = t(627968),
    n = t(64700),
    l = t(503698),
    r = t.n(l),
    i = t(827734),
    c = t(939249),
    o = t(628284),
    d = t(834730),
    m = t(534514),
    _ = t(821609),
    x = t(580630),
    h = t(652215),
    u = t(985018),
    p = t(588103);
function j(e) {
    let { price: a, selected: t, onClick: n } = e;
    return (0, s.jsxs)(c.D, {
        className: r()(p.y3, { [p.wH]: t }),
        onClick: n,
        children: [
            t
                ? (0, s.jsx)(o.y, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      secondaryColor: i.A.unsafe_rawColors.WHITE.css,
                      color: i.A.unsafe_rawColors.BRAND_500.css,
                  })
                : (0, s.jsx)("svg", {
                      width: "20",
                      height: "20",
                      children: (0, s.jsx)("circle", { cx: 10, cy: 10, r: 10, className: p.n1 }),
                  }),
            (0, s.jsxs)("div", {
                className: p.Z6,
                children: [
                    (0, s.jsx)(d.E, { variant: "text-sm/normal", tag: "span", children: (0, x.$g)(a, h.Yri.USD) }),
                    (0, s.jsx)(d.E, { variant: "text-xxs/medium", tag: "span", children: "/mo." }),
                ],
            }),
        ],
    });
}
function f(e) {
    let { selectedTemplate: a, handleSelectTemplate: t, newPricesToPick: l } = e,
        [r, i] = n.useState(0);
    return (0, s.jsxs)("div", {
        className: p.kL,
        children: [
            (0, s.jsxs)("div", {
                className: p.Qs,
                children: [
                    (0, s.jsx)(m.D, {
                        variant: "heading-md/semibold",
                        children: u.intl.format(u.t["5WZ9Ct"], { tierName: a.listings[0].name }),
                    }),
                    (0, s.jsx)(d.E, {
                        variant: "text-sm/normal",
                        className: p.G3,
                        children: u.intl.format(u.t["5i7Uhb"], {
                            price: (0, x.$g)(a.listings[0].price_tier, h.Yri.USD),
                        }),
                    }),
                    l.map((e, a) => (0, s.jsx)(j, { price: e, selected: a === r, onClick: () => i(a) }, e)),
                ],
            }),
            (0, s.jsx)(_.$, {
                variant: "primary",
                text: u.intl.string(u.t["1W7mCt"]),
                onClick: () => {
                    t({ ...a, listings: [{ ...a.listings[0], price_tier: l[r] }] });
                },
            }),
        ],
    });
}
