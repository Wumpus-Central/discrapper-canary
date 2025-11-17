n.d(t, { U: () => x });
var a = n(54381);
n(473749);
var l = n(442837),
    r = n(755721),
    i = n(481060),
    s = n(767714),
    o = n(594174),
    c = n(74538),
    d = n(921944),
    u = n(474936),
    m = n(388032),
    p = n(972979),
    h = n(217379);
function x(e) {
    let { markAsDismissed: t, onCTA: n } = e,
        x = (0, l.e7)([o.default], () => o.default.getCurrentUser()),
        g = (0, c.M5)(x, u.PremiumTypes.TIER_2);
    return (0, a.jsx)("div", {
        className: p.popup,
        children: (0, a.jsxs)("div", {
            className: p.content,
            children: [
                (0, a.jsx)(i.P3F, {
                    className: p.closeIcon,
                    onClick: () => t(d.L.USER_DISMISS),
                    children: (0, a.jsx)(i.Dio, { size: "xs" }),
                }),
                (0, a.jsx)("img", {
                    src: h,
                    alt: "",
                    className: p.asset,
                }),
                (0, a.jsxs)("div", {
                    children: [
                        (0, a.jsx)(i.Heading, {
                            variant: "heading-md/semibold",
                            color: "text-primary",
                            className: p.title,
                            children: m.intl.string(m.t.PRXV49),
                        }),
                        (0, a.jsx)(i.Text, {
                            variant: "text-sm/medium",
                            color: "text-secondary",
                            children: m.intl.string(m.t["RSHtF+"]),
                        }),
                    ],
                }),
                g
                    ? (0, a.jsx)(i.Button, {
                          text: m.intl.string(m.t.LhcHi5),
                          fullWidth: !0,
                          onClick: () => {
                              t(d.L.TAKE_ACTION), n();
                          },
                      })
                    : (0, a.jsx)(s.Z, {
                          onClick: () => {
                              t(d.L.TAKE_ACTION);
                          },
                          showGradient: !0,
                          subscriptionTier: u.Si.TIER_2,
                          size: r.zx.Sizes.LARGE,
                          color: r.zx.Colors.CUSTOM,
                          textOptions: { textOverride: m.intl.string(m.t.pj0XBN) },
                          className: p.button,
                      }),
            ],
        }),
    });
}
