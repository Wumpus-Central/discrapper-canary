i.d(t, { A: () => E, S: () => h });
var s = i(627968),
    a = i(64700),
    n = i(793574),
    r = i(688810),
    l = i(31502),
    c = i(975571),
    d = i(398523),
    o = i(881373),
    u = i(581921),
    m = i(852218),
    A = i(382259),
    p = i(920050),
    g = i(652215),
    x = i(962995),
    N = i(985018);
function E() {
    let { analyticsLocations: e } = (0, r.Ay)(n.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, o.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
        i = d.Ay.useConfig({ location: "PremiumWhatsNewSection" }).enabled,
        E = (0, l.l)("useHardwarePartnerPerkCards"),
        { currentDate: h, nDaysInMonth: f } = (0, a.useMemo)(() => {
            let e = new Date();
            return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
        }, []);
    return (0, a.useMemo)(() => {
        let a = E ? void 0 : N.intl.string(N.t.y2b7CA);
        return {
            logitechCard: t
                ? {
                      id: p.LOGITECH_3PP_CARD_ID,
                      title: N.intl.string(x.default.OlObRa),
                      description: N.intl.format(x.default["/UNTlE"], {
                          discountPercent: o.aW,
                          termsUrl: c.A.getArticleURL(g.MVz.LOGITECH_PROMOTION),
                      }),
                      subscriptionRequired: !0,
                      progress: h.getDate() / f,
                      ctaText: N.intl.string(N.t.w7s5Qr),
                      onCtaClick: () => (0, u.P)({ partnerId: m.XY }),
                      blurTint: "#2E213D",
                      backgroundAssetUrl:
                          "https://cdn.discordapp.com/assets/content/2cc5d80403549735a2556ca7fd31d7b773826f7e46cd2a301aadb2330059d323.svg",
                      pillText: a,
                      caption: (0, s.jsx)("img", {
                          src: "https://cdn.discordapp.com/assets/content/bc7282fb45c16d6041f35bf9534fd40d9a9ec5383fd2088793ecc4e916c00f7d.svg",
                          alt: "Logitech",
                      }),
                  }
                : null,
            steelseriesCard: i
                ? {
                      id: p.RECURRING_3P_PROMOTIONS_CARD_ID,
                      title: N.intl.string(N.t.m7PucM),
                      description: N.intl.format(N.t.zh1X7u, {}),
                      subscriptionRequired: !0,
                      pillText: a,
                      caption: (0, s.jsx)("img", { src: "/assets/aae9b13becd816cf.svg", alt: "SteelSeries" }),
                      backgroundAssetUrl:
                          "https://cdn.discordapp.com/assets/content/202c441e48d2930f99f9519c9699fb047af18c4d0ec0cb490480a9a6f9d326ec.webp",
                      progress: h.getDate() / f,
                      ctaText: N.intl.string(N.t.w7s5Qr),
                      onCtaClick: () => (0, A.u)({ analyticsLocations: e, partnerIds: [m.KS, m.Cs] }),
                      blurTint: "#2E213D",
                  }
                : null,
        };
    }, [E, e, h, t, f, i]);
}
function h() {
    return (0, l.l)("premium_subscriber_home_rewards");
}
