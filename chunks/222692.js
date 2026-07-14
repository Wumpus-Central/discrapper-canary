n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var r = n(192308),
    l = n(186295),
    s = n(731854),
    a = n(375708);
function o(e) {
    l.Ay.supports(s.O5.VIDEO)
        ? (0, r.openModalLazy)(async () => {
              let { default: t } = await n.e("11487").then(n.bind(n, 792866));
              return (n) =>
                  (0, i.jsx)(t, {
                      ...n,
                      header: a.intl.string(a.t["8jSzSe"]),
                      body: a.intl.string(a.t.bhqSWl),
                      confirmText: a.intl.string(a.t.BddRzS),
                      onConfirm: e,
                  });
          })
        : (0, r.openModalLazy)(async () => {
              let { default: t } = await n.e("11487").then(n.bind(n, 792866));
              return (l) =>
                  (0, i.jsx)(t, {
                      ...l,
                      header: a.intl.string(a.t.XLw6FF),
                      body: a.intl.string(a.t.wVjKGi),
                      confirmText: a.intl.string(a.t["BK8LK+"]),
                      onConfirm: () => {
                          e?.(),
                              (0, r.openModalLazy)(async () => {
                                  let { default: e } = await Promise.all([
                                      n.e("17951"),
                                      n.e("15799"),
                                      n.e("44602"),
                                      n.e("25280"),
                                  ]).then(n.bind(n, 987482));
                                  return (t) => (0, i.jsx)(e, { source: "Video unsupported browser", ...t });
                              });
                      },
                  });
          });
}
