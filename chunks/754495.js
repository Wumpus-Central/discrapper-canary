e.d(n, { W: () => d, s: () => A });
var i = e(627968);
e(64700);
var l = e(17928),
    a = e(192308),
    r = e(477782),
    s = e(20805),
    o = e(287809),
    c = e(301736),
    u = e(985018);
function d(t) {
    return (0, s.zD)(t)
        ? u.intl.string(u.t["4f8iut"])
        : (0, s.Lf)(t)
          ? u.intl.string(u.t.yX2hNy)
          : (0, s.fe)(t)
            ? u.intl.string(u.t.oSs8eg)
            : u.intl.string(u.t.bK9GT1);
}
function A(t) {
    let { user: n, entry: u, display: A, onAction: x } = t,
        p = (0, c.A)(),
        f = (0, l.bG)([o.default], () => o.default.getCurrentUser());
    return n.id === f?.id && "recent" === A && (0, s.$R)(u)
        ? (0, i.jsx)(r.Dr, {
              id: "delete-entry-history",
              label: d(u),
              action: () => {
                  x?.({ action: "PRESS_DELETE_HISTORY_MENU_ITEM" }),
                      (0, a.openModalLazy)(async () => {
                          let { default: t } = await Promise.all([
                              e.e("77791"),
                              e.e("28152"),
                              e.e("19119"),
                              e.e("14565"),
                          ]).then(e.bind(e, 839785));
                          return (e) => (0, i.jsx)(t, { entry: u, user: n, onAction: x, onOpenGameSettings: p, ...e });
                      });
              },
              color: "danger",
          })
        : null;
}
