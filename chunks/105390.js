n.d(t, { Ag: () => f, MA: () => x, fY: () => g });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    o = n(990078),
    a = n(397927),
    c = n(496431),
    d = n(405269),
    u = n(927578),
    h = n(234419),
    m = n(915516),
    p = n(985018),
    S = n(271300);
function E(e) {
    let { isTabSelected: t, expiresAt: n, badgeCopy: r, className: u, tooltipTextOverride: h, tooltipPosition: m } = e,
        E = s.useMemo(() => Date.parse(n), [n]),
        f = (0, c.A)(E, 6e4);
    return Object.values(f).every((e) => 0 === e)
        ? null
        : (0, i.jsx)(o.m, {
              text: null != h ? h : (0, d.uN)(f, { days: p.t.qVGNkU, hours: p.t.wyg9a9, minutes: p.t.IzmIlV }),
              position: null != m ? m : "top",
              children: (0, i.jsxs)("div", {
                  className: l()(S.Fg, S.C8, u, { [S.WO]: t }),
                  children: [
                      (0, i.jsx)(a.O4, {
                          size: "custom",
                          width: 20,
                          height: 20,
                          color: "currentColor",
                          className: S._q,
                      }),
                      (0, i.jsx)(a.Text, { variant: "eyebrow", color: "text-strong", children: r }),
                  ],
              }),
          });
}
function f(e) {
    let { isTabSelected: t, trialOffer: n } = e,
        s = (0, h.V)()?.subscription_trial,
        r = (0, u.tS)({ intervalType: s?.interval, intervalCount: s?.interval_count }),
        l = (0, m.Fu)(n);
    return (0, i.jsx)(x, {
        isTabSelected: t,
        badgeCopy: r,
        offerExpiresAt: n.expires_at,
        tooltipTextOverride: l,
        tooltipPosition: "right",
    });
}
function g(e) {
    let { isTabSelected: t, userDiscount: n, includesAmountOff: s } = e,
        r = p.intl.formatToPlainString(p.t.iiLbvu, { percent: n.discount.amount }),
        l = (0, m.__)(n);
    return (0, i.jsx)(x, {
        isTabSelected: t,
        badgeCopy: s ? r : p.intl.string(p.t["/DTtr6"]),
        offerExpiresAt: n.expires_at,
        tooltipTextOverride: l,
        tooltipPosition: "right",
    });
}
function x(e) {
    let { isTabSelected: t, badgeCopy: n, offerExpiresAt: s, tooltipTextOverride: r, tooltipPosition: o } = e;
    return null != s
        ? (0, i.jsx)(E, { expiresAt: s, isTabSelected: t, badgeCopy: n, tooltipTextOverride: r, tooltipPosition: o })
        : (0, i.jsx)("div", {
              className: l()(S.Fg, S.AT),
              children: (0, i.jsx)(a.Text, { variant: "eyebrow", className: S.md, children: n }),
          });
}
