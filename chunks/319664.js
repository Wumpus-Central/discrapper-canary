n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var r = n(503698),
    e = n.n(r),
    l = n(821609),
    a = n(834730),
    c = n(935286),
    d = n(95561),
    C = n(289397),
    o = n(468689),
    m = n(174459),
    v = n(634654),
    h = n(652215),
    p = n(375708),
    u = n(757669);
function x(s) {
    let { pills: t } = s;
    return (0, i.jsx)("div", {
        className: u.nM,
        children: t.map((s) =>
            (0, i.jsx)(
                "div",
                { className: u.Io, children: (0, i.jsx)(a.E, { variant: "text-sm/normal", children: s }) },
                s,
            ),
        ),
    });
}
function g(s) {
    let { guildId: t, showCTA: n, responsive: r = !0 } = s,
        g = [
            [p.intl.string(p.t["73h51J"]), p.intl.string(p.t["gbjs/6"])],
            [p.intl.string(p.t.mCoH0V), p.intl.string(p.t["l/BuSI"])],
            [p.intl.string(p.t.psQktv), p.intl.string(p.t.nMhIZQ)],
            [p.intl.string(p.t["0ItLmF"]), p.intl.string(p.t.yQHqsC)],
        ];
    return (0, i.jsx)("div", {
        className: e()({ [u.no]: r }),
        children: (0, i.jsxs)("div", {
            className: u.kL,
            children: [
                (0, i.jsxs)("div", {
                    className: u.Qs,
                    children: [
                        (0, i.jsx)("div", {
                            className: u.V_,
                            children: g.map((s, t) => (0, i.jsx)(x, { pills: s }, `pill-row-${t}`)),
                        }),
                        (0, i.jsxs)("div", {
                            className: u.mv,
                            children: [
                                (0, i.jsx)(a.E, {
                                    variant: "text-lg/medium",
                                    color: "text-strong",
                                    children: p.intl.string(p.t["67arYL"]),
                                }),
                                n &&
                                    (0, i.jsx)(l.$, {
                                        text: p.intl.string(p.t.oyzLpD),
                                        icon: c.E,
                                        iconPosition: "end",
                                        size: "md",
                                        onClick: function () {
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
                (0, i.jsxs)("div", {
                    className: u.SN,
                    children: [
                        (0, i.jsx)("img", {
                            src: (0, C.n)("server_products/storefront/preview-mural.png"),
                            alt: "",
                            className: u.$G,
                        }),
                        (0, i.jsx)("img", {
                            src: (0, C.n)("server_products/storefront/preview-mural-reduced.png"),
                            alt: "",
                            className: u.rp,
                        }),
                    ],
                }),
            ],
        }),
    });
}
