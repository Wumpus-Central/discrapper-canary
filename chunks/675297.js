(n.d(t, { H: () => x }), n(953529));
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
    h = n(942833),
    g = n(391181),
    _ = n(964793),
    b = n(226060),
    E = n(981631);
function x(e) {
    let { guildProductListing: t, guildId: n, location: x, shouldShowFullDescriptionButton: y = !0, hideRoleTag: v = !1, lineClamp: C = 1, cardWidth: O, cardHeight: j, thumbnailHeight: I, descriptionTextVariant: S = 'text-sm/normal', showOpaqueBackground: T = !1 } = e,
        N = (0, i.e7)([c.Z], () => c.Z.getGuild(n), [n]),
        P = (0, i.e7)([s.Z], () => {
            var e;
            return s.Z.getRole(n, null != (e = null == t ? void 0 : t.role_id) ? e : E.lds);
        }),
        A = (0, l.U)(t, 600),
        w = (0, h.C)(t),
        Z = (0, d.SO)(N),
        { shouldHideGuildPurchaseEntryPoints: R } = (0, o.uP)(n),
        L = (0, h.k)(t);
    if (null == N || R) return null;
    let k = () =>
            (0, _.e)({
                guildId: n,
                guildProductListingId: t.id,
                analyticsLocation: x
            }),
        D = (0, r.jsx)(g.m, {
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
            formattedPrice: L,
            role: P,
            ctaComponent: (0, r.jsx)(b.Z, {
                guildId: n,
                guildProductListingId: t.id,
                sourceAnalyticsLocations: x
            }),
            productType: w,
            shouldShowFullDescriptionButton: y,
            onShowFullDescription: k,
            onTapCard: k,
            actionMenu: D,
            showOpaqueBackground: T,
            hideRoleTag: v,
            lineClamp: C,
            cardWidth: O,
            cardHeight: j,
            thumbnailHeight: I,
            descriptionTextVariant: S,
            isDraft: !t.published
        },
        t.id
    );
}
