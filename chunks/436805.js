n.d(t, { A: () => T });
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(575593),
    o = n(397927),
    c = n(821701),
    d = n(302086),
    u = n(369496),
    _ = n(580630),
    m = n(349439),
    A = n(22907);
let g = (e) => {
        let { displayName: t, product: n } = e,
            s = (0, m.nF)(n);
        return null == s ? null : (0, i.jsx)("img", { src: s, alt: t, className: A._P });
    },
    h = (e) => {
        let { displayName: t, nameplateData: n } = e,
            { staticImageUrl: s } = (0, d.K)(n);
        return null == s ? null : (0, i.jsx)("img", { src: s, alt: t, className: A.M4 });
    },
    x = (e) => {
        let { displayName: t, product: n } = e,
            s = (0, m.GQ)(n);
        return null == s ? null : (0, i.jsx)("img", { src: s, alt: t, className: A._P });
    },
    p = (e) => {
        let { subscriptionPlanId: t } = e;
        if (null == t) return (0, i.jsx)("div", { className: A.T8, children: (0, i.jsx)(o.U1X, {}) });
        let n = (0, m.il)(t);
        return (0, i.jsx)("div", {
            className: A.T8,
            children: n
                ? (0, i.jsx)(o._Jp, { size: "custom", width: 20, height: 20 })
                : (0, i.jsx)(o.tvc, { size: "custom", width: 20, height: 20 }),
        });
    },
    E = (e) => {
        let { displayName: t, product: n } = e;
        if (null == n) return (0, i.jsx)("div", { className: A.T8, children: (0, i.jsx)(o.U1X, {}) });
        switch (n.type) {
            case r.R.AVATAR_DECORATION:
                return (0, i.jsx)(g, { displayName: t, product: n });
            case r.R.NAMEPLATE:
                let s = (0, u.EQ)(n);
                return null != s ? (0, i.jsx)(h, { displayName: t, nameplateData: s }) : null;
            case r.R.PROFILE_EFFECT:
                return (0, i.jsx)(x, { displayName: t, product: n });
            default:
                return (0, i.jsx)("div", { className: A.T8, children: (0, i.jsx)(o.U1X, {}) });
        }
    },
    C = s.memo((e) => {
        let { skuId: t, subscriptionPlanId: n, total: s, currency: a, className: r } = e,
            { product: d } = (0, c.A)(t),
            { displayName: u, typeName: g, isSubscription: h } = (0, m.GZ)(d ?? null, n);
        if ((null != t && !h && null == d) || null == u) return null;
        let x = (0, _.$g)(s, a);
        return (0, i.jsxs)("div", {
            className: l()(A.kL, r),
            children: [
                h ? (0, i.jsx)(p, { subscriptionPlanId: n }) : (0, i.jsx)(E, { displayName: u, product: d ?? null }),
                (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(o.Text, { variant: "text-md/semibold", children: null != g ? `${u} • ${g}` : u }),
                        (0, i.jsx)(o.Text, { variant: "text-sm/medium", color: "text-subtle", children: x }),
                    ],
                }),
            ],
        });
    });
C.displayName = "FamilyCenterActivityPurchaseRow";
let T = C;
