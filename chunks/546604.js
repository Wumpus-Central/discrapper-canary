n.d(t, { default: () => v }), n(953529);
var r = n(951288);
n(647438);
var a = n(512722),
    i = n.n(a),
    s = n(990547),
    l = n(442837),
    o = n(82659),
    c = n(481060),
    d = n(100527),
    u = n(213609),
    m = n(240657),
    x = n(809086),
    f = n(430824),
    h = n(240864),
    p = n(942833),
    j = n(409110),
    _ = n(843880),
    b = n(388032),
    g = n(791873);
function v(e) {
    var t, n;
    let { transitionState: a, guildProductListingId: v, analyticsLocation: Z, guildId: N, onClose: O } = e,
        y = (0, l.e7)([h.Z], () => h.Z.getGuildProduct(v));
    i()(null != y, "guildProductListing cannot be null"),
        (0, u.Z)({
            type: s.ImpressionTypes.MODAL,
            name: s.ImpressionNames.GUILD_PRODUCT_LISTING_INFO_MODAL,
            properties: {
                guild_product_listing_id: v,
                has_entitlement: !0 === y.has_entitlement,
                location: Z,
            },
        });
    let C = null != (t = (0, p.C)(y)) ? t : "",
        I = (0, p.k)(y),
        L = (0, l.e7)([f.Z], () => f.Z.getGuild(N)),
        D = (0, _.Z)({
            guildId: N,
            guildProductListingId: v,
            sourceAnalyticsLocations: d.Z.GUILD_PRODUCT_INFO_MODAL,
        });
    return (0, r.jsxs)(o.Modal, {
        title: y.name,
        subtitle: b.intl.format(b.t.xImSen, {
            productType: C,
            personName: null != (n = null == L ? void 0 : L.name) ? n : "",
        }),
        size: "md",
        transitionState: a,
        onClose: O,
        "aria-label": y.name,
        actions: [D],
        actionBarInput: (0, r.jsx)(c.Text, {
            tag: "div",
            variant: "heading-xl/semibold",
            color: "header-primary",
            children: I,
        }),
        children: [
            (0, r.jsx)(x.e, {
                height: 267,
                listing: y,
                className: g.headerImage,
                alt: "",
            }),
            (0, r.jsxs)("div", {
                className: g.body,
                children: [
                    (0, r.jsx)(j.Z, { listing: y }),
                    (0, r.jsx)(c.LZC, { size: 16 }),
                    (0, r.jsx)("div", { className: g.seperator }),
                    (0, r.jsx)(c.LZC, { size: 16 }),
                    (0, r.jsx)(c.X6q, {
                        variant: "heading-lg/medium",
                        color: "header-primary",
                        children: b.intl.string(b.t.TNnDJi),
                    }),
                    (0, r.jsx)(c.LZC, { size: 12 }),
                    (0, r.jsx)(m.Z, {
                        className: g.description,
                        variant: "text-md/normal",
                        color: "text-muted",
                        text: y.description,
                    }),
                ],
            }),
        ],
    });
}
