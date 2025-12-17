n.d(t, { Z: () => x });
var a = n(54381);
n(473749);
var r = n(481060),
    l = n(100527),
    i = n(381585),
    s = n(994587),
    o = n(429368),
    c = n(680942),
    d = n(786040),
    u = n(58201),
    m = n(694364),
    p = n(215023),
    h = n(388032);
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
            g = (0, s.Nd)(),
            v = null == g ? void 0 : g.tab,
            j = (0, i.sp)(),
            y = (0, m.J)(t, x),
            C = (0, d.J7)(t, l.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, b);
        return null != u || null != f
            ? (0, a.jsx)(r.hU, {
                  variant: "primary",
                  "aria-label": h.intl.string(h.t.SKNnqq),
                  icon: null != f ? f : r.tEF,
                  onClick: (e) => {
                      e.stopPropagation(), null != u ? u(t.skuId) : C(e);
                  },
              })
            : y
              ? (0, a.jsx)(i.k0, {
                    newValue: { pageCategory: v === p.AW.HOME || null == j ? void 0 : j.pageCategory },
                    children: (0, a.jsx)(c.Z, {
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
        let { skuId: t, cardRef: n, onClick: r, icon: l, prioritizedCurrency: i, onClickAnalytics: s } = e,
            c = (0, d.LJ)(t),
            m = (0, o.o)(c);
        if (null == c) return null;
        let p = (0, u.W)(c, m);
        return (0, a.jsx)(f, {
            product: p,
            cardRef: n,
            selectedVariantIndex: m,
            onClick: r,
            icon: l,
            prioritizedCurrency: i,
            onClickAnalytics: s,
        });
    };
