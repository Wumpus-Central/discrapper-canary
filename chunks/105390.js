i.d(e, { Ag: () => S, MA: () => C, fY: () => A });
var r = i(477900),
    n = i(582128),
    o = i(503698),
    l = i.n(o),
    a = i(406810),
    s = i(834730),
    u = i(866665),
    d = i(62010),
    c = i(496431),
    p = i(58703),
    m = i(24482),
    g = i(236056),
    h = i(872725),
    T = i(732280),
    f = i(99462),
    x = i(202541),
    b = i(105292),
    v = i(432458);
function y(t) {
    let {
            isTabSelected: e,
            expiresAt: i,
            badgeCopy: o,
            className: d,
            tooltipTextOverride: m,
            tooltipPosition: g,
            hideTooltip: h = !1,
        } = t,
        T = n.useMemo(() => Date.parse(i), [i]),
        f = (0, c.A)(T, 6e4);
    if (Object.values(f).every((t) => 0 === t)) return null;
    let x = (0, r.jsxs)("div", {
        className: l()(v.Fg, v.C8, d, { [v.WO]: e }),
        children: [
            (0, r.jsx)(a.ClockIcon, { size: "custom", width: 12, height: 12, color: "currentColor" }),
            (0, r.jsx)(s.E, { variant: "body-xs/semibold", color: "text-strong", className: v.a7, children: o }),
        ],
    });
    return h
        ? x
        : (0, r.jsx)(u.m, {
              text: null != m ? m : (0, p.uN)(f, { days: b.t.qVGNkU, hours: b.t.wyg9a9, minutes: b.t.IzmIlV }),
              position: null != g ? g : "top",
              children: x,
          });
}
function S(t) {
    let { isTabSelected: e, trialOffer: i, badgeStyle: n } = t,
        o = (0, T.V)()?.subscriptionTrial,
        l = (0, m.tS)({ intervalType: o?.interval, intervalCount: o?.intervalCount }),
        a = i.trialId === x.Tt,
        s = (0, f.Fu)(i);
    return (0, r.jsx)(C, {
        isTabSelected: e,
        badgeCopy: l,
        offerExpiresAt: i.expiresAt?.toISOString() ?? null,
        tooltipTextOverride: s,
        tooltipPosition: "right",
        hideTooltip: a,
        badgeStyle: n,
    });
}
function A(t) {
    let { isTabSelected: e, userDiscount: i, includesAmountOff: n, badgeStyle: o } = t,
        l = b.intl.formatToPlainString(b.t.iiLbvu, { percent: i.discount.amount }),
        a = n ? l : b.intl.string(b.t["/DTtr6"]),
        s = i.expiresAt?.toISOString() ?? null,
        u = (0, f.__)(i);
    return (0, r.jsx)(C, {
        isTabSelected: e,
        badgeCopy: a,
        offerExpiresAt: s,
        tooltipTextOverride: u,
        tooltipPosition: "right",
        badgeStyle: o,
    });
}
function C(t) {
    let {
        isTabSelected: e,
        badgeCopy: i,
        offerExpiresAt: n,
        tooltipTextOverride: o,
        tooltipPosition: a,
        hideTooltip: u,
        badgeStyle: c,
    } = t;
    return null != n
        ? (0, r.jsx)(y, {
              expiresAt: n,
              isTabSelected: e,
              badgeCopy: i,
              tooltipTextOverride: o,
              tooltipPosition: a,
              hideTooltip: u,
          })
        : c === g.v.GLOWING
          ? (0, r.jsx)(h.A, {
                glowing: !0,
                fit: "cover",
                glowAmount: 1,
                blurAmount: 4,
                hueRotate: 25,
                cardStyle: { background: "transparent", border: "none" },
                children: (0, r.jsx)(d.E, { type: { text: i }, variant: "expressive" }),
            })
          : (0, r.jsx)("div", {
                className: l()(v.Fg, v.AT),
                children: (0, r.jsx)(s.E, { variant: "body-xs/semibold", className: v.md, children: i }),
            });
}
