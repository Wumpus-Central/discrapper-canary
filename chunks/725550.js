n.d(t, { A: () => S });
var r = n(627968);
n(64700);
var l = n(735438),
    i = n(311907),
    s = n(397927),
    c = n(590180),
    o = n(993408),
    a = n(764999),
    u = n(833336),
    d = n(451909),
    p = n(702211),
    f = n(287070),
    m = n(101058),
    b = n(207803),
    g = n(950191),
    y = n(814390),
    x = n(773669),
    h = n(606532),
    j = n(752319),
    O = n(287809),
    A = n(405269),
    v = n(927578),
    P = n(985018),
    E = n(645052);
function _(e) {
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
}
let C = (e) => {
        let { pendingProfileEffectRecord: t, product: n, purchase: u } = e,
            d = (0, i.bG)([O.default], () => O.default.getCurrentUser()),
            f = (0, i.bG)([c.A], () => c.A.getProduct(null == t ? void 0 : t.skuId)),
            m = (0, i.bG)([x.default], () => x.default.locale),
            b = v.Ay.canUseCollectibles(d),
            g = (0, o.gA)(u),
            y = (0, o.G0)(n),
            h = !b && g,
            j = (null == u ? void 0 : u.expiresAt) != null ? (0, A.Tf)(Date.now(), u.expiresAt) : null,
            _ = (0, a.Tk)(u),
            C = (0, a.o7)(f),
            S = (0, p.b)(!y || b),
            w = I(h, y, b, S),
            k = null == u || h;
        return null != t
            ? (0, r.jsx)("div", {
                  className: k ? E.Mf : E.zf,
                  children: (0, r.jsxs)("div", {
                      className: E.RQ,
                      children: [
                          (0, r.jsx)(s.Text, {
                              color: "text-strong",
                              variant: "text-sm/semibold",
                              children: (0, l.isEmpty)(_) ? C : _,
                          }),
                          k
                              ? (0, r.jsx)(s.Text, {
                                    color: "text-default",
                                    variant: "text-sm/normal",
                                    children: w,
                                })
                              : (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        null != j &&
                                            (0, r.jsx)(s.Text, {
                                                variant: "text-xxs/normal",
                                                color: "text-muted",
                                                children: P.intl.format(P.t.Io7ozn, { days: j.days.toString() }),
                                            }),
                                        (0, r.jsxs)(s.Text, {
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
                                                    (0, r.jsxs)(r.Fragment, {
                                                        children: [
                                                            (0, r.jsx)("br", {}),
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
                                        g &&
                                            (0, r.jsx)(s.Text, {
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
    I = (e, t, n, r) =>
        e
            ? P.intl.string(P.t["1UPza/"])
            : t && n
              ? P.intl.string(P.t.hmyYK8)
              : t && !n
                ? r
                    ? P.intl.string(P.t.melduy)
                    : P.intl.string(P.t.JtAKwp)
                : P.intl.string(P.t.fEGjVQ),
    S = (e) => {
        var t, n;
        let { user: l, pendingProfileEffectRecord: s, product: c, purchase: o, guild: a } = e,
            {
                pendingGlobalName: p,
                pendingNickname: x,
                pendingPronouns: O,
                pendingBio: A,
                pendingBanner: P,
                pendingAvatar: I,
                pendingAvatarDecoration: S,
                pendingThemeColors: w,
                pendingAccentColor: k,
            } = (0, i.cf)([u.A, j.A], () =>
                _(
                    {
                        pendingNickname: void 0,
                        pendingGlobalName: void 0,
                        pendingAccentColor: void 0,
                    },
                    null != a ? u.A.getAllPending() : j.A.getAllPending(),
                ),
            ),
            N = v.Ay.isPremium(l),
            T = v.Ay.canUsePremiumProfileCustomization(l),
            R = (0, g.Ay)(l.id),
            L = !!(null == R ? void 0 : R.getPreviewBio(A)),
            U = {
                user: l,
                guild: a,
                pendingGlobalName: p,
                pendingNickname: x,
                pendingPronouns: O,
                pendingBio: (0, y.A)() && null != A ? d.Ay.parse(void 0, A).content : A,
                pendingBanner: P,
                useLargeBanner: !0,
                pendingAvatar: (0, m.V7)({
                    userId: l.id,
                    image: I,
                }),
                pendingAvatarDecoration: S,
                pendingThemeColors: w,
                pendingAccentColor: k,
                pendingProfileEffect: null != s ? s : null,
                hideFakeActivity: L,
                canUsePremiumCustomization: T,
                onUpsellClick: h.A,
                onBannerChange: b.Iz,
            };
        return (0, r.jsxs)("div", {
            className: E.i1,
            children: [
                (0, r.jsx)(
                    f.A,
                    ((t = _({}, U)),
                    (n = n =
                        {
                            disabledInputs: !0,
                            hideCustomStatus: !0,
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          }),
                    t),
                ),
                !1,
                (0, r.jsx)(C, {
                    pendingProfileEffectRecord: s,
                    product: c,
                    purchase: o,
                    userIsPremium: N,
                }),
            ],
        });
    };
