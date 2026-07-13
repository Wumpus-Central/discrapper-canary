"use strict";
n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var r = n(192308),
    a = n(451409),
    s = n(731854),
    l = n(375708);
function o(e) {
    a.Ay.supports(s.O5.VIDEO)
        ? (0, r.openModalLazy)(async () => {
              let { default: t } = await n.e("11487").then(n.bind(n, 792866));
              return (n) =>
                  (0, i.jsx)(t, {
                      ...n,
                      header: l.intl.string(l.t["8jSzSe"]),
                      body: l.intl.string(l.t.bhqSWl),
                      confirmText: l.intl.string(l.t.BddRzS),
                      onConfirm: e,
                  });
          })
        : (0, r.openModalLazy)(async () => {
              let { default: t } = await n.e("11487").then(n.bind(n, 792866));
              return (a) =>
                  (0, i.jsx)(t, {
                      ...a,
                      header: l.intl.string(l.t.XLw6FF),
                      body: l.intl.string(l.t.wVjKGi),
                      confirmText: l.intl.string(l.t["BK8LK+"]),
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
