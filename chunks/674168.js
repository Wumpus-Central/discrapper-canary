"use strict";
n.d(t, { m: () => N });
var i = n(627968);
n(64700);
var r = n(17928),
    s = n(834730),
    a = n(862482),
    o = n(939249),
    l = n(789645),
    u = n(403581),
    c = n(534514),
    d = n(821609),
    _ = n(725807),
    h = n(212168),
    f = n(780964),
    E = n(766075),
    p = n(287809),
    m = n(428262),
    g = n(652215),
    A = n(49999),
    I = n(202541),
    T = n(375708),
    S = n(871425);
function N(e) {
    var t;
    let { onClose: n, markAsDismissed: N } = e,
        C = (0, r.bG)([p.default], () => p.default.getCurrentUser()),
        y =
            (t = C?.premiumType) === I.PremiumTypes.TIER_2
                ? T.intl.string(T.t.jqO5Qn)
                : null == t
                  ? T.intl.string(T.t.f2qjw5)
                  : T.intl.string(T.t.SblICW),
        O = m.Ay.canUseCustomCallSounds(C);
    return (0, i.jsxs)(h.A, {
        isShown: !0,
        type: h.i.PREMIUM,
        className: S.ne,
        backgroundClassName: S.u4,
        children: [
            null != N
                ? (0, i.jsx)(o.D, {
                      className: S.VN,
                      onClick: () => N?.(A.i.DISMISS),
                      "aria-label": T.intl.string(T.t.cpT0Cq),
                      children: (0, i.jsx)(l.P, { size: "xs", color: "currentColor", className: S.ut }),
                  })
                : null,
            (0, i.jsxs)("div", {
                className: S.ex,
                children: [
                    (0, i.jsx)(u.t, { size: "sm", color: "currentColor", className: S.ax }),
                    (0, i.jsx)(c.D, { variant: "heading-sm/bold", children: T.intl.string(T.t.dTbAxx) }),
                ],
            }),
            (0, i.jsx)(s.E, { variant: "text-sm/normal", children: y }),
            O
                ? (0, i.jsx)(d.$, {
                      onClick: function () {
                          (0, E.openUserSettings)(f.X.SOUNDBOARD_CATEGORY), n?.(), N?.(A.i.PRIMARY);
                      },
                      text: T.intl.string(T.t.RzWDqY),
                      fullWidth: !0,
                  })
                : (0, i.jsx)(_.A, {
                      textOptions: { textOverride: T.intl.string(T.t.pj0XBN) },
                      subscriptionTier: I.pe.TIER_2,
                      premiumModalAnalyticsLocation: {
                          section: g.JJy.SOUNDBOARD_SOUND_PICKER,
                          object: g.ZSU.BUTTON_CTA,
                      },
                      color: a.$n.Colors.GREEN,
                      onSubscribeModalClose: () => N?.(A.i.PRIMARY),
                  }),
        ],
    });
}
