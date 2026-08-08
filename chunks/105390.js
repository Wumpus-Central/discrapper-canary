i.d(t, { Ag: () => N, MA: () => y, fY: () => T });
var r = i(477900),
    n = i(582128),
    o = i(503698),
    s = i.n(o),
    l = i(406810),
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
    O = i(202541),
    b = i(375708),
    j = i(928195);
function E(e) {
    let {
            isTabSelected: t,
            expiresAt: i,
            badgeCopy: o,
            className: u,
            tooltipTextOverride: x,
            tooltipPosition: v,
            hideTooltip: g = !1,
        } = e,
        h = n.useMemo(() => Date.parse(i), [i]),
        m = (0, d.A)(h, 6e4);
    if (Object.values(m).every((e) => 0 === e)) return null;
    let O = (0, r.jsxs)("div", {
        className: s()(j.Fg, j.C8, u, { [j.WO]: t }),
        children: [
            (0, r.jsx)(l.O, { size: "custom", width: 12, height: 12, color: "currentColor" }),
            (0, r.jsx)(a.E, { variant: "eyebrow", color: "text-strong", className: j.a7, children: o }),
        ],
    });
    return g
        ? O
        : (0, r.jsx)(c.m, {
              text: null != x ? x : (0, p.uN)(m, { days: b.t.qVGNkU, hours: b.t.wyg9a9, minutes: b.t.IzmIlV }),
              position: null != v ? v : "top",
              children: O,
          });
}
function N(e) {
    let { isTabSelected: t, trialOffer: i, badgeStyle: n } = e,
        o = (0, h.V)()?.subscription_trial,
        s = (0, x.tS)({ intervalType: o?.interval, intervalCount: o?.interval_count }),
        l = i.trial_id === O.Tt,
        a = (0, m.Fu)(i);
    return (0, r.jsx)(y, {
        isTabSelected: t,
        badgeCopy: s,
        offerExpiresAt: i.expires_at,
        tooltipTextOverride: a,
        tooltipPosition: "right",
        hideTooltip: l,
        unackedBadgeStyle: n,
    });
}
function T(e) {
    let { isTabSelected: t, userDiscount: i, includesAmountOff: n, badgeStyle: o } = e,
        s = b.intl.formatToPlainString(b.t.iiLbvu, { percent: i.discount.amount }),
        l = n ? s : b.intl.string(b.t["/DTtr6"]),
        a = i.expiresAt?.toISOString() ?? null,
        c = (0, m.__)(i);
    return (0, r.jsx)(y, {
        isTabSelected: t,
        badgeCopy: l,
        offerExpiresAt: a,
        tooltipTextOverride: c,
        tooltipPosition: "right",
        unackedBadgeStyle: o,
    });
}
function y(e) {
    let {
        isTabSelected: t,
        badgeCopy: i,
        offerExpiresAt: n,
        tooltipTextOverride: o,
        tooltipPosition: l,
        hideTooltip: c,
        unackedBadgeStyle: d,
    } = e;
    return null != n
        ? (0, r.jsx)(E, {
              expiresAt: n,
              isTabSelected: t,
              badgeCopy: i,
              tooltipTextOverride: o,
              tooltipPosition: l,
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
                  className: s()(j.Fg, j.AT),
                  children: (0, r.jsx)(a.E, { variant: "eyebrow", className: j.md, children: i }),
              });
}
ildren: n;
})})}
