n.d(t, { Z: () => b }), n(47120), n(26686);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(788347),
    l = n(442837),
    c = n(481060),
    u = n(314910),
    d = n(906467),
    f = n(857192),
    _ = n(835225),
    p = n(117795),
    h = n(565384),
    m = n(418075);
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = E(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function b() {
    let { debugTrackedData: e, impressions: t } = (0, h.Xo)(
            (e) => ({
                debugTrackedData: e.debugTrackedData,
                impressions: e.impressions
            }),
            s.X
        ),
        n = (0, l.e7)([f.default], () => f.default.isAnalyticsDebuggerEnabled),
        o = (0, l.e7)([d.Z], () => d.Z.isDeveloper),
        [E, b] = i.useState(!1),
        y = null != e ? e : {},
        { name: v } = y,
        O = g(y, ['name']),
        I = null != v;
    return o && n
        ? (0, r.jsx)(u.ZP, {
              children: (0, r.jsxs)('div', {
                  className: a()(m.container, {
                      [m.containerMinimized]: E,
                      [m.notTracked]: !I
                  }),
                  children: [
                      (0, r.jsx)(c.P3F, {
                          className: m.minimizeButton,
                          onClick: () => {
                              b(!E);
                          },
                          children: E ? (0, r.jsx)(_.Z, {}) : (0, r.jsx)(p.Z, {})
                      }),
                      (0, r.jsxs)('div', {
                          className: a()(m.content, { [m.contentMinimized]: E }),
                          children: [
                              (0, r.jsxs)(c.Text, {
                                  className: a()(m.label, { [m.notTracked]: !I }),
                                  variant: 'text-xxs/normal',
                                  children: [
                                      I
                                          ? (0, r.jsx)(c.owK, {
                                                size: 'md',
                                                color: 'currentColor',
                                                className: m.iconTracked
                                            })
                                          : (0, r.jsx)(c.k$p, {
                                                size: 'md',
                                                color: 'currentColor',
                                                className: m.iconNotTracked
                                            }),
                                      null != v ? v : '(untracked)'
                                  ]
                              }),
                              (0, r.jsx)('div', {
                                  className: m.current,
                                  children: JSON.stringify(O, void 0, 2)
                              }),
                              (0, r.jsx)(c.Text, {
                                  className: a()(m.label, { [m.notTracked]: !I }),
                                  variant: 'text-xxs/normal',
                                  children: 'impressions stack'
                              }),
                              (0, r.jsx)('div', {
                                  className: m.stack,
                                  children: JSON.stringify(t, void 0, 2)
                              })
                          ]
                      })
                  ]
              })
          })
        : null;
}
