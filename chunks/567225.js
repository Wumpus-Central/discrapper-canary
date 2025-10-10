n.d(t, { Z: () => d });
var l = n(951288);
n(647438);
var a = n(120356),
    i = n.n(a),
    r = n(481060),
    s = n(943970),
    o = n(401561),
    u = n(388032),
    c = n(720534);
function d(e) {
    let { className: t, game: n, onClick: a, imageClassName: d, titleClassName: m, disabled: v = !1 } = e,
        f = (0, s.Z)(n.gameId, "cover");
    return (0, l.jsxs)(r.P3F, {
        "aria-disabled": v,
        className: i()(c.game, { [c.disabled]: v }, t),
        onClick: v ? void 0 : () => a(n),
        children: [
            (0, l.jsxs)("div", {
                className: i()(c.gameImageContainer, d),
                children: [
                    (0, l.jsx)("img", {
                        className: c.image,
                        alt: "",
                        src: null != f ? f : "",
                    }),
                    (0, l.jsx)("div", { className: c.gameImageBorder }),
                    (0, l.jsx)("div", { className: c.gameImageOverlay }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: i()(c.textContainer, m),
                children: [
                    (0, l.jsx)(r.X6q, {
                        variant: "heading-sm/semibold",
                        lineClamp: 1,
                        title: n.name,
                        children: n.name,
                    }),
                    (0, l.jsxs)("div", {
                        className: c.boostContainer,
                        children: [
                            (0, l.jsx)(r.$Eu, {
                                size: "sm",
                                color: r.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                            }),
                            (0, l.jsx)(r.Text, {
                                variant: "text-sm/medium",
                                children: u.intl.formatToPlainString(
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
