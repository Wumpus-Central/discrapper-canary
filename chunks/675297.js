n.d(t, {
    H: function () {
        return C;
    }
});
var i = n(200651);
n(192379);
var r = n(399606),
    l = n(166081),
    a = n(54797),
    o = n(674180),
    s = n(430824),
    c = n(572004),
    d = n(267101),
    u = n(863663),
    m = n(676651),
    h = n(623488),
    f = n(942833),
    p = n(391181),
    _ = n(964793),
    g = n(226060),
    E = n(981631);
function C(e) {
    let { guildProductListing: t, guildId: n, location: C, shouldShowFullDescriptionButton: I = !0, hideRoleTag: x = !1, lineClamp: N = 1, cardWidth: v, cardHeight: T, thumbnailHeight: S, descriptionTextVariant: A = 'text-sm/normal', showOpaqueBackground: b = !1 } = e,
        j = (0, r.e7)([s.Z], () => s.Z.getGuild(n), [n]),
        R = (0, r.e7)([s.Z], () => {
            var e;
            return s.Z.getRole(n, null !== (e = null == t ? void 0 : t.role_id) && void 0 !== e ? e : E.lds);
        }),
        Z = (0, l.U)(t, 600),
        P = (0, f.C)(t),
        L = (0, d.SO)(j),
        { shouldHideGuildPurchaseEntryPoints: y } = (0, o.uP)(n),
        O = (0, f.k)(t);
    if (null == j || y) return null;
    let M = () =>
            (0, _.e)({
                guildId: n,
                guildProductListingId: t.id,
                analyticsLocation: C
            }),
        k = (0, i.jsx)(p.m, {
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
                (0, a.x)({ listing: t });
            },
            onCopyProductLink: () => {
                (0, c.JG)((0, u.ar)(n, t.id));
            },
            onTestDownload: () => {}
        });
    return (0, i.jsx)(
        h.Z,
        {
            imageUrl: Z,
            name: t.name,
            description: t.description,
            formattedPrice: O,
            role: R,
            ctaComponent: (0, i.jsx)(g.Z, {
                guildId: n,
                guildProductListingId: t.id,
                sourceAnalyticsLocations: C
            }),
            productType: P,
            shouldShowFullDescriptionButton: I,
            onShowFullDescription: M,
            onTapCard: M,
            actionMenu: k,
            showOpaqueBackground: b,
            hideRoleTag: x,
            lineClamp: N,
            cardWidth: v,
            cardHeight: T,
            thumbnailHeight: S,
            descriptionTextVariant: A,
            isDraft: !t.published
        },
        t.id
    );
}
