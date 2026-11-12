n.d(t, { A: () => b });
var i = n(477900);
n(582128);
var a = n(793574),
    l = n(975571),
    r = n(757036),
    s = n(933730),
    o = n(722793),
    d = n(275357),
    c = n(652215),
    u = n(116716),
    f = n(160071),
    m = n(855e3),
    g = n(792996);
function b(e) {
    let t,
        n,
        b,
        A,
        { targetElementRef: p, dismissPopover: P, children: E } = e,
        _ = (0, r.L)(),
        { phase: O } = o.A.useConfig({ location: "PremiumTabPopover" });
    return (
        _
            ? ((t = g.intl.string(m.default.IoM52w)),
              (n =
                  O === o.H.PHASE_ONE
                      ? g.intl.format(f.default["4y7mjC"], { rewardPercentage: 10 })
                      : g.intl.format(m.default["iIK+QI"], { rewardPercentage: 10 })),
              (b = s.g.NAVIGATE_TO_PERK),
              (A = g.intl.string(u.default.vlafDc)))
            : ((t = g.intl.string(m.default.IoM52w)),
              (n = g.intl.format(m.default.GPbgSS, { termsUrl: l.A.getArticleURL(c.MVz.BEST_BUY_PROMOTION) })),
              (b = s.g.OPEN_PAYMENT_MODAL)),
        (0, i.jsx)(s.A, {
            targetElementRef: p,
            dismissPopover: P,
            title: t,
            body: [n],
            assetUrl:
                O === o.H.PHASE_ONE
                    ? "https://cdn.discordapp.com/assets/content/45f067d19ee83d30fb1a0e6de99bf95fd2bba5da52311c69cc790ec4d17cbb16.png"
                    : "https://cdn.discordapp.com/assets/content/107bd2b0c71f6df724edc7bcf20465f867e1fa8f9051c0a0db5d58491b5f2a9f.png",
            ctaType: b,
            perkCardId: d.A,
            ctaTextOverride: A,
            analyticsLocation: a.A.BEST_BUY_PREMIUM_TAB_POPOVER,
            children: E,
        })
    );
}
