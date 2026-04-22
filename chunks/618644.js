"use strict";
r.d(t, { A: () => w });
var i = r(627968);
r(64700);
var n = r(735438),
    s = r(311907),
    a = r(834730),
    l = r(451909),
    c = r(702211),
    o = r(287070),
    d = r(101058),
    u = r(84540),
    p = r(836602),
    _ = r(950191),
    f = r(814390),
    h = r(773669),
    m = r(780207),
    g = r(287809),
    A = r(405269),
    b = r(927578),
    v = r(590180),
    x = r(993408),
    I = r(536572),
    E = r(985018),
    C = r(236263);
let y = (e) => {
        let { pendingProfileEffectRecord: t, product: r, purchase: l } = e,
            o = (0, s.bG)([g.default], () => g.default.getCurrentUser()),
            d = (0, s.bG)([v.A], () => v.A.getProduct(t?.skuId)),
            u = (0, s.bG)([h.default], () => h.default.locale),
            p = b.Ay.canUseCollectibles(o),
            _ = (0, x.gA)(l),
            f = (0, x.G0)(r),
            m = !p && _,
            y = l?.expiresAt != null ? (0, A.Tf)(Date.now(), l.expiresAt) : null,
            w = (0, I.Sw)(l),
            N = (0, I.VG)(d),
            j = (0, c.b)(!f || p),
            S = T(m, f, p, j),
            L = null == l || m;
        return null != t
            ? (0, i.jsx)("div", {
                  className: L ? C.Mf : C.zf,
                  children: (0, i.jsxs)("div", {
                      className: C.RQ,
                      children: [
                          (0, i.jsx)(a.E, {
                              color: "text-strong",
                              variant: "text-sm/semibold",
                              children: (0, n.isEmpty)(w) ? N : w,
                          }),
                          L
                              ? (0, i.jsx)(a.E, { color: "text-default", variant: "text-sm/normal", children: S })
                              : (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        null != y &&
                                            (0, i.jsx)(a.E, {
                                                variant: "text-xxs/normal",
                                                color: "text-muted",
                                                children: E.intl.format(E.t.Io7ozn, { days: y.days.toString() }),
                                            }),
                                        (0, i.jsxs)(a.E, {
                                            variant: "text-xxs/normal",
                                            color: "text-muted",
                                            children: [
                                                E.intl.format(E.t.gW9R4B, {
                                                    date: l.purchasedAt.toLocaleDateString(u, {
                                                        month: "long",
                                                        year: "numeric",
                                                    }),
                                                }),
                                                null != l.expiresAt &&
                                                    (0, i.jsxs)(i.Fragment, {
                                                        children: [
                                                            (0, i.jsx)("br", {}),
                                                            E.intl.format(E.t.eZSTa5, {
                                                                date: l.expiresAt.toLocaleDateString(u, {
                                                                    minute: "numeric",
                                                                    hour: "numeric",
                                                                    day: "numeric",
                                                                    month: "long",
                                                                    year: "numeric",
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                            ],
                                        }),
                                        _ &&
                                            (0, i.jsx)(a.E, {
                                                variant: "text-xxs/normal",
                                                color: "text-muted",
                                                children: E.intl.string(E.t.nKdAlO),
                                            }),
                                    ],
                                }),
                      ],
                  }),
              })
            : null;
    },
    T = (e, t, r, i) =>
        e
            ? E.intl.string(E.t["1UPza/"])
            : t && r
              ? E.intl.string(E.t.hmyYK8)
              : t && !r
                ? i
                    ? E.intl.string(E.t.melduy)
                    : E.intl.string(E.t.JtAKwp)
                : E.intl.string(E.t.fEGjVQ),
    w = (e) => {
        let { user: t, pendingProfileEffectRecord: r, product: n, purchase: a, guild: c } = e,
            {
                pendingGlobalName: h,
                pendingNickname: g,
                pendingPronouns: A,
                pendingBio: v,
                pendingBanner: x,
                pendingAvatar: I,
                pendingAvatarDecoration: E,
                pendingThemeColors: T,
                pendingAccentColor: w,
            } = (0, s.cf)([p.A], () => p.A.getPendingChanges(c?.id)),
            N = b.Ay.isPremium(t),
            j = b.Ay.canUsePremiumProfileCustomization(t),
            S = (0, _.Ay)(t.id),
            L = !!S?.getPreviewBio(v),
            R = {
                user: t,
                guild: c,
                pendingGlobalName: h,
                pendingNickname: g,
                pendingPronouns: A,
                pendingBio: (0, f.A)() && null != v ? l.Ay.parse(void 0, v).content : v,
                pendingBanner: x,
                useLargeBanner: !0,
                pendingAvatar: (0, d.V7)({ userId: t.id, image: I }),
                pendingAvatarDecoration: E,
                pendingThemeColors: T,
                pendingAccentColor: w,
                pendingProfileEffect: r ?? null,
                hideFakeActivity: L,
                canUsePremiumCustomization: j,
                onUpsellClick: m.A,
                onBannerChange: (e) => (0, u.p)({ banner: e }),
            };
        return (0, i.jsxs)("div", {
            className: C.i1,
            children: [
                (0, i.jsx)(o.A, { ...R, disabledInputs: !0, hideCustomStatus: !0 }),
                !1,
                (0, i.jsx)(y, { pendingProfileEffectRecord: r, product: n, purchase: a, userIsPremium: N }),
            ],
        });
    };
