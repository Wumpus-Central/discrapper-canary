n.d(t, { r: () => s }), n(388685);
var a = n(951288),
    r = n(647438),
    i = n(481060),
    l = n(259580),
    o = n(547481);
function s(e) {
    let { title: t, initExpanded: n, highlight: s, children: c } = e,
        [d, u] = r.useState(n),
        m = r.useCallback(() => {
            u(!d);
        }, [d]),
        p = s ? "status-warning" : "text-default";
    return null == c
        ? (0, a.jsx)("div", {
              className: o.settingNode,
              children: (0, a.jsx)(i.Text, {
                  variant: "text-md/normal",
                  color: p,
                  children: t,
              }),
          })
        : (0, a.jsxs)("div", {
              className: o.settingNode,
              children: [
                  (0, a.jsxs)(i.P3F, {
                      className: o.headerBar,
                      onClick: m,
                      children: [
                          (0, a.jsx)(i.Text, {
                              variant: "text-md/bold",
                              color: p,
                              children: t,
                          }),
                          (0, a.jsx)(l.Z, {
                              direction: d ? l.Z.Directions.DOWN : l.Z.Directions.RIGHT,
                              className: o.headerCaret,
                          }),
                      ],
                  }),
                  d &&
                      (0, a.jsx)("div", {
                          className: o.settingNodeChildren,
                          children: c,
                      }),
              ],
          });
}
