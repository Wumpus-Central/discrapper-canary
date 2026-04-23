t.d(l, { Ag: () => u, MA: () => I, fY: () => A });
var a = t(627968),
    s = t(64700),
    i = t(503698),
    n = t.n(i),
    c = t(990078),
    h = t(406810),
    o = t(834730),
    r = t(496431),
    d = t(58703),
    v = t(927578),
    g = t(234419),
    p = t(915516),
    m = t(788868),
    f = t(985018),
    w = t(386667);
function x(e) {
    let {
            isTabSelected: l,
            expiresAt: t,
            badgeCopy: i,
            className: v,
            tooltipTextOverride: g,
            tooltipPosition: p,
            hideTooltip: m = !1,
        } = e,
        x = s.useMemo(() => Date.parse(t), [t]),
        u = (0, r.A)(x, 6e4);
    if (Object.values(u).every((e) => 0 === e)) return null;
    let A = (0, a.jsxs)("div", {
        className: n()(w.Fg, w.C8, v, { [w.WO]: l }),
        children: [
            (0, a.jsx)(h.O, { size: "custom", width: 16, height: 16, color: "currentColor", className: w._q }),
            (0, a.jsx)(o.E, { variant: "eyebrow", color: "text-strong", children: i }),
        ],
    });
    return m
        ? A
        : (0, a.jsx)(c.m, {
              text: null != g ? g : (0, d.uN)(u, { days: f.t.qVGNkU, hours: f.t.wyg9a9, minutes: f.t.IzmIlV }),
              position: null != p ? p : "top",
              children: A,
          });
}
function u(e) {
    let { isTabSelected: l, trialOffer: t } = e,
        s = (0, g.V)()?.subscription_trial,
        i = (0, v.tS)({ intervalType: s?.interval, intervalCount: s?.interval_count }),
        n = t.trial_id === m.Tt,
        c = (0, p.Fu)(t);
    return (0, a.jsx)(I, {
        isTabSelected: l,
        badgeCopy: i,
        offerExpiresAt: t.expires_at,
        tooltipTextOverride: c,
        tooltipPosition: "right",
        hideTooltip: n,
    });
}
function A(e) {
    let { isTabSelected: l, userDiscount: t, includesAmountOff: s } = e,
        i = f.intl.formatToPlainString(f.t.iiLbvu, { percent: t.discount.amount }),
        n = (0, p.__)(t);
    return (0, a.jsx)(I, {
        isTabSelected: l,
        badgeCopy: s ? i : f.intl.string(f.t["/DTtr6"]),
        offerExpiresAt: t.expires_at,
        tooltipTextOverride: n,
        tooltipPosition: "right",
    });
}
function I(e) {
    let {
        isTabSelected: l,
        badgeCopy: t,
        offerExpiresAt: s,
        tooltipTextOverride: i,
        tooltipPosition: c,
        hideTooltip: h,
    } = e;
    return null != s
        ? (0, a.jsx)(x, {
              expiresAt: s,
              isTabSelected: l,
              badgeCopy: t,
              tooltipTextOverride: i,
              tooltipPosition: c,
              hideTooltip: h,
          })
        : (0, a.jsx)("div", {
              className: n()(w.Fg, w.AT),
              children: (0, a.jsx)(o.E, { variant: "eyebrow", className: w.md, children: t }),
          });
}
