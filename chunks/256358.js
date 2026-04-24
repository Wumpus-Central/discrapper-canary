n.d(t, { A: () => h, S: () => x });
var a = n(627968),
    i = n(64700),
    r = n(793574),
    s = n(688810),
    l = n(31502),
    c = n(975571),
    o = n(398523),
    d = n(881373),
    u = n(581921),
    _ = n(852218),
    m = n(382259),
    p = n(920050),
    f = n(652215),
    A = n(962995),
    g = n(985018);
function h() {
    let { analyticsLocations: e } = (0, s.Ay)(r.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, d.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
        n = o.Ay.useConfig({ location: "PremiumWhatsNewSection" }).enabled,
        h = (0, l.l)("useHardwarePartnerPerkCards"),
        { currentDate: x, nDaysInMonth: b } = (0, i.useMemo)(() => {
            let e = new Date();
            return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
        }, []);
    return (0, i.useMemo)(() => {
        let i = h ? void 0 : g.intl.string(g.t.y2b7CA);
        return {
            logitechCard: t
                ? {
                      id: p.LOGITECH_3PP_CARD_ID,
                      title: g.intl.string(A.default.OlObRa),
                      description: g.intl.format(A.default["/UNTlE"], {
                          discountPercent: d.aW,
                          termsUrl: c.A.getArticleURL(f.MVz.LOGITECH_PROMOTION),
                      }),
                      subscriptionRequired: !0,
                      progress: x.getDate() / b,
                      ctaText: g.intl.string(g.t.w7s5Qr),
                      onCtaClick: () => (0, u.P)({ partnerId: _.XY }),
                      blurTint: "#2E213D",
                      backgroundAssetUrl:
                          "https://cdn.discordapp.com/assets/content/2cc5d80403549735a2556ca7fd31d7b773826f7e46cd2a301aadb2330059d323.svg",
                      pillText: i,
                      caption: (0, a.jsx)("img", {
                          src: "https://cdn.discordapp.com/assets/content/bc7282fb45c16d6041f35bf9534fd40d9a9ec5383fd2088793ecc4e916c00f7d.svg",
                          alt: "Logitech",
                      }),
                  }
                : null,
            steelseriesCard: n
                ? {
                      id: p.RECURRING_3P_PROMOTIONS_CARD_ID,
                      title: g.intl.string(g.t.m7PucM),
                      description: g.intl.format(g.t.zh1X7u, {}),
                      subscriptionRequired: !0,
                      pillText: i,
                      caption: (0, a.jsx)("img", { src: "/assets/aae9b13becd816cf.svg", alt: "SteelSeries" }),
                      backgroundAssetUrl:
                          "https://cdn.discordapp.com/assets/content/202c441e48d2930f99f9519c9699fb047af18c4d0ec0cb490480a9a6f9d326ec.webp",
                      progress: x.getDate() / b,
                      ctaText: g.intl.string(g.t.w7s5Qr),
                      onCtaClick: () => (0, m.u)({ analyticsLocations: e, partnerIds: [_.KS, _.Cs] }),
                      blurTint: "#2E213D",
                  }
                : null,
        };
    }, [h, e, x, t, b, n]);
}
function x() {
    return (0, l.l)("premium_subscriber_home_rewards");
}
