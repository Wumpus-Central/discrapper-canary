r.d(e, { Ag: () => A, MA: () => I, fY: () => C });
var i = r(477900),
    n = r(582128),
    o = r(503698),
    l = r.n(o),
    a = r(85463),
    s = r(406810),
    u = r(834730),
    d = r(866665),
    c = r(62010),
    p = r(496431),
    m = r(58703),
    g = r(927578),
    h = r(236056),
    T = r(872725),
    f = r(732280),
    x = r(99462),
    b = r(202541),
    v = r(105292),
    y = r(432458);
function S(t) {
    let {
            isTabSelected: e,
            expiresAt: r,
            badgeCopy: o,
            className: c,
            tooltipTextOverride: g,
            tooltipPosition: h,
            hideTooltip: T = !1,
        } = t,
        f = (0, a.N)(),
        x = n.useMemo(() => Date.parse(r), [r]),
        b = (0, p.A)(x, 6e4);
    if (Object.values(b).every((t) => 0 === t)) return null;
    let S = (0, i.jsxs)("div", {
        className: l()(y.Fg, y.C8, c, { [y.WO]: e }),
        children: [
            (0, i.jsx)(s.ClockIcon, { size: "custom", width: 12, height: 12, color: "currentColor" }),
            (0, i.jsx)(u.E, { variant: f, color: "text-strong", className: y.a7, children: o }),
        ],
    });
    return T
        ? S
        : (0, i.jsx)(d.m, {
              text: null != g ? g : (0, m.uN)(b, { days: v.t.qVGNkU, hours: v.t.wyg9a9, minutes: v.t.IzmIlV }),
              position: null != h ? h : "top",
              children: S,
          });
}
function A(t) {
    let { isTabSelected: e, trialOffer: r, badgeStyle: n } = t,
        o = (0, f.V)()?.subscriptionTrial,
        l = (0, g.tS)({ intervalType: o?.interval, intervalCount: o?.intervalCount }),
        a = r.trialId === b.Tt,
        s = (0, x.Fu)(r);
    return (0, i.jsx)(I, {
        isTabSelected: e,
        badgeCopy: l,
        offerExpiresAt: r.expiresAt?.toISOString() ?? null,
        tooltipTextOverride: s,
        tooltipPosition: "right",
        hideTooltip: a,
        badgeStyle: n,
    });
}
function C(t) {
    let { isTabSelected: e, userDiscount: r, includesAmountOff: n, badgeStyle: o } = t,
        l = v.intl.formatToPlainString(v.t.iiLbvu, { percent: r.discount.amount }),
        a = n ? l : v.intl.string(v.t["/DTtr6"]),
        s = r.expiresAt?.toISOString() ?? null,
        u = (0, x.__)(r);
    return (0, i.jsx)(I, {
        isTabSelected: e,
        badgeCopy: a,
        offerExpiresAt: s,
        tooltipTextOverride: u,
        tooltipPosition: "right",
        badgeStyle: o,
    });
}
function I(t) {
    let {
            isTabSelected: e,
            badgeCopy: r,
            offerExpiresAt: n,
            tooltipTextOverride: o,
            tooltipPosition: s,
            hideTooltip: d,
            badgeStyle: p,
        } = t,
        m = (0, a.N)();
    return null != n
        ? (0, i.jsx)(S, {
              expiresAt: n,
              isTabSelected: e,
              badgeCopy: r,
              tooltipTextOverride: o,
              tooltipPosition: s,
              hideTooltip: d,
          })
        : p === h.v.GLOWING
          ? (0, i.jsx)(T.A, {
                glowing: !0,
                fit: "cover",
                glowAmount: 1,
                blurAmount: 4,
                hueRotate: 25,
                cardStyle: { background: "transparent", border: "none" },
                children: (0, i.jsx)(c.E, { type: { text: r }, variant: "expressive" }),
            })
          : (0, i.jsx)("div", {
                className: l()(y.Fg, y.AT),
                children: (0, i.jsx)(u.E, { variant: m, className: y.md, children: r }),
            });
}
