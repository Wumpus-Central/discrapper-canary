i.d(e, { m: () => m });
var n = i(627968);
i(64700);
var r = i(17928),
    s = i(834730),
    l = i(862482),
    a = i(939249),
    o = i(789645),
    c = i(403581),
    d = i(534514),
    u = i(821609),
    h = i(725807),
    C = i(212168),
    _ = i(780964),
    A = i(858897),
    E = i(287809),
    g = i(927578),
    T = i(652215),
    L = i(49999),
    O = i(788868),
    p = i(985018),
    S = i(871425);
function m(t) {
    var e;
    let { onClose: i, markAsDismissed: m } = t,
        I = (0, r.bG)([E.default], () => E.default.getCurrentUser()),
        R =
            (e = I?.premiumType) === O.PremiumTypes.TIER_2
                ? p.intl.string(p.t.jqO5Qn)
                : null == e
                  ? p.intl.string(p.t.f2qjw5)
                  : p.intl.string(p.t.SblICW),
        U = g.Ay.canUseCustomCallSounds(I);
    return (0, n.jsxs)(C.A, {
        isShown: !0,
        type: C.i.PREMIUM,
        className: S.ne,
        backgroundClassName: S.u4,
        children: [
            null != m
                ? (0, n.jsx)(a.D, {
                      className: S.VN,
                      onClick: () => m?.(L.i.DISMISS),
                      "aria-label": p.intl.string(p.t.cpT0Cq),
                      children: (0, n.jsx)(o.P, { size: "xs", color: "currentColor", className: S.ut }),
                  })
                : null,
            (0, n.jsxs)("div", {
                className: S.ex,
                children: [
                    (0, n.jsx)(c.t, { size: "sm", color: "currentColor", className: S.ax }),
                    (0, n.jsx)(d.D, { variant: "heading-sm/bold", children: p.intl.string(p.t.dTbAxx) }),
                ],
            }),
            (0, n.jsx)(s.E, { variant: "text-sm/normal", children: R }),
            U
                ? (0, n.jsx)(u.$, {
                      onClick: function () {
                          (0, A.openUserSettings)(_.X.SOUNDBOARD_CATEGORY), i?.(), m?.(L.i.PRIMARY);
                      },
                      text: p.intl.string(p.t.RzWDqY),
                      fullWidth: !0,
                  })
                : (0, n.jsx)(h.A, {
                      textOptions: { textOverride: p.intl.string(p.t.pj0XBN) },
                      subscriptionTier: O.pe.TIER_2,
                      premiumModalAnalyticsLocation: {
                          section: T.JJy.SOUNDBOARD_SOUND_PICKER,
                          object: T.ZSU.BUTTON_CTA,
                      },
                      color: l.$n.Colors.GREEN,
                      onSubscribeModalClose: () => m?.(L.i.PRIMARY),
                  }),
        ],
    });
}
