r.d(t, { A: () => x });
var n = r(627968);
r(64700);
var l = r(397927),
    i = r(793574),
    s = r(440938),
    a = r(161918),
    o = r(298072),
    u = r(623373),
    c = r(878112),
    d = r(561769),
    p = r(347722),
    C = r(758836),
    k = r(985018);
let m = (e) => {
        let {
                product: t,
                selectedVariantIndex: r,
                cardRef: o,
                onClick: u,
                icon: m,
                prioritizedCurrency: x,
                onClickAnalytics: g,
                onTrackClick: h,
            } = e,
            I = (0, a.Mk)(),
            A = I?.tab,
            v = (0, s.uM)(),
            f = (0, p.X)(t, x),
            _ = (0, d.ql)(t, i.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, g);
        return null != u || null != m
            ? (0, n.jsx)(l.K0, {
                  variant: "primary",
                  "aria-label": k.intl.string(k.t.SKNnqq),
                  icon: m ?? l.bMW,
                  onClick: (e) => {
                      e.stopPropagation(), null != u ? u(t.skuId) : (h?.(C.sH.OPEN_DETAILS), _(e));
                  },
              })
            : f
              ? (0, n.jsx)(s.R9, {
                    newValue: { pageCategory: A === C.G2.HOME ? void 0 : v?.pageCategory },
                    children: (0, n.jsx)(c.A, {
                        primary: !0,
                        product: t,
                        selectedVariantIndex: r,
                        returnRef: o,
                        tooltipDelay: 250,
                        onTrackClick: h,
                    }),
                })
              : null;
    },
    x = (e) => {
        let {
                skuId: t,
                cardRef: r,
                onClick: l,
                icon: i,
                prioritizedCurrency: s,
                onClickAnalytics: a,
                onTrackClick: c,
            } = e,
            p = (0, d.Vm)(t),
            C = (0, o.Q)(p);
        if (null == p) return null;
        let k = (0, u.rb)(p, C);
        return (0, n.jsx)(m, {
            product: k,
            cardRef: r,
            selectedVariantIndex: C,
            onClick: l,
            icon: i,
            prioritizedCurrency: s,
            onClickAnalytics: a,
            onTrackClick: c,
        });
    };
