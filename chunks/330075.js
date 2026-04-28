n.d(t, { i: () => E });
var i = n(627968);
n(64700);
var l = n(702841),
    s = n(821609),
    a = n(628677),
    r = n(192308),
    o = n(465932),
    d = n(317525),
    c = n(71393),
    u = n(957565),
    m = n(250627),
    h = n(253141),
    g = n(579970),
    A = n(500770),
    p = n(571654),
    x = n(482711),
    f = n(703543),
    C = n(652215);
function E(e) {
    let {
            guildProductListing: t,
            guildId: E,
            location: v,
            shouldShowFullDescriptionButton: I = !0,
            hideRoleTag: _ = !1,
            lineClamp: j = 1,
            cardWidth: N,
            cardHeight: T,
            thumbnailHeight: y,
            descriptionTextVariant: S = "text-sm/normal",
            showOpaqueBackground: b = !1,
        } = e,
        k = (0, l.bG)([c.A], () => c.A.getGuild(E), [E]),
        L = (0, l.bG)([d.A], () => d.A.getRole(E, t?.role_id ?? C.dJq)),
        R = (0, a.R)(t, 600),
        P = (0, p.z)(t),
        M = (0, m.BB)(k),
        { shouldHideGuildPurchaseEntryPoints: D } = (0, o.MH)(E),
        w = (0, p.X)(t),
        O = (0, f.A)({ guildId: E, guildProductListingId: t.id, sourceAnalyticsLocations: v });
    if (null == k || D) return null;
    let U = () => {
            var e;
            return (
                (e = { guildId: E, guildProductListingId: t.id, analyticsLocation: v }),
                void (0, r.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([
                        n.e("62170"),
                        n.e("16237"),
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
            guildId: E,
            showEditProduct: M,
            showUnpublishProduct: !1,
            showCopyLink: !0,
            showTestDownload: !1,
            showDeleteProduct: !1,
            showReportProduct: !0,
            onEditProduct: M
                ? () => {
                      g.q(k.id, t.id);
                  }
                : () => {},
            onUnpublishProduct: () => {},
            onDeleteProduct: () => {},
            onReportProduct: () => {
                !(function (e) {
                    let { listing: t } = e;
                    (0, r.openModalLazy)(async () => {
                        let { default: e } = await n.e("74624").then(n.bind(n, 144835));
                        return (n) => (0, i.jsx)(e, { listing: t, ...n });
                    });
                })({ listing: t });
            },
            onCopyProductLink: () => {
                (0, u.C)((0, h.KW)(E, t.id));
            },
            onTestDownload: () => {},
        });
    return (0, i.jsx)(
        A.A,
        {
            imageUrl: R,
            name: t.name,
            description: t.description,
            formattedPrice: w,
            role: L,
            ctaComponent: (0, i.jsx)(s.$, { ...O }),
            productType: P,
            shouldShowFullDescriptionButton: I,
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
