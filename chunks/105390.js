var r = i(477900),
    n = i(582128),
    o = i(503698),
    l = i.n(o),
    a = i(406810),
    s = i(834730),
    u = i(866665),
    d = i(805251),
    c = i(496431),
    p = i(5377),
    m = i(448645),
    g = i(236056),
    h = i(872725),
    T = i(77528),
    f = i(99462),
    b = i(682901),
    x = i(792996),
    y = i(432458);
function v(t) {
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
    let b = (0, r.jsxs)("div", {
        className: l()(y.Fg, y.C8, d, { [y.WO]: e }),
        children: [
            (0, r.jsx)(a.ClockIcon, { size: "custom", width: 12, height: 12, color: "currentColor" }),
            (0, r.jsx)(s.E, { variant: "body-xs/semibold", color: "text-strong", className: y.a7, children: o }),
        ],
    });
    return h
        ? b
        : (0, r.jsx)(u.m, {
              text: null != m ? m : (0, p.uN)(f, { days: x.t.qVGNkU, hours: x.t.wyg9a9, minutes: x.t.IzmIlV }),
              position: null != g ? g : "top",
              children: b,
          });
}
function S(t) {
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
        ? (0, r.jsx)(v, {
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
                className: l()(y.Fg, y.AT),
                children: (0, r.jsx)(s.E, { variant: "body-xs/semibold", className: y.md, children: i }),
            });
}
i.d(
    e,
    {},
    {
        Ag: function (t) {
            let { isTabSelected: e, trialOffer: i, badgeStyle: n } = t,
                o = (0, T.V)()?.subscriptionTrial,
                l = (0, m.tS)({ intervalType: o?.interval, intervalCount: o?.intervalCount }),
                a = i.trialId === b.Tt,
                s = (0, f.Fu)(i);
            return (0, r.jsx)(S, {
                isTabSelected: e,
                badgeCopy: l,
                offerExpiresAt: i.expiresAt?.toISOString() ?? null,
                tooltipTextOverride: s,
                tooltipPosition: "right",
                hideTooltip: a,
                badgeStyle: n,
            });
        },
        MA: S,
        fY: function (t) {
            let { isTabSelected: e, userDiscount: i, includesAmountOff: n, badgeStyle: o } = t,
                l = x.intl.formatToPlainString(x.t.iiLbvu, { percent: i.discount.amount }),
                a = n ? l : x.intl.string(x.t["/DTtr6"]),
                s = i.expiresAt?.toISOString() ?? null,
                u = (0, f.__)(i);
            return (0, r.jsx)(S, {
                isTabSelected: e,
                badgeCopy: a,
                offerExpiresAt: s,
                tooltipTextOverride: u,
                tooltipPosition: "right",
                badgeStyle: o,
            });
        },
    },
);
