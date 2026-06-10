n.d(t, { i: () => I });
var i = n(627968);
n(64700);
var l = n(702841),
    s = n(821609),
    r = n(628677),
    a = n(192308),
    o = n(465932),
    d = n(317525),
    c = n(71393),
    u = n(957565),
    m = n(250627),
    h = n(253141),
    g = n(579970),
    p = n(500770),
    A = n(571654),
    x = n(825596),
    f = n(703543),
    E = n(652215);
function I(e) {
    let {
            guildProductListing: t,
            guildId: I,
            location: C,
            shouldShowFullDescriptionButton: v = !0,
            hideRoleTag: _ = !1,
            lineClamp: j = 1,
            cardWidth: N,
            cardHeight: T,
            thumbnailHeight: y,
            descriptionTextVariant: S = "text-sm/normal",
            showOpaqueBackground: b = !1,
        } = e,
        L = (0, l.bG)([c.A], () => c.A.getGuild(I), [I]),
        R = (0, l.bG)([d.A], () => d.A.getRole(I, t?.role_id ?? E.dJq)),
        k = (0, r.R)(t, 600),
        M = (0, A.z)(t),
        P = (0, m.BB)(L),
        { shouldHideGuildPurchaseEntryPoints: D } = (0, o.MH)(I),
        w = (0, A.X)(t),
        O = (0, f.A)({ guildId: I, guildProductListingId: t.id, sourceAnalyticsLocations: C });
    if (null == L || D) return null;
    let U = () => {
            var e;
            return (
                (e = { guildId: I, guildProductListingId: t.id, analyticsLocation: C }),
                void (0, a.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([
                        n.e("66731"),
                        n.e("60462"),
                        n.e("35778"),
                        n.e("47812"),
                        n.e("13583"),
                        n.e("51234"),
                    ]).then(n.bind(n, 516889));
                    return (n) => (0, i.jsx)(t, { ...e, ...n });
                })
            );
        },
        G = (0, i.jsx)(x.i, {
            product: t,
            guildId: I,
            showEditProduct: P,
            showUnpublishProduct: !1,
            showCopyLink: !0,
            showTestDownload: !1,
            showDeleteProduct: !1,
            showReportProduct: !0,
            onEditProduct: P
                ? () => {
                      g.q(L.id, t.id);
                  }
                : () => {},
            onUnpublishProduct: () => {},
            onDeleteProduct: () => {},
            onReportProduct: () => {
                !(function (e) {
                    let { listing: t } = e;
                    (0, a.openModalLazy)(async () => {
                        let { default: e } = await n.e("74624").then(n.bind(n, 144835));
                        return (n) => (0, i.jsx)(e, { listing: t, ...n });
                    });
                })({ listing: t });
            },
            onCopyProductLink: () => {
                (0, u.C)((0, h.KW)(I, t.id));
            },
            onTestDownload: () => {},
        });
    return (0, i.jsx)(
        p.A,
        {
            imageUrl: k,
            name: t.name,
            description: t.description,
            formattedPrice: w,
            role: R,
            ctaComponent: (0, i.jsx)(s.$, { ...O }),
            productType: M,
            shouldShowFullDescriptionButton: v,
            onShowFullDescription: U,
            onTapCard: U,
            actionMenu: G,
            showOpaqueBackground: b,
            hideRoleTag: _,
            lineClamp: j,
            cardWidth: N,
            cardHeight: T,
            thumbnailHeight: y,
            descriptionTextVariant: S,
            isDraft: !t.published,
        },
        t.id,
    );
}
