"use strict";
n.d(t, { Ag: () => S, MA: () => m, fY: () => A });
var s = n(627968),
    i = n(64700),
    r = n(503698),
    l = n.n(r),
    a = n(990078),
    o = n(397927),
    d = n(496431),
    h = n(405269),
    c = n(927578),
    u = n(234419),
    g = n(915516),
    p = n(985018),
    C = n(271300);
function f(e) {
    let { isTabSelected: t, expiresAt: n, badgeCopy: r, className: c, tooltipTextOverride: u, tooltipPosition: g } = e,
        f = i.useMemo(() => Date.parse(n), [n]),
        S = (0, d.A)(f, 6e4);
    return Object.values(S).every((e) => 0 === e)
        ? null
        : (0, s.jsx)(a.m, {
              text: null != u ? u : (0, h.uN)(S, { days: p.t.qVGNkU, hours: p.t.wyg9a9, minutes: p.t.IzmIlV }),
              position: null != g ? g : "top",
              children: (0, s.jsxs)("div", {
                  className: l()(C.Fg, C.C8, c, { [C.WO]: t }),
                  children: [
                      (0, s.jsx)(o.O4, {
                          size: "custom",
                          width: 20,
                          height: 20,
                          color: "currentColor",
                          className: C._q,
                      }),
                      (0, s.jsx)(o.Text, { variant: "eyebrow", color: "text-strong", children: r }),
                  ],
              }),
          });
}
function S(e) {
    let { isTabSelected: t, trialOffer: n } = e,
        i = (0, u.V)()?.subscription_trial,
        r = (0, c.tS)({ intervalType: i?.interval, intervalCount: i?.interval_count }),
        l = (0, g.Fu)(n);
    return (0, s.jsx)(m, {
        isTabSelected: t,
        badgeCopy: r,
        offerExpiresAt: n.expires_at,
        tooltipTextOverride: l,
        tooltipPosition: "right",
    });
}
function A(e) {
    let { isTabSelected: t, userDiscount: n, includesAmountOff: i } = e,
        r = p.intl.formatToPlainString(p.t.iiLbvu, { percent: n.discount.amount }),
        l = (0, g.__)(n);
    return (0, s.jsx)(m, {
        isTabSelected: t,
        badgeCopy: i ? r : p.intl.string(p.t["/DTtr6"]),
        offerExpiresAt: n.expires_at,
        tooltipTextOverride: l,
        tooltipPosition: "right",
    });
}
function m(e) {
    let { isTabSelected: t, badgeCopy: n, offerExpiresAt: i, tooltipTextOverride: r, tooltipPosition: a } = e;
    return null != i
        ? (0, s.jsx)(f, { expiresAt: i, isTabSelected: t, badgeCopy: n, tooltipTextOverride: r, tooltipPosition: a })
        : (0, s.jsx)("div", {
              className: l()(C.Fg, C.AT),
              children: (0, s.jsx)(o.Text, { variant: "eyebrow", className: C.md, children: n }),
          });
}
