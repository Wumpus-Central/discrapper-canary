n.d(t, { Z: () => m }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(433517),
    c = n(481060),
    u = n(304761),
    d = n(865427),
    p = n(820254),
    h = n(388032),
    f = n(179439);
let g = 'isHideDevBanner',
    m = () => {
        var e;
        let [t, n] = (0, i.useState)((null === (e = s.K.get(g, 'false')) || void 0 === e ? void 0 : e.toString()) === 'true'),
            l = (0, a.e7)([u.C], () => {
                var e;
                return (0, d.fD)() ? (null === (e = u.C.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web) : null;
            });
        if (t) return null;
        let m = () => {
                s.K.set(g, !0), n(!0);
            },
            b = () =>
                (0, r.jsx)(c.P3F, {
                    onClick: m,
                    className: f.closeButton,
                    'aria-label': h.NW.string(h.t.WAI6xs),
                    children: (0, r.jsx)(c.Dio, {
                        size: 'md',
                        color: 'currentColor',
                        className: f.closeIcon
                    })
                });
        return null != l
            ? (0, r.jsxs)('div', {
                  className: o()(f.devBanner, f.buildOverride),
                  children: [(0, r.jsx)(p.Z, { className: f.icon }), h.NW.string(h.t.Wj3LW1), (0, r.jsx)(b, {})]
              })
            : 'staging' === window.GLOBAL_ENV.RELEASE_CHANNEL
              ? (0, r.jsxs)('div', {
                    className: o()(f.devBanner, f.staging),
                    children: [(0, r.jsx)(p.Z, { className: f.icon }), h.NW.format(h.t.uyrfYG, { buildNumber: '370217' }), (0, r.jsx)(b, {})]
                })
              : null;
    };
