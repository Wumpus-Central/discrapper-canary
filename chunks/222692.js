n.d(t, { A: () => c });
var i = n(477900);
n(582128);
var r = n(192308),
    l = n(625075),
    s = n(626822),
    a = n(731854),
    o = n(375708);
function c(e) {
    l.k.getConfig({ location: "handleCameraUnavailable" }).videoEnabled &&
        (s.Ay.supports(a.O5.VIDEO)
            ? (0, r.openModalLazy)(async () => {
                  let { default: t } = await n.e("11487").then(n.bind(n, 792866));
                  return (n) =>
                      (0, i.jsx)(t, {
                          ...n,
                          header: o.intl.string(o.t["8jSzSe"]),
                          body: o.intl.string(o.t.bhqSWl),
                          confirmText: o.intl.string(o.t.BddRzS),
                          onConfirm: e,
                      });
              })
            : (0, r.openModalLazy)(async () => {
                  let { default: t } = await n.e("11487").then(n.bind(n, 792866));
                  return (l) =>
                      (0, i.jsx)(t, {
                          ...l,
                          header: o.intl.string(o.t.XLw6FF),
                          body: o.intl.string(o.t.wVjKGi),
                          confirmText: o.intl.string(o.t["BK8LK+"]),
                          onConfirm: () => {
                              e?.(),
                                  (0, r.openModalLazy)(async () => {
                                      let { default: e } = await Promise.all([
                                          n.e("773708"),
                                          n.e("944602"),
                                          n.e("825280"),
                                      ]).then(n.bind(n, 987482));
                                      return (t) => (0, i.jsx)(e, { source: "Video unsupported browser", ...t });
                                  });
                          },
                      });
              }));
}
