n.d(t, { Z: () => f });
var a = n(54381);
n(473749);
var r = n(481060),
    i = n(100527),
    l = n(381585),
    s = n(994587),
    o = n(429368),
    c = n(680942),
    d = n(786040),
    u = n(58201),
    m = n(694364),
    p = n(215023),
    h = n(388032);
let x = (e) => {
        let {
                product: t,
                selectedVariantIndex: n,
                cardRef: o,
                onClick: u,
                icon: x,
                prioritizedCurrency: f,
                onClickAnalytics: g,
            } = e,
            b = (0, s.Nd)(),
            v = null == b ? void 0 : b.tab,
            j = (0, l.sp)(),
            _ = (0, m.J)(t, f),
            y = (0, d.J7)(t, i.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, g);
        return null != u || null != x
            ? (0, a.jsx)(r.hU, {
                  variant: "primary",
                  "aria-label": h.intl.string(h.t.SKNnqq),
                  icon: null != x ? x : r.tEF,
                  onClick: (e) => {
                      e.stopPropagation(), null != u ? u(t.skuId) : y(e);
                  },
              })
            : _
              ? (0, a.jsx)(l.k0, {
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
    f = (e) => {
        let { skuId: t, cardRef: n, onClick: r, icon: i, prioritizedCurrency: l, onClickAnalytics: s } = e,
            c = (0, d.LJ)(t),
            m = (0, o.o)(c);
        if (null == c) return null;
        let p = (0, u.W)(c, m);
        return (0, a.jsx)(x, {
            product: p,
            cardRef: n,
            selectedVariantIndex: m,
            onClick: r,
            icon: i,
            prioritizedCurrency: l,
            onClickAnalytics: s,
        });
    };
