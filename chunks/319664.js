i.d(t, { A: () => u });
var n = i(627968);
i(64700);
var r = i(503698),
    e = i.n(r),
    l = i(821609),
    a = i(834730),
    c = i(935286),
    d = i(95561),
    C = i(289397),
    o = i(468689),
    m = i(174459),
    v = i(634654),
    h = i(652215),
    p = i(375708),
    x = i(757669);
function g(s) {
    let { pills: t } = s;
    return (0, n.jsx)("div", {
        className: x.nM,
        children: t.map((s) =>
            (0, n.jsx)(
                "div",
                { className: x.Io, children: (0, n.jsx)(a.E, { variant: "text-sm/normal", children: s }) },
                s,
            ),
        ),
    });
}
function u(s) {
    let { guildId: t, showCTA: i, responsive: r = !0 } = s,
        u = [
            [p.intl.string(p.t["73h51J"]), p.intl.string(p.t["gbjs/6"])],
            [p.intl.string(p.t.mCoH0V), p.intl.string(p.t["l/BuSI"])],
            [p.intl.string(p.t.psQktv), p.intl.string(p.t.nMhIZQ)],
            [p.intl.string(p.t["0ItLmF"]), p.intl.string(p.t.yQHqsC)],
        ];
    return (0, n.jsx)("div", {
        className: e()({ [x.no]: r }),
        children: (0, n.jsxs)("div", {
            className: x.kL,
            children: [
                (0, n.jsxs)("div", {
                    className: x.Qs,
                    children: [
                        (0, n.jsx)("div", {
                            className: x.V_,
                            children: u.map((s, t) => (0, n.jsx)(g, { pills: s }, `pill-row-${t}`)),
                        }),
                        (0, n.jsxs)("div", {
                            className: x.mv,
                            children: [
                                (0, n.jsx)(a.E, {
                                    variant: "text-lg/medium",
                                    color: "text-strong",
                                    children: p.intl.string(p.t["67arYL"]),
                                }),
                                i &&
                                    (0, n.jsx)(l.$, {
                                        text: p.intl.string(p.t.oyzLpD),
                                        icon: c.E,
                                        iconPosition: "end",
                                        size: "md",
                                        onClick: () => {
                                            m.default.track(h.HAw.GUILD_SHOP_PREVIEW_CLICK, {
                                                ...(0, d.H$)(t),
                                                action_taken: v.hN.GET_STARTED_CLICK,
                                            }),
                                                o.A.open(t, h.BEX.GUILD_PRODUCTS);
                                        },
                                    }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: x.SN,
                    children: [
                        (0, n.jsx)("img", {
                            src: (0, C.n)("server_products/storefront/preview-mural.png"),
                            alt: "",
                            className: x.$G,
                        }),
                        (0, n.jsx)("img", {
                            src: (0, C.n)("server_products/storefront/preview-mural-reduced.png"),
                            alt: "",
                            className: x.rp,
                        }),
                    ],
                }),
            ],
        }),
    });
}
