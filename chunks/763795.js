"use strict";
n.d(t, { A: () => T });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(235986),
    l = n(224016),
    u = n(217392),
    c = n(336378),
    d = n(183942),
    _ = n(927578),
    f = n(580630),
    p = n(422936),
    h = n(234419),
    m = n(788868),
    g = n(985018),
    E = n(456919);
function A(e, t) {
    let n = _.Ay.getDefaultPrice(e),
        { intervalType: r } = _.Ay.getInterval(e),
        i = (0, f.$g)(n.amount, n.currency);
    if (t) return i;
    switch (r) {
        case m.WT.MONTH:
            return g.intl.formatToPlainString(g.t.AbOLNu, { price: i });
        case m.WT.YEAR:
            return g.intl.formatToPlainString(g.t["rS8FA+"], { price: i });
    }
}
let I = (e) => {
        let { isTier0: t, discountAmount: n } = e,
            i = (0, h.V)(),
            o = null != i && i.trial_id === m.Dw,
            l = g.intl.string(g.t.IBYG5U);
        return (
            void 0 !== n
                ? (l = g.intl.formatToPlainString(g.t.iiLbvu, { percent: n }))
                : o && (l = g.intl.string(g.t.gtNqJQ)),
            (0, r.jsx)("div", {
                className: E.TX,
                children: (0, r.jsx)(s.Text, {
                    variant: "text-xs/bold",
                    className: a()(E.El, { [E.LD]: t }),
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
                shouldShowPrice: _,
                plan: f,
                renderAnimation: h,
                onClose: g,
                isGift: T,
                upgradeToPremiumType: y,
                className: S,
                showTrialBadge: v = !1,
                showDiscountBadge: C = !1,
            } = e,
            b = y === m.PremiumTypes.TIER_2;
        t = y === m.PremiumTypes.TIER_0 ? u.A : y === m.PremiumTypes.TIER_1 ? c.A : l.A;
        let N = (0, p.O)(),
            R = N?.discount?.amount;
        return (0, r.jsxs)("div", {
            "aria-hidden": !0,
            className: a()({ [E.y2]: !b, [E.qG]: b }, S),
            children: [
                (v || C) && (0, r.jsx)(d.A, { className: E.N8 }),
                h(),
                (0, r.jsxs)(o.A, {
                    align: o.A.Align.START,
                    justify: o.A.Justify.BETWEEN,
                    className: E.LI,
                    children: [
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(t, { className: a()(E.nr, { [E.w6]: !b }) }),
                                (v || C) &&
                                    (0, r.jsx)(I, {
                                        isTier0: y === m.PremiumTypes.TIER_0,
                                        discountAmount: C ? R : void 0,
                                    }),
                            ],
                        }),
                        !n &&
                            (0, r.jsx)(s.s_y, {
                                "data-migration-pending": !0,
                                hideOnFullscreen: i,
                                onClick: g,
                                className: E.b,
                            }),
                    ],
                }),
                _ && null != f ? (0, r.jsx)("div", { className: E.q9, children: A(f, T) }) : null,
            ],
        });
    };
