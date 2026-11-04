n.d(t, { i: () => I });
var i = n(477900);
n(582128);
var l = n(164636),
    s = n(821609),
    r = n(884345),
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
    x = n(339808),
    f = n(731423);
function I(e) {
    let {
            guildProductListing: t,
            guildId: I,
            location: E,
            shouldShowFullDescriptionButton: v = !0,
            hideRoleTag: C = !1,
            lineClamp: _ = 1,
            cardWidth: j,
            cardHeight: N,
            thumbnailHeight: y,
            descriptionTextVariant: b = "body-sm/normal",
            showOpaqueBackground: T = !1,
        } = e,
        S = (0, l.bG)([c.A], () => c.A.getGuild(I), [I]),
        k = (0, l.bG)([d.A], () => d.A.getRole(I, t?.role_id ?? "")),
        R = (0, r.R)(t, 600),
        L = (0, A.z)(t),
        M = (0, m.BB)(S),
        { shouldHideGuildPurchaseEntryPoints: P } = (0, o.MH)(I),
        D = (0, A.X)(t),
        O = (0, f.A)({ guildId: I, guildProductListingId: t.id, sourceAnalyticsLocations: E });
    if (null == S || P) return null;
    function U() {
        var e;
        return (
            (e = { guildId: I, guildProductListingId: t.id, analyticsLocation: E }),
            void (0, a.mM)(async () => {
                let { default: t } = await Promise.all([
                    n.e(24774),
                    n.e(835778),
                    n.e(47812),
                    n.e(813583),
                    n.e(964963),
                ]).then(n.bind(n, 733230));
                return (n) => (0, i.jsx)(t, { ...e, ...n });
            })
        );
    }
    let G = (0, i.jsx)(x.i, {
        product: t,
        guildId: I,
        showEditProduct: M,
        showUnpublishProduct: !1,
        showCopyLink: !0,
        showTestDownload: !1,
        showDeleteProduct: !1,
        showReportProduct: !0,
        onEditProduct: M
            ? function () {
                  null != S && g.q(S.id, t.id);
              }
            : () => {},
        onUnpublishProduct: () => {},
        onDeleteProduct: () => {},
        onReportProduct: function () {
            !(function (e) {
                let { listing: t } = e;
                (0, a.mM)(async () => {
                    let { default: e } = await n.e(708914).then(n.bind(n, 200073));
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
            imageUrl: R,
            name: t.name,
            description: t.description,
            formattedPrice: D,
            role: k,
            ctaComponent: (0, i.jsx)(s.$, { ...O }),
            productType: L,
            shouldShowFullDescriptionButton: v,
            onShowFullDescription: U,
            onTapCard: U,
            actionMenu: G,
            showOpaqueBackground: T,
            hideRoleTag: C,
            lineClamp: _,
            cardWidth: j,
            cardHeight: N,
            thumbnailHeight: y,
            descriptionTextVariant: b,
            isDraft: !t.published,
        },
        t.id,
    );
}
n(652215);
