s.d(e, { A: () => D });
var n = s(477900),
    i = s(582128),
    a = s(855986),
    l = s(104510),
    r = s(646514),
    o = s(834730),
    c = s(123292),
    u = s(688810),
    d = s(13808),
    A = s(631305),
    E = s(71393),
    N = s(967198),
    _ = s(652215),
    m = s(598933),
    L = s(792996),
    x = s(109876);
function f(t) {
    let { analyticsSection: e, analyticsPage: s, isGIF: i, banner: f } = t,
        I = (0, a.bG)([N.A], () => N.A.getGuildId()),
        U = (0, a.bG)([E.A], () => E.A.getGuild(I)),
        { analyticsLocations: R } = (0, u.Ay)();
    return null == U ||
        U.features.has(_.GuildFeatures.ANIMATED_BANNER) ||
        (!i && U.features.has(_.GuildFeatures.BANNER))
        ? null
        : (0, n.jsxs)("div", {
              className: x.kL,
              children: [
                  (0, n.jsx)(l._, { color: r.A.unsafe_rawColors.GUILD_BOOSTING_PINK, className: x.qC }),
                  (0, n.jsx)(o.E, {
                      color: "text-strong",
                      variant: "body-sm/semibold",
                      children: L.intl.string(L.t["56M7xe"]),
                  }),
                  (0, n.jsx)("div", {
                      className: x.xF,
                      children: (0, n.jsx)(c.Q, {
                          text: L.intl.string(L.t.WUHdZV),
                          onClick: function () {
                              if (null == U) return;
                              let t = { section: e, page: s, object: _.ZSU.UPSELL_HEADER };
                              null != f
                                  ? (0, d._)({
                                        analyticsLocations: R,
                                        analyticsLocation: t,
                                        guild: U,
                                        isGIF: i,
                                        banner: f,
                                    })
                                  : (0, A.A)({
                                        analyticsLocations: R,
                                        analyticsSourceLocation: t,
                                        guild: U,
                                        perks: i ? (0, m.Pf)() : (0, m.QR)(),
                                    });
                          },
                          textVariant: "body-sm/semibold",
                      }),
                  }),
              ],
          });
}
var I = s(862482),
    U = s(793574),
    R = s(739053),
    b = s(82498),
    h = s(725807),
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
                    (0, n.jsx)(j.t, { size: "md", className: k.Kk, color: P.k0.PREMIUM_TIER_2 }),
                    (0, n.jsx)(o.E, { className: k.Qq, variant: "body-md/normal", color: "text-strong", children: e }),
                ],
            }),
            i,
        ],
    });
}
var v = s(287809),
    S = s(129230),
    M = s(879610),
    G = s(339984),
    C = s(682901),
    T = s(68405);
function H(t) {
    let { analyticsSection: e, type: s } = t,
        l = (0, a.bG)([v.default], () => v.default.getCurrentUser()),
        r = M.Ay.canUseAnimatedAvatar(l),
        o = M.Ay.canUsePremiumProfileCustomization(l),
        c = (s === G.HL.BANNER && o) || (s === G.HL.AVATAR && r),
        { sourceAnalyticsLocations: d } = (0, u.Ay)(U.A.PREMIUM_PREVIEW_UPSELL_HEADER);
    if (
        (i.useEffect(() => {
            c ||
                (S.default.track(_.HAw.PREMIUM_UPSELL_VIEWED, { type: e, location_stack: d }),
                (0, R.sq)(_.U7l.PREMIUM_UPSELL_VIEWED, d, () => (0, b.uq)(e)));
        }, [c, e, d]),
        c)
    )
        return null;
    let A = (0, n.jsx)(h.A, {
        className: T.__invalid_getNitroLink,
        size: I.$n.Sizes.SMALL,
        look: I.$n.Looks.LINK,
        color: I.$n.Colors.LINK,
        subscriptionTier: C.pe.TIER_2,
        textOptions: { textOverride: L.intl.format(L.t["944tDv"], {}) },
        showIcon: !1,
        premiumModalAnalyticsLocation: { section: e, object: _.ZSU.BUTTON_CTA },
        disableShine: !0,
    });
    return (0, n.jsx)(y, { reducedRightPadding: !0, className: T.C, text: L.intl.format(L.t.Og803x, {}), button: A });
}
function D(t) {
    let { type: e, analyticsPage: s, analyticsSection: i, isGIF: a, banner: l } = t;
    return [G.HL.BANNER, G.HL.AVATAR].includes(e) && a
        ? (0, n.jsx)(H, { analyticsSection: i, type: e })
        : e === G.HL.GUILD_BANNER
          ? (0, n.jsx)(f, { analyticsSection: i, analyticsPage: s, isGIF: a, banner: l })
          : null;
}
