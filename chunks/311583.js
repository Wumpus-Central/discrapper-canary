n.d(t, { Z: () => h });
var r = n(951288);
n(647438);
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
let C = (e) => {
        let {
                product: t,
                selectedVariantIndex: n,
                cardRef: o,
                onClick: d,
                icon: C,
                prioritizedCurrency: h,
                onClickAnalytics: _,
            } = e,
            m = (0, s.Nd)(),
            b = null == m ? void 0 : m.tab,
            v = (0, a.sp)(),
            E = (0, g.J)(t, h),
            x = (0, u.J7)(t, i.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, _);
        return null != d || null != C
            ? (0, r.jsx)(l.hU, {
                  variant: "primary",
                  "aria-label": f.intl.string(f.t.SKNnqq),
                  icon: null != C ? C : l.tEF,
                  onClick: (e) => {
                      e.stopPropagation(), null != d ? d(t.skuId) : x(e);
                  },
              })
            : E
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
        return (0, r.jsx)(C, {
            product: p,
            cardRef: n,
            selectedVariantIndex: g,
            onClick: l,
            icon: i,
            prioritizedCurrency: a,
            onClickAnalytics: s,
        });
    };
