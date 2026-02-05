n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var l = n(158954),
    a = n(735321),
    r = n(985018),
    s = n(997338);
function o(e) {
    let { widgetType: t, gameCount: n } = e,
        o = (0, a.cv)(t);
    return n <= o
        ? null
        : (0, i.jsx)("div", {
              role: "alert",
              className: s.l,
              children: (0, i.jsx)(l.wx6, {
                  type: "warning",
                  children: r.intl.formatToPlainString(r.t.Rv3wYq, { maxGames: o }),
              }),
          });
}
