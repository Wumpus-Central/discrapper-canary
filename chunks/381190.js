n.d(t, { Z: () => g });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(979554),
    s = n(481060),
    l = n(449217),
    c = n(937615),
    u = n(380979),
    d = n(673599);
let f = (e) => {
        let { displayName: t, product: n } = e,
            i = (0, u.vV)(n);
        return null == i
            ? null
            : (0, r.jsx)("img", {
                  src: i,
                  alt: t,
                  className: d.avatarDecorationPreview,
              });
    },
    _ = (e) => {
        let { displayName: t, product: n } = e,
            i = (0, u.$U)(n);
        return null == i
            ? null
            : (0, r.jsx)("img", {
                  src: i,
                  alt: t,
                  className: d.nameplatePreview,
              });
    },
    p = (e) => {
        let { displayName: t, product: n } = e,
            i = (0, u.yz)(n);
        return null == i
            ? null
            : (0, r.jsx)("img", {
                  src: i,
                  alt: t,
                  className: d.avatarDecorationPreview,
              });
    },
    h = (e) => {
        let { subscriptionPlanId: t } = e;
        if (null == t)
            return (0, r.jsx)("div", {
                className: d.purchasePlaceholder,
                children: (0, r.jsx)(s.EOn, {}),
            });
        let n = (0, u.Km)(t);
        return (0, r.jsx)("div", {
            className: d.purchasePlaceholder,
            children: n
                ? (0, r.jsx)(s.$Eu, {
                      size: "custom",
                      width: 20,
                      height: 20,
                  })
                : (0, r.jsx)(s.SrA, {
                      size: "custom",
                      width: 20,
                      height: 20,
                  }),
        });
    },
    m = (e) => {
        let { displayName: t, product: n } = e;
        if (null == n)
            return (0, r.jsx)("div", {
                className: d.purchasePlaceholder,
                children: (0, r.jsx)(s.EOn, {}),
            });
        switch (n.type) {
            case o.Z.AVATAR_DECORATION:
                return (0, r.jsx)(f, {
                    displayName: t,
                    product: n,
                });
            case o.Z.NAMEPLATE:
                return (0, r.jsx)(_, {
                    displayName: t,
                    product: n,
                });
            case o.Z.PROFILE_EFFECT:
                return (0, r.jsx)(p, {
                    displayName: t,
                    product: n,
                });
            default:
                return (0, r.jsx)("div", {
                    className: d.purchasePlaceholder,
                    children: (0, r.jsx)(s.EOn, {}),
                });
        }
    },
    g = (e) => {
        let { skuId: t, subscriptionPlanId: n, total: i, currency: o, className: f } = e,
            { product: _ } = (0, l.Z)(t),
            { displayName: p, typeName: g, isSubscription: E } = (0, u.HB)(null != _ ? _ : null, n);
        if ((null != t && !E && null == _) || null == p) return null;
        let b = (0, c.T4)(i, o);
        return (0, r.jsxs)("div", {
            className: a()(d.container, f),
            children: [
                E
                    ? (0, r.jsx)(h, { subscriptionPlanId: n })
                    : (0, r.jsx)(m, {
                          displayName: p,
                          product: null != _ ? _ : null,
                      }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(s.Text, {
                            variant: "text-md/semibold",
                            children: null != g ? "".concat(p, " \u2022 ").concat(g) : p,
                        }),
                        (0, r.jsx)(s.Text, {
                            variant: "text-sm/medium",
                            color: "text-secondary",
                            children: b,
                        }),
                    ],
                }),
            ],
        });
    };
