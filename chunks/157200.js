"use strict";
n.d(t, { A: () => g });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(793574),
    s = n(440938),
    o = n(161918),
    l = n(298072),
    u = n(623373),
    c = n(878112),
    d = n(561769),
    _ = n(347722),
    f = n(758836),
    p = n(985018);
let h = 250,
    m = (e) => {
        let {
                product: t,
                selectedVariantIndex: n,
                cardRef: l,
                onClick: u,
                icon: m,
                prioritizedCurrency: g,
                onClickAnalytics: E,
            } = e,
            A = (0, o.Mk)(),
            I = A?.tab,
            T = (0, s.uM)(),
            y = (0, _.X)(t, g),
            S = (0, d.ql)(t, a.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, E);
        return null != u || null != m
            ? (0, r.jsx)(i.K0, {
                  variant: "primary",
                  "aria-label": p.intl.string(p.t.SKNnqq),
                  icon: m ?? i.bMW,
                  onClick: (e) => {
                      e.stopPropagation(), null != u ? u(t.skuId) : S(e);
                  },
              })
            : y
              ? (0, r.jsx)(s.R9, {
                    newValue: { pageCategory: I === f.G2.HOME ? void 0 : T?.pageCategory },
                    children: (0, r.jsx)(c.A, {
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
            c = (0, d.Vm)(t),
            _ = (0, l.Q)(c);
        if (null == c) return null;
        let f = (0, u.rb)(c, _);
        return (0, r.jsx)(m, {
            product: f,
            cardRef: n,
            selectedVariantIndex: _,
            onClick: i,
            icon: a,
            prioritizedCurrency: s,
            onClickAnalytics: o,
        });
    };
