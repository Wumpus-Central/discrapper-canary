n.d(t, { A: () => O });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(235986),
    l = n(224016),
    c = n(217392),
    u = n(336378),
    d = n(183942),
    f = n(927578),
    p = n(580630),
    _ = n(422936),
    h = n(234419),
    m = n(788868),
    g = n(985018),
    E = n(456919);
function b(e, t) {
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
}
let y = (e) => {
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
    O = function (e) {
        var t;
        let n,
            {
                hideCloseButton: i = !1,
                hideCloseOnFullScreen: f,
                shouldShowPrice: p,
                plan: h,
                renderAnimation: g,
                onClose: O,
                isGift: A,
                upgradeToPremiumType: v,
                className: S,
                showTrialBadge: I = !1,
                showDiscountBadge: T = !1,
            } = e,
            C = v === m.PremiumTypes.TIER_2;
        n = v === m.PremiumTypes.TIER_0 ? c.A : v === m.PremiumTypes.TIER_1 ? u.A : l.A;
        let N = (0, _.O)(),
            R = null == N || null == (t = N.discount) ? void 0 : t.amount;
        return (0, r.jsxs)("div", {
            "aria-hidden": !0,
            className: a()(
                {
                    [E.y2]: !C,
                    [E.qG]: C,
                },
                S,
            ),
            children: [
                (I || T) && (0, r.jsx)(d.A, { className: E.N8 }),
                g(),
                (0, r.jsxs)(o.A, {
                    align: o.A.Align.START,
                    justify: o.A.Justify.BETWEEN,
                    className: E.LI,
                    children: [
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(n, { className: a()(E.nr, { [E.w6]: !C }) }),
                                (I || T) &&
                                    (0, r.jsx)(y, {
                                        isTier0: v === m.PremiumTypes.TIER_0,
                                        discountAmount: T ? R : void 0,
                                    }),
                            ],
                        }),
                        !i &&
                            (0, r.jsx)(s.s_y, {
                                "data-migration-pending": !0,
                                hideOnFullscreen: f,
                                onClick: O,
                                className: E.b,
                            }),
                    ],
                }),
                p && null != h
                    ? (0, r.jsx)("div", {
                          className: E.q9,
                          children: b(h, A),
                      })
                    : null,
            ],
        });
    };
