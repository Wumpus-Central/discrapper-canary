n.d(t, {
    default: () => O,
}),
    n(228524);
var r = n(627968);
n(64700);
var a = n(284009),
    l = n.n(a),
    s = n(110259),
    i = n(158954),
    c = n(311907),
    o = n(397927),
    d = n(793574),
    u = n(139286),
    x = n(308234),
    m = n(303612),
    h = n(71393),
    f = n(871109),
    b = n(571654),
    j = n(819968),
    p = n(897518),
    g = n(985018),
    A = n(451144);

function O(e) {
    var t, n;
    let { transitionState: a, guildProductListingId: O, analyticsLocation: v, guildId: _, onClose: y } = e,
        N = (0, c.bG)([f.A], () => f.A.getGuildProduct(O));
    l()(null != N, "guildProductListing cannot be null"),
        (0, u.A)({
            type: s.ImpressionTypes.MODAL,
            name: s.ImpressionNames.GUILD_PRODUCT_LISTING_INFO_MODAL,
            properties: {
                guild_product_listing_id: O,
                has_entitlement: !0 === N.has_entitlement,
                location: v,
            },
        });
    let D = null != (t = (0, b.z)(N)) ? t : "",
        I = (0, b.X)(N),
        z = (0, c.bG)([h.A], () => h.A.getGuild(_)),
        P = (0, p.A)({
            guildId: _,
            guildProductListingId: O,
            sourceAnalyticsLocations: d.A.GUILD_PRODUCT_INFO_MODAL,
        });
    return (0, r.jsxs)(i.Modal, {
        title: N.name,
        subtitle: g.intl.format(g.t.xImSei, {
            productType: D,
            personName: null != (n = null == z ? void 0 : z.name) ? n : "",
        }),
        size: "md",
        transitionState: a,
        onClose: y,
        "aria-label": N.name,
        actions: [P],
        actionBarInput: (0, r.jsx)(o.Text, {
            tag: "div",
            variant: "heading-xl/semibold",
            color: "text-strong",
            children: I,
        }),
        children: [
            (0, r.jsx)(m.y, {
                height: 267,
                listing: N,
                className: A.F0,
                alt: "",
            }),
            (0, r.jsxs)("div", {
                className: A.rf,
                children: [
                    (0, r.jsx)(j.A, {
                        listing: N,
                    }),
                    (0, r.jsx)(o.hKd, {
                        size: 16,
                    }),
                    (0, r.jsx)("div", {
                        className: A.OO,
                    }),
                    (0, r.jsx)(o.hKd, {
                        size: 16,
                    }),
                    (0, r.jsx)(o.Heading, {
                        variant: "heading-lg/medium",
                        color: "text-strong",
                        children: g.intl.string(g.t.TNnDJs),
                    }),
                    (0, r.jsx)(o.hKd, {
                        size: 12,
                    }),
                    (0, r.jsx)(x.A, {
                        className: A.h_,
                        variant: "text-md/normal",
                        color: "text-muted",
                        text: N.description,
                    }),
                ],
            }),
        ],
    });
}
