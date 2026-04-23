a.d(l, { Ag: () => u, MA: () => I, fY: () => A });
var t = a(627968),
    s = a(64700),
    i = a(503698),
    n = a.n(i),
    c = a(990078),
    h = a(406810),
    r = a(834730),
    o = a(496431),
    d = a(405269),
    v = a(927578),
    g = a(234419),
    p = a(915516),
    m = a(788868),
    f = a(985018),
    w = a(386667);
function x(e) {
    let {
            isTabSelected: l,
            expiresAt: a,
            badgeCopy: i,
            className: v,
            tooltipTextOverride: g,
            tooltipPosition: p,
            hideTooltip: m = !1,
        } = e,
        x = s.useMemo(() => Date.parse(a), [a]),
        u = (0, o.A)(x, 6e4);
    if (Object.values(u).every((e) => 0 === e)) return null;
    let A = (0, t.jsxs)("div", {
        className: n()(w.Fg, w.C8, v, { [w.WO]: l }),
        children: [
            (0, t.jsx)(h.O, { size: "custom", width: 16, height: 16, color: "currentColor", className: w._q }),
            (0, t.jsx)(r.E, { variant: "eyebrow", color: "text-strong", children: i }),
        ],
    });
    return m
        ? A
        : (0, t.jsx)(c.m, {
              text: null != g ? g : (0, d.uN)(u, { days: f.t.qVGNkU, hours: f.t.wyg9a9, minutes: f.t.IzmIlV }),
              position: null != p ? p : "top",
              children: A,
          });
}
function u(e) {
    let { isTabSelected: l, trialOffer: a } = e,
        s = (0, g.V)()?.subscription_trial,
        i = (0, v.tS)({ intervalType: s?.interval, intervalCount: s?.interval_count }),
        n = a.trial_id === m.Tt,
        c = (0, p.Fu)(a);
    return (0, t.jsx)(I, {
        isTabSelected: l,
        badgeCopy: i,
        offerExpiresAt: a.expires_at,
        tooltipTextOverride: c,
        tooltipPosition: "right",
        hideTooltip: n,
    });
}
function A(e) {
    let { isTabSelected: l, userDiscount: a, includesAmountOff: s } = e,
        i = f.intl.formatToPlainString(f.t.iiLbvu, { percent: a.discount.amount }),
        n = (0, p.__)(a);
    return (0, t.jsx)(I, {
        isTabSelected: l,
        badgeCopy: s ? i : f.intl.string(f.t["/DTtr6"]),
        offerExpiresAt: a.expires_at,
        tooltipTextOverride: n,
        tooltipPosition: "right",
    });
}
function I(e) {
    let {
        isTabSelected: l,
        badgeCopy: a,
        offerExpiresAt: s,
        tooltipTextOverride: i,
        tooltipPosition: c,
        hideTooltip: h,
    } = e;
    return null != s
        ? (0, t.jsx)(x, {
              expiresAt: s,
              isTabSelected: l,
              badgeCopy: a,
              tooltipTextOverride: i,
              tooltipPosition: c,
              hideTooltip: h,
          })
        : (0, t.jsx)("div", {
              className: n()(w.Fg, w.AT),
              children: (0, t.jsx)(r.E, { variant: "eyebrow", className: w.md, children: a }),
          });
}
