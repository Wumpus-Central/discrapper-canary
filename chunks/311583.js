n.d(t, { Z: () => C });
var r = n(951288);
n(647438);
var l = n(481060),
    i = n(100527),
    a = n(381585),
    o = n(994587),
    s = n(429368),
    c = n(680942),
    u = n(786040),
    d = n(58201),
    g = n(694364),
    p = n(215023),
    f = n(388032);
let h = (e) => {
        let {
                product: t,
                selectedVariantIndex: n,
                cardRef: s,
                onClick: d,
                icon: h,
                prioritizedCurrency: C,
                onClickAnalytics: m,
            } = e,
            _ = (0, o.Nd)(),
            b = null == _ ? void 0 : _.tab,
            v = (0, a.sp)(),
            x = (0, g.J)(t, C),
            E = (0, u.J7)(t, i.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, m);
        return null != d || null != h
            ? (0, r.jsx)(l.hU, {
                  variant: "primary",
                  "aria-label": f.intl.string(f.t.SKNnqq),
                  icon: null != h ? h : l.tEF,
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
                        returnRef: s,
                        tooltipDelay: 250,
                    }),
                })
              : null;
    },
    C = (e) => {
        let { skuId: t, cardRef: n, onClick: l, icon: i, prioritizedCurrency: a, onClickAnalytics: o } = e,
            c = (0, u.LJ)(t),
            g = (0, s.o)(c);
        if (null == c) return null;
        let p = (0, d.W)(c, g);
        return (0, r.jsx)(h, {
            product: p,
            cardRef: n,
            selectedVariantIndex: g,
            onClick: l,
            icon: i,
            prioritizedCurrency: a,
            onClickAnalytics: o,
        });
    };
