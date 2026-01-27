n.d(t, {
    i: () => v,
}),
    n(228524);
var r = n(627968);
n(64700);
var i = n(417597),
    l = n(732955),
    a = n(492749),
    s = n(827186),
    o = n(465932),
    c = n(317525),
    u = n(71393),
    d = n(957565),
    p = n(250627),
    m = n(253141),
    f = n(579970),
    g = n(500770),
    h = n(571654),
    _ = n(482711),
    b = n(897518),
    A = n(10979),
    y = n(652215);

function v(e) {
    let {
            guildProductListing: t,
            guildId: n,
            location: v,
            shouldShowFullDescriptionButton: x = !0,
            hideRoleTag: O = !1,
            lineClamp: E = 1,
            cardWidth: j,
            cardHeight: C,
            thumbnailHeight: I,
            descriptionTextVariant: S = "text-sm/normal",
            showOpaqueBackground: T = !1,
        } = e,
        N = (0, i.bG)([u.A], () => u.A.getGuild(n), [n]),
        P = (0, i.bG)([c.A], () => {
            var e;
            return c.A.getRole(n, null != (e = null == t ? void 0 : t.role_id) ? e : y.dJq);
        }),
        w = (0, a.R)(t, 600),
        R = (0, h.z)(t),
        D = (0, p.BB)(N),
        { shouldHideGuildPurchaseEntryPoints: L } = (0, o.MH)(n),
        M = (0, h.X)(t),
        k = (0, b.A)({
            guildId: n,
            guildProductListingId: t.id,
            sourceAnalyticsLocations: v,
        });
    if (null == N || L) return null;
    let U = () =>
            (0, A.M)({
                guildId: n,
                guildProductListingId: t.id,
                analyticsLocation: v,
            }),
        G = (0, r.jsx)(_.i, {
            product: t,
            guildId: n,
            showEditProduct: D,
            showUnpublishProduct: !1,
            showCopyLink: !0,
            showTestDownload: !1,
            showDeleteProduct: !1,
            showReportProduct: !0,
            onEditProduct: D
                ? () => {
                      f.q(N.id, t.id);
                  }
                : () => {},
            onUnpublishProduct: () => {},
            onDeleteProduct: () => {},
            onReportProduct: () => {
                (0, s.F)({
                    listing: t,
                });
            },
            onCopyProductLink: () => {
                (0, d.C)((0, m.KW)(n, t.id));
            },
            onTestDownload: () => {},
        });
    return (0, r.jsx)(
        g.A,
        {
            imageUrl: w,
            name: t.name,
            description: t.description,
            formattedPrice: M,
            role: P,
            ctaComponent: (0, r.jsx)(
                l.$nd,
                (function (e) {
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
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, k),
            ),
            productType: R,
            shouldShowFullDescriptionButton: x,
            onShowFullDescription: U,
            onTapCard: U,
            actionMenu: G,
            showOpaqueBackground: T,
            hideRoleTag: O,
            lineClamp: E,
            cardWidth: j,
            cardHeight: C,
            thumbnailHeight: I,
            descriptionTextVariant: S,
            isDraft: !t.published,
        },
        t.id,
    );
}
