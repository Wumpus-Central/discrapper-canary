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
    h = n(725807),
    A = n(212168),
    E = n(780964),
    g = n(766075),
    C = n(287809),
    _ = n(158045),
    I = n(652215),
    T = n(49999),
    p = n(202541),
    S = n(375708),
    N = n(186457);
function L(e) {
    var t;
    let { onClose: n, markAsDismissed: L } = e,
        m = (0, l.bG)([C.default], () => C.default.getCurrentUser()),
        f =
            (t = m?.premiumType) === p.PremiumTypes.TIER_2
                ? S.intl.string(S.t.jqO5Qn)
                : null == t
                  ? S.intl.string(S.t.f2qjw5)
                  : S.intl.string(S.t.SblICW),
        O = _.Ay.canUseCustomCallSounds(m);
    return (0, i.jsxs)(A.A, {
        isShown: !0,
        type: A.i.PREMIUM,
        className: N.ne,
        backgroundClassName: N.u4,
        children: [
            null != L
                ? (0, i.jsx)(a.D, {
                      className: N.VN,
                      onClick: () => L?.(T.i.DISMISS),
                      "aria-label": S.intl.string(S.t.cpT0Cq),
                      children: (0, i.jsx)(o.P, { size: "xs", color: "currentColor", className: N.ut }),
                  })
                : null,
            (0, i.jsxs)("div", {
                className: N.ex,
                children: [
                    (0, i.jsx)(d.t, { size: "sm", color: "currentColor", className: N.ax }),
                    (0, i.jsx)(c.D, { variant: "heading-sm/bold", children: S.intl.string(S.t.dTbAxx) }),
                ],
            }),
            (0, i.jsx)(r.E, { variant: "text-sm/normal", children: f }),
            O
                ? (0, i.jsx)(u.$, {
                      onClick: function () {
                          (0, g.openUserSettings)(E.X.SOUNDBOARD_CATEGORY), n?.(), L?.(T.i.PRIMARY);
                      },
                      text: S.intl.string(S.t.RzWDqY),
                      fullWidth: !0,
                  })
                : (0, i.jsx)(h.A, {
                      textOptions: { textOverride: S.intl.string(S.t.pj0XBN) },
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
