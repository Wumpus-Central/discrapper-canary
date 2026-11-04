n.d(t, { A: () => b });
var i = n(477900);
n(582128);
var a = n(793574),
    r = n(975571),
    l = n(757036),
    o = n(933730),
    s = n(722793),
    d = n(275357),
    c = n(652215),
    u = n(116716),
    m = n(160071),
    f = n(855e3),
    g = n(792996);
function b(e) {
    let t,
        n,
        b,
        p,
        { targetElementRef: A, dismissPopover: P, children: E } = e,
        C = (0, l.L)(),
        { phase: T } = s.A.useConfig({ location: "PremiumTabPopover" });
    return (
        C
            ? ((t = g.intl.string(f.default["er+5dl"])),
              (n =
                  T === s.H.PHASE_ONE
                      ? g.intl.format(m.default["4y7mjC"], { rewardPercentage: 10 })
                      : g.intl.format(f.default.b9LwCb, { rewardPercentage: 10 })),
              (b = o.g.NAVIGATE_TO_PERK),
              (p = g.intl.string(u.default.vlafDc)))
            : ((t = g.intl.string(f.default["er+5dl"])),
              (n = g.intl.format(f.default.xL7Cfe, {
                  rewardPercentage: 10,
                  termsUrl: r.A.getArticleURL(c.MVz.BEST_BUY_PROMOTION),
              })),
              (b = o.g.OPEN_PAYMENT_MODAL)),
        (0, i.jsx)(o.A, {
            targetElementRef: A,
            dismissPopover: P,
            title: t,
            body: [n],
            assetUrl:
                T === s.H.PHASE_ONE
                    ? "https://cdn.discordapp.com/assets/content/45f067d19ee83d30fb1a0e6de99bf95fd2bba5da52311c69cc790ec4d17cbb16.png"
                    : "https://cdn.discordapp.com/assets/content/107bd2b0c71f6df724edc7bcf20465f867e1fa8f9051c0a0db5d58491b5f2a9f.png",
            ctaType: b,
            perkCardId: d.A,
            ctaTextOverride: p,
            analyticsLocation: a.A.BEST_BUY_PREMIUM_TAB_POPOVER,
            children: E,
        })
    );
}
