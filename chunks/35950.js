n.d(t, {
    A: () => f,
}),
    n(896048);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(735438),
    o = n(311907),
    c = n(397927),
    u = n(993408),
    d = n(821701),
    p = n(645178),
    m = n(833336),
    x = n(836602),
    g = n(773669),
    A = n(405269),
    h = n(927578),
    _ = n(359701),
    y = n(550111),
    j = n(985018),
    v = n(514748);
let b = (e) => {
        let { purchase: t, product: n, user: i } = e,
            d = (0, o.bG)([g.default], () => g.default.locale),
            m = (0, p.Tk)(t),
            x = (0, p.o7)(n),
            _ = h.Ay.canUseCollectibles(i),
            y = (0, u.gA)(t),
            b = (0, u.G0)(n),
            f = !_ && y,
            [O, C] = r.useState(null);
        r.useEffect(() => {
            C((null == t ? void 0 : t.expiresAt) != null ? (0, A.Tf)(Date.now(), t.expiresAt) : null);
        }, [null == t ? void 0 : t.expiresAt]);
        let E = null == t || f;
        return (0, l.jsxs)("div", {
            className: s()(v.ip, {
                [v.w6]: E,
            }),
            children: [
                (0, l.jsx)(c.Text, {
                    color: "text-strong",
                    variant: "text-sm/semibold",
                    children: (0, a.isEmpty)(m) ? x : m,
                }),
                E
                    ? (0, l.jsx)(c.Text, {
                          color: "text-default",
                          variant: "text-sm/normal",
                          children: f
                              ? j.intl.string(j.t.nD78oa)
                              : b && _
                                ? j.intl.string(j.t.hmyYK8)
                                : b
                                  ? j.intl.string(j.t.JY1i0u)
                                  : j.intl.string(j.t.fEGjVQ),
                      })
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              null != O &&
                                  (0, l.jsx)(c.Text, {
                                      variant: "text-xxs/normal",
                                      color: "text-muted",
                                      children: j.intl.format(j.t.Io7ozn, {
                                          days: O.days.toString(),
                                      }),
                                  }),
                              (0, l.jsxs)(c.Text, {
                                  variant: "text-xxs/normal",
                                  color: "text-muted",
                                  children: [
                                      j.intl.format(j.t.gW9R4B, {
                                          date: t.purchasedAt.toLocaleDateString(d, {
                                              month: "long",
                                              year: "numeric",
                                          }),
                                      }),
                                      null != t.expiresAt &&
                                          (0, l.jsxs)(l.Fragment, {
                                              children: [
                                                  (0, l.jsx)("br", {}),
                                                  j.intl.format(j.t.eZSTa5, {
                                                      date: t.expiresAt.toLocaleDateString(d, {
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
                                  (0, l.jsx)(c.Text, {
                                      variant: "text-xxs/normal",
                                      color: "text-muted",
                                      children: j.intl.string(j.t.nKdAlO),
                                  }),
                          ],
                      }),
            ],
        });
    },
    f = (e) => {
        var t, n;
        let { user: r, guildId: i, nameplate: a } = e,
            c = (0, o.cf)([x.A, m.A], () => (null == i ? x.A.getPendingChanges() : m.A.getAllPending())),
            { product: p, purchase: g } = (0, d.A)(null == a ? void 0 : a.skuId),
            A = h.Ay.canUseCollectibles(r),
            f = (0, u.gA)(g),
            O = null == g || (!A && f);
        return (0, l.jsxs)("div", {
            className: s()(v.i1, {
                [v.Zj]: null != a && O,
            }),
            children: [
                (0, l.jsx)("div", {
                    className: v.u_,
                    role: "img",
                    "aria-label": j.intl.string(j.t.SZeUdR),
                    children: (0, l.jsxs)("div", {
                        className: v.Xp,
                        "aria-hidden": !0,
                        children: [
                            (0, l.jsx)(_._, {
                                width: 124,
                                opacity: 0.9,
                            }),
                            (0, l.jsx)(_._, {
                                width: 124,
                                opacity: 0.9,
                            }),
                            (0, l.jsx)(
                                y.A,
                                ((t = (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            l = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (l = l.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                }),
                                            )),
                                            l.forEach(function (t) {
                                                var l;
                                                (l = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: l,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[t] = l);
                                            });
                                    }
                                    return e;
                                })({}, c)),
                                (n = n =
                                    {
                                        user: r,
                                        guildId: i,
                                        nameplate: a,
                                        isHighlighted: !0,
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var l = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, l);
                                          }
                                          return n;
                                      })(Object(n)).forEach(function (e) {
                                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                      }),
                                t),
                            ),
                            (0, l.jsx)(_._, {
                                width: 124,
                                opacity: 0.9,
                            }),
                            (0, l.jsx)(_._, {
                                width: 124,
                                opacity: 0.9,
                            }),
                        ],
                    }),
                }),
                null != a &&
                    (0, l.jsx)(b, {
                        purchase: g,
                        product: p,
                        user: r,
                    }),
            ],
        });
    };
