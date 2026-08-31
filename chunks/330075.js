n.d(t, { i: () => I });
var i = n(477900);
n(582128);
var l = n(702841),
    s = n(821609),
    a = n(628677),
    r = n(192308),
    o = n(465932),
    c = n(317525),
    d = n(71393),
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
            shouldShowFullDescriptionButton: _ = !0,
            hideRoleTag: v = !1,
            lineClamp: N = 1,
            cardWidth: j,
            cardHeight: T,
            thumbnailHeight: S,
            descriptionTextVariant: y = "text-sm/normal",
            showOpaqueBackground: b = !1,
        } = e,
        R = (0, l.bG)([d.A], () => d.A.getGuild(I), [I]),
        L = (0, l.bG)([c.A], () => c.A.getRole(I, t?.role_id ?? E.dJq)),
        k = (0, a.R)(t, 600),
        M = (0, A.z)(t),
        O = (0, m.BB)(R),
        { shouldHideGuildPurchaseEntryPoints: P } = (0, o.MH)(I),
        D = (0, A.X)(t),
        U = (0, f.A)({ guildId: I, guildProductListingId: t.id, sourceAnalyticsLocations: C });
    if (null == R || P) return null;
    function G() {
        var e;
        return (
            (e = { guildId: I, guildProductListingId: t.id, analyticsLocation: C }),
            void (0, r.openModalLazy)(async () => {
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
        guildId: I,
        showEditProduct: O,
        showUnpublishProduct: !1,
        showCopyLink: !0,
        showTestDownload: !1,
        showDeleteProduct: !1,
        showReportProduct: !0,
        onEditProduct: O
            ? function () {
                  null != R && g.q(R.id, t.id);
              }
            : () => {},
        onUnpublishProduct: () => {},
        onDeleteProduct: () => {},
        onReportProduct: function () {
            !(function (e) {
                let { listing: t } = e;
                (0, r.openModalLazy)(async () => {
                    let { default: e } = await n.e("674624").then(n.bind(n, 144835));
                    return (n) => (0, i.jsx)(e, { listing: t, ...n });
                });
            })({ listing: t });
        },
        onCopyProductLink: function () {
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
            formattedPrice: D,
            role: L,
            ctaComponent: (0, i.jsx)(s.$, { ...U }),
            productType: M,
            shouldShowFullDescriptionButton: _,
            onShowFullDescription: G,
            onTapCard: G,
            actionMenu: w,
            showOpaqueBackground: b,
            hideRoleTag: v,
            lineClamp: N,
            cardWidth: j,
            cardHeight: T,
            thumbnailHeight: S,
            descriptionTextVariant: y,
            isDraft: !t.published,
        },
        t.id,
    );
}
