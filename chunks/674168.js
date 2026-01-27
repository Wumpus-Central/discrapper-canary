n.d(t, {
    m: () => x,
});
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(571356),
    s = n(421380),
    a = n(397927),
    o = n(465794),
    c = n(212168),
    d = n(780964),
    u = n(358776),
    _ = n(840065),
    p = n(287809),
    m = n(927578),
    g = n(652215),
    A = n(49999),
    f = n(788868),
    h = n(355097),
    b = n(985018),
    E = n(956790);

function x(e) {
    var t;
    let { onClose: n, markAsDismissed: x } = e,
        O = (0, i.bG)([p.default], () => p.default.getCurrentUser()),
        C =
            (t = null == O ? void 0 : O.premiumType) === f.PremiumTypes.TIER_2
                ? b.intl.string(b.t.jqO5Qn)
                : null == t
                  ? b.intl.string(b.t.f2qjw5)
                  : b.intl.string(b.t.SblICW),
        I = m.Ay.canUseCustomCallSounds(O);
    return (0, r.jsxs)(c.A, {
        isShown: !0,
        type: c.i.PREMIUM,
        className: E.ne,
        backgroundClassName: E.u4,
        children: [
            null != x
                ? (0, r.jsx)(a.DUT, {
                      className: E.VN,
                      onClick: () => (null == x ? void 0 : x(A.i.DISMISS)),
                      "aria-label": b.intl.string(b.t.cpT0Cq),
                      children: (0, r.jsx)(a.PGe, {
                          size: "xs",
                          color: "currentColor",
                          className: E.ut,
                      }),
                  })
                : null,
            (0, r.jsxs)("div", {
                className: E.ex,
                children: [
                    (0, r.jsx)(a.tvc, {
                        size: "sm",
                        color: "currentColor",
                        className: E.ax,
                    }),
                    (0, r.jsx)(a.Heading, {
                        variant: "heading-sm/bold",
                        children: b.intl.string(b.t.dTbAxx),
                    }),
                ],
            }),
            (0, r.jsx)(l.E, {
                variant: "text-sm/normal",
                children: C,
            }),
            I
                ? (0, r.jsx)(a.Button, {
                      onClick: function () {
                          let e = (0, u.qz)("CustomCallSoundUpsell")
                              ? d.X.SOUNDBOARD_CATEGORY
                              : d.X.VOICE_AND_VIDEO_PANEL;
                          (0, _.openUserSettings)(e, {
                              section: g.nc_.VOICE,
                              subsection: h.MJ,
                          }),
                              null == n || n(),
                              null == x || x(A.i.PRIMARY);
                      },
                      text: b.intl.string(b.t.RzWDqY),
                      fullWidth: !0,
                  })
                : (0, r.jsx)(o.A, {
                      textOptions: {
                          textOverride: b.intl.string(b.t.pj0XBN),
                      },
                      subscriptionTier: f.pe.TIER_2,
                      premiumModalAnalyticsLocation: {
                          section: g.JJy.SOUNDBOARD_SOUND_PICKER,
                          object: g.ZSU.BUTTON_CTA,
                      },
                      color: s.$n.Colors.GREEN,
                      onSubscribeModalClose: () => (null == x ? void 0 : x(A.i.PRIMARY)),
                  }),
        ],
    });
}
