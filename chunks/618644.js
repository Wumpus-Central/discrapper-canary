n.d(t, { A: () => T });
var r = n(627968);
n(64700);
var i = n(735438),
    s = n(311907),
    l = n(397927),
    a = n(451909),
    c = n(702211),
    o = n(287070),
    d = n(101058),
    u = n(84540),
    m = n(836602),
    f = n(950191),
    p = n(814390),
    x = n(773669),
    g = n(780207),
    A = n(287809),
    h = n(405269),
    _ = n(927578),
    E = n(590180),
    C = n(993408),
    j = n(536572),
    y = n(985018),
    I = n(60983);
let P = (e) => {
        let { pendingProfileEffectRecord: t, product: n, purchase: a } = e,
            o = (0, s.bG)([A.default], () => A.default.getCurrentUser()),
            d = (0, s.bG)([E.A], () => E.A.getProduct(t?.skuId)),
            u = (0, s.bG)([x.default], () => x.default.locale),
            m = _.Ay.canUseCollectibles(o),
            f = (0, C.gA)(a),
            p = (0, C.G0)(n),
            g = !m && f,
            P = a?.expiresAt != null ? (0, h.Tf)(Date.now(), a.expiresAt) : null,
            T = (0, j.Sw)(a),
            b = (0, j.VG)(d),
            N = (0, c.b)(!p || m),
            S = v(g, p, m, N),
            k = null == a || g;
        return null != t
            ? (0, r.jsx)("div", {
                  className: k ? I.Mf : I.zf,
                  children: (0, r.jsxs)("div", {
                      className: I.RQ,
                      children: [
                          (0, r.jsx)(l.Text, {
                              color: "text-strong",
                              variant: "text-sm/semibold",
                              children: (0, i.isEmpty)(T) ? b : T,
                          }),
                          k
                              ? (0, r.jsx)(l.Text, { color: "text-default", variant: "text-sm/normal", children: S })
                              : (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        null != P &&
                                            (0, r.jsx)(l.Text, {
                                                variant: "text-xxs/normal",
                                                color: "text-muted",
                                                children: y.intl.format(y.t.Io7ozn, { days: P.days.toString() }),
                                            }),
                                        (0, r.jsxs)(l.Text, {
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
                                        f &&
                                            (0, r.jsx)(l.Text, {
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
    v = (e, t, n, r) =>
        e
            ? y.intl.string(y.t["1UPza/"])
            : t && n
              ? y.intl.string(y.t.hmyYK8)
              : t && !n
                ? r
                    ? y.intl.string(y.t.melduy)
                    : y.intl.string(y.t.JtAKwp)
                : y.intl.string(y.t.fEGjVQ),
    T = (e) => {
        let { user: t, pendingProfileEffectRecord: n, product: i, purchase: l, guild: c } = e,
            {
                pendingGlobalName: x,
                pendingNickname: A,
                pendingPronouns: h,
                pendingBio: E,
                pendingBanner: C,
                pendingAvatar: j,
                pendingAvatarDecoration: y,
                pendingThemeColors: v,
                pendingAccentColor: T,
            } = (0, s.cf)([m.A], () => m.A.getPendingChanges(c?.id)),
            b = _.Ay.isPremium(t),
            N = _.Ay.canUsePremiumProfileCustomization(t),
            S = (0, f.Ay)(t.id),
            k = !!S?.getPreviewBio(E),
            O = {
                user: t,
                guild: c,
                pendingGlobalName: x,
                pendingNickname: A,
                pendingPronouns: h,
                pendingBio: (0, p.A)() && null != E ? a.Ay.parse(void 0, E).content : E,
                pendingBanner: C,
                useLargeBanner: !0,
                pendingAvatar: (0, d.V7)({ userId: t.id, image: j }),
                pendingAvatarDecoration: y,
                pendingThemeColors: v,
                pendingAccentColor: T,
                pendingProfileEffect: n ?? null,
                hideFakeActivity: k,
                canUsePremiumCustomization: N,
                onUpsellClick: g.A,
                onBannerChange: (e) => (0, u.p)({ banner: e }),
            };
        return (0, r.jsxs)("div", {
            className: I.i1,
            children: [
                (0, r.jsx)(o.A, { ...O, disabledInputs: !0, hideCustomStatus: !0 }),
                !1,
                (0, r.jsx)(P, { pendingProfileEffectRecord: n, product: i, purchase: l, userIsPremium: b }),
            ],
        });
    };
