n.d(t, {
    A: () => x,
});
var a = n(627968);
n(64700);
var l = n(397927),
    i = n(793574),
    r = n(440938),
    s = n(161918),
    o = n(298072),
    c = n(878112),
    d = n(561769),
    u = n(767503),
    m = n(347722),
    p = n(758836),
    h = n(985018);
let f = (e) => {
        let {
                product: t,
                selectedVariantIndex: n,
                cardRef: o,
                onClick: u,
                icon: f,
                prioritizedCurrency: x,
                onClickAnalytics: b,
            } = e,
            g = (0, s.Mk)(),
            v = null == g ? void 0 : g.tab,
            j = (0, r.uM)(),
            y = (0, m.X)(t, x),
            _ = (0, d.ql)(t, i.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, b);
        return null != u || null != f
            ? (0, a.jsx)(l.K0, {
                  variant: "primary",
                  "aria-label": h.intl.string(h.t.SKNnqq),
                  icon: null != f ? f : l.bMW,
                  onClick: (e) => {
                      e.stopPropagation(), null != u ? u(t.skuId) : _(e);
                  },
              })
            : y
              ? (0, a.jsx)(r.R9, {
                    newValue: {
                        pageCategory: v === p.G2.HOME || null == j ? void 0 : j.pageCategory,
                    },
                    children: (0, a.jsx)(c.A, {
                        primary: !0,
                        product: t,
                        selectedVariantIndex: n,
                        returnRef: o,
                        tooltipDelay: 250,
                    }),
                })
              : null;
    },
    x = (e) => {
        let { skuId: t, cardRef: n, onClick: l, icon: i, prioritizedCurrency: r, onClickAnalytics: s } = e,
            c = (0, d.Vm)(t),
            m = (0, o.Q)(c);
        if (null == c) return null;
        let p = (0, u.r)(c, m);
        return (0, a.jsx)(f, {
            product: p,
            cardRef: n,
            selectedVariantIndex: m,
            onClick: l,
            icon: i,
            prioritizedCurrency: r,
            onClickAnalytics: s,
        });
    };
