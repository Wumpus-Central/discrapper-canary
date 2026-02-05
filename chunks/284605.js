n.d(t, { i: () => C });
var i = n(627968);
n(64700);
var l = n(417597),
    a = n(732955),
    r = n(492749),
    s = n(827186),
    o = n(465932),
    d = n(317525),
    c = n(71393),
    u = n(957565),
    m = n(250627),
    _ = n(253141),
    h = n(579970),
    p = n(500770),
    g = n(571654),
    A = n(482711),
    f = n(897518),
    x = n(10979),
    E = n(652215);
function C(e) {
    let {
            guildProductListing: t,
            guildId: n,
            location: C,
            shouldShowFullDescriptionButton: I = !0,
            hideRoleTag: T = !1,
            lineClamp: v = 1,
            cardWidth: N,
            cardHeight: S,
            thumbnailHeight: b,
            descriptionTextVariant: y = "text-sm/normal",
            showOpaqueBackground: j = !1,
        } = e,
        R = (0, l.bG)([c.A], () => c.A.getGuild(n), [n]),
        L = (0, l.bG)([d.A], () => d.A.getRole(n, t?.role_id ?? E.dJq)),
        M = (0, r.R)(t, 600),
        O = (0, g.z)(t),
        P = (0, m.BB)(R),
        { shouldHideGuildPurchaseEntryPoints: D } = (0, o.MH)(n),
        k = (0, g.X)(t),
        U = (0, f.A)({ guildId: n, guildProductListingId: t.id, sourceAnalyticsLocations: C });
    if (null == R || D) return null;
    let w = () => (0, x.M)({ guildId: n, guildProductListingId: t.id, analyticsLocation: C }),
        G = (0, i.jsx)(A.i, {
            product: t,
            guildId: n,
            showEditProduct: P,
            showUnpublishProduct: !1,
            showCopyLink: !0,
            showTestDownload: !1,
            showDeleteProduct: !1,
            showReportProduct: !0,
            onEditProduct: P
                ? () => {
                      h.q(R.id, t.id);
                  }
                : () => {},
            onUnpublishProduct: () => {},
            onDeleteProduct: () => {},
            onReportProduct: () => {
                (0, s.F)({ listing: t });
            },
            onCopyProductLink: () => {
                (0, u.C)((0, _.KW)(n, t.id));
            },
            onTestDownload: () => {},
        });
    return (0, i.jsx)(
        p.A,
        {
            imageUrl: M,
            name: t.name,
            description: t.description,
            formattedPrice: k,
            role: L,
            ctaComponent: (0, i.jsx)(a.$nd, { ...U }),
            productType: O,
            shouldShowFullDescriptionButton: I,
            onShowFullDescription: w,
            onTapCard: w,
            actionMenu: G,
            showOpaqueBackground: j,
            hideRoleTag: T,
            lineClamp: v,
            cardWidth: N,
            cardHeight: S,
            thumbnailHeight: b,
            descriptionTextVariant: y,
            isDraft: !t.published,
        },
        t.id,
    );
}
