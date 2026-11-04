n.d(t, { m: () => y });
var i = n(477900);
n(582128);
var s = n(855986),
    r = n(862482),
    l = n(939249),
    a = n(789645),
    o = n(403581),
    c = n(534514),
    d = n(834730),
    u = n(821609),
    h = n(725807),
    C = n(212168),
    A = n(780964),
    g = n(766075),
    E = n(287809),
    p = n(879610),
    m = n(24181),
    _ = n(503698),
    f = n.n(_),
    T = n(38021),
    v = n(366010),
    N = n(866665),
    x = n(408278),
    I = n(465794),
    O = n(652215),
    S = n(49999),
    U = n(682901),
    L = n(792996),
    R = n(591888);
function j(e) {
    let { description: t, canUseCustomCallSounds: n, onNavigateToFeature: s, markAsDismissed: r } = e,
        { theme: l } = (0, T.wR)();
    return (0, i.jsxs)("div", {
        className: f()(R.Du, (0, v.q)(l) && R.rf, null != r && R.Zt),
        children: [
            null != r
                ? (0, i.jsx)("div", {
                      className: R.VN,
                      children: (0, i.jsx)(N.m, {
                          text: L.intl.string(L.t.cpT0Cq),
                          children: (0, i.jsx)(x.K, {
                              icon: a.P,
                              "aria-label": L.intl.string(L.t.cpT0Cq),
                              size: "sm",
                              variant: "icon-only",
                              onClick: () => r(S.i.DISMISS),
                          }),
                      }),
                  })
                : null,
            (0, i.jsxs)("div", {
                className: R.s7,
                children: [
                    (0, i.jsxs)("div", {
                        className: R.rd,
                        children: [
                            (0, i.jsx)(o.t, { size: "sm", color: "currentColor", className: R.ax }),
                            (0, i.jsx)(c.D, { variant: "heading-xs/semibold", children: L.intl.string(L.t.dTbAxx) }),
                        ],
                    }),
                    (0, i.jsx)(d.E, { variant: "body-xs/normal", color: "text-default", children: t }),
                ],
            }),
            n
                ? (0, i.jsx)(u.$, { size: "sm", onClick: s, text: L.intl.string(L.t.RzWDqY) })
                : (0, i.jsx)(I.A, {
                      size: "sm",
                      subscriptionTier: U.pe.TIER_2,
                      buttonTextOverride: L.intl.string(L.t.pj0XBN),
                      premiumModalAnalyticsLocation: {
                          section: O.JJy.SOUNDBOARD_SOUND_PICKER,
                          object: O.ZSU.BUTTON_CTA,
                      },
                      onSubscribeModalClose: () => r?.(S.i.PRIMARY),
                  }),
        ],
    });
}
var w = n(316632);
function y(e) {
    var t;
    let { onClose: n, markAsDismissed: _ } = e,
        f = m.H.useConfig({ location: "entrance_sound_picker_upsell" }),
        T = (0, s.bG)([E.default], () => E.default.getCurrentUser()),
        v =
            (t = T?.premiumType) === U.PremiumTypes.TIER_2
                ? L.intl.string(L.t.jqO5Qn)
                : null == t
                  ? L.intl.string(L.t.f2qjw5)
                  : L.intl.string(L.t.SblICW),
        N = p.Ay.canUseCustomCallSounds(T);
    function x() {
        ((0, g.openUserSettings)(A.X.SOUNDBOARD_CATEGORY), n?.(), _?.(S.i.PRIMARY));
    }
    return f
        ? (0, i.jsx)(j, { description: v, canUseCustomCallSounds: N, onNavigateToFeature: x, markAsDismissed: _ })
        : (0, i.jsxs)(C.A, {
              isShown: !0,
              type: C.i.PREMIUM,
              className: w.ne,
              backgroundClassName: w.u4,
              children: [
                  null != _
                      ? (0, i.jsx)(l.D, {
                            className: w.VN,
                            onClick: () => _?.(S.i.DISMISS),
                            "aria-label": L.intl.string(L.t.cpT0Cq),
                            children: (0, i.jsx)(a.P, { size: "xs", color: "currentColor", className: w.ut }),
                        })
                      : null,
                  (0, i.jsxs)("div", {
                      className: w.ex,
                      children: [
                          (0, i.jsx)(o.t, { size: "sm", color: "currentColor", className: w.ax }),
                          (0, i.jsx)(c.D, { variant: "heading-xs/semibold", children: L.intl.string(L.t.dTbAxx) }),
                      ],
                  }),
                  (0, i.jsx)(d.E, { variant: "body-sm/normal", children: v }),
                  N
                      ? (0, i.jsx)(u.$, { onClick: x, text: L.intl.string(L.t.RzWDqY), fullWidth: !0 })
                      : (0, i.jsx)(h.A, {
                            textOptions: { textOverride: L.intl.string(L.t.pj0XBN) },
                            subscriptionTier: U.pe.TIER_2,
                            premiumModalAnalyticsLocation: {
                                section: O.JJy.SOUNDBOARD_SOUND_PICKER,
                                object: O.ZSU.BUTTON_CTA,
                            },
                            color: r.$n.Colors.GREEN,
                            onSubscribeModalClose: () => _?.(S.i.PRIMARY),
                        }),
              ],
          });
}
