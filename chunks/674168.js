i.d(e, { m: () => C });
var n = i(627968);
i(64700);
var l = i(311907),
    s = i(571356),
    r = i(421380),
    a = i(397927),
    u = i(465794),
    o = i(212168),
    d = i(780964),
    T = i(840065),
    A = i(287809),
    S = i(927578),
    E = i(652215),
    g = i(49999),
    _ = i(788868),
    c = i(355097),
    I = i(985018),
    N = i(956790);
function C(t) {
    var e;
    let { onClose: i, markAsDismissed: C } = t,
        O = (0, l.bG)([A.default], () => A.default.getCurrentUser()),
        L =
            (e = O?.premiumType) === _.PremiumTypes.TIER_2
                ? I.intl.string(I.t.jqO5Qn)
                : null == e
                  ? I.intl.string(I.t.f2qjw5)
                  : I.intl.string(I.t.SblICW),
        R = S.Ay.canUseCustomCallSounds(O);
    return (0, n.jsxs)(o.A, {
        isShown: !0,
        type: o.i.PREMIUM,
        className: N.ne,
        backgroundClassName: N.u4,
        children: [
            null != C
                ? (0, n.jsx)(a.DUT, {
                      className: N.VN,
                      onClick: () => C?.(g.i.DISMISS),
                      "aria-label": I.intl.string(I.t.cpT0Cq),
                      children: (0, n.jsx)(a.PGe, { size: "xs", color: "currentColor", className: N.ut }),
                  })
                : null,
            (0, n.jsxs)("div", {
                className: N.ex,
                children: [
                    (0, n.jsx)(a.tvc, { size: "sm", color: "currentColor", className: N.ax }),
                    (0, n.jsx)(a.Heading, { variant: "heading-sm/bold", children: I.intl.string(I.t.dTbAxx) }),
                ],
            }),
            (0, n.jsx)(s.E, { variant: "text-sm/normal", children: L }),
            R
                ? (0, n.jsx)(a.Button, {
                      onClick: function () {
                          (0, T.openUserSettings)(d.X.SOUNDBOARD_CATEGORY, { section: E.nc_.VOICE, subsection: c.MJ }),
                              i?.(),
                              C?.(g.i.PRIMARY);
                      },
                      text: I.intl.string(I.t.RzWDqY),
                      fullWidth: !0,
                  })
                : (0, n.jsx)(u.A, {
                      textOptions: { textOverride: I.intl.string(I.t.pj0XBN) },
                      subscriptionTier: _.pe.TIER_2,
                      premiumModalAnalyticsLocation: {
                          section: E.JJy.SOUNDBOARD_SOUND_PICKER,
                          object: E.ZSU.BUTTON_CTA,
                      },
                      color: r.$n.Colors.GREEN,
                      onSubscribeModalClose: () => C?.(g.i.PRIMARY),
                  }),
        ],
    });
}
