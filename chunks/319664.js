n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    r = n(821609),
    a = n(834730),
    o = n(935286),
    d = n(58149),
    c = n(289397),
    u = n(997509),
    m = n(954571),
    g = n(634654),
    h = n(652215),
    x = n(985018),
    _ = n(757669);
function p(e) {
    let { pills: t } = e;
    return (0, i.jsx)("div", {
        className: _.nM,
        children: t.map((e) =>
            (0, i.jsx)(
                "div",
                { className: _.Io, children: (0, i.jsx)(a.E, { variant: "text-sm/normal", children: e }) },
                e,
            ),
        ),
    });
}
function A(e) {
    let { guildId: t, showCTA: n, responsive: l = !0 } = e,
        A = [
            [x.intl.string(x.t["73h51J"]), x.intl.string(x.t["gbjs/6"])],
            [x.intl.string(x.t.mCoH0V), x.intl.string(x.t["l/BuSI"])],
            [x.intl.string(x.t.psQktv), x.intl.string(x.t.nMhIZQ)],
            [x.intl.string(x.t["0ItLmF"]), x.intl.string(x.t.yQHqsC)],
        ];
    return (0, i.jsx)("div", {
        className: s()({ [_.no]: l }),
        children: (0, i.jsxs)("div", {
            className: _.kL,
            children: [
                (0, i.jsxs)("div", {
                    className: _.Qs,
                    children: [
                        (0, i.jsx)("div", {
                            className: _.V_,
                            children: A.map((e, t) => (0, i.jsx)(p, { pills: e }, `pill-row-${t}`)),
                        }),
                        (0, i.jsxs)("div", {
                            className: _.mv,
                            children: [
                                (0, i.jsx)(a.E, {
                                    variant: "text-lg/medium",
                                    color: "text-strong",
                                    children: x.intl.string(x.t["67arYL"]),
                                }),
                                n &&
                                    (0, i.jsx)(r.$, {
                                        text: x.intl.string(x.t.oyzLpD),
                                        icon: o.E,
                                        iconPosition: "end",
                                        size: "md",
                                        onClick: () => {
                                            m.default.track(h.HAw.GUILD_SHOP_PREVIEW_CLICK, {
                                                ...(0, d.H$)(t),
                                                action_taken: g.hN.GET_STARTED_CLICK,
                                            }),
                                                u.A.open(t, h.BEX.GUILD_PRODUCTS);
                                        },
                                    }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: _.SN,
                    children: [
                        (0, i.jsx)("img", {
                            src: (0, c.n)("server_products/storefront/preview-mural.png"),
                            alt: "",
                            className: _.$G,
                        }),
                        (0, i.jsx)("img", {
                            src: (0, c.n)("server_products/storefront/preview-mural-reduced.png"),
                            alt: "",
                            className: _.rp,
                        }),
                    ],
                }),
            ],
        }),
    });
}
