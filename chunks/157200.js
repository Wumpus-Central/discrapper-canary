r.d(e, { A: () => h });
var i = r(627968);
r(64700);
var l = r(397927),
    n = r(793574),
    s = r(440938),
    a = r(161918),
    u = r(298072),
    o = r(623373),
    d = r(878112),
    c = r(561769),
    m = r(347722),
    x = r(758836),
    p = r(985018);
let g = (t) => {
        let {
                product: e,
                selectedVariantIndex: r,
                cardRef: u,
                onClick: o,
                icon: g,
                prioritizedCurrency: h,
                onClickAnalytics: C,
            } = t,
            A = (0, a.Mk)(),
            I = A?.tab,
            j = (0, s.uM)(),
            k = (0, m.X)(e, h),
            f = (0, c.ql)(e, n.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, C);
        return null != o || null != g
            ? (0, i.jsx)(l.K0, {
                  variant: "primary",
                  "aria-label": p.intl.string(p.t.SKNnqq),
                  icon: g ?? l.bMW,
                  onClick: (t) => {
                      t.stopPropagation(), null != o ? o(e.skuId) : f(t);
                  },
              })
            : k
              ? (0, i.jsx)(s.R9, {
                    newValue: { pageCategory: I === x.G2.HOME ? void 0 : j?.pageCategory },
                    children: (0, i.jsx)(d.A, {
                        primary: !0,
                        product: e,
                        selectedVariantIndex: r,
                        returnRef: u,
                        tooltipDelay: 250,
                    }),
                })
              : null;
    },
    h = (t) => {
        let { skuId: e, cardRef: r, onClick: l, icon: n, prioritizedCurrency: s, onClickAnalytics: a } = t,
            d = (0, c.Vm)(e),
            m = (0, u.Q)(d);
        if (null == d) return null;
        let x = (0, o.rb)(d, m);
        return (0, i.jsx)(g, {
            product: x,
            cardRef: r,
            selectedVariantIndex: m,
            onClick: l,
            icon: n,
            prioritizedCurrency: s,
            onClickAnalytics: a,
        });
    };
