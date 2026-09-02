i.d(e, { Ag: () => A, MA: () => O, fY: () => N });
var r = i(477900),
    o = i(582128),
    l = i(503698),
    n = i.n(l),
    s = i(406810),
    a = i(834730),
    c = i(866665),
    u = i(508770),
    d = i(496431),
    p = i(58703),
    x = i(158045),
    g = i(236056),
    h = i(872725),
    v = i(732280),
    b = i(99462),
    m = i(202541),
    j = i(375708),
    y = i(432458);
function T(t) {
    let {
            isTabSelected: e,
            expiresAt: i,
            badgeCopy: l,
            className: u,
            tooltipTextOverride: x,
            tooltipPosition: g,
            hideTooltip: h = !1,
        } = t,
        v = o.useMemo(() => Date.parse(i), [i]),
        b = (0, d.A)(v, 6e4);
    if (Object.values(b).every((t) => 0 === t)) return null;
    let m = (0, r.jsxs)("div", {
        className: n()(y.Fg, y.C8, u, { [y.WO]: e }),
        children: [
            (0, r.jsx)(s.ClockIcon, { size: "custom", width: 12, height: 12, color: "currentColor" }),
            (0, r.jsx)(a.E, { variant: "eyebrow", color: "text-strong", className: y.a7, children: l }),
        ],
    });
    return h
        ? m
        : (0, r.jsx)(c.m, {
              text: null != x ? x : (0, p.uN)(b, { days: j.t.qVGNkU, hours: j.t.wyg9a9, minutes: j.t.IzmIlV }),
              position: null != g ? g : "top",
              children: m,
          });
}
function A(t) {
    let { isTabSelected: e, trialOffer: i, badgeStyle: o } = t,
        l = (0, v.V)()?.subscriptionTrial,
        n = (0, x.tS)({ intervalType: l?.interval, intervalCount: l?.intervalCount }),
        s = i.trialId === m.Tt,
        a = (0, b.Fu)(i);
    return (0, r.jsx)(O, {
        isTabSelected: e,
        badgeCopy: n,
        offerExpiresAt: i.expiresAt?.toISOString() ?? null,
        tooltipTextOverride: a,
        tooltipPosition: "right",
        hideTooltip: s,
        badgeStyle: o,
    });
}
function N(t) {
    let { isTabSelected: e, userDiscount: i, includesAmountOff: o, badgeStyle: l } = t,
        n = j.intl.formatToPlainString(j.t.iiLbvu, { percent: i.discount.amount }),
        s = o ? n : j.intl.string(j.t["/DTtr6"]),
        a = i.expiresAt?.toISOString() ?? null,
        c = (0, b.__)(i);
    return (0, r.jsx)(O, {
        isTabSelected: e,
        badgeCopy: s,
        offerExpiresAt: a,
        tooltipTextOverride: c,
        tooltipPosition: "right",
        badgeStyle: l,
    });
}
function O(t) {
    let {
        isTabSelected: e,
        badgeCopy: i,
        offerExpiresAt: o,
        tooltipTextOverride: l,
        tooltipPosition: s,
        hideTooltip: c,
        badgeStyle: d,
    } = t;
    return null != o
        ? (0, r.jsx)(T, {
              expiresAt: o,
              isTabSelected: e,
              badgeCopy: i,
              tooltipTextOverride: l,
              tooltipPosition: s,
              hideTooltip: c,
          })
        : d === g.v.GLOWING
          ? (0, r.jsx)(h.A, {
                glowing: !0,
                fit: "cover",
                glowAmount: 1,
                blurAmount: 4,
                hueRotate: 25,
                cardStyle: { background: "transparent", border: "none" },
                children: (0, r.jsx)(u.E, { type: { text: i }, variant: "expressive" }),
            })
          : (0, r.jsx)("div", {
                className: n()(y.Fg, y.AT),
                children: (0, r.jsx)(a.E, { variant: "eyebrow", className: y.md, children: i }),
            });
}
