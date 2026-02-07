i.d(t, { A: () => j });
var s = i(627968);
i(64700);
var r = i(503698),
    n = i.n(r),
    l = i(732955),
    d = i(397927),
    a = i(58149),
    o = i(289397),
    c = i(997509),
    C = i(954571),
    u = i(634654),
    x = i(652215),
    h = i(985018),
    _ = i(587106);
function p(e) {
    let { pills: t } = e;
    return (0, s.jsx)("div", {
        className: _.nM,
        children: t.map((e) =>
            (0, s.jsx)(
                "div",
                { className: _.Io, children: (0, s.jsx)(d.Text, { variant: "text-sm/normal", children: e }) },
                e,
            ),
        ),
    });
}
function j(e) {
    let { guildId: t, showCTA: i, responsive: r = !0 } = e,
        j = [
            [h.intl.string(h.t["73h51J"]), h.intl.string(h.t["gbjs/6"])],
            [h.intl.string(h.t.mCoH0V), h.intl.string(h.t["l/BuSI"])],
            [h.intl.string(h.t.psQktv), h.intl.string(h.t.nMhIZQ)],
            [h.intl.string(h.t["0ItLmF"]), h.intl.string(h.t.yQHqsC)],
        ];
    return (0, s.jsx)("div", {
        className: n()({ [_.no]: r }),
        children: (0, s.jsxs)("div", {
            className: _.kL,
            children: [
                (0, s.jsxs)("div", {
                    className: _.Qs,
                    children: [
                        (0, s.jsx)("div", {
                            className: _.V_,
                            children: j.map((e, t) => (0, s.jsx)(p, { pills: e }, `pill-row-${t}`)),
                        }),
                        (0, s.jsxs)("div", {
                            className: _.mv,
                            children: [
                                (0, s.jsx)(d.Text, {
                                    variant: "text-lg/medium",
                                    color: "text-strong",
                                    children: h.intl.string(h.t["67arYL"]),
                                }),
                                i &&
                                    (0, s.jsx)(l.$nd, {
                                        text: h.intl.string(h.t.oyzLpD),
                                        icon: d.EdP,
                                        iconPosition: "end",
                                        size: "md",
                                        onClick: () => {
                                            C.default.track(x.HAw.GUILD_SHOP_PREVIEW_CLICK, {
                                                ...(0, a.H$)(t),
                                                action_taken: u.hN.GET_STARTED_CLICK,
                                            }),
                                                c.A.open(t, x.BEX.GUILD_PRODUCTS);
                                        },
                                    }),
                            ],
                        }),
                    ],
                }),
                (0, s.jsxs)("div", {
                    className: _.SN,
                    children: [
                        (0, s.jsx)("img", {
                            src: (0, o.n)("server_products/storefront/preview-mural.png"),
                            alt: "",
                            className: _.$G,
                        }),
                        (0, s.jsx)("img", {
                            src: (0, o.n)("server_products/storefront/preview-mural-reduced.png"),
                            alt: "",
                            className: _.rp,
                        }),
                    ],
                }),
            ],
        }),
    });
}
