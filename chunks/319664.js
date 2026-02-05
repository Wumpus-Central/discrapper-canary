"use strict";
n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(732955),
    a = n(397927),
    o = n(58149),
    d = n(289397),
    c = n(997509),
    u = n(954571),
    m = n(634654),
    g = n(652215),
    x = n(985018),
    h = n(587106);
function _(e) {
    let { pills: t } = e;
    return (0, i.jsx)("div", {
        className: h.nM,
        children: t.map((e) =>
            (0, i.jsx)(
                "div",
                { className: h.Io, children: (0, i.jsx)(a.Text, { variant: "text-sm/normal", children: e }) },
                e,
            ),
        ),
    });
}
function A(e) {
    let { guildId: t, showCTA: n, responsive: s = !0 } = e,
        A = [
            [x.intl.string(x.t["73h51J"]), x.intl.string(x.t["gbjs/6"])],
            [x.intl.string(x.t.mCoH0V), x.intl.string(x.t["l/BuSI"])],
            [x.intl.string(x.t.psQktv), x.intl.string(x.t.nMhIZQ)],
            [x.intl.string(x.t["0ItLmF"]), x.intl.string(x.t.yQHqsC)],
        ];
    return (0, i.jsx)("div", {
        className: l()({ [h.no]: s }),
        children: (0, i.jsxs)("div", {
            className: h.kL,
            children: [
                (0, i.jsxs)("div", {
                    className: h.Qs,
                    children: [
                        (0, i.jsx)("div", {
                            className: h.V_,
                            children: A.map((e, t) => (0, i.jsx)(_, { pills: e }, `pill-row-${t}`)),
                        }),
                        (0, i.jsxs)("div", {
                            className: h.mv,
                            children: [
                                (0, i.jsx)(a.Text, {
                                    variant: "text-lg/medium",
                                    color: "text-strong",
                                    children: x.intl.string(x.t["67arYL"]),
                                }),
                                n &&
                                    (0, i.jsx)(r.$nd, {
                                        text: x.intl.string(x.t.oyzLpD),
                                        icon: a.EdP,
                                        iconPosition: "end",
                                        size: "md",
                                        onClick: () => {
                                            u.default.track(g.HAw.GUILD_SHOP_PREVIEW_CLICK, {
                                                ...(0, o.H$)(t),
                                                action_taken: m.hN.GET_STARTED_CLICK,
                                            }),
                                                c.A.open(t, g.BEX.GUILD_PRODUCTS);
                                        },
                                    }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: h.SN,
                    children: [
                        (0, i.jsx)("img", {
                            src: (0, d.n)("server_products/storefront/preview-mural.png"),
                            alt: "",
                            className: h.$G,
                        }),
                        (0, i.jsx)("img", {
                            src: (0, d.n)("server_products/storefront/preview-mural-reduced.png"),
                            alt: "",
                            className: h.rp,
                        }),
                    ],
                }),
            ],
        }),
    });
}
