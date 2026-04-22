i.d(t, { A: () => d });
var n = i(627968);
i(64700);
var l = i(683071),
    s = i(735321),
    a = i(985018),
    r = i(529523);
function d(e) {
    let { widgetType: t, gameCount: i } = e,
        d = (0, s.cv)(t);
    return i <= d
        ? null
        : (0, n.jsx)("div", {
              role: "alert",
              className: r.l,
              children: (0, n.jsx)(l.w, {
                  type: "warning",
                  children: a.intl.formatToPlainString(a.t.Rv3wYq, { maxGames: d }),
              }),
          });
}
