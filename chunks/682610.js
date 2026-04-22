n.d(t, { A: () => I });
var a = n(627968);
n(64700);
var r = n(503698),
    l = n.n(r),
    i = n(834730),
    s = n(935462),
    o = n(235986),
    u = n(224016),
    c = n(217392),
    d = n(336378),
    m = n(183942),
    p = n(927578),
    _ = n(580630),
    f = n(422936),
    g = n(234419),
    b = n(788868),
    v = n(985018),
    x = n(10039);
let h = (e) => {
        let { isTier0: t, discountAmount: n } = e,
            r = (0, g.V)(),
            s = null != r && r.trial_id === b.Dw,
            o = v.intl.string(v.t.IBYG5U);
        return (
            void 0 !== n
                ? (o = v.intl.formatToPlainString(v.t.iiLbvu, { percent: n }))
                : s && (o = v.intl.string(v.t.gtNqJQ)),
            (0, a.jsx)("div", {
                className: x.TX,
                children: (0, a.jsx)(i.E, {
                    variant: "text-xs/bold",
                    className: l()(x.El, { [x.LD]: t }),
                    children: o,
                }),
            })
        );
    },
    I = function (e) {
        let t,
            {
                hideCloseButton: n = !1,
                hideCloseOnFullScreen: r,
                shouldShowPrice: i,
                plan: g,
                renderAnimation: I,
                onClose: A,
                isGift: y,
                upgradeToPremiumType: T,
                className: E,
                showTrialBadge: C = !1,
                showDiscountBadge: P = !1,
            } = e,
            L = T === b.PremiumTypes.TIER_2;
        t = T === b.PremiumTypes.TIER_0 ? c.A : T === b.PremiumTypes.TIER_1 ? d.A : u.A;
        let S = (0, f.O)(),
            N = S?.discount?.amount;
        return (0, a.jsxs)("div", {
            "aria-hidden": !0,
            className: l()({ [x.y2]: !L, [x.qG]: L }, E),
            children: [
                (C || P) && (0, a.jsx)(m.A, { className: x.N8 }),
                I(),
                (0, a.jsxs)(o.A, {
                    align: o.A.Align.START,
                    justify: o.A.Justify.BETWEEN,
                    className: x.LI,
                    children: [
                        (0, a.jsxs)("div", {
                            children: [
                                (0, a.jsx)(t, { className: l()(x.nr, { [x.w6]: !L }) }),
                                (C || P) &&
                                    (0, a.jsx)(h, {
                                        isTier0: T === b.PremiumTypes.TIER_0,
                                        discountAmount: P ? N : void 0,
                                    }),
                            ],
                        }),
                        !n &&
                            (0, a.jsx)(s.s_, {
                                "data-migration-pending": !0,
                                hideOnFullscreen: r,
                                onClick: A,
                                className: x.b,
                            }),
                    ],
                }),
                i && null != g
                    ? (0, a.jsx)("div", {
                          className: x.q9,
                          children: (function (e, t) {
                              let n = p.Ay.getDefaultPrice(e),
                                  { intervalType: a } = p.Ay.getInterval(e),
                                  r = (0, _.$g)(n.amount, n.currency);
                              if (t) return r;
                              switch (a) {
                                  case b.WT.MONTH:
                                      return v.intl.formatToPlainString(v.t.AbOLNu, { price: r });
                                  case b.WT.YEAR:
                                      return v.intl.formatToPlainString(v.t["rS8FA+"], { price: r });
                              }
                          })(g, y),
                      })
                    : null,
            ],
        });
    };
