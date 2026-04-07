n.d(t, { Ag: () => g, MA: () => A, fY: () => f });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    o = n(990078),
    a = n(397927),
    c = n(496431),
    d = n(405269),
    u = n(927578),
    h = n(234419),
    m = n(915516),
    p = n(788868),
    E = n(985018),
    S = n(377947);
function _(e) {
    let {
            isTabSelected: t,
            expiresAt: n,
            badgeCopy: r,
            className: u,
            tooltipTextOverride: h,
            tooltipPosition: m,
            hideTooltip: p = !1,
        } = e,
        _ = s.useMemo(() => Date.parse(n), [n]),
        g = (0, c.A)(_, 6e4);
    if (Object.values(g).every((e) => 0 === e)) return null;
    let f = (0, i.jsxs)("div", {
        className: l()(S.Fg, S.C8, u, { [S.WO]: t }),
        children: [
            (0, i.jsx)(a.O4, { size: "custom", width: 16, height: 16, color: "currentColor", className: S._q }),
            (0, i.jsx)(a.Text, { variant: "eyebrow", color: "text-strong", children: r }),
        ],
    });
    return p
        ? f
        : (0, i.jsx)(o.m, {
              text: null != h ? h : (0, d.uN)(g, { days: E.t.qVGNkU, hours: E.t.wyg9a9, minutes: E.t.IzmIlV }),
              position: null != m ? m : "top",
              children: f,
          });
}
function g(e) {
    let { isTabSelected: t, trialOffer: n } = e,
        s = (0, h.V)()?.subscription_trial,
        r = (0, u.tS)({ intervalType: s?.interval, intervalCount: s?.interval_count }),
        l = n.trial_id === p.Tt,
        o = (0, m.Fu)(n);
    return (0, i.jsx)(A, {
        isTabSelected: t,
        badgeCopy: r,
        offerExpiresAt: n.expires_at,
        tooltipTextOverride: o,
        tooltipPosition: "right",
        hideTooltip: l,
    });
}
function f(e) {
    let { isTabSelected: t, userDiscount: n, includesAmountOff: s } = e,
        r = E.intl.formatToPlainString(E.t.iiLbvu, { percent: n.discount.amount }),
        l = (0, m.__)(n);
    return (0, i.jsx)(A, {
        isTabSelected: t,
        badgeCopy: s ? r : E.intl.string(E.t["/DTtr6"]),
        offerExpiresAt: n.expires_at,
        tooltipTextOverride: l,
        tooltipPosition: "right",
    });
}
function A(e) {
    let {
        isTabSelected: t,
        badgeCopy: n,
        offerExpiresAt: s,
        tooltipTextOverride: r,
        tooltipPosition: o,
        hideTooltip: c,
    } = e;
    return null != s
        ? (0, i.jsx)(_, {
              expiresAt: s,
              isTabSelected: t,
              badgeCopy: n,
              tooltipTextOverride: r,
              tooltipPosition: o,
              hideTooltip: c,
          })
        : (0, i.jsx)("div", {
              className: l()(S.Fg, S.AT),
              children: (0, i.jsx)(a.Text, { variant: "eyebrow", className: S.md, children: n }),
          });
}
