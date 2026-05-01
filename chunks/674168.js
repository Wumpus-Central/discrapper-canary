t.d(n, { m: () => O });
var l = t(627968);
t(64700);
var E = t(17928),
    i = t(834730),
    A = t(862482),
    a = t(939249),
    _ = t(789645),
    r = t(403581),
    u = t(534514),
    T = t(821609),
    C = t(725807),
    o = t(212168),
    S = t(780964),
    d = t(858897),
    s = t(287809),
    I = t(927578),
    c = t(652215),
    D = t(49999),
    N = t(788868),
    L = t(985018),
    U = t(871425);
function O(e) {
    var n;
    let { onClose: t, markAsDismissed: O } = e,
        P = (0, E.bG)([s.default], () => s.default.getCurrentUser()),
        R =
            (n = P?.premiumType) === N.PremiumTypes.TIER_2
                ? L.intl.string(L.t.jqO5Qn)
                : null == n
                  ? L.intl.string(L.t.f2qjw5)
                  : L.intl.string(L.t.SblICW),
        G = I.Ay.canUseCustomCallSounds(P);
    return (0, l.jsxs)(o.A, {
        isShown: !0,
        type: o.i.PREMIUM,
        className: U.ne,
        backgroundClassName: U.u4,
        children: [
            null != O
                ? (0, l.jsx)(a.D, {
                      className: U.VN,
                      onClick: () => O?.(D.i.DISMISS),
                      "aria-label": L.intl.string(L.t.cpT0Cq),
                      children: (0, l.jsx)(_.P, { size: "xs", color: "currentColor", className: U.ut }),
                  })
                : null,
            (0, l.jsxs)("div", {
                className: U.ex,
                children: [
                    (0, l.jsx)(r.t, { size: "sm", color: "currentColor", className: U.ax }),
                    (0, l.jsx)(u.D, { variant: "heading-sm/bold", children: L.intl.string(L.t.dTbAxx) }),
                ],
            }),
            (0, l.jsx)(i.E, { variant: "text-sm/normal", children: R }),
            G
                ? (0, l.jsx)(T.$, {
                      onClick: function () {
                          (0, d.openUserSettings)(S.X.SOUNDBOARD_CATEGORY), t?.(), O?.(D.i.PRIMARY);
                      },
                      text: L.intl.string(L.t.RzWDqY),
                      fullWidth: !0,
                  })
                : (0, l.jsx)(C.A, {
                      textOptions: { textOverride: L.intl.string(L.t.pj0XBN) },
                      subscriptionTier: N.pe.TIER_2,
                      premiumModalAnalyticsLocation: {
                          section: c.JJy.SOUNDBOARD_SOUND_PICKER,
                          object: c.ZSU.BUTTON_CTA,
                      },
                      color: A.$n.Colors.GREEN,
                      onSubscribeModalClose: () => O?.(D.i.PRIMARY),
                  }),
        ],
    });
}
