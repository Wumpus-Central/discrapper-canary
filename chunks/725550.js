n.d(t, { A: () => b });
var r = n(627968);
n(64700);
var i = n(735438),
    s = n(311907),
    l = n(397927),
    a = n(590180),
    o = n(993408),
    c = n(645178),
    d = n(833336),
    u = n(451909),
    m = n(702211),
    p = n(287070),
    g = n(101058),
    x = n(207803),
    A = n(836602),
    f = n(950191),
    h = n(814390),
    _ = n(773669),
    E = n(606532),
    y = n(287809),
    C = n(405269),
    j = n(927578),
    I = n(985018),
    v = n(645052);
let P = (e) => {
        let { pendingProfileEffectRecord: t, product: n, purchase: d } = e,
            u = (0, s.bG)([y.default], () => y.default.getCurrentUser()),
            p = (0, s.bG)([a.A], () => a.A.getProduct(t?.skuId)),
            g = (0, s.bG)([_.default], () => _.default.locale),
            x = j.Ay.canUseCollectibles(u),
            A = (0, o.gA)(d),
            f = (0, o.G0)(n),
            h = !x && A,
            E = d?.expiresAt != null ? (0, C.Tf)(Date.now(), d.expiresAt) : null,
            P = (0, c.Tk)(d),
            b = (0, c.o7)(p),
            N = (0, m.b)(!f || x),
            S = T(h, f, x, N),
            k = null == d || h;
        return null != t
            ? (0, r.jsx)("div", {
                  className: k ? v.Mf : v.zf,
                  children: (0, r.jsxs)("div", {
                      className: v.RQ,
                      children: [
                          (0, r.jsx)(l.Text, {
                              color: "text-strong",
                              variant: "text-sm/semibold",
                              children: (0, i.isEmpty)(P) ? b : P,
                          }),
                          k
                              ? (0, r.jsx)(l.Text, { color: "text-default", variant: "text-sm/normal", children: S })
                              : (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        null != E &&
                                            (0, r.jsx)(l.Text, {
                                                variant: "text-xxs/normal",
                                                color: "text-muted",
                                                children: I.intl.format(I.t.Io7ozn, { days: E.days.toString() }),
                                            }),
                                        (0, r.jsxs)(l.Text, {
                                            variant: "text-xxs/normal",
                                            color: "text-muted",
                                            children: [
                                                I.intl.format(I.t.gW9R4B, {
                                                    date: d.purchasedAt.toLocaleDateString(g, {
                                                        month: "long",
                                                        year: "numeric",
                                                    }),
                                                }),
                                                null != d.expiresAt &&
                                                    (0, r.jsxs)(r.Fragment, {
                                                        children: [
                                                            (0, r.jsx)("br", {}),
                                                            I.intl.format(I.t.eZSTa5, {
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
                                        A &&
                                            (0, r.jsx)(l.Text, {
                                                variant: "text-xxs/normal",
                                                color: "text-muted",
                                                children: I.intl.string(I.t.nKdAlO),
                                            }),
                                    ],
                                }),
                      ],
                  }),
              })
            : null;
    },
    T = (e, t, n, r) =>
        e
            ? I.intl.string(I.t["1UPza/"])
            : t && n
              ? I.intl.string(I.t.hmyYK8)
              : t && !n
                ? r
                    ? I.intl.string(I.t.melduy)
                    : I.intl.string(I.t.JtAKwp)
                : I.intl.string(I.t.fEGjVQ),
    b = (e) => {
        let { user: t, pendingProfileEffectRecord: n, product: i, purchase: l, guild: a } = e,
            {
                pendingGlobalName: o,
                pendingNickname: c,
                pendingPronouns: m,
                pendingBio: _,
                pendingBanner: y,
                pendingAvatar: C,
                pendingAvatarDecoration: I,
                pendingThemeColors: T,
                pendingAccentColor: b,
            } = (0, s.cf)([d.A, A.A], () => ({
                pendingNickname: void 0,
                pendingGlobalName: void 0,
                pendingAccentColor: void 0,
                ...(null != a ? d.A.getAllPending() : A.A.getPendingChanges()),
            })),
            N = j.Ay.isPremium(t),
            S = j.Ay.canUsePremiumProfileCustomization(t),
            k = (0, f.Ay)(t.id),
            O = !!k?.getPreviewBio(_),
            R = {
                user: t,
                guild: a,
                pendingGlobalName: o,
                pendingNickname: c,
                pendingPronouns: m,
                pendingBio: (0, h.A)() && null != _ ? u.Ay.parse(void 0, _).content : _,
                pendingBanner: y,
                useLargeBanner: !0,
                pendingAvatar: (0, g.V7)({ userId: t.id, image: C }),
                pendingAvatarDecoration: I,
                pendingThemeColors: T,
                pendingAccentColor: b,
                pendingProfileEffect: n ?? null,
                hideFakeActivity: O,
                canUsePremiumCustomization: S,
                onUpsellClick: E.A,
                onBannerChange: x.Iz,
            };
        return (0, r.jsxs)("div", {
            className: v.i1,
            children: [
                (0, r.jsx)(p.A, { ...R, disabledInputs: !0, hideCustomStatus: !0 }),
                !1,
                (0, r.jsx)(P, { pendingProfileEffectRecord: n, product: i, purchase: l, userIsPremium: N }),
            ],
        });
    };
