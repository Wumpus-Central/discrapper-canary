t.d(n, { A: () => x });
var i = t(477900);
t(582128);
var r = t(503698),
    e = t.n(r),
    l = t(821609),
    a = t(834730),
    c = t(935286),
    d = t(666860),
    o = t(289397),
    C = t(468689),
    m = t(174459),
    v = t(634654),
    h = t(652215),
    p = t(105292),
    u = t(942216);
function g(s) {
    let { pills: n } = s;
    return (0, i.jsx)("div", {
        className: u.nM,
        children: n.map((s) =>
            (0, i.jsx)(
                "div",
                { className: u.Io, children: (0, i.jsx)(a.E, { variant: "body-sm/normal", children: s }) },
                s,
            ),
        ),
    });
}
function x(s) {
    let { guildId: n, showCTA: t, responsive: r = !0 } = s,
        x = [
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
                            children: x.map((s, n) => (0, i.jsx)(g, { pills: s }, `pill-row-${n}`)),
                        }),
                        (0, i.jsxs)("div", {
                            className: u.mv,
                            children: [
                                (0, i.jsx)(a.E, {
                                    variant: "body-lg/medium",
                                    color: "text-strong",
                                    children: p.intl.string(p.t["67arYL"]),
                                }),
                                t &&
                                    (0, i.jsx)(l.$, {
                                        text: p.intl.string(p.t.oyzLpD),
                                        icon: c.E,
                                        iconPosition: "end",
                                        size: "md",
                                        onClick: function () {
                                            (m.default.track(h.HAw.GUILD_SHOP_PREVIEW_CLICK, {
                                                ...(0, d.H$)(n),
                                                action_taken: v.hN.GET_STARTED_CLICK,
                                            }),
                                                C.A.open(n, h.BEX.GUILD_PRODUCTS));
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
                            src: (0, o.n)("server_products/storefront/preview-mural.png"),
                            alt: "",
                            className: u.$G,
                        }),
                        (0, i.jsx)("img", {
                            src: (0, o.n)("server_products/storefront/preview-mural-reduced.png"),
                            alt: "",
                            className: u.rp,
                        }),
                    ],
                }),
            ],
        }),
    });
}
