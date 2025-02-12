n.d(t, { Z: () => _ }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(433517),
    c = n(481060),
    d = n(304761),
    u = n(865427),
    h = n(820254),
    m = n(388032),
    p = n(133220);
let g = 'isHideDevBanner',
    _ = () => {
        var e;
        let [t, n] = (0, l.useState)((null === (e = o.K.get(g, 'false')) || void 0 === e ? void 0 : e.toString()) === 'true'),
            r = (0, s.e7)([d.C], () => {
                var e;
                return (0, u.fD)() ? (null === (e = d.C.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web) : null;
            });
        if (t) return null;
        let _ = () => {
                o.K.set(g, !0), n(!0);
            },
            f = () =>
                (0, i.jsx)(c.P3F, {
                    onClick: _,
                    className: p.closeButton,
                    'aria-label': m.intl.string(m.t.WAI6xs),
                    children: (0, i.jsx)(c.Dio, {
                        size: 'md',
                        color: 'currentColor',
                        className: p.closeIcon
                    })
                });
        return null != r
            ? (0, i.jsxs)('div', {
                  className: a()(p.devBanner, p.buildOverride),
                  children: [(0, i.jsx)(h.Z, { className: p.icon }), m.intl.string(m.t.Wj3LW1), (0, i.jsx)(f, {})]
              })
            : 'staging' === window.GLOBAL_ENV.RELEASE_CHANNEL
              ? (0, i.jsxs)('div', {
                    className: a()(p.devBanner, p.staging),
                    children: [(0, i.jsx)(h.Z, { className: p.icon }), m.intl.format(m.t.uyrfYG, { buildNumber: '367944' }), (0, i.jsx)(f, {})]
                })
              : null;
    };
