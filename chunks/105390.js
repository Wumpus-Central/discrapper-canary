"use strict";
n.d(t, { Ag: () => S, MA: () => C, fY: () => y });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(990078),
    l = n(406810),
    u = n(834730),
    c = n(508770),
    d = n(496431),
    _ = n(58703),
    h = n(428262),
    f = n(236056),
    p = n(872725),
    E = n(234419),
    m = n(99462),
    g = n(788868),
    A = n(375708),
    I = n(386667);
function T(e) {
    let {
            isTabSelected: t,
            expiresAt: n,
            badgeCopy: s,
            className: c,
            tooltipTextOverride: h,
            tooltipPosition: f,
            hideTooltip: p = !1,
        } = e,
        E = r.useMemo(() => Date.parse(n), [n]),
        m = (0, d.A)(E, 6e4);
    if (Object.values(m).every((e) => 0 === e)) return null;
    let g = (0, i.jsxs)("div", {
        className: a()(I.Fg, I.C8, c, { [I.WO]: t }),
        children: [
            (0, i.jsx)(l.O, { size: "custom", width: 16, height: 16, color: "currentColor", className: I._q }),
            (0, i.jsx)(u.E, { variant: "eyebrow", color: "text-strong", children: s }),
        ],
    });
    return p
        ? g
        : (0, i.jsx)(o.m, {
              text: null != h ? h : (0, _.uN)(m, { days: A.t.qVGNkU, hours: A.t.wyg9a9, minutes: A.t.IzmIlV }),
              position: null != f ? f : "top",
              children: g,
          });
}
function S(e) {
    let { isTabSelected: t, trialOffer: n, badgeStyle: r } = e,
        s = (0, E.V)()?.subscription_trial,
        a = (0, h.tS)({ intervalType: s?.interval, intervalCount: s?.interval_count }),
        o = n.trial_id === g.Tt,
        l = (0, m.Fu)(n);
    return (0, i.jsx)(C, {
        isTabSelected: t,
        badgeCopy: a,
        offerExpiresAt: n.expires_at,
        tooltipTextOverride: l,
        tooltipPosition: "right",
        hideTooltip: o,
        unackedBadgeStyle: r,
    });
}
function y(e) {
    let { isTabSelected: t, userDiscount: n, includesAmountOff: r, badgeStyle: s } = e,
        a = A.intl.formatToPlainString(A.t.iiLbvu, { percent: n.discount.amount }),
        o = r ? a : A.intl.string(A.t["/DTtr6"]),
        l = n.expiresAt?.toISOString() ?? null,
        u = (0, m.__)(n);
    return (0, i.jsx)(C, {
        isTabSelected: t,
        badgeCopy: o,
        offerExpiresAt: l,
        tooltipTextOverride: u,
        tooltipPosition: "right",
        unackedBadgeStyle: s,
    });
}
function C(e) {
    let {
        isTabSelected: t,
        badgeCopy: n,
        offerExpiresAt: r,
        tooltipTextOverride: s,
        tooltipPosition: o,
        hideTooltip: l,
        unackedBadgeStyle: d,
    } = e;
    return null != r
        ? (0, i.jsx)(T, {
              expiresAt: r,
              isTabSelected: t,
              badgeCopy: n,
              tooltipTextOverride: s,
              tooltipPosition: o,
              hideTooltip: l,
          })
        : d === f.v.EXPRESSIVE
          ? (0, i.jsx)(c.E, { type: { text: n }, variant: "expressive" })
          : d === f.v.GLOWING
            ? (0, i.jsx)(p.A, {
                  glowing: !0,
                  fit: "cover",
                  glowAmount: 1,
                  blurAmount: 4,
                  hueRotate: 25,
                  cardStyle: { background: "transparent", border: "none" },
                  children: (0, i.jsx)(c.E, { type: { text: n }, variant: "expressive" }),
              })
            : (0, i.jsx)("div", {
                  className: a()(I.Fg, I.AT),
                  children: (0, i.jsx)(u.E, { variant: "eyebrow", className: I.md, children: n }),
              });
}
