n.d(t, { i: () => E });
var i = n(627968);
n(64700);
var l = n(417597),
    a = n(821609),
    s = n(492749),
    r = n(827186),
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
    C = n(652215);
function E(e) {
    let {
            guildProductListing: t,
            guildId: n,
            location: E,
            shouldShowFullDescriptionButton: I = !0,
            hideRoleTag: v = !1,
            lineClamp: b = 1,
            cardWidth: T,
            cardHeight: S,
            thumbnailHeight: y,
            descriptionTextVariant: N = "text-sm/normal",
            showOpaqueBackground: j = !1,
        } = e,
        L = (0, l.bG)([c.A], () => c.A.getGuild(n), [n]),
        R = (0, l.bG)([d.A], () => d.A.getRole(n, t?.role_id ?? C.dJq)),
        P = (0, s.R)(t, 600),
        w = (0, g.z)(t),
        D = (0, m.BB)(L),
        { shouldHideGuildPurchaseEntryPoints: k } = (0, o.MH)(n),
        O = (0, g.X)(t),
        M = (0, f.A)({ guildId: n, guildProductListingId: t.id, sourceAnalyticsLocations: E });
    if (null == L || k) return null;
    let U = () => (0, x.M)({ guildId: n, guildProductListingId: t.id, analyticsLocation: E }),
        G = (0, i.jsx)(A.i, {
            product: t,
            guildId: n,
            showEditProduct: D,
            showUnpublishProduct: !1,
            showCopyLink: !0,
            showTestDownload: !1,
            showDeleteProduct: !1,
            showReportProduct: !0,
            onEditProduct: D
                ? () => {
                      h.q(L.id, t.id);
                  }
                : () => {},
            onUnpublishProduct: () => {},
            onDeleteProduct: () => {},
            onReportProduct: () => {
                (0, r.F)({ listing: t });
            },
            onCopyProductLink: () => {
                (0, u.C)((0, _.KW)(n, t.id));
            },
            onTestDownload: () => {},
        });
    return (0, i.jsx)(
        p.A,
        {
            imageUrl: P,
            name: t.name,
            description: t.description,
            formattedPrice: O,
            role: R,
            ctaComponent: (0, i.jsx)(a.$, { ...M }),
            productType: w,
            shouldShowFullDescriptionButton: I,
            onShowFullDescription: U,
            onTapCard: U,
            actionMenu: G,
            showOpaqueBackground: j,
            hideRoleTag: v,
            lineClamp: b,
            cardWidth: T,
            cardHeight: S,
            thumbnailHeight: y,
            descriptionTextVariant: N,
            isDraft: !t.published,
        },
        t.id,
    );
}
