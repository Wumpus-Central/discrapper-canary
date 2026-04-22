"use strict";
n.d(t, { A: () => l });
var r = n(627968);
n(64700);
var i = n(192308),
    s = n(430452),
    a = n(731854),
    o = n(985018);
function l(e) {
    s.Ay.supports(a.O5.VIDEO)
        ? (0, i.openModalLazy)(async () => {
              let { default: t } = await n.e("11487").then(n.bind(n, 792866));
              return (n) =>
                  (0, r.jsx)(t, {
                      ...n,
                      header: o.intl.string(o.t["8jSzSe"]),
                      body: o.intl.string(o.t.bhqSWl),
                      confirmText: o.intl.string(o.t.BddRzS),
                      onConfirm: e,
                  });
          })
        : (0, i.openModalLazy)(async () => {
              let { default: t } = await n.e("11487").then(n.bind(n, 792866));
              return (s) =>
                  (0, r.jsx)(t, {
                      ...s,
                      header: o.intl.string(o.t.XLw6FF),
                      body: o.intl.string(o.t.wVjKGi),
                      confirmText: o.intl.string(o.t["BK8LK+"]),
                      onConfirm: () => {
                          e?.(),
                              (0, i.openModalLazy)(async () => {
                                  let { default: e } = await Promise.all([n.e("56423"), n.e("25280")]).then(
                                      n.bind(n, 987482),
                                  );
                                  return (t) => (0, r.jsx)(e, { source: "Video unsupported browser", ...t });
                              });
                      },
                  });
          });
}
