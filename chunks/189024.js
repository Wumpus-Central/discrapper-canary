n.d(t, { A: () => R });
var i = n(627968),
    s = n(64700),
    l = n(367622),
    a = n(397927),
    r = n(793574),
    o = n(688810),
    d = n(954921),
    c = n(793943),
    u = n(259065),
    _ = n(780964),
    g = n(358776),
    m = n(840065),
    A = n(398523),
    h = n(612669),
    p = n(161319),
    x = n(920050),
    E = n(9458),
    T = n(88001),
    S = n(652215),
    C = n(519412),
    I = n(985018),
    f = n(998663),
    b = n(817577),
    N = n(419455),
    v = n(288604),
    j = n(893160),
    O = n(509442);
function R() {
    let { analyticsLocations: e } = (0, o.Ay)(r.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, h.O9)(),
        R = A.A.useExperiment({ location: "PremiumWhatsNewSection" }).enabled,
        y = (0, s.useCallback)(() => {
            (0, m.openUserSettings)(
                _.X.PROFILE_PANEL,
                { section: S.nc_.PROFILE_CUSTOMIZATION, analyticsLocations: e },
                () => (0, u.L)({ analyticsLocations: e }),
            );
        }, [e]),
        P = (0, s.useCallback)(() => {
            (0, m.openUserSettings)(
                _.X.PROFILE_PANEL,
                { section: S.nc_.PROFILE_CUSTOMIZATION, analyticsLocations: e },
                () => (0, d.L)({ analyticsLocations: e }),
            );
        }, [e]),
        L = (0, s.useCallback)(() => {
            let e = (0, g.Ci)("openCustomAppSettings") ? _.X.DISPLAY_IN_APP_ICON_CATEGORY : _.X.APPEARANCE_IN_APP_ICON;
            (0, m.openUserSettings)(e, { section: S.nc_.APPEARANCE });
        }, []),
        D = (0, E.A)(e),
        { currentDate: G, nDaysInMonth: M } = (0, s.useMemo)(() => {
            let e = new Date();
            return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
        }, []);
    return (0, s.useMemo)(() => {
        let s = [
                t
                    ? {
                          id: x.PREMIUM_GROUP_CARD_ID,
                          title: I.intl.string(C.default.YkvksF),
                          description: I.intl.formatToPlainString(C.default.JlyGQj, {
                              totalSeats: T.aw,
                              premiumGroupProductName: (0, T.DP)(),
                          }),
                          pillText: I.intl.string(I.t.oW0eUd),
                          primaryAsset: b,
                          ctaText: I.intl.string(I.t.jVcuVY),
                          onCtaClick: () => {
                              (0, a.mMO)(async () => {
                                  let { default: e } = await n.e("69595").then(n.bind(n, 526710));
                                  return (t) => (0, i.jsx)(e, { ...t });
                              });
                          },
                      }
                    : null,
                R
                    ? {
                          id: x.RECURRING_3P_PROMOTIONS_CARD_ID,
                          title: I.intl.string(I.t.m7PucM),
                          description: I.intl.format(I.t.zh1X7u, {}),
                          subscriptionRequired: !0,
                          pillText: I.intl.string(I.t.oW0eUd),
                          caption: (0, i.jsx)("img", { src: f, alt: "SteelSeries" }),
                          backgroundAssetUrl: j.A,
                          progress: G.getDate() / M,
                          ctaText: I.intl.string(I.t.w7s5Qr),
                          onCtaClick: () => (0, p.uE)({ analyticsLocations: e }),
                          blurTint: "#2E213D",
                      }
                    : null,
                {
                    id: x.DISPLAY_NAME_STYLES_CARD_ID,
                    title: I.intl.string(I.t.OLtTrt),
                    description: I.intl.string(I.t["di/pXR"]),
                    onCtaClick: y,
                    primaryAsset: N.A,
                    ctaText: I.intl.string(I.t.jVcuVY),
                    pillText: I.intl.string(I.t.y2b7CA),
                },
                {
                    id: x.CLIENT_THEMES_CARD_ID,
                    title: I.intl.string(I.t.acc6h6),
                    description: I.intl.formatToPlainString(I.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: O.A,
                    ctaText: I.intl.string(I.t.jVcuVY),
                    onCtaClick: () => {
                        (0, c.nf)(c.HP.CUSTOM_THEME);
                    },
                },
                {
                    id: x.PERMADECOS_CARD_ID,
                    title: I.intl.string(I.t.L14NZN),
                    description: I.intl.string(I.t.eCZkAI),
                    primaryAsset: (0, i.jsx)(l.u7P, { alt: "", ariaHidden: !0 }),
                    ctaText: I.intl.string(I.t.jVcuVY),
                    onCtaClick: P,
                },
                {
                    id: x.CUSTOM_APP_ICONS_CARD_ID,
                    title: I.intl.string(I.t.rkb1vA),
                    description: I.intl.string(I.t["1uPk1Z"]),
                    primaryAsset: v.A,
                    ctaText: I.intl.string(I.t.y9TxXV),
                    onCtaClick: L,
                },
            ],
            r = (s = s.filter((e) => null != e))[0].featured,
            o = r ? 5 : 6;
        return s.splice(+!!r, 0, D), s.length > o && s.splice(o, s.length - o), s;
    }, [D, t, R, M, G, e, y, L, P]);
}
