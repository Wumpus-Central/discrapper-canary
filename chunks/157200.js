r.d(t, { A: () => I });
var i = r(627968);
r(64700);
var n = r(408278),
    l = r(39623),
    s = r(793574),
    a = r(440938),
    u = r(161918),
    c = r(298072),
    o = r(623373),
    d = r(878112),
    k = r(561769),
    p = r(347722),
    C = r(758836),
    m = r(985018);
let x = (e) => {
        let {
                product: t,
                selectedVariantIndex: r,
                cardRef: c,
                onClick: o,
                icon: x,
                prioritizedCurrency: I,
                onClickAnalytics: A,
                onTrackClick: g,
            } = e,
            h = (0, u.Mk)(),
            _ = h?.tab,
            f = (0, a.uM)(),
            T = (0, p.X)(t, I),
            E = (0, k.ql)(t, s.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, A);
        return null != o || null != x
            ? (0, i.jsx)(n.K, {
                  variant: "primary",
                  "aria-label": m.intl.string(m.t.SKNnqq),
                  icon: x ?? l.b,
                  onClick: (e) => {
                      e.stopPropagation(), null != o ? o(t.skuId) : (g?.(C.sH.OPEN_DETAILS), E(e));
                  },
              })
            : T
              ? (0, i.jsx)(a.R9, {
                    newValue: { pageCategory: _ === C.G2.HOME ? void 0 : f?.pageCategory },
                    children: (0, i.jsx)(d.A, {
                        primary: !0,
                        product: t,
                        selectedVariantIndex: r,
                        returnRef: c,
                        tooltipDelay: 250,
                        onTrackClick: g,
                    }),
                })
              : null;
    },
    I = (e) => {
        let {
                skuId: t,
                cardRef: r,
                onClick: n,
                icon: l,
                prioritizedCurrency: s,
                onClickAnalytics: a,
                onTrackClick: u,
            } = e,
            d = (0, k.Vm)(t),
            p = (0, c.Q)(d);
        if (null == d) return null;
        let C = (0, o.rb)(d, p);
        return (0, i.jsx)(x, {
            product: C,
            cardRef: r,
            selectedVariantIndex: p,
            onClick: n,
            icon: l,
            prioritizedCurrency: s,
            onClickAnalytics: a,
            onTrackClick: u,
        });
    };
