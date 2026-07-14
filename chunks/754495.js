"use strict";
n.d(t, { W: () => u, s: () => _ });
var i = n(627968);
n(64700);
var r = n(17928),
    a = n(192308),
    s = n(477782),
    l = n(20805),
    o = n(287809),
    d = n(301736),
    c = n(375708);
function u(e) {
    return (0, l.zD)(e)
        ? c.intl.string(c.t["4f8iut"])
        : (0, l.Lf)(e)
          ? c.intl.string(c.t.yX2hNy)
          : (0, l.fe)(e)
            ? c.intl.string(c.t.oSs8eg)
            : c.intl.string(c.t.bK9GT1);
}
function _(e) {
    let { user: t, entry: c, display: _, onAction: E } = e,
        A = (0, d.A)(),
        h = (0, r.bG)([o.default], () => o.default.getCurrentUser());
    return t.id === h?.id && "recent" === _ && (0, l.$R)(c)
        ? (0, i.jsx)(s.Dr, {
              id: "delete-entry-history",
              label: u(c),
              action: () => {
                  E?.({ action: "PRESS_DELETE_HISTORY_MENU_ITEM" }),
                      (0, a.openModalLazy)(async () => {
                          let { default: e } = await Promise.all([n.e("77791"), n.e("19119"), n.e("14565")]).then(
                              n.bind(n, 839785),
                          );
                          return (n) => (0, i.jsx)(e, { entry: c, user: t, onAction: E, onOpenGameSettings: A, ...n });
                      });
              },
              color: "danger",
          })
        : null;
}
