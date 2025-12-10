n.d(t, { Z: () => O });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(600164),
    l = n(483444),
    c = n(599250),
    u = n(926153),
    d = n(27693),
    f = n(74538),
    p = n(937615),
    _ = n(622909),
    m = n(639119),
    h = n(474936),
    g = n(388032),
    E = n(716619);
function b(e, t) {
    let n = f.ZP.getDefaultPrice(e),
        { intervalType: r } = f.ZP.getInterval(e),
        i = (0, p.T4)(n.amount, n.currency);
    if (t) return i;
    switch (r) {
        case h.rV.MONTH:
            return g.intl.formatToPlainString(g.t.AbOLNu, { price: i });
        case h.rV.YEAR:
            return g.intl.formatToPlainString(g.t["rS8FA+"], { price: i });
    }
}
let y = (e) => {
        let { isTier0: t, discountAmount: n } = e,
            i = (0, m.N)(),
            s = null != i && i.trial_id === h.a7,
            l = g.intl.string(g.t.IBYG5U);
        return (
            void 0 !== n
                ? (l = g.intl.formatToPlainString(g.t.iiLbvu, { percent: n }))
                : s && (l = g.intl.string(g.t.gtNqJQ)),
            (0, r.jsx)("div", {
                className: E.trialBadgeContainer,
                children: (0, r.jsx)(o.Text, {
                    variant: "text-xs/bold",
                    className: a()(E.trialOfferText, { [E.tier0TrialOffer]: t }),
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
                plan: m,
                renderAnimation: g,
                onClose: O,
                isGift: v,
                upgradeToPremiumType: S,
                className: I,
                showTrialBadge: T = !1,
                showDiscountBadge: C = !1,
            } = e,
            A = S === h.PremiumTypes.TIER_2;
        n = S === h.PremiumTypes.TIER_0 ? c.Z : S === h.PremiumTypes.TIER_1 ? u.Z : l.Z;
        let N = (0, _.N)(),
            P = null == N || null == (t = N.discount) ? void 0 : t.amount;
        return (0, r.jsxs)("div", {
            "aria-hidden": !0,
            className: a()(
                {
                    [E.headerBackground]: !A,
                    [E.tier2HeaderBackground]: A,
                },
                I,
            ),
            children: [
                (T || C) && (0, r.jsx)(d.Z, { className: E.trialBadgeSparkles }),
                g(),
                (0, r.jsxs)(s.Z, {
                    align: s.Z.Align.START,
                    justify: s.Z.Justify.BETWEEN,
                    className: E.headerTop,
                    children: [
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(n, { className: a()(E.headerIcon, { [E.nonTier2]: !A }) }),
                                (T || C) &&
                                    (0, r.jsx)(y, {
                                        isTier0: S === h.PremiumTypes.TIER_0,
                                        discountAmount: C ? P : void 0,
                                    }),
                            ],
                        }),
                        !i &&
                            (0, r.jsx)(o.olH, {
                                "data-migration-pending": !0,
                                hideOnFullscreen: f,
                                onClick: O,
                                className: E.closeButton,
                            }),
                    ],
                }),
                p && null != m
                    ? (0, r.jsx)("div", {
                          className: E.price,
                          children: b(m, v),
                      })
                    : null,
            ],
        });
    };
