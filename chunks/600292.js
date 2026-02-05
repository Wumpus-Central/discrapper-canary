"use strict";
n.d(t, { A: () => g, q: () => x });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(397927),
    a = n(147925),
    o = n(371794),
    d = n(500345),
    c = n(11351),
    u = n(985018),
    m = n(100634);
function g(e) {
    let { channelBenefits: t, intangibleBenefits: s, subscriptionListings: a, onImport: g } = e,
        x = (0, c.gN)();
    return (0, i.jsx)("div", {
        className: m.kL,
        children: a.map((e) =>
            (0, i.jsxs)(
                "div",
                {
                    className: m.nM,
                    children: [
                        (0, i.jsx)("img", {
                            alt: "",
                            src: null == e.image_asset ? void 0 : (0, o.YE)(e.application_id, e.image_asset, 512),
                            className: l()(m.aL, m.mi),
                        }),
                        (0, i.jsxs)("div", {
                            className: m.fw,
                            children: [
                                (0, i.jsx)(r.Text, {
                                    variant: "text-md/normal",
                                    color: "text-strong",
                                    className: l()(m.qg, m.Wo),
                                    children: e.name,
                                }),
                                (0, i.jsx)(r.Text, {
                                    color: "text-default",
                                    variant: "text-sm/normal",
                                    children: u.intl.format(u.t["QMj+In"], {
                                        channels: e.role_benefits.benefits.filter(d.B1).length,
                                        benefits: e.role_benefits.benefits.filter(d.b1).length,
                                    }),
                                }),
                            ],
                        }),
                        (0, i.jsx)(r.Button, {
                            variant: "secondary",
                            onClick: () => {
                                (0, r.mMO)(async () => {
                                    let { ImportBenefitsFromSubscriptionListingModal: l } = await n
                                        .e("66946")
                                        .then(n.bind(n, 362937));
                                    return (n) =>
                                        (0, i.jsx)(l, {
                                            ...n,
                                            fromSubscriptionListing: e,
                                            existingChannelBenefits: t,
                                            existingIntangibleBenefits: s,
                                            onSubmit: g,
                                        });
                                });
                            },
                            disabled: x,
                            text: u.intl.string(u.t["90bIv9"]),
                        }),
                    ],
                },
                e.id,
            ),
        ),
    });
}
function x(e) {
    let { guildId: t, onImport: s, disabled: o = !1 } = e;
    return (0, i.jsxs)(r.DUT, {
        className: l()(m.eZ, { [m.r9]: o }),
        onClick: o
            ? void 0
            : function () {
                  (0, r.mMO)(async () => {
                      let { ImportBenefitsFromRoleModal: e } = await n.e("66946").then(n.bind(n, 362937));
                      return (n) => (0, i.jsx)(e, { ...n, guildId: t, onImport: s });
                  });
              },
        "aria-disabled": o,
        children: [
            (0, i.jsx)(r.iTF, { size: "custom", width: 23, height: 23, color: "currentColor", className: m.aL }),
            (0, i.jsx)(r.Text, {
                variant: "text-md/normal",
                color: "text-strong",
                className: m.qg,
                children: u.intl.string(u.t.xK9pBC),
            }),
            (0, i.jsx)(a.A, { direction: a.A.Directions.RIGHT, className: m.OW }),
        ],
    });
}
