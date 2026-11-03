i.d(t, { default: () => P });
var s = i(477900),
    n = i(582128),
    l = i(284009),
    a = i.n(l),
    r = i(131937),
    d = i(17928),
    c = i(189213),
    o = i(834730),
    m = i(696986),
    u = i(534514),
    x = i(793574),
    h = i(139286),
    g = i(839656),
    j = i(303612),
    A = i(71393),
    p = i(871109),
    _ = i(571654),
    N = i(939249),
    b = i(317525),
    D = i(147925),
    O = i(59375),
    v = i(391442),
    I = i(411342),
    y = i(652215),
    L = i(105292),
    f = i(673608);
let k = "expanded-area";
function G(e) {
    let { attachments: t, role: i, roleLocked: l } = e,
        [a, r] = n.useState(!1);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)(N.D, {
                className: f.YA,
                onClick: function () {
                    r((e) => !e);
                },
                "aria-expanded": a,
                "aria-controls": k,
                children: [
                    (0, s.jsx)(o.E, {
                        variant: "body-sm/medium",
                        color: "text-default",
                        children: a ? L.intl.string(L.t.DKNxgB) : L.intl.string(L.t.ESEKua),
                    }),
                    (0, s.jsx)(D.A, { className: f.Rq, direction: a ? D.A.Directions.UP : D.A.Directions.DOWN }),
                ],
            }),
            (0, s.jsx)(m.h, { size: 12 }),
            a &&
                (0, s.jsxs)("ul", {
                    className: f.cu,
                    id: k,
                    children: [
                        (0, s.jsx)(v.A, {
                            label: L.intl.string(L.t.DWYJua),
                            children: (0, s.jsx)("ul", {
                                className: f.yO,
                                children: t.map((e) => (0, s.jsx)(O.A, { attachment: e }, e.id)),
                            }),
                        }),
                        null != i &&
                            (0, s.jsxs)(s.Fragment, {
                                children: [
                                    (0, s.jsx)("div", { className: f.me }),
                                    (0, s.jsx)(v.A, {
                                        label: L.intl.string(L.t.o9xphc),
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
function z(e) {
    let { listing: t } = e,
        i = t.attachments ?? [],
        n = (0, d.bG)([b.A], () => b.A.getRole(t.guild_id, t.role_id ?? y.dJq)),
        l = !t.has_entitlement;
    return 0 === i.length && null == n
        ? null
        : 0 === i.length && null != n
          ? (0, s.jsx)(I.A, { role: n, textVariant: "body-md/medium", locked: l })
          : (0, s.jsx)(G, { attachments: i, role: n, roleLocked: l });
}
var C = i(703543),
    F = i(979822);
function P(e) {
    let { transitionState: t, guildProductListingId: i, analyticsLocation: n, guildId: l, onClose: N } = e,
        b = (0, d.bG)([p.A], () => p.A.getGuildProduct(i));
    (a()(null != b, "guildProductListing cannot be null"),
        (0, h.A)({
            type: r.ImpressionTypes.MODAL,
            name: r.ImpressionNames.GUILD_PRODUCT_LISTING_INFO_MODAL,
            properties: { guild_product_listing_id: i, has_entitlement: !0 === b.has_entitlement, location: n },
        }));
    let D = (0, _.z)(b) ?? "",
        O = (0, _.X)(b),
        v = (0, d.bG)([A.A], () => A.A.getGuild(l)),
        I = (0, C.A)({ guildId: l, guildProductListingId: i, sourceAnalyticsLocations: x.A.GUILD_PRODUCT_INFO_MODAL });
    return (0, s.jsxs)(c.a, {
        title: b.name,
        subtitle: L.intl.format(L.t.xImSei, { productType: D, personName: v?.name ?? "" }),
        size: "md",
        transitionState: t,
        onClose: N,
        "aria-label": b.name,
        actions: [I],
        actionBarInput: (0, s.jsx)(o.E, {
            tag: "div",
            variant: "heading-xl/semibold",
            color: "text-strong",
            children: O,
        }),
        children: [
            (0, s.jsx)(j.y, { height: 267, listing: b, className: F.F0, alt: "" }),
            (0, s.jsxs)("div", {
                className: F.rf,
                children: [
                    (0, s.jsx)(z, { listing: b }),
                    (0, s.jsx)(m.h, { size: 16 }),
                    (0, s.jsx)("div", { className: F.OO }),
                    (0, s.jsx)(m.h, { size: 16 }),
                    (0, s.jsx)(u.D, {
                        variant: "heading-lg/medium",
                        color: "text-strong",
                        children: L.intl.string(L.t.TNnDJs),
                    }),
                    (0, s.jsx)(m.h, { size: 12 }),
                    (0, s.jsx)(g.A, {
                        className: F.h_,
                        variant: "body-md/normal",
                        color: "text-muted",
                        text: b.description,
                    }),
                ],
            }),
        ],
    });
}
