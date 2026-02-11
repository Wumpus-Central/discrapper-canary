"use strict";
n.d(t, { A: () => l });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(430452),
    s = n(731854),
    o = n(985018);
function l(e) {
    a.Ay.supports(s.O5.VIDEO)
        ? (0, i.mMO)(async () => {
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
        : (0, i.mMO)(async () => {
              let { default: t } = await n.e("11487").then(n.bind(n, 792866));
              return (a) =>
                  (0, r.jsx)(t, {
                      ...a,
                      header: o.intl.string(o.t.XLw6FF),
                      body: o.intl.string(o.t.wVjKGi),
                      confirmText: o.intl.string(o.t["BK8LK+"]),
                      onConfirm: () => {
                          e?.(),
                              (0, i.mMO)(async () => {
                                  let { default: e } = await Promise.all([n.e("56423"), n.e("25280")]).then(
                                      n.bind(n, 987482),
                                  );
                                  return (t) => (0, r.jsx)(e, { source: "Video unsupported browser", ...t });
                              });
                      },
                  });
          });
}
