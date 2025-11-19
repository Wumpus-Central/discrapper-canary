n.d(t, { Z: () => c });
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    a = n(481060),
    s = n(679768),
    o = n(918591);
function c(e) {
    let { copy: t, showStars: n = !0, className: i } = e;
    return (0, r.jsxs)("div", {
        className: l()(o.badgeContainer, i),
        children: [
            n &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("span", {
                            className: l()(o.star, o.starLeft),
                            children: (0, r.jsx)(s.Z, {
                                width: "10",
                                height: "10",
                            }),
                        }),
                        (0, r.jsx)("span", {
                            className: l()(o.star, o.starRight),
                            children: (0, r.jsx)(s.Z, {
                                width: "14",
                                height: "14",
                            }),
                        }),
                    ],
                }),
            (0, r.jsx)(a.Text, {
                variant: "eyebrow",
                className: o.newBadge,
                children: t,
            }),
        ],
    });
}
