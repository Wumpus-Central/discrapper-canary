i.d(t, { default: () => F });
var s = i(477900),
    n = i(582128),
    l = i(284009),
    a = i.n(l),
    r = i(613412),
    d = i(855986),
    c = i(189213),
    o = i(834730),
    m = i(696986),
    u = i(534514),
    x = i(793574),
    h = i(139286),
    g = i(50398),
    j = i(303612),
    A = i(71393),
    p = i(871109),
    _ = i(571654),
    N = i(939249),
    b = i(317525),
    D = i(147925),
    v = i(59375),
    O = i(391442),
    I = i(411342);
i(652215);
var y = i(792996),
    L = i(673608);
let f = "expanded-area";
function k(e) {
    let { attachments: t, role: i, roleLocked: l } = e,
        [a, r] = n.useState(!1);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)(N.D, {
                className: L.YA,
                onClick: function () {
                    r((e) => !e);
                },
                "aria-expanded": a,
                "aria-controls": f,
                children: [
                    (0, s.jsx)(o.E, {
                        variant: "body-sm/medium",
                        color: "text-default",
                        children: a ? y.intl.string(y.t.DKNxgB) : y.intl.string(y.t.ESEKua),
                    }),
                    (0, s.jsx)(D.A, { className: L.Rq, direction: a ? D.A.Directions.UP : D.A.Directions.DOWN }),
                ],
            }),
            (0, s.jsx)(m.h, { size: 12 }),
            a &&
                (0, s.jsxs)("ul", {
                    className: L.cu,
                    id: f,
                    children: [
                        (0, s.jsx)(O.A, {
                            label: y.intl.string(y.t.DWYJua),
                            children: (0, s.jsx)("ul", {
                                className: L.yO,
                                children: t.map((e) => (0, s.jsx)(v.A, { attachment: e }, e.id)),
                            }),
                        }),
                        null != i &&
                            (0, s.jsxs)(s.Fragment, {
                                children: [
                                    (0, s.jsx)("div", { className: L.me }),
                                    (0, s.jsx)(O.A, {
                                        label: y.intl.string(y.t.o9xphc),
                                        children: (0, s.jsx)(I.A, {
                                            role: i,
                                            textVariant: "body-md/medium",
                                            locked: l,
                                        }),
                                    }),
                                ],
                            }),
                    ],
                }),
        ],
    });
}
function G(e) {
    let { listing: t } = e,
        i = t.attachments ?? [],
        n = (0, d.bG)([b.A], () => b.A.getRole(t.guild_id, t.role_id ?? "")),
        l = !t.has_entitlement;
    return 0 === i.length && null == n
        ? null
        : 0 === i.length && null != n
          ? (0, s.jsx)(I.A, { role: n, textVariant: "body-md/medium", locked: l })
          : (0, s.jsx)(k, { attachments: i, role: n, roleLocked: l });
}
var z = i(731423),
    C = i(979822);
function F(e) {
    let { transitionState: t, guildProductListingId: i, analyticsLocation: n, guildId: l, onClose: N } = e,
        b = (0, d.bG)([p.A], () => p.A.getGuildProduct(i));
    (a()(null != b, "guildProductListing cannot be null"),
        (0, h.A)({
            type: r.ImpressionTypes.MODAL,
            name: r.ImpressionNames.GUILD_PRODUCT_LISTING_INFO_MODAL,
            properties: { guild_product_listing_id: i, has_entitlement: !0 === b.has_entitlement, location: n },
        }));
    let D = (0, _.z)(b) ?? "",
        v = (0, _.X)(b),
        O = (0, d.bG)([A.A], () => A.A.getGuild(l)),
        I = (0, z.A)({ guildId: l, guildProductListingId: i, sourceAnalyticsLocations: x.A.GUILD_PRODUCT_INFO_MODAL });
    return (0, s.jsxs)(c.a, {
        title: b.name,
        subtitle: y.intl.format(y.t.xImSei, { productType: D, personName: O?.name ?? "" }),
        size: "md",
        transitionState: t,
        onClose: N,
        "aria-label": b.name,
        actions: [I],
        actionBarInput: (0, s.jsx)(o.E, {
            tag: "div",
            variant: "heading-xl/semibold",
            color: "text-strong",
            children: v,
        }),
        children: [
            (0, s.jsx)(j.y, { height: 267, listing: b, className: C.F0, alt: "" }),
            (0, s.jsxs)("div", {
                className: C.rf,
                children: [
                    (0, s.jsx)(G, { listing: b }),
                    (0, s.jsx)(m.h, { size: 16 }),
                    (0, s.jsx)("div", { className: C.OO }),
                    (0, s.jsx)(m.h, { size: 16 }),
                    (0, s.jsx)(u.D, {
                        variant: "heading-lg/medium",
                        color: "text-strong",
                        children: y.intl.string(y.t.TNnDJs),
                    }),
                    (0, s.jsx)(m.h, { size: 12 }),
                    (0, s.jsx)(g.A, {
                        className: C.h_,
                        variant: "body-md/normal",
                        color: "text-muted",
                        text: b.description,
                    }),
                ],
            }),
        ],
    });
}
