r.d(t, {
    A: () => I,
});
var n = r(627968);
r(64700);
var l = r(735438),
    i = r(311907),
    s = r(397927),
    o = r(590180),
    c = r(993408),
    a = r(645178),
    u = r(833336),
    d = r(451909),
    p = r(702211),
    f = r(287070),
    m = r(101058),
    g = r(207803),
    y = r(836602),
    b = r(950191),
    O = r(814390),
    h = r(773669),
    x = r(606532),
    j = r(287809),
    A = r(405269),
    v = r(927578),
    P = r(985018),
    _ = r(645052);

function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
let C = (e) => {
        let { pendingProfileEffectRecord: t, product: r, purchase: u } = e,
            d = (0, i.bG)([j.default], () => j.default.getCurrentUser()),
            f = (0, i.bG)([o.A], () => o.A.getProduct(null == t ? void 0 : t.skuId)),
            m = (0, i.bG)([h.default], () => h.default.locale),
            g = v.Ay.canUseCollectibles(d),
            y = (0, c.gA)(u),
            b = (0, c.G0)(r),
            O = !g && y,
            x = (null == u ? void 0 : u.expiresAt) != null ? (0, A.Tf)(Date.now(), u.expiresAt) : null,
            E = (0, a.Tk)(u),
            C = (0, a.o7)(f),
            I = (0, p.b)(!b || g),
            S = w(O, b, g, I),
            T = null == u || O;
        return null != t
            ? (0, n.jsx)("div", {
                  className: T ? _.Mf : _.zf,
                  children: (0, n.jsxs)("div", {
                      className: _.RQ,
                      children: [
                          (0, n.jsx)(s.Text, {
                              color: "text-strong",
                              variant: "text-sm/semibold",
                              children: (0, l.isEmpty)(E) ? C : E,
                          }),
                          T
                              ? (0, n.jsx)(s.Text, {
                                    color: "text-default",
                                    variant: "text-sm/normal",
                                    children: S,
                                })
                              : (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        null != x &&
                                            (0, n.jsx)(s.Text, {
                                                variant: "text-xxs/normal",
                                                color: "text-muted",
                                                children: P.intl.format(P.t.Io7ozn, {
                                                    days: x.days.toString(),
                                                }),
                                            }),
                                        (0, n.jsxs)(s.Text, {
                                            variant: "text-xxs/normal",
                                            color: "text-muted",
                                            children: [
                                                P.intl.format(P.t.gW9R4B, {
                                                    date: u.purchasedAt.toLocaleDateString(m, {
                                                        month: "long",
                                                        year: "numeric",
                                                    }),
                                                }),
                                                null != u.expiresAt &&
                                                    (0, n.jsxs)(n.Fragment, {
                                                        children: [
                                                            (0, n.jsx)("br", {}),
                                                            P.intl.format(P.t.eZSTa5, {
                                                                date: u.expiresAt.toLocaleDateString(m, {
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
                                        y &&
                                            (0, n.jsx)(s.Text, {
                                                variant: "text-xxs/normal",
                                                color: "text-muted",
                                                children: P.intl.string(P.t.nKdAlO),
                                            }),
                                    ],
                                }),
                      ],
                  }),
              })
            : null;
    },
    w = (e, t, r, n) =>
        e
            ? P.intl.string(P.t["1UPza/"])
            : t && r
              ? P.intl.string(P.t.hmyYK8)
              : t && !r
                ? n
                    ? P.intl.string(P.t.melduy)
                    : P.intl.string(P.t.JtAKwp)
                : P.intl.string(P.t.fEGjVQ),
    I = (e) => {
        var t, r;
        let { user: l, pendingProfileEffectRecord: s, product: o, purchase: c, guild: a } = e,
            {
                pendingGlobalName: p,
                pendingNickname: h,
                pendingPronouns: j,
                pendingBio: A,
                pendingBanner: P,
                pendingAvatar: w,
                pendingAvatarDecoration: I,
                pendingThemeColors: S,
                pendingAccentColor: T,
            } = (0, i.cf)([u.A, y.A], () =>
                E(
                    {
                        pendingNickname: void 0,
                        pendingGlobalName: void 0,
                        pendingAccentColor: void 0,
                    },
                    null != a ? u.A.getAllPending() : y.A.getPendingChanges(),
                ),
            ),
            k = v.Ay.isPremium(l),
            N = v.Ay.canUsePremiumProfileCustomization(l),
            R = (0, b.Ay)(l.id),
            U = !!(null == R ? void 0 : R.getPreviewBio(A)),
            D = {
                user: l,
                guild: a,
                pendingGlobalName: p,
                pendingNickname: h,
                pendingPronouns: j,
                pendingBio: (0, O.A)() && null != A ? d.Ay.parse(void 0, A).content : A,
                pendingBanner: P,
                useLargeBanner: !0,
                pendingAvatar: (0, m.V7)({
                    userId: l.id,
                    image: w,
                }),
                pendingAvatarDecoration: I,
                pendingThemeColors: S,
                pendingAccentColor: T,
                pendingProfileEffect: null != s ? s : null,
                hideFakeActivity: U,
                canUsePremiumCustomization: N,
                onUpsellClick: x.A,
                onBannerChange: g.Iz,
            };
        return (0, n.jsxs)("div", {
            className: _.i1,
            children: [
                (0, n.jsx)(
                    f.A,
                    ((t = E({}, D)),
                    (r = r =
                        {
                            disabledInputs: !0,
                            hideCustomStatus: !0,
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                        : (function (e, t) {
                              var r = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var n = Object.getOwnPropertySymbols(e);
                                  r.push.apply(r, n);
                              }
                              return r;
                          })(Object(r)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                          }),
                    t),
                ),
                !1,
                (0, n.jsx)(C, {
                    pendingProfileEffectRecord: s,
                    product: o,
                    purchase: c,
                    userIsPremium: k,
                }),
            ],
        });
    };
