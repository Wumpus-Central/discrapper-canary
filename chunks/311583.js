n.d(t, { Z: () => C });
var r = n(951288);
n(647438);
var l = n(481060),
    i = n(100527),
    s = n(381585),
    a = n(994587),
    o = n(429368),
    c = n(680942),
    u = n(786040),
    d = n(58201),
    p = n(694364),
    g = n(215023),
    f = n(388032);
let h = (e) => {
        let {
                product: t,
                selectedVariantIndex: n,
                cardRef: o,
                onClick: d,
                icon: h,
                prioritizedCurrency: C,
                onClickAnalytics: m,
            } = e,
            _ = (0, a.Nd)(),
            b = null == _ ? void 0 : _.tab,
            v = (0, s.sp)(),
            E = (0, p.J)(t, C),
            x = (0, u.J7)(t, i.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, m);
        return null != d || null != h
            ? (0, r.jsx)(l.hU, {
                  variant: "primary",
                  "aria-label": f.intl.string(f.t.SKNnqq),
                  icon: null != h ? h : l.tEF,
                  onClick: (e) => {
                      e.stopPropagation(), null != d ? d(t.skuId) : x(e);
                  },
              })
            : E
              ? (0, r.jsx)(s.k0, {
                    newValue: { pageCategory: b === g.AW.HOME || null == v ? void 0 : v.pageCategory },
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
    C = (e) => {
        let { skuId: t, cardRef: n, onClick: l, icon: i, prioritizedCurrency: s, onClickAnalytics: a } = e,
            c = (0, u.LJ)(t),
            p = (0, o.o)(c);
        if (null == c) return null;
        let g = (0, d.W)(c, p);
        return (0, r.jsx)(h, {
            product: g,
            cardRef: n,
            selectedVariantIndex: p,
            onClick: l,
            icon: i,
            prioritizedCurrency: s,
            onClickAnalytics: a,
        });
    };
