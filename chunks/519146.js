s.d(t, { default: () => N });
var a = s(627968);
s(64700);
var n = s(284009),
    i = s.n(n),
    l = s(110259),
    r = s(158954),
    d = s(311907),
    o = s(397927),
    c = s(793574),
    x = s(139286),
    m = s(308234),
    u = s(303612),
    h = s(71393),
    _ = s(871109),
    j = s(571654),
    A = s(819968),
    f = s(897518),
    g = s(985018),
    p = s(451144);
function N(e) {
    let { transitionState: t, guildProductListingId: s, analyticsLocation: n, guildId: N, onClose: v } = e,
        b = (0, d.bG)([_.A], () => _.A.getGuildProduct(s));
    i()(null != b, "guildProductListing cannot be null"),
        (0, x.A)({
            type: l.ImpressionTypes.MODAL,
            name: l.ImpressionNames.GUILD_PRODUCT_LISTING_INFO_MODAL,
            properties: { guild_product_listing_id: s, has_entitlement: !0 === b.has_entitlement, location: n },
        });
    let D = (0, j.z)(b) ?? "",
        I = (0, j.X)(b),
        O = (0, d.bG)([h.A], () => h.A.getGuild(N)),
        z = (0, f.A)({ guildId: N, guildProductListingId: s, sourceAnalyticsLocations: c.A.GUILD_PRODUCT_INFO_MODAL });
    return (0, a.jsxs)(r.Modal, {
        title: b.name,
        subtitle: g.intl.format(g.t.xImSei, { productType: D, personName: O?.name ?? "" }),
        size: "md",
        transitionState: t,
        onClose: v,
        "aria-label": b.name,
        actions: [z],
        actionBarInput: (0, a.jsx)(o.Text, {
            tag: "div",
            variant: "heading-xl/semibold",
            color: "text-strong",
            children: I,
        }),
        children: [
            (0, a.jsx)(u.y, { height: 267, listing: b, className: p.F0, alt: "" }),
            (0, a.jsxs)("div", {
                className: p.rf,
                children: [
                    (0, a.jsx)(A.A, { listing: b }),
                    (0, a.jsx)(o.hKd, { size: 16 }),
                    (0, a.jsx)("div", { className: p.OO }),
                    (0, a.jsx)(o.hKd, { size: 16 }),
                    (0, a.jsx)(o.Heading, {
                        variant: "heading-lg/medium",
                        color: "text-strong",
                        children: g.intl.string(g.t.TNnDJs),
                    }),
                    (0, a.jsx)(o.hKd, { size: 12 }),
                    (0, a.jsx)(m.A, {
                        className: p.h_,
                        variant: "text-md/normal",
                        color: "text-muted",
                        text: b.description,
                    }),
                ],
            }),
        ],
    });
}
