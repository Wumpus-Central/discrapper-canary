n.d(t, { A: () => T });
var r = n(627968);
n(64700);
var i = n(735438),
    s = n(311907),
    l = n(397927),
    a = n(590180),
    o = n(993408),
    c = n(536572),
    d = n(451909),
    u = n(702211),
    m = n(287070),
    p = n(101058),
    g = n(84540),
    x = n(836602),
    f = n(950191),
    A = n(814390),
    h = n(773669),
    _ = n(606532),
    E = n(287809),
    y = n(405269),
    C = n(927578),
    j = n(985018),
    I = n(124446);
let P = (e) => {
        let { pendingProfileEffectRecord: t, product: n, purchase: d } = e,
            m = (0, s.bG)([E.default], () => E.default.getCurrentUser()),
            p = (0, s.bG)([a.A], () => a.A.getProduct(t?.skuId)),
            g = (0, s.bG)([h.default], () => h.default.locale),
            x = C.Ay.canUseCollectibles(m),
            f = (0, o.gA)(d),
            A = (0, o.G0)(n),
            _ = !x && f,
            P = d?.expiresAt != null ? (0, y.Tf)(Date.now(), d.expiresAt) : null,
            T = (0, c.Sw)(d),
            b = (0, c.VG)(p),
            S = (0, u.b)(!A || x),
            N = v(_, A, x, S),
            k = null == d || _;
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
                                                    date: d.purchasedAt.toLocaleDateString(g, {
                                                        month: "long",
                                                        year: "numeric",
                                                    }),
                                                }),
                                                null != d.expiresAt &&
                                                    (0, r.jsxs)(r.Fragment, {
                                                        children: [
                                                            (0, r.jsx)("br", {}),
                                                            j.intl.format(j.t.eZSTa5, {
                                                                date: d.expiresAt.toLocaleDateString(g, {
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
        let { user: t, pendingProfileEffectRecord: n, product: i, purchase: l, guild: a } = e,
            {
                pendingGlobalName: o,
                pendingNickname: c,
                pendingPronouns: u,
                pendingBio: h,
                pendingBanner: E,
                pendingAvatar: y,
                pendingAvatarDecoration: j,
                pendingThemeColors: v,
                pendingAccentColor: T,
            } = (0, s.cf)([x.A], () => x.A.getPendingChanges(a?.id)),
            b = C.Ay.isPremium(t),
            S = C.Ay.canUsePremiumProfileCustomization(t),
            N = (0, f.Ay)(t.id),
            k = !!N?.getPreviewBio(h),
            O = {
                user: t,
                guild: a,
                pendingGlobalName: o,
                pendingNickname: c,
                pendingPronouns: u,
                pendingBio: (0, A.A)() && null != h ? d.Ay.parse(void 0, h).content : h,
                pendingBanner: E,
                useLargeBanner: !0,
                pendingAvatar: (0, p.V7)({ userId: t.id, image: y }),
                pendingAvatarDecoration: j,
                pendingThemeColors: v,
                pendingAccentColor: T,
                pendingProfileEffect: n ?? null,
                hideFakeActivity: k,
                canUsePremiumCustomization: S,
                onUpsellClick: _.A,
                onBannerChange: (e) => (0, g.p)({ banner: e }),
            };
        return (0, r.jsxs)("div", {
            className: I.i1,
            children: [
                (0, r.jsx)(m.A, { ...O, disabledInputs: !0, hideCustomStatus: !0 }),
                !1,
                (0, r.jsx)(P, { pendingProfileEffectRecord: n, product: i, purchase: l, userIsPremium: b }),
            ],
        });
    };
