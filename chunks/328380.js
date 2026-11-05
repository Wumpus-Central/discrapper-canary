var s,
    i = t(477900);
t(582128);
var a = t(503698),
    l = t.n(a),
    r = t(646514),
    o = t(939249),
    d = t(534514),
    c = t(104510),
    m = t(834730),
    u = t(907878),
    x = t(349085),
    v = t(105518),
    g = t(792996),
    j = t(141380),
    b = (((s = {}).CLICKABLE = "clickable"), (s.VIEWABLE = "viewable"), (s.DISABLED = "disabled"), s);
t.d(
    n,
    {},
    {
        A: function (e) {
            let {
                    className: n,
                    guildId: t,
                    game: s,
                    onClick: a,
                    imageClassName: b,
                    titleClassName: h,
                    variant: f = "clickable",
                    location: C,
                } = e,
                I = (0, x.A)(s.gameId, "cover"),
                {
                    containerClass: p,
                    boostGemColor: N,
                    boostPriceTextColor: k,
                    handleClick: A,
                } = {
                    clickable: {
                        containerClass: null,
                        boostGemColor: r.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                        boostPriceTextColor: void 0,
                        handleClick: () => {
                            ((0, u.oT)(t, s.id, s.name, C), a?.(s));
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
                }[f];
            return (0, i.jsxs)(o.D, {
                "aria-disabled": "disabled" === f,
                className: l()(j.LO, p, n),
                onClick: A,
                children: [
                    (0, i.jsxs)("div", {
                        className: l()(j.Rf, b),
                        children: [
                            (0, i.jsx)("img", { className: j.Sl, alt: "", src: I ?? "" }),
                            (0, i.jsx)("div", { className: j.Gj }),
                            (0, i.jsx)("div", { className: j.Uf }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: l()(j.FS, h),
                        children: [
                            (0, i.jsx)(d.D, {
                                variant: "heading-xs/semibold",
                                lineClamp: 2,
                                title: s.name,
                                children: s.name,
                            }),
                            (0, i.jsxs)("div", {
                                className: j.PW,
                                children: [
                                    (0, i.jsx)(c.BoostGemIcon, { size: "sm", color: N }),
                                    (0, i.jsx)(m.E, {
                                        variant: "body-sm/medium",
                                        color: k,
                                        children: g.intl.formatToPlainString(
                                            s.plans.length > 1 ? v.default["G/aTXi"] : v.default.r9pa9K,
                                            { boostCount: s.baseCost },
                                        ),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            });
        },
        e: b,
    },
);
