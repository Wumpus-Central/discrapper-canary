n.d(t, { Z: () => u });
var r = n(951288);
n(647438);
var a = n(120356),
    s = n.n(a),
    i = n(481060),
    o = n(401561),
    c = n(388032),
    l = n(720534);
function u(e) {
    let { className: t, game: n, onClick: a, imageClassName: u, disabled: d = !1 } = e;
    return (0, r.jsxs)(i.P3F, {
        "aria-disabled": d,
        className: s()(l.game, { [l.disabled]: d }, t),
        onClick: d ? void 0 : () => a(n),
        children: [
            (0, r.jsx)("img", {
                className: s()(l.image, u),
                alt: "",
            }),
            (0, r.jsxs)("div", {
                className: l.textContainer,
                children: [
                    (0, r.jsx)(i.X6q, {
                        variant: "heading-sm/semibold",
                        children: n.name,
                    }),
                    (0, r.jsxs)("div", {
                        className: l.boostContainer,
                        children: [
                            (0, r.jsx)(i.$Eu, {
                                size: "sm",
                                color: i.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                            }),
                            (0, r.jsx)(i.Text, {
                                variant: "text-sm/medium",
                                children: c.intl.formatToPlainString(
                                    n.plans.length > 1 ? o.default.Vf4vwM : o.default.ZzpD5u,
                                    { boostCount: n.baseCost },
                                ),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
