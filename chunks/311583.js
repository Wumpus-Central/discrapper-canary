n.d(t, { Z: () => h });
var r = n(54381);
n(473749);
var l = n(481060),
    i = n(100527),
    a = n(381585),
    o = n(994587),
    s = n(429368),
    c = n(680942),
    u = n(786040),
    d = n(58201),
    f = n(694364),
    g = n(215023),
    p = n(388032);
let m = (e) => {
        let {
                product: t,
                selectedVariantIndex: n,
                cardRef: s,
                onClick: d,
                icon: m,
                prioritizedCurrency: h,
                onClickAnalytics: C,
            } = e,
            _ = (0, o.Nd)(),
            b = null == _ ? void 0 : _.tab,
            v = (0, a.sp)(),
            x = (0, f.J)(t, h),
            E = (0, u.J7)(t, i.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, C);
        return null != d || null != m
            ? (0, r.jsx)(l.hU, {
                  variant: "primary",
                  "aria-label": p.intl.string(p.t.SKNnqq),
                  icon: null != m ? m : l.tEF,
                  onClick: (e) => {
                      e.stopPropagation(), null != d ? d(t.skuId) : E(e);
                  },
              })
            : x
              ? (0, r.jsx)(a.k0, {
                    newValue: { pageCategory: b === g.AW.HOME || null == v ? void 0 : v.pageCategory },
                    children: (0, r.jsx)(c.Z, {
                        primary: !0,
                        product: t,
                        selectedVariantIndex: n,
                        returnRef: s,
                        tooltipDelay: 250,
                    }),
                })
              : null;
    },
    h = (e) => {
        let { skuId: t, cardRef: n, onClick: l, icon: i, prioritizedCurrency: a, onClickAnalytics: o } = e,
            c = (0, u.LJ)(t),
            f = (0, s.o)(c);
        if (null == c) return null;
        let g = (0, d.W)(c, f);
        return (0, r.jsx)(m, {
            product: g,
            cardRef: n,
            selectedVariantIndex: f,
            onClick: l,
            icon: i,
            prioritizedCurrency: a,
            onClickAnalytics: o,
        });
    };
