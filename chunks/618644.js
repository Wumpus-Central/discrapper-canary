n.d(t, { A: () => N });
var r = n(627968);
n(64700);
var s = n(735438),
    i = n(311907),
    l = n(834730),
    a = n(451909),
    o = n(702211),
    c = n(287070),
    d = n(101058),
    u = n(84540),
    m = n(836602),
    p = n(950191),
    f = n(814390),
    g = n(773669),
    h = n(780207),
    x = n(287809),
    A = n(405269),
    _ = n(927578),
    E = n(590180),
    C = n(993408),
    j = n(536572),
    y = n(985018),
    I = n(236263);
let v = (e) => {
        let { pendingProfileEffectRecord: t, product: n, purchase: a } = e,
            c = (0, i.bG)([x.default], () => x.default.getCurrentUser()),
            d = (0, i.bG)([E.A], () => E.A.getProduct(t?.skuId)),
            u = (0, i.bG)([g.default], () => g.default.locale),
            m = _.Ay.canUseCollectibles(c),
            p = (0, C.gA)(a),
            f = (0, C.G0)(n),
            h = !m && p,
            v = a?.expiresAt != null ? (0, A.Tf)(Date.now(), a.expiresAt) : null,
            N = (0, j.Sw)(a),
            b = (0, j.VG)(d),
            T = (0, o.b)(!f || m),
            S = P(h, f, m, T),
            k = null == a || h;
        return null != t
            ? (0, r.jsx)("div", {
                  className: k ? I.Mf : I.zf,
                  children: (0, r.jsxs)("div", {
                      className: I.RQ,
                      children: [
                          (0, r.jsx)(l.E, {
                              color: "text-strong",
                              variant: "text-sm/semibold",
                              children: (0, s.isEmpty)(N) ? b : N,
                          }),
                          k
                              ? (0, r.jsx)(l.E, { color: "text-default", variant: "text-sm/normal", children: S })
                              : (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        null != v &&
                                            (0, r.jsx)(l.E, {
                                                variant: "text-xxs/normal",
                                                color: "text-muted",
                                                children: y.intl.format(y.t.Io7ozn, { days: v.days.toString() }),
                                            }),
                                        (0, r.jsxs)(l.E, {
                                            variant: "text-xxs/normal",
                                            color: "text-muted",
                                            children: [
                                                y.intl.format(y.t.gW9R4B, {
                                                    date: a.purchasedAt.toLocaleDateString(u, {
                                                        month: "long",
                                                        year: "numeric",
                                                    }),
                                                }),
                                                null != a.expiresAt &&
                                                    (0, r.jsxs)(r.Fragment, {
                                                        children: [
                                                            (0, r.jsx)("br", {}),
                                                            y.intl.format(y.t.eZSTa5, {
                                                                date: a.expiresAt.toLocaleDateString(u, {
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
                                        p &&
                                            (0, r.jsx)(l.E, {
                                                variant: "text-xxs/normal",
                                                color: "text-muted",
                                                children: y.intl.string(y.t.nKdAlO),
                                            }),
                                    ],
                                }),
                      ],
                  }),
              })
            : null;
    },
    P = (e, t, n, r) =>
        e
            ? y.intl.string(y.t["1UPza/"])
            : t && n
              ? y.intl.string(y.t.hmyYK8)
              : t && !n
                ? r
                    ? y.intl.string(y.t.melduy)
                    : y.intl.string(y.t.JtAKwp)
                : y.intl.string(y.t.fEGjVQ),
    N = (e) => {
        let { user: t, pendingProfileEffectRecord: n, product: s, purchase: l, guild: o } = e,
            {
                pendingGlobalName: g,
                pendingNickname: x,
                pendingPronouns: A,
                pendingBio: E,
                pendingBanner: C,
                pendingAvatar: j,
                pendingAvatarDecoration: y,
                pendingThemeColors: P,
                pendingAccentColor: N,
            } = (0, i.cf)([m.A], () => m.A.getPendingChanges(o?.id)),
            b = _.Ay.isPremium(t),
            T = _.Ay.canUsePremiumProfileCustomization(t),
            S = (0, p.Ay)(t.id),
            k = !!S?.getPreviewBio(E),
            L = {
                user: t,
                guild: o,
                pendingGlobalName: g,
                pendingNickname: x,
                pendingPronouns: A,
                pendingBio: (0, f.A)() && null != E ? a.Ay.parse(void 0, E).content : E,
                pendingBanner: C,
                useLargeBanner: !0,
                pendingAvatar: (0, d.V7)({ userId: t.id, image: j }),
                pendingAvatarDecoration: y,
                pendingThemeColors: P,
                pendingAccentColor: N,
                pendingProfileEffect: n ?? null,
                hideFakeActivity: k,
                canUsePremiumCustomization: T,
                onUpsellClick: h.A,
                onBannerChange: (e) => (0, u.p)({ banner: e }),
            };
        return (0, r.jsxs)("div", {
            className: I.i1,
            children: [
                (0, r.jsx)(c.A, { ...L, disabledInputs: !0, hideCustomStatus: !0 }),
                !1,
                (0, r.jsx)(v, { pendingProfileEffectRecord: n, product: s, purchase: l, userIsPremium: b }),
            ],
        });
    };
