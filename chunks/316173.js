n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(433517),
    c = n(481060),
    d = n(304761),
    u = n(865427),
    h = n(820254),
    m = n(388032),
    p = n(820076);
let g = 'isHideDevBanner';
t.Z = () => {
    var e;
    let [t, n] = (0, r.useState)((null === (e = s.K.get(g, 'false')) || void 0 === e ? void 0 : e.toString()) === 'true'),
        l = (0, o.e7)([d.C], () => {
            var e;
            return (0, u.fD)() ? (null === (e = d.C.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web) : null;
        });
    if (t) return null;
    let f = () => {
            s.K.set(g, !0), n(!0);
        },
        _ = () =>
            (0, i.jsx)(c.Clickable, {
                onClick: f,
                className: p.closeButton,
                'aria-label': m.intl.string(m.t.WAI6xs),
                children: (0, i.jsx)(c.XSmallIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: p.closeIcon
                })
            });
    return null != l
        ? (0, i.jsxs)('div', {
              className: a()(p.devBanner, p.buildOverride),
              children: [(0, i.jsx)(h.Z, { className: p.icon }), m.intl.string(m.t.Wj3LW1), (0, i.jsx)(_, {})]
          })
        : 'staging' === window.GLOBAL_ENV.RELEASE_CHANNEL
          ? (0, i.jsxs)('div', {
                className: a()(p.devBanner, p.staging),
                children: [(0, i.jsx)(h.Z, { className: p.icon }), m.intl.format(m.t.uyrfYG, { buildNumber: '355940' }), (0, i.jsx)(_, {})]
            })
          : null;
};
