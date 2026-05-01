"use strict";
n.d(t, { A: () => g, S: () => A });
var i = n(627968),
    r = n(64700),
    s = n(793574),
    a = n(688810),
    o = n(31502),
    l = n(975571),
    u = n(398523),
    c = n(881373),
    d = n(581921),
    _ = n(852218),
    f = n(382259),
    h = n(920050),
    p = n(652215),
    E = n(962995),
    m = n(375708);
function g() {
    let { analyticsLocations: e } = (0, a.Ay)(s.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, c.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
        n = u.Ay.useConfig({ location: "PremiumWhatsNewSection" }).enabled,
        g = (0, o.l)("useHardwarePartnerPerkCards"),
        { currentDate: A, nDaysInMonth: I } = (0, r.useMemo)(() => {
            let e = new Date();
            return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
        }, []);
    return (0, r.useMemo)(() => {
        let r = g ? void 0 : m.intl.string(m.t.y2b7CA);
        return {
            logitechCard: t
                ? {
                      id: h.LOGITECH_3PP_CARD_ID,
                      title: m.intl.string(E.default.OlObRa),
                      description: m.intl.format(E.default["/UNTlE"], {
                          discountPercent: c.aW,
                          termsUrl: l.A.getArticleURL(p.MVz.LOGITECH_PROMOTION),
                      }),
                      subscriptionRequired: !0,
                      progress: A.getDate() / I,
                      ctaText: m.intl.string(m.t.w7s5Qr),
                      onCtaClick: () => (0, d.P)({ partnerId: _.XY }),
                      blurTint: "#2E213D",
                      backgroundAssetUrl:
                          "https://cdn.discordapp.com/assets/content/2cc5d80403549735a2556ca7fd31d7b773826f7e46cd2a301aadb2330059d323.svg",
                      pillText: r,
                      caption: (0, i.jsx)("img", {
                          src: "https://cdn.discordapp.com/assets/content/bc7282fb45c16d6041f35bf9534fd40d9a9ec5383fd2088793ecc4e916c00f7d.svg",
                          alt: "Logitech",
                      }),
                  }
                : null,
            steelseriesCard: n
                ? {
                      id: h.RECURRING_3P_PROMOTIONS_CARD_ID,
                      title: m.intl.string(m.t.m7PucM),
                      description: m.intl.format(m.t.zh1X7u, {}),
                      subscriptionRequired: !0,
                      pillText: r,
                      caption: (0, i.jsx)("img", { src: "/assets/aae9b13becd816cf.svg", alt: "SteelSeries" }),
                      backgroundAssetUrl:
                          "https://cdn.discordapp.com/assets/content/202c441e48d2930f99f9519c9699fb047af18c4d0ec0cb490480a9a6f9d326ec.webp",
                      progress: A.getDate() / I,
                      ctaText: m.intl.string(m.t.w7s5Qr),
                      onCtaClick: () => (0, f.u)({ analyticsLocations: e, partnerIds: [_.KS, _.Cs] }),
                      blurTint: "#2E213D",
                  }
                : null,
        };
    }, [g, e, A, t, I, n]);
}
function A() {
    return (0, o.l)("premium_subscriber_home_rewards");
}
