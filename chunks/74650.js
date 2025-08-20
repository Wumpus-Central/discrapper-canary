n.d(t, { U: () => h });
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(755721),
    o = n(481060),
    s = n(767714),
    l = n(594174),
    c = n(74538),
    u = n(921944),
    d = n(474936),
    f = n(388032),
    _ = n(972979),
    p = n(217379);
function h(e) {
    let { markAsDismissed: t, onCTA: n } = e,
        h = (0, i.e7)([l.default], () => l.default.getCurrentUser()),
        m = (0, c.M5)(h, d.p9.TIER_2);
    return (0, r.jsx)("div", {
        className: _.popup,
        children: (0, r.jsxs)("div", {
            className: _.content,
            children: [
                (0, r.jsx)(o.P3F, {
                    className: _.closeIcon,
                    onClick: () => t(u.L.USER_DISMISS),
                    children: (0, r.jsx)(o.Dio, { size: "xs" }),
                }),
                (0, r.jsx)("img", {
                    src: p,
                    alt: "",
                    className: _.asset,
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(o.X6q, {
                            variant: "heading-md/semibold",
                            color: "text-primary",
                            className: _.title,
                            children: f.intl.string(f.t["PRXV4+"]),
                        }),
                        (0, r.jsx)(o.Text, {
                            variant: "text-sm/medium",
                            color: "text-secondary",
                            children: f.intl.string(f.t.RSHtFx),
                        }),
                    ],
                }),
                m
                    ? (0, r.jsx)(o.zxk, {
                          text: f.intl.string(f.t.LhcHi4),
                          fullWidth: !0,
                          onClick: () => {
                              t(u.L.TAKE_ACTION), n();
                          },
                      })
                    : (0, r.jsx)(s.Z, {
                          onClick: () => {
                              t(u.L.TAKE_ACTION);
                          },
                          showGradient: !0,
                          subscriptionTier: d.Si.TIER_2,
                          size: a.zx.Sizes.LARGE,
                          color: a.zx.Colors.CUSTOM,
                          textOptions: { textOverride: f.intl.string(f.t.pj0XBA) },
                          className: _.button,
                      }),
            ],
        }),
    });
}
