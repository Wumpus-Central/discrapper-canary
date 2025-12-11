n.d(t, { Z: () => s });
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    a = n(481060),
    o = n(570291);
function s(e) {
    let { total: t, users: n, videoLimit: i } = e;
    return (0, r.jsxs)("div", {
        className: o.wrapper,
        children: [
            (0, r.jsxs)("span", {
                className: l()(o.users, {
                    [o.video]: i,
                    [o.extraLong]: n >= 100,
                }),
                children: [
                    i
                        ? (0, r.jsx)(a.Odl, {
                              size: "md",
                              color: "currentColor",
                              className: o.videoIcon,
                          })
                        : null,
                    n.toString().padStart(2, "0"),
                ],
            }),
            (0, r.jsx)("span", {
                className: l()(o.total, { [o.extraLong]: t >= 100 }),
                children: t.toString().padStart(2, "0"),
            }),
        ],
    });
}
