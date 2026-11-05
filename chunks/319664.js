var i = t(477900);
t(582128);
var r = t(503698),
    l = t.n(r),
    e = t(821609),
    a = t(834730),
    c = t(935286),
    d = t(149468),
    o = t(289397),
    C = t(727419),
    m = t(129230),
    h = t(634654),
    v = t(652215),
    p = t(792996),
    g = t(942216);
function u(s) {
    let { pills: n } = s;
    return (0, i.jsx)("div", {
        className: g.nM,
        children: n.map((s) =>
            (0, i.jsx)(
                "div",
                { className: g.Io, children: (0, i.jsx)(a.E, { variant: "body-sm/normal", children: s }) },
                s,
            ),
        ),
    });
}
t.d(
    n,
    {},
    {
        A: function (s) {
            let { guildId: n, showCTA: t, responsive: r = !0 } = s,
                x = [
                    [p.intl.string(p.t["73h51J"]), p.intl.string(p.t["gbjs/6"])],
                    [p.intl.string(p.t.mCoH0V), p.intl.string(p.t["l/BuSI"])],
                    [p.intl.string(p.t.psQktv), p.intl.string(p.t.nMhIZQ)],
                    [p.intl.string(p.t["0ItLmF"]), p.intl.string(p.t.yQHqsC)],
                ];
            return (0, i.jsx)("div", {
                className: l()({ [g.no]: r }),
                children: (0, i.jsxs)("div", {
                    className: g.kL,
                    children: [
                        (0, i.jsxs)("div", {
                            className: g.Qs,
                            children: [
                                (0, i.jsx)("div", {
                                    className: g.V_,
                                    children: x.map((s, n) => (0, i.jsx)(u, { pills: s }, `pill-row-${n}`)),
                                }),
                                (0, i.jsxs)("div", {
                                    className: g.mv,
                                    children: [
                                        (0, i.jsx)(a.E, {
                                            variant: "body-lg/medium",
                                            color: "text-strong",
                                            children: p.intl.string(p.t["67arYL"]),
                                        }),
                                        t &&
                                            (0, i.jsx)(e.$, {
                                                text: p.intl.string(p.t.oyzLpD),
                                                icon: c.ArrowSmallRightIcon,
                                                iconPosition: "end",
                                                size: "md",
                                                onClick: function () {
                                                    (m.default.track(v.HAw.GUILD_SHOP_PREVIEW_CLICK, {
                                                        ...(0, d.H$)(n),
                                                        action_taken: h.hN.GET_STARTED_CLICK,
                                                    }),
                                                        C.A.open(n, v.BEX.GUILD_PRODUCTS));
                                                },
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: g.SN,
                            children: [
                                (0, i.jsx)("img", {
                                    src: (0, o.n)("server_products/storefront/preview-mural.png"),
                                    alt: "",
                                    className: g.$G,
                                }),
                                (0, i.jsx)("img", {
                                    src: (0, o.n)("server_products/storefront/preview-mural-reduced.png"),
                                    alt: "",
                                    className: g.rp,
                                }),
                            ],
                        }),
                    ],
                }),
            });
        },
    },
);
