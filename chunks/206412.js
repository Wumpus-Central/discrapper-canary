n.d(t, { r: () => o }), n(388685);
var a = n(54381),
    r = n(473749),
    i = n(481060),
    l = n(259580),
    s = n(211339);
function o(e) {
    let { title: t, initExpanded: n, highlight: o, children: c } = e,
        [d, u] = r.useState(n),
        m = r.useCallback(() => {
            u(!d);
        }, [d]),
        p = o ? "status-warning" : "text-default";
    return null == c
        ? (0, a.jsx)("div", {
              className: s.settingNode,
              children: (0, a.jsx)(i.Text, {
                  variant: "text-md/normal",
                  color: p,
                  children: t,
              }),
          })
        : (0, a.jsxs)("div", {
              className: s.settingNode,
              children: [
                  (0, a.jsxs)(i.P3F, {
                      className: s.headerBar,
                      onClick: m,
                      children: [
                          (0, a.jsx)(i.Text, {
                              variant: "text-md/bold",
                              color: p,
                              children: t,
                          }),
                          (0, a.jsx)(l.Z, {
                              direction: d ? l.Z.Directions.DOWN : l.Z.Directions.RIGHT,
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
