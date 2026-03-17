n.d(t, { m: () => p });
var i = n(627968);
n(64700);
var r = n(311907),
    a = n(571356),
    s = n(421380),
    l = n(397927),
    o = n(465794),
    d = n(212168),
    _ = n(780964),
    c = n(840065),
    u = n(287809),
    A = n(927578),
    E = n(652215),
    g = n(49999),
    I = n(788868),
    h = n(985018),
    C = n(956790);
function p(e) {
    var t;
    let { onClose: n, markAsDismissed: p } = e,
        f = (0, r.bG)([u.default], () => u.default.getCurrentUser()),
        m =
            (t = f?.premiumType) === I.PremiumTypes.TIER_2
                ? h.intl.string(h.t.jqO5Qn)
                : null == t
                  ? h.intl.string(h.t.f2qjw5)
                  : h.intl.string(h.t.SblICW),
        S = A.Ay.canUseCustomCallSounds(f);
    return (0, i.jsxs)(d.A, {
        isShown: !0,
        type: d.i.PREMIUM,
        className: C.ne,
        backgroundClassName: C.u4,
        children: [
            null != p
                ? (0, i.jsx)(l.DUT, {
                      className: C.VN,
                      onClick: () => p?.(g.i.DISMISS),
                      "aria-label": h.intl.string(h.t.cpT0Cq),
                      children: (0, i.jsx)(l.PGe, { size: "xs", color: "currentColor", className: C.ut }),
                  })
                : null,
            (0, i.jsxs)("div", {
                className: C.ex,
                children: [
                    (0, i.jsx)(l.tvc, { size: "sm", color: "currentColor", className: C.ax }),
                    (0, i.jsx)(l.Heading, { variant: "heading-sm/bold", children: h.intl.string(h.t.dTbAxx) }),
                ],
            }),
            (0, i.jsx)(a.E, { variant: "text-sm/normal", children: m }),
            S
                ? (0, i.jsx)(l.Button, {
                      onClick: function () {
                          (0, c.openUserSettings)(_.X.SOUNDBOARD_CATEGORY), n?.(), p?.(g.i.PRIMARY);
                      },
                      text: h.intl.string(h.t.RzWDqY),
                      fullWidth: !0,
                  })
                : (0, i.jsx)(o.A, {
                      textOptions: { textOverride: h.intl.string(h.t.pj0XBN) },
                      subscriptionTier: I.pe.TIER_2,
                      premiumModalAnalyticsLocation: {
                          section: E.JJy.SOUNDBOARD_SOUND_PICKER,
                          object: E.ZSU.BUTTON_CTA,
                      },
                      color: s.$n.Colors.GREEN,
                      onSubscribeModalClose: () => p?.(g.i.PRIMARY),
                  }),
        ],
    });
}
