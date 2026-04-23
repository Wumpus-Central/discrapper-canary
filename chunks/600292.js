n.d(t, { A: () => p, q: () => A });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    r = n(192308),
    a = n(834730),
    o = n(821609),
    d = n(939249),
    c = n(179866),
    u = n(147925),
    m = n(371794),
    g = n(500345),
    h = n(11351),
    x = n(985018),
    _ = n(346677);
function p(e) {
    let { channelBenefits: t, intangibleBenefits: l, subscriptionListings: d, onImport: c } = e,
        u = (0, h.gN)();
    return (0, i.jsx)("div", {
        className: _.kL,
        children: d.map((e) =>
            (0, i.jsxs)(
                "div",
                {
                    className: _.nM,
                    children: [
                        (0, i.jsx)("img", {
                            alt: "",
                            src: null == e.image_asset ? void 0 : (0, m.YE)(e.application_id, e.image_asset, 512),
                            className: s()(_.aL, _.mi),
                        }),
                        (0, i.jsxs)("div", {
                            className: _.fw,
                            children: [
                                (0, i.jsx)(a.E, {
                                    variant: "text-md/normal",
                                    color: "text-strong",
                                    className: s()(_.qg, _.Wo),
                                    children: e.name,
                                }),
                                (0, i.jsx)(a.E, {
                                    color: "text-default",
                                    variant: "text-sm/normal",
                                    children: x.intl.format(x.t["QMj+In"], {
                                        channels: e.role_benefits.benefits.filter(g.B1).length,
                                        benefits: e.role_benefits.benefits.filter(g.b1).length,
                                    }),
                                }),
                            ],
                        }),
                        (0, i.jsx)(o.$, {
                            variant: "secondary",
                            onClick: () => {
                                (0, r.openModalLazy)(async () => {
                                    let { ImportBenefitsFromSubscriptionListingModal: s } = await n
                                        .e("66946")
                                        .then(n.bind(n, 362937));
                                    return (n) =>
                                        (0, i.jsx)(s, {
                                            ...n,
                                            fromSubscriptionListing: e,
                                            existingChannelBenefits: t,
                                            existingIntangibleBenefits: l,
                                            onSubmit: c,
                                        });
                                });
                            },
                            disabled: u,
                            text: x.intl.string(x.t["90bIv9"]),
                        }),
                    ],
                },
                e.id,
            ),
        ),
    });
}
function A(e) {
    let { guildId: t, onImport: l, disabled: o = !1 } = e;
    return (0, i.jsxs)(d.D, {
        className: s()(_.eZ, { [_.r9]: o }),
        onClick: o
            ? void 0
            : function () {
                  (0, r.openModalLazy)(async () => {
                      let { ImportBenefitsFromRoleModal: e } = await n.e("66946").then(n.bind(n, 362937));
                      return (n) => (0, i.jsx)(e, { ...n, guildId: t, onImport: l });
                  });
              },
        "aria-disabled": o,
        children: [
            (0, i.jsx)(c.i, { size: "custom", width: 23, height: 23, color: "currentColor", className: _.aL }),
            (0, i.jsx)(a.E, {
                variant: "text-md/normal",
                color: "text-strong",
                className: _.qg,
                children: x.intl.string(x.t.xK9pBC),
            }),
            (0, i.jsx)(u.A, { direction: u.A.Directions.RIGHT, className: _.OW }),
        ],
    });
}
