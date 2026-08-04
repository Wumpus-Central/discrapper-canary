n.d(t, { m: () => L });
var i = n(477900);
n(582128);
var l = n(17928),
    r = n(834730),
    s = n(862482),
    a = n(939249),
    o = n(789645),
    d = n(403581),
    c = n(297264),
    u = n(821609),
    A = n(725807),
    h = n(212168),
    E = n(780964),
    g = n(766075),
    C = n(287809),
    _ = n(428262),
    I = n(652215),
    T = n(49999),
    p = n(202541),
    N = n(375708),
    S = n(186457);
function L(e) {
    var t;
    let { onClose: n, markAsDismissed: L } = e,
        m = (0, l.bG)([C.default], () => C.default.getCurrentUser()),
        f =
            (t = m?.premiumType) === p.PremiumTypes.TIER_2
                ? N.intl.string(N.t.jqO5Qn)
                : null == t
                  ? N.intl.string(N.t.f2qjw5)
                  : N.intl.string(N.t.SblICW),
        O = _.Ay.canUseCustomCallSounds(m);
    return (0, i.jsxs)(h.A, {
        isShown: !0,
        type: h.i.PREMIUM,
        className: S.ne,
        backgroundClassName: S.u4,
        children: [
            null != L
                ? (0, i.jsx)(a.D, {
                      className: S.VN,
                      onClick: () => L?.(T.i.DISMISS),
                      "aria-label": N.intl.string(N.t.cpT0Cq),
                      children: (0, i.jsx)(o.P, { size: "xs", color: "currentColor", className: S.ut }),
                  })
                : null,
            (0, i.jsxs)("div", {
                className: S.ex,
                children: [
                    (0, i.jsx)(d.t, { size: "sm", color: "currentColor", className: S.ax }),
                    (0, i.jsx)(c.D, { variant: "heading-sm/bold", children: N.intl.string(N.t.dTbAxx) }),
                ],
            }),
            (0, i.jsx)(r.E, { variant: "text-sm/normal", children: f }),
            O
                ? (0, i.jsx)(u.$, {
                      onClick: function () {
                          (0, g.openUserSettings)(E.X.SOUNDBOARD_CATEGORY), n?.(), L?.(T.i.PRIMARY);
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
                      color: s.$n.Colors.GREEN,
                      onSubscribeModalClose: () => L?.(T.i.PRIMARY),
                  }),
        ],
    });
}
