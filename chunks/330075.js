n.d(t, { i: () => C });
var i = n(627968);
n(64700);
var l = n(702841),
    a = n(821609),
    r = n(628677),
    s = n(192308),
    o = n(465932),
    c = n(317525),
    d = n(71393),
    u = n(957565),
    _ = n(250627),
    m = n(253141),
    h = n(579970),
    p = n(500770),
    g = n(571654),
    f = n(482711),
    x = n(703543),
    A = n(652215);
function C(e) {
    let {
            guildProductListing: t,
            guildId: C,
            location: v,
            shouldShowFullDescriptionButton: I = !0,
            hideRoleTag: E = !1,
            lineClamp: b = 1,
            cardWidth: y,
            cardHeight: T,
            thumbnailHeight: j,
            descriptionTextVariant: N = "text-sm/normal",
            showOpaqueBackground: S = !1,
        } = e,
        k = (0, l.bG)([d.A], () => d.A.getGuild(C), [C]),
        L = (0, l.bG)([c.A], () => c.A.getRole(C, t?.role_id ?? A.dJq)),
        R = (0, r.R)(t, 600),
        w = (0, g.z)(t),
        P = (0, _.BB)(k),
        { shouldHideGuildPurchaseEntryPoints: D } = (0, o.MH)(C),
        M = (0, g.X)(t),
        O = (0, x.A)({ guildId: C, guildProductListingId: t.id, sourceAnalyticsLocations: v });
    if (null == k || D) return null;
    let U = () => {
            var e;
            return (
                (e = { guildId: C, guildProductListingId: t.id, analyticsLocation: v }),
                void (0, s.openModalLazy)(async () => {
                    let { default: t } = await n.e("51234").then(n.bind(n, 516889));
                    return (n) => (0, i.jsx)(t, { ...e, ...n });
                })
            );
        },
        G = (0, i.jsx)(f.i, {
            product: t,
            guildId: C,
            showEditProduct: P,
            showUnpublishProduct: !1,
            showCopyLink: !0,
            showTestDownload: !1,
            showDeleteProduct: !1,
            showReportProduct: !0,
            onEditProduct: P
                ? () => {
                      h.q(k.id, t.id);
                  }
                : () => {},
            onUnpublishProduct: () => {},
            onDeleteProduct: () => {},
            onReportProduct: () => {
                !(function (e) {
                    let { listing: t } = e;
                    (0, s.openModalLazy)(async () => {
                        let { default: e } = await n.e("74624").then(n.bind(n, 144835));
                        return (n) => (0, i.jsx)(e, { listing: t, ...n });
                    });
                })({ listing: t });
            },
            onCopyProductLink: () => {
                (0, u.C)((0, m.KW)(C, t.id));
            },
            onTestDownload: () => {},
        });
    return (0, i.jsx)(
        p.A,
        {
            imageUrl: R,
            name: t.name,
            description: t.description,
            formattedPrice: M,
            role: L,
            ctaComponent: (0, i.jsx)(a.$, { ...O }),
            productType: w,
            shouldShowFullDescriptionButton: I,
            onShowFullDescription: U,
            onTapCard: U,
            actionMenu: G,
            showOpaqueBackground: S,
            hideRoleTag: E,
            lineClamp: b,
            cardWidth: y,
            cardHeight: T,
            thumbnailHeight: j,
            descriptionTextVariant: N,
            isDraft: !t.published,
        },
        t.id,
    );
}
