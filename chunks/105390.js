"use strict";
n.d(t, { Ag: () => S, MA: () => C, fY: () => N });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(990078),
    o = n(406810),
    d = n(834730),
    c = n(508770),
    u = n(496431),
    _ = n(58703),
    E = n(428262),
    A = n(236056),
    h = n(872725),
    I = n(234419),
    f = n(99462),
    p = n(202541),
    T = n(375708),
    m = n(643819);
function g(e) {
    let {
            isTabSelected: t,
            expiresAt: n,
            badgeCopy: a,
            className: c,
            tooltipTextOverride: E,
            tooltipPosition: A,
            hideTooltip: h = !1,
        } = e,
        I = r.useMemo(() => Date.parse(n), [n]),
        f = (0, u.A)(I, 6e4);
    if (Object.values(f).every((e) => 0 === e)) return null;
    let p = (0, i.jsxs)("div", {
        className: s()(m.Fg, m.C8, c, { [m.WO]: t }),
        children: [
            (0, i.jsx)(o.O, { size: "custom", width: 12, height: 12, color: "currentColor" }),
            (0, i.jsx)(d.E, { variant: "eyebrow", color: "text-strong", children: a }),
        ],
    });
    return h
        ? p
        : (0, i.jsx)(l.m, {
              text: null != E ? E : (0, _.uN)(f, { days: T.t.qVGNkU, hours: T.t.wyg9a9, minutes: T.t.IzmIlV }),
              position: null != A ? A : "top",
              children: p,
          });
}
function S(e) {
    let { isTabSelected: t, trialOffer: n, badgeStyle: r } = e,
        a = (0, I.V)()?.subscription_trial,
        s = (0, E.tS)({ intervalType: a?.interval, intervalCount: a?.interval_count }),
        l = n.trial_id === p.Tt,
        o = (0, f.Fu)(n);
    return (0, i.jsx)(C, {
        isTabSelected: t,
        badgeCopy: s,
        offerExpiresAt: n.expires_at,
        tooltipTextOverride: o,
        tooltipPosition: "right",
        hideTooltip: l,
        unackedBadgeStyle: r,
    });
}
function N(e) {
    let { isTabSelected: t, userDiscount: n, includesAmountOff: r, badgeStyle: a } = e,
        s = T.intl.formatToPlainString(T.t.iiLbvu, { percent: n.discount.amount }),
        l = r ? s : T.intl.string(T.t["/DTtr6"]),
        o = n.expiresAt?.toISOString() ?? null,
        d = (0, f.__)(n);
    return (0, i.jsx)(C, {
        isTabSelected: t,
        badgeCopy: l,
        offerExpiresAt: o,
        tooltipTextOverride: d,
        tooltipPosition: "right",
        unackedBadgeStyle: a,
    });
}
function C(e) {
    let {
        isTabSelected: t,
        badgeCopy: n,
        offerExpiresAt: r,
        tooltipTextOverride: a,
        tooltipPosition: l,
        hideTooltip: o,
        unackedBadgeStyle: u,
    } = e;
    return null != r
        ? (0, i.jsx)(g, {
              expiresAt: r,
              isTabSelected: t,
              badgeCopy: n,
              tooltipTextOverride: a,
              tooltipPosition: l,
              hideTooltip: o,
          })
        : u === A.v.EXPRESSIVE
          ? (0, i.jsx)(c.E, { type: { text: n }, variant: "expressive" })
          : u === A.v.GLOWING
            ? (0, i.jsx)(h.A, {
                  glowing: !0,
                  fit: "cover",
                  glowAmount: 1,
                  blurAmount: 4,
                  hueRotate: 25,
                  cardStyle: { background: "transparent", border: "none" },
                  children: (0, i.jsx)(c.E, { type: { text: n }, variant: "expressive" }),
              })
            : (0, i.jsx)("div", {
                  className: s()(m.Fg, m.AT),
                  children: (0, i.jsx)(d.E, { variant: "eyebrow", className: m.md, children: n }),
              });
}
