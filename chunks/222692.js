n.d(t, { A: () => u });
var i = n(477900);
n(582128);
var r = n(192308),
    l = n(834730),
    s = n(625075),
    a = n(25578),
    o = n(731854),
    c = n(375708);
function u(e) {
    s.k.getConfig({ location: "handleCameraUnavailable" }).videoEnabled
        ? a.Ay.supports(o.O5.VIDEO)
            ? (0, r.openModalLazy)(async () => {
                  let { default: t } = await n.e("11487").then(n.bind(n, 792866));
                  return (n) =>
                      (0, i.jsx)(t, {
                          ...n,
                          header: c.intl.string(c.t["8jSzSe"]),
                          body: c.intl.string(c.t.bhqSWl),
                          confirmText: c.intl.string(c.t.BddRzS),
                          onConfirm: e,
                      });
              })
            : (0, r.openModalLazy)(async () => {
                  let { default: t } = await n.e("11487").then(n.bind(n, 792866));
                  return (l) =>
                      (0, i.jsx)(t, {
                          ...l,
                          header: c.intl.string(c.t.XLw6FF),
                          body: c.intl.string(c.t.wVjKGi),
                          confirmText: c.intl.string(c.t["BK8LK+"]),
                          onConfirm: () => {
                              (e?.(),
                                  (0, r.openModalLazy)(async () => {
                                      let { default: e } = await Promise.all([
                                          n.e("915082"),
                                          n.e("944602"),
                                          n.e("825280"),
                                      ]).then(n.bind(n, 987482));
                                      return (t) => (0, i.jsx)(e, { source: "Video unsupported browser", ...t });
                                  }));
                          },
                      });
              })
        : (0, r.openModalLazy)(async () => {
              let { default: e } = await n.e("11487").then(n.bind(n, 792866));
              return (t) =>
                  (0, i.jsx)(e, {
                      ...t,
                      header: c.intl.string(c.t["8jSzSe"]),
                      body: c.intl.string(c.t.UoW002),
                      confirmText: c.intl.string(c.t.BddRzS),
                      children: (0, i.jsx)(l.E, {
                          variant: "text-sm/normal",
                          color: "text-subtle",
                          children: c.intl.format(c.t.BPDKoA, { helpdeskArticle: s.M }),
                      }),
                  });
          });
}
