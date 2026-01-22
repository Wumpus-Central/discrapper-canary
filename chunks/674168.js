n.d(t, {
    m: () => A,
});
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(571356),
    s = n(421380),
    o = n(397927),
    l = n(465794),
    c = n(212168),
    u = n(780964),
    d = n(358776),
    f = n(840065),
    p = n(287809),
    _ = n(927578),
    h = n(652215),
    m = n(49999),
    g = n(788868),
    E = n(355097),
    b = n(985018),
    y = n(956790);

function O(e) {
    return e === g.PremiumTypes.TIER_2
        ? b.intl.string(b.t.jqO5Qn)
        : null == e
          ? b.intl.string(b.t.f2qjw5)
          : b.intl.string(b.t.SblICW);
}

function A(e) {
    let { onClose: t, markAsDismissed: n } = e,
        A = (0, i.bG)([p.default], () => p.default.getCurrentUser()),
        v = O(null == A ? void 0 : A.premiumType),
        S = _.Ay.canUseCustomCallSounds(A);

    function I() {
        let e = (0, d.qz)("CustomCallSoundUpsell") ? u.X.SOUNDBOARD_CATEGORY : u.X.VOICE_AND_VIDEO_PANEL;
        (0, f.openUserSettings)(e, {
            section: h.nc_.VOICE,
            subsection: E.MJ,
        }),
            null == t || t(),
            null == n || n(m.i.PRIMARY);
    }
    return (0, r.jsxs)(c.A, {
        isShown: !0,
        type: c.i.PREMIUM,
        className: y.ne,
        backgroundClassName: y.u4,
        children: [
            null != n
                ? (0, r.jsx)(o.DUT, {
                      className: y.VN,
                      onClick: () => (null == n ? void 0 : n(m.i.DISMISS)),
                      "aria-label": b.intl.string(b.t.cpT0Cq),
                      children: (0, r.jsx)(o.PGe, {
                          size: "xs",
                          color: "currentColor",
                          className: y.ut,
                      }),
                  })
                : null,
            (0, r.jsxs)("div", {
                className: y.ex,
                children: [
                    (0, r.jsx)(o.tvc, {
                        size: "sm",
                        color: "currentColor",
                        className: y.ax,
                    }),
                    (0, r.jsx)(o.Heading, {
                        variant: "heading-sm/bold",
                        children: b.intl.string(b.t.dTbAxx),
                    }),
                ],
            }),
            (0, r.jsx)(a.E, {
                variant: "text-sm/normal",
                children: v,
            }),
            S
                ? (0, r.jsx)(o.Button, {
                      onClick: I,
                      text: b.intl.string(b.t.RzWDqY),
                      fullWidth: !0,
                  })
                : (0, r.jsx)(l.A, {
                      textOptions: {
                          textOverride: b.intl.string(b.t.pj0XBN),
                      },
                      subscriptionTier: g.pe.TIER_2,
                      premiumModalAnalyticsLocation: {
                          section: h.JJy.SOUNDBOARD_SOUND_PICKER,
                          object: h.ZSU.BUTTON_CTA,
                      },
                      color: s.$n.Colors.GREEN,
                      onSubscribeModalClose: () => (null == n ? void 0 : n(m.i.PRIMARY)),
                  }),
        ],
    });
}
