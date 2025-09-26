n.d(t, { Z: () => d });
var l = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    r = n(481060),
    s = n(943970),
    o = n(440589),
    c = n(388032),
    u = n(114162);
function d(e) {
    let { className: t, game: n, onClick: i, imageClassName: d, disabled: m = !1 } = e,
        v = (0, s.Z)(n.gameId, "cover");
    return (0, l.jsxs)(r.P3F, {
        "aria-disabled": m,
        className: a()(u.game, { [u.disabled]: m }, t),
        onClick: m ? void 0 : () => i(n),
        children: [
            (0, l.jsx)("img", {
                className: a()(u.image, d),
                alt: "",
                src: null != v ? v : "",
            }),
            (0, l.jsxs)("div", {
                className: u.textContainer,
                children: [
                    (0, l.jsx)(r.X6q, {
                        variant: "heading-sm/semibold",
                        children: n.name,
                    }),
                    (0, l.jsxs)("div", {
                        className: u.boostContainer,
                        children: [
                            (0, l.jsx)(r.$Eu, {
                                size: "sm",
                                color: r.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                            }),
                            (0, l.jsx)(r.Text, {
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
