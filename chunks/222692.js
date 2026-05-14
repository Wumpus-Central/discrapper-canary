"use strict";
n.d(t, { A: () => l });
var i = n(627968);
n(64700);
var r = n(192308),
    s = n(235058),
    a = n(731854),
    o = n(375708);
function l(e) {
    s.Ay.supports(a.O5.VIDEO)
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
              return (s) =>
                  (0, i.jsx)(t, {
                      ...s,
                      header: o.intl.string(o.t.XLw6FF),
                      body: o.intl.string(o.t.wVjKGi),
                      confirmText: o.intl.string(o.t["BK8LK+"]),
                      onConfirm: () => {
                          e?.(),
                              (0, r.openModalLazy)(async () => {
                                  let { default: e } = await Promise.all([
                                      n.e("81013"),
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
