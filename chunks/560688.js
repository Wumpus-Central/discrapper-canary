n.d(t, { Z: () => l });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(131951),
    s = n(65154),
    o = n(388032);
function l(e) {
    a.Z.supports(s.AN.VIDEO)
        ? (0, r.ZDy)(async () => {
              let { default: t } = await n.e('67753').then(n.bind(n, 873809));
              return (n) =>
                  (0, i.jsx)(t, {
                      ...n,
                      header: o.intl.string(o.t['8jSzSU']),
                      body: o.intl.string(o.t.bhqSWl),
                      confirmText: o.intl.string(o.t.BddRzc),
                      onConfirm: e
                  });
          })
        : (0, r.ZDy)(async () => {
              let { default: t } = await n.e('67753').then(n.bind(n, 873809));
              return (a) =>
                  (0, i.jsx)(t, {
                      ...a,
                      header: o.intl.string(o.t.XLw6FB),
                      body: o.intl.string(o.t.wVjKGh),
                      confirmText: o.intl.string(o.t.BK8LKy),
                      onConfirm: () => {
                          null == e || e(),
                              (0, r.ZDy)(async () => {
                                  let { default: e } = await n.e('74023').then(n.bind(n, 431583));
                                  return (t) =>
                                      (0, i.jsx)(e, {
                                          source: 'Video unsupported browser',
                                          ...t
                                      });
                              });
                      }
                  });
          });
}
