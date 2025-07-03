n.d(t, { U: () => g });
var i = n(255367);
n(73800);
var r = n(442837),
    s = n(481060),
    l = n(767714),
    a = n(594174),
    o = n(74538),
    c = n(921944),
    d = n(474936),
    u = n(388032),
    m = n(441425),
    p = n(217379);
function g(e) {
    let { markAsDismissed: t, onCTA: n } = e,
        g = (0, r.e7)([a.default], () => a.default.getCurrentUser()),
        h = (0, o.M5)(g, d.p9.TIER_2);
    return (0, i.jsx)('div', {
        className: m.popup,
        children: (0, i.jsxs)('div', {
            className: m.content,
            children: [
                (0, i.jsx)(s.P3F, {
                    className: m.closeIcon,
                    onClick: () => t(c.L.USER_DISMISS),
                    children: (0, i.jsx)(s.Dio, { size: 'xs' })
                }),
                (0, i.jsx)('img', {
                    src: p,
                    alt: '',
                    className: m.asset
                }),
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(s.X6q, {
                            variant: 'heading-md/semibold',
                            color: 'text-primary',
                            className: m.title,
                            children: u.intl.string(u.t['PRXV4+'])
                        }),
                        (0, i.jsx)(s.Text, {
                            variant: 'text-sm/medium',
                            color: 'text-secondary',
                            children: u.intl.string(u.t.RSHtFx)
                        })
                    ]
                }),
                h
                    ? (0, i.jsx)(s.zxk, {
                          color: s.zxk.Colors.BRAND,
                          look: s.zxk.Looks.FILLED,
                          size: s.zxk.Sizes.LARGE,
                          fullWidth: !0,
                          onClick: () => {
                              (t(c.L.TAKE_ACTION), n());
                          },
                          className: m.button,
                          children: u.intl.string(u.t.LhcHi4)
                      })
                    : (0, i.jsx)(l.Z, {
                          onClick: () => {
                              t(c.L.TAKE_ACTION);
                          },
                          showGradient: !0,
                          subscriptionTier: d.Si.TIER_2,
                          size: s.zxk.Sizes.LARGE,
                          color: s.zxk.Colors.CUSTOM,
                          textOptions: { textOverride: u.intl.string(u.t.pj0XBA) },
                          className: m.button
                      })
            ]
        })
    });
}
