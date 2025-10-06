n.d(t, { Z: () => S });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(979554),
    s = n(481060),
    l = n(357352),
    c = n(449217),
    u = n(922347),
    d = n(135483),
    f = n(212161),
    _ = n(768581),
    p = n(937615),
    h = n(474936),
    m = n(345909),
    g = n(388032),
    E = n(673599);
let b = (e) => {
        switch (e) {
            case o.Z.AVATAR_DECORATION:
                return g.intl.string(m.default.obi47u);
            case o.Z.PROFILE_EFFECT:
                return g.intl.string(m.default.RX8BMT);
            case o.Z.NAMEPLATE:
                return g.intl.string(m.default.nNGEHh);
            case o.Z.BUNDLE:
                return g.intl.string(m.default.VS1fKi);
            default:
                return "";
        }
    },
    y = (e) => {
        let { displayName: t, product: n } = e;
        if (0 === n.items.length) return null;
        let i = n.items[0];
        if (!(0, u.M)(i)) return null;
        let a = (0, _.NZ)({
            avatarDecoration: { asset: i.asset },
            size: 40,
            canAnimate: !0,
        });
        return (0, r.jsx)("img", {
            src: a,
            alt: t,
            className: E.avatarDecorationPreview,
        });
    },
    O = (e) => {
        let { displayName: t, product: n } = e;
        if (0 === n.items.length) return null;
        let i = n.items[0];
        if (!(0, d.k)(i)) return null;
        let a = (0, l.b)("collectibles/".concat(i.asset, "static.png"));
        return (0, r.jsx)("img", {
            src: a,
            alt: t,
            className: E.nameplatePreview,
        });
    },
    v = (e) => {
        let { displayName: t, product: n } = e;
        if (0 === n.items.length) return null;
        let i = n.items[0];
        if (!(0, f.H)(i)) return null;
        let a = i.thumbnailPreviewSrc;
        return (0, r.jsx)("img", {
            src: a,
            alt: t,
            className: E.avatarDecorationPreview,
        });
    },
    I = (e) => {
        let { subscriptionPlanId: t } = e;
        if (null == t)
            return (0, r.jsx)("div", {
                className: E.purchasePlaceholder,
                children: (0, r.jsx)(s.EOn, {}),
            });
        let n = h.GP[t],
            i = (null == n ? void 0 : n.skuId) === h.Si.GUILD;
        return (0, r.jsx)("div", {
            className: E.purchasePlaceholder,
            children: i
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
    T = (e) => {
        let { displayName: t, product: n } = e;
        if (null == n)
            return (0, r.jsx)("div", {
                className: E.purchasePlaceholder,
                children: (0, r.jsx)(s.EOn, {}),
            });
        switch (n.type) {
            case o.Z.AVATAR_DECORATION:
                return (0, r.jsx)(y, {
                    displayName: t,
                    product: n,
                });
            case o.Z.NAMEPLATE:
                return (0, r.jsx)(O, {
                    displayName: t,
                    product: n,
                });
            case o.Z.PROFILE_EFFECT:
                return (0, r.jsx)(v, {
                    displayName: t,
                    product: n,
                });
            default:
                return (0, r.jsx)("div", {
                    className: E.purchasePlaceholder,
                    children: (0, r.jsx)(s.EOn, {}),
                });
        }
    },
    S = (e) => {
        let t,
            n,
            { skuId: i, subscriptionPlanId: o, total: l, currency: u, className: d } = e,
            { product: f } = (0, c.Z)(i),
            _ = null != o;
        if (null !== i && !_ && null == f) return null;
        if (null != f) (t = f.name), (n = b(f.type));
        else if (_ && null != o) {
            let e = h.GP[o];
            t = null == e ? void 0 : e.name;
        }
        if (null == t) return null;
        let m = (0, p.T4)(l, u);
        return (0, r.jsxs)("div", {
            className: a()(E.container, d),
            children: [
                _
                    ? (0, r.jsx)(I, { subscriptionPlanId: o })
                    : (0, r.jsx)(T, {
                          displayName: t,
                          product: null != f ? f : null,
                      }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(s.Text, {
                            variant: "text-md/semibold",
                            children: null != n ? "".concat(t, " \u2022 ").concat(n) : t,
                        }),
                        (0, r.jsx)(s.Text, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            children: m,
                        }),
                    ],
                }),
            ],
        });
    };
