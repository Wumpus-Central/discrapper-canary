r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    o = r(131951),
    s = r(65154),
    l = r(388032);
function u(e) {
    o.Z.supports(s.AN.VIDEO)
        ? (0, a.openModalLazy)(async () => {
              let { default: n } = await r.e('67753').then(r.bind(r, 873809));
              return (r) =>
                  (0, i.jsx)(n, {
                      ...r,
                      header: l.intl.string(l.t['8jSzSU']),
                      body: l.intl.string(l.t.bhqSWl),
                      confirmText: l.intl.string(l.t.BddRzc),
                      onConfirm: e
                  });
          })
        : (0, a.openModalLazy)(async () => {
              let { default: n } = await r.e('67753').then(r.bind(r, 873809));
              return (o) =>
                  (0, i.jsx)(n, {
                      ...o,
                      header: l.intl.string(l.t.XLw6FB),
                      body: l.intl.string(l.t.wVjKGh),
                      confirmText: l.intl.string(l.t.BK8LKy),
                      onConfirm: () => {
                          null == e || e(),
                              (0, a.openModalLazy)(async () => {
                                  let { default: e } = await r.e('82935').then(r.bind(r, 431583));
                                  return (n) =>
                                      (0, i.jsx)(e, {
                                          source: 'Video unsupported browser',
                                          ...n
                                      });
                              });
                      }
                  });
          });
}
