n.d(t, { H: () => C }), n(953529);
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
    _ = n(942833),
    g = n(391181),
    h = n(964793),
    b = n(226060),
    E = n(981631);
function C(e) {
    let {
            guildProductListing: t,
            guildId: n,
            location: C,
            shouldShowFullDescriptionButton: v = !0,
            hideRoleTag: O = !1,
            lineClamp: y = 1,
            cardWidth: x,
            cardHeight: j,
            thumbnailHeight: I,
            descriptionTextVariant: S = "text-sm/normal",
            showOpaqueBackground: T = !1,
        } = e,
        P = (0, i.e7)([c.Z], () => c.Z.getGuild(n), [n]),
        N = (0, i.e7)([s.Z], () => {
            var e;
            return s.Z.getRole(n, null != (e = null == t ? void 0 : t.role_id) ? e : E.lds);
        }),
        A = (0, l.U)(t, 600),
        w = (0, _.C)(t),
        Z = (0, d.SO)(P),
        { shouldHideGuildPurchaseEntryPoints: R } = (0, o.uP)(n),
        L = (0, _.k)(t);
    if (null == P || R) return null;
    let D = () =>
            (0, h.e)({
                guildId: n,
                guildProductListingId: t.id,
                analyticsLocation: C,
            }),
        M = (0, r.jsx)(g.m, {
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
                      m.h(P.id, t.id);
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
            onTestDownload: () => {},
        });
    return (0, r.jsx)(
        f.Z,
        {
            imageUrl: A,
            name: t.name,
            description: t.description,
            formattedPrice: L,
            role: N,
            ctaComponent: (0, r.jsx)(b.Z, {
                guildId: n,
                guildProductListingId: t.id,
                sourceAnalyticsLocations: C,
            }),
            productType: w,
            shouldShowFullDescriptionButton: v,
            onShowFullDescription: D,
            onTapCard: D,
            actionMenu: M,
            showOpaqueBackground: T,
            hideRoleTag: O,
            lineClamp: y,
            cardWidth: x,
            cardHeight: j,
            thumbnailHeight: I,
            descriptionTextVariant: S,
            isDraft: !t.published,
        },
        t.id,
    );
}
