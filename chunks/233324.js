n.d(t, { m: () => y });
var i = n(477900);
n(582128);
var r = n(855986),
    s = n(862482),
    l = n(939249),
    a = n(789645),
    o = n(403581),
    c = n(534514),
    d = n(834730),
    u = n(821609),
    h = n(725807),
    C = n(212168),
    E = n(780964),
    A = n(766075),
    _ = n(287809),
    p = n(448645),
    g = n(24181),
    m = n(503698),
    T = n.n(m),
    N = n(38021),
    f = n(366010),
    I = n(866665),
    x = n(408278),
    S = n(465794),
    O = n(652215),
    v = n(49999),
    U = n(682901),
    L = n(792996),
    R = n(591888);
function j(e) {
    let { description: t, canUseCustomCallSounds: n, onNavigateToFeature: r, markAsDismissed: s } = e,
        { theme: l } = (0, N.wR)();
    return (0, i.jsxs)("div", {
        className: T()(R.Du, { [R.BB]: (0, f.q)(l), [R.Zt]: null != s }),
        children: [
            null != s
                ? (0, i.jsx)("div", {
                      className: R.VN,
                      children: (0, i.jsx)(I.m, {
                          text: L.intl.string(L.t.cpT0Cq),
                          children: (0, i.jsx)(x.K, {
                              icon: a.XSmallIcon,
                              "aria-label": L.intl.string(L.t.cpT0Cq),
                              size: "sm",
                              variant: "icon-only",
                              onClick: () => s(v.i.DISMISS),
                          }),
                      }),
                  })
                : null,
            (0, i.jsxs)("div", {
                className: R.rd,
                children: [
                    (0, i.jsx)(o.NitroWheelIcon, { size: "xs", color: "currentColor", className: R.ax }),
                    (0, i.jsx)(c.D, {
                        variant: "heading-xs/semibold",
                        color: "text-strong",
                        children: L.intl.string(L.t.dTbAxx),
                    }),
                ],
            }),
            (0, i.jsx)(d.E, { variant: "body-sm/normal", color: "none", className: R.h_, children: t }),
            (0, i.jsx)("div", {
                className: R.lO,
                children: n
                    ? (0, i.jsx)(u.$, { size: "sm", onClick: r, text: L.intl.string(L.t.RzWDqY) })
                    : (0, i.jsx)("div", {
                          className: R.xF,
                          children: (0, i.jsx)(S.A, {
                              size: "sm",
                              variantOverride: (0, f.q)(l) ? "primary" : "overlay-primary",
                              subscriptionTier: U.pe.TIER_2,
                              buttonTextOverride: L.intl.string(L.t.pj0XBN),
                              premiumModalAnalyticsLocation: {
                                  section: O.JJy.SOUNDBOARD_SOUND_PICKER,
                                  object: O.ZSU.BUTTON_CTA,
                              },
                              onSubscribeModalClose: () => s?.(v.i.PRIMARY),
                          }),
                      }),
            }),
        ],
    });
}
var D = n(316632);
function y(e) {
    var t;
    let { onClose: n, markAsDismissed: m } = e,
        T = g.H.useConfig({ location: "entrance_sound_picker_upsell" }),
        N = (0, r.bG)([_.default], () => _.default.getCurrentUser()),
        f =
            (t = N?.premiumType) === U.PremiumTypes.TIER_2
                ? L.intl.string(L.t.jqO5Qn)
                : null == t
                  ? L.intl.string(L.t.f2qjw5)
                  : L.intl.string(L.t.SblICW),
        I = p.Ay.canUseCustomCallSounds(N);
    function x() {
        ((0, A.openUserSettings)(E.X.SOUNDBOARD_CATEGORY), n?.(), m?.(v.i.PRIMARY));
    }
    return T
        ? (0, i.jsx)(j, { description: f, canUseCustomCallSounds: I, onNavigateToFeature: x, markAsDismissed: m })
        : (0, i.jsxs)(C.A, {
              isShown: !0,
              type: C.i.PREMIUM,
              className: D.ne,
              backgroundClassName: D.u4,
              children: [
                  null != m
                      ? (0, i.jsx)(l.D, {
                            className: D.VN,
                            onClick: () => m?.(v.i.DISMISS),
                            "aria-label": L.intl.string(L.t.cpT0Cq),
                            children: (0, i.jsx)(a.XSmallIcon, { size: "xs", color: "currentColor", className: D.ut }),
                        })
                      : null,
                  (0, i.jsxs)("div", {
                      className: D.ex,
                      children: [
                          (0, i.jsx)(o.NitroWheelIcon, { size: "sm", color: "currentColor", className: D.ax }),
                          (0, i.jsx)(c.D, { variant: "heading-xs/semibold", children: L.intl.string(L.t.dTbAxx) }),
                      ],
                  }),
                  (0, i.jsx)(d.E, { variant: "body-sm/normal", children: f }),
                  I
                      ? (0, i.jsx)(u.$, { onClick: x, text: L.intl.string(L.t.RzWDqY), fullWidth: !0 })
                      : (0, i.jsx)(h.A, {
                            textOptions: { textOverride: L.intl.string(L.t.pj0XBN) },
                            subscriptionTier: U.pe.TIER_2,
                            premiumModalAnalyticsLocation: {
                                section: O.JJy.SOUNDBOARD_SOUND_PICKER,
                                object: O.ZSU.BUTTON_CTA,
                            },
                            color: s.$n.Colors.GREEN,
                            onSubscribeModalClose: () => m?.(v.i.PRIMARY),
                        }),
              ],
          });
}
