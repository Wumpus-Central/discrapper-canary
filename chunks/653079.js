n.d(t, { Z: () => P }), n(388685);
var l = n(54381),
    r = n(473749),
    i = n(120356),
    a = n.n(i),
    s = n(392711),
    o = n(442837),
    c = n(481060),
    d = n(884697),
    u = n(449217),
    p = n(29121),
    m = n(778825),
    x = n(706454),
    g = n(25990),
    h = n(55935),
    v = n(74538),
    f = n(956748),
    b = n(566697),
    j = n(388032),
    y = n(875292);
let C = (e) => {
        let { purchase: t, product: n, user: i } = e,
            u = (0, o.e7)([x.default], () => x.default.locale),
            m = (0, p.ag)(t),
            g = (0, p.kd)(n),
            f = v.ZP.canUseCollectibles(i),
            b = (0, d.qS)(t),
            C = (0, d.G1)(n),
            P = !f && b,
            [E, w] = r.useState(null);
        r.useEffect(() => {
            w((null == t ? void 0 : t.expiresAt) != null ? (0, h.TD)(Date.now(), t.expiresAt) : null);
        }, [null == t ? void 0 : t.expiresAt]);
        let O = null == t || P;
        return (0, l.jsxs)("div", {
            className: a()(y.previewDescriptionContainer, { [y.previewDescriptionUpsell]: O }),
            children: [
                (0, l.jsx)(c.Text, {
                    color: "text-strong",
                    variant: "text-sm/semibold",
                    children: (0, s.isEmpty)(m) ? g : m,
                }),
                O
                    ? (0, l.jsx)(c.Text, {
                          color: "text-default",
                          variant: "text-sm/normal",
                          children: P
                              ? j.intl.string(j.t.nD78oa)
                              : C && f
                                ? j.intl.string(j.t.hmyYK8)
                                : C
                                  ? j.intl.string(j.t.JY1i0u)
                                  : j.intl.string(j.t.fEGjVQ),
                      })
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              null != E &&
                                  (0, l.jsx)(c.Text, {
                                      variant: "text-xxs/normal",
                                      color: "text-muted",
                                      children: j.intl.format(j.t.Io7ozn, { days: E.days.toString() }),
                                  }),
                              (0, l.jsxs)(c.Text, {
                                  variant: "text-xxs/normal",
                                  color: "text-muted",
                                  children: [
                                      j.intl.format(j.t.gW9R4B, {
                                          date: t.purchasedAt.toLocaleDateString(u, {
                                              month: "long",
                                              year: "numeric",
                                          }),
                                      }),
                                      null != t.expiresAt &&
                                          (0, l.jsxs)(l.Fragment, {
                                              children: [
                                                  (0, l.jsx)("br", {}),
                                                  j.intl.format(j.t.eZSTa5, {
                                                      date: t.expiresAt.toLocaleDateString(u, {
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
                              b &&
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
    P = (e) => {
        var t, n;
        let { user: r, guildId: i, nameplate: s } = e,
            c = (0, o.cj)([g.Z, m.Z], () => (null == i ? g.Z.getAllPending() : m.Z.getAllPending())),
            { product: p, purchase: x } = (0, u.Z)(null == s ? void 0 : s.skuId),
            h = v.ZP.canUseCollectibles(r),
            P = (0, d.qS)(x),
            E = null == x || (!h && P);
        return (0, l.jsxs)("div", {
            className: a()(y.previewContainer, { [y.upsellContainer]: null != s && E }),
            children: [
                (0, l.jsx)("div", {
                    className: y.previewBox,
                    role: "img",
                    "aria-label": j.intl.string(j.t.SZeUdR),
                    children: (0, l.jsxs)("div", {
                        className: y.previewContents,
                        "aria-hidden": !0,
                        children: [
                            (0, l.jsx)(f.G, {
                                width: 124,
                                opacity: 0.9,
                            }),
                            (0, l.jsx)(f.G, {
                                width: 124,
                                opacity: 0.9,
                            }),
                            (0, l.jsx)(
                                b.Z,
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
                                        nameplate: s,
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
                            (0, l.jsx)(f.G, {
                                width: 124,
                                opacity: 0.9,
                            }),
                            (0, l.jsx)(f.G, {
                                width: 124,
                                opacity: 0.9,
                            }),
                        ],
                    }),
                }),
                null != s &&
                    (0, l.jsx)(C, {
                        purchase: x,
                        product: p,
                        user: r,
                    }),
            ],
        });
    };
