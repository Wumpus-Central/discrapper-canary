n.d(t, { m: () => N });
var i = n(477900);
n(582128);
var s = n(17928),
    r = n(862482),
    l = n(939249),
    a = n(789645),
    o = n(403581),
    c = n(297264),
    d = n(834730),
    u = n(821609),
    h = n(725807),
    C = n(212168),
    A = n(780964),
    g = n(766075),
    E = n(287809),
    p = n(24482),
    _ = n(652215),
    f = n(49999),
    m = n(202541),
    T = n(105292),
    v = n(316632);
function N(e) {
    var t;
    let { onClose: n, markAsDismissed: N } = e,
        x = (0, s.bG)([E.default], () => E.default.getCurrentUser()),
        I =
            (t = x?.premiumType) === m.PremiumTypes.TIER_2
                ? T.intl.string(T.t.jqO5Qn)
                : null == t
                  ? T.intl.string(T.t.f2qjw5)
                  : T.intl.string(T.t.SblICW),
        O = p.Ay.canUseCustomCallSounds(x);
    return (0, i.jsxs)(C.A, {
        isShown: !0,
        type: C.i.PREMIUM,
        className: v.ne,
        backgroundClassName: v.u4,
        children: [
            null != N
                ? (0, i.jsx)(l.D, {
                      className: v.VN,
                      onClick: () => N?.(f.i.DISMISS),
                      "aria-label": T.intl.string(T.t.cpT0Cq),
                      children: (0, i.jsx)(a.P, { size: "xs", color: "currentColor", className: v.ut }),
                  })
                : null,
            (0, i.jsxs)("div", {
                className: v.ex,
                children: [
                    (0, i.jsx)(o.t, { size: "sm", color: "currentColor", className: v.ax }),
                    (0, i.jsx)(c.D, { variant: "heading-sm/bold", children: T.intl.string(T.t.dTbAxx) }),
                ],
            }),
            (0, i.jsx)(d.E, { variant: "text-sm/normal", children: I }),
            O
                ? (0, i.jsx)(u.$, {
                      onClick: function () {
                          ((0, g.openUserSettings)(A.X.SOUNDBOARD_CATEGORY), n?.(), N?.(f.i.PRIMARY));
                      },
                      text: T.intl.string(T.t.RzWDqY),
                      fullWidth: !0,
                  })
                : (0, i.jsx)(h.A, {
                      textOptions: { textOverride: T.intl.string(T.t.pj0XBN) },
                      subscriptionTier: m.pe.TIER_2,
                      premiumModalAnalyticsLocation: {
                          section: _.JJy.SOUNDBOARD_SOUND_PICKER,
                          object: _.ZSU.BUTTON_CTA,
                      },
                      color: r.$n.Colors.GREEN,
                      onSubscribeModalClose: () => N?.(f.i.PRIMARY),
                  }),
        ],
    });
}
