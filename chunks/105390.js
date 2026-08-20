i.d(e, { Ag: () => E, MA: () => S, fY: () => N });
var r = i(477900),
    o = i(582128),
    n = i(503698),
    l = i.n(n),
    s = i(406810),
    a = i(834730),
    c = i(866665),
    u = i(508770),
    d = i(496431),
    p = i(58703),
    x = i(158045),
    v = i(236056),
    g = i(872725),
    h = i(732280),
    m = i(99462),
    b = i(202541),
    j = i(375708),
    O = i(432458);
function T(t) {
    let {
            isTabSelected: e,
            expiresAt: i,
            badgeCopy: n,
            className: u,
            tooltipTextOverride: x,
            tooltipPosition: v,
            hideTooltip: g = !1,
        } = t,
        h = o.useMemo(() => Date.parse(i), [i]),
        m = (0, d.A)(h, 6e4);
    if (Object.values(m).every((t) => 0 === t)) return null;
    let b = (0, r.jsxs)("div", {
        className: l()(O.Fg, O.C8, u, { [O.WO]: e }),
        children: [
            (0, r.jsx)(s.ClockIcon, { size: "custom", width: 12, height: 12, color: "currentColor" }),
            (0, r.jsx)(a.E, { variant: "eyebrow", color: "text-strong", className: O.a7, children: n }),
        ],
    });
    return g
        ? b
        : (0, r.jsx)(c.m, {
              text: null != x ? x : (0, p.uN)(m, { days: j.t.qVGNkU, hours: j.t.wyg9a9, minutes: j.t.IzmIlV }),
              position: null != v ? v : "top",
              children: b,
          });
}
function E(t) {
    let { isTabSelected: e, trialOffer: i, badgeStyle: o } = t,
        n = (0, h.V)()?.subscriptionTrial,
        l = (0, x.tS)({ intervalType: n?.interval, intervalCount: n?.intervalCount }),
        s = i.trialId === b.Tt,
        a = (0, m.Fu)(i);
    return (0, r.jsx)(S, {
        isTabSelected: e,
        badgeCopy: l,
        offerExpiresAt: i.expiresAt?.toISOString() ?? null,
        tooltipTextOverride: a,
        tooltipPosition: "right",
        hideTooltip: s,
        unackedBadgeStyle: o,
    });
}
function N(t) {
    let { isTabSelected: e, userDiscount: i, includesAmountOff: o, badgeStyle: n } = t,
        l = j.intl.formatToPlainString(j.t.iiLbvu, { percent: i.discount.amount }),
        s = o ? l : j.intl.string(j.t["/DTtr6"]),
        a = i.expiresAt?.toISOString() ?? null,
        c = (0, m.__)(i);
    return (0, r.jsx)(S, {
        isTabSelected: e,
        badgeCopy: s,
        offerExpiresAt: a,
        tooltipTextOverride: c,
        tooltipPosition: "right",
        unackedBadgeStyle: n,
    });
}
function S(t) {
    let {
        isTabSelected: e,
        badgeCopy: i,
        offerExpiresAt: o,
        tooltipTextOverride: n,
        tooltipPosition: s,
        hideTooltip: c,
        unackedBadgeStyle: d,
    } = t;
    return null != o
        ? (0, r.jsx)(T, {
              expiresAt: o,
              isTabSelected: e,
              badgeCopy: i,
              tooltipTextOverride: n,
              tooltipPosition: s,
              hideTooltip: c,
          })
        : d === v.v.EXPRESSIVE
          ? (0, r.jsx)(u.E, { type: { text: i }, variant: "expressive" })
          : d === v.v.GLOWING
            ? (0, r.jsx)(g.A, {
                  glowing: !0,
                  fit: "cover",
                  glowAmount: 1,
                  blurAmount: 4,
                  hueRotate: 25,
                  cardStyle: { background: "transparent", border: "none" },
                  children: (0, r.jsx)(u.E, { type: { text: i }, variant: "expressive" }),
              })
            : (0, r.jsx)("div", {
                  className: l()(O.Fg, O.AT),
                  children: (0, r.jsx)(a.E, { variant: "eyebrow", className: O.md, children: i }),
              });
}
