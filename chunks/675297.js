n.d(t, { H: () => I }), n(953529);
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
    p = n(863663),
    _ = n(676651),
    m = n(623488),
    h = n(942833),
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
let S = 600;
function I(e) {
    let {
            guildProductListing: t,
            guildId: n,
            location: O,
            shouldShowFullDescriptionButton: I = !0,
            hideRoleTag: T = !1,
            lineClamp: C = 1,
            cardWidth: A,
            cardHeight: N,
            thumbnailHeight: P,
            descriptionTextVariant: R = "text-sm/normal",
            showOpaqueBackground: D = !1,
        } = e,
        w = (0, i.e7)([u.Z], () => u.Z.getGuild(n), [n]),
        x = (0, i.e7)([c.Z], () => {
            var e;
            return c.Z.getRole(n, null != (e = null == t ? void 0 : t.role_id) ? e : y.lds);
        }),
        L = (0, o.U)(t, S),
        j = (0, h.C)(t),
        M = (0, f.SO)(w),
        { shouldHideGuildPurchaseEntryPoints: k } = (0, l.uP)(n),
        U = (0, h.k)(t),
        G = (0, E.Z)({
            guildId: n,
            guildProductListingId: t.id,
            sourceAnalyticsLocations: O,
        });
    if (null == w || k) return null;
    let Z = () =>
            (0, b.e)({
                guildId: n,
                guildProductListingId: t.id,
                analyticsLocation: O,
            }),
        B = () => {
            _.h(w.id, t.id);
        },
        F = () => {
            (0, s.x)({ listing: t });
        },
        V = () => {
            (0, d.JG)((0, p.ar)(n, t.id));
        },
        H = (0, r.jsx)(g.m, {
            product: t,
            guildId: n,
            showEditProduct: M,
            showUnpublishProduct: !1,
            showCopyLink: !0,
            showTestDownload: !1,
            showDeleteProduct: !1,
            showReportProduct: !0,
            onEditProduct: M ? B : () => {},
            onUnpublishProduct: () => {},
            onDeleteProduct: () => {},
            onReportProduct: F,
            onCopyProductLink: V,
            onTestDownload: () => {},
        });
    return (0, r.jsx)(
        m.Z,
        {
            imageUrl: L,
            name: t.name,
            description: t.description,
            formattedPrice: U,
            role: x,
            ctaComponent: (0, r.jsx)(a.zxk, v({}, G)),
            productType: j,
            shouldShowFullDescriptionButton: I,
            onShowFullDescription: Z,
            onTapCard: Z,
            actionMenu: H,
            showOpaqueBackground: D,
            hideRoleTag: T,
            lineClamp: C,
            cardWidth: A,
            cardHeight: N,
            thumbnailHeight: P,
            descriptionTextVariant: R,
            isDraft: !t.published,
        },
        t.id,
    );
}
