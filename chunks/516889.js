s.d(t, { default: () => G });
var a = s(627968),
    i = s(64700),
    l = s(284009),
    n = s.n(l),
    r = s(110259),
    o = s(189213),
    c = s(17928),
    d = s(834730),
    x = s(696986),
    m = s(534514),
    h = s(793574),
    u = s(139286),
    _ = s(839656),
    f = s(303612),
    j = s(71393),
    g = s(871109),
    A = s(571654),
    p = s(939249),
    v = s(317525),
    N = s(147925),
    b = s(59375),
    D = s(391442),
    I = s(411342),
    O = s(652215),
    z = s(985018),
    E = s(441231);
let L = "expanded-area";
function C(e) {
    let { attachments: t, role: s, roleLocked: l } = e,
        [n, r] = i.useState(!1);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(p.D, {
                className: E.YA,
                onClick: () => {
                    r((e) => !e);
                },
                "aria-expanded": n,
                "aria-controls": L,
                children: [
                    (0, a.jsx)(d.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: n ? z.intl.string(z.t.DKNxgB) : z.intl.string(z.t.ESEKua),
                    }),
                    (0, a.jsx)(N.A, { className: E.Rq, direction: n ? N.A.Directions.UP : N.A.Directions.DOWN }),
                ],
            }),
            (0, a.jsx)(x.h, { size: 12 }),
            n &&
                (0, a.jsxs)("ul", {
                    className: E.cu,
                    id: L,
                    children: [
                        (0, a.jsx)(D.A, {
                            label: z.intl.string(z.t.DWYJua),
                            children: (0, a.jsx)("ul", {
                                className: E.yO,
                                children: t.map((e) => (0, a.jsx)(b.A, { attachment: e }, e.id)),
                            }),
                        }),
                        null != s &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)("div", { className: E.me }),
                                    (0, a.jsx)(D.A, {
                                        label: z.intl.string(z.t.o9xphc),
                                        children: (0, a.jsx)(I.A, {
                                            role: s,
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
function R(e) {
    let { listing: t } = e,
        s = t.attachments ?? [],
        i = (0, c.bG)([v.A], () => v.A.getRole(t.guild_id, t.role_id ?? O.dJq)),
        l = !t.has_entitlement;
    return 0 === s.length && null == i
        ? null
        : 0 === s.length && null != i
          ? (0, a.jsx)(I.A, { role: i, textVariant: "text-md/medium", locked: l })
          : (0, a.jsx)(C, { attachments: s, role: i, roleLocked: l });
}
var M = s(703543),
    k = s(511869);
function G(e) {
    let { transitionState: t, guildProductListingId: s, analyticsLocation: i, guildId: l, onClose: p } = e,
        v = (0, c.bG)([g.A], () => g.A.getGuildProduct(s));
    n()(null != v, "guildProductListing cannot be null"),
        (0, u.A)({
            type: r.ImpressionTypes.MODAL,
            name: r.ImpressionNames.GUILD_PRODUCT_LISTING_INFO_MODAL,
            properties: { guild_product_listing_id: s, has_entitlement: !0 === v.has_entitlement, location: i },
        });
    let N = (0, A.z)(v) ?? "",
        b = (0, A.X)(v),
        D = (0, c.bG)([j.A], () => j.A.getGuild(l)),
        I = (0, M.A)({ guildId: l, guildProductListingId: s, sourceAnalyticsLocations: h.A.GUILD_PRODUCT_INFO_MODAL });
    return (0, a.jsxs)(o.Modal, {
        title: v.name,
        subtitle: z.intl.format(z.t.xImSei, { productType: N, personName: D?.name ?? "" }),
        size: "md",
        transitionState: t,
        onClose: p,
        "aria-label": v.name,
        actions: [I],
        actionBarInput: (0, a.jsx)(d.E, {
            tag: "div",
            variant: "heading-xl/semibold",
            color: "text-strong",
            children: b,
        }),
        children: [
            (0, a.jsx)(f.y, { height: 267, listing: v, className: k.F0, alt: "" }),
            (0, a.jsxs)("div", {
                className: k.rf,
                children: [
                    (0, a.jsx)(R, { listing: v }),
                    (0, a.jsx)(x.h, { size: 16 }),
                    (0, a.jsx)("div", { className: k.OO }),
                    (0, a.jsx)(x.h, { size: 16 }),
                    (0, a.jsx)(m.D, {
                        variant: "heading-lg/medium",
                        color: "text-strong",
                        children: z.intl.string(z.t.TNnDJs),
                    }),
                    (0, a.jsx)(x.h, { size: 12 }),
                    (0, a.jsx)(_.A, {
                        className: k.h_,
                        variant: "text-md/normal",
                        color: "text-muted",
                        text: v.description,
                    }),
                ],
            }),
        ],
    });
}
