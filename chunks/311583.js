n.d(t, { Z: () => h });
var r = n(54381);
n(473749);
var l = n(481060),
    i = n(100527),
    a = n(381585),
    s = n(994587),
    o = n(429368),
    c = n(680942),
    u = n(786040),
    d = n(58201),
    g = n(694364),
    p = n(215023),
    f = n(388032);
let m = (e) => {
        let {
                product: t,
                selectedVariantIndex: n,
                cardRef: o,
                onClick: d,
                icon: m,
                prioritizedCurrency: h,
                onClickAnalytics: C,
            } = e,
            _ = (0, s.Nd)(),
            b = null == _ ? void 0 : _.tab,
            v = (0, a.sp)(),
            x = (0, g.J)(t, h),
            E = (0, u.J7)(t, i.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, C);
        return null != d || null != m
            ? (0, r.jsx)(l.hU, {
                  variant: "primary",
                  "aria-label": f.intl.string(f.t.SKNnqq),
                  icon: null != m ? m : l.tEF,
                  onClick: (e) => {
                      e.stopPropagation(), null != d ? d(t.skuId) : E(e);
                  },
              })
            : x
              ? (0, r.jsx)(a.k0, {
                    newValue: { pageCategory: b === p.AW.HOME || null == v ? void 0 : v.pageCategory },
                    children: (0, r.jsx)(c.Z, {
                        primary: !0,
                        product: t,
                        selectedVariantIndex: n,
                        returnRef: o,
                        tooltipDelay: 250,
                    }),
                })
              : null;
    },
    h = (e) => {
        let { skuId: t, cardRef: n, onClick: l, icon: i, prioritizedCurrency: a, onClickAnalytics: s } = e,
            c = (0, u.LJ)(t),
            g = (0, o.o)(c);
        if (null == c) return null;
        let p = (0, d.W)(c, g);
        return (0, r.jsx)(m, {
            product: p,
            cardRef: n,
            selectedVariantIndex: g,
            onClick: l,
            icon: i,
            prioritizedCurrency: a,
            onClickAnalytics: s,
        });
    };
