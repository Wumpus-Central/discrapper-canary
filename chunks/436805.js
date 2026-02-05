n.d(t, { A: () => C });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(575593),
    o = n(397927),
    c = n(821701),
    d = n(580630),
    u = n(349439),
    _ = n(959349);
let m = (e) => {
        let { displayName: t, product: n } = e,
            s = (0, u.nF)(n);
        return null == s ? null : (0, i.jsx)("img", { src: s, alt: t, className: _._P });
    },
    A = (e) => {
        let { displayName: t, product: n } = e,
            s = (0, u.rj)(n);
        return null == s ? null : (0, i.jsx)("img", { src: s, alt: t, className: _.M4 });
    },
    g = (e) => {
        let { displayName: t, product: n } = e,
            s = (0, u.GQ)(n);
        return null == s ? null : (0, i.jsx)("img", { src: s, alt: t, className: _._P });
    },
    E = (e) => {
        let { subscriptionPlanId: t } = e;
        if (null == t) return (0, i.jsx)("div", { className: _.T8, children: (0, i.jsx)(o.U1X, {}) });
        let n = (0, u.il)(t);
        return (0, i.jsx)("div", {
            className: _.T8,
            children: n
                ? (0, i.jsx)(o._Jp, { size: "custom", width: 20, height: 20 })
                : (0, i.jsx)(o.tvc, { size: "custom", width: 20, height: 20 }),
        });
    },
    h = (e) => {
        let { displayName: t, product: n } = e;
        if (null == n) return (0, i.jsx)("div", { className: _.T8, children: (0, i.jsx)(o.U1X, {}) });
        switch (n.type) {
            case l.R.AVATAR_DECORATION:
                return (0, i.jsx)(m, { displayName: t, product: n });
            case l.R.NAMEPLATE:
                return (0, i.jsx)(A, { displayName: t, product: n });
            case l.R.PROFILE_EFFECT:
                return (0, i.jsx)(g, { displayName: t, product: n });
            default:
                return (0, i.jsx)("div", { className: _.T8, children: (0, i.jsx)(o.U1X, {}) });
        }
    },
    p = s.memo((e) => {
        let { skuId: t, subscriptionPlanId: n, total: s, currency: r, className: l } = e,
            { product: m } = (0, c.A)(t),
            { displayName: A, typeName: g, isSubscription: p } = (0, u.GZ)(m ?? null, n);
        if ((null != t && !p && null == m) || null == A) return null;
        let C = (0, d.$g)(s, r);
        return (0, i.jsxs)("div", {
            className: a()(_.kL, l),
            children: [
                p ? (0, i.jsx)(E, { subscriptionPlanId: n }) : (0, i.jsx)(h, { displayName: A, product: m ?? null }),
                (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(o.Text, { variant: "text-md/semibold", children: null != g ? `${A} • ${g}` : A }),
                        (0, i.jsx)(o.Text, { variant: "text-sm/medium", color: "text-subtle", children: C }),
                    ],
                }),
            ],
        });
    });
p.displayName = "FamilyCenterActivityPurchaseRow";
let C = p;
