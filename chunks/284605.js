n.d(t, { i: () => S }), n(228524);
var r = n(627968);
n(64700);
var i = n(417597),
    a = n(732955),
    s = n(492749),
    o = n(827186),
    l = n(465932),
    c = n(317525),
    u = n(71393),
    d = n(957565),
    f = n(250627),
    p = n(253141),
    _ = n(579970),
    h = n(500770),
    m = n(571654),
    g = n(482711),
    E = n(897518),
    b = n(10979),
    y = n(652215);
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
function A(e) {
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
let v = 600;
function S(e) {
    let {
            guildProductListing: t,
            guildId: n,
            location: O,
            shouldShowFullDescriptionButton: S = !0,
            hideRoleTag: I = !1,
            lineClamp: T = 1,
            cardWidth: C,
            cardHeight: N,
            thumbnailHeight: R,
            descriptionTextVariant: w = "text-sm/normal",
            showOpaqueBackground: P = !1,
        } = e,
        D = (0, i.bG)([u.A], () => u.A.getGuild(n), [n]),
        x = (0, i.bG)([c.A], () => {
            var e;
            return c.A.getRole(n, null != (e = null == t ? void 0 : t.role_id) ? e : y.dJq);
        }),
        L = (0, s.R)(t, v),
        j = (0, m.z)(t),
        M = (0, f.BB)(D),
        { shouldHideGuildPurchaseEntryPoints: k } = (0, l.MH)(n),
        U = (0, m.X)(t),
        G = (0, E.A)({
            guildId: n,
            guildProductListingId: t.id,
            sourceAnalyticsLocations: O,
        });
    if (null == D || k) return null;
    let V = () =>
            (0, b.M)({
                guildId: n,
                guildProductListingId: t.id,
                analyticsLocation: O,
            }),
        F = () => {
            _.q(D.id, t.id);
        },
        B = () => {
            (0, o.F)({ listing: t });
        },
        H = () => {
            (0, d.C)((0, p.KW)(n, t.id));
        },
        Y = (0, r.jsx)(g.i, {
            product: t,
            guildId: n,
            showEditProduct: M,
            showUnpublishProduct: !1,
            showCopyLink: !0,
            showTestDownload: !1,
            showDeleteProduct: !1,
            showReportProduct: !0,
            onEditProduct: M ? F : () => {},
            onUnpublishProduct: () => {},
            onDeleteProduct: () => {},
            onReportProduct: B,
            onCopyProductLink: H,
            onTestDownload: () => {},
        });
    return (0, r.jsx)(
        h.A,
        {
            imageUrl: L,
            name: t.name,
            description: t.description,
            formattedPrice: U,
            role: x,
            ctaComponent: (0, r.jsx)(a.$nd, A({}, G)),
            productType: j,
            shouldShowFullDescriptionButton: S,
            onShowFullDescription: V,
            onTapCard: V,
            actionMenu: Y,
            showOpaqueBackground: P,
            hideRoleTag: I,
            lineClamp: T,
            cardWidth: C,
            cardHeight: N,
            thumbnailHeight: R,
            descriptionTextVariant: w,
            isDraft: !t.published,
        },
        t.id,
    );
}
