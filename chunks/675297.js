n.d(t, { H: () => C });
var i = n(200651);
n(192379);
var l = n(399606),
    a = n(166081),
    r = n(54797),
    s = n(674180),
    o = n(430824),
    c = n(572004),
    d = n(267101),
    u = n(863663),
    m = n(676651),
    _ = n(623488),
    h = n(942833),
    p = n(391181),
    g = n(964793),
    f = n(226060),
    x = n(981631);
function C(e) {
    let { guildProductListing: t, guildId: n, location: C, shouldShowFullDescriptionButton: E = !0, hideRoleTag: v = !1, lineClamp: I = 1, cardWidth: N, cardHeight: S, thumbnailHeight: T, descriptionTextVariant: b = 'text-sm/normal', showOpaqueBackground: A = !1 } = e,
        j = (0, l.e7)([o.Z], () => o.Z.getGuild(n), [n]),
        y = (0, l.e7)([o.Z], () => {
            var e;
            return o.Z.getRole(n, null !== (e = null == t ? void 0 : t.role_id) && void 0 !== e ? e : x.lds);
        }),
        Z = (0, a.U)(t, 600),
        R = (0, h.C)(t),
        L = (0, d.SO)(j),
        { shouldHideGuildPurchaseEntryPoints: P } = (0, s.uP)(n),
        k = (0, h.k)(t);
    if (null == j || P) return null;
    let M = () =>
            (0, g.e)({
                guildId: n,
                guildProductListingId: t.id,
                analyticsLocation: C
            }),
        O = (0, i.jsx)(p.m, {
            product: t,
            guildId: n,
            showEditProduct: L,
            showUnpublishProduct: !1,
            showCopyLink: !0,
            showTestDownload: !1,
            showDeleteProduct: !1,
            showReportProduct: !0,
            onEditProduct: L
                ? () => {
                      m.h(j.id, t.id);
                  }
                : () => {},
            onUnpublishProduct: () => {},
            onDeleteProduct: () => {},
            onReportProduct: () => {
                (0, r.x)({ listing: t });
            },
            onCopyProductLink: () => {
                (0, c.JG)((0, u.ar)(n, t.id));
            },
            onTestDownload: () => {}
        });
    return (0, i.jsx)(
        _.Z,
        {
            imageUrl: Z,
            name: t.name,
            description: t.description,
            formattedPrice: k,
            role: y,
            ctaComponent: (0, i.jsx)(f.Z, {
                guildId: n,
                guildProductListingId: t.id,
                sourceAnalyticsLocations: C
            }),
            productType: R,
            shouldShowFullDescriptionButton: E,
            onShowFullDescription: M,
            onTapCard: M,
            actionMenu: O,
            showOpaqueBackground: A,
            hideRoleTag: v,
            lineClamp: I,
            cardWidth: N,
            cardHeight: S,
            thumbnailHeight: T,
            descriptionTextVariant: b,
            isDraft: !t.published
        },
        t.id
    );
}
