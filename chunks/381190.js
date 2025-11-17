n.d(t, { Z: () => b });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(979554),
    l = n(481060),
    c = n(449217),
    u = n(937615),
    d = n(380979),
    f = n(673599);
let _ = (e) => {
        let { displayName: t, product: n } = e,
            i = (0, d.vV)(n);
        return null == i
            ? null
            : (0, r.jsx)("img", {
                  src: i,
                  alt: t,
                  className: f.avatarDecorationPreview,
              });
    },
    p = (e) => {
        let { displayName: t, product: n } = e,
            i = (0, d.$U)(n);
        return null == i
            ? null
            : (0, r.jsx)("img", {
                  src: i,
                  alt: t,
                  className: f.nameplatePreview,
              });
    },
    h = (e) => {
        let { displayName: t, product: n } = e,
            i = (0, d.yz)(n);
        return null == i
            ? null
            : (0, r.jsx)("img", {
                  src: i,
                  alt: t,
                  className: f.avatarDecorationPreview,
              });
    },
    m = (e) => {
        let { subscriptionPlanId: t } = e;
        if (null == t)
            return (0, r.jsx)("div", {
                className: f.purchasePlaceholder,
                children: (0, r.jsx)(l.EOn, {}),
            });
        let n = (0, d.Km)(t);
        return (0, r.jsx)("div", {
            className: f.purchasePlaceholder,
            children: n
                ? (0, r.jsx)(l.Ucv, {
                      size: "custom",
                      width: 20,
                      height: 20,
                  })
                : (0, r.jsx)(l.SrA, {
                      size: "custom",
                      width: 20,
                      height: 20,
                  }),
        });
    },
    g = (e) => {
        let { displayName: t, product: n } = e;
        if (null == n)
            return (0, r.jsx)("div", {
                className: f.purchasePlaceholder,
                children: (0, r.jsx)(l.EOn, {}),
            });
        switch (n.type) {
            case s.Z.AVATAR_DECORATION:
                return (0, r.jsx)(_, {
                    displayName: t,
                    product: n,
                });
            case s.Z.NAMEPLATE:
                return (0, r.jsx)(p, {
                    displayName: t,
                    product: n,
                });
            case s.Z.PROFILE_EFFECT:
                return (0, r.jsx)(h, {
                    displayName: t,
                    product: n,
                });
            default:
                return (0, r.jsx)("div", {
                    className: f.purchasePlaceholder,
                    children: (0, r.jsx)(l.EOn, {}),
                });
        }
    },
    E = i.memo((e) => {
        let { skuId: t, subscriptionPlanId: n, total: i, currency: a, className: s } = e,
            { product: _ } = (0, c.Z)(t),
            { displayName: p, typeName: h, isSubscription: E } = (0, d.HB)(null != _ ? _ : null, n);
        if ((null != t && !E && null == _) || null == p) return null;
        let b = (0, u.T4)(i, a);
        return (0, r.jsxs)("div", {
            className: o()(f.container, s),
            children: [
                E
                    ? (0, r.jsx)(m, { subscriptionPlanId: n })
                    : (0, r.jsx)(g, {
                          displayName: p,
                          product: null != _ ? _ : null,
                      }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(l.Text, {
                            variant: "text-md/semibold",
                            children: null != h ? "".concat(p, " \u2022 ").concat(h) : p,
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: "text-sm/medium",
                            color: "text-secondary",
                            children: b,
                        }),
                    ],
                }),
            ],
        });
    });
E.displayName = "FamilyCenterActivityPurchaseRow";
let b = E;
