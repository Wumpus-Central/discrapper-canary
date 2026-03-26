"use strict";
n.d(t, { A: () => T });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(397927),
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
    E = n(985018),
    g = n(98748);
function A(e, t) {
    let n = _.Ay.getDefaultPrice(e),
        { intervalType: r } = _.Ay.getInterval(e),
        i = (0, f.$g)(n.amount, n.currency);
    if (t) return i;
    switch (r) {
        case m.WT.MONTH:
            return E.intl.formatToPlainString(E.t.AbOLNu, { price: i });
        case m.WT.YEAR:
            return E.intl.formatToPlainString(E.t["rS8FA+"], { price: i });
    }
}
let I = (e) => {
        let { isTier0: t, discountAmount: n } = e,
            i = (0, h.V)(),
            o = null != i && i.trial_id === m.Dw,
            l = E.intl.string(E.t.IBYG5U);
        return (
            void 0 !== n
                ? (l = E.intl.formatToPlainString(E.t.iiLbvu, { percent: n }))
                : o && (l = E.intl.string(E.t.gtNqJQ)),
            (0, r.jsx)("div", {
                className: g.TX,
                children: (0, r.jsx)(a.Text, {
                    variant: "text-xs/bold",
                    className: s()(g.El, { [g.LD]: t }),
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
                onClose: E,
                isGift: T,
                upgradeToPremiumType: S,
                className: y,
                showTrialBadge: v = !1,
                showDiscountBadge: N = !1,
            } = e,
            C = S === m.PremiumTypes.TIER_2;
        t = S === m.PremiumTypes.TIER_0 ? u.A : S === m.PremiumTypes.TIER_1 ? c.A : l.A;
        let R = (0, p.O)(),
            O = R?.discount?.amount;
        return (0, r.jsxs)("div", {
            "aria-hidden": !0,
            className: s()({ [g.y2]: !C, [g.qG]: C }, y),
            children: [
                (v || N) && (0, r.jsx)(d.A, { className: g.N8 }),
                h(),
                (0, r.jsxs)(o.A, {
                    align: o.A.Align.START,
                    justify: o.A.Justify.BETWEEN,
                    className: g.LI,
                    children: [
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(t, { className: s()(g.nr, { [g.w6]: !C }) }),
                                (v || N) &&
                                    (0, r.jsx)(I, {
                                        isTier0: S === m.PremiumTypes.TIER_0,
                                        discountAmount: N ? O : void 0,
                                    }),
                            ],
                        }),
                        !n &&
                            (0, r.jsx)(a.s_y, {
                                "data-migration-pending": !0,
                                hideOnFullscreen: i,
                                onClick: E,
                                className: g.b,
                            }),
                    ],
                }),
                _ && null != f ? (0, r.jsx)("div", { className: g.q9, children: A(f, T) }) : null,
            ],
        });
    };
