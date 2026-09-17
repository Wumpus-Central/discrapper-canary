i.d(e, { Ag: () => S, MA: () => C, fY: () => y });
var r = i(477900),
    o = i(582128),
    n = i(503698),
    l = i.n(n),
    s = i(85463),
    a = i(406810),
    u = i(834730),
    c = i(866665),
    d = i(508770),
    p = i(496431),
    g = i(58703),
    x = i(158045),
    v = i(236056),
    h = i(872725),
    b = i(732280),
    m = i(99462),
    T = i(202541),
    f = i(375708),
    j = i(432458);
function A(t) {
    let {
            isTabSelected: e,
            expiresAt: i,
            badgeCopy: n,
            className: d,
            tooltipTextOverride: x,
            tooltipPosition: v,
            hideTooltip: h = !1,
        } = t,
        b = (0, s.N)(),
        m = o.useMemo(() => Date.parse(i), [i]),
        T = (0, p.A)(m, 6e4);
    if (Object.values(T).every((t) => 0 === t)) return null;
    let A = (0, r.jsxs)("div", {
        className: l()(j.Fg, j.C8, d, { [j.WO]: e }),
        children: [
            (0, r.jsx)(a.ClockIcon, { size: "custom", width: 12, height: 12, color: "currentColor" }),
            (0, r.jsx)(u.E, { variant: b, color: "text-strong", className: j.a7, children: n }),
        ],
    });
    return h
        ? A
        : (0, r.jsx)(c.m, {
              text: null != x ? x : (0, g.uN)(T, { days: f.t.qVGNkU, hours: f.t.wyg9a9, minutes: f.t.IzmIlV }),
              position: null != v ? v : "top",
              children: A,
          });
}
function S(t) {
    let { isTabSelected: e, trialOffer: i, badgeStyle: o } = t,
        n = (0, b.V)()?.subscriptionTrial,
        l = (0, x.tS)({ intervalType: n?.interval, intervalCount: n?.intervalCount }),
        s = i.trialId === T.Tt,
        a = (0, m.Fu)(i);
    return (0, r.jsx)(C, {
        isTabSelected: e,
        badgeCopy: l,
        offerExpiresAt: i.expiresAt?.toISOString() ?? null,
        tooltipTextOverride: a,
        tooltipPosition: "right",
        hideTooltip: s,
        badgeStyle: o,
    });
}
function y(t) {
    let { isTabSelected: e, userDiscount: i, includesAmountOff: o, badgeStyle: n } = t,
        l = f.intl.formatToPlainString(f.t.iiLbvu, { percent: i.discount.amount }),
        s = o ? l : f.intl.string(f.t["/DTtr6"]),
        a = i.expiresAt?.toISOString() ?? null,
        u = (0, m.__)(i);
    return (0, r.jsx)(C, {
        isTabSelected: e,
        badgeCopy: s,
        offerExpiresAt: a,
        tooltipTextOverride: u,
        tooltipPosition: "right",
        badgeStyle: n,
    });
}
function C(t) {
    let {
            isTabSelected: e,
            badgeCopy: i,
            offerExpiresAt: o,
            tooltipTextOverride: n,
            tooltipPosition: a,
            hideTooltip: c,
            badgeStyle: p,
        } = t,
        g = (0, s.N)();
    return null != o
        ? (0, r.jsx)(A, {
              expiresAt: o,
              isTabSelected: e,
              badgeCopy: i,
              tooltipTextOverride: n,
              tooltipPosition: a,
              hideTooltip: c,
          })
        : p === v.v.GLOWING
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
                className: l()(j.Fg, j.AT),
                children: (0, r.jsx)(u.E, { variant: g, className: j.md, children: i }),
            });
}
