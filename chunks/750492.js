n.d(t, {
    A: () => o,
});
var r = n(627968);
n(64700);
var l = n(158954),
    i = n(735321),
    a = n(985018),
    s = n(997338);

function o(e) {
    let { widgetType: t, gameCount: n } = e,
        o = (0, i.cv)(t);
    return n <= o
        ? null
        : (0, r.jsx)("div", {
              role: "alert",
              className: s.l,
              children: (0, r.jsx)(l.wx6, {
                  type: "warning",
                  children: a.intl.formatToPlainString(a.t.Rv3wYq, {
                      maxGames: o,
                  }),
              }),
          });
}
