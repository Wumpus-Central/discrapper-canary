i.d(e, { default: () => P });
var s = i(627968),
    n = i(64700),
    l = i(284009),
    a = i.n(l),
    r = i(562708),
    d = i(189213),
    c = i(17928),
    o = i(834730),
    m = i(696986),
    x = i(534514),
    u = i(793574),
    h = i(139286),
    g = i(839656),
    j = i(303612),
    A = i(71393),
    p = i(871109),
    _ = i(571654),
    N = i(939249),
    D = i(317525),
    b = i(147925),
    O = i(59375),
    v = i(391442),
    I = i(411342),
    L = i(652215),
    f = i(375708),
    k = i(441231);
let G = "expanded-area";
function z(t) {
    let { attachments: e, role: i, roleLocked: l } = t,
        [a, r] = n.useState(!1);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)(N.D, {
                className: k.YA,
                onClick: function () {
                    r((t) => !t);
                },
                "aria-expanded": a,
                "aria-controls": G,
                children: [
                    (0, s.jsx)(o.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: a ? f.intl.string(f.t.DKNxgB) : f.intl.string(f.t.ESEKua),
                    }),
                    (0, s.jsx)(b.A, { className: k.Rq, direction: a ? b.A.Directions.UP : b.A.Directions.DOWN }),
                ],
            }),
            (0, s.jsx)(m.h, { size: 12 }),
            a &&
                (0, s.jsxs)("ul", {
                    className: k.cu,
                    id: G,
                    children: [
                        (0, s.jsx)(v.A, {
                            label: f.intl.string(f.t.DWYJua),
                            children: (0, s.jsx)("ul", {
                                className: k.yO,
                                children: e.map((t) => (0, s.jsx)(O.A, { attachment: t }, t.id)),
                            }),
                        }),
                        null != i &&
                            (0, s.jsxs)(s.Fragment, {
                                children: [
                                    (0, s.jsx)("div", { className: k.me }),
                                    (0, s.jsx)(v.A, {
                                        label: f.intl.string(f.t.o9xphc),
                                        children: (0, s.jsx)(I.A, {
                                            role: i,
                                            textVariant: "text-md/medium",
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
function C(t) {
    let { listing: e } = t,
        i = e.attachments ?? [],
        n = (0, c.bG)([D.A], () => D.A.getRole(e.guild_id, e.role_id ?? L.dJq)),
        l = !e.has_entitlement;
    return 0 === i.length && null == n
        ? null
        : 0 === i.length && null != n
          ? (0, s.jsx)(I.A, { role: n, textVariant: "text-md/medium", locked: l })
          : (0, s.jsx)(z, { attachments: i, role: n, roleLocked: l });
}
var y = i(703543),
    F = i(511869);
function P(t) {
    let { transitionState: e, guildProductListingId: i, analyticsLocation: n, guildId: l, onClose: N } = t,
        D = (0, c.bG)([p.A], () => p.A.getGuildProduct(i));
    a()(null != D, "guildProductListing cannot be null"),
        (0, h.A)({
            type: r.ImpressionTypes.MODAL,
            name: r.ImpressionNames.GUILD_PRODUCT_LISTING_INFO_MODAL,
            properties: { guild_product_listing_id: i, has_entitlement: !0 === D.has_entitlement, location: n },
        });
    let b = (0, _.z)(D) ?? "",
        O = (0, _.X)(D),
        v = (0, c.bG)([A.A], () => A.A.getGuild(l)),
        I = (0, y.A)({ guildId: l, guildProductListingId: i, sourceAnalyticsLocations: u.A.GUILD_PRODUCT_INFO_MODAL });
    return (0, s.jsxs)(d.Modal, {
        title: D.name,
        subtitle: f.intl.format(f.t.xImSei, { productType: b, personName: v?.name ?? "" }),
        size: "md",
        transitionState: e,
        onClose: N,
        "aria-label": D.name,
        actions: [I],
        actionBarInput: (0, s.jsx)(o.E, {
            tag: "div",
            variant: "heading-xl/semibold",
            color: "text-strong",
            children: O,
        }),
        children: [
            (0, s.jsx)(j.y, { height: 267, listing: D, className: F.F0, alt: "" }),
            (0, s.jsxs)("div", {
                className: F.rf,
                children: [
                    (0, s.jsx)(C, { listing: D }),
                    (0, s.jsx)(m.h, { size: 16 }),
                    (0, s.jsx)("div", { className: F.OO }),
                    (0, s.jsx)(m.h, { size: 16 }),
                    (0, s.jsx)(x.D, {
                        variant: "heading-lg/medium",
                        color: "text-strong",
                        children: f.intl.string(f.t.TNnDJs),
                    }),
                    (0, s.jsx)(m.h, { size: 12 }),
                    (0, s.jsx)(g.A, {
                        className: F.h_,
                        variant: "text-md/normal",
                        color: "text-muted",
                        text: D.description,
                    }),
                ],
            }),
        ],
    });
}
