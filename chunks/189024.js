n.d(t, { A: () => L });
var i = n(627968),
    s = n(64700),
    l = n(367622),
    r = n(397927),
    a = n(975807),
    o = n(793574),
    d = n(688810),
    c = n(954921),
    u = n(793943),
    _ = n(259065),
    m = n(95035),
    g = n(780964),
    A = n(358776),
    h = n(840065),
    x = n(975571),
    p = n(398523),
    T = n(612669),
    E = n(161319),
    C = n(920050),
    S = n(9458),
    f = n(88001),
    N = n(652215),
    b = n(518582),
    I = n(985018),
    v = n(355313),
    j = n(998663),
    O = n(817577),
    y = n(419455),
    R = n(288604),
    P = n(893160),
    D = n(509442);
function L() {
    let { analyticsLocations: e } = (0, d.Ay)(o.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, T.O9)(),
        L = p.A.useExperiment({ location: "PremiumWhatsNewSection" }).enabled,
        M = (0, s.useCallback)(() => {
            (0, h.openUserSettings)(
                g.X.PROFILE_PANEL,
                { section: N.nc_.PROFILE_CUSTOMIZATION, analyticsLocations: e },
                () => (0, _.L)({ analyticsLocations: e }),
            );
        }, [e]),
        G = (0, s.useCallback)(() => {
            (0, h.openUserSettings)(
                g.X.PROFILE_PANEL,
                { section: N.nc_.PROFILE_CUSTOMIZATION, analyticsLocations: e },
                () => (0, c.L)({ analyticsLocations: e }),
            );
        }, [e]),
        U = (0, s.useCallback)(() => {
            let e = (0, A.Ci)("openCustomAppSettings") ? g.X.DISPLAY_IN_APP_ICON_CATEGORY : g.X.APPEARANCE_IN_APP_ICON;
            (0, h.openUserSettings)(e, { section: N.nc_.APPEARANCE });
        }, []),
        k = () => {
            (0, a.A)(x.A.getArticleURL(N.MVz.PREMIUM_GROUP_ABOUT));
        },
        V = (0, S.A)(e),
        { currentDate: w, nDaysInMonth: B } = (0, s.useMemo)(() => {
            let e = new Date();
            return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
        }, []);
    return (0, s.useMemo)(() => {
        let s = [
                t
                    ? {
                          id: C.PREMIUM_GROUP_CARD_ID,
                          title: I.intl.string(b.default.YkvksF),
                          description: (0, i.jsxs)(i.Fragment, {
                              children: [
                                  I.intl.formatToPlainString(b.default.JlyGQj, {
                                      totalSeats: f.aw,
                                      premiumGroupProductName: (0, f.DP)(),
                                  }),
                                  (0, i.jsx)("div", {
                                      className: v.LF,
                                      children: (0, i.jsx)(m.A, {
                                          onClick: k,
                                          children: I.intl.string(b.default.yYyGJH),
                                      }),
                                  }),
                              ],
                          }),
                          pillText: I.intl.string(I.t.oW0eUd),
                          primaryAsset: O,
                          ctaText: I.intl.string(I.t.jVcuVY),
                          onCtaClick: () => {
                              (0, r.mMO)(async () => {
                                  let { default: e } = await n.e("69595").then(n.bind(n, 526710));
                                  return (t) => (0, i.jsx)(e, { ...t });
                              });
                          },
                      }
                    : null,
                L
                    ? {
                          id: C.RECURRING_3P_PROMOTIONS_CARD_ID,
                          title: I.intl.string(I.t.m7PucM),
                          description: I.intl.format(I.t.zh1X7u, {}),
                          subscriptionRequired: !0,
                          pillText: I.intl.string(I.t.oW0eUd),
                          caption: (0, i.jsx)("img", { src: j, alt: "SteelSeries" }),
                          backgroundAssetUrl: P.A,
                          progress: w.getDate() / B,
                          ctaText: I.intl.string(I.t.w7s5Qr),
                          onCtaClick: () => (0, E.uE)({ analyticsLocations: e }),
                          blurTint: "#2E213D",
                      }
                    : null,
                {
                    id: C.DISPLAY_NAME_STYLES_CARD_ID,
                    title: I.intl.string(I.t.OLtTrt),
                    description: I.intl.string(I.t["di/pXR"]),
                    onCtaClick: M,
                    primaryAsset: y.A,
                    ctaText: I.intl.string(I.t.jVcuVY),
                    pillText: I.intl.string(I.t.y2b7CA),
                },
                {
                    id: C.CLIENT_THEMES_CARD_ID,
                    title: I.intl.string(I.t.acc6h6),
                    description: I.intl.formatToPlainString(I.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: D.A,
                    ctaText: I.intl.string(I.t.jVcuVY),
                    onCtaClick: () => {
                        (0, u.nf)(u.HP.CUSTOM_THEME);
                    },
                },
                {
                    id: C.PERMADECOS_CARD_ID,
                    title: I.intl.string(I.t.L14NZN),
                    description: I.intl.string(I.t.eCZkAI),
                    primaryAsset: (0, i.jsx)(l.u7P, { alt: "", ariaHidden: !0 }),
                    ctaText: I.intl.string(I.t.jVcuVY),
                    onCtaClick: G,
                },
                {
                    id: C.CUSTOM_APP_ICONS_CARD_ID,
                    title: I.intl.string(I.t.rkb1vA),
                    description: I.intl.string(I.t["1uPk1Z"]),
                    primaryAsset: R.A,
                    ctaText: I.intl.string(I.t.y9TxXV),
                    onCtaClick: U,
                },
            ],
            a = (s = s.filter((e) => null != e))[0].featured,
            o = a ? 5 : 6;
        return s.splice(+!!a, 0, V), s.length > o && s.splice(o, s.length - o), s;
    }, [V, t, L, B, w, e, M, U, G]);
}
