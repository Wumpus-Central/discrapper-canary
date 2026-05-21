n.d(t, { Ag: () => f, MA: () => v, fY: () => S });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(990078),
    o = n(406810),
    d = n(834730),
    h = n(496431),
    u = n(58703),
    c = n(428262),
    g = n(234419),
    C = n(99462),
    p = n(788868),
    I = n(375708),
    y = n(386667);
function A(e) {
    let {
            isTabSelected: t,
            expiresAt: n,
            badgeCopy: l,
            className: c,
            tooltipTextOverride: g,
            tooltipPosition: C,
            hideTooltip: p = !1,
        } = e,
        A = s.useMemo(() => Date.parse(n), [n]),
        f = (0, h.A)(A, 6e4);
    if (Object.values(f).every((e) => 0 === e)) return null;
    let S = (0, i.jsxs)("div", {
        className: r()(y.Fg, y.C8, c, { [y.WO]: t }),
        children: [
            (0, i.jsx)(o.O, { size: "custom", width: 16, height: 16, color: "currentColor", className: y._q }),
            (0, i.jsx)(d.E, { variant: "eyebrow", color: "text-strong", children: l }),
        ],
    });
    return p
        ? S
        : (0, i.jsx)(a.m, {
              text: null != g ? g : (0, u.uN)(f, { days: I.t.qVGNkU, hours: I.t.wyg9a9, minutes: I.t.IzmIlV }),
              position: null != C ? C : "top",
              children: S,
          });
}
function f(e) {
    let { isTabSelected: t, trialOffer: n } = e,
        s = (0, g.V)()?.subscription_trial,
        l = (0, c.tS)({ intervalType: s?.interval, intervalCount: s?.interval_count }),
        r = n.trial_id === p.Tt,
        a = (0, C.Fu)(n);
    return (0, i.jsx)(v, {
        isTabSelected: t,
        badgeCopy: l,
        offerExpiresAt: n.expires_at,
        tooltipTextOverride: a,
        tooltipPosition: "right",
        hideTooltip: r,
    });
}
function S(e) {
    let { isTabSelected: t, userDiscount: n, includesAmountOff: s } = e,
        l = I.intl.formatToPlainString(I.t.iiLbvu, { percent: n.discount.amount }),
        r = (0, C.__)(n);
    return (0, i.jsx)(v, {
        isTabSelected: t,
        badgeCopy: s ? l : I.intl.string(I.t["/DTtr6"]),
        offerExpiresAt: n.expiresAt?.toISOString() ?? null,
        tooltipTextOverride: r,
        tooltipPosition: "right",
    });
}
function v(e) {
    let {
        isTabSelected: t,
        badgeCopy: n,
        offerExpiresAt: s,
        tooltipTextOverride: l,
        tooltipPosition: a,
        hideTooltip: o,
    } = e;
    return null != s
        ? (0, i.jsx)(A, {
              expiresAt: s,
              isTabSelected: t,
              badgeCopy: n,
              tooltipTextOverride: l,
              tooltipPosition: a,
              hideTooltip: o,
          })
        : (0, i.jsx)("div", {
              className: r()(y.Fg, y.AT),
              children: (0, i.jsx)(d.E, { variant: "eyebrow", className: y.md, children: n }),
          });
}
