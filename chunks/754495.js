e.d(n, { W: () => d, s: () => A });
var l = e(477900);
e(582128);
var i = e(17928),
    a = e(192308),
    r = e(477782),
    s = e(20805),
    o = e(287809),
    c = e(301736),
    u = e(105292);
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
    let { user: n, entry: u, display: A, onAction: f } = t,
        g = (0, c.A)(),
        m = (0, i.bG)([o.default], () => o.default.getCurrentUser());
    return n.id === m?.id && "recent" === A && (0, s.$R)(u)
        ? (0, l.jsx)(r.Dr, {
              id: "delete-entry-history",
              label: d(u),
              action: () => {
                  (f?.({ action: "PRESS_DELETE_HISTORY_MENU_ITEM" }),
                      (0, s.$R)(u) &&
                          (0, a.openModalLazy)(async () => {
                              let { default: t } = await Promise.all([
                                  e.e("677624"),
                                  e.e("165291"),
                                  e.e("796668"),
                                  e.e("492936"),
                                  e.e("350949"),
                                  e.e("114633"),
                                  e.e("842775"),
                                  e.e("819119"),
                                  e.e("69658"),
                                  e.e("436946"),
                              ]).then(e.bind(e, 839785));
                              return (e) =>
                                  (0, l.jsx)(t, { entry: u, user: n, onAction: f, onOpenGameSettings: g, ...e });
                          }));
              },
              color: "danger",
          })
        : null;
}
