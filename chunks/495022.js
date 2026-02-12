n.d(t, { A: () => B });
var i = n(627968),
    s = n(64700),
    a = n(397927),
    l = n(736653),
    r = n(793574),
    o = n(688810),
    c = n(531260),
    d = n(720462),
    u = n(206835),
    _ = n(976860),
    m = n(780964),
    A = n(358776),
    g = n(840065),
    h = n(255438),
    x = n(102815),
    p = n(17307),
    E = n(788868),
    C = n(652215),
    T = n(355097),
    S = n(985018),
    I = n(185902),
    N = n(561852),
    f = n(522799),
    b = n(795710),
    j = n(484813),
    v = n(659980),
    O = n(881784),
    R = n(8330),
    y = n(992186),
    P = n(159312),
    L = n(629139),
    D = n(499309),
    M = n(866223),
    G = n(330290),
    U = n(260972),
    k = n(899225),
    V = n(106731),
    H = n(20462),
    w = n(307966);
function B(e) {
    let { glowingPerkId: t = null } = e,
        { analyticsLocations: n } = (0, o.Ay)(r.A.PREMIUM_MARKETING_PERK_CARD),
        B = (0, l.Ay)(),
        { fractionalState: Y } = (0, c.A)(),
        F = (0, h.Xq)(E.f3 / 1024, { useKibibytes: !0 }),
        z = (0, u.A)({ scrollPosition: T._F.TRY_IT_OUT, analyticsLocations: n }),
        W = (0, s.useCallback)(() => {
            (0, g.openUserSettings)(m.X.APPEARANCE_PANEL, { section: C.nc_.APPEARANCE, analyticsLocations: n });
        }, [n]),
        K = (0, s.useCallback)(() => {
            (0, g.openUserSettings)(m.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
                section: C.nc_.GUILD_BOOSTING,
                analyticsLocations: n,
            });
        }, [n]),
        Z = (0, s.useCallback)(() => {
            let e = (0, A.WJ)("openCustomAppSettings");
            (0, g.openUserSettings)(e ? m.X.APPEARANCE_IN_APP_ICON : m.X.APPEARANCE_PANEL, {
                section: C.nc_.APPEARANCE,
                scrollPosition: e ? void 0 : T.kq.CUSTOM_APP_ICONS,
                analyticsLocations: n,
            });
        }, [n]),
        q = (0, s.useCallback)(() => {
            (0, _.pX)(C.BVt.COLLECTIBLES_SHOP);
        }, []),
        X = (0, s.useCallback)(() => {
            (0, g.openUserSettings)(m.X.SOUNDBOARD_CATEGORY, {
                section: C.nc_.VOICE,
                subsection: T.MJ,
                analyticsLocations: n,
            });
        }, [n]),
        J = Y === E.xc.FP_ONLY,
        Q = (0, s.useMemo)(
            () => [
                {
                    id: "profiles",
                    title: S.intl.string(S.t.KcyDwF),
                    description: S.intl.string(S.t.Mt3U1W),
                    ctaText: S.intl.string(S.t.jVcuVY),
                    onCtaClick: z,
                    primaryAsset: O,
                },
                {
                    id: "clientThemes",
                    title: S.intl.string(S.t.kWM48G),
                    description: S.intl.string(S.t.CjRASJ),
                    ctaText: S.intl.string(S.t.jVcuVY),
                    onCtaClick: W,
                    primaryAsset: v,
                },
                {
                    id: "serverBoosts",
                    title: S.intl.string(S.t["NyDu/6"]),
                    description: J ? void 0 : S.intl.string(S.t["4pEwXL"]),
                    caption: J ? S.intl.string(S.t["/VzCKE"]) : void 0,
                    ctaText: J ? void 0 : S.intl.string(S.t.jVcuVY),
                    onCtaClick: J ? void 0 : K,
                    primaryAsset: J ? H.A : R,
                },
                {
                    id: "hdVideo",
                    title: S.intl.string(S.t.RSXQYO),
                    description: S.intl.string(S.t.ymCPxp),
                    primaryAsset: U,
                },
                {
                    id: "customAppIcons",
                    title: S.intl.string(S.t.OuItFi),
                    description: S.intl.string(S.t.mPyrE6),
                    ctaText: S.intl.string(S.t.jVcuVY),
                    onCtaClick: Z,
                    primaryAsset: y,
                },
                {
                    id: "moreEmojis",
                    title: S.intl.string(S.t["R2IV/Q"]),
                    description: S.intl.string(S.t.R5Xag2),
                    primaryAsset: L,
                },
                {
                    id: "customSounds",
                    title: S.intl.string(S.t.LWsArT),
                    description: S.intl.string(S.t.bTzbVk),
                    primaryAsset: (0, p.t4)(B, f, b),
                },
                {
                    id: "specialStickers",
                    title: S.intl.string(S.t.tzdIwI),
                    description: S.intl.string(S.t.hJG8ZN),
                    primaryAsset: (0, p.t4)(B, j, G),
                },
                {
                    id: "earlyAccess",
                    title: S.intl.string(S.t.UkLVeJ),
                    description: S.intl.string(S.t.xf9ePm),
                    primaryAsset: P,
                },
                {
                    id: "specialMemberPricing",
                    title: S.intl.string(S.t["0Mykgq"]),
                    description: S.intl.string(S.t.opgqDZ),
                    ctaText: S.intl.string(S.t.dBJVnZ),
                    onCtaClick: q,
                    primaryAsset: M,
                },
                {
                    id: "largeUploads",
                    title: S.intl.formatToPlainString(S.t.jqhAdL, { premiumMaxSize: F }),
                    description: S.intl.formatToPlainString(S.t["HI+cfm"], { premiumMaxSize: F }),
                    primaryAsset: V,
                },
                {
                    id: "superReactions",
                    title: S.intl.string(S.t["6S7kO7"]),
                    description: S.intl.string(S.t.kN1JRI),
                    primaryAsset: k,
                },
                {
                    id: "entranceSounds",
                    title: S.intl.string(S.t["f4M+H9"]),
                    description: S.intl.string(S.t["7ZCYvC"]),
                    ctaText: S.intl.string(S.t.jVcuVY),
                    onCtaClick: X,
                    primaryAsset: D,
                },
                {
                    id: "badge",
                    title: S.intl.string(S.t.dcFfSJ),
                    description: S.intl.string(S.t["37MFFq"]),
                    primaryAsset: J ? w.A : N,
                },
            ],
            [B, J, F, z, W, K, Z, q, X],
        );
    return (0, i.jsxs)("div", {
        className: I.uW,
        children: [
            (0, i.jsx)(a.Heading, { variant: "display-sm", className: I.R_, children: S.intl.string(S.t["Uh3+CA"]) }),
            (0, i.jsx)(d.A, {
                children: Q.map((e) => {
                    if (null != e)
                        return (0, i.jsx)(
                            "div",
                            { id: e.id, className: I.Nr, children: (0, i.jsx)(x.S, { ...e, glowing: t === e.id }) },
                            e.id,
                        );
                }),
            }),
        ],
    });
}
