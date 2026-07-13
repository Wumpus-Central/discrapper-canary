n.d(t, { Ag: () => E, MA: () => m, fY: () => _ });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(990078),
    d = n(406810),
    o = n(834730),
    h = n(508770),
    u = n(496431),
    c = n(58703),
    g = n(428262),
    C = n(236056),
    p = n(872725),
    I = n(234419),
    y = n(99462),
    A = n(202541),
    f = n(375708),
    S = n(386667);
function v(e) {
    let {
            isTabSelected: t,
            expiresAt: n,
            badgeCopy: l,
            className: h,
            tooltipTextOverride: g,
            tooltipPosition: C,
            hideTooltip: p = !1,
        } = e,
        I = s.useMemo(() => Date.parse(n), [n]),
        y = (0, u.A)(I, 6e4);
    if (Object.values(y).every((e) => 0 === e)) return null;
    let A = (0, i.jsxs)("div", {
        className: r()(S.Fg, S.C8, h, { [S.WO]: t }),
        children: [
            (0, i.jsx)(d.O, { size: "custom", width: 12, height: 12, color: "currentColor" }),
            (0, i.jsx)(o.E, { variant: "eyebrow", color: "text-strong", children: l }),
        ],
    });
    return p
        ? A
        : (0, i.jsx)(a.m, {
              text: null != g ? g : (0, c.uN)(y, { days: f.t.qVGNkU, hours: f.t.wyg9a9, minutes: f.t.IzmIlV }),
              position: null != C ? C : "top",
              children: A,
          });
}
function E(e) {
    let { isTabSelected: t, trialOffer: n, badgeStyle: s } = e,
        l = (0, I.V)()?.subscription_trial,
        r = (0, g.tS)({ intervalType: l?.interval, intervalCount: l?.interval_count }),
        a = n.trial_id === A.Tt,
        d = (0, y.Fu)(n);
    return (0, i.jsx)(m, {
        isTabSelected: t,
        badgeCopy: r,
        offerExpiresAt: n.expires_at,
        tooltipTextOverride: d,
        tooltipPosition: "right",
        hideTooltip: a,
        unackedBadgeStyle: s,
    });
}
function _(e) {
    let { isTabSelected: t, userDiscount: n, includesAmountOff: s, badgeStyle: l } = e,
        r = f.intl.formatToPlainString(f.t.iiLbvu, { percent: n.discount.amount }),
        a = s ? r : f.intl.string(f.t["/DTtr6"]),
        d = n.expiresAt?.toISOString() ?? null,
        o = (0, y.__)(n);
    return (0, i.jsx)(m, {
        isTabSelected: t,
        badgeCopy: a,
        offerExpiresAt: d,
        tooltipTextOverride: o,
        tooltipPosition: "right",
        unackedBadgeStyle: l,
    });
}
function m(e) {
    let {
        isTabSelected: t,
        badgeCopy: n,
        offerExpiresAt: s,
        tooltipTextOverride: l,
        tooltipPosition: a,
        hideTooltip: d,
        unackedBadgeStyle: u,
    } = e;
    return null != s
        ? (0, i.jsx)(v, {
              expiresAt: s,
              isTabSelected: t,
              badgeCopy: n,
              tooltipTextOverride: l,
              tooltipPosition: a,
              hideTooltip: d,
          })
        : u === C.v.EXPRESSIVE
          ? (0, i.jsx)(h.E, { type: { text: n }, variant: "expressive" })
          : u === C.v.GLOWING
            ? (0, i.jsx)(p.A, {
                  glowing: !0,
                  fit: "cover",
                  glowAmount: 1,
                  blurAmount: 4,
                  hueRotate: 25,
                  cardStyle: { background: "transparent", border: "none" },
                  children: (0, i.jsx)(h.E, { type: { text: n }, variant: "expressive" }),
              })
            : (0, i.jsx)("div", {
                  className: r()(S.Fg, S.AT),
                  children: (0, i.jsx)(o.E, { variant: "eyebrow", className: S.md, children: n }),
              });
}
