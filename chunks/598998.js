n.d(t, { A: () => k });
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(397927),
    o = n(793574),
    c = n(688810),
    d = n(793943),
    u = n(259065),
    _ = n(206835),
    m = n(780964),
    A = n(358776),
    g = n(840065),
    h = n(398523),
    x = n(612669),
    p = n(161319),
    E = n(849528),
    C = n(764231),
    T = n(112848),
    S = n(149757),
    I = n(30084),
    f = n(920050),
    N = n(88001),
    b = n(652215),
    j = n(355097),
    v = n(519412),
    O = n(985018),
    R = n(950268),
    y = n(998663),
    P = n(817577),
    L = n(804368),
    D = n(419455),
    G = n(174872),
    M = n(509442),
    U = n(864579);
function k() {
    let { analyticsLocations: e } = (0, c.Ay)(o.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, x.O9)(),
        a = h.A.useExperiment({ location: "PremiumWhatsNewSection" }).enabled,
        k = (0, _.A)({ scrollPosition: j._F.TRY_IT_OUT, analyticsLocations: e }),
        V = (0, s.useCallback)(() => {
            (0, g.openUserSettings)(
                m.X.PROFILE_PANEL,
                { section: b.nc_.PROFILE_CUSTOMIZATION, analyticsLocations: e },
                () => (0, u.L)({ analyticsLocations: e }),
            );
        }, [e]),
        w = (0, s.useCallback)(() => {
            let e = (0, A.WJ)("openCustomAppSettings");
            (0, g.openUserSettings)(e ? m.X.APPEARANCE_IN_APP_ICON : m.X.APPEARANCE_PANEL, {
                section: b.nc_.APPEARANCE,
                scrollPosition: e ? void 0 : j.kq.CUSTOM_APP_ICONS,
            });
        }, []),
        H = (0, T.$F)(),
        B = (0, T.Xb)(),
        Y = H?.status === T.Wo.UPCOMING,
        F = (0, S.N)(H?.id),
        z = (0, E.z)(),
        { currentDate: W, nDaysInMonth: K } = (0, s.useMemo)(() => {
            let e = new Date();
            return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
        }, []);
    return (0, s.useMemo)(() => {
        let s = {
                id: f.vc,
                title: null != H ? O.intl.string(H.nameUnformattedNitro) : "",
                pillText: O.intl.string(O.t["jyYgZ+"]),
                primaryAsset: null != F ? (Y ? F.standard : F.ambientLarge) : null,
                primaryAssetClassName: l()(R.pq, { [R.n6]: Y }),
                caption: null != B ? O.intl.formatToPlainString(O.t.Hu4jfi, { date: new Date(B) }) : void 0,
                description:
                    null != H
                        ? H.status === T.Wo.UPCOMING
                            ? O.intl.formatToPlainString(O.t.a1eKDi, { days: H.daysLeft })
                            : (0, C.T)(H.id, H.tenureReqNumMonths)
                        : void 0,
                progress: z ?? void 0,
                ctaText: O.intl.string(O.t.jVcuVY),
                onCtaClick: () => (0, I.D)({ analyticsLocations: e }),
            },
            o = [
                t
                    ? {
                          id: f.Rt,
                          title: O.intl.string(v.default.YkvksF),
                          description: O.intl.formatToPlainString(v.default.JlyGQj, {
                              totalSeats: N.aw,
                              premiumGroupProductName: (0, N.DP)(),
                          }),
                          pillText: O.intl.string(O.t.oW0eUd),
                          primaryAsset: P,
                          ctaText: O.intl.string(O.t.jVcuVY),
                          onCtaClick: () => {
                              (0, r.mMO)(async () => {
                                  let { default: e } = await n.e("69595").then(n.bind(n, 526710));
                                  return (t) => (0, i.jsx)(e, { ...t });
                              });
                          },
                      }
                    : null,
                a
                    ? {
                          id: "3p",
                          title: O.intl.string(O.t.m7PucM),
                          description: O.intl.format(O.t.zh1X7u, {}),
                          pillText: O.intl.string(O.t.oW0eUd),
                          caption: (0, i.jsx)("img", { src: y, alt: "SteelSeries" }),
                          backgroundAssetUrl: G.A,
                          progress: W.getDate() / K,
                          ctaText: O.intl.string(O.t.w7s5Qr),
                          onCtaClick: () => (0, p.uE)({ analyticsLocations: e }),
                          blurTint: "#0c1b55",
                      }
                    : null,
                {
                    id: f.vl,
                    title: O.intl.string(O.t.OLtTrt),
                    description: O.intl.string(O.t["di/pXR"]),
                    onCtaClick: V,
                    primaryAsset: D.A,
                    ctaText: O.intl.string(O.t.jVcuVY),
                    pillText: O.intl.string(O.t.y2b7CA),
                },
                {
                    id: f.kd,
                    title: O.intl.string(O.t.acc6h6),
                    description: O.intl.formatToPlainString(O.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: M.A,
                    ctaText: O.intl.string(O.t.jVcuVY),
                    onCtaClick: () => {
                        (0, d.nf)(d.HP.CUSTOM_THEME);
                    },
                },
                {
                    id: f.BA,
                    title: O.intl.string(O.t.L14NZN),
                    description: O.intl.string(O.t.eCZkAI),
                    primaryAsset: U.A,
                    ctaText: O.intl.string(O.t.jVcuVY),
                    onCtaClick: k,
                },
                {
                    id: f.WL,
                    title: O.intl.string(O.t.rkb1vA),
                    description: O.intl.string(O.t["1uPk1Z"]),
                    primaryAsset: L,
                    ctaText: O.intl.string(O.t.y9TxXV),
                    onCtaClick: w,
                },
            ],
            c = (o = o.filter((e) => null != e))[0].featured,
            u = c ? 5 : 6;
        return o.splice(+!!c, 0, s), o.length > u && o.splice(u, o.length - u), o;
    }, [H, F, Y, B, t, a, K, W, e, V, w, k, z]);
}
