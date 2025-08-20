n.d(t, { H: () => O }), n(953529);
var r = n(951288);
n(647438);
var i = n(399606),
    a = n(166081),
    o = n(54797),
    s = n(674180),
    l = n(485386),
    c = n(430824),
    u = n(572004),
    d = n(267101),
    f = n(863663),
    _ = n(676651),
    p = n(623488),
    h = n(942833),
    m = n(391181),
    g = n(964793),
    E = n(226060),
    b = n(981631);
let y = 600;
function O(e) {
    let {
            guildProductListing: t,
            guildId: n,
            location: O,
            shouldShowFullDescriptionButton: v = !0,
            hideRoleTag: I = !1,
            lineClamp: T = 1,
            cardWidth: S,
            cardHeight: A,
            thumbnailHeight: C,
            descriptionTextVariant: N = "text-sm/normal",
            showOpaqueBackground: R = !1,
        } = e,
        P = (0, i.e7)([c.Z], () => c.Z.getGuild(n), [n]),
        w = (0, i.e7)([l.Z], () => {
            var e;
            return l.Z.getRole(n, null != (e = null == t ? void 0 : t.role_id) ? e : b.lds);
        }),
        D = (0, a.U)(t, y),
        x = (0, h.C)(t),
        L = (0, d.SO)(P),
        { shouldHideGuildPurchaseEntryPoints: j } = (0, s.uP)(n),
        M = (0, h.k)(t);
    if (null == P || j) return null;
    let k = () =>
            (0, g.e)({
                guildId: n,
                guildProductListingId: t.id,
                analyticsLocation: O,
            }),
        U = () => {
            _.h(P.id, t.id);
        },
        G = () => {
            (0, o.x)({ listing: t });
        },
        B = () => {
            (0, u.JG)((0, f.ar)(n, t.id));
        },
        Z = (0, r.jsx)(m.m, {
            product: t,
            guildId: n,
            showEditProduct: L,
            showUnpublishProduct: !1,
            showCopyLink: !0,
            showTestDownload: !1,
            showDeleteProduct: !1,
            showReportProduct: !0,
            onEditProduct: L ? U : () => {},
            onUnpublishProduct: () => {},
            onDeleteProduct: () => {},
            onReportProduct: G,
            onCopyProductLink: B,
            onTestDownload: () => {},
        });
    return (0, r.jsx)(
        p.Z,
        {
            imageUrl: D,
            name: t.name,
            description: t.description,
            formattedPrice: M,
            role: w,
            ctaComponent: (0, r.jsx)(E.Z, {
                guildId: n,
                guildProductListingId: t.id,
                sourceAnalyticsLocations: O,
            }),
            productType: x,
            shouldShowFullDescriptionButton: v,
            onShowFullDescription: k,
            onTapCard: k,
            actionMenu: Z,
            showOpaqueBackground: R,
            hideRoleTag: I,
            lineClamp: T,
            cardWidth: S,
            cardHeight: A,
            thumbnailHeight: C,
            descriptionTextVariant: N,
            isDraft: !t.published,
        },
        t.id,
    );
}
