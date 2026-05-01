n.d(t, { Ag: () => v, MA: () => m, fY: () => A });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    a = n(990078),
    o = n(406810),
    h = n(834730),
    d = n(496431),
    u = n(58703),
    c = n(927578),
    g = n(234419),
    C = n(915516),
    p = n(788868),
    y = n(985018),
    I = n(386667);
function f(e) {
    let {
            isTabSelected: t,
            expiresAt: n,
            badgeCopy: r,
            className: c,
            tooltipTextOverride: g,
            tooltipPosition: C,
            hideTooltip: p = !1,
        } = e,
        f = s.useMemo(() => Date.parse(n), [n]),
        v = (0, d.A)(f, 6e4);
    if (Object.values(v).every((e) => 0 === e)) return null;
    let A = (0, i.jsxs)("div", {
        className: l()(I.Fg, I.C8, c, { [I.WO]: t }),
        children: [
            (0, i.jsx)(o.O, { size: "custom", width: 16, height: 16, color: "currentColor", className: I._q }),
            (0, i.jsx)(h.E, { variant: "eyebrow", color: "text-strong", children: r }),
        ],
    });
    return p
        ? A
        : (0, i.jsx)(a.m, {
              text: null != g ? g : (0, u.uN)(v, { days: y.t.qVGNkU, hours: y.t.wyg9a9, minutes: y.t.IzmIlV }),
              position: null != C ? C : "top",
              children: A,
          });
}
function v(e) {
    let { isTabSelected: t, trialOffer: n } = e,
        s = (0, g.V)()?.subscription_trial,
        r = (0, c.tS)({ intervalType: s?.interval, intervalCount: s?.interval_count }),
        l = n.trial_id === p.Tt,
        a = (0, C.Fu)(n);
    return (0, i.jsx)(m, {
        isTabSelected: t,
        badgeCopy: r,
        offerExpiresAt: n.expires_at,
        tooltipTextOverride: a,
        tooltipPosition: "right",
        hideTooltip: l,
    });
}
function A(e) {
    let { isTabSelected: t, userDiscount: n, includesAmountOff: s } = e,
        r = y.intl.formatToPlainString(y.t.iiLbvu, { percent: n.discount.amount }),
        l = (0, C.__)(n);
    return (0, i.jsx)(m, {
        isTabSelected: t,
        badgeCopy: s ? r : y.intl.string(y.t["/DTtr6"]),
        offerExpiresAt: n.expires_at,
        tooltipTextOverride: l,
        tooltipPosition: "right",
    });
}
function m(e) {
    let {
        isTabSelected: t,
        badgeCopy: n,
        offerExpiresAt: s,
        tooltipTextOverride: r,
        tooltipPosition: a,
        hideTooltip: o,
    } = e;
    return null != s
        ? (0, i.jsx)(f, {
              expiresAt: s,
              isTabSelected: t,
              badgeCopy: n,
              tooltipTextOverride: r,
              tooltipPosition: a,
              hideTooltip: o,
          })
        : (0, i.jsx)("div", {
              className: l()(I.Fg, I.AT),
              children: (0, i.jsx)(h.E, { variant: "eyebrow", className: I.md, children: n }),
          });
}
