n.d(t, { r: () => o }), n(388685);
var a = n(54381),
    l = n(473749),
    r = n(481060),
    i = n(259580),
    s = n(547481);
function o(e) {
    let { title: t, initExpanded: n, highlight: o, children: c } = e,
        [d, u] = l.useState(n),
        m = l.useCallback(() => {
            u(!d);
        }, [d]),
        p = o ? "status-warning" : "text-default";
    return null == c
        ? (0, a.jsx)("div", {
              className: s.settingNode,
              children: (0, a.jsx)(r.Text, {
                  variant: "text-md/normal",
                  color: p,
                  children: t,
              }),
          })
        : (0, a.jsxs)("div", {
              className: s.settingNode,
              children: [
                  (0, a.jsxs)(r.P3F, {
                      className: s.headerBar,
                      onClick: m,
                      children: [
                          (0, a.jsx)(r.Text, {
                              variant: "text-md/bold",
                              color: p,
                              children: t,
                          }),
                          (0, a.jsx)(i.Z, {
                              direction: d ? i.Z.Directions.DOWN : i.Z.Directions.RIGHT,
                              className: s.headerCaret,
                          }),
                      ],
                  }),
                  d &&
                      (0, a.jsx)("div", {
                          className: s.settingNodeChildren,
                          children: c,
                      }),
              ],
          });
}
