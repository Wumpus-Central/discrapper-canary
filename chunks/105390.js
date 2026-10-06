e.d(i, { Ag: () => A, MA: () => P, fY: () => I });
var r = e(477900),
    n = e(582128),
    o = e(503698),
    l = e.n(o),
    a = e(85463),
    s = e(406810),
    u = e(834730),
    c = e(866665),
    d = e(508770),
    m = e(496431),
    p = e(58703),
    g = e(927578),
    h = e(236056),
    T = e(872725),
    x = e(732280),
    f = e(99462),
    v = e(202541),
    y = e(375708),
    S = e(432458);
function b(t) {
    let {
            isTabSelected: i,
            expiresAt: e,
            badgeCopy: o,
            className: d,
            tooltipTextOverride: g,
            tooltipPosition: h,
            hideTooltip: T = !1,
        } = t,
        x = (0, a.N)(),
        f = n.useMemo(() => Date.parse(e), [e]),
        v = (0, m.A)(f, 6e4);
    if (Object.values(v).every((t) => 0 === t)) return null;
    let b = (0, r.jsxs)("div", {
        className: l()(S.Fg, S.C8, d, { [S.WO]: i }),
        children: [
            (0, r.jsx)(s.ClockIcon, { size: "custom", width: 12, height: 12, color: "currentColor" }),
            (0, r.jsx)(u.E, { variant: x, color: "text-strong", className: S.a7, children: o }),
        ],
    });
    return T
        ? b
        : (0, r.jsx)(c.m, {
              text: null != g ? g : (0, p.uN)(v, { days: y.t.qVGNkU, hours: y.t.wyg9a9, minutes: y.t.IzmIlV }),
              position: null != h ? h : "top",
              children: b,
          });
}
function A(t) {
    let { isTabSelected: i, trialOffer: e, badgeStyle: n } = t,
        o = (0, x.V)()?.subscriptionTrial,
        l = (0, g.tS)({ intervalType: o?.interval, intervalCount: o?.intervalCount }),
        a = e.trialId === v.Tt,
        s = (0, f.Fu)(e);
    return (0, r.jsx)(P, {
        isTabSelected: i,
        badgeCopy: l,
        offerExpiresAt: e.expiresAt?.toISOString() ?? null,
        tooltipTextOverride: s,
        tooltipPosition: "right",
        hideTooltip: a,
        badgeStyle: n,
    });
}
function I(t) {
    let { isTabSelected: i, userDiscount: e, includesAmountOff: n, badgeStyle: o } = t,
        l = y.intl.formatToPlainString(y.t.iiLbvu, { percent: e.discount.amount }),
        a = n ? l : y.intl.string(y.t["/DTtr6"]),
        s = e.expiresAt?.toISOString() ?? null,
        u = (0, f.__)(e);
    return (0, r.jsx)(P, {
        isTabSelected: i,
        badgeCopy: a,
        offerExpiresAt: s,
        tooltipTextOverride: u,
        tooltipPosition: "right",
        badgeStyle: o,
    });
}
function P(t) {
    let {
            isTabSelected: i,
            badgeCopy: e,
            offerExpiresAt: n,
            tooltipTextOverride: o,
            tooltipPosition: s,
            hideTooltip: c,
            badgeStyle: m,
        } = t,
        p = (0, a.N)();
    return null != n
        ? (0, r.jsx)(b, {
              expiresAt: n,
              isTabSelected: i,
              badgeCopy: e,
              tooltipTextOverride: o,
              tooltipPosition: s,
              hideTooltip: c,
          })
        : m === h.v.GLOWING
          ? (0, r.jsx)(T.A, {
                glowing: !0,
                fit: "cover",
                glowAmount: 1,
                blurAmount: 4,
                hueRotate: 25,
                cardStyle: { background: "transparent", border: "none" },
                children: (0, r.jsx)(d.E, { type: { text: e }, variant: "expressive" }),
            })
          : (0, r.jsx)("div", {
                className: l()(S.Fg, S.AT),
                children: (0, r.jsx)(u.E, { variant: p, className: S.md, children: e }),
            });
}
