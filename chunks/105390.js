n.d(t, {
    Ag: () => O,
    MA: () => v,
    fY: () => A,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(554146),
    l = n(990078),
    c = n(397927),
    u = n(496431),
    d = n(826673),
    f = n(405269),
    p = n(927578),
    _ = n(804412),
    h = n(234419),
    m = n(915516),
    g = n(985018),
    E = n(271300);
let b = 60000;
function y(e) {
    let {
            isTabSelected: t,
            expiresAt: n,
            badgeCopy: a,
            className: p,
            tooltipTextOverride: _,
            tooltipPosition: h,
            shouldShowOfferReminder: m,
        } = e,
        y = i.useMemo(() => Date.parse(n), [n]),
        O = (0, u.A)(y, b),
        A = (0, d.k8)(o.M.NITRO_TAB_BADGE_OFFER_REMINDER),
        v = m && !A;
    return Object.values(O).every((e) => 0 === e)
        ? null
        : (0, r.jsx)(l.m, {
              text:
                  null != _
                      ? _
                      : (0, f.uN)(O, {
                            days: g.t.qVGNkU,
                            hours: g.t.wyg9a9,
                            minutes: g.t.IzmIlV,
                        }),
              position: null != h ? h : "top",
              children: (0, r.jsxs)("div", {
                  className: s()(E.Fg, v ? E.AT : E.C8, p, { [E.WO]: t }),
                  children: [
                      (0, r.jsx)(c.O4, {
                          size: "custom",
                          width: 20,
                          height: 20,
                          color: v ? "white" : "currentColor",
                          className: E._q,
                      }),
                      (0, r.jsx)(c.Text, {
                          variant: "eyebrow",
                          color: v ? "always-white" : "text-strong",
                          children: a,
                      }),
                  ],
              }),
          });
}
function O(e) {
    var t;
    let { isTabSelected: n, trialOffer: i, shouldShowOfferReminder: a } = e,
        s = null == (t = (0, h.V)()) ? void 0 : t.subscription_trial,
        o = (0, p.tS)({
            intervalType: null == s ? void 0 : s.interval,
            intervalCount: null == s ? void 0 : s.interval_count,
        }),
        l = (0, m.Fu)(i),
        { hasExperimentalTooltip: c } = (0, _.Ay)("PremiumOfferTabBadge");
    return (0, r.jsx)(v, {
        isTabSelected: n,
        badgeCopy: o,
        offerExpiresAt: i.expires_at,
        tooltipTextOverride: c ? l : null,
        tooltipPosition: c ? "right" : "top",
        shouldShowOfferReminder: a,
    });
}
function A(e) {
    let { isTabSelected: t, userDiscount: n, includesAmountOff: i, shouldShowOfferReminder: a } = e,
        s = g.intl.formatToPlainString(g.t.iiLbvu, { percent: n.discount.amount }),
        o = (0, m.__)(n),
        { hasExperimentalTooltip: l } = (0, _.Ay)("PremiumOfferTabBadge");
    return (0, r.jsx)(v, {
        isTabSelected: t,
        badgeCopy: i ? s : g.intl.string(g.t["/DTtr6"]),
        offerExpiresAt: n.expires_at,
        tooltipTextOverride: l ? o : null,
        tooltipPosition: l ? "right" : "top",
        shouldShowOfferReminder: a,
    });
}
function v(e) {
    let {
        isTabSelected: t,
        badgeCopy: n,
        offerExpiresAt: i,
        tooltipTextOverride: a,
        tooltipPosition: o,
        shouldShowOfferReminder: l = !1,
    } = e;
    return null != i
        ? (0, r.jsx)(y, {
              expiresAt: i,
              isTabSelected: t,
              badgeCopy: n,
              tooltipTextOverride: a,
              tooltipPosition: o,
              shouldShowOfferReminder: l,
          })
        : (0, r.jsx)("div", {
              className: s()(E.Fg, E.AT),
              children: (0, r.jsx)(c.Text, {
                  variant: "eyebrow",
                  className: E.md,
                  children: n,
              }),
          });
}
