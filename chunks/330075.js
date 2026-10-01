n.d(t, { i: () => E });
var i = n(477900);
n(582128);
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
    I = n(652215);
function E(e) {
    let {
            guildProductListing: t,
            guildId: E,
            location: v,
            shouldShowFullDescriptionButton: C = !0,
            hideRoleTag: _ = !1,
            lineClamp: j = 1,
            cardWidth: N,
            cardHeight: y,
            thumbnailHeight: T,
            descriptionTextVariant: S = "text-sm/normal",
            showOpaqueBackground: b = !1,
        } = e,
        k = (0, l.bG)([c.A], () => c.A.getGuild(E), [E]),
        R = (0, l.bG)([d.A], () => d.A.getRole(E, t?.role_id ?? I.dJq)),
        L = (0, r.R)(t, 600),
        M = (0, A.z)(t),
        P = (0, m.BB)(k),
        { shouldHideGuildPurchaseEntryPoints: D } = (0, o.MH)(E),
        O = (0, A.X)(t),
        U = (0, f.A)({ guildId: E, guildProductListingId: t.id, sourceAnalyticsLocations: v });
    if (null == k || D) return null;
    function G() {
        var e;
        return (
            (e = { guildId: E, guildProductListingId: t.id, analyticsLocation: v }),
            void (0, a.openModalLazy)(async () => {
                let { default: t } = await Promise.all([
                    n.e("24774"),
                    n.e("835778"),
                    n.e("47812"),
                    n.e("813583"),
                    n.e("951234"),
                ]).then(n.bind(n, 516889));
                return (n) => (0, i.jsx)(t, { ...e, ...n });
            })
        );
    }
    let w = (0, i.jsx)(x.i, {
        product: t,
        guildId: E,
        showEditProduct: P,
        showUnpublishProduct: !1,
        showCopyLink: !0,
        showTestDownload: !1,
        showDeleteProduct: !1,
        showReportProduct: !0,
        onEditProduct: P
            ? function () {
                  null != k && g.q(k.id, t.id);
              }
            : () => {},
        onUnpublishProduct: () => {},
        onDeleteProduct: () => {},
        onReportProduct: function () {
            !(function (e) {
                let { listing: t } = e;
                (0, a.openModalLazy)(async () => {
                    let { default: e } = await n.e("674624").then(n.bind(n, 144835));
                    return (n) => (0, i.jsx)(e, { listing: t, ...n });
                });
            })({ listing: t });
        },
        onCopyProductLink: function () {
            (0, u.C)((0, h.KW)(E, t.id));
        },
        onTestDownload: () => {},
    });
    return (0, i.jsx)(
        p.A,
        {
            imageUrl: L,
            name: t.name,
            description: t.description,
            formattedPrice: O,
            role: R,
            ctaComponent: (0, i.jsx)(s.$, { ...U }),
            productType: M,
            shouldShowFullDescriptionButton: C,
            onShowFullDescription: G,
            onTapCard: G,
            actionMenu: w,
            showOpaqueBackground: b,
            hideRoleTag: _,
            lineClamp: j,
            cardWidth: N,
            cardHeight: y,
            thumbnailHeight: T,
            descriptionTextVariant: S,
            isDraft: !t.published,
        },
        t.id,
    );
}
