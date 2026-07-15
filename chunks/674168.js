n.d(t, { m: () => L });
var i = n(627968);
n(64700);
var l = n(17928),
    r = n(834730),
    s = n(862482),
    a = n(939249),
    o = n(789645),
    d = n(403581),
    c = n(297264),
    u = n(821609),
    A = n(725807),
    E = n(212168),
    h = n(780964),
    C = n(766075),
    g = n(287809),
    _ = n(428262),
    I = n(652215),
    T = n(49999),
    N = n(202541),
    p = n(375708),
    S = n(871425);
function L(e) {
    var t;
    let { onClose: n, markAsDismissed: L } = e,
        m = (0, l.bG)([g.default], () => g.default.getCurrentUser()),
        O =
            (t = m?.premiumType) === N.PremiumTypes.TIER_2
                ? p.intl.string(p.t.jqO5Qn)
                : null == t
                  ? p.intl.string(p.t.f2qjw5)
                  : p.intl.string(p.t.SblICW),
        f = _.Ay.canUseCustomCallSounds(m);
    return (0, i.jsxs)(E.A, {
        isShown: !0,
        type: E.i.PREMIUM,
        className: S.ne,
        backgroundClassName: S.u4,
        children: [
            null != L
                ? (0, i.jsx)(a.D, {
                      className: S.VN,
                      onClick: () => L?.(T.i.DISMISS),
                      "aria-label": p.intl.string(p.t.cpT0Cq),
                      children: (0, i.jsx)(o.P, { size: "xs", color: "currentColor", className: S.ut }),
                  })
                : null,
            (0, i.jsxs)("div", {
                className: S.ex,
                children: [
                    (0, i.jsx)(d.t, { size: "sm", color: "currentColor", className: S.ax }),
                    (0, i.jsx)(c.D, { variant: "heading-sm/bold", children: p.intl.string(p.t.dTbAxx) }),
                ],
            }),
            (0, i.jsx)(r.E, { variant: "text-sm/normal", children: O }),
            f
                ? (0, i.jsx)(u.$, {
                      onClick: function () {
                          (0, C.openUserSettings)(h.X.SOUNDBOARD_CATEGORY), n?.(), L?.(T.i.PRIMARY);
                      },
                      text: p.intl.string(p.t.RzWDqY),
                      fullWidth: !0,
                  })
                : (0, i.jsx)(A.A, {
                      textOptions: { textOverride: p.intl.string(p.t.pj0XBN) },
                      subscriptionTier: N.pe.TIER_2,
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
