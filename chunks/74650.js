n.d(t, { U: () => h });
var i = n(255367);
n(73800);
var r = n(442837),
    s = n(755721),
    a = n(481060),
    l = n(767714),
    o = n(594174),
    c = n(74538),
    d = n(921944),
    u = n(474936),
    m = n(388032),
    p = n(441425),
    g = n(217379);
function h(e) {
    let { markAsDismissed: t, onCTA: n } = e,
        h = (0, r.e7)([o.default], () => o.default.getCurrentUser()),
        f = (0, c.M5)(h, u.p9.TIER_2);
    return (0, i.jsx)('div', {
        className: p.popup,
        children: (0, i.jsxs)('div', {
            className: p.content,
            children: [
                (0, i.jsx)(a.P3F, {
                    className: p.closeIcon,
                    onClick: () => t(d.L.USER_DISMISS),
                    children: (0, i.jsx)(a.Dio, { size: 'xs' })
                }),
                (0, i.jsx)('img', {
                    src: g,
                    alt: '',
                    className: p.asset
                }),
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(a.X6q, {
                            variant: 'heading-md/semibold',
                            color: 'text-primary',
                            className: p.title,
                            children: m.intl.string(m.t['PRXV4+'])
                        }),
                        (0, i.jsx)(a.Text, {
                            variant: 'text-sm/medium',
                            color: 'text-secondary',
                            children: m.intl.string(m.t.RSHtFx)
                        })
                    ]
                }),
                f
                    ? (0, i.jsx)(a.zxk, {
                          text: m.intl.string(m.t.LhcHi4),
                          fullWidth: !0,
                          onClick: () => {
                              (t(d.L.TAKE_ACTION), n());
                          }
                      })
                    : (0, i.jsx)(l.Z, {
                          onClick: () => {
                              t(d.L.TAKE_ACTION);
                          },
                          showGradient: !0,
                          subscriptionTier: u.Si.TIER_2,
                          size: s.zx.Sizes.LARGE,
                          color: s.zx.Colors.CUSTOM,
                          textOptions: { textOverride: m.intl.string(m.t.pj0XBA) },
                          className: p.button
                      })
            ]
        })
    });
}
