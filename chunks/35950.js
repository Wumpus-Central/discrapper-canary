l.d(t, {
    A: () => _,
}),
    l(896048);
var n = l(627968),
    r = l(64700),
    i = l(503698),
    s = l.n(i),
    a = l(735438),
    c = l(311907),
    o = l(397927),
    u = l(993408),
    d = l(821701),
    m = l(764999),
    p = l(833336),
    x = l(773669),
    g = l(752319),
    b = l(405269),
    A = l(927578),
    h = l(359701),
    f = l(550111),
    j = l(985018),
    y = l(514748);
let v = (e) => {
        let { purchase: t, product: l, user: i } = e,
            d = (0, c.bG)([x.default], () => x.default.locale),
            p = (0, m.Tk)(t),
            g = (0, m.o7)(l),
            h = A.Ay.canUseCollectibles(i),
            f = (0, u.gA)(t),
            v = (0, u.G0)(l),
            _ = !h && f,
            [O, E] = r.useState(null);
        r.useEffect(() => {
            E((null == t ? void 0 : t.expiresAt) != null ? (0, b.Tf)(Date.now(), t.expiresAt) : null);
        }, [null == t ? void 0 : t.expiresAt]);
        let C = null == t || _;
        return (0, n.jsxs)("div", {
            className: s()(y.ip, {
                [y.w6]: C,
            }),
            children: [
                (0, n.jsx)(o.Text, {
                    color: "text-strong",
                    variant: "text-sm/semibold",
                    children: (0, a.isEmpty)(p) ? g : p,
                }),
                C
                    ? (0, n.jsx)(o.Text, {
                          color: "text-default",
                          variant: "text-sm/normal",
                          children: _
                              ? j.intl.string(j.t.nD78oa)
                              : v && h
                                ? j.intl.string(j.t.hmyYK8)
                                : v
                                  ? j.intl.string(j.t.JY1i0u)
                                  : j.intl.string(j.t.fEGjVQ),
                      })
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              null != O &&
                                  (0, n.jsx)(o.Text, {
                                      variant: "text-xxs/normal",
                                      color: "text-muted",
                                      children: j.intl.format(j.t.Io7ozn, {
                                          days: O.days.toString(),
                                      }),
                                  }),
                              (0, n.jsxs)(o.Text, {
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
                                          (0, n.jsxs)(n.Fragment, {
                                              children: [
                                                  (0, n.jsx)("br", {}),
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
                              f &&
                                  (0, n.jsx)(o.Text, {
                                      variant: "text-xxs/normal",
                                      color: "text-muted",
                                      children: j.intl.string(j.t.nKdAlO),
                                  }),
                          ],
                      }),
            ],
        });
    },
    _ = (e) => {
        var t, l;
        let { user: r, guildId: i, nameplate: a } = e,
            o = (0, c.cf)([g.A, p.A], () => (null == i ? g.A.getAllPending() : p.A.getAllPending())),
            { product: m, purchase: x } = (0, d.A)(null == a ? void 0 : a.skuId),
            b = A.Ay.canUseCollectibles(r),
            _ = (0, u.gA)(x),
            O = null == x || (!b && _);
        return (0, n.jsxs)("div", {
            className: s()(y.i1, {
                [y.Zj]: null != a && O,
            }),
            children: [
                (0, n.jsx)("div", {
                    className: y.u_,
                    role: "img",
                    "aria-label": j.intl.string(j.t.SZeUdR),
                    children: (0, n.jsxs)("div", {
                        className: y.Xp,
                        "aria-hidden": !0,
                        children: [
                            (0, n.jsx)(h._, {
                                width: 124,
                                opacity: 0.9,
                            }),
                            (0, n.jsx)(h._, {
                                width: 124,
                                opacity: 0.9,
                            }),
                            (0, n.jsx)(
                                f.A,
                                ((t = (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var l = null != arguments[t] ? arguments[t] : {},
                                            n = Object.keys(l);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (n = n.concat(
                                                Object.getOwnPropertySymbols(l).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(l, e).enumerable;
                                                }),
                                            )),
                                            n.forEach(function (t) {
                                                var n;
                                                (n = l[t]),
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
                                })({}, o)),
                                (l = l =
                                    {
                                        user: r,
                                        guildId: i,
                                        nameplate: a,
                                        isHighlighted: !0,
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l))
                                    : (function (e, t) {
                                          var l = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var n = Object.getOwnPropertySymbols(e);
                                              l.push.apply(l, n);
                                          }
                                          return l;
                                      })(Object(l)).forEach(function (e) {
                                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e));
                                      }),
                                t),
                            ),
                            (0, n.jsx)(h._, {
                                width: 124,
                                opacity: 0.9,
                            }),
                            (0, n.jsx)(h._, {
                                width: 124,
                                opacity: 0.9,
                            }),
                        ],
                    }),
                }),
                null != a &&
                    (0, n.jsx)(v, {
                        purchase: x,
                        product: m,
                        user: r,
                    }),
            ],
        });
    };
