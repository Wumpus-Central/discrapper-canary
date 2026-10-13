n.d(t, { A: () => b });
var i = n(477900);
n(582128);
var a = n(793574),
    r = n(975571),
    l = n(757036),
    s = n(933730),
    o = n(722793),
    d = n(275357),
    c = n(652215),
    u = n(685477),
    m = n(116314),
    f = n(429605),
    g = n(660183);
function b(e) {
    let t,
        n,
        b,
        p,
        { targetElementRef: P, dismissPopover: _, children: T } = e,
        C = (0, l.L)(),
        { phase: A } = o.A.useConfig({ location: "PremiumTabPopover" });
    return (
        C
            ? ((t = g.intl.string(f.default["er+5dl"])),
              (n =
                  A === o.H.PHASE_ONE
                      ? g.intl.format(m.default["4y7mjC"], { rewardPercentage: d.xU })
                      : g.intl.format(f.default.b9LwCb, { rewardPercentage: d.xU })),
              (b = s.g.NAVIGATE_TO_PERK),
              (p = g.intl.string(u.default.vlafDc)))
            : ((t = g.intl.string(f.default["er+5dl"])),
              (n = g.intl.format(f.default.xL7Cfe, {
                  rewardPercentage: d.xU,
                  termsUrl: r.A.getArticleURL(c.MVz.BEST_BUY_PROMOTION),
              })),
              (b = s.g.OPEN_PAYMENT_MODAL)),
        (0, i.jsx)(s.A, {
            targetElementRef: P,
            dismissPopover: _,
            title: t,
            body: [n],
            assetUrl:
                A === o.H.PHASE_ONE
                    ? "https://cdn.discordapp.com/assets/content/45f067d19ee83d30fb1a0e6de99bf95fd2bba5da52311c69cc790ec4d17cbb16.png"
                    : "https://cdn.discordapp.com/assets/content/107bd2b0c71f6df724edc7bcf20465f867e1fa8f9051c0a0db5d58491b5f2a9f.png",
            ctaType: b,
            perkCardId: d.AQ,
            ctaTextOverride: p,
            analyticsLocation: a.A.BEST_BUY_PREMIUM_TAB_POPOVER,
            children: T,
        })
    );
}
