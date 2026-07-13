"use strict";
n.d(t, { m: () => N });
var i = n(627968);
n(64700);
var r = n(17928),
    a = n(834730),
    s = n(862482),
    l = n(939249),
    o = n(789645),
    d = n(403581),
    c = n(534514),
    u = n(821609),
    _ = n(725807),
    E = n(212168),
    A = n(780964),
    h = n(766075),
    I = n(287809),
    f = n(428262),
    p = n(652215),
    T = n(49999),
    m = n(202541),
    g = n(375708),
    S = n(871425);
function N(e) {
    var t;
    let { onClose: n, markAsDismissed: N } = e,
        C = (0, r.bG)([I.default], () => I.default.getCurrentUser()),
        O =
            (t = C?.premiumType) === m.PremiumTypes.TIER_2
                ? g.intl.string(g.t.jqO5Qn)
                : null == t
                  ? g.intl.string(g.t.f2qjw5)
                  : g.intl.string(g.t.SblICW),
        R = f.Ay.canUseCustomCallSounds(C);
    return (0, i.jsxs)(E.A, {
        isShown: !0,
        type: E.i.PREMIUM,
        className: S.ne,
        backgroundClassName: S.u4,
        children: [
            null != N
                ? (0, i.jsx)(l.D, {
                      className: S.VN,
                      onClick: () => N?.(T.i.DISMISS),
                      "aria-label": g.intl.string(g.t.cpT0Cq),
                      children: (0, i.jsx)(o.P, { size: "xs", color: "currentColor", className: S.ut }),
                  })
                : null,
            (0, i.jsxs)("div", {
                className: S.ex,
                children: [
                    (0, i.jsx)(d.t, { size: "sm", color: "currentColor", className: S.ax }),
                    (0, i.jsx)(c.D, { variant: "heading-sm/bold", children: g.intl.string(g.t.dTbAxx) }),
                ],
            }),
            (0, i.jsx)(a.E, { variant: "text-sm/normal", children: O }),
            R
                ? (0, i.jsx)(u.$, {
                      onClick: function () {
                          (0, h.openUserSettings)(A.X.SOUNDBOARD_CATEGORY), n?.(), N?.(T.i.PRIMARY);
                      },
                      text: g.intl.string(g.t.RzWDqY),
                      fullWidth: !0,
                  })
                : (0, i.jsx)(_.A, {
                      textOptions: { textOverride: g.intl.string(g.t.pj0XBN) },
                      subscriptionTier: m.pe.TIER_2,
                      premiumModalAnalyticsLocation: {
                          section: p.JJy.SOUNDBOARD_SOUND_PICKER,
                          object: p.ZSU.BUTTON_CTA,
                      },
                      color: s.$n.Colors.GREEN,
                      onSubscribeModalClose: () => N?.(T.i.PRIMARY),
                  }),
        ],
    });
}
