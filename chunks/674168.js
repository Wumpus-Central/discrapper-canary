n.d(t, {
    m: () => E,
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
    u = n(840065),
    p = n(287809),
    _ = n(927578),
    m = n(652215),
    g = n(49999),
    f = n(788868),
    b = n(355097),
    h = n(985018),
    A = n(956790);

function E(e) {
    var t;
    let { onClose: n, markAsDismissed: E } = e,
        x = (0, i.bG)([p.default], () => p.default.getCurrentUser()),
        O =
            (t = null == x ? void 0 : x.premiumType) === f.PremiumTypes.TIER_2
                ? h.intl.string(h.t.jqO5Qn)
                : null == t
                  ? h.intl.string(h.t.f2qjw5)
                  : h.intl.string(h.t.SblICW),
        C = _.Ay.canUseCustomCallSounds(x);
    return (0, r.jsxs)(c.A, {
        isShown: !0,
        type: c.i.PREMIUM,
        className: A.ne,
        backgroundClassName: A.u4,
        children: [
            null != E
                ? (0, r.jsx)(a.DUT, {
                      className: A.VN,
                      onClick: () => (null == E ? void 0 : E(g.i.DISMISS)),
                      "aria-label": h.intl.string(h.t.cpT0Cq),
                      children: (0, r.jsx)(a.PGe, {
                          size: "xs",
                          color: "currentColor",
                          className: A.ut,
                      }),
                  })
                : null,
            (0, r.jsxs)("div", {
                className: A.ex,
                children: [
                    (0, r.jsx)(a.tvc, {
                        size: "sm",
                        color: "currentColor",
                        className: A.ax,
                    }),
                    (0, r.jsx)(a.Heading, {
                        variant: "heading-sm/bold",
                        children: h.intl.string(h.t.dTbAxx),
                    }),
                ],
            }),
            (0, r.jsx)(l.E, {
                variant: "text-sm/normal",
                children: O,
            }),
            C
                ? (0, r.jsx)(a.Button, {
                      onClick: function () {
                          (0, u.openUserSettings)(d.X.SOUNDBOARD_CATEGORY, {
                              section: m.nc_.VOICE,
                              subsection: b.MJ,
                          }),
                              null == n || n(),
                              null == E || E(g.i.PRIMARY);
                      },
                      text: h.intl.string(h.t.RzWDqY),
                      fullWidth: !0,
                  })
                : (0, r.jsx)(o.A, {
                      textOptions: {
                          textOverride: h.intl.string(h.t.pj0XBN),
                      },
                      subscriptionTier: f.pe.TIER_2,
                      premiumModalAnalyticsLocation: {
                          section: m.JJy.SOUNDBOARD_SOUND_PICKER,
                          object: m.ZSU.BUTTON_CTA,
                      },
                      color: s.$n.Colors.GREEN,
                      onSubscribeModalClose: () => (null == E ? void 0 : E(g.i.PRIMARY)),
                  }),
        ],
    });
}
