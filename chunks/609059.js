n.d(t, { A: () => v, S: () => R });
var r = n(627968),
    a = n(64700),
    i = n(793574),
    s = n(688810),
    l = n(31502),
    c = n(975571),
    o = n(398523),
    d = n(881373),
    u = n(152815),
    _ = n(852218),
    m = n(161319),
    p = n(920050),
    f = n(652215),
    A = n(962995),
    g = n(985018),
    h = n(998663),
    b = n(223157),
    x = n(863882),
    C = n(893160);
function v() {
    let { analyticsLocations: e } = (0, s.Ay)(i.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, d.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
        n = o.Ay.useConfig({ location: "PremiumWhatsNewSection" }).enabled,
        v = (0, l.l)("useHardwarePartnerPerkCards"),
        { currentDate: R, nDaysInMonth: N } = (0, a.useMemo)(() => {
            let e = new Date();
            return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
        }, []);
    return (0, a.useMemo)(() => {
        let a = v ? void 0 : g.intl.string(g.t.y2b7CA);
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
                      progress: R.getDate() / N,
                      ctaText: g.intl.string(g.t.w7s5Qr),
                      onCtaClick: () => (0, u.P)({ partnerId: _.XY }),
                      blurTint: "#2E213D",
                      backgroundAssetUrl: x.A,
                      pillText: a,
                      caption: (0, r.jsx)("img", { src: b.A, alt: "Logitech" }),
                  }
                : null,
            steelseriesCard: n
                ? {
                      id: p.RECURRING_3P_PROMOTIONS_CARD_ID,
                      title: g.intl.string(g.t.m7PucM),
                      description: g.intl.format(g.t.zh1X7u, {}),
                      subscriptionRequired: !0,
                      pillText: a,
                      caption: (0, r.jsx)("img", { src: h, alt: "SteelSeries" }),
                      backgroundAssetUrl: C.A,
                      progress: R.getDate() / N,
                      ctaText: g.intl.string(g.t.w7s5Qr),
                      onCtaClick: () => (0, m.u)({ analyticsLocations: e, partnerIds: [_.KS, _.Cs] }),
                      blurTint: "#2E213D",
                  }
                : null,
        };
    }, [v, e, R, t, N, n]);
}
function R() {
    return (0, l.l)("premium_subscriber_home_rewards") && !1;
}
