s.d(e, { A: () => B });
var n = s(477900),
    i = s(582128),
    a = s(855986),
    l = s(104510),
    o = s(646514),
    r = s(834730),
    c = s(123292),
    u = s(688810),
    d = s(13808),
    A = s(631305),
    E = s(71393),
    N = s(967198),
    m = s(652215),
    L = s(598933),
    _ = s(792996),
    x = s(109876);
function I(t) {
    let { analyticsSection: e, analyticsPage: s, isGIF: i, banner: I } = t,
        f = (0, a.bG)([N.A], () => N.A.getGuildId()),
        U = (0, a.bG)([E.A], () => E.A.getGuild(f)),
        { analyticsLocations: R } = (0, u.Ay)();
    return null == U ||
        U.features.has(m.GuildFeatures.ANIMATED_BANNER) ||
        (!i && U.features.has(m.GuildFeatures.BANNER))
        ? null
        : (0, n.jsxs)("div", {
              className: x.kL,
              children: [
                  (0, n.jsx)(l.BoostGemIcon, { color: o.A.unsafe_rawColors.GUILD_BOOSTING_PINK, className: x.qC }),
                  (0, n.jsx)(r.E, {
                      color: "text-strong",
                      variant: "body-sm/semibold",
                      children: _.intl.string(_.t["56M7xe"]),
                  }),
                  (0, n.jsx)("div", {
                      className: x.xF,
                      children: (0, n.jsx)(c.Q, {
                          text: _.intl.string(_.t.WUHdZV),
                          onClick: function () {
                              if (null == U) return;
                              let t = { section: e, page: s, object: m.ZSU.UPSELL_HEADER };
                              null != I
                                  ? (0, d._)({
                                        analyticsLocations: R,
                                        analyticsLocation: t,
                                        guild: U,
                                        isGIF: i,
                                        banner: I,
                                    })
                                  : (0, A.A)({
                                        analyticsLocations: R,
                                        analyticsSourceLocation: t,
                                        guild: U,
                                        perks: i ? (0, L.Pf)() : (0, L.QR)(),
                                    });
                          },
                          textVariant: "body-sm/semibold",
                      }),
                  }),
              ],
          });
}
var f = s(862482),
    U = s(793574),
    R = s(739053),
    h = s(82498),
    b = s(725807),
    p = s(503698),
    g = s.n(p),
    j = s(403581),
    P = s(404374),
    k = s(727181);
function y(t) {
    let { text: e, className: s, button: i, reducedRightPadding: a = !1 } = t;
    return (0, n.jsxs)("div", {
        className: g()(a ? k.wp : k.Ug, s),
        children: [
            (0, n.jsxs)("div", {
                className: k.g9,
                children: [
                    (0, n.jsx)(j.NitroWheelIcon, { size: "md", className: k.Kk, color: P.k0.PREMIUM_TIER_2 }),
                    (0, n.jsx)(r.E, { className: k.Qq, variant: "body-md/normal", color: "text-strong", children: e }),
                ],
            }),
            i,
        ],
    });
}
var v = s(287809),
    S = s(129230),
    G = s(448645),
    M = s(339984),
    C = s(682901),
    T = s(68405);
function H(t) {
    let { analyticsSection: e, type: s } = t,
        l = (0, a.bG)([v.default], () => v.default.getCurrentUser()),
        o = G.Ay.canUseAnimatedAvatar(l),
        r = G.Ay.canUsePremiumProfileCustomization(l),
        c = (s === M.HL.BANNER && r) || (s === M.HL.AVATAR && o),
        { sourceAnalyticsLocations: d } = (0, u.Ay)(U.A.PREMIUM_PREVIEW_UPSELL_HEADER);
    if (
        (i.useEffect(() => {
            c ||
                (S.default.track(m.HAw.PREMIUM_UPSELL_VIEWED, { type: e, location_stack: d }),
                (0, R.sq)(m.U7l.PREMIUM_UPSELL_VIEWED, d, () => (0, h.uq)(e)));
        }, [c, e, d]),
        c)
    )
        return null;
    let A = (0, n.jsx)(b.A, {
        className: T.__invalid_getNitroLink,
        size: f.$n.Sizes.SMALL,
        look: f.$n.Looks.LINK,
        color: f.$n.Colors.LINK,
        subscriptionTier: C.pe.TIER_2,
        textOptions: { textOverride: _.intl.format(_.t["944tDv"], {}) },
        showIcon: !1,
        premiumModalAnalyticsLocation: { section: e, object: m.ZSU.BUTTON_CTA },
        disableShine: !0,
    });
    return (0, n.jsx)(y, { reducedRightPadding: !0, className: T.C, text: _.intl.format(_.t.Og803x, {}), button: A });
}
function B(t) {
    let { type: e, analyticsPage: s, analyticsSection: i, isGIF: a, banner: l } = t;
    return [M.HL.BANNER, M.HL.AVATAR].includes(e) && a
        ? (0, n.jsx)(H, { analyticsSection: i, type: e })
        : e === M.HL.GUILD_BANNER
          ? (0, n.jsx)(I, { analyticsSection: i, analyticsPage: s, isGIF: a, banner: l })
          : null;
}
