"use strict";
n.d(t, { W: () => d, s: () => _ });
var i = n(627968);
n(64700);
var r = n(17928),
    s = n(192308),
    a = n(477782),
    o = n(20805),
    l = n(287809),
    u = n(301736),
    c = n(375708);
function d(e) {
    return (0, o.zD)(e)
        ? c.intl.string(c.t["4f8iut"])
        : (0, o.Lf)(e)
          ? c.intl.string(c.t.yX2hNy)
          : (0, o.fe)(e)
            ? c.intl.string(c.t.oSs8eg)
            : c.intl.string(c.t.bK9GT1);
}
function _(e) {
    let { user: t, entry: c, display: _, onAction: f } = e,
        h = (0, u.A)(),
        p = (0, r.bG)([l.default], () => l.default.getCurrentUser());
    return t.id === p?.id && "recent" === _ && (0, o.$R)(c)
        ? (0, i.jsx)(a.Dr, {
              id: "delete-entry-history",
              label: d(c),
              action: () => {
                  f?.({ action: "PRESS_DELETE_HISTORY_MENU_ITEM" }),
                      (0, s.openModalLazy)(async () => {
                          let { default: e } = await Promise.all([
                              n.e("77791"),
                              n.e("28152"),
                              n.e("19119"),
                              n.e("14565"),
                          ]).then(n.bind(n, 839785));
                          return (n) => (0, i.jsx)(e, { entry: c, user: t, onAction: f, onOpenGameSettings: h, ...n });
                      });
              },
              color: "danger",
          })
        : null;
}
