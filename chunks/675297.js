n.d(t, { H: () => T }), n(953529);
var r = n(54381);
n(473749);
var i = n(399606),
    a = n(159691),
    o = n(166081),
    s = n(54797),
    l = n(674180),
    c = n(485386),
    u = n(430824),
    d = n(572004),
    f = n(267101),
    _ = n(863663),
    p = n(676651),
    h = n(623488),
    m = n(942833),
    g = n(391181),
    E = n(843880),
    b = n(964793),
    y = n(981631);
function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                O(e, t, n[t]);
            });
    }
    return e;
}
let I = 600;
function T(e) {
    let {
            guildProductListing: t,
            guildId: n,
            location: O,
            shouldShowFullDescriptionButton: T = !0,
            hideRoleTag: S = !1,
            lineClamp: A = 1,
            cardWidth: C,
            cardHeight: N,
            thumbnailHeight: R,
            descriptionTextVariant: P = "text-sm/normal",
            showOpaqueBackground: D = !1,
        } = e,
        w = (0, i.e7)([u.Z], () => u.Z.getGuild(n), [n]),
        x = (0, i.e7)([c.Z], () => {
            var e;
            return c.Z.getRole(n, null != (e = null == t ? void 0 : t.role_id) ? e : y.lds);
        }),
        L = (0, o.U)(t, I),
        M = (0, m.C)(t),
        k = (0, f.SO)(w),
        { shouldHideGuildPurchaseEntryPoints: j } = (0, l.uP)(n),
        U = (0, m.k)(t),
        G = (0, E.Z)({
            guildId: n,
            guildProductListingId: t.id,
            sourceAnalyticsLocations: O,
        });
    if (null == w || j) return null;
    let B = () =>
            (0, b.e)({
                guildId: n,
                guildProductListingId: t.id,
                analyticsLocation: O,
            }),
        Z = () => {
            p.h(w.id, t.id);
        },
        F = () => {
            (0, s.x)({ listing: t });
        },
        V = () => {
            (0, d.JG)((0, _.ar)(n, t.id));
        },
        H = (0, r.jsx)(g.m, {
            product: t,
            guildId: n,
            showEditProduct: k,
            showUnpublishProduct: !1,
            showCopyLink: !0,
            showTestDownload: !1,
            showDeleteProduct: !1,
            showReportProduct: !0,
            onEditProduct: k ? Z : () => {},
            onUnpublishProduct: () => {},
            onDeleteProduct: () => {},
            onReportProduct: F,
            onCopyProductLink: V,
            onTestDownload: () => {},
        });
    return (0, r.jsx)(
        h.Z,
        {
            imageUrl: L,
            name: t.name,
            description: t.description,
            formattedPrice: U,
            role: x,
            ctaComponent: (0, r.jsx)(a.zxk, v({}, G)),
            productType: M,
            shouldShowFullDescriptionButton: T,
            onShowFullDescription: B,
            onTapCard: B,
            actionMenu: H,
            showOpaqueBackground: D,
            hideRoleTag: S,
            lineClamp: A,
            cardWidth: C,
            cardHeight: N,
            thumbnailHeight: R,
            descriptionTextVariant: P,
            isDraft: !t.published,
        },
        t.id,
    );
}
