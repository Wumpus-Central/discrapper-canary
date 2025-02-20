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
    g = n(179439);
let f = 'isHideDevBanner',
    m = () => {
        var e;
        let [t, n] = (0, i.useState)((null === (e = s.K.get(f, 'false')) || void 0 === e ? void 0 : e.toString()) === 'true'),
            l = (0, a.e7)([u.C], () => {
                var e;
                return (0, d.fD)() ? (null === (e = u.C.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web) : null;
            });
        if (t) return null;
        let m = () => {
                s.K.set(f, !0), n(!0);
            },
            b = () =>
                (0, r.jsx)(c.P3F, {
                    onClick: m,
                    className: g.closeButton,
                    'aria-label': h.NW.string(h.t.WAI6xs),
                    children: (0, r.jsx)(c.Dio, {
                        size: 'md',
                        color: 'currentColor',
                        className: g.closeIcon
                    })
                });
        return null != l
            ? (0, r.jsxs)('div', {
                  className: o()(g.devBanner, g.buildOverride),
                  children: [(0, r.jsx)(p.Z, { className: g.icon }), h.NW.string(h.t.Wj3LW1), (0, r.jsx)(b, {})]
              })
            : 'staging' === window.GLOBAL_ENV.RELEASE_CHANNEL
              ? (0, r.jsxs)('div', {
                    className: o()(g.devBanner, g.staging),
                    children: [(0, r.jsx)(p.Z, { className: g.icon }), h.NW.format(h.t.uyrfYG, { buildNumber: '370144' }), (0, r.jsx)(b, {})]
                })
              : null;
    };
