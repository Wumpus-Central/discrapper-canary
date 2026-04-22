s.d(t, { default: () => b });
var a = s(627968);
s(64700);
var i = s(284009),
    l = s.n(i),
    n = s(110259),
    r = s(189213),
    o = s(311907),
    c = s(834730),
    d = s(696986),
    x = s(534514),
    m = s(793574),
    h = s(139286),
    u = s(308234),
    _ = s(303612),
    f = s(71393),
    j = s(871109),
    A = s(571654),
    g = s(819968),
    p = s(897518),
    v = s(985018),
    N = s(511869);
function b(e) {
    let { transitionState: t, guildProductListingId: s, analyticsLocation: i, guildId: b, onClose: D } = e,
        I = (0, o.bG)([j.A], () => j.A.getGuildProduct(s));
    l()(null != I, "guildProductListing cannot be null"),
        (0, h.A)({
            type: n.ImpressionTypes.MODAL,
            name: n.ImpressionNames.GUILD_PRODUCT_LISTING_INFO_MODAL,
            properties: { guild_product_listing_id: s, has_entitlement: !0 === I.has_entitlement, location: i },
        });
    let O = (0, A.z)(I) ?? "",
        z = (0, A.X)(I),
        E = (0, o.bG)([f.A], () => f.A.getGuild(b)),
        L = (0, p.A)({ guildId: b, guildProductListingId: s, sourceAnalyticsLocations: m.A.GUILD_PRODUCT_INFO_MODAL });
    return (0, a.jsxs)(r.Modal, {
        title: I.name,
        subtitle: v.intl.format(v.t.xImSei, { productType: O, personName: E?.name ?? "" }),
        size: "md",
        transitionState: t,
        onClose: D,
        "aria-label": I.name,
        actions: [L],
        actionBarInput: (0, a.jsx)(c.E, {
            tag: "div",
            variant: "heading-xl/semibold",
            color: "text-strong",
            children: z,
        }),
        children: [
            (0, a.jsx)(_.y, { height: 267, listing: I, className: N.F0, alt: "" }),
            (0, a.jsxs)("div", {
                className: N.rf,
                children: [
                    (0, a.jsx)(g.A, { listing: I }),
                    (0, a.jsx)(d.h, { size: 16 }),
                    (0, a.jsx)("div", { className: N.OO }),
                    (0, a.jsx)(d.h, { size: 16 }),
                    (0, a.jsx)(x.D, {
                        variant: "heading-lg/medium",
                        color: "text-strong",
                        children: v.intl.string(v.t.TNnDJs),
                    }),
                    (0, a.jsx)(d.h, { size: 12 }),
                    (0, a.jsx)(u.A, {
                        className: N.h_,
                        variant: "text-md/normal",
                        color: "text-muted",
                        text: I.description,
                    }),
                ],
            }),
        ],
    });
}
