n.d(t, { default: () => Z }), n(953529);
var a = n(54381);
n(473749);
var r = n(512722),
    i = n.n(r),
    s = n(990547),
    l = n(793030),
    o = n(442837),
    c = n(481060),
    d = n(100527),
    u = n(213609),
    m = n(240657),
    x = n(809086),
    f = n(430824),
    h = n(240864),
    j = n(942833),
    p = n(409110),
    g = n(843880),
    b = n(388032),
    v = n(490171);
function Z(e) {
    var t, n;
    let { transitionState: r, guildProductListingId: Z, analyticsLocation: _, guildId: N, onClose: O } = e,
        C = (0, o.e7)([h.Z], () => h.Z.getGuildProduct(Z));
    i()(null != C, "guildProductListing cannot be null"),
        (0, u.Z)({
            type: s.ImpressionTypes.MODAL,
            name: s.ImpressionNames.GUILD_PRODUCT_LISTING_INFO_MODAL,
            properties: {
                guild_product_listing_id: Z,
                has_entitlement: !0 === C.has_entitlement,
                location: _,
            },
        });
    let I = null != (t = (0, j.C)(C)) ? t : "",
        y = (0, j.k)(C),
        L = (0, o.e7)([f.Z], () => f.Z.getGuild(N)),
        D = (0, g.Z)({
            guildId: N,
            guildProductListingId: Z,
            sourceAnalyticsLocations: d.Z.GUILD_PRODUCT_INFO_MODAL,
        });
    return (0, a.jsxs)(l.Modal, {
        title: C.name,
        subtitle: b.intl.format(b.t.xImSei, {
            productType: I,
            personName: null != (n = null == L ? void 0 : L.name) ? n : "",
        }),
        size: "md",
        transitionState: r,
        onClose: O,
        "aria-label": C.name,
        actions: [D],
        actionBarInput: (0, a.jsx)(c.Text, {
            tag: "div",
            variant: "heading-xl/semibold",
            color: "text-strong",
            children: y,
        }),
        children: [
            (0, a.jsx)(x.e, {
                height: 267,
                listing: C,
                className: v.headerImage,
                alt: "",
            }),
            (0, a.jsxs)("div", {
                className: v.body,
                children: [
                    (0, a.jsx)(p.Z, { listing: C }),
                    (0, a.jsx)(c.LZC, { size: 16 }),
                    (0, a.jsx)("div", { className: v.seperator }),
                    (0, a.jsx)(c.LZC, { size: 16 }),
                    (0, a.jsx)(c.Heading, {
                        variant: "heading-lg/medium",
                        color: "text-strong",
                        children: b.intl.string(b.t.TNnDJs),
                    }),
                    (0, a.jsx)(c.LZC, { size: 12 }),
                    (0, a.jsx)(m.Z, {
                        className: v.description,
                        variant: "text-md/normal",
                        color: "text-muted",
                        text: C.description,
                    }),
                ],
            }),
        ],
    });
}
