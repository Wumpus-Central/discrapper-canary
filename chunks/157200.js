n.d(t, {
    A: () => g,
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(793574),
    s = n(440938),
    o = n(161918),
    l = n(298072),
    c = n(623373),
    u = n(878112),
    d = n(561769),
    f = n(347722),
    p = n(758836),
    _ = n(985018);
let h = 250,
    m = (e) => {
        let {
                product: t,
                selectedVariantIndex: n,
                cardRef: l,
                onClick: c,
                icon: m,
                prioritizedCurrency: g,
                onClickAnalytics: E,
            } = e,
            y = (0, o.Mk)(),
            b = null == y ? void 0 : y.tab,
            O = (0, s.uM)(),
            v = (0, f.X)(t, g),
            A = (0, d.ql)(t, a.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, E);
        return null != c || null != m
            ? (0, r.jsx)(i.K0, {
                  variant: "primary",
                  "aria-label": _.intl.string(_.t.SKNnqq),
                  icon: null != m ? m : i.bMW,
                  onClick: (e) => {
                      e.stopPropagation(), null != c ? c(t.skuId) : A(e);
                  },
              })
            : v
              ? (0, r.jsx)(s.R9, {
                    newValue: {
                        pageCategory: b === p.G2.HOME || null == O ? void 0 : O.pageCategory,
                    },
                    children: (0, r.jsx)(u.A, {
                        primary: !0,
                        product: t,
                        selectedVariantIndex: n,
                        returnRef: l,
                        tooltipDelay: h,
                    }),
                })
              : null;
    },
    g = (e) => {
        let { skuId: t, cardRef: n, onClick: i, icon: a, prioritizedCurrency: s, onClickAnalytics: o } = e,
            u = (0, d.Vm)(t),
            f = (0, l.Q)(u);
        if (null == u) return null;
        let p = (0, c.rb)(u, f);
        return (0, r.jsx)(m, {
            product: p,
            cardRef: n,
            selectedVariantIndex: f,
            onClick: i,
            icon: a,
            prioritizedCurrency: s,
            onClickAnalytics: o,
        });
    };
