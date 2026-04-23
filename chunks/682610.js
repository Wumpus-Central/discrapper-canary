"use strict";
n.d(t, { A: () => T });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(834730),
    o = n(935462),
    l = n(235986),
    u = n(224016),
    c = n(217392),
    d = n(336378),
    _ = n(183942),
    f = n(927578),
    p = n(580630),
    h = n(422936),
    E = n(234419),
    m = n(788868),
    g = n(985018),
    A = n(778167);
let I = (e) => {
        let { isTier0: t, discountAmount: n } = e,
            i = (0, E.V)(),
            o = null != i && i.trial_id === m.Dw,
            l = g.intl.string(g.t.IBYG5U);
        return (
            void 0 !== n
                ? (l = g.intl.formatToPlainString(g.t.iiLbvu, { percent: n }))
                : o && (l = g.intl.string(g.t.gtNqJQ)),
            (0, r.jsx)("div", {
                className: A.TX,
                children: (0, r.jsx)(a.E, {
                    variant: "text-xs/bold",
                    className: s()(A.El, { [A.LD]: t }),
                    children: l,
                }),
            })
        );
    },
    T = function (e) {
        let t,
            {
                hideCloseButton: n = !1,
                hideCloseOnFullScreen: i,
                shouldShowPrice: a,
                plan: E,
                renderAnimation: T,
                onClose: S,
                isGift: y,
                upgradeToPremiumType: N,
                className: v,
                showTrialBadge: C = !1,
                showDiscountBadge: O = !1,
            } = e,
            R = N === m.PremiumTypes.TIER_2;
        t = N === m.PremiumTypes.TIER_0 ? c.A : N === m.PremiumTypes.TIER_1 ? d.A : u.A;
        let b = (0, h.O)(),
            D = b?.discount?.amount;
        return (0, r.jsxs)("div", {
            "aria-hidden": !0,
            className: s()({ [A.y2]: !R, [A.qG]: R }, v),
            children: [
                (C || O) && (0, r.jsx)(_.A, { className: A.N8 }),
                T(),
                (0, r.jsxs)(l.A, {
                    align: l.A.Align.START,
                    justify: l.A.Justify.BETWEEN,
                    className: A.LI,
                    children: [
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(t, { className: s()(A.nr, { [A.w6]: !R }) }),
                                (C || O) &&
                                    (0, r.jsx)(I, {
                                        isTier0: N === m.PremiumTypes.TIER_0,
                                        discountAmount: O ? D : void 0,
                                    }),
                            ],
                        }),
                        !n &&
                            (0, r.jsx)(o.s_, {
                                "data-migration-pending": !0,
                                hideOnFullscreen: i,
                                onClick: S,
                                className: A.b,
                            }),
                    ],
                }),
                a && null != E
                    ? (0, r.jsx)("div", {
                          className: A.q9,
                          children: (function (e, t) {
                              let n = f.Ay.getDefaultPrice(e),
                                  { intervalType: r } = f.Ay.getInterval(e),
                                  i = (0, p.$g)(n.amount, n.currency);
                              if (t) return i;
                              switch (r) {
                                  case m.WT.MONTH:
                                      return g.intl.formatToPlainString(g.t.AbOLNu, { price: i });
                                  case m.WT.YEAR:
                                      return g.intl.formatToPlainString(g.t["rS8FA+"], { price: i });
                              }
                          })(E, y),
                      })
                    : null,
            ],
        });
    };
