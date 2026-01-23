n.d(t, {
    A: () => g,
});
var a = n(627968);
n(64700);
var l = n(397927),
    r = n(793574),
    i = n(440938),
    s = n(161918),
    o = n(298072),
    c = n(623373),
    d = n(878112),
    u = n(561769),
    m = n(347722),
    p = n(758836),
    h = n(985018);
let x = (e) => {
        let {
                product: t,
                selectedVariantIndex: n,
                cardRef: o,
                onClick: c,
                icon: x,
                prioritizedCurrency: g,
                onClickAnalytics: f,
            } = e,
            b = (0, s.Mk)(),
            v = null == b ? void 0 : b.tab,
            j = (0, i.uM)(),
            _ = (0, m.X)(t, g),
            y = (0, u.ql)(t, r.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, f);
        return null != c || null != x
            ? (0, a.jsx)(l.K0, {
                  variant: "primary",
                  "aria-label": h.intl.string(h.t.SKNnqq),
                  icon: null != x ? x : l.bMW,
                  onClick: (e) => {
                      e.stopPropagation(), null != c ? c(t.skuId) : y(e);
                  },
              })
            : _
              ? (0, a.jsx)(i.R9, {
                    newValue: {
                        pageCategory: v === p.G2.HOME || null == j ? void 0 : j.pageCategory,
                    },
                    children: (0, a.jsx)(d.A, {
                        primary: !0,
                        product: t,
                        selectedVariantIndex: n,
                        returnRef: o,
                        tooltipDelay: 250,
                    }),
                })
              : null;
    },
    g = (e) => {
        let { skuId: t, cardRef: n, onClick: l, icon: r, prioritizedCurrency: i, onClickAnalytics: s } = e,
            d = (0, u.Vm)(t),
            m = (0, o.Q)(d);
        if (null == d) return null;
        let p = (0, c.rb)(d, m);
        return (0, a.jsx)(x, {
            product: p,
            cardRef: n,
            selectedVariantIndex: m,
            onClick: l,
            icon: r,
            prioritizedCurrency: i,
            onClickAnalytics: s,
        });
    };
