(n.d(t, { H: () => C }), n(953529));
var r = n(255367);
n(73800);
var i = n(399606),
    l = n(166081),
    a = n(54797),
    o = n(674180),
    s = n(485386),
    c = n(430824),
    u = n(572004),
    d = n(267101),
    p = n(863663),
    m = n(676651),
    f = n(623488),
    g = n(942833),
    _ = n(391181),
    h = n(964793),
    b = n(226060),
    E = n(981631);
function C(e) {
    let { guildProductListing: t, guildId: n, location: C, shouldShowFullDescriptionButton: v = !0, hideRoleTag: O = !1, lineClamp: x = 1, cardWidth: y, cardHeight: I, thumbnailHeight: j, descriptionTextVariant: S = 'text-sm/normal', showOpaqueBackground: T = !1 } = e,
        N = (0, i.e7)([c.Z], () => c.Z.getGuild(n), [n]),
        P = (0, i.e7)([s.Z], () => {
            var e;
            return s.Z.getRole(n, null != (e = null == t ? void 0 : t.role_id) ? e : E.lds);
        }),
        A = (0, l.U)(t, 600),
        w = (0, g.C)(t),
        Z = (0, d.SO)(N),
        { shouldHideGuildPurchaseEntryPoints: R } = (0, o.uP)(n),
        D = (0, g.k)(t);
    if (null == N || R) return null;
    let L = () =>
            (0, h.e)({
                guildId: n,
                guildProductListingId: t.id,
                analyticsLocation: C
            }),
        M = (0, r.jsx)(_.m, {
            product: t,
            guildId: n,
            showEditProduct: Z,
            showUnpublishProduct: !1,
            showCopyLink: !0,
            showTestDownload: !1,
            showDeleteProduct: !1,
            showReportProduct: !0,
            onEditProduct: Z
                ? () => {
                      m.h(N.id, t.id);
                  }
                : () => {},
            onUnpublishProduct: () => {},
            onDeleteProduct: () => {},
            onReportProduct: () => {
                (0, a.x)({ listing: t });
            },
            onCopyProductLink: () => {
                (0, u.JG)((0, p.ar)(n, t.id));
            },
            onTestDownload: () => {}
        });
    return (0, r.jsx)(
        f.Z,
        {
            imageUrl: A,
            name: t.name,
            description: t.description,
            formattedPrice: D,
            role: P,
            ctaComponent: (0, r.jsx)(b.Z, {
                guildId: n,
                guildProductListingId: t.id,
                sourceAnalyticsLocations: C
            }),
            productType: w,
            shouldShowFullDescriptionButton: v,
            onShowFullDescription: L,
            onTapCard: L,
            actionMenu: M,
            showOpaqueBackground: T,
            hideRoleTag: O,
            lineClamp: x,
            cardWidth: y,
            cardHeight: I,
            thumbnailHeight: j,
            descriptionTextVariant: S,
            isDraft: !t.published
        },
        t.id
    );
}
