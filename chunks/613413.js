r.d(n, {
    Z: function () {
        return v;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(232713),
    c = r(442837),
    d = r(481060),
    f = r(314910),
    _ = r(906467),
    h = r(857192),
    p = r(835225),
    m = r(117795),
    g = r(565384),
    E = r(854035);
function v() {
    let { debugTrackedData: e, impressions: n } = (0, g.Xo)(
            (e) => ({
                debugTrackedData: e.debugTrackedData,
                impressions: e.impressions
            }),
            u.X
        ),
        r = (0, c.e7)([h.default], () => h.default.isAnalyticsDebuggerEnabled),
        i = (0, c.e7)([_.Z], () => _.Z.isDeveloper),
        [o, v] = s.useState(!1),
        { name: I, ...T } = null != e ? e : {},
        b = null != I;
    return i && r
        ? (0, a.jsx)(f.ZP, {
              children: (0, a.jsxs)('div', {
                  className: l()(E.container, {
                      [E.containerMinimized]: o,
                      [E.notTracked]: !b
                  }),
                  children: [
                      (0, a.jsx)(d.Clickable, {
                          className: E.minimizeButton,
                          onClick: () => {
                              v(!o);
                          },
                          children: o ? (0, a.jsx)(p.Z, {}) : (0, a.jsx)(m.Z, {})
                      }),
                      (0, a.jsxs)('div', {
                          className: l()(E.content, { [E.contentMinimized]: o }),
                          children: [
                              (0, a.jsxs)(d.Text, {
                                  className: l()(E.label, { [E.notTracked]: !b }),
                                  variant: 'text-xxs/normal',
                                  children: [
                                      b
                                          ? (0, a.jsx)(d.CircleCheckIcon, {
                                                size: 'md',
                                                color: 'currentColor',
                                                className: E.iconTracked
                                            })
                                          : (0, a.jsx)(d.CircleXIcon, {
                                                size: 'md',
                                                color: 'currentColor',
                                                className: E.iconNotTracked
                                            }),
                                      null != I ? I : '(untracked)'
                                  ]
                              }),
                              (0, a.jsx)('div', {
                                  className: E.current,
                                  children: JSON.stringify(T, void 0, 2)
                              }),
                              (0, a.jsx)(d.Text, {
                                  className: l()(E.label, { [E.notTracked]: !b }),
                                  variant: 'text-xxs/normal',
                                  children: 'impressions stack'
                              }),
                              (0, a.jsx)('div', {
                                  className: E.stack,
                                  children: JSON.stringify(n, void 0, 2)
                              })
                          ]
                      })
                  ]
              })
          })
        : null;
}
