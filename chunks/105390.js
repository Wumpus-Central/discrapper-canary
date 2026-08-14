i.d(e, { Ag: () => E, MA: () => S, fY: () => N });
var r = i(477900),
    n = i(582128),
    o = i(503698),
    l = i.n(o),
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
    O = i(99462),
    m = i(202541),
    b = i(375708),
    j = i(928195);
function T(t) {
    let {
            isTabSelected: e,
            expiresAt: i,
            badgeCopy: o,
            className: u,
            tooltipTextOverride: x,
            tooltipPosition: v,
            hideTooltip: g = !1,
        } = t,
        h = n.useMemo(() => Date.parse(i), [i]),
        O = (0, d.A)(h, 6e4);
    if (Object.values(O).every((t) => 0 === t)) return null;
    let m = (0, r.jsxs)("div", {
        className: l()(j.Fg, j.C8, u, { [j.WO]: e }),
        children: [
            (0, r.jsx)(s.O, { size: "custom", width: 12, height: 12, color: "currentColor" }),
            (0, r.jsx)(a.E, { variant: "eyebrow", color: "text-strong", className: j.a7, children: o }),
        ],
    });
    return g
        ? m
        : (0, r.jsx)(c.m, {
              text: null != x ? x : (0, p.uN)(O, { days: b.t.qVGNkU, hours: b.t.wyg9a9, minutes: b.t.IzmIlV }),
              position: null != v ? v : "top",
              children: m,
          });
}
function E(t) {
    let { isTabSelected: e, trialOffer: i, badgeStyle: n } = t,
        o = (0, h.V)()?.subscriptionTrial,
        l = (0, x.tS)({ intervalType: o?.interval, intervalCount: o?.intervalCount }),
        s = i.trialId === m.Tt,
        a = (0, O.Fu)(i);
    return (0, r.jsx)(S, {
        isTabSelected: e,
        badgeCopy: l,
        offerExpiresAt: i.expiresAt?.toISOString() ?? null,
        tooltipTextOverride: a,
        tooltipPosition: "right",
        hideTooltip: s,
        unackedBadgeStyle: n,
    });
}
function N(t) {
    let { isTabSelected: e, userDiscount: i, includesAmountOff: n, badgeStyle: o } = t,
        l = b.intl.formatToPlainString(b.t.iiLbvu, { percent: i.discount.amount }),
        s = n ? l : b.intl.string(b.t["/DTtr6"]),
        a = i.expiresAt?.toISOString() ?? null,
        c = (0, O.__)(i);
    return (0, r.jsx)(S, {
        isTabSelected: e,
        badgeCopy: s,
        offerExpiresAt: a,
        tooltipTextOverride: c,
        tooltipPosition: "right",
        unackedBadgeStyle: o,
    });
}
function S(t) {
    let {
        isTabSelected: e,
        badgeCopy: i,
        offerExpiresAt: n,
        tooltipTextOverride: o,
        tooltipPosition: s,
        hideTooltip: c,
        unackedBadgeStyle: d,
    } = t;
    return null != n
        ? (0, r.jsx)(T, {
              expiresAt: n,
              isTabSelected: e,
              badgeCopy: i,
              tooltipTextOverride: o,
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
                  className: l()(j.Fg, j.AT),
                  children: (0, r.jsx)(a.E, { variant: "eyebrow", className: j.md, children: i }),
              });
}
