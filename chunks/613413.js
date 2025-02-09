n.d(t, { Z: () => g }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(232713),
    l = n(442837),
    u = n(481060),
    c = n(314910),
    d = n(906467),
    f = n(857192),
    _ = n(835225),
    p = n(117795),
    h = n(565384),
    m = n(679797);
function g() {
    let { debugTrackedData: e, impressions: t } = (0, h.Xo)(
            (e) => ({
                debugTrackedData: e.debugTrackedData,
                impressions: e.impressions
            }),
            o.X
        ),
        n = (0, l.e7)([f.default], () => f.default.isAnalyticsDebuggerEnabled),
        a = (0, l.e7)([d.Z], () => d.Z.isDeveloper),
        [g, E] = r.useState(!1),
        { name: v, ...y } = null != e ? e : {},
        I = null != v;
    return a && n
        ? (0, i.jsx)(c.ZP, {
              children: (0, i.jsxs)('div', {
                  className: s()(m.container, {
                      [m.containerMinimized]: g,
                      [m.notTracked]: !I
                  }),
                  children: [
                      (0, i.jsx)(u.P3F, {
                          className: m.minimizeButton,
                          onClick: () => {
                              E(!g);
                          },
                          children: g ? (0, i.jsx)(_.Z, {}) : (0, i.jsx)(p.Z, {})
                      }),
                      (0, i.jsxs)('div', {
                          className: s()(m.content, { [m.contentMinimized]: g }),
                          children: [
                              (0, i.jsxs)(u.Text, {
                                  className: s()(m.label, { [m.notTracked]: !I }),
                                  variant: 'text-xxs/normal',
                                  children: [
                                      I
                                          ? (0, i.jsx)(u.owK, {
                                                size: 'md',
                                                color: 'currentColor',
                                                className: m.iconTracked
                                            })
                                          : (0, i.jsx)(u.k$p, {
                                                size: 'md',
                                                color: 'currentColor',
                                                className: m.iconNotTracked
                                            }),
                                      null != v ? v : '(untracked)'
                                  ]
                              }),
                              (0, i.jsx)('div', {
                                  className: m.current,
                                  children: JSON.stringify(y, void 0, 2)
                              }),
                              (0, i.jsx)(u.Text, {
                                  className: s()(m.label, { [m.notTracked]: !I }),
                                  variant: 'text-xxs/normal',
                                  children: 'impressions stack'
                              }),
                              (0, i.jsx)('div', {
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
