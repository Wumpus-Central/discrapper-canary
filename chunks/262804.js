n.d(t, { Z: () => c });
var r = n(54381);
n(473749);
var i = n(793030),
    a = n(86419),
    l = n(388032),
    o = n(804116);
function c(e) {
    let { widgetType: t, gameCount: n } = e,
        c = (0, a.Gv)(t);
    return n <= c
        ? null
        : (0, r.jsx)("div", {
              role: "alert",
              className: o.notice,
              children: (0, r.jsx)(i.M14, {
                  type: "warning",
                  children: l.intl.formatToPlainString(l.t.Rv3wYq, { maxGames: c }),
              }),
          });
}
