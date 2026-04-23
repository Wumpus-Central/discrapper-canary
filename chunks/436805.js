l.d(t, { A: () => S });
var n = l(627968),
    i = l(64700),
    s = l(503698),
    a = l.n(s),
    r = l(575593),
    d = l(34188),
    c = l(104510),
    u = l(403581),
    o = l(834730),
    x = l(821701),
    h = l(253292),
    m = l(780898),
    g = l(580630),
    j = l(349439),
    A = l(893458);
let v = (e) => {
        let { displayName: t, product: l } = e,
            i = (0, j.nF)(l);
        return null == i ? null : (0, n.jsx)("img", { src: i, alt: t, className: A._P });
    },
    f = (e) => {
        let { displayName: t, nameplateData: l } = e,
            { staticImageUrl: i } = (0, h.K)(l);
        return null == i ? null : (0, n.jsx)("img", { src: i, alt: t, className: A.M4 });
    },
    E = (e) => {
        let { displayName: t, product: l } = e,
            i = (0, j.GQ)(l);
        return null == i ? null : (0, n.jsx)("img", { src: i, alt: t, className: A._P });
    },
    N = (e) => {
        let { subscriptionPlanId: t } = e;
        if (null == t) return (0, n.jsx)("div", { className: A.T8, children: (0, n.jsx)(d.U, {}) });
        let l = (0, j.il)(t);
        return (0, n.jsx)("div", {
            className: A.T8,
            children: l
                ? (0, n.jsx)(c._, { size: "custom", width: 20, height: 20 })
                : (0, n.jsx)(u.t, { size: "custom", width: 20, height: 20 }),
        });
    },
    p = (e) => {
        let { displayName: t, product: l } = e;
        if (null == l) return (0, n.jsx)("div", { className: A.T8, children: (0, n.jsx)(d.U, {}) });
        switch (l.type) {
            case r.R.AVATAR_DECORATION:
                return (0, n.jsx)(v, { displayName: t, product: l });
            case r.R.NAMEPLATE:
                let i = (0, m.EQ)(l);
                return null != i ? (0, n.jsx)(f, { displayName: t, nameplateData: i }) : null;
            case r.R.PROFILE_EFFECT:
                return (0, n.jsx)(E, { displayName: t, product: l });
            default:
                return (0, n.jsx)("div", { className: A.T8, children: (0, n.jsx)(d.U, {}) });
        }
    },
    T = i.memo((e) => {
        let { skuId: t, subscriptionPlanId: l, total: i, currency: s, className: r } = e,
            { product: d } = (0, x.A)(t),
            { displayName: c, typeName: u, isSubscription: h } = (0, j.GZ)(d ?? null, l);
        if ((null != t && !h && null == d) || null == c) return null;
        let m = (0, g.$g)(i, s);
        return (0, n.jsxs)("div", {
            className: a()(A.kL, r),
            children: [
                h ? (0, n.jsx)(N, { subscriptionPlanId: l }) : (0, n.jsx)(p, { displayName: c, product: d ?? null }),
                (0, n.jsxs)("div", {
                    children: [
                        (0, n.jsx)(o.E, { variant: "text-md/semibold", children: null != u ? `${c} • ${u}` : c }),
                        (0, n.jsx)(o.E, { variant: "text-sm/medium", color: "text-subtle", children: m }),
                    ],
                }),
            ],
        });
    });
T.displayName = "FamilyCenterActivityPurchaseRow";
let S = T;
