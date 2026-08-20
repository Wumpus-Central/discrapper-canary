n.d(t, { A: () => h, e: () => b });
var i,
    a = n(477900);
n(582128);
var s = n(503698),
    l = n.n(s),
    r = n(661531),
    d = n(939249),
    o = n(297264),
    c = n(104510),
    m = n(834730),
    u = n(907878),
    x = n(349085),
    v = n(632847),
    g = n(375708),
    j = n(141380),
    b = (((i = {}).CLICKABLE = "clickable"), (i.VIEWABLE = "viewable"), (i.DISABLED = "disabled"), i);
function h(e) {
    let {
            className: t,
            guildId: n,
            game: i,
            onClick: s,
            imageClassName: b,
            titleClassName: h,
            variant: C = "clickable",
            location: f,
        } = e,
        p = (0, x.A)(i.gameId, "cover"),
        {
            containerClass: I,
            boostGemColor: N,
            boostPriceTextColor: k,
            handleClick: A,
        } = {
            clickable: {
                containerClass: null,
                boostGemColor: r.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                boostPriceTextColor: void 0,
                handleClick: () => {
                    (0, u.oT)(n, i.id, i.name, f), s?.(i);
                },
            },
            viewable: {
                containerClass: j.Oe,
                boostGemColor: void 0,
                boostPriceTextColor: "text-muted",
                handleClick: void 0,
            },
            disabled: {
                containerClass: j.r9,
                boostGemColor: r.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                boostPriceTextColor: void 0,
                handleClick: void 0,
            },
        }[C];
    return (0, a.jsxs)(d.D, {
        "aria-disabled": "disabled" === C,
        className: l()(j.LO, I, t),
        onClick: A,
        children: [
            (0, a.jsxs)("div", {
                className: l()(j.Rf, b),
                children: [
                    (0, a.jsx)("img", { className: j.Sl, alt: "", src: p ?? "" }),
                    (0, a.jsx)("div", { className: j.Gj }),
                    (0, a.jsx)("div", { className: j.Uf }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: l()(j.FS, h),
                children: [
                    (0, a.jsx)(o.D, { variant: "heading-sm/semibold", lineClamp: 2, title: i.name, children: i.name }),
                    (0, a.jsxs)("div", {
                        className: j.PW,
                        children: [
                            (0, a.jsx)(c._, { size: "sm", color: N }),
                            (0, a.jsx)(m.E, {
                                variant: "text-sm/medium",
                                color: k,
                                children: g.intl.formatToPlainString(
                                    i.plans.length > 1 ? v.default["G/aTXi"] : v.default.r9pa9K,
                                    { boostCount: i.baseCost },
                                ),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
