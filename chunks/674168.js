n.d(t, { m: () => O });
var i = n(477900);
n(582128);
var l = n(17928),
    r = n(862482),
    s = n(939249),
    a = n(789645),
    o = n(403581),
    d = n(297264),
    c = n(834730),
    u = n(821609),
    A = n(725807),
    E = n(212168),
    h = n(780964),
    C = n(766075),
    _ = n(287809),
    g = n(158045),
    I = n(652215),
    T = n(49999),
    p = n(202541),
    N = n(375708),
    S = n(316632);
function O(e) {
    var t;
    let { onClose: n, markAsDismissed: O } = e,
        f = (0, l.bG)([_.default], () => _.default.getCurrentUser()),
        L =
            (t = f?.premiumType) === p.PremiumTypes.TIER_2
                ? N.intl.string(N.t.jqO5Qn)
                : null == t
                  ? N.intl.string(N.t.f2qjw5)
                  : N.intl.string(N.t.SblICW),
        m = g.Ay.canUseCustomCallSounds(f);
    return (0, i.jsxs)(E.A, {
        isShown: !0,
        type: E.i.PREMIUM,
        className: S.ne,
        backgroundClassName: S.u4,
        children: [
            null != O
                ? (0, i.jsx)(s.D, {
                      className: S.VN,
                      onClick: () => O?.(T.i.DISMISS),
                      "aria-label": N.intl.string(N.t.cpT0Cq),
                      children: (0, i.jsx)(a.P, { size: "xs", color: "currentColor", className: S.ut }),
                  })
                : null,
            (0, i.jsxs)("div", {
                className: S.ex,
                children: [
                    (0, i.jsx)(o.t, { size: "sm", color: "currentColor", className: S.ax }),
                    (0, i.jsx)(d.D, { variant: "heading-sm/bold", children: N.intl.string(N.t.dTbAxx) }),
                ],
            }),
            (0, i.jsx)(c.E, { variant: "text-sm/normal", children: L }),
            m
                ? (0, i.jsx)(u.$, {
                      onClick: function () {
                          ((0, C.openUserSettings)(h.X.SOUNDBOARD_CATEGORY), n?.(), O?.(T.i.PRIMARY));
                      },
                      text: N.intl.string(N.t.RzWDqY),
                      fullWidth: !0,
                  })
                : (0, i.jsx)(A.A, {
                      textOptions: { textOverride: N.intl.string(N.t.pj0XBN) },
                      subscriptionTier: p.pe.TIER_2,
                      premiumModalAnalyticsLocation: {
                          section: I.JJy.SOUNDBOARD_SOUND_PICKER,
                          object: I.ZSU.BUTTON_CTA,
                      },
                      color: r.$n.Colors.GREEN,
                      onSubscribeModalClose: () => O?.(T.i.PRIMARY),
                  }),
        ],
    });
}
