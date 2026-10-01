n.d(e, { W: () => d, s: () => A });
var l = n(477900);
n(582128);
var i = n(17928),
    a = n(192308),
    r = n(477782),
    s = n(20805),
    o = n(287809),
    c = n(301736),
    u = n(375708);
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
    let { user: e, entry: u, display: A, onAction: f } = t,
        p = (0, c.A)(),
        g = (0, i.bG)([o.default], () => o.default.getCurrentUser());
    return e.id === g?.id && "recent" === A && (0, s.$R)(u)
        ? (0, l.jsx)(r.Dr, {
              id: "delete-entry-history",
              label: d(u),
              action: () => {
                  (f?.({ action: "PRESS_DELETE_HISTORY_MENU_ITEM" }),
                      (0, s.$R)(u) &&
                          (0, a.openModalLazy)(async () => {
                              let { default: t } = await Promise.all([
                                  n.e("677624"),
                                  n.e("165291"),
                                  n.e("796668"),
                                  n.e("492936"),
                                  n.e("350949"),
                                  n.e("114633"),
                                  n.e("842775"),
                                  n.e("819119"),
                                  n.e("69658"),
                                  n.e("436946"),
                              ]).then(n.bind(n, 839785));
                              return (n) =>
                                  (0, l.jsx)(t, { entry: u, user: e, onAction: f, onOpenGameSettings: p, ...n });
                          }));
              },
              color: "danger",
          })
        : null;
}
