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
    p = n(950191),
    f = n(814390),
    g = n(773669),
    x = n(780207),
    A = n(287809),
    h = n(405269),
    _ = n(927578),
    E = n(590180),
    y = n(993408),
    C = n(536572),
    j = n(985018),
    I = n(996336);
let P = (e) => {
        let { pendingProfileEffectRecord: t, product: n, purchase: a } = e,
            o = (0, s.bG)([A.default], () => A.default.getCurrentUser()),
            d = (0, s.bG)([E.A], () => E.A.getProduct(t?.skuId)),
            u = (0, s.bG)([g.default], () => g.default.locale),
            m = _.Ay.canUseCollectibles(o),
            p = (0, y.gA)(a),
            f = (0, y.G0)(n),
            x = !m && p,
            P = a?.expiresAt != null ? (0, h.Tf)(Date.now(), a.expiresAt) : null,
            T = (0, C.Sw)(a),
            S = (0, C.VG)(d),
            b = (0, c.b)(!f || m),
            N = v(x, f, m, b),
            k = null == a || x;
        return null != t
            ? (0, r.jsx)("div", {
                  className: k ? I.Mf : I.zf,
                  children: (0, r.jsxs)("div", {
                      className: I.RQ,
                      children: [
                          (0, r.jsx)(l.Text, {
                              color: "text-strong",
                              variant: "text-sm/semibold",
                              children: (0, i.isEmpty)(T) ? S : T,
                          }),
                          k
                              ? (0, r.jsx)(l.Text, { color: "text-default", variant: "text-sm/normal", children: N })
                              : (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        null != P &&
                                            (0, r.jsx)(l.Text, {
                                                variant: "text-xxs/normal",
                                                color: "text-muted",
                                                children: j.intl.format(j.t.Io7ozn, { days: P.days.toString() }),
                                            }),
                                        (0, r.jsxs)(l.Text, {
                                            variant: "text-xxs/normal",
                                            color: "text-muted",
                                            children: [
                                                j.intl.format(j.t.gW9R4B, {
                                                    date: a.purchasedAt.toLocaleDateString(u, {
                                                        month: "long",
                                                        year: "numeric",
                                                    }),
                                                }),
                                                null != a.expiresAt &&
                                                    (0, r.jsxs)(r.Fragment, {
                                                        children: [
                                                            (0, r.jsx)("br", {}),
                                                            j.intl.format(j.t.eZSTa5, {
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
                                            (0, r.jsx)(l.Text, {
                                                variant: "text-xxs/normal",
                                                color: "text-muted",
                                                children: j.intl.string(j.t.nKdAlO),
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
            ? j.intl.string(j.t["1UPza/"])
            : t && n
              ? j.intl.string(j.t.hmyYK8)
              : t && !n
                ? r
                    ? j.intl.string(j.t.melduy)
                    : j.intl.string(j.t.JtAKwp)
                : j.intl.string(j.t.fEGjVQ),
    T = (e) => {
        let { user: t, pendingProfileEffectRecord: n, product: i, purchase: l, guild: c } = e,
            {
                pendingGlobalName: g,
                pendingNickname: A,
                pendingPronouns: h,
                pendingBio: E,
                pendingBanner: y,
                pendingAvatar: C,
                pendingAvatarDecoration: j,
                pendingThemeColors: v,
                pendingAccentColor: T,
            } = (0, s.cf)([m.A], () => m.A.getPendingChanges(c?.id)),
            S = _.Ay.isPremium(t),
            b = _.Ay.canUsePremiumProfileCustomization(t),
            N = (0, p.Ay)(t.id),
            k = !!N?.getPreviewBio(E),
            O = {
                user: t,
                guild: c,
                pendingGlobalName: g,
                pendingNickname: A,
                pendingPronouns: h,
                pendingBio: (0, f.A)() && null != E ? a.Ay.parse(void 0, E).content : E,
                pendingBanner: y,
                useLargeBanner: !0,
                pendingAvatar: (0, d.V7)({ userId: t.id, image: C }),
                pendingAvatarDecoration: j,
                pendingThemeColors: v,
                pendingAccentColor: T,
                pendingProfileEffect: n ?? null,
                hideFakeActivity: k,
                canUsePremiumCustomization: b,
                onUpsellClick: x.A,
                onBannerChange: (e) => (0, u.p)({ banner: e }),
            };
        return (0, r.jsxs)("div", {
            className: I.i1,
            children: [
                (0, r.jsx)(o.A, { ...O, disabledInputs: !0, hideCustomStatus: !0 }),
                !1,
                (0, r.jsx)(P, { pendingProfileEffectRecord: n, product: i, purchase: l, userIsPremium: S }),
            ],
        });
    };
