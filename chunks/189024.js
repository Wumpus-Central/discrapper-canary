n.d(t, { A: () => y });
var i = n(627968),
    s = n(64700),
    a = n(367622),
    l = n(397927),
    r = n(793574),
    o = n(688810),
    c = n(954921),
    d = n(793943),
    u = n(259065),
    _ = n(780964),
    m = n(358776),
    A = n(840065),
    g = n(398523),
    h = n(612669),
    x = n(161319),
    p = n(920050),
    E = n(9458),
    C = n(88001),
    T = n(652215),
    S = n(355097),
    I = n(519412),
    f = n(985018),
    N = n(998663),
    b = n(817577),
    j = n(419455),
    v = n(288604),
    O = n(893160),
    R = n(509442);
function y() {
    let { analyticsLocations: e } = (0, o.Ay)(r.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, h.O9)(),
        y = g.A.useExperiment({ location: "PremiumWhatsNewSection" }).enabled,
        P = (0, s.useCallback)(() => {
            (0, A.openUserSettings)(
                _.X.PROFILE_PANEL,
                { section: T.nc_.PROFILE_CUSTOMIZATION, analyticsLocations: e },
                () => (0, u.L)({ analyticsLocations: e }),
            );
        }, [e]),
        L = (0, s.useCallback)(() => {
            (0, A.openUserSettings)(
                _.X.PROFILE_PANEL,
                { section: T.nc_.PROFILE_CUSTOMIZATION, analyticsLocations: e },
                () => (0, c.L)({ analyticsLocations: e }),
            );
        }, [e]),
        D = (0, s.useCallback)(() => {
            let e = (0, m.Ci)("openCustomAppSettings"),
                t = (0, m.WJ)("openCustomAppSettings"),
                n = _.X.APPEARANCE_PANEL,
                i = S.kq.CUSTOM_APP_ICONS;
            e
                ? ((n = _.X.DISPLAY_IN_APP_ICON_CATEGORY), (i = void 0))
                : t && ((n = _.X.APPEARANCE_IN_APP_ICON), (i = void 0)),
                (0, A.openUserSettings)(n, { section: T.nc_.APPEARANCE, scrollPosition: i });
        }, []),
        M = (0, E.A)(e),
        { currentDate: G, nDaysInMonth: U } = (0, s.useMemo)(() => {
            let e = new Date();
            return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
        }, []);
    return (0, s.useMemo)(() => {
        let s = [
                t
                    ? {
                          id: p.PREMIUM_GROUP_CARD_ID,
                          title: f.intl.string(I.default.YkvksF),
                          description: f.intl.formatToPlainString(I.default.JlyGQj, {
                              totalSeats: C.aw,
                              premiumGroupProductName: (0, C.DP)(),
                          }),
                          pillText: f.intl.string(f.t.oW0eUd),
                          primaryAsset: b,
                          ctaText: f.intl.string(f.t.jVcuVY),
                          onCtaClick: () => {
                              (0, l.mMO)(async () => {
                                  let { default: e } = await n.e("69595").then(n.bind(n, 526710));
                                  return (t) => (0, i.jsx)(e, { ...t });
                              });
                          },
                      }
                    : null,
                y
                    ? {
                          id: p.RECURRING_3P_PROMOTIONS_CARD_ID,
                          title: f.intl.string(f.t.m7PucM),
                          description: f.intl.format(f.t.zh1X7u, {}),
                          subscriptionRequired: !0,
                          pillText: f.intl.string(f.t.oW0eUd),
                          caption: (0, i.jsx)("img", { src: N, alt: "SteelSeries" }),
                          backgroundAssetUrl: O.A,
                          progress: G.getDate() / U,
                          ctaText: f.intl.string(f.t.w7s5Qr),
                          onCtaClick: () => (0, x.uE)({ analyticsLocations: e }),
                          blurTint: "#2E213D",
                      }
                    : null,
                {
                    id: p.DISPLAY_NAME_STYLES_CARD_ID,
                    title: f.intl.string(f.t.OLtTrt),
                    description: f.intl.string(f.t["di/pXR"]),
                    onCtaClick: P,
                    primaryAsset: j.A,
                    ctaText: f.intl.string(f.t.jVcuVY),
                    pillText: f.intl.string(f.t.y2b7CA),
                },
                {
                    id: p.CLIENT_THEMES_CARD_ID,
                    title: f.intl.string(f.t.acc6h6),
                    description: f.intl.formatToPlainString(f.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: R.A,
                    ctaText: f.intl.string(f.t.jVcuVY),
                    onCtaClick: () => {
                        (0, d.nf)(d.HP.CUSTOM_THEME);
                    },
                },
                {
                    id: p.PERMADECOS_CARD_ID,
                    title: f.intl.string(f.t.L14NZN),
                    description: f.intl.string(f.t.eCZkAI),
                    primaryAsset: (0, i.jsx)(a.u7P, { alt: "", ariaHidden: !0 }),
                    ctaText: f.intl.string(f.t.jVcuVY),
                    onCtaClick: L,
                },
                {
                    id: p.CUSTOM_APP_ICONS_CARD_ID,
                    title: f.intl.string(f.t.rkb1vA),
                    description: f.intl.string(f.t["1uPk1Z"]),
                    primaryAsset: v.A,
                    ctaText: f.intl.string(f.t.y9TxXV),
                    onCtaClick: D,
                },
            ],
            r = (s = s.filter((e) => null != e))[0].featured,
            o = r ? 5 : 6;
        return s.splice(+!!r, 0, M), s.length > o && s.splice(o, s.length - o), s;
    }, [M, t, y, U, G, e, P, D, L]);
}
