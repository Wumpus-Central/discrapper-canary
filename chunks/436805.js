n.d(t, {
    A: () => b,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(575593),
    l = n(397927),
    c = n(821701),
    u = n(580630),
    d = n(349439),
    f = n(959349);
let p = (e) => {
        let { displayName: t, product: n } = e,
            i = (0, d.nF)(n);
        return null == i
            ? null
            : (0, r.jsx)("img", {
                  src: i,
                  alt: t,
                  className: f._P,
              });
    },
    _ = (e) => {
        let { displayName: t, product: n } = e,
            i = (0, d.rj)(n);
        return null == i
            ? null
            : (0, r.jsx)("img", {
                  src: i,
                  alt: t,
                  className: f.M4,
              });
    },
    h = (e) => {
        let { displayName: t, product: n } = e,
            i = (0, d.GQ)(n);
        return null == i
            ? null
            : (0, r.jsx)("img", {
                  src: i,
                  alt: t,
                  className: f._P,
              });
    },
    m = (e) => {
        let { subscriptionPlanId: t } = e;
        if (null == t)
            return (0, r.jsx)("div", {
                className: f.T8,
                children: (0, r.jsx)(l.U1X, {}),
            });
        let n = (0, d.il)(t);
        return (0, r.jsx)("div", {
            className: f.T8,
            children: n
                ? (0, r.jsx)(l._Jp, {
                      size: "custom",
                      width: 20,
                      height: 20,
                  })
                : (0, r.jsx)(l.tvc, {
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
                className: f.T8,
                children: (0, r.jsx)(l.U1X, {}),
            });
        switch (n.type) {
            case o.R.AVATAR_DECORATION:
                return (0, r.jsx)(p, {
                    displayName: t,
                    product: n,
                });
            case o.R.NAMEPLATE:
                return (0, r.jsx)(_, {
                    displayName: t,
                    product: n,
                });
            case o.R.PROFILE_EFFECT:
                return (0, r.jsx)(h, {
                    displayName: t,
                    product: n,
                });
            default:
                return (0, r.jsx)("div", {
                    className: f.T8,
                    children: (0, r.jsx)(l.U1X, {}),
                });
        }
    },
    E = i.memo((e) => {
        let { skuId: t, subscriptionPlanId: n, total: i, currency: a, className: o } = e,
            { product: p } = (0, c.A)(t),
            { displayName: _, typeName: h, isSubscription: E } = (0, d.GZ)(null != p ? p : null, n);
        if ((null != t && !E && null == p) || null == _) return null;
        let b = (0, u.$g)(i, a);
        return (0, r.jsxs)("div", {
            className: s()(f.kL, o),
            children: [
                E
                    ? (0, r.jsx)(m, {
                          subscriptionPlanId: n,
                      })
                    : (0, r.jsx)(g, {
                          displayName: _,
                          product: null != p ? p : null,
                      }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(l.Text, {
                            variant: "text-md/semibold",
                            children: null != h ? "".concat(_, " • ").concat(h) : _,
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: "text-sm/medium",
                            color: "text-subtle",
                            children: b,
                        }),
                    ],
                }),
            ],
        });
    });
E.displayName = "FamilyCenterActivityPurchaseRow";
let b = E;
