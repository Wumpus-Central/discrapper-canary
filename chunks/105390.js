"use strict";
n.d(t, { Ag: () => A, MA: () => T, fY: () => I });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(990078),
    l = n(406810),
    u = n(834730),
    c = n(496431),
    d = n(58703),
    _ = n(927578),
    f = n(234419),
    h = n(99462),
    p = n(788868),
    E = n(375708),
    m = n(386667);
function g(e) {
    let {
            isTabSelected: t,
            expiresAt: n,
            badgeCopy: s,
            className: _,
            tooltipTextOverride: f,
            tooltipPosition: h,
            hideTooltip: p = !1,
        } = e,
        g = r.useMemo(() => Date.parse(n), [n]),
        A = (0, c.A)(g, 6e4);
    if (Object.values(A).every((e) => 0 === e)) return null;
    let I = (0, i.jsxs)("div", {
        className: a()(m.Fg, m.C8, _, { [m.WO]: t }),
        children: [
            (0, i.jsx)(l.O, { size: "custom", width: 16, height: 16, color: "currentColor", className: m._q }),
            (0, i.jsx)(u.E, { variant: "eyebrow", color: "text-strong", children: s }),
        ],
    });
    return p
        ? I
        : (0, i.jsx)(o.m, {
              text: null != f ? f : (0, d.uN)(A, { days: E.t.qVGNkU, hours: E.t.wyg9a9, minutes: E.t.IzmIlV }),
              position: null != h ? h : "top",
              children: I,
          });
}
function A(e) {
    let { isTabSelected: t, trialOffer: n } = e,
        r = (0, f.V)()?.subscription_trial,
        s = (0, _.tS)({ intervalType: r?.interval, intervalCount: r?.interval_count }),
        a = n.trial_id === p.Tt,
        o = (0, h.Fu)(n);
    return (0, i.jsx)(T, {
        isTabSelected: t,
        badgeCopy: s,
        offerExpiresAt: n.expires_at,
        tooltipTextOverride: o,
        tooltipPosition: "right",
        hideTooltip: a,
    });
}
function I(e) {
    let { isTabSelected: t, userDiscount: n, includesAmountOff: r } = e,
        s = E.intl.formatToPlainString(E.t.iiLbvu, { percent: n.discount.amount }),
        a = (0, h.__)(n);
    return (0, i.jsx)(T, {
        isTabSelected: t,
        badgeCopy: r ? s : E.intl.string(E.t["/DTtr6"]),
        offerExpiresAt: n.expiresAt?.toISOString() ?? null,
        tooltipTextOverride: a,
        tooltipPosition: "right",
    });
}
function T(e) {
    let {
        isTabSelected: t,
        badgeCopy: n,
        offerExpiresAt: r,
        tooltipTextOverride: s,
        tooltipPosition: o,
        hideTooltip: l,
    } = e;
    return null != r
        ? (0, i.jsx)(g, {
              expiresAt: r,
              isTabSelected: t,
              badgeCopy: n,
              tooltipTextOverride: s,
              tooltipPosition: o,
              hideTooltip: l,
          })
        : (0, i.jsx)("div", {
              className: a()(m.Fg, m.AT),
              children: (0, i.jsx)(u.E, { variant: "eyebrow", className: m.md, children: n }),
          });
}
