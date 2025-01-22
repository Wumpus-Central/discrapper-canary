r.d(n, {
    Z: function () {
        return v;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(232713),
    c = r(442837),
    d = r(481060),
    f = r(314910),
    p = r(906467),
    h = r(857192),
    _ = r(835225),
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
        i = (0, c.e7)([p.Z], () => p.Z.isDeveloper),
        [s, v] = o.useState(!1),
        { name: y, ...b } = null != e ? e : {},
        I = null != y;
    return i && r
        ? (0, a.jsx)(f.ZP, {
              children: (0, a.jsxs)('div', {
                  className: l()(E.container, {
                      [E.containerMinimized]: s,
                      [E.notTracked]: !I
                  }),
                  children: [
                      (0, a.jsx)(d.Clickable, {
                          className: E.minimizeButton,
                          onClick: () => {
                              v(!s);
                          },
                          children: s ? (0, a.jsx)(_.Z, {}) : (0, a.jsx)(m.Z, {})
                      }),
                      (0, a.jsxs)('div', {
                          className: l()(E.content, { [E.contentMinimized]: s }),
                          children: [
                              (0, a.jsxs)(d.Text, {
                                  className: l()(E.label, { [E.notTracked]: !I }),
                                  variant: 'text-xxs/normal',
                                  children: [
                                      I
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
                                      null != y ? y : '(untracked)'
                                  ]
                              }),
                              (0, a.jsx)('div', {
                                  className: E.current,
                                  children: JSON.stringify(b, void 0, 2)
                              }),
                              (0, a.jsx)(d.Text, {
                                  className: l()(E.label, { [E.notTracked]: !I }),
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
